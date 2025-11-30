///|
pub struct MapBackgroundRender {}

///|
pub fn MapBackgroundRender::new() -> MapBackgroundRender {
  MapBackgroundRender::{  }
}

///|
let mapBackgroundRenderInstance : Ref[MapBackgroundRender?] = Ref::new(None)

///|
pub let mapBackgroundRenderSingleton : MapBackgroundRender = MapBackgroundRender::get_instance()

///|
pub fn MapBackgroundRender::get_instance() -> MapBackgroundRender {
  match mapBackgroundRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = MapBackgroundRender::new()
      mapBackgroundRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MapBackgroundRender::render(_self : MapBackgroundRender) -> Unit {
  // @Core.ctxSingleton.save()
  // @Core.ctxSingleton.fillStyle("#6C835D")
  // @Core.ctxSingleton.fillRect(0, 0, @Core.map.width, @Core.map.height)
  // @Core.ctxSingleton.restore()
  // 主体
  let ctx = @Core.ctxSingleton
  let width = @Core.map.width
  let height = @Core.map.height
  // 暗部使用关卡配置色，中心亮部比它浅 20%
  let dark = "#6C835D"
  // let light = this.lightenColor(dark, 0.98);
  let light = "#d6ffb8"
  let g = ctx.createRadialGradient(
    width / 2,
    height / 2,
    0, // 中心
    width / 2,
    height / 2, // 同上
    @cmp.maximum(width, height) / 2, // 半径 ≈ 对角一半
  )
  g.addColorStop(0, light)
  g.addColorStop(1, dark)
  ctx.fillStyle(g)
  ctx.fillRect(0, 0, width, height)

  // 两边
  let cw = @Core.canvasSingleton.width()
  let ch = @Core.canvasSingleton.height()
  if cw <= 0 || ch <= 0 {
    return
  }
  // 由于 adapter 已设置 transform（DPR*scale + offset），
  // 这里用屏幕坐标绘制，需要临时重置 transform。
  ctx.save()
  ctx.setTransform(1, 0, 0, 1, 0, 0)

  // 计算逻辑画布映射到屏幕后的可见区域宽高（近似）
  let scale = @cmp.minimum(cw / width, ch / height)
  let sw = width * scale
  let offX = (cw - sw) / 2
  if offX > 0 {
    ctx.fillStyle("#6C835D")
    ctx.fillRect(0, 0, offX, ch)
    ctx.fillRect(cw - offX, 0, offX, ch)
  }
  ctx.restore()
}
