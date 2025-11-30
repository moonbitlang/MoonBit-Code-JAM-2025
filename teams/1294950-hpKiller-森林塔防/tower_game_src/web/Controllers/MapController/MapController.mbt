///|
pub(all) struct MapController {}

///|
pub fn MapController::new() -> MapController {
  MapController::{  }
}

///|
let mapControllerInstance : Ref[MapController?] = Ref::new(None)

///|
pub let mapControllerSingleton : MapController = MapController::get_instance()

///|
pub fn MapController::get_instance() -> MapController {
  match mapControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = MapController::new()
      mapControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MapController::update(self : MapController, dt : Double) -> Unit {
  ignore(dt)
  ignore(self)
  let map_grid = @Map.map_grid_system_singleton

  // 重绘路径标志

  // 覆盖敌人敌人表示覆盖路径

  // 中立元素
  for ne in map_grid.neutralElement {
    ne.can_move() |> ignore
    map_grid.placed_neutral_element(
      ne.position().x.to_int(),
      ne.position().y.to_int(),
    )
    |> ignore
  }
  // 更新提示
  update_tip(dt)
}

///|
pub fn MapController::placed(
  self : MapController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  let bp = @Map.map_grid_system_singleton.to_base_point(point)
  // println(
  //   "point \{bp.x} \{bp.y} is_placed:\{@Map.map_grid_system_singleton.is_placed(bp.x.to_int(), bp.y.to_int())}",
  // )
  @Map.map_grid_system_singleton.is_placed(bp.x.to_int(), bp.y.to_int())
}

///|
pub fn MapController::map_type(
  self : MapController,
  point : @Point.PixelPoint,
) -> @Map.Grid {
  ignore(self)
  let m = @Map.map_grid_system_singleton
  let bp = @Map.map_grid_system_singleton.to_base_point(point)
  let x = bp.x
  let y = bp.y
  if m.grid.length() > 0 &&
    y >= 0 &&
    y < m.grid.length().to_double() &&
    x >= 0 &&
    x < m.grid[0].length().to_double() {
    m.grid[y.to_int()][x.to_int()]
  } else {
    @Map.Placed
  }
}

///|
pub fn switch_level(l : Int) -> Unit {
  // selectLevelPageSingleton.go_to_level(l)
  // Set enemy wave config for the selected level
  // println("switch_to:\{l}")
  let wc = @Map.enemyWaveConfigSingleton()
  wc.set_level(l)
  // Set path 
  @Map.set_path_by_level(l)
  // Reset current wave to first wave
  // wc.cur_wave = 1
  // Reset all waves to initial state for each path
  // for path_config in wc.path_wave_configs {
  //   for wave in path_config.waves {
  //     wave.enemy_count = 0
  //     wave.cur_d_t = 0
  //     wave.has_enemy = true
  //     wave.is_start = false
  //   }
  // }
  @Panels.set_available_tower_by_level(l)
  @NeutralElementController.switch_level(l)
  @Panels.selectTowerPanelSingleton.isOpen = false
  @Pages.winPageSingleton.select_level_button_click = false
  @Map.mapLevelSingleton.set_cur_level(l)
  @TopBar.hduSingleton.set_HDU_by_level(l)
  // Reset HP
  @HP.hPSingleton.hp = @HP.hPSingleton.max_hp
  // Clear all towers
  @Map.map_grid_system_singleton.clear_all_towers()
  // fix bug in effect 
  for e in @Map.map_grid_system_singleton.enemy {
    e.take_damage(e.max_health())
  }
  @Map.map_grid_system_singleton.enemy = []
  @TopBarController.speedControllerSingleton.reset()
  @Panels.menuPanelSingleton.data = @Panels.create_panel_data(l)
}

///|
