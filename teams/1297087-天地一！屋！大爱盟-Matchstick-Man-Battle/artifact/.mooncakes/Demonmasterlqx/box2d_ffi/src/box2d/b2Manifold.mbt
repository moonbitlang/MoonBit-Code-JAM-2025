// MoonBox2D's b2Manifold
// Create by Great-Love-League
// Contact with us if you have any questions.

// constructor
pub extern "js" fn b2Manifold() -> B2Manifold =
  #| () => new b2Manifold()

// functions
pub extern "js" fn B2Manifold::reset(self: B2Manifold) -> Unit =
  #| self => self.Reset()

pub extern "js" fn B2Manifold::set(self: B2Manifold, m: B2Manifold) -> Unit =
  #| (self, m) => self.Set(m)

// get and set
pub extern "js" fn B2Manifold::setPoints(self: B2Manifold, points: Array[B2ContactPoint]) -> Unit =
  #| (self, points) => { self.points = points; }

pub extern "js" fn B2Manifold::setNormal(self: B2Manifold, normal: B2Vec2) -> Unit =
  #| (self, normal) => { self.normal = normal; }

pub extern "js" fn B2Manifold::setPointCount(self: B2Manifold, pointCount: Int) -> Unit =
  #| (self, pointCount) => { self.pointCount = pointCount; }

pub extern "js" fn B2Manifold::getPoints(self: B2Manifold) -> Array[B2ContactPoint] =
  #| self => self.points

pub extern "js" fn B2Manifold::getNormal(self: B2Manifold) -> B2Vec2 =
  #| self => self.normal

pub extern "js" fn B2Manifold::getPointCount(self: B2Manifold) -> Int =
  #| self => self.pointCount
