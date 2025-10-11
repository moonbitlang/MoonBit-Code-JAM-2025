# AI 工具接手指南 (AGENTS.md)

## 项目概述

这是一个 MoonBit 全球编程创新挑战赛游戏赛道的提交展示网站项目。主要功能包括：

- **游戏展示平台**：为参赛团队提交的游戏作品提供统一的展示界面
- **自动化构建**：从各团队的 README.md 文件中提取游戏信息，生成静态网站
- **获奖展示**：支持为获奖作品添加特殊标识和样式
- **游戏试玩**：直接内嵌各团队的游戏 artifact

## 项目架构

### 目录结构

```
├── src/                          # 源代码目录
│   ├── build.mts                 # 核心构建脚本（TypeScript）
│   └── template/
│       └── index.html            # 网站模板文件
├── teams/                        # 参赛团队提交的游戏
│   └── [报名ID-队伍名称-作品名称]/
│       ├── README.md             # 游戏信息（必需）
│       └── artifact/
│           └── index.html        # 游戏入口（必需）
├── dist/                         # 生成的静态网站（被 git 忽略）
│   ├── index.html                # 主展示页面
│   └── [各团队目录及其 artifact]  # 复制的游戏文件
├── awards.json                   # 获奖信息配置
├── package.json                  # 项目依赖和脚本
└── .gitignore                    # Git 忽略规则
```

### 核心技术栈

- **构建工具**：TypeScript (tsx) + Node.js
- **Markdown 处理**：marked + markdown-it
- **前端**：原生 HTML/CSS/JavaScript
- **部署**：静态文件（通过 `dist/` 目录）

## ⚠️ 重要注意事项 - 搜索工具限制

### 🚨 关键警告：搜索工具的局限性

**当你想要检查生成的网页结果时，切勿使用以下内置搜索工具：**

- `file_search`
- `grep_search`
- `semantic_search`

**原因：** 这些工具会尊重 `.gitignore` 文件的规则，而生成的网页位于 `dist/` 目录中，该目录在 `.gitignore` 中被忽略。使用这些搜索工具永远不会找到 `dist/` 目录下的任何文件！

### ✅ 正确的检查方式

要检查生成的网页内容，请使用：

1. **`list_dir`** - 列出 `dist/` 目录结构

```bash
list_dir("/path/to/project/dist")
```

2. **`read_file`** - 直接读取生成的文件

```bash
read_file("/path/to/project/dist/index.html", 1, 100)
```

3. **`run_in_terminal`** - 使用终端命令

```bash
# 查看文件列表
ls -la dist/
# 搜索内容
grep -r "某个关键词" dist/
# 查看文件内容
cat dist/index.html
```

4. **`open_simple_browser`** - 直接预览网页

```bash
open_simple_browser("file:///path/to/project/dist/index.html")
```

## 构建流程详解

### 1. 构建命令

```bash
npm run build
# 等同于：tsx ./src/build.mts
```

### 2. 构建过程

1. **清理输出目录**：删除并重新创建 `dist/` 目录
2. **读取获奖信息**：从 `awards.json` 加载获奖数据
3. **扫描团队目录**：遍历 `teams/` 下的所有子目录
4. **解析游戏信息**：从每个团队的 `README.md` 提取：
   - 游戏标题（H1 标题）
   - 团队名称（从"团队信息"部分提取）
   - 游戏简介（H2: "游戏简介"）
   - 操作说明（H2: "操作说明"）
   - 技术特色（H2: "技术特色"）
   - 团队信息（H2: "团队信息"）
5. **复制游戏文件**：将 `artifact/` 目录复制到 `dist/`
6. **生成主页面**：基于模板生成 `dist/index.html`

### 3. README.md 格式要求

```markdown
# 游戏标题

## 游戏简介

游戏描述内容...

## 操作说明

- 操作 1
- 操作 2

## 技术特色

技术亮点说明...

## 团队信息

- 团队名称：具体团队名
- 成员信息等...
```

## 文件操作指南

### 查看生成的网站

```bash
# 1. 构建项目
npm run build

# 2. 查看输出结构
ls -la dist/

# 3. 查看主页面
cat dist/index.html | head -50

# 4. 在浏览器中预览
open dist/index.html  # macOS
# 或使用 VS Code 的简单浏览器功能
```

### 修改获奖信息

编辑 `awards.json` 文件：

```json
{
  "awards": [
    {
      "name": "最佳创意奖",
      "icon": "💡",
      "color": "#4ECDC4",
      "gameId": "具体的团队目录名"
    }
  ]
}
```

### 修改网站模板

编辑 `src/template/index.html`，支持的占位符：

- `__GAMES_METADATA__` - 游戏元数据 JSON
- `__GAME_CARDS__` - 游戏卡片 HTML
- `__GAME_COUNT__` - 游戏总数
- `__TEAM_COUNT__` - 团队总数

### 修改构建逻辑

编辑 `src/build.mts`，主要函数：

- `readGame()` - 解析单个游戏的 README
- `parseMarkdownSections()` - 解析 Markdown 章节
- `renderIndexHtml()` - 生成主页面
- `copyArtifacts()` - 复制游戏文件

## 常见任务

### 添加新的游戏展示字段

1. 修改 `GameMetaRaw` 接口（`src/build.mts`）
2. 在 `readGame()` 函数中添加解析逻辑
3. 在 `renderIndexHtml()` 中添加渲染逻辑
4. 更新模板 `src/template/index.html`

### 调试构建问题

```bash
# 查看构建日志
npm run build

# 检查特定团队的 README 格式
cat "teams/某团队目录/README.md"

# 检查 artifact 目录
ls -la "teams/某团队目录/artifact/"
```

### 本地开发测试

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 检查输出
ls -la dist/

# 本地预览（需要 HTTP 服务器）
npx http-server dist/
# 或者
python3 -m http.server 8000 --directory dist/
```

## 问题排查

### 游戏未显示

1. 检查团队目录是否包含 `README.md`
2. 检查是否存在 `artifact/index.html`
3. 检查 README 格式是否符合要求

### 构建失败

1. 检查 TypeScript 语法错误
2. 检查文件路径是否正确
3. 检查依赖是否安装完整

### 获奖标识不显示

1. 检查 `awards.json` 格式
2. 确认 `gameId` 与团队目录名完全匹配
3. 检查颜色和图标配置

## 环境要求

- **Node.js**: 18+
- **npm**: 包管理器
- **tsx**: TypeScript 执行器（项目依赖）

## 部署说明

项目生成纯静态文件，可部署到任何静态文件服务器：

- GitHub Pages
- Netlify
- Vercel
- 传统 Web 服务器

部署时只需要 `dist/` 目录下的文件。

---

## 快速上手清单

当接手这个项目时，请按以下步骤操作：

1. ✅ **理解项目结构** - 阅读本文档
2. ✅ **安装依赖** - `npm install`
3. ✅ **尝试构建** - `npm run build`
4. ✅ **检查输出** - `ls -la dist/`（使用 `list_dir` 而非搜索工具）
5. ✅ **预览网站** - 在浏览器中打开 `dist/index.html`
6. ✅ **熟悉关键文件** - `src/build.mts`, `src/template/index.html`, `awards.json`

记住：**永远不要用内置搜索工具查找 `dist/` 目录下的文件！**
