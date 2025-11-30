///|
pub(all) struct StoneNeutralElementRender {}

///|
pub fn StoneNeutralElementRender::new() -> StoneNeutralElementRender {
  StoneNeutralElementRender::{  }
}

///|
let stoneNeutralElementRenderInstance : Ref[StoneNeutralElementRender?] = Ref::new(
  None,
)

///|
pub let stoneNeutralElementRenderSingleton : StoneNeutralElementRender = StoneNeutralElementRender::get_instance()

///|
pub fn StoneNeutralElementRender::get_instance() -> StoneNeutralElementRender {
  match stoneNeutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = StoneNeutralElementRender::new()
      stoneNeutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn StoneNeutralElementRender::render(
  self : StoneNeutralElementRender,
  timestamp : Double,
  x : Double,
  y : Double,
  e : &@NeutralElement.NeutralElement,
  show_health_bar? : Bool = true,
) -> Unit {
  ignore(timestamp)
  ignore(self)
  let ctx = @Core.ctxSingleton
  ignore(ctx)
  ctx.save()
  let r = @cmp.minimum(15.0, @Core.map.gridSize * 0.6 - 2)
  ctx.save()
  // 主体
  ctx.fillStyle("#808080")
  ctx.beginPath()
  ctx.arc(x, y, r, 0, @math.PI * 2)
  ctx.fill()

  // 高光 1
  ctx.fillStyle("#A9A9A9")
  ctx.beginPath()
  ctx.arc(x - r / 3, y - r / 3, r / 5, 0, @math.PI * 2)
  ctx.fill()

  // 高光 2
  ctx.beginPath()
  ctx.arc(x + r / 3, y + r / 3, r / 4, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()
  ctx.restore()
  if show_health_bar {
    @UIComposeRender.draw_neutral_health_bar(e)
  }
}
