///|
/// https://p5js.org/reference/p5/brightness/
/// 返回颜色的亮度值（0 到 100 之间）
extern "js" fn P5Instance::brightness_(self : P5Instance, c : Color) -> Double =
  #| (self, c) => self.brightness(c)

///|
/// https://p5js.org/reference/p5/color/
/// v1: 灰度值，或红色值
/// v2: 绿色值
extern "js" fn P5Instance::color_(
  self : P5Instance,
  v1 : Double,
  v2? : Double? = None,
  v3? : Double? = None,
  a? : Double? = None,
) -> Color =
  #| (self, v1, v2, v3, a) => {
  #|   const v2_val = v2 ? v2._0 : undefined;
  #|   const v3_val = v3 ? v3._0 : undefined;
  #|   const a_val = a ? a._0 : undefined;
  #|   return self.color(v1, v2_val, v3_val, a_val);
  #| }

///|
/// https://p5js.org/reference/p5/alpha/
/// 返回颜色的 alpha 值（0 到 255 之间）
extern "js" fn P5Instance::alpha_(self : P5Instance, c : Color) -> Double =
  #| (self, c) => self.alpha(c)

///|
/// https://p5js.org/reference/p5/blue/
/// 返回颜色的蓝色值（0 到 255 之间）
extern "js" fn P5Instance::blue_(self : P5Instance, c : Color) -> Double =
  #| (self, c) => self.blue(c)

///|
/// https://p5js.org/reference/p5/green/
/// 返回颜色的绿色值（0 到 255 之间）
extern "js" fn P5Instance::green_(self : P5Instance, c : Color) -> Double =
  #| (self, c) => self.green(c)

///|
/// https://p5js.org/reference/p5/red/
/// 返回颜色的红色值（0 到 255 之间）
extern "js" fn P5Instance::red_(self : P5Instance, c : Color) -> Double =
  #| (self, c) => self.red(c)

///|
/// https://p5js.org/reference/p5/hue/
/// 返回颜色的色调值（0 到 360 之间）
/// 注意：HSL 和 HSB 颜色模式的色调范围不同
extern "js" fn P5Instance::hue_(self : P5Instance, c : Color) -> Double =
  #| (self, c) => self.hue(c)

///|
/// https://p5js.org/reference/p5/lerpColor/
/// 在两种颜色之间进行线性插值，amount 参数控制插值的位置（0.0 到 1.0 之间）
extern "js" fn P5Instance::lerpColor_(
  self : P5Instance,
  c1 : Color,
  c2 : Color,
  amount : Double,
) -> Color =
  #| (self, c1, c2, amount) => self.lerpColor(c1, c2, amount)

///|
/// https://p5js.org/reference/p5/lightness/
/// 返回颜色的明度值（0 到 100 之间）
extern "js" fn P5Instance::lightness_(self : P5Instance, c : Color) -> Double =
  #| (self, c) => self.lightness(c)

///|
/// https://p5js.org/reference/p5/paletteLerp/
/// 混合多种颜色以查找它们之间的颜色
/// paletteLerp(colors_stops, amt)
extern "js" fn P5Instance::paletteLerp_(
  self : P5Instance,
  colors_stops : Array[(String, Double)],
  amt : Double,
) -> Color =
  #| (self, colors_stops, amt) => {
  #|   const js_colors_stops = colors_stops.map(item => [item._0, item._1]);
  #|   return self.paletteLerp(js_colors_stops, amt);
  #| }

///|
/// https://p5js.org/reference/p5/Color/setRed/
pub extern "js" fn Color::setRed(self : Color, r : Double) -> Unit =
  #| (self, r) => {
  #|   self.setRed(r);
  #| }

///|
/// https://p5js.org/reference/p5/Color/setGreen/
pub extern "js" fn Color::setGreen(self : Color, g : Double) -> Unit =
  #| (self, g) => {
  #|   self.setGreen(g);
  #| }

///|
/// https://p5js.org/reference/p5.Color/setBlue/
pub extern "js" fn Color::setBlue(self : Color, b : Double) -> Unit =
  #| (self, b) => self.setBlue(b);

///|
/// https://p5js.org/reference/p5.Color/setAlpha/
pub extern "js" fn Color::setAlpha(self : Color, a : Double) -> Unit =
  #| (self, a) => self.setAlpha(a);

///|
/// https://p5js.org/reference/p5.Color/toString/
pub extern "js" fn Color::toString(self : Color, str : String?) -> String =
  #| (self, str) => self.toString(str);
