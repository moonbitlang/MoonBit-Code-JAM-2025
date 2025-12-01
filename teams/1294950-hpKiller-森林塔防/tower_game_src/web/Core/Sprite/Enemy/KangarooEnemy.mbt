///|
/// 
pub(all) struct KangarooEnemy {
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
}

///|
const KANGAROOENEMY_DIED_GLOD = 60

///|
pub fn KangarooEnemy::new(
  position? : @Point.EnemyPoint = { x: -1, y: -1 },
  health? : Double = 100,
  speed? : Double = 20,
) -> KangarooEnemy {
  KangarooEnemy::{
    position,
    health,
    max_health: health,
    move_path: [@Point.pathPointSingleton],
    cur_path_index: 0,
    move_next_point: @Point.pathPointSingleton,
    enemyType: KangarooEnemy,
    id: generate_enemy_id(),
    died_glod: KANGAROOENEMY_DIED_GLOD,
    enemy_status: Normal,
    speed,
    render_small_size: false,
    render_normal_size: false,
    render_big_size: false,
  }
}

///|
pub impl Enemy for KangarooEnemy with set_render_big(self, b : Bool) {
  self.render_big_size = b
}

///|
pub impl Enemy for KangarooEnemy with set_render_normal(self, b : Bool) {
  self.render_normal_size = b
}

///|
pub impl Enemy for KangarooEnemy with set_render_small(self, b : Bool) {
  self.render_small_size = b
}

///|
pub impl Enemy for KangarooEnemy with get_enemy_speed(self) {
  self.speed
}

///|
pub impl Enemy for KangarooEnemy with set_enemy_speed(self, speed : Double) {
  self.speed = speed
}

///|
pub impl Enemy for KangarooEnemy with get_enemy_status(self) {
  self.enemy_status
}

///|
pub impl Enemy for KangarooEnemy with set_enemy_status(self, s : EnemyStatus) {
  self.enemy_status = s
}

///|
pub impl Enemy for KangarooEnemy with died_glod(self) {
  self.died_glod
}

///|
pub impl Enemy for KangarooEnemy with id(self) {
  self.id
}

///|
pub impl Enemy for KangarooEnemy with enemy_type(self) {
  self.enemyType
}

///|
pub impl Enemy for KangarooEnemy with set_cur_point_index(self, index) {
  self.cur_path_index = index
}

///|
pub impl Enemy for KangarooEnemy with set_move_next_point(self, point) {
  self.move_next_point = point
}

///|
pub impl Enemy for KangarooEnemy with position(self) {
  self.position
}

///|
pub impl Enemy for KangarooEnemy with health(self) {
  self.health
}

///|
pub impl Enemy for KangarooEnemy with max_health(self) {
  self.max_health
}

///|
pub impl Enemy for KangarooEnemy with move_path(self) {
  self.move_path
}

///|
pub impl Enemy for KangarooEnemy with get_cur_point_index(self) {
  self.cur_path_index
}

///|
pub impl Enemy for KangarooEnemy with move_next_point(self) {
  self.move_next_point
}

///|
pub impl Enemy for KangarooEnemy with is_alive(self) {
  self.health > 0.0
}

///|
pub impl Enemy for KangarooEnemy with take_damage(self, damage) {
  self.health -= damage
}
