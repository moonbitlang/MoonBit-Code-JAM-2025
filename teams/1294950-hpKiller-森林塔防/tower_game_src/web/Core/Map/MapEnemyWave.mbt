///|
pub(all) struct PathWaveConfig {
  path_id : Int
  waves : Array[EnemyWave]
}

///|
pub(all) struct EnemyWaveConfig {
  path_wave_configs : Array[PathWaveConfig]
  mut cur_wave : Int
}

///|
pub(all) struct MapConfig {
  mut level : Int
  // mut paths : Array[Path]
  mut neutral_element : Array[&@NeutralElement.NeutralElement]
  mut enemy_path_waves : Array[EnemyPathWave]
  mut available_tower : Array[@Tower.TowerType]
  mut coins : Int
  // mut c
}

///|
fn _get_by_level(level : Int) -> MapConfig? {
  let all_configs = get_all_map_config()
  for config in all_configs {
    if config.level == level {
      // init the 
      return Some(config)
    }
  }
  None
}

///|
pub fn get_map_by_level(level : Int) -> MapConfig {
  match _get_by_level(level) {
    Some(config) => config
    None =>
      // Return level 1 as default if level not found
      match _get_by_level(1) {
        Some(default_config) => default_config
        None => {
          println("error:get map config error with level: \{level}")
          // Fallback: create a basic config if even level 1 doesn't exist
          {
            level: 1,
            // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
            neutral_element: [
              @NeutralElement.SlotMachineNeutralElement::new(
                x=5,
                y=5,
                health=100,
              ),
            ],
            enemy_path_waves: [
              {
                path_id: -1,
                points: [{ x: -1, y: -1, is_jump_point: false }],
                waves: [EnemyWave::new()],
              },
            ],
            available_tower: [@Tower.BeeTower],
            coins: 1000,
          }
        }
      }
  }
}

///|
pub(all) struct EnemyPathWave {
  mut path_id : Int
  mut points : Array[@Point.PathPoint]
  mut waves : Array[EnemyWave]
}

///|
pub(all) struct EnemyWave {
  mut enemy_count : Int
  mut spawn_timer : Double
  mut cur_d_t : Double
  mut max_enemies : Int
  mut enemy_type : @Enemy.EnemyType
  mut wave_id : Int
  mut has_enemy : Bool
  mut is_start : Bool
}

///|
pub fn EnemyWave::new(
  max_enemies? : Int = 3,
  enemy_type? : @Enemy.EnemyType = KangarooEnemy,
  wave_id? : Int = 1,
  spawn_timer? : Double = 5000,
) -> EnemyWave {
  EnemyWave::{
    enemy_count: 0,
    spawn_timer,
    cur_d_t: 0,
    max_enemies,
    enemy_type,
    wave_id,
    has_enemy: true,
    is_start: false,
  }
}

///|
pub fn EnemyWaveConfig::new(level : Int) -> EnemyWaveConfig {
  let map_config = get_map_by_level(level)
  let mut pwcs = []
  for w in map_config.enemy_path_waves {
    let pwc = { path_id: w.path_id, waves: w.waves }
    pwcs = pwcs + [pwc]
  }
  { path_wave_configs: pwcs, cur_wave: 1 }
}

///|
pub fn EnemyWaveConfig::new_default() -> EnemyWaveConfig {
  EnemyWaveConfig::new(1)
}

///|
let enemyWaveConfigInstance : Ref[EnemyWaveConfig?] = Ref::new(None)

///|
let currentLevel : Ref[Int] = Ref::new(1) // Track current level

// pub let enemyWaveConfigSingleton =

///|
pub fn enemyWaveConfigSingleton() -> EnemyWaveConfig {
  EnemyWaveConfig::get_instance()
}

///|
pub fn EnemyWaveConfig::set_level(
  self : EnemyWaveConfig,
  new_level : Int,
) -> Unit {
  ignore(self)
  currentLevel.val = new_level
  // Reset the singleton with new level configuration
  enemyWaveConfigInstance.val = Some(EnemyWaveConfig::new(new_level))
}

///|
pub fn EnemyWaveConfig::get_instance() -> EnemyWaveConfig {
  match enemyWaveConfigInstance.val {
    Some(render) => render
    None => {
      let new_instance = EnemyWaveConfig::new_default()
      enemyWaveConfigInstance.val = Some(new_instance)
      new_instance
    }
  }
}
