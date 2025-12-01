///|
pub struct PathRender {}

///|
pub fn PathRender::new() -> PathRender {
  PathRender::{  }
}

///|
let pathRenderInstance : Ref[PathRender?] = Ref::new(None)

///|
pub let pathRenderSingleton : PathRender = PathRender::get_instance()

///|
pub fn PathRender::get_instance() -> PathRender {
  match pathRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = PathRender::new()
      pathRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PathRender::render_path(
  self : PathRender,
  path_points : Array[@Point.PathPoint],
  color : String,
) -> Unit {
  ignore(self)
  let ctx = @Core.ctxSingleton
  let gridSize = @Core.map.gridSize
  if path_points.length() == 0 {
    return
  }

  // Convert points to screen coordinates
  let pts = path_points.map(p => @Point.PathPoint::{
    // x: (p.x + 0.5) * gridSize,
    // y: (p.y + 0.5) * gridSize,
    x: (p.x + 0.5) * gridSize,
    y: (p.y + 0.5) * gridSize,
    is_jump_point: p.is_jump_point,
  })
  ctx.save()
  ctx.lineCap("round")
  ctx.lineJoin("round")

  // Draw main path body
  ctx.strokeStyle(color)
  ctx.lineWidth(gridSize)

  // Top "shadow edge": simulate upper edge darkening by offsetting shadow upward by 2px
  ctx.shadowColor("rgba(0,0,0,0.6)")
  ctx.shadowBlur(10)
  ctx.shadowOffsetY(-4)
  ctx.shadowOffsetX(0)

  // Draw segments, breaking at "jumps"
  ctx.beginPath()
  ctx.moveTo(pts[0].x, pts[0].y)
  for i in 1..<pts.length() {
    let prev = pts[i - 1]
    let cur = pts[i]
    let isJump = prev.x != cur.x && prev.y != cur.y
    if isJump {
      // Break and finish previous segment
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cur.x, cur.y)
    } else {
      // Continue with line to next point, rounded corners handled by round join
      ctx.lineTo(cur.x, cur.y)
    }
  }
  ctx.stroke()

  // Optional: Add a thin "top edge highlight" to enhance 3D effect
  ctx.shadowColor("transparent")
  ctx.lineWidth(@cmp.maximum(2, @math.floor(gridSize * 0.06)))
  ctx.strokeStyle("#b9b2a6")
  ctx.beginPath()
  ctx.moveTo(pts[0].x, pts[0].y)
  for i in 1..<pts.length() {
    let prev = pts[i - 1]
    let cur = pts[i]
    let isJump = prev.x != cur.x && prev.y != cur.y
    if isJump {
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cur.x, cur.y)
    } else {
      ctx.lineTo(cur.x, cur.y)
    }
  }
  ctx.stroke()
  ctx.restore()

  // Render jump points for better player experience
  // Draw a special indicator at jump points
  for i in 1..<path_points.length() {
    let point = path_points[i]
    // Check if this is a jump point using the is_jump_point attribute
    if point.is_jump_point {
      // Convert to screen coordinates
      let jumpX = (point.x + 0.5) * gridSize
      let jumpY = (point.y + 0.5) * gridSize

      // Draw a special indicator for jump points
      ctx.save()
      ctx.fillStyle("rgba(255, 255, 0, 0.7)") // Yellow with transparency
      ctx.beginPath()
      ctx.arc(jumpX, jumpY, gridSize * 0.3, 0, @math.PI * 2)
      ctx.fill()

      // Draw an arrow to indicate the jump direction
      ctx.strokeStyle("rgba(255, 255, 0, 0.9)")
      ctx.lineWidth(2)
      ctx.beginPath()
      ctx.moveTo(jumpX - gridSize * 0.2, jumpY)
      ctx.lineTo(jumpX + gridSize * 0.2, jumpY)
      ctx.moveTo(jumpX + gridSize * 0.1, jumpY - gridSize * 0.1)
      ctx.lineTo(jumpX + gridSize * 0.2, jumpY)
      ctx.lineTo(jumpX + gridSize * 0.1, jumpY + gridSize * 0.1)
      ctx.stroke()
      ctx.restore()
    }
  }
}

///|
pub fn PathRender::render_all_paths(self : PathRender) -> Unit {
  let map_path = @Map.MapPath::get_instance()
  let all_paths = map_path.get_all_paths()

  // Define colors for different paths
  // let path_colors = ["#cfc7b8", "#a8d5e5", "#d5a8e5", "#e5cfa8"]
  let path_colors = ["#cfc7b8"]
  for i in 0..<all_paths.length() {
    let path = all_paths[i]
    let color = path_colors[i % path_colors.length()]
    self.render_path(path.points, color)
  }
}

///|
pub fn PathRender::render(_self : PathRender, _timestamp : Double) -> Unit {
  pathRenderSingleton.render_all_paths()
}
