///| Transform Functions

/// https://p5js.org/reference/p5/applyMatrix/
/// 将变换矩阵应用到坐标系统
/// 2D模式: applyMatrix(a, b, c, d, e, f)
/// 3D模式: applyMatrix(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
extern "js" fn P5Instance::applyMatrix_(
  self: P5Instance,
  a: Double,
  b: Double,
  c: Double,
  d: Double,
  e: Double,
  f: Double,
  g?: Double? = None,
  h?: Double? = None,
  i?: Double? = None,
  j?: Double? = None,
  k?: Double? = None,
  l?: Double? = None,
  m?: Double? = None,
  n?: Double? = None,
  o?: Double? = None,
  p?: Double? = None
) -> Unit =
  #| (self, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) => {
  #|   const args = [a, b, c, d, e, f];
  #|   if (g) args.push(g._0);
  #|   if (h) args.push(h._0);
  #|   if (i) args.push(i._0);
  #|   if (j) args.push(j._0);
  #|   if (k) args.push(k._0);
  #|   if (l) args.push(l._0);
  #|   if (m) args.push(m._0);
  #|   if (n) args.push(n._0);
  #|   if (o) args.push(o._0);
  #|   if (p) args.push(p._0);
  #|   self.applyMatrix(...args);
  #| }

/// https://p5js.org/reference/p5/resetMatrix/
/// 清除应用到坐标系统的所有变换
extern "js" fn P5Instance::resetMatrix_(self: P5Instance) -> Unit =
  #| (self) => self.resetMatrix()

/// https://p5js.org/reference/p5/rotate/
/// 旋转坐标系统
/// `angle`: 旋转角度（以弧度为单位）
/// `axis` (可选): 在 3D 模式下，旋转轴 [x, y, z]
extern "js" fn P5Instance::rotate1_(
  self: P5Instance,
  angle: Double,
  axis?: Array[Double]? = None
) -> Unit =
  #| (self, angle, axis) => {
  #|   if (axis) {
  #|     self.rotate(angle, axis._0);
  #|   } else {
  #|     self.rotate(angle);
  #|   }
  #| }

extern "js" fn P5Instance::rotate2_(
  self: P5Instance,
  angle: Double,
) -> Unit =
  #| (self, angle) => {
  #|     self.rotate(angle);
  #|   }
  #| }

/// https://p5js.org/reference/p5/rotateX/
/// 在 WebGL 模式下绕 x 轴旋转坐标系统
/// `angle`: 旋转角度（以弧度为单位）
extern "js" fn P5Instance::rotateX_(self: P5Instance, angle: Double) -> Unit =
  #| (self, angle) => self.rotateX(angle)

/// https://p5js.org/reference/p5/rotateY/
/// 在 WebGL 模式下绕 y 轴旋转坐标系统
/// `angle`: 旋转角度（以弧度为单位）
extern "js" fn P5Instance::rotateY_(self: P5Instance, angle: Double) -> Unit =
  #| (self, angle) => self.rotateY(angle)

/// https://p5js.org/reference/p5/rotateZ/
/// 在 WebGL 模式下绕 z 轴旋转坐标系统
/// `angle`: 旋转角度（以弧度为单位）
extern "js" fn P5Instance::rotateZ_(self: P5Instance, angle: Double) -> Unit =
  #| (self, angle) => self.rotateZ(angle)

/// https://p5js.org/reference/p5/scale/
/// 缩放坐标系统
/// 1个参数: 均匀缩放
/// 2个参数: x 和 y 方向缩放
/// 3个参数: x, y 和 z 方向缩放
extern "js" fn P5Instance::scale_(
  self: P5Instance,
  s: Double,
  y?: Double? = None,
  z?: Double? = None
) -> Unit =
  #| (self, s, y, z) => {
  #|   if (z) {
  #|     self.scale(s, y._0, z._0);
  #|   } else if (y) {
  #|     self.scale(s, y._0);
  #|   } else {
  #|     self.scale(s);
  #|   }
  #| }

/// https://p5js.org/reference/p5/shearX/
/// 沿 x 轴剪切，使形状看起来倾斜
/// `angle`: 剪切角度（以弧度为单位）
extern "js" fn P5Instance::shearX_(
  self: P5Instance, 
  angle: Double
) -> Unit =
  #| (self, angle) => self.shearX(angle)

/// https://p5js.org/reference/p5/shearY/
/// 沿 y 轴剪切，使形状看起来倾斜
/// `angle`: 剪切角度（以弧度为单位）
extern "js" fn P5Instance::shearY_(
  self: P5Instance, 
  angle: Double
) -> Unit =
  #| (self, angle) => self.shearY(angle)

/// https://p5js.org/reference/p5/translate/
/// 平移坐标系统
/// 2D模式: translate(x, y)
/// 3D模式: translate(x, y, z)
extern "js" fn P5Instance::translate1_(
  self: P5Instance,
  x: Double,
  y: Double,
  z?: Double? = None
) -> Unit =
  #| (self, x, y, z) => {
  #|   if (z) {
  #|     self.translate(x, y, z._0);
  #|   } else {
  #|     self.translate(x, y);
  #|   }
  #| }

extern "js" fn P5Instance::translate2_(
  self: P5Instance,
  x: Double,
  y: Double,
) -> Unit =
  #| (self, x, y) => {
  #|     self.translate(x, y);
  #|   }
  #|