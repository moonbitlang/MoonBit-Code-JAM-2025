
pub extern "js" fn b2OBB() -> B2OBB =
  #| () => new b2OBB()

pub extern "js" fn B2OBB::getR(self: B2OBB) -> B2Mat22 =
  #| (self) => self.R

pub extern "js" fn B2OBB::setR(self: B2OBB, r: B2Mat22) -> Unit =
  #| (self, r) => { self.R = r; }

pub extern "js" fn B2OBB::getCenter(self: B2OBB) -> B2Vec2 =
  #| (self) => self.center

pub extern "js" fn B2OBB::setCenter(self: B2OBB, center: B2Vec2) -> Unit =
  #| (self, center) => { self.center = center; }

pub extern "js" fn B2OBB::getExtents(self: B2OBB) -> B2Vec2 =
  #| (self) => self.extents

pub extern "js" fn B2OBB::setExtents(self: B2OBB, extents: B2Vec2) -> Unit =
  #| (self, extents) => { self.extents = extents; }