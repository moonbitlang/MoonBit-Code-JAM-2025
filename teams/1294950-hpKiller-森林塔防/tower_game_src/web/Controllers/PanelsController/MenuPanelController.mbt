///|
pub(all) struct MenuPanelController {}

///|
pub fn MenuPanelController::new() -> MenuPanelController {
  MenuPanelController::{  }
}

///|
let menuPanelControllerInstance : Ref[MenuPanelController?] = Ref::new(None)

///|
pub let menuPanelControllerSingleton : MenuPanelController = MenuPanelController::get_instance()

///|
pub fn MenuPanelController::get_instance() -> MenuPanelController {
  match menuPanelControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = MenuPanelController::new()
      menuPanelControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MenuPanelController::update(
  self : MenuPanelController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}

///|
pub fn MenuPanelController::handle_help_panel_input(
  self : MenuPanelController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  // 处理帮助面板的输入
  if @Panels.menuPanelSingleton.show_help_Panel {
    let render = @PanelsRender.menuPanelRenderSingleton
    let tab_width = 150.0
    let tab_height = 60.0
    let tab_y = 20.0
    let start_x = 300.0
    let menu = @Panels.menuPanelSingleton
    for i in 0..<4 {
      let tab_x = start_x + i.to_double() * (tab_width + 20)
      if point.x >= tab_x &&
        point.x <= tab_x + tab_width &&
        point.y >= tab_y &&
        point.y <= tab_y + tab_height {
        render.switch_tab(i)
        return true
      }
    }

    // 处理图标栏点击
    let bar_x = 300.0
    let bar_y = 520.0
    let icon_size = 60.0
    let spacing = 20.0
    let icons = @PanelsRender.get_current_category_data(
      menu.data,
      render.current_tab,
    )
    let total_width = icons.length().to_double() * (icon_size + spacing) -
      spacing
    let start_icon_x = bar_x + (680.0 - total_width) / 2
    for i in 0..<icons.length() {
      let icon_x = start_icon_x + i.to_double() * (icon_size + spacing)
      let icon_y = bar_y + 10
      if point.x >= icon_x &&
        point.x <= icon_x + icon_size &&
        point.y >= icon_y &&
        point.y <= icon_y + icon_size {
        render.select_icon(i)
        return true
      }
    }

    // 处理关闭按钮
    let close_btn_x = 930.0
    let close_btn_y = 100.0
    let btn_size = 50.0
    if point.x >= close_btn_x &&
      point.x <= close_btn_x + btn_size &&
      point.y >= close_btn_y &&
      point.y <= close_btn_y + btn_size {
      @Panels.menuPanelSingleton.close()
      return true
    }
  }
  false
}

///|
pub fn MenuPanelController::handle_input_point(
  self : MenuPanelController,
  point : @Point.PixelPoint,
) -> Bool {
  ignore(self)
  ignore(point)
  if self.handle_help_panel_input(point) {
    return true
  }
  if self.handle_mouse_down(point.x, point.y) {
    return true
  }
  false
}

///|
#deprecated("not use")
pub fn MenuPanelController::handle_sound(
  self : MenuPanelController,
  point : @Point.PixelPoint,
) -> Unit {
  ignore(self)

  // Handle sound volume slider - use correct coordinates from MenuPanelController
  let menu = @Panels.menuPanelSingleton
  let slider_width = menu.slider_width
  let slider_height = menu.slider_height
  let slider_y = menu.slider_y
  let sound_slider_x = menu.sound_slider_x
  let music_slider_x = menu.music_slider_x
  let button_radius = 25.0

  // Check if clicking on sound volume slider button

  let sound_slider_button_x = sound_slider_x + slider_width * menu.sound_volume
  let sound_slider_button_y = slider_y + slider_height / 2.0
  let dx_sound = point.x - sound_slider_button_x
  let dy_sound = point.y - sound_slider_button_y
  if (dx_sound * dx_sound + dy_sound * dy_sound).sqrt() <= button_radius {
    menu.dragging_sound_slider = true
    @Panels.menuPanelSingleton.set_sound_volume(
      @cmp.maximum(
        0.0,
        @cmp.minimum(1.0, (point.x - sound_slider_x) / slider_width),
      ),
    )
    return
  }

  // Check if clicking on music volume slider button
  let music_slider_button_x = music_slider_x + slider_width * menu.music_volume
  let music_slider_button_y = slider_y + slider_height / 2.0
  let dx_music = point.x - music_slider_button_x
  let dy_music = point.y - music_slider_button_y
  if (dx_music * dx_music + dy_music * dy_music).sqrt() <= button_radius {
    menu.dragging_music_slider = true
    @Panels.menuPanelSingleton.set_music_volume(
      @cmp.maximum(
        0.0,
        @cmp.minimum(1.0, (point.x - music_slider_x) / slider_width),
      ),
    )
    return
  }
}

///|
/// Utility function to check if point is in rectangle
fn is_point_in_rect(
  x : Double,
  y : Double,
  rect_x : Double,
  rect_y : Double,
  width : Double,
  height : Double,
) -> Bool {
  x >= rect_x && x <= rect_x + width && y >= rect_y && y <= rect_y + height
}

///|
/// Handle mouse down events
pub fn MenuPanelController::handle_mouse_down(
  self : MenuPanelController,
  x : Double,
  y : Double,
) -> Bool {
  let menu = @Panels.menuPanelSingleton
  if !menu.is_open {
    return false
  }

  // Check slider buttons first
  if is_point_in_slider_button(
      x,
      y,
      menu.sound_slider_x,
      menu.slider_y,
      menu.slider_width,
      menu.slider_height,
      menu.sound_volume,
    ) {
    menu.dragging_sound_slider = true
    // println("dragging_sound_slider:\{menu.dragging_sound_slider}")
    return true
  } else if is_point_in_slider_button(
      x,
      y,
      menu.music_slider_x,
      menu.slider_y,
      menu.slider_width,
      menu.slider_height,
      menu.music_volume,
    ) {
    menu.dragging_music_slider = true
    return true
  } else if is_point_in_rect(
      x,
      y,
      menu.exit_button_x,
      menu.exit_button_y,
      menu.button_width,
      menu.button_height,
    ) {
    self.on_exit_clicked()
    // println("on_exit_clicked")
    return true
  } else if is_point_in_rect(
      x,
      y,
      menu.help_button_x,
      menu.help_button_y,
      menu.button_width,
      menu.button_height,
    ) {
    self.on_help_clicked()
    // println("on_help_clicked")
    return true
  } else if is_point_in_rect(
      x,
      y,
      menu.restart_button_x,
      menu.restart_button_y,
      menu.button_width,
      menu.button_height,
    ) {
    self.on_restart_clicked()
    // println("on_restart_clicked")
    return true
  } else if is_point_in_rect(
      x,
      y,
      menu.continue_button_x,
      menu.continue_button_y,
      menu.large_button_width,
      menu.large_button_height,
    ) {
    self.on_continue_clicked()
    // println("on_continue_clicked")
    return true
  } else if is_point_in_rect(
      x,
      y,
      menu.clear_cache_x,
      menu.clear_cache_y,
      menu.button_width,
      menu.button_height,
    ) {
    self.on_clear_cache_clicked()
    return true
  }
  false
}

///|
/// Handle mouse move events
pub fn MenuPanelController::handle_mouse_move(
  self : MenuPanelController,
  x : Double,
  y : Double,
) -> Unit {
  ignore(self)
  ignore(y)
  let menu = @Panels.menuPanelSingleton
  if !menu.is_open {
    return
  }
  if menu.dragging_sound_slider {
    let slider_value = @cmp.maximum(
      0.0,
      @cmp.minimum(1.0, (x - menu.sound_slider_x) / menu.slider_width),
    )
    menu.sound_volume = slider_value
  } else if menu.dragging_music_slider {
    let slider_value = @cmp.maximum(
      0.0,
      @cmp.minimum(1.0, (x - menu.music_slider_x) / menu.slider_width),
    )
    menu.music_volume = slider_value
  }
}

///|
/// Handle mouse up events
pub fn MenuPanelController::handle_mouse_up(self : MenuPanelController) -> Unit {
  ignore(self)
  let menu = @Panels.menuPanelSingleton
  menu.dragging_sound_slider = false
  menu.dragging_music_slider = false
}

///|
/// Button click handlers
pub fn MenuPanelController::on_exit_clicked(self : MenuPanelController) -> Unit {
  ignore(self)
  // Return to main menu
  // println("Exit to main menu clicked")
  @Panels.menuPanelSingleton.close()
}

///|
pub fn MenuPanelController::on_help_clicked(self : MenuPanelController) -> Unit {
  ignore(self)
  // Show level instructions
  let menu = @Panels.menuPanelSingleton
  menu.show_help_Panel = true
  menu.is_open = false
  // println("Help/Instructions clicked")
}

///|
pub fn MenuPanelController::on_restart_clicked(
  self : MenuPanelController,
) -> Unit {
  ignore(self)
  // Restart current level
  @MapController.switch_level(@Map.mapLevelSingleton.get_cur_level())
  // println("Restart level clicked")
  @Panels.menuPanelSingleton.close()
}

///|
pub fn MenuPanelController::on_continue_clicked(
  self : MenuPanelController,
) -> Unit {
  ignore(self)
  // Continue the game
  // println("Continue game clicked")
  @Panels.menuPanelSingleton.close()
}

///|
pub fn MenuPanelController::on_clear_cache_clicked(
  self : MenuPanelController,
) -> Unit {
  ignore(self)
  @LocalStorage.localStorageSingleton.clear_cache()
}

///|
/// Check if point is within panel bounds
pub fn MenuPanelController::is_point_in_panel(
  self : MenuPanelController,
  x : Double,
  y : Double,
) -> Bool {
  ignore(self)
  let menu = @Panels.menuPanelSingleton
  if !menu.is_open {
    return false
  }
  is_point_in_rect(x, y, menu.x, menu.y, menu.w, menu.h)
}

///|
/// Check if point is in slider button
fn is_point_in_slider_button(
  x : Double,
  y : Double,
  slider_x : Double,
  slider_y : Double,
  slider_width : Double,
  slider_height : Double,
  value : Double,
) -> Bool {
  let button_x = slider_x + slider_width * value
  let button_y = slider_y + slider_height / 2.0
  let button_radius = 25.0
  let dx = x - button_x
  let dy = y - button_y
  (dx * dx + dy * dy).sqrt() <= button_radius
}
