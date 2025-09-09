// Copyright 2025 International Digital Economy Academy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the Apache License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

///|
// 血条组件结构
struct HealthBar {
  // 血条属性
  mut width: Double
  mut height: Double
  mut current_hp: Int
  mut max_hp: Int
  
  // 位置信息
  mut x: Double
  mut y: Double
  
  // 颜色配置
  mut background_color: String
  mut fill_color: String
  mut text_color: String
  
  // 动画状态
  mut is_animating: Bool
  mut target_width: Double
  animation_speed: Double
  
  // 显示状态
  mut is_visible: Bool
}

///|
// 简化的Pokemon结构
struct SimplePokemon {
  name: String
  hp: Int
  max_hp: Int
  level: Int
}

///|
// 血条管理器结构
struct HealthBarManager {
  // 血条映射
  mut health_bars: Map[String, HealthBar]
  
  // 配置
  default_width: Double
  default_height: Double
  animation_speed: Double
  
  // 状态
  mut is_active: Bool
  mut total_bars: Int
}

///|
// 全局血条管理器实例
let health_bar_manager: HealthBarManager = {
  health_bars: Map::new(),
  default_width: 300.0,
  default_height: 25.0,
  animation_speed: 2.0,
  is_active: false,
  total_bars: 0
}

///|
// 创建血条组件
fn create_health_bar(
  x: Double,
  y: Double,
  width: Double,
  height: Double,
  max_hp: Int,
  is_player: Bool
) -> HealthBar {
  // 根据是否为玩家设置不同颜色
  let (background_color, fill_color, text_color) = if is_player {
    ("#444444", "#00FF00", "#FFFFFF")
  } else {
    ("#444444", "#FF0000", "#FFFFFF")
  }
  
  // 返回血条组件
  {
    width: width,
    height: height,
    current_hp: max_hp,
    max_hp: max_hp,
    x: x,
    y: y,
    background_color: background_color,
    fill_color: fill_color,
    text_color: text_color,
    is_animating: false,
    target_width: width - 4.0,
    animation_speed: 2.0,
    is_visible: true
  }
}

///|
// 更新血条显示
fn update_health_bar(health_bar: HealthBar, current_hp: Int, max_hp: Int) -> HealthBar {
  let updated_bar = health_bar
  updated_bar.current_hp = current_hp
  updated_bar.max_hp = max_hp
  
  // 计算HP百分比
  let hp_percentage = if max_hp > 0 {
    current_hp.to_double() / max_hp.to_double()
  } else {
    0.0
  }
  
  // 计算新的填充宽度
  let new_fill_width = (health_bar.width - 4.0) * hp_percentage
  updated_bar.target_width = new_fill_width
  
  // 根据HP百分比确定颜色
  let new_fill_color = if hp_percentage > 0.5 {
    health_bar.fill_color
  } else if hp_percentage > 0.25 {
    "#FFFF00"  // 黄色
  } else {
    "#FF0000"  // 红色
  }
  
  updated_bar.fill_color = new_fill_color
  
  // 更新文本颜色
  let new_text_color = if hp_percentage < 0.3 {
    "#FF0000"  // 红色文本
  } else {
    health_bar.text_color
  }
  
  updated_bar.text_color = new_text_color
  
  // 标记为动画状态
  updated_bar.is_animating = true
  
  let hp_text = "HP: " + current_hp.to_string() + "/" + max_hp.to_string()
  println("📊 血条更新: " + hp_text + " (" + (hp_percentage * 100.0).to_string() + "%)")
  
  updated_bar
}

///|
// 动画更新血条
fn animate_health_bar(health_bar: HealthBar) -> HealthBar {
  if !health_bar.is_animating {
    return health_bar
  }
  
  let updated_bar = health_bar
  
  // 简化的动画逻辑
  let width_diff = health_bar.target_width - health_bar.width
  let step = width_diff * health_bar.animation_speed * 0.016  // 假设60FPS
  
  if width_diff.abs() < 1.0 {
    // 动画完成
    updated_bar.is_animating = false
    return updated_bar
  }
  
  // 更新宽度
  updated_bar.width = health_bar.width + step
  
  updated_bar
}

///|
// 获取血条是否正在动画
fn is_health_bar_animating(health_bar: HealthBar) -> Bool {
  health_bar.is_animating
}

///|
// 获取血条HP百分比
fn get_health_bar_percentage(health_bar: HealthBar) -> Double {
  if health_bar.max_hp > 0 {
    health_bar.current_hp.to_double() / health_bar.max_hp.to_double()
  } else {
    0.0
  }
}

///|
// 获取血条显示文本
fn get_health_bar_text(health_bar: HealthBar) -> String {
  "HP: " + health_bar.current_hp.to_string() + "/" + health_bar.max_hp.to_string()
}

///|
// 设置血条可见性
fn set_health_bar_visibility(health_bar: HealthBar, is_visible: Bool) -> HealthBar {
  let updated_bar = health_bar
  updated_bar.is_visible = is_visible
  updated_bar
}

///|
// 检查血条是否可见
fn is_health_bar_visible(health_bar: HealthBar) -> Bool {
  health_bar.is_visible
}

///|
// 获取血条位置
fn get_health_bar_position(health_bar: HealthBar) -> (Double, Double) {
  (health_bar.x, health_bar.y)
}

///|
// 设置血条位置
fn set_health_bar_position(health_bar: HealthBar, x: Double, y: Double) -> HealthBar {
  let updated_bar = health_bar
  updated_bar.x = x
  updated_bar.y = y
  updated_bar
}

///|
// 测试血条组件
fn test_health_bar() -> Unit {
  println("=== 血条组件测试开始 ===")
  
  // 创建玩家血条
  let player_bar = create_health_bar(50.0, 400.0, 200.0, 20.0, 100, true)
  println("✅ 玩家血条创建成功")
  
  // 创建敌人血条
  let enemy_bar = create_health_bar(550.0, 100.0, 200.0, 20.0, 80, false)
  println("✅ 敌人血条创建成功")
  
  // 测试血条更新
  let updated_player_bar = update_health_bar(player_bar, 75, 100)
  println("✅ 玩家血条更新成功 (75/100)")
  
  let updated_enemy_bar = update_health_bar(enemy_bar, 20, 80)
  println("✅ 敌人血条更新成功 (20/80)")
  
  // 测试动画
  let animated_player_bar = animate_health_bar(updated_player_bar)
  let animated_enemy_bar = animate_health_bar(updated_enemy_bar)
  println("✅ 血条动画更新成功")
  
  // 测试百分比计算
  let player_percent = get_health_bar_percentage(updated_player_bar)
  let enemy_percent = get_health_bar_percentage(updated_enemy_bar)
  println("玩家HP百分比: " + (player_percent * 100.0).to_string() + "%")
  println("敌人HP百分比: " + (enemy_percent * 100.0).to_string() + "%")
  
  // 测试文本获取
  let player_text = get_health_bar_text(updated_player_bar)
  let enemy_text = get_health_bar_text(updated_enemy_bar)
  println("玩家血条文本: " + player_text)
  println("敌人血条文本: " + enemy_text)
  
  // 测试位置操作
  let (player_x, player_y) = get_health_bar_position(updated_player_bar)
  println("玩家血条位置: (" + player_x.to_string() + ", " + player_y.to_string() + ")")
  
  let repositioned_bar = set_health_bar_position(updated_player_bar, 100.0, 450.0)
  let (new_x, new_y) = get_health_bar_position(repositioned_bar)
  println("重新定位后位置: (" + new_x.to_string() + ", " + new_y.to_string() + ")")
  
  println("=== 血条组件测试完成 ===")
}

///|
// ===== 血条管理器功能 =====

///|
// 初始化血条管理器
fn init_health_bar_manager() -> Unit {
  health_bar_manager.is_active = true
  health_bar_manager.health_bars.clear()
  health_bar_manager.total_bars = 0
  println("📊 血条管理器初始化完成")
}

///|
// 创建简化的Pokemon
fn create_simple_pokemon(name: String, level: Int, hp: Int, max_hp: Int) -> SimplePokemon {
  {
    name: name,
    hp: hp,
    max_hp: max_hp,
    level: level
  }
}

///|
// 创建Pokemon血条
fn create_pokemon_health_bar(
  pokemon_id: String,
  pokemon: SimplePokemon,
  x: Double,
  y: Double,
  is_player: Bool
) -> Unit {
  if !health_bar_manager.is_active {
    println("❌ 血条管理器未激活")
    return
  }
  
  let health_bar = create_health_bar(
    x,
    y,
    health_bar_manager.default_width,
    health_bar_manager.default_height,
    pokemon.max_hp,
    is_player
  )
  
  // 设置当前HP
  health_bar.current_hp = pokemon.hp
  
  // 添加到管理器
  health_bar_manager.health_bars.set(pokemon_id, health_bar)
  health_bar_manager.total_bars = health_bar_manager.total_bars + 1
  
  println("📊 创建Pokemon血条: " + pokemon_id + " (" + pokemon.name + ")")
  println("  位置: (" + x.to_string() + ", " + y.to_string() + ")")
  println("  HP: " + pokemon.hp.to_string() + "/" + pokemon.max_hp.to_string())
}

///|
// 更新Pokemon血条
fn update_pokemon_health_bar(pokemon_id: String, pokemon: SimplePokemon) -> Unit {
  if !health_bar_manager.is_active {
    println("❌ 血条管理器未激活")
    return
  }
  
  match health_bar_manager.health_bars.get(pokemon_id) {
    Some(health_bar) => {
      let updated_bar = update_health_bar(health_bar, pokemon.hp, pokemon.max_hp)
      health_bar_manager.health_bars.set(pokemon_id, updated_bar)
      
      let percentage = get_health_bar_percentage(updated_bar)
      println("📊 更新Pokemon血条: " + pokemon_id + " (" + pokemon.name + ")")
      println("  HP: " + pokemon.hp.to_string() + "/" + pokemon.max_hp.to_string() + " (" + (percentage * 100.0).to_string() + "%)")
    }
    None => {
      println("❌ 未找到Pokemon血条: " + pokemon_id)
    }
  }
}

///|
// 移除Pokemon血条
fn remove_pokemon_health_bar(pokemon_id: String) -> Unit {
  if !health_bar_manager.is_active {
    println("❌ 血条管理器未激活")
    return
  }
  
  match health_bar_manager.health_bars.get(pokemon_id) {
    Some(_) => {
      health_bar_manager.health_bars.remove(pokemon_id)
      health_bar_manager.total_bars = health_bar_manager.total_bars - 1
      println("📊 移除Pokemon血条: " + pokemon_id)
    }
    None => {
      println("❌ 未找到Pokemon血条: " + pokemon_id)
    }
  }
}

///|
// 获取Pokemon血条
fn get_pokemon_health_bar(pokemon_id: String) -> Option[HealthBar] {
  health_bar_manager.health_bars.get(pokemon_id)
}

///|
// 更新所有血条动画
fn update_all_health_bar_animations() -> Unit {
  if !health_bar_manager.is_active {
    return
  }
  
  let updated_bars = Map::new()
  
  let keys = health_bar_manager.health_bars.keys()
  for key in keys {
    match health_bar_manager.health_bars.get(key) {
      Some(health_bar) => {
        let animated_bar = animate_health_bar(health_bar)
        updated_bars.set(key, animated_bar)
      }
      None => { ignore(updated_bars) }
    }
  }
  
  health_bar_manager.health_bars = updated_bars
}

///|
// 获取血条管理器状态
fn get_health_bar_manager_status() -> String {
  let status = if health_bar_manager.is_active {
    "活跃"
  } else {
    "未激活"
  }
  
  "血条管理器状态: " + status + ", 总血条数: " + health_bar_manager.total_bars.to_string()
}

///|
// 获取所有血条信息
fn get_all_health_bar_info() -> Array[String] {
  let info_list = Array::new()
  
  let keys = health_bar_manager.health_bars.keys()
  for key in keys {
    match health_bar_manager.health_bars.get(key) {
      Some(health_bar) => {
        let percentage = get_health_bar_percentage(health_bar)
        let text = get_health_bar_text(health_bar)
        let info = key + ": " + text + " (" + (percentage * 100.0).to_string() + "%)"
        info_list.push(info)
      }
      None => { ignore(info_list) }
    }
  }
  
  info_list
}

///|
// 批量更新Pokemon血条
fn batch_update_pokemon_health_bars(pokemon_list: Array[(String, SimplePokemon)]) -> Unit {
  if !health_bar_manager.is_active {
    println("❌ 血条管理器未激活")
    return
  }
  
  let mut update_count = 0
  
  let length = pokemon_list.length()
  let mut i = 0
  while i < length {
    match pokemon_list.get(i) {
      Some((pokemon_id, pokemon)) => {
        match health_bar_manager.health_bars.get(pokemon_id) {
          Some(health_bar) => {
            let updated_bar = update_health_bar(health_bar, pokemon.hp, pokemon.max_hp)
            health_bar_manager.health_bars.set(pokemon_id, updated_bar)
            update_count = update_count + 1
          }
          None => {
            println("⚠️ 未找到Pokemon血条: " + pokemon_id)
          }
        }
      }
      None => { ignore(update_count) }
    }
    i = i + 1
  }
  
  println("📊 批量更新完成: " + update_count.to_string() + " 个血条已更新")
}

///|
// 设置血条可见性
fn set_pokemon_health_bar_visibility(pokemon_id: String, is_visible: Bool) -> Unit {
  if !health_bar_manager.is_active {
    println("❌ 血条管理器未激活")
    return
  }
  
  match health_bar_manager.health_bars.get(pokemon_id) {
    Some(health_bar) => {
      let updated_bar = set_health_bar_visibility(health_bar, is_visible)
      health_bar_manager.health_bars.set(pokemon_id, updated_bar)
      println("📊 设置血条可见性: " + pokemon_id + " = " + is_visible.to_string())
    }
    None => {
      println("❌ 未找到Pokemon血条: " + pokemon_id)
    }
  }
}

///|
// 设置血条位置
fn set_pokemon_health_bar_position(pokemon_id: String, x: Double, y: Double) -> Unit {
  if !health_bar_manager.is_active {
    println("❌ 血条管理器未激活")
    return
  }
  
  match health_bar_manager.health_bars.get(pokemon_id) {
    Some(health_bar) => {
      let updated_bar = set_health_bar_position(health_bar, x, y)
      health_bar_manager.health_bars.set(pokemon_id, updated_bar)
      println("📊 设置血条位置: " + pokemon_id + " = (" + x.to_string() + ", " + y.to_string() + ")")
    }
    None => {
      println("❌ 未找到Pokemon血条: " + pokemon_id)
    }
  }
}

///|
// 检查是否有动画进行中
fn has_animating_health_bars() -> Bool {
  if !health_bar_manager.is_active {
    return false
  }
  
  let keys = health_bar_manager.health_bars.keys()
  for key in keys {
    match health_bar_manager.health_bars.get(key) {
      Some(health_bar) => {
        if is_health_bar_animating(health_bar) {
          return true
        }
      }
      None => { ignore(health_bar_manager) }
    }
  }
  
  false
}

///|
// 清理所有血条
fn clear_all_health_bars() -> Unit {
  if !health_bar_manager.is_active {
    println("❌ 血条管理器未激活")
    return
  }
  
  let bar_count = health_bar_manager.total_bars
  health_bar_manager.health_bars.clear()
  health_bar_manager.total_bars = 0
  
  println("📊 清理所有血条: " + bar_count.to_string() + " 个血条已清理")
}

///|
// 测试血条管理器
fn test_health_bar_manager() -> Unit {
  println("=== 血条管理器测试开始 ===")
  
  // 初始化管理器
  init_health_bar_manager()
  println("✅ 血条管理器初始化完成")
  
  // 创建测试Pokemon
  let player_pokemon = create_simple_pokemon("小火龙", 25, 100, 100)
  let enemy_pokemon = create_simple_pokemon("皮卡丘", 23, 80, 80)
  
  // 创建血条
  create_pokemon_health_bar("player", player_pokemon, 50.0, 400.0, true)
  create_pokemon_health_bar("enemy", enemy_pokemon, 550.0, 100.0, false)
  println("✅ 血条创建完成")
  
  // 测试更新
  let damaged_player = create_simple_pokemon("小火龙", 25, 75, 100)
  update_pokemon_health_bar("player", damaged_player)
  
  let damaged_enemy = create_simple_pokemon("皮卡丘", 23, 40, 80)
  update_pokemon_health_bar("enemy", damaged_enemy)
  println("✅ 血条更新完成")
  
  // 测试批量更新
  let pokemon_list = [
    ("player", damaged_player),
    ("enemy", damaged_enemy)
  ]
  batch_update_pokemon_health_bars(pokemon_list)
  println("✅ 批量更新完成")
  
  // 测试动画
  update_all_health_bar_animations()
  println("✅ 动画更新完成")
  
  // 获取状态信息
  let status = get_health_bar_manager_status()
  println("📊 " + status)
  
  let info_list = get_all_health_bar_info()
  for info in info_list {
    println("📊 " + info)
  }
  
  // 测试位置设置
  set_pokemon_health_bar_position("player", 100.0, 450.0)
  set_pokemon_health_bar_position("enemy", 600.0, 150.0)
  println("✅ 位置设置完成")
  
  // 测试可见性设置
  set_pokemon_health_bar_visibility("player", false)
  set_pokemon_health_bar_visibility("enemy", true)
  println("✅ 可见性设置完成")
  
  // 检查动画状态
  let has_animating = has_animating_health_bars()
  println("📊 是否有动画进行中: " + has_animating.to_string())
  
  // 清理测试
  clear_all_health_bars()
  println("✅ 清理完成")
  
  println("=== 血条管理器测试完成 ===")
} 