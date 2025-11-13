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
const Option$None$9$ = { $tag: 0 };
function Option$Some$9$(param0) {
  this._0 = param0;
}
Option$Some$9$.prototype.$tag = 1;
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
const $64$Milky2018$47$selene$47$system$46$Schedule$Startup = { $tag: 0 };
const $64$Milky2018$47$selene$47$system$46$Schedule$Update = { $tag: 1 };
function $64$Milky2018$47$selene$47$system$46$Schedule$Render(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$tag = 2;
function $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect.prototype.$tag = 0;
function FlowModeDisplayState$Score(param0) {
  this._0 = param0;
}
FlowModeDisplayState$Score.prototype.$tag = 0;
const FlowModeDisplayState$Flowing = { $tag: 1 };
const Milky2018$selene$inputs$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$inputs$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$collision$$collision_layer_generator = { val: 0 };
const lnkfish$$level_cheng_obstacles = [{ obstacle_type: 0, variant: 0, x_position: 200, delay: 1.5 }, { obstacle_type: 1, variant: 1, x_position: 400, delay: 1 }, { obstacle_type: 1, variant: 0, x_position: 200, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 250, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.5 }, { obstacle_type: 1, variant: 1, x_position: 400, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 200, delay: 0.5 }, { obstacle_type: 1, variant: 1, x_position: 250, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 200, delay: 0.5 }, { obstacle_type: 0, variant: 1, x_position: 350, delay: 2.5 }, { obstacle_type: 1, variant: 0, x_position: 250, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.5 }, { obstacle_type: 1, variant: 1, x_position: 400, delay: 1 }, { obstacle_type: 0, variant: 1, x_position: 200, delay: 1.5 }, { obstacle_type: 0, variant: 1, x_position: 400, delay: 1.5 }, { obstacle_type: 1, variant: 1, x_position: 400, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 200, delay: 0.5 }, { obstacle_type: 0, variant: 0, x_position: 400, delay: 0.5 }];
const lnkfish$$level_cheng_taiji = [{ x_position: 250, delay: 1 }, { x_position: 450, delay: 3 }, { x_position: 250, delay: 1 }, { x_position: 250, delay: 8 }, { x_position: 200, delay: 2 }, { x_position: 350, delay: 1.5 }];
const lnkfish$$level_he_obstacles = [{ obstacle_type: 2, variant: 0, x_position: 250, delay: 0.5 }, { obstacle_type: 0, variant: 0, x_position: 300, delay: 1.75 }, { obstacle_type: 1, variant: 1, x_position: 200, delay: 1.5 }, { obstacle_type: 0, variant: 1, x_position: 360, delay: 1.1 }, { obstacle_type: 1, variant: 0, x_position: 350, delay: 1 }, { obstacle_type: 2, variant: 0, x_position: 220, delay: 1.5 }, { obstacle_type: 0, variant: 0, x_position: 380, delay: 1.3 }, { obstacle_type: 0, variant: 1, x_position: 440, delay: 0 }, { obstacle_type: 2, variant: 0, x_position: 320, delay: 2.5 }, { obstacle_type: 0, variant: 1, x_position: 280, delay: 1.7 }, { obstacle_type: 0, variant: 1, x_position: 330, delay: 1.2 }, { obstacle_type: 2, variant: 1, x_position: 410, delay: 0.5 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 400, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.5 }, { obstacle_type: 0, variant: 0, x_position: 200, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 400, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 400, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 400, delay: 2 }, { obstacle_type: 0, variant: 1, x_position: 340, delay: 1.1 }, { obstacle_type: 1, variant: 1, x_position: 430, delay: 1 }, { obstacle_type: 2, variant: 0, x_position: 350, delay: 2 }, { obstacle_type: 2, variant: 1, x_position: 350, delay: 2 }];
const lnkfish$$level_he_taiji = [{ x_position: 400, delay: 4 }, { x_position: 450, delay: 4.2 }, { x_position: 370, delay: 4.5 }, { x_position: 420, delay: 3.8 }, { x_position: 390, delay: 3 }, { x_position: 460, delay: 3.5 }, { x_position: 330, delay: 3 }];
const lnkfish$$level_qi_obstacles = [{ obstacle_type: 0, variant: 0, x_position: 200, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 400, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 400, delay: 2 }, { obstacle_type: 1, variant: 0, x_position: 200, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 350, delay: 2.5 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 250, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 250, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1 }, { obstacle_type: 0, variant: 0, x_position: 200, delay: 1.5 }, { obstacle_type: 0, variant: 0, x_position: 400, delay: 2 }];
const lnkfish$$level_qi_taiji = [{ x_position: 300, delay: 5 }, { x_position: 450, delay: 6.5 }];
const lnkfish$$level_zhuan_obstacles = [{ obstacle_type: 0, variant: 1, x_position: 250, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 300, delay: 1 }, { obstacle_type: 2, variant: 0, x_position: 250, delay: 2.2 }, { obstacle_type: 1, variant: 1, x_position: 320, delay: 1.8 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.4 }, { obstacle_type: 0, variant: 0, x_position: 380, delay: 1.6 }, { obstacle_type: 1, variant: 1, x_position: 360, delay: 1.5 }, { obstacle_type: 2, variant: 1, x_position: 440, delay: 1.3 }, { obstacle_type: 0, variant: 0, x_position: 300, delay: 1.4 }, { obstacle_type: 2, variant: 1, x_position: 470, delay: 1.7 }, { obstacle_type: 1, variant: 1, x_position: 330, delay: 1.3 }, { obstacle_type: 2, variant: 1, x_position: 250, delay: 1.5 }, { obstacle_type: 1, variant: 0, x_position: 460, delay: 1.2 }, { obstacle_type: 0, variant: 0, x_position: 350, delay: 1.4 }, { obstacle_type: 2, variant: 0, x_position: 320, delay: 1.3 }, { obstacle_type: 1, variant: 0, x_position: 380, delay: 2.2 }, { obstacle_type: 0, variant: 0, x_position: 400, delay: 1.3 }, { obstacle_type: 2, variant: 1, x_position: 410, delay: 1.4 }, { obstacle_type: 1, variant: 1, x_position: 440, delay: 1.6 }, { obstacle_type: 0, variant: 0, x_position: 370, delay: 1.2 }, { obstacle_type: 2, variant: 0, x_position: 350, delay: 1.3 }, { obstacle_type: 1, variant: 0, x_position: 460, delay: 1.1 }, { obstacle_type: 0, variant: 0, x_position: 400, delay: 2.3 }, { obstacle_type: 2, variant: 1, x_position: 430, delay: 1.4 }];
const lnkfish$$level_zhuan_taiji = [{ x_position: 400, delay: 3.5 }, { x_position: 450, delay: 4 }, { x_position: 380, delay: 3.5 }, { x_position: 420, delay: 3.8 }, { x_position: 410, delay: 3.2 }, { x_position: 390, delay: 3.5 }];
const lnkfish$$ui_system$46$retry_content$124$517 = "按下空格以重试";
const lnkfish$$ui_system$46$hint_content$124$533 = "按下空格以开始";
const lnkfish$$ui_system$46$border_color$124$571 = "rgba(255, 215, 0, 0.8)";
const lnkfish$$ui_system$46$pause_text$124$581 = "停";
const lnkfish$$bgm_game = "sounds/gamebgm.WAV";
const lnkfish$$bgm_menu = "sounds/menubgm.WAV";
const lnkfish$$sfx_flow_in = "sounds/flowin.WAV";
const lnkfish$$sfx_flow_out = "sounds/flowout.WAV";
const lnkfish$$black_v1_x_range = { _0: 300, _1: 500 };
const lnkfish$$black_v2_x_range = { _0: 300, _1: 400 };
const lnkfish$$red_x_range = { _0: 350, _1: 500 };
const lnkfish$$white_v1_x_range = { _0: 350, _1: 500 };
const lnkfish$$white_v2_x_range = { _0: 300, _1: 500 };
const lnkfish$$sfx_die = "sounds/die.WAV";
const lnkfish$$sfx_coin = "sounds/coin.wav";
const lnkfish$$taiji_delay_range = { _0: 3, _1: 6 };
const lnkfish$$taiji_x_range = { _0: 350, _1: 500 };
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
const Milky2018$selene$backend$$audio_cache = moonbitlang$core$builtin$$Map$new$46$inner$16$(8);
const lnkfish$$current_bgm_path = moonbitlang$core$ref$$Ref$new$17$(undefined);
const lnkfish$$bgm_enabled = moonbitlang$core$ref$$Ref$new$18$(true);
const lnkfish$$game_state = moonbitlang$core$ref$$Ref$new$19$(0);
const lnkfish$$loading_initialized = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$loading_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$menu_title_picture = Milky2018$selene$sprite$$Picture$new({ _0: 555, _1: 175 }, "assets/menu_title.png", undefined, undefined);
const Milky2018$selene$sprite$$animation_generator = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$menu_fishfish_animation = Milky2018$selene$sprite$$Animation$new$46$inner(Milky2018$selene$sprite$$frames_from_atlas("assets/meun_fish.png", 30, 360, 360, undefined, Option$None$0$), true, 5, Milky2018$selene$math$$Transform$from_scale(0.6, 0.6));
const lnkfish$$current_level_index = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$is_endless_mode = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$button_states = moonbitlang$core$builtin$$Map$new$46$inner$22$(8);
const lnkfish$$menu_button_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$main_menu_initialized = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$all_levels = [{ obstacle_sequence: lnkfish$$level_qi_obstacles, taiji_sequence: lnkfish$$level_qi_taiji, name: "起", description: "旋转躲避  ☯ 异色相撞" }, { obstacle_sequence: lnkfish$$level_cheng_obstacles, taiji_sequence: lnkfish$$level_cheng_taiji, name: "承", description: "三生万物  ☯ 黑白可越" }, { obstacle_sequence: lnkfish$$level_zhuan_obstacles, taiji_sequence: lnkfish$$level_zhuan_taiji, name: "转", description: "三色交汇  ☯ 朱砂禁行" }, { obstacle_sequence: lnkfish$$level_he_obstacles, taiji_sequence: lnkfish$$level_he_taiji, name: "合", description: "变化无常  ☯ 万象归一" }];
const lnkfish$$level_select_initialized = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$level_select_button_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$last_generated_obstacle = moonbitlang$core$ref$$Ref$new$23$(undefined);
const lnkfish$$game_settings_initialized = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$sfx_enabled = moonbitlang$core$ref$$Ref$new$18$(true);
const lnkfish$$current_rotation_speed_level = moonbitlang$core$ref$$Ref$new$24$(1);
const lnkfish$$game_settings_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$help_initialized = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$help_text_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$leaderboard_ui_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$leaderboard_entries = moonbitlang$core$ref$$Ref$new$25$(moonbitlang$core$array$$Array$new$46$inner$26$(0));
const lnkfish$$leaderboard_initialized = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$visual_entity = moonbitlang$core$ref$$Ref$new$27$(undefined);
const lnkfish$$white_fish_layer = Milky2018$selene$collision$$CollisionLayer$new();
const lnkfish$$black_obstacle_layer = Milky2018$selene$collision$$CollisionLayer$new();
const lnkfish$$initial_offsets = moonbitlang$core$builtin$$Map$new$46$inner$28$(8);
const lnkfish$$drift_animation = Milky2018$selene$sprite$$Animation$new$46$inner(Milky2018$selene$sprite$$frames_from_atlas("assets/sprite.png", 8, 1030, 1030, undefined, Option$None$0$), true, 2, Milky2018$selene$math$$Transform$from_scale(0.25, 0.25));
const lnkfish$$fish_colliders = moonbitlang$core$builtin$$Map$new$46$inner$29$(8);
const lnkfish$$black_fish_layer = Milky2018$selene$collision$$CollisionLayer$new();
const lnkfish$$collider_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$taiji_layer = Milky2018$selene$collision$$CollisionLayer$new();
const lnkfish$$red_obstacle_layer = Milky2018$selene$collision$$CollisionLayer$new();
const lnkfish$$white_obstacle_layer = Milky2018$selene$collision$$CollisionLayer$new();
const lnkfish$$game_ready_initialized = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$current_rotation_speed = moonbitlang$core$ref$$Ref$new$30$(0);
const lnkfish$$time_score_accumulator = moonbitlang$core$ref$$Ref$new$30$(0);
const lnkfish$$score = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$taiji_spawn_timer = moonbitlang$core$ref$$Ref$new$30$(0);
const lnkfish$$level_current_index = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$game_session_id = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$rand_seed = moonbitlang$core$ref$$Ref$new$21$(12345);
const lnkfish$$flow_mode_entity = moonbitlang$core$ref$$Ref$new$27$(undefined);
const lnkfish$$flow_mode_score = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$ui_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$current_angle = moonbitlang$core$ref$$Ref$new$30$(0);
const lnkfish$$game_won_timer_set = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$taiji_level_current_index = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$obstacle_spawn_timer = moonbitlang$core$ref$$Ref$new$30$(0);
const lnkfish$$pause_menu_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$is_in_flow_mode = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$score_saved_to_leaderboard = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$obstacle_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$taiji_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$reset_counter = moonbitlang$core$ref$$Ref$new$21$(0);
const lnkfish$$swim_animation = Milky2018$selene$sprite$$Animation$new$46$inner(Milky2018$selene$sprite$$frames_from_atlas("assets/sprite.png", 8, 1030, 1030, undefined, Option$None$0$), true, 4, Milky2018$selene$math$$Transform$from_scale(0.25, 0.25));
const lnkfish$$swim_counter_animation = Milky2018$selene$sprite$$Animation$new$46$inner(Milky2018$selene$sprite$$frames_from_atlas("assets/sprite_counter.png", 8, 1030, 1030, undefined, Option$None$0$), true, 4, Milky2018$selene$math$$Transform$from_scale(0.25, 0.25));
const lnkfish$$last_flow_mode_state = moonbitlang$core$ref$$Ref$new$18$(false);
const lnkfish$$flow_mode_state = moonbitlang$core$builtin$$Map$new$46$inner$31$(8);
const lnkfish$$obstacles = moonbitlang$core$builtin$$Map$new$46$inner$32$(8);
const lnkfish$$white_obstacle_v1_hit_picture = Milky2018$selene$sprite$$Picture$new({ _0: 160, _1: 160 }, "assets/white1_hit.png", undefined, undefined);
const lnkfish$$black_obstacle_v1_hit_picture = Milky2018$selene$sprite$$Picture$new({ _0: 240, _1: 90 }, "assets/black1_hit.png", undefined, undefined);
const lnkfish$$black_obstacle_v2_hit_picture = Milky2018$selene$sprite$$Picture$new({ _0: 190, _1: 440 }, "assets/black2_hit.png", Milky2018$selene$math$$Transform$from_scale(0.75, 0.75), undefined);
const lnkfish$$white_obstacle_v2_hit_picture = Milky2018$selene$sprite$$Picture$new({ _0: 450, _1: 395 }, "assets/white2_hit.png", Milky2018$selene$math$$Transform$from_scale(0.5, 0.5), undefined);
const lnkfish$$time_score_rate = moonbitlang$core$ref$$Ref$new$30$(5);
const lnkfish$$red_obstacle_v2_picture = Milky2018$selene$sprite$$Picture$new({ _0: 333, _1: 333 }, "assets/red2.png", Milky2018$selene$math$$Transform$from_scale(0.25, 0.25), undefined);
const lnkfish$$red_obstacle_v1_picture = Milky2018$selene$sprite$$Picture$new({ _0: 333, _1: 333 }, "assets/red1.png", Milky2018$selene$math$$Transform$from_scale(0.25, 0.25), undefined);
const lnkfish$$black_obstacle_v1_picture = Milky2018$selene$sprite$$Picture$new({ _0: 240, _1: 90 }, "assets/black1.png", undefined, undefined);
const lnkfish$$black_obstacle_v2_picture = Milky2018$selene$sprite$$Picture$new({ _0: 190, _1: 440 }, "assets/black2.png", Milky2018$selene$math$$Transform$from_scale(0.75, 0.75), undefined);
const lnkfish$$white_obstacle_v1_picture = Milky2018$selene$sprite$$Picture$new({ _0: 160, _1: 160 }, "assets/white1.png", undefined, undefined);
const lnkfish$$white_obstacle_v2_picture = Milky2018$selene$sprite$$Picture$new({ _0: 450, _1: 395 }, "assets/white2.png", Milky2018$selene$math$$Transform$from_scale(0.5, 0.5), undefined);
const lnkfish$$taijis = moonbitlang$core$builtin$$Map$new$46$inner$33$(8);
const lnkfish$$taiji_animation = Milky2018$selene$sprite$$Animation$new$46$inner(Milky2018$selene$sprite$$frames_from_atlas("assets/taiji.png", 8, 243, 243, undefined, Option$None$0$), true, 8, Milky2018$selene$math$$Transform$from_scale(0.2, 0.2));
const lnkfish$$flowmode0_picture = Milky2018$selene$sprite$$Picture$new({ _0: 194, _1: 102 }, "assets/flow_mode0.png", undefined, undefined);
const lnkfish$$last_flow_mode_display_state = moonbitlang$core$ref$$Ref$new$34$(undefined);
const lnkfish$$paused_velocities = moonbitlang$core$builtin$$Map$new$46$inner$35$(8);
const lnkfish$$flowmode2_picture = Milky2018$selene$sprite$$Picture$new({ _0: 194, _1: 102 }, "assets/flow_mode2.png", undefined, undefined);
const lnkfish$$flowmode6s_animation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas("assets/flowmode6s.png", 24, 196, 102, undefined, Option$None$0$), true, new Option$Some$0$(4), undefined);
const lnkfish$$flow_mode_border_entities = moonbitlang$core$ref$$Ref$new$20$(moonbitlang$core$array$$Array$new$46$inner$4$(0));
const lnkfish$$flowmode1_picture = Milky2018$selene$sprite$$Picture$new({ _0: 194, _1: 102 }, "assets/flow_mode1.png", undefined, undefined);
const lnkfish$$flow_mode_ui_entity = moonbitlang$core$ref$$Ref$new$27$(undefined);
function moonbitlang$core$abort$$abort$36$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$37$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$38$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$21$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$39$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$40$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$Logger$write_object$41$(self, obj) {
  moonbitlang$core$builtin$$Show$output$41$(obj, self);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$42$(self, ch) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$19$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$19$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$34$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$43$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$44$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$44$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$4$(x, y) {
  return !(x === y);
}
function moonbitlang$core$array$$Array$at$45$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$46$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$47$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$48$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$26$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$49$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$42$(self, str) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$0$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$0$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$48$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$48$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$50$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$4$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$51$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$0$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$52$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$48$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$50$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$4$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$42$, method_1: moonbitlang$core$builtin$$Logger$write_substring$42$, method_2: moonbitlang$core$builtin$$Logger$write_char$42$ });
  return logger.val;
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
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$21$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$42$, method_1: moonbitlang$core$builtin$$Logger$write_substring$42$, method_2: moonbitlang$core$builtin$$Logger$write_char$42$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$21$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1906(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = (num >>> 0) / (radix >>> 0) | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1906(_env, num2);
  }
  const _tmp = (num >>> 0) % (radix >>> 0) | 0;
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$uint$$UInt$output$46$inner(self, logger, radix) {
  const radix$2 = radix;
  const _env = { _0: logger, _1: radix$2 };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1906(_env, self);
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
function moonbitlang$core$builtin$$Logger$write_substring$42$(self, str, start, len) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$output$41$(self, logger) {
  moonbitlang$core$uint$$UInt$output$46$inner(self, logger, 10);
}
function moonbitlang$core$builtin$$Eq$equal$53$(self, other) {
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
      return moonbitlang$core$builtin$$Eq$equal$54$(_x, _y);
    }
  }
}
function moonbitlang$core$option$$Option$unwrap$55$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$56$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$57$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$58$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$59$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$14$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$28$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$31$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$32$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$29$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$22$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$35$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$33$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$16$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$22$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$35$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$28$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$29$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$set_entry$31$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$22$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$35$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$28$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$29$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$32$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$33$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$push_away$31$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$31$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$31$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$22$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$22$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$22$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$35$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$35$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$35$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$28$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$28$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$28$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$29$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$29$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$29$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$32$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$32$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$32$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$33$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$33$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$33$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$set_with_hash$31$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$31$(self);
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
        moonbitlang$core$builtin$$Map$push_away$31$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, _idx, entry);
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
function moonbitlang$core$builtin$$Map$set_with_hash$22$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$22$(self);
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
        moonbitlang$core$builtin$$Map$push_away$22$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$22$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$35$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$35$(self);
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
        moonbitlang$core$builtin$$Map$push_away$35$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$35$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$28$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$28$(self);
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
        moonbitlang$core$builtin$$Map$push_away$28$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$28$(self, _idx, entry);
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
function moonbitlang$core$builtin$$Map$set_with_hash$29$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$29$(self);
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
        moonbitlang$core$builtin$$Map$push_away$29$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$29$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$32$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$32$(self);
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
        moonbitlang$core$builtin$$Map$push_away$32$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$33$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$33$(self);
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
        moonbitlang$core$builtin$$Map$push_away$33$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, _idx, entry);
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
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
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
function moonbitlang$core$builtin$$Map$grow$31$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$31$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$grow$22$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$22$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$35$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$35$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$28$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$28$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$grow$29$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$29$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$32$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$32$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$33$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$33$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$set$14$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$5$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$3$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$31$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$31$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$7$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$22$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$22$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$35$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$35$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$28$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$28$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$29$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$29$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$32$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$32$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$33$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$33$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$8$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$set$13$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$set$16$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$16$(self, key, value, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
function moonbitlang$core$builtin$$Map$get$28$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
function moonbitlang$core$builtin$$Map$get$31$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
function moonbitlang$core$builtin$$Map$get$32$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
function moonbitlang$core$builtin$$Map$get$29$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
function moonbitlang$core$builtin$$Map$get$8$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$13$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
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
function moonbitlang$core$builtin$$Map$get$16$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
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
      if (_entry.hash === hash && _entry.key === key) {
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
function moonbitlang$core$builtin$$Map$contains$32$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
function moonbitlang$core$builtin$$Map$remove_entry$31$(self, entry) {
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
function moonbitlang$core$builtin$$Map$remove_entry$7$(self, entry) {
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
function moonbitlang$core$builtin$$Map$shift_back$31$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$31$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$shift_back$7$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$7$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$31$(self, key, hash) {
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
        moonbitlang$core$builtin$$Map$remove_entry$31$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$31$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$7$(self, key, hash) {
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
        moonbitlang$core$builtin$$Map$remove_entry$7$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$7$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove$31$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$31$(self, key, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$builtin$$Map$remove$7$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$7$(self, key, moonbitlang$core$builtin$$Hash$hash$50$(key));
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$60$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$61$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$62$(self, value, start, end) {
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
function moonbitlang$core$builtin$$Map$clear$35$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$60$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$8$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$61$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter2$22$(self) {
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
function moonbitlang$core$builtin$$Map$iter2$2$(self) {
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
function moonbitlang$core$builtin$$Map$iter2$5$(self) {
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
function moonbitlang$core$array$$Array$push$37$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$63$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$64$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$65$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$4$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$47$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$66$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$67$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$26$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$39$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$11$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$49$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$68$(self, value) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$48$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$41$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$48$(input) {
  console.log(input);
}
function moonbitlang$core$array$$ArrayView$at$37$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$37$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$21$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$21$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$at$39$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$39$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$21$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$21$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$swap$37$(self, i, j) {
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
    moonbitlang$core$abort$$abort$36$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$21$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$21$(i)}, ${moonbitlang$core$builtin$$Show$to_string$21$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$swap$39$(self, i, j) {
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
    moonbitlang$core$abort$$abort$36$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$21$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$21$(i)}, ${moonbitlang$core$builtin$$Show$to_string$21$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$37$(self, start, end) {
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$38$("View index out of bounds");
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$39$(self, start, end) {
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$40$("View index out of bounds");
}
function moonbitlang$core$array$$Array$new$46$inner$4$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$47$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$26$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$11$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$15$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$68$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$4$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
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
function moonbitlang$core$array$$Array$set$26$(self, index, value) {
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
function moonbitlang$core$array$$Array$clear$4$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$4$(self, 0);
}
function moonbitlang$core$array$$Array$contains$4$(self, value) {
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
function moonbitlang$core$array$$Array$contains$69$(self, value) {
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
function moonbitlang$core$array$$bubble_sort_by$37$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1071) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$37$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$37$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$37$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$bubble_sort_by$39$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1071) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$39$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$39$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$39$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$ArrayView$rev_inplace$37$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$37$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$rev_inplace$39$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$39$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1751(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$37$(arr, a), moonbitlang$core$array$$ArrayView$at$37$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$37$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1752(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1751(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1751(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1751(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$37$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1752(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1752(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1752(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1752(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$37$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1771(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$39$(arr, a), moonbitlang$core$array$$ArrayView$at$39$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$39$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1772(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1771(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1771(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1771(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$39$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1772(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1772(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1772(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1772(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$39$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$sift_down_by$37$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$37$(arr, child), moonbitlang$core$array$$ArrayView$at$37$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$37$(arr, index$2), moonbitlang$core$array$$ArrayView$at$37$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$37$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$sift_down_by$39$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$39$(arr, child), moonbitlang$core$array$$ArrayView$at$39$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$39$(arr, index$2), moonbitlang$core$array$$ArrayView$at$39$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$39$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$37$(arr, cmp) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$37$(arr, i, cmp);
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
      moonbitlang$core$array$$ArrayView$swap$37$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$37$(moonbitlang$core$array$$ArrayView$sub$46$inner$37$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$39$(arr, cmp) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$39$(arr, i, cmp);
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
      moonbitlang$core$array$$ArrayView$swap$39$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$39$(moonbitlang$core$array$$ArrayView$sub$46$inner$39$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$partition_by$37$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$37$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$37$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$37$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$37$(arr, i, j);
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
  moonbitlang$core$array$$ArrayView$swap$37$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$partition_by$39$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$39$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$39$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$39$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$39$(arr, i, j);
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
  moonbitlang$core$array$$ArrayView$swap$39$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$try_bubble_sort_by$37$(arr, cmp) {
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
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$37$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$37$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$37$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$try_bubble_sort_by$39$(arr, cmp) {
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
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$39$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$39$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$39$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$quick_sort_by$37$(arr, cmp, pred, limit) {
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
        moonbitlang$core$array$$bubble_sort_by$37$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$37$(arr$2, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$choose_pivot_by$37$(arr$2, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$37$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$partition_by$37$(arr$2, cmp, _pivot_index);
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
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$37$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$37$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$37$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$37$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$37$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$37$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$37$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$37$(right, cmp, moonbitlang$core$array$$ArrayView$at$37$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$quick_sort_by$39$(arr, cmp, pred, limit) {
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
        moonbitlang$core$array$$bubble_sort_by$39$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$39$(arr$2, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$choose_pivot_by$39$(arr$2, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$39$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$partition_by$39$(arr$2, cmp, _pivot_index);
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
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$39$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$39$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$39$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$39$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$39$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$39$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$39$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$39$(right, cmp, moonbitlang$core$array$$ArrayView$at$39$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$70$(self, map) {
  moonbitlang$core$array$$quick_sort_by$37$({ buf: self, start: 0, len: self.length }, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$39$(self, cmp) {
  moonbitlang$core$array$$quick_sort_by$39$({ buf: self, start: 0, len: self.length }, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$list$$List$of$6$(arr) {
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
function moonbitlang$core$math$$sin(_tmp) {
  return Math.sin(_tmp);
}
function moonbitlang$core$math$$cos(_tmp) {
  return Math.cos(_tmp);
}
function moonbitlang$core$option$$Option$unwrap_or$30$(self, default_) {
  if (self.$tag === 0) {
    return default_;
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap_or_default$59$(self) {
  if (self.$tag === 0) {
    return [];
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$ref$$Ref$new$19$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$18$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$20$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$27$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$24$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$30$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$21$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$23$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$34$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$6$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$17$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$25$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$71$(x) {
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
function moonbitlang$core$set$$Set$new$46$inner$4$(capacity) {
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
function moonbitlang$core$set$$Set$add_entry_to_tail$4$(self, idx, entry) {
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
function moonbitlang$core$set$$Set$set_entry$4$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$push_away$4$(self, idx, entry) {
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
      moonbitlang$core$set$$Set$set_entry$4$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$4$(self, entry$2, idx$2);
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
function moonbitlang$core$set$$Set$add_with_hash$4$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$4$(self);
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
        moonbitlang$core$set$$Set$push_away$4$(self, idx, _curr_entry);
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
  moonbitlang$core$set$$Set$add_entry_to_tail$4$(self, _idx, entry);
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
function moonbitlang$core$set$$Set$grow$4$(self) {
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
      moonbitlang$core$set$$Set$add_with_hash$4$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$0$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$set$$Set$add$4$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$4$(self, key, moonbitlang$core$builtin$$Hash$hash$50$(key));
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
function moonbitlang$core$set$$Set$contains$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
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
function moonbitlang$core$set$$Set$remove_entry$4$(self, entry) {
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
function moonbitlang$core$set$$Set$shift_back$4$(self, idx) {
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
          moonbitlang$core$set$$Set$set_entry$4$(self, _x, idx$2);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
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
function moonbitlang$core$set$$Set$remove$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$50$(key);
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
        moonbitlang$core$set$$Set$remove_entry$4$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$4$(self, idx);
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
  moonbitlang$core$array$$FixedArray$fill$46$inner$62$(self.entries, undefined, 0, undefined);
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
function moonbitlang$core$set$$Set$iter$4$(self) {
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
function moonbitlang$core$set$$Set$union$4$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$4$(8);
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
      moonbitlang$core$set$$Set$add$4$(m, _p$4);
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
      moonbitlang$core$set$$Set$add$4$(m, _p$4);
      _tmp$2 = _p$5;
      continue;
    }
  }
  return m;
}
function rami3l$js$45$ffi$js$$Union3$from0$72$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$72$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$73$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$58$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$74$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$75$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$30$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$76$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$76$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$76$(self)) {
    moonbitlang$core$abort$$abort$36$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$55$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$5$(self) : Option$None$5$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$56$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$57$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$58$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$8$(self) : Option$None$8$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$77$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$77$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$77$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$77$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$77$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$75$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$79$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$57$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$56$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$80$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$55$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$58$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$58$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$30$();
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
function Milky2018$selene$math$$Transform$from_rotation_rad(rad) {
  const cos_r = moonbitlang$core$math$$cos(rad);
  const sin_r = moonbitlang$core$math$$sin(rad);
  return { a: cos_r, b: sin_r, c: -sin_r, d: cos_r, tx: 0, ty: 0 };
}
function Milky2018$selene$math$$Transform$multiply(self, other) {
  return { a: self.a * other.a + self.c * other.b, b: self.b * other.a + self.d * other.b, c: self.a * other.c + self.c * other.d, d: self.b * other.c + self.d * other.d, tx: self.a * other.tx + self.c * other.ty + self.tx, ty: self.b * other.tx + self.d * other.ty + self.ty };
}
function Milky2018$selene$math$$Transform$apply_to_point(self, x, y) {
  const new_x = self.a * x + self.c * y + self.tx;
  const new_y = self.b * x + self.d * y + self.ty;
  return { _0: new_x, _1: new_y };
}
function moonbitlang$core$builtin$$Mul$mul$81$(self, other) {
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
  const _bind$8 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$pressed_keys, Milky2018$selene$inputs$$last_pressed_keys));
  _bind$8((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_pressed_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$just_release_keys);
  const _bind$9 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$union$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$inputs$$all_codes, Milky2018$selene$inputs$$pressed_keys), Milky2018$selene$inputs$$last_pressed_keys));
  _bind$9((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$just_release_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$inputs$$last_pressed_keys);
  const _bind$10 = moonbitlang$core$set$$Set$iter$0$(Milky2018$selene$inputs$$pressed_keys);
  _bind$10((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$inputs$$last_pressed_keys, code);
    return 1;
  });
}
function Milky2018$selene$inputs$$is_just_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$inputs$$just_pressed_keys, code);
}
function Milky2018$selene$backend$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$57$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$79$(rami3l$js$45$ffi$js$$Nullable$unwrap$76$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$58$(rami3l$js$45$ffi$js$$Union5$to0$73$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$8 = { _0: 0, _1: 0 };
  const _bind$9 = moonbitlang$core$ref$$Ref$new$71$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$8, zoom: 1, time_scale: 1, mouse_movement: _bind$9 };
}
function Milky2018$selene$backend$$register_mouse_events(mouse, mouse_movement) {
  Milky2018$selene$backend$$canvas_backend.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(Milky2018$selene$backend$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$56$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$77$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$77$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$77$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$77$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(Milky2018$selene$backend$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$56$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$77$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(Milky2018$selene$backend$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$56$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$77$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(Milky2018$selene$backend$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$55$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$80$(event));
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(Milky2018$selene$backend$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$55$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$80$(event));
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
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(context, rami3l$js$45$ffi$js$$Union7$from0$74$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from2$72$(pattern));
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
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$72$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, text, x, y, Option$None$9$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_color_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$72$(color));
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
    moonbitlang$core$builtin$$println$48$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
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
function Milky2018$selene$backend$$get_audio(path) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$16$(Milky2018$selene$backend$$audio_cache, path);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
    const _audio = _Some._0;
    return _audio;
  }
  const audio = Milky2018$selene$backend$$Audio$new(path);
  moonbitlang$core$builtin$$Map$set$16$(Milky2018$selene$backend$$audio_cache, path, audio);
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
function moonbitlang$core$builtin$$Show$output$4$(_x_85, _x_86) {
  _x_86.method_0(_x_86.self, "Entity(");
  moonbitlang$core$builtin$$Logger$write_object$41$(_x_86, _x_85);
  _x_86.method_0(_x_86.self, ")");
}
function moonbitlang$core$builtin$$Hash$hash_combine$4$(_x_81, _x_82) {
  moonbitlang$core$builtin$$Hash$hash_combine$41$(_x_81, _x_82);
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
function Milky2018$selene$system$$defer_event(event) {
  moonbitlang$core$array$$Array$push$11$(Milky2018$selene$system$$deferred_events, event);
}
function Milky2018$selene$system$$Entity$destroy(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$remove$4$(Milky2018$selene$system$$all_entities, e);
  });
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
function Milky2018$selene$system$$App$add_plugin(self, plugin) {
  const plugins = self.plugins;
  moonbitlang$core$array$$Array$push$65$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$21$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$64$(systems, { _0: system, _1: schedule, _2: system_name$2 });
  return { ...self, systems: systems };
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
        moonbitlang$core$array$$Array$push$37$(renders, { _0: system._0, _1: _pri });
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$sort_by_key$70$(renders, (system) => -system._1 | 0);
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
        moonbitlang$core$array$$Array$push$63$(game_loops, system._0);
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
  const frame = moonbitlang$core$array$$Array$at$49$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
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
        moonbitlang$core$array$$Array$push$39$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by$39$(sprites, (sprite1, sprite2) => {
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
    moonbitlang$core$abort$$abort$36$("Animation must have at least one frame");
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
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < frame_count) {
      const x = Milky2018$selene$math$$Vec2D$op_get(offset, 0) + (i + 0) * (width + space_x);
      moonbitlang$core$array$$Array$push$49$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: Milky2018$selene$math$$Vec2D$update(offset, 0, x) });
      _tmp = i + 1 | 0;
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
        const rate$2 = moonbitlang$core$option$$Option$unwrap_or$30$(rate, animation.fps);
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
  const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$4$(8);
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
    moonbitlang$core$set$$Set$add$4$(self.entities, entity);
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
  const trees = { val: moonbitlang$core$list$$List$of$6$([Milky2018$selene$collision$$quadtree_root.val]) };
  let results = moonbitlang$core$set$$Set$new$46$inner$4$(8);
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
        results = moonbitlang$core$set$$Set$union$4$(results, _hd.entities);
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
function Milky2018$selene$collision$$quadtree_clear_system(_delta) {
  const left_limit = { val: 0 };
  const right_limit = { val: 0 };
  const top_limit = { val: 0 };
  const bottom_limit = { val: 0 };
  const boxes = [];
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
  const _bind$8 = moonbitlang$core$builtin$$Map$iter2$2$(Milky2018$selene$collision$$shapes);
  _bind$8((e, shape) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$9 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$ui$$uis, e);
      if (_bind$9 === -1) {
        const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
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
          moonbitlang$core$array$$Array$push$66$(boxes, { _0: e, _1: box });
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
function Milky2018$selene$collision$$Pickable$new() {
  return { on_pressed_callbacks: [], on_released_callbacks: [], on_just_pressed_callbacks: [], on_just_released_callbacks: [] };
}
function Milky2018$selene$collision$$Pickable$on_just_pressed(self, callback) {
  moonbitlang$core$array$$Array$push$67$(self.on_just_pressed_callbacks, callback);
}
function Milky2018$selene$collision$$pickable_click_system(_delta) {
  const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
  const _bind$8 = { _0: 1, _1: 1 };
  const _p = Milky2018$selene$inputs$$mouse.pos;
  const _p$2 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$9 = { _0: _p._0 * _p$2._0, _1: _p._1 * _p$2._1 };
  const box = { position: _bind$9, size: _bind$8 };
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
  const _bind$10 = moonbitlang$core$builtin$$Map$iter2$5$(Milky2018$selene$ui$$uis);
  _bind$10((e, _ui) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$11 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$collision$$pickables, e);
      if (_bind$11 === undefined) {
        return 1;
      } else {
        const _Some = _bind$11;
        const _pick = _Some;
        const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$12 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$12;
          const _position = _Some$2;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
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
  let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
  const _bind$11 = moonbitlang$core$set$$Set$iter$4$(entities);
  _bind$11((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      const _bind$12 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$collision$$pickables, e);
      if (_bind$12 === undefined) {
        return 1;
      } else {
        const _Some = _bind$12;
        const _pick = _Some;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
        if (_bind$13 === undefined) {
          $panic();
        } else {
          const _Some$2 = _bind$13;
          const _position = _Some$2;
          const _bind$14 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
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
                if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
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
                if (Milky2018$selene$inputs$$is_mouse_released(button)) {
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
                if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
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
                if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
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
  const _bind$8 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$8.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$68$(0));
  }
  moonbitlang$core$array$$Array$push$68$(moonbitlang$core$option$$Option$unwrap$59$(moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, speed, axis) {
  const pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  const size = { _0: Milky2018$selene$math$$Vec2D$op_get(object.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.size, 1) };
  return speed >= 0 ? { position: pos, size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + speed) } : { position: Milky2018$selene$math$$Vec2D$update(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + speed), size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - speed) };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$69$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, Milky2018$selene$math$$Vec2D$op_get(velocity, axis), axis);
  const new_pos = { val: { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) } };
  new_pos.val = Milky2018$selene$math$$Vec2D$update(new_pos.val, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos.val, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const new_velocity = { val: velocity };
  const entities = Milky2018$selene$collision$$quadtree_query(ray_collision);
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$11$ };
  const _bind$8 = moonbitlang$core$set$$Set$iter$4$(entities);
  _bind$8((e) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      if (moonbitlang$core$builtin$$op_notequal$4$(e, entity)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, e);
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
          const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
          if (_bind$10 === undefined) {
            return 1;
          } else {
            const _Some$2 = _bind$10;
            const _pos = _Some$2;
            const _bind$11 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, e);
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
                  _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$11$({ _0: new_pos.val, _1: movement });
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
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
  const _bind$8 = moonbitlang$core$builtin$$Map$iter2$7$(Milky2018$selene$velocity$$velocities);
  _bind$8((e, vel) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      _L: {
        _L$2: {
          const _bind$9 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$colliders, e);
          if (_bind$9 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$9;
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
function Milky2018$selene$collision$$CollisionLayer$new() {
  const layer = Milky2018$selene$collision$$collision_layer_generator.val;
  Milky2018$selene$collision$$collision_layer_generator.val = (Milky2018$selene$collision$$collision_layer_generator.val >>> 0) + (1 >>> 0) | 0;
  return layer;
}
function Milky2018$selene$collision$$Collider$new(mask) {
  return { active: true, mask: mask };
}
function Milky2018$selene$collision$$get_collision_infos(entity) {
  return moonbitlang$core$option$$Option$unwrap_or_default$59$(moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collision_infos, entity));
}
function Milky2018$selene$collision$$area_collide_system(_delta) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$ };
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
          const new_contains = moonbitlang$core$set$$Set$new$46$inner$4$(8);
          const entities = Milky2018$selene$collision$$quadtree_query(box);
          let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
          const _bind$14 = moonbitlang$core$set$$Set$iter$4$(entities);
          _bind$14((entity) => {
            if (Milky2018$selene$system$$Entity$is_alive(entity)) {
              const _bind$15 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$collision_layers, entity);
              if (_bind$15 === undefined) {
                return 1;
              } else {
                const _Some$4 = _bind$15;
                const _other_layer = _Some$4;
                const _bind$16 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, entity);
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
                  const _bind$17 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, entity);
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
                        moonbitlang$core$set$$Set$add$4$(new_contains, entity);
                        if (moonbitlang$core$set$$Set$contains$4$(_area.contains, entity)) {
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
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$10$(_return._0);
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
          let _foreach_result$3 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
          const _bind$15 = moonbitlang$core$set$$Set$iter$4$(_area.contains);
          _bind$15((entity) => {
            if (moonbitlang$core$set$$Set$contains$4$(new_contains, entity)) {
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
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$10$(_return$2._0);
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
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$inputs$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$inputs$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0), _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
  moonbitlang$core$array$$Array$push$64$(_self, { _0: Milky2018$selene$system$$realtime_timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Realtime Timer System" });
}
function moonbitlang$core$builtin$$Eq$equal$54$(_x_630, _x_631) {
  if (_x_630.$tag === 0) {
    const _Score = _x_630;
    const _$42$x0_632 = _Score._0;
    if (_x_631.$tag === 0) {
      const _Score$2 = _x_631;
      const _$42$y0_633 = _Score$2._0;
      return _$42$x0_632 === _$42$y0_633;
    } else {
      return false;
    }
  } else {
    if (_x_631.$tag === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$19$(_x_626, _x_627) {
  switch (_x_626) {
    case 0: {
      if (_x_627 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_627 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_627 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_627 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_627 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_627 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_627 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_627 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_627 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_627 === 9) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_627 === 10) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$44$(_x_622, _x_623) {
  switch (_x_622) {
    case 0: {
      if (_x_623 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_623 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_623 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$24$(_x_618, _x_619) {
  switch (_x_618) {
    case 0: {
      if (_x_619 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_619 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_619 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function lnkfish$$init_rand_seed(seed) {
  lnkfish$$rand_seed.val = seed === 0 ? 12345 : seed;
}
function lnkfish$$reset_game() {
  lnkfish$$game_session_id.val = lnkfish$$game_session_id.val + 1 | 0;
  lnkfish$$reset_counter.val = lnkfish$$reset_counter.val + 1 | 0;
  const new_seed = (12345 + (Math.imul(lnkfish$$reset_counter.val, 997) | 0) | 0) + ((Math.imul(lnkfish$$reset_counter.val, lnkfish$$reset_counter.val) | 0) % 10000 | 0) | 0;
  lnkfish$$init_rand_seed(new_seed);
  if (lnkfish$$is_endless_mode.val) {
    lnkfish$$last_generated_obstacle.val = undefined;
  }
  lnkfish$$score_saved_to_leaderboard.val = false;
  const _arr = lnkfish$$obstacle_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$2 = lnkfish$$taiji_entities.val;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const entity = _arr$2[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$3 = lnkfish$$ui_entities.val;
  const _len$3 = _arr$3.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len$3) {
      const entity = _arr$3[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$4 = lnkfish$$pause_menu_entities.val;
  const _len$4 = _arr$4.length;
  let _tmp$4 = 0;
  while (true) {
    const _i = _tmp$4;
    if (_i < _len$4) {
      const entity = _arr$4[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp$4 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$obstacle_entities.val);
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$taiji_entities.val);
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$ui_entities.val);
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$pause_menu_entities.val);
  lnkfish$$score.val = 0;
  lnkfish$$flow_mode_score.val = 0;
  lnkfish$$time_score_accumulator.val = 0;
  lnkfish$$is_in_flow_mode.val = false;
  lnkfish$$flow_mode_entity.val = undefined;
  lnkfish$$current_angle.val = 0;
  lnkfish$$current_rotation_speed.val = 0;
  lnkfish$$obstacle_spawn_timer.val = 0;
  lnkfish$$level_current_index.val = 0;
  lnkfish$$taiji_spawn_timer.val = 0;
  lnkfish$$taiji_level_current_index.val = 0;
  lnkfish$$game_won_timer_set.val = false;
  lnkfish$$game_state.val = 5;
}
function lnkfish$$create_gameover_button(text, pos, is_leaderboard) {
  const button = Milky2018$selene$system$$Entity$new();
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "white", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    if (is_leaderboard) {
      lnkfish$$game_state.val = 10;
      return;
    } else {
      lnkfish$$reset_game();
      return;
    }
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$reset_game_full() {
  lnkfish$$reset_game();
  lnkfish$$current_level_index.val = 0;
}
function lnkfish$$create_gamewon_button(text, pos, is_endless) {
  const button = Milky2018$selene$system$$Entity$new();
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "white", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    if (is_endless) {
      lnkfish$$is_endless_mode.val = true;
      lnkfish$$current_level_index.val = 0;
      lnkfish$$last_generated_obstacle.val = undefined;
      lnkfish$$reset_game();
      return;
    } else {
      lnkfish$$reset_game_full();
      lnkfish$$game_state.val = 1;
      return;
    }
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$create_pause_menu_button(text, pos, is_continue) {
  const button = Milky2018$selene$system$$Entity$new();
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "white", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    if (is_continue) {
      lnkfish$$game_state.val = 6;
      return;
    } else {
      lnkfish$$reset_game_full();
      lnkfish$$game_state.val = 1;
      return;
    }
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$save_score_to_leaderboard(new_score) {
  const entries = lnkfish$$leaderboard_entries.val;
  moonbitlang$core$array$$Array$push$26$(entries, { score: new_score, rank: 0 });
  const len = entries.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < (len - 1 | 0)) {
      let _tmp$2 = 0;
      while (true) {
        const j = _tmp$2;
        if (j < ((len - i | 0) - 1 | 0)) {
          if (moonbitlang$core$array$$Array$at$26$(entries, j).score < moonbitlang$core$array$$Array$at$26$(entries, j + 1 | 0).score) {
            const temp = moonbitlang$core$array$$Array$at$26$(entries, j);
            moonbitlang$core$array$$Array$set$26$(entries, j, moonbitlang$core$array$$Array$at$26$(entries, j + 1 | 0));
            moonbitlang$core$array$$Array$set$26$(entries, j + 1 | 0, temp);
          }
          _tmp$2 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const max_entries = len > 10 ? 10 : len;
  const top_entries = moonbitlang$core$array$$Array$new$46$inner$26$(0);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < max_entries) {
      moonbitlang$core$array$$Array$push$26$(top_entries, { score: moonbitlang$core$array$$Array$at$26$(entries, i).score, rank: i + 1 | 0 });
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  lnkfish$$leaderboard_entries.val = top_entries;
}
function lnkfish$$ui_system(_delta) {
  const _arr = lnkfish$$ui_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$ui_entities.val);
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 8)) {
    const overlay = Milky2018$selene$system$$Entity$new();
    const overlay_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 580, _1: 700 }, "rgba(0, 0, 0, 0.5)");
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, overlay, Milky2018$selene$sprite$$Sprite$from_color_rect(overlay_rect, 99, undefined));
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, overlay, { _0: 80, _1: 0 });
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, overlay, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, overlay);
    if (lnkfish$$is_endless_mode.val) {
      if (!lnkfish$$score_saved_to_leaderboard.val) {
        lnkfish$$save_score_to_leaderboard(lnkfish$$score.val);
        lnkfish$$score_saved_to_leaderboard.val = true;
      }
      const score_display_text = Milky2018$selene$system$$Entity$new();
      const score_content = moonbitlang$core$builtin$$Show$to_string$21$(lnkfish$$score.val);
      const score_text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(score_content, "white", "50px QIJIFALLBACK"), 100, undefined);
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, score_display_text, score_text_sprite);
      const _p = score_content.length;
      const score_estimated_width = (_p + 0) * 25;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, score_display_text, { _0: 372.5 - score_estimated_width / 2, _1: 250 });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, score_display_text, Milky2018$selene$ui$$Ui$new());
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, score_display_text);
      const leaderboard_button = lnkfish$$create_gameover_button("查看排行榜", { _0: 272.5, _1: 330 }, true);
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, leaderboard_button);
      const retry_button = lnkfish$$create_gameover_button("重新开始", { _0: 292.5, _1: 410 }, false);
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, retry_button);
    } else {
      const score_display_text = Milky2018$selene$system$$Entity$new();
      const score_content = moonbitlang$core$builtin$$Show$to_string$21$(lnkfish$$score.val);
      const score_text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(score_content, "white", "50px QIJIFALLBACK"), 100, undefined);
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, score_display_text, score_text_sprite);
      const _p = score_content.length;
      const score_estimated_width = (_p + 0) * 25;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, score_display_text, { _0: 372.5 - score_estimated_width / 2, _1: 270 });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, score_display_text, Milky2018$selene$ui$$Ui$new());
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, score_display_text);
      const retry_text = Milky2018$selene$system$$Entity$new();
      const retry_text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(lnkfish$$ui_system$46$retry_content$124$517, "white", "40px QIJIFALLBACK"), 100, undefined);
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, retry_text, retry_text_sprite);
      const _p$2 = lnkfish$$ui_system$46$retry_content$124$517.length;
      const retry_estimated_width = (_p$2 + 0) * 20;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, retry_text, { _0: 372.5 - retry_estimated_width / 2 - 50, _1: 370 });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, retry_text, Milky2018$selene$ui$$Ui$new());
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, retry_text);
    }
  } else {
    const _bind$8 = lnkfish$$game_state.val;
    let text_content;
    switch (_bind$8) {
      case 0: {
        text_content = "";
        break;
      }
      case 1: {
        text_content = "";
        break;
      }
      case 2: {
        text_content = "";
        break;
      }
      case 3: {
        text_content = "";
        break;
      }
      case 4: {
        text_content = "";
        break;
      }
      case 5: {
        text_content = "";
        break;
      }
      case 8: {
        text_content = "";
        break;
      }
      case 9: {
        text_content = "";
        break;
      }
      case 6: {
        text_content = "";
        break;
      }
      case 7: {
        text_content = "";
        break;
      }
      default: {
        text_content = "";
      }
    }
    if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 5)) {
      const current_level = lnkfish$$is_endless_mode.val ? undefined : lnkfish$$current_level_index.val >= 0 && lnkfish$$current_level_index.val < lnkfish$$all_levels.length ? moonbitlang$core$array$$Array$at$45$(lnkfish$$all_levels, lnkfish$$current_level_index.val) : undefined;
      let level_name;
      if (current_level === undefined) {
        level_name = "无穷画卷";
      } else {
        const _Some = current_level;
        const _level = _Some;
        level_name = `关卡丨${_level.name}`;
      }
      const level_name_text = Milky2018$selene$system$$Entity$new();
      const level_name_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(level_name, "grey", "40px QIJIFALLBACK"), 100, undefined);
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, level_name_text, level_name_sprite);
      const _p = level_name.length;
      const level_name_width = (_p + 0) * 20;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, level_name_text, { _0: 372.5 - level_name_width / 2 - 30, _1: 230 });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, level_name_text, Milky2018$selene$ui$$Ui$new());
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, level_name_text);
      let description;
      if (current_level === undefined) {
        description = "挑战极限  ☯ 永无止境";
      } else {
        const _Some = current_level;
        const _level = _Some;
        description = _level.description;
      }
      const description_text = Milky2018$selene$system$$Entity$new();
      const description_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(description, "grey", "30px QIJIFALLBACK"), 100, undefined);
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, description_text, description_sprite);
      const _p$2 = description.length;
      const description_width = (_p$2 + 0) * 15;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, description_text, { _0: 372.5 - description_width / 2 - 40, _1: 290 });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, description_text, Milky2018$selene$ui$$Ui$new());
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, description_text);
      const hint_text = Milky2018$selene$system$$Entity$new();
      const hint_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(lnkfish$$ui_system$46$hint_content$124$533, "grey", "40px QIJIFALLBACK"), 100, undefined);
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, hint_text, hint_sprite);
      const _p$3 = lnkfish$$ui_system$46$hint_content$124$533.length;
      const hint_width = (_p$3 + 0) * 20;
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, hint_text, { _0: 372.5 - hint_width / 2 - 40, _1: 380 });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, hint_text, Milky2018$selene$ui$$Ui$new());
      moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, hint_text);
    } else {
      const _p = "";
      if (!(text_content === _p)) {
        const ui_text = Milky2018$selene$system$$Entity$new();
        const text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text_content, "grey", "40px QIJIFALLBACK"), 100, undefined);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, ui_text, text_sprite);
        const _p$2 = text_content.length;
        const estimated_width = (_p$2 + 0) * 20;
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, ui_text, { _0: 372.5 - estimated_width / 2 + 20, _1: 350 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, ui_text, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, ui_text);
      }
    }
    if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 9)) {
      if (lnkfish$$current_level_index.val >= (lnkfish$$all_levels.length - 1 | 0)) {
        const overlay = Milky2018$selene$system$$Entity$new();
        const overlay_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 580, _1: 700 }, "rgba(0, 0, 0, 0.5)");
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, overlay, Milky2018$selene$sprite$$Sprite$from_color_rect(overlay_rect, 99, undefined));
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, overlay, { _0: 80, _1: 0 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, overlay, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, overlay);
        const title_text = Milky2018$selene$system$$Entity$new();
        const title_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("恭喜通关", "white", "50px QIJIFALLBACK"), 100, undefined);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, title_text, title_sprite);
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, title_text, { _0: 272.5, _1: 250 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, title_text, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, title_text);
        const endless_button = lnkfish$$create_gamewon_button("进入无限模式", { _0: 252.5, _1: 350 }, true);
        moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, endless_button);
        const menu_button = lnkfish$$create_gamewon_button("返回主菜单", { _0: 272.5, _1: 450 }, false);
        moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, menu_button);
      } else {
        const next_level_text = Milky2018$selene$system$$Entity$new();
        const next_level_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("关卡完成丨按下空格进入下一关", "white", "40px QIJIFALLBACK"), 100, undefined);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, next_level_text, next_level_sprite);
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, next_level_text, { _0: 150, _1: 350 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, next_level_text, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, next_level_text);
      }
    }
  }
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 6)) {
    const score_label_entity = Milky2018$selene$system$$Entity$new();
    const score_label_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("得分", "grey", "30px QIJIFALLBACK"), 100, undefined);
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, score_label_entity, score_label_sprite);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, score_label_entity, { _0: 120, _1: 60 });
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, score_label_entity, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, score_label_entity);
    const score_value_entity = Milky2018$selene$system$$Entity$new();
    const formatted_score = lnkfish$$score.val < 10 ? `00${moonbitlang$core$builtin$$Show$to_string$21$(lnkfish$$score.val)}` : lnkfish$$score.val < 100 ? `0${moonbitlang$core$builtin$$Show$to_string$21$(lnkfish$$score.val)}` : moonbitlang$core$builtin$$Show$to_string$21$(lnkfish$$score.val);
    const score_value_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(formatted_score, "grey", "30px QIJIFALLBACK"), 100, undefined);
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, score_value_entity, score_value_sprite);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, score_value_entity, { _0: 120, _1: 100 });
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, score_value_entity, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, score_value_entity);
  }
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 6)) {
    const current_display_state = lnkfish$$is_in_flow_mode.val ? FlowModeDisplayState$Flowing : new FlowModeDisplayState$Score(lnkfish$$flow_mode_score.val);
    if (moonbitlang$core$builtin$$op_notequal$34$(lnkfish$$last_flow_mode_display_state.val, current_display_state)) {
      const _bind$8 = lnkfish$$flow_mode_ui_entity.val;
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _old_entity = _Some;
        Milky2018$selene$system$$Entity$destroy(_old_entity);
        lnkfish$$flow_mode_ui_entity.val = undefined;
      }
      const _arr$2 = lnkfish$$flow_mode_border_entities.val;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const border_entity = _arr$2[_i];
          Milky2018$selene$system$$Entity$destroy(border_entity);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$flow_mode_border_entities.val);
      const flow_ui_entity = Milky2018$selene$system$$Entity$new();
      if (lnkfish$$is_in_flow_mode.val) {
        const flow_sprite = Milky2018$selene$sprite$$Sprite$from_animation(lnkfish$$flowmode6s_animation, 100, undefined);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, flow_ui_entity, flow_sprite);
      } else {
        const _bind$9 = lnkfish$$flow_mode_score.val;
        let flow_picture;
        switch (_bind$9) {
          case 0: {
            flow_picture = lnkfish$$flowmode0_picture;
            break;
          }
          case 1: {
            flow_picture = lnkfish$$flowmode1_picture;
            break;
          }
          case 2: {
            flow_picture = lnkfish$$flowmode2_picture;
            break;
          }
          default: {
            flow_picture = lnkfish$$flowmode0_picture;
          }
        }
        const flow_sprite = Milky2018$selene$sprite$$Sprite$from_picture(flow_picture, 100, undefined);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, flow_ui_entity, flow_sprite);
      }
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, flow_ui_entity, { _0: 274.5, _1: 40 });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, flow_ui_entity, Milky2018$selene$ui$$Ui$new());
      if (lnkfish$$is_in_flow_mode.val) {
        const _arr$3 = lnkfish$$flow_mode_border_entities.val;
        const _len$3 = _arr$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _i = _tmp$3;
          if (_i < _len$3) {
            const border_entity = _arr$3[_i];
            Milky2018$selene$system$$Entity$destroy(border_entity);
            _tmp$3 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        moonbitlang$core$array$$Array$clear$4$(lnkfish$$flow_mode_border_entities.val);
        const top_border = Milky2018$selene$system$$Entity$new();
        const top_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 202, _1: 3 }, lnkfish$$ui_system$46$border_color$124$571);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, top_border, Milky2018$selene$sprite$$Sprite$from_color_rect(top_rect, 101, undefined));
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, top_border, { _0: 271.5, _1: 37 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, top_border, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$flow_mode_border_entities.val, top_border);
        const bottom_border = Milky2018$selene$system$$Entity$new();
        const bottom_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 202, _1: 3 }, lnkfish$$ui_system$46$border_color$124$571);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, bottom_border, Milky2018$selene$sprite$$Sprite$from_color_rect(bottom_rect, 101, undefined));
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, bottom_border, { _0: 271.5, _1: 142 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, bottom_border, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$flow_mode_border_entities.val, bottom_border);
        const left_border = Milky2018$selene$system$$Entity$new();
        const left_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 3, _1: 102 }, lnkfish$$ui_system$46$border_color$124$571);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, left_border, Milky2018$selene$sprite$$Sprite$from_color_rect(left_rect, 101, undefined));
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, left_border, { _0: 271.5, _1: 40 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, left_border, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$flow_mode_border_entities.val, left_border);
        const right_border = Milky2018$selene$system$$Entity$new();
        const right_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 3, _1: 102 }, lnkfish$$ui_system$46$border_color$124$571);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, right_border, Milky2018$selene$sprite$$Sprite$from_color_rect(right_rect, 101, undefined));
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, right_border, { _0: 470.5, _1: 40 });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, right_border, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$flow_mode_border_entities.val, right_border);
      }
      lnkfish$$flow_mode_ui_entity.val = flow_ui_entity;
      lnkfish$$last_flow_mode_display_state.val = current_display_state;
    }
    const pause_button = Milky2018$selene$system$$Entity$new();
    const pause_text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(lnkfish$$ui_system$46$pause_text$124$581, "white", "42px QIJIFALLBACK"), 100, undefined);
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, pause_button, pause_text_sprite);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, pause_button, { _0: 585, _1: 75 });
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, pause_button, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, pause_button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 30, _1: 35 }, { _0: 0, _1: -30 }));
    moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, pause_button, { text: lnkfish$$ui_system$46$pause_text$124$581, normal_color: "white", hover_color: "black", is_hovered: false });
    const pickable = Milky2018$selene$collision$$Pickable$new();
    Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
      lnkfish$$game_state.val = 7;
    });
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, pause_button, pickable);
    moonbitlang$core$array$$Array$push$4$(lnkfish$$ui_entities.val, pause_button);
  } else {
    const _bind$8 = lnkfish$$flow_mode_ui_entity.val;
    if (_bind$8 === undefined) {
    } else {
      const _Some = _bind$8;
      const _old_entity = _Some;
      Milky2018$selene$system$$Entity$destroy(_old_entity);
      lnkfish$$flow_mode_ui_entity.val = undefined;
    }
    const _arr$2 = lnkfish$$flow_mode_border_entities.val;
    const _len$2 = _arr$2.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const border_entity = _arr$2[_i];
        Milky2018$selene$system$$Entity$destroy(border_entity);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$clear$4$(lnkfish$$flow_mode_border_entities.val);
    lnkfish$$last_flow_mode_display_state.val = undefined;
  }
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 7)) {
    if (lnkfish$$paused_velocities.size === 0) {
      const _arr$2 = lnkfish$$obstacle_entities.val;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const entity = _arr$2[_i];
          const _bind$8 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$velocity$$velocities, entity);
          if (_bind$8 === undefined) {
          } else {
            const _Some = _bind$8;
            const _vel = _Some;
            moonbitlang$core$builtin$$Map$set$35$(lnkfish$$paused_velocities, entity, _vel);
            moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$velocity$$velocities, entity);
          }
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _arr$3 = lnkfish$$taiji_entities.val;
      const _len$3 = _arr$3.length;
      let _tmp$3 = 0;
      while (true) {
        const _i = _tmp$3;
        if (_i < _len$3) {
          const entity = _arr$3[_i];
          const _bind$8 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$velocity$$velocities, entity);
          if (_bind$8 === undefined) {
          } else {
            const _Some = _bind$8;
            const _vel = _Some;
            moonbitlang$core$builtin$$Map$set$35$(lnkfish$$paused_velocities, entity, _vel);
            moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$velocity$$velocities, entity);
          }
          _tmp$3 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    const _arr$2 = lnkfish$$pause_menu_entities.val;
    const _len$2 = _arr$2.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const entity = _arr$2[_i];
        Milky2018$selene$system$$Entity$destroy(entity);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$clear$4$(lnkfish$$pause_menu_entities.val);
    const overlay = Milky2018$selene$system$$Entity$new();
    const overlay_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 580, _1: 700 }, "rgba(0, 0, 0, 0.5)");
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, overlay, Milky2018$selene$sprite$$Sprite$from_color_rect(overlay_rect, 99, undefined));
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, overlay, { _0: 80, _1: 0 });
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, overlay, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$4$(lnkfish$$pause_menu_entities.val, overlay);
    const pause_title = Milky2018$selene$system$$Entity$new();
    const pause_title_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("游戏暂停", "white", "50px QIJIFALLBACK"), 100, undefined);
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, pause_title, pause_title_text);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, pause_title, { _0: 272.5, _1: 250 });
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, pause_title, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$4$(lnkfish$$pause_menu_entities.val, pause_title);
    const continue_button = lnkfish$$create_pause_menu_button("继续游戏", { _0: 292.5, _1: 350 }, true);
    moonbitlang$core$array$$Array$push$4$(lnkfish$$pause_menu_entities.val, continue_button);
    const main_menu_button = lnkfish$$create_pause_menu_button("返回主菜单", { _0: 272.5, _1: 450 }, false);
    moonbitlang$core$array$$Array$push$4$(lnkfish$$pause_menu_entities.val, main_menu_button);
    return;
  } else {
    const _p = lnkfish$$pause_menu_entities.val;
    if (!(_p.length === 0)) {
      const _arr$2 = lnkfish$$pause_menu_entities.val;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const entity = _arr$2[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$pause_menu_entities.val);
    }
    if (!(lnkfish$$paused_velocities.size === 0)) {
      let _tmp$2 = lnkfish$$paused_velocities.head;
      while (true) {
        const _p$2 = _tmp$2;
        if (_p$2 === undefined) {
          break;
        } else {
          const _p$3 = _p$2;
          const _p$4 = _p$3;
          const _p$5 = _p$4.key;
          const _p$6 = _p$4.value;
          const _p$7 = _p$4.next;
          moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, _p$5, _p$6);
          _tmp$2 = _p$7;
          continue;
        }
      }
      moonbitlang$core$builtin$$Map$clear$35$(lnkfish$$paused_velocities);
      return;
    } else {
      return;
    }
  }
}
function lnkfish$$add_background(size) {
  const background = Milky2018$selene$system$$Entity$new();
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new(size, "assets/bg.png", undefined, 3), 0, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, background, background_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, background, { _0: 0, _1: 0 });
}
function lnkfish$$game_start(_delta) {
  lnkfish$$add_background({ _0: 745, _1: 700 });
}
function lnkfish$$create_menu_button(text, pos, button_type) {
  const button = Milky2018$selene$system$$Entity$new();
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "white", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    switch (button_type) {
      case 0: {
        lnkfish$$is_endless_mode.val = false;
        lnkfish$$current_level_index.val = 0;
        lnkfish$$game_state.val = 5;
        return;
      }
      case 1: {
        lnkfish$$game_state.val = 2;
        return;
      }
      case 2: {
        lnkfish$$game_state.val = 3;
        return;
      }
      default: {
        lnkfish$$game_state.val = 4;
        return;
      }
    }
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$mute_bgm_by_path(path) {
  Milky2018$selene$audio$$play_audio$46$inner(path, 0, true);
}
function lnkfish$$play_menu_bgm() {
  if (!lnkfish$$bgm_enabled.val) {
    lnkfish$$mute_bgm_by_path(lnkfish$$bgm_menu);
    lnkfish$$mute_bgm_by_path(lnkfish$$bgm_game);
    lnkfish$$current_bgm_path.val = lnkfish$$bgm_menu;
    return undefined;
  }
  if (moonbitlang$core$builtin$$Eq$equal$53$(lnkfish$$current_bgm_path.val, lnkfish$$bgm_game)) {
    lnkfish$$mute_bgm_by_path(lnkfish$$bgm_game);
  }
  Milky2018$selene$audio$$play_audio$46$inner(lnkfish$$bgm_menu, 0.3, true);
  lnkfish$$current_bgm_path.val = lnkfish$$bgm_menu;
}
function lnkfish$$main_menu_system(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 1)) {
    if (lnkfish$$main_menu_initialized.val) {
      const _arr = lnkfish$$menu_button_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const entity = _arr[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$menu_button_entities.val);
      lnkfish$$main_menu_initialized.val = false;
    }
    return undefined;
  }
  lnkfish$$play_menu_bgm();
  if (lnkfish$$main_menu_initialized.val) {
    return undefined;
  }
  const _arr = lnkfish$$menu_button_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$menu_button_entities.val);
  const menu_animation_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, menu_animation_entity, Milky2018$selene$sprite$$Sprite$from_animation(lnkfish$$menu_fishfish_animation, 100, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, menu_animation_entity, { _0: 275, _1: 150 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, menu_animation_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$menu_button_entities.val, menu_animation_entity);
  const title = Milky2018$selene$system$$Entity$new();
  const title_sprite = Milky2018$selene$sprite$$Sprite$from_picture(lnkfish$$menu_title_picture, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, title, title_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, title, { _0: 100, _1: 40 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$menu_button_entities.val, title);
  const start_button = lnkfish$$create_menu_button("开始游戏", { _0: 292.5, _1: 400 }, 0);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$menu_button_entities.val, start_button);
  const level_select_button = lnkfish$$create_menu_button("选择关卡", { _0: 292.5, _1: 480 }, 1);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$menu_button_entities.val, level_select_button);
  const settings_button = lnkfish$$create_menu_button("游戏设置", { _0: 292.5, _1: 560 }, 2);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$menu_button_entities.val, settings_button);
  const help_button = lnkfish$$create_menu_button("游戏说明", { _0: 292.5, _1: 640 }, 3);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$menu_button_entities.val, help_button);
  lnkfish$$main_menu_initialized.val = true;
}
function lnkfish$$create_level_select_button(display_num, pos, level_idx) {
  const button = Milky2018$selene$system$$Entity$new();
  let button_text;
  if (display_num === -1) {
    button_text = "返回";
  } else {
    if (display_num === 99) {
      button_text = "无限模式";
    } else {
      const level_names = ["起", "承", "转", "合"];
      button_text = display_num >= 1 && display_num <= level_names.length ? moonbitlang$core$array$$Array$at$48$(level_names, display_num - 1 | 0) : `关卡 ${moonbitlang$core$builtin$$Show$to_string$21$(display_num)}`;
    }
  }
  const text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(button_text, "white", "50px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, text_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = button_text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: button_text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    if (level_idx === -1) {
      lnkfish$$game_state.val = 1;
      return;
    } else {
      if (level_idx === -2) {
        lnkfish$$is_endless_mode.val = true;
        lnkfish$$current_level_index.val = 0;
        lnkfish$$last_generated_obstacle.val = undefined;
        lnkfish$$game_state.val = 5;
        return;
      } else {
        lnkfish$$is_endless_mode.val = false;
        lnkfish$$current_level_index.val = level_idx;
        lnkfish$$game_state.val = 5;
        return;
      }
    }
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$level_select_system(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 2)) {
    if (lnkfish$$level_select_initialized.val) {
      const _arr = lnkfish$$level_select_button_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const entity = _arr[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$level_select_button_entities.val);
      lnkfish$$level_select_initialized.val = false;
    }
    return undefined;
  }
  if (lnkfish$$level_select_initialized.val) {
    return undefined;
  }
  const _arr = lnkfish$$level_select_button_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$level_select_button_entities.val);
  const title = Milky2018$selene$system$$Entity$new();
  const title_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("选择关卡", "grey", "60px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, title, title_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, title, { _0: 252.5, _1: 100 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$level_select_button_entities.val, title);
  const total_levels = lnkfish$$all_levels.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < total_levels) {
      const button_x = 192.5 + (i + 0) * 90;
      const level_button = lnkfish$$create_level_select_button(i + 1 | 0, { _0: button_x, _1: 250 }, i);
      moonbitlang$core$array$$Array$push$4$(lnkfish$$level_select_button_entities.val, level_button);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const endless_button = lnkfish$$create_level_select_button(99, { _0: 292.5, _1: 380 }, -2);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$level_select_button_entities.val, endless_button);
  const back_button = lnkfish$$create_level_select_button(-1, { _0: 332.5, _1: 480 }, -1);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$level_select_button_entities.val, back_button);
  lnkfish$$level_select_initialized.val = true;
}
function lnkfish$$create_help_back_button(text, pos) {
  const button = Milky2018$selene$system$$Entity$new();
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "white", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    lnkfish$$game_state.val = 1;
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$help_system(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 4)) {
    if (lnkfish$$help_initialized.val) {
      const _arr = lnkfish$$help_text_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const entity = _arr[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$help_text_entities.val);
      lnkfish$$help_initialized.val = false;
    }
    return undefined;
  }
  if (lnkfish$$help_initialized.val) {
    return undefined;
  }
  const _arr = lnkfish$$help_text_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$help_text_entities.val);
  const title = Milky2018$selene$system$$Entity$new();
  const title_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("游戏说明", "grey", "60px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, title, title_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, title, { _0: 252.5, _1: 100 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$help_text_entities.val, title);
  const help_texts = ["游戏规则", "- 控制双鱼旋转躲避障碍物", "- 黑鱼躲避白色障碍物,白鱼躲避黑色障碍物", "- 红色障碍物会与黑鱼白鱼都发生碰撞", "操作方法", "- 左方向键/A键: 逆时针旋转", "- 右方向键/D键: 顺时针旋转", "- 空格键: 开始游戏/重试", "特殊机制", "- 收集太极符获得分数", "- 连续收集三个太极符触发心流模式", "- 心流模式持续六秒,期间可穿过黑白障碍物"];
  let y_pos = 150;
  const _len$2 = help_texts.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const text = help_texts[_i];
      const help_text = Milky2018$selene$system$$Entity$new();
      const text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "grey", "28px QIJIFALLBACK"), 100, undefined);
      moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, help_text, text_sprite);
      moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, help_text, { _0: 120, _1: y_pos });
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, help_text, Milky2018$selene$ui$$Ui$new());
      moonbitlang$core$array$$Array$push$4$(lnkfish$$help_text_entities.val, help_text);
      y_pos = y_pos + 35;
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const back_button = lnkfish$$create_help_back_button("返回", { _0: 332.5, _1: 650 });
  moonbitlang$core$array$$Array$push$4$(lnkfish$$help_text_entities.val, back_button);
  lnkfish$$help_initialized.val = true;
}
function lnkfish$$handle_help_input_system(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 4)) {
    return;
  } else {
    return;
  }
}
function lnkfish$$play_game_bgm() {
  if (!lnkfish$$bgm_enabled.val) {
    lnkfish$$mute_bgm_by_path(lnkfish$$bgm_menu);
    lnkfish$$mute_bgm_by_path(lnkfish$$bgm_game);
    lnkfish$$current_bgm_path.val = lnkfish$$bgm_game;
    return undefined;
  }
  if (moonbitlang$core$builtin$$Eq$equal$53$(lnkfish$$current_bgm_path.val, lnkfish$$bgm_menu)) {
    lnkfish$$mute_bgm_by_path(lnkfish$$bgm_menu);
  }
  Milky2018$selene$audio$$play_audio$46$inner(lnkfish$$bgm_game, 0.3, true);
  lnkfish$$current_bgm_path.val = lnkfish$$bgm_game;
}
function lnkfish$$create_audio_toggle_button(text, pos, is_bgm, is_on) {
  const button = Milky2018$selene$system$$Entity$new();
  const is_current = is_bgm ? lnkfish$$bgm_enabled.val === is_on : lnkfish$$sfx_enabled.val === is_on;
  const text_color = is_current ? "black" : "white";
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, text_color, "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 60, _1: 50 }, { _0: 10, _1: -30 }));
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    if (is_bgm) {
      lnkfish$$bgm_enabled.val = is_on;
      if (!is_on) {
        lnkfish$$mute_bgm_by_path(lnkfish$$bgm_menu);
        lnkfish$$mute_bgm_by_path(lnkfish$$bgm_game);
      } else {
        const _bind$8 = lnkfish$$current_bgm_path.val;
        if (_bind$8 === undefined) {
        } else {
          const _Some = _bind$8;
          const _path = _Some;
          if (_path === lnkfish$$bgm_menu) {
            lnkfish$$play_menu_bgm();
          } else {
            if (_path === lnkfish$$bgm_game) {
              lnkfish$$play_game_bgm();
            }
          }
        }
      }
    } else {
      lnkfish$$sfx_enabled.val = is_on;
    }
    lnkfish$$game_settings_initialized.val = false;
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$create_settings_back_button(text, pos) {
  const button = Milky2018$selene$system$$Entity$new();
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "white", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    lnkfish$$game_state.val = 1;
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$create_speed_setting_button(text, pos, speed_level) {
  const button = Milky2018$selene$system$$Entity$new();
  const text_color = moonbitlang$core$builtin$$Eq$equal$24$(lnkfish$$current_rotation_speed_level.val, speed_level) ? "black" : "white";
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, text_color, "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 60, _1: 50 }, { _0: 10, _1: -30 }));
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    lnkfish$$current_rotation_speed_level.val = speed_level;
    lnkfish$$game_settings_initialized.val = false;
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$game_settings_system(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 3)) {
    if (lnkfish$$game_settings_initialized.val) {
      const _arr = lnkfish$$game_settings_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const entity = _arr[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$game_settings_entities.val);
      lnkfish$$game_settings_initialized.val = false;
    }
    return undefined;
  }
  if (lnkfish$$game_settings_initialized.val) {
    return undefined;
  }
  const _arr = lnkfish$$game_settings_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$game_settings_entities.val);
  const title = Milky2018$selene$system$$Entity$new();
  const title_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("游戏设置", "grey", "60px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, title, title_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, title, { _0: 252.5, _1: 100 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, title);
  const speed_label = Milky2018$selene$system$$Entity$new();
  const speed_label_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("旋转速度", "grey", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, speed_label, speed_label_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, speed_label, { _0: 120, _1: 220 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, speed_label, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, speed_label);
  const slow_button = lnkfish$$create_speed_setting_button("慢", { _0: 330, _1: 220 }, 0);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, slow_button);
  const medium_button = lnkfish$$create_speed_setting_button("中", { _0: 420, _1: 220 }, 1);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, medium_button);
  const fast_button = lnkfish$$create_speed_setting_button("快", { _0: 510, _1: 220 }, 2);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, fast_button);
  const bgm_label = Milky2018$selene$system$$Entity$new();
  const bgm_label_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("背景音乐", "grey", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, bgm_label, bgm_label_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, bgm_label, { _0: 120, _1: 320 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, bgm_label, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, bgm_label);
  const bgm_on_button = lnkfish$$create_audio_toggle_button("开", { _0: 330, _1: 320 }, true, true);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, bgm_on_button);
  const bgm_off_button = lnkfish$$create_audio_toggle_button("关", { _0: 420, _1: 320 }, true, false);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, bgm_off_button);
  const sfx_label = Milky2018$selene$system$$Entity$new();
  const sfx_label_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("游戏音效", "grey", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, sfx_label, sfx_label_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, sfx_label, { _0: 120, _1: 420 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, sfx_label, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, sfx_label);
  const sfx_on_button = lnkfish$$create_audio_toggle_button("开", { _0: 330, _1: 420 }, false, true);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, sfx_on_button);
  const sfx_off_button = lnkfish$$create_audio_toggle_button("关", { _0: 420, _1: 420 }, false, false);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, sfx_off_button);
  const back_button = lnkfish$$create_settings_back_button("返回", { _0: 332.5, _1: 540 });
  moonbitlang$core$array$$Array$push$4$(lnkfish$$game_settings_entities.val, back_button);
  lnkfish$$game_settings_initialized.val = true;
}
function lnkfish$$create_leaderboard_back_button(text, pos) {
  const button = Milky2018$selene$system$$Entity$new();
  const button_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(text, "white", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, button, button_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, button, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, button, Milky2018$selene$ui$$Ui$new());
  const _p = text.length;
  const text_width = (_p + 0) * 30;
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, button, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: text_width, _1: 40 }, { _0: 10, _1: -30 }));
  moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, button, { text: text, normal_color: "white", hover_color: "black", is_hovered: false });
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    lnkfish$$game_state.val = 8;
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, button, pickable);
  return button;
}
function lnkfish$$leaderboard_system(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 10)) {
    if (lnkfish$$leaderboard_initialized.val) {
      const _arr = lnkfish$$leaderboard_ui_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const entity = _arr[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$leaderboard_ui_entities.val);
      lnkfish$$leaderboard_initialized.val = false;
    }
    return undefined;
  }
  if (lnkfish$$leaderboard_initialized.val) {
    return undefined;
  }
  const _arr = lnkfish$$leaderboard_ui_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$leaderboard_ui_entities.val);
  const overlay = Milky2018$selene$system$$Entity$new();
  const overlay_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 580, _1: 700 }, "rgba(0, 0, 0, 0.5)");
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, overlay, Milky2018$selene$sprite$$Sprite$from_color_rect(overlay_rect, 99, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, overlay, { _0: 80, _1: 0 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, overlay, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$leaderboard_ui_entities.val, overlay);
  const title = Milky2018$selene$system$$Entity$new();
  const title_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("排行榜", "white", "60px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, title, title_text);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, title, { _0: 282.5, _1: 60 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$leaderboard_ui_entities.val, title);
  const entries = lnkfish$$leaderboard_entries.val;
  if (entries.length === 0) {
    const empty_text = Milky2018$selene$system$$Entity$new();
    const empty_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("暂无记录", "white", "30px QIJIFALLBACK"), 100, undefined);
    moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, empty_text, empty_sprite);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, empty_text, { _0: 292.5, _1: 250 });
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, empty_text, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$4$(lnkfish$$leaderboard_ui_entities.val, empty_text);
  } else {
    let y_pos = 150;
    const _len$2 = entries.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const entry = entries[_i];
        const rank_text = Milky2018$selene$system$$Entity$new();
        const _bind$8 = entry.rank;
        let rank_chinese;
        switch (_bind$8) {
          case 1: {
            rank_chinese = "壹";
            break;
          }
          case 2: {
            rank_chinese = "贰";
            break;
          }
          case 3: {
            rank_chinese = "叁";
            break;
          }
          case 4: {
            rank_chinese = "肆";
            break;
          }
          case 5: {
            rank_chinese = "伍";
            break;
          }
          case 6: {
            rank_chinese = "陆";
            break;
          }
          case 7: {
            rank_chinese = "柒";
            break;
          }
          case 8: {
            rank_chinese = "捌";
            break;
          }
          case 9: {
            rank_chinese = "玖";
            break;
          }
          case 10: {
            rank_chinese = "拾";
            break;
          }
          default: {
            rank_chinese = moonbitlang$core$builtin$$Show$to_string$21$(entry.rank);
          }
        }
        const formatted_score = entry.score < 10 ? `00${moonbitlang$core$builtin$$Show$to_string$21$(entry.score)}` : entry.score < 100 ? `0${moonbitlang$core$builtin$$Show$to_string$21$(entry.score)}` : moonbitlang$core$builtin$$Show$to_string$21$(entry.score);
        const content = `${rank_chinese}丨${formatted_score}`;
        const text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(content, "white", "30px QIJIFALLBACK"), 100, undefined);
        moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, rank_text, text_sprite);
        moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, rank_text, { _0: 300, _1: y_pos });
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, rank_text, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$4$(lnkfish$$leaderboard_ui_entities.val, rank_text);
        y_pos = y_pos + 45;
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const back_button = lnkfish$$create_leaderboard_back_button("返回", { _0: 332.5, _1: 600 });
  moonbitlang$core$array$$Array$push$4$(lnkfish$$leaderboard_ui_entities.val, back_button);
  lnkfish$$leaderboard_initialized.val = true;
}
function lnkfish$$loading_system(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 0)) {
    if (lnkfish$$loading_initialized.val) {
      const _arr = lnkfish$$loading_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const entity = _arr[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$loading_entities.val);
      lnkfish$$loading_initialized.val = false;
    }
    return undefined;
  }
  if (lnkfish$$loading_initialized.val) {
    return undefined;
  }
  const _arr = lnkfish$$loading_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$4$(lnkfish$$loading_entities.val);
  const title = Milky2018$selene$system$$Entity$new();
  const title_sprite = Milky2018$selene$sprite$$Sprite$from_picture(lnkfish$$menu_title_picture, 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, title, title_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, title, { _0: 100, _1: 150 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$loading_entities.val, title);
  const hint_text = Milky2018$selene$system$$Entity$new();
  const hint_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("点击任意位置开始游戏", "grey", "40px QIJIFALLBACK"), 100, undefined);
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, hint_text, hint_sprite);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, hint_text, { _0: 225, _1: 450 });
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$ui$$uis, hint_text, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$4$(lnkfish$$loading_entities.val, hint_text);
  const click_area = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, click_area, { _0: 0, _1: 0 });
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, click_area, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 745, _1: 700 }, { _0: 0, _1: 0 }));
  const pickable = Milky2018$selene$collision$$Pickable$new();
  Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, (_mouse_button) => {
    lnkfish$$play_menu_bgm();
    lnkfish$$game_state.val = 1;
  });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$collision$$pickables, click_area, pickable);
  moonbitlang$core$array$$Array$push$4$(lnkfish$$loading_entities.val, click_area);
  lnkfish$$loading_initialized.val = true;
}
function lnkfish$$button_hover_system(_delta) {
  const mouse_pos = Milky2018$selene$inputs$$mouse.pos;
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
  const _bind$8 = moonbitlang$core$builtin$$Map$iter2$22$(lnkfish$$button_states);
  _bind$8((entity, button_state) => {
    if (Milky2018$selene$system$$Entity$is_alive(entity)) {
      const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, entity);
      if (_bind$9 === undefined) {
        $panic();
      } else {
        const _Some = _bind$9;
        const _position = _Some;
        const _bind$10 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, entity);
        if (_bind$10 === undefined) {
          return 1;
        } else {
          const _Some$2 = _bind$10;
          const _shape = _Some$2;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$11 = { _0: _width, _1: _height };
          const _bind$12 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const area_box = { position: _bind$12, size: _bind$11 };
          const _bind$13 = { _0: 1, _1: 1 };
          const mouse_box = { position: mouse_pos, size: _bind$13 };
          const is_hovering = Milky2018$selene$math$$Rect$intersects(mouse_box, area_box);
          const target_color = is_hovering ? button_state.hover_color : button_state.normal_color;
          const _p = button_state.is_hovered;
          if (!(is_hovering === _p)) {
            moonbitlang$core$builtin$$Map$set$22$(lnkfish$$button_states, entity, { text: button_state.text, normal_color: button_state.normal_color, hover_color: button_state.hover_color, is_hovered: is_hovering });
            const _p$2 = button_state.text;
            const font = _p$2 === "停" ? "42px QIJIFALLBACK" : "40px QIJIFALLBACK";
            const new_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(button_state.text, target_color, font), 100, undefined);
            moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, new_sprite);
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
function lnkfish$$play_sfx(sfx_path, volume) {
  Milky2018$selene$audio$$play_audio$46$inner(sfx_path, volume, false);
}
function lnkfish$$play_flow_in_sfx() {
  if (lnkfish$$sfx_enabled.val) {
    lnkfish$$play_sfx(lnkfish$$sfx_flow_in, 0.8);
    return;
  } else {
    return;
  }
}
function lnkfish$$play_flow_out_sfx() {
  if (lnkfish$$sfx_enabled.val) {
    lnkfish$$play_sfx(lnkfish$$sfx_flow_out, 0.8);
    return;
  } else {
    return;
  }
}
function lnkfish$$flow_mode_system(delta) {
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 7)) {
    return undefined;
  }
  if (lnkfish$$is_in_flow_mode.val) {
    const _bind$8 = lnkfish$$flow_mode_entity.val;
    if (_bind$8 === undefined) {
      lnkfish$$is_in_flow_mode.val = false;
    } else {
      const _Some = _bind$8;
      const _entity = _Some;
      const _p = moonbitlang$core$builtin$$Map$get$31$(lnkfish$$flow_mode_state, _entity);
      let flow_mode;
      if (_p === undefined) {
        flow_mode = $panic();
      } else {
        const _p$2 = _p;
        flow_mode = _p$2;
      }
      const new_duration = flow_mode.duration - delta;
      if (new_duration <= 0) {
        lnkfish$$is_in_flow_mode.val = false;
        moonbitlang$core$builtin$$Map$remove$31$(lnkfish$$flow_mode_state, _entity);
        Milky2018$selene$system$$Entity$destroy(_entity);
        lnkfish$$flow_mode_entity.val = undefined;
      } else {
        moonbitlang$core$builtin$$Map$set$31$(lnkfish$$flow_mode_state, _entity, { duration: new_duration });
      }
    }
  }
  const _p = lnkfish$$is_in_flow_mode.val;
  const _p$2 = lnkfish$$last_flow_mode_state.val;
  if (!(_p === _p$2)) {
    if (lnkfish$$is_in_flow_mode.val) {
      moonbitlang$core$builtin$$println$48$("ENTERING FLOW MODE: Updating colliders for fish and obstacles.");
      lnkfish$$play_flow_in_sfx();
      const _arr = lnkfish$$collider_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const fish_entity = _arr[_i];
          moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, fish_entity, Milky2018$selene$collision$$Collider$new([lnkfish$$taiji_layer, lnkfish$$red_obstacle_layer]));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _arr$2 = lnkfish$$obstacle_entities.val;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const obstacle_entity = _arr$2[_i];
          const _bind$8 = moonbitlang$core$builtin$$Map$get$32$(lnkfish$$obstacles, obstacle_entity);
          if (_bind$8 === undefined) {
          } else {
            const _Some = _bind$8;
            const _obstacle = _Some;
            _L: {
              _L$2: {
                const _bind$9 = _obstacle.obstacle_type;
                switch (_bind$9) {
                  case 0: {
                    break _L$2;
                  }
                  case 1: {
                    break _L$2;
                  }
                }
                break _L;
              }
              moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, obstacle_entity, Milky2018$selene$collision$$Collider$new([]));
            }
          }
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      moonbitlang$core$builtin$$println$48$("EXITING FLOW MODE: Restoring colliders for fish and obstacles.");
      lnkfish$$play_flow_out_sfx();
      const _arr = lnkfish$$collider_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const fish_entity = _arr[_i];
          const _bind$8 = moonbitlang$core$builtin$$Map$get$29$(lnkfish$$fish_colliders, fish_entity);
          if (_bind$8 === undefined) {
          } else {
            const _Some = _bind$8;
            const _fish = _Some;
            const _bind$9 = _fish.fish_type;
            if (_bind$9 === 0) {
              moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, fish_entity, Milky2018$selene$collision$$Collider$new([lnkfish$$black_obstacle_layer, lnkfish$$taiji_layer, lnkfish$$red_obstacle_layer]));
            } else {
              moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, fish_entity, Milky2018$selene$collision$$Collider$new([lnkfish$$white_obstacle_layer, lnkfish$$taiji_layer, lnkfish$$red_obstacle_layer]));
            }
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _arr$2 = lnkfish$$obstacle_entities.val;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const obstacle_entity = _arr$2[_i];
          const _bind$8 = moonbitlang$core$builtin$$Map$get$32$(lnkfish$$obstacles, obstacle_entity);
          if (_bind$8 === undefined) {
          } else {
            const _Some = _bind$8;
            const _obstacle = _Some;
            const _bind$9 = _obstacle.obstacle_type;
            switch (_bind$9) {
              case 0: {
                moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, obstacle_entity, Milky2018$selene$collision$$Collider$new([lnkfish$$white_fish_layer]));
                break;
              }
              case 1: {
                moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, obstacle_entity, Milky2018$selene$collision$$Collider$new([lnkfish$$black_fish_layer]));
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
    lnkfish$$last_flow_mode_state.val = lnkfish$$is_in_flow_mode.val;
    return;
  } else {
    return;
  }
}
function lnkfish$$handle_input(delta) {
  const _bind$8 = lnkfish$$game_state.val;
  switch (_bind$8) {
    case 0: {
      return;
    }
    case 1: {
      return;
    }
    case 2: {
      return;
    }
    case 3: {
      return;
    }
    case 4: {
      return;
    }
    case 10: {
      return;
    }
    case 5: {
      if (Milky2018$selene$inputs$$is_just_pressed(30)) {
        lnkfish$$play_game_bgm();
        lnkfish$$game_state.val = 6;
        return;
      } else {
        return;
      }
    }
    case 6: {
      const _bind$9 = lnkfish$$visual_entity.val;
      if (_bind$9 === undefined) {
        return undefined;
      }
      const _bind$10 = lnkfish$$current_rotation_speed_level.val;
      let base_rotation_speed;
      switch (_bind$10) {
        case 0: {
          base_rotation_speed = 90;
          break;
        }
        case 1: {
          base_rotation_speed = 120;
          break;
        }
        default: {
          base_rotation_speed = 180;
        }
      }
      const rotation_amount = base_rotation_speed * delta;
      const left_pressed = Milky2018$selene$inputs$$is_pressed(28) || Milky2018$selene$inputs$$is_pressed(0);
      const right_pressed = Milky2018$selene$inputs$$is_pressed(29) || Milky2018$selene$inputs$$is_pressed(3);
      if (left_pressed) {
        lnkfish$$current_rotation_speed.val = -rotation_amount;
        return;
      } else {
        if (right_pressed) {
          lnkfish$$current_rotation_speed.val = rotation_amount;
          return;
        } else {
          lnkfish$$current_rotation_speed.val = 0;
          return;
        }
      }
    }
    case 7: {
      return;
    }
    case 8: {
      if (Milky2018$selene$inputs$$is_just_pressed(30)) {
        lnkfish$$reset_game();
        return;
      } else {
        return;
      }
    }
    default: {
      if (lnkfish$$current_level_index.val >= (lnkfish$$all_levels.length - 1 | 0)) {
        return;
      } else {
        if (Milky2018$selene$inputs$$is_just_pressed(30)) {
          lnkfish$$current_level_index.val = lnkfish$$current_level_index.val + 1 | 0;
          lnkfish$$reset_game();
          return;
        } else {
          return;
        }
      }
    }
  }
}
function lnkfish$$create_black_obstacle(pos, variant) {
  const entity = Milky2018$selene$system$$Entity$new();
  let picture;
  let collider_size;
  let collider_offset;
  _L: {
    if (variant === 0) {
      const _tmp = { _0: 195, _1: 40 };
      const _tmp$2 = { _0: 22.5, _1: 25 };
      picture = lnkfish$$black_obstacle_v1_picture;
      collider_size = _tmp;
      collider_offset = _tmp$2;
      break _L;
    } else {
      const _tmp = { _0: 45, _1: 270 };
      const _tmp$2 = { _0: 50, _1: 27.5 };
      picture = lnkfish$$black_obstacle_v2_picture;
      collider_size = _tmp;
      collider_offset = _tmp$2;
      break _L;
    }
  }
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture(picture, 5, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(collider_size, collider_offset));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, lnkfish$$black_obstacle_layer);
  const mask = lnkfish$$is_in_flow_mode.val ? [] : [lnkfish$$white_fish_layer];
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new(mask));
  moonbitlang$core$builtin$$Map$set$32$(lnkfish$$obstacles, entity, { obstacle_type: 0, variant: variant });
  return entity;
}
function lnkfish$$create_red_obstacle(pos, variant) {
  const entity = Milky2018$selene$system$$Entity$new();
  let picture;
  if (variant === 0) {
    picture = lnkfish$$red_obstacle_v1_picture;
  } else {
    picture = lnkfish$$red_obstacle_v2_picture;
  }
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture(picture, 5, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 80, _1: 80 }, { _0: 1.5, _1: 1.5 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, lnkfish$$red_obstacle_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new([lnkfish$$black_fish_layer, lnkfish$$white_fish_layer]));
  moonbitlang$core$builtin$$Map$set$32$(lnkfish$$obstacles, entity, { obstacle_type: 2, variant: variant });
  return entity;
}
function lnkfish$$create_white_obstacle(pos, variant) {
  const entity = Milky2018$selene$system$$Entity$new();
  let picture;
  let collider_size;
  let collider_offset;
  _L: {
    if (variant === 0) {
      const _tmp = { _0: 85, _1: 90 };
      const _tmp$2 = { _0: 37.5, _1: 35 };
      picture = lnkfish$$white_obstacle_v1_picture;
      collider_size = _tmp;
      collider_offset = _tmp$2;
      break _L;
    } else {
      const _tmp = { _0: 140, _1: 115 };
      const _tmp$2 = { _0: 50, _1: 40 };
      picture = lnkfish$$white_obstacle_v2_picture;
      collider_size = _tmp;
      collider_offset = _tmp$2;
      break _L;
    }
  }
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture(picture, 5, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(collider_size, collider_offset));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, lnkfish$$white_obstacle_layer);
  const mask = lnkfish$$is_in_flow_mode.val ? [] : [lnkfish$$black_fish_layer];
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new(mask));
  moonbitlang$core$builtin$$Map$set$32$(lnkfish$$obstacles, entity, { obstacle_type: 1, variant: variant });
  return entity;
}
function lnkfish$$get_difficulty_params(score) {
  return score < 100 ? { delay_min: 1.6, delay_max: 2.4, black_weight: 35, white_weight: 35, red_weight: 30 } : score < 300 ? { delay_min: 1.3, delay_max: 2, black_weight: 30, white_weight: 30, red_weight: 40 } : { delay_min: 1, delay_max: 1.6, black_weight: 25, white_weight: 25, red_weight: 50 };
}
function lnkfish$$next_rand_double() {
  lnkfish$$rand_seed.val = ((Math.imul(1103515245, lnkfish$$rand_seed.val) | 0) + 12345 | 0) % 2147483647 | 0;
  const _p = lnkfish$$rand_seed.val;
  const _tmp = _p + 0;
  const _p$2 = 2147483647;
  return _tmp / (_p$2 + 0);
}
function lnkfish$$generate_random_delay(current_score) {
  const params = lnkfish$$get_difficulty_params(current_score);
  const range = params.delay_max - params.delay_min;
  return params.delay_min + lnkfish$$next_rand_double() * range;
}
function lnkfish$$next_rand_int(max) {
  lnkfish$$rand_seed.val = ((Math.imul(1103515245, lnkfish$$rand_seed.val) | 0) + 12345 | 0) % 2147483647 | 0;
  const result = lnkfish$$rand_seed.val % max | 0;
  return result < 0 ? -result | 0 : result;
}
function lnkfish$$generate_random_obstacle_type(current_score) {
  const params = lnkfish$$get_difficulty_params(current_score);
  const rand_val = lnkfish$$next_rand_int(100);
  return rand_val < params.black_weight ? 0 : rand_val < (params.black_weight + params.white_weight | 0) ? 1 : 2;
}
function lnkfish$$generate_random_variant() {
  return lnkfish$$next_rand_int(2) === 0 ? 0 : 1;
}
function lnkfish$$generate_random_x_position(obstacle_type, variant) {
  let _bind$8;
  switch (obstacle_type) {
    case 0: {
      if (variant === 0) {
        _bind$8 = lnkfish$$black_v1_x_range;
      } else {
        _bind$8 = lnkfish$$black_v2_x_range;
      }
      break;
    }
    case 1: {
      if (variant === 0) {
        _bind$8 = lnkfish$$white_v1_x_range;
      } else {
        _bind$8 = lnkfish$$white_v2_x_range;
      }
      break;
    }
    default: {
      _bind$8 = lnkfish$$red_x_range;
    }
  }
  const _x_min = _bind$8._0;
  const _x_max = _bind$8._1;
  const range = _x_max - _x_min;
  return _x_min + lnkfish$$next_rand_double() * range;
}
function lnkfish$$is_obstacle_safe_spacing(new_type, new_x, last_type, last_x) {
  const x_diff = Math.abs(new_x - last_x);
  if (moonbitlang$core$builtin$$Eq$equal$44$(new_type, last_type)) {
    return x_diff > 80;
  }
  return x_diff > 50;
}
function lnkfish$$count_red_obstacles(active_obstacles) {
  let count = 0;
  const _len = active_obstacles.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = active_obstacles[_i];
      const _bind$8 = moonbitlang$core$builtin$$Map$get$32$(lnkfish$$obstacles, entity);
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _obstacle = _Some;
        if (moonbitlang$core$builtin$$Eq$equal$44$(_obstacle.obstacle_type, 2)) {
          count = count + 1 | 0;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return count;
}
function lnkfish$$is_safe_to_generate(new_type, new_x, active_obstacles) {
  if (moonbitlang$core$builtin$$Eq$equal$44$(new_type, 2)) {
    const red_count = lnkfish$$count_red_obstacles(active_obstacles);
    if (red_count >= 2) {
      return false;
    }
  }
  const _len = active_obstacles.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = active_obstacles[_i];
      const _bind$8 = moonbitlang$core$builtin$$Map$get$32$(lnkfish$$obstacles, entity);
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _obstacle = _Some;
        const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, entity);
        if (_bind$9 === undefined) {
        } else {
          const _Some$2 = _bind$9;
          const _pos = _Some$2;
          const x_diff = Math.abs(new_x - Milky2018$selene$math$$Vec2D$op_get(_pos, 0));
          if (moonbitlang$core$builtin$$Eq$equal$44$(_obstacle.obstacle_type, new_type) && x_diff < 100) {
            return false;
          }
          if (moonbitlang$core$builtin$$op_notequal$44$(_obstacle.obstacle_type, new_type) && x_diff < 60) {
            return false;
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function lnkfish$$generate_single_obstacle(current_score, active_obstacles, last_info) {
  const params = lnkfish$$get_difficulty_params(current_score);
  let retry_count = 0;
  while (true) {
    if (retry_count < 20) {
      const obstacle_type = lnkfish$$generate_random_obstacle_type(current_score);
      const variant = lnkfish$$generate_random_variant();
      const x_position = lnkfish$$generate_random_x_position(obstacle_type, variant);
      let safe_from_last;
      if (last_info === undefined) {
        safe_from_last = true;
      } else {
        const _Some = last_info;
        const _info = _Some;
        safe_from_last = lnkfish$$is_obstacle_safe_spacing(obstacle_type, x_position, _info.obstacle_type, _info.x_position);
      }
      if (safe_from_last && lnkfish$$is_safe_to_generate(obstacle_type, x_position, active_obstacles)) {
        const delay = lnkfish$$generate_random_delay(current_score);
        return { obstacle_type: obstacle_type, variant: variant, x_position: x_position, delay: delay };
      }
      retry_count = retry_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let safe_type;
  if (last_info === undefined) {
    safe_type = 0;
  } else {
    const _Some = last_info;
    const _info = _Some;
    if (moonbitlang$core$builtin$$Eq$equal$44$(_info.obstacle_type, 0)) {
      safe_type = 1;
    } else {
      moonbitlang$core$builtin$$Eq$equal$44$(_info.obstacle_type, 1);
      safe_type = 0;
    }
  }
  const safe_delay = params.delay_max;
  return { obstacle_type: safe_type, variant: 0, x_position: 265, delay: safe_delay };
}
function lnkfish$$obstacle_system(delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 6)) {
    return undefined;
  }
  if (lnkfish$$is_endless_mode.val) {
    lnkfish$$obstacle_spawn_timer.val = lnkfish$$obstacle_spawn_timer.val + delta;
    const params = lnkfish$$get_difficulty_params(lnkfish$$score.val);
    const current_delay = params.delay_min + (params.delay_max - params.delay_min) * 0.5;
    if (lnkfish$$obstacle_spawn_timer.val > current_delay) {
      lnkfish$$obstacle_spawn_timer.val = 0;
      const spawn_info = lnkfish$$generate_single_obstacle(lnkfish$$score.val, lnkfish$$obstacle_entities.val, lnkfish$$last_generated_obstacle.val);
      const pos = { _0: spawn_info.x_position, _1: -200 };
      const _bind$8 = spawn_info.obstacle_type;
      let entity;
      switch (_bind$8) {
        case 0: {
          entity = lnkfish$$create_black_obstacle(pos, spawn_info.variant);
          break;
        }
        case 1: {
          entity = lnkfish$$create_white_obstacle(pos, spawn_info.variant);
          break;
        }
        default: {
          entity = lnkfish$$create_red_obstacle(pos, spawn_info.variant);
        }
      }
      moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, entity, { _0: 0, _1: 200 });
      moonbitlang$core$array$$Array$push$4$(lnkfish$$obstacle_entities.val, entity);
      lnkfish$$last_generated_obstacle.val = { obstacle_type: spawn_info.obstacle_type, x_position: spawn_info.x_position };
    }
  } else {
    const current_level_data = moonbitlang$core$array$$Array$at$45$(lnkfish$$all_levels, lnkfish$$current_level_index.val);
    const current_level_obstacles = current_level_data.obstacle_sequence;
    if (lnkfish$$level_current_index.val < current_level_obstacles.length) {
      lnkfish$$obstacle_spawn_timer.val = lnkfish$$obstacle_spawn_timer.val + delta;
      const current_spawn_info = moonbitlang$core$array$$Array$at$46$(current_level_obstacles, lnkfish$$level_current_index.val);
      if (lnkfish$$obstacle_spawn_timer.val > current_spawn_info.delay) {
        lnkfish$$obstacle_spawn_timer.val = 0;
        const pos = { _0: current_spawn_info.x_position, _1: -200 };
        const _bind$8 = current_spawn_info.obstacle_type;
        let entity;
        switch (_bind$8) {
          case 0: {
            entity = lnkfish$$create_black_obstacle(pos, current_spawn_info.variant);
            break;
          }
          case 1: {
            entity = lnkfish$$create_white_obstacle(pos, current_spawn_info.variant);
            break;
          }
          default: {
            entity = lnkfish$$create_red_obstacle(pos, current_spawn_info.variant);
          }
        }
        moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, entity, { _0: 0, _1: 200 });
        moonbitlang$core$array$$Array$push$4$(lnkfish$$obstacle_entities.val, entity);
        lnkfish$$level_current_index.val = lnkfish$$level_current_index.val + 1 | 0;
      }
    } else {
      if (!lnkfish$$game_won_timer_set.val) {
        lnkfish$$game_won_timer_set.val = true;
        const current_session = lnkfish$$game_session_id.val;
        Milky2018$selene$system$$timeout$46$inner(5, () => {
          if (lnkfish$$game_session_id.val === current_session && moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 6)) {
            lnkfish$$game_state.val = 9;
            return;
          } else {
            return;
          }
        }, true);
      }
    }
  }
  const remaining_obstacles = moonbitlang$core$array$$Array$new$46$inner$4$(0);
  const _arr = lnkfish$$obstacle_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, entity);
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _pos = _Some;
        if (Milky2018$selene$math$$Vec2D$op_get(_pos, 1) < 800) {
          moonbitlang$core$array$$Array$push$4$(remaining_obstacles, entity);
        } else {
          Milky2018$selene$system$$Entity$destroy(entity);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  lnkfish$$obstacle_entities.val = remaining_obstacles;
}
function lnkfish$$create_fish(center) {
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_animation(lnkfish$$drift_animation, 10, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, center);
  lnkfish$$visual_entity.val = entity;
  const white_fish_collider = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, white_fish_collider, center);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, white_fish_collider, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 67.5, _1: 67.5 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$28$(lnkfish$$initial_offsets, white_fish_collider, { _0: -77.5, _1: -77.5 });
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, white_fish_collider, lnkfish$$white_fish_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, white_fish_collider, Milky2018$selene$collision$$Collider$new([lnkfish$$black_obstacle_layer, lnkfish$$taiji_layer, lnkfish$$red_obstacle_layer]));
  moonbitlang$core$builtin$$Map$set$29$(lnkfish$$fish_colliders, white_fish_collider, { fish_type: 0 });
  moonbitlang$core$array$$Array$push$4$(lnkfish$$collider_entities.val, white_fish_collider);
  const black_fish_collider = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, black_fish_collider, center);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, black_fish_collider, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 67.5, _1: 67.5 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$28$(lnkfish$$initial_offsets, black_fish_collider, { _0: 77.5, _1: 77.5 });
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, black_fish_collider, lnkfish$$black_fish_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, black_fish_collider, Milky2018$selene$collision$$Collider$new([lnkfish$$white_obstacle_layer, lnkfish$$taiji_layer, lnkfish$$red_obstacle_layer]));
  moonbitlang$core$builtin$$Map$set$29$(lnkfish$$fish_colliders, black_fish_collider, { fish_type: 1 });
  moonbitlang$core$array$$Array$push$4$(lnkfish$$collider_entities.val, black_fish_collider);
}
function lnkfish$$prepare_game_system(_delta) {
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 5) && !lnkfish$$game_ready_initialized.val) {
    lnkfish$$create_fish({ _0: 250, _1: 400 });
    lnkfish$$game_ready_initialized.val = true;
  }
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 1)) {
    if (lnkfish$$game_ready_initialized.val) {
      const _bind$8 = lnkfish$$visual_entity.val;
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _entity = _Some;
        Milky2018$selene$system$$Entity$destroy(_entity);
      }
      const _arr = lnkfish$$collider_entities.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const entity = _arr[_i];
          Milky2018$selene$system$$Entity$destroy(entity);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      lnkfish$$visual_entity.val = undefined;
      moonbitlang$core$array$$Array$clear$4$(lnkfish$$collider_entities.val);
      lnkfish$$game_ready_initialized.val = false;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function lnkfish$$play_die_sfx() {
  if (lnkfish$$sfx_enabled.val) {
    lnkfish$$play_sfx(lnkfish$$sfx_die, 0.8);
    return;
  } else {
    return;
  }
}
function lnkfish$$process_collision(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 6)) {
    return undefined;
  }
  const _arr = lnkfish$$obstacle_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const collisions = Milky2018$selene$collision$$get_collision_infos(entity);
      if (!(collisions.length === 0)) {
        lnkfish$$game_state.val = 8;
        moonbitlang$core$builtin$$println$48$(`Collision detected with obstacle: ${moonbitlang$core$builtin$$Show$to_string$50$(entity)}!`);
        lnkfish$$play_die_sfx();
        if (moonbitlang$core$builtin$$Map$contains$32$(lnkfish$$obstacles, entity)) {
          const _p = moonbitlang$core$builtin$$Map$get$32$(lnkfish$$obstacles, entity);
          let obstacle;
          if (_p === undefined) {
            obstacle = $panic();
          } else {
            const _p$2 = _p;
            obstacle = _p$2;
          }
          const _bind$8 = obstacle.obstacle_type;
          const _bind$9 = obstacle.variant;
          switch (_bind$8) {
            case 0: {
              if (_bind$9 === 0) {
                moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture(lnkfish$$black_obstacle_v1_hit_picture, 10, undefined));
              } else {
                moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture(lnkfish$$black_obstacle_v2_hit_picture, 10, undefined));
              }
              break;
            }
            case 1: {
              if (_bind$9 === 0) {
                moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture(lnkfish$$white_obstacle_v1_hit_picture, 10, undefined));
              } else {
                moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_picture(lnkfish$$white_obstacle_v2_hit_picture, 10, undefined));
              }
              break;
            }
          }
        }
        const _arr$2 = lnkfish$$obstacle_entities.val;
        const _len$2 = _arr$2.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const o_entity = _arr$2[_i$2];
            moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$velocity$$velocities, o_entity);
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _arr$3 = lnkfish$$taiji_entities.val;
        const _len$3 = _arr$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _i$2 = _tmp$3;
          if (_i$2 < _len$3) {
            const t_entity = _arr$3[_i$2];
            moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$velocity$$velocities, t_entity);
            _tmp$3 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return undefined;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function lnkfish$$play_coin_sfx(in_flow_mode) {
  if (!lnkfish$$sfx_enabled.val) {
    return undefined;
  }
  const volume = in_flow_mode ? 0.5 : 0.7;
  lnkfish$$play_sfx(lnkfish$$sfx_coin, volume);
}
function lnkfish$$process_taiji_collision(_delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 6)) {
    return undefined;
  }
  const collected_taijis = moonbitlang$core$array$$Array$new$46$inner$4$(0);
  const _arr = lnkfish$$taiji_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const taiji_entity = _arr[_i];
      const collisions = Milky2018$selene$collision$$get_collision_infos(taiji_entity);
      if (!(collisions.length === 0)) {
        moonbitlang$core$array$$Array$push$4$(collected_taijis, taiji_entity);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!(collected_taijis.length === 0)) {
    const _len$2 = collected_taijis.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const entity_to_collect = collected_taijis[_i];
        lnkfish$$score.val = lnkfish$$score.val + 50 | 0;
        if (!lnkfish$$is_in_flow_mode.val) {
          lnkfish$$flow_mode_score.val = lnkfish$$flow_mode_score.val + 1 | 0;
          if (lnkfish$$flow_mode_score.val >= 3) {
            const _bind$8 = lnkfish$$flow_mode_entity.val;
            if (_bind$8 === undefined) {
              lnkfish$$is_in_flow_mode.val = true;
              lnkfish$$flow_mode_score.val = 0;
              const new_flow_entity = Milky2018$selene$system$$Entity$new();
              moonbitlang$core$builtin$$Map$set$31$(lnkfish$$flow_mode_state, new_flow_entity, { duration: 6 });
              lnkfish$$flow_mode_entity.val = new_flow_entity;
              moonbitlang$core$builtin$$println$48$("Flow Mode Activated!");
            }
          }
        }
        lnkfish$$play_coin_sfx(lnkfish$$is_in_flow_mode.val);
        Milky2018$selene$system$$Entity$destroy(entity_to_collect);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const remaining_taijis = moonbitlang$core$array$$Array$new$46$inner$4$(0);
    const _arr$2 = lnkfish$$taiji_entities.val;
    const _len$3 = _arr$2.length;
    let _tmp$3 = 0;
    while (true) {
      const _i = _tmp$3;
      if (_i < _len$3) {
        const entity = _arr$2[_i];
        if (!moonbitlang$core$array$$Array$contains$4$(collected_taijis, entity)) {
          moonbitlang$core$array$$Array$push$4$(remaining_taijis, entity);
        }
        _tmp$3 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    lnkfish$$taiji_entities.val = remaining_taijis;
    return;
  } else {
    return;
  }
}
function lnkfish$$create_taiji(pos) {
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$14$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$from_animation(lnkfish$$taiji_animation, 11, undefined));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, pos);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$collision$$shapes, entity, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 50, _1: 50 }, { _0: 0, _1: 0 }));
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$collision_layers, entity, lnkfish$$taiji_layer);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$colliders, entity, Milky2018$selene$collision$$Collider$new([lnkfish$$white_fish_layer, lnkfish$$black_fish_layer]));
  moonbitlang$core$builtin$$Map$set$33$(lnkfish$$taijis, entity, { is_taiji: true });
  return entity;
}
function lnkfish$$generate_endless_taijis(batch_size) {
  const taijis = moonbitlang$core$array$$Array$new$46$inner$47$(0);
  const _x_min = lnkfish$$taiji_x_range._0;
  const _x_max = lnkfish$$taiji_x_range._1;
  const _delay_min_val = lnkfish$$taiji_delay_range._0;
  const _delay_max_val = lnkfish$$taiji_delay_range._1;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < batch_size) {
      const x_range = _x_max - _x_min;
      const x_position = _x_min + lnkfish$$next_rand_double() * x_range;
      const delay_range = _delay_max_val - _delay_min_val;
      const delay = _delay_min_val + lnkfish$$next_rand_double() * delay_range;
      moonbitlang$core$array$$Array$push$47$(taijis, { x_position: x_position, delay: delay });
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return taijis;
}
function lnkfish$$taiji_system(delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 6)) {
    return undefined;
  }
  const current_level_data = moonbitlang$core$array$$Array$at$45$(lnkfish$$all_levels, lnkfish$$current_level_index.val);
  if (lnkfish$$is_endless_mode.val) {
    if (lnkfish$$taiji_level_current_index.val >= (current_level_data.taiji_sequence.length - 2 | 0)) {
      const new_batch = lnkfish$$generate_endless_taijis(4);
      const _len = new_batch.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const taiji_info = new_batch[_i];
          moonbitlang$core$array$$Array$push$47$(current_level_data.taiji_sequence, taiji_info);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  const current_level_taijis = current_level_data.taiji_sequence;
  if (lnkfish$$taiji_level_current_index.val < current_level_taijis.length) {
    lnkfish$$taiji_spawn_timer.val = lnkfish$$taiji_spawn_timer.val + delta;
    const current_spawn_info = moonbitlang$core$array$$Array$at$47$(current_level_taijis, lnkfish$$taiji_level_current_index.val);
    if (lnkfish$$taiji_spawn_timer.val > current_spawn_info.delay) {
      lnkfish$$taiji_spawn_timer.val = 0;
      const pos = { _0: current_spawn_info.x_position, _1: -100 };
      const entity = lnkfish$$create_taiji(pos);
      moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$velocity$$velocities, entity, { _0: 0, _1: 200 });
      moonbitlang$core$array$$Array$push$4$(lnkfish$$taiji_entities.val, entity);
      lnkfish$$taiji_level_current_index.val = lnkfish$$taiji_level_current_index.val + 1 | 0;
    }
  }
  const remaining_taijis = moonbitlang$core$array$$Array$new$46$inner$4$(0);
  const _arr = lnkfish$$taiji_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, entity);
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _pos = _Some;
        if (Milky2018$selene$math$$Vec2D$op_get(_pos, 1) < 800) {
          moonbitlang$core$array$$Array$push$4$(remaining_taijis, entity);
        } else {
          Milky2018$selene$system$$Entity$destroy(entity);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  lnkfish$$taiji_entities.val = remaining_taijis;
}
function lnkfish$$time_scoring_system(delta) {
  if (moonbitlang$core$builtin$$op_notequal$19$(lnkfish$$game_state.val, 6)) {
    return undefined;
  }
  lnkfish$$time_score_accumulator.val = lnkfish$$time_score_accumulator.val + lnkfish$$time_score_rate.val * delta;
  if (lnkfish$$time_score_accumulator.val >= 1) {
    const score_to_add = moonbitlang$core$double$$Double$to_int(lnkfish$$time_score_accumulator.val);
    lnkfish$$score.val = lnkfish$$score.val + score_to_add | 0;
    lnkfish$$time_score_accumulator.val = lnkfish$$time_score_accumulator.val - (score_to_add + 0);
    return;
  } else {
    return;
  }
}
function lnkfish$$update_rotation(delta) {
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 7)) {
    lnkfish$$current_rotation_speed.val = 0;
    return undefined;
  }
  if (moonbitlang$core$builtin$$Eq$equal$19$(lnkfish$$game_state.val, 6)) {
  } else {
    lnkfish$$current_rotation_speed.val = 0;
  }
  const _bind$8 = lnkfish$$visual_entity.val;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _v_entity = _Some;
    lnkfish$$current_angle.val = lnkfish$$current_angle.val + lnkfish$$current_rotation_speed.val * delta;
    const translate_to_center = Milky2018$selene$math$$Transform$from_translation(-128.75, -128.75);
    const rotation = Milky2018$selene$math$$Transform$from_rotation_rad(lnkfish$$current_angle.val);
    const translate_back = Milky2018$selene$math$$Transform$from_translation(128.75, 128.75);
    const base_scale = Milky2018$selene$math$$Transform$from_scale(0.25, 0.25);
    const visual_transform = moonbitlang$core$builtin$$Mul$mul$81$(moonbitlang$core$builtin$$Mul$mul$81$(moonbitlang$core$builtin$$Mul$mul$81$(translate_back, rotation), translate_to_center), base_scale);
    if (lnkfish$$current_rotation_speed.val !== 0) {
      if (lnkfish$$current_rotation_speed.val < 0) {
        Milky2018$selene$sprite$$play_animation$46$inner(_v_entity, lnkfish$$swim_counter_animation, false, -1, Option$None$0$, visual_transform);
      } else {
        Milky2018$selene$sprite$$play_animation$46$inner(_v_entity, lnkfish$$swim_animation, false, -1, Option$None$0$, visual_transform);
      }
    } else {
      Milky2018$selene$sprite$$play_animation$46$inner(_v_entity, lnkfish$$drift_animation, false, -1, Option$None$0$, visual_transform);
    }
    const rotation_transform = Milky2018$selene$math$$Transform$from_rotation_rad(lnkfish$$current_angle.val);
    const _p = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _v_entity);
    let visual_pos;
    if (_p === undefined) {
      visual_pos = $panic();
    } else {
      const _p$2 = _p;
      visual_pos = _p$2;
    }
    const sprite_center_offset = { _0: 128.75, _1: 128.75 };
    const rotation_center_world_pos = { _0: visual_pos._0 + sprite_center_offset._0, _1: visual_pos._1 + sprite_center_offset._1 };
    const _arr = lnkfish$$collider_entities.val;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const c_entity = _arr[_i];
        const _bind$9 = moonbitlang$core$builtin$$Map$get$28$(lnkfish$$initial_offsets, c_entity);
        const _bind$10 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$collision$$shapes, c_entity);
        if (_bind$9 === undefined) {
        } else {
          const _Some$2 = _bind$9;
          const _x = _Some$2;
          const _initial_offset = _x;
          if (_bind$10 === undefined) {
          } else {
            const _Some$3 = _bind$10;
            const _x$2 = _Some$3;
            const _Rect = _x$2;
            const _collider_size = _Rect._0;
            const _bind$11 = Milky2018$selene$math$$Transform$apply_to_point(rotation_transform, Milky2018$selene$math$$Vec2D$op_get(_initial_offset, 0), Milky2018$selene$math$$Vec2D$op_get(_initial_offset, 1));
            const _rotated_offset_x = _bind$11._0;
            const _rotated_offset_y = _bind$11._1;
            const rotated_offset = { _0: _rotated_offset_x, _1: _rotated_offset_y };
            const new_collider_center_pos = { _0: rotation_center_world_pos._0 + rotated_offset._0, _1: rotation_center_world_pos._1 + rotated_offset._1 };
            const collider_half_size = { _0: Milky2018$selene$math$$Vec2D$op_get(_collider_size, 0) / 2, _1: Milky2018$selene$math$$Vec2D$op_get(_collider_size, 1) / 2 };
            const new_collider_top_left_pos = { _0: new_collider_center_pos._0 - collider_half_size._0, _1: new_collider_center_pos._1 - collider_half_size._1 };
            moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, c_entity, new_collider_top_left_pos);
          }
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_image_smooth(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new(), 745), 700), true), 60), Milky2018$selene$plugins$$default_plugin), lnkfish$$game_start, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), lnkfish$$loading_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$main_menu_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$level_select_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$game_settings_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$help_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$leaderboard_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$prepare_game_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$handle_help_input_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$handle_input, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$update_rotation, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$flow_mode_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$process_collision, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$process_taiji_collision, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$time_scoring_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$obstacle_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$taiji_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$ui_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), lnkfish$$button_hover_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined));
})();
