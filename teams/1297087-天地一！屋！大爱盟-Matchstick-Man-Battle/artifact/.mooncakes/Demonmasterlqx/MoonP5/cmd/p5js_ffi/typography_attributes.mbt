///|
/// https://p5js.org/reference/p5/textAlign/
/// 设置文本对齐方式
///
/// `horizAlign`: 水平对齐方式. "left", "center", "right".
/// `vertAlign` (可选): 垂直对齐方式. "top", "bottom", "center", "baseline".
extern "js" fn P5Instance::textAlign_(
  self : P5Instance,
  horizAlign : String,
  vertAlign? : String? = None,
) -> Unit =
  #| (self, horizAlign, vertAlign) => {
  #|   const vert_val = vertAlign ? vertAlign._0 : undefined;
  #|   self.textAlign(horizAlign, vert_val);
  #| }

///|
/// https://p5js.org/reference/p5/textLeading/
/// 设置文本行距
/// `leading`: 行距（像素）
extern "js" fn P5Instance::textLeading_set_(
  self : P5Instance,
  leading : Double,
) -> Unit =
  #| (self, leading) => self.textLeading(leading)

///|
/// 读取当前的文本行距
extern "js" fn P5Instance::textLeading_get_(self : P5Instance) -> Double =
  #| (self) => self.textLeading()

///|
/// https://p5js.org/reference/p5/textAscent/
/// 返回当前字体的上行高度
extern "js" fn P5Instance::textAscent_(self : P5Instance) -> Double =
  #| (self) => self.textAscent()

///|
/// https://p5js.org/reference/p5/textDescent/
/// 返回当前字体的下行高度
extern "js" fn P5Instance::textDescent_(self : P5Instance) -> Double =
  #| (self) => self.textDescent()

///|
/// https://p5js.org/reference/p5/textSize/
/// 设置文本大小
extern "js" fn P5Instance::textSize_set_(
  self : P5Instance,
  size : Double,
) -> Unit =
  #| (self, size) => self.textSize(size)

///|
extern "js" fn P5Instance::textSize_get_(self : P5Instance) -> Double =
  #| (self) => self.textSize()

///|
/// https://p5js.org/reference/p5/textStyle/
/// 设置或重置文本样式
/// `style` (可选): 样式常量. "normal", "italic", "bold", "bolditalic".
/// 如果不提供参数，样式将重置为 "normal".
pub extern "js" fn P5Instance::textStyle_(
  self : P5Instance,
  style? : String? = None,
) -> Unit =
  #| (self, style) => {
  #|   const style_val = style ? style._0 : undefined;
  #|   self.textStyle(style_val);
  #| }

///|
/// https://p5js.org/reference/p5/textWidth/
/// 计算并返回给定字符串在当前字体和大小下的宽度（像素）
extern "js" fn P5Instance::textWidth_(
  self : P5Instance,
  str : String,
) -> Double =
  #| (self, str) => self.textWidth(str)

///|
/// https://p5js.org/reference/p5/textWrap/
/// 设置文本换行模式
extern "js" fn P5Instance::textWrap_(self : P5Instance, mode : String) -> Unit =
  #| (self, mode) => self.textWrap(mode)
