///|
// Skill Data - 技能数据库
// 管理所有宝可梦技能的数据和属性

///|
// ===== 技能数据库结构 =====

/// 技能数据库
pub struct SkillDatabase {
  skills: Array[Move];
  last_updated: String
}

///|
// ===== 编程语言主题技能数据 =====

/// 获取所有技能数据
fn get_skill_data() -> Array[Move] {
  [
    // Python蟒蛇技能
    Move::{
      name: "藤蔓缠绕",
      power: 60,
      accuracy: 95,
      move_type: MoveType::Physical,
      element_type: "Grass",
      pp: 20,
      max_pp: 20
    },
    Move::{
      name: "数据流",
      power: 70,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Dragon",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "优雅编程",
      power: 80,
      accuracy: 90,
      move_type: MoveType::Special,
      element_type: "Grass",
      pp: 10,
      max_pp: 10
    },
    Move::{
      name: "简洁代码",
      power: 50,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Normal",
      pp: 25,
      max_pp: 25
    },
    
    // Java咖啡杯技能
    Move::{
      name: "热咖啡",
      power: 65,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Fire",
      pp: 20,
      max_pp: 20
    },
    Move::{
      name: "企业级攻击",
      power: 90,
      accuracy: 85,
      move_type: MoveType::Physical,
      element_type: "Steel",
      pp: 10,
      max_pp: 10
    },
    Move::{
      name: "持久战",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Steel",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "跨平台",
      power: 75,
      accuracy: 95,
      move_type: MoveType::Special,
      element_type: "Fire",
      pp: 15,
      max_pp: 15
    },
    
    // C++齿轮兽技能
    Move::{
      name: "指针攻击",
      power: 85,
      accuracy: 90,
      move_type: MoveType::Physical,
      element_type: "Steel",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "内存泄漏",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Dark",
      pp: 10,
      max_pp: 10
    },
    Move::{
      name: "模板编程",
      power: 95,
      accuracy: 80,
      move_type: MoveType::Special,
      element_type: "Steel",
      pp: 8,
      max_pp: 8
    },
    Move::{
      name: "齿轮切割",
      power: 70,
      accuracy: 100,
      move_type: MoveType::Physical,
      element_type: "Steel",
      pp: 20,
      max_pp: 20
    },
    
    // JavaScript电精灵技能
    Move::{
      name: "异步闪电",
      power: 80,
      accuracy: 95,
      move_type: MoveType::Special,
      element_type: "Electric",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "原型链",
      power: 60,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Fairy",
      pp: 20,
      max_pp: 20
    },
    Move::{
      name: "回调攻击",
      power: 70,
      accuracy: 90,
      move_type: MoveType::Special,
      element_type: "Electric",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "动态类型",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Fairy",
      pp: 25,
      max_pp: 25
    },
    
    // C#音符骑士技能
    Move::{
      name: "音符冲击",
      power: 75,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Electric",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "LINQ查询",
      power: 85,
      accuracy: 90,
      move_type: MoveType::Special,
      element_type: "Steel",
      pp: 12,
      max_pp: 12
    },
    Move::{
      name: "属性攻击",
      power: 65,
      accuracy: 100,
      move_type: MoveType::Physical,
      element_type: "Steel",
      pp: 18,
      max_pp: 18
    },
    Move::{
      name: "委托技能",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Electric",
      pp: 20,
      max_pp: 20
    },
    
    // Go地鼠技能
    Move::{
      name: "并发挖掘",
      power: 60,
      accuracy: 100,
      move_type: MoveType::Physical,
      element_type: "Ground",
      pp: 20,
      max_pp: 20
    },
    Move::{
      name: "协程",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Normal",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "快速编译",
      power: 70,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Normal",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "垃圾回收",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Ground",
      pp: 10,
      max_pp: 10
    },
    
    // Rust螃蟹技能
    Move::{
      name: "所有权攻击",
      power: 90,
      accuracy: 95,
      move_type: MoveType::Physical,
      element_type: "Steel",
      pp: 10,
      max_pp: 10
    },
    Move::{
      name: "借用检查",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Water",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "内存安全",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Steel",
      pp: 20,
      max_pp: 20
    },
    Move::{
      name: "零成本抽象",
      power: 85,
      accuracy: 90,
      move_type: MoveType::Special,
      element_type: "Water",
      pp: 12,
      max_pp: 12
    },
    
    // Ruby红宝石龙技能
    Move::{
      name: "宝石闪耀",
      power: 80,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Fire",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "元编程",
      power: 95,
      accuracy: 85,
      move_type: MoveType::Special,
      element_type: "Fairy",
      pp: 8,
      max_pp: 8
    },
    Move::{
      name: "优雅语法",
      power: 70,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Fire",
      pp: 18,
      max_pp: 18
    },
    Move::{
      name: "动态方法",
      power: 75,
      accuracy: 95,
      move_type: MoveType::Special,
      element_type: "Fairy",
      pp: 15,
      max_pp: 15
    },
    
    // PHP企鹅技能
    Move::{
      name: "服务器守护",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Water",
      pp: 20,
      max_pp: 20
    },
    Move::{
      name: "Web开发",
      power: 60,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Water",
      pp: 20,
      max_pp: 20
    },
    Move::{
      name: "数据库连接",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Ice",
      pp: 15,
      max_pp: 15
    },
    Move::{
      name: "顽强生存",
      power: 50,
      accuracy: 100,
      move_type: MoveType::Physical,
      element_type: "Water",
      pp: 25,
      max_pp: 25
    },
    
    // 月兔技能
    Move::{
      name: "月光编译",
      power: 0,
      accuracy: 100,
      move_type: MoveType::Status,
      element_type: "Psychic",
      pp: 10,
      max_pp: 10
    },
    Move::{
      name: "代码幻象",
      power: 75,
      accuracy: 100,
      move_type: MoveType::Special,
      element_type: "Psychic",
      pp: 10,
      max_pp: 10
    },
    Move::{
      name: "星辰跃击",
      power: 95,
      accuracy: 90,
      move_type: MoveType::Special,
      element_type: "Fairy",
      pp: 8,
      max_pp: 8
    },
    Move::{
      name: "迅捷跃步",
      power: 60,
      accuracy: 100,
      move_type: MoveType::Physical,
      element_type: "Ground",
      pp: 20,
      max_pp: 20
    }
  ]
}

/// 创建技能数据库
pub fn create_skill_database() -> SkillDatabase {
  SkillDatabase::{
    skills: get_skill_data(),
    last_updated: "2024-01-01"
  }
}

///|
// ===== 技能查询功能 =====

/// 根据名称查找技能
pub fn find_skill_by_name(db: SkillDatabase, name: String) -> Option[Move] {
  let mut result: Option[Move] = None
  let mut i = 0
  while i < db.skills.length() {
    let skill = db.skills[i]
    if skill.name == name {
      result = Some(skill)
      break
    }
    i = i + 1
  }
  result
}

/// 根据属性查找技能
pub fn find_skills_by_type(db: SkillDatabase, element_type: String) -> Array[Move] {
  let mut result: Array[Move] = []
  let mut i = 0
  while i < db.skills.length() {
    let skill = db.skills[i]
    if skill.element_type == element_type {
      result = result + [skill]
    }
    i = i + 1
  }
  result
}

/// 根据技能类型查找技能
pub fn find_skills_by_move_type(db: SkillDatabase, move_type: MoveType) -> Array[Move] {
  let mut result: Array[Move] = []
  let mut i = 0
  while i < db.skills.length() {
    let skill = db.skills[i]
    if skill.move_type == move_type {
      result = result + [skill]
    }
    i = i + 1
  }
  result
}

/// 获取所有技能
pub fn get_all_skills(db: SkillDatabase) -> Array[Move] {
  db.skills
}

/// 获取技能数量
pub fn get_skill_count(db: SkillDatabase) -> Int {
  db.skills.length()
}

///|
// ===== 技能管理功能 =====

/// 将技能名称转换为Move结构体（兼容battle_system.mbt）
pub fn create_move_from_name(move_name: String) -> Move {
  let db = create_skill_database()
  match find_skill_by_name(db, move_name) {
    Some(skill) => skill
    None => {
      // 如果找不到，返回默认技能
      Move::{
        name: move_name,
        power: 50,
        accuracy: 100,
        move_type: MoveType::Physical,
        element_type: "Normal",
        pp: 20,
        max_pp: 20
      }
    }
  }
}

/// 从宝可梦获取技能列表（兼容battle_system.mbt）
pub fn get_pokemon_moves(pokemon: Pokemon) -> Array[Move] {
  let moves: Array[Move] = []
  for move_name in pokemon.moves {
    moves.push(create_move_from_name(move_name))
  }
  moves
}

///|
// ===== 测试功能 =====

/// 测试并打印所有技能数据
pub fn test_and_print_skill_data() -> Unit {
  println(" 开始测试技能数据读取...")
  println("==================================================")
  
  // 创建数据库
  let db = create_skill_database()
  println("✅ 技能数据库创建成功")
  println("📊 数据库包含 " + get_skill_count(db).to_string() + " 个技能")
  println("")
  
  // 显示所有技能
  display_all_skills(db)
  
  // 测试查找功能
  println("🔍 测试查找功能:")
  println("")
  
  // 按名称查找
  match find_skill_by_name(db, "藤蔓缠绕") {
    Some(skill) => {
      println("✅ 按名称查找成功:")
      display_skill_info(skill)
    }
    None => println("❌ 按名称查找失败")
  }
  
  // 按属性查找
  let fire_skills = find_skills_by_type(db, "Fire")
  println("🔥 火系技能 (" + fire_skills.length().to_string() + " 个):")
  let mut i = 0
  while i < fire_skills.length() {
    let skill = fire_skills[i]
    println("  - " + skill.name + " (威力:" + skill.power.to_string() + ")")
    i = i + 1
  }
  println("")
  
  // 按技能类型查找
  let physical_skills = find_skills_by_move_type(db, MoveType::Physical)
  println("�� 物理技能 (" + physical_skills.length().to_string() + " 个):")
  let mut j = 0
  while j < physical_skills.length() {
    let skill = physical_skills[j]
    println("  - " + skill.name + " (威力:" + skill.power.to_string() + ")")
    j = j + 1
  }
  println("")
  
  println("🎉 技能数据测试完成!")
  println("==================================================")
}

/// 显示技能信息
pub fn display_skill_info(skill: Move) -> Unit {
  println("=== " + skill.name + " ===")
  println("威力: " + skill.power.to_string())
  println("命中率: " + skill.accuracy.to_string() + "%")
  println("技能类型: " + skill.move_type.to_string())
  println("属性: " + skill.element_type)
  println("PP: " + skill.pp.to_string() + "/" + skill.max_pp.to_string())
  println("---")
}

/// 显示所有技能信息
pub fn display_all_skills(db: SkillDatabase) -> Unit {
  println("=== 技能数据库 ===")
  println("最后更新: " + db.last_updated)
  println("技能数量: " + db.skills.length().to_string())
  
  let mut i = 0
  while i < db.skills.length() {
    display_skill_info(db.skills[i])
    i = i + 1
  }
}

///|
// ===== 测试函数 =====

test "test_skill_database_operations" {
  let db = create_skill_database()
  
  // 测试查找功能
  let python_skill = find_skill_by_name(db, "藤蔓缠绕")
  match python_skill {
    Some(s) => {
      assert_eq!(s.power, 60)
      assert_eq!(s.element_type, "Grass")
    }
    None => assert_false!(true)
  }
  
  // 测试属性查找
  let fire_skills = find_skills_by_type(db, "Fire")
  assert_eq!(fire_skills.length(), 4) // Java和Ruby的火系技能
  
  // 测试数量
  assert_eq!(get_skill_count(db), 36) // 9个宝可梦 × 4个技能
}