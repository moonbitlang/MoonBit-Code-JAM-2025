///|
pub(all) struct ConveyorBeltNeutralElementRender {}

///|
pub fn ConveyorBeltNeutralElementRender::new() -> ConveyorBeltNeutralElementRender {
  ConveyorBeltNeutralElementRender::{  }
}

///|
let conveyorBeltNeutralElementRenderInstance : Ref[
  ConveyorBeltNeutralElementRender?,
] = Ref::new(None)

///|
pub let conveyorBeltNeutralElementRenderSingleton : ConveyorBeltNeutralElementRender = ConveyorBeltNeutralElementRender::get_instance()

///|
pub fn ConveyorBeltNeutralElementRender::get_instance() -> ConveyorBeltNeutralElementRender {
  match conveyorBeltNeutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = ConveyorBeltNeutralElementRender::new()
      conveyorBeltNeutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ConveyorBeltNeutralElementRender::render(
  self : ConveyorBeltNeutralElementRender,
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
  ctx.fillStyle("red")
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
  if show_health_bar {
    @UIComposeRender.draw_neutral_health_bar(e)
  }
}
