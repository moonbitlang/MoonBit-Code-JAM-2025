///|
pub struct BearEnemyRender {}

///|
pub fn BearEnemyRender::new() -> BearEnemyRender {
  BearEnemyRender::{  }
}

///|
let bearEnemyRenderInstance : Ref[BearEnemyRender?] = Ref::new(None)

///|
pub let bearEnemyRenderSingleton : BearEnemyRender = BearEnemyRender::get_instance()

///|
pub fn BearEnemyRender::get_instance() -> BearEnemyRender {
  match bearEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = BearEnemyRender::new()
      bearEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn BearEnemyRender::render(
  self : BearEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
  timestamp : Double,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(self)
  ignore(ctx)
  ignore(e)
  ignore(gs)
  ignore(timestamp)
  ignore(show_health_bar)
  ctx.save()
  ctx.fillStyle("red")
  ctx.fillRect(e.position().x, e.position().y, 50, 50)
  // ctx.fill()
  ctx.restore()
  if show_health_bar {
    @UIComposeRender.draw_enemy_health_bar(e)
  }
}
