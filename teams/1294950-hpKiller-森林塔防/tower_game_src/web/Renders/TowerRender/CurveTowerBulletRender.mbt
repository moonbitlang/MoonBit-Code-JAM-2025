///|
pub struct CurveTowerBulletRender {}

///|
pub fn CurveTowerBulletRender::new() -> CurveTowerBulletRender {
  CurveTowerBulletRender::{  }
}

///|
let curveTowerBulletRenderInstance : Ref[CurveTowerBulletRender?] = Ref::new(
  None,
)

///|
pub let curveTowerBulletRenderSingleton : CurveTowerBulletRender = CurveTowerBulletRender::get_instance()

///|
pub fn CurveTowerBulletRender::get_instance() -> CurveTowerBulletRender {
  match curveTowerBulletRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = CurveTowerBulletRender::new()
      curveTowerBulletRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn CurveTowerBulletRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  time : Double,
) -> Unit {
  // Curve Tower bullet rendering - a small green circle with wavy trail
  ctx.save()
  ctx.translate(x, y)

  // Bullet body
  ctx.fillStyle("#00ff00")
  ctx.beginPath()
  ctx.arc(0, 0, 3, 0, @math.PI * 2)
  ctx.fill()

  // Highlight
  ctx.fillStyle("rgba(255, 255, 255, 0.6)")
  ctx.beginPath()
  ctx.arc(1, -1, 1, 0, @math.PI * 2)
  ctx.fill()

  // Wavy trail effect
  let t = time / 200.0
  ctx.strokeStyle("rgba(0, 255, 0, 0.3)")
  ctx.lineWidth(1)
  ctx.beginPath()
  ctx.moveTo(-8, @math.sin(t) * 2)
  ctx.lineTo(-2, 0)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(-8, @math.cos(t) * 2)
  ctx.lineTo(-2, 0)
  ctx.stroke()
  ctx.restore()
}
