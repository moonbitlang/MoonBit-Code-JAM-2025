///|
pub(all) struct WeedNeutralElementRender {}

///|
pub fn WeedNeutralElementRender::new() -> WeedNeutralElementRender {
  WeedNeutralElementRender::{  }
}

///|
let weedNeutralElementRenderInstance : Ref[WeedNeutralElementRender?] = Ref::new(
  None,
)

///|
pub let weedNeutralElementRenderSingleton : WeedNeutralElementRender = WeedNeutralElementRender::get_instance()

///|
pub fn WeedNeutralElementRender::get_instance() -> WeedNeutralElementRender {
  match weedNeutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = WeedNeutralElementRender::new()
      weedNeutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn WeedNeutralElementRender::render(
  self : WeedNeutralElementRender,
  timestamp : Double,
  x : Double,
  y : Double,
  e : &@NeutralElement.NeutralElement,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(timestamp)
  ignore(self)
  let ctx = @Core.ctxSingleton
  ignore(ctx)
  ctx.save()
  ctx.translate(x, y)
  ctx.fillStyle("green")
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
  if show_health_bar {
    @UIComposeRender.draw_neutral_health_bar(e)
  }
}
