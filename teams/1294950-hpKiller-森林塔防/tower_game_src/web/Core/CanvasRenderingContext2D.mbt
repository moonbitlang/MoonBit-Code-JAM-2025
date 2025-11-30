///|
pub type CanvasRenderingContext2D

///|
pub let ctxSingleton : CanvasRenderingContext2D = canvasSingleton.getContext(
  "2d",
)

///|
extern "js" fn ctx_shadow_color(
  ctx : CanvasRenderingContext2D,
  color : String,
) -> Unit =
  #| (ctx,color) => ctx.shadowColor = color

///|
pub fn CanvasRenderingContext2D::shadowColor(
  self : CanvasRenderingContext2D,
  color : String,
) -> Unit {
  ctx_shadow_color(self, color)
}

///|
extern "js" fn ctx_shadow_blur(
  ctx : CanvasRenderingContext2D,
  color : Double,
) -> Unit =
  #| (ctx,color) => ctx.shadowBlur = color

///|
pub fn CanvasRenderingContext2D::shadowBlur(
  self : CanvasRenderingContext2D,
  color : Double,
) -> Unit {
  ctx_shadow_blur(self, color)
}

///|
extern "js" fn ctx_shadow_offsetY(
  ctx : CanvasRenderingContext2D,
  offset : Double,
) -> Unit =
  #| (ctx,color) => ctx.shadowOffsetY = color

///|
pub fn CanvasRenderingContext2D::shadowOffsetY(
  self : CanvasRenderingContext2D,
  offset : Double,
) -> Unit {
  ctx_shadow_offsetY(self, offset)
}

///|
extern "js" fn ctx_shadow_offsetX(
  ctx : CanvasRenderingContext2D,
  offset : Double,
) -> Unit =
  #| (ctx,color) => ctx.shadowOffsetX = color

///|
pub fn CanvasRenderingContext2D::shadowOffsetX(
  self : CanvasRenderingContext2D,
  offset : Double,
) -> Unit {
  ctx_shadow_offsetX(self, offset)
}

///|
extern "js" fn ctx_ellipse(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  radiusX : Double,
  radiusY : Double,
  rotation : Double,
  startAngle : Double,
  endAngle : Double,
  counterclockwise? : Bool,
) -> Unit =
  #| (ctx,x,y,radiusX,radiusY,rotation,startAngle,endAngle,counterclockwise) => ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)

///|
pub fn CanvasRenderingContext2D::ellipse(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  radiusX : Double,
  radiusY : Double,
  rotation : Double,
  startAngle : Double,
  endAngle : Double,
  counterclockwise? : Bool,
) -> Unit {
  ctx_ellipse(
    self,
    x,
    y,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    counterclockwise=counterclockwise.unwrap_or(false),
  )
}

///|
extern "js" fn ctx_create_radial_gradient(
  ctx : CanvasRenderingContext2D,
  x0 : Double,
  y0 : Double,
  r0 : Double,
  x1 : Double,
  y1 : Double,
  r1 : Double,
) -> CanvasGradient =
  #| (ctx,x0, y0, r0, x1, y1, r1) => ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)

///|
pub fn CanvasRenderingContext2D::createRadialGradient(
  self : CanvasRenderingContext2D,
  x0 : Double,
  y0 : Double,
  r0 : Double,
  x1 : Double,
  y1 : Double,
  r1 : Double,
) -> CanvasGradient {
  ctx_create_radial_gradient(self, x0, y0, r0, x1, y1, r1)
}

///|
extern "js" fn ctx_create_lineargradient(
  ctx : CanvasRenderingContext2D,
  x0 : Double,
  y0 : Double,
  x1 : Double,
  y1 : Double,
) -> CanvasGradient =
  #| (ctx,x0,y0,x1,y1) => ctx.createLinearGradient(x0,y0,x1,y1)

///|
pub fn CanvasRenderingContext2D::createLinearGradient(
  self : CanvasRenderingContext2D,
  x0 : Double,
  y0 : Double,
  x1 : Double,
  y1 : Double,
) -> CanvasGradient {
  ctx_create_lineargradient(self, x0, y0, x1, y1)
}

///|
extern "js" fn ctx_restore(ctx : CanvasRenderingContext2D) -> Unit =
  #| (ctx) => ctx.restore()

///|
pub fn CanvasRenderingContext2D::restore(
  self : CanvasRenderingContext2D,
) -> Unit {
  ctx_restore(self)
}

///|
extern "js" fn ctx_begin_path(ctx : CanvasRenderingContext2D) =
  #|(ctx) => ctx.beginPath()

///|
extern "js" fn ctx_close_path(ctx : CanvasRenderingContext2D) =
  #|(ctx) => ctx.closePath()

///|
extern "js" fn ctx_move_to(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) =
  #|(ctx, x, y) => ctx.moveTo(x, y)

///|
extern "js" fn ctx_line_to(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) =
  #|(ctx, x, y) => ctx.lineTo(x, y)

///|
extern "js" fn ctx_quadratic_curve_to(
  ctx : CanvasRenderingContext2D,
  cpx : Double,
  cpy : Double,
  x : Double,
  y : Double,
) -> Unit =
  #| (ctx,cpx,cpy,x,y) => ctx.quadraticCurveTo(cpx, cpy, x, y)

///|
extern "js" fn ctx_arc(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  radius : Double,
  startAngle : Double,
  endAngle : Double,
  anticlockwise? : Bool,
) =
  #|(ctx, x, y, radius, startAngle, endAngle, anticlockwise) => ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

///|
extern "js" fn ctx_rect(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) =
  #|(ctx, x, y, w, h) => ctx.rect(x, y, w, h)

///|
extern "js" fn ctx_fill(ctx : CanvasRenderingContext2D) =
  #|(ctx) => ctx.fill()

///|
extern "js" fn ctx_stroke(ctx : CanvasRenderingContext2D) =
  #|(ctx) => ctx.stroke()

///|
extern "js" fn ctx_clip(ctx : CanvasRenderingContext2D) =
  #|(ctx) => ctx.clip()

// ██████ 矩形 ██████

///|
extern "js" fn ctx_fill_rect(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) =
  #|(ctx, x, y, w, h) => ctx.fillRect(x, y, w, h)

///|
extern "js" fn ctx_stroke_rect(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) =
  #|(ctx, x, y, w, h) => ctx.strokeRect(x, y, w, h)

///|
extern "js" fn ctx_clear_rect(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) =
  #|(ctx, x, y, w, h) => ctx.clearRect(x, y, w, h)

// ██████ 样式 ██████

///|
extern "js" fn ctx_set_fill_style_string(
  ctx : CanvasRenderingContext2D,
  style : String,
) =
  #|(ctx, style) =>  ctx.fillStyle = style

///|
extern "js" fn ctx_set_fill_style_gradient(
  ctx : CanvasRenderingContext2D,
  style : CanvasGradient,
) =
  #|(ctx, style) =>  ctx.fillStyle = style

///|
extern "js" fn ctx_set_stroke_style_string(
  ctx : CanvasRenderingContext2D,
  style : String,
) =
  #|(ctx, style) => ctx.strokeStyle = style

///|
extern "js" fn ctx_set_stroke_style_g(
  ctx : CanvasRenderingContext2D,
  style : CanvasGradient,
) =
  #|(ctx, style) => ctx.strokeStyle = style

///|
extern "js" fn ctx_set_line_width(
  ctx : CanvasRenderingContext2D,
  width : Double,
) =
  #|(ctx, width) =>  ctx.lineWidth = width

///|
extern "js" fn ctx_set_line_cap(ctx : CanvasRenderingContext2D, cap : String) =
  #|(ctx, cap) => ctx.lineCap = cap

///|
extern "js" fn ctx_set_line_join(ctx : CanvasRenderingContext2D, join : String) =
  #|(ctx, join) =>  ctx.lineJoin = join

///|
extern "js" fn ctx_set_miter_limit(
  ctx : CanvasRenderingContext2D,
  limit : Double,
) =
  #|(ctx, limit) =>  ctx.miterLimit = limit

///|
extern "js" fn ctx_save(ctx : CanvasRenderingContext2D) -> Unit =
  #| (ctx) => ctx.save()

// ██████ 文本 ██████

///|
extern "js" fn ctx_fill_text(
  ctx : CanvasRenderingContext2D,
  text : String,
  x : Double,
  y : Double,
) =
  #|(ctx, text, x, y) => ctx.fillText(text, x, y)

///|
extern "js" fn ctx_stroke_text(
  ctx : CanvasRenderingContext2D,
  text : String,
  x : Double,
  y : Double,
) =
  #|(ctx, text, x, y) => ctx.strokeText(text, x, y)

///|
extern "js" fn ctx_set_font(ctx : CanvasRenderingContext2D, font : String) =
  #|(ctx, font) =>  ctx.font = font

///|
extern "js" fn ctx_set_text_align(
  ctx : CanvasRenderingContext2D,
  align : String,
) =
  #|(ctx, align) =>  ctx.textAlign = align

///|
extern "js" fn ctx_set_text_baseline(
  ctx : CanvasRenderingContext2D,
  baseline : String,
) =
  #|(ctx, baseline) =>  ctx.textBaseline = baseline

// ██████ 变换 ██████

///|
extern "js" fn ctx_translate(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) =
  #|(ctx, x, y) => ctx.translate(x, y)

///|
extern "js" fn ctx_rotate(ctx : CanvasRenderingContext2D, angle : Double) =
  #|(ctx, angle) => ctx.rotate(angle)

///|
extern "js" fn ctx_scale(
  ctx : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) =
  #|(ctx, x, y) => ctx.scale(x, y)

///|
extern "js" fn ctx_transform(
  ctx : CanvasRenderingContext2D,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  e : Double,
  f : Double,
) =
  #|(ctx, a, b, c, d, e, f) => ctx.transform(a, b, c, d, e, f)

///|
extern "js" fn ctx_set_transform(
  ctx : CanvasRenderingContext2D,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  e : Double,
  f : Double,
) =
  #|(ctx, a, b, c, d, e, f) => ctx.setTransform(a, b, c, d, e, f)

///|
extern "js" fn ctx_reset_transform(ctx : CanvasRenderingContext2D) =
  #|(ctx) => ctx.resetTransform()

// ██████ 图像 ██████

///|
extern "js" fn ctx_draw_image(
  ctx : CanvasRenderingContext2D,
  image : Image, // 可以是 HTMLImageElement, Canvas, Video 等
  dx : Double,
  dy : Double,
) =
  #|(ctx, image, dx, dy) => ctx.drawImage(image, dx, dy)

///|
extern "js" fn ctx_draw_image_full(
  ctx : CanvasRenderingContext2D,
  image : Image,
  sx : Double,
  sy : Double,
  sw : Double,
  sh : Double,
  dx : Double,
  dy : Double,
  dw : Double,
  dh : Double,
) =
  #|(ctx, image, sx, sy, sw, sh, dx, dy, dw, dh) => ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

// ██████ 合成 ██████

///|
extern "js" fn ctx_set_global_alpha(
  ctx : CanvasRenderingContext2D,
  alpha : Double,
) =
  #|(ctx, alpha) =>  ctx.globalAlpha = alpha;

///|
extern "js" fn ctx_set_global_composite_operation_string(
  ctx : CanvasRenderingContext2D,
  op : String,
) =
  #|(ctx, op) => { ctx.globalCompositeOperation = op; }

///|
extern "js" fn ctx_set_global_composite_operation_gradient(
  ctx : CanvasRenderingContext2D,
  op : CanvasGradient,
) =
  #|(ctx, op) => { ctx.globalCompositeOperation = op; }

// "source-over", "destination-over", "lighter", "copy", "xor", etc.

// ██████ CanvasRenderingContext2D 方法封装 ██████
// ██████ 绘图路径 ██████

///|
pub fn CanvasRenderingContext2D::beginPath(
  self : CanvasRenderingContext2D,
) -> Unit {
  ctx_begin_path(self)
}

///|
pub fn CanvasRenderingContext2D::closePath(
  self : CanvasRenderingContext2D,
) -> Unit {
  ctx_close_path(self)
}

///|
pub fn CanvasRenderingContext2D::moveTo(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) -> Unit {
  ctx_move_to(self, x, y)
}

///|
pub fn CanvasRenderingContext2D::lineTo(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) -> Unit {
  ctx_line_to(self, x, y)
}

///|
pub fn CanvasRenderingContext2D::quadraticCurveTo(
  self : CanvasRenderingContext2D,
  cpx : Double,
  cpy : Double,
  x : Double,
  y : Double,
) -> Unit {
  ctx_quadratic_curve_to(self, cpx, cpy, x, y)
}

///|
pub fn CanvasRenderingContext2D::save(self : CanvasRenderingContext2D) -> Unit {
  ctx_save(self)
}

///|
pub fn CanvasRenderingContext2D::arc(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  radius : Double,
  startAngle : Double,
  endAngle : Double,
  anticlockwise? : Bool,
) -> Unit {
  ctx_arc(
    self,
    x,
    y,
    radius,
    startAngle,
    endAngle,
    anticlockwise=anticlockwise.unwrap_or(false),
  )
}

///|
pub fn CanvasRenderingContext2D::rect(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit {
  ctx_rect(self, x, y, w, h)
}

///|
pub fn CanvasRenderingContext2D::fill(self : CanvasRenderingContext2D) -> Unit {
  ctx_fill(self)
}

///|
pub fn CanvasRenderingContext2D::stroke(
  self : CanvasRenderingContext2D,
) -> Unit {
  ctx_stroke(self)
}

///|
pub fn CanvasRenderingContext2D::clip(self : CanvasRenderingContext2D) -> Unit {
  ctx_clip(self)
}

// ██████ 矩形 ██████

///|
pub fn CanvasRenderingContext2D::fillRect(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit {
  ctx_fill_rect(self, x, y, w, h)
}

///|
pub fn CanvasRenderingContext2D::strokeRect(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit {
  ctx_stroke_rect(self, x, y, w, h)
}

///|
pub fn CanvasRenderingContext2D::clearRect(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
  w : Double,
  h : Double,
) -> Unit {
  ctx_clear_rect(self, x, y, w, h)
}

// ██████ 样式 ██████

///|
pub fn[T : ColorLike] CanvasRenderingContext2D::fillStyle(
  self : CanvasRenderingContext2D,
  style : T,
) -> Unit {
  CanvasRenderingContext2D::fill_style_auto_conversion(self, style.to_color())
}

///|
pub fn CanvasRenderingContext2D::fill_style_auto_conversion(
  self : CanvasRenderingContext2D,
  color : Color,
) -> Unit {
  match color {
    StringColor(s) =>
      match s {
        s => ctx_set_fill_style_string(self, s)
      }
    CanvasGradientColor(c) =>
      match c {
        c => ctx_set_fill_style_gradient(self, c)
      }
  }
}

///|
pub fn[T : ColorLike] CanvasRenderingContext2D::strokeStyle(
  self : CanvasRenderingContext2D,
  style : T,
) -> Unit {
  CanvasRenderingContext2D::stroke_auto_conversion(self, style.to_color())
}

///|
pub fn CanvasRenderingContext2D::stroke_auto_conversion(
  self : CanvasRenderingContext2D,
  color : Color,
) -> Unit {
  match color {
    StringColor(s) =>
      match s {
        s => ctx_set_stroke_style_string(self, s)
      }
    CanvasGradientColor(c) =>
      match c {
        c => ctx_set_stroke_style_g(self, c)
      }
  }
}

///|
pub fn CanvasRenderingContext2D::lineWidth(
  self : CanvasRenderingContext2D,
  width : Double,
) -> Unit {
  ctx_set_line_width(self, width)
}

///|
pub fn CanvasRenderingContext2D::lineCap(
  self : CanvasRenderingContext2D,
  cap : String,
) -> Unit {
  ctx_set_line_cap(self, cap)
}

///|
pub fn CanvasRenderingContext2D::lineJoin(
  self : CanvasRenderingContext2D,
  join : String,
) -> Unit {
  ctx_set_line_join(self, join)
}

///|
pub fn CanvasRenderingContext2D::miterLimit(
  self : CanvasRenderingContext2D,
  limit : Double,
) -> Unit {
  ctx_set_miter_limit(self, limit)
}

// ██████ 文本 ██████

///|
pub fn CanvasRenderingContext2D::fillText(
  self : CanvasRenderingContext2D,
  text : String,
  x : Double,
  y : Double,
) -> Unit {
  ctx_fill_text(self, text, x, y)
}

///|
pub fn CanvasRenderingContext2D::strokeText(
  self : CanvasRenderingContext2D,
  text : String,
  x : Double,
  y : Double,
) -> Unit {
  ctx_stroke_text(self, text, x, y)
}

///|
pub fn CanvasRenderingContext2D::font(
  self : CanvasRenderingContext2D,
  font : String,
) -> Unit {
  ctx_set_font(self, font)
}

///|
pub fn CanvasRenderingContext2D::textAlign(
  self : CanvasRenderingContext2D,
  align : String,
) -> Unit {
  ctx_set_text_align(self, align)
}

///|
pub fn CanvasRenderingContext2D::textBaseline(
  self : CanvasRenderingContext2D,
  baseline : String,
) -> Unit {
  ctx_set_text_baseline(self, baseline)
}

// ██████ 变换 ██████

///|
pub fn CanvasRenderingContext2D::translate(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) -> Unit {
  ctx_translate(self, x, y)
}

///|
pub fn CanvasRenderingContext2D::rotate(
  self : CanvasRenderingContext2D,
  angle : Double,
) -> Unit {
  ctx_rotate(self, angle)
}

///|
pub fn CanvasRenderingContext2D::scale(
  self : CanvasRenderingContext2D,
  x : Double,
  y : Double,
) -> Unit {
  ctx_scale(self, x, y)
}

///|
pub fn CanvasRenderingContext2D::transform(
  self : CanvasRenderingContext2D,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  e : Double,
  f : Double,
) -> Unit {
  ctx_transform(self, a, b, c, d, e, f)
}

///|
pub fn CanvasRenderingContext2D::setTransform(
  self : CanvasRenderingContext2D,
  a : Double,
  b : Double,
  c : Double,
  d : Double,
  e : Double,
  f : Double,
) -> Unit {
  ctx_set_transform(self, a, b, c, d, e, f)
}

///|
pub fn CanvasRenderingContext2D::resetTransform(
  self : CanvasRenderingContext2D,
) -> Unit {
  ctx_reset_transform(self)
}

// ██████ 图像 ██████

///|
pub fn CanvasRenderingContext2D::drawImage(
  self : CanvasRenderingContext2D,
  image : Image,
  dx : Double,
  dy : Double,
) -> Unit {
  ctx_draw_image(self, image, dx, dy)
}

///|
pub fn CanvasRenderingContext2D::drawImageFull(
  self : CanvasRenderingContext2D,
  image : Image,
  sx : Double,
  sy : Double,
  sw : Double,
  sh : Double,
  dx : Double,
  dy : Double,
  dw : Double,
  dh : Double,
) -> Unit {
  ctx_draw_image_full(self, image, sx, sy, sw, sh, dx, dy, dw, dh)
}

// ██████ 合成 ██████

///|
pub fn CanvasRenderingContext2D::globalAlpha(
  self : CanvasRenderingContext2D,
  alpha : Double,
) -> Unit {
  ctx_set_global_alpha(self, alpha)
}

///|
pub fn[T : ColorLike] CanvasRenderingContext2D::globalCompositeOperation(
  self : CanvasRenderingContext2D,
  op : T,
) -> Unit {
  CanvasRenderingContext2D::composite_op_auto_conversion(self, op.to_color())
}

///|
pub fn CanvasRenderingContext2D::composite_op_auto_conversion(
  self : CanvasRenderingContext2D,
  color : Color,
) -> Unit {
  match color {
    StringColor(s) =>
      match s {
        s => ctx_set_global_composite_operation_string(self, s)
      }
    CanvasGradientColor(c) =>
      match c {
        c => ctx_set_global_composite_operation_gradient(self, c)
      }
  }
}

///|
extern "js" fn ctx_measure_text_w(
  ctx : CanvasRenderingContext2D,
  text : String,
) -> Double =
  #| (ctx,text) => ctx.measureText(text).width

///|
pub fn CanvasRenderingContext2D::measureTextWidth(
  self : CanvasRenderingContext2D,
  text : String,
) -> Double {
  ctx_measure_text_w(self, text)
}

///|
pub type Image
