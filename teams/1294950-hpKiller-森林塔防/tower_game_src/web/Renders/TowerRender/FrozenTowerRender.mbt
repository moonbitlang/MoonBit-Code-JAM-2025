///|
pub struct FrozenTowerRender {}

///|
pub fn FrozenTowerRender::new() -> FrozenTowerRender {
  FrozenTowerRender::{  }
}

///|
let frozenTowerRenderInstance : Ref[FrozenTowerRender?] = Ref::new(None)

///|
pub let frozenTowerRenderSingleton : FrozenTowerRender = FrozenTowerRender::get_instance()

///|
pub fn FrozenTowerRender::get_instance() -> FrozenTowerRender {
  match frozenTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = FrozenTowerRender::new()
      frozenTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn FrozenTowerRender::render(
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
