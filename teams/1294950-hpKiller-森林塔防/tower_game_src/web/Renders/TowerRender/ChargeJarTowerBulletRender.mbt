///|
pub struct ChargeJarTowerBulletRender {}

///|
pub fn ChargeJarTowerBulletRender::new() -> ChargeJarTowerBulletRender {
  ChargeJarTowerBulletRender::{  }
}

///|
let chargeJarTowerBulletRenderInstance : Ref[ChargeJarTowerBulletRender?] = Ref::new(
  None,
)

///|
pub let chargeJarTowerBulletRenderSingleton : ChargeJarTowerBulletRender = ChargeJarTowerBulletRender::get_instance()

///|
pub fn ChargeJarTowerBulletRender::get_instance() -> ChargeJarTowerBulletRender {
  match chargeJarTowerBulletRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = ChargeJarTowerBulletRender::new()
      chargeJarTowerBulletRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ChargeJarTowerBulletRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  time : Double,
) -> Unit {
  // Charge Jar bullet rendering - a small blue circle with electric effect
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

  // Electric spark effect
  let t = time / 100.0
  if @math.sin(t) > 0.8 {
    ctx.strokeStyle("#00ffff")
    ctx.lineWidth(1)
    ctx.beginPath()
    ctx.moveTo(-2, -2)
    ctx.lineTo(2, 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-2, 2)
    ctx.lineTo(2, -2)
    ctx.stroke()
  }
  ctx.restore()
}
