///|
pub fn drawSlider(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  width : Double,
  height : Double,
  value : Double,
  label : String,
  icon : String,
) -> Unit {
  // 背景条
  ctx.fillStyle("#FFA500")
  ctx.fillRect(x, y, width, height)

  // 填充条
  ctx.fillStyle("#FFD700")
  ctx.fillRect(x, y, width * value, height)

  // 标签
  ctx.fillStyle("#FF6B6B")
  ctx.font("bold 20px Arial")
  ctx.textAlign("center")
  // println("y:\{y-20}")
  ctx.fillText(label, x + width / 2, y - 20)

  // 滑块按钮
  ctx.fillStyle("#FFF")
  ctx.shadowColor("rgba(0,0,0,0.3)")
  ctx.shadowBlur(5)
  ctx.shadowOffsetX(2)
  ctx.shadowOffsetY(2)
  ctx.beginPath()
  ctx.arc(x + width * value, y + height / 2, 25, 0, @math.PI * 2)
  ctx.fill()
  ctx.shadowColor("transparent")
  ctx.shadowBlur(0)
  ctx.shadowOffsetX(0)
  ctx.shadowOffsetY(0)

  // 图标
  ctx.fillStyle("#FF6B6B")
  ctx.font("bold 24px Arial")
  ctx.textAlign("center")
  ctx.fillText(icon, x + width * value, y + height / 2 + 8)
}
