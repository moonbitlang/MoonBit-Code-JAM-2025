///|
pub(all) struct TreasureChestNeutralElementController {}

///|
pub fn TreasureChestNeutralElementController::new() -> TreasureChestNeutralElementController {
  TreasureChestNeutralElementController::{  }
}

///|
let treasureChestNeutralElementControllerInstance : Ref[
  TreasureChestNeutralElementController?,
] = Ref::new(None)

///|
pub let treasureChestNeutralElementControllerSingleton : TreasureChestNeutralElementController = TreasureChestNeutralElementController::get_instance()

///|
pub fn TreasureChestNeutralElementController::get_instance() -> TreasureChestNeutralElementController {
  match treasureChestNeutralElementControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = TreasureChestNeutralElementController::new()
      treasureChestNeutralElementControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn TreasureChestNeutralElementController::update(
  self : TreasureChestNeutralElementController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}
