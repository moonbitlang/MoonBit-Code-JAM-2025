///|
pub struct CurveTowerRender {}

///|
pub fn CurveTowerRender::new() -> CurveTowerRender {
  CurveTowerRender::{  }
}

///|
let curveTowerRenderInstance : Ref[CurveTowerRender?] = Ref::new(None)

///|
pub let curveTowerRenderSingleton : CurveTowerRender = CurveTowerRender::get_instance()

///|
pub fn CurveTowerRender::get_instance() -> CurveTowerRender {
  match curveTowerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = CurveTowerRender::new()
      curveTowerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn CurveTowerRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  time : Double,
  aimDeg? : Double = 0,
) -> Unit {
  ignore(aimDeg)
  let lvl_scale = 1.0 + 0.08 * @Math.clamp(level - 1.0, 0.0, 2.0)

  // 地面柔影 (Ground shadow)
  ctx.save()
  ctx.globalAlpha(0.22)
  ctx.fillStyle("#000")
  ctx.beginPath()
  ctx.ellipse(
    x,
    y + @cmp.minimum(7.0, gs * 0.09) * lvl_scale,
    @cmp.minimum(20.0, gs * 0.34) * lvl_scale,
    @cmp.minimum(7.0, gs * 0.12) * lvl_scale,
    0.0,
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()

  // 基座圆盘 (Base disc)
  let base_r = @cmp.minimum(@cmp.maximum(6.0, gs * 0.5 - 1.0) * 0.86, gs * 0.36) *
    lvl_scale
  let inner_r = base_r * 0.72
  let g_base = ctx.createRadialGradient(
    x,
    y - base_r * 0.3,
    base_r * 0.15,
    x,
    y,
    base_r,
  )
  g_base.addColorStop(0.0, "#C7E1FF")
  g_base.addColorStop(1.0, "#6FA9F2")
  ctx.save()
  ctx.fillStyle(g_base)
  ctx.beginPath()
  ctx.arc(x, y, base_r, 0.0, @math.PI * 2.0)
  ctx.fill()
  let g_inner = ctx.createRadialGradient(x, y, 1.0, x, y, inner_r)
  g_inner.addColorStop(0.0, "#FFFFFF")
  g_inner.addColorStop(1.0, "#7FB8FF")
  ctx.fillStyle(g_inner)
  ctx.beginPath()
  ctx.arc(x, y, inner_r, 0.0, @math.PI * 2.0)
  ctx.fill()
  ctx.restore()

  // 炮管（按朝向旋转）(Cannon barrel rotated by aim direction)
  let body_w = @cmp.minimum(gs * 0.2, 12.0) * lvl_scale
  let body_l = @cmp.minimum(gs * 0.55, 36.0) * lvl_scale
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(aimDeg)

  // 炮座 (Cannon mount)
  ctx.fillStyle("#3A6EA5")
  draw_round_rect_path(
    ctx,
    -body_w * 0.7,
    -body_w * 0.7,
    body_w * 1.4,
    body_w * 1.4,
    body_w * 0.3,
  )
  ctx.fill()

  // 炮管主体 (Barrel main body)
  let t_pulse = 0.4 + 0.6 * @math.sin(time / 1000.0 * 2.2)
  let g_barrel = ctx.createLinearGradient(
    0.0,
    -body_w / 2.0,
    body_l,
    body_w / 2.0,
  )
  g_barrel.addColorStop(0.0, "#E7F0FF")
  g_barrel.addColorStop(1.0, "#98BDF0")
  ctx.fillStyle(g_barrel)
  draw_round_rect_path(ctx, 0.0, -body_w / 2.0, body_l, body_w, body_w * 0.4)
  ctx.fill()

  // 炮口高光 (Muzzle highlight)
  ctx.globalAlpha(0.35 + 0.25 * t_pulse)
  ctx.fillStyle("#FFFFFF")
  ctx.beginPath()
  ctx.ellipse(
    body_l * 0.65,
    -body_w * 0.12,
    body_w * 0.35,
    body_w * 0.22,
    @Math.deg2rad(-12.0),
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()
}
