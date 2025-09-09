///|
// Pokemon Data Reader - 内存中存储宝可梦信息
// 直接在代码中定义宝可梦数据，无需文件 I/O

///|
// ===== 宝可梦数据结构 =====

/// 宝可梦数据集合
pub struct PokemonDatabase {
  pokemons: Array[Pokemon];
  last_updated: String
}

///|
// ===== 宝可梦数据定义 =====

/// 获取所有宝可梦数据
fn get_pokemon_data() -> Array[Pokemon] {
  [
    Pokemon::{
      id: 1,
      name: "Python蟒蛇",
      level: 8,
      hp: 65,
      max_hp: 65,
      attack: 55,
      defense: 60,
      speed: 70,
      types: [PokemonType::Grass, PokemonType::Dragon],
      moves: ["藤蔓缠绕", "数据流", "优雅编程", "简洁代码"]
    },
    Pokemon::{
      id: 2,
      name: "Java咖啡杯",
      level: 7,
      hp: 80,
      max_hp: 80,
      attack: 50,
      defense: 75,
      speed: 45,
      types: [PokemonType::Fire, PokemonType::Steel],
      moves: ["热咖啡", "企业级攻击", "持久战", "跨平台"]
    },
    Pokemon::{
      id: 3,
      name: "C++齿轮兽",
      level: 9,
      hp: 70,
      max_hp: 70,
      attack: 85,
      defense: 65,
      speed: 55,
      types: [PokemonType::Steel, PokemonType::Dark],
      moves: ["指针攻击", "内存泄漏", "模板编程", "齿轮切割"]
    },
    Pokemon::{
      id: 4,
      name: "JavaScript电精灵",
      level: 6,
      hp: 40,
      max_hp: 40,
      attack: 60,
      defense: 35,
      speed: 95,
      types: [PokemonType::Electric, PokemonType::Fairy],
      moves: ["异步闪电", "原型链", "回调攻击", "动态类型"]
    },
    Pokemon::{
      id: 5,
      name: "C#音符骑士",
      level: 8,
      hp: 75,
      max_hp: 75,
      attack: 70,
      defense: 70,
      speed: 60,
      types: [PokemonType::Steel, PokemonType::Electric],
      moves: ["音符冲击", "LINQ查询", "属性攻击", "委托技能"]
    },
    Pokemon::{
      id: 6,
      name: "Go地鼠",
      level: 5,
      hp: 55,
      max_hp: 55,
      attack: 45,
      defense: 50,
      speed: 80,
      types: [PokemonType::Normal, PokemonType::Ground],
      moves: ["并发挖掘", "协程", "快速编译", "垃圾回收"]
    },
    Pokemon::{
      id: 7,
      name: "Rust螃蟹",
      level: 8,
      hp: 85,
      max_hp: 85,
      attack: 75,
      defense: 90,
      speed: 50,
      types: [PokemonType::Water, PokemonType::Steel],
      moves: ["所有权攻击", "借用检查", "内存安全", "零成本抽象"]
    },
    Pokemon::{
      id: 8,
      name: "Ruby红宝石龙",
      level: 7,
      hp: 60,
      max_hp: 60,
      attack: 65,
      defense: 55,
      speed: 75,
      types: [PokemonType::Fire, PokemonType::Fairy],
      moves: ["宝石闪耀", "元编程", "优雅语法", "动态方法"]
    },
    Pokemon::{
      id: 9,
      name: "PHP企鹅",
      level: 4,
      hp: 50,
      max_hp: 50,
      attack: 40,
      defense: 60,
      speed: 35,
      types: [PokemonType::Water, PokemonType::Ice],
      moves: ["服务器守护", "Web开发", "数据库连接", "顽强生存"]
    },
    Pokemon::{
      id: 10,
      name: "Moonbit月兔",
      level: 10,
      hp: 90,
      max_hp: 90,
      attack: 70,
      defense: 80,
      speed: 85,
      types: [PokemonType::Psychic, PokemonType::Fairy],
      moves: ["月光编译", "代码幻象", "星辰跃击", "迅捷跃步"]
    }
  ]
}

/// 创建宝可梦数据库
pub fn create_pokemon_database() -> PokemonDatabase {
  PokemonDatabase::{
    pokemons: get_pokemon_data(),
    last_updated: "2024-01-01"
  }
}

///|
// ===== 宝可梦查询功能 =====

/// 根据 ID 查找宝可梦
pub fn find_pokemon_by_id(db: PokemonDatabase, id: Int) -> Option[Pokemon] {
  let mut result: Option[Pokemon] = None
  let mut i = 0
  while i < db.pokemons.length() {
    let pokemon = db.pokemons[i]
    if pokemon.id == id {
      result = Some(pokemon)
      break
    }
    i = i + 1
  }
  result
}

/// 根据名称查找宝可梦
pub fn find_pokemon_by_name(db: PokemonDatabase, name: String) -> Option[Pokemon] {
  let mut result: Option[Pokemon] = None
  let mut i = 0
  while i < db.pokemons.length() {
    let pokemon = db.pokemons[i]
    if pokemon.name == name {
      result = Some(pokemon)
      break
    }
    i = i + 1
  }
  result
}

/// 根据类型查找宝可梦
pub fn find_pokemon_by_type(db: PokemonDatabase, pokemon_type: PokemonType) -> Array[Pokemon] {
  let mut result: Array[Pokemon] = []
  let mut i = 0
  while i < db.pokemons.length() {
    let pokemon = db.pokemons[i]
    let mut found = false
    let mut j = 0
    while j < pokemon.types.length() {
      if pokemon.types[j] == pokemon_type {
        found = true
        break
      }
      j = j + 1
    }
    if found {
      result = result + [pokemon]
    }
    i = i + 1
  }
  result
}

/// 获取所有宝可梦
pub fn get_all_pokemons(db: PokemonDatabase) -> Array[Pokemon] {
  db.pokemons
}

/// 获取宝可梦数量
pub fn get_pokemon_count(db: PokemonDatabase) -> Int {
  db.pokemons.length()
}

///|
// ===== 显示功能 =====

/// 显示宝可梦信息
pub fn display_pokemon_info(pokemon: Pokemon) -> Unit {
  println("=== " + pokemon.name + " ===")
  println("ID: " + pokemon.id.to_string())
  println("等级: " + pokemon.level.to_string())
  println("HP: " + pokemon.hp.to_string() + "/" + pokemon.max_hp.to_string())
  println("攻击: " + pokemon.attack.to_string())
  println("防御: " + pokemon.defense.to_string())
  println("速度: " + pokemon.speed.to_string())
  println("属性1: " + pokemon.types[0].to_string())
  match pokemon.types.length() {
    2 => println("属性2: " + pokemon.types[1].to_string())
    _ => println("属性2: 无")
  }
  println("技能: " + pokemon.moves.join(", "))
  println("---")
}

/// 显示所有宝可梦信息
pub fn display_all_pokemons(db: PokemonDatabase) -> Unit {
  println("=== 宝可梦数据库 ===")
  println("最后更新: " + db.last_updated)
  println("宝可梦数量: " + db.pokemons.length().to_string())
  
  let mut i = 0
  while i < db.pokemons.length() {
    display_pokemon_info(db.pokemons[i])
    i = i + 1
  }
}

///|
// ===== 控制台测试功能 =====

/// 测试并打印所有宝可梦数据
pub fn test_and_print_pokemon_data() -> Unit {
  println(" 开始测试宝可梦数据读取...")
  println("==================================================")
  
  // 创建数据库
  let db = create_pokemon_database()
  println("✅ 宝可梦数据库创建成功")
  println("📊 数据库包含 " + get_pokemon_count(db).to_string() + " 只宝可梦")
  println("")
  
  // 显示所有宝可梦
  display_all_pokemons(db)
  
  // 测试查找功能
  println("🔍 测试查找功能:")
  println("")
  
  // 按ID查找
  match find_pokemon_by_id(db, 1) {
    Some(pokemon) => {
      println("✅ 按ID查找成功:")
      display_pokemon_info(pokemon)
    }
    None => println("❌ 按ID查找失败")
  }
  
  // 按名称查找
  match find_pokemon_by_name(db, "Ruby红宝石龙") {
    Some(pokemon) => {
      println("✅ 按名称查找成功:")
      display_pokemon_info(pokemon)
    }
    None => println("❌ 按名称查找失败")
  }
  
  // 按类型查找
  let fire_pokemons = find_pokemon_by_type(db, PokemonType::Fire)
  println("🔥 火系宝可梦 (" + fire_pokemons.length().to_string() + " 只):")
  let mut i = 0
  while i < fire_pokemons.length() {
    let pokemon = fire_pokemons[i]
    println("  - " + pokemon.name + " (Lv." + pokemon.level.to_string() + ")")
    i = i + 1
  }
  println("")
  
  // 按类型查找草系
  let grass_pokemons = find_pokemon_by_type(db, PokemonType::Grass)
  println(" 草系宝可梦 (" + grass_pokemons.length().to_string() + " 只):")
  let mut j = 0
  while j < grass_pokemons.length() {
    let pokemon = grass_pokemons[j]
    println("  - " + pokemon.name + " (Lv." + pokemon.level.to_string() + ")")
    j = j + 1
  }
  println("")
  
  println("🎉 宝可梦数据测试完成!")
  println("==================================================")
}

///|
// ===== 测试函数 =====

test "test_pokemon_database_operations" {
  let db = create_pokemon_database()
  
  // 测试查找功能
  let bulbasaur = find_pokemon_by_id(db, 1)
  match bulbasaur {
    Some(p) => {
      assert_eq!(p.name, "Python蟒蛇")
      assert_eq!(p.types[0], PokemonType::Grass)
    }
    None => assert_false!(true)
  }
  
  // 测试名称查找
  let pikachu = find_pokemon_by_name(db, "Ruby红宝石龙")
  match pikachu {
    Some(p) => {
      assert_eq!(p.id, 8)
      assert_eq!(p.types[0], PokemonType::Fire)
    }
    None => assert_false!(true)
  }
  
  // 测试类型查找
  let fire_pokemons = find_pokemon_by_type(db, PokemonType::Fire)
  assert_eq!(fire_pokemons.length(), 2) // 小火龙和喷火龙
  
  // 测试数量
  assert_eq!(get_pokemon_count(db), 9)
}