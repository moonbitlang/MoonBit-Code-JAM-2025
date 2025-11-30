///|
pub struct EnemyController {}

///|
pub fn EnemyController::new() -> EnemyController {
  EnemyController::{  }
}

///|
let enemyControllerInstance : Ref[EnemyController?] = Ref::new(None)

///|
pub let enemyControllerSingleton : EnemyController = EnemyController::get_instance()

///|
pub fn EnemyController::get_instance() -> EnemyController {
  match enemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = EnemyController::new()
      enemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn EnemyController::update_move(
  self : EnemyController,
  dt : Double,
) -> Unit {
  ignore(self)
  // let pixels_per_s : Double = 20.0 // 80px / 4s
  let dt_sec = dt / 1000.0 // 转换为秒
  // enemy move

  for e in @Map.map_grid_system_singleton.enemy {
    let pixels_per_s = e.get_enemy_speed()
    let mut should_skip = false
    // VirusEnemy divide_effects not finished , Do not move
    if e.enemy_type() is @Enemy.VirusEnemy {
      for va in @Enemy.divide_effects.val {
        if !va.finished && e.id() == va.enemy_id1 {
          should_skip = true
          break
        }
        if !va.finished && e.id() == va.enemy_id2 {
          should_skip = true
          break
        }
      }
    }
    if should_skip {
      continue
    }

    // Check if enemy is dead
    // Movement logic for alive enemies
    // println("y \{e.position.y == (e.move_path[e.get_cur_point_index].y + 0.5) * @Core.map.gridSize}")
    // println(
    //   e.position.x == (e.move_path[e.get_cur_point_index].x + 0.5) * @Core.map.gridSize,
    // )
    // double bug  px 760 ex 759.99999999999999
    // so use @math.round fix this 
    // println("ex\{e.position.x}   px\{(e.move_path[e.get_cur_point_index].x + 0.5) * @Core.map.gridSize}")
    // 检查是否到达路径点
    let current_path_point = e.move_path()[e.get_cur_point_index()]
    let target_x = (current_path_point.x + 0.5) * @Core.map.gridSize
    let target_y = (current_path_point.y + 0.5) * @Core.map.gridSize

    // // 使用更宽松的判断条件，避免浮点数精度问题
    // let tolerance = 2.0 // 增加到2像素的误差，更好地处理高速情况
    // Flag to track if enemy has jumped in this frame to prevent double jumping
    let mut has_jumped = false
    if (@math.round(e.position().x) - target_x).abs() == 0 &&
      (@math.round(e.position().y) - target_y).abs() == 0 {
      let next_point_index = e.get_cur_point_index() + 1
      // Check if the NEXT point is a jump point
      // If so, enemy should disappear at current point and reappear at the jump point
      if next_point_index < e.move_path().length() &&
        e.move_path()[next_point_index].is_jump_point {

        // Debug information
        // println(
        //   "Enemy reached point before jump point: (\{current_path_point.x}, \{current_path_point.y})",
        // )
        // println(
        //   "Jumping to jump point: (\{e.move_path()[next_point_index].x}, \{e.move_path()[next_point_index].y})",
        // )

        // Move directly to the jump point (next point)
        let jump_point = e.move_path()[next_point_index]
        let jump_x = (jump_point.x + 0.5) * @Core.map.gridSize
        let jump_y = (jump_point.y + 0.5) * @Core.map.gridSize
        e.position().x = jump_x
        e.position().y = jump_y
        // Update path index to the jump point
        e.set_cur_point_index(next_point_index)
        // 设置下一个移动目标点 (point after the jump point)
        if next_point_index + 1 < e.move_path().length() {
          e.set_move_next_point(e.move_path()[next_point_index + 1])
        } else {
          e.set_move_next_point(e.move_path()[next_point_index])
        }
        // Mark that enemy has jumped in this frame
        has_jumped = true
      } else if next_point_index < e.move_path().length() {
        // Update path index and move target when reaching a regular point
        e.set_cur_point_index(next_point_index)
        if next_point_index + 1 < e.move_path().length() {
          e.set_move_next_point(e.move_path()[next_point_index + 1])
        } else {
          e.set_move_next_point(e.move_path()[next_point_index])
        }
      } else {
        // Enemy has reached the end of the path
        // This case was missing, which could cause issues
      }
    }

    // Only perform normal movement if enemy hasn't jumped in this frame and hasn't reached the end
    if !has_jumped && e.get_cur_point_index() < e.move_path().length() {
      // 移动逻辑 - 根据当前路径点的目标位置移动
      let current_path_point = e.move_path()[e.get_cur_point_index()]
      let target_x = (current_path_point.x + 0.5) * @Core.map.gridSize
      let target_y = (current_path_point.y + 0.5) * @Core.map.gridSize

      // 计算每帧移动距离（考虑时间缩放）
      let move_distance = pixels_per_s * dt_sec

      // Simplified movement logic - move in both directions without restrictive conditions
      // x方向移动
      let x_distance = (target_x - e.position().x).abs()
      if x_distance > 0.0 { // Only move if not already at target (with tolerance)
        if target_x > e.position().x {
          // Move right
          if move_distance < x_distance {
            e.position().x += move_distance
          } else {
            e.position().x = target_x
          }
        } else if target_x < e.position().x {
          // Move left
          if move_distance < x_distance {
            e.position().x -= move_distance
          } else {
            e.position().x = target_x
          }
        }
      }

      // y方向移动
      let y_distance = (target_y - e.position().y).abs()
      if y_distance > 0.0 { // Only move if not already at target (with tolerance)
        if target_y > e.position().y {
          // Move down
          if move_distance < y_distance {
            e.position().y += move_distance
          } else {
            e.position().y = target_y
          }
        } else if target_y < e.position().y {
          // Move up
          if move_distance < y_distance {
            e.position().y -= move_distance
          } else {
            e.position().y = target_y
          }
        }
      }
    }
    // Use path from enemy's move_path for endpoint calculation
    let path_points = e.move_path()
    let endPoint = if path_points.length() > 0 {
      path_points[path_points.length() - 1]
    } else {
      @Point.PathPoint::new(x=0, y=0)
    }
    let ex = (endPoint.x + 0.5) * @Core.map.gridSize
    let ey = (endPoint.y + 0.5) * @Core.map.gridSize
    // println(
    //   "ex \{ex},x \{e.position().x} ,ey \{ey} , y \{e.position().y},x=ex:\{@math.round(e.position().x) == ex},y==ey:\{@math.round(e.position().y) == ey}",
    // )
    // 敌人到达终点
    if @math.round(e.position().x) == ex && @math.round(e.position().y) == ey {

      // bug mul enemy the same time arrive end point 
      // to fix this use clear the emeny health then filter this
      // ignore(@Map.map_grid_system_singleton.enemy.remove(i))
      e.take_damage(e.max_health())
      @HPController.hPControllerSingleton.hd_damage()
    }
  }
}

///|
pub fn EnemyController::update_wave(
  self : EnemyController,
  dt : Double,
) -> Unit {
  ignore(self)
  let wave_config = @Map.enemyWaveConfigSingleton()

  // Process each path in the wave configuration
  for path_config in wave_config.path_wave_configs {
    let path_id = path_config.path_id
    let path_waves = path_config.waves

    // Check if current wave exists for this path
    if wave_config.cur_wave <= path_waves.length() {
      let current_wave = path_waves[wave_config.cur_wave - 1]

      // Check if current wave has enemies and we haven't spawned all enemies yet
      if current_wave.enemy_count < current_wave.max_enemies {
        current_wave.cur_d_t += dt
        // Mark wave as started
        path_waves[wave_config.cur_wave - 1].is_start = true

        // Check if it's time to spawn an enemy
        if current_wave.cur_d_t >= current_wave.spawn_timer {
          // Get the path based on the path_id
          let map_path = @Map.MapPath::get_instance()
          let path_option = map_path.get_path(path_id)
          let first_point = match path_option {
            Some(points) =>
              if points.length() > 0 {
                points[0]
              } else {
                @Point.PathPoint::new(x=0, y=0)
              }
            None => @Point.PathPoint::new(x=0, y=0)
          }
          let p = @Map.map_grid_system_singleton.to_enemy_position(
            @Point.BasePoint::new(x=first_point.x, y=first_point.y),
          )
          // Get the path points for this path_id
          let path_points = match path_option {
            Some(points) => points
            None => Array::new()
          }
          match current_wave.enemy_type {
            @Enemy.EnemyType::KangarooEnemy => {
              let e = @Enemy.KangarooEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            @Enemy.EnemyType::FlyingEnemy => {
              let e = @Enemy.FlyingEnemy::new(
                @Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            @Enemy.EnemyType::GroundEnemy => {
              let e = @Enemy.GroundEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            @Enemy.EnemyType::CaterpillarEnemy => {
              let e = @Enemy.CaterpillarEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            @Enemy.EnemyType::VirusEnemy => {
              let e = @Enemy.VirusEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            @Enemy.EnemyType::CheetahEnemy => {
              let e = @Enemy.CheetahEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            TurtleEnemy => {
              let e = @Enemy.TurtleEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            EggsEnemy => {
              let e = @Enemy.EggsEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            MechaEnemy => {
              let e = @Enemy.MechaEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            UFOEnemy => {
              let e = @Enemy.UFOEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
            BearEnemy => {
              let e = @Enemy.UFOEnemy::new(
                position=@Point.EnemyPoint::new(x=p.x, y=p.y),
              )
              // Use the path from path_config instead of wave_config.path_id
              e.move_path = path_points
              // Initialize move_next_point if path has at least 2 points
              if path_points.length() >= 2 {
                e.set_move_next_point(path_points[1])
              }
              @Map.map_grid_system_singleton.enemy.insert(0, e)
            }
          }
          current_wave.enemy_count += 1

          // current_wave.spawn_timer = 0.0
          current_wave.cur_d_t = 0
        }
      }
    }
  }

  // Move to next wave if all enemies in current wave are spawned and no enemies remain
  // Check if all paths have completed their current wave
  let mut all_paths_completed = true
  for path_config in wave_config.path_wave_configs {
    let path_waves = path_config.waves
    if wave_config.cur_wave <= path_waves.length() {
      let current_wave = path_waves[wave_config.cur_wave - 1]
      if current_wave.enemy_count < current_wave.max_enemies ||
        @Map.map_grid_system_singleton.enemy.length() > 0 {
        all_paths_completed = false
        break
      }
    }
  }
  if all_paths_completed {
    // Mark current wave as having no enemies
    for path_config in wave_config.path_wave_configs {
      let path_waves = path_config.waves
      if wave_config.cur_wave <= path_waves.length() {
        path_waves[wave_config.cur_wave - 1].has_enemy = false
      }
    }

    // Move to next wave
    wave_config.cur_wave += 1

    // Reset the new wave's enemy count if it exists
    if wave_config.cur_wave <= wave_config.path_wave_configs[0].waves.length() {
      for path_config in wave_config.path_wave_configs {
        let path_waves = path_config.waves
        if wave_config.cur_wave <= path_waves.length() {
          path_waves[wave_config.cur_wave - 1].enemy_count = 0
          path_waves[wave_config.cur_wave - 1].cur_d_t = 0
        }
      }
    }
  }
}

///|
pub fn EnemyController::filter_died(
  self : EnemyController,
  dt : Double,
  timestamp : Double,
) -> Unit {
  ignore(self)
  let mut enemies = Array::new()
  for e in @Map.map_grid_system_singleton.enemy {
    if e.is_alive() {
      enemies.insert(enemies.length(), e)
    } else {
      // in the furtrue ,  move to controll ?
      e.on_enemy_died()
      // 防止重复分列
      if e.enemy_type() is @Enemy.VirusEnemy &&
        !(e.get_enemy_status() is @Enemy.Divide) {
        enemies = enemies +
          virusEnemyControllerSingleton.on_enemy_died(e, dt, timestamp)
      }
    }
  }
  @Map.map_grid_system_singleton.enemy = enemies
}

///|
pub fn EnemyController::update(
  self : EnemyController,
  dt : Double, // 注意：这是毫秒！
  timestamp : Double,
) -> Unit {
  self.update_wave(dt)
  self.filter_died(dt, timestamp)
  self.update_move(dt)
}

///|
fn init {

}
