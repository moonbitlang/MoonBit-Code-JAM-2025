///|
#external
pub type Touch

// 因为用户无法操控，所以直接写成方法

///|
pub extern "js" fn Touch::getX(self : Touch) -> Double =
  #| (self) => self.x

///|
pub extern "js" fn Touch::getY(self : Touch) -> Double =
  #| (self) => self.y

///|
pub extern "js" fn Touch::getWinX(self : Touch) -> Double =
  #| (self) => self.winX

///|
pub extern "js" fn Touch::getWinY(self : Touch) -> Double =
  #| (self) => self.winY

///|
pub extern "js" fn Touch::getClientX(self : Touch) -> Double =
  #| (self) => self.clientX

///|
pub extern "js" fn Touch::getClientY(self : Touch) -> Double =
  #| (self) => self.clientY

///|
pub extern "js" fn Touch::getId(self : Touch) -> Int =
  #| (self) => self.id

// P5Instance 方法

///|
extern "js" fn P5Instance::getTouches_(self : P5Instance) -> FixedArray[Touch] =
  #| (self) => self.touches

///|
extern "js" fn P5Instance::setTouchEnded_(
  self : P5Instance,
  callback : () -> Unit,
) =
  #| (self, callback) => self.touchEnded = callback

///|
extern "js" fn P5Instance::cancelTouchEnded_(self : P5Instance) =
  #| (self) => self.touchEnded = null

///|
extern "js" fn P5Instance::setTouchMoved_(
  self : P5Instance,
  callback : () -> Unit,
) =
  #| (self, callback) => self.touchMoved = callback

///|
extern "js" fn P5Instance::cancelTouchMoved_(self : P5Instance) =
  #| (self) => self.touchMoved = null

///|
extern "js" fn P5Instance::setTouchStarted_(
  self : P5Instance,
  callback : () -> Unit,
) =
  #| (self, callback) => self.touchStarted = callback

///|
extern "js" fn P5Instance::cancelTouchStarted_(self : P5Instance) =
  #| (self) => self.touchStarted = null
