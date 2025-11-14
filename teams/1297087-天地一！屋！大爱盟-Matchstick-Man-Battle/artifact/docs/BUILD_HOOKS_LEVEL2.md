## Level2 构建产物 Hook 指南

本文件说明如何把运行时 hook（用于外部 HUD、FX 与画布挂载）从构建产物（`target/js/release/build/game-level2/game-level2.js`）迁移或注入到构建产物中。

重要说明
- 直接修改 `target/` 下的构建产物是快速且直接的方式，适合原型与前端调试，但通常会被后续构建覆盖（`target/` 目录通常被 .gitignore 忽略）。推荐将相同的变更迁回源代码（或在 CI 中自动打补丁）。
- 在修改构建产物前务必备份（例如 `cp game-level2.js game-level2.js.bak`）。

目标 Hook
- 在游戏启动时暴露 runtime getter 与引用：
  - `window.__mmb_game` — 对 game 对象的引用（便于调试）。
  - `window.__mmb_get_state()` — 返回 { players: [...], frame_count } 的防御性函数，供 HUD 轮询。
- 在命中/伤害计算处触发前端事件：
  - `window.__mmb_trigger_hit(playerIndex, screenX, screenY, damage)` — 页面可监听并触发晃动/闪白/粒子效果。
- 在 p5 创建 canvas 时，把 canvas 挂载到页面上的 `#game-container`，以便布局/FX 能正确定位。

定位插入点
- 启动点（bootstrap）：在文件中搜索 `Game$start_run(game)` 或类似的调用位置，在该调用“之前”插入 bootstrap snippet（见下方）。这保证在游戏真正开始前我们已安装 `__mmb_get_state`。
- 受伤/伤害处理：在代码中搜索表达式 `_bind.health = _bind.health - damage | 0;` 或其它直接更新 health 的语句，并在它后面插入 trigger 调用（见下方）。如果构建产物使用不同变量名，请以附近上下文中 `damage` / `particle.index` 这些词作为锚点调整。
- p5 createCanvas：在 p5 实例创建位置（例如 `p.createCanvas(width, height)`）添加 `.parent('game-container')` 或在 bootstrap 插入一个通用的 canvas-parenting shim（更稳妥）。

示例（侵入式插入）
1) 在 `Game$start_run(game)` 之前插入：

```javascript
// --- BEGIN __MMB_BOOTSTRAP_SNIPPET ---
try{ window.__mmb_game = game; }catch(e){}
try{
  window.__mmb_get_state = function(){
    try{
      var players = [];
      if (game && game.particle_list && game.particle_list.length){
        for (var i=0;i<game.particle_list.length;i++){
          var p = game.particle_list[i];
          var ctrl = (p && p.control) ? p.control : { health: 0 };
          players.push({ index: (p && p.index)!==undefined ? p.index : i, health: (ctrl.health===undefined?0:ctrl.health), name: p && p.name ? p.name : null, ammo: p && p.ammo ? p.ammo : null, score: p && p.score ? p.score : null });
        }
      }
      return { players: players, frame_count: (game && game.frame_count)? game.frame_count : 0 };
    }catch(e){ return { players: [], frame_count: 0 }; }
  };
}catch(e){}
// --- END __MMB_BOOTSTRAP_SNIPPET ---
```

2) 在受伤那行之后插入（示例）：

```javascript
// --- BEGIN __MMB_HIT_SNIPPET ---
try{ if (typeof window !== 'undefined' && window.__mmb_trigger_hit) { try{ window.__mmb_trigger_hit((particle&&particle.index!==undefined)?particle.index: (typeof idx!=='undefined'?idx:null), (typeof hx!=='undefined'?hx:undefined), (typeof hy!=='undefined'?hy:undefined), (typeof damage!=='undefined'?damage:0)); }catch(e){} } }catch(e){}
// --- END __MMB_HIT_SNIPPET ---
```

3) p5 canvas 父容器挂载（如果在构建产物中）——在 `p.createCanvas(width, height)` 之后加入：

```javascript
var __mmb_cnv = p.createCanvas(width, height);
try{ if(document && document.getElementById && document.getElementById('game-container')){ try{ __mmb_cnv.parent && __mmb_cnv.parent('game-container'); }catch(e){ var n = __mmb_cnv && (__mmb_cnv.elt||__mmb_cnv.canvas) || __mmb_cnv; try{ document.getElementById('game-container').appendChild(n); }catch(e){} } } }catch(e){}
```

迁移回源码（推荐）
- 定位 level2 源的入口（例如 `src/game-level2/main.mbt` 或项目的 bootstrap 文件），把上述 `__MMB_BOOTSTRAP_SNIPPET` 与 canvas-parenting 逻辑添加到 game 初始化代码中（注意不要在生产构建中泄露敏感调试信息，可通过环境变量或构建标志控制是否包含）。
- 对于受伤触发，最好把触发位置放到与伤害逻辑邻近的通知/事件发射位置，直接使用游戏的事件总线（如果存在）来触发外部事件。

CI/自动补丁选项
- 如果无法修改源码，可在构建流程后附加一个步骤：运行一个小脚本（见 `patches/level2_patch.sh`），用正则替换插入 snippet。

回滚与注意事项
- 插入前创建备份。
- 插入后在浏览器中打开 `game-level2.html`，在 Console 中检查 `typeof window.__mmb_get_state` 与 `window.__mmb_trigger_hit` 是否存在，并观察 HUD 与 FX 行为。
- 若构建产物在每次加载时被严格混淆或使用不同变量名，运行时 wrapper（`auto_hooks/level2_runtime_hook.js`）会是更安全的方案。

示例补丁腳本與片段位於 `patches/` 目录。

如果需要，我可以为你的 repo 生成一个 PR 风格的补丁或 CI 步骤示例。
