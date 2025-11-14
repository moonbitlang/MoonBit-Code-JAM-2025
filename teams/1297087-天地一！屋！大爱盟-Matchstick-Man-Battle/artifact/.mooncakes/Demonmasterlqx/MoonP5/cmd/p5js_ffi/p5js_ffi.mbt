///|
#external
pub type P5Instance

///|
#external
pub type Color

///|
#external
pub type ClipOptions

///|
/// https://p5js.org/reference/p5.Font/textToPoints/
#external
pub type Font

///|
#external
pub type TextBounds

///|
/// 用于 textToPoints 返回的点对象
pub(all) struct PointData {
  x : Double
  y : Double
  alpha : Double
}

///|
/// 用于 textToPoints 的 options 参数
#external
pub type TextToPointsOptions

///|
/// P5.js 图像对象类型
#external
pub type P5Image

///|
pub(open) trait P5JS {
  getP5Instance(Self) -> P5Instance
  // 其他的方法

  // touches
  getTouches(Self) -> FixedArray[Touch] = _
  setTouchEnded(Self, () -> Unit) -> Unit = _
  cancelTouchEnded(Self) -> Unit = _
  setTouchMoved(Self, () -> Unit) -> Unit = _
  cancelTouchMoved(Self) -> Unit = _
  setTouchStarted(Self, () -> Unit) -> Unit = _
  cancelTouchStarted(Self) -> Unit = _

  // key
  getKey(Self) -> String = _
  getKeyCode(Self) -> KeyCode = _
  keyIsDown(Self, KeyCode) -> Bool = _
  keyIsPressed(Self) -> Bool = _
  setKeyPressed(Self, () -> Bool) -> Unit = _
  cancelKeyPressed(Self) -> Unit = _
  setKeyReleased(Self, () -> Bool) -> Unit = _
  cancelKeyReleased(Self) -> Unit = _
  setKeyTyped(Self, () -> Bool) -> Unit = _
  cancelKeyTyped(Self) -> Unit = _

  // mouse
  getMouseX(Self) -> Int = _
  getMouseY(Self) -> Int = _
  getMovedX(Self) -> Int = _
  getMovedY(Self) -> Int = _
  getPmouseX(Self) -> Int = _
  getPmouseY(Self) -> Int = _
  getPwinMouseX(Self) -> Int = _
  getPwinMouseY(Self) -> Int = _
  getWinMouseX(Self) -> Int = _
  getWinMouseY(Self) -> Int = _
  mouseIsPressed(Self) -> Bool = _
  getMouseButtonString(Self) -> String = _
  getMouseButton(Self) -> MouseButton = _
  setDoubleClicked(Self, (MouseEvent?) -> Bool) -> Unit = _
  cancelDoubleClicked(Self) -> Unit = _
  setMouseClicked(Self, (MouseEvent?) -> Bool) -> Unit = _
  cancelMouseClicked(Self) -> Unit = _
  setMouseDragged(Self, (MouseEvent?) -> Bool) -> Unit = _
  cancelMouseDragged(Self) -> Unit = _
  setMouseMoved(Self, (MouseEvent?) -> Bool) -> Unit = _
  cancelMouseMoved(Self) -> Unit = _
  setMousePressed(Self, (MouseEvent?) -> Bool) -> Unit = _
  cancelMousePressed(Self) -> Unit = _
  setMouseReleased(Self, (MouseEvent?) -> Bool) -> Unit = _
  cancelMouseReleased(Self) -> Unit = _
  setMouseWheel(Self, (MouseEvent?) -> Bool) -> Unit = _
  cancelMouseWheel(Self) -> Unit = _
  requestPointerLock(Self) -> Unit = _
  exitPointerLock(Self) -> Unit = _

  // shape_attributes
  ellipseMode(Self, String) -> Unit = _
  rectMode(Self, String) -> Unit = _
  noSmooth(Self) -> Unit = _
  smooth(Self) -> Unit = _
  strokeCap(Self, String) -> Unit = _
  strokeJoin(Self, String) -> Unit = _
  strokeWeight(Self, Double) -> Unit = _

  // shape_2D
  arc(Self, Double, Double, Double, Double, Double, Double, String?, Int?) -> Unit = _
  circle(Self, Double, Double, Double) -> Unit = _
  ellipse(Self, Double, Double, Double, Double) -> Unit = _
  line(Self, Double, Double, Double, Double) -> Unit = _
  point(Self, Double, Double) -> Unit = _
  quad(Self, Double, Double, Double, Double, Double, Double, Double, Double) -> Unit = _
  rect(Self, Double, Double, Double, Double) -> Unit = _
  triangle(Self, Double, Double, Double, Double, Double, Double) -> Unit = _
  square(Self, Double, Double, Double) -> Unit = _

  // shape_curve
  bezier(Self, Double, Double, Double, Double, Double, Double, Double, Double) -> Unit = _
  bezierPoint(Self, Double, Double, Double, Double, Double) -> Double = _
  bezierTangent(Self, Double, Double, Double, Double, Double) -> Double = _
  curve(Self, Double, Double, Double, Double, Double, Double, Double, Double) -> Unit = _
  curvePoint(Self, Double, Double, Double, Double, Double) -> Double = _
  curveTangent(Self, Double, Double, Double, Double, Double) -> Double = _
  curveTightness(Self, Double) -> Unit = _

  // shape_vertex
  beginContour(Self) -> Unit = _
  endContour(Self) -> Unit = _
  beginShape(Self, String?) -> Unit = _
  endShape(Self, String?, Int?) -> Unit = _
  bezierVertex(Self, Double, Double, Double, Double, Double, Double) -> Unit = _
  curveVertex(Self, Double, Double) -> Unit = _
  vertex(Self, Double, Double, Double?, Double?, Double?) -> Unit = _
  normal(Self, Double, Double, Double?) -> Unit = _
  quadraticVertex(Self, Double, Double, Double, Double) -> Unit = _

  // color_setting
  noStroke(Self) -> Unit = _
  background(Self, Double, Double?, Double?, Double?) -> Unit = _
  fillColorPara(Self, Double, Double?, Double?, Double?) -> Unit = _
  fillColorObj(Self, Color) -> Unit = _
  beginClip(Self, Double, Double, Double, Double) -> Unit = _
  endClip(Self) -> Unit = _
  clear(Self) -> Unit = _
  clip(Self, () -> Unit) -> Unit = _
  clipOptions(Self, () -> Unit, ClipOptions) -> Unit = _
  colorModeUniform(Self, String, Double) -> Unit = _
  colorModeDetailed(Self, String, Double, Double, Double, Double?) -> Unit = _
  erase(Self, Double?, Double?) -> Unit = _
  noErase(Self) -> Unit = _
  strokeColor(Self, Color) -> Unit = _
  strokeGray(Self, Double, Double?) -> Unit = _
  strokeComponents(Self, Double, Double, Double, Double?) -> Unit = _
  strokeString(Self, String) -> Unit = _
  noFill(Self) -> Unit = _

  // color_CreateAndReading
  brightness(Self, Color) -> Double = _
  color(Self, Double, Double?, Double?, Double?) -> Color = _
  alpha(Self, Color) -> Double = _
  blue(Self, Color) -> Double = _
  green(Self, Color) -> Double = _
  red(Self, Color) -> Double = _
  hue(Self, Color) -> Double = _
  lerpColor(Self, Color, Color, Double) -> Color = _
  lightness(Self, Color) -> Double = _
  paletteLerp(Self, Array[(String, Double)], Double) -> Color = _

  // typography_attributes
  textAlign(Self, String, String?) -> Unit = _
  textLeadingSet(Self, Double) -> Unit = _
  textLeadingGet(Self) -> Double = _
  textAscent(Self) -> Double = _
  textDescent(Self) -> Double = _
  textSizeSet(Self, Double) -> Unit = _
  textSizeGet(Self) -> Double = _
  textStyle(Self, String?) -> Unit = _
  textWidth(Self, String) -> Double = _
  textWrap(Self, String) -> Unit = _

  // typography_LoadingDisplaying
  loadFont(Self, String, ((Font) -> Unit)?, ((String) -> Unit)?) -> Font = _
  textFont(Self, Font, Double?) -> Unit = _
  text(Self, String, Double, Double, Double?, Double?) -> Unit = _

  // canvas size
  getCanvasWidth(Self) -> Double = _
  getCanvasHeight(Self) -> Double = _

  // image
  image(Self, P5Image, Double, Double, Double?, Double?) -> Unit = _
  imageMode(Self, String) -> Unit = _
  loadImage(Self, String, ((P5Image) -> Unit)?, ((String) -> Unit)?) -> P5Image = _

  // transform
  applyMatrix(
    Self,
    Double,
    Double,
    Double,
    Double,
    Double,
    Double,
    Double?,
    Double?,
    Double?,
    Double?,
    Double?,
    Double?,
    Double?,
    Double?,
    Double?,
    Double?
  ) -> Unit = _
  resetMatrix(Self) -> Unit = _
  rotate(Self, Double, Array[Double]?) -> Unit = _
  rotateX(Self, Double) -> Unit = _
  rotateY(Self, Double) -> Unit = _
  rotateZ(Self, Double) -> Unit = _
  scale(Self, Double, Double?, Double?) -> Unit = _
  shearX(Self, Double) -> Unit = _
  shearY(Self, Double) -> Unit = _
  translate(Self, Double, Double, Double?) -> Unit = _

  push(Self) -> Unit = _
  pop(Self) -> Unit = _
}

///|
pub(open) trait FontJS {
  getFont(Self) -> Font
  textBounds(Self, String, Double, Double, Double?) -> TextBounds = _
  textToPoints(Self, String, Double, Double, Double?, TextToPointsOptions?) -> Array[
    PointData,
  ] = _
}

///|
pub impl P5JS for P5Instance with getP5Instance(self) {
  self
}

///|
pub impl P5JS for P5Instance

// 这下面请实现默认方法，类的本地方法请分写在文件

// touches

///|
impl P5JS with getTouches(self) {
  self.getP5Instance().getTouches_()
}

///|
impl P5JS with setTouchEnded(self, callback) {
  self.getP5Instance().setTouchEnded_(callback)
}

///|
impl P5JS with cancelTouchEnded(self) {
  self.getP5Instance().cancelTouchEnded_()
}

///|
impl P5JS with setTouchMoved(self, callback) {
  self.getP5Instance().setTouchMoved_(callback)
}

///|
impl P5JS with cancelTouchMoved(self) {
  self.getP5Instance().cancelTouchMoved_()
}

///|
impl P5JS with setTouchStarted(self, callback) {
  self.getP5Instance().setTouchStarted_(callback)
}

///|
impl P5JS with cancelTouchStarted(self) {
  self.getP5Instance().cancelTouchStarted_()
}

// key

///|
impl P5JS with getKey(self) {
  self.getP5Instance().getKey_()
}

///|
impl P5JS with getKeyCode(self) {
  self.getP5Instance().getKeyCode_()
}

///|
impl P5JS with keyIsDown(self, keyCode) {
  self.getP5Instance().keyIsDown_(keyCode)
}

///|
impl P5JS with keyIsPressed(self) {
  self.getP5Instance().keyIsPressed_()
}

///|
impl P5JS with setKeyPressed(self, callback) {
  self.getP5Instance().setKeyPressed_(callback)
}

///|
impl P5JS with cancelKeyPressed(self) {
  self.getP5Instance().cancelKeyPressed_()
}

///|
impl P5JS with setKeyReleased(self, callback) {
  self.getP5Instance().setKeyReleased_(callback)
}

///|
impl P5JS with cancelKeyReleased(self) {
  self.getP5Instance().cancelKeyReleased_()
}

///|
impl P5JS with setKeyTyped(self, callback) {
  self.getP5Instance().setKeyTyped_(callback)
}

///|
impl P5JS with cancelKeyTyped(self) {
  self.getP5Instance().cancelKeyTyped_()
}

// mouse

///|
impl P5JS with getMouseX(self) {
  self.getP5Instance().getMouseX_()
}

///|
impl P5JS with getMouseY(self) {
  self.getP5Instance().getMouseY_()
}

///|
impl P5JS with getMovedX(self) {
  self.getP5Instance().getMovedX_()
}

///|
impl P5JS with getMovedY(self) {
  self.getP5Instance().getMovedY_()
}

///|
impl P5JS with getPmouseX(self) {
  self.getP5Instance().getPmouseX_()
}

///|
impl P5JS with getPmouseY(self) {
  self.getP5Instance().getPmouseY_()
}

///|
impl P5JS with getPwinMouseX(self) {
  self.getP5Instance().getPwinMouseX_()
}

///|
impl P5JS with getPwinMouseY(self) {
  self.getP5Instance().getPwinMouseY_()
}

///|
impl P5JS with getWinMouseX(self) {
  self.getP5Instance().getWinMouseX_()
}

///|
impl P5JS with getWinMouseY(self) {
  self.getP5Instance().getWinMouseY_()
}

///|
impl P5JS with mouseIsPressed(self) {
  self.getP5Instance().mouseIsPressed_()
}

///|
impl P5JS with getMouseButtonString(self) {
  self.getP5Instance().getMouseButtonString_()
}

///|
impl P5JS with getMouseButton(self) {
  self.getP5Instance().getMouseButton_()
}

///|
impl P5JS with setDoubleClicked(self, callback) {
  self.getP5Instance().setDoubleClicked_(callback)
}

///|
impl P5JS with cancelDoubleClicked(self) {
  self.getP5Instance().cancelDoubleClicked_()
}

///|
impl P5JS with setMouseClicked(self, callback) {
  self.getP5Instance().setMouseClicked_(callback)
}

///|
impl P5JS with cancelMouseClicked(self) {
  self.getP5Instance().cancelMouseClicked_()
}

///|
impl P5JS with setMouseDragged(self, callback) {
  self.getP5Instance().setMouseDragged_(callback)
}

///|
impl P5JS with cancelMouseDragged(self) {
  self.getP5Instance().cancelMouseDragged_()
}

///|
impl P5JS with setMouseMoved(self, callback) {
  self.getP5Instance().setMouseMoved_(callback)
}

///|
impl P5JS with cancelMouseMoved(self) {
  self.getP5Instance().cancelMouseMoved_()
}

///|
impl P5JS with setMousePressed(self, callback) {
  self.getP5Instance().setMousePressed_(callback)
}

///|
impl P5JS with cancelMousePressed(self) {
  self.getP5Instance().cancelMousePressed_()
}

///|
impl P5JS with setMouseReleased(self, callback) {
  self.getP5Instance().setMouseReleased_(callback)
}

///|
impl P5JS with cancelMouseReleased(self) {
  self.getP5Instance().cancelMouseReleased_()
}

///|
impl P5JS with setMouseWheel(self, callback) {
  self.getP5Instance().setMouseWheel_(callback)
}

///|
impl P5JS with cancelMouseWheel(self) {
  self.getP5Instance().cancelMouseWheel_()
}

///|
impl P5JS with requestPointerLock(self) {
  self.getP5Instance().requestPointerLock_()
}

///|
impl P5JS with exitPointerLock(self) {
  self.getP5Instance().exitPointerLock_()
}

// shape_attributes

///|
impl P5JS with ellipseMode(self, mode) {
  self.getP5Instance().ellipseMode_(mode)
}

///|
impl P5JS with rectMode(self, mode) {
  self.getP5Instance().rectMode_(mode)
}

///|
impl P5JS with noSmooth(self) {
  self.getP5Instance().noSmooth_()
}

///|
impl P5JS with smooth(self) {
  self.getP5Instance().smooth_()
}

///|
impl P5JS with strokeCap(self, cap) {
  self.getP5Instance().strokeCap_(cap)
}

///|
impl P5JS with strokeJoin(self, join) {
  self.getP5Instance().strokeJoin_(join)
}

///|
impl P5JS with strokeWeight(self, weight) {
  self.getP5Instance().strokeWeight_(weight)
}

// shape_2D

///|
impl P5JS with arc(self, x, y, w, h, start, stop, mode, detail) {
  self.getP5Instance().arc_(x, y, w, h, start, stop, mode~, detail~)
}

///|
impl P5JS with circle(self, x, y, d) {
  self.getP5Instance().circle_(x, y, d)
}

///|
impl P5JS with ellipse(self, x, y, w, h) {
  self.getP5Instance().ellipse_(x, y, w, h)
}

///|
impl P5JS with line(self, x1, y1, x2, y2) {
  self.getP5Instance().line_(x1, y1, x2, y2)
}

///|
impl P5JS with point(self, x, y) {
  self.getP5Instance().point_(x, y)
}

///|
impl P5JS with quad(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  self.getP5Instance().quad_(x1, y1, x2, y2, x3, y3, x4, y4)
}

///|
impl P5JS with rect(self, x, y, w, h) {
  self.getP5Instance().rect_(x, y, w, h)
}

///|
impl P5JS with triangle(self, x1, y1, x2, y2, x3, y3) {
  self.getP5Instance().triangle_(x1, y1, x2, y2, x3, y3)
}

///|
impl P5JS with square(self, x, y, s) {
  self.getP5Instance().square_(x, y, s)
}

// shape_curve

///|
impl P5JS with bezier(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  self.getP5Instance().bezier_(x1, y1, x2, y2, x3, y3, x4, y4)
}

///|
impl P5JS with bezierPoint(self, a, b, c, d, t) {
  self.getP5Instance().bezierPoint_(a, b, c, d, t)
}

///|
impl P5JS with bezierTangent(self, a, b, c, d, t) {
  self.getP5Instance().bezierTangent_(a, b, c, d, t)
}

///|
impl P5JS with curve(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  self.getP5Instance().curve_(x1, y1, x2, y2, x3, y3, x4, y4)
}

///|
impl P5JS with curvePoint(self, a, b, c, d, t) {
  self.getP5Instance().curvePoint_(a, b, c, d, t)
}

///|
impl P5JS with curveTangent(self, a, b, c, d, t) {
  self.getP5Instance().curveTangent_(a, b, c, d, t)
}

///|
impl P5JS with curveTightness(self, amount) {
  self.getP5Instance().curveTightness_(amount)
}

// shape_vertex

///|
impl P5JS with beginContour(self) {
  self.getP5Instance().beginContour_()
}

///|
impl P5JS with endContour(self) {
  self.getP5Instance().endContour_()
}

///|
impl P5JS with beginShape(self, mode) {
  match mode {
    Some(m) => self.getP5Instance().beginShape1_(mode=m)
    None => self.getP5Instance().beginShape2_()
  }
}

///|
impl P5JS with endShape(self, mode, count) {
  match (mode, count) {
    (Some(m), Some(c)) => self.getP5Instance().endShape1_(mode=m, count=c)
    (Some(m), None) => self.getP5Instance().endShape2_(mode=m)
    (None, Some(c)) => self.getP5Instance().endShape3_(count=c)
    (None, None) => self.getP5Instance().endShape4_()
  }
}

///|
impl P5JS with bezierVertex(self, x2, y2, x3, y3, x4, y4) {
  self.getP5Instance().bezierVertex_(x2, y2, x3, y3, x4, y4)
}

///|
impl P5JS with curveVertex(self, x, y) {
  self.getP5Instance().curveVertex_(x, y)
}

///|
impl P5JS with vertex(self, x, y, z, u, v) {
  match (z, u, v) {
    (Some(zv), Some(uv), Some(vv)) =>
      self.getP5Instance().vertex_(x, y, z=zv, u=uv, v=vv)
    (Some(zv), Some(uv), None) => self.getP5Instance().vertex_(x, y, z=zv, u=uv)
    (Some(zv), None, None) => self.getP5Instance().vertex_(x, y, z=zv)
    (None, None, None) => self.getP5Instance().vertex_(x, y)
    _ => self.getP5Instance().vertex_(x, y)
  }
}

///|
impl P5JS with normal(self, nx, ny, nz) {
  match nz {
    Some(nzv) => self.getP5Instance().normal_(nx, ny, nz=nzv)
    None => self.getP5Instance().normal_(nx, ny)
  }
}

///|
impl P5JS with quadraticVertex(self, x2, y2, x3, y3) {
  self.getP5Instance().quadraticVertex_(x2, y2, x3, y3)
}

// color_setting

///|
impl P5JS with noStroke(self) {
  self.getP5Instance().noStroke_()
}

///|
impl P5JS with background(self, v1, v2, v3, a) {
  self.getP5Instance().background_(v1, v2~, v3~, a~)
}

///|
impl P5JS with fillColorPara(self, v1, v2, v3, a) {
  self.getP5Instance().fill_colorPara_(v1, v2~, v3~, a~)
}

///|
impl P5JS with fillColorObj(self, c) {
  self.getP5Instance().fill_colorObj_(c)
}

///|
impl P5JS with beginClip(self, x, y, w, h) {
  self.getP5Instance().beginClip_(x, y, w, h)
}

///|
impl P5JS with endClip(self) {
  self.getP5Instance().endClip_()
}

///|
impl P5JS with clear(self) {
  self.getP5Instance().clear_()
}

///|
impl P5JS with clip(self, callback) {
  self.getP5Instance().clip_(callback)
}

///|
impl P5JS with clipOptions(self, callback, options) {
  self.getP5Instance().clip_options_(callback, options)
}

///|
impl P5JS with colorModeUniform(self, mode, max) {
  self.getP5Instance().colorMode_uniform_(mode, max)
}

///|
impl P5JS with colorModeDetailed(self, mode, max1, max2, max3, maxA) {
  self.getP5Instance().colorMode_detailed_(mode, max1, max2, max3, maxA~)
}

///|
impl P5JS with erase(self, strengthFill, strengthStroke) {
  self.getP5Instance().erase_(strengthFill~, strengthStroke~)
}

///|
impl P5JS with noErase(self) {
  self.getP5Instance().noErase_()
}

///|
impl P5JS with strokeColor(self, c) {
  self.getP5Instance().stroke_color_(c)
}

///|
impl P5JS with strokeGray(self, gray, alpha) {
  self.getP5Instance().stroke_gray_(gray, alpha~)
}

///|
impl P5JS with strokeComponents(self, v1, v2, v3, alpha) {
  self.getP5Instance().stroke_components_(v1, v2, v3, alpha~)
}

///|
impl P5JS with strokeString(self, color_string) {
  self.getP5Instance().stroke_string_(color_string)
}

///|
impl P5JS with noFill(self) {
  self.getP5Instance().noFill_()
}

// color_CreateAndReading

///|
impl P5JS with brightness(self, c) {
  self.getP5Instance().brightness_(c)
}

///|
impl P5JS with color(self, v1, v2, v3, a) {
  self.getP5Instance().color_(v1, v2~, v3~, a~)
}

///|
impl P5JS with alpha(self, c) {
  self.getP5Instance().alpha_(c)
}

///|
impl P5JS with blue(self, c) {
  self.getP5Instance().blue_(c)
}

///|
impl P5JS with green(self, c) {
  self.getP5Instance().green_(c)
}

///|
impl P5JS with red(self, c) {
  self.getP5Instance().red_(c)
}

///|
impl P5JS with hue(self, c) {
  self.getP5Instance().hue_(c)
}

///|
impl P5JS with lerpColor(self, c1, c2, amount) {
  self.getP5Instance().lerpColor_(c1, c2, amount)
}

///|
impl P5JS with lightness(self, c) {
  self.getP5Instance().lightness_(c)
}

///|
impl P5JS with paletteLerp(self, colors_stops, amt) {
  self.getP5Instance().paletteLerp_(colors_stops, amt)
}

// typography_attributes

///|
impl P5JS with textAlign(self, horizAlign, vertAlign) {
  match vertAlign {
    Some(v) => self.getP5Instance().textAlign_(horizAlign, vertAlign=Some(v))
    None => self.getP5Instance().textAlign_(horizAlign)
  }
}

///|
impl P5JS with textLeadingSet(self, leading) {
  self.getP5Instance().textLeading_set_(leading)
}

///|
impl P5JS with textLeadingGet(self) {
  self.getP5Instance().textLeading_get_()
}

///|
impl P5JS with textAscent(self) {
  self.getP5Instance().textAscent_()
}

///|
impl P5JS with textDescent(self) {
  self.getP5Instance().textDescent_()
}

///|
impl P5JS with textSizeSet(self, size) {
  self.getP5Instance().textSize_set_(size)
}

///|
impl P5JS with textSizeGet(self) {
  self.getP5Instance().textSize_get_()
}

///|
impl P5JS with textStyle(self, style) {
  self.getP5Instance().textStyle_(style~)
}

///|
impl P5JS with textWidth(self, str) {
  self.getP5Instance().textWidth_(str)
}

///|
impl P5JS with textWrap(self, mode) {
  self.getP5Instance().textWrap_(mode)
}

// typography_LoadingDisplaying

///|
impl P5JS with loadFont(self, path, onSuccess, onFailure) {
  self.getP5Instance().loadFont_(path, onSuccess~, onFailure~)
}

///|
impl P5JS with textFont(self, font, size) {
  match size {
    Some(s) => self.getP5Instance().textFont_(font, size=Some(s))
    None => self.getP5Instance().textFont_(font)
  }
}

///|
impl P5JS with text(self, str, x, y, x2, y2) {
  match (x2, y2) {
    (Some(xv2), Some(yv2)) => self.getP5Instance().text1_(str, x, y, x2=Some(xv2), y2=Some(yv2))
    (Some(xv2), None) => self.getP5Instance().text3_(str, x, y, x2=Some(xv2))
    (None, None) => self.getP5Instance().text2_(str, x, y)
    _ => self.getP5Instance().text2_(str, x, y)
  }
}

///|
impl P5JS with getCanvasWidth(self) {
  self.getP5Instance().getCanvasWidth_()
}

impl P5JS with getCanvasHeight(self) {
  self.getP5Instance().getCanvasHeight_()
}

// image

///|
impl P5JS with image(self, img, x, y, width, height) {
  self.getP5Instance().image_(img, x, y, width~, height~)
}

///|
impl P5JS with imageMode(self, mode) {
  self.getP5Instance().imageMode_(mode)
}

///|
impl P5JS with loadImage(self, path, callback, errorCallback) {
  match (callback, errorCallback) {
    (Some(cb), Some(eb)) => self.getP5Instance().loadImage1_(path, Some(cb), Some(eb))
    (Some(cb), None) => self.getP5Instance().loadImage3_(path, cb)
    (None, None) => self.getP5Instance().loadImage2_(path)
    _ => self.getP5Instance().loadImage2_(path)
  }
}

// transform

///|
impl P5JS with applyMatrix(self, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  self.getP5Instance().applyMatrix_(a, b, c, d, e, f, g~, h~, i~, j~, k~, l~, m~, n~, o~, p~)
}

///|
impl P5JS with resetMatrix(self) {
  self.getP5Instance().resetMatrix_()
}

///|
impl P5JS with rotate(self, angle, axis) {
  match axis {
    Some(ax) => self.getP5Instance().rotate1_(angle, axis=Some(ax))
    None => self.getP5Instance().rotate1_(angle)
  }
}

///|
impl P5JS with rotateX(self, angle) {
  self.getP5Instance().rotateX_(angle)
}

///|
impl P5JS with rotateY(self, angle) {
  self.getP5Instance().rotateY_(angle)
}

///|
impl P5JS with rotateZ(self, angle) {
  self.getP5Instance().rotateZ_(angle)
}

///|
impl P5JS with scale(self, s, y, z) {
  self.getP5Instance().scale_(s, y~, z~)
}

///|
impl P5JS with shearX(self, angle) {
  self.getP5Instance().shearX_(angle)
}

///|
impl P5JS with shearY(self, angle) {
  self.getP5Instance().shearY_(angle)
}

///|
impl P5JS with translate(self, x, y, z) {
  match z {
    Some(zv) => self.getP5Instance().translate1_(x, y, z=Some(zv))
    None => self.getP5Instance().translate2_(x, y)
  }
}

impl P5JS with push(self) {
  self.getP5Instance().push_()
}

impl P5JS with pop(self) {
  self.getP5Instance().pop_()
}

///|
impl FontJS with textBounds(self, str, x, y, fontSize) {
  self.getFont().textBounds_(str, x, y, fontSize~)
}

///|
impl FontJS with textToPoints(self, str, x, y, fontSize, options) {
  self.getFont().textToPoints_(str, x, y, fontSize~, options~)
}

///|
pub impl FontJS for Font with getFont(self) {
  self
}

///|
pub impl FontJS for Font
