///|
pub(all) struct MapTipsRender {}

///|
pub fn MapTipsRender::new() -> MapTipsRender {
  MapTipsRender::{  }
}

///|
let mapTipsRenderInstance : Ref[MapTipsRender?] = Ref::new(None)

///|
pub let mapTipsRenderSingleton : MapTipsRender = MapTipsRender::get_instance()

///|
pub fn MapTipsRender::get_instance() -> MapTipsRender {
  match mapTipsRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = MapTipsRender::new()
      mapTipsRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MapTipsRender::render(self : MapTipsRender, timestamp : Double) -> Unit {
  ignore(timestamp)
  ignore(self)
  // ignore(x)
  // ignore(y)
  let ctx = @Core.ctxSingleton
  ignore(ctx)
  for t in @Map.click_disabled_tips.val {
    let a = t.global_alpha
    ctx.save()
    ctx.globalAlpha(a)
    ctx.translate(t.placed_tips_points.x, t.placed_tips_points.y)
    ctx.beginPath()
    ctx.arc(0, 0, 30, 0, 2 * @math.PI)
    ctx.fillStyle("#f00")
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(-15, -15)
    ctx.lineTo(15, 15)
    ctx.moveTo(15, -15)
    ctx.lineTo(-15, 15)
    ctx.strokeStyle("#fff")
    ctx.lineWidth(4)
    ctx.stroke()
    ctx.restore()
  }
  // if @Map.mapTipsSingleton.placed_tips {
  // ctx.save()
  // ctx.translate(
  //   @Map.mapTipsSingleton.placed_tips_points.x,
  //   @Map.mapTipsSingleton.placed_tips_points.y,
  // )
  // ctx.beginPath()
  // ctx.arc(0, 0, 30, 0, 2 * @math.PI)
  // ctx.fillStyle("#f00")
  // ctx.fill()
  // ctx.beginPath()
  // ctx.moveTo(-15, -15)
  // ctx.lineTo(15, 15)
  // ctx.moveTo(15, -15)
  // ctx.lineTo(-15, 15)
  // ctx.strokeStyle("#fff")
  // ctx.lineWidth(4)
  // ctx.stroke()
  // ctx.restore()
  // }
}

///|
// pub fn click_disabled_render(t : @) -> Unit {
// ignore(self)
// let ctx = @Core.ctxSingleton

// }
