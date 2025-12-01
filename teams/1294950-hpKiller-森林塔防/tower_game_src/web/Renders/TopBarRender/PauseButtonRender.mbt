///|
pub(all) struct PauseButtonRender {}

///|
pub fn PauseButtonRender::new() -> PauseButtonRender {
  PauseButtonRender::{  }
}

///|
let pauseButtonRenderInstance : Ref[PauseButtonRender?] = Ref::new(None)

///|
pub let pauseButtonRenderSingleton : PauseButtonRender = PauseButtonRender::get_instance()

///|
pub fn PauseButtonRender::get_instance() -> PauseButtonRender {
  match pauseButtonRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = PauseButtonRender::new()
      pauseButtonRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PauseButtonRender::render(self : PauseButtonRender, dt : Double) -> Unit {
  ignore(dt)
  ignore(self)
  // the pause 
  let ctx = @Core.ctxSingleton
  ctx.save()
  let pause_button = @TopBar.pauseButtonSingleton
  ctx.fillStyle("rgba(0,0,0,0.65)")
  @UIComposeRender.drawRoundRect(
    ctx,
    pause_button.x,
    pause_button.y,
    pause_button.w,
    pause_button.h,
    10,
  )
  ctx.fill()
  ctx.translate(
    pause_button.x + pause_button.w / 2,
    pause_button.y + pause_button.h / 2,
  )
  ctx.fillStyle("#FFF")
  if @TopBar.pauseButtonSingleton.is_pause {
    let barW = 4.0
    let barH = 12.0
    let gap = 5.0
    ctx.fillRect(-gap - barW, -barH / 2, barW, barH)
    ctx.fillRect(gap, -barH / 2, barW, barH)
  } else {
    // “||” 暂停图标
    // “▶” 继续图标
    ctx.beginPath()
    ctx.moveTo(-6, -8)
    ctx.lineTo(8, 0)
    ctx.lineTo(-6, 8)
    ctx.closePath()
    ctx.fill()
  }
  ctx.restore()
}
