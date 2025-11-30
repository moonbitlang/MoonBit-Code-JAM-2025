///|
pub struct LightningTowerRender {}

///|
pub fn LightningTowerRender::new() -> LightningTowerRender {
  LightningTowerRender::{  }
}

///|
let lightningTowerRenderInstance : Ref[LightningTowerRender?] = Ref::new(None)

///|
pub let lightningTowerRenderSingleton : LightningTowerRender = LightningTowerRender::get_instance()

///|
pub fn LightningTowerRender::get_instance() -> LightningTowerRender {
  match lightningTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = LightningTowerRender::new()
      lightningTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn LightningTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  ignore(aimDeg)
  let rad = (d : Double) => d * @math.PI / 180
  let clamp = (v : Double, lo : Double, hi : Double) => @cmp.maximum(
    lo,
    @cmp.minimum(hi, v),
  )
  let lvlScale = 1.0 + 0.08 * clamp(level - 1, 0, 2)

  // 底座
  let baseR = @cmp.minimum(gs * 0.4, 30) * lvlScale
  let innerR = baseR * 0.7
  ignore(innerR)

  // 地面阴影
  ctx.save()
  ctx.globalAlpha(0.22)
  ctx.fillStyle("#000")
  ctx.beginPath()
  ctx.ellipse(x, y + baseR * 0.3, baseR * 0.6, baseR * 0.2, 0, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()

  // 底座圆盘
  ctx.save()
  let gBase = ctx.createRadialGradient(x, y, 0, x, y, baseR)
  gBase.addColorStop(0, "#8A2BE2")
  gBase.addColorStop(1, "#4B0082")
  ctx.fillStyle(gBase)
  ctx.beginPath()
  ctx.arc(x, y, baseR, 0, @math.PI * 2)
  ctx.fill()
  ctx.strokeStyle("#2E0854")
  ctx.lineWidth(2)
  ctx.stroke()
  ctx.restore()

  // 能量球
  ctx.save()
  let orbR = baseR * 0.5
  let orbY = y - baseR * 0.3
  let pulse = 0.6 + 0.4 * @math.sin(time / 1000 * 5)
  ctx.fillStyle("rgba(180,130,255,\{pulse})")
  ctx.beginPath()
  ctx.arc(x, orbY, orbR, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()

  // 闪电环
  ctx.save()
  ctx.translate(x, orbY)
  ctx.rotate(rad(time * 0.2))
  ctx.strokeStyle("#E0B0FF")
  ctx.lineWidth(2)
  ctx.beginPath()
  let ringR = orbR * 1.3
  for i = 0; i < 6; i = i + 1 {
    let a = i.to_double() / 6 * @math.PI * 2
    let lx = @math.cos(a) * ringR
    let ly = @math.sin(a) * ringR
    if i == 0 {
      ctx.moveTo(lx, ly)
    } else {
      ctx.lineTo(lx, ly)
    }
  }
  ctx.closePath()
  ctx.stroke()
  ctx.restore()

  // 放电火花
  ctx.save()
  let sparkY = y + baseR * 0.4
  for i = 0; i < 3; i = i + 1 {
    let offset = @math.sin(time / 200 + i.to_double()) * 4
    ctx.fillStyle("#C9BFFF")
    ctx.beginPath()
    ctx.arc(x + offset, sparkY + i.to_double() * 3, 1.5, 0, @math.PI * 2)
    ctx.fill()
  }
  ctx.restore()

  // 攻击动画：闪电链
  // 使用时间戳来控制攻击动画的触发
  // let attack_phase = time / 500 % 2.0
  // if attack_phase < 1.0 { // 攻击阶段
  //   ctx.save()
  //   ctx.globalCompositeOperation("lighter")
  //   ctx.strokeStyle("#FFD700")
  //   ctx.lineWidth(3)
  //   ctx.lineCap("round")
  //   ctx.lineJoin("round")

  //   // 生成闪电路径
  //   let target_x = x + @math.sin(time / 300) * 80
  //   let target_y = y + @math.cos(time / 300) * 80

  //   // 主闪电路径
  //   ctx.beginPath()
  //   ctx.moveTo(x, y)

  //   // 添加随机偏移的折线来模拟闪电
  //   let steps = 6
  //   let mut last_x = x
  //   let mut last_y = y
  //   for i = 1; i < steps; i = i + 1 {
  //     let t = i.to_double() / steps.to_double()
  //     let next_x = x +
  //       (target_x - x) * t +
  //       @math.sin(time / 100 + i.to_double() * 2) * 15
  //     let next_y = y +
  //       (target_y - y) * t +
  //       @math.cos(time / 100 + i.to_double() * 2) * 15
  //     ctx.quadraticCurveTo(
  //       last_x +
  //       (next_x - last_x) * 0.5 +
  //       @math.sin(time / 150 + i.to_double()) * 10,
  //       last_y +
  //       (next_y - last_y) * 0.5 +
  //       @math.cos(time / 150 + i.to_double()) * 10,
  //       next_x,
  //       next_y,
  //     )
  //     last_x = next_x
  //     last_y = next_y
  //   }
  //   ctx.stroke()

  //   // 添加分支闪电
  //   ctx.strokeStyle("#B0E0E6")
  //   ctx.lineWidth(2)
  //   for branch = 0; branch < 3; branch = branch + 1 {
  //     ctx.beginPath()
  //     ctx.moveTo(
  //       x + @math.sin(time / 200 + branch.to_double()) * 10,
  //       y + @math.cos(time / 200 + branch.to_double()) * 10,
  //     )
  //     let bx = x + @math.sin(time / 200 + branch.to_double() * 1.5) * 40
  //     let by = y + @math.cos(time / 200 + branch.to_double() * 1.5) * 40
  //     ctx.quadraticCurveTo(
  //       x + (bx - x) * 0.5 + @math.sin(time / 180 + branch.to_double()) * 8,
  //       y + (by - y) * 0.5 + @math.cos(time / 180 + branch.to_double()) * 8,
  //       bx,
  //       by,
  //     )
  //     ctx.stroke()
  //   }
  //   ctx.restore()
  // }
}
