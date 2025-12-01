///|
pub struct LaserTowerRender {}

///|
pub fn LaserTowerRender::new() -> LaserTowerRender {
  LaserTowerRender::{  }
}

///|
let laserTowerRenderInstance : Ref[LaserTowerRender?] = Ref::new(None)

///|
pub let laserTowerRenderSingleton : LaserTowerRender = LaserTowerRender::get_instance()

///|
pub fn LaserTowerRender::get_instance() -> LaserTowerRender {
  match laserTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = LaserTowerRender::new()
      laserTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn LaserTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {

  // println(x)
  ignore(aimDeg)
  ctx.save()
  laserTowerRenderSingleton.render_tower(ctx, x, y, level, gs, time, aimDeg~)
  ctx.restore()
  ctx.save()
  laserTowerRenderSingleton.render_bullet(ctx, x, y, level, gs, time, aimDeg~)
  ctx.restore()
}

///|
fn LaserTowerRender::render_tower(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  ignore(self)

  // ===== 配色（集中管理） =====
  let colors = {
    "plateDark": "#4a4a4a",
    "plateLight": "#666666",
    "plateStroke": "#333333",
    "towerMain": "#00aaff",
    "towerShade": "#0077cc",
    "laserCore": "#ff0000",
    "laserGlow": "#ff6666",
    "highlight": "#ffffff",
    "nozzle": "#222222",
  }

  // ===== 小工具 =====
  let rad = (d : Double) => d * @math.PI / 180
  let clamp = (v : Double, lo : Double, hi : Double) => @cmp.maximum(
    lo,
    @cmp.minimum(hi, v),
  )

  // === 计算不会越界的底座半径 ===
  let half = gs * 0.5
  let margin = @cmp.maximum(1.0, gs * 0.02)
  let safe_FACTOR = 1.13
  let baseR = (half - margin) / safe_FACTOR

  // === 机身缩放：按"单元格可用半径"限制 ===
  let max_LOGICAL_R = 100.0
  let cellScale = (half - margin) / max_LOGICAL_R
  // 等级缩放：L1=0.86, L2=0.89, L3=0.92
  let lvlScale = clamp(0.86 + 0.03 * (level - 1.0), 0.86, 0.92)
  let bodyScale = cellScale * lvlScale

  // === 地面柔影（固定在世界坐标，不随旋转） ===
  self.drawGroundShadow(ctx, x, y, baseR)

  // === 圆盘（四耳 + 渐变 + 高光 + 描边） ===
  self.drawPlate(ctx, x, y, baseR, colors)

  // === 炮体：进入"旋转坐标系"，并让【底部】对准 aimDeg ===
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rad(aimDeg - 90.0))
  ctx.scale(bodyScale, bodyScale)
  laserTowerRenderSingleton.drawTowerBody(ctx, colors)
  laserTowerRenderSingleton.drawLaserCore(ctx, colors, time)
  laserTowerRenderSingleton.drawNozzle(ctx, colors)
  laserTowerRenderSingleton.drawSideHighlight(ctx)
  ctx.restore()
}

///|
fn LaserTowerRender::render_bullet(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  ignore(self)
  ignore(gs)
  ignore(time)
  ignore(aimDeg)
  ignore(level)
  // Draw laser beam if there are active bullets
  for bullet in @Tower.laser_tower_bullets.val {
    if bullet.alive {
      ctx.strokeStyle("yellow")
      ctx.lineWidth(2)
      ctx.beginPath()
      ctx.moveTo(x, y)
      // Calculate end point based on bullet direction and a fixed length
      let length = bullet.range
      let end_x = bullet.position.x + bullet.direction.x * length
      let end_y = bullet.position.y + bullet.direction.y * length
      ctx.lineTo(end_x, end_y)
      ctx.stroke()
    }
  }
}

///|
fn LaserTowerRender::drawGroundShadow(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  baseR : Double,
) -> Unit {
  ignore(self)
  ctx.save()
  ctx.globalAlpha(0.20)
  ctx.fillStyle("#000")
  ctx.beginPath()
  ctx.ellipse(
    cx,
    cy + baseR * 0.28,
    baseR * 0.58,
    baseR * 0.18,
    0.0,
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()
}

///|
fn LaserTowerRender::drawPlate(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  r : Double,
  colors : Map[String, String],
) -> Unit {
  ignore(self)
  ctx.save()

  // 四个"圆耳"
  ctx.fillStyle(colors["plateDark"])
  let earR = r * 0.22
  let angles = [0.0, @math.PI / 2.0, @math.PI, @math.PI * 1.5]
  for a in angles {
    let ex = cx + @math.cos(a) * (r - earR * 0.55)
    let ey = cy + @math.sin(a) * (r - earR * 0.55)
    ctx.beginPath()
    ctx.arc(ex, ey, earR, 0.0, @math.PI * 2.0)
    ctx.fill()
  }

  // 主圆盘（径向渐变）
  let g = ctx.createRadialGradient(
    cx - r * 0.25,
    cy - r * 0.25,
    r * 0.2,
    cx,
    cy,
    r,
  )
  g.addColorStop(0.0, colors["plateLight"])
  g.addColorStop(1.0, colors["plateDark"])
  ctx.fillStyle(g)
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0.0, @math.PI * 2.0)
  ctx.fill()

  // 外圈描边
  ctx.strokeStyle(colors["plateStroke"])
  let lineWidth = @cmp.maximum(2.0, r * 0.06)
  ctx.lineWidth(lineWidth)
  ctx.beginPath()
  ctx.arc(cx, cy, r - lineWidth / 2.0, 0.0, @math.PI * 2.0)
  ctx.stroke()

  // 内部高光环
  let rg = ctx.createRadialGradient(cx, cy, r * 0.25, cx, cy, r * 0.9)
  rg.addColorStop(0.0, "rgba(255,255,255,.65)")
  rg.addColorStop(1.0, "rgba(255,255,255,0)")
  ctx.fillStyle(rg)
  ctx.beginPath()
  ctx.arc(cx, cy, r * 0.86, 0.0, @math.PI * 2.0)
  ctx.fill()
  ctx.restore()
}

///|
fn LaserTowerRender::drawTowerBody(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
  colors : Map[String, String],
) -> Unit {
  ignore(self)
  let bodyGrad = ctx.createLinearGradient(-30.0, -60.0, 30.0, 40.0)
  bodyGrad.addColorStop(0.0, colors["towerShade"])
  bodyGrad.addColorStop(0.45, colors["towerMain"])
  bodyGrad.addColorStop(1.0, "#00ccff")
  ctx.fillStyle(bodyGrad)
  ctx.beginPath()
  ctx.moveTo(0.0, -50.0)
  ctx.quadraticCurveTo(30.0, -30.0, 25.0, 0.0)
  ctx.quadraticCurveTo(22.0, 20.0, 0.0, 35.0)
  ctx.quadraticCurveTo(-22.0, 20.0, -25.0, 0.0)
  ctx.quadraticCurveTo(-30.0, -30.0, 0.0, -50.0)
  ctx.closePath()
  ctx.fill()
}

///|
fn LaserTowerRender::drawLaserCore(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
  colors : Map[String, String],
  time : Double,
) -> Unit {
  ignore(self)
  let t = time / 1000.0
  let pulse = 1.0 + 0.1 * @math.sin(t * 8.0)
  let g = ctx.createRadialGradient(0.0, -20.0, 0.0, 0.0, -20.0, 15.0 * pulse)
  g.addColorStop(0.0, colors["laserGlow"])
  g.addColorStop(0.7, colors["laserCore"])
  g.addColorStop(1.0, "rgba(255,0,0,0)")
  ctx.fillStyle(g)
  ctx.beginPath()
  ctx.arc(0.0, -20.0, 15.0 * pulse, 0.0, @math.PI * 2.0)
  ctx.fill()
}

///|
fn LaserTowerRender::drawNozzle(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
  colors : Map[String, String],
) -> Unit {
  ignore(self)
  // 喷口参数
  let rx = 15.0
  let ry = 8.0
  let cy = 35.0

  // —— 接触阴影（先画阴影，后画喷口圈）——
  ctx.save()
  // 放在喷口正下方一点点
  let sy = cy + ry + 2.0 // 中心位置 y
  let srx = rx * 1.10 // 阴影横向稍宽
  let sry = ry * 0.60 // 阴影纵向较扁

  // 乘色可让阴影与底色更自然融合
  ctx.globalCompositeOperation("multiply")

  // 径向渐变：中心深、边缘透明
  let g = ctx.createRadialGradient(0.0, sy, 0.0, 0.0, sy, sry)
  g.addColorStop(0.0, "rgba(0, 0, 0, 0.36)")
  g.addColorStop(1.0, "rgba(0, 0, 0, 0.00)")
  ctx.fillStyle(g)
  ctx.beginPath()
  ctx.ellipse(0.0, sy, srx, sry, 0.0, 0.0, @math.PI * 2.0)
  ctx.fill()
  ctx.restore()

  // —— 喷口圈 ——（盖在阴影上面）
  ctx.fillStyle(colors["nozzle"])
  ctx.beginPath()
  ctx.ellipse(0.0, cy, rx, ry, 0.0, 0.0, @math.PI * 2.0)
  ctx.fill()
}

///|
fn LaserTowerRender::drawSideHighlight(
  self : LaserTowerRender,
  ctx : @Core.CanvasRenderingContext2D,
) -> Unit {
  ignore(self)
  ctx.save()
  ctx.globalAlpha(0.52)
  ctx.fillStyle("#ffffff")
  ctx.beginPath()
  ctx.moveTo(-15.0, -20.0)
  ctx.quadraticCurveTo(-30.0, -10.0, -18.0, 15.0)
  ctx.quadraticCurveTo(-12.0, 5.0, -8.0, -10.0)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}
