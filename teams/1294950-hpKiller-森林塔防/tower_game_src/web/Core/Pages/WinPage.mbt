///|
pub(all) struct WinPage {
  mut is_open : Bool
  mut star_count : Int
  mut select_level_button_x : Double
  mut select_level_button_y : Double
  mut select_level_button_w : Double
  mut select_level_button_h : Double
  mut select_level_button_padding : Double
  mut select_level_button_margin : Double
  mut select_level_button_click : Bool
  mut next_level_button_x : Double
  mut next_level_button_y : Double
  mut next_level_button_w : Double
  mut next_level_button_h : Double
  mut next_level_button_padding : Double
  mut next_level_button_margin : Double
  mut next_level_button_click : Bool
}

///|
pub fn WinPage::new() -> WinPage {
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
  let next_level_x = (canvas_width - button_width) / 2.0

  // Position buttons vertically with spacing
  let replay_y = canvas_height / 2.0 - button_height - button_margin / 2.0 + 50
  let next_level_y = canvas_height / 2.0 + button_margin / 2.0 + 50
  WinPage::{
    is_open: false,
    star_count: 0,
    select_level_button_x: replay_x,
    select_level_button_y: replay_y,
    select_level_button_w: button_width,
    select_level_button_h: button_height,
    select_level_button_padding: button_padding,
    select_level_button_margin: button_margin,
    select_level_button_click: false,
    next_level_button_x: next_level_x,
    next_level_button_y: next_level_y,
    next_level_button_w: button_width,
    next_level_button_h: button_height,
    next_level_button_padding: button_padding,
    next_level_button_margin: button_margin,
    next_level_button_click: false,
  }
}

///|
let winPageInstance : Ref[WinPage?] = Ref::new(None)

///|
pub let winPageSingleton : WinPage = WinPage::get_instance()

///|
pub fn WinPage::get_instance() -> WinPage {
  match winPageInstance.val {
    Some(render) => render
    None => {
      let new_instance = WinPage::new()
      winPageInstance.val = Some(new_instance)
      new_instance
    }
  }
}
