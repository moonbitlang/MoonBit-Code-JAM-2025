///|
pub(all) struct HPController {}

///|
pub fn HPController::new() -> HPController {
  HPController::{  }
}

///|
let hPControllerInstance : Ref[HPController?] = Ref::new(None)

///|
pub let hPControllerSingleton : HPController = HPController::get_instance()

///|
pub fn HPController::get_instance() -> HPController {
  match hPControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = HPController::new()
      hPControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn HPController::update(self : HPController, dt : Double) -> Unit {
  ignore(dt)
  ignore(self)
}

///|
pub fn HPController::hp(self : HPController) -> Double {
  ignore(self)
  @HP.hPSingleton.hp
}

///|
pub fn HPController::hd_damage(self : HPController) -> Unit {
  ignore(self)
  @HP.hPSingleton.hp -= 1
}
