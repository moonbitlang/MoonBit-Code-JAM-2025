///|
pub fn drawButton(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  width : Double,
  height : Double,
  text? : String = "",
  icon? : String = "",
  isLarge? : Bool = false,
) -> Unit {
  ctx.save()
  // 按钮背景
  if isLarge {
    ctx.fillStyle("#FFD700")
  } else {
    ctx.fillStyle("#FFF")
  }
  ctx.shadowColor("rgba(0,0,0,0.3)")
  ctx.shadowBlur(10)
  ctx.shadowOffsetX(3)
  ctx.shadowOffsetY(3)
  if isLarge {
    drawRoundRect(ctx, x, y, width, height, 40)
    ctx.fill()
    // 添加渐变效果
    let gradient = ctx.createLinearGradient(x, y, x, y + height)
    gradient.addColorStop(0, "#FFD700")
    gradient.addColorStop(1, "#FFA500")
    ctx.fillStyle(gradient)
    drawRoundRect(ctx, x, y, width, height, 40)
    ctx.fill()

    // 添加高光
    ctx.fillStyle("rgba(255,255,255,0.3)")
    ctx.beginPath()
    ctx.moveTo(x + 40, y)
    ctx.lineTo(x + width - 40, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + 20)
    ctx.lineTo(x + width, y + 20)
    ctx.quadraticCurveTo(x + width, y + 20, x + width - 40, y + 20)
    ctx.lineTo(x + 40, y + 20)
    ctx.quadraticCurveTo(x, y + 20, x, y + 20)
    ctx.lineTo(x, y)
    ctx.closePath()
    ctx.fill()
  } else {
    // drawRoundRect(ctx, x, y, width, height, 30)
    // ctx.fill()

    // // 添加渐变效果
    // let gradient = ctx.createLinearGradient(x, y, x, y + height)
    // gradient.addColorStop(0, "#FFF")
    // gradient.addColorStop(1, "#F8E8C8")
    // ctx.fillStyle(gradient)
    // drawRoundRect(ctx, x, y, width, height, 30)
    // ctx.fill()

    // // 添加边框
    // ctx.strokeStyle("#E8B890")
    // ctx.lineWidth(3)
    // drawRoundRect(ctx, x, y, width, height, 30)
    // ctx.stroke()

    // // 添加阴影
    // ctx.fillStyle("rgba(0,0,0,0.1)")
    // ctx.beginPath()
    // ctx.arc(x + width / 2, y + height - 5, width / 2 - 10, 0, @math.PI * 2)
    // ctx.fill()
  }
  ctx.shadowColor("transparent")
  ctx.shadowBlur(0)
  ctx.shadowOffsetX(0)
  ctx.shadowOffsetY(0)

  // 绘制图标或文字
  if icon != "" {
    ctx.fillStyle("#FF6B6B")
    ctx.font("bold 60px Arial")
    ctx.textAlign("center")
    ctx.fillText(icon, x + width / 2, y + height / 2 + 15)
  }
  if text != "" {
    ctx.fillStyle("#FF6B6B")
    ctx.textAlign("center")
    if isLarge {
      ctx.font("bold 36px Arial")
      ctx.fillText(text, x + width / 2, y + height / 2 + 10)
    } else {
      ctx.font("bold 24px Arial")
      ctx.fillText(text, x + width / 2, y - 10)
    }
  }
  ctx.restore()
}
