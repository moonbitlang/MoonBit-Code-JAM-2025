///|
pub(all) struct HPRender {}

///|
pub fn HPRender::new() -> HPRender {
  HPRender::{  }
}

///|
let hPRenderInstance : Ref[HPRender?] = Ref::new(None)

///|
pub let hPRenderSingleton : HPRender = HPRender::get_instance()

///|
pub fn HPRender::get_instance() -> HPRender {
  match hPRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = HPRender::new()
      hPRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn HPRender::render(self : HPRender, dt : Double) -> Unit {
  ignore(dt)
  ignore(self)
  let hp = @HP.hPSingleton.hp
  let heartText = if hp > 0 { "❤".repeat(hp.to_int()) } else { "——" }
  let map_path = @Map.MapPath::get_instance()
  let all_paths = map_path.get_all_paths()
  let gs = @Core.map.gridSize
  let trunkW = @cmp.minimum(18.0, gs * 0.22)
  let trunkH = @cmp.minimum(34.0, gs * 0.42)
  let canopyR = @cmp.minimum(26.0, gs * 0.48)
  let ctx = @Core.ctxSingleton

  // Render a tree at the endpoint of each path
  for path in all_paths {
    let path_points = path.points
    if path_points.length() > 0 {
      let endPoint = path_points[path_points.length() - 1]
      let cx = (endPoint.x + 0.5) * gs // 格子中心
      let cy = (endPoint.y + 0.5) * gs
      ctx.save()

      // --- 树干 ---
      ctx.fillStyle("#8D6E63")
      ctx.fillRect(cx - trunkW / 2, cy - trunkH, trunkW, trunkH)

      // --- 树冠（三团叶子）---
      let gLeaf = ctx.createRadialGradient(
        cx - canopyR * 0.3,
        cy - trunkH - canopyR * 0.3,
        canopyR * 0.2,
        cx,
        cy - trunkH,
        canopyR,
      )
      gLeaf.addColorStop(0, "#A5D6A7")
      gLeaf.addColorStop(1, "#43A047")
      ctx.fillStyle(gLeaf)

      // // 主树冠
      ctx.beginPath()
      ctx.ellipse(
        cx,
        cy - trunkH - canopyR * 0.2,
        canopyR * 0.95,
        canopyR * 0.75,
        0,
        0,
        @math.PI * 2,
      )
      // // 左侧枝叶
      ctx.ellipse(
        cx - canopyR * 0.55,
        cy - trunkH,
        canopyR * 0.78,
        canopyR * 0.6,
        0,
        0,
        @math.PI * 2,
      )
      // // 右侧枝叶
      ctx.ellipse(
        cx + canopyR * 0.55,
        cy - trunkH,
        canopyR * 0.78,
        canopyR * 0.6,
        0,
        0,
        @math.PI * 2,
      )
      ctx.fill()

      // // --- 树冠高光描边（增强立体感）---
      ctx.strokeStyle("rgba(255, 255, 255, 0.35)")
      ctx.lineWidth(1)
      ctx.beginPath()
      ctx.arc(cx, cy - trunkH - canopyR * 0.2, canopyR * 0.95, 0, @math.PI * 2)
      ctx.stroke()

      // // --- 生命值 ❤（所有树上方显示相同的全局生命）---
      ctx.fillStyle("#FF4D4F")
      ctx.font("\{@math.floor(gs * 0.25)}px Arial") // 自适应字体大小
      ctx.textAlign("center")
      ctx.textBaseline("bottom")
      ctx.fillText(heartText, cx, cy - trunkH - canopyR - 6) // 留出一点间距
      ctx.restore()
    }
  }
}
