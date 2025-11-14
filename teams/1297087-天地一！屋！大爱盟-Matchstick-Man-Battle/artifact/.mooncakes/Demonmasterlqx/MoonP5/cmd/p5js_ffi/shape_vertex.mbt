///|
/// https://p5js.org/reference/p5/beginContour/
extern "js" fn P5Instance::beginContour_(self : P5Instance) -> Unit =
  #| (self) => self.beginContour()

///|
/// https://p5js.org/reference/p5/endContour/
extern "js" fn P5Instance::endContour_(self : P5Instance) -> Unit =
  #| (self) => self.endContour()

///|
/// https://p5js.org/reference/p5/beginShape/
// beginShape() 准备开始定义一个复杂的形状
// POINTS 绘制一系列点。
// LINES 绘制一系列不相连的线段。
// TRIANGLES 绘制一系列单独的三角形。
// TRIANGLE_FAN 以扇形方式绘制一系列连接的三角形，共享第一个顶点。
// TRIANGLE_STRIP 以条带方式绘制一系列连接的三角形。
// QUADS 绘制一系列单独的四边形（四边形）。
// QUAD_STRIP 使用相邻边绘制四边形条带形式。
// TESS 通过显式细分创建填充曲线（仅限 WebGL）。
extern "js" fn P5Instance::beginShape1_(
  self : P5Instance,
  mode? : String,
) -> Unit =
  #| (self, mode) => self.beginShape(mode)

extern "js" fn P5Instance::beginShape2_(
  self : P5Instance,
) -> Unit =
  #| (self) => self.beginShape()

///|
/// https://p5js.org/reference/p5/endShape/
extern "js" fn P5Instance::endShape1_(
  self : P5Instance,
  mode? : String,
  count? : Int,
) -> Unit =
  #| (self, mode, count) => self.endShape(mode, count)

extern "js" fn P5Instance::endShape2_(
  self : P5Instance,
  mode? : String,
) -> Unit =
  #| (self, mode) => self.endShape(mode)

///|
/// https://p5js.org/reference/p5/endShape/
extern "js" fn P5Instance::endShape3_(
  self : P5Instance,
  count? : Int,
) -> Unit =
  #| (self, count) => self.endShape(count)

///|
/// https://p5js.org/reference/p5/endShape/
extern "js" fn P5Instance::endShape4_(
  self : P5Instance,
) -> Unit =
  #| (self) => self.endShape()

///|
/// https://p5js.org/reference/p5/bezierVertex/
/// 在向beginShape()和endShape()之间使用，指定一个贝塞尔曲线的顶点
/// 如果beginShape()传递了一个参数（例如beginShape(TRIANGLES)），则bezierVertex()将不起作用
/// x2, y2: 第一个控制点的坐标
/// x3, y3: 第二个控制点的坐标
/// x4, y4: 结束点的坐标
extern "js" fn P5Instance::bezierVertex_(
  self : P5Instance,
  x2 : Double,
  y2 : Double,
  x3 : Double,
  y3 : Double,
  x4 : Double,
  y4 : Double,
) -> Unit =
  #| (self, x2, y2, x3, y3, x4, y4) => self.bezierVertex(x2, y2, x3, y3, x4, y4)

///|
/// https://p5js.org/reference/p5/curveVertex/
/// 在向beginShape()和endShape()之间使用，指定一个曲线的顶点
/// 如果beginShape()传递了一个参数（例如beginShape(TRIANGLES)），则curveVertex()将不起作用
/// x, y: 顶点坐标
extern "js" fn P5Instance::curveVertex_(
  self : P5Instance,
  x : Double,
  y : Double,
) -> Unit =
  #| (self, x, y) => self.curveVertex(x, y)

///|
/// https://p5js.org/reference/p5/vertex/
/// vertex() 必须在 beginShape() 和 endShape() 之间使用
/// x, y, z: 顶点坐标
/// u, v: 纹理坐标
/// 默认 z=0, u=0, v=0
extern "js" fn P5Instance::vertex_(
  self : P5Instance,
  x : Double,
  y : Double,
  z? : Double = 0.0,
  u? : Double = 0.0,
  v? : Double = 0.0,
) -> Unit =
  #| (self, x, y, z, u, v) => self.vertex(x, y, z, u, v)

///|
/// https://p5js.org/reference/p5/normal/
/// normal() 必须在 beginShape() 和 endShape() 之间使用
/// nx, ny, nz: 法线向量的 x、y 和 z 分量
/// 默认 nz=0
extern "js" fn P5Instance::normal_(
  self : P5Instance,
  nx : Double,
  ny : Double,
  nz? : Double = 0.0,
) -> Unit =
  #| (self, nx, ny, nz) => self.normal(nx, ny, nz)

///|
/// https://p5js.org/reference/p5/quadraticVertex/
/// 在向beginShape()和endShape()之间使用，指定一个二次贝塞尔曲线的顶点
/// 如果beginShape()传递了一个参数（例如beginShape(TRIANGLES)），则quadraticVertex()将不起作用
/// x2, y2: 控制点的坐标
/// x3, y3: 结束点的坐标
/// 曲线段使用前一个顶点作为第一个锚点，因此必须至少在 quadraticVertex() 之前调用一次 vertex()
extern "js" fn P5Instance::quadraticVertex_(
  self : P5Instance,
  x2 : Double,
  y2 : Double,
  x3 : Double,
  y3 : Double,
) -> Unit =
  #| (self, x2, y2, x3, y3) => self.quadraticVertex(x2, y2, x3, y3)
