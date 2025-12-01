///|
pub struct WaveRenderer {}

///|
pub fn WaveRenderer::new() -> WaveRenderer {
  WaveRenderer::{  }
}

///|
extern "js" fn now() -> Double =
  #| () =>  Date.now()

///|
let start : Ref[Bool] = Ref::new(false)

///|
let start_time : Ref[Double] = Ref::new(0.0)

///|
let appearDurationRef : Ref[Double] = Ref::new(4000)

///|
fn WaveRenderer::record_start_time(_self : WaveRenderer) -> Unit {
  if !start.val {
    start.val = true
    start_time.val = now()
  } else {

  }
}

///|
pub fn WaveRenderer::drawWarningTextByTime(
  self : WaveRenderer,
  ctx : @Core.CanvasRenderingContext2D,
) -> Unit {
  // 配置
  let fadeInOutRatio = 0.3
  // 淡入淡出各占30%
  let text = "一大批敌人即将出现！"
  let x = @Core.map.width / 2
  let y = 100.0
  let color = "#FF5252"
  let font = "bold 36px Arial"
  self.record_start_time()
  let elapsed = now() - start_time.val

  // 计算阶段时间
  let fadeTime = appearDurationRef.val * fadeInOutRatio
  let holdTime = appearDurationRef.val - fadeTime * 2

  // 时间未开始或已结束 → 不绘制
  if elapsed < 0 || elapsed >= appearDurationRef.val {
    return
  }

  // 计算当前透明度 a ∈ [0, 1]
  let mut a = 0.0
  if elapsed < fadeTime {
    a = elapsed / fadeTime // 淡入
  } else if elapsed < fadeTime + holdTime {
    a = 1
  } else { // 保持
    let fadeOutStart = fadeTime + holdTime
    a = 1 - (elapsed - fadeOutStart) / fadeTime
  } // 淡出
  // // 绘制
  ctx.save()
  ctx.globalAlpha(0.2 + 0.8 * a) // 最小0.2透明，最大不透明
  ctx.fillStyle(color)
  ctx.font(font)
  ctx.textAlign("center")
  ctx.textBaseline("top")
  ctx.fillText(text, x, y)
  ctx.restore()
}
