///|
pub(all) struct MenuButtonController {}

///|
pub fn MenuButtonController::new() -> MenuButtonController {
  MenuButtonController::{  }
}

///|
let menuButtonControllerInstance : Ref[MenuButtonController?] = Ref::new(None)

///|
pub let menuButtonControllerSingleton : MenuButtonController = MenuButtonController::get_instance()

///|
pub fn MenuButtonController::get_instance() -> MenuButtonController {
  match menuButtonControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = MenuButtonController::new()
      menuButtonControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MenuButtonController::update(
  self : MenuButtonController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}

///|
pub fn MenuButtonController::click_menu_button(
  self : MenuButtonController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  point.x > @TopBar.menuButtonSingleton.x &&
  point.x < @TopBar.menuButtonSingleton.x + @TopBar.menuButtonSingleton.w &&
  point.y > @TopBar.menuButtonSingleton.y &&
  point.y < @TopBar.menuButtonSingleton.y + @TopBar.menuButtonSingleton.h
}

///|
pub fn MenuButtonController::handle_input_point(
  self : MenuButtonController,
) -> Unit {
  ignore(self)
  @Panels.menuPanelSingleton.is_open = true
}
