///|
pub struct EggsEnemyRender {}

///|
pub fn EggsEnemyRender::new() -> EggsEnemyRender {
  EggsEnemyRender::{  }
}

///|
let eggsEnemyRenderInstance : Ref[EggsEnemyRender?] = Ref::new(None)

///|
pub let eggsEnemyRenderSingleton : EggsEnemyRender = EggsEnemyRender::get_instance()

///|
pub fn EggsEnemyRender::get_instance() -> EggsEnemyRender {
  match eggsEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = EggsEnemyRender::new()
      eggsEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn EggsEnemyRender::render(
  self : EggsEnemyRender,
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
