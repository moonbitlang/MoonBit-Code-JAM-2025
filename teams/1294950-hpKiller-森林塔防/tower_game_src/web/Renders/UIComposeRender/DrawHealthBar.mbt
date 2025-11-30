///|
pub fn draw_enemy_health_bar(e : &@Enemy.Enemy) -> Unit {
  let ctx = @Core.ctxSingleton
  let gs = @Core.map.gridSize
  let x = e.position().x
  let y = e.position().y
  let w = gs * 0.78
  let h = 4.0
  let bx = x - w / 2
  let by = y - gs / 2 - 9
  ctx.save()
  ctx.strokeStyle("rgba(0,0,0,0.35)")
  ctx.beginPath()
  ctx.moveTo(bx, by)
  ctx.lineTo(bx + w, by)
  ctx.lineWidth(h)
  ctx.stroke()
  ctx.restore()

  // Health indicator
  ctx.save()
  let healthWidth = e.health() / e.max_health()
  if healthWidth > 0.5 {
    ctx.strokeStyle("#4CAF50")
  } else if healthWidth > 0.25 {
    ctx.strokeStyle("#FFC107")
  } else {
    ctx.strokeStyle("#F44336")
  }
  ctx.beginPath()
  ctx.moveTo(bx + 2, by)
  ctx.lineTo(bx + w * e.health() / e.max_health() - 2, by)
  ctx.lineWidth(h - 2)
  ctx.stroke()
  ctx.restore()
}

///|
pub fn draw_neutral_health_bar(e : &@NeutralElement.NeutralElement) -> Unit {
  let ctx = @Core.ctxSingleton
  let gs = @Core.map.gridSize
  let x = (e.position().x + 1) * gs
  let y = (e.position().y + 1) * gs
  let w = gs * 0.78
  let h = 4.0
  let bx = x - w
  let by = y - gs - 9
  ctx.save()
  ctx.strokeStyle("rgba(0,0,0,0.35)")
  ctx.beginPath()
  ctx.moveTo(bx, by)
  ctx.lineTo(bx + w, by)
  ctx.lineWidth(h)
  ctx.stroke()
  ctx.restore()

  // Health indicator
  ctx.save()
  let healthWidth = e.health() / e.max_health()
  if healthWidth > 0.5 {
    ctx.strokeStyle("#4CAF50")
  } else if healthWidth > 0.25 {
    ctx.strokeStyle("#FFC107")
  } else {
    ctx.strokeStyle("#F44336")
  }
  ctx.beginPath()
  ctx.moveTo(bx + 2, by)
  ctx.lineTo(bx + w * e.health() / e.max_health() - 2, by)
  ctx.lineWidth(h - 2)
  ctx.stroke()
  ctx.restore()
}
