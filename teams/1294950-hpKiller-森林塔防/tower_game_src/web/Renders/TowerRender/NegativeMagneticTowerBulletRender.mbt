///|
pub struct NegativeMagneticTowerBulletRender {}

///|
pub fn NegativeMagneticTowerBulletRender::new() -> NegativeMagneticTowerBulletRender {
  NegativeMagneticTowerBulletRender::{  }
}

///|
let negativeMagneticTowerBulletRenderInstance : Ref[
  NegativeMagneticTowerBulletRender?,
] = Ref::new(None)

///|
pub let negativeMagneticTowerBulletRenderSingleton : NegativeMagneticTowerBulletRender = NegativeMagneticTowerBulletRender::get_instance()

///|
pub fn NegativeMagneticTowerBulletRender::get_instance() -> NegativeMagneticTowerBulletRender {
  match negativeMagneticTowerBulletRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = NegativeMagneticTowerBulletRender::new()
      negativeMagneticTowerBulletRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn NegativeMagneticTowerBulletRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  time : Double,
) -> Unit {
  // Negative Magnetic Tower bullet rendering - a small blue circle with magnetic field lines
  ctx.save()
  ctx.translate(x, y)

  // Bullet body
  ctx.fillStyle("#0000ff")
  ctx.beginPath()
  ctx.arc(0, 0, 3, 0, @math.PI * 2)
  ctx.fill()

  // Highlight
  ctx.fillStyle("rgba(255, 255, 255, 0.6)")
  ctx.beginPath()
  ctx.arc(1, -1, 1, 0, @math.PI * 2)
  ctx.fill()

  // Magnetic field lines
  let t = time / 200.0
  ctx.strokeStyle("rgba(0, 0, 255, 0.3)")
  ctx.lineWidth(1)

  // Inner field line
  ctx.beginPath()
  ctx.ellipse(0, 0, 6, 6, t, 0, @math.PI * 2)
  ctx.stroke()

  // Outer field line
  ctx.beginPath()
  ctx.ellipse(0, 0, 9, 9, -t, 0, @math.PI * 2)
  ctx.stroke()
  ctx.restore()
}
