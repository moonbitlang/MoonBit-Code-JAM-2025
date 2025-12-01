///|
pub struct UFOEnemyController {}

///|
pub fn UFOEnemyController::new() -> UFOEnemyController {
  UFOEnemyController::{  }
}

///|
let uFOEnemyControllerInstance : Ref[UFOEnemyController?] = Ref::new(None)

///|
pub let uFOEnemyControllerSingleton : UFOEnemyController = UFOEnemyController::get_instance()

///|
pub fn UFOEnemyController::get_instance() -> UFOEnemyController {
  match uFOEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = UFOEnemyController::new()
      uFOEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn UFOEnemyController::update(
  self : UFOEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
