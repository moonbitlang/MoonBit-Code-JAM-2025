/*
 * Invasive hook snippets for `game-level2.js`.
 *
 * Usage:
 *  - Open `target/js/release/build/game-level2/game-level2.js`.
 *  - Find the bootstrap area where `Game$start_run(game)` is called and paste the BOOTSTRAP_SNIPPET immediately before that call.
 *  - Find the damage handling line like `_bind.health = _bind.health - damage | 0;` and paste HIT_SNIPPET immediately after that line.
 *  - Optionally: locate `p.createCanvas(width, height)` in the p5 setup and replace it with or append the CANVAS_PARENT_SNIPPET.
 *
 * Note: Always make a backup before editing.
 */

// ---------- BOOTSTRAP_SNIPPET (paste before Game$start_run(game)) ----------
(function(){
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
})();

// ---------- HIT_SNIPPET (paste immediately after health decrement) ----------
(function(){
  try{
    if (typeof window !== 'undefined' && window.__mmb_trigger_hit) {
      try{
        var __mmb_idx = (typeof particle !== 'undefined' && particle && particle.index!==undefined) ? particle.index : (typeof idx !== 'undefined' ? idx : null);
        var __mmb_hx = (typeof hx !== 'undefined') ? hx : undefined;
        var __mmb_hy = (typeof hy !== 'undefined') ? hy : undefined;
        var __mmb_dmg = (typeof damage !== 'undefined') ? damage : 0;
        try{ window.__mmb_trigger_hit(__mmb_idx, __mmb_hx, __mmb_hy, __mmb_dmg); }catch(e){}
      }catch(e){}
    }
  }catch(e){}
})();

// ---------- CANVAS_PARENT_SNIPPET (use in p.setup after createCanvas) ----------
/*
var __mmb_cnv = p.createCanvas(width, height);
try{
  var __mmb_container = (typeof document !== 'undefined') ? document.getElementById('game-container') : null;
  if (__mmb_container) {
    if (__mmb_cnv && typeof __mmb_cnv.parent === 'function') {
      try { __mmb_cnv.parent('game-container'); } catch(e) { }
    } else {
      var __mmb_node = (__mmb_cnv && (__mmb_cnv.elt || __mmb_cnv.canvas)) || __mmb_cnv;
      if (__mmb_node && __mmb_node.parentNode !== __mmb_container) {
        try { __mmb_container.appendChild(__mmb_node); } catch(e) { }
      }
    }
  }
}catch(e){}
*/
