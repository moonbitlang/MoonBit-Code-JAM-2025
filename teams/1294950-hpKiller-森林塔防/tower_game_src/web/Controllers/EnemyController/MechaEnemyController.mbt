///|
pub struct MechaEnemyController {}

///|
pub fn MechaEnemyController::new() -> MechaEnemyController {
  MechaEnemyController::{  }
}

///|
let mechaEnemyControllerInstance : Ref[MechaEnemyController?] = Ref::new(None)

///|
pub let mechaEnemyControllerSingleton : MechaEnemyController = MechaEnemyController::get_instance()

///|
pub fn MechaEnemyController::get_instance() -> MechaEnemyController {
  match mechaEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = MechaEnemyController::new()
      mechaEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MechaEnemyController::update(
  self : MechaEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
