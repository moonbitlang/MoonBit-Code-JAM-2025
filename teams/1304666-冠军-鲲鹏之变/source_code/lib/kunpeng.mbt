// 鲲鹏之变：游戏核心逻辑
// 基于庄子《逍遥游》中"北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏"的概念

let screen_width = 800
let screen_height = 600

// 鱼的类型枚举 - 基于中国传统鱼类分类
pub enum FishType {
  XIA_MI        // 虾米 - 最小的猎物，鲲苗专用食物
  KUN_MIAO        // 初始形态 - 小鱼苗
  QING_YU        // 普通鱼类
  CAO_YU        // 中型鱼类  
  LI_YU        // 大型鱼类
  JIAO_LONG        // 稀有鱼类
  KUN         // 半鲲状态
  DA_PENG        // 最终形态
} derive(Eq, Show)

// 方向枚举
enum Direction {
  Up
  Down
  Left
  Right
  Stop
}

// 鱼的状态结构
struct Fish {
  mut x : Int
  mut y : Int
  size : Int        // 大小等级 1-7
  speed : Int       // 移动速度
  mut direction : Direction
  mut alive : Bool
  fish_type : FishType  // 鱼的类型
  color : Int          // 颜色编码
}

// 游戏状态
pub struct GameState {
  mut player_fish : Fish
  ai_fishes : Array[Fish]  // AI鱼类
  mut score : Int
  mut level : Int
  mut game_over : Bool
  mut game_win : Bool
  mut evolution_progress : Int  // 进化进度
  mut kun_peng_transformation : Bool  // 鲲鹏变化是否完成
  mut invincible_time : Int  // 无敌时间（帧数）
  mut tick : Int  // 全局帧计数用于AI行为
}

// 创建基础鱼类
fn create_fish(x : Int, y : Int, fish_type : FishType, size : Int) -> Fish {
  let speed = match fish_type {
    XIA_MI => 2      // 虾米移动慢
    KUN_MIAO => 3
    QING_YU => 2
    CAO_YU => 2
    LI_YU => 1
    JIAO_LONG => 1
    KUN => 1
    DA_PENG => 2
  }
  
  let color = match fish_type {
    XIA_MI => 0xFFB6C1    // 浅粉色 - 虾米的颜色
    KUN_MIAO => 0x87CEEB    // 天蓝色
    QING_YU => 0x2E8B57    // 海绿色
    CAO_YU => 0x4682B4    // 钢蓝色
    LI_YU => 0xFFD700    // 金黄色
    JIAO_LONG => 0x8B008B    // 深紫色
    KUN => 0x191970      // 午夜蓝
    DA_PENG => 0xFF4500    // 橙红色
  }
  
  {
    x: x,
    y: y,
    size: size,
    speed: speed,
    direction: Stop,
    alive: true,
    fish_type: fish_type,
    color: color
  }
}

// 创建新游戏状态 - 简化版本，每次只显示3种鱼类
pub fn new() -> GameState {
  let player = create_fish(400, 300, KUN_MIAO, 1)
  let ai_fishes = Array::make(18, create_fish(0, 0, KUN_MIAO, 1))  // 减少到18条鱼，界面更清晰
  
  // 初始化AI鱼类 - 基于玩家当前阶段的3种鱼类生态
  for i = 0; i < 18; i = i + 1 {
    // 玩家初始为鲲苗(1)，创建3种鱼类：虾米(0)、鲲苗(1)、青鱼(2)
    let (fish_type, fish_size) = if i < 6 {
      // 6条虾米：鲲苗的食物（设定为size=0以保证可吞噬）
      (XIA_MI, 0)
    } else if i < 12 {
      // 6条鲲苗：同等级，不能互吃
      (KUN_MIAO, 1)
    } else {
      // 6条青鱼：鲲苗的危险，需要避开
      (QING_YU, 2)
    }
    
    let rand_x = 60 + (i * 40) % 680  // 更合理的分布
    let rand_y = 60 + (i * 30) % 480
    ai_fishes[i] = create_fish(rand_x, rand_y, fish_type, fish_size)
  }
  
  {
    player_fish: player,
    ai_fishes: ai_fishes,
    score: 0,
    level: 1,
    game_over: false,
    game_win: false,
    evolution_progress: 0,
    kun_peng_transformation: false,
    invincible_time: 300,  // 5秒无敌时间（60fps * 5 = 300帧）
    tick: 0
  }
}

// 初始化游戏
pub fn initialize(self : GameState) -> Unit {
  self.player_fish = create_fish(400, 300, KUN_MIAO, 1)
  self.score = 0
  self.level = 1
  self.game_over = false
  self.game_win = false
  self.evolution_progress = 0
  self.kun_peng_transformation = false
  self.invincible_time = 300  // 重置无敌时间为5秒（60fps * 5 = 300帧）
  self.tick = 0
  
  // 重新生成AI鱼类 - 简化版本，保持3种鱼类结构
  for i = 0; i < self.ai_fishes.length(); i = i + 1 {
    // 基于玩家当前阶段，创建3种鱼类
    let player_stage = self.player_fish.fish_type
    let (fish_type, fish_size) = match player_stage {
      KUN_MIAO => {
        // 玩家是鲲苗：虾米(size=0)、鲲苗、青鱼
        if i < 6 {
          (XIA_MI, 0)      // 6条虾米
        } else if i < 12 {
          (KUN_MIAO, 1)    // 6条鲲苗
        } else {
          (QING_YU, 2)     // 6条青鱼
        }
      }
      QING_YU => {
        // 玩家是青鱼：鲲苗、青鱼、草鱼
        if i < 6 {
          (KUN_MIAO, 1)    // 6条鲲苗
        } else if i < 12 {
          (QING_YU, 2)     // 6条青鱼
        } else {
          (CAO_YU, 2)      // 6条草鱼
        }
      }
      CAO_YU => {
        // 玩家是草鱼：青鱼、草鱼、鲤鱼
        if i < 6 {
          (QING_YU, 2)     // 6条青鱼
        } else if i < 12 {
          (CAO_YU, 2)      // 6条草鱼
        } else {
          (LI_YU, 3)       // 6条鲤鱼
        }
      }
      LI_YU => {
        // 玩家是鲤鱼：草鱼、鲤鱼、蛟龙
        if i < 6 {
          (CAO_YU, 2)      // 6条草鱼
        } else if i < 12 {
          (LI_YU, 3)       // 6条鲤鱼
        } else {
          (JIAO_LONG, 3)   // 6条蛟龙
        }
      }
      JIAO_LONG => {
        // 玩家是蛟龙：鲤鱼、蛟龙、鲲
        if i < 6 {
          (LI_YU, 3)       // 6条鲤鱼
        } else if i < 12 {
          (JIAO_LONG, 3)   // 6条蛟龙
        } else {
          (KUN, 4)         // 6条鲲
        }
      }
      KUN => {
        // 玩家是鲲：蛟龙、鲲、大鹏
        if i < 6 {
          (JIAO_LONG, 3)   // 6条蛟龙
        } else if i < 12 {
          (KUN, 4)         // 6条鲲
        } else {
          (DA_PENG, 4)     // 6条大鹏
        }
      }
      DA_PENG => {
        // 玩家是大鹏：鲲、大鹏、以及少量虾米作为装饰
        if i < 6 {
          (KUN, 4)         // 6条鲲
        } else if i < 12 {
          (DA_PENG, 4)     // 6条大鹏
        } else {
          (XIA_MI, 1)      // 6条虾米（装饰性）
        }
      }
      _ => {
        // 默认：虾米、鲲苗、青鱼
        if i < 6 {
          (XIA_MI, 1)
        } else if i < 12 {
          (KUN_MIAO, 1)
        } else {
          (QING_YU, 2)
        }
      }
    }
    
    let rand_x = 60 + (i * 40) % 680
    let rand_y = 60 + (i * 30) % 480
    self.ai_fishes[i] = create_fish(rand_x, rand_y, fish_type, fish_size)
  }
}

// 移动玩家鱼类
pub fn move_player(self : GameState, direction : Direction) -> Unit {
  if self.game_over || self.game_win {
    return
  }
  
  let speed = self.player_fish.speed
  let new_x = self.player_fish.x
  let new_y = self.player_fish.y
  
  match direction {
    Up => {
      self.player_fish.y = if new_y - speed < 0 { 0 } else { new_y - speed }
    }
    Down => {
      self.player_fish.y = if new_y + speed > screen_height - 20 { screen_height - 20 } else { new_y + speed }
    }
    Left => {
      self.player_fish.x = if new_x - speed < 0 { 0 } else { new_x - speed }
    }
    Right => {
      self.player_fish.x = if new_x + speed > screen_width - 20 { screen_width - 20 } else { new_x + speed }
    }
    Stop => ()
  }
  
  self.player_fish.direction = direction
}

// 进化鱼类
fn evolve_fish(fish : Fish) -> Fish {
  let new_type = match fish.fish_type {
    XIA_MI => KUN_MIAO    // 虾米进化为鲲苗
    KUN_MIAO => QING_YU
    QING_YU => CAO_YU
    CAO_YU => LI_YU
    LI_YU => JIAO_LONG
    JIAO_LONG => KUN
    KUN => DA_PENG
    DA_PENG => DA_PENG  // 已达最高形态
  }
  
  let new_size = if fish.size < 7 { fish.size + 1 } else { 7 }
  let new_fish = create_fish(fish.x, fish.y, new_type, new_size)
  new_fish
}

// 检查两个鱼类是否可以吞噬
// 规则：只能吞噬比自己小1级以上的鱼类 => predator.size > prey.size
fn can_eat(predator : Fish, prey : Fish) -> Bool {
  predator.size > prey.size && predator.alive && prey.alive
}

// 计算距离
fn distance(x1 : Int, y1 : Int, x2 : Int, y2 : Int) -> Int {
  let dx = if x1 > x2 { x1 - x2 } else { x2 - x1 }
  let dy = if y1 > y2 { y1 - y2 } else { y2 - y1 }
  dx + dy
}

// 更新AI鱼类
fn update_ai_fish(self : GameState) -> Unit {
  for i = 0; i < self.ai_fishes.length(); i = i + 1 {
    let fish = self.ai_fishes[i]
    if not(fish.alive) {
      continue
    }
    
    // 简单的AI移动逻辑：基于tick定期改变方向
    // 每隔30帧基于索引产生一个确定性的新方向，避免卡死
    let new_dir = ((self.tick / 30) + i) % 4
    
    let dir = match new_dir {
      0 => Up
      1 => Right
      2 => Down
      _ => Left
    }
    
    let speed = fish.speed
    match dir {
      Up => {
        fish.y = if fish.y - speed < 0 { screen_height - 20 } else { fish.y - speed }
      }
      Down => {
        fish.y = if fish.y + speed > screen_height - 20 { 0 } else { fish.y + speed }
      }
      Left => {
        fish.x = if fish.x - speed < 0 { screen_width - 20 } else { fish.x - speed }
      }
      Right => {
        fish.x = if fish.x + speed > screen_width - 20 { 0 } else { fish.x + speed }
      }
      Stop => ()
    }
    
    fish.direction = dir
  }
}

// 检查吞噬
fn check_eating(self : GameState) -> Unit {
  for i = 0; i < self.ai_fishes.length(); i = i + 1 {
    let ai_fish = self.ai_fishes[i]
    if not(ai_fish.alive) {
      continue
    }
    
    // 检查玩家是否可以吞噬AI鱼
    if can_eat(self.player_fish, ai_fish) {
      let dist = distance(self.player_fish.x, self.player_fish.y, ai_fish.x, ai_fish.y)
      if dist < 30 {
        ai_fish.alive = false
        self.score = self.score + (ai_fish.size * 10)
        self.evolution_progress = self.evolution_progress + 1
        
        // 检查是否可以进化
        if self.evolution_progress >= 5 && self.player_fish.size < 7 {
          self.player_fish = evolve_fish(self.player_fish)
          self.evolution_progress = 0
          
          // 检查是否完成鲲鹏变化
          if self.player_fish.fish_type == DA_PENG {
            self.kun_peng_transformation = true
          }
        }
      }
    }
    
    // 检查AI鱼是否可以吞噬玩家（危险！）- 考虑无敌时间
    if can_eat(ai_fish, self.player_fish) && self.invincible_time <= 0 {
      let dist = distance(ai_fish.x, ai_fish.y, self.player_fish.x, self.player_fish.y)
      if dist < 30 {
        self.game_over = true
        return
      }
    }
  }
}

// 生成新的AI鱼类
fn spawn_new_fish(self : GameState) -> Unit {
  // 检查是否有死亡的鱼类需要重生
  for i = 0; i < self.ai_fishes.length(); i = i + 1 {
    if not(self.ai_fishes[i].alive) {
      let rand_x = (i * 50 + 100) % screen_width
      let rand_y = (i * 40 + 50) % screen_height
      
      // 根据当前阶段严格生成3种鱼类（每次只显示3种）
      let player_stage = self.player_fish.fish_type
      let (fish_type, fish_size) = match player_stage {
        KUN_MIAO => {
          // 虾米(size=0)、鲲苗、青鱼
          if i % 3 == 0 { (XIA_MI, 0) }
          else if i % 3 == 1 { (KUN_MIAO, 1) }
          else { (QING_YU, 2) }
        }
        QING_YU => {
          // 鲲苗、青鱼、草鱼
          if i % 3 == 0 { (KUN_MIAO, 1) }
          else if i % 3 == 1 { (QING_YU, 2) }
          else { (CAO_YU, 2) }
        }
        CAO_YU => {
          // 青鱼、草鱼、鲤鱼
          if i % 3 == 0 { (QING_YU, 2) }
          else if i % 3 == 1 { (CAO_YU, 2) }
          else { (LI_YU, 3) }
        }
        LI_YU => {
          // 草鱼、鲤鱼、蛟龙
          if i % 3 == 0 { (CAO_YU, 2) }
          else if i % 3 == 1 { (LI_YU, 3) }
          else { (JIAO_LONG, 3) }
        }
        JIAO_LONG => {
          // 鲤鱼、蛟龙、鲲
          if i % 3 == 0 { (LI_YU, 3) }
          else if i % 3 == 1 { (JIAO_LONG, 3) }
          else { (KUN, 4) }
        }
        KUN => {
          // 蛟龙、鲲、大鹏
          if i % 3 == 0 { (JIAO_LONG, 3) }
          else if i % 3 == 1 { (KUN, 4) }
          else { (DA_PENG, 4) }
        }
        DA_PENG => {
          // 鲲、大鹏、虾米（装饰性）
          if i % 3 == 0 { (KUN, 4) }
          else if i % 3 == 1 { (DA_PENG, 4) }
          else { (XIA_MI, 0) }
        }
        _ => {
          // 默认：虾米(size=0)、鲲苗、青鱼
          if i % 3 == 0 { (XIA_MI, 0) }
          else if i % 3 == 1 { (KUN_MIAO, 1) }
          else { (QING_YU, 2) }
        }
      }
      
      self.ai_fishes[i] = create_fish(rand_x, rand_y, fish_type, fish_size)
    }
  }
}

// 更新游戏状态
pub fn update_game(self : GameState) -> Int {
  if self.game_over {
    return 0  // 游戏失败
  }
  
  if self.game_win {
    return 2  // 游戏胜利
  }
  
  // 帧计数推进
  self.tick = self.tick + 1

  // 减少无敌时间
  if self.invincible_time > 0 {
    self.invincible_time = self.invincible_time - 1
  }
  
  // 更新AI鱼类
  GameState::update_ai_fish(self)
  
  // 检查吞噬
  GameState::check_eating(self)
  
  // 生成新鱼类
  GameState::spawn_new_fish(self)
  
  // 同步关卡等级到玩家大小，便于UI显示
  self.level = self.player_fish.size

  // 检查胜利条件：完成鲲鹏变化并保持一段时间
  if self.kun_peng_transformation {
    self.game_win = true
    return 2
  }
  
  1  // 游戏继续
}

// 获取玩家位置
pub fn get_player_pos(self : GameState) -> Int {
  (self.player_fish.x << 16) | self.player_fish.y
}

// 获取玩家信息
pub fn get_player_info(self : GameState) -> Int {
  (self.player_fish.size << 24) | (fish_type_to_int(self.player_fish.fish_type) << 16) | self.score
}

// 获取AI鱼类信息
pub fn get_ai_fish_info(self : GameState, index : Int) -> Int {
  if index >= self.ai_fishes.length() {
    return -1
  }
  let fish = self.ai_fishes[index]
  if not(fish.alive) {
    return -1
  }
  (fish.x << 16) | fish.y
}

// 获取AI鱼类详情
pub fn get_ai_fish_details(self : GameState, index : Int) -> Int {
  if index >= self.ai_fishes.length() {
    return -1
  }
  let fish = self.ai_fishes[index]
  if not(fish.alive) {
    return -1
  }
  (fish.size << 24) | (fish_type_to_int(fish.fish_type) << 16) | fish.color
}

// 获取游戏状态
pub fn get_game_status(self : GameState) -> Int {
  let transformation_flag = if self.kun_peng_transformation { 1 } else { 0 }
  let invincible_flag = if self.invincible_time > 0 { 1 } else { 0 }
  (self.level << 16) | (transformation_flag << 8) | (invincible_flag << 7) | self.evolution_progress
}

// 获取无敌时间
pub fn get_invincible_time(self : GameState) -> Int {
  self.invincible_time
}

// FishType 转换为整数
fn fish_type_to_int(fish_type : FishType) -> Int {
  match fish_type {
    XIA_MI => 0      // 虾米
    KUN_MIAO => 1
    QING_YU => 2
    CAO_YU => 3
    LI_YU => 4
    JIAO_LONG => 5
    KUN => 6
    DA_PENG => 7
  }
}

// 全局游戏状态
let global_state : GameState = new()

// WASM导出函数 - 初始化游戏
pub fn init_game() -> Unit {
  GameState::initialize(global_state)
}

// WASM导出函数 - 移动玩家
pub fn move_player_wasm(direction : Int) -> Unit {
  let dir = match direction {
    0 => Up
    1 => Right  
    2 => Down
    3 => Left
    _ => Stop
  }
  GameState::move_player(global_state, dir)
}

// WASM导出函数 - 更新游戏
pub fn update_game_wasm() -> Int {
  GameState::update_game(global_state)
}

// WASM导出函数 - 获取玩家位置
pub fn get_player_pos_wasm() -> Int {
  GameState::get_player_pos(global_state)
}

// WASM导出函数 - 获取玩家信息
pub fn get_player_info_wasm() -> Int {
  GameState::get_player_info(global_state)
}

// WASM导出函数 - 获取AI鱼类信息
pub fn get_ai_fish_info_wasm(index : Int) -> Int {
  GameState::get_ai_fish_info(global_state, index)
}

// WASM导出函数 - 获取AI鱼类详情
pub fn get_ai_fish_details_wasm(index : Int) -> Int {
  GameState::get_ai_fish_details(global_state, index)
}

// WASM导出函数 - 获取游戏状态
pub fn get_game_status_wasm() -> Int {
  GameState::get_game_status(global_state)
}

// WASM导出函数 - 获取无敌时间
pub fn get_invincible_time_wasm() -> Int {
  GameState::get_invincible_time(global_state)
}
