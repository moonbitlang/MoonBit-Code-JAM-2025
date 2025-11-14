Matchstick Man Battle — 本地打包说明

目标
- 为桌面用户构建 Electron 应用（Linux/macOS/Windows）。

快速开始（开发）
1. 在仓库根安装依赖：

```bash
npm install
```

2. 启动 Electron（开发模式）：

```bash
npm run start
```

构建发行版
- 生成 platform-specific 构建（可使用 --linux、--win、--mac 等 electron-builder 参数）：

```bash
# 先安装依赖
npm install

# 生成可分发目录（不打包为安装程序）
npm run pack

# 生成安装包（nsis, dmg, AppImage 等）
npm run dist
```

注意事项
- 打包会把仓库里的所有文件（受 package.json build.files 控制）包含进 app。若不想把大型素材或不需要的源文件打包，请在 package.json 的 `build.files` 中添加排除规则。
- Electron 使用 file:// 加载 `index.html`，页面中的相对路径（如 `./target/js/release/build/...`）必须相对于应用资源根有效。若发现资源加载失败，请检查路径或在 `electron-main.js` 中改为 loadURL 指向 `app://` 或一个本地静态服务器。
- 若要在打包后启用硬件加速或额外 NodeAPI，请在 `webPreferences` 中调整相关选项并在渲染进程中使用预载脚本（preload）以保证安全性。

常见问题
- Box2D 或 p5 未找到：确保 `index.html` 里按正确顺序加载 p5 -> box2d.js -> game build JS。
- 打包体积过大：考虑把大型媒体放到外部更新包或 CDN，并在运行时下载。electron-builder 支持 differential updates（需额外配置）。

下一步建议
- 本地跑一遍 `npm run start` 检查控制台错误与资源是否全部加载。若一切良好，再运行 `npm run pack` 生成平台目录，再尝试 `npm run dist`。

CI 构建（推荐）
- 为了可靠地产生 macOS 和 Windows 安装包，建议使用 CI（例如 GitHub Actions）：macOS runner 用于 DMG，Windows runner 用于 NSIS/EXE。
- 本仓库包含一个示例 workflow：`.github/workflows/build-packages.yml`，会在 `macos-latest` 与 `windows-latest` 上运行，并把构件作为 artifacts 上传供下载。

如何使用 workflow
1. 提交并 push 分支到 GitHub。
2. 打开仓库的 Actions 选项卡，触发该 workflow（或等待 push 自动触发）。
3. 在 workflow 运行结束后下载 `mac-packages` / `win-packages` 工件。

本地交叉构建说明
- 在 Linux 上交叉构建 Windows 需要额外系统包（wine、mono、makensis 等），且容易出问题；在 Linux 上交叉构建 macOS 几乎不可行（通常需要 macOS 环境）。因此 CI 在不同平台上构建是最稳妥的方案。
