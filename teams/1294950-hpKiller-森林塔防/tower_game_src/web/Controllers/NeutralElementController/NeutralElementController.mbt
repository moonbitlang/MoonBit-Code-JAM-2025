///|
pub(all) struct NeutralElementController {}

///|
pub fn NeutralElementController::new() -> NeutralElementController {
  NeutralElementController::{  }
}

///|
let neutralElementControllerInstance : Ref[NeutralElementController?] = Ref::new(
  None,
)

///|
pub let neutralElementControllerSingleton : NeutralElementController = NeutralElementController::get_instance()

///|
pub fn NeutralElementController::get_instance() -> NeutralElementController {
  match neutralElementControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = NeutralElementController::new()
      neutralElementControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn NeutralElementController::update(
  self : NeutralElementController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
  for e in @Map.map_grid_system_singleton.neutralElement {
    match e.neutralElement_type() {
      @NeutralElement.WeedNeutralElement =>
        weedNeutralElementControllerSingleton.update(dt)
      @NeutralElement.SlotMachineNeutralElement =>
        slotMachineNeutralElementControllerSingleton.update(dt)
      @NeutralElement.StoneNeutralElement =>
        stoneNeutralElementControllerSingleton.update(dt)
      @NeutralElement.TreasureChestNeutralElement =>
        treasureChestNeutralElementControllerSingleton.update(dt)
      @NeutralElement.ConveyorBeltNeutralElement =>
        conveyorBeltNeutralElementControllerSingleton.update(dt)
      @NeutralElement.SearchLightNeutralElement =>
        searchLightControllerSingleton.update(dt)
      @NeutralElement.EnergyLightNeutralElement =>
        energyLightControllerSingleton.update(dt)
    }
  }
}

///|
pub fn switch_level(level : Int) -> Unit {
  @Map.set_neutral_element_by_level(level)
}

///|
pub fn handle_input_point(point : @Point.PixelPoint) -> Unit {
  let cp = @Map.map_grid_system_singleton.pixel2cent(point)
  let ne = @NeutralElement.neutral_element_click_singleton
  // let bp = point
  if ne.last_center_x == -1 {
    ne.last_center_x = cp.0
  }
  if ne.last_center_y == -1 {
    ne.last_center_y = cp.1
  }
  ne.cur_center_x = cp.0
  ne.cur_center_y = cp.1
  println("x:" + ne.cur_center_x.to_string())
  println("y:" + ne.cur_center_y.to_string())
  // render attack tips 
  if ne.cur_center_x != -1 && ne.cur_center_y != -1 {
    ne.render_attack_tips = true
  }
}
