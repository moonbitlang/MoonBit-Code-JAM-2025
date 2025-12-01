///|
pub struct TurtleEnemyController {}

///|
pub fn TurtleEnemyController::new() -> TurtleEnemyController {
  TurtleEnemyController::{  }
}

///|
let turtleEnemyControllerInstance : Ref[TurtleEnemyController?] = Ref::new(None)

///|
pub let turtleEnemyControllerSingleton : TurtleEnemyController = TurtleEnemyController::get_instance()

///|
pub fn TurtleEnemyController::get_instance() -> TurtleEnemyController {
  match turtleEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = TurtleEnemyController::new()
      turtleEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn TurtleEnemyController::update(
  self : TurtleEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
