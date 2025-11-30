///|
pub struct FlyingEnemyRender {}

///|
pub fn FlyingEnemyRender::new() -> FlyingEnemyRender {
  FlyingEnemyRender::{  }
}

///|
let flyingEnemyRenderInstance : Ref[FlyingEnemyRender?] = Ref::new(None)

///|
pub let flyingEnemyRenderSingleton : FlyingEnemyRender = FlyingEnemyRender::get_instance()

///|
pub fn FlyingEnemyRender::get_instance() -> FlyingEnemyRender {
  match flyingEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = FlyingEnemyRender::new()
      flyingEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn FlyingEnemyRender::render(
  self : FlyingEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
  timestamp : Double,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(self)
  ignore(timestamp)
  ignore(show_health_bar)
  ctx.save()
  let x = e.position().x
  let y = e.position().y
  let scale = 1.0
  ctx.scale(scale, scale)

  // Main body - blue for flying enemies
  ctx.beginPath()
  ctx.fillStyle("blue")
  ctx.arc(x, y, 28, 0, @math.PI * 2)
  ctx.fill()

  // Wings - simple triangular shapes
  ctx.beginPath()
  ctx.fillStyle("lightblue")
  // Left wing
  ctx.moveTo(x - 35, y)
  ctx.lineTo(x - 15, y - 10)
  ctx.lineTo(x - 15, y + 10)
  ctx.closePath()
  ctx.fill()

  // Right wing
  ctx.beginPath()
  ctx.moveTo(x + 35, y)
  ctx.lineTo(x + 15, y - 10)
  ctx.lineTo(x + 15, y + 10)
  ctx.closePath()
  ctx.fill()

  // Health bar
  let w = gs * 0.78
  let h = 4.0
  let bx = x - w / 2
  let by = y - gs / 2 - 9

  // Background health bar
  ctx.save()
  ctx.strokeStyle("rgba(0,0,0,0.35)")
  ctx.beginPath()
  ctx.moveTo(bx, by)
  ctx.lineTo(bx + w, by)
  ctx.lineWidth(h)
  ctx.stroke()
  ctx.restore()

  // Health indicator
  ctx.save()
  ctx.strokeStyle("rgb(66, 158, 5)")
  ctx.beginPath()
  ctx.moveTo(bx + 2, by)
  ctx.lineTo(bx + w * e.health() / e.max_health() - 2, by)
  ctx.lineWidth(h - 2)
  ctx.stroke()
  ctx.restore()
  ctx.restore()
}
