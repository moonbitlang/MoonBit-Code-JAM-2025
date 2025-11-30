///|
pub struct CaterpillarEnemyController {}

///|
pub fn CaterpillarEnemyController::new() -> CaterpillarEnemyController {
  CaterpillarEnemyController::{  }
}

///|
let caterpillarEnemyControllerInstance : Ref[CaterpillarEnemyController?] = Ref::new(
  None,
)

///|
pub let caterpillarEnemyControllerSingleton : CaterpillarEnemyController = CaterpillarEnemyController::get_instance()

///|
pub fn CaterpillarEnemyController::get_instance() -> CaterpillarEnemyController {
  match caterpillarEnemyControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = CaterpillarEnemyController::new()
      caterpillarEnemyControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn CaterpillarEnemyController::update(
  self : CaterpillarEnemyController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
