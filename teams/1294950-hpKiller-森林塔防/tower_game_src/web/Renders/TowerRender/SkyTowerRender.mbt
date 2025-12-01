///|
pub struct SkyTowerRender {}

///|
pub fn SkyTowerRender::new() -> SkyTowerRender {
  SkyTowerRender::{  }
}

///|
let skyTowerRenderInstance : Ref[SkyTowerRender?] = Ref::new(None)

///|
pub let skyTowerRenderSingleton : SkyTowerRender = SkyTowerRender::get_instance()

///|
pub fn SkyTowerRender::get_instance() -> SkyTowerRender {
  match skyTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SkyTowerRender::new()
      skyTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SkyTowerRender::render(
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
