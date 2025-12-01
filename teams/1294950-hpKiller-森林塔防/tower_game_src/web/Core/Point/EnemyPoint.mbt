///|
pub(all) struct EnemyPoint {
  mut x : Double
  mut y : Double
}

///|
pub fn EnemyPoint::new(x? : Double = 0, y? : Double = 0) -> EnemyPoint {
  { x, y }
}

///|
let enemyPointInstance : Ref[EnemyPoint?] = Ref::new(None)

///|
pub let enemyPointSingleton : EnemyPoint = EnemyPoint::get_instance()

///|
pub fn EnemyPoint::get_instance() -> EnemyPoint {
  match enemyPointInstance.val {
    Some(render) => render
    None => {
      let new_instance = EnemyPoint::new()
      enemyPointInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn EnemyPoint::to_string(self : EnemyPoint) -> String {
  "EnemyPoint(x:\{self.x},y:\{self.y})"
}
