# 🌙 MoonFighter

## 🕹️ 游戏简介
**MoonFighter** 是一款使用 **MoonBit** 语言开发、运行于 **WASM-4** 虚拟主机的像素射击游戏。  
玩家可控制战机左右移动并发射子弹，击落来袭的敌机获取分数。  
当敌机与玩家碰撞时，游戏结束，可按键重新开始。

---

## 🎮 操作说明
| 按键 | 功能 |
|------|------|
| ← / → | 控制战机左右移动 |
|     Z      | 发射子弹 |
| 游戏结束后按钮 R | 重新开始游戏 |

---

## ⚙️ 技术特色
- **模块化架构**：`Player`、`Bullet`、`Enemy`、`Game` 四大结构体实现独立逻辑。  
- **实时帧循环**：每帧更新输入、移动、碰撞与渲染。  
- **碰撞检测**：采用矩形包围盒算法实现子弹与敌机命中判定。  
- **高效图形绘制**：基于 WASM-4 的 API 实现飞船与敌机渲染。  
- **伪随机敌机生成**：利用帧计数实现动态敌机刷新。

---

## 🧩 构建与运行

### 环境要求
- [MoonBit 编译器](https://moonbitlang.com/)
- [WASM-4 SDK](https://wasm4.org/)
- Node.js（用于运行 `npx wasm4`）
- Python（用于本地服务器）

### 构建命令
```bash
moon clean
moon build --target wasm-gc
npx wasm4 run target/wasm-gc/release/build/moonfighter.wasm

或者

python -m http.server
127.0.0.1:8000
```

## 团队信息
- 团队名称：AAA代码批发
- 作品名称：MoonFighter
- 联系方式: 13400156967@mail.dlut.edu.cn
- 手机号: 17803097808
- b站视频链接： 【1315857-Moonfighter】 https://www.bilibili.com/video/BV1mUW1zSEaD/?share_source=copy_web&vd_source=c7fef7072e74c1094140ebe346438c82



