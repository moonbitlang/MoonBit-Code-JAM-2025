///|
pub(all) struct SearchLightController {}

///|
pub fn SearchLightController::new() -> SearchLightController {
  SearchLightController::{  }
}

///|
let searchLightControllerInstance : Ref[SearchLightController?] = Ref::new(None)

///|
pub let searchLightControllerSingleton : SearchLightController = SearchLightController::get_instance()

///|
pub fn SearchLightController::get_instance() -> SearchLightController {
  match searchLightControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = SearchLightController::new()
      searchLightControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SearchLightController::update(
  self : SearchLightController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
