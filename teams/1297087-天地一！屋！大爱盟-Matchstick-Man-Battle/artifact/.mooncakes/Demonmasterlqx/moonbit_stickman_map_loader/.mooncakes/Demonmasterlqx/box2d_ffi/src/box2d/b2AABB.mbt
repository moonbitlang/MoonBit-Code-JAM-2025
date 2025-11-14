// MoonBox2D's b2AABB
// Create by Great-Love-League
// Contact with us if you have any questions.

// constructor
pub extern "js" fn b2AABB() -> B2AABB =
  #| () => new b2AABB()

// functions
pub extern "js" fn B2AABB::isValid(self: B2AABB) -> Bool =
  #| self => self.IsValid()

pub extern "js" fn B2AABB::setminVertex(self: B2AABB, v: B2Vec2) =
  #| (self, v) => { self.minVertex.Set(v.x, v.y); }

pub extern "js" fn B2AABB::setmaxVertex(self: B2AABB, v: B2Vec2) =
  #| (self, v) => { self.maxVertex.Set(v.x, v.y); }