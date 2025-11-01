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
const moonbitlang$core$builtin$$random_seed = () => {
  if (crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
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
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
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
const nopublish$pixeladventure$$new_game_state$46$42$bind$124$379 = "new_game";
const Milky2018$selene$inputs$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
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
const Milky2018$selene$system$$all_entities = moonbitlang$core$set$$Set$new$46$inner$3$(8);
const Milky2018$selene$collision$$pickables = moonbitlang$core$builtin$$Map$new$46$inner$4$(8);
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
const moonbitlang$core$double$$neg_infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370496L);
const moonbitlang$core$double$$infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405312L);
const nopublish$pixeladventure$$birds = moonbitlang$core$builtin$$Map$new$46$inner$16$(8);
const Milky2018$selene$sprite$$animation_generator = moonbitlang$core$ref$$Ref$new$17$(0);
const nopublish$pixeladventure$$bird_fly_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("assets/Background/Purple.png", 9, 6, 6, undefined, Option$None$0$), true, new Option$Some$0$(12), undefined);
const nopublish$pixeladventure$$enemy_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const nopublish$pixeladventure$$terrain_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const _bind$8 = [{ x: 77, y: 79, color: "#3300ffff", revealed: false, matched: false }, { x: 77, y: 91, color: "#00ff73ff", revealed: false, matched: false }, { x: 77, y: 102, color: "#3300ffff", revealed: false, matched: false }, { x: 88, y: 79, color: "#00ff73ff", revealed: false, matched: false }, { x: 88, y: 91, color: "#3300ffff", revealed: false, matched: false }, { x: 88, y: 102, color: "#3300ffff", revealed: false, matched: false }, { x: 99, y: 79, color: "#00ff73ff", revealed: false, matched: false }, { x: 99, y: 91, color: "#3300ffff", revealed: false, matched: false }, { x: 99, y: 102, color: "#00ff73ff", revealed: false, matched: false }, { x: 110, y: 79, color: "#00ff73ff", revealed: false, matched: false }, { x: 110, y: 91, color: "#3300ffff", revealed: false, matched: false }, { x: 110, y: 102, color: "#00ff73ff", revealed: false, matched: false }];
const _bind$9 = [{ x: 77, y: 79, color: "#3300ffff", revealed: false, matched: false }, { x: 77, y: 91, color: "#00ff73ff", revealed: false, matched: false }, { x: 77, y: 102, color: "#3300ffff", revealed: false, matched: false }, { x: 88, y: 79, color: "#00ff73ff", revealed: false, matched: false }, { x: 88, y: 91, color: "#3300ffff", revealed: false, matched: false }, { x: 88, y: 102, color: "#3300ffff", revealed: false, matched: false }, { x: 99, y: 79, color: "#00ff73ff", revealed: false, matched: false }, { x: 99, y: 91, color: "#3300ffff", revealed: false, matched: false }, { x: 99, y: 102, color: "#00ff73ff", revealed: false, matched: false }, { x: 110, y: 79, color: "#00ff73ff", revealed: false, matched: false }, { x: 110, y: 91, color: "#3300ffff", revealed: false, matched: false }, { x: 110, y: 102, color: "#00ff73ff", revealed: false, matched: false }];
const _bind$10 = [{ x: 77, y: 79, color: "#fff", revealed: false, matched: false }, { x: 77, y: 91, color: "#fff", revealed: false, matched: false }, { x: 77, y: 102, color: "#fff", revealed: false, matched: false }, { x: 88, y: 79, color: "#fff", revealed: false, matched: false }, { x: 88, y: 91, color: "#fff", revealed: false, matched: false }, { x: 88, y: 102, color: "#fff", revealed: false, matched: false }, { x: 99, y: 79, color: "#fff", revealed: false, matched: false }, { x: 99, y: 91, color: "#fff", revealed: false, matched: false }, { x: 99, y: 102, color: "#fff", revealed: false, matched: false }, { x: 110, y: 79, color: "#fff", revealed: false, matched: false }, { x: 110, y: 91, color: "#fff", revealed: false, matched: false }, { x: 110, y: 102, color: "#fff", revealed: false, matched: false }];
const _bind$11 = [{ x: 77, y: 79, color: "#fff", revealed: false, matched: false }, { x: 77, y: 91, color: "#fff", revealed: false, matched: false }, { x: 77, y: 102, color: "#fff", revealed: false, matched: false }, { x: 88, y: 79, color: "#fff", revealed: false, matched: false }, { x: 88, y: 91, color: "#fff", revealed: false, matched: false }, { x: 88, y: 102, color: "#fff", revealed: false, matched: false }, { x: 99, y: 79, color: "#fff", revealed: false, matched: false }, { x: 99, y: 91, color: "#fff", revealed: false, matched: false }, { x: 99, y: 102, color: "#fff", revealed: false, matched: false }, { x: 110, y: 79, color: "#fff", revealed: false, matched: false }, { x: 110, y: 91, color: "#fff", revealed: false, matched: false }, { x: 110, y: 102, color: "#fff", revealed: false, matched: false }];
const _bind$12 = [{ x: 20, y: 149, color: "#3300ffff", revealed: false, matched: false }, { x: 20, y: 160, color: "#00ff73ff", revealed: false, matched: false }, { x: 20, y: 171, color: "#00ff73ff", revealed: false, matched: false }, { x: 31, y: 149, color: "#3300ffff", revealed: false, matched: false }, { x: 31, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 31, y: 171, color: "#3300ffff", revealed: false, matched: false }, { x: 42, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 42, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 42, y: 171, color: "#00ff73ff", revealed: false, matched: false }, { x: 53, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 53, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 53, y: 171, color: "#00ff73ff", revealed: false, matched: false }];
const _bind$13 = [{ x: 80, y: 149, color: "#3300ffff", revealed: false, matched: false }, { x: 80, y: 160, color: "#00ff73ff", revealed: false, matched: false }, { x: 80, y: 171, color: "#3300ffff", revealed: false, matched: false }, { x: 91, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 91, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 91, y: 171, color: "#3300ffff", revealed: false, matched: false }, { x: 102, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 102, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 102, y: 171, color: "#00ff73ff", revealed: false, matched: false }, { x: 113, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 113, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 113, y: 171, color: "#00ff73ff", revealed: false, matched: false }];
const _bind$14 = [{ x: 140, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 140, y: 160, color: "#00ff73ff", revealed: false, matched: false }, { x: 140, y: 171, color: "#3300ffff", revealed: false, matched: false }, { x: 151, y: 149, color: "#3300ffff", revealed: false, matched: false }, { x: 151, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 151, y: 171, color: "#3300ffff", revealed: false, matched: false }, { x: 162, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 162, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 162, y: 171, color: "#00ff73ff", revealed: false, matched: false }, { x: 173, y: 149, color: "#00ff73ff", revealed: false, matched: false }, { x: 173, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 173, y: 171, color: "#00ff73ff", revealed: false, matched: false }];
const _bind$15 = [{ x: 130, y: 160, color: "#3300ffff", revealed: false, matched: false }, { x: 130, y: 171, color: "#3300ffff", revealed: false, matched: false }, { x: 141, y: 160, color: "#00ff73ff", revealed: false, matched: false }, { x: 141, y: 171, color: "#00ff73ff", revealed: false, matched: false }];
const _bind$16 = [];
const _bind$17 = Milky2018$selene$sprite$$Text$new$46$inner("Time: 0", "#c28d06ff", "20px ThaleahFat");
const _bind$18 = Milky2018$selene$sprite$$Text$new$46$inner("Time: 3", "red", "20px ThaleahFat");
const _bind$19 = Milky2018$selene$sprite$$Text$new$46$inner("Steinway Sons", "#e28c0aff", "40px ThaleahFat");
const _bind$20 = Milky2018$selene$sprite$$Text$new$46$inner("Change: 0", "#c28d06ff", "20px ThaleahFat");
const _bind$21 = Milky2018$selene$sprite$$Text$new$46$inner("Show flopped!", "#d81111ff", "30px ThaleahFat");
const _bind$22 = Milky2018$selene$sprite$$Text$new$46$inner("Level: 1", "white", "20px ThaleahFat");
const _bind$23 = Milky2018$selene$sprite$$Text$new$46$inner("A", "#c28d06ff", "20px ThaleahFat");
const _bind$24 = Milky2018$selene$sprite$$Text$new$46$inner("B", "#c28d06ff", "20px ThaleahFat");
const _bind$25 = Milky2018$selene$sprite$$Text$new$46$inner("C", "#c28d06ff", "20px ThaleahFat");
const _bind$26 = Milky2018$selene$sprite$$Text$new$46$inner("D", "#c28d06ff", "20px ThaleahFat");
const _bind$27 = Milky2018$selene$sprite$$Text$new$46$inner("E", "#c28d06ff", "20px ThaleahFat");
const _bind$28 = Milky2018$selene$sprite$$Text$new$46$inner("F", "#c28d06ff", "20px ThaleahFat");
const _bind$29 = Milky2018$selene$sprite$$Text$new$46$inner("G", "#c28d06ff", "20px ThaleahFat");
const _bind$30 = Milky2018$selene$sprite$$Text$new$46$inner("H", "#c28d06ff", "20px ThaleahFat");
const _bind$31 = Milky2018$selene$sprite$$Text$new$46$inner("I", "#c28d06ff", "20px ThaleahFat");
const _bind$32 = Milky2018$selene$sprite$$Text$new$46$inner("J", "#c28d06ff", "20px ThaleahFat");
const _bind$33 = Milky2018$selene$sprite$$Text$new$46$inner("A", "#000000", "20px ThaleahFat");
const _bind$34 = Milky2018$selene$sprite$$Text$new$46$inner("B", "#000000", "20px ThaleahFat");
const _bind$35 = Milky2018$selene$sprite$$Text$new$46$inner("C", "#000000", "20px ThaleahFat");
const _bind$36 = Milky2018$selene$sprite$$Text$new$46$inner("D", "#000000", "20px ThaleahFat");
const _bind$37 = Milky2018$selene$sprite$$Text$new$46$inner("E", "#000000", "20px ThaleahFat");
const _bind$38 = Milky2018$selene$sprite$$Text$new$46$inner("F", "#000000", "20px ThaleahFat");
const _bind$39 = Milky2018$selene$sprite$$Text$new$46$inner("G", "#000000", "20px ThaleahFat");
const _bind$40 = Milky2018$selene$sprite$$Text$new$46$inner("H", "#000000", "20px ThaleahFat");
const _bind$41 = Milky2018$selene$sprite$$Text$new$46$inner("I", "#000000", "20px ThaleahFat");
const _bind$42 = Milky2018$selene$sprite$$Text$new$46$inner("J", "#000000", "20px ThaleahFat");
const _bind$43 = Milky2018$selene$sprite$$Text$new$46$inner("Performance done!", "#63870bff", "30px ThaleahFat");
const nopublish$pixeladventure$$new_game_state = { blocks: _bind$8, new_blocks: _bind$9, new_blocks1: _bind$10, new_blocks2: _bind$11, select_one_blocks: _bind$12, select_two_blocks: _bind$13, score: 0, select_three_blocks: _bind$14, select_four_blocks: _bind$15, selected_blocks: _bind$16, game_state: nopublish$pixeladventure$$new_game_state$46$42$bind$124$379, timer_box: _bind$17, timer1_box: _bind$18, timer: 0, timer1: 3, alert_box: _bind$19, score_box: _bind$20, change: 0, click: 0, failed_box: _bind$21, level: 1, level_box: _bind$22, a_box: _bind$23, b_box: _bind$24, c_box: _bind$25, d_box: _bind$26, e_box: _bind$27, f_box: _bind$28, g_box: _bind$29, h_box: _bind$30, i_box: _bind$31, j_box: _bind$32, a1_box: _bind$33, b1_box: _bind$34, c1_box: _bind$35, d1_box: _bind$36, e1_box: _bind$37, f1_box: _bind$38, g1_box: _bind$39, h1_box: _bind$40, i1_box: _bind$41, j1_box: _bind$42, mouse_load: true, gameStarted: false, gameReStarted: true, latestLevel: 1, success_box: _bind$43, x: 10, y: 10, fi: 0 };
const _p = 20;
const _p$2 = undefined;
const _tmp = { _0: "tileSize", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p, _p$2) };
const _p$3 = 35;
const _p$4 = undefined;
const _tmp$2 = { _0: "mapWidth", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3, _p$4) };
const _p$5 = 35;
const _p$6 = undefined;
const _tmp$3 = { _0: "mapHeight", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$5, _p$6) };
const _p$7 = "Bird";
const _tmp$4 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$7) };
const _p$8 = "29";
const _tmp$5 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$8) };
const _p$9 = 15;
const _p$10 = undefined;
const _tmp$6 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$9, _p$10) };
const _p$11 = 3;
const _p$12 = undefined;
const _p$13 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$5, _tmp$6, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$11, _p$12) }]);
const _tmp$7 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$13);
const _p$14 = "30";
const _tmp$8 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$14) };
const _p$15 = 16;
const _p$16 = undefined;
const _tmp$9 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$15, _p$16) };
const _p$17 = 3;
const _p$18 = undefined;
const _p$19 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$8, _tmp$9, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$17, _p$18) }]);
const _tmp$10 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$19);
const _p$20 = "31";
const _tmp$11 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$20) };
const _p$21 = 15;
const _p$22 = undefined;
const _tmp$12 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$21, _p$22) };
const _p$23 = 4;
const _p$24 = undefined;
const _p$25 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$11, _tmp$12, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$23, _p$24) }]);
const _tmp$13 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$25);
const _p$26 = "32";
const _tmp$14 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$26) };
const _p$27 = 16;
const _p$28 = undefined;
const _tmp$15 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$27, _p$28) };
const _p$29 = 4;
const _p$30 = undefined;
const _p$31 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$14, _tmp$15, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$29, _p$30) }]);
const _tmp$16 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$31);
const _p$32 = "29";
const _tmp$17 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$32) };
const _p$33 = 47;
const _p$34 = undefined;
const _tmp$18 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$33, _p$34) };
const _p$35 = 13;
const _p$36 = undefined;
const _p$37 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$17, _tmp$18, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$35, _p$36) }]);
const _tmp$19 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$37);
const _p$38 = "30";
const _tmp$20 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$38) };
const _p$39 = 48;
const _p$40 = undefined;
const _tmp$21 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$39, _p$40) };
const _p$41 = 13;
const _p$42 = undefined;
const _p$43 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$20, _tmp$21, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$41, _p$42) }]);
const _tmp$22 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$43);
const _p$44 = "31";
const _tmp$23 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$44) };
const _p$45 = 47;
const _p$46 = undefined;
const _tmp$24 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$45, _p$46) };
const _p$47 = 14;
const _p$48 = undefined;
const _p$49 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$23, _tmp$24, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$47, _p$48) }]);
const _tmp$25 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$49);
const _p$50 = "32";
const _tmp$26 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$50) };
const _p$51 = 48;
const _p$52 = undefined;
const _tmp$27 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$51, _p$52) };
const _p$53 = 14;
const _p$54 = undefined;
const _p$55 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$26, _tmp$27, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$53, _p$54) }]);
const _p$56 = [_tmp$7, _tmp$10, _tmp$13, _tmp$16, _tmp$19, _tmp$22, _tmp$25, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$55)];
const _tmp$28 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$56) };
const _p$57 = false;
const _p$58 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$4, _tmp$28, { _0: "collider", _1: _p$57 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _tmp$29 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$58);
const _p$59 = "Ball";
const _tmp$30 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$59) };
const _p$60 = "29";
const _tmp$31 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$60) };
const _p$61 = 15;
const _p$62 = undefined;
const _tmp$32 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$61, _p$62) };
const _p$63 = 3;
const _p$64 = undefined;
const _p$65 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$31, _tmp$32, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$63, _p$64) }]);
const _tmp$33 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$65);
const _p$66 = "30";
const _tmp$34 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$66) };
const _p$67 = 16;
const _p$68 = undefined;
const _tmp$35 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$67, _p$68) };
const _p$69 = 3;
const _p$70 = undefined;
const _p$71 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$34, _tmp$35, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$69, _p$70) }]);
const _tmp$36 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$71);
const _p$72 = "31";
const _tmp$37 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$72) };
const _p$73 = 15;
const _p$74 = undefined;
const _tmp$38 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$73, _p$74) };
const _p$75 = 4;
const _p$76 = undefined;
const _p$77 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$37, _tmp$38, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$75, _p$76) }]);
const _tmp$39 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$77);
const _p$78 = "32";
const _tmp$40 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$78) };
const _p$79 = 16;
const _p$80 = undefined;
const _tmp$41 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$79, _p$80) };
const _p$81 = 4;
const _p$82 = undefined;
const _p$83 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$40, _tmp$41, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$81, _p$82) }]);
const _tmp$42 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$83);
const _p$84 = "29";
const _tmp$43 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$84) };
const _p$85 = 47;
const _p$86 = undefined;
const _tmp$44 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$85, _p$86) };
const _p$87 = 13;
const _p$88 = undefined;
const _p$89 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$43, _tmp$44, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$87, _p$88) }]);
const _tmp$45 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$89);
const _p$90 = "30";
const _tmp$46 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$90) };
const _p$91 = 48;
const _p$92 = undefined;
const _tmp$47 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$91, _p$92) };
const _p$93 = 13;
const _p$94 = undefined;
const _p$95 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$46, _tmp$47, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$93, _p$94) }]);
const _tmp$48 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$95);
const _p$96 = "31";
const _tmp$49 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$96) };
const _p$97 = 47;
const _p$98 = undefined;
const _tmp$50 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$97, _p$98) };
const _p$99 = 14;
const _p$100 = undefined;
const _p$101 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$49, _tmp$50, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$99, _p$100) }]);
const _tmp$51 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$101);
const _p$102 = "32";
const _tmp$52 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$102) };
const _p$103 = 48;
const _p$104 = undefined;
const _tmp$53 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$103, _p$104) };
const _p$105 = 14;
const _p$106 = undefined;
const _p$107 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$52, _tmp$53, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$105, _p$106) }]);
const _p$108 = [_tmp$33, _tmp$36, _tmp$39, _tmp$42, _tmp$45, _tmp$48, _tmp$51, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$107)];
const _tmp$54 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$108) };
const _p$109 = false;
const _p$110 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$30, _tmp$54, { _0: "collider", _1: _p$109 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _tmp$55 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$110);
const _p$111 = "MaskDude";
const _tmp$56 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$111) };
const _p$112 = "0";
const _tmp$57 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$112) };
const _p$113 = 5;
const _p$114 = undefined;
const _tmp$58 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$113, _p$114) };
const _p$115 = 31;
const _p$116 = undefined;
const _p$117 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$57, _tmp$58, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$115, _p$116) }]);
const _tmp$59 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$117);
const _p$118 = "1";
const _tmp$60 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$118) };
const _p$119 = 6;
const _p$120 = undefined;
const _tmp$61 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$119, _p$120) };
const _p$121 = 31;
const _p$122 = undefined;
const _p$123 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$60, _tmp$61, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$121, _p$122) }]);
const _tmp$62 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$123);
const _p$124 = "2";
const _tmp$63 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$124) };
const _p$125 = 5;
const _p$126 = undefined;
const _tmp$64 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$125, _p$126) };
const _p$127 = 32;
const _p$128 = undefined;
const _p$129 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$63, _tmp$64, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$127, _p$128) }]);
const _tmp$65 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$129);
const _p$130 = "3";
const _tmp$66 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$130) };
const _p$131 = 6;
const _p$132 = undefined;
const _tmp$67 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$131, _p$132) };
const _p$133 = 32;
const _p$134 = undefined;
const _p$135 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$66, _tmp$67, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$133, _p$134) }]);
const _p$136 = [_tmp$59, _tmp$62, _tmp$65, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$135)];
const _tmp$68 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$136) };
const _p$137 = false;
const _p$138 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$56, _tmp$68, { _0: "collider", _1: _p$137 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _tmp$69 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$138);
const _p$139 = "Apple";
const _tmp$70 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$139) };
const _p$140 = "17";
const _tmp$71 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$140) };
const _p$141 = 10;
const _p$142 = undefined;
const _tmp$72 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$141, _p$142) };
const _p$143 = 24;
const _p$144 = undefined;
const _p$145 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$71, _tmp$72, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$143, _p$144) }]);
const _tmp$73 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$145);
const _p$146 = "18";
const _tmp$74 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$146) };
const _p$147 = 11;
const _p$148 = undefined;
const _tmp$75 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$147, _p$148) };
const _p$149 = 24;
const _p$150 = undefined;
const _p$151 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$74, _tmp$75, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$149, _p$150) }]);
const _tmp$76 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$151);
const _p$152 = "19";
const _tmp$77 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$152) };
const _p$153 = 10;
const _p$154 = undefined;
const _tmp$78 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$153, _p$154) };
const _p$155 = 25;
const _p$156 = undefined;
const _p$157 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$77, _tmp$78, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$155, _p$156) }]);
const _tmp$79 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$157);
const _p$158 = "20";
const _tmp$80 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$158) };
const _p$159 = 11;
const _p$160 = undefined;
const _tmp$81 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$159, _p$160) };
const _p$161 = 25;
const _p$162 = undefined;
const _p$163 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$80, _tmp$81, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$161, _p$162) }]);
const _tmp$82 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$163);
const _p$164 = "17";
const _tmp$83 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$164) };
const _p$165 = 28;
const _p$166 = undefined;
const _tmp$84 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$165, _p$166) };
const _p$167 = 24;
const _p$168 = undefined;
const _p$169 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$83, _tmp$84, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$167, _p$168) }]);
const _tmp$85 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$169);
const _p$170 = "18";
const _tmp$86 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$170) };
const _p$171 = 29;
const _p$172 = undefined;
const _tmp$87 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$171, _p$172) };
const _p$173 = 24;
const _p$174 = undefined;
const _p$175 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$86, _tmp$87, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$173, _p$174) }]);
const _tmp$88 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$175);
const _p$176 = "19";
const _tmp$89 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$176) };
const _p$177 = 28;
const _p$178 = undefined;
const _tmp$90 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$177, _p$178) };
const _p$179 = 25;
const _p$180 = undefined;
const _p$181 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$89, _tmp$90, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$179, _p$180) }]);
const _tmp$91 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$181);
const _p$182 = "20";
const _tmp$92 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$182) };
const _p$183 = 29;
const _p$184 = undefined;
const _tmp$93 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$183, _p$184) };
const _p$185 = 25;
const _p$186 = undefined;
const _p$187 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$92, _tmp$93, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$185, _p$186) }]);
const _tmp$94 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$187);
const _p$188 = "17";
const _tmp$95 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$188) };
const _p$189 = 46;
const _p$190 = undefined;
const _tmp$96 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$189, _p$190) };
const _p$191 = 24;
const _p$192 = undefined;
const _p$193 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$95, _tmp$96, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$191, _p$192) }]);
const _tmp$97 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$193);
const _p$194 = "18";
const _tmp$98 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$194) };
const _p$195 = 47;
const _p$196 = undefined;
const _tmp$99 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$195, _p$196) };
const _p$197 = 24;
const _p$198 = undefined;
const _p$199 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$98, _tmp$99, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$197, _p$198) }]);
const _tmp$100 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$199);
const _p$200 = "19";
const _tmp$101 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$200) };
const _p$201 = 46;
const _p$202 = undefined;
const _tmp$102 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$201, _p$202) };
const _p$203 = 25;
const _p$204 = undefined;
const _p$205 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$101, _tmp$102, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$203, _p$204) }]);
const _tmp$103 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$205);
const _p$206 = "20";
const _tmp$104 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$206) };
const _p$207 = 47;
const _p$208 = undefined;
const _tmp$105 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$207, _p$208) };
const _p$209 = 25;
const _p$210 = undefined;
const _p$211 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$104, _tmp$105, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$209, _p$210) }]);
const _tmp$106 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$211);
const _p$212 = "17";
const _tmp$107 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$212) };
const _p$213 = 53;
const _p$214 = undefined;
const _tmp$108 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$213, _p$214) };
const _p$215 = 31;
const _p$216 = undefined;
const _p$217 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$107, _tmp$108, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$215, _p$216) }]);
const _tmp$109 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$217);
const _p$218 = "18";
const _tmp$110 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$218) };
const _p$219 = 54;
const _p$220 = undefined;
const _tmp$111 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$219, _p$220) };
const _p$221 = 31;
const _p$222 = undefined;
const _p$223 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$110, _tmp$111, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$221, _p$222) }]);
const _tmp$112 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$223);
const _p$224 = "19";
const _tmp$113 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$224) };
const _p$225 = 53;
const _p$226 = undefined;
const _tmp$114 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$225, _p$226) };
const _p$227 = 32;
const _p$228 = undefined;
const _p$229 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$113, _tmp$114, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$227, _p$228) }]);
const _tmp$115 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$229);
const _p$230 = "20";
const _tmp$116 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$230) };
const _p$231 = 54;
const _p$232 = undefined;
const _tmp$117 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$231, _p$232) };
const _p$233 = 32;
const _p$234 = undefined;
const _p$235 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$116, _tmp$117, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$233, _p$234) }]);
const _tmp$118 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$235);
const _p$236 = "17";
const _tmp$119 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$236) };
const _p$237 = 19;
const _p$238 = undefined;
const _tmp$120 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$237, _p$238) };
const _p$239 = 6;
const _p$240 = undefined;
const _p$241 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$119, _tmp$120, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$239, _p$240) }]);
const _tmp$121 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$241);
const _p$242 = "18";
const _tmp$122 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$242) };
const _p$243 = 20;
const _p$244 = undefined;
const _tmp$123 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$243, _p$244) };
const _p$245 = 6;
const _p$246 = undefined;
const _p$247 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$122, _tmp$123, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$245, _p$246) }]);
const _tmp$124 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$247);
const _p$248 = "19";
const _tmp$125 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$248) };
const _p$249 = 19;
const _p$250 = undefined;
const _tmp$126 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$249, _p$250) };
const _p$251 = 7;
const _p$252 = undefined;
const _p$253 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$125, _tmp$126, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$251, _p$252) }]);
const _tmp$127 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$253);
const _p$254 = "20";
const _tmp$128 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$254) };
const _p$255 = 20;
const _p$256 = undefined;
const _tmp$129 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$255, _p$256) };
const _p$257 = 7;
const _p$258 = undefined;
const _p$259 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$128, _tmp$129, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$257, _p$258) }]);
const _tmp$130 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$259);
const _p$260 = "17";
const _tmp$131 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$260) };
const _p$261 = 53;
const _p$262 = undefined;
const _tmp$132 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$261, _p$262) };
const _p$263 = 13;
const _p$264 = undefined;
const _p$265 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$131, _tmp$132, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$263, _p$264) }]);
const _tmp$133 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$265);
const _p$266 = "18";
const _tmp$134 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$266) };
const _p$267 = 54;
const _p$268 = undefined;
const _tmp$135 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$267, _p$268) };
const _p$269 = 13;
const _p$270 = undefined;
const _p$271 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$134, _tmp$135, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$269, _p$270) }]);
const _tmp$136 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$271);
const _p$272 = "19";
const _tmp$137 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$272) };
const _p$273 = 53;
const _p$274 = undefined;
const _tmp$138 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$273, _p$274) };
const _p$275 = 14;
const _p$276 = undefined;
const _p$277 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$137, _tmp$138, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$275, _p$276) }]);
const _tmp$139 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$277);
const _p$278 = "20";
const _tmp$140 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$278) };
const _p$279 = 54;
const _p$280 = undefined;
const _tmp$141 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$279, _p$280) };
const _p$281 = 14;
const _p$282 = undefined;
const _p$283 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$140, _tmp$141, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$281, _p$282) }]);
const _tmp$142 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$283);
const _p$284 = "17";
const _tmp$143 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$284) };
const _p$285 = 28;
const _p$286 = undefined;
const _tmp$144 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$285, _p$286) };
const _p$287 = 13;
const _p$288 = undefined;
const _p$289 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$143, _tmp$144, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$287, _p$288) }]);
const _tmp$145 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$289);
const _p$290 = "18";
const _tmp$146 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$290) };
const _p$291 = 29;
const _p$292 = undefined;
const _tmp$147 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$291, _p$292) };
const _p$293 = 13;
const _p$294 = undefined;
const _p$295 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$146, _tmp$147, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$293, _p$294) }]);
const _tmp$148 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$295);
const _p$296 = "19";
const _tmp$149 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$296) };
const _p$297 = 28;
const _p$298 = undefined;
const _tmp$150 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$297, _p$298) };
const _p$299 = 14;
const _p$300 = undefined;
const _p$301 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$149, _tmp$150, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$299, _p$300) }]);
const _tmp$151 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$301);
const _p$302 = "20";
const _tmp$152 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$302) };
const _p$303 = 29;
const _p$304 = undefined;
const _tmp$153 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$303, _p$304) };
const _p$305 = 14;
const _p$306 = undefined;
const _p$307 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$152, _tmp$153, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$305, _p$306) }]);
const _p$308 = [_tmp$73, _tmp$76, _tmp$79, _tmp$82, _tmp$85, _tmp$88, _tmp$91, _tmp$94, _tmp$97, _tmp$100, _tmp$103, _tmp$106, _tmp$109, _tmp$112, _tmp$115, _tmp$118, _tmp$121, _tmp$124, _tmp$127, _tmp$130, _tmp$133, _tmp$136, _tmp$139, _tmp$142, _tmp$145, _tmp$148, _tmp$151, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$307)];
const _tmp$154 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$308) };
const _p$309 = false;
const _p$310 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$70, _tmp$154, { _0: "collider", _1: _p$309 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _tmp$155 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$310);
const _p$311 = "Flag";
const _tmp$156 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$311) };
const _p$312 = "22";
const _tmp$157 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$312) };
const _p$313 = 5;
const _p$314 = undefined;
const _tmp$158 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$313, _p$314) };
const _p$315 = 6;
const _p$316 = undefined;
const _p$317 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$157, _tmp$158, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$315, _p$316) }]);
const _tmp$159 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$317);
const _p$318 = "23";
const _tmp$160 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$318) };
const _p$319 = 6;
const _p$320 = undefined;
const _tmp$161 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$319, _p$320) };
const _p$321 = 6;
const _p$322 = undefined;
const _p$323 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$160, _tmp$161, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$321, _p$322) }]);
const _tmp$162 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$323);
const _p$324 = "25";
const _tmp$163 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$324) };
const _p$325 = 5;
const _p$326 = undefined;
const _tmp$164 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$325, _p$326) };
const _p$327 = 7;
const _p$328 = undefined;
const _p$329 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$163, _tmp$164, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$327, _p$328) }]);
const _tmp$165 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$329);
const _p$330 = "26";
const _tmp$166 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$330) };
const _p$331 = 6;
const _p$332 = undefined;
const _tmp$167 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$331, _p$332) };
const _p$333 = 7;
const _p$334 = undefined;
const _p$335 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$166, _tmp$167, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$333, _p$334) }]);
const _tmp$168 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$335);
const _p$336 = "28";
const _tmp$169 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$336) };
const _p$337 = 5;
const _p$338 = undefined;
const _tmp$170 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$337, _p$338) };
const _p$339 = 8;
const _p$340 = undefined;
const _p$341 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$169, _tmp$170, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$339, _p$340) }]);
const _tmp$171 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$341);
const _p$342 = "21";
const _tmp$172 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$342) };
const _p$343 = 6;
const _p$344 = undefined;
const _tmp$173 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$343, _p$344) };
const _p$345 = 8;
const _p$346 = undefined;
const _p$347 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$172, _tmp$173, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$345, _p$346) }]);
const _p$348 = [_tmp$159, _tmp$162, _tmp$165, _tmp$168, _tmp$171, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$347)];
const _tmp$174 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$348) };
const _p$349 = false;
const _p$350 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$156, _tmp$174, { _0: "collider", _1: _p$349 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _tmp$175 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$350);
const _p$351 = "Grass";
const _tmp$176 = { _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$351) };
const _p$352 = "11";
const _tmp$177 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$352) };
const _p$353 = 0;
const _p$354 = undefined;
const _tmp$178 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$353, _p$354) };
const _p$355 = 4;
const _p$356 = undefined;
const _p$357 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$177, _tmp$178, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$355, _p$356) }]);
const _tmp$179 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$357);
const _p$358 = "10";
const _tmp$180 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$358) };
const _p$359 = 2;
const _p$360 = undefined;
const _tmp$181 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$359, _p$360) };
const _p$361 = 4;
const _p$362 = undefined;
const _p$363 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$180, _tmp$181, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$361, _p$362) }]);
const _tmp$182 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$363);
const _p$364 = "11";
const _tmp$183 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$364) };
const _p$365 = 0;
const _p$366 = undefined;
const _tmp$184 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$365, _p$366) };
const _p$367 = 5;
const _p$368 = undefined;
const _p$369 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$183, _tmp$184, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$367, _p$368) }]);
const _tmp$185 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$369);
const _p$370 = "10";
const _tmp$186 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$370) };
const _p$371 = 2;
const _p$372 = undefined;
const _tmp$187 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$371, _p$372) };
const _p$373 = 5;
const _p$374 = undefined;
const _p$375 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$186, _tmp$187, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$373, _p$374) }]);
const _tmp$188 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$375);
const _p$376 = "11";
const _tmp$189 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$376) };
const _p$377 = 0;
const _p$378 = undefined;
const _tmp$190 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$377, _p$378) };
const _p$379 = 6;
const _p$380 = undefined;
const _p$381 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$189, _tmp$190, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$379, _p$380) }]);
const _tmp$191 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$381);
const _p$382 = "11";
const _tmp$192 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$382) };
const _p$383 = 0;
const _p$384 = undefined;
const _tmp$193 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$383, _p$384) };
const _p$385 = 7;
const _p$386 = undefined;
const _p$387 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$192, _tmp$193, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$385, _p$386) }]);
const _tmp$194 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$387);
const _p$388 = "11";
const _tmp$195 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$388) };
const _p$389 = 0;
const _p$390 = undefined;
const _tmp$196 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$389, _p$390) };
const _p$391 = 8;
const _p$392 = undefined;
const _p$393 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$195, _tmp$196, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$391, _p$392) }]);
const _tmp$197 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$393);
const _p$394 = "11";
const _tmp$198 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$394) };
const _p$395 = 0;
const _p$396 = undefined;
const _tmp$199 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$395, _p$396) };
const _p$397 = 9;
const _p$398 = undefined;
const _p$399 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$198, _tmp$199, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$397, _p$398) }]);
const _tmp$200 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$399);
const _p$400 = "11";
const _tmp$201 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$400) };
const _p$401 = 0;
const _p$402 = undefined;
const _tmp$202 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$401, _p$402) };
const _p$403 = 10;
const _p$404 = undefined;
const _p$405 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$201, _tmp$202, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$403, _p$404) }]);
const _tmp$203 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$405);
const _p$406 = "11";
const _tmp$204 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$406) };
const _p$407 = 0;
const _p$408 = undefined;
const _tmp$205 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$407, _p$408) };
const _p$409 = 11;
const _p$410 = undefined;
const _p$411 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$204, _tmp$205, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$409, _p$410) }]);
const _tmp$206 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$411);
const _p$412 = "11";
const _tmp$207 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$412) };
const _p$413 = 0;
const _p$414 = undefined;
const _tmp$208 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$413, _p$414) };
const _p$415 = 12;
const _p$416 = undefined;
const _p$417 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$207, _tmp$208, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$415, _p$416) }]);
const _tmp$209 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$417);
const _p$418 = "11";
const _tmp$210 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$418) };
const _p$419 = 0;
const _p$420 = undefined;
const _tmp$211 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$419, _p$420) };
const _p$421 = 13;
const _p$422 = undefined;
const _p$423 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$210, _tmp$211, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$421, _p$422) }]);
const _tmp$212 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$423);
const _p$424 = "11";
const _tmp$213 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$424) };
const _p$425 = 0;
const _p$426 = undefined;
const _tmp$214 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$425, _p$426) };
const _p$427 = 14;
const _p$428 = undefined;
const _p$429 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$213, _tmp$214, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$427, _p$428) }]);
const _tmp$215 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$429);
const _p$430 = "11";
const _tmp$216 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$430) };
const _p$431 = 0;
const _p$432 = undefined;
const _tmp$217 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$431, _p$432) };
const _p$433 = 15;
const _p$434 = undefined;
const _p$435 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$216, _tmp$217, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$433, _p$434) }]);
const _tmp$218 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$435);
const _p$436 = "11";
const _tmp$219 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$436) };
const _p$437 = 0;
const _p$438 = undefined;
const _tmp$220 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$437, _p$438) };
const _p$439 = 16;
const _p$440 = undefined;
const _p$441 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$219, _tmp$220, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$439, _p$440) }]);
const _tmp$221 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$441);
const _p$442 = "11";
const _tmp$222 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$442) };
const _p$443 = 0;
const _p$444 = undefined;
const _tmp$223 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$443, _p$444) };
const _p$445 = 17;
const _p$446 = undefined;
const _p$447 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$222, _tmp$223, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$445, _p$446) }]);
const _tmp$224 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$447);
const _p$448 = "11";
const _tmp$225 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$448) };
const _p$449 = 0;
const _p$450 = undefined;
const _tmp$226 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$449, _p$450) };
const _p$451 = 18;
const _p$452 = undefined;
const _p$453 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$225, _tmp$226, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$451, _p$452) }]);
const _tmp$227 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$453);
const _p$454 = "11";
const _tmp$228 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$454) };
const _p$455 = 0;
const _p$456 = undefined;
const _tmp$229 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$455, _p$456) };
const _p$457 = 19;
const _p$458 = undefined;
const _p$459 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$228, _tmp$229, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$457, _p$458) }]);
const _tmp$230 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$459);
const _p$460 = "11";
const _tmp$231 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$460) };
const _p$461 = 0;
const _p$462 = undefined;
const _tmp$232 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$461, _p$462) };
const _p$463 = 20;
const _p$464 = undefined;
const _p$465 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$231, _tmp$232, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$463, _p$464) }]);
const _tmp$233 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$465);
const _p$466 = "11";
const _tmp$234 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$466) };
const _p$467 = 0;
const _p$468 = undefined;
const _tmp$235 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$467, _p$468) };
const _p$469 = 21;
const _p$470 = undefined;
const _p$471 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$234, _tmp$235, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$469, _p$470) }]);
const _tmp$236 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$471);
const _p$472 = "11";
const _tmp$237 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$472) };
const _p$473 = 0;
const _p$474 = undefined;
const _tmp$238 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$473, _p$474) };
const _p$475 = 22;
const _p$476 = undefined;
const _p$477 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$237, _tmp$238, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$475, _p$476) }]);
const _tmp$239 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$477);
const _p$478 = "11";
const _tmp$240 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$478) };
const _p$479 = 0;
const _p$480 = undefined;
const _tmp$241 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$479, _p$480) };
const _p$481 = 23;
const _p$482 = undefined;
const _p$483 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$240, _tmp$241, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$481, _p$482) }]);
const _tmp$242 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$483);
const _p$484 = "11";
const _tmp$243 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$484) };
const _p$485 = 0;
const _p$486 = undefined;
const _tmp$244 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$485, _p$486) };
const _p$487 = 24;
const _p$488 = undefined;
const _p$489 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$243, _tmp$244, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$487, _p$488) }]);
const _tmp$245 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$489);
const _p$490 = "11";
const _tmp$246 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$490) };
const _p$491 = 0;
const _p$492 = undefined;
const _tmp$247 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$491, _p$492) };
const _p$493 = 25;
const _p$494 = undefined;
const _p$495 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$246, _tmp$247, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$493, _p$494) }]);
const _tmp$248 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$495);
const _p$496 = "11";
const _tmp$249 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$496) };
const _p$497 = 0;
const _p$498 = undefined;
const _tmp$250 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$497, _p$498) };
const _p$499 = 26;
const _p$500 = undefined;
const _p$501 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$249, _tmp$250, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$499, _p$500) }]);
const _tmp$251 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$501);
const _p$502 = "11";
const _tmp$252 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$502) };
const _p$503 = 0;
const _p$504 = undefined;
const _tmp$253 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$503, _p$504) };
const _p$505 = 27;
const _p$506 = undefined;
const _p$507 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$252, _tmp$253, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$505, _p$506) }]);
const _tmp$254 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$507);
const _p$508 = "11";
const _tmp$255 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$508) };
const _p$509 = 0;
const _p$510 = undefined;
const _tmp$256 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$509, _p$510) };
const _p$511 = 28;
const _p$512 = undefined;
const _p$513 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$255, _tmp$256, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$511, _p$512) }]);
const _tmp$257 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$513);
const _p$514 = "11";
const _tmp$258 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$514) };
const _p$515 = 0;
const _p$516 = undefined;
const _tmp$259 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$515, _p$516) };
const _p$517 = 29;
const _p$518 = undefined;
const _p$519 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$258, _tmp$259, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$517, _p$518) }]);
const _tmp$260 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$519);
const _p$520 = "11";
const _tmp$261 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$520) };
const _p$521 = 0;
const _p$522 = undefined;
const _tmp$262 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$521, _p$522) };
const _p$523 = 30;
const _p$524 = undefined;
const _p$525 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$261, _tmp$262, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$523, _p$524) }]);
const _tmp$263 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$525);
const _p$526 = "11";
const _tmp$264 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$526) };
const _p$527 = 0;
const _p$528 = undefined;
const _tmp$265 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$527, _p$528) };
const _p$529 = 31;
const _p$530 = undefined;
const _p$531 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$264, _tmp$265, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$529, _p$530) }]);
const _tmp$266 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$531);
const _p$532 = "13";
const _tmp$267 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$532) };
const _p$533 = 1;
const _p$534 = undefined;
const _tmp$268 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$533, _p$534) };
const _p$535 = 4;
const _p$536 = undefined;
const _p$537 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$267, _tmp$268, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$535, _p$536) }]);
const _tmp$269 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$537);
const _p$538 = "13";
const _tmp$270 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$538) };
const _p$539 = 1;
const _p$540 = undefined;
const _tmp$271 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$539, _p$540) };
const _p$541 = 5;
const _p$542 = undefined;
const _p$543 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$270, _tmp$271, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$541, _p$542) }]);
const _tmp$272 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$543);
const _p$544 = "13";
const _tmp$273 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$544) };
const _p$545 = 1;
const _p$546 = undefined;
const _tmp$274 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$545, _p$546) };
const _p$547 = 12;
const _p$548 = undefined;
const _p$549 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$273, _tmp$274, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$547, _p$548) }]);
const _tmp$275 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$549);
const _p$550 = "13";
const _tmp$276 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$550) };
const _p$551 = 1;
const _p$552 = undefined;
const _tmp$277 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$551, _p$552) };
const _p$553 = 13;
const _p$554 = undefined;
const _p$555 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$276, _tmp$277, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$553, _p$554) }]);
const _tmp$278 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$555);
const _p$556 = "13";
const _tmp$279 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$556) };
const _p$557 = 1;
const _p$558 = undefined;
const _tmp$280 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$557, _p$558) };
const _p$559 = 14;
const _p$560 = undefined;
const _p$561 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$279, _tmp$280, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$559, _p$560) }]);
const _tmp$281 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$561);
const _p$562 = "13";
const _tmp$282 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$562) };
const _p$563 = 1;
const _p$564 = undefined;
const _tmp$283 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$563, _p$564) };
const _p$565 = 15;
const _p$566 = undefined;
const _p$567 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$282, _tmp$283, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$565, _p$566) }]);
const _tmp$284 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$567);
const _p$568 = "13";
const _tmp$285 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$568) };
const _p$569 = 1;
const _p$570 = undefined;
const _tmp$286 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$569, _p$570) };
const _p$571 = 16;
const _p$572 = undefined;
const _p$573 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$285, _tmp$286, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$571, _p$572) }]);
const _tmp$287 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$573);
const _p$574 = "13";
const _tmp$288 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$574) };
const _p$575 = 1;
const _p$576 = undefined;
const _tmp$289 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$575, _p$576) };
const _p$577 = 17;
const _p$578 = undefined;
const _p$579 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$288, _tmp$289, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$577, _p$578) }]);
const _tmp$290 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$579);
const _p$580 = "13";
const _tmp$291 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$580) };
const _p$581 = 1;
const _p$582 = undefined;
const _tmp$292 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$581, _p$582) };
const _p$583 = 18;
const _p$584 = undefined;
const _p$585 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$291, _tmp$292, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$583, _p$584) }]);
const _tmp$293 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$585);
const _p$586 = "13";
const _tmp$294 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$586) };
const _p$587 = 1;
const _p$588 = undefined;
const _tmp$295 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$587, _p$588) };
const _p$589 = 19;
const _p$590 = undefined;
const _p$591 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$294, _tmp$295, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$589, _p$590) }]);
const _tmp$296 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$591);
const _p$592 = "13";
const _tmp$297 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$592) };
const _p$593 = 1;
const _p$594 = undefined;
const _tmp$298 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$593, _p$594) };
const _p$595 = 20;
const _p$596 = undefined;
const _p$597 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$297, _tmp$298, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$595, _p$596) }]);
const _tmp$299 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$597);
const _p$598 = "13";
const _tmp$300 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$598) };
const _p$599 = 1;
const _p$600 = undefined;
const _tmp$301 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$599, _p$600) };
const _p$601 = 21;
const _p$602 = undefined;
const _p$603 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$300, _tmp$301, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$601, _p$602) }]);
const _tmp$302 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$603);
const _p$604 = "13";
const _tmp$303 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$604) };
const _p$605 = 1;
const _p$606 = undefined;
const _tmp$304 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$605, _p$606) };
const _p$607 = 22;
const _p$608 = undefined;
const _p$609 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$303, _tmp$304, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$607, _p$608) }]);
const _tmp$305 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$609);
const _p$610 = "13";
const _tmp$306 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$610) };
const _p$611 = 1;
const _p$612 = undefined;
const _tmp$307 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$611, _p$612) };
const _p$613 = 23;
const _p$614 = undefined;
const _p$615 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$306, _tmp$307, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$613, _p$614) }]);
const _tmp$308 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$615);
const _p$616 = "13";
const _tmp$309 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$616) };
const _p$617 = 1;
const _p$618 = undefined;
const _tmp$310 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$617, _p$618) };
const _p$619 = 24;
const _p$620 = undefined;
const _p$621 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$309, _tmp$310, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$619, _p$620) }]);
const _tmp$311 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$621);
const _p$622 = "13";
const _tmp$312 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$622) };
const _p$623 = 1;
const _p$624 = undefined;
const _tmp$313 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$623, _p$624) };
const _p$625 = 25;
const _p$626 = undefined;
const _p$627 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$312, _tmp$313, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$625, _p$626) }]);
const _tmp$314 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$627);
const _p$628 = "13";
const _tmp$315 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$628) };
const _p$629 = 1;
const _p$630 = undefined;
const _tmp$316 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$629, _p$630) };
const _p$631 = 26;
const _p$632 = undefined;
const _p$633 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$315, _tmp$316, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$631, _p$632) }]);
const _tmp$317 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$633);
const _p$634 = "13";
const _tmp$318 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$634) };
const _p$635 = 1;
const _p$636 = undefined;
const _tmp$319 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$635, _p$636) };
const _p$637 = 27;
const _p$638 = undefined;
const _p$639 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$318, _tmp$319, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$637, _p$638) }]);
const _tmp$320 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$639);
const _p$640 = "13";
const _tmp$321 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$640) };
const _p$641 = 1;
const _p$642 = undefined;
const _tmp$322 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$641, _p$642) };
const _p$643 = 28;
const _p$644 = undefined;
const _p$645 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$321, _tmp$322, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$643, _p$644) }]);
const _tmp$323 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$645);
const _p$646 = "13";
const _tmp$324 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$646) };
const _p$647 = 1;
const _p$648 = undefined;
const _tmp$325 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$647, _p$648) };
const _p$649 = 29;
const _p$650 = undefined;
const _p$651 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$324, _tmp$325, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$649, _p$650) }]);
const _tmp$326 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$651);
const _p$652 = "13";
const _tmp$327 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$652) };
const _p$653 = 1;
const _p$654 = undefined;
const _tmp$328 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$653, _p$654) };
const _p$655 = 30;
const _p$656 = undefined;
const _p$657 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$327, _tmp$328, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$655, _p$656) }]);
const _tmp$329 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$657);
const _p$658 = "13";
const _tmp$330 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$658) };
const _p$659 = 1;
const _p$660 = undefined;
const _tmp$331 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$659, _p$660) };
const _p$661 = 31;
const _p$662 = undefined;
const _p$663 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$330, _tmp$331, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$661, _p$662) }]);
const _tmp$332 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$663);
const _p$664 = "11";
const _tmp$333 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$664) };
const _p$665 = 0;
const _p$666 = undefined;
const _tmp$334 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$665, _p$666) };
const _p$667 = 32;
const _p$668 = undefined;
const _p$669 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$333, _tmp$334, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$667, _p$668) }]);
const _tmp$335 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$669);
const _p$670 = "13";
const _tmp$336 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$670) };
const _p$671 = 1;
const _p$672 = undefined;
const _tmp$337 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$671, _p$672) };
const _p$673 = 32;
const _p$674 = undefined;
const _p$675 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$336, _tmp$337, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$673, _p$674) }]);
const _tmp$338 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$675);
const _p$676 = "11";
const _tmp$339 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$676) };
const _p$677 = 0;
const _p$678 = undefined;
const _tmp$340 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$677, _p$678) };
const _p$679 = 33;
const _p$680 = undefined;
const _p$681 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$339, _tmp$340, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$679, _p$680) }]);
const _tmp$341 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$681);
const _p$682 = "13";
const _tmp$342 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$682) };
const _p$683 = 1;
const _p$684 = undefined;
const _tmp$343 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$683, _p$684) };
const _p$685 = 33;
const _p$686 = undefined;
const _p$687 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$342, _tmp$343, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$685, _p$686) }]);
const _tmp$344 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$687);
const _p$688 = "11";
const _tmp$345 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$688) };
const _p$689 = 0;
const _p$690 = undefined;
const _tmp$346 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$689, _p$690) };
const _p$691 = 34;
const _p$692 = undefined;
const _p$693 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$345, _tmp$346, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$691, _p$692) }]);
const _tmp$347 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$693);
const _p$694 = "14";
const _tmp$348 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$694) };
const _p$695 = 0;
const _p$696 = undefined;
const _tmp$349 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$695, _p$696) };
const _p$697 = 35;
const _p$698 = undefined;
const _p$699 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$348, _tmp$349, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$697, _p$698) }]);
const _tmp$350 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$699);
const _p$700 = "8";
const _tmp$351 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$700) };
const _p$701 = 1;
const _p$702 = undefined;
const _tmp$352 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$701, _p$702) };
const _p$703 = 35;
const _p$704 = undefined;
const _p$705 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$351, _tmp$352, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$703, _p$704) }]);
const _tmp$353 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$705);
const _p$706 = "8";
const _tmp$354 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$706) };
const _p$707 = 2;
const _p$708 = undefined;
const _tmp$355 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$707, _p$708) };
const _p$709 = 35;
const _p$710 = undefined;
const _p$711 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$354, _tmp$355, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$709, _p$710) }]);
const _tmp$356 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$711);
const _p$712 = "8";
const _tmp$357 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$712) };
const _p$713 = 3;
const _p$714 = undefined;
const _tmp$358 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$713, _p$714) };
const _p$715 = 35;
const _p$716 = undefined;
const _p$717 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$357, _tmp$358, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$715, _p$716) }]);
const _tmp$359 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$717);
const _p$718 = "8";
const _tmp$360 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$718) };
const _p$719 = 4;
const _p$720 = undefined;
const _tmp$361 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$719, _p$720) };
const _p$721 = 35;
const _p$722 = undefined;
const _p$723 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$360, _tmp$361, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$721, _p$722) }]);
const _tmp$362 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$723);
const _p$724 = "8";
const _tmp$363 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$724) };
const _p$725 = 5;
const _p$726 = undefined;
const _tmp$364 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$725, _p$726) };
const _p$727 = 35;
const _p$728 = undefined;
const _p$729 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$363, _tmp$364, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$727, _p$728) }]);
const _tmp$365 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$729);
const _p$730 = "8";
const _tmp$366 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$730) };
const _p$731 = 6;
const _p$732 = undefined;
const _tmp$367 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$731, _p$732) };
const _p$733 = 35;
const _p$734 = undefined;
const _p$735 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$366, _tmp$367, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$733, _p$734) }]);
const _tmp$368 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$735);
const _p$736 = "8";
const _tmp$369 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$736) };
const _p$737 = 7;
const _p$738 = undefined;
const _tmp$370 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$737, _p$738) };
const _p$739 = 35;
const _p$740 = undefined;
const _p$741 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$369, _tmp$370, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$739, _p$740) }]);
const _tmp$371 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$741);
const _p$742 = "8";
const _tmp$372 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$742) };
const _p$743 = 8;
const _p$744 = undefined;
const _tmp$373 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$743, _p$744) };
const _p$745 = 35;
const _p$746 = undefined;
const _p$747 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$372, _tmp$373, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$745, _p$746) }]);
const _tmp$374 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$747);
const _p$748 = "8";
const _tmp$375 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$748) };
const _p$749 = 9;
const _p$750 = undefined;
const _tmp$376 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$749, _p$750) };
const _p$751 = 35;
const _p$752 = undefined;
const _p$753 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$375, _tmp$376, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$751, _p$752) }]);
const _tmp$377 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$753);
const _p$754 = "8";
const _tmp$378 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$754) };
const _p$755 = 10;
const _p$756 = undefined;
const _tmp$379 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$755, _p$756) };
const _p$757 = 35;
const _p$758 = undefined;
const _p$759 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$378, _tmp$379, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$757, _p$758) }]);
const _tmp$380 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$759);
const _p$760 = "8";
const _tmp$381 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$760) };
const _p$761 = 11;
const _p$762 = undefined;
const _tmp$382 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$761, _p$762) };
const _p$763 = 35;
const _p$764 = undefined;
const _p$765 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$381, _tmp$382, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$763, _p$764) }]);
const _tmp$383 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$765);
const _p$766 = "8";
const _tmp$384 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$766) };
const _p$767 = 12;
const _p$768 = undefined;
const _tmp$385 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$767, _p$768) };
const _p$769 = 35;
const _p$770 = undefined;
const _p$771 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$384, _tmp$385, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$769, _p$770) }]);
const _tmp$386 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$771);
const _p$772 = "8";
const _tmp$387 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$772) };
const _p$773 = 13;
const _p$774 = undefined;
const _tmp$388 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$773, _p$774) };
const _p$775 = 35;
const _p$776 = undefined;
const _p$777 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$387, _tmp$388, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$775, _p$776) }]);
const _tmp$389 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$777);
const _p$778 = "8";
const _tmp$390 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$778) };
const _p$779 = 14;
const _p$780 = undefined;
const _tmp$391 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$779, _p$780) };
const _p$781 = 35;
const _p$782 = undefined;
const _p$783 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$390, _tmp$391, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$781, _p$782) }]);
const _tmp$392 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$783);
const _p$784 = "8";
const _tmp$393 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$784) };
const _p$785 = 15;
const _p$786 = undefined;
const _tmp$394 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$785, _p$786) };
const _p$787 = 35;
const _p$788 = undefined;
const _p$789 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$393, _tmp$394, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$787, _p$788) }]);
const _tmp$395 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$789);
const _p$790 = "8";
const _tmp$396 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$790) };
const _p$791 = 16;
const _p$792 = undefined;
const _tmp$397 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$791, _p$792) };
const _p$793 = 35;
const _p$794 = undefined;
const _p$795 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$396, _tmp$397, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$793, _p$794) }]);
const _tmp$398 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$795);
const _p$796 = "8";
const _tmp$399 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$796) };
const _p$797 = 17;
const _p$798 = undefined;
const _tmp$400 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$797, _p$798) };
const _p$799 = 35;
const _p$800 = undefined;
const _p$801 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$399, _tmp$400, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$799, _p$800) }]);
const _tmp$401 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$801);
const _p$802 = "8";
const _tmp$402 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$802) };
const _p$803 = 18;
const _p$804 = undefined;
const _tmp$403 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$803, _p$804) };
const _p$805 = 35;
const _p$806 = undefined;
const _p$807 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$402, _tmp$403, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$805, _p$806) }]);
const _tmp$404 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$807);
const _p$808 = "8";
const _tmp$405 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$808) };
const _p$809 = 19;
const _p$810 = undefined;
const _tmp$406 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$809, _p$810) };
const _p$811 = 35;
const _p$812 = undefined;
const _p$813 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$405, _tmp$406, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$811, _p$812) }]);
const _tmp$407 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$813);
const _p$814 = "8";
const _tmp$408 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$814) };
const _p$815 = 20;
const _p$816 = undefined;
const _tmp$409 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$815, _p$816) };
const _p$817 = 35;
const _p$818 = undefined;
const _p$819 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$408, _tmp$409, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$817, _p$818) }]);
const _tmp$410 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$819);
const _p$820 = "8";
const _tmp$411 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$820) };
const _p$821 = 21;
const _p$822 = undefined;
const _tmp$412 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$821, _p$822) };
const _p$823 = 35;
const _p$824 = undefined;
const _p$825 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$411, _tmp$412, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$823, _p$824) }]);
const _tmp$413 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$825);
const _p$826 = "8";
const _tmp$414 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$826) };
const _p$827 = 22;
const _p$828 = undefined;
const _tmp$415 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$827, _p$828) };
const _p$829 = 35;
const _p$830 = undefined;
const _p$831 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$414, _tmp$415, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$829, _p$830) }]);
const _tmp$416 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$831);
const _p$832 = "8";
const _tmp$417 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$832) };
const _p$833 = 23;
const _p$834 = undefined;
const _tmp$418 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$833, _p$834) };
const _p$835 = 35;
const _p$836 = undefined;
const _p$837 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$417, _tmp$418, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$835, _p$836) }]);
const _tmp$419 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$837);
const _p$838 = "8";
const _tmp$420 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$838) };
const _p$839 = 24;
const _p$840 = undefined;
const _tmp$421 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$839, _p$840) };
const _p$841 = 35;
const _p$842 = undefined;
const _p$843 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$420, _tmp$421, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$841, _p$842) }]);
const _tmp$422 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$843);
const _p$844 = "8";
const _tmp$423 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$844) };
const _p$845 = 25;
const _p$846 = undefined;
const _tmp$424 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$845, _p$846) };
const _p$847 = 35;
const _p$848 = undefined;
const _p$849 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$423, _tmp$424, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$847, _p$848) }]);
const _tmp$425 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$849);
const _p$850 = "8";
const _tmp$426 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$850) };
const _p$851 = 26;
const _p$852 = undefined;
const _tmp$427 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$851, _p$852) };
const _p$853 = 35;
const _p$854 = undefined;
const _p$855 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$426, _tmp$427, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$853, _p$854) }]);
const _tmp$428 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$855);
const _p$856 = "8";
const _tmp$429 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$856) };
const _p$857 = 27;
const _p$858 = undefined;
const _tmp$430 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$857, _p$858) };
const _p$859 = 35;
const _p$860 = undefined;
const _p$861 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$429, _tmp$430, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$859, _p$860) }]);
const _tmp$431 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$861);
const _p$862 = "8";
const _tmp$432 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$862) };
const _p$863 = 28;
const _p$864 = undefined;
const _tmp$433 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$863, _p$864) };
const _p$865 = 35;
const _p$866 = undefined;
const _p$867 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$432, _tmp$433, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$865, _p$866) }]);
const _tmp$434 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$867);
const _p$868 = "8";
const _tmp$435 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$868) };
const _p$869 = 29;
const _p$870 = undefined;
const _tmp$436 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$869, _p$870) };
const _p$871 = 35;
const _p$872 = undefined;
const _p$873 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$435, _tmp$436, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$871, _p$872) }]);
const _tmp$437 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$873);
const _p$874 = "8";
const _tmp$438 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$874) };
const _p$875 = 30;
const _p$876 = undefined;
const _tmp$439 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$875, _p$876) };
const _p$877 = 35;
const _p$878 = undefined;
const _p$879 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$438, _tmp$439, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$877, _p$878) }]);
const _tmp$440 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$879);
const _p$880 = "8";
const _tmp$441 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$880) };
const _p$881 = 31;
const _p$882 = undefined;
const _tmp$442 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$881, _p$882) };
const _p$883 = 35;
const _p$884 = undefined;
const _p$885 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$441, _tmp$442, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$883, _p$884) }]);
const _tmp$443 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$885);
const _p$886 = "8";
const _tmp$444 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$886) };
const _p$887 = 32;
const _p$888 = undefined;
const _tmp$445 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$887, _p$888) };
const _p$889 = 35;
const _p$890 = undefined;
const _p$891 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$444, _tmp$445, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$889, _p$890) }]);
const _tmp$446 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$891);
const _p$892 = "8";
const _tmp$447 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$892) };
const _p$893 = 33;
const _p$894 = undefined;
const _tmp$448 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$893, _p$894) };
const _p$895 = 35;
const _p$896 = undefined;
const _p$897 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$447, _tmp$448, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$895, _p$896) }]);
const _tmp$449 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$897);
const _p$898 = "8";
const _tmp$450 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$898) };
const _p$899 = 34;
const _p$900 = undefined;
const _tmp$451 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$899, _p$900) };
const _p$901 = 35;
const _p$902 = undefined;
const _p$903 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$450, _tmp$451, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$901, _p$902) }]);
const _tmp$452 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$903);
const _p$904 = "8";
const _tmp$453 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$904) };
const _p$905 = 35;
const _p$906 = undefined;
const _tmp$454 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$905, _p$906) };
const _p$907 = 35;
const _p$908 = undefined;
const _p$909 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$453, _tmp$454, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$907, _p$908) }]);
const _tmp$455 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$909);
const _p$910 = "8";
const _tmp$456 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$910) };
const _p$911 = 36;
const _p$912 = undefined;
const _tmp$457 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$911, _p$912) };
const _p$913 = 35;
const _p$914 = undefined;
const _p$915 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$456, _tmp$457, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$913, _p$914) }]);
const _tmp$458 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$915);
const _p$916 = "8";
const _tmp$459 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$916) };
const _p$917 = 37;
const _p$918 = undefined;
const _tmp$460 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$917, _p$918) };
const _p$919 = 35;
const _p$920 = undefined;
const _p$921 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$459, _tmp$460, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$919, _p$920) }]);
const _tmp$461 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$921);
const _p$922 = "13";
const _tmp$462 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$922) };
const _p$923 = 1;
const _p$924 = undefined;
const _tmp$463 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$923, _p$924) };
const _p$925 = 34;
const _p$926 = undefined;
const _p$927 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$462, _tmp$463, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$925, _p$926) }]);
const _tmp$464 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$927);
const _p$928 = "13";
const _tmp$465 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$928) };
const _p$929 = 2;
const _p$930 = undefined;
const _tmp$466 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$929, _p$930) };
const _p$931 = 34;
const _p$932 = undefined;
const _p$933 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$465, _tmp$466, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$931, _p$932) }]);
const _tmp$467 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$933);
const _p$934 = "13";
const _tmp$468 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$934) };
const _p$935 = 3;
const _p$936 = undefined;
const _tmp$469 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$935, _p$936) };
const _p$937 = 34;
const _p$938 = undefined;
const _p$939 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$468, _tmp$469, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$937, _p$938) }]);
const _tmp$470 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$939);
const _p$940 = "13";
const _tmp$471 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$940) };
const _p$941 = 4;
const _p$942 = undefined;
const _tmp$472 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$941, _p$942) };
const _p$943 = 34;
const _p$944 = undefined;
const _p$945 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$471, _tmp$472, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$943, _p$944) }]);
const _tmp$473 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$945);
const _p$946 = "13";
const _tmp$474 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$946) };
const _p$947 = 5;
const _p$948 = undefined;
const _tmp$475 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$947, _p$948) };
const _p$949 = 34;
const _p$950 = undefined;
const _p$951 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$474, _tmp$475, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$949, _p$950) }]);
const _tmp$476 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$951);
const _p$952 = "13";
const _tmp$477 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$952) };
const _p$953 = 6;
const _p$954 = undefined;
const _tmp$478 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$953, _p$954) };
const _p$955 = 34;
const _p$956 = undefined;
const _p$957 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$477, _tmp$478, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$955, _p$956) }]);
const _tmp$479 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$957);
const _p$958 = "13";
const _tmp$480 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$958) };
const _p$959 = 7;
const _p$960 = undefined;
const _tmp$481 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$959, _p$960) };
const _p$961 = 34;
const _p$962 = undefined;
const _p$963 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$480, _tmp$481, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$961, _p$962) }]);
const _tmp$482 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$963);
const _p$964 = "13";
const _tmp$483 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$964) };
const _p$965 = 8;
const _p$966 = undefined;
const _tmp$484 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$965, _p$966) };
const _p$967 = 34;
const _p$968 = undefined;
const _p$969 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$483, _tmp$484, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$967, _p$968) }]);
const _tmp$485 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$969);
const _p$970 = "13";
const _tmp$486 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$970) };
const _p$971 = 9;
const _p$972 = undefined;
const _tmp$487 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$971, _p$972) };
const _p$973 = 34;
const _p$974 = undefined;
const _p$975 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$486, _tmp$487, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$973, _p$974) }]);
const _tmp$488 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$975);
const _p$976 = "13";
const _tmp$489 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$976) };
const _p$977 = 10;
const _p$978 = undefined;
const _tmp$490 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$977, _p$978) };
const _p$979 = 34;
const _p$980 = undefined;
const _p$981 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$489, _tmp$490, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$979, _p$980) }]);
const _tmp$491 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$981);
const _p$982 = "13";
const _tmp$492 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$982) };
const _p$983 = 11;
const _p$984 = undefined;
const _tmp$493 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$983, _p$984) };
const _p$985 = 34;
const _p$986 = undefined;
const _p$987 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$492, _tmp$493, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$985, _p$986) }]);
const _tmp$494 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$987);
const _p$988 = "13";
const _tmp$495 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$988) };
const _p$989 = 12;
const _p$990 = undefined;
const _tmp$496 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$989, _p$990) };
const _p$991 = 34;
const _p$992 = undefined;
const _p$993 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$495, _tmp$496, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$991, _p$992) }]);
const _tmp$497 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$993);
const _p$994 = "13";
const _tmp$498 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$994) };
const _p$995 = 13;
const _p$996 = undefined;
const _tmp$499 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$995, _p$996) };
const _p$997 = 34;
const _p$998 = undefined;
const _p$999 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$498, _tmp$499, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$997, _p$998) }]);
const _tmp$500 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$999);
const _p$1000 = "13";
const _tmp$501 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1000) };
const _p$1001 = 14;
const _p$1002 = undefined;
const _tmp$502 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1001, _p$1002) };
const _p$1003 = 34;
const _p$1004 = undefined;
const _p$1005 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$501, _tmp$502, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1003, _p$1004) }]);
const _tmp$503 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1005);
const _p$1006 = "13";
const _tmp$504 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1006) };
const _p$1007 = 15;
const _p$1008 = undefined;
const _tmp$505 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1007, _p$1008) };
const _p$1009 = 34;
const _p$1010 = undefined;
const _p$1011 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$504, _tmp$505, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1009, _p$1010) }]);
const _tmp$506 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1011);
const _p$1012 = "13";
const _tmp$507 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1012) };
const _p$1013 = 16;
const _p$1014 = undefined;
const _tmp$508 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1013, _p$1014) };
const _p$1015 = 34;
const _p$1016 = undefined;
const _p$1017 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$507, _tmp$508, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1015, _p$1016) }]);
const _tmp$509 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1017);
const _p$1018 = "13";
const _tmp$510 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1018) };
const _p$1019 = 17;
const _p$1020 = undefined;
const _tmp$511 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1019, _p$1020) };
const _p$1021 = 34;
const _p$1022 = undefined;
const _p$1023 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$510, _tmp$511, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1021, _p$1022) }]);
const _tmp$512 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1023);
const _p$1024 = "13";
const _tmp$513 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1024) };
const _p$1025 = 18;
const _p$1026 = undefined;
const _tmp$514 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1025, _p$1026) };
const _p$1027 = 34;
const _p$1028 = undefined;
const _p$1029 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$513, _tmp$514, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1027, _p$1028) }]);
const _tmp$515 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1029);
const _p$1030 = "13";
const _tmp$516 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1030) };
const _p$1031 = 19;
const _p$1032 = undefined;
const _tmp$517 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1031, _p$1032) };
const _p$1033 = 34;
const _p$1034 = undefined;
const _p$1035 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$516, _tmp$517, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1033, _p$1034) }]);
const _tmp$518 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1035);
const _p$1036 = "13";
const _tmp$519 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1036) };
const _p$1037 = 20;
const _p$1038 = undefined;
const _tmp$520 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1037, _p$1038) };
const _p$1039 = 34;
const _p$1040 = undefined;
const _p$1041 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$519, _tmp$520, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1039, _p$1040) }]);
const _tmp$521 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1041);
const _p$1042 = "13";
const _tmp$522 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1042) };
const _p$1043 = 21;
const _p$1044 = undefined;
const _tmp$523 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1043, _p$1044) };
const _p$1045 = 34;
const _p$1046 = undefined;
const _p$1047 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$522, _tmp$523, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1045, _p$1046) }]);
const _tmp$524 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1047);
const _p$1048 = "13";
const _tmp$525 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1048) };
const _p$1049 = 22;
const _p$1050 = undefined;
const _tmp$526 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1049, _p$1050) };
const _p$1051 = 34;
const _p$1052 = undefined;
const _p$1053 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$525, _tmp$526, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1051, _p$1052) }]);
const _tmp$527 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1053);
const _p$1054 = "13";
const _tmp$528 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1054) };
const _p$1055 = 23;
const _p$1056 = undefined;
const _tmp$529 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1055, _p$1056) };
const _p$1057 = 34;
const _p$1058 = undefined;
const _p$1059 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$528, _tmp$529, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1057, _p$1058) }]);
const _tmp$530 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1059);
const _p$1060 = "13";
const _tmp$531 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1060) };
const _p$1061 = 24;
const _p$1062 = undefined;
const _tmp$532 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1061, _p$1062) };
const _p$1063 = 34;
const _p$1064 = undefined;
const _p$1065 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$531, _tmp$532, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1063, _p$1064) }]);
const _tmp$533 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1065);
const _p$1066 = "13";
const _tmp$534 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1066) };
const _p$1067 = 25;
const _p$1068 = undefined;
const _tmp$535 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1067, _p$1068) };
const _p$1069 = 34;
const _p$1070 = undefined;
const _p$1071 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$534, _tmp$535, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1069, _p$1070) }]);
const _tmp$536 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1071);
const _p$1072 = "13";
const _tmp$537 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1072) };
const _p$1073 = 26;
const _p$1074 = undefined;
const _tmp$538 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1073, _p$1074) };
const _p$1075 = 34;
const _p$1076 = undefined;
const _p$1077 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$537, _tmp$538, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1075, _p$1076) }]);
const _tmp$539 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1077);
const _p$1078 = "13";
const _tmp$540 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1078) };
const _p$1079 = 27;
const _p$1080 = undefined;
const _tmp$541 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1079, _p$1080) };
const _p$1081 = 34;
const _p$1082 = undefined;
const _p$1083 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$540, _tmp$541, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1081, _p$1082) }]);
const _tmp$542 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1083);
const _p$1084 = "13";
const _tmp$543 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1084) };
const _p$1085 = 28;
const _p$1086 = undefined;
const _tmp$544 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1085, _p$1086) };
const _p$1087 = 34;
const _p$1088 = undefined;
const _p$1089 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$543, _tmp$544, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1087, _p$1088) }]);
const _tmp$545 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1089);
const _p$1090 = "13";
const _tmp$546 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1090) };
const _p$1091 = 29;
const _p$1092 = undefined;
const _tmp$547 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1091, _p$1092) };
const _p$1093 = 34;
const _p$1094 = undefined;
const _p$1095 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$546, _tmp$547, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1093, _p$1094) }]);
const _tmp$548 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1095);
const _p$1096 = "13";
const _tmp$549 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1096) };
const _p$1097 = 30;
const _p$1098 = undefined;
const _tmp$550 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1097, _p$1098) };
const _p$1099 = 34;
const _p$1100 = undefined;
const _p$1101 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$549, _tmp$550, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1099, _p$1100) }]);
const _tmp$551 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1101);
const _p$1102 = "13";
const _tmp$552 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1102) };
const _p$1103 = 31;
const _p$1104 = undefined;
const _tmp$553 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1103, _p$1104) };
const _p$1105 = 34;
const _p$1106 = undefined;
const _p$1107 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$552, _tmp$553, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1105, _p$1106) }]);
const _tmp$554 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1107);
const _p$1108 = "13";
const _tmp$555 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1108) };
const _p$1109 = 32;
const _p$1110 = undefined;
const _tmp$556 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1109, _p$1110) };
const _p$1111 = 34;
const _p$1112 = undefined;
const _p$1113 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$555, _tmp$556, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1111, _p$1112) }]);
const _tmp$557 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1113);
const _p$1114 = "13";
const _tmp$558 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1114) };
const _p$1115 = 33;
const _p$1116 = undefined;
const _tmp$559 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1115, _p$1116) };
const _p$1117 = 34;
const _p$1118 = undefined;
const _p$1119 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$558, _tmp$559, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1117, _p$1118) }]);
const _tmp$560 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1119);
const _p$1120 = "13";
const _tmp$561 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1120) };
const _p$1121 = 34;
const _p$1122 = undefined;
const _tmp$562 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1121, _p$1122) };
const _p$1123 = 34;
const _p$1124 = undefined;
const _p$1125 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$561, _tmp$562, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1123, _p$1124) }]);
const _tmp$563 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1125);
const _p$1126 = "13";
const _tmp$564 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1126) };
const _p$1127 = 35;
const _p$1128 = undefined;
const _tmp$565 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1127, _p$1128) };
const _p$1129 = 34;
const _p$1130 = undefined;
const _p$1131 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$564, _tmp$565, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1129, _p$1130) }]);
const _tmp$566 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1131);
const _p$1132 = "13";
const _tmp$567 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1132) };
const _p$1133 = 36;
const _p$1134 = undefined;
const _tmp$568 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1133, _p$1134) };
const _p$1135 = 34;
const _p$1136 = undefined;
const _p$1137 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$567, _tmp$568, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1135, _p$1136) }]);
const _tmp$569 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1137);
const _p$1138 = "13";
const _tmp$570 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1138) };
const _p$1139 = 37;
const _p$1140 = undefined;
const _tmp$571 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1139, _p$1140) };
const _p$1141 = 34;
const _p$1142 = undefined;
const _p$1143 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$570, _tmp$571, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1141, _p$1142) }]);
const _tmp$572 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1143);
const _p$1144 = "9";
const _tmp$573 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1144) };
const _p$1145 = 2;
const _p$1146 = undefined;
const _tmp$574 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1145, _p$1146) };
const _p$1147 = 0;
const _p$1148 = undefined;
const _p$1149 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$573, _tmp$574, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1147, _p$1148) }]);
const _tmp$575 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1149);
const _p$1150 = "9";
const _tmp$576 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1150) };
const _p$1151 = 3;
const _p$1152 = undefined;
const _tmp$577 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1151, _p$1152) };
const _p$1153 = 0;
const _p$1154 = undefined;
const _p$1155 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$576, _tmp$577, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1153, _p$1154) }]);
const _tmp$578 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1155);
const _p$1156 = "9";
const _tmp$579 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1156) };
const _p$1157 = 4;
const _p$1158 = undefined;
const _tmp$580 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1157, _p$1158) };
const _p$1159 = 0;
const _p$1160 = undefined;
const _p$1161 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$579, _tmp$580, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1159, _p$1160) }]);
const _tmp$581 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1161);
const _p$1162 = "9";
const _tmp$582 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1162) };
const _p$1163 = 5;
const _p$1164 = undefined;
const _tmp$583 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1163, _p$1164) };
const _p$1165 = 0;
const _p$1166 = undefined;
const _p$1167 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$582, _tmp$583, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1165, _p$1166) }]);
const _tmp$584 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1167);
const _p$1168 = "9";
const _tmp$585 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1168) };
const _p$1169 = 6;
const _p$1170 = undefined;
const _tmp$586 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1169, _p$1170) };
const _p$1171 = 0;
const _p$1172 = undefined;
const _p$1173 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$585, _tmp$586, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1171, _p$1172) }]);
const _tmp$587 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1173);
const _p$1174 = "9";
const _tmp$588 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1174) };
const _p$1175 = 7;
const _p$1176 = undefined;
const _tmp$589 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1175, _p$1176) };
const _p$1177 = 0;
const _p$1178 = undefined;
const _p$1179 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$588, _tmp$589, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1177, _p$1178) }]);
const _tmp$590 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1179);
const _p$1180 = "9";
const _tmp$591 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1180) };
const _p$1181 = 8;
const _p$1182 = undefined;
const _tmp$592 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1181, _p$1182) };
const _p$1183 = 0;
const _p$1184 = undefined;
const _p$1185 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$591, _tmp$592, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1183, _p$1184) }]);
const _tmp$593 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1185);
const _p$1186 = "9";
const _tmp$594 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1186) };
const _p$1187 = 9;
const _p$1188 = undefined;
const _tmp$595 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1187, _p$1188) };
const _p$1189 = 0;
const _p$1190 = undefined;
const _p$1191 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$594, _tmp$595, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1189, _p$1190) }]);
const _tmp$596 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1191);
const _p$1192 = "9";
const _tmp$597 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1192) };
const _p$1193 = 10;
const _p$1194 = undefined;
const _tmp$598 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1193, _p$1194) };
const _p$1195 = 0;
const _p$1196 = undefined;
const _p$1197 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$597, _tmp$598, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1195, _p$1196) }]);
const _tmp$599 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1197);
const _p$1198 = "9";
const _tmp$600 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1198) };
const _p$1199 = 11;
const _p$1200 = undefined;
const _tmp$601 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1199, _p$1200) };
const _p$1201 = 0;
const _p$1202 = undefined;
const _p$1203 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$600, _tmp$601, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1201, _p$1202) }]);
const _tmp$602 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1203);
const _p$1204 = "9";
const _tmp$603 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1204) };
const _p$1205 = 12;
const _p$1206 = undefined;
const _tmp$604 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1205, _p$1206) };
const _p$1207 = 0;
const _p$1208 = undefined;
const _p$1209 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$603, _tmp$604, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1207, _p$1208) }]);
const _tmp$605 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1209);
const _p$1210 = "9";
const _tmp$606 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1210) };
const _p$1211 = 13;
const _p$1212 = undefined;
const _tmp$607 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1211, _p$1212) };
const _p$1213 = 0;
const _p$1214 = undefined;
const _p$1215 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$606, _tmp$607, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1213, _p$1214) }]);
const _tmp$608 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1215);
const _p$1216 = "9";
const _tmp$609 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1216) };
const _p$1217 = 14;
const _p$1218 = undefined;
const _tmp$610 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1217, _p$1218) };
const _p$1219 = 0;
const _p$1220 = undefined;
const _p$1221 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$609, _tmp$610, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1219, _p$1220) }]);
const _tmp$611 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1221);
const _p$1222 = "9";
const _tmp$612 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1222) };
const _p$1223 = 15;
const _p$1224 = undefined;
const _tmp$613 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1223, _p$1224) };
const _p$1225 = 0;
const _p$1226 = undefined;
const _p$1227 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$612, _tmp$613, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1225, _p$1226) }]);
const _tmp$614 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1227);
const _p$1228 = "9";
const _tmp$615 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1228) };
const _p$1229 = 16;
const _p$1230 = undefined;
const _tmp$616 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1229, _p$1230) };
const _p$1231 = 0;
const _p$1232 = undefined;
const _p$1233 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$615, _tmp$616, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1231, _p$1232) }]);
const _tmp$617 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1233);
const _p$1234 = "9";
const _tmp$618 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1234) };
const _p$1235 = 17;
const _p$1236 = undefined;
const _tmp$619 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1235, _p$1236) };
const _p$1237 = 0;
const _p$1238 = undefined;
const _p$1239 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$618, _tmp$619, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1237, _p$1238) }]);
const _tmp$620 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1239);
const _p$1240 = "9";
const _tmp$621 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1240) };
const _p$1241 = 18;
const _p$1242 = undefined;
const _tmp$622 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1241, _p$1242) };
const _p$1243 = 0;
const _p$1244 = undefined;
const _p$1245 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$621, _tmp$622, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1243, _p$1244) }]);
const _tmp$623 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1245);
const _p$1246 = "9";
const _tmp$624 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1246) };
const _p$1247 = 19;
const _p$1248 = undefined;
const _tmp$625 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1247, _p$1248) };
const _p$1249 = 0;
const _p$1250 = undefined;
const _p$1251 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$624, _tmp$625, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1249, _p$1250) }]);
const _tmp$626 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1251);
const _p$1252 = "9";
const _tmp$627 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1252) };
const _p$1253 = 20;
const _p$1254 = undefined;
const _tmp$628 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1253, _p$1254) };
const _p$1255 = 0;
const _p$1256 = undefined;
const _p$1257 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$627, _tmp$628, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1255, _p$1256) }]);
const _tmp$629 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1257);
const _p$1258 = "9";
const _tmp$630 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1258) };
const _p$1259 = 21;
const _p$1260 = undefined;
const _tmp$631 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1259, _p$1260) };
const _p$1261 = 0;
const _p$1262 = undefined;
const _p$1263 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$630, _tmp$631, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1261, _p$1262) }]);
const _tmp$632 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1263);
const _p$1264 = "9";
const _tmp$633 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1264) };
const _p$1265 = 22;
const _p$1266 = undefined;
const _tmp$634 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1265, _p$1266) };
const _p$1267 = 0;
const _p$1268 = undefined;
const _p$1269 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$633, _tmp$634, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1267, _p$1268) }]);
const _tmp$635 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1269);
const _p$1270 = "9";
const _tmp$636 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1270) };
const _p$1271 = 23;
const _p$1272 = undefined;
const _tmp$637 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1271, _p$1272) };
const _p$1273 = 0;
const _p$1274 = undefined;
const _p$1275 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$636, _tmp$637, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1273, _p$1274) }]);
const _tmp$638 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1275);
const _p$1276 = "9";
const _tmp$639 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1276) };
const _p$1277 = 24;
const _p$1278 = undefined;
const _tmp$640 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1277, _p$1278) };
const _p$1279 = 0;
const _p$1280 = undefined;
const _p$1281 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$639, _tmp$640, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1279, _p$1280) }]);
const _tmp$641 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1281);
const _p$1282 = "9";
const _tmp$642 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1282) };
const _p$1283 = 25;
const _p$1284 = undefined;
const _tmp$643 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1283, _p$1284) };
const _p$1285 = 0;
const _p$1286 = undefined;
const _p$1287 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$642, _tmp$643, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1285, _p$1286) }]);
const _tmp$644 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1287);
const _p$1288 = "9";
const _tmp$645 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1288) };
const _p$1289 = 26;
const _p$1290 = undefined;
const _tmp$646 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1289, _p$1290) };
const _p$1291 = 0;
const _p$1292 = undefined;
const _p$1293 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$645, _tmp$646, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1291, _p$1292) }]);
const _tmp$647 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1293);
const _p$1294 = "9";
const _tmp$648 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1294) };
const _p$1295 = 27;
const _p$1296 = undefined;
const _tmp$649 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1295, _p$1296) };
const _p$1297 = 0;
const _p$1298 = undefined;
const _p$1299 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$648, _tmp$649, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1297, _p$1298) }]);
const _tmp$650 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1299);
const _p$1300 = "9";
const _tmp$651 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1300) };
const _p$1301 = 28;
const _p$1302 = undefined;
const _tmp$652 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1301, _p$1302) };
const _p$1303 = 0;
const _p$1304 = undefined;
const _p$1305 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$651, _tmp$652, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1303, _p$1304) }]);
const _tmp$653 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1305);
const _p$1306 = "9";
const _tmp$654 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1306) };
const _p$1307 = 29;
const _p$1308 = undefined;
const _tmp$655 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1307, _p$1308) };
const _p$1309 = 0;
const _p$1310 = undefined;
const _p$1311 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$654, _tmp$655, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1309, _p$1310) }]);
const _tmp$656 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1311);
const _p$1312 = "9";
const _tmp$657 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1312) };
const _p$1313 = 30;
const _p$1314 = undefined;
const _tmp$658 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1313, _p$1314) };
const _p$1315 = 0;
const _p$1316 = undefined;
const _p$1317 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$657, _tmp$658, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1315, _p$1316) }]);
const _tmp$659 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1317);
const _p$1318 = "9";
const _tmp$660 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1318) };
const _p$1319 = 31;
const _p$1320 = undefined;
const _tmp$661 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1319, _p$1320) };
const _p$1321 = 0;
const _p$1322 = undefined;
const _p$1323 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$660, _tmp$661, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1321, _p$1322) }]);
const _tmp$662 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1323);
const _p$1324 = "9";
const _tmp$663 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1324) };
const _p$1325 = 32;
const _p$1326 = undefined;
const _tmp$664 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1325, _p$1326) };
const _p$1327 = 0;
const _p$1328 = undefined;
const _p$1329 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$663, _tmp$664, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1327, _p$1328) }]);
const _tmp$665 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1329);
const _p$1330 = "9";
const _tmp$666 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1330) };
const _p$1331 = 33;
const _p$1332 = undefined;
const _tmp$667 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1331, _p$1332) };
const _p$1333 = 0;
const _p$1334 = undefined;
const _p$1335 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$666, _tmp$667, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1333, _p$1334) }]);
const _tmp$668 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1335);
const _p$1336 = "9";
const _tmp$669 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1336) };
const _p$1337 = 34;
const _p$1338 = undefined;
const _tmp$670 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1337, _p$1338) };
const _p$1339 = 0;
const _p$1340 = undefined;
const _p$1341 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$669, _tmp$670, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1339, _p$1340) }]);
const _tmp$671 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1341);
const _p$1342 = "9";
const _tmp$672 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1342) };
const _p$1343 = 35;
const _p$1344 = undefined;
const _tmp$673 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1343, _p$1344) };
const _p$1345 = 0;
const _p$1346 = undefined;
const _p$1347 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$672, _tmp$673, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1345, _p$1346) }]);
const _tmp$674 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1347);
const _p$1348 = "9";
const _tmp$675 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1348) };
const _p$1349 = 36;
const _p$1350 = undefined;
const _tmp$676 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1349, _p$1350) };
const _p$1351 = 0;
const _p$1352 = undefined;
const _p$1353 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$675, _tmp$676, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1351, _p$1352) }]);
const _tmp$677 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1353);
const _p$1354 = "15";
const _tmp$678 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1354) };
const _p$1355 = 0;
const _p$1356 = undefined;
const _tmp$679 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1355, _p$1356) };
const _p$1357 = 0;
const _p$1358 = undefined;
const _p$1359 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$678, _tmp$679, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1357, _p$1358) }]);
const _tmp$680 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1359);
const _p$1360 = "9";
const _tmp$681 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1360) };
const _p$1361 = 1;
const _p$1362 = undefined;
const _tmp$682 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1361, _p$1362) };
const _p$1363 = 0;
const _p$1364 = undefined;
const _p$1365 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$681, _tmp$682, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1363, _p$1364) }]);
const _tmp$683 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1365);
const _p$1366 = "11";
const _tmp$684 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1366) };
const _p$1367 = 0;
const _p$1368 = undefined;
const _tmp$685 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1367, _p$1368) };
const _p$1369 = 1;
const _p$1370 = undefined;
const _p$1371 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$684, _tmp$685, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1369, _p$1370) }]);
const _tmp$686 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1371);
const _p$1372 = "11";
const _tmp$687 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1372) };
const _p$1373 = 0;
const _p$1374 = undefined;
const _tmp$688 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1373, _p$1374) };
const _p$1375 = 2;
const _p$1376 = undefined;
const _p$1377 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$687, _tmp$688, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1375, _p$1376) }]);
const _tmp$689 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1377);
const _p$1378 = "11";
const _tmp$690 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1378) };
const _p$1379 = 0;
const _p$1380 = undefined;
const _tmp$691 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1379, _p$1380) };
const _p$1381 = 3;
const _p$1382 = undefined;
const _p$1383 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$690, _tmp$691, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1381, _p$1382) }]);
const _tmp$692 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1383);
const _p$1384 = "13";
const _tmp$693 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1384) };
const _p$1385 = 1;
const _p$1386 = undefined;
const _tmp$694 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1385, _p$1386) };
const _p$1387 = 2;
const _p$1388 = undefined;
const _p$1389 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$693, _tmp$694, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1387, _p$1388) }]);
const _tmp$695 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1389);
const _p$1390 = "13";
const _tmp$696 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1390) };
const _p$1391 = 1;
const _p$1392 = undefined;
const _tmp$697 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1391, _p$1392) };
const _p$1393 = 3;
const _p$1394 = undefined;
const _p$1395 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$696, _tmp$697, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1393, _p$1394) }]);
const _tmp$698 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1395);
const _p$1396 = "13";
const _tmp$699 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1396) };
const _p$1397 = 2;
const _p$1398 = undefined;
const _tmp$700 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1397, _p$1398) };
const _p$1399 = 2;
const _p$1400 = undefined;
const _p$1401 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$699, _tmp$700, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1399, _p$1400) }]);
const _tmp$701 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1401);
const _p$1402 = "10";
const _tmp$702 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1402) };
const _p$1403 = 2;
const _p$1404 = undefined;
const _tmp$703 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1403, _p$1404) };
const _p$1405 = 3;
const _p$1406 = undefined;
const _p$1407 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$702, _tmp$703, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1405, _p$1406) }]);
const _tmp$704 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1407);
const _p$1408 = "8";
const _tmp$705 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1408) };
const _p$1409 = 3;
const _p$1410 = undefined;
const _tmp$706 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1409, _p$1410) };
const _p$1411 = 2;
const _p$1412 = undefined;
const _p$1413 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$705, _tmp$706, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1411, _p$1412) }]);
const _tmp$707 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1413);
const _p$1414 = "8";
const _tmp$708 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1414) };
const _p$1415 = 4;
const _p$1416 = undefined;
const _tmp$709 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1415, _p$1416) };
const _p$1417 = 2;
const _p$1418 = undefined;
const _p$1419 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$708, _tmp$709, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1417, _p$1418) }]);
const _tmp$710 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1419);
const _p$1420 = "8";
const _tmp$711 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1420) };
const _p$1421 = 5;
const _p$1422 = undefined;
const _tmp$712 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1421, _p$1422) };
const _p$1423 = 2;
const _p$1424 = undefined;
const _p$1425 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$711, _tmp$712, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1423, _p$1424) }]);
const _tmp$713 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1425);
const _p$1426 = "8";
const _tmp$714 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1426) };
const _p$1427 = 6;
const _p$1428 = undefined;
const _tmp$715 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1427, _p$1428) };
const _p$1429 = 2;
const _p$1430 = undefined;
const _p$1431 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$714, _tmp$715, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1429, _p$1430) }]);
const _tmp$716 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1431);
const _p$1432 = "8";
const _tmp$717 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1432) };
const _p$1433 = 7;
const _p$1434 = undefined;
const _tmp$718 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1433, _p$1434) };
const _p$1435 = 2;
const _p$1436 = undefined;
const _p$1437 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$717, _tmp$718, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1435, _p$1436) }]);
const _tmp$719 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1437);
const _p$1438 = "8";
const _tmp$720 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1438) };
const _p$1439 = 8;
const _p$1440 = undefined;
const _tmp$721 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1439, _p$1440) };
const _p$1441 = 2;
const _p$1442 = undefined;
const _p$1443 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$720, _tmp$721, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1441, _p$1442) }]);
const _tmp$722 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1443);
const _p$1444 = "8";
const _tmp$723 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1444) };
const _p$1445 = 9;
const _p$1446 = undefined;
const _tmp$724 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1445, _p$1446) };
const _p$1447 = 2;
const _p$1448 = undefined;
const _p$1449 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$723, _tmp$724, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1447, _p$1448) }]);
const _tmp$725 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1449);
const _p$1450 = "8";
const _tmp$726 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1450) };
const _p$1451 = 10;
const _p$1452 = undefined;
const _tmp$727 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1451, _p$1452) };
const _p$1453 = 2;
const _p$1454 = undefined;
const _p$1455 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$726, _tmp$727, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1453, _p$1454) }]);
const _tmp$728 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1455);
const _p$1456 = "8";
const _tmp$729 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1456) };
const _p$1457 = 11;
const _p$1458 = undefined;
const _tmp$730 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1457, _p$1458) };
const _p$1459 = 2;
const _p$1460 = undefined;
const _p$1461 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$729, _tmp$730, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1459, _p$1460) }]);
const _tmp$731 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1461);
const _p$1462 = "8";
const _tmp$732 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1462) };
const _p$1463 = 12;
const _p$1464 = undefined;
const _tmp$733 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1463, _p$1464) };
const _p$1465 = 2;
const _p$1466 = undefined;
const _p$1467 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$732, _tmp$733, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1465, _p$1466) }]);
const _tmp$734 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1467);
const _p$1468 = "8";
const _tmp$735 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1468) };
const _p$1469 = 13;
const _p$1470 = undefined;
const _tmp$736 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1469, _p$1470) };
const _p$1471 = 2;
const _p$1472 = undefined;
const _p$1473 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$735, _tmp$736, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1471, _p$1472) }]);
const _tmp$737 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1473);
const _p$1474 = "8";
const _tmp$738 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1474) };
const _p$1475 = 14;
const _p$1476 = undefined;
const _tmp$739 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1475, _p$1476) };
const _p$1477 = 2;
const _p$1478 = undefined;
const _p$1479 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$738, _tmp$739, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1477, _p$1478) }]);
const _tmp$740 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1479);
const _p$1480 = "8";
const _tmp$741 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1480) };
const _p$1481 = 15;
const _p$1482 = undefined;
const _tmp$742 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1481, _p$1482) };
const _p$1483 = 2;
const _p$1484 = undefined;
const _p$1485 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$741, _tmp$742, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1483, _p$1484) }]);
const _tmp$743 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1485);
const _p$1486 = "8";
const _tmp$744 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1486) };
const _p$1487 = 16;
const _p$1488 = undefined;
const _tmp$745 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1487, _p$1488) };
const _p$1489 = 2;
const _p$1490 = undefined;
const _p$1491 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$744, _tmp$745, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1489, _p$1490) }]);
const _tmp$746 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1491);
const _p$1492 = "8";
const _tmp$747 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1492) };
const _p$1493 = 17;
const _p$1494 = undefined;
const _tmp$748 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1493, _p$1494) };
const _p$1495 = 2;
const _p$1496 = undefined;
const _p$1497 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$747, _tmp$748, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1495, _p$1496) }]);
const _tmp$749 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1497);
const _p$1498 = "8";
const _tmp$750 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1498) };
const _p$1499 = 18;
const _p$1500 = undefined;
const _tmp$751 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1499, _p$1500) };
const _p$1501 = 2;
const _p$1502 = undefined;
const _p$1503 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$750, _tmp$751, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1501, _p$1502) }]);
const _tmp$752 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1503);
const _p$1504 = "8";
const _tmp$753 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1504) };
const _p$1505 = 19;
const _p$1506 = undefined;
const _tmp$754 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1505, _p$1506) };
const _p$1507 = 2;
const _p$1508 = undefined;
const _p$1509 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$753, _tmp$754, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1507, _p$1508) }]);
const _tmp$755 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1509);
const _p$1510 = "8";
const _tmp$756 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1510) };
const _p$1511 = 20;
const _p$1512 = undefined;
const _tmp$757 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1511, _p$1512) };
const _p$1513 = 2;
const _p$1514 = undefined;
const _p$1515 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$756, _tmp$757, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1513, _p$1514) }]);
const _tmp$758 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1515);
const _p$1516 = "8";
const _tmp$759 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1516) };
const _p$1517 = 21;
const _p$1518 = undefined;
const _tmp$760 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1517, _p$1518) };
const _p$1519 = 2;
const _p$1520 = undefined;
const _p$1521 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$759, _tmp$760, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1519, _p$1520) }]);
const _tmp$761 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1521);
const _p$1522 = "8";
const _tmp$762 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1522) };
const _p$1523 = 22;
const _p$1524 = undefined;
const _tmp$763 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1523, _p$1524) };
const _p$1525 = 2;
const _p$1526 = undefined;
const _p$1527 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$762, _tmp$763, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1525, _p$1526) }]);
const _tmp$764 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1527);
const _p$1528 = "8";
const _tmp$765 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1528) };
const _p$1529 = 23;
const _p$1530 = undefined;
const _tmp$766 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1529, _p$1530) };
const _p$1531 = 2;
const _p$1532 = undefined;
const _p$1533 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$765, _tmp$766, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1531, _p$1532) }]);
const _tmp$767 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1533);
const _p$1534 = "8";
const _tmp$768 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1534) };
const _p$1535 = 24;
const _p$1536 = undefined;
const _tmp$769 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1535, _p$1536) };
const _p$1537 = 2;
const _p$1538 = undefined;
const _p$1539 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$768, _tmp$769, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1537, _p$1538) }]);
const _tmp$770 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1539);
const _p$1540 = "8";
const _tmp$771 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1540) };
const _p$1541 = 25;
const _p$1542 = undefined;
const _tmp$772 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1541, _p$1542) };
const _p$1543 = 2;
const _p$1544 = undefined;
const _p$1545 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$771, _tmp$772, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1543, _p$1544) }]);
const _tmp$773 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1545);
const _p$1546 = "8";
const _tmp$774 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1546) };
const _p$1547 = 26;
const _p$1548 = undefined;
const _tmp$775 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1547, _p$1548) };
const _p$1549 = 2;
const _p$1550 = undefined;
const _p$1551 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$774, _tmp$775, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1549, _p$1550) }]);
const _tmp$776 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1551);
const _p$1552 = "8";
const _tmp$777 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1552) };
const _p$1553 = 27;
const _p$1554 = undefined;
const _tmp$778 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1553, _p$1554) };
const _p$1555 = 2;
const _p$1556 = undefined;
const _p$1557 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$777, _tmp$778, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1555, _p$1556) }]);
const _tmp$779 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1557);
const _p$1558 = "8";
const _tmp$780 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1558) };
const _p$1559 = 28;
const _p$1560 = undefined;
const _tmp$781 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1559, _p$1560) };
const _p$1561 = 2;
const _p$1562 = undefined;
const _p$1563 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$780, _tmp$781, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1561, _p$1562) }]);
const _tmp$782 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1563);
const _p$1564 = "8";
const _tmp$783 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1564) };
const _p$1565 = 29;
const _p$1566 = undefined;
const _tmp$784 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1565, _p$1566) };
const _p$1567 = 2;
const _p$1568 = undefined;
const _p$1569 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$783, _tmp$784, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1567, _p$1568) }]);
const _tmp$785 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1569);
const _p$1570 = "8";
const _tmp$786 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1570) };
const _p$1571 = 30;
const _p$1572 = undefined;
const _tmp$787 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1571, _p$1572) };
const _p$1573 = 2;
const _p$1574 = undefined;
const _p$1575 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$786, _tmp$787, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1573, _p$1574) }]);
const _tmp$788 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1575);
const _p$1576 = "8";
const _tmp$789 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1576) };
const _p$1577 = 31;
const _p$1578 = undefined;
const _tmp$790 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1577, _p$1578) };
const _p$1579 = 2;
const _p$1580 = undefined;
const _p$1581 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$789, _tmp$790, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1579, _p$1580) }]);
const _tmp$791 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1581);
const _p$1582 = "8";
const _tmp$792 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1582) };
const _p$1583 = 32;
const _p$1584 = undefined;
const _tmp$793 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1583, _p$1584) };
const _p$1585 = 2;
const _p$1586 = undefined;
const _p$1587 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$792, _tmp$793, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1585, _p$1586) }]);
const _tmp$794 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1587);
const _p$1588 = "8";
const _tmp$795 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1588) };
const _p$1589 = 33;
const _p$1590 = undefined;
const _tmp$796 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1589, _p$1590) };
const _p$1591 = 2;
const _p$1592 = undefined;
const _p$1593 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$795, _tmp$796, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1591, _p$1592) }]);
const _tmp$797 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1593);
const _p$1594 = "8";
const _tmp$798 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1594) };
const _p$1595 = 34;
const _p$1596 = undefined;
const _tmp$799 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1595, _p$1596) };
const _p$1597 = 2;
const _p$1598 = undefined;
const _p$1599 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$798, _tmp$799, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1597, _p$1598) }]);
const _tmp$800 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1599);
const _p$1600 = "8";
const _tmp$801 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1600) };
const _p$1601 = 35;
const _p$1602 = undefined;
const _tmp$802 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1601, _p$1602) };
const _p$1603 = 2;
const _p$1604 = undefined;
const _p$1605 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$801, _tmp$802, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1603, _p$1604) }]);
const _tmp$803 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1605);
const _p$1606 = "8";
const _tmp$804 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1606) };
const _p$1607 = 36;
const _p$1608 = undefined;
const _tmp$805 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1607, _p$1608) };
const _p$1609 = 2;
const _p$1610 = undefined;
const _p$1611 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$804, _tmp$805, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1609, _p$1610) }]);
const _tmp$806 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1611);
const _p$1612 = "13";
const _tmp$807 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1612) };
const _p$1613 = 1;
const _p$1614 = undefined;
const _tmp$808 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1613, _p$1614) };
const _p$1615 = 1;
const _p$1616 = undefined;
const _p$1617 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$807, _tmp$808, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1615, _p$1616) }]);
const _tmp$809 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1617);
const _p$1618 = "13";
const _tmp$810 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1618) };
const _p$1619 = 2;
const _p$1620 = undefined;
const _tmp$811 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1619, _p$1620) };
const _p$1621 = 1;
const _p$1622 = undefined;
const _p$1623 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$810, _tmp$811, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1621, _p$1622) }]);
const _tmp$812 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1623);
const _p$1624 = "13";
const _tmp$813 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1624) };
const _p$1625 = 3;
const _p$1626 = undefined;
const _tmp$814 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1625, _p$1626) };
const _p$1627 = 1;
const _p$1628 = undefined;
const _p$1629 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$813, _tmp$814, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1627, _p$1628) }]);
const _tmp$815 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1629);
const _p$1630 = "13";
const _tmp$816 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1630) };
const _p$1631 = 4;
const _p$1632 = undefined;
const _tmp$817 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1631, _p$1632) };
const _p$1633 = 1;
const _p$1634 = undefined;
const _p$1635 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$816, _tmp$817, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1633, _p$1634) }]);
const _tmp$818 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1635);
const _p$1636 = "13";
const _tmp$819 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1636) };
const _p$1637 = 5;
const _p$1638 = undefined;
const _tmp$820 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1637, _p$1638) };
const _p$1639 = 1;
const _p$1640 = undefined;
const _p$1641 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$819, _tmp$820, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1639, _p$1640) }]);
const _tmp$821 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1641);
const _p$1642 = "13";
const _tmp$822 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1642) };
const _p$1643 = 6;
const _p$1644 = undefined;
const _tmp$823 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1643, _p$1644) };
const _p$1645 = 1;
const _p$1646 = undefined;
const _p$1647 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$822, _tmp$823, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1645, _p$1646) }]);
const _tmp$824 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1647);
const _p$1648 = "13";
const _tmp$825 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1648) };
const _p$1649 = 7;
const _p$1650 = undefined;
const _tmp$826 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1649, _p$1650) };
const _p$1651 = 1;
const _p$1652 = undefined;
const _p$1653 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$825, _tmp$826, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1651, _p$1652) }]);
const _tmp$827 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1653);
const _p$1654 = "13";
const _tmp$828 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1654) };
const _p$1655 = 8;
const _p$1656 = undefined;
const _tmp$829 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1655, _p$1656) };
const _p$1657 = 1;
const _p$1658 = undefined;
const _p$1659 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$828, _tmp$829, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1657, _p$1658) }]);
const _tmp$830 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1659);
const _p$1660 = "13";
const _tmp$831 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1660) };
const _p$1661 = 9;
const _p$1662 = undefined;
const _tmp$832 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1661, _p$1662) };
const _p$1663 = 1;
const _p$1664 = undefined;
const _p$1665 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$831, _tmp$832, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1663, _p$1664) }]);
const _tmp$833 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1665);
const _p$1666 = "13";
const _tmp$834 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1666) };
const _p$1667 = 10;
const _p$1668 = undefined;
const _tmp$835 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1667, _p$1668) };
const _p$1669 = 1;
const _p$1670 = undefined;
const _p$1671 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$834, _tmp$835, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1669, _p$1670) }]);
const _tmp$836 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1671);
const _p$1672 = "13";
const _tmp$837 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1672) };
const _p$1673 = 11;
const _p$1674 = undefined;
const _tmp$838 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1673, _p$1674) };
const _p$1675 = 1;
const _p$1676 = undefined;
const _p$1677 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$837, _tmp$838, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1675, _p$1676) }]);
const _tmp$839 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1677);
const _p$1678 = "13";
const _tmp$840 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1678) };
const _p$1679 = 12;
const _p$1680 = undefined;
const _tmp$841 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1679, _p$1680) };
const _p$1681 = 1;
const _p$1682 = undefined;
const _p$1683 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$840, _tmp$841, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1681, _p$1682) }]);
const _tmp$842 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1683);
const _p$1684 = "13";
const _tmp$843 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1684) };
const _p$1685 = 13;
const _p$1686 = undefined;
const _tmp$844 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1685, _p$1686) };
const _p$1687 = 1;
const _p$1688 = undefined;
const _p$1689 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$843, _tmp$844, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1687, _p$1688) }]);
const _tmp$845 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1689);
const _p$1690 = "13";
const _tmp$846 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1690) };
const _p$1691 = 14;
const _p$1692 = undefined;
const _tmp$847 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1691, _p$1692) };
const _p$1693 = 1;
const _p$1694 = undefined;
const _p$1695 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$846, _tmp$847, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1693, _p$1694) }]);
const _tmp$848 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1695);
const _p$1696 = "13";
const _tmp$849 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1696) };
const _p$1697 = 15;
const _p$1698 = undefined;
const _tmp$850 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1697, _p$1698) };
const _p$1699 = 1;
const _p$1700 = undefined;
const _p$1701 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$849, _tmp$850, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1699, _p$1700) }]);
const _tmp$851 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1701);
const _p$1702 = "13";
const _tmp$852 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1702) };
const _p$1703 = 16;
const _p$1704 = undefined;
const _tmp$853 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1703, _p$1704) };
const _p$1705 = 1;
const _p$1706 = undefined;
const _p$1707 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$852, _tmp$853, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1705, _p$1706) }]);
const _tmp$854 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1707);
const _p$1708 = "13";
const _tmp$855 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1708) };
const _p$1709 = 17;
const _p$1710 = undefined;
const _tmp$856 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1709, _p$1710) };
const _p$1711 = 1;
const _p$1712 = undefined;
const _p$1713 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$855, _tmp$856, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1711, _p$1712) }]);
const _tmp$857 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1713);
const _p$1714 = "13";
const _tmp$858 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1714) };
const _p$1715 = 18;
const _p$1716 = undefined;
const _tmp$859 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1715, _p$1716) };
const _p$1717 = 1;
const _p$1718 = undefined;
const _p$1719 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$858, _tmp$859, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1717, _p$1718) }]);
const _tmp$860 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1719);
const _p$1720 = "13";
const _tmp$861 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1720) };
const _p$1721 = 19;
const _p$1722 = undefined;
const _tmp$862 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1721, _p$1722) };
const _p$1723 = 1;
const _p$1724 = undefined;
const _p$1725 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$861, _tmp$862, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1723, _p$1724) }]);
const _tmp$863 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1725);
const _p$1726 = "13";
const _tmp$864 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1726) };
const _p$1727 = 20;
const _p$1728 = undefined;
const _tmp$865 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1727, _p$1728) };
const _p$1729 = 1;
const _p$1730 = undefined;
const _p$1731 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$864, _tmp$865, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1729, _p$1730) }]);
const _tmp$866 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1731);
const _p$1732 = "13";
const _tmp$867 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1732) };
const _p$1733 = 21;
const _p$1734 = undefined;
const _tmp$868 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1733, _p$1734) };
const _p$1735 = 1;
const _p$1736 = undefined;
const _p$1737 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$867, _tmp$868, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1735, _p$1736) }]);
const _tmp$869 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1737);
const _p$1738 = "13";
const _tmp$870 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1738) };
const _p$1739 = 22;
const _p$1740 = undefined;
const _tmp$871 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1739, _p$1740) };
const _p$1741 = 1;
const _p$1742 = undefined;
const _p$1743 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$870, _tmp$871, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1741, _p$1742) }]);
const _tmp$872 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1743);
const _p$1744 = "13";
const _tmp$873 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1744) };
const _p$1745 = 23;
const _p$1746 = undefined;
const _tmp$874 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1745, _p$1746) };
const _p$1747 = 1;
const _p$1748 = undefined;
const _p$1749 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$873, _tmp$874, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1747, _p$1748) }]);
const _tmp$875 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1749);
const _p$1750 = "13";
const _tmp$876 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1750) };
const _p$1751 = 24;
const _p$1752 = undefined;
const _tmp$877 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1751, _p$1752) };
const _p$1753 = 1;
const _p$1754 = undefined;
const _p$1755 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$876, _tmp$877, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1753, _p$1754) }]);
const _tmp$878 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1755);
const _p$1756 = "13";
const _tmp$879 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1756) };
const _p$1757 = 25;
const _p$1758 = undefined;
const _tmp$880 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1757, _p$1758) };
const _p$1759 = 1;
const _p$1760 = undefined;
const _p$1761 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$879, _tmp$880, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1759, _p$1760) }]);
const _tmp$881 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1761);
const _p$1762 = "13";
const _tmp$882 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1762) };
const _p$1763 = 26;
const _p$1764 = undefined;
const _tmp$883 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1763, _p$1764) };
const _p$1765 = 1;
const _p$1766 = undefined;
const _p$1767 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$882, _tmp$883, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1765, _p$1766) }]);
const _tmp$884 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1767);
const _p$1768 = "13";
const _tmp$885 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1768) };
const _p$1769 = 27;
const _p$1770 = undefined;
const _tmp$886 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1769, _p$1770) };
const _p$1771 = 1;
const _p$1772 = undefined;
const _p$1773 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$885, _tmp$886, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1771, _p$1772) }]);
const _tmp$887 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1773);
const _p$1774 = "13";
const _tmp$888 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1774) };
const _p$1775 = 28;
const _p$1776 = undefined;
const _tmp$889 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1775, _p$1776) };
const _p$1777 = 1;
const _p$1778 = undefined;
const _p$1779 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$888, _tmp$889, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1777, _p$1778) }]);
const _tmp$890 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1779);
const _p$1780 = "13";
const _tmp$891 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1780) };
const _p$1781 = 29;
const _p$1782 = undefined;
const _tmp$892 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1781, _p$1782) };
const _p$1783 = 1;
const _p$1784 = undefined;
const _p$1785 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$891, _tmp$892, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1783, _p$1784) }]);
const _tmp$893 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1785);
const _p$1786 = "13";
const _tmp$894 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1786) };
const _p$1787 = 30;
const _p$1788 = undefined;
const _tmp$895 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1787, _p$1788) };
const _p$1789 = 1;
const _p$1790 = undefined;
const _p$1791 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$894, _tmp$895, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1789, _p$1790) }]);
const _tmp$896 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1791);
const _p$1792 = "13";
const _tmp$897 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1792) };
const _p$1793 = 31;
const _p$1794 = undefined;
const _tmp$898 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1793, _p$1794) };
const _p$1795 = 1;
const _p$1796 = undefined;
const _p$1797 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$897, _tmp$898, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1795, _p$1796) }]);
const _tmp$899 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1797);
const _p$1798 = "13";
const _tmp$900 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1798) };
const _p$1799 = 32;
const _p$1800 = undefined;
const _tmp$901 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1799, _p$1800) };
const _p$1801 = 1;
const _p$1802 = undefined;
const _p$1803 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$900, _tmp$901, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1801, _p$1802) }]);
const _tmp$902 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1803);
const _p$1804 = "13";
const _tmp$903 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1804) };
const _p$1805 = 33;
const _p$1806 = undefined;
const _tmp$904 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1805, _p$1806) };
const _p$1807 = 1;
const _p$1808 = undefined;
const _p$1809 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$903, _tmp$904, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1807, _p$1808) }]);
const _tmp$905 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1809);
const _p$1810 = "13";
const _tmp$906 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1810) };
const _p$1811 = 34;
const _p$1812 = undefined;
const _tmp$907 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1811, _p$1812) };
const _p$1813 = 1;
const _p$1814 = undefined;
const _p$1815 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$906, _tmp$907, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1813, _p$1814) }]);
const _tmp$908 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1815);
const _p$1816 = "13";
const _tmp$909 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1816) };
const _p$1817 = 35;
const _p$1818 = undefined;
const _tmp$910 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1817, _p$1818) };
const _p$1819 = 1;
const _p$1820 = undefined;
const _p$1821 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$909, _tmp$910, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1819, _p$1820) }]);
const _tmp$911 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1821);
const _p$1822 = "13";
const _tmp$912 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1822) };
const _p$1823 = 36;
const _p$1824 = undefined;
const _tmp$913 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1823, _p$1824) };
const _p$1825 = 1;
const _p$1826 = undefined;
const _p$1827 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$912, _tmp$913, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1825, _p$1826) }]);
const _tmp$914 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1827);
const _p$1828 = "9";
const _tmp$915 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1828) };
const _p$1829 = 40;
const _p$1830 = undefined;
const _tmp$916 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1829, _p$1830) };
const _p$1831 = 0;
const _p$1832 = undefined;
const _p$1833 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$915, _tmp$916, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1831, _p$1832) }]);
const _tmp$917 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1833);
const _p$1834 = "9";
const _tmp$918 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1834) };
const _p$1835 = 41;
const _p$1836 = undefined;
const _tmp$919 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1835, _p$1836) };
const _p$1837 = 0;
const _p$1838 = undefined;
const _p$1839 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$918, _tmp$919, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1837, _p$1838) }]);
const _tmp$920 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1839);
const _p$1840 = "9";
const _tmp$921 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1840) };
const _p$1841 = 42;
const _p$1842 = undefined;
const _tmp$922 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1841, _p$1842) };
const _p$1843 = 0;
const _p$1844 = undefined;
const _p$1845 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$921, _tmp$922, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1843, _p$1844) }]);
const _tmp$923 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1845);
const _p$1846 = "9";
const _tmp$924 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1846) };
const _p$1847 = 43;
const _p$1848 = undefined;
const _tmp$925 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1847, _p$1848) };
const _p$1849 = 0;
const _p$1850 = undefined;
const _p$1851 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$924, _tmp$925, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1849, _p$1850) }]);
const _tmp$926 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1851);
const _p$1852 = "9";
const _tmp$927 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1852) };
const _p$1853 = 44;
const _p$1854 = undefined;
const _tmp$928 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1853, _p$1854) };
const _p$1855 = 0;
const _p$1856 = undefined;
const _p$1857 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$927, _tmp$928, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1855, _p$1856) }]);
const _tmp$929 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1857);
const _p$1858 = "9";
const _tmp$930 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1858) };
const _p$1859 = 45;
const _p$1860 = undefined;
const _tmp$931 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1859, _p$1860) };
const _p$1861 = 0;
const _p$1862 = undefined;
const _p$1863 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$930, _tmp$931, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1861, _p$1862) }]);
const _tmp$932 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1863);
const _p$1864 = "9";
const _tmp$933 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1864) };
const _p$1865 = 46;
const _p$1866 = undefined;
const _tmp$934 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1865, _p$1866) };
const _p$1867 = 0;
const _p$1868 = undefined;
const _p$1869 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$933, _tmp$934, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1867, _p$1868) }]);
const _tmp$935 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1869);
const _p$1870 = "9";
const _tmp$936 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1870) };
const _p$1871 = 47;
const _p$1872 = undefined;
const _tmp$937 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1871, _p$1872) };
const _p$1873 = 0;
const _p$1874 = undefined;
const _p$1875 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$936, _tmp$937, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1873, _p$1874) }]);
const _tmp$938 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1875);
const _p$1876 = "9";
const _tmp$939 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1876) };
const _p$1877 = 48;
const _p$1878 = undefined;
const _tmp$940 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1877, _p$1878) };
const _p$1879 = 0;
const _p$1880 = undefined;
const _p$1881 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$939, _tmp$940, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1879, _p$1880) }]);
const _tmp$941 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1881);
const _p$1882 = "9";
const _tmp$942 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1882) };
const _p$1883 = 49;
const _p$1884 = undefined;
const _tmp$943 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1883, _p$1884) };
const _p$1885 = 0;
const _p$1886 = undefined;
const _p$1887 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$942, _tmp$943, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1885, _p$1886) }]);
const _tmp$944 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1887);
const _p$1888 = "9";
const _tmp$945 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1888) };
const _p$1889 = 50;
const _p$1890 = undefined;
const _tmp$946 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1889, _p$1890) };
const _p$1891 = 0;
const _p$1892 = undefined;
const _p$1893 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$945, _tmp$946, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1891, _p$1892) }]);
const _tmp$947 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1893);
const _p$1894 = "9";
const _tmp$948 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1894) };
const _p$1895 = 51;
const _p$1896 = undefined;
const _tmp$949 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1895, _p$1896) };
const _p$1897 = 0;
const _p$1898 = undefined;
const _p$1899 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$948, _tmp$949, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1897, _p$1898) }]);
const _tmp$950 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1899);
const _p$1900 = "9";
const _tmp$951 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1900) };
const _p$1901 = 52;
const _p$1902 = undefined;
const _tmp$952 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1901, _p$1902) };
const _p$1903 = 0;
const _p$1904 = undefined;
const _p$1905 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$951, _tmp$952, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1903, _p$1904) }]);
const _tmp$953 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1905);
const _p$1906 = "9";
const _tmp$954 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1906) };
const _p$1907 = 53;
const _p$1908 = undefined;
const _tmp$955 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1907, _p$1908) };
const _p$1909 = 0;
const _p$1910 = undefined;
const _p$1911 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$954, _tmp$955, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1909, _p$1910) }]);
const _tmp$956 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1911);
const _p$1912 = "9";
const _tmp$957 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1912) };
const _p$1913 = 37;
const _p$1914 = undefined;
const _tmp$958 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1913, _p$1914) };
const _p$1915 = 0;
const _p$1916 = undefined;
const _p$1917 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$957, _tmp$958, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1915, _p$1916) }]);
const _tmp$959 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1917);
const _p$1918 = "9";
const _tmp$960 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1918) };
const _p$1919 = 38;
const _p$1920 = undefined;
const _tmp$961 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1919, _p$1920) };
const _p$1921 = 0;
const _p$1922 = undefined;
const _p$1923 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$960, _tmp$961, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1921, _p$1922) }]);
const _tmp$962 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1923);
const _p$1924 = "9";
const _tmp$963 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1924) };
const _p$1925 = 39;
const _p$1926 = undefined;
const _tmp$964 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1925, _p$1926) };
const _p$1927 = 0;
const _p$1928 = undefined;
const _p$1929 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$963, _tmp$964, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1927, _p$1928) }]);
const _tmp$965 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1929);
const _p$1930 = "13";
const _tmp$966 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1930) };
const _p$1931 = 37;
const _p$1932 = undefined;
const _tmp$967 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1931, _p$1932) };
const _p$1933 = 1;
const _p$1934 = undefined;
const _p$1935 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$966, _tmp$967, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1933, _p$1934) }]);
const _tmp$968 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1935);
const _p$1936 = "8";
const _tmp$969 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1936) };
const _p$1937 = 37;
const _p$1938 = undefined;
const _tmp$970 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1937, _p$1938) };
const _p$1939 = 2;
const _p$1940 = undefined;
const _p$1941 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$969, _tmp$970, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1939, _p$1940) }]);
const _tmp$971 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1941);
const _p$1942 = "13";
const _tmp$972 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1942) };
const _p$1943 = 38;
const _p$1944 = undefined;
const _tmp$973 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1943, _p$1944) };
const _p$1945 = 1;
const _p$1946 = undefined;
const _p$1947 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$972, _tmp$973, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1945, _p$1946) }]);
const _tmp$974 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1947);
const _p$1948 = "8";
const _tmp$975 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1948) };
const _p$1949 = 38;
const _p$1950 = undefined;
const _tmp$976 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1949, _p$1950) };
const _p$1951 = 2;
const _p$1952 = undefined;
const _p$1953 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$975, _tmp$976, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1951, _p$1952) }]);
const _tmp$977 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1953);
const _p$1954 = "8";
const _tmp$978 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1954) };
const _p$1955 = 39;
const _p$1956 = undefined;
const _tmp$979 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1955, _p$1956) };
const _p$1957 = 2;
const _p$1958 = undefined;
const _p$1959 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$978, _tmp$979, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1957, _p$1958) }]);
const _tmp$980 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1959);
const _p$1960 = "8";
const _tmp$981 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1960) };
const _p$1961 = 40;
const _p$1962 = undefined;
const _tmp$982 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1961, _p$1962) };
const _p$1963 = 2;
const _p$1964 = undefined;
const _p$1965 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$981, _tmp$982, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1963, _p$1964) }]);
const _tmp$983 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1965);
const _p$1966 = "8";
const _tmp$984 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1966) };
const _p$1967 = 41;
const _p$1968 = undefined;
const _tmp$985 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1967, _p$1968) };
const _p$1969 = 2;
const _p$1970 = undefined;
const _p$1971 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$984, _tmp$985, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1969, _p$1970) }]);
const _tmp$986 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1971);
const _p$1972 = "8";
const _tmp$987 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1972) };
const _p$1973 = 42;
const _p$1974 = undefined;
const _tmp$988 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1973, _p$1974) };
const _p$1975 = 2;
const _p$1976 = undefined;
const _p$1977 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$987, _tmp$988, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1975, _p$1976) }]);
const _tmp$989 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1977);
const _p$1978 = "8";
const _tmp$990 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1978) };
const _p$1979 = 43;
const _p$1980 = undefined;
const _tmp$991 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1979, _p$1980) };
const _p$1981 = 2;
const _p$1982 = undefined;
const _p$1983 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$990, _tmp$991, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1981, _p$1982) }]);
const _tmp$992 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1983);
const _p$1984 = "8";
const _tmp$993 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1984) };
const _p$1985 = 44;
const _p$1986 = undefined;
const _tmp$994 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1985, _p$1986) };
const _p$1987 = 2;
const _p$1988 = undefined;
const _p$1989 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$993, _tmp$994, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1987, _p$1988) }]);
const _tmp$995 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1989);
const _p$1990 = "8";
const _tmp$996 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1990) };
const _p$1991 = 45;
const _p$1992 = undefined;
const _tmp$997 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1991, _p$1992) };
const _p$1993 = 2;
const _p$1994 = undefined;
const _p$1995 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$996, _tmp$997, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1993, _p$1994) }]);
const _tmp$998 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$1995);
const _p$1996 = "8";
const _tmp$999 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$1996) };
const _p$1997 = 46;
const _p$1998 = undefined;
const _tmp$1000 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1997, _p$1998) };
const _p$1999 = 2;
const _p$2000 = undefined;
const _p$2001 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$999, _tmp$1000, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$1999, _p$2000) }]);
const _tmp$1001 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2001);
const _p$2002 = "8";
const _tmp$1002 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2002) };
const _p$2003 = 47;
const _p$2004 = undefined;
const _tmp$1003 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2003, _p$2004) };
const _p$2005 = 2;
const _p$2006 = undefined;
const _p$2007 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1002, _tmp$1003, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2005, _p$2006) }]);
const _tmp$1004 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2007);
const _p$2008 = "8";
const _tmp$1005 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2008) };
const _p$2009 = 48;
const _p$2010 = undefined;
const _tmp$1006 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2009, _p$2010) };
const _p$2011 = 2;
const _p$2012 = undefined;
const _p$2013 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1005, _tmp$1006, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2011, _p$2012) }]);
const _tmp$1007 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2013);
const _p$2014 = "8";
const _tmp$1008 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2014) };
const _p$2015 = 49;
const _p$2016 = undefined;
const _tmp$1009 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2015, _p$2016) };
const _p$2017 = 2;
const _p$2018 = undefined;
const _p$2019 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1008, _tmp$1009, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2017, _p$2018) }]);
const _tmp$1010 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2019);
const _p$2020 = "8";
const _tmp$1011 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2020) };
const _p$2021 = 50;
const _p$2022 = undefined;
const _tmp$1012 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2021, _p$2022) };
const _p$2023 = 2;
const _p$2024 = undefined;
const _p$2025 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1011, _tmp$1012, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2023, _p$2024) }]);
const _tmp$1013 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2025);
const _p$2026 = "8";
const _tmp$1014 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2026) };
const _p$2027 = 51;
const _p$2028 = undefined;
const _tmp$1015 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2027, _p$2028) };
const _p$2029 = 2;
const _p$2030 = undefined;
const _p$2031 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1014, _tmp$1015, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2029, _p$2030) }]);
const _tmp$1016 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2031);
const _p$2032 = "8";
const _tmp$1017 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2032) };
const _p$2033 = 52;
const _p$2034 = undefined;
const _tmp$1018 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2033, _p$2034) };
const _p$2035 = 2;
const _p$2036 = undefined;
const _p$2037 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1017, _tmp$1018, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2035, _p$2036) }]);
const _tmp$1019 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2037);
const _p$2038 = "8";
const _tmp$1020 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2038) };
const _p$2039 = 53;
const _p$2040 = undefined;
const _tmp$1021 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2039, _p$2040) };
const _p$2041 = 2;
const _p$2042 = undefined;
const _p$2043 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1020, _tmp$1021, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2041, _p$2042) }]);
const _tmp$1022 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2043);
const _p$2044 = "13";
const _tmp$1023 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2044) };
const _p$2045 = 39;
const _p$2046 = undefined;
const _tmp$1024 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2045, _p$2046) };
const _p$2047 = 1;
const _p$2048 = undefined;
const _p$2049 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1023, _tmp$1024, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2047, _p$2048) }]);
const _tmp$1025 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2049);
const _p$2050 = "13";
const _tmp$1026 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2050) };
const _p$2051 = 40;
const _p$2052 = undefined;
const _tmp$1027 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2051, _p$2052) };
const _p$2053 = 1;
const _p$2054 = undefined;
const _p$2055 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1026, _tmp$1027, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2053, _p$2054) }]);
const _tmp$1028 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2055);
const _p$2056 = "13";
const _tmp$1029 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2056) };
const _p$2057 = 41;
const _p$2058 = undefined;
const _tmp$1030 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2057, _p$2058) };
const _p$2059 = 1;
const _p$2060 = undefined;
const _p$2061 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1029, _tmp$1030, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2059, _p$2060) }]);
const _tmp$1031 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2061);
const _p$2062 = "13";
const _tmp$1032 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2062) };
const _p$2063 = 42;
const _p$2064 = undefined;
const _tmp$1033 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2063, _p$2064) };
const _p$2065 = 1;
const _p$2066 = undefined;
const _p$2067 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1032, _tmp$1033, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2065, _p$2066) }]);
const _tmp$1034 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2067);
const _p$2068 = "13";
const _tmp$1035 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2068) };
const _p$2069 = 43;
const _p$2070 = undefined;
const _tmp$1036 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2069, _p$2070) };
const _p$2071 = 1;
const _p$2072 = undefined;
const _p$2073 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1035, _tmp$1036, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2071, _p$2072) }]);
const _tmp$1037 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2073);
const _p$2074 = "13";
const _tmp$1038 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2074) };
const _p$2075 = 44;
const _p$2076 = undefined;
const _tmp$1039 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2075, _p$2076) };
const _p$2077 = 1;
const _p$2078 = undefined;
const _p$2079 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1038, _tmp$1039, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2077, _p$2078) }]);
const _tmp$1040 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2079);
const _p$2080 = "13";
const _tmp$1041 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2080) };
const _p$2081 = 45;
const _p$2082 = undefined;
const _tmp$1042 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2081, _p$2082) };
const _p$2083 = 1;
const _p$2084 = undefined;
const _p$2085 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1041, _tmp$1042, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2083, _p$2084) }]);
const _tmp$1043 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2085);
const _p$2086 = "13";
const _tmp$1044 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2086) };
const _p$2087 = 46;
const _p$2088 = undefined;
const _tmp$1045 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2087, _p$2088) };
const _p$2089 = 1;
const _p$2090 = undefined;
const _p$2091 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1044, _tmp$1045, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2089, _p$2090) }]);
const _tmp$1046 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2091);
const _p$2092 = "13";
const _tmp$1047 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2092) };
const _p$2093 = 47;
const _p$2094 = undefined;
const _tmp$1048 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2093, _p$2094) };
const _p$2095 = 1;
const _p$2096 = undefined;
const _p$2097 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1047, _tmp$1048, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2095, _p$2096) }]);
const _tmp$1049 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2097);
const _p$2098 = "13";
const _tmp$1050 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2098) };
const _p$2099 = 48;
const _p$2100 = undefined;
const _tmp$1051 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2099, _p$2100) };
const _p$2101 = 1;
const _p$2102 = undefined;
const _p$2103 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1050, _tmp$1051, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2101, _p$2102) }]);
const _tmp$1052 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2103);
const _p$2104 = "13";
const _tmp$1053 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2104) };
const _p$2105 = 49;
const _p$2106 = undefined;
const _tmp$1054 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2105, _p$2106) };
const _p$2107 = 1;
const _p$2108 = undefined;
const _p$2109 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1053, _tmp$1054, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2107, _p$2108) }]);
const _tmp$1055 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2109);
const _p$2110 = "13";
const _tmp$1056 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2110) };
const _p$2111 = 50;
const _p$2112 = undefined;
const _tmp$1057 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2111, _p$2112) };
const _p$2113 = 1;
const _p$2114 = undefined;
const _p$2115 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1056, _tmp$1057, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2113, _p$2114) }]);
const _tmp$1058 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2115);
const _p$2116 = "13";
const _tmp$1059 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2116) };
const _p$2117 = 51;
const _p$2118 = undefined;
const _tmp$1060 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2117, _p$2118) };
const _p$2119 = 1;
const _p$2120 = undefined;
const _p$2121 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1059, _tmp$1060, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2119, _p$2120) }]);
const _tmp$1061 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2121);
const _p$2122 = "13";
const _tmp$1062 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2122) };
const _p$2123 = 52;
const _p$2124 = undefined;
const _tmp$1063 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2123, _p$2124) };
const _p$2125 = 1;
const _p$2126 = undefined;
const _p$2127 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1062, _tmp$1063, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2125, _p$2126) }]);
const _tmp$1064 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2127);
const _p$2128 = "13";
const _tmp$1065 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2128) };
const _p$2129 = 53;
const _p$2130 = undefined;
const _tmp$1066 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2129, _p$2130) };
const _p$2131 = 1;
const _p$2132 = undefined;
const _p$2133 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1065, _tmp$1066, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2131, _p$2132) }]);
const _tmp$1067 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2133);
const _p$2134 = "9";
const _tmp$1068 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2134) };
const _p$2135 = 54;
const _p$2136 = undefined;
const _tmp$1069 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2135, _p$2136) };
const _p$2137 = 0;
const _p$2138 = undefined;
const _p$2139 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1068, _tmp$1069, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2137, _p$2138) }]);
const _tmp$1070 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2139);
const _p$2140 = "9";
const _tmp$1071 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2140) };
const _p$2141 = 55;
const _p$2142 = undefined;
const _tmp$1072 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2141, _p$2142) };
const _p$2143 = 0;
const _p$2144 = undefined;
const _p$2145 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1071, _tmp$1072, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2143, _p$2144) }]);
const _tmp$1073 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2145);
const _p$2146 = "9";
const _tmp$1074 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2146) };
const _p$2147 = 56;
const _p$2148 = undefined;
const _tmp$1075 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2147, _p$2148) };
const _p$2149 = 0;
const _p$2150 = undefined;
const _p$2151 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1074, _tmp$1075, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2149, _p$2150) }]);
const _tmp$1076 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2151);
const _p$2152 = "16";
const _tmp$1077 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2152) };
const _p$2153 = 57;
const _p$2154 = undefined;
const _tmp$1078 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2153, _p$2154) };
const _p$2155 = 0;
const _p$2156 = undefined;
const _p$2157 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1077, _tmp$1078, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2155, _p$2156) }]);
const _tmp$1079 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2157);
const _p$2158 = "13";
const _tmp$1080 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2158) };
const _p$2159 = 54;
const _p$2160 = undefined;
const _tmp$1081 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2159, _p$2160) };
const _p$2161 = 1;
const _p$2162 = undefined;
const _p$2163 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1080, _tmp$1081, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2161, _p$2162) }]);
const _tmp$1082 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2163);
const _p$2164 = "13";
const _tmp$1083 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2164) };
const _p$2165 = 55;
const _p$2166 = undefined;
const _tmp$1084 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2165, _p$2166) };
const _p$2167 = 1;
const _p$2168 = undefined;
const _p$2169 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1083, _tmp$1084, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2167, _p$2168) }]);
const _tmp$1085 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2169);
const _p$2170 = "10";
const _tmp$1086 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2170) };
const _p$2171 = 57;
const _p$2172 = undefined;
const _tmp$1087 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2171, _p$2172) };
const _p$2173 = 1;
const _p$2174 = undefined;
const _p$2175 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1086, _tmp$1087, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2173, _p$2174) }]);
const _tmp$1088 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2175);
const _p$2176 = "8";
const _tmp$1089 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2176) };
const _p$2177 = 54;
const _p$2178 = undefined;
const _tmp$1090 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2177, _p$2178) };
const _p$2179 = 2;
const _p$2180 = undefined;
const _p$2181 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1089, _tmp$1090, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2179, _p$2180) }]);
const _tmp$1091 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2181);
const _p$2182 = "13";
const _tmp$1092 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2182) };
const _p$2183 = 55;
const _p$2184 = undefined;
const _tmp$1093 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2183, _p$2184) };
const _p$2185 = 2;
const _p$2186 = undefined;
const _p$2187 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1092, _tmp$1093, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2185, _p$2186) }]);
const _tmp$1094 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2187);
const _p$2188 = "10";
const _tmp$1095 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2188) };
const _p$2189 = 57;
const _p$2190 = undefined;
const _tmp$1096 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2189, _p$2190) };
const _p$2191 = 2;
const _p$2192 = undefined;
const _p$2193 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1095, _tmp$1096, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2191, _p$2192) }]);
const _tmp$1097 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2193);
const _p$2194 = "11";
const _tmp$1098 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2194) };
const _p$2195 = 55;
const _p$2196 = undefined;
const _tmp$1099 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2195, _p$2196) };
const _p$2197 = 3;
const _p$2198 = undefined;
const _p$2199 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1098, _tmp$1099, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2197, _p$2198) }]);
const _tmp$1100 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2199);
const _p$2200 = "10";
const _tmp$1101 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2200) };
const _p$2201 = 57;
const _p$2202 = undefined;
const _tmp$1102 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2201, _p$2202) };
const _p$2203 = 3;
const _p$2204 = undefined;
const _p$2205 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1101, _tmp$1102, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2203, _p$2204) }]);
const _tmp$1103 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2205);
const _p$2206 = "11";
const _tmp$1104 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2206) };
const _p$2207 = 55;
const _p$2208 = undefined;
const _tmp$1105 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2207, _p$2208) };
const _p$2209 = 4;
const _p$2210 = undefined;
const _p$2211 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1104, _tmp$1105, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2209, _p$2210) }]);
const _tmp$1106 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2211);
const _p$2212 = "10";
const _tmp$1107 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2212) };
const _p$2213 = 57;
const _p$2214 = undefined;
const _tmp$1108 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2213, _p$2214) };
const _p$2215 = 4;
const _p$2216 = undefined;
const _p$2217 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1107, _tmp$1108, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2215, _p$2216) }]);
const _tmp$1109 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2217);
const _p$2218 = "11";
const _tmp$1110 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2218) };
const _p$2219 = 55;
const _p$2220 = undefined;
const _tmp$1111 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2219, _p$2220) };
const _p$2221 = 5;
const _p$2222 = undefined;
const _p$2223 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1110, _tmp$1111, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2221, _p$2222) }]);
const _tmp$1112 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2223);
const _p$2224 = "10";
const _tmp$1113 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2224) };
const _p$2225 = 57;
const _p$2226 = undefined;
const _tmp$1114 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2225, _p$2226) };
const _p$2227 = 5;
const _p$2228 = undefined;
const _p$2229 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1113, _tmp$1114, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2227, _p$2228) }]);
const _tmp$1115 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2229);
const _p$2230 = "10";
const _tmp$1116 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2230) };
const _p$2231 = 57;
const _p$2232 = undefined;
const _tmp$1117 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2231, _p$2232) };
const _p$2233 = 6;
const _p$2234 = undefined;
const _p$2235 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1116, _tmp$1117, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2233, _p$2234) }]);
const _tmp$1118 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2235);
const _p$2236 = "10";
const _tmp$1119 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2236) };
const _p$2237 = 57;
const _p$2238 = undefined;
const _tmp$1120 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2237, _p$2238) };
const _p$2239 = 7;
const _p$2240 = undefined;
const _p$2241 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1119, _tmp$1120, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2239, _p$2240) }]);
const _tmp$1121 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2241);
const _p$2242 = "10";
const _tmp$1122 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2242) };
const _p$2243 = 57;
const _p$2244 = undefined;
const _tmp$1123 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2243, _p$2244) };
const _p$2245 = 8;
const _p$2246 = undefined;
const _p$2247 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1122, _tmp$1123, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2245, _p$2246) }]);
const _tmp$1124 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2247);
const _p$2248 = "10";
const _tmp$1125 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2248) };
const _p$2249 = 57;
const _p$2250 = undefined;
const _tmp$1126 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2249, _p$2250) };
const _p$2251 = 9;
const _p$2252 = undefined;
const _p$2253 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1125, _tmp$1126, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2251, _p$2252) }]);
const _tmp$1127 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2253);
const _p$2254 = "10";
const _tmp$1128 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2254) };
const _p$2255 = 57;
const _p$2256 = undefined;
const _tmp$1129 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2255, _p$2256) };
const _p$2257 = 10;
const _p$2258 = undefined;
const _p$2259 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1128, _tmp$1129, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2257, _p$2258) }]);
const _tmp$1130 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2259);
const _p$2260 = "10";
const _tmp$1131 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2260) };
const _p$2261 = 57;
const _p$2262 = undefined;
const _tmp$1132 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2261, _p$2262) };
const _p$2263 = 11;
const _p$2264 = undefined;
const _p$2265 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1131, _tmp$1132, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2263, _p$2264) }]);
const _tmp$1133 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2265);
const _p$2266 = "10";
const _tmp$1134 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2266) };
const _p$2267 = 57;
const _p$2268 = undefined;
const _tmp$1135 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2267, _p$2268) };
const _p$2269 = 12;
const _p$2270 = undefined;
const _p$2271 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1134, _tmp$1135, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2269, _p$2270) }]);
const _tmp$1136 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2271);
const _p$2272 = "10";
const _tmp$1137 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2272) };
const _p$2273 = 57;
const _p$2274 = undefined;
const _tmp$1138 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2273, _p$2274) };
const _p$2275 = 13;
const _p$2276 = undefined;
const _p$2277 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1137, _tmp$1138, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2275, _p$2276) }]);
const _tmp$1139 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2277);
const _p$2278 = "10";
const _tmp$1140 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2278) };
const _p$2279 = 57;
const _p$2280 = undefined;
const _tmp$1141 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2279, _p$2280) };
const _p$2281 = 14;
const _p$2282 = undefined;
const _p$2283 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1140, _tmp$1141, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2281, _p$2282) }]);
const _tmp$1142 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2283);
const _p$2284 = "10";
const _tmp$1143 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2284) };
const _p$2285 = 57;
const _p$2286 = undefined;
const _tmp$1144 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2285, _p$2286) };
const _p$2287 = 15;
const _p$2288 = undefined;
const _p$2289 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1143, _tmp$1144, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2287, _p$2288) }]);
const _tmp$1145 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2289);
const _p$2290 = "10";
const _tmp$1146 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2290) };
const _p$2291 = 57;
const _p$2292 = undefined;
const _tmp$1147 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2291, _p$2292) };
const _p$2293 = 16;
const _p$2294 = undefined;
const _p$2295 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1146, _tmp$1147, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2293, _p$2294) }]);
const _tmp$1148 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2295);
const _p$2296 = "10";
const _tmp$1149 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2296) };
const _p$2297 = 57;
const _p$2298 = undefined;
const _tmp$1150 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2297, _p$2298) };
const _p$2299 = 17;
const _p$2300 = undefined;
const _p$2301 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1149, _tmp$1150, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2299, _p$2300) }]);
const _tmp$1151 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2301);
const _p$2302 = "10";
const _tmp$1152 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2302) };
const _p$2303 = 57;
const _p$2304 = undefined;
const _tmp$1153 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2303, _p$2304) };
const _p$2305 = 18;
const _p$2306 = undefined;
const _p$2307 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1152, _tmp$1153, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2305, _p$2306) }]);
const _tmp$1154 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2307);
const _p$2308 = "10";
const _tmp$1155 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2308) };
const _p$2309 = 57;
const _p$2310 = undefined;
const _tmp$1156 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2309, _p$2310) };
const _p$2311 = 19;
const _p$2312 = undefined;
const _p$2313 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1155, _tmp$1156, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2311, _p$2312) }]);
const _tmp$1157 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2313);
const _p$2314 = "10";
const _tmp$1158 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2314) };
const _p$2315 = 57;
const _p$2316 = undefined;
const _tmp$1159 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2315, _p$2316) };
const _p$2317 = 20;
const _p$2318 = undefined;
const _p$2319 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1158, _tmp$1159, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2317, _p$2318) }]);
const _tmp$1160 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2319);
const _p$2320 = "10";
const _tmp$1161 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2320) };
const _p$2321 = 57;
const _p$2322 = undefined;
const _tmp$1162 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2321, _p$2322) };
const _p$2323 = 21;
const _p$2324 = undefined;
const _p$2325 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1161, _tmp$1162, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2323, _p$2324) }]);
const _tmp$1163 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2325);
const _p$2326 = "10";
const _tmp$1164 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2326) };
const _p$2327 = 57;
const _p$2328 = undefined;
const _tmp$1165 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2327, _p$2328) };
const _p$2329 = 22;
const _p$2330 = undefined;
const _p$2331 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1164, _tmp$1165, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2329, _p$2330) }]);
const _tmp$1166 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2331);
const _p$2332 = "10";
const _tmp$1167 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2332) };
const _p$2333 = 57;
const _p$2334 = undefined;
const _tmp$1168 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2333, _p$2334) };
const _p$2335 = 23;
const _p$2336 = undefined;
const _p$2337 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1167, _tmp$1168, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2335, _p$2336) }]);
const _tmp$1169 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2337);
const _p$2338 = "10";
const _tmp$1170 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2338) };
const _p$2339 = 57;
const _p$2340 = undefined;
const _tmp$1171 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2339, _p$2340) };
const _p$2341 = 24;
const _p$2342 = undefined;
const _p$2343 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1170, _tmp$1171, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2341, _p$2342) }]);
const _tmp$1172 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2343);
const _p$2344 = "10";
const _tmp$1173 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2344) };
const _p$2345 = 57;
const _p$2346 = undefined;
const _tmp$1174 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2345, _p$2346) };
const _p$2347 = 25;
const _p$2348 = undefined;
const _p$2349 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1173, _tmp$1174, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2347, _p$2348) }]);
const _tmp$1175 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2349);
const _p$2350 = "10";
const _tmp$1176 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2350) };
const _p$2351 = 57;
const _p$2352 = undefined;
const _tmp$1177 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2351, _p$2352) };
const _p$2353 = 26;
const _p$2354 = undefined;
const _p$2355 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1176, _tmp$1177, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2353, _p$2354) }]);
const _tmp$1178 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2355);
const _p$2356 = "10";
const _tmp$1179 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2356) };
const _p$2357 = 57;
const _p$2358 = undefined;
const _tmp$1180 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2357, _p$2358) };
const _p$2359 = 27;
const _p$2360 = undefined;
const _p$2361 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1179, _tmp$1180, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2359, _p$2360) }]);
const _tmp$1181 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2361);
const _p$2362 = "10";
const _tmp$1182 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2362) };
const _p$2363 = 57;
const _p$2364 = undefined;
const _tmp$1183 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2363, _p$2364) };
const _p$2365 = 28;
const _p$2366 = undefined;
const _p$2367 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1182, _tmp$1183, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2365, _p$2366) }]);
const _tmp$1184 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2367);
const _p$2368 = "10";
const _tmp$1185 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2368) };
const _p$2369 = 57;
const _p$2370 = undefined;
const _tmp$1186 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2369, _p$2370) };
const _p$2371 = 29;
const _p$2372 = undefined;
const _p$2373 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1185, _tmp$1186, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2371, _p$2372) }]);
const _tmp$1187 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2373);
const _p$2374 = "10";
const _tmp$1188 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2374) };
const _p$2375 = 57;
const _p$2376 = undefined;
const _tmp$1189 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2375, _p$2376) };
const _p$2377 = 30;
const _p$2378 = undefined;
const _p$2379 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1188, _tmp$1189, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2377, _p$2378) }]);
const _tmp$1190 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2379);
const _p$2380 = "10";
const _tmp$1191 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2380) };
const _p$2381 = 57;
const _p$2382 = undefined;
const _tmp$1192 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2381, _p$2382) };
const _p$2383 = 31;
const _p$2384 = undefined;
const _p$2385 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1191, _tmp$1192, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2383, _p$2384) }]);
const _tmp$1193 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2385);
const _p$2386 = "13";
const _tmp$1194 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2386) };
const _p$2387 = 56;
const _p$2388 = undefined;
const _tmp$1195 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2387, _p$2388) };
const _p$2389 = 1;
const _p$2390 = undefined;
const _p$2391 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1194, _tmp$1195, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2389, _p$2390) }]);
const _tmp$1196 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2391);
const _p$2392 = "13";
const _tmp$1197 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2392) };
const _p$2393 = 56;
const _p$2394 = undefined;
const _tmp$1198 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2393, _p$2394) };
const _p$2395 = 2;
const _p$2396 = undefined;
const _p$2397 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1197, _tmp$1198, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2395, _p$2396) }]);
const _tmp$1199 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2397);
const _p$2398 = "13";
const _tmp$1200 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2398) };
const _p$2399 = 56;
const _p$2400 = undefined;
const _tmp$1201 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2399, _p$2400) };
const _p$2401 = 3;
const _p$2402 = undefined;
const _p$2403 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1200, _tmp$1201, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2401, _p$2402) }]);
const _tmp$1202 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2403);
const _p$2404 = "13";
const _tmp$1203 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2404) };
const _p$2405 = 56;
const _p$2406 = undefined;
const _tmp$1204 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2405, _p$2406) };
const _p$2407 = 4;
const _p$2408 = undefined;
const _p$2409 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1203, _tmp$1204, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2407, _p$2408) }]);
const _tmp$1205 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2409);
const _p$2410 = "13";
const _tmp$1206 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2410) };
const _p$2411 = 56;
const _p$2412 = undefined;
const _tmp$1207 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2411, _p$2412) };
const _p$2413 = 5;
const _p$2414 = undefined;
const _p$2415 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1206, _tmp$1207, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2413, _p$2414) }]);
const _tmp$1208 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2415);
const _p$2416 = "13";
const _tmp$1209 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2416) };
const _p$2417 = 56;
const _p$2418 = undefined;
const _tmp$1210 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2417, _p$2418) };
const _p$2419 = 6;
const _p$2420 = undefined;
const _p$2421 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1209, _tmp$1210, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2419, _p$2420) }]);
const _tmp$1211 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2421);
const _p$2422 = "13";
const _tmp$1212 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2422) };
const _p$2423 = 56;
const _p$2424 = undefined;
const _tmp$1213 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2423, _p$2424) };
const _p$2425 = 7;
const _p$2426 = undefined;
const _p$2427 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1212, _tmp$1213, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2425, _p$2426) }]);
const _tmp$1214 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2427);
const _p$2428 = "13";
const _tmp$1215 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2428) };
const _p$2429 = 56;
const _p$2430 = undefined;
const _tmp$1216 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2429, _p$2430) };
const _p$2431 = 8;
const _p$2432 = undefined;
const _p$2433 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1215, _tmp$1216, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2431, _p$2432) }]);
const _tmp$1217 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2433);
const _p$2434 = "13";
const _tmp$1218 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2434) };
const _p$2435 = 56;
const _p$2436 = undefined;
const _tmp$1219 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2435, _p$2436) };
const _p$2437 = 9;
const _p$2438 = undefined;
const _p$2439 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1218, _tmp$1219, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2437, _p$2438) }]);
const _tmp$1220 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2439);
const _p$2440 = "13";
const _tmp$1221 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2440) };
const _p$2441 = 56;
const _p$2442 = undefined;
const _tmp$1222 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2441, _p$2442) };
const _p$2443 = 10;
const _p$2444 = undefined;
const _p$2445 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1221, _tmp$1222, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2443, _p$2444) }]);
const _tmp$1223 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2445);
const _p$2446 = "13";
const _tmp$1224 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2446) };
const _p$2447 = 56;
const _p$2448 = undefined;
const _tmp$1225 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2447, _p$2448) };
const _p$2449 = 17;
const _p$2450 = undefined;
const _p$2451 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1224, _tmp$1225, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2449, _p$2450) }]);
const _tmp$1226 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2451);
const _p$2452 = "13";
const _tmp$1227 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2452) };
const _p$2453 = 56;
const _p$2454 = undefined;
const _tmp$1228 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2453, _p$2454) };
const _p$2455 = 18;
const _p$2456 = undefined;
const _p$2457 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1227, _tmp$1228, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2455, _p$2456) }]);
const _tmp$1229 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2457);
const _p$2458 = "13";
const _tmp$1230 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2458) };
const _p$2459 = 56;
const _p$2460 = undefined;
const _tmp$1231 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2459, _p$2460) };
const _p$2461 = 19;
const _p$2462 = undefined;
const _p$2463 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1230, _tmp$1231, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2461, _p$2462) }]);
const _tmp$1232 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2463);
const _p$2464 = "13";
const _tmp$1233 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2464) };
const _p$2465 = 56;
const _p$2466 = undefined;
const _tmp$1234 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2465, _p$2466) };
const _p$2467 = 20;
const _p$2468 = undefined;
const _p$2469 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1233, _tmp$1234, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2467, _p$2468) }]);
const _tmp$1235 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2469);
const _p$2470 = "13";
const _tmp$1236 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2470) };
const _p$2471 = 56;
const _p$2472 = undefined;
const _tmp$1237 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2471, _p$2472) };
const _p$2473 = 21;
const _p$2474 = undefined;
const _p$2475 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1236, _tmp$1237, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2473, _p$2474) }]);
const _tmp$1238 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2475);
const _p$2476 = "13";
const _tmp$1239 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2476) };
const _p$2477 = 56;
const _p$2478 = undefined;
const _tmp$1240 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2477, _p$2478) };
const _p$2479 = 22;
const _p$2480 = undefined;
const _p$2481 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1239, _tmp$1240, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2479, _p$2480) }]);
const _tmp$1241 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2481);
const _p$2482 = "13";
const _tmp$1242 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2482) };
const _p$2483 = 56;
const _p$2484 = undefined;
const _tmp$1243 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2483, _p$2484) };
const _p$2485 = 23;
const _p$2486 = undefined;
const _p$2487 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1242, _tmp$1243, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2485, _p$2486) }]);
const _tmp$1244 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2487);
const _p$2488 = "13";
const _tmp$1245 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2488) };
const _p$2489 = 56;
const _p$2490 = undefined;
const _tmp$1246 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2489, _p$2490) };
const _p$2491 = 28;
const _p$2492 = undefined;
const _p$2493 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1245, _tmp$1246, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2491, _p$2492) }]);
const _tmp$1247 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2493);
const _p$2494 = "13";
const _tmp$1248 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2494) };
const _p$2495 = 56;
const _p$2496 = undefined;
const _tmp$1249 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2495, _p$2496) };
const _p$2497 = 29;
const _p$2498 = undefined;
const _p$2499 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1248, _tmp$1249, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2497, _p$2498) }]);
const _tmp$1250 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2499);
const _p$2500 = "13";
const _tmp$1251 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2500) };
const _p$2501 = 56;
const _p$2502 = undefined;
const _tmp$1252 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2501, _p$2502) };
const _p$2503 = 30;
const _p$2504 = undefined;
const _p$2505 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1251, _tmp$1252, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2503, _p$2504) }]);
const _tmp$1253 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2505);
const _p$2506 = "13";
const _tmp$1254 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2506) };
const _p$2507 = 56;
const _p$2508 = undefined;
const _tmp$1255 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2507, _p$2508) };
const _p$2509 = 31;
const _p$2510 = undefined;
const _p$2511 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1254, _tmp$1255, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2509, _p$2510) }]);
const _tmp$1256 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2511);
const _p$2512 = "13";
const _tmp$1257 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2512) };
const _p$2513 = 56;
const _p$2514 = undefined;
const _tmp$1258 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2513, _p$2514) };
const _p$2515 = 32;
const _p$2516 = undefined;
const _p$2517 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1257, _tmp$1258, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2515, _p$2516) }]);
const _tmp$1259 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2517);
const _p$2518 = "10";
const _tmp$1260 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2518) };
const _p$2519 = 57;
const _p$2520 = undefined;
const _tmp$1261 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2519, _p$2520) };
const _p$2521 = 32;
const _p$2522 = undefined;
const _p$2523 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1260, _tmp$1261, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2521, _p$2522) }]);
const _tmp$1262 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2523);
const _p$2524 = "13";
const _tmp$1263 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2524) };
const _p$2525 = 56;
const _p$2526 = undefined;
const _tmp$1264 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2525, _p$2526) };
const _p$2527 = 33;
const _p$2528 = undefined;
const _p$2529 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1263, _tmp$1264, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2527, _p$2528) }]);
const _tmp$1265 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2529);
const _p$2530 = "10";
const _tmp$1266 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2530) };
const _p$2531 = 57;
const _p$2532 = undefined;
const _tmp$1267 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2531, _p$2532) };
const _p$2533 = 33;
const _p$2534 = undefined;
const _p$2535 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1266, _tmp$1267, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2533, _p$2534) }]);
const _tmp$1268 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2535);
const _p$2536 = "13";
const _tmp$1269 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2536) };
const _p$2537 = 38;
const _p$2538 = undefined;
const _tmp$1270 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2537, _p$2538) };
const _p$2539 = 34;
const _p$2540 = undefined;
const _p$2541 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1269, _tmp$1270, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2539, _p$2540) }]);
const _tmp$1271 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2541);
const _p$2542 = "8";
const _tmp$1272 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2542) };
const _p$2543 = 38;
const _p$2544 = undefined;
const _tmp$1273 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2543, _p$2544) };
const _p$2545 = 35;
const _p$2546 = undefined;
const _p$2547 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1272, _tmp$1273, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2545, _p$2546) }]);
const _tmp$1274 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2547);
const _p$2548 = "13";
const _tmp$1275 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2548) };
const _p$2549 = 39;
const _p$2550 = undefined;
const _tmp$1276 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2549, _p$2550) };
const _p$2551 = 34;
const _p$2552 = undefined;
const _p$2553 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1275, _tmp$1276, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2551, _p$2552) }]);
const _tmp$1277 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2553);
const _p$2554 = "8";
const _tmp$1278 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2554) };
const _p$2555 = 39;
const _p$2556 = undefined;
const _tmp$1279 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2555, _p$2556) };
const _p$2557 = 35;
const _p$2558 = undefined;
const _p$2559 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1278, _tmp$1279, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2557, _p$2558) }]);
const _tmp$1280 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2559);
const _p$2560 = "8";
const _tmp$1281 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2560) };
const _p$2561 = 40;
const _p$2562 = undefined;
const _tmp$1282 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2561, _p$2562) };
const _p$2563 = 35;
const _p$2564 = undefined;
const _p$2565 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1281, _tmp$1282, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2563, _p$2564) }]);
const _tmp$1283 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2565);
const _p$2566 = "8";
const _tmp$1284 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2566) };
const _p$2567 = 41;
const _p$2568 = undefined;
const _tmp$1285 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2567, _p$2568) };
const _p$2569 = 35;
const _p$2570 = undefined;
const _p$2571 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1284, _tmp$1285, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2569, _p$2570) }]);
const _tmp$1286 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2571);
const _p$2572 = "8";
const _tmp$1287 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2572) };
const _p$2573 = 42;
const _p$2574 = undefined;
const _tmp$1288 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2573, _p$2574) };
const _p$2575 = 35;
const _p$2576 = undefined;
const _p$2577 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1287, _tmp$1288, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2575, _p$2576) }]);
const _tmp$1289 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2577);
const _p$2578 = "8";
const _tmp$1290 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2578) };
const _p$2579 = 43;
const _p$2580 = undefined;
const _tmp$1291 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2579, _p$2580) };
const _p$2581 = 35;
const _p$2582 = undefined;
const _p$2583 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1290, _tmp$1291, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2581, _p$2582) }]);
const _tmp$1292 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2583);
const _p$2584 = "8";
const _tmp$1293 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2584) };
const _p$2585 = 44;
const _p$2586 = undefined;
const _tmp$1294 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2585, _p$2586) };
const _p$2587 = 35;
const _p$2588 = undefined;
const _p$2589 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1293, _tmp$1294, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2587, _p$2588) }]);
const _tmp$1295 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2589);
const _p$2590 = "8";
const _tmp$1296 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2590) };
const _p$2591 = 45;
const _p$2592 = undefined;
const _tmp$1297 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2591, _p$2592) };
const _p$2593 = 35;
const _p$2594 = undefined;
const _p$2595 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1296, _tmp$1297, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2593, _p$2594) }]);
const _tmp$1298 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2595);
const _p$2596 = "8";
const _tmp$1299 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2596) };
const _p$2597 = 46;
const _p$2598 = undefined;
const _tmp$1300 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2597, _p$2598) };
const _p$2599 = 35;
const _p$2600 = undefined;
const _p$2601 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1299, _tmp$1300, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2599, _p$2600) }]);
const _tmp$1301 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2601);
const _p$2602 = "8";
const _tmp$1302 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2602) };
const _p$2603 = 47;
const _p$2604 = undefined;
const _tmp$1303 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2603, _p$2604) };
const _p$2605 = 35;
const _p$2606 = undefined;
const _p$2607 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1302, _tmp$1303, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2605, _p$2606) }]);
const _tmp$1304 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2607);
const _p$2608 = "8";
const _tmp$1305 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2608) };
const _p$2609 = 48;
const _p$2610 = undefined;
const _tmp$1306 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2609, _p$2610) };
const _p$2611 = 35;
const _p$2612 = undefined;
const _p$2613 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1305, _tmp$1306, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2611, _p$2612) }]);
const _tmp$1307 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2613);
const _p$2614 = "8";
const _tmp$1308 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2614) };
const _p$2615 = 49;
const _p$2616 = undefined;
const _tmp$1309 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2615, _p$2616) };
const _p$2617 = 35;
const _p$2618 = undefined;
const _p$2619 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1308, _tmp$1309, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2617, _p$2618) }]);
const _tmp$1310 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2619);
const _p$2620 = "8";
const _tmp$1311 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2620) };
const _p$2621 = 50;
const _p$2622 = undefined;
const _tmp$1312 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2621, _p$2622) };
const _p$2623 = 35;
const _p$2624 = undefined;
const _p$2625 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1311, _tmp$1312, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2623, _p$2624) }]);
const _tmp$1313 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2625);
const _p$2626 = "8";
const _tmp$1314 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2626) };
const _p$2627 = 51;
const _p$2628 = undefined;
const _tmp$1315 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2627, _p$2628) };
const _p$2629 = 35;
const _p$2630 = undefined;
const _p$2631 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1314, _tmp$1315, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2629, _p$2630) }]);
const _tmp$1316 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2631);
const _p$2632 = "8";
const _tmp$1317 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2632) };
const _p$2633 = 52;
const _p$2634 = undefined;
const _tmp$1318 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2633, _p$2634) };
const _p$2635 = 35;
const _p$2636 = undefined;
const _p$2637 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1317, _tmp$1318, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2635, _p$2636) }]);
const _tmp$1319 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2637);
const _p$2638 = "8";
const _tmp$1320 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2638) };
const _p$2639 = 53;
const _p$2640 = undefined;
const _tmp$1321 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2639, _p$2640) };
const _p$2641 = 35;
const _p$2642 = undefined;
const _p$2643 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1320, _tmp$1321, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2641, _p$2642) }]);
const _tmp$1322 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2643);
const _p$2644 = "8";
const _tmp$1323 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2644) };
const _p$2645 = 54;
const _p$2646 = undefined;
const _tmp$1324 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2645, _p$2646) };
const _p$2647 = 35;
const _p$2648 = undefined;
const _p$2649 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1323, _tmp$1324, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2647, _p$2648) }]);
const _tmp$1325 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2649);
const _p$2650 = "8";
const _tmp$1326 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2650) };
const _p$2651 = 55;
const _p$2652 = undefined;
const _tmp$1327 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2651, _p$2652) };
const _p$2653 = 35;
const _p$2654 = undefined;
const _p$2655 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1326, _tmp$1327, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2653, _p$2654) }]);
const _tmp$1328 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2655);
const _p$2656 = "10";
const _tmp$1329 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2656) };
const _p$2657 = 57;
const _p$2658 = undefined;
const _tmp$1330 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2657, _p$2658) };
const _p$2659 = 34;
const _p$2660 = undefined;
const _p$2661 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1329, _tmp$1330, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2659, _p$2660) }]);
const _tmp$1331 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2661);
const _p$2662 = "8";
const _tmp$1332 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2662) };
const _p$2663 = 56;
const _p$2664 = undefined;
const _tmp$1333 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2663, _p$2664) };
const _p$2665 = 35;
const _p$2666 = undefined;
const _p$2667 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1332, _tmp$1333, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2665, _p$2666) }]);
const _tmp$1334 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2667);
const _p$2668 = "12";
const _tmp$1335 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2668) };
const _p$2669 = 57;
const _p$2670 = undefined;
const _tmp$1336 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2669, _p$2670) };
const _p$2671 = 35;
const _p$2672 = undefined;
const _p$2673 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1335, _tmp$1336, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2671, _p$2672) }]);
const _tmp$1337 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2673);
const _p$2674 = "13";
const _tmp$1338 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2674) };
const _p$2675 = 40;
const _p$2676 = undefined;
const _tmp$1339 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2675, _p$2676) };
const _p$2677 = 34;
const _p$2678 = undefined;
const _p$2679 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1338, _tmp$1339, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2677, _p$2678) }]);
const _tmp$1340 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2679);
const _p$2680 = "13";
const _tmp$1341 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2680) };
const _p$2681 = 41;
const _p$2682 = undefined;
const _tmp$1342 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2681, _p$2682) };
const _p$2683 = 34;
const _p$2684 = undefined;
const _p$2685 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1341, _tmp$1342, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2683, _p$2684) }]);
const _tmp$1343 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2685);
const _p$2686 = "13";
const _tmp$1344 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2686) };
const _p$2687 = 42;
const _p$2688 = undefined;
const _tmp$1345 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2687, _p$2688) };
const _p$2689 = 34;
const _p$2690 = undefined;
const _p$2691 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1344, _tmp$1345, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2689, _p$2690) }]);
const _tmp$1346 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2691);
const _p$2692 = "13";
const _tmp$1347 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2692) };
const _p$2693 = 43;
const _p$2694 = undefined;
const _tmp$1348 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2693, _p$2694) };
const _p$2695 = 34;
const _p$2696 = undefined;
const _p$2697 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1347, _tmp$1348, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2695, _p$2696) }]);
const _tmp$1349 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2697);
const _p$2698 = "13";
const _tmp$1350 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2698) };
const _p$2699 = 44;
const _p$2700 = undefined;
const _tmp$1351 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2699, _p$2700) };
const _p$2701 = 34;
const _p$2702 = undefined;
const _p$2703 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1350, _tmp$1351, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2701, _p$2702) }]);
const _tmp$1352 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2703);
const _p$2704 = "13";
const _tmp$1353 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2704) };
const _p$2705 = 45;
const _p$2706 = undefined;
const _tmp$1354 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2705, _p$2706) };
const _p$2707 = 34;
const _p$2708 = undefined;
const _p$2709 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1353, _tmp$1354, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2707, _p$2708) }]);
const _tmp$1355 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2709);
const _p$2710 = "13";
const _tmp$1356 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2710) };
const _p$2711 = 46;
const _p$2712 = undefined;
const _tmp$1357 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2711, _p$2712) };
const _p$2713 = 34;
const _p$2714 = undefined;
const _p$2715 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1356, _tmp$1357, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2713, _p$2714) }]);
const _tmp$1358 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2715);
const _p$2716 = "13";
const _tmp$1359 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2716) };
const _p$2717 = 47;
const _p$2718 = undefined;
const _tmp$1360 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2717, _p$2718) };
const _p$2719 = 34;
const _p$2720 = undefined;
const _p$2721 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1359, _tmp$1360, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2719, _p$2720) }]);
const _tmp$1361 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2721);
const _p$2722 = "13";
const _tmp$1362 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2722) };
const _p$2723 = 48;
const _p$2724 = undefined;
const _tmp$1363 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2723, _p$2724) };
const _p$2725 = 34;
const _p$2726 = undefined;
const _p$2727 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1362, _tmp$1363, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2725, _p$2726) }]);
const _tmp$1364 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2727);
const _p$2728 = "13";
const _tmp$1365 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2728) };
const _p$2729 = 49;
const _p$2730 = undefined;
const _tmp$1366 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2729, _p$2730) };
const _p$2731 = 34;
const _p$2732 = undefined;
const _p$2733 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1365, _tmp$1366, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2731, _p$2732) }]);
const _tmp$1367 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2733);
const _p$2734 = "13";
const _tmp$1368 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2734) };
const _p$2735 = 50;
const _p$2736 = undefined;
const _tmp$1369 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2735, _p$2736) };
const _p$2737 = 34;
const _p$2738 = undefined;
const _p$2739 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1368, _tmp$1369, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2737, _p$2738) }]);
const _tmp$1370 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2739);
const _p$2740 = "13";
const _tmp$1371 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2740) };
const _p$2741 = 51;
const _p$2742 = undefined;
const _tmp$1372 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2741, _p$2742) };
const _p$2743 = 34;
const _p$2744 = undefined;
const _p$2745 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1371, _tmp$1372, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2743, _p$2744) }]);
const _tmp$1373 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2745);
const _p$2746 = "13";
const _tmp$1374 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2746) };
const _p$2747 = 52;
const _p$2748 = undefined;
const _tmp$1375 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2747, _p$2748) };
const _p$2749 = 34;
const _p$2750 = undefined;
const _p$2751 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1374, _tmp$1375, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2749, _p$2750) }]);
const _tmp$1376 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2751);
const _p$2752 = "13";
const _tmp$1377 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2752) };
const _p$2753 = 53;
const _p$2754 = undefined;
const _tmp$1378 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2753, _p$2754) };
const _p$2755 = 34;
const _p$2756 = undefined;
const _p$2757 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1377, _tmp$1378, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2755, _p$2756) }]);
const _tmp$1379 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2757);
const _p$2758 = "13";
const _tmp$1380 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2758) };
const _p$2759 = 54;
const _p$2760 = undefined;
const _tmp$1381 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2759, _p$2760) };
const _p$2761 = 34;
const _p$2762 = undefined;
const _p$2763 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1380, _tmp$1381, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2761, _p$2762) }]);
const _tmp$1382 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2763);
const _p$2764 = "13";
const _tmp$1383 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2764) };
const _p$2765 = 55;
const _p$2766 = undefined;
const _tmp$1384 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2765, _p$2766) };
const _p$2767 = 34;
const _p$2768 = undefined;
const _p$2769 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1383, _tmp$1384, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2767, _p$2768) }]);
const _tmp$1385 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2769);
const _p$2770 = "13";
const _tmp$1386 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2770) };
const _p$2771 = 56;
const _p$2772 = undefined;
const _tmp$1387 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2771, _p$2772) };
const _p$2773 = 34;
const _p$2774 = undefined;
const _p$2775 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1386, _tmp$1387, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2773, _p$2774) }]);
const _tmp$1388 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2775);
const _p$2776 = "13";
const _tmp$1389 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2776) };
const _p$2777 = 56;
const _p$2778 = undefined;
const _tmp$1390 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2777, _p$2778) };
const _p$2779 = 24;
const _p$2780 = undefined;
const _p$2781 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1389, _tmp$1390, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2779, _p$2780) }]);
const _tmp$1391 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2781);
const _p$2782 = "13";
const _tmp$1392 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2782) };
const _p$2783 = 56;
const _p$2784 = undefined;
const _tmp$1393 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2783, _p$2784) };
const _p$2785 = 25;
const _p$2786 = undefined;
const _p$2787 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1392, _tmp$1393, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2785, _p$2786) }]);
const _tmp$1394 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2787);
const _p$2788 = "13";
const _tmp$1395 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2788) };
const _p$2789 = 56;
const _p$2790 = undefined;
const _tmp$1396 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2789, _p$2790) };
const _p$2791 = 26;
const _p$2792 = undefined;
const _p$2793 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1395, _tmp$1396, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2791, _p$2792) }]);
const _tmp$1397 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2793);
const _p$2794 = "13";
const _tmp$1398 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2794) };
const _p$2795 = 56;
const _p$2796 = undefined;
const _tmp$1399 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2795, _p$2796) };
const _p$2797 = 27;
const _p$2798 = undefined;
const _p$2799 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1398, _tmp$1399, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2797, _p$2798) }]);
const _tmp$1400 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2799);
const _p$2800 = "13";
const _tmp$1401 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2800) };
const _p$2801 = 56;
const _p$2802 = undefined;
const _tmp$1402 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2801, _p$2802) };
const _p$2803 = 15;
const _p$2804 = undefined;
const _p$2805 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1401, _tmp$1402, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2803, _p$2804) }]);
const _tmp$1403 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2805);
const _p$2806 = "13";
const _tmp$1404 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2806) };
const _p$2807 = 56;
const _p$2808 = undefined;
const _tmp$1405 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2807, _p$2808) };
const _p$2809 = 16;
const _p$2810 = undefined;
const _p$2811 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1404, _tmp$1405, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2809, _p$2810) }]);
const _tmp$1406 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2811);
const _p$2812 = "13";
const _tmp$1407 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2812) };
const _p$2813 = 56;
const _p$2814 = undefined;
const _tmp$1408 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2813, _p$2814) };
const _p$2815 = 11;
const _p$2816 = undefined;
const _p$2817 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1407, _tmp$1408, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2815, _p$2816) }]);
const _tmp$1409 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2817);
const _p$2818 = "13";
const _tmp$1410 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2818) };
const _p$2819 = 56;
const _p$2820 = undefined;
const _tmp$1411 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2819, _p$2820) };
const _p$2821 = 12;
const _p$2822 = undefined;
const _p$2823 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1410, _tmp$1411, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2821, _p$2822) }]);
const _tmp$1412 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2823);
const _p$2824 = "13";
const _tmp$1413 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2824) };
const _p$2825 = 56;
const _p$2826 = undefined;
const _tmp$1414 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2825, _p$2826) };
const _p$2827 = 13;
const _p$2828 = undefined;
const _p$2829 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1413, _tmp$1414, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2827, _p$2828) }]);
const _tmp$1415 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2829);
const _p$2830 = "13";
const _tmp$1416 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2830) };
const _p$2831 = 56;
const _p$2832 = undefined;
const _tmp$1417 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2831, _p$2832) };
const _p$2833 = 14;
const _p$2834 = undefined;
const _p$2835 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1416, _tmp$1417, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2833, _p$2834) }]);
const _tmp$1418 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2835);
const _p$2836 = "10";
const _tmp$1419 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2836) };
const _p$2837 = 2;
const _p$2838 = undefined;
const _tmp$1420 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2837, _p$2838) };
const _p$2839 = 12;
const _p$2840 = undefined;
const _p$2841 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1419, _tmp$1420, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2839, _p$2840) }]);
const _tmp$1421 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2841);
const _p$2842 = "10";
const _tmp$1422 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2842) };
const _p$2843 = 2;
const _p$2844 = undefined;
const _tmp$1423 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2843, _p$2844) };
const _p$2845 = 19;
const _p$2846 = undefined;
const _p$2847 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1422, _tmp$1423, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2845, _p$2846) }]);
const _tmp$1424 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2847);
const _p$2848 = "10";
const _tmp$1425 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2848) };
const _p$2849 = 2;
const _p$2850 = undefined;
const _tmp$1426 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2849, _p$2850) };
const _p$2851 = 20;
const _p$2852 = undefined;
const _p$2853 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1425, _tmp$1426, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2851, _p$2852) }]);
const _tmp$1427 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2853);
const _p$2854 = "10";
const _tmp$1428 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2854) };
const _p$2855 = 2;
const _p$2856 = undefined;
const _tmp$1429 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2855, _p$2856) };
const _p$2857 = 21;
const _p$2858 = undefined;
const _p$2859 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1428, _tmp$1429, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2857, _p$2858) }]);
const _tmp$1430 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2859);
const _p$2860 = "10";
const _tmp$1431 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2860) };
const _p$2861 = 2;
const _p$2862 = undefined;
const _tmp$1432 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2861, _p$2862) };
const _p$2863 = 28;
const _p$2864 = undefined;
const _p$2865 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1431, _tmp$1432, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2863, _p$2864) }]);
const _tmp$1433 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2865);
const _p$2866 = "10";
const _tmp$1434 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2866) };
const _p$2867 = 2;
const _p$2868 = undefined;
const _tmp$1435 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2867, _p$2868) };
const _p$2869 = 29;
const _p$2870 = undefined;
const _p$2871 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1434, _tmp$1435, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2869, _p$2870) }]);
const _tmp$1436 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2871);
const _p$2872 = "10";
const _tmp$1437 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2872) };
const _p$2873 = 2;
const _p$2874 = undefined;
const _tmp$1438 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2873, _p$2874) };
const _p$2875 = 30;
const _p$2876 = undefined;
const _p$2877 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1437, _tmp$1438, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2875, _p$2876) }]);
const _tmp$1439 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2877);
const _p$2878 = "10";
const _tmp$1440 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2878) };
const _p$2879 = 2;
const _p$2880 = undefined;
const _tmp$1441 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2879, _p$2880) };
const _p$2881 = 31;
const _p$2882 = undefined;
const _p$2883 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1440, _tmp$1441, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2881, _p$2882) }]);
const _tmp$1442 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2883);
const _p$2884 = "10";
const _tmp$1443 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2884) };
const _p$2885 = 2;
const _p$2886 = undefined;
const _tmp$1444 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2885, _p$2886) };
const _p$2887 = 32;
const _p$2888 = undefined;
const _p$2889 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1443, _tmp$1444, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2887, _p$2888) }]);
const _tmp$1445 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2889);
const _p$2890 = "13";
const _tmp$1446 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2890) };
const _p$2891 = 2;
const _p$2892 = undefined;
const _tmp$1447 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2891, _p$2892) };
const _p$2893 = 33;
const _p$2894 = undefined;
const _p$2895 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1446, _tmp$1447, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2893, _p$2894) }]);
const _tmp$1448 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2895);
const _p$2896 = "9";
const _tmp$1449 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2896) };
const _p$2897 = 3;
const _p$2898 = undefined;
const _tmp$1450 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2897, _p$2898) };
const _p$2899 = 33;
const _p$2900 = undefined;
const _p$2901 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1449, _tmp$1450, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2899, _p$2900) }]);
const _tmp$1451 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2901);
const _p$2902 = "9";
const _tmp$1452 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2902) };
const _p$2903 = 4;
const _p$2904 = undefined;
const _tmp$1453 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2903, _p$2904) };
const _p$2905 = 33;
const _p$2906 = undefined;
const _p$2907 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1452, _tmp$1453, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2905, _p$2906) }]);
const _tmp$1454 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2907);
const _p$2908 = "9";
const _tmp$1455 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2908) };
const _p$2909 = 5;
const _p$2910 = undefined;
const _tmp$1456 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2909, _p$2910) };
const _p$2911 = 33;
const _p$2912 = undefined;
const _p$2913 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1455, _tmp$1456, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2911, _p$2912) }]);
const _tmp$1457 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2913);
const _p$2914 = "9";
const _tmp$1458 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2914) };
const _p$2915 = 6;
const _p$2916 = undefined;
const _tmp$1459 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2915, _p$2916) };
const _p$2917 = 33;
const _p$2918 = undefined;
const _p$2919 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1458, _tmp$1459, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2917, _p$2918) }]);
const _tmp$1460 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2919);
const _p$2920 = "9";
const _tmp$1461 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2920) };
const _p$2921 = 7;
const _p$2922 = undefined;
const _tmp$1462 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2921, _p$2922) };
const _p$2923 = 33;
const _p$2924 = undefined;
const _p$2925 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1461, _tmp$1462, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2923, _p$2924) }]);
const _tmp$1463 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2925);
const _p$2926 = "9";
const _tmp$1464 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2926) };
const _p$2927 = 8;
const _p$2928 = undefined;
const _tmp$1465 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2927, _p$2928) };
const _p$2929 = 33;
const _p$2930 = undefined;
const _p$2931 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1464, _tmp$1465, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2929, _p$2930) }]);
const _tmp$1466 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2931);
const _p$2932 = "9";
const _tmp$1467 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2932) };
const _p$2933 = 9;
const _p$2934 = undefined;
const _tmp$1468 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2933, _p$2934) };
const _p$2935 = 33;
const _p$2936 = undefined;
const _p$2937 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1467, _tmp$1468, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2935, _p$2936) }]);
const _tmp$1469 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2937);
const _p$2938 = "9";
const _tmp$1470 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2938) };
const _p$2939 = 10;
const _p$2940 = undefined;
const _tmp$1471 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2939, _p$2940) };
const _p$2941 = 33;
const _p$2942 = undefined;
const _p$2943 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1470, _tmp$1471, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2941, _p$2942) }]);
const _tmp$1472 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2943);
const _p$2944 = "9";
const _tmp$1473 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2944) };
const _p$2945 = 28;
const _p$2946 = undefined;
const _tmp$1474 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2945, _p$2946) };
const _p$2947 = 33;
const _p$2948 = undefined;
const _p$2949 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1473, _tmp$1474, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2947, _p$2948) }]);
const _tmp$1475 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2949);
const _p$2950 = "9";
const _tmp$1476 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2950) };
const _p$2951 = 29;
const _p$2952 = undefined;
const _tmp$1477 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2951, _p$2952) };
const _p$2953 = 33;
const _p$2954 = undefined;
const _p$2955 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1476, _tmp$1477, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2953, _p$2954) }]);
const _tmp$1478 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2955);
const _p$2956 = "9";
const _tmp$1479 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2956) };
const _p$2957 = 30;
const _p$2958 = undefined;
const _tmp$1480 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2957, _p$2958) };
const _p$2959 = 33;
const _p$2960 = undefined;
const _p$2961 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1479, _tmp$1480, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2959, _p$2960) }]);
const _tmp$1481 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2961);
const _p$2962 = "9";
const _tmp$1482 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2962) };
const _p$2963 = 31;
const _p$2964 = undefined;
const _tmp$1483 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2963, _p$2964) };
const _p$2965 = 33;
const _p$2966 = undefined;
const _p$2967 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1482, _tmp$1483, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2965, _p$2966) }]);
const _tmp$1484 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2967);
const _p$2968 = "9";
const _tmp$1485 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2968) };
const _p$2969 = 32;
const _p$2970 = undefined;
const _tmp$1486 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2969, _p$2970) };
const _p$2971 = 33;
const _p$2972 = undefined;
const _p$2973 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1485, _tmp$1486, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2971, _p$2972) }]);
const _tmp$1487 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2973);
const _p$2974 = "9";
const _tmp$1488 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2974) };
const _p$2975 = 33;
const _p$2976 = undefined;
const _tmp$1489 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2975, _p$2976) };
const _p$2977 = 33;
const _p$2978 = undefined;
const _p$2979 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1488, _tmp$1489, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2977, _p$2978) }]);
const _tmp$1490 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2979);
const _p$2980 = "9";
const _tmp$1491 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2980) };
const _p$2981 = 34;
const _p$2982 = undefined;
const _tmp$1492 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2981, _p$2982) };
const _p$2983 = 33;
const _p$2984 = undefined;
const _p$2985 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1491, _tmp$1492, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2983, _p$2984) }]);
const _tmp$1493 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2985);
const _p$2986 = "11";
const _tmp$1494 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2986) };
const _p$2987 = 55;
const _p$2988 = undefined;
const _tmp$1495 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2987, _p$2988) };
const _p$2989 = 6;
const _p$2990 = undefined;
const _p$2991 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1494, _tmp$1495, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2989, _p$2990) }]);
const _tmp$1496 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2991);
const _p$2992 = "11";
const _tmp$1497 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2992) };
const _p$2993 = 55;
const _p$2994 = undefined;
const _tmp$1498 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2993, _p$2994) };
const _p$2995 = 22;
const _p$2996 = undefined;
const _p$2997 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1497, _tmp$1498, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2995, _p$2996) }]);
const _tmp$1499 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$2997);
const _p$2998 = "11";
const _tmp$1500 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$2998) };
const _p$2999 = 55;
const _p$3000 = undefined;
const _tmp$1501 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$2999, _p$3000) };
const _p$3001 = 23;
const _p$3002 = undefined;
const _p$3003 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1500, _tmp$1501, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3001, _p$3002) }]);
const _tmp$1502 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3003);
const _p$3004 = "11";
const _tmp$1503 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3004) };
const _p$3005 = 55;
const _p$3006 = undefined;
const _tmp$1504 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3005, _p$3006) };
const _p$3007 = 29;
const _p$3008 = undefined;
const _p$3009 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1503, _tmp$1504, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3007, _p$3008) }]);
const _tmp$1505 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3009);
const _p$3010 = "11";
const _tmp$1506 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3010) };
const _p$3011 = 55;
const _p$3012 = undefined;
const _tmp$1507 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3011, _p$3012) };
const _p$3013 = 30;
const _p$3014 = undefined;
const _p$3015 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1506, _tmp$1507, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3013, _p$3014) }]);
const _tmp$1508 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3015);
const _p$3016 = "11";
const _tmp$1509 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3016) };
const _p$3017 = 55;
const _p$3018 = undefined;
const _tmp$1510 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3017, _p$3018) };
const _p$3019 = 31;
const _p$3020 = undefined;
const _p$3021 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1509, _tmp$1510, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3019, _p$3020) }]);
const _tmp$1511 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3021);
const _p$3022 = "9";
const _tmp$1512 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3022) };
const _p$3023 = 41;
const _p$3024 = undefined;
const _tmp$1513 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3023, _p$3024) };
const _p$3025 = 33;
const _p$3026 = undefined;
const _p$3027 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1512, _tmp$1513, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3025, _p$3026) }]);
const _tmp$1514 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3027);
const _p$3028 = "9";
const _tmp$1515 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3028) };
const _p$3029 = 42;
const _p$3030 = undefined;
const _tmp$1516 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3029, _p$3030) };
const _p$3031 = 33;
const _p$3032 = undefined;
const _p$3033 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1515, _tmp$1516, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3031, _p$3032) }]);
const _tmp$1517 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3033);
const _p$3034 = "9";
const _tmp$1518 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3034) };
const _p$3035 = 43;
const _p$3036 = undefined;
const _tmp$1519 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3035, _p$3036) };
const _p$3037 = 33;
const _p$3038 = undefined;
const _p$3039 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1518, _tmp$1519, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3037, _p$3038) }]);
const _tmp$1520 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3039);
const _p$3040 = "9";
const _tmp$1521 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3040) };
const _p$3041 = 44;
const _p$3042 = undefined;
const _tmp$1522 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3041, _p$3042) };
const _p$3043 = 33;
const _p$3044 = undefined;
const _p$3045 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1521, _tmp$1522, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3043, _p$3044) }]);
const _tmp$1523 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3045);
const _p$3046 = "9";
const _tmp$1524 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3046) };
const _p$3047 = 45;
const _p$3048 = undefined;
const _tmp$1525 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3047, _p$3048) };
const _p$3049 = 33;
const _p$3050 = undefined;
const _p$3051 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1524, _tmp$1525, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3049, _p$3050) }]);
const _tmp$1526 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3051);
const _p$3052 = "9";
const _tmp$1527 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3052) };
const _p$3053 = 46;
const _p$3054 = undefined;
const _tmp$1528 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3053, _p$3054) };
const _p$3055 = 33;
const _p$3056 = undefined;
const _p$3057 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1527, _tmp$1528, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3055, _p$3056) }]);
const _tmp$1529 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3057);
const _p$3058 = "9";
const _tmp$1530 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3058) };
const _p$3059 = 47;
const _p$3060 = undefined;
const _tmp$1531 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3059, _p$3060) };
const _p$3061 = 33;
const _p$3062 = undefined;
const _p$3063 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1530, _tmp$1531, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3061, _p$3062) }]);
const _tmp$1532 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3063);
const _p$3064 = "9";
const _tmp$1533 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3064) };
const _p$3065 = 48;
const _p$3066 = undefined;
const _tmp$1534 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3065, _p$3066) };
const _p$3067 = 33;
const _p$3068 = undefined;
const _p$3069 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1533, _tmp$1534, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3067, _p$3068) }]);
const _tmp$1535 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3069);
const _p$3070 = "9";
const _tmp$1536 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3070) };
const _p$3071 = 49;
const _p$3072 = undefined;
const _tmp$1537 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3071, _p$3072) };
const _p$3073 = 33;
const _p$3074 = undefined;
const _p$3075 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1536, _tmp$1537, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3073, _p$3074) }]);
const _tmp$1538 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3075);
const _p$3076 = "9";
const _tmp$1539 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3076) };
const _p$3077 = 50;
const _p$3078 = undefined;
const _tmp$1540 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3077, _p$3078) };
const _p$3079 = 33;
const _p$3080 = undefined;
const _p$3081 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1539, _tmp$1540, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3079, _p$3080) }]);
const _tmp$1541 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3081);
const _p$3082 = "9";
const _tmp$1542 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3082) };
const _p$3083 = 51;
const _p$3084 = undefined;
const _tmp$1543 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3083, _p$3084) };
const _p$3085 = 33;
const _p$3086 = undefined;
const _p$3087 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1542, _tmp$1543, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3085, _p$3086) }]);
const _tmp$1544 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3087);
const _p$3088 = "9";
const _tmp$1545 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3088) };
const _p$3089 = 52;
const _p$3090 = undefined;
const _tmp$1546 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3089, _p$3090) };
const _p$3091 = 33;
const _p$3092 = undefined;
const _p$3093 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1545, _tmp$1546, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3091, _p$3092) }]);
const _tmp$1547 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3093);
const _p$3094 = "9";
const _tmp$1548 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3094) };
const _p$3095 = 53;
const _p$3096 = undefined;
const _tmp$1549 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3095, _p$3096) };
const _p$3097 = 33;
const _p$3098 = undefined;
const _p$3099 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1548, _tmp$1549, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3097, _p$3098) }]);
const _tmp$1550 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3099);
const _p$3100 = "9";
const _tmp$1551 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3100) };
const _p$3101 = 54;
const _p$3102 = undefined;
const _tmp$1552 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3101, _p$3102) };
const _p$3103 = 33;
const _p$3104 = undefined;
const _p$3105 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1551, _tmp$1552, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3103, _p$3104) }]);
const _tmp$1553 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3105);
const _p$3106 = "11";
const _tmp$1554 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3106) };
const _p$3107 = 55;
const _p$3108 = undefined;
const _tmp$1555 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3107, _p$3108) };
const _p$3109 = 32;
const _p$3110 = undefined;
const _p$3111 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1554, _tmp$1555, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3109, _p$3110) }]);
const _tmp$1556 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3111);
const _p$3112 = "13";
const _tmp$1557 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3112) };
const _p$3113 = 55;
const _p$3114 = undefined;
const _tmp$1558 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3113, _p$3114) };
const _p$3115 = 33;
const _p$3116 = undefined;
const _p$3117 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1557, _tmp$1558, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3115, _p$3116) }]);
const _tmp$1559 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3117);
const _p$3118 = "9";
const _tmp$1560 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3118) };
const _p$3119 = 40;
const _p$3120 = undefined;
const _tmp$1561 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3119, _p$3120) };
const _p$3121 = 33;
const _p$3122 = undefined;
const _p$3123 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1560, _tmp$1561, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3121, _p$3122) }]);
const _tmp$1562 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3123);
const _p$3124 = "9";
const _tmp$1563 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3124) };
const _p$3125 = 16;
const _p$3126 = undefined;
const _tmp$1564 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3125, _p$3126) };
const _p$3127 = 33;
const _p$3128 = undefined;
const _p$3129 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1563, _tmp$1564, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3127, _p$3128) }]);
const _tmp$1565 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3129);
const _p$3130 = "9";
const _tmp$1566 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3130) };
const _p$3131 = 17;
const _p$3132 = undefined;
const _tmp$1567 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3131, _p$3132) };
const _p$3133 = 33;
const _p$3134 = undefined;
const _p$3135 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1566, _tmp$1567, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3133, _p$3134) }]);
const _tmp$1568 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3135);
const _p$3136 = "9";
const _tmp$1569 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3136) };
const _p$3137 = 18;
const _p$3138 = undefined;
const _tmp$1570 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3137, _p$3138) };
const _p$3139 = 33;
const _p$3140 = undefined;
const _p$3141 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1569, _tmp$1570, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3139, _p$3140) }]);
const _tmp$1571 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3141);
const _p$3142 = "9";
const _tmp$1572 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3142) };
const _p$3143 = 19;
const _p$3144 = undefined;
const _tmp$1573 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3143, _p$3144) };
const _p$3145 = 33;
const _p$3146 = undefined;
const _p$3147 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1572, _tmp$1573, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3145, _p$3146) }]);
const _tmp$1574 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3147);
const _p$3148 = "9";
const _tmp$1575 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3148) };
const _p$3149 = 20;
const _p$3150 = undefined;
const _tmp$1576 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3149, _p$3150) };
const _p$3151 = 33;
const _p$3152 = undefined;
const _p$3153 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1575, _tmp$1576, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3151, _p$3152) }]);
const _tmp$1577 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3153);
const _p$3154 = "9";
const _tmp$1578 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3154) };
const _p$3155 = 21;
const _p$3156 = undefined;
const _tmp$1579 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3155, _p$3156) };
const _p$3157 = 33;
const _p$3158 = undefined;
const _p$3159 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1578, _tmp$1579, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3157, _p$3158) }]);
const _tmp$1580 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3159);
const _p$3160 = "9";
const _tmp$1581 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3160) };
const _p$3161 = 22;
const _p$3162 = undefined;
const _tmp$1582 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3161, _p$3162) };
const _p$3163 = 33;
const _p$3164 = undefined;
const _p$3165 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1581, _tmp$1582, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3163, _p$3164) }]);
const _tmp$1583 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3165);
const _p$3166 = "9";
const _tmp$1584 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3166) };
const _p$3167 = 23;
const _p$3168 = undefined;
const _tmp$1585 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3167, _p$3168) };
const _p$3169 = 33;
const _p$3170 = undefined;
const _p$3171 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1584, _tmp$1585, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3169, _p$3170) }]);
const _tmp$1586 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3171);
const _p$3172 = "9";
const _tmp$1587 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3172) };
const _p$3173 = 24;
const _p$3174 = undefined;
const _tmp$1588 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3173, _p$3174) };
const _p$3175 = 33;
const _p$3176 = undefined;
const _p$3177 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1587, _tmp$1588, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3175, _p$3176) }]);
const _tmp$1589 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3177);
const _p$3178 = "9";
const _tmp$1590 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3178) };
const _p$3179 = 25;
const _p$3180 = undefined;
const _tmp$1591 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3179, _p$3180) };
const _p$3181 = 33;
const _p$3182 = undefined;
const _p$3183 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1590, _tmp$1591, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3181, _p$3182) }]);
const _tmp$1592 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3183);
const _p$3184 = "9";
const _tmp$1593 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3184) };
const _p$3185 = 26;
const _p$3186 = undefined;
const _tmp$1594 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3185, _p$3186) };
const _p$3187 = 33;
const _p$3188 = undefined;
const _p$3189 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1593, _tmp$1594, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3187, _p$3188) }]);
const _tmp$1595 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3189);
const _p$3190 = "9";
const _tmp$1596 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3190) };
const _p$3191 = 27;
const _p$3192 = undefined;
const _tmp$1597 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3191, _p$3192) };
const _p$3193 = 33;
const _p$3194 = undefined;
const _p$3195 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1596, _tmp$1597, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3193, _p$3194) }]);
const _tmp$1598 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3195);
const _p$3196 = "9";
const _tmp$1599 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3196) };
const _p$3197 = 11;
const _p$3198 = undefined;
const _tmp$1600 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3197, _p$3198) };
const _p$3199 = 33;
const _p$3200 = undefined;
const _p$3201 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1599, _tmp$1600, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3199, _p$3200) }]);
const _tmp$1601 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3201);
const _p$3202 = "9";
const _tmp$1602 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3202) };
const _p$3203 = 12;
const _p$3204 = undefined;
const _tmp$1603 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3203, _p$3204) };
const _p$3205 = 33;
const _p$3206 = undefined;
const _p$3207 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1602, _tmp$1603, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3205, _p$3206) }]);
const _tmp$1604 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3207);
const _p$3208 = "9";
const _tmp$1605 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3208) };
const _p$3209 = 13;
const _p$3210 = undefined;
const _tmp$1606 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3209, _p$3210) };
const _p$3211 = 33;
const _p$3212 = undefined;
const _p$3213 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1605, _tmp$1606, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3211, _p$3212) }]);
const _tmp$1607 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3213);
const _p$3214 = "9";
const _tmp$1608 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3214) };
const _p$3215 = 14;
const _p$3216 = undefined;
const _tmp$1609 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3215, _p$3216) };
const _p$3217 = 33;
const _p$3218 = undefined;
const _p$3219 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1608, _tmp$1609, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3217, _p$3218) }]);
const _tmp$1610 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3219);
const _p$3220 = "9";
const _tmp$1611 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3220) };
const _p$3221 = 15;
const _p$3222 = undefined;
const _tmp$1612 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3221, _p$3222) };
const _p$3223 = 33;
const _p$3224 = undefined;
const _p$3225 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1611, _tmp$1612, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3223, _p$3224) }]);
const _tmp$1613 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3225);
const _p$3226 = "10";
const _tmp$1614 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3226) };
const _p$3227 = 2;
const _p$3228 = undefined;
const _tmp$1615 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3227, _p$3228) };
const _p$3229 = 27;
const _p$3230 = undefined;
const _p$3231 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1614, _tmp$1615, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3229, _p$3230) }]);
const _tmp$1616 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3231);
const _p$3232 = "10";
const _tmp$1617 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3232) };
const _p$3233 = 2;
const _p$3234 = undefined;
const _tmp$1618 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3233, _p$3234) };
const _p$3235 = 18;
const _p$3236 = undefined;
const _p$3237 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1617, _tmp$1618, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3235, _p$3236) }]);
const _tmp$1619 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3237);
const _p$3238 = "9";
const _tmp$1620 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3238) };
const _p$3239 = 35;
const _p$3240 = undefined;
const _tmp$1621 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3239, _p$3240) };
const _p$3241 = 33;
const _p$3242 = undefined;
const _p$3243 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1620, _tmp$1621, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3241, _p$3242) }]);
const _tmp$1622 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3243);
const _p$3244 = "9";
const _tmp$1623 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3244) };
const _p$3245 = 36;
const _p$3246 = undefined;
const _tmp$1624 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3245, _p$3246) };
const _p$3247 = 33;
const _p$3248 = undefined;
const _p$3249 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1623, _tmp$1624, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3247, _p$3248) }]);
const _tmp$1625 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3249);
const _p$3250 = "9";
const _tmp$1626 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3250) };
const _p$3251 = 37;
const _p$3252 = undefined;
const _tmp$1627 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3251, _p$3252) };
const _p$3253 = 33;
const _p$3254 = undefined;
const _p$3255 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1626, _tmp$1627, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3253, _p$3254) }]);
const _tmp$1628 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3255);
const _p$3256 = "9";
const _tmp$1629 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3256) };
const _p$3257 = 38;
const _p$3258 = undefined;
const _tmp$1630 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3257, _p$3258) };
const _p$3259 = 33;
const _p$3260 = undefined;
const _p$3261 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1629, _tmp$1630, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3259, _p$3260) }]);
const _tmp$1631 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3261);
const _p$3262 = "9";
const _tmp$1632 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3262) };
const _p$3263 = 39;
const _p$3264 = undefined;
const _tmp$1633 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3263, _p$3264) };
const _p$3265 = 33;
const _p$3266 = undefined;
const _p$3267 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1632, _tmp$1633, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3265, _p$3266) }]);
const _tmp$1634 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3267);
const _p$3268 = "11";
const _tmp$1635 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3268) };
const _p$3269 = 55;
const _p$3270 = undefined;
const _tmp$1636 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3269, _p$3270) };
const _p$3271 = 7;
const _p$3272 = undefined;
const _p$3273 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1635, _tmp$1636, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3271, _p$3272) }]);
const _tmp$1637 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3273);
const _p$3274 = "11";
const _tmp$1638 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3274) };
const _p$3275 = 55;
const _p$3276 = undefined;
const _tmp$1639 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3275, _p$3276) };
const _p$3277 = 8;
const _p$3278 = undefined;
const _p$3279 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1638, _tmp$1639, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3277, _p$3278) }]);
const _tmp$1640 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3279);
const _p$3280 = "11";
const _tmp$1641 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3280) };
const _p$3281 = 55;
const _p$3282 = undefined;
const _tmp$1642 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3281, _p$3282) };
const _p$3283 = 18;
const _p$3284 = undefined;
const _p$3285 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1641, _tmp$1642, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3283, _p$3284) }]);
const _tmp$1643 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3285);
const _p$3286 = "11";
const _tmp$1644 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3286) };
const _p$3287 = 55;
const _p$3288 = undefined;
const _tmp$1645 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3287, _p$3288) };
const _p$3289 = 19;
const _p$3290 = undefined;
const _p$3291 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1644, _tmp$1645, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3289, _p$3290) }]);
const _tmp$1646 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3291);
const _p$3292 = "11";
const _tmp$1647 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3292) };
const _p$3293 = 55;
const _p$3294 = undefined;
const _tmp$1648 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3293, _p$3294) };
const _p$3295 = 20;
const _p$3296 = undefined;
const _p$3297 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1647, _tmp$1648, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3295, _p$3296) }]);
const _tmp$1649 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3297);
const _p$3298 = "11";
const _tmp$1650 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3298) };
const _p$3299 = 55;
const _p$3300 = undefined;
const _tmp$1651 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3299, _p$3300) };
const _p$3301 = 21;
const _p$3302 = undefined;
const _p$3303 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1650, _tmp$1651, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3301, _p$3302) }]);
const _tmp$1652 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3303);
const _p$3304 = "11";
const _tmp$1653 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3304) };
const _p$3305 = 55;
const _p$3306 = undefined;
const _tmp$1654 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3305, _p$3306) };
const _p$3307 = 24;
const _p$3308 = undefined;
const _p$3309 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1653, _tmp$1654, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3307, _p$3308) }]);
const _tmp$1655 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3309);
const _p$3310 = "11";
const _tmp$1656 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3310) };
const _p$3311 = 55;
const _p$3312 = undefined;
const _tmp$1657 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3311, _p$3312) };
const _p$3313 = 25;
const _p$3314 = undefined;
const _p$3315 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1656, _tmp$1657, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3313, _p$3314) }]);
const _tmp$1658 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3315);
const _p$3316 = "11";
const _tmp$1659 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3316) };
const _p$3317 = 55;
const _p$3318 = undefined;
const _tmp$1660 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3317, _p$3318) };
const _p$3319 = 26;
const _p$3320 = undefined;
const _p$3321 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1659, _tmp$1660, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3319, _p$3320) }]);
const _tmp$1661 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3321);
const _p$3322 = "11";
const _tmp$1662 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3322) };
const _p$3323 = 55;
const _p$3324 = undefined;
const _tmp$1663 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3323, _p$3324) };
const _p$3325 = 27;
const _p$3326 = undefined;
const _p$3327 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1662, _tmp$1663, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3325, _p$3326) }]);
const _tmp$1664 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3327);
const _p$3328 = "11";
const _tmp$1665 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3328) };
const _p$3329 = 55;
const _p$3330 = undefined;
const _tmp$1666 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3329, _p$3330) };
const _p$3331 = 28;
const _p$3332 = undefined;
const _p$3333 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1665, _tmp$1666, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3331, _p$3332) }]);
const _tmp$1667 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3333);
const _p$3334 = "15";
const _tmp$1668 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3334) };
const _p$3335 = 42;
const _p$3336 = undefined;
const _tmp$1669 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3335, _p$3336) };
const _p$3337 = 26;
const _p$3338 = undefined;
const _p$3339 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1668, _tmp$1669, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3337, _p$3338) }]);
const _tmp$1670 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3339);
const _p$3340 = "14";
const _tmp$1671 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3340) };
const _p$3341 = 42;
const _p$3342 = undefined;
const _tmp$1672 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3341, _p$3342) };
const _p$3343 = 27;
const _p$3344 = undefined;
const _p$3345 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1671, _tmp$1672, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3343, _p$3344) }]);
const _tmp$1673 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3345);
const _p$3346 = "9";
const _tmp$1674 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3346) };
const _p$3347 = 43;
const _p$3348 = undefined;
const _tmp$1675 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3347, _p$3348) };
const _p$3349 = 26;
const _p$3350 = undefined;
const _p$3351 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1674, _tmp$1675, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3349, _p$3350) }]);
const _tmp$1676 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3351);
const _p$3352 = "8";
const _tmp$1677 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3352) };
const _p$3353 = 43;
const _p$3354 = undefined;
const _tmp$1678 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3353, _p$3354) };
const _p$3355 = 27;
const _p$3356 = undefined;
const _p$3357 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1677, _tmp$1678, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3355, _p$3356) }]);
const _tmp$1679 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3357);
const _p$3358 = "9";
const _tmp$1680 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3358) };
const _p$3359 = 44;
const _p$3360 = undefined;
const _tmp$1681 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3359, _p$3360) };
const _p$3361 = 26;
const _p$3362 = undefined;
const _p$3363 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1680, _tmp$1681, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3361, _p$3362) }]);
const _tmp$1682 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3363);
const _p$3364 = "8";
const _tmp$1683 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3364) };
const _p$3365 = 44;
const _p$3366 = undefined;
const _tmp$1684 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3365, _p$3366) };
const _p$3367 = 27;
const _p$3368 = undefined;
const _p$3369 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1683, _tmp$1684, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3367, _p$3368) }]);
const _tmp$1685 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3369);
const _p$3370 = "9";
const _tmp$1686 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3370) };
const _p$3371 = 45;
const _p$3372 = undefined;
const _tmp$1687 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3371, _p$3372) };
const _p$3373 = 26;
const _p$3374 = undefined;
const _p$3375 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1686, _tmp$1687, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3373, _p$3374) }]);
const _tmp$1688 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3375);
const _p$3376 = "8";
const _tmp$1689 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3376) };
const _p$3377 = 45;
const _p$3378 = undefined;
const _tmp$1690 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3377, _p$3378) };
const _p$3379 = 27;
const _p$3380 = undefined;
const _p$3381 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1689, _tmp$1690, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3379, _p$3380) }]);
const _tmp$1691 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3381);
const _p$3382 = "9";
const _tmp$1692 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3382) };
const _p$3383 = 46;
const _p$3384 = undefined;
const _tmp$1693 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3383, _p$3384) };
const _p$3385 = 26;
const _p$3386 = undefined;
const _p$3387 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1692, _tmp$1693, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3385, _p$3386) }]);
const _tmp$1694 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3387);
const _p$3388 = "8";
const _tmp$1695 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3388) };
const _p$3389 = 46;
const _p$3390 = undefined;
const _tmp$1696 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3389, _p$3390) };
const _p$3391 = 27;
const _p$3392 = undefined;
const _p$3393 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1695, _tmp$1696, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3391, _p$3392) }]);
const _tmp$1697 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3393);
const _p$3394 = "9";
const _tmp$1698 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3394) };
const _p$3395 = 47;
const _p$3396 = undefined;
const _tmp$1699 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3395, _p$3396) };
const _p$3397 = 26;
const _p$3398 = undefined;
const _p$3399 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1698, _tmp$1699, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3397, _p$3398) }]);
const _tmp$1700 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3399);
const _p$3400 = "8";
const _tmp$1701 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3400) };
const _p$3401 = 47;
const _p$3402 = undefined;
const _tmp$1702 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3401, _p$3402) };
const _p$3403 = 27;
const _p$3404 = undefined;
const _p$3405 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1701, _tmp$1702, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3403, _p$3404) }]);
const _tmp$1703 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3405);
const _p$3406 = "9";
const _tmp$1704 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3406) };
const _p$3407 = 48;
const _p$3408 = undefined;
const _tmp$1705 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3407, _p$3408) };
const _p$3409 = 26;
const _p$3410 = undefined;
const _p$3411 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1704, _tmp$1705, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3409, _p$3410) }]);
const _tmp$1706 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3411);
const _p$3412 = "16";
const _tmp$1707 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3412) };
const _p$3413 = 49;
const _p$3414 = undefined;
const _tmp$1708 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3413, _p$3414) };
const _p$3415 = 26;
const _p$3416 = undefined;
const _p$3417 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1707, _tmp$1708, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3415, _p$3416) }]);
const _tmp$1709 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3417);
const _p$3418 = "8";
const _tmp$1710 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3418) };
const _p$3419 = 48;
const _p$3420 = undefined;
const _tmp$1711 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3419, _p$3420) };
const _p$3421 = 27;
const _p$3422 = undefined;
const _p$3423 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1710, _tmp$1711, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3421, _p$3422) }]);
const _tmp$1712 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3423);
const _p$3424 = "12";
const _tmp$1713 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3424) };
const _p$3425 = 49;
const _p$3426 = undefined;
const _tmp$1714 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3425, _p$3426) };
const _p$3427 = 27;
const _p$3428 = undefined;
const _p$3429 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1713, _tmp$1714, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3427, _p$3428) }]);
const _tmp$1715 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3429);
const _p$3430 = "10";
const _tmp$1716 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3430) };
const _p$3431 = 2;
const _p$3432 = undefined;
const _tmp$1717 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3431, _p$3432) };
const _p$3433 = 22;
const _p$3434 = undefined;
const _p$3435 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1716, _tmp$1717, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3433, _p$3434) }]);
const _tmp$1718 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3435);
const _p$3436 = "10";
const _tmp$1719 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3436) };
const _p$3437 = 2;
const _p$3438 = undefined;
const _tmp$1720 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3437, _p$3438) };
const _p$3439 = 23;
const _p$3440 = undefined;
const _p$3441 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1719, _tmp$1720, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3439, _p$3440) }]);
const _tmp$1721 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3441);
const _p$3442 = "10";
const _tmp$1722 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3442) };
const _p$3443 = 2;
const _p$3444 = undefined;
const _tmp$1723 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3443, _p$3444) };
const _p$3445 = 24;
const _p$3446 = undefined;
const _p$3447 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1722, _tmp$1723, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3445, _p$3446) }]);
const _tmp$1724 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3447);
const _p$3448 = "10";
const _tmp$1725 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3448) };
const _p$3449 = 2;
const _p$3450 = undefined;
const _tmp$1726 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3449, _p$3450) };
const _p$3451 = 25;
const _p$3452 = undefined;
const _p$3453 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1725, _tmp$1726, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3451, _p$3452) }]);
const _tmp$1727 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3453);
const _p$3454 = "10";
const _tmp$1728 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3454) };
const _p$3455 = 2;
const _p$3456 = undefined;
const _tmp$1729 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3455, _p$3456) };
const _p$3457 = 26;
const _p$3458 = undefined;
const _p$3459 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1728, _tmp$1729, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3457, _p$3458) }]);
const _tmp$1730 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3459);
const _p$3460 = "15";
const _tmp$1731 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3460) };
const _p$3461 = 7;
const _p$3462 = undefined;
const _tmp$1732 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3461, _p$3462) };
const _p$3463 = 26;
const _p$3464 = undefined;
const _p$3465 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1731, _tmp$1732, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3463, _p$3464) }]);
const _tmp$1733 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3465);
const _p$3466 = "14";
const _tmp$1734 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3466) };
const _p$3467 = 7;
const _p$3468 = undefined;
const _tmp$1735 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3467, _p$3468) };
const _p$3469 = 27;
const _p$3470 = undefined;
const _p$3471 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1734, _tmp$1735, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3469, _p$3470) }]);
const _tmp$1736 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3471);
const _p$3472 = "9";
const _tmp$1737 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3472) };
const _p$3473 = 8;
const _p$3474 = undefined;
const _tmp$1738 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3473, _p$3474) };
const _p$3475 = 26;
const _p$3476 = undefined;
const _p$3477 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1737, _tmp$1738, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3475, _p$3476) }]);
const _tmp$1739 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3477);
const _p$3478 = "8";
const _tmp$1740 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3478) };
const _p$3479 = 8;
const _p$3480 = undefined;
const _tmp$1741 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3479, _p$3480) };
const _p$3481 = 27;
const _p$3482 = undefined;
const _p$3483 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1740, _tmp$1741, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3481, _p$3482) }]);
const _tmp$1742 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3483);
const _p$3484 = "9";
const _tmp$1743 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3484) };
const _p$3485 = 9;
const _p$3486 = undefined;
const _tmp$1744 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3485, _p$3486) };
const _p$3487 = 26;
const _p$3488 = undefined;
const _p$3489 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1743, _tmp$1744, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3487, _p$3488) }]);
const _tmp$1745 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3489);
const _p$3490 = "8";
const _tmp$1746 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3490) };
const _p$3491 = 9;
const _p$3492 = undefined;
const _tmp$1747 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3491, _p$3492) };
const _p$3493 = 27;
const _p$3494 = undefined;
const _p$3495 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1746, _tmp$1747, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3493, _p$3494) }]);
const _tmp$1748 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3495);
const _p$3496 = "9";
const _tmp$1749 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3496) };
const _p$3497 = 10;
const _p$3498 = undefined;
const _tmp$1750 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3497, _p$3498) };
const _p$3499 = 26;
const _p$3500 = undefined;
const _p$3501 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1749, _tmp$1750, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3499, _p$3500) }]);
const _tmp$1751 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3501);
const _p$3502 = "8";
const _tmp$1752 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3502) };
const _p$3503 = 10;
const _p$3504 = undefined;
const _tmp$1753 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3503, _p$3504) };
const _p$3505 = 27;
const _p$3506 = undefined;
const _p$3507 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1752, _tmp$1753, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3505, _p$3506) }]);
const _tmp$1754 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3507);
const _p$3508 = "9";
const _tmp$1755 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3508) };
const _p$3509 = 11;
const _p$3510 = undefined;
const _tmp$1756 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3509, _p$3510) };
const _p$3511 = 26;
const _p$3512 = undefined;
const _p$3513 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1755, _tmp$1756, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3511, _p$3512) }]);
const _tmp$1757 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3513);
const _p$3514 = "8";
const _tmp$1758 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3514) };
const _p$3515 = 11;
const _p$3516 = undefined;
const _tmp$1759 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3515, _p$3516) };
const _p$3517 = 27;
const _p$3518 = undefined;
const _p$3519 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1758, _tmp$1759, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3517, _p$3518) }]);
const _tmp$1760 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3519);
const _p$3520 = "9";
const _tmp$1761 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3520) };
const _p$3521 = 12;
const _p$3522 = undefined;
const _tmp$1762 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3521, _p$3522) };
const _p$3523 = 26;
const _p$3524 = undefined;
const _p$3525 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1761, _tmp$1762, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3523, _p$3524) }]);
const _tmp$1763 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3525);
const _p$3526 = "8";
const _tmp$1764 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3526) };
const _p$3527 = 12;
const _p$3528 = undefined;
const _tmp$1765 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3527, _p$3528) };
const _p$3529 = 27;
const _p$3530 = undefined;
const _p$3531 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1764, _tmp$1765, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3529, _p$3530) }]);
const _tmp$1766 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3531);
const _p$3532 = "9";
const _tmp$1767 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3532) };
const _p$3533 = 13;
const _p$3534 = undefined;
const _tmp$1768 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3533, _p$3534) };
const _p$3535 = 26;
const _p$3536 = undefined;
const _p$3537 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1767, _tmp$1768, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3535, _p$3536) }]);
const _tmp$1769 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3537);
const _p$3538 = "16";
const _tmp$1770 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3538) };
const _p$3539 = 14;
const _p$3540 = undefined;
const _tmp$1771 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3539, _p$3540) };
const _p$3541 = 26;
const _p$3542 = undefined;
const _p$3543 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1770, _tmp$1771, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3541, _p$3542) }]);
const _tmp$1772 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3543);
const _p$3544 = "8";
const _tmp$1773 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3544) };
const _p$3545 = 13;
const _p$3546 = undefined;
const _tmp$1774 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3545, _p$3546) };
const _p$3547 = 27;
const _p$3548 = undefined;
const _p$3549 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1773, _tmp$1774, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3547, _p$3548) }]);
const _tmp$1775 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3549);
const _p$3550 = "12";
const _tmp$1776 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3550) };
const _p$3551 = 14;
const _p$3552 = undefined;
const _tmp$1777 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3551, _p$3552) };
const _p$3553 = 27;
const _p$3554 = undefined;
const _p$3555 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1776, _tmp$1777, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3553, _p$3554) }]);
const _tmp$1778 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3555);
const _p$3556 = "15";
const _tmp$1779 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3556) };
const _p$3557 = 24;
const _p$3558 = undefined;
const _tmp$1780 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3557, _p$3558) };
const _p$3559 = 26;
const _p$3560 = undefined;
const _p$3561 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1779, _tmp$1780, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3559, _p$3560) }]);
const _tmp$1781 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3561);
const _p$3562 = "14";
const _tmp$1782 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3562) };
const _p$3563 = 24;
const _p$3564 = undefined;
const _tmp$1783 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3563, _p$3564) };
const _p$3565 = 27;
const _p$3566 = undefined;
const _p$3567 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1782, _tmp$1783, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3565, _p$3566) }]);
const _tmp$1784 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3567);
const _p$3568 = "9";
const _tmp$1785 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3568) };
const _p$3569 = 25;
const _p$3570 = undefined;
const _tmp$1786 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3569, _p$3570) };
const _p$3571 = 26;
const _p$3572 = undefined;
const _p$3573 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1785, _tmp$1786, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3571, _p$3572) }]);
const _tmp$1787 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3573);
const _p$3574 = "8";
const _tmp$1788 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3574) };
const _p$3575 = 25;
const _p$3576 = undefined;
const _tmp$1789 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3575, _p$3576) };
const _p$3577 = 27;
const _p$3578 = undefined;
const _p$3579 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1788, _tmp$1789, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3577, _p$3578) }]);
const _tmp$1790 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3579);
const _p$3580 = "9";
const _tmp$1791 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3580) };
const _p$3581 = 26;
const _p$3582 = undefined;
const _tmp$1792 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3581, _p$3582) };
const _p$3583 = 26;
const _p$3584 = undefined;
const _p$3585 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1791, _tmp$1792, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3583, _p$3584) }]);
const _tmp$1793 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3585);
const _p$3586 = "8";
const _tmp$1794 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3586) };
const _p$3587 = 26;
const _p$3588 = undefined;
const _tmp$1795 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3587, _p$3588) };
const _p$3589 = 27;
const _p$3590 = undefined;
const _p$3591 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1794, _tmp$1795, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3589, _p$3590) }]);
const _tmp$1796 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3591);
const _p$3592 = "9";
const _tmp$1797 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3592) };
const _p$3593 = 27;
const _p$3594 = undefined;
const _tmp$1798 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3593, _p$3594) };
const _p$3595 = 26;
const _p$3596 = undefined;
const _p$3597 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1797, _tmp$1798, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3595, _p$3596) }]);
const _tmp$1799 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3597);
const _p$3598 = "8";
const _tmp$1800 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3598) };
const _p$3599 = 27;
const _p$3600 = undefined;
const _tmp$1801 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3599, _p$3600) };
const _p$3601 = 27;
const _p$3602 = undefined;
const _p$3603 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1800, _tmp$1801, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3601, _p$3602) }]);
const _tmp$1802 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3603);
const _p$3604 = "9";
const _tmp$1803 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3604) };
const _p$3605 = 28;
const _p$3606 = undefined;
const _tmp$1804 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3605, _p$3606) };
const _p$3607 = 26;
const _p$3608 = undefined;
const _p$3609 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1803, _tmp$1804, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3607, _p$3608) }]);
const _tmp$1805 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3609);
const _p$3610 = "8";
const _tmp$1806 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3610) };
const _p$3611 = 28;
const _p$3612 = undefined;
const _tmp$1807 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3611, _p$3612) };
const _p$3613 = 27;
const _p$3614 = undefined;
const _p$3615 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1806, _tmp$1807, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3613, _p$3614) }]);
const _tmp$1808 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3615);
const _p$3616 = "9";
const _tmp$1809 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3616) };
const _p$3617 = 29;
const _p$3618 = undefined;
const _tmp$1810 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3617, _p$3618) };
const _p$3619 = 26;
const _p$3620 = undefined;
const _p$3621 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1809, _tmp$1810, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3619, _p$3620) }]);
const _tmp$1811 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3621);
const _p$3622 = "8";
const _tmp$1812 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3622) };
const _p$3623 = 29;
const _p$3624 = undefined;
const _tmp$1813 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3623, _p$3624) };
const _p$3625 = 27;
const _p$3626 = undefined;
const _p$3627 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1812, _tmp$1813, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3625, _p$3626) }]);
const _tmp$1814 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3627);
const _p$3628 = "9";
const _tmp$1815 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3628) };
const _p$3629 = 30;
const _p$3630 = undefined;
const _tmp$1816 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3629, _p$3630) };
const _p$3631 = 26;
const _p$3632 = undefined;
const _p$3633 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1815, _tmp$1816, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3631, _p$3632) }]);
const _tmp$1817 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3633);
const _p$3634 = "8";
const _tmp$1818 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3634) };
const _p$3635 = 30;
const _p$3636 = undefined;
const _tmp$1819 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3635, _p$3636) };
const _p$3637 = 27;
const _p$3638 = undefined;
const _p$3639 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1818, _tmp$1819, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3637, _p$3638) }]);
const _tmp$1820 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3639);
const _p$3640 = "9";
const _tmp$1821 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3640) };
const _p$3641 = 31;
const _p$3642 = undefined;
const _tmp$1822 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3641, _p$3642) };
const _p$3643 = 26;
const _p$3644 = undefined;
const _p$3645 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1821, _tmp$1822, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3643, _p$3644) }]);
const _tmp$1823 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3645);
const _p$3646 = "16";
const _tmp$1824 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3646) };
const _p$3647 = 32;
const _p$3648 = undefined;
const _tmp$1825 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3647, _p$3648) };
const _p$3649 = 26;
const _p$3650 = undefined;
const _p$3651 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1824, _tmp$1825, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3649, _p$3650) }]);
const _tmp$1826 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3651);
const _p$3652 = "8";
const _tmp$1827 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3652) };
const _p$3653 = 31;
const _p$3654 = undefined;
const _tmp$1828 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3653, _p$3654) };
const _p$3655 = 27;
const _p$3656 = undefined;
const _p$3657 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1827, _tmp$1828, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3655, _p$3656) }]);
const _tmp$1829 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3657);
const _p$3658 = "12";
const _tmp$1830 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3658) };
const _p$3659 = 32;
const _p$3660 = undefined;
const _tmp$1831 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3659, _p$3660) };
const _p$3661 = 27;
const _p$3662 = undefined;
const _p$3663 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1830, _tmp$1831, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3661, _p$3662) }]);
const _tmp$1832 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3663);
const _p$3664 = "15";
const _tmp$1833 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3664) };
const _p$3665 = 11;
const _p$3666 = undefined;
const _tmp$1834 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3665, _p$3666) };
const _p$3667 = 20;
const _p$3668 = undefined;
const _p$3669 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1833, _tmp$1834, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3667, _p$3668) }]);
const _tmp$1835 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3669);
const _p$3670 = "14";
const _tmp$1836 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3670) };
const _p$3671 = 11;
const _p$3672 = undefined;
const _tmp$1837 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3671, _p$3672) };
const _p$3673 = 21;
const _p$3674 = undefined;
const _p$3675 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1836, _tmp$1837, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3673, _p$3674) }]);
const _tmp$1838 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3675);
const _p$3676 = "9";
const _tmp$1839 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3676) };
const _p$3677 = 12;
const _p$3678 = undefined;
const _tmp$1840 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3677, _p$3678) };
const _p$3679 = 20;
const _p$3680 = undefined;
const _p$3681 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1839, _tmp$1840, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3679, _p$3680) }]);
const _tmp$1841 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3681);
const _p$3682 = "8";
const _tmp$1842 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3682) };
const _p$3683 = 12;
const _p$3684 = undefined;
const _tmp$1843 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3683, _p$3684) };
const _p$3685 = 21;
const _p$3686 = undefined;
const _p$3687 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1842, _tmp$1843, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3685, _p$3686) }]);
const _tmp$1844 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3687);
const _p$3688 = "9";
const _tmp$1845 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3688) };
const _p$3689 = 13;
const _p$3690 = undefined;
const _tmp$1846 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3689, _p$3690) };
const _p$3691 = 20;
const _p$3692 = undefined;
const _p$3693 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1845, _tmp$1846, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3691, _p$3692) }]);
const _tmp$1847 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3693);
const _p$3694 = "8";
const _tmp$1848 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3694) };
const _p$3695 = 13;
const _p$3696 = undefined;
const _tmp$1849 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3695, _p$3696) };
const _p$3697 = 21;
const _p$3698 = undefined;
const _p$3699 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1848, _tmp$1849, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3697, _p$3698) }]);
const _tmp$1850 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3699);
const _p$3700 = "9";
const _tmp$1851 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3700) };
const _p$3701 = 14;
const _p$3702 = undefined;
const _tmp$1852 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3701, _p$3702) };
const _p$3703 = 20;
const _p$3704 = undefined;
const _p$3705 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1851, _tmp$1852, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3703, _p$3704) }]);
const _tmp$1853 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3705);
const _p$3706 = "8";
const _tmp$1854 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3706) };
const _p$3707 = 14;
const _p$3708 = undefined;
const _tmp$1855 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3707, _p$3708) };
const _p$3709 = 21;
const _p$3710 = undefined;
const _p$3711 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1854, _tmp$1855, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3709, _p$3710) }]);
const _tmp$1856 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3711);
const _p$3712 = "9";
const _tmp$1857 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3712) };
const _p$3713 = 15;
const _p$3714 = undefined;
const _tmp$1858 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3713, _p$3714) };
const _p$3715 = 20;
const _p$3716 = undefined;
const _p$3717 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1857, _tmp$1858, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3715, _p$3716) }]);
const _tmp$1859 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3717);
const _p$3718 = "8";
const _tmp$1860 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3718) };
const _p$3719 = 15;
const _p$3720 = undefined;
const _tmp$1861 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3719, _p$3720) };
const _p$3721 = 21;
const _p$3722 = undefined;
const _p$3723 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1860, _tmp$1861, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3721, _p$3722) }]);
const _tmp$1862 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3723);
const _p$3724 = "9";
const _tmp$1863 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3724) };
const _p$3725 = 16;
const _p$3726 = undefined;
const _tmp$1864 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3725, _p$3726) };
const _p$3727 = 20;
const _p$3728 = undefined;
const _p$3729 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1863, _tmp$1864, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3727, _p$3728) }]);
const _tmp$1865 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3729);
const _p$3730 = "8";
const _tmp$1866 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3730) };
const _p$3731 = 16;
const _p$3732 = undefined;
const _tmp$1867 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3731, _p$3732) };
const _p$3733 = 21;
const _p$3734 = undefined;
const _p$3735 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1866, _tmp$1867, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3733, _p$3734) }]);
const _tmp$1868 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3735);
const _p$3736 = "9";
const _tmp$1869 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3736) };
const _p$3737 = 17;
const _p$3738 = undefined;
const _tmp$1870 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3737, _p$3738) };
const _p$3739 = 20;
const _p$3740 = undefined;
const _p$3741 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1869, _tmp$1870, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3739, _p$3740) }]);
const _tmp$1871 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3741);
const _p$3742 = "8";
const _tmp$1872 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3742) };
const _p$3743 = 17;
const _p$3744 = undefined;
const _tmp$1873 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3743, _p$3744) };
const _p$3745 = 21;
const _p$3746 = undefined;
const _p$3747 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1872, _tmp$1873, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3745, _p$3746) }]);
const _tmp$1874 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3747);
const _p$3748 = "9";
const _tmp$1875 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3748) };
const _p$3749 = 18;
const _p$3750 = undefined;
const _tmp$1876 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3749, _p$3750) };
const _p$3751 = 20;
const _p$3752 = undefined;
const _p$3753 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1875, _tmp$1876, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3751, _p$3752) }]);
const _tmp$1877 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3753);
const _p$3754 = "8";
const _tmp$1878 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3754) };
const _p$3755 = 18;
const _p$3756 = undefined;
const _tmp$1879 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3755, _p$3756) };
const _p$3757 = 21;
const _p$3758 = undefined;
const _p$3759 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1878, _tmp$1879, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3757, _p$3758) }]);
const _tmp$1880 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3759);
const _p$3760 = "9";
const _tmp$1881 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3760) };
const _p$3761 = 19;
const _p$3762 = undefined;
const _tmp$1882 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3761, _p$3762) };
const _p$3763 = 20;
const _p$3764 = undefined;
const _p$3765 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1881, _tmp$1882, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3763, _p$3764) }]);
const _tmp$1883 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3765);
const _p$3766 = "8";
const _tmp$1884 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3766) };
const _p$3767 = 19;
const _p$3768 = undefined;
const _tmp$1885 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3767, _p$3768) };
const _p$3769 = 21;
const _p$3770 = undefined;
const _p$3771 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1884, _tmp$1885, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3769, _p$3770) }]);
const _tmp$1886 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3771);
const _p$3772 = "9";
const _tmp$1887 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3772) };
const _p$3773 = 20;
const _p$3774 = undefined;
const _tmp$1888 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3773, _p$3774) };
const _p$3775 = 20;
const _p$3776 = undefined;
const _p$3777 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1887, _tmp$1888, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3775, _p$3776) }]);
const _tmp$1889 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3777);
const _p$3778 = "8";
const _tmp$1890 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3778) };
const _p$3779 = 20;
const _p$3780 = undefined;
const _tmp$1891 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3779, _p$3780) };
const _p$3781 = 21;
const _p$3782 = undefined;
const _p$3783 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1890, _tmp$1891, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3781, _p$3782) }]);
const _tmp$1892 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3783);
const _p$3784 = "9";
const _tmp$1893 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3784) };
const _p$3785 = 21;
const _p$3786 = undefined;
const _tmp$1894 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3785, _p$3786) };
const _p$3787 = 20;
const _p$3788 = undefined;
const _p$3789 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1893, _tmp$1894, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3787, _p$3788) }]);
const _tmp$1895 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3789);
const _p$3790 = "8";
const _tmp$1896 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3790) };
const _p$3791 = 21;
const _p$3792 = undefined;
const _tmp$1897 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3791, _p$3792) };
const _p$3793 = 21;
const _p$3794 = undefined;
const _p$3795 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1896, _tmp$1897, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3793, _p$3794) }]);
const _tmp$1898 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3795);
const _p$3796 = "9";
const _tmp$1899 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3796) };
const _p$3797 = 22;
const _p$3798 = undefined;
const _tmp$1900 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3797, _p$3798) };
const _p$3799 = 20;
const _p$3800 = undefined;
const _p$3801 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1899, _tmp$1900, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3799, _p$3800) }]);
const _tmp$1901 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3801);
const _p$3802 = "8";
const _tmp$1902 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3802) };
const _p$3803 = 22;
const _p$3804 = undefined;
const _tmp$1903 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3803, _p$3804) };
const _p$3805 = 21;
const _p$3806 = undefined;
const _p$3807 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1902, _tmp$1903, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3805, _p$3806) }]);
const _tmp$1904 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3807);
const _p$3808 = "9";
const _tmp$1905 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3808) };
const _p$3809 = 23;
const _p$3810 = undefined;
const _tmp$1906 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3809, _p$3810) };
const _p$3811 = 20;
const _p$3812 = undefined;
const _p$3813 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1905, _tmp$1906, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3811, _p$3812) }]);
const _tmp$1907 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3813);
const _p$3814 = "8";
const _tmp$1908 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3814) };
const _p$3815 = 23;
const _p$3816 = undefined;
const _tmp$1909 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3815, _p$3816) };
const _p$3817 = 21;
const _p$3818 = undefined;
const _p$3819 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1908, _tmp$1909, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3817, _p$3818) }]);
const _tmp$1910 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3819);
const _p$3820 = "9";
const _tmp$1911 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3820) };
const _p$3821 = 24;
const _p$3822 = undefined;
const _tmp$1912 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3821, _p$3822) };
const _p$3823 = 20;
const _p$3824 = undefined;
const _p$3825 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1911, _tmp$1912, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3823, _p$3824) }]);
const _tmp$1913 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3825);
const _p$3826 = "8";
const _tmp$1914 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3826) };
const _p$3827 = 24;
const _p$3828 = undefined;
const _tmp$1915 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3827, _p$3828) };
const _p$3829 = 21;
const _p$3830 = undefined;
const _p$3831 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1914, _tmp$1915, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3829, _p$3830) }]);
const _tmp$1916 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3831);
const _p$3832 = "9";
const _tmp$1917 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3832) };
const _p$3833 = 25;
const _p$3834 = undefined;
const _tmp$1918 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3833, _p$3834) };
const _p$3835 = 20;
const _p$3836 = undefined;
const _p$3837 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1917, _tmp$1918, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3835, _p$3836) }]);
const _tmp$1919 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3837);
const _p$3838 = "16";
const _tmp$1920 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3838) };
const _p$3839 = 26;
const _p$3840 = undefined;
const _tmp$1921 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3839, _p$3840) };
const _p$3841 = 20;
const _p$3842 = undefined;
const _p$3843 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1920, _tmp$1921, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3841, _p$3842) }]);
const _tmp$1922 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3843);
const _p$3844 = "8";
const _tmp$1923 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3844) };
const _p$3845 = 25;
const _p$3846 = undefined;
const _tmp$1924 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3845, _p$3846) };
const _p$3847 = 21;
const _p$3848 = undefined;
const _p$3849 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1923, _tmp$1924, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3847, _p$3848) }]);
const _tmp$1925 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3849);
const _p$3850 = "12";
const _tmp$1926 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3850) };
const _p$3851 = 26;
const _p$3852 = undefined;
const _tmp$1927 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3851, _p$3852) };
const _p$3853 = 21;
const _p$3854 = undefined;
const _p$3855 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1926, _tmp$1927, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3853, _p$3854) }]);
const _tmp$1928 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3855);
const _p$3856 = "15";
const _tmp$1929 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3856) };
const _p$3857 = 31;
const _p$3858 = undefined;
const _tmp$1930 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3857, _p$3858) };
const _p$3859 = 20;
const _p$3860 = undefined;
const _p$3861 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1929, _tmp$1930, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3859, _p$3860) }]);
const _tmp$1931 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3861);
const _p$3862 = "14";
const _tmp$1932 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3862) };
const _p$3863 = 31;
const _p$3864 = undefined;
const _tmp$1933 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3863, _p$3864) };
const _p$3865 = 21;
const _p$3866 = undefined;
const _p$3867 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1932, _tmp$1933, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3865, _p$3866) }]);
const _tmp$1934 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3867);
const _p$3868 = "9";
const _tmp$1935 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3868) };
const _p$3869 = 32;
const _p$3870 = undefined;
const _tmp$1936 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3869, _p$3870) };
const _p$3871 = 20;
const _p$3872 = undefined;
const _p$3873 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1935, _tmp$1936, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3871, _p$3872) }]);
const _tmp$1937 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3873);
const _p$3874 = "8";
const _tmp$1938 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3874) };
const _p$3875 = 32;
const _p$3876 = undefined;
const _tmp$1939 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3875, _p$3876) };
const _p$3877 = 21;
const _p$3878 = undefined;
const _p$3879 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1938, _tmp$1939, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3877, _p$3878) }]);
const _tmp$1940 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3879);
const _p$3880 = "9";
const _tmp$1941 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3880) };
const _p$3881 = 33;
const _p$3882 = undefined;
const _tmp$1942 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3881, _p$3882) };
const _p$3883 = 20;
const _p$3884 = undefined;
const _p$3885 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1941, _tmp$1942, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3883, _p$3884) }]);
const _tmp$1943 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3885);
const _p$3886 = "8";
const _tmp$1944 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3886) };
const _p$3887 = 33;
const _p$3888 = undefined;
const _tmp$1945 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3887, _p$3888) };
const _p$3889 = 21;
const _p$3890 = undefined;
const _p$3891 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1944, _tmp$1945, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3889, _p$3890) }]);
const _tmp$1946 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3891);
const _p$3892 = "9";
const _tmp$1947 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3892) };
const _p$3893 = 34;
const _p$3894 = undefined;
const _tmp$1948 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3893, _p$3894) };
const _p$3895 = 20;
const _p$3896 = undefined;
const _p$3897 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1947, _tmp$1948, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3895, _p$3896) }]);
const _tmp$1949 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3897);
const _p$3898 = "8";
const _tmp$1950 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3898) };
const _p$3899 = 34;
const _p$3900 = undefined;
const _tmp$1951 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3899, _p$3900) };
const _p$3901 = 21;
const _p$3902 = undefined;
const _p$3903 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1950, _tmp$1951, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3901, _p$3902) }]);
const _tmp$1952 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3903);
const _p$3904 = "9";
const _tmp$1953 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3904) };
const _p$3905 = 35;
const _p$3906 = undefined;
const _tmp$1954 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3905, _p$3906) };
const _p$3907 = 20;
const _p$3908 = undefined;
const _p$3909 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1953, _tmp$1954, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3907, _p$3908) }]);
const _tmp$1955 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3909);
const _p$3910 = "8";
const _tmp$1956 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3910) };
const _p$3911 = 35;
const _p$3912 = undefined;
const _tmp$1957 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3911, _p$3912) };
const _p$3913 = 21;
const _p$3914 = undefined;
const _p$3915 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1956, _tmp$1957, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3913, _p$3914) }]);
const _tmp$1958 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3915);
const _p$3916 = "9";
const _tmp$1959 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3916) };
const _p$3917 = 36;
const _p$3918 = undefined;
const _tmp$1960 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3917, _p$3918) };
const _p$3919 = 20;
const _p$3920 = undefined;
const _p$3921 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1959, _tmp$1960, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3919, _p$3920) }]);
const _tmp$1961 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3921);
const _p$3922 = "8";
const _tmp$1962 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3922) };
const _p$3923 = 36;
const _p$3924 = undefined;
const _tmp$1963 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3923, _p$3924) };
const _p$3925 = 21;
const _p$3926 = undefined;
const _p$3927 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1962, _tmp$1963, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3925, _p$3926) }]);
const _tmp$1964 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3927);
const _p$3928 = "9";
const _tmp$1965 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3928) };
const _p$3929 = 37;
const _p$3930 = undefined;
const _tmp$1966 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3929, _p$3930) };
const _p$3931 = 20;
const _p$3932 = undefined;
const _p$3933 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1965, _tmp$1966, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3931, _p$3932) }]);
const _tmp$1967 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3933);
const _p$3934 = "8";
const _tmp$1968 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3934) };
const _p$3935 = 37;
const _p$3936 = undefined;
const _tmp$1969 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3935, _p$3936) };
const _p$3937 = 21;
const _p$3938 = undefined;
const _p$3939 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1968, _tmp$1969, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3937, _p$3938) }]);
const _tmp$1970 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3939);
const _p$3940 = "9";
const _tmp$1971 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3940) };
const _p$3941 = 38;
const _p$3942 = undefined;
const _tmp$1972 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3941, _p$3942) };
const _p$3943 = 20;
const _p$3944 = undefined;
const _p$3945 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1971, _tmp$1972, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3943, _p$3944) }]);
const _tmp$1973 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3945);
const _p$3946 = "8";
const _tmp$1974 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3946) };
const _p$3947 = 38;
const _p$3948 = undefined;
const _tmp$1975 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3947, _p$3948) };
const _p$3949 = 21;
const _p$3950 = undefined;
const _p$3951 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1974, _tmp$1975, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3949, _p$3950) }]);
const _tmp$1976 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3951);
const _p$3952 = "9";
const _tmp$1977 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3952) };
const _p$3953 = 39;
const _p$3954 = undefined;
const _tmp$1978 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3953, _p$3954) };
const _p$3955 = 20;
const _p$3956 = undefined;
const _p$3957 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1977, _tmp$1978, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3955, _p$3956) }]);
const _tmp$1979 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3957);
const _p$3958 = "8";
const _tmp$1980 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3958) };
const _p$3959 = 39;
const _p$3960 = undefined;
const _tmp$1981 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3959, _p$3960) };
const _p$3961 = 21;
const _p$3962 = undefined;
const _p$3963 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1980, _tmp$1981, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3961, _p$3962) }]);
const _tmp$1982 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3963);
const _p$3964 = "9";
const _tmp$1983 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3964) };
const _p$3965 = 40;
const _p$3966 = undefined;
const _tmp$1984 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3965, _p$3966) };
const _p$3967 = 20;
const _p$3968 = undefined;
const _p$3969 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1983, _tmp$1984, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3967, _p$3968) }]);
const _tmp$1985 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3969);
const _p$3970 = "8";
const _tmp$1986 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3970) };
const _p$3971 = 40;
const _p$3972 = undefined;
const _tmp$1987 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3971, _p$3972) };
const _p$3973 = 21;
const _p$3974 = undefined;
const _p$3975 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1986, _tmp$1987, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3973, _p$3974) }]);
const _tmp$1988 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3975);
const _p$3976 = "9";
const _tmp$1989 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3976) };
const _p$3977 = 41;
const _p$3978 = undefined;
const _tmp$1990 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3977, _p$3978) };
const _p$3979 = 20;
const _p$3980 = undefined;
const _p$3981 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1989, _tmp$1990, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3979, _p$3980) }]);
const _tmp$1991 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3981);
const _p$3982 = "8";
const _tmp$1992 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3982) };
const _p$3983 = 41;
const _p$3984 = undefined;
const _tmp$1993 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3983, _p$3984) };
const _p$3985 = 21;
const _p$3986 = undefined;
const _p$3987 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1992, _tmp$1993, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3985, _p$3986) }]);
const _tmp$1994 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3987);
const _p$3988 = "9";
const _tmp$1995 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3988) };
const _p$3989 = 42;
const _p$3990 = undefined;
const _tmp$1996 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3989, _p$3990) };
const _p$3991 = 20;
const _p$3992 = undefined;
const _p$3993 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1995, _tmp$1996, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3991, _p$3992) }]);
const _tmp$1997 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3993);
const _p$3994 = "8";
const _tmp$1998 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$3994) };
const _p$3995 = 42;
const _p$3996 = undefined;
const _tmp$1999 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3995, _p$3996) };
const _p$3997 = 21;
const _p$3998 = undefined;
const _p$3999 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$1998, _tmp$1999, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$3997, _p$3998) }]);
const _tmp$2000 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$3999);
const _p$4000 = "9";
const _tmp$2001 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4000) };
const _p$4001 = 43;
const _p$4002 = undefined;
const _tmp$2002 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4001, _p$4002) };
const _p$4003 = 20;
const _p$4004 = undefined;
const _p$4005 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2001, _tmp$2002, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4003, _p$4004) }]);
const _tmp$2003 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4005);
const _p$4006 = "8";
const _tmp$2004 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4006) };
const _p$4007 = 43;
const _p$4008 = undefined;
const _tmp$2005 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4007, _p$4008) };
const _p$4009 = 21;
const _p$4010 = undefined;
const _p$4011 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2004, _tmp$2005, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4009, _p$4010) }]);
const _tmp$2006 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4011);
const _p$4012 = "9";
const _tmp$2007 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4012) };
const _p$4013 = 44;
const _p$4014 = undefined;
const _tmp$2008 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4013, _p$4014) };
const _p$4015 = 20;
const _p$4016 = undefined;
const _p$4017 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2007, _tmp$2008, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4015, _p$4016) }]);
const _tmp$2009 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4017);
const _p$4018 = "8";
const _tmp$2010 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4018) };
const _p$4019 = 44;
const _p$4020 = undefined;
const _tmp$2011 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4019, _p$4020) };
const _p$4021 = 21;
const _p$4022 = undefined;
const _p$4023 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2010, _tmp$2011, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4021, _p$4022) }]);
const _tmp$2012 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4023);
const _p$4024 = "9";
const _tmp$2013 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4024) };
const _p$4025 = 45;
const _p$4026 = undefined;
const _tmp$2014 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4025, _p$4026) };
const _p$4027 = 20;
const _p$4028 = undefined;
const _p$4029 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2013, _tmp$2014, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4027, _p$4028) }]);
const _tmp$2015 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4029);
const _p$4030 = "16";
const _tmp$2016 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4030) };
const _p$4031 = 46;
const _p$4032 = undefined;
const _tmp$2017 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4031, _p$4032) };
const _p$4033 = 20;
const _p$4034 = undefined;
const _p$4035 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2016, _tmp$2017, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4033, _p$4034) }]);
const _tmp$2018 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4035);
const _p$4036 = "8";
const _tmp$2019 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4036) };
const _p$4037 = 45;
const _p$4038 = undefined;
const _tmp$2020 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4037, _p$4038) };
const _p$4039 = 21;
const _p$4040 = undefined;
const _p$4041 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2019, _tmp$2020, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4039, _p$4040) }]);
const _tmp$2021 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4041);
const _p$4042 = "12";
const _tmp$2022 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4042) };
const _p$4043 = 46;
const _p$4044 = undefined;
const _tmp$2023 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4043, _p$4044) };
const _p$4045 = 21;
const _p$4046 = undefined;
const _p$4047 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2022, _tmp$2023, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4045, _p$4046) }]);
const _tmp$2024 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4047);
const _p$4048 = "10";
const _tmp$2025 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4048) };
const _p$4049 = 2;
const _p$4050 = undefined;
const _tmp$2026 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4049, _p$4050) };
const _p$4051 = 17;
const _p$4052 = undefined;
const _p$4053 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2025, _tmp$2026, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4051, _p$4052) }]);
const _tmp$2027 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4053);
const _p$4054 = "13";
const _tmp$2028 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4054) };
const _p$4055 = 1;
const _p$4056 = undefined;
const _tmp$2029 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4055, _p$4056) };
const _p$4057 = 6;
const _p$4058 = undefined;
const _p$4059 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2028, _tmp$2029, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4057, _p$4058) }]);
const _tmp$2030 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4059);
const _p$4060 = "13";
const _tmp$2031 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4060) };
const _p$4061 = 1;
const _p$4062 = undefined;
const _tmp$2032 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4061, _p$4062) };
const _p$4063 = 7;
const _p$4064 = undefined;
const _p$4065 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2031, _tmp$2032, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4063, _p$4064) }]);
const _tmp$2033 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4065);
const _p$4066 = "10";
const _tmp$2034 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4066) };
const _p$4067 = 2;
const _p$4068 = undefined;
const _tmp$2035 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4067, _p$4068) };
const _p$4069 = 13;
const _p$4070 = undefined;
const _p$4071 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2034, _tmp$2035, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4069, _p$4070) }]);
const _tmp$2036 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4071);
const _p$4072 = "10";
const _tmp$2037 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4072) };
const _p$4073 = 2;
const _p$4074 = undefined;
const _tmp$2038 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4073, _p$4074) };
const _p$4075 = 14;
const _p$4076 = undefined;
const _p$4077 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2037, _tmp$2038, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4075, _p$4076) }]);
const _tmp$2039 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4077);
const _p$4078 = "10";
const _tmp$2040 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4078) };
const _p$4079 = 2;
const _p$4080 = undefined;
const _tmp$2041 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4079, _p$4080) };
const _p$4081 = 15;
const _p$4082 = undefined;
const _p$4083 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2040, _tmp$2041, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4081, _p$4082) }]);
const _tmp$2042 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4083);
const _p$4084 = "10";
const _tmp$2043 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4084) };
const _p$4085 = 2;
const _p$4086 = undefined;
const _tmp$2044 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4085, _p$4086) };
const _p$4087 = 16;
const _p$4088 = undefined;
const _p$4089 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2043, _tmp$2044, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4087, _p$4088) }]);
const _tmp$2045 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4089);
const _p$4090 = "11";
const _tmp$2046 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4090) };
const _p$4091 = 55;
const _p$4092 = undefined;
const _tmp$2047 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4091, _p$4092) };
const _p$4093 = 9;
const _p$4094 = undefined;
const _p$4095 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2046, _tmp$2047, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4093, _p$4094) }]);
const _tmp$2048 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4095);
const _p$4096 = "11";
const _tmp$2049 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4096) };
const _p$4097 = 55;
const _p$4098 = undefined;
const _tmp$2050 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4097, _p$4098) };
const _p$4099 = 10;
const _p$4100 = undefined;
const _p$4101 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2049, _tmp$2050, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4099, _p$4100) }]);
const _tmp$2051 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4101);
const _p$4102 = "11";
const _tmp$2052 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4102) };
const _p$4103 = 55;
const _p$4104 = undefined;
const _tmp$2053 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4103, _p$4104) };
const _p$4105 = 11;
const _p$4106 = undefined;
const _p$4107 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2052, _tmp$2053, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4105, _p$4106) }]);
const _tmp$2054 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4107);
const _p$4108 = "11";
const _tmp$2055 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4108) };
const _p$4109 = 55;
const _p$4110 = undefined;
const _tmp$2056 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4109, _p$4110) };
const _p$4111 = 12;
const _p$4112 = undefined;
const _p$4113 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2055, _tmp$2056, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4111, _p$4112) }]);
const _tmp$2057 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4113);
const _p$4114 = "11";
const _tmp$2058 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4114) };
const _p$4115 = 55;
const _p$4116 = undefined;
const _tmp$2059 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4115, _p$4116) };
const _p$4117 = 13;
const _p$4118 = undefined;
const _p$4119 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2058, _tmp$2059, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4117, _p$4118) }]);
const _tmp$2060 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4119);
const _p$4120 = "10";
const _tmp$2061 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4120) };
const _p$4121 = 2;
const _p$4122 = undefined;
const _tmp$2062 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4121, _p$4122) };
const _p$4123 = 6;
const _p$4124 = undefined;
const _p$4125 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2061, _tmp$2062, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4123, _p$4124) }]);
const _tmp$2063 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4125);
const _p$4126 = "10";
const _tmp$2064 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4126) };
const _p$4127 = 2;
const _p$4128 = undefined;
const _tmp$2065 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4127, _p$4128) };
const _p$4129 = 7;
const _p$4130 = undefined;
const _p$4131 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2064, _tmp$2065, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4129, _p$4130) }]);
const _tmp$2066 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4131);
const _p$4132 = "13";
const _tmp$2067 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4132) };
const _p$4133 = 1;
const _p$4134 = undefined;
const _tmp$2068 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4133, _p$4134) };
const _p$4135 = 8;
const _p$4136 = undefined;
const _p$4137 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2067, _tmp$2068, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4135, _p$4136) }]);
const _tmp$2069 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4137);
const _p$4138 = "10";
const _tmp$2070 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4138) };
const _p$4139 = 2;
const _p$4140 = undefined;
const _tmp$2071 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4139, _p$4140) };
const _p$4141 = 8;
const _p$4142 = undefined;
const _p$4143 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2070, _tmp$2071, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4141, _p$4142) }]);
const _tmp$2072 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4143);
const _p$4144 = "13";
const _tmp$2073 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4144) };
const _p$4145 = 1;
const _p$4146 = undefined;
const _tmp$2074 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4145, _p$4146) };
const _p$4147 = 9;
const _p$4148 = undefined;
const _p$4149 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2073, _tmp$2074, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4147, _p$4148) }]);
const _tmp$2075 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4149);
const _p$4150 = "13";
const _tmp$2076 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4150) };
const _p$4151 = 1;
const _p$4152 = undefined;
const _tmp$2077 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4151, _p$4152) };
const _p$4153 = 10;
const _p$4154 = undefined;
const _p$4155 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2076, _tmp$2077, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4153, _p$4154) }]);
const _tmp$2078 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4155);
const _p$4156 = "13";
const _tmp$2079 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4156) };
const _p$4157 = 1;
const _p$4158 = undefined;
const _tmp$2080 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4157, _p$4158) };
const _p$4159 = 11;
const _p$4160 = undefined;
const _p$4161 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2079, _tmp$2080, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4159, _p$4160) }]);
const _tmp$2081 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4161);
const _p$4162 = "13";
const _tmp$2082 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4162) };
const _p$4163 = 2;
const _p$4164 = undefined;
const _tmp$2083 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4163, _p$4164) };
const _p$4165 = 9;
const _p$4166 = undefined;
const _p$4167 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2082, _tmp$2083, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4165, _p$4166) }]);
const _tmp$2084 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4167);
const _p$4168 = "13";
const _tmp$2085 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4168) };
const _p$4169 = 2;
const _p$4170 = undefined;
const _tmp$2086 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4169, _p$4170) };
const _p$4171 = 10;
const _p$4172 = undefined;
const _p$4173 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2085, _tmp$2086, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4171, _p$4172) }]);
const _tmp$2087 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4173);
const _p$4174 = "10";
const _tmp$2088 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4174) };
const _p$4175 = 2;
const _p$4176 = undefined;
const _tmp$2089 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4175, _p$4176) };
const _p$4177 = 11;
const _p$4178 = undefined;
const _p$4179 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2088, _tmp$2089, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4177, _p$4178) }]);
const _tmp$2090 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4179);
const _p$4180 = "9";
const _tmp$2091 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4180) };
const _p$4181 = 3;
const _p$4182 = undefined;
const _tmp$2092 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4181, _p$4182) };
const _p$4183 = 9;
const _p$4184 = undefined;
const _p$4185 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2091, _tmp$2092, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4183, _p$4184) }]);
const _tmp$2093 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4185);
const _p$4186 = "8";
const _tmp$2094 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4186) };
const _p$4187 = 3;
const _p$4188 = undefined;
const _tmp$2095 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4187, _p$4188) };
const _p$4189 = 10;
const _p$4190 = undefined;
const _p$4191 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2094, _tmp$2095, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4189, _p$4190) }]);
const _tmp$2096 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4191);
const _p$4192 = "9";
const _tmp$2097 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4192) };
const _p$4193 = 4;
const _p$4194 = undefined;
const _tmp$2098 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4193, _p$4194) };
const _p$4195 = 9;
const _p$4196 = undefined;
const _p$4197 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2097, _tmp$2098, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4195, _p$4196) }]);
const _tmp$2099 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4197);
const _p$4198 = "8";
const _tmp$2100 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4198) };
const _p$4199 = 4;
const _p$4200 = undefined;
const _tmp$2101 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4199, _p$4200) };
const _p$4201 = 10;
const _p$4202 = undefined;
const _p$4203 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2100, _tmp$2101, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4201, _p$4202) }]);
const _tmp$2102 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4203);
const _p$4204 = "9";
const _tmp$2103 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4204) };
const _p$4205 = 5;
const _p$4206 = undefined;
const _tmp$2104 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4205, _p$4206) };
const _p$4207 = 9;
const _p$4208 = undefined;
const _p$4209 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2103, _tmp$2104, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4207, _p$4208) }]);
const _tmp$2105 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4209);
const _p$4210 = "8";
const _tmp$2106 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4210) };
const _p$4211 = 5;
const _p$4212 = undefined;
const _tmp$2107 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4211, _p$4212) };
const _p$4213 = 10;
const _p$4214 = undefined;
const _p$4215 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2106, _tmp$2107, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4213, _p$4214) }]);
const _tmp$2108 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4215);
const _p$4216 = "9";
const _tmp$2109 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4216) };
const _p$4217 = 6;
const _p$4218 = undefined;
const _tmp$2110 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4217, _p$4218) };
const _p$4219 = 9;
const _p$4220 = undefined;
const _p$4221 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2109, _tmp$2110, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4219, _p$4220) }]);
const _tmp$2111 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4221);
const _p$4222 = "8";
const _tmp$2112 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4222) };
const _p$4223 = 6;
const _p$4224 = undefined;
const _tmp$2113 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4223, _p$4224) };
const _p$4225 = 10;
const _p$4226 = undefined;
const _p$4227 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2112, _tmp$2113, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4225, _p$4226) }]);
const _tmp$2114 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4227);
const _p$4228 = "9";
const _tmp$2115 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4228) };
const _p$4229 = 7;
const _p$4230 = undefined;
const _tmp$2116 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4229, _p$4230) };
const _p$4231 = 9;
const _p$4232 = undefined;
const _p$4233 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2115, _tmp$2116, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4231, _p$4232) }]);
const _tmp$2117 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4233);
const _p$4234 = "8";
const _tmp$2118 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4234) };
const _p$4235 = 7;
const _p$4236 = undefined;
const _tmp$2119 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4235, _p$4236) };
const _p$4237 = 10;
const _p$4238 = undefined;
const _p$4239 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2118, _tmp$2119, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4237, _p$4238) }]);
const _tmp$2120 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4239);
const _p$4240 = "9";
const _tmp$2121 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4240) };
const _p$4241 = 8;
const _p$4242 = undefined;
const _tmp$2122 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4241, _p$4242) };
const _p$4243 = 9;
const _p$4244 = undefined;
const _p$4245 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2121, _tmp$2122, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4243, _p$4244) }]);
const _tmp$2123 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4245);
const _p$4246 = "8";
const _tmp$2124 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4246) };
const _p$4247 = 8;
const _p$4248 = undefined;
const _tmp$2125 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4247, _p$4248) };
const _p$4249 = 10;
const _p$4250 = undefined;
const _p$4251 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2124, _tmp$2125, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4249, _p$4250) }]);
const _tmp$2126 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4251);
const _p$4252 = "9";
const _tmp$2127 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4252) };
const _p$4253 = 9;
const _p$4254 = undefined;
const _tmp$2128 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4253, _p$4254) };
const _p$4255 = 9;
const _p$4256 = undefined;
const _p$4257 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2127, _tmp$2128, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4255, _p$4256) }]);
const _tmp$2129 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4257);
const _p$4258 = "8";
const _tmp$2130 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4258) };
const _p$4259 = 9;
const _p$4260 = undefined;
const _tmp$2131 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4259, _p$4260) };
const _p$4261 = 10;
const _p$4262 = undefined;
const _p$4263 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2130, _tmp$2131, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4261, _p$4262) }]);
const _tmp$2132 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4263);
const _p$4264 = "9";
const _tmp$2133 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4264) };
const _p$4265 = 10;
const _p$4266 = undefined;
const _tmp$2134 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4265, _p$4266) };
const _p$4267 = 9;
const _p$4268 = undefined;
const _p$4269 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2133, _tmp$2134, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4267, _p$4268) }]);
const _tmp$2135 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4269);
const _p$4270 = "8";
const _tmp$2136 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4270) };
const _p$4271 = 10;
const _p$4272 = undefined;
const _tmp$2137 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4271, _p$4272) };
const _p$4273 = 10;
const _p$4274 = undefined;
const _p$4275 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2136, _tmp$2137, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4273, _p$4274) }]);
const _tmp$2138 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4275);
const _p$4276 = "9";
const _tmp$2139 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4276) };
const _p$4277 = 11;
const _p$4278 = undefined;
const _tmp$2140 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4277, _p$4278) };
const _p$4279 = 9;
const _p$4280 = undefined;
const _p$4281 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2139, _tmp$2140, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4279, _p$4280) }]);
const _tmp$2141 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4281);
const _p$4282 = "16";
const _tmp$2142 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4282) };
const _p$4283 = 12;
const _p$4284 = undefined;
const _tmp$2143 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4283, _p$4284) };
const _p$4285 = 9;
const _p$4286 = undefined;
const _p$4287 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2142, _tmp$2143, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4285, _p$4286) }]);
const _tmp$2144 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4287);
const _p$4288 = "8";
const _tmp$2145 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4288) };
const _p$4289 = 11;
const _p$4290 = undefined;
const _tmp$2146 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4289, _p$4290) };
const _p$4291 = 10;
const _p$4292 = undefined;
const _p$4293 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2145, _tmp$2146, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4291, _p$4292) }]);
const _tmp$2147 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4293);
const _p$4294 = "12";
const _tmp$2148 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4294) };
const _p$4295 = 12;
const _p$4296 = undefined;
const _tmp$2149 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4295, _p$4296) };
const _p$4297 = 10;
const _p$4298 = undefined;
const _p$4299 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2148, _tmp$2149, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4297, _p$4298) }]);
const _tmp$2150 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4299);
const _p$4300 = "11";
const _tmp$2151 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4300) };
const _p$4301 = 55;
const _p$4302 = undefined;
const _tmp$2152 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4301, _p$4302) };
const _p$4303 = 14;
const _p$4304 = undefined;
const _p$4305 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2151, _tmp$2152, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4303, _p$4304) }]);
const _tmp$2153 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4305);
const _p$4306 = "15";
const _tmp$2154 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4306) };
const _p$4307 = 47;
const _p$4308 = undefined;
const _tmp$2155 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4307, _p$4308) };
const _p$4309 = 15;
const _p$4310 = undefined;
const _p$4311 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2154, _tmp$2155, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4309, _p$4310) }]);
const _tmp$2156 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4311);
const _p$4312 = "14";
const _tmp$2157 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4312) };
const _p$4313 = 47;
const _p$4314 = undefined;
const _tmp$2158 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4313, _p$4314) };
const _p$4315 = 16;
const _p$4316 = undefined;
const _p$4317 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2157, _tmp$2158, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4315, _p$4316) }]);
const _tmp$2159 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4317);
const _p$4318 = "9";
const _tmp$2160 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4318) };
const _p$4319 = 48;
const _p$4320 = undefined;
const _tmp$2161 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4319, _p$4320) };
const _p$4321 = 15;
const _p$4322 = undefined;
const _p$4323 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2160, _tmp$2161, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4321, _p$4322) }]);
const _tmp$2162 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4323);
const _p$4324 = "8";
const _tmp$2163 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4324) };
const _p$4325 = 48;
const _p$4326 = undefined;
const _tmp$2164 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4325, _p$4326) };
const _p$4327 = 16;
const _p$4328 = undefined;
const _p$4329 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2163, _tmp$2164, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4327, _p$4328) }]);
const _tmp$2165 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4329);
const _p$4330 = "9";
const _tmp$2166 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4330) };
const _p$4331 = 49;
const _p$4332 = undefined;
const _tmp$2167 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4331, _p$4332) };
const _p$4333 = 15;
const _p$4334 = undefined;
const _p$4335 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2166, _tmp$2167, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4333, _p$4334) }]);
const _tmp$2168 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4335);
const _p$4336 = "8";
const _tmp$2169 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4336) };
const _p$4337 = 49;
const _p$4338 = undefined;
const _tmp$2170 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4337, _p$4338) };
const _p$4339 = 16;
const _p$4340 = undefined;
const _p$4341 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2169, _tmp$2170, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4339, _p$4340) }]);
const _tmp$2171 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4341);
const _p$4342 = "9";
const _tmp$2172 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4342) };
const _p$4343 = 50;
const _p$4344 = undefined;
const _tmp$2173 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4343, _p$4344) };
const _p$4345 = 15;
const _p$4346 = undefined;
const _p$4347 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2172, _tmp$2173, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4345, _p$4346) }]);
const _tmp$2174 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4347);
const _p$4348 = "8";
const _tmp$2175 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4348) };
const _p$4349 = 50;
const _p$4350 = undefined;
const _tmp$2176 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4349, _p$4350) };
const _p$4351 = 16;
const _p$4352 = undefined;
const _p$4353 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2175, _tmp$2176, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4351, _p$4352) }]);
const _tmp$2177 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4353);
const _p$4354 = "9";
const _tmp$2178 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4354) };
const _p$4355 = 51;
const _p$4356 = undefined;
const _tmp$2179 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4355, _p$4356) };
const _p$4357 = 15;
const _p$4358 = undefined;
const _p$4359 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2178, _tmp$2179, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4357, _p$4358) }]);
const _tmp$2180 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4359);
const _p$4360 = "8";
const _tmp$2181 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4360) };
const _p$4361 = 51;
const _p$4362 = undefined;
const _tmp$2182 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4361, _p$4362) };
const _p$4363 = 16;
const _p$4364 = undefined;
const _p$4365 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2181, _tmp$2182, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4363, _p$4364) }]);
const _tmp$2183 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4365);
const _p$4366 = "9";
const _tmp$2184 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4366) };
const _p$4367 = 52;
const _p$4368 = undefined;
const _tmp$2185 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4367, _p$4368) };
const _p$4369 = 15;
const _p$4370 = undefined;
const _p$4371 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2184, _tmp$2185, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4369, _p$4370) }]);
const _tmp$2186 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4371);
const _p$4372 = "8";
const _tmp$2187 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4372) };
const _p$4373 = 52;
const _p$4374 = undefined;
const _tmp$2188 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4373, _p$4374) };
const _p$4375 = 16;
const _p$4376 = undefined;
const _p$4377 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2187, _tmp$2188, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4375, _p$4376) }]);
const _tmp$2189 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4377);
const _p$4378 = "9";
const _tmp$2190 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4378) };
const _p$4379 = 53;
const _p$4380 = undefined;
const _tmp$2191 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4379, _p$4380) };
const _p$4381 = 15;
const _p$4382 = undefined;
const _p$4383 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2190, _tmp$2191, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4381, _p$4382) }]);
const _tmp$2192 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4383);
const _p$4384 = "9";
const _tmp$2193 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4384) };
const _p$4385 = 54;
const _p$4386 = undefined;
const _tmp$2194 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4385, _p$4386) };
const _p$4387 = 15;
const _p$4388 = undefined;
const _p$4389 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2193, _tmp$2194, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4387, _p$4388) }]);
const _tmp$2195 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4389);
const _p$4390 = "13";
const _tmp$2196 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4390) };
const _p$4391 = 55;
const _p$4392 = undefined;
const _tmp$2197 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4391, _p$4392) };
const _p$4393 = 15;
const _p$4394 = undefined;
const _p$4395 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2196, _tmp$2197, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4393, _p$4394) }]);
const _tmp$2198 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4395);
const _p$4396 = "8";
const _tmp$2199 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4396) };
const _p$4397 = 53;
const _p$4398 = undefined;
const _tmp$2200 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4397, _p$4398) };
const _p$4399 = 16;
const _p$4400 = undefined;
const _p$4401 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2199, _tmp$2200, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4399, _p$4400) }]);
const _tmp$2201 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4401);
const _p$4402 = "8";
const _tmp$2202 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4402) };
const _p$4403 = 54;
const _p$4404 = undefined;
const _tmp$2203 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4403, _p$4404) };
const _p$4405 = 16;
const _p$4406 = undefined;
const _p$4407 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2202, _tmp$2203, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4405, _p$4406) }]);
const _tmp$2204 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4407);
const _p$4408 = "13";
const _tmp$2205 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4408) };
const _p$4409 = 55;
const _p$4410 = undefined;
const _tmp$2206 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4409, _p$4410) };
const _p$4411 = 16;
const _p$4412 = undefined;
const _p$4413 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2205, _tmp$2206, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4411, _p$4412) }]);
const _tmp$2207 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4413);
const _p$4414 = "11";
const _tmp$2208 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4414) };
const _p$4415 = 55;
const _p$4416 = undefined;
const _tmp$2209 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4415, _p$4416) };
const _p$4417 = 17;
const _p$4418 = undefined;
const _p$4419 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2208, _tmp$2209, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4417, _p$4418) }]);
const _tmp$2210 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4419);
const _p$4420 = "15";
const _tmp$2211 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4420) };
const _p$4421 = 49;
const _p$4422 = undefined;
const _tmp$2212 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4421, _p$4422) };
const _p$4423 = 10;
const _p$4424 = undefined;
const _p$4425 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2211, _tmp$2212, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4423, _p$4424) }]);
const _tmp$2213 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4425);
const _p$4426 = "16";
const _tmp$2214 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4426) };
const _p$4427 = 50;
const _p$4428 = undefined;
const _tmp$2215 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4427, _p$4428) };
const _p$4429 = 10;
const _p$4430 = undefined;
const _p$4431 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2214, _tmp$2215, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4429, _p$4430) }]);
const _tmp$2216 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4431);
const _p$4432 = "14";
const _tmp$2217 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4432) };
const _p$4433 = 49;
const _p$4434 = undefined;
const _tmp$2218 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4433, _p$4434) };
const _p$4435 = 11;
const _p$4436 = undefined;
const _p$4437 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2217, _tmp$2218, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4435, _p$4436) }]);
const _tmp$2219 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4437);
const _p$4438 = "12";
const _tmp$2220 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4438) };
const _p$4439 = 50;
const _p$4440 = undefined;
const _tmp$2221 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4439, _p$4440) };
const _p$4441 = 11;
const _p$4442 = undefined;
const _p$4443 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2220, _tmp$2221, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4441, _p$4442) }]);
const _tmp$2222 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4443);
const _p$4444 = "15";
const _tmp$2223 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4444) };
const _p$4445 = 42;
const _p$4446 = undefined;
const _tmp$2224 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4445, _p$4446) };
const _p$4447 = 8;
const _p$4448 = undefined;
const _p$4449 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2223, _tmp$2224, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4447, _p$4448) }]);
const _tmp$2225 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4449);
const _p$4450 = "16";
const _tmp$2226 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4450) };
const _p$4451 = 43;
const _p$4452 = undefined;
const _tmp$2227 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4451, _p$4452) };
const _p$4453 = 8;
const _p$4454 = undefined;
const _p$4455 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2226, _tmp$2227, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4453, _p$4454) }]);
const _tmp$2228 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4455);
const _p$4456 = "14";
const _tmp$2229 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4456) };
const _p$4457 = 42;
const _p$4458 = undefined;
const _tmp$2230 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4457, _p$4458) };
const _p$4459 = 9;
const _p$4460 = undefined;
const _p$4461 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2229, _tmp$2230, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4459, _p$4460) }]);
const _tmp$2231 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4461);
const _p$4462 = "12";
const _tmp$2232 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4462) };
const _p$4463 = 43;
const _p$4464 = undefined;
const _tmp$2233 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4463, _p$4464) };
const _p$4465 = 9;
const _p$4466 = undefined;
const _p$4467 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2232, _tmp$2233, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4465, _p$4466) }]);
const _tmp$2234 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4467);
const _p$4468 = "15";
const _tmp$2235 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4468) };
const _p$4469 = 34;
const _p$4470 = undefined;
const _tmp$2236 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4469, _p$4470) };
const _p$4471 = 8;
const _p$4472 = undefined;
const _p$4473 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2235, _tmp$2236, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4471, _p$4472) }]);
const _tmp$2237 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4473);
const _p$4474 = "14";
const _tmp$2238 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4474) };
const _p$4475 = 34;
const _p$4476 = undefined;
const _tmp$2239 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4475, _p$4476) };
const _p$4477 = 9;
const _p$4478 = undefined;
const _p$4479 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2238, _tmp$2239, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4477, _p$4478) }]);
const _tmp$2240 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4479);
const _p$4480 = "9";
const _tmp$2241 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4480) };
const _p$4481 = 35;
const _p$4482 = undefined;
const _tmp$2242 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4481, _p$4482) };
const _p$4483 = 8;
const _p$4484 = undefined;
const _p$4485 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2241, _tmp$2242, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4483, _p$4484) }]);
const _tmp$2243 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4485);
const _p$4486 = "16";
const _tmp$2244 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4486) };
const _p$4487 = 36;
const _p$4488 = undefined;
const _tmp$2245 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4487, _p$4488) };
const _p$4489 = 8;
const _p$4490 = undefined;
const _p$4491 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2244, _tmp$2245, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4489, _p$4490) }]);
const _tmp$2246 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4491);
const _p$4492 = "8";
const _tmp$2247 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4492) };
const _p$4493 = 35;
const _p$4494 = undefined;
const _tmp$2248 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4493, _p$4494) };
const _p$4495 = 9;
const _p$4496 = undefined;
const _p$4497 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2247, _tmp$2248, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4495, _p$4496) }]);
const _tmp$2249 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4497);
const _p$4498 = "12";
const _tmp$2250 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4498) };
const _p$4499 = 36;
const _p$4500 = undefined;
const _tmp$2251 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4499, _p$4500) };
const _p$4501 = 9;
const _p$4502 = undefined;
const _p$4503 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2250, _tmp$2251, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4501, _p$4502) }]);
const _tmp$2252 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4503);
const _p$4504 = "15";
const _tmp$2253 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4504) };
const _p$4505 = 26;
const _p$4506 = undefined;
const _tmp$2254 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4505, _p$4506) };
const _p$4507 = 8;
const _p$4508 = undefined;
const _p$4509 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2253, _tmp$2254, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4507, _p$4508) }]);
const _tmp$2255 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4509);
const _p$4510 = "14";
const _tmp$2256 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4510) };
const _p$4511 = 26;
const _p$4512 = undefined;
const _tmp$2257 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4511, _p$4512) };
const _p$4513 = 9;
const _p$4514 = undefined;
const _p$4515 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2256, _tmp$2257, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4513, _p$4514) }]);
const _tmp$2258 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4515);
const _p$4516 = "9";
const _tmp$2259 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4516) };
const _p$4517 = 27;
const _p$4518 = undefined;
const _tmp$2260 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4517, _p$4518) };
const _p$4519 = 8;
const _p$4520 = undefined;
const _p$4521 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2259, _tmp$2260, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4519, _p$4520) }]);
const _tmp$2261 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4521);
const _p$4522 = "16";
const _tmp$2262 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4522) };
const _p$4523 = 28;
const _p$4524 = undefined;
const _tmp$2263 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4523, _p$4524) };
const _p$4525 = 8;
const _p$4526 = undefined;
const _p$4527 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2262, _tmp$2263, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4525, _p$4526) }]);
const _tmp$2264 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4527);
const _p$4528 = "8";
const _tmp$2265 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4528) };
const _p$4529 = 27;
const _p$4530 = undefined;
const _tmp$2266 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4529, _p$4530) };
const _p$4531 = 9;
const _p$4532 = undefined;
const _p$4533 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2265, _tmp$2266, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4531, _p$4532) }]);
const _tmp$2267 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4533);
const _p$4534 = "12";
const _tmp$2268 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4534) };
const _p$4535 = 28;
const _p$4536 = undefined;
const _tmp$2269 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4535, _p$4536) };
const _p$4537 = 9;
const _p$4538 = undefined;
const _p$4539 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2268, _tmp$2269, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4537, _p$4538) }]);
const _tmp$2270 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4539);
const _p$4540 = "15";
const _tmp$2271 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4540) };
const _p$4541 = 19;
const _p$4542 = undefined;
const _tmp$2272 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4541, _p$4542) };
const _p$4543 = 8;
const _p$4544 = undefined;
const _p$4545 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2271, _tmp$2272, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4543, _p$4544) }]);
const _tmp$2273 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4545);
const _p$4546 = "16";
const _tmp$2274 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4546) };
const _p$4547 = 20;
const _p$4548 = undefined;
const _tmp$2275 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4547, _p$4548) };
const _p$4549 = 8;
const _p$4550 = undefined;
const _p$4551 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2274, _tmp$2275, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4549, _p$4550) }]);
const _tmp$2276 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4551);
const _p$4552 = "14";
const _tmp$2277 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4552) };
const _p$4553 = 19;
const _p$4554 = undefined;
const _tmp$2278 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4553, _p$4554) };
const _p$4555 = 9;
const _p$4556 = undefined;
const _p$4557 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2277, _tmp$2278, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4555, _p$4556) }]);
const _tmp$2279 = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4557);
const _p$4558 = "12";
const _tmp$2280 = { _0: "id", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(_p$4558) };
const _p$4559 = 20;
const _p$4560 = undefined;
const _tmp$2281 = { _0: "x", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4559, _p$4560) };
const _p$4561 = 9;
const _p$4562 = undefined;
const _p$4563 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$2280, _tmp$2281, { _0: "y", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_p$4561, _p$4562) }]);
const _p$4564 = [_tmp$179, _tmp$182, _tmp$185, _tmp$188, _tmp$191, _tmp$194, _tmp$197, _tmp$200, _tmp$203, _tmp$206, _tmp$209, _tmp$212, _tmp$215, _tmp$218, _tmp$221, _tmp$224, _tmp$227, _tmp$230, _tmp$233, _tmp$236, _tmp$239, _tmp$242, _tmp$245, _tmp$248, _tmp$251, _tmp$254, _tmp$257, _tmp$260, _tmp$263, _tmp$266, _tmp$269, _tmp$272, _tmp$275, _tmp$278, _tmp$281, _tmp$284, _tmp$287, _tmp$290, _tmp$293, _tmp$296, _tmp$299, _tmp$302, _tmp$305, _tmp$308, _tmp$311, _tmp$314, _tmp$317, _tmp$320, _tmp$323, _tmp$326, _tmp$329, _tmp$332, _tmp$335, _tmp$338, _tmp$341, _tmp$344, _tmp$347, _tmp$350, _tmp$353, _tmp$356, _tmp$359, _tmp$362, _tmp$365, _tmp$368, _tmp$371, _tmp$374, _tmp$377, _tmp$380, _tmp$383, _tmp$386, _tmp$389, _tmp$392, _tmp$395, _tmp$398, _tmp$401, _tmp$404, _tmp$407, _tmp$410, _tmp$413, _tmp$416, _tmp$419, _tmp$422, _tmp$425, _tmp$428, _tmp$431, _tmp$434, _tmp$437, _tmp$440, _tmp$443, _tmp$446, _tmp$449, _tmp$452, _tmp$455, _tmp$458, _tmp$461, _tmp$464, _tmp$467, _tmp$470, _tmp$473, _tmp$476, _tmp$479, _tmp$482, _tmp$485, _tmp$488, _tmp$491, _tmp$494, _tmp$497, _tmp$500, _tmp$503, _tmp$506, _tmp$509, _tmp$512, _tmp$515, _tmp$518, _tmp$521, _tmp$524, _tmp$527, _tmp$530, _tmp$533, _tmp$536, _tmp$539, _tmp$542, _tmp$545, _tmp$548, _tmp$551, _tmp$554, _tmp$557, _tmp$560, _tmp$563, _tmp$566, _tmp$569, _tmp$572, _tmp$575, _tmp$578, _tmp$581, _tmp$584, _tmp$587, _tmp$590, _tmp$593, _tmp$596, _tmp$599, _tmp$602, _tmp$605, _tmp$608, _tmp$611, _tmp$614, _tmp$617, _tmp$620, _tmp$623, _tmp$626, _tmp$629, _tmp$632, _tmp$635, _tmp$638, _tmp$641, _tmp$644, _tmp$647, _tmp$650, _tmp$653, _tmp$656, _tmp$659, _tmp$662, _tmp$665, _tmp$668, _tmp$671, _tmp$674, _tmp$677, _tmp$680, _tmp$683, _tmp$686, _tmp$689, _tmp$692, _tmp$695, _tmp$698, _tmp$701, _tmp$704, _tmp$707, _tmp$710, _tmp$713, _tmp$716, _tmp$719, _tmp$722, _tmp$725, _tmp$728, _tmp$731, _tmp$734, _tmp$737, _tmp$740, _tmp$743, _tmp$746, _tmp$749, _tmp$752, _tmp$755, _tmp$758, _tmp$761, _tmp$764, _tmp$767, _tmp$770, _tmp$773, _tmp$776, _tmp$779, _tmp$782, _tmp$785, _tmp$788, _tmp$791, _tmp$794, _tmp$797, _tmp$800, _tmp$803, _tmp$806, _tmp$809, _tmp$812, _tmp$815, _tmp$818, _tmp$821, _tmp$824, _tmp$827, _tmp$830, _tmp$833, _tmp$836, _tmp$839, _tmp$842, _tmp$845, _tmp$848, _tmp$851, _tmp$854, _tmp$857, _tmp$860, _tmp$863, _tmp$866, _tmp$869, _tmp$872, _tmp$875, _tmp$878, _tmp$881, _tmp$884, _tmp$887, _tmp$890, _tmp$893, _tmp$896, _tmp$899, _tmp$902, _tmp$905, _tmp$908, _tmp$911, _tmp$914, _tmp$917, _tmp$920, _tmp$923, _tmp$926, _tmp$929, _tmp$932, _tmp$935, _tmp$938, _tmp$941, _tmp$944, _tmp$947, _tmp$950, _tmp$953, _tmp$956, _tmp$959, _tmp$962, _tmp$965, _tmp$968, _tmp$971, _tmp$974, _tmp$977, _tmp$980, _tmp$983, _tmp$986, _tmp$989, _tmp$992, _tmp$995, _tmp$998, _tmp$1001, _tmp$1004, _tmp$1007, _tmp$1010, _tmp$1013, _tmp$1016, _tmp$1019, _tmp$1022, _tmp$1025, _tmp$1028, _tmp$1031, _tmp$1034, _tmp$1037, _tmp$1040, _tmp$1043, _tmp$1046, _tmp$1049, _tmp$1052, _tmp$1055, _tmp$1058, _tmp$1061, _tmp$1064, _tmp$1067, _tmp$1070, _tmp$1073, _tmp$1076, _tmp$1079, _tmp$1082, _tmp$1085, _tmp$1088, _tmp$1091, _tmp$1094, _tmp$1097, _tmp$1100, _tmp$1103, _tmp$1106, _tmp$1109, _tmp$1112, _tmp$1115, _tmp$1118, _tmp$1121, _tmp$1124, _tmp$1127, _tmp$1130, _tmp$1133, _tmp$1136, _tmp$1139, _tmp$1142, _tmp$1145, _tmp$1148, _tmp$1151, _tmp$1154, _tmp$1157, _tmp$1160, _tmp$1163, _tmp$1166, _tmp$1169, _tmp$1172, _tmp$1175, _tmp$1178, _tmp$1181, _tmp$1184, _tmp$1187, _tmp$1190, _tmp$1193, _tmp$1196, _tmp$1199, _tmp$1202, _tmp$1205, _tmp$1208, _tmp$1211, _tmp$1214, _tmp$1217, _tmp$1220, _tmp$1223, _tmp$1226, _tmp$1229, _tmp$1232, _tmp$1235, _tmp$1238, _tmp$1241, _tmp$1244, _tmp$1247, _tmp$1250, _tmp$1253, _tmp$1256, _tmp$1259, _tmp$1262, _tmp$1265, _tmp$1268, _tmp$1271, _tmp$1274, _tmp$1277, _tmp$1280, _tmp$1283, _tmp$1286, _tmp$1289, _tmp$1292, _tmp$1295, _tmp$1298, _tmp$1301, _tmp$1304, _tmp$1307, _tmp$1310, _tmp$1313, _tmp$1316, _tmp$1319, _tmp$1322, _tmp$1325, _tmp$1328, _tmp$1331, _tmp$1334, _tmp$1337, _tmp$1340, _tmp$1343, _tmp$1346, _tmp$1349, _tmp$1352, _tmp$1355, _tmp$1358, _tmp$1361, _tmp$1364, _tmp$1367, _tmp$1370, _tmp$1373, _tmp$1376, _tmp$1379, _tmp$1382, _tmp$1385, _tmp$1388, _tmp$1391, _tmp$1394, _tmp$1397, _tmp$1400, _tmp$1403, _tmp$1406, _tmp$1409, _tmp$1412, _tmp$1415, _tmp$1418, _tmp$1421, _tmp$1424, _tmp$1427, _tmp$1430, _tmp$1433, _tmp$1436, _tmp$1439, _tmp$1442, _tmp$1445, _tmp$1448, _tmp$1451, _tmp$1454, _tmp$1457, _tmp$1460, _tmp$1463, _tmp$1466, _tmp$1469, _tmp$1472, _tmp$1475, _tmp$1478, _tmp$1481, _tmp$1484, _tmp$1487, _tmp$1490, _tmp$1493, _tmp$1496, _tmp$1499, _tmp$1502, _tmp$1505, _tmp$1508, _tmp$1511, _tmp$1514, _tmp$1517, _tmp$1520, _tmp$1523, _tmp$1526, _tmp$1529, _tmp$1532, _tmp$1535, _tmp$1538, _tmp$1541, _tmp$1544, _tmp$1547, _tmp$1550, _tmp$1553, _tmp$1556, _tmp$1559, _tmp$1562, _tmp$1565, _tmp$1568, _tmp$1571, _tmp$1574, _tmp$1577, _tmp$1580, _tmp$1583, _tmp$1586, _tmp$1589, _tmp$1592, _tmp$1595, _tmp$1598, _tmp$1601, _tmp$1604, _tmp$1607, _tmp$1610, _tmp$1613, _tmp$1616, _tmp$1619, _tmp$1622, _tmp$1625, _tmp$1628, _tmp$1631, _tmp$1634, _tmp$1637, _tmp$1640, _tmp$1643, _tmp$1646, _tmp$1649, _tmp$1652, _tmp$1655, _tmp$1658, _tmp$1661, _tmp$1664, _tmp$1667, _tmp$1670, _tmp$1673, _tmp$1676, _tmp$1679, _tmp$1682, _tmp$1685, _tmp$1688, _tmp$1691, _tmp$1694, _tmp$1697, _tmp$1700, _tmp$1703, _tmp$1706, _tmp$1709, _tmp$1712, _tmp$1715, _tmp$1718, _tmp$1721, _tmp$1724, _tmp$1727, _tmp$1730, _tmp$1733, _tmp$1736, _tmp$1739, _tmp$1742, _tmp$1745, _tmp$1748, _tmp$1751, _tmp$1754, _tmp$1757, _tmp$1760, _tmp$1763, _tmp$1766, _tmp$1769, _tmp$1772, _tmp$1775, _tmp$1778, _tmp$1781, _tmp$1784, _tmp$1787, _tmp$1790, _tmp$1793, _tmp$1796, _tmp$1799, _tmp$1802, _tmp$1805, _tmp$1808, _tmp$1811, _tmp$1814, _tmp$1817, _tmp$1820, _tmp$1823, _tmp$1826, _tmp$1829, _tmp$1832, _tmp$1835, _tmp$1838, _tmp$1841, _tmp$1844, _tmp$1847, _tmp$1850, _tmp$1853, _tmp$1856, _tmp$1859, _tmp$1862, _tmp$1865, _tmp$1868, _tmp$1871, _tmp$1874, _tmp$1877, _tmp$1880, _tmp$1883, _tmp$1886, _tmp$1889, _tmp$1892, _tmp$1895, _tmp$1898, _tmp$1901, _tmp$1904, _tmp$1907, _tmp$1910, _tmp$1913, _tmp$1916, _tmp$1919, _tmp$1922, _tmp$1925, _tmp$1928, _tmp$1931, _tmp$1934, _tmp$1937, _tmp$1940, _tmp$1943, _tmp$1946, _tmp$1949, _tmp$1952, _tmp$1955, _tmp$1958, _tmp$1961, _tmp$1964, _tmp$1967, _tmp$1970, _tmp$1973, _tmp$1976, _tmp$1979, _tmp$1982, _tmp$1985, _tmp$1988, _tmp$1991, _tmp$1994, _tmp$1997, _tmp$2000, _tmp$2003, _tmp$2006, _tmp$2009, _tmp$2012, _tmp$2015, _tmp$2018, _tmp$2021, _tmp$2024, _tmp$2027, _tmp$2030, _tmp$2033, _tmp$2036, _tmp$2039, _tmp$2042, _tmp$2045, _tmp$2048, _tmp$2051, _tmp$2054, _tmp$2057, _tmp$2060, _tmp$2063, _tmp$2066, _tmp$2069, _tmp$2072, _tmp$2075, _tmp$2078, _tmp$2081, _tmp$2084, _tmp$2087, _tmp$2090, _tmp$2093, _tmp$2096, _tmp$2099, _tmp$2102, _tmp$2105, _tmp$2108, _tmp$2111, _tmp$2114, _tmp$2117, _tmp$2120, _tmp$2123, _tmp$2126, _tmp$2129, _tmp$2132, _tmp$2135, _tmp$2138, _tmp$2141, _tmp$2144, _tmp$2147, _tmp$2150, _tmp$2153, _tmp$2156, _tmp$2159, _tmp$2162, _tmp$2165, _tmp$2168, _tmp$2171, _tmp$2174, _tmp$2177, _tmp$2180, _tmp$2183, _tmp$2186, _tmp$2189, _tmp$2192, _tmp$2195, _tmp$2198, _tmp$2201, _tmp$2204, _tmp$2207, _tmp$2210, _tmp$2213, _tmp$2216, _tmp$2219, _tmp$2222, _tmp$2225, _tmp$2228, _tmp$2231, _tmp$2234, _tmp$2237, _tmp$2240, _tmp$2243, _tmp$2246, _tmp$2249, _tmp$2252, _tmp$2255, _tmp$2258, _tmp$2261, _tmp$2264, _tmp$2267, _tmp$2270, _tmp$2273, _tmp$2276, _tmp$2279, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4563)];
const _tmp$2282 = { _0: "tiles", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$4564) };
const _p$4565 = false;
const _p$4566 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp$176, _tmp$2282, { _0: "collider", _1: _p$4565 ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False }]);
const _p$4567 = [_tmp$29, _tmp$55, _tmp$69, _tmp$155, _tmp$175, new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4566)];
const _p$4568 = moonbitlang$core$builtin$$Map$from_array$18$([_tmp, _tmp$2, _tmp$3, { _0: "layers", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_p$4567) }]);
const nopublish$pixeladventure$$tilemap = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(_p$4568);
const nopublish$pixeladventure$$bird_hit_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("assets/Background/Purple.png", 9, 6, 6, undefined, Option$None$0$), false, new Option$Some$0$(12), undefined);
const Milky2018$selene$backend$$audio_cache = moonbitlang$core$builtin$$Map$new$46$inner$19$(8);
function moonbitlang$core$abort$$abort$17$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$20$(msg) {
  $panic();
}
function moonbitlang$core$builtin$$Eq$equal$21$(_x_2639, _x_2640) {
  if (_x_2639 === 0) {
    if (_x_2640 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_2640 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$22$(self, ch) {
  const _bind$44 = self;
  _bind$44.val = `${_bind$44.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$21$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$21$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$3$(x, y) {
  return !(x === y);
}
function moonbitlang$core$array$$Array$at$23$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$24$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$25$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$22$(self, str) {
  const _bind$44 = self;
  _bind$44.val = `${_bind$44.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$3$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$3$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$0$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$0$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$26$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$26$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$27$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$3$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$28$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$0$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$29$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$26$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, num2);
  }
  const _p$4569 = num % radix | 0;
  const _tmp$2283 = _p$4569 < 0 ? 0 - _p$4569 | 0 : _p$4569;
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp$2283);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp$2283));
}
function moonbitlang$core$int$$Int$output$46$inner(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: radix, _1: logger };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$17$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$22$, method_1: moonbitlang$core$builtin$$Logger$write_substring$22$, method_2: moonbitlang$core$builtin$$Logger$write_char$22$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$17$(self) {
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
function moonbitlang$core$builtin$$Logger$write_substring$22$(self, str, start, len) {
  const _bind$44 = self;
  _bind$44.val = `${_bind$44.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$array$$Array$iter$30$(self) {
  const _p$4569 = (yield_) => {
    const _len = self.length;
    let _tmp$2283 = 0;
    while (true) {
      const _i = _tmp$2283;
      if (_i < _len) {
        const v = self[_i];
        const _bind$44 = yield_(v);
        if (_bind$44 === 1) {
        } else {
          return 0;
        }
        _tmp$2283 = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p$4569;
}
function moonbitlang$core$option$$Option$unwrap$31$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$32$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$33$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$34$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$35$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$16$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$10$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$8$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$4$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$14$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$18$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$19$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$13$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$16$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$19$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$7$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$10$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$14$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$1$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$2$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$5$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$9$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$16$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$18$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$19$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$8$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$13$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$7$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$14$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$1$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$2$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$10$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$5$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$5$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$5$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$9$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$16$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$16$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$16$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$18$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$19$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$19$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$19$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$8$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$13$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$7$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$7$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$14$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$14$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$1$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$1$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$2$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$2$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$10$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$10$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$5$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$5$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$9$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$9$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$16$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$16$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$16$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$16$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$18$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$18$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$19$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$19$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$19$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$19$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$8$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$8$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$13$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$13$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$7$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$5$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$5$(self, _key, _value, _hash);
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$16$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$16$(self, _key, _value, _hash);
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$19$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$19$(self, _key, _value, _hash);
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
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
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$7$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$14$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$5$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$16$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$16$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$18$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, moonbitlang$core$builtin$$Hash$hash$29$(key));
}
function moonbitlang$core$builtin$$Map$set$19$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$19$(self, key, value, moonbitlang$core$builtin$$Hash$hash$29$(key));
}
function moonbitlang$core$builtin$$Map$set$8$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$builtin$$Map$set$13$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, moonbitlang$core$builtin$$Hash$hash$29$(key));
}
function moonbitlang$core$builtin$$Map$from_array$18$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p$4569 = capacity;
  if (length >= ((Math.imul(_p$4569, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$18$(arr.length);
  const _p$4570 = arr.length;
  let _tmp$2283 = 0;
  while (true) {
    const _p$4571 = _tmp$2283;
    if (_p$4571 < _p$4570) {
      const _p$4572 = arr[_p$4571];
      moonbitlang$core$builtin$$Map$set$18$(m, _p$4572._0, _p$4572._1);
      _tmp$2283 = _p$4571 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$7$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$9$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$5$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return -1;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$12$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$10$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$14$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$8$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return Option$None$1$;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return new Option$Some$1$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$1$;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$19$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$29$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return Option$None$2$;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$2$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$2$;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$13$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$29$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return Option$None$3$;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$3$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$3$;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$18$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$29$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$10$(self, entry) {
  const _bind$44 = entry.prev;
  if (_bind$44 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    const _tmp$2285 = _tmp$2284;
    _tmp$2285.next = entry.next;
  }
  const _bind$45 = entry.next;
  if (_bind$45 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$45;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$10$(self, idx) {
  let _tmp$2283 = idx;
  while (true) {
    const idx$2 = _tmp$2283;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2284 = self.entries;
      $bound_check(_tmp$2284, next);
      const _bind$44 = _tmp$2284[next];
      if (_bind$44 === undefined) {
        break _L;
      } else {
        const _Some = _bind$44;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$10$(self, _x, idx$2);
          _tmp$2283 = next;
          continue;
        }
      }
    }
    const _tmp$2284 = self.entries;
    $bound_check(_tmp$2284, idx$2);
    _tmp$2284[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$10$(self, key, hash) {
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      break;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        moonbitlang$core$builtin$$Map$remove_entry$10$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$10$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove$10$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$10$(self, key, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$36$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$37$(self, value, start, end) {
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
  moonbitlang$core$array$$FixedArray$fill$46$inner$36$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter2$16$(self) {
  const _p$4569 = (yield_) => {
    let _tmp$2283 = self.head;
    while (true) {
      const _param = _tmp$2283;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$44 = yield_(_key, _value);
        if (_bind$44 === 1) {
          _tmp$2283 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$4569;
}
function moonbitlang$core$builtin$$Map$iter2$7$(self) {
  const _p$4569 = (yield_) => {
    let _tmp$2283 = self.head;
    while (true) {
      const _param = _tmp$2283;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$44 = yield_(_key, _value);
        if (_bind$44 === 1) {
          _tmp$2283 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$4569;
}
function moonbitlang$core$builtin$$Map$iter2$2$(self) {
  const _p$4569 = (yield_) => {
    let _tmp$2283 = self.head;
    while (true) {
      const _param = _tmp$2283;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$44 = yield_(_key, _value);
        if (_bind$44 === 1) {
          _tmp$2283 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$4569;
}
function moonbitlang$core$builtin$$Map$iter2$5$(self) {
  const _p$4569 = (yield_) => {
    let _tmp$2283 = self.head;
    while (true) {
      const _param = _tmp$2283;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$44 = yield_(_key, _value);
        if (_bind$44 === 1) {
          _tmp$2283 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$4569;
}
function moonbitlang$core$builtin$$Map$to_array$14$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp$2283 = self.head;
  while (true) {
    const _param = _tmp$2283;
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
      _tmp$2283 = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$array$$Array$push$23$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$38$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$39$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$40$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$41$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$25$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$11$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$24$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$30$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iter$run$30$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$any$30$(self, f) {
  return moonbitlang$core$builtin$$op_notequal$21$(moonbitlang$core$builtin$$Iter$run$30$(self, (k) => f(k) ? 0 : 1), 1);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p$4569 = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$4570 = 17;
  self.acc = Math.imul(_p$4569 << _p$4570 | (_p$4569 >>> (32 - _p$4570 | 0) | 0), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_uint(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end859 = value.length;
  let _tmp$2283 = 0;
  while (true) {
    const i = _tmp$2283;
    if (i < _end859) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp$2283 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$26$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$42$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$26$(input) {
  console.log(input);
}
function moonbitlang$core$array$$Array$new$46$inner$11$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$15$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$30$(capacity) {
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
function moonbitlang$core$array$$Array$set$23$(self, index, value) {
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
function moonbitlang$core$array$$Array$set$25$(self, index, value) {
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
function moonbitlang$core$array$$Array$contains$43$(self, value) {
  const _len = self.length;
  let _tmp$2283 = 0;
  while (true) {
    const _i = _tmp$2283;
    if (_i < _len) {
      const v = self[_i];
      if (v === value) {
        return true;
      }
      _tmp$2283 = _i + 1 | 0;
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
function moonbitlang$core$array$$Array$bubble_sort_by$23$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1236 = actual_start + 1 | 0;
  let _tmp$2283 = _start1236;
  while (true) {
    const i = _tmp$2283;
    if (i < actual_end) {
      let _tmp$2284 = i;
      while (true) {
        const j = _tmp$2284;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$23$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$23$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$23$(arr, j);
          moonbitlang$core$array$$Array$set$23$(arr, j, moonbitlang$core$array$$Array$at$23$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$23$(arr, j - 1 | 0, temp);
          _tmp$2284 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2283 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$bubble_sort_by$25$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1236 = actual_start + 1 | 0;
  let _tmp$2283 = _start1236;
  while (true) {
    const i = _tmp$2283;
    if (i < actual_end) {
      let _tmp$2284 = i;
      while (true) {
        const j = _tmp$2284;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$25$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$25$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$25$(arr, j);
          moonbitlang$core$array$$Array$set$25$(arr, j, moonbitlang$core$array$$Array$at$25$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$25$(arr, j - 1 | 0, temp);
          _tmp$2284 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2283 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1270(_env, a_idx, b_idx) {
  const swaps = _env._3;
  const cmp = _env._2;
  const arr = _env._1;
  const actual_start = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$23$(arr, a_pos), moonbitlang$core$array$$Array$at$23$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$23$(arr, a_pos);
    moonbitlang$core$array$$Array$set$23$(arr, a_pos, moonbitlang$core$array$$Array$at$23$(arr, b_pos));
    moonbitlang$core$array$$Array$set$23$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1271(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1270(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1270(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1270(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$23$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const len = actual_end - actual_start | 0;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: actual_start, _1: arr, _2: cmp, _3: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1271(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1271(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1271(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1271(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp$2283 = 0;
    while (true) {
      const i = _tmp$2283;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$23$(arr, i_pos);
        moonbitlang$core$array$$Array$set$23$(arr, i_pos, moonbitlang$core$array$$Array$at$23$(arr, j_pos));
        moonbitlang$core$array$$Array$set$23$(arr, j_pos, temp);
        _tmp$2283 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return { _0: ((actual_start + len | 0) - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: actual_start + b | 0, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1305(_env, a_idx, b_idx) {
  const swaps = _env._3;
  const cmp = _env._2;
  const arr = _env._1;
  const actual_start = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$25$(arr, a_pos), moonbitlang$core$array$$Array$at$25$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$25$(arr, a_pos);
    moonbitlang$core$array$$Array$set$25$(arr, a_pos, moonbitlang$core$array$$Array$at$25$(arr, b_pos));
    moonbitlang$core$array$$Array$set$25$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1306(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1305(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1305(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1305(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$25$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const len = actual_end - actual_start | 0;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: actual_start, _1: arr, _2: cmp, _3: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1306(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1306(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1306(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1306(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp$2283 = 0;
    while (true) {
      const i = _tmp$2283;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$25$(arr, i_pos);
        moonbitlang$core$array$$Array$set$25$(arr, i_pos, moonbitlang$core$array$$Array$at$25$(arr, j_pos));
        moonbitlang$core$array$$Array$set$25$(arr, j_pos, temp);
        _tmp$2283 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return { _0: ((actual_start + len | 0) - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: actual_start + b | 0, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$Array$sift_down_by$23$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$23$(arr, child_pos), moonbitlang$core$array$$Array$at$23$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$23$(arr, current_pos), moonbitlang$core$array$$Array$at$23$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$23$(arr, current_pos);
      moonbitlang$core$array$$Array$set$23$(arr, current_pos, moonbitlang$core$array$$Array$at$23$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$23$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$sift_down_by$25$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$25$(arr, child_pos), moonbitlang$core$array$$Array$at$25$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$25$(arr, current_pos), moonbitlang$core$array$$Array$at$25$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$25$(arr, current_pos);
      moonbitlang$core$array$$Array$set$25$(arr, current_pos, moonbitlang$core$array$$Array$at$25$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$25$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$23$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp$2283 = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp$2283;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$23$(arr, actual_start, actual_end, i, cmp);
      _tmp$2283 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2284 = len - 1 | 0;
  while (true) {
    const i = _tmp$2284;
    if (i > 0) {
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$23$(arr, actual_start);
      moonbitlang$core$array$$Array$set$23$(arr, actual_start, moonbitlang$core$array$$Array$at$23$(arr, last));
      moonbitlang$core$array$$Array$set$23$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$23$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2284 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$25$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp$2283 = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp$2283;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$25$(arr, actual_start, actual_end, i, cmp);
      _tmp$2283 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2284 = len - 1 | 0;
  while (true) {
    const i = _tmp$2284;
    if (i > 0) {
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$25$(arr, actual_start);
      moonbitlang$core$array$$Array$set$25$(arr, actual_start, moonbitlang$core$array$$Array$at$25$(arr, last));
      moonbitlang$core$array$$Array$set$25$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$25$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2284 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$partition_by$23$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$23$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$23$(arr, pivot_index, moonbitlang$core$array$$Array$at$23$(arr, last_index));
  moonbitlang$core$array$$Array$set$23$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$23$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp$2283 = actual_start;
  while (true) {
    const j = _tmp$2283;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$23$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$23$(arr, i);
          moonbitlang$core$array$$Array$set$23$(arr, i, moonbitlang$core$array$$Array$at$23$(arr, j));
          moonbitlang$core$array$$Array$set$23$(arr, j, temp$2);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp$2283 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const temp$2 = moonbitlang$core$array$$Array$at$23$(arr, i);
  moonbitlang$core$array$$Array$set$23$(arr, i, moonbitlang$core$array$$Array$at$23$(arr, last_index));
  moonbitlang$core$array$$Array$set$23$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$partition_by$25$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$25$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$25$(arr, pivot_index, moonbitlang$core$array$$Array$at$25$(arr, last_index));
  moonbitlang$core$array$$Array$set$25$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$25$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp$2283 = actual_start;
  while (true) {
    const j = _tmp$2283;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$25$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$25$(arr, i);
          moonbitlang$core$array$$Array$set$25$(arr, i, moonbitlang$core$array$$Array$at$25$(arr, j));
          moonbitlang$core$array$$Array$set$25$(arr, j, temp$2);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp$2283 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const temp$2 = moonbitlang$core$array$$Array$at$25$(arr, i);
  moonbitlang$core$array$$Array$set$25$(arr, i, moonbitlang$core$array$$Array$at$25$(arr, last_index));
  moonbitlang$core$array$$Array$set$25$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$23$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1251 = actual_start + 1 | 0;
  let _tmp$2283 = _start1251;
  while (true) {
    const i = _tmp$2283;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2284 = i;
      while (true) {
        const j = _tmp$2284;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$23$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$23$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$23$(arr, j);
          moonbitlang$core$array$$Array$set$23$(arr, j, moonbitlang$core$array$$Array$at$23$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$23$(arr, j - 1 | 0, temp);
          _tmp$2284 = j - 1 | 0;
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
      _tmp$2283 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$25$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1251 = actual_start + 1 | 0;
  let _tmp$2283 = _start1251;
  while (true) {
    const i = _tmp$2283;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2284 = i;
      while (true) {
        const j = _tmp$2284;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$25$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$25$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$25$(arr, j);
          moonbitlang$core$array$$Array$set$25$(arr, j, moonbitlang$core$array$$Array$at$25$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$25$(arr, j - 1 | 0, temp);
          _tmp$2284 = j - 1 | 0;
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
      _tmp$2283 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$quick_sort_by$23$(arr, start, end, cmp, pred, limit) {
  let limit$2 = limit;
  let current_start = start;
  let current_end = end;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const len = current_end - current_start | 0;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$Array$bubble_sort_by$23$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$23$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$44 = moonbitlang$core$array$$Array$choose_pivot_by$23$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$44._0;
    const _likely_sorted = _bind$44._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$23$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$45 = moonbitlang$core$array$$Array$partition_by$23$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$45._0;
    const _partitioned = _bind$45._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$46 = pred$2;
    if (_bind$46 === undefined) {
    } else {
      const _Some = _bind$46;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$23$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$23$(arr, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        current_start = i;
        continue;
      }
    }
    const left_start = current_start;
    const right_start = _actual_pivot_pos + 1 | 0;
    const right_end = current_end;
    if ((_actual_pivot_pos - left_start | 0) < (right_end - right_start | 0)) {
      moonbitlang$core$array$$Array$quick_sort_by$23$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$23$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$23$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$23$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$quick_sort_by$25$(arr, start, end, cmp, pred, limit) {
  let limit$2 = limit;
  let current_start = start;
  let current_end = end;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const len = current_end - current_start | 0;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$Array$bubble_sort_by$25$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$25$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$44 = moonbitlang$core$array$$Array$choose_pivot_by$25$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$44._0;
    const _likely_sorted = _bind$44._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$25$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$45 = moonbitlang$core$array$$Array$partition_by$25$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$45._0;
    const _partitioned = _bind$45._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$46 = pred$2;
    if (_bind$46 === undefined) {
    } else {
      const _Some = _bind$46;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$25$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$25$(arr, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        current_start = i;
        continue;
      }
    }
    const left_start = current_start;
    const right_start = _actual_pivot_pos + 1 | 0;
    const right_end = current_end;
    if ((_actual_pivot_pos - left_start | 0) < (right_end - right_start | 0)) {
      moonbitlang$core$array$$Array$quick_sort_by$25$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$25$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$25$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$25$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$44$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$23$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$25$(self, cmp) {
  moonbitlang$core$array$$Array$quick_sort_by$25$(self, 0, self.length, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$json$$decode_error$17$(path, msg) {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$20$(path, msg) {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$45$(path, msg) {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$26$(path, msg) {
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$46$(path, msg) {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$decode_error$47$(path, msg) {
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function moonbitlang$core$json$$from_json$46$inner$48$(json, path) {
  return moonbitlang$core$json$$FromJson$from_json$48$(json, path);
}
function moonbitlang$core$json$$from_json$48$(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = $64$moonbitlang$47$core$47$json$46$JsonPath$Root;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return moonbitlang$core$json$$from_json$46$inner$48$(json, path);
}
function moonbitlang$core$json$$FromJson$from_json$47$(json, path) {
  switch (json.$tag) {
    case 1: {
      return new Result$Ok$9$(true);
    }
    case 2: {
      return new Result$Ok$9$(false);
    }
    default: {
      return moonbitlang$core$json$$decode_error$47$(path, "Bool::from_json: expected boolean");
    }
  }
}
function moonbitlang$core$json$$FromJson$from_json$17$(json, path) {
  _L: {
    if (json.$tag === 3) {
      const _Number = json;
      const _n = _Number._0;
      if (_n !== moonbitlang$core$double$$infinity) {
        if (_n !== moonbitlang$core$double$$neg_infinity) {
          if (_n > 2147483647 || _n < -2147483648) {
            const _bind$44 = moonbitlang$core$json$$decode_error$20$(path, "Int::from_json: overflow");
            if (_bind$44.$tag === 1) {
              const _ok = _bind$44;
              _ok._0;
            } else {
              return _bind$44;
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
  return moonbitlang$core$json$$decode_error$17$(path, "Int::from_json: expected number");
}
function moonbitlang$core$json$$FromJson$from_json$26$(json, path) {
  if (json.$tag === 4) {
    const _String = json;
    const _a = _String._0;
    return new Result$Ok$8$(_a);
  } else {
    return moonbitlang$core$json$$decode_error$26$(path, "String::from_json: expected string");
  }
}
function moonbitlang$core$json$$FromJson$from_json$49$(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind$44 = new $64$moonbitlang$47$core$47$json$46$JsonPath$Index(path, 0);
    if (_bind$44.$tag === 2) {
      const _Index = _bind$44;
      let _p$4569;
      _L: {
        let _p$4570;
        _L$2: {
          if (_a.length === 0) {
            const _tmp$2283 = [];
            _p$4569 = _tmp$2283;
            break _L;
          }
          const _p$4571 = new Array(_a.length);
          const _p$4572 = _a.length;
          let _tmp$2283 = 0;
          while (true) {
            const _p$4573 = _tmp$2283;
            if (_p$4573 < _p$4572) {
              const _p$4574 = _a[_p$4573];
              _Index._1 = _p$4573;
              const _bind$45 = moonbitlang$core$json$$FromJson$from_json$50$(_p$4574, _Index);
              let _tmp$2284;
              if (_bind$45.$tag === 1) {
                const _ok = _bind$45;
                _tmp$2284 = _ok._0;
              } else {
                const _err = _bind$45;
                const _tmp$2285 = _err._0;
                _p$4570 = _tmp$2285;
                break _L$2;
              }
              _p$4571[_p$4573] = _tmp$2284;
              _tmp$2283 = _p$4573 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return new Result$Ok$4$(_p$4571);
        }
        return new Result$Err$4$(_p$4570);
      }
      return new Result$Ok$4$(_p$4569);
    } else {
      return new Result$Ok$4$($panic());
    }
  } else {
    return moonbitlang$core$json$$decode_error$45$(path, "Array::from_json: expected array");
  }
}
function moonbitlang$core$json$$FromJson$from_json$51$(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind$44 = new $64$moonbitlang$47$core$47$json$46$JsonPath$Index(path, 0);
    if (_bind$44.$tag === 2) {
      const _Index = _bind$44;
      let _p$4569;
      _L: {
        let _p$4570;
        _L$2: {
          if (_a.length === 0) {
            const _tmp$2283 = [];
            _p$4569 = _tmp$2283;
            break _L;
          }
          const _p$4571 = new Array(_a.length);
          const _p$4572 = _a.length;
          let _tmp$2283 = 0;
          while (true) {
            const _p$4573 = _tmp$2283;
            if (_p$4573 < _p$4572) {
              const _p$4574 = _a[_p$4573];
              _Index._1 = _p$4573;
              const _bind$45 = moonbitlang$core$json$$FromJson$from_json$52$(_p$4574, _Index);
              let _tmp$2284;
              if (_bind$45.$tag === 1) {
                const _ok = _bind$45;
                _tmp$2284 = _ok._0;
              } else {
                const _err = _bind$45;
                const _tmp$2285 = _err._0;
                _p$4570 = _tmp$2285;
                break _L$2;
              }
              _p$4571[_p$4573] = _tmp$2284;
              _tmp$2283 = _p$4573 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return new Result$Ok$5$(_p$4571);
        }
        return new Result$Err$5$(_p$4570);
      }
      return new Result$Ok$5$(_p$4569);
    } else {
      return new Result$Ok$5$($panic());
    }
  } else {
    return moonbitlang$core$json$$decode_error$46$(path, "Array::from_json: expected array");
  }
}
function moonbitlang$core$list$$List$of$6$(arr) {
  let _tmp$2283 = arr.length - 1 | 0;
  let _tmp$2284 = $64$moonbitlang$47$core$47$list$46$List$Empty$10$;
  while (true) {
    const i = _tmp$2283;
    const list = _tmp$2284;
    if (i >= 0) {
      _tmp$2283 = i - 1 | 0;
      $bound_check(arr, i);
      _tmp$2284 = new $64$moonbitlang$47$core$47$list$46$List$More$10$(arr[i], list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$option$$Option$unwrap_or$53$(self, default_) {
  if (self.$tag === 0) {
    return default_;
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap_or_default$35$(self) {
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
function moonbitlang$core$ref$$Ref$new$54$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$17$(x) {
  return { val: x };
}
function moonbitlang$core$set$$Set$new$46$inner$0$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$44 = capacity$2 - 1 | 0;
  const _bind$45 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$46 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$47 = undefined;
  return { entries: _bind$46, size: 0, capacity: capacity$2, capacity_mask: _bind$44, grow_at: _bind$45, head: _bind$47, tail: -1 };
}
function moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$3$(self, idx, entry) {
  const _bind$44 = self.tail;
  if (_bind$44 === -1) {
    self.head = entry;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    _tmp$2284.next = entry;
  }
  self.tail = idx;
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, idx);
  _tmp$2283[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$set_entry$0$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$set_entry$3$(self, entry, new_idx) {
  const _tmp$2283 = self.entries;
  $bound_check(_tmp$2283, new_idx);
  _tmp$2283[new_idx] = entry;
  const _bind$44 = entry.next;
  if (_bind$44 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$44;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$push_away$0$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$push_away$3$(self, idx, entry) {
  let _tmp$2283 = entry.psl + 1 | 0;
  let _tmp$2284 = idx + 1 & self.capacity_mask;
  let _tmp$2285 = entry;
  while (true) {
    const psl = _tmp$2283;
    const idx$2 = _tmp$2284;
    const entry$2 = _tmp$2285;
    const _tmp$2286 = self.entries;
    $bound_check(_tmp$2286, idx$2);
    const _bind$44 = _tmp$2286[idx$2];
    if (_bind$44 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$3$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$44;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$3$(self, entry$2, idx$2);
        _tmp$2283 = _curr_entry.psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        _tmp$2285 = _curr_entry;
        continue;
      } else {
        _tmp$2283 = psl + 1 | 0;
        _tmp$2284 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$add_with_hash$0$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$0$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$0$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$3$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$3$(self);
  }
  let _bind$44;
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$45 = _tmp$2285[idx];
    if (_bind$45 === undefined) {
      _bind$44 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$45;
      const _curr_entry = _Some;
      let _tmp$2286;
      if (_curr_entry.hash === hash) {
        const _p$4569 = _curr_entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$3$(self, idx, _curr_entry);
        _bind$44 = { _0: idx, _1: psl };
        break;
      }
      _tmp$2283 = psl + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$44._0;
  const _psl = _bind$44._1;
  const _bind$45 = self.tail;
  const _bind$46 = undefined;
  const entry = { prev: _bind$45, next: _bind$46, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$3$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$0$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$0$(self, _key, _hash);
      _tmp$2283 = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$grow$3$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$4569 = self.capacity;
  self.grow_at = (Math.imul(_p$4569, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2283 = old_head;
  while (true) {
    const _param = _tmp$2283;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$3$(self, _key, _hash);
      _tmp$2283 = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$0$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$28$(key));
}
function moonbitlang$core$set$$Set$add$3$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$3$(self, key, moonbitlang$core$builtin$$Hash$hash$27$(key));
}
function moonbitlang$core$set$$Set$from_array$0$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p$4569 = capacity;
  if (length >= ((Math.imul(_p$4569, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(capacity);
  const _p$4570 = arr.length;
  let _tmp$2283 = 0;
  while (true) {
    const _p$4571 = _tmp$2283;
    if (_p$4571 < _p$4570) {
      const _p$4572 = arr[_p$4571];
      moonbitlang$core$set$$Set$add$0$(m, _p$4572);
      _tmp$2283 = _p$4571 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return false;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$contains$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$28$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      return false;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_entry.key, key)) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove_entry$0$(self, entry) {
  const _bind$44 = entry.prev;
  if (_bind$44 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    const _tmp$2285 = _tmp$2284;
    _tmp$2285.next = entry.next;
  }
  const _bind$45 = entry.next;
  if (_bind$45 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$45;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$remove_entry$3$(self, entry) {
  const _bind$44 = entry.prev;
  if (_bind$44 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$2283 = self.entries;
    $bound_check(_tmp$2283, _bind$44);
    const _p$4569 = _tmp$2283[_bind$44];
    let _tmp$2284;
    if (_p$4569 === undefined) {
      _tmp$2284 = $panic();
    } else {
      const _p$4570 = _p$4569;
      _tmp$2284 = _p$4570;
    }
    const _tmp$2285 = _tmp$2284;
    _tmp$2285.next = entry.next;
  }
  const _bind$45 = entry.next;
  if (_bind$45 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$45;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$0$(self, idx) {
  let _tmp$2283 = idx;
  while (true) {
    const idx$2 = _tmp$2283;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2284 = self.entries;
      $bound_check(_tmp$2284, next);
      const _bind$44 = _tmp$2284[next];
      if (_bind$44 === undefined) {
        break _L;
      } else {
        const _Some = _bind$44;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$0$(self, _x, idx$2);
          _tmp$2283 = next;
          continue;
        }
      }
    }
    const _tmp$2284 = self.entries;
    $bound_check(_tmp$2284, idx$2);
    _tmp$2284[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$3$(self, idx) {
  let _tmp$2283 = idx;
  while (true) {
    const idx$2 = _tmp$2283;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2284 = self.entries;
      $bound_check(_tmp$2284, next);
      const _bind$44 = _tmp$2284[next];
      if (_bind$44 === undefined) {
        break _L;
      } else {
        const _Some = _bind$44;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$3$(self, _x, idx$2);
          _tmp$2283 = next;
          continue;
        }
      }
    }
    const _tmp$2284 = self.entries;
    $bound_check(_tmp$2284, idx$2);
    _tmp$2284[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$remove$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$28$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      break;
    } else {
      const _Some = _bind$44;
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
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$27$(key);
  let _tmp$2283 = 0;
  let _tmp$2284 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2283;
    const idx = _tmp$2284;
    const _tmp$2285 = self.entries;
    $bound_check(_tmp$2285, idx);
    const _bind$44 = _tmp$2285[idx];
    if (_bind$44 === undefined) {
      break;
    } else {
      const _Some = _bind$44;
      const _entry = _Some;
      let _tmp$2286;
      if (_entry.hash === hash) {
        const _p$4569 = _entry.key;
        _tmp$2286 = _p$4569 === key;
      } else {
        _tmp$2286 = false;
      }
      if (_tmp$2286) {
        moonbitlang$core$set$$Set$remove_entry$3$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$3$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp$2283 = i + 1 | 0;
      _tmp$2284 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$clear$0$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$37$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$0$(self) {
  const _p$4569 = (yield_) => {
    let _tmp$2283 = self.head;
    while (true) {
      const _param = _tmp$2283;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$44 = yield_(_key);
        if (_bind$44 === 1) {
          _tmp$2283 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$4569;
}
function moonbitlang$core$set$$Set$iter$3$(self) {
  const _p$4569 = (yield_) => {
    let _tmp$2283 = self.head;
    while (true) {
      const _param = _tmp$2283;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$44 = yield_(_key);
        if (_bind$44 === 1) {
          _tmp$2283 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$4569;
}
function moonbitlang$core$set$$Set$difference$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp$2283 = self.head;
  while (true) {
    const _p$4569 = _tmp$2283;
    if (_p$4569 === undefined) {
      break;
    } else {
      const _p$4570 = _p$4569;
      const _p$4571 = _p$4570;
      const _p$4572 = _p$4571.key;
      const _p$4573 = _p$4571.next;
      if (!moonbitlang$core$set$$Set$contains$0$(other, _p$4572)) {
        moonbitlang$core$set$$Set$add$0$(m, _p$4572);
      }
      _tmp$2283 = _p$4573;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp$2283 = self.head;
  while (true) {
    const _p$4569 = _tmp$2283;
    if (_p$4569 === undefined) {
      break;
    } else {
      const _p$4570 = _p$4569;
      const _p$4571 = _p$4570;
      const _p$4572 = _p$4571.key;
      const _p$4573 = _p$4571.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$4572);
      _tmp$2283 = _p$4573;
      continue;
    }
  }
  let _tmp$2284 = other.head;
  while (true) {
    const _p$4569 = _tmp$2284;
    if (_p$4569 === undefined) {
      break;
    } else {
      const _p$4570 = _p$4569;
      const _p$4571 = _p$4570;
      const _p$4572 = _p$4571.key;
      const _p$4573 = _p$4571.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$4572);
      _tmp$2284 = _p$4573;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$3$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$3$(8);
  let _tmp$2283 = self.head;
  while (true) {
    const _p$4569 = _tmp$2283;
    if (_p$4569 === undefined) {
      break;
    } else {
      const _p$4570 = _p$4569;
      const _p$4571 = _p$4570;
      const _p$4572 = _p$4571.key;
      const _p$4573 = _p$4571.next;
      moonbitlang$core$set$$Set$add$3$(m, _p$4572);
      _tmp$2283 = _p$4573;
      continue;
    }
  }
  let _tmp$2284 = other.head;
  while (true) {
    const _p$4569 = _tmp$2284;
    if (_p$4569 === undefined) {
      break;
    } else {
      const _p$4570 = _p$4569;
      const _p$4571 = _p$4570;
      const _p$4572 = _p$4571.key;
      const _p$4573 = _p$4571.next;
      moonbitlang$core$set$$Set$add$3$(m, _p$4572);
      _tmp$2284 = _p$4573;
      continue;
    }
  }
  return m;
}
function rami3l$js$45$ffi$js$$Union3$from0$55$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$55$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$56$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$34$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$57$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$58$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$53$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$59$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$59$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$59$(self)) {
    moonbitlang$core$abort$$abort$20$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$31$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$11$(self) : Option$None$11$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$32$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$12$(self) : Option$None$12$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$33$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$13$(self) : Option$None$13$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$34$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$14$(self) : Option$None$14$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$60$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$60$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$60$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$60$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$60$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$58$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$61$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$62$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$33$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$63$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$32$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$63$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$31$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$34$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$34$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$53$();
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
  return moonbitlang$core$builtin$$Mul$mul$64$(Milky2018$selene$math$$Transform$from_translation(width, 0), Milky2018$selene$math$$Transform$from_scale(-1, 1));
}
function moonbitlang$core$builtin$$Mul$mul$64$(self, other) {
  return Milky2018$selene$math$$Transform$multiply(self, other);
}
function Milky2018$selene$math$$Rect$intersects(a, b) {
  return Milky2018$selene$math$$Vec2D$op_get(a.position, 0) < Milky2018$selene$math$$Vec2D$op_get(b.position, 0) + Milky2018$selene$math$$Vec2D$op_get(b.size, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 0) + Milky2018$selene$math$$Vec2D$op_get(a.size, 0) > Milky2018$selene$math$$Vec2D$op_get(b.position, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 1) < Milky2018$selene$math$$Vec2D$op_get(b.position, 1) + Milky2018$selene$math$$Vec2D$op_get(b.size, 1) && Milky2018$selene$math$$Vec2D$op_get(a.position, 1) + Milky2018$selene$math$$Vec2D$op_get(a.size, 1) > Milky2018$selene$math$$Vec2D$op_get(b.position, 1)));
}
function Milky2018$selene$math$$Rect$shift(self, dir) {
  const _p$4569 = self.position;
  const _tmp$2283 = { _0: _p$4569._0 + dir._0, _1: _p$4569._1 + dir._1 };
  return { position: _tmp$2283, size: self.size };
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
const Milky2018$selene$inputs$$from_string$46$constr$47$1898 = 0;
const Milky2018$selene$inputs$$from_string$46$constr$47$1899 = 1;
const Milky2018$selene$inputs$$from_string$46$constr$47$1900 = 2;
const Milky2018$selene$inputs$$from_string$46$constr$47$1901 = 3;
const Milky2018$selene$inputs$$from_string$46$constr$47$1902 = 4;
const Milky2018$selene$inputs$$from_string$46$constr$47$1903 = 5;
const Milky2018$selene$inputs$$from_string$46$constr$47$1904 = 6;
const Milky2018$selene$inputs$$from_string$46$constr$47$1905 = 7;
const Milky2018$selene$inputs$$from_string$46$constr$47$1906 = 8;
const Milky2018$selene$inputs$$from_string$46$constr$47$1907 = 9;
const Milky2018$selene$inputs$$from_string$46$constr$47$1908 = 10;
const Milky2018$selene$inputs$$from_string$46$constr$47$1909 = 11;
const Milky2018$selene$inputs$$from_string$46$constr$47$1910 = 12;
const Milky2018$selene$inputs$$from_string$46$constr$47$1911 = 13;
const Milky2018$selene$inputs$$from_string$46$constr$47$1912 = 14;
const Milky2018$selene$inputs$$from_string$46$constr$47$1913 = 15;
const Milky2018$selene$inputs$$from_string$46$constr$47$1914 = 16;
const Milky2018$selene$inputs$$from_string$46$constr$47$1915 = 17;
const Milky2018$selene$inputs$$from_string$46$constr$47$1916 = 18;
const Milky2018$selene$inputs$$from_string$46$constr$47$1917 = 19;
const Milky2018$selene$inputs$$from_string$46$constr$47$1918 = 20;
const Milky2018$selene$inputs$$from_string$46$constr$47$1919 = 21;
const Milky2018$selene$inputs$$from_string$46$constr$47$1920 = 22;
const Milky2018$selene$inputs$$from_string$46$constr$47$1921 = 23;
const Milky2018$selene$inputs$$from_string$46$constr$47$1922 = 24;
const Milky2018$selene$inputs$$from_string$46$constr$47$1923 = 26;
const Milky2018$selene$inputs$$from_string$46$constr$47$1924 = 27;
const Milky2018$selene$inputs$$from_string$46$constr$47$1925 = 28;
const Milky2018$selene$inputs$$from_string$46$constr$47$1926 = 29;
const Milky2018$selene$inputs$$from_string$46$constr$47$1927 = 30;
const Milky2018$selene$inputs$$from_string$46$constr$47$1928 = 31;
const Milky2018$selene$inputs$$from_string$46$constr$47$1929 = 32;
function Milky2018$selene$inputs$$Code$from_string(code) {
  switch (code) {
    case "KeyA": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1898;
    }
    case "KeyB": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1899;
    }
    case "KeyC": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1900;
    }
    case "KeyD": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1901;
    }
    case "KeyE": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1902;
    }
    case "KeyF": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1903;
    }
    case "KeyG": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1904;
    }
    case "KeyH": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1905;
    }
    case "KeyI": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1906;
    }
    case "KeyJ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1907;
    }
    case "KeyK": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1908;
    }
    case "KeyL": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1909;
    }
    case "KeyM": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1910;
    }
    case "KeyN": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1911;
    }
    case "KeyO": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1912;
    }
    case "KeyP": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1913;
    }
    case "KeyQ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1914;
    }
    case "KeyR": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1915;
    }
    case "KeyS": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1916;
    }
    case "KeyT": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1917;
    }
    case "KeyU": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1918;
    }
    case "KeyV": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1919;
    }
    case "KeyW": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1920;
    }
    case "KeyX": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1921;
    }
    case "KeyY": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1922;
    }
    case "ArrowUp": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1923;
    }
    case "ArrowDown": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1924;
    }
    case "ArrowLeft": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1925;
    }
    case "ArrowRight": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1926;
    }
    case "Space": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1927;
    }
    case "Enter": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1928;
    }
    case "Escape": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1929;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$inputs$$advanced_key_system(_delta) {
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$just_pressed_keys);
  const _bind$44 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$pressed_keys, Milky2018$selene$inputs$$last_pressed_keys));
  _bind$44((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_pressed_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$just_release_keys);
  const _bind$45 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$union$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$all_codes, Milky2018$selene$inputs$$pressed_keys), Milky2018$selene$inputs$$last_pressed_keys));
  _bind$45((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_release_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$last_pressed_keys);
  const _bind$46 = moonbitlang$core$set$$Set$iter$0$(Milky2018$selene$inputs$$pressed_keys);
  _bind$46((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$last_pressed_keys, code);
    return 1;
  });
}
function Milky2018$selene$inputs$$is_just_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$inputs$$just_pressed_keys, code);
}
function Milky2018$selene$backend$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$33$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$62$(rami3l$js$45$ffi$js$$Nullable$unwrap$59$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$34$(rami3l$js$45$ffi$js$$Union5$to0$56$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$44 = { _0: 0, _1: 0 };
  const _bind$45 = moonbitlang$core$ref$$Ref$new$54$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$44, zoom: 1, time_scale: 1, mouse_movement: _bind$45 };
}
function Milky2018$selene$backend$$register_mouse_events(mouse, mouse_movement) {
  Milky2018$selene$backend$$canvas_backend.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$61$(Milky2018$selene$backend$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$32$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$63$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$60$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$60$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$60$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$60$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$61$(Milky2018$selene$backend$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$32$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$63$(event));
    const _bind$44 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$60$(mouse_event);
    switch (_bind$44) {
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$61$(Milky2018$selene$backend$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$32$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$63$(event));
    const _bind$44 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$60$(mouse_event);
    switch (_bind$44) {
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$61$(Milky2018$selene$backend$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$31$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$63$(event));
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$61$(Milky2018$selene$backend$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$31$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$63$(event));
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
  const _bind$44 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$backend$$element_cache, png);
  if (_bind$44.$tag === 1) {
    const _Some = _bind$44;
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
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(context, rami3l$js$45$ffi$js$$Union7$from0$57$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from2$55$(pattern));
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
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$55$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, text, x, y, Option$None$15$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_color_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$55$(color));
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
    moonbitlang$core$builtin$$println$26$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
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
    const _bind$44 = Milky2018$selene$backend$$canvas_backend.mouse_movement.val;
    if (_bind$44 === undefined) {
      return;
    } else {
      const _Some = _bind$44;
      const _mouse_movement = _Some;
      _mouse_movement.movement = { _0: 0, _1: 0 };
      return;
    }
  });
  return () => {
  };
}
function Milky2018$selene$backend$$get_audio(path) {
  const _bind$44 = moonbitlang$core$builtin$$Map$get$19$(Milky2018$selene$backend$$audio_cache, path);
  if (_bind$44.$tag === 1) {
    const _Some = _bind$44;
    const _audio = _Some._0;
    return _audio;
  }
  const audio = Milky2018$selene$backend$$Audio$new(path);
  moonbitlang$core$builtin$$Map$set$19$(Milky2018$selene$backend$$audio_cache, path, audio);
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
function moonbitlang$core$builtin$$Hash$hash_combine$3$(_x_80, _x_81) {
  moonbitlang$core$builtin$$Hash$hash_combine$42$(_x_80, _x_81);
}
function Milky2018$selene$system$$timer_system(delta) {
  const _p$4569 = [];
  const _p$4570 = Milky2018$selene$system$$timers.length;
  let _tmp$2283 = 0;
  while (true) {
    const _p$4571 = _tmp$2283;
    if (_p$4571 < _p$4570) {
      const _p$4572 = Milky2018$selene$system$$timers[_p$4571];
      if (_p$4572.pausible) {
        moonbitlang$core$array$$Array$push$15$(_p$4569, _p$4572);
      }
      _tmp$2283 = _p$4571 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p$4569;
  const _len = _arr.length;
  let _tmp$2284 = 0;
  while (true) {
    const _i = _tmp$2284;
    if (_i < _len) {
      const timer = _arr[_i];
      if (timer.pausible) {
      }
      timer.rest = timer.rest - delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$2284 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$4571 = Milky2018$selene$system$$timers.length;
  let _tmp$2285 = 0;
  let _tmp$2286 = 0;
  while (true) {
    const _p$4572 = _tmp$2285;
    const _p$4573 = _tmp$2286;
    if (_p$4572 < _p$4571) {
      const _p$4574 = Milky2018$selene$system$$timers[_p$4572];
      if (_p$4574.rest > 0) {
        Milky2018$selene$system$$timers[_p$4573] = _p$4574;
        _tmp$2285 = _p$4572 + 1 | 0;
        _tmp$2286 = _p$4573 + 1 | 0;
        continue;
      }
      _tmp$2285 = _p$4572 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(Milky2018$selene$system$$timers, _p$4573);
      return;
    }
  }
}
function Milky2018$selene$system$$realtime_timer_system(delta) {
  const _p$4569 = [];
  const _p$4570 = Milky2018$selene$system$$timers.length;
  let _tmp$2283 = 0;
  while (true) {
    const _p$4571 = _tmp$2283;
    if (_p$4571 < _p$4570) {
      const _p$4572 = Milky2018$selene$system$$timers[_p$4571];
      if (!_p$4572.pausible) {
        moonbitlang$core$array$$Array$push$15$(_p$4569, _p$4572);
      }
      _tmp$2283 = _p$4571 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p$4569;
  const _len = _arr.length;
  let _tmp$2284 = 0;
  while (true) {
    const _i = _tmp$2284;
    if (_i < _len) {
      const timer = _arr[_i];
      if (timer.pausible) {
      }
      timer.rest = timer.rest - delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$2284 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$4571 = Milky2018$selene$system$$timers.length;
  let _tmp$2285 = 0;
  let _tmp$2286 = 0;
  while (true) {
    const _p$4572 = _tmp$2285;
    const _p$4573 = _tmp$2286;
    if (_p$4572 < _p$4571) {
      const _p$4574 = Milky2018$selene$system$$timers[_p$4572];
      if (_p$4574.rest > 0) {
        Milky2018$selene$system$$timers[_p$4573] = _p$4574;
        _tmp$2285 = _p$4572 + 1 | 0;
        _tmp$2286 = _p$4573 + 1 | 0;
        continue;
      }
      _tmp$2285 = _p$4572 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(Milky2018$selene$system$$timers, _p$4573);
      return;
    }
  }
}
function Milky2018$selene$system$$iter_entities() {
  return moonbitlang$core$set$$Set$iter$3$(Milky2018$selene$system$$all_entities);
}
function Milky2018$selene$system$$Entity$is_alive(e) {
  return moonbitlang$core$set$$Set$contains$3$(Milky2018$selene$system$$all_entities, e);
}
function Milky2018$selene$system$$Entity$new() {
  const entity = Milky2018$selene$system$$entity_generator.val;
  Milky2018$selene$system$$entity_generator.val = (Milky2018$selene$system$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$3$(Milky2018$selene$system$$all_entities, entity);
  return entity;
}
function Milky2018$selene$system$$defer_event(event) {
  moonbitlang$core$array$$Array$push$11$(Milky2018$selene$system$$deferred_events, event);
}
function Milky2018$selene$system$$Entity$destroy(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$remove$3$(Milky2018$selene$system$$all_entities, e);
  });
}
function Milky2018$selene$system$$deferred_event_system(_delta) {
  while (true) {
    const _bind$44 = moonbitlang$core$array$$Array$pop$11$(Milky2018$selene$system$$deferred_events);
    if (_bind$44 === undefined) {
      return;
    } else {
      const _Some = _bind$44;
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
  moonbitlang$core$array$$Array$push$40$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$17$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$39$(systems, { _0: system, _1: schedule, _2: system_name$2 });
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
  let _tmp$2283 = 0;
  while (true) {
    const _i = _tmp$2283;
    if (_i < _len) {
      const plugin = _arr[_i];
      plugin(self);
      _tmp$2283 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const startup = () => {
    const _arr$2 = self.systems;
    const _len$2 = _arr$2.length;
    let _tmp$2284 = 0;
    while (true) {
      const _i = _tmp$2284;
      if (_i < _len$2) {
        const system = _arr$2[_i];
        const _bind$44 = system._1;
        if (_bind$44.$tag === 0) {
          const _func = system._0;
          _func(0);
        }
        _tmp$2284 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const renders = [];
  const _arr$2 = self.systems;
  const _len$2 = _arr$2.length;
  let _tmp$2284 = 0;
  while (true) {
    const _i = _tmp$2284;
    if (_i < _len$2) {
      const system = _arr$2[_i];
      const _bind$44 = system._1;
      if (_bind$44.$tag === 2) {
        const _Render = _bind$44;
        const _pri = _Render._0;
        moonbitlang$core$array$$Array$push$23$(renders, { _0: system._0, _1: _pri });
      }
      _tmp$2284 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$sort_by_key$44$(renders, (system) => -system._1 | 0);
  const render_loop = (delta) => {
    const _len$3 = renders.length;
    let _tmp$2285 = 0;
    while (true) {
      const _i = _tmp$2285;
      if (_i < _len$3) {
        const render = renders[_i];
        const _func = render._0;
        _func(delta);
        _tmp$2285 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const game_loops = [];
  const _arr$3 = self.systems;
  const _len$3 = _arr$3.length;
  let _tmp$2285 = 0;
  while (true) {
    const _i = _tmp$2285;
    if (_i < _len$3) {
      const system = _arr$3[_i];
      const _bind$44 = system._1;
      if (_bind$44.$tag === 1) {
        moonbitlang$core$array$$Array$push$38$(game_loops, system._0);
      }
      _tmp$2285 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const game_loop = (delta) => {
    const _len$4 = game_loops.length;
    let _tmp$2286 = 0;
    while (true) {
      const _i = _tmp$2286;
      if (_i < _len$4) {
        const system = game_loops[_i];
        system(delta);
        _tmp$2286 = _i + 1 | 0;
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
function Milky2018$selene$camera$$camera_system(_delta) {
  const _bind$44 = Milky2018$selene$camera$$camera.attached_entity;
  if (_bind$44 === undefined) {
    return;
  } else {
    const _Some = _bind$44;
    const _e = _Some;
    const _bind$45 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
    if (_bind$45 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$45;
      const _pos = _Some$2;
      const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
      const _p$4569 = Milky2018$selene$backend$$canvas_backend.viewport_size;
      const _p$4570 = { _0: 1 / zoom, _1: 1 / zoom };
      const viewport_size = { _0: _p$4569._0 * _p$4570._0, _1: _p$4569._1 * _p$4570._1 };
      const _p$4571 = { _0: 0.5, _1: 0.5 };
      const _p$4572 = { _0: viewport_size._0 * _p$4571._0, _1: viewport_size._1 * _p$4571._1 };
      const _p$4573 = { _0: _pos._0 - _p$4572._0, _1: _pos._1 - _p$4572._1 };
      const _p$4574 = Milky2018$selene$camera$$camera.offset;
      const target_position = { _0: _p$4573._0 + _p$4574._0, _1: _p$4573._1 + _p$4574._1 };
      const new_x = Milky2018$selene$camera$$camera.follow_x ? Milky2018$selene$math$$Vec2D$op_get(target_position, 0) : Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0);
      const new_y = Milky2018$selene$camera$$camera.follow_y ? Milky2018$selene$math$$Vec2D$op_get(target_position, 1) : Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1);
      Milky2018$selene$camera$$camera.position = { _0: new_x, _1: new_y };
      const _bind$46 = Milky2018$selene$camera$$camera.limit_top;
      if (_bind$46.$tag === 1) {
        const _Some$3 = _bind$46;
        const _top = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) < _top) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _top };
        }
      }
      const _bind$47 = Milky2018$selene$camera$$camera.limit_bottom;
      if (_bind$47.$tag === 1) {
        const _Some$3 = _bind$47;
        const _bottom = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) > _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1)) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1) };
        }
      }
      const _bind$48 = Milky2018$selene$camera$$camera.limit_left;
      if (_bind$48.$tag === 1) {
        const _Some$3 = _bind$48;
        const _left = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0) < _left) {
          Milky2018$selene$camera$$camera.position = { _0: _left, _1: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) };
        }
      }
      const _bind$49 = Milky2018$selene$camera$$camera.limit_right;
      if (_bind$49.$tag === 1) {
        const _Some$3 = _bind$49;
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
function Milky2018$selene$ui$$Ui$new() {
  ({});
}
function Milky2018$selene$sprite$$Sprite$from_animation$46$inner(animation, zindex, offset) {
  const _bind$44 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(animation, 0);
  return { sprite_type: _bind$44, zindex: zindex, visible: true, offset: offset };
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
function Milky2018$selene$sprite$$Sprite$from_picture$46$inner(picture, zindex, offset) {
  const _bind$44 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(picture);
  return { sprite_type: _bind$44, zindex: zindex, visible: true, offset: offset };
}
function Milky2018$selene$sprite$$Sprite$from_picture(picture, zindex, offset$46$opt) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_picture$46$inner(picture, zindex, offset);
}
function Milky2018$selene$sprite$$Sprite$from_text$46$inner(text, zindex, offset) {
  const _bind$44 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(text);
  return { sprite_type: _bind$44, zindex: zindex, visible: true, offset: offset };
}
function Milky2018$selene$sprite$$Sprite$from_text(text, zindex, offset$46$opt) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_text$46$inner(text, zindex, offset);
}
function Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(color_rect, zindex, offset) {
  const _bind$44 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect(color_rect);
  return { sprite_type: _bind$44, zindex: zindex, visible: true, offset: offset };
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
function Milky2018$selene$sprite$$render_animation(animation, current_frame, pos, visible, delta) {
  const frame = moonbitlang$core$array$$Array$at$24$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
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
  const _p$4569 = moonbitlang$core$builtin$$Map$to_array$14$(Milky2018$selene$sprite$$sprites);
  const _p$4570 = [];
  const _p$4571 = _p$4569.length;
  let _tmp$2283 = 0;
  while (true) {
    const _p$4572 = _tmp$2283;
    if (_p$4572 < _p$4571) {
      const _p$4573 = _p$4569[_p$4572];
      if (Milky2018$selene$system$$Entity$is_alive(_p$4573._0)) {
        moonbitlang$core$array$$Array$push$25$(_p$4570, _p$4573);
      }
      _tmp$2283 = _p$4572 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$4570;
  moonbitlang$core$array$$Array$sort_by$25$(sprites, (sprite1, sprite2) => {
    if (sprite1._1.zindex < sprite2._1.zindex) {
      return -1;
    } else {
      if (sprite1._1.zindex > sprite2._1.zindex) {
        return 1;
      } else {
        const _bind$44 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, sprite1._0);
        if (_bind$44 === undefined) {
          return 0;
        } else {
          const _Some = _bind$44;
          const _pos1 = _Some;
          const _bind$45 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, sprite2._0);
          if (_bind$45 === undefined) {
            return 0;
          } else {
            const _Some$2 = _bind$45;
            const _pos2 = _Some$2;
            return Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) < Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? -1 : Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) > Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? 1 : 0;
          }
        }
      }
    }
  });
  const _len = sprites.length;
  let _tmp$2284 = 0;
  while (true) {
    const _i = _tmp$2284;
    if (_i < _len) {
      _L: {
        const sprite = sprites[_i];
        const e = sprite._0;
        const sprite$2 = sprite._1;
        const _bind$44 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$44 === undefined) {
          break _L;
        } else {
          const _Some = _bind$44;
          const _pos = _Some;
          const _bind$45 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$ui$$uis, e);
          let pos;
          if (_bind$45 === -1) {
            const _p$4572 = Milky2018$selene$camera$$camera.position;
            pos = { _0: _pos._0 - _p$4572._0, _1: _pos._1 - _p$4572._1 };
          } else {
            pos = _pos;
          }
          const _bind$46 = sprite$2.sprite_type;
          switch (_bind$46.$tag) {
            case 0: {
              const _Picture = _bind$46;
              const _picture = _Picture._0;
              if (sprite$2.visible) {
                const _p$4572 = sprite$2.offset;
                Milky2018$selene$sprite$$render_picture(_picture, { _0: pos._0 + _p$4572._0, _1: pos._1 + _p$4572._1 });
              }
              break;
            }
            case 1: {
              const _Animation = _bind$46;
              const _anime = _Animation._0;
              const _frame = _Animation._1;
              const _p$4572 = sprite$2.offset;
              const _tmp$2285 = { _0: pos._0 + _p$4572._0, _1: pos._1 + _p$4572._1 };
              const new_frame = Milky2018$selene$sprite$$render_animation(_anime, _frame, _tmp$2285, sprite$2.visible, delta);
              _Animation._1 = new_frame;
              break;
            }
            case 2: {
              const _Text = _bind$46;
              const _text = _Text._0;
              if (sprite$2.visible) {
                const _p$4573 = sprite$2.offset;
                Milky2018$selene$sprite$$render_text(_text, { _0: pos._0 + _p$4573._0, _1: pos._1 + _p$4573._1 });
              }
              break;
            }
            default: {
              const _ColorRect = _bind$46;
              const _color_rect = _ColorRect._0;
              if (sprite$2.visible) {
                const _p$4573 = sprite$2.offset;
                Milky2018$selene$sprite$$render_color_rect(_color_rect, { _0: pos._0 + _p$4573._0, _1: pos._1 + _p$4573._1 });
              }
            }
          }
        }
        break _L;
      }
      _tmp$2284 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$sprite$$Text$new$46$inner(content, color, font) {
  return { content: content, color: color, font: font };
}
function Milky2018$selene$sprite$$ColorRect$new(size, color) {
  return { size: size, color: color };
}
function Milky2018$selene$sprite$$Picture$new$46$inner(size, tile_path, transform, repeat) {
  return { size: size, tile_path: tile_path, transform: transform, repeat: repeat };
}
function Milky2018$selene$sprite$$Picture$new(size, tile_path, transform$46$opt, repeat$46$opt) {
  let transform;
  if (transform$46$opt === undefined) {
    transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  } else {
    const _Some = transform$46$opt;
    transform = _Some;
  }
  let repeat;
  if (repeat$46$opt === undefined) {
    repeat = 2;
  } else {
    const _Some = repeat$46$opt;
    repeat = _Some;
  }
  return Milky2018$selene$sprite$$Picture$new$46$inner(size, tile_path, transform, repeat);
}
function Milky2018$selene$sprite$$generate_animation() {
  const id = Milky2018$selene$sprite$$animation_generator.val;
  Milky2018$selene$sprite$$animation_generator.val = Milky2018$selene$sprite$$animation_generator.val + 1 | 0;
  return id;
}
function Milky2018$selene$sprite$$Animation$new$46$inner(frames, loop_, fps, transform) {
  const max_frame = frames.length;
  if (max_frame === 0) {
    moonbitlang$core$abort$$abort$20$("Animation must have at least one frame");
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
function Milky2018$selene$sprite$$frames_from_atlas$46$inner(sprite_path, frame_count, width, height, offset, space_x) {
  const frames = [];
  let _tmp$2283 = 0;
  while (true) {
    const i = _tmp$2283;
    if (i < frame_count) {
      const x = Milky2018$selene$math$$Vec2D$op_get(offset, 0) + (i + 0) * (width + space_x);
      moonbitlang$core$array$$Array$push$24$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: Milky2018$selene$math$$Vec2D$update(offset, 0, x) });
      _tmp$2283 = i + 1 | 0;
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
    const _bind$44 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$sprite$$sprites, entity);
    if (_bind$44 === undefined) {
      break _L;
    } else {
      const _Some = _bind$44;
      const _x = _Some;
      const _x$2 = _x.sprite_type;
      if (_x$2.$tag === 1) {
        const _Animation = _x$2;
        const _current_anime = _Animation._0;
        const _current_frame = _Animation._1;
        const _zindex = _x.zindex;
        const _visible = _x.visible;
        const _offset = _x.offset;
        const _p$4569 = animation.loop_;
        const loop_$2 = loop_ === -1 ? _p$4569 : loop_;
        const rate$2 = moonbitlang$core$option$$Option$unwrap_or$53$(rate, animation.fps);
        const _p$4570 = animation.transform;
        let transform$2;
        if (transform === undefined) {
          transform$2 = _p$4570;
        } else {
          const _p$4571 = transform;
          transform$2 = _p$4571;
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
  const _bind$44 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$sprite$$sprites, entity);
  if (_bind$44 === undefined) {
    return true;
  } else {
    const _Some = _bind$44;
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
  const _bind$44 = moonbitlang$core$set$$Set$new$46$inner$3$(8);
  const _bind$45 = [];
  const _bind$46 = { position: position, size: size };
  return { position: position, size: size, children: _bind$45, depth: depth, bounding_box: _bind$46, entities: _bind$44 };
}
function Milky2018$selene$collision$$QuadTree$is_smallest_size(self) {
  return Milky2018$selene$math$$Vec2D$op_get(self.size, 0) <= 64 || Milky2018$selene$math$$Vec2D$op_get(self.size, 1) <= 64;
}
function Milky2018$selene$collision$$QuadTree$insert(self, entity, box) {
  if (!Milky2018$selene$math$$Rect$intersects(self.bounding_box, box)) {
    return undefined;
  }
  if (Milky2018$selene$collision$$QuadTree$is_smallest_size(self)) {
    moonbitlang$core$set$$Set$add$3$(self.entities, entity);
    return undefined;
  }
  const _p$4569 = self.children;
  if (_p$4569.length === 0) {
    const half_size = { _0: Milky2018$selene$math$$Vec2D$op_get(self.size, 0) * 0.5, _1: Milky2018$selene$math$$Vec2D$op_get(self.size, 1) * 0.5 };
    const _self = self.children;
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    const _p$4570 = self.position;
    const _p$4571 = { _0: Milky2018$selene$math$$Vec2D$op_get(half_size, 0), _1: 0 };
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$4570._0 + _p$4571._0, _1: _p$4570._1 + _p$4571._1 }, half_size, self.depth + 1 | 0));
    const _p$4572 = self.position;
    const _p$4573 = { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(half_size, 1) };
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$4572._0 + _p$4573._0, _1: _p$4572._1 + _p$4573._1 }, half_size, self.depth + 1 | 0));
    const _p$4574 = self.position;
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$4574._0 + half_size._0, _1: _p$4574._1 + half_size._1 }, half_size, self.depth + 1 | 0));
  }
  const _arr = self.children;
  const _len = _arr.length;
  let _tmp$2283 = 0;
  while (true) {
    const _i = _tmp$2283;
    if (_i < _len) {
      const child = _arr[_i];
      Milky2018$selene$collision$$QuadTree$insert(child, entity, box);
      _tmp$2283 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$quadtree_query(area) {
  const trees = { val: moonbitlang$core$list$$List$of$6$([Milky2018$selene$collision$$quadtree_root.val]) };
  let results = moonbitlang$core$set$$Set$new$46$inner$3$(8);
  while (true) {
    const _bind$44 = trees.val;
    if (_bind$44.$tag === 1) {
      const _More = _bind$44;
      const _hd = _More._0;
      const _rest = _More._1;
      trees.val = _rest;
      if (!Milky2018$selene$math$$Rect$intersects(_hd.bounding_box, area)) {
        continue;
      }
      const _bind$45 = _hd.children;
      if (_bind$45.length === 0) {
        results = moonbitlang$core$set$$Set$union$3$(results, _hd.entities);
      } else {
        const _p$4569 = _hd.children;
        const _p$4570 = _p$4569.length;
        let _tmp$2283 = 0;
        while (true) {
          const _p$4571 = _tmp$2283;
          if (_p$4571 < _p$4570) {
            const _p$4572 = _p$4569[_p$4571];
            const _p$4573 = trees.val;
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$10$(_p$4572, _p$4573);
            _tmp$2283 = _p$4571 + 1 | 0;
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
  const _bind$44 = moonbitlang$core$builtin$$Map$iter2$2$(Milky2018$selene$collision$$shapes);
  _bind$44((e, shape) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$45 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$ui$$uis, e);
      if (_bind$45 === -1) {
        const _bind$46 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$46 === undefined) {
          return 1;
        } else {
          const _Some = _bind$46;
          const _position = _Some;
          const _Rect = shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$47 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const _bind$48 = { _0: _width, _1: _height };
          const box = { position: _bind$47, size: _bind$48 };
          moonbitlang$core$array$$Array$push$41$(boxes, { _0: e, _1: box });
          const _p$4569 = left_limit.val;
          const _p$4570 = Milky2018$selene$math$$Vec2D$op_get(_bind$47, 0);
          left_limit.val = _p$4569 > _p$4570 ? _p$4570 : _p$4569;
          const _p$4571 = right_limit.val;
          const _p$4572 = Milky2018$selene$math$$Vec2D$op_get(_bind$47, 0) + Milky2018$selene$math$$Vec2D$op_get(_bind$48, 0);
          right_limit.val = _p$4571 > _p$4572 ? _p$4571 : _p$4572;
          const _p$4573 = top_limit.val;
          const _p$4574 = Milky2018$selene$math$$Vec2D$op_get(_bind$47, 1);
          top_limit.val = _p$4573 > _p$4574 ? _p$4574 : _p$4573;
          const _p$4575 = bottom_limit.val;
          const _p$4576 = Milky2018$selene$math$$Vec2D$op_get(_bind$47, 1) + Milky2018$selene$math$$Vec2D$op_get(_bind$48, 1);
          bottom_limit.val = _p$4575 > _p$4576 ? _p$4575 : _p$4576;
        }
      } else {
        return 1;
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp$2283 = _foreach_result;
  switch (_tmp$2283.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp$2283;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp$2283;
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
  let _tmp$2284 = 0;
  while (true) {
    const _i = _tmp$2284;
    if (_i < _len) {
      const box = boxes[_i];
      Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root.val, box._0, box._1);
      _tmp$2284 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$pickable_click_system(_delta) {
  const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
  const _bind$44 = { _0: 1, _1: 1 };
  const _p$4569 = Milky2018$selene$inputs$$mouse.pos;
  const _p$4570 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$45 = { _0: _p$4569._0 * _p$4570._0, _1: _p$4569._1 * _p$4570._1 };
  const box = { position: _bind$45, size: _bind$44 };
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
  const _bind$46 = moonbitlang$core$builtin$$Map$iter2$5$(Milky2018$selene$ui$$uis);
  _bind$46((e, _ui) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$47 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$pickables, e);
      if (_bind$47 === undefined) {
        return 1;
      } else {
        const _Some = _bind$47;
        const _pick = _Some;
        const _bind$48 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$48 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$48;
          const _position = _Some$2;
          const _bind$49 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
          if (_bind$49 === undefined) {
            return 1;
          } else {
            const _Some$3 = _bind$49;
            const _shape = _Some$3;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$50 = { _0: _width, _1: _height };
            const _bind$51 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const area_box = { position: _bind$51, size: _bind$50 };
            if (!Milky2018$selene$math$$Rect$intersects(box, area_box)) {
              return 1;
            }
            const _arr = [0, 1, 2];
            const _len = _arr.length;
            let _tmp$2283 = 0;
            while (true) {
              const _i = _tmp$2283;
              if (_i < _len) {
                const button = _arr[_i];
                if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
                  const _arr$2 = _pick.on_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2284 = 0;
                  while (true) {
                    const _i$2 = _tmp$2284;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2284 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_released(button)) {
                  const _arr$2 = _pick.on_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2284 = 0;
                  while (true) {
                    const _i$2 = _tmp$2284;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2284 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
                  const _arr$2 = _pick.on_just_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2284 = 0;
                  while (true) {
                    const _i$2 = _tmp$2284;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2284 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
                  const _arr$2 = _pick.on_just_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2284 = 0;
                  while (true) {
                    const _i$2 = _tmp$2284;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2284 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                _tmp$2283 = _i + 1 | 0;
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
  const _tmp$2283 = _foreach_result;
  switch (_tmp$2283.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp$2283;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp$2283;
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
  const _bind$47 = moonbitlang$core$set$$Set$iter$3$(entities);
  _bind$47((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$48 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$pickables, e);
      if (_bind$48 === undefined) {
        return 1;
      } else {
        const _Some = _bind$48;
        const _pick = _Some;
        const _bind$49 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$49 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$49;
          const _position = _Some$2;
          const _bind$50 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
          if (_bind$50 === undefined) {
            return 1;
          } else {
            const _Some$3 = _bind$50;
            const _shape = _Some$3;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$51 = { _0: _width, _1: _height };
            const _bind$52 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const area_box = { position: _bind$52, size: _bind$51 };
            if (!Milky2018$selene$math$$Rect$intersects(Milky2018$selene$math$$Rect$shift(box, Milky2018$selene$camera$$camera.position), area_box)) {
              return 1;
            }
            const _arr = [0, 1, 2];
            const _len = _arr.length;
            let _tmp$2284 = 0;
            while (true) {
              const _i = _tmp$2284;
              if (_i < _len) {
                const button = _arr[_i];
                if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
                  const _arr$2 = _pick.on_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2285 = 0;
                  while (true) {
                    const _i$2 = _tmp$2285;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2285 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_released(button)) {
                  const _arr$2 = _pick.on_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2285 = 0;
                  while (true) {
                    const _i$2 = _tmp$2285;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2285 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
                  const _arr$2 = _pick.on_just_pressed_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2285 = 0;
                  while (true) {
                    const _i$2 = _tmp$2285;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2285 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
                  const _arr$2 = _pick.on_just_released_callbacks;
                  const _len$2 = _arr$2.length;
                  let _tmp$2285 = 0;
                  while (true) {
                    const _i$2 = _tmp$2285;
                    if (_i$2 < _len$2) {
                      const callback = _arr$2[_i$2];
                      callback(button);
                      _tmp$2285 = _i$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                _tmp$2284 = _i + 1 | 0;
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
  const _tmp$2284 = _foreach_result$2;
  switch (_tmp$2284.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break$2 = _tmp$2284;
      _break$2._0;
      return;
    }
    case 2: {
      const _return$2 = _tmp$2284;
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
  const _p$4569 = a.position;
  const _p$4570 = a.size;
  const _p$4571 = 0.5;
  const _p$4572 = { _0: _p$4570._0 * _p$4571, _1: _p$4570._1 * _p$4571 };
  const a_center = { _0: _p$4569._0 + _p$4572._0, _1: _p$4569._1 + _p$4572._1 };
  const _p$4573 = b.position;
  const _p$4574 = b.size;
  const _p$4575 = 0.5;
  const _p$4576 = { _0: _p$4574._0 * _p$4575, _1: _p$4574._1 * _p$4575 };
  const b_center = { _0: _p$4573._0 + _p$4576._0, _1: _p$4573._1 + _p$4576._1 };
  const _p$4577 = a.size;
  const _p$4578 = 0.5;
  const a_half = { _0: _p$4577._0 * _p$4578, _1: _p$4577._1 * _p$4578 };
  const _p$4579 = b.size;
  const _p$4580 = 0.5;
  const b_half = { _0: _p$4579._0 * _p$4580, _1: _p$4579._1 * _p$4580 };
  const delta = { _0: b_center._0 - a_center._0, _1: b_center._1 - a_center._1 };
  const intersect = { _0: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 0)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 0) + Milky2018$selene$math$$Vec2D$op_get(a_half, 0)), _1: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 1)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 1) + Milky2018$selene$math$$Vec2D$op_get(a_half, 1)) };
  return Milky2018$selene$math$$Vec2D$op_get(intersect, 0) < Milky2018$selene$math$$Vec2D$op_get(intersect, 1) && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 0) > 0 ? { _0: -Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 } : { _0: Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 }) : Milky2018$selene$math$$Vec2D$op_get(intersect, 1) > 0 && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 1) > 0 ? { _0: 0, _1: -Milky2018$selene$math$$Vec2D$op_get(intersect, 1) } : { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(intersect, 1) }) : { _0: 0, _1: 0 };
}
function Milky2018$selene$collision$$add_collision_info(entity, target, direction) {
  const _bind$44 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$44.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$30$(0));
  }
  moonbitlang$core$array$$Array$push$30$(moonbitlang$core$option$$Option$unwrap$35$(moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, speed, axis) {
  const pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  const size = { _0: Milky2018$selene$math$$Vec2D$op_get(object.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.size, 1) };
  return speed >= 0 ? { position: pos, size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + speed) } : { position: Milky2018$selene$math$$Vec2D$update(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + speed), size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - speed) };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$43$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, Milky2018$selene$math$$Vec2D$op_get(velocity, axis), axis);
  const new_pos = { val: { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) } };
  new_pos.val = Milky2018$selene$math$$Vec2D$update(new_pos.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const new_velocity = { val: velocity };
  const entities = Milky2018$selene$collision$$quadtree_query(ray_collision);
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$17$ };
  const _bind$44 = moonbitlang$core$set$$Set$iter$3$(entities);
  _bind$44((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      if (moonbitlang$core$builtin$$op_notequal$3$(e, entity)) {
        const _bind$45 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
        if (_bind$45 === undefined) {
          return 1;
        } else {
          const _Some = _bind$45;
          const _shape = _Some;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$46 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
          if (_bind$46 === undefined) {
            return 1;
          } else {
            const _Some$2 = _bind$46;
            const _pos = _Some$2;
            const _bind$47 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, e);
            if (_bind$47 === undefined) {
              return 1;
            } else {
              const _Some$3 = _bind$47;
              const _collision_layer = _Some$3;
              if (Milky2018$selene$collision$$CollisionMask$contains(mask, _collision_layer)) {
                const _bind$48 = { _0: _width, _1: _height };
                const _bind$49 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
                const collision_box = { position: _bind$49, size: _bind$48 };
                if (Milky2018$selene$math$$Rect$intersects(object, collision_box)) {
                  const movement = Milky2018$selene$collision$$aabb_resolve(object, collision_box);
                  const _p$4569 = new_pos.val;
                  new_pos.val = { _0: _p$4569._0 + movement._0, _1: _p$4569._1 + movement._1 };
                  const dir = Milky2018$selene$math$$Vec2D$update({ _0: 0, _1: 0 }, axis, Milky2018$selene$math$$Vec2D$op_get(movement, axis) > 0 ? 1 : -1);
                  Milky2018$selene$collision$$add_collision_info(entity, e, dir);
                  _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$17$({ _0: new_pos.val, _1: movement });
                  return 0;
                }
                if (Milky2018$selene$math$$Rect$intersects(ray_collision, collision_box)) {
                  let dir = { _0: 0, _1: 0 };
                  if (Milky2018$selene$math$$Vec2D$op_get(new_velocity.val, axis) > 0) {
                    const _tmp$2283 = new_pos.val;
                    const _p$4569 = Milky2018$selene$math$$Vec2D$op_get(_bind$49, axis) - Milky2018$selene$math$$Vec2D$op_get(object.size, axis);
                    const _p$4570 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                    new_pos.val = Milky2018$selene$math$$Vec2D$update(_tmp$2283, axis, _p$4569 > _p$4570 ? _p$4569 : _p$4570);
                    new_velocity.val = Milky2018$selene$math$$Vec2D$update(new_velocity.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                    dir = Milky2018$selene$math$$Vec2D$update(dir, axis, 1);
                  } else {
                    if (Milky2018$selene$math$$Vec2D$op_get(new_velocity.val, axis) < 0) {
                      const _tmp$2283 = new_pos.val;
                      const _p$4569 = Milky2018$selene$math$$Vec2D$op_get(_bind$49, axis) + Milky2018$selene$math$$Vec2D$op_get(_bind$48, axis);
                      const _p$4570 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                      new_pos.val = Milky2018$selene$math$$Vec2D$update(_tmp$2283, axis, _p$4569 > _p$4570 ? _p$4570 : _p$4569);
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
  const _tmp$2283 = _foreach_result.val;
  switch (_tmp$2283.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp$2283;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp$2283;
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
  const _bind$44 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
  if (_bind$44 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$44;
    const _pos = _Some;
    const _bind$45 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
    if (_bind$45 === undefined) {
      return $panic();
    } else {
      const _Some$2 = _bind$45;
      const _shape = _Some$2;
      const _Rect = _shape;
      const _x = _Rect._0;
      const _width = _x._0;
      const _height = _x._1;
      const _offset = _Rect._1;
      const _bind$46 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
      const _bind$47 = { _0: _width, _1: _height };
      const box = { position: _bind$46, size: _bind$47 };
      const new_x = Milky2018$selene$collision$$move_axis(e, box, velocity, 0, collider.mask);
      const _bind$48 = new_x._0;
      const object_x = { position: _bind$48, size: _bind$47 };
      const new_y = Milky2018$selene$collision$$move_axis(e, object_x, new_x._1, 1, collider.mask);
      const _p$4569 = new_y._0;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, { _0: _p$4569._0 - _offset._0, _1: _p$4569._1 - _offset._1 });
      return new_y._1;
    }
  }
}
function Milky2018$selene$collision$$move_without_collide(e, velocity) {
  const _bind$44 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
  if (_bind$44 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$44;
    const _pos = _Some;
    const new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(_pos, 0) + Milky2018$selene$math$$Vec2D$op_get(velocity, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_pos, 1) + Milky2018$selene$math$$Vec2D$op_get(velocity, 1) };
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, new_pos);
    return;
  }
}
function Milky2018$selene$collision$$move_system(delta) {
  moonbitlang$core$builtin$$Map$clear$8$(Milky2018$selene$collision$$collision_infos);
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
  const _bind$44 = moonbitlang$core$builtin$$Map$iter2$7$(Milky2018$selene$velocity$$velocities);
  _bind$44((e, vel) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      _L: {
        _L$2: {
          const _bind$45 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$colliders, e);
          if (_bind$45 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$45;
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
  const _tmp$2283 = _foreach_result;
  switch (_tmp$2283.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp$2283;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp$2283;
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
  return moonbitlang$core$option$$Option$unwrap_or_default$35$(moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity));
}
function Milky2018$selene$collision$$area_collide_system(_delta) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$ };
  const _bind$44 = Milky2018$selene$system$$iter_entities();
  _bind$44((e) => {
    const _bind$45 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$areas, e);
    if (_bind$45 === undefined) {
      return 1;
    } else {
      const _Some = _bind$45;
      const _area = _Some;
      const _bind$46 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
      if (_bind$46 === undefined) {
        $panic();
      } else {
        const _Some$2 = _bind$46;
        const _position = _Some$2;
        const _bind$47 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
        if (_bind$47 === undefined) {
          return 1;
        } else {
          const _Some$3 = _bind$47;
          const _shape = _Some$3;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$48 = { _0: _width, _1: _height };
          const _bind$49 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const box = { position: _bind$49, size: _bind$48 };
          const new_contains = moonbitlang$core$set$$Set$new$46$inner$3$(8);
          const entities = Milky2018$selene$collision$$quadtree_query(box);
          let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
          const _bind$50 = moonbitlang$core$set$$Set$iter$3$(entities);
          _bind$50((entity) => {
            if (Milky2018$selene$system$$Entity$is_alive(entity)) {
              const _bind$51 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, entity);
              if (_bind$51 === undefined) {
                return 1;
              } else {
                const _Some$4 = _bind$51;
                const _other_layer = _Some$4;
                const _bind$52 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, entity);
                if (_bind$52 === undefined) {
                  return 1;
                } else {
                  const _Some$5 = _bind$52;
                  const _other_shape = _Some$5;
                  const _Rect$2 = _other_shape;
                  const _x$2 = _Rect$2._0;
                  const _other_width = _x$2._0;
                  const _other_height = _x$2._1;
                  const _other_offset = _Rect$2._1;
                  const _bind$53 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, entity);
                  if (_bind$53 === undefined) {
                    $panic();
                  } else {
                    const _Some$6 = _bind$53;
                    const _other_position = _Some$6;
                    const _bind$54 = { _0: _other_width, _1: _other_height };
                    const _bind$55 = { _0: _other_position._0 + _other_offset._0, _1: _other_position._1 + _other_offset._1 };
                    const other_box = { position: _bind$55, size: _bind$54 };
                    if (Milky2018$selene$math$$Rect$intersects(box, other_box)) {
                      if (Milky2018$selene$collision$$CollisionMask$contains(_area.mask, _other_layer)) {
                        moonbitlang$core$set$$Set$add$3$(new_contains, entity);
                        if (moonbitlang$core$set$$Set$contains$3$(_area.contains, entity)) {
                          return 1;
                        }
                        const _arr = _area.on_enter_callbacks;
                        const _len = _arr.length;
                        let _tmp$2283 = 0;
                        while (true) {
                          const _i = _tmp$2283;
                          if (_i < _len) {
                            const callback = _arr[_i];
                            callback(entity);
                            _tmp$2283 = _i + 1 | 0;
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
          const _tmp$2283 = _foreach_result$2;
          switch (_tmp$2283.$tag) {
            case 0: {
              break;
            }
            case 1: {
              const _break = _tmp$2283;
              _break._0;
              break;
            }
            case 2: {
              const _return = _tmp$2283;
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
          const _bind$51 = moonbitlang$core$set$$Set$iter$3$(_area.contains);
          _bind$51((entity) => {
            if (moonbitlang$core$set$$Set$contains$3$(new_contains, entity)) {
              return 1;
            }
            const _arr = _area.on_exit_callbacks;
            const _len = _arr.length;
            let _tmp$2284 = 0;
            while (true) {
              const _i = _tmp$2284;
              if (_i < _len) {
                const callback = _arr[_i];
                callback(entity);
                _tmp$2284 = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            return 1;
          });
          const _tmp$2284 = _foreach_result$3;
          switch (_tmp$2284.$tag) {
            case 0: {
              break;
            }
            case 1: {
              const _break$2 = _tmp$2284;
              _break$2._0;
              break;
            }
            case 2: {
              const _return$2 = _tmp$2284;
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
  const _tmp$2283 = _foreach_result.val;
  switch (_tmp$2283.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp$2283;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp$2283;
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
const Milky2018$selene$plugins$$default_plugin$46$constr$47$2671 = new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0);
function Milky2018$selene$plugins$$default_plugin(app) {
  const _self = app.systems;
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$inputs$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$inputs$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: Milky2018$selene$plugins$$default_plugin$46$constr$47$2671, _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
  moonbitlang$core$array$$Array$push$39$(_self, { _0: Milky2018$selene$system$$realtime_timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Realtime Timer System" });
}
function moonbitlang$core$json$$FromJson$from_json$50$(_x_61, _x_62) {
  let _de_tiles_65 = Option$None$18$;
  let _de_name_64 = undefined;
  let _de_collider_63 = -1;
  if (_x_61.$tag === 6) {
    const _Object = _x_61;
    const __map = _Object._0;
    const _bind$44 = moonbitlang$core$builtin$$Map$get$18$(__map, "name");
    if (_bind$44 === undefined) {
    } else {
      const _Some = _bind$44;
      const __v = _Some;
      const _p$4569 = "name";
      const _bind$45 = moonbitlang$core$json$$FromJson$from_json$26$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_62, _p$4569));
      let _tmp$2283;
      if (_bind$45.$tag === 1) {
        const _ok = _bind$45;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$45;
      }
      _de_name_64 = _tmp$2283;
    }
    const _bind$45 = moonbitlang$core$builtin$$Map$get$18$(__map, "tiles");
    if (_bind$45 === undefined) {
    } else {
      const _Some = _bind$45;
      const __v = _Some;
      const _p$4569 = "tiles";
      const _bind$46 = moonbitlang$core$json$$FromJson$from_json$51$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_62, _p$4569));
      let _tmp$2283;
      if (_bind$46.$tag === 1) {
        const _ok = _bind$46;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$46;
      }
      _de_tiles_65 = new Option$Some$18$(_tmp$2283);
    }
    const _bind$46 = moonbitlang$core$builtin$$Map$get$18$(__map, "collider");
    if (_bind$46 === undefined) {
    } else {
      const _Some = _bind$46;
      const __v = _Some;
      const _p$4569 = "collider";
      const _bind$47 = moonbitlang$core$json$$FromJson$from_json$47$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_62, _p$4569));
      let _tmp$2283;
      if (_bind$47.$tag === 1) {
        const _ok = _bind$47;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$47;
      }
      _de_collider_63 = _tmp$2283;
    }
  } else {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Expected object to deserialize TileLayer" }));
  }
  const _bind$44 = _de_tiles_65;
  let _de_tiles_65$2;
  if (_bind$44.$tag === 1) {
    const _Some = _bind$44;
    _de_tiles_65$2 = _Some._0;
  } else {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Missing field tiles" }));
  }
  const _bind$45 = _de_name_64;
  let _de_name_64$2;
  if (_bind$45 === undefined) {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Missing field name" }));
  } else {
    const _Some = _bind$45;
    _de_name_64$2 = _Some;
  }
  const _bind$46 = _de_collider_63;
  let _de_collider_63$2;
  if (_bind$46 === -1) {
    return new Result$Err$19$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_62, _1: "Missing field collider" }));
  } else {
    _de_collider_63$2 = _bind$46;
  }
  return new Result$Ok$19$({ name: _de_name_64$2, tiles: _de_tiles_65$2, collider: _de_collider_63$2 });
}
function moonbitlang$core$json$$FromJson$from_json$48$(_x_36, _x_37) {
  let _de_tile_size_41 = undefined;
  let _de_map_width_40 = undefined;
  let _de_map_height_39 = undefined;
  let _de_layers_38 = Option$None$20$;
  if (_x_36.$tag === 6) {
    const _Object = _x_36;
    const __map = _Object._0;
    const _bind$44 = moonbitlang$core$builtin$$Map$get$18$(__map, "tileSize");
    if (_bind$44 === undefined) {
    } else {
      const _Some = _bind$44;
      const __v = _Some;
      const _p$4569 = "tileSize";
      const _bind$45 = moonbitlang$core$json$$FromJson$from_json$17$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$4569));
      let _tmp$2283;
      if (_bind$45.$tag === 1) {
        const _ok = _bind$45;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$45;
      }
      _de_tile_size_41 = _tmp$2283;
    }
    const _bind$45 = moonbitlang$core$builtin$$Map$get$18$(__map, "mapWidth");
    if (_bind$45 === undefined) {
    } else {
      const _Some = _bind$45;
      const __v = _Some;
      const _p$4569 = "mapWidth";
      const _bind$46 = moonbitlang$core$json$$FromJson$from_json$17$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$4569));
      let _tmp$2283;
      if (_bind$46.$tag === 1) {
        const _ok = _bind$46;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$46;
      }
      _de_map_width_40 = _tmp$2283;
    }
    const _bind$46 = moonbitlang$core$builtin$$Map$get$18$(__map, "mapHeight");
    if (_bind$46 === undefined) {
    } else {
      const _Some = _bind$46;
      const __v = _Some;
      const _p$4569 = "mapHeight";
      const _bind$47 = moonbitlang$core$json$$FromJson$from_json$17$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$4569));
      let _tmp$2283;
      if (_bind$47.$tag === 1) {
        const _ok = _bind$47;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$47;
      }
      _de_map_height_39 = _tmp$2283;
    }
    const _bind$47 = moonbitlang$core$builtin$$Map$get$18$(__map, "layers");
    if (_bind$47 === undefined) {
    } else {
      const _Some = _bind$47;
      const __v = _Some;
      const _p$4569 = "layers";
      const _bind$48 = moonbitlang$core$json$$FromJson$from_json$49$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_37, _p$4569));
      let _tmp$2283;
      if (_bind$48.$tag === 1) {
        const _ok = _bind$48;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$48;
      }
      _de_layers_38 = new Option$Some$20$(_tmp$2283);
    }
  } else {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Expected object to deserialize TileMap" }));
  }
  const _bind$44 = _de_tile_size_41;
  let _de_tile_size_41$2;
  if (_bind$44 === undefined) {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field tile_size" }));
  } else {
    const _Some = _bind$44;
    _de_tile_size_41$2 = _Some;
  }
  const _bind$45 = _de_map_width_40;
  let _de_map_width_40$2;
  if (_bind$45 === undefined) {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field map_width" }));
  } else {
    const _Some = _bind$45;
    _de_map_width_40$2 = _Some;
  }
  const _bind$46 = _de_map_height_39;
  let _de_map_height_39$2;
  if (_bind$46 === undefined) {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field map_height" }));
  } else {
    const _Some = _bind$46;
    _de_map_height_39$2 = _Some;
  }
  const _bind$47 = _de_layers_38;
  let _de_layers_38$2;
  if (_bind$47.$tag === 1) {
    const _Some = _bind$47;
    _de_layers_38$2 = _Some._0;
  } else {
    return new Result$Err$21$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_37, _1: "Missing field layers" }));
  }
  return new Result$Ok$21$({ tile_size: _de_tile_size_41$2, map_width: _de_map_width_40$2, map_height: _de_map_height_39$2, layers: _de_layers_38$2 });
}
function moonbitlang$core$json$$FromJson$from_json$52$(_x_16, _x_17) {
  let _de_y_20 = undefined;
  let _de_x_19 = undefined;
  let _de_id_18 = undefined;
  if (_x_16.$tag === 6) {
    const _Object = _x_16;
    const __map = _Object._0;
    const _bind$44 = moonbitlang$core$builtin$$Map$get$18$(__map, "id");
    if (_bind$44 === undefined) {
    } else {
      const _Some = _bind$44;
      const __v = _Some;
      const _p$4569 = "id";
      const _bind$45 = moonbitlang$core$json$$FromJson$from_json$26$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_17, _p$4569));
      let _tmp$2283;
      if (_bind$45.$tag === 1) {
        const _ok = _bind$45;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$45;
      }
      _de_id_18 = _tmp$2283;
    }
    const _bind$45 = moonbitlang$core$builtin$$Map$get$18$(__map, "x");
    if (_bind$45 === undefined) {
    } else {
      const _Some = _bind$45;
      const __v = _Some;
      const _p$4569 = "x";
      const _bind$46 = moonbitlang$core$json$$FromJson$from_json$17$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_17, _p$4569));
      let _tmp$2283;
      if (_bind$46.$tag === 1) {
        const _ok = _bind$46;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$46;
      }
      _de_x_19 = _tmp$2283;
    }
    const _bind$46 = moonbitlang$core$builtin$$Map$get$18$(__map, "y");
    if (_bind$46 === undefined) {
    } else {
      const _Some = _bind$46;
      const __v = _Some;
      const _p$4569 = "y";
      const _bind$47 = moonbitlang$core$json$$FromJson$from_json$17$(__v, new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(_x_17, _p$4569));
      let _tmp$2283;
      if (_bind$47.$tag === 1) {
        const _ok = _bind$47;
        _tmp$2283 = _ok._0;
      } else {
        return _bind$47;
      }
      _de_y_20 = _tmp$2283;
    }
  } else {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Expected object to deserialize Tile" }));
  }
  const _bind$44 = _de_y_20;
  let _de_y_20$2;
  if (_bind$44 === undefined) {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Missing field y" }));
  } else {
    const _Some = _bind$44;
    _de_y_20$2 = _Some;
  }
  const _bind$45 = _de_x_19;
  let _de_x_19$2;
  if (_bind$45 === undefined) {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Missing field x" }));
  } else {
    const _Some = _bind$45;
    _de_x_19$2 = _Some;
  }
  const _bind$46 = _de_id_18;
  let _de_id_18$2;
  if (_bind$46 === undefined) {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_17, _1: "Missing field id" }));
  } else {
    const _Some = _bind$46;
    _de_id_18$2 = _Some;
  }
  return new Result$Ok$22$({ id: _de_id_18$2, x: _de_x_19$2, y: _de_y_20$2 });
}
function Milky2018$selene$tilemap$$TileMap$from_json(json) {
  let _try_err;
  _L: {
    const _bind$44 = moonbitlang$core$json$$from_json$48$(json, undefined);
    if (_bind$44.$tag === 1) {
      const _ok = _bind$44;
      return _ok._0;
    } else {
      const _err = _bind$44;
      const _tmp$2283 = _err._0;
      _try_err = _tmp$2283;
      break _L;
    }
  }
  return $panic();
}
function nopublish$pixeladventure$$add_failed_box() {
  const timer_entity = Milky2018$selene$system$$Entity$new();
  const time_text = Milky2018$selene$sprite$$Sprite$from_text(nopublish$pixeladventure$$new_game_state.failed_box, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, timer_entity, time_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, timer_entity, { _0: 50, _1: 150 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, timer_entity, Milky2018$selene$ui$$Ui$new());
}
function nopublish$pixeladventure$$add_success_box() {
  const timer_entity = Milky2018$selene$system$$Entity$new();
  const time_text = Milky2018$selene$sprite$$Sprite$from_text(nopublish$pixeladventure$$new_game_state.success_box, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, timer_entity, time_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, timer_entity, { _0: 50, _1: 150 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, timer_entity, Milky2018$selene$ui$$Ui$new());
}
function nopublish$pixeladventure$$add_a_box(content, x, y) {
  const alert_entity = Milky2018$selene$system$$Entity$new();
  const alert_text = Milky2018$selene$sprite$$Sprite$from_text(content, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, alert_entity, alert_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, alert_entity, { _0: x, _1: y });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, alert_entity, Milky2018$selene$ui$$Ui$new());
}
function nopublish$pixeladventure$$add_alert_box() {
  const alert_entity = Milky2018$selene$system$$Entity$new();
  const alert_text = Milky2018$selene$sprite$$Sprite$from_text(nopublish$pixeladventure$$new_game_state.alert_box, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, alert_entity, alert_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, alert_entity, { _0: 55, _1: 120 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, alert_entity, Milky2018$selene$ui$$Ui$new());
}
const nopublish$pixeladventure$$add_background$46$constr$47$2806 = 2;
function nopublish$pixeladventure$$add_background(size) {
  const background = Milky2018$selene$system$$Entity$new();
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new(size, "assets/Background/gradient1.png", undefined, nopublish$pixeladventure$$add_background$46$constr$47$2806), 0, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, background, background_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, background, { _0: 0, _1: 0 });
}
function nopublish$pixeladventure$$add_bird(pos) {
  const entity = Milky2018$selene$system$$Entity$new();
  const bird_sprite = Milky2018$selene$sprite$$Sprite$from_animation(nopublish$pixeladventure$$bird_fly_animation, 10, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, bird_sprite);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, entity, { _0: 650, _1: 0 });
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 6, _1: 6 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, nopublish$pixeladventure$$enemy_collision_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new([nopublish$pixeladventure$$terrain_collision_layer]));
  moonbitlang$core$builtin$$Map$set$16$(nopublish$pixeladventure$$birds, entity, { direction: 1, is_hurt: false });
}
function nopublish$pixeladventure$$add_color_block(pos, color) {
  const sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 10, _1: 10 }, color), 2, undefined);
  const color_block = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, color_block, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, color_block, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, color_block, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 10, _1: 10 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, color_block, nopublish$pixeladventure$$terrain_collision_layer);
}
function nopublish$pixeladventure$$add_color_line(pos, color) {
  const sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 10, _1: 2 }, color), 1, undefined);
  const color_block = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, color_block, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, color_block, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, color_block, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 10, _1: 2 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, color_block, nopublish$pixeladventure$$terrain_collision_layer);
}
const nopublish$pixeladventure$$add_font$46$constr$47$2821 = 2;
function nopublish$pixeladventure$$add_font(x, y) {
  const background = Milky2018$selene$system$$Entity$new();
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new({ _0: 30, _1: 100 }, "assets/Background/ca2.png", undefined, nopublish$pixeladventure$$add_font$46$constr$47$2821), 0, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, background, background_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, background, { _0: x, _1: y });
}
const nopublish$pixeladventure$$add_font1$46$constr$47$2826 = 2;
function nopublish$pixeladventure$$add_font1(x, y) {
  const background = Milky2018$selene$system$$Entity$new();
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new({ _0: 30, _1: 100 }, "assets/Background/ca1.png", undefined, nopublish$pixeladventure$$add_font1$46$constr$47$2826), 0, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, background, background_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, background, { _0: x, _1: y });
}
function nopublish$pixeladventure$$add_font_back(color, x, y) {
  const block_entity = Milky2018$selene$system$$Entity$new();
  const block_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 350, _1: 40 }, color), 2, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, block_entity, block_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, block_entity, { _0: x + 0, _1: y + 0 });
}
function nopublish$pixeladventure$$add_font_back1(color, x, y) {
  const block_entity = Milky2018$selene$system$$Entity$new();
  const block_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 25, _1: 120 }, color), 2, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, block_entity, block_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, block_entity, { _0: x + 0, _1: y + 0 });
}
function nopublish$pixeladventure$$add_font_back2(color, x, y) {
  const block_entity = Milky2018$selene$system$$Entity$new();
  const block_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 350, _1: 20 }, color), 2, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, block_entity, block_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, block_entity, { _0: x + 0, _1: y + 0 });
}
function nopublish$pixeladventure$$add_font_back3(color, x, y) {
  const block_entity = Milky2018$selene$system$$Entity$new();
  const block_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 20, _1: 40 }, color), 2, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, block_entity, block_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, block_entity, { _0: x + 0, _1: y + 0 });
}
function nopublish$pixeladventure$$add_font_back4(color, x, y) {
  const block_entity = Milky2018$selene$system$$Entity$new();
  const block_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 20, _1: 60 }, color), 2, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, block_entity, block_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, block_entity, { _0: x + 0, _1: y + 0 });
}
const nopublish$pixeladventure$$generate_map$46$constr$47$2856 = new Option$Some$0$(0);
const nopublish$pixeladventure$$generate_map$46$constr$47$2857 = new Option$Some$0$(0);
function nopublish$pixeladventure$$generate_map() {
  const tilemap = Milky2018$selene$tilemap$$TileMap$from_json(nopublish$pixeladventure$$tilemap);
  const world_width = (tilemap.map_width + 0) * (tilemap.tile_size + 0);
  const world_height = (tilemap.map_height + 0) * (tilemap.tile_size + 0);
  Milky2018$selene$camera$$set_limits(nopublish$pixeladventure$$generate_map$46$constr$47$2856, new Option$Some$0$(world_height), nopublish$pixeladventure$$generate_map$46$constr$47$2857, new Option$Some$0$(world_width));
  nopublish$pixeladventure$$add_background({ _0: world_width, _1: world_height });
  nopublish$pixeladventure$$add_font(25, 200);
  nopublish$pixeladventure$$add_font1(55, 200);
  nopublish$pixeladventure$$add_font(85, 200);
  nopublish$pixeladventure$$add_font1(115, 200);
  nopublish$pixeladventure$$add_font(145, 200);
  nopublish$pixeladventure$$add_font1(175, 200);
  nopublish$pixeladventure$$add_font(205, 200);
  nopublish$pixeladventure$$add_font1(235, 200);
  nopublish$pixeladventure$$add_font(265, 200);
  nopublish$pixeladventure$$add_font1(295, 200);
  nopublish$pixeladventure$$add_font_back("#000000", 0, 300);
  nopublish$pixeladventure$$add_font_back("#000000", 0, 140);
  nopublish$pixeladventure$$add_font_back1("#000000", 0, 180);
  nopublish$pixeladventure$$add_font_back1("#000000", 325, 180);
  nopublish$pixeladventure$$add_font_back2("#d6be07ff", 0, 0);
  nopublish$pixeladventure$$add_font_back2("#d6be07ff", 0, 60);
  nopublish$pixeladventure$$add_font_back3("#d6be07ff", 0, 20);
  nopublish$pixeladventure$$add_font_back3("#d6be07ff", 330, 20);
  nopublish$pixeladventure$$add_font_back4("#d6be07ff", 0, 80);
  nopublish$pixeladventure$$add_font_back4("#d6be07ff", 330, 80);
  nopublish$pixeladventure$$add_font_back4("#000000", 310, 80);
  nopublish$pixeladventure$$add_font_back4("#000000", 20, 80);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.a1_box, 25, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.d1_box, 55, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.f1_box, 85, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.h1_box, 115, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.g1_box, 145, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.i1_box, 175, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.b1_box, 205, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.j1_box, 235, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.c1_box, 265, 40);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.e1_box, 295, 40);
  nopublish$pixeladventure$$add_alert_box();
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.a_box, 35, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.b_box, 65, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.c_box, 95, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.d_box, 125, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.e_box, 155, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.f_box, 185, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.g_box, 215, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.h_box, 245, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.i_box, 275, 195);
  nopublish$pixeladventure$$add_a_box(nopublish$pixeladventure$$new_game_state.j_box, 305, 195);
  nopublish$pixeladventure$$add_color_block({ _0: 0, _1: 340 }, "#3300ffff");
  nopublish$pixeladventure$$add_color_block({ _0: 340, _1: 340 }, "#3300ffff");
  let _tmp$2283 = 0;
  while (true) {
    const i = _tmp$2283;
    if (i < 330) {
      nopublish$pixeladventure$$add_color_line({ _0: 10 + i, _1: 348 }, "#3300ffff");
      _tmp$2283 = i + 10;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2284 = 0;
  while (true) {
    const i = _tmp$2284;
    if (i < 340) {
      nopublish$pixeladventure$$add_color_line({ _0: 10 + i, _1: 340 }, "#3300ffff");
      _tmp$2284 = i + 10;
      continue;
    } else {
      break;
    }
  }
  nopublish$pixeladventure$$add_bird({ _0: 10, _1: 342 });
}
function nopublish$pixeladventure$$update_block_display(_delta) {
  if (nopublish$pixeladventure$$new_game_state.fi <= 305) {
    if (Milky2018$selene$inputs$$is_just_pressed(0) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 0) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/a.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 1;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(3) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 1) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/d.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 2;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(5) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 2) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/f.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 3;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(7) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 3) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/h.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 4;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(6) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 4) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/g.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 5;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(8) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 5) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/i.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 6;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(1) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 6) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/b.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 7;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(9) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 7) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/j.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 8;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(2) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 8) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/c.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 9;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
    if (Milky2018$selene$inputs$$is_just_pressed(4) && nopublish$pixeladventure$$new_game_state.mouse_load) {
      if (nopublish$pixeladventure$$new_game_state.click === 9) {
        Milky2018$selene$audio$$play_audio$46$inner("sounds/e.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.click = 10;
      } else {
        nopublish$pixeladventure$$add_failed_box();
        Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
        nopublish$pixeladventure$$new_game_state.mouse_load = false;
      }
    }
  }
  if (nopublish$pixeladventure$$new_game_state.click === 10) {
    nopublish$pixeladventure$$add_success_box();
    nopublish$pixeladventure$$new_game_state.mouse_load = false;
    Milky2018$selene$audio$$play_audio$46$inner("sounds/sucess.wav", 1, false);
  }
  if (nopublish$pixeladventure$$new_game_state.fi === 300 && nopublish$pixeladventure$$new_game_state.click !== 10 || (Milky2018$selene$inputs$$is_just_pressed(10) || (Milky2018$selene$inputs$$is_just_pressed(11) || (Milky2018$selene$inputs$$is_just_pressed(12) || (Milky2018$selene$inputs$$is_just_pressed(13) || (Milky2018$selene$inputs$$is_just_pressed(14) || (Milky2018$selene$inputs$$is_just_pressed(15) || (Milky2018$selene$inputs$$is_just_pressed(16) || (Milky2018$selene$inputs$$is_just_pressed(17) || (Milky2018$selene$inputs$$is_just_pressed(18) || (Milky2018$selene$inputs$$is_just_pressed(19) || (Milky2018$selene$inputs$$is_just_pressed(20) || (Milky2018$selene$inputs$$is_just_pressed(21) || (Milky2018$selene$inputs$$is_just_pressed(22) || (Milky2018$selene$inputs$$is_just_pressed(23) || (Milky2018$selene$inputs$$is_just_pressed(24) || Milky2018$selene$inputs$$is_just_pressed(25))))))))))))))))) {
    nopublish$pixeladventure$$add_failed_box();
    nopublish$pixeladventure$$new_game_state.mouse_load = false;
    Milky2018$selene$audio$$play_audio$46$inner("sounds/explosion.wav", 1, false);
    return;
  } else {
    return;
  }
}
function nopublish$pixeladventure$$add_color_line1(pos, color, x) {
  const sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 310 - nopublish$pixeladventure$$new_game_state.fi, _1: 2 }, color), 4, undefined);
  const color_block = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, color_block, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, color_block, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, color_block, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 310 - nopublish$pixeladventure$$new_game_state.fi, _1: 2 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, color_block, nopublish$pixeladventure$$terrain_collision_layer);
}
function nopublish$pixeladventure$$update_timer_display() {
  nopublish$pixeladventure$$new_game_state.timer_box.content = `Time: ${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$pixeladventure$$new_game_state.timer, 10)}`;
}
function nopublish$pixeladventure$$bird_ai_system(_discard_) {
  if (nopublish$pixeladventure$$new_game_state.gameStarted && nopublish$pixeladventure$$new_game_state.gameReStarted) {
    let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$16$;
    const _bind$44 = moonbitlang$core$builtin$$Map$iter2$16$(nopublish$pixeladventure$$birds);
    _bind$44((e, bird) => {
      nopublish$pixeladventure$$add_color_line1({ _0: 20, _1: 68 }, "#000000", nopublish$pixeladventure$$new_game_state.fi);
      if (Milky2018$selene$system$$Entity$is_alive(e)) {
        const _bind$45 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$velocity$$velocities, e);
        if (_bind$45 === undefined) {
          $panic();
        } else {
          if (Milky2018$selene$sprite$$is_animation_finished(e)) {
            Milky2018$selene$system$$Entity$destroy(e);
            return 1;
          }
          if (bird.is_hurt) {
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, e, { _0: 0, _1: 0 });
            moonbitlang$core$builtin$$Map$remove$10$(Milky2018$selene$collision$$collision_layers, e);
            const _bind$46 = bird.direction;
            if (_bind$46 === 0) {
              Milky2018$selene$sprite$$play_animation$46$inner(e, nopublish$pixeladventure$$bird_hit_animation, false, -1, Option$None$0$, Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0));
            } else {
              Milky2018$selene$sprite$$play_animation$46$inner(e, nopublish$pixeladventure$$bird_hit_animation, false, -1, Option$None$0$, Milky2018$selene$math$$Transform$flip_x(6));
            }
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, e, { _0: 0, _1: 0 });
            return 1;
          }
          const collision_infos = Milky2018$selene$collision$$get_collision_infos(e);
          const hit_wall = moonbitlang$core$builtin$$Iter$any$30$(moonbitlang$core$array$$Array$iter$30$(collision_infos), (info) => {
            _L: {
              if (Milky2018$selene$math$$Vec2D$op_get(info.direction, 0) > 0) {
                const _bind$46 = bird.direction;
                if (_bind$46 === 1) {
                  return true;
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            if (Milky2018$selene$math$$Vec2D$op_get(info.direction, 0) < 0) {
              const _bind$46 = bird.direction;
              let _tmp$2283;
              if (_bind$46 === 0) {
                _tmp$2283 = true;
              } else {
                _tmp$2283 = false;
              }
              return _tmp$2283;
            } else {
              return false;
            }
          });
          if (hit_wall) {
            nopublish$pixeladventure$$new_game_state.fi = nopublish$pixeladventure$$new_game_state.fi + 15;
            nopublish$pixeladventure$$add_color_line1({ _0: 20, _1: 68 }, "#09eae3ff", nopublish$pixeladventure$$new_game_state.fi);
            nopublish$pixeladventure$$new_game_state.x = nopublish$pixeladventure$$new_game_state.x + 10;
            nopublish$pixeladventure$$new_game_state.y = nopublish$pixeladventure$$new_game_state.y + 10;
            if (nopublish$pixeladventure$$new_game_state.timer > 0) {
              nopublish$pixeladventure$$new_game_state.timer = nopublish$pixeladventure$$new_game_state.timer - 1 | 0;
              nopublish$pixeladventure$$update_timer_display();
            }
            const _bind$46 = bird.direction;
            let _tmp$2283;
            if (_bind$46 === 0) {
              _tmp$2283 = 1;
            } else {
              _tmp$2283 = 0;
            }
            bird.direction = _tmp$2283;
          }
          const _bind$46 = bird.direction;
          if (_bind$46 === 0) {
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, e, { _0: -650, _1: 0 });
            Milky2018$selene$sprite$$play_animation$46$inner(e, nopublish$pixeladventure$$bird_fly_animation, false, -1, Option$None$0$, Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0));
          } else {
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, e, { _0: 650, _1: 0 });
            Milky2018$selene$sprite$$play_animation$46$inner(e, nopublish$pixeladventure$$bird_fly_animation, false, -1, Option$None$0$, Milky2018$selene$math$$Transform$flip_x(6));
          }
        }
      } else {
        return 1;
      }
      return 1;
    });
    const _tmp$2283 = _foreach_result;
    switch (_tmp$2283.$tag) {
      case 0: {
        return;
      }
      case 1: {
        const _break = _tmp$2283;
        _break._0;
        return;
      }
      case 2: {
        const _return = _tmp$2283;
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
  } else {
    return;
  }
}
function nopublish$pixeladventure$$game_start(_delta) {
  nopublish$pixeladventure$$generate_map();
}
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_zoom(Milky2018$selene$system$$App$with_image_smooth(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new(), 700), 700), false), 2), 30), Milky2018$selene$plugins$$default_plugin), nopublish$pixeladventure$$game_start, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), nopublish$pixeladventure$$bird_ai_system, undefined, undefined), nopublish$pixeladventure$$update_block_display, undefined, undefined));
})();
