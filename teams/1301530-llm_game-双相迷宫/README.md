# 双相迷宫（MoonBit · wasm-gc）

## 游戏简介
“双世界迷宫 · 相位切换”是一款轻量解谜游戏。你需要同步操控两个平行世界的角色，通过“相位切换（Q）”穿越相位墙（*），让两侧角色同时到达终点 G。共 5 关，两个世界的关卡布局不同，必须在不同位置与时机使用 Q 才能通关。

## 操作说明
- 移动：方向键 或 W/A/S/D（双世界同步尝试移动；一侧受阻时，另一侧仍可移动）
- 相位：Q（切换相位，切换后可/不可穿越相位墙 *）
- 重开：R（重置当前关卡）
- 下一关：N（也会在通关后自动进入下一关）

## 技术特色
- 使用 MoonBit 编写核心逻辑，编译为 wasm-gc；在浏览器中原生运行
- 仅两文件产物：`artifact/index.html` + `artifact/game.wasm`（无外部依赖）
- 5 个非对称关卡设计，强调相位切换的时机与路线规划
- 纯 Canvas 渲染，键鼠即可游玩

## 团队信息
- 团队名称：llm_game（组织者：迷途草）
- 团队 ID：1301530
- 团队成员：请填写成员昵称
- 联系方式：请填写邮箱
- 游戏介绍视频链接：请填写 B 站链接（标题/简介添加 #MoonBit 2025编程挑战赛 + @MoonBit 月兔）

## 本地运行
1) 在仓库根目录启动任意静态服务（示例）
```
python -m http.server 8000
# 或
npx http-server -p 8000
```
2) 浏览器访问入口
```
http://localhost:8000/MoonBit-Code-JAM-2025-main/teams/1301530-llm_game-双相迷宫/artifact/index.html
```
如出现中文显示异常，请确认文件编码为 UTF-8，并通过本地服务器访问（不要用 file:// 直接打开）。在 PowerShell 中可以先执行 `chcp 65001` 切换至 UTF-8 控制台编码。

## 重新编译（MoonBit）
1) 进入源码目录
```
cd build/dual_maze_moon
```
2) 编译 wasm-gc 目标
```
moon build --target wasm-gc
```
3) 将编译产物复制到作品目录
```
copy build/dual_maze_moon/target/wasm-gc/release/build/lib/lib.wasm "MoonBit-Code-JAM-2025-main/teams/1301530-llm_game-双相迷宫/artifact/game.wasm"
```

## 构建与产物说明（源码 vs 编译物）
- 源码（修改逻辑时编辑）
  - `build/dual_maze_moon/lib/lib.mbt`：游戏核心（状态、关卡、导出接口）
  - `build/dual_maze_moon/lib/moon.pkg.json`：导出函数清单
  - `build/dual_maze_moon/moon.mod.json`：模块元信息
- 编译产物（自动生成）
  - `build/dual_maze_moon/target/wasm-gc/release/build/lib/lib.wasm`：WASM 文件
  - `build/dual_maze_moon/target/**`：中间产物（可删除后重建）
- 参赛产物（交付）
  - `teams/1301530-llm_game-双相迷宫/artifact/index.html`
  - `teams/1301530-llm_game-双相迷宫/artifact/game.wasm`

## 素材/开源声明
如使用非原创素材或开源代码，请在此处注明来源与授权条款，并确保具备合法使用权。