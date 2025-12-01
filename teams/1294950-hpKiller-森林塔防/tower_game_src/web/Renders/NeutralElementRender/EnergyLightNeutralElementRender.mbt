///|
pub(all) struct EnergyLightNeutralElementRender {}

///|
pub fn EnergyLightNeutralElementRender::new() -> EnergyLightNeutralElementRender {
  EnergyLightNeutralElementRender::{  }
}

///|
let energyLightNeutralElementRenderInstance : Ref[
  EnergyLightNeutralElementRender?,
] = Ref::new(None)

///|
pub let energyLightNeutralElementRenderSingleton : EnergyLightNeutralElementRender = EnergyLightNeutralElementRender::get_instance()

///|
pub fn EnergyLightNeutralElementRender::get_instance() -> EnergyLightNeutralElementRender {
  match energyLightNeutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = EnergyLightNeutralElementRender::new()
      energyLightNeutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn EnergyLightNeutralElementRender::render(
  self : EnergyLightNeutralElementRender,
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
