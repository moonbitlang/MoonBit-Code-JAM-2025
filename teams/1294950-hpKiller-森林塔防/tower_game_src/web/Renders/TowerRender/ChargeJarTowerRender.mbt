///|
pub struct ChargeJarTowerRender {}

///|
pub fn ChargeJarTowerRender::new() -> ChargeJarTowerRender {
  ChargeJarTowerRender::{  }
}

///|
let chargeJarTowerRenderInstance : Ref[ChargeJarTowerRender?] = Ref::new(None)

///|
pub let chargeJarTowerRenderSingleton : ChargeJarTowerRender = ChargeJarTowerRender::get_instance()

///|
pub fn ChargeJarTowerRender::get_instance() -> ChargeJarTowerRender {
  match chargeJarTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = ChargeJarTowerRender::new()
      chargeJarTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ChargeJarTowerRender::render(
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
  let t = time / 1000

  // 等级缩放（略微变大）
  let lvl_scale = 1.0 + 0.08 * clamp(level - 1.0, 0.0, 2.0)

  // 圆盘尺寸
  let base_r = @cmp.minimum(@cmp.maximum(6.0, gs * 0.5 - 1.0) * 0.88, gs * 0.38) *
    lvl_scale
  let inner_r = base_r * 0.72

  // 瓶身尺寸
  let body_h = @cmp.minimum(gs * 0.68 * lvl_scale, 44.0 * lvl_scale)
  let body_w = @cmp.minimum(gs * 0.40 * lvl_scale, 26.0 * lvl_scale)
  let body_r = @cmp.minimum(body_w * 0.46, 10.0 * lvl_scale)
  let body_top = y - body_h * 0.48
  let body_left = x - body_w * 0.30

  // 瓶颈
  let neck_w = body_w * 0.36
  let neck_h = body_h * 0.18
  let neck_x = x + body_w * 0.08 - neck_w * 0.5
  let neck_y = body_top - neck_h * 0.35

  // 上下瓶盖（同尺寸）
  let cap_rx = @cmp.minimum(body_w * 0.34, 9.0 * lvl_scale)
  let cap_ry = cap_rx * 0.55
  let cap_body_h = cap_rx * 0.95
  let cap_attach = cap_body_h * 0.45 // 盖中心到连接点的"对称偏移"

  // "耳位"
  let ear_r = base_r * 0.32
  let ear_at_r = base_r * 1.02
  let pulse = 0.5 + 0.5 * @math.sin(t * 2.4)

  // 地面柔影（不随旋转）
  // ctx.save()
  // ctx.fillStyle("#00ff00")
  // ctx.beginPath()
  // ctx.arc(x, y, gs * 0.4, 0.0, @math.PI * 2.0)
  // ctx.fill()
  // ctx.restore()

  // ===== 进入旋转坐标系：圆盘、瓶身、上下盖、星星 =====
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(aim)
  ctx.translate(-x, -y)

  // 外盘
  let base_grad = ctx.createRadialGradient(
    x,
    y - base_r * 0.3,
    base_r * 0.15,
    x,
    y,
    base_r,
  )
  base_grad.addColorStop(0.0, "#5FB0FF")
  base_grad.addColorStop(1.0, "#1E72C6")
  ctx.fillStyle(base_grad)
  ctx.beginPath()
  ctx.arc(x, y, base_r, 0.0, @math.PI * 2.0)
  ctx.fill()

  // 内盘
  let inner_grad = ctx.createRadialGradient(x, y, 1.0, x, y, inner_r)
  inner_grad.addColorStop(0.0, "#CFE8FF")
  inner_grad.addColorStop(1.0, "#5AA7F3")
  ctx.fillStyle(inner_grad)
  ctx.beginPath()
  ctx.arc(x, y, inner_r, 0.0, @math.PI * 2.0)
  ctx.fill()

  // 三个耳位
  let ear_angles = [0.0, 120.0, -120.0].map(rad)
  ctx.fillStyle("#195FA3")
  for a in ear_angles {
    let ex = x + @math.cos(a) * ear_at_r
    let ey = y + @math.sin(a) * ear_at_r
    ctx.beginPath()
    ctx.arc(ex, ey, ear_r * 0.34, 0.0, @math.PI * 2.0)
    ctx.fill()
    ctx.strokeStyle("rgba(255,255,255,0.35)")
    ctx.lineWidth(@cmp.maximum(1.0, ear_r * 0.08))
    ctx.beginPath()
    ctx.arc(ex, ey, ear_r * 0.34, -@math.PI * 0.2, @math.PI * 0.4)
    ctx.stroke()
  }

  // 瓶身玻璃
  round_rect(ctx, body_left, body_top, body_w, body_h, body_r)
  let glass = ctx.createLinearGradient(
    body_left,
    body_top,
    body_left,
    body_top + body_h,
  )
  glass.addColorStop(0.0, "rgba(160,220,255,0.55)")
  glass.addColorStop(1.0, "rgba(100,170,230,0.55)")
  ctx.fillStyle(glass)
  ctx.fill()
  ctx.strokeStyle("rgba(30,100,170,0.9)")
  ctx.lineWidth(@cmp.maximum(1.2, 1.6 * lvl_scale))
  ctx.stroke()

  // 液体
  let liq_top = body_top + body_h * (0.42 - 0.03 * @math.sin(t * 3.0))
  let liq_left = body_left + body_w * 0.06
  let liq_w = body_w * 0.88
  let liq_h = body_h * 0.46
  let liq_r = body_r * 0.55
  ctx.save()
  round_rect(ctx, liq_left, liq_top, liq_w, liq_h, liq_r)
  let liq_g = ctx.createLinearGradient(
    liq_left,
    liq_top,
    liq_left,
    liq_top + liq_h,
  )
  liq_g.addColorStop(0.0, "rgba(120,210,255,0.85)")
  liq_g.addColorStop(1.0, "rgba(60,170,240,0.9)")
  ctx.fillStyle(liq_g)
  ctx.fill()
  ctx.restore()

  // 玻璃高光
  ctx.save()
  ctx.globalAlpha(0.35 + 0.15 * pulse)
  ctx.fillStyle("#FFFFFF")
  ctx.beginPath()
  ctx.ellipse(
    body_left + body_w * (0.18 + 0.02 * pulse),
    body_top + body_h * 0.28,
    body_w * 0.08,
    body_h * 0.34,
    rad(-12.0),
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()

  // 瓶颈
  round_rect(ctx, neck_x, neck_y, neck_w, neck_h, neck_w * 0.25)
  let neck_g = ctx.createLinearGradient(neck_x, neck_y, neck_x, neck_y + neck_h)
  neck_g.addColorStop(0.0, "#AED3FF")
  neck_g.addColorStop(1.0, "#76AEEE")
  ctx.fillStyle(neck_g)
  ctx.fill()
  ctx.strokeStyle("rgba(30,100,170,0.9)")
  ctx.lineWidth(@cmp.maximum(1.0, 1.2 * lvl_scale))
  ctx.stroke()

  // ===== 上下瓶盖：严格对称 =====
  let top_cap_cx = x
  let top_cap_cy = neck_y - cap_attach
  let bottom_cap_cx = x
  let bottom_cap_cy = body_top + body_h + cap_attach

  // 投影
  ctx.save()
  ctx.globalAlpha(0.20)
  ctx.fillStyle("#000")
  ctx.beginPath()
  ctx.ellipse(
    top_cap_cx,
    top_cap_cy + cap_body_h * 0.85,
    cap_rx * 0.92,
    cap_ry * 0.58,
    0.0,
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(
    bottom_cap_cx,
    bottom_cap_cy + cap_body_h * 0.85,
    cap_rx * 0.92,
    cap_ry * 0.58,
    0.0,
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()
  draw_cap(
    ctx, top_cap_cx, top_cap_cy, cap_rx, cap_ry, cap_body_h, pulse, lvl_scale,
  )
  draw_cap(
    ctx, bottom_cap_cx, bottom_cap_cy, cap_rx, cap_ry, cap_body_h, pulse, lvl_scale,
  )

  // 绑带：同样对称
  draw_band(
    ctx,
    top_cap_cx,
    top_cap_cy + cap_body_h * 0.45,
    x,
    neck_y + neck_h * 0.15,
    lvl_scale,
  )
  draw_band(
    ctx,
    bottom_cap_cx,
    bottom_cap_cy,
    x,
    body_top + body_h - body_r * 0.6,
    lvl_scale,
  )

  // ===== 星星：在瓶身"内侧安全区"内，且跟随旋转 =====
  let star_count = clamp(@math.round(level), 1.0, 3.0).to_int()

  // 安全区（避免越过圆角/边框）
  let pad_x = @cmp.maximum(body_w * 0.12, body_r * 0.7)
  let pad_y = @cmp.maximum(body_h * 0.12, body_r * 0.7)
  let safe_l = body_left + pad_x
  let safe_t = body_top + pad_y
  let safe_w = body_w - pad_x * 2.0
  let safe_h = body_h - pad_y * 2.0

  // 星星大小：受宽度与高度两侧限制
  let gap_k = 0.6 // 星与星之间空隙系数（gap = gapK * R）
  let width_limit_r = safe_w /
    (2.0 * star_count.to_double() + gap_k * (star_count.to_double() - 1.0))
  let height_limit_r = safe_h / 2.0 // 竖直不能超出安全区
  let mut star_r = @cmp.minimum(width_limit_r, height_limit_r)
  star_r = @cmp.maximum(star_r, 2.4) // 防止太小
  let r_inner = star_r * 0.48
  let gap = star_r * gap_k
  let row_w = star_count.to_double() * (2.0 * star_r) +
    (star_count.to_double() - 1.0) * gap
  let mut sx = safe_l + (safe_w - row_w) / 2.0 + star_r // 居中
  // 垂直居中并夹取
  let mut sy = safe_t + safe_h * 0.55
  sy = clamp(sy, safe_t + star_r, safe_t + safe_h - star_r)
  for i = 0; i < star_count; i = i + 1 {
    // 投影
    ctx.save()
    ctx.globalAlpha(0.22)
    ctx.fillStyle("#000")
    ctx.beginPath()
    ctx.ellipse(
      sx,
      sy + star_r * 0.62,
      star_r * 0.9,
      star_r * 0.35,
      0.0,
      0.0,
      @math.PI * 2.0,
    )
    ctx.fill()
    ctx.restore()

    // 星形
    let g = ctx.createLinearGradient(sx, sy - star_r, sx, sy + star_r)
    g.addColorStop(0.0, "#FFF2A6")
    g.addColorStop(0.55, "#FFD052")
    g.addColorStop(1.0, "#E89B2F")
    ctx.fillStyle(g)
    ctx.strokeStyle("rgba(140,70,8,0.6)")
    ctx.lineWidth(@cmp.maximum(0.8, 1.0 * lvl_scale))
    draw_star_path(ctx, sx, sy, star_r, r_inner, rad)
    ctx.fill()
    ctx.stroke()

    // 高光
    ctx.save()
    ctx.globalAlpha(0.55)
    ctx.fillStyle("#FFFFFF")
    ctx.beginPath()
    ctx.ellipse(
      sx - star_r * 0.15,
      sy - star_r * 0.25,
      star_r * 0.35,
      star_r * 0.22,
      rad(-15.0),
      0.0,
      @math.PI * 2.0,
    )
    ctx.fill()
    ctx.restore()
    sx += 2.0 * star_r + gap
  }

  // 退出旋转坐标系
  ctx.restore()
}

///|
fn draw_cap(
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  cap_rx : Double,
  cap_ry : Double,
  cap_body_h : Double,
  pulse : Double,
  lvl_scale : Double,
) -> Unit {
  // 侧壁
  let g = ctx.createLinearGradient(cx, cy, cx, cy + cap_body_h)
  g.addColorStop(0.0, "#FFD372")
  g.addColorStop(0.55, "#FFB34C")
  g.addColorStop(1.0, "#E68A2B")
  ctx.save()
  ctx.fillStyle(g)
  ctx.beginPath()
  ctx.moveTo(cx - cap_rx, cy)
  ctx.lineTo(cx - cap_rx, cy + cap_body_h)
  ctx.ellipse(
    cx,
    cy + cap_body_h,
    cap_rx,
    cap_ry,
    0.0,
    @math.PI,
    0.0,
    counterclockwise=false,
  )
  ctx.lineTo(cx + cap_rx, cy)
  ctx.ellipse(cx, cy, cap_rx, cap_ry, 0.0, 0.0, @math.PI, counterclockwise=true)
  ctx.closePath()
  ctx.fill()

  // 顶圈描边 + 高光
  ctx.strokeStyle("rgba(140,70,8,0.85)")
  ctx.lineWidth(@cmp.maximum(1.0, 1.2 * lvl_scale))
  ctx.beginPath()
  ctx.ellipse(cx, cy, cap_rx, cap_ry, 0.0, 0.0, @math.PI * 2.0)
  ctx.stroke()
  ctx.globalAlpha(0.65)
  ctx.strokeStyle("rgba(255,255,255,0.7)")
  ctx.lineWidth(@cmp.maximum(0.8, 1.0 * lvl_scale))
  ctx.beginPath()
  ctx.ellipse(cx, cy, cap_rx * 0.86, cap_ry * 0.68, 0.0, 0.0, @math.PI * 2.0)
  ctx.stroke()
  ctx.globalAlpha(0.5 + 0.2 * pulse)
  ctx.fillStyle("#FFFFFF")
  ctx.beginPath()
  ctx.ellipse(
    cx - cap_rx * 0.35,
    cy - cap_ry * 0.05,
    cap_rx * 0.34,
    cap_ry * 0.48,
    -0.2,
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()
}

///|
fn draw_band(
  ctx : @Core.CanvasRenderingContext2D,
  sx : Double,
  sy : Double,
  ex : Double,
  ey : Double,
  lvl_scale : Double,
) -> Unit {
  ctx.save()
  let bw = @cmp.maximum(1.0, 1.2 * lvl_scale)
  ctx.strokeStyle("rgba(210,220,240,0.95)")
  ctx.lineWidth(bw)
  ctx.lineCap("round")
  ctx.beginPath()
  ctx.moveTo(sx, sy)
  ctx.quadraticCurveTo((sx + ex) / 2.0, (sy + ey) / 2.0, ex, ey)
  ctx.stroke()
  ctx.fillStyle("rgba(230,240,255,0.95)")
  let points = [(sx, sy), (ex, ey)]
  for point in points {
    let (px, py) = point
    ctx.beginPath()
    ctx.arc(px, py, bw * 0.9, 0.0, @math.PI * 2.0)
    ctx.fill()
  }
  ctx.restore()
}

///|
fn draw_star_path(
  ctx : @Core.CanvasRenderingContext2D,
  cx : Double,
  cy : Double,
  star_r : Double,
  r_inner : Double,
  rad : (Double) -> Double,
) -> Unit {
  ctx.beginPath()
  for i = 0; i < 10; i = i + 1 {
    let a = rad(-90.0) + i.to_double() * @math.PI / 5.0
    let rr = if i % 2 == 0 { star_r } else { r_inner }
    let px = cx + @math.cos(a) * rr
    let py = cy + @math.sin(a) * rr
    if i == 0 {
      ctx.moveTo(px, py)
    } else {
      ctx.lineTo(px, py)
    }
  }
  ctx.closePath()
}

///|
fn round_rect(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  width : Double,
  height : Double,
  radius : Double,
) -> Unit {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
}
