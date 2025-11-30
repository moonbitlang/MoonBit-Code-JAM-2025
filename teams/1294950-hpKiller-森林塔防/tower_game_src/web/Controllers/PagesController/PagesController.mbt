///|
pub(all) struct PagesController {}

///|
pub fn PagesController::new() -> PagesController {
  PagesController::{  }
}

///|
let pagesControllerInstance : Ref[PagesController?] = Ref::new(None)

///|
pub let pagesControllerSingleton : PagesController = PagesController::get_instance()

///|
pub fn PagesController::get_instance() -> PagesController {
  match pagesControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = PagesController::new()
      pagesControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PagesController::update(self : PagesController, dt : Double) -> Unit {
  ignore(dt)
  ignore(self)
  if self.show_win_page() {
    // println("show win page flag")
    winPageControllerSingleton.update(dt)
    return
  }
  if self.show_lose_page() {
    // println("show lose page flag")
    losePageControllerSingleton.update(dt)
    return
  }
  // println("iswin:\{self.show_win_page()}")

  if self.show_select_page() {
    // println("show select level page flag")
    selectLevelPageControllerSingleton.update(dt)
    return
  }
}

///|
fn PagesController::show_lose_page(self : PagesController) -> Bool {
  ignore(self)
  @HP.hPSingleton.hp <= 0
}

///|
fn PagesController::show_select_page(self : PagesController) -> Bool {
  ignore(self)
  @Pages.selectLevelPageSingleton.is_open
}

///|
fn PagesController::show_win_page(self : PagesController) -> Bool {
  ignore(self)
  // Get the last wave from the first path configuration
  let wave_config = @Map.enemyWaveConfigSingleton()
  if wave_config.path_wave_configs.length() == 0 {
    return false
  }
  let first_path_waves = wave_config.path_wave_configs[0].waves
  if first_path_waves.length() == 0 {
    return false
  }
  let last_wave = first_path_waves[first_path_waves.length() - 1]
  // 开始最后一波
  last_wave.is_start &&
  // 该波没有敌人
  !last_wave.has_enemy &&
  // 还有hp
  @HP.hPSingleton.hp > 0
}

///|
pub fn PagesController::show_page(self : PagesController) -> Bool {
  ignore(self)
  self.show_lose_page() || self.show_win_page() || self.show_select_page()
}
