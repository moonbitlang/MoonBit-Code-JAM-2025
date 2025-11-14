pub extern "js" fn b2BroadPhase(worldAABB : B2AABB, callback : B2PairCallback) -> B2BroadPhase =
  #| (worldAABB, callback) -> new b2BroadPhase(worldAABB, callback)

pub extern "js" fn B2BroadPhase::inRange(self : B2BroadPhase, aabb : B2AABB) -> Bool =
  #| (self, aabb) -> self.InRange(aabb)

pub extern "js" fn B2BroadPhase::getProxy(self : B2BroadPhase, proxyID : Int) -> B2Proxy? =
  #| (self, proxyID) -> self.GetProxy(proxyID)

pub extern "js" fn B2BroadPhase::createProxy(self : B2BroadPhase, aabb : B2AABB) -> Int =
  #| (self, aabb) -> self.CreateProxy(aabb)

pub extern "js" fn B2BroadPhase::destroyProxy(self : B2BroadPhase, proxyID : Int) =
  #| (self, proxyID) => { self.DestroyProxy(proxyID); }

pub extern "js" fn B2BroadPhase::moveProxy(self : B2BroadPhase, proxyID : Int, aabb : B2AABB) =
  #| (self, proxyID, aabb) => { self.MoveProxy(proxyID, aabb); }

pub extern "js" fn B2BroadPhase::commit(self : B2BroadPhase) =
  #| self => { self.Commit(); }

pub extern "js" fn B2BroadPhase::queryAABB(self : B2BroadPhase, aabb : B2AABB, maxCount: Int) -> Int =
  #| (self, aabb, maxCount) -> self.QueryAABB(aabb, maxCount)

pub extern "js" fn B2BroadPhase::validate(self : B2BroadPhase) -> Bool =
  #| self -> self.Validate()

pub extern "js" fn B2BroadPhase::computeBounds(self : B2BroadPhase, lowerBound : B2Vec2, upperBound : B2Vec2, aabb : B2AABB) =
  #| (self, lowerBound, upperBound, aabb) => { self.ComputeBounds(lowerBound, upperBound, aabb); }

pub extern "js" fn B2BroadPhase::testOverlapValidate(self : B2BroadPhase, p1 : B2Proxy, p2 : B2Proxy) -> Bool =
  #| (self, p1, p2) -> self.TestOverlapValidate(p1, p2)

pub extern "js" fn B2BroadPhase::testOverlap(self : B2BroadPhase, b : B2Proxy, p : B2Proxy) -> Bool =
  #| (self, b, p) -> self.TestOverlap(b, p)

pub extern "js" fn B2BroadPhase::query(self : B2BroadPhase, lowerQueryOut : B2Vec2, upperQueryOut : B2Vec2, lowerValue : Int, upperValue : Int, bound : Array[B2Bound], boundCount : Int, axis : Int) -> Unit =
  #| (self, lowerQueryOut, upperQueryOut, lowerValue, upperValue, bound, boundCount, axis) => { self.Query(lowerQueryOut, upperQueryOut, lowerValue, upperValue, bound, boundCount, axis); }
