///|
pub(all) struct SpeedButton {
  mut time_scale : Double
  mut x : Double
  mut y : Double
  mut w : Double
  mut h : Double
  mut padding : Double
  mut margin : Double
  mut start_speed_mode : Bool
}

///|
pub fn SpeedButton::new() -> SpeedButton {
  let padding = 10.0
  let margin = 10.0
  let w = 36.0
  let h = w
  let y = padding + margin
  SpeedButton::{
    time_scale: 1.0,
    x: @Core.map.width - padding - w - padding - w,
    y,
    w,
    h,
    padding,
    margin,
    start_speed_mode: false,
  }
}

///|
let speedButtonInstance : Ref[SpeedButton?] = Ref::new(None)

///|
pub let speedButtonSingleton : SpeedButton = SpeedButton::get_instance()

///|
pub fn SpeedButton::get_instance() -> SpeedButton {
  match speedButtonInstance.val {
    Some(render) => render
    None => {
      let new_instance = SpeedButton::new()
      speedButtonInstance.val = Some(new_instance)
      new_instance
    }
  }
}
