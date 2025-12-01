///|
pub(all) struct PauseController {}

///|
pub fn PauseController::new() -> PauseController {
  PauseController::{  }
}

///|
let pauseControllerInstance : Ref[PauseController?] = Ref::new(None)

///|
pub let pauseControllerSingleton : PauseController = PauseController::get_instance()

///|
pub fn PauseController::get_instance() -> PauseController {
  match pauseControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = PauseController::new()
      pauseControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PauseController::click_pause_button(
  _self : PauseController,
  point : @Point.PixelPoint,
) -> Bool {
  point.x > @TopBar.pauseButtonSingleton.x &&
  point.x < @TopBar.pauseButtonSingleton.w + @TopBar.pauseButtonSingleton.x &&
  point.y > @TopBar.pauseButtonSingleton.y &&
  point.y < @TopBar.pauseButtonSingleton.y + @TopBar.pauseButtonSingleton.h
}

///|
pub fn PauseController::isPaused(_self : PauseController) -> Bool {
  @TopBar.pauseButtonSingleton.is_pause
}

///|
pub fn PauseController::handle_input_point(_self : PauseController) -> Unit {
  @TopBar.pauseButtonSingleton.is_pause = !@TopBar.pauseButtonSingleton.is_pause
}
