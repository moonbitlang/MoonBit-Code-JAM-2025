///|
pub(all) struct PathPoint {
  mut x : Double
  mut y : Double
  /// Indicates if this is a jump point where enemies disappear and reappear at the next point
  /// A jump point is defined when the previous point's px != current point's x AND previous point's py != current point's y
  mut is_jump_point : Bool
}

///|
pub fn PathPoint::new(x? : Double = 0, y? : Double = 0) -> PathPoint {
  PathPoint::{ x, y, is_jump_point: false }
}

///|
let pathPointInstance : Ref[PathPoint?] = Ref::new(None)

///|
pub let pathPointSingleton : PathPoint = PathPoint::get_instance()

///|
pub fn PathPoint::get_instance() -> PathPoint {
  match pathPointInstance.val {
    Some(render) => render
    None => {
      let new_instance = PathPoint::new()
      pathPointInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PathPoint::to_enemy_point(self : PathPoint) -> EnemyPoint {
  EnemyPoint::new(
    x=(self.x + 0.5) * @Core.map.gridSize,
    y=(self.y + 0.5) * @Core.map.gridSize,
  )
}

///|
pub fn PathPoint::to_string(self : PathPoint) -> String {
  "PathPoint(x:\{self.x},y:\{self.y})"
}
