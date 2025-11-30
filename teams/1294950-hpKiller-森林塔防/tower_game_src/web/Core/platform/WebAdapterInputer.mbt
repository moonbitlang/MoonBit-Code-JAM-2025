///|
pub struct WebAdapterInputer {
  offset_x : Double
  offset_y : Double
  scale : Double
}

///|
pub fn WebAdapterInputer::new(
  offset_x : Double,
  offset_y : Double,
  scale : Double,
) -> WebAdapterInputer {
  WebAdapterInputer::{ offset_x, offset_y, scale }
}

///|
let webAdapterInputerInstance : Ref[WebAdapterInputer?] = Ref::new(None)

///|
pub let webAdapterInputerSingleton : WebAdapterInputer? = if @Core.is_in_web_browser() {
  Some(WebAdapterInputer::get_instance())
} else {
  None
}

///|
pub fn WebAdapterInputer::get_instance() -> WebAdapterInputer {
  match webAdapterRenderSingleton {
    Some(f) => f.resize()
    _ => ()
  }
  match webAdapterInputerInstance.val {
    Some(render) => render
    None => {
      let new_instance = WebAdapterInputer::new(
        webAdapterRenderResizeInfoMap.val["offsetX"],
        webAdapterRenderResizeInfoMap.val["offsetY"],
        webAdapterRenderResizeInfoMap.val["scale"],
      )
      webAdapterInputerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub extern "js" fn add_mouse_down_click_listener_with_callback(
  canvas : @Core.Canvas,
  callback : (@Point.PixelPoint) -> Unit,
) -> Unit =
  #|(canvas, callback) => {
  #|  canvas.addEventListener('mousedown', (event) => {
  #|    const rect = canvas.getBoundingClientRect();
  #|    const x = event.clientX - rect.left;
  #|    const y = event.clientY - rect.top;
  #|    callback({x: x, y: y});
  #|  });
  #|};

///|
pub extern "js" fn add_mouse_move_listener_with_callback(
  canvas : @Core.Canvas,
  callback : (@Point.PixelPoint) -> Unit,
) -> Unit =
  #|(canvas, callback) => {
  #|  canvas.addEventListener('mousemove', (event) => {
  #|    const rect = canvas.getBoundingClientRect();
  #|    const x = event.clientX - rect.left;
  #|    const y = event.clientY - rect.top;
  #|    callback({x: x, y: y});
  #|  });
  #|};

///|
pub extern "js" fn add_mouse_up_listener_with_callback(
  canvas : @Core.Canvas,
  callback : (@Point.PixelPoint) -> Unit,
) -> Unit =
  #|(canvas, callback) => {
  #|  canvas.addEventListener('mouseup', (event) => {
  #|    const rect = canvas.getBoundingClientRect();
  #|    const x = event.clientX - rect.left;
  #|    const y = event.clientY - rect.top;
  #|    callback({x: x, y: y});
  #|  });
  #|};

///|
pub fn toScalePoint(
  point : @Point.PixelPoint,
  adapter : WebAdapterInputer,
) -> @Point.PixelPoint {
  // let dpr = window_devicePixelRatio()
  @Point.PixelPoint::new(
    x=(point.x - adapter.offset_x) / adapter.scale,
    y=(point.y - adapter.offset_y) / adapter.scale,
    // x=(point.x - adapter.offset_x) / adapter.scale * dpr,
    // y=(point.y - adapter.offset_y) / adapter.scale * dpr,
  )
}

///|
