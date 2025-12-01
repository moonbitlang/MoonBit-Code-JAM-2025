///|
pub(all) struct GameRender {}

///|
pub fn GameRender::new() -> GameRender {
  GameRender::{  }
}

///|
pub fn GameRender::render(
  _self : GameRender,
  dt : Double,
  timestamp : Double,
) -> Unit {
  ignore(dt)
  if @PagesRender.pagesRenderSingleton.show_page() {
    @PagesRender.pagesRenderSingleton.render(timestamp)
    // println("return render")
    return
  }

  // game logic render
  @MapRender.mapRenderSingleton.render(timestamp)
  @MapRender.mapTipsRenderSingleton.render(timestamp)
  @HPRender.hPRenderSingleton.render(timestamp)
  // @HPRender.hPRenderSingleton.render_with_debug(timestamp)

  @NeutralElementRender.neutralElementRenderSingleton.render(timestamp)
  // TopBar
  @TopBarRender.hDURendererSingleton.render(@Core.ctxSingleton)
  @TopBarRender.hDURendererSingleton.update_effects(timestamp)
  @TopBarRender.hDURendererSingleton.render_effects(@Core.ctxSingleton)
  @TopBarRender.pauseButtonRenderSingleton.render(timestamp)
  @TopBarRender.waveProgressBarRenderSingleton.render()
  @TopBarRender.speedButtonRenderSingleton.render()
  @TopBarRender.menuButtonRenderSingleton.render(timestamp)
  // Tower Render
  @TowerRender.towerRenderSingleton.render_all_tower(timestamp)
  @EnemyRender.enemyRenderSingleton.render_all_enemy(timestamp)
  @TowerRender.towerRenderSingleton.render_all_bullets(timestamp)
  // pandel render
  @PanelsRender.selectTowerPanelRenderSingleton.render(timestamp)
  @PanelsRender.menuPanelRenderSingleton.render(timestamp)

  // _test_set_fill_colors_render("green") |> ignore
  // _test_get_global_var_render()
  // _test_localStorage_render()
  // _test_clear_cache()
  // _test_localStorage_warp()
}

///|
fn _test_localStorage_warp() -> Unit {
  let ctx = @Core.ctxSingleton
  ctx.save()
  let v = @LocalStorage.localStorageSingleton.get_item("sss")
  println("v:\{v}")
  ctx.fillStyle(if v == "" { "red" } else { "green" })
  ctx.fillRect(80, 80, 80, 80)
  ctx.restore()
}

///|
#deprecated("use @/Core/LocalStrage.mbt")
fn _test_get_global_var_render() -> Unit {
  let ctx = @Core.ctxSingleton
  ctx.save()
  // println(_test_get_fill_colors_render())
  ctx.fillStyle(_test_get_fill_colors_render())
  ctx.fillRect(80, 80, 80, 80)
  ctx.restore()
}

///|
/// 
#deprecated("use @/Core/LocalStrage.mbt")
fn _test_localStorage_render() -> Unit {
  let ctx = @Core.ctxSingleton
  ctx.save()
  // println(_test_get_fill_colors_render())
  ctx.fillStyle(_test_get_fill_colors_render())
  ctx.fillText(_test_get_item("TEST_Storage_key"), 80, 80)
  ctx.restore()
}

///|
/// 
#deprecated("use @/Core/LocalStrage.mbt")
extern "js" fn _test_get_fill_colors_render() -> String =
  #| () => { return getGlobal("TEST_FILL_COLORS") }

///|
/// 
#deprecated("use @/Core/LocalStrage.mbt")
extern "js" fn _test_set_fill_colors_render(color : String) -> UInt =
  #| (color) => setGlobal("TEST_FILL_COLORS",color)

///|
#deprecated("use @/Core/LocalStrage.mbt")
extern "js" fn _test_get_item(item : String) -> String =
  #| (item) => { return localStorage.getItem(item) }

///|
/// 
#deprecated("use @/Core/LocalStrage.mbt")
extern "js" fn _test_clear_cache() -> Unit =
  #| () => localStorage.clear()
