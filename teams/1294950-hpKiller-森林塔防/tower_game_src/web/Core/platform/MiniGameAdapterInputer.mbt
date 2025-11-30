// 适配器输入器结构体（带偏移和缩放）

///|
pub struct MiniGameAdapterInputer {
  offset_x : Double
  offset_y : Double
  scale : Double
  inv_scale : Double
}

// 构造函数

///|
pub fn MiniGameAdapterInputer::new(
  offset_x : Double,
  offset_y : Double,
  scale : Double,
) -> MiniGameAdapterInputer {
  MiniGameAdapterInputer::{ offset_x, offset_y, scale, inv_scale: 1.0 / scale }
}

// 辅助函数：将 Touch 转换为 Pos

///|
fn to_pos(touch : Touch, adapter : MiniGameAdapterInputer) -> @Point.PixelPoint {
  let px = touch_get_client_x(touch)
  let py = touch_get_client_y(touch)
  @Point.PixelPoint::new(
    x=(px - adapter.offset_x) * adapter.inv_scale,
    y=(py - adapter.offset_y) * adapter.inv_scale,
  )
}

///|
let miniGameAdapterInputerInstance : Ref[MiniGameAdapterInputer?] = Ref::new(
  None,
)

///|
pub let miniGameAdapterInputerSingleton : MiniGameAdapterInputer? = if @Core.is_wechat() {
  Some(MiniGameAdapterInputer::get_instance())
} else {
  None
}

///|
pub fn MiniGameAdapterInputer::get_instance() -> MiniGameAdapterInputer {
  // call resize function to ensure init resizeInfoMap
  // ensure web not call
  match miniGameAdapterRenderSingleton {
    Some(f) => f.resize() |> ignore
    None => ()
  }
  match miniGameAdapterInputerInstance.val {
    Some(render) => render
    None => {
      let new_instance = MiniGameAdapterInputer::new(
        miniGameAdapterRenderResizeInfoMap.val["offsetX"],
        miniGameAdapterRenderResizeInfoMap.val["offsetY"],
        miniGameAdapterRenderResizeInfoMap.val["scale"],
        // 0,0,0,
      )
      miniGameAdapterInputerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MiniGameAdapterInputer::on_touch_start(
  self : MiniGameAdapterInputer,
  handler : (@Point.PixelPoint) -> Unit,
) -> Unit {
  wx_on_touch_start(fn(event : TouchEvent) -> Unit {
    let touches = touch_event_get_touches(event)
    if Array::length(touches) > 0 {
      let first_touch = touches[0]
      let pos = to_pos(first_touch, self)
      handler(pos)
    }
  })
}

///|
pub fn MiniGameAdapterInputer::on_touch_move(
  self : MiniGameAdapterInputer,
  handler : (@Point.PixelPoint) -> Unit,
) -> Unit {
  let last_time = Ref::new(0.0)
  let interval = 100.0 // 
  wx_on_touch_move(fn(event : TouchEvent) -> Unit {
    let touches = touch_event_get_touches(event)
    if Array::length(touches) > 0 {
      let first_touch = touches[0]
      let current_time = touch_event_get_time_stamp(event)
      if current_time - last_time.val >= interval {
        let pos = to_pos(first_touch, self)
        handler(pos)
        last_time.val = current_time
      }
    }
  })
}

///|
pub fn MiniGameAdapterInputer::on_touch_end(
  self : MiniGameAdapterInputer,
  handler : (@Point.PixelPoint) -> Unit,
) -> Unit {
  wx_on_touch_end(fn(event : TouchEvent) -> Unit {
    let touches = touch_event_get_changed_touches(event)
    if Array::length(touches) > 0 {
      let first_touch = touches[0]
      let pos = to_pos(first_touch, self)
      handler(pos)
    }
  })
}

///|
type TouchEvent

///|
type Touch

///|
pub extern "js" fn wx_on_touch_start(handler : (TouchEvent) -> Unit) -> Unit =
  #|(handler) => wx.onTouchStart(handler)

///|
pub extern "js" fn wx_on_touch_move(handler : (TouchEvent) -> Unit) -> Unit =
  #| (handler) => wx.onTouchMove(handler)

///|
pub extern "js" fn wx_on_touch_end(handler : (TouchEvent) -> Unit) -> Unit =
  #| (handler) => wx.onTouchEnd(handler)

///|
pub extern "js" fn touch_event_get_touches(e : TouchEvent) -> Array[Touch] =
  #|(e) => Array.from(e.touches)

///|
pub extern "js" fn touch_event_get_changed_touches(
  e : TouchEvent,
) -> Array[Touch] =
  #|(e) => Array.from(e.changedTouches)

///|
pub extern "js" fn touch_event_get_time_stamp(e : TouchEvent) -> Double =
  #|(e) => e.timeStamp

///|
pub extern "js" fn touch_get_client_x(touch : Touch) -> Double =
  #|(touch) => touch.clientX

///|
pub extern "js" fn touch_get_client_y(touch : Touch) -> Double =
  #|(touch) => touch.clientY

///|
pub extern "js" fn touch_get_page_x(touch : Touch) -> Double =
  #|(touch) => touch.pageX

///|
pub extern "js" fn touch_get_page_y(touch : Touch) -> Double =
  #|(touch) => touch.pageY

///|
pub extern "js" fn touch_get_identifier(touch : Touch) -> Double =
  #|(touch) => touch.identifier

///|
// extern "js" fn write_globle_adapter(offset_x) -> Unit =
//   #| 

// fn init {

//   miniGameAdapterInputerSingleton.unwrap().offset_x
// }
