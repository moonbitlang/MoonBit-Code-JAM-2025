///|
pub struct GroundEnemyController {}

///|
pub fn GroundEnemyController::new() -> GroundEnemyController {
  GroundEnemyController::{  }
}

///|
let groundEnemyControllerInstance : Ref[GroundEnemyController?] = Ref::new(None)

///|
pub let groundEnemyControllerSingleton : GroundEnemyController = GroundEnemyController::get_instance()

///|
pub fn GroundEnemyController::get_instance() -> GroundEnemyController {
  match groundEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = GroundEnemyController::new()
      groundEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn GroundEnemyController::update(
  self : GroundEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
