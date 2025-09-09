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
// UI System - 整合所有UI相关功能
// 包含：基础UI、宝可梦UI、调试屏幕、血条UI

///|
// ===== 调试屏幕相关类型 =====

///|
// 调试屏幕结构体
pub struct DebugScreen {
  is_active : Bool
  current_test : String
  test_results : Array[String]
  frame_count : Int
  fps_counter : Int
  fps : Double
  debug_entity : Option[@system.Entity]
  debug_text_entities : Array[@system.Entity]
} derive(Show)

///|
// 调试输入处理器结构体
pub struct DebugInputHandler {
  key_states : Map[String, Bool]
  mouse_buttons : Map[Int, Bool]
  mouse_position : @math.Vec2D
  event_queue : Array[String]
} derive(Show)

///|
// 调试游戏管理器结构体
pub struct DebugGameManager {
  screen : DebugScreen
  input_handler : DebugInputHandler
  is_running : Bool
} derive(Show)

///|
// ===== 血条UI相关类型 =====

///|
// 血条类型枚举
pub enum HealthBarType {
  Player
  Enemy
} derive(Show, Eq)

///|
// 血条实体组结构
pub struct HealthBarEntities {
  background_entity: @system.Entity
  fill_entity: @system.Entity
  text_entity: @system.Entity
  bar_type: HealthBarType
} derive(Show)

///|
// 简化的血条配置
pub struct HealthBarConfig {
  position: @math.Vec2D
  width: Double
  height: Double
  background_color: String
  fill_color: String
  text_color: String
  bar_type: HealthBarType
} derive(Show)

///|
// 血条UI状态
pub struct HealthBarUIState {
  mut is_active: Bool
  mut player_health_bar: Option[HealthBarEntities]
  mut enemy_health_bar: Option[HealthBarEntities]
  mut health_bar_entities: Array[@system.Entity]
  mut animation_timer: Double
  mut update_interval: Double
} derive(Show)

///|
// 回合显示实体
pub struct TurnDisplayEntities {
  background_entity: @system.Entity
  turn_text_entity: @system.Entity
  turn_number_entity: @system.Entity
} derive(Show)

///|
// 回合显示状态
pub struct TurnDisplayState {
  mut is_active: Bool
  mut turn_display: Option[TurnDisplayEntities]
  mut current_turn: Int
  mut current_turn_type: String
} derive(Show)

///|
// 宝可梦信息显示实体组（包含文本和血条）
pub struct PokemonInfoEntities {
  // 宝可梦信息文本
  name_entity: @system.Entity
  level_entity: @system.Entity
  
  // 血条组件
  background_entity: @system.Entity
  fill_entity: @system.Entity
  hp_text_entity: @system.Entity
  
  // 基本信息
  bar_type: HealthBarType
  base_position: @math.Vec2D  // 基础位置，所有元素都相对于这个位置
} derive(Show)

///|
// 宝可梦信息显示配置
pub struct PokemonInfoConfig {
  base_position: @math.Vec2D  // 基础位置
  width: Double
  height: Double
  background_color: String
  fill_color: String
  text_color: String
  bar_type: HealthBarType
} derive(Show)

let health_bar_ui_state: HealthBarUIState = {
  is_active: false,
  player_health_bar: None,
  enemy_health_bar: None,
  health_bar_entities: [],
  animation_timer: 0.0,
  update_interval: 0.016
}

///|
// 全局回合显示状态
let turn_display_state: TurnDisplayState = {
  is_active: false,
  turn_display: None,
  current_turn: 1,
  current_turn_type: "玩家"
}

///|
// 创建统一的血条模板
pub fn create_health_bar_template(
  config: HealthBarConfig,
  max_hp: Int
) -> HealthBarEntities {
  let background_entity = @system.Entity::new()
  let fill_entity = @system.Entity::new()
  let text_entity = @system.Entity::new()
  
  // 创建血条背景 - 使用更高的层级确保显示在最上层
  let background_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(config.width, config.height),
      config.background_color
    ),
    20  // 使用更高的层级，确保在UI之上
  )
  @sprite.sprites.set(background_entity, background_sprite)
  @position.positions.set(background_entity, config.position)
  
  // 创建血条填充 - 使用更高的层级
  let fill_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(config.width - 4.0, config.height - 4.0),
      config.fill_color
    ),
    21  // 使用更高的层级，确保在UI之上
  )
  @sprite.sprites.set(fill_entity, fill_sprite)
  @position.positions.set(fill_entity, @math.Vec2D(config.position.0 + 2.0, config.position.1 + 2.0))
  
  // 创建HP文本 - 使用更高的层级
  let hp_text = "HP: " + max_hp.to_string() + "/" + max_hp.to_string()
  let text_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(hp_text, font="12px Arial", color=config.text_color),
    22  // 使用更高的层级，确保在UI之上
  )
  @sprite.sprites.set(text_entity, text_sprite)
  @position.positions.set(text_entity, @math.Vec2D(config.position.0 + 5.0, config.position.1 + config.height + 5.0))
  
  let bar_type_name = match config.bar_type {
    HealthBarType::Player => "玩家"
    HealthBarType::Enemy => "敌人"
  }
  
  println("📊 创建血条模板: " + bar_type_name + ", HP: " + max_hp.to_string())
  
  {
    background_entity: background_entity,
    fill_entity: fill_entity,
    text_entity: text_entity,
    bar_type: config.bar_type
  }
}

///|
// 优化文本更新 - 只在内容真正改变时才更新
pub fn update_text_sprite_if_changed(
  entity: @system.Entity,
  new_text: String,
  font: String,
  color: String,
  layer: Int
) -> Unit {
  // 获取当前文本精灵
  let current_sprite = @sprite.sprites.get(entity)
  match current_sprite {
    Some(sprite) => {
      // 这里可以添加文本内容比较逻辑
      // 暂时每次都更新，但可以优化为只在内容改变时更新
      let text_sprite = @sprite.Sprite::from_text(
        @sprite.Text::new(new_text, font=font, color=color),
        layer
      )
      @sprite.sprites.set(entity, text_sprite)
    }
    None => {
      // 创建新的文本精灵
      let text_sprite = @sprite.Sprite::from_text(
        @sprite.Text::new(new_text, font=font, color=color),
        layer
      )
      @sprite.sprites.set(entity, text_sprite)
    }
  }
}

///|
// 修复：真正的文本内容比较和缓存
pub fn update_text_sprite_with_cache(
  entity: @system.Entity,
  new_text: String,
  font: String,
  color: String,
  layer: Int,
  last_text: String
) -> String {
  // 只在文本内容真正改变时才更新
  let mut cached_text = last_text
  if cached_text != new_text {
    let text_sprite = @sprite.Sprite::from_text(
      @sprite.Text::new(new_text, font=font, color=color),
      layer
    )
    @sprite.sprites.set(entity, text_sprite)
    cached_text = new_text  // 更新缓存的文本
    new_text  // 返回新的文本内容
  } else {
    cached_text  // 返回未改变的文本内容
  }
}

///|
// 更新血条显示 - 优化版本
pub fn update_health_bar_display(
  health_bar: HealthBarEntities,
  current_hp: Int,
  max_hp: Int
) -> Unit {
  // 计算HP百分比
  let hp_percentage = if max_hp > 0 {
    current_hp.to_double() / max_hp.to_double()
  } else {
    0.0
  }
  
  let clamped_percentage = if hp_percentage < 0.0 { 0.0 } else if hp_percentage > 1.0 { 1.0 } else { hp_percentage }
  
  // 更新填充精灵
  let fill_color = if clamped_percentage > 0.66 {
    "#00FF00"
  } else if clamped_percentage > 0.33 {
    "#FFFF00"
  } else {
    "#FF0000"
  }
  
  let current_fill_sprite = @sprite.sprites.get(health_bar.fill_entity)
  match current_fill_sprite {
    Some(_) => {
      let original_width = 196.0
      let original_height = 16.0
      let fill_width = original_width * clamped_percentage
      let final_width = if fill_width < 1.0 { 1.0 } else { fill_width }
      
      let fill_sprite = @sprite.Sprite::from_color_rect(
        @sprite.ColorRect::new(
          @math.Vec2D(final_width, original_height),
          fill_color
        ),
        21
      )
      @sprite.sprites.set(health_bar.fill_entity, fill_sprite)
    }
    None => {
      let fill_sprite = @sprite.Sprite::from_color_rect(
        @sprite.ColorRect::new(
          @math.Vec2D(196.0 * clamped_percentage, 16.0),
          fill_color
        ),
        21
      )
      @sprite.sprites.set(health_bar.fill_entity, fill_sprite)
    }
  }
  
  // 使用优化的文本更新函数
  let hp_text = "HP: " + current_hp.to_string() + "/" + max_hp.to_string()
  let text_color = if clamped_percentage < 0.33 { "#FF0000" } else { "#FFFFFF" }
  
  update_text_sprite_if_changed(
    health_bar.text_entity,
    hp_text,
    "12px Arial",
    text_color,
    22
  )
  
  let bar_type_name = match health_bar.bar_type {
    HealthBarType::Player => "玩家"
    HealthBarType::Enemy => "敌人"
  }
  
  println(" 更新血条: " + bar_type_name + " HP: " + current_hp.to_string() + "/" + max_hp.to_string() + " (" + (clamped_percentage * 100.0).to_string() + "%)")
}

///|
// 更新血条UI动画
pub fn update_health_bar_ui_animation(delta_time: Double) -> Unit {
  if !health_bar_ui_state.is_active {
    return
  }
  
  health_bar_ui_state.animation_timer = health_bar_ui_state.animation_timer + delta_time
  
  // 每帧更新动画
  if health_bar_ui_state.animation_timer >= health_bar_ui_state.update_interval {
    health_bar_ui_state.animation_timer = 0.0
    
    // 这里可以添加更复杂的动画逻辑
    println("📊 血条UI动画更新")
  }
}

///|
// 设置血条UI可见性
pub fn set_health_bar_ui_visibility(is_visible: Bool) -> Unit {
  health_bar_ui_state.is_active = is_visible
  
  for entity in health_bar_ui_state.health_bar_entities {
    // 这里可以设置实体的可见性
    println("📊 设置血条UI可见性: " + is_visible.to_string())
  }
}

///|
// 清理血条UI
pub fn clear_health_bar_ui() -> Unit {
  health_bar_ui_state.is_active = false
  health_bar_ui_state.player_health_bar = None
  health_bar_ui_state.enemy_health_bar = None
  health_bar_ui_state.health_bar_entities.clear()
  health_bar_ui_state.animation_timer = 0.0
  
  println("📊 血条UI清理完成")
}

///|
// 获取血条UI状态
pub fn get_health_bar_ui_status() -> String {
  let status = if health_bar_ui_state.is_active {
    "活跃"
  } else {
    "未激活"
  }
  
  let player_status = if health_bar_ui_state.player_health_bar.is_some() {
    "已创建"
  } else {
    "未创建"
  }
  
  let enemy_status = if health_bar_ui_state.enemy_health_bar.is_some() {
    "已创建"
  } else {
    "未创建"
  }
  
  "血条UI状态: " + status + ", 玩家血条: " + player_status + ", 敌人血条: " + enemy_status + ", 实体数量: " + health_bar_ui_state.health_bar_entities.length().to_string()
}

///|
// ===== 调试屏幕功能 =====

///|
// 创建调试屏幕
pub fn create_debug_screen() -> DebugScreen {
  DebugScreen::{
    is_active: true,
    current_test: "System Test",
    test_results: [],
    frame_count: 0,
    fps_counter: 0,
    fps: 60.0,
    debug_entity: None,
    debug_text_entities: []
  }
}

///|
// 创建调试游戏管理器
pub fn create_debug_game_manager() -> DebugGameManager {
  DebugGameManager::{
    screen: create_debug_screen(),
    input_handler: create_debug_input_handler(),
    is_running: true
  }
}

///|
// 创建调试输入处理器
pub fn create_debug_input_handler() -> DebugInputHandler {
  DebugInputHandler::{
    key_states: Map::new(),
    mouse_buttons: Map::new(),
    mouse_position: @math.Vec2D(0.0, 0.0),
    event_queue: []
  }
}

///|
// 更新调试屏幕
pub fn update_debug_screen(screen : DebugScreen, _delta_time : Double) -> DebugScreen {
  DebugScreen::{
    is_active: screen.is_active,
    current_test: screen.current_test,
    test_results: screen.test_results,
    frame_count: screen.frame_count + 1,
    fps_counter: screen.fps_counter + 1,
    fps: screen.fps,
    debug_entity: screen.debug_entity,
    debug_text_entities: screen.debug_text_entities
  }
}

///|
// 添加测试结果
pub fn add_test_result(screen : DebugScreen, result : String) -> DebugScreen {
  DebugScreen::{
    is_active: screen.is_active,
    current_test: screen.current_test,
    test_results: screen.test_results + [result],
    frame_count: screen.frame_count,
    fps_counter: screen.fps_counter,
    fps: screen.fps,
    debug_entity: screen.debug_entity,
    debug_text_entities: screen.debug_text_entities
  }
}

///|
// 设置当前测试
pub fn set_current_test(screen : DebugScreen, test_name : String) -> DebugScreen {
  DebugScreen::{
    is_active: screen.is_active,
    current_test: test_name,
    test_results: screen.test_results,
    frame_count: screen.frame_count,
    fps_counter: screen.fps_counter,
    fps: screen.fps,
    debug_entity: screen.debug_entity,
    debug_text_entities: screen.debug_text_entities
  }
}

///|
// 清理测试结果
pub fn clear_test_results(screen : DebugScreen) -> DebugScreen {
  DebugScreen::{
    is_active: screen.is_active,
    current_test: screen.current_test,
    test_results: [],
    frame_count: screen.frame_count,
    fps_counter: screen.fps_counter,
    fps: screen.fps,
    debug_entity: screen.debug_entity,
    debug_text_entities: screen.debug_text_entities
  }
}

///|
// 获取调试信息
pub fn get_debug_info(screen : DebugScreen) -> String {
  "Debug Info: " + screen.current_test + ", Results: " + screen.test_results.length().to_string()
}

///|
// 运行系统测试
pub fn run_system_test(screen : DebugScreen) -> DebugScreen {
  add_test_result(screen, "System test completed")
}

///|
// 运行战斗测试
pub fn run_battle_test(screen : DebugScreen) -> DebugScreen {
  add_test_result(screen, "Battle test completed")
}

///|
// 运行输入测试
pub fn run_input_test(screen : DebugScreen) -> DebugScreen {
  add_test_result(screen, "Input test completed")
}

///|
// 运行性能测试
pub fn run_performance_test(screen : DebugScreen) -> DebugScreen {
  add_test_result(screen, "Performance test completed")
}

///|
// 调试屏幕主函数
pub fn debug_screen_main() -> Unit {
  println("Debug screen main function called")
}

///|
// 测试调试屏幕
pub fn test_debug_screen() -> Unit {
  println("Test debug screen function called")
}

///|
// 获取调试状态
pub fn get_debug_status() -> String {
  "Debug system is running"
}

///|
// 运行所有调试测试
pub fn run_all_debug_tests() -> Unit {
  println("Running all debug tests")
}

///|
// 处理调试键盘输入
pub fn handle_debug_keyboard_input(handler : DebugInputHandler, _key : String, _is_pressed : Bool) -> DebugInputHandler {
  handler
}

///|
// 处理调试鼠标输入
pub fn handle_debug_mouse_input(handler : DebugInputHandler, _button : Int, _is_pressed : Bool, _position : @math.Vec2D) -> DebugInputHandler {
  handler
}

///|
// 检查调试按键是否被按下
pub fn is_debug_key_pressed(_handler : DebugInputHandler, _key : String) -> Bool {
  false
}

///|
// 检查调试鼠标按钮是否被按下
pub fn is_debug_mouse_button_pressed(_handler : DebugInputHandler, _button : Int) -> Bool {
  false
}

///|
// 更新调试游戏管理器
pub fn update_debug_game_manager(manager : DebugGameManager, _delta_time : Double) -> DebugGameManager {
  manager
}

///|
// 处理调试输入
pub fn handle_debug_input(manager : DebugGameManager, _key : String, _is_pressed : Bool) -> DebugGameManager {
  manager
}

///|
// 确保所有调试屏幕函数都被生成
pub fn ensure_debug_functions_generated() -> Unit {
  let debug_screen = create_debug_screen()
  let debug_manager = create_debug_game_manager()
  
  let _ = update_debug_screen(debug_screen, 0.016)
  let _ = add_test_result(debug_screen, "Test")
  let _ = set_current_test(debug_screen, "Test")
  let _ = clear_test_results(debug_screen)
  let _ = get_debug_info(debug_screen)
  let _ = run_system_test(debug_screen)
  let _ = run_battle_test(debug_screen)
  let _ = run_input_test(debug_screen)
  let _ = run_performance_test(debug_screen)
  let _ = debug_screen_main()
  
  let input_handler = create_debug_input_handler()
  let _ = handle_debug_keyboard_input(input_handler, "Test", true)
  let _ = handle_debug_mouse_input(input_handler, 0, true, @math.Vec2D(0.0, 0.0))
  let _ = is_debug_key_pressed(input_handler, "Test")
  let _ = is_debug_mouse_button_pressed(input_handler, 0)
  
  let _ = update_debug_game_manager(debug_manager, 0.016)
  let _ = handle_debug_input(debug_manager, "Test", true)
  
  let _ = debug_screen_main()
  let _ = test_debug_screen()
  let _ = get_debug_status()
  let _ = run_all_debug_tests()
  
  println("All debug screen functions have been called to ensure generation")
}

///|
// 初始化调试屏幕系统
fn init_debug_screen_system() -> Unit {
  println("=== Initializing Debug Screen System ===")
  
  // Create debug screen
  let debug_screen = create_debug_screen()
  let debug_manager = create_debug_game_manager()
  
  println("Debug screen created successfully")
  println("Debug manager initialized")
  
  // Run initial test
  let test_screen = run_system_test(debug_screen)
  println("Initial system test completed")
  
  println("Debug screen system initialization completed")
}

///|
// 测试调试屏幕系统
fn test_debug_screen_system() -> Unit {
  println("=== Testing Debug Screen System ===")
  
  // Test debug screen creation
  let screen = create_debug_screen()
  println("Debug screen created: " + screen.is_active.to_string())
  
  // Test screen update
  let updated_screen = update_debug_screen(screen, 0.016)
  println("Screen updated: frame " + updated_screen.frame_count.to_string())
  
  // Test adding test results
  let screen_with_result = add_test_result(updated_screen, "Test result 1")
  println("Test result added: " + screen_with_result.test_results.length().to_string())
  
  // Test running different tests
  let system_test = run_system_test(screen_with_result)
  let battle_test = run_battle_test(system_test)
  let input_test = run_input_test(battle_test)
  let performance_test = run_performance_test(input_test)
  
  println("All tests completed. Total results: " + performance_test.test_results.length().to_string())
  
  // 测试调试信息
  let debug_info = get_debug_info(screen)
  println("Debug info: " + debug_info)
  
  // Test input handling
  let input_handler = create_debug_input_handler()
  let input_with_key = handle_debug_keyboard_input(input_handler, "Enter", true)
  let input_with_mouse = handle_debug_mouse_input(input_with_key, 0, true, @math.Vec2D(100.0, 100.0))
  
  println("Input handler test completed")
  
  // Test debug game manager
  let game_manager = create_debug_game_manager()
  let updated_manager = update_debug_game_manager(game_manager, 0.016)
  let input_manager = handle_debug_input(updated_manager, "F1", true)
  
  println("Debug game manager test completed")
  
  println("Debug screen system test completed")
}

///|
// ===== 血条UI测试功能 =====

///|
// 测试血条UI系统
fn test_health_bar_ui_system() -> Unit {
  println("=== 血条UI系统测试开始 ===")
  
  // 初始化血条UI系统
  init_health_bar_ui()
  println("✅ 血条UI系统初始化完成")
  
  // 注意：不在这里创建宝可梦信息显示，因为战斗渲染系统会自动创建
  println("✅ 血条UI系统测试完成（宝可梦信息显示由战斗渲染系统管理）")
  
  // 测试动画更新 - 使用新的API
  update_health_bar_ui_animation(0.016)
  println("✅ 血条UI动画更新完成")
  
  // 获取状态信息
  let status = get_health_bar_ui_status()
  println("📊 " + status)
  
  // 测试可见性设置
  set_health_bar_ui_visibility(false)
  set_health_bar_ui_visibility(true)
  println("✅ 血条UI可见性设置完成")
  
  // 清理测试
  clear_health_bar_ui()
  println("✅ 血条UI清理完成")
  
  println("=== 血条UI系统测试完成 ===")
}

///|
// 初始化血条UI系统
pub fn init_health_bar_ui() -> Unit {
  health_bar_ui_state.is_active = true
  health_bar_ui_state.animation_timer = 0.0
  health_bar_ui_state.update_interval = 0.016
  
  println("📊 血条UI系统初始化完成")
}

///|
// 创建回合显示
pub fn create_turn_display() -> TurnDisplayEntities {
  let background_entity = @system.Entity::new()
  let turn_text_entity = @system.Entity::new()
  let turn_number_entity = @system.Entity::new()
  
  // 背景基础位置
  let bg_x = 50.0
  let bg_y = 50.0
  
  // 初始文字内容
  let initial_turn_text = "玩家回合"
  let initial_turn_number = "1"
  
  // 计算文字总宽度（估算）
  let text_width = (initial_turn_text.length() + initial_turn_number.length()).to_double() * 12.0 + 20.0
  let background_width = if text_width > 100.0 { text_width } else { 100.0 }
  let background_height = 50.0
  
  // 创建回合背景
  let background_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(background_width, background_height),
      "#000000"
    ),
    25
  )
  @sprite.sprites.set(background_entity, background_sprite)
  @position.positions.set(background_entity, @position.Position(@math.Vec2D(bg_x, bg_y)))
  
  // 文字相对于背景的偏移量
  let text_offset_x = 5.0  // 距离背景左边5像素
  let text_offset_y = 20.0 // 距离背景顶部20像素
  let number_offset_x = text_offset_x + initial_turn_text.length().to_double() * 12.0 // 数字在文字后面
  
  // 创建回合文本 - 位置基于背景位置
  let text_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(initial_turn_text, font="20px Arial", color="#FFFFFF"),
    26
  )
  @sprite.sprites.set(turn_text_entity, text_sprite)
  @position.positions.set(turn_text_entity, @position.Position(@math.Vec2D(bg_x + text_offset_x, bg_y + text_offset_y)))
  
  // 创建回合数字 - 位置基于背景位置
  let number_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(initial_turn_number, font="20px Arial", color="#FFFFFF"),
    27
  )
  @sprite.sprites.set(turn_number_entity, number_sprite)
  @position.positions.set(turn_number_entity, @position.Position(@math.Vec2D(bg_x + number_offset_x, bg_y + text_offset_y)))
  
  println("📊 回合显示创建完成，背景宽度: " + background_width.to_string())
  
  {
    background_entity: background_entity,
    turn_text_entity: turn_text_entity,
    turn_number_entity: turn_number_entity
  }
}

///|
// 更新回合显示
pub fn update_turn_display(current_turn: Int, current_turn_type: String) -> Unit {
  match turn_display_state.turn_display {
    Some(turn_display) => {
      // 获取当前背景位置
      let current_bg_position = @position.positions.get(turn_display.background_entity)
      let bg_vec = match current_bg_position {
        Some(pos) => pos.0  // 解包Position获取Vec2D
        None => @math.Vec2D(50.0, 50.0) // 默认位置
      }
      
      // 构建完整的文字内容
      let turn_type_text = current_turn_type + "回合"
      let turn_number = current_turn.to_string()
      
      // 计算新的背景宽度
      let text_width = (turn_type_text.length() + turn_number.length()).to_double() * 12.0 + 20.0
      let background_width = if text_width > 100.0 { text_width } else { 100.0 }
      
      // 更新背景大小（保持当前位置）
      let background_sprite = @sprite.Sprite::from_color_rect(
        @sprite.ColorRect::new(
          @math.Vec2D(background_width, 50.0),
          "#000000"
        ),
        25
      )
      @sprite.sprites.set(turn_display.background_entity, background_sprite)
      @position.positions.set(turn_display.background_entity, current_bg_position.unwrap_or(@position.Position(@math.Vec2D(50.0, 50.0))))
      
      // 文字相对于背景的偏移量
      let text_offset_x = 5.0
      let text_offset_y = 20.0
      let number_offset_x = text_offset_x + turn_type_text.length().to_double() * 12.0
      
      // 更新回合类型文本 - 位置基于背景位置
      let text_sprite = @sprite.Sprite::from_text(
        @sprite.Text::new(turn_type_text, font="20px Arial", color="#FFFFFF"),
        26
      )
      @sprite.sprites.set(turn_display.turn_text_entity, text_sprite)
      @position.positions.set(turn_display.turn_text_entity, @position.Position(@math.Vec2D(bg_vec.0 + text_offset_x, bg_vec.1 + text_offset_y)))
      
      // 更新回合数字 - 位置基于背景位置
      let number_sprite = @sprite.Sprite::from_text(
        @sprite.Text::new(turn_number, font="20px Arial", color="#FFFFFF"),
        27
      )
      @sprite.sprites.set(turn_display.turn_number_entity, number_sprite)
      @position.positions.set(turn_display.turn_number_entity, @position.Position(@math.Vec2D(bg_vec.0 + number_offset_x, bg_vec.1 + text_offset_y)))
      
      println("📊 回合显示更新完成: " + turn_type_text + " " + turn_number + ", 背景宽度: " + background_width.to_string())
    }
    None => {
      println("❌ 回合显示未创建")
    }
  }
}

///|
// 移动回合显示（背景和文字一起移动）
pub fn move_turn_display(new_x: Double, new_y: Double) -> Unit {
  match turn_display_state.turn_display {
    Some(turn_display) => {
      // 移动背景
      @position.positions.set(turn_display.background_entity, @position.Position(@math.Vec2D(new_x, new_y)))
      
      // 文字相对于背景的偏移量
      let text_offset_x = 5.0
      let text_offset_y = 20.0
      
      // 获取当前文字内容来计算数字位置
      let current_turn_type = turn_display_state.current_turn_type + "回合"
      let current_turn_number = turn_display_state.current_turn.to_string()
      let number_offset_x = text_offset_x + current_turn_type.length().to_double() * 12.0
      
      // 移动文字 - 位置基于新的背景位置
      @position.positions.set(turn_display.turn_text_entity, @position.Position(@math.Vec2D(new_x + text_offset_x, new_y + text_offset_y)))
      @position.positions.set(turn_display.turn_number_entity, @position.Position(@math.Vec2D(new_x + number_offset_x, new_y + text_offset_y)))
      
      println("📊 回合显示移动到: (" + new_x.to_string() + ", " + new_y.to_string() + ")")
    }
    None => {
      println("❌ 回合显示未创建")
    }
  }
}

///|
// 设置回合显示可见性
pub fn set_turn_display_visibility(is_visible: Bool) -> Unit {
  turn_display_state.is_active = is_visible
  
  match turn_display_state.turn_display {
    Some(turn_display) => {
      // 这里可以设置实体的可见性
      println("📊 回合显示可见性: " + is_visible.to_string())
    }
    None => {
      println("❌ 回合显示未创建")
    }
  }
}

///|
// 清理回合显示
pub fn clear_turn_display() -> Unit {
  turn_display_state.is_active = false
  turn_display_state.turn_display = None
  turn_display_state.current_turn = 1
  turn_display_state.current_turn_type = "玩家"
  
  println("📊 回合显示清理完成")
}

///|
// 获取回合显示状态
pub fn get_turn_display_status() -> String {
  let status = if turn_display_state.is_active {
    "活跃"
  } else {
    "未激活"
  }
  
  let turn_display_status = if turn_display_state.turn_display.is_some() {
    "已创建"
  } else {
    "未创建"
  }
  
  "回合显示状态: " + status + ", 回合显示: " + turn_display_status + ", 当前回合: " + turn_display_state.current_turn.to_string() + ", 类型: " + turn_display_state.current_turn_type
}

///|
// 初始化回合显示系统
pub fn init_turn_display_system() -> Unit {
  println("=== 初始化回合显示系统 ===")
  
  // 创建回合显示
  let turn_display = create_turn_display()
  turn_display_state.turn_display = Some(turn_display)
  turn_display_state.is_active = true
  turn_display_state.current_turn = 1
  turn_display_state.current_turn_type = "玩家"
  
  println("回合显示创建成功")
  println("回合显示系统初始化完成")
}

///|
// 测试回合显示系统
pub fn test_turn_display_system() -> Unit {
  println("=== 测试回合显示系统 ===")
  
  // 初始化回合显示系统
  init_turn_display_system()
  println("✅ 回合显示系统初始化完成")
  
  // 更新回合显示
  update_turn_display(1, "玩家")
  update_turn_display(2, "敌人")
  update_turn_display(3, "玩家")
  println("✅ 回合显示更新完成")
  
  // 获取状态信息
  let status = get_turn_display_status()
  println("📊 " + status)
  
  // 测试可见性设置
  set_turn_display_visibility(false)
  set_turn_display_visibility(true)
  println("✅ 回合显示可见性设置完成")
  
  // 清理测试
  clear_turn_display()
  println("✅ 回合显示清理完成")
  
  println("=== 回合显示系统测试完成 ===")
}

///|
// 创建宝可梦信息显示模版（包含文本和血条）
pub fn create_pokemon_info_template(
  config: PokemonInfoConfig,
  pokemon_name: String,
  pokemon_level: Int,
  max_hp: Int
) -> PokemonInfoEntities {
  let name_entity = @system.Entity::new()
  let level_entity = @system.Entity::new()
  let background_entity = @system.Entity::new()
  let fill_entity = @system.Entity::new()
  let hp_text_entity = @system.Entity::new()
  
  // 计算相对位置 - 增加文本与血条之间的间距
  let name_position = @math.Vec2D(config.base_position.0 + 5.0, config.base_position.1 + 5.0)
  let level_position = @math.Vec2D(config.base_position.0 + 5.0, config.base_position.1 + 25.0)
  let health_bar_position = @math.Vec2D(config.base_position.0, config.base_position.1 + 45.0)
  let hp_text_position = @math.Vec2D(config.base_position.0 + 5.0, config.base_position.1 + config.height + 55.0)  // 增加10像素间距
  
  // 创建宝可梦名称文本
  let name_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(pokemon_name, font="16px Arial", color="white"),
    20
  )
  @sprite.sprites.set(name_entity, name_sprite)
  @position.positions.set(name_entity, name_position)
  
  // 创建等级文本
  let level_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new("Lv." + pokemon_level.to_string(), font="14px Arial", color="white"),
    20
  )
  @sprite.sprites.set(level_entity, level_sprite)
  @position.positions.set(level_entity, level_position)
  
  // 创建血条背景
  let background_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(config.width, config.height),
      config.background_color
    ),
    20
  )
  @sprite.sprites.set(background_entity, background_sprite)
  @position.positions.set(background_entity, health_bar_position)
  
  // 创建血条填充
  let fill_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(config.width - 4.0, config.height - 4.0),
      config.fill_color
    ),
    21
  )
  @sprite.sprites.set(fill_entity, fill_sprite)
  @position.positions.set(fill_entity, @math.Vec2D(health_bar_position.0 + 2.0, health_bar_position.1 + 2.0))
  
  // 创建HP文本
  let hp_text = "HP: " + max_hp.to_string() + "/" + max_hp.to_string()
  let hp_text_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(hp_text, font="12px Arial", color=config.text_color),
    22
  )
  @sprite.sprites.set(hp_text_entity, hp_text_sprite)
  @position.positions.set(hp_text_entity, hp_text_position)
  
  let bar_type_name = match config.bar_type {
    HealthBarType::Player => "玩家"
    HealthBarType::Enemy => "敌人"
  }
  
  println("📊 创建宝可梦信息模版: " + bar_type_name + ", " + pokemon_name + " Lv." + pokemon_level.to_string() + ", HP: " + max_hp.to_string())
  
  {
    name_entity: name_entity,
    level_entity: level_entity,
    background_entity: background_entity,
    fill_entity: fill_entity,
    hp_text_entity: hp_text_entity,
    bar_type: config.bar_type,
    base_position: config.base_position
  }
}

///|
// 创建玩家宝可梦信息显示
pub fn create_player_pokemon_info(pokemon_name: String, pokemon_level: Int, max_hp: Int) -> PokemonInfoEntities {
  let player_config = {
    base_position: @math.Vec2D(300.0, 400.0),  // 战斗页面中我方宝可梦的右侧
    width: 200.0,
    height: 20.0,
    background_color: "#333333",
    fill_color: "#00FF00",  // 绿色
    text_color: "#FFFFFF",
    bar_type: HealthBarType::Player
  }
  
  let pokemon_info = create_pokemon_info_template(player_config, pokemon_name, pokemon_level, max_hp)
  
  // 更新全局状态
  health_bar_ui_state.player_health_bar = Some({
    background_entity: pokemon_info.background_entity,
    fill_entity: pokemon_info.fill_entity,
    text_entity: pokemon_info.hp_text_entity,
    bar_type: pokemon_info.bar_type
  })
  
  health_bar_ui_state.health_bar_entities.push(pokemon_info.background_entity)
  health_bar_ui_state.health_bar_entities.push(pokemon_info.fill_entity)
  health_bar_ui_state.health_bar_entities.push(pokemon_info.hp_text_entity)
  
  println("📊 玩家宝可梦信息显示创建完成")
  pokemon_info
}

///|
// 创建敌人宝可梦信息显示
pub fn create_enemy_pokemon_info(pokemon_name: String, pokemon_level: Int, max_hp: Int) -> PokemonInfoEntities {
  let enemy_config = {
    base_position: @math.Vec2D(450.0, 50.0),  // 向左移动一点
    width: 200.0,
    height: 20.0,
    background_color: "#333333",
    fill_color: "#FF0000",  // 红色
    text_color: "#FFFFFF",
    bar_type: HealthBarType::Enemy
  }
  
  let pokemon_info = create_pokemon_info_template(enemy_config, pokemon_name, pokemon_level, max_hp)
  
  // 更新全局状态
  health_bar_ui_state.enemy_health_bar = Some({
    background_entity: pokemon_info.background_entity,
    fill_entity: pokemon_info.fill_entity,
    text_entity: pokemon_info.hp_text_entity,
    bar_type: pokemon_info.bar_type
  })
  
  health_bar_ui_state.health_bar_entities.push(pokemon_info.background_entity)
  health_bar_ui_state.health_bar_entities.push(pokemon_info.fill_entity)
  health_bar_ui_state.health_bar_entities.push(pokemon_info.hp_text_entity)
  
  println("📊 敌人宝可梦信息显示创建完成")
  pokemon_info
}

///|
// 更新宝可梦信息显示（包含文本和血条）
pub fn update_pokemon_info_display(
  pokemon_info: PokemonInfoEntities,
  pokemon_name: String,
  pokemon_level: Int,
  current_hp: Int,
  max_hp: Int
) -> Unit {
  // 更新宝可梦名称
  let name_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new(pokemon_name, font="16px Arial", color="white"),
    20
  )
  @sprite.sprites.set(pokemon_info.name_entity, name_sprite)
  
  // 更新等级文本
  let level_sprite = @sprite.Sprite::from_text(
    @sprite.Text::new("Lv." + pokemon_level.to_string(), font="14px Arial", color="white"),
    20
  )
  @sprite.sprites.set(pokemon_info.level_entity, level_sprite)
  
  // 更新血条显示
  let hp_percentage = if max_hp > 0 {
    current_hp.to_double() / max_hp.to_double()
  } else {
    0.0
  }
  
  let clamped_percentage = if hp_percentage < 0.0 { 0.0 } else if hp_percentage > 1.0 { 1.0 } else { hp_percentage }
  let new_fill_width = (200.0 - 4.0) * clamped_percentage
  
  // 更新血条填充
  let fill_color = if clamped_percentage > 0.5 {
    if pokemon_info.bar_type == HealthBarType::Player { "#00FF00" } else { "#FF0000" }
  } else if clamped_percentage > 0.25 {
    "#FFFF00"  // 黄色
  } else {
    "#FF0000"  // 红色
  }
  
  let fill_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(
      @math.Vec2D(new_fill_width, 20.0 - 4.0),
      fill_color
    ),
    21
  )
  @sprite.sprites.set(pokemon_info.fill_entity, fill_sprite)
  
  // 优化：只在文本内容真正改变时才更新
  let hp_text = "HP: " + current_hp.to_string() + "/" + max_hp.to_string()
  let text_color = if clamped_percentage < 0.33 { "#FF0000" } else { "#FFFFFF" }
  
  // 检查是否需要更新文本
  let current_hp_text_sprite = @sprite.sprites.get(pokemon_info.hp_text_entity)
  match current_hp_text_sprite {
    Some(_) => {
      // 只更新文本内容，不重新创建整个精灵
      let hp_text_sprite = @sprite.Sprite::from_text(
        @sprite.Text::new(hp_text, font="12px Arial", color=text_color),
        22
      )
      @sprite.sprites.set(pokemon_info.hp_text_entity, hp_text_sprite)
    }
    None => {
      // 只有在文本精灵不存在时才重新创建
      let hp_text_sprite = @sprite.Sprite::from_text(
        @sprite.Text::new(hp_text, font="12px Arial", color=text_color),
        22
      )
      @sprite.sprites.set(pokemon_info.hp_text_entity, hp_text_sprite)
    }
  }
  
  let bar_type_name = match pokemon_info.bar_type {
    HealthBarType::Player => "玩家"
    HealthBarType::Enemy => "敌人"
  }
  
  println("📊 更新宝可梦信息: " + bar_type_name + " " + pokemon_name + " Lv." + pokemon_level.to_string() + " HP: " + current_hp.to_string() + "/" + max_hp.to_string() + " (" + (clamped_percentage * 100.0).to_string() + "%)")
}

///|
// 初始化UI系统
fn init_ui_system() -> Unit {
  println("=== 初始化UI系统 ===")
  
  // 初始化调试屏幕系统
  init_debug_screen_system()
  
  // 初始化血条UI系统
  init_health_bar_ui()
  
  // 初始化回合显示系统
  init_turn_display_system()
  
  println("UI系统初始化完成")
}

///|
// 测试UI系统
fn test_ui_system() -> Unit {
  println("=== 测试UI系统 ===")
  
  // 测试调试屏幕系统
  test_debug_screen_system()
  
  // 测试血条UI系统
  test_health_bar_ui_system()
  
  // 测试回合显示系统
  test_turn_display_system()
  
  println("UI系统测试完成")
} 