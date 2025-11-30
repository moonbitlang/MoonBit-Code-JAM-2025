///|
pub struct KangarooEnemyController {}

///|
pub fn KangarooEnemyController::new() -> KangarooEnemyController {
  KangarooEnemyController::{  }
}

///|
let kangarooEnemyControllerInstance : Ref[KangarooEnemyController?] = Ref::new(
  None,
)

///|
pub let kangarooEnemyControllerSingleton : KangarooEnemyController = KangarooEnemyController::get_instance()

///|
pub fn KangarooEnemyController::get_instance() -> KangarooEnemyController {
  match kangarooEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = KangarooEnemyController::new()
      kangarooEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn KangarooEnemyController::update(
  self : KangarooEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
