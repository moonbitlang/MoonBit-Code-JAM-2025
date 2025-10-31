const $1L = { hi: 0, lo: 1 };
const $0L = { hi: 0, lo: 0 };
const $1000000000000000000L = { hi: 232830643, lo: -1486618624 };
const $10L = { hi: 0, lo: 10 };
const $100L = { hi: 0, lo: 100 };
const $1000L = { hi: 0, lo: 1000 };
const $10000L = { hi: 0, lo: 10000 };
const $100000L = { hi: 0, lo: 100000 };
const $1000000L = { hi: 0, lo: 1000000 };
const $10000000L = { hi: 0, lo: 10000000 };
const $100000000L = { hi: 0, lo: 100000000 };
const $1000000000L = { hi: 0, lo: 1000000000 };
const $10000000000L = { hi: 2, lo: 1410065408 };
const $100000000000L = { hi: 23, lo: 1215752192 };
const $1000000000000L = { hi: 232, lo: -727379968 };
const $10000000000000L = { hi: 2328, lo: 1316134912 };
const $100000000000000L = { hi: 23283, lo: 276447232 };
const $1000000000000000L = { hi: 232830, lo: -1530494976 };
const $22L = { hi: 0, lo: 22 };
const $37L = { hi: 0, lo: 37 };
const $_22L = { hi: -1, lo: -22 };
const $_1L = { hi: -1, lo: -1 };
const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
function Option$Some$1$(param0) {
  this._0 = param0;
}
Option$Some$1$.prototype.$tag = 1;
const $_4503599627370496L = { hi: -1048576, lo: 0 };
const $9221120237041090561L = { hi: 2146959360, lo: 1 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
const $2L = { hi: 0, lo: 2 };
const $_4503599627370497L = { hi: -1048577, lo: -1 };
const $9218868437227405311L = { hi: 2146435071, lo: -1 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const $64$moonbitlang$47$core$47$builtin$46$Json$Null = { $tag: 0 };
const $64$moonbitlang$47$core$47$builtin$46$Json$True = { $tag: 1 };
const $64$moonbitlang$47$core$47$builtin$46$Json$False = { $tag: 2 };
function $64$moonbitlang$47$core$47$builtin$46$Json$Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Number.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$Json$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$String.prototype.$tag = 4;
function $64$moonbitlang$47$core$47$builtin$46$Json$Array(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Array.prototype.$tag = 5;
function $64$moonbitlang$47$core$47$builtin$46$Json$Object(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Object.prototype.$tag = 6;
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const moonbitlang$core$builtin$$random_seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
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
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const moonbitlang$core$builtin$$MyInt64$convert_to_double_u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const moonbitlang$core$builtin$$MyInt64$reinterpret_as_double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setUint32(0, a.hi);
  view.setUint32(4, a.lo);
  return view.getFloat64(0);
};
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {
  if (f._exports) return f._exports;
  return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
};
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
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
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$double$$Double$mod_ffi = (a, b) => (a % b);
const Option$None$5$ = { $tag: 0 };
function Option$Some$5$(param0) {
  this._0 = param0;
}
Option$Some$5$.prototype.$tag = 1;
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
function Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$GameStateError$46$GameStateError(param0) {
  this._0 = param0;
}
Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$GameStateError$46$GameStateError.prototype.$tag = 5;
function Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$ParticleControlConfigError$46$ParticleControlConfigError(param0) {
  this._0 = param0;
}
Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$ParticleControlConfigError$46$ParticleControlConfigError.prototype.$tag = 4;
function Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError(param0) {
  this._0 = param0;
}
Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError.prototype.$tag = 3;
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 2;
function Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError.prototype.$tag = 1;
function Error$moonbitlang$47$x$47$json5$46$ParseError$46$ParseError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$x$47$json5$46$ParseError$46$ParseError.prototype.$tag = 0;
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
function Result$Err$10$(param0) {
  this._0 = param0;
}
Result$Err$10$.prototype.$tag = 0;
function Result$Ok$10$(param0) {
  this._0 = param0;
}
Result$Ok$10$.prototype.$tag = 1;
const $65536L = { hi: 0, lo: 65536 };
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$setListener_ = (self, listener) => { self.SetListener(listener); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$setFilter_ = (self, filter) => { self.SetContactFilter(filter); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$createBody_ = (self, def) => self.CreateBody(def);
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$destroyBody_ = (self, body) => { self.DestroyBody(body); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$clearBodyList_ = self => self.ClearBodyList();
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$createJoint_ = (self, def) => self.CreateJoint(def);
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$destroyJoint_ = (self, joint) => { self.DestroyJoint(joint); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$getGroundBody_ = self => self.GetGroundBody();
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$step_ = (self, dt, iterations) => { self.Step(dt, iterations); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$query_ = (self, aabb, shapes, maxCount) => { self.Query(aabb, shapes, maxCount); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$getBodyList_ = self => {
   let bodies = [];
   let body = self.GetBodyList();
   while (body != null) {
     bodies.push(body);
     body = body.m_next;
   }
   return bodies;
 };
const Demonmasterlqx$box2d_ffi$box2d$$B2World_$getJointList_ = self => {
   let joints = [];
   let joint = self.GetJointList();
   while (joint != null) {
     joints.push(joint);
     joint = joint.next;
   }
   return joints;
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
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$length = self => self.Length();
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$setX = (self, x) => { self.x = x; };
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$setY = (self, y) => { self.y = y; };
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX = self => self.x;
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY = self => self.y;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$computeMass_ = (self, massData) => { self.ComputeMass(massData); };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalPosition_ = (self, localPosition) => { self.localPosition = localPosition; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalPosition_ = self => self.localPosition;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalRotation_ = (self, localRotation) => { self.localRotation = localRotation; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalRotation_ = self => self.localRotation;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_ = (self, friction) => { self.friction = friction; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getFriction_ = self => self.friction;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setRestitution_ = (self, restitution) => { self.restitution = restitution; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getRestitution_ = self => self.restitution;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_ = (self, density) => { self.density = density; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getDensity_ = self => self.density;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setCategoryBits_ = (self, categoryBits) => { self.categoryBits = categoryBits; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getCategoryBits_ = self => self.categoryBits;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setMaskBits_ = (self, maskBits) => { self.maskBits = maskBits; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getMaskBits_ = self => self.maskBits;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_ = (self, groupIndex) => { self.groupIndex = groupIndex; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getGroupIndex_ = self => self.groupIndex;
const Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2CircleDef$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2PolygonDef$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getType_ = self => self.GetType();;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_ = self => self.GetBody();;
const Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2PolygonShape$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$toPolygonShape = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$toCircleShape = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody1_ = (self, body) => { self.body1 = body; };
const Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody2_ = (self, body) => { self.body2 = body; };
const Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setCollideConnected_ = (self, flag) => { self.collideConnected = flag; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef = () => new b2RevoluteJointDef();
const Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody1_ = self => self.GetBody1();
const Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody2_ = self => self.GetBody2();
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJoint$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint = self => self instanceof b2RevoluteJoint ? self : null;
const Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef = () => new b2BoxDef();
const Demonmasterlqx$box2d_ffi$box2d$$b2CircleDef = () => new b2CircleDef();
const Demonmasterlqx$box2d_ffi$box2d$$b2PolyDef = () => new b2PolyDef();
const Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents = (self, extents) => { self.extents = extents; };
const Demonmasterlqx$box2d_ffi$box2d$$B2CircleDef$setRadius = (self, radius) => { self.radius = radius; };
const Demonmasterlqx$box2d_ffi$box2d$$B2PolygonDef$setVertices = (self, vertices) => { 
  self.vertexCount = vertices.length;
  for (let i = 0; i < min(b2Settings.b2_maxProxies, self.vertexCount); i++) {
    self.vertices[i].Set(vertices[i].x, vertices[i].y);
  }
  self.vertexCount = min(b2Settings.b2_maxProxies, self.vertexCount);
 };
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
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setMotorSpeed = (self, speed) => { self.motorSpeed = speed; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit = (self, enable) => { self.enableLimit = enable; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableMotor = (self, enable) => { self.enableMotor = enable; };
const Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape1 = self => self.GetShape1();
const Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape2 = self => self.GetShape2();
const Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef = () => new b2BodyDef();
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition = (self, position) => { self.position = position };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation = (self, rotation) => { self.rotation = rotation };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setLinearVelocity = (self, velocity) => { self.linearVelocity = velocity };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAngularVelocity = (self, velocity) => { self.angularVelocity = velocity };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setLinearDamping = (self, damping) => { self.linearDamping = damping };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAngularDamping = (self, damping) => { self.angularDamping = damping };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep = (self, allow) => { self.allowSleep = allow };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setIsSleeping = (self, sleeping) => { self.isSleeping = sleeping };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPreventRotation = (self, prevent) => { self.preventRotation = prevent };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape = (self, shape) => { self.AddShape(shape) };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition = self => self.GetCenterPosition();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation = self => self.GetRotation();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getLinearVelocity = self => self.GetLinearVelocity();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$setLinearVelocity = (self, velocity) => { self.SetLinearVelocity(velocity); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity = self => self.GetAngularVelocity();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce = (self, force, point) => { self.ApplyForce(force, point); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque = (self, torque) => { self.ApplyTorque(torque); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyImpulse = (self, impulse, point) => { self.ApplyImpulse(impulse, point); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getMass = self => self.GetMass();
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
function Result$Err$11$(param0) {
  this._0 = param0;
}
Result$Err$11$.prototype.$tag = 0;
function Result$Ok$11$(param0) {
  this._0 = param0;
}
Result$Ok$11$.prototype.$tag = 1;
function Result$Err$12$(param0) {
  this._0 = param0;
}
Result$Err$12$.prototype.$tag = 0;
function Result$Ok$12$(param0) {
  this._0 = param0;
}
Result$Ok$12$.prototype.$tag = 1;
function Result$Err$13$(param0) {
  this._0 = param0;
}
Result$Err$13$.prototype.$tag = 0;
function Result$Ok$13$(param0) {
  this._0 = param0;
}
Result$Ok$13$.prototype.$tag = 1;
function Result$Err$14$(param0) {
  this._0 = param0;
}
Result$Err$14$.prototype.$tag = 0;
function Result$Ok$14$(param0) {
  this._0 = param0;
}
Result$Ok$14$.prototype.$tag = 1;
function $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidChar.prototype.$tag = 0;
const $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof = { $tag: 1 };
function $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidNumber.prototype.$tag = 2;
function $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidIdentEscape(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidIdentEscape.prototype.$tag = 3;
function Result$Err$15$(param0) {
  this._0 = param0;
}
Result$Err$15$.prototype.$tag = 0;
function Result$Ok$15$(param0) {
  this._0 = param0;
}
Result$Ok$15$.prototype.$tag = 1;
function Result$Err$16$(param0) {
  this._0 = param0;
}
Result$Err$16$.prototype.$tag = 0;
function Result$Ok$16$(param0) {
  this._0 = param0;
}
Result$Ok$16$.prototype.$tag = 1;
const $64$moonbitlang$47$x$47$json5$46$Token$Null = { $tag: 0 };
const $64$moonbitlang$47$x$47$json5$46$Token$True = { $tag: 1 };
const $64$moonbitlang$47$x$47$json5$46$Token$False = { $tag: 2 };
function $64$moonbitlang$47$x$47$json5$46$Token$Number(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$x$47$json5$46$Token$Number.prototype.$tag = 3;
function $64$moonbitlang$47$x$47$json5$46$Token$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$x$47$json5$46$Token$String.prototype.$tag = 4;
const $64$moonbitlang$47$x$47$json5$46$Token$LBrace = { $tag: 5 };
const $64$moonbitlang$47$x$47$json5$46$Token$RBrace = { $tag: 6 };
const $64$moonbitlang$47$x$47$json5$46$Token$LBracket = { $tag: 7 };
const $64$moonbitlang$47$x$47$json5$46$Token$RBracket = { $tag: 8 };
const $64$moonbitlang$47$x$47$json5$46$Token$Comma = { $tag: 9 };
const $64$moonbitlang$47$x$47$json5$46$Token$Colon = { $tag: 10 };
const moonbitlang$x$fs$$read_file_ffi = function(path) {
   var fs = require('fs');
   try {
     const content = fs.readFileSync(path);
     globalThis.fileContent = content;
     return 0;
   } catch (error) {
     globalThis.errorMessage = error.message;
     return -1;
   }
 };
const moonbitlang$x$fs$$get_file_content_ffi = function() {
   return globalThis.fileContent;
 };
const moonbitlang$x$fs$$get_error_message_ffi = function() {
   return globalThis.errorMessage || '';
 };
function Result$Err$17$(param0) {
  this._0 = param0;
}
Result$Err$17$.prototype.$tag = 0;
function Result$Ok$17$(param0) {
  this._0 = param0;
}
Result$Ok$17$.prototype.$tag = 1;
function Result$Err$18$(param0) {
  this._0 = param0;
}
Result$Err$18$.prototype.$tag = 0;
function Result$Ok$18$(param0) {
  this._0 = param0;
}
Result$Ok$18$.prototype.$tag = 1;
function Result$Err$19$(param0) {
  this._0 = param0;
}
Result$Err$19$.prototype.$tag = 0;
function Result$Ok$19$(param0) {
  this._0 = param0;
}
Result$Ok$19$.prototype.$tag = 1;
function Result$Err$20$(param0) {
  this._0 = param0;
}
Result$Err$20$.prototype.$tag = 0;
function Result$Ok$20$(param0) {
  this._0 = param0;
}
Result$Ok$20$.prototype.$tag = 1;
function Result$Err$21$(param0) {
  this._0 = param0;
}
Result$Err$21$.prototype.$tag = 0;
function Result$Ok$21$(param0) {
  this._0 = param0;
}
Result$Ok$21$.prototype.$tag = 1;
function $64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Box(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Box.prototype.$tag = 0;
function $64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Circle(param0) {
  this._0 = param0;
}
$64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Circle.prototype.$tag = 1;
function $64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Polygon(param0) {
  this._0 = param0;
}
$64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Polygon.prototype.$tag = 2;
function Result$Err$22$(param0) {
  this._0 = param0;
}
Result$Err$22$.prototype.$tag = 0;
function Result$Ok$22$(param0) {
  this._0 = param0;
}
Result$Ok$22$.prototype.$tag = 1;
function Result$Err$23$(param0) {
  this._0 = param0;
}
Result$Err$23$.prototype.$tag = 0;
function Result$Ok$23$(param0) {
  this._0 = param0;
}
Result$Ok$23$.prototype.$tag = 1;
function Result$Err$24$(param0) {
  this._0 = param0;
}
Result$Err$24$.prototype.$tag = 0;
function Result$Ok$24$(param0) {
  this._0 = param0;
}
Result$Ok$24$.prototype.$tag = 1;
function Result$Err$25$(param0) {
  this._0 = param0;
}
Result$Err$25$.prototype.$tag = 0;
function Result$Ok$25$(param0) {
  this._0 = param0;
}
Result$Ok$25$.prototype.$tag = 1;
function Result$Err$26$(param0) {
  this._0 = param0;
}
Result$Err$26$.prototype.$tag = 0;
function Result$Ok$26$(param0) {
  this._0 = param0;
}
Result$Ok$26$.prototype.$tag = 1;
function Result$Err$27$(param0) {
  this._0 = param0;
}
Result$Err$27$.prototype.$tag = 0;
function Result$Ok$27$(param0) {
  this._0 = param0;
}
Result$Ok$27$.prototype.$tag = 1;
function Result$Err$28$(param0) {
  this._0 = param0;
}
Result$Err$28$.prototype.$tag = 0;
function Result$Ok$28$(param0) {
  this._0 = param0;
}
Result$Ok$28$.prototype.$tag = 1;
function Result$Err$29$(param0) {
  this._0 = param0;
}
Result$Err$29$.prototype.$tag = 0;
function Result$Ok$29$(param0) {
  this._0 = param0;
}
Result$Ok$29$.prototype.$tag = 1;
function Result$Err$30$(param0) {
  this._0 = param0;
}
Result$Err$30$.prototype.$tag = 0;
function Result$Ok$30$(param0) {
  this._0 = param0;
}
Result$Ok$30$.prototype.$tag = 1;
function Result$Err$31$(param0) {
  this._0 = param0;
}
Result$Err$31$.prototype.$tag = 0;
function Result$Ok$31$(param0) {
  this._0 = param0;
}
Result$Ok$31$.prototype.$tag = 1;
function Result$Err$32$(param0) {
  this._0 = param0;
}
Result$Err$32$.prototype.$tag = 0;
function Result$Ok$32$(param0) {
  this._0 = param0;
}
Result$Ok$32$.prototype.$tag = 1;
function Result$Err$33$(param0) {
  this._0 = param0;
}
Result$Err$33$.prototype.$tag = 0;
function Result$Ok$33$(param0) {
  this._0 = param0;
}
Result$Ok$33$.prototype.$tag = 1;
function Result$Err$34$(param0) {
  this._0 = param0;
}
Result$Err$34$.prototype.$tag = 0;
function Result$Ok$34$(param0) {
  this._0 = param0;
}
Result$Ok$34$.prototype.$tag = 1;
function Result$Err$35$(param0) {
  this._0 = param0;
}
Result$Err$35$.prototype.$tag = 0;
function Result$Ok$35$(param0) {
  this._0 = param0;
}
Result$Ok$35$.prototype.$tag = 1;
function Result$Err$36$(param0) {
  this._0 = param0;
}
Result$Err$36$.prototype.$tag = 0;
function Result$Ok$36$(param0) {
  this._0 = param0;
}
Result$Ok$36$.prototype.$tag = 1;
function Result$Err$37$(param0) {
  this._0 = param0;
}
Result$Err$37$.prototype.$tag = 0;
function Result$Ok$37$(param0) {
  this._0 = param0;
}
Result$Ok$37$.prototype.$tag = 1;
function Result$Err$38$(param0) {
  this._0 = param0;
}
Result$Err$38$.prototype.$tag = 0;
function Result$Ok$38$(param0) {
  this._0 = param0;
}
Result$Ok$38$.prototype.$tag = 1;
function Result$Err$39$(param0) {
  this._0 = param0;
}
Result$Err$39$.prototype.$tag = 0;
function Result$Ok$39$(param0) {
  this._0 = param0;
}
Result$Ok$39$.prototype.$tag = 1;
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textAlign_$46$inner = (self, horizAlign, vertAlign) => {
   const vert_val = vertAlign ? vertAlign._0 : undefined;
   self.textAlign(horizAlign, vert_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textLeading_set_ = (self, leading) => self.textLeading(leading);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textLeading_get_ = (self) => self.textLeading();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textAscent_ = (self) => self.textAscent();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textDescent_ = (self) => self.textDescent();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textSize_set_ = (self, size) => self.textSize(size);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textSize_get_ = (self) => self.textSize();
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textStyle_$46$inner = (self, style) => {
   const style_val = style ? style._0 : undefined;
   self.textStyle(style_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textWidth_ = (self, str) => self.textWidth(str);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textWrap_ = (self, mode) => self.textWrap(mode);
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$loadFont_$46$inner = (self, path, onSuccess, onFailure) => {
   const success_val = onSuccess ? onSuccess._0 : undefined;
   const failure_val = onFailure ? onFailure._0 : undefined;
   return self.loadFont(path, success_val, failure_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textFont_$46$inner = (self, font, size) => {
   const size_val = size ? size._0 : undefined;
   self.textFont(font, size_val);
 };
const Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$text_$46$inner = (self, str, x, y, x2, y2) => {
   const x2_val = x2 ? x2._0 : undefined;
   const y2_val = y2 ? y2._0 : undefined;
   self.text(str, x, y, x2_val, y2_val);
 };
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
const Option$None$40$ = { $tag: 0 };
function Option$Some$40$(param0) {
  this._0 = param0;
}
Option$Some$40$.prototype.$tag = 1;
const Option$None$41$ = { $tag: 0 };
function Option$Some$41$(param0) {
  this._0 = param0;
}
Option$Some$41$.prototype.$tag = 1;
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
function Option$Some$42$(param0) {
  this._0 = param0;
}
Option$Some$42$.prototype.$tag = 1;
const Great$45$Love$45$League$Stick_Man_Battle$server$$getP5Instance$46$inner = (drawww, width, height) => {
   a = new p5((p)=>{
  p.setup = function() {
    const cnv = p.createCanvas(width, height);
    try {
      if (typeof document !== 'undefined') {
        const parent = document.getElementById('p5-root');
        if (parent && cnv && cnv.parent) {
          cnv.parent(parent);
        }
        if (cnv && cnv.elt) {
          cnv.elt.style.display = 'block';
          cnv.elt.style.margin = '0 auto';
          cnv.elt.style.marginTop = '8px';
        }
      }
    } catch(e) {
      /* ignore in non-browser environments */
    }
  }
  p.draw = function() {
    drawww(p);
  }
})
return a
};
const Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseX = (p) => p.mouseX;
const Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseY = (p) => p.mouseY;
const Great$45$Love$45$League$Stick_Man_Battle$server$$mouseIsPressed = (p) => p.mouseIsPressed;
function Result$Err$43$(param0) {
  this._0 = param0;
}
Result$Err$43$.prototype.$tag = 0;
function Result$Ok$43$(param0) {
  this._0 = param0;
}
Result$Ok$43$.prototype.$tag = 1;
const Option$None$44$ = { $tag: 0 };
function Option$Some$44$(param0) {
  this._0 = param0;
}
Option$Some$44$.prototype.$tag = 1;
function Result$Err$45$(param0) {
  this._0 = param0;
}
Result$Err$45$.prototype.$tag = 0;
function Result$Ok$45$(param0) {
  this._0 = param0;
}
Result$Ok$45$.prototype.$tag = 1;
function Error$$to_string(_e) {
  switch (_e.$tag) {
    case 3: {
      return "Demonmasterlqx/moonbit_stickman_map_loader/map_loader.MapLoaderError.MapLoaderError";
    }
    case 1: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 4: {
      return "Great-Love-League/Stick_Man_Battle/server.ParticleControlConfigError.ParticleControlConfigError";
    }
    case 0: {
      return moonbitlang$core$builtin$$Show$to_string$1$(_e);
    }
    case 2: {
      return moonbitlang$core$builtin$$Show$to_string$2$(_e);
    }
    default: {
      return "Great-Love-League/Stick_Man_Battle/server.GameStateError.GameStateError";
    }
  }
}
const moonbitlang$core$json$$as_bool$46$constr$47$1110 = true;
const moonbitlang$core$json$$as_bool$46$constr$47$1111 = false;
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const moonbitlang$core$strconv$$min_19digit_int = $1000000000000000000L;
const moonbitlang$core$strconv$$parse_scientific$46$exp_num$124$306 = $0L;
const moonbitlang$core$strconv$$parse_number$46$exp_number$124$287 = $0L;
const moonbitlang$core$strconv$$double_info = { mantissa_bits: 52, exponent_bits: 11, bias: -1023 };
const moonbitlang$core$strconv$$powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const moonbitlang$core$strconv$$left_shift_cheats = [{ _0: 0, _1: "" }, { _0: 1, _1: "5" }, { _0: 1, _1: "25" }, { _0: 1, _1: "125" }, { _0: 2, _1: "625" }, { _0: 2, _1: "3125" }, { _0: 2, _1: "15625" }, { _0: 3, _1: "78125" }, { _0: 3, _1: "390625" }, { _0: 3, _1: "1953125" }, { _0: 4, _1: "9765625" }, { _0: 4, _1: "48828125" }, { _0: 4, _1: "244140625" }, { _0: 4, _1: "1220703125" }, { _0: 5, _1: "6103515625" }, { _0: 5, _1: "30517578125" }, { _0: 5, _1: "152587890625" }, { _0: 6, _1: "762939453125" }, { _0: 6, _1: "3814697265625" }, { _0: 6, _1: "19073486328125" }, { _0: 7, _1: "95367431640625" }, { _0: 7, _1: "476837158203125" }, { _0: 7, _1: "2384185791015625" }, { _0: 7, _1: "11920928955078125" }, { _0: 8, _1: "59604644775390625" }, { _0: 8, _1: "298023223876953125" }, { _0: 8, _1: "1490116119384765625" }, { _0: 9, _1: "7450580596923828125" }, { _0: 9, _1: "37252902984619140625" }, { _0: 9, _1: "186264514923095703125" }, { _0: 10, _1: "931322574615478515625" }, { _0: 10, _1: "4656612873077392578125" }, { _0: 10, _1: "23283064365386962890625" }, { _0: 10, _1: "116415321826934814453125" }, { _0: 11, _1: "582076609134674072265625" }, { _0: 11, _1: "2910383045673370361328125" }, { _0: 11, _1: "14551915228366851806640625" }, { _0: 12, _1: "72759576141834259033203125" }, { _0: 12, _1: "363797880709171295166015625" }, { _0: 12, _1: "1818989403545856475830078125" }, { _0: 13, _1: "9094947017729282379150390625" }, { _0: 13, _1: "45474735088646411895751953125" }, { _0: 13, _1: "227373675443232059478759765625" }, { _0: 13, _1: "1136868377216160297393798828125" }, { _0: 14, _1: "5684341886080801486968994140625" }, { _0: 14, _1: "28421709430404007434844970703125" }, { _0: 14, _1: "142108547152020037174224853515625" }, { _0: 15, _1: "710542735760100185871124267578125" }, { _0: 15, _1: "3552713678800500929355621337890625" }, { _0: 15, _1: "17763568394002504646778106689453125" }, { _0: 16, _1: "88817841970012523233890533447265625" }, { _0: 16, _1: "444089209850062616169452667236328125" }, { _0: 16, _1: "2220446049250313080847263336181640625" }, { _0: 16, _1: "11102230246251565404236316680908203125" }, { _0: 17, _1: "55511151231257827021181583404541015625" }, { _0: 17, _1: "277555756156289135105907917022705078125" }, { _0: 17, _1: "1387778780781445675529539585113525390625" }, { _0: 18, _1: "6938893903907228377647697925567626953125" }, { _0: 18, _1: "34694469519536141888238489627838134765625" }, { _0: 18, _1: "173472347597680709441192448139190673828125" }, { _0: 19, _1: "867361737988403547205962240695953369140625" }];
const moonbitlang$core$strconv$$int_pow10 = [$1L, $10L, $100L, $1000L, $10000L, $100000L, $1000000L, $10000000L, $100000000L, $1000000000L, $10000000000L, $100000000000L, $1000000000000L, $10000000000000L, $100000000000000L, $1000000000000000L];
const moonbitlang$core$strconv$$max_exponent_fast_path = $22L;
const moonbitlang$core$strconv$$table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const moonbitlang$core$strconv$$max_exponent_disguised_fast_path = $37L;
const moonbitlang$core$strconv$$min_exponent_fast_path = $_22L;
const moonbitlang$core$strconv$$checked_mul$46$constr$47$1513 = $0L;
const moonbitlang$core$uint64$$max_value = $_1L;
const Kaida$45$Amethyst$math$$pi_over_2 = [1.5707962512969971, 7.5497894158615964e-008, 5.3903025299577648e-015, 3.2820034158079129e-022, 1.2706557530806761e-029, 1.2293330898111133e-036, 2.7337005381646456e-044, 2.1674168387780482e-051];
const Kaida$45$Amethyst$math$$two_over_pi = [10680707, 7228996, 1387004, 2578385, 16069853, 12639074, 9804092, 4427841, 16666979, 11263675, 12935607, 2387514, 4345298, 14681673, 3074569, 13734428, 16653803, 1880361, 10960616, 8533493, 3062596, 8710556, 7349940, 6258241, 3772886, 3769171, 3798172, 8675211, 12450088, 3874808, 9961438, 366607, 15675153, 9132554, 7151469, 3571407, 2607881, 12013382, 4155038, 6285869, 7677882, 13102053, 15825725, 473591, 9065106, 15363067, 6271263, 9264392, 5636912, 4652155, 7056368, 13614112, 10155062, 1944035, 9527646, 15080200, 6658437, 6231200, 6832269, 16767104, 5075751, 3212806, 1398474, 7579849, 6349435, 12618859];
const Kaida$45$Amethyst$math$$npio2_hw = [1073291771, 1074340347, 1074977148, 1075388923, 1075800698, 1076025724, 1076231611, 1076437499, 1076643386, 1076849274, 1076971356, 1077074300, 1077177244, 1077280187, 1077383131, 1077486075, 1077589019, 1077691962, 1077794906, 1077897850, 1077968460, 1078019932, 1078071404, 1078122876, 1078174348, 1078225820, 1078277292, 1078328763, 1078380235, 1078431707, 1078483179, 1078534651];
const Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json$46$tuple$47$2429 = { _0: -10000, _1: -10000 };
const Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json$46$tuple$47$2430 = { _0: 10000, _1: 10000 };
const Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json$46$tuple$47$2431 = { _0: Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json$46$tuple$47$2429, _1: Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json$46$tuple$47$2430 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body = " {\n       \"id\": \"body_1760795953628_lylo5ag1a\",\n       \"body_def\": {\n         \"type\": \"dynamic\",\n         \"position\": [\n           12.904793874424993,\n           14.748299439064441\n         ],\n         \"angle\": 0,\n         \"linear_velocity\": [\n           0,\n           0\n         ],\n         \"angular_velocity\": 0,\n         \"linear_damping\": 0,\n         \"angular_damping\": 0,\n         \"allow_sleep\": true,\n         \"awake\": true,\n         \"fixed_rotation\": false,\n         \"bullet\": false,\n         \"gravity_scale\": 1\n       },\n       \"fixtures\": [\n         {\n           \"shape\": {\n             \"type\": \"box\",\n             \"params\": {\n               \"width\": 0.5,\n               \"height\": 1\n             }\n           },\n           \"fixture_def\": {\n             \"density\": 0.01,\n             \"friction\": 0.3,\n             \"restitution\": 0.5,\n             \"is_sensor\": false,\n             \"filter_category_bits\": 1,\n             \"filter_mask_bits\": 65535,\n             \"filter_group_index\": -1\n           }\n         }\n       ],\n       \"visual_properties\": {},\n       \"user_data\": {}\n     }";
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3064 = { _0: 0.25, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3065 = { _0: 0.2, _1: 0.25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3066 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3067 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3068 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3069 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3070 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3071 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3072 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3073 = { _0: 0.15, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3098 = { _0: -10, _1: 12 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3099 = { _0: -5, _1: 12 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3100 = { _0: -24.5, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3101 = { _0: 1, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3102 = { _0: 24.5, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3103 = { _0: 1, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3104 = { _0: 0, _1: 49.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3105 = { _0: 23.6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3106 = { _0: 0, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3107 = { _0: 23.6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3108 = { _0: 5, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3109 = { _0: -15, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3110 = { _0: 15, _1: 40 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3111 = { _0: -15, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3112 = { _0: 5, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3113 = { _0: 15, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3114 = { _0: -15, _1: 40 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3115 = { _0: 0, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3116 = { _0: 0, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3117 = { _0: 5, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3118 = { _0: 0, _1: 40 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3119 = { _0: 5, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3120 = { _0: -17, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3121 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3122 = { _0: 17, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3123 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3124 = { _0: -24.5, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3125 = { _0: 1, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3126 = { _0: 24.5, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3127 = { _0: 1, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3128 = { _0: 0, _1: 49.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3129 = { _0: 23.6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3130 = { _0: 0, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3131 = { _0: 23.6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3132 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3133 = { _0: -16, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3134 = { _0: 16, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3135 = { _0: -16, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3136 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3137 = { _0: -16, _1: 20 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3138 = { _0: 16, _1: 20 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3139 = { _0: -8, _1: 20 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3140 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3141 = { _0: -16, _1: 30 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3142 = { _0: 16, _1: 30 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3143 = { _0: 0, _1: 30 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3144 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3145 = { _0: -16, _1: 40 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3146 = { _0: 16, _1: 40 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3147 = { _0: 8, _1: 40 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3148 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3149 = { _0: 16, _1: 5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3150 = { _0: -16, _1: 5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3151 = { _0: 16, _1: 5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3152 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3153 = { _0: 16, _1: 15 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3154 = { _0: -16, _1: 15 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3155 = { _0: 8, _1: 15 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3156 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3157 = { _0: 16, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3158 = { _0: -16, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3159 = { _0: 0, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3160 = { _0: 6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3161 = { _0: 16, _1: 35 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3162 = { _0: -16, _1: 35 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3163 = { _0: -8, _1: 35 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3164 = { _0: 0, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3165 = { _0: 10, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3166 = { _0: -20, _1: 8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3167 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3168 = { _0: 15, _1: 10 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3169 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3170 = { _0: -5, _1: 16 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3171 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3172 = { _0: 22, _1: 19 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3173 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3174 = { _0: -18, _1: 28 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3175 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3176 = { _0: 8, _1: 33 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3177 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3178 = { _0: -10, _1: 41 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3179 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3180 = { _0: 19, _1: 45 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3181 = { _0: 8, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3182 = { _0: -24.5, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3183 = { _0: 1, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3184 = { _0: 24.5, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3185 = { _0: 1, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3186 = { _0: 0, _1: 49.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3187 = { _0: 23.6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3188 = { _0: 0, _1: 0.5 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3189 = { _0: 23.6, _1: 1 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3190 = { _0: 0, _1: 25 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3191 = { _0: 20, _1: 0.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$shoot_shotgun$46$inner$46$constr$47$3300 = 6;
const Great$45$Love$45$League$Stick_Man_Battle$server$$shoot_shotgun$46$inner$46$constr$47$3301 = new Option$Some$0$(60);
const Great$45$Love$45$League$Stick_Man_Battle$server$$shoot_shotgun$46$inner$46$constr$47$3302 = 0;
const Great$45$Love$45$League$Stick_Man_Battle$server$$drawPolygon$46$constr$47$3405 = "close";
const Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world$46$constr$47$3433 = new Option$Some$0$(127);
const Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world$46$constr$47$3434 = new Option$Some$0$(127);
const Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world$46$constr$47$3435 = new Option$Some$0$(200);
const Great$45$Love$45$League$Stick_Man_Battle$server$$clear_screen$46$constr$47$3449 = new Option$Some$0$(204);
const Great$45$Love$45$League$Stick_Man_Battle$server$$clear_screen$46$constr$47$3450 = new Option$Some$0$(0);
const Great$45$Love$45$League$Stick_Man_Battle$server$$create_world$46$tuple$47$3536 = { _0: 0, _1: -9.8 };
const Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3648 = 0;
const Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3649 = 3;
const Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3650 = 22;
const Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3651 = 18;
const Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3652 = 25;
const Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3653 = 19;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3682 = 0;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3683 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3682);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3684 = 3;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3685 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3684);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3686 = 22;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3687 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3686);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3688 = 18;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3689 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3688);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3690 = 25;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3691 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3690);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3692 = 19;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3693 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3692);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3694 = false;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3695 = 66;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3696 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3695);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3697 = 67;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3698 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3697);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3699 = 64;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3700 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3699);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3701 = 65;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3702 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3701);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3703 = 89;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3704 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3703);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3705 = 89;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3706 = new Option$Some$1$(Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3705);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3707 = false;
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3736 = new Option$Some$0$(200);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3737 = new Option$Some$0$(180);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3738 = new Option$Some$0$(90);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3739 = new Option$Some$0$(8);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3740 = new Option$Some$0$(12);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3741 = new Option$Some$0$(200);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3742 = new Option$Some$0$(255);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3743 = new Option$Some$0$(0);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3744 = new Option$Some$0$(0);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3745 = new Option$Some$0$(180);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3746 = new Option$Some$0$(255);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3747 = new Option$Some$0$(255);
const Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3748 = new Option$Some$0$(255);
const moonbitlang$x$json5$$non_ascii_whitespace = [{ _0: 160, _1: 160 }, { _0: 5760, _1: 5760 }, { _0: 8192, _1: 8202 }, { _0: 8232, _1: 8233 }, { _0: 8239, _1: 8239 }, { _0: 8287, _1: 8287 }, { _0: 12288, _1: 12288 }, { _0: 65279, _1: 65279 }];
const moonbitlang$core$double$$neg_infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370496L);
const moonbitlang$core$double$$not_a_number = moonbitlang$core$int64$$Int64$reinterpret_as_double($9221120237041090561L);
const moonbitlang$core$double$$infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405312L);
const moonbitlang$core$strconv$$max_mantissa_fast_path = moonbitlang$core$builtin$$Shl$shl$3$($2L, 52);
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const moonbitlang$x$json5$$non_ascii_id_start = [{ _0: 170, _1: 170 }, { _0: 181, _1: 181 }, { _0: 186, _1: 186 }, { _0: 192, _1: 214 }, { _0: 216, _1: 246 }, { _0: 248, _1: 705 }, { _0: 710, _1: 721 }, { _0: 736, _1: 740 }, { _0: 748, _1: 748 }, { _0: 750, _1: 750 }, { _0: 880, _1: 884 }, { _0: 886, _1: 887 }, { _0: 890, _1: 893 }, { _0: 895, _1: 895 }, { _0: 902, _1: 902 }, { _0: 904, _1: 906 }, { _0: 908, _1: 908 }, { _0: 910, _1: 929 }, { _0: 931, _1: 1013 }, { _0: 1015, _1: 1153 }, { _0: 1162, _1: 1327 }, { _0: 1329, _1: 1366 }, { _0: 1369, _1: 1369 }, { _0: 1377, _1: 1415 }, { _0: 1488, _1: 1514 }, { _0: 1520, _1: 1522 }, { _0: 1568, _1: 1610 }, { _0: 1646, _1: 1647 }, { _0: 1649, _1: 1747 }, { _0: 1749, _1: 1749 }, { _0: 1765, _1: 1766 }, { _0: 1774, _1: 1775 }, { _0: 1786, _1: 1788 }, { _0: 1791, _1: 1791 }, { _0: 1808, _1: 1808 }, { _0: 1810, _1: 1839 }, { _0: 1869, _1: 1957 }, { _0: 1969, _1: 1969 }, { _0: 1994, _1: 2026 }, { _0: 2036, _1: 2037 }, { _0: 2042, _1: 2042 }, { _0: 2048, _1: 2069 }, { _0: 2074, _1: 2074 }, { _0: 2084, _1: 2084 }, { _0: 2088, _1: 2088 }, { _0: 2112, _1: 2136 }, { _0: 2144, _1: 2154 }, { _0: 2208, _1: 2228 }, { _0: 2230, _1: 2237 }, { _0: 2308, _1: 2361 }, { _0: 2365, _1: 2365 }, { _0: 2384, _1: 2384 }, { _0: 2392, _1: 2401 }, { _0: 2417, _1: 2432 }, { _0: 2437, _1: 2444 }, { _0: 2447, _1: 2448 }, { _0: 2451, _1: 2472 }, { _0: 2474, _1: 2480 }, { _0: 2482, _1: 2482 }, { _0: 2486, _1: 2489 }, { _0: 2493, _1: 2493 }, { _0: 2510, _1: 2510 }, { _0: 2524, _1: 2525 }, { _0: 2527, _1: 2529 }, { _0: 2544, _1: 2545 }, { _0: 2556, _1: 2556 }, { _0: 2565, _1: 2570 }, { _0: 2575, _1: 2576 }, { _0: 2579, _1: 2600 }, { _0: 2602, _1: 2608 }, { _0: 2610, _1: 2611 }, { _0: 2613, _1: 2614 }, { _0: 2616, _1: 2617 }, { _0: 2649, _1: 2652 }, { _0: 2654, _1: 2654 }, { _0: 2674, _1: 2676 }, { _0: 2693, _1: 2701 }, { _0: 2703, _1: 2705 }, { _0: 2707, _1: 2728 }, { _0: 2730, _1: 2736 }, { _0: 2738, _1: 2739 }, { _0: 2741, _1: 2745 }, { _0: 2749, _1: 2749 }, { _0: 2768, _1: 2768 }, { _0: 2784, _1: 2785 }, { _0: 2809, _1: 2809 }, { _0: 2821, _1: 2828 }, { _0: 2831, _1: 2832 }, { _0: 2835, _1: 2856 }, { _0: 2858, _1: 2864 }, { _0: 2866, _1: 2867 }, { _0: 2869, _1: 2873 }, { _0: 2877, _1: 2877 }, { _0: 2908, _1: 2909 }, { _0: 2911, _1: 2913 }, { _0: 2929, _1: 2929 }, { _0: 2947, _1: 2947 }, { _0: 2949, _1: 2954 }, { _0: 2958, _1: 2960 }, { _0: 2962, _1: 2965 }, { _0: 2969, _1: 2970 }, { _0: 2972, _1: 2972 }, { _0: 2974, _1: 2975 }, { _0: 2979, _1: 2980 }, { _0: 2984, _1: 2986 }, { _0: 2990, _1: 3001 }, { _0: 3024, _1: 3024 }, { _0: 3077, _1: 3084 }, { _0: 3086, _1: 3088 }, { _0: 3090, _1: 3112 }, { _0: 3114, _1: 3129 }, { _0: 3133, _1: 3133 }, { _0: 3160, _1: 3162 }, { _0: 3168, _1: 3169 }, { _0: 3200, _1: 3200 }, { _0: 3205, _1: 3212 }, { _0: 3214, _1: 3216 }, { _0: 3218, _1: 3240 }, { _0: 3242, _1: 3251 }, { _0: 3253, _1: 3257 }, { _0: 3261, _1: 3261 }, { _0: 3294, _1: 3294 }, { _0: 3296, _1: 3297 }, { _0: 3313, _1: 3314 }, { _0: 3333, _1: 3340 }, { _0: 3342, _1: 3344 }, { _0: 3346, _1: 3386 }, { _0: 3389, _1: 3389 }, { _0: 3406, _1: 3406 }, { _0: 3412, _1: 3414 }, { _0: 3423, _1: 3425 }, { _0: 3450, _1: 3455 }, { _0: 3461, _1: 3478 }, { _0: 3482, _1: 3505 }, { _0: 3507, _1: 3515 }, { _0: 3517, _1: 3517 }, { _0: 3520, _1: 3526 }, { _0: 3585, _1: 3632 }, { _0: 3634, _1: 3635 }, { _0: 3648, _1: 3654 }, { _0: 3713, _1: 3714 }, { _0: 3716, _1: 3716 }, { _0: 3719, _1: 3720 }, { _0: 3722, _1: 3722 }, { _0: 3725, _1: 3725 }, { _0: 3732, _1: 3735 }, { _0: 3737, _1: 3743 }, { _0: 3745, _1: 3747 }, { _0: 3749, _1: 3749 }, { _0: 3751, _1: 3751 }, { _0: 3754, _1: 3755 }, { _0: 3757, _1: 3760 }, { _0: 3762, _1: 3763 }, { _0: 3773, _1: 3773 }, { _0: 3776, _1: 3780 }, { _0: 3782, _1: 3782 }, { _0: 3804, _1: 3807 }, { _0: 3840, _1: 3840 }, { _0: 3904, _1: 3911 }, { _0: 3913, _1: 3948 }, { _0: 3976, _1: 3980 }, { _0: 4096, _1: 4138 }, { _0: 4159, _1: 4159 }, { _0: 4176, _1: 4181 }, { _0: 4186, _1: 4189 }, { _0: 4193, _1: 4193 }, { _0: 4197, _1: 4198 }, { _0: 4206, _1: 4208 }, { _0: 4213, _1: 4225 }, { _0: 4238, _1: 4238 }, { _0: 4256, _1: 4293 }, { _0: 4295, _1: 4295 }, { _0: 4301, _1: 4301 }, { _0: 4304, _1: 4346 }, { _0: 4348, _1: 4680 }, { _0: 4682, _1: 4685 }, { _0: 4688, _1: 4694 }, { _0: 4696, _1: 4696 }, { _0: 4698, _1: 4701 }, { _0: 4704, _1: 4744 }, { _0: 4746, _1: 4749 }, { _0: 4752, _1: 4784 }, { _0: 4786, _1: 4789 }, { _0: 4792, _1: 4798 }, { _0: 4800, _1: 4800 }, { _0: 4802, _1: 4805 }, { _0: 4808, _1: 4822 }, { _0: 4824, _1: 4880 }, { _0: 4882, _1: 4885 }, { _0: 4888, _1: 4954 }, { _0: 4992, _1: 5007 }, { _0: 5024, _1: 5109 }, { _0: 5112, _1: 5117 }, { _0: 5121, _1: 5740 }, { _0: 5743, _1: 5759 }, { _0: 5761, _1: 5786 }, { _0: 5792, _1: 5866 }, { _0: 5870, _1: 5880 }, { _0: 5888, _1: 5900 }, { _0: 5902, _1: 5905 }, { _0: 5920, _1: 5937 }, { _0: 5952, _1: 5969 }, { _0: 5984, _1: 5996 }, { _0: 5998, _1: 6000 }, { _0: 6016, _1: 6067 }, { _0: 6103, _1: 6103 }, { _0: 6108, _1: 6108 }, { _0: 6176, _1: 6263 }, { _0: 6272, _1: 6276 }, { _0: 6279, _1: 6312 }, { _0: 6314, _1: 6314 }, { _0: 6320, _1: 6389 }, { _0: 6400, _1: 6430 }, { _0: 6480, _1: 6509 }, { _0: 6512, _1: 6516 }, { _0: 6528, _1: 6571 }, { _0: 6576, _1: 6601 }, { _0: 6656, _1: 6678 }, { _0: 6688, _1: 6740 }, { _0: 6823, _1: 6823 }, { _0: 6917, _1: 6963 }, { _0: 6981, _1: 6987 }, { _0: 7043, _1: 7072 }, { _0: 7086, _1: 7087 }, { _0: 7098, _1: 7141 }, { _0: 7168, _1: 7203 }, { _0: 7245, _1: 7247 }, { _0: 7258, _1: 7293 }, { _0: 7296, _1: 7304 }, { _0: 7401, _1: 7404 }, { _0: 7406, _1: 7409 }, { _0: 7413, _1: 7414 }, { _0: 7424, _1: 7615 }, { _0: 7680, _1: 7957 }, { _0: 7960, _1: 7965 }, { _0: 7968, _1: 8005 }, { _0: 8008, _1: 8013 }, { _0: 8016, _1: 8023 }, { _0: 8025, _1: 8025 }, { _0: 8027, _1: 8027 }, { _0: 8029, _1: 8029 }, { _0: 8031, _1: 8061 }, { _0: 8064, _1: 8116 }, { _0: 8118, _1: 8124 }, { _0: 8126, _1: 8126 }, { _0: 8130, _1: 8132 }, { _0: 8134, _1: 8140 }, { _0: 8144, _1: 8147 }, { _0: 8150, _1: 8155 }, { _0: 8160, _1: 8172 }, { _0: 8178, _1: 8180 }, { _0: 8182, _1: 8188 }, { _0: 8305, _1: 8305 }, { _0: 8319, _1: 8319 }, { _0: 8336, _1: 8348 }, { _0: 8450, _1: 8450 }, { _0: 8455, _1: 8455 }, { _0: 8458, _1: 8467 }, { _0: 8469, _1: 8469 }, { _0: 8473, _1: 8477 }, { _0: 8484, _1: 8484 }, { _0: 8486, _1: 8486 }, { _0: 8488, _1: 8488 }, { _0: 8490, _1: 8493 }, { _0: 8495, _1: 8505 }, { _0: 8508, _1: 8511 }, { _0: 8517, _1: 8521 }, { _0: 8526, _1: 8526 }, { _0: 8544, _1: 8584 }, { _0: 11264, _1: 11310 }, { _0: 11312, _1: 11358 }, { _0: 11360, _1: 11492 }, { _0: 11499, _1: 11502 }, { _0: 11506, _1: 11507 }, { _0: 11520, _1: 11557 }, { _0: 11559, _1: 11559 }, { _0: 11565, _1: 11565 }, { _0: 11568, _1: 11623 }, { _0: 11631, _1: 11631 }, { _0: 11648, _1: 11670 }, { _0: 11680, _1: 11686 }, { _0: 11688, _1: 11694 }, { _0: 11696, _1: 11702 }, { _0: 11704, _1: 11710 }, { _0: 11712, _1: 11718 }, { _0: 11720, _1: 11726 }, { _0: 11728, _1: 11734 }, { _0: 11736, _1: 11742 }, { _0: 11823, _1: 11823 }, { _0: 12293, _1: 12295 }, { _0: 12321, _1: 12329 }, { _0: 12337, _1: 12341 }, { _0: 12344, _1: 12348 }, { _0: 12353, _1: 12438 }, { _0: 12445, _1: 12447 }, { _0: 12449, _1: 12538 }, { _0: 12540, _1: 12543 }, { _0: 12549, _1: 12590 }, { _0: 12593, _1: 12686 }, { _0: 12704, _1: 12730 }, { _0: 12784, _1: 12799 }, { _0: 13312, _1: 19893 }, { _0: 19968, _1: 40938 }, { _0: 40960, _1: 42124 }, { _0: 42192, _1: 42237 }, { _0: 42240, _1: 42508 }, { _0: 42512, _1: 42527 }, { _0: 42538, _1: 42539 }, { _0: 42560, _1: 42606 }, { _0: 42623, _1: 42653 }, { _0: 42656, _1: 42735 }, { _0: 42775, _1: 42783 }, { _0: 42786, _1: 42888 }, { _0: 42891, _1: 42926 }, { _0: 42928, _1: 42935 }, { _0: 42999, _1: 43009 }, { _0: 43011, _1: 43013 }, { _0: 43015, _1: 43018 }, { _0: 43020, _1: 43042 }, { _0: 43072, _1: 43123 }, { _0: 43138, _1: 43187 }, { _0: 43250, _1: 43255 }, { _0: 43259, _1: 43259 }, { _0: 43261, _1: 43261 }, { _0: 43274, _1: 43301 }, { _0: 43312, _1: 43334 }, { _0: 43360, _1: 43388 }, { _0: 43396, _1: 43442 }, { _0: 43471, _1: 43471 }, { _0: 43488, _1: 43492 }, { _0: 43494, _1: 43503 }, { _0: 43514, _1: 43518 }, { _0: 43520, _1: 43560 }, { _0: 43584, _1: 43586 }, { _0: 43588, _1: 43595 }, { _0: 43616, _1: 43638 }, { _0: 43642, _1: 43642 }, { _0: 43646, _1: 43695 }, { _0: 43697, _1: 43697 }, { _0: 43701, _1: 43702 }, { _0: 43705, _1: 43709 }, { _0: 43712, _1: 43712 }, { _0: 43714, _1: 43714 }, { _0: 43739, _1: 43741 }, { _0: 43744, _1: 43754 }, { _0: 43762, _1: 43764 }, { _0: 43777, _1: 43782 }, { _0: 43785, _1: 43790 }, { _0: 43793, _1: 43798 }, { _0: 43808, _1: 43814 }, { _0: 43816, _1: 43822 }, { _0: 43824, _1: 43866 }, { _0: 43868, _1: 43877 }, { _0: 43888, _1: 44002 }, { _0: 44032, _1: 55203 }, { _0: 55216, _1: 55238 }, { _0: 55243, _1: 55291 }, { _0: 63744, _1: 64109 }, { _0: 64112, _1: 64217 }, { _0: 64256, _1: 64262 }, { _0: 64275, _1: 64279 }, { _0: 64285, _1: 64285 }, { _0: 64287, _1: 64296 }, { _0: 64298, _1: 64310 }, { _0: 64312, _1: 64316 }, { _0: 64318, _1: 64318 }, { _0: 64320, _1: 64321 }, { _0: 64323, _1: 64324 }, { _0: 64326, _1: 64433 }, { _0: 64467, _1: 64829 }, { _0: 64848, _1: 64911 }, { _0: 64914, _1: 64967 }, { _0: 65008, _1: 65019 }, { _0: 65136, _1: 65140 }, { _0: 65142, _1: 65276 }, { _0: 65313, _1: 65338 }, { _0: 65345, _1: 65370 }, { _0: 65382, _1: 65470 }, { _0: 65474, _1: 65479 }, { _0: 65482, _1: 65487 }, { _0: 65490, _1: 65495 }, { _0: 65498, _1: 65500 }, { _0: 65536, _1: 65547 }, { _0: 65549, _1: 65574 }, { _0: 65576, _1: 65594 }, { _0: 65596, _1: 65597 }, { _0: 65599, _1: 65613 }, { _0: 65616, _1: 65629 }, { _0: 65664, _1: 65786 }, { _0: 65856, _1: 65908 }, { _0: 66176, _1: 66204 }, { _0: 66208, _1: 66256 }, { _0: 66304, _1: 66335 }, { _0: 66349, _1: 66378 }, { _0: 66384, _1: 66421 }, { _0: 66432, _1: 66461 }, { _0: 66464, _1: 66499 }, { _0: 66504, _1: 66511 }, { _0: 66513, _1: 66517 }, { _0: 66560, _1: 66717 }, { _0: 66736, _1: 66771 }, { _0: 66776, _1: 66811 }, { _0: 66816, _1: 66855 }, { _0: 66864, _1: 66915 }, { _0: 67072, _1: 67382 }, { _0: 67392, _1: 67413 }, { _0: 67424, _1: 67431 }, { _0: 67584, _1: 67589 }, { _0: 67592, _1: 67592 }, { _0: 67594, _1: 67637 }, { _0: 67639, _1: 67640 }, { _0: 67644, _1: 67644 }, { _0: 67647, _1: 67669 }, { _0: 67680, _1: 67702 }, { _0: 67712, _1: 67742 }, { _0: 67808, _1: 67826 }, { _0: 67828, _1: 67829 }, { _0: 67840, _1: 67861 }, { _0: 67872, _1: 67897 }, { _0: 67968, _1: 68023 }, { _0: 68030, _1: 68031 }, { _0: 68096, _1: 68096 }, { _0: 68112, _1: 68115 }, { _0: 68117, _1: 68119 }, { _0: 68121, _1: 68147 }, { _0: 68192, _1: 68220 }, { _0: 68224, _1: 68252 }, { _0: 68288, _1: 68295 }, { _0: 68297, _1: 68324 }, { _0: 68352, _1: 68405 }, { _0: 68416, _1: 68437 }, { _0: 68448, _1: 68466 }, { _0: 68480, _1: 68497 }, { _0: 68608, _1: 68680 }, { _0: 68736, _1: 68786 }, { _0: 68800, _1: 68850 }, { _0: 69635, _1: 69687 }, { _0: 69763, _1: 69807 }, { _0: 69840, _1: 69864 }, { _0: 69891, _1: 69926 }, { _0: 69968, _1: 70002 }, { _0: 70006, _1: 70006 }, { _0: 70019, _1: 70066 }, { _0: 70081, _1: 70084 }, { _0: 70106, _1: 70106 }, { _0: 70108, _1: 70108 }, { _0: 70144, _1: 70161 }, { _0: 70163, _1: 70187 }, { _0: 70272, _1: 70278 }, { _0: 70280, _1: 70280 }, { _0: 70282, _1: 70285 }, { _0: 70287, _1: 70301 }, { _0: 70303, _1: 70312 }, { _0: 70320, _1: 70366 }, { _0: 70405, _1: 70412 }, { _0: 70415, _1: 70416 }, { _0: 70419, _1: 70440 }, { _0: 70442, _1: 70448 }, { _0: 70450, _1: 70451 }, { _0: 70453, _1: 70457 }, { _0: 70461, _1: 70461 }, { _0: 70480, _1: 70480 }, { _0: 70493, _1: 70497 }, { _0: 70656, _1: 70708 }, { _0: 70727, _1: 70730 }, { _0: 70784, _1: 70831 }, { _0: 70852, _1: 70853 }, { _0: 70855, _1: 70855 }, { _0: 71040, _1: 71086 }, { _0: 71128, _1: 71131 }, { _0: 71168, _1: 71215 }, { _0: 71236, _1: 71236 }, { _0: 71296, _1: 71338 }, { _0: 71424, _1: 71449 }, { _0: 71840, _1: 71903 }, { _0: 71935, _1: 71935 }, { _0: 72192, _1: 72192 }, { _0: 72203, _1: 72242 }, { _0: 72250, _1: 72250 }, { _0: 72272, _1: 72272 }, { _0: 72284, _1: 72323 }, { _0: 72326, _1: 72329 }, { _0: 72384, _1: 72440 }, { _0: 72704, _1: 72712 }, { _0: 72714, _1: 72750 }, { _0: 72768, _1: 72768 }, { _0: 72818, _1: 72847 }, { _0: 72960, _1: 72966 }, { _0: 72968, _1: 72969 }, { _0: 72971, _1: 73008 }, { _0: 73030, _1: 73030 }, { _0: 73728, _1: 74649 }, { _0: 74752, _1: 74862 }, { _0: 74880, _1: 75075 }, { _0: 77824, _1: 78894 }, { _0: 82944, _1: 83526 }, { _0: 92160, _1: 92728 }, { _0: 92736, _1: 92766 }, { _0: 92880, _1: 92909 }, { _0: 92928, _1: 92975 }, { _0: 92992, _1: 92995 }, { _0: 93027, _1: 93047 }, { _0: 93053, _1: 93071 }, { _0: 93952, _1: 94020 }, { _0: 94032, _1: 94032 }, { _0: 94099, _1: 94111 }, { _0: 94176, _1: 94177 }, { _0: 94208, _1: 100332 }, { _0: 100352, _1: 101106 }, { _0: 110592, _1: 110878 }, { _0: 110960, _1: 111355 }, { _0: 113664, _1: 113770 }, { _0: 113776, _1: 113788 }, { _0: 113792, _1: 113800 }, { _0: 113808, _1: 113817 }, { _0: 119808, _1: 119892 }, { _0: 119894, _1: 119964 }, { _0: 119966, _1: 119967 }, { _0: 119970, _1: 119970 }, { _0: 119973, _1: 119974 }, { _0: 119977, _1: 119980 }, { _0: 119982, _1: 119993 }, { _0: 119995, _1: 119995 }, { _0: 119997, _1: 120003 }, { _0: 120005, _1: 120069 }, { _0: 120071, _1: 120074 }, { _0: 120077, _1: 120084 }, { _0: 120086, _1: 120092 }, { _0: 120094, _1: 120121 }, { _0: 120123, _1: 120126 }, { _0: 120128, _1: 120132 }, { _0: 120134, _1: 120134 }, { _0: 120138, _1: 120144 }, { _0: 120146, _1: 120485 }, { _0: 120488, _1: 120512 }, { _0: 120514, _1: 120538 }, { _0: 120540, _1: 120570 }, { _0: 120572, _1: 120596 }, { _0: 120598, _1: 120628 }, { _0: 120630, _1: 120654 }, { _0: 120656, _1: 120686 }, { _0: 120688, _1: 120712 }, { _0: 120714, _1: 120744 }, { _0: 120746, _1: 120770 }, { _0: 120772, _1: 120779 }, { _0: 124928, _1: 125124 }, { _0: 125184, _1: 125251 }, { _0: 126464, _1: 126467 }, { _0: 126469, _1: 126495 }, { _0: 126497, _1: 126498 }, { _0: 126500, _1: 126500 }, { _0: 126503, _1: 126503 }, { _0: 126505, _1: 126514 }, { _0: 126516, _1: 126519 }, { _0: 126521, _1: 126521 }, { _0: 126523, _1: 126523 }, { _0: 126530, _1: 126530 }, { _0: 126535, _1: 126535 }, { _0: 126537, _1: 126537 }, { _0: 126539, _1: 126539 }, { _0: 126541, _1: 126543 }, { _0: 126545, _1: 126546 }, { _0: 126548, _1: 126548 }, { _0: 126551, _1: 126551 }, { _0: 126553, _1: 126553 }, { _0: 126555, _1: 126555 }, { _0: 126557, _1: 126557 }, { _0: 126559, _1: 126559 }, { _0: 126561, _1: 126562 }, { _0: 126564, _1: 126564 }, { _0: 126567, _1: 126570 }, { _0: 126572, _1: 126578 }, { _0: 126580, _1: 126583 }, { _0: 126585, _1: 126588 }, { _0: 126590, _1: 126590 }, { _0: 126592, _1: 126601 }, { _0: 126603, _1: 126619 }, { _0: 126625, _1: 126627 }, { _0: 126629, _1: 126633 }, { _0: 126635, _1: 126651 }, { _0: 131072, _1: 173782 }, { _0: 173824, _1: 177972 }, { _0: 177984, _1: 178205 }, { _0: 178208, _1: 183969 }, { _0: 183984, _1: 191456 }, { _0: 194560, _1: 195101 }];
const moonbitlang$x$json5$$non_ascii_id_continue = [{ _0: 170, _1: 170 }, { _0: 181, _1: 181 }, { _0: 186, _1: 186 }, { _0: 192, _1: 214 }, { _0: 216, _1: 246 }, { _0: 248, _1: 705 }, { _0: 710, _1: 721 }, { _0: 736, _1: 740 }, { _0: 748, _1: 748 }, { _0: 750, _1: 750 }, { _0: 768, _1: 884 }, { _0: 886, _1: 887 }, { _0: 890, _1: 893 }, { _0: 895, _1: 895 }, { _0: 902, _1: 902 }, { _0: 904, _1: 906 }, { _0: 908, _1: 908 }, { _0: 910, _1: 929 }, { _0: 931, _1: 1013 }, { _0: 1015, _1: 1153 }, { _0: 1155, _1: 1159 }, { _0: 1162, _1: 1327 }, { _0: 1329, _1: 1366 }, { _0: 1369, _1: 1369 }, { _0: 1377, _1: 1415 }, { _0: 1425, _1: 1469 }, { _0: 1471, _1: 1471 }, { _0: 1473, _1: 1474 }, { _0: 1476, _1: 1477 }, { _0: 1479, _1: 1479 }, { _0: 1488, _1: 1514 }, { _0: 1520, _1: 1522 }, { _0: 1552, _1: 1562 }, { _0: 1568, _1: 1641 }, { _0: 1646, _1: 1747 }, { _0: 1749, _1: 1756 }, { _0: 1759, _1: 1768 }, { _0: 1770, _1: 1788 }, { _0: 1791, _1: 1791 }, { _0: 1808, _1: 1866 }, { _0: 1869, _1: 1969 }, { _0: 1984, _1: 2037 }, { _0: 2042, _1: 2042 }, { _0: 2048, _1: 2093 }, { _0: 2112, _1: 2139 }, { _0: 2144, _1: 2154 }, { _0: 2208, _1: 2228 }, { _0: 2230, _1: 2237 }, { _0: 2260, _1: 2273 }, { _0: 2275, _1: 2403 }, { _0: 2406, _1: 2415 }, { _0: 2417, _1: 2435 }, { _0: 2437, _1: 2444 }, { _0: 2447, _1: 2448 }, { _0: 2451, _1: 2472 }, { _0: 2474, _1: 2480 }, { _0: 2482, _1: 2482 }, { _0: 2486, _1: 2489 }, { _0: 2492, _1: 2500 }, { _0: 2503, _1: 2504 }, { _0: 2507, _1: 2510 }, { _0: 2519, _1: 2519 }, { _0: 2524, _1: 2525 }, { _0: 2527, _1: 2531 }, { _0: 2534, _1: 2545 }, { _0: 2556, _1: 2556 }, { _0: 2561, _1: 2563 }, { _0: 2565, _1: 2570 }, { _0: 2575, _1: 2576 }, { _0: 2579, _1: 2600 }, { _0: 2602, _1: 2608 }, { _0: 2610, _1: 2611 }, { _0: 2613, _1: 2614 }, { _0: 2616, _1: 2617 }, { _0: 2620, _1: 2620 }, { _0: 2622, _1: 2626 }, { _0: 2631, _1: 2632 }, { _0: 2635, _1: 2637 }, { _0: 2641, _1: 2641 }, { _0: 2649, _1: 2652 }, { _0: 2654, _1: 2654 }, { _0: 2662, _1: 2677 }, { _0: 2689, _1: 2691 }, { _0: 2693, _1: 2701 }, { _0: 2703, _1: 2705 }, { _0: 2707, _1: 2728 }, { _0: 2730, _1: 2736 }, { _0: 2738, _1: 2739 }, { _0: 2741, _1: 2745 }, { _0: 2748, _1: 2757 }, { _0: 2759, _1: 2761 }, { _0: 2763, _1: 2765 }, { _0: 2768, _1: 2768 }, { _0: 2784, _1: 2787 }, { _0: 2790, _1: 2799 }, { _0: 2809, _1: 2815 }, { _0: 2817, _1: 2819 }, { _0: 2821, _1: 2828 }, { _0: 2831, _1: 2832 }, { _0: 2835, _1: 2856 }, { _0: 2858, _1: 2864 }, { _0: 2866, _1: 2867 }, { _0: 2869, _1: 2873 }, { _0: 2876, _1: 2884 }, { _0: 2887, _1: 2888 }, { _0: 2891, _1: 2893 }, { _0: 2902, _1: 2903 }, { _0: 2908, _1: 2909 }, { _0: 2911, _1: 2915 }, { _0: 2918, _1: 2927 }, { _0: 2929, _1: 2929 }, { _0: 2946, _1: 2947 }, { _0: 2949, _1: 2954 }, { _0: 2958, _1: 2960 }, { _0: 2962, _1: 2965 }, { _0: 2969, _1: 2970 }, { _0: 2972, _1: 2972 }, { _0: 2974, _1: 2975 }, { _0: 2979, _1: 2980 }, { _0: 2984, _1: 2986 }, { _0: 2990, _1: 3001 }, { _0: 3006, _1: 3010 }, { _0: 3014, _1: 3016 }, { _0: 3018, _1: 3021 }, { _0: 3024, _1: 3024 }, { _0: 3031, _1: 3031 }, { _0: 3046, _1: 3055 }, { _0: 3072, _1: 3075 }, { _0: 3077, _1: 3084 }, { _0: 3086, _1: 3088 }, { _0: 3090, _1: 3112 }, { _0: 3114, _1: 3129 }, { _0: 3133, _1: 3140 }, { _0: 3142, _1: 3144 }, { _0: 3146, _1: 3149 }, { _0: 3157, _1: 3158 }, { _0: 3160, _1: 3162 }, { _0: 3168, _1: 3171 }, { _0: 3174, _1: 3183 }, { _0: 3200, _1: 3203 }, { _0: 3205, _1: 3212 }, { _0: 3214, _1: 3216 }, { _0: 3218, _1: 3240 }, { _0: 3242, _1: 3251 }, { _0: 3253, _1: 3257 }, { _0: 3260, _1: 3268 }, { _0: 3270, _1: 3272 }, { _0: 3274, _1: 3277 }, { _0: 3285, _1: 3286 }, { _0: 3294, _1: 3294 }, { _0: 3296, _1: 3299 }, { _0: 3302, _1: 3311 }, { _0: 3313, _1: 3314 }, { _0: 3328, _1: 3331 }, { _0: 3333, _1: 3340 }, { _0: 3342, _1: 3344 }, { _0: 3346, _1: 3396 }, { _0: 3398, _1: 3400 }, { _0: 3402, _1: 3406 }, { _0: 3412, _1: 3415 }, { _0: 3423, _1: 3427 }, { _0: 3430, _1: 3439 }, { _0: 3450, _1: 3455 }, { _0: 3458, _1: 3459 }, { _0: 3461, _1: 3478 }, { _0: 3482, _1: 3505 }, { _0: 3507, _1: 3515 }, { _0: 3517, _1: 3517 }, { _0: 3520, _1: 3526 }, { _0: 3530, _1: 3530 }, { _0: 3535, _1: 3540 }, { _0: 3542, _1: 3542 }, { _0: 3544, _1: 3551 }, { _0: 3558, _1: 3567 }, { _0: 3570, _1: 3571 }, { _0: 3585, _1: 3642 }, { _0: 3648, _1: 3662 }, { _0: 3664, _1: 3673 }, { _0: 3713, _1: 3714 }, { _0: 3716, _1: 3716 }, { _0: 3719, _1: 3720 }, { _0: 3722, _1: 3722 }, { _0: 3725, _1: 3725 }, { _0: 3732, _1: 3735 }, { _0: 3737, _1: 3743 }, { _0: 3745, _1: 3747 }, { _0: 3749, _1: 3749 }, { _0: 3751, _1: 3751 }, { _0: 3754, _1: 3755 }, { _0: 3757, _1: 3769 }, { _0: 3771, _1: 3773 }, { _0: 3776, _1: 3780 }, { _0: 3782, _1: 3782 }, { _0: 3784, _1: 3789 }, { _0: 3792, _1: 3801 }, { _0: 3804, _1: 3807 }, { _0: 3840, _1: 3840 }, { _0: 3864, _1: 3865 }, { _0: 3872, _1: 3881 }, { _0: 3893, _1: 3893 }, { _0: 3895, _1: 3895 }, { _0: 3897, _1: 3897 }, { _0: 3902, _1: 3911 }, { _0: 3913, _1: 3948 }, { _0: 3953, _1: 3972 }, { _0: 3974, _1: 3991 }, { _0: 3993, _1: 4028 }, { _0: 4038, _1: 4038 }, { _0: 4096, _1: 4169 }, { _0: 4176, _1: 4253 }, { _0: 4256, _1: 4293 }, { _0: 4295, _1: 4295 }, { _0: 4301, _1: 4301 }, { _0: 4304, _1: 4346 }, { _0: 4348, _1: 4680 }, { _0: 4682, _1: 4685 }, { _0: 4688, _1: 4694 }, { _0: 4696, _1: 4696 }, { _0: 4698, _1: 4701 }, { _0: 4704, _1: 4744 }, { _0: 4746, _1: 4749 }, { _0: 4752, _1: 4784 }, { _0: 4786, _1: 4789 }, { _0: 4792, _1: 4798 }, { _0: 4800, _1: 4800 }, { _0: 4802, _1: 4805 }, { _0: 4808, _1: 4822 }, { _0: 4824, _1: 4880 }, { _0: 4882, _1: 4885 }, { _0: 4888, _1: 4954 }, { _0: 4957, _1: 4959 }, { _0: 4992, _1: 5007 }, { _0: 5024, _1: 5109 }, { _0: 5112, _1: 5117 }, { _0: 5121, _1: 5740 }, { _0: 5743, _1: 5759 }, { _0: 5761, _1: 5786 }, { _0: 5792, _1: 5866 }, { _0: 5870, _1: 5880 }, { _0: 5888, _1: 5900 }, { _0: 5902, _1: 5908 }, { _0: 5920, _1: 5940 }, { _0: 5952, _1: 5971 }, { _0: 5984, _1: 5996 }, { _0: 5998, _1: 6000 }, { _0: 6002, _1: 6003 }, { _0: 6016, _1: 6099 }, { _0: 6103, _1: 6103 }, { _0: 6108, _1: 6109 }, { _0: 6112, _1: 6121 }, { _0: 6155, _1: 6157 }, { _0: 6160, _1: 6169 }, { _0: 6176, _1: 6263 }, { _0: 6272, _1: 6314 }, { _0: 6320, _1: 6389 }, { _0: 6400, _1: 6430 }, { _0: 6432, _1: 6443 }, { _0: 6448, _1: 6459 }, { _0: 6470, _1: 6509 }, { _0: 6512, _1: 6516 }, { _0: 6528, _1: 6571 }, { _0: 6576, _1: 6601 }, { _0: 6608, _1: 6617 }, { _0: 6656, _1: 6683 }, { _0: 6688, _1: 6750 }, { _0: 6752, _1: 6780 }, { _0: 6783, _1: 6793 }, { _0: 6800, _1: 6809 }, { _0: 6823, _1: 6823 }, { _0: 6832, _1: 6845 }, { _0: 6912, _1: 6987 }, { _0: 6992, _1: 7001 }, { _0: 7019, _1: 7027 }, { _0: 7040, _1: 7155 }, { _0: 7168, _1: 7223 }, { _0: 7232, _1: 7241 }, { _0: 7245, _1: 7293 }, { _0: 7296, _1: 7304 }, { _0: 7376, _1: 7378 }, { _0: 7380, _1: 7417 }, { _0: 7424, _1: 7673 }, { _0: 7675, _1: 7957 }, { _0: 7960, _1: 7965 }, { _0: 7968, _1: 8005 }, { _0: 8008, _1: 8013 }, { _0: 8016, _1: 8023 }, { _0: 8025, _1: 8025 }, { _0: 8027, _1: 8027 }, { _0: 8029, _1: 8029 }, { _0: 8031, _1: 8061 }, { _0: 8064, _1: 8116 }, { _0: 8118, _1: 8124 }, { _0: 8126, _1: 8126 }, { _0: 8130, _1: 8132 }, { _0: 8134, _1: 8140 }, { _0: 8144, _1: 8147 }, { _0: 8150, _1: 8155 }, { _0: 8160, _1: 8172 }, { _0: 8178, _1: 8180 }, { _0: 8182, _1: 8188 }, { _0: 8204, _1: 8205 }, { _0: 8255, _1: 8256 }, { _0: 8276, _1: 8276 }, { _0: 8305, _1: 8305 }, { _0: 8319, _1: 8319 }, { _0: 8336, _1: 8348 }, { _0: 8400, _1: 8412 }, { _0: 8417, _1: 8417 }, { _0: 8421, _1: 8432 }, { _0: 8450, _1: 8450 }, { _0: 8455, _1: 8455 }, { _0: 8458, _1: 8467 }, { _0: 8469, _1: 8469 }, { _0: 8473, _1: 8477 }, { _0: 8484, _1: 8484 }, { _0: 8486, _1: 8486 }, { _0: 8488, _1: 8488 }, { _0: 8490, _1: 8493 }, { _0: 8495, _1: 8505 }, { _0: 8508, _1: 8511 }, { _0: 8517, _1: 8521 }, { _0: 8526, _1: 8526 }, { _0: 8544, _1: 8584 }, { _0: 11264, _1: 11310 }, { _0: 11312, _1: 11358 }, { _0: 11360, _1: 11492 }, { _0: 11499, _1: 11507 }, { _0: 11520, _1: 11557 }, { _0: 11559, _1: 11559 }, { _0: 11565, _1: 11565 }, { _0: 11568, _1: 11623 }, { _0: 11631, _1: 11631 }, { _0: 11647, _1: 11670 }, { _0: 11680, _1: 11686 }, { _0: 11688, _1: 11694 }, { _0: 11696, _1: 11702 }, { _0: 11704, _1: 11710 }, { _0: 11712, _1: 11718 }, { _0: 11720, _1: 11726 }, { _0: 11728, _1: 11734 }, { _0: 11736, _1: 11742 }, { _0: 11744, _1: 11775 }, { _0: 11823, _1: 11823 }, { _0: 12293, _1: 12295 }, { _0: 12321, _1: 12335 }, { _0: 12337, _1: 12341 }, { _0: 12344, _1: 12348 }, { _0: 12353, _1: 12438 }, { _0: 12441, _1: 12442 }, { _0: 12445, _1: 12447 }, { _0: 12449, _1: 12538 }, { _0: 12540, _1: 12543 }, { _0: 12549, _1: 12590 }, { _0: 12593, _1: 12686 }, { _0: 12704, _1: 12730 }, { _0: 12784, _1: 12799 }, { _0: 13312, _1: 19893 }, { _0: 19968, _1: 40938 }, { _0: 40960, _1: 42124 }, { _0: 42192, _1: 42237 }, { _0: 42240, _1: 42508 }, { _0: 42512, _1: 42539 }, { _0: 42560, _1: 42607 }, { _0: 42612, _1: 42621 }, { _0: 42623, _1: 42737 }, { _0: 42775, _1: 42783 }, { _0: 42786, _1: 42888 }, { _0: 42891, _1: 42926 }, { _0: 42928, _1: 42935 }, { _0: 42999, _1: 43047 }, { _0: 43072, _1: 43123 }, { _0: 43136, _1: 43205 }, { _0: 43216, _1: 43225 }, { _0: 43232, _1: 43255 }, { _0: 43259, _1: 43259 }, { _0: 43261, _1: 43261 }, { _0: 43264, _1: 43309 }, { _0: 43312, _1: 43347 }, { _0: 43360, _1: 43388 }, { _0: 43392, _1: 43456 }, { _0: 43471, _1: 43481 }, { _0: 43488, _1: 43518 }, { _0: 43520, _1: 43574 }, { _0: 43584, _1: 43597 }, { _0: 43600, _1: 43609 }, { _0: 43616, _1: 43638 }, { _0: 43642, _1: 43714 }, { _0: 43739, _1: 43741 }, { _0: 43744, _1: 43759 }, { _0: 43762, _1: 43766 }, { _0: 43777, _1: 43782 }, { _0: 43785, _1: 43790 }, { _0: 43793, _1: 43798 }, { _0: 43808, _1: 43814 }, { _0: 43816, _1: 43822 }, { _0: 43824, _1: 43866 }, { _0: 43868, _1: 43877 }, { _0: 43888, _1: 44010 }, { _0: 44012, _1: 44013 }, { _0: 44016, _1: 44025 }, { _0: 44032, _1: 55203 }, { _0: 55216, _1: 55238 }, { _0: 55243, _1: 55291 }, { _0: 63744, _1: 64109 }, { _0: 64112, _1: 64217 }, { _0: 64256, _1: 64262 }, { _0: 64275, _1: 64279 }, { _0: 64285, _1: 64296 }, { _0: 64298, _1: 64310 }, { _0: 64312, _1: 64316 }, { _0: 64318, _1: 64318 }, { _0: 64320, _1: 64321 }, { _0: 64323, _1: 64324 }, { _0: 64326, _1: 64433 }, { _0: 64467, _1: 64829 }, { _0: 64848, _1: 64911 }, { _0: 64914, _1: 64967 }, { _0: 65008, _1: 65019 }, { _0: 65024, _1: 65039 }, { _0: 65056, _1: 65071 }, { _0: 65075, _1: 65076 }, { _0: 65101, _1: 65103 }, { _0: 65136, _1: 65140 }, { _0: 65142, _1: 65276 }, { _0: 65296, _1: 65305 }, { _0: 65313, _1: 65338 }, { _0: 65343, _1: 65343 }, { _0: 65345, _1: 65370 }, { _0: 65382, _1: 65470 }, { _0: 65474, _1: 65479 }, { _0: 65482, _1: 65487 }, { _0: 65490, _1: 65495 }, { _0: 65498, _1: 65500 }, { _0: 65536, _1: 65547 }, { _0: 65549, _1: 65574 }, { _0: 65576, _1: 65594 }, { _0: 65596, _1: 65597 }, { _0: 65599, _1: 65613 }, { _0: 65616, _1: 65629 }, { _0: 65664, _1: 65786 }, { _0: 65856, _1: 65908 }, { _0: 66045, _1: 66045 }, { _0: 66176, _1: 66204 }, { _0: 66208, _1: 66256 }, { _0: 66272, _1: 66272 }, { _0: 66304, _1: 66335 }, { _0: 66349, _1: 66378 }, { _0: 66384, _1: 66426 }, { _0: 66432, _1: 66461 }, { _0: 66464, _1: 66499 }, { _0: 66504, _1: 66511 }, { _0: 66513, _1: 66517 }, { _0: 66560, _1: 66717 }, { _0: 66720, _1: 66729 }, { _0: 66736, _1: 66771 }, { _0: 66776, _1: 66811 }, { _0: 66816, _1: 66855 }, { _0: 66864, _1: 66915 }, { _0: 67072, _1: 67382 }, { _0: 67392, _1: 67413 }, { _0: 67424, _1: 67431 }, { _0: 67584, _1: 67589 }, { _0: 67592, _1: 67592 }, { _0: 67594, _1: 67637 }, { _0: 67639, _1: 67640 }, { _0: 67644, _1: 67644 }, { _0: 67647, _1: 67669 }, { _0: 67680, _1: 67702 }, { _0: 67712, _1: 67742 }, { _0: 67808, _1: 67826 }, { _0: 67828, _1: 67829 }, { _0: 67840, _1: 67861 }, { _0: 67872, _1: 67897 }, { _0: 67968, _1: 68023 }, { _0: 68030, _1: 68031 }, { _0: 68096, _1: 68099 }, { _0: 68101, _1: 68102 }, { _0: 68108, _1: 68115 }, { _0: 68117, _1: 68119 }, { _0: 68121, _1: 68147 }, { _0: 68152, _1: 68154 }, { _0: 68159, _1: 68159 }, { _0: 68192, _1: 68220 }, { _0: 68224, _1: 68252 }, { _0: 68288, _1: 68295 }, { _0: 68297, _1: 68326 }, { _0: 68352, _1: 68405 }, { _0: 68416, _1: 68437 }, { _0: 68448, _1: 68466 }, { _0: 68480, _1: 68497 }, { _0: 68608, _1: 68680 }, { _0: 68736, _1: 68786 }, { _0: 68800, _1: 68850 }, { _0: 69632, _1: 69702 }, { _0: 69734, _1: 69743 }, { _0: 69759, _1: 69818 }, { _0: 69840, _1: 69864 }, { _0: 69872, _1: 69881 }, { _0: 69888, _1: 69940 }, { _0: 69942, _1: 69951 }, { _0: 69968, _1: 70003 }, { _0: 70006, _1: 70006 }, { _0: 70016, _1: 70084 }, { _0: 70090, _1: 70092 }, { _0: 70096, _1: 70106 }, { _0: 70108, _1: 70108 }, { _0: 70144, _1: 70161 }, { _0: 70163, _1: 70199 }, { _0: 70206, _1: 70206 }, { _0: 70272, _1: 70278 }, { _0: 70280, _1: 70280 }, { _0: 70282, _1: 70285 }, { _0: 70287, _1: 70301 }, { _0: 70303, _1: 70312 }, { _0: 70320, _1: 70378 }, { _0: 70384, _1: 70393 }, { _0: 70400, _1: 70403 }, { _0: 70405, _1: 70412 }, { _0: 70415, _1: 70416 }, { _0: 70419, _1: 70440 }, { _0: 70442, _1: 70448 }, { _0: 70450, _1: 70451 }, { _0: 70453, _1: 70457 }, { _0: 70460, _1: 70468 }, { _0: 70471, _1: 70472 }, { _0: 70475, _1: 70477 }, { _0: 70480, _1: 70480 }, { _0: 70487, _1: 70487 }, { _0: 70493, _1: 70499 }, { _0: 70502, _1: 70508 }, { _0: 70512, _1: 70516 }, { _0: 70656, _1: 70730 }, { _0: 70736, _1: 70745 }, { _0: 70784, _1: 70853 }, { _0: 70855, _1: 70855 }, { _0: 70864, _1: 70873 }, { _0: 71040, _1: 71093 }, { _0: 71096, _1: 71104 }, { _0: 71128, _1: 71133 }, { _0: 71168, _1: 71232 }, { _0: 71236, _1: 71236 }, { _0: 71248, _1: 71257 }, { _0: 71296, _1: 71351 }, { _0: 71360, _1: 71369 }, { _0: 71424, _1: 71449 }, { _0: 71453, _1: 71467 }, { _0: 71472, _1: 71481 }, { _0: 71840, _1: 71913 }, { _0: 71935, _1: 71935 }, { _0: 72192, _1: 72254 }, { _0: 72263, _1: 72263 }, { _0: 72272, _1: 72323 }, { _0: 72326, _1: 72345 }, { _0: 72384, _1: 72440 }, { _0: 72704, _1: 72712 }, { _0: 72714, _1: 72758 }, { _0: 72760, _1: 72768 }, { _0: 72784, _1: 72793 }, { _0: 72818, _1: 72847 }, { _0: 72850, _1: 72871 }, { _0: 72873, _1: 72886 }, { _0: 72960, _1: 72966 }, { _0: 72968, _1: 72969 }, { _0: 72971, _1: 73014 }, { _0: 73018, _1: 73018 }, { _0: 73020, _1: 73021 }, { _0: 73023, _1: 73031 }, { _0: 73040, _1: 73049 }, { _0: 73728, _1: 74649 }, { _0: 74752, _1: 74862 }, { _0: 74880, _1: 75075 }, { _0: 77824, _1: 78894 }, { _0: 82944, _1: 83526 }, { _0: 92160, _1: 92728 }, { _0: 92736, _1: 92766 }, { _0: 92768, _1: 92777 }, { _0: 92880, _1: 92909 }, { _0: 92912, _1: 92916 }, { _0: 92928, _1: 92982 }, { _0: 92992, _1: 92995 }, { _0: 93008, _1: 93017 }, { _0: 93027, _1: 93047 }, { _0: 93053, _1: 93071 }, { _0: 93952, _1: 94020 }, { _0: 94032, _1: 94078 }, { _0: 94095, _1: 94111 }, { _0: 94176, _1: 94177 }, { _0: 94208, _1: 100332 }, { _0: 100352, _1: 101106 }, { _0: 110592, _1: 110878 }, { _0: 110960, _1: 111355 }, { _0: 113664, _1: 113770 }, { _0: 113776, _1: 113788 }, { _0: 113792, _1: 113800 }, { _0: 113808, _1: 113817 }, { _0: 113821, _1: 113822 }, { _0: 119141, _1: 119145 }, { _0: 119149, _1: 119154 }, { _0: 119163, _1: 119170 }, { _0: 119173, _1: 119179 }, { _0: 119210, _1: 119213 }, { _0: 119362, _1: 119364 }, { _0: 119808, _1: 119892 }, { _0: 119894, _1: 119964 }, { _0: 119966, _1: 119967 }, { _0: 119970, _1: 119970 }, { _0: 119973, _1: 119974 }, { _0: 119977, _1: 119980 }, { _0: 119982, _1: 119993 }, { _0: 119995, _1: 119995 }, { _0: 119997, _1: 120003 }, { _0: 120005, _1: 120069 }, { _0: 120071, _1: 120074 }, { _0: 120077, _1: 120084 }, { _0: 120086, _1: 120092 }, { _0: 120094, _1: 120121 }, { _0: 120123, _1: 120126 }, { _0: 120128, _1: 120132 }, { _0: 120134, _1: 120134 }, { _0: 120138, _1: 120144 }, { _0: 120146, _1: 120485 }, { _0: 120488, _1: 120512 }, { _0: 120514, _1: 120538 }, { _0: 120540, _1: 120570 }, { _0: 120572, _1: 120596 }, { _0: 120598, _1: 120628 }, { _0: 120630, _1: 120654 }, { _0: 120656, _1: 120686 }, { _0: 120688, _1: 120712 }, { _0: 120714, _1: 120744 }, { _0: 120746, _1: 120770 }, { _0: 120772, _1: 120779 }, { _0: 120782, _1: 120831 }, { _0: 121344, _1: 121398 }, { _0: 121403, _1: 121452 }, { _0: 121461, _1: 121461 }, { _0: 121476, _1: 121476 }, { _0: 121499, _1: 121503 }, { _0: 121505, _1: 121519 }, { _0: 122880, _1: 122886 }, { _0: 122888, _1: 122904 }, { _0: 122907, _1: 122913 }, { _0: 122915, _1: 122916 }, { _0: 122918, _1: 122922 }, { _0: 124928, _1: 125124 }, { _0: 125136, _1: 125142 }, { _0: 125184, _1: 125258 }, { _0: 125264, _1: 125273 }, { _0: 126464, _1: 126467 }, { _0: 126469, _1: 126495 }, { _0: 126497, _1: 126498 }, { _0: 126500, _1: 126500 }, { _0: 126503, _1: 126503 }, { _0: 126505, _1: 126514 }, { _0: 126516, _1: 126519 }, { _0: 126521, _1: 126521 }, { _0: 126523, _1: 126523 }, { _0: 126530, _1: 126530 }, { _0: 126535, _1: 126535 }, { _0: 126537, _1: 126537 }, { _0: 126539, _1: 126539 }, { _0: 126541, _1: 126543 }, { _0: 126545, _1: 126546 }, { _0: 126548, _1: 126548 }, { _0: 126551, _1: 126551 }, { _0: 126553, _1: 126553 }, { _0: 126555, _1: 126555 }, { _0: 126557, _1: 126557 }, { _0: 126559, _1: 126559 }, { _0: 126561, _1: 126562 }, { _0: 126564, _1: 126564 }, { _0: 126567, _1: 126570 }, { _0: 126572, _1: 126578 }, { _0: 126580, _1: 126583 }, { _0: 126585, _1: 126588 }, { _0: 126590, _1: 126590 }, { _0: 126592, _1: 126601 }, { _0: 126603, _1: 126619 }, { _0: 126625, _1: 126627 }, { _0: 126629, _1: 126633 }, { _0: 126635, _1: 126651 }, { _0: 131072, _1: 173782 }, { _0: 173824, _1: 177972 }, { _0: 177984, _1: 178205 }, { _0: 178208, _1: 183969 }, { _0: 183984, _1: 191456 }, { _0: 194560, _1: 195101 }, { _0: 917760, _1: 917999 }];
const Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 0);
const moonbitlang$core$double$$min_value = moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370497L);
const moonbitlang$core$double$$max_value = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405311L);
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$6$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$7$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$Logger$write_object$8$(self, obj) {
  moonbitlang$core$builtin$$Show$output$8$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$9$(self, obj) {
  moonbitlang$core$builtin$$Show$output$10$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$11$(self, obj) {
  moonbitlang$core$builtin$$Show$output$11$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$5$(self, obj) {
  moonbitlang$core$builtin$$Show$output$5$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$12$(self, obj) {
  moonbitlang$core$builtin$$Show$output$12$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$13$(self, obj) {
  moonbitlang$core$builtin$$Show$output$14$(obj, self);
}
function moonbitlang$core$builtin$$op_ge$3$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$3$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_le$3$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$3$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_le$15$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$15$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_lt$3$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$3$(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$15$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$15$(self_, other) < 0;
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$16$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$3$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$3$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_gt$15$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$15$(self_, other) > 0;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at(self, index) {
  const c1 = self.charCodeAt(index);
  if (55296 <= c1 && c1 <= 56319) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$array$$Array$at$17$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$18$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$13$(self, index) {
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
function moonbitlang$core$array$$Array$at$4$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$19$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$20$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$21$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$22$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$16$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Show$output$14$(self, logger) {
  const _a = self._0;
  const _b = self._1;
  logger.method_0(logger.self, "(");
  moonbitlang$core$builtin$$Logger$write_object$8$(logger, _a);
  logger.method_0(logger.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$8$(logger, _b);
  logger.method_0(logger.self, ")");
}
function moonbitlang$core$builtin$$Hasher$combine$11$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$11$(value, self);
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hasher$new$46$inner(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hasher$new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = moonbitlang$core$builtin$$seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return moonbitlang$core$builtin$$Hasher$new$46$inner(seed);
}
function moonbitlang$core$builtin$$Hash$hash$23$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$11$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$24$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$8$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$25$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$26$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$1$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$27$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$28$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$29$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$30$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$31$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$32$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _p = { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ };
  if (self) {
    _p.method_0(_p.self, "true");
  } else {
    _p.method_0(_p.self, "false");
  }
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$33$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$34$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$35$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _p = { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ };
  _p.method_0(_p.self, "Revolute");
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$36$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$5$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$37$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$38$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$39$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$2$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$40$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Logger$write_iter$46$inner$12$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$12$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$12$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$Logger$write_iter$46$inner$5$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$5$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$5$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$Logger$write_iter$46$inner$13$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$13$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$13$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, num2);
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
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$4$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$int$$Int$to_uint64(self) {
  return moonbitlang$core$int$$Int$to_int64(self);
}
function moonbitlang$core$uint64$$UInt64$to_int(self) {
  const _p = self;
  return _p.lo;
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
function moonbitlang$core$builtin$$Logger$write_substring$16$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$to_hex$46$to_hex_digit$124$1943(i) {
  if (i < 10) {
    const _p = 48;
    const _p$2 = (i + _p | 0) & 255;
    return _p$2;
  } else {
    const _p = 97;
    const _p$2 = (i + _p | 0) & 255;
    const _p$3 = 10;
    const _p$4 = (_p$2 - _p$3 | 0) & 255;
    return _p$4;
  }
}
function moonbitlang$core$byte$$Byte$to_hex(b) {
  const _self = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _p = 16;
  moonbitlang$core$builtin$$Logger$write_char$16$(_self, moonbitlang$core$builtin$$to_hex$46$to_hex_digit$124$1943((b / _p | 0) & 255));
  const _p$2 = 16;
  moonbitlang$core$builtin$$Logger$write_char$16$(_self, moonbitlang$core$builtin$$to_hex$46$to_hex_digit$124$1943((b % _p$2 | 0) & 255));
  const _p$3 = _self;
  return _p$3.val;
}
function moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i) {
  const self = _env._1;
  const logger = _env._0;
  if (i > seg) {
    logger.method_1(logger.self, self, seg, i - seg | 0);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$Show$output$11$(self, logger) {
  logger.method_2(logger.self, 34);
  const _env = { _0: logger, _1: self };
  const len = self.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i);
      break;
    }
    const code = self.charCodeAt(i);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i);
          logger.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i);
          logger.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i);
          logger.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i);
          logger.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i);
            logger.method_0(logger.self, "\\u{");
            logger.method_0(logger.self, moonbitlang$core$byte$$Byte$to_hex(code & 255));
            logger.method_2(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    moonbitlang$core$builtin$$output$46$flush_segment$124$1933(_env, seg, i);
    logger.method_2(logger.self, 92);
    logger.method_2(logger.self, c);
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  logger.method_2(logger.self, 34);
}
function moonbitlang$core$builtin$$Show$output$41$(self, logger) {
  if (self === undefined) {
    logger.method_0(logger.self, "None");
    return;
  } else {
    const _Some = self;
    const _arg = _Some;
    logger.method_0(logger.self, "Some(");
    moonbitlang$core$builtin$$Logger$write_object$11$(logger, _arg);
    logger.method_0(logger.self, ")");
    return;
  }
}
function moonbitlang$core$array$$Array$iter$12$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$5$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$13$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Show$output$38$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$46$inner$12$(logger, moonbitlang$core$array$$Array$iter$12$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Show$output$42$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$46$inner$5$(logger, moonbitlang$core$array$$Array$iter$5$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Show$output$10$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$46$inner$13$(logger, moonbitlang$core$array$$Array$iter$13$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Eq$equal$41$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$43$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$44$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$equal$45$(_x, _y);
    }
  }
}
function moonbitlang$core$int$$Int$next_power_of_two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Map$new$46$inner$46$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$47$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$48$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$46$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$47$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$48$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$46$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$47$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$48$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$46$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$46$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$46$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$47$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$47$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$47$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$48$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$48$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$48$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$46$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$46$(self);
  }
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$46$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$46$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$47$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$47$(self);
  }
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$47$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$47$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$48$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$48$(self);
  }
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$48$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$48$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$46$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$46$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$47$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$47$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$48$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$48$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$46$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$46$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$set$47$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$47$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$set$48$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$48$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$from_array$46$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$46$(capacity);
  const _p$2 = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$46$(m, _p$4._0, _p$4._1);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$47$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$47$(capacity);
  const _p$2 = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$47$(m, _p$4._0, _p$4._1);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$48$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$at$46$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      $panic();
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Show$output$49$(self, logger) {
  logger.method_0(logger.self, "{");
  let _tmp = 0;
  let _tmp$2 = self.head;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    if (_param_1 === undefined) {
      logger.method_0(logger.self, "}");
      return;
    } else {
      const _Some = _param_1;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      if (_param_0 > 0) {
        logger.method_0(logger.self, ", ");
      }
      moonbitlang$core$builtin$$Logger$write_object$11$(logger, _key);
      logger.method_0(logger.self, ": ");
      moonbitlang$core$builtin$$Logger$write_object$5$(logger, _value);
      _tmp = _param_0 + 1 | 0;
      _tmp$2 = _next;
      continue;
    }
  }
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
function moonbitlang$core$double$$Double$convert_uint64(value) {
  return moonbitlang$core$builtin$$MyInt64$convert_to_double_u(value);
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$array$$Array$push$17$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$19$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$50$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$51$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$52$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$53$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$18$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$54$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$13$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$55$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$56$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$4$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$57$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$58$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$5$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$uint64$$UInt64$to_byte(self) {
  return moonbitlang$core$uint64$$UInt64$to_int(self) & 255;
}
function moonbitlang$core$byte$$Byte$to_int64(self) {
  return moonbitlang$core$int$$Int$to_int64(self);
}
function moonbitlang$core$builtin$$Neg$neg$59$(self) {
  return self.lo === 0 ? { hi: ~self.hi + 1 | 0, lo: 0 } : { hi: ~self.hi, lo: ~self.lo + 1 | 0 };
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$add$59$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$59$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$59$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$Div$div$59$(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
    const _ahi = self.hi;
    const _alo = self.lo;
    const _bhi = other.hi;
    const _blo = other.lo;
    const _func = exports.div_s;
    const lo = _func(_alo, _ahi, _blo, _bhi);
    const _func$2 = exports.get_high;
    const hi = _func$2();
    return { hi: hi, lo: lo };
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$MyInt64$div_u(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
    const _ahi = self.hi;
    const _alo = self.lo;
    const _bhi = other.hi;
    const _blo = other.lo;
    const _func = exports.div_u;
    const lo = _func(_alo, _ahi, _blo, _bhi);
    const _func$2 = exports.get_high;
    const hi = _func$2();
    return { hi: hi, lo: lo };
  } else {
    return $panic();
  }
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
function moonbitlang$core$builtin$$MyInt64$asr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >> shift$2, lo: self.lo >>> shift$2 | self.hi << (32 - shift$2 | 0) } : { hi: self.hi >> 31, lo: self.hi >> (shift$2 - 32 | 0) };
}
function moonbitlang$core$builtin$$Neg$neg$15$(self) {
  return moonbitlang$core$builtin$$Neg$neg$59$(self);
}
function moonbitlang$core$builtin$$Add$add$15$(self, other) {
  return moonbitlang$core$builtin$$Add$add$59$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$15$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$59$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$15$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$59$(self, other);
}
function moonbitlang$core$builtin$$Div$div$15$(self, other) {
  return moonbitlang$core$builtin$$Div$div$59$(self, other);
}
function moonbitlang$core$builtin$$BitAnd$land$15$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$15$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$builtin$$Shr$shr$15$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$asr(self, other);
}
function moonbitlang$core$builtin$$Shl$shl$15$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$15$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$Compare$compare$15$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$uint64$$UInt64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$builtin$$Add$add$3$(self, other) {
  return moonbitlang$core$builtin$$Add$add$59$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$3$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$59$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$3$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$59$(self, other);
}
function moonbitlang$core$builtin$$Div$div$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$div_u(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$3$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$builtin$$Shl$shl$3$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$3$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$uint64$$UInt64$clz(self) {
  const _p = self;
  return _p.hi !== 0 ? Math.clz32(_p.hi) : 32 + Math.clz32(_p.lo) | 0;
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  self.acc = Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end859 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end859) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$11$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$11$(input) {
  console.log(input);
}
function moonbitlang$core$array$$Array$new$46$inner$17$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$19$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$20$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$56$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$55$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$53$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$52$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$18$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$60$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$51$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$50$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$54$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$13$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$4$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$57$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$51$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$make$4$(len, elem) {
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
function moonbitlang$core$array$$Array$set$18$(self, index, value) {
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
function moonbitlang$core$array$$Array$set$4$(self, index, value) {
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
function moonbitlang$core$array$$Array$clear$51$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$51$(self, 0);
}
function moonbitlang$core$array$$Array$contains$61$(self, value) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      if (moonbitlang$core$builtin$$Eq$equal$61$(v, value)) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$double$$Double$floor(_tmp) {
  return Math.floor(_tmp);
}
function moonbitlang$core$builtin$$Mod$mod$8$(self, other) {
  return moonbitlang$core$double$$Double$mod_ffi(self, other);
}
function moonbitlang$core$builtin$$Show$output$8$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$builtin$$Show$to_string$58$(self) {
  return String.fromCodePoint(self);
}
function moonbitlang$core$builtin$$Show$output$26$(self, logger) {
  logger.method_0(logger.self, Error$$to_string(self));
}
function moonbitlang$core$builtin$$Show$output$5$(self, logger) {
  switch (self.$tag) {
    case 0: {
      logger.method_0(logger.self, "Null");
      return;
    }
    case 1: {
      logger.method_0(logger.self, "True");
      return;
    }
    case 2: {
      logger.method_0(logger.self, "False");
      return;
    }
    case 3: {
      const _Number = self;
      const _n = _Number._0;
      const _repr = _Number._1;
      logger.method_0(logger.self, "Number(");
      moonbitlang$core$builtin$$Show$output$8$(_n, logger);
      if (_repr === undefined) {
      } else {
        logger.method_0(logger.self, ", repr=");
        moonbitlang$core$builtin$$Show$output$41$(_repr, logger);
      }
      logger.method_0(logger.self, ")");
      return;
    }
    case 4: {
      const _String = self;
      const _s = _String._0;
      logger.method_0(logger.self, "String(");
      moonbitlang$core$builtin$$Show$output$11$(_s, logger);
      logger.method_0(logger.self, ")");
      return;
    }
    case 5: {
      const _Array = self;
      const _a = _Array._0;
      logger.method_0(logger.self, "Array(");
      moonbitlang$core$builtin$$Show$output$42$(_a, logger);
      logger.method_0(logger.self, ")");
      return;
    }
    default: {
      const _Object = self;
      const _o = _Object._0;
      logger.method_0(logger.self, "Object(");
      moonbitlang$core$builtin$$Show$output$49$(_o, logger);
      logger.method_0(logger.self, ")");
      return;
    }
  }
}
function moonbitlang$core$json$$Json$as_bool(self) {
  switch (self.$tag) {
    case 1: {
      return moonbitlang$core$json$$as_bool$46$constr$47$1110;
    }
    case 2: {
      return moonbitlang$core$json$$as_bool$46$constr$47$1111;
    }
    default: {
      return -1;
    }
  }
}
function moonbitlang$core$json$$Json$as_array(self) {
  if (self.$tag === 5) {
    const _Array = self;
    const _arr = _Array._0;
    return new Option$Some$5$(_arr);
  } else {
    return Option$None$5$;
  }
}
function moonbitlang$core$strconv$$range_err$6$() {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$8$() {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$62$() {
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$63$() {
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$64$() {
  return new Result$Err$10$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$check_underscore(str) {
  let rest;
  if (moonbitlang$core$string$$String$char_length_ge$46$inner(str.str, 1, str.start, str.end)) {
    const _x = moonbitlang$core$string$$String$unsafe_char_at(str.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 0, str.start, str.end));
    switch (_x) {
      case 43: {
        const _tmp = str.str;
        const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
        let _tmp$2;
        if (_bind === undefined) {
          _tmp$2 = str.end;
        } else {
          const _Some = _bind;
          _tmp$2 = _Some;
        }
        const _tmp$3 = _tmp$2;
        const _x$2 = { str: _tmp, start: _tmp$3, end: str.end };
        rest = _x$2;
        break;
      }
      case 45: {
        const _tmp$4 = str.str;
        const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
        let _tmp$5;
        if (_bind$2 === undefined) {
          _tmp$5 = str.end;
        } else {
          const _Some = _bind$2;
          _tmp$5 = _Some;
        }
        const _tmp$6 = _tmp$5;
        const _x$3 = { str: _tmp$4, start: _tmp$6, end: str.end };
        rest = _x$3;
        break;
      }
      default: {
        rest = str;
      }
    }
  } else {
    rest = str;
  }
  let _bind;
  let rest$2;
  _L: {
    _L$2: {
      let rest$3;
      _L$3: {
        _L$4: {
          let rest$4;
          _L$5: {
            _L$6: {
              let rest$5;
              _L$7: {
                if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest.str, 2, rest.start, rest.end)) {
                  const _x = moonbitlang$core$string$$String$unsafe_char_at(rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 0, rest.start, rest.end));
                  if (_x === 48) {
                    const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 1, rest.start, rest.end));
                    switch (_x$2) {
                      case 120: {
                        const _tmp = rest.str;
                        const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$2;
                        if (_bind$2 === undefined) {
                          _tmp$2 = rest.end;
                        } else {
                          const _Some = _bind$2;
                          _tmp$2 = _Some;
                        }
                        const _tmp$3 = _tmp$2;
                        const _x$3 = { str: _tmp, start: _tmp$3, end: rest.end };
                        rest$5 = _x$3;
                        break _L$7;
                      }
                      case 88: {
                        const _tmp$4 = rest.str;
                        const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$5;
                        if (_bind$3 === undefined) {
                          _tmp$5 = rest.end;
                        } else {
                          const _Some = _bind$3;
                          _tmp$5 = _Some;
                        }
                        const _tmp$6 = _tmp$5;
                        const _x$4 = { str: _tmp$4, start: _tmp$6, end: rest.end };
                        rest$5 = _x$4;
                        break _L$7;
                      }
                      case 111: {
                        const _tmp$7 = rest.str;
                        const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$8;
                        if (_bind$4 === undefined) {
                          _tmp$8 = rest.end;
                        } else {
                          const _Some = _bind$4;
                          _tmp$8 = _Some;
                        }
                        const _tmp$9 = _tmp$8;
                        const _x$5 = { str: _tmp$7, start: _tmp$9, end: rest.end };
                        rest$4 = _x$5;
                        break _L$6;
                      }
                      case 79: {
                        const _tmp$10 = rest.str;
                        const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$11;
                        if (_bind$5 === undefined) {
                          _tmp$11 = rest.end;
                        } else {
                          const _Some = _bind$5;
                          _tmp$11 = _Some;
                        }
                        const _tmp$12 = _tmp$11;
                        const _x$6 = { str: _tmp$10, start: _tmp$12, end: rest.end };
                        rest$4 = _x$6;
                        break _L$6;
                      }
                      case 98: {
                        const _tmp$13 = rest.str;
                        const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$14;
                        if (_bind$6 === undefined) {
                          _tmp$14 = rest.end;
                        } else {
                          const _Some = _bind$6;
                          _tmp$14 = _Some;
                        }
                        const _tmp$15 = _tmp$14;
                        const _x$7 = { str: _tmp$13, start: _tmp$15, end: rest.end };
                        rest$3 = _x$7;
                        break _L$4;
                      }
                      case 66: {
                        const _tmp$16 = rest.str;
                        const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$17;
                        if (_bind$7 === undefined) {
                          _tmp$17 = rest.end;
                        } else {
                          const _Some = _bind$7;
                          _tmp$17 = _Some;
                        }
                        const _tmp$18 = _tmp$17;
                        const _x$8 = { str: _tmp$16, start: _tmp$18, end: rest.end };
                        rest$3 = _x$8;
                        break _L$4;
                      }
                      default: {
                        rest$2 = rest;
                        break _L$2;
                      }
                    }
                  } else {
                    rest$2 = rest;
                    break _L$2;
                  }
                } else {
                  rest$2 = rest;
                  break _L$2;
                }
              }
              _bind = { _0: rest$5, _1: true, _2: true };
              break _L$5;
            }
            _bind = { _0: rest$4, _1: true, _2: false };
          }
          break _L$3;
        }
        _bind = { _0: rest$3, _1: true, _2: false };
      }
      break _L;
    }
    _bind = { _0: rest$2, _1: false, _2: false };
  }
  const _rest = _bind._0;
  const _allow_underscore = _bind._1;
  const _hex = _bind._2;
  let _tmp = _rest;
  let _tmp$2 = _allow_underscore;
  let _tmp$3 = false;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    const _param_2 = _tmp$3;
    let rest$3;
    let c;
    let follow_underscore;
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param_0.str, 0, _param_0.start, _param_0.end)) {
        return true;
      } else {
        if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            return false;
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param_0.end };
            rest$3 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$2;
          }
        } else {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            if (_param_1 === false) {
              return false;
            } else {
              const _tmp$4 = _param_0.str;
              const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$5;
              if (_bind$2 === undefined) {
                _tmp$5 = _param_0.end;
              } else {
                const _Some = _bind$2;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param_0.end };
              _tmp = _x$2;
              _tmp$2 = false;
              _tmp$3 = true;
              continue;
            }
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param_0.end };
            rest$3 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$2;
          }
        }
      }
    }
    if (c >= 48 && c <= 57 ? true : _hex && (c >= 97 && c <= 102 ? true : c >= 65 && c <= 70)) {
      _tmp = rest$3;
      _tmp$2 = true;
      _tmp$3 = false;
      continue;
    } else {
      if (follow_underscore) {
        return false;
      } else {
        _tmp = rest$3;
        _tmp$2 = false;
        _tmp$3 = false;
        continue;
      }
    }
  }
}
function moonbitlang$core$strconv$$Decimal$new_priv() {
  return { digits: $makebytes(800, 0), digits_num: 0, decimal_point: 0, negative: false, truncated: false };
}
function moonbitlang$core$strconv$$Decimal$trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      $bound_check(_tmp$2, _tmp$3);
      const _p = _tmp$2[_tmp$3];
      const _p$2 = 0;
      _tmp = _p === _p$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$parse_decimal_from_view(str) {
  const d = moonbitlang$core$strconv$$Decimal$new_priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(str.str, 1, str.start, str.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(str.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 0, str.start, str.end));
        switch (_x) {
          case 45: {
            const _tmp = str.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
            let _tmp$2;
            if (_bind === undefined) {
              _tmp$2 = str.end;
            } else {
              const _Some = _bind;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: str.end };
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            const _tmp$4 = str.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = str.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            rest = { str: _tmp$4, start: _tmp$6, end: str.end };
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param.str, 1, _param.start, _param.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
      if (_x === 95) {
        const _tmp$2 = _param.str;
        const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
        let _tmp$3;
        if (_bind === undefined) {
          _tmp$3 = _param.end;
        } else {
          const _Some = _bind;
          _tmp$3 = _Some;
        }
        const _tmp$4 = _tmp$3;
        const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
        _tmp = _x$2;
        continue;
      } else {
        if (_x === 46) {
          const _tmp$2 = _param.str;
          const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _tmp$4 = _tmp$3;
          const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
          if (!has_dp) {
            has_dp = true;
            d.decimal_point = d.digits_num;
            _tmp = _x$2;
            continue;
          } else {
            const _bind$2 = moonbitlang$core$strconv$$syntax_err$63$();
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              rest$2 = _ok._0;
              break;
            } else {
              return _bind$2;
            }
          }
        } else {
          if (_x >= 48 && _x <= 57) {
            const _tmp$2 = _param.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _tmp$4 = _tmp$3;
            const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
            has_digits = true;
            if (_x === 48 && d.digits_num === 0) {
              d.decimal_point = d.decimal_point - 1 | 0;
              _tmp = _x$2;
              continue;
            }
            if (d.digits_num < d.digits.length) {
              const _tmp$5 = d.digits;
              const _tmp$6 = d.digits_num;
              $bound_check(_tmp$5, _tmp$6);
              _tmp$5[_tmp$6] = (_x - 48 | 0) & 255;
              d.digits_num = d.digits_num + 1 | 0;
            } else {
              if (_x !== 48) {
                d.truncated = true;
              }
            }
            _tmp = _x$2;
            continue;
          } else {
            rest$2 = _param;
            break;
          }
        }
      }
    } else {
      rest$2 = _param;
      break;
    }
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest$2.str, 1, rest$2.start, rest$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 0, rest$2.start, rest$2.end));
          switch (_x) {
            case 101: {
              const _tmp$2 = rest$2.str;
              const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$3;
              if (_bind === undefined) {
                _tmp$3 = rest$2.end;
              } else {
                const _Some = _bind;
                _tmp$3 = _Some;
              }
              const _tmp$4 = _tmp$3;
              const _x$2 = { str: _tmp$2, start: _tmp$4, end: rest$2.end };
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _tmp$5 = rest$2.str;
              const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$6;
              if (_bind$2 === undefined) {
                _tmp$6 = rest$2.end;
              } else {
                const _Some = _bind$2;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$3 = { str: _tmp$5, start: _tmp$7, end: rest$2.end };
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest$4.str, 1, rest$4.start, rest$4.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$4.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$4.str, 0, rest$4.start, rest$4.end));
        switch (_x) {
          case 43: {
            const _tmp$2 = rest$4.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = rest$4.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _tmp$4 = _tmp$3;
            rest$5 = { str: _tmp$2, start: _tmp$4, end: rest$4.end };
            break;
          }
          case 45: {
            const _tmp$5 = rest$4.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$6;
            if (_bind$2 === undefined) {
              _tmp$6 = rest$4.end;
            } else {
              const _Some = _bind$2;
              _tmp$6 = _Some;
            }
            const _tmp$7 = _tmp$6;
            const _x$2 = { str: _tmp$5, start: _tmp$7, end: rest$4.end };
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest$5.str, 1, rest$5.start, rest$5.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$5.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$5.str, 0, rest$5.start, rest$5.end));
            if (_x >= 48 && _x <= 57) {
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const _param = _tmp$2;
                if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param.str, 1, _param.start, _param.end)) {
                  const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
                  if (_x$2 === 95) {
                    const _tmp$3 = _param.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
                    let _tmp$4;
                    if (_bind === undefined) {
                      _tmp$4 = _param.end;
                    } else {
                      const _Some = _bind;
                      _tmp$4 = _Some;
                    }
                    const _tmp$5 = _tmp$4;
                    const _x$3 = { str: _tmp$3, start: _tmp$5, end: _param.end };
                    _tmp$2 = _x$3;
                    continue;
                  } else {
                    if (_x$2 >= 48 && _x$2 <= 57) {
                      const _tmp$3 = _param.str;
                      const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
                      let _tmp$4;
                      if (_bind === undefined) {
                        _tmp$4 = _param.end;
                      } else {
                        const _Some = _bind;
                        _tmp$4 = _Some;
                      }
                      const _tmp$5 = _tmp$4;
                      const _x$3 = { str: _tmp$3, start: _tmp$5, end: _param.end };
                      exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      rest$6 = _param;
                      break;
                    }
                  }
                } else {
                  rest$6 = _param;
                  break;
                }
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = moonbitlang$core$strconv$$syntax_err$63$();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(rest$3.str, 0, rest$3.start, rest$3.end)) {
      moonbitlang$core$strconv$$Decimal$trim(d);
      return new Result$Ok$10$(d);
    } else {
      return moonbitlang$core$strconv$$syntax_err$64$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$64$();
  }
}
function moonbitlang$core$strconv$$parse_decimal_priv(str) {
  return moonbitlang$core$strconv$$parse_decimal_from_view(str);
}
function moonbitlang$core$strconv$$parse_inf_nan(rest) {
  let _bind;
  let rest$2;
  _L: {
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest.str, 1, rest.start, rest.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 0, rest.start, rest.end));
        switch (_x) {
          case 45: {
            const _tmp = rest.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 1, rest.start, rest.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = rest.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: rest.end };
            _bind = { _0: false, _1: _x$2 };
            break;
          }
          case 43: {
            const _tmp$4 = rest.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 1, rest.start, rest.end);
            let _tmp$5;
            if (_bind$3 === undefined) {
              _tmp$5 = rest.end;
            } else {
              const _Some = _bind$3;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: rest.end };
            rest$2 = _x$3;
            break _L$2;
          }
          default: {
            rest$2 = rest;
            break _L$2;
          }
        }
      } else {
        rest$2 = rest;
        break _L$2;
      }
      break _L;
    }
    _bind = { _0: true, _1: rest$2 };
  }
  const _pos = _bind._0;
  const _rest = _bind._1;
  _L$2: {
    let rest$3;
    _L$3: {
      _L$4: {
        if (moonbitlang$core$string$$String$char_length_eq$46$inner(_rest.str, 3, _rest.start, _rest.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 0, _rest.start, _rest.end));
          switch (_x) {
            case 110: {
              const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 1, _rest.start, _rest.end));
              switch (_x$2) {
                case 97: {
                  const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$3) {
                    case 110: {
                      break _L$4;
                    }
                    case 78: {
                      break _L$4;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                case 65: {
                  const _x$4 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$4) {
                    case 110: {
                      break _L$4;
                    }
                    case 78: {
                      break _L$4;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                default: {
                  break _L$2;
                }
              }
            }
            case 78: {
              const _x$5 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 1, _rest.start, _rest.end));
              switch (_x$5) {
                case 97: {
                  const _x$6 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$6) {
                    case 110: {
                      break _L$4;
                    }
                    case 78: {
                      break _L$4;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                case 65: {
                  const _x$7 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$7) {
                    case 110: {
                      break _L$4;
                    }
                    case 78: {
                      break _L$4;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                default: {
                  break _L$2;
                }
              }
            }
            case 105: {
              const _x$8 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 1, _rest.start, _rest.end));
              switch (_x$8) {
                case 110: {
                  const _x$9 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$9) {
                    case 102: {
                      const _tmp = _rest.str;
                      const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$2;
                      if (_bind$2 === undefined) {
                        _tmp$2 = _rest.end;
                      } else {
                        const _Some = _bind$2;
                        _tmp$2 = _Some;
                      }
                      const _tmp$3 = _tmp$2;
                      const _x$10 = { str: _tmp, start: _tmp$3, end: _rest.end };
                      rest$3 = _x$10;
                      break _L$3;
                    }
                    case 70: {
                      const _tmp$4 = _rest.str;
                      const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$5;
                      if (_bind$3 === undefined) {
                        _tmp$5 = _rest.end;
                      } else {
                        const _Some = _bind$3;
                        _tmp$5 = _Some;
                      }
                      const _tmp$6 = _tmp$5;
                      const _x$11 = { str: _tmp$4, start: _tmp$6, end: _rest.end };
                      rest$3 = _x$11;
                      break _L$3;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                case 78: {
                  const _x$12 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$12) {
                    case 102: {
                      const _tmp$7 = _rest.str;
                      const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$8;
                      if (_bind$4 === undefined) {
                        _tmp$8 = _rest.end;
                      } else {
                        const _Some = _bind$4;
                        _tmp$8 = _Some;
                      }
                      const _tmp$9 = _tmp$8;
                      const _x$13 = { str: _tmp$7, start: _tmp$9, end: _rest.end };
                      rest$3 = _x$13;
                      break _L$3;
                    }
                    case 70: {
                      const _tmp$10 = _rest.str;
                      const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$11;
                      if (_bind$5 === undefined) {
                        _tmp$11 = _rest.end;
                      } else {
                        const _Some = _bind$5;
                        _tmp$11 = _Some;
                      }
                      const _tmp$12 = _tmp$11;
                      const _x$14 = { str: _tmp$10, start: _tmp$12, end: _rest.end };
                      rest$3 = _x$14;
                      break _L$3;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                default: {
                  break _L$2;
                }
              }
            }
            case 73: {
              const _x$15 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 1, _rest.start, _rest.end));
              switch (_x$15) {
                case 110: {
                  const _x$16 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$16) {
                    case 102: {
                      const _tmp$13 = _rest.str;
                      const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$14;
                      if (_bind$6 === undefined) {
                        _tmp$14 = _rest.end;
                      } else {
                        const _Some = _bind$6;
                        _tmp$14 = _Some;
                      }
                      const _tmp$15 = _tmp$14;
                      const _x$17 = { str: _tmp$13, start: _tmp$15, end: _rest.end };
                      rest$3 = _x$17;
                      break _L$3;
                    }
                    case 70: {
                      const _tmp$16 = _rest.str;
                      const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$17;
                      if (_bind$7 === undefined) {
                        _tmp$17 = _rest.end;
                      } else {
                        const _Some = _bind$7;
                        _tmp$17 = _Some;
                      }
                      const _tmp$18 = _tmp$17;
                      const _x$18 = { str: _tmp$16, start: _tmp$18, end: _rest.end };
                      rest$3 = _x$18;
                      break _L$3;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                case 78: {
                  const _x$19 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                  switch (_x$19) {
                    case 102: {
                      const _tmp$19 = _rest.str;
                      const _bind$8 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$20;
                      if (_bind$8 === undefined) {
                        _tmp$20 = _rest.end;
                      } else {
                        const _Some = _bind$8;
                        _tmp$20 = _Some;
                      }
                      const _tmp$21 = _tmp$20;
                      const _x$20 = { str: _tmp$19, start: _tmp$21, end: _rest.end };
                      rest$3 = _x$20;
                      break _L$3;
                    }
                    case 70: {
                      const _tmp$22 = _rest.str;
                      const _bind$9 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                      let _tmp$23;
                      if (_bind$9 === undefined) {
                        _tmp$23 = _rest.end;
                      } else {
                        const _Some = _bind$9;
                        _tmp$23 = _Some;
                      }
                      const _tmp$24 = _tmp$23;
                      const _x$21 = { str: _tmp$22, start: _tmp$24, end: _rest.end };
                      rest$3 = _x$21;
                      break _L$3;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                }
                default: {
                  break _L$2;
                }
              }
            }
            default: {
              break _L$2;
            }
          }
        } else {
          if (moonbitlang$core$string$$String$char_length_ge$46$inner(_rest.str, 3, _rest.start, _rest.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 0, _rest.start, _rest.end));
            switch (_x) {
              case 105: {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 1, _rest.start, _rest.end));
                switch (_x$2) {
                  case 110: {
                    const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                    switch (_x$3) {
                      case 102: {
                        const _tmp = _rest.str;
                        const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$2;
                        if (_bind$2 === undefined) {
                          _tmp$2 = _rest.end;
                        } else {
                          const _Some = _bind$2;
                          _tmp$2 = _Some;
                        }
                        const _tmp$3 = _tmp$2;
                        const _x$4 = { str: _tmp, start: _tmp$3, end: _rest.end };
                        rest$3 = _x$4;
                        break _L$3;
                      }
                      case 70: {
                        const _tmp$4 = _rest.str;
                        const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$5;
                        if (_bind$3 === undefined) {
                          _tmp$5 = _rest.end;
                        } else {
                          const _Some = _bind$3;
                          _tmp$5 = _Some;
                        }
                        const _tmp$6 = _tmp$5;
                        const _x$5 = { str: _tmp$4, start: _tmp$6, end: _rest.end };
                        rest$3 = _x$5;
                        break _L$3;
                      }
                      default: {
                        break _L$2;
                      }
                    }
                  }
                  case 78: {
                    const _x$6 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                    switch (_x$6) {
                      case 102: {
                        const _tmp$7 = _rest.str;
                        const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$8;
                        if (_bind$4 === undefined) {
                          _tmp$8 = _rest.end;
                        } else {
                          const _Some = _bind$4;
                          _tmp$8 = _Some;
                        }
                        const _tmp$9 = _tmp$8;
                        const _x$7 = { str: _tmp$7, start: _tmp$9, end: _rest.end };
                        rest$3 = _x$7;
                        break _L$3;
                      }
                      case 70: {
                        const _tmp$10 = _rest.str;
                        const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$11;
                        if (_bind$5 === undefined) {
                          _tmp$11 = _rest.end;
                        } else {
                          const _Some = _bind$5;
                          _tmp$11 = _Some;
                        }
                        const _tmp$12 = _tmp$11;
                        const _x$8 = { str: _tmp$10, start: _tmp$12, end: _rest.end };
                        rest$3 = _x$8;
                        break _L$3;
                      }
                      default: {
                        break _L$2;
                      }
                    }
                  }
                  default: {
                    break _L$2;
                  }
                }
              }
              case 73: {
                const _x$9 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 1, _rest.start, _rest.end));
                switch (_x$9) {
                  case 110: {
                    const _x$10 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                    switch (_x$10) {
                      case 102: {
                        const _tmp$13 = _rest.str;
                        const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$14;
                        if (_bind$6 === undefined) {
                          _tmp$14 = _rest.end;
                        } else {
                          const _Some = _bind$6;
                          _tmp$14 = _Some;
                        }
                        const _tmp$15 = _tmp$14;
                        const _x$11 = { str: _tmp$13, start: _tmp$15, end: _rest.end };
                        rest$3 = _x$11;
                        break _L$3;
                      }
                      case 70: {
                        const _tmp$16 = _rest.str;
                        const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$17;
                        if (_bind$7 === undefined) {
                          _tmp$17 = _rest.end;
                        } else {
                          const _Some = _bind$7;
                          _tmp$17 = _Some;
                        }
                        const _tmp$18 = _tmp$17;
                        const _x$12 = { str: _tmp$16, start: _tmp$18, end: _rest.end };
                        rest$3 = _x$12;
                        break _L$3;
                      }
                      default: {
                        break _L$2;
                      }
                    }
                  }
                  case 78: {
                    const _x$13 = moonbitlang$core$string$$String$unsafe_char_at(_rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 2, _rest.start, _rest.end));
                    switch (_x$13) {
                      case 102: {
                        const _tmp$19 = _rest.str;
                        const _bind$8 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$20;
                        if (_bind$8 === undefined) {
                          _tmp$20 = _rest.end;
                        } else {
                          const _Some = _bind$8;
                          _tmp$20 = _Some;
                        }
                        const _tmp$21 = _tmp$20;
                        const _x$14 = { str: _tmp$19, start: _tmp$21, end: _rest.end };
                        rest$3 = _x$14;
                        break _L$3;
                      }
                      case 70: {
                        const _tmp$22 = _rest.str;
                        const _bind$9 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest.str, 3, _rest.start, _rest.end);
                        let _tmp$23;
                        if (_bind$9 === undefined) {
                          _tmp$23 = _rest.end;
                        } else {
                          const _Some = _bind$9;
                          _tmp$23 = _Some;
                        }
                        const _tmp$24 = _tmp$23;
                        const _x$15 = { str: _tmp$22, start: _tmp$24, end: _rest.end };
                        rest$3 = _x$15;
                        break _L$3;
                      }
                      default: {
                        break _L$2;
                      }
                    }
                  }
                  default: {
                    break _L$2;
                  }
                }
              }
              default: {
                break _L$2;
              }
            }
          } else {
            break _L$2;
          }
        }
      }
      return new Result$Ok$7$(moonbitlang$core$double$$not_a_number);
    }
    _L$4: {
      _L$5: {
        if (moonbitlang$core$string$$String$char_length_eq$46$inner(rest$3.str, 0, rest$3.start, rest$3.end)) {
          break _L$5;
        } else {
          if (moonbitlang$core$string$$String$char_length_eq$46$inner(rest$3.str, 5, rest$3.start, rest$3.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 0, rest$3.start, rest$3.end));
            switch (_x) {
              case 105: {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 1, rest$3.start, rest$3.end));
                switch (_x$2) {
                  case 110: {
                    const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 2, rest$3.start, rest$3.end));
                    switch (_x$3) {
                      case 105: {
                        const _x$4 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$4) {
                          case 116: {
                            const _x$5 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$5) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$6 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$6) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      case 73: {
                        const _x$7 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$7) {
                          case 116: {
                            const _x$8 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$8) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$9 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$9) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      default: {
                        break _L$4;
                      }
                    }
                  }
                  case 78: {
                    const _x$10 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 2, rest$3.start, rest$3.end));
                    switch (_x$10) {
                      case 105: {
                        const _x$11 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$11) {
                          case 116: {
                            const _x$12 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$12) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$13 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$13) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      case 73: {
                        const _x$14 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$14) {
                          case 116: {
                            const _x$15 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$15) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$16 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$16) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      default: {
                        break _L$4;
                      }
                    }
                  }
                  default: {
                    break _L$4;
                  }
                }
              }
              case 73: {
                const _x$17 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 1, rest$3.start, rest$3.end));
                switch (_x$17) {
                  case 110: {
                    const _x$18 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 2, rest$3.start, rest$3.end));
                    switch (_x$18) {
                      case 105: {
                        const _x$19 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$19) {
                          case 116: {
                            const _x$20 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$20) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$21 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$21) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      case 73: {
                        const _x$22 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$22) {
                          case 116: {
                            const _x$23 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$23) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$24 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$24) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      default: {
                        break _L$4;
                      }
                    }
                  }
                  case 78: {
                    const _x$25 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 2, rest$3.start, rest$3.end));
                    switch (_x$25) {
                      case 105: {
                        const _x$26 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$26) {
                          case 116: {
                            const _x$27 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$27) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$28 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$28) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      case 73: {
                        const _x$29 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 3, rest$3.start, rest$3.end));
                        switch (_x$29) {
                          case 116: {
                            const _x$30 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$30) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          case 84: {
                            const _x$31 = moonbitlang$core$string$$String$unsafe_char_at(rest$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$3.str, 4, rest$3.start, rest$3.end));
                            switch (_x$31) {
                              case 121: {
                                break _L$5;
                              }
                              case 89: {
                                break _L$5;
                              }
                              default: {
                                break _L$4;
                              }
                            }
                          }
                          default: {
                            break _L$4;
                          }
                        }
                      }
                      default: {
                        break _L$4;
                      }
                    }
                  }
                  default: {
                    break _L$4;
                  }
                }
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
      }
      return _pos ? new Result$Ok$7$(moonbitlang$core$double$$infinity) : new Result$Ok$7$(moonbitlang$core$double$$neg_infinity);
    }
    return moonbitlang$core$strconv$$syntax_err$8$();
  }
  return moonbitlang$core$strconv$$syntax_err$8$();
}
function $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$3$(self, init, f) {
  let ret = init;
  let len = 0;
  let str = self;
  while (true) {
    const _bind = str;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _tmp$3 = _tmp$2;
      const _x = { str: _tmp, start: _tmp$3, end: _bind.end };
      if (_ch >= 48 && _ch <= 57) {
        len = len + 1 | 0;
        ret = f(_ch - 48 | 0, ret);
      } else {
        if (_ch !== 95) {
          break;
        }
      }
      str = _x;
      continue;
    } else {
      break;
    }
  }
  return { _0: str, _1: ret, _2: len };
}
function $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$15$(self, init, f) {
  let ret = init;
  let len = 0;
  let str = self;
  while (true) {
    const _bind = str;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _tmp$3 = _tmp$2;
      const _x = { str: _tmp, start: _tmp$3, end: _bind.end };
      if (_ch >= 48 && _ch <= 57) {
        len = len + 1 | 0;
        ret = f(_ch - 48 | 0, ret);
      } else {
        if (_ch !== 95) {
          break;
        }
      }
      str = _x;
      continue;
    } else {
      break;
    }
  }
  return { _0: str, _1: ret, _2: len };
}
function moonbitlang$core$strconv$$parse_digits(s, x) {
  return $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$3$(s, x, (digit, acc) => moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Mul$mul$3$(acc, $10L), moonbitlang$core$uint64$$UInt64$extend_uint(digit)));
}
function moonbitlang$core$strconv$$parse_scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
        switch (_x) {
          case 43: {
            const _tmp = _bind.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = _bind.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: _bind.end };
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _tmp$4 = _bind.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$5;
            if (_bind$3 === undefined) {
              _tmp$5 = _bind.end;
            } else {
              const _Some = _bind$3;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind.end };
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$15$(s$2, moonbitlang$core$strconv$$parse_scientific$46$exp_num$124$306, (digit, exp_num) => moonbitlang$core$builtin$$op_lt$15$(exp_num, $65536L) ? moonbitlang$core$builtin$$Add$add$15$(moonbitlang$core$builtin$$Mul$mul$15$($10L, exp_num), moonbitlang$core$int$$Int$to_int64(digit)) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: moonbitlang$core$builtin$$Neg$neg$15$(_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function moonbitlang$core$strconv$$try_parse_19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const _param = _tmp;
    let s$2;
    _L: {
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param.str, 1, _param.start, _param.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
        if (_x >= 48 && _x <= 57) {
          const _tmp$2 = _param.str;
          const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _tmp$4 = _tmp$3;
          const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
          if (moonbitlang$core$builtin$$op_lt$3$(x$2, moonbitlang$core$strconv$$min_19digit_int)) {
            len = len + 1 | 0;
            x$2 = moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Mul$mul$3$(x$2, $10L), moonbitlang$core$uint64$$UInt64$extend_uint(_x - 48 | 0));
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _tmp$2 = _param.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _tmp$4 = _tmp$3;
            const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        }
      } else {
        s$2 = _param;
        break _L;
      }
    }
    return { _0: s$2, _1: x$2, _2: len };
  }
}
function moonbitlang$core$strconv$$parse_number(s) {
  let _bind;
  let rest;
  _L: {
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(s.str, 1, s.start, s.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(s.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(s.str, 0, s.start, s.end));
        switch (_x) {
          case 45: {
            const _tmp = s.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(s.str, 1, s.start, s.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = s.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: s.end };
            _bind = { _0: _x$2, _1: true };
            break;
          }
          case 43: {
            const _tmp$4 = s.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(s.str, 1, s.start, s.end);
            let _tmp$5;
            if (_bind$3 === undefined) {
              _tmp$5 = s.end;
            } else {
              const _Some = _bind$3;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: s.end };
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
      break _L;
    }
    _bind = { _0: rest, _1: false };
  }
  const _s = _bind._0;
  const _negative = _bind._1;
  if (moonbitlang$core$string$$StringView$is_empty(_s)) {
    return new Result$Ok$8$(undefined);
  }
  const _bind$2 = moonbitlang$core$strconv$$parse_digits(_s, $0L);
  const _s$2 = _bind$2._0;
  const _mantissa = _bind$2._1;
  const _consumed = _bind$2._2;
  let mantissa = _mantissa;
  let s$2 = _s$2;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = $0L;
  const _bind$3 = s$2;
  if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$3.str, 1, _bind$3.start, _bind$3.end)) {
    const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$3.str, 0, _bind$3.start, _bind$3.end));
    if (_x === 46) {
      const _tmp = _bind$3.str;
      const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$3.str, 1, _bind$3.start, _bind$3.end);
      let _tmp$2;
      if (_bind$4 === undefined) {
        _tmp$2 = _bind$3.end;
      } else {
        const _Some = _bind$4;
        _tmp$2 = _Some;
      }
      const _tmp$3 = _tmp$2;
      const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$3.end };
      s$2 = _x$2;
      const _bind$5 = moonbitlang$core$strconv$$parse_digits(s$2, mantissa);
      const _new_s = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      s$2 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = moonbitlang$core$builtin$$Neg$neg$15$(moonbitlang$core$int$$Int$to_int64(n_after_dot));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new Result$Ok$8$(undefined);
  }
  let rest$2;
  _L$2: {
    _L$3: {
      const _bind$4 = s$2;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$4.str, 1, _bind$4.start, _bind$4.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$4.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$4.str, 0, _bind$4.start, _bind$4.end));
        switch (_x) {
          case 101: {
            const _tmp = _bind$4.str;
            const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
            let _tmp$2;
            if (_bind$5 === undefined) {
              _tmp$2 = _bind$4.end;
            } else {
              const _Some = _bind$5;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$4.end };
            rest$2 = _x$2;
            break _L$3;
          }
          case 69: {
            const _tmp$4 = _bind$4.str;
            const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
            let _tmp$5;
            if (_bind$6 === undefined) {
              _tmp$5 = _bind$4.end;
            } else {
              const _Some = _bind$6;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$4.end };
            rest$2 = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$4 = moonbitlang$core$strconv$$parse_scientific(rest$2);
    let _bind$5;
    if (_bind$4 === undefined) {
      return new Result$Ok$8$(undefined);
    } else {
      const _Some = _bind$4;
      _bind$5 = _Some;
    }
    const _new_s = _bind$5._0;
    const _exp_number = _bind$5._1;
    s$2 = _new_s;
    exponent = moonbitlang$core$builtin$$Add$add$15$(exponent, _exp_number);
  }
  const _bind$4 = s$2;
  if (moonbitlang$core$string$$String$char_length_eq$46$inner(_bind$4.str, 0, _bind$4.start, _bind$4.end)) {
    if (n_digits <= 19) {
      return new Result$Ok$8$({ exponent: exponent, mantissa: mantissa, negative: _negative, many_digits: false });
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const _param_str = _tmp;
      const _param_start = _tmp$2;
      const _param_end = _tmp$3;
      let rest$3;
      let ch;
      _L$4: {
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param_str, 1, _param_start, _param_end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_str, 0, _param_start, _param_end));
          switch (_x) {
            case 48: {
              const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_str, 1, _param_start, _param_end);
              let _tmp$4;
              if (_bind$5 === undefined) {
                _tmp$4 = _param_end;
              } else {
                const _Some = _bind$5;
                _tmp$4 = _Some;
              }
              const _x$2 = { str: _param_str, start: _tmp$4, end: _param_end };
              rest$3 = _x$2;
              ch = _x;
              break _L$4;
            }
            case 46: {
              const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_str, 1, _param_start, _param_end);
              let _tmp$5;
              if (_bind$6 === undefined) {
                _tmp$5 = _param_end;
              } else {
                const _Some = _bind$6;
                _tmp$5 = _Some;
              }
              const _x$3 = { str: _param_str, start: _tmp$5, end: _param_end };
              rest$3 = _x$3;
              ch = _x;
              break _L$4;
            }
            default: {
              break _L$3;
            }
          }
        } else {
          break;
        }
      }
      n_digits = n_digits - ((ch - 46 | 0) / 2 | 0) | 0;
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      continue;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = $0L;
      const _bind$5 = moonbitlang$core$strconv$$try_parse_19digits(s, mantissa$2);
      const _s$3 = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (moonbitlang$core$builtin$$op_ge$3$(mantissa$2, moonbitlang$core$strconv$$min_19digit_int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(_s$3.str, 1, _s$3.start, _s$3.end)) {
          const _tmp$5 = _s$3.str;
          const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_s$3.str, 1, _s$3.start, _s$3.end);
          let _tmp$6;
          if (_bind$6 === undefined) {
            _tmp$6 = _s$3.end;
          } else {
            const _Some = _bind$6;
            _tmp$6 = _Some;
          }
          const _tmp$7 = _tmp$6;
          const _x = { str: _tmp$5, start: _tmp$7, end: _s$3.end };
          const _bind$7 = moonbitlang$core$strconv$$try_parse_19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$7._1;
          const _consumed_digit$2 = _bind$7._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new Result$Ok$8$(undefined);
        }
      }
      exponent = moonbitlang$core$int$$Int$to_int64(_tmp$4);
      exponent = moonbitlang$core$builtin$$Add$add$15$(exponent, moonbitlang$core$strconv$$parse_number$46$exp_number$124$287);
    }
    return new Result$Ok$8$({ exponent: exponent, mantissa: mantissa$2, negative: _negative, many_digits: many_digits });
  } else {
    return moonbitlang$core$strconv$$syntax_err$62$();
  }
}
function moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, negative) {
  const biased_exp = exponent - moonbitlang$core$strconv$$double_info.bias | 0;
  let bits = moonbitlang$core$builtin$$BitAnd$land$15$(mantissa, moonbitlang$core$builtin$$Sub$sub$15$(moonbitlang$core$builtin$$Shl$shl$15$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits), $1L));
  const exp_bits = moonbitlang$core$int$$Int$to_int64(biased_exp & ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0));
  bits = moonbitlang$core$builtin$$BitOr$lor$15$(bits, moonbitlang$core$builtin$$Shl$shl$15$(exp_bits, moonbitlang$core$strconv$$double_info.mantissa_bits));
  if (negative) {
    bits = moonbitlang$core$builtin$$BitOr$lor$15$(bits, moonbitlang$core$builtin$$Shl$shl$15$(moonbitlang$core$builtin$$Shl$shl$15$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits), moonbitlang$core$strconv$$double_info.exponent_bits));
  }
  return bits;
}
function moonbitlang$core$strconv$$Decimal$should_round_up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  $bound_check(_tmp$2, d);
  if (_tmp$2[d] === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      $bound_check(_tmp$4, _tmp$5);
      _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  $bound_check(_tmp$3, d);
  return _tmp$3[d] >= 5;
}
function moonbitlang$core$strconv$$Decimal$rounded_integer(self) {
  if (self.decimal_point > 20) {
    return $_1L;
  }
  let n = $0L;
  let i = 0;
  while (true) {
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp = moonbitlang$core$builtin$$Mul$mul$15$(n, $10L);
      const _tmp$2 = self.digits;
      const _tmp$3 = i;
      $bound_check(_tmp$2, _tmp$3);
      n = moonbitlang$core$builtin$$Add$add$15$(_tmp, moonbitlang$core$byte$$Byte$to_int64(_tmp$2[_tmp$3]));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (i < self.decimal_point) {
      n = moonbitlang$core$builtin$$Mul$mul$15$(n, $10L);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (moonbitlang$core$strconv$$Decimal$should_round_up(self, self.decimal_point)) {
    n = moonbitlang$core$builtin$$Add$add$15$(n, $1L);
  }
  return n;
}
function moonbitlang$core$strconv$$Decimal$new_digits(self, s) {
  const new_digits = moonbitlang$core$array$$Array$at$22$(moonbitlang$core$strconv$$left_shift_cheats, s)._0;
  const cheat_num = moonbitlang$core$array$$Array$at$22$(moonbitlang$core$strconv$$left_shift_cheats, s)._1;
  let less = false;
  const _end73 = cheat_num.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end73) {
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = cheat_num.charCodeAt(i) - 48 | 0;
      const _tmp$2 = self.digits;
      $bound_check(_tmp$2, i);
      if (_tmp$2[i] !== d) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, i);
        less = _tmp$3[i] < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function moonbitlang$core$strconv$$Decimal$left_shift(self, s) {
  const new_digits = moonbitlang$core$strconv$$Decimal$new_digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = $0L;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = moonbitlang$core$byte$$Byte$to_int64(_tmp[_tmp$2]);
      acc = moonbitlang$core$builtin$$Add$add$15$(acc, moonbitlang$core$builtin$$Shl$shl$15$(d, s));
      const quo = moonbitlang$core$builtin$$Div$div$15$(acc, $10L);
      const rem = moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$builtin$$Sub$sub$15$(acc, moonbitlang$core$builtin$$Mul$mul$15$(quo, $10L)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        $bound_check(_tmp$3, _tmp$4);
        _tmp$3[_tmp$4] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (moonbitlang$core$builtin$$op_gt$15$(acc, $0L)) {
      const quo = moonbitlang$core$builtin$$Div$div$15$(acc, $10L);
      const rem = moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$builtin$$Sub$sub$15$(acc, moonbitlang$core$builtin$$Mul$mul$15$($10L, quo)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
function moonbitlang$core$strconv$$Decimal$right_shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = $0L;
  while (true) {
    if (moonbitlang$core$builtin$$Eq$equal$3$(moonbitlang$core$builtin$$Shr$shr$3$(acc, s), $0L)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (moonbitlang$core$builtin$$Eq$equal$3$(moonbitlang$core$builtin$$Shr$shr$3$(acc, s), $0L)) {
            acc = moonbitlang$core$builtin$$Mul$mul$3$(acc, $10L);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _tmp[_tmp$2];
      acc = moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Mul$mul$3$(acc, $10L), moonbitlang$core$byte$$Byte$to_int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = moonbitlang$core$builtin$$Sub$sub$3$(moonbitlang$core$builtin$$Shl$shl$3$($1L, s), $1L);
  while (true) {
    if (read_index < self.digits_num) {
      const out = moonbitlang$core$builtin$$Shr$shr$3$(acc, s);
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      $bound_check(_tmp, _tmp$2);
      _tmp[_tmp$2] = moonbitlang$core$uint64$$UInt64$to_byte(out);
      write_index = write_index + 1 | 0;
      acc = moonbitlang$core$builtin$$BitAnd$land$3$(acc, mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      $bound_check(_tmp$3, _tmp$4);
      const d = _tmp$3[_tmp$4];
      acc = moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Mul$mul$3$(acc, $10L), moonbitlang$core$byte$$Byte$to_int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (moonbitlang$core$builtin$$op_gt$3$(acc, $0L)) {
      const out = moonbitlang$core$builtin$$Shr$shr$3$(acc, s);
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = moonbitlang$core$uint64$$UInt64$to_byte(out);
        write_index = write_index + 1 | 0;
      } else {
        if (moonbitlang$core$builtin$$op_gt$3$(out, $0L)) {
          self.truncated = true;
        }
      }
      acc = moonbitlang$core$builtin$$BitAnd$land$3$(acc, mask);
      acc = moonbitlang$core$builtin$$Mul$mul$3$(acc, $10L);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
function moonbitlang$core$strconv$$Decimal$shift_priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        moonbitlang$core$strconv$$Decimal$left_shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$left_shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        moonbitlang$core$strconv$$Decimal$right_shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$right_shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$Decimal$to_double_priv(self) {
  let exponent = 0;
  let mantissa = $0L;
  if (self.digits_num === 0 || self.decimal_point < -330) {
    mantissa = $0L;
    exponent = moonbitlang$core$strconv$$double_info.bias;
    const bits = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
    return new Result$Ok$7$(moonbitlang$core$int64$$Int64$reinterpret_as_double(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = moonbitlang$core$strconv$$range_err$6$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= moonbitlang$core$strconv$$powtab.length) {
        n = 60;
      } else {
        n = moonbitlang$core$array$$Array$at$4$(moonbitlang$core$strconv$$powtab, self.decimal_point);
      }
      moonbitlang$core$strconv$$Decimal$shift_priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, 0);
        _tmp$2 = _tmp$3[0] < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= moonbitlang$core$strconv$$powtab.length) {
        n = 60;
      } else {
        n = moonbitlang$core$array$$Array$at$4$(moonbitlang$core$strconv$$powtab, -self.decimal_point | 0);
      }
      moonbitlang$core$strconv$$Decimal$shift_priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (moonbitlang$core$strconv$$double_info.bias + 1 | 0)) {
    const n = (moonbitlang$core$strconv$$double_info.bias + 1 | 0) - exponent | 0;
    moonbitlang$core$strconv$$Decimal$shift_priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
    const _bind = moonbitlang$core$strconv$$range_err$6$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  moonbitlang$core$strconv$$Decimal$shift_priv(self, moonbitlang$core$strconv$$double_info.mantissa_bits + 1 | 0);
  mantissa = moonbitlang$core$strconv$$Decimal$rounded_integer(self);
  if (moonbitlang$core$builtin$$Eq$equal$15$(mantissa, moonbitlang$core$builtin$$Shl$shl$15$($2L, moonbitlang$core$strconv$$double_info.mantissa_bits))) {
    mantissa = moonbitlang$core$builtin$$Shr$shr$15$(mantissa, 1);
    exponent = exponent + 1 | 0;
    if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
      const _bind = moonbitlang$core$strconv$$range_err$6$();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (moonbitlang$core$builtin$$Eq$equal$15$(moonbitlang$core$builtin$$BitAnd$land$15$(mantissa, moonbitlang$core$builtin$$Shl$shl$15$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits)), $0L)) {
    exponent = moonbitlang$core$strconv$$double_info.bias;
  }
  const bits = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
  return new Result$Ok$7$(moonbitlang$core$int64$$Int64$reinterpret_as_double(bits));
}
function moonbitlang$core$strconv$$checked_mul(a, b) {
  if (moonbitlang$core$builtin$$Eq$equal$3$(a, $0L) || moonbitlang$core$builtin$$Eq$equal$3$(b, $0L)) {
    return moonbitlang$core$strconv$$checked_mul$46$constr$47$1513;
  }
  if (moonbitlang$core$builtin$$Eq$equal$3$(a, $1L)) {
    return b;
  }
  if (moonbitlang$core$builtin$$Eq$equal$3$(b, $1L)) {
    return a;
  }
  if (moonbitlang$core$uint64$$UInt64$clz(b) === 0 || moonbitlang$core$uint64$$UInt64$clz(a) === 0) {
    return undefined;
  }
  const quotient = moonbitlang$core$builtin$$Div$div$3$(moonbitlang$core$uint64$$max_value, b);
  if (moonbitlang$core$builtin$$op_gt$3$(a, quotient)) {
    return undefined;
  }
  return moonbitlang$core$builtin$$Mul$mul$3$(a, b);
}
function moonbitlang$core$strconv$$Number$is_fast_path(self) {
  return moonbitlang$core$builtin$$op_le$15$(moonbitlang$core$strconv$$min_exponent_fast_path, self.exponent) && (moonbitlang$core$builtin$$op_le$15$(self.exponent, moonbitlang$core$strconv$$max_exponent_disguised_fast_path) && (moonbitlang$core$builtin$$op_le$3$(self.mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path) && !self.many_digits));
}
function moonbitlang$core$strconv$$Number$try_fast_path(self) {
  if (moonbitlang$core$strconv$$Number$is_fast_path(self)) {
    let value;
    if (moonbitlang$core$builtin$$op_le$15$(self.exponent, moonbitlang$core$strconv$$max_exponent_fast_path)) {
      const value$2 = moonbitlang$core$double$$Double$convert_uint64(self.mantissa);
      if (moonbitlang$core$builtin$$op_lt$15$(self.exponent, $0L)) {
        const _p = -moonbitlang$core$int64$$Int64$to_int(self.exponent) | 0;
        const _tmp = _p & 31;
        $bound_check(moonbitlang$core$strconv$$table, _tmp);
        value = value$2 / moonbitlang$core$strconv$$table[_tmp];
      } else {
        const _p = moonbitlang$core$int64$$Int64$to_int(self.exponent);
        const _tmp = _p & 31;
        $bound_check(moonbitlang$core$strconv$$table, _tmp);
        value = value$2 * moonbitlang$core$strconv$$table[_tmp];
      }
    } else {
      const shift = moonbitlang$core$builtin$$Sub$sub$15$(self.exponent, moonbitlang$core$strconv$$max_exponent_fast_path);
      const _tmp = self.mantissa;
      const _tmp$2 = moonbitlang$core$int64$$Int64$to_int(shift);
      $bound_check(moonbitlang$core$strconv$$int_pow10, _tmp$2);
      const _bind = moonbitlang$core$strconv$$checked_mul(_tmp, moonbitlang$core$strconv$$int_pow10[_tmp$2]);
      let mantissa;
      if (_bind === undefined) {
        return Option$None$0$;
      } else {
        const _Some = _bind;
        mantissa = _Some;
      }
      if (moonbitlang$core$builtin$$op_gt$3$(mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path)) {
        return Option$None$0$;
      }
      const _tmp$3 = moonbitlang$core$double$$Double$convert_uint64(mantissa);
      const _p = moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$strconv$$max_exponent_fast_path);
      const _tmp$4 = _p & 31;
      $bound_check(moonbitlang$core$strconv$$table, _tmp$4);
      value = _tmp$3 * moonbitlang$core$strconv$$table[_tmp$4];
    }
    if (self.negative) {
      value = -value;
    }
    return new Option$Some$0$(value);
  } else {
    return Option$None$0$;
  }
}
function moonbitlang$core$strconv$$parse_double(str) {
  if ((str.end - str.start | 0) > 0) {
    if (moonbitlang$core$strconv$$check_underscore(str)) {
      const _bind = moonbitlang$core$strconv$$parse_number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return moonbitlang$core$strconv$$parse_inf_nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = moonbitlang$core$strconv$$Number$try_fast_path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new Result$Ok$7$(_value);
        } else {
          const _bind$4 = moonbitlang$core$strconv$$parse_decimal_priv(str);
          let _tmp;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
          } else {
            return _bind$4;
          }
          return moonbitlang$core$strconv$$Decimal$to_double_priv(_tmp);
        }
      }
    } else {
      return moonbitlang$core$strconv$$syntax_err$8$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$8$();
  }
}
function moonbitlang$core$builtin$$Show$output$40$(self, logger) {
  const _StrConvError = self;
  const _err = _StrConvError._0;
  logger.method_0(logger.self, _err);
}
function moonbitlang$core$ref$$Ref$new$65$(x) {
  return { val: x };
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (56320 <= c && c <= 57343) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (55296 <= c && c <= 56319) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return moonbitlang$core$abort$$abort$7$("Invalid start index");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char$46$inner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward(self, i, start_offset, end_offset$2) : moonbitlang$core$string$$String$offset_of_nth_char_backward(self, -i | 0, start_offset, end_offset$2);
}
function moonbitlang$core$string$$String$char_length_eq$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$abort$$abort$6$("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$abort$$abort$6$("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$string$$String$from_array(chars) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(Math.imul(chars.length, 4) | 0);
  const _len = chars.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const c = chars[_i];
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, c);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function moonbitlang$core$string$$StringView$is_empty(self) {
  return (self.end - self.start | 0) === 0;
}
function Kaida$45$Amethyst$math$$fabs(x) {
  return moonbitlang$core$uint64$$UInt64$reinterpret_as_double(moonbitlang$core$builtin$$BitAnd$land$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L));
}
function Kaida$45$Amethyst$math$$isinf(x) {
  return moonbitlang$core$builtin$$Eq$equal$3$(moonbitlang$core$builtin$$BitAnd$land$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L), $9218868437227405312L);
}
function Kaida$45$Amethyst$math$$isnan(x) {
  return moonbitlang$core$builtin$$op_gt$3$(moonbitlang$core$builtin$$BitAnd$land$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L), $9218868437227405312L);
}
function Kaida$45$Amethyst$math$$__hi(x) {
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$builtin$$Shr$shr$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), 32));
}
function Kaida$45$Amethyst$math$$__low(x) {
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$double$$Double$reinterpret_as_uint64(x));
}
function Kaida$45$Amethyst$math$$__combineQ(hi, low) {
  return moonbitlang$core$uint64$$UInt64$reinterpret_as_double(moonbitlang$core$builtin$$BitOr$lor$3$(moonbitlang$core$builtin$$Shl$shl$3$(hi, 32), low));
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
  const ui = moonbitlang$core$builtin$$Shl$shl$3$(moonbitlang$core$int$$Int$to_uint64(1023 + n$2 | 0), 52);
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
  const iq = moonbitlang$core$array$$Array$make$4$(20, 0);
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
  jk = moonbitlang$core$array$$Array$at$4$(init_jk, prec);
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
      moonbitlang$core$array$$Array$set$8$(f, i, j < 0 ? 0 : moonbitlang$core$array$$Array$at$4$(Kaida$45$Amethyst$math$$two_over_pi, j) + 0);
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
          moonbitlang$core$array$$Array$set$4$(iq, i, moonbitlang$core$double$$Double$to_int(z - 16777216 * fw));
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
        i = moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) >> (24 - q0 | 0);
        n = n + i | 0;
        const _index_2 = jz - 1 | 0;
        moonbitlang$core$array$$Array$set$4$(iq, _index_2, moonbitlang$core$array$$Array$at$4$(iq, _index_2) - (i << (24 - q0 | 0)) | 0);
        ih = moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) >> (23 - q0 | 0);
      } else {
        if (q0 === 0) {
          ih = moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) >> 23;
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
            j = moonbitlang$core$array$$Array$at$4$(iq, i);
            if (carry === 0) {
              if (j !== 0) {
                carry = 1;
                moonbitlang$core$array$$Array$set$4$(iq, i, 16777216 - j | 0);
              }
            } else {
              moonbitlang$core$array$$Array$set$4$(iq, i, 16777215 - j | 0);
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
              moonbitlang$core$array$$Array$set$4$(iq, jz - 1 | 0, moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) & 8388607);
              break;
            }
            case 2: {
              moonbitlang$core$array$$Array$set$4$(iq, jz - 1 | 0, moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) & 4194303);
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
            j = j | moonbitlang$core$array$$Array$at$4$(iq, i);
            i = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j === 0) {
          k = 1;
          while (true) {
            if (moonbitlang$core$array$$Array$at$4$(iq, jk - k | 0) === 0) {
              k = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          i = jz + 1 | 0;
          while (true) {
            if (i <= (jz + k | 0)) {
              moonbitlang$core$array$$Array$set$8$(f, jx + i | 0, moonbitlang$core$array$$Array$at$4$(Kaida$45$Amethyst$math$$two_over_pi, jv + i | 0) + 0);
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
          if (moonbitlang$core$array$$Array$at$4$(iq, jz) === 0) {
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
          moonbitlang$core$array$$Array$set$4$(iq, jz, moonbitlang$core$double$$Double$to_int(z - 16777216 * fw));
          jz = jz + 1 | 0;
          q0 = q0 + 24 | 0;
          moonbitlang$core$array$$Array$set$4$(iq, jz, moonbitlang$core$double$$Double$to_int(fw));
        } else {
          moonbitlang$core$array$$Array$set$4$(iq, jz, moonbitlang$core$double$$Double$to_int(z));
        }
      }
      fw = Kaida$45$Amethyst$math$$scalbn(1, q0);
      i = jz;
      while (true) {
        if (i >= 0) {
          moonbitlang$core$array$$Array$set$8$(q, i, fw * (moonbitlang$core$array$$Array$at$4$(iq, i) + 0));
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
    if (n < 32 && ix !== moonbitlang$core$array$$Array$at$4$(Kaida$45$Amethyst$math$$npio2_hw, n - 1 | 0)) {
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
function Kaida$45$Amethyst$math$$atan(x) {
  if (x !== x || x === 0) {
    return x;
  }
  const atan_hi = [0.46364760900080609, 0.78539816339744828, 0.982793723247329, 1.5707963267948966];
  const atan_lo = [2.2698777452961687e-017, 3.061616997868383e-017, 1.3903311031230998e-017, 6.123233995736766e-017];
  const a_t = [0.33333333333332932, -0.19999999999876483, 0.14285714272503466, -0.11111110405462356, 0.090908871334365066, -0.0769187620504483, 0.066610731373875312, -0.058335701337905735, 0.049768779946159324, -0.036531572744216916, 0.016285820115365782];
  const ix = Kaida$45$Amethyst$math$$__hi(x) & 2147483647;
  let id = 0;
  let z = 0;
  let w = 0;
  let x$2 = x;
  const x_is_neg = x$2 < 0;
  if (ix >= 1141899264) {
    if (x$2 > 0) {
      return moonbitlang$core$array$$Array$at$8$(atan_hi, 3) + moonbitlang$core$array$$Array$at$8$(atan_lo, 3);
    } else {
      return -moonbitlang$core$array$$Array$at$8$(atan_hi, 3) - moonbitlang$core$array$$Array$at$8$(atan_lo, 3);
    }
  }
  if (ix < 1071382528) {
    if (ix < 1042284544) {
      if (1e+300 + x$2 > 1) {
        return x$2;
      }
    }
    id = -1;
  } else {
    x$2 = Math.abs(x$2);
    if (ix < 1072889856) {
      if (ix < 1072037888) {
        id = 0;
        x$2 = (2 * x$2 - 1) / (2 + x$2);
      } else {
        id = 1;
        x$2 = (x$2 - 1) / (x$2 + 1);
      }
    } else {
      if (ix < 1073971200) {
        id = 2;
        x$2 = (x$2 - 1.5) / (1 + 1.5 * x$2);
      } else {
        id = 3;
        x$2 = -1 / x$2;
      }
    }
  }
  z = x$2 * x$2;
  w = z * z;
  const s1 = z * (moonbitlang$core$array$$Array$at$8$(a_t, 0) + w * (moonbitlang$core$array$$Array$at$8$(a_t, 2) + w * (moonbitlang$core$array$$Array$at$8$(a_t, 4) + w * (moonbitlang$core$array$$Array$at$8$(a_t, 6) + w * (moonbitlang$core$array$$Array$at$8$(a_t, 8) + w * moonbitlang$core$array$$Array$at$8$(a_t, 10))))));
  const s2 = w * (moonbitlang$core$array$$Array$at$8$(a_t, 1) + w * (moonbitlang$core$array$$Array$at$8$(a_t, 3) + w * (moonbitlang$core$array$$Array$at$8$(a_t, 5) + w * (moonbitlang$core$array$$Array$at$8$(a_t, 7) + w * moonbitlang$core$array$$Array$at$8$(a_t, 9)))));
  if (id < 0) {
    return x$2 - x$2 * (s1 + s2);
  } else {
    z = moonbitlang$core$array$$Array$at$8$(atan_hi, id) - (x$2 * (s1 + s2) - moonbitlang$core$array$$Array$at$8$(atan_lo, id) - x$2);
    return x_is_neg ? -z : z;
  }
}
function Kaida$45$Amethyst$math$$atan2(y, x) {
  if (x !== x || y !== y) {
    return moonbitlang$core$double$$not_a_number;
  }
  const hx = Kaida$45$Amethyst$math$$__hi(x);
  const hy = Kaida$45$Amethyst$math$$__hi(y);
  const ix = hx & 2147483647;
  const iy = hy & 2147483647;
  if (x === 1) {
    return Kaida$45$Amethyst$math$$atan(y);
  }
  const m = hy >> 31 & 1 | hx >> 30 & 2;
  if (y === 0) {
    _L: {
      switch (m) {
        case 0: {
          break _L;
        }
        case 1: {
          break _L;
        }
        case 2: {
          return 3.1415926535897931;
        }
        default: {
          return -3.1415926535897931;
        }
      }
    }
    return y;
  }
  if (x === 0) {
    return hy < 0 ? -1.5707963267948966 : 1.5707963267948966;
  }
  if (x > moonbitlang$core$double$$max_value || x < moonbitlang$core$double$$min_value) {
    if (y > moonbitlang$core$double$$max_value || y < moonbitlang$core$double$$min_value) {
      switch (m) {
        case 0: {
          return 0.78539816339744828;
        }
        case 1: {
          return -0.78539816339744828;
        }
        case 2: {
          return 2.3561944901923448;
        }
        default: {
          return -2.3561944901923448;
        }
      }
    } else {
      switch (m) {
        case 0: {
          return 0;
        }
        case 1: {
          return -0;
        }
        case 2: {
          return 3.1415926535897931;
        }
        default: {
          return -3.1415926535897931;
        }
      }
    }
  }
  if (y > moonbitlang$core$double$$max_value || y < moonbitlang$core$double$$min_value) {
    return hy < 0 ? -1.5707963267948966 : 1.5707963267948966;
  }
  const k = iy - ix >> 20;
  const z = k > 60 ? 1.5707963267948966 : hx < 0 && k < -60 ? 0 : Kaida$45$Amethyst$math$$atan(Kaida$45$Amethyst$math$$fabs(y / x));
  switch (m) {
    case 0: {
      return z;
    }
    case 1: {
      return -z;
    }
    case 2: {
      return 3.1415926535897931 - (z - 1.2246467991473532e-016);
    }
    default: {
      return z - 1.2246467991473532e-016 - 3.1415926535897931;
    }
  }
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getBase$66$(self) {
  return self;
}
function Demonmasterlqx$box2d_ffi$box2d$$World$setListener$67$(self, listener) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$setListener_(self, listener);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$setFilter$67$(self, filter) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$setFilter_(self, filter);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(self, def) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$createBody_(self.world, def);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$createBody$67$(self, def) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$createBody_(self, def);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$destroyBody$68$(self, body) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$destroyBody_(self.world, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$destroyBody$67$(self, body) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$destroyBody_(self, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$clearBodyList$67$(self) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$clearBodyList_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$createJoint$68$(self, def) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$createJoint_(self.world, def);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$createJoint$67$(self, def) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$createJoint_(self, def);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$destroyJoint$67$(self, joint) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$destroyJoint_(self, joint);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getGroundBody$67$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getGroundBody_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$step$68$(self, dt, iterations) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$step_(self.world, dt, iterations);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$step$67$(self, dt, iterations) {
  Demonmasterlqx$box2d_ffi$box2d$$B2World_$step_(self, dt, iterations);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$query$67$(self, aabb, shapes, maxCount) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$query_(self, aabb, shapes, maxCount);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getBodyList$68$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getBodyList_(self.world);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getBodyList$67$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getBodyList_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getJointList$67$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getJointList_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getContactList$67$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getContactList_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$World$getContactList$68$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2World_$getContactList_(self.world);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2CircleDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2PolygonDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$computeMass$72$(self, massData) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$computeMass_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), massData);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$computeMass$73$(self, massData) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$computeMass_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), massData);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$computeMass$74$(self, massData) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$computeMass_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), massData);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalPosition$72$(self, localPosition) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalPosition_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), localPosition);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalPosition$73$(self, localPosition) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalPosition_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), localPosition);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalPosition$74$(self, localPosition) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalPosition_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), localPosition);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalPosition$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalPosition_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalPosition$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalPosition_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalPosition$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalPosition_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalRotation$72$(self, localRotation) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalRotation_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), localRotation);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalRotation$73$(self, localRotation) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalRotation_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), localRotation);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalRotation$74$(self, localRotation) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setLocalRotation_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), localRotation);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalRotation$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalRotation_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalRotation$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalRotation_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalRotation$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getLocalRotation_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$72$(self, friction) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), friction);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$73$(self, friction) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), friction);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$74$(self, friction) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), friction);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getFriction$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getFriction$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getFriction$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$72$(self, restitution) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setRestitution_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), restitution);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$73$(self, restitution) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setRestitution_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), restitution);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$74$(self, restitution) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setRestitution_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), restitution);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getRestitution$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getRestitution_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getRestitution$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getRestitution_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getRestitution$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getRestitution_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(self, density) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), density);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$73$(self, density) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), density);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$74$(self, density) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), density);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getDensity$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getDensity$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getDensity$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setCategoryBits$72$(self, categoryBits) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setCategoryBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), categoryBits);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setCategoryBits$73$(self, categoryBits) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setCategoryBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), categoryBits);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setCategoryBits$74$(self, categoryBits) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setCategoryBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), categoryBits);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getCategoryBits$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getCategoryBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getCategoryBits$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getCategoryBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getCategoryBits$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getCategoryBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setMaskBits$72$(self, maskBits) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setMaskBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), maskBits);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setMaskBits$73$(self, maskBits) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setMaskBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), maskBits);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setMaskBits$74$(self, maskBits) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setMaskBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), maskBits);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getMaskBits$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getMaskBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getMaskBits$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getMaskBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getMaskBits$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getMaskBits_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$(self, groupIndex) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self), groupIndex);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$73$(self, groupIndex) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self), groupIndex);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$74$(self, groupIndex) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self), groupIndex);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getGroupIndex$72$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getGroupIndex$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getGroupIndex$74$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$getGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$75$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$76$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2PolygonShape$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getType$77$(self) {
  const typenum = Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getType_(self);
  return typenum === -1 ? 0 : typenum === 0 ? 1 : typenum === 1 ? 2 : typenum === 2 ? 3 : 0;
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$78$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$76$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$79$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBase$75$(self));
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$77$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$80$(self, body) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$81$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody1_(base, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$80$(self, body) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$81$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody2_(base, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$80$(self, flag) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$81$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setCollideConnected_(base, flag);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$81$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody1$82$(self) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$83$(self);
  return Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody1_(base);
}
function Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody2$82$(self) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$83$(self);
  return Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody2_(base);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$83$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJoint$getBase_(self);
}
function moonbitlang$x$json5$$offset_to_position(input, offset) {
  let line = 1;
  let column = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < offset) {
      $bound_check(input, i);
      const c = input.charCodeAt(i);
      if (c === 10) {
        line = line + 1 | 0;
        column = 0;
      } else {
        column = column + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { line: line, column: column };
}
function moonbitlang$x$json5$$parse_error$5$(data) {
  return new Result$Err$11$(new Error$moonbitlang$47$x$47$json5$46$ParseError$46$ParseError(data));
}
function moonbitlang$x$json5$$parse_error$6$(data) {
  return new Result$Err$12$(new Error$moonbitlang$47$x$47$json5$46$ParseError$46$ParseError(data));
}
function moonbitlang$x$json5$$parse_error$8$(data) {
  return new Result$Err$13$(new Error$moonbitlang$47$x$47$json5$46$ParseError$46$ParseError(data));
}
function moonbitlang$x$json5$$parse_error$84$(data) {
  return new Result$Err$14$(new Error$moonbitlang$47$x$47$json5$46$ParseError$46$ParseError(data));
}
function moonbitlang$x$json5$$invalid_char$46$inner$5$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  $bound_check(_tmp, offset);
  return moonbitlang$x$json5$$parse_error$5$(new $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidChar(moonbitlang$x$json5$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  $bound_check(_tmp, offset);
  return moonbitlang$x$json5$$parse_error$6$(new $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidChar(moonbitlang$x$json5$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$x$json5$$invalid_char$46$inner$8$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  $bound_check(_tmp, offset);
  return moonbitlang$x$json5$$parse_error$8$(new $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidChar(moonbitlang$x$json5$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$x$json5$$invalid_char$46$inner$84$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  $bound_check(_tmp, offset);
  return moonbitlang$x$json5$$parse_error$84$(new $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidChar(moonbitlang$x$json5$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$x$json5$$hex_digit_to_int(c) {
  return c >= 65 ? ((c & ~32) - 65 | 0) + 10 | 0 : c - 48 | 0;
}
function moonbitlang$x$json5$$ParseError$to_string(self) {
  const _ParseError = self;
  const _x = _ParseError._0;
  switch (_x.$tag) {
    case 0: {
      const _InvalidChar = _x;
      const _x$2 = _InvalidChar._0;
      const _line = _x$2.line;
      const _column = _x$2.column;
      const _c = _InvalidChar._1;
      return `Invalid character ${moonbitlang$core$builtin$$Show$to_string$58$(_c)} at line ${moonbitlang$core$builtin$$Show$to_string$4$(_line)}, column ${moonbitlang$core$builtin$$Show$to_string$4$(_column)}`;
    }
    case 1: {
      return "Unexpected end of file";
    }
    case 2: {
      const _InvalidNumber = _x;
      const _x$3 = _InvalidNumber._0;
      const _line$2 = _x$3.line;
      const _column$2 = _x$3.column;
      const _s = _InvalidNumber._1;
      return `Invalid number ${_s} at line ${moonbitlang$core$builtin$$Show$to_string$4$(_line$2)}, column ${moonbitlang$core$builtin$$Show$to_string$4$(_column$2)}`;
    }
    default: {
      const _InvalidIdentEscape = _x;
      const _x$4 = _InvalidIdentEscape._0;
      const _line$3 = _x$4.line;
      const _column$3 = _x$4.column;
      return `Invalid escape sequence in identifier at line ${moonbitlang$core$builtin$$Show$to_string$4$(_line$3)}, column ${moonbitlang$core$builtin$$Show$to_string$4$(_column$3)}`;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$27$(self, logger) {
  logger.method_0(logger.self, moonbitlang$x$json5$$ParseError$to_string(self));
}
function moonbitlang$x$json5$$read_char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _tmp = ctx.input;
    const _tmp$2 = ctx.offset;
    $bound_check(_tmp, _tmp$2);
    const c = _tmp.charCodeAt(_tmp$2);
    ctx.offset = ctx.offset + 1 | 0;
    if (c >= 55296 && c <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _tmp$3 = ctx.input;
        const _tmp$4 = ctx.offset;
        $bound_check(_tmp$3, _tmp$4);
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c;
  } else {
    return -1;
  }
}
function moonbitlang$x$json5$$lex_comment(ctx) {
  const _bind = moonbitlang$x$json5$$read_char(ctx);
  if (_bind === -1) {
    return moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 47: {
        while (true) {
          _L: {
            _L$2: {
              const _bind$2 = moonbitlang$x$json5$$read_char(ctx);
              if (_bind$2 === -1) {
                return new Result$Ok$12$(undefined);
              } else {
                const _Some$2 = _bind$2;
                const _x$2 = _Some$2;
                switch (_x$2) {
                  case 10: {
                    break _L$2;
                  }
                  case 13: {
                    break _L$2;
                  }
                  case 8232: {
                    break _L$2;
                  }
                  case 8233: {
                    break _L$2;
                  }
                }
              }
              break _L;
            }
            ctx.offset = ctx.offset - 1 | 0;
            return new Result$Ok$12$(undefined);
          }
          continue;
        }
      }
      case 42: {
        while (true) {
          const _bind$2 = moonbitlang$x$json5$$read_char(ctx);
          if (_bind$2 === -1) {
            const _bind$3 = moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          } else {
            const _Some$2 = _bind$2;
            const _x$2 = _Some$2;
            if (_x$2 === 42) {
              const _bind$3 = moonbitlang$x$json5$$read_char(ctx);
              if (_bind$3 === -1) {
              } else {
                const _Some$3 = _bind$3;
                const _x$3 = _Some$3;
                if (_x$3 === 47) {
                  return new Result$Ok$12$(undefined);
                }
              }
            }
          }
          continue;
        }
      }
      default: {
        return moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
      }
    }
  }
}
function moonbitlang$x$json5$$CharClass$contains(self, c) {
  let _tmp = 0;
  let _tmp$2 = self.length;
  while (true) {
    const left = _tmp;
    const right = _tmp$2;
    if (left < right) {
      const middle = (left + right | 0) / 2 | 0;
      const _bind = moonbitlang$core$array$$Array$at$21$(self, middle);
      const _min = _bind._0;
      const _max = _bind._1;
      if (c < _min) {
        _tmp$2 = middle;
        continue;
      } else {
        if (c > _max) {
          _tmp = middle + 1 | 0;
          continue;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  }
}
function moonbitlang$x$json5$$lex_skip_whitespace(ctx) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$x$json5$$read_char(ctx);
        if (_bind === -1) {
          return new Result$Ok$12$(undefined);
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 9: {
              break _L$2;
            }
            case 11: {
              break _L$2;
            }
            case 12: {
              break _L$2;
            }
            case 32: {
              break _L$2;
            }
            case 10: {
              break _L$2;
            }
            case 13: {
              break _L$2;
            }
            case 47: {
              const _bind$2 = moonbitlang$x$json5$$lex_comment(ctx);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              break _L;
            }
            default: {
              if (_x > 127 && moonbitlang$x$json5$$CharClass$contains(moonbitlang$x$json5$$non_ascii_whitespace, _x)) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return new Result$Ok$12$(undefined);
            }
          }
        }
      }
      break _L;
    }
    continue;
  }
}
function moonbitlang$x$json5$$lex_assert_char(ctx, c) {
  const _bind = moonbitlang$x$json5$$read_char(ctx);
  if (_bind === -1) {
    return moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind;
    const _c2 = _Some;
    return c === _c2 ? new Result$Ok$12$(undefined) : moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
  }
}
function moonbitlang$x$json5$$lex_number_end(ctx, start, end) {
  const s = moonbitlang$core$string$$String$substring$46$inner(ctx.input, start, end);
  let _bind;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = moonbitlang$core$strconv$$parse_double({ str: s, start: 0, end: s.length });
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        const _err = _bind$2;
        const _tmp$2 = _err._0;
        _try_err = _tmp$2;
        break _L$2;
      }
      _bind = new Result$Ok$7$(_tmp);
      break _L;
    }
    _bind = new Result$Err$7$(_try_err);
  }
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    const _d = _Ok._0;
    return new Result$Ok$13$(_d);
  } else {
    return moonbitlang$x$json5$$parse_error$8$(new $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidNumber(moonbitlang$x$json5$$offset_to_position(ctx.input, start), s));
  }
}
function moonbitlang$x$json5$$lex_decimal_exponent_integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = moonbitlang$x$json5$$read_char(ctx);
      if (_bind === -1) {
        const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$13$(_tmp);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 48 && _c <= 57) {
          break _L;
        }
        ctx.offset = ctx.offset - 1 | 0;
        const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$13$(_tmp);
      }
    }
    continue;
  }
}
function moonbitlang$x$json5$$lex_decimal_exponent_sign(ctx, start) {
  const _bind = moonbitlang$x$json5$$read_char(ctx);
  if (_bind === -1) {
    return moonbitlang$x$json5$$parse_error$8$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    if (_c >= 48 && _c <= 57) {
      const _bind$2 = moonbitlang$x$json5$$lex_decimal_exponent_integer(ctx, start);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$13$(_tmp);
    }
    ctx.offset = ctx.offset - 1 | 0;
    return moonbitlang$x$json5$$invalid_char$46$inner$8$(ctx, 0);
  }
}
function moonbitlang$x$json5$$lex_decimal_exponent(ctx, start) {
  _L: {
    const _bind = moonbitlang$x$json5$$read_char(ctx);
    if (_bind === -1) {
      return moonbitlang$x$json5$$parse_error$8$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 43: {
          break _L;
        }
        case 45: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            const _bind$2 = moonbitlang$x$json5$$lex_decimal_exponent_integer(ctx, start);
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            return new Result$Ok$13$(_tmp);
          }
          ctx.offset = ctx.offset - 1 | 0;
          return moonbitlang$x$json5$$invalid_char$46$inner$8$(ctx, 0);
        }
      }
    }
  }
  const _bind = moonbitlang$x$json5$$lex_decimal_exponent_sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new Result$Ok$13$(_tmp);
}
function moonbitlang$x$json5$$lex_decimal_fraction(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$x$json5$$read_char(ctx);
        if (_bind === -1) {
          const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new Result$Ok$13$(_tmp);
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
              let _tmp;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                return _bind$2;
              }
              return new Result$Ok$13$(_tmp);
            }
          }
        }
      }
      const _bind = moonbitlang$x$json5$$lex_decimal_exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$13$(_tmp);
    }
    continue;
  }
}
function moonbitlang$x$json5$$lex_decimal_point(ctx, start) {
  _L: {
    const _bind = moonbitlang$x$json5$$read_char(ctx);
    if (_bind === -1) {
      const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$13$(_tmp);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 101: {
          break _L;
        }
        case 69: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            const _bind$2 = moonbitlang$x$json5$$lex_decimal_fraction(ctx, start);
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            return new Result$Ok$13$(_tmp);
          }
          ctx.offset = ctx.offset - 1 | 0;
          const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new Result$Ok$13$(_tmp);
        }
      }
    }
  }
  const _bind = moonbitlang$x$json5$$lex_decimal_exponent(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new Result$Ok$13$(_tmp);
}
function moonbitlang$x$json5$$lex_decimal_integer(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$x$json5$$read_char(ctx);
        if (_bind === -1) {
          const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new Result$Ok$13$(_tmp);
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 46: {
              const _bind$2 = moonbitlang$x$json5$$lex_decimal_point(ctx, start);
              let _tmp;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                return _bind$2;
              }
              return new Result$Ok$13$(_tmp);
            }
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              const _bind$3 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
              let _tmp$2;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp$2 = _ok._0;
              } else {
                return _bind$3;
              }
              return new Result$Ok$13$(_tmp$2);
            }
          }
        }
      }
      const _bind = moonbitlang$x$json5$$lex_decimal_exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$13$(_tmp);
    }
    continue;
  }
}
function moonbitlang$x$json5$$lex_decimal_point_leading(ctx, start) {
  const _bind = moonbitlang$x$json5$$read_char(ctx);
  if (_bind === -1) {
    return moonbitlang$x$json5$$parse_error$8$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    if (_c >= 48 && _c <= 57) {
      const _bind$2 = moonbitlang$x$json5$$lex_decimal_fraction(ctx, start);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$13$(_tmp);
    }
    ctx.offset = ctx.offset - 1 | 0;
    return moonbitlang$x$json5$$invalid_char$46$inner$8$(ctx, 0);
  }
}
function moonbitlang$x$json5$$lex_infinity(ctx) {
  const _bind = moonbitlang$x$json5$$lex_assert_char(ctx, 110);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$x$json5$$lex_assert_char(ctx, 102);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = moonbitlang$x$json5$$lex_assert_char(ctx, 105);
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = moonbitlang$x$json5$$lex_assert_char(ctx, 110);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = moonbitlang$x$json5$$lex_assert_char(ctx, 105);
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = moonbitlang$x$json5$$lex_assert_char(ctx, 116);
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return moonbitlang$x$json5$$lex_assert_char(ctx, 121);
}
function moonbitlang$x$json5$$lex_hex_digits(ctx, n) {
  let r = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const _bind = moonbitlang$x$json5$$read_char(ctx);
      if (_bind === -1) {
        const _bind$2 = moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 65) {
          const d = ((_c & ~32) - 65 | 0) + 10 | 0;
          if (d > 15) {
            const _bind$2 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          r = r << 4 | d;
        } else {
          if (_c >= 48) {
            const d = _c - 48 | 0;
            if (d > 9) {
              const _bind$2 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
            }
            r = r << 4 | d;
          } else {
            const _bind$2 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$15$(r);
}
function moonbitlang$x$json5$$StringBuilder$add_char(self, c) {
  self.buffer = `${self.buffer}${moonbitlang$core$builtin$$Show$to_string$58$(c)}`;
}
function moonbitlang$x$json5$$StringBuilder$add_substring(self, s, start, end) {
  self.buffer = `${self.buffer}${moonbitlang$core$string$$String$substring$46$inner(s, start, end)}`;
}
function moonbitlang$x$json5$$StringBuilder$make() {
  return { buffer: "" };
}
function moonbitlang$x$json5$$lex_string$46$flush$124$112(_env, end) {
  const start = _env._2;
  const buf = _env._1;
  const ctx = _env._0;
  if (start.val > 0 && end > start.val) {
    moonbitlang$x$json5$$StringBuilder$add_substring(buf, ctx.input, start.val, end);
    return;
  } else {
    return;
  }
}
function moonbitlang$x$json5$$lex_string(ctx, quote) {
  const buf = moonbitlang$x$json5$$StringBuilder$make();
  const start = { val: ctx.offset };
  const _env = { _0: ctx, _1: buf, _2: start };
  while (true) {
    _L: {
      _L$2: {
        _L$3: {
          let c;
          _L$4: {
            _L$5: {
              const _bind = moonbitlang$x$json5$$read_char(ctx);
              if (_bind === -1) {
                const _bind$2 = moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 39: {
                    c = _x;
                    break _L$5;
                  }
                  case 34: {
                    c = _x;
                    break _L$5;
                  }
                  case 10: {
                    break _L$3;
                  }
                  case 13: {
                    break _L$3;
                  }
                  case 92: {
                    moonbitlang$x$json5$$lex_string$46$flush$124$112(_env, ctx.offset - 1 | 0);
                    const _bind$2 = moonbitlang$x$json5$$read_char(ctx);
                    if (_bind$2 === -1) {
                      const _bind$3 = moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _ok._0;
                      } else {
                        return _bind$3;
                      }
                    } else {
                      const _Some$2 = _bind$2;
                      const _x$2 = _Some$2;
                      switch (_x$2) {
                        case 98: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 8);
                          break;
                        }
                        case 102: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 12);
                          break;
                        }
                        case 110: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 10);
                          break;
                        }
                        case 114: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 13);
                          break;
                        }
                        case 116: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 9);
                          break;
                        }
                        case 118: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 11);
                          break;
                        }
                        case 39: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 39);
                          break;
                        }
                        case 34: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 34);
                          break;
                        }
                        case 92: {
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 92);
                          break;
                        }
                        case 48: {
                          const _bind$3 = moonbitlang$x$json5$$read_char(ctx);
                          if (_bind$3 === -1) {
                          } else {
                            const _Some$3 = _bind$3;
                            const _c = _Some$3;
                            ctx.offset = ctx.offset - 1 | 0;
                            if (_c >= 48 && _c <= 57) {
                              const _bind$4 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, 0);
                              if (_bind$4.$tag === 1) {
                                const _ok = _bind$4;
                                _ok._0;
                              } else {
                                return _bind$4;
                              }
                            }
                          }
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, 0);
                          break;
                        }
                        case 120: {
                          const _bind$4 = moonbitlang$x$json5$$lex_hex_digits(ctx, 2);
                          let c$2;
                          if (_bind$4.$tag === 1) {
                            const _ok = _bind$4;
                            c$2 = _ok._0;
                          } else {
                            return _bind$4;
                          }
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, c$2);
                          break;
                        }
                        case 117: {
                          const _bind$5 = moonbitlang$x$json5$$lex_hex_digits(ctx, 4);
                          let c$3;
                          if (_bind$5.$tag === 1) {
                            const _ok = _bind$5;
                            c$3 = _ok._0;
                          } else {
                            return _bind$5;
                          }
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, c$3);
                          break;
                        }
                        default: {
                          if (_x$2 >= 49 && _x$2 <= 57) {
                            const _bind$6 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
                            if (_bind$6.$tag === 1) {
                              const _ok = _bind$6;
                              _ok._0;
                            } else {
                              return _bind$6;
                            }
                          }
                          moonbitlang$x$json5$$StringBuilder$add_char(buf, _x$2);
                        }
                      }
                    }
                    start.val = ctx.offset;
                    break;
                  }
                  default: {
                    break _L;
                  }
                }
              }
              break _L$4;
            }
            if (c === quote) {
              moonbitlang$x$json5$$lex_string$46$flush$124$112(_env, ctx.offset - 1 | 0);
              break;
            }
          }
          break _L$2;
        }
        const _bind = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
      }
      break _L;
    }
    continue;
  }
  return new Result$Ok$16$(buf.buffer);
}
function moonbitlang$x$json5$$lex_hexadecimal_integer(ctx, n) {
  let _tmp = n + 0;
  while (true) {
    const n$2 = _tmp;
    const _bind = moonbitlang$x$json5$$read_char(ctx);
    if (_bind === -1) {
      return n$2;
    } else {
      const _Some = _bind;
      const _c = _Some;
      if (_c >= 48 && _c <= 57 || (_c >= 97 && _c <= 102 || _c >= 65 && _c <= 70)) {
        _tmp = n$2 * 16 + (moonbitlang$x$json5$$hex_digit_to_int(_c) + 0);
        continue;
      }
      ctx.offset = ctx.offset - 1 | 0;
      return n$2;
    }
  }
}
function moonbitlang$x$json5$$lex_hexadecimal(ctx, neg) {
  const _bind = moonbitlang$x$json5$$read_char(ctx);
  if (_bind === -1) {
    return moonbitlang$x$json5$$parse_error$8$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    if (_c >= 48 && _c <= 57 || (_c >= 97 && _c <= 102 || _c >= 65 && _c <= 70)) {
      const n = moonbitlang$x$json5$$lex_hexadecimal_integer(ctx, moonbitlang$x$json5$$hex_digit_to_int(_c));
      return new Result$Ok$13$(neg ? -n : n);
    }
    ctx.offset = ctx.offset - 1 | 0;
    return moonbitlang$x$json5$$invalid_char$46$inner$8$(ctx, 0);
  }
}
function moonbitlang$x$json5$$lex_zero(ctx, neg, start) {
  _L: {
    _L$2: {
      const _bind = moonbitlang$x$json5$$read_char(ctx);
      if (_bind === -1) {
        const _bind$2 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$13$(_tmp);
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 46: {
            const _bind$2 = moonbitlang$x$json5$$lex_decimal_point(ctx, start);
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            return new Result$Ok$13$(_tmp);
          }
          case 101: {
            break _L$2;
          }
          case 69: {
            break _L$2;
          }
          case 120: {
            break _L;
          }
          case 88: {
            break _L;
          }
          default: {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              const _bind$3 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, 0);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
            }
            ctx.offset = ctx.offset - 1 | 0;
            const _bind$3 = moonbitlang$x$json5$$lex_number_end(ctx, start, ctx.offset);
            let _tmp$2;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp$2 = _ok._0;
            } else {
              return _bind$3;
            }
            return new Result$Ok$13$(_tmp$2);
          }
        }
      }
    }
    const _bind = moonbitlang$x$json5$$lex_decimal_exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new Result$Ok$13$(_tmp);
  }
  const _bind = moonbitlang$x$json5$$lex_hexadecimal(ctx, neg);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new Result$Ok$13$(_tmp);
}
function moonbitlang$x$json5$$lex_value$46$inner(ctx, allow_rbracket) {
  while (true) {
    _L: {
      _L$2: {
        _L$3: {
          let c;
          _L$4: {
            _L$5: {
              _L$6: {
                _L$7: {
                  const _bind = moonbitlang$x$json5$$read_char(ctx);
                  if (_bind === -1) {
                    const _bind$2 = moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _ok._0;
                    } else {
                      return _bind$2;
                    }
                  } else {
                    const _Some = _bind;
                    const _x = _Some;
                    switch (_x) {
                      case 9: {
                        break _L$7;
                      }
                      case 11: {
                        break _L$7;
                      }
                      case 12: {
                        break _L$7;
                      }
                      case 32: {
                        break _L$7;
                      }
                      case 10: {
                        break _L$7;
                      }
                      case 13: {
                        break _L$7;
                      }
                      case 47: {
                        const _bind$2 = moonbitlang$x$json5$$lex_comment(ctx);
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          _ok._0;
                        } else {
                          return _bind$2;
                        }
                        break _L;
                      }
                      case 123: {
                        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$LBrace);
                      }
                      case 91: {
                        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$LBracket);
                      }
                      case 93: {
                        if (allow_rbracket) {
                          return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$RBracket);
                        } else {
                          const _bind$3 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
                          if (_bind$3.$tag === 1) {
                            const _ok = _bind$3;
                            _ok._0;
                          } else {
                            return _bind$3;
                          }
                        }
                        break;
                      }
                      case 110: {
                        const _bind$3 = moonbitlang$x$json5$$lex_assert_char(ctx, 117);
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _ok._0;
                        } else {
                          return _bind$3;
                        }
                        const _bind$4 = moonbitlang$x$json5$$lex_assert_char(ctx, 108);
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _ok._0;
                        } else {
                          return _bind$4;
                        }
                        const _bind$5 = moonbitlang$x$json5$$lex_assert_char(ctx, 108);
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          _ok._0;
                        } else {
                          return _bind$5;
                        }
                        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$Null);
                      }
                      case 116: {
                        const _bind$6 = moonbitlang$x$json5$$lex_assert_char(ctx, 114);
                        if (_bind$6.$tag === 1) {
                          const _ok = _bind$6;
                          _ok._0;
                        } else {
                          return _bind$6;
                        }
                        const _bind$7 = moonbitlang$x$json5$$lex_assert_char(ctx, 117);
                        if (_bind$7.$tag === 1) {
                          const _ok = _bind$7;
                          _ok._0;
                        } else {
                          return _bind$7;
                        }
                        const _bind$8 = moonbitlang$x$json5$$lex_assert_char(ctx, 101);
                        if (_bind$8.$tag === 1) {
                          const _ok = _bind$8;
                          _ok._0;
                        } else {
                          return _bind$8;
                        }
                        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$True);
                      }
                      case 102: {
                        const _bind$9 = moonbitlang$x$json5$$lex_assert_char(ctx, 97);
                        if (_bind$9.$tag === 1) {
                          const _ok = _bind$9;
                          _ok._0;
                        } else {
                          return _bind$9;
                        }
                        const _bind$10 = moonbitlang$x$json5$$lex_assert_char(ctx, 108);
                        if (_bind$10.$tag === 1) {
                          const _ok = _bind$10;
                          _ok._0;
                        } else {
                          return _bind$10;
                        }
                        const _bind$11 = moonbitlang$x$json5$$lex_assert_char(ctx, 115);
                        if (_bind$11.$tag === 1) {
                          const _ok = _bind$11;
                          _ok._0;
                        } else {
                          return _bind$11;
                        }
                        const _bind$12 = moonbitlang$x$json5$$lex_assert_char(ctx, 101);
                        if (_bind$12.$tag === 1) {
                          const _ok = _bind$12;
                          _ok._0;
                        } else {
                          return _bind$12;
                        }
                        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$False);
                      }
                      case 45: {
                        c = _x;
                        break _L$5;
                      }
                      case 43: {
                        c = _x;
                        break _L$5;
                      }
                      case 46: {
                        const _bind$13 = moonbitlang$x$json5$$lex_decimal_point_leading(ctx, ctx.offset - 1 | 0);
                        let n;
                        if (_bind$13.$tag === 1) {
                          const _ok = _bind$13;
                          n = _ok._0;
                        } else {
                          return _bind$13;
                        }
                        return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(n));
                      }
                      case 48: {
                        const _bind$14 = moonbitlang$x$json5$$lex_zero(ctx, false, ctx.offset - 1 | 0);
                        let n$2;
                        if (_bind$14.$tag === 1) {
                          const _ok = _bind$14;
                          n$2 = _ok._0;
                        } else {
                          return _bind$14;
                        }
                        return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(n$2));
                      }
                      case 49: {
                        break _L$3;
                      }
                      case 50: {
                        break _L$3;
                      }
                      case 51: {
                        break _L$3;
                      }
                      case 52: {
                        break _L$3;
                      }
                      case 53: {
                        break _L$3;
                      }
                      case 54: {
                        break _L$3;
                      }
                      case 55: {
                        break _L$3;
                      }
                      case 56: {
                        break _L$3;
                      }
                      case 57: {
                        break _L$3;
                      }
                      case 73: {
                        const _bind$15 = moonbitlang$x$json5$$lex_infinity(ctx);
                        if (_bind$15.$tag === 1) {
                          const _ok = _bind$15;
                          _ok._0;
                        } else {
                          return _bind$15;
                        }
                        return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(moonbitlang$core$double$$infinity));
                      }
                      case 78: {
                        const _bind$16 = moonbitlang$x$json5$$lex_assert_char(ctx, 97);
                        if (_bind$16.$tag === 1) {
                          const _ok = _bind$16;
                          _ok._0;
                        } else {
                          return _bind$16;
                        }
                        const _bind$17 = moonbitlang$x$json5$$lex_assert_char(ctx, 78);
                        if (_bind$17.$tag === 1) {
                          const _ok = _bind$17;
                          _ok._0;
                        } else {
                          return _bind$17;
                        }
                        return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(moonbitlang$core$double$$not_a_number));
                      }
                      case 34: {
                        const _bind$18 = moonbitlang$x$json5$$lex_string(ctx, 34);
                        let n$3;
                        if (_bind$18.$tag === 1) {
                          const _ok = _bind$18;
                          n$3 = _ok._0;
                        } else {
                          return _bind$18;
                        }
                        return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$String(n$3));
                      }
                      case 39: {
                        const _bind$19 = moonbitlang$x$json5$$lex_string(ctx, 39);
                        let _tmp;
                        if (_bind$19.$tag === 1) {
                          const _ok = _bind$19;
                          _tmp = _ok._0;
                        } else {
                          return _bind$19;
                        }
                        return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$String(_tmp));
                      }
                      default: {
                        if (_x > 127 && moonbitlang$x$json5$$CharClass$contains(moonbitlang$x$json5$$non_ascii_whitespace, _x)) {
                          break _L;
                        }
                        const _bind$20 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
                        if (_bind$20.$tag === 1) {
                          const _ok = _bind$20;
                          _ok._0;
                        } else {
                          return _bind$20;
                        }
                      }
                    }
                  }
                  break _L$6;
                }
                break _L;
              }
              break _L$4;
            }
            const _bind = moonbitlang$x$json5$$read_char(ctx);
            if (_bind === -1) {
              const _bind$2 = moonbitlang$x$json5$$parse_error$6$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
            } else {
              const _Some = _bind;
              const _x = _Some;
              switch (_x) {
                case 73: {
                  const _bind$2 = moonbitlang$x$json5$$lex_infinity(ctx);
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _ok._0;
                  } else {
                    return _bind$2;
                  }
                  return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(c === 45 ? moonbitlang$core$double$$neg_infinity : moonbitlang$core$double$$infinity));
                }
                case 78: {
                  const _bind$3 = moonbitlang$x$json5$$lex_assert_char(ctx, 97);
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                  const _bind$4 = moonbitlang$x$json5$$lex_assert_char(ctx, 78);
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _ok._0;
                  } else {
                    return _bind$4;
                  }
                  return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(moonbitlang$core$double$$not_a_number));
                }
                case 48: {
                  const _bind$5 = moonbitlang$x$json5$$lex_zero(ctx, c === 45, ctx.offset - 2 | 0);
                  let n;
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    n = _ok._0;
                  } else {
                    return _bind$5;
                  }
                  return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(n));
                }
                case 46: {
                  const _bind$6 = moonbitlang$x$json5$$lex_decimal_point_leading(ctx, ctx.offset - 2 | 0);
                  let n$2;
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    n$2 = _ok._0;
                  } else {
                    return _bind$6;
                  }
                  return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(n$2));
                }
                default: {
                  if (_x >= 49 && _x <= 57) {
                    const _bind$7 = moonbitlang$x$json5$$lex_decimal_integer(ctx, ctx.offset - 2 | 0);
                    let n$3;
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      n$3 = _ok._0;
                    } else {
                      return _bind$7;
                    }
                    return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(n$3));
                  }
                  const _bind$7 = moonbitlang$x$json5$$invalid_char$46$inner$6$(ctx, -1);
                  if (_bind$7.$tag === 1) {
                    const _ok = _bind$7;
                    _ok._0;
                  } else {
                    return _bind$7;
                  }
                }
              }
            }
          }
          break _L$2;
        }
        const _bind = moonbitlang$x$json5$$lex_decimal_integer(ctx, ctx.offset - 1 | 0);
        let n;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          n = _ok._0;
        } else {
          return _bind;
        }
        return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$Number(n));
      }
      break _L;
    }
    continue;
  }
}
function moonbitlang$x$json5$$lex_after_array_value(ctx) {
  const _bind = moonbitlang$x$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$x$json5$$read_char(ctx);
  if (_bind$2 === -1) {
    return moonbitlang$x$json5$$parse_error$84$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$RBracket);
      }
      case 44: {
        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$Comma);
      }
      default: {
        return moonbitlang$x$json5$$invalid_char$46$inner$84$(ctx, -1);
      }
    }
  }
}
function moonbitlang$x$json5$$lex_after_object_value(ctx) {
  const _bind = moonbitlang$x$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$x$json5$$read_char(ctx);
  if (_bind$2 === -1) {
    return moonbitlang$x$json5$$parse_error$84$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$RBrace);
      }
      case 44: {
        return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$Comma);
      }
      default: {
        return moonbitlang$x$json5$$invalid_char$46$inner$84$(ctx, -1);
      }
    }
  }
}
function moonbitlang$x$json5$$lex_after_property_name(ctx) {
  const _bind = moonbitlang$x$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$x$json5$$read_char(ctx);
  if (_bind$2 === -1) {
    return moonbitlang$x$json5$$parse_error$84$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 58) {
      return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$Colon);
    } else {
      return moonbitlang$x$json5$$invalid_char$46$inner$84$(ctx, -1);
    }
  }
}
function moonbitlang$x$json5$$lex_ident$46$inner$46$flush$124$86(_env, end) {
  const ctx = _env._2;
  const buffer = _env._1;
  const start = _env._0;
  if (start.val > 0 && end > start.val) {
    moonbitlang$x$json5$$StringBuilder$add_substring(buffer, ctx.input, start.val, end);
    return;
  } else {
    return;
  }
}
function moonbitlang$x$json5$$lex_ident$46$inner(ctx, start, buffer) {
  const start$2 = { val: start };
  const _env = { _0: start$2, _1: buffer, _2: ctx };
  _L: while (true) {
    _L$2: {
      _L$3: {
        _L$4: {
          const _bind = moonbitlang$x$json5$$read_char(ctx);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 92: {
                moonbitlang$x$json5$$lex_ident$46$inner$46$flush$124$86(_env, ctx.offset - 1 | 0);
                const _bind$2 = moonbitlang$x$json5$$lex_assert_char(ctx, 117);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = moonbitlang$x$json5$$lex_hex_digits(ctx, 4);
                let c;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  c = _ok._0;
                } else {
                  return _bind$3;
                }
                const c$2 = c;
                if (c$2 === 36 || (c$2 === 95 || (c$2 >= 97 && c$2 <= 122 || (c$2 >= 65 && c$2 <= 90 || (c$2 >= 48 && c$2 <= 57 || c$2 > 127 && moonbitlang$x$json5$$CharClass$contains(moonbitlang$x$json5$$non_ascii_id_continue, c$2)))))) {
                  moonbitlang$x$json5$$StringBuilder$add_char(buffer, c$2);
                  start$2.val = ctx.offset;
                  break _L$2;
                } else {
                  const _bind$4 = moonbitlang$x$json5$$parse_error$6$(new $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidIdentEscape(moonbitlang$x$json5$$offset_to_position(ctx.input, ctx.offset - 6 | 0)));
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _ok._0;
                  } else {
                    return _bind$4;
                  }
                }
                break;
              }
              case 36: {
                break _L$4;
              }
              case 95: {
                break _L$4;
              }
              default: {
                if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || (_x >= 48 && _x <= 57 || _x > 127 && moonbitlang$x$json5$$CharClass$contains(moonbitlang$x$json5$$non_ascii_id_continue, _x)))) {
                  break _L$2;
                }
                ctx.offset = ctx.offset - 1 | 0;
                break _L;
              }
            }
          }
          break _L$3;
        }
        break _L$2;
      }
      break _L$2;
    }
    continue;
  }
  moonbitlang$x$json5$$lex_ident$46$inner$46$flush$124$86(_env, ctx.offset);
  return new Result$Ok$16$(buffer.buffer);
}
function moonbitlang$x$json5$$lex_ident(ctx, start, buffer$46$opt) {
  let buffer;
  if (buffer$46$opt === undefined) {
    buffer = moonbitlang$x$json5$$StringBuilder$make();
  } else {
    const _Some = buffer$46$opt;
    buffer = _Some;
  }
  return moonbitlang$x$json5$$lex_ident$46$inner(ctx, start, buffer);
}
function moonbitlang$x$json5$$lex_property_name(ctx) {
  const _bind = moonbitlang$x$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  _L: {
    let c;
    _L$2: {
      const _bind$2 = moonbitlang$x$json5$$read_char(ctx);
      if (_bind$2 === -1) {
        return moonbitlang$x$json5$$parse_error$84$($64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidEof);
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        switch (_x) {
          case 125: {
            return new Result$Ok$14$($64$moonbitlang$47$x$47$json5$46$Token$RBrace);
          }
          case 39: {
            c = _x;
            break _L$2;
          }
          case 34: {
            c = _x;
            break _L$2;
          }
          case 36: {
            break _L;
          }
          case 95: {
            break _L;
          }
          case 92: {
            const _bind$3 = moonbitlang$x$json5$$lex_assert_char(ctx, 117);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = moonbitlang$x$json5$$lex_hex_digits(ctx, 4);
            let c$2;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              c$2 = _ok._0;
            } else {
              return _bind$4;
            }
            const c$3 = c$2;
            if (c$3 === 36 || (c$3 === 95 || (c$3 >= 97 && c$3 <= 122 || (c$3 >= 65 && c$3 <= 90 || c$3 > 127 && moonbitlang$x$json5$$CharClass$contains(moonbitlang$x$json5$$non_ascii_id_start, c$3))))) {
              const buffer = moonbitlang$x$json5$$StringBuilder$make();
              moonbitlang$x$json5$$StringBuilder$add_char(buffer, c$3);
              const _bind$5 = moonbitlang$x$json5$$lex_ident$46$inner(ctx, ctx.offset, buffer);
              let s;
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                s = _ok._0;
              } else {
                return _bind$5;
              }
              return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$String(s));
            } else {
              return moonbitlang$x$json5$$parse_error$84$(new $64$moonbitlang$47$x$47$json5$46$ParseErrorData$InvalidIdentEscape(moonbitlang$x$json5$$offset_to_position(ctx.input, ctx.offset - 6 | 0)));
            }
          }
          default: {
            if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || _x > 127 && moonbitlang$x$json5$$CharClass$contains(moonbitlang$x$json5$$non_ascii_id_start, _x))) {
              const _bind$5 = moonbitlang$x$json5$$lex_ident(ctx, ctx.offset - 1 | 0, undefined);
              let s;
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                s = _ok._0;
              } else {
                return _bind$5;
              }
              return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$String(s));
            }
            return moonbitlang$x$json5$$invalid_char$46$inner$84$(ctx, -1);
          }
        }
      }
    }
    const _bind$2 = moonbitlang$x$json5$$lex_string(ctx, c);
    let s;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      s = _ok._0;
    } else {
      return _bind$2;
    }
    return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$String(s));
  }
  const _bind$2 = moonbitlang$x$json5$$lex_ident(ctx, ctx.offset - 1 | 0, undefined);
  let s;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    s = _ok._0;
  } else {
    return _bind$2;
  }
  return new Result$Ok$14$(new $64$moonbitlang$47$x$47$json5$46$Token$String(s));
}
function moonbitlang$x$json5$$parse_value(ctx) {
  const _bind = moonbitlang$x$json5$$lex_value$46$inner(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return moonbitlang$x$json5$$parse_value2(ctx, tok);
}
function moonbitlang$x$json5$$parse_value2(ctx, tok) {
  switch (tok.$tag) {
    case 0: {
      return new Result$Ok$11$($64$moonbitlang$47$core$47$builtin$46$Json$Null);
    }
    case 1: {
      const _p = true;
      return new Result$Ok$11$(_p ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False);
    }
    case 2: {
      const _p$2 = false;
      return new Result$Ok$11$(_p$2 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False);
    }
    case 3: {
      const _Number = tok;
      const _n = _Number._0;
      const _p$3 = undefined;
      return new Result$Ok$11$(new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_n, _p$3));
    }
    case 4: {
      const _String = tok;
      const _s = _String._0;
      return new Result$Ok$11$(new $64$moonbitlang$47$core$47$builtin$46$Json$String(_s));
    }
    case 5: {
      return moonbitlang$x$json5$$parse_object(ctx);
    }
    case 7: {
      return moonbitlang$x$json5$$parse_array(ctx);
    }
    default: {
      return new Result$Ok$11$(moonbitlang$core$abort$$abort$5$("unreachable"));
    }
  }
}
function moonbitlang$x$json5$$parse_array(ctx) {
  const vec = [];
  _L: while (true) {
    _L$2: {
      const _bind = moonbitlang$x$json5$$lex_value$46$inner(ctx, true);
      let tok;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        tok = _ok._0;
      } else {
        return _bind;
      }
      if (tok.$tag === 8) {
        break;
      } else {
        const _bind$2 = moonbitlang$x$json5$$parse_value2(ctx, tok);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        moonbitlang$core$array$$Array$push$5$(vec, _tmp);
        const _bind$3 = moonbitlang$x$json5$$lex_after_array_value(ctx);
        let tok2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          tok2 = _ok._0;
        } else {
          return _bind$3;
        }
        switch (tok2.$tag) {
          case 9: {
            break _L$2;
          }
          case 8: {
            break _L;
          }
          default: {
            moonbitlang$core$abort$$abort$6$("unreachable");
          }
        }
      }
      break _L$2;
    }
    continue;
  }
  return new Result$Ok$11$(new $64$moonbitlang$47$core$47$builtin$46$Json$Array(vec));
}
function moonbitlang$x$json5$$parse_object(ctx) {
  const map = moonbitlang$core$builtin$$Map$new$46$inner$48$(8);
  _L: while (true) {
    _L$2: {
      const _bind = moonbitlang$x$json5$$lex_property_name(ctx);
      let tok;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        tok = _ok._0;
      } else {
        return _bind;
      }
      switch (tok.$tag) {
        case 6: {
          break _L;
        }
        case 4: {
          const _String = tok;
          const _name = _String._0;
          const _bind$2 = moonbitlang$x$json5$$lex_after_property_name(ctx);
          let tok2;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            tok2 = _ok._0;
          } else {
            return _bind$2;
          }
          if (tok2.$tag === 10) {
            const _bind$3 = moonbitlang$x$json5$$parse_value(ctx);
            let val;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              val = _ok._0;
            } else {
              return _bind$3;
            }
            moonbitlang$core$builtin$$Map$set$48$(map, _name, val);
            const _bind$4 = moonbitlang$x$json5$$lex_after_object_value(ctx);
            let tok3;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              tok3 = _ok._0;
            } else {
              return _bind$4;
            }
            switch (tok3.$tag) {
              case 9: {
                break _L$2;
              }
              case 6: {
                break _L;
              }
              default: {
                moonbitlang$core$abort$$abort$6$("unreachable");
              }
            }
          } else {
            moonbitlang$core$abort$$abort$6$("unreachable");
          }
          break;
        }
        default: {
          moonbitlang$core$abort$$abort$6$("unreachable");
        }
      }
      break _L$2;
    }
    continue;
  }
  return new Result$Ok$11$(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(map));
}
function moonbitlang$x$json5$$ParseContext$make(input) {
  return { offset: 0, input: input, end_offset: input.length };
}
function moonbitlang$x$json5$$parse(input) {
  const ctx = moonbitlang$x$json5$$ParseContext$make(input);
  const _bind = moonbitlang$x$json5$$parse_value(ctx);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$x$json5$$lex_skip_whitespace(ctx);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  return ctx.offset >= ctx.end_offset ? new Result$Ok$11$(val) : moonbitlang$x$json5$$invalid_char$46$inner$5$(ctx, 0);
}
function moonbitlang$x$internal$ffi$$utf8_bytes_to_mbt_string(bytes) {
  const res = [];
  const len = bytes.length;
  let i = 0;
  while (true) {
    if (i < len) {
      const _tmp = i;
      $bound_check(bytes, _tmp);
      let c = bytes[_tmp];
      if (c < 128) {
        moonbitlang$core$array$$Array$push$58$(res, c);
        i = i + 1 | 0;
      } else {
        if (c < 224) {
          if ((i + 1 | 0) >= len) {
            break;
          }
          const _tmp$2 = (c & 31) << 6;
          const _tmp$3 = i + 1 | 0;
          $bound_check(bytes, _tmp$3);
          c = _tmp$2 | bytes[_tmp$3] & 63;
          moonbitlang$core$array$$Array$push$58$(res, c);
          i = i + 2 | 0;
        } else {
          if (c < 240) {
            if ((i + 2 | 0) >= len) {
              break;
            }
            const _tmp$2 = (c & 15) << 12;
            const _tmp$3 = i + 1 | 0;
            $bound_check(bytes, _tmp$3);
            const _tmp$4 = _tmp$2 | (bytes[_tmp$3] & 63) << 6;
            const _tmp$5 = i + 2 | 0;
            $bound_check(bytes, _tmp$5);
            c = _tmp$4 | bytes[_tmp$5] & 63;
            moonbitlang$core$array$$Array$push$58$(res, c);
            i = i + 3 | 0;
          } else {
            if ((i + 3 | 0) >= len) {
              break;
            }
            const _tmp$2 = (c & 7) << 18;
            const _tmp$3 = i + 1 | 0;
            $bound_check(bytes, _tmp$3);
            const _tmp$4 = _tmp$2 | (bytes[_tmp$3] & 63) << 12;
            const _tmp$5 = i + 2 | 0;
            $bound_check(bytes, _tmp$5);
            const _tmp$6 = _tmp$4 | (bytes[_tmp$5] & 63) << 6;
            const _tmp$7 = i + 3 | 0;
            $bound_check(bytes, _tmp$7);
            c = _tmp$6 | bytes[_tmp$7] & 63;
            c = c - 65536 | 0;
            moonbitlang$core$array$$Array$push$58$(res, (c >> 10) + 55296 | 0);
            moonbitlang$core$array$$Array$push$58$(res, (c & 1023) + 56320 | 0);
            i = i + 4 | 0;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return moonbitlang$core$string$$String$from_array(res);
}
function moonbitlang$core$builtin$$Show$output$39$(_x_51, _x_52) {
  const _IOError = _x_51;
  const _$42$err_payload_53 = _IOError._0;
  _x_52.method_0(_x_52.self, "IOError(");
  moonbitlang$core$builtin$$Logger$write_object$11$(_x_52, _$42$err_payload_53);
  _x_52.method_0(_x_52.self, ")");
}
function moonbitlang$x$fs$$read_file_to_bytes_internal(path) {
  const res = moonbitlang$x$fs$$read_file_ffi(path);
  if (res === -1) {
    return new Result$Err$17$(new Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(moonbitlang$x$fs$$get_error_message_ffi()));
  }
  return new Result$Ok$17$(moonbitlang$x$fs$$get_file_content_ffi());
}
function moonbitlang$x$fs$$read_file_to_string_internal$46$inner(path, encoding) {
  if (encoding === "utf8") {
    const _bind = moonbitlang$x$fs$$read_file_to_bytes_internal(path);
    let bytes;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      bytes = _ok._0;
    } else {
      return _bind;
    }
    return new Result$Ok$18$(moonbitlang$x$internal$ffi$$utf8_bytes_to_mbt_string(bytes));
  } else {
    return new Result$Err$18$(new Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(`Unsupported encoding: ${encoding}, only utf8 is supported for now`));
  }
}
function moonbitlang$x$fs$$read_file_to_string$46$inner(path, encoding) {
  return moonbitlang$x$fs$$read_file_to_string_internal$46$inner(path, encoding);
}
function moonbitlang$core$builtin$$Show$output$31$(_x_272, _x_273) {
  switch (_x_272) {
    case 0: {
      _x_273.method_0(_x_273.self, "Static");
      return;
    }
    case 1: {
      _x_273.method_0(_x_273.self, "Kinematic");
      return;
    }
    default: {
      _x_273.method_0(_x_273.self, "Dynamic");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$34$(_x_228, _x_229) {
  switch (_x_228.$tag) {
    case 0: {
      const _Box = _x_228;
      const _$42$arg_230 = _Box._0;
      const _$42$arg_231 = _Box._1;
      _x_229.method_0(_x_229.self, "Box(");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_229, _$42$arg_230);
      _x_229.method_0(_x_229.self, ", ");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_229, _$42$arg_231);
      _x_229.method_0(_x_229.self, ")");
      return;
    }
    case 1: {
      const _Circle = _x_228;
      const _$42$arg_232 = _Circle._0;
      _x_229.method_0(_x_229.self, "Circle(");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_229, _$42$arg_232);
      _x_229.method_0(_x_229.self, ")");
      return;
    }
    default: {
      const _Polygon = _x_228;
      const _$42$arg_233 = _Polygon._0;
      _x_229.method_0(_x_229.self, "Polygon(");
      moonbitlang$core$builtin$$Logger$write_object$9$(_x_229, _$42$arg_233);
      _x_229.method_0(_x_229.self, ")");
      return;
    }
  }
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapLoaderShapeType$to_box2d_shapedef(self) {
  switch (self.$tag) {
    case 0: {
      const _Box = self;
      const _width = _Box._0;
      const _height = _Box._1;
      const shape = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
      Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(shape, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(_width / 2, _height / 2));
      return { self: shape, method_0: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$, method_1: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$computeMass$72$, method_2: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalPosition$72$, method_3: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalPosition$72$, method_4: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalRotation$72$, method_5: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalRotation$72$, method_6: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$72$, method_7: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getFriction$72$, method_8: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$72$, method_9: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getRestitution$72$, method_10: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$, method_11: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getDensity$72$, method_12: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setCategoryBits$72$, method_13: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getCategoryBits$72$, method_14: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setMaskBits$72$, method_15: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getMaskBits$72$, method_16: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$, method_17: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getGroupIndex$72$ };
    }
    case 1: {
      const _Circle = self;
      const _radius = _Circle._0;
      const shape$2 = Demonmasterlqx$box2d_ffi$box2d$$b2CircleDef();
      Demonmasterlqx$box2d_ffi$box2d$$B2CircleDef$setRadius(shape$2, _radius);
      return { self: shape$2, method_0: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$, method_1: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$computeMass$73$, method_2: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalPosition$73$, method_3: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalPosition$73$, method_4: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalRotation$73$, method_5: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalRotation$73$, method_6: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$73$, method_7: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getFriction$73$, method_8: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$73$, method_9: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getRestitution$73$, method_10: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$73$, method_11: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getDensity$73$, method_12: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setCategoryBits$73$, method_13: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getCategoryBits$73$, method_14: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setMaskBits$73$, method_15: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getMaskBits$73$, method_16: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$73$, method_17: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getGroupIndex$73$ };
    }
    default: {
      const _Polygon = self;
      const _vertices = _Polygon._0;
      const shape$3 = Demonmasterlqx$box2d_ffi$box2d$$b2PolyDef();
      const _p = new Array(_vertices.length);
      const _p$2 = _vertices.length;
      let _tmp = 0;
      while (true) {
        const _p$3 = _tmp;
        if (_p$3 < _p$2) {
          const _p$4 = _vertices[_p$3];
          _p[_p$3] = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(_p$4._0, _p$4._1);
          _tmp = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const vecs = _p;
      Demonmasterlqx$box2d_ffi$box2d$$B2PolygonDef$setVertices(shape$3, vecs);
      return { self: shape$3, method_0: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$71$, method_1: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$computeMass$74$, method_2: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalPosition$74$, method_3: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalPosition$74$, method_4: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalRotation$74$, method_5: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getLocalRotation$74$, method_6: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$74$, method_7: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getFriction$74$, method_8: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$74$, method_9: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getRestitution$74$, method_10: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$74$, method_11: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getDensity$74$, method_12: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setCategoryBits$74$, method_13: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getCategoryBits$74$, method_14: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setMaskBits$74$, method_15: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getMaskBits$74$, method_16: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$74$, method_17: Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getGroupIndex$74$ };
    }
  }
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$get_bodydef(body_) {
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  const shape_def = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapLoaderShapeType$to_box2d_shapedef(body_.fixture_type);
  const _bind = body_.body_def_type;
  if (_bind === 0) {
    shape_def.method_10(shape_def.self, 0);
  } else {
    shape_def.method_10(shape_def.self, body_.density);
  }
  shape_def.method_6(shape_def.self, body_.friction);
  shape_def.method_8(shape_def.self, body_.restitution);
  shape_def.method_14(shape_def.self, body_.filter_mask_bits);
  shape_def.method_12(shape_def.self, body_.filter_category_bits);
  shape_def.method_16(shape_def.self, body_.filter_group_index);
  shape_def.method_2(shape_def.self, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 0));
  shape_def.method_4(shape_def.self, 0);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, shape_def.method_0(shape_def.self));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(body_.position._0, body_.position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(body_def, body_.angle);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setLinearVelocity(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(body_.linear_velocity._0, body_.linear_velocity._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAngularVelocity(body_def, body_.angular_velocity);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setLinearDamping(body_def, body_.linear_damping);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAngularDamping(body_def, body_.angular_damping);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(body_def, body_.allow_sleep);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setIsSleeping(body_def, false);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPreventRotation(body_def, body_.fixed_rotation);
  return body_def;
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_body_type_from_json(type_str) {
  switch (type_str) {
    case "static": {
      return new Result$Ok$19$(0);
    }
    case "kinematic": {
      return new Result$Ok$19$(1);
    }
    case "dynamic": {
      return new Result$Ok$19$(2);
    }
    default: {
      return new Result$Err$20$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError(`Unknown body type: ${type_str}`));
    }
  }
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_shape_type_from_json(shape_json) {
  _L: {
    if (shape_json.$tag === 6) {
      const _Object = shape_json;
      const _x = _Object._0;
      const _x$2 = moonbitlang$core$builtin$$Map$get$48$(_x, "type");
      if (_x$2 === undefined) {
        break _L;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 4) {
          const _String = _x$3;
          const _x$4 = _String._0;
          switch (_x$4) {
            case "box": {
              const _x$5 = moonbitlang$core$builtin$$Map$get$48$(_x, "params");
              if (_x$5 === undefined) {
                break _L;
              } else {
                const _Some$2 = _x$5;
                const _x$6 = _Some$2;
                if (_x$6.$tag === 6) {
                  const _Object$2 = _x$6;
                  const _x$7 = _Object$2._0;
                  const _x$8 = moonbitlang$core$builtin$$Map$get$48$(_x$7, "width");
                  if (_x$8 === undefined) {
                    break _L;
                  } else {
                    const _Some$3 = _x$8;
                    const _x$9 = _Some$3;
                    if (_x$9.$tag === 3) {
                      const _Number = _x$9;
                      const _width = _Number._0;
                      const _x$10 = moonbitlang$core$builtin$$Map$get$48$(_x$7, "height");
                      if (_x$10 === undefined) {
                        break _L;
                      } else {
                        const _Some$4 = _x$10;
                        const _x$11 = _Some$4;
                        if (_x$11.$tag === 3) {
                          const _Number$2 = _x$11;
                          const _height = _Number$2._0;
                          return new Result$Ok$21$(new $64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Box(_width, _height));
                        } else {
                          break _L;
                        }
                      }
                    } else {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              }
            }
            case "circle": {
              const _x$6 = moonbitlang$core$builtin$$Map$get$48$(_x, "params");
              if (_x$6 === undefined) {
                break _L;
              } else {
                const _Some$2 = _x$6;
                const _x$7 = _Some$2;
                if (_x$7.$tag === 6) {
                  const _Object$2 = _x$7;
                  const _x$8 = _Object$2._0;
                  const _x$9 = moonbitlang$core$builtin$$Map$get$48$(_x$8, "radius");
                  if (_x$9 === undefined) {
                    break _L;
                  } else {
                    const _Some$3 = _x$9;
                    const _x$10 = _Some$3;
                    if (_x$10.$tag === 3) {
                      const _Number = _x$10;
                      const _radius = _Number._0;
                      return new Result$Ok$21$(new $64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Circle(_radius));
                    } else {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              }
            }
            case "polygon": {
              const _x$7 = moonbitlang$core$builtin$$Map$get$48$(_x, "params");
              if (_x$7 === undefined) {
                break _L;
              } else {
                const _Some$2 = _x$7;
                const _x$8 = _Some$2;
                if (_x$8.$tag === 6) {
                  const _Object$2 = _x$8;
                  const _x$9 = _Object$2._0;
                  const _x$10 = moonbitlang$core$builtin$$Map$get$48$(_x$9, "vertices");
                  if (_x$10 === undefined) {
                    break _L;
                  } else {
                    const _Some$3 = _x$10;
                    const _vertices = _Some$3;
                    const verts = moonbitlang$core$json$$Json$as_array(_vertices);
                    if (verts.$tag === 0) {
                      return new Result$Err$22$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Polygon vertices is not an array"));
                    } else {
                      const _Some$4 = verts;
                      const _arr = _Some$4._0;
                      let _bind;
                      let _p;
                      _L$2: {
                        _L$3: {
                          const _p$2 = new Array(_arr.length);
                          const _p$3 = _arr.length;
                          let _tmp = 0;
                          while (true) {
                            const _p$4 = _tmp;
                            if (_p$4 < _p$3) {
                              const _p$5 = _arr[_p$4];
                              let _bind$2;
                              let _p$6;
                              _L$4: {
                                _L$5: {
                                  _L$6: {
                                    _L$7: {
                                      if (_p$5.$tag === 5) {
                                        const _p$7 = _p$5;
                                        const _p$8 = _p$7._0;
                                        if (_p$8.length === 2) {
                                          const _p$9 = _p$8[0];
                                          if (_p$9.$tag === 3) {
                                            const _p$10 = _p$9;
                                            const _p$11 = _p$10._0;
                                            const _p$12 = _p$8[1];
                                            if (_p$12.$tag === 3) {
                                              const _p$13 = _p$12;
                                              const _p$14 = _p$13._0;
                                              _bind$2 = new Result$Ok$23$({ _0: _p$11, _1: _p$14 });
                                            } else {
                                              break _L$7;
                                            }
                                          } else {
                                            break _L$7;
                                          }
                                        } else {
                                          break _L$7;
                                        }
                                      } else {
                                        break _L$7;
                                      }
                                      break _L$6;
                                    }
                                    const _tmp$2 = new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Invalid vertex format");
                                    _p$6 = _tmp$2;
                                    break _L$5;
                                  }
                                  break _L$4;
                                }
                                _bind$2 = new Result$Err$23$(_p$6);
                              }
                              let _tmp$2;
                              if (_bind$2.$tag === 1) {
                                const _ok = _bind$2;
                                _tmp$2 = _ok._0;
                              } else {
                                const _err = _bind$2;
                                const _tmp$3 = _err._0;
                                _p = _tmp$3;
                                break _L$3;
                              }
                              _p$2[_p$4] = _tmp$2;
                              _tmp = _p$4 + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          _bind = new Result$Ok$4$(_p$2);
                          break _L$2;
                        }
                        _bind = new Result$Err$4$(_p);
                      }
                      let points;
                      if (_bind.$tag === 1) {
                        const _ok = _bind;
                        points = _ok._0;
                      } else {
                        return _bind;
                      }
                      return new Result$Ok$21$(new $64$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderShapeType$Polygon(points));
                    }
                  }
                } else {
                  break _L;
                }
              }
            }
            default: {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  return new Result$Err$22$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Unknown shape type"));
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_body_def_from_json(body_json) {
  _L: {
    if (body_json.$tag === 6) {
      const _Object = body_json;
      const _x = _Object._0;
      const _x$2 = moonbitlang$core$builtin$$Map$get$48$(_x, "id");
      if (_x$2 === undefined) {
        break _L;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 4) {
          const _String = _x$3;
          const _id = _String._0;
          const _x$4 = moonbitlang$core$builtin$$Map$get$48$(_x, "body_def");
          if (_x$4 === undefined) {
            break _L;
          } else {
            const _Some$2 = _x$4;
            const _x$5 = _Some$2;
            if (_x$5.$tag === 6) {
              const _Object$2 = _x$5;
              const _x$6 = _Object$2._0;
              const _x$7 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "type");
              if (_x$7 === undefined) {
                break _L;
              } else {
                const _Some$3 = _x$7;
                const _x$8 = _Some$3;
                if (_x$8.$tag === 4) {
                  const _String$2 = _x$8;
                  const _type_str = _String$2._0;
                  const _x$9 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "position");
                  if (_x$9 === undefined) {
                    break _L;
                  } else {
                    const _Some$4 = _x$9;
                    const _x$10 = _Some$4;
                    if (_x$10.$tag === 5) {
                      const _Array = _x$10;
                      const _x$11 = _Array._0;
                      if (_x$11.length === 2) {
                        const _x$12 = _x$11[0];
                        if (_x$12.$tag === 3) {
                          const _Number = _x$12;
                          const _px = _Number._0;
                          const _x$13 = _x$11[1];
                          if (_x$13.$tag === 3) {
                            const _Number$2 = _x$13;
                            const _py = _Number$2._0;
                            const _x$14 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "angle");
                            if (_x$14 === undefined) {
                              break _L;
                            } else {
                              const _Some$5 = _x$14;
                              const _x$15 = _Some$5;
                              if (_x$15.$tag === 3) {
                                const _Number$3 = _x$15;
                                const _angle = _Number$3._0;
                                const _x$16 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "linear_velocity");
                                if (_x$16 === undefined) {
                                  break _L;
                                } else {
                                  const _Some$6 = _x$16;
                                  const _x$17 = _Some$6;
                                  if (_x$17.$tag === 5) {
                                    const _Array$2 = _x$17;
                                    const _x$18 = _Array$2._0;
                                    if (_x$18.length === 2) {
                                      const _x$19 = _x$18[0];
                                      if (_x$19.$tag === 3) {
                                        const _Number$4 = _x$19;
                                        const _lvx = _Number$4._0;
                                        const _x$20 = _x$18[1];
                                        if (_x$20.$tag === 3) {
                                          const _Number$5 = _x$20;
                                          const _lvy = _Number$5._0;
                                          const _x$21 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "angular_velocity");
                                          if (_x$21 === undefined) {
                                            break _L;
                                          } else {
                                            const _Some$7 = _x$21;
                                            const _x$22 = _Some$7;
                                            if (_x$22.$tag === 3) {
                                              const _Number$6 = _x$22;
                                              const _angular_velocity = _Number$6._0;
                                              const _x$23 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "linear_damping");
                                              if (_x$23 === undefined) {
                                                break _L;
                                              } else {
                                                const _Some$8 = _x$23;
                                                const _x$24 = _Some$8;
                                                if (_x$24.$tag === 3) {
                                                  const _Number$7 = _x$24;
                                                  const _linear_damping = _Number$7._0;
                                                  const _x$25 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "angular_damping");
                                                  if (_x$25 === undefined) {
                                                    break _L;
                                                  } else {
                                                    const _Some$9 = _x$25;
                                                    const _x$26 = _Some$9;
                                                    if (_x$26.$tag === 3) {
                                                      const _Number$8 = _x$26;
                                                      const _angular_damping = _Number$8._0;
                                                      const _x$27 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "allow_sleep");
                                                      if (_x$27 === undefined) {
                                                        break _L;
                                                      } else {
                                                        const _Some$10 = _x$27;
                                                        const _allow_sleep = _Some$10;
                                                        const _x$28 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "awake");
                                                        if (_x$28 === undefined) {
                                                          break _L;
                                                        } else {
                                                          const _Some$11 = _x$28;
                                                          const _awake = _Some$11;
                                                          const _x$29 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "fixed_rotation");
                                                          if (_x$29 === undefined) {
                                                            break _L;
                                                          } else {
                                                            const _Some$12 = _x$29;
                                                            const _fixed_rotation = _Some$12;
                                                            const _x$30 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "bullet");
                                                            if (_x$30 === undefined) {
                                                              break _L;
                                                            } else {
                                                              const _Some$13 = _x$30;
                                                              const _bullet = _Some$13;
                                                              const _x$31 = moonbitlang$core$builtin$$Map$get$48$(_x$6, "gravity_scale");
                                                              if (_x$31 === undefined) {
                                                                break _L;
                                                              } else {
                                                                const _Some$14 = _x$31;
                                                                const _x$32 = _Some$14;
                                                                if (_x$32.$tag === 3) {
                                                                  const _Number$9 = _x$32;
                                                                  const _gravity_scale = _Number$9._0;
                                                                  const _x$33 = moonbitlang$core$builtin$$Map$get$48$(_x, "fixtures");
                                                                  if (_x$33 === undefined) {
                                                                    break _L;
                                                                  } else {
                                                                    const _Some$15 = _x$33;
                                                                    const _x$34 = _Some$15;
                                                                    if (_x$34.$tag === 5) {
                                                                      const _Array$3 = _x$34;
                                                                      const _x$35 = _Array$3._0;
                                                                      if (_x$35.length === 1) {
                                                                        const _x$36 = _x$35[0];
                                                                        if (_x$36.$tag === 6) {
                                                                          const _Object$3 = _x$36;
                                                                          const _x$37 = _Object$3._0;
                                                                          const _x$38 = moonbitlang$core$builtin$$Map$get$48$(_x$37, "shape");
                                                                          if (_x$38 === undefined) {
                                                                            break _L;
                                                                          } else {
                                                                            const _Some$16 = _x$38;
                                                                            const _shape_json = _Some$16;
                                                                            const _x$39 = moonbitlang$core$builtin$$Map$get$48$(_x$37, "fixture_def");
                                                                            if (_x$39 === undefined) {
                                                                              break _L;
                                                                            } else {
                                                                              const _Some$17 = _x$39;
                                                                              const _x$40 = _Some$17;
                                                                              if (_x$40.$tag === 6) {
                                                                                const _Object$4 = _x$40;
                                                                                const _x$41 = _Object$4._0;
                                                                                const _x$42 = moonbitlang$core$builtin$$Map$get$48$(_x$41, "density");
                                                                                if (_x$42 === undefined) {
                                                                                  break _L;
                                                                                } else {
                                                                                  const _Some$18 = _x$42;
                                                                                  const _x$43 = _Some$18;
                                                                                  if (_x$43.$tag === 3) {
                                                                                    const _Number$10 = _x$43;
                                                                                    const _density = _Number$10._0;
                                                                                    const _x$44 = moonbitlang$core$builtin$$Map$get$48$(_x$41, "friction");
                                                                                    if (_x$44 === undefined) {
                                                                                      break _L;
                                                                                    } else {
                                                                                      const _Some$19 = _x$44;
                                                                                      const _x$45 = _Some$19;
                                                                                      if (_x$45.$tag === 3) {
                                                                                        const _Number$11 = _x$45;
                                                                                        const _friction = _Number$11._0;
                                                                                        const _x$46 = moonbitlang$core$builtin$$Map$get$48$(_x$41, "restitution");
                                                                                        if (_x$46 === undefined) {
                                                                                          break _L;
                                                                                        } else {
                                                                                          const _Some$20 = _x$46;
                                                                                          const _x$47 = _Some$20;
                                                                                          if (_x$47.$tag === 3) {
                                                                                            const _Number$12 = _x$47;
                                                                                            const _restitution = _Number$12._0;
                                                                                            const _x$48 = moonbitlang$core$builtin$$Map$get$48$(_x$41, "is_sensor");
                                                                                            if (_x$48 === undefined) {
                                                                                              break _L;
                                                                                            } else {
                                                                                              const _Some$21 = _x$48;
                                                                                              const _is_sensor = _Some$21;
                                                                                              const _x$49 = moonbitlang$core$builtin$$Map$get$48$(_x$41, "filter_category_bits");
                                                                                              if (_x$49 === undefined) {
                                                                                                break _L;
                                                                                              } else {
                                                                                                const _Some$22 = _x$49;
                                                                                                const _x$50 = _Some$22;
                                                                                                if (_x$50.$tag === 3) {
                                                                                                  const _Number$13 = _x$50;
                                                                                                  const _filter_category_bits = _Number$13._0;
                                                                                                  const _x$51 = moonbitlang$core$builtin$$Map$get$48$(_x$41, "filter_mask_bits");
                                                                                                  if (_x$51 === undefined) {
                                                                                                    break _L;
                                                                                                  } else {
                                                                                                    const _Some$23 = _x$51;
                                                                                                    const _x$52 = _Some$23;
                                                                                                    if (_x$52.$tag === 3) {
                                                                                                      const _Number$14 = _x$52;
                                                                                                      const _filter_mask_bits = _Number$14._0;
                                                                                                      const _x$53 = moonbitlang$core$builtin$$Map$get$48$(_x$41, "filter_group_index");
                                                                                                      if (_x$53 === undefined) {
                                                                                                        break _L;
                                                                                                      } else {
                                                                                                        const _Some$24 = _x$53;
                                                                                                        const _x$54 = _Some$24;
                                                                                                        if (_x$54.$tag === 3) {
                                                                                                          const _Number$15 = _x$54;
                                                                                                          const _filter_group_index = _Number$15._0;
                                                                                                          let body_def_type;
                                                                                                          let _try_err;
                                                                                                          _L$2: {
                                                                                                            _L$3: {
                                                                                                              const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_body_type_from_json(_type_str);
                                                                                                              if (_bind.$tag === 1) {
                                                                                                                const _ok = _bind;
                                                                                                                body_def_type = _ok._0;
                                                                                                              } else {
                                                                                                                const _err = _bind;
                                                                                                                const _tmp = _err._0;
                                                                                                                _try_err = _tmp;
                                                                                                                break _L$3;
                                                                                                              }
                                                                                                              break _L$2;
                                                                                                            }
                                                                                                            return new Result$Err$24$(_try_err);
                                                                                                          }
                                                                                                          const position = { _0: _px, _1: _py };
                                                                                                          const linear_velocity = { _0: _lvx, _1: _lvy };
                                                                                                          let fixture_shape;
                                                                                                          let _try_err$2;
                                                                                                          _L$3: {
                                                                                                            _L$4: {
                                                                                                              const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_shape_type_from_json(_shape_json);
                                                                                                              if (_bind.$tag === 1) {
                                                                                                                const _ok = _bind;
                                                                                                                fixture_shape = _ok._0;
                                                                                                              } else {
                                                                                                                const _err = _bind;
                                                                                                                const _tmp = _err._0;
                                                                                                                _try_err$2 = _tmp;
                                                                                                                break _L$4;
                                                                                                              }
                                                                                                              break _L$3;
                                                                                                            }
                                                                                                            return new Result$Err$24$(_try_err$2);
                                                                                                          }
                                                                                                          const _bind = moonbitlang$core$json$$Json$as_bool(_allow_sleep);
                                                                                                          let _tmp;
                                                                                                          if (_bind === -1) {
                                                                                                            moonbitlang$core$builtin$$println$11$("allow_sleep is not a bool, defaulting to true");
                                                                                                            _tmp = true;
                                                                                                          } else {
                                                                                                            _tmp = _bind;
                                                                                                          }
                                                                                                          const _tmp$2 = _tmp;
                                                                                                          const _bind$2 = moonbitlang$core$json$$Json$as_bool(_awake);
                                                                                                          let _tmp$3;
                                                                                                          if (_bind$2 === -1) {
                                                                                                            moonbitlang$core$builtin$$println$11$("awake is not a bool, defaulting to true");
                                                                                                            _tmp$3 = true;
                                                                                                          } else {
                                                                                                            _tmp$3 = _bind$2;
                                                                                                          }
                                                                                                          const _tmp$4 = _tmp$3;
                                                                                                          const _bind$3 = moonbitlang$core$json$$Json$as_bool(_fixed_rotation);
                                                                                                          let _tmp$5;
                                                                                                          if (_bind$3 === -1) {
                                                                                                            moonbitlang$core$builtin$$println$11$("fixed_rotation is not a bool, defaulting to false");
                                                                                                            _tmp$5 = false;
                                                                                                          } else {
                                                                                                            _tmp$5 = _bind$3;
                                                                                                          }
                                                                                                          const _tmp$6 = _tmp$5;
                                                                                                          const _bind$4 = moonbitlang$core$json$$Json$as_bool(_bullet);
                                                                                                          let _tmp$7;
                                                                                                          if (_bind$4 === -1) {
                                                                                                            moonbitlang$core$builtin$$println$11$("bullet is not a bool, defaulting to false");
                                                                                                            _tmp$7 = false;
                                                                                                          } else {
                                                                                                            _tmp$7 = _bind$4;
                                                                                                          }
                                                                                                          const _tmp$8 = _tmp$7;
                                                                                                          const _bind$5 = moonbitlang$core$json$$Json$as_bool(_is_sensor);
                                                                                                          let _tmp$9;
                                                                                                          if (_bind$5 === -1) {
                                                                                                            moonbitlang$core$builtin$$println$11$("is_sensor is not a bool, defaulting to false");
                                                                                                            _tmp$9 = false;
                                                                                                          } else {
                                                                                                            _tmp$9 = _bind$5;
                                                                                                          }
                                                                                                          return new Result$Ok$24$({ id: _id, body_def_type: body_def_type, position: position, angle: _angle, linear_velocity: linear_velocity, angular_velocity: _angular_velocity, linear_damping: _linear_damping, angular_damping: _angular_damping, allow_sleep: _tmp$2, awake: _tmp$4, fixed_rotation: _tmp$6, bullet: _tmp$8, gravity_scale: _gravity_scale, fixture_type: fixture_shape, density: _density, friction: _friction, restitution: _restitution, is_sensor: _tmp$9, filter_category_bits: moonbitlang$core$double$$Double$to_int(_filter_category_bits), filter_mask_bits: moonbitlang$core$double$$Double$to_int(_filter_mask_bits), filter_group_index: moonbitlang$core$double$$Double$to_int(_filter_group_index) });
                                                                                                        } else {
                                                                                                          break _L;
                                                                                                        }
                                                                                                      }
                                                                                                    } else {
                                                                                                      break _L;
                                                                                                    }
                                                                                                  }
                                                                                                } else {
                                                                                                  break _L;
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          } else {
                                                                                            break _L;
                                                                                          }
                                                                                        }
                                                                                      } else {
                                                                                        break _L;
                                                                                      }
                                                                                    }
                                                                                  } else {
                                                                                    break _L;
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                break _L;
                                                                              }
                                                                            }
                                                                          }
                                                                        } else {
                                                                          break _L;
                                                                        }
                                                                      } else {
                                                                        break _L;
                                                                      }
                                                                    } else {
                                                                      break _L;
                                                                    }
                                                                  }
                                                                } else {
                                                                  break _L;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    } else {
                                                      break _L;
                                                    }
                                                  }
                                                } else {
                                                  break _L;
                                                }
                                              }
                                            } else {
                                              break _L;
                                            }
                                          }
                                        } else {
                                          break _L;
                                        }
                                      } else {
                                        break _L;
                                      }
                                    } else {
                                      break _L;
                                    }
                                  } else {
                                    break _L;
                                  }
                                }
                              } else {
                                break _L;
                              }
                            }
                          } else {
                            break _L;
                          }
                        } else {
                          break _L;
                        }
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              }
            } else {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  return new Result$Err$25$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Invalid body JSON"));
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$get_bodydef_from_raw(ctx, json) {
  let json_ = undefined;
  if (json === undefined) {
    let _tmp;
    if (ctx === undefined) {
      _tmp = undefined;
    } else {
      const _Some = ctx;
      const _ctx = _Some;
      let _try_err;
      _L: {
        _L$2: {
          const _bind = moonbitlang$x$json5$$parse(_ctx);
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _tmp = _ok._0;
          } else {
            const _err = _bind;
            const _tmp$2 = _err._0;
            _try_err = _tmp$2;
            break _L$2;
          }
          break _L;
        }
        moonbitlang$core$builtin$$println$11$(`Failed to parse bodydef JSON: ${moonbitlang$core$builtin$$Show$to_string$1$(_try_err)}`);
        _tmp = undefined;
      }
    }
    json_ = _tmp;
  } else {
    json_ = json;
  }
  const _bind = json_;
  let body_json;
  if (_bind === undefined) {
    return new Result$Err$26$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("No JSON data provided for body definition"));
  } else {
    const _Some = _bind;
    const _j = _Some;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$2 = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_body_def_from_json(_j);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          body_json = _ok._0;
        } else {
          const _err = _bind$2;
          const _tmp = _err._0;
          _try_err = _tmp;
          break _L$2;
        }
        break _L;
      }
      return new Result$Err$27$(_try_err);
    }
  }
  return new Result$Ok$27$(Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$get_bodydef(body_json));
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json(world_json) {
  let e;
  _L: {
    if (world_json.$tag === 6) {
      const _Object = world_json;
      const _x = _Object._0;
      const _x$2 = moonbitlang$core$builtin$$Map$get$48$(_x, "gravity");
      if (_x$2 === undefined) {
        e = world_json;
        break _L;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 5) {
          const _Array = _x$3;
          const _x$4 = _Array._0;
          if (_x$4.length === 2) {
            const _x$5 = _x$4[0];
            if (_x$5.$tag === 3) {
              const _Number = _x$5;
              const _gx = _Number._0;
              const _x$6 = _x$4[1];
              if (_x$6.$tag === 3) {
                const _Number$2 = _x$6;
                const _gy = _Number$2._0;
                const _x$7 = moonbitlang$core$builtin$$Map$get$48$(_x, "allow_sleeping");
                if (_x$7 === undefined) {
                  e = world_json;
                  break _L;
                } else {
                  const _Some$2 = _x$7;
                  const _allow_sleeping = _Some$2;
                  const _x$8 = moonbitlang$core$builtin$$Map$get$48$(_x, "auto_clear_forces");
                  if (_x$8 === undefined) {
                    e = world_json;
                    break _L;
                  } else {
                    const _Some$3 = _x$8;
                    const _auto_clear_forces = _Some$3;
                    const _tmp = { _0: _gx, _1: _gy };
                    const _bind = moonbitlang$core$json$$Json$as_bool(_allow_sleeping);
                    let _tmp$2;
                    if (_bind === -1) {
                      moonbitlang$core$builtin$$println$11$("allow_sleeping is not a bool, defaulting to true");
                      _tmp$2 = true;
                    } else {
                      _tmp$2 = _bind;
                    }
                    const _tmp$3 = _tmp$2;
                    const _bind$2 = moonbitlang$core$json$$Json$as_bool(_auto_clear_forces);
                    let _tmp$4;
                    if (_bind$2 === -1) {
                      moonbitlang$core$builtin$$println$11$("auto_clear_forces is not a bool, defaulting to true");
                      _tmp$4 = true;
                    } else {
                      _tmp$4 = _bind$2;
                    }
                    return new Result$Ok$28$({ gravity: _tmp, aabb: Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json$46$tuple$47$2431, allow_sleeping: _tmp$3, auto_clear_forces: _tmp$4 });
                  }
                }
              } else {
                e = world_json;
                break _L;
              }
            } else {
              e = world_json;
              break _L;
            }
          } else {
            e = world_json;
            break _L;
          }
        } else {
          e = world_json;
          break _L;
        }
      }
    } else {
      e = world_json;
      break _L;
    }
  }
  return new Result$Err$29$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError(`Invalid world settings JSON: ${moonbitlang$core$builtin$$Show$to_string$36$(e)}`));
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_joint_type_from_json(type_str) {
  if (type_str === "revolute") {
    return new Result$Ok$30$(0);
  } else {
    return new Result$Err$31$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError(`Unknown joint type: ${type_str}`));
  }
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_joint_def_from_json(joint_json) {
  _L: {
    if (joint_json.$tag === 6) {
      const _Object = joint_json;
      const _x = _Object._0;
      const _x$2 = moonbitlang$core$builtin$$Map$get$48$(_x, "id");
      if (_x$2 === undefined) {
        break _L;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 4) {
          const _String = _x$3;
          const _id = _String._0;
          const _x$4 = moonbitlang$core$builtin$$Map$get$48$(_x, "joint_type");
          if (_x$4 === undefined) {
            break _L;
          } else {
            const _Some$2 = _x$4;
            const _x$5 = _Some$2;
            if (_x$5.$tag === 4) {
              const _String$2 = _x$5;
              const _type_str = _String$2._0;
              const _x$6 = moonbitlang$core$builtin$$Map$get$48$(_x, "body_a");
              if (_x$6 === undefined) {
                break _L;
              } else {
                const _Some$3 = _x$6;
                const _x$7 = _Some$3;
                if (_x$7.$tag === 4) {
                  const _String$3 = _x$7;
                  const _body_a_id = _String$3._0;
                  const _x$8 = moonbitlang$core$builtin$$Map$get$48$(_x, "body_b");
                  if (_x$8 === undefined) {
                    break _L;
                  } else {
                    const _Some$4 = _x$8;
                    const _x$9 = _Some$4;
                    if (_x$9.$tag === 4) {
                      const _String$4 = _x$9;
                      const _body_b_id = _String$4._0;
                      const _x$10 = moonbitlang$core$builtin$$Map$get$48$(_x, "joint_def");
                      if (_x$10 === undefined) {
                        break _L;
                      } else {
                        const _Some$5 = _x$10;
                        const _x$11 = _Some$5;
                        if (_x$11.$tag === 6) {
                          const _Object$2 = _x$11;
                          const _x$12 = _Object$2._0;
                          const _x$13 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "local_anchor_a");
                          if (_x$13 === undefined) {
                            break _L;
                          } else {
                            const _Some$6 = _x$13;
                            const _x$14 = _Some$6;
                            if (_x$14.$tag === 5) {
                              const _Array = _x$14;
                              const _x$15 = _Array._0;
                              if (_x$15.length === 2) {
                                const _x$16 = _x$15[0];
                                if (_x$16.$tag === 3) {
                                  const _Number = _x$16;
                                  const _lax = _Number._0;
                                  const _x$17 = _x$15[1];
                                  if (_x$17.$tag === 3) {
                                    const _Number$2 = _x$17;
                                    const _lay = _Number$2._0;
                                    const _x$18 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "local_anchor_b");
                                    if (_x$18 === undefined) {
                                      break _L;
                                    } else {
                                      const _Some$7 = _x$18;
                                      const _x$19 = _Some$7;
                                      if (_x$19.$tag === 5) {
                                        const _Array$2 = _x$19;
                                        const _x$20 = _Array$2._0;
                                        if (_x$20.length === 2) {
                                          const _x$21 = _x$20[0];
                                          if (_x$21.$tag === 3) {
                                            const _Number$3 = _x$21;
                                            const _lbx = _Number$3._0;
                                            const _x$22 = _x$20[1];
                                            if (_x$22.$tag === 3) {
                                              const _Number$4 = _x$22;
                                              const _lby = _Number$4._0;
                                              const _x$23 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "reference_angle");
                                              if (_x$23 === undefined) {
                                                break _L;
                                              } else {
                                                const _Some$8 = _x$23;
                                                const _x$24 = _Some$8;
                                                if (_x$24.$tag === 3) {
                                                  const _Number$5 = _x$24;
                                                  const _reference_angle = _Number$5._0;
                                                  const _x$25 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "enable_limit");
                                                  if (_x$25 === undefined) {
                                                    break _L;
                                                  } else {
                                                    const _Some$9 = _x$25;
                                                    const _enable_limit = _Some$9;
                                                    const _x$26 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "lower_angle");
                                                    if (_x$26 === undefined) {
                                                      break _L;
                                                    } else {
                                                      const _Some$10 = _x$26;
                                                      const _x$27 = _Some$10;
                                                      if (_x$27.$tag === 3) {
                                                        const _Number$6 = _x$27;
                                                        const _lower_angle = _Number$6._0;
                                                        const _x$28 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "upper_angle");
                                                        if (_x$28 === undefined) {
                                                          break _L;
                                                        } else {
                                                          const _Some$11 = _x$28;
                                                          const _x$29 = _Some$11;
                                                          if (_x$29.$tag === 3) {
                                                            const _Number$7 = _x$29;
                                                            const _upper_angle = _Number$7._0;
                                                            const _x$30 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "enable_motor");
                                                            if (_x$30 === undefined) {
                                                              break _L;
                                                            } else {
                                                              const _Some$12 = _x$30;
                                                              const _enable_motor = _Some$12;
                                                              const _x$31 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "motor_speed");
                                                              if (_x$31 === undefined) {
                                                                break _L;
                                                              } else {
                                                                const _Some$13 = _x$31;
                                                                const _x$32 = _Some$13;
                                                                if (_x$32.$tag === 3) {
                                                                  const _Number$8 = _x$32;
                                                                  const _motor_speed = _Number$8._0;
                                                                  const _x$33 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "max_motor_torque");
                                                                  if (_x$33 === undefined) {
                                                                    break _L;
                                                                  } else {
                                                                    const _Some$14 = _x$33;
                                                                    const _x$34 = _Some$14;
                                                                    if (_x$34.$tag === 3) {
                                                                      const _Number$9 = _x$34;
                                                                      const _max_motor_torque = _Number$9._0;
                                                                      const _x$35 = moonbitlang$core$builtin$$Map$get$48$(_x$12, "collide_connected");
                                                                      if (_x$35 === undefined) {
                                                                        break _L;
                                                                      } else {
                                                                        const _Some$15 = _x$35;
                                                                        const _collide_connected = _Some$15;
                                                                        let joint_type;
                                                                        let _try_err;
                                                                        _L$2: {
                                                                          _L$3: {
                                                                            const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_joint_type_from_json(_type_str);
                                                                            if (_bind.$tag === 1) {
                                                                              const _ok = _bind;
                                                                              joint_type = _ok._0;
                                                                            } else {
                                                                              const _err = _bind;
                                                                              const _tmp = _err._0;
                                                                              _try_err = _tmp;
                                                                              break _L$3;
                                                                            }
                                                                            break _L$2;
                                                                          }
                                                                          return new Result$Err$32$(_try_err);
                                                                        }
                                                                        const _bind = moonbitlang$core$json$$Json$as_bool(_collide_connected);
                                                                        let _tmp;
                                                                        if (_bind === -1) {
                                                                          moonbitlang$core$builtin$$println$11$("collide_connected is not a bool, defaulting to false");
                                                                          _tmp = false;
                                                                        } else {
                                                                          _tmp = _bind;
                                                                        }
                                                                        const _tmp$2 = _tmp;
                                                                        const _tmp$3 = { _0: _lax, _1: _lay };
                                                                        const _tmp$4 = { _0: _lbx, _1: _lby };
                                                                        const _bind$2 = moonbitlang$core$json$$Json$as_bool(_enable_limit);
                                                                        let _tmp$5;
                                                                        if (_bind$2 === -1) {
                                                                          moonbitlang$core$builtin$$println$11$("enable_limit is not a bool, defaulting to false");
                                                                          _tmp$5 = false;
                                                                        } else {
                                                                          _tmp$5 = _bind$2;
                                                                        }
                                                                        const _tmp$6 = _tmp$5;
                                                                        const _bind$3 = moonbitlang$core$json$$Json$as_bool(_enable_motor);
                                                                        let _tmp$7;
                                                                        if (_bind$3 === -1) {
                                                                          moonbitlang$core$builtin$$println$11$("enable_motor is not a bool, defaulting to false");
                                                                          _tmp$7 = false;
                                                                        } else {
                                                                          _tmp$7 = _bind$3;
                                                                        }
                                                                        return new Result$Ok$32$({ id: _id, joint_type: joint_type, body_a_id: _body_a_id, body_b_id: _body_b_id, type_str: _type_str, collide_connected: _tmp$2, local_anchor_a: _tmp$3, local_anchor_b: _tmp$4, reference_angle: _reference_angle, lower_angle: _lower_angle, upper_angle: _upper_angle, max_motor_torque: _max_motor_torque, motor_speed: _motor_speed, enable_limit: _tmp$6, enable_motor: _tmp$7 });
                                                                      }
                                                                    } else {
                                                                      break _L;
                                                                    }
                                                                  }
                                                                } else {
                                                                  break _L;
                                                                }
                                                              }
                                                            }
                                                          } else {
                                                            break _L;
                                                          }
                                                        }
                                                      } else {
                                                        break _L;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  break _L;
                                                }
                                              }
                                            } else {
                                              break _L;
                                            }
                                          } else {
                                            break _L;
                                          }
                                        } else {
                                          break _L;
                                        }
                                      } else {
                                        break _L;
                                      }
                                    }
                                  } else {
                                    break _L;
                                  }
                                } else {
                                  break _L;
                                }
                              } else {
                                break _L;
                              }
                            } else {
                              break _L;
                            }
                          }
                        } else {
                          break _L;
                        }
                      }
                    } else {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              }
            } else {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  return new Result$Err$33$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Invalid joint JSON"));
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$load_map$46$inner(file_content, file_path) {
  if (file_content === "" && file_path === "") {
    moonbitlang$core$builtin$$println$11$("No file content or path provided");
    return new Result$Err$34$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("No file content or path provided"));
  }
  let content;
  const _p = "";
  if (!(file_content === _p)) {
    content = file_content;
  } else {
    let _try_err;
    _L: {
      _L$2: {
        const _bind = moonbitlang$x$fs$$read_file_to_string$46$inner(file_path, "utf8");
        if (_bind.$tag === 1) {
          const _ok = _bind;
          content = _ok._0;
        } else {
          const _err = _bind;
          const _tmp = _err._0;
          _try_err = _tmp;
          break _L$2;
        }
        break _L;
      }
      const _IOError = _try_err;
      const _s = _IOError._0;
      moonbitlang$core$builtin$$println$11$(`Failed to read file: ${_s}`);
      return new Result$Err$34$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError(`Failed to read file: ${_s}`));
    }
  }
  let raw_json;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = moonbitlang$x$json5$$parse(content);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        raw_json = _ok._0;
      } else {
        const _err = _bind;
        const _tmp = _err._0;
        _try_err = _tmp;
        break _L$2;
      }
      break _L;
    }
    const _ParseError = _try_err;
    _ParseError._0;
    moonbitlang$core$builtin$$println$11$("Failed to parse JSON:");
    const _bind = moonbitlang$x$json5$$parse("{}");
    if (_bind.$tag === 1) {
      const _ok = _bind;
      raw_json = _ok._0;
    } else {
      return _bind;
    }
  }
  moonbitlang$core$builtin$$println$11$("Parsed JSON OK ");
  _L$2: {
    if (raw_json.$tag === 6) {
      const _Object = raw_json;
      const _x = _Object._0;
      const _x$2 = moonbitlang$core$builtin$$Map$get$48$(_x, "world_settings");
      if (_x$2 === undefined) {
        break _L$2;
      } else {
        const _Some = _x$2;
        const _world_settings = _Some;
        const _x$3 = moonbitlang$core$builtin$$Map$get$48$(_x, "bodies");
        if (_x$3 === undefined) {
          break _L$2;
        } else {
          const _Some$2 = _x$3;
          const _bodies = _Some$2;
          const _x$4 = moonbitlang$core$builtin$$Map$get$48$(_x, "joints");
          if (_x$4 === undefined) {
            break _L$2;
          } else {
            const _Some$3 = _x$4;
            const _joints = _Some$3;
            let world_def;
            let _try_err$2;
            _L$3: {
              _L$4: {
                const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_world_def_from_json(_world_settings);
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  world_def = _ok._0;
                } else {
                  const _err = _bind;
                  const _tmp = _err._0;
                  _try_err$2 = _tmp;
                  break _L$4;
                }
                break _L$3;
              }
              return new Result$Err$35$(_try_err$2);
            }
            moonbitlang$core$builtin$$println$11$("Mapped world OK");
            const _bind = moonbitlang$core$json$$Json$as_array(_bodies);
            let body_defs;
            if (_bind.$tag === 0) {
              return new Result$Err$34$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Bodies is not an array"));
            } else {
              const _Some$4 = _bind;
              body_defs = _Some$4._0;
            }
            let _bind$2;
            let _p$2;
            _L$4: {
              _L$5: {
                const _p$3 = new Array(body_defs.length);
                const _p$4 = body_defs.length;
                let _tmp = 0;
                while (true) {
                  const _p$5 = _tmp;
                  if (_p$5 < _p$4) {
                    const _p$6 = body_defs[_p$5];
                    let _bind$3;
                    let _p$7;
                    _L$6: {
                      _L$7: {
                        let _p$8;
                        _L$8: {
                          _L$9: {
                            const _bind$4 = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_body_def_from_json(_p$6);
                            let _tmp$2;
                            if (_bind$4.$tag === 1) {
                              const _ok = _bind$4;
                              _tmp$2 = _ok._0;
                            } else {
                              const _err = _bind$4;
                              const _tmp$3 = _err._0;
                              _p$8 = _tmp$3;
                              break _L$9;
                            }
                            _bind$3 = new Result$Ok$24$(_tmp$2);
                            break _L$8;
                          }
                          _p$7 = _p$8;
                          break _L$7;
                        }
                        break _L$6;
                      }
                      _bind$3 = new Result$Err$24$(_p$7);
                    }
                    let _tmp$2;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _tmp$2 = _ok._0;
                    } else {
                      const _err = _bind$3;
                      const _tmp$3 = _err._0;
                      _p$2 = _tmp$3;
                      break _L$5;
                    }
                    _p$3[_p$5] = _tmp$2;
                    _tmp = _p$5 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _bind$2 = new Result$Ok$2$(_p$3);
                break _L$4;
              }
              _bind$2 = new Result$Err$2$(_p$2);
            }
            let bodies_mapped;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              bodies_mapped = _ok._0;
            } else {
              return _bind$2;
            }
            moonbitlang$core$builtin$$println$11$(`Mapped bodies OK, count: ${moonbitlang$core$builtin$$Show$to_string$4$(bodies_mapped.length)}`);
            const _bind$3 = moonbitlang$core$json$$Json$as_array(_joints);
            let joint_defs;
            if (_bind$3.$tag === 0) {
              return new Result$Err$34$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Joints is not an array"));
            } else {
              const _Some$4 = _bind$3;
              joint_defs = _Some$4._0;
            }
            let _bind$4;
            let _p$3;
            _L$5: {
              _L$6: {
                const _p$4 = new Array(joint_defs.length);
                const _p$5 = joint_defs.length;
                let _tmp = 0;
                while (true) {
                  const _p$6 = _tmp;
                  if (_p$6 < _p$5) {
                    const _p$7 = joint_defs[_p$6];
                    let _bind$5;
                    let _p$8;
                    _L$7: {
                      _L$8: {
                        let _p$9;
                        _L$9: {
                          _L$10: {
                            const _bind$6 = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$map_joint_def_from_json(_p$7);
                            let _tmp$2;
                            if (_bind$6.$tag === 1) {
                              const _ok = _bind$6;
                              _tmp$2 = _ok._0;
                            } else {
                              const _err = _bind$6;
                              const _tmp$3 = _err._0;
                              _p$9 = _tmp$3;
                              break _L$10;
                            }
                            _bind$5 = new Result$Ok$32$(_tmp$2);
                            break _L$9;
                          }
                          _p$8 = _p$9;
                          break _L$8;
                        }
                        break _L$7;
                      }
                      _bind$5 = new Result$Err$32$(_p$8);
                    }
                    let _tmp$2;
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _tmp$2 = _ok._0;
                    } else {
                      const _err = _bind$5;
                      const _tmp$3 = _err._0;
                      _p$3 = _tmp$3;
                      break _L$6;
                    }
                    _p$4[_p$6] = _tmp$2;
                    _tmp = _p$6 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _bind$4 = new Result$Ok$3$(_p$4);
                break _L$5;
              }
              _bind$4 = new Result$Err$3$(_p$3);
            }
            let joints_mapped;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              joints_mapped = _ok._0;
            } else {
              return _bind$4;
            }
            moonbitlang$core$builtin$$println$11$(`Mapped joints OK, count: ${moonbitlang$core$builtin$$Show$to_string$4$(joints_mapped.length)}`);
            return new Result$Ok$35$({ world_def: world_def, bodies: bodies_mapped, joints: joints_mapped, bodies_map: moonbitlang$core$builtin$$Map$from_array$46$([]), joints_map: moonbitlang$core$builtin$$Map$from_array$47$([]), world: undefined });
          }
        }
      }
    } else {
      break _L$2;
    }
  }
  return new Result$Err$34$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("Invalid map JSON structure"));
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapDef$add_body(self, body) {
  const body_def = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$get_bodydef(body);
  moonbitlang$core$builtin$$println$11$("=== Adding Body ===");
  moonbitlang$core$builtin$$println$11$(`Body ID: ${body.id}`);
  moonbitlang$core$builtin$$println$11$(`Body Type: ${moonbitlang$core$builtin$$Show$to_string$30$(body.body_def_type)}`);
  moonbitlang$core$builtin$$println$11$(`Body Position: (${moonbitlang$core$builtin$$Show$to_string$24$(body.position._0)}, ${moonbitlang$core$builtin$$Show$to_string$24$(body.position._1)})`);
  moonbitlang$core$builtin$$println$11$(`Body Angle: ${moonbitlang$core$builtin$$Show$to_string$24$(body.angle)}`);
  moonbitlang$core$builtin$$println$11$(`Body Linear Velocity: (${moonbitlang$core$builtin$$Show$to_string$24$(body.linear_velocity._0)}, ${moonbitlang$core$builtin$$Show$to_string$24$(body.linear_velocity._1)})`);
  moonbitlang$core$builtin$$println$11$(`Body Angular Velocity: ${moonbitlang$core$builtin$$Show$to_string$24$(body.angular_velocity)}`);
  moonbitlang$core$builtin$$println$11$(`Body Linear Damping: ${moonbitlang$core$builtin$$Show$to_string$24$(body.linear_damping)}`);
  moonbitlang$core$builtin$$println$11$(`Body Angular Damping: ${moonbitlang$core$builtin$$Show$to_string$24$(body.angular_damping)}`);
  moonbitlang$core$builtin$$println$11$(`Body Allow Sleep: ${moonbitlang$core$builtin$$Show$to_string$32$(body.allow_sleep)}`);
  moonbitlang$core$builtin$$println$11$(`Body Awake: ${moonbitlang$core$builtin$$Show$to_string$32$(body.awake)}`);
  moonbitlang$core$builtin$$println$11$(`Body Fixed Rotation: ${moonbitlang$core$builtin$$Show$to_string$32$(body.fixed_rotation)}`);
  moonbitlang$core$builtin$$println$11$(`Body Bullet: ${moonbitlang$core$builtin$$Show$to_string$32$(body.bullet)}`);
  moonbitlang$core$builtin$$println$11$(`Body Gravity Scale: ${moonbitlang$core$builtin$$Show$to_string$24$(body.gravity_scale)}`);
  moonbitlang$core$builtin$$println$11$("--- Fixture ---");
  moonbitlang$core$builtin$$println$11$(`Fixture Type: ${moonbitlang$core$builtin$$Show$to_string$33$(body.fixture_type)}`);
  moonbitlang$core$builtin$$println$11$(`Fixture Density: ${moonbitlang$core$builtin$$Show$to_string$24$(body.density)}`);
  moonbitlang$core$builtin$$println$11$(`Fixture Friction: ${moonbitlang$core$builtin$$Show$to_string$24$(body.friction)}`);
  moonbitlang$core$builtin$$println$11$(`Fixture Restitution: ${moonbitlang$core$builtin$$Show$to_string$24$(body.restitution)}`);
  moonbitlang$core$builtin$$println$11$(`Fixture Is Sensor: ${moonbitlang$core$builtin$$Show$to_string$32$(body.is_sensor)}`);
  moonbitlang$core$builtin$$println$11$(`Fixture Filter Category Bits: ${moonbitlang$core$builtin$$Show$to_string$4$(body.filter_category_bits)}`);
  moonbitlang$core$builtin$$println$11$(`Fixture Filter Mask Bits: ${moonbitlang$core$builtin$$Show$to_string$4$(body.filter_mask_bits)}`);
  moonbitlang$core$builtin$$println$11$(`Fixture Filter Group Index: ${moonbitlang$core$builtin$$Show$to_string$4$(body.filter_group_index)}`);
  moonbitlang$core$builtin$$println$11$("==================");
  const _bind = self.world;
  if (_bind === undefined) {
    return new Result$Err$36$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("World is not initialized"));
  } else {
    const _Some = _bind;
    const _w = _Some;
    const b = _w.method_3(_w.self, body_def);
    moonbitlang$core$builtin$$Map$set$46$(self.bodies_map, body.id, b);
    return new Result$Ok$37$(moonbitlang$core$builtin$$println$11$(`Added body: ${body.id}`));
  }
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapDef$add_joint(self, joint) {
  moonbitlang$core$builtin$$println$11$("=== Adding Joint ===");
  moonbitlang$core$builtin$$println$11$(`Joint ID: ${joint.id}`);
  moonbitlang$core$builtin$$println$11$(`Joint Type: ${moonbitlang$core$builtin$$Show$to_string$35$(joint.joint_type)}`);
  moonbitlang$core$builtin$$println$11$(`Body A ID: ${joint.body_a_id}`);
  moonbitlang$core$builtin$$println$11$(`Body B ID: ${joint.body_b_id}`);
  moonbitlang$core$builtin$$println$11$(`Collide Connected: ${moonbitlang$core$builtin$$Show$to_string$32$(joint.collide_connected)}`);
  moonbitlang$core$builtin$$println$11$(`Local Anchor A: (${moonbitlang$core$builtin$$Show$to_string$24$(joint.local_anchor_a._0)}, ${moonbitlang$core$builtin$$Show$to_string$24$(joint.local_anchor_a._1)})`);
  moonbitlang$core$builtin$$println$11$(`Local Anchor B: (${moonbitlang$core$builtin$$Show$to_string$24$(joint.local_anchor_b._0)}, ${moonbitlang$core$builtin$$Show$to_string$24$(joint.local_anchor_b._1)})`);
  moonbitlang$core$builtin$$println$11$(`Reference Angle: ${moonbitlang$core$builtin$$Show$to_string$24$(joint.reference_angle)}`);
  moonbitlang$core$builtin$$println$11$(`Lower Angle: ${moonbitlang$core$builtin$$Show$to_string$24$(joint.lower_angle)}`);
  moonbitlang$core$builtin$$println$11$(`Upper Angle: ${moonbitlang$core$builtin$$Show$to_string$24$(joint.upper_angle)}`);
  moonbitlang$core$builtin$$println$11$(`Enable Limit: ${moonbitlang$core$builtin$$Show$to_string$32$(joint.enable_limit)}`);
  moonbitlang$core$builtin$$println$11$(`Enable Motor: ${moonbitlang$core$builtin$$Show$to_string$32$(joint.enable_motor)}`);
  moonbitlang$core$builtin$$println$11$(`Motor Speed: ${moonbitlang$core$builtin$$Show$to_string$24$(joint.motor_speed)}`);
  moonbitlang$core$builtin$$println$11$(`Max Motor Torque: ${moonbitlang$core$builtin$$Show$to_string$24$(joint.max_motor_torque)}`);
  const body_a = moonbitlang$core$builtin$$Map$at$46$(self.bodies_map, joint.body_a_id);
  const body_b = moonbitlang$core$builtin$$Map$at$46$(self.bodies_map, joint.body_b_id);
  moonbitlang$core$builtin$$println$11$("Body A and Body B found successfully");
  const rev_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(rev_def, joint.enable_limit);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(rev_def, joint.lower_angle);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(rev_def, joint.upper_angle);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableMotor(rev_def, joint.enable_motor);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setMotorSpeed(rev_def, joint.motor_speed);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$80$(rev_def, joint.collide_connected);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(rev_def, Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldPoint(body_a, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(joint.local_anchor_a._0, joint.local_anchor_a._1)));
  const joint_def = { self: rev_def, method_0: Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$80$, method_1: Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$80$, method_2: Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$80$, method_3: Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$81$ };
  joint_def.method_0(joint_def.self, body_a);
  joint_def.method_1(joint_def.self, body_b);
  joint_def.method_2(joint_def.self, joint.collide_connected);
  const _bind = self.world;
  if (_bind === undefined) {
    return new Result$Err$36$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("World is not initialized"));
  } else {
    const _Some = _bind;
    const _w = _Some;
    moonbitlang$core$builtin$$Map$set$47$(self.joints_map, joint.id, _w.method_6(_w.self, joint_def.method_3(joint_def.self)));
    moonbitlang$core$builtin$$println$11$(`Joint created successfully: ${joint.id}`);
    return new Result$Ok$37$(moonbitlang$core$builtin$$println$11$("=================="));
  }
}
function Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapDef$construct_world(self) {
  const world_aabb = Demonmasterlqx$box2d_ffi$box2d$$b2AABB();
  const world_gravity = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(self.world_def.gravity._0, self.world_def.gravity._1);
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setminVertex(world_aabb, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(self.world_def.aabb._0._0, self.world_def.aabb._0._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setmaxVertex(world_aabb, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(self.world_def.aabb._1._0, self.world_def.aabb._1._1));
  moonbitlang$core$builtin$$println$11$(`Creating world with gravity: (${moonbitlang$core$builtin$$Show$to_string$24$(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(world_gravity))}, ${moonbitlang$core$builtin$$Show$to_string$24$(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(world_gravity))})`);
  self.world = { self: Demonmasterlqx$box2d_ffi$box2d$$b2World(world_aabb, world_gravity, self.world_def.allow_sleeping), method_0: Demonmasterlqx$box2d_ffi$box2d$$World$getBase$66$, method_1: Demonmasterlqx$box2d_ffi$box2d$$World$setListener$67$, method_2: Demonmasterlqx$box2d_ffi$box2d$$World$setFilter$67$, method_3: Demonmasterlqx$box2d_ffi$box2d$$World$createBody$67$, method_4: Demonmasterlqx$box2d_ffi$box2d$$World$destroyBody$67$, method_5: Demonmasterlqx$box2d_ffi$box2d$$World$clearBodyList$67$, method_6: Demonmasterlqx$box2d_ffi$box2d$$World$createJoint$67$, method_7: Demonmasterlqx$box2d_ffi$box2d$$World$destroyJoint$67$, method_8: Demonmasterlqx$box2d_ffi$box2d$$World$getGroundBody$67$, method_9: Demonmasterlqx$box2d_ffi$box2d$$World$step$67$, method_10: Demonmasterlqx$box2d_ffi$box2d$$World$query$67$, method_11: Demonmasterlqx$box2d_ffi$box2d$$World$getBodyList$67$, method_12: Demonmasterlqx$box2d_ffi$box2d$$World$getJointList$67$, method_13: Demonmasterlqx$box2d_ffi$box2d$$World$getContactList$67$ };
  moonbitlang$core$builtin$$println$11$("World created successfully");
  const _arr = self.bodies;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const body = _arr[_i];
      let _try_err;
      _L: {
        _L$2: {
          const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapDef$add_body(self, body);
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            const _err = _bind;
            const _tmp$2 = _err._0;
            _try_err = _tmp$2;
            break _L$2;
          }
          break _L;
        }
        return new Result$Err$38$(_try_err);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$println$11$(`All bodies added successfully, count: ${moonbitlang$core$builtin$$Show$to_string$4$(self.bodies.length)}`);
  const _arr$2 = self.joints;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const joint = _arr$2[_i];
      let _try_err;
      _L: {
        _L$2: {
          const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapDef$add_joint(self, joint);
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            const _err = _bind;
            const _tmp$3 = _err._0;
            _try_err = _tmp$3;
            break _L$2;
          }
          break _L;
        }
        return new Result$Err$38$(_try_err);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$println$11$(`All joints added successfully, count: ${moonbitlang$core$builtin$$Show$to_string$4$(self.joints.length)}`);
  const _bind = self.world;
  if (_bind === undefined) {
    return new Result$Err$39$(new Error$Demonmasterlqx$47$moonbit_stickman_map_loader$47$map_loader$46$MapLoaderError$46$MapLoaderError("World is not initialized"));
  } else {
    const _Some = _bind;
    const _w = _Some;
    return new Result$Ok$38$(_w);
  }
}
function moonbitlang$core$builtin$$Eq$equal$45$(_x_704, _x_705) {
  switch (_x_704) {
    case 0: {
      if (_x_705 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_705 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_705 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_705 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_705 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_705 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_705 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_705 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_705 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_705 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_705 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_705 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_705 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_705 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_705 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_705 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_705 === 16) {
        return true;
      } else {
        return false;
      }
    }
    case 17: {
      if (_x_705 === 17) {
        return true;
      } else {
        return false;
      }
    }
    case 18: {
      if (_x_705 === 18) {
        return true;
      } else {
        return false;
      }
    }
    case 19: {
      if (_x_705 === 19) {
        return true;
      } else {
        return false;
      }
    }
    case 20: {
      if (_x_705 === 20) {
        return true;
      } else {
        return false;
      }
    }
    case 21: {
      if (_x_705 === 21) {
        return true;
      } else {
        return false;
      }
    }
    case 22: {
      if (_x_705 === 22) {
        return true;
      } else {
        return false;
      }
    }
    case 23: {
      if (_x_705 === 23) {
        return true;
      } else {
        return false;
      }
    }
    case 24: {
      if (_x_705 === 24) {
        return true;
      } else {
        return false;
      }
    }
    case 25: {
      if (_x_705 === 25) {
        return true;
      } else {
        return false;
      }
    }
    case 26: {
      if (_x_705 === 26) {
        return true;
      } else {
        return false;
      }
    }
    case 27: {
      if (_x_705 === 27) {
        return true;
      } else {
        return false;
      }
    }
    case 28: {
      if (_x_705 === 28) {
        return true;
      } else {
        return false;
      }
    }
    case 29: {
      if (_x_705 === 29) {
        return true;
      } else {
        return false;
      }
    }
    case 30: {
      if (_x_705 === 30) {
        return true;
      } else {
        return false;
      }
    }
    case 31: {
      if (_x_705 === 31) {
        return true;
      } else {
        return false;
      }
    }
    case 32: {
      if (_x_705 === 32) {
        return true;
      } else {
        return false;
      }
    }
    case 33: {
      if (_x_705 === 33) {
        return true;
      } else {
        return false;
      }
    }
    case 34: {
      if (_x_705 === 34) {
        return true;
      } else {
        return false;
      }
    }
    case 35: {
      if (_x_705 === 35) {
        return true;
      } else {
        return false;
      }
    }
    case 36: {
      if (_x_705 === 36) {
        return true;
      } else {
        return false;
      }
    }
    case 37: {
      if (_x_705 === 37) {
        return true;
      } else {
        return false;
      }
    }
    case 38: {
      if (_x_705 === 38) {
        return true;
      } else {
        return false;
      }
    }
    case 39: {
      if (_x_705 === 39) {
        return true;
      } else {
        return false;
      }
    }
    case 40: {
      if (_x_705 === 40) {
        return true;
      } else {
        return false;
      }
    }
    case 41: {
      if (_x_705 === 41) {
        return true;
      } else {
        return false;
      }
    }
    case 42: {
      if (_x_705 === 42) {
        return true;
      } else {
        return false;
      }
    }
    case 43: {
      if (_x_705 === 43) {
        return true;
      } else {
        return false;
      }
    }
    case 44: {
      if (_x_705 === 44) {
        return true;
      } else {
        return false;
      }
    }
    case 45: {
      if (_x_705 === 45) {
        return true;
      } else {
        return false;
      }
    }
    case 46: {
      if (_x_705 === 46) {
        return true;
      } else {
        return false;
      }
    }
    case 47: {
      if (_x_705 === 47) {
        return true;
      } else {
        return false;
      }
    }
    case 48: {
      if (_x_705 === 48) {
        return true;
      } else {
        return false;
      }
    }
    case 49: {
      if (_x_705 === 49) {
        return true;
      } else {
        return false;
      }
    }
    case 50: {
      if (_x_705 === 50) {
        return true;
      } else {
        return false;
      }
    }
    case 51: {
      if (_x_705 === 51) {
        return true;
      } else {
        return false;
      }
    }
    case 52: {
      if (_x_705 === 52) {
        return true;
      } else {
        return false;
      }
    }
    case 53: {
      if (_x_705 === 53) {
        return true;
      } else {
        return false;
      }
    }
    case 54: {
      if (_x_705 === 54) {
        return true;
      } else {
        return false;
      }
    }
    case 55: {
      if (_x_705 === 55) {
        return true;
      } else {
        return false;
      }
    }
    case 56: {
      if (_x_705 === 56) {
        return true;
      } else {
        return false;
      }
    }
    case 57: {
      if (_x_705 === 57) {
        return true;
      } else {
        return false;
      }
    }
    case 58: {
      if (_x_705 === 58) {
        return true;
      } else {
        return false;
      }
    }
    case 59: {
      if (_x_705 === 59) {
        return true;
      } else {
        return false;
      }
    }
    case 60: {
      if (_x_705 === 60) {
        return true;
      } else {
        return false;
      }
    }
    case 61: {
      if (_x_705 === 61) {
        return true;
      } else {
        return false;
      }
    }
    case 62: {
      if (_x_705 === 62) {
        return true;
      } else {
        return false;
      }
    }
    case 63: {
      if (_x_705 === 63) {
        return true;
      } else {
        return false;
      }
    }
    case 64: {
      if (_x_705 === 64) {
        return true;
      } else {
        return false;
      }
    }
    case 65: {
      if (_x_705 === 65) {
        return true;
      } else {
        return false;
      }
    }
    case 66: {
      if (_x_705 === 66) {
        return true;
      } else {
        return false;
      }
    }
    case 67: {
      if (_x_705 === 67) {
        return true;
      } else {
        return false;
      }
    }
    case 68: {
      if (_x_705 === 68) {
        return true;
      } else {
        return false;
      }
    }
    case 69: {
      if (_x_705 === 69) {
        return true;
      } else {
        return false;
      }
    }
    case 70: {
      if (_x_705 === 70) {
        return true;
      } else {
        return false;
      }
    }
    case 71: {
      if (_x_705 === 71) {
        return true;
      } else {
        return false;
      }
    }
    case 72: {
      if (_x_705 === 72) {
        return true;
      } else {
        return false;
      }
    }
    case 73: {
      if (_x_705 === 73) {
        return true;
      } else {
        return false;
      }
    }
    case 74: {
      if (_x_705 === 74) {
        return true;
      } else {
        return false;
      }
    }
    case 75: {
      if (_x_705 === 75) {
        return true;
      } else {
        return false;
      }
    }
    case 76: {
      if (_x_705 === 76) {
        return true;
      } else {
        return false;
      }
    }
    case 77: {
      if (_x_705 === 77) {
        return true;
      } else {
        return false;
      }
    }
    case 78: {
      if (_x_705 === 78) {
        return true;
      } else {
        return false;
      }
    }
    case 79: {
      if (_x_705 === 79) {
        return true;
      } else {
        return false;
      }
    }
    case 80: {
      if (_x_705 === 80) {
        return true;
      } else {
        return false;
      }
    }
    case 81: {
      if (_x_705 === 81) {
        return true;
      } else {
        return false;
      }
    }
    case 82: {
      if (_x_705 === 82) {
        return true;
      } else {
        return false;
      }
    }
    case 83: {
      if (_x_705 === 83) {
        return true;
      } else {
        return false;
      }
    }
    case 84: {
      if (_x_705 === 84) {
        return true;
      } else {
        return false;
      }
    }
    case 85: {
      if (_x_705 === 85) {
        return true;
      } else {
        return false;
      }
    }
    case 86: {
      if (_x_705 === 86) {
        return true;
      } else {
        return false;
      }
    }
    case 87: {
      if (_x_705 === 87) {
        return true;
      } else {
        return false;
      }
    }
    case 88: {
      if (_x_705 === 88) {
        return true;
      } else {
        return false;
      }
    }
    case 89: {
      if (_x_705 === 89) {
        return true;
      } else {
        return false;
      }
    }
    case 90: {
      if (_x_705 === 90) {
        return true;
      } else {
        return false;
      }
    }
    case 91: {
      if (_x_705 === 91) {
        return true;
      } else {
        return false;
      }
    }
    case 92: {
      if (_x_705 === 92) {
        return true;
      } else {
        return false;
      }
    }
    case 93: {
      if (_x_705 === 93) {
        return true;
      } else {
        return false;
      }
    }
    case 94: {
      if (_x_705 === 94) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_705 === 95) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textAlign_(self, horizAlign, vertAlign$46$opt) {
  let vertAlign;
  if (vertAlign$46$opt.$tag === 1) {
    const _Some = vertAlign$46$opt;
    vertAlign = _Some._0;
  } else {
    vertAlign = undefined;
  }
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textAlign_$46$inner(self, horizAlign, vertAlign);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textFont_(self, font, size$46$opt) {
  let size;
  if (size$46$opt === undefined) {
    size = Option$None$0$;
  } else {
    const _Some = size$46$opt;
    size = _Some;
  }
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textFont_$46$inner(self, font, size);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$text_(self, str, x, y, x2$46$opt, y2$46$opt) {
  let x2;
  if (x2$46$opt === undefined) {
    x2 = Option$None$0$;
  } else {
    const _Some = x2$46$opt;
    x2 = _Some;
  }
  let y2;
  if (y2$46$opt === undefined) {
    y2 = Option$None$0$;
  } else {
    const _Some = y2$46$opt;
    y2 = _Some;
  }
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$text_$46$inner(self, str, x, y, x2, y2);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getP5Instance$85$(self) {
  return self;
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getTouches$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getTouches_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchEnded$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchEnded_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchEnded$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchEnded_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchMoved$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchMoved_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchMoved$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchMoved_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchStarted$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setTouchStarted_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchStarted$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelTouchStarted_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKey$86$(self) {
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
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKeyCode$86$(self) {
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
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(self, keyCode) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsDown_(self, keyCode);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsPressed$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$keyIsPressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyPressed$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyPressed_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyPressed$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyPressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyReleased$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyReleased_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyReleased$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyReleased_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyTyped$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setKeyTyped_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyTyped$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelKeyTyped_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseX$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseY$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedX$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMovedX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedY$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMovedY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseX$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPmouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseY$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPmouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseX$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPwinMouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseY$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getPwinMouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseX$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getWinMouseX_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseY$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getWinMouseY_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$mouseIsPressed$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$mouseIsPressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButtonString$86$(self) {
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
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButton$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$getMouseButton_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setDoubleClicked$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setDoubleClicked_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelDoubleClicked$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelDoubleClicked_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseClicked$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseClicked_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseClicked$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseClicked_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseDragged$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseDragged_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseDragged$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseDragged_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseMoved$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseMoved_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseMoved$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseMoved_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMousePressed$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMousePressed_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMousePressed$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMousePressed_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseReleased$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseReleased_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseReleased$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseReleased_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseWheel$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$setMouseWheel_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseWheel$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$cancelMouseWheel_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$requestPointerLock$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$requestPointerLock_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$exitPointerLock$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$exitPointerLock_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipseMode$86$(self, mode) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$ellipseMode_(self, mode);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rectMode$86$(self, mode) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$rectMode_(self, mode);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noSmooth$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noSmooth_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$smooth$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$smooth_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeCap$86$(self, cap) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeCap_(self, cap);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeJoin$86$(self, join) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeJoin_(self, join);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeWeight$86$(self, weight) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$strokeWeight_(self, weight);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$arc$86$(self, x, y, w, h, start, stop, mode, detail) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$arc_(self, x, y, w, h, start, stop, new Option$Some$40$(mode), new Option$Some$41$(detail));
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$circle$86$(self, x, y, d) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$circle_(self, x, y, d);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipse$86$(self, x, y, w, h) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$ellipse_(self, x, y, w, h);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$line$86$(self, x1, y1, x2, y2) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$line_(self, x1, y1, x2, y2);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$point$86$(self, x, y) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$point_(self, x, y);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quad$86$(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$quad_(self, x1, y1, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$86$(self, x, y, w, h) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$rect_(self, x, y, w, h);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$triangle$86$(self, x1, y1, x2, y2, x3, y3) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$triangle_(self, x1, y1, x2, y2, x3, y3);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$square$86$(self, x, y, s) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$square_(self, x, y, s);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezier$86$(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezier_(self, x1, y1, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierPoint$86$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierPoint_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierTangent$86$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierTangent_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curve$86$(self, x1, y1, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curve_(self, x1, y1, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curvePoint$86$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curvePoint_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTangent$86$(self, a, b, c, d, t) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveTangent_(self, a, b, c, d, t);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTightness$86$(self, amount) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveTightness_(self, amount);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginContour$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginContour_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endContour$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endContour_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginShape$86$(self, mode) {
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
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endShape$86$(self, mode, count) {
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
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierVertex$86$(self, x2, y2, x3, y3, x4, y4) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$bezierVertex_(self, x2, y2, x3, y3, x4, y4);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveVertex$86$(self, x, y) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$curveVertex_(self, x, y);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$vertex$86$(self, x, y, z, u, v) {
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
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$normal$86$(self, nx, ny, nz) {
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
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quadraticVertex$86$(self, x2, y2, x3, y3) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$quadraticVertex_(self, x2, y2, x3, y3);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noStroke$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noStroke_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$background$86$(self, v1, v2, v3, a) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$background_$46$inner(self, v1, v2, v3, a);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$(self, v1, v2, v3, a) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$fill_colorPara_$46$inner(self, v1, v2, v3, a);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorObj$86$(self, c) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$fill_colorObj_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginClip$86$(self, x, y, w, h) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$beginClip_(self, x, y, w, h);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endClip$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$endClip_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clear$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clear_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clip$86$(self, callback) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clip_(self, callback);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clipOptions$86$(self, callback, options) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$clip_options_(self, callback, options);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeUniform$86$(self, mode, max) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$colorMode_uniform_(self, mode, max);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeDetailed$86$(self, mode, max1, max2, max3, maxA) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$colorMode_detailed_$46$inner(self, mode, max1, max2, max3, maxA);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$erase$86$(self, strengthFill, strengthStroke) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$erase_$46$inner(self, strengthFill, strengthStroke);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noErase$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noErase_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeColor$86$(self, c) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_color_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeGray$86$(self, gray, alpha) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_gray_$46$inner(self, gray, alpha);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeComponents$86$(self, v1, v2, v3, alpha) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_components_$46$inner(self, v1, v2, v3, alpha);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeString$86$(self, color_string) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$stroke_string_(self, color_string);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noFill$86$(self) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$noFill_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$brightness$86$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$brightness_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$color$86$(self, v1, v2, v3, a) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$color_$46$inner(self, v1, v2, v3, a);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$alpha$86$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$alpha_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$blue$86$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$blue_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$green$86$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$green_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$red$86$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$red_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$hue$86$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$hue_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lerpColor$86$(self, c1, c2, amount) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$lerpColor_(self, c1, c2, amount);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lightness$86$(self, c) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$lightness_(self, c);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$paletteLerp$86$(self, colors_stops, amt) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$paletteLerp_(self, colors_stops, amt);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textAlign$86$(self, horizAlign, vertAlign) {
  if (vertAlign === undefined) {
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textAlign_(self, horizAlign, Option$None$40$);
    return;
  } else {
    const _Some = vertAlign;
    const _v = _Some;
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textAlign_$46$inner(self, horizAlign, _v);
    return;
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textLeadingSet$86$(self, leading) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textLeading_set_(self, leading);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textLeadingGet$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textLeading_get_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textAscent$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textAscent_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textDescent$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textDescent_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textSizeSet$86$(self, size) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textSize_set_(self, size);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textSizeGet$86$(self) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textSize_get_(self);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textStyle$86$(self, style) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textStyle_$46$inner(self, style);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textWidth$86$(self, str) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textWidth_(self, str);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textWrap$86$(self, mode) {
  Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textWrap_(self, mode);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$loadFont$86$(self, path, onSuccess, onFailure) {
  return Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$loadFont_$46$inner(self, path, onSuccess, onFailure);
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textFont$86$(self, font, size) {
  if (size.$tag === 1) {
    const _Some = size;
    const _s = _Some._0;
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textFont_$46$inner(self, font, new Option$Some$0$(_s));
    return;
  } else {
    Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$textFont_(self, font, undefined);
    return;
  }
}
function Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$text$86$(self, str, x, y, x2, y2) {
  if (x2.$tag === 1) {
    const _Some = x2;
    const _x2v = _Some._0;
    if (y2.$tag === 1) {
      const _Some$2 = y2;
      const _y2v = _Some$2._0;
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$text_$46$inner(self, str, x, y, new Option$Some$0$(_x2v), new Option$Some$0$(_y2v));
      return;
    } else {
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$text_(self, str, x, y, new Option$Some$0$(_x2v), undefined);
      return;
    }
  } else {
    if (y2.$tag === 0) {
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$text_(self, str, x, y, undefined, undefined);
      return;
    } else {
      Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5Instance$text_(self, str, x, y, undefined, undefined);
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$61$(_x_888, _x_889) {
  if (_x_888 === 0) {
    if (_x_889 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_889 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$87$(_x_884, _x_885) {
  switch (_x_884) {
    case 0: {
      if (_x_885 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_885 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_885 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_885 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Show$output$29$(_x_872, _x_873) {
  switch (_x_872) {
    case 0: {
      _x_873.method_0(_x_873.self, "HealthPack");
      return;
    }
    case 1: {
      _x_873.method_0(_x_873.self, "AmmoPack");
      return;
    }
    case 2: {
      _x_873.method_0(_x_873.self, "WeaponUpgrade");
      return;
    }
    default: {
      _x_873.method_0(_x_873.self, "SpeedBoost");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$12$(_x_868, _x_869) {
  switch (_x_868) {
    case 0: {
      _x_869.method_0(_x_869.self, "Player");
      return;
    }
    case 1: {
      _x_869.method_0(_x_869.self, "Enemy");
      return;
    }
    default: {
      _x_869.method_0(_x_869.self, "AllCharacters");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$12$(_x_864, _x_865) {
  switch (_x_864) {
    case 0: {
      if (_x_865 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_865 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_865 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, size, start_position, end_position, speed, now_position) {
  const box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(box_def, 50);
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(now_position._0, now_position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(body_def, 0);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(body_def, false);
  const body = Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(game.world, body_def);
  const to_target = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(end_position._0 - start_position._0, end_position._1 - start_position._1);
  const cooldown_time = moonbitlang$core$double$$Double$to_int(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$length(to_target) / speed);
  const _bind = game.anchor;
  const _bind$2 = game.platform_index;
  const _bind$3 = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(start_position._0, start_position._1);
  const _bind$4 = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(end_position._0, end_position._1);
  const _bind$5 = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(now_position._0, now_position._1);
  const new_ = { fulcrum: _bind, body: body, now_position: _bind$5, index: _bind$2, start_position: _bind$3, end_position: _bind$4, speed: speed, direction: 1, cooldown: cooldown_time, cooldown_time: cooldown_time };
  Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(end_position._0 - start_position._0, end_position._1 - start_position._1);
  moonbitlang$core$array$$Array$push$19$(game.platform_list, { self: new_, method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$update$88$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_index$88$, method_2: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_body$88$ });
  game.platform_index = game.platform_index + 1 | 0;
  return new_;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, position, size, angle) {
  const box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(box_def, 0);
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(body_def, angle);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(body_def, false);
  const new_ = { body: Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(game.world, body_def), index: game.platform_index };
  moonbitlang$core$array$$Array$push$19$(game.platform_list, { self: new_, method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$update$89$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_index$89$, method_2: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_body$89$ });
  game.platform_index = game.platform_index + 1 | 0;
  return new_;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, body_a, body_b, anchor, enable_limit, lower_angle, upper_angle) {
  const joint_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$80$(joint_def, body_a);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$80$(joint_def, body_b);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(joint_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(anchor._0, anchor._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(joint_def, enable_limit);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(joint_def, lower_angle);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(joint_def, upper_angle);
  return Demonmasterlqx$box2d_ffi$box2d$$World$createJoint$68$(self.world, Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$81$(joint_def));
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, position, size, angle_speed, initial_angle) {
  const box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(box_def, 50);
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(body_def, initial_angle);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(body_def, false);
  const body = Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(game.world, body_def);
  const new_ = { body: body, index: game.platform_index, angle_speed: angle_speed, angle: initial_angle };
  const pos = { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(body)), _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(body)) };
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(game, game.anchor, body, pos, false, 0, 0);
  moonbitlang$core$array$$Array$push$19$(game.platform_list, { self: new_, method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$update$90$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_index$90$, method_2: Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_body$90$ });
  game.platform_index = game.platform_index + 1 | 0;
  return new_;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, position, size, density, friciton, groupindex) {
  const box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(box_def, density);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$72$(box_def, friciton);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$(box_def, groupindex);
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(body_def, 0);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(body_def, false);
  return Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(self.world, body_def);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_particle_control$46$inner(self, walk_state, walk_direction, walk_cooldown, jump_cooldown, jump_state, jump_frame_count, health, faint_state, faint_resistance) {
  return { walk_state: walk_state, walk_direction: walk_direction, walk_cooldown: walk_cooldown, jump_cooldown: jump_cooldown, jump_state: jump_state, jump_frame_count: jump_frame_count, health: health, faint_state: faint_state, faint_resistance: faint_resistance, stand_cooldown: 0 };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_particle(self, position) {
  self.particle_index = self.particle_index + 1 | 0;
  const index = self.particle_index - 1 | 0;
  const player_collision_group = -(index + 1000 | 0) | 0;
  const torso = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, position, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3064, 1, 0.2, player_collision_group);
  const head = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 + 1.5 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3065, 1, 0.2, player_collision_group);
  const left_thigh = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 - 1 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3066, 1, 0.2, player_collision_group);
  const right_thigh = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 - 1 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3067, 1, 0.2, player_collision_group);
  const left_shank = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 - 2 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3068, 1, 0.2, player_collision_group);
  const right_shank = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 - 2 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3069, 1, 0.2, player_collision_group);
  const neck_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, torso, head, { _0: position._0, _1: position._1 + 1 }, true, 0, 0);
  const thigh_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, torso, left_thigh, { _0: position._0, _1: position._1 - 0.5 }, true, -1, 1);
  const thigh_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, torso, right_thigh, { _0: position._0, _1: position._1 - 0.5 }, true, -1, 1);
  const knee_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, left_thigh, left_shank, { _0: position._0, _1: position._1 - 1.5 }, true, -1.3, 1.3);
  const knee_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, right_thigh, right_shank, { _0: position._0, _1: position._1 - 1.5 }, true, -1.3, 1.3);
  const left_arm = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 + 0.5 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3070, 1, 0.2, player_collision_group);
  const right_arm = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 + 0.5 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3071, 1, 0.2, player_collision_group);
  const left_forearm = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 - 0.25 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3072, 1, 0.2, player_collision_group);
  const right_forearm = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_dynamic_box$46$inner(self, { _0: position._0, _1: position._1 - 0.25 }, Great$45$Love$45$League$Stick_Man_Battle$server$$create_particle$46$tuple$47$3073, 1, 0.2, player_collision_group);
  const arm_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, torso, left_arm, { _0: position._0, _1: position._1 + 1 }, true, -1, 1);
  const arm_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, torso, right_arm, { _0: position._0, _1: position._1 + 1 }, true, -1, 1);
  const forearm_left_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, left_arm, left_forearm, { _0: position._0, _1: position._1 }, true, -1.3, 1.3);
  const forearm_right_joint = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, right_arm, right_forearm, { _0: position._0, _1: position._1 }, true, -1.3, 1.3);
  const tmp = { torso: torso, head: head, left_thigh: left_thigh, right_thigh: right_thigh, left_shank: left_shank, right_shank: right_shank, thigh_left_joint: thigh_left_joint, thigh_right_joint: thigh_right_joint, knee_left_joint: knee_left_joint, knee_right_joint: knee_right_joint, neck_joint: neck_joint, left_forearm: left_forearm, right_forearm: right_forearm, left_arm: left_arm, right_arm: right_arm, arm_left_joint: arm_left_joint, arm_right_joint: arm_right_joint, forearm_left_joint: forearm_left_joint, forearm_right_joint: forearm_right_joint, index: index, control: Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_particle_control$46$inner(self, false, 1, 0, -1, false, 0, 100, false, 0) };
  moonbitlang$core$array$$Array$push$17$(self.particle_list, tmp);
  return tmp;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$load_map(game, level) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_particle(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3098);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_particle(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3099);
  switch (level) {
    case 1: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3100, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3101, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3102, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3103, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3104, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3105, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3106, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3107, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3108, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3109, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3110, 2, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3111);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3112, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3113, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3114, 2, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3115);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3116, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3117, 1.57);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3118, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3119, 1.57);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3120, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3121, 10, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3122, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3123, 20, 0);
      return true;
    }
    case 2: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3124, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3125, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3126, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3127, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3128, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3129, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3130, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3131, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3132, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3133, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3134, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3135);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3136, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3137, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3138, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3139);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3140, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3141, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3142, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3143);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3144, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3145, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3146, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3147);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3148, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3149, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3150, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3151);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3152, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3153, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3154, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3155);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3156, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3157, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3158, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3159);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_movable_platform(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3160, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3161, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3162, 4, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3163);
      return true;
    }
    case 3: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3164, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3165, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3166, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3167, 2, 0.3);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3168, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3169, 2, 1.2);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3170, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3171, 2, 2.8);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3172, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3173, -2, -0.9);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3174, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3175, -2, 0.7);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3176, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3177, 2, -1.5);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3178, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3179, 2, 2.4);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3180, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3181, 2, -2.1);
      return true;
    }
    case 4: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3182, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3183, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3184, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3185, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3186, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3187, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3188, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3189, 0);
      Great$45$Love$45$League$Stick_Man_Battle$server$$create_rotatable_platform$46$inner(game, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3190, Great$45$Love$45$League$Stick_Man_Battle$server$$load_map$46$tuple$47$3191, 1, 0);
      return true;
    }
    default: {
      return false;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_weapon_manager() {
  return { sword_index: 0, sword_list: moonbitlang$core$array$$Array$new$46$inner$60$(0), gun_index: 0, gun_list: moonbitlang$core$array$$Array$new$46$inner$51$(0) };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, a, b) {
  const contact_list = Demonmasterlqx$box2d_ffi$box2d$$World$getContactList$68$(self.world);
  const _len = contact_list.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const contact = contact_list[_i];
      const bodyA = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$77$(Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape1(contact));
      const bodyB = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$77$(Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape2(contact));
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, a) && Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyB, b) || Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyA, b) && Great$45$Love$45$League$Stick_Man_Battle$server$$equals(bodyB, a)) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponCreate$create$51$(game, owner_id) {
  let bodydef;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$get_bodydef_from_raw(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body, undefined);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        bodydef = _ok._0;
      } else {
        const _err = _bind;
        const _tmp = _err._0;
        _try_err = _tmp;
        break _L$2;
      }
      break _L;
    }
    moonbitlang$core$builtin$$println$11$("Failed to create body definition for Gun");
    bodydef = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  }
  const centerpos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(game.particle_list, owner_id).right_forearm);
  const rotate = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(moonbitlang$core$array$$Array$at$17$(game.particle_list, owner_id).right_forearm);
  const handpos = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-Kaida$45$Amethyst$math$$sin(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(centerpos), -Kaida$45$Amethyst$math$$cos(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(centerpos));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(bodydef, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift)));
  const _bind = game.weapon;
  _bind.gun_index = _bind.gun_index + 1 | 0;
  const weapon_body = Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(game.world, bodydef);
  const owner_collision_group = -(owner_id + 1000 | 0) | 0;
  const shapes_to_recreate = moonbitlang$core$array$$Array$new$46$inner$50$(0);
  const _arr = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getShapeList(weapon_body);
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const shape = _arr[_i];
      moonbitlang$core$array$$Array$push$50$(shapes_to_recreate, shape);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  Demonmasterlqx$box2d_ffi$box2d$$World$destroyBody$68$(game.world, weapon_body);
  const new_body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(new_body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift)));
  const weapon_box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(weapon_box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0.25, 0.5));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(weapon_box_def, 0.01);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$72$(weapon_box_def, 0.3);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$72$(weapon_box_def, 0.5);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$(weapon_box_def, owner_collision_group);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(new_body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(weapon_box_def));
  const final_weapon_body = Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(game.world, new_body_def);
  const aa = { id: game.weapon.gun_index, owner_id: owner_id, body: final_weapon_body, bullet_damage: 10, bullet_speed: 60, bullet_penetration: 0, bullet_targets: [0], fire_rate: 15, last_fire_frame: 0, gun_type: 0 };
  moonbitlang$core$array$$Array$push$51$(game.weapon.gun_list, aa);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(game, moonbitlang$core$array$$Array$at$17$(game.particle_list, owner_id).right_forearm, aa.body, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos), _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) }, false, 0, 0);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_bullet$46$inner(self, position, velocity, owner_id, damage, max_distance, target_types, penetration, gravity_compensation, collision_group) {
  let actual_collision_group;
  if (collision_group === undefined) {
    actual_collision_group = -(owner_id + 1000 | 0) | 0;
  } else {
    const _Some = collision_group;
    actual_collision_group = _Some;
  }
  const circle_def = Demonmasterlqx$box2d_ffi$box2d$$b2CircleDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2CircleDef$setRadius(circle_def, 0.08);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$73$(circle_def, 8);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$73$(circle_def, 0);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$73$(circle_def, 0.3);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$73$(circle_def, actual_collision_group);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setLocalPosition$73$(circle_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 0));
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$70$(circle_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(body_def, false);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setLinearDamping(body_def, 0);
  const body = Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(self.world, body_def);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$setLinearVelocity(body, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(velocity._0, velocity._1));
  const bullet_id = self.bullet_list.length;
  const bullet = { id: bullet_id, owner_id: owner_id, body: body, damage: damage, max_distance: max_distance, traveled_distance: 0, start_position: position, is_active: true, target_types: target_types, hit_targets: moonbitlang$core$array$$Array$new$46$inner$4$(0), penetration: penetration, gravity_compensation: gravity_compensation };
  moonbitlang$core$array$$Array$push$56$(self.bullet_list, bullet);
  moonbitlang$core$builtin$$println$11$(`创建子弹 #${moonbitlang$core$builtin$$Show$to_string$4$(bullet_id)}: 位置(${moonbitlang$core$builtin$$Show$to_string$24$(position._0)}, ${moonbitlang$core$builtin$$Show$to_string$24$(position._1)}), 伤害${moonbitlang$core$builtin$$Show$to_string$4$(damage)}, 目标${moonbitlang$core$builtin$$Show$to_string$37$(target_types)}`);
  return bullet;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_bullet(self, position, velocity, owner_id, damage$46$opt, max_distance$46$opt, target_types$46$opt, penetration$46$opt, gravity_compensation$46$opt, collision_group$46$opt) {
  let damage;
  if (damage$46$opt === undefined) {
    damage = 10;
  } else {
    const _Some = damage$46$opt;
    damage = _Some;
  }
  let max_distance;
  if (max_distance$46$opt.$tag === 1) {
    const _Some = max_distance$46$opt;
    max_distance = _Some._0;
  } else {
    max_distance = 50;
  }
  let target_types;
  if (target_types$46$opt.$tag === 1) {
    const _Some = target_types$46$opt;
    target_types = _Some._0;
  } else {
    target_types = [0];
  }
  let penetration;
  if (penetration$46$opt === undefined) {
    penetration = 0;
  } else {
    const _Some = penetration$46$opt;
    penetration = _Some;
  }
  let gravity_compensation;
  if (gravity_compensation$46$opt.$tag === 1) {
    const _Some = gravity_compensation$46$opt;
    gravity_compensation = _Some._0;
  } else {
    gravity_compensation = 0.95;
  }
  let collision_group;
  if (collision_group$46$opt.$tag === 1) {
    const _Some = collision_group$46$opt;
    collision_group = _Some._0;
  } else {
    collision_group = undefined;
  }
  return Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_bullet$46$inner(self, position, velocity, owner_id, damage, max_distance, target_types, penetration, gravity_compensation, collision_group);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_bullet_advanced$46$inner(self, player_index, direction, speed, damage, max_distance, penetration, gravity_compensation, recoil_horizontal, recoil_vertical) {
  if (player_index >= self.particle_list.length) {
    return undefined;
  }
  const particle = moonbitlang$core$array$$Array$at$17$(self.particle_list, player_index);
  const hand_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.right_forearm);
  const spawn_x = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(hand_pos) + direction * 0.8;
  const spawn_y = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(hand_pos);
  const position = { _0: spawn_x, _1: spawn_y };
  const velocity = { _0: direction * speed, _1: 0 };
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_bullet(self, position, velocity, player_index, damage, new Option$Some$0$(max_distance), new Option$Some$42$([0]), penetration, new Option$Some$0$(gravity_compensation), Option$None$41$);
  const recoil_impulse = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-direction * recoil_horizontal, recoil_vertical);
  const torso_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyImpulse(particle.torso, recoil_impulse, torso_pos);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_penetrating_bullet_advanced$46$inner(self, player_index, direction, penetration_count, speed, damage, max_distance, gravity_compensation, recoil_horizontal, recoil_vertical) {
  if (player_index >= self.particle_list.length) {
    return undefined;
  }
  const particle = moonbitlang$core$array$$Array$at$17$(self.particle_list, player_index);
  const hand_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.right_forearm);
  const spawn_x = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(hand_pos) + direction * 0.8;
  const spawn_y = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(hand_pos);
  const position = { _0: spawn_x, _1: spawn_y };
  const velocity = { _0: direction * speed, _1: 0 };
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_bullet(self, position, velocity, player_index, damage, new Option$Some$0$(max_distance), new Option$Some$42$([0]), penetration_count, new Option$Some$0$(gravity_compensation), Option$None$41$);
  const recoil_impulse = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-direction * recoil_horizontal, recoil_vertical);
  const torso_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyImpulse(particle.torso, recoil_impulse, torso_pos);
  moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(player_index)} 发射了穿透子弹 (穿透${moonbitlang$core$builtin$$Show$to_string$4$(penetration_count)}次)`);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_shotgun$46$inner(self, player_index, direction, bullet_count, spread_angle, gravity_compensation, recoil_horizontal, recoil_vertical) {
  if (player_index >= self.particle_list.length) {
    return undefined;
  }
  const particle = moonbitlang$core$array$$Array$at$17$(self.particle_list, player_index);
  const hand_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.right_forearm);
  const spawn_x = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(hand_pos) + direction * 0.8;
  const spawn_y = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(hand_pos);
  const position = { _0: spawn_x, _1: spawn_y };
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < bullet_count) {
      const angle_offset = bullet_count === 1 ? 0 : spread_angle * ((i + 0) / ((bullet_count - 1 | 0) + 0) - 0.5);
      const vx = direction * 50 * Kaida$45$Amethyst$math$$cos(angle_offset);
      const vy = 50 * Kaida$45$Amethyst$math$$sin(angle_offset);
      const velocity = { _0: vx, _1: vy };
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_bullet(self, position, velocity, player_index, Great$45$Love$45$League$Stick_Man_Battle$server$$shoot_shotgun$46$inner$46$constr$47$3300, Great$45$Love$45$League$Stick_Man_Battle$server$$shoot_shotgun$46$inner$46$constr$47$3301, new Option$Some$42$([0]), Great$45$Love$45$League$Stick_Man_Battle$server$$shoot_shotgun$46$inner$46$constr$47$3302, new Option$Some$0$(gravity_compensation), Option$None$41$);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const recoil_magnitude = (bullet_count + 0) * recoil_horizontal;
  const recoil_impulse = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-direction * recoil_magnitude, recoil_vertical);
  const torso_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyImpulse(particle.torso, recoil_impulse, torso_pos);
  moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(player_index)} 发射了散弹 (${moonbitlang$core$builtin$$Show$to_string$4$(bullet_count)}发)`);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponControl$attack$51$(self, game) {
  if ((game.frame_count - self.last_fire_frame | 0) < self.fire_rate) {
    return undefined;
  }
  const holder = moonbitlang$core$array$$Array$at$17$(game.particle_list, self.owner_id);
  const direction = holder.control.walk_direction > 0 ? 1 : -1;
  const _bind = self.gun_type;
  switch (_bind) {
    case 0: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_bullet_advanced$46$inner(game, self.owner_id, direction, 60, 10, 100, 0, 0.95, 3, 0.3);
      moonbitlang$core$builtin$$println$11$(`手枪射击，持有者: #${moonbitlang$core$builtin$$Show$to_string$4$(self.owner_id)}`);
      break;
    }
    case 1: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_shotgun$46$inner(game, self.owner_id, direction, 5, 0.52, 0.85, 4, 0.6);
      moonbitlang$core$builtin$$println$11$(`霰弹枪射击，持有者: #${moonbitlang$core$builtin$$Show$to_string$4$(self.owner_id)}`);
      break;
    }
    case 2: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_penetrating_bullet_advanced$46$inner(game, self.owner_id, direction, 2, 80, 30, 120, 0.98, 30, 0.5);
      moonbitlang$core$builtin$$println$11$(`狙击枪射击，持有者: #${moonbitlang$core$builtin$$Show$to_string$4$(self.owner_id)}`);
      break;
    }
    default: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_penetrating_bullet_advanced$46$inner(game, self.owner_id, direction, 5, 100, 15, 150, 1, 0, 0);
      moonbitlang$core$builtin$$println$11$(`激光枪射击，持有者: #${moonbitlang$core$builtin$$Show$to_string$4$(self.owner_id)}`);
    }
  }
  self.last_fire_frame = game.frame_count;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_bullet_at_angle$46$inner(self, player_index, angle, speed, damage, max_distance, penetration, gravity_compensation, recoil_horizontal, recoil_vertical) {
  if (player_index >= self.particle_list.length) {
    return undefined;
  }
  const particle = moonbitlang$core$array$$Array$at$17$(self.particle_list, player_index);
  const hand_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.right_forearm);
  const spawn_x = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(hand_pos) + Kaida$45$Amethyst$math$$cos(angle) * 0.8;
  const spawn_y = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(hand_pos) + Kaida$45$Amethyst$math$$sin(angle) * 0.8;
  const position = { _0: spawn_x, _1: spawn_y };
  const vx = Kaida$45$Amethyst$math$$cos(angle) * speed;
  const vy = Kaida$45$Amethyst$math$$sin(angle) * speed;
  const velocity = { _0: vx, _1: vy };
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_bullet(self, position, velocity, player_index, damage, new Option$Some$0$(max_distance), new Option$Some$42$([0]), penetration, new Option$Some$0$(gravity_compensation), Option$None$41$);
  const recoil_impulse = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-Kaida$45$Amethyst$math$$cos(angle) * recoil_horizontal, -Kaida$45$Amethyst$math$$sin(angle) * recoil_horizontal + recoil_vertical);
  const torso_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyImpulse(particle.torso, recoil_impulse, torso_pos);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponControl$attack_at_angle$51$(self, game, angle) {
  if ((game.frame_count - self.last_fire_frame | 0) < self.fire_rate) {
    return undefined;
  }
  const _bind = self.gun_type;
  switch (_bind) {
    case 0: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_bullet_at_angle$46$inner(game, self.owner_id, angle, 60, 10, 100, 0, 0.95, 3, 0.3);
      break;
    }
    case 1: {
      const angle_step = 0.26 / (4 + 0);
      const start_angle = angle - 0.13;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < 5) {
          const bullet_angle = start_angle + angle_step * (i + 0);
          Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_bullet_at_angle$46$inner(game, self.owner_id, bullet_angle, 50, 6, 80, 0, 0.85, 4, 0.6);
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      break;
    }
    case 2: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_bullet_at_angle$46$inner(game, self.owner_id, angle, 80, 30, 120, 2, 0.98, 30, 0.5);
      break;
    }
    default: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$shoot_bullet_at_angle$46$inner(game, self.owner_id, angle, 100, 15, 150, 5, 1, 0, 0);
    }
  }
  self.last_fire_frame = game.frame_count;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponDestroy$destroy$51$(self, game) {
  Demonmasterlqx$box2d_ffi$box2d$$World$destroyBody$68$(game.world, self.body);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_pistol(self, owner_id) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponCreate$create$51$(self, owner_id);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_shotgun(self, owner_id) {
  const centerpos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm);
  const rotate = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm);
  const handpos = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-Kaida$45$Amethyst$math$$sin(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(centerpos), -Kaida$45$Amethyst$math$$cos(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(centerpos));
  const _bind = self.weapon;
  _bind.gun_index = _bind.gun_index + 1 | 0;
  const owner_collision_group = -(owner_id + 1000 | 0) | 0;
  const weapon_body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(weapon_body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift)));
  const weapon_box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(weapon_box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0.25, 0.5));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(weapon_box_def, 0.01);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$72$(weapon_box_def, 0.3);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$72$(weapon_box_def, 0.5);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$(weapon_box_def, owner_collision_group);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(weapon_body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(weapon_box_def));
  const gun = { id: self.weapon.gun_index, owner_id: owner_id, body: Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(self.world, weapon_body_def), bullet_damage: 6, bullet_speed: 50, bullet_penetration: 0, bullet_targets: [0], fire_rate: 40, last_fire_frame: 0, gun_type: 1 };
  moonbitlang$core$array$$Array$push$51$(self.weapon.gun_list, gun);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm, gun.body, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos), _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) }, false, 0, 0);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_sniper(self, owner_id) {
  const centerpos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm);
  const rotate = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm);
  const handpos = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-Kaida$45$Amethyst$math$$sin(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(centerpos), -Kaida$45$Amethyst$math$$cos(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(centerpos));
  const _bind = self.weapon;
  _bind.gun_index = _bind.gun_index + 1 | 0;
  const owner_collision_group = -(owner_id + 1000 | 0) | 0;
  const weapon_body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(weapon_body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift)));
  const weapon_box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(weapon_box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0.25, 0.5));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(weapon_box_def, 0.01);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$72$(weapon_box_def, 0.3);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$72$(weapon_box_def, 0.5);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$(weapon_box_def, owner_collision_group);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(weapon_body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(weapon_box_def));
  const gun = { id: self.weapon.gun_index, owner_id: owner_id, body: Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(self.world, weapon_body_def), bullet_damage: 30, bullet_speed: 80, bullet_penetration: 2, bullet_targets: [0], fire_rate: 60, last_fire_frame: 0, gun_type: 2 };
  moonbitlang$core$array$$Array$push$51$(self.weapon.gun_list, gun);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm, gun.body, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos), _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) }, false, 0, 0);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_laser_rifle(self, owner_id) {
  const centerpos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm);
  const rotate = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm);
  const handpos = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-Kaida$45$Amethyst$math$$sin(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(centerpos), -Kaida$45$Amethyst$math$$cos(rotate) * 0.25 + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(centerpos));
  const _bind = self.weapon;
  _bind.gun_index = _bind.gun_index + 1 | 0;
  const owner_collision_group = -(owner_id + 1000 | 0) | 0;
  const weapon_body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(weapon_body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Great$45$Love$45$League$Stick_Man_Battle$server$$gun_body_shift)));
  const weapon_box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(weapon_box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0.25, 0.5));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(weapon_box_def, 0.01);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$72$(weapon_box_def, 0.3);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$72$(weapon_box_def, 0.5);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$(weapon_box_def, owner_collision_group);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(weapon_body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(weapon_box_def));
  const gun = { id: self.weapon.gun_index, owner_id: owner_id, body: Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(self.world, weapon_body_def), bullet_damage: 15, bullet_speed: 1000, bullet_penetration: 5, bullet_targets: [0], fire_rate: 5, last_fire_frame: 0, gun_type: 3 };
  moonbitlang$core$array$$Array$push$51$(self.weapon.gun_list, gun);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_revolute_joint$46$inner(self, moonbitlang$core$array$$Array$at$17$(self.particle_list, owner_id).right_forearm, gun.body, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(handpos), _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(handpos) }, false, 0, 0);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$world_to_screen(world_width, world_height, x, y, ppm) {
  return { _0: world_width / 2 + x * ppm, _1: world_height - y * ppm };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$screen_to_world(world_width, world_height, x, y, ppm) {
  return { _0: (x - world_width / 2) / ppm, _1: (world_height - y) / ppm };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$drawPolygon(p, shape) {
  const vertices = Demonmasterlqx$box2d_ffi$box2d$$B2PolygonShape$getVertices(shape);
  const global_position = moonbitlang$core$array$$Array$new$46$inner$54$(0);
  const _len = vertices.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const vertex = vertices[_i];
      const gvec = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldPoint(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$78$(shape), vertex);
      moonbitlang$core$array$$Array$push$54$(global_position, gvec);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const screen_position = moonbitlang$core$array$$Array$new$46$inner$13$(0);
  const _len$2 = global_position.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const gvec = global_position[_i];
      const screen_coords = Great$45$Love$45$League$Stick_Man_Battle$server$$world_to_screen(1000, 1000, Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(gvec), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(gvec), 20);
      moonbitlang$core$array$$Array$push$13$(screen_position, screen_coords);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  p.method_72(p.self, undefined);
  const _end754 = screen_position.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _end754) {
      const _bind = moonbitlang$core$array$$Array$at$13$(screen_position, i);
      const _x = _bind._0;
      const _y = _bind._1;
      p.method_76(p.self, _x, _y, Option$None$0$, Option$None$0$, Option$None$0$);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  p.method_73(p.self, Great$45$Love$45$League$Stick_Man_Battle$server$$drawPolygon$46$constr$47$3405, undefined);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$drawCircle(p, shape) {
  const position = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldPoint(Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$79$(shape), Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getLocalPosition(shape));
  const radius = Demonmasterlqx$box2d_ffi$box2d$$B2CircleShape$getRadius(shape);
  const screen_pos = Great$45$Love$45$League$Stick_Man_Battle$server$$world_to_screen(1000, 1000, Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(position), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(position), 20);
  const _p = 20;
  const screen_radius = radius * _p;
  p.method_55(p.self, screen_pos._0, screen_pos._1, screen_radius * 2);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world(p, world) {
  const _arr = Demonmasterlqx$box2d_ffi$box2d$$World$getBodyList$68$(world);
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
          p.method_81(p.self, 127, Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world$46$constr$47$3433, Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world$46$constr$47$3434, Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world$46$constr$47$3435);
          const _bind = Demonmasterlqx$box2d_ffi$box2d$$Shape$getType$77$(shape);
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
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$update$89$(self, game) {}
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_index$89$(self) {
  return self.index;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_body$89$(self) {
  return self.body;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(body, target_angle, kp, kd) {
  const angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(body);
  const error = target_angle - angle;
  const torque = kp * error - kd * Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(body);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque(body, torque);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$update$90$(self, game) {
  const current_angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(self.body);
  const new_angle = current_angle + self.angle_speed * 0.016666666666666666;
  self.angle = self.angle + self.angle_speed * 0.016666666666666666;
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(self.body, new_angle, 100000, 10000);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_index$90$(self) {
  return self.index;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_body$90$(self) {
  return self.body;
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
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$update$88$(self, game) {
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(self.body, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 9.8 * Demonmasterlqx$box2d_ffi$box2d$$B2Body$getMass(self.body)), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(self.body));
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(self.body, 0, 100000, 10000);
  const current_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(self.body);
  const target_pos = self.direction === 1 ? self.end_position : self.start_position;
  const to_target = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(target_pos) - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(current_pos), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(target_pos) - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(current_pos));
  const distance = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$length(to_target);
  self.cooldown = self.cooldown - 1 | 0;
  if (distance < 0.1 && self.cooldown < 0) {
    self.direction = Math.imul(self.direction, -1) | 0;
    self.cooldown = self.cooldown_time;
    return;
  } else {
    const move_distance = self.speed * 0.016666666666666666;
    const len = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$length(to_target);
    Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$setX(to_target, Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(to_target) * move_distance / len);
    Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$setY(to_target, Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(to_target) * move_distance / len);
    const new_pos = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(current_pos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(to_target), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(current_pos) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(to_target));
    Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_position$46$inner(self.body, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(new_pos), _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(new_pos) }, 1000000, 5000);
    return;
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_index$88$(self) {
  return self.index;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$PlatformTrait$get_body$88$(self) {
  return self.body;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$which_platform(self, particle) {
  const _arr = self.platform_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const platform = _arr[_i];
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.left_shank, platform.method_2(platform.self))) {
        return platform.method_1(platform.self);
      }
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.right_shank, platform.method_2(platform.self))) {
        return platform.method_1(platform.self);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(joint, target_angle, kp, kd) {
  const bodyA = Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody1$82$(Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint(joint));
  const bodyB = Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody2$82$(Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint(joint));
  const angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(bodyB) - Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(bodyA);
  const error = target_angle - angle;
  const torque = kp * error - kd * (Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(bodyB) - Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(bodyA));
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque(bodyB, torque);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_walk(self, particle, direction) {
  particle.control.walk_direction = direction;
  if (!particle.control.jump_state) {
    if (particle.control.walk_state) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_left_joint, -0.5, 50, 1);
    } else {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_left_joint, 0.8, 50, 1);
    }
    if (particle.control.walk_state) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_right_joint, 0.8, 50, 1);
    } else {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_right_joint, -0.5, 50, 1);
    }
    Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_left_joint, -1.0995574287564276 * direction, 30, 1);
    Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_right_joint, -1.0995574287564276 * direction, 30, 1);
    if (particle.control.walk_state) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_left_joint, -0.5, 30, 1);
    } else {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_left_joint, 0.5, 30, 1);
    }
    if (particle.control.walk_state) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_right_joint, 0.5, 30, 1);
    } else {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_right_joint, -0.5, 30, 1);
    }
    Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_left_joint, 1.0995574287564276 * direction, 30, 1);
    Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_right_joint, 1.0995574287564276 * direction, 30, 1);
  }
  if (particle.control.walk_cooldown <= 0) {
    particle.control.walk_state = !particle.control.walk_state;
    particle.control.walk_cooldown = 20;
  } else {
    const _bind = particle.control;
    _bind.walk_cooldown = _bind.walk_cooldown - 1 | 0;
  }
  const index = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$which_platform(self, particle);
  if (index === -1) {
    const _bind = particle.control;
    _bind.stand_cooldown = _bind.stand_cooldown - 1 | 0;
    Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, 0, 100, 10);
    Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(particle.torso, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(20 * direction, 0), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso));
    return undefined;
  }
  const platform = moonbitlang$core$array$$Array$at$19$(self.platform_list, index);
  let p_angle = moonbitlang$core$builtin$$Mod$mod$8$(moonbitlang$core$builtin$$Mod$mod$8$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(platform.method_2(platform.self)), 3.14) + 3.14, 3.14);
  if (p_angle > 1.57) {
    p_angle = p_angle - 3.14;
  }
  if (p_angle > 0.5 || p_angle < -0.5) {
    const _bind = particle.control;
    _bind.stand_cooldown = _bind.stand_cooldown - 1 | 0;
    Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, 0, 100, 10);
    Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(particle.torso, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(20 * direction, 0), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso));
    return undefined;
  }
  const v = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(100 * direction * Kaida$45$Amethyst$math$$cos(p_angle), 100 * direction * Kaida$45$Amethyst$math$$sin(p_angle));
  let play_angle = moonbitlang$core$builtin$$Mod$mod$8$(moonbitlang$core$builtin$$Mod$mod$8$(p_angle, 6.28) + 6.28, 6.28);
  if (play_angle > 3.14) {
    play_angle = play_angle - 6.28;
  }
  moonbitlang$core$builtin$$println$11$(`Fuck: ${moonbitlang$core$builtin$$Show$to_string$24$(play_angle)}`);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, play_angle, 100, 10);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(particle.torso, v, Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso));
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_jump(self, particle, direction) {
  if (particle.control.jump_state) {
    const _bind = particle.control;
    _bind.jump_frame_count = _bind.jump_frame_count + 1 | 0;
    if (particle.control.jump_frame_count < 40) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, particle.control.walk_direction * -0.2, 100, 10);
      const bend_factor = (particle.control.jump_frame_count + 0) / (40 + 0) * -2.5;
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_left_joint, -0.3 * particle.control.walk_direction, 30, 1);
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_right_joint, -0.3 * particle.control.walk_direction, 30, 1);
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_left_joint, 1.0995574287564276 * particle.control.walk_direction, 30, 1);
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_right_joint, 1.0995574287564276 * particle.control.walk_direction, 30, 1);
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_left_joint, bend_factor * particle.control.walk_direction, 50, 2);
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_right_joint, bend_factor * particle.control.walk_direction, 50, 2);
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_left_joint, 1 * particle.control.walk_direction, 50, 2);
      Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_right_joint, 0.3 * particle.control.walk_direction, 50, 2);
      return undefined;
    } else {
      if (particle.control.jump_frame_count < 41) {
        Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, 0, 100, 10);
        const v = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(200 * direction, 50);
        Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyImpulse(particle.torso, v, Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso));
        return undefined;
      } else {
        if (particle.control.jump_frame_count < 61) {
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, 0, 100, 10);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_left_joint, 0, 30, 2);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_right_joint, 0, 30, 2);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_left_joint, 0, 30, 2);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_right_joint, 0, 30, 2);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_left_joint, 0, 70, 2);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_right_joint, 0, 70, 2);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_left_joint, 0, 70, 2);
          Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_right_joint, 0, 70, 2);
          return undefined;
        }
      }
    }
    particle.control.jump_state = false;
    return;
  } else {
    return;
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_stand(self, particle) {
  const index = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$which_platform(self, particle);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_rotation$46$inner(particle.torso, 0, 300, 10);
  if (index === -1) {
    if (particle.control.stand_cooldown <= 0) {
      return undefined;
    }
    const _bind = particle.control;
    _bind.stand_cooldown = _bind.stand_cooldown - 1 | 0;
    moonbitlang$core$builtin$$println$11$(`Stand cooldown: ${moonbitlang$core$builtin$$Show$to_string$4$(particle.control.stand_cooldown)}`);
  }
  particle.control.stand_cooldown = 10;
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_left_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.thigh_right_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_left_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.knee_right_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_left_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.arm_right_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_left_joint, 0, 50, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$maintain_joint$46$inner(particle.forearm_right_joint, 0, 50, 2);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_world$46$inner(gravity, level, flag) {
  if (flag === true) {
    const global_box2d_world = moonbitlang$core$ref$$Ref$new$65$(undefined);
    let _try_err;
    _L: {
      _L$2: {
        const _bind = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$load_map$46$inner(level, "");
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          const _tmp$2 = _err._0;
          _try_err = _tmp$2;
          break _L$2;
        }
        const _bind$2 = Demonmasterlqx$moonbit_stickman_map_loader$map_loader$$MapDef$construct_world(_tmp);
        let _tmp$2;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$2 = _ok._0;
        } else {
          const _err = _bind$2;
          const _tmp$3 = _err._0;
          _try_err = _tmp$3;
          break _L$2;
        }
        global_box2d_world.val = _tmp$2;
        break _L;
      }
      if (_try_err.$tag === 3) {
        const _MapLoaderError = _try_err;
        const _e = _MapLoaderError._0;
        moonbitlang$core$builtin$$println$11$(`Error loading map: ${_e}`);
      } else {
        moonbitlang$core$builtin$$println$11$(`Unknown error loading map: ${moonbitlang$core$builtin$$Show$to_string$25$(_try_err)}`);
      }
    }
    const _p = global_box2d_world.val;
    let _tmp;
    if (_p === undefined) {
      _tmp = $panic();
    } else {
      const _p$2 = _p;
      _tmp = _p$2;
    }
    const _tmp$2 = _tmp;
    return { world: _tmp$2.method_0(_tmp$2.self) };
  }
  const worldAABB = Demonmasterlqx$box2d_ffi$box2d$$b2AABB();
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setminVertex(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-10000, -10000));
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setmaxVertex(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(10000, 10000));
  return { world: Demonmasterlqx$box2d_ffi$box2d$$b2World(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(gravity._0, gravity._1), true) };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_world(gravity$46$opt, level$46$opt, flag$46$opt) {
  let gravity;
  if (gravity$46$opt === undefined) {
    gravity = Great$45$Love$45$League$Stick_Man_Battle$server$$create_world$46$tuple$47$3536;
  } else {
    const _Some = gravity$46$opt;
    gravity = _Some;
  }
  let level;
  if (level$46$opt === undefined) {
    level = "";
  } else {
    const _Some = level$46$opt;
    level = _Some;
  }
  const flag = flag$46$opt === -1 ? false : flag$46$opt;
  return Great$45$Love$45$League$Stick_Man_Battle$server$$create_world$46$inner(gravity, level, flag);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$box2d_init(game) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponCreate$create$51$(game, 0);
  Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponCreate$create$51$(game, 1);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_angle(self, attacker_id, config) {
  if (!config.enabled) {
    return Option$None$0$;
  }
  const _bind = config.current_target;
  if (_bind === undefined) {
    return Option$None$0$;
  } else {
    const _Some = _bind;
    const _target = _Some;
    if (attacker_id >= self.particle_list.length) {
      return Option$None$0$;
    }
    const attacker_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(self.particle_list, attacker_id).torso);
    const dx = _target.position._0 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(attacker_pos);
    const dy = _target.position._1 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(attacker_pos);
    return new Option$Some$0$(Kaida$45$Amethyst$math$$atan2(dy, dx));
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_config(self, player_id) {
  if (player_id >= 0 && player_id < self.auto_aim_configs.length) {
    return moonbitlang$core$array$$Array$at$18$(self.auto_aim_configs, player_id);
  }
  return undefined;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(self, func) {
  moonbitlang$core$array$$Array$push$52$(self.custom_functions, func);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_item$46$inner(self, position, item_type, value, lifetime) {
  const box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0.3, 0.3));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(box_def, 0);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$72$(box_def, -3);
  const body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(body_def, false);
  const body = Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(self.world, body_def);
  const item_id = self.item_list.length;
  const item = { id: item_id, body: body, item_type: item_type, value: value, is_active: true, position: position, lifetime: lifetime };
  moonbitlang$core$array$$Array$push$55$(self.item_list, item);
  moonbitlang$core$builtin$$println$11$(`Created ${moonbitlang$core$builtin$$Show$to_string$28$(item_type)} at (${moonbitlang$core$builtin$$Show$to_string$24$(position._0)}, ${moonbitlang$core$builtin$$Show$to_string$24$(position._1)})`);
  return item;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$spawn_health_pack$46$inner(self, position, value) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_item$46$inner(self, position, 0, value, 600);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(stage, func) {
  return { stage: stage, func: func };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$load_custom_functions(game) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(game, { self: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(1, (game$2, p5) => {
    if (moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).control.faint_state) {
      if (moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).control.faint_resistance < 300) {
        const _bind = moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).control;
        _bind.faint_resistance = _bind.faint_resistance + 1 | 0;
      } else {
        moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).control.faint_state = false;
        moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).control.health = 100;
        moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).control.faint_resistance = 0;
      }
      return undefined;
    }
    if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p5, 9)) {
      moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).control.faint_state = true;
      return;
    } else {
      return;
    }
  }), method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$ });
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(game, { self: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(1, (game$2, p) => {
    if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, 27)) {
      const _arr = game$2.weapon.gun_list;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const gun = _arr[_i];
          if (gun.owner_id === 0) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponDestroy$destroy$51$(gun, game$2);
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$51$(game$2.weapon.gun_list);
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_pistol(game$2, 0);
      moonbitlang$core$builtin$$println$11$("装备手枪!");
    }
    if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, 28)) {
      const _arr = game$2.weapon.gun_list;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const gun = _arr[_i];
          if (gun.owner_id === 0) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponDestroy$destroy$51$(gun, game$2);
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$51$(game$2.weapon.gun_list);
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_shotgun(game$2, 0);
      moonbitlang$core$builtin$$println$11$("装备霰弹枪!");
    }
    if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, 29)) {
      const _arr = game$2.weapon.gun_list;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const gun = _arr[_i];
          if (gun.owner_id === 0) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponDestroy$destroy$51$(gun, game$2);
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$51$(game$2.weapon.gun_list);
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_sniper(game$2, 0);
      moonbitlang$core$builtin$$println$11$("装备狙击枪!");
    }
    if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, 30)) {
      const _arr = game$2.weapon.gun_list;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const gun = _arr[_i];
          if (gun.owner_id === 0) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponDestroy$destroy$51$(gun, game$2);
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$51$(game$2.weapon.gun_list);
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$create_laser_rifle(game$2, 0);
      moonbitlang$core$builtin$$println$11$("装备激光枪!");
      return;
    } else {
      return;
    }
  }), method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$ });
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(game, { self: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(1, (game$2, p5) => {
    if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p5, 10)) {
      const particle_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).torso);
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$spawn_health_pack$46$inner(game$2, { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(particle_pos) + 3, _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(particle_pos) }, 30);
      return;
    } else {
      return;
    }
  }), method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$ });
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(game, { self: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(1, (game$2, p5) => {
    if (Great$45$Love$45$League$Stick_Man_Battle$server$$mouseIsPressed(p5)) {
      const _bind = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_config(game$2, 0);
      let angle;
      if (_bind === undefined) {
        const mouse_x = Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseX(p5);
        const mouse_y = Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseY(p5);
        const world_coords = Great$45$Love$45$League$Stick_Man_Battle$server$$screen_to_world(1000, 1000, mouse_x, mouse_y, 20);
        const player_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).torso);
        const dx = world_coords._0 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(player_pos);
        const dy = world_coords._1 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(player_pos);
        angle = Kaida$45$Amethyst$math$$atan2(dy, dx);
      } else {
        const _Some = _bind;
        const _config = _Some;
        const _bind$2 = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_angle(game$2, 0, _config);
        if (_bind$2.$tag === 1) {
          const _Some$2 = _bind$2;
          angle = _Some$2._0;
        } else {
          const mouse_x = Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseX(p5);
          const mouse_y = Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseY(p5);
          const world_coords = Great$45$Love$45$League$Stick_Man_Battle$server$$screen_to_world(1000, 1000, mouse_x, mouse_y, 20);
          const player_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(game$2.particle_list, 0).torso);
          const dx = world_coords._0 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(player_pos);
          const dy = world_coords._1 - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(player_pos);
          angle = Kaida$45$Amethyst$math$$atan2(dy, dx);
        }
      }
      const _arr = game$2.weapon.gun_list;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const gun = _arr[_i];
          if (gun.owner_id === 0) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponControl$attack_at_angle$51$(gun, game$2, angle);
            break;
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  }), method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$ });
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(game, { self: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(1, (game$2, p5) => {
    if ((game$2.frame_count % 100 | 0) === 0) {
      const _arr = game$2.particle_list;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const particle = _arr[_i];
          moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 血量: ${moonbitlang$core$builtin$$Show$to_string$4$(particle.control.health)}`);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  }), method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$ });
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_particle_control_config(self, config) {
  moonbitlang$core$array$$Array$push$53$(self.particle_control_configs, config);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$ParticleControlConfig$new$46$inner(target_particle_index, left_key, right_key, jump_key, faint_key, shoot_key, toggle_auto_aim_key, from_internet, target_ip, target_port) {
  if (from_internet) {
    if (moonbitlang$core$builtin$$Eq$equal$41$(target_ip, undefined) || moonbitlang$core$builtin$$Eq$equal$43$(target_port, undefined)) {
      moonbitlang$core$builtin$$println$11$("Error: Missing target_ip or target_port for internet control.");
      return new Result$Err$43$(new Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$ParticleControlConfigError$46$ParticleControlConfigError("Missing target_ip or target_port for internet control."));
    }
    let _tmp;
    if (target_ip === undefined) {
      _tmp = $panic();
    } else {
      const _p = target_ip;
      _tmp = _p;
    }
    const _tmp$2 = _tmp;
    let _tmp$3;
    if (target_port === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p = target_port;
      _tmp$3 = _p;
    }
    return new Result$Ok$43$({ from_internet: from_internet, left_key: 95, right_key: 95, jump_key: 95, shoot_key: 95, faint_key: 95, toggle_auto_aim_key: 95, target_ip: _tmp$2, target_port: _tmp$3, target_particle_index: target_particle_index });
  }
  if (from_internet === false) {
    if (moonbitlang$core$builtin$$Eq$equal$44$(left_key, undefined) || (moonbitlang$core$builtin$$Eq$equal$44$(right_key, undefined) || (moonbitlang$core$builtin$$Eq$equal$44$(jump_key, undefined) || (moonbitlang$core$builtin$$Eq$equal$44$(shoot_key, undefined) || moonbitlang$core$builtin$$Eq$equal$44$(toggle_auto_aim_key, undefined))))) {
      moonbitlang$core$builtin$$println$11$("Error: Missing key bindings for local control.");
      return new Result$Err$43$(new Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$ParticleControlConfigError$46$ParticleControlConfigError("Missing key bindings for local control."));
    }
    let _tmp;
    if (left_key === undefined) {
      _tmp = $panic();
    } else {
      const _p = left_key;
      _tmp = _p;
    }
    const _tmp$2 = _tmp;
    let _tmp$3;
    if (right_key === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p = right_key;
      _tmp$3 = _p;
    }
    const _tmp$4 = _tmp$3;
    let _tmp$5;
    if (jump_key === undefined) {
      _tmp$5 = $panic();
    } else {
      const _p = jump_key;
      _tmp$5 = _p;
    }
    const _tmp$6 = _tmp$5;
    let _tmp$7;
    if (shoot_key === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p = shoot_key;
      _tmp$7 = _p;
    }
    const _tmp$8 = _tmp$7;
    let _tmp$9;
    if (faint_key === undefined) {
      _tmp$9 = $panic();
    } else {
      const _p = faint_key;
      _tmp$9 = _p;
    }
    const _tmp$10 = _tmp$9;
    let _tmp$11;
    if (toggle_auto_aim_key === undefined) {
      _tmp$11 = $panic();
    } else {
      const _p = toggle_auto_aim_key;
      _tmp$11 = _p;
    }
    return new Result$Ok$43$({ from_internet: from_internet, left_key: _tmp$2, right_key: _tmp$4, jump_key: _tmp$6, shoot_key: _tmp$8, faint_key: _tmp$10, toggle_auto_aim_key: _tmp$11, target_ip: "", target_port: 0, target_particle_index: target_particle_index });
  }
  return new Result$Err$43$(new Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$ParticleControlConfigError$46$ParticleControlConfigError("Unknown error in ParticleControlConfig::new"));
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$ParticleControlConfig$new(target_particle_index, left_key$46$opt, right_key$46$opt, jump_key$46$opt, faint_key$46$opt, shoot_key$46$opt, toggle_auto_aim_key$46$opt, from_internet$46$opt, target_ip$46$opt, target_port$46$opt) {
  let left_key;
  if (left_key$46$opt.$tag === 1) {
    const _Some = left_key$46$opt;
    left_key = _Some._0;
  } else {
    left_key = Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3648;
  }
  let right_key;
  if (right_key$46$opt.$tag === 1) {
    const _Some = right_key$46$opt;
    right_key = _Some._0;
  } else {
    right_key = Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3649;
  }
  let jump_key;
  if (jump_key$46$opt.$tag === 1) {
    const _Some = jump_key$46$opt;
    jump_key = _Some._0;
  } else {
    jump_key = Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3650;
  }
  let faint_key;
  if (faint_key$46$opt.$tag === 1) {
    const _Some = faint_key$46$opt;
    faint_key = _Some._0;
  } else {
    faint_key = Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3651;
  }
  let shoot_key;
  if (shoot_key$46$opt.$tag === 1) {
    const _Some = shoot_key$46$opt;
    shoot_key = _Some._0;
  } else {
    shoot_key = Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3652;
  }
  let toggle_auto_aim_key;
  if (toggle_auto_aim_key$46$opt.$tag === 1) {
    const _Some = toggle_auto_aim_key$46$opt;
    toggle_auto_aim_key = _Some._0;
  } else {
    toggle_auto_aim_key = Great$45$Love$45$League$Stick_Man_Battle$server$$new$46$constr$47$3653;
  }
  const from_internet = from_internet$46$opt === -1 ? false : from_internet$46$opt;
  let target_ip;
  if (target_ip$46$opt.$tag === 1) {
    const _Some = target_ip$46$opt;
    target_ip = _Some._0;
  } else {
    target_ip = undefined;
  }
  let target_port;
  if (target_port$46$opt.$tag === 1) {
    const _Some = target_port$46$opt;
    target_port = _Some._0;
  } else {
    target_port = undefined;
  }
  return Great$45$Love$45$League$Stick_Man_Battle$server$$ParticleControlConfig$new$46$inner(target_particle_index, left_key, right_key, jump_key, faint_key, shoot_key, toggle_auto_aim_key, from_internet, target_ip, target_port);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$register_control(game) {
  let _try_err;
  _L: {
    _L$2: {
      const _bind = Great$45$Love$45$League$Stick_Man_Battle$server$$ParticleControlConfig$new(0, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3683, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3685, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3687, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3689, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3691, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3693, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3694, Option$None$40$, Option$None$41$);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        const _tmp$2 = _err._0;
        _try_err = _tmp$2;
        break _L$2;
      }
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_particle_control_config(game, _tmp);
      break _L;
    }
    const _ParticleControlConfigError = _try_err;
    const _e = _ParticleControlConfigError._0;
    moonbitlang$core$builtin$$println$11$(`Error registering particle control config: ${_e}`);
  }
  let _try_err$2;
  _L$2: {
    const _bind = Great$45$Love$45$League$Stick_Man_Battle$server$$ParticleControlConfig$new(1, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3696, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3698, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3700, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3702, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3704, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3706, Great$45$Love$45$League$Stick_Man_Battle$server$$register_control$46$constr$47$3707, Option$None$40$, Option$None$41$);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      const _tmp$2 = _err._0;
      _try_err$2 = _tmp$2;
      break _L$2;
    }
    Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_particle_control_config(game, _tmp);
    return;
  }
  const _ParticleControlConfigError = _try_err$2;
  const _e = _ParticleControlConfigError._0;
  moonbitlang$core$builtin$$println$11$(`Error registering particle control config: ${_e}`);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$new$46$inner(enabled, target_types, max_range) {
  return { enabled: enabled, target_types: target_types, max_range: max_range, current_target: undefined };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$new(enabled$46$opt, target_types$46$opt, max_range$46$opt) {
  const enabled = enabled$46$opt === -1 ? false : enabled$46$opt;
  let target_types;
  if (target_types$46$opt.$tag === 1) {
    const _Some = target_types$46$opt;
    target_types = _Some._0;
  } else {
    target_types = [0, 1];
  }
  let max_range;
  if (max_range$46$opt.$tag === 1) {
    const _Some = max_range$46$opt;
    max_range = _Some._0;
  } else {
    max_range = 50;
  }
  return Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$new$46$inner(enabled, target_types, max_range);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_auto_aim_config(self, player_id, config) {
  while (true) {
    if (self.auto_aim_configs.length <= player_id) {
      moonbitlang$core$array$$Array$push$18$(self.auto_aim_configs, Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$new(-1, Option$None$44$, Option$None$0$));
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$set$18$(self.auto_aim_configs, player_id, config);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$register_auto_aim(game) {
  const config_player0 = Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$new$46$inner(false, [0, 1], 50);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_auto_aim_config(game, 0, config_player0);
  const config_player1 = Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$new$46$inner(false, [0, 1], 50);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_auto_aim_config(game, 1, config_player1);
  moonbitlang$core$builtin$$println$11$("自动瞄准系统已初始化");
  moonbitlang$core$builtin$$println$11$("  - 按 T 键切换自动瞄准开关");
  moonbitlang$core$builtin$$println$11$("  - 可瞄准其他玩家和敌方AI实体");
  moonbitlang$core$builtin$$println$11$("  - 自动排除瞄准自己");
  moonbitlang$core$builtin$$println$11$("  - 最大瞄准距离: 50米");
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show(game) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(game, { self: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(1, (game$2, p5) => {
    const _arr = game$2.particle_list;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const particle = _arr[_i];
        const pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso);
        const screen_pos = Great$45$Love$45$League$Stick_Man_Battle$server$$world_to_screen(1000, 1000, Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(pos), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(pos), 20);
        const x = screen_pos._0;
        const y = screen_pos._1 - 50;
        if ((game$2.frame_count % 60 | 0) === 0) {
          moonbitlang$core$builtin$$println$11$(`绘制血量条，角色 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 屏幕位置: (${moonbitlang$core$builtin$$Show$to_string$24$(x)}, ${moonbitlang$core$builtin$$Show$to_string$24$(y)})`);
        }
        let hp_ratio = (particle.control.health + 0) / 100;
        if (hp_ratio < 0) {
          hp_ratio = 0;
        }
        if (hp_ratio > 1) {
          hp_ratio = 1;
        }
        const left = x - 20;
        const top = y - 3;
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$(p5, 60, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3736, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3737, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3738);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$86$(p5, left - 4, top - 4, 50, 16);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$(p5, 8, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3739, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3740, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3741);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$86$(p5, left, top, 42, 8);
        const fg_w = 40 * hp_ratio;
        const r = 255 * (1 - hp_ratio) + 0 * hp_ratio;
        const g = 20 * (1 - hp_ratio) + 255 * hp_ratio;
        const b = 160 * (1 - hp_ratio) + 230 * hp_ratio;
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$(p5, r, new Option$Some$0$(g), new Option$Some$0$(b), Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3742);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$86$(p5, left + 1, top + 1, fg_w, 6);
        const text_x = left + 21;
        const text_y = top + 4 + 3;
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textSizeSet$86$(p5, 10);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$(p5, 0, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3743, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3744, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3745);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$text$86$(p5, moonbitlang$core$int$$Int$to_string$46$inner(particle.control.health, 10), text_x + 1, text_y + 1, Option$None$0$, Option$None$0$);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$(p5, 255, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3746, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3747, Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show$46$constr$47$3748);
        Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$text$86$(p5, moonbitlang$core$int$$Int$to_string$46$inner(particle.control.health, 10), text_x, text_y, Option$None$0$, Option$None$0$);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }), method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$ });
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$register_show_mouse_screen_coords(game) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$register_custom_function(game, { self: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunction$new(1, (game$2, p5) => {
    const mouse_x = Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseX(p5);
    const mouse_y = Great$45$Love$45$League$Stick_Man_Battle$server$$getMouseY(p5);
    if ((game$2.frame_count % 60 | 0) === 0) {
      moonbitlang$core$builtin$$println$11$(`鼠标位置: (${moonbitlang$core$builtin$$Show$to_string$24$(mouse_x)}, ${moonbitlang$core$builtin$$Show$to_string$24$(mouse_y)})`);
      return;
    } else {
      return;
    }
  }), method_0: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$, method_1: Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$ });
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$create_game() {
  const world = Great$45$Love$45$League$Stick_Man_Battle$server$$create_world(undefined, undefined, -1);
  const weapon = Great$45$Love$45$League$Stick_Man_Battle$server$$create_weapon_manager();
  const anchor_box_def = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(anchor_box_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0.01, 0.01));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$72$(anchor_box_def, 0);
  const anchor_body_def = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(anchor_body_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 0));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(anchor_body_def, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$69$(anchor_box_def));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setRotation(anchor_body_def, 0);
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setAllowSleep(anchor_body_def, false);
  const anchor = Demonmasterlqx$box2d_ffi$box2d$$World$createBody$68$(world, anchor_body_def);
  const _bind = moonbitlang$core$array$$Array$new$46$inner$17$(0);
  const _bind$2 = moonbitlang$core$array$$Array$new$46$inner$19$(0);
  const _bind$3 = moonbitlang$core$array$$Array$new$46$inner$20$(0);
  const _bind$4 = moonbitlang$core$array$$Array$new$46$inner$56$(0);
  const _bind$5 = moonbitlang$core$array$$Array$new$46$inner$55$(0);
  const _bind$6 = moonbitlang$core$array$$Array$new$46$inner$53$(0);
  const _bind$7 = moonbitlang$core$array$$Array$new$46$inner$52$(0);
  const _bind$8 = moonbitlang$core$array$$Array$new$46$inner$18$(0);
  return { world: world, weapon: weapon, state: 1, particle_list: _bind, particle_index: 0, platform_list: _bind$2, platform_index: 0, enemy_list: _bind$3, bullet_list: _bind$4, item_list: _bind$5, frame_count: 0, particle_control_configs: _bind$6, custom_functions: _bind$7, auto_aim_configs: _bind$8, anchor: anchor };
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$run_custom_functions(self, stage, p5) {
  const _arr = self.custom_functions;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const func = _arr[_i];
      if (moonbitlang$core$builtin$$Eq$equal$87$(func.method_1(func.self), stage)) {
        func.method_0(func.self, self, p5);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$game_over(self, p5) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$run_custom_functions(self, 3, p5);
  self.state = 1;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$pause(self, p5) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$run_custom_functions(self, 2, p5);
  self.state = 1;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$prepare(self, p5) {
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$run_custom_functions(self, 0, p5);
  self.state = 1;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$cleanup_bullets(self) {
  const active_bullets = moonbitlang$core$array$$Array$new$46$inner$56$(0);
  const _arr = self.bullet_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      if (bullet.is_active) {
        moonbitlang$core$array$$Array$push$56$(active_bullets, bullet);
      } else {
        Demonmasterlqx$box2d_ffi$box2d$$World$destroyBody$68$(self.world, bullet.body);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.bullet_list = active_bullets;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$cleanup_items(self) {
  const active_items = moonbitlang$core$array$$Array$new$46$inner$55$(0);
  let cleaned_count = 0;
  const _arr = self.item_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const item = _arr[_i];
      if (item.is_active) {
        moonbitlang$core$array$$Array$push$55$(active_items, item);
      } else {
        Demonmasterlqx$box2d_ffi$box2d$$World$destroyBody$68$(self.world, item.body);
        cleaned_count = cleaned_count + 1 | 0;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (cleaned_count > 0) {
    moonbitlang$core$builtin$$println$11$(`清理了 ${moonbitlang$core$builtin$$Show$to_string$4$(cleaned_count)} 个物品`);
  }
  self.item_list = active_items;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$set_enabled(self, enabled) {
  self.enabled = enabled;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$toggle_auto_aim(self, player_id) {
  const _bind = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_config(self, player_id);
  if (_bind === undefined) {
    return;
  } else {
    const _Some = _bind;
    const _config = _Some;
    Great$45$Love$45$League$Stick_Man_Battle$server$$AutoAimConfig$set_enabled(_config, !_config.enabled);
    return;
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_control(self, control_config, p) {
  const particle_index = control_config.target_particle_index;
  if (particle_index < 0 || particle_index >= self.particle_list.length) {
    moonbitlang$core$builtin$$println$11$(`Error: Invalid target_particle_index ${moonbitlang$core$builtin$$Show$to_string$4$(particle_index)} in particle_control.`);
    return new Result$Err$45$(new Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$GameStateError$46$GameStateError(`Invalid target_particle_index in particle_control. want to control ${moonbitlang$core$builtin$$Show$to_string$4$(particle_index)}, but only ${moonbitlang$core$builtin$$Show$to_string$4$(self.particle_list.length)} particles exist.`));
  }
  const particle = moonbitlang$core$array$$Array$at$17$(self.particle_list, particle_index);
  if (control_config.from_internet) {
    return new Result$Err$45$(new Error$Great$45$Love$45$League$47$Stick_Man_Battle$47$server$46$GameStateError$46$GameStateError("Internet control not implemented yet."));
  }
  if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, control_config.toggle_auto_aim_key)) {
    if ((self.frame_count % 30 | 0) === 0) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$toggle_auto_aim(self, particle_index);
      const _bind = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_config(self, particle_index);
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _config = _Some;
        if (_config.enabled) {
          moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle_index)}: 自动瞄准已启用`);
        } else {
          moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle_index)}: 自动瞄准已禁用`);
        }
      }
    }
  }
  if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, control_config.shoot_key)) {
    const _arr = self.weapon.gun_list;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const gun = _arr[_i];
        if (gun.owner_id === particle_index) {
          const _bind = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_config(self, particle_index);
          if (_bind === undefined) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponControl$attack$51$(gun, self);
          } else {
            const _Some = _bind;
            const _config = _Some;
            if (_config.enabled) {
              const _bind$2 = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_auto_aim_angle(self, particle_index, _config);
              if (_bind$2.$tag === 1) {
                const _Some$2 = _bind$2;
                const _angle = _Some$2._0;
                Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponControl$attack_at_angle$51$(gun, self, _angle);
              } else {
                Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponControl$attack$51$(gun, self);
              }
            } else {
              Great$45$Love$45$League$Stick_Man_Battle$server$$WeaponControl$attack$51$(gun, self);
            }
          }
          break;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, control_config.faint_key)) {
    return new Result$Ok$37$(undefined);
  }
  if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, control_config.left_key)) {
    Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_walk(self, particle, -1);
  } else {
    if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, control_config.right_key)) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_walk(self, particle, 1);
    } else {
      if (!particle.control.jump_state) {
        Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_stand(self, particle);
      }
    }
  }
  if (Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$(p, control_config.jump_key)) {
    if (particle.control.jump_cooldown <= 0) {
      if (!particle.control.jump_state) {
        particle.control.jump_state = true;
        particle.control.jump_frame_count = 0;
        particle.control.jump_cooldown = 61;
      }
    }
  }
  if (particle.control.jump_cooldown > 0) {
    const _bind = particle.control;
    _bind.jump_cooldown = _bind.jump_cooldown - 1 | 0;
  }
  return new Result$Ok$37$(Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_jump(self, particle, 0));
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_bullet_environment_collision(self, bullet) {
  const _arr = self.platform_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const platform = _arr[_i];
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, platform.method_2(platform.self), bullet.body)) {
        bullet.is_active = false;
        return undefined;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const contact_list = Demonmasterlqx$box2d_ffi$box2d$$World$getContactList$68$(self.world);
  const _len$2 = contact_list.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const contact = contact_list[_i];
      const shape1 = Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape1(contact);
      const shape2 = Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape2(contact);
      const body1 = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$77$(shape1);
      const body2 = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$77$(shape2);
      const bullet_body = bullet.body;
      if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(body1, bullet_body) || Great$45$Love$45$League$Stick_Man_Battle$server$$equals(body2, bullet_body)) {
        const other_body = Great$45$Love$45$League$Stick_Man_Battle$server$$equals(body1, bullet_body) ? body2 : body1;
        if (Demonmasterlqx$box2d_ffi$box2d$$B2Body$getMass(other_body) === 0) {
          let is_character_part = false;
          const _arr$2 = self.particle_list;
          const _len$3 = _arr$2.length;
          let _tmp$3 = 0;
          while (true) {
            const _i$2 = _tmp$3;
            if (_i$2 < _len$3) {
              const particle = _arr$2[_i$2];
              if (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.head) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.torso) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.left_thigh) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.right_thigh) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.left_shank) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.right_shank) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.left_arm) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.right_arm) || (Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.left_forearm) || Great$45$Love$45$League$Stick_Man_Battle$server$$equals(other_body, particle.right_forearm)))))))))) {
                is_character_part = true;
                break;
              }
              _tmp$3 = _i$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (!is_character_part) {
            bullet.is_active = false;
            moonbitlang$core$builtin$$println$11$(`子弹 #${moonbitlang$core$builtin$$Show$to_string$4$(bullet.id)} 击中环境（静态物体），回收子弹`);
            return undefined;
          }
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_bullet_collision(self, bullet) {
  let should_hit_players = false;
  const _arr = bullet.target_types;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const target_type = _arr[_i];
      if (moonbitlang$core$builtin$$Eq$equal$12$(target_type, 0) || moonbitlang$core$builtin$$Eq$equal$12$(target_type, 2)) {
        should_hit_players = true;
        break;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (should_hit_players) {
    const _arr$2 = self.particle_list;
    const _len$2 = _arr$2.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        _L: {
          const particle = _arr$2[_i];
          if (particle.index === bullet.owner_id) {
            break _L;
          }
          let already_hit = false;
          const _arr$3 = bullet.hit_targets;
          const _len$3 = _arr$3.length;
          let _tmp$3 = 0;
          while (true) {
            const _i$2 = _tmp$3;
            if (_i$2 < _len$3) {
              const hit_id = _arr$3[_i$2];
              if (hit_id === particle.index) {
                already_hit = true;
                break;
              }
              _tmp$3 = _i$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (already_hit) {
            break _L;
          }
          if (particle.control.faint_state) {
            break _L;
          }
          let hit = false;
          let damage = 0;
          if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.head, bullet.body)) {
            damage = Math.imul(bullet.damage, 2) | 0;
            hit = true;
          } else {
            if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.torso, bullet.body)) {
              damage = bullet.damage;
              hit = true;
            } else {
              if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.left_thigh, bullet.body) || Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.right_thigh, bullet.body)) {
                damage = bullet.damage / 2 | 0;
                hit = true;
              } else {
                if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.left_shank, bullet.body) || Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.right_shank, bullet.body)) {
                  damage = bullet.damage / 3 | 0;
                  hit = true;
                } else {
                  if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.left_arm, bullet.body) || Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.right_arm, bullet.body)) {
                    damage = bullet.damage / 2 | 0;
                    hit = true;
                  } else {
                    if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.left_forearm, bullet.body) || Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.right_forearm, bullet.body)) {
                      damage = bullet.damage / 3 | 0;
                      hit = true;
                    }
                  }
                }
              }
            }
          }
          if (hit) {
            const _bind = particle.control;
            _bind.health = _bind.health - damage | 0;
            moonbitlang$core$builtin$$println$11$(`子弹 #${moonbitlang$core$builtin$$Show$to_string$4$(bullet.id)} 击中玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)}, 伤害 ${moonbitlang$core$builtin$$Show$to_string$4$(damage)} (剩余血量: ${moonbitlang$core$builtin$$Show$to_string$4$(particle.control.health)})`);
            if (particle.control.health <= 0) {
              particle.control.faint_state = true;
              moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 被击倒!`);
            }
            moonbitlang$core$array$$Array$push$4$(bullet.hit_targets, particle.index);
            if (bullet.penetration <= 0) {
              bullet.is_active = false;
              moonbitlang$core$builtin$$println$11$(`子弹 #${moonbitlang$core$builtin$$Show$to_string$4$(bullet.id)} 穿透次数用完，回收子弹`);
              break;
            } else {
              bullet.penetration = bullet.penetration - 1 | 0;
              moonbitlang$core$builtin$$println$11$(`子弹 #${moonbitlang$core$builtin$$Show$to_string$4$(bullet.id)} 穿透! 剩余穿透次数: ${moonbitlang$core$builtin$$Show$to_string$4$(bullet.penetration)}`);
            }
          }
          break _L;
        }
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (bullet.is_active) {
    Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_bullet_environment_collision(self, bullet);
    return;
  } else {
    return;
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_bullet(self, bullet) {
  if (!bullet.is_active) {
    return undefined;
  }
  const current_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(bullet.body);
  const dx = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(current_pos) - bullet.start_position._0;
  const dy = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(current_pos) - bullet.start_position._1;
  const _p = dx * dx + dy * dy;
  bullet.traveled_distance = Math.sqrt(_p);
  const mass = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getMass(bullet.body);
  const anti_gravity_force = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, mass * 9.8 * bullet.gravity_compensation);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(bullet.body, anti_gravity_force, current_pos);
  if (bullet.traveled_distance >= bullet.max_distance) {
    bullet.is_active = false;
    return undefined;
  }
  const x = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(current_pos);
  const y = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(current_pos);
  if (x < -48 || (x > 48 || (y < 0 || y > 54))) {
    bullet.is_active = false;
    return undefined;
  }
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_bullet_collision(self, bullet);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_all_bullets(self) {
  const _arr = self.bullet_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      if (bullet.is_active) {
        Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_bullet(self, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < 10) {
      const _arr$2 = self.bullet_list;
      const _len$2 = _arr$2.length;
      let _tmp$3 = 0;
      while (true) {
        const _i$2 = _tmp$3;
        if (_i$2 < _len$2) {
          const bullet = _arr$2[_i$2];
          if (bullet.is_active) {
            Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_bullet_collision(self, bullet);
          }
          _tmp$3 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$apply_item_effect(self, particle, item) {
  const _bind = item.item_type;
  switch (_bind) {
    case 0: {
      const old_health = particle.control.health;
      const _bind$2 = particle.control;
      _bind$2.health = _bind$2.health + item.value | 0;
      if (particle.control.health > 100) {
        particle.control.health = 100;
      }
      const recovered = particle.control.health - old_health | 0;
      moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 拾取了血包! 恢复 ${moonbitlang$core$builtin$$Show$to_string$4$(recovered)} 点生命值 (当前: ${moonbitlang$core$builtin$$Show$to_string$4$(particle.control.health)}/100)`);
      if (particle.control.faint_state && particle.control.health >= 50) {
        particle.control.faint_state = false;
        particle.control.faint_resistance = 0;
        moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 苏醒了!`);
        return;
      } else {
        return;
      }
    }
    case 1: {
      moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 拾取了弹药包! +${moonbitlang$core$builtin$$Show$to_string$4$(item.value)} 发子弹 (功能待实现)`);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 拾取了武器升级! (功能待实现)`);
      return;
    }
    default: {
      moonbitlang$core$builtin$$println$11$(`玩家 ${moonbitlang$core$builtin$$Show$to_string$4$(particle.index)} 拾取了速度提升! 持续 ${moonbitlang$core$builtin$$Show$to_string$4$(item.value)} 帧 (功能待实现)`);
      return;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_item_pickup(self, item) {
  const _arr = self.particle_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const particle = _arr[_i];
        if (particle.control.faint_state) {
          break _L;
        }
        if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.torso, item.body) || (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.head, item.body) || (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.left_thigh, item.body) || Great$45$Love$45$League$Stick_Man_Battle$server$$Game$is_contact(self, particle.right_thigh, item.body)))) {
          Great$45$Love$45$League$Stick_Man_Battle$server$$Game$apply_item_effect(self, particle, item);
          return true;
        }
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_all_items(self) {
  const _arr = self.item_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const item = _arr[_i];
        if (item.is_active) {
          if (item.lifetime > 0) {
            item.lifetime = item.lifetime - 1 | 0;
            if (item.lifetime === 0) {
              item.is_active = false;
              moonbitlang$core$builtin$$println$11$(`物品 ${moonbitlang$core$builtin$$Show$to_string$28$(item.item_type)} 已过期消失`);
              break _L;
            }
          }
          if (Great$45$Love$45$League$Stick_Man_Battle$server$$Game$check_item_pickup(self, item)) {
            item.is_active = false;
          }
        }
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_all_targetable_entities(self, attacker_id, config) {
  const targets = moonbitlang$core$array$$Array$new$46$inner$57$(0);
  if (attacker_id >= self.particle_list.length) {
    return targets;
  }
  const attacker_pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$17$(self.particle_list, attacker_id).torso);
  const attacker_x = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(attacker_pos);
  const attacker_y = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(attacker_pos);
  if (moonbitlang$core$array$$Array$contains$61$(config.target_types, 0)) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self.particle_list.length) {
        _L: {
          if (i === attacker_id) {
            break _L;
          }
          const particle = moonbitlang$core$array$$Array$at$17$(self.particle_list, i);
          const pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(particle.torso);
          const dx = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(pos) - attacker_x;
          const dy = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(pos) - attacker_y;
          const _p = dx * dx + dy * dy;
          const distance = Math.sqrt(_p);
          if (distance <= config.max_range) {
            moonbitlang$core$array$$Array$push$57$(targets, { entity_type: 0, entity_id: i, position: { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(pos), _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(pos) }, distance: distance });
          }
          break _L;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (moonbitlang$core$array$$Array$contains$61$(config.target_types, 1)) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self.enemy_list.length) {
        _L: {
          const _bind = moonbitlang$core$array$$Array$at$20$(self.enemy_list, i);
          if (_bind === undefined) {
            break _L;
          } else {
            const _Some = _bind;
            const _enemy = _Some;
            if (_enemy.method_2(_enemy.self)) {
              break _L;
            }
            const _bind$2 = _enemy.method_5(_enemy.self);
            if (_bind$2 === undefined) {
              break _L;
            } else {
              const _Some$2 = _bind$2;
              const _pos = _Some$2;
              const dx = _pos._0 - attacker_x;
              const dy = _pos._1 - attacker_y;
              const _p = dx * dx + dy * dy;
              const distance = Math.sqrt(_p);
              if (distance <= config.max_range) {
                moonbitlang$core$array$$Array$push$57$(targets, { entity_type: 1, entity_id: i, position: _pos, distance: distance });
              }
            }
          }
          break _L;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return targets;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$find_nearest_target(self, attacker_id, config) {
  const targets = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$get_all_targetable_entities(self, attacker_id, config);
  if (targets.length === 0) {
    return undefined;
  }
  let nearest = undefined;
  let min_distance = config.max_range + 1;
  const _len = targets.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const target = targets[_i];
      if (target.distance < min_distance) {
        min_distance = target.distance;
        nearest = target;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return nearest;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_auto_aim_target(self, attacker_id, config) {
  if (!config.enabled) {
    config.current_target = undefined;
    return undefined;
  }
  config.current_target = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$find_nearest_target(self, attacker_id, config);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$running(self, p5) {
  self.frame_count = self.frame_count + 1 | 0;
  const _arr = self.platform_list;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const platform = _arr[_i];
      platform.method_0(platform.self, self);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$2 = self.particle_control_configs;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const config = _arr$2[_i];
      if (!config.from_internet) {
        let _try_err;
        _L: {
          _L$2: {
            const _bind = Great$45$Love$45$League$Stick_Man_Battle$server$$Game$particle_control(self, config, p5);
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              const _err = _bind;
              const _tmp$3 = _err._0;
              _try_err = _tmp$3;
              break _L$2;
            }
            break _L;
          }
          moonbitlang$core$builtin$$println$11$(`Error in particle_control: ${moonbitlang$core$builtin$$Show$to_string$25$(_try_err)} in particle index ${moonbitlang$core$builtin$$Show$to_string$4$(config.target_particle_index)}.`);
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_all_bullets(self);
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_all_items(self);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.auto_aim_configs.length) {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$update_auto_aim_target(self, i, moonbitlang$core$array$$Array$at$18$(self.auto_aim_configs, i));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if ((self.frame_count % 60 | 0) === 0) {
    Great$45$Love$45$League$Stick_Man_Battle$server$$Game$cleanup_bullets(self);
    Great$45$Love$45$League$Stick_Man_Battle$server$$Game$cleanup_items(self);
  }
  Great$45$Love$45$League$Stick_Man_Battle$server$$Game$run_custom_functions(self, 1, p5);
  Demonmasterlqx$box2d_ffi$box2d$$World$step$68$(self.world, 0.016666666666666666, 4);
  self.state = 1;
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$Game$state_machine_update(self, p5) {
  const _bind = self.state;
  switch (_bind) {
    case 0: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$prepare(self, p5);
      return;
    }
    case 1: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$running(self, p5);
      return;
    }
    case 2: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$pause(self, p5);
      return;
    }
    default: {
      Great$45$Love$45$League$Stick_Man_Battle$server$$Game$game_over(self, p5);
      return;
    }
  }
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$call_custom_function$91$(self, game, p5) {
  const _func = self.func;
  _func(game, p5);
}
function Great$45$Love$45$League$Stick_Man_Battle$server$$GameCustomFunctionTrait$get_call_stage$91$(self) {
  return self.stage;
}
(() => {
  const game = Great$45$Love$45$League$Stick_Man_Battle$server$$create_game();
  Great$45$Love$45$League$Stick_Man_Battle$server$$load_map(game, 2);
  Great$45$Love$45$League$Stick_Man_Battle$server$$box2d_init(game);
  Great$45$Love$45$League$Stick_Man_Battle$server$$load_custom_functions(game);
  Great$45$Love$45$League$Stick_Man_Battle$server$$register_control(game);
  Great$45$Love$45$League$Stick_Man_Battle$server$$register_auto_aim(game);
  Great$45$Love$45$League$Stick_Man_Battle$server$$register_hp_show(game);
  Great$45$Love$45$League$Stick_Man_Battle$server$$register_show_mouse_screen_coords(game);
  Great$45$Love$45$League$Stick_Man_Battle$server$$getP5Instance$46$inner((p) => {
    const _p = { self: p, method_0: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getP5Instance$85$, method_1: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getTouches$86$, method_2: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchEnded$86$, method_3: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchEnded$86$, method_4: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchMoved$86$, method_5: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchMoved$86$, method_6: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchStarted$86$, method_7: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchStarted$86$, method_8: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKey$86$, method_9: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKeyCode$86$, method_10: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$, method_11: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsPressed$86$, method_12: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyPressed$86$, method_13: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyPressed$86$, method_14: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyReleased$86$, method_15: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyReleased$86$, method_16: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyTyped$86$, method_17: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyTyped$86$, method_18: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseX$86$, method_19: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseY$86$, method_20: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedX$86$, method_21: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedY$86$, method_22: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseX$86$, method_23: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseY$86$, method_24: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseX$86$, method_25: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseY$86$, method_26: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseX$86$, method_27: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseY$86$, method_28: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$mouseIsPressed$86$, method_29: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButtonString$86$, method_30: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButton$86$, method_31: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setDoubleClicked$86$, method_32: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelDoubleClicked$86$, method_33: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseClicked$86$, method_34: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseClicked$86$, method_35: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseDragged$86$, method_36: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseDragged$86$, method_37: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseMoved$86$, method_38: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseMoved$86$, method_39: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMousePressed$86$, method_40: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMousePressed$86$, method_41: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseReleased$86$, method_42: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseReleased$86$, method_43: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseWheel$86$, method_44: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseWheel$86$, method_45: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$requestPointerLock$86$, method_46: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$exitPointerLock$86$, method_47: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipseMode$86$, method_48: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rectMode$86$, method_49: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noSmooth$86$, method_50: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$smooth$86$, method_51: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeCap$86$, method_52: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeJoin$86$, method_53: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeWeight$86$, method_54: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$arc$86$, method_55: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$circle$86$, method_56: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipse$86$, method_57: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$line$86$, method_58: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$point$86$, method_59: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quad$86$, method_60: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$86$, method_61: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$triangle$86$, method_62: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$square$86$, method_63: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezier$86$, method_64: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierPoint$86$, method_65: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierTangent$86$, method_66: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curve$86$, method_67: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curvePoint$86$, method_68: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTangent$86$, method_69: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTightness$86$, method_70: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginContour$86$, method_71: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endContour$86$, method_72: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginShape$86$, method_73: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endShape$86$, method_74: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierVertex$86$, method_75: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveVertex$86$, method_76: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$vertex$86$, method_77: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$normal$86$, method_78: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quadraticVertex$86$, method_79: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noStroke$86$, method_80: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$background$86$, method_81: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$, method_82: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorObj$86$, method_83: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginClip$86$, method_84: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endClip$86$, method_85: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clear$86$, method_86: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clip$86$, method_87: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clipOptions$86$, method_88: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeUniform$86$, method_89: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeDetailed$86$, method_90: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$erase$86$, method_91: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noErase$86$, method_92: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeColor$86$, method_93: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeGray$86$, method_94: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeComponents$86$, method_95: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeString$86$, method_96: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noFill$86$, method_97: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$brightness$86$, method_98: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$color$86$, method_99: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$alpha$86$, method_100: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$blue$86$, method_101: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$green$86$, method_102: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$red$86$, method_103: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$hue$86$, method_104: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lerpColor$86$, method_105: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lightness$86$, method_106: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$paletteLerp$86$, method_107: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textAlign$86$, method_108: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textLeadingSet$86$, method_109: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textLeadingGet$86$, method_110: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textAscent$86$, method_111: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textDescent$86$, method_112: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textSizeSet$86$, method_113: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textSizeGet$86$, method_114: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textStyle$86$, method_115: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textWidth$86$, method_116: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textWrap$86$, method_117: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$loadFont$86$, method_118: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textFont$86$, method_119: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$text$86$ };
    _p.method_80(_p.self, 255, Great$45$Love$45$League$Stick_Man_Battle$server$$clear_screen$46$constr$47$3449, Great$45$Love$45$League$Stick_Man_Battle$server$$clear_screen$46$constr$47$3450, Option$None$0$);
    Great$45$Love$45$League$Stick_Man_Battle$server$$Game$state_machine_update(game, p);
    Great$45$Love$45$League$Stick_Man_Battle$server$$draw_world({ self: p, method_0: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getP5Instance$85$, method_1: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getTouches$86$, method_2: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchEnded$86$, method_3: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchEnded$86$, method_4: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchMoved$86$, method_5: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchMoved$86$, method_6: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setTouchStarted$86$, method_7: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelTouchStarted$86$, method_8: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKey$86$, method_9: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getKeyCode$86$, method_10: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsDown$86$, method_11: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$keyIsPressed$86$, method_12: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyPressed$86$, method_13: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyPressed$86$, method_14: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyReleased$86$, method_15: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyReleased$86$, method_16: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setKeyTyped$86$, method_17: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelKeyTyped$86$, method_18: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseX$86$, method_19: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseY$86$, method_20: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedX$86$, method_21: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMovedY$86$, method_22: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseX$86$, method_23: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPmouseY$86$, method_24: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseX$86$, method_25: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getPwinMouseY$86$, method_26: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseX$86$, method_27: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getWinMouseY$86$, method_28: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$mouseIsPressed$86$, method_29: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButtonString$86$, method_30: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$getMouseButton$86$, method_31: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setDoubleClicked$86$, method_32: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelDoubleClicked$86$, method_33: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseClicked$86$, method_34: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseClicked$86$, method_35: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseDragged$86$, method_36: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseDragged$86$, method_37: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseMoved$86$, method_38: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseMoved$86$, method_39: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMousePressed$86$, method_40: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMousePressed$86$, method_41: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseReleased$86$, method_42: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseReleased$86$, method_43: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$setMouseWheel$86$, method_44: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$cancelMouseWheel$86$, method_45: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$requestPointerLock$86$, method_46: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$exitPointerLock$86$, method_47: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipseMode$86$, method_48: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rectMode$86$, method_49: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noSmooth$86$, method_50: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$smooth$86$, method_51: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeCap$86$, method_52: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeJoin$86$, method_53: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeWeight$86$, method_54: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$arc$86$, method_55: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$circle$86$, method_56: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$ellipse$86$, method_57: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$line$86$, method_58: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$point$86$, method_59: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quad$86$, method_60: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$rect$86$, method_61: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$triangle$86$, method_62: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$square$86$, method_63: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezier$86$, method_64: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierPoint$86$, method_65: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierTangent$86$, method_66: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curve$86$, method_67: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curvePoint$86$, method_68: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTangent$86$, method_69: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveTightness$86$, method_70: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginContour$86$, method_71: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endContour$86$, method_72: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginShape$86$, method_73: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endShape$86$, method_74: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$bezierVertex$86$, method_75: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$curveVertex$86$, method_76: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$vertex$86$, method_77: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$normal$86$, method_78: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$quadraticVertex$86$, method_79: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noStroke$86$, method_80: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$background$86$, method_81: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorPara$86$, method_82: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$fillColorObj$86$, method_83: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$beginClip$86$, method_84: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$endClip$86$, method_85: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clear$86$, method_86: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clip$86$, method_87: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$clipOptions$86$, method_88: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeUniform$86$, method_89: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$colorModeDetailed$86$, method_90: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$erase$86$, method_91: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noErase$86$, method_92: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeColor$86$, method_93: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeGray$86$, method_94: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeComponents$86$, method_95: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$strokeString$86$, method_96: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$noFill$86$, method_97: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$brightness$86$, method_98: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$color$86$, method_99: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$alpha$86$, method_100: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$blue$86$, method_101: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$green$86$, method_102: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$red$86$, method_103: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$hue$86$, method_104: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lerpColor$86$, method_105: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$lightness$86$, method_106: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$paletteLerp$86$, method_107: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textAlign$86$, method_108: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textLeadingSet$86$, method_109: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textLeadingGet$86$, method_110: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textAscent$86$, method_111: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textDescent$86$, method_112: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textSizeSet$86$, method_113: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textSizeGet$86$, method_114: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textStyle$86$, method_115: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textWidth$86$, method_116: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textWrap$86$, method_117: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$loadFont$86$, method_118: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$textFont$86$, method_119: Demonmasterlqx$MoonP5$cmd$p5js_ffi$$P5JS$text$86$ }, game.world);
  }, 1000, 1000);
})();
