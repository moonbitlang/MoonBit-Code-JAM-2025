///|
pub struct Rect {
  x : Double
  y : Double
  w : Double
  h : Double
}

///|
pub fn Rect::new(x : Double, y : Double, w : Double, h : Double) -> Rect {
  { x, y, w, h }
}
