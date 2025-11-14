// box2d/dynamics/b2BodyDef.js

pub extern "js" fn b2BodyDef() -> B2BodyDef =
  #| () => new b2BodyDef()

// setter && getter

// getter

pub extern "js" fn B2BodyDef::getPosition(self : B2BodyDef) -> B2Vec2 =
  #| self => self.position

pub extern "js" fn B2BodyDef::getRotation(self : B2BodyDef) -> Double =
  #| self => self.rotation

pub extern "js" fn B2BodyDef::getLinearVelocity(self : B2BodyDef) -> B2Vec2 =
  #| self => self.linearVelocity

pub extern "js" fn B2BodyDef::getAngularVelocity(self : B2BodyDef) -> Double =
  #| self => self.angularVelocity

pub extern "js" fn B2BodyDef::getLinearDamping(self : B2BodyDef) -> Double =
  #| self => self.linearDamping

pub extern "js" fn B2BodyDef::getAngularDamping(self : B2BodyDef) -> Double =
  #| self => self.angularDamping

pub extern "js" fn B2BodyDef::getAllowSleep(self : B2BodyDef) -> Bool =
  #| self => self.allowSleep

pub extern "js" fn B2BodyDef::getIsSleeping(self : B2BodyDef) -> Bool =
  #| self => self.isSleeping

pub extern "js" fn B2BodyDef::getPreventRotation(self : B2BodyDef) -> Bool =
  #| self => self.preventRotation

// setter

pub extern "js" fn B2BodyDef::setPosition(self : B2BodyDef, position: B2Vec2) =
  #| (self, position) => { self.position = position }

pub extern "js" fn B2BodyDef::setRotation(self : B2BodyDef, rotation: Double) =
  #| (self, rotation) => { self.rotation = rotation }

pub extern "js" fn B2BodyDef::setLinearVelocity(self : B2BodyDef, velocity: B2Vec2) =
  #| (self, velocity) => { self.linearVelocity = velocity }

pub extern "js" fn B2BodyDef::setAngularVelocity(self : B2BodyDef, velocity: Double) =
  #| (self, velocity) => { self.angularVelocity = velocity }

pub extern "js" fn B2BodyDef::setLinearDamping(self : B2BodyDef, damping: Double) =
  #| (self, damping) => { self.linearDamping = damping }

pub extern "js" fn B2BodyDef::setAngularDamping(self : B2BodyDef, damping: Double) =
  #| (self, damping) => { self.angularDamping = damping }

pub extern "js" fn B2BodyDef::setAllowSleep(self : B2BodyDef, allow: Bool) =
  #| (self, allow) => { self.allowSleep = allow }

pub extern "js" fn B2BodyDef::setIsSleeping(self : B2BodyDef, sleeping: Bool) =
  #| (self, sleeping) => { self.isSleeping = sleeping }

pub extern "js" fn B2BodyDef::setPreventRotation(self : B2BodyDef, prevent: Bool) =
  #| (self, prevent) => { self.preventRotation = prevent }

// function

pub extern "js" fn B2BodyDef::addShape(self : B2BodyDef, shape: B2ShapeDef) =
  #| (self, shape) => { self.AddShape(shape) }