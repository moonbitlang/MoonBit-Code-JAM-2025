// MoonBox2D's b2Vec2
// Create by Great-Love-League
// Contact with us if you have any questions.

// constructor
pub extern "js" fn b2Vec2(x: Double, y: Double) -> B2Vec2 =
  #| (x, y) => new b2Vec2(x, y)

// functions
pub extern "js" fn B2Vec2::setZero(self: B2Vec2) -> Unit =
  #| self => self.SetZero()

pub extern "js" fn B2Vec2::set(self: B2Vec2, x: Double, y: Double) -> Unit =
  #| (self, x, y) => self.Set(x, y)

pub extern "js" fn B2Vec2::setV(self: B2Vec2, v: B2Vec2) -> Unit =
  #| (self, v) => self.SetV(v)

pub extern "js" fn B2Vec2::negative(self: B2Vec2) -> B2Vec2 =
  #| self => self.Negative()

pub extern "js" fn B2Vec2::copy(self: B2Vec2) -> B2Vec2 =
  #| self => self.Copy()

pub extern "js" fn B2Vec2::add(self: B2Vec2, v: B2Vec2) -> Unit =
  #| (self, v) => self.Add(v)

pub extern "js" fn B2Vec2::subtract(self: B2Vec2, v: B2Vec2) -> Unit =
  #| (self, v) => self.Subtract(v)

pub extern "js" fn B2Vec2::multiply(self: B2Vec2, a: Double) -> Unit =
  #| (self, a) => self.Multiply(a)

pub extern "js" fn B2Vec2::mulM(self: B2Vec2, a: B2Mat22) -> Unit =
  #| (self, a) => self.MulM(a)

pub extern "js" fn B2Vec2::mulTM(self: B2Vec2, a: B2Mat22) -> Unit =
  #| (self, a) => self.MulTM(a)

pub extern "js" fn B2Vec2::crossVF(self: B2Vec2, s: Double) -> Unit =
  #| (self, s) => self.CrossVF(s)

pub extern "js" fn B2Vec2::crossFV(self: B2Vec2, s: Double) -> Unit =
  #| (self, s) => self.CrossFV(s)

pub extern "js" fn B2Vec2::minV(self: B2Vec2, b: B2Vec2) -> Unit =
  #| (self, b) => self.MinV(b)

pub extern "js" fn B2Vec2::maxV(self: B2Vec2, b: B2Vec2) -> Unit =
  #| (self, b) => self.MaxV(b)

pub extern "js" fn B2Vec2::abs(self: B2Vec2) -> Unit =
  #| self => self.Abs()

pub extern "js" fn B2Vec2::length(self: B2Vec2) -> Double =
  #| self => self.Length()

pub extern "js" fn B2Vec2::normalize(self: B2Vec2) -> Double =
  #| self => self.Normalize()

pub extern "js" fn B2Vec2::isValid(self: B2Vec2) -> Bool =
  #| self => self.IsValid()

// get and set
pub extern "js" fn B2Vec2::setX(self: B2Vec2, x: Double) -> Unit =
  #| (self, x) => { self.x = x; }

pub extern "js" fn B2Vec2::setY(self: B2Vec2, y: Double) -> Unit =
  #| (self, y) => { self.y = y; }

pub extern "js" fn B2Vec2::getX(self: B2Vec2) -> Double =
  #| self => self.x

pub extern "js" fn B2Vec2::getY(self: B2Vec2) -> Double =
  #| self => self.y
