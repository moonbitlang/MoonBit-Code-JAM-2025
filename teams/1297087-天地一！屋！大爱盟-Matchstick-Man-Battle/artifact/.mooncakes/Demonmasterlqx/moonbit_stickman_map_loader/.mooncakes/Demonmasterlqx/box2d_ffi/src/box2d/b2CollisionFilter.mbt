// box2d/dynamics/b2CollisionFilter.js


pub extern "js" fn b2CollisionFilter() -> B2CollisionFilter =
  #| () => new b2CollisionFilter()

// 可以手动设置碰撞过滤函数
// 否则将会使用默认的碰撞过滤函数
pub extern "js" fn B2CollisionFilter::setShouldCollide(self: B2CollisionFilter, should_collide_function: (B2Shape, B2Shape) -> Bool) =
  #| (self, should_collide_function) => { self.ShouldCollide = should_collide_function; }
