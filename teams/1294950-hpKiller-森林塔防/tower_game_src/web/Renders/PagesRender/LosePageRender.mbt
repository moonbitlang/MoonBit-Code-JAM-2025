///|
pub(all) struct LosePageRender {}

///|
pub fn LosePageRender::new() -> LosePageRender {
  LosePageRender::{  }
}

///|
let losePageRenderInstance : Ref[LosePageRender?] = Ref::new(None)

///|
pub let losePageRenderSingleton : LosePageRender = LosePageRender::get_instance()

///|
pub fn LosePageRender::get_instance() -> LosePageRender {
  match losePageRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = LosePageRender::new()
      losePageRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn LosePageRender::render(
  self : LosePageRender,
  timestamp : Double,
) -> Unit {
  ignore(timestamp)
  ignore(self)
  if @Pages.losePageSingleton.is_open {
    let ctx = @Core.ctxSingleton
    ctx.save()

    // Background with failure theme - dark red gradient
    let grd = ctx.createLinearGradient(0, 0, 0, @Core.map.height)
    grd.addColorStop(0, "#330000")
    grd.addColorStop(1, "#660000")
    ctx.fillStyle(grd)
    ctx.fillRect(0, 0, @Core.map.width, @Core.map.height)

    // "GAME OVER" text
    ctx.font("bold 48px Arial")
    ctx.textAlign("center")
    ctx.fillStyle("rgba(255, 0, 0, 0.8)")
    ctx.fillText("失败", @Core.map.width / 2.0, @Core.map.height / 3.0)

    // Subtitle
    // ctx.font("24px Arial")
    // ctx.fillStyle("rgba(255, 100, 100, 0.7)")
    // ctx.fillText(
    //   "All defenses have fallen",
    //   @Core.map.width / 2.0,
    //   @Core.map.height / 3.0 + 60,
    // )

    // Replay button
    let replay_button = @Pages.losePageSingleton
    ctx.fillStyle("rgba(220, 20, 60, 0.8)") // Crimson red
    @UIComposeRender.drawRoundRect(
      ctx,
      replay_button.replay_button_x,
      replay_button.replay_button_y,
      replay_button.replay_button_w,
      replay_button.replay_button_h,
      10,
    )
    ctx.fill()

    // Return button
    ctx.fillStyle("rgba(169, 169, 169, 0.8)") // Dark gray
    @UIComposeRender.drawRoundRect(
      ctx,
      replay_button.return_button_x,
      replay_button.return_button_y,
      replay_button.return_button_w,
      replay_button.return_button_h,
      10,
    )
    ctx.fill()

    // Button text - Replay
    ctx.save()
    ctx.translate(
      replay_button.replay_button_x + replay_button.replay_button_w / 2.0,
      replay_button.replay_button_y + replay_button.replay_button_h / 2.0,
    )
    ctx.fillStyle("#FFF")
    ctx.font("bold 20px Arial")
    ctx.textAlign("center")
    ctx.fillText("重新开始", 0, 7)
    ctx.restore()

    // Button text - Return
    ctx.save()
    ctx.translate(
      replay_button.return_button_x + replay_button.return_button_w / 2.0,
      replay_button.return_button_y + replay_button.return_button_h / 2.0,
    )
    ctx.fillStyle("#FFF")
    ctx.font("bold 20px Arial")
    ctx.textAlign("center")
    ctx.fillText("前往选关", 0, 7)
    ctx.restore()

    // Cracked glass effect overlay
    ctx.strokeStyle("rgba(255, 0, 0, 0.3)")
    ctx.lineWidth(2)
    ctx.beginPath()
    ctx.moveTo(@Core.map.width * 0.1, @Core.map.height * 0.1)
    ctx.lineTo(@Core.map.width * 0.3, @Core.map.height * 0.4)
    ctx.lineTo(@Core.map.width * 0.2, @Core.map.height * 0.6)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(@Core.map.width * 0.8, @Core.map.height * 0.2)
    ctx.lineTo(@Core.map.width * 0.7, @Core.map.height * 0.5)
    ctx.lineTo(@Core.map.width * 0.9, @Core.map.height * 0.7)
    ctx.stroke()
    ctx.restore()
  }
}
