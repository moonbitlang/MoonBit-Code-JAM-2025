///|
pub fn click_disabled(point : @Point.PixelPoint) -> Unit {
  println(point.to_string())
  if @Map.click_disabled_tips.val.length() == 0 {
    @Map.click_disabled_tips.val.insert(0, {
      placed_tips: true,
      placed_tips_points: point,
      show_ms: 1500,
      dt: 0,
      global_alpha: 1,
    })
  }
}

///|
fn update_tip(dt : Double) -> Unit {
  for t in @Map.click_disabled_tips.val {
    t.dt += dt
    if t.dt > t.show_ms {
      t.placed_tips = false
      continue
    }
    t.global_alpha = 1 - t.dt / t.show_ms
  }
  @Map.click_disabled_tips.val = @Map.click_disabled_tips.val.filter(c => c.placed_tips)
}
