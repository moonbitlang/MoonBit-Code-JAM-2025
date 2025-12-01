///|
pub(all) struct WinPageController {}

///|
pub fn WinPageController::new() -> WinPageController {
  WinPageController::{  }
}

///|
let winPageControllerInstance : Ref[WinPageController?] = Ref::new(None)

///|
pub let winPageControllerSingleton : WinPageController = WinPageController::get_instance()

///|
pub fn WinPageController::get_instance() -> WinPageController {
  match winPageControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = WinPageController::new()
      winPageControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn WinPageController::update(self : WinPageController, dt : Double) -> Unit {
  ignore(dt)
  ignore(self)
  // Only update star count and show win page if it's not already being closed via replay
  if !@Pages.winPageSingleton.select_level_button_click {
    if @HP.hPSingleton.hp == @HP.hPSingleton.max_hp {
      @Pages.winPageSingleton.star_count = 3
    } else if @HP.hPSingleton.hp >= @HP.hPSingleton.max_hp / 2 {
      @Pages.winPageSingleton.star_count = 2
    } else {
      @Pages.winPageSingleton.star_count = 1
    }
    @Pages.winPageSingleton.is_open = true
  }
}

// ///|
// fn WinPageController::click_callback(self : WinPageController) -> Unit {
//   ignore(self)
//   // Unlock next level after winning
//   // let current_level = @Pages.selectLevelPageSingleton.current_level
//   // @Pages.selectLevelPageSingleton.on_win(current_level)
//   // Set up enemy wave configuration for next level
//   // let next_level = current_level + 1
//   // if next_level <= @Pages.selectLevelPageSingleton.total_levels {
//   //   @Map.enemyWaveConfigSingleton().set_level(next_level)
//   // }
// }

///|
pub fn WinPageController::click_select_level_button(
  self : WinPageController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  let win_page = @Pages.winPageSingleton
  point.x >= win_page.select_level_button_x &&
  point.x <= win_page.select_level_button_x + win_page.select_level_button_w &&
  point.y >= win_page.select_level_button_y &&
  point.y <= win_page.select_level_button_y + win_page.select_level_button_h
}

///|
pub fn WinPageController::click_next_level_button(
  self : WinPageController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  let win_page = @Pages.winPageSingleton
  point.x >= win_page.next_level_button_x &&
  point.x <= win_page.next_level_button_x + win_page.next_level_button_w &&
  point.y >= win_page.next_level_button_y &&
  point.y <= win_page.next_level_button_y + win_page.next_level_button_h
}

///|
pub fn WinPageController::handle_select_level(self : WinPageController) -> Unit {
  ignore(self)
  @Pages.winPageSingleton.select_level_button_click = true
  // Restart current level
  // @Map.enemyWaveConfigSingleton().cur_wave = 1
  // @HP.hPSingleton.hp = @HP.hPSingleton.max_hp
  @Pages.winPageSingleton.is_open = false
  // println(@Pages.winPageSingleton.is_open)
  @Pages.selectLevelPageSingleton.is_open = true
  unlock_next_level(@Map.mapLevelSingleton.get_cur_level())
}

///|
pub fn WinPageController::handle_next_level(self : WinPageController) -> Unit {
  ignore(self)
  @Pages.winPageSingleton.next_level_button_click = true
  // Go to select level page
  unlock_next_level_goto_next_level(@Map.mapLevelSingleton.get_cur_level())
  @Pages.winPageSingleton.is_open = false
  // self.click_callback()
  // let cl = @Map.mapLevelSingleton.get_cur_level()
  // @Pages.selectLevelPageSingleton.unlocked_levels = @Pages.selectLevelPageSingleton.unlocked_levels +
  //   [cl + 1]

}

///|
pub fn unlock_next_level(current_level : Int) -> Unit {
  let slp = @Pages.selectLevelPageSingleton
  if current_level < slp.total_levels {
    let next_level = current_level + 1
    if !slp.unlocked_levels.contains(next_level) {
      slp.unlocked_levels.push(next_level)
      slp.next_level_unlocked = true
      slp.unlock_animation_progress = 0.0
    }
  }
}

///|
pub fn unlock_next_level_goto_next_level(current_level : Int) -> Unit {
  let slp = @Pages.selectLevelPageSingleton
  if current_level < slp.total_levels {
    let next_level = current_level + 1
    if !slp.unlocked_levels.contains(next_level) {
      slp.unlocked_levels.push(next_level)
      slp.next_level_unlocked = true
      slp.unlock_animation_progress = 0.0
    }
    @MapController.switch_level(next_level)
  }
}
