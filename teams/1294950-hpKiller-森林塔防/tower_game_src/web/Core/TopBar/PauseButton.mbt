///|
pub(all) struct PauseButton {
  mut is_pause : Bool
  mut x : Double
  mut y : Double
  mut w : Double
  mut h : Double
  mut padding : Double
  mut margin : Double
}

///|
pub fn PauseButton::new() -> PauseButton {
  let padding = 10.0
  let margin = 10.0
  let w = 36.0
  let h = w
  let y = padding + margin
  PauseButton::{
    is_pause: false,
    x: @Core.map.width - padding - w,
    y,
    w,
    h,
    padding,
    margin,
  }
}

///|
let pauseButtonInstance : Ref[PauseButton?] = Ref::new(None)

///|
pub let pauseButtonSingleton : PauseButton = PauseButton::get_instance()

///|
pub fn PauseButton::get_instance() -> PauseButton {
  match pauseButtonInstance.val {
    Some(render) => render
    None => {
      let new_instance = PauseButton::new()
      pauseButtonInstance.val = Some(new_instance)
      new_instance
    }
  }
}
