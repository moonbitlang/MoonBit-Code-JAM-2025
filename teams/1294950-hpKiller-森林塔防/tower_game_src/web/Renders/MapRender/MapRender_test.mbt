///|
fn _mapRenderDemo(
  ctx : @Core.CanvasRenderingContext2D,
  timestamp : Double,
) -> Unit {
  // 1. 清空画布（现在是 300x150）
  ctx.clearRect(0.0, 0.0, 300.0, 150.0)

  // 2. 基于 timestamp 计算动画状态
  let t = timestamp * 0.001 // 转为秒，控制速度

  // 水平位置：循环从 0 → 290（留10px边距，避免跑出画布）
  let x : Double = t * 80.0 % 290.0

  // 颜色：HSL 色相循环
  let hue = t * 60.0 % 360.0
  let color = "hsl(" + hue.to_string() + ", 100%, 50%)"

  // ✅ 使用 @math.sin —— 注意：传入 Float，无需 .to_double()
  let scale = 1.0 + 0.3 * @math.sin(t * 2.0) // 呼吸缩放
  let size = 20.0 * scale // 基础尺寸调大一点，在小画布更明显

  // 垂直居中：150 / 2 = 75，减去 size/2
  let y = 75.0 - size / 2.0

  // 3. 设置样式 & 绘制
  ctx.fillStyle(color)
  ctx.fillRect(x, y, size, size)
}
