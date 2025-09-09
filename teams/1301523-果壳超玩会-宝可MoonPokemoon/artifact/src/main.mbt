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

// 导入整合后的模块
// 注意：现在使用整合后的模块，减少模块间干扰

///|
// Pokemon Moon - Main Module
// 主游戏模块，创建@system.App并集成所有系统
// 注意：类型定义和核心函数已移至 game_core.mbt

///|
// Predefined Move Data (注释掉未定义的类型)
// let moves_data : Array[Move] = [
//   Move::{
//     name: "Tackle",
//     power: 40,
//     accuracy: 100,
//     move_type: MoveType::Physical,
//     element_type: "Normal",
//     pp: 35,
//     max_pp: 35
//   },
//   Move::{
//     name: "Ember",
//     power: 40,
//     accuracy: 100,
//     move_type: MoveType::Special,
//     element_type: "Fire",
//     pp: 25,
//     max_pp: 25
//   },
//   Move::{
//     name: "Thunder",
//     power: 110,
//     accuracy: 70,
//     move_type: MoveType::Special,
//     element_type: "Electric",
//     pp: 10,
//     max_pp: 10
//   },
//   Move::{
//     name: "Hyper Beam",
//     power: 150,
//     accuracy: 90,
//     move_type: MoveType::Special,
//     element_type: "Normal",
//     pp: 5,
//     max_pp: 5
//   },
//   Move::{
//     name: "Thunder Shock",
//     power: 40,
//     accuracy: 100,
//     move_type: MoveType::Special,
//     element_type: "Electric",
//     pp: 30,
//     max_pp: 30
//   },
//   Move::{
//     name: "Quick Attack",
//     power: 40,
//     accuracy: 100,
//     move_type: MoveType::Physical,
//     element_type: "Normal",
//     pp: 30,
//     max_pp: 30
//   },
//   Move::{
//     name: "Thunderbolt",
//     power: 90,
//     accuracy: 100,
//     move_type: MoveType::Special,
//     element_type: "Electric",
//     pp: 15,
//     max_pp: 15
//   }
// ]

///|
// 主函数 - 创建真正的游戏应用
fn main {
  println("Pokemon Moon - Pokemon Game")
  println("RPG game based on MoonBit and HTML")
  
  // 测试宝可梦数据读取器
  test_pokemon_data_reader()
  
  // 创建游戏应用 - 使用正确的语法
  @system.App::new(@canvas.CanvasBackend::new())
    .with_canvas_width(800.0)
    .with_canvas_height(600.0)
    .with_fps(60)
    .add_plugin(@plugins.default_plugin)
    .add_system(game_start_system, schedule=Startup)
    .add_system(battle_system_fn)
    .add_system(input_system)
    .add_system(battle_input_system)
    .add_system(health_bar_ui_system)
    .run()
  
  println("Game initialization completed!")
}

///|
// 游戏启动系统
fn game_start_system(_backend : &@system.Backend) -> Unit {
  println("=== Pokemon Moon Game Starting ===")
  restart_game_with_enemy("Java咖啡杯")
  // 初始化各种系统
  init_battle_system()
  init_pokemon_system()
  init_event_system()
  init_game_core()
  init_input_handler()
  init_debug_screen_system()
  
  // 初始化血条UI系统
  init_health_bar_ui()
  
  // 初始化回合显示系统
  init_turn_display_system()
  
  // 初始化战斗渲染系统
  init_battle_render_system()
  
  // 开始测试战斗
  start_test_battle()
  
  println("All game systems initialized!")
}

///|
// 输入系统
fn input_system(_backend : &@system.Backend) -> Unit {
  // 处理全局输入
  // 这里可以添加菜单导航、快捷键等
}

///|
// 战斗输入系统
fn battle_input_system(_backend : &@system.Backend) -> Unit {
  // 只有在玩家回合时才处理输入
  if !is_player_turn() {
    return
  }
  
  // 检查是否可以行动
  if !can_act() {
    return
  }
  
  // 直接调用战斗系统的输入处理函数
  handle_battle_input()
}

///|
// System initialization functions
fn init_battle_system() -> Unit {
  println("Battle system initialization completed")
}

fn init_pokemon_system() -> Unit {
  println("Pokemon system initialization completed")
}

fn init_event_system() -> Unit {
  println("Event system initialization completed")
}

fn init_game_core() -> Unit {
  println("Game core initialization completed")
}

fn init_input_handler() -> Unit {
  println("🎮 输入处理器已初始化")
}

///|
// 初始化技能系统
fn init_skills() -> Unit {
  println("⚔️ 初始化技能系统...")
  
  // 初始化预定义技能数据
  // 这里可以添加技能数据的初始化逻辑
  
  // 初始化技能菜单
  // 这里可以调用技能菜单的初始化函数
  
  // 初始化技能动画系统
  // 这里可以调用技能动画的初始化函数
  
  println("✅ 技能系统初始化完成")
}

///|
// 注意：这些函数已在 game_core.mbt 中定义，这里不再重复定义

// Test input handler functionality
fn test_input_handler() -> Unit {
  println("=== Testing input handler system ===")
  
  // Test key states
  let _ = is_key_pressed("Enter")
  let _ = is_key_held("Space")
  
  // Test mouse functions
  let _ = is_mouse_button_pressed(MouseButton::Left)
  // 注释掉未定义的函数调用
  // let _ = get_mouse_position()
  
  // Test input handler state
  let _ = get_event_queue_length()
  
  // Test input callbacks
  set_key_press_callback(fn(key: String) -> Unit {
    println("Key pressed: " + key)
  })
  
  set_mouse_click_callback(fn(button: String) -> Unit {
    println("Mouse clicked: " + button)
  })
  
  set_touch_gesture_callback(fn(gesture: String) -> Unit {
    println("Touch gesture: " + gesture)
  })
  
  // Test input handling
  handle_keyboard_input("Enter", true)
  handle_mouse_input(MouseButton::Left, true, @math.Vec2D(100.0, 100.0))
  
  println("Input handler system test completed")
}

// 注意：这些函数已在 game_core.mbt 中定义，这里不再重复定义

// 注意：这些函数已在 ui_system.mbt 中定义，这里不再重复定义

///|
// 开始测试战斗
fn start_test_battle() -> Unit {
  println("⚔️ 开始测试战斗...")
  
  // 初始化血条UI系统
  init_health_bar_ui()
  
  // 使用编程语言宝可梦数据库
  let db = create_pokemon_database()
  let player_pokemon = match find_pokemon_by_name(db, "Moonbit月兔") {
    Some(pokemon) => pokemon
    None => {
      println("❌ 数据库中没有找到该pokemoon，使用默认配置")
      create_pokemon("Python蟒蛇", 8, [Grass, Dragon])
    }
  }
  let enemy_pokemon = match find_pokemon_by_name(db, "Java咖啡杯") {
    Some(pokemon) => pokemon
    None => {
      println("❌ 数据库中没有找到该pokemon，使用默认配置")
      create_pokemon("Java咖啡杯", 7, [Fire, Steel])
    }
  }
  // 注意：不在这里创建宝可梦信息显示，战斗渲染系统会自动创建
  // 开始战斗渲染
  start_battle_render(player_pokemon, enemy_pokemon)
  
  println("✅ 测试战斗开始，宝可梦信息显示由战斗渲染系统管理")
  println("📊 血条状态: " + get_health_bar_ui_status())
}

///|
// 重启游戏并选择特定对手
pub fn restart_game_with_enemy(enemy_pokemon_name: String) -> Unit {
  println("🔄 重启游戏，选择对手: " + enemy_pokemon_name)
  
  // 清理当前战斗状态和所有UI实体
  reset_battle_render_state()
  
  // 重新初始化血条UI系统
  init_health_bar_ui()
  
  // 使用编程语言宝可梦数据库
  let db = create_pokemon_database()
  
  // 玩家始终使用Moonbit月兔
  let player_pokemon = match find_pokemon_by_name(db, "Moonbit月兔") {
    Some(pokemon) => pokemon
    None => {
      println("❌ 数据库中没有找到Moonbit月兔，使用默认配置")
      create_pokemon("Moonbit月兔", 10, [Psychic, Fairy])
    }
  }
  
  // 根据传入的名称选择对手
  let enemy_pokemon = match find_pokemon_by_name(db, enemy_pokemon_name) {
    Some(pokemon) => pokemon
    None => {
      println("❌ 数据库中没有找到" + enemy_pokemon_name + "，使用默认配置")
      create_pokemon("Java咖啡杯", 7, [Fire, Steel])
    }
  }
  
  // 重新开始战斗渲染
  start_battle_render(player_pokemon, enemy_pokemon)
  
  println("✅ 游戏重启完成，对手: " + enemy_pokemon_name)
  println("📊 血条状态: " + get_health_bar_ui_status())
}

///|
// 重置战斗状态
fn reset_battle_render_state() -> Unit {
  println("🧹 重置战斗状态...")
  
  // 清理现有的宝可梦信息显示实体
  clear_pokemon_info_entities()
  
  // 清理血条UI实体
  clear_health_bar_entities()
  
  // 重置战斗渲染状态
  battle_render_state.skill_menu_visible = false
  battle_render_state.skill_menu_selected = 0
  battle_render_state.current_player_pokemon = None
  battle_render_state.current_enemy_pokemon = None
  battle_render_state.battle_state = None
  battle_render_state.player_pokemon_info = None
  battle_render_state.enemy_pokemon_info = None
  
  println("✅ 战斗状态重置完成")
}

///|
// 清理宝可梦信息显示实体
fn clear_pokemon_info_entities() -> Unit {
  println("🧹 清理宝可梦信息显示实体...")
  
  // 清理玩家宝可梦信息实体
  match battle_render_state.player_pokemon_info {
    Some(pokemon_info) => {
      @sprite.sprites.remove(pokemon_info.name_entity)
      @position.positions.remove(pokemon_info.name_entity)
      @sprite.sprites.remove(pokemon_info.level_entity)
      @position.positions.remove(pokemon_info.level_entity)
      @sprite.sprites.remove(pokemon_info.background_entity)
      @position.positions.remove(pokemon_info.background_entity)
      @sprite.sprites.remove(pokemon_info.fill_entity)
      @position.positions.remove(pokemon_info.fill_entity)
      @sprite.sprites.remove(pokemon_info.hp_text_entity)
      @position.positions.remove(pokemon_info.hp_text_entity)
      println("✅ 玩家宝可梦信息实体已清理")
    }
    None => ()
  }
  
  // 清理敌方宝可梦信息实体
  match battle_render_state.enemy_pokemon_info {
    Some(pokemon_info) => {
      @sprite.sprites.remove(pokemon_info.name_entity)
      @position.positions.remove(pokemon_info.name_entity)
      @sprite.sprites.remove(pokemon_info.level_entity)
      @position.positions.remove(pokemon_info.level_entity)
      @sprite.sprites.remove(pokemon_info.background_entity)
      @position.positions.remove(pokemon_info.background_entity)
      @sprite.sprites.remove(pokemon_info.fill_entity)
      @position.positions.remove(pokemon_info.fill_entity)
      @sprite.sprites.remove(pokemon_info.hp_text_entity)
      @position.positions.remove(pokemon_info.hp_text_entity)
      println("✅ 敌方宝可梦信息实体已清理")
    }
    None => ()
  }
  
  // 清理宝可梦精灵实体
  @sprite.sprites.remove(battle_render_state.player_pokemon_entity)
  @position.positions.remove(battle_render_state.player_pokemon_entity)
  @sprite.sprites.remove(battle_render_state.enemy_pokemon_entity)
  @position.positions.remove(battle_render_state.enemy_pokemon_entity)
  
  println("✅ 宝可梦信息显示实体清理完成")
}

///|
// 清理血条UI实体
fn clear_health_bar_entities() -> Unit {
  println("🧹 清理血条UI实体...")
  
  // 清理血条UI状态中的所有实体
  for entity in health_bar_ui_state.health_bar_entities {
    @sprite.sprites.remove(entity)
    @position.positions.remove(entity)
  }
  
  // 清空实体数组
  health_bar_ui_state.health_bar_entities = []
  
  // 重置血条UI状态
  health_bar_ui_state.is_active = false
  health_bar_ui_state.player_health_bar = None
  health_bar_ui_state.enemy_health_bar = None
  health_bar_ui_state.animation_timer = 0.0
  
  println("✅ 血条UI实体清理完成")
}

///|
// 血条UI系统 - 在系统循环中调用
fn health_bar_ui_system(backend : &@system.Backend) -> Unit {
  // 只在血条UI激活且需要更新时才执行
  if health_bar_ui_state.is_active {
    // 检查是否有血条需要动画更新
    if health_bar_ui_state.animation_timer > 0.0 {
      update_health_bar_ui_animation(0.016)
    }
    
    // 渲染血条UI实体
    for entity in health_bar_ui_state.health_bar_entities {
      // 确保实体被正确渲染
      let sprite = @sprite.sprites.get(entity)
      let position = @position.positions.get(entity)
      let ui = @ui.uis.get(entity)
      
      if sprite.is_some() && position.is_some() && ui.is_some() {
        // 实体已经正确设置，会被渲染系统自动处理
        // 这里可以添加额外的渲染逻辑
      }
    }
  }
}

///|
// 测试宝可梦数据读取器
fn test_pokemon_data_reader() -> Unit {
  println("=== 测试宝可梦数据读取器 ===")
  
  // 直接调用内存中的宝可梦数据测试函数
  test_and_print_pokemon_data()
  
  println("=== 宝可梦数据读取器测试完成 ===")
}


