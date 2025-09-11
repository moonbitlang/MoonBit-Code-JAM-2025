#!/usr/bin/env tsx
import { promises as fs } from "fs";
import path from "path";
import { marked, Token } from "marked";

interface GameMetaRaw {
  id: string;
  title: string;
  teamName: string;
  gameIntro: string;
  operations: string[];
  features: string[];
  teamInfo: string[];
  artifactPath: string; // relative (url-encoded) path to artifact/index.html
}

const ROOT = process.cwd();
const TEAMS_DIR = path.join(ROOT, "teams");
const DIST_DIR = path.join(ROOT, "dist");
const TEMPLATE_PATH = path.join(ROOT, "src", "template", "index.html");

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
        // Extract text from list item tokens
        const itemText = extractTextFromTokens(item.tokens);
        if (itemText.trim()) {
          items.push(itemText.trim());
        }
      }
    } else if (token.type === "paragraph") {
      // Handle paragraphs that might contain list-like content
      const text = extractTextFromTokens([token]);
      // Check if it looks like a list item (starts with bullet point)
      const lines = text.split("\n").filter((line) => line.trim());
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
  let text = "";

  for (const token of tokens) {
    switch (token.type) {
      case "text":
        text += token.text;
        break;
      case "paragraph":
        text += extractTextFromTokens(token.tokens || []);
        break;
      case "strong":
      case "em":
        text += extractTextFromTokens(token.tokens || []);
        break;
      case "link":
        text += token.text || token.href;
        break;
      case "code":
        text += token.text;
        break;
      case "codespan":
        text += token.text;
        break;
      case "space":
        text += " ";
        break;
      case "br":
        text += "\n";
        break;
      default:
        // For other token types, try to extract text if available
        if ("text" in token) {
          text += (token as any).text;
        } else if ("tokens" in token && Array.isArray((token as any).tokens)) {
          text += extractTextFromTokens((token as any).tokens);
        }
    }
  }

  return text;
}

function extractTeamNameFromTokens(tokens: Token[]): string {
  const items = extractListFromTokens(tokens);

  for (const item of items) {
    const match = item.match(/团队名称[:：]\s*(.+)$/);
    if (match) {
      return match[1].trim();
    }
  }

  // Fallback: check if any token contains team name
  const allText = extractTextFromTokens(tokens);
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
    ? extractTextFromTokens(sections["游戏简介"]).trim()
    : "";

  const operations = sections["操作说明"]
    ? extractListFromTokens(sections["操作说明"])
    : [];

  const features = sections["技术特色"]
    ? extractListFromTokens(sections["技术特色"])
    : [];

  const teamInfoTokens = sections["团队信息"] || [];
  const teamInfoItems = extractListFromTokens(teamInfoTokens);

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
    teamInfo: teamInfoItems,
  };
}

function encodePathSegment(segment: string) {
  return encodeURIComponent(segment);
}

function buildArtifactRelativePath(teamId: string): string {
  return `${encodePathSegment(teamId)}/artifact/index.html`;
}

async function renderIndexHtml(games: GameMetaRaw[]): Promise<string> {
  const tpl = await fs.readFile(TEMPLATE_PATH, "utf8");
  const metadataJson = JSON.stringify(games, null, 2);
  const escapeHtml = (s: string) => s.replace(/</g, "&lt;");
  const list = (arr: string[]) =>
    arr.length
      ? "<ul>" +
        arr.map((i) => "<li>" + escapeHtml(i) + "</li>").join("") +
        "</ul>"
      : "<p>暂无</p>";
  const cards = games
    .map((g) => {
      const intro = g.gameIntro
        ? "<p>" + escapeHtml(g.gameIntro).replace(/\n+/g, "<br>") + "</p>"
        : "<p>暂无</p>";
      return `<a class="game-card-link" href="${g.artifactPath}">
      <div class="game-card">
        <h3 class="game-title">${escapeHtml(g.title)}</h3>
        <div class="team-name">🏆 ${escapeHtml(g.teamName)}</div>
        <div class="section"><h4>游戏简介</h4>${intro}</div>
        <div class="section"><h4>操作说明</h4>${list(g.operations)}</div>
        <div class="section"><h4>技术特色</h4>${list(g.features)}</div>
        <div class="section"><h4>团队信息</h4>${list(g.teamInfo)}</div>
        <div class="play-button">▶️ 立即游玩</div>
      </div>
    </a>`;
    })
    .join("");
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
    games.push({ ...baseData, artifactPath });
  }
  const html = await renderIndexHtml(games);
  await fs.writeFile(path.join(DIST_DIR, "index.html"), html, "utf8");
  console.log(`Built ${games.length} games into dist/`);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
