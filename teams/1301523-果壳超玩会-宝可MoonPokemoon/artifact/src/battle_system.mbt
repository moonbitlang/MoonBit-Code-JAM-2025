// Copyright 2025 International Digital Economy Academy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

///|
// Battle System - 整合所有战斗相关功能
// 包含：战斗渲染、输入处理、状态管理、场景生成、菜单配置、布局

///|
// ===== 战斗系统常量 =====
const BATTLE_SCREEN_WIDTH : Double = 800.0
const BATTLE_SCREEN_HEIGHT : Double = 600.0
const POKEMON_SIZE : Double = 200.0
const UI_PANEL_HEIGHT : Double = 150.0

// 新增常量
const BATTLE_ARENA_HEIGHT : Double = 450.0  // 战斗区域高度
const PLATFORM_WIDTH : Double = 120.0       // 平台宽度
const PLATFORM_HEIGHT : Double = 60.0       // 平台高度

// 输入防抖常量
const SKILL_INPUT_COOLDOWN : Double = 0.3  // 300ms防抖
const SKILL_INPUT_COOLDOWN_FRAMES : Int = 18  // 约300ms防抖 (60fps * 0.3s = 18帧)

///|
// ===== 战斗状态结构 =====

///|
// 战斗渲染状态
pub struct BattleRenderState {
  player_pokemon_entity : @system.Entity
  enemy_pokemon_entity : @system.Entity
  background_entity : @system.Entity
  ui_panel_entity : @system.Entity
  text_box_entity : @system.Entity
  text_entity : @system.Entity
  menu_entity : @system.Entity
  mut selected_option : MenuOption
  is_active : Bool
  current_selection_entity : @system.Entity
  mut skill_menu_visible : Bool
  mut skill_menu_selected : Int
  mut current_player_pokemon : Option[Pokemon]
  mut current_enemy_pokemon : Option[Pokemon]
  mut battle_state : Option[BattleState]
  mut player_pokemon_info : Option[PokemonInfoEntities]
  mut enemy_pokemon_info : Option[PokemonInfoEntities]
  // 添加计数器字段
  mut current_frame_count: Int
  mut last_skill_input_frame: Int
} derive(Show)

///|
// 战斗菜单配置
struct BattleMenuConfig {
  // 主战斗菜单配置
  main_menu : MainMenuConfig
  
  // 技能菜单配置
  skill_menu : SkillMenuConfig
  
  // 屏幕尺寸配置
  screen : ScreenConfig
  
  // 布局配置
  layout : LayoutConfig
}

///|
// 主战斗菜单配置
struct MainMenuConfig {
  // 基础属性
  visible : Bool
  selected_index : Int
  selected_option : MenuOption
  
  // 几何属性
  mut position : @math.Vec2D
  mut width : Double
  mut height : Double
  
  // 样式配置
  background_color : String
  border_color : String
  text_color : String
  indicator_color : String
  
  // 按钮配置
  button_spacing : Double
  button_height : Double
  button_padding : Double
}

///|
// 技能菜单配置
struct SkillMenuConfig {
  // 基础属性
  visible : Bool
  selected_index : Int
  
  // 几何属性
  mut position : @math.Vec2D
  mut width : Double
  mut height : Double
  
  // 样式配置
  background_color : String
  border_color : String
  text_color : String
  indicator_color : String
  title_color : String
  
  // 技能项配置
  skill_spacing : Double
  skill_height : Double
  skill_padding : Double
  title_height : Double
}

///|
// 屏幕配置
struct ScreenConfig {
  width : Double
  height : Double
  title_height : Double
  prompt_height : Double
}

///|
// 布局配置
struct LayoutConfig {
  // 边距和间距
  margin : Double
  padding : Double
  
  // 区域尺寸
  enemy_area_width : Double
  enemy_area_height : Double
  player_area_width : Double
  player_area_height : Double
  menu_area_width : Double
  menu_area_height : Double
  status_area_width : Double
  status_area_height : Double
  
  // 位置偏移
  title_offset_y : Double
  enemy_offset_y : Double
  player_offset_y : Double
  menu_offset_y : Double
  status_offset_y : Double
}

///|
// 菜单选项枚举
pub enum MenuOption {
  Fight
  Bag
  Pokemon
  Run
} derive(Show, Eq)

///|
// 输入类型枚举
enum InputType {
  Keyboard
  Mouse
  Touch
  Gamepad
} derive(Show)

///|
// 按键状态
enum KeyState {
  Pressed
  Released
  Held
  None
} derive(Eq)

///|
// 鼠标按钮
enum MouseButton {
  Left
  Right
  Middle
} derive(Eq, Hash, Show)

///|
// 触摸手势
enum TouchGesture {
  Tap
  DoubleTap
  LongPress
  Swipe
  Pinch
} derive(Show)

///|
// 输入事件结构
struct InputEvent {
  input_type: InputType
  key: String
  position: @math.Vec2D
  timestamp: Double
  data: Map[String, String]
}

///|
// 输入处理器
struct BattleInputHandler {
  mut is_enabled: Bool
  key_states: Map[String, KeyState]
  mut mouse_position: @math.Vec2D
  mouse_buttons: Map[MouseButton, Bool]
  
  // 事件队列
  event_queue: Array[InputEvent]
  
  // 回调函数
  mut on_key_press: Option[(String) -> Unit]
  on_key_release: Option[(String) -> Unit]
  mut on_mouse_click: Option[(String) -> Unit]
  on_mouse_move: Option[(String) -> Unit]
  on_touch_gesture: Option[(String) -> Unit]
}

///|
// ===== 全局实例 =====

///|
// 全局战斗渲染状态
let battle_render_state : BattleRenderState = BattleRenderState::{
  player_pokemon_entity: @system.Entity::new(),
  enemy_pokemon_entity: @system.Entity::new(),
  background_entity: @system.Entity::new(),
  ui_panel_entity: @system.Entity::new(),
  text_box_entity: @system.Entity::new(),
  text_entity: @system.Entity::new(),
  menu_entity: @system.Entity::new(),
  selected_option: MenuOption::Fight,
  is_active: false,
  current_selection_entity: @system.Entity::new(),
  skill_menu_visible: false,
  skill_menu_selected: 0,
  current_player_pokemon: None,
  current_enemy_pokemon: None,
  battle_state: None,
  player_pokemon_info: None,
  enemy_pokemon_info: None,
  current_frame_count: 0,
  last_skill_input_frame: 0
}

///|
// 全局指示器实体
let global_indicator_entity : @system.Entity = @system.Entity::new()
///|
// 全局战斗菜单配置实例
let battle_menu_config : BattleMenuConfig = {
  // 主菜单配置
  main_menu: MainMenuConfig::{
    visible: false,
    selected_index: 0,
    selected_option: Fight,
    position: @math.Vec2D(50.0, 450.0),
    width: 170.0,
    height: 115.0,
    background_color: "#1a1a1a",
    border_color: "#4ECDC4",
    text_color: "#FFFFFF",
    indicator_color: "#4ECDC4",
    button_spacing: 25.0,
    button_height: 20.0,
    button_padding: 10.0
  },
  
  // 技能菜单配置
  skill_menu: SkillMenuConfig::{
    visible: false,
    selected_index: 0,
    position: @math.Vec2D(250.0, 450.0),
    width: 220.0,
    height: 200.0,
    background_color: "#1a1a1a",
    border_color: "#4ECDC4",
    text_color: "#FFFFFF",
    indicator_color: "#4ECDC4",
    title_color: "#FFFFFF",
    skill_spacing: 30.0,
    skill_height: 25.0,
    skill_padding: 25.0,
    title_height: 20.0
  },
  
  // 屏幕配置
  screen: ScreenConfig::{
    width: 800.0,
    height: 600.0,
    title_height: 32.0,
    prompt_height: 18.0
  },
  
  // 布局配置
  layout: LayoutConfig::{
    margin: 20.0,
    padding: 15.0,
    enemy_area_width: 120.0,
    enemy_area_height: 100.0,
    player_area_width: 120.0,
    player_area_height: 100.0,
    menu_area_width: 200.0,
    menu_area_height: 120.0,
    status_area_width: 100.0,
    status_area_height: 80.0,
    title_offset_y: 20.0,
    enemy_offset_y: 50.0,
    player_offset_y: 50.0,
    menu_offset_y: 170.0,
    status_offset_y: 170.0
  }
}

///|
// 全局输入处理器实例
let input_handler: BattleInputHandler = {
  is_enabled: true,
  key_states: Map::new(),
  mouse_position: @math.Vec2D(0.0, 0.0),
  mouse_buttons: Map::new(),
  event_queue: Array::new(),
  on_key_press: None,
  on_key_release: None,
  on_mouse_click: None,
  on_mouse_move: None,
  on_touch_gesture: None,
}

///|
// ===== 战斗渲染功能 =====

///|
// 获取当前选择
fn get_current_selection() -> MenuOption {
  battle_render_state.selected_option
}

///|
// 更新指示器位置
fn update_indicator_position(selection : MenuOption) -> Unit {
  // 按钮位置（基于battle_render.mbt中的实际位置）：
  // 战斗: (550, 485) - 左上
  // 背包: (670, 485) - 右上  
  // 宝可梦: (550, 520) - 左下
  // 逃跑: (670, 520) - 右下
  
  // 箭头应该放在按钮左侧，稍微偏左一点
  let indicator_pos = match selection {
    MenuOption::Fight => @math.Vec2D(530.0, 485.0)    // 战斗按钮左侧
    MenuOption::Bag => @math.Vec2D(650.0, 485.0)     // 背包按钮左侧
    MenuOption::Pokemon => @math.Vec2D(530.0, 520.0)  // 宝可梦按钮左侧
    MenuOption::Run => @math.Vec2D(650.0, 520.0)      // 逃跑按钮左侧
  }
  
  // 更新指示器位置
  @position.positions.set(global_indicator_entity, indicator_pos)
  
  // 如果指示器还没有精灵，创建一个
  if @sprite.sprites.get(global_indicator_entity) is None {
    let indicator_sprite = @sprite.Sprite::from_text(
      @sprite.Text::new(
        "▶",
        color="#FFFF00",
        font="16px Arial"
      ),
      13
    )
    @sprite.sprites.set(global_indicator_entity, indicator_sprite)
  }
  
  // 更新全局状态
  battle_render_state.selected_option = selection
  
  println("🎯 箭头位置更新: (" + indicator_pos.0.to_string() + ", " + indicator_pos.1.to_string() + ") - " + selection.to_string())
}

///|
// 初始化全局状态
fn init_global_state() -> Unit {
  println("🌍 初始化全局状态...")
  
  // 创建初始指示器
  let indicator_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "▶",
      color="#FFFF00",
      font="16px Arial"
    ),
    13
  )
  @sprite.sprites.set(global_indicator_entity, indicator_sprite)
  @position.positions.set(global_indicator_entity, @math.Vec2D(530.0, 485.0))
  
  // 设置初始选择
  battle_render_state.selected_option = MenuOption::Fight
  
  println("✅ 全局状态初始化完成")
  println("🎯 初始箭头位置: (530, 485) - 战斗按钮左侧")
}

///|
// 初始化战斗渲染系统
pub fn init_battle_render_system() -> Unit {
  println("🎨 初始化战斗渲染系统...")
  
  // 预加载所有宝可梦图片
  // 注意：这里需要传入backend参数，可能需要修改函数签名
  // preload_all_pokemon_sprites(backend)
  
  // 初始化全局状态
  init_global_state()
  
  // 创建背景
  create_battle_background()
  
  // 创建UI面板
  create_ui_panel()
  
  // 创建文本框
  create_text_box()
  
  // 创建菜单
  create_battle_menu()
  
  println("✅ 战斗渲染系统初始化完成")
}

///|
// 创建战斗背景
fn create_battle_background() -> Unit {
  let entity = battle_render_state.background_entity
  
  // 创建浅绿色网格背景
  let background_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(BATTLE_SCREEN_WIDTH, BATTLE_ARENA_HEIGHT),
      "#90EE90"  // 浅绿色
    ),
    0  // 最底层
  )
  @sprite.sprites.set(entity, background_sprite)
  @position.positions.set(entity, @math.Vec2D(0.0, 0.0))
  
  // 添加网格图案
  add_grid_pattern()
  
  // 添加深绿色平台
  add_battle_platforms()
}

///|
// 添加网格图案
fn add_grid_pattern() -> Unit {
  // 创建网格线
  let grid_size = 20.0
  let mut x = 0.0
  while x < BATTLE_SCREEN_WIDTH {
    let grid_line = @system.Entity::new()
    let line_sprite = @sprite.Sprite::from_color_rect(
      @sprite.ColorRect::new(
        @math.Vec2D(1.0, BATTLE_ARENA_HEIGHT),
        "#7FCC7F"  // 稍深的绿色
      ),
      1
    )
    @sprite.sprites.set(grid_line, line_sprite)
    @position.positions.set(grid_line, @math.Vec2D(x, 0.0))
    x = x + grid_size
  }
  
  let mut y = 0.0
  while y < BATTLE_ARENA_HEIGHT {
    let grid_line = @system.Entity::new()
    let line_sprite = @sprite.Sprite::from_color_rect(
      @sprite.ColorRect::new(
        @math.Vec2D(BATTLE_SCREEN_WIDTH, 1.0),
        "#7FCC7F"  // 稍深的绿色
      ),
      1
    )
    @sprite.sprites.set(grid_line, line_sprite)
    @position.positions.set(grid_line, @math.Vec2D(0.0, y))
    y = y + grid_size
  }
}

///|
// 添加战斗平台
fn add_battle_platforms() -> Unit {
  // // 玩家平台（左下角）
  // let player_platform = @system.Entity::new()
  // let player_platform_sprite = @sprite.Sprite::from_color_rect(
  //   @sprite.ColorRect::new(
  //     @math.Vec2D(PLATFORM_WIDTH, PLATFORM_HEIGHT),
  //     "#228B22"  // 深绿色
  //   ),
  //   2
  // )
  // @sprite.sprites.set(player_platform, player_platform_sprite)
  // @position.positions.set(player_platform, @math.Vec2D(50.0, BATTLE_ARENA_HEIGHT - PLATFORM_HEIGHT - 50.0))
  
  // // 对手平台（右上角）
  // let enemy_platform = @system.Entity::new()
  // let enemy_platform_sprite = @sprite.Sprite::from_color_rect(
  //   @sprite.ColorRect::new(
  //     @math.Vec2D(PLATFORM_WIDTH, PLATFORM_HEIGHT),
  //     "#228B22"  // 深绿色
  //   ),
  //   2
  // )
  // @sprite.sprites.set(enemy_platform, enemy_platform_sprite)
  // @position.positions.set(enemy_platform, @math.Vec2D(BATTLE_SCREEN_WIDTH - PLATFORM_WIDTH - 50.0, 50.0))

//todo: currently, the enemy and player are not rendered. we need to fix this in the future.
}

///|
// 创建UI面板
fn create_ui_panel() -> Unit {
  let entity = battle_render_state.ui_panel_entity
  
  // 创建底部UI面板
  let panel_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(BATTLE_SCREEN_WIDTH, UI_PANEL_HEIGHT),
      "#2E2E2E"  // 深灰色
    ),
    10  // UI层
  )
  @sprite.sprites.set(entity, panel_sprite)
  @position.positions.set(entity, @math.Vec2D(0.0, BATTLE_ARENA_HEIGHT))
  
  // 添加边框
  add_ui_border()
}

///|
// 添加UI边框
fn add_ui_border() -> Unit {
  // 顶部边框
  let top_border = @system.Entity::new()
  let top_border_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(BATTLE_SCREEN_WIDTH, 3.0),
      "#FFFFFF"  // 白色边框
    ),
    11
  )
  @sprite.sprites.set(top_border, top_border_sprite)
  @position.positions.set(top_border, @math.Vec2D(0.0, BATTLE_ARENA_HEIGHT))
}

///|
// 创建文本框
fn create_text_box() -> Unit {
  let entity = battle_render_state.text_box_entity
  
  // 创建深蓝色文本框背景
  let text_bg_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(400.0, 80.0),
      "#1E3A8A"  // 深蓝色
    ),
    11  // 文本层
  )
  @sprite.sprites.set(entity, text_bg_sprite)
  @position.positions.set(entity, @math.Vec2D(20.0, BATTLE_ARENA_HEIGHT + 20.0))
  
  // 添加文本 - 使用默认文本，稍后更新
  let text_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "想要宝可梦做什么?",
      color="#FFFFFF",
      font="18px Arial"
    ),
    12
  )
  let text_entity = battle_render_state.text_entity
  @sprite.sprites.set(text_entity, text_sprite)
  @position.positions.set(text_entity, @math.Vec2D(30.0, BATTLE_ARENA_HEIGHT + 35.0))
}

///|
// 创建战斗菜单
fn create_battle_menu() -> Unit {
  let entity = battle_render_state.menu_entity
  
  // 创建浅蓝色菜单背景
  let menu_bg_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(240.0, 100.0),
      "#3B82F6"  // 浅蓝色
    ),
    11
  )
  @sprite.sprites.set(entity, menu_bg_sprite)
  @position.positions.set(entity, @math.Vec2D(BATTLE_SCREEN_WIDTH - 260.0, BATTLE_ARENA_HEIGHT + 20.0))
  
  // 添加菜单选项
  create_menu_options()
}

///|
// 创建菜单选项
fn create_menu_options() -> Unit {
  // 创建战斗选项
  let battle_entity = @system.Entity::new()
  let battle_text = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "战斗",
      color="#FFFFFF",
      font="16px Arial"
    ),
    12
  )
  @sprite.sprites.set(battle_entity, battle_text)
  let battle_pos = @math.Vec2D(BATTLE_SCREEN_WIDTH - 250.0, BATTLE_ARENA_HEIGHT + 35.0)
  @position.positions.set(battle_entity, battle_pos)
  
  // 创建背包选项
  let bag_entity = @system.Entity::new()
  let bag_text = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "背包",
      color="#FFFFFF",
      font="16px Arial"
    ),
    12
  )
  @sprite.sprites.set(bag_entity, bag_text)
  let bag_pos = @math.Vec2D(BATTLE_SCREEN_WIDTH - 130.0, BATTLE_ARENA_HEIGHT + 35.0)
  @position.positions.set(bag_entity, bag_pos)
  
  // 创建宝可梦选项
  let pokemon_entity = @system.Entity::new()
  let pokemon_text = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "宝可梦",
      color="#FFFFFF",
      font="16px Arial"
    ),
    12
  )
  @sprite.sprites.set(pokemon_entity, pokemon_text)
  let pokemon_pos = @math.Vec2D(BATTLE_SCREEN_WIDTH - 250.0, BATTLE_ARENA_HEIGHT + 70.0)
  @position.positions.set(pokemon_entity, pokemon_pos)
  
  // 创建逃跑选项
  let run_entity = @system.Entity::new()
  let run_text = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "逃跑",
      color="#FFFFFF",
      font="16px Arial"
    ),
    12
  )
  @sprite.sprites.set(run_entity, run_text)
  let run_pos = @math.Vec2D(BATTLE_SCREEN_WIDTH - 130.0, BATTLE_ARENA_HEIGHT + 70.0)
  @position.positions.set(run_entity, run_pos)
  
  // 创建选中指示器（黑色箭头）
  create_menu_selector()
}

///|
// 创建菜单选中指示器
fn create_menu_selector() -> Unit {
  let selector_entity = @system.Entity::new()
  let selector_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "▶",
      color="#000000",  // 黑色箭头
      font="16px Arial"
    ),
    13
  )
  @sprite.sprites.set(selector_entity, selector_sprite)
  // 默认指向第一个选项（战斗）
  @position.positions.set(selector_entity, @math.Vec2D(BATTLE_SCREEN_WIDTH - 270.0, BATTLE_ARENA_HEIGHT + 35.0))
}

///|
// ===== 战斗输入处理功能 =====

///|
// 更新帧计数器
fn update_frame_counter() -> Unit {
  battle_render_state.current_frame_count = battle_render_state.current_frame_count + 1
}

///|
// 获取当前帧数
fn get_current_frame_count() -> Int {
  battle_render_state.current_frame_count
}

///|
// 处理键盘输入
pub fn handle_battle_input() -> Unit {
  // 如果技能菜单可见，处理技能菜单的输入
  if battle_render_state.skill_menu_visible {
    handle_skill_menu_input()
  } else {
    // 否则处理主菜单的输入
    if @system.is_pressed(@system.ArrowUp) {
      move_selection_up()
    }
    
    if @system.is_pressed(@system.ArrowDown) {
      move_selection_down()
    }
    
    if @system.is_pressed(@system.ArrowLeft) {
      move_selection_left()
    }
    
    if @system.is_pressed(@system.ArrowRight) {
      move_selection_right()
    }
    
    if @system.is_pressed(@system.Enter) {
      select_current_option()
    }
  }
}

///|
// 向左移动选择 (Fight ← Bag, Pokemon ← Run)
fn move_selection_left() -> Unit {
  let new_option = match get_current_selection() {
    MenuOption::Fight => MenuOption::Fight    // 左边界，不能向左
    MenuOption::Bag => MenuOption::Fight      // Bag → Fight
    MenuOption::Pokemon => MenuOption::Pokemon // 左边界，不能向左
    MenuOption::Run => MenuOption::Pokemon    // Run → Pokemon
  }
  
  // 更新指示器位置
  update_indicator_position(new_option)
  println("⬅️ 选择: 向左移动")
}

///|
// 向右移动选择 (Fight → Bag, Pokemon → Run)
fn move_selection_right() -> Unit {
  let new_option = match get_current_selection() {
    MenuOption::Fight => MenuOption::Bag      // Fight → Bag
    MenuOption::Bag => MenuOption::Bag        // 右边界，不能向右
    MenuOption::Pokemon => MenuOption::Run    // Pokemon → Run
    MenuOption::Run => MenuOption::Run        // 右边界，不能向右
  }
  
  // 更新指示器位置
  update_indicator_position(new_option)
  println("➡️ 选择: 向右移动")
}

///|
// 向上移动选择 (Fight ←→ Pokemon, Bag ←→ Run)
fn move_selection_up() -> Unit {
  let new_option = match get_current_selection() {
    MenuOption::Fight => MenuOption::Fight    // 上边界，不能向上
    MenuOption::Bag => MenuOption::Bag        // 上边界，不能向上
    MenuOption::Pokemon => MenuOption::Fight   // Pokemon → Fight
    MenuOption::Run => MenuOption::Bag        // Run → Bag
  }
  
  // 更新指示器位置
  update_indicator_position(new_option)
  println("⬆️ 选择: 向上移动")
}

///|
// 向下移动选择 (Fight ←→ Pokemon, Bag ←→ Run)
fn move_selection_down() -> Unit {
  let new_option = match get_current_selection() {
    MenuOption::Fight => MenuOption::Pokemon  // Fight → Pokemon
    MenuOption::Bag => MenuOption::Run         // Bag → Run
    MenuOption::Pokemon => MenuOption::Pokemon // 下边界，不能向下
    MenuOption::Run => MenuOption::Run         // 下边界，不能向下
  }
  
  // 更新指示器位置
  update_indicator_position(new_option)
  println("⬇️ 选择: 向下移动")
}

///|
// 选择当前选项
fn select_current_option() -> Unit {
  let action = match get_current_selection() {
    MenuOption::Fight => {
      // 选择战斗时，打开技能菜单
      if !battle_render_state.skill_menu_visible {
        battle_render_state.skill_menu_visible = true
        battle_render_state.skill_menu_selected = 0
        show_skill_menu_ui()
        "选择技能"
      } else {
        "技能菜单已打开"
      }
    }
    MenuOption::Bag => "打开背包"
    MenuOption::Pokemon => "查看宝可梦"
    MenuOption::Run => "尝试逃跑"
  }
  println("✅ " + action)
  
  // 更新文本框
  update_text_box(action)
}

///|
// 更新文本框
fn update_text_box(text : String) -> Unit {
  let text_entity = battle_render_state.text_entity
  let text_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(
      text,
      color="#FFFFFF",
      font="18px Arial"
    ),
    12
  )
  @sprite.sprites.set(text_entity, text_sprite)
  @position.positions.set(text_entity, @math.Vec2D(30.0, BATTLE_ARENA_HEIGHT + 35.0))
}

///|
// ===== 战斗状态管理功能 =====

///|
// 获取宝可梦状态摘要
pub fn get_pokemon_status_summary(pokemon : Pokemon) -> String {
  let hp_percent = (pokemon.hp.to_double() / pokemon.max_hp.to_double()) * 100.0
  let status = if pokemon.hp <= 0 {
    "FAINTED"
  } else if hp_percent <= 25.0 {
    "CRITICAL"
  } else if hp_percent <= 50.0 {
    "LOW"
  } else if hp_percent <= 75.0 {
    "MODERATE"
  } else {
    "GOOD"
  }
  
  pokemon.name + " (Lv." + pokemon.level.to_string() + ") - " + 
  pokemon.hp.to_string() + "/" + pokemon.max_hp.to_string() + " HP (" + 
  hp_percent.to_string() + "%) - " + status
}

///|
// 获取战斗日志
pub fn get_formatted_battle_log(battle_state : BattleState) -> String {
  let mut formatted_log = ""
  let mut turn_count = 0
  
  for entry in battle_state.battle_log {
    if entry.contains("Turn") && entry.contains("completed") {
      turn_count = turn_count + 1
      formatted_log = formatted_log + "--- Turn " + turn_count.to_string() + " ---\n"
    } else {
      formatted_log = formatted_log + entry + "\n"
    }
  }
  
  formatted_log
}

///|
// 检查宝可梦是否可以使用特定技能
pub fn can_use_move(pokemon : Pokemon, move_name : String) -> Bool {
  // 检查宝可梦是否有该技能
  let mut has_move = false
  for move_name_check in pokemon.moves {
    if move_name_check == move_name {
      has_move = true
      break
    }
  }
  
  // 检查宝可梦是否没有晕倒
  let not_fainted = pokemon.hp > 0
  
  has_move && not_fainted
}

///|
// 获取战斗统计
pub fn get_battle_statistics(battle_state : BattleState) -> String {
  match (battle_state.player_pokemon, battle_state.enemy_pokemon) {
    (Some(player), Some(enemy)) => {
      let player_hp_percent = (player.hp.to_double() / player.max_hp.to_double()) * 100.0
      let enemy_hp_percent = (enemy.hp.to_double() / enemy.max_hp.to_double()) * 100.0
      
      "Battle Statistics:\n" +
  "Turn: " + battle_state.turn.to_string() + "\n" +
      "Player: " + player.name + " (HP: " + player_hp_percent.to_string() + "%)\n" +
      "Enemy: " + enemy.name + " (HP: " + enemy_hp_percent.to_string() + "%)\n" +
  "Log entries: " + battle_state.battle_log.length().to_string() + "\n" +
  "Status: " + (if battle_state.is_active { "Active" } else { "Ended" })
    }
    _ => "Battle not properly initialized"
  }
}

///|
// 计算伤害 - 使用标准宝可梦伤害公式
pub fn calculate_damage(attacker : Pokemon, defender : Pokemon, skill : Move) -> Int {
  // 标准宝可梦伤害公式：
  // Damage = (((((2 * Level) / 5 + 2) * Power * Attack / Defense) / 50) + 2) * Modifier
  
  let level = attacker.level
  let power = skill.power
  let attack = attacker.attack
  let defense = defender.defense
  
  // 计算基础伤害部分：((2 * Level) / 5 + 2) * Power * Attack / Defense
  let level_factor = (2 * level) / 5 + 2
  let base_damage = (level_factor * power * attack) / defense
  
  // 除以50并加2
  let damage_before_modifier = base_damage / 50 + 2
  
  // 应用类型克制修正器
  let modifier = get_type_effectiveness_multiplier(skill.element_type, defender.types)
  let final_damage = (damage_before_modifier.to_double() * modifier).to_int()
  
  // 确保伤害至少为1
  if final_damage < 1 { 1 } else { final_damage }
}

///|
// 应用技能效果（简化版本）
pub fn apply_move_effect_simple(base_damage : Int, move_type : String) -> Int {
  // 简化的伤害计算，只考虑基础伤害和类型
  let type_multiplier = match move_type {
    "Fire" => 1.5
    "Water" => 1.3
    "Electric" => 1.4
    "Grass" => 1.2
    "Ice" => 1.3
    "Fighting" => 1.4
    "Poison" => 1.2
    "Ground" => 1.3
    "Flying" => 1.3
    "Psychic" => 1.4
    "Bug" => 1.1
    "Rock" => 1.3
    "Ghost" => 1.4
    "Dragon" => 1.5
    "Dark" => 1.3
    "Steel" => 1.2
    "Fairy" => 1.3
    _ => 1.0
  }
  
  (base_damage.to_double() * type_multiplier).to_int()
}



///|
// 状态转字符串
pub fn status_to_string(status_name : String) -> String {
  match status_name {
    "normal" => "正常"
    "poison" => "中毒"
    "burn" => "灼烧"
    "freeze" => "冰冻"
    "paralysis" => "麻痹"
    "sleep" => "睡眠"
    "fainted" => "濒死"
    _ => "未知状态"
  }
}

///|
// 效果类型转字符串
pub fn effect_type_to_string(effect_type : String) -> String {
  match effect_type {
    "Ability" => "特性"
    "Item" => "道具"
    "Move" => "技能"
    "Status" => "状态"
    "Weather" => "天气"
    "Terrain" => "场地"
    "Field" => "场地效果"
    _ => "未知效果"
  }
}

///|
// 伤害类型转字符串
pub fn damage_type_to_string(damage_type : String) -> String {
  match damage_type {
    "Physical" => "物理"
    "Special" => "特殊"
    "Status" => "变化"
    "True" => "真实"
    _ => "未知类型"
  }
}

///|
// 使用技能
pub fn use_move(move_name : String, is_player : Bool, battle_state : BattleState) -> String {
  match (battle_state.player_pokemon, battle_state.enemy_pokemon) {
    (Some(player), Some(enemy)) => {
      let attacker = if is_player { player } else { enemy }
      let defender = if is_player { enemy } else { player }
  
  let move_obj = create_move_from_name(move_name)
  let damage = calculate_damage(attacker, defender, move_obj)
  attacker.name + " used " + move_name + "! It dealt " + damage.to_string() + " damage!"
    }
    _ => "Battle not properly initialized"
  }
}

///|
// 开始战斗
pub fn start_battle(player_pokemon : Pokemon, enemy_pokemon : Pokemon) -> String {
  "Battle started! " + player_pokemon.name + " VS " + enemy_pokemon.name
}

///|
// 重置战斗
pub fn reset_battle() -> Unit {
  println("Battle has been reset")
}

///|
// 创建战斗状态
pub fn create_battle_state(player_pokemon : Pokemon, enemy_pokemon : Pokemon) -> BattleState {
  BattleState::{
    is_active: true,
    turn: 1,
    current_turn_type: TurnType::PlayerTurn,
    player_pokemon: Some(player_pokemon),
    enemy_pokemon: Some(enemy_pokemon),
    battle_log: [],
    actions_this_turn: 0,
    max_actions_per_turn: 1
  }
}

///|
// 更新战斗状态
pub fn update_battle_state_after_move(
  battle_state : BattleState, 
  move_name : String, 
  _is_player : Bool, 
  damage : Int, 
  _hit : Bool
) -> BattleState {
  let new_log = battle_state.battle_log + [move_name + " dealt " + damage.to_string() + " damage"]
  
  BattleState::{
    is_active: battle_state.is_active,
    turn: battle_state.turn,
    current_turn_type: battle_state.current_turn_type,
    player_pokemon: battle_state.player_pokemon,
    enemy_pokemon: battle_state.enemy_pokemon,
    battle_log: new_log,
    actions_this_turn: battle_state.actions_this_turn,
    max_actions_per_turn: battle_state.max_actions_per_turn
  }
}

///|
// 结束回合
pub fn end_turn(battle_state : BattleState) -> BattleState {
  BattleState::{
    is_active: battle_state.is_active,
    turn: battle_state.turn + 1,
    current_turn_type: battle_state.current_turn_type,
    player_pokemon: battle_state.player_pokemon,
    enemy_pokemon: battle_state.enemy_pokemon,
    battle_log: battle_state.battle_log,
    actions_this_turn: 0,
    max_actions_per_turn: battle_state.max_actions_per_turn
  }
}

///|
// 重置战斗状态
pub fn reset_battle_state(battle_state : BattleState) -> BattleState {
  BattleState::{
    is_active: true,
    turn: 1,
    current_turn_type: TurnType::PlayerTurn,
    player_pokemon: battle_state.player_pokemon,
    enemy_pokemon: battle_state.enemy_pokemon,
    battle_log: [],
    actions_this_turn: 0,
    max_actions_per_turn: 1
  }
}

///|
// 获取战斗状态
pub fn get_battle_status(battle_state : BattleState) -> String {
  "Battle Status: Turn " + battle_state.turn.to_string() + ", Active: " + battle_state.is_active.to_string()
}

///|
// 检查战斗是否结束
pub fn is_battle_finished(battle_state : BattleState) -> Bool {
  match (battle_state.player_pokemon, battle_state.enemy_pokemon) {
    (Some(player), Some(enemy)) => player.hp <= 0 || enemy.hp <= 0
    _ => false
  }
}

///|
// 获取获胜者
pub fn get_winner(battle_state : BattleState) -> String {
  match (battle_state.player_pokemon, battle_state.enemy_pokemon) {
    (Some(player), Some(enemy)) => {
      if player.hp <= 0 {
    "Enemy wins!"
      } else if enemy.hp <= 0 {
    "Player wins!"
  } else {
    "Battle still in progress"
      }
    }
    _ => "Battle not properly initialized"
  }
}

///|
// 获取可用技能
pub fn get_available_moves(pokemon : Pokemon) -> Array[String] {
  pokemon.moves
}

///|
// 更新宝可梦HP
pub fn update_pokemon_hp(pokemon : Pokemon, new_hp : Int) -> Pokemon {
  let clamped_hp = if new_hp < 0 { 0 } else if new_hp > pokemon.max_hp { pokemon.max_hp } else { new_hp }
  
  Pokemon::{
    id: pokemon.id,
    name: pokemon.name,
    level: pokemon.level,
    hp: clamped_hp,
    max_hp: pokemon.max_hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    speed: pokemon.speed,
    types: pokemon.types,
    moves: pokemon.moves
  }
}

///|
// ===== 战斗场景功能 =====


///|
// 开始战斗渲染（移除血条初始化，只保留宝可梦渲染）
pub fn start_battle_render(player_pokemon : Pokemon, enemy_pokemon : Pokemon) -> Unit {
  println("🎮 开始战斗渲染...")
  
  // 确保精灵配置已初始化
  if pokemon_sprite_cache.size() == 0 {
    init_pokemon_sprite_configs()
  }
  
  // 设置当前宝可梦数据
  battle_render_state.current_player_pokemon = Some(player_pokemon)
  battle_render_state.current_enemy_pokemon = Some(enemy_pokemon)
  
  // 初始化战斗状态
  let initial_battle_state = BattleState::{
    is_active: true,
    turn: 1,
    current_turn_type: TurnType::PlayerTurn,
    player_pokemon: Some(player_pokemon),
    enemy_pokemon: Some(enemy_pokemon),
    battle_log: [],
    actions_this_turn: 0,
    max_actions_per_turn: 1
  }
  battle_render_state.battle_state = Some(initial_battle_state)
  
  // 初始化回合显示
  if turn_display_state.turn_display.is_none() {
    init_turn_display_system()
  }
  update_turn_display(1, "PlayerTurn")
  
  // 渲染宝可梦
  render_pokemon(player_pokemon, enemy_pokemon)
  
  println("✅ 战斗渲染开始，战斗状态已初始化")
  
  // 在 start_battle_render 函数中，设置宝可梦数据后添加：
  // 更新文本框显示正确的宝可梦名称
  update_text_box("想要" + player_pokemon.name + "做什么?")
}

///|
// 渲染宝可梦
fn render_pokemon(player_pokemon : Pokemon, enemy_pokemon : Pokemon) -> Unit {
  // 只渲染宝可梦精灵，不重新创建血条
  render_player_pokemon(player_pokemon)
  render_enemy_pokemon(enemy_pokemon)
  
  // 只更新现有血条，不重新创建
  update_pokemon_status_display(player_pokemon, false)
  update_pokemon_status_display(enemy_pokemon, true)
}

///|
fn render_player_pokemon(pokemon : Pokemon) -> Unit {
  let entity = battle_render_state.player_pokemon_entity
  
  println("🎨 正在渲染玩家宝可梦: " + pokemon.name)
  
  // 使用预加载的精灵
  let pokemon_sprite = create_pokemon_sprite(pokemon, false) // false = 背面
  
  @sprite.sprites.set(entity, pokemon_sprite)
  @position.positions.set(entity, @math.Vec2D(70.0, BATTLE_ARENA_HEIGHT - 64.0 - 70.0))
  
  println("✅ 玩家宝可梦 " + pokemon.name + " 渲染完成")
}

fn render_enemy_pokemon(pokemon : Pokemon) -> Unit {
  let entity = battle_render_state.enemy_pokemon_entity
  
  println("🎨 正在渲染敌方宝可梦: " + pokemon.name)
  
  // 使用预加载的精灵
  let pokemon_sprite = create_pokemon_sprite(pokemon, true) // true = 正面
  
  @sprite.sprites.set(entity, pokemon_sprite)
  @position.positions.set(entity, @math.Vec2D(BATTLE_SCREEN_WIDTH - 64.0 - 70.0, 70.0))
  
  println("✅ 敌方宝可梦 " + pokemon.name + " 渲染完成")
}

///|
// 渲染宝可梦状态（使用统一的宝可梦信息显示模版）
fn render_pokemon_status(pokemon : Pokemon, position : @math.Vec2D, is_enemy : Bool) -> Unit {
  // 创建宝可梦信息显示配置
  let config = if is_enemy {
    {
      base_position: position,
      width: 200.0,
      height: 20.0,
      background_color: "#333333",
      fill_color: "#FF0000",  // 红色
      text_color: "#FFFFFF",
      bar_type: HealthBarType::Enemy
    }
  } else {
    {
      base_position: position,
      width: 200.0,
      height: 20.0,
      background_color: "#333333",
      fill_color: "#00FF00",  // 绿色
      text_color: "#FFFFFF",
      bar_type: HealthBarType::Player
    }
  }
  
  // 创建宝可梦信息显示模版
  let pokemon_info = create_pokemon_info_template(config, pokemon.name, pokemon.level, pokemon.max_hp)
  
  // 更新全局状态
  if is_enemy {
    battle_render_state.enemy_pokemon_info = Some(pokemon_info)
  } else {
    battle_render_state.player_pokemon_info = Some(pokemon_info)
  }
  
  println(" 宝可梦状态渲染完成: " + pokemon.name + " Lv." + pokemon.level.to_string())
}

///|
// 更新宝可梦状态显示
fn update_pokemon_status_display(pokemon : Pokemon, is_enemy : Bool) -> Unit {
  let pokemon_info_opt = if is_enemy {
    battle_render_state.enemy_pokemon_info
  } else {
    battle_render_state.player_pokemon_info
  }
  
  match pokemon_info_opt {
    Some(pokemon_info) => {
      // 只更新现有血条，不重新创建
      update_pokemon_info_display(pokemon_info, pokemon.name, pokemon.level, pokemon.hp, pokemon.max_hp)
    }
    None => {
      // 只有在血条不存在时才创建
      let position = if is_enemy { @math.Vec2D(350.0, 50.0) } else { @math.Vec2D(450.0, 350.0) }
      render_pokemon_status(pokemon, position, is_enemy)
    }
  }
}

///|
// 进入技能UI模式
fn enter_skill_ui_mode() -> Unit {
  println("🎯 进入技能UI模式")
  
  // 从当前宝可梦获取技能列表
  let current_moves = get_current_player_moves()
  
  // 获取当前选中的技能
  if battle_render_state.skill_menu_selected >= 0 && battle_render_state.skill_menu_selected < current_moves.length() {
    let selected_skill = current_moves[battle_render_state.skill_menu_selected]
    println("⚔️ 准备使用技能: " + selected_skill.name)
    
    // 显示技能UI界面
    show_skill_ui_interface(selected_skill)
    
    // 执行技能 - 玩家攻击
    execute_battle_skill(selected_skill, true)
  } else {
    println("❌ 无效的技能选择")
  }
}

///|
// 切换技能菜单
fn toggle_skill_menu() -> Unit {
  println("🔄 切换技能菜单")
  
  if battle_render_state.skill_menu_visible {
    // 如果技能菜单已经可见，隐藏它
    battle_render_state.skill_menu_visible = false
    hide_skill_menu_ui()
  } else {
    // 如果技能菜单不可见，显示它
    battle_render_state.skill_menu_visible = true
  battle_render_state.skill_menu_selected = 0
    show_skill_menu_ui()
  }
}

///|
// 全局技能菜单实体管理 - 使用结构体来管理所有实体
pub struct SkillMenuEntities {
  background_entity: @system.Entity
  title_entity: @system.Entity
  skill_entities: Array[@system.Entity]
  selector_entity: @system.Entity
}

///|
// 全局技能菜单实体 - 移除mut，使用结构体包装
pub struct SkillMenuState {
  mut entities: Option[SkillMenuEntities]
}

let skill_menu_state: SkillMenuState = {
  entities: None
}

///|
// 全局技能选择指示器实体
let skill_selector_entity : @system.Entity = @system.Entity::new()

///|
// 显示技能菜单UI
fn show_skill_menu_ui() -> Unit {
  println("🎯 显示技能菜单UI")
  
  // 先清理之前的技能菜单实体
  clear_skill_menu_entities()
  
  // 获取当前玩家宝可梦的技能
  let current_moves = get_current_player_moves()
  
  if current_moves.length() > 0 {
    // 创建技能菜单背景
    let menu_bg_entity = @system.Entity::new()
    let menu_bg_sprite = @sprite.Sprite::from_color_rect(
      @sprite.ColorRect::new(
        @math.Vec2D(300.0, 200.0),
        "#2C3E50"
      ),
      14
    )
    @sprite.sprites.set(menu_bg_entity, menu_bg_sprite)
    @position.positions.set(menu_bg_entity, @math.Vec2D(250.0, 200.0))
    
    // 创建技能列表标题
    let title_entity = @system.Entity::new()
    let title_sprite = @sprite.Sprite::from_text(
      @sprite.Text::new(
        "选择技能",
        color="#FFFFFF",
        font="18px Arial"
      ),
      15
    )
    @sprite.sprites.set(title_entity, title_sprite)
    @position.positions.set(title_entity, @math.Vec2D(270.0, 220.0))
    
    // 创建技能选择指示器
    let selector_entity = @system.Entity::new()
    let selector_sprite = @sprite.Sprite::from_text(
      @sprite.Text::new(
        "▶",
        color="#F39C12",
        font="16px Arial"
      ),
      16
    )
    @sprite.sprites.set(selector_entity, selector_sprite)
    @position.positions.set(selector_entity, @math.Vec2D(270.0, 250.0))
    
    // 创建技能列表实体
    let skill_entities = create_skill_list_entities(current_moves)
    
    // 保存所有实体
    skill_menu_state.entities = Some(SkillMenuEntities::{
      background_entity: menu_bg_entity,
      title_entity: title_entity,
      skill_entities: skill_entities,
      selector_entity: selector_entity
    })
  } else {
    println("❌ 当前宝可梦没有技能")
  }
}

///|
// 创建技能列表实体
fn create_skill_list_entities(moves: Array[Move]) -> Array[@system.Entity] {
  let skill_entities: Array[@system.Entity] = []
  
  for i = 0; i < moves.length(); i = i + 1 {
    let move = moves[i]
    let skill_entity = @system.Entity::new()
    let skill_sprite = @sprite.Sprite::from_text(
      @sprite.Text::new(
        move.name + " (威力:" + move.power.to_string() + " " + move.element_type + ")",
        color="#FFFFFF",
        font="14px Arial"
      ),
      17 + i
    )
    @sprite.sprites.set(skill_entity, skill_sprite)
    @position.positions.set(skill_entity, @math.Vec2D(290.0, 250.0 + i.to_double() * 25.0))
    skill_entities.push(skill_entity)
  }
  
  skill_entities
}

///|
// 清理技能菜单实体
fn clear_skill_menu_entities() -> Unit {
  match skill_menu_state.entities {
    Some(entities) => {
      // 清理背景
      @sprite.sprites.remove(entities.background_entity)
      @position.positions.remove(entities.background_entity)
      
      // 清理标题
      @sprite.sprites.remove(entities.title_entity)
      @position.positions.remove(entities.title_entity)
      
      // 清理所有技能实体
      for skill_entity in entities.skill_entities {
        @sprite.sprites.remove(skill_entity)
        @position.positions.remove(skill_entity)
      }
      
      // 清理选择指示器
      @sprite.sprites.remove(entities.selector_entity)
      @position.positions.remove(entities.selector_entity)
      
      // 清空实体
      skill_menu_state.entities = None
    }
    None => {
      // 清理旧的技能选择指示器
      @sprite.sprites.remove(skill_selector_entity)
      @position.positions.remove(skill_selector_entity)
    }
  }
  
  println("🧹 技能菜单实体清理完成")
}

///|
// 创建技能选择指示器
fn create_skill_selector() -> Unit {
  let selector_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "▶",
      color="#F39C12",
      font="16px Arial"
    ),
    16
  )
  @sprite.sprites.set(skill_selector_entity, selector_sprite)
  // 默认指向第一个技能
  @position.positions.set(skill_selector_entity, @math.Vec2D(270.0, 250.0))
}

///|
// 显示技能列表
fn show_skill_list(moves: Array[Move]) -> Unit {
  println("🎯 显示技能列表，共 " + moves.length().to_string() + " 个技能")
  
  for i = 0; i < moves.length(); i = i + 1 {
    let move = moves[i]
    let skill_entity = @system.Entity::new()
    let skill_sprite = @sprite.Sprite::from_text(
      @sprite.Text::new(
        move.name + " (威力:" + move.power.to_string() + " " + move.element_type + ")",
        color="#FFFFFF",
        font="14px Arial"
      ),
      17 + i
    )
    @sprite.sprites.set(skill_entity, skill_sprite)
    @position.positions.set(skill_entity, @math.Vec2D(290.0, 250.0 + i.to_double() * 25.0))
  }
}

///|
// 处理技能菜单输入（带防抖）
fn handle_skill_menu_input() -> Unit {
  let current_frame = get_current_frame_count()
  
  // 检查是否在防抖期内
  if current_frame - battle_render_state.last_skill_input_frame < SKILL_INPUT_COOLDOWN_FRAMES {
    return
  }
  
  // 处理上下箭头键选择技能
  if @system.is_pressed(@system.ArrowUp) {
    move_skill_selection_up()
    battle_render_state.last_skill_input_frame = current_frame
  }
  
  if @system.is_pressed(@system.ArrowDown) {
    move_skill_selection_down()
    battle_render_state.last_skill_input_frame = current_frame
  }
  
  // 处理确认选择 - Z键选择技能
  if @system.is_pressed(@system.KeyZ) {
    select_current_skill()
    battle_render_state.last_skill_input_frame = current_frame
  }
  
  // 处理取消选择 - X键返回主菜单
  if @system.is_pressed(@system.KeyX) {
    cancel_skill_selection()
    battle_render_state.last_skill_input_frame = current_frame
  }
}

///|
// 向上移动技能选择
fn move_skill_selection_up() -> Unit {
  let current_moves = get_current_player_moves()
  if current_moves.length() > 0 {
    battle_render_state.skill_menu_selected = if battle_render_state.skill_menu_selected > 0 {
      battle_render_state.skill_menu_selected - 1
    } else {
      current_moves.length() - 1
    }
    update_skill_selector_position()
    println("⬆️ 选择技能: " + current_moves[battle_render_state.skill_menu_selected].name)
  }
}

///|
// 向下移动技能选择
fn move_skill_selection_down() -> Unit {
  let current_moves = get_current_player_moves()
  if current_moves.length() > 0 {
    battle_render_state.skill_menu_selected = if battle_render_state.skill_menu_selected < current_moves.length() - 1 {
      battle_render_state.skill_menu_selected + 1
    } else {
      0
    }
    update_skill_selector_position()
    println("⬇️ 选择技能: " + current_moves[battle_render_state.skill_menu_selected].name)
  }
}

///|
// 更新技能选择指示器位置
fn update_skill_selector_position() -> Unit {
  match skill_menu_state.entities {
    Some(entities) => {
      // 计算指示器位置
      let y_position = 250.0 + battle_render_state.skill_menu_selected.to_double() * 25.0
      
      // 更新选择指示器位置
      @position.positions.set(entities.selector_entity, @math.Vec2D(270.0, y_position))
      println("🎯 更新技能选择指示器位置: " + y_position.to_string())
    }
    None => {
      println("❌ 技能菜单实体未创建")
    }
  }
}

///|
// 选择当前技能
fn select_current_skill() -> Unit {
  let current_moves = get_current_player_moves()
  if battle_render_state.skill_menu_selected >= 0 && battle_render_state.skill_menu_selected < current_moves.length() {
    let selected_skill = current_moves[battle_render_state.skill_menu_selected]
    println("✅ 选择了技能: " + selected_skill.name)
    
    // 隐藏技能菜单
    battle_render_state.skill_menu_visible = false
    hide_skill_menu_ui()
    
    // 执行技能
    execute_battle_skill(selected_skill, true)
  } else {
    println("❌ 无效的技能选择")
  }
}

///|
// 取消技能选择
fn cancel_skill_selection() -> Unit {
  println("❌ 取消技能选择")
  battle_render_state.skill_menu_visible = false
  battle_render_state.skill_menu_selected = 0
  hide_skill_menu_ui()
}

// 添加缺少的变量和函数
let battle_skills : Array[Move] = []
///|
// 显示技能UI界面
fn show_skill_ui_interface(skill: Move) -> Unit {
  println("🎨 显示技能UI界面: " + skill.name)
  
  // 创建技能使用动画 - 显示在屏幕顶部中央，避免与菜单重叠
  let skill_animation_entity = @system.Entity::new()
  let animation_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(
      " " + skill.name + " ",
      color="#FF6B6B",
      font="20px Arial"
    ),
    16
  )
  @sprite.sprites.set(skill_animation_entity, animation_sprite)
  @position.positions.set(skill_animation_entity, @math.Vec2D(400.0, 100.0))
  
  // 创建技能效果文本 - 显示在技能名称下方
  let effect_entity = @system.Entity::new()
  let effect_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(
      "效果: " + skill.name,
      color="#FFFFFF",
      font="14px Arial"
    ),
    16
  )
  @sprite.sprites.set(effect_entity, effect_sprite)
  @position.positions.set(effect_entity, @math.Vec2D(400.0, 130.0))
}

///|
// 执行战斗技能
fn execute_battle_skill(skill: Move, is_player_attacking: Bool) -> Unit {
  println("⚔️ 执行技能: " + skill.name)
  
  // 获取当前战斗中的宝可梦
  match battle_render_state.current_player_pokemon {
    Some(player_pokemon) => {
      match battle_render_state.current_enemy_pokemon {
        Some(enemy_pokemon) => {
          // 根据攻击者确定攻击者和防御者
          let (attacker, defender) = if is_player_attacking {
            (player_pokemon, enemy_pokemon)
          } else {
            (enemy_pokemon, player_pokemon)
          }
          
          // 计算伤害
          let damage = calculate_damage(attacker, defender, skill)
          
          // 更新被攻击方的HP
          let new_defender_hp = if defender.hp > damage { 
            defender.hp - damage 
          } else { 
            0 
          }
          
          let updated_defender = update_pokemon_hp(defender, new_defender_hp)
          
          // 根据攻击者更新对应的全局状态
          if is_player_attacking {
            // 玩家攻击，更新敌方宝可梦
            battle_render_state.current_enemy_pokemon = Some(updated_defender)
            // 同步更新战斗状态中的敌方宝可梦
            match battle_render_state.battle_state {
              Some(state) => {
                let updated_battle_state = BattleState::{
                  is_active: state.is_active,
                  turn: state.turn,
                  current_turn_type: state.current_turn_type,
                  player_pokemon: state.player_pokemon,
                  enemy_pokemon: Some(updated_defender), // 更新敌方宝可梦
                  battle_log: state.battle_log,
                  actions_this_turn: state.actions_this_turn,
                  max_actions_per_turn: state.max_actions_per_turn
                }
                battle_render_state.battle_state = Some(updated_battle_state)
              }
              None => ()
            }
            // 更新敌方血条 - 使用新的统一更新函数
            match battle_render_state.enemy_pokemon_info {
              Some(pokemon_info) => {
                update_pokemon_info_display(pokemon_info, updated_defender.name, updated_defender.level, updated_defender.hp, updated_defender.max_hp)
              }
              None => {
                println("❌ 敌方宝可梦信息显示未创建")
              }
            }
          } else {
            // 敌方攻击，更新玩家宝可梦
            battle_render_state.current_player_pokemon = Some(updated_defender)
            // 同步更新战斗状态中的玩家宝可梦
            match battle_render_state.battle_state {
              Some(state) => {
                let updated_battle_state = BattleState::{
                  is_active: state.is_active,
                  turn: state.turn,
                  current_turn_type: state.current_turn_type,
                  player_pokemon: Some(updated_defender), // 更新玩家宝可梦
                  enemy_pokemon: state.enemy_pokemon,
                  battle_log: state.battle_log,
                  actions_this_turn: state.actions_this_turn,
                  max_actions_per_turn: state.max_actions_per_turn
                }
                battle_render_state.battle_state = Some(updated_battle_state)
              }
              None => ()
            }
            // 更新玩家血条 - 使用新的统一更新函数
            match battle_render_state.player_pokemon_info {
              Some(pokemon_info) => {
                update_pokemon_info_display(pokemon_info, updated_defender.name, updated_defender.level, updated_defender.hp, updated_defender.max_hp)
              }
              None => {
                println("❌ 玩家宝可梦信息显示未创建")
              }
            }
          }
          
          // 显示伤害信息
          let damage_message = attacker.name + " 使用了 " + skill.name + "! 对 " + 
                              defender.name + " 造成了 " + damage.to_string() + " 点伤害!"
          println(" " + damage_message)
          
          // 更新文本框显示伤害信息
          update_text_box(damage_message)
          
          // 检查被攻击方是否被击败
          if new_defender_hp <= 0 {
            let victory_message = defender.name + " 被击败了! " + attacker.name + " 获胜!"
            println("🎉 " + victory_message)
            update_text_box(victory_message)
          }
          
          // 重新渲染宝可梦状态
          let (updated_player, updated_enemy) = if is_player_attacking {
            (player_pokemon, updated_defender)
          } else {
            (updated_defender, enemy_pokemon)
          }
          
          render_pokemon(updated_player, updated_enemy)
          
          // 增加行动次数
          increment_actions_this_turn()
          
          // 添加：玩家攻击后结束回合，触发敌人回合
          if is_player_attacking {
            end_current_turn()
          }
        }
        None => {
          println("❌ 没有找到敌方宝可梦")
        }
      }
    }
    None => {
      println("❌ 没有找到玩家宝可梦")
    }
  }
}

///|
// 增加当前回合的行动次数
fn increment_actions_this_turn() -> Unit {
  match battle_render_state.battle_state {
    Some(state) => {
      let new_actions = state.actions_this_turn + 1
      let updated_state = BattleState::{
        is_active: state.is_active,
        turn: state.turn,
        current_turn_type: state.current_turn_type,
        player_pokemon: state.player_pokemon,
        enemy_pokemon: state.enemy_pokemon,
        battle_log: state.battle_log,
        actions_this_turn: new_actions,
        max_actions_per_turn: state.max_actions_per_turn
      }
      battle_render_state.battle_state = Some(updated_state)
      println("📊 行动次数: " + new_actions.to_string() + "/" + state.max_actions_per_turn.to_string())
    }
    None => {
      println("❌ 战斗状态未初始化")
    }
  }
}

///|
// 回合类型枚举
pub enum TurnType {
  PlayerTurn
  EnemyTurn
} derive(Show, Eq)

///|
// 战斗状态（增强版）
pub struct BattleState {
  is_active: Bool
  turn: Int
  current_turn_type: TurnType
  player_pokemon: Option[Pokemon]
  enemy_pokemon: Option[Pokemon]
  battle_log: Array[String]
  actions_this_turn: Int
  max_actions_per_turn: Int
} derive(Show)

///|
// 开始新回合
pub fn start_new_turn() -> Unit {
  match battle_render_state.battle_state {
    Some(state) => {
      let new_turn = state.turn + 1
      let new_turn_type = if state.current_turn_type == TurnType::PlayerTurn {
        TurnType::EnemyTurn
      } else {
        TurnType::PlayerTurn
      }
      
      let updated_state = BattleState::{
        is_active: state.is_active,
        turn: new_turn,
        current_turn_type: new_turn_type,
        player_pokemon: state.player_pokemon,
        enemy_pokemon: state.enemy_pokemon,
        battle_log: state.battle_log,
        actions_this_turn: 0,
        max_actions_per_turn: state.max_actions_per_turn
      }
      
      battle_render_state.battle_state = Some(updated_state)
      
      let turn_name = match new_turn_type {
        TurnType::PlayerTurn => "想要" + get_current_player_pokemon_name() + "做什么?"
        TurnType::EnemyTurn => "第 " + new_turn.to_string() + " 回合 - " + "敌人" + " 的回合"
      }
      
      let turn_type_string = match new_turn_type {
        TurnType::PlayerTurn => "PlayerTurn"
        TurnType::EnemyTurn => "EnemyTurn"
      }
      
      println("🔄 开始第 " + new_turn.to_string() + " 回合 - " + turn_name)
      update_text_box(turn_name)
      
      // 更新回合显示
      update_turn_display(new_turn, turn_type_string)
    }
    None => {
      println("❌ 战斗状态未初始化")
    }
  }
}

///|
// 检查是否可以行动
pub fn can_act() -> Bool {
  match battle_render_state.battle_state {
    Some(state) => {
      state.actions_this_turn < state.max_actions_per_turn
    }
    None => false
  }
}

///|
// 检查是否是玩家回合
pub fn is_player_turn() -> Bool {
  match battle_render_state.battle_state {
    Some(state) => {
      state.current_turn_type == TurnType::PlayerTurn
    }
    None => false
  }
}

///|
// 检查是否是敌人回合
pub fn is_enemy_turn() -> Bool {
  match battle_render_state.battle_state {
    Some(state) => {
      state.current_turn_type == TurnType::EnemyTurn
    }
    None => false
  }
}

///|
// 执行行动（增加回合检查）
pub fn execute_action() -> Unit {
  if !can_act() {
    println("❌ 本回合已无法行动")
    return
  }
  
  if is_player_turn() {
    println(" 玩家回合 - 等待玩家选择技能")
    // 玩家回合逻辑
  } else if is_enemy_turn() {
    println("🤖 敌人回合 - 自动选择技能")
    // 敌人回合逻辑
    execute_enemy_turn()
  }
}

///|
// 执行敌人回合
fn execute_enemy_turn() -> Unit {
  match battle_render_state.current_enemy_pokemon {
    Some(enemy_pokemon) => {
      // 敌人随机选择一个技能
      let moves = get_pokemon_moves(enemy_pokemon)
      if moves.length() > 0 {
        // 创建随机数生成器并生成随机索引
        let rng = @random.Rand::chacha8()
        let random_index = rng.int(limit=moves.length())
        match moves.get(random_index) {
          Some(skill) => {
            println(" 敌人选择了技能: " + skill.name)
            execute_battle_skill(skill, false) // false 表示敌人攻击
            end_current_turn()
          }
          None => {
            println("❌ 敌人没有可用技能")
            end_current_turn()
          }
        }
      } else {
        println("❌ 敌人没有技能")
        end_current_turn()
      }
    }
    None => {
      println("❌ 没有找到敌人宝可梦")
      end_current_turn()
    }
  }
}

///|
// 结束当前回合
pub fn end_current_turn() -> Unit {
  match battle_render_state.battle_state {
    Some(state) => {
      // 首先检查战斗是否已经结束
      if is_battle_finished(state) {
        let winner = get_winner(state)
        println(" 战斗结束! " + winner)
        update_text_box("战斗结束! " + winner)
        
        // 设置战斗状态为不活跃
        let ended_state = BattleState::{
          is_active: false,
          turn: state.turn,
          current_turn_type: state.current_turn_type,
          player_pokemon: state.player_pokemon,
          enemy_pokemon: state.enemy_pokemon,
          battle_log: state.battle_log,
          actions_this_turn: state.actions_this_turn,
          max_actions_per_turn: state.max_actions_per_turn
        }
        battle_render_state.battle_state = Some(ended_state)
        return
      }
      
      if state.actions_this_turn >= state.max_actions_per_turn {
        println("🔄 回合结束，切换到下一个回合")
        start_new_turn()
        // 添加：如果切换到敌人回合，立即执行
        if is_enemy_turn() {
          execute_enemy_turn()
        }
      } else {
        println("⚠️ 本回合还有行动次数剩余: " + state.actions_this_turn.to_string() + "/" + state.max_actions_per_turn.to_string())
      }
    }
    None => {
      println("❌ 战斗状态未初始化")
    }
  }
}
///|
// 隐藏技能菜单UI
fn hide_skill_menu_ui() -> Unit {
  println("❌ 隐藏技能菜单UI")
  
  // 清理技能菜单实体
  clear_skill_menu_entities()
  
  // 重置技能菜单状态
  battle_render_state.skill_menu_visible = false
  battle_render_state.skill_menu_selected = 0
  
  println("技能菜单状态已重置")
}

///|
// 获取当前玩家宝可梦的技能
fn get_current_player_moves() -> Array[Move] {
  match battle_render_state.current_player_pokemon {
    Some(pokemon) => get_pokemon_moves(pokemon)
    None => []
  }
}

///|
// 获取当前玩家宝可梦名称
fn get_current_player_pokemon_name() -> String {
  match battle_render_state.current_player_pokemon {
    Some(pokemon) => pokemon.name
    None => "宝可梦"
  }
}

///|
// 获取类型克制修正器
fn get_type_effectiveness_multiplier(move_type : String, defender_types : Array[PokemonType]) -> Double {
  let mut total_multiplier = 1.0
  
  for defender_type in defender_types {
    let type_multiplier = get_single_type_effectiveness(move_type, defender_type)
    total_multiplier = total_multiplier * type_multiplier
  }
  
  total_multiplier
}

///|
// 获取单个类型的克制关系
fn get_single_type_effectiveness(move_type : String, defender_type : PokemonType) -> Double {
  match move_type {
    "Normal" => match defender_type {
      PokemonType::Rock => 0.5
      PokemonType::Steel => 0.5
      PokemonType::Ghost => 0.0
      _ => 1.0
    }
    "Fire" => match defender_type {
      PokemonType::Fire => 0.5
      PokemonType::Water => 0.5
      PokemonType::Grass => 2.0
      PokemonType::Ice => 2.0
      PokemonType::Bug => 2.0
      PokemonType::Steel => 2.0
      PokemonType::Rock => 0.5
      PokemonType::Dragon => 0.5
      _ => 1.0
    }
    "Water" => match defender_type {
      PokemonType::Fire => 2.0
      PokemonType::Water => 0.5
      PokemonType::Grass => 0.5
      PokemonType::Ground => 2.0
      PokemonType::Rock => 2.0
      PokemonType::Dragon => 0.5
      _ => 1.0
    }
    "Electric" => match defender_type {
      PokemonType::Water => 2.0
      PokemonType::Electric => 0.5
      PokemonType::Grass => 0.5
      PokemonType::Ground => 0.0
      PokemonType::Flying => 2.0
      PokemonType::Dragon => 0.5
      _ => 1.0
    }
    "Grass" => match defender_type {
      PokemonType::Fire => 0.5
      PokemonType::Water => 2.0
      PokemonType::Grass => 0.5
      PokemonType::Poison => 0.5
      PokemonType::Ground => 2.0
      PokemonType::Flying => 0.5
      PokemonType::Bug => 0.5
      PokemonType::Rock => 2.0
      PokemonType::Dragon => 0.5
      PokemonType::Steel => 0.5
      _ => 1.0
    }
    "Ice" => match defender_type {
      PokemonType::Fire => 0.5
      PokemonType::Water => 0.5
      PokemonType::Grass => 2.0
      PokemonType::Ice => 0.5
      PokemonType::Ground => 2.0
      PokemonType::Flying => 2.0
      PokemonType::Dragon => 2.0
      PokemonType::Steel => 0.5
      _ => 1.0
    }
    "Fighting" => match defender_type {
      PokemonType::Normal => 2.0
      PokemonType::Ice => 2.0
      PokemonType::Poison => 0.5
      PokemonType::Flying => 0.5
      PokemonType::Psychic => 0.5
      PokemonType::Bug => 0.5
      PokemonType::Rock => 2.0
      PokemonType::Ghost => 0.0
      PokemonType::Dark => 2.0
      PokemonType::Steel => 2.0
      PokemonType::Fairy => 0.5
      _ => 1.0
    }
    "Poison" => match defender_type {
      PokemonType::Grass => 2.0
      PokemonType::Poison => 0.5
      PokemonType::Ground => 0.5
      PokemonType::Rock => 0.5
      PokemonType::Ghost => 0.5
      PokemonType::Steel => 0.0
      PokemonType::Fairy => 2.0
      _ => 1.0
    }
    "Ground" => match defender_type {
      PokemonType::Fire => 2.0
      PokemonType::Electric => 2.0
      PokemonType::Grass => 0.5
      PokemonType::Poison => 2.0
      PokemonType::Flying => 0.0
      PokemonType::Bug => 0.5
      PokemonType::Rock => 2.0
      PokemonType::Steel => 2.0
      _ => 1.0
    }
    "Flying" => match defender_type {
      PokemonType::Electric => 0.5
      PokemonType::Grass => 2.0
      PokemonType::Fighting => 2.0
      PokemonType::Bug => 2.0
      PokemonType::Rock => 0.5
      _ => 1.0
    }
    "Psychic" => match defender_type {
      PokemonType::Fighting => 2.0
      PokemonType::Poison => 2.0
      PokemonType::Psychic => 0.5
      PokemonType::Dark => 0.0
      PokemonType::Steel => 0.5
      _ => 1.0
    }
    "Bug" => match defender_type {
      PokemonType::Fire => 0.5
      PokemonType::Grass => 2.0
      PokemonType::Fighting => 0.5
      PokemonType::Poison => 0.5
      PokemonType::Flying => 0.5
      PokemonType::Psychic => 2.0
      PokemonType::Ghost => 0.5
      PokemonType::Dark => 2.0
      PokemonType::Steel => 0.5
      PokemonType::Fairy => 0.5
      _ => 1.0
    }
    "Rock" => match defender_type {
      PokemonType::Fire => 2.0
      PokemonType::Ice => 2.0
      PokemonType::Fighting => 0.5
      PokemonType::Ground => 0.5
      PokemonType::Flying => 2.0
      PokemonType::Bug => 2.0
      PokemonType::Steel => 0.5
      _ => 1.0
    }
    "Ghost" => match defender_type {
      PokemonType::Normal => 0.0
      PokemonType::Psychic => 2.0
      PokemonType::Ghost => 2.0
      PokemonType::Dark => 0.5
      _ => 1.0
    }
    "Dragon" => match defender_type {
      PokemonType::Dragon => 2.0
      PokemonType::Steel => 0.5
      PokemonType::Fairy => 0.0
      _ => 1.0
    }
    "Dark" => match defender_type {
      PokemonType::Fighting => 0.5
      PokemonType::Psychic => 2.0
      PokemonType::Ghost => 2.0
      PokemonType::Dark => 0.5
      PokemonType::Fairy => 0.5
      _ => 1.0
    }
    "Steel" => match defender_type {
      PokemonType::Fire => 0.5
      PokemonType::Water => 0.5
      PokemonType::Electric => 0.5
      PokemonType::Ice => 2.0
      PokemonType::Rock => 2.0
      PokemonType::Steel => 0.5
      PokemonType::Fairy => 2.0
      _ => 1.0
    }
    "Fairy" => match defender_type {
      PokemonType::Fire => 0.5
      PokemonType::Fighting => 2.0
      PokemonType::Poison => 0.5
      PokemonType::Dragon => 2.0
      PokemonType::Dark => 2.0
      PokemonType::Steel => 0.5
      _ => 1.0
    }
    _ => 1.0  // Default case for unknown move types
  }
}

///|
// ===== 宝可梦精灵管理系统 =====

/// 宝可梦精灵配置
struct PokemonSpriteConfig {
  front_sprite: String
  back_sprite: String
  size: @math.Vec2D
}

/// 宝可梦精灵缓存
let pokemon_sprite_cache: Map[Int, PokemonSpriteConfig] = Map::new()

/// 预加载的图片元素缓存
let pokemon_image_cache: Map[String, String] = Map::new()

///|
// 初始化宝可梦精灵配置
fn init_pokemon_sprite_configs() -> Unit {
  println("🖼️ 初始化宝可梦精灵配置...")
  
  // 使用现有的图片
  let default_front = "pic/mega_moonbit_front.png"
  let default_back = "pic/mega_moonbit_back.png"
  let moonrabbit_back = "pic/mega_moonbit_back.png"
  
  // Python蟒蛇 - 草+龙系
  pokemon_sprite_cache.set(1, PokemonSpriteConfig::{
    front_sprite: "pic/python_front.png",
    back_sprite: default_back, 
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // Java咖啡杯 - 火+钢系
  pokemon_sprite_cache.set(2, PokemonSpriteConfig::{
    front_sprite: "pic/java_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // C++齿轮兽 - 钢+恶系
  pokemon_sprite_cache.set(3, PokemonSpriteConfig::{
    front_sprite: "pic/cpp_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // JavaScript电精灵 - 电+妖精系
  pokemon_sprite_cache.set(4, PokemonSpriteConfig::{
    front_sprite: "pic/javascript_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // C#音符骑士 - 钢+电系
  pokemon_sprite_cache.set(5, PokemonSpriteConfig::{
    front_sprite: "pic/csharp_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // Go地鼠 - 普通+地面系
  pokemon_sprite_cache.set(6, PokemonSpriteConfig::{
    front_sprite: "pic/go_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // Rust螃蟹 - 水+钢系
  pokemon_sprite_cache.set(7, PokemonSpriteConfig::{
    front_sprite: "pic/rust_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // Ruby红宝石龙 - 火+妖精系
  pokemon_sprite_cache.set(8, PokemonSpriteConfig::{
    front_sprite: "pic/ruby_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // PHP大象 - 水+冰系
  pokemon_sprite_cache.set(9, PokemonSpriteConfig::{
    front_sprite: "pic/php_front.png",
    back_sprite: default_back,
    size: @math.Vec2D(128.0, 128.0)
  })
  
  // 月兔 - 超能+妖精系
  pokemon_sprite_cache.set(10, PokemonSpriteConfig::{
    front_sprite: "pic/moonbit_front.png",
    back_sprite: "pic/moonbit_back.png",
    size: @math.Vec2D(128.0, 128.0)
  })
  
  println("✅ 宝可梦精灵配置初始化完成")
}

///|
// 预加载所有宝可梦图片
pub fn preload_all_pokemon_sprites(backend: &@system.Backend) -> Unit {
  println(" 开始预加载所有宝可梦图片...")
  
  // 初始化精灵配置
  init_pokemon_sprite_configs()
  
  // 预加载所有宝可梦图片
  let mut pokemon_id = 1
  while pokemon_id <= 10 {
    match pokemon_sprite_cache.get(pokemon_id) {
      Some(config) => {
        // 预加载正面图片
        backend.preload_img(config.front_sprite)
        pokemon_image_cache.set(config.front_sprite, config.front_sprite)
        
        // 预加载背面图片
        backend.preload_img(config.back_sprite)
        pokemon_image_cache.set(config.back_sprite, config.back_sprite)
        
        println(" 预加载宝可梦 " + pokemon_id.to_string() + " 图片完成")
      }
      None => {
        println("⚠️ 未找到宝可梦 " + pokemon_id.to_string() + " 的配置")
      }
    }
    pokemon_id = pokemon_id + 1
  }
  
  println("✅ 所有宝可梦图片预加载完成")
}

///|
// 获取宝可梦精灵配置
fn get_pokemon_sprite_config(pokemon_id: Int) -> Option[PokemonSpriteConfig] {
  pokemon_sprite_cache.get(pokemon_id)
}

///|
// 创建宝可梦精灵（使用预加载的图片）
fn create_pokemon_sprite(pokemon: Pokemon, is_front: Bool) -> @sprite.Sprite {
  match get_pokemon_sprite_config(pokemon.id) {
    Some(config) => {
      let sprite_path = if is_front { config.front_sprite } else { config.back_sprite }
      
      @sprite.Sprite::from_picture(
        @sprite.Picture::new(
          config.size,
          sprite_path,
          transform=@math.Transform::new(),
          repeat=@system.RepeatMode::NoRepeat
        ),
        15
      )
    }
    None => {
      // 如果找不到配置，使用默认图片
      println("⚠️ 未找到宝可梦 " + pokemon.id.to_string() + " 的精灵配置，使用默认图片")
      @sprite.Sprite::from_picture(
        @sprite.Picture::new(
          @math.Vec2D(64.0, 64.0),
          "pic/moonbit_back.png", // 默认图片
          transform=@math.Transform::new(),
          repeat=@system.RepeatMode::NoRepeat
        ),
        15
      )
    }
  }
}

///|
// ===== 缓存管理函数 =====

/// 清理宝可梦图片缓存
pub fn clear_pokemon_image_cache() -> Unit {
  pokemon_image_cache.clear()
  println("🧹 宝可梦图片缓存已清理")
}

/// 获取缓存状态
pub fn get_pokemon_cache_status() -> String {
  "宝可梦精灵配置: " + pokemon_sprite_cache.size().to_string() + " 个, " +
  "图片缓存: " + pokemon_image_cache.size().to_string() + " 个"
}

/// 测试宝可梦精灵系统
pub fn test_pokemon_sprite_system() -> Unit {
  println(" 测试宝可梦精灵系统...")
  
  // 初始化配置
  init_pokemon_sprite_configs()
  
  // 测试获取配置
  match get_pokemon_sprite_config(1) {
    Some(config) => {
      println("✅ Python蟒蛇配置: " + config.front_sprite + " / " + config.back_sprite)
    }
    None => println("❌ 未找到Python蟒蛇配置")
  }
  
  println("🎉 宝可梦精灵系统测试完成")
}

// 战斗系统
fn battle_system_fn(_backend : &@system.Backend) -> Unit {
  // 更新帧计数器
  update_frame_counter()
  
  // 处理战斗逻辑 - 添加敌人AI和回合管理
  if is_enemy_turn() {
    execute_enemy_turn()
  }
}
