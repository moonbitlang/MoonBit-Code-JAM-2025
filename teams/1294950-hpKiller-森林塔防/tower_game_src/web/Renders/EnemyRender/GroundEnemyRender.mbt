///|
pub struct GroundEnemyRender {}

///|
pub fn GroundEnemyRender::new() -> GroundEnemyRender {
  GroundEnemyRender::{  }
}

///|
let groundEnemyRenderInstance : Ref[GroundEnemyRender?] = Ref::new(None)

///|
pub let groundEnemyRenderSingleton : GroundEnemyRender = GroundEnemyRender::get_instance()

///|
pub fn GroundEnemyRender::get_instance() -> GroundEnemyRender {
  match groundEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = GroundEnemyRender::new()
      groundEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn GroundEnemyRender::render(
  self : GroundEnemyRender,
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

  // Main body - green for ground enemies
  ctx.beginPath()
  ctx.fillStyle("darkgreen")
  ctx.arc(x, y, 32, 0, @math.PI * 2) // Larger than others
  ctx.fill()

  // Ground track marks
  ctx.beginPath()
  ctx.strokeStyle("brown")
  ctx.lineWidth(3)
  // Left track
  ctx.moveTo(x - 20, y + 25)
  ctx.lineTo(x - 20, y + 35)
  ctx.moveTo(x - 15, y + 25)
  ctx.lineTo(x - 15, y + 35)
  // Right track
  ctx.moveTo(x + 15, y + 25)
  ctx.lineTo(x + 15, y + 35)
  ctx.moveTo(x + 20, y + 25)
  ctx.lineTo(x + 20, y + 35)
  ctx.stroke()

  // Armor plating effect
  ctx.beginPath()
  ctx.strokeStyle("lightgreen")
  ctx.lineWidth(2)
  ctx.arc(x, y, 20, 0, @math.PI * 2)
  ctx.stroke()

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

///|
#deprecated("use render")
pub fn GroundEnemyRender::_render_old(
  self : GroundEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
) -> Unit {
  ignore(self)
  ctx.save()
  let x = e.position().x
  let y = e.position().y
  let scale = 1.0
  ctx.scale(scale, scale)

  // Main body - green for ground enemies
  ctx.beginPath()
  ctx.fillStyle("darkgreen")
  ctx.arc(x, y, 32, 0, @math.PI * 2) // Larger than others
  ctx.fill()

  // Ground track marks
  ctx.beginPath()
  ctx.strokeStyle("brown")
  ctx.lineWidth(3)
  // Left track
  ctx.moveTo(x - 20, y + 25)
  ctx.lineTo(x - 20, y + 35)
  ctx.moveTo(x - 15, y + 25)
  ctx.lineTo(x - 15, y + 35)
  // Right track
  ctx.moveTo(x + 15, y + 25)
  ctx.lineTo(x + 15, y + 35)
  ctx.moveTo(x + 20, y + 25)
  ctx.lineTo(x + 20, y + 35)
  ctx.stroke()

  // Armor plating effect
  ctx.beginPath()
  ctx.strokeStyle("lightgreen")
  ctx.lineWidth(2)
  ctx.arc(x, y, 20, 0, @math.PI * 2)
  ctx.stroke()

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
