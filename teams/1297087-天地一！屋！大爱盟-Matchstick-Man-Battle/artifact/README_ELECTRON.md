# MoonBit — Electron 打包说明

简要说明：此项目将现有的 HTML/CSS/JS 游戏封装为 Electron 桌面应用。

如何运行（在项目根目录）：

```bash
# 安装依赖（仅需运行一次）
npm install

# 开发启动（会打开 Electron 窗口）
npm run start

# 打包生成安装包 / 可发布制品（使用 electron-builder）
npm run dist
```

假设与注意事项：
- 该 Electron 配置使用 `main.js` 加载根目录下的 `index.html`。如果你的游戏入口不是 `index.html`，请修改 `main.js` 中的路径。
- 打包配置位于 `package.json` 的 `build` 字段，默认包含项目内所有文件。若需排除不必要的文件（如大型素材或源码），请调整 `files`。
- 我把 `nodeIntegration` 设为 false、`contextIsolation` 设为 true；如果你的渲染进程需要访问 Node API，请在 `preload.js` 中以受控方式暴露 API。

下一步建议：
- 如果需要在渲染端调用本地文件系统或原生功能，在 `preload.js` 中添加必要的桥接函数并限制权限。
- 为不同平台自定义图标（放到 `build` 目录并在 `package.json` build 配置中指定）。
