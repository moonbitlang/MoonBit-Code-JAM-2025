///|
pub(all) struct SlotMachineNeutralElementController {}

///|
pub fn SlotMachineNeutralElementController::new() -> SlotMachineNeutralElementController {
  SlotMachineNeutralElementController::{  }
}

///|
let slotMachineNeutralElementControllerInstance : Ref[
  SlotMachineNeutralElementController?,
] = Ref::new(None)

///|
pub let slotMachineNeutralElementControllerSingleton : SlotMachineNeutralElementController = SlotMachineNeutralElementController::get_instance()

///|
pub fn SlotMachineNeutralElementController::get_instance() -> SlotMachineNeutralElementController {
  match slotMachineNeutralElementControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = SlotMachineNeutralElementController::new()
      slotMachineNeutralElementControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SlotMachineNeutralElementController::update(
  self : SlotMachineNeutralElementController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
