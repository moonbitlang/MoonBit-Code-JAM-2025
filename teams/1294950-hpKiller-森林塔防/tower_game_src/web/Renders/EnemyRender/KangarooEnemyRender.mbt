///|
pub struct KangarooEnemyRender {}

///|
pub fn KangarooEnemyRender::new() -> KangarooEnemyRender {
  KangarooEnemyRender::{  }
}

///|
let kangarooEnemyRenderInstance : Ref[KangarooEnemyRender?] = Ref::new(None)

///|
pub let kangarooEnemyRenderSingleton : KangarooEnemyRender = KangarooEnemyRender::get_instance()

///|
pub fn KangarooEnemyRender::get_instance() -> KangarooEnemyRender {
  match kangarooEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = KangarooEnemyRender::new()
      kangarooEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn KangarooEnemyRender::render(
  self : KangarooEnemyRender,
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
