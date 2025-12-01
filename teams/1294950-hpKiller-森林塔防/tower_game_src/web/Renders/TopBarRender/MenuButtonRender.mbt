///|
pub(all) struct MenuButtonRender {}

///|
pub fn MenuButtonRender::new() -> MenuButtonRender {
  MenuButtonRender::{  }
}

///|
let menuButtonRenderInstance : Ref[MenuButtonRender?] = Ref::new(None)

///|
pub let menuButtonRenderSingleton : MenuButtonRender = MenuButtonRender::get_instance()

///|
pub fn MenuButtonRender::get_instance() -> MenuButtonRender {
  match menuButtonRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = MenuButtonRender::new()
      menuButtonRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MenuButtonRender::render(
  self : MenuButtonRender,
  timestamp : Double,
) -> Unit {
  ignore(timestamp)
  ignore(self)
  let ctx = @Core.ctxSingleton
  ignore(ctx)
  ctx.save()
  ctx.fillStyle("rgba(0,0,0,0.65)")
  let x = @TopBar.menuButtonSingleton.x
  let w = @TopBar.menuButtonSingleton.w
  let y = @TopBar.menuButtonSingleton.y
  let h = @TopBar.menuButtonSingleton.h
  @UIComposeRender.drawRoundRect(ctx, x, y, w, h, 10)
  ctx.fill()
  self.drawGear(ctx, x + w / 2, y + h / 2, 9)
  ctx.restore()
}

///|
pub fn MenuButtonRender::drawGear(
  self : MenuButtonRender,
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  r : Double,
) -> Unit {
  ignore(self)
  ctx.save()
  ctx.translate(cx, cy)
  ctx.fillStyle("#FFC107")
  ctx.beginPath()
  for i in 0..<8 {
    let a = i.to_double() * @math.PI / 4
    let x = @math.cos(a) * (r + 3)
    let y = @math.sin(a) * (r + 3)
    ctx.rect(x - 2, y - 2, 4, 4)
  }
  ctx.fill()
  ctx.beginPath()
  ctx.arc(0, 0, r, 0, @math.PI * 2)
  ctx.fill()
  ctx.fillStyle("#FFF")
  ctx.beginPath()
  ctx.arc(0, 0, r * 0.35, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()
}
