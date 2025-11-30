///|
/// Point in 2D space with x and y 1-base coordinates. 
///
/// Fields:
///
/// * `x` : The x coordinate of the point.
/// * `y` : The y coordinate of the point.
///
/// Example:
///
/// ```moonbit
/// let point = BasePoint::new(x=10.0, y=20.0)
/// inspect(point.x, content="10")
/// inspect(point.y, content="20")
///
/// // Using default values
/// let origin = BasePoint::new()
/// inspect(origin.x, content="0")
/// inspect(origin.y, content="0")
/// ```
///
pub(all) struct BasePoint {
  x : Double
  y : Double
}

///|
pub fn BasePoint::new(x? : Double = 0, y? : Double = 0) -> BasePoint {
  { x, y }
}

///|
let basePointInstance : Ref[BasePoint?] = Ref::new(None)

///|
pub let basePointSingleton : BasePoint = BasePoint::get_instance()

///|
pub fn BasePoint::get_instance() -> BasePoint {
  match basePointInstance.val {
    Some(render) => render
    None => {
      let new_instance = BasePoint::new()
      basePointInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn BasePoint::to_string(self : BasePoint) -> String {
  "BasePoint(x:\{self.x},y:\{self.y})"
}
