# dual_maze_moon 构建说明

本目录包含「双世界迷宫·相位切换」的 MoonBit 源代码与编译输出。

- **源代码**（需要修改游戏逻辑时编辑）
    - `lib/lib.mbt`：游戏核心（状态、关卡、接口导出）。
    - `lib/moon.pkg.json`：声明 wasm-gc 导出函数（`init_game/step/toggle_phase/restart/next_level/get_*`）。
    - `moon.mod.json`：模块元信息。
- **编译产物**（自动生成，不要手改）
    - `target/wasm-gc/release/build/lib/lib.wasm`：编译后的 WASM 文件。
    - `target/**`：中间产物，可删除后重新构建。

## 构建

```
moon build --target wasm-gc
```

编译成功后，将 `target/wasm-gc/release/build/lib/lib.wasm` 复制到参赛作品的 `artifact/game.wasm`。
