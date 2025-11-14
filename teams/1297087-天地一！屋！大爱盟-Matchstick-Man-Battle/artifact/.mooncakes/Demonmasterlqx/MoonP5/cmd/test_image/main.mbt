///|
extern "js" fn getP5Instance(
  preloadd : (@p5js_ffi.P5Instance) -> Unit,
  drawww : (@p5js_ffi.P5Instance) -> Unit,
) -> @p5js_ffi.P5Instance =
  #| (preloadd, drawww) => {
  #|a = new p5((p)=>{
  #|  p.preload = () => {preloadd(p)}
  #|  p.setup = () => {
  #|    p.createCanvas(800, 600);
  #|  }
  #|  p.draw = () => {drawww(p)}
  #|})
  #|return a
  #|}

///|
extern "js" fn @p5js_ffi.P5Instance::millis(
  self : @p5js_ffi.P5Instance,
) -> Double =
  #| (self) => self.millis()

///|
// 全局变量存储预加载的图像
let testImageRef : Ref[@p5js_ffi.P5Image?] = { val: None }

///|
fn preload(p : @p5js_ffi.P5Instance) -> Unit {
  // 在preload函数中加载图像，确保在draw函数运行前图像已完全加载
  testImageRef.val = Some(p.loadImage("cmd/test_image/image.jpg", None, None))
  println("图像预加载完成")
}

///|
fn draw(p : @p5js_ffi.P5Instance) -> Unit {
  // 设置背景色
  p.background(220.0, Some(204.0), Some(100.0), None)
  
  // 使用预加载的图像
  match testImageRef.val {
    Some(img) => {
      // 测试基本的图像绘制
      p.image(img, 10.0, 10.0, Some(200.0), Some(150.0))
      
      // 测试图像信息获取
      let width = img.width()
      let height = img.height() 
      println("图像尺寸: \{width}x\{height}")
      
      // 测试图像复制和混合模式
      testImageCopy(p, img)
      
      // 测试图像滤镜
      testImageFilters(p, img)
      
      // 测试像素操作
      testPixelOperations(p, img)
      
      // 测试图像裁剪
      testImageCrop(p, img)
    }
    None => {
      println("图像尚未加载")
    }
  }
}

///|
fn testImageCopy(p : @p5js_ffi.P5Instance, img : @p5js_ffi.P5Image) -> Unit {
  // 创建一个新的图像副本进行混合测试
  let copyImg = img.get_image(None)
  
  // 测试不同的混合模式
  let time = p.millis() / 1000.0
  let blendModeIndex = (time % 5.0).to_int()
  
  let blendMode = match blendModeIndex {
    0 => @p5js_ffi.MULTIPLY
    1 => @p5js_ffi.SCREEN  
    2 => @p5js_ffi.OVERLAY
    3 => @p5js_ffi.DIFFERENCE
    _ => @p5js_ffi.ADD
  }
  
  println("当前混合模式: \{blendMode}")
  // 在副本上进行混合操作
  copyImg.blend(0.0, 0.0, 100.0, 100.0, 50.0, 50.0, 100.0, 100.0, blendMode)
  
  // 绘制混合后的图像
  p.image(copyImg, 230.0, 10.0, Some(200.0), Some(150.0))
  
}

///|
fn testImageFilters(p : @p5js_ffi.P5Instance, img : @p5js_ffi.P5Image) -> Unit {
  // 每3秒切换一种滤镜
  let time = p.millis() / 3000.0
  let filterIndex = (time % 8.0).to_int()
  
  // 创建滤镜图像
  let filterImg = img.get_image(None)
  
  let (filterType, param) = match filterIndex {
    0 => (@p5js_ffi.BLUR, Some(2.0))
    1 => (@p5js_ffi.GRAY, None)
    2 => (@p5js_ffi.INVERT, None)
    3 => (@p5js_ffi.THRESHOLD, Some(0.5))
    4 => (@p5js_ffi.POSTERIZE, Some(4.0))
    5 => (@p5js_ffi.ERODE, None)
    6 => (@p5js_ffi.DILATE, None)
    _ => (@p5js_ffi.OPAQUE, None)
  }
  
  filterImg.filter(filterType, param, true)
  
  // 绘制滤镜处理后的图像
  p.image(filterImg, 450.0, 10.0, Some(200.0), Some(150.0))
  
  let filterName = match filterIndex {
    0 => "模糊"
    1 => "灰度"
    2 => "反色"
    3 => "阈值"
    4 => "色调分离"
    5 => "侵蚀"
    6 => "膨胀"
    _ => "不透明"
  }
  println("当前滤镜: \{filterName}")
}

///|
fn testPixelOperations(p : @p5js_ffi.P5Instance, img : @p5js_ffi.P5Image) -> Unit {
  // 测试像素级操作
  let smallImg = img.get_image(Some((0.0, 0.0, 100.0, 100.0)))
  
  // 加载像素数据
  smallImg.load_pixels()
  
  // 获取像素数组
  let pixels = smallImg.pixels()
  
  // 更新像素数据
  smallImg.update_pixels()
  
  // 绘制修改后的图像
  p.image(smallImg, 10.0, 200.0, Some(150.0), Some(150.0))
  
  println("像素数量: \{pixels.length()}")
}

///|
fn testImageCrop(p : @p5js_ffi.P5Instance, img : @p5js_ffi.P5Image) -> Unit {
  // 测试图像裁剪
  let croppedImg = img.get_image(Some((50.0, 50.0, 150.0, 100.0)))
  
  // 调整裁剪图像大小
  croppedImg.resize(120, 80)
  
  // 绘制裁剪后的图像
  p.image(croppedImg, 180.0, 200.0, Some(150.0), Some(120.0))
  
  println("裁剪后尺寸: \{croppedImg.width()}x\{croppedImg.height()}")
}



///|
fn main {
  let _ = getP5Instance(preload, draw)
  
  println("图像FFI测试启动")
  println("使用preload预加载图像: cmd/test_image/image.jpg")
  println("测试包括:")
  println("- 图像预加载和显示")
  println("- 图像复制和混合模式")  
  println("- 图像滤镜效果")
  println("- 像素级操作")
  println("- 图像裁剪和缩放")
}