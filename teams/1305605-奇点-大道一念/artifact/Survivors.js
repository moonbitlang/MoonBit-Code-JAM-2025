const $1L = { hi: 0, lo: 1 };
const $0L = { hi: 0, lo: 0 };
const $64$Milky2018$47$selene$47$system$46$Schedule$Startup = { $tag: 0 };
const $64$Milky2018$47$selene$47$system$46$Schedule$Update = { $tag: 1 };
function $64$Milky2018$47$selene$47$system$46$Schedule$Render(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$tag = 2;
const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
const Option$None$1$ = { $tag: 0 };
function Option$Some$1$(param0) {
  this._0 = param0;
}
Option$Some$1$.prototype.$tag = 1;
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
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
const moonbitlang$core$builtin$$int_to_string_js = (x, radix) => {
  return x.toString(radix);
};
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
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
const Option$None$4$ = { $tag: 0 };
function Option$Some$4$(param0) {
  this._0 = param0;
}
Option$Some$4$.prototype.$tag = 1;
const moonbitlang$core$builtin$$MyInt64$convert_to_double_u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {
  if (f._exports) return f._exports;
  return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
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
const moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const $4294967295L = { hi: 0, lo: -1 };
const $64$moonbitlang$47$core$47$list$46$List$Empty$5$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$list$46$List$More$5$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$5$.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54]);
const rami3l$js$45$ffi$js$$Value$undefined = () => undefined;
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
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
const Option$None$9$ = { $tag: 0 };
function Option$Some$9$(param0) {
  this._0 = param0;
}
Option$Some$9$.prototype.$tag = 1;
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
const Milky2018$selene$backend$$set_text_align = (ctx, value) => ctx.textAlign = value;;
const Milky2018$selene$backend$$set_text_baseline = (ctx, value) => ctx.textBaseline = value;;
const Milky2018$selene$backend$$load_font_async = (font, path) => {
   const ff = new FontFace(font, 'url(' + path + ')');
   ff.load().then(loadedFont => {
     document.fonts.add(loadedFont);
   })
 };
const Option$None$10$ = { $tag: 0 };
function Option$Some$10$(param0) {
  this._0 = param0;
}
Option$Some$10$.prototype.$tag = 1;
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
const Milky2018$selene$backend$$Audio$new = (path) => new Audio(path);
const Milky2018$selene$backend$$Audio$play = (self) => self.play();
const Milky2018$selene$backend$$Audio$set_volume = (self, volume) => self.volume = volume;
const Milky2018$selene$backend$$Audio$set_loop = (self, loop_) => self.loop = loop_;
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
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$11$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$11$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$11$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$11$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$11$.prototype.$tag = 4;
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
const Milky2018$selene$inputs$$all_codes$46$42$bind$47$2466 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const Milky2018$selene$inputs$$from_string$46$constr$47$2476 = 0;
const Milky2018$selene$inputs$$from_string$46$constr$47$2477 = 1;
const Milky2018$selene$inputs$$from_string$46$constr$47$2478 = 2;
const Milky2018$selene$inputs$$from_string$46$constr$47$2479 = 3;
const Milky2018$selene$inputs$$from_string$46$constr$47$2480 = 4;
const Milky2018$selene$inputs$$from_string$46$constr$47$2481 = 5;
const Milky2018$selene$inputs$$from_string$46$constr$47$2482 = 6;
const Milky2018$selene$inputs$$from_string$46$constr$47$2483 = 7;
const Milky2018$selene$inputs$$from_string$46$constr$47$2484 = 8;
const Milky2018$selene$inputs$$from_string$46$constr$47$2485 = 9;
const Milky2018$selene$inputs$$from_string$46$constr$47$2486 = 10;
const Milky2018$selene$inputs$$from_string$46$constr$47$2487 = 11;
const Milky2018$selene$inputs$$from_string$46$constr$47$2488 = 12;
const Milky2018$selene$inputs$$from_string$46$constr$47$2489 = 13;
const Milky2018$selene$inputs$$from_string$46$constr$47$2490 = 14;
const Milky2018$selene$inputs$$from_string$46$constr$47$2491 = 15;
const Milky2018$selene$inputs$$from_string$46$constr$47$2492 = 16;
const Milky2018$selene$inputs$$from_string$46$constr$47$2493 = 17;
const Milky2018$selene$inputs$$from_string$46$constr$47$2494 = 18;
const Milky2018$selene$inputs$$from_string$46$constr$47$2495 = 19;
const Milky2018$selene$inputs$$from_string$46$constr$47$2496 = 20;
const Milky2018$selene$inputs$$from_string$46$constr$47$2497 = 21;
const Milky2018$selene$inputs$$from_string$46$constr$47$2498 = 22;
const Milky2018$selene$inputs$$from_string$46$constr$47$2499 = 23;
const Milky2018$selene$inputs$$from_string$46$constr$47$2500 = 24;
const Milky2018$selene$inputs$$from_string$46$constr$47$2501 = 26;
const Milky2018$selene$inputs$$from_string$46$constr$47$2502 = 27;
const Milky2018$selene$inputs$$from_string$46$constr$47$2503 = 28;
const Milky2018$selene$inputs$$from_string$46$constr$47$2504 = 29;
const Milky2018$selene$inputs$$from_string$46$constr$47$2505 = 30;
const Milky2018$selene$inputs$$from_string$46$constr$47$2506 = 31;
const Milky2018$selene$inputs$$from_string$46$constr$47$2507 = 32;
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$collision$$collision_layer_generator = { val: 0 };
const Milky2018$selene$plugins$$default_plugin$46$constr$47$3272 = new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0);
const username$Survivors$$weaponTwoData = { learn: false, timer: 1.5, damage: 20, count: 1, speed: 1 };
const username$Survivors$$nextExp = [4, 5, 6, 7, 8, 10, 12, 14, 17, 21, 25, 30, 35, 45, 50, 55, 60, 65, 70, 75, 80];
const username$Survivors$$weaponThreeData = { learn: false, timer: 0, damage: 12 };
const username$Survivors$$weaponOneData = { entitys: [], size: 2, damage: 10, count: 0, speed: 1 };
const username$Survivors$$playerDieAnimation$46$constr$47$3275 = true;
const username$Survivors$$playerDieAnimation$46$constr$47$3276 = new Option$Some$0$(4);
const username$Survivors$$playerIdleAnimation$46$constr$47$3277 = true;
const username$Survivors$$playerIdleAnimation$46$constr$47$3278 = new Option$Some$0$(8);
const username$Survivors$$flower$46$constr$47$3279 = 2;
const username$Survivors$$playerRunAnimation$46$constr$47$3280 = true;
const username$Survivors$$playerRunAnimation$46$constr$47$3281 = new Option$Some$0$(18);
const username$Survivors$$enemyOneHurtAnimation$46$constr$47$3282 = true;
const username$Survivors$$enemyOneHurtAnimation$46$constr$47$3283 = new Option$Some$0$(1);
const username$Survivors$$enemyOneRunAnimation$46$constr$47$3284 = true;
const username$Survivors$$enemyOneRunAnimation$46$constr$47$3285 = new Option$Some$0$(12);
const username$Survivors$$enemyThreeHurtAnimation$46$constr$47$3286 = true;
const username$Survivors$$enemyThreeHurtAnimation$46$constr$47$3287 = new Option$Some$0$(1);
const username$Survivors$$enemyThreeRunAnimation$46$constr$47$3288 = true;
const username$Survivors$$enemyThreeRunAnimation$46$constr$47$3289 = new Option$Some$0$(12);
const username$Survivors$$enemyTwoHurtAnimation$46$constr$47$3290 = true;
const username$Survivors$$enemyTwoHurtAnimation$46$constr$47$3291 = new Option$Some$0$(1);
const username$Survivors$$enemyTwoRunAnimation$46$constr$47$3292 = true;
const username$Survivors$$enemyTwoRunAnimation$46$constr$47$3293 = new Option$Some$0$(12);
const username$Survivors$$spawners = [{ _0: 16, _1: 16 }, { _0: 944, _1: 16 }, { _0: 16, _1: 704 }, { _0: 944, _1: 704 }];
const username$Survivors$$enemyDie$46$constr$47$3341 = 2;
const username$Survivors$$enemyHurt$46$constr$47$3347 = false;
const username$Survivors$$weaponThreeAttack$46$constr$47$3365 = 2;
const username$Survivors$$addBackground$46$constr$47$3451 = 3;
const username$Survivors$$gameStart$46$constr$47$3475 = new Option$Some$0$(0);
const username$Survivors$$gameStart$46$constr$47$3476 = new Option$Some$0$(720);
const username$Survivors$$gameStart$46$constr$47$3477 = new Option$Some$0$(0);
const username$Survivors$$gameStart$46$constr$47$3478 = new Option$Some$0$(960);
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
const Milky2018$selene$inputs$$all_codes = moonbitlang$core$set$$Set$from_array$0$({ buf: Milky2018$selene$inputs$$all_codes$46$42$bind$47$2466, start: 0, end: 33 });
const Milky2018$selene$inputs$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$inputs$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$backend$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$13$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
const Milky2018$selene$system$$timers = moonbitlang$core$array$$Array$new$46$inner$15$(0);
const username$Survivors$$gameState = { playerEntity: Milky2018$selene$system$$Entity$new(), shadowEntity: Milky2018$selene$system$$Entity$new(), coverEntity: Milky2018$selene$system$$Entity$new(), health: 100, shield: 0, healthText: Milky2018$selene$sprite$$Text$new$46$inner("生命值：100", "white", "6px ThaleahFat"), expText: Milky2018$selene$sprite$$Text$new$46$inner("经验值：0", "white", "6px ThaleahFat"), expBarEntity: Milky2018$selene$system$$Entity$new(), expBar: Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 240, _1: 2 }, "gold"), 101, undefined), invincible: false, gameOver: false, timer: 0, timerInt: 0, expNow: 0, level: 0, speed: 150, damageFactor: 1, playing: false };
const username$Survivors$$allTypes = moonbitlang$core$builtin$$Map$new$46$inner$16$(8);
const username$Survivors$$wallCollisionLayer = Milky2018$selene$collision$$CollisionLayer$new();
const username$Survivors$$upgradeUI = { level_up_entity: Milky2018$selene$system$$Entity$new(), level_up_box: Milky2018$selene$sprite$$Text$new$46$inner("升级", "gold", "36px ThaleahFat"), upgradeButton1Entity: Milky2018$selene$system$$Entity$new(), upgradeButton2Entity: Milky2018$selene$system$$Entity$new(), upgradeButton3Entity: Milky2018$selene$system$$Entity$new(), powerup_icon1_entity: Milky2018$selene$system$$Entity$new(), powerup_icon2_entity: Milky2018$selene$system$$Entity$new(), powerup_icon3_entity: Milky2018$selene$system$$Entity$new(), powerup_bg1_entity: Milky2018$selene$system$$Entity$new(), powerup_bg2_entity: Milky2018$selene$system$$Entity$new(), powerup_bg3_entity: Milky2018$selene$system$$Entity$new(), availableUpgrades: [] };
const username$Survivors$$bullet_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const username$Survivors$$enemyCollisionLayer = Milky2018$selene$collision$$CollisionLayer$new();
const username$Survivors$$weaponOneDegreeMap = moonbitlang$core$builtin$$Map$new$46$inner$17$(8);
const username$Survivors$$enemies = moonbitlang$core$builtin$$Map$new$46$inner$18$(8);
const username$Survivors$$weaponOne = Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new$46$inner({ _0: 7, _1: 18 }, "Sprites/WeaponOne.png", Milky2018$selene$math$$Transform$scale(Milky2018$selene$math$$Transform$from_rotation_deg(0), username$Survivors$$weaponOneData.size, username$Survivors$$weaponOneData.size), 2), 9, undefined);
const Milky2018$selene$backend$$audio_cache = moonbitlang$core$builtin$$Map$new$46$inner$19$(8);
const username$Survivors$$expStonelayer = Milky2018$selene$collision$$CollisionLayer$new();
const username$Survivors$$playerCollisionLayer = Milky2018$selene$collision$$CollisionLayer$new();
const username$Survivors$$rand = moonbitlang$core$random$$Rand$new(Option$None$1$);
const Milky2018$selene$sprite$$animation_generator = moonbitlang$core$ref$$Ref$new$20$(0);
const username$Survivors$$playerIdleAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getIdleFrames("Sprites/Farmer 0.png", 18, 20), username$Survivors$$playerIdleAnimation$46$constr$47$3277, username$Survivors$$playerIdleAnimation$46$constr$47$3278, undefined);
const username$Survivors$$playerDieAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getDieFrames("Sprites/Farmer 0.png", 18, 20), username$Survivors$$playerDieAnimation$46$constr$47$3275, username$Survivors$$playerDieAnimation$46$constr$47$3276, undefined);
const username$Survivors$$flower = Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new({ _0: 18, _1: 18 }, "Sprites/Flower.png", undefined, username$Survivors$$flower$46$constr$47$3279), 1, undefined);
const username$Survivors$$enemyTwoRunAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getEnemyRunFrames("Sprites/Enemy 2.png", 18, 18), username$Survivors$$enemyTwoRunAnimation$46$constr$47$3292, username$Survivors$$enemyTwoRunAnimation$46$constr$47$3293, undefined);
const username$Survivors$$enemyTwoHurtAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getEnemyHurtFrames("Sprites/Enemy 2.png", 18, 18), username$Survivors$$enemyTwoHurtAnimation$46$constr$47$3290, username$Survivors$$enemyTwoHurtAnimation$46$constr$47$3291, undefined);
const username$Survivors$$enemyOneRunAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getEnemyRunFrames("Sprites/Enemy 1.png", 18, 18), username$Survivors$$enemyOneRunAnimation$46$constr$47$3284, username$Survivors$$enemyOneRunAnimation$46$constr$47$3285, undefined);
const username$Survivors$$enemyOneHurtAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getEnemyHurtFrames("Sprites/Enemy 1.png", 18, 18), username$Survivors$$enemyOneHurtAnimation$46$constr$47$3282, username$Survivors$$enemyOneHurtAnimation$46$constr$47$3283, undefined);
const username$Survivors$$enemyThreeRunAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getEnemyRunFrames("Sprites/Enemy 3.png", 18, 18), username$Survivors$$enemyThreeRunAnimation$46$constr$47$3288, username$Survivors$$enemyThreeRunAnimation$46$constr$47$3289, undefined);
const username$Survivors$$enemyThreeHurtAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getEnemyHurtFrames("Sprites/Enemy 3.png", 18, 18), username$Survivors$$enemyThreeHurtAnimation$46$constr$47$3286, username$Survivors$$enemyThreeHurtAnimation$46$constr$47$3287, undefined);
const username$Survivors$$enemiesData = [{ speed: 100, health: 15, hurt: false, runAnim: username$Survivors$$enemyOneRunAnimation, hurtAnim: username$Survivors$$enemyOneHurtAnimation }, { speed: 100, health: 25, hurt: false, runAnim: username$Survivors$$enemyTwoRunAnimation, hurtAnim: username$Survivors$$enemyTwoHurtAnimation }, { speed: 100, health: 35, hurt: false, runAnim: username$Survivors$$enemyThreeRunAnimation, hurtAnim: username$Survivors$$enemyThreeHurtAnimation }];
const username$Survivors$$playerRunAnimation = Milky2018$selene$sprite$$Animation$new(username$Survivors$$getRunFrames("Sprites/Farmer 0.png", 18, 20), username$Survivors$$playerRunAnimation$46$constr$47$3280, username$Survivors$$playerRunAnimation$46$constr$47$3281, undefined);
function moonbitlang$core$abort$$abort$21$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$6$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$22$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$23$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$op_lt$24$(self_, other) {
  return moonbitlang$core$builtin$$Compare$op_lt$25$(self_, other);
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$26$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$27$(self, ch) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$3$(x, y) {
  return !(x === y);
}
function moonbitlang$core$array$$Array$at$28$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
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
function moonbitlang$core$array$$Array$at$20$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$3$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$27$(self, str) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$3$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$3$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$0$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$0$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$32$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$32$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$35$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$35$(value, self);
}
function moonbitlang$core$builtin$$Compare$op_lt$25$(x, y) {
  return moonbitlang$core$builtin$$Compare$compare$24$(x, y) < 0;
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
function moonbitlang$core$builtin$$Hash$hash$36$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$3$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$37$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$0$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$38$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$32$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$39$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$35$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$40$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$41$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$27$, method_1: moonbitlang$core$builtin$$Logger$write_substring$27$, method_2: moonbitlang$core$builtin$$Logger$write_char$27$ });
  return logger.val;
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$20$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$uint64$$UInt64$to_int(self) {
  const _p = self;
  return _p.lo;
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
function moonbitlang$core$builtin$$Logger$write_substring$27$(self, str, start, len) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
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
function moonbitlang$core$option$$Option$unwrap$44$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$45$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$46$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$18$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$17$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$8$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$16$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$19$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$13$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$17$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$16$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$19$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$4$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$set_entry$7$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$17$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$14$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$5$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$16$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$18$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$12$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$19$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$4$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$8$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$13$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$push_away$7$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$17$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$17$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$17$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$14$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$5$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$5$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$5$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$16$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$16$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$16$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$18$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$12$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$12$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$12$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$19$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$19$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$19$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$4$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$4$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$4$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$8$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$13$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$7$(self);
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
        moonbitlang$core$builtin$$Map$push_away$7$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, _idx, entry);
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
function moonbitlang$core$builtin$$Map$set_with_hash$17$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$17$(self);
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
        moonbitlang$core$builtin$$Map$push_away$17$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$17$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$14$(self);
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
        moonbitlang$core$builtin$$Map$push_away$14$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, _idx, entry);
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
function moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$5$(self);
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
        moonbitlang$core$builtin$$Map$push_away$5$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$16$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$16$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$32$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$16$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$16$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$18$(self);
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
        moonbitlang$core$builtin$$Map$push_away$18$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$12$(self);
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
        moonbitlang$core$builtin$$Map$push_away$12$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$19$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$19$(self);
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
        moonbitlang$core$builtin$$Map$push_away$19$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$19$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$4$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$4$(self);
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
        moonbitlang$core$builtin$$Map$push_away$4$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$4$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$8$(self);
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
        moonbitlang$core$builtin$$Map$push_away$8$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$13$(self);
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
        moonbitlang$core$builtin$$Map$push_away$13$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$7$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$7$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$grow$17$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$17$(self, _key, _value, _hash);
      _tmp = _next;
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
      moonbitlang$core$builtin$$Map$set_with_hash$14$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$grow$5$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$5$(self, _key, _value, _hash);
      _tmp = _next;
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
      moonbitlang$core$builtin$$Map$set_with_hash$16$(self, _key, _value, _hash);
      _tmp = _next;
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
      moonbitlang$core$builtin$$Map$set_with_hash$18$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$12$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$12$(self, _key, _value, _hash);
      _tmp = _next;
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
      moonbitlang$core$builtin$$Map$set_with_hash$19$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$4$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$4$(self, _key, _value, _hash);
      _tmp = _next;
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
      moonbitlang$core$builtin$$Map$set_with_hash$8$(self, _key, _value, _hash);
      _tmp = _next;
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
      moonbitlang$core$builtin$$Map$set_with_hash$13$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$7$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$17$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$17$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$14$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$5$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$16$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$16$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$18$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$12$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$19$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$19$(self, key, value, moonbitlang$core$builtin$$Hash$hash$39$(key));
}
function moonbitlang$core$builtin$$Map$set$4$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$4$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$8$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$builtin$$Map$set$13$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, moonbitlang$core$builtin$$Hash$hash$39$(key));
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
function moonbitlang$core$builtin$$Map$get$9$(self, key) {
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
function moonbitlang$core$builtin$$Map$get$4$(self, key) {
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
function moonbitlang$core$builtin$$Map$get$19$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$39$(key);
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
function moonbitlang$core$builtin$$Map$get$8$(self, key) {
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
function moonbitlang$core$builtin$$Map$get$13$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$39$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$8 = _tmp$3[idx];
    if (_bind$8 === undefined) {
      return Option$None$4$;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$4$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$4$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$at$1$(self, key) {
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
      $panic();
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
function moonbitlang$core$builtin$$Map$at$17$(self, key) {
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
      $panic();
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
function moonbitlang$core$builtin$$Map$at$18$(self, key) {
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
      $panic();
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$47$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$48$(self, value, start, end) {
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
  moonbitlang$core$array$$FixedArray$fill$46$inner$47$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iterator$18$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$8 = curr_entry.val;
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iterator$7$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$8 = curr_entry.val;
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iterator$2$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$8 = curr_entry.val;
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iterator$5$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$8 = curr_entry.val;
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iterator$16$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$8 = curr_entry.val;
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iterator2$18$(self) {
  return moonbitlang$core$builtin$$Map$iterator$18$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$7$(self) {
  return moonbitlang$core$builtin$$Map$iterator$7$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$2$(self) {
  return moonbitlang$core$builtin$$Map$iterator$2$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$5$(self) {
  return moonbitlang$core$builtin$$Map$iterator$5$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$16$(self) {
  return moonbitlang$core$builtin$$Map$iterator$16$(self);
}
function moonbitlang$core$builtin$$Map$to_array$14$(self) {
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
function moonbitlang$core$builtin$$Iterator$next$0$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$3$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$49$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$50$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$51$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$52$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$53$(self) {
  const _func = self;
  return _func();
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
function moonbitlang$core$array$$Array$push$30$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$54$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$55$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$56$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$57$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$34$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$58$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$31$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$33$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$32$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$11$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$59$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$60$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$3$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iterator2$next$18$(self) {
  return moonbitlang$core$builtin$$Iterator$next$49$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$7$(self) {
  return moonbitlang$core$builtin$$Iterator$next$50$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$2$(self) {
  return moonbitlang$core$builtin$$Iterator$next$51$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$5$(self) {
  return moonbitlang$core$builtin$$Iterator$next$52$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$16$(self) {
  return moonbitlang$core$builtin$$Iterator$next$53$(self);
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
function moonbitlang$core$builtin$$Add$add$61$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$61$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$61$(self, other) {
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
function moonbitlang$core$builtin$$MyInt64$mod_u(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
    const _ahi = self.hi;
    const _alo = self.lo;
    const _bhi = other.hi;
    const _blo = other.lo;
    const _func = exports.rem_u;
    const lo = _func(_alo, _ahi, _blo, _bhi);
    const _func$2 = exports.get_high;
    const hi = _func$2();
    return { hi: hi, lo: lo };
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$MyInt64$lnot(self) {
  return { hi: ~self.hi, lo: ~self.lo };
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
function moonbitlang$core$builtin$$Add$add$24$(self, other) {
  return moonbitlang$core$builtin$$Add$add$61$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$24$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$61$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$24$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$61$(self, other);
}
function moonbitlang$core$builtin$$Mod$mod$24$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$mod_u(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$24$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$24$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$24$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$24$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$uint64$$UInt64$lnot(self) {
  return moonbitlang$core$builtin$$MyInt64$lnot(self);
}
function moonbitlang$core$builtin$$Shl$shl$24$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$24$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
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
  const _end858 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end858) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$26$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$array$$FixedArray$blit_to$46$inner$26$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$26$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$21$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$20$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$20$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$20$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$20$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$20$(self.length)}`);
    return;
  }
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$35$(input) {
  console.log(input);
}
function moonbitlang$core$builtin$$println$41$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$40$(input));
}
function moonbitlang$core$array$$ArrayView$at$6$(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$6$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$20$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$20$(index)}`);
  }
}
function moonbitlang$core$array$$Array$new$46$inner$11$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$15$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$60$(capacity) {
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
function moonbitlang$core$array$$Array$set$30$(self, index, value) {
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
function moonbitlang$core$array$$Array$set$34$(self, index, value) {
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
function moonbitlang$core$array$$Array$contains$62$(self, value) {
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
function moonbitlang$core$array$$Array$bubble_sort_by$30$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1309 = actual_start + 1 | 0;
  let _tmp = _start1309;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$30$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$30$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$30$(arr, j);
          moonbitlang$core$array$$Array$set$30$(arr, j, moonbitlang$core$array$$Array$at$30$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$30$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$bubble_sort_by$34$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1309 = actual_start + 1 | 0;
  let _tmp = _start1309;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$34$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$34$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$34$(arr, j);
          moonbitlang$core$array$$Array$set$34$(arr, j, moonbitlang$core$array$$Array$at$34$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$34$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1585(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const cmp = _env._1;
  const arr = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$30$(arr, a_pos), moonbitlang$core$array$$Array$at$30$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$30$(arr, a_pos);
    moonbitlang$core$array$$Array$set$30$(arr, a_pos, moonbitlang$core$array$$Array$at$30$(arr, b_pos));
    moonbitlang$core$array$$Array$set$30$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1586(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1585(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1585(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1585(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$30$(arr, start, end, cmp) {
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
    const _env = { _0: arr, _1: cmp, _2: swaps, _3: actual_start };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1586(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1586(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1586(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1586(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$30$(arr, i_pos);
        moonbitlang$core$array$$Array$set$30$(arr, i_pos, moonbitlang$core$array$$Array$at$30$(arr, j_pos));
        moonbitlang$core$array$$Array$set$30$(arr, j_pos, temp);
        _tmp = i + 1 | 0;
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1620(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const cmp = _env._1;
  const arr = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$34$(arr, a_pos), moonbitlang$core$array$$Array$at$34$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$34$(arr, a_pos);
    moonbitlang$core$array$$Array$set$34$(arr, a_pos, moonbitlang$core$array$$Array$at$34$(arr, b_pos));
    moonbitlang$core$array$$Array$set$34$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1621(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1620(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1620(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1620(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$34$(arr, start, end, cmp) {
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
    const _env = { _0: arr, _1: cmp, _2: swaps, _3: actual_start };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1621(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1621(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1621(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1621(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$34$(arr, i_pos);
        moonbitlang$core$array$$Array$set$34$(arr, i_pos, moonbitlang$core$array$$Array$at$34$(arr, j_pos));
        moonbitlang$core$array$$Array$set$34$(arr, j_pos, temp);
        _tmp = i + 1 | 0;
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
function moonbitlang$core$array$$Array$sift_down_by$30$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$30$(arr, child_pos), moonbitlang$core$array$$Array$at$30$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$30$(arr, current_pos), moonbitlang$core$array$$Array$at$30$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$30$(arr, current_pos);
      moonbitlang$core$array$$Array$set$30$(arr, current_pos, moonbitlang$core$array$$Array$at$30$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$30$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$sift_down_by$34$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$34$(arr, child_pos), moonbitlang$core$array$$Array$at$34$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$34$(arr, current_pos), moonbitlang$core$array$$Array$at$34$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$34$(arr, current_pos);
      moonbitlang$core$array$$Array$set$34$(arr, current_pos, moonbitlang$core$array$$Array$at$34$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$34$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$30$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$30$(arr, actual_start, actual_end, i, cmp);
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
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$30$(arr, actual_start);
      moonbitlang$core$array$$Array$set$30$(arr, actual_start, moonbitlang$core$array$$Array$at$30$(arr, last));
      moonbitlang$core$array$$Array$set$30$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$30$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$34$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$34$(arr, actual_start, actual_end, i, cmp);
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
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$34$(arr, actual_start);
      moonbitlang$core$array$$Array$set$34$(arr, actual_start, moonbitlang$core$array$$Array$at$34$(arr, last));
      moonbitlang$core$array$$Array$set$34$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$34$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$partition_by$30$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$30$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$30$(arr, pivot_index, moonbitlang$core$array$$Array$at$30$(arr, last_index));
  moonbitlang$core$array$$Array$set$30$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$30$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$30$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$30$(arr, i);
          moonbitlang$core$array$$Array$set$30$(arr, i, moonbitlang$core$array$$Array$at$30$(arr, j));
          moonbitlang$core$array$$Array$set$30$(arr, j, temp$2);
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
  const temp$2 = moonbitlang$core$array$$Array$at$30$(arr, i);
  moonbitlang$core$array$$Array$set$30$(arr, i, moonbitlang$core$array$$Array$at$30$(arr, last_index));
  moonbitlang$core$array$$Array$set$30$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$partition_by$34$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$34$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$34$(arr, pivot_index, moonbitlang$core$array$$Array$at$34$(arr, last_index));
  moonbitlang$core$array$$Array$set$34$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$34$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$34$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$34$(arr, i);
          moonbitlang$core$array$$Array$set$34$(arr, i, moonbitlang$core$array$$Array$at$34$(arr, j));
          moonbitlang$core$array$$Array$set$34$(arr, j, temp$2);
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
  const temp$2 = moonbitlang$core$array$$Array$at$34$(arr, i);
  moonbitlang$core$array$$Array$set$34$(arr, i, moonbitlang$core$array$$Array$at$34$(arr, last_index));
  moonbitlang$core$array$$Array$set$34$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$30$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1324 = actual_start + 1 | 0;
  let _tmp = _start1324;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$30$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$30$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$30$(arr, j);
          moonbitlang$core$array$$Array$set$30$(arr, j, moonbitlang$core$array$$Array$at$30$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$30$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$try_bubble_sort_by$34$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1324 = actual_start + 1 | 0;
  let _tmp = _start1324;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$34$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$34$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$34$(arr, j);
          moonbitlang$core$array$$Array$set$34$(arr, j, moonbitlang$core$array$$Array$at$34$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$34$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$quick_sort_by$30$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$30$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$30$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$Array$choose_pivot_by$30$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$30$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$Array$partition_by$30$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$9._0;
    const _partitioned = _bind$9._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$10 = pred$2;
    if (_bind$10 === undefined) {
    } else {
      const _Some = _bind$10;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$30$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$30$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$30$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$30$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$30$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$30$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$quick_sort_by$34$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$34$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$34$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$Array$choose_pivot_by$34$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$34$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$Array$partition_by$34$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$9._0;
    const _partitioned = _bind$9._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$10 = pred$2;
    if (_bind$10 === undefined) {
    } else {
      const _Some = _bind$10;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$34$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$34$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$34$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$34$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$34$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$34$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$63$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$30$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$34$(self, cmp) {
  moonbitlang$core$array$$Array$quick_sort_by$34$(self, 0, self.length, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$FixedArray$makei$64$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        $bound_check(array, i);
        array[i] = value(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$double$$Double$floor(_tmp) {
  return Math.floor(_tmp);
}
function moonbitlang$core$builtin$$Show$output$41$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$bytes$$BytesView$at(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.bytes;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$23$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$20$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$20$(index)}`);
  }
}
function moonbitlang$core$bytes$$Bytes$sub$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { bytes: self, start: start$2, end: end$2 } : moonbitlang$core$abort$$abort$22$("Invalid index for View");
}
function moonbitlang$core$bytes$$BytesView$to_uint_le(self) {
  const _p = moonbitlang$core$bytes$$BytesView$at(self, 0);
  const _p$2 = moonbitlang$core$bytes$$BytesView$at(self, 1);
  const _tmp = (_p >>> 0) + (_p$2 << 8 >>> 0) | 0;
  const _p$3 = moonbitlang$core$bytes$$BytesView$at(self, 2);
  const _tmp$2 = (_tmp >>> 0) + (_p$3 << 16 >>> 0) | 0;
  const _p$4 = moonbitlang$core$bytes$$BytesView$at(self, 3);
  return (_tmp$2 >>> 0) + (_p$4 << 24 >>> 0) | 0;
}
function moonbitlang$core$random$internal$random_source$$setup(seed, b32, counter) {
  $bound_check(b32, 0);
  b32[0] = 1634760805;
  $bound_check(b32, 1);
  b32[1] = 1634760805;
  $bound_check(b32, 2);
  b32[2] = 1634760805;
  $bound_check(b32, 3);
  b32[3] = 1634760805;
  $bound_check(b32, 4);
  b32[4] = 857760878;
  $bound_check(b32, 5);
  b32[5] = 857760878;
  $bound_check(b32, 6);
  b32[6] = 857760878;
  $bound_check(b32, 7);
  b32[7] = 857760878;
  $bound_check(b32, 8);
  b32[8] = 2036477234;
  $bound_check(b32, 9);
  b32[9] = 2036477234;
  $bound_check(b32, 10);
  b32[10] = 2036477234;
  $bound_check(b32, 11);
  b32[11] = 2036477234;
  $bound_check(b32, 12);
  b32[12] = 1797285236;
  $bound_check(b32, 13);
  b32[13] = 1797285236;
  $bound_check(b32, 14);
  b32[14] = 1797285236;
  $bound_check(b32, 15);
  b32[15] = 1797285236;
  $bound_check(seed, 0);
  $bound_check(b32, 16);
  b32[16] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 17);
  b32[17] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 18);
  b32[18] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 19);
  b32[19] = seed[0];
  $bound_check(seed, 1);
  $bound_check(b32, 20);
  b32[20] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 21);
  b32[21] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 22);
  b32[22] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 23);
  b32[23] = seed[1];
  $bound_check(seed, 2);
  $bound_check(b32, 24);
  b32[24] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 25);
  b32[25] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 26);
  b32[26] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 27);
  b32[27] = seed[2];
  $bound_check(seed, 3);
  $bound_check(b32, 28);
  b32[28] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 29);
  b32[29] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 30);
  b32[30] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 31);
  b32[31] = seed[3];
  $bound_check(seed, 4);
  $bound_check(b32, 32);
  b32[32] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 33);
  b32[33] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 34);
  b32[34] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 35);
  b32[35] = seed[4];
  $bound_check(seed, 5);
  $bound_check(b32, 36);
  b32[36] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 37);
  b32[37] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 38);
  b32[38] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 39);
  b32[39] = seed[5];
  $bound_check(seed, 6);
  $bound_check(b32, 40);
  b32[40] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 41);
  b32[41] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 42);
  b32[42] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 43);
  b32[43] = seed[6];
  $bound_check(seed, 7);
  $bound_check(b32, 44);
  b32[44] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 45);
  b32[45] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 46);
  b32[46] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 47);
  b32[47] = seed[7];
  $bound_check(b32, 48);
  b32[48] = counter;
  $bound_check(b32, 49);
  b32[49] = (counter >>> 0) + (1 >>> 0) | 0;
  $bound_check(b32, 50);
  b32[50] = (counter >>> 0) + (2 >>> 0) | 0;
  $bound_check(b32, 51);
  b32[51] = (counter >>> 0) + (3 >>> 0) | 0;
  $bound_check(b32, 52);
  b32[52] = 0;
  $bound_check(b32, 53);
  b32[53] = 0;
  $bound_check(b32, 54);
  b32[54] = 0;
  $bound_check(b32, 55);
  b32[55] = 0;
  $bound_check(b32, 56);
  b32[56] = 0;
  $bound_check(b32, 57);
  b32[57] = 0;
  $bound_check(b32, 58);
  b32[58] = 0;
  $bound_check(b32, 59);
  b32[59] = 0;
  $bound_check(b32, 60);
  b32[60] = 0;
  $bound_check(b32, 61);
  b32[61] = 0;
  $bound_check(b32, 62);
  b32[62] = 0;
  $bound_check(b32, 63);
  b32[63] = 0;
}
function moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35(t) {
  const a = t._0;
  const b = t._1;
  const c = t._2;
  const d = t._3;
  const a$2 = (a >>> 0) + (b >>> 0) | 0;
  const d$2 = d ^ a$2;
  const d$3 = d$2 << 16 | (d$2 >>> 16 | 0);
  const c$2 = (c >>> 0) + (d$3 >>> 0) | 0;
  const b$2 = b ^ c$2;
  const b$3 = b$2 << 12 | (b$2 >>> 20 | 0);
  const a$3 = (a$2 >>> 0) + (b$3 >>> 0) | 0;
  const d$4 = d$3 ^ a$3;
  const d$5 = d$4 << 8 | (d$4 >>> 24 | 0);
  const c$3 = (c$2 >>> 0) + (d$5 >>> 0) | 0;
  const b$4 = b$3 ^ c$3;
  const b$5 = b$4 << 7 | (b$4 >>> 25 | 0);
  return { _0: a$3, _1: b$5, _2: c$3, _3: d$5 };
}
function moonbitlang$core$random$internal$random_source$$chacha_block(seed, buf, counter) {
  moonbitlang$core$random$internal$random_source$$setup(seed, buf, counter);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 4) {
      $bound_check(buf, i);
      let b0 = buf[i];
      const _tmp$2 = 4 + i | 0;
      $bound_check(buf, _tmp$2);
      let b1 = buf[_tmp$2];
      const _tmp$3 = 8 + i | 0;
      $bound_check(buf, _tmp$3);
      let b2 = buf[_tmp$3];
      const _tmp$4 = 12 + i | 0;
      $bound_check(buf, _tmp$4);
      let b3 = buf[_tmp$4];
      const _tmp$5 = 16 + i | 0;
      $bound_check(buf, _tmp$5);
      let b4 = buf[_tmp$5];
      const _tmp$6 = 20 + i | 0;
      $bound_check(buf, _tmp$6);
      let b5 = buf[_tmp$6];
      const _tmp$7 = 24 + i | 0;
      $bound_check(buf, _tmp$7);
      let b6 = buf[_tmp$7];
      const _tmp$8 = 28 + i | 0;
      $bound_check(buf, _tmp$8);
      let b7 = buf[_tmp$8];
      const _tmp$9 = 32 + i | 0;
      $bound_check(buf, _tmp$9);
      let b8 = buf[_tmp$9];
      const _tmp$10 = 36 + i | 0;
      $bound_check(buf, _tmp$10);
      let b9 = buf[_tmp$10];
      const _tmp$11 = 40 + i | 0;
      $bound_check(buf, _tmp$11);
      let b10 = buf[_tmp$11];
      const _tmp$12 = 44 + i | 0;
      $bound_check(buf, _tmp$12);
      let b11 = buf[_tmp$12];
      const _tmp$13 = 48 + i | 0;
      $bound_check(buf, _tmp$13);
      let b12 = buf[_tmp$13];
      const _tmp$14 = 52 + i | 0;
      $bound_check(buf, _tmp$14);
      let b13 = buf[_tmp$14];
      const _tmp$15 = 56 + i | 0;
      $bound_check(buf, _tmp$15);
      let b14 = buf[_tmp$15];
      const _tmp$16 = 60 + i | 0;
      $bound_check(buf, _tmp$16);
      let b15 = buf[_tmp$16];
      let _tmp$17 = 0;
      while (true) {
        const round = _tmp$17;
        if (round < 4) {
          const tb1 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b0, _1: b4, _2: b8, _3: b12 });
          b0 = tb1._0;
          b4 = tb1._1;
          b8 = tb1._2;
          b12 = tb1._3;
          const tb2 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b1, _1: b5, _2: b9, _3: b13 });
          b1 = tb2._0;
          b5 = tb2._1;
          b9 = tb2._2;
          b13 = tb2._3;
          const tb3 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b2, _1: b6, _2: b10, _3: b14 });
          b2 = tb3._0;
          b6 = tb3._1;
          b10 = tb3._2;
          b14 = tb3._3;
          const tb4 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b3, _1: b7, _2: b11, _3: b15 });
          b3 = tb4._0;
          b7 = tb4._1;
          b11 = tb4._2;
          b15 = tb4._3;
          const tb5 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b0, _1: b5, _2: b10, _3: b15 });
          b0 = tb5._0;
          b5 = tb5._1;
          b10 = tb5._2;
          b15 = tb5._3;
          const tb6 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b1, _1: b6, _2: b11, _3: b12 });
          b1 = tb6._0;
          b6 = tb6._1;
          b11 = tb6._2;
          b12 = tb6._3;
          const tb7 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b2, _1: b7, _2: b8, _3: b13 });
          b2 = tb7._0;
          b7 = tb7._1;
          b8 = tb7._2;
          b13 = tb7._3;
          const tb8 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b3, _1: b4, _2: b9, _3: b14 });
          b3 = tb8._0;
          b4 = tb8._1;
          b9 = tb8._2;
          b14 = tb8._3;
          _tmp$17 = round + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      $bound_check(buf, i);
      buf[i] = b0;
      const _tmp$18 = 4 + i | 0;
      $bound_check(buf, _tmp$18);
      buf[_tmp$18] = b1;
      const _tmp$19 = 8 + i | 0;
      $bound_check(buf, _tmp$19);
      buf[_tmp$19] = b2;
      const _tmp$20 = 12 + i | 0;
      $bound_check(buf, _tmp$20);
      buf[_tmp$20] = b3;
      const _index_2 = 16 + i | 0;
      $bound_check(buf, _index_2);
      $bound_check(buf, _index_2);
      buf[_index_2] = (buf[_index_2] >>> 0) + (b4 >>> 0) | 0;
      const _index_4 = 20 + i | 0;
      $bound_check(buf, _index_4);
      $bound_check(buf, _index_4);
      buf[_index_4] = (buf[_index_4] >>> 0) + (b5 >>> 0) | 0;
      const _index_6 = 24 + i | 0;
      $bound_check(buf, _index_6);
      $bound_check(buf, _index_6);
      buf[_index_6] = (buf[_index_6] >>> 0) + (b6 >>> 0) | 0;
      const _index_8 = 28 + i | 0;
      $bound_check(buf, _index_8);
      $bound_check(buf, _index_8);
      buf[_index_8] = (buf[_index_8] >>> 0) + (b7 >>> 0) | 0;
      const _index_10 = 32 + i | 0;
      $bound_check(buf, _index_10);
      $bound_check(buf, _index_10);
      buf[_index_10] = (buf[_index_10] >>> 0) + (b8 >>> 0) | 0;
      const _index_12 = 36 + i | 0;
      $bound_check(buf, _index_12);
      $bound_check(buf, _index_12);
      buf[_index_12] = (buf[_index_12] >>> 0) + (b9 >>> 0) | 0;
      const _index_14 = 40 + i | 0;
      $bound_check(buf, _index_14);
      $bound_check(buf, _index_14);
      buf[_index_14] = (buf[_index_14] >>> 0) + (b10 >>> 0) | 0;
      const _index_16 = 44 + i | 0;
      $bound_check(buf, _index_16);
      $bound_check(buf, _index_16);
      buf[_index_16] = (buf[_index_16] >>> 0) + (b11 >>> 0) | 0;
      const _tmp$21 = 48 + i | 0;
      $bound_check(buf, _tmp$21);
      buf[_tmp$21] = b12;
      const _tmp$22 = 52 + i | 0;
      $bound_check(buf, _tmp$22);
      buf[_tmp$22] = b13;
      const _tmp$23 = 56 + i | 0;
      $bound_check(buf, _tmp$23);
      buf[_tmp$23] = b14;
      const _tmp$24 = 60 + i | 0;
      $bound_check(buf, _tmp$24);
      buf[_tmp$24] = b15;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed) {
  const seed$2 = moonbitlang$core$array$$FixedArray$makei$64$(8, (i) => moonbitlang$core$bytes$$BytesView$to_uint_le(moonbitlang$core$bytes$$Bytes$sub$46$inner(seed, Math.imul(i, 4) | 0, (Math.imul(i, 4) | 0) + 4 | 0)));
  const buffer = $make_array_len_and_init(64, 0);
  moonbitlang$core$random$internal$random_source$$chacha_block(seed$2, buffer, 0);
  const _bind$8 = 32;
  return { buffer: buffer, seed: seed$2, i: 0, n: _bind$8, counter: 0 };
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$next(self) {
  const i = self.i;
  if (i >>> 0 >= self.n >>> 0) {
    return undefined;
  }
  self.i = (i >>> 0) + (1 >>> 0) | 0;
  const index = i & 31;
  const _tmp = self.buffer;
  const _tmp$2 = Math.imul(index, 2) | 0;
  $bound_check(_tmp, _tmp$2);
  const lo = moonbitlang$core$uint$$UInt$to_uint64(_tmp[_tmp$2]);
  const _tmp$3 = self.buffer;
  const _tmp$4 = (Math.imul(index, 2) | 0) + 1 | 0;
  $bound_check(_tmp$3, _tmp$4);
  const hi = moonbitlang$core$uint$$UInt$to_uint64(_tmp$3[_tmp$4]);
  return moonbitlang$core$builtin$$BitOr$lor$24$(moonbitlang$core$builtin$$Shl$shl$24$(hi, 32), lo);
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self) {
  self.counter = (self.counter >>> 0) + (4 >>> 0) | 0;
  if (self.counter === 16) {
    moonbitlang$core$array$$FixedArray$blit_to$46$inner$26$(self.buffer, self.seed, 8, 56, 0);
    self.counter = 0;
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, self.buffer, self.counter);
  self.i = 0;
  self.n = self.counter === 12 ? 28 : 32;
}
function moonbitlang$core$list$$List$from_array$6$(arr) {
  let _tmp = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$5$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$5$(moonbitlang$core$array$$ArrayView$at$6$(arr, i), list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$math$$sin(_tmp) {
  return Math.sin(_tmp);
}
function moonbitlang$core$math$$cos(_tmp) {
  return Math.cos(_tmp);
}
function moonbitlang$core$option$$Option$unwrap_or$41$(self, default_) {
  if (self.$tag === 0) {
    return default_;
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$random$$Source$next$65$(self) {
  while (true) {
    const _bind$8 = moonbitlang$core$random$internal$random_source$$ChaCha8$next(self);
    if (_bind$8 === undefined) {
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      return _x;
    }
    moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self);
    continue;
  }
}
function moonbitlang$core$random$$chacha8$46$inner(seed) {
  return { self: moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed), method_0: moonbitlang$core$random$$Source$next$65$ };
}
function moonbitlang$core$random$$Rand$new(generator) {
  if (generator.$tag === 0) {
    return moonbitlang$core$random$$chacha8$46$inner($bytes_literal$0);
  } else {
    const _Some = generator;
    const _gen = _Some._0;
    return _gen;
  }
}
function moonbitlang$core$random$$umul128(a, b) {
  const aLo = moonbitlang$core$builtin$$BitAnd$land$24$(a, $4294967295L);
  const aHi = moonbitlang$core$builtin$$Shr$shr$24$(a, 32);
  const bLo = moonbitlang$core$builtin$$BitAnd$land$24$(b, $4294967295L);
  const bHi = moonbitlang$core$builtin$$Shr$shr$24$(b, 32);
  const x = moonbitlang$core$builtin$$Mul$mul$24$(aLo, bLo);
  const y = moonbitlang$core$builtin$$Add$add$24$(moonbitlang$core$builtin$$Mul$mul$24$(aHi, bLo), moonbitlang$core$builtin$$Shr$shr$24$(x, 32));
  const z = moonbitlang$core$builtin$$Add$add$24$(moonbitlang$core$builtin$$Mul$mul$24$(aLo, bHi), moonbitlang$core$builtin$$BitAnd$land$24$(y, $4294967295L));
  const w = moonbitlang$core$builtin$$Add$add$24$(moonbitlang$core$builtin$$Add$add$24$(moonbitlang$core$builtin$$Mul$mul$24$(aHi, bHi), moonbitlang$core$builtin$$Shr$shr$24$(y, 32)), moonbitlang$core$builtin$$Shr$shr$24$(z, 32));
  return { hi: w, lo: moonbitlang$core$builtin$$Mul$mul$24$(a, b) };
}
function moonbitlang$core$random$$Rand$uint64$46$inner(self, limit) {
  if (moonbitlang$core$builtin$$Eq$equal$24$(limit, $0L)) {
    const _p = self;
    return _p.method_0(_p.self);
  } else {
    if (moonbitlang$core$builtin$$Eq$equal$24$(moonbitlang$core$builtin$$BitAnd$land$24$(limit, moonbitlang$core$builtin$$Sub$sub$24$(limit, $1L)), $0L)) {
      const _p = self;
      return moonbitlang$core$builtin$$BitAnd$land$24$(_p.method_0(_p.self), moonbitlang$core$builtin$$Sub$sub$24$(limit, $1L));
    }
  }
  const _p = self;
  let r = moonbitlang$core$random$$umul128(_p.method_0(_p.self), limit);
  if (moonbitlang$core$builtin$$op_lt$24$(r.lo, limit)) {
    const thresh = moonbitlang$core$builtin$$Mod$mod$24$(moonbitlang$core$uint64$$UInt64$lnot(limit), limit);
    while (true) {
      if (moonbitlang$core$builtin$$op_lt$24$(r.lo, thresh)) {
        const _p$2 = self;
        r = moonbitlang$core$random$$umul128(_p$2.method_0(_p$2.self), limit);
        continue;
      } else {
        break;
      }
    }
  }
  return r.hi;
}
function moonbitlang$core$random$$Rand$uint$46$inner(self, limit) {
  if (limit === 0) {
    const _p = self;
    return moonbitlang$core$uint64$$UInt64$to_uint(_p.method_0(_p.self));
  }
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$random$$Rand$uint64$46$inner(self, moonbitlang$core$uint$$UInt$to_uint64(limit)));
}
function moonbitlang$core$random$$Rand$int$46$inner(self, limit) {
  if (limit === 0) {
    const _p = self;
    return moonbitlang$core$uint64$$UInt64$to_int(moonbitlang$core$builtin$$Shr$shr$24$(_p.method_0(_p.self), 33));
  } else {
    return moonbitlang$core$random$$Rand$uint$46$inner(self, limit);
  }
}
function moonbitlang$core$random$$Rand$double(self) {
  const _p = self;
  return moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$builtin$$Shr$shr$24$(moonbitlang$core$builtin$$Shl$shl$24$(_p.method_0(_p.self), 11), 11)) / moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$builtin$$Shl$shl$24$($1L, 53));
}
function moonbitlang$core$ref$$Ref$new$6$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$66$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$20$(x) {
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
function moonbitlang$core$set$$Set$new$46$inner$3$(capacity) {
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
function moonbitlang$core$set$$Set$add_entry_to_tail$3$(self, idx, entry) {
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
function moonbitlang$core$set$$Set$set_entry$3$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$push_away$3$(self, idx, entry) {
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
      moonbitlang$core$set$$Set$set_entry$3$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$3$(self, entry$2, idx$2);
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
function moonbitlang$core$set$$Set$add_with_hash$3$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$3$(self);
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
        moonbitlang$core$set$$Set$push_away$3$(self, idx, _curr_entry);
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
  moonbitlang$core$set$$Set$add_entry_to_tail$3$(self, _idx, entry);
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
function moonbitlang$core$set$$Set$grow$3$(self) {
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
      moonbitlang$core$set$$Set$add_with_hash$3$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$0$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$37$(key));
}
function moonbitlang$core$set$$Set$add$3$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$3$(self, key, moonbitlang$core$builtin$$Hash$hash$36$(key));
}
function moonbitlang$core$set$$Set$from_array$0$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$set$$Set$add$0$(m, e);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$3$(self, key) {
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
function moonbitlang$core$set$$Set$remove_entry$3$(self, entry) {
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
function moonbitlang$core$set$$Set$shift_back$3$(self, idx) {
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
          moonbitlang$core$set$$Set$set_entry$3$(self, _x, idx$2);
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
function moonbitlang$core$set$$Set$remove$3$(self, key) {
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
      break;
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
        moonbitlang$core$set$$Set$remove_entry$3$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$3$(self, idx);
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
  moonbitlang$core$array$$FixedArray$fill$46$inner$48$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$3$(self) {
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
function moonbitlang$core$set$$Set$iterator$0$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$8 = curr_entry.val;
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      curr_entry.val = _next;
      return _key;
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$iterator$3$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$8 = curr_entry.val;
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      curr_entry.val = _next;
      return _key;
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
function moonbitlang$core$set$$Set$union$3$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$3$(8);
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
      moonbitlang$core$set$$Set$add$3$(m, _p$4);
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
      moonbitlang$core$set$$Set$add$3$(m, _p$4);
      _tmp$2 = _p$5;
      continue;
    }
  }
  return m;
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
function Milky2018$selene$math$$Vec2D$distance_to(this_, other) {
  return Math.sqrt((this_._0 - other._0) * (this_._0 - other._0) + (this_._1 - other._1) * (this_._1 - other._1));
}
function Milky2018$selene$math$$Vec2D$normalize(this_) {
  const mag = Math.sqrt(this_._0 * this_._0 + this_._1 * this_._1);
  return mag > 0 ? { _0: this_._0 / mag, _1: this_._1 / mag } : { _0: 0, _1: 0 };
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
function Milky2018$selene$math$$Transform$from_rotation_rad(rad) {
  const cos_r = moonbitlang$core$math$$cos(rad);
  const sin_r = moonbitlang$core$math$$sin(rad);
  return { a: cos_r, b: sin_r, c: -sin_r, d: cos_r, tx: 0, ty: 0 };
}
function Milky2018$selene$math$$Transform$from_rotation_deg(deg) {
  return Milky2018$selene$math$$Transform$from_rotation_rad(deg * 3.1415926535897931 / 180);
}
function Milky2018$selene$math$$Transform$multiply(self, other) {
  return { a: self.a * other.a + self.c * other.b, b: self.b * other.a + self.d * other.b, c: self.a * other.c + self.c * other.d, d: self.b * other.c + self.d * other.d, tx: self.a * other.tx + self.c * other.ty + self.tx, ty: self.b * other.tx + self.d * other.ty + self.ty };
}
function Milky2018$selene$math$$Transform$scale(self, sx, sy) {
  return moonbitlang$core$builtin$$Mul$mul$67$(Milky2018$selene$math$$Transform$from_scale(sx, sy), self);
}
function Milky2018$selene$math$$Transform$flip_x(width) {
  return moonbitlang$core$builtin$$Mul$mul$67$(Milky2018$selene$math$$Transform$from_translation(width, 0), Milky2018$selene$math$$Transform$from_scale(-1, 1));
}
function moonbitlang$core$builtin$$Mul$mul$67$(self, other) {
  return Milky2018$selene$math$$Transform$multiply(self, other);
}
function Milky2018$selene$math$$Rect$intersects(a, b) {
  return Milky2018$selene$math$$Vec2D$op_get(a.position, 0) < Milky2018$selene$math$$Vec2D$op_get(b.position, 0) + Milky2018$selene$math$$Vec2D$op_get(b.size, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 0) + Milky2018$selene$math$$Vec2D$op_get(a.size, 0) > Milky2018$selene$math$$Vec2D$op_get(b.position, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 1) < Milky2018$selene$math$$Vec2D$op_get(b.position, 1) + Milky2018$selene$math$$Vec2D$op_get(b.size, 1) && Milky2018$selene$math$$Vec2D$op_get(a.position, 1) + Milky2018$selene$math$$Vec2D$op_get(a.size, 1) > Milky2018$selene$math$$Vec2D$op_get(b.position, 1)));
}
function Milky2018$selene$math$$Rect$shift(self, dir) {
  const _p = self.position;
  const _tmp = { _0: _p._0 + dir._0, _1: _p._1 + dir._1 };
  return { position: _tmp, size: self.size };
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
      return Milky2018$selene$inputs$$from_string$46$constr$47$2476;
    }
    case "KeyB": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2477;
    }
    case "KeyC": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2478;
    }
    case "KeyD": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2479;
    }
    case "KeyE": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2480;
    }
    case "KeyF": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2481;
    }
    case "KeyG": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2482;
    }
    case "KeyH": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2483;
    }
    case "KeyI": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2484;
    }
    case "KeyJ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2485;
    }
    case "KeyK": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2486;
    }
    case "KeyL": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2487;
    }
    case "KeyM": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2488;
    }
    case "KeyN": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2489;
    }
    case "KeyO": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2490;
    }
    case "KeyP": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2491;
    }
    case "KeyQ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2492;
    }
    case "KeyR": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2493;
    }
    case "KeyS": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2494;
    }
    case "KeyT": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2495;
    }
    case "KeyU": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2496;
    }
    case "KeyV": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2497;
    }
    case "KeyW": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2498;
    }
    case "KeyX": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2499;
    }
    case "KeyY": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2500;
    }
    case "ArrowUp": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2501;
    }
    case "ArrowDown": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2502;
    }
    case "ArrowLeft": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2503;
    }
    case "ArrowRight": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2504;
    }
    case "Space": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2505;
    }
    case "Enter": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2506;
    }
    case "Escape": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$2507;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$inputs$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$inputs$$pressed_keys, code);
}
function Milky2018$selene$inputs$$key_vector(up, down, left, right) {
  const x = Milky2018$selene$inputs$$is_pressed(left) ? -1 : Milky2018$selene$inputs$$is_pressed(right) ? 1 : 0;
  const y = Milky2018$selene$inputs$$is_pressed(up) ? -1 : Milky2018$selene$inputs$$is_pressed(down) ? 1 : 0;
  return { _0: x, _1: y };
}
function Milky2018$selene$inputs$$advanced_key_system(_delta) {
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$just_pressed_keys);
  const _it = moonbitlang$core$set$$Set$iterator$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$pressed_keys, Milky2018$selene$inputs$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$0$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_pressed_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$just_release_keys);
  const _it$2 = moonbitlang$core$set$$Set$iterator$0$(moonbitlang$core$set$$Set$union$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$all_codes, Milky2018$selene$inputs$$pressed_keys), Milky2018$selene$inputs$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$0$(_it$2);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_release_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$last_pressed_keys);
  const _it$3 = moonbitlang$core$set$$Set$iterator$0$(Milky2018$selene$inputs$$pressed_keys);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$0$(_it$3);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$last_pressed_keys, _code);
      continue;
    }
  }
}
function Milky2018$selene$inputs$$is_just_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$inputs$$just_pressed_keys, code);
}
function rami3l$js$45$ffi$js$$Union3$from0$68$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$68$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$69$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$45$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$70$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$71$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$41$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$72$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$72$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$72$(self)) {
    moonbitlang$core$abort$$abort$21$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$42$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$43$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$44$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$8$(self) : Option$None$8$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$45$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$9$(self) : Option$None$9$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$73$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$73$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$73$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$73$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$73$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$71$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$74$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$75$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$44$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$76$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$43$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$76$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$42$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$45$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$45$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$41$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$backend$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$44$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$75$(rami3l$js$45$ffi$js$$Nullable$unwrap$72$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$45$(rami3l$js$45$ffi$js$$Union5$to0$69$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$8 = { _0: 0, _1: 0 };
  const _bind$9 = moonbitlang$core$ref$$Ref$new$66$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$8, zoom: 1, time_scale: 1, mouse_movement: _bind$9 };
}
function Milky2018$selene$backend$$register_mouse_events(mouse, mouse_movement) {
  Milky2018$selene$backend$$canvas_backend.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$74$(Milky2018$selene$backend$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$43$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$76$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$73$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$73$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$73$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$73$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$74$(Milky2018$selene$backend$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$43$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$76$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$73$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$74$(Milky2018$selene$backend$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$43$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$76$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$73$(mouse_event);
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
function Milky2018$selene$backend$$register_key_events(pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$74$(Milky2018$selene$backend$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$76$(event));
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$74$(Milky2018$selene$backend$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$76$(event));
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
  const _bind$8 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$backend$$element_cache, png);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
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
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(context, rami3l$js$45$ffi$js$$Union7$from0$70$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from2$68$(pattern));
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
  Milky2018$selene$backend$$set_text_align(context, "left");
  Milky2018$selene$backend$$set_text_baseline(context, "top");
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$68$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, text, x, y, Option$None$10$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_color_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$68$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$set_time_scale(time_scale) {
  Milky2018$selene$backend$$canvas_backend.time_scale = time_scale;
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
    moonbitlang$core$builtin$$println$35$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
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
    const _bind$8 = Milky2018$selene$backend$$canvas_backend.mouse_movement.val;
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
function Milky2018$selene$backend$$load_font(font, path) {
  Milky2018$selene$backend$$load_font_async(font, path);
}
function Milky2018$selene$backend$$get_audio(path) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$19$(Milky2018$selene$backend$$audio_cache, path);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
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
function Milky2018$selene$backend$$preload_audio(audio_path) {
  Milky2018$selene$backend$$get_audio(audio_path);
}
function moonbitlang$core$builtin$$Hash$hash_combine$3$(_x_81, _x_82) {
  moonbitlang$core$builtin$$Hash$hash_combine$26$(_x_81, _x_82);
}
function Milky2018$selene$system$$timeout$46$inner(time, callback, pausible) {
  moonbitlang$core$array$$Array$push$15$(Milky2018$selene$system$$timers, { rest: time, pausible: pausible, callback: callback });
}
function Milky2018$selene$system$$timer_system(delta) {
  const _p = [];
  const _p$2 = Milky2018$selene$system$$timers.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = Milky2018$selene$system$$timers[_p$3];
      if (_p$4.pausible) {
        moonbitlang$core$array$$Array$push$15$(_p, _p$4);
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
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(Milky2018$selene$system$$timers, _p$5);
      return;
    }
  }
}
function Milky2018$selene$system$$realtime_timer_system(delta) {
  const _p = [];
  const _p$2 = Milky2018$selene$system$$timers.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = Milky2018$selene$system$$timers[_p$3];
      if (!_p$4.pausible) {
        moonbitlang$core$array$$Array$push$15$(_p, _p$4);
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
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(Milky2018$selene$system$$timers, _p$5);
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
function Milky2018$selene$system$$Entity$respawn(e) {
  moonbitlang$core$set$$Set$add$3$(Milky2018$selene$system$$all_entities, e);
}
function Milky2018$selene$system$$deferred_event_system(_delta) {
  while (true) {
    const _bind$8 = moonbitlang$core$array$$Array$pop$11$(Milky2018$selene$system$$deferred_events);
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
  moonbitlang$core$array$$Array$push$56$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$20$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$55$(systems, { _0: system, _1: schedule, _2: system_name$2 });
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
  const startup = () => {
    const _arr$2 = self.systems;
    const _len$2 = _arr$2.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const system = _arr$2[_i];
        const _bind$8 = system._1;
        if (_bind$8.$tag === 0) {
          const _func = system._0;
          _func(0);
        }
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const renders = [];
  const _arr$2 = self.systems;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const system = _arr$2[_i];
      const _bind$8 = system._1;
      if (_bind$8.$tag === 2) {
        const _Render = _bind$8;
        const _pri = _Render._0;
        moonbitlang$core$array$$Array$push$30$(renders, { _0: system._0, _1: _pri });
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$sort_by_key$63$(renders, (system) => -system._1 | 0);
  const render_loop = (delta) => {
    const _len$3 = renders.length;
    let _tmp$3 = 0;
    while (true) {
      const _i = _tmp$3;
      if (_i < _len$3) {
        const render = renders[_i];
        const _func = render._0;
        _func(delta);
        _tmp$3 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const game_loops = [];
  const _arr$3 = self.systems;
  const _len$3 = _arr$3.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len$3) {
      const system = _arr$3[_i];
      const _bind$8 = system._1;
      if (_bind$8.$tag === 1) {
        moonbitlang$core$array$$Array$push$54$(game_loops, system._0);
      }
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const game_loop = (delta) => {
    const _len$4 = game_loops.length;
    let _tmp$4 = 0;
    while (true) {
      const _i = _tmp$4;
      if (_i < _len$4) {
        const system = game_loops[_i];
        system(delta);
        _tmp$4 = _i + 1 | 0;
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
  const _bind$8 = Milky2018$selene$camera$$camera.attached_entity;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _e = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _pos = _Some$2;
      const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
      const _p = Milky2018$selene$backend$$canvas_backend.viewport_size;
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
function Milky2018$selene$ui$$Ui$new() {
  ({});
}
function Milky2018$selene$sprite$$Sprite$from_animation$46$inner(animation, zindex, offset) {
  const _bind$8 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(animation, 0);
  return { sprite_type: _bind$8, zindex: zindex, visible: true, offset: offset };
}
function Milky2018$selene$sprite$$Sprite$from_picture$46$inner(picture, zindex, offset) {
  const _bind$8 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(picture);
  return { sprite_type: _bind$8, zindex: zindex, visible: true, offset: offset };
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
  const _bind$8 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(text);
  return { sprite_type: _bind$8, zindex: zindex, visible: true, offset: offset };
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
function Milky2018$selene$sprite$$render_animation(animation, current_frame, pos, visible, delta) {
  const frame = moonbitlang$core$array$$Array$at$31$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
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
  const _p = moonbitlang$core$builtin$$Map$to_array$14$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (Milky2018$selene$system$$Entity$is_alive(_p$5._0)) {
        moonbitlang$core$array$$Array$push$34$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by$34$(sprites, (sprite1, sprite2) => {
    if (sprite1._1.zindex < sprite2._1.zindex) {
      return -1;
    } else {
      if (sprite1._1.zindex > sprite2._1.zindex) {
        return 1;
      } else {
        const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, sprite1._0);
        if (_bind$8 === undefined) {
          return 0;
        } else {
          const _Some = _bind$8;
          const _pos1 = _Some;
          const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, sprite2._0);
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
        const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$8 === undefined) {
          break _L;
        } else {
          const _Some = _bind$8;
          const _pos = _Some;
          const _bind$9 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$ui$$uis, e);
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
                Milky2018$selene$sprite$$render_picture(_picture, { _0: pos._0 + _p$4._0, _1: pos._1 + _p$4._1 });
              }
              break;
            }
            case 1: {
              const _Animation = _bind$10;
              const _anime = _Animation._0;
              const _frame = _Animation._1;
              const _p$4 = sprite$2.offset;
              const _tmp$3 = { _0: pos._0 + _p$4._0, _1: pos._1 + _p$4._1 };
              const new_frame = Milky2018$selene$sprite$$render_animation(_anime, _frame, _tmp$3, sprite$2.visible, delta);
              _Animation._1 = new_frame;
              break;
            }
            case 2: {
              const _Text = _bind$10;
              const _text = _Text._0;
              if (sprite$2.visible) {
                const _p$5 = sprite$2.offset;
                Milky2018$selene$sprite$$render_text(_text, { _0: pos._0 + _p$5._0, _1: pos._1 + _p$5._1 });
              }
              break;
            }
            default: {
              const _ColorRect = _bind$10;
              const _color_rect = _ColorRect._0;
              if (sprite$2.visible) {
                const _p$5 = sprite$2.offset;
                Milky2018$selene$sprite$$render_color_rect(_color_rect, { _0: pos._0 + _p$5._0, _1: pos._1 + _p$5._1 });
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
function Milky2018$selene$sprite$$play_animation$46$inner(entity, animation, from_start, loop_, rate, transform) {
  _L: {
    const _bind$8 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$sprite$$sprites, entity);
    if (_bind$8 === undefined) {
      break _L;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _x$2 = _x.sprite_type;
      if (_x$2.$tag === 1) {
        const _Animation = _x$2;
        const _current_anime = _Animation._0;
        const _current_frame = _Animation._1;
        const _zindex = _x.zindex;
        const _visible = _x.visible;
        const _offset = _x.offset;
        const _p = animation.loop_;
        const loop_$2 = loop_ === -1 ? _p : loop_;
        const rate$2 = moonbitlang$core$option$$Option$unwrap_or$41$(rate, animation.fps);
        const _p$2 = animation.transform;
        let transform$2;
        if (transform === undefined) {
          transform$2 = _p$2;
        } else {
          const _p$3 = transform;
          transform$2 = _p$3;
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
function Milky2018$selene$collision$$QuadTree$new(position, size, depth) {
  const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$3$(8);
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
    moonbitlang$core$set$$Set$add$3$(self.entities, entity);
    return undefined;
  }
  const _p = self.children;
  if (_p.length === 0) {
    const half_size = { _0: Milky2018$selene$math$$Vec2D$op_get(self.size, 0) * 0.5, _1: Milky2018$selene$math$$Vec2D$op_get(self.size, 1) * 0.5 };
    const _self = self.children;
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    const _p$2 = self.position;
    const _p$3 = { _0: Milky2018$selene$math$$Vec2D$op_get(half_size, 0), _1: 0 };
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$2._0 + _p$3._0, _1: _p$2._1 + _p$3._1 }, half_size, self.depth + 1 | 0));
    const _p$4 = self.position;
    const _p$5 = { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(half_size, 1) };
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$4._0 + _p$5._0, _1: _p$4._1 + _p$5._1 }, half_size, self.depth + 1 | 0));
    const _p$6 = self.position;
    moonbitlang$core$array$$Array$push$6$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$6._0 + half_size._0, _1: _p$6._1 + half_size._1 }, half_size, self.depth + 1 | 0));
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
  const _bind$8 = [Milky2018$selene$collision$$quadtree_root.val];
  const trees = { val: moonbitlang$core$list$$List$from_array$6$({ buf: _bind$8, start: 0, end: 1 }) };
  let results = moonbitlang$core$set$$Set$new$46$inner$3$(8);
  while (true) {
    const _bind$9 = trees.val;
    if (_bind$9.$tag === 1) {
      const _More = _bind$9;
      const _hd = _More._0;
      const _rest = _More._1;
      trees.val = _rest;
      if (!Milky2018$selene$math$$Rect$intersects(_hd.bounding_box, area)) {
        continue;
      }
      const _bind$10 = _hd.children;
      if (_bind$10.length === 0) {
        results = moonbitlang$core$set$$Set$union$3$(results, _hd.entities);
      } else {
        const _p = _hd.children;
        const _p$2 = _p.length;
        let _tmp = 0;
        while (true) {
          const _p$3 = _tmp;
          if (_p$3 < _p$2) {
            const _p$4 = _p[_p$3];
            const _p$5 = trees.val;
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$5$(_p$4, _p$5);
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
function Milky2018$selene$collision$$quadtree_clear_system(_delta) {
  let left_limit = 0;
  let right_limit = 0;
  let top_limit = 0;
  let bottom_limit = 0;
  const boxes = [];
  const _it = moonbitlang$core$builtin$$Map$iterator2$2$(Milky2018$selene$collision$$shapes);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$2$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _e = _x._0;
      const _shape = _x._1;
      if (Milky2018$selene$system$$Entity$is_alive(_e)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$ui$$uis, _e);
        if (_bind$9 === -1) {
          const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
          if (_bind$10 === undefined) {
            continue;
          } else {
            const _Some$2 = _bind$10;
            const _position = _Some$2;
            const _Rect = _shape;
            const _x$2 = _Rect._0;
            const _width = _x$2._0;
            const _height = _x$2._1;
            const _offset = _Rect._1;
            const _bind$11 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const _bind$12 = { _0: _width, _1: _height };
            const box = { position: _bind$11, size: _bind$12 };
            moonbitlang$core$array$$Array$push$57$(boxes, { _0: _e, _1: box });
            const _p = left_limit;
            const _p$2 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 0);
            left_limit = _p > _p$2 ? _p$2 : _p;
            const _p$3 = right_limit;
            const _p$4 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 0) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, 0);
            right_limit = _p$3 > _p$4 ? _p$3 : _p$4;
            const _p$5 = top_limit;
            const _p$6 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 1);
            top_limit = _p$5 > _p$6 ? _p$6 : _p$5;
            const _p$7 = bottom_limit;
            const _p$8 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 1) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, 1);
            bottom_limit = _p$7 > _p$8 ? _p$7 : _p$8;
          }
        } else {
          continue;
        }
      } else {
        continue;
      }
      continue;
    }
  }
  Milky2018$selene$collision$$quadtree_root.val = Milky2018$selene$collision$$QuadTree$new({ _0: left_limit, _1: top_limit }, { _0: right_limit - left_limit, _1: bottom_limit - top_limit }, 0);
  const _len = boxes.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const box = boxes[_i];
      Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root.val, box._0, box._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$Pickable$new() {
  return { on_pressed_callbacks: [], on_released_callbacks: [], on_just_pressed_callbacks: [], on_just_released_callbacks: [] };
}
function Milky2018$selene$collision$$Pickable$on_just_pressed(self, callback) {
  moonbitlang$core$array$$Array$push$59$(self.on_just_pressed_callbacks, callback);
}
function Milky2018$selene$collision$$pickable_click_system(_delta) {
  const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
  const _bind$8 = { _0: 1, _1: 1 };
  const _p = Milky2018$selene$inputs$$mouse.pos;
  const _p$2 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$9 = { _0: _p._0 * _p$2._0, _1: _p._1 * _p$2._1 };
  const box = { position: _bind$9, size: _bind$8 };
  const _it = moonbitlang$core$builtin$$Map$iterator2$5$(Milky2018$selene$ui$$uis);
  while (true) {
    const _bind$10 = moonbitlang$core$builtin$$Iterator2$next$5$(_it);
    if (_bind$10 === undefined) {
      break;
    } else {
      const _Some = _bind$10;
      const _x = _Some;
      const _e = _x._0;
      if (Milky2018$selene$system$$Entity$is_alive(_e)) {
        const _bind$11 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$pickables, _e);
        if (_bind$11 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$11;
          const _pick = _Some$2;
          const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
          if (_bind$12 === undefined) {
            $panic();
          } else {
            const _Some$3 = _bind$12;
            const _position = _Some$3;
            const _bind$13 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, _e);
            if (_bind$13 === undefined) {
              continue;
            } else {
              const _Some$4 = _bind$13;
              const _shape = _Some$4;
              const _Rect = _shape;
              const _x$2 = _Rect._0;
              const _width = _x$2._0;
              const _height = _x$2._1;
              const _offset = _Rect._1;
              const _bind$14 = { _0: _width, _1: _height };
              const _bind$15 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
              const area_box = { position: _bind$15, size: _bind$14 };
              if (!Milky2018$selene$math$$Rect$intersects(box, area_box)) {
                continue;
              }
              const _arr = [0, 1, 2];
              const _len = _arr.length;
              let _tmp = 0;
              while (true) {
                const _i = _tmp;
                if (_i < _len) {
                  const button = _arr[_i];
                  if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
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
                  if (Milky2018$selene$inputs$$is_mouse_released(button)) {
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
                  if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
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
                  if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
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
        continue;
      }
      continue;
    }
  }
  const entities = Milky2018$selene$collision$$quadtree_query(box);
  const _it$2 = moonbitlang$core$set$$Set$iterator$3$(entities);
  while (true) {
    const _bind$10 = moonbitlang$core$builtin$$Iterator$next$3$(_it$2);
    if (_bind$10 === undefined) {
      return;
    } else {
      const _Some = _bind$10;
      const _e = _Some;
      if (Milky2018$selene$system$$Entity$is_alive(_e)) {
        const _bind$11 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$pickables, _e);
        if (_bind$11 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$11;
          const _pick = _Some$2;
          const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
          if (_bind$12 === undefined) {
            $panic();
          } else {
            const _Some$3 = _bind$12;
            const _position = _Some$3;
            const _bind$13 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, _e);
            if (_bind$13 === undefined) {
              continue;
            } else {
              const _Some$4 = _bind$13;
              const _shape = _Some$4;
              const _Rect = _shape;
              const _x = _Rect._0;
              const _width = _x._0;
              const _height = _x._1;
              const _offset = _Rect._1;
              const _bind$14 = { _0: _width, _1: _height };
              const _bind$15 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
              const area_box = { position: _bind$15, size: _bind$14 };
              if (!Milky2018$selene$math$$Rect$intersects(Milky2018$selene$math$$Rect$shift(box, Milky2018$selene$camera$$camera.position), area_box)) {
                continue;
              }
              const _arr = [0, 1, 2];
              const _len = _arr.length;
              let _tmp = 0;
              while (true) {
                const _i = _tmp;
                if (_i < _len) {
                  const button = _arr[_i];
                  if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
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
                  if (Milky2018$selene$inputs$$is_mouse_released(button)) {
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
                  if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
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
                  if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
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
        continue;
      }
      continue;
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
  const _bind$8 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$8.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$60$(0));
  }
  moonbitlang$core$array$$Array$push$60$(moonbitlang$core$option$$Option$unwrap$46$(moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, speed, axis) {
  const pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  const size = { _0: Milky2018$selene$math$$Vec2D$op_get(object.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.size, 1) };
  return speed >= 0 ? { position: pos, size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + speed) } : { position: Milky2018$selene$math$$Vec2D$update(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + speed), size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - speed) };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$62$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, Milky2018$selene$math$$Vec2D$op_get(velocity, axis), axis);
  let new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  new_pos = Milky2018$selene$math$$Vec2D$update(new_pos, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  let new_velocity = velocity;
  const entities = Milky2018$selene$collision$$quadtree_query(ray_collision);
  const _it = moonbitlang$core$set$$Set$iterator$3$(entities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$3$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      if (Milky2018$selene$system$$Entity$is_alive(_e)) {
        if (moonbitlang$core$builtin$$op_notequal$3$(_e, entity)) {
          const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, _e);
          if (_bind$9 === undefined) {
            continue;
          } else {
            const _Some$2 = _bind$9;
            const _shape = _Some$2;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
            if (_bind$10 === undefined) {
              continue;
            } else {
              const _Some$3 = _bind$10;
              const _pos = _Some$3;
              const _bind$11 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, _e);
              if (_bind$11 === undefined) {
                continue;
              } else {
                const _Some$4 = _bind$11;
                const _collision_layer = _Some$4;
                if (Milky2018$selene$collision$$CollisionMask$contains(mask, _collision_layer)) {
                  const _bind$12 = { _0: _width, _1: _height };
                  const _bind$13 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
                  const collision_box = { position: _bind$13, size: _bind$12 };
                  if (Milky2018$selene$math$$Rect$intersects(object, collision_box)) {
                    const movement = Milky2018$selene$collision$$aabb_resolve(object, collision_box);
                    const _p = new_pos;
                    new_pos = { _0: _p._0 + movement._0, _1: _p._1 + movement._1 };
                    const dir = Milky2018$selene$math$$Vec2D$update({ _0: 0, _1: 0 }, axis, Milky2018$selene$math$$Vec2D$op_get(movement, axis) > 0 ? 1 : -1);
                    Milky2018$selene$collision$$add_collision_info(entity, _e, dir);
                    return { _0: new_pos, _1: movement };
                  }
                  if (Milky2018$selene$math$$Rect$intersects(ray_collision, collision_box)) {
                    let dir = { _0: 0, _1: 0 };
                    if (Milky2018$selene$math$$Vec2D$op_get(new_velocity, axis) > 0) {
                      const _tmp = new_pos;
                      const _p = Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) - Milky2018$selene$math$$Vec2D$op_get(object.size, axis);
                      const _p$2 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                      new_pos = Milky2018$selene$math$$Vec2D$update(_tmp, axis, _p > _p$2 ? _p : _p$2);
                      new_velocity = Milky2018$selene$math$$Vec2D$update(new_velocity, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                      dir = Milky2018$selene$math$$Vec2D$update(dir, axis, 1);
                    } else {
                      if (Milky2018$selene$math$$Vec2D$op_get(new_velocity, axis) < 0) {
                        const _tmp = new_pos;
                        const _p = Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, axis);
                        const _p$2 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                        new_pos = Milky2018$selene$math$$Vec2D$update(_tmp, axis, _p > _p$2 ? _p$2 : _p);
                        new_velocity = Milky2018$selene$math$$Vec2D$update(new_velocity, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                        dir = Milky2018$selene$math$$Vec2D$update(dir, axis, -1);
                      }
                    }
                    Milky2018$selene$collision$$add_collision_info(entity, _e, dir);
                  }
                } else {
                  continue;
                }
              }
            }
          }
        } else {
          continue;
        }
      } else {
        continue;
      }
      continue;
    }
  }
  return { _0: new_pos, _1: new_velocity };
}
function Milky2018$selene$collision$$move_with_collide(e, collider, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
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
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, { _0: _p._0 - _offset._0, _1: _p._1 - _offset._1 });
      return new_y._1;
    }
  }
}
function Milky2018$selene$collision$$move_without_collide(e, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(_pos, 0) + Milky2018$selene$math$$Vec2D$op_get(velocity, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_pos, 1) + Milky2018$selene$math$$Vec2D$op_get(velocity, 1) };
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, new_pos);
    return;
  }
}
function Milky2018$selene$collision$$move_system(delta) {
  moonbitlang$core$builtin$$Map$clear$8$(Milky2018$selene$collision$$collision_infos);
  const _it = moonbitlang$core$builtin$$Map$iterator2$7$(Milky2018$selene$velocity$$velocities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$7$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _e = _x._0;
      const _vel = _x._1;
      if (Milky2018$selene$system$$Entity$is_alive(_e)) {
        _L: {
          _L$2: {
            const _bind$9 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$colliders, _e);
            if (_bind$9 === undefined) {
              break _L$2;
            } else {
              const _Some$2 = _bind$9;
              const _collide = _Some$2;
              if (_collide.active) {
                const new_vel = Milky2018$selene$collision$$move_with_collide(_e, _collide, { _0: _vel._0 * delta, _1: _vel._1 * delta });
                moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$collision$$real_velocities, _e, { _0: new_vel._0 / delta, _1: new_vel._1 / delta });
              } else {
                break _L$2;
              }
            }
            break _L;
          }
          Milky2018$selene$collision$$move_without_collide(_e, { _0: _vel._0 * delta, _1: _vel._1 * delta });
          moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$collision$$real_velocities, _e, _vel);
        }
      } else {
        continue;
      }
      continue;
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
function Milky2018$selene$collision$$Area$new(mask) {
  const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$3$(8);
  const _bind$9 = [];
  const _bind$10 = [];
  return { mask: mask, on_enter_callbacks: _bind$9, on_exit_callbacks: _bind$10, contains: _bind$8 };
}
function Milky2018$selene$collision$$Area$on_enter(self, callback) {
  moonbitlang$core$array$$Array$push$58$(self.on_enter_callbacks, callback);
}
function Milky2018$selene$collision$$area_collide_system(_delta) {
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$11$;
  const _bind$8 = Milky2018$selene$system$$iter_entities();
  _bind$8((e) => {
    const _bind$9 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$areas, e);
    if (_bind$9 === undefined) {
      return 1;
    } else {
      const _Some = _bind$9;
      const _area = _Some;
      const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
      if (_bind$10 === undefined) {
        $panic();
      } else {
        const _Some$2 = _bind$10;
        const _position = _Some$2;
        const _bind$11 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
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
          const new_contains = moonbitlang$core$set$$Set$new$46$inner$3$(8);
          const entities = Milky2018$selene$collision$$quadtree_query(box);
          const _it = moonbitlang$core$set$$Set$iterator$3$(entities);
          while (true) {
            const _bind$14 = moonbitlang$core$builtin$$Iterator$next$3$(_it);
            if (_bind$14 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$14;
              const _entity = _Some$4;
              if (Milky2018$selene$system$$Entity$is_alive(_entity)) {
                const _bind$15 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, _entity);
                if (_bind$15 === undefined) {
                  continue;
                } else {
                  const _Some$5 = _bind$15;
                  const _other_layer = _Some$5;
                  const _bind$16 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, _entity);
                  if (_bind$16 === undefined) {
                    continue;
                  } else {
                    const _Some$6 = _bind$16;
                    const _other_shape = _Some$6;
                    const _Rect$2 = _other_shape;
                    const _x$2 = _Rect$2._0;
                    const _other_width = _x$2._0;
                    const _other_height = _x$2._1;
                    const _other_offset = _Rect$2._1;
                    const _bind$17 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _entity);
                    if (_bind$17 === undefined) {
                      $panic();
                    } else {
                      const _Some$7 = _bind$17;
                      const _other_position = _Some$7;
                      const _bind$18 = { _0: _other_width, _1: _other_height };
                      const _bind$19 = { _0: _other_position._0 + _other_offset._0, _1: _other_position._1 + _other_offset._1 };
                      const other_box = { position: _bind$19, size: _bind$18 };
                      if (Milky2018$selene$math$$Rect$intersects(box, other_box)) {
                        if (Milky2018$selene$collision$$CollisionMask$contains(_area.mask, _other_layer)) {
                          moonbitlang$core$set$$Set$add$3$(new_contains, _entity);
                          if (moonbitlang$core$set$$Set$contains$3$(_area.contains, _entity)) {
                            continue;
                          }
                          const _arr = _area.on_enter_callbacks;
                          const _len = _arr.length;
                          let _tmp = 0;
                          while (true) {
                            const _i = _tmp;
                            if (_i < _len) {
                              const callback = _arr[_i];
                              callback(_entity);
                              _tmp = _i + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                        } else {
                          continue;
                        }
                      } else {
                        continue;
                      }
                    }
                  }
                }
              } else {
                continue;
              }
              continue;
            }
          }
          const _it$2 = moonbitlang$core$set$$Set$iterator$3$(_area.contains);
          while (true) {
            const _bind$14 = moonbitlang$core$builtin$$Iterator$next$3$(_it$2);
            if (_bind$14 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$14;
              const _entity = _Some$4;
              if (moonbitlang$core$set$$Set$contains$3$(new_contains, _entity)) {
                continue;
              }
              const _arr = _area.on_exit_callbacks;
              const _len = _arr.length;
              let _tmp = 0;
              while (true) {
                const _i = _tmp;
                if (_i < _len) {
                  const callback = _arr[_i];
                  callback(_entity);
                  _tmp = _i + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              continue;
            }
          }
          _area.contains = new_contains;
        }
      }
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
function Milky2018$selene$plugins$$default_plugin(app) {
  const _self = app.systems;
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$inputs$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$inputs$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: Milky2018$selene$plugins$$default_plugin$46$constr$47$3272, _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$system$$realtime_timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Realtime Timer System" });
}
function moonbitlang$core$builtin$$Eq$equal$32$(_x_168, _x_169) {
  switch (_x_168) {
    case 0: {
      if (_x_169 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_169 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_169 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_169 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_169 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_169 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_169 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_169 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_169 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_169 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_169 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_169 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_169 === 12) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_169 === 13) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$32$(_x_164, _x_165) {
  switch (_x_164) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 10);
      return;
    }
    case 11: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 11);
      return;
    }
    case 12: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 12);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_165, 13);
      return;
    }
  }
}
function username$Survivors$$findNearestEnemyPosition(player_pos) {
  let min = 140;
  let res = undefined;
  const _it = moonbitlang$core$builtin$$Map$iterator2$18$(username$Survivors$$enemies);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$18$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _e = _x._0;
      if (Milky2018$selene$system$$Entity$is_alive(_e)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
        if (_bind$9 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$9;
          const _enemy_pos = _Some$2;
          const dist = Milky2018$selene$math$$Vec2D$distance_to(player_pos, _enemy_pos);
          if (dist < min) {
            min = dist;
            res = _enemy_pos;
          }
        }
      } else {
        continue;
      }
      continue;
    }
  }
  return res;
}
function username$Survivors$$translateLevel() {
  const _bind$8 = username$Survivors$$gameState.level;
  return _bind$8 >= 1 && _bind$8 <= 10 ? "筑基期" : _bind$8 >= 11 && _bind$8 <= 20 ? "结丹期" : _bind$8 >= 21 && _bind$8 <= 30 ? "元婴期" : "无等级";
}
function username$Survivors$$displayUpgrades(text_entity, icon_entity, index) {
  if (index < username$Survivors$$upgradeUI.availableUpgrades.length) {
    const powerup = moonbitlang$core$array$$Array$at$33$(username$Survivors$$upgradeUI.availableUpgrades, index);
    const button_text = Milky2018$selene$sprite$$Text$new$46$inner(powerup.name, "white", "10px ThaleahFat");
    const describeText = Milky2018$selene$sprite$$Text$new$46$inner(powerup.describe, "white", "6px ThaleahFat");
    const button_sprite = Milky2018$selene$sprite$$Sprite$from_text$46$inner(button_text, 102, { _0: 16, _1: 4 });
    const describeSprite = Milky2018$selene$sprite$$Sprite$from_text$46$inner(describeText, 102, { _0: 16, _1: 14 });
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, text_entity, button_sprite);
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, icon_entity, describeSprite);
    return;
  } else {
    return;
  }
}
function username$Survivors$$createUpgradeInfo(upgrade) {
  switch (upgrade) {
    case 1: {
      return { theType: upgrade, name: "提升铲子伤害", describe: "" };
    }
    case 0: {
      return { theType: upgrade, name: "提升铲子大小", describe: "咦，这不符合质量守恒定律！" };
    }
    case 2: {
      return { theType: upgrade, name: "获得一把铁铲", describe: "以气御...铲？" };
    }
    case 3: {
      return { theType: upgrade, name: "提升铲子旋转速度", describe: "天下武功,无坚不破,唯快不破" };
    }
    case 4: {
      return { theType: upgrade, name: "习得雷法", describe: "以雷霆击碎黑暗！" };
    }
    case 5: {
      return { theType: upgrade, name: "提升雷法5点伤害", describe: "" };
    }
    case 6: {
      return { theType: upgrade, name: "雷法释放频率提升20%", describe: "" };
    }
    case 7: {
      return { theType: upgrade, name: "习得三昧真火", describe: "难道...是传说中的梵诀?" };
    }
    case 8: {
      return { theType: upgrade, name: "提升三昧真火伤害", describe: "吸收了新的异火？" };
    }
    case 9: {
      return { theType: upgrade, name: "提升角色移动速度", describe: "卡其脱离太！" };
    }
    case 10: {
      return { theType: upgrade, name: "提升角色20%攻击力", describe: "" };
    }
    case 11: {
      return { theType: upgrade, name: "回复30点生命值", describe: "" };
    }
    case 12: {
      return { theType: upgrade, name: "获得100块灵石", describe: "" };
    }
    default: {
      return { theType: upgrade, name: "获得1个护身法器", describe: "可以抵挡一次伤害" };
    }
  }
}
function username$Survivors$$generateRandomUpgrades() {
  const selected = [];
  if (username$Survivors$$gameState.level === 0) {
    const _it = moonbitlang$core$builtin$$Map$iterator2$16$(username$Survivors$$allTypes);
    while (true) {
      const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$16$(_it);
      if (_bind$8 === undefined) {
        break;
      } else {
        const _Some = _bind$8;
        const _x = _Some;
        const _k = _x._0;
        moonbitlang$core$array$$Array$push$33$(selected, username$Survivors$$createUpgradeInfo(_k));
        continue;
      }
    }
    return selected;
  }
  if (username$Survivors$$gameState.level === 1) {
    moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 10, true);
    moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 9, true);
    moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 13, true);
  }
  if (username$Survivors$$gameState.health < 100) {
    moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 11, true);
  } else {
    moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 11, false);
  }
  const ableTypes = [];
  const _it = moonbitlang$core$builtin$$Map$iterator2$16$(username$Survivors$$allTypes);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$16$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      if (_v) {
        moonbitlang$core$array$$Array$push$32$(ableTypes, _k);
      }
      continue;
    }
  }
  if (ableTypes.length === 0) {
    moonbitlang$core$array$$Array$push$32$(ableTypes, 12);
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 3) {
      const rand_index = moonbitlang$core$random$$Rand$int$46$inner(username$Survivors$$rand, ableTypes.length);
      const powerup_type = moonbitlang$core$array$$Array$at$32$(ableTypes, rand_index);
      moonbitlang$core$array$$Array$push$33$(selected, username$Survivors$$createUpgradeInfo(powerup_type));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return selected;
}
function username$Survivors$$upgrade() {
  Milky2018$selene$backend$$set_time_scale(0);
  username$Survivors$$upgradeUI.availableUpgrades = username$Survivors$$generateRandomUpgrades();
  username$Survivors$$displayUpgrades(username$Survivors$$upgradeUI.upgradeButton1Entity, username$Survivors$$upgradeUI.powerup_icon1_entity, 0);
  username$Survivors$$displayUpgrades(username$Survivors$$upgradeUI.upgradeButton2Entity, username$Survivors$$upgradeUI.powerup_icon2_entity, 1);
  username$Survivors$$displayUpgrades(username$Survivors$$upgradeUI.upgradeButton3Entity, username$Survivors$$upgradeUI.powerup_icon3_entity, 2);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.level_up_entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.upgradeButton1Entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.upgradeButton2Entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.upgradeButton3Entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.powerup_icon1_entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.powerup_icon2_entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.powerup_icon3_entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.powerup_bg1_entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.powerup_bg2_entity);
  Milky2018$selene$system$$Entity$respawn(username$Survivors$$upgradeUI.powerup_bg3_entity);
}
function username$Survivors$$getExp(get) {
  Milky2018$selene$backend$$play_audio("Audio/Exp.wav", 0.5, false);
  username$Survivors$$gameState.expNow = username$Survivors$$gameState.expNow + get | 0;
  if (username$Survivors$$gameState.expNow >= moonbitlang$core$array$$Array$at$20$(username$Survivors$$nextExp, username$Survivors$$gameState.level)) {
    username$Survivors$$gameState.expNow = username$Survivors$$gameState.expNow - moonbitlang$core$array$$Array$at$20$(username$Survivors$$nextExp, username$Survivors$$gameState.level) | 0;
    username$Survivors$$gameState.level = username$Survivors$$gameState.level + 1 | 0;
    username$Survivors$$upgrade();
  }
  if (username$Survivors$$gameState.level === username$Survivors$$nextExp.length) {
    username$Survivors$$gameState.expText.content = "已满级~";
    return;
  } else {
    username$Survivors$$gameState.expText.content = `${username$Survivors$$translateLevel()} 经验值：${moonbitlang$core$int$$Int$to_string$46$inner(username$Survivors$$gameState.expNow, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(moonbitlang$core$array$$Array$at$20$(username$Survivors$$nextExp, username$Survivors$$gameState.level), 10)}`;
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.expBarEntity, { _0: -240 + 240 * ((username$Survivors$$gameState.expNow + 0) / (moonbitlang$core$array$$Array$at$20$(username$Survivors$$nextExp, username$Survivors$$gameState.level) + 0)), _1: 0 });
    return;
  }
}
function username$Survivors$$enemyDie(enemyEntity) {
  const entity = Milky2018$selene$system$$Entity$new();
  const expStone = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(Milky2018$selene$sprite$$Picture$new({ _0: 6, _1: 6 }, "Sprites/ExpStone.png", undefined, username$Survivors$$enemyDie$46$constr$47$3341), 8, { _0: -3, _1: -3 });
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, expStone);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, enemyEntity));
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 10, _1: 10 }, { _0: -5, _1: -5 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, username$Survivors$$expStonelayer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new([]));
  const area = Milky2018$selene$collision$$Area$new([username$Survivors$$playerCollisionLayer]);
  moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$areas, entity, area);
  Milky2018$selene$collision$$Area$on_enter(area, (e) => {
    username$Survivors$$getExp(1);
    Milky2018$selene$system$$Entity$destroy(entity);
  });
  Milky2018$selene$system$$Entity$destroy(enemyEntity);
  Milky2018$selene$backend$$play_audio("Audio/ZombieDie.wav", 0.25, false);
}
function username$Survivors$$enemyHurt(enemyEntity, damage) {
  const entity = Milky2018$selene$system$$Entity$new();
  const text = Milky2018$selene$sprite$$Text$new$46$inner(moonbitlang$core$int$$Int$to_string$46$inner(moonbitlang$core$double$$Double$to_int(damage * username$Survivors$$gameState.damageFactor), 10), "gold", "12px ThaleahFat");
  const sprite = Milky2018$selene$sprite$$Sprite$from_text(text, 15, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, enemyEntity));
  Milky2018$selene$system$$timeout$46$inner(0.25, () => {
    Milky2018$selene$system$$Entity$destroy(entity);
  }, true);
  const _bind$8 = moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity);
  _bind$8.health = _bind$8.health - damage * username$Survivors$$gameState.damageFactor;
  if (moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity).health <= 0) {
    username$Survivors$$enemyDie(enemyEntity);
    return;
  } else {
    moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity).hurt = true;
    Milky2018$selene$system$$timeout$46$inner(0.1, () => {
      moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity).hurt = false;
    }, true);
    Milky2018$selene$sprite$$play_animation$46$inner(enemyEntity, moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity).hurtAnim, false, username$Survivors$$enemyHurt$46$constr$47$3347, Option$None$0$, undefined);
    return;
  }
}
function username$Survivors$$weaponTwoAttack(targetPos) {
  Milky2018$selene$backend$$play_audio("Audio/ThunderDef.wav", 0.5, false);
  const thunderEntity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, thunderEntity, Milky2018$selene$sprite$$Sprite$from_picture$46$inner(Milky2018$selene$sprite$$Picture$new$46$inner({ _0: 64, _1: 64 }, "Sprites/WeaponTwo.png", Milky2018$selene$math$$Transform$from_scale(0.5, 0.5), 2), 11, { _0: -16, _1: -16 }));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, thunderEntity, targetPos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, thunderEntity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 24, _1: 24 }, { _0: -12, _1: -12 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, thunderEntity, username$Survivors$$bullet_collision_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, thunderEntity, Milky2018$selene$collision$$Collider$new([username$Survivors$$enemyCollisionLayer, username$Survivors$$wallCollisionLayer]));
  const area = Milky2018$selene$collision$$Area$new([username$Survivors$$enemyCollisionLayer]);
  Milky2018$selene$collision$$Area$on_enter(area, (enemyEntity) => {
    if (moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity).hurt) {
      return undefined;
    }
    username$Survivors$$enemyHurt(enemyEntity, username$Survivors$$weaponTwoData.damage);
  });
  moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$areas, thunderEntity, area);
  Milky2018$selene$system$$timeout$46$inner(0.15, () => {
    Milky2018$selene$system$$Entity$destroy(thunderEntity);
  }, true);
}
function username$Survivors$$updateWeaponTwo(delta) {
  if (username$Survivors$$gameState.gameOver) {
    return undefined;
  }
  if (!username$Survivors$$weaponTwoData.learn) {
    return undefined;
  }
  if (username$Survivors$$weaponTwoData.timer > 0) {
    username$Survivors$$weaponTwoData.timer = username$Survivors$$weaponTwoData.timer - delta;
  }
  if (username$Survivors$$weaponTwoData.timer <= 0) {
    username$Survivors$$weaponTwoData.timer = 1.5 / username$Survivors$$weaponTwoData.speed;
    const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.playerEntity);
    if (_bind$8 === undefined) {
      $panic();
      return;
    } else {
      const _Some = _bind$8;
      const _player_pos = _Some;
      const nearest_enemy_pos = username$Survivors$$findNearestEnemyPosition(_player_pos);
      if (nearest_enemy_pos === undefined) {
        return;
      } else {
        const _Some$2 = nearest_enemy_pos;
        const _enemy_pos = _Some$2;
        username$Survivors$$weaponTwoAttack(_enemy_pos);
        return;
      }
    }
  } else {
    return;
  }
}
function username$Survivors$$weaponThreeAttack(targetPos) {
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture$46$inner(Milky2018$selene$sprite$$Picture$new({ _0: 32, _1: 32 }, "Sprites/WeaponThree.png", undefined, username$Survivors$$weaponThreeAttack$46$constr$47$3365), 11, { _0: -16, _1: -16 }));
  const playerPos = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.playerEntity);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, playerPos);
  const _p = Milky2018$selene$math$$Vec2D$normalize({ _0: targetPos._0 - playerPos._0, _1: targetPos._1 - playerPos._1 });
  const _p$2 = 210;
  const vel = { _0: _p._0 * _p$2, _1: _p._1 * _p$2 };
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, entity, vel);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 18, _1: 18 }, { _0: -9, _1: -9 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, username$Survivors$$bullet_collision_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new([username$Survivors$$wallCollisionLayer]));
  const area = Milky2018$selene$collision$$Area$new([username$Survivors$$enemyCollisionLayer]);
  Milky2018$selene$collision$$Area$on_enter(area, (enemyEntity) => {
    if (moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity).hurt) {
      return undefined;
    }
    username$Survivors$$enemyHurt(enemyEntity, username$Survivors$$weaponThreeData.damage);
  });
  moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$areas, entity, area);
  Milky2018$selene$system$$timeout$46$inner(0.5, () => {
    Milky2018$selene$system$$Entity$destroy(entity);
  }, true);
}
function username$Survivors$$updateWeaponThree(delta) {
  if (username$Survivors$$gameState.gameOver) {
    return undefined;
  }
  if (!username$Survivors$$weaponThreeData.learn) {
    return undefined;
  }
  if (username$Survivors$$weaponThreeData.timer > 0) {
    username$Survivors$$weaponThreeData.timer = username$Survivors$$weaponThreeData.timer - delta;
  }
  if (username$Survivors$$weaponThreeData.timer <= 0) {
    username$Survivors$$weaponThreeData.timer = 1;
    const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.playerEntity);
    if (_bind$8 === undefined) {
      $panic();
      return;
    } else {
      const _Some = _bind$8;
      const _player_pos = _Some;
      const nearest_enemy_pos = username$Survivors$$findNearestEnemyPosition(_player_pos);
      if (nearest_enemy_pos === undefined) {
        return;
      } else {
        const _Some$2 = nearest_enemy_pos;
        const _enemy_pos = _Some$2;
        username$Survivors$$weaponThreeAttack(_enemy_pos);
        return;
      }
    }
  } else {
    return;
  }
}
function username$Survivors$$addWeapon() {
  username$Survivors$$weaponOneData.count = username$Survivors$$weaponOneData.count + 1 | 0;
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$array$$Array$push$3$(username$Survivors$$weaponOneData.entitys, entity);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, username$Survivors$$weaponOne);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, { _0: 480, _1: 360 });
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 7, _1: 18 }, { _0: -3.5, _1: -9 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, username$Survivors$$bullet_collision_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new([username$Survivors$$enemyCollisionLayer, username$Survivors$$wallCollisionLayer]));
  const area = Milky2018$selene$collision$$Area$new([username$Survivors$$enemyCollisionLayer]);
  Milky2018$selene$collision$$Area$on_enter(area, (enemyEntity) => {
    if (moonbitlang$core$builtin$$Map$at$18$(username$Survivors$$enemies, enemyEntity).hurt) {
      return undefined;
    }
    username$Survivors$$enemyHurt(enemyEntity, username$Survivors$$weaponOneData.damage);
  });
  moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$areas, entity, area);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < username$Survivors$$weaponOneData.count) {
      moonbitlang$core$builtin$$Map$set$17$(username$Survivors$$weaponOneDegreeMap, moonbitlang$core$array$$Array$at$3$(username$Survivors$$weaponOneData.entitys, i), 360 / (username$Survivors$$weaponOneData.count + 0) * (i + 0));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function username$Survivors$$updateWeapon(delta) {
  if (username$Survivors$$gameState.gameOver) {
    return undefined;
  }
  const _arr = username$Survivors$$weaponOneData.entitys;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      moonbitlang$core$builtin$$Map$set$17$(username$Survivors$$weaponOneDegreeMap, entity, moonbitlang$core$builtin$$Map$at$17$(username$Survivors$$weaponOneDegreeMap, entity) + 120 * username$Survivors$$weaponOneData.speed * delta);
      const weaponOne = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(Milky2018$selene$sprite$$Picture$new$46$inner({ _0: 7, _1: 18 }, "Sprites/WeaponOne.png", Milky2018$selene$math$$Transform$scale(Milky2018$selene$math$$Transform$from_rotation_deg(moonbitlang$core$builtin$$Map$at$17$(username$Survivors$$weaponOneDegreeMap, entity)), username$Survivors$$weaponOneData.size, username$Survivors$$weaponOneData.size), 2), 9, { _0: -3.5 * moonbitlang$core$math$$cos(moonbitlang$core$builtin$$Map$at$17$(username$Survivors$$weaponOneDegreeMap, entity) * 0.017453292519943295) * username$Survivors$$weaponOneData.size, _1: -3.5 * moonbitlang$core$math$$sin(moonbitlang$core$builtin$$Map$at$17$(username$Survivors$$weaponOneDegreeMap, entity) * 0.017453292519943295) * username$Survivors$$weaponOneData.size });
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, weaponOne);
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.playerEntity));
      moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 8 * username$Survivors$$weaponOneData.size, _1: 8 * username$Survivors$$weaponOneData.size }, { _0: (-4 - 14 * moonbitlang$core$math$$sin(moonbitlang$core$builtin$$Map$at$17$(username$Survivors$$weaponOneDegreeMap, entity) * 0.017453292519943295)) * username$Survivors$$weaponOneData.size, _1: (-4 + 14 * moonbitlang$core$math$$cos(moonbitlang$core$builtin$$Map$at$17$(username$Survivors$$weaponOneDegreeMap, entity) * 0.017453292519943295)) * username$Survivors$$weaponOneData.size }));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function username$Survivors$$getDieFrames(sprite_path, width, height) {
  const frames = [];
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 19, _1: 63 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 38, _1: 63 } });
  return frames;
}
function username$Survivors$$getIdleFrames(sprite_path, width, height) {
  const frames = [];
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 0, _1: 42 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 19, _1: 42 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 38, _1: 42 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 0, _1: 63 } });
  return frames;
}
function username$Survivors$$showVictory() {
  const entity = Milky2018$selene$system$$Entity$new();
  const text = Milky2018$selene$sprite$$Text$new$46$inner("游戏胜利！", "white", "24px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_text(text, 102, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, { _0: 75, _1: 100 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, entity, Milky2018$selene$ui$$Ui$new());
  const boxEntity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, boxEntity, Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 240, _1: 38 }, "gold"), 101, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, boxEntity, { _0: 0, _1: 90 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, boxEntity, Milky2018$selene$ui$$Ui$new());
}
function username$Survivors$$gameOver(victory) {
  username$Survivors$$gameState.gameOver = true;
  if (victory) {
    username$Survivors$$gameState.healthText.content = "游戏胜利~";
    Milky2018$selene$backend$$play_audio("Audio/Victory.mp3", 0.9, false);
    Milky2018$selene$sprite$$play_animation$46$inner(username$Survivors$$gameState.playerEntity, username$Survivors$$playerIdleAnimation, false, -1, Option$None$0$, undefined);
    username$Survivors$$showVictory();
  } else {
    username$Survivors$$gameState.healthText.content = "游戏结束~";
    Milky2018$selene$sprite$$play_animation$46$inner(username$Survivors$$gameState.playerEntity, username$Survivors$$playerDieAnimation, false, -1, Option$None$0$, undefined);
  }
  const _it = moonbitlang$core$builtin$$Map$iterator2$18$(username$Survivors$$enemies);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$18$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _e = _x._0;
      Milky2018$selene$system$$Entity$destroy(_e);
      continue;
    }
  }
  const _arr = username$Survivors$$weaponOneData.entitys;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(e);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, username$Survivors$$gameState.playerEntity, { _0: 0, _1: 0 });
}
function username$Survivors$$setHealth(health) {
  if (username$Survivors$$gameState.shield > 0 && username$Survivors$$gameState.health > health) {
    username$Survivors$$gameState.shield = username$Survivors$$gameState.shield - 1 | 0;
    Milky2018$selene$backend$$play_audio("Audio/Shield.wav", 0.5, false);
    return undefined;
  }
  if (username$Survivors$$gameState.health > health) {
    username$Survivors$$gameState.health = health;
    Milky2018$selene$backend$$play_audio("Audio/Hit.wav", 1, false);
    if (username$Survivors$$gameState.health <= 0) {
      username$Survivors$$gameOver(false);
      return;
    } else {
      username$Survivors$$gameState.healthText.content = `生命值: ${String(username$Survivors$$gameState.health)}`;
      return;
    }
  } else {
    username$Survivors$$gameState.health = health;
    username$Survivors$$gameState.healthText.content = `生命值: ${String(username$Survivors$$gameState.health)}`;
    Milky2018$selene$backend$$play_audio("Audio/Cure.wav", 0.5, false);
    return;
  }
}
function username$Survivors$$handleUpgrade(upgrade) {
  switch (upgrade) {
    case 1: {
      username$Survivors$$weaponOneData.damage = username$Survivors$$weaponOneData.damage + 5;
      if (username$Survivors$$weaponOneData.damage >= 35) {
        username$Survivors$$weaponOneData.damage = 35;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 1, false);
      }
      moonbitlang$core$builtin$$println$41$(username$Survivors$$weaponOneData.damage);
      return;
    }
    case 0: {
      username$Survivors$$weaponOneData.size = username$Survivors$$weaponOneData.size + 0.2;
      if (username$Survivors$$weaponOneData.size >= 3) {
        username$Survivors$$weaponOneData.size = 3;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 0, false);
      }
      moonbitlang$core$builtin$$println$41$(username$Survivors$$weaponOneData.size);
      return;
    }
    case 2: {
      if (username$Survivors$$weaponOneData.count === 0) {
        username$Survivors$$addWeapon();
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 1, true);
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 0, true);
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 3, true);
        return;
      } else {
        if (username$Survivors$$weaponOneData.count < 6) {
          username$Survivors$$addWeapon();
          return;
        } else {
          if (username$Survivors$$weaponOneData.count === 6) {
            username$Survivors$$addWeapon();
            moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 2, false);
            return;
          } else {
            return;
          }
        }
      }
    }
    case 3: {
      username$Survivors$$weaponOneData.speed = username$Survivors$$weaponOneData.speed + 0.4;
      if (username$Survivors$$weaponOneData.speed >= 3) {
        username$Survivors$$weaponOneData.speed = 3;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 3, false);
      }
      moonbitlang$core$builtin$$println$41$(username$Survivors$$weaponOneData.speed);
      return;
    }
    case 4: {
      username$Survivors$$weaponTwoData.learn = true;
      moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 4, false);
      moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 5, true);
      moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 6, true);
      return;
    }
    case 5: {
      username$Survivors$$weaponTwoData.damage = username$Survivors$$weaponTwoData.damage + 5;
      if (username$Survivors$$weaponTwoData.damage >= 45) {
        username$Survivors$$weaponTwoData.damage = 45;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 5, false);
        return;
      } else {
        return;
      }
    }
    case 6: {
      username$Survivors$$weaponTwoData.speed = username$Survivors$$weaponTwoData.speed + 0.2;
      if (username$Survivors$$weaponTwoData.speed >= 2) {
        username$Survivors$$weaponTwoData.speed = 2;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 6, false);
        return;
      } else {
        return;
      }
    }
    case 7: {
      username$Survivors$$weaponThreeData.learn = true;
      moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 7, false);
      moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 8, true);
      return;
    }
    case 8: {
      username$Survivors$$weaponThreeData.damage = username$Survivors$$weaponThreeData.damage + 6;
      if (username$Survivors$$weaponThreeData.damage >= 42) {
        username$Survivors$$weaponThreeData.damage = 42;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 8, false);
        return;
      } else {
        return;
      }
    }
    case 9: {
      username$Survivors$$gameState.speed = username$Survivors$$gameState.speed + 50;
      if (username$Survivors$$gameState.speed >= 400) {
        username$Survivors$$gameState.speed = 400;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 9, false);
        return;
      } else {
        return;
      }
    }
    case 10: {
      username$Survivors$$gameState.damageFactor = username$Survivors$$gameState.damageFactor + 0.2;
      if (username$Survivors$$gameState.damageFactor >= 2) {
        username$Survivors$$gameState.damageFactor = 2;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 10, false);
      }
      moonbitlang$core$builtin$$println$41$(username$Survivors$$gameState.damageFactor);
      return;
    }
    case 11: {
      if (username$Survivors$$gameState.health + 30 < 100) {
        username$Survivors$$setHealth(username$Survivors$$gameState.health + 30);
        return;
      } else {
        username$Survivors$$setHealth(100);
        return;
      }
    }
    case 12: {
      moonbitlang$core$builtin$$println$35$("获得100块灵石");
      return;
    }
    default: {
      username$Survivors$$gameState.shield = username$Survivors$$gameState.shield + 1 | 0;
      if (username$Survivors$$gameState.shield >= 5) {
        username$Survivors$$gameState.shield = 5;
        moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 13, false);
        return;
      } else {
        return;
      }
    }
  }
}
function username$Survivors$$resumeGame() {
  Milky2018$selene$backend$$set_time_scale(1);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.level_up_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.upgradeButton1Entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.upgradeButton2Entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.upgradeButton3Entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_icon1_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_icon2_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_icon3_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_bg1_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_bg2_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_bg3_entity);
}
function username$Survivors$$select_powerup(index) {
  moonbitlang$core$builtin$$println$35$(`选择了第${moonbitlang$core$builtin$$Show$to_string$20$(index + 1 | 0)}个升级`);
  if (index < username$Survivors$$upgradeUI.availableUpgrades.length) {
    const powerup = moonbitlang$core$array$$Array$at$33$(username$Survivors$$upgradeUI.availableUpgrades, index);
    username$Survivors$$handleUpgrade(powerup.theType);
  }
  username$Survivors$$resumeGame();
}
function username$Survivors$$setup_powerup_button_with_background(button_entity, icon_entity, bg_entity, index) {
  const button_y = 50 + (index + 0) * 25;
  const button_position = { _0: 50, _1: button_y };
  const bg_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 120, _1: 24 }, "gold"), 101, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, bg_entity, bg_sprite);
  const bg_position = { _0: 50, _1: button_y };
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, bg_entity, bg_position);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, bg_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button_entity, button_position);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button_entity, Milky2018$selene$ui$$Ui$new());
  const icon_position = { _0: 50, _1: button_y };
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, icon_entity, icon_position);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, icon_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button_entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 120, _1: 24 }, { _0: 0, _1: 0 }));
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_button) => {
    username$Survivors$$select_powerup(index);
  });
  moonbitlang$core$builtin$$Map$set$4$(Milky2018$selene$collision$$pickables, button_entity, pickable);
}
function username$Survivors$$setupUpgradeUI() {
  const level_up_sprite = Milky2018$selene$sprite$$Sprite$from_text(username$Survivors$$upgradeUI.level_up_box, 102, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, username$Survivors$$upgradeUI.level_up_entity, level_up_sprite);
  const level_up_position = { _0: 80, _1: 15 };
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, username$Survivors$$upgradeUI.level_up_entity, level_up_position);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, username$Survivors$$upgradeUI.level_up_entity, Milky2018$selene$ui$$Ui$new());
  username$Survivors$$setup_powerup_button_with_background(username$Survivors$$upgradeUI.upgradeButton1Entity, username$Survivors$$upgradeUI.powerup_icon1_entity, username$Survivors$$upgradeUI.powerup_bg1_entity, 0);
  username$Survivors$$setup_powerup_button_with_background(username$Survivors$$upgradeUI.upgradeButton2Entity, username$Survivors$$upgradeUI.powerup_icon2_entity, username$Survivors$$upgradeUI.powerup_bg2_entity, 1);
  username$Survivors$$setup_powerup_button_with_background(username$Survivors$$upgradeUI.upgradeButton3Entity, username$Survivors$$upgradeUI.powerup_icon3_entity, username$Survivors$$upgradeUI.powerup_bg3_entity, 2);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.level_up_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.upgradeButton1Entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.upgradeButton2Entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.upgradeButton3Entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_icon1_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_icon2_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_icon3_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_bg1_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_bg2_entity);
  Milky2018$selene$system$$Entity$destroy(username$Survivors$$upgradeUI.powerup_bg3_entity);
}
function username$Survivors$$enemyAI(_delta) {
  if (username$Survivors$$gameState.gameOver) {
    return undefined;
  }
  const _it = moonbitlang$core$builtin$$Map$iterator2$18$(username$Survivors$$enemies);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$18$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _e = _x._0;
      const _state = _x._1;
      if (Milky2018$selene$system$$Entity$is_alive(_e)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.playerEntity);
        if (_bind$9 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$9;
          const _playerPosition = _Some$2;
          const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
          if (_bind$10 === undefined) {
            $panic();
          } else {
            const _Some$3 = _bind$10;
            const _position = _Some$3;
            if (!_state.hurt) {
              const dir = { _0: _playerPosition._0 - _position._0, _1: _playerPosition._1 - _position._1 };
              const _p = Milky2018$selene$math$$Vec2D$normalize(dir);
              const _p$2 = _state.speed;
              const vel = { _0: _p._0 * _p$2, _1: _p._1 * _p$2 };
              moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, _e, vel);
              if (Milky2018$selene$math$$Vec2D$op_get(vel, 0) < 0) {
                const transform = Milky2018$selene$math$$Transform$flip_x(18);
                Milky2018$selene$sprite$$play_animation$46$inner(_e, _state.runAnim, false, -1, Option$None$0$, transform);
              } else {
                const transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
                Milky2018$selene$sprite$$play_animation$46$inner(_e, _state.runAnim, false, -1, Option$None$0$, transform);
              }
            } else {
              const dir = { _0: _position._0 - _playerPosition._0, _1: _position._1 - _playerPosition._1 };
              const _p = Milky2018$selene$math$$Vec2D$normalize(dir);
              const _p$2 = 200;
              const vel = { _0: _p._0 * _p$2, _1: _p._1 * _p$2 };
              moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, _e, vel);
            }
          }
        }
      } else {
        continue;
      }
      continue;
    }
  }
}
function username$Survivors$$addBackground(size) {
  const background = Milky2018$selene$system$$Entity$new();
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new(size, "Sprites/Grass.png", undefined, username$Survivors$$addBackground$46$constr$47$3451), 0, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, background, background_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, background, { _0: 0, _1: 0 });
}
function username$Survivors$$addBorder$46$add_one_border$124$90(pos, size) {
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, username$Survivors$$wallCollisionLayer);
  const collider = Milky2018$selene$collision$$Collider$new([]);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, collider);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(size, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, pos);
}
function username$Survivors$$addBorder(size) {
  username$Survivors$$addBorder$46$add_one_border$124$90({ _0: -16, _1: -16 }, { _0: Milky2018$selene$math$$Vec2D$op_get(size, 0) + 32, _1: 16 });
  username$Survivors$$addBorder$46$add_one_border$124$90({ _0: -16, _1: 0 }, { _0: 16, _1: Milky2018$selene$math$$Vec2D$op_get(size, 1) });
  username$Survivors$$addBorder$46$add_one_border$124$90({ _0: -16, _1: Milky2018$selene$math$$Vec2D$op_get(size, 1) }, { _0: Milky2018$selene$math$$Vec2D$op_get(size, 0) + 32, _1: 16 });
  username$Survivors$$addBorder$46$add_one_border$124$90({ _0: Milky2018$selene$math$$Vec2D$op_get(size, 0), _1: 0 }, { _0: 16, _1: Milky2018$selene$math$$Vec2D$op_get(size, 1) });
}
function username$Survivors$$addCover() {
  const entity = username$Survivors$$gameState.coverEntity;
  const sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(Milky2018$selene$sprite$$Picture$new$46$inner({ _0: 1053, _1: 790 }, "Sprites/Cover.png", Milky2018$selene$math$$Transform$from_scale(0.25, 0.25), 2), 200, { _0: -120, _1: -90 });
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, { _0: 480, _1: 360 });
  Milky2018$selene$backend$$set_time_scale(0);
}
function username$Survivors$$addExpBar() {
  const entity = username$Survivors$$gameState.expBarEntity;
  const backgroundEntity = Milky2018$selene$system$$Entity$new();
  const sprite = username$Survivors$$gameState.expBar;
  const backgroundSprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 240, _1: 2 }, "black"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, backgroundEntity, backgroundSprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, { _0: -240, _1: 0 });
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, backgroundEntity, { _0: 0, _1: 0 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, backgroundEntity, Milky2018$selene$ui$$Ui$new());
}
function username$Survivors$$addExpText() {
  const entity = Milky2018$selene$system$$Entity$new();
  const sprite = Milky2018$selene$sprite$$Sprite$from_text(username$Survivors$$gameState.expText, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, { _0: 6, _1: 12 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, entity, Milky2018$selene$ui$$Ui$new());
}
function username$Survivors$$addGrass(pos) {
  const temp = moonbitlang$core$random$$Rand$double(username$Survivors$$rand);
  if (temp > 0.9) {
    const grass = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, grass, username$Survivors$$flower);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, grass, { _0: Milky2018$selene$math$$Vec2D$op_get(pos, 0) * 18, _1: Milky2018$selene$math$$Vec2D$op_get(pos, 1) * 18 });
    return;
  } else {
    return;
  }
}
function username$Survivors$$addHealthText() {
  const entity = Milky2018$selene$system$$Entity$new();
  const sprite = Milky2018$selene$sprite$$Sprite$from_text(username$Survivors$$gameState.healthText, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, { _0: 6, _1: 6 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, entity, Milky2018$selene$ui$$Ui$new());
}
function username$Survivors$$addPlayer() {
  const entity = username$Survivors$$gameState.playerEntity;
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_animation$46$inner(username$Survivors$$playerIdleAnimation, 10, { _0: -9, _1: -10 }));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, { _0: 480, _1: 360 });
  const shadowEntity = username$Survivors$$gameState.shadowEntity;
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, shadowEntity, Milky2018$selene$sprite$$Sprite$from_picture$46$inner(Milky2018$selene$sprite$$Picture$new$46$inner({ _0: 10, _1: 6 }, "Sprites/Shadow.png", Milky2018$selene$math$$Transform$from_scale(1.2, 1.2), 2), 8, { _0: -6, _1: 6 }));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, shadowEntity, { _0: 480, _1: 360 });
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, entity, { _0: 0, _1: 0 });
  Milky2018$selene$camera$$attach_entity(entity, { _0: 9, _1: 10 });
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, username$Survivors$$playerCollisionLayer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new([username$Survivors$$enemyCollisionLayer, username$Survivors$$wallCollisionLayer]));
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 13, _1: 13 }, { _0: -6.5, _1: -6.5 }));
}
function username$Survivors$$getUpgrade() {
  moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 2, true);
  moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 4, true);
  moonbitlang$core$builtin$$Map$set$16$(username$Survivors$$allTypes, 7, true);
}
function username$Survivors$$gameStart(_delta) {
  Milky2018$selene$backend$$preload_audio("Audio/Rise.wav");
  Milky2018$selene$backend$$load_font("ThaleahFat", "ThaleahFat.ttf");
  Milky2018$selene$camera$$set_limits(username$Survivors$$gameStart$46$constr$47$3475, username$Survivors$$gameStart$46$constr$47$3476, username$Survivors$$gameStart$46$constr$47$3477, username$Survivors$$gameStart$46$constr$47$3478);
  username$Survivors$$addCover();
  username$Survivors$$addPlayer();
  username$Survivors$$addHealthText();
  username$Survivors$$addExpText();
  username$Survivors$$addExpBar();
  username$Survivors$$addBackground({ _0: 960, _1: 720 });
  username$Survivors$$addBorder({ _0: 960, _1: 720 });
  let _tmp = 0;
  while (true) {
    const x = _tmp;
    if (x <= 50) {
      let _tmp$2 = 0;
      while (true) {
        const y = _tmp$2;
        if (y <= 50) {
          username$Survivors$$addGrass({ _0: x, _1: y });
          _tmp$2 = y + 1;
          continue;
        } else {
          break;
        }
      }
      _tmp = x + 1;
      continue;
    } else {
      break;
    }
  }
  username$Survivors$$getUpgrade();
  username$Survivors$$setupUpgradeUI();
}
function username$Survivors$$getRunFrames(sprite_path, width, height) {
  const frames = [];
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 0, _1: 0 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 19, _1: 0 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 38, _1: 0 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 0, _1: 21 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 19, _1: 21 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 38, _1: 21 } });
  return frames;
}
function username$Survivors$$inputSystem(_delta) {
  if (username$Survivors$$gameState.gameOver) {
    return undefined;
  }
  const _p = Milky2018$selene$math$$Vec2D$normalize(Milky2018$selene$inputs$$key_vector(22, 18, 0, 3));
  const _p$2 = username$Survivors$$gameState.speed;
  const vel = { _0: _p._0 * _p$2, _1: _p._1 * _p$2 };
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, username$Survivors$$gameState.playerEntity, vel);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.shadowEntity, moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, username$Survivors$$gameState.playerEntity));
  const _p$3 = { _0: 0, _1: 0 };
  if (!(vel._0 === _p$3._0 && vel._1 === _p$3._1)) {
    if (Milky2018$selene$math$$Vec2D$op_get(vel, 0) < 0) {
      const transform = Milky2018$selene$math$$Transform$flip_x(18);
      Milky2018$selene$sprite$$play_animation$46$inner(username$Survivors$$gameState.playerEntity, username$Survivors$$playerRunAnimation, false, -1, Option$None$0$, transform);
    } else {
      const transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
      Milky2018$selene$sprite$$play_animation$46$inner(username$Survivors$$gameState.playerEntity, username$Survivors$$playerRunAnimation, false, -1, Option$None$0$, transform);
    }
  } else {
    Milky2018$selene$sprite$$play_animation$46$inner(username$Survivors$$gameState.playerEntity, username$Survivors$$playerIdleAnimation, false, -1, Option$None$0$, undefined);
  }
  if (Milky2018$selene$inputs$$is_just_pressed(16)) {
    username$Survivors$$upgrade();
  }
  if (Milky2018$selene$inputs$$is_mouse_just_pressed(0) && username$Survivors$$gameState.playing === false) {
    username$Survivors$$gameState.playing = true;
    Milky2018$selene$backend$$set_time_scale(1);
    Milky2018$selene$backend$$play_audio("Audio/Rise.mp3", 0.45, true);
    Milky2018$selene$system$$Entity$destroy(username$Survivors$$gameState.coverEntity);
    username$Survivors$$upgrade();
    return;
  } else {
    return;
  }
}
function username$Survivors$$getEnemyHurtFrames(sprite_path, width, height) {
  const frames = [];
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 0, _1: 38 } });
  return frames;
}
function username$Survivors$$getEnemyRunFrames(sprite_path, width, height) {
  const frames = [];
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 0, _1: 0 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 19, _1: 0 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 38, _1: 0 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 0, _1: 19 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 19, _1: 19 } });
  moonbitlang$core$array$$Array$push$31$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: { _0: 38, _1: 19 } });
  return frames;
}
function username$Survivors$$spawnEnemySystem$46$spawn_enemy$124$30() {
  if (username$Survivors$$gameState.gameOver) {
    return undefined;
  }
  const enemy = Milky2018$selene$system$$Entity$new();
  const enemyState = moonbitlang$core$array$$Array$at$28$(username$Survivors$$enemiesData, moonbitlang$core$random$$Rand$int$46$inner(username$Survivors$$rand, username$Survivors$$enemiesData.length));
  moonbitlang$core$builtin$$Map$set$18$(username$Survivors$$enemies, enemy, { speed: enemyState.speed, health: enemyState.health * (1 + username$Survivors$$gameState.timer / 60), hurt: enemyState.hurt, runAnim: enemyState.runAnim, hurtAnim: enemyState.hurtAnim });
  const pos = moonbitlang$core$array$$Array$at$29$(username$Survivors$$spawners, moonbitlang$core$random$$Rand$int$46$inner(username$Survivors$$rand, username$Survivors$$spawners.length));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, enemy, pos);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, enemy, { _0: 0, _1: 0 });
  const sprite = Milky2018$selene$sprite$$Sprite$from_animation$46$inner(enemyState.runAnim, 10, { _0: -9, _1: -9 });
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, enemy, sprite);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, enemy, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 13, _1: 13 }, { _0: -6.5, _1: -6.5 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, enemy, username$Survivors$$enemyCollisionLayer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, enemy, Milky2018$selene$collision$$Collider$new([username$Survivors$$enemyCollisionLayer, username$Survivors$$wallCollisionLayer]));
  const area = Milky2018$selene$collision$$Area$new([username$Survivors$$playerCollisionLayer]);
  moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$areas, enemy, area);
  Milky2018$selene$collision$$Area$on_enter(area, (e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _p = username$Survivors$$gameState.playerEntity;
      if (e === _p) {
        if (username$Survivors$$gameState.invincible) {
          return undefined;
        }
        username$Survivors$$gameState.invincible = true;
        username$Survivors$$setHealth(username$Survivors$$gameState.health - 10);
        Milky2018$selene$system$$timeout$46$inner(0.5, () => {
          username$Survivors$$gameState.invincible = false;
        }, true);
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  });
  Milky2018$selene$system$$timeout$46$inner(1 / (1 + username$Survivors$$gameState.timer / 30), username$Survivors$$spawnEnemySystem$46$spawn_enemy$124$30, true);
}
function username$Survivors$$spawnEnemySystem(_delta) {
  username$Survivors$$spawnEnemySystem$46$spawn_enemy$124$30();
}
function username$Survivors$$timerSystem(delta) {
  if (username$Survivors$$gameState.gameOver) {
    return undefined;
  }
  username$Survivors$$gameState.timer = username$Survivors$$gameState.timer + delta;
  username$Survivors$$gameState.timerInt = moonbitlang$core$double$$Double$to_int(moonbitlang$core$double$$Double$floor(username$Survivors$$gameState.timer));
  if (username$Survivors$$gameState.timerInt >= 90) {
    username$Survivors$$gameOver(true);
    username$Survivors$$gameState.timer = 0;
    username$Survivors$$gameState.timerInt = 0;
    return;
  } else {
    return;
  }
}
(() => {
  moonbitlang$core$builtin$$println$35$("开始");
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_zoom(Milky2018$selene$system$$App$with_image_smooth(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$new(), 720), 960), false), 4), 60), Milky2018$selene$plugins$$default_plugin), username$Survivors$$gameStart, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), username$Survivors$$spawnEnemySystem, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), username$Survivors$$enemyAI, undefined, undefined), username$Survivors$$timerSystem, undefined, undefined), username$Survivors$$inputSystem, undefined, undefined), username$Survivors$$updateWeapon, undefined, undefined), username$Survivors$$updateWeaponTwo, undefined, undefined), username$Survivors$$updateWeaponThree, undefined, undefined));
})();
