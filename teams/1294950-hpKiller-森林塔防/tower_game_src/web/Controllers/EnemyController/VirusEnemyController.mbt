///|
pub struct VirusEnemyController {}

///|
pub fn VirusEnemyController::new() -> VirusEnemyController {
  VirusEnemyController::{  }
}

///|
let virusEnemyControllerInstance : Ref[VirusEnemyController?] = Ref::new(None)

///|
pub let virusEnemyControllerSingleton : VirusEnemyController = VirusEnemyController::get_instance()

///|
pub fn VirusEnemyController::get_instance() -> VirusEnemyController {
  match virusEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = VirusEnemyController::new()
      virusEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn VirusEnemyController::update(
  self : VirusEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}

///|
pub fn VirusEnemyController::on_enemy_died(
  self : VirusEnemyController,
  e : &@Enemy.Enemy,
  dt : Double,
  timestamp : Double,
) -> Array[&@Enemy.Enemy] {
  ignore(self)
  ignore(dt)
  let move_path = e.move_path()
  let _is_corner_point = if e.get_cur_point_index() < 2 {
    false
  } else {
    let pre = move_path[e.get_cur_point_index() - 2]
    let cur = move_path[e.get_cur_point_index() - 1]
    let next = move_path[e.get_cur_point_index()]
    // 不是水平直线 且 不是垂直直线 为 is_corner_point
    !(pre.x == cur.x && cur.x == next.x) && !(pre.y == cur.y && cur.y == next.y)
  }
  let cur = move_path[e.get_cur_point_index() - 1]
  let next = move_path[e.get_cur_point_index()]
  let mut is_skip_point = false
  if e.get_cur_point_index() + 1 < move_path.length() {
    let nnext = move_path[e.get_cur_point_index() + 1]
    if next.x != nnext.x && next.y != nnext.y {
      is_skip_point = true
    }
  }
  // let x = e.position().x / @Core.map.gridSize
  // let y = e.position().y / @Core.map.gridSize
  let x = e.position().x
  let y = e.position().y
  let mut x1 = -1.0
  let mut x2 = -1.0
  let mut y1 = -1.0
  let mut y2 = -1.0

  // 设置分裂动画
  // let gs = @Core.map.gridSize
  let r = @Core.map.gridSize // 36.0
  // 使用累计时间作为时间戳
  let split_time = timestamp
  // 设置分裂动画参数

  if cur.y == next.y && cur.x < next.x {
    x1 = if x - r > cur.x * r { x - r } else { x }
    x2 = if x + r < next.x * r { x + r } else { x }
    y1 = y
    y2 = y
  } else if cur.y == next.y && cur.x > next.x {
    x1 = if x - r < cur.x * r { x - r } else { x }
    x2 = if x + r > next.x * r { x + r } else { x }
    y1 = y
    y2 = y
  } else if cur.x == next.x && cur.y < next.y {
    y1 = if y - r > cur.y * r { y - r } else { y }
    y2 = if y + r < next.y * r { y + r } else { y }
    x1 = x
    x2 = x
  } else if cur.x == next.x && cur.y > next.y {
    y1 = if y - r < cur.y * r { y - r } else { y }
    y2 = if y + r > next.y * r { y + r } else { y }
    x1 = x
    x2 = x
  }
  if is_skip_point {
    if cur.y == next.y && cur.x < next.x {
      x1 = if x - r > cur.x * r { x - r } else { x }
      x2 = if x + r < next.x * r { x + r } else { x }
      y1 = y
      y2 = y
    } else if cur.y == next.y && cur.x > next.x {
      x1 = if x - r < cur.x * r { x + r } else { x }
      x2 = if x + r > next.x * r { x - r } else { x }
      y1 = y
      y2 = y
    } else if cur.x == next.x && cur.y < next.y {
      y1 = if y - r > cur.y * r { y - r } else { y }
      y2 = if y + r < next.y * r { y + r } else { y }
      x1 = x
      x2 = x
    } else if cur.x == next.x && cur.y > next.y {
      y1 = if y - r < cur.y * r { y + r } else { y }
      y2 = if y + r > next.y * r { y - r } else { y }
      x1 = x
      x2 = x
    }
  }
  let e1 = @Enemy.VirusEnemy::new(
    position=@Point.EnemyPoint::new(x=x1, y=y1),
    health=50,
  )
  let e2 = @Enemy.VirusEnemy::new(
    position=@Point.EnemyPoint::new(x=x2, y=y2),
    health=50,
  )
  e1.move_path = e.move_path()
  e2.move_path = e.move_path()
  e1.set_cur_point_index(e.get_cur_point_index())
  e2.set_cur_point_index(e.get_cur_point_index())
  e1.set_move_next_point(e.move_next_point())
  e2.set_move_next_point(e.move_next_point())
  e1.set_enemy_speed(e.get_enemy_speed())
  e2.set_enemy_speed(e.get_enemy_speed())
  e1.set_render_small(true)
  e2.set_render_small(true)
  e1.set_enemy_status(@Enemy.Divide)
  e2.set_enemy_status(@Enemy.Divide)
  e.set_divide_effect({
    x1: x,
    y1: y,
    x2: x1,
    y2: y1,
    x3: x2,
    y3: y2,
    start_time: split_time,
    total_time: 1500.0, // 动画持续500毫秒
    finished: false,
    enemy_id1: e1.id(),
    enemy_id2: e2.id(),
  })
  [e1, e2]

  // println(@Map.map_grid_system_singleton.enemy.length())
  // in console print 2
  // println("--------")
  // @Map.map_grid_system_singleton.enemy.insert(0, e1)
  // @Map.map_grid_system_singleton.enemy.insert(0, e2)
  // [e1, e2]
  // let wc = @Map.enemyWaveConfigSingleton()
  // println(wc.cur_wave)

  // println(@Map.map_grid_system_singleton.enemy.length())
  // in console print 4
}

///|
fn init {

  //   @EventSystem.add_virus_divide_controller_listener(l)
}
