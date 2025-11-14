Build artifact hooks applied for level2 (notes for porting to source)

Files modified (build artifacts and page):

1) target/js/release/build/game-level2/game-level2.js
   - Added a lightweight global state accessor for page UI:
     - window.__mmb_game = game; // debugging fallback reference
     - window.__mmb_get_state = function() { ... } // returns { players: [{index, health, faint, name, avatar, ammo, score}], frame_count }
   - The getter is defensive: it reads available fields if present, otherwise returns null for missing values (ammo/score/avatar may be absent in this build).
   - Location: near game initialization, just before Game$start_run(game) invocation in the IIFE that creates and starts the game.

   Why this change is in build artifact:
   - Quick integration for a frontend HUD without rebuilding the whole project. Editing built JS is fast for prototyping but will be overwritten by future builds.

   How to port to source (recommended):
   - Identify the source module that contains the game bootstrap (likely in the level2 entry file in `src/game-level2` or similar). Add a non-production-only hook there to attach the state getter to `window`.
   - Example pseudo-code to add in source after game creation and before starting the run:

     // attach debug/read-only state getter for HUD
     if (typeof window !== 'undefined') {
       window.__mmb_game = game;
       window.__mmb_get_state = () => ({ players: game.particle_list.map(p => ({ index: p.index, health: p.control?.health ?? 0, name: p.name ?? null, avatar: p.avatar ?? null, ammo: /* derive from weapon manager if available */ null, score: p.score ?? null })), frame_count: game.frame_count });
     }

   - Prefer gating this behind a build flag or environment check (e.g., DEBUG or process.env.NODE_ENV !== 'production').

2) game-level2.html
   - Added a centered `#game-container` HUD and improved CSS.
   - Added a two-player HUD overlay (left: player 0; right: player 1) with avatar, name, HP bar, ammo and score placeholders.
   - Added periodic poll script that calls window.__mmb_get_state() to update HUD elements at ~10Hz.

   Notes when porting to production:
   - The HUD polling is lightweight but could be replaced with an event-driven update if the source code emits events (recommended for better performance).
   - Keep the DOM ids consistent if you port the getter to source so the HUD continues to work.

Quick migration checklist to avoid losing changes on rebuild:
- Add the state getter to the level2 bootstrap source file (instead of the build artifact). Commit that change to source.
- Move HUD markup and associated CSS/JS into a dedicated front-end component (e.g., `src/ui/hud.html` / a small JS module) so it can be maintained separately from the built game.
- Optionally add a small integration test that the getter returns expected fields after game initialization.

Testing tips:
- Run a local static server and open `game-level2.html`. Use devtools: `window.__mmb_get_state()` should return an object with `players` and `frame_count`.
- If the getter returns `undefined`, check console for script load errors or that `game-level2.js` executed successfully before the HUD polling starts.

Security note:
- The getter only exposes readonly numeric/string fields and a reference to the game object for debugging. Do not expose secrets or server-side internals. Gate exposure behind debug flags where appropriate.

Change log (this file created):
- Created on: (auto)
- Author: integration script

