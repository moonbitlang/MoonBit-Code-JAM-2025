///|
pub struct BearEnemyController {}

///|
pub fn BearEnemyController::new() -> BearEnemyController {
  BearEnemyController::{  }
}

///|
let bearEnemyControllerInstance : Ref[BearEnemyController?] = Ref::new(None)

///|
pub let bearEnemyControllerSingleton : BearEnemyController = BearEnemyController::get_instance()

///|
pub fn BearEnemyController::get_instance() -> BearEnemyController {
  match bearEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = BearEnemyController::new()
      bearEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn BearEnemyController::update(
  self : BearEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
