///|
pub struct MechaEnemyRender {}

///|
pub fn MechaEnemyRender::new() -> MechaEnemyRender {
  MechaEnemyRender::{  }
}

///|
let mechaEnemyRenderInstance : Ref[MechaEnemyRender?] = Ref::new(None)

///|
pub let mechaEnemyRenderSingleton : MechaEnemyRender = MechaEnemyRender::get_instance()

///|
pub fn MechaEnemyRender::get_instance() -> MechaEnemyRender {
  match mechaEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = MechaEnemyRender::new()
      mechaEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MechaEnemyRender::render(
  self : MechaEnemyRender,
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
