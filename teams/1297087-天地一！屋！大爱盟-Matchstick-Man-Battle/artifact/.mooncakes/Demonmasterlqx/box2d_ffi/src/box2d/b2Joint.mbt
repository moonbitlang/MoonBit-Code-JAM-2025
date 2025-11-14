enum B2JointType {
  UbknownJoint // 0
  RevoluteJoint // 1
  PrismaticJoint // 2
  DistanceJoint // 3
  PulleyJoint // 4
  MouseJoint // 5
  GearJoint // 6
  SpringJoint // 7
}

pub trait JointBase{
  getBase(Self) -> B2Joint;
}

pub(open) trait Joint : JointBase {
  getAnchor1(Self) -> B2Vec2 = _
  getAnchor2(Self) -> B2Vec2 = _
  getBody1(Self) -> B2Body = _
  getBody2(Self) -> B2Body = _
  getNext(Self) -> B2Joint = _
  getReactionForce(Self, inv_dt: Double) -> B2Vec2 = _
  getReactionTorque(Self, inv_dt: Double) -> Double = _
  getType(Self) -> B2JointType = _
}

impl Joint with getAnchor1(self){
  let base = self.getBase();
  base.getAnchor1_()
}

impl Joint with getAnchor2(self){
  let base = self.getBase();
  base.getAnchor2_()
}

impl Joint with getBody1(self){
  let base = self.getBase();
  base.getBody1_()
}

impl Joint with getBody2(self){
  let base = self.getBase();
  base.getBody2_()
}

impl Joint with getNext(self){
  let base = self.getBase();
  base.getNext_()
}

impl Joint with getReactionForce(self, inv_dt: Double){
  let base = self.getBase();
  base.getReactionForce_(inv_dt)
}

impl Joint with getReactionTorque(self, inv_dt: Double){
  let base = self.getBase();
  base.getReactionTorque_(inv_dt)
}

impl Joint with getType(self){
  let base = self.getBase();
  match base.getType_(){
    1 => B2JointType::RevoluteJoint
    2 => B2JointType::PrismaticJoint
    3 => B2JointType::DistanceJoint
    4 => B2JointType::PulleyJoint
    5 => B2JointType::MouseJoint
    6 => B2JointType::GearJoint
    7 => B2JointType::SpringJoint
    _ => B2JointType::UbknownJoint
  }
}
// base class external functions

extern "js" fn B2Joint::getType_(self : B2Joint) -> Int =
  #| self => self.GetType()

extern "js" fn B2Joint::getAnchor1_(self : B2Joint) -> B2Vec2 =
  #| self => self.GetAnchor1()

extern "js" fn B2Joint::getAnchor2_(self : B2Joint) -> B2Vec2 =
  #| self => self.GetAnchor2()

extern "js" fn B2Joint::getBody1_(self : B2Joint) -> B2Body =
  #| self => self.GetBody1()

extern "js" fn B2Joint::getBody2_(self : B2Joint) -> B2Body =
  #| self => self.GetBody2()

extern "js" fn B2Joint::getNext_(self : B2Joint) -> B2Joint =
  #| self => self.GetNext()

extern "js" fn B2Joint::getReactionForce_(self : B2Joint, inv_dt: Double) -> B2Vec2 =
  #| (self, inv_dt) => self.GetReactionForce(inv_dt)

extern "js" fn B2Joint::getReactionTorque_(self : B2Joint, inv_dt: Double) -> Double =
  #| (self, inv_dt) => self.GetReactionTorque(inv_dt)

// drived joint tobase external functions

extern "js" fn B2DistanceJoint::getBase_(self : B2DistanceJoint) -> B2Joint =
  #| self => self

extern "js" fn B2GearJoint::getBase_(self : B2GearJoint) -> B2Joint =
  #| self => self

extern "js" fn B2MouseJoint::getBase_(self : B2MouseJoint) -> B2Joint =
  #| self => self

extern "js" fn B2PrismaticJoint::getBase_(self : B2PrismaticJoint) -> B2Joint =
  #| self => self

extern "js" fn B2PulleyJoint::getBase_(self : B2PulleyJoint) -> B2Joint =
  #| self => self

extern "js" fn B2RevoluteJoint::getBase_(self : B2RevoluteJoint) -> B2Joint =
  #| self => self

extern "js" fn B2SpringJoint::getBase_(self : B2SpringJoint) -> B2Joint =
  #| self => self

// implymentation of Joint trait for derived joint types

pub impl JointBase for B2DistanceJoint with getBase(self){
  self.getBase_()
}
pub impl JointBase for B2GearJoint with getBase(self){
  self.getBase_()
}
pub impl JointBase for B2MouseJoint with getBase(self){
  self.getBase_()
}
pub impl JointBase for B2PrismaticJoint with getBase(self){
  self.getBase_()
}
pub impl JointBase for B2PulleyJoint with getBase(self){
  self.getBase_()
}
pub impl JointBase for B2RevoluteJoint with getBase(self){
  self.getBase_()
}
pub impl JointBase for B2SpringJoint with getBase(self){
  self.getBase_()
}


// constructor external functions

pub extern "js" fn b2DistanceJoint(def: B2DistanceJointDef) -> B2DistanceJoint =
  #| (def) => new b2DistanceJoint(def)

pub extern "js" fn b2GearJoint(def: B2GearJointDef) -> B2GearJoint =
  #| (def) => new b2GearJoint(def)

pub extern "js" fn b2MouseJoint(def: B2MouseJointDef) -> B2MouseJoint =
  #| (def) => new b2MouseJoint(def)

pub extern "js" fn b2PrismaticJoint(def: B2PrismaticJointDef) -> B2PrismaticJoint =
  #| (def) => new b2PrismaticJoint(def)

pub extern "js" fn b2PulleyJoint(def: B2PulleyJointDef) -> B2PulleyJoint =
  #| (def) => new b2PulleyJoint(def)

pub extern "js" fn b2RevoluteJoint(def: B2RevoluteJointDef) -> B2RevoluteJoint =
  #| (def) => new b2RevoluteJoint(def)

pub extern "js" fn b2SpringJoint(def: B2SpringJointDef) -> B2SpringJoint =
  #| (def) => new b2SpringJoint(def)


// 转换

pub extern "js" fn B2Joint::toRevoluteJoint(self : B2Joint) -> B2RevoluteJoint =
  #| self => self instanceof b2RevoluteJoint ? self : null

pub extern "js" fn B2Joint::toPrismaticJoint(self : B2Joint) -> B2PrismaticJoint =
  #| self => self instanceof b2PrismaticJoint ? self : null

pub extern "js" fn B2Joint::toDistanceJoint(self : B2Joint) -> B2DistanceJoint =
  #| self => self instanceof b2DistanceJoint ? self : null

pub extern "js" fn B2Joint::toPulleyJoint(self : B2Joint) -> B2PulleyJoint =
  #| self => self instanceof b2PulleyJoint ? self : null

pub extern "js" fn B2Joint::toMouseJoint(self : B2Joint) -> B2MouseJoint =
  #| self => self instanceof b2MouseJoint ? self : null

pub extern "js" fn B2Joint::toGearJoint(self : B2Joint) -> B2GearJoint =
  #| self => self instanceof b2GearJoint ? self : null

pub extern "js" fn B2Joint::toSpringJoint(self : B2Joint) -> B2SpringJoint =
  #| self => self instanceof b2SpringJoint ? self : null

pub impl Joint for B2DistanceJoint
pub impl Joint for B2GearJoint
pub impl Joint for B2MouseJoint
pub impl Joint for B2PrismaticJoint
pub impl Joint for B2PulleyJoint
pub impl Joint for B2RevoluteJoint
pub impl Joint for B2SpringJoint