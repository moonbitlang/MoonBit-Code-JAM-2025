// MoonBox2D's b2MassData
// Create by Great-Love-League
// Contact with us if you have any questions.

// constructor
pub extern "js" fn b2MassData() -> B2MassData =
  #| () => new b2MassData()

// get and set
pub extern "js" fn B2MassData::setMass(self: B2MassData, mass: Double) -> Unit =
  #| (self, mass) => { self.mass = mass; }

pub extern "js" fn B2MassData::setCenter(self: B2MassData, center: B2Vec2) -> Unit =
  #| (self, center) => { self.center = center; }

pub extern "js" fn B2MassData::setI(self: B2MassData, i: Double) -> Unit =
  #| (self, i) => { self.I = i; }

pub extern "js" fn B2MassData::getMass(self: B2MassData) -> Double =
  #| self => self.mass

pub extern "js" fn B2MassData::getCenter(self: B2MassData) -> B2Vec2 =
  #| self => self.center

pub extern "js" fn B2MassData::getI(self: B2MassData) -> Double =
  #| self => self.I
