///|
pub struct PositiveMagneticTowerBulletRender {}

///|
pub fn PositiveMagneticTowerBulletRender::new() -> PositiveMagneticTowerBulletRender {
  PositiveMagneticTowerBulletRender::{  }
}

///|
let positiveMagneticTowerBulletRenderInstance : Ref[
  PositiveMagneticTowerBulletRender?,
] = Ref::new(None)

///|
pub let positiveMagneticTowerBulletRenderSingleton : PositiveMagneticTowerBulletRender = PositiveMagneticTowerBulletRender::get_instance()

///|
pub fn PositiveMagneticTowerBulletRender::get_instance() -> PositiveMagneticTowerBulletRender {
  match positiveMagneticTowerBulletRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = PositiveMagneticTowerBulletRender::new()
      positiveMagneticTowerBulletRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PositiveMagneticTowerBulletRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  time : Double,
) -> Unit {
  // Positive Magnetic Tower bullet rendering - a small red circle with magnetic field lines
  ctx.save()
  ctx.translate(x, y)

  // Bullet body
  ctx.fillStyle("#ff0000")
  ctx.beginPath()
  ctx.arc(0, 0, 3, 0, @math.PI * 2)
  ctx.fill()

  // Highlight
  ctx.fillStyle("rgba(255, 255, 255, 0.6)")
  ctx.beginPath()
  ctx.arc(1, -1, 1, 0, @math.PI * 2)
  ctx.fill()

  // Magnetic field lines (opposite direction to negative)
  let t = time / 200.0
  ctx.strokeStyle("rgba(255, 0, 0, 0.3)")
  ctx.lineWidth(1)

  // Inner field line
  ctx.beginPath()
  ctx.ellipse(0, 0, 6, 6, -t, 0, @math.PI * 2)
  ctx.stroke()

  // Outer field line
  ctx.beginPath()
  ctx.ellipse(0, 0, 9, 9, t, 0, @math.PI * 2)
  ctx.stroke()
  ctx.restore()
}
