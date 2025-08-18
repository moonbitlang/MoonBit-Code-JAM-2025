#!/usr/bin/env tsx
import { promises as fs } from "fs";
import path from "path";

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

function splitSections(md: string): Record<string, string> {
  // Normalize line endings
  md = md.replace(/\r\n?/g, "\n");
  const lines = md.split("\n");
  let current: string | null = null;
  const map: Record<string, string[]> = {};
  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading) {
      current = heading[1].trim();
      if (!map[current]) map[current] = [];
      continue;
    }
    if (current) map[current].push(line);
  }
  const out: Record<string, string> = {};
  for (const [k, arr] of Object.entries(map)) {
    out[k] = arr.join("\n").trim();
  }
  return out;
}

function extractList(section: string | undefined): string[] {
  if (!section) return [];
  const lines = section
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);
  const items: string[] = [];
  for (const l of lines) {
    const m = l.match(/^(?:[-*+]|•)\s*(.+)$/);
    if (m) items.push(m[1].trim());
    else if (l) items.push(l); // fallback
  }
  return items;
}

function extractTeamName(teamInfoLines: string[]): string {
  for (const l of teamInfoLines) {
    const m = l.match(/团队名称[:：]\s*(.+)$/);
    if (m) return m[1].trim();
  }
  return "";
}

async function readGame(
  readmePath: string,
  dirName: string,
): Promise<Omit<GameMetaRaw, "artifactPath">> {
  const md = await fs.readFile(readmePath, "utf8");
  const titleMatch = md.match(/^#\s+(.+?)\s*$/m);
  const title = titleMatch
    ? titleMatch[1].trim()
    : dirName.split("-").slice(-1)[0] || dirName;
  const sections = splitSections(md);
  const gameIntro = sections["游戏简介"] || "";
  const operations = extractList(sections["操作说明"]);
  const features = extractList(sections["技术特色"]);
  const teamInfoItems = extractList(sections["团队信息"]);
  const teamName =
    extractTeamName(teamInfoItems) || dirName.split("-")[1] || "未知团队";
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
