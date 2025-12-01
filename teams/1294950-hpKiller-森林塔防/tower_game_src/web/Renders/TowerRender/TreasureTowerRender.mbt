///|
pub struct TreasureTowerRender {}

///|
pub fn TreasureTowerRender::new() -> TreasureTowerRender {
  TreasureTowerRender::{  }
}

///|
let treasureTowerRenderInstance : Ref[TreasureTowerRender?] = Ref::new(None)

///|
pub let treasureTowerRenderSingleton : TreasureTowerRender = TreasureTowerRender::get_instance()

///|
pub fn TreasureTowerRender::get_instance() -> TreasureTowerRender {
  match treasureTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = TreasureTowerRender::new()
      treasureTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn TreasureTowerRender::render(
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
