///|
pub(all) struct EnergyLightController {}

///|
pub fn EnergyLightController::new() -> EnergyLightController {
  EnergyLightController::{  }
}

///|
let energyLightControllerInstance : Ref[EnergyLightController?] = Ref::new(None)

///|
pub let energyLightControllerSingleton : EnergyLightController = EnergyLightController::get_instance()

///|
pub fn EnergyLightController::get_instance() -> EnergyLightController {
  match energyLightControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = EnergyLightController::new()
      energyLightControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn EnergyLightController::update(
  self : EnergyLightController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
