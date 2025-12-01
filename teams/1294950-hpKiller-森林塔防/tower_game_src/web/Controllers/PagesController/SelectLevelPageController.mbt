///|
pub(all) struct SelectLevelPageController {}

///|
pub fn SelectLevelPageController::new() -> SelectLevelPageController {
  SelectLevelPageController::{  }
}

///|
let selectLevelPageControllerInstance : Ref[SelectLevelPageController?] = Ref::new(
  None,
)

///|
pub let selectLevelPageControllerSingleton : SelectLevelPageController = SelectLevelPageController::get_instance()

///|
pub fn SelectLevelPageController::get_instance() -> SelectLevelPageController {
  match selectLevelPageControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = SelectLevelPageController::new()
      selectLevelPageControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SelectLevelPageController::update(
  self : SelectLevelPageController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
  // Update unlock animation if active
  if @Pages.selectLevelPageSingleton.next_level_unlocked {
    @Pages.selectLevelPageSingleton.unlock_animation_progress = @cmp.minimum(
      1.0,
      @Pages.selectLevelPageSingleton.unlock_animation_progress + dt * 2.0,
    )
    // Reset flag when animation completes
    if @Pages.selectLevelPageSingleton.unlock_animation_progress >= 1.0 {
      @Pages.selectLevelPageSingleton.next_level_unlocked = false
    }
  }
}

///|
pub fn SelectLevelPageController::handel(
  self : SelectLevelPageController,
  point : @Point.PixelPoint,
) -> Unit {
  ignore(self)
  // Calculate button positions (same as in SelectLevelPageRender)
  let button_width = 80.0
  let button_height = 80.0
  let button_spacing = 40.0
  let level_count = @Map.get_level_count()
  let canvas_width = @Core.map.width
  let total_width = level_count.to_double() * button_width +
    (level_count - 1).to_double() * button_spacing
  let start_x = (canvas_width - total_width) / 2.0
  for i = 0; i < level_count; i = i + 1 {
    let level_num = i + 1
    let button_x = start_x + i.to_double() * (button_width + button_spacing)
    let button_y = @Core.map.height / 2.0 - button_height / 2.0

    // Check if click is within button bounds
    if point.x >= button_x &&
      point.x <= button_x + button_width &&
      point.y >= button_y &&
      point.y <= button_y + button_height {
      // Only allow clicking on unlocked levels
      if @Pages.selectLevelPageSingleton.is_level_unlocked(level_num) {
        // println("switch \{level_num}")
        @MapController.switch_level(level_num)
        @Pages.selectLevelPageSingleton.is_open = false
      }
      return
    }
  }
}
