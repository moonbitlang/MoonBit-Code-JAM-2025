// box2d/dynamics/b2Body.js

pub extern "js" fn B2Body::setOriginPosition(self : B2Body, position: B2Vec2, rotate: Double) =
  #| (self, position, rotate) => { self.SetOriginPosition(position, rotate); }

pub extern "js" fn B2Body::getOriginPosition(self : B2Body) -> B2Vec2 =
  #| self => self.GetOriginPosition()

pub extern "js" fn B2Body::setCenterPosition(self : B2Body, position: B2Vec2, rotate: Double) -> Unit =
  #| (self, position, rotate) => { self.SetCenterPosition(position, rotate); }

pub extern "js" fn B2Body::getCenterPosition(self : B2Body) -> B2Vec2 =
  #| self => self.GetCenterPosition()

pub extern "js" fn B2Body::getRotation(self : B2Body) -> Double =
  #| self => self.GetRotation()

pub extern "js" fn B2Body::getRotationMatrix(self : B2Body) -> B2Mat22 =
  #| self => self.GetRotationMatrix()

pub extern "js" fn B2Body::getLinearVelocity(self : B2Body) -> B2Vec2 =
  #| self => self.GetLinearVelocity()

pub extern "js" fn B2Body::setLinearVelocity(self : B2Body, velocity: B2Vec2) =
  #| (self, velocity) => { self.SetLinearVelocity(velocity); }

pub extern "js" fn B2Body::getAngularVelocity(self : B2Body) -> Double =
  #| self => self.GetAngularVelocity()

pub extern "js" fn B2Body::setAngularVelocity(self : B2Body, velocity: Double) =
  #| (self, velocity) => { self.SetAngularVelocity(velocity); }

// Apply a force at a world point. Additive.
pub extern "js" fn B2Body::applyForce(self : B2Body, force: B2Vec2, point: B2Vec2) =
  #| (self, force, point) => { self.ApplyForce(force, point); }

// Apply a torque. Additive.
pub extern "js" fn B2Body::applyTorque(self : B2Body, torque: Double) =
  #| (self, torque) => { self.ApplyTorque(torque); }

// Apply an impulse at a point. This immediately modifies the velocity.
pub extern "js" fn B2Body::applyImpulse(self : B2Body, impulse: B2Vec2, point: B2Vec2) =
  #| (self, impulse, point) => { self.ApplyImpulse(impulse, point); }

pub extern "js" fn B2Body::getMass(self : B2Body) -> Double =
  #| self => self.GetMass()

pub extern "js" fn B2Body::getInertia(self : B2Body) -> Double =
  #| self => self.GetInertia()

pub extern "js" fn B2Body::getWorldPoint(self : B2Body, localPoint: B2Vec2) -> B2Vec2 =
  #| (self, localPoint) => self.GetWorldPoint(localPoint)

pub extern "js" fn B2Body::getWorldVector(self : B2Body, localVector: B2Vec2) -> B2Vec2 =
  #| (self, localVector) => self.GetWorldVector(localVector)

pub extern "js" fn B2Body::getLocalPoint(self : B2Body, worldPoint: B2Vec2) -> B2Vec2 =
  #| (self, worldPoint) => self.GetLocalPoint(worldPoint)

pub extern "js" fn B2Body::getLocalVector(self : B2Body, worldVector: B2Vec2) -> B2Vec2 =
  #| (self, worldVector) => self.GetLocalVector(worldVector)

pub extern "js" fn B2Body::isStatic(self : B2Body) -> Bool =
  #| self => self.IsStatic()

pub extern "js" fn B2Body::isFrozen(self : B2Body) -> Bool =
  #| self => self.IsFrozen()

pub extern "js" fn B2Body::isSleeping (self : B2Body) -> Bool =
  #| self => self.IsSleeping()

pub extern "js" fn B2Body::allowSleeping(self : B2Body, flag: Bool) =
  #| (self, flag) => { self.AllowSleeping(flag); }

pub extern "js" fn B2Body::wakeUp(self : B2Body) =
  #| self => { self.WakeUp(); }

pub extern "js" fn B2Body::isEqual(self : B2Body, other: B2Body) -> Bool =
  #| (self, other) => self === other

// Get the list of all shapes attached to this body. 
// 在原本函数中是返回一个列表的头指针，这里做出修改，直接返回一个 shape的数组
pub extern "js" fn B2Body::getShapeList(self : B2Body) -> FixedArray[B2Shape] =
  #| self => {
  #|   let shapes = [];
  #|   let shape = self.GetShapeList();
  #|   while (shape != null) {
  #|     shapes.push(shape);
  #|     shape = shape.m_next;
  #|   }
  #|   return shapes;
  #| }

pub extern "js" fn B2Body::getJointList(self : B2Body) -> FixedArray[B2Joint] =
  #| self => {
  #|   let joints = [];
  #|   let joint = self.GetJointList();
  #|   while (joint != null) {
  #|     joints.push(joint);
  #|     joint = joint.next;
  #|   }
  #|   return joints;
  #| }

// Get the next body in the world's body list.
pub extern "js" fn B2Body::getNext(self : B2Body) -> B2Body =
  #| self => self.GetNext()

pub extern "js" fn B2Body::destory(self : B2Body) =
  #| self => { self.Destroy(); }