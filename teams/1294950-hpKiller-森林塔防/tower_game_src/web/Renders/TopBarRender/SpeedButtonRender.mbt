///|
pub(all) struct SpeedButtonRender {}

///|
pub fn SpeedButtonRender::new() -> SpeedButtonRender {
  SpeedButtonRender::{  }
}

///|
let speedButtonRenderInstance : Ref[SpeedButtonRender?] = Ref::new(None)

///|
pub let speedButtonRenderSingleton : SpeedButtonRender = SpeedButtonRender::get_instance()

///|
pub fn SpeedButtonRender::get_instance() -> SpeedButtonRender {
  match speedButtonRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SpeedButtonRender::new()
      speedButtonRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SpeedButtonRender::render(_self : SpeedButtonRender) -> Unit {
  let ctx = @Core.ctxSingleton
  let speed_button = @TopBar.speedButtonSingleton
  ctx.save()
  ctx.shadowColor("rgba(0,0,0,0.35)")
  ctx.shadowBlur(6)
  if speed_button.start_speed_mode {
    ctx.fillStyle("#81C784")
  } else {
    ctx.fillStyle("rgba(0,0,0,0.65)")
  }
  @UIComposeRender.drawRoundRect(
    ctx,
    speed_button.x,
    speed_button.y,
    speed_button.w,
    speed_button.h,
    12,
  )
  ctx.fill()
  ctx.shadowColor("transparent")
  ctx.strokeStyle("rgba(255,255,255,0.25)")
  ctx.stroke()
  ctx.fillStyle("#fff")
  ctx.font("bold 14px Arial")
  ctx.textAlign("center")
  ctx.textBaseline("middle")
  ctx.fillText(
    "X2",
    speed_button.x + speed_button.w / 2,
    speed_button.y + speed_button.h / 2,
  )
  ctx.restore()
}
