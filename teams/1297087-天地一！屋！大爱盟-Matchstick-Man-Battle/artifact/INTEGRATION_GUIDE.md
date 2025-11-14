# 火柴人大乱斗 - 前端框架集成指南

## 🎮 前端框架已完成！

### ✨ 功能特性

1. **双玩家 HP 显示**
   - 彩色进度条（玩家1红色，玩家2蓝色）
   - 实时数值显示（当前/最大）
   - 平滑动画过渡

2. **胜利次数统计**
   - 独立计数器
   - 绿色高亮显示

3. **游戏状态提示**
   - 居中显示
   - 支持自定义文本

4. **开始游戏按钮**
   - 点击启动游戏
   - 自动变为"重新开始"
   - 悬停动画效果

5. **操作说明**
   - 清晰的双玩家控制说明
   - 黄色提示框

6. **美观 UI 设计**
   - 渐变背景
   - 圆角卡片
   - 阴影效果
   - 响应式布局

---

## 🚀 快速开始

### 1. 刷新页面查看新 UI

打开浏览器访问：
```
http://localhost:8001/Matchstick_Man_Battle/index.html
```

你应该能看到完整的游戏界面，包括：
- 标题"火柴人大乱斗"
- 玩家1和玩家2的 HP 条
- 开始游戏按钮
- 游戏画布（820×560）
- 操作说明

### 2. 测试 UI 功能

在浏览器控制台（F12）中运行：
```javascript
// 复制 test-ui.js 的内容到控制台
// 或直接运行以下命令测试单个功能：

// 更新玩家1 HP
window.gameUI.updateHP(1, 75, 100);

// 更新玩家2 HP
window.gameUI.updateHP(2, 50, 100);

// 更新胜利次数
window.gameUI.updateWins(1, 3);
window.gameUI.updateWins(2, 2);

// 设置游戏状态
window.gameUI.setStatus('游戏进行中...');
window.gameUI.setStatus('玩家1获胜！');
```

---

## 📝 集成到游戏代码

### 步骤 1: 在 main.mbt 中添加 UI 接口

在 `src/server/main.mbt` 文件开头添加以下代码：

```moonbit
// ========== UI 接口声明 ==========
extern "js" fn updatePlayerHP(player: Int, current: Double, max: Double) -> Unit =
  #| (player, current, max) => {
  #|   if (window.gameUI) window.gameUI.updateHP(player, current, max);
  #| }

extern "js" fn updatePlayerWins(player: Int, wins: Int) -> Unit =
  #| (player, wins) => {
  #|   if (window.gameUI) window.gameUI.updateWins(player, wins);
  #| }

extern "js" fn setGameStatus(text: String) -> Unit =
  #| (text) => {
  #|   if (window.gameUI) window.gameUI.setStatus(text);
  #| }

extern "js" fn onGameStart(callback: () -> Unit) -> Unit =
  #| (callback) => {
  #|   if (window.gameUI) window.gameUI.onStartGame = callback;
  #| }
```

### 步骤 2: 在游戏初始化时注册回调

```moonbit
// 在你的游戏初始化函数中
pub fn init_game() -> Unit {
  // 注册开始游戏按钮回调
  onGameStart(fn() {
    // 重置游戏状态
    reset_game()
    setGameStatus("游戏进行中...")
  })
}
```

### 步骤 3: 在游戏循环中更新 UI

```moonbit
// 在你的游戏主循环或更新函数中
pub fn game_update() -> Unit {
  // ... 你的游戏逻辑 ...
  
  // 更新玩家 HP
  updatePlayerHP(1, player1_hp, 100.0)
  updatePlayerHP(2, player2_hp, 100.0)
  
  // 检测游戏结束
  if player1_hp <= 0.0 {
    player2_wins = player2_wins + 1
    updatePlayerWins(2, player2_wins)
    setGameStatus("玩家2获胜！")
    // 停止游戏或重置
  } else if player2_hp <= 0.0 {
    player1_wins = player1_wins + 1
    updatePlayerWins(1, player1_wins)
    setGameStatus("玩家1获胜！")
    // 停止游戏或重置
  }
}
```

### 步骤 4: 重新编译

```bash
cd /home/nyz/mooncode/Matchstick_Man_Battle
moon build --target js
```

---

## 🎯 示例集成代码

完整的游戏状态管理示例：

```moonbit
// 游戏状态变量
let mut player1_hp : Double = 100.0
let mut player2_hp : Double = 100.0
let mut player1_wins : Int = 0
let mut player2_wins : Int = 0
let mut game_active : Bool = false

// 重置游戏
fn reset_game() -> Unit {
  player1_hp = 100.0
  player2_hp = 100.0
  game_active = true
  updatePlayerHP(1, player1_hp, 100.0)
  updatePlayerHP(2, player2_hp, 100.0)
  setGameStatus("游戏进行中...")
}

// 处理玩家受伤
fn damage_player(player: Int, damage: Double) -> Unit {
  if player == 1 {
    player1_hp = player1_hp - damage
    if player1_hp < 0.0 { player1_hp = 0.0 }
    updatePlayerHP(1, player1_hp, 100.0)
    
    if player1_hp <= 0.0 {
      end_game(2)
    }
  } else {
    player2_hp = player2_hp - damage
    if player2_hp < 0.0 { player2_hp = 0.0 }
    updatePlayerHP(2, player2_hp, 100.0)
    
    if player2_hp <= 0.0 {
      end_game(1)
    }
  }
}

// 结束游戏
fn end_game(winner: Int) -> Unit {
  game_active = false
  if winner == 1 {
    player1_wins = player1_wins + 1
    updatePlayerWins(1, player1_wins)
    setGameStatus("玩家1获胜！")
  } else {
    player2_wins = player2_wins + 1
    updatePlayerWins(2, player2_wins)
    setGameStatus("玩家2获胜！")
  }
}

// 初始化
pub fn init() -> Unit {
  onGameStart(fn() {
    reset_game()
  })
}
```

---

## 🐛 调试技巧

### 检查 UI API 是否可用
```javascript
console.log(window.gameUI);
// 应该输出包含 updateHP, updateWins, setStatus 等方法的对象
```

### 查看当前 HP 显示
```javascript
console.log(document.getElementById('hp-text-p1').textContent);
console.log(document.getElementById('hp-text-p2').textContent);
```

### 查看胜利次数
```javascript
console.log(document.getElementById('wins-p1').textContent);
console.log(document.getElementById('wins-p2').textContent);
```

---

## 📚 完整文档

- **详细 API 文档**: 查看 `GAME_UI_API.md`
- **测试脚本**: 运行 `test-ui.js` 中的代码
- **当前文件**: `INTEGRATION_GUIDE.md`

---

## ✅ 下一步

1. ✅ 刷新页面查看新 UI
2. ✅ 在控制台测试 UI 功能
3. ⬜ 将 UI 接口集成到 `main.mbt`
4. ⬜ 在游戏逻辑中调用 UI 更新函数
5. ⬜ 重新编译并测试完整游戏

祝开发顺利！🎮
