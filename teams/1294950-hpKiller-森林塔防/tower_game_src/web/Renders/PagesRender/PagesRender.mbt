///|
pub(all) struct PagesRender {}

///|
pub fn PagesRender::new() -> PagesRender {
  PagesRender::{  }
}

///|
let pagesRenderInstance : Ref[PagesRender?] = Ref::new(None)

///|
pub let pagesRenderSingleton : PagesRender = PagesRender::get_instance()

///|
pub fn PagesRender::get_instance() -> PagesRender {
  match pagesRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = PagesRender::new()
      pagesRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PagesRender::render(self : PagesRender, dt : Double) -> Unit {
  ignore(dt)
  ignore(self)
  if self.show_win_page() {
    // println("render win page")
    winPageRenderSingleton.render(dt)
    return
  }
  if self.show_lose_page() {
    // println("render lose page")
    losePageRenderSingleton.render(dt)
    return
  }
  if self.show_select_level_page() {
    // println("render select page")
    selectLevelPageRenderSingleton.render(dt)
    return
  }
}

///|
pub fn PagesRender::show_page(self : PagesRender) -> Bool {
  ignore(self)
  self.show_lose_page() || self.show_win_page() || self.show_select_level_page()
}

///|
fn PagesRender::show_select_level_page(self : PagesRender) -> Bool {
  ignore(self)
  @Pages.selectLevelPageSingleton.is_open
}

///|
fn PagesRender::show_lose_page(self : PagesRender) -> Bool {
  ignore(self)
  @Pages.losePageSingleton.is_open
}

///|
fn PagesRender::show_win_page(self : PagesRender) -> Bool {
  ignore(self)
  @Pages.winPageSingleton.is_open
  // Get the last wave from the first path configuration
  // let wave_config = @Map.enemyWaveConfigSingleton()
  // if wave_config.path_wave_configs.length() == 0 {
  //   return false
  // }
  // let first_path_waves = wave_config.path_wave_configs[0].waves
  // if first_path_waves.length() == 0 {
  //   return false
  // }
  // let last_wave = first_path_waves[first_path_waves.length() - 1]
  // // 开始最后一波
  // last_wave.is_start &&
  // // 该波没有敌人
  // !last_wave.has_enemy &&
  // // 还有hp
  // @HP.hPSingleton.hp > 0
}
