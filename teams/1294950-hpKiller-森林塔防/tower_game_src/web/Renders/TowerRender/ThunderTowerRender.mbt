///|
pub struct ThunderTowerRender {}

///|
pub fn ThunderTowerRender::new() -> ThunderTowerRender {
  ThunderTowerRender::{  }
}

///|
let thunderTowerRenderInstance : Ref[ThunderTowerRender?] = Ref::new(None)

///|
pub let thunderTowerRenderSingleton : ThunderTowerRender = ThunderTowerRender::get_instance()

///|
pub fn ThunderTowerRender::get_instance() -> ThunderTowerRender {
  match thunderTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = ThunderTowerRender::new()
      thunderTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ThunderTowerRender::render(
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
