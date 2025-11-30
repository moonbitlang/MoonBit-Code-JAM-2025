///|
pub type CanvasGradient
// [String, CanvasGradient]

///|

///|
pub(all) enum Color {
  StringColor(String)
  CanvasGradientColor(CanvasGradient)
  // DoubleColor(Double)
}

///|
pub(open) trait ColorLike {
  to_color(Self) -> Color
}

///|
pub impl ColorLike for String with to_color(self) {
  StringColor(self)
}

///|
pub impl ColorLike for CanvasGradient with to_color(self) {
  CanvasGradientColor(self)
}

///|
extern "js" fn add_color_stop_string(
  g : CanvasGradient,
  offset : Double,
  color : String,
) -> Unit =
  #| (g,offset,color) => g.addColorStop(offset,color)

///|
extern "js" fn add_color_stop_canvas_gradient(
  g : CanvasGradient,
  offset : Double,
  color : CanvasGradient,
) -> Unit =
  #| (g,offset,color) => g.addColorStop(offset,color)

///|
pub fn CanvasGradient::auto_conversion(
  self : CanvasGradient,
  offset : Double,
  color : Color,
) -> Unit {
  match color {
    StringColor(s) =>
      match s {
        s => add_color_stop_string(self, offset, s)
      }
    CanvasGradientColor(c) =>
      match c {
        c => add_color_stop_canvas_gradient(self, offset, c)
      }
  }
}

///|
pub fn[T : ColorLike] CanvasGradient::addColorStop(
  self : CanvasGradient,
  offset : Double,
  color : T,
) -> Unit {
  CanvasGradient::auto_conversion(self, offset, color.to_color())
}

///|
pub fn CanvasGradient::createLinearGradient(self : CanvasGradient) -> Unit {
  ignore(self)
}

///|
test "addColorStop" {
  let g_base = ctxSingleton.createRadialGradient(0, 0, 0, 0, 0, 0)
  g_base.addColorStop(0.0, "#C7E1FF")
}
