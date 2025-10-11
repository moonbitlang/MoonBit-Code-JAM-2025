// flappy_bird_game.js

// 全局变量存储游戏状态
let gameExports = null;

// 优化的音频管理系统
class AudioManager {
    constructor() {
        this.sounds = {};
        this.soundPool = {}; // 音频对象池，支持同时播放多个相同音效
        this.muted = false;
        this.volume = 0.5;
        this.loadedCount = 0;
        this.totalSounds = 5;
        this.maxConcurrentSounds = 3; // 每个音效最大同时播放数
        this.init();
    }

    init() {
        // 预加载音频文件
        this.loadSound('jump', 'sounds/jump.mp3');
        this.loadSound('item', 'sounds/item.mp3');
        this.loadSound('score', 'sounds/score.mp3');
        this.loadSound('gameover', 'sounds/gameover.mp3');
        this.loadSound('background', 'sounds/background.mp3');
    }

    loadSound(name, src) {
        const audio = new Audio();
        audio.src = src;
        audio.preload = 'auto';
        audio.volume = this.volume;
        
        // 添加加载事件监听
        audio.addEventListener('canplaythrough', () => {
            this.loadedCount++;
            if (this.loadedCount === this.totalSounds) {
            }
        });
        
        audio.addEventListener('error', (e) => {
            console.error('音频文件加载失败:', name, src);
            this.sounds[name] = null;
            this.loadedCount++;
        });
        
        this.sounds[name] = audio;
        
        // 初始化音频池
        this.soundPool[name] = [];
        for (let i = 0; i < this.maxConcurrentSounds; i++) {
            const poolAudio = new Audio();
            poolAudio.src = src;
            poolAudio.volume = this.volume;
            this.soundPool[name].push(poolAudio);
        }
    }

    play(name, volume = 1.0) {
        if (this.muted) {
            return;
        }
        
        // 使用音频池中的音频对象
        const pool = this.soundPool[name];
        if (pool && pool.length > 0) {
            let availableAudio = null;
            
            // 查找可用的音频对象
            for (let i = 0; i < pool.length; i++) {
                if (pool[i].paused || pool[i].ended) {
                    availableAudio = pool[i];
                    break;
                }
            }
            
            if (availableAudio) {
                availableAudio.currentTime = 0;
                availableAudio.volume = this.volume * volume;
                availableAudio.play().catch(e => {
                    console.error('音频播放失败:', name, e);
                });
            }
        }
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        // 更新所有音频池中的音量
        Object.values(this.soundPool).forEach(pool => {
            pool.forEach(audio => {
                audio.volume = this.volume;
            });
        });
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }

    isMuted() {
        return this.muted;
    }
}

// 创建全局音频管理器
const audioManager = new AudioManager();

// 内存管理：清理函数
function cleanup() {
    // 清理音频资源
    if (audioManager && audioManager.sounds) {
        Object.values(audioManager.sounds).forEach(sound => {
            if (sound) {
                sound.pause();
                sound.src = '';
                sound.load();
            }
        });
    }
    
    // 清理WASM模块
    if (gameExports) {
        gameExports = null;
    }
}

// 页面卸载时清理资源
window.addEventListener('beforeunload', cleanup);

// 用户交互激活音频
let audioActivated = false;
function activateAudio() {
    if (!audioActivated) {
        audioActivated = true;
        // 测试播放一个静音音频来激活音频上下文
        const testAudio = new Audio();
        testAudio.volume = 0;
        testAudio.play().catch(() => {});
    }
}

// 监听用户交互
document.addEventListener('click', activateAudio, { once: true });
document.addEventListener('keydown', activateAudio, { once: true });


// 音频控制函数
window.toggleMute = function() {
    const muted = audioManager.toggleMute();
    const button = document.getElementById('muteButton');
    if (button) {
        button.textContent = muted ? '🔇 静音' : '🔊 音效';
    }
};

window.setVolume = function(value) {
    const volume = parseInt(value) / 100;
    audioManager.setVolume(volume);
};


// 简单的调试函数
window.checkGameState = function() {
    if (gameExports) {
        console.log('游戏状态:', {
            分数: typeof gameExports.get_score === 'function' ? gameExports.get_score() : '未知',
            形态: typeof gameExports.get_evolution_stage === 'function' ? gameExports.get_evolution_stage() : '未知',
            游戏开始: typeof gameExports.is_game_started === 'function' ? gameExports.is_game_started() : '未知',
            游戏结束: typeof gameExports.is_game_over === 'function' ? gameExports.is_game_over() : '未知'
        });
    } else {
        console.log('游戏尚未加载完成');
    }
};

async function loadFlappyBirdWasm() {
    try {
        console.log('开始加载Flappy Bird WebAssembly模块...');
        
        // 移除图片加载，使用纯几何图形渲染
        
        // 创建WebAssembly内存
        const memory = new WebAssembly.Memory({
            initial: 256,
            maximum: 256
        });
        
        // 提供导入参数
        const imports = {
            env: {
                memory: memory,
                trace: function(message) {
                    console.log('WASM Trace:', message);
                }
            },
            spectest: {
                print: () => {},
                print_char: () => {},
                print_i32: () => {},
                print_i64: () => {},
                print_f32: () => {},
                print_f64: () => {},
                print_i32_f32: () => {},
                print_f64_f64: () => {},
                global_i32: 0,
                global_i64: 0,
                global_f32: 0.0,
                global_f64: 0.0,
                table: new WebAssembly.Table({ initial: 10, element: 'anyfunc' }),
                memory: memory
            }
        };
        
        console.log('使用WebAssembly.instantiateStreaming...');
        // 加版本参数避免浏览器缓存旧的 wasm
        const wasmUrl = 'flappybird_js.wasm?v=' + Math.floor(Date.now() / 1000);
        const module = await WebAssembly.instantiateStreaming(fetch(wasmUrl), imports);
        console.log('Flappy Bird WebAssembly模块实例化成功');
        
        // 检测所有导出的函数和对象
        const exports = module.instance.exports;
        
        // 将exports赋值给全局变量
        gameExports = exports;
        const exportKeys = Object.keys(exports);
        
        console.log('=== 所有导出的内容 ===');
        console.log('总共有', exportKeys.length, '个导出项');
        
        // 分类导出项
        const functions = [];
        const memories = [];
        const tables = [];
        const globals = [];
        
        exportKeys.forEach(key => {
            const item = exports[key];
            if (typeof item === 'function') {
                functions.push(key);
            } else if (item instanceof WebAssembly.Memory) {
                memories.push(key);
            } else if (item instanceof WebAssembly.Table) {
                tables.push(key);
            } else if (item instanceof WebAssembly.Global) {
                globals.push(key);
            }
        });
        
        // 显示分类结果
        console.log('\n=== 导出函数 (', functions.length, '个) ===');
        functions.forEach(func => {
            console.log('-', func);
        });
        
        if (memories.length > 0) {
            console.log('\n=== 导出内存 (', memories.length, '个) ===');
            memories.forEach(mem => {
                console.log('-', mem);
            });
        }
        
        if (tables.length > 0) {
            console.log('\n=== 导出表 (', tables.length, '个) ===');
            tables.forEach(table => {
                console.log('-', table);
            });
        }
        
        if (globals.length > 0) {
            console.log('\n=== 导出全局变量 (', globals.length, '个) ===');
            globals.forEach(global => {
                console.log('-', global);
            });
        }
        
        // 测试调用一些常见函数
        console.log('\n=== 测试调用函数 ===');
        
        if (functions.includes('add')) {
            console.log('测试 add(1, 2):', exports.add(1, 2));
        }
        
        console.log('\n=== 导出检测完成 ===');
        
        // ==================== 将导出函数接入渲染循环与输入 ====================
        const canvas = document.getElementById('canvas');
        if (!canvas) {
            console.error('无法找到Canvas元素！');
            return;
        }
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('无法获取Canvas 2D上下文！');
            return;
        }
        
        console.log('Canvas初始化成功:', canvas.width, 'x', canvas.height);
        
        // 禁用图片平滑，保持像素清晰
        ctx.imageSmoothingEnabled = false;
        
        // 测试绘制一个简单的矩形来验证Canvas工作
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(10, 10, 50, 50);
        console.log('Canvas测试绘制完成');
        
        // 设置Canvas为高分辨率，但保持游戏逻辑尺寸
        const scale = 4; // 放大4倍，从160x160变成640x640
        canvas.width = 160 * scale;
        canvas.height = 160 * scale;
        canvas.style.width = '640px';
        canvas.style.height = '640px';
        ctx.scale(scale, scale);
        
        // 视觉用：云层与小鸟速度平滑
        let lastBy = 80;
        let smoothVy = 0;
        const clouds = Array.from({ length: 4 }, () => ({
            x: Math.random() * 160,
            y: Math.random() * 60 + 6,
            r: Math.random() * 6 + 6,
            s: Math.random() * 0.2 + 0.1
        }));
        const scoreEl = document.getElementById('score');
        const startScreen = document.getElementById('startScreen');
        const gameOverScreen = document.getElementById('gameOverScreen');
        const finalScoreEl = document.getElementById('finalScore');
        
        // 新增UI元素
        const currentModeEl = document.getElementById('currentMode');
        const evolutionEl = document.getElementById('evolution');
        const livesEl = document.getElementById('lives');
        const goldEl = document.getElementById('gold');
        const difficultyEl = document.getElementById('difficulty');
        const comboEl = document.getElementById('combo');
        const timeEl = document.getElementById('time');
        

        // 初始化游戏（安全判断导出是否存在）
        if (typeof exports.game_init === 'function') {
            exports.game_init();
        }
        
        
        // 全局变量跟踪当前模式
        let currentGameMode = 0;
        // 是否处于模式选择界面（用于覆盖 over 状态导致的界面回切）
        let inModeSelection = false;
        
// 生存模式相关变量
let survivalMode = {
    isActive: false,
    currentStage: 'collection', // 'collection' 或 'boss'
    collectionTime: 10, // 10秒收集阶段
    elapsedTime: 0,
    collectedPowerUps: [],
    boss: null,
    projectiles: [],
    powerUpSystem: null,
    playerCombat: null
};
        
        // 音效相关变量
        let lastScore = 0;
        let lastGameOver = false;
        
        // 动画相关变量
        let animationTime = 0;
        
        // 视觉反馈变量
        let screenShake = 0;
        let screenShakeIntensity = 0;
        
        
        
        
        
        
        // 游戏模式选择函数
        window.selectGameMode = function(mode) {
            currentGameMode = mode; // 保存当前模式
            // 退出模式选择状态
            inModeSelection = false;
            
            if (typeof exports.set_game_mode === 'function') {
                exports.set_game_mode(mode);
                
                // 特别检查挑战模式
                if (mode === 4) { // Challenge模式
                    console.log('✅ 挑战模式已设置');
                    const bossExists = exports.get_boss_exists ? exports.get_boss_exists() : 0;
                    const bossHealth = exports.get_boss_health ? exports.get_boss_health() : 0;
                    console.log('set_game_mode后: Boss存在=', bossExists, '生命=', bossHealth);
                }
            }
            
            // 延迟一点再开始游戏，确保模式设置生效
            setTimeout(() => {
                if (typeof exports.game_start === 'function') {
                    exports.game_start();
                    // 再次检查速度
                    if (mode === 4) {
                        console.log('游戏开始后速度:', exports.get_pipe_speed ? exports.get_pipe_speed() : '未知');
                    }
                    // 挑战模式：检查Boss是否正确创建
                    if (mode === 4) {
                        setTimeout(() => {
                            try {
                                const gm = exports.get_game_mode ? exports.get_game_mode() : -1;
                                const be = exports.get_boss_exists ? exports.get_boss_exists() : -1;
                                const bx = exports.get_boss_x ? exports.get_boss_x() : -1;
                                const by = exports.get_boss_y ? exports.get_boss_y() : -1;
                                const bh = exports.get_boss_health ? exports.get_boss_health() : -1;
                                console.log('挑战模式Boss检查: mode=', gm, 'exists=', be, 'pos=(', bx, ',', by, ') health=', bh);
                                
                                if (be === 0) {
                                    console.error('❌ Boss未创建！尝试手动创建...');
                                    // 这里可以添加手动创建Boss的逻辑
                                }
                            } catch (e) {
                                console.error('Boss检查异常:', e);
                            }
                        }, 50);
                    }
                }
            }, 10);
        };
        
        
        // 重新开始当前模式
        window.restartCurrentMode = function() {
            // 退出模式选择状态
            inModeSelection = false;
            
            // 强制隐藏游戏结束界面
            const gameOverScreen = document.getElementById('gameOverScreen');
            const startScreen = document.getElementById('startScreen');
            if (gameOverScreen) {
                gameOverScreen.style.display = 'none';
            }
            if (startScreen) {
                startScreen.style.display = 'none';
            }
            
            // 重置游戏状态
            if (typeof exports.set_game_mode === 'function') {
                exports.set_game_mode(currentGameMode);
            }
            if (typeof exports.game_start === 'function') {
                exports.game_start();
            }
            
            // 重置音效相关变量
            lastScore = 0;
            lastGameOver = false;
            
            // 重置渲染缓存
            renderCache.backgroundDirty = true;
            renderCache.pipesDirty = true;
            renderCache.itemsDirty = true;
            renderCache.isInitialized = false;
            
        };
        
        // 显示模式选择界面
        window.showModeSelection = function() {
            console.log('显示模式选择界面');
            const startScreen = document.getElementById('startScreen');
            const gameOverScreen = document.getElementById('gameOverScreen');
            if (startScreen && gameOverScreen) {
                startScreen.style.display = 'block';
                gameOverScreen.style.display = 'none';
                console.log('界面切换完成');
            }
            // 进入模式选择状态，防止渲染循环因 over=true 把界面切回“游戏结束”
            inModeSelection = true;
            // 重置游戏状态
            if (typeof exports.game_init === 'function') {
                exports.game_init();
            }
            // 重置音效相关变量
            lastScore = 0;
            lastGameOver = false;
            
            // 重置渲染缓存
            renderCache.backgroundDirty = true;
            renderCache.pipesDirty = true;
            renderCache.itemsDirty = true;
            renderCache.isInitialized = false;
        };

        // 输入状态（持续按下生效）
        const input = { up: false, down: false, left: false, right: false, b1: false };

        // 键盘映射：Space 同时作为开始与上升
        const keyMapDown = {
            ArrowUp: () => { 
                input.up = true; 
                // 播放跳跃音效
                audioManager.play('jump');
            },
            KeyW: () => { 
                input.up = true; 
                // 播放跳跃音效
                audioManager.play('jump');
            },
            ArrowDown: () => { input.down = true; },
            KeyS: () => { input.down = true; },
            ArrowLeft: () => { input.left = true; },
            KeyA: () => { input.left = true; },
            ArrowRight: () => { input.right = true; },
            KeyD: () => { input.right = true; },
            Space: () => { 
                input.b1 = true; 
                input.up = true; 
                // 播放跳跃音效
                audioManager.play('jump');
                // 如果游戏结束，重新开始当前模式
                const over = typeof exports.is_game_over === 'function' ? exports.is_game_over() : 0;
                const started = typeof exports.is_game_started === 'function' ? exports.is_game_started() : 0;
                if (over === 1) {
                    window.restartCurrentMode();
                }
            },
            KeyJ: () => {
                // J键：玩家攻击（挑战模式）
                console.log('J键按下 - 玩家攻击');
                if (typeof exports.player_attack_export === 'function') {
                    exports.player_attack_export();
                    // 添加攻击震动效果
                    addScreenShake(3);
                    console.log('玩家攻击已触发');
                } else {
                    console.log('player_attack_export 函数不存在');
                }
            }
        };
        const keyMapUp = {
            ArrowUp: () => { input.up = false; },
            KeyW: () => { input.up = false; },
            ArrowDown: () => { input.down = false; },
            KeyS: () => { input.down = false; },
            ArrowLeft: () => { input.left = false; },
            KeyA: () => { input.left = false; },
            ArrowRight: () => { input.right = false; },
            KeyD: () => { input.right = false; },
            Space: () => { input.b1 = false; input.up = false; }
        };

        window.addEventListener('keydown', (e) => {
            const fn = keyMapDown[e.code];
            if (fn) { fn(); e.preventDefault(); }
        });
        window.addEventListener('keyup', (e) => {
            const fn = keyMapUp[e.code];
            if (fn) { fn(); e.preventDefault(); }
        });

        function sendInput() {
            if (typeof exports.handle_input_i === 'function') {
                exports.handle_input_i(
                    input.up ? 1 : 0,
                    input.down ? 1 : 0,
                    input.left ? 1 : 0,
                    input.right ? 1 : 0,
                    input.b1 ? 1 : 0
                );
            }
        }

        // 背景渐变缓存
        let backgroundGradients = null;
        
        function initBackgroundGradients() {
            if (backgroundGradients) return;
            
            backgroundGradients = {
                sky: (() => {
                    const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    sky.addColorStop(0, '#9AD9FF');
                    sky.addColorStop(1, '#E6F7FF');
                    return sky;
                })(),
                sun: (() => {
                    const sun = ctx.createRadialGradient(20, 20, 2, 20, 20, 14);
                    sun.addColorStop(0, 'rgba(255, 255, 180, 0.9)');
                    sun.addColorStop(1, 'rgba(255, 255, 180, 0)');
                    return sun;
                })(),
                ground: (() => {
                    const groundH = 12;
                    const gg = ctx.createLinearGradient(0, canvas.height - groundH, 0, canvas.height);
                    gg.addColorStop(0, '#7CCB5F');
                    gg.addColorStop(1, '#4E9E3E');
                    return gg;
                })()
            };
        }

        function drawBackground() {
            // 完全依赖mbt文件中的主题设置
            const theme = typeof exports.get_theme === 'function' ? exports.get_theme() : 0;
            
            if (theme === 0) {
                // 地球主题 - 使用mbt文件设置
                if (!backgroundGradients) {
                    initBackgroundGradients();
                }
                
                // 天空渐变
                ctx.fillStyle = backgroundGradients.sky;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // 太阳（左上）
                ctx.fillStyle = backgroundGradients.sun;
                ctx.beginPath();
                ctx.arc(20, 20, 14, 0, Math.PI * 2);
                ctx.fill();

                // 云层
                ctx.save();
                ctx.globalAlpha = 0.55;
                ctx.fillStyle = '#FFFFFF';
                for (const c of clouds) {
                    ctx.beginPath();
                    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
                    ctx.arc(c.x + c.r * 0.8, c.y + 1, c.r * 0.8, 0, Math.PI * 2);
                    ctx.arc(c.x - c.r * 0.6, c.y + 1, c.r * 0.7, 0, Math.PI * 2);
                    ctx.fill();
                    // 移动
                    c.x -= c.s * (1 + Math.sin(animationTime * 0.001) * 0.1);
                    if (c.x < -c.r - 4) {
                        c.x = 160 + c.r + 4;
                        c.y = Math.random() * 60 + 6;
                        c.r = Math.random() * 6 + 6;
                        c.s = Math.random() * 0.2 + 0.1;
                    }
                }
                ctx.restore();

                // 地面
                const groundH = 12;
                ctx.fillStyle = backgroundGradients.ground;
                ctx.fillRect(0, canvas.height - groundH, canvas.width, groundH);
                
                // 地面纹理
                const textureOffset = (animationTime * 0.05) % 8;
                ctx.fillStyle = 'rgba(34, 139, 34, 0.3)';
            } else if (theme === 1) {
                // 太空主题 - 星空背景
                ctx.fillStyle = '#000011';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // 绘制星星
                drawStars();
                
                // 太空地面
                ctx.fillStyle = '#1a1a2e';
                ctx.fillRect(0, canvas.height - 12, canvas.width, 12);
            }
            
            // 地面纹理（仅地球主题）
            if (theme === 0) {
                const textureOffset = (animationTime * 0.05) % 8;
                for (let i = 0; i < canvas.width + 8; i += 8) {
                    const x = (i - textureOffset) % (canvas.width + 8);
                    ctx.fillRect(x, canvas.height - 18, 2, 2);
                    ctx.fillRect(x + 4, canvas.height - 16, 1, 1);
                }
            }
        }
        
        function drawStars() {
            // 绘制星空
            ctx.fillStyle = '#FFFFFF';
            for (let i = 0; i < 50; i++) {
                const x = (i * 37) % canvas.width;
                const y = (i * 23) % (canvas.height - 20);
                const size = (i % 3) + 1;
                ctx.fillRect(x, y, size, size);
            }
            
            // 顶部浅线
            ctx.fillStyle = 'rgba(255,255,255,0.25)';
            ctx.fillRect(0, canvas.height - 12, canvas.width, 1);
        }

        function drawBird(x, y) {
            // 获取小鸟的有效大小和形态
            const birdSize = typeof exports.get_effective_bird_size_export === 'function' ? 
                exports.get_effective_bird_size_export() : 12;
            const evolutionStage = typeof exports.get_evolution_stage === 'function' ? 
                exports.get_evolution_stage() : 0;
            
            // 检查是否有隐形效果
            let isInvisible = false;
            const gameMode = typeof exports.get_game_mode === 'function' ? exports.get_game_mode() : 0;
            
            // 在挑战模式下禁用隐形效果，让无敌状态使用经典模式的渲染方式
            if (gameMode !== 4) { // 不是挑战模式
                if (typeof exports.get_active_effects_count === 'function') {
                    const effectsCount = exports.get_active_effects_count();
                    for (let i = 0; i < effectsCount; i++) {
                        const effectType = exports.get_effect_type(i);
                        if (effectType === 10) { // 隐形道具
                            isInvisible = true;
                            break;
                        }
                    }
                }
            }
            
            
            
            // 形态变化检测（静默）
            if (evolutionStage !== window.lastEvolutionStage) {
                window.lastEvolutionStage = evolutionStage;
            }
            
            // 根据形态选择颜色，直接使用WASM中设定的大小
            let birdColor, eyeColor, beakColor;
            switch(evolutionStage) {
                case 0: // Chick - 雏鸟
                    birdColor = '#FFD700';
                    eyeColor = '#000000';
                    beakColor = '#FF6B35';
                    break;
                case 1: // Adult - 成鸟
                    birdColor = '#FFA500';
                    eyeColor = '#000000';
                    beakColor = '#FF4500';
                    break;
                case 2: // Eagle - 雄鹰
                    birdColor = '#8B4513';
                    eyeColor = '#FFD700';
                    beakColor = '#FFD700';
                    break;
                case 3: // Phoenix - 凤凰
                    birdColor = '#FF4500';
                    eyeColor = '#FFD700';
                    beakColor = '#FFD700';
                    break;
                case 4: // Dragon - 神龙
                    birdColor = '#4B0082';
                    eyeColor = '#FF0000';
                    beakColor = '#FFD700';
                    break;
                default:
                    birdColor = '#FFD700';
                    eyeColor = '#000000';
                    beakColor = '#FF6B35';
            }
            
            // 直接使用WASM中设定的有效大小，不进行任何调整
            const finalSize = birdSize;
            
            // 隐形效果处理
            if (isInvisible) {
                // 完全隐形，不绘制任何小鸟图形
                return;
            }
            
            // 护盾闪烁效果
            if (typeof exports.has_shield_effect === 'function' && exports.has_shield_effect() === 1) {
                const blinkAlpha = 0.5 + 0.5 * Math.sin(Date.now() * 0.01);
                ctx.globalAlpha = blinkAlpha;
            } else {
                ctx.globalAlpha = 1.0;
            }
            
            // 使用统一的小鸟形状，只改变颜色和大小
            ctx.save();
            
            // 主体 - 使用圆形
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, finalSize/2);
            gradient.addColorStop(0, birdColor);
            gradient.addColorStop(1, adjustColor(birdColor, -30));
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, finalSize/2, 0, Math.PI * 2);
            ctx.fill();
            
            // 添加高光效果 - 按比例缩放
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(x - finalSize/8, y - finalSize/8, finalSize/8, 0, Math.PI * 2);
            ctx.fill();
            
            // 眼睛 - 按比例缩放
            const eyeSize = Math.max(1, finalSize/6);
            const eyeOffsetX = finalSize/6;
            const eyeOffsetY = -finalSize/6;
            
            ctx.fillStyle = eyeColor;
            ctx.beginPath();
            ctx.arc(x + eyeOffsetX, y + eyeOffsetY, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            
            // 眼睛高光 - 按比例缩放
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(x + eyeOffsetX + eyeSize/4, y + eyeOffsetY - eyeSize/4, eyeSize/4, 0, Math.PI * 2);
            ctx.fill();
            
            // 嘴巴 - 按比例缩放
            const beakSize = Math.max(1, finalSize/6);
            const beakOffsetX = finalSize/3;
            const beakOffsetY = -finalSize/12;
            
            ctx.fillStyle = beakColor;
            ctx.beginPath();
            ctx.moveTo(x + beakOffsetX, y + beakOffsetY);
            ctx.lineTo(x + beakOffsetX + beakSize, y + beakOffsetY - beakSize/2);
            ctx.lineTo(x + beakOffsetX, y + beakOffsetY - beakSize);
            ctx.closePath();
            ctx.fill();
            
            // 翅膀动画效果 - 按比例缩放，增大翅膀尺寸
            const wingOffset = Math.sin(Date.now() * 0.01) * (finalSize/4);
            const wingColor = adjustColor(birdColor, -20);
            
            // 绘制翅膀，使用多个小圆形模拟羽毛
            ctx.fillStyle = wingColor;
            
            // 主羽毛簇 - 按比例缩放，增加羽毛数量和大小
            const featherCount = Math.max(4, Math.floor(finalSize/3));
            for (let i = 0; i < featherCount; i++) {
                const featherX = x - finalSize/3 + i * (finalSize/15);
                const featherY = y + wingOffset + i * (finalSize/15);
                const featherSize = Math.max(0.8, finalSize/5 - i * (finalSize/30));
                
                ctx.beginPath();
                ctx.arc(featherX, featherY, featherSize, 0, Math.PI * 2);
                ctx.fill();
                
                // 添加羽毛纹理
                ctx.fillStyle = adjustColor(wingColor, -10);
                ctx.beginPath();
                ctx.arc(featherX - featherSize/2, featherY - featherSize/2, featherSize/3, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = wingColor;
            }
            
            // 添加额外的羽绒效果 - 按比例缩放，增大羽绒区域
            const fluffCount = Math.max(3, Math.floor(finalSize/6));
            for (let i = 0; i < fluffCount; i++) {
                const fluffX = x - finalSize/4 + Math.random() * (finalSize/4);
                const fluffY = y + wingOffset + Math.random() * (finalSize/4);
                const fluffSize = Math.max(0.5, finalSize/12 + Math.random() * (finalSize/18));
                
                ctx.fillStyle = adjustColor(wingColor, -15 + Math.random() * 10);
                ctx.beginPath();
                ctx.arc(fluffX, fluffY, fluffSize, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.restore();
            
            // 确保透明度被重置，避免影响后续绘制
            ctx.globalAlpha = 1.0;
            
            // 所有形态保持完全相同的形状，不添加任何特殊特效
            lastBy = y;
        }

        function drawPipes() {
            // 调试输出已关闭
            if (typeof exports.get_pipes_count !== 'function') {
                console.log('get_pipes_count 函数不存在');
                return;
            }
            const count = exports.get_pipes_count();
            
            for (let i = 0; i < count; i++) {
                const x = exports.get_pipe_x(i);
                const h = exports.get_pipe_h(i);
                const rand = exports.get_pipe_rand(i);
                const gap = exports.get_pipe_randgap(i);

                // 管帽高度
                const capHeight = 8;
                
                // 上管道 - 调整高度，让管帽包含在总高度内
                const topX = x;
                const topY = 0;
                const topW = 20;
                const topH = 160 - gap - h - capHeight; // 减去管帽高度

                // 下管道 - 修正高度计算
                const bottomX = x + rand;
                const bottomY = 160 - h; // 保持原来的位置
                const bottomW = 20;
                const bottomH = h; // 保持原来的高度，不减去管帽

                // 蓝黑渐变（替换原来的绿色渐变）
                const topGrad = ctx.createLinearGradient(topX, 0, topX + topW, 0);
                topGrad.addColorStop(0, '#4169E1'); // 皇家蓝
                topGrad.addColorStop(0.2, '#1E90FF'); // 道奇蓝
                topGrad.addColorStop(0.5, '#000080'); // 海军蓝
                topGrad.addColorStop(0.8, '#191970'); // 午夜蓝
                topGrad.addColorStop(1, '#000000'); // 黑色
                
                const bottomGrad = ctx.createLinearGradient(bottomX, 0, bottomX + bottomW, 0);
                bottomGrad.addColorStop(0, '#4169E1');
                bottomGrad.addColorStop(0.2, '#1E90FF');
                bottomGrad.addColorStop(0.5, '#000080');
                bottomGrad.addColorStop(0.8, '#191970');
                bottomGrad.addColorStop(1, '#000000');

                // 上管体 - 添加圆角效果
                ctx.fillStyle = topGrad;
                ctx.beginPath();
                ctx.roundRect(topX, topY, topW, topH, 3);
                ctx.fill();
                
                // 上管体高光效果
                const topHighlight = ctx.createLinearGradient(topX, 0, topX + 8, 0);
                topHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
                topHighlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = topHighlight;
                ctx.beginPath();
                ctx.roundRect(topX, topY, 8, topH, 3);
                ctx.fill();
                
                // 上管帽沿 - 蓝黑渐变
                const capGrad = ctx.createLinearGradient(topX - 2, topH - 2, topX + topW + 2, topH - 2);
                capGrad.addColorStop(0, '#6495ED'); // 矢车菊蓝
                capGrad.addColorStop(0.3, '#4169E1'); // 皇家蓝
                capGrad.addColorStop(0.6, '#191970'); // 午夜蓝
                capGrad.addColorStop(0.8, '#000080'); // 海军蓝
                capGrad.addColorStop(1, '#000000'); // 黑色
                ctx.fillStyle = capGrad;
                ctx.beginPath();
                ctx.roundRect(topX - 2, topH - 2, topW + 4, capHeight, 4);
                ctx.fill();
                
                // 上管帽高光
                const capHighlight = ctx.createLinearGradient(topX - 2, topH - 2, topX + topW + 2, topH - 2);
                capHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
                capHighlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
                capHighlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = capHighlight;
                ctx.beginPath();
                ctx.roundRect(topX - 2, topH - 2, topW + 4, 3, 2);
                ctx.fill();
                
                // 在上管帽处添加尖刺
                ctx.fillStyle = '#000000';
                const spikeCount = 5;
                const spikeWidth = (topW + 4) / spikeCount;
                for (let j = 0; j < spikeCount; j++) {
                    const spikeX = topX - 2 + j * spikeWidth + spikeWidth / 2;
                    ctx.beginPath();
                    ctx.moveTo(spikeX - spikeWidth / 4, topH - 2);
                    ctx.lineTo(spikeX, topH - 2 - 4); // 尖刺高度
                    ctx.lineTo(spikeX + spikeWidth / 4, topH - 2);
                    ctx.closePath();
                    ctx.fill();
                }

                // 下管体 - 添加圆角效果
                ctx.fillStyle = bottomGrad;
                ctx.beginPath();
                ctx.roundRect(bottomX, bottomY, bottomW, bottomH, 3);
                ctx.fill();
                
                // 下管体高光效果
                const bottomHighlight = ctx.createLinearGradient(bottomX, 0, bottomX + 8, 0);
                bottomHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
                bottomHighlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = bottomHighlight;
                ctx.beginPath();
                ctx.roundRect(bottomX, bottomY, 8, bottomH, 3);
                ctx.fill();
                
                // 下管帽沿 - 位置在管体上方，蓝黑渐变
                const bottomCapGrad = ctx.createLinearGradient(bottomX - 2, bottomY - 2, bottomX + bottomW + 2, bottomY - 2);
                bottomCapGrad.addColorStop(0, '#6495ED');
                bottomCapGrad.addColorStop(0.3, '#4169E1');
                bottomCapGrad.addColorStop(0.6, '#191970');
                bottomCapGrad.addColorStop(0.8, '#000080');
                bottomCapGrad.addColorStop(1, '#000000');
                ctx.fillStyle = bottomCapGrad;
                ctx.beginPath();
                ctx.roundRect(bottomX - 2, bottomY - 2, bottomW + 4, capHeight, 4);
                ctx.fill();
                
                // 下管帽高光
                const bottomCapHighlight = ctx.createLinearGradient(bottomX - 2, bottomY - 2, bottomX + bottomW + 2, bottomY - 2);
                bottomCapHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
                bottomCapHighlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
                bottomCapHighlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = bottomCapHighlight;
                ctx.beginPath();
                ctx.roundRect(bottomX - 2, bottomY - 2, bottomW + 4, 3, 2);
                ctx.fill();
                
                // 在下管帽处添加尖刺
                ctx.fillStyle = '#000000';
                for (let j = 0; j < spikeCount; j++) {
                    const spikeX = bottomX - 2 + j * spikeWidth + spikeWidth / 2;
                    ctx.beginPath();
                    ctx.moveTo(spikeX - spikeWidth / 4, bottomY - 2 + capHeight);
                    ctx.lineTo(spikeX, bottomY - 2 + capHeight + 4); // 尖刺高度
                    ctx.lineTo(spikeX + spikeWidth / 4, bottomY - 2 + capHeight);
                    ctx.closePath();
                    ctx.fill();
                }

                // 内侧暗线增强立体感
                ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                ctx.beginPath();
                ctx.roundRect(topX + 2, topY, 2, topH, 1);
                ctx.fill();
                ctx.beginPath();
                ctx.roundRect(bottomX + 2, bottomY, 2, bottomH, 1);
                ctx.fill();
                
                // 添加管道纹理效果
                ctx.strokeStyle = 'rgba(0, 0, 139, 0.3)'; // 深蓝色纹理
                ctx.lineWidth = 1;
                for (let j = 0; j < topH; j += 6) {
                    ctx.beginPath();
                    ctx.moveTo(topX + 1, topY + j);
                    ctx.lineTo(topX + topW - 1, topY + j);
                    ctx.stroke();
                }
                for (let j = 0; j < bottomH; j += 6) {
                    ctx.beginPath();
                    ctx.moveTo(bottomX + 1, bottomY + j);
                    ctx.lineTo(bottomX + bottomW - 1, bottomY + j);
                    ctx.stroke();
                }

                // 外描边 - 更精致的边框
                ctx.strokeStyle = 'rgba(0, 0, 139, 0.5)'; // 深蓝色边框
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.roundRect(topX + 0.5, topY + 0.5, topW - 1, topH - 1, 3);
                ctx.stroke();
                ctx.beginPath();
                ctx.roundRect(bottomX + 0.5, bottomY + 0.5, bottomW - 1, bottomH - 1, 3);
                ctx.stroke();
                
                // 管帽边框
                ctx.strokeStyle = 'rgba(0, 0, 139, 0.6)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.roundRect(topX - 1.5, topH - 1.5, topW + 3, capHeight, 4);
                ctx.stroke();
                ctx.beginPath();
                ctx.roundRect(bottomX - 1.5, bottomY - 1.5, bottomW + 3, capHeight, 4);
                ctx.stroke();
            }
        }

        function drawItems() {
            if (typeof exports.get_items_count !== 'function') return;
            const count = exports.get_items_count();
            for (let i = 0; i < count; i++) {
                const x = exports.get_item_x(i);
                const y = exports.get_item_y(i);
                const type = exports.get_item_type(i);
                const collected = exports.is_item_collected(i);
                
                if (collected === 1) {
                    // 检测道具收集并播放音效
                    audioManager.play('item');
                    // 添加道具收集粒子效果
                    for (let j = 0; j < 3; j++) {
                        createParticle(x, y, 'item');
                    }
                    continue;
                }
                
                // 根据道具类型选择颜色和形状
                let color, symbol;
                switch(type) {
                    case 0: // Shield - 护盾
                        color = '#00BFFF';
                        symbol = '🛡';
                        break;
                    case 1: // Speed - 加速
                        color = '#FF4500';
                        symbol = '⚡';
                        break;
                    case 2: // Shrink - 缩小
                        color = '#9370DB';
                        symbol = '🔍';
                        break;
                    case 3: // Magnet - 磁铁
                        color = '#FFD700';
                        symbol = '🧲';
                        break;
                    case 4: // Gravity - 重力反转
                        color = '#FF69B4';
                        symbol = '🔄';
                        break;
                    case 5: // Teleport - 传送门
                        color = '#8A2BE2';
                        symbol = '🌀';
                        break;
                    case 6: // ScoreDouble - 分数翻倍
                        color = '#32CD32';
                        symbol = '✖';
                        break;
                    case 7: // Life - 生命值
                        color = '#FF1493';
                        symbol = '❤';
                        break;
                    case 8: // Gold - 金币
                        color = '#FFD700';
                        symbol = '💰';
                        break;
                    case 9: // Evolution - 形态加速器
                        color = '#FF6347';
                        symbol = '🔥';
                        break;
                    case 10: // Invisible - 隐形道具
                        color = '#800080';
                        symbol = '👻';
                        break;
                    case 11: // Enlarge - 放大道具
                        color = '#FF4500';
                        symbol = '🔍';
                        break;
                    default:
                        color = '#808080';
                        symbol = '?';
                }
                
                // 绘制道具背景
                ctx.fillStyle = color;
                ctx.fillRect(x, y, 10, 10);
                
                // 绘制道具边框
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, 10, 10);
                
                // 绘制道具符号（简化版）
                ctx.fillStyle = '#FFFFFF';
                ctx.font = '8px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(symbol, x + 5, y + 7);
            }
        }

        // 绘制生成模式道具
function drawSurvivalItems() {
    if (typeof exports.get_survival_items_count !== 'function') return;
    const count = exports.get_survival_items_count();
    
    for (let i = 0; i < count; i++) {
        const x = (typeof exports.get_survival_item_x === 'function') ? exports.get_survival_item_x(i) : 0;
        const y = (typeof exports.get_survival_item_y === 'function') ? exports.get_survival_item_y(i) : 0;
        const type = (typeof exports.get_survival_item_type === 'function') ? exports.get_survival_item_type(i) : 0;
        // 兼容不同导出函数命名：is_survival_item_collected 或 get_survival_item_collected
        let collected = 0;
        if (typeof exports.is_survival_item_collected === 'function') {
            collected = exports.is_survival_item_collected(i);
        } else if (typeof exports.get_survival_item_collected === 'function') {
            collected = exports.get_survival_item_collected(i);
        }
                
                if (collected === 1) {
                    // 检测生成模式道具收集并播放音效
                    audioManager.play('item');
                    // 添加道具收集粒子效果
                    for (let j = 0; j < 5; j++) {
                        createParticle(x, y, 'item');
                    }
                    continue;
                }
                
                // 根据生成模式道具类型选择颜色和形状
                let color, symbol;
                switch(type) {
                    case 0: // SpeedBoost - 速度提升
                        color = '#FF6B6B';
                        symbol = '⚡';
                        break;
                    case 1: // Shield - 护盾
                        color = '#4ECDC4';
                        symbol = '🛡';
                        break;
                    case 2: // AttackPower - 攻击力提升
                        color = '#FFD93D';
                        symbol = '⚔';
                        break;
                    case 3: // HealthBoost - 生命值提升
                        color = '#6BCF7F';
                        symbol = '❤';
                        break;
                    case 4: // ScoreMultiplier - 分数翻倍
                        color = '#E74C3C';
                        symbol = '💎';
                        break;
                    default:
                        color = '#808080';
                        symbol = '?';
                }
                
                // 绘制生成模式道具背景（更大更显眼）
                const gradient = ctx.createRadialGradient(x + 7, y + 7, 0, x + 7, y + 7, 10);
                gradient.addColorStop(0, color);
                gradient.addColorStop(1, adjustColor(color, -30));
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x + 7, y + 7, 7, 0, Math.PI * 2);
                ctx.fill();
                
                // 绘制道具边框
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // 绘制道具符号
                ctx.fillStyle = '#FFFFFF';
                ctx.font = '10px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(symbol, x + 7, y + 10);
                
                // 添加发光效果
                ctx.shadowColor = color;
                ctx.shadowBlur = 5;
                ctx.strokeStyle = color;
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
        }

        // 绘制Boss
        function drawBoss() {
            if (typeof exports.get_boss_exists !== 'function') return;
            const bossExists = exports.get_boss_exists();
            if (bossExists !== 1) return;

            const bossType = (typeof exports.get_boss_type === 'function') ? exports.get_boss_type() : 0;
            const bossX = (typeof exports.get_boss_x === 'function') ? exports.get_boss_x() : 0;
            const bossY = (typeof exports.get_boss_y === 'function') ? exports.get_boss_y() : 0;
            const bossHealth = (typeof exports.get_boss_health === 'function') ? exports.get_boss_health() : 0;
            const bossMaxHealth = (typeof exports.get_boss_max_health === 'function') ? exports.get_boss_max_health() : 1;
            const bossPhase = (typeof exports.get_boss_phase === 'function') ? exports.get_boss_phase() : 0;

            // 根据Boss类型选择颜色和样式
            let bossColor, bossName;
            switch(bossType) {
                case 0: // Dragon - 火焰巨龙
                    bossColor = '#E74C3C';
                    bossName = '火焰巨龙';
                    break;
                case 1: // StormElemental - 风暴元素
                    bossColor = '#3498DB';
                    bossName = '风暴元素';
                    break;
                case 2: // EarthGolem - 岩石巨人
                    bossColor = '#95A5A6';
                    bossName = '岩石巨人';
                    break;
                default:
                    bossColor = '#808080';
                    bossName = '未知Boss';
            }

            // 绘制Boss主体
            const gradient = ctx.createRadialGradient(bossX + 15, bossY + 15, 0, bossX + 15, bossY + 15, 20);
            gradient.addColorStop(0, bossColor);
            gradient.addColorStop(1, adjustColor(bossColor, -40));
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(bossX + 15, bossY + 15, 15, 0, Math.PI * 2);
            ctx.fill();

            // 绘制Boss边框
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2;
            ctx.stroke();

            // 绘制Boss名称
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '8px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(bossName, bossX + 15, bossY - 5);

            // 绘制Boss血条 - 增大血条尺寸以便观察血量变化
            const healthBarWidth = 60;  // 从30增加到60像素
            const healthBarHeight = 8;  // 从4增加到8像素
            const healthPercent = bossHealth / bossMaxHealth;
            
            // 血条背景 - 居中显示
            const healthBarX = bossX - (healthBarWidth - 30) / 2; // 居中血条
            const healthBarY = bossY - 20; // 稍微上移
            ctx.fillStyle = '#333333';
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);
            
            // 血条填充
            ctx.fillStyle = bossColor;
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth * healthPercent, healthBarHeight);
            
            // 血条边框
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2; // 增加边框宽度
            ctx.strokeRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

            // 绘制血量数值（居中显示当前/最大值）
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '7px Arial';
            ctx.textAlign = 'center';
            const hpText = bossHealth + '/' + bossMaxHealth;
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.strokeText(hpText, bossX + healthBarWidth / 2, bossY - 17);
            ctx.fillText(hpText, bossX + healthBarWidth / 2, bossY - 17);

            // 二阶段特效
            if (bossPhase === 2) {
                // 添加愤怒效果
                ctx.shadowColor = bossColor;
                ctx.shadowBlur = 10;
                ctx.strokeStyle = bossColor;
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
        }

        // 测试函数：手动创建投射物
        function testCreateProjectile() {
            if (typeof exports.player_attack_export === 'function') {
                console.log("🧪 测试：手动创建投射物");
                exports.player_attack_export();
            } else {
                console.log("❌ player_attack_export函数不存在");
            }
        }
        
        // 调试函数：检查所有WASM导出函数
        function debugWasmFunctions() {
            console.log("🔍 检查WASM导出函数状态:");
            
            const functions = [
                'get_projectiles_count',
                'get_projectile_x',
                'get_projectile_y', 
                'get_projectile_damage',
                'get_projectile_active',
                'player_attack_export',
                'get_boss_exists',
                'get_game_mode'
            ];
            
            functions.forEach(funcName => {
                const exists = typeof exports[funcName] === 'function';
                console.log(`${exists ? '✅' : '❌'} ${funcName}: ${exists ? '存在' : '不存在'}`);
            });
            
            // 检查当前游戏状态
            if (typeof exports.get_game_mode === 'function') {
                const mode = exports.get_game_mode();
                console.log(`🎮 当前游戏模式: ${mode}`);
            }
            
            if (typeof exports.get_boss_exists === 'function') {
                const bossExists = exports.get_boss_exists();
                console.log(`👹 Boss存在: ${bossExists}`);
            }
            
            if (typeof exports.get_projectiles_count === 'function') {
                const count = exports.get_projectiles_count();
                console.log(`🎯 当前投射物数量: ${count}`);
            }
        }
        
        // 凤凰复活机制调试函数
        function debugPhoenixRebirth() {
            console.log('=== 凤凰复活机制调试 ===');
            if (typeof exports.get_evolution_stage === 'function') {
                const stage = exports.get_evolution_stage();
                console.log('当前形态:', ['雏鸟', '成鸟', '雄鹰', '凤凰', '神龙'][stage]);
                if (stage === 3) { // 凤凰形态
                    console.log('✅ 当前为凤凰形态，具有60%重生概率');
                    console.log('重生机制：碰撞时60%概率触发重生，40%概率正常扣血');
                    console.log('重生效果：红色粒子特效 + 涅槃提示 + 重置位置');
                } else {
                    console.log('❌ 当前不是凤凰形态，无重生能力');
                }
            }
            if (typeof exports.get_player_lives === 'function') {
                console.log('当前生命数:', exports.get_player_lives());
            }
            if (typeof exports.get_phoenix_effects_count === 'function') {
                console.log('当前凤凰特效数量:', exports.get_phoenix_effects_count());
            }
            if (typeof exports.get_nirvana_notification_active === 'function') {
                console.log('涅槃提示状态:', exports.get_nirvana_notification_active());
            }
        }
        
        // 详细的涅槃调试函数
        function debugNirvanaDetailed() {
            console.log('=== 详细涅槃调试 ===');
            
            // 检查形态
            const stage = typeof exports.get_evolution_stage === 'function' ? exports.get_evolution_stage() : -1;
            console.log('1. 当前形态:', stage, '(', ['雏鸟', '成鸟', '雄鹰', '凤凰', '神龙'][stage], ')');
            
            // 检查涅槃提示状态
            const nirvanaActive = typeof exports.get_nirvana_notification_active === 'function' ? 
                exports.get_nirvana_notification_active() : false;
            console.log('2. 涅槃提示激活:', nirvanaActive);
            
            // 检查HTML元素
            const nirvanaElement = document.getElementById('nirvanaNotification');
            console.log('3. HTML涅槃元素存在:', !!nirvanaElement);
            if (nirvanaElement) {
                console.log('4. HTML涅槃元素显示状态:', nirvanaElement.style.display);
            }
            
            // 检查凤凰特效
            const effectsCount = typeof exports.get_phoenix_effects_count === 'function' ? 
                exports.get_phoenix_effects_count() : 0;
            console.log('5. 凤凰特效数量:', effectsCount);
            
            // 检查特效详情
            if (effectsCount > 0) {
                console.log('6. 凤凰特效详情:');
                for (let i = 0; i < effectsCount; i++) {
                    const x = typeof exports.get_phoenix_effect_x === 'function' ? exports.get_phoenix_effect_x(i) : 0;
                    const y = typeof exports.get_phoenix_effect_y === 'function' ? exports.get_phoenix_effect_y(i) : 0;
                    const life = typeof exports.get_phoenix_effect_life === 'function' ? exports.get_phoenix_effect_life(i) : 0;
                    const phase = typeof exports.get_phoenix_effect_phase === 'function' ? exports.get_phoenix_effect_phase(i) : 0;
                    console.log(`   特效${i}: 位置(${x},${y}) 生命${life} 阶段${phase}`);
                }
            }
            
            // 检查游戏状态
            const gameStarted = typeof exports.is_game_started === 'function' ? exports.is_game_started() : 0;
            const gameOver = typeof exports.is_game_over === 'function' ? exports.is_game_over() : 0;
            console.log('7. 游戏状态: 开始=', gameStarted, '结束=', gameOver);
        }
        
        // 测试凤凰特效渲染
        function testPhoenixEffects() {
            console.log('🔥 测试凤凰特效渲染');
            
            // 手动创建一些测试特效
            const testEffects = [
                { x: 200, y: 200, life: 60, size: 15, intensity: 100, phase: 0 },
                { x: 200, y: 200, life: 80, size: 20, intensity: 150, phase: 1 },
                { x: 200, y: 200, life: 100, size: 30, intensity: 200, phase: 2 }
            ];
            
            // 临时替换渲染函数来测试
            const originalDrawPhoenixEffects = drawPhoenixEffects;
            drawPhoenixEffects = function() {
                console.log('🎨 开始渲染凤凰特效');
                testEffects.forEach((effect, i) => {
                    console.log(`渲染特效${i}:`, effect);
                    ctx.save();
                    switch(effect.phase) {
                        case 0:
                            drawFireParticle(effect.x, effect.y, effect.size, effect.intensity);
                            break;
                        case 1:
                            drawLightEffect(effect.x, effect.y, effect.size, effect.intensity);
                            break;
                        case 2:
                            drawRebirthRing(effect.x, effect.y, effect.size, effect.intensity);
                            break;
                    }
                    ctx.restore();
                });
            };
            
            // 3秒后恢复原函数
            setTimeout(() => {
                drawPhoenixEffects = originalDrawPhoenixEffects;
                console.log('✅ 凤凰特效测试完成，已恢复原函数');
            }, 3000);
        }
        
        // 简单测试渲染函数
        function testSimpleRender() {
            console.log('🎨 测试简单渲染');
            
            // 直接在当前画布上绘制一个简单的红色圆圈
            ctx.save();
            ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
            ctx.beginPath();
            ctx.arc(200, 200, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            
            console.log('✅ 简单渲染测试完成');
        }
        
        // 完整涅槃调试函数
        function debugNirvanaComplete() {
            console.log('🔥 完整涅槃调试开始');
            
            // 1. 检查游戏状态
            const gameStarted = typeof exports.is_game_started === 'function' ? exports.is_game_started() : 0;
            const gameOver = typeof exports.is_game_over === 'function' ? exports.is_game_over() : 0;
            console.log('游戏状态: 开始=', gameStarted, '结束=', gameOver);
            
            // 2. 检查进化阶段
            const evolutionStage = typeof exports.get_evolution_stage === 'function' ? exports.get_evolution_stage() : -1;
            console.log('进化阶段:', evolutionStage, '(4=凤凰)');
            
            // 3. 检查涅槃提示
            const nirvanaActive = typeof exports.get_nirvana_notification_active === 'function' ? exports.get_nirvana_notification_active() : 0;
            const nirvanaTime = typeof exports.get_nirvana_notification_time === 'function' ? exports.get_nirvana_notification_time() : 0;
            console.log('涅槃提示: 激活=', nirvanaActive, '时间=', nirvanaTime);
            
            // 4. 检查凤凰特效
            const effectsCount = typeof exports.get_phoenix_effects_count === 'function' ? exports.get_phoenix_effects_count() : 0;
            console.log('凤凰特效数量:', effectsCount);
            
            if (effectsCount > 0) {
                for (let i = 0; i < effectsCount; i++) {
                    const x = exports.get_phoenix_effect_x(i);
                    const y = exports.get_phoenix_effect_y(i);
                    const life = exports.get_phoenix_effect_life(i);
                    const size = exports.get_phoenix_effect_size(i);
                    const intensity = exports.get_phoenix_effect_intensity(i);
                    const phase = exports.get_phoenix_effect_phase(i);
                    console.log(`特效${i}: 位置(${x},${y}) 生命${life} 大小${size} 强度${intensity} 阶段${phase}`);
                }
            }
            
            // 5. 检查画布状态
            console.log('画布状态: 宽度=', canvas.width, '高度=', canvas.height);
            console.log('画布上下文:', ctx ? '存在' : '不存在');
            
            // 6. 检查渲染函数
            console.log('drawPhoenixEffects函数:', typeof drawPhoenixEffects);
            console.log('drawFireParticle函数:', typeof drawFireParticle);
            console.log('drawLightEffect函数:', typeof drawLightEffect);
            console.log('drawRebirthRing函数:', typeof drawRebirthRing);
            
            console.log('🔥 完整涅槃调试结束');
        }
        
        // 强制创建涅槃特效测试
        function forceCreateNirvanaEffects() {
            console.log('🔥 强制创建涅槃特效测试');
            
            // 直接调用WASM函数创建特效
            if (typeof exports.create_phoenix_rebirth_effect === 'function') {
                console.log('调用WASM创建涅槃特效');
                exports.create_phoenix_rebirth_effect(100, 100);
                
                // 检查是否创建成功
                setTimeout(() => {
                    const count = exports.get_phoenix_effects_count();
                    console.log('创建后特效数量:', count);
                }, 100);
            } else {
                console.log('❌ create_phoenix_rebirth_effect 函数不存在');
            }
        }
        
        // 测试凤凰涅槃特效（直接调用MoonBit函数）
        function testPhoenixRebirth() {
            console.log('🔥 测试凤凰涅槃特效');
            
            if (typeof exports.test_phoenix_rebirth === 'function') {
                exports.test_phoenix_rebirth();
                console.log('✅ 已调用凤凰涅槃测试函数');
                
                // 检查激活状态
                setTimeout(() => {
                    const active = typeof exports.get_phoenix_rebirth_active === 'function' ? 
                        exports.get_phoenix_rebirth_active() : 0;
                    const duration = typeof exports.get_phoenix_rebirth_duration === 'function' ? 
                        exports.get_phoenix_rebirth_duration() : 0;
                    console.log('🔥 凤凰涅槃状态: 激活=', active, '持续时间=', duration);
                }, 100);
            } else {
                console.log('❌ test_phoenix_rebirth 函数不存在');
            }
        }
        
        // 测试凤凰涅槃右上角提示显示
        function testPhoenixNotification() {
            console.log('🔥 测试凤凰涅槃右上角提示');
            
            // 检查相关函数是否存在
            const hasActiveFunction = typeof exports.get_phoenix_rebirth_active === 'function';
            const hasDurationFunction = typeof exports.get_phoenix_rebirth_duration === 'function';
            
            console.log('函数检查: 激活函数=', hasActiveFunction, '持续时间函数=', hasDurationFunction);
            
            if (hasActiveFunction && hasDurationFunction) {
                const active = exports.get_phoenix_rebirth_active();
                const duration = exports.get_phoenix_rebirth_duration();
                console.log('当前状态: 激活=', active, '持续时间=', duration);
                
                if (active === 1) {
                    console.log('✅ 凤凰涅槃特效已激活，应该显示在右上角');
                } else {
                    console.log('❌ 凤凰涅槃特效未激活，先调用 testPhoenixRebirth() 激活');
                }
            } else {
                console.log('❌ 缺少必要的导出函数');
            }
        }
        
        // 将测试函数添加到全局，方便在控制台调用
        window.testCreateProjectile = testCreateProjectile;
        window.debugWasmFunctions = debugWasmFunctions;
        window.debugPhoenixRebirth = debugPhoenixRebirth;
        window.debugNirvanaDetailed = debugNirvanaDetailed;
        window.testPhoenixEffects = testPhoenixEffects;
        window.testSimpleRender = testSimpleRender;
        window.debugNirvanaComplete = debugNirvanaComplete;
        window.forceCreateNirvanaEffects = forceCreateNirvanaEffects;
        window.testPhoenixRebirth = testPhoenixRebirth;
        window.testPhoenixNotification = testPhoenixNotification;
        
        // 测试神龙自动效果
        function testDragonAutoBoost() {
            console.log('🐉 测试神龙自动效果');
            
            // 检查当前形态
            const evolutionStage = typeof exports.get_evolution_stage === 'function' ? 
                exports.get_evolution_stage() : 0;
            console.log('当前形态:', evolutionStage, '(4=神龙)');
            
            if (evolutionStage !== 4) {
                console.log('❌ 当前不是神龙形态，需要达到50分才能触发神龙形态');
                console.log('当前分数:', typeof exports.get_score === 'function' ? exports.get_score() : 'N/A');
                return;
            }
            
            // 检查神龙自动效果状态
            const active = typeof exports.get_dragon_auto_boost_active === 'function' ? 
                exports.get_dragon_auto_boost_active() : 0;
            const duration = typeof exports.get_dragon_auto_boost_duration === 'function' ? 
                exports.get_dragon_auto_boost_duration() : 0;
            const cooldown = typeof exports.get_dragon_auto_boost_cooldown === 'function' ? 
                exports.get_dragon_auto_boost_cooldown() : 0;
            
            console.log('🐉 神龙自动效果状态:');
            console.log('  激活状态:', active);
            console.log('  持续时间:', duration, '帧');
            console.log('  冷却时间:', cooldown, '帧');
            
            if (active === 1) {
                console.log('✅ 神龙自动效果已激活');
            } else if (cooldown > 0) {
                console.log('⏳ 神龙自动效果冷却中，剩余', Math.ceil(cooldown / 60), '秒');
            } else {
                console.log('🔄 神龙自动效果准备就绪，将在下次触发时激活');
            }
        }
        
        window.testDragonAutoBoost = testDragonAutoBoost;
        
        // 绘制投射物
        function drawProjectiles() {
            if (typeof exports.get_projectiles_count !== 'function') {
                return;
            }
            const count = exports.get_projectiles_count();
            
            // 如果没有投射物，直接返回
            if (count <= 0) {
                return;
            }
            
            for (let i = 0; i < count; i++) {
                const x = (typeof exports.get_projectile_x === 'function') ? exports.get_projectile_x(i) : 0;
                const y = (typeof exports.get_projectile_y === 'function') ? exports.get_projectile_y(i) : 0;
                const damage = (typeof exports.get_projectile_damage === 'function') ? exports.get_projectile_damage(i) : 1;
                const active = (typeof exports.get_projectile_active === 'function') ? exports.get_projectile_active(i) : 0;
                
                // 只绘制活跃的投射物，并且位置必须在合理范围内
                if (active !== 1) continue;
                if (x < -50 || x > 250 || y < -50 || y > 250) continue;

                // 根据伤害值选择颜色
                let color;
                if (damage >= 3) {
                    color = '#E74C3C'; // 高伤害 - 红色
                } else if (damage >= 2) {
                    color = '#F39C12'; // 中伤害 - 橙色
                } else {
                    color = '#F1C40F'; // 低伤害 - 黄色
                }

                // 绘制投射物
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fill();

                // 添加发光效果
                ctx.shadowColor = color;
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // 绘制挑战模式UI
        function drawSurvivalUI() {
            if (typeof exports.get_game_mode !== 'function' || typeof exports.get_boss_exists !== 'function') return;
            const gameMode = typeof exports.get_game_mode === 'function' ? exports.get_game_mode() : currentGameMode;
            const bossExists = typeof exports.get_boss_exists === 'function' ? exports.get_boss_exists() : 0;
            if (!(gameMode === 4 || bossExists === 1)) return; // 仅在挑战模式或存在Boss时渲染
            
            // 绘制攻击冷却指示器
            if (typeof exports.get_player_attack_cooldown === 'function') {
                const cooldown = exports.get_player_attack_cooldown();
                if (cooldown > 0) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    ctx.font = '10px Arial';
                    ctx.fillText(`攻击冷却: ${cooldown}`, 10, 10);
                }
            }
        }

        function drawEffects() {
            if (typeof exports.get_active_effects_count !== 'function') return;
            const count = exports.get_active_effects_count();
            
            // 检查凤凰涅槃特效是否激活
            const phoenixRebirthActive = typeof exports.get_phoenix_rebirth_active === 'function' ? 
                exports.get_phoenix_rebirth_active() : 0;
            const phoenixRebirthDuration = typeof exports.get_phoenix_rebirth_duration === 'function' ? 
                exports.get_phoenix_rebirth_duration() : 0;
            
            // 检查神龙自动效果是否激活
            const dragonAutoBoostActive = typeof exports.get_dragon_auto_boost_active === 'function' ? 
                exports.get_dragon_auto_boost_active() : 0;
            const dragonAutoBoostDuration = typeof exports.get_dragon_auto_boost_duration === 'function' ? 
                exports.get_dragon_auto_boost_duration() : 0;
            const dragonAutoBoostCooldown = typeof exports.get_dragon_auto_boost_cooldown === 'function' ? 
                exports.get_dragon_auto_boost_cooldown() : 0;
            
            // 如果没有普通道具效果、凤凰涅槃特效和神龙自动效果，则返回
            if (count === 0 && phoenixRebirthActive === 0 && dragonAutoBoostActive === 0) return;
            
            // 效果显示区域
            const startX = 120;
            const startY = 10;
            const itemWidth = 35;
            const itemHeight = 20;
            const spacing = 5;
            
            // 使用独立的位置索引，确保每个道具都有固定位置
            let displayIndex = 0;
            
            for (let i = 0; i < count; i++) {
                const type = exports.get_effect_type(i);
                const remainingTime = exports.get_effect_remaining_time(i);
                
                // 如果龙威效果激活，隐藏单独的护盾(0)、加速(1)和龙威(12)效果
                if (dragonAutoBoostActive && (type === 0 || type === 1 || type === 12)) {
                    continue;
                }
                
                const x = startX;
                const y = startY + displayIndex * (itemHeight + spacing);
                displayIndex++; // 只有实际显示的道具才增加索引
                
                // 获取效果信息
                let effectInfo = getEffectInfo(type);
                
                // 计算进度条（剩余时间比例）
                const maxTime = getMaxEffectTime(type);
                const progress = Math.max(0, remainingTime / maxTime);
                
                // 绘制效果卡片背景
                ctx.save();
                
                // 卡片阴影
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(x + 2, y + 2, itemWidth, itemHeight);
                
                // 卡片背景渐变
                const gradient = ctx.createLinearGradient(x, y, x, y + itemHeight);
                gradient.addColorStop(0, effectInfo.bgColor);
                gradient.addColorStop(1, effectInfo.bgColorDark);
                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, itemWidth, itemHeight);
                
                // 卡片边框
                ctx.strokeStyle = effectInfo.borderColor;
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, itemWidth, itemHeight);
                
                // 绘制效果图标
                ctx.fillStyle = effectInfo.iconColor;
                ctx.font = '12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(effectInfo.icon, x + 8, y + 12);
                
                // 绘制效果名称
                ctx.fillStyle = '#FFFFFF';
                ctx.font = '6px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(effectInfo.name, x + 12, y + 8);
                
                // 绘制剩余时间
                const seconds = Math.ceil(remainingTime / 60);
                ctx.fillText(seconds + 's', x + 12, y + 15);
                
                // 绘制进度条
                const progressBarWidth = itemWidth - 4;
                const progressBarHeight = 2;
                const progressBarY = y + itemHeight - 4;
                
                // 进度条背景
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(x + 2, progressBarY, progressBarWidth, progressBarHeight);
                
                // 进度条填充
                const progressGradient = ctx.createLinearGradient(x + 2, progressBarY, x + 2 + progressBarWidth, progressBarY);
                progressGradient.addColorStop(0, effectInfo.progressColor);
                progressGradient.addColorStop(1, effectInfo.progressColorDark);
                ctx.fillStyle = progressGradient;
                ctx.fillRect(x + 2, progressBarY, progressBarWidth * progress, progressBarHeight);
                
                // 闪烁效果（剩余时间少于3秒时）
                if (seconds <= 3) {
                    const flashAlpha = 0.5 + 0.5 * Math.sin(Date.now() * 0.01);
                    ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
                    ctx.fillRect(x, y, itemWidth, itemHeight);
                }
                
                ctx.restore();
            }
            
            // 显示凤凰涅槃特效
            if (phoenixRebirthActive === 1) {
                const x = startX;
                const y = startY + displayIndex * (itemHeight + spacing);
                displayIndex++; // 增加显示索引
                
                // 凤凰涅槃特效信息
                const phoenixInfo = {
                    name: '涅槃',
                    icon: '🔥',
                    bgColor: 'rgba(255, 107, 107, 0.9)',
                    bgColorDark: 'rgba(238, 90, 36, 0.9)',
                    borderColor: '#FF6B6B',
                    iconColor: '#FFFFFF',
                    progressColor: '#FF9FF3',
                    progressColorDark: '#FF6B6B'
                };
                
                // 计算进度条（剩余时间比例）
                const maxTime = 100; // 100帧持续时间
                const progress = Math.max(0, phoenixRebirthDuration / maxTime);
                
                // 绘制效果卡片背景
                ctx.save();
                
                // 卡片阴影
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(x + 2, y + 2, itemWidth, itemHeight);
                
                // 卡片背景渐变
                const gradient = ctx.createLinearGradient(x, y, x, y + itemHeight);
                gradient.addColorStop(0, phoenixInfo.bgColor);
                gradient.addColorStop(1, phoenixInfo.bgColorDark);
                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, itemWidth, itemHeight);
                
                // 卡片边框
                ctx.strokeStyle = phoenixInfo.borderColor;
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, itemWidth, itemHeight);
                
                // 绘制效果图标
                ctx.fillStyle = phoenixInfo.iconColor;
                ctx.font = '12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(phoenixInfo.icon, x + 8, y + 12);
                
                // 绘制效果名称
                ctx.fillStyle = '#FFFFFF';
                ctx.font = '6px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(phoenixInfo.name, x + 12, y + 8);
                
                // 绘制剩余时间
                const seconds = Math.ceil(phoenixRebirthDuration / 60);
                ctx.fillText(seconds + 's', x + 12, y + 15);
                
                // 绘制进度条
                const progressBarWidth = itemWidth - 4;
                const progressBarHeight = 2;
                const progressBarY = y + itemHeight - 4;
                
                // 进度条背景
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(x + 2, progressBarY, progressBarWidth, progressBarHeight);
                
                // 进度条填充
                const progressGradient = ctx.createLinearGradient(x + 2, progressBarY, x + 2 + progressBarWidth, progressBarY);
                progressGradient.addColorStop(0, phoenixInfo.progressColor);
                progressGradient.addColorStop(1, phoenixInfo.progressColorDark);
                ctx.fillStyle = progressGradient;
                ctx.fillRect(x + 2, progressBarY, progressBarWidth * progress, progressBarHeight);
                
                // 特殊闪烁效果（凤凰涅槃特效）
                const flashAlpha = 0.3 + 0.4 * Math.sin(Date.now() * 0.02);
                ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
                ctx.fillRect(x, y, itemWidth, itemHeight);
                
                ctx.restore();
            }
            
            // 显示神龙自动效果
            if (dragonAutoBoostActive === 1) {
                const x = startX;
                const y = startY + displayIndex * (itemHeight + spacing);
                
                // 神龙自动效果信息
                const dragonInfo = {
                    name: '龙威',
                    icon: '🐉',
                    bgColor: 'rgba(138, 43, 226, 0.9)',
                    bgColorDark: 'rgba(75, 0, 130, 0.9)',
                    borderColor: '#8A2BE2',
                    iconColor: '#FFFFFF',
                    progressColor: '#DA70D6',
                    progressColorDark: '#8A2BE2'
                };
                
                // 计算进度条（剩余时间比例）
                const maxTime = 120; // 120帧持续时间
                const progress = Math.max(0, dragonAutoBoostDuration / maxTime);
                
                // 绘制效果卡片背景
                ctx.save();
                
                // 卡片阴影
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(x + 2, y + 2, itemWidth, itemHeight);
                
                // 卡片背景渐变
                const gradient = ctx.createLinearGradient(x, y, x, y + itemHeight);
                gradient.addColorStop(0, dragonInfo.bgColor);
                gradient.addColorStop(1, dragonInfo.bgColorDark);
                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, itemWidth, itemHeight);
                
                // 卡片边框
                ctx.strokeStyle = dragonInfo.borderColor;
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, itemWidth, itemHeight);
                
                // 绘制效果图标
                ctx.fillStyle = dragonInfo.iconColor;
                ctx.font = '12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(dragonInfo.icon, x + 8, y + 12);
                
                // 绘制效果名称
                ctx.fillStyle = '#FFFFFF';
                ctx.font = '6px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(dragonInfo.name, x + 12, y + 8);
                
                // 绘制剩余时间
                const seconds = Math.ceil(dragonAutoBoostDuration / 60);
                ctx.fillText(seconds + 's', x + 12, y + 15);
                
                // 绘制进度条
                const progressBarWidth = itemWidth - 4;
                const progressBarHeight = 2;
                const progressBarY = y + itemHeight - 4;
                
                // 进度条背景
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(x + 2, progressBarY, progressBarWidth, progressBarHeight);
                
                // 进度条填充
                const progressGradient = ctx.createLinearGradient(x + 2, progressBarY, x + 2 + progressBarWidth, progressBarY);
                progressGradient.addColorStop(0, dragonInfo.progressColor);
                progressGradient.addColorStop(1, dragonInfo.progressColorDark);
                ctx.fillStyle = progressGradient;
                ctx.fillRect(x + 2, progressBarY, progressBarWidth * progress, progressBarHeight);
                
                // 特殊闪烁效果（神龙自动效果）
                const flashAlpha = 0.4 + 0.3 * Math.sin(Date.now() * 0.015);
                ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
                ctx.fillRect(x, y, itemWidth, itemHeight);
                
                ctx.restore();
                displayIndex++; // 增加显示索引
            }
        }
        
        // 获取效果信息
        function getEffectInfo(type) {
            switch(type) {
                case 0: // 护盾
                    return {
                        name: '护盾',
                        icon: '🛡️',
                        bgColor: 'rgba(0, 150, 255, 0.8)',
                        bgColorDark: 'rgba(0, 100, 200, 0.8)',
                        borderColor: '#0096FF',
                        iconColor: '#FFFFFF',
                        progressColor: '#00BFFF',
                        progressColorDark: '#0096FF'
                    };
                case 1: // 加速
                    return {
                        name: '加速',
                        icon: '⚡',
                        bgColor: 'rgba(255, 200, 0, 0.8)',
                        bgColorDark: 'rgba(200, 150, 0, 0.8)',
                        borderColor: '#FFC800',
                        iconColor: '#FFFFFF',
                        progressColor: '#FFD700',
                        progressColorDark: '#FFA500'
                    };
                case 2: // 缩小
                    return {
                        name: '缩小',
                        icon: '🔍',
                        bgColor: 'rgba(150, 0, 255, 0.8)',
                        bgColorDark: 'rgba(100, 0, 200, 0.8)',
                        borderColor: '#9600FF',
                        iconColor: '#FFFFFF',
                        progressColor: '#B300FF',
                        progressColorDark: '#8000CC'
                    };
                case 3: // 磁铁
                    return {
                        name: '磁铁',
                        icon: '🧲',
                        bgColor: 'rgba(255, 100, 100, 0.8)',
                        bgColorDark: 'rgba(200, 50, 50, 0.8)',
                        borderColor: '#FF6464',
                        iconColor: '#FFFFFF',
                        progressColor: '#FF8080',
                        progressColorDark: '#FF4040'
                    };
                case 4: // 重力反转
                    return {
                        name: '重力',
                        icon: '🔄',
                        bgColor: 'rgba(100, 255, 100, 0.8)',
                        bgColorDark: 'rgba(50, 200, 50, 0.8)',
                        borderColor: '#64FF64',
                        iconColor: '#FFFFFF',
                        progressColor: '#80FF80',
                        progressColorDark: '#40FF40'
                    };
                case 5: // 传送门
                    return {
                        name: '传送',
                        icon: '🌀',
                        bgColor: 'rgba(255, 150, 255, 0.8)',
                        bgColorDark: 'rgba(200, 100, 200, 0.8)',
                        borderColor: '#FF96FF',
                        iconColor: '#FFFFFF',
                        progressColor: '#FFB3FF',
                        progressColorDark: '#FF80FF'
                    };
                case 6: // 分数翻倍
                    return {
                        name: '翻倍',
                        icon: '💎',
                        bgColor: 'rgba(255, 255, 0, 0.8)',
                        bgColorDark: 'rgba(200, 200, 0, 0.8)',
                        borderColor: '#FFFF00',
                        iconColor: '#000000',
                        progressColor: '#FFFF80',
                        progressColorDark: '#FFFF40'
                    };
                case 7: // 生命
                    return {
                        name: '生命',
                        icon: '❤️',
                        bgColor: 'rgba(255, 0, 0, 0.8)',
                        bgColorDark: 'rgba(200, 0, 0, 0.8)',
                        borderColor: '#FF0000',
                        iconColor: '#FFFFFF',
                        progressColor: '#FF4040',
                        progressColorDark: '#CC0000'
                    };
                case 8: // 金币
                    return {
                        name: '金币',
                        icon: '🪙',
                        bgColor: 'rgba(255, 215, 0, 0.8)',
                        bgColorDark: 'rgba(200, 165, 0, 0.8)',
                        borderColor: '#FFD700',
                        iconColor: '#000000',
                        progressColor: '#FFE55C',
                        progressColorDark: '#FFCC00'
                    };
                case 9: // 进化
                    return {
                        name: '进化',
                        icon: '✨',
                        bgColor: 'rgba(255, 255, 255, 0.9)',
                        bgColorDark: 'rgba(200, 200, 200, 0.9)',
                        borderColor: '#FFFFFF',
                        iconColor: '#000000',
                        progressColor: '#FFFFFF',
                        progressColorDark: '#E0E0E0'
                    };
                case 10: // 隐形道具
                    return {
                        name: '隐形',
                        icon: '👻',
                        bgColor: 'rgba(128, 0, 128, 0.8)',
                        bgColorDark: 'rgba(100, 0, 100, 0.8)',
                        borderColor: '#800080',
                        iconColor: '#FFFFFF',
                        progressColor: '#9932CC',
                        progressColorDark: '#800080'
                    };
                case 11: // 放大道具
                    return {
                        name: '放大',
                        icon: '🔍',
                        bgColor: 'rgba(255, 69, 0, 0.8)',
                        bgColorDark: 'rgba(200, 50, 0, 0.8)',
                        borderColor: '#FF4500',
                        iconColor: '#FFFFFF',
                        progressColor: '#FF6347',
                        progressColorDark: '#FF4500'
                    };
                case 12: // 龙威
                    return {
                        name: '龙威',
                        icon: '🐉',
                        bgColor: 'rgba(255, 100, 0, 0.9)',
                        bgColorDark: 'rgba(200, 50, 0, 0.9)',
                        borderColor: '#FF6400',
                        iconColor: '#FFFFFF',
                        progressColor: '#FF8000',
                        progressColorDark: '#FF4000'
                    };
                default:
                    return {
                        name: '未知',
                        icon: '❓',
                        bgColor: 'rgba(128, 128, 128, 0.8)',
                        bgColorDark: 'rgba(100, 100, 100, 0.8)',
                        borderColor: '#808080',
                        iconColor: '#FFFFFF',
                        progressColor: '#A0A0A0',
                        progressColorDark: '#606060'
                    };
            }
        }
        
        // 获取效果最大持续时间
        function getMaxEffectTime(type) {
            switch(type) {
                case 0: return 180; // 护盾 3秒
                case 1: return 120; // 加速 2秒
                case 2: return 300; // 缩小 5秒
                case 3: return 120; // 磁铁 2秒
                case 4: return 120; // 重力反转 2秒
                case 5: return 60;  // 传送门 1秒
                case 6: return 300; // 分数翻倍 5秒
                case 7: return 0;   // 生命 永久
                case 8: return 0;   // 金币 永久
                case 9: return 0;   // 进化 永久
                case 10: return 30; // 隐形 0.5秒
                case 11: return 120; // 放大 2秒
                default: return 60;
            }
        }

        // 凤凰重生特效渲染函数
        function drawPhoenixEffects() {
            if (typeof exports.get_phoenix_effects_count !== 'function') {
                console.log('❌ get_phoenix_effects_count 函数不存在');
                return;
            }
            const count = exports.get_phoenix_effects_count();
            
            if (count === 0) {
                // 只在第一次调用时记录
                if (!drawPhoenixEffects._logged) {
                    console.log('ℹ️ 当前没有凤凰特效需要渲染');
                    drawPhoenixEffects._logged = true;
                }
                return;
            }
            
            // 调试：记录凤凰特效数量
            console.log(`🔥 渲染${count}个凤凰特效`);
            
            // 检查画布上下文
            if (!ctx) {
                console.error('❌ 画布上下文不存在');
                return;
            }
            
            for (let i = 0; i < count; i++) {
                const x = exports.get_phoenix_effect_x(i);
                const y = exports.get_phoenix_effect_y(i);
                const life = exports.get_phoenix_effect_life(i);
                const size = exports.get_phoenix_effect_size(i);
                const intensity = exports.get_phoenix_effect_intensity(i);
                const phase = exports.get_phoenix_effect_phase(i);
                
                // 调试：记录特效详情
                console.log(`特效${i}: 位置(${x},${y}) 生命${life} 大小${size} 强度${intensity} 阶段${phase}`);
                
                ctx.save();
                
                try {
                    switch(phase) {
                        case 0: // 火焰粒子
                            console.log(`🔥 绘制火焰粒子 ${i}`);
                            drawFireParticle(x, y, size, intensity);
                            break;
                        case 1: // 光芒效果
                            console.log(`✨ 绘制光芒效果 ${i}`);
                            drawLightEffect(x, y, size, intensity);
                            break;
                        case 2: // 重生光环
                            console.log(`💫 绘制重生光环 ${i}`);
                            drawRebirthRing(x, y, size, intensity);
                            break;
                        default:
                            console.log(`❓ 未知特效阶段 ${phase}`);
                    }
                } catch (error) {
                    console.error(`❌ 渲染特效${i}时出错:`, error);
                }
                
                ctx.restore();
            }
        }
        
        // 火焰粒子渲染
        function drawFireParticle(x, y, size, intensity) {
            const alpha = intensity * 2 / 3 / 255;
            const red = 255;
            const green = Math.min(255, 100 + intensity / 3);
            const blue = 0;
            
            // 绘制火焰粒子核心
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
            gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${alpha})`);
            gradient.addColorStop(0.7, `rgba(${red}, ${green}, ${blue}, ${alpha * 0.5})`);
            gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
            
            // 添加火焰边缘效果
            const edgeSize = size + 2;
            const edgeAlpha = alpha * 0.3;
            const edgeGradient = ctx.createRadialGradient(x, y, 0, x, y, edgeSize);
            edgeGradient.addColorStop(0, `rgba(${red}, ${green + 50}, ${blue}, ${edgeAlpha})`);
            edgeGradient.addColorStop(1, `rgba(${red}, ${green + 50}, ${blue}, 0)`);
            
            ctx.fillStyle = edgeGradient;
            ctx.beginPath();
            ctx.arc(x, y, edgeSize, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // 光芒效果渲染
        function drawLightEffect(x, y, size, intensity) {
            const alpha = intensity / 255;
            const red = 255;
            const green = Math.min(255, 215 + intensity / 5);
            const blue = 0;
            
            // 绘制光芒核心
            const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
            coreGradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${alpha})`);
            coreGradient.addColorStop(0.5, `rgba(${red}, ${green}, ${blue}, ${alpha * 0.7})`);
            coreGradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
            
            ctx.fillStyle = coreGradient;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
            
            // 绘制光芒外圈
            const outerSize = size + 8;
            const outerAlpha = alpha * 0.3;
            const outerGradient = ctx.createRadialGradient(x, y, 0, x, y, outerSize);
            outerGradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${outerAlpha})`);
            outerGradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
            
            ctx.fillStyle = outerGradient;
            ctx.beginPath();
            ctx.arc(x, y, outerSize, 0, Math.PI * 2);
            ctx.fill();
            
            // 绘制光芒射线
            ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * 0.5})`;
            ctx.lineWidth = 2;
            for (let i = 0; i < 8; i++) {
                const angle = (i * 45) * Math.PI / 180;
                const rayLength = size + 10;
                const rayX = x + Math.cos(angle) * rayLength;
                const rayY = y + Math.sin(angle) * rayLength;
                
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(rayX, rayY);
                ctx.stroke();
            }
        }
        
        // 重生光环渲染
        function drawRebirthRing(x, y, size, intensity) {
            const alpha = intensity * 3 / 4 / 255;
            const red = Math.min(255, 200 + intensity / 4);
            const green = Math.min(255, 100 + intensity / 2);
            const blue = 255;
            
            // 绘制重生光环外圈
            const outerGradient = ctx.createRadialGradient(x, y, size - 4, x, y, size);
            outerGradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0)`);
            outerGradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, ${alpha})`);
            
            ctx.fillStyle = outerGradient;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.arc(x, y, size - 4, 0, Math.PI * 2, true);
            ctx.fill();
            
            // 绘制重生光环内圈
            const innerSize = size - 8;
            const innerAlpha = alpha * 0.5;
            const innerGradient = ctx.createRadialGradient(x, y, innerSize - 4, x, y, innerSize);
            innerGradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0)`);
            innerGradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, ${innerAlpha})`);
            
            ctx.fillStyle = innerGradient;
            ctx.beginPath();
            ctx.arc(x, y, innerSize, 0, Math.PI * 2);
            ctx.arc(x, y, innerSize - 4, 0, Math.PI * 2, true);
            ctx.fill();
            
            // 绘制重生符文
            drawRebirthRune(x, y, size / 2, red, green, blue, alpha);
        }
        
        // 重生符文渲染
        function drawRebirthRune(x, y, size, r, g, b, alpha) {
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.lineWidth = 2;
            
            // 绘制简单的凤凰符号
            ctx.beginPath();
            // 凤凰身体
            ctx.arc(x, y, size / 3, 0, Math.PI * 2);
            ctx.stroke();
            
            // 凤凰翅膀
            ctx.beginPath();
            ctx.moveTo(x - size / 3, y);
            ctx.lineTo(x - size / 2, y - size / 4);
            ctx.lineTo(x - size / 2, y + size / 4);
            ctx.closePath();
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(x + size / 3, y);
            ctx.lineTo(x + size / 2, y - size / 4);
            ctx.lineTo(x + size / 2, y + size / 4);
            ctx.closePath();
            ctx.stroke();
        }

        // 缓存UI元素和值，避免重复更新
        let lastUIValues = {
            score: -1,
            gameMode: -1,
            evolutionStage: -1,
            lives: -1,
            gold: -1,
            difficulty: -1,
            combo: -1,
            timeRemaining: -1
        };
        
        // 动态主题适配
        
        
        // 渲染缓存，避免重复计算
        let renderCache = {
            lastBirdX: -1,
            lastBirdY: -1,
            lastScore: -1,
            lastEvolutionStage: -1,
            lastGameState: -1,
            backgroundDirty: true,
            pipesDirty: true,
            itemsDirty: true,
            isInitialized: false  // 添加初始化标志
        };
        
        // 优化的颜色调整函数，使用缓存
        const colorCache = new Map();
        
        function adjustColor(color, amount) {
            const cacheKey = `${color}_${amount}`;
            if (colorCache.has(cacheKey)) {
                return colorCache.get(cacheKey);
            }
            
            const hex = color.replace('#', '');
            const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
            const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
            const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
            const result = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
            
            // 限制缓存大小
            if (colorCache.size > 100) {
                const firstKey = colorCache.keys().next().value;
                colorCache.delete(firstKey);
            }
            colorCache.set(cacheKey, result);
            return result;
        }
        
        // 优化的粒子效果系统
        let particles = [];
        const MAX_PARTICLES = 50; // 限制最大粒子数量
        const PARTICLE_POOL = []; // 粒子对象池
        
        // 初始化粒子池
        function initParticlePool() {
            for (let i = 0; i < MAX_PARTICLES; i++) {
                PARTICLE_POOL.push({
                    x: 0, y: 0, vx: 0, vy: 0, life: 0, decay: 0, size: 0, color: '', type: ''
                });
            }
        }
        
        function createParticle(x, y, type = 'default') {
            // 如果粒子数量达到上限，移除最老的粒子
            if (particles.length >= MAX_PARTICLES) {
                particles.shift();
            }
            
            const particle = {
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1.0,
                decay: 0.02,
                size: Math.random() * 3 + 1,
                color: type === 'score' ? '#FFD700' : type === 'item' ? '#FF6B35' : '#FFFFFF',
                type: type
            };
            particles.push(particle);
        }
        
        function updateParticles() {
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                
                if (p.life <= 0) {
                    particles.splice(i, 1);
                }
            }
        }
        
        function drawParticles() {
            if (particles.length === 0) return;
            
            ctx.save();
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
        
        // 屏幕震动效果
        function addScreenShake(intensity = 5) {
            screenShake = 10;
            screenShakeIntensity = intensity;
        }
        
        function updateScreenShake() {
            if (screenShake > 0) {
                screenShake--;
                const shakeX = (Math.random() - 0.5) * screenShakeIntensity;
                const shakeY = (Math.random() - 0.5) * screenShakeIntensity;
                ctx.translate(shakeX, shakeY);
            }
        }
        
        

        // 批量更新UI，减少DOM操作
        let uiUpdateQueue = [];
        let uiUpdateScheduled = false;
        
        function scheduleUIUpdate() {
            if (uiUpdateScheduled) return;
            uiUpdateScheduled = true;
            requestAnimationFrame(() => {
                flushUIUpdates();
                uiUpdateScheduled = false;
            });
        }
        
        function flushUIUpdates() {
            if (uiUpdateQueue.length === 0) return;
            
            // 批量更新DOM
            for (const update of uiUpdateQueue) {
                if (update.element && update.element.textContent !== update.value) {
                    update.element.textContent = update.value;
                }
            }
            uiUpdateQueue = [];
        }
        
        function updateUI(started, over, score) {
            // 更新涅槃提示
            const nirvanaNotification = document.getElementById('nirvanaNotification');
            if (nirvanaNotification) {
                const nirvanaActive = typeof exports.get_nirvana_notification_active === 'function' ? 
                    exports.get_nirvana_notification_active() : false;
                
                // 调试涅槃通知状态
                if (nirvanaActive) {
                    console.log('🔥 涅槃通知激活，显示提示');
                }
                
                if (nirvanaActive && nirvanaNotification.style.display === 'none') {
                    nirvanaNotification.style.display = 'block';
                    console.log('✅ 涅槃通知已显示');
                } else if (!nirvanaActive && nirvanaNotification.style.display === 'block') {
                    nirvanaNotification.style.display = 'none';
                    console.log('❌ 涅槃通知已隐藏');
                }
            } else {
                console.error('❌ 找不到涅槃通知元素');
            }
            
            // 只在分数变化时更新
            if (scoreEl && score !== lastUIValues.score) {
                uiUpdateQueue.push({ element: scoreEl, value: String(score) });
                lastUIValues.score = score;
            }
            
            // 更新当前游戏模式
            if (currentModeEl) {
                // 计算“有效模式”：
                // - 如果WASM返回非0或用户选择本身为0，则以WASM为准
                // - 否则以用户选择(currentGameMode)为准
                // - Boss存在时强制显示挑战
                const wasmMode = (typeof exports.get_game_mode === 'function') ? exports.get_game_mode() : undefined;
                const bossExists = (typeof exports.get_boss_exists === 'function') ? exports.get_boss_exists() : 0;
                const selectedMode = currentGameMode;
                let effectiveMode;
                if (typeof wasmMode === 'number') {
                    effectiveMode = (wasmMode !== 0 || selectedMode === 0) ? wasmMode : selectedMode;
                } else {
                    effectiveMode = selectedMode;
                }
                if (bossExists === 1 && !(effectiveMode === 4 || effectiveMode === 6)) {
                    effectiveMode = 4; // Boss存在时视为挑战模式
                }
                if (effectiveMode !== lastUIValues.gameMode) {
                    const modeName = (function(m) {
                        switch (m) {
                            case 0: return '经典';
                            case 1: return '限时';
                            case 2: return '生存';
                            case 3: return '完美';
                            case 5: return '困难';
                            case 4: return '挑战';
                            case 6: return '挑战';
                            default: return '经典';
                        }
                    })(effectiveMode);
                    uiUpdateQueue.push({ element: currentModeEl, value: modeName });
                    lastUIValues.gameMode = effectiveMode;
                }
            }
            
            // 更新扩展UI元素 - 只在值变化时更新
            if (evolutionEl) {
                const evolutionStage = typeof exports.get_evolution_stage === 'function' ? 
                    exports.get_evolution_stage() : 0;
                if (evolutionStage !== lastUIValues.evolutionStage) {
                    const stageNames = ['雏鸟', '成鸟', '雄鹰', '凤凰', '神龙'];
                    uiUpdateQueue.push({ element: evolutionEl, value: '形态: ' + stageNames[evolutionStage] });
                    lastUIValues.evolutionStage = evolutionStage;
                }
            }
            
            if (livesEl) {
                // 在生存模式下显示血量，其他模式显示生命数
                const gameMode = typeof exports.get_game_mode === 'function' ? exports.get_game_mode() : 0;
                const bossExists = typeof exports.get_boss_exists === 'function' ? exports.get_boss_exists() : 0;
                
                let displayValue;
                if (gameMode === 2 || bossExists === 1) {
                    // 生存模式：显示血量
                    const currentHealth = typeof exports.get_player_current_health === 'function' ? 
                        exports.get_player_current_health() : 1;
                    const maxHealth = typeof exports.get_player_max_health === 'function' ? 
                        exports.get_player_max_health() : 1;
                    displayValue = `血量: ${currentHealth}/${maxHealth}`;
                } else {
                    // 其他模式（包括挑战模式）：显示生命数
                    const lives = typeof exports.get_player_lives === 'function' ? 
                        exports.get_player_lives() : 1;
                    displayValue = `生命: ${lives}`;
                }
                
                if (displayValue !== lastUIValues.lives) {
                    uiUpdateQueue.push({ element: livesEl, value: displayValue });
                    lastUIValues.lives = displayValue;
                }
            }
            
            if (goldEl) {
                const gold = typeof exports.get_player_gold === 'function' ? 
                    exports.get_player_gold() : 0;
                if (gold !== lastUIValues.gold) {
                    uiUpdateQueue.push({ element: goldEl, value: '金币: ' + gold });
                    lastUIValues.gold = gold;
                }
            }
            
            if (difficultyEl) {
                const difficulty = typeof exports.get_difficulty_level === 'function' ? 
                    exports.get_difficulty_level() : 1;
                const theme = typeof exports.get_theme === 'function' ? 
                    exports.get_theme() : 0;
                const perfectPipes = typeof exports.get_perfect_pipes === 'function' ? 
                    exports.get_perfect_pipes() : 0;
                const totalPipesPassed = typeof exports.get_total_pipes_passed === 'function' ? 
                    exports.get_total_pipes_passed() : 0;
                const experience = typeof exports.get_player_experience === 'function' ? 
                    exports.get_player_experience() : 0;
                if (difficulty !== lastUIValues.difficulty) {
                    uiUpdateQueue.push({ element: difficultyEl, value: '难度: ' + difficulty });
                    lastUIValues.difficulty = difficulty;
                }
            }
            
            if (comboEl) {
                const combo = typeof exports.get_combo_count === 'function' ? 
                    exports.get_combo_count() : 0;
                if (combo !== lastUIValues.combo) {
                    uiUpdateQueue.push({ element: comboEl, value: '连击: ' + combo });
                    lastUIValues.combo = combo;
                }
            }
            
            if (timeEl) {
                const timeRemaining = typeof exports.get_time_remaining === 'function' ? 
                    exports.get_time_remaining() : 0;
                const timeText = timeRemaining > 0 ? '时间: ' + Math.ceil(timeRemaining / 60) + 's' : '';
                if (timeText !== lastUIValues.timeRemaining) {
                    uiUpdateQueue.push({ element: timeEl, value: timeText });
                    lastUIValues.timeRemaining = timeText;
                }
            }
            
            // 游戏状态显示更新
            if (startScreen && gameOverScreen) {
                
                // 若处于模式选择界面，强制显示开始界面并忽略 over 状态
                if (inModeSelection) {
                    if (startScreen.style.display !== 'block') {
                        startScreen.style.display = 'block';
                    }
                    if (gameOverScreen.style.display !== 'none') {
                        gameOverScreen.style.display = 'none';
                    }
                } else if (!started && !over) {
                    // 游戏未开始且未结束 - 显示开始界面
                    if (startScreen.style.display !== 'block') {
                        startScreen.style.display = 'block';
                        gameOverScreen.style.display = 'none';
                    }
                } else if (over) {
                    // 游戏结束 - 显示结束界面
                    if (gameOverScreen.style.display !== 'block') {
                        startScreen.style.display = 'none';
                        gameOverScreen.style.display = 'block';
                        if (finalScoreEl) finalScoreEl.textContent = '最终分数：' + score;
                    }
                } else {
                    // 游戏进行中 - 隐藏所有界面
                    if (startScreen.style.display !== 'none' || gameOverScreen.style.display !== 'none') {
                        startScreen.style.display = 'none';
                        gameOverScreen.style.display = 'none';
                    }
                }
            }
            
            // 如果有待更新的UI，安排批量更新
            if (uiUpdateQueue.length > 0) {
                scheduleUIUpdate();
            }
        }

        // 固定 60fps 逻辑步
    let lastTime = 0;
    let accumulated = 0;
    const stepMs = 1000 / 60;      // 16.67ms
    const maxAccumulated = stepMs * 5; // 防止长时间切后台后一次性追帧过多

    function frame(ts) {
        if (lastTime === 0) {
            lastTime = ts;
        }
        let dt = ts - lastTime;
        lastTime = ts;

        // 防抖：切后台回来的巨大 dt 直接丢弃
        if (dt > 1000) dt = 0;

        accumulated += dt;
        if (accumulated > maxAccumulated) accumulated = maxAccumulated;

        // 逻辑以固定步长多次更新，输入也在逻辑步里喂
        while (accumulated >= stepMs) {
            sendInput();
            if (exports.game_update) {
                exports.game_update();
            }
            // 更新涅槃特效
            if (typeof exports.update_phoenix_effects_export === 'function') {
                exports.update_phoenix_effects_export();
            }
            accumulated -= stepMs;
        }
        
        // 更新动画时间
        animationTime += dt;

        // 渲染每帧执行（读状态→绘制）
        const bx = exports.get_bird_x ? exports.get_bird_x() : 45;
        const by = exports.get_bird_y ? exports.get_bird_y() : 80;
        const score = exports.get_score ? exports.get_score() : 0;
        const started = exports.is_game_started ? exports.is_game_started() : 0;
        const over = exports.is_game_over ? exports.is_game_over() : 0;

        // 检测分数变化并播放音效
        if (score > lastScore) {
            audioManager.play('score');
            // 添加得分粒子效果
            for (let i = 0; i < 5; i++) {
                createParticle(80, 80, 'score');
            }
            lastScore = score;
        }

        // 检测游戏结束并播放音效
        if (over === 1 && !lastGameOver) {
            audioManager.play('gameover');
            addScreenShake(8); // 游戏结束时添加震动效果
            lastGameOver = true;
        } else if (over === 0) {
            lastGameOver = false;
        }

        // 应用屏幕震动效果
        ctx.save();
        updateScreenShake();
        
        // 优化渲染：减少不必要的重绘
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 简化渲染：先确保基本绘制工作
        try {
            // 绘制背景
            
            drawBackground();
            
            // 绘制管道
            
            drawPipes();
            
            // 绘制道具和效果
            
            drawItems();
            drawEffects();
            drawPhoenixEffects();
            
        // 绘制挑战模式相关元素（放宽条件：模式为4或6，或存在Boss时强制渲染）
        const modeGetter = (typeof exports.get_game_mode === 'function') ? exports.get_game_mode : null;
        const gameModeVal = modeGetter ? modeGetter() : currentGameMode;
        const bossExistsNow = (typeof exports.get_boss_exists === 'function') ? exports.get_boss_exists() : 0;
        
        if (gameModeVal === 4 || gameModeVal === 6 || bossExistsNow === 1) {
            drawSurvivalItems();
            drawBoss();
            drawSurvivalUI();
        }
            
            
            // 绘制小鸟
            
            drawBird(bx, by);
            
            // 在挑战模式下，投射物应该在小鸟之后绘制，确保显示在最前面
            if (gameModeVal === 4 || gameModeVal === 6 || bossExistsNow === 1) {
                drawProjectiles();
            }
            
            // 更新和绘制粒子
            
            updateParticles();
            drawParticles();
            
            
        } catch (error) {
            console.error('渲染过程中出错:', error);
        }
        
        ctx.restore();
        
        // 更新渲染缓存
        renderCache.lastBirdX = bx;
        renderCache.lastBirdY = by;
        renderCache.lastScore = score;
        renderCache.lastGameState = started;
        
        updateUI(started === 1, over === 1, score);
        
        // HUD现在使用右边的界面元素，不需要单独更新

        requestAnimationFrame(frame);
    }

        // 性能监控（可选）
        let performanceStats = {
            frameCount: 0,
            lastFpsTime: 0,
            fps: 0
        };
        
        function updatePerformanceStats() {
            performanceStats.frameCount++;
            const now = performance.now();
            if (now - performanceStats.lastFpsTime >= 1000) {
                performanceStats.fps = performanceStats.frameCount;
                performanceStats.frameCount = 0;
                performanceStats.lastFpsTime = now;
                
                // 在控制台显示FPS（可选）
                if (performanceStats.fps < 50) {
                    console.warn(`低FPS警告: ${performanceStats.fps}fps`);
                }
            }
        }
        
        // 启动游戏循环
        requestAnimationFrame(frame);
    } catch (error) {
        console.error('加载Flappy Bird WebAssembly模块失败:', error);
        
        // 显示用户友好的错误信息
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #ff4444;
            color: white;
            padding: 20px;
            border-radius: 8px;
            font-family: Arial, sans-serif;
            z-index: 1000;
            text-align: center;
        `;
        errorMessage.innerHTML = `
            <h3>游戏加载失败</h3>
            <p>无法加载游戏模块，请刷新页面重试</p>
            <button onclick="location.reload()" style="
                background: white;
                color: #ff4444;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 10px;
            ">刷新页面</button>
        `;
        document.body.appendChild(errorMessage);
    }
}

// 调用函数加载WebAssembly模块
loadFlappyBirdWasm();