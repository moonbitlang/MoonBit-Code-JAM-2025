///|
/// 
pub(all) struct DivideAnimation {
  x1 : Double
  y1 : Double
  x2 : Double
  y2 : Double
  x3 : Double
  y3 : Double
  mut start_time : Double
  mut total_time : Double
  mut finished : Bool
  mut enemy_id1 : Int
  mut enemy_id2 : Int
}

///|
/// 
pub(all) struct VirusEnemy {
  mut position : @Point.EnemyPoint
  mut health : Double
  max_health : Double
  mut move_path : Array[@Point.PathPoint]
  mut cur_path_index : Int
  mut move_next_point : @Point.PathPoint
  enemyType : EnemyType
  id : Int
  died_glod : Int
  mut enemy_status : EnemyStatus
  mut speed : Double
  mut render_small_size : Bool
  mut render_normal_size : Bool
  mut render_big_size : Bool
  mut divide_animation : DivideAnimation
}

///|
const VIRUSENEMY_DIED_GLOD = 60

///|
pub fn VirusEnemy::new(
  position? : @Point.EnemyPoint = { x: -1, y: -1 },
  health? : Double = 100,
  speed? : Double = 20,
) -> VirusEnemy {
  VirusEnemy::{
    position,
    health,
    max_health: health,
    move_path: [@Point.pathPointSingleton],
    cur_path_index: 0,
    move_next_point: @Point.pathPointSingleton,
    enemyType: VirusEnemy,
    id: generate_enemy_id(),
    died_glod: VIRUSENEMY_DIED_GLOD,
    enemy_status: Normal,
    speed,
    render_small_size: false,
    render_normal_size: false,
    render_big_size: false,
    divide_animation: {
      x1: -1.0,
      y1: -1.0,
      x2: -1.0,
      y2: -1.0,
      x3: -1.0,
      y3: -1.0,
      start_time: -1.0,
      total_time: -1.0,
      finished: false,
      enemy_id1: -1,
      enemy_id2: -1,
    },
  }
}

///|
pub let divide_effects : Ref[Array[DivideAnimation]] = Ref::new(Array::new())

///|
pub impl Enemy for VirusEnemy with get_divide_effect(self) -> DivideAnimation {
  ignore(self)
  // ignore(d)
  self.divide_animation
}

///|
pub impl Enemy for VirusEnemy with set_divide_effect(self, d : DivideAnimation) -> Unit {
  ignore(self)
  ignore(d)
  divide_effects.val.insert(0, d)
  self.divide_animation = d
}

///|
pub impl Enemy for VirusEnemy with set_render_big(self, b : Bool) {
  self.render_big_size = b
}

///|
pub impl Enemy for VirusEnemy with set_render_normal(self, b : Bool) {
  self.render_normal_size = b
}

///|
pub impl Enemy for VirusEnemy with set_render_small(self, b : Bool) {
  self.render_small_size = b
}

///|
pub impl Enemy for VirusEnemy with render_small_size(self) {
  self.render_small_size
}

///|
pub impl Enemy for VirusEnemy with get_enemy_speed(self) {
  self.speed
}

///|
pub impl Enemy for VirusEnemy with set_enemy_speed(self, speed : Double) {
  self.speed = speed
}

///|
pub impl Enemy for VirusEnemy with get_enemy_status(self) {
  self.enemy_status
}

///|
pub impl Enemy for VirusEnemy with set_enemy_status(self, s : EnemyStatus) {
  self.enemy_status = s
}

///|
pub impl Enemy for VirusEnemy with died_glod(self) {
  self.died_glod
}

///|
pub impl Enemy for VirusEnemy with id(self) {
  self.id
}

///|
pub impl Enemy for VirusEnemy with enemy_type(self) {
  self.enemyType
}

///|
pub impl Enemy for VirusEnemy with set_cur_point_index(self, index) {
  self.cur_path_index = index
}

///|
pub impl Enemy for VirusEnemy with set_move_next_point(self, point) {
  self.move_next_point = point
}

///|
pub impl Enemy for VirusEnemy with position(self) {
  self.position
}

///|
pub impl Enemy for VirusEnemy with health(self) {
  self.health
}

///|
pub impl Enemy for VirusEnemy with max_health(self) {
  self.max_health
}

///|
pub impl Enemy for VirusEnemy with move_path(self) {
  self.move_path
}

///|
pub impl Enemy for VirusEnemy with get_cur_point_index(self) {
  self.cur_path_index
}

///|
pub impl Enemy for VirusEnemy with move_next_point(self) {
  self.move_next_point
}

///|
pub impl Enemy for VirusEnemy with is_alive(self) {
  self.health > 0.0
}

///|
pub impl Enemy for VirusEnemy with take_damage(self, damage) {
  self.health -= damage
}
