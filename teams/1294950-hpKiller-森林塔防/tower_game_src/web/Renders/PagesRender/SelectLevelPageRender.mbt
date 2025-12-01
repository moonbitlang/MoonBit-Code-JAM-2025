///|
pub(all) struct SelectLevelPageRender {
  mut button_x : Array[Double]
  mut button_y : Array[Double]
  mut button_width : Double
  mut button_height : Double
  mut button_spacing : Double
  mut level_count : Int
  mut animation_progress : Array[Double]
  mut unlock_animation_active : Bool
  mut unlock_animation_timer : Double
}

///|
pub fn SelectLevelPageRender::new() -> SelectLevelPageRender {
  let button_width = 80.0
  let button_height = 80.0
  let button_spacing = 40.0
  let level_count = @Map.get_level_count()
  let canvas_width = @Core.map.width
  let total_width = level_count.to_double() * button_width +
    (level_count - 1).to_double() * button_spacing
  let start_x = (canvas_width - total_width) / 2.0
  let button_x = Array::new()
  let button_y = Array::new()
  let animation_progress = Array::new()
  for i = 0; i < level_count; i = i + 1 {
    button_x.push(start_x + i.to_double() * (button_width + button_spacing))
    button_y.push(@Core.map.height / 2.0 - button_height / 2.0)
    animation_progress.push(0.0)
  }
  SelectLevelPageRender::{
    button_x,
    button_y,
    button_width,
    button_height,
    button_spacing,
    level_count,
    animation_progress,
    unlock_animation_active: false,
    unlock_animation_timer: 0.0,
  }
}

///|
let selectLevelPageRenderInstance : Ref[SelectLevelPageRender?] = Ref::new(None)

///|
pub let selectLevelPageRenderSingleton : SelectLevelPageRender = SelectLevelPageRender::get_instance()

///|
pub fn SelectLevelPageRender::get_instance() -> SelectLevelPageRender {
  match selectLevelPageRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SelectLevelPageRender::new()
      selectLevelPageRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn draw_locked_icon(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  size : Double,
) -> Unit {
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(size / 100.0, size / 100.0)

  // Lock body
  ctx.fillStyle("rgba(100, 100, 100, 0.8)")
  ctx.fillRect(40, 30, 20, 40)

  // Lock circle
  ctx.beginPath()
  ctx.arc(50, 30, 15, 0, @math.PI * 2)
  ctx.fill()

  // Lock hole
  ctx.fillStyle("rgba(50, 50, 50, 0.8)")
  ctx.beginPath()
  ctx.arc(50, 45, 5, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()
}

///|
fn SelectLevelPageRender::draw_level_button(
  self : SelectLevelPageRender,
  ctx : @Core.CanvasRenderingContext2D,
  level : Int,
  is_unlocked : Bool,
  x : Double,
  y : Double,
  width : Double,
  height : Double,
  animation_progress : Double,
) -> Unit {
  ignore(self)
  ctx.save()
  ctx.translate(x + width / 2.0, y + height / 2.0)

  // Apply pulse animation for newly unlocked levels
  if is_unlocked && animation_progress > 0.0 {
    let pulse_scale = 1.0 + 0.3 * @math.sin(animation_progress * 10.0)
    ctx.scale(pulse_scale, pulse_scale)
  }
  if is_unlocked {
    // Unlocked level - gradient background
    let grd = ctx.createLinearGradient(0, -height / 2.0, 0, height / 2.0)
    grd.addColorStop(0, "#4CAF50") // Green
    grd.addColorStop(1, "#45a049")
    ctx.fillStyle(grd)

    // Add glow effect
    ctx.shadowColor("rgba(76, 175, 80, 0.6)")
    ctx.shadowBlur(15)
  } else {
    // Locked level - gray background
    ctx.fillStyle("rgba(128, 128, 128, 0.7)")
  }
  @UIComposeRender.drawRoundRect(
    ctx,
    -width / 2.0,
    -height / 2.0,
    width,
    height,
    15,
  )
  ctx.fill()

  // Level number
  ctx.fillStyle("#FFFFFF")
  ctx.font("bold 24px Arial")
  ctx.textAlign("center")
  ctx.textBaseline("middle")
  ctx.fillText("Level " + level.to_string(), 0, 0)

  // Draw lock icon for locked levels
  if !is_unlocked {
    draw_locked_icon(ctx, 0, 0, 50)
  }
  ctx.restore()
}

///|
pub fn SelectLevelPageRender::update(
  self : SelectLevelPageRender,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)

  // Check if a new level was just unlocked
  if @Pages.selectLevelPageSingleton.next_level_unlocked &&
    !self.unlock_animation_active {
    self.unlock_animation_active = true
    self.unlock_animation_timer = 0.0
  }

  // Update unlock animation
  if self.unlock_animation_active {
    self.unlock_animation_timer = self.unlock_animation_timer + dt
    if self.unlock_animation_timer >= 0.5 {
      self.unlock_animation_active = false
    }
  }
}

///|
pub fn SelectLevelPageRender::render(
  self : SelectLevelPageRender,
  timestamp : Double,
) -> Unit {
  ignore(timestamp)
  let ctx = @Core.ctxSingleton
  if @Pages.selectLevelPageSingleton.is_open {
    ctx.save()

    // Background - dark gradient
    let grd = ctx.createLinearGradient(0, 0, 0, @Core.map.height)
    grd.addColorStop(0, "#1a1a2e")
    grd.addColorStop(1, "#16213e")
    ctx.fillStyle(grd)
    ctx.fillRect(0, 0, @Core.map.width, @Core.map.height)

    // Title
    ctx.font("bold 48px Arial")
    ctx.textAlign("center")
    ctx.fillStyle("rgba(255, 215, 0, 1)")
    ctx.shadowColor("rgba(0, 0, 0, 0.5)")
    ctx.shadowBlur(10)
    ctx.fillText("选关页面", @Core.map.width / 2.0, 100)
    ctx.shadowBlur(0)

    // Draw level buttons
    for i = 0; i < self.level_count; i = i + 1 {
      let level_num = i + 1
      let is_unlocked = @Pages.selectLevelPageSingleton.is_level_unlocked(
        level_num,
      )
      let mut anim_progress = 0.0

      // Set animation progress for newly unlocked levels
      if is_unlocked &&
        self.unlock_animation_active &&
        level_num ==
        @Pages.selectLevelPageSingleton.unlocked_levels[@Pages.selectLevelPageSingleton.unlocked_levels.length() -
        1] {
        anim_progress = self.unlock_animation_timer
      }
      self.draw_level_button(
        ctx,
        level_num,
        is_unlocked,
        self.button_x[i],
        self.button_y[i],
        self.button_width,
        self.button_height,
        anim_progress,
      )
    }
    ctx.restore()
  }
}
