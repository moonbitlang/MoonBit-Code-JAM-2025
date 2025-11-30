///|
pub struct WebAdapterRender {
  height : Double
  width : Double
  logicHeight : Double
  logicWidth : Double
  canvas : @Core.Canvas
  ctx : @Core.CanvasRenderingContext2D
}

///|
extern "js" fn margin0() -> Unit =
  #| () => {document.body.style.margin = '0';
  #| document.body.style.overflow = 'hidden';}

///|
extern "js" fn get_web_screen_height() -> Double =
  #| () => window.innerHeight

///|
extern "js" fn get_web_screen_width() -> Double =
  #| () => window.innerWidth

///|
fn WebAdapterRender::new(
  canvas : @Core.Canvas,
  ctx : @Core.CanvasRenderingContext2D,
) -> WebAdapterRender {
  WebAdapterRender::{
    height: get_web_screen_height(),
    width: get_web_screen_width(),
    logicHeight: @Core.map.height,
    logicWidth: @Core.map.width,
    canvas,
    ctx,
  }
}

///|
let webAdapterRenderInstance : Ref[WebAdapterRender?] = Ref::new(None)

///|
pub let webAdapterRenderSingleton : WebAdapterRender? = if @Core.is_in_web_browser() {
  Some(
    WebAdapterRender::get_instance(@Core.canvasSingleton, @Core.ctxSingleton),
  )
} else {
  None
}

///|
pub fn WebAdapterRender::get_instance(
  canvas : @Core.Canvas,
  ctx : @Core.CanvasRenderingContext2D,
) -> WebAdapterRender {
  match webAdapterRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = WebAdapterRender::new(canvas, ctx)
      webAdapterRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
extern "js" fn window_devicePixelRatio() -> Double =
  #| () => window.devicePixelRatio || 1

///|
pub let webAdapterRenderResizeInfoMap : Ref[Map[String, Double]] = Ref::new(
  Map::new(),
)

///|
///remove dpr to fix android bug，bug with fuzzy ...
pub fn WebAdapterRender::resize(self : WebAdapterRender) -> Unit {
  margin0()
  let scaleX = self.width / self.logicWidth
  let scaleY = self.height / self.logicHeight
  let minScale = if scaleX < scaleY { scaleX } else { scaleY }
  // println("min scale \{minScale}")
  let dpr = window_devicePixelRatio()
  // println("dpr double:" + dpr.to_string())
  // println("width:" + self.width.to_string())
  // println("height:" + self.height.to_string())
  // println("scale X " + scaleX.to_string())
  // println("scale Y " + scaleY.to_string())
  // 画物理像素

  self.canvas.setWidth(self.width * dpr)
  self.canvas.setHeight(self.height * dpr)
  // fix android bug drp with fuzzy
  self.canvas.setCSSHeight(self.height)
  self.canvas.setCSSWidth(self.width)
  // self.canvas.setWidth(self.width)
  // self.canvas.setHeight(self.height)
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
  // self.ctx.setTransform(minScale, 0, 0, minScale, offsetX, offsetY)
  self.ctx.clearRect(0, 0, self.logicWidth, self.logicHeight)
  webAdapterRenderResizeInfoMap.val["scale"] = minScale
  webAdapterRenderResizeInfoMap.val["offsetX"] = offsetX
  webAdapterRenderResizeInfoMap.val["offsetY"] = offsetY
}

///|
// type Click

// ///|

// ///|
// extern "js" fn a() -> Unit =
//   #|window.addEventListener('resize', () => this.resize());

///|
// pub fn on_input_web_handler(event : TouchEvent) -> Unit {
//   let touches = touch_event_get_touches(event)
//   let _ = touch_get_client_x(touches[0])
//   let _ = touch_get_client_y(touches[0])
//   // println(touch_get_client_x(touches[0]))
//   // println(touch_get_client_y(touches[0]))
//   // println("Number of touches: " + Array::length(touches).to_string())
//   // ... process the touches array
// }
