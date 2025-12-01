///|
pub struct HDURenderer {
  pad : Double
  corner : Double
  panelH : Double
  shadow : Bool
  mut lastTimestamp : Double
}

///|
pub fn HDURenderer::new() -> HDURenderer {
  HDURenderer::{
    pad: 8.0,
    corner: 10.0,
    panelH: 36.0,
    shadow: true,
    lastTimestamp: 0.0,
  }
}

///|
let hDURendererInstance : Ref[HDURenderer?] = Ref::new(None)

///|
// Initialize the gold gain listener when the singleton is created
fn init {
  @EventSystem.add_gold_gain_listener(fn(event : @EventSystem.GoldGainEvent) {
    // Create a temporary effect object for visual feedback
    let effect : GoldGainEffect = {
      x: event.x,
      y: event.y,
      life: 900.0,
      amount: event.amount,
    }
    // Add to effects list
    goldGainEffects.val.insert(0, effect)
  })
}

///|
pub let hDURendererSingleton : HDURenderer = HDURenderer::get_instance()

///|
pub fn HDURenderer::get_instance() -> HDURenderer {
  match hDURendererInstance.val {
    Some(render) => render
    None => {
      let new_instance = HDURenderer::new()
      hDURendererInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn HDURenderer::render(
  self : HDURenderer,
  ctx : @Core.CanvasRenderingContext2D,
) -> Unit {

  // Get gold value from HDU singleton
  let gold = @TopBar.hduSingleton.gold

  // 1) 文本与图标布局测量
  let label = "金币 \{gold}"
  ctx.save()
  ctx.font("16px Arial")
  let textW = ctx.measureTextWidth(label)

  // 金币图标直径
  let iconSize = 18.0
  // 图标与文字间距
  let iconGap = 8.0
  let contentW = iconSize + iconGap + textW
  let width = contentW + self.pad * 2
  // println("W \{width} H \{self.panelH}")
  let padX = 10.0
  let padY = 10.0
  // 2) 面板底板
  self.drawPanel(ctx, padX, padY, width, self.panelH)

  // 3) 金币图标（圆形渐变 + 高光）
  let cx = padX + self.pad + iconSize / 2
  let cy = padY + self.panelH / 2
  let g = ctx.createRadialGradient(cx - 3, cy - 4, 2, cx, cy, iconSize / 2)
  g.addColorStop(0, "#FFF59D")
  g.addColorStop(1, "#FBC02D")
  ctx.fillStyle(g)
  ctx.beginPath()
  ctx.arc(cx, cy, iconSize / 2, 0, @math.PI * 2)
  ctx.fill()
  // 小高光
  ctx.globalAlpha(0.65)
  ctx.fillStyle("#FFFFFF")
  ctx.beginPath()
  ctx.ellipse(
    cx - 4,
    cy - 5,
    iconSize * 0.22,
    iconSize * 0.16,
    -0.4,
    0,
    @math.PI * 2,
  )
  ctx.fill()
  ctx.globalAlpha(1)

  // 4) 文本
  let tx = padX + self.pad + iconSize + iconGap
  let ty = padY + self.panelH / 2 + 6 // 视觉对齐（基线）
  ctx.fillStyle("#FFD700")
  ctx.font("16px Arial")
  ctx.textAlign("left")
  ctx.textBaseline("alphabetic")
  ctx.fillText(label, tx, ty)
  ctx.restore()
}

///|
fn HDURenderer::drawPanel(
  self : HDURenderer,
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit {
  ctx.save()

  // TODO add ffi
  // if (self.shadow) {
  //     ctx.shadowColor("rgba(0,0,0,0.35)")
  //     ctx.shadowBlur = 8;
  //     ctx.shadowOffsetY = 2;
  // }

  // 背板
  ctx.fillStyle("rgba(0,0,0,0.65)")
  HDURenderer::drawRoundRectPath(self, ctx, x, y, w, h, self.corner)
  ctx.fill()

  // 细描边
  // ctx.shadowColor = "transparent";
  // ctx.strokeStyle = "rgba(255,255,255,0.25)";
  // ctx.lineWidth = 1;

  HDURenderer::drawRoundRectPath(
    self,
    ctx,
    x + 0.5,
    y + 0.5,
    w - 1,
    h - 1,
    self.corner + 0.5,
  )
  ctx.stroke()
  ctx.restore()
}

///|
pub fn HDURenderer::enemy_died_render(self : HDURenderer) -> Unit {
  ignore(self)
  // This function is now redundant as the listener is added in the struct initialization
}

///|
priv struct GoldGainEffect {
  x : Double
  mut y : Double
  mut life : Double
  amount : Int
}

// Then use the named type in the array declaration

///|
let goldGainEffects : Ref[Array[GoldGainEffect]] = Ref::new(Array::new())

///|
pub fn HDURenderer::update_effects(
  self : HDURenderer,
  timestamp : Double,
) -> Unit {
  ignore(self)
  let delta = timestamp - self.lastTimestamp
  self.lastTimestamp = timestamp
  let alive_effects = Array::new()
  for effect in goldGainEffects.val {
    effect.life -= delta
    effect.y -= delta * 0.03 // 向上飘
    if effect.life > 0 {
      alive_effects.insert(alive_effects.length(), effect)
    }
  }
  goldGainEffects.val = alive_effects
}

///|
pub fn HDURenderer::render_effects(
  self : HDURenderer,
  ctx : @Core.CanvasRenderingContext2D,
) -> Unit {
  ignore(self)
  for effect in goldGainEffects.val {
    // println("render_effects")
    ctx.save()
    let a = @cmp.maximum(0.0, @cmp.minimum(1.0, effect.life / 900.0))
    ctx.globalAlpha(a)
    ctx.fillStyle(if effect.amount > 0 { "#ffd54f" } else { "#ffffff" })
    ctx.font("bold 16px Arial")
    ctx.textAlign("center")
    ctx.textBaseline("middle")
    ctx.fillText(
      if effect.amount > 0 {
        "+\{effect.amount}"
      } else {
        "✓"
      },
      effect.x,
      effect.y,
    )
    ctx.restore()
  }
}

///|
fn HDURenderer::drawRoundRectPath(
  _self : HDURenderer,
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
  r : Double,
) -> Unit {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}
