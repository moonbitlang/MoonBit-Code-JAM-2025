///|
pub(all) struct SlotMachineNeutralElementRender {}

///|
pub fn SlotMachineNeutralElementRender::new() -> SlotMachineNeutralElementRender {
  SlotMachineNeutralElementRender::{  }
}

///|
let slotMachineNeutralElementRenderInstance : Ref[
  SlotMachineNeutralElementRender?,
] = Ref::new(None)

///|
pub let slotMachineNeutralElementRenderSingleton : SlotMachineNeutralElementRender = SlotMachineNeutralElementRender::get_instance()

///|
pub fn SlotMachineNeutralElementRender::get_instance() -> SlotMachineNeutralElementRender {
  match slotMachineNeutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SlotMachineNeutralElementRender::new()
      slotMachineNeutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SlotMachineNeutralElementRender::render(
  self : SlotMachineNeutralElementRender,
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
