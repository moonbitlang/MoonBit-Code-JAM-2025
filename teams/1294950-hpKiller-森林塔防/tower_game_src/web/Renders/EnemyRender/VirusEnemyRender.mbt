///|
/// move to VirusEnemy.mbt
// pub(all) struct DivideAnimation {
//   x1 : Double
//   y1 : Double
//   x2 : Double
//   y2 : Double
//   x3 : Double
//   y3 : Double
//   mut start_time : Double
//   mut total_time : Double
// }

///|
pub(all) struct VirusEnemyRender {
  // mut current_divide_animation : @Enemy.DivideAnimation
}

///|
pub fn VirusEnemyRender::new() -> VirusEnemyRender {
  VirusEnemyRender::{  }
}

///|
let virusEnemyRenderInstance : Ref[VirusEnemyRender?] = Ref::new(None)

///|
pub let virusEnemyRenderSingleton : VirusEnemyRender = VirusEnemyRender::get_instance()

///|
pub fn VirusEnemyRender::get_instance() -> VirusEnemyRender {
  match virusEnemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = VirusEnemyRender::new()
      virusEnemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|

///|
pub fn VirusEnemyRender::render(
  self : VirusEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
  timestamp : Double,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(gs)
  ignore(self)
  ignore(show_health_bar)
  // 首先检查是否有正在进行的分裂动画
  if e.render_small_size() {
    for d in @Enemy.divide_effects.val {
      if d.finished && (d.enemy_id1 == e.id() || d.enemy_id2 == e.id()) {
        // println("\{e.id()} render small")
        // println("id1: \{d.enemy_id1} ")
        // println("id2: \{d.enemy_id2} ")
        self.render_normal_size(ctx, e, timestamp, show_health_bar)
      } else if !d.finished {
        // println("\{e.id()} render divide")
        // println("id1: \{d.enemy_id1} ")
        // println("id2: \{d.enemy_id2} ")
        self.render_divide(ctx, e, timestamp)
      }
    }
  } else {
    // println("\{e.id()} render normal")
    // println("id1: \{d.enemy_id1} ")
    // println("id2: \{d.enemy_id2} ")
    self.render_normal_size(ctx, e, timestamp, show_health_bar)
  }

  // 绘制正常大小
  // if !e.render_small_size() {
  // }
}

///|
// let has_render_divide_emenies : Ref[Array[Int]] = Ref::new([])

///|
pub fn VirusEnemyRender::render_divide(
  self : VirusEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  _e : &@Enemy.Enemy,
  // gs : Double,
  timestamp : Double,
) -> Unit {
  ignore(self)
  // let mut has_active_split = false
  for divide_animation in @Enemy.divide_effects.val {
    // divide_animation = divide_animation
    if divide_animation.start_time >= 0.0 {
      // has_active_split = true
      // println("...")
      let elapsed = timestamp - divide_animation.start_time
      let continue_anim = renderVirusSplitAnimation(
        ctx,
        divide_animation.x1,
        divide_animation.y1,
        divide_animation.x2,
        divide_animation.y2,
        divide_animation.x3,
        divide_animation.y3,
        elapsed,
        divide_animation.total_time,
        timestamp,
      )
      if !continue_anim {
        // 动画结束，重置状态
        divide_animation.start_time = -1.0
        // has_active_split = false
        divide_animation.finished = true
        // println(@Enemy.divide_effects.val.length())
        // @Enemy.divide_effects.val = @Enemy.divide_effects.val.filter(e => !e.finished)
        // println(@Enemy.divide_effects.val.length())
      }
    }
  }
  // if !has_active_split {
  //   let small = e.render_small_size()
  //   let s = if small { 20.0 } else { 36.0 }
  //   let r = s * (@math.sin(timestamp * 0.002).abs() * 0.2 + 0.8)
  //   ctx.save()
  //   let x = e.position().x
  //   let y = e.position().y

  //   // 病毒主体
  //   let body = ctx.createRadialGradient(
  //     x - r * 0.35,
  //     y - r * 0.35,
  //     r * 0.2,
  //     x,
  //     y,
  //     r,
  //   )
  //   body.addColorStop(0, "#FFECB3")
  //   body.addColorStop(1, "#EF6C00")
  //   ctx.fillStyle(body)
  //   ctx.beginPath()
  //   ctx.arc(x, y, r, 0, @math.PI * 2)
  //   ctx.fill()

  //   // 安全帽
  //   ctx.fillStyle("#FFD54F")
  //   ctx.beginPath()
  //   ctx.ellipse(x, y - r * 0.55, r * 0.7, r * 0.45, 0, 0, @math.PI * 2)
  //   ctx.fill()
  //   ctx.strokeStyle("rgba(0,0,0,0.2)")
  //   ctx.stroke()

  //   // 链锯（右下方一个半圆齿圈）
  //   let sawR = r * 0.95
  //   ctx.save()
  //   ctx.translate(x, y)
  //   ctx.rotate(@math.PI / 6)
  //   ctx.strokeStyle("#B0BEC5")
  //   ctx.lineWidth(3)
  //   ctx.beginPath()
  //   // ctx.arc(0, 0, sawR, 0.2 * @math.PI, 0.95 * @math.PI)
  //   ctx.arc(0, 0, sawR, 0, 2 * @math.PI)
  //   ctx.stroke()

  //   // 锯齿
  //   ctx.fillStyle("#CFD8DC")
  //   let teeth = 36
  //   let rotation = timestamp * 0.001
  //   for i in 0..<teeth {
  //     // 均匀分布在 0 到 2π 的完整圆周上
  //     let a = i.to_double() / teeth.to_double() * (2 * @math.PI) + rotation
  //     let rx = @math.cos(a) * sawR
  //     let ry = @math.sin(a) * sawR
  //     ctx.beginPath()
  //     ctx.moveTo(rx, ry)
  //     ctx.lineTo(rx + @math.cos(a) * 5, ry + @math.sin(a) * 5)
  //     ctx.lineTo(rx + @math.cos(a + 0.2) * 4, ry + @math.sin(a + 0.2) * 4)
  //     ctx.closePath()
  //     ctx.fill()
  //   }
  //   ctx.restore()

  //   // 围裙/带子
  //   ctx.strokeStyle("rgba(0,0,0,0.25)")
  //   ctx.beginPath()
  //   ctx.moveTo(x - r * 0.8, y)
  //   ctx.lineTo(x + r * 0.8, y)
  //   ctx.stroke()
  //   // let clamp = (v : Double, lo : Double, hi : Double) => @cmp.maximum(
  //   //   lo,
  //   //   @cmp.minimum(hi, v),
  //   // )
  //   // let flashAlpha = (timerMs : Double, total : Double) => clamp(
  //   //   timerMs / total,
  //   //   0,
  //   //   1,
  //   // )

  //   // 轻微高光
  //   // 这个可以用来做一个提示OK
  //   // ctx.globalAlpha(0.25 + 0.25 * @math.sin(timestamp * 0.006)) // Pulsating highlight
  //   ctx.globalAlpha(0.5)
  //   ctx.fillStyle("#FFF")
  //   ctx.beginPath()
  //   ctx.ellipse(
  //     x - r * 0.35,
  //     y - r * 0.2,
  //     r * 0.55,
  //     r * 0.35,
  //     -0.45,
  //     0,
  //     @math.PI * 2,
  //   )
  //   ctx.fill()
  //   ctx.restore()
  // }
}

///|
pub fn VirusEnemyRender::render_normal_size(
  self : VirusEnemyRender,
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  // gs : Double,
  timestamp : Double,
  show_health_bar : Bool,
) -> Unit {
  ignore(self)
  let small = e.render_small_size()
  let s = if small { 20.0 } else { 36.0 }
  let r = s * (@math.sin(timestamp * 0.002).abs() * 0.2 + 0.8)
  ctx.save()
  let x = e.position().x
  let y = e.position().y

  // 病毒主体
  let body = ctx.createRadialGradient(
    x - r * 0.35,
    y - r * 0.35,
    r * 0.2,
    x,
    y,
    r,
  )
  body.addColorStop(0, "#FFECB3")
  body.addColorStop(1, "#EF6C00")
  ctx.fillStyle(body)
  ctx.beginPath()
  ctx.arc(x, y, r, 0, @math.PI * 2)
  ctx.fill()

  // 安全帽
  ctx.fillStyle("#FFD54F")
  ctx.beginPath()
  ctx.ellipse(x, y - r * 0.55, r * 0.7, r * 0.45, 0, 0, @math.PI * 2)
  ctx.fill()
  ctx.strokeStyle("rgba(0,0,0,0.2)")
  ctx.stroke()

  // 链锯（右下方一个半圆齿圈）
  let sawR = r * 0.95
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(@math.PI / 6)
  ctx.strokeStyle("#B0BEC5")
  ctx.lineWidth(3)
  ctx.beginPath()
  // ctx.arc(0, 0, sawR, 0.2 * @math.PI, 0.95 * @math.PI)
  ctx.arc(0, 0, sawR, 0, 2 * @math.PI)
  ctx.stroke()

  // 锯齿
  ctx.fillStyle("#CFD8DC")
  let teeth = 36
  let rotation = timestamp * 0.001
  for i in 0..<teeth {
    // 均匀分布在 0 到 2π 的完整圆周上
    let a = i.to_double() / teeth.to_double() * (2 * @math.PI) + rotation
    let rx = @math.cos(a) * sawR
    let ry = @math.sin(a) * sawR
    ctx.beginPath()
    ctx.moveTo(rx, ry)
    ctx.lineTo(rx + @math.cos(a) * 5, ry + @math.sin(a) * 5)
    ctx.lineTo(rx + @math.cos(a + 0.2) * 4, ry + @math.sin(a + 0.2) * 4)
    ctx.closePath()
    ctx.fill()
  }
  ctx.restore()

  // 围裙/带子
  ctx.strokeStyle("rgba(0,0,0,0.25)")
  ctx.beginPath()
  ctx.moveTo(x - r * 0.8, y)
  ctx.lineTo(x + r * 0.8, y)
  ctx.stroke()
  // let clamp = (v : Double, lo : Double, hi : Double) => @cmp.maximum(
  //   lo,
  //   @cmp.minimum(hi, v),
  // )
  // let flashAlpha = (timerMs : Double, total : Double) => clamp(
  //   timerMs / total,
  //   0,
  //   1,
  // )

  // 轻微高光
  // 这个可以用来做一个提示OK
  // ctx.globalAlpha(0.25 + 0.25 * @math.sin(timestamp * 0.006)) // Pulsating highlight
  ctx.globalAlpha(0.5)
  ctx.fillStyle("#FFF")
  ctx.beginPath()
  ctx.ellipse(
    x - r * 0.35,
    y - r * 0.2,
    r * 0.55,
    r * 0.35,
    -0.45,
    0,
    @math.PI * 2,
  )
  ctx.fill()
  ctx.restore()
  if show_health_bar {
    @UIComposeRender.draw_enemy_health_bar(e)
  }
}

///|
pub fn renderVirusSplitAnimation(
  ctx : @Core.CanvasRenderingContext2D,
  x1 : Double,
  y1 : Double,
  x2 : Double,
  y2 : Double,
  x3 : Double,
  y3 : Double,
  elapsed : Double, // 已经过的时间（毫秒）
  totalTime : Double, // 总动画时间（毫秒）
  timestamp : Double,
) -> Bool {
  if elapsed >= totalTime {
    return false // 动画结束，不再绘制
  }
  let t = @cmp.minimum(elapsed / totalTime, 1.0)

  // 缓动函数（可选，让动画更自然）
  let ease_t = t * t * (3.0 - 2.0 * t) // smoothstep

  // 子病毒1：从 (x1,y1) → (x2,y2)
  let pos1_x = x1 + (x2 - x1) * ease_t
  let pos1_y = y1 + (y2 - y1) * ease_t

  // 子病毒2：从 (x1,y1) → (x3,y3)
  let pos2_x = x1 + (x3 - x1) * ease_t
  let pos2_y = y1 + (y3 - y1) * ease_t

  // 缩放：从 0 → 正常大小（比如 36）
  let baseSize = 20.0
  let currentSize = baseSize * ease_t

  // 透明度：从 0 → 1
  let alpha = ease_t
  ctx.save()

  // 绘制第一个子病毒（简化版，复用部分 render 逻辑）
  drawMiniVirus(ctx, pos1_x, pos1_y, currentSize, alpha, timestamp)
  drawMiniVirus(ctx, pos2_x, pos2_y, currentSize, alpha, timestamp)

  // 可选：添加分裂光线或粒子
  drawSplitEffect(ctx, x1, y1, pos1_x, pos1_y, pos2_x, pos2_y, t)
  ctx.restore()
  return true // 动画仍在进行
}

///|

///|
fn drawMiniVirus(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  r : Double,
  alpha : Double,
  timestamp : Double, // 新增：用于驱动锯齿旋转
) -> Unit {
  if r <= 0.1 {
    return
  }
  ctx.save()
  ctx.globalAlpha(alpha)

  // 病毒主体
  let body = ctx.createRadialGradient(
    x - r * 0.35,
    y - r * 0.35,
    r * 0.2,
    x,
    y,
    r,
  )
  body.addColorStop(0, "#FFECB3")
  body.addColorStop(1, "#EF6C00")
  ctx.fillStyle(body)
  ctx.beginPath()
  ctx.arc(x, y, r, 0, @math.PI * 2)
  ctx.fill()

  // 安全帽
  ctx.fillStyle("#FFD54F")
  ctx.beginPath()
  ctx.ellipse(x, y - r * 0.55, r * 0.7, r * 0.45, 0, 0, @math.PI * 2)
  ctx.fill()
  ctx.strokeStyle("rgba(0,0,0,0.2)")
  ctx.stroke()

  // 链锯（右下方一个半圆齿圈）
  let sawR = r * 0.95
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(@math.PI / 6)
  ctx.strokeStyle("#B0BEC5")
  ctx.lineWidth(3)
  ctx.beginPath()
  ctx.arc(0, 0, sawR, 0, 2 * @math.PI)
  ctx.stroke()

  // 锯齿
  ctx.fillStyle("#CFD8DC")
  let teeth = 36
  let rotation = timestamp * 0.001
  for i in 0..<teeth {
    let a = i.to_double() / teeth.to_double() * (2 * @math.PI) + rotation
    let rx = @math.cos(a) * sawR
    let ry = @math.sin(a) * sawR
    ctx.beginPath()
    ctx.moveTo(rx, ry)
    ctx.lineTo(rx + @math.cos(a) * 5, ry + @math.sin(a) * 5)
    ctx.lineTo(rx + @math.cos(a + 0.2) * 4, ry + @math.sin(a + 0.2) * 4)
    ctx.closePath()
    ctx.fill()
  }
  ctx.restore()

  // 围裙/带子
  ctx.strokeStyle("rgba(0,0,0,0.25)")
  ctx.beginPath()
  ctx.moveTo(x - r * 0.8, y)
  ctx.lineTo(x + r * 0.8, y)
  ctx.stroke()

  // 高光
  ctx.globalAlpha(alpha * 0.5)
  ctx.fillStyle("#FFF")
  ctx.beginPath()
  ctx.ellipse(
    x - r * 0.35,
    y - r * 0.2,
    r * 0.55,
    r * 0.35,
    -0.45,
    0,
    @math.PI * 2,
  )
  ctx.fill()
  ctx.restore()
}

///|
fn drawSplitEffect(
  ctx : @Core.CanvasRenderingContext2D,
  originX : Double,
  originY : Double,
  target1X : Double,
  target1Y : Double,
  target2X : Double,
  target2Y : Double,
  t : Double,
) -> Unit {
  let intensity = 1.0 - t
  if intensity <= 0.01 {
    return
  }
  ctx.save()

  // === 1. 中心脉冲光晕 ===
  let pulseRadius = 40.0 * intensity
  let pulseAlpha = intensity * 0.7
  let pulseGradient = ctx.createRadialGradient(
    originX, originY, 0, originX, originY, pulseRadius,
  )
  pulseGradient.addColorStop(
    0,
    "rgba(255, 220, 100, " + pulseAlpha.to_string() + ")",
  )
  pulseGradient.addColorStop(1, "rgba(255, 180, 0, 0)")
  ctx.fillStyle(pulseGradient)
  ctx.beginPath()
  ctx.arc(originX, originY, pulseRadius, 0, @math.PI * 2)
  ctx.fill()

  // === 2. 发光光线（多层模拟 glow）===
  let baseWidth = 4.0 + 12.0 * intensity
  for i in 0..<3 {
    let offsetAlpha = pulseAlpha * (0.6 - i.to_double() * 0.2)
    if offsetAlpha <= 0 {
      continue
    }
    let width = baseWidth + i.to_double() * 3.0
    ctx.lineWidth(width)
    ctx.strokeStyle("rgba(255, 200, 0, " + offsetAlpha.to_string() + ")")

    // 光线1
    ctx.beginPath()
    ctx.moveTo(originX, originY)
    ctx.lineTo(target1X, target1Y)
    ctx.stroke()

    // 光线2
    ctx.beginPath()
    ctx.moveTo(originX, originY)
    ctx.lineTo(target2X, target2Y)
    ctx.stroke()
  }

  // === 3. 粒子效果（简单模拟）===
  let particleCount = 12
  let particleLife = intensity // 0~1
  for i in 0..<particleCount {
    let angle = i.to_double() / particleCount.to_double() * (2 * @math.PI)
    let dist = 30.0 * (1.0 - t) // 粒子向外飞
    let px = originX + @math.cos(angle) * dist
    let py = originY + @math.sin(angle) * dist
    let size = 3.0 * particleLife
    let pAlpha = particleLife * 0.8
    ctx.fillStyle("rgba(255, 230, 150, " + pAlpha.to_string() + ")")
    ctx.beginPath()
    ctx.arc(px, py, size, 0, @math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}
