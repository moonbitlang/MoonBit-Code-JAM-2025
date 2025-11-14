///|
/// https://p5js.org/reference/p5/noStroke/
extern "js" fn P5Instance::noStroke_(self : P5Instance) -> Unit =
  #| (self) => self.noStroke()

///|
/// https://p5js.org/reference/p5/background/
/// 设置画布的背景颜色
extern "js" fn P5Instance::background_(
  self : P5Instance,
  v1 : Double,
  v2? : Double? = None,
  v3? : Double? = None,
  a? : Double? = None,
) -> Unit =
  #| (self, v1, v2, v3, a) => {
  #|   const v2_val = v2 ? v2._0 : undefined;
  #|   const v3_val = v3 ? v3._0 : undefined;
  #|   const a_val = a ? a._0 : undefined;
  #|   self.background(v1, v2_val, v3_val, a_val);
  #| }

///|
/// https://p5js.org/reference/p5/fill/
extern "js" fn P5Instance::fill_colorPara_(
  self : P5Instance,
  v1 : Double,
  v2? : Double? = None,
  v3? : Double? = None,
  a? : Double? = None,
) -> Unit =
  #| (self, v1, v2, v3, a) => {
  #|   const v2_val = v2 ? v2._0 : undefined;
  #|   const v3_val = v3 ? v3._0 : undefined;
  #|   const a_val = a ? a._0 : undefined;
  #|   self.fill(v1, v2_val, v3_val, a_val);
  #| }

///|
extern "js" fn P5Instance::fill_colorObj_(self : P5Instance, c : Color) -> Unit =
  #| (self, c) => self.fill(c)

///|
/// https://p5js.org/reference/p5/beginClip/
/// 开始一个剪辑区域，后续绘制的内容将被限制在该区域内
extern "js" fn P5Instance::beginClip_(
  self : P5Instance,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit =
  #| (self, x, y, w, h) => self.beginClip(x, y, w, h)

///|
/// https://p5js.org/reference/p5/endClip/
/// 结束当前的剪辑区域
extern "js" fn P5Instance::endClip_(self : P5Instance) -> Unit =
  #| (self) => self.endClip()

///|
/// https://p5js.org/reference/p5/clear/
/// 清除画布
extern "js" fn P5Instance::clear_(self : P5Instance) -> Unit =
  #| (self) => self.clear()

///|
/// https://p5js.org/reference/p5/clip/
/// 创建一个 clip 选项对象，用于控制遮罩行为
/// - invert: 如果为 true，则反转遮罩，在形状上创建孔洞
pub extern "js" fn new_clip_options(invert : Bool) -> ClipOptions =
  #| (invert) => ({ invert })

///|
/// 使用回调函数定义一个遮罩区域
/// callback: 一个函数，其中绘制的任何形状都将成为遮罩的一部分
extern "js" fn P5Instance::clip_(
  self : P5Instance,
  callback : () -> Unit,
) -> Unit =
  #| (self, callback) => self.clip(callback)

///|
/// 使用回调函数和选项对象定义一个遮罩区域
/// ### Example
/// let p: P5Instance = ...
/// // 创建一个反转的圆形遮罩
/// let options = new_clip_options(true)
/// p.clip_options(fn () {
///   p.circle(200.0, 200.0, 100.0)
/// }, options)
/// // 之后绘制的内容将被限制在圆形孔洞之外
/// p.rect(0.0, 0.0, 400.0, 400.0)
/// callback`: 一个函数，其中绘制的任何形状都将成为遮罩的一部分
/// options`: 一个包含 `invert` 属性的对象
extern "js" fn P5Instance::clip_options_(
  self : P5Instance,
  callback : () -> Unit,
  options : ClipOptions,
) -> Unit =
  #| (self, callback, options) => self.clip(callback, options)

///|
/// https://p5js.org/reference/p5/colorMode/
/// 为了保证类型安全，分两个函数实现
/// 
/// 设置颜色模式，并为所有颜色通道设置一个统一的最大值
/// mode`: "RGB", "HSB", or "HSL"
/// max`: 所有通道的最大值
extern "js" fn P5Instance::colorMode_uniform_(
  self : P5Instance,
  mode : String,
  max : Double,
) -> Unit =
  #| (self, mode, max) => self.colorMode(mode, max)

///|
/// 设置颜色模式，并分别为每个颜色通道设置最大值
/// mode: "RGB", "HSB", or "HSL"
/// max1, max2, max3: R, G, B 通道的最大值
/// maxA (可选): Alpha 通道的最大值
extern "js" fn P5Instance::colorMode_detailed_(
  self : P5Instance,
  mode : String,
  max1 : Double,
  max2 : Double,
  max3 : Double,
  maxA? : Double? = None,
) -> Unit =
  #| (self, mode, max1, max2, max3, maxA) => {
  #|   const maxA_val = maxA ? maxA._0 : undefined;
  #|   self.colorMode(mode, max1, max2, max3, maxA_val);
  #| }

///|
/// https://p5js.org/reference/p5/erase/
/// 启用橡皮擦模式，后续绘制的图形将擦除画布内容
/// strengthFill (可选): 填充区域的擦除强度 (0-255)
/// strengthStroke (可选): 描边区域的擦除强度 (0-255)
extern "js" fn P5Instance::erase_(
  self : P5Instance,
  strengthFill? : Double? = None,
  strengthStroke? : Double? = None,
) -> Unit =
  #| (self, strengthFill, strengthStroke) => {
  #|   const fill_val = strengthFill ? strengthFill._0 : undefined;
  #|   const stroke_val = strengthStroke ? strengthStroke._0 : undefined;
  #|   self.erase(fill_val, stroke_val);
  #| }

///|
/// https://p5js.org/reference/p5/noErase/
/// 关闭橡皮擦模式
extern "js" fn P5Instance::noErase_(self : P5Instance) -> Unit =
  #| (self) => self.noErase()

///|
/// https://p5js.org/reference/p5/stroke/
/// 设置描边颜色（使用 p5.Color 对象）
extern "js" fn P5Instance::stroke_color_(self : P5Instance, c : Color) -> Unit =
  #| (self, c) => self.stroke(c)

///|
/// 设置描边颜色（使用灰度值）
/// gray: 灰度值
/// alpha (可选): 透明度
extern "js" fn P5Instance::stroke_gray_(
  self : P5Instance,
  gray : Double,
  alpha? : Double? = None,
) -> Unit =
  #| (self, gray, alpha) => {
  #|   const alpha_val = alpha ? alpha._0 : undefined;
  #|   self.stroke(gray, alpha_val);
  #| }

///|
/// 设置描边颜色（使用 RGB/HSB 等分量）
/// v1, v2, v3: 颜色分量
/// alpha (可选): 透明度
extern "js" fn P5Instance::stroke_components_(
  self : P5Instance,
  v1 : Double,
  v2 : Double,
  v3 : Double,
  alpha? : Double? = None,
) -> Unit =
  #| (self, v1, v2, v3, alpha) => {
  #|   const alpha_val = alpha ? alpha._0 : undefined;
  #|   self.stroke(v1, v2, v3, alpha_val);
  #| }

///|
/// 设置描边颜色（ CSS 颜色字符串）
extern "js" fn P5Instance::stroke_string_(
  self : P5Instance,
  color_string : String,
) -> Unit =
  #| (self, color_string) => self.stroke(color_string)
/// 由于 p5.js 的 stroke 函数是一个多态函数，接受多种参数组合
/// 为了moonbit的类型系统，我们将其拆分为多个函数
/// 下面是 p5.js 中 stroke 函数的伪代码实现，展示如何根据参数类型和数量进行不同的处理
/// ```
/// p5.prototype.stroke = function() {
///   // `arguments` 是一个特殊的对象，包含了所有传入的参数
///   // 检查参数的数量
///   if (arguments.length === 1) {
///     let arg = arguments[0];
///     // 检查第一个参数的类型
///     if (arg instanceof p5.Color) {
///       // 用法: stroke(color)
///       // ... 处理 p5.Color 对象 ...
///     } else if (Array.isArray(arg)) {
///       // 用法: stroke(values)
///       // ... 处理数组 ...
///     } else if (typeof arg === 'string') {
///       // 用法: stroke(value) - 字符串形式
///       // ... 处理 CSS 颜色字符串 ...
///     } else if (typeof arg === 'number') {
///       // 用法: stroke(gray) 或 stroke(value) - 数字形式
///       // ... 处理单个数字（灰度值） ...
///     }
///   } else if (arguments.length === 2) {
///     // 用法: stroke(gray, [alpha])
///     let gray = arguments[0];
///     let alpha = arguments[1];
///     // ... 处理灰度值 + alpha ...
///   } else if (arguments.length >= 3) {
///     // 用法: stroke(v1, v2, v3, [alpha])
///     let v1 = arguments[0];
///     let v2 = arguments[1];
///     let alpha = arguments[3]; // 可能是 undefined
///     // ... 处理三个或四个颜色分量 ...
///   }
/// };
/// ```

///|
/// https://p5js.org/reference/p5/noFill/
/// 关闭填充
extern "js" fn P5Instance::noFill_(self : P5Instance) -> Unit =
  #| (self) => self.noFill()
