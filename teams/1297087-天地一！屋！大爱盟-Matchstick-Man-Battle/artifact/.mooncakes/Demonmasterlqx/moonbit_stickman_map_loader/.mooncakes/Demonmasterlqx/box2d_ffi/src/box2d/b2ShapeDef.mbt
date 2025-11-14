// constructor
pub extern "js" fn b2ShapeDef() -> B2ShapeDef =
  #| () => new b2ShapeDef()

pub(open) trait ShapeDef{
  getBase(Self) -> B2ShapeDef;

  // functions
  computeMass(Self, massData: B2MassData) -> Unit = _;
  setLocalPosition(Self, localPosition: B2Vec2) -> Unit = _;
  getLocalPosition(Self) -> B2Vec2 = _;
  setLocalRotation(Self, localRotation: Double) -> Unit = _;
  getLocalRotation(Self) -> Double = _;
  setFriction(Self, friction: Double) -> Unit = _;
  getFriction(Self) -> Double = _;
  setRestitution(Self, restitution: Double) -> Unit = _;
  getRestitution(Self) -> Double = _;
  setDensity(Self, density: Double) -> Unit = _;
  getDensity(Self) -> Double = _;
  // The collision category bits. Normally you would just set one bit.
  setCategoryBits(Self, categoryBits: Int) -> Unit = _;
  getCategoryBits(Self) -> Int = _;

	// The collision mask bits. This states the categories that this
	// shape would accept for collision.
  setMaskBits(Self, maskBits: Int) -> Unit = _;
  getMaskBits(Self) -> Int = _;

  // Collision groups allow a certain group of objects to never collide (negative)
  // or always collide (positive). Zero means no collision group. Non-zero group
  // filtering always wins against the mask bits.
  setGroupIndex(Self, groupIndex: Int) -> Unit = _;
  getGroupIndex(Self) -> Int = _;

}

// realze ffi function for base type B2ShapeDef

extern "js" fn B2ShapeDef::computeMass_(self: B2ShapeDef, massData: B2MassData) -> Unit =
  #| (self, massData) => { self.ComputeMass(massData); }

extern "js" fn B2ShapeDef::setLocalPosition_(self: B2ShapeDef, localPosition: B2Vec2) -> Unit =
  #| (self, localPosition) => { self.localPosition = localPosition; }

extern "js" fn B2ShapeDef::getLocalPosition_(self: B2ShapeDef) -> B2Vec2 =
  #| self => self.localPosition

extern "js" fn B2ShapeDef::setLocalRotation_(self: B2ShapeDef, localRotation: Double) -> Unit =
  #| (self, localRotation) => { self.localRotation = localRotation; }

extern "js" fn B2ShapeDef::getLocalRotation_(self: B2ShapeDef) -> Double =
  #| self => self.localRotation

extern "js" fn B2ShapeDef::setFriction_(self: B2ShapeDef, friction: Double) -> Unit =
  #| (self, friction) => { self.friction = friction; }

extern "js" fn B2ShapeDef::getFriction_(self: B2ShapeDef) -> Double =
  #| self => self.friction

extern "js" fn B2ShapeDef::setRestitution_(self: B2ShapeDef, restitution: Double) -> Unit =
  #| (self, restitution) => { self.restitution = restitution; }

extern "js" fn B2ShapeDef::getRestitution_(self: B2ShapeDef) -> Double =
  #| self => self.restitution

extern "js" fn B2ShapeDef::setDensity_(self: B2ShapeDef, density: Double) -> Unit =
  #| (self, density) => { self.density = density; }

extern "js" fn B2ShapeDef::getDensity_(self: B2ShapeDef) -> Double =
  #| self => self.density

extern "js" fn B2ShapeDef::setCategoryBits_(self: B2ShapeDef, categoryBits: Int) -> Unit =
  #| (self, categoryBits) => { self.categoryBits = categoryBits; }

extern "js" fn B2ShapeDef::getCategoryBits_(self: B2ShapeDef) -> Int =
  #| self => self.categoryBits

extern "js" fn B2ShapeDef::setMaskBits_(self: B2ShapeDef, maskBits: Int) -> Unit =
  #| (self, maskBits) => { self.maskBits = maskBits; }

extern "js" fn B2ShapeDef::getMaskBits_(self: B2ShapeDef) -> Int =
  #| self => self.maskBits

extern "js" fn B2ShapeDef::setGroupIndex_(self: B2ShapeDef, groupIndex: Int) -> Unit =
  #| (self, groupIndex) => { self.groupIndex = groupIndex; }

extern "js" fn B2ShapeDef::getGroupIndex_(self: B2ShapeDef) -> Int =
  #| self => self.groupIndex

// getBase part

extern "js" fn B2BoxDef::getBase_(self: B2BoxDef) -> B2ShapeDef =
  #| self => self

extern "js" fn B2CircleDef::getBase_(self: B2CircleDef) -> B2ShapeDef =
  #| self => self

extern "js" fn B2PolygonDef::getBase_(self: B2PolygonDef) -> B2ShapeDef =
  #| self => self

// impl getbase for derived type

pub impl ShapeDef for B2BoxDef with getBase(self){
  self.getBase_()
}

pub impl ShapeDef for B2CircleDef with getBase(self){
  self.getBase_()
}

pub impl ShapeDef for B2PolygonDef with getBase(self){
  self.getBase_()
}

// impl defult for derived type

impl ShapeDef with computeMass(self, massData: B2MassData) -> Unit {
  self.getBase().computeMass_(massData)
}

impl ShapeDef with setLocalPosition(self, localPosition: B2Vec2) -> Unit {
  self.getBase().setLocalPosition_(localPosition)
}

impl ShapeDef with getLocalPosition(self) -> B2Vec2 {
  self.getBase().getLocalPosition_()
}

impl ShapeDef with setLocalRotation(self, localRotation: Double) -> Unit {
  self.getBase().setLocalRotation_(localRotation)
}

impl ShapeDef with getLocalRotation(self) -> Double {
  self.getBase().getLocalRotation_()
}

impl ShapeDef with setFriction(self, friction: Double) -> Unit {
  self.getBase().setFriction_(friction)
}

impl ShapeDef with getFriction(self) -> Double {
  self.getBase().getFriction_()
}

impl ShapeDef with setRestitution(self, restitution: Double) -> Unit {
  self.getBase().setRestitution_(restitution)
}

impl ShapeDef with getRestitution(self) -> Double {
  self.getBase().getRestitution_()
}

impl ShapeDef with setDensity(self, density: Double) -> Unit {
  self.getBase().setDensity_(density)
}

impl ShapeDef with getDensity(self) -> Double {
  self.getBase().getDensity_()
}

impl ShapeDef with setCategoryBits(self, categoryBits: Int) -> Unit {
  self.getBase().setCategoryBits_(categoryBits)
}

impl ShapeDef with getCategoryBits(self) -> Int {
  self.getBase().getCategoryBits_()
}

impl ShapeDef with setMaskBits(self, maskBits: Int) -> Unit {
  self.getBase().setMaskBits_(maskBits)
}

impl ShapeDef with getMaskBits(self) -> Int {
  self.getBase().getMaskBits_()
}

impl ShapeDef with setGroupIndex(self, groupIndex: Int) -> Unit {
  self.getBase().setGroupIndex_(groupIndex)
}

impl ShapeDef with getGroupIndex(self) -> Int {
  self.getBase().getGroupIndex_()
}

pub impl ShapeDef for B2CircleDef
pub impl ShapeDef for B2BoxDef
pub impl ShapeDef for B2PolygonDef