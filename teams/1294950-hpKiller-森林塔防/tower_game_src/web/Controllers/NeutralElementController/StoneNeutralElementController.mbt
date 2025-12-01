///|
pub(all) struct StoneNeutralElementController {}

///|
pub fn StoneNeutralElementController::new() -> StoneNeutralElementController {
  StoneNeutralElementController::{  }
}

///|
let stoneNeutralElementControllerInstance : Ref[StoneNeutralElementController?] = Ref::new(
  None,
)

///|
pub let stoneNeutralElementControllerSingleton : StoneNeutralElementController = StoneNeutralElementController::get_instance()

///|
pub fn StoneNeutralElementController::get_instance() -> StoneNeutralElementController {
  match stoneNeutralElementControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = StoneNeutralElementController::new()
      stoneNeutralElementControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn StoneNeutralElementController::update(
  self : StoneNeutralElementController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
