///|
pub(all) struct TowerPoint {
  mut x : Double
  mut y : Double
}

///|
pub fn TowerPoint::new(x? : Double = 0, y? : Double = 0) -> TowerPoint {
  { x, y }
}

///|
let towerPointInstance : Ref[TowerPoint?] = Ref::new(None)

///|
pub let towerPointSingleton : TowerPoint = TowerPoint::get_instance()

///|
pub fn TowerPoint::get_instance() -> TowerPoint {
  match towerPointInstance.val {
    Some(render) => render
    None => {
      let new_instance = TowerPoint::new()
      towerPointInstance.val = Some(new_instance)
      new_instance
    }
  }
}
