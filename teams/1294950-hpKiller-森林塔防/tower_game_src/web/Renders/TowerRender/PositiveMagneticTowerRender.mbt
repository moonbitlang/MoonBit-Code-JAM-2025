///|
pub struct PositiveMagneticTowerRender {}

///|
pub fn PositiveMagneticTowerRender::new() -> PositiveMagneticTowerRender {
  PositiveMagneticTowerRender::{  }
}

///|
let positiveMagneticTowerRenderInstance : Ref[PositiveMagneticTowerRender?] = Ref::new(
  None,
)

///|
pub let positiveMagneticTowerRenderSingleton : PositiveMagneticTowerRender = PositiveMagneticTowerRender::get_instance()

///|
pub fn PositiveMagneticTowerRender::get_instance() -> PositiveMagneticTowerRender {
  match positiveMagneticTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = PositiveMagneticTowerRender::new()
      positiveMagneticTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn render_tower(
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
    "baseDark": "#3a1d1d", // Dark red for base
    "baseLight": "#f25a5a", // Light red for base
    "baseStroke": "#a52a2a", // Stroke color
    "magnet": "#ff0000", // Red for positive magnet
    "ring1": "#ff6666", // Light red ring
    "ring2": "#ff3333", // Medium red ring
    "glow1": "rgba(255,0,0,0.85)", // Red glow
    "glow0": "rgba(255,0,0,0)", // Transparent red glow
    "muzzleCore": "#ff9999", // Light red core
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

  // 正极磁铁
  let drawPositiveMagnet = (c : @Core.CanvasRenderingContext2D, tMs : Double) => {
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

    // 正极符号 (+)
    c.fillStyle("#ffffff")
    c.fillRect(-3, -10, 6, 20) // 垂直线
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

  // 攻击动画：红色能量脉冲
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
      outer_g.addColorStop(0, "rgba(255,0,0,0)")
      outer_g.addColorStop(0.7, "rgba(255,0,0,0.3)")
      outer_g.addColorStop(1, "rgba(255,0,0,0.1)")
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
      inner_g.addColorStop(1, "rgba(255,0,0,0)")
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
  drawPositiveMagnet(ctx, time)
  drawMagnetGlow(ctx, time, level)
  attack_pulse(ctx, time, level)
  ctx.restore()
}

///|
fn render_effect(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  ctx.save()
  for ma in @Tower.positive_magnetic_field_datas.val {
    // println(".....")
    if ma.magnetic_ray_active {
      render_effect_ray_active(
        ctx,
        ma.negative_tower_x,
        ma.negative_tower_y,
        ma.positive_tower_x,
        ma.positive_tower_y,
        ma.magnetic_field_timer,
        @Tower.magnetic_field_timer_max,
      )
    } else {
      render_effect_field_active(
        ctx,
        ma.negative_tower_x,
        ma.negative_tower_y,
        ma.positive_tower_x,
        ma.positive_tower_y,
        ma.magnetic_field_timer,
        @Tower.magnetic_field_timer_max,
      )
    }
  }
  ctx.restore()
}

///|
fn render_effect_ray_active(
  ctx : @Core.CanvasRenderingContext2D,
  x1 : Double,
  y1 : Double,
  x2 : Double,
  y2 : Double,
  dt : Double,
  max_time : Double,
) -> Unit {
  if dt >= max_time {
    return
  }
  ctx.save()

  // 计算动画进度
  let progress = dt / max_time
  let pulse = 0.7 + 0.3 * @math.sin(dt * 10) // 脉冲效果

  // 计算中点
  let mid_x = (x1 + x2) * 0.5
  let mid_y = (y1 + y2) * 0.5

  // 从x1向中间发射蓝色射线
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  let blue_end_x = x1 + (mid_x - x1) * progress
  let blue_end_y = y1 + (mid_y - y1) * progress
  ctx.lineTo(blue_end_x, blue_end_y)
  ctx.strokeStyle("rgba(0, 0, 255, 0.8)")
  ctx.lineWidth(8.0 * pulse)
  ctx.stroke()

  // 添加蓝色射线的光晕效果
  let blue_glow = ctx.createRadialGradient(
    blue_end_x, blue_end_y, 0, blue_end_x, blue_end_y, 20.0,
  )
  blue_glow.addColorStop(0, "rgba(0, 0, 255, 0.6)")
  blue_glow.addColorStop(1, "rgba(0, 0, 255, 0)")
  ctx.beginPath()
  ctx.arc(blue_end_x, blue_end_y, 20.0, 0, @math.PI * 2)
  ctx.fillStyle(blue_glow)
  ctx.globalCompositeOperation("lighter")
  ctx.fill()
  ctx.globalCompositeOperation("source-over")

  // 从x2向中间发射红色射线
  ctx.beginPath()
  ctx.moveTo(x2, y2)
  let red_end_x = x2 + (mid_x - x2) * progress
  let red_end_y = y2 + (mid_y - y2) * progress
  ctx.lineTo(red_end_x, red_end_y)
  ctx.strokeStyle("rgba(255, 0, 0, 0.8)")
  ctx.lineWidth(8.0 * pulse)
  ctx.stroke()

  // 添加红色射线的光晕效果
  let red_glow = ctx.createRadialGradient(
    red_end_x, red_end_y, 0, red_end_x, red_end_y, 20.0,
  )
  red_glow.addColorStop(0, "rgba(255, 0, 0, 0.6)")
  red_glow.addColorStop(1, "rgba(255, 0, 0, 0)")
  ctx.beginPath()
  ctx.arc(red_end_x, red_end_y, 20.0, 0, @math.PI * 2)
  ctx.fillStyle(red_glow)
  ctx.globalCompositeOperation("lighter")
  ctx.fill()
  ctx.globalCompositeOperation("source-over")
  ctx.restore()
}

///|
fn render_effect_field_active(
  ctx : @Core.CanvasRenderingContext2D,
  x1 : Double,
  y1 : Double,
  x2 : Double,
  y2 : Double,
  dt : Double,
  max_time : Double,
) -> Unit {
  if dt < max_time {
    return
  }
  ctx.save()

  // 使用固定线宽
  let line_width = @Tower.positive_magnetic_width
  let _pulse = 0.8 + 0.2 * @math.sin(dt * 5) // 脉冲效果

  // 创建渐变色
  let gradient = ctx.createLinearGradient(x1, y1, x2, y2)
  gradient.addColorStop(0, "rgba(0, 0, 255, 0.6)") // 蓝色端
  gradient.addColorStop(0.5, "rgba(128, 0, 128, 0.8)") // 紫色中间
  gradient.addColorStop(1, "rgba(255, 0, 0, 0.6)") // 红色端

  // 绘制主磁场线
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle(gradient)
  // ctx.lineWidth(line_width * _pulse)
  ctx.lineWidth(line_width)
  ctx.stroke()

  // 添加磁场波动效果
  let wave_amplitude = 8.0
  let _wave_frequency = 0.02
  let points = 50.0
  let _segment_length = @math.hypot(x2 - x1, y2 - y1) / points
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  for i in 0..<points.to_int() {
    let t = i.to_double() / points
    let px = x1 + (x2 - x1) * t
    let py = y1 + (y2 - y1) * t
    let _offset = wave_amplitude *
      @math.sin(t * @math.PI * 4 + dt * 0.01) *
      _pulse
    // 计算垂直于连线的方向
    let angle = @math.atan2(y2 - y1, x2 - x1) + @math.PI / 2
    let dx = @math.cos(angle) * _offset
    let dy = @math.sin(angle) * _offset
    // let dx = @math.cos(angle) 
    // let dy = @math.sin(angle) 
    ctx.lineTo(px + dx, py + dy)
  }
  ctx.strokeStyle("rgba(255, 255, 255, 0.4)")
  ctx.lineWidth(2.0)
  ctx.stroke()

  // 添加磁场光晕效果
  // let glow_gradient = ctx.createLinearGradient(x1, y1, x2, y2)
  // glow_gradient.addColorStop(0, "rgba(0, 0, 255, 0.3)")
  // glow_gradient.addColorStop(0.5, "rgba(128, 0, 128, 0.4)")
  // glow_gradient.addColorStop(1, "rgba(255, 0, 0, 0.3)")
  // ctx.beginPath()
  // ctx.moveTo(x1, y1)
  // ctx.lineTo(x2, y2)
  // ctx.strokeStyle(glow_gradient)
  // ctx.lineWidth(line_width * 2.0 * pulse)
  // ctx.globalCompositeOperation("lighter")
  // ctx.stroke()
  // ctx.globalCompositeOperation("source-over")
  ctx.restore()
}

///|
pub fn PositiveMagneticTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  render_tower(ctx, x, y, level, gs, time, aimDeg~)
  render_effect(ctx)
}
