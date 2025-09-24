const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
const $_4503599627370496L = { hi: -1048576, lo: 0 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
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
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
function Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError.prototype.$tag = 0;
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
const $64$moonbitlang$47$core$47$json$46$JsonPath$Root = { $tag: 0 };
function $64$moonbitlang$47$core$47$json$46$JsonPath$Key(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$JsonPath$Key.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$json$46$JsonPath$Index(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$JsonPath$Index.prototype.$tag = 2;
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const $64$moonbitlang$47$core$47$list$46$List$Empty$10$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$list$46$List$More$10$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$10$.prototype.$tag = 1;
const rami3l$js$45$ffi$js$$Value$undefined = () => undefined;
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
const Option$None$11$ = { $tag: 0 };
function Option$Some$11$(param0) {
  this._0 = param0;
}
Option$Some$11$.prototype.$tag = 1;
const Option$None$12$ = { $tag: 0 };
function Option$Some$12$(param0) {
  this._0 = param0;
}
Option$Some$12$.prototype.$tag = 1;
const Option$None$13$ = { $tag: 0 };
function Option$Some$13$(param0) {
  this._0 = param0;
}
Option$Some$13$.prototype.$tag = 1;
const Option$None$14$ = { $tag: 0 };
function Option$Some$14$(param0) {
  this._0 = param0;
}
Option$Some$14$.prototype.$tag = 1;
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
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style = (x,value) => x.fillStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern = (self,image,repetition) => self.createPattern(image,repetition);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect = (self,x,y,w,h) => self.clearRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect = (self,x,y,w,h) => self.fillRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner = (self,text,x,y,maxWidth) => self.fillText(text,x,y,maxWidth);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size = (self,image,sx,sy,sw,sh,dx,dy,dw,dh) => self.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font = (self,value) => self.font = value;
const Yoorkin$rabbit$45$tea$dom$$document = () => document;
const Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id = (doc,id) => doc.getElementById(id);
const Milky2018$selene$backend$$set_viewport_height = (x, y) => { x.height = y; };
const Milky2018$selene$backend$$set_viewport_width = (x, y) => { x.width = y; };
const Milky2018$selene$backend$$set_image_smoothing_enabled = (ctx, value) => ctx.imageSmoothingEnabled = value;;
const Option$None$15$ = { $tag: 0 };
function Option$Some$15$(param0) {
  this._0 = param0;
}
Option$Some$15$.prototype.$tag = 1;
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
const Milky2018$selene$backend$$Audio$new = (path) => new Audio(path);
const Milky2018$selene$backend$$Audio$play = (self) => self.play();
const Milky2018$selene$backend$$Audio$set_volume = (self, volume) => self.volume = volume;
const Milky2018$selene$backend$$Audio$set_loop = (self, loop_) => self.loop = loop_;
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
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$16$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$16$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$16$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$16$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$16$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$16$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$16$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$16$.prototype.$tag = 4;
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$17$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$17$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$17$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$17$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$17$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$17$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$17$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$17$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$17$.prototype.$tag = 4;
const Option$None$18$ = { $tag: 0 };
function Option$Some$18$(param0) {
  this._0 = param0;
}
Option$Some$18$.prototype.$tag = 1;
function Result$Err$19$(param0) {
  this._0 = param0;
}
Result$Err$19$.prototype.$tag = 0;
function Result$Ok$19$(param0) {
  this._0 = param0;
}
Result$Ok$19$.prototype.$tag = 1;
const Option$None$20$ = { $tag: 0 };
function Option$Some$20$(param0) {
  this._0 = param0;
}
Option$Some$20$.prototype.$tag = 1;
function Result$Err$21$(param0) {
  this._0 = param0;
}
Result$Err$21$.prototype.$tag = 0;
function Result$Ok$21$(param0) {
  this._0 = param0;
}
Result$Ok$21$.prototype.$tag = 1;
function Result$Err$22$(param0) {
  this._0 = param0;
}
Result$Err$22$.prototype.$tag = 0;
function Result$Ok$22$(param0) {
  this._0 = param0;
}
Result$Ok$22$.prototype.$tag = 1;
function $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect.prototype.$tag = 0;
const Milky2018$selene$inputs$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$inputs$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$collision$$collision_layer_generator = { val: 0 };
const Milky2018$selene$inputs$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$backend$$window = Yoorkin$rabbit$45$tea$dom$$window();
const Milky2018$selene$backend$$canvas_backend = Milky2018$selene$backend$$CanvasBackend$new();
const Milky2018$selene$position$$positions = moonbitlang$core$builtin$$Map$new$46$inner$1$(8);
const _bind = { _0: 0, _1: 0 };
const _bind$2 = Option$None$0$;
const _bind$3 = Option$None$0$;
const _bind$4 = Option$None$0$;
const _bind$5 = Option$None$0$;
const _bind$6 = undefined;
const _bind$7 = { _0: 0, _1: 0 };
const Milky2018$selene$camera$$camera = { position: _bind, limit_top: _bind$4, limit_bottom: _bind$2, limit_left: _bind$3, limit_right: _bind$5, attached_entity: _bind$6, offset: _bind$7, follow_x: true, follow_y: true };
const Milky2018$selene$collision$$shapes = moonbitlang$core$builtin$$Map$new$46$inner$2$(8);
const Milky2018$selene$collision$$pickables = moonbitlang$core$builtin$$Map$new$46$inner$3$(8);
const Milky2018$selene$system$$all_entities = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$ui$$uis = moonbitlang$core$builtin$$Map$new$46$inner$5$(8);
const Milky2018$selene$collision$$quadtree_root = moonbitlang$core$ref$$Ref$new$6$(Milky2018$selene$collision$$QuadTree$new({ _0: 0, _1: 0 }, { _0: 0, _1: 0 }, 0));
const Milky2018$selene$collision$$real_velocities = moonbitlang$core$builtin$$Map$new$46$inner$7$(8);
const Milky2018$selene$collision$$collision_infos = moonbitlang$core$builtin$$Map$new$46$inner$8$(8);
const Milky2018$selene$collision$$colliders = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const Milky2018$selene$collision$$collision_layers = moonbitlang$core$builtin$$Map$new$46$inner$10$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$7$(8);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$11$(0);
const Milky2018$selene$collision$$areas = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const Milky2018$selene$inputs$$last_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$inputs$$all_codes = moonbitlang$core$set$$Set$from_array$0$([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);
const Milky2018$selene$inputs$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$inputs$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$backend$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$13$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
const Milky2018$selene$system$$timers = moonbitlang$core$array$$Array$new$46$inner$15$(0);
const username$meow_knight$$terrain_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const Milky2018$selene$sprite$$animation_generator = moonbitlang$core$ref$$Ref$new$16$(0);
const moonbitlang$core$double$$neg_infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370496L);
const moonbitlang$core$double$$infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405312L);
const _p = 16;
const _p$2 = undefined;
const _tmp = { _0: "tileSize", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p, _p$2) };
const _p$3 = 13;
const _p$4 = undefined;
const _tmp$2 = { _0: "mapWidth", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3, _p$4) };
const _p$5 = 6;
const _p$6 = undefined;
const _tmp$3 = { _0: "mapHeight", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$5, _p$6) };
const _p$7 = "Enemy";
const _tmp$4 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$7) };
const _p$8 = "8";
const _tmp$5 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$8) };
const _p$9 = 7;
const _p$10 = undefined;
const _tmp$6 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$9, _p$10) };
const _p$11 = 0;
const _p$12 = undefined;
const _p$13 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$5, _tmp$6, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$11, _p$12) }]);
const _tmp$7 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$13);
const _p$14 = "9";
const _tmp$8 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$14) };
const _p$15 = 8;
const _p$16 = undefined;
const _tmp$9 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$15, _p$16) };
const _p$17 = 0;
const _p$18 = undefined;
const _p$19 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$8, _tmp$9, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$17, _p$18) }]);
const _tmp$10 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$19);
const _p$20 = "10";
const _tmp$11 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$20) };
const _p$21 = 9;
const _p$22 = undefined;
const _tmp$12 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$21, _p$22) };
const _p$23 = 0;
const _p$24 = undefined;
const _p$25 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$11, _tmp$12, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$23, _p$24) }]);
const _tmp$13 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$25);
const _p$26 = "11";
const _tmp$14 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$26) };
const _p$27 = 10;
const _p$28 = undefined;
const _tmp$15 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$27, _p$28) };
const _p$29 = 0;
const _p$30 = undefined;
const _p$31 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$14, _tmp$15, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$29, _p$30) }]);
const _tmp$16 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$31);
const _p$32 = "12";
const _tmp$17 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$32) };
const _p$33 = 7;
const _p$34 = undefined;
const _tmp$18 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$33, _p$34) };
const _p$35 = 1;
const _p$36 = undefined;
const _p$37 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$17, _tmp$18, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$35, _p$36) }]);
const _tmp$19 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$37);
const _p$38 = "13";
const _tmp$20 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$38) };
const _p$39 = 8;
const _p$40 = undefined;
const _tmp$21 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$39, _p$40) };
const _p$41 = 1;
const _p$42 = undefined;
const _p$43 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$20, _tmp$21, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$41, _p$42) }]);
const _tmp$22 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$43);
const _p$44 = "14";
const _tmp$23 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$44) };
const _p$45 = 9;
const _p$46 = undefined;
const _tmp$24 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$45, _p$46) };
const _p$47 = 1;
const _p$48 = undefined;
const _p$49 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$23, _tmp$24, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$47, _p$48) }]);
const _tmp$25 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$49);
const _p$50 = "15";
const _tmp$26 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$50) };
const _p$51 = 10;
const _p$52 = undefined;
const _tmp$27 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$51, _p$52) };
const _p$53 = 1;
const _p$54 = undefined;
const _p$55 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$26, _tmp$27, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$53, _p$54) }]);
const _tmp$28 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$55);
const _p$56 = "16";
const _tmp$29 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$56) };
const _p$57 = 7;
const _p$58 = undefined;
const _tmp$30 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$57, _p$58) };
const _p$59 = 2;
const _p$60 = undefined;
const _p$61 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$29, _tmp$30, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$59, _p$60) }]);
const _tmp$31 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$61);
const _p$62 = "17";
const _tmp$32 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$62) };
const _p$63 = 8;
const _p$64 = undefined;
const _tmp$33 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$63, _p$64) };
const _p$65 = 2;
const _p$66 = undefined;
const _p$67 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$32, _tmp$33, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$65, _p$66) }]);
const _tmp$34 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$67);
const _p$68 = "18";
const _tmp$35 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$68) };
const _p$69 = 9;
const _p$70 = undefined;
const _tmp$36 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$69, _p$70) };
const _p$71 = 2;
const _p$72 = undefined;
const _p$73 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$35, _tmp$36, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$71, _p$72) }]);
const _tmp$37 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$73);
const _p$74 = "2";
const _tmp$38 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$74) };
const _p$75 = 10;
const _p$76 = undefined;
const _tmp$39 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$75, _p$76) };
const _p$77 = 2;
const _p$78 = undefined;
const _p$79 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$38, _tmp$39, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$77, _p$78) }]);
const _tmp$40 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$79);
const _p$80 = "2";
const _tmp$41 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$80) };
const _p$81 = 7;
const _p$82 = undefined;
const _tmp$42 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$81, _p$82) };
const _p$83 = 3;
const _p$84 = undefined;
const _p$85 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$41, _tmp$42, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$83, _p$84) }]);
const _tmp$43 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$85);
const _p$86 = "19";
const _tmp$44 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$86) };
const _p$87 = 8;
const _p$88 = undefined;
const _tmp$45 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$87, _p$88) };
const _p$89 = 3;
const _p$90 = undefined;
const _p$91 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$44, _tmp$45, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$89, _p$90) }]);
const _tmp$46 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$91);
const _p$92 = "20";
const _tmp$47 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$92) };
const _p$93 = 9;
const _p$94 = undefined;
const _tmp$48 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$93, _p$94) };
const _p$95 = 3;
const _p$96 = undefined;
const _p$97 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$47, _tmp$48, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$95, _p$96) }]);
const _tmp$49 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$97);
const _p$98 = "2";
const _tmp$50 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$98) };
const _p$99 = 10;
const _p$100 = undefined;
const _tmp$51 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$99, _p$100) };
const _p$101 = 3;
const _p$102 = undefined;
const _p$103 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$50, _tmp$51, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$101, _p$102) }]);
const _p$104 = [_tmp$7, _tmp$10, _tmp$13, _tmp$16, _tmp$19, _tmp$22, _tmp$25, _tmp$28, _tmp$31, _tmp$34, _tmp$37, _tmp$40, _tmp$43, _tmp$46, _tmp$49, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$103)];
const _tmp$52 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$104) };
const _p$105 = false;
const _p$106 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$4, _tmp$52, { _0: "collider", _1: _p$105 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _tmp$53 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$106);
const _p$107 = "Grass";
const _tmp$54 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$107) };
const _p$108 = "0";
const _tmp$55 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$108) };
const _p$109 = 0;
const _p$110 = undefined;
const _tmp$56 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$109, _p$110) };
const _p$111 = 5;
const _p$112 = undefined;
const _p$113 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$55, _tmp$56, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$111, _p$112) }]);
const _tmp$57 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$113);
const _p$114 = "0";
const _tmp$58 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$114) };
const _p$115 = 1;
const _p$116 = undefined;
const _tmp$59 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$115, _p$116) };
const _p$117 = 5;
const _p$118 = undefined;
const _p$119 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$58, _tmp$59, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$117, _p$118) }]);
const _tmp$60 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$119);
const _p$120 = "0";
const _tmp$61 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$120) };
const _p$121 = 2;
const _p$122 = undefined;
const _tmp$62 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$121, _p$122) };
const _p$123 = 5;
const _p$124 = undefined;
const _p$125 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$61, _tmp$62, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$123, _p$124) }]);
const _tmp$63 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$125);
const _p$126 = "0";
const _tmp$64 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$126) };
const _p$127 = 3;
const _p$128 = undefined;
const _tmp$65 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$127, _p$128) };
const _p$129 = 5;
const _p$130 = undefined;
const _p$131 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$64, _tmp$65, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$129, _p$130) }]);
const _tmp$66 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$131);
const _p$132 = "0";
const _tmp$67 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$132) };
const _p$133 = 4;
const _p$134 = undefined;
const _tmp$68 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$133, _p$134) };
const _p$135 = 5;
const _p$136 = undefined;
const _p$137 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$67, _tmp$68, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$135, _p$136) }]);
const _tmp$69 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$137);
const _p$138 = "0";
const _tmp$70 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$138) };
const _p$139 = 5;
const _p$140 = undefined;
const _tmp$71 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$139, _p$140) };
const _p$141 = 5;
const _p$142 = undefined;
const _p$143 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$70, _tmp$71, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$141, _p$142) }]);
const _tmp$72 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$143);
const _p$144 = "0";
const _tmp$73 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$144) };
const _p$145 = 6;
const _p$146 = undefined;
const _tmp$74 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$145, _p$146) };
const _p$147 = 5;
const _p$148 = undefined;
const _p$149 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$73, _tmp$74, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$147, _p$148) }]);
const _tmp$75 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$149);
const _p$150 = "0";
const _tmp$76 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$150) };
const _p$151 = 7;
const _p$152 = undefined;
const _tmp$77 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$151, _p$152) };
const _p$153 = 5;
const _p$154 = undefined;
const _p$155 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$76, _tmp$77, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$153, _p$154) }]);
const _tmp$78 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$155);
const _p$156 = "0";
const _tmp$79 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$156) };
const _p$157 = 8;
const _p$158 = undefined;
const _tmp$80 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$157, _p$158) };
const _p$159 = 5;
const _p$160 = undefined;
const _p$161 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$79, _tmp$80, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$159, _p$160) }]);
const _tmp$81 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$161);
const _p$162 = "0";
const _tmp$82 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$162) };
const _p$163 = 9;
const _p$164 = undefined;
const _tmp$83 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$163, _p$164) };
const _p$165 = 5;
const _p$166 = undefined;
const _p$167 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$82, _tmp$83, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$165, _p$166) }]);
const _tmp$84 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$167);
const _p$168 = "0";
const _tmp$85 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$168) };
const _p$169 = 10;
const _p$170 = undefined;
const _tmp$86 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$169, _p$170) };
const _p$171 = 5;
const _p$172 = undefined;
const _p$173 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$85, _tmp$86, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$171, _p$172) }]);
const _tmp$87 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$173);
const _p$174 = "0";
const _tmp$88 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$174) };
const _p$175 = 11;
const _p$176 = undefined;
const _tmp$89 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$175, _p$176) };
const _p$177 = 5;
const _p$178 = undefined;
const _p$179 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$88, _tmp$89, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$177, _p$178) }]);
const _tmp$90 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$179);
const _p$180 = "0";
const _tmp$91 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$180) };
const _p$181 = 12;
const _p$182 = undefined;
const _tmp$92 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$181, _p$182) };
const _p$183 = 5;
const _p$184 = undefined;
const _p$185 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$91, _tmp$92, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$183, _p$184) }]);
const _tmp$93 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$185);
const _p$186 = "0";
const _tmp$94 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$186) };
const _p$187 = 12;
const _p$188 = undefined;
const _tmp$95 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$187, _p$188) };
const _p$189 = 4;
const _p$190 = undefined;
const _p$191 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$94, _tmp$95, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$189, _p$190) }]);
const _tmp$96 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$191);
const _p$192 = "0";
const _tmp$97 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$192) };
const _p$193 = 11;
const _p$194 = undefined;
const _tmp$98 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$193, _p$194) };
const _p$195 = 4;
const _p$196 = undefined;
const _p$197 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$97, _tmp$98, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$195, _p$196) }]);
const _tmp$99 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$197);
const _p$198 = "0";
const _tmp$100 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$198) };
const _p$199 = 10;
const _p$200 = undefined;
const _tmp$101 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$199, _p$200) };
const _p$201 = 4;
const _p$202 = undefined;
const _p$203 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$100, _tmp$101, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$201, _p$202) }]);
const _tmp$102 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$203);
const _p$204 = "0";
const _tmp$103 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$204) };
const _p$205 = 9;
const _p$206 = undefined;
const _tmp$104 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$205, _p$206) };
const _p$207 = 4;
const _p$208 = undefined;
const _p$209 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$103, _tmp$104, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$207, _p$208) }]);
const _tmp$105 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$209);
const _p$210 = "0";
const _tmp$106 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$210) };
const _p$211 = 0;
const _p$212 = undefined;
const _tmp$107 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$211, _p$212) };
const _p$213 = 4;
const _p$214 = undefined;
const _p$215 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$106, _tmp$107, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$213, _p$214) }]);
const _tmp$108 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$215);
const _p$216 = "0";
const _tmp$109 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$216) };
const _p$217 = 1;
const _p$218 = undefined;
const _tmp$110 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$217, _p$218) };
const _p$219 = 4;
const _p$220 = undefined;
const _p$221 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$109, _tmp$110, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$219, _p$220) }]);
const _tmp$111 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$221);
const _p$222 = "0";
const _tmp$112 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$222) };
const _p$223 = 2;
const _p$224 = undefined;
const _tmp$113 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$223, _p$224) };
const _p$225 = 4;
const _p$226 = undefined;
const _p$227 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$112, _tmp$113, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$225, _p$226) }]);
const _tmp$114 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$227);
const _p$228 = "0";
const _tmp$115 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$228) };
const _p$229 = 3;
const _p$230 = undefined;
const _tmp$116 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$229, _p$230) };
const _p$231 = 4;
const _p$232 = undefined;
const _p$233 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$115, _tmp$116, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$231, _p$232) }]);
const _tmp$117 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$233);
const _p$234 = "0";
const _tmp$118 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$234) };
const _p$235 = 4;
const _p$236 = undefined;
const _tmp$119 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$235, _p$236) };
const _p$237 = 4;
const _p$238 = undefined;
const _p$239 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$118, _tmp$119, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$237, _p$238) }]);
const _tmp$120 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$239);
const _p$240 = "0";
const _tmp$121 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$240) };
const _p$241 = 5;
const _p$242 = undefined;
const _tmp$122 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$241, _p$242) };
const _p$243 = 4;
const _p$244 = undefined;
const _p$245 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$121, _tmp$122, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$243, _p$244) }]);
const _tmp$123 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$245);
const _p$246 = "0";
const _tmp$124 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$246) };
const _p$247 = 6;
const _p$248 = undefined;
const _tmp$125 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$247, _p$248) };
const _p$249 = 4;
const _p$250 = undefined;
const _p$251 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$124, _tmp$125, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$249, _p$250) }]);
const _tmp$126 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$251);
const _p$252 = "0";
const _tmp$127 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$252) };
const _p$253 = 7;
const _p$254 = undefined;
const _tmp$128 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$253, _p$254) };
const _p$255 = 4;
const _p$256 = undefined;
const _p$257 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$127, _tmp$128, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$255, _p$256) }]);
const _tmp$129 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$257);
const _p$258 = "0";
const _tmp$130 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$258) };
const _p$259 = 8;
const _p$260 = undefined;
const _tmp$131 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$259, _p$260) };
const _p$261 = 4;
const _p$262 = undefined;
const _p$263 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$130, _tmp$131, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$261, _p$262) }]);
const _tmp$132 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$263);
const _p$264 = "1";
const _tmp$133 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$264) };
const _p$265 = 0;
const _p$266 = undefined;
const _tmp$134 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$265, _p$266) };
const _p$267 = 3;
const _p$268 = undefined;
const _p$269 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$133, _tmp$134, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$267, _p$268) }]);
const _tmp$135 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$269);
const _p$270 = "1";
const _tmp$136 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$270) };
const _p$271 = 1;
const _p$272 = undefined;
const _tmp$137 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$271, _p$272) };
const _p$273 = 3;
const _p$274 = undefined;
const _p$275 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$136, _tmp$137, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$273, _p$274) }]);
const _tmp$138 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$275);
const _p$276 = "1";
const _tmp$139 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$276) };
const _p$277 = 2;
const _p$278 = undefined;
const _tmp$140 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$277, _p$278) };
const _p$279 = 3;
const _p$280 = undefined;
const _p$281 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$139, _tmp$140, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$279, _p$280) }]);
const _tmp$141 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$281);
const _p$282 = "1";
const _tmp$142 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$282) };
const _p$283 = 3;
const _p$284 = undefined;
const _tmp$143 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$283, _p$284) };
const _p$285 = 3;
const _p$286 = undefined;
const _p$287 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$142, _tmp$143, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$285, _p$286) }]);
const _tmp$144 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$287);
const _p$288 = "1";
const _tmp$145 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$288) };
const _p$289 = 12;
const _p$290 = undefined;
const _tmp$146 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$289, _p$290) };
const _p$291 = 3;
const _p$292 = undefined;
const _p$293 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$145, _tmp$146, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$291, _p$292) }]);
const _tmp$147 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$293);
const _p$294 = "1";
const _tmp$148 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$294) };
const _p$295 = 11;
const _p$296 = undefined;
const _tmp$149 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$295, _p$296) };
const _p$297 = 3;
const _p$298 = undefined;
const _p$299 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$148, _tmp$149, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$297, _p$298) }]);
const _tmp$150 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$299);
const _p$300 = "1";
const _tmp$151 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$300) };
const _p$301 = 10;
const _p$302 = undefined;
const _tmp$152 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$301, _p$302) };
const _p$303 = 3;
const _p$304 = undefined;
const _p$305 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$151, _tmp$152, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$303, _p$304) }]);
const _tmp$153 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$305);
const _p$306 = "1";
const _tmp$154 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$306) };
const _p$307 = 9;
const _p$308 = undefined;
const _tmp$155 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$307, _p$308) };
const _p$309 = 3;
const _p$310 = undefined;
const _p$311 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$154, _tmp$155, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$309, _p$310) }]);
const _tmp$156 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$311);
const _p$312 = "1";
const _tmp$157 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$312) };
const _p$313 = 8;
const _p$314 = undefined;
const _tmp$158 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$313, _p$314) };
const _p$315 = 3;
const _p$316 = undefined;
const _p$317 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$157, _tmp$158, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$315, _p$316) }]);
const _tmp$159 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$317);
const _p$318 = "1";
const _tmp$160 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$318) };
const _p$319 = 7;
const _p$320 = undefined;
const _tmp$161 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$319, _p$320) };
const _p$321 = 3;
const _p$322 = undefined;
const _p$323 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$160, _tmp$161, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$321, _p$322) }]);
const _tmp$162 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$323);
const _p$324 = "1";
const _tmp$163 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$324) };
const _p$325 = 6;
const _p$326 = undefined;
const _tmp$164 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$325, _p$326) };
const _p$327 = 3;
const _p$328 = undefined;
const _p$329 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$163, _tmp$164, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$327, _p$328) }]);
const _tmp$165 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$329);
const _p$330 = "1";
const _tmp$166 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$330) };
const _p$331 = 5;
const _p$332 = undefined;
const _tmp$167 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$331, _p$332) };
const _p$333 = 3;
const _p$334 = undefined;
const _p$335 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$166, _tmp$167, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$333, _p$334) }]);
const _tmp$168 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$335);
const _p$336 = "1";
const _tmp$169 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$336) };
const _p$337 = 4;
const _p$338 = undefined;
const _tmp$170 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$337, _p$338) };
const _p$339 = 3;
const _p$340 = undefined;
const _p$341 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$169, _tmp$170, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$339, _p$340) }]);
const _tmp$171 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$341);
const _p$342 = "2";
const _tmp$172 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$342) };
const _p$343 = 1;
const _p$344 = undefined;
const _tmp$173 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$343, _p$344) };
const _p$345 = 0;
const _p$346 = undefined;
const _p$347 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$172, _tmp$173, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$345, _p$346) }]);
const _p$348 = [_tmp$57, _tmp$60, _tmp$63, _tmp$66, _tmp$69, _tmp$72, _tmp$75, _tmp$78, _tmp$81, _tmp$84, _tmp$87, _tmp$90, _tmp$93, _tmp$96, _tmp$99, _tmp$102, _tmp$105, _tmp$108, _tmp$111, _tmp$114, _tmp$117, _tmp$120, _tmp$123, _tmp$126, _tmp$129, _tmp$132, _tmp$135, _tmp$138, _tmp$141, _tmp$144, _tmp$147, _tmp$150, _tmp$153, _tmp$156, _tmp$159, _tmp$162, _tmp$165, _tmp$168, _tmp$171, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$347)];
const _tmp$174 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$348) };
const _p$349 = false;
const _p$350 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$54, _tmp$174, { _0: "collider", _1: _p$349 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _tmp$175 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$350);
const _p$351 = "Role";
const _tmp$176 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$351) };
const _p$352 = "2";
const _tmp$177 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$352) };
const _p$353 = 1;
const _p$354 = undefined;
const _tmp$178 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$353, _p$354) };
const _p$355 = 0;
const _p$356 = undefined;
const _p$357 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$177, _tmp$178, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$355, _p$356) }]);
const _tmp$179 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$357);
const _p$358 = "3";
const _tmp$180 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$358) };
const _p$359 = 2;
const _p$360 = undefined;
const _tmp$181 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$359, _p$360) };
const _p$361 = 0;
const _p$362 = undefined;
const _p$363 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$180, _tmp$181, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$361, _p$362) }]);
const _tmp$182 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$363);
const _p$364 = "4";
const _tmp$183 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$364) };
const _p$365 = 1;
const _p$366 = undefined;
const _tmp$184 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$365, _p$366) };
const _p$367 = 1;
const _p$368 = undefined;
const _p$369 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$183, _tmp$184, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$367, _p$368) }]);
const _tmp$185 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$369);
const _p$370 = "5";
const _tmp$186 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$370) };
const _p$371 = 2;
const _p$372 = undefined;
const _tmp$187 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$371, _p$372) };
const _p$373 = 1;
const _p$374 = undefined;
const _p$375 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$186, _tmp$187, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$373, _p$374) }]);
const _tmp$188 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$375);
const _p$376 = "6";
const _tmp$189 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$376) };
const _p$377 = 1;
const _p$378 = undefined;
const _tmp$190 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$377, _p$378) };
const _p$379 = 2;
const _p$380 = undefined;
const _p$381 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$189, _tmp$190, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$379, _p$380) }]);
const _tmp$191 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$381);
const _p$382 = "7";
const _tmp$192 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$382) };
const _p$383 = 2;
const _p$384 = undefined;
const _tmp$193 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$383, _p$384) };
const _p$385 = 2;
const _p$386 = undefined;
const _p$387 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$192, _tmp$193, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$385, _p$386) }]);
const _tmp$194 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$387);
const _p$388 = "16";
const _tmp$195 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$388) };
const _p$389 = 7;
const _p$390 = undefined;
const _tmp$196 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$389, _p$390) };
const _p$391 = 2;
const _p$392 = undefined;
const _p$393 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$195, _tmp$196, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$391, _p$392) }]);
const _tmp$197 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$393);
const _p$394 = "2";
const _tmp$198 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$394) };
const _p$395 = 10;
const _p$396 = undefined;
const _tmp$199 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$395, _p$396) };
const _p$397 = 2;
const _p$398 = undefined;
const _p$399 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$198, _tmp$199, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$397, _p$398) }]);
const _tmp$200 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$399);
const _p$400 = "2";
const _tmp$201 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$400) };
const _p$401 = 7;
const _p$402 = undefined;
const _tmp$202 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$401, _p$402) };
const _p$403 = 3;
const _p$404 = undefined;
const _p$405 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$201, _tmp$202, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$403, _p$404) }]);
const _tmp$203 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$405);
const _p$406 = "19";
const _tmp$204 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$406) };
const _p$407 = 8;
const _p$408 = undefined;
const _tmp$205 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$407, _p$408) };
const _p$409 = 3;
const _p$410 = undefined;
const _p$411 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$204, _tmp$205, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$409, _p$410) }]);
const _tmp$206 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$411);
const _p$412 = "20";
const _tmp$207 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$412) };
const _p$413 = 9;
const _p$414 = undefined;
const _tmp$208 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$413, _p$414) };
const _p$415 = 3;
const _p$416 = undefined;
const _p$417 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$207, _tmp$208, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$415, _p$416) }]);
const _tmp$209 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$417);
const _p$418 = "2";
const _tmp$210 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$418) };
const _p$419 = 10;
const _p$420 = undefined;
const _tmp$211 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$419, _p$420) };
const _p$421 = 3;
const _p$422 = undefined;
const _p$423 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$210, _tmp$211, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$421, _p$422) }]);
const _p$424 = [_tmp$179, _tmp$182, _tmp$185, _tmp$188, _tmp$191, _tmp$194, _tmp$197, _tmp$200, _tmp$203, _tmp$206, _tmp$209, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$423)];
const _tmp$212 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$424) };
const _p$425 = false;
const _p$426 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp$176, _tmp$212, { _0: "collider", _1: _p$425 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _p$427 = [_tmp$53, _tmp$175, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$426)];
const _p$428 = moonbitlang$core$builtin$$Map$from_array$17$([_tmp, _tmp$2, _tmp$3, { _0: "layers", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$427) }]);
const username$meow_knight$$tilemap = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$428);
const username$meow_knight$$player_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const username$meow_knight$$enemy_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const username$meow_knight$$player_idle_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("/asserts/Colour1/NoOutline/120x80_PNGSheets/_Idle.png", 10, 120, 80, undefined, Option$None$0$), true, new Option$Some$0$(12), undefined);
const _bind$8 = Milky2018$selene$system$$Entity$new();
const _bind$9 = Milky2018$selene$sprite$$Text$new$46$inner("", "white", "24px ThaleahFat");
const _bind$10 = Milky2018$selene$sprite$$Text$new$46$inner("Score: 0", "#ffffff", "20x ThaleahFat");
const _bind$11 = Milky2018$selene$sprite$$Text$new$46$inner("Health: 3", "#ffffff", "20px ThaleahFat");
const username$meow_knight$$game_state = { player: _bind$8, player_state: 1, direction: 1, score: 0, result_box: _bind$9, score_box: _bind$10, health_box: _bind$11, volume_on: true, health: 3, hurt_timer: 0 };
const username$meow_knight$$player_attack_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("/asserts/Colour2/NoOutline/120x80_PNGSheets/_Attack.png", 4, 120, 80, undefined, Option$None$0$), false, new Option$Some$0$(12), undefined);
const username$meow_knight$$player_hit_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("/asserts/Colour2/NoOutline/120x80_PNGSheets/_Hit.png", 1, 120, 80, undefined, Option$None$0$), true, new Option$Some$0$(12), undefined);
const username$meow_knight$$player_fall_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("/asserts/Colour1/NoOutline/120x80_PNGSheets/_Fall.png", 3, 120, 80, undefined, Option$None$0$), true, new Option$Some$0$(12), undefined);
const username$meow_knight$$player_jump_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("/asserts/Colour2/NoOutline/120x80_PNGSheets/_Jump.png", 3, 120, 80, undefined, Option$None$0$), false, new Option$Some$0$(12), undefined);
const Milky2018$selene$backend$$audio_cache = moonbitlang$core$builtin$$Map$new$46$inner$18$(8);
const username$meow_knight$$player_run_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("/asserts/Colour2/NoOutline/120x80_PNGSheets/_Fall.png", 10, 120, 80, undefined, Option$None$0$), true, new Option$Some$0$(12), undefined);
function moonbitlang$core$abort$$abort$19$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$20$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$16$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$21$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$22$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$23$(msg) {
  return $panic();
}
function moonbitlang$core$option$$Option$map_or$24$(self, default_, f) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _x = _Some;
    return f(_x);
  }
}
function moonbitlang$core$option$$Option$unwrap_or$25$(self, default_) {
  if (self.$tag === 0) {
    return default_;
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap_or_default$26$(self) {
  if (self.$tag === 0) {
    return [];
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$ref$$Ref$new$6$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$27$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$16$(x) {
  return { val: x };
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$28$(self, ch) {
  const _bind$12 = self;
  _bind$12.val = `${_bind$12.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$4$(x, y) {
  return !(x === y);
}
function moonbitlang$core$array$$Array$at$29$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$30$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$31$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$28$(self, str) {
  const _bind$12 = self;
  _bind$12.val = `${_bind$12.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$0$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$0$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$31$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$31$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$32$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$4$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$33$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$0$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$34$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$31$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, num2);
  }
  const _p$429 = num % radix | 0;
  const _tmp$213 = _p$429 < 0 ? 0 - _p$429 | 0 : _p$429;
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp$213);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp$213));
}
function moonbitlang$core$int$$Int$output$46$inner(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: radix, _1: logger };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$16$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$28$, method_1: moonbitlang$core$builtin$$Logger$write_substring$28$, method_2: moonbitlang$core$builtin$$Logger$write_char$28$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$16$(self) {
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
function moonbitlang$core$builtin$$Logger$write_substring$28$(self, str, start, len) {
  const _bind$12 = self;
  _bind$12.val = `${_bind$12.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$option$$Option$unwrap$35$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$36$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$37$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$38$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$26$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$8$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$10$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$14$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$17$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$18$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$13$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$17$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$7$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$14$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$1$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$2$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$10$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$9$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$17$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$18$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$8$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$13$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$7$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$14$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$1$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$2$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$10$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$9$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$17$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$17$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$17$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$18$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$8$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$13$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$7$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$7$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$14$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$14$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$1$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$1$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$2$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$2$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$10$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$10$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$9$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$9$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$17$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$17$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$17$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$17$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$18$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$18$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$8$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$8$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$13$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$13$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$7$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$7$(self, _key, _value, _hash);
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$14$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$14$(self, _key, _value, _hash);
      _tmp$213 = _next;
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
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
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
      _tmp$213 = _next;
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
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
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
      _tmp$213 = _next;
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
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
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
      _tmp$213 = _next;
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
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
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
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$17$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$17$(self, _key, _value, _hash);
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$18$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$18$(self, _key, _value, _hash);
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$8$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$8$(self, _key, _value, _hash);
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$13$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$13$(self, _key, _value, _hash);
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$7$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$builtin$$Map$set$14$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$builtin$$Map$set$17$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$17$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$set$18$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$set$8$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$builtin$$Map$set$13$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$from_array$17$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$46$inner$17$(arr.length);
  const _p$429 = arr.length;
  let _tmp$213 = 0;
  while (true) {
    const _p$430 = _tmp$213;
    if (_p$430 < _p$429) {
      const _p$431 = arr[_p$430];
      moonbitlang$core$builtin$$Map$set$17$(m, _p$431._0, _p$431._1);
      _tmp$213 = _p$430 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$7$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$9$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$5$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return -1;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$12$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$10$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$14$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$8$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return Option$None$1$;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return new Option$Some$1$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$1$;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$18$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return Option$None$2$;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$2$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$2$;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$13$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return Option$None$3$;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$3$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$3$;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$17$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$39$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$40$(self, value, start, end) {
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
function moonbitlang$core$builtin$$Map$clear$8$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$39$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter2$7$(self) {
  const _p$429 = (yield_) => {
    let _tmp$213 = self.head;
    while (true) {
      const _param = _tmp$213;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp$213 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$429;
}
function moonbitlang$core$builtin$$Map$iter2$2$(self) {
  const _p$429 = (yield_) => {
    let _tmp$213 = self.head;
    while (true) {
      const _param = _tmp$213;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp$213 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$429;
}
function moonbitlang$core$builtin$$Map$iter2$5$(self) {
  const _p$429 = (yield_) => {
    let _tmp$213 = self.head;
    while (true) {
      const _param = _tmp$213;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp$213 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$429;
}
function moonbitlang$core$builtin$$Map$to_array$14$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp$213 = self.head;
  while (true) {
    const _param = _tmp$213;
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
      _tmp$213 = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$array$$Array$push$19$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$41$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$42$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$43$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$44$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$22$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$45$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$29$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$30$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$46$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p$429 = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$430 = 17;
  self.acc = Math.imul(_p$429 << _p$430 | (_p$429 >>> (32 - _p$430 | 0) | 0), 668265263) | 0;
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
  let _tmp$213 = 0;
  while (true) {
    const i = _tmp$213;
    if (i < _end875) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$31$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$47$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$31$(input) {
  console.log(input);
}
function moonbitlang$core$array$$ArrayView$at$19$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp$213 = self.buf;
    const _tmp$214 = self.start + index | 0;
    $bound_check(_tmp$213, _tmp$214);
    return _tmp$213[_tmp$214];
  } else {
    return moonbitlang$core$abort$$abort$19$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$16$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$16$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$at$22$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp$213 = self.buf;
    const _tmp$214 = self.start + index | 0;
    $bound_check(_tmp$213, _tmp$214);
    return _tmp$213[_tmp$214];
  } else {
    return moonbitlang$core$abort$$abort$22$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$16$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$16$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$swap$19$(self, i, j) {
  if (i >= 0 && (i < self.len && (j >= 0 && j < self.len))) {
    const _tmp$213 = self.buf;
    const _tmp$214 = self.start + i | 0;
    $bound_check(_tmp$213, _tmp$214);
    const temp = _tmp$213[_tmp$214];
    const _tmp$215 = self.buf;
    const _tmp$216 = self.start + i | 0;
    const _tmp$217 = self.buf;
    const _tmp$218 = self.start + j | 0;
    $bound_check(_tmp$217, _tmp$218);
    $bound_check(_tmp$215, _tmp$216);
    _tmp$215[_tmp$216] = _tmp$217[_tmp$218];
    const _tmp$219 = self.buf;
    const _tmp$220 = self.start + j | 0;
    $bound_check(_tmp$219, _tmp$220);
    _tmp$219[_tmp$220] = temp;
    return;
  } else {
    moonbitlang$core$abort$$abort$21$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$16$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$16$(i)}, ${moonbitlang$core$builtin$$Show$to_string$16$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$swap$22$(self, i, j) {
  if (i >= 0 && (i < self.len && (j >= 0 && j < self.len))) {
    const _tmp$213 = self.buf;
    const _tmp$214 = self.start + i | 0;
    $bound_check(_tmp$213, _tmp$214);
    const temp = _tmp$213[_tmp$214];
    const _tmp$215 = self.buf;
    const _tmp$216 = self.start + i | 0;
    const _tmp$217 = self.buf;
    const _tmp$218 = self.start + j | 0;
    $bound_check(_tmp$217, _tmp$218);
    $bound_check(_tmp$215, _tmp$216);
    _tmp$215[_tmp$216] = _tmp$217[_tmp$218];
    const _tmp$219 = self.buf;
    const _tmp$220 = self.start + j | 0;
    $bound_check(_tmp$219, _tmp$220);
    _tmp$219[_tmp$220] = temp;
    return;
  } else {
    moonbitlang$core$abort$$abort$21$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$16$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$16$(i)}, ${moonbitlang$core$builtin$$Show$to_string$16$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$19$(self, start, end) {
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$20$("View index out of bounds");
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$22$(self, start, end) {
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$23$("View index out of bounds");
}
function moonbitlang$core$array$$Array$new$46$inner$11$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$15$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$46$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_pop$11$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$pop$11$(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$11$(self);
    return v;
  }
}
function moonbitlang$core$array$$Array$get$45$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function moonbitlang$core$array$$Array$contains$48$(self, value) {
  const _len = self.length;
  let _tmp$213 = 0;
  while (true) {
    const _i = _tmp$213;
    if (_i < _len) {
      const v = self[_i];
      if (v === value) {
        return true;
      }
      _tmp$213 = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$json$$decode_error$16$(path, msg) {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$21$(path, msg) {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$49$(path, msg) {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$31$(path, msg) {
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$50$(path, msg) {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$51$(path, msg) {
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$from_json$46$inner$52$(json, path) {
  return moonbitlang$core$json$$FromJson$from_json$52$(json, path);
}
function moonbitlang$core$json$$from_json$52$(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = $64$moonbitlang$47$core$47$json$46$JsonPath$Root;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return moonbitlang$core$json$$from_json$46$inner$52$(json, path);
}
function moonbitlang$core$json$$FromJson$from_json$51$(json, path) {
  switch (json.$tag) {
    case 1: {
      return new Result$Ok$9$(true);
    }
    case 2: {
      return new Result$Ok$9$(false);
    }
    default: {
      return moonbitlang$core$json$$decode_error$51$(path, "Bool::from_json: expected boolean");
    }
  }
}
function moonbitlang$core$json$$FromJson$from_json$16$(json, path) {
  _L: {
    if (json.$tag === 3) {
      const _Number = json;
      const _n = _Number._0;
      if (_n !== moonbitlang$core$double$$infinity) {
        if (_n !== moonbitlang$core$double$$neg_infinity) {
          if (_n > 2147483647 || _n < -2147483648) {
            const _bind$12 = moonbitlang$core$json$$decode_error$21$(path, "Int::from_json: overflow");
            if (_bind$12.$tag === 1) {
              const _ok = _bind$12;
              _ok._0;
            } else {
              return _bind$12;
            }
          }
          return new Result$Ok$6$(moonbitlang$core$double$$Double$to_int(_n));
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
  return moonbitlang$core$json$$decode_error$16$(path, "Int::from_json: expected number");
}
function moonbitlang$core$json$$FromJson$from_json$31$(json, path) {
  if (json.$tag === 4) {
    const _String = json;
    const _a = _String._0;
    return new Result$Ok$8$(_a);
  } else {
    return moonbitlang$core$json$$decode_error$31$(path, "String::from_json: expected string");
  }
}
function moonbitlang$core$json$$FromJson$from_json$53$(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind$12 = new $64$moonbitlang$47$core$47$json$46$JsonPath$Index(path, 0);
    if (_bind$12.$tag === 2) {
      const _Index = _bind$12;
      let _p$429;
      _L: {
        let _p$430;
        _L$2: {
          if (_a.length === 0) {
            const _tmp$213 = [];
            _p$429 = _tmp$213;
            break _L;
          }
          const _p$431 = new Array(_a.length);
          const _p$432 = _a.length;
          let _tmp$213 = 0;
          while (true) {
            const _p$433 = _tmp$213;
            if (_p$433 < _p$432) {
              const _p$434 = _a[_p$433];
              _Index._1 = _p$433;
              const _bind$13 = moonbitlang$core$json$$FromJson$from_json$45$(_p$434, _Index);
              let _tmp$214;
              if (_bind$13.$tag === 1) {
                const _ok = _bind$13;
                _tmp$214 = _ok._0;
              } else {
                const _err = _bind$13;
                const _tmp$215 = _err._0;
                _p$430 = _tmp$215;
                break _L$2;
              }
              _p$431[_p$433] = _tmp$214;
              _tmp$213 = _p$433 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return new Result$Ok$4$(_p$431);
        }
        return new Result$Err$4$(_p$430);
      }
      return new Result$Ok$4$(_p$429);
    } else {
      return new Result$Ok$4$($panic());
    }
  } else {
    return moonbitlang$core$json$$decode_error$49$(path, "Array::from_json: expected array");
  }
}
function moonbitlang$core$json$$FromJson$from_json$54$(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind$12 = new $64$moonbitlang$47$core$47$json$46$JsonPath$Index(path, 0);
    if (_bind$12.$tag === 2) {
      const _Index = _bind$12;
      let _p$429;
      _L: {
        let _p$430;
        _L$2: {
          if (_a.length === 0) {
            const _tmp$213 = [];
            _p$429 = _tmp$213;
            break _L;
          }
          const _p$431 = new Array(_a.length);
          const _p$432 = _a.length;
          let _tmp$213 = 0;
          while (true) {
            const _p$433 = _tmp$213;
            if (_p$433 < _p$432) {
              const _p$434 = _a[_p$433];
              _Index._1 = _p$433;
              const _bind$13 = moonbitlang$core$json$$FromJson$from_json$29$(_p$434, _Index);
              let _tmp$214;
              if (_bind$13.$tag === 1) {
                const _ok = _bind$13;
                _tmp$214 = _ok._0;
              } else {
                const _err = _bind$13;
                const _tmp$215 = _err._0;
                _p$430 = _tmp$215;
                break _L$2;
              }
              _p$431[_p$433] = _tmp$214;
              _tmp$213 = _p$433 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return new Result$Ok$5$(_p$431);
        }
        return new Result$Err$5$(_p$430);
      }
      return new Result$Ok$5$(_p$429);
    } else {
      return new Result$Ok$5$($panic());
    }
  } else {
    return moonbitlang$core$json$$decode_error$50$(path, "Array::from_json: expected array");
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
function moonbitlang$core$array$$bubble_sort_by$19$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp$213 = 1;
  while (true) {
    const i = _tmp$213;
    if (i < _end1071) {
      let _tmp$214 = i;
      while (true) {
        const j = _tmp$214;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$19$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$19$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$19$(arr, j, j - 1 | 0);
          _tmp$214 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$bubble_sort_by$22$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp$213 = 1;
  while (true) {
    const i = _tmp$213;
    if (i < _end1071) {
      let _tmp$214 = i;
      while (true) {
        const j = _tmp$214;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$22$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$22$(arr, j, j - 1 | 0);
          _tmp$214 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$rev_inplace$19$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp$213 = 0;
  while (true) {
    const i = _tmp$213;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$19$(self, i, j);
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$rev_inplace$22$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp$213 = 0;
  while (true) {
    const i = _tmp$213;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$22$(self, i, j);
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1233(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$19$(arr, a), moonbitlang$core$array$$ArrayView$at$19$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$19$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1234(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1233(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1233(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1233(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$19$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1234(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1234(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1234(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1234(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$19$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1253(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, a), moonbitlang$core$array$$ArrayView$at$22$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$22$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1254(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1253(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1253(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1253(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$22$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1254(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1254(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1254(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1254(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$22$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$sift_down_by$19$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$19$(arr, child), moonbitlang$core$array$$ArrayView$at$19$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$19$(arr, index$2), moonbitlang$core$array$$ArrayView$at$19$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$19$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$sift_down_by$22$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, child), moonbitlang$core$array$$ArrayView$at$22$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, index$2), moonbitlang$core$array$$ArrayView$at$22$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$22$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$19$(arr, cmp) {
  const len = arr.len;
  let _tmp$213 = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp$213;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$19$(arr, i, cmp);
      _tmp$213 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$214 = len - 1 | 0;
  while (true) {
    const i = _tmp$214;
    if (i > 0) {
      moonbitlang$core$array$$ArrayView$swap$19$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$19$(moonbitlang$core$array$$ArrayView$sub$46$inner$19$(arr, 0, i), 0, cmp);
      _tmp$214 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$22$(arr, cmp) {
  const len = arr.len;
  let _tmp$213 = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp$213;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$22$(arr, i, cmp);
      _tmp$213 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$214 = len - 1 | 0;
  while (true) {
    const i = _tmp$214;
    if (i > 0) {
      moonbitlang$core$array$$ArrayView$swap$22$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$22$(moonbitlang$core$array$$ArrayView$sub$46$inner$22$(arr, 0, i), 0, cmp);
      _tmp$214 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$partition_by$19$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$19$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$19$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp$213 = 0;
  while (true) {
    const j = _tmp$213;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$19$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$19$(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp$213 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$ArrayView$swap$19$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$partition_by$22$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$22$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$22$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp$213 = 0;
  while (true) {
    const j = _tmp$213;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$22$(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp$213 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$ArrayView$swap$22$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$try_bubble_sort_by$19$(arr, cmp) {
  let tries = 0;
  const _end1081 = arr.len;
  let _tmp$213 = 1;
  while (true) {
    const i = _tmp$213;
    if (i < _end1081) {
      let sorted = true;
      let _tmp$214 = i;
      while (true) {
        const j = _tmp$214;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$19$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$19$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$19$(arr, j, j - 1 | 0);
          _tmp$214 = j - 1 | 0;
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
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$try_bubble_sort_by$22$(arr, cmp) {
  let tries = 0;
  const _end1081 = arr.len;
  let _tmp$213 = 1;
  while (true) {
    const i = _tmp$213;
    if (i < _end1081) {
      let sorted = true;
      let _tmp$214 = i;
      while (true) {
        const j = _tmp$214;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$22$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$22$(arr, j, j - 1 | 0);
          _tmp$214 = j - 1 | 0;
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
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$quick_sort_by$19$(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p$429 = arr$2;
    const len = _p$429.len;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$bubble_sort_by$19$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$19$(arr$2, cmp);
      return undefined;
    }
    const _bind$12 = moonbitlang$core$array$$choose_pivot_by$19$(arr$2, cmp);
    const _pivot_index = _bind$12._0;
    const _likely_sorted = _bind$12._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$19$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$13 = moonbitlang$core$array$$partition_by$19$(arr$2, cmp, _pivot_index);
    const _pivot = _bind$13._0;
    const _partitioned = _bind$13._1;
    was_partitioned = _partitioned;
    const _p$430 = len - _pivot | 0;
    balanced = (_pivot > _p$430 ? _p$430 : _pivot) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$14 = pred$2;
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$19$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$19$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$19$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$19$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$19$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$19$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$19$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$19$(right, cmp, moonbitlang$core$array$$ArrayView$at$19$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$quick_sort_by$22$(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p$429 = arr$2;
    const len = _p$429.len;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$bubble_sort_by$22$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$22$(arr$2, cmp);
      return undefined;
    }
    const _bind$12 = moonbitlang$core$array$$choose_pivot_by$22$(arr$2, cmp);
    const _pivot_index = _bind$12._0;
    const _likely_sorted = _bind$12._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$22$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$13 = moonbitlang$core$array$$partition_by$22$(arr$2, cmp, _pivot_index);
    const _pivot = _bind$13._0;
    const _partitioned = _bind$13._1;
    was_partitioned = _partitioned;
    const _p$430 = len - _pivot | 0;
    balanced = (_pivot > _p$430 ? _p$430 : _pivot) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$14 = pred$2;
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$22$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$22$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$22$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$22$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$22$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$22$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$22$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$22$(right, cmp, moonbitlang$core$array$$ArrayView$at$22$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$55$(self, map) {
  moonbitlang$core$array$$quick_sort_by$19$({ buf: self, start: 0, len: self.length }, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$22$(self, cmp) {
  moonbitlang$core$array$$quick_sort_by$22$({ buf: self, start: 0, len: self.length }, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$list$$List$of$6$(arr) {
  let _tmp$213 = arr.length - 1 | 0;
  let _tmp$214 = $64$moonbitlang$47$core$47$list$46$List$Empty$10$;
  while (true) {
    const i = _tmp$213;
    const list = _tmp$214;
    if (i >= 0) {
      _tmp$213 = i - 1 | 0;
      $bound_check(arr, i);
      _tmp$214 = new $64$moonbitlang$47$core$47$list$46$List$More$10$(arr[i], list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$set$$Set$new$46$inner$0$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$4$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$4$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    _tmp$214.next = entry;
  }
  self.tail = idx;
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, idx);
  _tmp$213[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$set_entry$0$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$set_entry$4$(self, entry, new_idx) {
  const _tmp$213 = self.entries;
  $bound_check(_tmp$213, new_idx);
  _tmp$213[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$push_away$0$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$push_away$4$(self, idx, entry) {
  let _tmp$213 = entry.psl + 1 | 0;
  let _tmp$214 = idx + 1 & self.capacity_mask;
  let _tmp$215 = entry;
  while (true) {
    const psl = _tmp$213;
    const idx$2 = _tmp$214;
    const entry$2 = _tmp$215;
    const _tmp$216 = self.entries;
    $bound_check(_tmp$216, idx$2);
    const _bind$12 = _tmp$216[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$4$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$4$(self, entry$2, idx$2);
        _tmp$213 = _curr_entry.psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        _tmp$215 = _curr_entry;
        continue;
      } else {
        _tmp$213 = psl + 1 | 0;
        _tmp$214 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$add_with_hash$0$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$0$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$0$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$4$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$4$(self);
  }
  let _bind$12;
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$13 = _tmp$215[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$216;
      if (_curr_entry.hash === hash) {
        const _p$429 = _curr_entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$4$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp$213 = psl + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$4$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$0$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$0$(self, _key, _hash);
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$grow$4$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$429 = self.capacity;
  self.grow_at = (Math.imul(_p$429, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$213 = old_head;
  while (true) {
    const _param = _tmp$213;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$4$(self, _key, _hash);
      _tmp$213 = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$0$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$33$(key));
}
function moonbitlang$core$set$$Set$add$4$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$4$(self, key, moonbitlang$core$builtin$$Hash$hash$32$(key));
}
function moonbitlang$core$set$$Set$from_array$0$(arr) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(arr.length);
  const _p$429 = arr.length;
  let _tmp$213 = 0;
  while (true) {
    const _p$430 = _tmp$213;
    if (_p$430 < _p$429) {
      const _p$431 = arr[_p$430];
      moonbitlang$core$set$$Set$add$0$(m, _p$431);
      _tmp$213 = _p$430 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$32$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return false;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$216;
      if (_entry.hash === hash) {
        const _p$429 = _entry.key;
        _tmp$216 = _p$429 === key;
      } else {
        _tmp$216 = false;
      }
      if (_tmp$216) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$contains$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$33$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      return false;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_entry.key, key)) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove_entry$0$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$213 = self.entries;
    $bound_check(_tmp$213, _bind$12);
    const _p$429 = _tmp$213[_bind$12];
    let _tmp$214;
    if (_p$429 === undefined) {
      _tmp$214 = $panic();
    } else {
      const _p$430 = _p$429;
      _tmp$214 = _p$430;
    }
    const _tmp$215 = _tmp$214;
    _tmp$215.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$0$(self, idx) {
  let _tmp$213 = idx;
  while (true) {
    const idx$2 = _tmp$213;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$214 = self.entries;
      $bound_check(_tmp$214, next);
      const _bind$12 = _tmp$214[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$0$(self, _x, idx$2);
          _tmp$213 = next;
          continue;
        }
      }
    }
    const _tmp$214 = self.entries;
    $bound_check(_tmp$214, idx$2);
    _tmp$214[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$remove$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$33$(key);
  let _tmp$213 = 0;
  let _tmp$214 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$213;
    const idx = _tmp$214;
    const _tmp$215 = self.entries;
    $bound_check(_tmp$215, idx);
    const _bind$12 = _tmp$215[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
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
      _tmp$213 = i + 1 | 0;
      _tmp$214 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$clear$0$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$40$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$0$(self) {
  const _p$429 = (yield_) => {
    let _tmp$213 = self.head;
    while (true) {
      const _param = _tmp$213;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp$213 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$429;
}
function moonbitlang$core$set$$Set$iter$4$(self) {
  const _p$429 = (yield_) => {
    let _tmp$213 = self.head;
    while (true) {
      const _param = _tmp$213;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp$213 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$429;
}
function moonbitlang$core$set$$Set$difference$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp$213 = self.head;
  while (true) {
    const _p$429 = _tmp$213;
    if (_p$429 === undefined) {
      break;
    } else {
      const _p$430 = _p$429;
      const _p$431 = _p$430;
      const _p$432 = _p$431.key;
      const _p$433 = _p$431.next;
      if (!moonbitlang$core$set$$Set$contains$0$(other, _p$432)) {
        moonbitlang$core$set$$Set$add$0$(m, _p$432);
      }
      _tmp$213 = _p$433;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp$213 = self.head;
  while (true) {
    const _p$429 = _tmp$213;
    if (_p$429 === undefined) {
      break;
    } else {
      const _p$430 = _p$429;
      const _p$431 = _p$430;
      const _p$432 = _p$431.key;
      const _p$433 = _p$431.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$432);
      _tmp$213 = _p$433;
      continue;
    }
  }
  let _tmp$214 = other.head;
  while (true) {
    const _p$429 = _tmp$214;
    if (_p$429 === undefined) {
      break;
    } else {
      const _p$430 = _p$429;
      const _p$431 = _p$430;
      const _p$432 = _p$431.key;
      const _p$433 = _p$431.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$432);
      _tmp$214 = _p$433;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$4$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$4$(8);
  let _tmp$213 = self.head;
  while (true) {
    const _p$429 = _tmp$213;
    if (_p$429 === undefined) {
      break;
    } else {
      const _p$430 = _p$429;
      const _p$431 = _p$430;
      const _p$432 = _p$431.key;
      const _p$433 = _p$431.next;
      moonbitlang$core$set$$Set$add$4$(m, _p$432);
      _tmp$213 = _p$433;
      continue;
    }
  }
  let _tmp$214 = other.head;
  while (true) {
    const _p$429 = _tmp$214;
    if (_p$429 === undefined) {
      break;
    } else {
      const _p$430 = _p$429;
      const _p$431 = _p$430;
      const _p$432 = _p$431.key;
      const _p$433 = _p$431.next;
      moonbitlang$core$set$$Set$add$4$(m, _p$432);
      _tmp$214 = _p$433;
      continue;
    }
  }
  return m;
}
function rami3l$js$45$ffi$js$$Union3$from0$56$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$56$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$57$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$38$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$58$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$59$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$25$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$60$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$60$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$60$(self)) {
    moonbitlang$core$abort$$abort$21$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$35$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$11$(self) : Option$None$11$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$36$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$12$(self) : Option$None$12$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$37$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$13$(self) : Option$None$13$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$38$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$14$(self) : Option$None$14$;
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
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$63$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$37$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$64$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$36$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$64$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$35$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$38$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$38$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$25$();
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
function Milky2018$selene$math$$Transform$new$46$inner(a, b, c, d, tx, ty) {
  return { a: a, b: b, c: c, d: d, tx: tx, ty: ty };
}
function Milky2018$selene$math$$Transform$from_translation(tx, ty) {
  return { a: 1, b: 0, c: 0, d: 1, tx: tx, ty: ty };
}
function Milky2018$selene$math$$Transform$from_scale(sx, sy) {
  return { a: sx, b: 0, c: 0, d: sy, tx: 0, ty: 0 };
}
function Milky2018$selene$math$$Transform$multiply(self, other) {
  return { a: self.a * other.a + self.c * other.b, b: self.b * other.a + self.d * other.b, c: self.a * other.c + self.c * other.d, d: self.b * other.c + self.d * other.d, tx: self.a * other.tx + self.c * other.ty + self.tx, ty: self.b * other.tx + self.d * other.ty + self.ty };
}
function Milky2018$selene$math$$Transform$flip_x(width) {
  return moonbitlang$core$builtin$$Mul$mul$65$(Milky2018$selene$math$$Transform$from_translation(width, 0), Milky2018$selene$math$$Transform$from_scale(-1, 1));
}
function moonbitlang$core$builtin$$Mul$mul$65$(self, other) {
  return Milky2018$selene$math$$Transform$multiply(self, other);
}
function Milky2018$selene$math$$Rect$intersects(a, b) {
  return Milky2018$selene$math$$Vec2D$op_get(a.position, 0) < Milky2018$selene$math$$Vec2D$op_get(b.position, 0) + Milky2018$selene$math$$Vec2D$op_get(b.size, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 0) + Milky2018$selene$math$$Vec2D$op_get(a.size, 0) > Milky2018$selene$math$$Vec2D$op_get(b.position, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 1) < Milky2018$selene$math$$Vec2D$op_get(b.position, 1) + Milky2018$selene$math$$Vec2D$op_get(b.size, 1) && Milky2018$selene$math$$Vec2D$op_get(a.position, 1) + Milky2018$selene$math$$Vec2D$op_get(a.size, 1) > Milky2018$selene$math$$Vec2D$op_get(b.position, 1)));
}
function Milky2018$selene$math$$Rect$shift(self, dir) {
  const _p$429 = self.position;
  const _tmp$213 = { _0: _p$429._0 + dir._0, _1: _p$429._1 + dir._1 };
  return { position: _tmp$213, size: self.size };
}
function moonbitlang$core$builtin$$Eq$equal$0$(_x_29, _x_30) {
  switch (_x_29) {
    case 0: {
      if (_x_30 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_30 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_30 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_30 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_30 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_30 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_30 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_30 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_30 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_30 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_30 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_30 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_30 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_30 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_30 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_30 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_30 === 16) {
        return true;
      } else {
        return false;
      }
    }
    case 17: {
      if (_x_30 === 17) {
        return true;
      } else {
        return false;
      }
    }
    case 18: {
      if (_x_30 === 18) {
        return true;
      } else {
        return false;
      }
    }
    case 19: {
      if (_x_30 === 19) {
        return true;
      } else {
        return false;
      }
    }
    case 20: {
      if (_x_30 === 20) {
        return true;
      } else {
        return false;
      }
    }
    case 21: {
      if (_x_30 === 21) {
        return true;
      } else {
        return false;
      }
    }
    case 22: {
      if (_x_30 === 22) {
        return true;
      } else {
        return false;
      }
    }
    case 23: {
      if (_x_30 === 23) {
        return true;
      } else {
        return false;
      }
    }
    case 24: {
      if (_x_30 === 24) {
        return true;
      } else {
        return false;
      }
    }
    case 25: {
      if (_x_30 === 25) {
        return true;
      } else {
        return false;
      }
    }
    case 26: {
      if (_x_30 === 26) {
        return true;
      } else {
        return false;
      }
    }
    case 27: {
      if (_x_30 === 27) {
        return true;
      } else {
        return false;
      }
    }
    case 28: {
      if (_x_30 === 28) {
        return true;
      } else {
        return false;
      }
    }
    case 29: {
      if (_x_30 === 29) {
        return true;
      } else {
        return false;
      }
    }
    case 30: {
      if (_x_30 === 30) {
        return true;
      } else {
        return false;
      }
    }
    case 31: {
      if (_x_30 === 31) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_30 === 32) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$0$(_x_21, _x_22) {
  switch (_x_21) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 10);
      return;
    }
    case 11: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 11);
      return;
    }
    case 12: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 12);
      return;
    }
    case 13: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 13);
      return;
    }
    case 14: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 14);
      return;
    }
    case 15: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 15);
      return;
    }
    case 16: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 16);
      return;
    }
    case 17: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 17);
      return;
    }
    case 18: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 18);
      return;
    }
    case 19: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 19);
      return;
    }
    case 20: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 20);
      return;
    }
    case 21: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 21);
      return;
    }
    case 22: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 22);
      return;
    }
    case 23: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 23);
      return;
    }
    case 24: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 24);
      return;
    }
    case 25: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 25);
      return;
    }
    case 26: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 26);
      return;
    }
    case 27: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 27);
      return;
    }
    case 28: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 28);
      return;
    }
    case 29: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 29);
      return;
    }
    case 30: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 30);
      return;
    }
    case 31: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 31);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 32);
      return;
    }
  }
}
function Milky2018$selene$inputs$$advanced_mouse_system(_delta) {
  Milky2018$selene$inputs$$just_pressed_mouse.left_button = Milky2018$selene$inputs$$mouse.left_button && !Milky2018$selene$inputs$$last_mouse.left_button;
  Milky2018$selene$inputs$$just_pressed_mouse.right_button = Milky2018$selene$inputs$$mouse.right_button && !Milky2018$selene$inputs$$last_mouse.right_button;
  Milky2018$selene$inputs$$just_pressed_mouse.middle_button = Milky2018$selene$inputs$$mouse.middle_button && !Milky2018$selene$inputs$$last_mouse.middle_button;
  Milky2018$selene$inputs$$just_release_mouse.left_button = !Milky2018$selene$inputs$$mouse.left_button && Milky2018$selene$inputs$$last_mouse.left_button;
  Milky2018$selene$inputs$$just_release_mouse.right_button = !Milky2018$selene$inputs$$mouse.right_button && Milky2018$selene$inputs$$last_mouse.right_button;
  Milky2018$selene$inputs$$just_release_mouse.middle_button = !Milky2018$selene$inputs$$mouse.middle_button && Milky2018$selene$inputs$$last_mouse.middle_button;
  Milky2018$selene$inputs$$last_mouse.pos = Milky2018$selene$inputs$$mouse.pos;
  Milky2018$selene$inputs$$last_mouse.left_button = Milky2018$selene$inputs$$mouse.left_button;
  Milky2018$selene$inputs$$last_mouse.right_button = Milky2018$selene$inputs$$mouse.right_button;
  Milky2018$selene$inputs$$last_mouse.middle_button = Milky2018$selene$inputs$$mouse.middle_button;
}
function Milky2018$selene$inputs$$is_mouse_pressed(button) {
  switch (button) {
    case 0: {
      return Milky2018$selene$inputs$$mouse.left_button;
    }
    case 1: {
      return Milky2018$selene$inputs$$mouse.right_button;
    }
    default: {
      return Milky2018$selene$inputs$$mouse.middle_button;
    }
  }
}
function Milky2018$selene$inputs$$is_mouse_released(button) {
  switch (button) {
    case 0: {
      return !Milky2018$selene$inputs$$mouse.left_button;
    }
    case 1: {
      return !Milky2018$selene$inputs$$mouse.right_button;
    }
    default: {
      return !Milky2018$selene$inputs$$mouse.middle_button;
    }
  }
}
function Milky2018$selene$inputs$$is_mouse_just_pressed(button) {
  switch (button) {
    case 0: {
      return Milky2018$selene$inputs$$just_pressed_mouse.left_button;
    }
    case 1: {
      return Milky2018$selene$inputs$$just_pressed_mouse.right_button;
    }
    default: {
      return Milky2018$selene$inputs$$just_pressed_mouse.middle_button;
    }
  }
}
function Milky2018$selene$inputs$$is_mouse_just_released(button) {
  switch (button) {
    case 0: {
      return Milky2018$selene$inputs$$just_release_mouse.left_button;
    }
    case 1: {
      return Milky2018$selene$inputs$$just_release_mouse.right_button;
    }
    default: {
      return Milky2018$selene$inputs$$just_release_mouse.middle_button;
    }
  }
}
function Milky2018$selene$inputs$$Code$from_string(code) {
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
function Milky2018$selene$inputs$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$inputs$$pressed_keys, code);
}
function Milky2018$selene$inputs$$advanced_key_system(_delta) {
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$just_pressed_keys);
  const _bind$12 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$pressed_keys, Milky2018$selene$inputs$$last_pressed_keys));
  _bind$12((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_pressed_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$just_release_keys);
  const _bind$13 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$union$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$all_codes, Milky2018$selene$inputs$$pressed_keys), Milky2018$selene$inputs$$last_pressed_keys));
  _bind$13((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_release_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$last_pressed_keys);
  const _bind$14 = moonbitlang$core$set$$Set$iter$0$(Milky2018$selene$inputs$$pressed_keys);
  _bind$14((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$last_pressed_keys, code);
    return 1;
  });
}
function Milky2018$selene$inputs$$is_just_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$inputs$$just_pressed_keys, code);
}
function Milky2018$selene$backend$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$37$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$63$(rami3l$js$45$ffi$js$$Nullable$unwrap$60$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$38$(rami3l$js$45$ffi$js$$Union5$to0$57$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$12 = { _0: 0, _1: 0 };
  const _bind$13 = moonbitlang$core$ref$$Ref$new$27$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$12, zoom: 1, time_scale: 1, mouse_movement: _bind$13 };
}
function Milky2018$selene$backend$$register_mouse_events(mouse, mouse_movement) {
  Milky2018$selene$backend$$canvas_backend.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$backend$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$64$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$61$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$61$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$61$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$61$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$backend$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$64$(event));
    const _bind$12 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$61$(mouse_event);
    switch (_bind$12) {
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$backend$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$64$(event));
    const _bind$12 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$61$(mouse_event);
    switch (_bind$12) {
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
function Milky2018$selene$backend$$register_key_events(pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$backend$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$35$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$64$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$0$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$62$(Milky2018$selene$backend$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$35$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$64$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
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
function Milky2018$selene$backend$$get_image_element(png) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$backend$$element_cache, png);
  if (_bind$12.$tag === 1) {
    const _Some = _bind$12;
    const _element = _Some._0;
    return _element;
  }
  const element = Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new();
  Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src(element, png);
  moonbitlang$core$builtin$$Map$set$13$(Milky2018$selene$backend$$element_cache, png, element);
  return element;
}
function Milky2018$selene$backend$$draw_picture(png, x, y, width, height, transform, repeat) {
  const element = Milky2018$selene$backend$$get_image_element(png);
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
  const context = Milky2018$selene$backend$$canvas_backend.context;
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(context, rami3l$js$45$ffi$js$$Union7$from0$58$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from2$56$(pattern));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(context, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_sprite(sprite_path, x, y, offset_x, offset_y, width, height, transform) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  const element = Milky2018$selene$backend$$get_image_element(sprite_path);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size(context, element, offset_x, offset_y, width, height, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_text(text, x, y, font, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(context, font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$56$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, text, x, y, Option$None$15$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_color_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$56$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$schedule_with_fixed_interval(interval, callback) {
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
    lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$backend$$window, update);
  };
  lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$backend$$window, update);
  return () => {
    if (lastId.val !== 0) {
      Yoorkin$rabbit$45$tea$dom$$Window$cancel_animation_frame(Milky2018$selene$backend$$window, lastId.val);
      return;
    } else {
      return;
    }
  };
}
function Milky2018$selene$backend$$initialize(startup, render_loop, game_loop, canvas_width, canvas_height, fps, image_smooth, zoom) {
  if (fps >>> 0 > 60 >>> 0) {
    moonbitlang$core$builtin$$println$31$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
  }
  Milky2018$selene$backend$$canvas_backend.viewport_size = { _0: canvas_width, _1: canvas_height };
  Milky2018$selene$backend$$set_viewport_height(Milky2018$selene$backend$$canvas_backend.canvas, canvas_height);
  Milky2018$selene$backend$$set_viewport_width(Milky2018$selene$backend$$canvas_backend.canvas, canvas_width);
  Milky2018$selene$backend$$set_image_smoothing_enabled(Milky2018$selene$backend$$canvas_backend.context, image_smooth);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale(Milky2018$selene$backend$$canvas_backend.context, zoom, zoom);
  Milky2018$selene$backend$$canvas_backend.zoom = zoom;
  startup();
  Milky2018$selene$backend$$schedule_with_fixed_interval(1000 / $f64_convert_i32_u(fps), (delta) => {
    const delta$2 = delta / 1000;
    Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect(Milky2018$selene$backend$$canvas_backend.context, 0, 0, canvas_width, canvas_height);
    render_loop(delta$2 * Milky2018$selene$backend$$canvas_backend.time_scale);
    game_loop(delta$2 * Milky2018$selene$backend$$canvas_backend.time_scale);
    const _bind$12 = Milky2018$selene$backend$$canvas_backend.mouse_movement.val;
    if (_bind$12 === undefined) {
      return;
    } else {
      const _Some = _bind$12;
      const _mouse_movement = _Some;
      _mouse_movement.movement = { _0: 0, _1: 0 };
      return;
    }
  });
  return () => {
  };
}
function Milky2018$selene$backend$$get_audio(path) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$18$(Milky2018$selene$backend$$audio_cache, path);
  if (_bind$12.$tag === 1) {
    const _Some = _bind$12;
    const _audio = _Some._0;
    return _audio;
  }
  const audio = Milky2018$selene$backend$$Audio$new(path);
  moonbitlang$core$builtin$$Map$set$18$(Milky2018$selene$backend$$audio_cache, path, audio);
  return audio;
}
function Milky2018$selene$backend$$play_audio(audio_path, volume, loop_) {
  const audio = Milky2018$selene$backend$$get_audio(audio_path);
  Milky2018$selene$backend$$Audio$set_volume(audio, volume);
  Milky2018$selene$backend$$Audio$set_loop(audio, loop_);
  Milky2018$selene$backend$$Audio$play(audio);
}
function Milky2018$selene$audio$$play_audio$46$inner(audio_path, volume, loop_) {
  Milky2018$selene$backend$$play_audio(audio_path, volume, loop_);
}
function moonbitlang$core$builtin$$Hash$hash_combine$4$(_x_80, _x_81) {
  moonbitlang$core$builtin$$Hash$hash_combine$47$(_x_80, _x_81);
}
function Milky2018$selene$system$$timer_system(delta) {
  const _p$429 = [];
  const _p$430 = Milky2018$selene$system$$timers.length;
  let _tmp$213 = 0;
  while (true) {
    const _p$431 = _tmp$213;
    if (_p$431 < _p$430) {
      const _p$432 = Milky2018$selene$system$$timers[_p$431];
      if (_p$432.pausible) {
        moonbitlang$core$array$$Array$push$15$(_p$429, _p$432);
      }
      _tmp$213 = _p$431 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p$429;
  const _len = _arr.length;
  let _tmp$214 = 0;
  while (true) {
    const _i = _tmp$214;
    if (_i < _len) {
      const timer = _arr[_i];
      if (timer.pausible) {
      }
      timer.rest = timer.rest - delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$214 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$431 = Milky2018$selene$system$$timers.length;
  let _tmp$215 = 0;
  let _tmp$216 = 0;
  while (true) {
    const _p$432 = _tmp$215;
    const _p$433 = _tmp$216;
    if (_p$432 < _p$431) {
      const _p$434 = Milky2018$selene$system$$timers[_p$432];
      if (_p$434.rest > 0) {
        Milky2018$selene$system$$timers[_p$433] = _p$434;
        _tmp$215 = _p$432 + 1 | 0;
        _tmp$216 = _p$433 + 1 | 0;
        continue;
      }
      _tmp$215 = _p$432 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(Milky2018$selene$system$$timers, _p$433);
      return;
    }
  }
}
function Milky2018$selene$system$$realtime_timer_system(delta) {
  const _p$429 = [];
  const _p$430 = Milky2018$selene$system$$timers.length;
  let _tmp$213 = 0;
  while (true) {
    const _p$431 = _tmp$213;
    if (_p$431 < _p$430) {
      const _p$432 = Milky2018$selene$system$$timers[_p$431];
      if (!_p$432.pausible) {
        moonbitlang$core$array$$Array$push$15$(_p$429, _p$432);
      }
      _tmp$213 = _p$431 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p$429;
  const _len = _arr.length;
  let _tmp$214 = 0;
  while (true) {
    const _i = _tmp$214;
    if (_i < _len) {
      const timer = _arr[_i];
      if (timer.pausible) {
      }
      timer.rest = timer.rest - delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$214 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$431 = Milky2018$selene$system$$timers.length;
  let _tmp$215 = 0;
  let _tmp$216 = 0;
  while (true) {
    const _p$432 = _tmp$215;
    const _p$433 = _tmp$216;
    if (_p$432 < _p$431) {
      const _p$434 = Milky2018$selene$system$$timers[_p$432];
      if (_p$434.rest > 0) {
        Milky2018$selene$system$$timers[_p$433] = _p$434;
        _tmp$215 = _p$432 + 1 | 0;
        _tmp$216 = _p$433 + 1 | 0;
        continue;
      }
      _tmp$215 = _p$432 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(Milky2018$selene$system$$timers, _p$433);
      return;
    }
  }
}
function Milky2018$selene$system$$iter_entities() {
  return moonbitlang$core$set$$Set$iter$4$(Milky2018$selene$system$$all_entities);
}
function Milky2018$selene$system$$Entity$is_alive(e) {
  return moonbitlang$core$set$$Set$contains$4$(Milky2018$selene$system$$all_entities, e);
}
function Milky2018$selene$system$$Entity$new() {
  const entity = Milky2018$selene$system$$entity_generator.val;
  Milky2018$selene$system$$entity_generator.val = (Milky2018$selene$system$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$4$(Milky2018$selene$system$$all_entities, entity);
  return entity;
}
function Milky2018$selene$system$$deferred_event_system(_delta) {
  while (true) {
    const _bind$12 = moonbitlang$core$array$$Array$pop$11$(Milky2018$selene$system$$deferred_events);
    if (_bind$12 === undefined) {
      return;
    } else {
      const _Some = _bind$12;
      const _event = _Some;
      _event();
      continue;
    }
  }
}
function Milky2018$selene$system$$App$new() {
  return { canvas_height: 256, canvas_width: 512, zoom: 1, image_smooth: true, fps: 60, systems: [], plugins: [] };
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
  moonbitlang$core$array$$Array$push$43$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$16$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$42$(systems, { _0: system, _1: schedule, _2: system_name$2 });
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
  let _tmp$213 = 0;
  while (true) {
    const _i = _tmp$213;
    if (_i < _len) {
      const plugin = _arr[_i];
      plugin(self);
      _tmp$213 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const startup = () => {
    const _arr$2 = self.systems;
    const _len$2 = _arr$2.length;
    let _tmp$214 = 0;
    while (true) {
      const _i = _tmp$214;
      if (_i < _len$2) {
        const system = _arr$2[_i];
        const _bind$12 = system._1;
        if (_bind$12.$tag === 0) {
          const _func = system._0;
          _func(0);
        }
        _tmp$214 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const renders = [];
  const _arr$2 = self.systems;
  const _len$2 = _arr$2.length;
  let _tmp$214 = 0;
  while (true) {
    const _i = _tmp$214;
    if (_i < _len$2) {
      const system = _arr$2[_i];
      const _bind$12 = system._1;
      if (_bind$12.$tag === 2) {
        const _Render = _bind$12;
        const _pri = _Render._0;
        moonbitlang$core$array$$Array$push$19$(renders, { _0: system._0, _1: _pri });
      }
      _tmp$214 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$sort_by_key$55$(renders, (system) => -system._1 | 0);
  const render_loop = (delta) => {
    const _len$3 = renders.length;
    let _tmp$215 = 0;
    while (true) {
      const _i = _tmp$215;
      if (_i < _len$3) {
        const render = renders[_i];
        const _func = render._0;
        _func(delta);
        _tmp$215 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const game_loops = [];
  const _arr$3 = self.systems;
  const _len$3 = _arr$3.length;
  let _tmp$215 = 0;
  while (true) {
    const _i = _tmp$215;
    if (_i < _len$3) {
      const system = _arr$3[_i];
      const _bind$12 = system._1;
      if (_bind$12.$tag === 1) {
        moonbitlang$core$array$$Array$push$41$(game_loops, system._0);
      }
      _tmp$215 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const game_loop = (delta) => {
    const _len$4 = game_loops.length;
    let _tmp$216 = 0;
    while (true) {
      const _i = _tmp$216;
      if (_i < _len$4) {
        const system = game_loops[_i];
        system(delta);
        _tmp$216 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const run_game = Milky2018$selene$backend$$initialize(startup, render_loop, game_loop, self.canvas_width, self.canvas_height, self.fps, self.image_smooth, self.zoom);
  Milky2018$selene$backend$$register_key_events(Milky2018$selene$inputs$$pressed_keys);
  Milky2018$selene$backend$$register_mouse_events(Milky2018$selene$inputs$$mouse, Milky2018$selene$inputs$$mouse_movement);
  run_game();
}
function Milky2018$selene$camera$$set_limits(top, bottom, left, right) {
  Milky2018$selene$camera$$camera.limit_top = top;
  Milky2018$selene$camera$$camera.limit_bottom = bottom;
  Milky2018$selene$camera$$camera.limit_left = left;
  Milky2018$selene$camera$$camera.limit_right = right;
}
function Milky2018$selene$camera$$attach_entity(entity, offset) {
  Milky2018$selene$camera$$camera.attached_entity = entity;
  Milky2018$selene$camera$$camera.offset = offset;
}
function Milky2018$selene$camera$$camera_system(_delta) {
  const _bind$12 = Milky2018$selene$camera$$camera.attached_entity;
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _e = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$13;
      const _pos = _Some$2;
      const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
      const _p$429 = Milky2018$selene$backend$$canvas_backend.viewport_size;
      const _p$430 = { _0: 1 / zoom, _1: 1 / zoom };
      const viewport_size = { _0: _p$429._0 * _p$430._0, _1: _p$429._1 * _p$430._1 };
      const _p$431 = { _0: 0.5, _1: 0.5 };
      const _p$432 = { _0: viewport_size._0 * _p$431._0, _1: viewport_size._1 * _p$431._1 };
      const _p$433 = { _0: _pos._0 - _p$432._0, _1: _pos._1 - _p$432._1 };
      const _p$434 = Milky2018$selene$camera$$camera.offset;
      const target_position = { _0: _p$433._0 + _p$434._0, _1: _p$433._1 + _p$434._1 };
      const new_x = Milky2018$selene$camera$$camera.follow_x ? Milky2018$selene$math$$Vec2D$op_get(target_position, 0) : Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0);
      const new_y = Milky2018$selene$camera$$camera.follow_y ? Milky2018$selene$math$$Vec2D$op_get(target_position, 1) : Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1);
      Milky2018$selene$camera$$camera.position = { _0: new_x, _1: new_y };
      const _bind$14 = Milky2018$selene$camera$$camera.limit_top;
      if (_bind$14.$tag === 1) {
        const _Some$3 = _bind$14;
        const _top = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) < _top) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _top };
        }
      }
      const _bind$15 = Milky2018$selene$camera$$camera.limit_bottom;
      if (_bind$15.$tag === 1) {
        const _Some$3 = _bind$15;
        const _bottom = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) > _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1)) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1) };
        }
      }
      const _bind$16 = Milky2018$selene$camera$$camera.limit_left;
      if (_bind$16.$tag === 1) {
        const _Some$3 = _bind$16;
        const _left = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0) < _left) {
          Milky2018$selene$camera$$camera.position = { _0: _left, _1: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) };
        }
      }
      const _bind$17 = Milky2018$selene$camera$$camera.limit_right;
      if (_bind$17.$tag === 1) {
        const _Some$3 = _bind$17;
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
function Milky2018$selene$sprite$$Sprite$from_animation$46$inner(animation, zindex, offset) {
  const _bind$12 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(animation, 0);
  return { sprite_type: _bind$12, zindex: zindex, visible: true, offset: offset };
}
function Milky2018$selene$sprite$$Sprite$from_animation(animation, zindex, offset$46$opt) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_animation$46$inner(animation, zindex, offset);
}
function Milky2018$selene$sprite$$render_animation(animation, current_frame, pos, visible, delta) {
  const frame = moonbitlang$core$array$$Array$at$30$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
  if (visible) {
    Milky2018$selene$backend$$draw_sprite(frame.sprite_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 0), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 1), Milky2018$selene$math$$Vec2D$op_get(frame.size, 0), Milky2018$selene$math$$Vec2D$op_get(frame.size, 1), animation.transform);
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
function Milky2018$selene$sprite$$render_color_rect(color_rect, position) {
  Milky2018$selene$backend$$draw_color_rect(Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 0), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 1), color_rect.color);
}
function Milky2018$selene$sprite$$render_picture(picture, pos) {
  Milky2018$selene$backend$$draw_picture(picture.tile_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(picture.size, 0), Milky2018$selene$math$$Vec2D$op_get(picture.size, 1), picture.transform, picture.repeat);
}
function Milky2018$selene$sprite$$render_text(text, position) {
  Milky2018$selene$backend$$draw_text(text.content, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), text.font, text.color);
}
function Milky2018$selene$sprite$$render_sprite_system(delta) {
  const _p$429 = moonbitlang$core$builtin$$Map$to_array$14$(Milky2018$selene$sprite$$sprites);
  const _p$430 = [];
  const _p$431 = _p$429.length;
  let _tmp$213 = 0;
  while (true) {
    const _p$432 = _tmp$213;
    if (_p$432 < _p$431) {
      const _p$433 = _p$429[_p$432];
      if (Milky2018$selene$system$$Entity$is_alive(_p$433._0)) {
        moonbitlang$core$array$$Array$push$22$(_p$430, _p$433);
      }
      _tmp$213 = _p$432 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$430;
  moonbitlang$core$array$$Array$sort_by$22$(sprites, (sprite1, sprite2) => {
    if (sprite1._1.zindex < sprite2._1.zindex) {
      return -1;
    } else {
      if (sprite1._1.zindex > sprite2._1.zindex) {
        return 1;
      } else {
        const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, sprite1._0);
        if (_bind$12 === undefined) {
          return 0;
        } else {
          const _Some = _bind$12;
          const _pos1 = _Some;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, sprite2._0);
          if (_bind$13 === undefined) {
            return 0;
          } else {
            const _Some$2 = _bind$13;
            const _pos2 = _Some$2;
            return Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) < Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? -1 : Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) > Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? 1 : 0;
          }
        }
      }
    }
  });
  const _len = sprites.length;
  let _tmp$214 = 0;
  while (true) {
    const _i = _tmp$214;
    if (_i < _len) {
      _L: {
        const sprite = sprites[_i];
        const e = sprite._0;
        const sprite$2 = sprite._1;
        const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$12 === undefined) {
          break _L;
        } else {
          const _Some = _bind$12;
          const _pos = _Some;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$ui$$uis, e);
          let pos;
          if (_bind$13 === -1) {
            const _p$432 = Milky2018$selene$camera$$camera.position;
            pos = { _0: _pos._0 - _p$432._0, _1: _pos._1 - _p$432._1 };
          } else {
            pos = _pos;
          }
          const _bind$14 = sprite$2.sprite_type;
          switch (_bind$14.$tag) {
            case 0: {
              const _Picture = _bind$14;
              const _picture = _Picture._0;
              if (sprite$2.visible) {
                const _p$432 = sprite$2.offset;
                Milky2018$selene$sprite$$render_picture(_picture, { _0: pos._0 + _p$432._0, _1: pos._1 + _p$432._1 });
              }
              break;
            }
            case 1: {
              const _Animation = _bind$14;
              const _anime = _Animation._0;
              const _frame = _Animation._1;
              const _p$432 = sprite$2.offset;
              const _tmp$215 = { _0: pos._0 + _p$432._0, _1: pos._1 + _p$432._1 };
              const new_frame = Milky2018$selene$sprite$$render_animation(_anime, _frame, _tmp$215, sprite$2.visible, delta);
              _Animation._1 = new_frame;
              break;
            }
            case 2: {
              const _Text = _bind$14;
              const _text = _Text._0;
              if (sprite$2.visible) {
                const _p$433 = sprite$2.offset;
                Milky2018$selene$sprite$$render_text(_text, { _0: pos._0 + _p$433._0, _1: pos._1 + _p$433._1 });
              }
              break;
            }
            default: {
              const _ColorRect = _bind$14;
              const _color_rect = _ColorRect._0;
              if (sprite$2.visible) {
                const _p$433 = sprite$2.offset;
                Milky2018$selene$sprite$$render_color_rect(_color_rect, { _0: pos._0 + _p$433._0, _1: pos._1 + _p$433._1 });
              }
            }
          }
        }
        break _L;
      }
      _tmp$214 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$sprite$$Text$new$46$inner(content, color, font) {
  return { content: content, color: color, font: font };
}
function Milky2018$selene$sprite$$generate_animation() {
  const id = Milky2018$selene$sprite$$animation_generator.val;
  Milky2018$selene$sprite$$animation_generator.val = Milky2018$selene$sprite$$animation_generator.val + 1 | 0;
  return id;
}
function Milky2018$selene$sprite$$Animation$new$46$inner(frames, loop_, fps, transform) {
  const max_frame = frames.length;
  if (max_frame === 0) {
    moonbitlang$core$abort$$abort$21$("Animation must have at least one frame");
  }
  return { frames: frames, transform: transform, loop_: loop_, fps: fps, id: Milky2018$selene$sprite$$generate_animation() };
}
function Milky2018$selene$sprite$$Animation$new(frames, loop_$46$opt, fps$46$opt, transform$46$opt) {
  const loop_ = loop_$46$opt === -1 ? false : loop_$46$opt;
  let fps;
  if (fps$46$opt.$tag === 1) {
    const _Some = fps$46$opt;
    fps = _Some._0;
  } else {
    fps = 1;
  }
  let transform;
  if (transform$46$opt === undefined) {
    transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  } else {
    const _Some = transform$46$opt;
    transform = _Some;
  }
  return Milky2018$selene$sprite$$Animation$new$46$inner(frames, loop_, fps, transform);
}
function Milky2018$selene$sprite$$Animation$single_frame$46$inner(sprite_path, size, transform, offset) {
  return Milky2018$selene$sprite$$Animation$new$46$inner([{ sprite_path: sprite_path, size: size, offset: offset }], false, 0, transform);
}
function Milky2018$selene$sprite$$Animation$single_frame(sprite_path, size, transform$46$opt, offset$46$opt) {
  let transform;
  if (transform$46$opt === undefined) {
    transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  } else {
    const _Some = transform$46$opt;
    transform = _Some;
  }
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Animation$single_frame$46$inner(sprite_path, size, transform, offset);
}
function Milky2018$selene$sprite$$frames_from_atlas$46$inner(sprite_path, frame_count, width, height, offset, space_x) {
  const frames = [];
  let _tmp$213 = 0;
  while (true) {
    const i = _tmp$213;
    if (i < frame_count) {
      const x = Milky2018$selene$math$$Vec2D$op_get(offset, 0) + (i + 0) * (width + space_x);
      moonbitlang$core$array$$Array$push$30$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: Milky2018$selene$math$$Vec2D$update(offset, 0, x) });
      _tmp$213 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return frames;
}
function Milky2018$selene$sprite$$frames_from_atlas(sprite_path, frame_count, width, height, offset$46$opt, space_x$46$opt) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  let space_x;
  if (space_x$46$opt.$tag === 1) {
    const _Some = space_x$46$opt;
    space_x = _Some._0;
  } else {
    space_x = 0;
  }
  return Milky2018$selene$sprite$$frames_from_atlas$46$inner(sprite_path, frame_count, width, height, offset, space_x);
}
function Milky2018$selene$sprite$$play_animation$46$inner(entity, animation, from_start, loop_, rate, transform) {
  _L: {
    const _bind$12 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$sprite$$sprites, entity);
    if (_bind$12 === undefined) {
      break _L;
    } else {
      const _Some = _bind$12;
      const _x = _Some;
      const _x$2 = _x.sprite_type;
      if (_x$2.$tag === 1) {
        const _Animation = _x$2;
        const _current_anime = _Animation._0;
        const _current_frame = _Animation._1;
        const _zindex = _x.zindex;
        const _visible = _x.visible;
        const _offset = _x.offset;
        const _p$429 = animation.loop_;
        const loop_$2 = loop_ === -1 ? _p$429 : loop_;
        const rate$2 = moonbitlang$core$option$$Option$unwrap_or$25$(rate, animation.fps);
        const _p$430 = animation.transform;
        let transform$2;
        if (transform === undefined) {
          transform$2 = _p$430;
        } else {
          const _p$431 = transform;
          transform$2 = _p$431;
        }
        const frame = !from_start && animation.id === _current_anime.id ? _current_frame : 0;
        const new_anime = { frames: animation.frames, transform: transform$2, loop_: loop_$2, fps: rate$2, id: animation.id };
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, { sprite_type: new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(new_anime, frame), zindex: _zindex, visible: _visible, offset: _offset });
        return;
      } else {
        break _L;
      }
    }
  }
  $panic();
}
function Milky2018$selene$sprite$$is_animation_finished(entity) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$sprite$$sprites, entity);
  if (_bind$12 === undefined) {
    return true;
  } else {
    const _Some = _bind$12;
    const _x = _Some;
    const _x$2 = _x.sprite_type;
    if (_x$2.$tag === 1) {
      const _Animation = _x$2;
      const _anime = _Animation._0;
      const _frame = _Animation._1;
      if (_anime.loop_) {
        return false;
      }
      return _frame >= _anime.frames.length + 0 - 0.01;
    } else {
      return true;
    }
  }
}
function Milky2018$selene$collision$$QuadTree$new(position, size, depth) {
  const _bind$12 = moonbitlang$core$set$$Set$new$46$inner$4$(8);
  const _bind$13 = [];
  const _bind$14 = { position: position, size: size };
  return { position: position, size: size, children: _bind$13, depth: depth, bounding_box: _bind$14, entities: _bind$12 };
}
function Milky2018$selene$collision$$QuadTree$is_smallest_size(self) {
  return Milky2018$selene$math$$Vec2D$op_get(self.size, 0) <= 64 || Milky2018$selene$math$$Vec2D$op_get(self.size, 1) <= 64;
}
function Milky2018$selene$collision$$QuadTree$insert(self, entity, box) {
  if (!Milky2018$selene$math$$Rect$intersects(self.bounding_box, box)) {
    return undefined;
  }
  if (Milky2018$selene$collision$$QuadTree$is_smallest_size(self)) {
    moonbitlang$core$set$$Set$add$4$(self.entities, entity);
    return undefined;
  }
  const _p$429 = self.children;
  if (_p$429.length === 0) {
    const half_size = { _0: Milky2018$selene$math$$Vec2D$op_get(self.size, 0) * 0.5, _1: Milky2018$selene$math$$Vec2D$op_get(self.size, 1) * 0.5 };
    const _self = self.children;
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    const _p$430 = self.position;
    const _p$431 = { _0: Milky2018$selene$math$$Vec2D$op_get(half_size, 0), _1: 0 };
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$430._0 + _p$431._0, _1: _p$430._1 + _p$431._1 }, half_size, self.depth + 1 | 0));
    const _p$432 = self.position;
    const _p$433 = { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(half_size, 1) };
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$432._0 + _p$433._0, _1: _p$432._1 + _p$433._1 }, half_size, self.depth + 1 | 0));
    const _p$434 = self.position;
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$434._0 + half_size._0, _1: _p$434._1 + half_size._1 }, half_size, self.depth + 1 | 0));
  }
  const _arr = self.children;
  const _len = _arr.length;
  let _tmp$213 = 0;
  while (true) {
    const _i = _tmp$213;
    if (_i < _len) {
      const child = _arr[_i];
      Milky2018$selene$collision$$QuadTree$insert(child, entity, box);
      _tmp$213 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$quadtree_query(area) {
  const trees = { val: moonbitlang$core$list$$List$of$6$([Milky2018$selene$collision$$quadtree_root.val]) };
  let results = moonbitlang$core$set$$Set$new$46$inner$4$(8);
  while (true) {
    const _bind$12 = trees.val;
    if (_bind$12.$tag === 1) {
      const _More = _bind$12;
      const _hd = _More._0;
      const _rest = _More._1;
      trees.val = _rest;
      if (!Milky2018$selene$math$$Rect$intersects(_hd.bounding_box, area)) {
        continue;
      }
      const _bind$13 = _hd.children;
      if (_bind$13.length === 0) {
        results = moonbitlang$core$set$$Set$union$4$(results, _hd.entities);
      } else {
        const _p$429 = _hd.children;
        const _p$430 = _p$429.length;
        let _tmp$213 = 0;
        while (true) {
          const _p$431 = _tmp$213;
          if (_p$431 < _p$430) {
            const _p$432 = _p$429[_p$431];
            const _p$433 = trees.val;
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$10$(_p$432, _p$433);
            _tmp$213 = _p$431 + 1 | 0;
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
function Milky2018$selene$collision$$quadtree_clear_system(_delta) {
  const left_limit = { val: 0 };
  const right_limit = { val: 0 };
  const top_limit = { val: 0 };
  const bottom_limit = { val: 0 };
  const boxes = [];
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
  const _bind$12 = moonbitlang$core$builtin$$Map$iter2$2$(Milky2018$selene$collision$$shapes);
  _bind$12((e, shape) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$ui$$uis, e);
      if (_bind$13 === -1) {
        const _bind$14 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$14 === undefined) {
          return 1;
        } else {
          const _Some = _bind$14;
          const _position = _Some;
          const _Rect = shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$15 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const _bind$16 = { _0: _width, _1: _height };
          const box = { position: _bind$15, size: _bind$16 };
          moonbitlang$core$array$$Array$push$44$(boxes, { _0: e, _1: box });
          const _p$429 = left_limit.val;
          const _p$430 = Milky2018$selene$math$$Vec2D$op_get(_bind$15, 0);
          left_limit.val = _p$429 > _p$430 ? _p$430 : _p$429;
          const _p$431 = right_limit.val;
          const _p$432 = Milky2018$selene$math$$Vec2D$op_get(_bind$15, 0) + Milky2018$selene$math$$Vec2D$op_get(_bind$16, 0);
          right_limit.val = _p$431 > _p$432 ? _p$431 : _p$432;
          const _p$433 = top_limit.val;
          const _p$434 = Milky2018$selene$math$$Vec2D$op_get(_bind$15, 1);
          top_limit.val = _p$433 > _p$434 ? _p$434 : _p$433;
          const _p$435 = bottom_limit.val;
          const _p$436 = Milky2018$selene$math$$Vec2D$op_get(_bind$15, 1) + Milky2018$selene$math$$Vec2D$op_get(_bind$16, 1);
          bottom_limit.val = _p$435 > _p$436 ? _p$435 : _p$436;
        }
      } else {
        return 1;
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp$213 = _foreach_result;
  switch (_tmp$213.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp$213;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp$213;
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
  let _tmp$214 = 0;
  while (true) {
    const _i = _tmp$214;
    if (_i < _len) {
      const box = boxes[_i];
      Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root.val, box._0, box._1);
      _tmp$214 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$pickable_click_system(_delta) {
  const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
  const _bind$12 = { _0: 1, _1: 1 };
  const _p$429 = Milky2018$selene$inputs$$mouse.pos;
  const _p$430 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$13 = { _0: _p$429._0 * _p$430._0, _1: _p$429._1 * _p$430._1 };
  const box = { position: _bind$13, size: _bind$12 };
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
  const _bind$14 = moonbitlang$core$builtin$$Map$iter2$5$(Milky2018$selene$ui$$uis);
  _bind$14((e, _ui) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$15 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$collision$$pickables, e);
      if (_bind$15 === undefined) {
        return 1;
      } else {
        const _Some = _bind$15;
        const _pick = _Some;
        const _bind$16 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$16 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$16;
          const _position = _Some$2;
          const _bind$17 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
          if (_bind$17 === undefined) {
            return 1;
          } else {
            const _Some$3 = _bind$17;
            const _shape = _Some$3;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$18 = { _0: _width, _1: _height };
            const _bind$19 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const area_box = { position: _bind$19, size: _bind$18 };
            if (!Milky2018$selene$math$$Rect$intersects(box, area_box)) {
              return 1;
            }
            const _arr = [0, 1, 2];
            const _len = _arr.length;
            let _tmp$213 = 0;
            while (true) {
              const _i = _tmp$213;
              if (_i < _len) {
                const button = _arr[_i];
                if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
                  const _arr$2 = _pick.on_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$214 = 0;
                  while (true) {
                    const _i$2 = _tmp$214;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$214 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_released(button)) {
                  const _arr$2 = _pick.on_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$214 = 0;
                  while (true) {
                    const _i$2 = _tmp$214;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$214 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
                  const _arr$2 = _pick.on_just_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$214 = 0;
                  while (true) {
                    const _i$2 = _tmp$214;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$214 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
                  const _arr$2 = _pick.on_just_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$214 = 0;
                  while (true) {
                    const _i$2 = _tmp$214;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$214 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                _tmp$213 = _i + 1 | 0;
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
  const _tmp$213 = _foreach_result;
  switch (_tmp$213.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp$213;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp$213;
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
  let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
  const _bind$15 = moonbitlang$core$set$$Set$iter$4$(entities);
  _bind$15((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$16 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$collision$$pickables, e);
      if (_bind$16 === undefined) {
        return 1;
      } else {
        const _Some = _bind$16;
        const _pick = _Some;
        const _bind$17 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$17 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$17;
          const _position = _Some$2;
          const _bind$18 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
          if (_bind$18 === undefined) {
            return 1;
          } else {
            const _Some$3 = _bind$18;
            const _shape = _Some$3;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$19 = { _0: _width, _1: _height };
            const _bind$20 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const area_box = { position: _bind$20, size: _bind$19 };
            if (!Milky2018$selene$math$$Rect$intersects(Milky2018$selene$math$$Rect$shift(box, Milky2018$selene$camera$$camera.position), area_box)) {
              return 1;
            }
            const _arr = [0, 1, 2];
            const _len = _arr.length;
            let _tmp$214 = 0;
            while (true) {
              const _i = _tmp$214;
              if (_i < _len) {
                const button = _arr[_i];
                if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
                  const _arr$2 = _pick.on_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$215 = 0;
                  while (true) {
                    const _i$2 = _tmp$215;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$215 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_released(button)) {
                  const _arr$2 = _pick.on_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$215 = 0;
                  while (true) {
                    const _i$2 = _tmp$215;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$215 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
                  const _arr$2 = _pick.on_just_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$215 = 0;
                  while (true) {
                    const _i$2 = _tmp$215;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$215 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
                  const _arr$2 = _pick.on_just_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$215 = 0;
                  while (true) {
                    const _i$2 = _tmp$215;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$215 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                _tmp$214 = _i + 1 | 0;
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
  const _tmp$214 = _foreach_result$2;
  switch (_tmp$214.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break$2 = _tmp$214;
      _break$2._0;
      return;
    }
    case 2: {
      const _return$2 = _tmp$214;
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
  const _p$429 = a.position;
  const _p$430 = a.size;
  const _p$431 = 0.5;
  const _p$432 = { _0: _p$430._0 * _p$431, _1: _p$430._1 * _p$431 };
  const a_center = { _0: _p$429._0 + _p$432._0, _1: _p$429._1 + _p$432._1 };
  const _p$433 = b.position;
  const _p$434 = b.size;
  const _p$435 = 0.5;
  const _p$436 = { _0: _p$434._0 * _p$435, _1: _p$434._1 * _p$435 };
  const b_center = { _0: _p$433._0 + _p$436._0, _1: _p$433._1 + _p$436._1 };
  const _p$437 = a.size;
  const _p$438 = 0.5;
  const a_half = { _0: _p$437._0 * _p$438, _1: _p$437._1 * _p$438 };
  const _p$439 = b.size;
  const _p$440 = 0.5;
  const b_half = { _0: _p$439._0 * _p$440, _1: _p$439._1 * _p$440 };
  const delta = { _0: b_center._0 - a_center._0, _1: b_center._1 - a_center._1 };
  const intersect = { _0: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 0)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 0) + Milky2018$selene$math$$Vec2D$op_get(a_half, 0)), _1: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 1)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 1) + Milky2018$selene$math$$Vec2D$op_get(a_half, 1)) };
  return Milky2018$selene$math$$Vec2D$op_get(intersect, 0) < Milky2018$selene$math$$Vec2D$op_get(intersect, 1) && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 0) > 0 ? { _0: -Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 } : { _0: Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 }) : Milky2018$selene$math$$Vec2D$op_get(intersect, 1) > 0 && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 1) > 0 ? { _0: 0, _1: -Milky2018$selene$math$$Vec2D$op_get(intersect, 1) } : { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(intersect, 1) }) : { _0: 0, _1: 0 };
}
function Milky2018$selene$collision$$add_collision_info(entity, target, direction) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$12.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$46$(0));
  }
  moonbitlang$core$array$$Array$push$46$(moonbitlang$core$option$$Option$unwrap$26$(moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, speed, axis) {
  const pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  const size = { _0: Milky2018$selene$math$$Vec2D$op_get(object.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.size, 1) };
  return speed >= 0 ? { position: pos, size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + speed) } : { position: Milky2018$selene$math$$Vec2D$update(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + speed), size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - speed) };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$48$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, Milky2018$selene$math$$Vec2D$op_get(velocity, axis), axis);
  const new_pos = { val: { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) } };
  new_pos.val = Milky2018$selene$math$$Vec2D$update(new_pos.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const new_velocity = { val: velocity };
  const entities = Milky2018$selene$collision$$quadtree_query(ray_collision);
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$17$ };
  const _bind$12 = moonbitlang$core$set$$Set$iter$4$(entities);
  _bind$12((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      if (moonbitlang$core$builtin$$op_notequal$4$(e, entity)) {
        const _bind$13 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
        if (_bind$13 === undefined) {
          return 1;
        } else {
          const _Some = _bind$13;
          const _shape = _Some;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$14 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
          if (_bind$14 === undefined) {
            return 1;
          } else {
            const _Some$2 = _bind$14;
            const _pos = _Some$2;
            const _bind$15 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, e);
            if (_bind$15 === undefined) {
              return 1;
            } else {
              const _Some$3 = _bind$15;
              const _collision_layer = _Some$3;
              if (Milky2018$selene$collision$$CollisionMask$contains(mask, _collision_layer)) {
                const _bind$16 = { _0: _width, _1: _height };
                const _bind$17 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
                const collision_box = { position: _bind$17, size: _bind$16 };
                if (Milky2018$selene$math$$Rect$intersects(object, collision_box)) {
                  const movement = Milky2018$selene$collision$$aabb_resolve(object, collision_box);
                  const _p$429 = new_pos.val;
                  new_pos.val = { _0: _p$429._0 + movement._0, _1: _p$429._1 + movement._1 };
                  const dir = Milky2018$selene$math$$Vec2D$update({ _0: 0, _1: 0 }, axis, Milky2018$selene$math$$Vec2D$op_get(movement, axis) > 0 ? 1 : -1);
                  Milky2018$selene$collision$$add_collision_info(entity, e, dir);
                  _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$17$({ _0: new_pos.val, _1: movement });
                  return 0;
                }
                if (Milky2018$selene$math$$Rect$intersects(ray_collision, collision_box)) {
                  let dir = { _0: 0, _1: 0 };
                  if (Milky2018$selene$math$$Vec2D$op_get(new_velocity.val, axis) > 0) {
                    const _tmp$213 = new_pos.val;
                    const _p$429 = Milky2018$selene$math$$Vec2D$op_get(_bind$17, axis) - Milky2018$selene$math$$Vec2D$op_get(object.size, axis);
                    const _p$430 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                    new_pos.val = Milky2018$selene$math$$Vec2D$update(_tmp$213, axis, _p$429 > _p$430 ? _p$429 : _p$430);
                    new_velocity.val = Milky2018$selene$math$$Vec2D$update(new_velocity.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                    dir = Milky2018$selene$math$$Vec2D$update(dir, axis, 1);
                  } else {
                    if (Milky2018$selene$math$$Vec2D$op_get(new_velocity.val, axis) < 0) {
                      const _tmp$213 = new_pos.val;
                      const _p$429 = Milky2018$selene$math$$Vec2D$op_get(_bind$17, axis) + Milky2018$selene$math$$Vec2D$op_get(_bind$16, axis);
                      const _p$430 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                      new_pos.val = Milky2018$selene$math$$Vec2D$update(_tmp$213, axis, _p$429 > _p$430 ? _p$430 : _p$429);
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
  const _tmp$213 = _foreach_result.val;
  switch (_tmp$213.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp$213;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp$213;
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
  const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
  if (_bind$12 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$12;
    const _pos = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
    if (_bind$13 === undefined) {
      return $panic();
    } else {
      const _Some$2 = _bind$13;
      const _shape = _Some$2;
      const _Rect = _shape;
      const _x = _Rect._0;
      const _width = _x._0;
      const _height = _x._1;
      const _offset = _Rect._1;
      const _bind$14 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
      const _bind$15 = { _0: _width, _1: _height };
      const box = { position: _bind$14, size: _bind$15 };
      const new_x = Milky2018$selene$collision$$move_axis(e, box, velocity, 0, collider.mask);
      const _bind$16 = new_x._0;
      const object_x = { position: _bind$16, size: _bind$15 };
      const new_y = Milky2018$selene$collision$$move_axis(e, object_x, new_x._1, 1, collider.mask);
      const _p$429 = new_y._0;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, { _0: _p$429._0 - _offset._0, _1: _p$429._1 - _offset._1 });
      return new_y._1;
    }
  }
}
function Milky2018$selene$collision$$move_without_collide(e, velocity) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
  if (_bind$12 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$12;
    const _pos = _Some;
    const new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(_pos, 0) + Milky2018$selene$math$$Vec2D$op_get(velocity, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_pos, 1) + Milky2018$selene$math$$Vec2D$op_get(velocity, 1) };
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, new_pos);
    return;
  }
}
function Milky2018$selene$collision$$move_system(delta) {
  moonbitlang$core$builtin$$Map$clear$8$(Milky2018$selene$collision$$collision_infos);
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
  const _bind$12 = moonbitlang$core$builtin$$Map$iter2$7$(Milky2018$selene$velocity$$velocities);
  _bind$12((e, vel) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      _L: {
        _L$2: {
          const _bind$13 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$colliders, e);
          if (_bind$13 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$13;
            const _collide = _Some;
            if (_collide.active) {
              const new_vel = Milky2018$selene$collision$$move_with_collide(e, _collide, { _0: vel._0 * delta, _1: vel._1 * delta });
              moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$collision$$real_velocities, e, { _0: new_vel._0 / delta, _1: new_vel._1 / delta });
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        Milky2018$selene$collision$$move_without_collide(e, { _0: vel._0 * delta, _1: vel._1 * delta });
        moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$collision$$real_velocities, e, vel);
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp$213 = _foreach_result;
  switch (_tmp$213.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp$213;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp$213;
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
function Milky2018$selene$collision$$CollisionLayer$new() {
  const layer = Milky2018$selene$collision$$collision_layer_generator.val;
  Milky2018$selene$collision$$collision_layer_generator.val = (Milky2018$selene$collision$$collision_layer_generator.val >>> 0) + (1 >>> 0) | 0;
  return layer;
}
function Milky2018$selene$collision$$Collider$new(mask) {
  return { active: true, mask: mask };
}
function Milky2018$selene$collision$$get_collision_infos(entity) {
  return moonbitlang$core$option$$Option$unwrap_or_default$26$(moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity));
}
function Milky2018$selene$collision$$is_on_floor(entity) {
  const infos = Milky2018$selene$collision$$get_collision_infos(entity);
  const _len = infos.length;
  let _tmp$213 = 0;
  while (true) {
    const _i = _tmp$213;
    if (_i < _len) {
      const info = infos[_i];
      if (Milky2018$selene$math$$Vec2D$op_get(info.direction, 1) > 0) {
        return true;
      }
      _tmp$213 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function Milky2018$selene$collision$$area_collide_system(_delta) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$ };
  const _bind$12 = Milky2018$selene$system$$iter_entities();
  _bind$12((e) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$areas, e);
    if (_bind$13 === undefined) {
      return 1;
    } else {
      const _Some = _bind$13;
      const _area = _Some;
      const _bind$14 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
      if (_bind$14 === undefined) {
        $panic();
      } else {
        const _Some$2 = _bind$14;
        const _position = _Some$2;
        const _bind$15 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
        if (_bind$15 === undefined) {
          return 1;
        } else {
          const _Some$3 = _bind$15;
          const _shape = _Some$3;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$16 = { _0: _width, _1: _height };
          const _bind$17 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const box = { position: _bind$17, size: _bind$16 };
          const new_contains = moonbitlang$core$set$$Set$new$46$inner$4$(8);
          const entities = Milky2018$selene$collision$$quadtree_query(box);
          let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
          const _bind$18 = moonbitlang$core$set$$Set$iter$4$(entities);
          _bind$18((entity) => {
            if (Milky2018$selene$system$$Entity$is_alive(entity)) {
              const _bind$19 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, entity);
              if (_bind$19 === undefined) {
                return 1;
              } else {
                const _Some$4 = _bind$19;
                const _other_layer = _Some$4;
                const _bind$20 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, entity);
                if (_bind$20 === undefined) {
                  return 1;
                } else {
                  const _Some$5 = _bind$20;
                  const _other_shape = _Some$5;
                  const _Rect$2 = _other_shape;
                  const _x$2 = _Rect$2._0;
                  const _other_width = _x$2._0;
                  const _other_height = _x$2._1;
                  const _other_offset = _Rect$2._1;
                  const _bind$21 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, entity);
                  if (_bind$21 === undefined) {
                    $panic();
                  } else {
                    const _Some$6 = _bind$21;
                    const _other_position = _Some$6;
                    const _bind$22 = { _0: _other_width, _1: _other_height };
                    const _bind$23 = { _0: _other_position._0 + _other_offset._0, _1: _other_position._1 + _other_offset._1 };
                    const other_box = { position: _bind$23, size: _bind$22 };
                    if (Milky2018$selene$math$$Rect$intersects(box, other_box)) {
                      if (Milky2018$selene$collision$$CollisionMask$contains(_area.mask, _other_layer)) {
                        moonbitlang$core$set$$Set$add$4$(new_contains, entity);
                        if (moonbitlang$core$set$$Set$contains$4$(_area.contains, entity)) {
                          return 1;
                        }
                        const _arr = _area.on_enter_callbacks;
                        const _len = _arr.length;
                        let _tmp$213 = 0;
                        while (true) {
                          const _i = _tmp$213;
                          if (_i < _len) {
                            const callback = _arr[_i];
                            callback(entity);
                            _tmp$213 = _i + 1 | 0;
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
          const _tmp$213 = _foreach_result$2;
          switch (_tmp$213.$tag) {
            case 0: {
              break;
            }
            case 1: {
              const _break = _tmp$213;
              _break._0;
              break;
            }
            case 2: {
              const _return = _tmp$213;
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$16$(_return._0);
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
          let _foreach_result$3 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
          const _bind$19 = moonbitlang$core$set$$Set$iter$4$(_area.contains);
          _bind$19((entity) => {
            if (moonbitlang$core$set$$Set$contains$4$(new_contains, entity)) {
              return 1;
            }
            const _arr = _area.on_exit_callbacks;
            const _len = _arr.length;
            let _tmp$214 = 0;
            while (true) {
              const _i = _tmp$214;
              if (_i < _len) {
                const callback = _arr[_i];
                callback(entity);
                _tmp$214 = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            return 1;
          });
          const _tmp$214 = _foreach_result$3;
          switch (_tmp$214.$tag) {
            case 0: {
              break;
            }
            case 1: {
              const _break$2 = _tmp$214;
              _break$2._0;
              break;
            }
            case 2: {
              const _return$2 = _tmp$214;
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$16$(_return$2._0);
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
  const _tmp$213 = _foreach_result.val;
  switch (_tmp$213.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp$213;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp$213;
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
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$inputs$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$inputs$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0), _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
  moonbitlang$core$array$$Array$push$42$(_self, { _0: Milky2018$selene$system$$realtime_timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Realtime Timer System" });
}
function moonbitlang$core$json$$FromJson$from_json$45$(_x_61, _x_62) {
  let _de_tiles_65 = Option$None$18$;
  let _de_name_64 = undefined;
  let _de_collider_63 = -1;
  if (_x_61.$tag === 6) {
    const _Object = _x_61;
    const __map = _Object._0;
    const _bind$12 = moonbitlang$core$builtin$$Map$get$17$(__map, "name");
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const __v = _Some;
      const _p$429 = "name";
      const _bind$13 = moonbitlang$core$json$$FromJson$from_json$31$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_62, _p$429));
      let _tmp$213;
      if (_bind$13.$tag === 1) {
        const _ok = _bind$13;
        _tmp$213 = _ok._0;
      } else {
        return _bind$13;
      }
      _de_name_64 = _tmp$213;
    }
    const _bind$13 = moonbitlang$core$builtin$$Map$get$17$(__map, "tiles");
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const __v = _Some;
      const _p$429 = "tiles";
      const _bind$14 = moonbitlang$core$json$$FromJson$from_json$54$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_62, _p$429));
      let _tmp$213;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _tmp$213 = _ok._0;
      } else {
        return _bind$14;
      }
      _de_tiles_65 = new Option$Some$18$(_tmp$213);
    }
    const _bind$14 = moonbitlang$core$builtin$$Map$get$17$(__map, "collider");
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const __v = _Some;
      const _p$429 = "collider";
      const _bind$15 = moonbitlang$core$json$$FromJson$from_json$51$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_62, _p$429));
      let _tmp$213;
      if (_bind$15.$tag === 1) {
        const _ok = _bind$15;
        _tmp$213 = _ok._0;
      } else {
        return _bind$15;
      }
      _de_collider_63 = _tmp$213;
    }
  } else {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Expected object to deserialize TileLayer" }));
  }
  const _bind$12 = _de_tiles_65;
  let _de_tiles_65$2;
  if (_bind$12.$tag === 1) {
    const _Some = _bind$12;
    _de_tiles_65$2 = _Some._0;
  } else {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Missing field tiles" }));
  }
  const _bind$13 = _de_name_64;
  let _de_name_64$2;
  if (_bind$13 === undefined) {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Missing field name" }));
  } else {
    const _Some = _bind$13;
    _de_name_64$2 = _Some;
  }
  const _bind$14 = _de_collider_63;
  let _de_collider_63$2;
  if (_bind$14 === -1) {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Missing field collider" }));
  } else {
    _de_collider_63$2 = _bind$14;
  }
  return new Result$Ok$19$({ name: _de_name_64$2, tiles: _de_tiles_65$2, collider: _de_collider_63$2 });
}
function moonbitlang$core$json$$FromJson$from_json$52$(_x_36, _x_37) {
  let _de_tile_size_41 = undefined;
  let _de_map_width_40 = undefined;
  let _de_map_height_39 = undefined;
  let _de_layers_38 = Option$None$20$;
  if (_x_36.$tag === 6) {
    const _Object = _x_36;
    const __map = _Object._0;
    const _bind$12 = moonbitlang$core$builtin$$Map$get$17$(__map, "tileSize");
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const __v = _Some;
      const _p$429 = "tileSize";
      const _bind$13 = moonbitlang$core$json$$FromJson$from_json$16$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$429));
      let _tmp$213;
      if (_bind$13.$tag === 1) {
        const _ok = _bind$13;
        _tmp$213 = _ok._0;
      } else {
        return _bind$13;
      }
      _de_tile_size_41 = _tmp$213;
    }
    const _bind$13 = moonbitlang$core$builtin$$Map$get$17$(__map, "mapWidth");
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const __v = _Some;
      const _p$429 = "mapWidth";
      const _bind$14 = moonbitlang$core$json$$FromJson$from_json$16$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$429));
      let _tmp$213;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _tmp$213 = _ok._0;
      } else {
        return _bind$14;
      }
      _de_map_width_40 = _tmp$213;
    }
    const _bind$14 = moonbitlang$core$builtin$$Map$get$17$(__map, "mapHeight");
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const __v = _Some;
      const _p$429 = "mapHeight";
      const _bind$15 = moonbitlang$core$json$$FromJson$from_json$16$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$429));
      let _tmp$213;
      if (_bind$15.$tag === 1) {
        const _ok = _bind$15;
        _tmp$213 = _ok._0;
      } else {
        return _bind$15;
      }
      _de_map_height_39 = _tmp$213;
    }
    const _bind$15 = moonbitlang$core$builtin$$Map$get$17$(__map, "layers");
    if (_bind$15 === undefined) {
    } else {
      const _Some = _bind$15;
      const __v = _Some;
      const _p$429 = "layers";
      const _bind$16 = moonbitlang$core$json$$FromJson$from_json$53$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$429));
      let _tmp$213;
      if (_bind$16.$tag === 1) {
        const _ok = _bind$16;
        _tmp$213 = _ok._0;
      } else {
        return _bind$16;
      }
      _de_layers_38 = new Option$Some$20$(_tmp$213);
    }
  } else {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Expected object to deserialize TileMap" }));
  }
  const _bind$12 = _de_tile_size_41;
  let _de_tile_size_41$2;
  if (_bind$12 === undefined) {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field tile_size" }));
  } else {
    const _Some = _bind$12;
    _de_tile_size_41$2 = _Some;
  }
  const _bind$13 = _de_map_width_40;
  let _de_map_width_40$2;
  if (_bind$13 === undefined) {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field map_width" }));
  } else {
    const _Some = _bind$13;
    _de_map_width_40$2 = _Some;
  }
  const _bind$14 = _de_map_height_39;
  let _de_map_height_39$2;
  if (_bind$14 === undefined) {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field map_height" }));
  } else {
    const _Some = _bind$14;
    _de_map_height_39$2 = _Some;
  }
  const _bind$15 = _de_layers_38;
  let _de_layers_38$2;
  if (_bind$15.$tag === 1) {
    const _Some = _bind$15;
    _de_layers_38$2 = _Some._0;
  } else {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field layers" }));
  }
  return new Result$Ok$21$({ tile_size: _de_tile_size_41$2, map_width: _de_map_width_40$2, map_height: _de_map_height_39$2, layers: _de_layers_38$2 });
}
function moonbitlang$core$json$$FromJson$from_json$29$(_x_16, _x_17) {
  let _de_y_20 = undefined;
  let _de_x_19 = undefined;
  let _de_id_18 = undefined;
  if (_x_16.$tag === 6) {
    const _Object = _x_16;
    const __map = _Object._0;
    const _bind$12 = moonbitlang$core$builtin$$Map$get$17$(__map, "id");
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const __v = _Some;
      const _p$429 = "id";
      const _bind$13 = moonbitlang$core$json$$FromJson$from_json$31$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_17, _p$429));
      let _tmp$213;
      if (_bind$13.$tag === 1) {
        const _ok = _bind$13;
        _tmp$213 = _ok._0;
      } else {
        return _bind$13;
      }
      _de_id_18 = _tmp$213;
    }
    const _bind$13 = moonbitlang$core$builtin$$Map$get$17$(__map, "x");
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const __v = _Some;
      const _p$429 = "x";
      const _bind$14 = moonbitlang$core$json$$FromJson$from_json$16$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_17, _p$429));
      let _tmp$213;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _tmp$213 = _ok._0;
      } else {
        return _bind$14;
      }
      _de_x_19 = _tmp$213;
    }
    const _bind$14 = moonbitlang$core$builtin$$Map$get$17$(__map, "y");
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const __v = _Some;
      const _p$429 = "y";
      const _bind$15 = moonbitlang$core$json$$FromJson$from_json$16$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_17, _p$429));
      let _tmp$213;
      if (_bind$15.$tag === 1) {
        const _ok = _bind$15;
        _tmp$213 = _ok._0;
      } else {
        return _bind$15;
      }
      _de_y_20 = _tmp$213;
    }
  } else {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Expected object to deserialize Tile" }));
  }
  const _bind$12 = _de_y_20;
  let _de_y_20$2;
  if (_bind$12 === undefined) {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Missing field y" }));
  } else {
    const _Some = _bind$12;
    _de_y_20$2 = _Some;
  }
  const _bind$13 = _de_x_19;
  let _de_x_19$2;
  if (_bind$13 === undefined) {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Missing field x" }));
  } else {
    const _Some = _bind$13;
    _de_x_19$2 = _Some;
  }
  const _bind$14 = _de_id_18;
  let _de_id_18$2;
  if (_bind$14 === undefined) {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Missing field id" }));
  } else {
    const _Some = _bind$14;
    _de_id_18$2 = _Some;
  }
  return new Result$Ok$22$({ id: _de_id_18$2, x: _de_x_19$2, y: _de_y_20$2 });
}
function Milky2018$selene$tilemap$$TileMap$from_json(json) {
  let _try_err;
  _L: {
    const _bind$12 = moonbitlang$core$json$$from_json$52$(json, undefined);
    if (_bind$12.$tag === 1) {
      const _ok = _bind$12;
      return _ok._0;
    } else {
      const _err = _bind$12;
      const _tmp$213 = _err._0;
      _try_err = _tmp$213;
      break _L;
    }
  }
  return $panic();
}
function Milky2018$selene$tilemap$$TileMap$get_tiles(self, layer_name) {
  const _p$429 = self.layers;
  const _p$430 = [];
  const _p$431 = _p$429.length;
  let _tmp$213 = 0;
  while (true) {
    const _p$432 = _tmp$213;
    if (_p$432 < _p$431) {
      const _p$433 = _p$429[_p$432];
      if (_p$433.name === layer_name) {
        moonbitlang$core$array$$Array$push$45$(_p$430, _p$433);
      }
      _tmp$213 = _p$432 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return moonbitlang$core$option$$Option$map_or$24$(moonbitlang$core$array$$Array$get$45$(_p$430, 0), [], (layer) => layer.tiles);
}
function Milky2018$selene$tilemap$$TileMap$get_tiles_first(self, layer_name) {
  const _p$429 = self.layers;
  const _p$430 = [];
  const _p$431 = _p$429.length;
  let _tmp$213 = 0;
  while (true) {
    const _p$432 = _tmp$213;
    if (_p$432 < _p$431) {
      const _p$433 = _p$429[_p$432];
      if (_p$433.name === layer_name) {
        moonbitlang$core$array$$Array$push$45$(_p$430, _p$433);
      }
      _tmp$213 = _p$432 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const layer = moonbitlang$core$array$$Array$get$45$(_p$430, 0);
  if (layer === undefined) {
    return [];
  } else {
    const _Some = layer;
    const _layer = _Some;
    const tiles = _layer.tiles;
    const _p$432 = new Array(tiles.length);
    const _p$433 = tiles.length;
    let _tmp$214 = 0;
    while (true) {
      const _p$434 = _tmp$214;
      if (_p$434 < _p$433) {
        const _p$435 = tiles[_p$434];
        _p$432[_p$434] = _p$435.id;
        _tmp$214 = _p$434 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const all_ids = _p$432;
    const leftcorder_id = moonbitlang$core$array$$Array$at$31$(all_ids, 0);
    const _p$434 = [];
    const _p$435 = tiles.length;
    let _tmp$215 = 0;
    while (true) {
      const _p$436 = _tmp$215;
      if (_p$436 < _p$435) {
        const _p$437 = tiles[_p$436];
        if (_p$437.id === leftcorder_id) {
          moonbitlang$core$array$$Array$push$29$(_p$434, _p$437);
        }
        _tmp$215 = _p$436 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$434;
  }
}
function username$meow_knight$$add_player(pos) {
  const player_sprite = Milky2018$selene$sprite$$Sprite$from_animation(username$meow_knight$$player_idle_animation, 10, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, username$meow_knight$$game_state.player, player_sprite);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, username$meow_knight$$game_state.player, { _0: 0, _1: 0 });
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, username$meow_knight$$game_state.player, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, username$meow_knight$$game_state.player, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 120, _1: 80 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, username$meow_knight$$game_state.player, username$meow_knight$$player_collision_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, username$meow_knight$$game_state.player, Milky2018$selene$collision$$Collider$new([username$meow_knight$$terrain_collision_layer, username$meow_knight$$enemy_collision_layer]));
  Milky2018$selene$camera$$attach_entity(username$meow_knight$$game_state.player, { _0: 16, _1: 16 });
}
function username$meow_knight$$player_collision_system(_delta) {
  if (username$meow_knight$$game_state.hurt_timer > 0) {
    username$meow_knight$$game_state.hurt_timer = username$meow_knight$$game_state.hurt_timer - 1;
  }
  Milky2018$selene$collision$$get_collision_infos(username$meow_knight$$game_state.player);
}
function username$meow_knight$$player_state_system(delta) {
  const _p$429 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$collision$$real_velocities, username$meow_knight$$game_state.player);
  const _p$430 = { _0: 0, _1: 0 };
  let velocity;
  if (_p$429 === undefined) {
    velocity = _p$430;
  } else {
    const _p$431 = _p$429;
    velocity = _p$431;
  }
  let new_velocity_x = Milky2018$selene$math$$Vec2D$op_get(velocity, 0);
  let new_velocity_y = Milky2018$selene$math$$Vec2D$op_get(velocity, 1);
  const _bind$12 = username$meow_knight$$game_state.player_state;
  let _tmp$213;
  if (_bind$12 === 2) {
    _tmp$213 = true;
  } else {
    _tmp$213 = false;
  }
  if (!_tmp$213) {
    if (Milky2018$selene$inputs$$is_pressed(28)) {
      new_velocity_x = new_velocity_x - 3600 * delta;
      if (new_velocity_x < -240) {
        new_velocity_x = -240;
      }
      username$meow_knight$$game_state.direction = 0;
    } else {
      if (Milky2018$selene$inputs$$is_pressed(29)) {
        new_velocity_x = new_velocity_x + 3600 * delta;
        if (new_velocity_x > 240) {
          new_velocity_x = 240;
        }
        username$meow_knight$$game_state.direction = 1;
      } else {
        new_velocity_x = 0;
      }
    }
  }
  const _bind$13 = username$meow_knight$$game_state.direction;
  let transform;
  if (_bind$13 === 0) {
    transform = Milky2018$selene$math$$Transform$flip_x(32);
  } else {
    transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  }
  const _bind$14 = username$meow_knight$$game_state.player_state;
  switch (_bind$14) {
    case 0: {
      Milky2018$selene$sprite$$play_animation$46$inner(username$meow_knight$$game_state.player, username$meow_knight$$player_attack_animation, false, -1, Option$None$0$, transform);
      if (Milky2018$selene$sprite$$is_animation_finished(username$meow_knight$$game_state.player)) {
        username$meow_knight$$game_state.player_state = 1;
      }
      break;
    }
    case 1: {
      if (Milky2018$selene$math$$Vec2D$op_get(velocity, 0) === 0) {
        Milky2018$selene$sprite$$play_animation$46$inner(username$meow_knight$$game_state.player, username$meow_knight$$player_idle_animation, false, -1, Option$None$0$, transform);
      } else {
        Milky2018$selene$sprite$$play_animation$46$inner(username$meow_knight$$game_state.player, username$meow_knight$$player_run_animation, false, -1, Option$None$0$, transform);
      }
      if (Milky2018$selene$math$$Vec2D$op_get(velocity, 1) > 0) {
        username$meow_knight$$game_state.player_state = 4;
      }
      if (Milky2018$selene$inputs$$is_just_pressed(26) && Milky2018$selene$collision$$is_on_floor(username$meow_knight$$game_state.player)) {
        new_velocity_y = -680;
        username$meow_knight$$game_state.player_state = 3;
        if (username$meow_knight$$game_state.volume_on) {
          Milky2018$selene$audio$$play_audio$46$inner("sounds/jump.wav", 1, false);
        }
      }
      if (Milky2018$selene$inputs$$is_just_pressed(27)) {
        username$meow_knight$$game_state.player_state = 0;
        if (username$meow_knight$$game_state.volume_on) {
          Milky2018$selene$audio$$play_audio$46$inner("sounds/hurt.wav", 1, false);
        }
      }
      break;
    }
    case 4: {
      Milky2018$selene$sprite$$play_animation$46$inner(username$meow_knight$$game_state.player, username$meow_knight$$player_fall_animation, false, -1, Option$None$0$, transform);
      if (Milky2018$selene$collision$$is_on_floor(username$meow_knight$$game_state.player)) {
        username$meow_knight$$game_state.player_state = 1;
      }
      break;
    }
    case 3: {
      Milky2018$selene$sprite$$play_animation$46$inner(username$meow_knight$$game_state.player, username$meow_knight$$player_jump_animation, false, -1, Option$None$0$, transform);
      if (Milky2018$selene$math$$Vec2D$op_get(velocity, 1) > 0) {
        username$meow_knight$$game_state.player_state = 4;
      }
      break;
    }
    default: {
      Milky2018$selene$sprite$$play_animation$46$inner(username$meow_knight$$game_state.player, username$meow_knight$$player_hit_animation, false, -1, Option$None$0$, transform);
      if (Milky2018$selene$collision$$is_on_floor(username$meow_knight$$game_state.player)) {
        new_velocity_x = 0;
      }
      if (Milky2018$selene$sprite$$is_animation_finished(username$meow_knight$$game_state.player)) {
        if (Milky2018$selene$collision$$is_on_floor(username$meow_knight$$game_state.player)) {
          username$meow_knight$$game_state.player_state = 1;
        } else {
          if (Milky2018$selene$math$$Vec2D$op_get(velocity, 1) < 0) {
            username$meow_knight$$game_state.player_state = 4;
          } else {
            username$meow_knight$$game_state.player_state = 3;
          }
        }
      }
    }
  }
  new_velocity_y = new_velocity_y + 1800 * delta;
  if (new_velocity_y > 900) {
    new_velocity_y = 900;
  }
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, username$meow_knight$$game_state.player, { _0: new_velocity_x, _1: new_velocity_y });
}
function username$meow_knight$$add_grass(pos, sprite_id) {
  let src_pos;
  switch (sprite_id) {
    case "0": {
      src_pos = { _0: 0, _1: 0 };
      break;
    }
    case "1": {
      src_pos = { _0: 16, _1: 0 };
      break;
    }
    case "2": {
      src_pos = { _0: 32, _1: 0 };
      break;
    }
    default: {
      src_pos = $panic();
    }
  }
  const sprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$single_frame("sprite_fusion/spritesheet.png", { _0: 16, _1: 16 }, undefined, src_pos), 10, undefined);
  const grass = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, grass, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, grass, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, grass, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 16, _1: 16 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, grass, username$meow_knight$$terrain_collision_layer);
}
function username$meow_knight$$tile_to_vec2d(tile, tile_size) {
  return { _0: (tile.x + 0) * (tile_size + 0), _1: (tile.y + 0) * (tile_size + 0) };
}
function username$meow_knight$$generate_map() {
  const tilemap = Milky2018$selene$tilemap$$TileMap$from_json(username$meow_knight$$tilemap);
  const world_width = (tilemap.map_width + 0) * (tilemap.tile_size + 0);
  const world_height = (tilemap.map_height + 0) * (tilemap.tile_size + 0);
  Milky2018$selene$camera$$set_limits(new Option$Some$0$(0), new Option$Some$0$(world_height), new Option$Some$0$(0), new Option$Some$0$(world_width));
  const mask_dude = moonbitlang$core$array$$Array$at$29$(Milky2018$selene$tilemap$$TileMap$get_tiles_first(tilemap, "Role"), 0);
  username$meow_knight$$add_player(username$meow_knight$$tile_to_vec2d(mask_dude, tilemap.tile_size));
  const grasses = Milky2018$selene$tilemap$$TileMap$get_tiles(tilemap, "Grass");
  const _len = grasses.length;
  let _tmp$213 = 0;
  while (true) {
    const _i = _tmp$213;
    if (_i < _len) {
      const grass = grasses[_i];
      username$meow_knight$$add_grass(username$meow_knight$$tile_to_vec2d(grass, tilemap.tile_size), grass.id);
      _tmp$213 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function username$meow_knight$$game_start(_delta) {
  username$meow_knight$$generate_map();
}
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_zoom(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_image_smooth(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new(), 480), 320), false), 120), 2), Milky2018$selene$plugins$$default_plugin), username$meow_knight$$game_start, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), username$meow_knight$$player_state_system, undefined, undefined), username$meow_knight$$player_collision_system, undefined, undefined));
})();
