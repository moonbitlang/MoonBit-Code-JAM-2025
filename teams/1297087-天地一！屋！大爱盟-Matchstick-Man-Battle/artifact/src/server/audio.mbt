///| Audio System - 音频系统
/// 管理游戏音效和背景音乐

///| 音频事件类型
pub enum AudioEventType {
  // 武器音效
  PistolShot       // 手枪射击
  ShotgunShot      // 霰弹枪射击
  SniperShot       // 狙击枪射击
  LaserShot        // 激光枪射击
  SwordSwing       // 剑挥舞
  
  // 击中音效
  BulletHit        // 子弹击中
  KillEnemy        // 击杀敌人
  PlayerDeath      // 玩家死亡
  
  // 游戏事件
  LevelStart       // 关卡开始
  LevelComplete    // 关卡完成
  GameOver         // 游戏结束
  
  // 背景音乐
  BgmLevel1        // 关卡1背景音乐
  BgmLevel2        // 关卡2背景音乐
  BgmLevel3        // 关卡3背景音乐
  BgmLevel4        // 关卡4背景音乐
  BgmLevel5        // 关卡5背景音乐
  BgmBoss          // Boss战背景音乐
  BgmMenu          // 菜单背景音乐
} derive(Eq, Show, Hash)

///| 音频类别
pub enum AudioCategory {
  SoundEffect      // 音效
  BackgroundMusic  // 背景音乐
} derive(Eq)

///| 音频配置
pub struct AudioConfig {
  path : String              // 音频文件路径
  category : AudioCategory   // 音频类别
  default_volume : Double    // 默认音量 (0.0-1.0)
  should_loop : Bool         // 是否循环播放
}

///| 音频管理器
pub struct AudioManager {
  mut sfx_enabled : Bool                                 // 音效开关
  mut bgm_enabled : Bool                                 // 背景音乐开关
  mut master_volume : Double                             // 主音量
  audio_configs : Map[AudioEventType, AudioConfig]   // 音频配置
  mut current_bgm : AudioEventType?                      // 当前播放的背景音乐
}

///| 创建音频管理器
pub fn AudioManager::new() -> AudioManager {
  AudioManager::{
    sfx_enabled: true,
    bgm_enabled: true,
    master_volume: 0.5,
    audio_configs: Map::new(),
    current_bgm: None
  }
}

///| 注册音频配置
fn AudioManager::register_audio(
  self : Self, 
  event_type : AudioEventType, 
  path : String,
  category : AudioCategory,
  default_volume : Double,
  should_loop : Bool
) -> Unit {
  let config = AudioConfig::{
    path,
    category,
    default_volume,
    should_loop
  }
  self.audio_configs.set(event_type, config)
}

///| 初始化音频配置（定义所有音频文件路径）
pub fn AudioManager::init_audio_configs(self : Self) -> Unit {
  // 武器音效配置
  self.register_audio(PistolShot, "assets/Audio/Weapons/pistol_shot.mp3", SoundEffect, 0.6, false)
  self.register_audio(ShotgunShot, "assets/Audio/Weapons/shotgun_shot.mp3", SoundEffect, 0.7, false)
  self.register_audio(SniperShot, "assets/Audio/Weapons/sniper_shot.mp3", SoundEffect, 0.8, false)
  self.register_audio(LaserShot, "assets/Audio/Weapons/laser_shot.mp3", SoundEffect, 0.5, false)
  self.register_audio(SwordSwing, "assets/Audio/Weapons/sword_swing.wav", SoundEffect, 0.4, false)
  
  // 击中音效配置
  self.register_audio(BulletHit, "assets/Audio/Effects/bullet_hit.wav", SoundEffect, 0.5, false)
  self.register_audio(KillEnemy, "assets/Audio/Effects/kill_enemy.wav", SoundEffect, 0.7, false)
  self.register_audio(PlayerDeath, "assets/Audio/Effects/player_death.mp3", SoundEffect, 0.8, false)
  
  // 游戏事件音效
  self.register_audio(LevelStart, "assets/Audio/Effects/level_start.mp3", SoundEffect, 0.6, false)
  self.register_audio(LevelComplete, "assets/Audio/Effects/level_complete.wav", SoundEffect, 0.7, false)
  self.register_audio(GameOver, "assets/Audio/Effects/game_over.wav", SoundEffect, 0.8, false)
  
  // 背景音乐配置
  self.register_audio(BgmMenu, "assets/Audio/BGM/menu.wav", BackgroundMusic, 0.3, true)
  self.register_audio(BgmLevel1, "assets/Audio/BGM/level1.wav", BackgroundMusic, 0.3, true)
  self.register_audio(BgmLevel2, "assets/Audio/BGM/level2.wav", BackgroundMusic, 0.3, true)
  self.register_audio(BgmLevel3, "assets/Audio/BGM/level3.wav", BackgroundMusic, 0.3, true)
  self.register_audio(BgmLevel4, "assets/Audio/BGM/level4.wav", BackgroundMusic, 0.3, true)
  self.register_audio(BgmLevel5, "assets/Audio/BGM/level5.wav", BackgroundMusic, 0.3, true)
  self.register_audio(BgmBoss, "assets/Audio/BGM/boss.wav", BackgroundMusic, 0.4, true)
}

///| JS FFI - 播放音频（支持自动处理浏览器自动播放限制）
extern "js" fn js_play_audio(path : String, volume : Double, should_loop : Bool) -> Unit =
  #| (path, volume, shouldLoop) => {
  #|   // 全局音频管理器
  #|   if (!window.audioManager) {
  #|     window.audioManager = {
  #|       pendingAudios: [],
  #|       userInteracted: false,
  #|       init: function() {
  #|         // 监听首次用户交互
  #|         const events = ['click', 'keydown', 'touchstart'];
  #|         const onFirstInteraction = () => {
  #|           this.userInteracted = true;
  #|           console.log('检测到首次用户交互，播放待播放音频');
  #|           // 播放所有待播放的音频
  #|           this.pendingAudios.forEach(({audio, path}) => {
  #|             audio.play().catch(err => console.warn('延迟音频播放失败:', path, err));
  #|           });
  #|           this.pendingAudios = [];
  #|           // 移除监听器
  #|           events.forEach(event => document.removeEventListener(event, onFirstInteraction));
  #|         };
  #|         events.forEach(event => document.addEventListener(event, onFirstInteraction));
  #|       }
  #|     };
  #|     window.audioManager.init();
  #|   }
  #|   
  #|   try {
  #|     const audio = new Audio(path);
  #|     audio.volume = volume;
  #|     audio.loop = shouldLoop;
  #|     
  #|     // 尝试播放
  #|     const playPromise = audio.play();
  #|     if (playPromise !== undefined) {
  #|       playPromise.catch(err => {
  #|         if (err.name === 'NotAllowedError' && !window.audioManager.userInteracted) {
  #|           console.log('等待用户交互后播放:', path);
  #|           window.audioManager.pendingAudios.push({audio, path});
  #|         } else {
  #|           console.warn('音频播放失败:', path, err);
  #|         }
  #|       });
  #|     }
  #|   } catch(err) {
  #|     console.warn('音频加载失败:', path, err);
  #|   }
  #| }

///| JS FFI - 停止音频（通过路径）
extern "js" fn js_stop_audio(path : String) -> Unit =
  #| (path) => {
  #|   // 停止所有匹配路径的音频
  #|   document.querySelectorAll('audio').forEach(audio => {
  #|     if (audio.src.includes(path)) {
  #|       audio.pause();
  #|       audio.currentTime = 0;
  #|     }
  #|   });
  #|   
  #|   // 从待播放列表中移除
  #|   if (window.audioManager) {
  #|     window.audioManager.pendingAudios = window.audioManager.pendingAudios.filter(
  #|       item => !item.path.includes(path)
  #|     );
  #|   }
  #| }

///| 播放音效（实际播放逻辑需要在JS端实现）
pub fn AudioManager::play_sound(self : Self, event_type : AudioEventType) -> Unit {
  match self.audio_configs.get(event_type) {
    Some(config) => {
      // 检查类别和开关
      match config.category {
        SoundEffect => {
          if self.sfx_enabled {
            println("播放音效: \{event_type}, 路径: \{config.path}")
            let volume = config.default_volume * self.master_volume
            js_play_audio(config.path, volume, config.should_loop)
          }
        }
        BackgroundMusic => {
          if self.bgm_enabled {
            println("播放背景音乐: \{event_type}, 路径: \{config.path}")
            let volume = config.default_volume * self.master_volume
            js_play_audio(config.path, volume, config.should_loop)
          }
        }
      }
    }
    None => {
      println("警告: 未找到音频配置 \{event_type}")
    }
  }
}

///| 播放背景音乐（自动停止当前背景音乐）
pub fn AudioManager::play_bgm(self : Self, event_type : AudioEventType) -> Unit {
  // 停止当前背景音乐
  match self.current_bgm {
    Some(current) => {
      match self.audio_configs.get(current) {
        Some(config) => {
          println("停止背景音乐: \{current}")
          js_stop_audio(config.path)
        }
        None => ()
      }
    }
    None => ()
  }
  
  // 播放新的背景音乐（JS端会自动处理浏览器自动播放限制）
  self.play_sound(event_type)
  self.current_bgm = Some(event_type)
}

///| 停止背景音乐
pub fn AudioManager::stop_bgm(self : Self) -> Unit {
  match self.current_bgm {
    Some(current) => {
      match self.audio_configs.get(current) {
        Some(config) => {
          println("停止背景音乐: \{current}")
          js_stop_audio(config.path)
        }
        None => ()
      }
      self.current_bgm = None
    }
    None => ()
  }
}

///| 切换音效开关
pub fn AudioManager::toggle_sfx(self : Self) -> Unit {
  self.sfx_enabled = not(self.sfx_enabled)
  let status = if self.sfx_enabled { "开启" } else { "关闭" }
  println("音效: \{status}")
}

///| 切换背景音乐开关
pub fn AudioManager::toggle_bgm(self : Self) -> Unit {
  self.bgm_enabled = not(self.bgm_enabled)
  
  if not(self.bgm_enabled) {
    self.stop_bgm()
  } else {
    match self.current_bgm {
      Some(current) => self.play_sound(current)
      None => ()
    }
  }
  
  let status = if self.bgm_enabled { "开启" } else { "关闭" }
  println("背景音乐: \{status}")
}

///| 设置主音量
pub fn AudioManager::set_master_volume(self : Self, volume : Double) -> Unit {
  // 手动实现 clamp
  let clamped = if volume < 0.0 {
    0.0
  } else if volume > 1.0 {
    1.0
  } else {
    volume
  }
  
  self.master_volume = clamped
  println("主音量设置为: \{self.master_volume}")
}
