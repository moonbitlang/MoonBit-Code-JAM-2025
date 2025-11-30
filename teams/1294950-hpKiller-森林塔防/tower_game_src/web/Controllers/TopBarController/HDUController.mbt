///|
pub struct HDUController {}

///|
fn init {
  @EventSystem.add_gold_gain_listener(fn(event : @EventSystem.GoldGainEvent) {
    // Add gold to player's balance
    hduControllerSingleton.add_gold(event.amount.to_double())
  })
}

///|
pub fn HDUController::new() -> HDUController {
  HDUController::{  }
}

///|
let hduControllerInstance : Ref[HDUController?] = Ref::new(None)

///|
pub let hduControllerSingleton : HDUController = HDUController::get_instance()

///|
pub fn HDUController::get_instance() -> HDUController {
  match hduControllerInstance.val {
    Some(controller) => controller
    None => {
      let new_instance = HDUController::new()
      hduControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn HDUController::update_gold(
  self : HDUController,
  amount : Double,
) -> Unit {
  ignore(self)
  @TopBar.hduSingleton.gold = amount
}

///|
pub fn HDUController::get_gold(self : HDUController) -> Double {
  ignore(self)
  @TopBar.hduSingleton.gold
}

///|
pub fn HDUController::add_gold(self : HDUController, amount : Double) -> Unit {
  ignore(self)
  @TopBar.hduSingleton.gold = @TopBar.hduSingleton.gold + amount
}

///|
pub fn HDUController::subtract_gold(
  self : HDUController,
  amount : Double,
) -> Bool {
  ignore(self)
  if @TopBar.hduSingleton.gold >= amount {
    @TopBar.hduSingleton.gold = @TopBar.hduSingleton.gold - amount
    true
  } else {
    false
  }
}

///|
pub fn HDUController::spend_gold(self : HDUController, amount : Double) -> Bool {
  ignore(self)
  let can_spend = @TopBar.hduSingleton.gold - amount > 0
  if @TopBar.hduSingleton.gold - amount > 0 {
    @TopBar.hduSingleton.gold = @TopBar.hduSingleton.gold - amount
  }
  can_spend
}
