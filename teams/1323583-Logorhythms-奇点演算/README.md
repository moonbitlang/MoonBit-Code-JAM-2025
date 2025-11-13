# Calculus Singularity

## 游戏简介

> Proof as Push, Propositions as Boxes

Calculus Singularity 是一款把**逻辑证明**抽象成**推箱子解谜**的实验性作品：玩家扮演演算者「λ」，通过推动带有命题符号的盒子，让棋盘上的推演链条严格对应自然演绎中的合取、蕴含、否定与投影等推理规则。这种具象化的类比把枯燥的证明过程转化为空间直觉：玩家既要规划路线，又要在脑中模拟命题的化简过程，逐渐体会推箱子与自然演绎之间「推 = 证」的对应关系。

## 操作说明

- `WASD / 方向键`：移动 λ 玩家，推动命题盒子，触发逻辑化简。
- `Z`：撤销上一步移动，方便倒推自己的证明。
- `R`：重置当前关卡，回到初始命题布局。
- `B`：保存一个带缩略图的 Proof Backup，左侧面板可随时点击备份卡片恢复。
- `1-9`：快速切换到关卡列表中对应编号的谜题；通关后可点击 `Next Level` 按钮继续。
- `Load From JSON`：导入自定义关卡；`Open Level Editor` 会在新标签页打开可视化编辑器（是的，我做了一个关卡编辑器供你自由发挥！）
- 鼠标悬停任意盒子会在 `info` 面板里高亮其逻辑表达式，方便追踪复杂命题。
- `info` 会显示 `Prop @ (x, y)` 格式的盒子位置与命题内容，帮助玩家理解当前状态
  - `⊢` 符号后面的表示未完成的目标命题 (红色表示放置了错的盒子，绿色表示正确，白色表示空位)
- BiliBili 视频演示: [一个受形式逻辑启发的小游戏](https://www.bilibili.com/video/BV1wTCJBaEjB)

## 技术特色

- **Proof Engine in MoonBit**：全部规则（碰撞、合并、历史、关卡 DSL）由 Moonbit 编写，导出为 `cs.js` 供前端调用，保证推理过程可验证、可复现。
- **Elm Architecture 的跨语言实现**：MoonBit 负责 Model/Update，TypeScript 只拿到 `ViewModel` 并用 Pixi.js 渲染，逻辑与视图完全解耦。
- **Pixi.js + Vite 的高性能前端**：网格、盒子、玩家、目标层均使用 Pixi 容器渲染，配合 Vite 模块热替换与 Rollup 拆分提升开发体验。
- **可视化备份系统**：任意时刻保存 Proof Backup，缩略图由 WebGL 渲染结果截屏，帮助玩家尝试分支证明，并且可以随时撤销移动，给予玩家充分的探索自由度。

## 团队

- Logorhythms (逻辑旋律) @[CAIMEOX](https://github.com/CAIMEOX)
