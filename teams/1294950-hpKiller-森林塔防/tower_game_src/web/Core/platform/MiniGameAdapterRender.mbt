///|
// https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html

///|
pub type WindowInfo

///|
extern "js" fn wx_get_window_info() -> WindowInfo =
  #|() => wx.getWindowInfo()

///|
// pub struct WindowInfoData {
//   pixelRatio: Double
//   screenWidth: Double
//   screenHeight: Double
//   windowWidth: Double
//   windowHeight: Double
//   statusBarHeight: Double
//   screenTop: Double
//   // Note: safeArea is an Object in the API, which would require a separate FFI type for full access.
// }

///|
extern "js" fn window_info_get_pixel_ratio(wi : WindowInfo) -> Double =
  #|(wi) => wi.pixelRatio

///|
extern "js" fn window_info_get_screen_width(wi : WindowInfo) -> Double =
  #|(wi) => wi.screenWidth

///|
extern "js" fn window_info_get_screen_height(wi : WindowInfo) -> Double =
  #|(wi) => wi.screenHeight

///|
extern "js" fn window_info_get_window_width(wi : WindowInfo) -> Double =
  #|(wi) => wi.windowWidth

///|
extern "js" fn window_info_get_window_height(wi : WindowInfo) -> Double =
  #|(wi) => wi.windowHeight

///|
extern "js" fn window_info_get_status_bar_height(wi : WindowInfo) -> Double =
  #|(wi) => wi.statusBarHeight

///|
extern "js" fn window_info_get_screen_top(wi : WindowInfo) -> Double =
  #|(wi) => wi.screenTop

///|
fn init {
  if @Core.is_wechat() {
    // ignore the warning
    let _ = window_info_get_screen_width(getWindowInfo())
    let _ = window_info_get_window_height(getWindowInfo())
    let _ = window_info_get_status_bar_height(getWindowInfo())
    let _ = window_info_get_screen_top(getWindowInfo())

  }
}

///|
pub struct MiniGameAdapterRender {
  height : Double
  width : Double
  logicHeight : Double
  logicWidth : Double
  canvas : @Core.Canvas
  ctx : @Core.CanvasRenderingContext2D
}

///|
fn getWindowInfo() -> WindowInfo {
  wx_get_window_info()
}

///|
fn MiniGameAdapterRender::new(
  canvas : @Core.Canvas,
  ctx : @Core.CanvasRenderingContext2D,
) -> MiniGameAdapterRender {
  MiniGameAdapterRender::{
    height: window_info_get_screen_height(getWindowInfo()),
    width: window_info_get_window_width(getWindowInfo()),
    logicHeight: @Core.map.height,
    logicWidth: @Core.map.width,
    canvas,
    ctx,
  }
}

///|
let miniGameAdapterRenderInstance : Ref[MiniGameAdapterRender?] = Ref::new(None)

///|
pub let miniGameAdapterRenderSingleton : MiniGameAdapterRender? = if @Core.is_wechat() {
  Some(
    MiniGameAdapterRender::get_instance(
      @Core.canvasSingleton, @Core.ctxSingleton,
    ),
  )
} else {
  None
}

// pub let resizeInfo : ResizeInfo = miniGameAdapterRenderSingleton.resize()

// IMPORTMENT! resizeInfoMap mabey null point,should resize call beform call this

///|
pub let miniGameAdapterRenderResizeInfoMap : Ref[Map[String, Double]] = Ref::new(
  Map::new(),
)

///|
pub fn MiniGameAdapterRender::get_instance(
  canvas : @Core.Canvas,
  ctx : @Core.CanvasRenderingContext2D,
) -> MiniGameAdapterRender {
  match miniGameAdapterRenderInstance.val {
    Some(instance) => instance
    None => {
      let new_instance = MiniGameAdapterRender::new(canvas, ctx)
      miniGameAdapterRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub struct ResizeInfo {
  scale : Double
  offsetX : Double
  offsetY : Double
}

///|
pub fn MiniGameAdapterRender::resize(
  self : MiniGameAdapterRender,
) -> ResizeInfo {
  // margin0()
  // println("call resize")
  let scaleX = self.width / self.logicWidth
  let scaleY = self.height / self.logicHeight
  let minScale = if scaleX < scaleY { scaleX } else { scaleY }
  let dpr = window_info_get_pixel_ratio(getWindowInfo())
  // println("dpr double:" + dpr.to_string())
  // println("width:" + self.width.to_string())
  // println("width:" + self.height.to_string())
  // println("scale X " + scaleX.to_string())
  // println("scale Y " + scaleY.to_string())
  // 画物理像素
  self.canvas.setWidth(self.width * dpr)
  self.canvas.setHeight(self.height * dpr)
  let scaleCanvasW = minScale * self.logicWidth
  let scaleCanvasH = minScale * self.logicHeight
  let offsetX = (self.width - scaleCanvasW) / 2
  let offsetY = (self.height - scaleCanvasH) / 2
  // println("canvas.width:" + self.canvas.width().to_string())
  // println("canvas.height:" + self.canvas.height().to_string())
  // println("ScaleCanvasW:" + scaleCanvasW.to_string())
  // println("scaleCanvasH:" + scaleCanvasH.to_string())
  // println("offsetX:" + offsetX.to_string())
  // println("offsetY:" + offsetY.to_string())
  self.ctx.setTransform(
    dpr * minScale,
    0,
    0,
    dpr * minScale,
    dpr * offsetX,
    dpr * offsetY,
  )
  self.ctx.clearRect(0, 0, self.logicWidth, self.logicHeight)
  miniGameAdapterRenderResizeInfoMap.val["scale"] = minScale
  miniGameAdapterRenderResizeInfoMap.val["offsetX"] = offsetX
  miniGameAdapterRenderResizeInfoMap.val["offsetY"] = offsetY
  ResizeInfo::{ scale: minScale, offsetX, offsetY }
}
