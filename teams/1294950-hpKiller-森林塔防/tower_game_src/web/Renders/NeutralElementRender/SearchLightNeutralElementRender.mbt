///|
pub(all) struct SearchLightNeutralElementRender {}

///|
pub fn SearchLightNeutralElementRender::new() -> SearchLightNeutralElementRender {
  SearchLightNeutralElementRender::{  }
}

///|
let searchLightNeutralElementRenderInstance : Ref[
  SearchLightNeutralElementRender?,
] = Ref::new(None)

///|
pub let searchLightNeutralElementRenderSingleton : SearchLightNeutralElementRender = SearchLightNeutralElementRender::get_instance()

///|
pub fn SearchLightNeutralElementRender::get_instance() -> SearchLightNeutralElementRender {
  match searchLightNeutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SearchLightNeutralElementRender::new()
      searchLightNeutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SearchLightNeutralElementRender::render(
  self : SearchLightNeutralElementRender,
  timestamp : Double,
  x : Double,
  y : Double,
  e : &@NeutralElement.NeutralElement,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(timestamp)
  ignore(self)
  ignore(e)
  ignore(show_health_bar)
  let ctx = @Core.ctxSingleton
  ignore(ctx)
  ctx.save()
  ctx.translate(x, y)
  ctx.fillStyle("red")
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
}
