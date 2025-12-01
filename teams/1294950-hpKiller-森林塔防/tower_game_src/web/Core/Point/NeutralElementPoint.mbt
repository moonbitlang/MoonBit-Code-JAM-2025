///|
pub(all) struct NeutralElementPoint {
  mut x : Double
  mut y : Double
}

///|
pub fn NeutralElementPoint::new(
  x? : Double = 0,
  y? : Double = 0,
) -> NeutralElementPoint {
  { x, y }
}

///|
let neutralElementPointInstance : Ref[NeutralElementPoint?] = Ref::new(None)

///|
pub let neutralElementPointSingleton : NeutralElementPoint = NeutralElementPoint::get_instance()

///|
pub fn NeutralElementPoint::get_instance() -> NeutralElementPoint {
  match neutralElementPointInstance.val {
    Some(render) => render
    None => {
      let new_instance = NeutralElementPoint::new()
      neutralElementPointInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn NeutralElementPoint::to_string(self : NeutralElementPoint) -> String {
  "NeutralElementPoint(x:\{self.x},y:\{self.y})"
}
