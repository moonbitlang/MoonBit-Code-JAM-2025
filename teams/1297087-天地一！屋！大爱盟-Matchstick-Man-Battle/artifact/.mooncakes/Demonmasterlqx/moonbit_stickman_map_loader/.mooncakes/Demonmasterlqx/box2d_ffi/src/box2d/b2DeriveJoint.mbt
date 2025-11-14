// DistanceJoint No methods to bind

// GearJoint
pub extern "js" fn B2GearJointDef::getRatio(self: B2GearJointDef) -> Double =
  #| self => self.GetRatio()

// MouseJoint No methods to bind

// PrismaticJoint

pub extern "js" fn B2PrismaticJoint::getJointSpeed(self: B2PrismaticJoint) -> Double =
  #| self => self.GetJointSpeed()


pub extern "js" fn B2PrismaticJoint::getMotorForce(self: B2PrismaticJoint, inv_dt: Double) -> Double =
  #| self => self.GetMotorForce(inv_dt)

pub extern "js" fn B2PrismaticJoint::setMotorSpeed(self: B2PrismaticJoint, speed: Double) =
  #| (self, speed) => { self.SetMotorSpeed(speed); }

pub extern "js" fn B2PrismaticJoint::setMotorForce(self: B2PrismaticJoint, force: Double) =
  #| (self, force) => { self.SetMotorForce(force); }

// PulleyJoint


pub extern "js" fn B2PulleyJoint::getGroundPoint1(self : B2PulleyJoint) -> B2Vec2 =
  #| self => self.GetGroundPoint1()

pub extern "js" fn B2PulleyJoint::getGroundPoint2(self : B2PulleyJoint) -> B2Vec2 =
  #| self => self.GetGroundPoint2()

pub extern "js" fn B2PulleyJoint::getLength1(self : B2PulleyJoint) -> Double =
  #| self => self.GetLength1()

pub extern "js" fn B2PulleyJoint::getLength2(self : B2PulleyJoint) -> Double =
  #| self => self.GetLength2()

pub extern "js" fn B2PulleyJoint::getRatio(self : B2PulleyJoint) -> Double =
  #| self => self.GetRatio()

// RevoluteJoint

pub extern "js" fn B2RevoluteJoint::getJointAngle(self: B2RevoluteJoint) -> Double =
  #| self => self.GetJointAngle()

pub extern "js" fn B2RevoluteJoint::getJointSpeed(self: B2RevoluteJoint) -> Double =
  #| self => self.GetJointSpeed()

pub extern "js" fn B2RevoluteJoint::getMotorTorque(self: B2RevoluteJoint, inv_dt: Double) -> Double =
  #| self => self.GetMotorTorque(inv_dt)

pub extern "js" fn B2RevoluteJoint::setMotorSpeed(self: B2RevoluteJoint, speed: Double) =
  #| (self, speed) => { self.SetMotorSpeed(speed); }

pub extern "js" fn B2RevoluteJoint::setMotorTorque(self: B2RevoluteJoint, torque: Double) =
  #| (self, torque) => { self.SetMotorTorque(torque); }

// SpringJoint No methods to bind


