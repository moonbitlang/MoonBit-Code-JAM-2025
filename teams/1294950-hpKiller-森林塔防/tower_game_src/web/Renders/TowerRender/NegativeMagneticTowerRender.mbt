///|
pub struct NegativeMagneticTowerRender {}

///|
pub fn NegativeMagneticTowerRender::new() -> NegativeMagneticTowerRender {
  NegativeMagneticTowerRender::{  }
}

///|
let negativeMagneticTowerRenderInstance : Ref[NegativeMagneticTowerRender?] = Ref::new(
  None,
)

///|
pub let negativeMagneticTowerRenderSingleton : NegativeMagneticTowerRender = NegativeMagneticTowerRender::get_instance()

///|
pub fn NegativeMagneticTowerRender::get_instance() -> NegativeMagneticTowerRender {
  match negativeMagneticTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = NegativeMagneticTowerRender::new()
      negativeMagneticTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn NegativeMagneticTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  ignore(aimDeg)
  // ===== 配色 =====
  let colors = {
    "baseDark": "#1d1d3a", // Dark blue for base
    "baseLight": "#5a5af2", // Light blue for base
    "baseStroke": "#2a2aa5", // Stroke color
    "magnet": "#0000ff", // Blue for negative magnet
    "ring1": "#6666ff", // Light blue ring
    "ring2": "#3333ff", // Medium blue ring
    "glow1": "rgba(0,0,255,0.85)", // Blue glow
    "glow0": "rgba(0,0,255,0)", // Transparent blue glow
    "muzzleCore": "#9999ff", // Light blue core
  }

  // ===== 尺度与安全边界 =====
  let half = gs * 0.5
  let margin = @cmp.maximum(1.0, gs * 0.02) // 1-2% 边距
  let safe_FACTOR = 1.13 // 外扩系数（描边/发光）
  let baseR = (half - margin) / safe_FACTOR

  // 机身（局部坐标）的最大“理论半径”，含能量环/枪口光
  let max_LOGICAL_R = 100.0
  let cellScale = (half - margin) / max_LOGICAL_R

  // 等级缩放：L1=0.86, L2=0.89, L3=0.92
  let lvlScale = @Math.clamp(
    0.86 + 0.03 * (@Math.clamp(level, 1, 3) - 1),
    0.86,
    0.92,
  )
  let bodyScale = cellScale * lvlScale

  // /* ================= 内部函数 ================= */

  // // 地面柔影（固定世界坐标）
  let drawGroundShadow = (
    c : @Core.CanvasRenderingContext2D,
    cx : Double,
    cy : Double,
    r : Double,
  ) => {
    c.save()
    c.globalAlpha(0.2)
    c.fillStyle("#000")
    c.beginPath()
    c.ellipse(cx, cy + r * 0.28, r * 0.58, r * 0.18, 0, 0, @math.PI * 2)
    c.fill()
    c.restore()
  }

  // // U型磁铁底座
  let drawUBase = (
    c : @Core.CanvasRenderingContext2D,
    cx : Double,
    cy : Double,
    r : Double,
  ) => {
    c.save()
    let width = r * 1.2
    let height = r * 0.8
    let thickness = r * 0.3

    // 主体
    let g = c.createLinearGradient(
      cx - width / 2,
      cy - height / 2,
      cx + width / 2,
      cy + height / 2,
    )
    g.addColorStop(0, colors["baseLight"])
    g.addColorStop(1, colors["baseDark"])
    c.fillStyle(g)

    // 绘制U型
    c.beginPath()
    // 左侧竖条
    c.rect(cx - width / 2, cy - height / 2, thickness, height)
    // 右侧竖条
    c.rect(cx + width / 2 - thickness, cy - height / 2, thickness, height)
    // 底部横条
    c.rect(cx - width / 2, cy + height / 2 - thickness, width, thickness)
    c.fill()

    // 外描边
    c.strokeStyle(colors["baseStroke"])
    let linewidth = @cmp.maximum(2.0, r * 0.06)
    c.lineWidth(linewidth)
    c.beginPath()
    // 左侧竖条边框
    c.rect(cx - width / 2, cy - height / 2, thickness, height)
    // 右侧竖条边框
    c.rect(cx + width / 2 - thickness, cy - height / 2, thickness, height)
    // 底部横条边框
    c.rect(cx - width / 2, cy + height / 2 - thickness, width, thickness)
    c.stroke()

    // 内部高光
    let rg = c.createRadialGradient(cx, cy, 0, cx, cy, r * 0.8)
    rg.addColorStop(0, "rgba(255,255,255,.35)")
    rg.addColorStop(1, "rgba(255,255,255,0)")
    c.fillStyle(rg)
    c.beginPath()
    c.arc(cx, cy, r * 0.7, 0, @math.PI * 2)
    c.fill()
    c.restore()
  }

  // 旋转磁场环
  let drawMagneticField = (
    c : @Core.CanvasRenderingContext2D,
    tMs : Double,
    lvl : Double,
  ) => {
    let t = tMs / 1000
    let rot = t * 3 // 更快的转动
    let w = 8.0 // 环宽
    let r = 35.0 // 半径
    let pulse = 0.7 + 0.3 * @math.sin(t * 5 + lvl) // 呼吸效果
    c.save()
    c.rotate(rot)
    c.lineWidth(w)
    let g = c.createLinearGradient(-r, 0, r, 0)
    g.addColorStop(0, colors["ring1"])
    g.addColorStop(1, colors["ring2"])
    c.strokeStyle(g)
    c.globalAlpha(pulse)
    c.beginPath()
    c.arc(0, 0, r, 0, @math.PI * 2)
    c.stroke()
    c.restore()
  }

  // 负极磁铁
  let drawNegativeMagnet = (c : @Core.CanvasRenderingContext2D, tMs : Double) => {
    let t = tMs / 1000
    let rot = t * 4 // 旋转效果
    let size = 25.0
    c.save()
    c.rotate(rot)

    // 磁铁主体
    c.fillStyle(colors["magnet"])
    c.beginPath()
    c.arc(0, 0, size, 0, @math.PI * 2)
    c.fill()

    // 负极符号 (-)
    c.fillStyle("#ffffff")
    c.fillRect(-10, -3, 20, 6) // 水平线
    c.restore()
  }

  // 磁铁发光
  let drawMagnetGlow = (
    c : @Core.CanvasRenderingContext2D,
    tMs : Double,
    lvl : Double,
  ) => {
    let t = tMs / 1000
    let pulse = 0.5 + 0.5 * @math.sin(t * 6)
    let extra = (@Math.clamp(lvl, 1, 3) - 1) * 3 // 等级加强半径
    let r = 20.0 + 5 * pulse + extra
    let rg = c.createRadialGradient(0, 0, 0, 0, 0, r)
    rg.addColorStop(0, colors["glow1"])
    rg.addColorStop(1, colors["glow0"])
    c.save()
    c.globalCompositeOperation("lighter")
    c.fillStyle(rg)
    c.beginPath()
    c.arc(0, 0, r, 0, @math.PI * 2)
    c.fill()
    c.restore()
  }

  // 攻击动画：蓝色能量脉冲
  let attack_pulse = (
    c : @Core.CanvasRenderingContext2D,
    tMs : Double,
    lvl : Double,
  ) => {
    let t = tMs / 1000
    let attack_phase = tMs / 800 % 2.0
    if attack_phase < 1.0 { // 攻击阶段
      let pulse_size = 1.0 + 0.5 * @math.sin(t * 15)
      let base_r = 40.0 * pulse_size
      let extra = (@Math.clamp(lvl, 1, 3) - 1) * 5
      let r = base_r + extra

      // 外层脉冲环
      let outer_g = c.createRadialGradient(0, 0, 0, 0, 0, r)
      outer_g.addColorStop(0, "rgba(0,0,255,0)")
      outer_g.addColorStop(0.7, "rgba(0,0,255,0.3)")
      outer_g.addColorStop(1, "rgba(0,0,255,0.1)")
      c.save()
      c.globalCompositeOperation("lighter")
      c.fillStyle(outer_g)
      c.beginPath()
      c.arc(0, 0, r, 0, @math.PI * 2)
      c.fill()
      c.restore()

      // 内层能量波
      let inner_r = r * 0.6
      let inner_g = c.createRadialGradient(0, 0, 0, 0, 0, inner_r)
      inner_g.addColorStop(0, colors["glow1"])
      inner_g.addColorStop(1, "rgba(0,0,255,0)")
      c.save()
      c.globalCompositeOperation("lighter")
      c.fillStyle(inner_g)
      c.beginPath()
      c.arc(0, 0, inner_r, 0, @math.PI * 2)
      c.fill()
      c.restore()
    }
  }

  // 地面柔影 & 底座
  drawGroundShadow(ctx, x, y, baseR)
  drawUBase(ctx, x, y, baseR)

  // 磁铁：以“底部”为朝向
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(bodyScale, bodyScale)
  drawMagneticField(ctx, time, level)
  drawNegativeMagnet(ctx, time)
  drawMagnetGlow(ctx, time, level)
  attack_pulse(ctx, time, level)
  ctx.restore()
}
