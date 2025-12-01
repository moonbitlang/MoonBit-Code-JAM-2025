///|
pub struct FlyingEnemyController {}

///|
pub fn FlyingEnemyController::new() -> FlyingEnemyController {
  FlyingEnemyController::{  }
}

///|
let flyingEnemyControllerInstance : Ref[FlyingEnemyController?] = Ref::new(None)

///|
pub let flyingEnemyControllerSingleton : FlyingEnemyController = FlyingEnemyController::get_instance()

///|
pub fn FlyingEnemyController::get_instance() -> FlyingEnemyController {
  match flyingEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = FlyingEnemyController::new()
      flyingEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn FlyingEnemyController::update(
  self : FlyingEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
