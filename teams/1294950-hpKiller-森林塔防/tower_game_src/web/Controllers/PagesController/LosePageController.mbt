///|
pub(all) struct LosePageController {}

///|
pub fn LosePageController::new() -> LosePageController {
  LosePageController::{  }
}

///|
let losePageControllerInstance : Ref[LosePageController?] = Ref::new(None)

///|
pub let losePageControllerSingleton : LosePageController = LosePageController::get_instance()

///|
pub fn LosePageController::get_instance() -> LosePageController {
  match losePageControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = LosePageController::new()
      losePageControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn LosePageController::update(
  self : LosePageController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
  if pagesControllerSingleton.show_lose_page() {
    @Pages.losePageSingleton.is_open = true
  }
}

///|
pub fn LosePageController::click_replay_button(
  self : LosePageController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  ignore(point)
  let lose_page = @Pages.losePageSingleton
  point.x >= lose_page.replay_button_x &&
  point.x <= lose_page.replay_button_x + lose_page.replay_button_w &&
  point.y >= lose_page.replay_button_y &&
  point.y <= lose_page.replay_button_y + lose_page.replay_button_h
}

///|
pub fn LosePageController::handel_replay(self : LosePageController) -> Unit {
  ignore(self)
  let lose_page = @Pages.losePageSingleton
  lose_page.replay_button_click = true
  @MapController.switch_level(@Map.mapLevelSingleton.get_cur_level())
  @Pages.losePageSingleton.is_open = false
}

///|
pub fn LosePageController::click_return_button(
  self : LosePageController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  let lose_page = @Pages.losePageSingleton
  point.x >= lose_page.return_button_x &&
  point.x <= lose_page.return_button_x + lose_page.return_button_w &&
  point.y >= lose_page.return_button_y &&
  point.y <= lose_page.return_button_y + lose_page.return_button_h
}

///|
pub fn LosePageController::handel_return(self : LosePageController) -> Unit {
  ignore(self)
  let lose_page = @Pages.losePageSingleton
  lose_page.return_button_click = true
  @Pages.selectLevelPageSingleton.is_open = true
  // println(@Pages.selectLevelPageSingleton.is_open)
  // reset some var 
  @MapController.switch_level(@Map.mapLevelSingleton.get_cur_level())
  @Pages.losePageSingleton.is_open = false
}
