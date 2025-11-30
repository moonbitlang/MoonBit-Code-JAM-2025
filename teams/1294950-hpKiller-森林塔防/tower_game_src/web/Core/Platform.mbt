///|
pub extern "js" fn is_wechat() -> Bool =
  #|() => typeof wx !== 'undefined'

///|
pub extern "js" fn document_body_append_child(el : Canvas) -> Unit =
  #|(el) => document.body.appendChild(el)

///|
type FrameCallback

///|
pub extern "js" fn requestAnimationFrame(callback : FrameCallback) -> Double =
  #|(callback) => requestAnimationFrame(callback)

///|
pub extern "js" fn cancelAnimationFrame(id : Double) -> Unit =
  #|(id) => cancelAnimationFrame(id)

///|
pub extern "js" fn to_frame_callback(f : (Double) -> Unit) -> FrameCallback =
  #|(f) => (timestamp) => f(timestamp)

///|
pub struct Platform {}

///|
pub fn Platform::new() -> Platform {
  Platform::{  }
}

///|
