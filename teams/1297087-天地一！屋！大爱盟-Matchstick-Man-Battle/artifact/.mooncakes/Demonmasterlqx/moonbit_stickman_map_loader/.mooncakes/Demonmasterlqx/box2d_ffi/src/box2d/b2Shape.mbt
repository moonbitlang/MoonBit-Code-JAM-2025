// MoonBox2D's b2Shape
// Create by Great-Love-League
// Contact with us if you have any questions.

pub(all) enum B2ShapeType{
  UnknownShape // -1 && others
  CircleShape // 0
  PolygonShape // 1
  BoxShape // 2
} derive(Eq, Hash, Show)

// functions

pub(open) trait Shape{
  getBase(Self) -> B2Shape;

  // functions
  testPoint(Self, p: B2Vec2) -> Bool = _;
  getType(Self) -> B2ShapeType = _;
  // Get the parent body of this shape.
  getBody(Self) -> B2Body = _;
  getPosition(Self) -> B2Vec2 = _;
  getRotationMatrix(Self) -> B2Mat22 = _;
  getNext(Self) -> B2Shape = _;
  resetProxy(Self, broadPhase: B2BroadPhase) -> Unit = _;
  isEqual(Self, other: Self) -> Bool = _;
}

extern "js" fn B2Shape::isEqual_(self: B2Shape, other: B2Shape) -> Bool =
  #| (self, other) => self === other

// realze ffi function for base type B2Shape
extern "js" fn B2Shape::testPoint_(self: B2Shape, p: B2Vec2) -> Bool =
  #| (self, p) => { return self.TestPoint(p); }

extern "js" fn B2Shape::getType_(self: B2Shape) -> Int =
  #| self => self.GetType();

extern "js" fn B2Shape::getBody_(self: B2Shape) -> B2Body =
  #| self => self.GetBody();

extern "js" fn B2Shape::getPosition_(self: B2Shape) -> B2Vec2 =
  #| self => self.GetPosition();

extern "js" fn B2Shape::getRotationMatrix_(self: B2Shape) -> B2Mat22 =
  #| self => self.GetRotationMatrix();

extern "js" fn B2Shape::getNext_(self: B2Shape) -> B2Shape =
  #| self => self.GetNext();

extern "js" fn B2Shape::resetProxy_(self: B2Shape, broadPhase: B2BroadPhase) -> Unit =
  #| (self, broadPhase) => { self.ResetProxy(broadPhase); }

// impl getbase_ for derived type

extern "js" fn B2CircleShape::getBase_(self: B2CircleShape) -> B2Shape =
  #| self => self

extern "js" fn B2PolygonShape::getBase_(self: B2PolygonShape) -> B2Shape =
  #| self => self

extern "js" fn B2BoxShape::getBase_(self: B2BoxShape) -> B2Shape =
  #| self => self

// impl getbase trait

pub impl Shape for B2Shape with getBase(self: B2Shape) {
  self
}

pub impl Shape for B2CircleShape with getBase(self: B2CircleShape) {
  self.getBase_()
}

pub impl Shape for B2PolygonShape with getBase(self: B2PolygonShape) {
  self.getBase_()
}

pub impl Shape for B2BoxShape with getBase(self: B2BoxShape) {
  self.getBase_()
}

// impl default for derived type

impl Shape with testPoint(self: Self, p: B2Vec2) -> Bool {
  self.getBase().testPoint_(p)
}

impl Shape with isEqual(self: Self, other: Self) -> Bool {
  self.getBase().isEqual_(other.getBase())
}

impl Shape with getType(self: Self) -> B2ShapeType {
  let typenum = self.getBase().getType_()
  if typenum == -1 {
    return UnknownShape;
  } else if typenum == 0 {
    return CircleShape;
  } else if typenum == 1 {
    return PolygonShape;
  } else if typenum == 2 {
    return BoxShape;
  } else {
    return UnknownShape;
  }
}

impl Shape with getBody(self: Self) -> B2Body {
  self.getBase().getBody_()
}

impl Shape with getPosition(self: Self) -> B2Vec2 {
  self.getBase().getPosition_()
}

impl Shape with getRotationMatrix(self: Self) -> B2Mat22 {
  self.getBase().getRotationMatrix_()
}

impl Shape with getNext(self: Self) -> B2Shape {
  self.getBase().getNext_()
}

impl Shape with resetProxy(self: Self, broadPhase: B2BroadPhase) -> Unit {
  self.getBase().resetProxy_(broadPhase)
}

// 转换

pub extern "js" fn B2Shape::toPolygonShape(self: B2Shape) -> B2PolygonShape =
  #| self => self

pub extern "js" fn B2Shape::toBoxShape(self: B2Shape) -> B2BoxShape =
  #| self => self

pub extern "js" fn B2Shape::toCircleShape(self: B2Shape) -> B2CircleShape =
  #| self => self

pub impl Shape for B2BoxShape
pub impl Shape for B2CircleShape
pub impl Shape for B2PolygonShape
