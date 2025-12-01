///|
pub(all) struct WinPageRender {
  mut star_animation_progress : Double
  mut max_animation_progress : Double
  mut page_open_time : Double
  mut is_page_open : Bool
}

///|
pub fn WinPageRender::new() -> WinPageRender {
  WinPageRender::{
    star_animation_progress: 0.0,
    max_animation_progress: 0.0,
    page_open_time: 0.0,
    is_page_open: false,
  }
}

///|
let winPageRenderInstance : Ref[WinPageRender?] = Ref::new(None)

///|
pub let winPageRenderSingleton : WinPageRender = WinPageRender::get_instance()

///|
pub fn WinPageRender::get_instance() -> WinPageRender {
  match winPageRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = WinPageRender::new()
      winPageRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn draw_star_path(
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  star_r : Double,
  r_inner : Double,
  rad : (Double) -> Double,
) -> Unit {
  ctx.beginPath()
  for i = 0; i < 10; i = i + 1 {
    let a = rad(-90.0) + i.to_double() * @math.PI / 5.0
    let rr = if i % 2 == 0 { star_r } else { r_inner }
    let px = cx + @math.cos(a) * rr
    let py = cy + @math.sin(a) * rr
    if i == 0 {
      ctx.moveTo(px, py)
    } else {
      ctx.lineTo(px, py)
    }
  }
  ctx.closePath()
}

///|
pub fn WinPageRender::draw_stars(
  self : WinPageRender,
  ctx : @Core.CanvasRenderingContext2D,
  timestamp : Double,
) -> Unit {
  let star_count = @Pages.winPageSingleton.star_count
  let canvas_width = @Core.map.width
  let canvas_height = @Core.map.height

  // Update animation progress based on time since page opened
  let time_since_open = (timestamp - self.page_open_time) / 1000.0
  self.star_animation_progress = time_since_open

  // Position stars in a horizontal line above the buttons (always show 3 stars)
  let star_y = canvas_height / 2.0 - 80.0
  let total_width = 3.0 * 60.0 + 2.0 * 20.0 // 3 stars with spacing
  let start_x = (canvas_width - total_width) / 2.0 + 30.0

  // Draw all 3 stars
  for i = 0; i < 3; i = i + 1 {
    let star_x = start_x + i.to_double() * 80.0
    ctx.save()
    ctx.translate(star_x, star_y)

    // Check if this star should be lit up
    let is_lit = i < star_count
    // Animation: each star lights up sequentially over 0.5 seconds
    let animation_time = @cmp.maximum(
      0.0,
      self.star_animation_progress - i.to_double() * 0.3,
    )
    let scale = if is_lit {
      0.8 + 0.2 * @cmp.minimum(1.0, animation_time * 3.0)
    } else {
      1.0
    }
    let alpha = if is_lit {
      @cmp.minimum(1.0, animation_time * 3.0)
    } else {
      0.5
    }
    ctx.scale(scale, scale)
    ctx.globalAlpha(alpha)
    if is_lit {
      // Draw lit star with gradient
      let g = ctx.createLinearGradient(0, -30, 0, 30)
      g.addColorStop(0.0, "#FFF2A6")
      g.addColorStop(0.55, "#FFD052")
      g.addColorStop(1.0, "#E89B2F")
      ctx.fillStyle(g)
      ctx.strokeStyle("rgba(140,70,8,0.6)")
    } else {
      // Draw gray star
      ctx.fillStyle("rgba(169,169,169,0.7)") // Dark gray
      ctx.strokeStyle("rgba(100,100,100,0.8)")
    }
    ctx.lineWidth(2.0)

    // Draw the star
    draw_star_path(ctx, 0, 0, 30, 15, (d : Double) => d * @math.PI / 180)
    ctx.fill()
    ctx.stroke()

    // Draw star highlight for lit stars only
    if is_lit && alpha > 0.3 {
      ctx.save()
      ctx.globalAlpha(0.55 * alpha)
      ctx.fillStyle("#FFFFFF")
      ctx.beginPath()
      ctx.ellipse(
        -5,
        -8,
        10,
        7,
        -0.26, // ~-15 degrees in radians
        0.0,
        @math.PI * 2.0,
      )
      ctx.fill()
      ctx.restore()
    }
    ctx.restore()
  }
}

///|
pub fn WinPageRender::draw_confetti(
  self : WinPageRender,
  ctx : @Core.CanvasRenderingContext2D,
  timestamp : Double,
) -> Unit {
  ignore(self)
  let canvas_width = @Core.map.width
  let canvas_height = @Core.map.height

  // Create a simple confetti effect
  let time = timestamp / 1000.0
  let confetti_count = 50
  for i = 0; i < confetti_count; i = i + 1 {
    // Animate confetti falling
    let x = (i.to_double() * 37.0 + time * 50.0) % (canvas_width - 10) + 5
    let y = (i.to_double() * 43.0 + time * 100.0) % (canvas_height - 10)
    let rotation = time * 2.0 + i.to_double() * 0.1
    let size = 5.0 + @math.sin(time * 2.0 + i.to_double()) * 2.0
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotation)

    // Different colors for confetti
    let colors = [
      "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    ]
    let color_index = i % colors.length()
    ctx.fillStyle(colors[color_index])

    // Draw rectangle confetti
    ctx.fillRect(-size / 2.0, -size / 2.0, size, size)
    ctx.restore()
  }
}

///|
pub fn WinPageRender::render(self : WinPageRender, timestamp : Double) -> Unit {
  let ctx = @Core.ctxSingleton

  // Track when the page opens
  if @Pages.winPageSingleton.is_open && !self.is_page_open {
    self.page_open_time = timestamp
    self.is_page_open = true
    self.star_animation_progress = 0.0
    self.max_animation_progress = 0.0
  } else if !@Pages.winPageSingleton.is_open {
    self.is_page_open = false
  }
  if @Pages.winPageSingleton.is_open {
    ctx.save()

    // Background with victory theme - golden gradient
    let grd = ctx.createLinearGradient(0, 0, 0, @Core.map.height)
    grd.addColorStop(0, "#FFD700") // Gold
    grd.addColorStop(1, "#FFA500") // Orange
    ctx.fillStyle(grd)
    ctx.fillRect(0, 0, @Core.map.width, @Core.map.height)

    // "VICTORY!" text
    ctx.font("bold 48px Arial")
    ctx.textAlign("center")
    ctx.fillStyle("rgba(255, 215, 0, 1)") // Gold
    ctx.shadowColor("rgba(0, 0, 0, 0.5)")
    ctx.shadowBlur(10)
    ctx.fillText("胜利!", @Core.map.width / 2.0, @Core.map.height / 3.0)
    ctx.shadowBlur(0)

    // Subtitle
    // ctx.font("24px Arial")
    // ctx.fillStyle("rgba(255, 255, 255, 0.9)")
    // ctx.fillText(
    //   "Level Complete!",
    //   @Core.map.width / 2.0,
    //   @Core.map.height / 3.0 + 60,
    // )

    // Draw animated stars based on star_count
    self.draw_stars(ctx, timestamp)

    // Replay button
    let win_page = @Pages.winPageSingleton
    ctx.fillStyle("rgba(255, 215, 0, 0.8)") // Gold
    @UIComposeRender.drawRoundRect(
      ctx,
      win_page.select_level_button_x,
      win_page.select_level_button_y,
      win_page.select_level_button_w,
      win_page.select_level_button_h,
      10,
    )
    ctx.fill()

    // Next level button
    ctx.fillStyle("rgba(60, 179, 113, 0.8)") // Medium sea green
    @UIComposeRender.drawRoundRect(
      ctx,
      win_page.next_level_button_x,
      win_page.next_level_button_y,
      win_page.next_level_button_w,
      win_page.next_level_button_h,
      10,
    )
    ctx.fill()

    // Button text - Replay
    ctx.save()
    ctx.translate(
      win_page.select_level_button_x + win_page.select_level_button_w / 2.0,
      win_page.select_level_button_y + win_page.select_level_button_h / 2.0,
    )
    ctx.fillStyle("#FFF")
    ctx.font("bold 20px Arial")
    ctx.textAlign("center")
    ctx.fillText("选择关卡", 0, 7)
    ctx.restore()

    // Button text - Next Level
    ctx.save()
    ctx.translate(
      win_page.next_level_button_x + win_page.next_level_button_w / 2.0,
      win_page.next_level_button_y + win_page.next_level_button_h / 2.0,
    )
    ctx.fillStyle("#FFF")
    ctx.font("bold 20px Arial")
    ctx.textAlign("center")
    ctx.fillText("下一关", 0, 7)
    ctx.restore()

    // Celebration effect - confetti
    self.draw_confetti(ctx, timestamp)
    ctx.restore()
  }
}
