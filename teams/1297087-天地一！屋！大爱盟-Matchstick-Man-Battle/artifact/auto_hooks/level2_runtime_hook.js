// Runtime auto-hook for level2
// - Wraps Game$start_run to expose window.__mmb_game and window.__mmb_get_state
// - Wraps Game$check_bullet_collision to detect health deltas and emit __mmb_trigger_hit(playerIndex, undefined, undefined, damage)
// - Adds a non-invasive canvas-parenting fallback: tries to patch p5.prototype.createCanvas and uses a MutationObserver fallback
(function(){
  function safeGet(name){ try { return window[name]; } catch(e){ return undefined; } }
  var startName = 'Great$45$Love$45$League$Stick_Man_Battle$server$$Game$start_run';
  var checkName = 'Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_bullet_collision';

  function attachGetter(game){
    try{
      if(!game) return;
      try{ window.__mmb_game = game; }catch(e){}
      try{
        window.__mmb_get_state = function(){
          try{
            var players = [];
            if(game && game.particle_list && game.particle_list.length){
              for(var i=0;i<game.particle_list.length;i++){
                var p = game.particle_list[i];
                var ctrl = (p && p.control) ? p.control : { health: 0 };
                var obj = { index: (p && p.index)!==undefined ? p.index : i, health: (ctrl.health===undefined?0:ctrl.health) };
                try{ obj.name = p.name!==undefined? p.name : null; }catch(e){ obj.name = null; }
                try{ obj.avatar = p.avatar!==undefined? p.avatar : null; }catch(e){ obj.avatar = null; }
                try{ obj.ammo = p.ammo!==undefined? p.ammo : null; }catch(e){ obj.ammo = null; }
                try{ obj.score = p.score!==undefined? p.score : null; }catch(e){ obj.score = null; }
                players.push(obj);
              }
            }
            return { players: players, frame_count: (game && game.frame_count)? game.frame_count : 0 };
          }catch(e){ return { players: [], frame_count: 0 }; }
        };
      }catch(e){}
    }catch(e){}
  }

  // wrap start_run
  var origStart = safeGet(startName);
  if(origStart && typeof origStart === 'function'){
    try{
      window[startName] = function(game){
        try{ attachGetter(game); }catch(e){}
        return origStart.apply(this, arguments);
      };
    }catch(e){}
  } else {
    // if not present yet, poll for it
    var to = setInterval(function(){
      var f = safeGet(startName);
      if(f && typeof f === 'function'){
        clearInterval(to);
        var original = f;
        window[startName] = function(game){ try{ attachGetter(game); }catch(e){}; return original.apply(this, arguments); };
      }
    }, 120);
  }

  // wrap bullet collision to detect health changes
  var origCheck = safeGet(checkName);
  function wrapCheck(fn){
    return function(self, bullet){
      try{
        var before = {};
        try{
          if(self && self.particle_list){ for(var i=0;i<self.particle_list.length;i++){ var p=self.particle_list[i]; before[p.index!==undefined? p.index:i]= (p && p.control && p.control.health)? p.control.health : 0; } }
        }catch(e){}
        var res = fn.apply(this, arguments);
        try{
          if(self && self.particle_list){ for(var i=0;i<self.particle_list.length;i++){ var p=self.particle_list[i]; var idx = p.index!==undefined? p.index:i; var after = (p && p.control && p.control.health)? p.control.health : 0; var delta = before[idx] - after; if(delta > 0){ try{ if(typeof window !== 'undefined' && window.__mmb_trigger_hit) { try{ window.__mmb_trigger_hit(idx, undefined, undefined, delta); }catch(e){} } }catch(e){} } } }
        }catch(e){}
        return res;
      }catch(e){ try{ return fn.apply(this, arguments); }catch(e){} }
    };
  }
  if(origCheck && typeof origCheck === 'function'){
    try{ window[checkName] = wrapCheck(origCheck); }catch(e){}
  } else {
    var t2 = setInterval(function(){ var f = safeGet(checkName); if(f && typeof f === 'function'){ clearInterval(t2); try{ window[checkName] = wrapCheck(f); }catch(e){} } }, 120);
  }

  // Canvas parenting helper: try to patch p5.prototype.createCanvas and use MutationObserver fallback
  function ensureCanvasParenting(){
    try{
      var getContainer = function(){ return (typeof document !== 'undefined') ? document.getElementById('game-container') : null; };

      function moveCanvasToContainer(c){
        try{
          var cont = getContainer();
          if(!cont || !c) return;
          // If c looks like a p5 Element with parent API
          if(c && typeof c.parent === 'function'){
            try{ c.parent('game-container'); return; }catch(e){}
          }
          var node = c && (c.elt || c.canvas) ? (c.elt || c.canvas) : c;
          if(node && node.parentNode !== cont){
            try{ cont.appendChild(node); }catch(e){}
          }
        }catch(e){}
      }

      // Patch p5.prototype.createCanvas when available
      function patchP5(){
        try{
          if(window.p5 && window.p5.prototype && !window.__mmb_p5_patched){
            var orig = window.p5.prototype.createCanvas;
            if(typeof orig === 'function'){
              window.p5.prototype.createCanvas = function(){
                var res = orig.apply(this, arguments);
                try{ setTimeout(function(){ moveCanvasToContainer(res); }, 0); }catch(e){}
                return res;
              };
              window.__mmb_p5_patched = true;
              return true;
            }
          }
        }catch(e){}
        return false;
      }

      if(!patchP5()){
        // poll for p5 to patch later
        var ppoll = setInterval(function(){ if(patchP5()){ clearInterval(ppoll); } }, 120);
      }

      // MutationObserver fallback: move newly added canvases
      try{
        var observer = new MutationObserver(function(muts){
          muts.forEach(function(m){
            if(m.addedNodes && m.addedNodes.length){
              for(var i=0;i<m.addedNodes.length;i++){
                var n = m.addedNodes[i];
                if(!n) continue;
                if(n.nodeName === 'CANVAS') moveCanvasToContainer(n);
                else if(n.querySelectorAll){
                  try{ var list = n.querySelectorAll('canvas'); for(var j=0;j<list.length;j++) moveCanvasToContainer(list[j]); }catch(e){}
                }
              }
            }
          });
        });
        if(typeof document !== 'undefined' && (document.body || document.documentElement)){
          observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
        }
      }catch(e){}

      // Move any existing canvases after a short delay
      try{ setTimeout(function(){
        try{
          if(typeof document !== 'undefined'){
            var existing = Array.prototype.slice.call(document.querySelectorAll('canvas'));
            for(var k=0;k<existing.length;k++) moveCanvasToContainer(existing[k]);
          }
        }catch(e){}
      }, 140); }catch(e){}

    }catch(e){}
  }

  // Start canvas parenting logic (non-blocking)
  try{ ensureCanvasParenting(); }catch(e){}

})();
// Runtime auto-hook for level2
// - Wraps Game$start_run to expose window.__mmb_game and window.__mmb_get_state
// - Wraps Game$check_bullet_collision to detect health deltas and emit __mmb_trigger_hit(playerIndex, undefined, undefined, damage)
(function(){
  function safeGet(name){ try { return window[name]; } catch(e){ return undefined; } }
  var startName = 'Great$45$Love$45$League$Stick_Man_Battle$server$$Game$start_run';
  var checkName = 'Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_bullet_collision';

  function attachGetter(game){
    try{
      if(!game) return;
      try{ window.__mmb_game = game; }catch(e){}
      try{
        window.__mmb_get_state = function(){
          try{
            var players = [];
            if(game && game.particle_list && game.particle_list.length){
              for(var i=0;i<game.particle_list.length;i++){
                var p = game.particle_list[i];
                var ctrl = (p && p.control) ? p.control : { health: 0 };
                var obj = { index: (p && p.index)!==undefined ? p.index : i, health: (ctrl.health===undefined?0:ctrl.health) };
                try{ obj.name = p.name!==undefined? p.name : null; }catch(e){ obj.name = null; }
                try{ obj.avatar = p.avatar!==undefined? p.avatar : null; }catch(e){ obj.avatar = null; }
                try{ obj.ammo = p.ammo!==undefined? p.ammo : null; }catch(e){ obj.ammo = null; }
                try{ obj.score = p.score!==undefined? p.score : null; }catch(e){ obj.score = null; }
                players.push(obj);
              }
            }
            return { players: players, frame_count: (game && game.frame_count)? game.frame_count : 0 };
          }catch(e){ return { players: [], frame_count: 0 }; }
        };
      }catch(e){}
    }catch(e){}
  }

  // wrap start_run
  var origStart = safeGet(startName);
  if(origStart && typeof origStart === 'function'){
    try{
      window[startName] = function(game){
        try{ attachGetter(game); }catch(e){}
        return origStart.apply(this, arguments);
      };
    }catch(e){}
  } else {
    // if not present yet, poll for it
    var to = setInterval(function(){
      var f = safeGet(startName);
      if(f && typeof f === 'function'){
        clearInterval(to);
        var original = f;
        window[startName] = function(game){ try{ attachGetter(game); }catch(e){}; return original.apply(this, arguments); };
      }
    }, 120);
  }

  // wrap bullet collision to detect health changes
  var origCheck = safeGet(checkName);
  function wrapCheck(fn){
    return function(self, bullet){
      try{
        var before = {};
        try{
          if(self && self.particle_list){ for(var i=0;i<self.particle_list.length;i++){ var p=self.particle_list[i]; before[p.index!==undefined? p.index:i]= (p && p.control && p.control.health)? p.control.health : 0; } }
        }catch(e){}
        var res = fn.apply(this, arguments);
        try{
          if(self && self.particle_list){ for(var i=0;i<self.particle_list.length;i++){ var p=self.particle_list[i]; var idx = p.index!==undefined? p.index:i; var after = (p && p.control && p.control.health)? p.control.health : 0; var delta = before[idx] - after; if(delta > 0){ try{ if(typeof window !== 'undefined' && window.__mmb_trigger_hit) { try{ window.__mmb_trigger_hit(idx, undefined, undefined, delta); }catch(e){} } }catch(e){} } } }
        }catch(e){}
        return res;
      }catch(e){ try{ return fn.apply(this, arguments); }catch(e){} }
    };
  }
  if(origCheck && typeof origCheck === 'function'){
    try{ window[checkName] = wrapCheck(origCheck); }catch(e){}
  } else {
    var t2 = setInterval(function(){ var f = safeGet(checkName); if(f && typeof f === 'function'){ clearInterval(t2); try{ window[checkName] = wrapCheck(f); }catch(e){} } }, 120);
  }
})();
