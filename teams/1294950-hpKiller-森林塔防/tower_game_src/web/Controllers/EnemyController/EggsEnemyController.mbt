///|
pub struct EggsEnemyController {}

///|
pub fn EggsEnemyController::new() -> EggsEnemyController {
  EggsEnemyController::{  }
}

///|
let eggsEnemyControllerInstance : Ref[EggsEnemyController?] = Ref::new(None)

///|
pub let eggsEnemyControllerSingleton : EggsEnemyController = EggsEnemyController::get_instance()

///|
pub fn EggsEnemyController::get_instance() -> EggsEnemyController {
  match eggsEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = EggsEnemyController::new()
      eggsEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn EggsEnemyController::update(
  self : EggsEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
