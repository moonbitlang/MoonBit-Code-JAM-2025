///|
pub struct SnowflakeTowerRender {}

///|
pub fn SnowflakeTowerRender::new() -> SnowflakeTowerRender {
  SnowflakeTowerRender::{  }
}

///|
let snowflakeTowerRenderInstance : Ref[SnowflakeTowerRender?] = Ref::new(None)

///|
pub let snowflakeTowerRenderSingleton : SnowflakeTowerRender = SnowflakeTowerRender::get_instance()

///|
pub fn SnowflakeTowerRender::get_instance() -> SnowflakeTowerRender {
  match snowflakeTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SnowflakeTowerRender::new()
      snowflakeTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SnowflakeTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  let rad = (d : Double) => d * @math.PI / 180
  let clamp = (v : Double, lo : Double, hi : Double) => @cmp.maximum(
    lo,
    @cmp.minimum(hi, v),
  )
  let aim = rad(aimDeg)
  let t = time / 1000.0
  let lvl = clamp(level, 1.0, 5.0)
  let lvl_scale = 1.0 + 0.12 * (lvl - 1.0)

  // 基础尺寸
  let base_r = @cmp.minimum(gs * 0.32 * lvl_scale, 32.0 * lvl_scale)
  let tower_h = base_r * 1.8
  let tower_w = base_r * 0.9

  // 脉动因子（用于呼吸动画）
  let pulse = 0.85 + 0.15 * @math.sin(t * 2.8)
  let pulse_r = base_r * pulse

  // ===== 进入旋转坐标系 =====
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(aim)
  ctx.translate(-x, -y)

  // === 1. 冰霜底座（六边形）===
  ctx.save()
  ctx.translate(x, y)
  let hex_points = []
  for i in 0..<6 {
    let a = rad(60.0 * i.to_double())
    hex_points.push(@math.cos(a) * pulse_r)
    hex_points.push(@math.sin(a) * pulse_r)
  }
  ctx.beginPath()
  ctx.moveTo(x + hex_points[0], y + hex_points[1])
  for i in 1..<6 {
    ctx.lineTo(x + hex_points[i * 2], y + hex_points[i * 2 + 1])
  }
  ctx.closePath()
  let base_grad = ctx.createRadialGradient(
    x,
    y - base_r * 0.4,
    1.0,
    x,
    y,
    pulse_r,
  )
  base_grad.addColorStop(0.0, "rgba(200, 240, 255, 0.7)")
  base_grad.addColorStop(0.6, "rgba(140, 210, 255, 0.5)")
  base_grad.addColorStop(1.0, "rgba(80, 160, 220, 0.3)")
  ctx.fillStyle(base_grad)
  ctx.fill()
  ctx.strokeStyle("rgba(100, 180, 240, 0.6)")
  ctx.lineWidth(@cmp.maximum(1.2, 1.8 * lvl_scale))
  ctx.stroke()
  ctx.restore()

  // === 2. 塔身（冰晶棱柱）===
  let body_top = y - tower_h
  let _body_left = x - tower_w * 0.5

  // 绘制六边形塔身（垂直拉伸）
  ctx.save()
  ctx.translate(0, 0)
  let body_hex = []
  for i in 0..<6 {
    let a = rad(60.0 * i.to_double())
    body_hex.push(@math.cos(a) * tower_w * 0.5)
    body_hex.push(@math.sin(a) * tower_w * 0.3) // 压扁成棱柱
  }

  // 构建侧面（简化：用两个六边形 + 连线）
  ctx.beginPath()
  // 底部六边形（在 y）
  ctx.moveTo(x + body_hex[0], y + body_hex[1])
  for i in 1..<6 {
    ctx.lineTo(x + body_hex[i * 2], y + body_hex[i * 2 + 1])
  }
  ctx.closePath()
  // 顶部六边形（在 body_top）
  ctx.moveTo(x + body_hex[0], body_top + body_hex[1])
  for i in 1..<6 {
    ctx.lineTo(x + body_hex[i * 2], body_top + body_hex[i * 2 + 1])
  }
  ctx.closePath()

  // 填充冰晶渐变
  let body_grad = ctx.createLinearGradient(x, body_top, x, y)
  body_grad.addColorStop(0.0, "rgba(220, 245, 255, 0.85)")
  body_grad.addColorStop(1.0, "rgba(160, 220, 255, 0.65)")
  ctx.fillStyle(body_grad)
  ctx.fill()
  ctx.strokeStyle("rgba(90, 170, 230, 0.7)")
  ctx.lineWidth(@cmp.maximum(1.0, 1.4 * lvl_scale))
  ctx.stroke()
  ctx.restore()

  // === 3. 顶部雪花核心（动态旋转雪花）===
  let snow_center_y = body_top - base_r * 0.3
  let snow_r = base_r * 0.6 * pulse
  let snow_spin = rad(t * 30.0) // 缓慢自转
  ctx.save()
  ctx.translate(x, snow_center_y)
  ctx.rotate(snow_spin)

  // 六角主枝
  ctx.strokeStyle("rgba(255, 255, 255, 0.95)")
  ctx.lineWidth(@cmp.maximum(1.6, 2.2 * lvl_scale))
  for i in 0..<6 {
    let a = rad(60.0 * i.to_double())
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(@math.cos(a) * snow_r, @math.sin(a) * snow_r)
    ctx.stroke()
  }

  // 小分支（每主枝两个小叉）
  if lvl >= 2.0 {
    ctx.lineWidth(@cmp.maximum(0.9, 1.3 * lvl_scale))
    for i in 0..<6 {
      let a = rad(60.0 * i.to_double())
      let main_x = @math.cos(a) * snow_r * 0.6
      let main_y = @math.sin(a) * snow_r * 0.6
      // 左叉
      let a1 = a + rad(45.0)
      let a2 = a - rad(45.0)
      ctx.beginPath()
      ctx.moveTo(main_x, main_y)
      ctx.lineTo(
        main_x + @math.cos(a1) * snow_r * 0.3,
        main_y + @math.sin(a1) * snow_r * 0.3,
      )
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(main_x, main_y)
      ctx.lineTo(
        main_x + @math.cos(a2) * snow_r * 0.3,
        main_y + @math.sin(a2) * snow_r * 0.3,
      )
      ctx.stroke()
    }
  }

  // 中心光球
  let center_grad = ctx.createRadialGradient(0, 0, 1.0, 0, 0, snow_r * 0.25)
  center_grad.addColorStop(0.0, "rgba(255, 255, 255, 0.9)")
  center_grad.addColorStop(1.0, "rgba(180, 230, 255, 0.4)")
  ctx.fillStyle(center_grad)
  ctx.beginPath()
  ctx.arc(0, 0, snow_r * 0.25, 0.0, @math.PI * 2.0)
  ctx.fill()
  ctx.restore()

  // === 4. 冰晶装饰（等级越高，越多冰刺）===
  let spike_count = clamp(@math.round(lvl), 1.0, 4.0).to_int()
  if spike_count > 0 {
    ctx.strokeStyle("rgba(200, 240, 255, 0.7)")
    ctx.lineWidth(@cmp.maximum(1.0, 1.5 * lvl_scale))
    for i in 0..<spike_count {
      let angle = rad(360.0 / spike_count.to_double() * i.to_double())
      let sx = x + @math.cos(angle) * (tower_w * 0.6)
      let sy = y - tower_h * 0.6
      let ex = sx + @math.cos(angle) * base_r * 0.4
      let ey = sy + @math.sin(angle) * base_r * 0.4
      ctx.beginPath()
      ctx.moveTo(sx, sy)
      ctx.lineTo(ex, ey)
      ctx.stroke()
    }
  }

  // === 5. 高光（模拟冰面反光）===
  ctx.save()
  ctx.globalAlpha(0.4 + 0.2 * @math.sin(t * 4.0))
  ctx.fillStyle("rgba(255, 255, 255, 0.8)")
  ctx.beginPath()
  ctx.ellipse(
    x - tower_w * 0.3,
    body_top + tower_h * 0.3,
    tower_w * 0.15,
    tower_h * 0.25,
    rad(-20.0),
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()

  // 退出旋转坐标系
  ctx.restore()
}
