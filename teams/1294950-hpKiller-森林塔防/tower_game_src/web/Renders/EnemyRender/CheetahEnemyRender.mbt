///|
pub struct CheetahEnemyRender {}

///|
pub fn CheetahEnemyRender::new() -> CheetahEnemyRender {
  CheetahEnemyRender::{  }
}

///|
let cheetahEnemyRenderInstance : Ref[CheetahEnemyRender?] = Ref::new(None)

///|
pub let cheetahEnemyRenderSingleton : CheetahEnemyRender = CheetahEnemyRender::get_instance()

///|
pub fn CheetahEnemyRender::get_instance() -> CheetahEnemyRender {
  match cheetahEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = CheetahEnemyRender::new()
      cheetahEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn CheetahEnemyRender::render(
  self : CheetahEnemyRender,
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
  ctx.restore()
  ctx.save()
  if show_health_bar {
    @UIComposeRender.draw_enemy_health_bar(e)
  }
  ctx.restore()
}
