///|
pub(all) struct InputController {
  // ensure init call this call in GameController
  mut init : Unit
}

///|
pub fn InputController::new() -> InputController {
  InputController::{ init: () }
}

///|
let inputControllerInstance : Ref[InputController?] = Ref::new(None)

///|
pub let inputControllerSingleton : InputController = InputController::get_instance()

///|
pub fn InputController::get_instance() -> InputController {
  match inputControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = InputController::new()
      inputControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
let isFirst : Ref[Double] = Ref::new(0)

///|
fn init {
  if @Core.is_wechat() {
    if isFirst.val == 0 {
      // let adapter = @AdapterRender.MiniGameAdapterRender::get_instance(
      //   self.canvas,
      //   self.ctx,
      // )
      // adapter.resize() |> ignore
      isFirst.val = 1
      // resize function in miniGameAdapterInputerSingleton call 
      let adapterInputer = @platform.miniGameAdapterInputerSingleton
      // @AdapterRender.wx_on_touch_start(@AdapterRender.on_input_handler)
      // this should be init in controller sub class InputController 
      match adapterInputer {
        Some(f) => {
          f.on_touch_start(fn(pos : @Point.PixelPoint) -> Unit {
            inputControllerSingleton.on_start(pos)
          })
          f.on_touch_move(fn(pos : @Point.PixelPoint) -> Unit {
            inputControllerSingleton.on_move(pos)
          })
          f.on_touch_end(fn(pos : @Point.PixelPoint) -> Unit {
            inputControllerSingleton.on_up(pos)
          })
        }
        None => ()
      }
    }
  }
  // println("init inputer")
  if @Core.is_in_web_browser() {
    if isFirst.val == 0 {
      let adapter = @platform.webAdapterInputerSingleton
      // println("web adapter init ")
      match adapter {
        Some(_) => {
          @platform.add_mouse_down_click_listener_with_callback(
            @Core.canvasSingleton,
            fn(point : @Point.PixelPoint) -> Unit {
              let point = @platform.toScalePoint(
                point,
                @platform.webAdapterInputerSingleton.unwrap(),
              )
              inputControllerSingleton.on_start(point)
            },
          )
          @platform.add_mouse_move_listener_with_callback(
            @Core.canvasSingleton,
            fn(point : @Point.PixelPoint) -> Unit {
              let point = @platform.toScalePoint(
                point,
                @platform.webAdapterInputerSingleton.unwrap(),
              )
              inputControllerSingleton.on_move(point)
            },
          )
          @platform.add_mouse_up_listener_with_callback(@Core.canvasSingleton, fn(
            point : @Point.PixelPoint,
          ) -> Unit {
            let point = @platform.toScalePoint(
              point,
              @platform.webAdapterInputerSingleton.unwrap(),
            )
            inputControllerSingleton.on_up(point)
          })
        }
        None => ()
      }
      isFirst.val = 1
    }
  }
}

///|
pub fn InputController::on_start(
  _self : InputController,
  point : @Point.PixelPoint,
) -> Unit {
  println(point.to_string())

  // println("on start")
  // @audio.playClickSound(0.1)

  // Handle pause button
  if @TopBarController.pauseControllerSingleton.click_pause_button(point) {
    @TopBarController.pauseControllerSingleton.handle_input_point()
    return
  }
  // Handle speed button
  if @TopBarController.speedControllerSingleton.click_speed_button(point) {
    @TopBarController.speedControllerSingleton.handle_input_point()
    return
  }

  // Handle win page buttons
  if @Pages.winPageSingleton.is_open {
    if @PagesController.winPageControllerSingleton.click_next_level_button(
        point,
      ) {
      @PagesController.winPageControllerSingleton.handle_next_level()
      return
    }
    if @PagesController.winPageControllerSingleton.click_select_level_button(
        point,
      ) {
      @PagesController.winPageControllerSingleton.handle_select_level()
      return
    }
  }

  // Handle lose page buttons
  if @Pages.losePageSingleton.is_open {

    // Check replay button click
    if @PagesController.losePageControllerSingleton.click_replay_button(point) {
      @PagesController.losePageControllerSingleton.handel_replay()
      return
    }

    // Check return button click
    if @PagesController.losePageControllerSingleton.click_return_button(point) {
      @PagesController.losePageControllerSingleton.handel_return()
      return
    }
  }

  // Handle select level page buttons
  if @Pages.selectLevelPageSingleton.is_open {
    @PagesController.selectLevelPageControllerSingleton.handel(point)
    return
  }
  // Handle TopBar Menu Button
  if @TopBarController.menuButtonControllerSingleton.click_menu_button(point) {
    @TopBarController.menuButtonControllerSingleton.handle_input_point()
    return
  }

  // Handle Munu Panel
  if @Panels.menuPanelSingleton.is_open ||
    @Panels.menuPanelSingleton.show_help_Panel {
    @PanelsController.menuPanelControllerSingleton.handle_input_point(point)
    |> ignore
    return
  }

  // get the type of input 
  match @MapController.mapControllerSingleton.map_type(point) {
    @Map.Tower => {
      ()
      // println("click tower")
      // @PanelsController.selectTowerPanelControllerSingleton.handle_input_point(
      //   point,
      // )
      // return
    }
    @Map.Path => {
      // println("click path")
      // @PanelsController.selectTowerPanelControllerSingleton.handle_input_point(
      //   point,
      // )
      ()
      if !@Panels.selectTowerPanelSingleton.isOpen {
        @MapController.click_disabled(point)
        return
      }
    }
    @Map.Enemy => {
      println("click enemy")
      // @PanelsController.selectTowerPanelControllerSingleton.handle_input_point(
      //   point,
      // )
      ()
      // return
    }
    @Map.NeutralElement => {
      // println("click neutral")
      // @MapController.switch_level
      // @PanelsController.selectTowerPanelControllerSingleton.handle_input_point(
      //   point,
      // )

      ()
      if !@Panels.selectTowerPanelSingleton.isOpen {
        @NeutralElementController.handle_input_point(point)
        // @MapController.click_disabled(point)
        return
      }
    }
    _ => ()
  }

  // Handle select tower panel
  // println("...")
  @PanelsController.selectTowerPanelControllerSingleton.handle_input_point(
    point,
  )
}

///|
/// Handle mouse move events for help panel
pub fn InputController::on_move(
  _self : InputController,
  point : @Point.PixelPoint,
) -> Unit {
  // println("on_move")
  let menu = @Panels.menuPanelSingleton
  if menu.is_open {
    if menu.dragging_sound_slider {
      // println("move sound_slider_x")
      // println("point.x: \{point.x}")
      // menu.sound_slider_x = point.x
      menu.sound_volume = @cmp.maximum(
        0.0,
        @cmp.minimum(1.0, (point.x - menu.sound_slider_x) / menu.slider_width),
      )
      // menu.sound_slider_x = point.x
    } else if menu.dragging_music_slider {
      menu.music_volume = @cmp.maximum(
        0.0,
        @cmp.minimum(1.0, (point.x - menu.music_slider_x) / menu.slider_width),
      )
    }
  }
}

///|
/// Handle mouse up events for help panel
pub fn InputController::on_up(
  _self : InputController,
  _pos : @Point.PixelPoint,
) -> Unit {
  // println("on up")
  let menu = @Panels.menuPanelSingleton
  if menu.is_open {
    if menu.dragging_sound_slider {
      @Panels.menuPanelSingleton.set_sound_volume(menu.sound_volume)
    } else if menu.dragging_music_slider {
      @Panels.menuPanelSingleton.set_music_volume(menu.music_volume)
    }
    menu.dragging_sound_slider = false
    menu.dragging_music_slider = false
  }
}
