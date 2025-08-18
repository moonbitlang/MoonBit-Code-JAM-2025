# MoonBit Code JAM 2025 展示站点 - 架构与现状概览

更新时间：2025-08-18

## 总览

本仓库用于从 `teams/` 目录下的参赛团队提交中自动生成一个**可部署到任意子路径（如 GitHub Pages 仓库子目录）**的纯静态展示首页，并保留每个团队提供的 `artifact` 目录原貌（其中包含 `index.html` 或运行入口）。构建输出放在 `dist/` 目录，核心只有一个 TypeScript 构建脚本 `src/build.mts` + 一个 HTML 模板 `src/template/index.html`。

构建行为：

1. 扫描 `teams/` 下的所有子目录（团队 ID / 目录名）。
2. 仅处理存在 `README.md` 且包含 `artifact/` 目录的团队。
3. 解析 README 的二级标题区块：`## 游戏简介` / `## 操作说明` / `## 技术特色` / `## 团队信息`。
4. 提取文本 / 列表，生成结构化元数据；团队名优先从“团队信息”里形如 `团队名称：XXX` 的行解析，失败则从目录名拆分降级推断。
5. 复制团队的 `artifact/` 目录到 `dist/<团队目录>/artifact/`，不做改写。
6. 生成预渲染的 `dist/index.html`：所有游戏卡片 + 统计数字（游戏数 = 团队数）。
7. 首页不依赖任何运行时渲染逻辑即可完整展示；仅保留 `window.GAMES_METADATA` 作为后续增强潜在入口。

## 目录结构（关键部分）

```
package.json
ARCHITECTURE.md          # 本文件
src/
  build.mts              # 构建脚本（Node + tsx 直接执行）
  template/
    index.html           # 首页 HTML 模板（含占位符）
teams/
  <team-id>/
    README.md
    artifact/            # 原样复制
      index.html / *.wasm / 其他资源

dist/                    # 构建产物（运行 `npm run build` 后生成）
  index.html             # 预渲染首页
  <team-id>/artifact/... # 每个团队资源
```

## 数据模型

`GameMetaRaw`（构建阶段内存结构），字段：

- `id`: 团队目录名（用于相对路径 & 分组）
- `title`: README 第一行 `# ` 标题；若缺失以目录名尾段回退
- `teamName`: 来自“团队信息”段落里 `团队名称：` 行；失败回退目录名部分；再失败 "未知团队"
- `gameIntro`: “游戏简介”纯文本（保留换行 → `<br>` 转换）
- `operations`: “操作说明”列表解析
- `features`: “技术特色”列表解析
- `teamInfo`: “团队信息”整体列表（包括成员、团队名等）
- `artifactPath`: 相对路径（URL 编码目录名） `encodeURIComponent(teamId)/artifact/index.html`

## README 解析规则

- 仅解析二级标题（`## `）。遍历顺序保持文件出现次序。
- 列表行匹配前缀：`-` `*` `+` `•`（后跟空格）。其他非空行也会被收集为一个单项（降级策略，防止信息丢失）。
- HTML 转义：仅对 `<` 做转义以避免破坏标签结构；换行统一为 `\n` 再替换 `<br>`（仅简介段）。
- 不做 Markdown 全量渲染（简化；避免引入额外依赖）。

## 模板占位符

`src/template/index.html` 中的占位符在构建阶段被简单字符串替换：

- `__GAMES_METADATA__` → JSON.stringify 的完整元数据数组
- `__GAME_CARDS__` → 预渲染的全部卡片 `<a>` 结构
- `__GAME_COUNT__` → 游戏数量
- `__TEAM_COUNT__` → 团队数量（当前同游戏数；后续可去重处理）

## 卡片与交互

- 每个卡片整个由 `<a class="game-card-link">` 包裹，确保可点击区域 = 视觉区域。
- 不再强制统一高度：根据内容自然增高，`grid` 通过 `align-items: start` 防止拉伸。
- Hover 提升阴影与轻微上移（CSS 过渡）。

## 部署特性

- 所有链接均使用相对路径，不含根 `/` 前缀 → 可以将 `dist/` 内容放置在 `https://<host>/<subpath>/` 下直接访问。
- 团队目录使用 `encodeURIComponent` 编码，避免中文 / 空格路径导致 404。
- 无构建期外部网络请求 → 可离线构建。

## 构建脚本核心函数摘要

- `splitSections(md)`：按 `##` 标题切分成名称 → 内容映射。
- `extractList(section)`：提取列表或降级收集文本行。
- `extractTeamName(list)`：从“团队信息”项里匹配 `团队名称：`。
- `readGame(readmePath, dirName)`：聚合单个游戏原始元数据（不含 artifactPath）。
- `buildArtifactRelativePath(teamId)`：构造相对入口。
- `copyArtifacts(teamDir, distTeamDir)`：原样递归复制 `artifact`。
- `renderIndexHtml(games)`：读取模板 → 生成卡片 HTML → 替换占位符。
- `build()`：清理 `dist`，遍历团队目录，筛选合法提交，生成首页。

## 依赖与运行

- 运行环境：Node.js (推荐 >= 18)，使用 `tsx` 直接运行 ESM TypeScript。
- 依赖：
  - 运行时：`tsx`（构建阶段执行）
  - 开发：`@types/node`
- 命令：

```bash
npm install
npm run build
```

生成结果：`dist/index.html` + 每个团队 `dist/<team-id>/artifact/*`。

## 当前示例团队（仓库现状）

- `0x0-MoonBit官方-方块游戏`
- `spaceack-CS赏金猎手-Moonbit中国象棋战役版`

构建日志示例：`Built 2 games into dist/`

## 质量与限制

已做：

- 预渲染页面（无需 JS 才能看到内容）
- URL 编码与子路径兼容
- 粗粒度 XSS 防护（仅 `<` 转义）
- 无外部资源依赖（除字体）

尚未实现 / 可扩展：

- README Markdown 完整渲染（粗糙列表策略可能显示欠佳）
- 团队数去重（若未来一个团队多游戏）
- 构建诊断（缺少某段落的提醒）
- 搜索 / 过滤 / 排序功能
- CI/CD（GitHub Actions 自动构建部署）
- 国际化 / 多语言
- 增量构建（当前每次全量清空）

## 未来扩展建议（简述实现方向）

| 需求                 | 思路                                                                            | 影响                     |
| -------------------- | ------------------------------------------------------------------------------- | ------------------------ |
| 更丰富 Markdown 渲染 | 引入 `marked` / `markdown-it`，对受控段落渲染                                   | 增加依赖体积，需安全过滤 |
| 搜索 / 过滤          | 保留的 `window.GAMES_METADATA` 前端筛选 + 输入框                                | 需新增少量 JS            |
| 去重团队统计         | 使用 `new Set(games.map(g=>g.teamName))`                                        | 修改占位符替换逻辑       |
| 缺失段落校验         | 构建时记录缺失信息，汇总输出警告                                                | 提升提交规范性           |
| CI 部署              | 新增 `.github/workflows/build.yml`，push main 自动 `npm run build` + Pages 发布 | 自动化交付               |
| 多语言               | 模板抽出文案字典，根据构建参数选择                                              | 增复杂度                 |

## 速览（Agent 快速上手提示）

- 单入口：`src/build.mts`
- 只需关注：README 解析逻辑 + 模板占位符
- 新增展示字段：在 `GameMetaRaw` 增加字段 → 在 `readGame()` 填充 → 模板插入占位符 → `renderIndexHtml()` 替换
- 不要破坏相对路径策略；禁止在链接前加 `/`

## 最小改动示例（添加“标签 tags”字段）

1. 在 README 中新增 `## 标签` 段落。
2. `GameMetaRaw` 增加 `tags: string[]`。
3. `readGame()` 解析：`const tags = extractList(sections["标签"])`。
4. 卡片模板中添加：`<div class="section"><h4>标签</h4>${list(g.tags)}</div>`。
5. 更新模板占位符或直接写入卡片 HTML 构建。

完成以上即可出现在首页。

---

如需更多增强，可在此文件继续补充迭代记录与设计决策。
