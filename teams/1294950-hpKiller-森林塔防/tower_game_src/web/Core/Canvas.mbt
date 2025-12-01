///|
pub type Canvas

///|
/// 微信canvas 在 适配器里面
extern "js" fn create_web_canvas() -> Canvas =
  #|() => document.createElement("canvas")

// --- 获取上下文 ---

///|
extern "js" fn create_wx_canvas() -> Canvas =
  #|() => wx.createCanvas()

///|
extern "js" fn canvas_get_context(
  canvas : Canvas,
  ctx_type : String,
) -> CanvasRenderingContext2D =
  #|(canvas, ctx_type) => canvas.getContext(ctx_type)

///|
pub extern "js" fn is_in_web_browser() -> Bool =
  #|() => typeof window !== 'undefined' && typeof document !== 'undefined' && typeof wx === 'undefined'
// --- Canvas 方法 ---

///|
pub fn Canvas::new() -> Canvas {
  if is_in_web_browser() {
    create_web_canvas()
  } else {
    create_wx_canvas()
  }
}

///|
pub fn Canvas::getContext(
  self : Canvas,
  ctx_type : String,
) -> CanvasRenderingContext2D {
  canvas_get_context(self, ctx_type)
}

// --- 设置 Canvas 尺寸 (常用) ---

///|
extern "js" fn canvas_set_width(canvas : Canvas, w : Double) =
  #|(canvas, w) => { canvas.width = w; }

///|
extern "js" fn canvas_css_width(canvas : Canvas, w : Double) -> Unit =
  #| (canvas, w) => { canvas.style.width = w + "px"; }

///|
extern "js" fn canvas_css_height(canvas : Canvas, h : Double) -> Unit =
  #| (canvas, h) => { canvas.style.height = h + "px"; }

///|
extern "js" fn canvas_set_height(canvas : Canvas, h : Double) =
  #|(canvas, h) => { canvas.height = h; }

///|
extern "js" fn canvas_width(canvas : Canvas) -> Double =
  #| (canvas) => canvas.width

///|
extern "js" fn canvas_height(canvas : Canvas) -> Double =
  #| (canvas) => canvas.height

///|
pub fn Canvas::setWidth(self : Canvas, w : Double) -> Unit {
  canvas_set_width(self, w)
}

///|
pub fn Canvas::setCSSWidth(self : Canvas, w : Double) -> Unit {
  canvas_css_width(self, w)
}

///|
pub fn Canvas::setHeight(self : Canvas, h : Double) -> Unit {
  canvas_set_height(self, h)
}

///|
pub fn Canvas::setCSSHeight(self : Canvas, h : Double) -> Unit {
  canvas_css_height(self, h)
}

///|
pub fn Canvas::width(self : Canvas) -> Double {
  canvas_width(self)
}

///|
pub fn Canvas::height(self : Canvas) -> Double {
  canvas_height(self)
}

///|
pub let canvasInstance : Ref[Canvas?] = Ref::new(None)

///|
pub let canvasSingleton : Canvas = Canvas::get_instance()

///|
fn Canvas::get_instance() -> Canvas {
  match canvasInstance.val {
    Some(render) => render
    None => {
      let new_instance = Canvas::new()
      canvasInstance.val = Some(new_instance)
      new_instance
    }
  }
}
