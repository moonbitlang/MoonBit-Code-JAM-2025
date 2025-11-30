///|
pub struct ChainTowerRender {}

///|
pub fn ChainTowerRender::new() -> ChainTowerRender {
  ChainTowerRender::{  }
}

///|
let chainTowerRenderInstance : Ref[ChainTowerRender?] = Ref::new(None)

///|
pub let chainTowerRenderSingleton : ChainTowerRender = ChainTowerRender::get_instance()

///|
pub fn ChainTowerRender::get_instance() -> ChainTowerRender {
  match chainTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = ChainTowerRender::new()
      chainTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ChainTowerRender::render(
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
