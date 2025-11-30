///|
pub(all) struct LosePage {
  mut is_open : Bool
  mut replay_button_x : Double
  mut replay_button_y : Double
  mut replay_button_w : Double
  mut replay_button_h : Double
  mut replay_button_padding : Double
  mut replay_button_margin : Double
  mut replay_button_click : Bool
  mut return_button_x : Double
  mut return_button_y : Double
  mut return_button_w : Double
  mut return_button_h : Double
  mut return_button_padding : Double
  mut return_button_margin : Double
  mut return_button_click : Bool
}

///|
pub fn LosePage::new() -> LosePage {
  // Button dimensions
  let button_width = 200.0
  let button_height = 50.0
  let button_padding = 10.0
  let button_margin = 20.0

  // Get actual canvas dimensions
  let canvas_width = @Core.map.width
  let canvas_height = @Core.map.height

  // Position buttons horizontally centered
  let replay_x = (canvas_width - button_width) / 2.0
  let return_x = (canvas_width - button_width) / 2.0

  // Position buttons vertically with spacing
  let replay_y = canvas_height / 2.0 - button_height - button_margin / 2.0
  let return_y = canvas_height / 2.0 + button_margin / 2.0
  LosePage::{
    is_open: false,
    replay_button_x: replay_x,
    replay_button_y: replay_y,
    replay_button_w: button_width,
    replay_button_h: button_height,
    replay_button_padding: button_padding,
    replay_button_margin: button_margin,
    replay_button_click: false,
    return_button_x: return_x,
    return_button_y: return_y,
    return_button_w: button_width,
    return_button_h: button_height,
    return_button_padding: button_padding,
    return_button_margin: button_margin,
    return_button_click: false,
  }
}

///|
let losePageInstance : Ref[LosePage?] = Ref::new(None)

///|
pub let losePageSingleton : LosePage = LosePage::get_instance()

///|
pub fn LosePage::get_instance() -> LosePage {
  match losePageInstance.val {
    Some(render) => render
    None => {
      let new_instance = LosePage::new()
      losePageInstance.val = Some(new_instance)
      new_instance
    }
  }
}
