///|
pub struct LightningTowerBulletRender {}

///|
pub fn LightningTowerBulletRender::new() -> LightningTowerBulletRender {
  LightningTowerBulletRender::{  }
}

///|
let lightningTowerBulletRenderInstance : Ref[LightningTowerBulletRender?] = Ref::new(
  None,
)

///|
pub let lightningTowerBulletRenderSingleton : LightningTowerBulletRender = LightningTowerBulletRender::get_instance()

///|
pub fn LightningTowerBulletRender::get_instance() -> LightningTowerBulletRender {
  match lightningTowerBulletRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = LightningTowerBulletRender::new()
      lightningTowerBulletRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn LightningTowerBulletRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  time : Double,
) -> Unit {
  // Lightning Tower bullet rendering - a small yellow lightning bolt
  ctx.save()
  ctx.translate(x, y)

  // Lightning bolt effect
  let t = time / 100.0
  let flicker = if @math.sin(t * 3.0) > 0.5 { 1.0 } else { 0.7 }
  ctx.strokeStyle("#ffff00")
  ctx.lineWidth(2 * flicker)
  ctx.lineCap("round")
  ctx.lineJoin("round")
  ctx.beginPath()
  ctx.moveTo(-3, -4)
  ctx.lineTo(0, 0)
  ctx.lineTo(-2, 2)
  ctx.lineTo(3, -3)
  ctx.stroke()

  // Glow effect
  let glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 6)
  glow.addColorStop(0.0, "rgba(255, 255, 0, 0.5)")
  glow.addColorStop(1.0, "rgba(255, 255, 0, 0)")
  ctx.fillStyle(glow)
  ctx.beginPath()
  ctx.arc(0, 0, 6, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()
}
