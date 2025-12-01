///|
pub(all) struct ClickDisabledTips {
  mut placed_tips : Bool
  mut placed_tips_points : @Point.PixelPoint
  mut show_ms : Double
  mut dt : Double
  mut global_alpha : Double
}

///|
pub fn ClickDisabledTips::new() -> ClickDisabledTips {
  ClickDisabledTips::{
    placed_tips: false,
    placed_tips_points: @Point.pixelPointSingleton,
    show_ms: 1500,
    dt: 0,
    global_alpha: 1,
  }
}

///|
pub let click_disabled_tips : Ref[Array[ClickDisabledTips]] = Ref::new([])

///|
let mapTipsInstance : Ref[ClickDisabledTips?] = Ref::new(None)

///|
pub let mapTipsSingleton : ClickDisabledTips = ClickDisabledTips::get_instance()

///|
pub fn ClickDisabledTips::get_instance() -> ClickDisabledTips {
  match mapTipsInstance.val {
    Some(render) => render
    None => {
      let new_instance = ClickDisabledTips::new()
      mapTipsInstance.val = Some(new_instance)
      new_instance
    }
  }
}
