///|
pub(all) struct ConveyorBeltNeutralElementController {}

///|
pub fn ConveyorBeltNeutralElementController::new() -> ConveyorBeltNeutralElementController {
  ConveyorBeltNeutralElementController::{  }
}

///|
let conveyorBeltNeutralElementControllerInstance : Ref[
  ConveyorBeltNeutralElementController?,
] = Ref::new(None)

///|
pub let conveyorBeltNeutralElementControllerSingleton : ConveyorBeltNeutralElementController = ConveyorBeltNeutralElementController::get_instance()

///|
pub fn ConveyorBeltNeutralElementController::get_instance() -> ConveyorBeltNeutralElementController {
  match conveyorBeltNeutralElementControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = ConveyorBeltNeutralElementController::new()
      conveyorBeltNeutralElementControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ConveyorBeltNeutralElementController::update(
  self : ConveyorBeltNeutralElementController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
