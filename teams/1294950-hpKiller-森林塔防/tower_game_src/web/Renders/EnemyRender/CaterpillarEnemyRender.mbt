///|
pub struct CaterpillarEnemyRender {}

///|
pub fn CaterpillarEnemyRender::new() -> CaterpillarEnemyRender {
  CaterpillarEnemyRender::{  }
}

///|
let caterpillarEnemyRenderInstance : Ref[CaterpillarEnemyRender?] = Ref::new(
  None,
)

///|
pub let caterpillarEnemyRenderSingleton : CaterpillarEnemyRender = CaterpillarEnemyRender::get_instance()

///|
pub fn CaterpillarEnemyRender::get_instance() -> CaterpillarEnemyRender {
  match caterpillarEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = CaterpillarEnemyRender::new()
      caterpillarEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn CaterpillarEnemyRender::render_enemy(
  self : CaterpillarEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
  timestamp : Double,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(self)

  // 将 timestamp（毫秒）转为秒，用于平滑动画
  let time_sec = timestamp / 1000.0
  let x = e.position().x
  let y = e.position().y
  let w = gs * 0.78
  let h = 4.0
  let bx = x - w / 2
  let by = y - gs / 2 - 9
  let base_r = @cmp.minimum(gs * 0.45, 18)
  ctx.save()

  // 毛毛虫参数
  let segments = 4
  let segment_spacing = base_r * 0.9
  let max_offset = base_r * 0.3
  let wave_speed = 0.02
  let wave_amplitude = 0.4

  // 绘制身体节段（从尾到头）
  for i in 0..<segments {
    let progress = i.to_double() / (segments - 1).to_double()
    let seg_r = base_r * (0.7 + 0.3 * progress) // 头部稍大
    let offset_x = x - (segments - 1 - i).to_double() * segment_spacing
    // 蠕动偏移：正弦波沿身体传播
    let phase = timestamp * wave_speed + i.to_double() * 0.8
    let wiggle = @math.sin(phase) * wave_amplitude * max_offset
    let draw_x = offset_x + wiggle
    let draw_y = y + @math.sin(phase * 0.7) * (max_offset * 0.3) // 轻微上下波动

    // 身体颜色：绿色系
    let body_color = "#4CAF50"
    ctx.fillStyle(body_color)
    ctx.beginPath()
    ctx.ellipse(draw_x, draw_y, seg_r, seg_r * 0.7, 0, 0, @math.PI * 2)
    ctx.fill()

    // 轻微描边
    ctx.strokeStyle("rgba(0, 100, 0, 0.3)")
    ctx.stroke()
  }

  // 绘制头部（最前面一节）
  let head_x = x
  let head_y = y
  let head_r = base_r * 1.1
  let head_gradient = ctx.createRadialGradient(
    head_x - head_r * 0.2,
    head_y - head_r * 0.2,
    0,
    head_x,
    head_y,
    head_r,
  )
  head_gradient.addColorStop(0, "#81C784")
  head_gradient.addColorStop(1, "#388E3C")
  ctx.fillStyle(head_gradient)
  ctx.beginPath()
  ctx.ellipse(head_x, head_y, head_r, head_r * 0.8, 0, 0, @math.PI * 2)
  ctx.fill()

  // === 带动画的眼睛绘制（根据血量状态） ===
  let healthWidth = e.health() / e.max_health()
  let eye_r = head_r * 0.2
  let eye_offset_x = head_r * 0.4
  let eye_offset_y = head_r * 0.2
  let left_eye_x = head_x - eye_offset_x
  let right_eye_x = head_x + eye_offset_x
  let eye_y = head_y - eye_offset_y
  if healthWidth > 0.5 {
    // 正常眼睛：静态
    ctx.fillStyle("#FFF")
    ctx.beginPath()
    ctx.arc(left_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.arc(right_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.fill()
    ctx.fillStyle("#000")
    let pupil_r = eye_r * 0.5
    ctx.beginPath()
    ctx.arc(left_eye_x, eye_y, pupil_r, 0, @math.PI * 2)
    ctx.arc(right_eye_x, eye_y, pupil_r, 0, @math.PI * 2)
    ctx.fill()
  } else if healthWidth > 0.25 {
    // 受伤眼睛：红色描边 + 颤抖瞳孔
    ctx.fillStyle("#FFF")
    ctx.beginPath()
    ctx.arc(left_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.arc(right_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.fill()

    // 红色疼痛描边
    ctx.strokeStyle("#FF5252")
    ctx.lineWidth(2.0)
    ctx.beginPath()
    ctx.arc(left_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.arc(right_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.stroke()
    ctx.lineWidth(1.0) // 恢复默认线宽

    // 动态颤抖瞳孔
    let tremble_phase = time_sec * 12.0 // 12Hz 颤抖
    let tremble_scale = 0.15 + 0.1 * @math.sin(tremble_phase) // 瞳孔大小在 15%~25% 眼睛半径间波动
    let anim_pupil_r = eye_r * tremble_scale
    ctx.fillStyle("#000")
    ctx.beginPath()
    ctx.arc(left_eye_x, eye_y, anim_pupil_r, 0, @math.PI * 2)
    ctx.arc(right_eye_x, eye_y, anim_pupil_r, 0, @math.PI * 2)
    ctx.fill()
  } else {
    // 流泪眼睛：带下落动画的泪滴
    ctx.fillStyle("#FFF")
    ctx.beginPath()
    ctx.arc(left_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.arc(right_eye_x, eye_y, eye_r, 0, @math.PI * 2)
    ctx.fill()
    ctx.fillStyle("#000")
    let pupil_r = eye_r * 0.5
    ctx.beginPath()
    ctx.arc(left_eye_x, eye_y, pupil_r, 0, @math.PI * 2)
    ctx.arc(right_eye_x, eye_y, pupil_r, 0, @math.PI * 2)
    ctx.fill()

    // 泪滴下落动画（周期 1.0 秒）
    let tear_cycle = 1.0
    let phase = time_sec % tear_cycle
    let fall_progress = phase / tear_cycle // 0.0 → 1.0
    let tear_fall_distance = fall_progress * 24.0 // 下落 24 像素
    let tear_alpha = @cmp.maximum(0.2, 1.0 - fall_progress * 1.2) // 渐隐
    let tear_y = eye_y + eye_r * 1.3 + tear_fall_distance
    let tear_size = eye_r * 0.55

    // 构造带透明度的蓝色
    let tear_color = "rgba(33, 150, 243, \{tear_alpha})"
    ctx.fillStyle(tear_color)
    // 左眼泪
    ctx.beginPath()
    ctx.arc(left_eye_x, tear_y, tear_size, 0, @math.PI * 2)
    ctx.fill()
    // 右眼泪
    ctx.beginPath()
    ctx.arc(right_eye_x, tear_y, tear_size, 0, @math.PI * 2)
    ctx.fill()
  }

  // 高光（可选）
  ctx.globalAlpha(0.3)
  ctx.fillStyle("#FFFFFF")
  ctx.beginPath()
  ctx.ellipse(
    head_x - head_r * 0.3,
    head_y - head_r * 0.4,
    head_r * 0.3,
    head_r * 0.2,
    0,
    0,
    @math.PI * 2,
  )
  ctx.fill()
  ctx.globalAlpha(1.0)

  // 绘制血条
  // Background health bar
  if show_health_bar {
    ctx.save()
    ctx.strokeStyle("rgba(0,0,0,0.35)")
    ctx.beginPath()
    ctx.moveTo(bx, by)
    ctx.lineTo(bx + w, by)
    ctx.lineWidth(h)
    ctx.stroke()
    ctx.restore()

    // Health indicator
    ctx.save()
    if healthWidth > 0.5 {
      ctx.strokeStyle("#4CAF50")
    } else if healthWidth > 0.25 {
      ctx.strokeStyle("#FFC107")
    } else {
      ctx.strokeStyle("#F44336")
    }
    ctx.beginPath()
    ctx.moveTo(bx + 2, by)
    ctx.lineTo(bx + w * healthWidth - 2, by)
    ctx.lineWidth(h - 2)
    ctx.stroke()
    ctx.restore()
  }
  ctx.restore()
}

///|
pub fn CaterpillarEnemyRender::render(
  self : CaterpillarEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
  timestamp : Double,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(self)
  ctx.save()
  self.render_enemy(ctx, e, gs, timestamp, show_health_bar~)
  ctx.restore()
}

///|
#deprecated("use render ")
pub fn CaterpillarEnemyRender::render_old(
  self : CaterpillarEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
  timestamp : Double,
) -> Unit {
  ignore(self)
  let x = e.position().x
  let y = e.position().y
  let base_r = @cmp.minimum(gs * 0.45, 18)
  ctx.save()

  // 毛毛虫参数
  let segments = 4
  let segment_spacing = base_r * 0.9
  let max_offset = base_r * 0.3
  let wave_speed = 0.02
  let wave_amplitude = 0.4

  // 绘制身体节段（从尾到头）
  for i in 0..<segments {
    let progress = i.to_double() / (segments - 1).to_double()
    let seg_r = base_r * (0.7 + 0.3 * progress) // 头部稍大
    let offset_x = x - (segments - 1 - i).to_double() * segment_spacing
    // 蠕动偏移：正弦波沿身体传播
    let phase = timestamp * wave_speed + i.to_double() * 0.8
    let wiggle = @math.sin(phase) * wave_amplitude * max_offset
    let draw_x = offset_x + wiggle
    let draw_y = y + @math.sin(phase * 0.7) * (max_offset * 0.3) // 轻微上下波动

    // 身体颜色：绿色系
    let _green_val = 180.0 + 75.0 * (1.0 - progress)
    let body_color = "#4CAF50" // 或动态生成
    ctx.fillStyle(body_color)
    ctx.beginPath()
    ctx.ellipse(draw_x, draw_y, seg_r, seg_r * 0.7, 0, 0, @math.PI * 2)
    ctx.fill()

    // 轻微描边
    ctx.strokeStyle("rgba(0, 100, 0, 0.3)")
    ctx.stroke()
  }

  // 绘制头部（最前面一节）
  let head_x = x
  let head_y = y
  let head_r = base_r * 1.1
  let head_gradient = ctx.createRadialGradient(
    head_x - head_r * 0.2,
    head_y - head_r * 0.2,
    0,
    head_x,
    head_y,
    head_r,
  )
  head_gradient.addColorStop(0, "#81C784")
  head_gradient.addColorStop(1, "#388E3C")
  ctx.fillStyle(head_gradient)
  ctx.beginPath()
  ctx.ellipse(head_x, head_y, head_r, head_r * 0.8, 0, 0, @math.PI * 2)
  ctx.fill()

  // 眼睛（简化为两个白点）
  let eye_r = head_r * 0.2
  ctx.fillStyle("#FFF")
  ctx.beginPath()
  ctx.arc(head_x - head_r * 0.4, head_y - head_r * 0.2, eye_r, 0, @math.PI * 2)
  ctx.arc(head_x + head_r * 0.4, head_y - head_r * 0.2, eye_r, 0, @math.PI * 2)
  ctx.fill()
  ctx.fillStyle("#000")
  let pupil_r = eye_r * 0.5
  ctx.beginPath()
  ctx.arc(
    head_x - head_r * 0.4,
    head_y - head_r * 0.2,
    pupil_r,
    0,
    @math.PI * 2,
  )
  ctx.arc(
    head_x + head_r * 0.4,
    head_y - head_r * 0.2,
    pupil_r,
    0,
    @math.PI * 2,
  )
  ctx.fill()

  // 高光（可选）
  ctx.globalAlpha(0.3)
  ctx.fillStyle("#FFFFFF")
  ctx.beginPath()
  ctx.ellipse(
    head_x - head_r * 0.3,
    head_y - head_r * 0.4,
    head_r * 0.3,
    head_r * 0.2,
    0,
    0,
    @math.PI * 2,
  )
  ctx.fill()
  ctx.globalAlpha(1.0)
  ctx.restore()
}
