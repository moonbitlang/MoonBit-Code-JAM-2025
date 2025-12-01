///|
pub struct PlasmaTowerBulletRender {}

///|
pub fn PlasmaTowerBulletRender::new() -> PlasmaTowerBulletRender {
  PlasmaTowerBulletRender::{  }
}

///|
let plasmaTowerBulletRenderInstance : Ref[PlasmaTowerBulletRender?] = Ref::new(
  None,
)

///|
pub let plasmaTowerBulletRenderSingleton : PlasmaTowerBulletRender = PlasmaTowerBulletRender::get_instance()

///|
pub fn PlasmaTowerBulletRender::get_instance() -> PlasmaTowerBulletRender {
  match plasmaTowerBulletRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = PlasmaTowerBulletRender::new()
      plasmaTowerBulletRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PlasmaTowerBulletRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  time : Double,
) -> Unit {
  // Plasma Tower bullet rendering - a small orange/purple glowing orb
  ctx.save()
  ctx.translate(x, y)

  // Pulsing glow effect
  let t = time / 500.0
  let pulse = 1.0 + @math.sin(t) * 0.3

  // Outer glow
  let glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 8 * pulse)
  glow.addColorStop(0.0, "rgba(255, 128, 0, 0.6)")
  glow.addColorStop(0.4, "rgba(255, 128, 0, 0.3)")
  glow.addColorStop(1.0, "rgba(128, 0, 255, 0)")
  ctx.fillStyle(glow)
  ctx.beginPath()
  ctx.arc(0, 0, 8 * pulse, 0, @math.PI * 2)
  ctx.fill()

  // Inner core
  ctx.fillStyle("#ff8000")
  ctx.beginPath()
  ctx.arc(0, 0, 3, 0, @math.PI * 2)
  ctx.fill()

  // Core highlight
  ctx.fillStyle("rgba(255, 255, 255, 0.8)")
  ctx.beginPath()
  ctx.arc(1, -1, 1, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()
}
