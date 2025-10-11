const $9221120237041090561L = { hi: 2146959360, lo: 1 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const moonbitlang$core$builtin$$MyInt64$reinterpret_double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setFloat64(0, a);
  const hi = view.getInt32(0);
  const lo = view.getInt32(4);
  return { hi, lo };
};
const moonbitlang$core$builtin$$MyInt64$reinterpret_as_double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setUint32(0, a.hi);
  view.setUint32(4, a.lo);
  return view.getFloat64(0);
};
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$MyInt64$compare_u = (a, b) => {
  const ahi = a.hi >>> 0;
  const bhi = b.hi >>> 0;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const moonbitlang$core$double$$Double$mod_ffi = (a, b) => (a % b);
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$createBody_ = (self, def) => self.CreateBody(def);
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$createJoint_ = (self, def) => self.CreateJoint(def);
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$step_ = (self, dt, iterations) => { self.Step(dt, iterations); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$getBodyList_ = self => {
   let bodies = [];
   let body = self.GetBodyList();
   while (body != null) {
     bodies.push(body);
     body = body.m_next;
   }
   return bodies;
 };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$getContactList_ = self => {
   let contacts = [];
   let contact = self.GetContactList();
   while (contact != null) {
     contacts.push(contact);
     contact = contact.m_next;
   }
   return contacts;
 };
const Demonmasterlqx$box2d_ffi$box2d$$b2World = (worldAABB, gravity, doSleep) => new b2World(worldAABB, gravity, doSleep);
const Demonmasterlqx$box2d_ffi$box2d$$b2Vec2 = (x, y) => new b2Vec2(x, y);
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX = self => self.x;
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY = self => self.y;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_ = (self, friction) => { self.friction = friction; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_ = (self, density) => { self.density = density; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_ = (self, groupIndex) => { self.groupIndex = groupIndex; };
const Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getType_ = self => self.GetType();;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_ = self => self.GetBody();;
const Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2PolygonShape$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$toPolygonShape = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$toCircleShape = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody1_ = (self, body) => { self.body1 = body; };
const Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody2_ = (self, body) => { self.body2 = body; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef = () => new b2RevoluteJointDef();
const Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody1_ = self => self.GetBody1();
const Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody2_ = self => self.GetBody2();
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJoint$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint = self => self instanceof b2RevoluteJoint ? self : null;
const Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef = () => new b2BoxDef();
const Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents = (self, extents) => { self.extents = extents; };
const Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getRadius = self => self.m_radius;
const Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getLocalPosition = self => self.m_localPosition;
const Demonmasterlqx$box2d_ffi$box2d$$B2PolygonShape$getVertices = self => {
   let vertices = [];
   for (let i = 0; i < self.m_vertexCount; i++) {
     vertices.push(self.m_vertices[i].Copy());
   }
   return vertices;
 };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint = (self, point) => { self.anchorPoint.Set(point.x, point.y); };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle = (self, angle) => { self.lowerAngle = angle; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle = (self, angle) => { self.upperAngle = angle; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit = (self, enable) => { self.enableLimit = enable; };
const Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape1 = self => self.GetShape1();
const Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape2 = self => self.GetShape2();
const Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef = () => new b2BodyDef();
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition = (self, position) => { self.position = position };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation = (self, rotation) => { self.rotation = rotation };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape = (self, shape) => { self.AddShape(shape) };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition = self => self.GetCenterPosition();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation = self => self.GetRotation();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getLinearVelocity = self => self.GetLinearVelocity();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity = self => self.GetAngularVelocity();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$setAngularVelocity = (self, velocity) => { self.SetAngularVelocity(velocity); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce = (self, force, point) => { self.ApplyForce(force, point); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque = (self, torque) => { self.ApplyTorque(torque); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldPoint = (self, localPoint) => self.GetWorldPoint(localPoint);
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getShapeList = self => {
   let shapes = [];
   let shape = self.GetShapeList();
   while (shape != null) {
     shapes.push(shape);
     shape = shape.m_next;
   }
   return shapes;
 };
const Demonmasterlqx$box2d_ffi$box2d$$b2AABB = () => new b2AABB();
const Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setminVertex = (self, v) => { self.minVertex.Set(v.x, v.y); };
const Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setmaxVertex = (self, v) => { self.maxVertex.Set(v.x, v.y); };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginContour_ = (self) => self.beginContour();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endContour_ = (self) => self.endContour();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginShape_ = (self, mode) => self.beginShape(mode);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endShape_ = (self, mode, count) => self.endShape(mode, count);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierVertex_ = (self, x2, y2, x3, y3, x4, y4) => self.bezierVertex(x2, y2, x3, y3, x4, y4);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveVertex_ = (self, x, y) => self.curveVertex(x, y);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$vertex_$46$inner = (self, x, y, z, u, v) => self.vertex(x, y, z, u, v);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$normal_$46$inner = (self, nx, ny, nz) => self.normal(nx, ny, nz);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$quadraticVertex_ = (self, x2, y2, x3, y3) => self.quadraticVertex(x2, y2, x3, y3);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezier_ = (self, x1, y1, x2, y2, x3, y3, x4, y4) => self.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierPoint_ = (self, a, b, c, d, t) => self.bezierPoint(a, b, c, d, t);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierTangent_ = (self, a, b, c, d, t) => self.bezierTangent(a, b, c, d, t);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curve_ = (self, x1, y1, x2, y2, x3, y3, x4, y4) => self.curve(x1, y1, x2, y2, x3, y3, x4, y4);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curvePoint_ = (self, a, b, c, d, t) => self.curvePoint(a, b, c, d, t);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveTangent_ = (self, a, b, c, d, t) => self.curveTangent(a, b, c, d, t);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveTightness_ = (self, amount) => self.curveTightness(amount);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$ellipseMode_ = (self, mode) => self.ellipseMode(mode);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$rectMode_ = (self, mode) => self.rectMode(mode);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noSmooth_ = (self) => self.noSmooth();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$smooth_ = (self) => self.smooth();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeCap_ = (self, cap) => self.strokeCap(cap);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeJoin_ = (self, join) => self.strokeJoin(join);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeWeight_ = (self, weight) => self.strokeWeight(weight);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$arc_ = (self, x, y, w, h, start, stop, mode, detail) => self.arc(x, y, w, h, start, stop, mode, detail);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$circle_ = (self, x, y, d) => self.circle(x, y, d);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$ellipse_ = (self, x, y, w, h) => self.ellipse(x, y, w, h);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$line_ = (self, x1, y1, x2, y2) => self.line(x1, y1, x2, y2);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$point_ = (self, x, y) => self.point(x, y);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$quad_ = (self, x1, y1, x2, y2, x3, y3, x4, y4) => self.quad(x1, y1, x2, y2, x3, y3, x4, y4);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$rect_ = (self, x, y, w, h) => self.rect(x, y, w, h);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$triangle_ = (self, x1, y1, x2, y2, x3, y3) => self.triangle(x1, y1, x2, y2, x3, y3);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$square_ = (self, x, y, s) => self.square(x, y, s);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getTouches_ = (self) => self.touches;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchEnded_ = (self, callback) => self.touchEnded = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchEnded_ = (self) => self.touchEnded = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchMoved_ = (self, callback) => self.touchMoved = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchMoved_ = (self) => self.touchMoved = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchStarted_ = (self, callback) => self.touchStarted = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchStarted_ = (self) => self.touchStarted = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getKey_ = (self) => self.key;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getKeyCodeInt_ = (self) => self.keyCode;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsDownInt_ = (self, keyCode) => self.keyIsDown(keyCode);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsPressed_ = (self) => self.keyIsPressed;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyPressed_ = (self, callback) => self.keyPressed = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyPressed_ = (self) => self.keyPressed = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyReleased_ = (self, callback) => self.keyReleased = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyReleased_ = (self) => self.keyReleased = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyTyped_ = (self, callback) => self.keyTyped = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyTyped_ = (self) => self.keyTyped = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseX_ = (self) => self.mouseX;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseY_ = (self) => self.mouseY;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMovedX_ = (self) => self.movedX;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMovedY_ = (self) => self.movedY;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPmouseX_ = (self) => self.pmouseX;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPmouseY_ = (self) => self.pmouseY;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPwinMouseX_ = (self) => self.pwinMouseX;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPwinMouseY_ = (self) => self.pwinMouseY;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getWinMouseX_ = (self) => self.winMouseX;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getWinMouseY_ = (self) => self.winMouseY;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$mouseIsPressed_ = (self) => self.mouseIsPressed;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseButtonString_ = (self) => self.mouseButton;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setDoubleClicked_ = (self, callback) => self.doubleClicked = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelDoubleClicked_ = (self) => self.doubleClicked = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseClicked_ = (self, callback) => self.mouseClicked = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseClicked_ = (self) => self.mouseClicked = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseDragged_ = (self, callback) => self.mouseDragged = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseDragged_ = (self) => self.mouseDragged = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseMoved_ = (self, callback) => self.mouseMoved = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseMoved_ = (self) => self.mouseMoved = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMousePressed_ = (self, callback) => self.mousePressed = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMousePressed_ = (self) => self.mousePressed = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseReleased_ = (self, callback) => self.mouseReleased = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseReleased_ = (self) => self.mouseReleased = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseWheel_ = (self, callback) => self.mouseWheel = callback;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseWheel_ = (self) => self.mouseWheel = null;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$requestPointerLock_ = (self) => self.requestPointerLock();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$exitPointerLock_ = (self) => self.exitPointerLock();
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
function Option$Some$1$(param0) {
  this._0 = param0;
}
Option$Some$1$.prototype.$tag = 1;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noStroke_ = (self) => self.noStroke();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$background_$46$inner = (self, v1, v2, v3, a) => {
   const v2_val = v2 ? v2._0 : undefined;
   const v3_val = v3 ? v3._0 : undefined;
   const a_val = a ? a._0 : undefined;
   self.background(v1, v2_val, v3_val, a_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$fill_colorPara_$46$inner = (self, v1, v2, v3, a) => {
   const v2_val = v2 ? v2._0 : undefined;
   const v3_val = v3 ? v3._0 : undefined;
   const a_val = a ? a._0 : undefined;
   self.fill(v1, v2_val, v3_val, a_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$fill_colorObj_ = (self, c) => self.fill(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginClip_ = (self, x, y, w, h) => self.beginClip(x, y, w, h);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endClip_ = (self) => self.endClip();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clear_ = (self) => self.clear();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clip_ = (self, callback) => self.clip(callback);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clip_options_ = (self, callback, options) => self.clip(callback, options);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$colorMode_uniform_ = (self, mode, max) => self.colorMode(mode, max);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$colorMode_detailed_$46$inner = (self, mode, max1, max2, max3, maxA) => {
   const maxA_val = maxA ? maxA._0 : undefined;
   self.colorMode(mode, max1, max2, max3, maxA_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$erase_$46$inner = (self, strengthFill, strengthStroke) => {
   const fill_val = strengthFill ? strengthFill._0 : undefined;
   const stroke_val = strengthStroke ? strengthStroke._0 : undefined;
   self.erase(fill_val, stroke_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noErase_ = (self) => self.noErase();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_color_ = (self, c) => self.stroke(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_gray_$46$inner = (self, gray, alpha) => {
   const alpha_val = alpha ? alpha._0 : undefined;
   self.stroke(gray, alpha_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_components_$46$inner = (self, v1, v2, v3, alpha) => {
   const alpha_val = alpha ? alpha._0 : undefined;
   self.stroke(v1, v2, v3, alpha_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_string_ = (self, color_string) => self.stroke(color_string);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noFill_ = (self) => self.noFill();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$brightness_ = (self, c) => self.brightness(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$color_$46$inner = (self, v1, v2, v3, a) => {
   const v2_val = v2 ? v2._0 : undefined;
   const v3_val = v3 ? v3._0 : undefined;
   const a_val = a ? a._0 : undefined;
   return self.color(v1, v2_val, v3_val, a_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$alpha_ = (self, c) => self.alpha(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$blue_ = (self, c) => self.blue(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$green_ = (self, c) => self.green(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$red_ = (self, c) => self.red(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$hue_ = (self, c) => self.hue(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$lerpColor_ = (self, c1, c2, amount) => self.lerpColor(c1, c2, amount);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$lightness_ = (self, c) => self.lightness(c);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$paletteLerp_ = (self, colors_stops, amt) => {
   const js_colors_stops = colors_stops.map(item => [item._0, item._1]);
   return self.paletteLerp(js_colors_stops, amt);
 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$equals = (a,b)=>{return a===b};
const Great$45$Love$45$League$Stick_Man_Battle$server$$getP5Instance$46$inner = (drawww, width, height) => {
   a = new p5((p)=>{
  p.setup = function() {
    p.createCanvas(width, height);
  }
  p.draw = function() {drawww(p)}
})
return a
};
const Option$None$2$ = { $tag: 0 };
function Option$Some$2$(param0) {
  this._0 = param0;
}
Option$Some$2$.prototype.$tag = 1;
const Kaida$45$Amethyst$math$$pi_over_2 = [1.5707962512969971, 7.5497894158615964e-008, 5.3903025299577648e-015, 3.2820034158079129e-022, 1.2706557530806761e-029, 1.2293330898111133e-036, 2.7337005381646456e-044, 2.1674168387780482e-051];
const Kaida$45$Amethyst$math$$two_over_pi = [10680707, 7228996, 1387004, 2578385, 16069853, 12639074, 9804092, 4427841, 16666979, 11263675, 12935607, 2387514, 4345298, 14681673, 3074569, 13734428, 16653803, 1880361, 10960616, 8533493, 3062596, 8710556, 7349940, 6258241, 3772886, 3769171, 3798172, 8675211, 12450088, 3874808, 9961438, 366607, 15675153, 9132554, 7151469, 3571407, 2607881, 12013382, 4155038, 6285869, 7677882, 13102053, 15825725, 473591, 9065106, 15363067, 6271263, 9264392, 5636912, 4652155, 7056368, 13614112, 10155062, 1944035, 9527646, 15080200, 6658437, 6231200, 6832269, 16767104, 5075751, 3212806, 1398474, 7579849, 6349435, 12618859];
const Kaida$45$Amethyst$math$$npio2_hw = [1073291771, 1074340347, 1074977148, 1075388923, 1075800698, 1076025724, 1076231611, 1076437499, 1076643386, 1076849274, 1076971356, 1077074300, 1077177244, 1077280187, 1077383131, 1077486075, 1077589019, 1077691962, 1077794906, 1077897850, 1077968460, 1078019932, 1078071404, 1078122876, 1078174348, 1078225820, 1078277292, 1078328763, 1078380235, 1078431707, 1078483179, 1078534651];
const Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list = moonbitlang$core$ref$$Ref$new$0$(moonbitlang$core$array$$Array$new$46$inner$1$(0));
const Great$45$Love$45$League$Stick_Man_Battle$server$$platform_index = moonbitlang$core$ref$$Ref$new$2$(0);
const Great$45$Love$45$League$Stick_Man_Battle$server$$particle_index = moonbitlang$core$ref$$Ref$new$2$(0);
const Great$45$Love$45$League$Stick_Man_Battle$server$$particle_list = moonbitlang$core$ref$$Ref$new$3$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const Great$45$Love$45$League$Stick_Man_Battle$server$$world = moonbitlang$core$ref$$Ref$new$5$(Great$45$Love$45$League$Stick_Man_Battle$server$$create_world(undefined));
const moonbitlang$core$double$$not_a_number = moonbitlang$core$int64$$Int64$reinterpret_as_double($9221120237041090561L);
function moonbitlang$core$abort$$abort$2$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$6$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$7$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$7$(self_, other) > 0;
}
function moonbitlang$core$array$$Array$at$1$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$8$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$9$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$2$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$6$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1906(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1906(_env, num2);
  }
  const _p = num % radix | 0;
  const _tmp = _p < 0 ? 0 - _p | 0 : _p;
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output$46$inner(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: radix, _1: logger };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1906(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$2$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$6$, method_1: moonbitlang$core$builtin$$Logger$write_substring$6$, method_2: moonbitlang$core$builtin$$Logger$write_char$6$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$2$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$int$$Int$to_uint64(self) {
  return moonbitlang$core$int$$Int$to_int64(self);
}
function moonbitlang$core$double$$Double$reinterpret_as_uint64(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_double(self);
}
function moonbitlang$core$string$$String$substring$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$6$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$uint$$UInt$to_uint64(self) {
  return moonbitlang$core$uint64$$UInt64$extend_uint(self);
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$array$$Array$push$1$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$4$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$10$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$9$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$MyInt64$land(self, other) {
  return { hi: self.hi & other.hi, lo: self.lo & other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lor(self, other) {
  return { hi: self.hi | other.hi, lo: self.lo | other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _hi = self.hi;
      const _lo = self.lo;
      const hi = _hi;
      const lo = _lo;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return { hi: hi$2, lo: lo$2 };
    } else {
      return { hi: self.lo << (shift$2 - 32 | 0), lo: 0 };
    }
  }
}
function moonbitlang$core$builtin$$MyInt64$lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >>> shift$2 | 0, lo: self.lo >>> shift$2 | self.hi << (32 - shift$2 | 0) } : { hi: 0, lo: self.hi >>> (shift$2 - 32 | 0) | 0 };
}
function moonbitlang$core$uint64$$UInt64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$7$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$7$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$7$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$7$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$builtin$$Shl$shl$7$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$7$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$11$(input) {
  console.log(input);
}
function moonbitlang$core$builtin$$println$2$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$2$(input));
}
function moonbitlang$core$array$$Array$new$46$inner$4$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$1$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$10$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$9$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$make$8$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$2$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$set$8$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$set$2$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$double$$Double$floor(_tmp) {
  return Math.floor(_tmp);
}
function moonbitlang$core$builtin$$Mod$mod$8$(self, other) {
  return moonbitlang$core$double$$Double$mod_ffi(self, other);
}
function moonbitlang$core$ref$$Ref$new$5$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$3$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$0$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$2$(x) {
  return { val: x };
}
function Kaida$45$Amethyst$math$$fabs(x) {
  return moonbitlang$core$uint64$$UInt64$reinterpret_as_double(moonbitlang$core$builtin$$BitAnd$land$7$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L));
}
function Kaida$45$Amethyst$math$$isinf(x) {
  return moonbitlang$core$builtin$$Eq$equal$7$(moonbitlang$core$builtin$$BitAnd$land$7$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L), $9218868437227405312L);
}
function Kaida$45$Amethyst$math$$isnan(x) {
  return moonbitlang$core$builtin$$op_gt$7$(moonbitlang$core$builtin$$BitAnd$land$7$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L), $9218868437227405312L);
}
function Kaida$45$Amethyst$math$$__hi(x) {
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$builtin$$Shr$shr$7$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), 32));
}
function Kaida$45$Amethyst$math$$__low(x) {
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$double$$Double$reinterpret_as_uint64(x));
}
function Kaida$45$Amethyst$math$$__combineQ(hi, low) {
  return moonbitlang$core$uint64$$UInt64$reinterpret_as_double(moonbitlang$core$builtin$$BitOr$lor$7$(moonbitlang$core$builtin$$Shl$shl$7$(hi, 32), low));
}
function Kaida$45$Amethyst$math$$__combineW(hi, low) {
  return Kaida$45$Amethyst$math$$__combineQ(moonbitlang$core$uint$$UInt$to_uint64(hi), moonbitlang$core$uint$$UInt$to_uint64(low));
}
function Kaida$45$Amethyst$math$$__kernel_cos(x, y) {
  let a = 0;
  let hz = 0;
  let z = 0;
  let r = 0;
  let qx = 0;
  const ix = Kaida$45$Amethyst$math$$__hi(x) & 2147483647;
  if (ix >>> 0 < 1044381696 >>> 0) {
    if (moonbitlang$core$double$$Double$to_int(x) === 0) {
      return 1;
    }
  }
  z = x * x;
  r = z * (0.0416666666666666 + z * (-0.001388888888887411 + z * (2.4801587289476729e-005 + z * (-2.7557314351390663e-007 + z * (2.0875723212981748e-009 + z * -1.1359647557788195e-011)))));
  if (ix >>> 0 < 1070805811 >>> 0) {
    return 1 - (0.5 * z - (z * r - x * y));
  } else {
    if (ix >>> 0 > 1072234496 >>> 0) {
      qx = 0.28125;
    } else {
      qx = Kaida$45$Amethyst$math$$__combineW((ix >>> 0) - (2097152 >>> 0) | 0, 0);
    }
    hz = 0.5 * z - qx;
    a = 1 - qx;
    return a - (hz - (z * r - x * y));
  }
}
function Kaida$45$Amethyst$math$$__kernel_sin(x, y, iy) {
  let z = 0;
  let r = 0;
  let v = 0;
  const ix = Kaida$45$Amethyst$math$$__hi(x) & 2147483647;
  if (ix >>> 0 < 1044381696 >>> 0) {
    if (moonbitlang$core$double$$Double$to_int(x) === 0) {
      return x;
    }
  }
  z = x * x;
  v = z * x;
  r = 0.00833333333332249 + z * (-0.00019841269829857949 + z * (2.7557313707070068e-006 + z * (-2.5050760253406863e-008 + z * 1.58969099521155e-010)));
  return iy === 0 ? x + v * (-0.16666666666666632 + z * r) : x - (z * (0.5 * y - v * r) - y - v * -0.16666666666666632);
}
function Kaida$45$Amethyst$math$$scalbn(input, n) {
  let n$2 = n;
  let y = input;
  if (n$2 > 1023) {
    y = y * 8.98846567431158e+307;
    n$2 = n$2 - 1023 | 0;
    if (n$2 > 1023) {
      y = y * 8.98846567431158e+307;
      n$2 = n$2 - 1023 | 0;
      if (n$2 > 1023) {
        n$2 = 1023;
      }
    }
  } else {
    if (n$2 < -1022) {
      y = y * 2.0041683600089728e-292;
      n$2 = n$2 + 969 | 0;
      if (n$2 < -1022) {
        y = y * 2.0041683600089728e-292;
        n$2 = n$2 + 969 | 0;
        if (n$2 < -1022) {
          n$2 = -1022;
        }
      }
    }
  }
  const ui = moonbitlang$core$builtin$$Shl$shl$7$(moonbitlang$core$int$$Int$to_uint64(1023 + n$2 | 0), 52);
  return y * moonbitlang$core$uint64$$UInt64$reinterpret_as_double(ui);
}
function Kaida$45$Amethyst$math$$__kernel_rem_pio2(x, y, e0, nx, prec) {
  const init_jk = [2, 3, 4, 6];
  let jz = 0;
  let jx = 0;
  let jv = 0;
  let jp = 0;
  let jk = 0;
  let carry = 0;
  let n = 0;
  const iq = moonbitlang$core$array$$Array$make$2$(20, 0);
  let i = 0;
  let j = 0;
  let k = 0;
  let m = 0;
  let q0 = 0;
  let ih = 0;
  let z = 0;
  let fw = 0;
  const f = moonbitlang$core$array$$Array$make$8$(20, 0);
  const fq = moonbitlang$core$array$$Array$make$8$(20, 0);
  const q = moonbitlang$core$array$$Array$make$8$(20, 0);
  jk = moonbitlang$core$array$$Array$at$2$(init_jk, prec);
  jp = jk;
  jx = nx - 1 | 0;
  jv = (e0 - 3 | 0) / 24 | 0;
  if (jv < 0) {
    jv = 0;
  }
  q0 = e0 - (Math.imul(24, jv + 1 | 0) | 0) | 0;
  j = jv - jx | 0;
  m = jx + jk | 0;
  i = 0;
  while (true) {
    if (i <= m) {
      moonbitlang$core$array$$Array$set$8$(f, i, j < 0 ? 0 : moonbitlang$core$array$$Array$at$2$(Kaida$45$Amethyst$math$$two_over_pi, j) + 0);
      i = i + 1 | 0;
      j = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  i = 0;
  while (true) {
    if (i <= jk) {
      j = 0;
      fw = 0;
      while (true) {
        if (j <= jx) {
          fw = fw + moonbitlang$core$array$$Array$at$8$(x, j) * moonbitlang$core$array$$Array$at$8$(f, (jx + i | 0) - j | 0);
          j = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$set$8$(q, i, fw);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  jz = jk;
  let recompute = true;
  while (true) {
    if (recompute) {
      recompute = false;
      i = 0;
      j = jz;
      z = moonbitlang$core$array$$Array$at$8$(q, jz);
      while (true) {
        if (j > 0) {
          fw = moonbitlang$core$double$$Double$floor(5.9604644775390625e-008 * z);
          moonbitlang$core$array$$Array$set$2$(iq, i, moonbitlang$core$double$$Double$to_int(z - 16777216 * fw));
          z = moonbitlang$core$array$$Array$at$8$(q, j - 1 | 0) + fw;
          i = i + 1 | 0;
          j = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      z = Kaida$45$Amethyst$math$$scalbn(z, q0);
      z = z - 8 * moonbitlang$core$double$$Double$floor(z * 0.125);
      n = moonbitlang$core$double$$Double$to_int(z);
      z = z - (n + 0);
      ih = 0;
      if (q0 > 0) {
        i = moonbitlang$core$array$$Array$at$2$(iq, jz - 1 | 0) >> (24 - q0 | 0);
        n = n + i | 0;
        const _index_2 = jz - 1 | 0;
        moonbitlang$core$array$$Array$set$2$(iq, _index_2, moonbitlang$core$array$$Array$at$2$(iq, _index_2) - (i << (24 - q0 | 0)) | 0);
        ih = moonbitlang$core$array$$Array$at$2$(iq, jz - 1 | 0) >> (23 - q0 | 0);
      } else {
        if (q0 === 0) {
          ih = moonbitlang$core$array$$Array$at$2$(iq, jz - 1 | 0) >> 23;
        } else {
          if (z >= 0.5) {
            ih = 2;
          }
        }
      }
      if (ih > 0) {
        n = n + 1 | 0;
        carry = 0;
        i = 0;
        while (true) {
          if (i < jz) {
            j = moonbitlang$core$array$$Array$at$2$(iq, i);
            if (carry === 0) {
              if (j !== 0) {
                carry = 1;
                moonbitlang$core$array$$Array$set$2$(iq, i, 16777216 - j | 0);
              }
            } else {
              moonbitlang$core$array$$Array$set$2$(iq, i, 16777215 - j | 0);
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (q0 > 0) {
          const _bind = q0;
          switch (_bind) {
            case 1: {
              moonbitlang$core$array$$Array$set$2$(iq, jz - 1 | 0, moonbitlang$core$array$$Array$at$2$(iq, jz - 1 | 0) & 8388607);
              break;
            }
            case 2: {
              moonbitlang$core$array$$Array$set$2$(iq, jz - 1 | 0, moonbitlang$core$array$$Array$at$2$(iq, jz - 1 | 0) & 4194303);
              break;
            }
          }
        }
        if (ih === 2) {
          z = 1 - z;
          if (carry !== 0) {
            z = z - Kaida$45$Amethyst$math$$scalbn(1, q0);
          }
        }
      }
      if (z === 0) {
        j = 0;
        i = jz - 1 | 0;
        while (true) {
          if (i >= jk) {
            j = j | moonbitlang$core$array$$Array$at$2$(iq, i);
            i = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j === 0) {
          k = 1;
          while (true) {
            if (moonbitlang$core$array$$Array$at$2$(iq, jk - k | 0) === 0) {
              k = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          i = jz + 1 | 0;
          while (true) {
            if (i <= (jz + k | 0)) {
              moonbitlang$core$array$$Array$set$8$(f, jx + i | 0, moonbitlang$core$array$$Array$at$2$(Kaida$45$Amethyst$math$$two_over_pi, jv + i | 0) + 0);
              j = 0;
              fw = 0;
              while (true) {
                if (j <= jx) {
                  fw = fw + moonbitlang$core$array$$Array$at$8$(x, j) * moonbitlang$core$array$$Array$at$8$(f, (jx + i | 0) - j | 0);
                  j = j + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              moonbitlang$core$array$$Array$set$8$(q, i, fw);
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          jz = jz + k | 0;
          recompute = true;
          continue;
        }
      }
      if (z === 0) {
        jz = jz - 1 | 0;
        q0 = q0 - 24 | 0;
        while (true) {
          if (moonbitlang$core$array$$Array$at$2$(iq, jz) === 0) {
            jz = jz - 1 | 0;
            q0 = q0 - 24 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        z = Kaida$45$Amethyst$math$$scalbn(z, -q0 | 0);
        if (z >= 16777216) {
          fw = moonbitlang$core$double$$Double$floor(5.9604644775390625e-008 * z);
          moonbitlang$core$array$$Array$set$2$(iq, jz, moonbitlang$core$double$$Double$to_int(z - 16777216 * fw));
          jz = jz + 1 | 0;
          q0 = q0 + 24 | 0;
          moonbitlang$core$array$$Array$set$2$(iq, jz, moonbitlang$core$double$$Double$to_int(fw));
        } else {
          moonbitlang$core$array$$Array$set$2$(iq, jz, moonbitlang$core$double$$Double$to_int(z));
        }
      }
      fw = Kaida$45$Amethyst$math$$scalbn(1, q0);
      i = jz;
      while (true) {
        if (i >= 0) {
          moonbitlang$core$array$$Array$set$8$(q, i, fw * (moonbitlang$core$array$$Array$at$2$(iq, i) + 0));
          fw = fw * 5.9604644775390625e-008;
          i = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      i = jz;
      while (true) {
        if (i >= 0) {
          fw = 0;
          k = 0;
          while (true) {
            if (k <= jp && k <= (jz - i | 0)) {
              fw = fw + moonbitlang$core$array$$Array$at$8$(Kaida$45$Amethyst$math$$pi_over_2, k) * moonbitlang$core$array$$Array$at$8$(q, i + k | 0);
              k = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          moonbitlang$core$array$$Array$set$8$(fq, jz - i | 0, fw);
          i = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _L: {
        _L$2: {
          switch (prec) {
            case 0: {
              fw = 0;
              i = jz;
              while (true) {
                if (i >= 0) {
                  fw = fw + moonbitlang$core$array$$Array$at$8$(fq, i);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              moonbitlang$core$array$$Array$set$8$(y, 0, ih === 0 ? fw : -fw);
              break;
            }
            case 1: {
              break _L$2;
            }
            case 2: {
              break _L$2;
            }
            case 3: {
              i = jz;
              while (true) {
                if (i > 0) {
                  fw = moonbitlang$core$array$$Array$at$8$(fq, i - 1 | 0) + moonbitlang$core$array$$Array$at$8$(fq, i);
                  const _index_4 = i;
                  moonbitlang$core$array$$Array$set$8$(fq, _index_4, moonbitlang$core$array$$Array$at$8$(fq, _index_4) + (moonbitlang$core$array$$Array$at$8$(fq, i - 1 | 0) - fw));
                  moonbitlang$core$array$$Array$set$8$(fq, i - 1 | 0, fw);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              i = jz;
              while (true) {
                if (i > 1) {
                  fw = moonbitlang$core$array$$Array$at$8$(fq, i - 1 | 0) + moonbitlang$core$array$$Array$at$8$(fq, i);
                  const _index_6 = i;
                  moonbitlang$core$array$$Array$set$8$(fq, _index_6, moonbitlang$core$array$$Array$at$8$(fq, _index_6) + (moonbitlang$core$array$$Array$at$8$(fq, i - 1 | 0) - fw));
                  moonbitlang$core$array$$Array$set$8$(fq, i - 1 | 0, fw);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              fw = 0;
              i = jz;
              while (true) {
                if (i >= 2) {
                  fw = fw + moonbitlang$core$array$$Array$at$8$(fq, i);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (ih === 0) {
                moonbitlang$core$array$$Array$set$8$(y, 0, moonbitlang$core$array$$Array$at$8$(fq, 0));
                moonbitlang$core$array$$Array$set$8$(y, 1, moonbitlang$core$array$$Array$at$8$(fq, 1));
                moonbitlang$core$array$$Array$set$8$(y, 2, fw);
              } else {
                moonbitlang$core$array$$Array$set$8$(y, 0, -moonbitlang$core$array$$Array$at$8$(fq, 0));
                moonbitlang$core$array$$Array$set$8$(y, 1, -moonbitlang$core$array$$Array$at$8$(fq, 1));
                moonbitlang$core$array$$Array$set$8$(y, 2, -fw);
              }
              break;
            }
          }
          break _L;
        }
        fw = 0;
        i = jz;
        while (true) {
          if (i >= 0) {
            fw = fw + moonbitlang$core$array$$Array$at$8$(fq, i);
            i = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        moonbitlang$core$array$$Array$set$8$(y, 0, ih === 0 ? fw : -fw);
        fw = moonbitlang$core$array$$Array$at$8$(fq, 0) - fw;
        i = 1;
        while (true) {
          if (i <= jz) {
            fw = fw + moonbitlang$core$array$$Array$at$8$(fq, i);
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        moonbitlang$core$array$$Array$set$8$(y, 1, ih === 0 ? fw : -fw);
      }
      continue;
    } else {
      break;
    }
  }
  return n & 7;
}
function Kaida$45$Amethyst$math$$rem_pio2(x, y) {
  const hx = Kaida$45$Amethyst$math$$__hi(x);
  const ix = hx & 2147483647;
  let z = 0;
  if (ix <= 1072243195) {
    moonbitlang$core$array$$Array$set$8$(y, 0, x);
    moonbitlang$core$array$$Array$set$8$(y, 1, 0);
    return 0;
  }
  if (ix < 1073928572) {
    if (hx > 0) {
      z = x - 1.5707963267341256;
      if (ix !== 1073291771) {
        moonbitlang$core$array$$Array$set$8$(y, 0, z - 6.0771005065061922e-011);
        moonbitlang$core$array$$Array$set$8$(y, 1, z - moonbitlang$core$array$$Array$at$8$(y, 0) - 6.0771005065061922e-011);
      } else {
        z = z - 6.077100506303966e-011;
        moonbitlang$core$array$$Array$set$8$(y, 0, z - 2.0222662487959506e-021);
        moonbitlang$core$array$$Array$set$8$(y, 1, z - moonbitlang$core$array$$Array$at$8$(y, 0) - 2.0222662487959506e-021);
      }
      return 1;
    } else {
      z = x + 1.5707963267341256;
      if (ix !== 1073291771) {
        moonbitlang$core$array$$Array$set$8$(y, 0, z + 6.0771005065061922e-011);
        moonbitlang$core$array$$Array$set$8$(y, 1, z - moonbitlang$core$array$$Array$at$8$(y, 0) + 6.0771005065061922e-011);
      } else {
        const z$2 = z + 6.077100506303966e-011;
        moonbitlang$core$array$$Array$set$8$(y, 0, z$2 + 2.0222662487959506e-021);
        moonbitlang$core$array$$Array$set$8$(y, 1, z$2 - moonbitlang$core$array$$Array$at$8$(y, 0) + 2.0222662487959506e-021);
      }
      return -1;
    }
  }
  if (ix <= 1094263291) {
    const t = Math.abs(x);
    const n = moonbitlang$core$double$$Double$to_int(t * 0.63661977236758138 + 0.5);
    const fn_ = n + 0;
    let r = t - fn_ * 1.5707963267341256;
    let w = fn_ * 6.0771005065061922e-011;
    if (n < 32 && ix !== moonbitlang$core$array$$Array$at$2$(Kaida$45$Amethyst$math$$npio2_hw, n - 1 | 0)) {
      moonbitlang$core$array$$Array$set$8$(y, 0, r - w);
    } else {
      const j = ix >> 20;
      moonbitlang$core$array$$Array$set$8$(y, 0, r - w);
      const i = j - (Kaida$45$Amethyst$math$$__hi(moonbitlang$core$array$$Array$at$8$(y, 0)) >>> 20 & 2047) | 0;
      if (i > 16) {
        const t$2 = r;
        w = fn_ * 6.077100506303966e-011;
        r = t$2 - w;
        w = fn_ * 2.0222662487959506e-021 - (t$2 - r - w);
        moonbitlang$core$array$$Array$set$8$(y, 0, r - w);
        const i$2 = j - (Kaida$45$Amethyst$math$$__hi(moonbitlang$core$array$$Array$at$8$(y, 0)) >>> 20 & 2047) | 0;
        if (i$2 > 49) {
          const t$3 = r;
          w = fn_ * 2.0222662487111665e-021;
          r = t$3 - w;
          w = fn_ * 8.4784276603689e-032 - (t$3 - r - w);
          moonbitlang$core$array$$Array$set$8$(y, 0, r - w);
        }
      }
    }
    moonbitlang$core$array$$Array$set$8$(y, 1, r - moonbitlang$core$array$$Array$at$8$(y, 0) - w);
    if (hx > 0) {
      return n;
    } else {
      moonbitlang$core$array$$Array$set$8$(y, 0, -moonbitlang$core$array$$Array$at$8$(y, 0));
      moonbitlang$core$array$$Array$set$8$(y, 1, -moonbitlang$core$array$$Array$at$8$(y, 1));
      return -n | 0;
    }
  }
  if (ix >= 2146435072) {
    moonbitlang$core$array$$Array$set$8$(y, 0, x - x);
    moonbitlang$core$array$$Array$set$8$(y, 1, moonbitlang$core$array$$Array$at$8$(y, 0));
    return 0;
  }
  z = Kaida$45$Amethyst$math$$__combineW(Kaida$45$Amethyst$math$$__hi(z), Kaida$45$Amethyst$math$$__low(x));
  const e0 = (ix >> 20) - 1046 | 0;
  z = Kaida$45$Amethyst$math$$__combineW(ix - (e0 << 20) | 0, Kaida$45$Amethyst$math$$__low(z));
  const tx = [0, 0, 0];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 2) {
      moonbitlang$core$array$$Array$set$8$(tx, i, moonbitlang$core$double$$Double$to_int(z) + 0);
      z = (z - moonbitlang$core$array$$Array$at$8$(tx, i)) * 16777216;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$set$8$(tx, 2, z);
  let nx = 3;
  while (true) {
    if (moonbitlang$core$array$$Array$at$8$(tx, nx - 1 | 0) === 0) {
      nx = nx - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const n = Kaida$45$Amethyst$math$$__kernel_rem_pio2(tx, y, e0, nx, 2);
  if (hx > 0) {
    return n;
  } else {
    moonbitlang$core$array$$Array$set$8$(y, 0, -moonbitlang$core$array$$Array$at$8$(y, 0));
    moonbitlang$core$array$$Array$set$8$(y, 1, -moonbitlang$core$array$$Array$at$8$(y, 1));
    return -n | 0;
  }
}
function Kaida$45$Amethyst$math$$sin(x) {
  if (Kaida$45$Amethyst$math$$isinf(x) || Kaida$45$Amethyst$math$$isnan(x)) {
    return moonbitlang$core$double$$not_a_number;
  }
  const y = [0, 0];
  if (Kaida$45$Amethyst$math$$fabs(x) <= 0.78539816339744828) {
    return Kaida$45$Amethyst$math$$__kernel_sin(x, 0, 0);
  } else {
    const n = Kaida$45$Amethyst$math$$rem_pio2(x, y);
    const _bind = n & 3;
    switch (_bind) {
      case 0: {
        return Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1), 1);
      }
      case 1: {
        return Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1));
      }
      case 2: {
        return -Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1), 1);
      }
      default: {
        return -Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1));
      }
    }
  }
}
function Kaida$45$Amethyst$math$$__kernel_tan(x, y, iy) {
  let x$2 = x;
  let y$2 = y;
  let z = 0;
  let r = 0;
  let v = 0;
  let w = 0;
  let s = 0;
  const t = [0.33333333333333409, 0.13333333333320124, 0.053968253976226052, 0.021869488294859542, 0.0088632398235993, 0.0035920791075913124, 0.0014562094543252903, 0.0005880412408202641, 0.00024646313481846991, 7.8179444293955709e-005, 7.1407249138260819e-005, -1.8558637485527546e-005, 2.5907305186363371e-005, 1, 0.78539816339744828, 3.061616997868383e-017];
  const hx = Kaida$45$Amethyst$math$$__hi(x$2);
  const ix = hx & 2147483647;
  if (ix < 1043333120) {
    if (moonbitlang$core$double$$Double$to_int(x$2) === 0) {
      if ((ix | Kaida$45$Amethyst$math$$__low(x$2) | (iy + 1 | 0)) === 0) {
        return 1 / Math.abs(x$2);
      } else {
        if (iy === 1) {
          return x$2;
        } else {
          w = x$2 + y$2;
          z = w;
          z = Kaida$45$Amethyst$math$$__combineW(Kaida$45$Amethyst$math$$__hi(z), 0);
          v = y$2 - (z - x$2);
          const a = -1 / w;
          let t$2 = a;
          t$2 = Kaida$45$Amethyst$math$$__combineW(Kaida$45$Amethyst$math$$__hi(t$2), 0);
          s = 1 + t$2 * z;
          return t$2 + a * (s + t$2 * v);
        }
      }
    }
  }
  if (ix >= 1072010280) {
    if (hx < 0) {
      x$2 = -x$2;
      y$2 = -y$2;
    }
    z = 0.78539816339744828 - x$2;
    w = 3.061616997868383e-017 - y$2;
    x$2 = z + w;
    y$2 = 0;
  }
  z = x$2 * x$2;
  w = z * z;
  r = moonbitlang$core$array$$Array$at$8$(t, 1) + w * (moonbitlang$core$array$$Array$at$8$(t, 3) + w * (moonbitlang$core$array$$Array$at$8$(t, 5) + w * (moonbitlang$core$array$$Array$at$8$(t, 7) + w * (moonbitlang$core$array$$Array$at$8$(t, 9) + w * moonbitlang$core$array$$Array$at$8$(t, 11)))));
  v = z * (moonbitlang$core$array$$Array$at$8$(t, 2) + w * (moonbitlang$core$array$$Array$at$8$(t, 4) + w * (moonbitlang$core$array$$Array$at$8$(t, 6) + w * (moonbitlang$core$array$$Array$at$8$(t, 8) + w * (moonbitlang$core$array$$Array$at$8$(t, 10) + w * moonbitlang$core$array$$Array$at$8$(t, 12))))));
  s = z * x$2;
  r = y$2 + z * (s * (r + v) + y$2);
  r = r + moonbitlang$core$array$$Array$at$8$(t, 0) * s;
  w = x$2 + r;
  if (ix >= 1072010280) {
    v = iy + 0;
    return ((1 - (hx >> 30 & 2) | 0) + 0) * (v - 2 * (x$2 - (w * w / (w + v) - r)));
  }
  if (iy === 1) {
    return w;
  } else {
    z = w;
    z = Kaida$45$Amethyst$math$$__combineW(Kaida$45$Amethyst$math$$__hi(z), 0);
    v = r - (z - x$2);
    const a = -1 / w;
    let t$2 = a;
    t$2 = Kaida$45$Amethyst$math$$__combineW(Kaida$45$Amethyst$math$$__hi(t$2), 0);
    s = 1 + t$2 * z;
    return t$2 + a * (s + t$2 * v);
  }
}
function Kaida$45$Amethyst$math$$tan(x) {
  if (Kaida$45$Amethyst$math$$isinf(x) || Kaida$45$Amethyst$math$$isnan(x)) {
    return moonbitlang$core$double$$not_a_number;
  }
  const y = moonbitlang$core$array$$Array$make$8$(2, 0);
  if (Kaida$45$Amethyst$math$$fabs(x) <= 0.78539816339744828) {
    return Kaida$45$Amethyst$math$$__kernel_tan(x, 0, 1);
  } else {
    const n = Kaida$45$Amethyst$math$$rem_pio2(x, y);
    return Kaida$45$Amethyst$math$$__kernel_tan(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1), 1 - ((n & 1) << 1) | 0);
  }
}
function Kaida$45$Amethyst$math$$cos(x) {
  if (Kaida$45$Amethyst$math$$isinf(x) || Kaida$45$Amethyst$math$$isnan(x)) {
    return moonbitlang$core$double$$not_a_number;
  }
  const y = [0, 0];
  if (Kaida$45$Amethyst$math$$fabs(x) <= 0.78539816339744828) {
    return Kaida$45$Amethyst$math$$__kernel_cos(x, 0);
  } else {
    const n = Kaida$45$Amethyst$math$$rem_pio2(x, y);
    const _bind = n & 3;
    switch (_bind) {
      case 0: {
        return Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1));
      }
      case 1: {
        return -Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1), 1);
      }
      case 2: {
        return -Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1));
      }
      default: {
        return Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$8$(y, 0), moonbitlang$core$array$$Array$at$8$(y, 1), 1);
      }
    }
  }
}
function Demonmasterlqx$box2d_ffi$box2d$$World$createBody$12$(self, def) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$createBody_(self.world, def);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$createJoint$12$(self, def) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$createJoint_(self.world, def);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$step$12$(self, dt, iterations) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$step_(self.world, dt, iterations);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getBodyList$12$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getBodyList_(self.world);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getContactList$12$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getContactList_(self.world);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$13$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$14$(self, friction) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$13$(self), friction);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$14$(self, density) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$13$(self), density);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$14$(self, groupIndex) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$13$(self), groupIndex);
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$15$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$16$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2PolygonShape$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getType$17$(self) {
  const typenum = Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getType_(self);
  return typenum === -1 ? 0 : typenum === 0 ? 1 : typenum === 1 ? 2 : typenum === 2 ? 3 : 0;
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$17$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$18$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$16$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$19$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$15$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$20$(self, body) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$21$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody1_(base, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$20$(self, body) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$21$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody2_(base, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$21$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody1$22$(self) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$23$(self);
  return Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody1_(base);
}
function Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody2$22$(self) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$23$(self);
  return Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody2_(base);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$23$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJoint$getBase_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getP5Instance$24$(self) {
  return self;
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getTouches$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getTouches_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchEnded$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchEnded_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchEnded$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchEnded_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchMoved$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchMoved_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchMoved$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchMoved_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchStarted$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchStarted_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchStarted$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchStarted_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKey$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getKey_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$intToKeyCode(code) {
  switch (code) {
    case 65: {
      return 0;
    }
    case 66: {
      return 1;
    }
    case 67: {
      return 2;
    }
    case 68: {
      return 3;
    }
    case 69: {
      return 4;
    }
    case 70: {
      return 5;
    }
    case 71: {
      return 6;
    }
    case 72: {
      return 7;
    }
    case 73: {
      return 8;
    }
    case 74: {
      return 9;
    }
    case 75: {
      return 10;
    }
    case 76: {
      return 11;
    }
    case 77: {
      return 12;
    }
    case 78: {
      return 13;
    }
    case 79: {
      return 14;
    }
    case 80: {
      return 15;
    }
    case 81: {
      return 16;
    }
    case 82: {
      return 17;
    }
    case 83: {
      return 18;
    }
    case 84: {
      return 19;
    }
    case 85: {
      return 20;
    }
    case 86: {
      return 21;
    }
    case 87: {
      return 22;
    }
    case 88: {
      return 23;
    }
    case 89: {
      return 24;
    }
    case 90: {
      return 25;
    }
    case 48: {
      return 26;
    }
    case 49: {
      return 27;
    }
    case 50: {
      return 28;
    }
    case 51: {
      return 29;
    }
    case 52: {
      return 30;
    }
    case 53: {
      return 31;
    }
    case 54: {
      return 32;
    }
    case 55: {
      return 33;
    }
    case 56: {
      return 34;
    }
    case 57: {
      return 35;
    }
    case 96: {
      return 36;
    }
    case 97: {
      return 37;
    }
    case 98: {
      return 38;
    }
    case 99: {
      return 39;
    }
    case 100: {
      return 40;
    }
    case 101: {
      return 41;
    }
    case 102: {
      return 42;
    }
    case 103: {
      return 43;
    }
    case 104: {
      return 44;
    }
    case 105: {
      return 45;
    }
    case 106: {
      return 48;
    }
    case 107: {
      return 46;
    }
    case 109: {
      return 47;
    }
    case 110: {
      return 50;
    }
    case 111: {
      return 49;
    }
    case 112: {
      return 52;
    }
    case 113: {
      return 53;
    }
    case 114: {
      return 54;
    }
    case 115: {
      return 55;
    }
    case 116: {
      return 56;
    }
    case 117: {
      return 57;
    }
    case 118: {
      return 58;
    }
    case 119: {
      return 59;
    }
    case 120: {
      return 60;
    }
    case 121: {
      return 61;
    }
    case 122: {
      return 62;
    }
    case 123: {
      return 63;
    }
    case 37: {
      return 66;
    }
    case 38: {
      return 64;
    }
    case 39: {
      return 67;
    }
    case 40: {
      return 65;
    }
    case 16: {
      return 68;
    }
    case 17: {
      return 69;
    }
    case 18: {
      return 70;
    }
    case 91: {
      return 71;
    }
    case 92: {
      return 71;
    }
    case 20: {
      return 72;
    }
    case 9: {
      return 73;
    }
    case 13: {
      return 74;
    }
    case 27: {
      return 75;
    }
    case 32: {
      return 76;
    }
    case 8: {
      return 77;
    }
    case 46: {
      return 78;
    }
    case 45: {
      return 79;
    }
    case 36: {
      return 80;
    }
    case 35: {
      return 81;
    }
    case 33: {
      return 82;
    }
    case 34: {
      return 83;
    }
    case 186: {
      return 84;
    }
    case 187: {
      return 85;
    }
    case 188: {
      return 86;
    }
    case 189: {
      return 87;
    }
    case 190: {
      return 88;
    }
    case 191: {
      return 89;
    }
    case 192: {
      return 90;
    }
    case 219: {
      return 91;
    }
    case 220: {
      return 92;
    }
    case 221: {
      return 93;
    }
    case 222: {
      return 94;
    }
    default: {
      return 95;
    }
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getKeyCode_(self) {
  const code = Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getKeyCodeInt_(self);
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$intToKeyCode(code);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKeyCode$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getKeyCode_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$keyCodeToInt(code) {
  switch (code) {
    case 0: {
      return 65;
    }
    case 1: {
      return 66;
    }
    case 2: {
      return 67;
    }
    case 3: {
      return 68;
    }
    case 4: {
      return 69;
    }
    case 5: {
      return 70;
    }
    case 6: {
      return 71;
    }
    case 7: {
      return 72;
    }
    case 8: {
      return 73;
    }
    case 9: {
      return 74;
    }
    case 10: {
      return 75;
    }
    case 11: {
      return 76;
    }
    case 12: {
      return 77;
    }
    case 13: {
      return 78;
    }
    case 14: {
      return 79;
    }
    case 15: {
      return 80;
    }
    case 16: {
      return 81;
    }
    case 17: {
      return 82;
    }
    case 18: {
      return 83;
    }
    case 19: {
      return 84;
    }
    case 20: {
      return 85;
    }
    case 21: {
      return 86;
    }
    case 22: {
      return 87;
    }
    case 23: {
      return 88;
    }
    case 24: {
      return 89;
    }
    case 25: {
      return 90;
    }
    case 26: {
      return 48;
    }
    case 27: {
      return 49;
    }
    case 28: {
      return 50;
    }
    case 29: {
      return 51;
    }
    case 30: {
      return 52;
    }
    case 31: {
      return 53;
    }
    case 32: {
      return 54;
    }
    case 33: {
      return 55;
    }
    case 34: {
      return 56;
    }
    case 35: {
      return 57;
    }
    case 36: {
      return 96;
    }
    case 37: {
      return 97;
    }
    case 38: {
      return 98;
    }
    case 39: {
      return 99;
    }
    case 40: {
      return 100;
    }
    case 41: {
      return 101;
    }
    case 42: {
      return 102;
    }
    case 43: {
      return 103;
    }
    case 44: {
      return 104;
    }
    case 45: {
      return 105;
    }
    case 48: {
      return 106;
    }
    case 46: {
      return 107;
    }
    case 47: {
      return 109;
    }
    case 50: {
      return 110;
    }
    case 49: {
      return 111;
    }
    case 52: {
      return 112;
    }
    case 53: {
      return 113;
    }
    case 54: {
      return 114;
    }
    case 55: {
      return 115;
    }
    case 56: {
      return 116;
    }
    case 57: {
      return 117;
    }
    case 58: {
      return 118;
    }
    case 59: {
      return 119;
    }
    case 60: {
      return 120;
    }
    case 61: {
      return 121;
    }
    case 62: {
      return 122;
    }
    case 63: {
      return 123;
    }
    case 66: {
      return 37;
    }
    case 64: {
      return 38;
    }
    case 67: {
      return 39;
    }
    case 65: {
      return 40;
    }
    case 68: {
      return 16;
    }
    case 69: {
      return 17;
    }
    case 70: {
      return 18;
    }
    case 71: {
      return 91;
    }
    case 72: {
      return 20;
    }
    case 73: {
      return 9;
    }
    case 74: {
      return 13;
    }
    case 51: {
      return 13;
    }
    case 75: {
      return 27;
    }
    case 76: {
      return 32;
    }
    case 77: {
      return 8;
    }
    case 78: {
      return 46;
    }
    case 79: {
      return 45;
    }
    case 80: {
      return 36;
    }
    case 81: {
      return 35;
    }
    case 82: {
      return 33;
    }
    case 83: {
      return 34;
    }
    case 84: {
      return 186;
    }
    case 85: {
      return 187;
    }
    case 86: {
      return 188;
    }
    case 87: {
      return 189;
    }
    case 88: {
      return 190;
    }
    case 89: {
      return 191;
    }
    case 90: {
      return 192;
    }
    case 91: {
      return 219;
    }
    case 92: {
      return 220;
    }
    case 93: {
      return 221;
    }
    case 94: {
      return 222;
    }
    default: {
      return -1;
    }
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsDown_(self, keyCode) {
  const code = Demonmasterlqx$MoonP5$cmd$p5js_ffi$$keyCodeToInt(keyCode);
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsDownInt_(self, code);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$25$(self, keyCode) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsDown_(self, keyCode);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsPressed$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsPressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyPressed$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyPressed_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyPressed$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyPressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyReleased$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyReleased_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyReleased$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyReleased_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyTyped$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyTyped_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyTyped$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyTyped_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseX$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseY$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedX$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMovedX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedY$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMovedY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseX$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPmouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseY$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPmouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseX$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPwinMouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseY$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPwinMouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseX$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getWinMouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseY$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getWinMouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$mouseIsPressed$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$mouseIsPressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButtonString$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseButtonString_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseButton_(self) {
  const btn = Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseButtonString_(self);
  switch (btn) {
    case "LEFT": {
      return 0;
    }
    case "left": {
      return 0;
    }
    case "RIGHT": {
      return 1;
    }
    case "right": {
      return 1;
    }
    case "CENTER": {
      return 2;
    }
    case "center": {
      return 2;
    }
    default: {
      return 3;
    }
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButton$25$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseButton_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setDoubleClicked$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setDoubleClicked_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelDoubleClicked$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelDoubleClicked_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseClicked$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseClicked_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseClicked$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseClicked_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseDragged$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseDragged_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseDragged$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseDragged_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseMoved$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseMoved_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseMoved$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseMoved_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMousePressed$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMousePressed_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMousePressed$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMousePressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseReleased$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseReleased_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseReleased$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseReleased_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseWheel$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseWheel_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseWheel$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseWheel_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$requestPointerLock$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$requestPointerLock_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$exitPointerLock$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$exitPointerLock_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipseMode$25$(self, mode) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$ellipseMode_(self, mode);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rectMode$25$(self, mode) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$rectMode_(self, mode);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noSmooth$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noSmooth_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$smooth$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$smooth_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeCap$25$(self, cap) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeCap_(self, cap);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeJoin$25$(self, join) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeJoin_(self, join);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeWeight$25$(self, weight) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeWeight_(self, weight);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$arc$25$(self, x, y, w, h, start, stop, mode, detail) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$arc_(self, x, y, w, h, start, stop, new Option$Some$0$(mode), new Option$Some$1$(detail));
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$circle$25$(self, x, y, d) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$circle_(self, x, y, d);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipse$25$(self, x, y, w, h) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$ellipse_(self, x, y, w, h);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$line$25$(self, x1, y1, x2, y2) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$line_(self, x1, y1, x2, y2);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$point$25$(self, x, y) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$point_(self, x, y);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quad$25$(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$quad_(self, x1, y1, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$25$(self, x, y, w, h) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$rect_(self, x, y, w, h);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$triangle$25$(self, x1, y1, x2, y2, x3, y3) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$triangle_(self, x1, y1, x2, y2, x3, y3);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$square$25$(self, x, y, s) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$square_(self, x, y, s);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezier$25$(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezier_(self, x1, y1, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierPoint$25$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierPoint_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierTangent$25$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierTangent_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curve$25$(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curve_(self, x1, y1, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curvePoint$25$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curvePoint_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTangent$25$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveTangent_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTightness$25$(self, amount) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveTightness_(self, amount);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginContour$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginContour_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endContour$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endContour_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginShape$25$(self, mode) {
  if (mode === undefined) {
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginShape_(self, undefined);
    return;
  } else {
    const _Some = mode;
    const _m = _Some;
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginShape_(self, _m);
    return;
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endShape$25$(self, mode, count) {
  if (mode === undefined) {
    if (count === undefined) {
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endShape_(self, undefined, undefined);
      return;
    } else {
      const _Some = count;
      const _c = _Some;
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endShape_(self, undefined, _c);
      return;
    }
  } else {
    const _Some = mode;
    const _m = _Some;
    if (count === undefined) {
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endShape_(self, _m, undefined);
      return;
    } else {
      const _Some$2 = count;
      const _c = _Some$2;
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endShape_(self, _m, _c);
      return;
    }
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierVertex$25$(self, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierVertex_(self, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveVertex$25$(self, x, y) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveVertex_(self, x, y);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$vertex$25$(self, x, y, z, u, v) {
  _L: {
    if (z.$tag === 1) {
      const _Some = z;
      const _zv = _Some._0;
      if (u.$tag === 1) {
        const _Some$2 = u;
        const _uv = _Some$2._0;
        if (v.$tag === 1) {
          const _Some$3 = v;
          const _vv = _Some$3._0;
          Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$vertex_$46$inner(self, x, y, _zv, _uv, _vv);
          return;
        } else {
          Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$vertex_$46$inner(self, x, y, _zv, _uv, 0);
          return;
        }
      } else {
        if (v.$tag === 0) {
          Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$vertex_$46$inner(self, x, y, _zv, 0, 0);
          return;
        } else {
          break _L;
        }
      }
    } else {
      if (u.$tag === 0) {
        if (v.$tag === 0) {
          Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$vertex_$46$inner(self, x, y, 0, 0, 0);
          return;
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
  }
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$vertex_$46$inner(self, x, y, 0, 0, 0);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$normal$25$(self, nx, ny, nz) {
  if (nz.$tag === 1) {
    const _Some = nz;
    const _nzv = _Some._0;
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$normal_$46$inner(self, nx, ny, _nzv);
    return;
  } else {
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$normal_$46$inner(self, nx, ny, 0);
    return;
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quadraticVertex$25$(self, x2, y2, x3, y3) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$quadraticVertex_(self, x2, y2, x3, y3);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noStroke$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noStroke_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$background$25$(self, v1, v2, v3, a) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$background_$46$inner(self, v1, v2, v3, a);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$25$(self, v1, v2, v3, a) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$fill_colorPara_$46$inner(self, v1, v2, v3, a);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorObj$25$(self, c) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$fill_colorObj_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginClip$25$(self, x, y, w, h) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginClip_(self, x, y, w, h);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endClip$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endClip_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clear$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clear_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clip$25$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clip_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clipOptions$25$(self, callback, options) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clip_options_(self, callback, options);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeUniform$25$(self, mode, max) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$colorMode_uniform_(self, mode, max);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeDetailed$25$(self, mode, max1, max2, max3, maxA) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$colorMode_detailed_$46$inner(self, mode, max1, max2, max3, maxA);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$erase$25$(self, strengthFill, strengthStroke) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$erase_$46$inner(self, strengthFill, strengthStroke);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noErase$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noErase_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeColor$25$(self, c) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_color_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeGray$25$(self, gray, alpha) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_gray_$46$inner(self, gray, alpha);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeComponents$25$(self, v1, v2, v3, alpha) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_components_$46$inner(self, v1, v2, v3, alpha);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeString$25$(self, color_string) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_string_(self, color_string);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noFill$25$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noFill_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$brightness$25$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$brightness_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$color$25$(self, v1, v2, v3, a) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$color_$46$inner(self, v1, v2, v3, a);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$alpha$25$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$alpha_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$blue$25$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$blue_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$green$25$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$green_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$red$25$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$red_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$hue$25$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$hue_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lerpColor$25$(self, c1, c2, amount) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$lerpColor_(self, c1, c2, amount);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lightness$25$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$lightness_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$paletteLerp$25$(self, colors_stops, amt) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$paletteLerp_(self, colors_stops, amt);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_world$46$inner(gravity) {
  const worldAABB = Demonmasterlqx$box2d_ffi$box2d$$b2AABB();
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setminVertex(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-10000, -10000));
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setmaxVertex(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(10000, 10000));
  return { world: Demonmasterlqx$box2d_ffi$box2d$$b2World(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(gravity._0, gravity._1), true) };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_world(gravity$46$opt) {
  let gravity;
  if (gravity$46$opt === undefined) {
    gravity = { _0: 0, _1: -9.8 };
  } else {
    const _Some = gravity$46$opt;
    gravity = _Some;
  }
  return Great$45$Love$45$League$Stick_Man_Battle$server$$create_world$46$inner(gravity);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_static_box(world, position, size) {
  const box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$14$(box_def, 0);
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$13$(box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(body_def, 0);
  return Demonmasterlqx$box2d_ffi$box2d$$World$createBody$12$(world, body_def);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, position, size, density, friciton, groupindex) {
  const box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$14$(box_def, density);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$14$(box_def, friciton);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$14$(box_def, groupindex);
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$13$(box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(body_def, 0);
  return Demonmasterlqx$box2d_ffi$box2d$$World$createBody$12$(world, body_def);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, body_a, body_b, anchor, enable_limit, lower_angle, upper_angle) {
  const joint_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$20$(joint_def, body_a);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$20$(joint_def, body_b);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(joint_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(anchor._0, anchor._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(joint_def, enable_limit);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(joint_def, lower_angle);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(joint_def, upper_angle);
  return Demonmasterlqx$box2d_ffi$box2d$$World$createJoint$12$(world, Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$21$(joint_def));
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle(world, position) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$particle_index.val = Great$45$Love$45$League$Stick_Man_Battle$server$$particle_index.val + 1 | 0;
  const torso = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, position, { _0: 0.25, _1: 1 }, 1, 0.2, -1);
  const head = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 + 1.5 }, { _0: 0.2, _1: 0.25 }, 1, 0.2, -1);
  const left_thigh = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 - 1 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const right_thigh = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 - 1 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const left_shank = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 - 2 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const right_shank = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 - 2 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const neck_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, torso, head, { _0: position._0, _1: position._1 + 1 }, true, 0, 0);
  const thigh_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, torso, left_thigh, { _0: position._0, _1: position._1 - 0.5 }, true, -1, 1);
  const thigh_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, torso, right_thigh, { _0: position._0, _1: position._1 - 0.5 }, true, -1, 1);
  const knee_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, left_thigh, left_shank, { _0: position._0, _1: position._1 - 1.5 }, true, -1.3, 1.3);
  const knee_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, right_thigh, right_shank, { _0: position._0, _1: position._1 - 1.5 }, true, -1.3, 1.3);
  const left_arm = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 + 0.5 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const right_arm = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 + 0.5 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const left_forearm = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 - 0.25 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const right_forearm = Great$45$Love$45$League$Stick_Man_Battle$server$$create_dynamic_box$46$inner(world, { _0: position._0, _1: position._1 - 0.25 }, { _0: 0.15, _1: 0.5 }, 1, 0.2, -1);
  const arm_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, torso, left_arm, { _0: position._0, _1: position._1 + 1 }, true, -1, 1);
  const arm_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, torso, right_arm, { _0: position._0, _1: position._1 + 1 }, true, -1, 1);
  const forearm_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, left_arm, left_forearm, { _0: position._0, _1: position._1 }, true, -1.3, 1.3);
  const forearm_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$create_joint$46$inner(world, right_arm, right_forearm, { _0: position._0, _1: position._1 }, true, -1.3, 1.3);
  const index = Great$45$Love$45$League$Stick_Man_Battle$server$$particle_index.val - 1 | 0;
  const tmp = { torso: torso, head: head, left_thigh: left_thigh, right_thigh: right_thigh, left_shank: left_shank, right_shank: right_shank, thigh_left_joint: thigh_left_joint, thigh_right_joint: thigh_right_joint, knee_left_joint: knee_left_joint, knee_right_joint: knee_right_joint, neck_joint: neck_joint, index: index, left_forearm: left_forearm, right_forearm: right_forearm, left_arm: left_arm, right_arm: right_arm, arm_left_joint: arm_left_joint, arm_right_joint: arm_right_joint, forearm_left_joint: forearm_left_joint, forearm_right_joint: forearm_right_joint, walk_state: false, cooldown: 0 };
  moonbitlang$core$array$$Array$push$4$(Great$45$Love$45$League$Stick_Man_Battle$server$$particle_list.val, tmp);
  return tmp;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform(world, position, size) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$platform_index.val = Great$45$Love$45$League$Stick_Man_Battle$server$$platform_index.val + 1 | 0;
  const body = Great$45$Love$45$League$Stick_Man_Battle$server$$create_static_box(world, position, size);
  const index = Great$45$Love$45$League$Stick_Man_Battle$server$$platform_index.val - 1 | 0;
  const tmp = { body: body, index: index };
  moonbitlang$core$array$$Array$push$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list.val, tmp);
  return tmp;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(joint, target_angle, kp, kd) {
  const bodyA = Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody1$22$(Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint(joint));
  const bodyB = Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody2$22$(Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint(joint));
  const angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(bodyB) - Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(bodyA);
  let error = target_angle - angle;
  error = moonbitlang$core$builtin$$Mod$mod$8$(error + 3.1415926535897931, 6.2831853071795862) - 3.1415926535897931;
  const torque = kp * error - kd * (Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(bodyB) - Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(bodyA));
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque(bodyB, torque);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_position$46$inner(body, target_pos, kp, kd) {
  const pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(body);
  const vel = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getLinearVelocity(body);
  const error_x = target_pos._0 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(pos);
  const error_y = target_pos._1 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(pos);
  const force_x = kp * error_x - kd * Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(vel);
  const force_y = kp * error_y - kd * Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(vel);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(body, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(force_x, force_y), pos);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(body, target_angle, kp, kd) {
  const angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(body);
  let error = target_angle - angle;
  error = moonbitlang$core$builtin$$Mod$mod$8$(error + 3.1415926535897931, 6.2831853071795862) - 3.1415926535897931;
  const torque = kp * error - kd * Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(body);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque(body, torque);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$which_platform(particle) {
  const contact_list = Demonmasterlqx$box2d_ffi$box2d$$World$getContactList$12$(Great$45$Love$45$League$Stick_Man_Battle$server$$world.val);
  const _len = contact_list.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const contact = contact_list[_i];
      const bodyA = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$17$(Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape1(contact));
      const bodyB = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$17$(Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape2(contact));
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.left_shank) || Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyB, particle.left_shank)) {
        const other_body = Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.left_shank) ? bodyB : bodyA;
        const _arr = Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list.val;
        const _len$2 = _arr.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const i = _arr[_i$2];
            if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, i.body)) {
              return i.index;
            }
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.right_shank) || Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyB, particle.right_shank)) {
        const other_body = Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.right_shank) ? bodyB : bodyA;
        const _arr = Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list.val;
        const _len$2 = _arr.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const i = _arr[_i$2];
            if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, i.body)) {
              return i.index;
            }
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.left_thigh) || Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyB, particle.left_thigh)) {
        const other_body = Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.left_thigh) ? bodyB : bodyA;
        const _arr = Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list.val;
        const _len$2 = _arr.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const i = _arr[_i$2];
            if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, i.body)) {
              return i.index;
            }
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.right_thigh) || Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyB, particle.right_thigh)) {
        const other_body = Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, particle.right_thigh) ? bodyB : bodyA;
        const _arr = Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list.val;
        const _len$2 = _arr.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const i = _arr[_i$2];
            if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, i.body)) {
              return i.index;
            }
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$walk(particle, direction) {
  const index = Great$45$Love$45$League$Stick_Man_Battle$server$$which_platform(particle);
  let left_target = 0;
  let right_target = 0;
  let left_arm_target = 0;
  let right_arm_target = 0;
  if (particle.walk_state) {
    left_target = -0.5;
    right_target = 0.8;
    left_arm_target = -0.5;
    right_arm_target = 0.5;
  } else {
    left_target = 0.8;
    right_target = -0.5;
    left_arm_target = 0.5;
    right_arm_target = -0.5;
  }
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_left_joint, left_target, 50, 1);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_right_joint, right_target, 50, 1);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_left_joint, -1.0995574287564276 * direction, 30, 1);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_right_joint, -1.0995574287564276 * direction, 30, 1);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_left_joint, left_arm_target, 30, 1);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_right_joint, right_arm_target, 30, 1);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_left_joint, 1.0995574287564276 * direction, 30, 1);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_right_joint, 1.0995574287564276 * direction, 30, 1);
  if (particle.cooldown <= 0) {
    particle.walk_state = !particle.walk_state;
    particle.cooldown = 20;
  } else {
    particle.cooldown = particle.cooldown - 1 | 0;
  }
  if (index === -1) {
    return undefined;
  }
  const platform = moonbitlang$core$array$$Array$at$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list.val, index);
  const p_angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(platform.body);
  const target_y = (Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso)) - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(platform.body))) * Kaida$45$Amethyst$math$$tan(p_angle) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(platform.body));
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_position$46$inner(particle.torso, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso)), _1: target_y + 3.4 }, 300, 10);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, p_angle * 0.7, 300, 10);
  const v = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(50 * direction * Kaida$45$Amethyst$math$$cos(p_angle), 100 * direction * Kaida$45$Amethyst$math$$sin(p_angle));
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(particle.torso, v, Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso));
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$stand(particle) {
  const index = Great$45$Love$45$League$Stick_Man_Battle$server$$which_platform(particle);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_left_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_right_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_left_joint, 0, 10, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_right_joint, 0, 10, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_left_joint, 0, 10, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_right_joint, 0, 10, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_left_joint, 0, 30, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_right_joint, 0, 30, 2);
  if (index === -1) {
    moonbitlang$core$builtin$$println$11$("Can't find platform");
    return undefined;
  }
  moonbitlang$core$builtin$$println$2$(index);
  const platform = moonbitlang$core$array$$Array$at$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$platform_list.val, index);
  const p_angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(platform.body);
  const target_y = (Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso)) - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(platform.body))) * Kaida$45$Amethyst$math$$tan(p_angle) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(platform.body));
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_position$46$inner(particle.torso, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso)), _1: target_y + 3.7 }, 300, 10);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$world_to_screen(world_width, world_height, x, y, ppm) {
  return { _0: world_width / 2 + x * ppm, _1: world_height - y * ppm };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$drawPolygon(p, shape) {
  const vertices = Demonmasterlqx$box2d_ffi$box2d$$B2PolygonShape$getVertices(shape);
  const global_position = moonbitlang$core$array$$Array$new$46$inner$10$(0);
  const _len = vertices.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const vertex = vertices[_i];
      const gvec = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldPoint(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$18$(shape), vertex);
      moonbitlang$core$array$$Array$push$10$(global_position, gvec);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const screen_position = moonbitlang$core$array$$Array$new$46$inner$9$(0);
  const _len$2 = global_position.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const gvec = global_position[_i];
      const screen_coords = Great$45$Love$45$League$Stick_Man_Battle$server$$world_to_screen(1000, 1000, Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(gvec), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(gvec), 20);
      moonbitlang$core$array$$Array$push$9$(screen_position, screen_coords);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  p.method_72(p.self, undefined);
  const _end41 = screen_position.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _end41) {
      const _bind = moonbitlang$core$array$$Array$at$9$(screen_position, i);
      const _x = _bind._0;
      const _y = _bind._1;
      p.method_76(p.self, _x, _y, Option$None$2$, Option$None$2$, Option$None$2$);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  p.method_73(p.self, "close", undefined);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$drawCircle(p, shape) {
  const position = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldPoint(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$19$(shape), Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getLocalPosition(shape));
  const radius = Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getRadius(shape);
  const screen_pos = Great$45$Love$45$League$Stick_Man_Battle$server$$world_to_screen(1000, 1000, Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(position), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(position), 20);
  const _p = 20;
  const screen_radius = radius * _p;
  p.method_81(p.self, 200, new Option$Some$2$(0), new Option$Some$2$(0), Option$None$2$);
  p.method_55(p.self, screen_pos._0, screen_pos._1, screen_radius * 2);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world(p, world) {
  p.method_80(p.self, 255, new Option$Some$2$(204), new Option$Some$2$(0), Option$None$2$);
  const _arr = Demonmasterlqx$box2d_ffi$box2d$$World$getBodyList$12$(world);
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const body = _arr[_i];
      const _arr$2 = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getShapeList(body);
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const shape = _arr$2[_i$2];
          const _bind = Demonmasterlqx$box2d_ffi$box2d$$Shape$getType$17$(shape);
          switch (_bind) {
            case 2: {
              Great$45$Love$45$League$Stick_Man_Battle$server$$drawPolygon(p, Demonmasterlqx$box2d_ffi$box2d$$B2Shape$toPolygonShape(shape));
              break;
            }
            case 3: {
              Great$45$Love$45$League$Stick_Man_Battle$server$$drawPolygon(p, Demonmasterlqx$box2d_ffi$box2d$$B2Shape$toPolygonShape(shape));
              break;
            }
            case 1: {
              Great$45$Love$45$League$Stick_Man_Battle$server$$drawCircle(p, Demonmasterlqx$box2d_ffi$box2d$$B2Shape$toCircleShape(shape));
              break;
            }
            default: {
              moonbitlang$core$builtin$$println$11$("Unknown Shape");
            }
          }
          _tmp$2 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$box2d_init(world) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform(world, { _0: 0, _1: 0 }, { _0: 10, _1: 1 });
  Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle(world, { _0: 0, _1: 10 });
  const static_box = Great$45$Love$45$League$Stick_Man_Battle$server$$create_static_box(world, { _0: 1, _1: 10 }, { _0: 1, _1: 0.1 });
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$setAngularVelocity(static_box, 0.5);
}
(() => {
  Great$45$Love$45$League$Stick_Man_Battle$server$$box2d_init(Great$45$Love$45$League$Stick_Man_Battle$server$$world.val);
  Great$45$Love$45$League$Stick_Man_Battle$server$$getP5Instance$46$inner((p) => {
    const _arr = Great$45$Love$45$League$Stick_Man_Battle$server$$particle_list.val;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const particle = _arr[_i];
        if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$25$(p, 0)) {
          Great$45$Love$45$League$Stick_Man_Battle$server$$walk(particle, -1);
        } else {
          if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$25$(p, 3)) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$walk(particle, 1);
          } else {
            Great$45$Love$45$League$Stick_Man_Battle$server$$stand(particle);
          }
        }
        Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, 0, 30, 10);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    Demonmasterlqx$box2d_ffi$box2d$$World$step$12$(Great$45$Love$45$League$Stick_Man_Battle$server$$world.val, 0.016666666666666666, 4);
    Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world({ self: p, method_0: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getP5Instance$24$, method_1: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getTouches$25$, method_2: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchEnded$25$, method_3: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchEnded$25$, method_4: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchMoved$25$, method_5: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchMoved$25$, method_6: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchStarted$25$, method_7: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchStarted$25$, method_8: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKey$25$, method_9: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKeyCode$25$, method_10: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$25$, method_11: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsPressed$25$, method_12: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyPressed$25$, method_13: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyPressed$25$, method_14: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyReleased$25$, method_15: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyReleased$25$, method_16: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyTyped$25$, method_17: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyTyped$25$, method_18: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseX$25$, method_19: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseY$25$, method_20: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedX$25$, method_21: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedY$25$, method_22: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseX$25$, method_23: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseY$25$, method_24: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseX$25$, method_25: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseY$25$, method_26: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseX$25$, method_27: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseY$25$, method_28: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$mouseIsPressed$25$, method_29: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButtonString$25$, method_30: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButton$25$, method_31: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setDoubleClicked$25$, method_32: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelDoubleClicked$25$, method_33: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseClicked$25$, method_34: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseClicked$25$, method_35: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseDragged$25$, method_36: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseDragged$25$, method_37: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseMoved$25$, method_38: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseMoved$25$, method_39: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMousePressed$25$, method_40: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMousePressed$25$, method_41: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseReleased$25$, method_42: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseReleased$25$, method_43: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseWheel$25$, method_44: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseWheel$25$, method_45: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$requestPointerLock$25$, method_46: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$exitPointerLock$25$, method_47: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipseMode$25$, method_48: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rectMode$25$, method_49: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noSmooth$25$, method_50: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$smooth$25$, method_51: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeCap$25$, method_52: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeJoin$25$, method_53: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeWeight$25$, method_54: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$arc$25$, method_55: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$circle$25$, method_56: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipse$25$, method_57: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$line$25$, method_58: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$point$25$, method_59: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quad$25$, method_60: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$25$, method_61: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$triangle$25$, method_62: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$square$25$, method_63: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezier$25$, method_64: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierPoint$25$, method_65: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierTangent$25$, method_66: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curve$25$, method_67: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curvePoint$25$, method_68: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTangent$25$, method_69: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTightness$25$, method_70: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginContour$25$, method_71: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endContour$25$, method_72: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginShape$25$, method_73: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endShape$25$, method_74: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierVertex$25$, method_75: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveVertex$25$, method_76: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$vertex$25$, method_77: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$normal$25$, method_78: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quadraticVertex$25$, method_79: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noStroke$25$, method_80: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$background$25$, method_81: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$25$, method_82: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorObj$25$, method_83: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginClip$25$, method_84: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endClip$25$, method_85: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clear$25$, method_86: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clip$25$, method_87: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clipOptions$25$, method_88: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeUniform$25$, method_89: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeDetailed$25$, method_90: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$erase$25$, method_91: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noErase$25$, method_92: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeColor$25$, method_93: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeGray$25$, method_94: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeComponents$25$, method_95: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeString$25$, method_96: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noFill$25$, method_97: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$brightness$25$, method_98: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$color$25$, method_99: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$alpha$25$, method_100: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$blue$25$, method_101: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$green$25$, method_102: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$red$25$, method_103: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$hue$25$, method_104: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lerpColor$25$, method_105: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lightness$25$, method_106: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$paletteLerp$25$ }, Great$45$Love$45$League$Stick_Man_Battle$server$$world.val);
  }, 1000, 1000);
})();
