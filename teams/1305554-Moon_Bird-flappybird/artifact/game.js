// 画布上下文变量
let ctx = null;

// 初始化画布上下文
function initCanvas() {
    const canvas = document.getElementById('canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
    } else {
        console.error('找不到画布元素');
    }
}

// 天气系统配置
const weatherConfigs = {
    0: { // Clear
        name: '晴朗',
        skyModifier: { r: 0, g: 0, b: 0 },
        groundModifier: { r: 0, g: 0, b: 0 },
        duration: 3600 // 60秒 (3600帧)
    },
    1: { // Rain
        name: '下雨',
        skyModifier: { r: -20, g: -20, b: -10 },
        groundModifier: { r: -10, g: -5, b: -5 },
        duration: 4800 // 80秒 (4800帧)
    },
    2: { // Storm
        name: '暴风雨',
        skyModifier: { r: -40, g: -40, b: -30 },
        groundModifier: { r: -20, g: -15, b: -10 },
        duration: 3600 // 60秒 (3600帧)
    },
    3: { // Snow
        name: '下雪',
        skyModifier: { r: 10, g: 10, b: 20 },
        groundModifier: { r: 20, g: 20, b: 25 },
        duration: 4800 // 80秒 (4800帧)
    }
};

// 天气系统状态
let weatherSystem = {
    currentWeather: 0, // 当前天气类型
    weatherIntensity: 0, // 天气强度 (0-100)
    weatherDuration: 0, // 当前天气持续时间
    weatherTransition: 0, // 天气过渡进度
    lightningFlash: 0, // 闪电闪光强度
    thunderShake: 0, // 雷声震动强度
    rainDrops: [], // 雨滴数组
    snowFlakes: [] // 雪花数组
};

// 平滑插值函数
function smoothStep(t) {
    return t * t * (3 - 2 * t);
}

// 更平滑的插值函数
function smootherStep(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}

// 获取天气系统状态
function getWeatherState() {
    return {
        currentWeather: weatherSystem.currentWeather,
        weatherIntensity: weatherSystem.weatherIntensity / 100,
        weatherDuration: weatherSystem.weatherDuration,
        weatherTransition: weatherSystem.weatherTransition / 100,
        lightningFlash: weatherSystem.lightningFlash / 100,
        thunderShake: weatherSystem.thunderShake / 100
    };
}

function getRainDrops() {
    return weatherSystem.rainDrops;
}

function getSnowFlakes() {
    return weatherSystem.snowFlakes;
}

// 绘制雨滴
function drawRain() {
    const rainDrops = getRainDrops();
    const weatherState = getWeatherState();
    
    if (rainDrops.length === 0) return;
    
    // 确保强度值在合理范围内
    const intensity = Math.min(Math.max(weatherState.weatherIntensity, 0), 1);
    
    ctx.save();
    ctx.strokeStyle = `rgba(135, 206, 235, ${0.3 + intensity * 0.4})`; // 天蓝色，透明度随强度变化
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    
    for (const drop of rainDrops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
    }
    
    ctx.restore();
}

// 绘制雪花
function drawSnow() {
    const snowFlakes = getSnowFlakes();
    const weatherState = getWeatherState();
    
    if (snowFlakes.length === 0) return;
    
    // 确保强度值在合理范围内
    const intensity = Math.min(Math.max(weatherState.weatherIntensity, 0), 1);
    
    ctx.save();
    ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + intensity * 0.4})`; // 白色，透明度随强度变化
    
    for (const flake of snowFlakes) {
        ctx.save();
        ctx.translate(flake.x, flake.y);
        ctx.rotate(flake.rotation * Math.PI / 180);
        
        // 绘制简单的雪花形状
        ctx.beginPath();
        ctx.arc(0, 0, flake.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 添加雪花的十字形状
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 + intensity * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(-flake.size, 0);
        ctx.lineTo(flake.size, 0);
        ctx.moveTo(0, -flake.size);
        ctx.lineTo(0, flake.size);
        ctx.stroke();
        
        ctx.restore();
    }
    
    ctx.restore();
}

// 绘制闪电效果
function drawLightning() {
    const weatherState = getWeatherState();
    const flashIntensity = Math.min(Math.max(weatherState.lightningFlash, 0), 1);
    
    if (flashIntensity > 0) {
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${flashIntensity * 0.8})`;
        ctx.fillRect(0, 0, 160, 160);
        ctx.restore();
    }
}

// 绘制雷声震动效果
function drawThunderShake() {
    const weatherState = getWeatherState();
    const shakeIntensity = Math.min(Math.max(weatherState.thunderShake, 0), 1);
    
    if (shakeIntensity > 0) {
        ctx.save();
        ctx.fillStyle = `rgba(0, 0, 0, ${shakeIntensity * 0.1})`;
        ctx.fillRect(0, 0, 160, 160);
        ctx.restore();
    }
}

// 初始化天气系统
function initWeatherSystem() {
    
    // 随机选择初始天气
    weatherSystem.currentWeather = selectRandomWeather();
    weatherSystem.weatherIntensity = 0;
    weatherSystem.weatherDuration = 0;
    weatherSystem.rainDrops = [];
    weatherSystem.snowFlakes = [];
    weatherSystem.lightningFlash = 0;
    weatherSystem.thunderShake = 0;
    weatherSystem.weatherTransition = 0;
    
}

// 更新天气系统
function updateWeatherSystem() {
    // 检查天气变化
    changeWeather();
    
    // 更新天气持续时间
    weatherSystem.weatherDuration++;
    
    // 更新天气强度
    updateWeatherIntensity();
    
    // 更新天气效果
    updateWeatherEffects();
}

// 选择随机天气（避免重复选择相同天气）
function selectRandomWeather() {
    // 如果是初始化（currentWeather为undefined或0），则从所有天气中随机选择
    if (weatherSystem.currentWeather === undefined || weatherSystem.currentWeather === 0) {
        return Math.floor(Math.random() * 4); // 0-3随机选择
    }
    
    const availableWeathers = [0, 1, 2, 3].filter(w => w !== weatherSystem.currentWeather);
    const randomIndex = Math.floor(Math.random() * availableWeathers.length);
    return availableWeathers[randomIndex];
}

// 改变天气
function changeWeather() {
    const currentDuration = weatherConfigs[weatherSystem.currentWeather].duration;
    
    // 如果当前天气持续时间超过配置的持续时间，或者随机触发天气变化
    const shouldChange = weatherSystem.weatherDuration >= currentDuration || 
                        (weatherSystem.weatherDuration > 300 && Math.random() < 0.002); // 0.2%概率随机变化
    
    if (shouldChange) {
        const newWeather = selectRandomWeather();
        
        // 开始天气过渡
        weatherSystem.weatherTransition = 0;
        weatherSystem.currentWeather = newWeather;
        weatherSystem.weatherDuration = 0;
        
        // 天气变化
    }
}

// 更新天气强度
function updateWeatherIntensity() {
    const currentDuration = weatherConfigs[weatherSystem.currentWeather].duration;
    const progress = (weatherSystem.weatherDuration * 100) / currentDuration;
    
    // 天气强度在开始和结束时较低，中间较高
    if (progress < 20) {
        weatherSystem.weatherIntensity = progress * 5;
    } else if (progress > 80) {
        weatherSystem.weatherIntensity = (100 - progress) * 5;
    } else {
        weatherSystem.weatherIntensity = 100;
    }
}

// 更新天气效果
function updateWeatherEffects() {
    switch (weatherSystem.currentWeather) {
        case 1: // Rain
            updateRainEffects();
            break;
        case 2: // Storm
            updateStormEffects();
            break;
        case 3: // Snow
            updateSnowEffects();
            break;
        case 0: // Clear
        default:
            clearWeatherEffects();
            break;
    }
}

// 更新下雨效果
function updateRainEffects() {
    // 生成雨滴
    if (Math.random() < 0.3) {
        const rainDrop = {
            x: Math.random() * 160,
            y: -10,
            speed: Math.random() * 3 + 2,
            length: Math.random() * 8 + 5
        };
        weatherSystem.rainDrops.push(rainDrop);
    }
    
    // 更新雨滴位置
    for (let i = weatherSystem.rainDrops.length - 1; i >= 0; i--) {
        const drop = weatherSystem.rainDrops[i];
        drop.x += (Math.random() - 0.5) * 2; // 轻微左右摆动
        drop.y += drop.speed;
        
        if (drop.y > 170) {
            weatherSystem.rainDrops.splice(i, 1);
        }
    }
}

// 更新暴风雨效果
function updateStormEffects() {
    // 更新下雨效果
    updateRainEffects();
    
    // 闪电效果
    if (Math.random() < 0.003) { // 0.3%概率
        weatherSystem.lightningFlash = 100;
    }
    
    // 更新闪电闪光
    if (weatherSystem.lightningFlash > 0) {
        weatherSystem.lightningFlash -= 5;
        if (weatherSystem.lightningFlash < 0) {
            weatherSystem.lightningFlash = 0;
        }
    }
    
    // 雷声震动效果
    if (weatherSystem.lightningFlash > 50) {
        weatherSystem.thunderShake = 100;
    }
    
    // 更新雷声震动
    if (weatherSystem.thunderShake > 0) {
        weatherSystem.thunderShake -= 3;
        if (weatherSystem.thunderShake < 0) {
            weatherSystem.thunderShake = 0;
        }
    }
}

// 更新下雪效果
function updateSnowEffects() {
    // 生成雪花
    if (Math.random() < 0.2) {
        const snowFlake = {
            x: Math.random() * 160,
            y: -5,
            speed: Math.random() * 2 + 1,
            size: Math.random() * 3 + 1,
            drift: (Math.random() - 0.5) * 2,
            rotation: Math.random() * 360
        };
        weatherSystem.snowFlakes.push(snowFlake);
    }
    
    // 更新雪花位置
    for (let i = weatherSystem.snowFlakes.length - 1; i >= 0; i--) {
        const flake = weatherSystem.snowFlakes[i];
        flake.x += flake.drift;
        flake.y += flake.speed;
        flake.rotation += 2;
        
        if (flake.y > 170) {
            weatherSystem.snowFlakes.splice(i, 1);
        }
    }
}

// 清除天气效果
function clearWeatherEffects() {
    weatherSystem.rainDrops = [];
    weatherSystem.snowFlakes = [];
    weatherSystem.lightningFlash = 0;
    weatherSystem.thunderShake = 0;
}



// 更新天气显示
function updateWeatherDisplay() {
    const weatherState = getWeatherState();
    const weatherNames = ['晴朗', '下雨', '暴风雨', '下雪'];
    const weatherIcons = ['☀️', '🌧️', '⛈️', '❄️'];
    const currentWeatherName = weatherNames[weatherState.currentWeather] || '未知';
    const currentWeatherIcon = weatherIcons[weatherState.currentWeather] || '☀️';
    
    // 更新天气显示元素
    const weatherElement = document.getElementById('weather');
    if (weatherElement) {
        weatherElement.textContent = currentWeatherName;
    }
    
    // 更新天气图标（如果HUD中有图标元素）
    const weatherIconElement = document.querySelector('.hud-item.weather .hud-icon');
    if (weatherIconElement) {
        weatherIconElement.textContent = currentWeatherIcon;
    }
}

// 天气效果绘制函数
function drawWeatherEffects() {
    const weatherState = getWeatherState();
    
    // 根据天气类型绘制不同效果
    switch (weatherState.currentWeather) {
        case 1: // Rain
            const rainDrops = getRainDrops();
            if (rainDrops.length > 0) {
                drawRain();
            }
            break;
        case 2: // Storm
            const stormRainDrops = getRainDrops();
            if (stormRainDrops.length > 0) {
                drawRain();
                drawLightning();
                drawThunderShake();
            }
            break;
        case 3: // Snow
            const snowFlakes = getSnowFlakes();
            if (snowFlakes.length > 0) {
                drawSnow();
            }
            break;
        case 0: // Clear
        default:
            // 晴朗天气，不绘制特殊效果
            break;
    }
}



// 应用天气颜色修改
function applyWeatherModifier(color, modifier, intensity) {
    // 解析颜色
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    
    // 应用修改器
    const newR = Math.max(0, Math.min(255, r + modifier.r * intensity));
    const newG = Math.max(0, Math.min(255, g + modifier.g * intensity));
    const newB = Math.max(0, Math.min(255, b + modifier.b * intensity));
    
    // 返回新颜色
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

// 改进的颜色插值函数
function lerpColor(color1, color2, t) {
    // 确保t在0-1范围内
    t = Math.max(0, Math.min(1, t));
    
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);
    
    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);
    
    // 使用更精确的插值，避免舍入误差
    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);
    
    // 确保颜色值在有效范围内
    const clampedR = Math.max(0, Math.min(255, r));
    const clampedG = Math.max(0, Math.min(255, g));
    const clampedB = Math.max(0, Math.min(255, b));
    
    return `rgb(${clampedR}, ${clampedG}, ${clampedB})`;
}

// 定义时间段的颜色配置 - 更明显的颜色变化
const timeConfigs = {
    dawn: {
        sunPos: { x: 20, y: 40 },
        sunColor: '#FF4500', // 更红的黎明太阳
        skyTop: '#000080',   // 深蓝天空
        skyBottom: '#FF6347', // 橙红底部
        ground: '#8B4513',   // 棕色地面
        sunRadius: 14
    },
    morning: {
        sunPos: { x: 60, y: 20 },
        sunColor: '#FFD700', // 金黄色太阳
        skyTop: '#4169E1',   // 皇家蓝
        skyBottom: '#87CEEB', // 天蓝色
        ground: '#228B22',   // 绿色地面
        sunRadius: 16
    },
    noon: {
        sunPos: { x: 100, y: 10 },
        sunColor: '#FFFFFF', // 白色太阳
        skyTop: '#87CEEB',   // 天蓝色
        skyBottom: '#F0F8FF', // 爱丽丝蓝
        ground: '#32CD32',   // 亮绿色
        sunRadius: 18
    },
    evening: {
        sunPos: { x: 140, y: 40 },
        sunColor: '#FF0000', // 红色太阳
        skyTop: '#FF4500',   // 橙红色
        skyBottom: '#FF8C00', // 深橙色
        ground: '#8B4513',   // 棕色地面
        sunRadius: 16
    },
    night: {
        moonPos: { x: 120, y: 20 },
        moonColor: '#FFFFFF', // 白色月亮
        skyTop: '#000000',   // 黑色天空
        skyBottom: '#191970', // 午夜蓝
        ground: '#2F4F4F',   // 深灰绿色
        moonRadius: 16
    }
};

// 星星系统
let stars = [];
let starsInitialized = false;
let meteors = [];


// 星星类型定义
const starTypes = [
    { color: [255, 255, 255], name: 'white' },      // 白色星星
    { color: [200, 220, 255], name: 'blue' },       // 蓝色星星
    { color: [255, 255, 200], name: 'yellow' },     // 黄色星星
    { color: [255, 200, 200], name: 'red' },        // 红色星星
    { color: [200, 255, 200], name: 'green' }       // 绿色星星
];

function initStars() {
    if (starsInitialized) return;
    
    stars = [];
    // 创建星空（更丰富的密度与类型）
    for (let i = 0; i < 60; i++) {
        const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
        const size = Math.random() * 0.9 + 0.6; // 更细腻的小星点
        
        stars.push({
            x: Math.random() * 160,
            y: Math.random() * 80,
            size: size,
            brightness: Math.random() * 0.9 + 0.1,
            twinkleSpeed: Math.random() * 0.03 + 0.005,
            twinklePhase: Math.random() * Math.PI * 2,
            color: starType.color,
            type: starType.name,
            spike: Math.random() < 0.18, // 部分星星带尖芒
            driftSpeed: Math.random() * 0.0003 + 0.00005,
            driftAmp: Math.random() * 0.6 + 0.2
        });
    }
    
    
    starsInitialized = true;
}



function drawStars(alpha = 1) {
    if (!starsInitialized) {
        initStars();
    }
    
    ctx.save();
    ctx.globalAlpha = alpha;
    const timeMs = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    
    // 绘制星星
    for (const star of stars) {
        // 计算闪烁效果
        const twinkle = Math.sin(timeMs * star.twinkleSpeed + star.twinklePhase) * 0.4 + 0.6;
        const currentBrightness = star.brightness * twinkle;
        const px = star.x + Math.sin(timeMs * star.driftSpeed + star.twinklePhase) * star.driftAmp;
        const py = star.y + Math.cos(timeMs * star.driftSpeed + star.twinklePhase) * (star.driftAmp * 0.5);
        
        // 柔和光晕
        const glowRadius = star.size * 3.2;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
        glow.addColorStop(0, `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${Math.min(0.4, currentBrightness * 0.4)})`);
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 星星核心
        ctx.fillStyle = `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${Math.min(1, currentBrightness)})`;
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();

        // 星芒（少量亮星）
        if (star.spike) {
            ctx.save();
            ctx.strokeStyle = `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${Math.min(0.5, currentBrightness * 0.5)})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(px - star.size * 2.2, py);
            ctx.lineTo(px + star.size * 2.2, py);
            ctx.moveTo(px, py - star.size * 2.2);
            ctx.lineTo(px, py + star.size * 2.2);
            ctx.stroke();
            ctx.restore();
        }
    }
    
    ctx.restore();
}

// 将增强版星星绘制函数暴露给内部作用域的备用实现复用
if (typeof window !== 'undefined') {
    window.__globalDrawStars = drawStars;
}

// 流星系统（夜间偶发）
function spawnMeteor() {
    // 限制同时存在的流星数量
    if (meteors.length >= 2) return;
    const fromLeft = Math.random() < 0.6;
    const startX = fromLeft ? -10 : Math.random() * 60;
    const startY = Math.random() * 20 + 5;
    const speed = Math.random() * 1.2 + 1.3;
    const angle = (fromLeft ? 35 : 25) * Math.PI / 180; // 斜向右下
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    meteors.push({
        x: startX,
        y: startY,
        vx,
        vy,
        length: Math.random() * 14 + 10,
        width: Math.random() * 0.8 + 0.6,
        life: 0,
        maxLife: Math.floor(Math.random() * 60) + 60, // 1-2秒
        hue: 200 + Math.random() * 40 // 蓝白色调
    });
}

function updateMeteors() {
    for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life += 1;
        if (m.life > m.maxLife || m.x > 180 || m.y > 120) {
            meteors.splice(i, 1);
        }
    }
}

function drawMeteors() {
    // 以小概率生成
    if (Math.random() < 0.02) spawnMeteor();
    updateMeteors();
    if (meteors.length === 0) return;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const m of meteors) {
        const tailDX = -m.vx;
        const tailDY = -m.vy;
        const tailLen = m.length;
        const mag = Math.hypot(tailDX, tailDY) || 1;
        const ux = (tailDX / mag) * tailLen;
        const uy = (tailDY / mag) * tailLen;

        const grad = ctx.createLinearGradient(m.x, m.y, m.x + ux, m.y + uy);
        grad.addColorStop(0, `hsla(${m.hue}, 100%, 85%, 0.85)`);
        grad.addColorStop(1, 'hsla(0, 0%, 100%, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + ux, m.y + uy);
        ctx.stroke();

        // 头部发光
        const headGlow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.width * 3);
        headGlow.addColorStop(0, `hsla(${m.hue}, 100%, 90%, 0.8)`);
        headGlow.addColorStop(1, 'hsla(0, 0%, 100%, 0)');
        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 3, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
}

function drawBackground() {
    // 完全依赖mbt文件中的主题设置
    const theme = typeof exports.get_theme === 'function' ? exports.get_theme() : 0;
    
    // 获取当前分数，用于计算时间变化
    const score = exports.get_score ? exports.get_score() : 0;
    
    // 流畅的时间计算 - 每60分一个周期，更慢更自然的变化
    const cycleScore = score % 60; // 每60分一个完整周期
    let timeOfDay, sunMoonX, sunMoonY, sunMoonRadius, sunMoonColor;
    let skyGradient, groundColor;
    
    if (theme === 0) {
        // 地球主题 - 使用mbt文件设置
        if (!backgroundGradients) {
            initBackgroundGradients();
        }
        
        // 简化的时间段定义
        let currentPhase, nextPhase, phaseProgress;
        
        if (cycleScore < 12) {
            // 黎明到早晨 (0-12分)
            currentPhase = 'dawn';
            nextPhase = 'morning';
            phaseProgress = cycleScore / 12;
        } else if (cycleScore < 24) {
            // 早晨到中午 (12-24分)
            currentPhase = 'morning';
            nextPhase = 'noon';
            phaseProgress = (cycleScore - 12) / 12;
        } else if (cycleScore < 36) {
            // 中午到傍晚 (24-36分)
            currentPhase = 'noon';
            nextPhase = 'evening';
            phaseProgress = (cycleScore - 24) / 12;
        } else if (cycleScore < 48) {
            // 傍晚到夜晚 (36-48分)
            currentPhase = 'evening';
            nextPhase = 'night';
            phaseProgress = (cycleScore - 36) / 12;
        } else {
            // 夜晚到黎明 (48-60分)
            currentPhase = 'night';
            nextPhase = 'dawn';
            phaseProgress = (cycleScore - 48) / 12;
        }
        
        const current = timeConfigs[currentPhase];
        const next = timeConfigs[nextPhase];
        
        // 使用更平滑的插值
        const smoothProgress = smootherStep(phaseProgress);
        
        // 插值计算位置
        if (currentPhase === 'night' || nextPhase === 'night') {
            // 月亮位置
            const moonPos = currentPhase === 'night' ? current.moonPos : next.moonPos;
            const nextMoonPos = nextPhase === 'night' ? next.moonPos : current.moonPos;
            sunMoonX = moonPos.x + (nextMoonPos.x - moonPos.x) * smoothProgress;
            sunMoonY = moonPos.y + (nextMoonPos.y - moonPos.y) * smoothProgress;
            sunMoonRadius = current.moonRadius + (next.moonRadius - current.moonRadius) * smoothProgress;
            sunMoonColor = lerpColor(current.moonColor, next.moonColor, smoothProgress);
        } else {
            // 太阳位置
            const sunPos = current.sunPos;
            const nextSunPos = next.sunPos;
            sunMoonX = sunPos.x + (nextSunPos.x - sunPos.x) * smoothProgress;
            sunMoonY = sunPos.y + (nextSunPos.y - sunPos.y) * smoothProgress;
            sunMoonRadius = current.sunRadius + (next.sunRadius - current.sunRadius) * smoothProgress;
            sunMoonColor = lerpColor(current.sunColor, next.sunColor, smoothProgress);
        }
        
        // 插值计算天空渐变
        skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        let skyTopColor = lerpColor(current.skyTop, next.skyTop, smoothProgress);
        let skyBottomColor = lerpColor(current.skyBottom, next.skyBottom, smoothProgress);
        
        // 应用天气效果到天空颜色
        const weatherConfig = weatherConfigs[weatherSystem.currentWeather];
        if (weatherSystem.weatherIntensity > 0) {
            skyTopColor = applyWeatherModifier(skyTopColor, weatherConfig.skyModifier, weatherSystem.weatherIntensity);
            skyBottomColor = applyWeatherModifier(skyBottomColor, weatherConfig.skyModifier, weatherSystem.weatherIntensity);
        }
        
        skyGradient.addColorStop(0, skyTopColor);
        skyGradient.addColorStop(1, skyBottomColor);
        
        // 插值计算地面颜色
        groundColor = lerpColor(current.ground, next.ground, smoothProgress);
        
        // 应用天气效果到地面颜色
        if (weatherSystem.weatherIntensity > 0) {
            groundColor = applyWeatherModifier(groundColor, weatherConfig.groundModifier, weatherSystem.weatherIntensity);
        }
        
        // 确定当前时间段（用于星星显示等）
        if (cycleScore < 12) timeOfDay = 'dawn';
        else if (cycleScore < 24) timeOfDay = 'morning';
        else if (cycleScore < 36) timeOfDay = 'noon';
        else if (cycleScore < 48) timeOfDay = 'evening';
        else timeOfDay = 'night';
        
        //
        
        // 绘制天空
        ctx.fillStyle = skyGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 绘制太阳或月亮
        ctx.fillStyle = sunMoonColor;
        ctx.beginPath();
        ctx.arc(sunMoonX, sunMoonY, sunMoonRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // 添加太阳/月亮的光晕效果
        if (timeOfDay !== 'night') {
            // 太阳光晕
            const glowGradient = ctx.createRadialGradient(sunMoonX, sunMoonY, 0, sunMoonX, sunMoonY, sunMoonRadius * 2);
            glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
            glowGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
            glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(sunMoonX, sunMoonY, sunMoonRadius * 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // 月亮光晕
            const moonGlowGradient = ctx.createRadialGradient(sunMoonX, sunMoonY, 0, sunMoonX, sunMoonY, sunMoonRadius * 1.5);
            moonGlowGradient.addColorStop(0, 'rgba(240, 248, 255, 0.2)');
            moonGlowGradient.addColorStop(0.7, 'rgba(240, 248, 255, 0.05)');
            moonGlowGradient.addColorStop(1, 'rgba(240, 248, 255, 0)');
            ctx.fillStyle = moonGlowGradient;
            ctx.beginPath();
            ctx.arc(sunMoonX, sunMoonY, sunMoonRadius * 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // 绘制星星（在夜晚和黎明时显示，并添加淡入淡出效果）
        if (timeOfDay === 'night' || timeOfDay === 'dawn') {
            drawStars(timeOfDay === 'night' ? 1 : 0.3); // 夜晚完全显示，黎明半透明
        }

        // 改进的云层系统
        ctx.save();
        
        // 根据时间段调整云层透明度
        let cloudAlpha = 0.55;
        if (timeOfDay === 'dawn' || timeOfDay === 'evening') {
            cloudAlpha = 0.7; // 黎明和傍晚云层更明显
        } else if (timeOfDay === 'night') {
            cloudAlpha = 0.3; // 夜晚云层更淡
        }
        
        ctx.globalAlpha = cloudAlpha;
        ctx.fillStyle = '#FFFFFF';
        
        for (const c of clouds) {
            // 添加云层的阴影效果
            ctx.save();
            ctx.globalAlpha = cloudAlpha * 0.3;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.beginPath();
            ctx.arc(c.x + 1, c.y + 1, c.r, 0, Math.PI * 2);
            ctx.arc(c.x + c.r * 0.8 + 1, c.y + 2, c.r * 0.8, 0, Math.PI * 2);
            ctx.arc(c.x - c.r * 0.6 + 1, c.y + 2, c.r * 0.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            
            // 绘制云层主体
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.arc(c.x + c.r * 0.8, c.y + 1, c.r * 0.8, 0, Math.PI * 2);
            ctx.arc(c.x - c.r * 0.6, c.y + 1, c.r * 0.7, 0, Math.PI * 2);
            ctx.fill();
            
            // 移动云层（添加更自然的飘动效果）
            const windEffect = Math.sin(animationTime * 0.0005 + c.y * 0.01) * 0.1;
            c.x -= c.s * (1 + windEffect);
            
            if (c.x < -c.r - 4) {
                c.x = 160 + c.r + 4;
                c.y = Math.random() * 60 + 6;
                c.r = Math.random() * 6 + 6;
                c.s = Math.random() * 0.2 + 0.1;
            }
        }
        ctx.restore();

        // 改进的地面系统
        const groundH = 12;
        
        // 根据时间段调整地面颜色和纹理
        let groundTextureColor, groundShadowColor;
        if (timeOfDay === 'dawn' || timeOfDay === 'evening') {
            groundTextureColor = 'rgba(139, 69, 19, 0.4)'; // 棕色纹理
            groundShadowColor = 'rgba(0, 0, 0, 0.2)';
        } else if (timeOfDay === 'night') {
            groundTextureColor = 'rgba(25, 25, 112, 0.3)'; // 深蓝色纹理
            groundShadowColor = 'rgba(0, 0, 0, 0.4)';
        } else {
            groundTextureColor = 'rgba(34, 139, 34, 0.3)'; // 绿色纹理
            groundShadowColor = 'rgba(0, 0, 0, 0.1)';
        }
        
        // 绘制地面阴影
        ctx.fillStyle = groundShadowColor;
        ctx.fillRect(0, canvas.height - groundH - 2, canvas.width, 2);
        
        // 绘制地面主体
        ctx.fillStyle = groundColor;
        ctx.fillRect(0, canvas.height - groundH, canvas.width, groundH);
        
        // 改进的地面纹理
        const textureOffset = (animationTime * 0.05) % 8;
        ctx.fillStyle = groundTextureColor;
        
        // 添加更多样化的地面纹理
        for (let i = 0; i < canvas.width + 8; i += 8) {
            const x = (i - textureOffset) % (canvas.width + 8);
            
            // 主要纹理点
            ctx.fillRect(x, canvas.height - 18, 2, 2);
            ctx.fillRect(x + 4, canvas.height - 16, 1, 1);
            
            // 添加随机的小纹理点
            if (Math.random() < 0.3) {
                ctx.fillRect(x + 2, canvas.height - 17, 1, 1);
            }
            if (Math.random() < 0.2) {
                ctx.fillRect(x + 6, canvas.height - 15, 1, 1);
            }
        }
        
        // 添加地面高光效果（在白天）
        if (timeOfDay === 'morning' || timeOfDay === 'noon') {
            const highlightGradient = ctx.createLinearGradient(0, canvas.height - groundH, 0, canvas.height);
            highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
            highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = highlightGradient;
            ctx.fillRect(0, canvas.height - groundH, canvas.width, groundH);
        }
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
}
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
        // 背景音乐文件不存在，跳过加载
        // this.loadSound('background', 'sounds/background.mp3');
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


//

//

//

//

async function loadFlappyBirdWasm() {
    try {
        // 开始加载 WebAssembly 模块
        
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
                trace: function(message) {}
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
        
        // 使用 WebAssembly.instantiateStreaming
        // 加版本参数避免浏览器缓存旧的 wasm
        const wasmUrl = 'flappybird_js.wasm?v=' + Math.floor(Date.now() / 1000);
        const module = await WebAssembly.instantiateStreaming(fetch(wasmUrl), imports);
        // WebAssembly 模块实例化成功
        
        // 检测所有导出的函数和对象
        const exports = module.instance.exports;
        
        // 将exports赋值给全局变量
        gameExports = exports;
        const exportKeys = Object.keys(exports);
        
        //
        
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
        
        // Canvas 初始化完成
        
        // 禁用图片平滑，保持像素清晰
        ctx.imageSmoothingEnabled = false;
        
        //
        
        // 设置Canvas为高分辨率，但保持游戏逻辑尺寸
        const scale = 4; // 放大4倍，从160x160变成640x640
        canvas.width = 160 * scale;
        canvas.height = 160 * scale;
        canvas.style.width = '640px';
        canvas.style.height = '640px';
        ctx.scale(scale, scale);
        
        // 视觉用：云层
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
        const timeItemEl = document.getElementById('timeItem');
        const maxComboEl = document.getElementById('maxCombo');
        

        // 初始化游戏（安全判断导出是否存在）
        if (typeof exports.game_init === 'function') {
            exports.game_init();
        }
        
        
        // 全局变量跟踪当前模式
        let currentGameMode = 0;
        // 是否处于模式选择界面（用于覆盖 over 状态导致的界面回切）
        let inModeSelection = false;
        
        // 音效相关变量
        let lastScore = 0;
        let lastGameOver = false;
        
        // 动画相关变量
        let animationTime = 0;
        
        // 视觉反馈变量
        let screenShake = 0;
        let screenShakeIntensity = 0;
        // 统计：最大连击
        let maxCombo = parseInt(localStorage.getItem('flappyBirdMaxCombo') || '0');
        function updateMaxComboDisplay() {
            if (maxComboEl) maxComboEl.textContent = String(maxCombo);
        }
        updateMaxComboDisplay();
        
        
        
        
        
        
        // 游戏模式选择函数
        window.selectGameMode = function(mode) {
            currentGameMode = mode; // 保存当前模式
            // 退出模式选择状态
            inModeSelection = false;
            
            if (typeof exports.set_game_mode === 'function') {
                exports.set_game_mode(mode);
            }
            
            // 延迟一点再开始游戏，确保模式设置生效
            setTimeout(() => {
                if (typeof exports.game_start === 'function') {
                    exports.game_start();
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
            const startScreen = document.getElementById('startScreen');
            const gameOverScreen = document.getElementById('gameOverScreen');
            if (startScreen && gameOverScreen) {
                startScreen.style.display = 'block';
                gameOverScreen.style.display = 'none';
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
                // J键：玩家攻击
                if (typeof exports.player_attack_export === 'function') {
                    exports.player_attack_export();
                    // 添加攻击震动效果
                    addScreenShake(3);
                }
            },
            KeyQ: () => {
                // Q键：手动触发天气变化（用于测试）
                // 已禁用
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
            
            // 使用连续时间驱动昼夜循环，避免基于分数的跳变导致卡顿
            // 一个完整昼夜时长（秒）
            const dayDurationSeconds = 60; 
            const dayProgress = ((animationTime / 1000) / dayDurationSeconds) % 1; // 0..1
            const cycleScore = dayProgress * 60; // 统一复用下方分段逻辑
            let timeOfDay, sunMoonX, sunMoonY, sunMoonRadius, sunMoonColor;
            let skyGradient, groundColor;
            
            if (theme === 0) {
                // 地球主题
                if (!backgroundGradients) {
                    initBackgroundGradients();
                }
                
                // 根据分数计算时间变化
                if (cycleScore <= 12) {
                    // 黎明（0-12分）
                    timeOfDay = 'dawn';
                    const progress = smootherStep(cycleScore / 12); // 0到1（平滑）
                    
                    // 太阳从左侧升起
                    sunMoonX = 20 + progress * 40; // 从20到60
                    sunMoonY = 40 - progress * 20; // 从40到20
                    sunMoonRadius = 14;
                    sunMoonColor = `rgb(${255}, ${200 + progress * 55}, ${100 + progress * 155})`; // 从橙黄到亮黄
                    
                    // 天空渐变：从深蓝到浅蓝
                    skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    skyGradient.addColorStop(0, `rgb(${50 + progress * 100}, ${100 + progress * 100}, ${150 + progress * 105})`);
                    skyGradient.addColorStop(1, `rgb(${135 + progress * 70}, ${206 + progress * 49}, ${235 + progress * 20})`);
                    
                    // 地面颜色：从深绿到亮绿
                    groundColor = `rgb(${34 + progress * 20}, ${100 + progress * 39}, ${34 + progress * 20})`;
                } else if (cycleScore <= 24) {
                    // 早晨（12-24分）
                    timeOfDay = 'morning';
                    const progress = smootherStep((cycleScore - 12) / 12); // 0到1（平滑）
                    
                    // 太阳在顶部中央
                    sunMoonX = 60 + progress * 40; // 从60到100
                    sunMoonY = 20 - progress * 10; // 从20到10
                    sunMoonRadius = 16 + progress * 2; // 从16到18
                    sunMoonColor = `rgb(255, 255, ${200 + progress * 55})`; // 从亮黄到白黄
                    
                    // 天空渐变：明亮的蓝色
                    skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    skyGradient.addColorStop(0, `rgb(${150 + progress * 105}, ${200 + progress * 55}, ${255})`);
                    skyGradient.addColorStop(1, `rgb(${205 + progress * 50}, ${255}, ${255})`);
                    
                    // 地面颜色：明亮的绿色
                    groundColor = `rgb(${54 + progress * 20}, ${139 + progress * 20}, ${54 + progress * 20})`;
                } else if (cycleScore <= 36) {
                    // 中午（24-36分）
                    timeOfDay = 'noon';
                    const progress = smootherStep((cycleScore - 24) / 12); // 0到1（平滑）
                    
                    // 太阳从右侧落下
                    sunMoonX = 100 + progress * 40; // 从100到140
                    sunMoonY = 10 + progress * 30; // 从10到40
                    sunMoonRadius = 18 - progress * 2; // 从18到16
                    sunMoonColor = `rgb(255, ${200 - progress * 100}, ${50 - progress * 50})`; // 从白黄到橙红
                    
                    // 天空渐变：从蓝到橙红
                    skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    skyGradient.addColorStop(0, `rgb(${255}, ${200 - progress * 100}, ${100 - progress * 50})`);
                    skyGradient.addColorStop(0.7, `rgb(${255}, ${150 - progress * 50}, ${50})`);
                    skyGradient.addColorStop(1, `rgb(${200 - progress * 50}, ${100 - progress * 50}, ${50})`);
                    
                    // 地面颜色：从亮绿到深绿
                    groundColor = `rgb(${74 - progress * 20}, ${159 - progress * 20}, ${74 - progress * 20})`;
                } else if (cycleScore <= 60) {
                    // 夜晚（48-60分）
                    timeOfDay = 'night';
                    const progress = smootherStep((cycleScore - 48) / 12); // 0到1（平滑）
                    
                    // 月亮在右侧
                    sunMoonX = 140 - progress * 20; // 从140到120
                    sunMoonY = 40 - progress * 20; // 从40到20
                    sunMoonRadius = 16;
                    sunMoonColor = `rgb(${220 + progress * 35}, ${220 + progress * 35}, ${255})`; // 从浅蓝到白
                    
                    // 天空渐变：深蓝色
                    skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    skyGradient.addColorStop(0, `rgb(${10 - progress * 10}, ${10 - progress * 10}, ${50 - progress * 20})`);
                    skyGradient.addColorStop(1, `rgb(${20 - progress * 20}, ${20 - progress * 20}, ${100 - progress * 50})`);
                    
                    // 地面颜色：深绿色
                    groundColor = `rgb(${34 - progress * 14}, ${100 - progress * 50}, ${34 - progress * 14})`;
                }
                
                // 绘制天空（加入细微亮度脉动，避免静态感）
                ctx.fillStyle = skyGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // 轻微整体曝光变化（极小幅度），让过渡更自然
                const exposure = 1 + Math.sin(animationTime * 0.0003) * 0.02;
                ctx.save();
                ctx.globalAlpha = Math.max(0, Math.min(1, (exposure - 1) * 8));
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();

        // 绘制太阳或月亮
                ctx.fillStyle = sunMoonColor;
                ctx.beginPath();
                ctx.arc(sunMoonX, sunMoonY, sunMoonRadius, 0, Math.PI * 2);
                ctx.fill();
                
        // 夜晚与黎明的星星淡入淡出
                if (timeOfDay === 'night') {
            drawStars(1);
            drawMeteors();
                } else if (timeOfDay === 'dawn') {
            drawStars(0.3);
                }

                // 云层
                ctx.save();
                let cloudAlpha = 0.55;
                if (timeOfDay === 'dawn') cloudAlpha = 0.6;
                else if (timeOfDay === 'night') cloudAlpha = 0.3;
                ctx.globalAlpha = cloudAlpha;
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
                ctx.fillStyle = groundColor;
                ctx.fillRect(0, canvas.height - groundH, canvas.width, groundH);
                
                // 地面纹理（与时间平滑联动）
                const textureOffset = (animationTime * 0.05) % 8;
                ctx.fillStyle = 'rgba(34, 139, 34, 0.3)';
                for (let i = 0; i < canvas.width + 8; i += 8) {
                    const x = (i - textureOffset) % (canvas.width + 8);
                    ctx.fillRect(x, canvas.height - 18, 2, 2);
                    ctx.fillRect(x + 4, canvas.height - 16, 1, 1);
                }
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
        }
        
        function drawStars(alpha = 1) {
            if (typeof window !== 'undefined' && typeof window.__globalDrawStars === 'function') {
                window.__globalDrawStars(alpha);
                return;
            }
            // 兜底：简单点星
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = '#FFFFFF';
            for (let i = 0; i < 30; i++) {
                const x = (i * 53) % canvas.width;
                const y = (i * 31) % (canvas.height - 20);
                ctx.fillRect(x, y, 1, 1);
            }
            ctx.restore();
        }

        function drawBird(x, y) {
            // 获取小鸟的有效大小和形态
            const birdSize = typeof exports.get_effective_bird_size_export === 'function' ? 
                exports.get_effective_bird_size_export() : 12;
            const evolutionStage = typeof exports.get_evolution_stage === 'function' ? 
                exports.get_evolution_stage() : 0;
            
            // 检查是否有隐形效果
            let isInvisible = false;
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
            
            // 护盾闪烁效果：从活动效果列表中检测护盾是否存在
            let hasShield = false;
            if (typeof exports.get_active_effects_count === 'function') {
                const effectsCount = exports.get_active_effects_count();
                for (let ei = 0; ei < effectsCount; ei++) {
                    const t = exports.get_effect_type(ei);
                    const rt = exports.get_effect_remaining_time(ei);
                    if (t === 0 && rt > 0) { // 0 = Shield
                        hasShield = true;
                        break;
                    }
                }
            }
            if (hasShield) {
                const tMs = (typeof performance !== 'undefined' ? performance.now() : Date.now());
                const blinkAlpha = 0.75 + 0.25 * Math.sin(tMs * 0.02);
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
            
            // 翅膀动画效果 - 使用rAF时间戳
            const timeMs = (typeof performance !== 'undefined' ? performance.now() : Date.now());
            const wingOffset = Math.sin(timeMs * 0.01) * (finalSize/4);
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
            
            // 绘制护盾外观覆盖（使用满不透明度，避免被整体闪烁影响）
            if (hasShield) {
                ctx.save();
                ctx.globalAlpha = 1.0;
                const time = ((typeof performance !== 'undefined' ? performance.now() : Date.now())) * 0.004;
                const ringCount = 2;
                for (let r = 0; r < ringCount; r++) {
                    const t = time + r * Math.PI / ringCount;
                    const pulse = (Math.sin(t) + 1) * 0.5; // 0~1
                    const radius = finalSize/2 + 2 + pulse * 3 + r * 1.5;
                    const hue = 200; // 蓝色护盾
                    const sat = 85;
                    const light = 60 + pulse * 15;
                    ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${Math.floor(light)}%, ${0.55 - r*0.15})`;
                    ctx.lineWidth = 1 + pulse * 0.8;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.stroke();
                }

                // 微弱的能量光晕
                const grad = ctx.createRadialGradient(x, y, finalSize/2, x, y, finalSize/2 + 8);
                grad.addColorStop(0, 'rgba(135,206,250,0.10)');
                grad.addColorStop(1, 'rgba(30,144,255,0.08)');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(x, y, finalSize/2 + 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            ctx.restore();
            
            // 确保透明度被重置，避免影响后续绘制
            ctx.globalAlpha = 1.0;
            
            // 所有形态保持完全相同的形状，不添加任何特殊特效
        }

        function drawPipes() {
            // 调试输出已关闭
            if (typeof exports.get_pipes_count !== 'function') {
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
                    // 更精致的拾取效果
                    spawnPickupBurst(x + 5, y + 5, type);
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
                    case 13: // Freeze - 冰冻
                        color = '#7FDBFF';
                        symbol = '🧊';
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

        // 测试函数：手动创建投射物
        function testCreateProjectile() {
            // removed
        }
        
        
        
        
        
        
        
        
        
        
        
        
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
            // 保留仅绘制投射物
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
            
            // 神龙自动效果是否处于激活时段（基于剩余时长，避免误判）
            const isDragonAutoActive = dragonAutoBoostDuration > 0;
            // 仅当进化阶段为神龙(4)时才显示龙威相关UI
            const evolutionStage = typeof exports.get_evolution_stage === 'function' ? 
                exports.get_evolution_stage() : 0;
            const isDragonAuraVisible = isDragonAutoActive && evolutionStage === 4;

            // 如果没有普通道具效果、凤凰涅槃特效和（满足条件的）龙威效果，则返回
            if (count === 0 && phoenixRebirthActive === 0 && !isDragonAuraVisible) return;
            
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
                
                // 如果龙威效果正在显示，隐藏单独的护盾(0)、加速(1)和龙威(12)效果
                if (isDragonAuraVisible && (type === 0 || type === 1 || type === 12)) {
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
            
            // 显示神龙自动效果（仅神龙形态）
            if (isDragonAuraVisible) {
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
                return;
            }
            const count = exports.get_phoenix_effects_count();
            
            if (count === 0) {
                // 只在第一次调用时记录
                if (!drawPhoenixEffects._logged) { drawPhoenixEffects._logged = true; }
                return;
            }
            
            // 检查画布上下文
            if (!ctx) { return; }
            
            for (let i = 0; i < count; i++) {
                const x = exports.get_phoenix_effect_x(i);
                const y = exports.get_phoenix_effect_y(i);
                const life = exports.get_phoenix_effect_life(i);
                const size = exports.get_phoenix_effect_size(i);
                const intensity = exports.get_phoenix_effect_intensity(i);
                const phase = exports.get_phoenix_effect_phase(i);
                
                ctx.save();
                
                try {
                    switch(phase) {
                        case 0: // 火焰粒子
                            drawFireParticle(x, y, size, intensity, life);
                            break;
                        case 1: // 光芒效果
                            drawLightEffect(x, y, size, intensity, life);
                            break;
                        case 2: // 重生光环
                            drawRebirthRing(x, y, size, intensity, life);
                            break;
                    }
                } catch (error) {}
                
                ctx.restore();
            }
        }
        
        // 火焰粒子渲染 - 简化为单一圆形，减小渲染大小
        function drawFireParticle(x, y, size, intensity, life) {
            // 轻微闪烁（随生命周期衰减），并缩小范围
            const baseAlpha = intensity * 2 / 3 / 255;
            const lifeFactor = Math.max(0.2, Math.min(1, life / 45));
            const alpha = baseAlpha * lifeFactor;
            const red = 255;
            const green = Math.min(255, 120 + intensity / 4);
            const blue = 20;
            
            // 更小更精致
            const renderSize = Math.max(0.5, size * 0.45);
            
            // 核心亮点 + 细微羽化
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, renderSize);
            gradient.addColorStop(0.0, `rgba(${red}, ${green}, ${blue}, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(${red}, ${green - 30}, ${blue}, ${alpha * 0.5})`);
            gradient.addColorStop(1.0, `rgba(${red}, ${green - 60}, ${blue}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, renderSize, 0, Math.PI * 2);
            ctx.fill();
            
            // 细微外环勾勒，提升“精致”感
            ctx.strokeStyle = `rgba(255, 180, 60, ${alpha * 0.4})`;
            ctx.lineWidth = Math.max(0.5, renderSize * 0.12);
            ctx.beginPath();
            ctx.arc(x, y, renderSize * 0.85, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // 光芒效果渲染 - 简化为单一圆形，减小渲染大小
        function drawLightEffect(x, y, size, intensity, life) {
            // 柔和金色光芒，更小更聚焦，带细微跳动
            const baseAlpha = intensity / 255;
            const pulse = 0.9 + 0.1 * Math.sin((life % 12) * 0.5);
            const alpha = baseAlpha * 0.6 * pulse;
            const red = 255;
            const green = Math.min(255, 215 + intensity / 6);
            const blue = 40;
            
            const renderSize = Math.max(1, size * 0.55);
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, renderSize);
            gradient.addColorStop(0.0, `rgba(${red}, ${green}, ${blue}, ${alpha})`);
            gradient.addColorStop(0.4, `rgba(${red}, ${green}, ${blue}, ${alpha * 0.35})`);
            gradient.addColorStop(1.0, `rgba(${red}, ${green}, ${blue}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, renderSize, 0, Math.PI * 2);
            ctx.fill();
            
            // 细环描边
            ctx.strokeStyle = `rgba(255, 220, 120, ${alpha * 0.5})`;
            ctx.lineWidth = Math.max(0.5, renderSize * 0.1);
            ctx.beginPath();
            ctx.arc(x, y, renderSize * 0.8, 0, Math.PI * 2);
                ctx.stroke();
        }
        
        // 重生光环渲染 - 简化为纯色圆形，减小渲染大小
        function drawRebirthRing(x, y, size, intensity, life) {
            // 细薄的发光环，半径更小，随生命周期轻微扩大
            const baseAlpha = intensity * 3 / 4 / 255;
            const alpha = baseAlpha * 0.6;
            const red = Math.min(255, 210 + intensity / 5);
            const green = Math.min(255, 140 + intensity / 4);
            const blue = 255;
            
            const baseSize = Math.max(1, size * 0.5);
            const renderSize = baseSize * (1 + Math.min(0.2, (45 - Math.max(0, 45 - life)) * 0.003));
            const inner = renderSize * 0.78;
            const outer = renderSize;
            
            // 外发光
            const glow = ctx.createRadialGradient(x, y, inner, x, y, outer * 1.15);
            glow.addColorStop(0.0, `rgba(${red}, ${green}, ${blue}, ${alpha * 0.25})`);
            glow.addColorStop(1.0, `rgba(${red}, ${green}, ${blue}, 0)`);
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(x, y, outer * 1.15, 0, Math.PI * 2);
            ctx.fill();
            
            // 细环
            ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            ctx.lineWidth = Math.max(0.6, renderSize * 0.12);
            ctx.beginPath();
            ctx.arc(x, y, (inner + outer) / 2, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // 重生符文渲染 - 简化为纯色圆形
        function drawRebirthRune(x, y, size, r, g, b, alpha) {
            // 更小的中心符点，极简
            const s = Math.max(0.5, size * 0.6);
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, s);
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.8})`);
            gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${alpha * 0.35})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, s, 0, Math.PI * 2);
            ctx.fill();
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
        const MAX_PARTICLES = 120; // 限制最大粒子数量，适度提升以适配新特效
        const PARTICLE_POOL = []; // 粒子对象池
        // 漂浮文本标签层
        let floatingLabels = [];
        const MAX_LABELS = 12;
        
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
                ax: 0,
                ay: 0.05, // 轻微重力
                life: 1.0,
                decay: 0.02,
                size: Math.random() * 3 + 1,
                color: type === 'score' ? '#FFD700' : type === 'item' ? '#FF6B35' : '#FFFFFF',
                type: type,
                shape: 'circle',
                angle: Math.random() * Math.PI * 2,
                angularVelocity: (Math.random() - 0.5) * 0.2,
                drag: 0.98,
                strokeWidth: 1,
                ringRadius: 0,
                ringGrowth: 0
            };
            particles.push(particle);
        }

        // 创建更灵活的粒子（支持指定属性）
        function createAdvancedParticle(x, y, props) {
            if (particles.length >= MAX_PARTICLES) {
                particles.shift();
            }
            const base = {
                x: x, y: y,
                vx: 0, vy: 0, ax: 0, ay: 0.05,
                life: 1.0, decay: 0.03,
                size: 2, color: '#FFFFFF', type: 'custom',
                shape: 'circle', angle: 0, angularVelocity: 0,
                drag: 0.98, strokeWidth: 1,
                ringRadius: 0, ringGrowth: 0
            };
            particles.push(Object.assign(base, props));
        }
        
        function updateParticles() {
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                // 物理更新
                p.vx += p.ax;
                p.vy += p.ay;
                p.vx *= p.drag;
                p.vy *= p.drag;
                p.x += p.vx;
                p.y += p.vy;
                p.angle += p.angularVelocity;
                // 环形特效半径扩散
                if (p.shape === 'ring') {
                    p.ringRadius += p.ringGrowth;
                }
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
                ctx.globalAlpha = Math.max(0, p.life);
                if (p.shape === 'ring') {
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = p.strokeWidth;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, Math.max(0, p.ringRadius), 0, Math.PI * 2);
                    ctx.stroke();
                    continue;
                }

                ctx.fillStyle = p.color;
                switch (p.shape) {
                    case 'square': {
                        ctx.save();
                        ctx.translate(p.x, p.y);
                        ctx.rotate(p.angle);
                        ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
                        ctx.restore();
                        break;
                    }
                    case 'star': {
                        ctx.save();
                        ctx.translate(p.x, p.y);
                        ctx.rotate(p.angle);
                        ctx.beginPath();
                        const spikes = 5;
                        const outer = p.size * 1.8;
                        const inner = p.size * 0.7;
                        for (let s = 0; s < spikes; s++) {
                            const rot1 = (Math.PI / spikes) * 2 * s;
                            ctx.lineTo(Math.cos(rot1) * outer, Math.sin(rot1) * outer);
                            const rot2 = rot1 + Math.PI / spikes;
                            ctx.lineTo(Math.cos(rot2) * inner, Math.sin(rot2) * inner);
                        }
                        ctx.closePath();
                        ctx.fill();
                        ctx.restore();
                        break;
                    }
                    default: {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                    }
                }
            }
            ctx.restore();
        }

        // 浮动标签：用于分数与拾取提示
        function createFloatingLabel(text, x, y, color = '#FFFFFF') {
            if (floatingLabels.length >= MAX_LABELS) {
                floatingLabels.shift();
            }
            floatingLabels.push({
                text: text,
                x: x,
                y: y,
                vy: -0.35,
                life: 1.0,
                decay: 0.02,
                color: color,
                scale: 1
            });
        }

        function updateFloatingLabels() {
            for (let i = floatingLabels.length - 1; i >= 0; i--) {
                const lb = floatingLabels[i];
                lb.y += lb.vy;
                lb.vy *= 0.98;
                lb.life -= lb.decay;
                lb.scale += 0.005;
                if (lb.life <= 0) floatingLabels.splice(i, 1);
            }
        }

        function drawFloatingLabels() {
            if (floatingLabels.length === 0) return;
            ctx.save();
            for (let i = 0; i < floatingLabels.length; i++) {
                const lb = floatingLabels[i];
                ctx.globalAlpha = Math.max(0, lb.life);
                ctx.fillStyle = lb.color;
                ctx.font = `${Math.floor(10 * lb.scale)}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillText(lb.text, lb.x, lb.y);
            }
            ctx.restore();
        }

        // 拾取与得分的高级粒子特效
        function spawnScoreBurst(x, y, delta) {
            const d = Math.max(1, delta || 1);
            // 扩散环
            createAdvancedParticle(x, y, {
                shape: 'ring', color: '#FFD700', strokeWidth: 1.5,
                ringRadius: 2, ringGrowth: 0.9, life: 0.9, decay: 0.035
            });
            // 金色纸屑
            const confettiColors = ['#FFD700', '#FFF3B0', '#FFA500', '#FFFFFF'];
            for (let i = 0; i < 10 + d * 2; i++) {
                const a = Math.random() * Math.PI * 2;
                const sp = 0.6 + Math.random() * 1.2;
                createAdvancedParticle(x, y, {
                    shape: 'square', color: confettiColors[i % confettiColors.length],
                    vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                    angularVelocity: (Math.random() - 0.5) * 0.5,
                    size: 1.5 + Math.random() * 1.5, life: 1.0, decay: 0.03
                });
            }
            // 闪烁星星
            for (let i = 0; i < 6; i++) {
                const a = Math.random() * Math.PI * 2;
                const sp = 0.4 + Math.random() * 0.8;
                createAdvancedParticle(x, y, {
                    shape: 'star', color: '#FFF8DC',
                    vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                    size: 1.2 + Math.random() * 1.2, life: 0.9, decay: 0.04
                });
            }
            createFloatingLabel(`+${d}`, x, y - 6, '#FFD700');
        }

        function getItemColor(type) {
            switch(type) {
                case 0: return '#00BFFF';
                case 1: return '#FF4500';
                case 2: return '#9370DB';
                case 3: return '#FFD700';
                case 4: return '#FF69B4';
                case 5: return '#8A2BE2';
                case 6: return '#32CD32';
                case 7: return '#FF1493';
                case 8: return '#FFD700';
                case 9: return '#FF6347';
                case 10: return '#800080';
                case 11: return '#FF4500';
                case 12: return '#FFA500'; // DragonPower - 龙威
                case 13: return '#7FDBFF'; // Freeze - 冰冻
                default: return '#808080';
            }
        }

        function getPickupLabel(type) {
            switch(type) {
                case 0: return '护盾';
                case 1: return '加速';
                case 2: return '缩小';
                case 3: return '磁铁';
                case 4: return '重力';
                case 5: return '传送';
                case 6: return '翻倍';
                case 7: return '生命';
                case 8: return '金币';
                case 9: return '进化';
                case 10: return '隐形';
                case 11: return '放大';
                case 12: return '龙威';
                case 13: return '冻结';
                default: return '拾取';
            }
        }

        function spawnPickupBurst(x, y, type) {
            const color = getItemColor(type);
            // 环形波
            createAdvancedParticle(x, y, {
                shape: 'ring', color: color, strokeWidth: 1.2,
                ringRadius: 1.5, ringGrowth: 0.7, life: 0.9, decay: 0.035
            });
            // 彩屑
            for (let i = 0; i < 12; i++) {
                const a = Math.random() * Math.PI * 2;
                const sp = 0.8 + Math.random() * 1.1;
                createAdvancedParticle(x, y, {
                    shape: 'square', color: color,
                    vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                    angularVelocity: (Math.random() - 0.5) * 0.4,
                    size: 1.4 + Math.random() * 1.6, life: 0.95, decay: 0.03
                });
            }
            // 星光
            for (let i = 0; i < 5; i++) {
                const a = Math.random() * Math.PI * 2;
                const sp = 0.3 + Math.random() * 0.7;
                createAdvancedParticle(x, y, {
                    shape: 'star', color: '#FFFFFF',
                    vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                    size: 1.0 + Math.random() * 1.2, life: 0.8, decay: 0.04
                });
            }
            createFloatingLabel(`+${getPickupLabel(type)}`, x, y - 6, color);
        }
        
        // 屏幕震动效果
        function addScreenShake(intensity = 5) {
            screenShake = 10;
            screenShakeIntensity = intensity;
        }
        
        function updateScreenShake() {
            // 内部震动（来自本地事件，如gameover或攻击）
            if (screenShake > 0) {
                screenShake--;
                const shakeX = (Math.random() - 0.5) * screenShakeIntensity;
                const shakeY = (Math.random() - 0.5) * screenShakeIntensity;
                ctx.translate(shakeX, shakeY);
            }
            // 来自引擎状态的轻微震动（碰撞但仍有生命）
            try {
                const ticks = (typeof exports.get_shake_ticks === 'function') ? exports.get_shake_ticks() : 0;
                if (ticks > 0) {
                    const mag = (typeof exports.get_shake_magnitude === 'function') ? exports.get_shake_magnitude() : 2;
                    const fade = Math.max(0.2, Math.min(1, ticks / 12));
                    const sx = (Math.random() - 0.5) * mag * fade;
                    const sy = (Math.random() - 0.5) * mag * fade;
                    ctx.translate(sx, sy);
                }
            } catch (_) {}
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
                if (nirvanaActive && nirvanaNotification.style.display === 'none') {
                    nirvanaNotification.style.display = 'block';
                } else if (!nirvanaActive && nirvanaNotification.style.display === 'block') {
                    nirvanaNotification.style.display = 'none';
                }
            } else {
                //
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
                const wasmMode = (typeof exports.get_game_mode === 'function') ? exports.get_game_mode() : undefined;
                const selectedMode = currentGameMode;
                let effectiveMode;
                if (typeof wasmMode === 'number') {
                    effectiveMode = (wasmMode !== 0 || selectedMode === 0) ? wasmMode : selectedMode;
                } else {
                    effectiveMode = selectedMode;
                }
                if (effectiveMode !== lastUIValues.gameMode) {
                    const modeName = (function(m) {
                        switch (m) {
                            case 0: return '经典';
                            case 1: return '经典（无道具）';
                            case 2: return '完美';
                            case 3: return '极速';
                            case 4: return '困难';
                            case 5: return '多人';
                            default: return '经典';
                        }
                    })(effectiveMode);
                    uiUpdateQueue.push({ element: currentModeEl, value: modeName });
                    lastUIValues.gameMode = effectiveMode;
                    // 所有模式都不显示限时（模式1已改为无道具的经典模式，不再限时）
                    if (typeof timeItemEl !== 'undefined' && timeItemEl) {
                        if (timeItemEl.style.display !== 'none') timeItemEl.style.display = 'none';
                    }
                }
            }
            
            // 更新扩展UI元素 - 只在值变化时更新
            if (evolutionEl) {
                const evolutionStage = typeof exports.get_evolution_stage === 'function' ? 
                    exports.get_evolution_stage() : 0;
                if (evolutionStage !== lastUIValues.evolutionStage) {
                    const stageNames = ['雏鸟', '成鸟', '雄鹰', '凤凰', '神龙'];
                    uiUpdateQueue.push({ element: evolutionEl, value: stageNames[evolutionStage] });
                    lastUIValues.evolutionStage = evolutionStage;
                }
            }
            
            if (livesEl) {
                    const lives = typeof exports.get_player_lives === 'function' ? 
                        exports.get_player_lives() : 1;
                const displayValue = String(lives);
                
                if (displayValue !== lastUIValues.lives) {
                    uiUpdateQueue.push({ element: livesEl, value: displayValue });
                    lastUIValues.lives = displayValue;
                }
            }
            
            if (goldEl) {
                const gold = typeof exports.get_player_gold === 'function' ? 
                    exports.get_player_gold() : 0;
                if (gold !== lastUIValues.gold) {
                    uiUpdateQueue.push({ element: goldEl, value: String(gold) });
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
                    uiUpdateQueue.push({ element: difficultyEl, value: String(difficulty) });
                    lastUIValues.difficulty = difficulty;
                }
            }
            
            if (comboEl) {
                const combo = typeof exports.get_combo_count === 'function' ? 
                    exports.get_combo_count() : 0;
                if (combo !== lastUIValues.combo) {
                    uiUpdateQueue.push({ element: comboEl, value: String(combo) });
                    // 视觉提示：当连击增加时触发发光动画
                    if (typeof lastUIValues.combo === 'number' && combo > lastUIValues.combo) {
                        try {
                            comboEl.classList.add('combo-active');
                            setTimeout(() => comboEl.classList.remove('combo-active'), 500);
                            // 连击里程碑提示：5连/10连播放提示音
                            if (combo === 5 || combo === 10) {
                                audioManager.play('item');
                            }
                        } catch (e) {}
                    }
                    // 更新最大连击显示与存储
                    if (typeof maxCombo !== 'undefined' && combo > maxCombo) {
                        maxCombo = combo;
                        try { localStorage.setItem('flappyBirdMaxCombo', String(maxCombo)); } catch (e) {}
                        if (maxComboEl) {
                            uiUpdateQueue.push({ element: maxComboEl, value: String(maxCombo) });
                        }
                    }
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
        
        // 更新动画时间（仅内部使用，不再写入 window）
        animationTime += dt;
        
        // 更新天气系统
        updateWeatherSystem();
        
        // 更新天气显示
        updateWeatherDisplay();

        // 渲染每帧执行（读状态→绘制）
        const bx = exports.get_bird_x ? exports.get_bird_x() : 45;
        const by = exports.get_bird_y ? exports.get_bird_y() : 80;
        const score = exports.get_score ? exports.get_score() : 0;
        const started = exports.is_game_started ? exports.is_game_started() : 0;
        const over = exports.is_game_over ? exports.is_game_over() : 0;
        const countdownTicks = (typeof exports.get_start_countdown_ticks === 'function') ? exports.get_start_countdown_ticks() : 0;
        const protectionTicks = (typeof exports.get_spawn_protection_ticks === 'function') ? exports.get_spawn_protection_ticks() : 0;

        // 检测分数变化并播放音效
        if (score > lastScore) {
            audioManager.play('score');
            const delta = score - lastScore;
            // 更精致的得分特效
            spawnScoreBurst(80, 80, delta);
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
            
            // 绘制天气效果
            drawWeatherEffects();
            
            // 绘制管道
            drawPipes();
            
            // 绘制道具和效果
            
            drawItems();
            drawEffects();
            drawPhoenixEffects();
            
        const modeGetter = (typeof exports.get_game_mode === 'function') ? exports.get_game_mode : null;
        const gameModeVal = modeGetter ? modeGetter() : currentGameMode;
        
            
            // 绘制小鸟
            drawBird(bx, by);
            
            // 冰冻视觉效果：在小鸟周围绘制半透明冰方块
            try {
                if (typeof exports.has_freeze_effect_export === 'function' && exports.has_freeze_effect_export() === 1) {
                    const size = typeof exports.get_effective_bird_size_export === 'function' ? exports.get_effective_bird_size_export() : 12;
                    const pad = 3;
                    ctx.save();
                    ctx.strokeStyle = 'rgba(173, 216, 230, 0.9)';
                    ctx.fillStyle = 'rgba(173, 216, 230, 0.25)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.rect(bx - size / 2 - pad, by - size / 2 - pad, size + pad * 2, size + pad * 2);
                    ctx.fill();
                    ctx.stroke();
                    // 冰纹裂痕
                    ctx.strokeStyle = 'rgba(135, 206, 235, 0.6)';
                    ctx.beginPath();
                    ctx.moveTo(bx - size / 2 - pad + 2, by - size / 2);
                    ctx.lineTo(bx + size / 2 + pad - 2, by + size / 2);
                    ctx.moveTo(bx + size / 2 + pad - 2, by - size / 2);
                    ctx.lineTo(bx - size / 2 - pad + 2, by + size / 2);
                    ctx.stroke();
                    ctx.restore();
                }
            } catch (e) {}

            // 传送视觉效果（保持鸟的x不动，仅渲染特效与进度）
            try {
                const tpActive = (typeof exports.get_teleport_active === 'function') ? exports.get_teleport_active() : 0;
                if (tpActive === 1) {
                    const progress = (typeof exports.get_teleport_progress === 'function') ? exports.get_teleport_progress() : 0; // 0-100
                    // 速度线条（在鸟前方）
                    const streakCount = 6;
                    for (let i = 0; i < streakCount; i++) {
                        const len = 6 + (i * 2);
                        const offsetY = -8 + i * 3;
                        ctx.strokeStyle = `rgba(135, 206, 235, ${0.2 + 0.1 * i})`;
                        ctx.lineWidth = 1 + (i % 2);
                        ctx.beginPath();
                        ctx.moveTo(bx + 8, by + offsetY);
                        ctx.lineTo(bx + 8 + len, by + offsetY);
                        ctx.stroke();
                    }

                    // 传送目标提示（鸟前方固定距离位置的闪烁标记）
                    const targetX = bx + 100; // 画面坐标前方100像素，仅用于视觉提示
                    const alpha = 0.4 + 0.6 * Math.sin((performance.now() / 100) % (2 * Math.PI));
                    ctx.strokeStyle = `rgba(32, 178, 170, ${alpha.toFixed(2)})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(targetX, by, 6 + (progress / 20), 0, Math.PI * 2);
                    ctx.stroke();

                    // 传送进度条（鸟下方）
                    const barW = 40;
                    const barH = 4;
                    const barX = bx - barW / 2;
                    const barY = by + 16;
                    ctx.fillStyle = 'rgba(255,255,255,0.2)';
                    ctx.fillRect(barX, barY, barW, barH);
                    ctx.fillStyle = 'rgba(32,178,170,0.9)';
                    ctx.fillRect(barX, barY, (barW * progress) / 100, barH);
                }
            } catch (e) {
                // 忽略视觉效果错误，避免影响主循环
            }
            
            // 倒计时显示（居中大字）
            try {
                if (started === 1 && countdownTicks > 0) {
                    const sec = Math.ceil(countdownTicks / 60);
                    const label = sec > 0 ? String(sec) : 'GO';
                    ctx.save();
                    ctx.fillStyle = 'rgba(255,255,255,0.9)';
                    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
                    ctx.lineWidth = 4;
                    ctx.font = 'bold 36px system-ui, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.strokeText(label, 80, 60);
                    ctx.fillText(label, 80, 60);
                    ctx.restore();
                }
            } catch (e) {}
            
            // 开局护体：在小鸟周围画一个柔和护盾圈
            try {
                if (started === 1 && protectionTicks > 0) {
                    const alpha = Math.min(0.6, 0.2 + protectionTicks / 100);
                    ctx.save();
                    ctx.strokeStyle = `rgba(173,216,230,${alpha.toFixed(2)})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(bx, by, 10, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }
            } catch (e) {}
            
            // 移除在鸟上方显示的效果小球与剩余条
            
            // 经典模式阈值冲刺视觉效果（速度线）
            try {
                const modeForDash = (typeof exports.get_game_mode === 'function') ? exports.get_game_mode() : 0;
                if (modeForDash === 0) { // Classic
                    const boostTicks = (typeof exports.get_classic_boost_ticks === 'function') ? exports.get_classic_boost_ticks() : 0;
                    if (boostTicks > 0) {
                        const intensity = Math.min(1, boostTicks / 60); // 前半程更强
                        const lines = 6;
                        ctx.save();
                        ctx.strokeStyle = `rgba(64,224,208,${0.25 + 0.35 * intensity})`;
                        for (let i = 0; i < lines; i++) {
                            const len = 8 + i * 3;
                            const offsetY = -10 + i * 4;
                            ctx.lineWidth = 1 + (i % 2);
                            ctx.beginPath();
                            ctx.moveTo(bx - 14, by + offsetY);
                            ctx.lineTo(bx - 14 - len, by + offsetY);
                            ctx.stroke();
                        }
                        // 前方向高光线，强调“向前冲刺”
                        ctx.strokeStyle = `rgba(255,255,255,${0.15 + 0.25 * intensity})`;
                        for (let i = 0; i < 4; i++) {
                            const len = 10 + i * 4;
                            const offsetY = -6 + i * 4;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(bx + 10, by + offsetY);
                            ctx.lineTo(bx + 10 + len, by + offsetY);
                            ctx.stroke();
                        }
                        ctx.restore();
                    }
                }
            } catch (e) {}
            
            // 动量槽或速度条（Rush: 动量；Classic: 顶部速度条 + 底部动量条）
            try {
                const mode = (typeof exports.get_game_mode === 'function') ? exports.get_game_mode() : 0;
                if (mode === 3) {
                    // Rush：单条动量条（青色）
                    const meter = (typeof exports.get_rush_meter === 'function') ? exports.get_rush_meter() : 0;
                    const threshold = (typeof exports.get_rush_threshold === 'function') ? exports.get_rush_threshold() : 200;
                    const prog = Math.max(0, Math.min(1, meter / threshold));
                    ctx.save();
                    const w = 70, h = 8, x = 8, y = 8, r = 4;
                    ctx.beginPath();
                    ctx.moveTo(x + r, y);
                    ctx.lineTo(x + w - r, y);
                    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
                    ctx.lineTo(x + w, y + h - r);
                    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
                    ctx.lineTo(x + r, y + h);
                    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
                    ctx.lineTo(x, y + r);
                    ctx.quadraticCurveTo(x, y, x + r, y);
                    ctx.closePath();
                    ctx.fillStyle = 'rgba(255,255,255,0.12)';
                    ctx.fill();
                    ctx.save();
                    ctx.clip();
                    const fillW = Math.max(0, w * prog);
                    const grad = ctx.createLinearGradient(x, y, x + fillW, y);
                    grad.addColorStop(0, 'rgba(64,224,208,1)');
                    grad.addColorStop(1, 'rgba(32,178,170,1)');
                    ctx.fillStyle = grad;
                    ctx.fillRect(x, y, fillW, h);
                    ctx.fillStyle = 'rgba(255,255,255,0.25)';
                    ctx.fillRect(x, y, fillW, 2);
                    ctx.restore();
                    if (prog > 0) {
                        ctx.shadowColor = 'rgba(64,224,208,0.6)';
                        ctx.shadowBlur = 8;
                        ctx.strokeStyle = 'rgba(64,224,208,0.6)';
                        ctx.lineWidth = 1;
                        ctx.strokeRect(x + 0.5, y + 0.5, Math.max(0, fillW - 1), h - 1);
                        ctx.shadowBlur = 0;
                    }
                    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
                    ctx.lineWidth = 1;
                    for (let i = 1; i < 5; i++) {
                        const tx = x + (w * (i * 0.2));
                        ctx.beginPath();
                        ctx.moveTo(tx, y + 1);
                        ctx.lineTo(tx, y + h - 1);
                        ctx.stroke();
                    }
                    ctx.restore();
                } else if (mode === 0) {
                    // Classic：显示神龙充能条（仅神龙形态）
                    const evolutionStage = (typeof exports.get_evolution_stage === 'function') ? exports.get_evolution_stage() : 0;
                    if (evolutionStage === 4) {
                        const charge = (typeof exports.get_dragon_charge === 'function') ? exports.get_dragon_charge() : 0;
                        const threshold = (typeof exports.get_dragon_charge_threshold === 'function') ? exports.get_dragon_charge_threshold() : 1;
                        const progress = threshold > 0 ? Math.max(0, Math.min(1, charge / threshold)) : 0;
                        
                        const w = 60;
                        const h = 10;
                        const x = 8;
                        const yTop = 8;
                        const r = 5;
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(x + r, yTop);
                        ctx.lineTo(x + w - r, yTop);
                        ctx.quadraticCurveTo(x + w, yTop, x + w, yTop + r);
                        ctx.lineTo(x + w, yTop + h - r);
                        ctx.quadraticCurveTo(x + w, yTop + h, x + w - r, yTop + h);
                        ctx.lineTo(x + r, yTop + h);
                        ctx.quadraticCurveTo(x, yTop + h, x, yTop + h - r);
                        ctx.lineTo(x, yTop + r);
                        ctx.quadraticCurveTo(x, yTop, x + r, yTop);
                        ctx.closePath();
                        ctx.fillStyle = 'rgba(255,255,255,0.12)';
                        ctx.fill();
                        ctx.strokeStyle = 'rgba(222,210,255,0.35)';
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        
                        const fillW = Math.max(0, Math.min(w, w * progress));
                        if (fillW > 0) {
                            ctx.save();
                            ctx.clip();
                            const grad = ctx.createLinearGradient(x, yTop, x + fillW, yTop);
                            grad.addColorStop(0, 'rgba(138,43,226,1)');
                            grad.addColorStop(1, 'rgba(218,112,214,1)');
                            ctx.fillStyle = grad;
                            ctx.fillRect(x, yTop, fillW, h);
                            ctx.fillStyle = 'rgba(255,255,255,0.28)';
                            ctx.fillRect(x, yTop, fillW, 2);
                            ctx.restore();
                        }
                        
                        if (progress >= 1) {
                            ctx.save();
                            ctx.shadowColor = 'rgba(218,112,214,0.85)';
                            ctx.shadowBlur = 15;
                            ctx.strokeStyle = 'rgba(255,255,255,0.9)';
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(x - 1, yTop - 1, w + 2, h + 2);
                            ctx.restore();
                        }
                        
                        ctx.restore();
                        
                        // 标签
                        ctx.save();
                        ctx.fillStyle = progress >= 1 ? '#FFE6FF' : '#E8E0FF';
                        ctx.font = '9px Arial';
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'top';
                        const label = progress >= 1 ? '龙威就绪' : '龙威充能';
                        ctx.fillText(label, x, yTop + h + 6);
                        ctx.restore();
                    }
                }
            } catch (e) {}
            
            drawProjectiles();
            
            // 更新和绘制粒子与飘字
            updateParticles();
            drawParticles();
            updateFloatingLabels();
            drawFloatingLabels();
            
            
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
                    //
                }
            }
        }
        
        // 初始化画布上下文
        initCanvas();
        
        // 初始化天气系统
        initWeatherSystem();
        
        // 初始化天气显示
        if (typeof updateWeatherDisplay === 'function') {
            updateWeatherDisplay();
        }
        
        
        // 启动游戏循环
        requestAnimationFrame(frame);
    } catch (error) {
        
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