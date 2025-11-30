///|
pub fn drawProgressBar(
  x : Double,
  y : Double,
  w : Double,
  h : Double,
  backgroundColor? : String = "rgba(0,0,0,0.35)",
  progressColor? : String = "rgba(40, 167, 69, 0.8)",
  progress? : Double = 0.0,
) -> Unit {
  let ctx = @Core.ctxSingleton
  ctx.save()

  // 1. the background 
  ctx.beginPath()
  ctx.lineCap("round")
  ctx.strokeStyle(backgroundColor)
  ctx.moveTo(x, y)
  ctx.lineTo(x + w, y)
  ctx.lineWidth(h)
  ctx.stroke()
  ctx.closePath()
  // 2. the progress
  ctx.beginPath()
  ctx.lineCap("round")
  ctx.strokeStyle(progressColor)
  ctx.moveTo(x + 1, y)
  ctx.lineTo(x + 1 + (w - 1) * progress, y)
  ctx.lineWidth(h - 2)
  ctx.stroke()
  ctx.closePath()
  //
  ctx.restore()
}
