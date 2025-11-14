/// https://p5js.org/reference/p5/createImage/
/// 创建一个新的空白图像
// extern "js" fn P5Instance::createImage_(
//   self: P5Instance, 
//   width: Double, 
//   height: Double
// ) -> P5Image =
//   #| (self, width, height) => self.createImage(width, height)

/// https://p5js.org/reference/p5/saveCanvas/
/// 保存当前画布为图像文件
/// saveCanvas(selectedCanvas, [filename], [extension])
/// `selectedCanvas` (可选): 要保存的画布. 如果未提供，则保存默认画布.
/// `filename` (可选): 文件名，不包含扩展名. 默认值为 "untitled".
/// `extension` (可选): 文件扩展名. 例如 "png", "jpg". 默认值为 "png".
// pub extern "js" fn P5Instance::saveCanvas_(
//   self: P5Instance, 
//   selectedCanvas?: Option[P5Canvas] = None, 
//   filename?: Option[String] = None, 
//   extension?: Option[String] = None
// ) -> Unit =
//   #| (self, selectedCanvas, filename, extension) => {
//   #|   const canvas_val = selectedCanvas ? selectedCanvas._0 : undefined;
//   #|   const filename_val = filename ? filename._0 : undefined;
//   #|   const extension_val = extension ? extension._0 : undefined;
//   #|   self.saveCanvas(canvas_val, filename_val, extension_val);
//   #| }

///|
/// https://p5js.org/reference/p5/image/
/// 在画布上绘制图像
/// `img`: 要绘制的图像对象
/// `x`: 图像左上角的 x 坐标
/// `y`: 图像左上角的 y 坐标
/// `width` (可选): 图像的宽度. 如果提供，将缩放图像到该宽度.
/// `height` (可选): 图像的高度. 如果提供，将缩放图像到该高度.
/// 完整重载形式还没有实现
extern "js" fn P5Instance::image_(
  self : P5Instance,
  img : P5Image,
  x : Double,
  y : Double,
  width? : Double? = None,
  height? : Double? = None,
) -> Unit =
  #| (self, img, x, y, width, height) => {
  #|   const width_val = width ? width._0 : undefined;
  #|   const height_val = height ? height._0 : undefined;
  #|   self.image(img, x, y, width_val, height_val);
  #| }

///|
/// https://p5js.org/reference/p5/imageMode/
/// 设置图像绘制模式
/// `mode`: 模式常量. "corner", "corners", "center", "radius".
extern "js" fn P5Instance::imageMode_(self : P5Instance, mode : String) -> Unit =
  #| (self, mode) => self.imageMode(mode)

///|
/// https://p5js.org/reference/p5/loadImage/
/// 加载图像文件
extern "js" fn P5Instance::loadImage1_(
  self : P5Instance,
  path : String,
  callback : ((P5Image) -> Unit)?,
  errorCallback : ((String) -> Unit)?,
) -> P5Image =
  #| (self, path, callback, errorCallback) => {
  #|   const img = self.loadImage(path, callback, errorCallback);
  #|   return img;
  #| }

/// https://p5js.org/reference/p5/loadImage/
/// 加载图像文件
extern "js" fn P5Instance::loadImage2_(
  self : P5Instance,
  path : String,
) -> P5Image =  
  #| (self, path) => {
  #|   const img = self.loadImage(path);
  #|   return img;
  #| }

/// https://p5js.org/reference/p5/loadImage/
/// 加载图像文件
extern "js" fn P5Instance::loadImage3_(
  self : P5Instance,
  path : String,
  callback : ((P5Image) -> Unit),
) -> P5Image =  
  #| (self, path, callback) => {
  #|   const img = self.loadImage(path, callback);
  #|   return img;
  #| }
