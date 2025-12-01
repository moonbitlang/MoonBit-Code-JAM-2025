///|
pub struct PlasmaTowerRender {}

///|
pub fn PlasmaTowerRender::new() -> PlasmaTowerRender {
  PlasmaTowerRender::{  }
}

///|
let plasmaTowerRenderInstance : Ref[PlasmaTowerRender?] = Ref::new(None)

///|
pub let plasmaTowerRenderSingleton : PlasmaTowerRender = PlasmaTowerRender::get_instance()

///|
pub fn PlasmaTowerRender::get_instance() -> PlasmaTowerRender {
  match plasmaTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = PlasmaTowerRender::new()
      plasmaTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PlasmaTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  // ===== 配色 =====
  let colors = {
    "baseDark": "#1d2a3a",
    "baseLight": "#2f3f5e",
    "baseStroke": "#253147",
    "bolt": "#8aa1b5",
    "ring1": "#5ad1ff",
    "ring2": "#4cf2c2",
    "barrelShade": "#3f74d5",
    "barrelMain": "#66a9ff",
    "glow1": "rgba(166,255,251,0.85)",
    "glow0": "rgba(166,255,251,0)",
    "muzzleCore": "#bffcff",
  }

  // ===== 尺度与安全边界 =====
  let half = gs * 0.5
  let margin = @cmp.maximum(1.0, gs * 0.02) // 1-2% 边距
  let safe_FACTOR = 1.13 // 外扩系数（描边/发光）
  let baseR = (half - margin) / safe_FACTOR

  // 机身（局部坐标）的最大“理论半径”，含能量环/枪口光
  let max_LOGICAL_R = 100.0
  let cellScale = (half - margin) / max_LOGICAL_R

  // 等级缩放：L1=0.86, L2=0.89, L3=0.92（与 BeeSpinner 对齐）
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

  // // 六角底座（平顶）
  let drawHexBase = (
    c : @Core.CanvasRenderingContext2D,
    cx : Double,
    cy : Double,
    r : Double,
  ) => {
    c.save()
    let rr = r * 0.86

    // 主体
    let g = c.createLinearGradient(cx - rr, cy - rr, cx + rr, cy + rr)
    g.addColorStop(0, colors["baseLight"])
    g.addColorStop(1, colors["baseDark"])
    c.fillStyle(g)
    c.beginPath()
    for i = 0; i < 6; i = i + 1 {
      let a = @math.PI / 6 + i.to_double() * @math.PI / 3
      let px = cx + @math.cos(a) * rr
      let py = cy + @math.sin(a) * rr
      if i == 0 {
        c.moveTo(px, py)
      } else {
        c.lineTo(px, py)
      }
    }
    c.closePath()
    c.fill()

    // 外描边
    c.strokeStyle(colors["baseStroke"])
    let linewidth = @cmp.maximum(2.0, r * 0.06)
    c.lineWidth(linewidth)
    c.beginPath()
    for i = 0; i < 6; i = i + 1 {
      let a = @math.PI / 6 + i.to_double() * @math.PI / 3
      let px = cx + @math.cos(a) * (rr - linewidth / 2)
      let py = cy + @math.sin(a) * (rr - linewidth / 2)
      if i == 0 {
        c.moveTo(px, py)
      } else {
        c.lineTo(px, py)
      }
    }
    c.closePath()
    c.stroke()

    // 螺栓
    c.fillStyle(colors["bolt"])
    for i = 0; i < 6; i = i + 1 {
      let a = @math.PI / 6 + i.to_double() * @math.PI / 3
      let px = cx + @math.cos(a) * (rr * 0.7)
      let py = cy + @math.sin(a) * (rr * 0.7)
      c.beginPath()
      c.arc(px, py, @cmp.maximum(2, r * 0.08), 0, @math.PI * 2)
      c.fill()
    }

    // 内部高光
    let rg = c.createRadialGradient(cx, cy, rr * 0.25, cx, cy, rr * 0.95)
    rg.addColorStop(0, "rgba(255,255,255,.35)")
    rg.addColorStop(1, "rgba(255,255,255,0)")
    c.fillStyle(rg)
    c.beginPath()
    c.arc(cx, cy, rr * 0.92, 0, @math.PI * 2)
    c.fill()
    c.restore()
  }

  // 旋转能量环
  let drawEnergyRing = (
    c : @Core.CanvasRenderingContext2D,
    tMs : Double,
    lvl : Double,
  ) => {
    let t = tMs / 1000
    let rot = t * 2 // 匀速转动
    let w = 10.0 // 环宽
    let r = 40.0 // 半径
    let pulse = 0.85 + 0.15 * @math.sin(t * 4 + lvl) // 呼吸
    c.save()
    c.rotate(rot)
    c.lineWidth(w)
    let g = c.createLinearGradient(-r, 0, r, 0)
    g.addColorStop(0, colors["ring1"])
    g.addColorStop(1, colors["ring2"])
    c.strokeStyle(g)
    c.globalAlpha(pulse)
    c.beginPath()
    c.arc(0, 6, r, 0, @math.PI * 2)
    c.stroke()

    // 间隙刻线
    c.globalAlpha(0.5 * pulse)
    for i = 0; i < 6; i = i + 1 {
      c.beginPath()
      c.arc(
        0,
        6,
        r,
        i.to_double() * @math.PI / 3 + 0.1,
        i.to_double() * @math.PI / 3 + 0.24,
      )
      c.stroke()
    }
    c.restore()
  }

  // 枪管
  let drawBarrel = (c : @Core.CanvasRenderingContext2D) => {
    let lg = c.createLinearGradient(-18, -40, 22, 80)
    lg.addColorStop(0, colors["barrelShade"])
    lg.addColorStop(0.45, colors["barrelMain"])
    lg.addColorStop(1, "#bfe0ff")
    c.fillStyle(lg)
    c.beginPath()
    c.moveTo(0, -42)
    c.quadraticCurveTo(28, -18, 22, 28)
    c.quadraticCurveTo(20, 52, 0, 70)
    c.quadraticCurveTo(-20, 52, -22, 28)
    c.quadraticCurveTo(-28, -18, 0, -42)
    c.closePath()
    c.fill()

    // 枪口圈
    c.fillStyle("#2a3e64")
    c.beginPath()
    c.ellipse(0, 70, 18, 9, 0, 0, @math.PI * 2)
    c.fill()

    // 中段能量槽
    c.save()
    c.beginPath()
    c.moveTo(-16, 10)
    c.lineTo(16, 10)
    c.quadraticCurveTo(20, 18, 16, 26)
    c.lineTo(-16, 26)
    c.quadraticCurveTo(-20, 18, -16, 10)
    c.closePath()
    let sg = c.createLinearGradient(-16, 10, 16, 26)
    sg.addColorStop(0, "#53ffd8")
    sg.addColorStop(1, "#6ad1ff")
    c.fillStyle(sg)
    c.globalAlpha(0.75)
    c.fill()
    c.restore()
  }

  // 枪口发光
  let drawMuzzleGlow = (
    c : @Core.CanvasRenderingContext2D,
    tMs : Double,
    lvl : Double,
  ) => {
    let t = tMs / 1000
    let pulse = 0.55 + 0.45 * @math.sin(t * 8)
    let extra = (@Math.clamp(lvl, 1, 3) - 1) * 3 // 等级加强半径
    let r = 14.0 + 4 * pulse + extra // 控制在 max_LOGICAL_R 内
    let rg = c.createRadialGradient(0, 74, 0, 0, 74, r)
    rg.addColorStop(0, colors["glow1"])
    rg.addColorStop(1, colors["glow0"])
    c.save()
    c.globalCompositeOperation("lighter")
    c.fillStyle(rg)
    c.beginPath()
    c.arc(0, 74, r, 0, @math.PI * 2)
    c.fill()

    // 核心
    c.globalAlpha(0.9)
    c.fillStyle(colors["muzzleCore"])
    c.beginPath()
    c.ellipse(0, 72, 6 + extra * 0.4, 4 + extra * 0.3, 0, 0, @math.PI * 2)
    c.fill()
    c.restore()
  }

  // 攻击动画：等离子体射弹
  let attack_projectile = (
    c : @Core.CanvasRenderingContext2D,
    tMs : Double,
    lvl : Double,
  ) => {
    let t = tMs / 1000
    let attack_phase = tMs / 700 % 2.0
    if attack_phase < 1.0 { // 攻击阶段
      let pulse_size = 1.0 + 0.3 * @math.sin(t * 20)
      let base_r = 10.0 * pulse_size
      let extra = (@Math.clamp(lvl, 1, 3) - 1) * 3
      let r = base_r + extra

      // 等离子体球
      let plasma_g = c.createRadialGradient(0, 74, 0, 0, 74, r)
      plasma_g.addColorStop(0, colors["glow1"])
      plasma_g.addColorStop(0.6, "rgba(166,255,251,0.5)")
      plasma_g.addColorStop(1, "rgba(166,255,251,0)")
      c.save()
      c.globalCompositeOperation("lighter")
      c.fillStyle(plasma_g)
      c.beginPath()
      c.arc(0, 74, r, 0, @math.PI * 2)
      c.fill()
      c.restore()

      // 能量轨迹
      c.save()
      c.globalCompositeOperation("lighter")
      c.strokeStyle("rgba(166,255,251,0.3)")
      c.lineWidth(2)
      c.beginPath()
      c.moveTo(0, 74)
      c.lineTo(0, 74 + r * 2)
      c.stroke()
      c.restore()
    }
  }

  // 侧面高光
  let drawGloss = (c : @Core.CanvasRenderingContext2D) => {
    c.save()
    c.globalAlpha(0.5)
    c.fillStyle("#ffffff")
    c.beginPath()
    c.moveTo(-18, -10)
    c.quadraticCurveTo(-34, 10, -18, 34)
    c.quadraticCurveTo(-12, 20, -8, 0)
    c.closePath()
    c.fill()
    c.restore()
  }

  // 地面柔影 & 底座
  drawGroundShadow(ctx, x, y, baseR)
  drawHexBase(ctx, x, y, baseR)

  // 炮体：以“底部”为朝向
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(@Math.deg2rad(aimDeg - 90))
  ctx.scale(bodyScale, bodyScale)
  drawEnergyRing(ctx, time, level)
  drawBarrel(ctx)
  drawMuzzleGlow(ctx, time, level)
  drawGloss(ctx)
  attack_projectile(ctx, time, level)
  ctx.restore()
}
