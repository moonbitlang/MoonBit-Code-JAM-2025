///|
pub struct DecayTowerRender {}

///|
pub fn DecayTowerRender::new() -> DecayTowerRender {
  DecayTowerRender::{  }
}

///|
let decayTowerRenderInstance : Ref[DecayTowerRender?] = Ref::new(None)

///|
pub let decayTowerRenderSingleton : DecayTowerRender = DecayTowerRender::get_instance()

///|
pub fn DecayTowerRender::get_instance() -> DecayTowerRender {
  match decayTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = DecayTowerRender::new()
      decayTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn DecayTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  ignore(aimDeg)
  ignore(ctx)
  ignore(x)
  ignore(y)
  ignore(level)
  ignore(gs)
  ignore(time)
  ctx.save()
  ctx.fillStyle("red")
  ctx.arc(x, y, 0, 0, @math.PI * 2)
  ctx.restore()
}
