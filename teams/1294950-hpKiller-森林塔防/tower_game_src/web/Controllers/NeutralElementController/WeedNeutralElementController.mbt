///|
pub(all) struct WeedNeutralElementController {}

///|
pub fn WeedNeutralElementController::new() -> WeedNeutralElementController {
  WeedNeutralElementController::{  }
}

///|
let weedNeutralElementControllerInstance : Ref[WeedNeutralElementController?] = Ref::new(
  None,
)

///|
pub let weedNeutralElementControllerSingleton : WeedNeutralElementController = WeedNeutralElementController::get_instance()

///|
pub fn WeedNeutralElementController::get_instance() -> WeedNeutralElementController {
  match weedNeutralElementControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = WeedNeutralElementController::new()
      weedNeutralElementControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn WeedNeutralElementController::update(
  self : WeedNeutralElementController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
