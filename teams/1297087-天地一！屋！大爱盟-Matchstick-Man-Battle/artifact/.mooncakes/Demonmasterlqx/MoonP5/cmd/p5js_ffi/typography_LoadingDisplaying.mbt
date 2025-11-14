///|
/// https://p5js.org/reference/p5/loadFont/
/// 异步加载字体文件，并可选地处理成功或失败回调
/// `path`: 字体文件路径
/// `onSuccess` (可选): 加载成功时调用的函数，接收 Font 对象
/// `onFailure` (可选): 加载失败时调用的函数，接收错误信息
extern "js" fn P5Instance::loadFont_(
  self : P5Instance,
  path : String,
  onSuccess? : ((Font) -> Unit)? = None,
  onFailure? : ((String) -> Unit)? = None,
) -> Font =
  #| (self, path, onSuccess, onFailure) => {
  #|   const success_val = onSuccess ? onSuccess._0 : undefined;
  #|   const failure_val = onFailure ? onFailure._0 : undefined;
  #|   return self.loadFont(path, success_val, failure_val);
  #| }

///|
/// https://p5js.org/reference/p5/textFont/
/// 设置当前用于绘制文本的字体
/// `font`: 之前由 loadFont() 加载的 Font 对象
/// `size` (可选): 字体大小（像素）
extern "js" fn P5Instance::textFont_(
  self : P5Instance,
  font : Font,
  size? : Double? = None,
) -> Unit =
  #| (self, font, size) => {
  #|   const size_val = size ? size._0 : undefined;
  #|   self.textFont(font, size_val);
  #| }

///|
/// https://p5js.org/reference/p5/text/
/// 在画布上绘制文本
/// `str`: 要显示的文本
/// `x`, `y`: 文本框的 x 和 y 坐标
/// `x2`, `y2` (可选): 用于定义文本框宽度和高度的坐标
extern "js" fn P5Instance::text1_(
  self : P5Instance,
  str : String,
  x : Double,
  y : Double,
  x2? : Double? = None,
  y2? : Double? = None,
) -> Unit =
  #| (self, str, x, y, x2, y2) => {
  #|   const x2_val = x2 ? x2._0 : undefined;
  #|   const y2_val = y2 ? y2._0 : undefined;
  #|   self.text(str, x, y, x2_val, y2_val);
  #| }

extern "js" fn P5Instance::text2_(
  self : P5Instance,
  str : String,
  x : Double,
  y : Double,
) -> Unit =
  #| (self, str, x, y) => {
  #|   self.text(str, x, y);
  #| }

extern "js" fn P5Instance::text3_(
  self : P5Instance,
  str : String,
  x : Double,
  y : Double,
  x2? : Double? = None,
) -> Unit =
  #| (self, str, x, y, x2) => {
  #|   const x2_val = x2 ? x2._0 : undefined;
  #|   self.text(str, x, y, x2_val);
  #| }
///

///|
/// https://p5js.org/reference/p5.Font/textBounds/
/// 返回给定字符串在当前字体下的边界框
extern "js" fn Font::textBounds_(
  self : Font,
  str : String,
  x : Double,
  y : Double,
  fontSize? : Double? = None,
) -> TextBounds =
  #| (self, str, x, y, fontSize) => {
  #|   const fontSize_val = fontSize ? fontSize._0 : undefined;
  #|   return self.textBounds(str, x, y, fontSize_val);
  #| }

///|
/// 创建一个 textToPoints 的 options 对象
/// `sampleFactor`: 采样因子，影响点的数量
/// `simplifyThreshold`: 简化阈值，影响点的平滑度
pub extern "js" fn new_text_to_points_options(
  sampleFactor? : Double? = None,
  simplifyThreshold? : Double? = None,
) -> TextToPointsOptions =
  #| (sampleFactor, simplifyThreshold) => {
  #|   const options = {};
  #|   if (sampleFactor) { options.sampleFactor = sampleFactor._0; }
  #|   if (simplifyThreshold) { options.simplifyThreshold = simplifyThreshold._0; }
  #|   return options;
  #| }

///|
/// https://p5js.org/reference/p5.Font/textToPoints/
/// 将文本转换为一系列的点，用于自定义渲染
/// *** 注意： 该方法不确定是否能用，我不会写 ***
extern "js" fn Font::textToPoints_(
  self : Font,
  str : String,
  x : Double,
  y : Double,
  fontSize? : Double? = None,
  options? : TextToPointsOptions? = None,
) -> Array[PointData] =
  #| (self, str, x, y, fontSize, options) => {
  #|   const size_val = fontSize ? fontSize._0 : undefined;
  #|   const opts_val = options ? options._0 : undefined;
  #|   return self.textToPoints(str, x, y, size_val, opts_val);
  #| }
