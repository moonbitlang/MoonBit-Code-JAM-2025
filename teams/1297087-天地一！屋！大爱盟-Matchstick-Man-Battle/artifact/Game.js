const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const Option$None$1$ = { $tag: 0 };
function Option$Some$1$(param0) {
  this._0 = param0;
}
Option$Some$1$.prototype.$tag = 1;
const Option$None$2$ = { $tag: 0 };
function Option$Some$2$(param0) {
  this._0 = param0;
}
Option$Some$2$.prototype.$tag = 1;
const Option$None$3$ = { $tag: 0 };
function Option$Some$3$(param0) {
  this._0 = param0;
}
Option$Some$3$.prototype.$tag = 1;
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const moonbitlang$core$double$$Double$mod_ffi = (a, b) => (a % b);
const $64$moonbitlang$47$core$47$list$46$List$Empty$4$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$list$46$List$More$4$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$4$.prototype.$tag = 1;
const rami3l$js$45$ffi$js$$Value$undefined = () => undefined;
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
const Option$None$5$ = { $tag: 0 };
function Option$Some$5$(param0) {
  this._0 = param0;
}
Option$Some$5$.prototype.$tag = 1;
const Option$None$6$ = { $tag: 0 };
function Option$Some$6$(param0) {
  this._0 = param0;
}
Option$Some$6$.prototype.$tag = 1;
const Option$None$7$ = { $tag: 0 };
function Option$Some$7$(param0) {
  this._0 = param0;
}
Option$Some$7$.prototype.$tag = 1;
const Option$None$8$ = { $tag: 0 };
function Option$Some$8$(param0) {
  this._0 = param0;
}
Option$Some$8$.prototype.$tag = 1;
const Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame = (self,f) => self.requestAnimationFrame(f);
const Yoorkin$rabbit$45$tea$dom$$Window$cancel_animation_frame = (self,id) => self.cancelAnimationFrame(id);
const Yoorkin$rabbit$45$tea$dom$$window = () => window;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event = (e) => e instanceof MouseEvent ? e : null;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button = (e) => e.button;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x = (e) => e.movementX;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y = (e) => e.movementY;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x = (e) => e.offsetX;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y = (e) => e.offsetY;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event = (e) => e instanceof KeyboardEvent ? e : null;
const Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code = (e) => e.code;
const Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new = () => new Image();
const Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src = (self, value) => self.src = value;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element = (x) => x instanceof HTMLCanvasElement ? x : null;
const Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context = (x, id) => x.getContext(id);
const Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener = (target, type, listener) => target.addEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d = (value) => value instanceof CanvasRenderingContext2D ? value : null;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save = (x) => x.save();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore = (x) => x.restore();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale = (self,x,y) => self.scale(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate = (self,x,y) => self.translate(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform = (self,a,b,c,d,e,f) => self.transform(a,b,c,d,e,f);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style = (x,value) => x.strokeStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style = (x,value) => x.fillStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_linear_gradient = (x,x0,y0,x1,y1) => x.createLinearGradient(x0,y0,x1,y1);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern = (self,image,repetition) => self.createPattern(image,repetition);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect = (self,x,y,w,h) => self.clearRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect = (self,x,y,w,h) => self.fillRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect = (self,x,y,w,h) => self.strokeRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner = (self,text,x,y,maxWidth) => self.fillText(text,x,y,maxWidth);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size = (self,image,sx,sy,sw,sh,dx,dy,dw,dh) => self.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font = (self,value) => self.font = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop = (self,offset,color) => self.addColorStop(offset,color);
const Yoorkin$rabbit$45$tea$dom$$document = () => document;
const Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id = (doc,id) => doc.getElementById(id);
const $64$Milky2018$47$selene$47$system$46$Schedule$Startup = { $tag: 0 };
const $64$Milky2018$47$selene$47$system$46$Schedule$Update = { $tag: 1 };
function $64$Milky2018$47$selene$47$system$46$Schedule$Render(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$tag = 2;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture.prototype.$tag = 0;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation.prototype.$tag = 1;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Text.prototype.$tag = 2;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect.prototype.$tag = 3;
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$9$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$9$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$9$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$9$.prototype.$tag = 4;
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$10$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$10$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$10$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$10$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$10$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$10$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$10$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$10$.prototype.$tag = 4;
const Milky2018$selene$45$canvas$$document_add_event_listener = (event, callback) => { document.addEventListener(event, callback); };
const Milky2018$selene$45$canvas$$is_pointer_locked = (canvas) => document.pointerLockElement === canvas;
const Milky2018$selene$45$canvas$$request_pointer_lock = (elem) => elem.requestPointerLock();;
const Milky2018$selene$45$canvas$$set_viewport_height = (x, y) => { x.height = y; };
const Milky2018$selene$45$canvas$$set_viewport_width = (x, y) => { x.width = y; };
const Milky2018$selene$45$canvas$$time_now = () => performance.now();
const Milky2018$selene$45$canvas$$set_image_smoothing_enabled = (ctx, value) => ctx.imageSmoothingEnabled = value;;
const Option$None$11$ = { $tag: 0 };
function Option$Some$11$(param0) {
  this._0 = param0;
}
Option$Some$11$.prototype.$tag = 1;
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
const Milky2018$selene$45$canvas$$Audio$new = (path) => new Audio(path);
const Milky2018$selene$45$canvas$$Audio$play = (self) => self.play();
const Milky2018$selene$45$canvas$$Audio$set_volume = (self, volume) => self.volume = volume;
const Milky2018$selene$45$canvas$$Audio$set_loop = (self, loop_) => self.loop = loop_;
const Demonmasterlqx$box2d_ffi$box2d$$b2World = (worldAABB, gravity, doSleep) => new b2World(worldAABB, gravity, doSleep);
const Demonmasterlqx$box2d_ffi$box2d$$B2World$createBody = (self, def) => self.CreateBody(def);
const Demonmasterlqx$box2d_ffi$box2d$$B2World$createJoint = (self, def) => self.CreateJoint(def);
const Demonmasterlqx$box2d_ffi$box2d$$B2World$step = (self, dt, iterations) => { self.Step(dt, iterations); };
const Demonmasterlqx$box2d_ffi$box2d$$B2World$getContactList = self => {
   let contacts = [];
   let contact = self.GetContactList();
   while (contact != null) {
     contacts.push(contact);
     contact = contact.m_next;
   }
   return contacts;
 };
const Demonmasterlqx$box2d_ffi$box2d$$b2Vec2 = (x, y) => new b2Vec2(x, y);
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX = self => self.x;
const Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY = self => self.y;
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_ = (self, friction) => { self.friction = friction; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setRestitution_ = (self, restitution) => { self.restitution = restitution; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_ = (self, density) => { self.density = density; };
const Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_ = (self, groupIndex) => { self.groupIndex = groupIndex; };
const Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$getBase_ = self => self;
const Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_ = self => self.GetBody();;
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
const Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents = (self, extents) => { self.extents = extents; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint = (self, point) => { self.anchorPoint.Set(point.x, point.y); };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle = (self, angle) => { self.lowerAngle = angle; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle = (self, angle) => { self.upperAngle = angle; };
const Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit = (self, enable) => { self.enableLimit = enable; };
const Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape1 = self => self.GetShape1();
const Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape2 = self => self.GetShape2();
const Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef = () => new b2BodyDef();
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition = (self, position) => { self.position = position };
const Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape = (self, shape) => { self.AddShape(shape) };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition = self => self.GetCenterPosition();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation = self => self.GetRotation();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getLinearVelocity = self => self.GetLinearVelocity();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity = self => self.GetAngularVelocity();
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce = (self, force, point) => { self.ApplyForce(force, point); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque = (self, torque) => { self.ApplyTorque(torque); };
const Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldVector = (self, localVector) => self.GetWorldVector(localVector);
const Demonmasterlqx$box2d_ffi$box2d$$b2AABB = () => new b2AABB();
const Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setminVertex = (self, v) => { self.minVertex.Set(v.x, v.y); };
const Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setmaxVertex = (self, v) => { self.maxVertex.Set(v.x, v.y); };
const Milky2018$selene$system$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$system$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$system$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$45$canvas$$window = Yoorkin$rabbit$45$tea$dom$$window();
const Milky2018$selene$45$canvas$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$1$(8);
const Milky2018$selene$45$canvas$$audio_cache = moonbitlang$core$builtin$$Map$new$46$inner$2$(8);
const Milky2018$selene$system$$all_codes = moonbitlang$core$set$$Set$from_array$0$([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);
const Milky2018$selene$system$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$system$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$system$$last_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$position$$positions = moonbitlang$core$builtin$$Map$new$46$inner$3$(8);
const _bind = { _0: 0, _1: 0 };
const _bind$2 = Option$None$0$;
const _bind$3 = Option$None$0$;
const _bind$4 = Option$None$0$;
const _bind$5 = Option$None$0$;
const _bind$6 = undefined;
const _bind$7 = { _0: 0, _1: 0 };
const Milky2018$selene$camera$$camera = { position: _bind, limit_top: _bind$4, limit_bottom: _bind$2, limit_left: _bind$3, limit_right: _bind$5, attached_entity: _bind$6, offset: _bind$7, follow_x: true, follow_y: true };
const Milky2018$selene$collision$$shapes = moonbitlang$core$builtin$$Map$new$46$inner$4$(8);
const Milky2018$selene$collision$$pickables = moonbitlang$core$builtin$$Map$new$46$inner$5$(8);
const Milky2018$selene$system$$all_entities = moonbitlang$core$set$$Set$new$46$inner$6$(8);
const Milky2018$selene$ui$$uis = moonbitlang$core$builtin$$Map$new$46$inner$7$(8);
const Milky2018$selene$collision$$quadtree_root = moonbitlang$core$ref$$Ref$new$8$(Milky2018$selene$collision$$QuadTree$new({ _0: 0, _1: 0 }, { _0: 0, _1: 0 }, 0));
const Milky2018$selene$collision$$real_velocities = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const Milky2018$selene$collision$$collision_infos = moonbitlang$core$builtin$$Map$new$46$inner$10$(8);
const Milky2018$selene$collision$$colliders = moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
const Milky2018$selene$collision$$collision_layers = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$13$(0);
const Milky2018$selene$collision$$areas = moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$15$(8);
const Milky2018$selene$system$$timers = moonbitlang$core$array$$Array$new$46$inner$16$(0);
const Yomi017$Game$$particles = moonbitlang$core$ref$$Ref$new$17$([]);
const Yomi017$Game$$platforms = moonbitlang$core$ref$$Ref$new$18$([]);
const Yomi017$Game$$world = moonbitlang$core$ref$$Ref$new$19$(Yomi017$Game$$create_world());
const Yomi017$Game$$entity_to_body_map = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$builtin$$Map$new$46$inner$21$(8));
const Yomi017$Game$$cooldown = moonbitlang$core$ref$$Ref$new$22$(20);
const Yomi017$Game$$walk_state = moonbitlang$core$ref$$Ref$new$23$(false);
const Yomi017$Game$$mouse = moonbitlang$core$ref$$Ref$new$24$(Milky2018$selene$system$$mouse);
function moonbitlang$core$abort$$abort$25$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$22$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$26$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$27$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$28$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$29$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$30$(self, ch) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$31$(x, y) {
  return !(x._0 === y._0 && x._1 === y._1);
}
function moonbitlang$core$builtin$$op_notequal$6$(x, y) {
  return !(x === y);
}
function moonbitlang$core$array$$Array$at$32$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$33$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$34$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$30$(self, str) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$35$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$35$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$0$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$0$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$6$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$6$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$36$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$35$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$37$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$0$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$38$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$6$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, num2);
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
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$22$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$30$, method_1: moonbitlang$core$builtin$$Logger$write_substring$30$, method_2: moonbitlang$core$builtin$$Logger$write_char$30$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$22$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
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
function moonbitlang$core$builtin$$Logger$write_substring$30$(self, str, start, len) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$option$$Option$unwrap$39$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$40$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$41$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$42$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$43$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
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
function moonbitlang$core$builtin$$Map$new$46$inner$44$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$21$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$10$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$11$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$4$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$14$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$15$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$44$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$3$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$21$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$builtin$$Map$set_entry$44$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$3$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$1$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$2$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$9$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$15$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$21$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$10$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$44$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$44$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$44$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$3$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$3$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$3$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$1$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$2$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$9$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$15$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$15$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$15$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$21$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$21$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$21$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$10$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$set_with_hash$44$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$44$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$44$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$44$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$3$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$3$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$3$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$1$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$1$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$2$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$2$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$9$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$9$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$15$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$15$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$15$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$21$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$21$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$21$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$21$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$10$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$10$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$44$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$44$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$3$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$3$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$1$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$1$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$2$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$2$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$9$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$9$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$15$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$15$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$21$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$21$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$10$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$10$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$44$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$44$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$3$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$15$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$15$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$21$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$21$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$from_array$44$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$46$inner$44$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      moonbitlang$core$builtin$$Map$set$44$(m, _p$3._0, _p$3._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$36$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return Option$None$1$;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$1$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$1$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$36$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return Option$None$2$;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$2$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$2$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$11$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$7$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return -1;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$5$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$14$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$12$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$10$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return Option$None$3$;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return new Option$Some$3$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$3$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$45$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$46$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$Map$clear$10$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$45$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter2$21$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$8 = yield_(_key, _value);
        if (_bind$8 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$9$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$8 = yield_(_key, _value);
        if (_bind$8 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$4$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$8 = yield_(_key, _value);
        if (_bind$8 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$7$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$8 = yield_(_key, _value);
        if (_bind$8 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$to_array$15$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$push$47$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$48$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$26$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$33$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$32$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$49$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$8$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$28$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$16$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$50$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
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
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_uint(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end875 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end875) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$35$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$51$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$35$(input) {
  console.log(input);
}
function moonbitlang$core$array$$ArrayView$at$26$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$26$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$22$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$22$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$at$28$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$28$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$22$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$22$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$swap$26$(self, i, j) {
  if (i >= 0 && (i < self.len && (j >= 0 && j < self.len))) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + i | 0;
    $bound_check(_tmp, _tmp$2);
    const temp = _tmp[_tmp$2];
    const _tmp$3 = self.buf;
    const _tmp$4 = self.start + i | 0;
    const _tmp$5 = self.buf;
    const _tmp$6 = self.start + j | 0;
    $bound_check(_tmp$5, _tmp$6);
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4] = _tmp$5[_tmp$6];
    const _tmp$7 = self.buf;
    const _tmp$8 = self.start + j | 0;
    $bound_check(_tmp$7, _tmp$8);
    _tmp$7[_tmp$8] = temp;
    return;
  } else {
    moonbitlang$core$abort$$abort$25$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$22$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$22$(i)}, ${moonbitlang$core$builtin$$Show$to_string$22$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$swap$28$(self, i, j) {
  if (i >= 0 && (i < self.len && (j >= 0 && j < self.len))) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + i | 0;
    $bound_check(_tmp, _tmp$2);
    const temp = _tmp[_tmp$2];
    const _tmp$3 = self.buf;
    const _tmp$4 = self.start + i | 0;
    const _tmp$5 = self.buf;
    const _tmp$6 = self.start + j | 0;
    $bound_check(_tmp$5, _tmp$6);
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4] = _tmp$5[_tmp$6];
    const _tmp$7 = self.buf;
    const _tmp$8 = self.start + j | 0;
    $bound_check(_tmp$7, _tmp$8);
    _tmp$7[_tmp$8] = temp;
    return;
  } else {
    moonbitlang$core$abort$$abort$25$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$22$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$22$(i)}, ${moonbitlang$core$builtin$$Show$to_string$22$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$26$(self, start, end) {
  const len = self.len;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$27$("View index out of bounds");
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$28$(self, start, end) {
  const len = self.len;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$29$("View index out of bounds");
}
function moonbitlang$core$array$$Array$new$46$inner$13$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$16$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$50$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$16$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_pop$13$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$pop$13$(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$13$(self);
    return v;
  }
}
function moonbitlang$core$array$$Array$contains$52$(self, value) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      if (v === value) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$array$$get_limit(len) {
  let len$2 = len;
  let limit = 0;
  while (true) {
    if (len$2 > 0) {
      len$2 = len$2 / 2 | 0;
      limit = limit + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return limit;
}
function moonbitlang$core$array$$bubble_sort_by$26$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1071) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$26$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$26$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$26$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$bubble_sort_by$28$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1071) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$28$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$28$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$28$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$rev_inplace$26$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$26$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$rev_inplace$28$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$28$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$982(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$26$(arr, a), moonbitlang$core$array$$ArrayView$at$26$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$26$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$983(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$982(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$982(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$982(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$26$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$983(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$983(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$983(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$983(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$26$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1002(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$28$(arr, a), moonbitlang$core$array$$ArrayView$at$28$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$28$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1003(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1002(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1002(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1002(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$28$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1003(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1003(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1003(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1003(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$28$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$sift_down_by$26$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$26$(arr, child), moonbitlang$core$array$$ArrayView$at$26$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$26$(arr, index$2), moonbitlang$core$array$$ArrayView$at$26$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$26$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$sift_down_by$28$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$28$(arr, child), moonbitlang$core$array$$ArrayView$at$28$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$28$(arr, index$2), moonbitlang$core$array$$ArrayView$at$28$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$28$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$26$(arr, cmp) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$26$(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      moonbitlang$core$array$$ArrayView$swap$26$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$26$(moonbitlang$core$array$$ArrayView$sub$46$inner$26$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$28$(arr, cmp) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$28$(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      moonbitlang$core$array$$ArrayView$swap$28$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$28$(moonbitlang$core$array$$ArrayView$sub$46$inner$28$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$partition_by$26$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$26$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$26$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$26$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$26$(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$ArrayView$swap$26$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$partition_by$28$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$28$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$28$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$28$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$28$(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$ArrayView$swap$28$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$try_bubble_sort_by$26$(arr, cmp) {
  let tries = 0;
  const _end1081 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1081) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$26$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$26$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$26$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$try_bubble_sort_by$28$(arr, cmp) {
  let tries = 0;
  const _end1081 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1081) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$28$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$28$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$28$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$quick_sort_by$26$(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p = arr$2;
    const len = _p.len;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$bubble_sort_by$26$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$26$(arr$2, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$choose_pivot_by$26$(arr$2, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$26$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$partition_by$26$(arr$2, cmp, _pivot_index);
    const _pivot = _bind$9._0;
    const _partitioned = _bind$9._1;
    was_partitioned = _partitioned;
    const _p$2 = len - _pivot | 0;
    balanced = (_pivot > _p$2 ? _p$2 : _pivot) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$10 = pred$2;
    if (_bind$10 === undefined) {
    } else {
      const _Some = _bind$10;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$26$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$26$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$26$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$26$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$26$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$26$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$26$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$26$(right, cmp, moonbitlang$core$array$$ArrayView$at$26$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$quick_sort_by$28$(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p = arr$2;
    const len = _p.len;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$bubble_sort_by$28$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$28$(arr$2, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$choose_pivot_by$28$(arr$2, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$28$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$partition_by$28$(arr$2, cmp, _pivot_index);
    const _pivot = _bind$9._0;
    const _partitioned = _bind$9._1;
    was_partitioned = _partitioned;
    const _p$2 = len - _pivot | 0;
    balanced = (_pivot > _p$2 ? _p$2 : _pivot) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$10 = pred$2;
    if (_bind$10 === undefined) {
    } else {
      const _Some = _bind$10;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$28$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$28$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$28$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$28$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$28$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$28$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$28$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$28$(right, cmp, moonbitlang$core$array$$ArrayView$at$28$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$53$(self, map) {
  moonbitlang$core$array$$quick_sort_by$26$({ buf: self, start: 0, len: self.length }, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$28$(self, cmp) {
  moonbitlang$core$array$$quick_sort_by$28$({ buf: self, start: 0, len: self.length }, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$builtin$$Mod$mod$54$(self, other) {
  return moonbitlang$core$double$$Double$mod_ffi(self, other);
}
function moonbitlang$core$list$$List$of$8$(arr) {
  let _tmp = arr.length - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$4$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      $bound_check(arr, i);
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$4$(arr[i], list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$ref$$Ref$new$55$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$18$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$19$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$17$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$20$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$8$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$24$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$23$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$22$(x) {
  return { val: x };
}
function moonbitlang$core$set$$Set$new$46$inner$0$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$6$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$set$$Set$add_entry_to_tail$6$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
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
function moonbitlang$core$set$$Set$set_entry$0$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$set_entry$6$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$push_away$0$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
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
function moonbitlang$core$set$$Set$push_away$6$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$8 = _tmp$4[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$6$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$6$(self, entry$2, idx$2);
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
function moonbitlang$core$set$$Set$add_with_hash$0$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$0$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$0$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$6$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$6$(self);
  }
  let _bind$8;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$9 = _tmp$3[idx];
    if (_bind$9 === undefined) {
      _bind$8 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$6$(self, idx, _curr_entry);
        _bind$8 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _bind$9 = self.tail;
  const _bind$10 = undefined;
  const entry = { prev: _bind$9, next: _bind$10, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$6$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$0$(self) {
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
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$0$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$grow$6$(self) {
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
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$6$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$0$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$37$(key));
}
function moonbitlang$core$set$$Set$add$6$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$6$(self, key, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$set$$Set$from_array$0$(arr) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      moonbitlang$core$set$$Set$add$0$(m, _p$3);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$6$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return false;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$contains$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$37$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return false;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_entry.key, key)) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove_entry$0$(self, entry) {
  const _bind$8 = entry.prev;
  if (_bind$8 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p = _tmp[_bind$8];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$9 = entry.next;
  if (_bind$9 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$9;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$0$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$8 = _tmp$2[next];
      if (_bind$8 === undefined) {
        break _L;
      } else {
        const _Some = _bind$8;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$0$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$remove$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$37$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_entry.key, key)) {
        moonbitlang$core$set$$Set$remove_entry$0$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$0$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$clear$0$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$46$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$0$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$8 = yield_(_key);
        if (_bind$8 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$iter$6$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$8 = yield_(_key);
        if (_bind$8 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$difference$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp = self.head;
  while (true) {
    const _p = _tmp;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      if (!moonbitlang$core$set$$Set$contains$0$(other, _p$4)) {
        moonbitlang$core$set$$Set$add$0$(m, _p$4);
      }
      _tmp = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp = self.head;
  while (true) {
    const _p = _tmp;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$4);
      _tmp = _p$5;
      continue;
    }
  }
  let _tmp$2 = other.head;
  while (true) {
    const _p = _tmp$2;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$4);
      _tmp$2 = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$6$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$6$(8);
  let _tmp = self.head;
  while (true) {
    const _p = _tmp;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$6$(m, _p$4);
      _tmp = _p$5;
      continue;
    }
  }
  let _tmp$2 = other.head;
  while (true) {
    const _p = _tmp$2;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$6$(m, _p$4);
      _tmp$2 = _p$5;
      continue;
    }
  }
  return m;
}
function rami3l$js$45$ffi$js$$Union3$from0$56$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from1$56$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$56$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$57$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$40$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$58$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$59$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$54$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$60$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$60$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$60$(self)) {
    moonbitlang$core$abort$$abort$25$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$39$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$5$(self) : Option$None$5$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$41$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$42$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$40$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$8$(self) : Option$None$8$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$61$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$61$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$61$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$61$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$61$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$59$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$63$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$64$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$39$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$65$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$42$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$65$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$41$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$40$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$40$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$54$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$math$$Vec2D$op_get(this_, axis) {
  if (axis === 0) {
    return this_._0;
  } else {
    return this_._1;
  }
}
function Milky2018$selene$math$$Vec2D$update(this_, axis, value) {
  if (axis === 0) {
    return { _0: value, _1: this_._1 };
  } else {
    return { _0: this_._0, _1: value };
  }
}
function Milky2018$selene$math$$Rect$intersects(a, b) {
  return Milky2018$selene$math$$Vec2D$op_get(a.position, 0) < Milky2018$selene$math$$Vec2D$op_get(b.position, 0) + Milky2018$selene$math$$Vec2D$op_get(b.size, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 0) + Milky2018$selene$math$$Vec2D$op_get(a.size, 0) > Milky2018$selene$math$$Vec2D$op_get(b.position, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 1) < Milky2018$selene$math$$Vec2D$op_get(b.position, 1) + Milky2018$selene$math$$Vec2D$op_get(b.size, 1) && Milky2018$selene$math$$Vec2D$op_get(a.position, 1) + Milky2018$selene$math$$Vec2D$op_get(a.size, 1) > Milky2018$selene$math$$Vec2D$op_get(b.position, 1)));
}
function Milky2018$selene$math$$Rect$shift(self, dir) {
  const _p = self.position;
  const _tmp = { _0: _p._0 + dir._0, _1: _p._1 + dir._1 };
  return { position: _tmp, size: self.size };
}
function moonbitlang$core$builtin$$Hash$hash_combine$6$(_x_144, _x_145) {
  moonbitlang$core$builtin$$Hash$hash_combine$51$(_x_144, _x_145);
}
function moonbitlang$core$builtin$$Eq$equal$0$(_x_140, _x_141) {
  switch (_x_140) {
    case 0: {
      if (_x_141 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_141 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_141 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_141 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_141 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_141 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_141 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_141 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_141 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_141 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_141 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_141 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_141 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_141 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_141 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_141 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_141 === 16) {
        return true;
      } else {
        return false;
      }
    }
    case 17: {
      if (_x_141 === 17) {
        return true;
      } else {
        return false;
      }
    }
    case 18: {
      if (_x_141 === 18) {
        return true;
      } else {
        return false;
      }
    }
    case 19: {
      if (_x_141 === 19) {
        return true;
      } else {
        return false;
      }
    }
    case 20: {
      if (_x_141 === 20) {
        return true;
      } else {
        return false;
      }
    }
    case 21: {
      if (_x_141 === 21) {
        return true;
      } else {
        return false;
      }
    }
    case 22: {
      if (_x_141 === 22) {
        return true;
      } else {
        return false;
      }
    }
    case 23: {
      if (_x_141 === 23) {
        return true;
      } else {
        return false;
      }
    }
    case 24: {
      if (_x_141 === 24) {
        return true;
      } else {
        return false;
      }
    }
    case 25: {
      if (_x_141 === 25) {
        return true;
      } else {
        return false;
      }
    }
    case 26: {
      if (_x_141 === 26) {
        return true;
      } else {
        return false;
      }
    }
    case 27: {
      if (_x_141 === 27) {
        return true;
      } else {
        return false;
      }
    }
    case 28: {
      if (_x_141 === 28) {
        return true;
      } else {
        return false;
      }
    }
    case 29: {
      if (_x_141 === 29) {
        return true;
      } else {
        return false;
      }
    }
    case 30: {
      if (_x_141 === 30) {
        return true;
      } else {
        return false;
      }
    }
    case 31: {
      if (_x_141 === 31) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_141 === 32) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$0$(_x_132, _x_133) {
  switch (_x_132) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 10);
      return;
    }
    case 11: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 11);
      return;
    }
    case 12: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 12);
      return;
    }
    case 13: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 13);
      return;
    }
    case 14: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 14);
      return;
    }
    case 15: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 15);
      return;
    }
    case 16: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 16);
      return;
    }
    case 17: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 17);
      return;
    }
    case 18: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 18);
      return;
    }
    case 19: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 19);
      return;
    }
    case 20: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 20);
      return;
    }
    case 21: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 21);
      return;
    }
    case 22: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 22);
      return;
    }
    case 23: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 23);
      return;
    }
    case 24: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 24);
      return;
    }
    case 25: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 25);
      return;
    }
    case 26: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 26);
      return;
    }
    case 27: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 27);
      return;
    }
    case 28: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 28);
      return;
    }
    case 29: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 29);
      return;
    }
    case 30: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 30);
      return;
    }
    case 31: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 31);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_133, 32);
      return;
    }
  }
}
function Milky2018$selene$system$$timer_system(_backend, delta) {
  const _p = [];
  const _p$2 = Milky2018$selene$system$$timers.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = Milky2018$selene$system$$timers[_p$3];
      if (_p$4.pausible) {
        moonbitlang$core$array$$Array$push$16$(_p, _p$4);
      }
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p;
  const _len = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const timer = _arr[_i];
      if (timer.pausible) {
      }
      timer.rest = timer.rest - delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$3 = Milky2018$selene$system$$timers.length;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  while (true) {
    const _p$4 = _tmp$3;
    const _p$5 = _tmp$4;
    if (_p$4 < _p$3) {
      const _p$6 = Milky2018$selene$system$$timers[_p$4];
      if (_p$6.rest > 0) {
        Milky2018$selene$system$$timers[_p$5] = _p$6;
        _tmp$3 = _p$4 + 1 | 0;
        _tmp$4 = _p$5 + 1 | 0;
        continue;
      }
      _tmp$3 = _p$4 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$16$(Milky2018$selene$system$$timers, _p$5);
      return;
    }
  }
}
function Milky2018$selene$system$$realtime_timer_system(_backend, delta) {
  const _p = [];
  const _p$2 = Milky2018$selene$system$$timers.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = Milky2018$selene$system$$timers[_p$3];
      if (!_p$4.pausible) {
        moonbitlang$core$array$$Array$push$16$(_p, _p$4);
      }
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p;
  const _len = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const timer = _arr[_i];
      if (timer.pausible) {
      }
      timer.rest = timer.rest - delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$3 = Milky2018$selene$system$$timers.length;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  while (true) {
    const _p$4 = _tmp$3;
    const _p$5 = _tmp$4;
    if (_p$4 < _p$3) {
      const _p$6 = Milky2018$selene$system$$timers[_p$4];
      if (_p$6.rest > 0) {
        Milky2018$selene$system$$timers[_p$5] = _p$6;
        _tmp$3 = _p$4 + 1 | 0;
        _tmp$4 = _p$5 + 1 | 0;
        continue;
      }
      _tmp$3 = _p$4 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$16$(Milky2018$selene$system$$timers, _p$5);
      return;
    }
  }
}
function Milky2018$selene$system$$advanced_mouse_system(_backend, _delta) {
  Milky2018$selene$system$$just_pressed_mouse.left_button = Milky2018$selene$system$$mouse.left_button && !Milky2018$selene$system$$last_mouse.left_button;
  Milky2018$selene$system$$just_pressed_mouse.right_button = Milky2018$selene$system$$mouse.right_button && !Milky2018$selene$system$$last_mouse.right_button;
  Milky2018$selene$system$$just_pressed_mouse.middle_button = Milky2018$selene$system$$mouse.middle_button && !Milky2018$selene$system$$last_mouse.middle_button;
  Milky2018$selene$system$$just_release_mouse.left_button = !Milky2018$selene$system$$mouse.left_button && Milky2018$selene$system$$last_mouse.left_button;
  Milky2018$selene$system$$just_release_mouse.right_button = !Milky2018$selene$system$$mouse.right_button && Milky2018$selene$system$$last_mouse.right_button;
  Milky2018$selene$system$$just_release_mouse.middle_button = !Milky2018$selene$system$$mouse.middle_button && Milky2018$selene$system$$last_mouse.middle_button;
  Milky2018$selene$system$$last_mouse.pos = Milky2018$selene$system$$mouse.pos;
  Milky2018$selene$system$$last_mouse.left_button = Milky2018$selene$system$$mouse.left_button;
  Milky2018$selene$system$$last_mouse.right_button = Milky2018$selene$system$$mouse.right_button;
  Milky2018$selene$system$$last_mouse.middle_button = Milky2018$selene$system$$mouse.middle_button;
}
function Milky2018$selene$system$$is_mouse_pressed(button) {
  switch (button) {
    case 0: {
      return Milky2018$selene$system$$mouse.left_button;
    }
    case 1: {
      return Milky2018$selene$system$$mouse.right_button;
    }
    default: {
      return Milky2018$selene$system$$mouse.middle_button;
    }
  }
}
function Milky2018$selene$system$$is_mouse_released(button) {
  switch (button) {
    case 0: {
      return !Milky2018$selene$system$$mouse.left_button;
    }
    case 1: {
      return !Milky2018$selene$system$$mouse.right_button;
    }
    default: {
      return !Milky2018$selene$system$$mouse.middle_button;
    }
  }
}
function Milky2018$selene$system$$is_mouse_just_pressed(button) {
  switch (button) {
    case 0: {
      return Milky2018$selene$system$$just_pressed_mouse.left_button;
    }
    case 1: {
      return Milky2018$selene$system$$just_pressed_mouse.right_button;
    }
    default: {
      return Milky2018$selene$system$$just_pressed_mouse.middle_button;
    }
  }
}
function Milky2018$selene$system$$is_mouse_just_released(button) {
  switch (button) {
    case 0: {
      return Milky2018$selene$system$$just_release_mouse.left_button;
    }
    case 1: {
      return Milky2018$selene$system$$just_release_mouse.right_button;
    }
    default: {
      return Milky2018$selene$system$$just_release_mouse.middle_button;
    }
  }
}
function Milky2018$selene$system$$Code$from_string(code) {
  switch (code) {
    case "KeyA": {
      return 0;
    }
    case "KeyB": {
      return 1;
    }
    case "KeyC": {
      return 2;
    }
    case "KeyD": {
      return 3;
    }
    case "KeyE": {
      return 4;
    }
    case "KeyF": {
      return 5;
    }
    case "KeyG": {
      return 6;
    }
    case "KeyH": {
      return 7;
    }
    case "KeyI": {
      return 8;
    }
    case "KeyJ": {
      return 9;
    }
    case "KeyK": {
      return 10;
    }
    case "KeyL": {
      return 11;
    }
    case "KeyM": {
      return 12;
    }
    case "KeyN": {
      return 13;
    }
    case "KeyO": {
      return 14;
    }
    case "KeyP": {
      return 15;
    }
    case "KeyQ": {
      return 16;
    }
    case "KeyR": {
      return 17;
    }
    case "KeyS": {
      return 18;
    }
    case "KeyT": {
      return 19;
    }
    case "KeyU": {
      return 20;
    }
    case "KeyV": {
      return 21;
    }
    case "KeyW": {
      return 22;
    }
    case "KeyX": {
      return 23;
    }
    case "KeyY": {
      return 24;
    }
    case "ArrowUp": {
      return 26;
    }
    case "ArrowDown": {
      return 27;
    }
    case "ArrowLeft": {
      return 28;
    }
    case "ArrowRight": {
      return 29;
    }
    case "Space": {
      return 30;
    }
    case "Enter": {
      return 31;
    }
    case "Escape": {
      return 32;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$system$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$system$$pressed_keys, code);
}
function Milky2018$selene$system$$advanced_key_system(_backend, _delta) {
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$system$$just_pressed_keys);
  const _bind$8 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$system$$pressed_keys, Milky2018$selene$system$$last_pressed_keys));
  _bind$8((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$system$$just_pressed_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$system$$just_release_keys);
  const _bind$9 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$union$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$system$$all_codes, Milky2018$selene$system$$pressed_keys), Milky2018$selene$system$$last_pressed_keys));
  _bind$9((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$system$$just_release_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$system$$last_pressed_keys);
  const _bind$10 = moonbitlang$core$set$$Set$iter$0$(Milky2018$selene$system$$pressed_keys);
  _bind$10((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$system$$last_pressed_keys, code);
    return 1;
  });
}
function Milky2018$selene$system$$iter_entities() {
  return moonbitlang$core$set$$Set$iter$6$(Milky2018$selene$system$$all_entities);
}
function Milky2018$selene$system$$Entity$is_alive(e) {
  return moonbitlang$core$set$$Set$contains$6$(Milky2018$selene$system$$all_entities, e);
}
function Milky2018$selene$system$$Entity$new() {
  const entity = Milky2018$selene$system$$entity_generator.val;
  Milky2018$selene$system$$entity_generator.val = (Milky2018$selene$system$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$6$(Milky2018$selene$system$$all_entities, entity);
  return entity;
}
function Milky2018$selene$system$$deferred_event_system(_backend, _delta) {
  while (true) {
    const _bind$8 = moonbitlang$core$array$$Array$pop$13$(Milky2018$selene$system$$deferred_events);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _event = _Some;
      _event();
      continue;
    }
  }
}
function Milky2018$selene$system$$App$new(backend) {
  return { canvas_height: 256, canvas_width: 512, zoom: 1, image_smooth: true, fps: 60, systems: [], plugins: [], backend: backend };
}
function Milky2018$selene$system$$App$with_image_smooth(self, image_smooth) {
  return { ...self, image_smooth: image_smooth };
}
function Milky2018$selene$system$$App$with_canvas_height(self, height) {
  return { ...self, canvas_height: height };
}
function Milky2018$selene$system$$App$with_canvas_width(self, width) {
  return { ...self, canvas_width: width };
}
function Milky2018$selene$system$$App$with_fps(self, fps) {
  return { ...self, fps: fps };
}
function Milky2018$selene$system$$App$with_zoom(self, zoom) {
  return { ...self, zoom: zoom };
}
function Milky2018$selene$system$$App$add_plugin(self, plugin) {
  const plugins = self.plugins;
  moonbitlang$core$array$$Array$push$48$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$22$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$47$(systems, { _0: system, _1: schedule, _2: system_name$2 });
  return { ...self, systems: systems };
}
function Milky2018$selene$system$$App$add_system(self, system, schedule$46$opt, system_name) {
  let schedule;
  if (schedule$46$opt === undefined) {
    schedule = $64$Milky2018$47$selene$47$system$46$Schedule$Update;
  } else {
    const _Some = schedule$46$opt;
    schedule = _Some;
  }
  return Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name);
}
function Milky2018$selene$system$$App$run(self) {
  const _arr = self.plugins;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const plugin = _arr[_i];
      plugin(self);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = self.backend;
  const run_game = _tmp$2.method_0(_tmp$2.self, self.systems, self.canvas_width, self.canvas_height, self.fps, self.image_smooth, self.zoom);
  const _tmp$3 = self.backend;
  _tmp$3.method_3(_tmp$3.self, Milky2018$selene$system$$pressed_keys);
  const _tmp$4 = self.backend;
  _tmp$4.method_4(_tmp$4.self, Milky2018$selene$system$$mouse, Milky2018$selene$system$$mouse_movement);
  run_game();
}
function Milky2018$selene$camera$$camera_system(backend, _delta) {
  const _bind$8 = Milky2018$selene$camera$$camera.attached_entity;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _e = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, _e);
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _pos = _Some$2;
      const zoom = backend.method_12(backend.self);
      const _p = backend.method_11(backend.self);
      const _p$2 = { _0: 1 / zoom, _1: 1 / zoom };
      const viewport_size = { _0: _p._0 * _p$2._0, _1: _p._1 * _p$2._1 };
      const _p$3 = { _0: 0.5, _1: 0.5 };
      const _p$4 = { _0: viewport_size._0 * _p$3._0, _1: viewport_size._1 * _p$3._1 };
      const _p$5 = { _0: _pos._0 - _p$4._0, _1: _pos._1 - _p$4._1 };
      const _p$6 = Milky2018$selene$camera$$camera.offset;
      const target_position = { _0: _p$5._0 + _p$6._0, _1: _p$5._1 + _p$6._1 };
      const new_x = Milky2018$selene$camera$$camera.follow_x ? Milky2018$selene$math$$Vec2D$op_get(target_position, 0) : Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0);
      const new_y = Milky2018$selene$camera$$camera.follow_y ? Milky2018$selene$math$$Vec2D$op_get(target_position, 1) : Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1);
      Milky2018$selene$camera$$camera.position = { _0: new_x, _1: new_y };
      const _bind$10 = Milky2018$selene$camera$$camera.limit_top;
      if (_bind$10.$tag === 1) {
        const _Some$3 = _bind$10;
        const _top = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) < _top) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _top };
        }
      }
      const _bind$11 = Milky2018$selene$camera$$camera.limit_bottom;
      if (_bind$11.$tag === 1) {
        const _Some$3 = _bind$11;
        const _bottom = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) > _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1)) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1) };
        }
      }
      const _bind$12 = Milky2018$selene$camera$$camera.limit_left;
      if (_bind$12.$tag === 1) {
        const _Some$3 = _bind$12;
        const _left = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0) < _left) {
          Milky2018$selene$camera$$camera.position = { _0: _left, _1: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) };
        }
      }
      const _bind$13 = Milky2018$selene$camera$$camera.limit_right;
      if (_bind$13.$tag === 1) {
        const _Some$3 = _bind$13;
        const _right = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0) > _right - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 0)) {
          Milky2018$selene$camera$$camera.position = { _0: _right - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) };
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    }
  }
}
function Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(color_rect, zindex, offset) {
  const _bind$8 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect(color_rect);
  return { sprite_type: _bind$8, zindex: zindex, visible: true, offset: offset };
}
function Milky2018$selene$sprite$$Sprite$from_color_rect(color_rect, zindex, offset$46$opt) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(color_rect, zindex, offset);
}
function Milky2018$selene$sprite$$render_animation(backend, animation, current_frame, pos, visible, delta) {
  const frame = moonbitlang$core$array$$Array$at$34$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
  if (visible) {
    backend.method_2(backend.self, frame.sprite_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 0), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 1), Milky2018$selene$math$$Vec2D$op_get(frame.size, 0), Milky2018$selene$math$$Vec2D$op_get(frame.size, 1), animation.transform);
  }
  let new_frame = current_frame + animation.fps * delta;
  if (moonbitlang$core$double$$Double$to_int(new_frame) >= animation.frames.length) {
    if (animation.loop_) {
      new_frame = 0;
    } else {
      new_frame = animation.frames.length + 0 - 0.01;
    }
  }
  return new_frame;
}
function Milky2018$selene$sprite$$render_color_rect(backend, color_rect, position) {
  backend.method_8(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 0), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 1), color_rect.color);
}
function Milky2018$selene$sprite$$render_picture(backend, picture, pos) {
  backend.method_1(backend.self, picture.tile_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(picture.size, 0), Milky2018$selene$math$$Vec2D$op_get(picture.size, 1), picture.transform, picture.repeat);
}
function Milky2018$selene$sprite$$render_text(backend, text, position) {
  backend.method_7(backend.self, text.content, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), text.font, text.color);
}
function Milky2018$selene$sprite$$render_sprite_system(backend, delta) {
  const _p = moonbitlang$core$builtin$$Map$to_array$15$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (Milky2018$selene$system$$Entity$is_alive(_p$5._0)) {
        moonbitlang$core$array$$Array$push$28$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by$28$(sprites, (sprite1, sprite2) => {
    if (sprite1._1.zindex < sprite2._1.zindex) {
      return -1;
    } else {
      if (sprite1._1.zindex > sprite2._1.zindex) {
        return 1;
      } else {
        const _bind$8 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, sprite1._0);
        if (_bind$8 === undefined) {
          return 0;
        } else {
          const _Some = _bind$8;
          const _pos1 = _Some;
          const _bind$9 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, sprite2._0);
          if (_bind$9 === undefined) {
            return 0;
          } else {
            const _Some$2 = _bind$9;
            const _pos2 = _Some$2;
            return Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) < Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? -1 : Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) > Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? 1 : 0;
          }
        }
      }
    }
  });
  const _len = sprites.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      _L: {
        const sprite = sprites[_i];
        const e = sprite._0;
        const sprite$2 = sprite._1;
        const _bind$8 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
        if (_bind$8 === undefined) {
          break _L;
        } else {
          const _Some = _bind$8;
          const _pos = _Some;
          const _bind$9 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$ui$$uis, e);
          let pos;
          if (_bind$9 === -1) {
            const _p$4 = Milky2018$selene$camera$$camera.position;
            pos = { _0: _pos._0 - _p$4._0, _1: _pos._1 - _p$4._1 };
          } else {
            pos = _pos;
          }
          const _bind$10 = sprite$2.sprite_type;
          switch (_bind$10.$tag) {
            case 0: {
              const _Picture = _bind$10;
              const _picture = _Picture._0;
              if (sprite$2.visible) {
                const _p$4 = sprite$2.offset;
                Milky2018$selene$sprite$$render_picture(backend, _picture, { _0: pos._0 + _p$4._0, _1: pos._1 + _p$4._1 });
              }
              break;
            }
            case 1: {
              const _Animation = _bind$10;
              const _anime = _Animation._0;
              const _frame = _Animation._1;
              const _p$4 = sprite$2.offset;
              const _tmp$3 = { _0: pos._0 + _p$4._0, _1: pos._1 + _p$4._1 };
              const new_frame = Milky2018$selene$sprite$$render_animation(backend, _anime, _frame, _tmp$3, sprite$2.visible, delta);
              _Animation._1 = new_frame;
              break;
            }
            case 2: {
              const _Text = _bind$10;
              const _text = _Text._0;
              if (sprite$2.visible) {
                const _p$5 = sprite$2.offset;
                Milky2018$selene$sprite$$render_text(backend, _text, { _0: pos._0 + _p$5._0, _1: pos._1 + _p$5._1 });
              }
              break;
            }
            default: {
              const _ColorRect = _bind$10;
              const _color_rect = _ColorRect._0;
              if (sprite$2.visible) {
                const _p$5 = sprite$2.offset;
                Milky2018$selene$sprite$$render_color_rect(backend, _color_rect, { _0: pos._0 + _p$5._0, _1: pos._1 + _p$5._1 });
              }
            }
          }
        }
        break _L;
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$sprite$$ColorRect$new(size, color) {
  return { size: size, color: color };
}
function Milky2018$selene$collision$$QuadTree$new(position, size, depth) {
  const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$6$(8);
  const _bind$9 = [];
  const _bind$10 = { position: position, size: size };
  return { position: position, size: size, children: _bind$9, depth: depth, bounding_box: _bind$10, entities: _bind$8 };
}
function Milky2018$selene$collision$$QuadTree$is_smallest_size(self) {
  return Milky2018$selene$math$$Vec2D$op_get(self.size, 0) <= 64 || Milky2018$selene$math$$Vec2D$op_get(self.size, 1) <= 64;
}
function Milky2018$selene$collision$$QuadTree$insert(self, entity, box) {
  if (!Milky2018$selene$math$$Rect$intersects(self.bounding_box, box)) {
    return undefined;
  }
  if (Milky2018$selene$collision$$QuadTree$is_smallest_size(self)) {
    moonbitlang$core$set$$Set$add$6$(self.entities, entity);
    return undefined;
  }
  const _p = self.children;
  if (_p.length === 0) {
    const half_size = { _0: Milky2018$selene$math$$Vec2D$op_get(self.size, 0) * 0.5, _1: Milky2018$selene$math$$Vec2D$op_get(self.size, 1) * 0.5 };
    const _self = self.children;
    moonbitlang$core$array$$Array$push$8$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    const _p$2 = self.position;
    const _p$3 = { _0: Milky2018$selene$math$$Vec2D$op_get(half_size, 0), _1: 0 };
    moonbitlang$core$array$$Array$push$8$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$2._0 + _p$3._0, _1: _p$2._1 + _p$3._1 }, half_size, self.depth + 1 | 0));
    const _p$4 = self.position;
    const _p$5 = { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(half_size, 1) };
    moonbitlang$core$array$$Array$push$8$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$4._0 + _p$5._0, _1: _p$4._1 + _p$5._1 }, half_size, self.depth + 1 | 0));
    const _p$6 = self.position;
    moonbitlang$core$array$$Array$push$8$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$6._0 + half_size._0, _1: _p$6._1 + half_size._1 }, half_size, self.depth + 1 | 0));
  }
  const _arr = self.children;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const child = _arr[_i];
      Milky2018$selene$collision$$QuadTree$insert(child, entity, box);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$quadtree_query(area) {
  const trees = { val: moonbitlang$core$list$$List$of$8$([Milky2018$selene$collision$$quadtree_root.val]) };
  let results = moonbitlang$core$set$$Set$new$46$inner$6$(8);
  while (true) {
    const _bind$8 = trees.val;
    if (_bind$8.$tag === 1) {
      const _More = _bind$8;
      const _hd = _More._0;
      const _rest = _More._1;
      trees.val = _rest;
      if (!Milky2018$selene$math$$Rect$intersects(_hd.bounding_box, area)) {
        continue;
      }
      const _bind$9 = _hd.children;
      if (_bind$9.length === 0) {
        results = moonbitlang$core$set$$Set$union$6$(results, _hd.entities);
      } else {
        const _p = _hd.children;
        const _p$2 = _p.length;
        let _tmp = 0;
        while (true) {
          const _p$3 = _tmp;
          if (_p$3 < _p$2) {
            const _p$4 = _p[_p$3];
            const _p$5 = trees.val;
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$4$(_p$4, _p$5);
            _tmp = _p$3 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return results;
}
function Milky2018$selene$collision$$quadtree_clear_system(_discard_, _delta) {
  const left_limit = { val: 0 };
  const right_limit = { val: 0 };
  const top_limit = { val: 0 };
  const bottom_limit = { val: 0 };
  const boxes = [];
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$8 = moonbitlang$core$builtin$$Map$iter2$4$(Milky2018$selene$collision$$shapes);
  _bind$8((e, shape) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$9 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$ui$$uis, e);
      if (_bind$9 === -1) {
        const _bind$10 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
        if (_bind$10 === undefined) {
          return 1;
        } else {
          const _Some = _bind$10;
          const _position = _Some;
          const _Rect = shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$11 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const _bind$12 = { _0: _width, _1: _height };
          const box = { position: _bind$11, size: _bind$12 };
          moonbitlang$core$array$$Array$push$49$(boxes, { _0: e, _1: box });
          const _p = left_limit.val;
          const _p$2 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 0);
          left_limit.val = _p > _p$2 ? _p$2 : _p;
          const _p$3 = right_limit.val;
          const _p$4 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 0) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, 0);
          right_limit.val = _p$3 > _p$4 ? _p$3 : _p$4;
          const _p$5 = top_limit.val;
          const _p$6 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 1);
          top_limit.val = _p$5 > _p$6 ? _p$6 : _p$5;
          const _p$7 = bottom_limit.val;
          const _p$8 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 1) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, 1);
          bottom_limit.val = _p$7 > _p$8 ? _p$7 : _p$8;
        }
      } else {
        return 1;
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  Milky2018$selene$collision$$quadtree_root.val = Milky2018$selene$collision$$QuadTree$new({ _0: left_limit.val, _1: top_limit.val }, { _0: right_limit.val - left_limit.val, _1: bottom_limit.val - top_limit.val }, 0);
  const _len = boxes.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const box = boxes[_i];
      Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root.val, box._0, box._1);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$pickable_click_system(backend, _delta) {
  const zoom = backend.method_12(backend.self);
  const _bind$8 = { _0: 1, _1: 1 };
  const _p = Milky2018$selene$system$$mouse.pos;
  const _p$2 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$9 = { _0: _p._0 * _p$2._0, _1: _p._1 * _p$2._1 };
  const box = { position: _bind$9, size: _bind$8 };
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$10 = moonbitlang$core$builtin$$Map$iter2$7$(Milky2018$selene$ui$$uis);
  _bind$10((e, _ui) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$11 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$collision$$pickables, e);
      if (_bind$11 === undefined) {
        return 1;
      } else {
        const _Some = _bind$11;
        const _pick = _Some;
        const _bind$12 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
        if (_bind$12 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$12;
          const _position = _Some$2;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$shapes, e);
          if (_bind$13 === undefined) {
            return 1;
          } else {
            const _Some$3 = _bind$13;
            const _shape = _Some$3;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$14 = { _0: _width, _1: _height };
            const _bind$15 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const area_box = { position: _bind$15, size: _bind$14 };
            if (!Milky2018$selene$math$$Rect$intersects(box, area_box)) {
              return 1;
            }
            const _arr = [0, 1, 2];
            const _len = _arr.length;
            let _tmp = 0;
            while (true) {
              const _i = _tmp;
              if (_i < _len) {
                const button = _arr[_i];
                if (Milky2018$selene$system$$is_mouse_pressed(button)) {
                  const _arr$2 = _pick.on_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _i$2 = _tmp$2;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$system$$is_mouse_released(button)) {
                  const _arr$2 = _pick.on_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _i$2 = _tmp$2;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$system$$is_mouse_just_pressed(button)) {
                  const _arr$2 = _pick.on_just_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _i$2 = _tmp$2;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$system$$is_mouse_just_released(button)) {
                  const _arr$2 = _pick.on_just_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _i$2 = _tmp$2;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
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
          }
        }
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  const entities = Milky2018$selene$collision$$quadtree_query(box);
  let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$11 = moonbitlang$core$set$$Set$iter$6$(entities);
  _bind$11((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$collision$$pickables, e);
      if (_bind$12 === undefined) {
        return 1;
      } else {
        const _Some = _bind$12;
        const _pick = _Some;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
        if (_bind$13 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$13;
          const _position = _Some$2;
          const _bind$14 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$shapes, e);
          if (_bind$14 === undefined) {
            return 1;
          } else {
            const _Some$3 = _bind$14;
            const _shape = _Some$3;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$15 = { _0: _width, _1: _height };
            const _bind$16 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const area_box = { position: _bind$16, size: _bind$15 };
            if (!Milky2018$selene$math$$Rect$intersects(Milky2018$selene$math$$Rect$shift(box, Milky2018$selene$camera$$camera.position), area_box)) {
              return 1;
            }
            const _arr = [0, 1, 2];
            const _len = _arr.length;
            let _tmp$2 = 0;
            while (true) {
              const _i = _tmp$2;
              if (_i < _len) {
                const button = _arr[_i];
                if (Milky2018$selene$system$$is_mouse_pressed(button)) {
                  const _arr$2 = _pick.on_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _i$2 = _tmp$3;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$3 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$system$$is_mouse_released(button)) {
                  const _arr$2 = _pick.on_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _i$2 = _tmp$3;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$3 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$system$$is_mouse_just_pressed(button)) {
                  const _arr$2 = _pick.on_just_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _i$2 = _tmp$3;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$3 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$system$$is_mouse_just_released(button)) {
                  const _arr$2 = _pick.on_just_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _i$2 = _tmp$3;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$3 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                _tmp$2 = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
        }
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp$2 = _foreach_result$2;
  switch (_tmp$2.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break$2 = _tmp$2;
      _break$2._0;
      return;
    }
    case 2: {
      const _return$2 = _tmp$2;
      _return$2._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function Milky2018$selene$collision$$aabb_resolve(a, b) {
  const _p = a.position;
  const _p$2 = a.size;
  const _p$3 = 0.5;
  const _p$4 = { _0: _p$2._0 * _p$3, _1: _p$2._1 * _p$3 };
  const a_center = { _0: _p._0 + _p$4._0, _1: _p._1 + _p$4._1 };
  const _p$5 = b.position;
  const _p$6 = b.size;
  const _p$7 = 0.5;
  const _p$8 = { _0: _p$6._0 * _p$7, _1: _p$6._1 * _p$7 };
  const b_center = { _0: _p$5._0 + _p$8._0, _1: _p$5._1 + _p$8._1 };
  const _p$9 = a.size;
  const _p$10 = 0.5;
  const a_half = { _0: _p$9._0 * _p$10, _1: _p$9._1 * _p$10 };
  const _p$11 = b.size;
  const _p$12 = 0.5;
  const b_half = { _0: _p$11._0 * _p$12, _1: _p$11._1 * _p$12 };
  const delta = { _0: b_center._0 - a_center._0, _1: b_center._1 - a_center._1 };
  const intersect = { _0: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 0)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 0) + Milky2018$selene$math$$Vec2D$op_get(a_half, 0)), _1: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 1)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 1) + Milky2018$selene$math$$Vec2D$op_get(a_half, 1)) };
  return Milky2018$selene$math$$Vec2D$op_get(intersect, 0) < Milky2018$selene$math$$Vec2D$op_get(intersect, 1) && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 0) > 0 ? { _0: -Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 } : { _0: Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 }) : Milky2018$selene$math$$Vec2D$op_get(intersect, 1) > 0 && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 1) > 0 ? { _0: 0, _1: -Milky2018$selene$math$$Vec2D$op_get(intersect, 1) } : { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(intersect, 1) }) : { _0: 0, _1: 0 };
}
function Milky2018$selene$collision$$add_collision_info(entity, target, direction) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$8.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$50$(0));
  }
  moonbitlang$core$array$$Array$push$50$(moonbitlang$core$option$$Option$unwrap$43$(moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, speed, axis) {
  const pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  const size = { _0: Milky2018$selene$math$$Vec2D$op_get(object.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.size, 1) };
  return speed >= 0 ? { position: pos, size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + speed) } : { position: Milky2018$selene$math$$Vec2D$update(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + speed), size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - speed) };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$52$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, Milky2018$selene$math$$Vec2D$op_get(velocity, axis), axis);
  const new_pos = { val: { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) } };
  new_pos.val = Milky2018$selene$math$$Vec2D$update(new_pos.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const new_velocity = { val: velocity };
  const entities = Milky2018$selene$collision$$quadtree_query(ray_collision);
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$ };
  const _bind$8 = moonbitlang$core$set$$Set$iter$6$(entities);
  _bind$8((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      if (moonbitlang$core$builtin$$op_notequal$6$(e, entity)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$shapes, e);
        if (_bind$9 === undefined) {
          return 1;
        } else {
          const _Some = _bind$9;
          const _shape = _Some;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$10 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
          if (_bind$10 === undefined) {
            return 1;
          } else {
            const _Some$2 = _bind$10;
            const _pos = _Some$2;
            const _bind$11 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$collision_layers, e);
            if (_bind$11 === undefined) {
              return 1;
            } else {
              const _Some$3 = _bind$11;
              const _collision_layer = _Some$3;
              if (Milky2018$selene$collision$$CollisionMask$contains(mask, _collision_layer)) {
                const _bind$12 = { _0: _width, _1: _height };
                const _bind$13 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
                const collision_box = { position: _bind$13, size: _bind$12 };
                if (Milky2018$selene$math$$Rect$intersects(object, collision_box)) {
                  const movement = Milky2018$selene$collision$$aabb_resolve(object, collision_box);
                  const _p = new_pos.val;
                  new_pos.val = { _0: _p._0 + movement._0, _1: _p._1 + movement._1 };
                  const dir = Milky2018$selene$math$$Vec2D$update({ _0: 0, _1: 0 }, axis, Milky2018$selene$math$$Vec2D$op_get(movement, axis) > 0 ? 1 : -1);
                  Milky2018$selene$collision$$add_collision_info(entity, e, dir);
                  _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$10$({ _0: new_pos.val, _1: movement });
                  return 0;
                }
                if (Milky2018$selene$math$$Rect$intersects(ray_collision, collision_box)) {
                  let dir = { _0: 0, _1: 0 };
                  if (Milky2018$selene$math$$Vec2D$op_get(new_velocity.val, axis) > 0) {
                    const _tmp = new_pos.val;
                    const _p = Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) - Milky2018$selene$math$$Vec2D$op_get(object.size, axis);
                    const _p$2 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                    new_pos.val = Milky2018$selene$math$$Vec2D$update(_tmp, axis, _p > _p$2 ? _p : _p$2);
                    new_velocity.val = Milky2018$selene$math$$Vec2D$update(new_velocity.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                    dir = Milky2018$selene$math$$Vec2D$update(dir, axis, 1);
                  } else {
                    if (Milky2018$selene$math$$Vec2D$op_get(new_velocity.val, axis) < 0) {
                      const _tmp = new_pos.val;
                      const _p = Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, axis);
                      const _p$2 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                      new_pos.val = Milky2018$selene$math$$Vec2D$update(_tmp, axis, _p > _p$2 ? _p$2 : _p);
                      new_velocity.val = Milky2018$selene$math$$Vec2D$update(new_velocity.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                      dir = Milky2018$selene$math$$Vec2D$update(dir, axis, -1);
                    }
                  }
                  Milky2018$selene$collision$$add_collision_info(entity, e, dir);
                }
              } else {
                return 1;
              }
            }
          }
        }
      } else {
        return 1;
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  return { _0: new_pos.val, _1: new_velocity.val };
}
function Milky2018$selene$collision$$move_with_collide(e, collider, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$shapes, e);
    if (_bind$9 === undefined) {
      return $panic();
    } else {
      const _Some$2 = _bind$9;
      const _shape = _Some$2;
      const _Rect = _shape;
      const _x = _Rect._0;
      const _width = _x._0;
      const _height = _x._1;
      const _offset = _Rect._1;
      const _bind$10 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
      const _bind$11 = { _0: _width, _1: _height };
      const box = { position: _bind$10, size: _bind$11 };
      const new_x = Milky2018$selene$collision$$move_axis(e, box, velocity, 0, collider.mask);
      const _bind$12 = new_x._0;
      const object_x = { position: _bind$12, size: _bind$11 };
      const new_y = Milky2018$selene$collision$$move_axis(e, object_x, new_x._1, 1, collider.mask);
      const _p = new_y._0;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, e, { _0: _p._0 - _offset._0, _1: _p._1 - _offset._1 });
      return new_y._1;
    }
  }
}
function Milky2018$selene$collision$$move_without_collide(e, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(_pos, 0) + Milky2018$selene$math$$Vec2D$op_get(velocity, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_pos, 1) + Milky2018$selene$math$$Vec2D$op_get(velocity, 1) };
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, e, new_pos);
    return;
  }
}
function Milky2018$selene$collision$$move_system(_backend, delta) {
  moonbitlang$core$builtin$$Map$clear$10$(Milky2018$selene$collision$$collision_infos);
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$8 = moonbitlang$core$builtin$$Map$iter2$9$(Milky2018$selene$velocity$$velocities);
  _bind$8((e, vel) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      _L: {
        _L$2: {
          const _bind$9 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$collision$$colliders, e);
          if (_bind$9 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$9;
            const _collide = _Some;
            if (_collide.active) {
              const new_vel = Milky2018$selene$collision$$move_with_collide(e, _collide, { _0: vel._0 * delta, _1: vel._1 * delta });
              moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$real_velocities, e, { _0: new_vel._0 / delta, _1: new_vel._1 / delta });
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        Milky2018$selene$collision$$move_without_collide(e, { _0: vel._0 * delta, _1: vel._1 * delta });
        moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$real_velocities, e, vel);
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      _return._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function Milky2018$selene$collision$$area_collide_system(_discard_, _delta) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$ };
  const _bind$8 = Milky2018$selene$system$$iter_entities();
  _bind$8((e) => {
    const _bind$9 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$collision$$areas, e);
    if (_bind$9 === undefined) {
      return 1;
    } else {
      const _Some = _bind$9;
      const _area = _Some;
      const _bind$10 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
      if (_bind$10 === undefined) {
        $panic();
      } else {
        const _Some$2 = _bind$10;
        const _position = _Some$2;
        const _bind$11 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$shapes, e);
        if (_bind$11 === undefined) {
          return 1;
        } else {
          const _Some$3 = _bind$11;
          const _shape = _Some$3;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$12 = { _0: _width, _1: _height };
          const _bind$13 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const box = { position: _bind$13, size: _bind$12 };
          const new_contains = moonbitlang$core$set$$Set$new$46$inner$6$(8);
          const entities = Milky2018$selene$collision$$quadtree_query(box);
          let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
          const _bind$14 = moonbitlang$core$set$$Set$iter$6$(entities);
          _bind$14((entity) => {
            if (Milky2018$selene$system$$Entity$is_alive(entity)) {
              const _bind$15 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$collision_layers, entity);
              if (_bind$15 === undefined) {
                return 1;
              } else {
                const _Some$4 = _bind$15;
                const _other_layer = _Some$4;
                const _bind$16 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$shapes, entity);
                if (_bind$16 === undefined) {
                  return 1;
                } else {
                  const _Some$5 = _bind$16;
                  const _other_shape = _Some$5;
                  const _Rect$2 = _other_shape;
                  const _x$2 = _Rect$2._0;
                  const _other_width = _x$2._0;
                  const _other_height = _x$2._1;
                  const _other_offset = _Rect$2._1;
                  const _bind$17 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, entity);
                  if (_bind$17 === undefined) {
                    $panic();
                  } else {
                    const _Some$6 = _bind$17;
                    const _other_position = _Some$6;
                    const _bind$18 = { _0: _other_width, _1: _other_height };
                    const _bind$19 = { _0: _other_position._0 + _other_offset._0, _1: _other_position._1 + _other_offset._1 };
                    const other_box = { position: _bind$19, size: _bind$18 };
                    if (Milky2018$selene$math$$Rect$intersects(box, other_box)) {
                      if (Milky2018$selene$collision$$CollisionMask$contains(_area.mask, _other_layer)) {
                        moonbitlang$core$set$$Set$add$6$(new_contains, entity);
                        if (moonbitlang$core$set$$Set$contains$6$(_area.contains, entity)) {
                          return 1;
                        }
                        const _arr = _area.on_enter_callbacks;
                        const _len = _arr.length;
                        let _tmp = 0;
                        while (true) {
                          const _i = _tmp;
                          if (_i < _len) {
                            const callback = _arr[_i];
                            callback(entity);
                            _tmp = _i + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                      } else {
                        return 1;
                      }
                    } else {
                      return 1;
                    }
                  }
                }
              }
            } else {
              return 1;
            }
            return 1;
          });
          const _tmp = _foreach_result$2;
          switch (_tmp.$tag) {
            case 0: {
              break;
            }
            case 1: {
              const _break = _tmp;
              _break._0;
              break;
            }
            case 2: {
              const _return = _tmp;
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$9$(_return._0);
              return 0;
            }
            case 3: {
              $panic();
              break;
            }
            default: {
              $panic();
            }
          }
          let _foreach_result$3 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
          const _bind$15 = moonbitlang$core$set$$Set$iter$6$(_area.contains);
          _bind$15((entity) => {
            if (moonbitlang$core$set$$Set$contains$6$(new_contains, entity)) {
              return 1;
            }
            const _arr = _area.on_exit_callbacks;
            const _len = _arr.length;
            let _tmp$2 = 0;
            while (true) {
              const _i = _tmp$2;
              if (_i < _len) {
                const callback = _arr[_i];
                callback(entity);
                _tmp$2 = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            return 1;
          });
          const _tmp$2 = _foreach_result$3;
          switch (_tmp$2.$tag) {
            case 0: {
              break;
            }
            case 1: {
              const _break$2 = _tmp$2;
              _break$2._0;
              break;
            }
            case 2: {
              const _return$2 = _tmp$2;
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$9$(_return$2._0);
              return 0;
            }
            case 3: {
              $panic();
              break;
            }
            default: {
              $panic();
            }
          }
          _area.contains = new_contains;
        }
      }
    }
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      _return._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function Milky2018$selene$plugins$$default_plugin(app) {
  const _self = app.systems;
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$system$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$system$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0), _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
  moonbitlang$core$array$$Array$push$47$(_self, { _0: Milky2018$selene$system$$realtime_timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Realtime Timer System" });
}
function Milky2018$selene$system$$Backend$register_mouse_events$66$(self, mouse, mouse_movement) {
  self.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$45$canvas$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$65$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$61$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$61$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$61$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$61$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$45$canvas$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$65$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$61$(mouse_event);
    switch (_bind$8) {
      case 0: {
        mouse.left_button = true;
        return;
      }
      case 1: {
        mouse.middle_button = true;
        return;
      }
      case 2: {
        mouse.right_button = true;
        return;
      }
      default: {
        return;
      }
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$45$canvas$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$65$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$61$(mouse_event);
    switch (_bind$8) {
      case 0: {
        mouse.left_button = false;
        return;
      }
      case 1: {
        mouse.middle_button = false;
        return;
      }
      case 2: {
        mouse.right_button = false;
        return;
      }
      default: {
        return;
      }
    }
  });
}
function Milky2018$selene$system$$Backend$lock_mouse$66$(self, locked) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$63$(self.canvas, "click", (_event) => {
    Milky2018$selene$45$canvas$$request_pointer_lock(self.canvas);
  });
  Milky2018$selene$45$canvas$$document_add_event_listener("pointerlockchange", (_event) => {
    locked.val = Milky2018$selene$45$canvas$$is_pointer_locked(self.canvas);
  });
}
function Milky2018$selene$system$$Backend$register_key_events$66$(_self, pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$45$canvas$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$41$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$65$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$0$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$45$canvas$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$41$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$65$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$add$0$(pressed_keys, _c);
      return;
    }
  });
}
function Milky2018$selene$45$canvas$$get_image_element(png) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$45$canvas$$element_cache, png);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
    const _element = _Some._0;
    return _element;
  }
  const element = Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new();
  Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src(element, png);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$45$canvas$$element_cache, png, element);
  return element;
}
function Milky2018$selene$system$$Backend$preload_img$66$(_self, path) {
  Milky2018$selene$45$canvas$$get_image_element(path);
}
function Milky2018$selene$system$$Backend$draw_picture$66$(self, png, x, y, width, height, transform, repeat) {
  const element = Milky2018$selene$45$canvas$$get_image_element(png);
  let repeat_mode;
  switch (repeat) {
    case 2: {
      repeat_mode = "no-repeat";
      break;
    }
    case 1: {
      repeat_mode = "repeat-y";
      break;
    }
    case 0: {
      repeat_mode = "repeat-x";
      break;
    }
    default: {
      repeat_mode = "repeat";
    }
  }
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(self.context, rami3l$js$45$ffi$js$$Union7$from0$58$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from2$56$(pattern));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_sprite$66$(self, sprite_path, x, y, offset_x, offset_y, width, height, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  const element = Milky2018$selene$45$canvas$$get_image_element(sprite_path);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size(self.context, element, offset_x, offset_y, width, height, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_stroke_rect$66$(self, x, y, width, height, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$56$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_text$66$(self, text, x, y, font, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(self.context, font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$56$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self.context, text, x, y, Option$None$11$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_color_rect$66$(self, x, y, width, height, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$56$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_gradient_rect$66$(self, x, y, width, height, color_start, color_end) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  const gradient = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_linear_gradient(self.context, x, y, x + width, y + height);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 0, color_start);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 1, color_end);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from1$56$(gradient));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$45$canvas$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$39$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$64$(rami3l$js$45$ffi$js$$Nullable$unwrap$60$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$40$(rami3l$js$45$ffi$js$$Union5$to0$57$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$8 = { _0: 0, _1: 0 };
  const _bind$9 = moonbitlang$core$builtin$$Map$from_array$44$([]);
  const _bind$10 = moonbitlang$core$ref$$Ref$new$55$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$8, current_fps: 0, zoom: 1, time_scale: 1, execution_time: _bind$9, mouse_movement: _bind$10 };
}
function Milky2018$selene$system$$Backend$set_time_scale$66$(self, time_scale) {
  self.time_scale = time_scale;
}
function Milky2018$selene$45$canvas$$schedule_with_fixed_interval(interval, callback) {
  const lastTime = { val: 0 };
  const accumulator = { val: 0 };
  const lastId = { val: 0 };
  const update = (time) => {
    if (lastTime.val === 0) {
      lastTime.val = time;
    }
    const delta = time - lastTime.val;
    lastTime.val = time;
    accumulator.val = accumulator.val + delta;
    while (true) {
      if (accumulator.val >= interval) {
        callback(delta);
        accumulator.val = accumulator.val - interval;
        continue;
      } else {
        break;
      }
    }
    lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$45$canvas$$window, update);
  };
  lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$45$canvas$$window, update);
  return () => {
    if (lastId.val !== 0) {
      Yoorkin$rabbit$45$tea$dom$$Window$cancel_animation_frame(Milky2018$selene$45$canvas$$window, lastId.val);
      return;
    } else {
      return;
    }
  };
}
function Milky2018$selene$system$$Backend$build$66$(self, systems, canvas_width, canvas_height, fps, image_smooth, zoom) {
  if (fps >>> 0 > 60 >>> 0) {
    moonbitlang$core$builtin$$println$35$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
  }
  const _len = systems.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const system = systems[_i];
      const _bind$8 = system._1;
      if (_bind$8.$tag === 0) {
        const _func = system._0;
        _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$66$, method_1: Milky2018$selene$system$$Backend$draw_picture$66$, method_2: Milky2018$selene$system$$Backend$draw_sprite$66$, method_3: Milky2018$selene$system$$Backend$register_key_events$66$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$66$, method_5: Milky2018$selene$system$$Backend$lock_mouse$66$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$66$, method_7: Milky2018$selene$system$$Backend$draw_text$66$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$66$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$66$, method_10: Milky2018$selene$system$$Backend$play_audio$66$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$66$, method_12: Milky2018$selene$system$$Backend$get_zoom$66$, method_13: Milky2018$selene$system$$Backend$get_debug_info$66$, method_14: Milky2018$selene$system$$Backend$preload_img$66$, method_15: Milky2018$selene$system$$Backend$preload_audio$66$, method_16: Milky2018$selene$system$$Backend$set_time_scale$66$ }, 0);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.viewport_size = { _0: canvas_width, _1: canvas_height };
  Milky2018$selene$45$canvas$$set_viewport_height(self.canvas, canvas_height);
  Milky2018$selene$45$canvas$$set_viewport_width(self.canvas, canvas_width);
  Milky2018$selene$45$canvas$$set_image_smoothing_enabled(self.context, image_smooth);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale(self.context, zoom, zoom);
  self.zoom = zoom;
  Milky2018$selene$45$canvas$$schedule_with_fixed_interval(1000 / $f64_convert_i32_u(fps), (delta) => {
    self.current_fps = 1000 / delta;
    Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect(self.context, 0, 0, canvas_width, canvas_height);
    const renders = [];
    const _len$2 = systems.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const system = systems[_i];
        const _bind$8 = system._1;
        if (_bind$8.$tag === 2) {
          const _Render = _bind$8;
          const _pri = _Render._0;
          moonbitlang$core$array$$Array$push$26$(renders, { _0: system._0, _1: _pri });
        }
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _len$3 = systems.length;
    let _tmp$3 = 0;
    while (true) {
      const _i = _tmp$3;
      if (_i < _len$3) {
        const system = systems[_i];
        const _bind$8 = system._1;
        if (_bind$8.$tag === 1) {
          const start_time = Milky2018$selene$45$canvas$$time_now();
          const _func = system._0;
          _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$66$, method_1: Milky2018$selene$system$$Backend$draw_picture$66$, method_2: Milky2018$selene$system$$Backend$draw_sprite$66$, method_3: Milky2018$selene$system$$Backend$register_key_events$66$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$66$, method_5: Milky2018$selene$system$$Backend$lock_mouse$66$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$66$, method_7: Milky2018$selene$system$$Backend$draw_text$66$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$66$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$66$, method_10: Milky2018$selene$system$$Backend$play_audio$66$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$66$, method_12: Milky2018$selene$system$$Backend$get_zoom$66$, method_13: Milky2018$selene$system$$Backend$get_debug_info$66$, method_14: Milky2018$selene$system$$Backend$preload_img$66$, method_15: Milky2018$selene$system$$Backend$preload_audio$66$, method_16: Milky2018$selene$system$$Backend$set_time_scale$66$ }, delta * self.time_scale / 1000);
          moonbitlang$core$builtin$$Map$set$44$(self.execution_time, system._2, Milky2018$selene$45$canvas$$time_now() - start_time);
        }
        _tmp$3 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$sort_by_key$53$(renders, (system) => -system._1 | 0);
    const _len$4 = renders.length;
    let _tmp$4 = 0;
    while (true) {
      const _i = _tmp$4;
      if (_i < _len$4) {
        const render = renders[_i];
        const _func = render._0;
        _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$66$, method_1: Milky2018$selene$system$$Backend$draw_picture$66$, method_2: Milky2018$selene$system$$Backend$draw_sprite$66$, method_3: Milky2018$selene$system$$Backend$register_key_events$66$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$66$, method_5: Milky2018$selene$system$$Backend$lock_mouse$66$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$66$, method_7: Milky2018$selene$system$$Backend$draw_text$66$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$66$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$66$, method_10: Milky2018$selene$system$$Backend$play_audio$66$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$66$, method_12: Milky2018$selene$system$$Backend$get_zoom$66$, method_13: Milky2018$selene$system$$Backend$get_debug_info$66$, method_14: Milky2018$selene$system$$Backend$preload_img$66$, method_15: Milky2018$selene$system$$Backend$preload_audio$66$, method_16: Milky2018$selene$system$$Backend$set_time_scale$66$ }, delta * self.time_scale / 1000);
        _tmp$4 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$8 = self.mouse_movement.val;
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _mouse_movement = _Some;
      _mouse_movement.movement = { _0: 0, _1: 0 };
      return;
    }
  });
  return () => {
  };
}
function Milky2018$selene$system$$Backend$get_canvas_size$66$(self) {
  return { _0: Milky2018$selene$math$$Vec2D$op_get(self.viewport_size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(self.viewport_size, 1) };
}
function Milky2018$selene$system$$Backend$get_debug_info$66$(self) {
  return { system_execution_time: self.execution_time, fps: self.current_fps };
}
function Milky2018$selene$system$$Backend$get_zoom$66$(self) {
  return self.zoom;
}
function Milky2018$selene$45$canvas$$get_audio(path) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$45$canvas$$audio_cache, path);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
    const _audio = _Some._0;
    return _audio;
  }
  const audio = Milky2018$selene$45$canvas$$Audio$new(path);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$45$canvas$$audio_cache, path, audio);
  return audio;
}
function Milky2018$selene$system$$Backend$play_audio$66$(_self, audio_path, volume, loop_) {
  const audio = Milky2018$selene$45$canvas$$get_audio(audio_path);
  Milky2018$selene$45$canvas$$Audio$set_volume(audio, volume);
  Milky2018$selene$45$canvas$$Audio$set_loop(audio, loop_);
  Milky2018$selene$45$canvas$$Audio$play(audio);
}
function Milky2018$selene$system$$Backend$preload_audio$66$(_self, audio_path) {
  Milky2018$selene$45$canvas$$get_audio(audio_path);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$67$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$68$(self, friction) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setFriction_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$67$(self), friction);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$68$(self, restitution) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setRestitution_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$67$(self), restitution);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$68$(self, density) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setDensity_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$67$(self), density);
}
function Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$68$(self, groupIndex) {
  Demonmasterlqx$box2d_ffi$box2d$$B2ShapeDef$setGroupIndex_(Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$67$(self), groupIndex);
}
function Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$69$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Shape$getBody_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$70$(self, body) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody1_(base, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$70$(self, body) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setBody2_(base, body);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$70$(self, flag) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(self);
  Demonmasterlqx$box2d_ffi$box2d$$B2JointDef$setCollideConnected_(base, flag);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$getBase_(self);
}
function Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody1$72$(self) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$73$(self);
  return Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody1_(base);
}
function Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody2$72$(self) {
  const base = Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$73$(self);
  return Demonmasterlqx$box2d_ffi$box2d$$B2Joint$getBody2_(base);
}
function Demonmasterlqx$box2d_ffi$box2d$$JointBase$getBase$73$(self) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJoint$getBase_(self);
}
function Yomi017$Game$$world_to_screen(world_x, world_y) {
  const screen_x = world_x * 20;
  const screen_y = world_y * 20;
  return { _0: screen_x, _1: -screen_y + 1080 };
}
function Yomi017$Game$$world_to_screen_siz(world_x, world_y) {
  const screen_x = world_x * 20;
  const screen_y = world_y * 20;
  return { _0: screen_x, _1: screen_y };
}
function Yomi017$Game$$create_dynamic_box(world, pos, size, density) {
  const boxDef = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(boxDef, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$68$(boxDef, density);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setFriction$68$(boxDef, 0.2);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setRestitution$68$(boxDef, 0.1);
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setGroupIndex$68$(boxDef, -1);
  const bodyDef = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(bodyDef, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(pos._0, pos._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(bodyDef, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$67$(boxDef));
  const body = Demonmasterlqx$box2d_ffi$box2d$$B2World$createBody(world, bodyDef);
  const entity = Milky2018$selene$system$$Entity$new();
  const sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: Yomi017$Game$$world_to_screen_siz(size._0 * 2, size._1 * 2)._0, _1: Yomi017$Game$$world_to_screen_siz(size._0 * 2, size._1 * 2)._1 }, "black"), 10, undefined);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: Yomi017$Game$$world_to_screen(pos._0, pos._1)._0, _1: Yomi017$Game$$world_to_screen_siz(pos._0, pos._1)._1 });
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$21$(Yomi017$Game$$entity_to_body_map.val, entity, body);
  return body;
}
function Yomi017$Game$$create_particle(world, position) {
  const torso = Yomi017$Game$$create_dynamic_box(world, position, { _0: 0.25, _1: 1 }, 10);
  const head_position = { _0: position._0, _1: position._1 + 1.5 };
  const head = Yomi017$Game$$create_dynamic_box(world, head_position, { _0: 0.2, _1: 0.25 }, 10);
  const left_thigh_position = { _0: position._0, _1: position._1 - 1 };
  const thigh_left = Yomi017$Game$$create_dynamic_box(world, left_thigh_position, { _0: 0.15, _1: 0.5 }, 10);
  const right_thigh_position = { _0: position._0, _1: position._1 - 1 };
  const thigh_right = Yomi017$Game$$create_dynamic_box(world, right_thigh_position, { _0: 0.15, _1: 0.5 }, 10);
  const left_shank_position = { _0: position._0, _1: position._1 - 2 };
  const shank_left = Yomi017$Game$$create_dynamic_box(world, left_shank_position, { _0: 0.15, _1: 0.5 }, 10);
  const right_shank_position = { _0: position._0, _1: position._1 - 2 };
  const shank_right = Yomi017$Game$$create_dynamic_box(world, right_shank_position, { _0: 0.15, _1: 0.5 }, 10);
  const left_thigh_joint_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$70$(left_thigh_joint_def, torso);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$70$(left_thigh_joint_def, thigh_left);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(left_thigh_joint_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1 - 0.5));
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$70$(left_thigh_joint_def, false);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(left_thigh_joint_def, true);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(left_thigh_joint_def, -1);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(left_thigh_joint_def, 1);
  const left_thigh_joint = Demonmasterlqx$box2d_ffi$box2d$$B2World$createJoint(world, Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(left_thigh_joint_def));
  const right_thigh_joint_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$70$(right_thigh_joint_def, torso);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$70$(right_thigh_joint_def, thigh_right);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(right_thigh_joint_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1 - 0.5));
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$70$(right_thigh_joint_def, false);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(right_thigh_joint_def, true);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(right_thigh_joint_def, -1);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(right_thigh_joint_def, 1);
  const right_thigh_joint = Demonmasterlqx$box2d_ffi$box2d$$B2World$createJoint(world, Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(right_thigh_joint_def));
  const left_knee_joint_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$70$(left_knee_joint_def, thigh_left);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$70$(left_knee_joint_def, shank_left);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(left_knee_joint_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1 - 1.5));
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$70$(left_knee_joint_def, false);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(left_knee_joint_def, true);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(left_knee_joint_def, -1.3);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(left_knee_joint_def, 1.3);
  const left_knee_joint = Demonmasterlqx$box2d_ffi$box2d$$B2World$createJoint(world, Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(left_knee_joint_def));
  const right_knee_joint_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$70$(right_knee_joint_def, thigh_right);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$70$(right_knee_joint_def, shank_right);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(right_knee_joint_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1 - 1.5));
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setCollideConnected$70$(right_knee_joint_def, false);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(right_knee_joint_def, true);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(right_knee_joint_def, -1.3);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(right_knee_joint_def, 1.3);
  const right_knee_joint = Demonmasterlqx$box2d_ffi$box2d$$B2World$createJoint(world, Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(right_knee_joint_def));
  const neck_joint_def = Demonmasterlqx$box2d_ffi$box2d$$b2RevoluteJointDef();
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody1$70$(neck_joint_def, torso);
  Demonmasterlqx$box2d_ffi$box2d$$JointDef$setBody2$70$(neck_joint_def, head);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setAnchorPoint(neck_joint_def, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(position._0, position._1 + 1.5));
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setEnableLimit(neck_joint_def, true);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setLowerAngle(neck_joint_def, -0.5);
  Demonmasterlqx$box2d_ffi$box2d$$B2RevoluteJointDef$setUpperAngle(neck_joint_def, 0.5);
  const neck_joint = Demonmasterlqx$box2d_ffi$box2d$$B2World$createJoint(world, Demonmasterlqx$box2d_ffi$box2d$$JointDefBase$getBase$71$(neck_joint_def));
  return { torso: torso, head: head, thigh_left: thigh_left, thigh_right: thigh_right, shank_left: shank_left, shank_right: shank_right, left_thigh_joint: left_thigh_joint, right_thigh_joint: right_thigh_joint, left_knee_joint: left_knee_joint, right_knee_joint: right_knee_joint, neck_joint: neck_joint };
}
function Yomi017$Game$$create_static_box(world, pos, size) {
  const boxDef = Demonmasterlqx$box2d_ffi$box2d$$b2BoxDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BoxDef$setExtents(boxDef, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(size._0, size._1));
  Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$setDensity$68$(boxDef, 0);
  const bodyDef = Demonmasterlqx$box2d_ffi$box2d$$b2BodyDef();
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$setPosition(bodyDef, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(pos._0, pos._1));
  Demonmasterlqx$box2d_ffi$box2d$$B2BodyDef$addShape(bodyDef, Demonmasterlqx$box2d_ffi$box2d$$ShapeDef$getBase$67$(boxDef));
  const body = Demonmasterlqx$box2d_ffi$box2d$$B2World$createBody(world, bodyDef);
  const entity = Milky2018$selene$system$$Entity$new();
  const sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: Yomi017$Game$$world_to_screen_siz(size._0 * 2, size._1 * 2)._0, _1: Yomi017$Game$$world_to_screen_siz(size._0 * 2, size._1 * 2)._1 }, "black"), 10, undefined);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: Yomi017$Game$$world_to_screen(pos._0, pos._1)._0, _1: Yomi017$Game$$world_to_screen_siz(pos._0, pos._1)._1 });
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$21$(Yomi017$Game$$entity_to_body_map.val, entity, body);
  return body;
}
function Yomi017$Game$$screen_to_world(screen_x, screen_y) {
  const world_x = screen_x / 20;
  const world_y = (1080 - screen_y) / 20;
  return { _0: world_x, _1: world_y };
}
function Yomi017$Game$$screen_to_world_siz(screen_x, screen_y) {
  const world_x = screen_x / 20;
  const world_y = screen_y / 20;
  return { _0: world_x, _1: world_y };
}
function Yomi017$Game$$create_world() {
  const gravity = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, -10);
  const worldAABB = Demonmasterlqx$box2d_ffi$box2d$$b2AABB();
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setminVertex(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(-1000, -1000));
  Demonmasterlqx$box2d_ffi$box2d$$B2AABB$setmaxVertex(worldAABB, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(1000, 1000));
  return Demonmasterlqx$box2d_ffi$box2d$$b2World(worldAABB, gravity, true);
}
function Yomi017$Game$$setup_system(_backend, _dt) {
  const sb = Yomi017$Game$$screen_to_world(950, 1000);
  const si = Yomi017$Game$$screen_to_world_siz(1920, 40);
  moonbitlang$core$array$$Array$push$33$(Yomi017$Game$$platforms.val, Yomi017$Game$$create_static_box(Yomi017$Game$$world.val, { _0: sb._0, _1: sb._1 }, { _0: si._0 / 2, _1: si._1 / 2 }));
  moonbitlang$core$array$$Array$push$32$(Yomi017$Game$$particles.val, Yomi017$Game$$create_particle(Yomi017$Game$$world.val, { _0: sb._0, _1: sb._1 + 10 }));
}
function Yomi017$Game$$maintain_torso_clearance_and_upright(torso, platform, desired_clearance, kp_height, kd_height, kp_angle, kd_angle) {
  const n = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldVector(platform, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 1));
  let nx = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(n);
  let ny = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(n);
  const norm = Math.sqrt(nx * nx + ny * ny);
  nx = nx / norm;
  ny = ny / norm;
  const p0 = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(platform);
  const dx = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(torso)) - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(p0);
  const dy = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(torso)) - Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(p0);
  const current_clearance = dx * nx + dy * ny;
  const pos_error = desired_clearance - current_clearance;
  const vel_error = Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getLinearVelocity(torso)) * nx + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getLinearVelocity(torso)) * ny;
  const force_mag = kp_height * pos_error - kd_height * vel_error;
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(torso, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(nx * force_mag, ny * force_mag), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(torso));
  let angle_err = -Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(torso);
  angle_err = moonbitlang$core$builtin$$Mod$mod$54$(angle_err + 3.14159, 6.28318) - 3.14159;
  const torque = kp_angle * angle_err - kd_angle * Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(torso);
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque(torso, torque);
}
function Yomi017$Game$$Object$op_equal$74$(a, b) {
  return Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(a) === Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(b) && Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(a) === Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(b);
}
function Yomi017$Game$$get_simple_tangent_for_character(p) {
  const contact_list = Demonmasterlqx$box2d_ffi$box2d$$B2World$getContactList(Yomi017$Game$$world.val);
  const _len = contact_list.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const contact = contact_list[_i];
      const a = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$69$(Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape1(contact));
      const b = Demonmasterlqx$box2d_ffi$box2d$$Shape$getBody$69$(Demonmasterlqx$box2d_ffi$box2d$$B2Contact$getShape2(contact));
      if (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(a), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.shank_left)) || (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(a), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.shank_right)) || (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(a), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.thigh_left)) || Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(a), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.thigh_right))))) {
        if (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(b), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$33$(Yomi017$Game$$platforms.val, 0)))) {
          const n = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldVector(moonbitlang$core$array$$Array$at$33$(Yomi017$Game$$platforms.val, 0), Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 1));
          const tangent = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(n), -Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(n));
          const norm = Math.sqrt(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(tangent) * Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(tangent) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(tangent) * Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(tangent));
          return { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(tangent) / norm, _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(tangent) / norm };
        }
      }
      if (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(b), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.shank_left)) || (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(b), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.shank_right)) || (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(b), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.thigh_left)) || Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(b), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(p.thigh_right))))) {
        if (Yomi017$Game$$Object$op_equal$74$(Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(a), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(moonbitlang$core$array$$Array$at$33$(Yomi017$Game$$platforms.val, 0)))) {
          const n = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getWorldVector(moonbitlang$core$array$$Array$at$33$(Yomi017$Game$$platforms.val, 0), Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(0, 1));
          const tangent = Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(n), -Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(n));
          const norm = Math.sqrt(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(tangent) * Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(tangent) + Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(tangent) * Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(tangent));
          return { _0: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(tangent) / norm, _1: Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(tangent) / norm };
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: 0, _1: 0 };
}
function Yomi017$Game$$move_joint_to_angle(joint, target_angle, kp, kd) {
  const bodyA = Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody1$72$(Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint(joint));
  const bodyB = Demonmasterlqx$box2d_ffi$box2d$$Joint$getBody2$72$(Demonmasterlqx$box2d_ffi$box2d$$B2Joint$toRevoluteJoint(joint));
  const current_angle = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(bodyB) - Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(bodyA);
  let error = target_angle - current_angle;
  error = moonbitlang$core$builtin$$Mod$mod$54$(error + 3.14159, 6.28318) - 3.14159;
  const torque = kp * error - kd * (Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(bodyB) - Demonmasterlqx$box2d_ffi$box2d$$B2Body$getAngularVelocity(bodyA));
  Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyTorque(bodyB, torque);
}
function Yomi017$Game$$walk(left_thigh_joint, right_thigh_joint, left_knee_joint, right_knee_joint, body, direction) {
  const _bind$8 = Yomi017$Game$$get_simple_tangent_for_character(moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0));
  const _tx = _bind$8._0;
  const _ty = _bind$8._1;
  if (moonbitlang$core$builtin$$op_notequal$31$({ _0: _tx, _1: _ty }, { _0: 0, _1: 0 })) {
    Demonmasterlqx$box2d_ffi$box2d$$B2Body$applyForce(body, Demonmasterlqx$box2d_ffi$box2d$$b2Vec2(150 * direction * _tx, 150 * direction * _ty), Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(body));
  }
  let left_target = 0;
  let right_target = 0;
  if (Yomi017$Game$$walk_state.val) {
    left_target = 0.5;
    right_target = -0.5;
  } else {
    left_target = -0.5;
    right_target = 0.5;
  }
  Yomi017$Game$$move_joint_to_angle(left_thigh_joint, left_target, 300, 10);
  Yomi017$Game$$move_joint_to_angle(right_thigh_joint, right_target, 300, 10);
  Yomi017$Game$$move_joint_to_angle(left_knee_joint, -1.0995564999999998 * direction, 300, 10);
  Yomi017$Game$$move_joint_to_angle(right_knee_joint, -1.0995564999999998 * direction, 300, 10);
  if (Yomi017$Game$$cooldown.val > 0) {
    Yomi017$Game$$cooldown.val = Yomi017$Game$$cooldown.val - 1 | 0;
    return;
  } else {
    Yomi017$Game$$cooldown.val = 30;
    Yomi017$Game$$walk_state.val = !Yomi017$Game$$walk_state.val;
    return;
  }
}
function Yomi017$Game$$update_system(_backend, _dt) {
  Yomi017$Game$$mouse.val.pos;
  Yomi017$Game$$maintain_torso_clearance_and_upright(moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).torso, moonbitlang$core$array$$Array$at$33$(Yomi017$Game$$platforms.val, 0), 3.5, 300, 20, 200, 10);
  if (Milky2018$selene$system$$is_pressed(0)) {
    Yomi017$Game$$walk(moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).left_thigh_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).right_thigh_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).left_knee_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).right_knee_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).torso, -1);
  }
  if (Milky2018$selene$system$$is_pressed(3)) {
    Yomi017$Game$$walk(moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).left_thigh_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).right_thigh_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).left_knee_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).right_knee_joint, moonbitlang$core$array$$Array$at$32$(Yomi017$Game$$particles.val, 0).torso, 1);
  }
  Demonmasterlqx$box2d_ffi$box2d$$B2World$step(Yomi017$Game$$world.val, 0.016666666666666666, 8);
  const _bind$8 = moonbitlang$core$builtin$$Map$iter2$21$(Yomi017$Game$$entity_to_body_map.val);
  _bind$8((entity, body) => {
    const pos = Demonmasterlqx$box2d_ffi$box2d$$B2Body$getCenterPosition(body);
    Demonmasterlqx$box2d_ffi$box2d$$B2Body$getRotation(body);
    const t = Yomi017$Game$$world_to_screen(Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getX(pos), Demonmasterlqx$box2d_ffi$box2d$$B2Vec2$getY(pos));
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: t._0, _1: t._1 });
    return 1;
  });
}
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_zoom(Milky2018$selene$system$$App$with_image_smooth(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new({ self: Milky2018$selene$45$canvas$$CanvasBackend$new(), method_0: Milky2018$selene$system$$Backend$build$66$, method_1: Milky2018$selene$system$$Backend$draw_picture$66$, method_2: Milky2018$selene$system$$Backend$draw_sprite$66$, method_3: Milky2018$selene$system$$Backend$register_key_events$66$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$66$, method_5: Milky2018$selene$system$$Backend$lock_mouse$66$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$66$, method_7: Milky2018$selene$system$$Backend$draw_text$66$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$66$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$66$, method_10: Milky2018$selene$system$$Backend$play_audio$66$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$66$, method_12: Milky2018$selene$system$$Backend$get_zoom$66$, method_13: Milky2018$selene$system$$Backend$get_debug_info$66$, method_14: Milky2018$selene$system$$Backend$preload_img$66$, method_15: Milky2018$selene$system$$Backend$preload_audio$66$, method_16: Milky2018$selene$system$$Backend$set_time_scale$66$ }), 1920), 1080), false), 1), 60), Milky2018$selene$plugins$$default_plugin), Yomi017$Game$$setup_system, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), Yomi017$Game$$update_system, undefined, undefined));
})();
