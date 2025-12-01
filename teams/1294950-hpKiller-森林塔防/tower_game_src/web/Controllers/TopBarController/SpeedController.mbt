///|
pub(all) struct SpeedController {}

///|
pub fn SpeedController::new() -> SpeedController {
  SpeedController::{  }
}

///|
let speedControllerInstance : Ref[SpeedController?] = Ref::new(None)

///|
pub let speedControllerSingleton : SpeedController = SpeedController::get_instance()

///|
pub fn SpeedController::get_instance() -> SpeedController {
  match speedControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = SpeedController::new()
      speedControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SpeedController::timeScale(_self : SpeedController) -> Double {
  @TopBar.speedButtonSingleton.time_scale
}

///|
pub fn SpeedController::reset(self : SpeedController) -> Unit {
  ignore(self)
  self.set_time_scale(1)
  @TopBar.speedButtonSingleton.start_speed_mode = false
}

///|
pub fn SpeedController::set_time_scale(
  _self : SpeedController,
  s : Double,
) -> Unit {
  @TopBar.speedButtonSingleton.time_scale = s
}

///|
pub fn SpeedController::handle_input_point(_self : SpeedController) -> Unit {
  if @TopBar.speedButtonSingleton.start_speed_mode {
    @TopBar.speedButtonSingleton.time_scale = 1.0
    @TopBar.speedButtonSingleton.start_speed_mode = false
  } else {
    @TopBar.speedButtonSingleton.time_scale = 2.00
    @TopBar.speedButtonSingleton.start_speed_mode = true
  }
}

///|
pub fn SpeedController::click_speed_button(
  _self : SpeedController,
  point : @Point.PixelPoint,
) -> Bool {
  point.x > @TopBar.speedButtonSingleton.x &&
  point.x < @TopBar.speedButtonSingleton.w + @TopBar.speedButtonSingleton.x &&
  point.y > @TopBar.speedButtonSingleton.y &&
  point.y < @TopBar.speedButtonSingleton.y + @TopBar.speedButtonSingleton.h
}
