///|
pub struct BeeTowerRender {}

///|
pub fn BeeTowerRender::new() -> BeeTowerRender {
  BeeTowerRender::{  }
}

///|
let beeTowerRenderInstance : Ref[BeeTowerRender?] = Ref::new(None)

///|
pub let beeTowerRenderSingleton : BeeTowerRender = BeeTowerRender::get_instance()

///|
pub fn BeeTowerRender::get_instance() -> BeeTowerRender {
  match beeTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = BeeTowerRender::new()
      beeTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn BeeTowerRender::render_tower(
  self : BeeTowerRender,
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
    "plateDark": "#6b64c9",
    "plateLight": "#8c86f0",
    "plateStroke": "#5a55b8",
    "rocketMain": "#b15cf1",
    "rocketShade": "#8f47ca",
    "stripe1": "#ff6bd3",
    "stripe2": "#ffb0db",
    "fin1": "#ffd759",
    "fin2": "#f6b23a",
    "nozzle": "#7b35c3",
    "flame1": "#ffdc7a",
    "flame2": "#ff9a3c",
  }

  // ===== 小工具 =====
  let rad = (d : Double) => d * @math.PI / 180
  let clamp = (v : Double, lo : Double, hi : Double) => @cmp.maximum(
    lo,
    @cmp.minimum(hi, v),
  )

  // === 计算不会越界的底座半径 ===
  let half = gs * 0.5
  let margin = @cmp.maximum(1.0, gs * 0.02) // 留 1~2% 的边距
  let safe_FACTOR = 1.13 // 四耳 + 描边的"外扩"系数
  let baseR = (half - margin) / safe_FACTOR

  // === 机身缩放：按"单元格可用半径"限制 ===
  let max_LOGICAL_R = 100.0
  let cellScale = (half - margin) / max_LOGICAL_R
  // 等级缩放：L1=0.86, L2=0.89, L3=0.92
  let lvlScale = clamp(0.86 + 0.03 * (level - 1.0), 0.86, 0.92)
  let bodyScale = cellScale * lvlScale

  // === 地面柔影（固定在世界坐标，不随旋转） ===
  drawGroundShadow(ctx, x, y, baseR)

  // === 圆盘（四耳 + 渐变 + 高光 + 描边） ===
  drawPlate(ctx, x, y, baseR, colors)

  // === 炮体：进入"旋转坐标系"，并让【底部】对准 aimDeg ===
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rad(aimDeg - 90.0)) // 关键：下方=攻击方向
  ctx.scale(bodyScale, bodyScale)
  drawFlame(ctx, time, level, colors, clamp) // 尾焰
  drawBody(ctx, colors) // 机身主体
  drawStripes(ctx, colors, rad) // 斜条纹
  drawFins(ctx, colors) // 尾翼 根据 level x2 x4 x6
  drawNozzle(ctx, colors) // 喷口圈
  drawSideHighlight(ctx) // 侧高光
  ctx.restore()
}

///|
pub fn BeeTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  beeTowerRenderSingleton.render_tower(ctx, x, y, level, gs, time, aimDeg~)
}

///|
fn drawGroundShadow(
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  baseR : Double,
) -> Unit {
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
fn drawPlate(
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  r : Double,
  colors : Map[String, String],
) -> Unit {
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
fn drawFlame(
  ctx : @Core.CanvasRenderingContext2D,
  time : Double,
  level : Double,
  colors : Map[String, String],
  clamp : (Double, Double, Double) -> Double,
) -> Unit {
  let t = time / 1000.0
  let wobble = 3.0 + @math.sin(t * 6.0) * 2.0
  let extra = (clamp(level, 1.0, 3.0) - 1.0) * 6.0 // 每级 +6px 尾焰
  let g = ctx.createLinearGradient(0.0, 68.0, 0.0, 96.0 + wobble + extra)
  g.addColorStop(0.0, colors["flame1"])
  g.addColorStop(1.0, colors["flame2"])
  ctx.fillStyle(g)
  ctx.beginPath()
  ctx.moveTo(0.0, 68.0)
  ctx.quadraticCurveTo(12.0, 86.0, 0.0, 96.0 + wobble + extra)
  ctx.quadraticCurveTo(-12.0, 86.0, 0.0, 68.0)
  ctx.closePath()
  ctx.fill()
}

///|
fn drawBody(
  ctx : @Core.CanvasRenderingContext2D,
  colors : Map[String, String],
) -> Unit {
  let bodyGrad = ctx.createLinearGradient(-46.0, -72.0, 52.0, 64.0)
  bodyGrad.addColorStop(0.0, colors["rocketShade"])
  bodyGrad.addColorStop(0.45, colors["rocketMain"])
  bodyGrad.addColorStop(1.0, "#c784ff")
  ctx.fillStyle(bodyGrad)
  ctx.beginPath()
  ctx.moveTo(0.0, -70.0)
  ctx.quadraticCurveTo(43.0, -48.0, 37.0, 4.0)
  ctx.quadraticCurveTo(34.0, 28.0, 0.0, 48.0)
  ctx.quadraticCurveTo(-34.0, 28.0, -37.0, 4.0)
  ctx.quadraticCurveTo(-43.0, -48.0, 0.0, -70.0)
  ctx.closePath()
  ctx.fill()
}

///|
fn drawStripes(
  ctx : @Core.CanvasRenderingContext2D,
  colors : Map[String, String],
  rad : (Double) -> Double,
) -> Unit {
  let bodyPath = () => {
    ctx.beginPath()
    ctx.moveTo(0.0, -70.0)
    ctx.quadraticCurveTo(43.0, -48.0, 37.0, 4.0)
    ctx.quadraticCurveTo(34.0, 28.0, 0.0, 48.0)
    ctx.quadraticCurveTo(-34.0, 28.0, -37.0, 4.0)
    ctx.quadraticCurveTo(-43.0, -48.0, 0.0, -70.0)
    ctx.closePath()
  }
  ctx.save()
  bodyPath()
  ctx.clip()
  ctx.save()
  ctx.rotate(rad(-10.0))

  // 上条纹
  ctx.fillStyle(colors["stripe1"])
  roundedBand(ctx, -44.0, -16.0, 88.0, 18.0, 9.0)

  // 下条纹
  ctx.fillStyle(colors["stripe2"])
  roundedBand(ctx, -48.0, 8.0, 96.0, 16.0, 8.0)
  ctx.restore()
  ctx.restore()
}

///|
fn roundedBand(
  ctx : @Core.CanvasRenderingContext2D,
  bx : Double,
  by : Double,
  w : Double,
  h : Double,
  r : Double,
) -> Unit {
  let rr = @cmp.minimum(r, @cmp.minimum(h / 2.0, w / 2.0))
  ctx.beginPath()
  ctx.moveTo(bx + rr, by)
  ctx.lineTo(bx + w - rr, by)
  ctx.quadraticCurveTo(bx + w, by, bx + w, by + rr)
  ctx.lineTo(bx + w, by + h - rr)
  ctx.quadraticCurveTo(bx + w, by + h, bx + w - rr, by + h)
  ctx.lineTo(bx + rr, by + h)
  ctx.quadraticCurveTo(bx, by + h, bx, by + h - rr)
  ctx.lineTo(bx, by + rr)
  ctx.quadraticCurveTo(bx, by, bx + rr, by)
  ctx.closePath()
  ctx.fill()
}

///|
fn drawFins(
  ctx : @Core.CanvasRenderingContext2D,
  colors : Map[String, String],
) -> Unit {
  let fin = (x0 : Double, y0 : Double, w : Double, h : Double) => {
    let g = ctx.createLinearGradient(x0, y0, x0 + w, y0 + h)
    g.addColorStop(0.0, colors["fin1"])
    g.addColorStop(1.0, colors["fin2"])
    ctx.fillStyle(g)
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.quadraticCurveTo(
      x0 + w * 0.10,
      y0 + h * 0.20,
      x0 + w * 0.16,
      y0 + h * 0.50,
    )
    ctx.quadraticCurveTo(x0 + w * 0.22, y0 + h * 0.90, x0 + w, y0 + h)
    ctx.quadraticCurveTo(x0 + w * 0.40, y0 + h * 0.55, x0, y0)
    ctx.closePath()
    ctx.fill()
  }
  fin(-48.0, 12.0, 40.0, 38.0) // 左
  ctx.save()
  ctx.scale(-1.0, 1.0) // 右（镜像）
  fin(-48.0, 12.0, 40.0, 38.0)
  ctx.restore()
}

///|
fn drawNozzle(
  ctx : @Core.CanvasRenderingContext2D,
  colors : Map[String, String],
) -> Unit {
  // 喷口参数
  let rx = 20.0
  let ry = 10.0
  let cy = 48.0

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
fn drawSideHighlight(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  ctx.save()
  ctx.globalAlpha(0.52)
  ctx.fillStyle("#ffffff")
  ctx.beginPath()
  ctx.moveTo(-22.0, -34.0)
  ctx.quadraticCurveTo(-46.0, -10.0, -25.0, 24.0)
  ctx.quadraticCurveTo(-18.0, 8.0, -12.0, -14.0)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}
