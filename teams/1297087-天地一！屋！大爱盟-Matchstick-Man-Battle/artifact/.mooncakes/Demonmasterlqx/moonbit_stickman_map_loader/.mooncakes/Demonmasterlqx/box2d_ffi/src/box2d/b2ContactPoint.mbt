
pub extern "js" fn b2ContactPoint() -> B2ContactPoint =
  #| () => new b2ContactPoint()

pub extern "js" fn B2ContactPoint::getPosition(self: B2ContactPoint) -> B2Vec2 =
  #| (self) => self.position

pub extern "js" fn B2ContactPoint::setPosition(self: B2ContactPoint, position: B2Vec2) -> Unit =
  #| (self, position) => { self.position = position; }

pub extern "js" fn B2ContactPoint::getId(self: B2ContactPoint) -> B2ContactID =
  #| (self) => self.id

pub extern "js" fn B2ContactPoint::setId(self: B2ContactPoint, id: B2ContactID) -> Unit =
  #| (self, id) => { self.id = id; }

pub extern "js" fn B2ContactPoint::getSeparation(self: B2ContactPoint) -> Double =
  #| (self) => self.separation

pub extern "js" fn B2ContactPoint::setSeparation(self: B2ContactPoint, separation: Double) -> Unit =
  #| (self, separation) => { self.separation = separation; }

pub extern "js" fn B2ContactPoint::getNormalImpulse(self: B2ContactPoint) -> Double =
  #| (self) => self.normalImpulse

pub extern "js" fn B2ContactPoint::setNormalImpulse(self: B2ContactPoint, impulse: Double) -> Unit =
  #| (self, impulse) => { self.normalImpulse = impulse; }

pub extern "js" fn B2ContactPoint::getTangentImpulse(self: B2ContactPoint) -> Double =
  #| (self) => self.tangentImpulse

pub extern "js" fn B2ContactPoint::setTangentImpulse(self: B2ContactPoint, impulse: Double) -> Unit =
  #| (self, impulse) => { self.tangentImpulse = impulse; }