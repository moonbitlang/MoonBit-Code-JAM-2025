# 指南：在 MoonBit 中使用 `extern "js"` 与网页交互

本文档将指导你如何使用 MoonBit 的外部函数接口（FFI）中的 `extern "js"` 功能，来调用 JavaScript 函数，从而实现从 MoonBit 代码中直接操作和更新你的 HTML 网页元素。

这对于在游戏逻辑（用 MoonBit 编写）中更新 UI（如得分、血量、游戏状态等）非常有用。

## 核心概念

`extern "js"` 允许你声明一个在 JavaScript 环境中定义的函数，并在 MoonBit 代码中像调用普通 MoonBit 函数一样调用它。MoonBit 编译器会确保在生成 JavaScript 代码时，这些调用能够正确地链接到你提供的 JS 函数。

## 操作步骤

我们将以更新游戏得分显示为例。假设你的 `index.html` 中有如下元素：

```html
<!-- index.html -->
<div class="hud-left">得分: <span id="score">0</span></div>
```

我们的目标是当游戏内得分变化时，从 MoonBit 中更新这个 `<span>` 标签里的数字。

### 步骤 1: 创建一个 JavaScript "胶水" 函数

首先，我们需要一个在全局作用域中可访问的 JavaScript 函数，它负责接收一个值并更新 DOM 元素。

将这个函数添加到你的 `index.html` 的一个 `<script>` 标签中，建议放在所有游戏脚本加载**之前**。

```html
<!-- index.html -->
<body>
    <!-- ... 其他 HTML ... -->

    <script>
        // 这个函数将作为 MoonBit 和网页之间的桥梁
        function updateScoreDisplay(newScore) {
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
                scoreElement.innerText = newScore;
            }
        }

        // 你也可以添加其他类似的函数
        function updateLevelDisplay(newLevel) {
            const levelElement = document.getElementById('level');
            if (levelElement) {
                levelElement.innerText = newLevel;
            }
        }
    </script>

    <!-- 加载 p5, box2d 和你的 MoonBit 游戏脚本 -->
    <script src="..."></script>
    <script src="./target/js/release/build/server/server.js"></script>
    <!-- ... -->
</body>
```

### 步骤 2: 在 MoonBit 中声明 `extern` 函数

现在，在你的 MoonBit 代码中（例如，一个专门存放外部接口的 `ffi.mbt` 文件，或者直接在你的主逻辑文件中），使用 `extern "js"` 来声明你刚刚创建的 JavaScript 函数。

你需要为这个外部函数提供一个 **snake_case** 风格的 MoonBit 函数名（如 `update_score_display`），并使用 `js_name` 属性指定它在 JavaScript 中的实际名称（`updateScoreDisplay`）。

```moonbit
// src/server/ffi.mbt (或者其他任何 .mbt 文件)

// 声明一个外部 JS 函数
// fn update_score_display(Int) -> Unit 告诉 MoonBit 这个函数接受一个整数且无返回值
@js_name("updateScoreDisplay")
extern "js" fn update_score_display(score: Int) -> Unit

@js_name("updateLevelDisplay")
extern "js" fn update_level_display(level: Int) -> Unit
```

**注意**:
*   `@js_name(...)` 是必需的，因为它将 MoonBit 中的 `snake_case` 命名习惯映射到 JavaScript 中的 `camelCase`。
*   类型需要匹配：MoonBit 的 `Int` 会自动转换为 JavaScript 的 `Number`，`String` 对应 `string`，`Unit` 对应 `void`（无返回值）。

### 步骤 3: 在你的游戏逻辑中调用该函数

现在你可以在 MoonBit 代码的任何地方调用 `update_score_display` 函数了，就像调用一个普通的 MoonBit 函数一样。

例如，当玩家得分时：

```moonbit
// 在你的游戏逻辑中，例如 game.mbt 或 player.mbt

fn on_player_score(game: Game, points: Int) -> Game {
  let new_score = game.score + points

  // 调用外部 JS 函数来更新网页上的得分显示！
  update_score_display(new_score)

  // 更新游戏状态
  { ...game, score: new_score }
}
```

当游戏进入下一关时：

```moonbit
fn start_next_level(game: Game) -> Game {
  let new_level = game.level + 1

  // 调用外部 JS 函数更新关卡显示
  update_level_display(new_level)

  // ... 加载新关卡的逻辑 ...
  { ...game, level: new_level }
}
```

### 步骤 4: 编译和运行

当你运行 `moon build` 时，MoonBit 编译器会：
1.  编译你的 MoonBit 代码为 JavaScript。
2.  将 `update_score_display(new_score)` 的调用转换为 `updateScoreDisplay(new_score)` 的 JavaScript 调用。
3.  当你的网页加载并执行所有脚本后，MoonBit 生成的 `server.js` 就会在正确的时机调用你在 `index.html` 中定义的全局 `updateScoreDisplay` 函数，从而完成 UI 的更新。

## 总结

通过这种方式，你可以将核心的游戏逻辑完全保留在 MoonBit 中，同时又能灵活地与浏览器环境和 DOM 进行交互，实现了清晰的关注点分离。

你可以使用同样的方法来：
*   显示/隐藏加载界面。
*   播放/暂停背景音乐（通过调用 HTML5 Audio API）。
*   向浏览器的控制台打印调试信息 (`console.log`)。
*   与任何第三方 JavaScript 库进行交互。
