// MoonBox2D's b2Distance

pub extern "js" fn b2Distance() -> B2Distance =
  #| () => new b2Distance()

// main distance calculation method
pub extern "js" fn B2Distance::distance(
  self: B2Distance,
  p1Out: B2Vec2,
  p2Out: B2Vec2,
  shape1: B2Shape,
  shape2: B2Shape
) -> Double =
  #| (self, p1Out, p2Out, shape1, shape2) => self.Distance(p1Out, p2Out, shape1, shape2)

pub extern "js" fn B2Distance::processTwo(
  self: B2Distance,
  p1Out: B2Vec2,
  p2Out: B2Vec2,
  p1s: Array[B2Vec2],
  p2s: Array[B2Vec2],
  points: Array[B2Vec2]
) -> Int =
  #| (self, p1Out, p2Out, p1s, p2s, points) => self.ProcessTwo(p1Out, p2Out, p1s, p2s, points)

pub extern "js" fn B2Distance::processThree(
  self: B2Distance,
  p1Out: B2Vec2,
  p2Out: B2Vec2,
  p1s: Array[B2Vec2],
  p2s: Array[B2Vec2],
  points: Array[B2Vec2]
) -> Int =
  #| (self, p1Out, p2Out, p1s, p2s, points) => self.ProcessThree(p1Out, p2Out, p1s, p2s, points)

pub extern "js" fn b2Distance_getGJKIterations() -> Int =
  #| () => b2Distance.g_GJK_Iterations