///|
/// Create the panel data instance with all the provided data
/// 在控制器中更改 数据 
pub fn create_panel_data(level : Int) -> PanelData {
  // Create tower data
  let towers = create_panel_data_tower(level)
  let enemies = create_panel_data_enemy(level)

  // Create neutrals with additional duplicate entries as shown in the data
  let neutrals = create_panel_data_neutral_elements(level)
  PanelData::new(towers, enemies, neutrals)
}

///|
fn create_panel_data_tower(level : Int) -> Array[TowerData] {
  let all_config_tower = [
    TowerData::new(
      "蜜蜂塔",
      @Tower.BeeTower,
      "单体",
      @Tower.BEETOWER_COST.to_int(),
      @Tower.BEETOWER_COST_UP2.to_int(),
      @Tower.BEETOWER_COST_UP3.to_int(),
      "附加中毒效果",
      "合理安排距离使中毒效果最大化",
      Stats::new(70, 80),
      [
        Attribute::new("♥", "附加中毒效果"),
        Attribute::new("⚡", "攻速快"),
      ],
    ),
    TowerData::new(
      "能量塔",
      @Tower.ChargeJarTower,
      "单体",
      @Tower.CHARGEJARTOWER_COST.to_int(),
      @Tower.CHARGEJARTOWER_COST_UP2.to_int(),
      @Tower.CHARGEJARTOWER_COST_UP3.to_int(),
      "发射火球，对单个敌人造成持续燃烧伤害。",
      "适合放在敌人路径的拐角处，最大化伤害输出。",
      Stats::new(90, 50),
      [
        Attribute::new("♥", "伤害极高"),
        Attribute::new("⚡", "攻速慢"),
      ],
    ),
    TowerData::new(
      "默认塔",
      @Tower.CurveTower,
      "控制",
      @Tower.CURVETOWER_COST.to_int(),
      @Tower.CURVETOWER_COST_UP2.to_int(),
      @Tower.CURVETOWER_COST_UP3.to_int(),
      "发射冰锥，减缓敌人的移动速度。",
      "配合高伤害炮塔使用效果最佳。",
      Stats::new(40, 70),
      [Attribute::new("❄", "减速强"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "闪电塔",
      @Tower.LightningTower,
      "群体",
      @Tower.LIGHTNINGTOWER_COST.to_int(),
      @Tower.LIGHTNINGTOWER_COST_UP2.to_int(),
      @Tower.LIGHTNINGTOWER_COST_UP3.to_int(),
      "释放闪电链，可跳跃攻击多个敌人。",
      "在敌人密集区域放置效果最佳。",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "负磁塔",
      @Tower.NegativeMagneticTower,
      "单体",
      @Tower.NEGATIVEMAGNETICTOWER_COST.to_int(),
      @Tower.NEGATIVEMAGNETICTOWER_COST_UP2.to_int(),
      @Tower.NEGATIVEMAGNETICTOWER_COST_UP3.to_int(),
      "与正磁塔配合，会产生磁场",
      "与正磁塔分别放到道路的两侧",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "正磁塔",
      @Tower.PositiveMagneticTower,
      "单体",
      @Tower.POSITIVEMAGNETICTOWER_COST.to_int(),
      @Tower.POSITIVEMAGNETICTOWER_COST_UP2.to_int(),
      @Tower.POSITIVEMAGNETICTOWER_COST_UP3.to_int(),
      "与正磁塔配合，会产生磁场",
      "与负磁塔分别放到道路的两侧",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "负磁塔",
      @Tower.PlasmaTower,
      "群体",
      @Tower.PLASMATOWER_COST.to_int(),
      @Tower.PLASMATOWER_COST_UP2.to_int(),
      @Tower.PLASMATOWER_COST_UP3.to_int(),
      "释放闪电链，可跳跃攻击多个敌人。",
      "在敌人密集区域放置效果最佳。",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "雪花塔",
      @Tower.SnowflakeTower,
      "群体",
      @Tower.SNOWFLAKETOWER_COST.to_int(),
      @Tower.SNOWFLAKETOWER_COST_UP2.to_int(),
      @Tower.SNOWFLAKETOWER_COST_UP3.to_int(),
      "攻击附带减速效果",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "激光塔",
      @Tower.LaserTower,
      "群体",
      @Tower.LASERTOWER_COST.to_int(),
      @Tower.LASERTOWER_COST_UP2.to_int(),
      @Tower.LASERTOWER_COST_UP3.to_int(),
      "子弹穿刺",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "冰冻塔",
      @Tower.FrozenTower,
      "冰冻",
      @Tower.FROZENTOWER_COST.to_int(),
      @Tower.FROZENTOWER_COST_UP2.to_int(),
      @Tower.FROZENTOWER_COST_UP3.to_int(),
      "个体冰冻",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "日食塔",
      @Tower.DecayTower,
      "弹射",
      @Tower.DECAYTOWER_COST.to_int(),
      @Tower.DECAYTOWER_COST_UP2.to_int(),
      @Tower.DECAYTOWER_COST_UP3.to_int(),
      "攻击越久伤害越高",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "链子塔",
      @Tower.ChainTower,
      "辅助",
      @Tower.CHAINTOWER_COST.to_int(),
      @Tower.CHAINTOWER_COST_UP2.to_int(),
      @Tower.CHAINTOWER_COST_UP3.to_int(),
      "没伤害,增加友军攻速",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "攻速塔",
      @Tower.SpeedTower,
      "辅助",
      @Tower.SPEEDTOWER_COST.to_int(),
      @Tower.SPEEDTOWER_COST_UP2.to_int(),
      @Tower.SPEEDTOWER_COST_UP3.to_int(),
      "没伤害,增加友军攻速",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "穿云塔",
      @Tower.SkyTower,
      "对空",
      @Tower.SKYTOWER_COST.to_int(),
      @Tower.SKYTOWER_COST_UP2.to_int(),
      @Tower.SKYTOWER_COST_UP3.to_int(),
      "攻击天空中的敌人,单体",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "雷电塔",
      @Tower.ThunderTower,
      "对空",
      @Tower.THUNDERTOWER_COST.to_int(),
      @Tower.THUNDERTOWER_COST_UP2.to_int(),
      @Tower.THUNDERTOWER_COST_UP3.to_int(),
      "攻击天空中的敌人,单体",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
    TowerData::new(
      "宝藏塔",
      @Tower.TreasureTower,
      "对空",
      @Tower.TREASURETOWER_COST.to_int(),
      @Tower.TREASURETOWER_COST_UP2.to_int(),
      @Tower.TREASURETOWER_COST_UP3.to_int(),
      "攻击时能产生而外的钱",
      "",
      Stats::new(60, 60),
      [Attribute::new("⚡", "范围广"), Attribute::new("⚡", "攻速中")],
    ),
  ]
  let m = @Map.get_map_by_level(level)
  let available_towers = []
  for t in m.available_tower {
    for act in all_config_tower {
      if act.icon == t {
        available_towers.push(act)
      }
    }
  }
  available_towers
}

///|
fn[T : Eq] deduplicate(arr : Array[T]) -> Array[T] {
  let result = Array::new()
  for item in arr {
    let mut found = false
    for existing in result {
      if item == existing {
        found = true
        break
      }
    }
    if !found {
      result.push(item)
    }
  }
  result
}

///|
fn create_panel_data_enemy(level : Int) -> Array[EnemiesData] {
  let all_config_enemis = [
    EnemiesData::new(
      "病毒",
      @Enemy.VirusEnemy,
      "分裂",
      "死亡后会分裂为两个小病毒",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    EnemiesData::new(
      "猎豹",
      @Enemy.CheetahEnemy,
      "快速移动",
      "",
      "全场跑得最快的仔",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    EnemiesData::new(
      "袋鼠",
      @Enemy.KangarooEnemy,
      "跳跃",
      "",
      "全场跑得最快的仔",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    EnemiesData::new(
      "小鸟",
      @Enemy.FlyingEnemy,
      "飞行",
      "",
      "全场跑得最快的仔",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    EnemiesData::new(
      "大鸟",
      @Enemy.EggsEnemy,
      "飞行",
      "",
      "死亡后会留下后代",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    EnemiesData::new(
      "地鼠",
      @Enemy.GroundEnemy,
      "飞行",
      "",
      "死亡后会留下后代",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    EnemiesData::new(
      "乌龟",
      @Enemy.TurtleEnemy,
      "",
      "",
      "死亡后会留下后代",
      [
        Attribute::new("♥", "生命多"),
        Attribute::new("⚡", "速度慢"),
        Attribute::new("🛡", "有护甲"),
      ],
    ),
    EnemiesData::new(
      "毛毛虫",
      @Enemy.CaterpillarEnemy,
      "森林中的毛毛虫",
      "",
      "平平无奇的敌人",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度慢"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    EnemiesData::new(
      "机甲怪",
      @Enemy.MechaEnemy,
      "",
      "",
      "从机甲内产生敌人",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度慢"),
        Attribute::new("🛡", "有护甲"),
      ],
    ),
    EnemiesData::new(
      "UFO",
      @Enemy.UFOEnemy,
      "",
      "",
      "随机吸走一个防御塔",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度慢"),
        Attribute::new("🛡", "有护甲"),
      ],
    ),
    EnemiesData::new(
      "大熊",
      @Enemy.BearEnemy,
      "",
      "",
      "对防御塔进行嘲讽，强制防御塔攻击",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度慢"),
        Attribute::new("🛡", "有护甲"),
      ],
    ),
  ]
  let m = @Map.get_map_by_level(level)
  let available_enemies = []

  // get all type enemy 
  let types = []
  for c in m.enemy_path_waves {
    for w in c.waves {
      types.push(w.enemy_type)
    }
  }
  let et = deduplicate(types)
  for t in et {
    for act in all_config_enemis {
      if act.icon == t {
        available_enemies.push(act)
      }
    }
  }
  available_enemies
}

///|
fn create_panel_data_neutral_elements(
  level : Int,
) -> Array[NeutralElementsData] {
  let all_config_neutral_element = [
    NeutralElementsData::new(
      "石头",
      @NeutralElement.StoneNeutralElement,
      "平平无奇",
      "死亡后会分裂为两个小病毒",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    NeutralElementsData::new(
      "彩票机",
      @NeutralElement.SlotMachineNeutralElement,
      "抽奖",
      "死亡后会分裂为两个小病毒",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    NeutralElementsData::new(
      "宝藏",
      @NeutralElement.TreasureChestNeutralElement,
      "抽奖",
      "死亡后获得一大笔财富",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    NeutralElementsData::new(
      "小草",
      @NeutralElement.WeedNeutralElement,
      "平平无奇",
      "死亡后获得一大笔财富",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    NeutralElementsData::new(
      "传送带",
      @NeutralElement.ConveyorBeltNeutralElement,
      "平平无奇",
      "死亡后获得一大笔财富",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    NeutralElementsData::new(
      "探照灯",
      @NeutralElement.SearchLightNeutralElement,
      "平平无奇",
      "死亡后获得一大笔财富",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
    NeutralElementsData::new(
      "能量灯",
      @NeutralElement.EnergyLightNeutralElement,
      "平平无奇",
      "死亡后获得一大笔财富",
      "小病毒血量，移动快",
      [
        Attribute::new("♥", "生命少"),
        Attribute::new("⚡", "速度快"),
        Attribute::new("🛡", "无护甲"),
      ],
    ),
  ]
  let available_neutral = []
  let m = @Map.get_map_by_level(level)
  for t in all_config_neutral_element {
    for c in m.neutral_element {
      if c.neutralElement_type() == t.icon {
        available_neutral.push(t)
      }
    }
  }
  available_neutral
}

///|
/// Attribute structure for displaying icon and text pairs
pub(all) struct Attribute {
  icon : String
  text : String
}

///|
/// Constructor for Attribute
pub fn Attribute::new(icon : String, text : String) -> Attribute {
  Attribute::{ icon, text }
}

///|
/// Stats structure for damage and speed values
pub(all) struct Stats {
  damage : Int
  speed : Int
}

///|
/// Constructor for Stats
pub fn Stats::new(damage : Int, speed : Int) -> Stats {
  Stats::{ damage, speed }
}

///|
/// Tower data structure
pub(all) struct TowerData {
  name : String
  icon : @Tower.TowerType
  tower_type : String // "群体", "单体", "控制", etc.
  cost : Int
  upgrade2 : Int
  upgrade_max : Int
  description : String
  tips : String
  stats : Stats
  attributes : Array[Attribute]
}

///|
/// Constructor for TowerData
pub fn TowerData::new(
  name : String,
  icon : @Tower.TowerType,
  tower_type : String,
  cost : Int,
  upgrade2 : Int,
  upgrade_max : Int,
  description : String,
  tips : String,
  stats : Stats,
  attributes : Array[Attribute],
) -> TowerData {
  TowerData::{
    name,
    icon,
    tower_type,
    cost,
    upgrade2,
    upgrade_max,
    description,
    tips,
    stats,
    attributes,
  }
}

///|
/// Entity data structure (for enemies, characters, and neutrals)
pub(all) struct EntityData {
  name : String
  icon : String
  entity_type : String // "普通", "快速", "坦克", "首领", etc.
  intro : String
  tips : String
  attributes : Array[Attribute]
}

///|
pub(all) struct EnemiesData {
  name : String
  icon : @Enemy.EnemyType
  entity_type : String // "普通", "快速", "坦克", "首领", etc.
  intro : String
  tips : String
  attributes : Array[Attribute]
}

///|
pub(all) struct NeutralElementsData {
  name : String
  icon : @NeutralElement.NeutralElementType
  entity_type : String // "普通", "快速", "坦克", "首领", etc.
  intro : String
  tips : String
  attributes : Array[Attribute]
}

///|
pub fn NeutralElementsData::new(
  name : String,
  icon : @NeutralElement.NeutralElementType,
  entity_type : String,
  intro : String,
  tips : String,
  attributes : Array[Attribute],
) -> NeutralElementsData {
  NeutralElementsData::{ name, icon, entity_type, intro, tips, attributes }
}

///|
pub fn EnemiesData::new(
  name : String,
  icon : @Enemy.EnemyType,
  entity_type : String,
  intro : String,
  tips : String,
  attributes : Array[Attribute],
) -> EnemiesData {
  EnemiesData::{ name, icon, entity_type, intro, tips, attributes }
}

///|
pub(all) struct NeutralsData {
  name : String
  icon : @NeutralElement.NeutralElementType
  entity_type : String // "普通", "快速", "坦克", "首领", etc.
  intro : String
  tips : String
  attributes : Array[Attribute]
}

///|
/// Constructor for EntityData
pub fn EntityData::new(
  name : String,
  icon : String,
  entity_type : String,
  intro : String,
  tips : String,
  attributes : Array[Attribute],
) -> EntityData {
  EntityData::{ name, icon, entity_type, intro, tips, attributes }
}

///|
/// Main panel data structure containing all categories
pub(all) struct PanelData {
  towers : Array[TowerData] // 炮塔
  enemies : Array[EnemiesData] // 敌人
  neutrals : Array[NeutralElementsData] // 中立
}

///|
/// Constructor for PanelData
pub fn PanelData::new(
  towers : Array[TowerData],
  enemies : Array[EnemiesData],
  neutrals : Array[NeutralElementsData],
) -> PanelData {
  PanelData::{ towers, enemies, neutrals }
}

///|
pub(all) struct MenuPanel {
  mut is_open : Bool
  mut x : Double
  mut y : Double
  mut w : Double
  mut h : Double
  // Button dimensions
  mut button_width : Double
  mut button_height : Double
  mut large_button_width : Double
  mut large_button_height : Double
  // Slider dimensions
  mut slider_width : Double
  mut slider_height : Double
  mut slider_y_offset : Double
  // Audio settings
  mut sound_volume : Double // 0-1
  mut music_volume : Double // 0-1
  mut dragging_sound_slider : Bool
  mut dragging_music_slider : Bool
  // Button positions
  mut exit_button_x : Double
  mut exit_button_y : Double
  mut help_button_x : Double
  mut help_button_y : Double
  mut restart_button_x : Double
  mut restart_button_y : Double
  mut continue_button_x : Double
  mut continue_button_y : Double
  mut sound_slider_x : Double
  mut sound_logo_x : Double
  mut music_slider_x : Double
  mut music_logo_x : Double
  mut slider_y : Double
  mut clear_cache_x : Double
  mut clear_cache_y : Double
  mut data : PanelData
  // help Panel
  mut show_help_Panel : Bool
}

///|
/// Constructor for MenuPanel
pub fn MenuPanel::new() -> MenuPanel {
  let w = 800.0
  let h = 600.0
  let x = (@Core.map.width - w) / 2.0
  let y = (@Core.map.height - h) / 2.0

  // Button dimensions
  let button_width = 60.0
  let button_height = 60.0
  let large_button_width = 400.0
  let large_button_height = 80.0

  // Slider dimensions
  let slider_width = 200.0
  let slider_height = 20.0
  let slider_y_offset = 120.0

  // Calculate button positions
  let button_gap = 80.0
  let total_button_width = 4.0 * button_width + 3.0 * button_gap
  let start_x = x + (w - total_button_width) / 2.0
  let exit_button_x = start_x
  let help_button_x = start_x + button_width + button_gap
  let restart_button_x = help_button_x + button_width + button_gap
  let clear_cache_x = restart_button_x + button_width + button_gap
  let exit_button_y = y + 250.0
  let help_button_y = y + 250.0
  let restart_button_y = y + 250.0
  let clear_cache_y = y + 250.0
  let continue_button_x = x + 200.0
  let continue_button_y = y + 400.0

  // Slider positions
  let sound_slider_x = x + 150.0
  let music_slider_x = x + 450.0
  let slider_y = y + 100.0

  // 从本地存储加载音量设置
  let saved_sound_volume = @Audio.get_sound_volume()
  // println("saved_sound_volume:\{saved_sound_volume}")
  let saved_music_volume = @Audio.get_music_volume()
  // println("saved_music_volume:\{saved_music_volume}")
  let parse_volume = fn(str : String) -> Double {

    // Simple string to double conversion for volume parsing
    if str == "0" {
      0.0
    } else if str == "0.1" {
      0.1
    } else if str == "0.2" {
      0.2
    } else if str == "0.3" {
      0.3
    } else if str == "0.4" {
      0.4
    } else if str == "0.5" {
      0.5
    } else if str == "0.6" {
      0.6
    } else if str == "0.7" {
      0.7
    } else if str == "0.8" {
      0.8
    } else if str == "0.9" {
      0.9
    } else if str == "1" {
      1.0
    } else {
      0.5
    } // default value
  }
  MenuPanel::{
    is_open: false,
    x,
    y,
    w,
    h,
    button_width,
    button_height,
    large_button_width,
    large_button_height,
    slider_width,
    slider_height,
    slider_y_offset,
    sound_volume: if saved_sound_volume != "" {
      parse_volume(saved_sound_volume)
    } else {
      0.5
    },
    music_volume: if saved_music_volume != "" {
      parse_volume(saved_music_volume)
    } else {
      0.5
    },
    dragging_sound_slider: false,
    dragging_music_slider: false,
    exit_button_x,
    exit_button_y,
    help_button_x,
    help_button_y,
    restart_button_x,
    restart_button_y,
    continue_button_x,
    continue_button_y,
    sound_slider_x,
    sound_logo_x: sound_slider_x,
    music_slider_x,
    music_logo_x: music_slider_x,
    slider_y,
    clear_cache_x,
    clear_cache_y,
    data: create_panel_data(1),
    show_help_Panel: false,
  }
}

///|
/// Singleton instance management
let menuPanelInstance : Ref[MenuPanel?] = Ref::new(None)

///|
pub let menuPanelSingleton : MenuPanel = MenuPanel::get_instance()

///|
pub fn MenuPanel::get_instance() -> MenuPanel {
  match menuPanelInstance.val {
    Some(panel) => panel
    None => {
      let new_instance = MenuPanel::new()
      menuPanelInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
/// Open and close methods
pub fn MenuPanel::open(self : MenuPanel) -> Unit {
  self.is_open = true
}

///|
pub fn MenuPanel::close(self : MenuPanel) -> Unit {
  self.is_open = false
  self.dragging_sound_slider = false
  self.dragging_music_slider = false
  self.show_help_Panel = false
}

///|
pub fn MenuPanel::toggle(self : MenuPanel) -> Unit {
  if self.is_open {
    self.close()
  } else {
    self.open()
  }
}

///|
/// Volume control methods
pub fn MenuPanel::get_sound_volume(self : MenuPanel) -> Double {
  self.sound_volume
}

///|
pub fn MenuPanel::get_music_volume(self : MenuPanel) -> Double {
  self.music_volume
}

///|
pub fn MenuPanel::set_sound_volume(self : MenuPanel, volume : Double) -> Unit {
  self.sound_volume = @cmp.maximum(0.0, @cmp.minimum(1.0, volume))
  @Audio.set_sound_volume(self.sound_volume)
}

///|
pub fn MenuPanel::set_music_volume(self : MenuPanel, volume : Double) -> Unit {
  self.music_volume = @cmp.maximum(0.0, @cmp.minimum(1.0, volume))
  // 应用音量到音频系统
  @Audio.set_music_volume(self.music_volume)
}

///|
/// Check if panel should handle input
pub fn MenuPanel::should_handle_input(self : MenuPanel) -> Bool {
  self.is_open
}

///|
/// Get panel bounds for rendering
pub fn MenuPanel::get_bounds(
  self : MenuPanel,
) -> (Double, Double, Double, Double) {
  (self.x, self.y, self.w, self.h)
}
