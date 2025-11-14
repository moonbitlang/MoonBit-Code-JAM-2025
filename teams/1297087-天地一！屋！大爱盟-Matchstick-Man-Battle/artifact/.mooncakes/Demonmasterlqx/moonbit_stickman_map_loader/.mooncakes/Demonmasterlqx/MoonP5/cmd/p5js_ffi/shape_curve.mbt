/// https://p5js.org/reference/p5/bezierDetail/
/// 在 2D 模式下，bezierDetail() 没有效果
// pub extern "js" fn P5Instance::bezierDetail(self: P5Instance, detail: Int) -> Unit =
//   #| (self, detail) => self.bezierDetail(detail)

///|
/// https://p5js.org/reference/p5/bezier/
extern "js" fn P5Instance::bezier_(
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
  #| (self, x1, y1, x2, y2, x3, y3, x4, y4) => self.bezier(x1, y1, x2, y2, x3, y3, x4, y4)

/// https://p5js.org/reference/p5/bezierDetail/
/// 在 2D 模式下，bezierDetail() 没有效果
// pub extern "js" fn P5Instance::bezierDetail(self: P5Instance, detail: Int) -> Unit =
//   #| (self, detail) => self.bezierDetail(detail)

///|
/// https://p5js.org/reference/p5/bezierPoint/
/// a, b, c, d: 控制点坐标（x 和 y 分别都要一次）
/// 
/// let x1 = 85;
/// let x2 = 10;
/// let x3 = 90;
/// let x4 = 15;
/// let y1 = 20;
/// let y2 = 10;
/// let y3 = 90;
/// let y4 = 80;
/// noFill();
/// bezier(x1, y1, x2, y2, x3, y3, x4, y4);
/// fill(255);
/// let x = bezierPoint(x1, x2, x3, x4, 0);
/// let y = bezierPoint(y1, y2, y3, y4, 0);
/// circle(x, y, 5);
/// x = bezierPoint(x1, x2, x3, x4, 0.5);
/// y = bezierPoint(y1, y2, y3, y4, 0.5);
/// circle(x, y, 5);
/// 
extern "js" fn P5Instance::bezierPoint_(
  self : P5Instance,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  t : Double,
) -> Double =
  #| (self, a, b, c, d, t) => self.bezierPoint(a, b, c, d, t)

///|
/// https://p5js.org/reference/p5/bezierTangent/
/// 同bezierPoint()
extern "js" fn P5Instance::bezierTangent_(
  self : P5Instance,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  t : Double,
) -> Double =
  #| (self, a, b, c, d, t) => self.bezierTangent(a, b, c, d, t)

///|
/// https://p5js.org/reference/p5/curve/
extern "js" fn P5Instance::curve_(
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
  #| (self, x1, y1, x2, y2, x3, y3, x4, y4) => self.curve(x1, y1, x2, y2, x3, y3, x4, y4)

/// https://p5js.org/reference/p5/curveDetail/
/// /// 在 2D 模式下，curveDetail() 没有效果
// pub extern "js" fn P5Instance::curveDetail(self: P5Instance, detail: Int) -> Unit =
//   #| (self, detail) => self.curveDetail(detail)

///|
/// https://p5js.org/reference/p5/curvePoint/
/// 同bezierPoint()
extern "js" fn P5Instance::curvePoint_(
  self : P5Instance,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  t : Double,
) -> Double =
  #| (self, a, b, c, d, t) => self.curvePoint(a, b, c, d, t)

///|
/// https://p5js.org/reference/p5/curveTangent/
/// 同bezierPoint()
extern "js" fn P5Instance::curveTangent_(
  self : P5Instance,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  t : Double,
) -> Double =
  #| (self, a, b, c, d, t) => self.curveTangent(a, b, c, d, t)

///|
/// https://p5js.org/reference/p5/curveTightness/
extern "js" fn P5Instance::curveTightness_(
  self : P5Instance,
  amount : Double,
) -> Unit =
  #| (self, amount) => self.curveTightness(amount)
