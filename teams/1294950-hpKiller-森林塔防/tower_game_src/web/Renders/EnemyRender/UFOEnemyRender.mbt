///|
pub struct UFOEnemyRender {}

///|
pub fn UFOEnemyRender::new() -> UFOEnemyRender {
  UFOEnemyRender::{  }
}

///|
let uFOEnemyRenderInstance : Ref[UFOEnemyRender?] = Ref::new(None)

///|
pub let uFOEnemyRenderSingleton : UFOEnemyRender = UFOEnemyRender::get_instance()

///|
pub fn UFOEnemyRender::get_instance() -> UFOEnemyRender {
  match uFOEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = UFOEnemyRender::new()
      uFOEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn UFOEnemyRender::render(
  self : UFOEnemyRender,
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
