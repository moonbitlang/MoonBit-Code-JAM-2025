///|
pub(all) struct TreasureChestNeutralElementRender {}

///|
pub fn TreasureChestNeutralElementRender::new() -> TreasureChestNeutralElementRender {
  TreasureChestNeutralElementRender::{  }
}

///|
let treasureChestNeutralElementRenderInstance : Ref[
  TreasureChestNeutralElementRender?,
] = Ref::new(None)

///|
pub let treasureChestNeutralElementRenderSingleton : TreasureChestNeutralElementRender = TreasureChestNeutralElementRender::get_instance()

///|
pub fn TreasureChestNeutralElementRender::get_instance() -> TreasureChestNeutralElementRender {
  match treasureChestNeutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = TreasureChestNeutralElementRender::new()
      treasureChestNeutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn TreasureChestNeutralElementRender::render(
  self : TreasureChestNeutralElementRender,
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
  ctx.translate(x, y)
  ctx.fillStyle("red")
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
  if show_health_bar {
    @UIComposeRender.draw_neutral_health_bar(e)
  }
}
