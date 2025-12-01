///|
pub struct TurtleEnemyRender {}

///|
pub fn TurtleEnemyRender::new() -> TurtleEnemyRender {
  TurtleEnemyRender::{  }
}

///|
let turtleEnemyRenderInstance : Ref[TurtleEnemyRender?] = Ref::new(None)

///|
pub let turtleEnemyRenderSingleton : TurtleEnemyRender = TurtleEnemyRender::get_instance()

///|
pub fn TurtleEnemyRender::get_instance() -> TurtleEnemyRender {
  match turtleEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = TurtleEnemyRender::new()
      turtleEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn TurtleEnemyRender::render(
  self : TurtleEnemyRender,
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
