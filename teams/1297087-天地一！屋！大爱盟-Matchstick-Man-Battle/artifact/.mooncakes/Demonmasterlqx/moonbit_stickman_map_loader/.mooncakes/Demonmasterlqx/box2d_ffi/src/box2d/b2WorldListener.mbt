// box2d/dynamics/b2WorldListenser.js

pub extern "js" fn b2WorldListener() -> B2WorldListener =
  #| () => new b2WorldListener()

// If a body is destroyed, then any joints attached to it are also destroyed.
// This prevents memory leaks, but you may unexpectedly be left with an
// orphaned joint pointer.
// Box2D will notify you when a joint is implicitly destroyed.
// It is NOT called if you directly destroy a joint.
// Implement this abstract class and provide it to b2World via
// b2World::SetListener().
// DO NOT modify the Box2D world inside this callback.
pub extern "js" fn B2WorldListener::setNotifyJointDestroyed(self : B2WorldListener, notify_function: (B2Joint) -> Unit) = 
  #| (self, notify_function) => { self.NotifyJointDestroyed = notify_function; }

// This is called when a body's shape passes outside of the world boundary. If you
// override this and pass back e_destroyBody, you must nullify your copies of the
// body pointer.
pub extern "js" fn B2WorldListener::setNotifyBoundaryViolated(self : B2WorldListener, notify_function: (B2Body) -> Int) = 
  #| (self, notify_function) => { self.NotifyBoundaryViolated = notify_function; }