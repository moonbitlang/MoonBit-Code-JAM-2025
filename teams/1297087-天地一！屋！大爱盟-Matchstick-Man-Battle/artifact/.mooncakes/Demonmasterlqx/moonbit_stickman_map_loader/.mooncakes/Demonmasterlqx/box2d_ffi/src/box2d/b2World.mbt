// box2d/dynamics/B2World_.js

pub(open) trait World {
  getBase(Self) -> B2World_
  setListener(Self, B2WorldListener) -> Unit = _
  setFilter(Self, B2CollisionFilter) -> Unit = _
  createBody(Self, B2BodyDef) -> B2Body = _
  destroyBody(Self, B2Body) -> Unit = _
  clearBodyList(Self) -> Unit = _
  createJoint(Self, B2JointDef) -> B2Joint = _
  destroyJoint(Self, B2Joint) -> Unit = _
  getGroundBody(Self) -> B2Body = _
  step(Self, Double, Int) -> Unit = _
  query(Self, B2AABB, FixedArray[B2Shape], Int) -> Int = _
  getBodyList(Self) -> FixedArray[B2Body] = _ 
  getJointList(Self) -> FixedArray[B2Joint] = _
  getContactList(Self) -> FixedArray[B2Contact] = _
}

pub impl World for B2World_ with getBase(self) {
  self
}

pub impl World for B2World_

impl World with setListener(self, listener){
  self.getBase().setListener_(listener)
}

impl World with setFilter(self, filter){
  self.getBase().setFilter_(filter)
}

impl World with createBody(self, def){
  self.getBase().createBody_(def)
}

impl World with destroyBody(self, body){
  self.getBase().destroyBody_(body)
}

impl World with clearBodyList(self){
  self.getBase().clearBodyList_()
}

impl World with createJoint(self, def){
  self.getBase().createJoint_(def)
}

impl World with destroyJoint(self, joint){
  self.getBase().destroyJoint_(joint)
}

impl World with getGroundBody(self){
  self.getBase().getGroundBody_()
}

impl World with step(self, dt, iterations){
  self.getBase().step_(dt, iterations)
}

impl World with query(self, aabb, shapes, maxCount){
  self.getBase().query_(aabb, shapes, maxCount)
}

impl World with getBodyList(self){
  self.getBase().getBodyList_()
}

impl World with getJointList(self){
  self.getBase().getJointList_()
}

impl World with getContactList(self){
  self.getBase().getContactList_()
}

// worldAABB 世界边界
pub extern "js" fn b2World(worldAABB : B2AABB, gravity: B2Vec2, doSleep: Bool) -> B2World_ =
  #| (worldAABB, gravity, doSleep) => new b2World(worldAABB, gravity, doSleep)

extern "js" fn B2World_::setListener_(self : B2World_, listener: B2WorldListener) =
  #| (self, listener) => { self.SetListener(listener); }

extern "js" fn B2World_::setFilter_(self : B2World_, filter: B2CollisionFilter) =
  #| (self, filter) => { self.SetContactFilter(filter); }

extern "js" fn B2World_::createBody_(self : B2World_, def: B2BodyDef) -> B2Body =
  #| (self, def) => self.CreateBody(def)


extern "js" fn B2World_::destroyBody_(self : B2World_, body: B2Body) =
  #| (self, body) => { self.DestroyBody(body); }

extern "js" fn B2World_::clearBodyList_(self : B2World_) =
  #| self => self.ClearBodyList()

extern "js" fn B2World_::createJoint_(self : B2World_, def: B2JointDef) -> B2Joint =
  #| (self, def) => self.CreateJoint(def)

extern "js" fn B2World_::destroyJoint_(self : B2World_, joint: B2Joint) =
  #| (self, joint) => { self.DestroyJoint(joint); }

// The world provides a single ground body with no collision shapes. You
// can use this to simplify the creation of joints.
extern "js" fn B2World_::getGroundBody_(self : B2World_) -> B2Body =
  #| self => self.GetGroundBody()

extern "js" fn B2World_::step_(self : B2World_, dt: Double, iterations: Int) =
  #| (self, dt, iterations) => { self.Step(dt, iterations); }

// this.Query the world for all shapes that potentially overlap the
// provided AABB. You provide a shape pointer buffer of specified
// size. The number of shapes found is returned.
extern "js" fn B2World_::query_(self : B2World_, aabb: B2AABB, shapes: FixedArray[B2Shape], maxCount: Int) -> Int =
  #| (self, aabb, shapes, maxCount) => { self.Query(aabb, shapes, maxCount); }

extern "js" fn B2World_::getBodyList_(self : B2World_) -> FixedArray[B2Body] =
  #| self => {
  #|   let bodies = [];
  #|   let body = self.GetBodyList();
  #|   while (body != null) {
  #|     bodies.push(body);
  #|     body = body.m_next;
  #|   }
  #|   return bodies;
  #| }


extern "js" fn B2World_::getJointList_(self : B2World_) -> FixedArray[B2Joint] =
  #| self => {
  #|   let joints = [];
  #|   let joint = self.GetJointList();
  #|   while (joint != null) {
  #|     joints.push(joint);
  #|     joint = joint.next;
  #|   }
  #|   return joints;
  #| }

extern "js" fn B2World_::getContactList_(self : B2World_) -> FixedArray[B2Contact] =
  #| self => {
  #|   let contacts = [];
  #|   let contact = self.GetContactList();
  #|   while (contact != null) {
  #|     contacts.push(contact);
  #|     contact = contact.m_next;
  #|   }
  #|   return contacts;
  #| }


// contact listener

// 检测
// pub(all) struct B2B2BContactListener{
//   body1 : B2Body
//   body2 : B2Body
//   callback : () -> Unit
// }

// pub(all) struct 

// world extend functions

pub(all) struct B2World{
  world: B2World_
  // contactListeners : Array[B2ContactListener]
}

pub impl World for B2World with getBase(self){
  self.world
}

pub impl World for B2World