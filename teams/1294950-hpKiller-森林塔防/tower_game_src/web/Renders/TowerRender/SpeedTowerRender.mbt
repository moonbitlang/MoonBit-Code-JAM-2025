///|
pub struct SpeedTowerRender {}

///|
pub fn SpeedTowerRender::new() -> SpeedTowerRender {
  SpeedTowerRender::{  }
}

///|
let speedTowerRenderInstance : Ref[SpeedTowerRender?] = Ref::new(None)

///|
pub let speedTowerRenderSingleton : SpeedTowerRender = SpeedTowerRender::get_instance()

///|
pub fn SpeedTowerRender::get_instance() -> SpeedTowerRender {
  match speedTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SpeedTowerRender::new()
      speedTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SpeedTowerRender::render(
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
