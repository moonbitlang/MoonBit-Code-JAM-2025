///|
/// https://p5js.org/reference/p5/ellipseMode/
/// mode: 'CENTER', 'RADIUS', 'CORNER', 'CORNERS'
extern "js" fn P5Instance::ellipseMode_(
  self : P5Instance,
  mode : String,
) -> Unit =
  #| (self, mode) => self.ellipseMode(mode)

///|
/// https://p5js.org/reference/p5/rectMode/
/// mode: 'CENTER', 'RADIUS', 'CORNER', 'CORNERS'
extern "js" fn P5Instance::rectMode_(self : P5Instance, mode : String) -> Unit =
  #| (self, mode) => self.rectMode(mode)

///|
/// https://p5js.org/reference/p5/noSmooth/
extern "js" fn P5Instance::noSmooth_(self : P5Instance) -> Unit =
  #| (self) => self.noSmooth()

///|
/// https://p5js.org/reference/p5/smooth/
/// 启用抗锯齿
extern "js" fn P5Instance::smooth_(self : P5Instance) -> Unit =
  #| (self) => self.smooth()

///|
/// https://p5js.org/reference/p5/strokeCap/
/// cap: 'ROUND', 'SQUARE', 'PROJECT'
extern "js" fn P5Instance::strokeCap_(self : P5Instance, cap : String) -> Unit =
  #| (self, cap) => self.strokeCap(cap)

///|
/// https://p5js.org/reference/p5/strokeJoin/
/// join: 'MITER', 'BEVEL', 'ROUND'
extern "js" fn P5Instance::strokeJoin_(
  self : P5Instance,
  join : String,
) -> Unit =
  #| (self, join) => self.strokeJoin(join)

///|
/// https://p5js.org/reference/p5/strokeWeight/
extern "js" fn P5Instance::strokeWeight_(
  self : P5Instance,
  weight : Double,
) -> Unit =
  #| (self, weight) => self.strokeWeight(weight)
