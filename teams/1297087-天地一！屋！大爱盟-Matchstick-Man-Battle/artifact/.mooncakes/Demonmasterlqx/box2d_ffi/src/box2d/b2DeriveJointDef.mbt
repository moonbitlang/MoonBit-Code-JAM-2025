// 这个文件包含了派生类关节独有的方法

// B2DistanceJointDef

pub extern "js" fn B2DistanceJointDef::setAnchorPoint1(self: B2DistanceJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint1.Set(point.x, point.y); }

pub extern "js" fn B2DistanceJointDef::setAnchorPoint2(self: B2DistanceJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint2.Set(point.x, point.y); }

// B2MouseJointDef

pub extern "js" fn B2MouseJointDef::setTarget(self: B2MouseJointDef, target: B2Vec2) =
  #| (self, target) => { self.target.Set(target.x, target.y); }

pub extern "js" fn B2MouseJointDef::setMaxForce(self: B2MouseJointDef, maxForce: Double) =
  #| (self, maxForce) => { self.maxForce = maxForce; }

pub extern "js" fn B2MouseJointDef::setFrequencyHz(self: B2MouseJointDef, frequencyHz: Double) =
  #| (self, frequencyHz) => { self.frequencyHz = frequencyHz; }

pub extern "js" fn B2MouseJointDef::setDampingRatio(self: B2MouseJointDef, dampingRatio: Double) =
  #| (self, dampingRatio) => { self.dampingRatio = dampingRatio;

pub extern "js" fn B2MouseJointDef::setTimeStep(self: B2MouseJointDef, timeStep: Double) =
  #| (self, timeStep) => { self.timeStep = timeStep; }

// B2PrismaticJointDef

pub extern "js" fn B2PrismaticJointDef::setAnchorPoint(self: B2PrismaticJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint.Set(point.x, point.y); }

pub extern "js" fn B2PrismaticJointDef::setAxis(self: B2PrismaticJointDef, axis: B2Vec2) =
  #| (self, axis) => { self.axis.Set(axis.x, axis.y); }

pub extern "js" fn B2PrismaticJointDef::setLowerTranslation(self: B2PrismaticJointDef, lower: Double) =
  #| (self, lower) => { self.lowerTranslation = lower; }

pub extern "js" fn B2PrismaticJointDef::setUpperTranslation(self: B2PrismaticJointDef, upper: Double) =
  #| (self, upper) => { self.upperTranslation = upper; }

pub extern "js" fn B2PrismaticJointDef::setMotorForce(self: B2PrismaticJointDef, force: Double) =
  #| (self, force) => { self.motorForce = force; }

pub extern "js" fn B2PrismaticJointDef::setMotorSpeed(self: B2PrismaticJointDef, speed: Double) =
  #| (self, speed) => { self.motorSpeed = speed; }

pub extern "js" fn B2PrismaticJointDef::setEnableLimit(self: B2PrismaticJointDef, enable: Bool) =
  #| (self, enable) => { self.enableLimit = enable; }

pub extern "js" fn B2PrismaticJointDef::setEnableMotor(self: B2PrismaticJointDef, enable: Bool) =
  #| (self, enable) => { self.enableMotor = enable; }

// B2PulleyJointDef

pub extern "js" fn B2PulleyJointDef::setGroundPoint1(self: B2PulleyJointDef, point: B2Vec2) =
  #| (self, point) => { self.groundPoint1.Set(point.x, point.y); }

pub extern "js" fn B2PulleyJointDef::setGroundPoint2(self: B2PulleyJointDef, point: B2Vec2) =
  #| (self, point) => { self.groundPoint2.Set(point.x, point.y); }

pub extern "js" fn B2PulleyJointDef::setAnchorPoint1(self: B2PulleyJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint1.Set(point.x, point.y); }

pub extern "js" fn B2PulleyJointDef::setAnchorPoint2(self: B2PulleyJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint2.Set(point.x, point.y); }

pub extern "js" fn B2PulleyJointDef::setMaxLength1(self: B2PulleyJointDef, length: Double) =
  #| (self, length) => { self.maxLength1 = length; }

pub extern "js" fn B2PulleyJointDef::setMaxLength2(self: B2PulleyJointDef, length: Double) =
  #| (self, length) => { self.maxLength2 = length; }

pub extern "js" fn B2PulleyJointDef::setRatio(self: B2PulleyJointDef, ratio: Double) =
  #| (self, ratio) => { self.ratio = ratio; }

// B2RevoluteJointDef

pub extern "js" fn B2RevoluteJointDef::setAnchorPoint(self: B2RevoluteJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint.Set(point.x, point.y); }

pub extern "js" fn B2RevoluteJointDef::setLowerAngle(self: B2RevoluteJointDef, angle: Double) =
  #| (self, angle) => { self.lowerAngle = angle; }

pub extern "js" fn B2RevoluteJointDef::setUpperAngle(self: B2RevoluteJointDef, angle: Double) =
  #| (self, angle) => { self.upperAngle = angle; }

pub extern "js" fn B2RevoluteJointDef::setMotorTorque(self: B2RevoluteJointDef, torque: Double) =
  #| (self, torque) => { self.motorTorque = torque; }

pub extern "js" fn B2RevoluteJointDef::setMotorSpeed(self: B2RevoluteJointDef, speed: Double) =
  #| (self, speed) => { self.motorSpeed = speed; }

pub extern "js" fn B2RevoluteJointDef::setEnableLimit(self: B2RevoluteJointDef, enable: Bool) =
  #| (self, enable) => { self.enableLimit = enable; }

pub extern "js" fn B2RevoluteJointDef::setEnableMotor(self: B2RevoluteJointDef, enable: Bool) =
  #| (self, enable) => { self.enableMotor = enable; }

// B2SpringJointDef

pub extern "js" fn B2SpringJointDef::setAnchorPoint1(self: B2SpringJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint1.Set(point.x, point.y); }

pub extern "js" fn B2SpringJointDef::setAnchorPoint2(self: B2SpringJointDef, point: B2Vec2) =
  #| (self, point) => { self.anchorPoint2.Set(point.x, point.y); }

pub extern "js" fn B2SpringJointDef::setStrength(self: B2SpringJointDef, strength: Double) =
  #| (self, strength) => { self.strength = strength; }
