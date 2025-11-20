#!/usr/bin/env tsx
import { promises as fs } from "fs";
import path from "path";
import { marked, Token } from "marked";
import MarkdownIt from "markdown-it";

interface GameMetaRaw {
  id: string;
  title: string;
  teamName: string;
  gameIntro: string; // raw markdown content
  operations: string; // raw markdown content
  features: string; // raw markdown content
  teamInfo: string; // raw markdown content
  artifactPath: string; // relative (url-encoded) path to artifact/index.html
  isFinalist?: boolean; // Whether this team is in the finals
  award?: {
    name: string;
    icon: string;
    color: string;
  };
}

interface Award {
  name: string;
  icon: string;
  color: string;
  gameId: string;
}

const ROOT = process.cwd();
const TEAMS_DIR = path.join(ROOT, "teams");
const DIST_DIR = path.join(ROOT, "dist");
const TEMPLATE_PATH = path.join(ROOT, "src", "template", "index.html");
const AWARDS_PATH = path.join(ROOT, "awards.json");
const FINAL_PATH = path.join(ROOT, "final.json");

// Read awards data
async function readAwards(): Promise<{
  awardsMap: Record<string, Award>;
  awardOrder: string[];
}> {
  try {
    const awardsData = await fs.readFile(AWARDS_PATH, "utf8");
    const awards = JSON.parse(awardsData).awards as Award[];
    const awardsMap: Record<string, Award> = {};
    const awardOrder: string[] = [];
    awards.forEach((award) => {
      awardsMap[award.gameId] = award;
      awardOrder.push(award.gameId);
    });
    return { awardsMap, awardOrder };
  } catch (error) {
    console.warn("Awards file not found or invalid, proceeding without awards");
    return { awardsMap: {}, awardOrder: [] };
  }
}

// Read finalists data
async function readFinalists(): Promise<{
  finalistsSet: Set<string>;
  finalistOrder: string[];
}> {
  try {
    const finalistsData = await fs.readFile(FINAL_PATH, "utf8");
    const finalists = JSON.parse(finalistsData) as string[];
    return {
      finalistsSet: new Set(finalists),
      finalistOrder: finalists,
    };
  } catch (error) {
    console.warn(
      "Finalists file not found or invalid, proceeding without finalists",
    );
    return {
      finalistsSet: new Set(),
      finalistOrder: [],
    };
  }
}

// Initialize markdown-it renderer
const md = new MarkdownIt({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: "language-", // CSS language prefix for fenced blocks
  linkify: true, // Disable autoconvert URL-like text to links to prevent nested <a> tags
  typographer: true, // Enable some language-neutral replacement + quotes beautification
});

async function rimraf(target: string) {
  await fs.rm(target, { recursive: true, force: true });
}

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

function parseMarkdownSections(md: string): Record<string, Token[]> {
  // Parse markdown into AST
  const tokens = marked.lexer(md);
  const sections: Record<string, Token[]> = {};
  let currentSection: string | null = null;
  let currentTokens: Token[] = [];

  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 2) {
      // Save previous section if exists
      if (currentSection) {
        sections[currentSection] = [...currentTokens];
      }
      // Start new section
      currentSection = token.text.trim();
      currentTokens = [];
    } else if (currentSection) {
      // Add token to current section
      currentTokens.push(token);
    }
  }

  // Save last section
  if (currentSection) {
    sections[currentSection] = [...currentTokens];
  }

  return sections;
}

function extractListFromTokens(tokens: Token[]): string[] {
  const items: string[] = [];

  for (const token of tokens) {
    if (token.type === "list") {
      for (const item of token.items) {
        // Use the item's text property directly or extract from tokens
        const itemText = item.text || extractTextFromTokens(item.tokens);
        if (itemText.trim()) {
          items.push(itemText.trim());
        }
      }
    } else if (token.type === "paragraph") {
      // Use token's text property or extract from tokens
      const text = token.text || extractTextFromTokens([token]);
      // Check if it looks like a list item (starts with bullet point)
      const lines = text.split("\n").filter((line: string) => line.trim());
      for (const line of lines) {
        const match = line.match(/^(?:[-*+]|•)\s*(.+)$/);
        if (match) {
          items.push(match[1].trim());
        } else if (line.trim() && !items.length) {
          // If no list markers found, treat as regular text
          items.push(line.trim());
        }
      }
    }
  }

  return items;
}

function extractTextFromTokens(tokens: Token[]): string {
  // Use tokens' text property or raw property when available
  return tokens
    .map((token) => {
      // Prefer 'text' property for clean text, fallback to 'raw' for original content
      if ("text" in token && token.text) {
        return token.text;
      }
      if ("raw" in token && token.raw) {
        return token.raw;
      }
      // Recursively handle nested tokens
      if ("tokens" in token && Array.isArray(token.tokens)) {
        return extractTextFromTokens(token.tokens);
      }
      return "";
    })
    .join("")
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();
}

function extractTeamNameFromTokens(tokens: Token[]): string {
  const items = extractListFromTokens(tokens);

  for (const item of items) {
    const match = item.match(/团队名称[:：]\s*(.+)$/);
    if (match) {
      return match[1].trim();
    }
  }

  // Fallback: check all tokens' raw content
  const allText = tokens.map((token) => token.raw || "").join("");
  const lines = allText.split("\n");
  for (const line of lines) {
    const match = line.match(/团队名称[:：]\s*(.+)$/);
    if (match) {
      return match[1].trim();
    }
  }

  return "";
}

function extractTitleFromTokens(tokens: Token[]): string {
  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 1) {
      return token.text.trim();
    }
  }
  return "";
}

function extractRawMarkdownFromTokens(tokens: Token[]): string {
  // Use the 'raw' property from tokens to reconstruct original markdown
  // This is much more reliable than manually reconstructing markdown
  return tokens
    .map((token) => token.raw || "")
    .join("")
    .trim();
}

async function readGame(
  readmePath: string,
  dirName: string,
): Promise<Omit<GameMetaRaw, "artifactPath">> {
  const md = await fs.readFile(readmePath, "utf8");

  // Parse markdown into AST
  const tokens = marked.lexer(md);

  // Extract title from H1 heading
  const title =
    extractTitleFromTokens(tokens) ||
    dirName.split("-").slice(-1)[0] ||
    dirName;

  // Parse sections by H2 headings
  const sections = parseMarkdownSections(md);

  // Extract content from each section
  const gameIntro = sections["游戏简介"]
    ? extractRawMarkdownFromTokens(sections["游戏简介"])
    : "";

  const operations = sections["操作说明"]
    ? extractRawMarkdownFromTokens(sections["操作说明"])
    : "";

  const features = sections["技术特色"]
    ? extractRawMarkdownFromTokens(sections["技术特色"])
    : "";

  const teamInfoTokens = sections["团队信息"] || [];
  const teamInfo = extractRawMarkdownFromTokens(teamInfoTokens);

  const teamName =
    extractTeamNameFromTokens(teamInfoTokens) ||
    dirName.split("-")[1] ||
    "未知团队";

  return {
    id: dirName,
    title,
    teamName,
    gameIntro,
    operations,
    features,
    teamInfo,
  };
}

function encodePathSegment(segment: string) {
  return encodeURIComponent(segment);
}

function buildArtifactRelativePath(teamId: string): string {
  return `${encodePathSegment(teamId)}/artifact/index.html`;
}

async function renderIndexHtml(
  games: GameMetaRaw[],
  awardOrder: string[],
  finalistOrder: string[],
): Promise<string> {
  const tpl = await fs.readFile(TEMPLATE_PATH, "utf8");

  // Sort games with priority:
  // 1. Both finalist AND award winner (by awards.json order)
  // 2. Only finalist (by final.json order)
  // 3. Only award winner (by awards.json order)
  // 4. Others (keep original order)
  const sortedGames = [...games].sort((a, b) => {
    const aIsFinalist = !!a.isFinalist;
    const bIsFinalist = !!b.isFinalist;
    const aHasAward = !!a.award;
    const bHasAward = !!b.award;

    const aIsBoth = aIsFinalist && aHasAward;
    const bIsBoth = bIsFinalist && bHasAward;

    // Both have finalist+award: sort by awards.json order
    if (aIsBoth && bIsBoth) {
      const aIndex = awardOrder.indexOf(a.id);
      const bIndex = awardOrder.indexOf(b.id);
      return aIndex - bIndex;
    }

    // One has both: that one comes first
    if (aIsBoth && !bIsBoth) return -1;
    if (!aIsBoth && bIsBoth) return 1;

    // Both are finalists only: sort by final.json order
    if (aIsFinalist && bIsFinalist && !aHasAward && !bHasAward) {
      const aIndex = finalistOrder.indexOf(a.id);
      const bIndex = finalistOrder.indexOf(b.id);
      return aIndex - bIndex;
    }

    // One is finalist only: finalist comes first
    if (aIsFinalist && !aHasAward && !(bIsFinalist && !bHasAward)) return -1;
    if (bIsFinalist && !bHasAward && !(aIsFinalist && !aHasAward)) return 1;

    // Both have awards only: sort by awards.json order
    if (aHasAward && bHasAward && !aIsFinalist && !bIsFinalist) {
      const aIndex = awardOrder.indexOf(a.id);
      const bIndex = awardOrder.indexOf(b.id);
      return aIndex - bIndex;
    }

    // One has award only: award winner comes first
    if (aHasAward && !aIsFinalist && !(bHasAward && !bIsFinalist)) return -1;
    if (bHasAward && !bIsFinalist && !(aHasAward && !aIsFinalist)) return 1;

    // Neither has award or finalist: keep original order
    return 0;
  });

  const metadataJson = JSON.stringify(sortedGames, null, 2);

  // Function to render markdown content to HTML using markdown-it
  const renderMarkdown = (markdown: string) => {
    if (!markdown.trim()) return "<p>暂无</p>";
    return md.render(markdown);
  };

  const cards = sortedGames
    .map((g) => {
      const intro = renderMarkdown(g.gameIntro);
      const operations = renderMarkdown(g.operations);
      const features = renderMarkdown(g.features);
      const teamInfo = renderMarkdown(g.teamInfo);

      // Generate award badge if game has an award
      const awardBadge = g.award
        ? `<div class="award-badge" style="background: linear-gradient(135deg, ${g.award.color}, ${g.award.color}dd);">
             <span class="award-icon">${g.award.icon}</span>
             <span class="award-text">${g.award.name}</span>
           </div>`
        : "";

      // Generate finalist badge if team is in finals
      const finalistBadge = g.isFinalist
        ? `<div class="award-badge finalist-badge" style="background: linear-gradient(135deg, #FFD700, #FFA500);">
             <span class="award-icon">🏅</span>
             <span class="award-text">决赛入围</span>
           </div>`
        : "";

      // Escape quotes for data attributes
      const escapeQuotes = (str: string) =>
        str.replace(/"/g, "&quot;").replace(/'/g, "&#39;");

      return `<div class="game-card-container"
        data-game-id="${g.id}"
        data-title="${escapeQuotes(g.title)}"
        data-team-name="${escapeQuotes(g.teamName)}"
        data-game-intro="${escapeQuotes(intro)}"
        data-operations="${escapeQuotes(operations)}"
        data-features="${escapeQuotes(features)}"
        data-team-info="${escapeQuotes(teamInfo)}"
        data-artifact-path="${g.artifactPath}">
      <div class="game-card ${g.award ? "award-winner" : ""} ${
        g.isFinalist ? "finalist" : ""
      }">
        ${finalistBadge}${awardBadge}
        <h3 class="game-title">${md.renderInline(g.title)}</h3>
        <div class="team-name">🏆 ${md.renderInline(g.teamName)}</div>
        <div class="section"><h4>游戏简介</h4>${intro}</div>
        <div class="card-actions">
          <button class="details-button">📖 查看详情</button>
          <a href="${
            g.artifactPath
          }" class="play-button" target="_blank">▶️ 立即游玩</a>
        </div>
      </div>
    </div>`;
    })
    .join("\n");
  return tpl
    .replace("__GAMES_METADATA__", metadataJson)
    .replace("__GAME_CARDS__", cards)
    .replace("__GAME_COUNT__", String(games.length))
    .replace("__TEAM_COUNT__", String(games.length));
}

async function copyArtifacts(teamDir: string, distTeamDir: string) {
  const srcArtifact = path.join(teamDir, "artifact");
  try {
    const stat = await fs.stat(srcArtifact);
    if (!stat.isDirectory()) return false;
  } catch {
    return false;
  }
  await ensureDir(distTeamDir);
  const destArtifact = path.join(distTeamDir, "artifact");
  await fs.cp(srcArtifact, destArtifact, { recursive: true });
  return true;
}

async function build() {
  await rimraf(DIST_DIR);
  await ensureDir(DIST_DIR);

  // Read awards data
  const { awardsMap, awardOrder } = await readAwards();

  // Read finalists data
  const { finalistsSet, finalistOrder } = await readFinalists();

  const teamEntries = await fs.readdir(TEAMS_DIR, { withFileTypes: true });
  const games: GameMetaRaw[] = [];
  for (const entry of teamEntries) {
    if (!entry.isDirectory()) continue;
    const dirName = entry.name;
    const teamDir = path.join(TEAMS_DIR, dirName);
    const readmePath = path.join(teamDir, "README.md");
    try {
      await fs.access(readmePath);
    } catch {
      // skip if no README
      continue;
    }
    const baseData = await readGame(readmePath, dirName);
    const distTeamDir = path.join(DIST_DIR, dirName);
    const copied = await copyArtifacts(teamDir, distTeamDir);
    if (!copied) continue; // must have artifact
    const artifactPath = buildArtifactRelativePath(dirName);

    // Check if this game has an award
    const award = awardsMap[dirName];
    // Check if this team is a finalist
    const isFinalist = finalistsSet.has(dirName);
    const gameData: GameMetaRaw = {
      ...baseData,
      artifactPath,
      ...(isFinalist && { isFinalist: true }),
      ...(award && {
        award: { name: award.name, icon: award.icon, color: award.color },
      }),
    };

    games.push(gameData);
  }
  const html = await renderIndexHtml(games, awardOrder, finalistOrder);
  await fs.writeFile(path.join(DIST_DIR, "index.html"), html, "utf8");
  console.log(`Built ${games.length} games into dist/`);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
