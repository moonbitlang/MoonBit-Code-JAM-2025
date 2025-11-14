///|
/// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
#external
pub type MouseEvent

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseWheel/
/// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
pub extern "js" fn MouseEvent::getDelta(self : MouseEvent) -> Int =
  #| (self) => self.delta

// mouse button

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseButton/
pub(all) enum MouseButton {
  LEFT
  RIGHT
  CENTER
  UnknownMouseButton
} derive(Eq, Show, Hash)

// mouse

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseX/
extern "js" fn P5Instance::getMouseX_(self : P5Instance) -> Int =
  #| (self) => self.mouseX

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseY/
extern "js" fn P5Instance::getMouseY_(self : P5Instance) -> Int =
  #| (self) => self.mouseY

///|
/// https://p5js.org/zh-Hans/reference/p5/movedX/
extern "js" fn P5Instance::getMovedX_(self : P5Instance) -> Int =
  #| (self) => self.movedX

///|
/// https://p5js.org/zh-Hans/reference/p5/movedY/
extern "js" fn P5Instance::getMovedY_(self : P5Instance) -> Int =
  #| (self) => self.movedY

///|
/// https://p5js.org/zh-Hans/reference/p5/pmouseX/
extern "js" fn P5Instance::getPmouseX_(self : P5Instance) -> Int =
  #| (self) => self.pmouseX

///|
/// https://p5js.org/zh-Hans/reference/p5/pmouseY/
extern "js" fn P5Instance::getPmouseY_(self : P5Instance) -> Int =
  #| (self) => self.pmouseY

///|
/// https://p5js.org/zh-Hans/reference/p5/pwinMouseX/
extern "js" fn P5Instance::getPwinMouseX_(self : P5Instance) -> Int =
  #| (self) => self.pwinMouseX

///|
/// https://p5js.org/zh-Hans/reference/p5/pwinMouseY/
extern "js" fn P5Instance::getPwinMouseY_(self : P5Instance) -> Int =
  #| (self) => self.pwinMouseY

///|
/// https://p5js.org/zh-Hans/reference/p5/winMouseX/
extern "js" fn P5Instance::getWinMouseX_(self : P5Instance) -> Int =
  #| (self) => self.winMouseX

///|
/// https://p5js.org/zh-Hans/reference/p5/winMouseY/
extern "js" fn P5Instance::getWinMouseY_(self : P5Instance) -> Int =
  #| (self) => self.winMouseY

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseIsPressed/
extern "js" fn P5Instance::mouseIsPressed_(self : P5Instance) -> Bool =
  #| (self) => self.mouseIsPressed

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseButton/
extern "js" fn P5Instance::getMouseButtonString_(self : P5Instance) -> String =
  #| (self) => self.mouseButton

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseButton/
fn P5Instance::getMouseButton_(self : P5Instance) -> MouseButton {
  let btn = self.getMouseButtonString_()
  return match btn {
    "LEFT" => MouseButton::LEFT
    "left" => MouseButton::LEFT
    "RIGHT" => MouseButton::RIGHT
    "right" => MouseButton::RIGHT
    "CENTER" => MouseButton::CENTER
    "center" => MouseButton::CENTER
    _ => MouseButton::UnknownMouseButton
  }
}

///|
/// https://p5js.org/zh-Hans/reference/p5/doubleClicked/
extern "js" fn P5Instance::setDoubleClicked_(
  self : P5Instance,
  callback : (MouseEvent?) -> Bool,
) =
  #| (self, callback) => self.doubleClicked = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/doubleClicked/
extern "js" fn P5Instance::cancelDoubleClicked_(self : P5Instance) =
  #| (self) => self.doubleClicked = null

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseClicked/
extern "js" fn P5Instance::setMouseClicked_(
  self : P5Instance,
  callback : (MouseEvent?) -> Bool,
) =
  #| (self, callback) => self.mouseClicked = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseClicked/
extern "js" fn P5Instance::cancelMouseClicked_(self : P5Instance) =
  #| (self) => self.mouseClicked = null

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseMoved/
extern "js" fn P5Instance::setMouseMoved_(
  self : P5Instance,
  callback : (MouseEvent?) -> Bool,
) =
  #| (self, callback) => self.mouseMoved = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseMoved/
extern "js" fn P5Instance::cancelMouseMoved_(self : P5Instance) =
  #| (self) => self.mouseMoved = null

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseWheel/
extern "js" fn P5Instance::setMouseWheel_(
  self : P5Instance,
  callback : (MouseEvent?) -> Bool,
) =
  #| (self, callback) => self.mouseWheel = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseWheel/
extern "js" fn P5Instance::cancelMouseWheel_(self : P5Instance) =
  #| (self) => self.mouseWheel = null

///|
/// https://p5js.org/zh-Hans/reference/p5/requestPointerLock/
extern "js" fn P5Instance::requestPointerLock_(self : P5Instance) =
  #| (self) => self.requestPointerLock()

///|
/// https://p5js.org/zh-Hans/reference/p5/exitPointerLock/
extern "js" fn P5Instance::exitPointerLock_(self : P5Instance) =
  #| (self) => self.exitPointerLock()

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseDragged/
extern "js" fn P5Instance::setMouseDragged_(
  self : P5Instance,
  callback : (MouseEvent?) -> Bool,
) =
  #| (self, callback) => self.mouseDragged = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseDragged/
extern "js" fn P5Instance::cancelMouseDragged_(self : P5Instance) =
  #| (self) => self.mouseDragged = null

///|
/// https://p5js.org/zh-Hans/reference/p5/mousePressed/
extern "js" fn P5Instance::setMousePressed_(
  self : P5Instance,
  callback : (MouseEvent?) -> Bool,
) =
  #| (self, callback) => self.mousePressed = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/mousePressed/
extern "js" fn P5Instance::cancelMousePressed_(self : P5Instance) =
  #| (self) => self.mousePressed = null

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseReleased/
extern "js" fn P5Instance::setMouseReleased_(
  self : P5Instance,
  callback : (MouseEvent?) -> Bool,
) =
  #| (self, callback) => self.mouseReleased = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/mouseReleased/
extern "js" fn P5Instance::cancelMouseReleased_(self : P5Instance) =
  #| (self) => self.mouseReleased = null
