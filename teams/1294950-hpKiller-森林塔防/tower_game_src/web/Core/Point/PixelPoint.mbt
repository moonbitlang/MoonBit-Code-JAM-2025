///|
/// Point in 2D space with pixel coordinates.
///
/// Fields:
///
/// * `x` : The x coordinate of the point in pixels.
/// * `y` : The y coordinate of the point in pixels.
///
/// Example:
///
/// ```moonbit
/// let point = PixelPoint::new(x=100.0, y=50.0)
/// inspect(point.x, content="100")
/// inspect(point.y, content="50")
/// ```
///
pub(all) struct PixelPoint {
  x : Double
  y : Double
}

///|
pub fn PixelPoint::new(x? : Double = 0, y? : Double = 0) -> PixelPoint {
  PixelPoint::{ x, y }
}

///|
let pixelPointInstance : Ref[PixelPoint?] = Ref::new(None)

///|
pub let pixelPointSingleton : PixelPoint = PixelPoint::get_instance()

///|
pub fn PixelPoint::get_instance() -> PixelPoint {
  match pixelPointInstance.val {
    Some(render) => render
    None => {
      let new_instance = PixelPoint::new()
      pixelPointInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PixelPoint::to_string(self : PixelPoint) -> String {
  "PixelPoint(x:\{self.x},y:\{self.y})"
}

///| move to MapGridSystem
// pub fn PixelPoint::to_tower_point(self : PixelPoint) -> TowerPoint {
//   // 1. compress to 1-base point
//   @
//   let baseX = self.x 
//   TowerPoint::new(x=self.x, y=self.y)
// }
// error: cyclic dependency detected: retfings/game/Core/Point -> retfings/game/Core/Map -> retfings/game/Core/Sprite/Tower -> retfings/game/Core/Point
