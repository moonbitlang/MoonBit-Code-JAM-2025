///|
pub struct CheetahEnemyController {}

///|
pub fn CheetahEnemyController::new() -> CheetahEnemyController {
  CheetahEnemyController::{  }
}

///|
let cheetahEnemyControllerInstance : Ref[CheetahEnemyController?] = Ref::new(
  None,
)

///|
pub let cheetahEnemyControllerSingleton : CheetahEnemyController = CheetahEnemyController::get_instance()

///|
pub fn CheetahEnemyController::get_instance() -> CheetahEnemyController {
  match cheetahEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = CheetahEnemyController::new()
      cheetahEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn CheetahEnemyController::update(
  self : CheetahEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
