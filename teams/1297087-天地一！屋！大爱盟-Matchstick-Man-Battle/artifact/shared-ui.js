(function(){
    // Box2D 检测（上游页面仍需按顺序加载 p5 -> box2d -> game）
    (function(){
        function checkBox2D(){
            if (typeof b2World === 'undefined' && typeof b2Vec2 === 'undefined' && typeof b2Settings === 'undefined') {
                console.warn('Box2D 未检测到：本地 ./box2d.js 可能未正确加载，或导出符号不匹配。请检查文件路径、脚本加载顺序（p5 -> box2d -> game）或控制台中的脚本错误。');
            }
        }
        if (document.readyState === 'complete') {
            setTimeout(checkBox2D, 50);
        } else {
            window.addEventListener('load', function(){ setTimeout(checkBox2D, 50); });
        }
    })();

    // 返回菜单按钮
    try { document.getElementById('back-to-menu').addEventListener('click', function() { window.location.href = 'index.html'; }); } catch(e){}

    // canvas 迁移与自适配
    (function() {
        var container = document.getElementById('game-container');
        if (!container) return;

        function moveExistingCanvases() {
            var canvases = Array.prototype.slice.call(document.querySelectorAll('body > canvas'));
            canvases.forEach(function(c) {
                if (c.parentNode !== container) {
                    container.appendChild(c);
                }
            });
        }

        function pickPrimaryCanvas() {
            var list = Array.prototype.slice.call(container.querySelectorAll('canvas'));
            if (list.length === 0) return null;
            var p5c = list.find(function(c){ return (c.classList && c.classList.contains('p5Canvas')); });
            var primary = p5c || list.reduce(function(best, c){
                var br = c.getBoundingClientRect();
                var area = Math.floor((br.width||0) * (br.height||0));
                if (!best) return { c: c, area: area };
                return (area > best.area) ? { c: c, area: area } : best;
            }, null);
            var chosen = p5c || (primary && primary.c) || list[0];
            list.forEach(function(c){ if (c !== chosen) { c.style.display = 'none'; } else { c.style.display = 'block'; } });
            return chosen;
        }

        function fitContainerToCanvas(canvas) {
            if (!canvas) return;
            var rect = canvas.getBoundingClientRect();
            var w = Math.round(rect.width);
            var h = Math.round(rect.height);
            if (!w || !h) {
                w = Math.round(canvas.clientWidth || canvas.width || 0);
                h = Math.round(canvas.clientHeight || canvas.height || 0);
            }
            if (w > 0) container.style.width = w + 'px';
            if (h > 0) container.style.height = h + 'px';
        }

        var mo = new MutationObserver(function(mutations) {
            mutations.forEach(function(m) {
                if (m.type === 'childList' && m.addedNodes.length) {
                    m.addedNodes.forEach(function(node) {
                        if (node.nodeName === 'CANVAS') {
                            var main = pickPrimaryCanvas() || node;
                            var fallback = container.querySelector('canvas#canvas');
                            if (fallback && fallback !== main) fallback.style.display = 'none';
                            fitContainerToCanvas(main);

                            if (window.ResizeObserver) {
                                var ro = new ResizeObserver(function() {
                                    var m = pickPrimaryCanvas() || main;
                                    fitContainerToCanvas(m);
                                });
                                ro.observe(main);
                            }
                        }
                    });
                }
            });
        });
        mo.observe(container, { childList: true, subtree: false });

        if (document.readyState === 'complete') {
            moveExistingCanvases();
            var main = pickPrimaryCanvas();
            if (main) fitContainerToCanvas(main);
        } else {
            window.addEventListener('load', function() {
                moveExistingCanvases();
                var main = pickPrimaryCanvas();
                if (main) fitContainerToCanvas(main);
            });
        }
    })();

    // HUD 更新
    (function() {
        function safeText(id, v) { var el = document.getElementById(id); if (el) el.textContent = (v===null || v===undefined) ? '—' : v; }
        function safeIcon(id, icon) { var el = document.getElementById(id); if (el) el.textContent = icon || '👤'; }
        function safeFill(id, pct, textId) { var f = document.getElementById(id); if (f) f.style.width = (pct) + '%'; if (textId) { var t = document.getElementById(textId); if (t) t.textContent = pct + '/100'; } }

        function updateHUD() {
            try {
                var getter = window.__mmb_get_state;
                var state = undefined;
                if (typeof getter === 'function') state = getter();
                else if (window.__mmb_game) {
                    var raw = window.__mmb_game;
                    if (raw && raw.particle_list && raw.particle_list.length>0) {
                        state = { players: [] };
                        for (var i=0;i<raw.particle_list.length;i++) {
                            var p = raw.particle_list[i];
                            var ctrl = p && p.control ? p.control : { health:0 };
                            state.players.push({ index: p.index, health: ctrl.health, name: (p.name||null) });
                        }
                    }
                }

                if (!state || !state.players) return;

                var p0 = state.players[0] || { health:0, name:'P0', ammo:null, score:null, avatar:null };
                var hp0 = Math.max(0, Math.min(100, (p0.health===undefined||p0.health===null)?0:p0.health));
                safeFill('p0-hp-fill', hp0, 'p0-hp-text');
                safeText('p0-name', p0.name || ('P'+(p0.index===undefined?0:p0.index)));
                safeText('p0-ammo', (p0.ammo===null||p0.ammo===undefined)?'—':p0.ammo);
                safeText('p0-score', (p0.score===null||p0.score===undefined)?'—':p0.score);
                safeIcon('p0-avatar', '👤');

                var p1 = state.players[1] || { health:0, name:'P1', ammo:null, score:null, avatar:null };
                var hp1 = Math.max(0, Math.min(100, (p1.health===undefined||p1.health===null)?0:p1.health));
                safeFill('p1-hp-fill', hp1, 'p1-hp-text');
                safeText('p1-name', p1.name || ('P'+(p1.index===undefined?1:p1.index)));
                safeText('p1-ammo', (p1.ammo===null||p1.ammo===undefined)?'—':p1.ammo);
                safeText('p1-score', (p1.score===null||p1.score===undefined)?'—':p1.score);
                safeIcon('p1-avatar', '🤖');

            } catch (e) {
                // ignore update errors
            }
        }

        setInterval(updateHUD, 100);
        setTimeout(updateHUD, 250);
    })();

    // FX 层
    (function(){
        var canvas = document.getElementById('fx-canvas');
        if (!canvas) return;
        var container = document.getElementById('stage-wrapper');
        var ctx = canvas.getContext('2d');
        var dpi = window.devicePixelRatio || 1;
        var particles = [];
        if (!window.__mmb_fx_queue) window.__mmb_fx_queue = [];
        window.__mmb_trigger_hit = function(playerIndex, screenX, screenY, damage) {
            try { window.__mmb_fx_queue.push({ type: 'hit', player: playerIndex, x: screenX, y: screenY, damage: damage }); } catch (e) {}
        };
        var running = true;

        function resize() {
            var w = container.clientWidth;
            var h = container.clientHeight;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            canvas.width = Math.max(1, Math.floor(w * dpi));
            canvas.height = Math.max(1, Math.floor(h * dpi));
            ctx.setTransform(dpi,0,0,dpi,0,0);
        }

        function spawn(n) {
            for (var i=0;i<n;i++) {
                particles.push({
                    x: Math.random()*container.clientWidth,
                    y: Math.random()*container.clientHeight,
                    vx: (Math.random()-0.5)*0.6,
                    vy: (Math.random()-0.5)*0.6,
                    r: 2 + Math.random()*6,
                    life: 200 + Math.floor(Math.random()*400),
                    alpha: 0.08 + Math.random()*0.18
                });
            }
        }

        function spawnBurst(x,y,count,color) {
            for (var i=0;i<count;i++) {
                var ang = Math.random()*Math.PI*2;
                var speed = 1 + Math.random()*3;
                particles.push({ x: x + (Math.random()-0.5)*6, y: y + (Math.random()-0.5)*6, vx: Math.cos(ang)*speed, vy: Math.sin(ang)*speed, r: 1+Math.random()*4, life: 40+Math.floor(Math.random()*60), alpha: 0.3, color: color });
            }
        }

        function shakeStage(intensity, duration) {
            try {
                var el = document.getElementById('stage-wrapper');
                if (!el) return;
                var start = performance.now();
                var rafId = null;
                var prev = el.__shake_prev || '';
                el.__shake_prev = prev;

                function tick(now) {
                    var elapsed = now - start;
                    var t = elapsed / duration;
                    if (t >= 1) {
                        el.style.transform = '';
                        if (rafId) cancelAnimationFrame(rafId);
                        return;
                    }
                    var damper = 1 - t;
                    var max = intensity * damper;
                    var x = (Math.random() * 2 - 1) * max;
                    var y = (Math.random() * 2 - 1) * max;
                    var rot = (Math.random() * 2 - 1) * (max * 0.06);
                    el.style.transform = 'translate(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px) rotate(' + rot.toFixed(2) + 'deg)';
                    rafId = requestAnimationFrame(tick);
                }
                rafId = requestAnimationFrame(tick);
            } catch (e) { }
        }

        function step() {
            if (!running) return;
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            for (var i=particles.length-1;i>=0;i--) {
                var p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life--;
                p.alpha *= 0.9997;
                if (p.x < -20) p.x = container.clientWidth + 20;
                if (p.x > container.clientWidth + 20) p.x = -20;
                if (p.y < -20) p.y = container.clientHeight + 20;
                if (p.y > container.clientHeight + 20) p.y = -20;
                var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*2);
                if (p.color) {
                    grd.addColorStop(0, 'rgba('+p.color.r+','+p.color.g+','+p.color.b+','+ (p.alpha*0.9) +')');
                    grd.addColorStop(1, 'rgba('+p.color.r+','+p.color.g+','+p.color.b+',0)');
                } else {
                    grd.addColorStop(0, 'rgba(255,255,255,'+ (p.alpha*0.9) +')');
                    grd.addColorStop(1, 'rgba(120,80,255,0)');
                }
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
                ctx.fill();
                if (p.life <= 0) particles.splice(i,1);
            }
            if (window.__mmb_fx_queue && window.__mmb_fx_queue.length) {
                while (window.__mmb_fx_queue.length) {
                    var q = window.__mmb_fx_queue.shift();
                    if (q && q.type === 'hit') {
                        var sx = q.x, sy = q.y;
                        if (typeof sx !== 'number' || typeof sy !== 'number') { sx = container.clientWidth/2; sy = container.clientHeight/2; }
                        var dmg = q.damage || 10;
                        var intensity = Math.min(28, 4 + Math.floor(dmg * 0.6));
                        var duration = Math.min(700, 120 + Math.floor(dmg * 12));
                        try { shakeStage(intensity, duration); } catch(e){}
                        try {
                            var flash = document.getElementById('fx-flash');
                            if (flash) {
                                flash.style.background = 'radial-gradient(circle at '+(sx/container.clientWidth*100).toFixed(1)+'% '+(sy/container.clientHeight*100).toFixed(1)+'%, rgba(255,220,200,0.28), rgba(255,60,140,0.06) 36%, rgba(0,0,0,0) 56%)';
                                flash.style.opacity = 0.72;
                                setTimeout(function(){ flash.style.opacity = 0; }, Math.min(240, Math.max(120, Math.floor(duration*0.28))));
                            }
                        } catch (e) {}
                    }
                }
            }
            if (particles.length < 36) spawn(6);
            requestAnimationFrame(step);
        }

        window.addEventListener('resize', function(){ resize(); });
        setTimeout(function(){ resize(); spawn(36); requestAnimationFrame(step); }, 200);
    })();

    // 侧边面板控制
    (function(){
        var volumeSlider = document.getElementById('volume-slider');
        var volumeDisplay = document.getElementById('volume-display');
        var muteToggle = document.getElementById('mute-toggle');
        
        if (volumeSlider && volumeDisplay) {
            volumeSlider.addEventListener('input', function(){
                volumeDisplay.textContent = this.value + '%';
                if (window.__mmb_setVolume) window.__mmb_setVolume(this.value / 100);
            });
        }
        
        if (muteToggle) {
            muteToggle.addEventListener('change', function(){
                if (window.__mmb_setMute) window.__mmb_setMute(this.checked);
            });
        }
        
        var btnInstructions = document.getElementById('btn-instructions');
        if (btnInstructions) {
            btnInstructions.addEventListener('click', function(){
                alert('游戏说明：\n- WASD 移动\n- 鼠标瞄准\n- 左键射击\n- 击败对手获得分数！');
            });
        }
        
        var btnClear = document.getElementById('btn-clear');
        if (btnClear) {
            btnClear.addEventListener('click', function(){
                if (confirm('确定要清空所有游戏记录吗？')) {
                    localStorage.removeItem('mmb-high-score');
                    localStorage.removeItem('mmb-max-combo');
                    localStorage.removeItem('mmb-total-games');
                    localStorage.removeItem('mmb-wins');
                    var el;
                    if (el=document.getElementById('high-score')) el.textContent = '0';
                    if (el=document.getElementById('max-combo')) el.textContent = '0';
                    if (el=document.getElementById('total-games')) el.textContent = '0';
                    if (el=document.getElementById('win-rate')) el.textContent = '0%';
                    alert('记录已清空！');
                }
            });
        }
        
        var btnClose = document.getElementById('btn-close');
        if (btnClose) {
            btnClose.addEventListener('click', function(){
                if (confirm('确定要退出游戏吗？')) {
                    window.location.href = 'index.html';
                }
            });
        }
        
        function loadStats() {
            var highScore = localStorage.getItem('mmb-high-score') || '9';
            var maxCombo = localStorage.getItem('mmb-max-combo') || '6';
            var totalGames = parseInt(localStorage.getItem('mmb-total-games') || '0');
            var wins = parseInt(localStorage.getItem('mmb-wins') || '0');
            var winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;
            var el;
            if (el=document.getElementById('high-score')) el.textContent = highScore;
            if (el=document.getElementById('max-combo')) el.textContent = maxCombo;
            if (el=document.getElementById('total-games')) el.textContent = totalGames;
            if (el=document.getElementById('win-rate')) el.textContent = winRate + '%';
        }
        
        var gameStartTime = Date.now();
        setInterval(function(){
            var elapsed = Math.floor((Date.now() - gameStartTime) / 1000);
            var minutes = Math.floor(elapsed / 60);
            var seconds = elapsed % 60;
            var el = document.getElementById('game-time');
            if (el) el.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }, 1000);
        
        loadStats();
    })();

})();
