///|
pub(all) struct MenuButton {
  mut open_menu : Bool
  mut x : Double
  mut y : Double
  mut w : Double
  mut h : Double
  mut padding : Double
  mut margin : Double
}

///|
pub fn MenuButton::new() -> MenuButton {
  let padding = 10.0
  let margin = 10.0
  let w = 36.0
  let h = w
  let y = padding + margin
  MenuButton::{
    open_menu: false,
    x: @Core.map.width - padding - w - padding - w - padding - w,
    y,
    w,
    h,
    padding,
    margin,
  }
}

///|
let menuButtonInstance : Ref[MenuButton?] = Ref::new(None)

///|
pub let menuButtonSingleton : MenuButton = MenuButton::get_instance()

///|
pub fn MenuButton::get_instance() -> MenuButton {
  match menuButtonInstance.val {
    Some(render) => render
    None => {
      let new_instance = MenuButton::new()
      menuButtonInstance.val = Some(new_instance)
      new_instance
    }
  }
}
