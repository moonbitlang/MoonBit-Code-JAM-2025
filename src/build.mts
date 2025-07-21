import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  readFileSync,
  writeFileSync,
} from "fs";

if (existsSync("dist")) {
  rmSync("dist", { recursive: true });
}

mkdirSync("dist");

// 定义游戏元数据接口
interface GameMetadata {
  id: string;
  title: string;
  teamName: string;
  description: string;
  controls: string[];
  icon: string;
  artifactPath: string;
}

// 收集游戏元数据
const gamesMetadata: GameMetadata[] = [];
const teams = readdirSync("teams");

for (const team of teams) {
  const artifact = `teams/${team}/artifact`;
  const readmePath = `teams/${team}/README.md`;

  // 复制游戏文件
  cpSync(artifact, `dist/${team}/artifact`, { recursive: true });

  // 读取README文件获取游戏信息
  if (existsSync(readmePath)) {
    const readmeContent = readFileSync(readmePath, "utf-8");

    // 解析游戏信息
    const gameInfo = parseGameInfo(team, readmeContent);
    gamesMetadata.push(gameInfo);
  }
}

// 读取HTML模板
let htmlContent = readFileSync("src/index.html", "utf-8");

// 将游戏元数据注入HTML
const metadataScript = `
<script>
window.GAMES_METADATA = ${JSON.stringify(gamesMetadata, null, 2)};
</script>`;

// 在</head>之前插入元数据
htmlContent = htmlContent.replace("</head>", `${metadataScript}\n</head>`);

// 写入生成的HTML文件
writeFileSync("dist/index.html", htmlContent);

// 解析游戏信息的函数
function parseGameInfo(teamId: string, readmeContent: string): GameMetadata {
  const lines = readmeContent.split("\n");
  let title = "";
  let description = "";
  const controls: string[] = [];

  // 提取标题（第一个#标题）
  const titleMatch = readmeContent.match(/^#\s+(.+)$/m);
  if (titleMatch) {
    title = titleMatch[1].trim();
  }

  // 提取描述（标题后第一个非空行）
  let foundTitle = false;
  for (const line of lines) {
    if (line.startsWith("#")) {
      foundTitle = true;
      continue;
    }
    if (
      foundTitle &&
      line.trim() &&
      !line.startsWith("-") &&
      !line.includes("控制")
    ) {
      description = line.trim();
      break;
    }
  }

  // 提取控制说明
  let inControlsSection = false;
  for (const line of lines) {
    if (line.includes("控制") || line.includes("操作")) {
      inControlsSection = true;
      continue;
    }
    if (inControlsSection && line.trim().startsWith("-")) {
      const control = line.replace(/^\s*-\s*/, "").trim();
      if (control) {
        controls.push(control);
      }
    } else if (inControlsSection && line.trim() === "") {
      // 空行结束控制部分
      break;
    }
  }

  // 如果没有找到控制信息，为方块游戏添加默认控制说明
  if (controls.length === 0 && title.includes("方块")) {
    controls.push("空格键：开始游戏 / 重新开始");
    controls.push("←→↓：控制方块移动");
    controls.push("↑：旋转方块");
  }

  // 生成团队显示名称
  const teamDisplayName = teamId.includes("官方")
    ? "MoonBit官方团队"
    : teamId.replace(/^\d+x\d+-/, "").replace(/-/g, " ");

  // 选择合适的图标
  const icon = getGameIcon(title, description);

  return {
    id: teamId,
    title: title || "未知游戏",
    teamName: teamDisplayName,
    description:
      description ||
      (title.includes("方块")
        ? "经典的俄罗斯方块游戏重制版，使用 MoonBit 语言精心打造。体验流畅的方块下落和消除机制，挑战你的反应速度和空间思维能力！"
        : `使用 MoonBit 语言开发的精彩游戏作品。`),
    controls: controls,
    icon: icon,
    artifactPath: `/${teamId}/artifact/index.html`,
  };
}

// 根据游戏内容选择图标
function getGameIcon(title: string, description: string): string {
  const content = (title + " " + description).toLowerCase();

  if (
    content.includes("方块") ||
    content.includes("tetris") ||
    content.includes("俄罗斯")
  ) {
    return "🧩";
  }
  if (content.includes("射击") || content.includes("shoot")) {
    return "🎯";
  }
  if (
    content.includes("跑酷") ||
    content.includes("跳跃") ||
    content.includes("platform")
  ) {
    return "🏃";
  }
  if (content.includes("拼图") || content.includes("puzzle")) {
    return "🧩";
  }
  if (content.includes("赛车") || content.includes("racing")) {
    return "🏎️";
  }
  if (content.includes("冒险") || content.includes("adventure")) {
    return "⚔️";
  }
  if (content.includes("策略") || content.includes("strategy")) {
    return "🧠";
  }

  // 默认图标
  return "🎮";
}
