# 游戏 UI API 使用文档

## 概述
前端框架提供了 `window.gameUI` 全局对象，用于更新游戏界面状态。

## API 方法

### 1. 更新玩家 HP
```javascript
window.gameUI.updateHP(player, current, max)
```
- `player`: 玩家编号（1 或 2）
- `current`: 当前 HP 值
- `max`: 最大 HP 值

示例：
```javascript
// 玩家1 HP 从 100 降到 80
window.gameUI.updateHP(1, 80, 100);

// 玩家2 HP 从 100 降到 50
window.gameUI.updateHP(2, 50, 100);
```

### 2. 更新胜利次数
```javascript
window.gameUI.updateWins(player, wins)
```
- `player`: 玩家编号（1 或 2）
- `wins`: 胜利次数

示例：
```javascript
// 玩家1 胜利次数 +1
window.gameUI.updateWins(1, 3);

// 玩家2 胜利次数 +1
window.gameUI.updateWins(2, 2);
```

### 3. 设置游戏状态提示
```javascript
window.gameUI.setStatus(text)
```
- `text`: 状态文本（如"游戏进行中..."、"玩家1获胜！"等）

示例：
```javascript
window.gameUI.setStatus('游戏进行中...');
window.gameUI.setStatus('玩家1获胜！');
window.gameUI.setStatus('回合 3/5');
```

### 4. 监听开始游戏按钮
```javascript
window.gameUI.onStartGame = function() {
    // 游戏初始化逻辑
}
```

示例：
```javascript
window.gameUI.onStartGame = function() {
    console.log('Game starting...');
    // 重置游戏状态
    window.gameUI.updateHP(1, 100, 100);
    window.gameUI.updateHP(2, 100, 100);
    window.gameUI.setStatus('游戏进行中...');
};
```

## 在 MoonBit 中调用

### 方法 1: 使用 extern "js" 声明
```moonbit
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

### 方法 2: 在游戏逻辑中调用
```moonbit
// 更新玩家1的 HP
updatePlayerHP(1, player1_current_hp, player1_max_hp)

// 更新玩家2的胜利次数
updatePlayerWins(2, player2_wins)

// 设置游戏状态
setGameStatus("玩家1获胜！")

// 注册开始游戏回调
onGameStart(fn() {
  // 重置游戏状态
  reset_game()
})
```

## 完整示例

```moonbit
// 在 main.mbt 中添加 UI 接口
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

// 在游戏循环中更新 UI
pub fn update_game() -> Unit {
  // ... 游戏逻辑 ...
  
  // 更新玩家 HP
  updatePlayerHP(1, player1.hp, 100.0)
  updatePlayerHP(2, player2.hp, 100.0)
  
  // 检测游戏结束
  if player1.hp <= 0.0 {
    player2_wins = player2_wins + 1
    updatePlayerWins(2, player2_wins)
    setGameStatus("玩家2获胜！")
  } else if player2.hp <= 0.0 {
    player1_wins = player1_wins + 1
    updatePlayerWins(1, player1_wins)
    setGameStatus("玩家1获胜！")
  }
}

// 注册开始游戏回调
pub fn init() -> Unit {
  onGameStart(fn() {
    // 重置游戏
    reset_game()
    setGameStatus("游戏进行中...")
  })
}
```

## 注意事项

1. 所有 API 调用前会自动检查 `window.gameUI` 是否存在，因此无需担心时序问题。
2. HP 百分比会自动计算并更新进度条，范围限制在 0-100%。
3. 状态文本支持任意字符串，建议使用简短明确的提示。
4. 开始游戏按钮点击后会自动变为"重新开始"。

## 前端框架功能

- ✅ 双玩家 HP 显示（带彩色进度条）
- ✅ 胜利次数统计
- ✅ 游戏状态提示
- ✅ 开始/重新开始按钮
- ✅ 操作说明展示
- ✅ 自适应游戏画布（820×560）
- ✅ 美观的渐变背景和 UI 设计
