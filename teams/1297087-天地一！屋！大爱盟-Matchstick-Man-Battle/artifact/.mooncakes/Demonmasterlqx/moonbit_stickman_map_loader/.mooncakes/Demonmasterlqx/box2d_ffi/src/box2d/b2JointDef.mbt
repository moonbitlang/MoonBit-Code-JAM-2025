pub trait JointDefBase {
  getBase(Self) -> B2JointDef;
}

pub(open) trait JointDef : JointDefBase {
  setBody1(Self, body: B2Body) -> Unit = _
  setBody2(Self, body: B2Body) -> Unit = _
  setCollideConnected(Self, flag: Bool) -> Unit = _
}

impl JointDef with setBody1(self, body: B2Body){
  let base = self.getBase();
  base.setBody1_(body);
}

impl JointDef with setBody2(self, body: B2Body){
  let base = self.getBase();
  base.setBody2_(body);
}

impl JointDef with setCollideConnected(self, flag: Bool){
  let base = self.getBase();
  base.setCollideConnected_(flag);
}

// base class external functions

extern "js" fn B2JointDef::setBody1_(self : B2JointDef, body: B2Body) =
  #| (self, body) => { self.body1 = body; }

extern "js" fn B2JointDef::setBody2_(self : B2JointDef, body: B2Body) =
  #| (self, body) => { self.body2 = body; }

extern "js" fn B2JointDef::setCollideConnected_(self : B2JointDef, flag: Bool) =
  #| (self, flag) => { self.collideConnected = flag; }

// get Base parts

// joint type
// B2DistanceJointDef B2GearJointDef B2MouseJointDef B2PrismaticJointDef B2PulleyJointDef B2RevoluteJointDef B2SpringeJointDef

extern "js" fn B2DistanceJointDef::getBase_(self : B2DistanceJointDef) -> B2JointDef =
  #| self => self

extern "js" fn B2GearJointDef::getBase_(self : B2GearJointDef) -> B2JointDef =
  #| self => self

extern "js" fn B2MouseJointDef::getBase_(self : B2MouseJointDef) -> B2JointDef =
  #| self => self

extern "js" fn B2PrismaticJointDef::getBase_(self : B2PrismaticJointDef) -> B2JointDef =
  #| self => self

extern "js" fn B2PulleyJointDef::getBase_(self : B2PulleyJointDef) -> B2JointDef =
  #| self => self

extern "js" fn B2RevoluteJointDef::getBase_(self : B2RevoluteJointDef) -> B2JointDef =
  #| self => self

extern "js" fn B2SpringJointDef::getBase_(self : B2SpringJointDef) -> B2JointDef =
  #| self => self

// imply traits
pub impl JointDefBase for B2JointDef with getBase(self){
  self
}

pub impl JointDefBase for B2DistanceJointDef with getBase(self){
  self.getBase_()
}
pub impl JointDefBase for B2GearJointDef with getBase(self){
  self.getBase_()
}
pub impl JointDefBase for B2MouseJointDef with getBase(self){
  self.getBase_()
}
pub impl JointDefBase for B2PrismaticJointDef with getBase(self){
  self.getBase_()
}
pub impl JointDefBase for B2PulleyJointDef with getBase(self){
  self.getBase_()
}
pub impl JointDefBase for B2RevoluteJointDef with getBase(self){
  self.getBase_()
}
pub impl JointDefBase for B2SpringJointDef with getBase(self){
  self.getBase_()
}

// constructor external functions
pub extern "js" fn b2DistanceJointDef() -> B2DistanceJointDef =
  #| () => new b2DistanceJointDef()

pub extern "js" fn b2GearJointDef() -> B2GearJointDef =
  #| () => new b2GearJointDef()

pub extern "js" fn b2MouseJointDef() -> B2MouseJointDef =
  #| () => new b2MouseJointDef()

pub extern "js" fn b2PrismaticJointDef() -> B2PrismaticJointDef =
  #| () => new b2PrismaticJointDef()

pub extern "js" fn b2PulleyJointDef() -> B2PulleyJointDef =
  #| () => new b2PulleyJointDef()

pub extern "js" fn b2RevoluteJointDef() -> B2RevoluteJointDef =
  #| () => new b2RevoluteJointDef()

pub extern "js" fn b2SpringJointDef(a_body1: B2Body, a_body2: B2Body, a_strength: Double) =
  #| (a_body1, a_body2, a_strength) => new b2SpringJointDef(a_body1, a_body2, a_strength)

pub impl JointDef for B2DistanceJointDef
pub impl JointDef for B2GearJointDef
pub impl JointDef for B2MouseJointDef
pub impl JointDef for B2PrismaticJointDef
pub impl JointDef for B2PulleyJointDef
pub impl JointDef for B2RevoluteJointDef
pub impl JointDef for B2SpringJointDef