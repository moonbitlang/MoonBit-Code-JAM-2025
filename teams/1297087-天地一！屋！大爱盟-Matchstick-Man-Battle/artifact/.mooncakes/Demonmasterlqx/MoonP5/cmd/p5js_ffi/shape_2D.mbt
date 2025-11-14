// extern "js" fn P5Instance::arc_ffi_base(self: P5Instance, x: Double, y: Double, w: Double, h: Double, start: Double, stop: Double) -> Unit =
//   #| (self, x, y, w, h, start, stop) => self.arc(x, y, w, h, start, stop)
// extern "js" fn P5Instance::arc_ffi_mode(self: P5Instance, x: Double, y: Double, w: Double, h: Double, start: Double, stop: Double, mode: String) -> Unit =
//   #| (self, x, y, w, h, start, stop, mode) => self.arc(x, y, w, h, start, stop, mode)
// extern "js" fn P5Instance::arc_ffi_detail(self: P5Instance, x: Double, y: Double, w: Double, h: Double, start: Double, stop: Double, mode: String, detail: Int) -> Unit =
//   #| (self, x, y, w, h, start, stop, mode, detail) => self.arc(x, y, w, h, start, stop, mode, detail)

///|
/// https://p5js.org/reference/p5/arc/
/// mode: 'PIE', 'CHORD', 'OPEN'
extern "js" fn P5Instance::arc_(
  self : P5Instance,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
  start : Double,
  stop : Double,
  mode? : String?,
  detail? : Int?,
) -> Unit =
  #| (self, x, y, w, h, start, stop, mode, detail) => self.arc(x, y, w, h, start, stop, mode, detail)

///|
/// https://p5js.org/reference/p5/circle/
extern "js" fn P5Instance::circle_(
  self : P5Instance,
  x : Double,
  y : Double,
  d : Double,
) -> Unit =
  #| (self, x, y, d) => self.circle(x, y, d)

///|
/// https://p5js.org/reference/p5/ellipse/
extern "js" fn P5Instance::ellipse_(
  self : P5Instance,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit =
  #| (self, x, y, w, h) => self.ellipse(x, y, w, h)

///|
/// https://p5js.org/reference/p5/line/
extern "js" fn P5Instance::line_(
  self : P5Instance,
  x1 : Double,
  y1 : Double,
  x2 : Double,
  y2 : Double,
) -> Unit =
  #| (self, x1, y1, x2, y2) => self.line(x1, y1, x2, y2)

///|
/// https://p5js.org/reference/p5/point/
extern "js" fn P5Instance::point_(
  self : P5Instance,
  x : Double,
  y : Double,
) -> Unit =
  #| (self, x, y) => self.point(x, y)

///|
/// https://p5js.org/reference/p5/quad/
extern "js" fn P5Instance::quad_(
  self : P5Instance,
  x1 : Double,
  y1 : Double,
  x2 : Double,
  y2 : Double,
  x3 : Double,
  y3 : Double,
  x4 : Double,
  y4 : Double,
) -> Unit =
  #| (self, x1, y1, x2, y2, x3, y3, x4, y4) => self.quad(x1, y1, x2, y2, x3, y3, x4, y4)

///|
/// https://p5js.org/reference/p5/rect/
extern "js" fn P5Instance::rect_(
  self : P5Instance,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit =
  #| (self, x, y, w, h) => self.rect(x, y, w, h)

///|
/// https://p5js.org/reference/p5/triangle/
extern "js" fn P5Instance::triangle_(
  self : P5Instance,
  x1 : Double,
  y1 : Double,
  x2 : Double,
  y2 : Double,
  x3 : Double,
  y3 : Double,
) -> Unit =
  #| (self, x1, y1, x2, y2, x3, y3) => self.triangle(x1, y1, x2, y2, x3, y3)

///|
/// https://p5js.org/reference/p5/square/
extern "js" fn P5Instance::square_(
  self : P5Instance,
  x : Double,
  y : Double,
  s : Double,
) -> Unit =
  #| (self, x, y, s) => self.square(x, y, s)
