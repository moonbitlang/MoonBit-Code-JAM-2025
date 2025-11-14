const $1L = { hi: 0, lo: 1 };
const $0L = { hi: 0, lo: 0 };
const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54]);
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const $4294967295L = { hi: 0, lo: -1 };
const $64$moonbitlang$47$core$47$list$46$List$Empty$1$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$list$46$List$More$1$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$1$.prototype.$tag = 1;
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
const moonbitlang$core$builtin$$MyInt64$from_double_unsigned = (a) => {
  if (isNaN(a)) {
    return { hi: 0, lo: 0 };
  }
  if (a >= 18446744073709551615) {
    return { hi: 0xffffffff, lo: 0xffffffff };
  }
  if (a <= 0) {
    return { hi: 0, lo: 0 };
  }
  let hi = (a * (1 / 0x100000000)) | 0;
  let lo = a >>> 0;
  return { hi, lo };
};
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
const $64$Milky2018$47$selene$47$system$46$Schedule$Startup = { $tag: 0 };
const $64$Milky2018$47$selene$47$system$46$Schedule$Update = { $tag: 1 };
function $64$Milky2018$47$selene$47$system$46$Schedule$Render(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$tag = 2;
function $64$Milky2018$47$selene$47$system$46$Schedule$UpdateFrame(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateFrame.prototype.$tag = 3;
function $64$Milky2018$47$selene$47$system$46$Schedule$UpdateTime(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateTime.prototype.$tag = 4;
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
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$5$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$5$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$5$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$5$.prototype.$tag = 4;
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$6$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$.prototype.$tag = 4;
const rami3l$js$45$ffi$js$$Value$undefined = () => undefined;
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
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
const Option$None$10$ = { $tag: 0 };
function Option$Some$10$(param0) {
  this._0 = param0;
}
Option$Some$10$.prototype.$tag = 1;
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
const Milky2018$selene$system$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$system$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$45$canvas$$new$46$42$bind$124$172 = $0L;
const KrystalRay$pokemoon$$weather_effect_state = { effect_entities: [], is_active: false };
const KrystalRay$pokemoon$$dynamic_weather_state = { animated_entities: [], animation_timer: 0, update_interval: 0.016 };
const KrystalRay$pokemoon$$health_bar_ui_state = { is_active: false, player_health_bar: undefined, enemy_health_bar: undefined, health_bar_entities: [], animation_timer: 0, update_interval: 0.016 };
const KrystalRay$pokemoon$$turn_display_state = { is_active: false, turn_display: undefined, current_turn: 1, current_turn_type: "玩家", current_weather: "无天气" };
const KrystalRay$pokemoon$$create_turn_display$46$initial_turn_text$124$786 = "玩家回合";
const KrystalRay$pokemoon$$create_turn_display$46$initial_turn_number$124$787 = "1";
const KrystalRay$pokemoon$$create_turn_display$46$initial_weather_text$124$788 = "";
const KrystalRay$pokemoon$$display_pokemon_info$46$42$bind$124$1594 = ", ";
const KrystalRay$pokemoon$$skill_menu_state = { entities: undefined };
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
const Milky2018$selene$collision$$collision_infos = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const Milky2018$selene$collision$$colliders = moonbitlang$core$builtin$$Map$new$46$inner$10$(8);
const Milky2018$selene$collision$$collision_layers = moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
const Milky2018$selene$collision$$real_velocities = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$13$(0);
const Milky2018$selene$collision$$areas = moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$15$(8);
const Milky2018$selene$system$$timers = moonbitlang$core$array$$Array$new$46$inner$16$(0);
const KrystalRay$pokemoon$$battle_render_state = { player_pokemon_entity: Milky2018$selene$system$$Entity$new(), enemy_pokemon_entity: Milky2018$selene$system$$Entity$new(), background_entity: Milky2018$selene$system$$Entity$new(), ui_panel_entity: Milky2018$selene$system$$Entity$new(), text_box_entity: Milky2018$selene$system$$Entity$new(), text_entity: Milky2018$selene$system$$Entity$new(), text_entity_line2: Milky2018$selene$system$$Entity$new(), menu_entity: Milky2018$selene$system$$Entity$new(), selected_option: 0, is_active: false, current_selection_entity: Milky2018$selene$system$$Entity$new(), skill_menu_visible: false, skill_menu_selected: 0, current_player_pokemon: undefined, current_enemy_pokemon: undefined, battle_state: undefined, player_pokemon_info: undefined, enemy_pokemon_info: undefined, current_frame_count: 0, last_skill_input_frame: 0, enemy_skill_display_frame: 0, enemy_skill_message: "", enemy_turn_executed: false };
const KrystalRay$pokemoon$$global_indicator_entity = Milky2018$selene$system$$Entity$new();
const KrystalRay$pokemoon$$pokemon_sprite_cache = moonbitlang$core$builtin$$Map$new$46$inner$17$(8);
const KrystalRay$pokemoon$$battle_random_generator = moonbitlang$core$random$$Rand$chacha8$46$inner($bytes_literal$0);
const KrystalRay$pokemoon$$skill_selector_entity = Milky2018$selene$system$$Entity$new();
function moonbitlang$core$abort$$abort$18$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$19$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$20$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$21$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$22$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$23$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$24$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$25$(msg) {
  return $panic();
}
function moonbitlang$core$ref$$Ref$new$26$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$8$(x) {
  return { val: x };
}
function moonbitlang$core$array$$ArrayView$join$27$(self, separator) {
  if (self.len === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _bind$8 = self.buf;
    const _bind$9 = 1 + self.start | 0;
    const _some = self.len;
    const _bind$10 = _some - 1 | 0;
    const _x = { buf: _bind$8, start: _bind$9, len: _bind$10 };
    const hd = moonbitlang$core$string$$ToStringView$to_string_view$27$(_hd);
    let size_hint = hd.end - hd.start | 0;
    const _len = _x.len;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const s = _bind$8[_bind$9 + _i | 0];
        const _tmp$2 = size_hint;
        const _p = moonbitlang$core$string$$ToStringView$to_string_view$27$(s);
        size_hint = _tmp$2 + ((_p.end - _p.start | 0) + (separator.end - separator.start | 0) | 0) | 0;
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    size_hint = size_hint << 1;
    const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint);
    moonbitlang$core$builtin$$Logger$write_substring$28$(buf, hd.str, hd.start, hd.end - hd.start | 0);
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(separator.str, 0, separator.start, separator.end)) {
      const _len$2 = _x.len;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind$8[_bind$9 + _i | 0];
          const s$2 = moonbitlang$core$string$$ToStringView$to_string_view$27$(s);
          moonbitlang$core$builtin$$Logger$write_substring$28$(buf, s$2.str, s$2.start, s$2.end - s$2.start | 0);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _len$2 = _x.len;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind$8[_bind$9 + _i | 0];
          const s$2 = moonbitlang$core$string$$ToStringView$to_string_view$27$(s);
          moonbitlang$core$builtin$$Logger$write_substring$28$(buf, separator.str, separator.start, separator.end - separator.start | 0);
          moonbitlang$core$builtin$$Logger$write_substring$28$(buf, s$2.str, s$2.start, s$2.end - s$2.start | 0);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
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
function moonbitlang$core$array$$bubble_sort_by$20$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1071) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$20$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$20$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$20$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$bubble_sort_by$22$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1071) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$22$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$22$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$ArrayView$rev_inplace$20$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$20$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$rev_inplace$22$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$22$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$70(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$20$(arr, a), moonbitlang$core$array$$ArrayView$at$20$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$20$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$71(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$70(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$70(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$70(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$20$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$71(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$71(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$71(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$71(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$20$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$90(_env, a, b) {
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$91(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$90(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$90(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$90(_env, a, b);
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$91(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$91(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$91(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$91(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$22$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$sift_down_by$20$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$20$(arr, child), moonbitlang$core$array$$ArrayView$at$20$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$20$(arr, index$2), moonbitlang$core$array$$ArrayView$at$20$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$20$(arr, index$2, child);
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
function moonbitlang$core$array$$heap_sort_by$20$(arr, cmp) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$20$(arr, i, cmp);
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
      moonbitlang$core$array$$ArrayView$swap$20$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$20$(moonbitlang$core$array$$ArrayView$sub$46$inner$20$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$22$(arr, cmp) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$22$(arr, i, cmp);
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
      moonbitlang$core$array$$ArrayView$swap$22$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$22$(moonbitlang$core$array$$ArrayView$sub$46$inner$22$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$partition_by$20$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$20$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$20$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$20$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$20$(arr, i, j);
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
  moonbitlang$core$array$$ArrayView$swap$20$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$partition_by$22$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$22$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$22$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$22$(arr, i, j);
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
  moonbitlang$core$array$$ArrayView$swap$22$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$try_bubble_sort_by$20$(arr, cmp) {
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
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$20$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$20$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$20$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$try_bubble_sort_by$22$(arr, cmp) {
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
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$22$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$22$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$22$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$quick_sort_by$20$(arr, cmp, pred, limit) {
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
        moonbitlang$core$array$$bubble_sort_by$20$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$20$(arr$2, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$choose_pivot_by$20$(arr$2, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$20$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$partition_by$20$(arr$2, cmp, _pivot_index);
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
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$20$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$20$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$20$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$20$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$20$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$20$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$20$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$20$(right, cmp, moonbitlang$core$array$$ArrayView$at$20$(arr$2, _pivot), limit$2);
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
    const _p = arr$2;
    const len = _p.len;
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
    const _bind$8 = moonbitlang$core$array$$choose_pivot_by$22$(arr$2, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$22$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$partition_by$22$(arr$2, cmp, _pivot_index);
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
function moonbitlang$core$array$$Array$sort_by_key$29$(self, map) {
  moonbitlang$core$array$$quick_sort_by$20$({ buf: self, start: 0, len: self.length }, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$22$(self, cmp) {
  moonbitlang$core$array$$quick_sort_by$22$({ buf: self, start: 0, len: self.length }, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$FixedArray$makei$30$(length, value) {
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
function moonbitlang$core$array$$Array$join$27$(self, separator) {
  return moonbitlang$core$array$$ArrayView$join$27$({ buf: self, start: 0, len: self.length }, separator);
}
function moonbitlang$core$random$$Source$next$31$(self) {
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
function moonbitlang$core$random$$Rand$chacha8$46$inner(seed) {
  if (seed.length !== 32) {
    moonbitlang$core$abort$$abort$18$("seed must be 32 bytes long");
  }
  return { self: moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed), method_0: moonbitlang$core$random$$Source$next$31$ };
}
function moonbitlang$core$random$$umul128(a, b) {
  const aLo = moonbitlang$core$builtin$$BitAnd$land$32$(a, $4294967295L);
  const aHi = moonbitlang$core$builtin$$Shr$shr$32$(a, 32);
  const bLo = moonbitlang$core$builtin$$BitAnd$land$32$(b, $4294967295L);
  const bHi = moonbitlang$core$builtin$$Shr$shr$32$(b, 32);
  const x = moonbitlang$core$builtin$$Mul$mul$32$(aLo, bLo);
  const y = moonbitlang$core$builtin$$Add$add$32$(moonbitlang$core$builtin$$Mul$mul$32$(aHi, bLo), moonbitlang$core$builtin$$Shr$shr$32$(x, 32));
  const z = moonbitlang$core$builtin$$Add$add$32$(moonbitlang$core$builtin$$Mul$mul$32$(aLo, bHi), moonbitlang$core$builtin$$BitAnd$land$32$(y, $4294967295L));
  const w = moonbitlang$core$builtin$$Add$add$32$(moonbitlang$core$builtin$$Add$add$32$(moonbitlang$core$builtin$$Mul$mul$32$(aHi, bHi), moonbitlang$core$builtin$$Shr$shr$32$(y, 32)), moonbitlang$core$builtin$$Shr$shr$32$(z, 32));
  return { hi: w, lo: moonbitlang$core$builtin$$Mul$mul$32$(a, b) };
}
function moonbitlang$core$random$$Rand$uint64$46$inner(self, limit) {
  if (moonbitlang$core$builtin$$Eq$equal$32$(limit, $0L)) {
    const _p = self;
    return _p.method_0(_p.self);
  } else {
    if (moonbitlang$core$builtin$$Eq$equal$32$(moonbitlang$core$builtin$$BitAnd$land$32$(limit, moonbitlang$core$builtin$$Sub$sub$32$(limit, $1L)), $0L)) {
      const _p = self;
      return moonbitlang$core$builtin$$BitAnd$land$32$(_p.method_0(_p.self), moonbitlang$core$builtin$$Sub$sub$32$(limit, $1L));
    }
  }
  const _p = self;
  let r = moonbitlang$core$random$$umul128(_p.method_0(_p.self), limit);
  if (moonbitlang$core$builtin$$op_lt$32$(r.lo, limit)) {
    const thresh = moonbitlang$core$builtin$$Mod$mod$32$(moonbitlang$core$uint64$$UInt64$lnot(limit), limit);
    while (true) {
      if (moonbitlang$core$builtin$$op_lt$32$(r.lo, thresh)) {
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
    return moonbitlang$core$uint64$$UInt64$to_int(moonbitlang$core$builtin$$Shr$shr$32$(_p.method_0(_p.self), 33));
  } else {
    return moonbitlang$core$random$$Rand$uint$46$inner(self, limit);
  }
}
function moonbitlang$core$list$$List$of$8$(arr) {
  let _tmp = arr.length - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$1$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      $bound_check(arr, i);
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$1$(arr[i], list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$bytes$$BytesView$at(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.bytes;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$25$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$19$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$19$(index)}`);
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { bytes: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$24$("Invalid index for View");
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
function moonbitlang$core$math$$sin(_tmp) {
  return Math.sin(_tmp);
}
function moonbitlang$core$math$$cos(_tmp) {
  return Math.cos(_tmp);
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
          moonbitlang$core$abort$$abort$18$("invalid surrogate pair");
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
function moonbitlang$core$string$$ToStringView$to_string_view$27$(self) {
  return { str: self, start: 0, end: self.length };
}
function moonbitlang$core$string$$String$get(self, idx) {
  return idx >= 0 && idx < self.length ? self.charCodeAt(idx) : undefined;
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
  moonbitlang$core$set$$Set$add_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$33$(key));
}
function moonbitlang$core$set$$Set$add$6$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$6$(self, key, moonbitlang$core$builtin$$Hash$hash$34$(key));
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
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$33$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$33$(key);
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
  moonbitlang$core$array$$FixedArray$fill$46$inner$35$(self.entries, undefined, 0, undefined);
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
  const seed$2 = moonbitlang$core$array$$FixedArray$makei$30$(8, (i) => moonbitlang$core$bytes$$BytesView$to_uint_le(moonbitlang$core$bytes$$Bytes$sub$46$inner(seed, Math.imul(i, 4) | 0, (Math.imul(i, 4) | 0) + 4 | 0)));
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
  return moonbitlang$core$builtin$$BitOr$lor$32$(moonbitlang$core$builtin$$Shl$shl$32$(hi, 32), lo);
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self) {
  self.counter = (self.counter >>> 0) + (4 >>> 0) | 0;
  if (self.counter === 16) {
    moonbitlang$core$array$$FixedArray$blit_to$46$inner$36$(self.buffer, self.seed, 8, 56, 0);
    self.counter = 0;
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, self.buffer, self.counter);
  self.i = 0;
  self.n = self.counter === 12 ? 28 : 32;
}
function moonbitlang$core$builtin$$op_lt$32$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$32$(self_, other) < 0;
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$37$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$array$$FixedArray$unsafe_blit$38$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$array$$FixedArray$unsafe_blit$39$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$array$$FixedArray$unsafe_blit$36$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$array$$FixedArray$unsafe_blit$40$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$41$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$37$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$42$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$38$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$27$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$39$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$6$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$40$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$28$(self, ch) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$string$$String$char_length$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_index = _tmp;
      const char_count = _tmp$2;
      if (utf16_index < end_offset$2) {
        const c1 = self.charCodeAt(utf16_index);
        if (55296 <= c1 && c1 <= 56319 && (utf16_index + 1 | 0) < end_offset$2) {
          const _tmp$3 = utf16_index + 1 | 0;
          const c2 = self.charCodeAt(_tmp$3);
          if (56320 <= c2 && c2 <= 57343) {
            _tmp = utf16_index + 2 | 0;
            _tmp$2 = char_count + 1 | 0;
            continue;
          } else {
            moonbitlang$core$abort$$abort$18$("invalid surrogate pair");
          }
        }
        _tmp = utf16_index + 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        return char_count;
      }
    }
  } else {
    return moonbitlang$core$abort$$abort$19$("invalid start or end index for String::codepoint_length");
  }
}
function moonbitlang$core$builtin$$op_notequal$6$(x, y) {
  return !(x === y);
}
function moonbitlang$core$array$$Array$at$41$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$6$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$43$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$44$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
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
function moonbitlang$core$builtin$$Logger$write_string$28$(self, str) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$27$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$27$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$46$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$27$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$33$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$0$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$34$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$6$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$47$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$43$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$28$, method_1: moonbitlang$core$builtin$$Logger$write_substring$28$, method_2: moonbitlang$core$builtin$$Logger$write_char$28$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$48$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$49$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$28$, method_1: moonbitlang$core$builtin$$Logger$write_substring$28$, method_2: moonbitlang$core$builtin$$Logger$write_char$28$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$50$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _p = { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$28$, method_1: moonbitlang$core$builtin$$Logger$write_substring$28$, method_2: moonbitlang$core$builtin$$Logger$write_char$28$ };
  if (self) {
    _p.method_0(_p.self, "true");
  } else {
    _p.method_0(_p.self, "false");
  }
  return logger.val;
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1910(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1910(_env, num2);
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
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1910(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$19$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$28$, method_1: moonbitlang$core$builtin$$Logger$write_substring$28$, method_2: moonbitlang$core$builtin$$Logger$write_char$28$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$19$(self) {
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
function moonbitlang$core$builtin$$Logger$write_substring$28$(self, str, start, len) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$option$$Option$unwrap$51$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$52$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$53$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$54$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
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
function moonbitlang$core$builtin$$Map$new$46$inner$56$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$4$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$11$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$57$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$58$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$56$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$set_entry$56$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$push_away$56$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$56$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$56$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$set_with_hash$56$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$56$(self);
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
        moonbitlang$core$builtin$$Map$push_away$56$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$56$(self, _idx, entry);
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
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
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
function moonbitlang$core$builtin$$Map$grow$56$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$56$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$set$56$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$56$(self, key, value, moonbitlang$core$builtin$$Hash$hash$46$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$46$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$46$(key));
}
function moonbitlang$core$builtin$$Map$set$3$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$set$12$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$set$15$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$15$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$set$17$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$17$(self, key, value, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$from_array$56$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$46$inner$56$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      moonbitlang$core$builtin$$Map$set$56$(m, _p$3._0, _p$3._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
function moonbitlang$core$builtin$$Map$get$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$46$(key);
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
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$46$(key);
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
function moonbitlang$core$builtin$$Map$get$10$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
function moonbitlang$core$builtin$$Map$get$11$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$34$(key);
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
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get$17$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
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
function moonbitlang$core$builtin$$Map$remove_entry$15$(self, entry) {
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
function moonbitlang$core$builtin$$Map$remove_entry$3$(self, entry) {
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
function moonbitlang$core$builtin$$Map$shift_back$15$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$15$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$shift_back$3$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$3$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$15$(self, key, hash) {
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
        moonbitlang$core$builtin$$Map$remove_entry$15$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$15$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$3$(self, key, hash) {
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
        moonbitlang$core$builtin$$Map$remove_entry$3$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$3$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove$15$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$15$(self, key, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$remove$3$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$3$(self, key, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$59$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$35$(self, value, start, end) {
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
function moonbitlang$core$builtin$$Map$clear$9$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$59$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter2$12$(self) {
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
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$uint$$UInt$to_uint64(self) {
  return moonbitlang$core$uint64$$UInt64$extend_uint(self);
}
function moonbitlang$core$array$$Array$push$60$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$61$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$20$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$62$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$8$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$22$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$45$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$63$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
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
function moonbitlang$core$builtin$$Add$add$64$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$64$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$64$(self, other) {
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
function moonbitlang$core$builtin$$Add$add$32$(self, other) {
  return moonbitlang$core$builtin$$Add$add$64$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$32$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$64$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$32$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$64$(self, other);
}
function moonbitlang$core$builtin$$Mod$mod$32$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$mod_u(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$32$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$32$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$32$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$32$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$uint64$$UInt64$lnot(self) {
  return moonbitlang$core$builtin$$MyInt64$lnot(self);
}
function moonbitlang$core$builtin$$Shl$shl$32$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$32$(self, shift) {
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
  const _end871 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end871) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$27$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash$19$(self) {
  const self$2 = self;
  let x = self$2 ^ (self$2 >>> 17 | 0);
  x = Math.imul(x, -312814405) | 0;
  x = x ^ (x >>> 11 | 0);
  x = Math.imul(x, -1404298415) | 0;
  x = x ^ (x >>> 15 | 0);
  x = Math.imul(x, 830770091) | 0;
  x = x ^ (x >>> 14 | 0);
  return x;
}
function moonbitlang$core$builtin$$Hash$hash_combine$36$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$array$$FixedArray$blit_to$46$inner$36$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$36$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$18$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$19$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$19$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$19$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$19$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$19$(self.length)}`);
    return;
  }
}
function moonbitlang$core$double$$Double$to_uint64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_double_unsigned(self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$27$(input) {
  console.log(input);
}
function moonbitlang$core$array$$ArrayView$at$20$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$20$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$19$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$19$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$at$22$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$22$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$19$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$19$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$swap$20$(self, i, j) {
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
    moonbitlang$core$abort$$abort$18$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$19$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$19$(i)}, ${moonbitlang$core$builtin$$Show$to_string$19$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$swap$22$(self, i, j) {
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
    moonbitlang$core$abort$$abort$18$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$19$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$19$(i)}, ${moonbitlang$core$builtin$$Show$to_string$19$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$20$(self, start, end) {
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$21$("View index out of bounds");
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
function moonbitlang$core$array$$Array$new$46$inner$13$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$16$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$63$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$16$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$6$(self, new_len) {
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
function moonbitlang$core$array$$Array$get$45$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function moonbitlang$core$builtin$$Add$add$65$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$41$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$41$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$builtin$$Add$add$66$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$42$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$42$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$builtin$$Add$add$67$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$27$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$27$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$builtin$$Add$add$68$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$6$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$6$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$array$$Array$clear$6$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$6$(self, 0);
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
function Milky2018$selene$math$$Rect$intersects(a, b) {
  return Milky2018$selene$math$$Vec2D$op_get(a.position, 0) < Milky2018$selene$math$$Vec2D$op_get(b.position, 0) + Milky2018$selene$math$$Vec2D$op_get(b.size, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 0) + Milky2018$selene$math$$Vec2D$op_get(a.size, 0) > Milky2018$selene$math$$Vec2D$op_get(b.position, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 1) < Milky2018$selene$math$$Vec2D$op_get(b.position, 1) + Milky2018$selene$math$$Vec2D$op_get(b.size, 1) && Milky2018$selene$math$$Vec2D$op_get(a.position, 1) + Milky2018$selene$math$$Vec2D$op_get(a.size, 1) > Milky2018$selene$math$$Vec2D$op_get(b.position, 1)));
}
function Milky2018$selene$math$$Rect$shift(self, dir) {
  const _p = self.position;
  const _tmp = { _0: _p._0 + dir._0, _1: _p._1 + dir._1 };
  return { position: _tmp, size: self.size };
}
function moonbitlang$core$builtin$$Hash$hash_combine$6$(_x_129, _x_130) {
  moonbitlang$core$builtin$$Hash$hash_combine$36$(_x_129, _x_130);
}
function moonbitlang$core$builtin$$Eq$equal$0$(_x_125, _x_126) {
  switch (_x_125) {
    case 0: {
      if (_x_126 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_126 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_126 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_126 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_126 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_126 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_126 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_126 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_126 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_126 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_126 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_126 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_126 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_126 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_126 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_126 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_126 === 16) {
        return true;
      } else {
        return false;
      }
    }
    case 17: {
      if (_x_126 === 17) {
        return true;
      } else {
        return false;
      }
    }
    case 18: {
      if (_x_126 === 18) {
        return true;
      } else {
        return false;
      }
    }
    case 19: {
      if (_x_126 === 19) {
        return true;
      } else {
        return false;
      }
    }
    case 20: {
      if (_x_126 === 20) {
        return true;
      } else {
        return false;
      }
    }
    case 21: {
      if (_x_126 === 21) {
        return true;
      } else {
        return false;
      }
    }
    case 22: {
      if (_x_126 === 22) {
        return true;
      } else {
        return false;
      }
    }
    case 23: {
      if (_x_126 === 23) {
        return true;
      } else {
        return false;
      }
    }
    case 24: {
      if (_x_126 === 24) {
        return true;
      } else {
        return false;
      }
    }
    case 25: {
      if (_x_126 === 25) {
        return true;
      } else {
        return false;
      }
    }
    case 26: {
      if (_x_126 === 26) {
        return true;
      } else {
        return false;
      }
    }
    case 27: {
      if (_x_126 === 27) {
        return true;
      } else {
        return false;
      }
    }
    case 28: {
      if (_x_126 === 28) {
        return true;
      } else {
        return false;
      }
    }
    case 29: {
      if (_x_126 === 29) {
        return true;
      } else {
        return false;
      }
    }
    case 30: {
      if (_x_126 === 30) {
        return true;
      } else {
        return false;
      }
    }
    case 31: {
      if (_x_126 === 31) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_126 === 32) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$0$(_x_117, _x_118) {
  switch (_x_117) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 10);
      return;
    }
    case 11: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 11);
      return;
    }
    case 12: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 12);
      return;
    }
    case 13: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 13);
      return;
    }
    case 14: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 14);
      return;
    }
    case 15: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 15);
      return;
    }
    case 16: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 16);
      return;
    }
    case 17: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 17);
      return;
    }
    case 18: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 18);
      return;
    }
    case 19: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 19);
      return;
    }
    case 20: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 20);
      return;
    }
    case 21: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 21);
      return;
    }
    case 22: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 22);
      return;
    }
    case 23: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 23);
      return;
    }
    case 24: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 24);
      return;
    }
    case 25: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 25);
      return;
    }
    case 26: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 26);
      return;
    }
    case 27: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 27);
      return;
    }
    case 28: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 28);
      return;
    }
    case 29: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 29);
      return;
    }
    case 30: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 30);
      return;
    }
    case 31: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 31);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_118, 32);
      return;
    }
  }
}
function Milky2018$selene$system$$timer_system(_backend) {
  const _len = Milky2018$selene$system$$timers.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const timer = Milky2018$selene$system$$timers[_i];
      timer.rest = timer.rest - 1 | 0;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p = Milky2018$selene$system$$timers.length;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    const _p$3 = _tmp$3;
    if (_p$2 < _p) {
      const _p$4 = Milky2018$selene$system$$timers[_p$2];
      if (_p$4.rest > 0) {
        Milky2018$selene$system$$timers[_p$3] = _p$4;
        _tmp$2 = _p$2 + 1 | 0;
        _tmp$3 = _p$3 + 1 | 0;
        continue;
      }
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$16$(Milky2018$selene$system$$timers, _p$3);
      return;
    }
  }
}
function Milky2018$selene$system$$advanced_mouse_system(_backend) {
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
function Milky2018$selene$system$$advanced_key_system(_backend) {
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
function Milky2018$selene$system$$deferred_event_system(_backend) {
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
  moonbitlang$core$array$$Array$push$61$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$19$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$60$(systems, { _0: system, _1: schedule, _2: system_name$2 });
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
function Milky2018$selene$camera$$camera_system(backend) {
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
function Milky2018$selene$sprite$$render_animation(backend, animation, current_frame, pos, visible) {
  const frame = moonbitlang$core$array$$Array$at$44$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
  if (visible) {
    backend.method_2(backend.self, frame.sprite_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 0), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 1), Milky2018$selene$math$$Vec2D$op_get(frame.size, 0), Milky2018$selene$math$$Vec2D$op_get(frame.size, 1), animation.transform);
  }
  let new_frame = current_frame + animation.rate;
  if (moonbitlang$core$double$$Double$to_int(new_frame) >= animation.frames.length) {
    if (animation.loop_) {
      new_frame = new_frame - (animation.frames.length + 0);
    } else {
      new_frame = new_frame - animation.rate;
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
function Milky2018$selene$sprite$$render_sprite_system(backend) {
  const _p = moonbitlang$core$builtin$$Map$to_array$15$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (Milky2018$selene$system$$Entity$is_alive(_p$5._0)) {
        moonbitlang$core$array$$Array$push$22$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by$22$(sprites, (sprite1, sprite2) => {
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
              const new_frame = Milky2018$selene$sprite$$render_animation(backend, _anime, _frame, _tmp$3, sprite$2.visible);
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
function Milky2018$selene$sprite$$Text$new$46$inner(content, color, font) {
  return { content: content, color: color, font: font };
}
function Milky2018$selene$sprite$$ColorRect$new(size, color) {
  return { size: size, color: color };
}
function Milky2018$selene$sprite$$Picture$new$46$inner(size, tile_path, transform, repeat) {
  return { size: size, tile_path: tile_path, transform: transform, repeat: repeat };
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
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$1$(_p$4, _p$5);
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
function Milky2018$selene$collision$$quadtree_clear_system(_discard_) {
  const left_limit = { val: 0 };
  const right_limit = { val: 0 };
  const top_limit = { val: 0 };
  const bottom_limit = { val: 0 };
  const boxes = [];
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$;
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
          moonbitlang$core$array$$Array$push$62$(boxes, { _0: e, _1: box });
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
function Milky2018$selene$collision$$pickable_click_system(backend) {
  const zoom = backend.method_12(backend.self);
  const _bind$8 = { _0: 1, _1: 1 };
  const _p = Milky2018$selene$system$$mouse.pos;
  const _p$2 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$9 = { _0: _p._0 * _p$2._0, _1: _p._1 * _p$2._1 };
  const box = { position: _bind$9, size: _bind$8 };
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$;
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
  let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$;
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
  const intersect = { _0: Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 0)) - (Milky2018$selene$math$$Vec2D$op_get(b_half, 0) + Milky2018$selene$math$$Vec2D$op_get(a_half, 0)), _1: Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 1)) - (Milky2018$selene$math$$Vec2D$op_get(b_half, 1) + Milky2018$selene$math$$Vec2D$op_get(a_half, 1)) };
  return Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > Milky2018$selene$math$$Vec2D$op_get(intersect, 1) ? (Milky2018$selene$math$$Vec2D$op_get(delta, 0) > 0 ? { _0: Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 } : { _0: -Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 }) : Milky2018$selene$math$$Vec2D$op_get(delta, 1) > 0 ? { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(intersect, 1) } : { _0: 0, _1: -Milky2018$selene$math$$Vec2D$op_get(intersect, 1) };
}
function Milky2018$selene$collision$$add_collision_info(entity, target, direction) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$8.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$63$(0));
  }
  moonbitlang$core$array$$Array$push$63$(moonbitlang$core$option$$Option$unwrap$55$(moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
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
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$6$ };
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
            const _bind$11 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$collision$$collision_layers, e);
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
                  _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$({ _0: new_pos.val, _1: movement });
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
function Milky2018$selene$collision$$move_with_collide(e, collide, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$4$(Milky2018$selene$collision$$shapes, e);
    if (_bind$9 === undefined) {
      $panic();
      return;
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
      const new_x = Milky2018$selene$collision$$move_axis(e, box, velocity, 0, collide.mask);
      const _bind$12 = new_x._0;
      const object_x = { position: _bind$12, size: _bind$11 };
      const new_y = Milky2018$selene$collision$$move_axis(e, object_x, new_x._1, 1, collide.mask);
      const _p = new_y._0;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, e, { _0: _p._0 - _offset._0, _1: _p._1 - _offset._1 });
      moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$real_velocities, e, new_y._1);
      return;
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
    moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$real_velocities, e, velocity);
    return;
  }
}
function Milky2018$selene$collision$$move_system(_backend) {
  moonbitlang$core$builtin$$Map$clear$9$(Milky2018$selene$collision$$collision_infos);
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$;
  const _bind$8 = moonbitlang$core$builtin$$Map$iter2$12$(Milky2018$selene$velocity$$velocities);
  _bind$8((e, vel) => {
    if (Milky2018$selene$system$$Entity$is_alive(e)) {
      _L: {
        _L$2: {
          const _bind$9 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$colliders, e);
          if (_bind$9 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$9;
            const _collide = _Some;
            if (_collide.active) {
              Milky2018$selene$collision$$move_with_collide(e, _collide, vel);
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        Milky2018$selene$collision$$move_without_collide(e, vel);
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
function Milky2018$selene$collision$$area_collide_system(_discard_) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$ };
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
          let _foreach_result$2 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$;
          const _bind$14 = moonbitlang$core$set$$Set$iter$6$(entities);
          _bind$14((entity) => {
            if (Milky2018$selene$system$$Entity$is_alive(entity)) {
              const _bind$15 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$collision$$collision_layers, entity);
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
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$5$(_return._0);
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
          let _foreach_result$3 = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$5$;
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
              _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$5$(_return$2._0);
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
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$system$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$system$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0), _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$60$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
}
function rami3l$js$45$ffi$js$$Union3$from0$70$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from1$70$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$70$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$71$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$52$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$72$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$73$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$74$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$75$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$75$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$75$(self)) {
    moonbitlang$core$abort$$abort$18$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$51$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$53$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$8$(self) : Option$None$8$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$54$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$9$(self) : Option$None$9$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$52$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$10$(self) : Option$None$10$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$76$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$76$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$76$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$76$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$76$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$73$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$77$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$79$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$51$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$54$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$80$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$53$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$52$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$52$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$74$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$system$$Backend$register_mouse_events$81$(self, mouse, mouse_movement) {
  self.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$77$(Milky2018$selene$45$canvas$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$54$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$76$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$76$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$76$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$76$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$77$(Milky2018$selene$45$canvas$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$54$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$76$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$77$(Milky2018$selene$45$canvas$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$54$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$80$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$76$(mouse_event);
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
function Milky2018$selene$system$$Backend$lock_mouse$81$(self, locked) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$78$(self.canvas, "click", (_event) => {
    Milky2018$selene$45$canvas$$request_pointer_lock(self.canvas);
  });
  Milky2018$selene$45$canvas$$document_add_event_listener("pointerlockchange", (_event) => {
    locked.val = Milky2018$selene$45$canvas$$is_pointer_locked(self.canvas);
  });
}
function Milky2018$selene$system$$Backend$register_key_events$81$(_self, pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$77$(Milky2018$selene$45$canvas$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$53$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$80$(event));
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$77$(Milky2018$selene$45$canvas$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$53$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$80$(event));
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
function Milky2018$selene$system$$Backend$preload_img$81$(_self, path) {
  Milky2018$selene$45$canvas$$get_image_element(path);
}
function Milky2018$selene$system$$Backend$draw_picture$81$(self, png, x, y, width, height, transform, repeat) {
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
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(self.context, rami3l$js$45$ffi$js$$Union7$from0$72$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from2$70$(pattern));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_sprite$81$(self, sprite_path, x, y, offset_x, offset_y, width, height, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  const element = Milky2018$selene$45$canvas$$get_image_element(sprite_path);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size(self.context, element, offset_x, offset_y, width, height, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_stroke_rect$81$(self, x, y, width, height, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$70$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_text$81$(self, text, x, y, font, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(self.context, font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$70$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self.context, text, x, y, Option$None$11$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_color_rect$81$(self, x, y, width, height, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$70$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_gradient_rect$81$(self, x, y, width, height, color_start, color_end) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  const gradient = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_linear_gradient(self.context, x, y, x + width, y + height);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 0, color_start);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 1, color_end);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from1$70$(gradient));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$45$canvas$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$51$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$79$(rami3l$js$45$ffi$js$$Nullable$unwrap$75$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$52$(rami3l$js$45$ffi$js$$Union5$to0$71$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$8 = { _0: 0, _1: 0 };
  const _bind$9 = moonbitlang$core$builtin$$Map$from_array$56$([]);
  const _bind$10 = moonbitlang$core$ref$$Ref$new$26$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$8, frame_counter: Milky2018$selene$45$canvas$$new$46$42$bind$124$172, current_fps: 0, zoom: 1, execution_time: _bind$9, mouse_movement: _bind$10 };
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
function Milky2018$selene$system$$Backend$build$81$(self, systems, canvas_width, canvas_height, fps, image_smooth, zoom) {
  if (fps >>> 0 > 60 >>> 0) {
    moonbitlang$core$builtin$$println$27$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
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
        _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$81$, method_1: Milky2018$selene$system$$Backend$draw_picture$81$, method_2: Milky2018$selene$system$$Backend$draw_sprite$81$, method_3: Milky2018$selene$system$$Backend$register_key_events$81$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$81$, method_5: Milky2018$selene$system$$Backend$lock_mouse$81$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$81$, method_7: Milky2018$selene$system$$Backend$draw_text$81$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$81$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$81$, method_10: Milky2018$selene$system$$Backend$play_audio$81$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$81$, method_12: Milky2018$selene$system$$Backend$get_zoom$81$, method_13: Milky2018$selene$system$$Backend$get_debug_info$81$, method_14: Milky2018$selene$system$$Backend$preload_img$81$, method_15: Milky2018$selene$system$$Backend$preload_audio$81$ });
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
        const start_time = Milky2018$selene$45$canvas$$time_now();
        const _bind$8 = system._1;
        switch (_bind$8.$tag) {
          case 3: {
            const _UpdateFrame = _bind$8;
            const _frame_period = _UpdateFrame._0;
            if (moonbitlang$core$builtin$$Eq$equal$32$(moonbitlang$core$builtin$$Mod$mod$32$(self.frame_counter, moonbitlang$core$uint$$UInt$to_uint64(_frame_period)), $0L)) {
              const _func = system._0;
              _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$81$, method_1: Milky2018$selene$system$$Backend$draw_picture$81$, method_2: Milky2018$selene$system$$Backend$draw_sprite$81$, method_3: Milky2018$selene$system$$Backend$register_key_events$81$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$81$, method_5: Milky2018$selene$system$$Backend$lock_mouse$81$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$81$, method_7: Milky2018$selene$system$$Backend$draw_text$81$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$81$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$81$, method_10: Milky2018$selene$system$$Backend$play_audio$81$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$81$, method_12: Milky2018$selene$system$$Backend$get_zoom$81$, method_13: Milky2018$selene$system$$Backend$get_debug_info$81$, method_14: Milky2018$selene$system$$Backend$preload_img$81$, method_15: Milky2018$selene$system$$Backend$preload_audio$81$ });
              moonbitlang$core$builtin$$Map$set$56$(self.execution_time, system._2, Milky2018$selene$45$canvas$$time_now() - start_time);
            }
            break;
          }
          case 2: {
            const _Render = _bind$8;
            const _priority = _Render._0;
            moonbitlang$core$array$$Array$push$20$(renders, { _0: system._0, _1: _priority });
            break;
          }
          case 1: {
            const _func = system._0;
            _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$81$, method_1: Milky2018$selene$system$$Backend$draw_picture$81$, method_2: Milky2018$selene$system$$Backend$draw_sprite$81$, method_3: Milky2018$selene$system$$Backend$register_key_events$81$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$81$, method_5: Milky2018$selene$system$$Backend$lock_mouse$81$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$81$, method_7: Milky2018$selene$system$$Backend$draw_text$81$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$81$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$81$, method_10: Milky2018$selene$system$$Backend$play_audio$81$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$81$, method_12: Milky2018$selene$system$$Backend$get_zoom$81$, method_13: Milky2018$selene$system$$Backend$get_debug_info$81$, method_14: Milky2018$selene$system$$Backend$preload_img$81$, method_15: Milky2018$selene$system$$Backend$preload_audio$81$ });
            moonbitlang$core$builtin$$Map$set$56$(self.execution_time, system._2, Milky2018$selene$45$canvas$$time_now() - start_time);
            break;
          }
          case 4: {
            const _UpdateTime = _bind$8;
            const _period = _UpdateTime._0;
            if (moonbitlang$core$builtin$$Eq$equal$32$(moonbitlang$core$builtin$$Mod$mod$32$(self.frame_counter, moonbitlang$core$double$$Double$to_uint64($f64_convert_i32_u(fps) * _period)), $0L)) {
              const _func$2 = system._0;
              _func$2({ self: self, method_0: Milky2018$selene$system$$Backend$build$81$, method_1: Milky2018$selene$system$$Backend$draw_picture$81$, method_2: Milky2018$selene$system$$Backend$draw_sprite$81$, method_3: Milky2018$selene$system$$Backend$register_key_events$81$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$81$, method_5: Milky2018$selene$system$$Backend$lock_mouse$81$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$81$, method_7: Milky2018$selene$system$$Backend$draw_text$81$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$81$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$81$, method_10: Milky2018$selene$system$$Backend$play_audio$81$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$81$, method_12: Milky2018$selene$system$$Backend$get_zoom$81$, method_13: Milky2018$selene$system$$Backend$get_debug_info$81$, method_14: Milky2018$selene$system$$Backend$preload_img$81$, method_15: Milky2018$selene$system$$Backend$preload_audio$81$ });
              moonbitlang$core$builtin$$Map$set$56$(self.execution_time, system._2, Milky2018$selene$45$canvas$$time_now() - start_time);
            }
            break;
          }
        }
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$sort_by_key$29$(renders, (system) => -system._1 | 0);
    const _len$3 = renders.length;
    let _tmp$3 = 0;
    while (true) {
      const _i = _tmp$3;
      if (_i < _len$3) {
        const render = renders[_i];
        const _func = render._0;
        _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$81$, method_1: Milky2018$selene$system$$Backend$draw_picture$81$, method_2: Milky2018$selene$system$$Backend$draw_sprite$81$, method_3: Milky2018$selene$system$$Backend$register_key_events$81$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$81$, method_5: Milky2018$selene$system$$Backend$lock_mouse$81$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$81$, method_7: Milky2018$selene$system$$Backend$draw_text$81$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$81$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$81$, method_10: Milky2018$selene$system$$Backend$play_audio$81$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$81$, method_12: Milky2018$selene$system$$Backend$get_zoom$81$, method_13: Milky2018$selene$system$$Backend$get_debug_info$81$, method_14: Milky2018$selene$system$$Backend$preload_img$81$, method_15: Milky2018$selene$system$$Backend$preload_audio$81$ });
        _tmp$3 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$8 = self.mouse_movement.val;
    if (_bind$8 === undefined) {
    } else {
      const _Some = _bind$8;
      const _mouse_movement = _Some;
      _mouse_movement.movement = { _0: 0, _1: 0 };
    }
    self.frame_counter = moonbitlang$core$builtin$$Add$add$32$(self.frame_counter, $1L);
  });
  return () => {
  };
}
function Milky2018$selene$system$$Backend$get_canvas_size$81$(self) {
  return { _0: Milky2018$selene$math$$Vec2D$op_get(self.viewport_size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(self.viewport_size, 1) };
}
function Milky2018$selene$system$$Backend$get_debug_info$81$(self) {
  return { system_execution_time: self.execution_time, fps: self.current_fps };
}
function Milky2018$selene$system$$Backend$get_zoom$81$(self) {
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
function Milky2018$selene$system$$Backend$play_audio$81$(_self, audio_path, volume, loop_) {
  const audio = Milky2018$selene$45$canvas$$get_audio(audio_path);
  Milky2018$selene$45$canvas$$Audio$set_volume(audio, volume);
  Milky2018$selene$45$canvas$$Audio$set_loop(audio, loop_);
  Milky2018$selene$45$canvas$$Audio$play(audio);
}
function Milky2018$selene$system$$Backend$preload_audio$81$(_self, audio_path) {
  Milky2018$selene$45$canvas$$get_audio(audio_path);
}
function moonbitlang$core$builtin$$Eq$equal$82$(_x_1177, _x_1178) {
  if (_x_1177 === 0) {
    if (_x_1178 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1178 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$43$(_x_1137, _x_1138) {
  switch (_x_1137) {
    case 0: {
      _x_1138.method_0(_x_1138.self, "Normal");
      return;
    }
    case 1: {
      _x_1138.method_0(_x_1138.self, "Fire");
      return;
    }
    case 2: {
      _x_1138.method_0(_x_1138.self, "Water");
      return;
    }
    case 3: {
      _x_1138.method_0(_x_1138.self, "Electric");
      return;
    }
    case 4: {
      _x_1138.method_0(_x_1138.self, "Grass");
      return;
    }
    case 5: {
      _x_1138.method_0(_x_1138.self, "Ice");
      return;
    }
    case 6: {
      _x_1138.method_0(_x_1138.self, "Fighting");
      return;
    }
    case 7: {
      _x_1138.method_0(_x_1138.self, "Poison");
      return;
    }
    case 8: {
      _x_1138.method_0(_x_1138.self, "Ground");
      return;
    }
    case 9: {
      _x_1138.method_0(_x_1138.self, "Flying");
      return;
    }
    case 10: {
      _x_1138.method_0(_x_1138.self, "Psychic");
      return;
    }
    case 11: {
      _x_1138.method_0(_x_1138.self, "Bug");
      return;
    }
    case 12: {
      _x_1138.method_0(_x_1138.self, "Rock");
      return;
    }
    case 13: {
      _x_1138.method_0(_x_1138.self, "Ghost");
      return;
    }
    case 14: {
      _x_1138.method_0(_x_1138.self, "Dragon");
      return;
    }
    case 15: {
      _x_1138.method_0(_x_1138.self, "Dark");
      return;
    }
    case 16: {
      _x_1138.method_0(_x_1138.self, "Steel");
      return;
    }
    default: {
      _x_1138.method_0(_x_1138.self, "Fairy");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$43$(_x_1133, _x_1134) {
  switch (_x_1133) {
    case 0: {
      if (_x_1134 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1134 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1134 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_1134 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_1134 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_1134 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_1134 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_1134 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_1134 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_1134 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_1134 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_1134 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_1134 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_1134 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_1134 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_1134 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_1134 === 16) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1134 === 17) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$83$(_x_1113, _x_1114) {
  if (_x_1113 === 0) {
    if (_x_1114 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1114 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$49$(_x_1093, _x_1094) {
  switch (_x_1093) {
    case 0: {
      _x_1094.method_0(_x_1094.self, "Fight");
      return;
    }
    case 1: {
      _x_1094.method_0(_x_1094.self, "Bag");
      return;
    }
    case 2: {
      _x_1094.method_0(_x_1094.self, "Pokemon");
      return;
    }
    default: {
      _x_1094.method_0(_x_1094.self, "Run");
      return;
    }
  }
}
function KrystalRay$pokemoon$$get_weather_background_color(battle_state) {
  if (battle_state === undefined) {
    return "#90EE90";
  } else {
    const _Some = battle_state;
    const _state = _Some;
    const _bind$8 = _state.current_weather;
    if (_bind$8 === undefined) {
      return "#90EE90";
    } else {
      const _Some$2 = _bind$8;
      const _weather_effect = _Some$2;
      const _bind$9 = _weather_effect.weather_type;
      switch (_bind$9) {
        case 0: {
          return "#87CEEB";
        }
        case 1: {
          return "#4682B4";
        }
        case 2: {
          return "#FFD700";
        }
        case 3: {
          return "#D2B48C";
        }
        case 4: {
          return "#B0C4DE";
        }
        case 5: {
          return "#D3D3D3";
        }
        case 6: {
          return "#F0F8FF";
        }
        default: {
          return "#2F4F4F";
        }
      }
    }
  }
}
function KrystalRay$pokemoon$$add_effect_entity(entity) {
  moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$weather_effect_state.effect_entities, entity);
}
function KrystalRay$pokemoon$$clear_dynamic_weather_effects() {
  const _arr = KrystalRay$pokemoon$$dynamic_weather_state.animated_entities;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, entity);
      moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities);
  KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = 0;
  moonbitlang$core$builtin$$println$27$(" 清理动态天气特效完成");
}
function KrystalRay$pokemoon$$add_dynamic_rainy_effects() {
  KrystalRay$pokemoon$$clear_dynamic_weather_effects();
  let i = 0;
  while (true) {
    if (i < 20) {
      const rain_drop = Milky2018$selene$system$$Entity$new();
      const drop_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 3, _1: 30 }, "#4682B4"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, rain_drop, drop_sprite);
      const start_x = (Math.imul(i, 40) | 0) + 0 + ((i % 3 | 0) + 0) * 15;
      const start_y = ((i % 4 | 0) + 0) * 100;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, rain_drop, { _0: start_x, _1: start_y });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, rain_drop);
      KrystalRay$pokemoon$$add_effect_entity(rain_drop);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let i$2 = 0;
  while (true) {
    if (i$2 < 40) {
      const rain_drop = Milky2018$selene$system$$Entity$new();
      const drop_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 2, _1: 20 }, "#87CEEB"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, rain_drop, drop_sprite);
      const start_x = (Math.imul(i$2, 20) | 0) + 0 + ((i$2 % 2 | 0) + 0) * 10;
      const start_y = ((i$2 % 3 | 0) + 0) * 150;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, rain_drop, { _0: start_x, _1: start_y });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, rain_drop);
      KrystalRay$pokemoon$$add_effect_entity(rain_drop);
      i$2 = i$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let i$3 = 0;
  while (true) {
    if (i$3 < 60) {
      const rain_drop = Milky2018$selene$system$$Entity$new();
      const drop_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 1.5, _1: 15 }, "#B0E0E6"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, rain_drop, drop_sprite);
      const start_x = (Math.imul(i$3, 13) | 0) + 0 + ((i$3 % 4 | 0) + 0) * 5;
      const start_y = ((i$3 % 5 | 0) + 0) * 90;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, rain_drop, { _0: start_x, _1: start_y });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, rain_drop);
      KrystalRay$pokemoon$$add_effect_entity(rain_drop);
      i$3 = i$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  KrystalRay$pokemoon$$weather_effect_state.is_active = true;
  moonbitlang$core$builtin$$println$27$("🌧️ 添加多层次动态雨天效果 - 包含3层不同大小的雨滴");
}
function KrystalRay$pokemoon$$add_dynamic_sandstorm_effects() {
  KrystalRay$pokemoon$$clear_dynamic_weather_effects();
  const sandstorm_overlay = Milky2018$selene$system$$Entity$new();
  const overlay_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 450 }, "#D2B48C"), 3, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, sandstorm_overlay, overlay_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, sandstorm_overlay, { _0: 0, _1: 0 });
  KrystalRay$pokemoon$$add_effect_entity(sandstorm_overlay);
  let i = 0;
  while (true) {
    if (i < 200) {
      const sand_particle = Milky2018$selene$system$$Entity$new();
      const particle_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 2, _1: 15 }, "#8B7355"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, sand_particle, particle_sprite);
      const start_x = (Math.imul(i, 4) | 0) + 0;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, sand_particle, { _0: start_x, _1: 0 });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, sand_particle);
      KrystalRay$pokemoon$$add_effect_entity(sand_particle);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  KrystalRay$pokemoon$$weather_effect_state.is_active = true;
  moonbitlang$core$builtin$$println$27$("️ 添加动态沙暴效果");
}
function KrystalRay$pokemoon$$add_dynamic_snow_effects() {
  KrystalRay$pokemoon$$clear_dynamic_weather_effects();
  const snow_overlay = Milky2018$selene$system$$Entity$new();
  const overlay_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 450 }, "#F0F8FF"), 3, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, snow_overlay, overlay_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, snow_overlay, { _0: 0, _1: 0 });
  KrystalRay$pokemoon$$add_effect_entity(snow_overlay);
  let i = 0;
  while (true) {
    if (i < 120) {
      const snowflake = Milky2018$selene$system$$Entity$new();
      const flake_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 6, _1: 8 }, "#FFFFFF"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, snowflake, flake_sprite);
      const start_x = (Math.imul(i, 6) | 0) + 0 + ((i % 2 | 0) + 0) * 3;
      const start_y = ((i % 5 | 0) + 0) * 90;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, snowflake, { _0: start_x, _1: start_y });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, snowflake);
      KrystalRay$pokemoon$$add_effect_entity(snowflake);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  KrystalRay$pokemoon$$weather_effect_state.is_active = true;
  moonbitlang$core$builtin$$println$27$("❄️ 添加动态雪天效果 - 120个白色雪花粒子");
}
function KrystalRay$pokemoon$$add_dynamic_sunny_effects() {
  KrystalRay$pokemoon$$clear_dynamic_weather_effects();
  const sunny_overlay = Milky2018$selene$system$$Entity$new();
  const overlay_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 450 }, "#87CEEB"), 3, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, sunny_overlay, overlay_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, sunny_overlay, { _0: 0, _1: 0 });
  KrystalRay$pokemoon$$add_effect_entity(sunny_overlay);
  const sun_rays = Milky2018$selene$system$$Entity$new();
  const rays_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 450 }, "#FFF8DC"), 4, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, sun_rays, rays_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, sun_rays, { _0: 0, _1: 0 });
  KrystalRay$pokemoon$$add_effect_entity(sun_rays);
  const sun = Milky2018$selene$system$$Entity$new();
  const sun_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 60, _1: 60 }, "#FFD700"), 6, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, sun, sun_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, sun, { _0: 200, _1: 120 });
  KrystalRay$pokemoon$$add_effect_entity(sun);
  let i = 0;
  while (true) {
    if (i < 16) {
      const angle = (i + 0) * 22.5;
      const ray_x = 230 + moonbitlang$core$math$$cos(angle * 3.14159 / 180) * 45;
      const ray_y = 150 + moonbitlang$core$math$$sin(angle * 3.14159 / 180) * 45;
      const ray = Milky2018$selene$system$$Entity$new();
      const ray_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 6, _1: 6 }, "#FFA500"), 6, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, ray, ray_sprite);
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, ray, { _0: ray_x - 3, _1: ray_y - 3 });
      KrystalRay$pokemoon$$add_effect_entity(ray);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let i$2 = 0;
  while (true) {
    if (i$2 < 5) {
      const light_beam = Milky2018$selene$system$$Entity$new();
      const beam_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 120, _1: 250 }, "#FFFACD"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, light_beam, beam_sprite);
      const beam_x = 350 + ((Math.imul(i$2, 40) | 0) + 0) - 80;
      const beam_y = 80 + ((Math.imul(i$2, 20) | 0) + 0) - 40;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, light_beam, { _0: beam_x, _1: beam_y });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, light_beam);
      KrystalRay$pokemoon$$add_effect_entity(light_beam);
      i$2 = i$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let i$3 = 0;
  while (true) {
    if (i$3 < 3) {
      const cloud = Milky2018$selene$system$$Entity$new();
      const cloud_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 80, _1: 40 }, "#FFFFFF"), 4, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, cloud, cloud_sprite);
      const cloud_x = 100 + ((Math.imul(i$3, 200) | 0) + 0);
      const cloud_y = 50 + ((Math.imul(i$3, 30) | 0) + 0);
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, cloud, { _0: cloud_x, _1: cloud_y });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, cloud);
      KrystalRay$pokemoon$$add_effect_entity(cloud);
      i$3 = i$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  KrystalRay$pokemoon$$weather_effect_state.is_active = true;
  moonbitlang$core$builtin$$println$27$("️ 添加动态大晴天效果 - 包含太阳辐照和光照效果");
}
function KrystalRay$pokemoon$$add_fog_effects() {
  const fog_layer = Milky2018$selene$system$$Entity$new();
  const fog_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 450 }, "#D3D3D3"), 4, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, fog_layer, fog_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, fog_layer, { _0: 0, _1: 0 });
  KrystalRay$pokemoon$$add_effect_entity(fog_layer);
  KrystalRay$pokemoon$$weather_effect_state.is_active = true;
  moonbitlang$core$builtin$$println$27$("️ 添加雾天效果");
}
function KrystalRay$pokemoon$$add_hail_effects() {
  KrystalRay$pokemoon$$clear_dynamic_weather_effects();
  let i = 0;
  while (true) {
    if (i < 100) {
      const snowflake = Milky2018$selene$system$$Entity$new();
      const flake_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 2, _1: 2 }, "#F0F8FF"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, snowflake, flake_sprite);
      const start_x = (Math.imul(i, 8) | 0) + 0 + ((i % 3 | 0) + 0) * 5;
      const start_y = ((i % 4 | 0) + 0) * 100;
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, snowflake, { _0: start_x, _1: start_y });
      moonbitlang$core$array$$Array$push$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, snowflake);
      KrystalRay$pokemoon$$add_effect_entity(snowflake);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  KrystalRay$pokemoon$$weather_effect_state.is_active = true;
  moonbitlang$core$builtin$$println$27$("️ 添加冰雹效果");
}
function KrystalRay$pokemoon$$add_storm_effects() {
  const lightning = Milky2018$selene$system$$Entity$new();
  const lightning_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 4, _1: 200 }, "#FFFF00"), 6, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, lightning, lightning_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, lightning, { _0: 400, _1: 0 });
  KrystalRay$pokemoon$$add_effect_entity(lightning);
  let i = 0;
  while (true) {
    if (i < 80) {
      const rain_drop = Milky2018$selene$system$$Entity$new();
      const drop_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 1.5, _1: 25 }, "#2F4F4F"), 5, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, rain_drop, drop_sprite);
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, rain_drop, { _0: (Math.imul(i, 10) | 0) + 0, _1: 0 });
      KrystalRay$pokemoon$$add_effect_entity(rain_drop);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  KrystalRay$pokemoon$$weather_effect_state.is_active = true;
  moonbitlang$core$builtin$$println$27$("⛈️ 添加暴风雨效果");
}
function KrystalRay$pokemoon$$add_weather_effects(weather_type) {
  switch (weather_type) {
    case 0: {
      return;
    }
    case 1: {
      KrystalRay$pokemoon$$add_dynamic_rainy_effects();
      return;
    }
    case 2: {
      KrystalRay$pokemoon$$add_dynamic_sunny_effects();
      return;
    }
    case 3: {
      KrystalRay$pokemoon$$add_dynamic_sandstorm_effects();
      return;
    }
    case 4: {
      KrystalRay$pokemoon$$add_hail_effects();
      return;
    }
    case 5: {
      KrystalRay$pokemoon$$add_fog_effects();
      return;
    }
    case 6: {
      KrystalRay$pokemoon$$add_dynamic_snow_effects();
      return;
    }
    default: {
      KrystalRay$pokemoon$$add_storm_effects();
      return;
    }
  }
}
function KrystalRay$pokemoon$$clear_weather_effects() {
  const _arr = KrystalRay$pokemoon$$weather_effect_state.effect_entities;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, entity);
      moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$6$(KrystalRay$pokemoon$$weather_effect_state.effect_entities);
  KrystalRay$pokemoon$$weather_effect_state.is_active = false;
  moonbitlang$core$builtin$$println$27$("🧹 清理天气特效完成");
}
function KrystalRay$pokemoon$$add_battle_platforms() {}
function KrystalRay$pokemoon$$add_grid_pattern() {
  let x = 0;
  while (true) {
    if (x < 800) {
      const grid_line = Milky2018$selene$system$$Entity$new();
      const line_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 1, _1: 450 }, "#7FCC7F"), 1, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, grid_line, line_sprite);
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, grid_line, { _0: x, _1: 0 });
      x = x + 20;
      continue;
    } else {
      break;
    }
  }
  let y = 0;
  while (true) {
    if (y < 450) {
      const grid_line = Milky2018$selene$system$$Entity$new();
      const line_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 1 }, "#7FCC7F"), 1, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, grid_line, line_sprite);
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, grid_line, { _0: 0, _1: y });
      y = y + 20;
      continue;
    } else {
      return;
    }
  }
}
function KrystalRay$pokemoon$$create_battle_background() {
  const entity = KrystalRay$pokemoon$$battle_render_state.background_entity;
  const background_color = KrystalRay$pokemoon$$get_weather_background_color(KrystalRay$pokemoon$$battle_render_state.battle_state);
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 450 }, background_color), 0, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, background_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: 0, _1: 0 });
  KrystalRay$pokemoon$$add_grid_pattern();
  KrystalRay$pokemoon$$add_battle_platforms();
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    const _bind$9 = _state.current_weather;
    if (_bind$9 === undefined) {
    } else {
      const _Some$2 = _bind$9;
      const _weather_effect = _Some$2;
      KrystalRay$pokemoon$$add_weather_effects(_weather_effect.weather_type);
    }
  }
  moonbitlang$core$builtin$$println$27$(`🎨 战斗背景创建完成，颜色: ${background_color}`);
}
function KrystalRay$pokemoon$$update_battle_background_color() {
  const entity = KrystalRay$pokemoon$$battle_render_state.background_entity;
  KrystalRay$pokemoon$$clear_weather_effects();
  const background_color = KrystalRay$pokemoon$$get_weather_background_color(KrystalRay$pokemoon$$battle_render_state.battle_state);
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 450 }, background_color), 0, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, background_sprite);
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    const _bind$9 = _state.current_weather;
    if (_bind$9 === undefined) {
    } else {
      const _Some$2 = _bind$9;
      const _weather_effect = _Some$2;
      KrystalRay$pokemoon$$add_weather_effects(_weather_effect.weather_type);
    }
  }
  moonbitlang$core$builtin$$println$27$(`🎨 战斗背景颜色更新: ${background_color}`);
}
function KrystalRay$pokemoon$$update_health_bar_ui_animation(delta_time) {
  if (!KrystalRay$pokemoon$$health_bar_ui_state.is_active) {
    return undefined;
  }
  KrystalRay$pokemoon$$health_bar_ui_state.animation_timer = KrystalRay$pokemoon$$health_bar_ui_state.animation_timer + delta_time;
  if (KrystalRay$pokemoon$$health_bar_ui_state.animation_timer >= KrystalRay$pokemoon$$health_bar_ui_state.update_interval) {
    KrystalRay$pokemoon$$health_bar_ui_state.animation_timer = 0;
    moonbitlang$core$builtin$$println$27$("📊 血条UI动画更新");
    return;
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$get_health_bar_ui_status() {
  const status = KrystalRay$pokemoon$$health_bar_ui_state.is_active ? "活跃" : "未激活";
  let player_status;
  const _p = KrystalRay$pokemoon$$health_bar_ui_state.player_health_bar;
  if (!(_p === undefined)) {
    player_status = "已创建";
  } else {
    player_status = "未创建";
  }
  let enemy_status;
  const _p$2 = KrystalRay$pokemoon$$health_bar_ui_state.enemy_health_bar;
  if (!(_p$2 === undefined)) {
    enemy_status = "已创建";
  } else {
    enemy_status = "未创建";
  }
  return `血条UI状态: ${status}, 玩家血条: ${player_status}, 敌人血条: ${enemy_status}, 实体数量: ${moonbitlang$core$int$$Int$to_string$46$inner(KrystalRay$pokemoon$$health_bar_ui_state.health_bar_entities.length, 10)}`;
}
function KrystalRay$pokemoon$$create_debug_screen() {
  return { is_active: true, current_test: "System Test", test_results: [], frame_count: 0, fps_counter: 0, fps: 60, debug_entity: undefined, debug_text_entities: [] };
}
function KrystalRay$pokemoon$$create_debug_input_handler() {
  return { key_states: moonbitlang$core$builtin$$Map$new$46$inner$57$(8), mouse_buttons: moonbitlang$core$builtin$$Map$new$46$inner$58$(8), mouse_position: { _0: 0, _1: 0 }, event_queue: [] };
}
function KrystalRay$pokemoon$$create_debug_game_manager() {
  return { screen: KrystalRay$pokemoon$$create_debug_screen(), input_handler: KrystalRay$pokemoon$$create_debug_input_handler(), is_running: true };
}
function KrystalRay$pokemoon$$add_test_result(screen, result) {
  return { is_active: screen.is_active, current_test: screen.current_test, test_results: moonbitlang$core$builtin$$Add$add$67$(screen.test_results, [result]), frame_count: screen.frame_count, fps_counter: screen.fps_counter, fps: screen.fps, debug_entity: screen.debug_entity, debug_text_entities: screen.debug_text_entities };
}
function KrystalRay$pokemoon$$run_system_test(screen) {
  return KrystalRay$pokemoon$$add_test_result(screen, "System test completed");
}
function KrystalRay$pokemoon$$init_debug_screen_system() {
  moonbitlang$core$builtin$$println$27$("=== Initializing Debug Screen System ===");
  const debug_screen = KrystalRay$pokemoon$$create_debug_screen();
  KrystalRay$pokemoon$$create_debug_game_manager();
  moonbitlang$core$builtin$$println$27$("Debug screen created successfully");
  moonbitlang$core$builtin$$println$27$("Debug manager initialized");
  KrystalRay$pokemoon$$run_system_test(debug_screen);
  moonbitlang$core$builtin$$println$27$("Initial system test completed");
  moonbitlang$core$builtin$$println$27$("Debug screen system initialization completed");
}
function KrystalRay$pokemoon$$init_health_bar_ui() {
  KrystalRay$pokemoon$$health_bar_ui_state.is_active = true;
  KrystalRay$pokemoon$$health_bar_ui_state.animation_timer = 0;
  KrystalRay$pokemoon$$health_bar_ui_state.update_interval = 0.016;
  moonbitlang$core$builtin$$println$27$("📊 血条UI系统初始化完成");
}
function KrystalRay$pokemoon$$create_turn_display() {
  const background_entity = Milky2018$selene$system$$Entity$new();
  const turn_text_entity = Milky2018$selene$system$$Entity$new();
  const turn_number_entity = Milky2018$selene$system$$Entity$new();
  const weather_text_entity = Milky2018$selene$system$$Entity$new();
  const text_width = ((KrystalRay$pokemoon$$create_turn_display$46$initial_turn_text$124$786.length + KrystalRay$pokemoon$$create_turn_display$46$initial_turn_number$124$787.length | 0) + 0) * 12 + 20;
  const background_width = text_width > 100 ? text_width : 100;
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: background_width, _1: 70 }, "#000000"), 25, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, background_entity, background_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, background_entity, { _0: 50, _1: 50 });
  const number_offset_x = 5 + (KrystalRay$pokemoon$$create_turn_display$46$initial_turn_text$124$786.length + 0) * 12;
  const text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(KrystalRay$pokemoon$$create_turn_display$46$initial_turn_text$124$786, "#FFFFFF", "20px Arial"), 26, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, turn_text_entity, text_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, turn_text_entity, { _0: 55, _1: 65 });
  const number_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(KrystalRay$pokemoon$$create_turn_display$46$initial_turn_number$124$787, "#FFFFFF", "20px Arial"), 27, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, turn_number_entity, number_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, turn_number_entity, { _0: 50 + number_offset_x, _1: 65 });
  const weather_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(KrystalRay$pokemoon$$create_turn_display$46$initial_weather_text$124$788, "#87CEEB", "14px Arial"), 28, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, weather_text_entity, weather_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, weather_text_entity, { _0: 55, _1: 90 });
  moonbitlang$core$builtin$$println$27$(`📊 回合显示创建完成，背景宽度: ${String(background_width)}, 高度: ${String(70)}`);
  return { background_entity: background_entity, turn_text_entity: turn_text_entity, turn_number_entity: turn_number_entity, weather_text_entity: weather_text_entity };
}
function KrystalRay$pokemoon$$update_turn_display(current_turn, current_turn_type) {
  const _bind$8 = KrystalRay$pokemoon$$turn_display_state.turn_display;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 回合显示未创建");
    return;
  } else {
    const _Some = _bind$8;
    const _turn_display = _Some;
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _turn_display.turn_text_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _turn_display.turn_number_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _turn_display.weather_text_entity);
    const current_bg_position = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, _turn_display.background_entity);
    let bg_vec;
    if (current_bg_position === undefined) {
      bg_vec = { _0: 50, _1: 50 };
    } else {
      const _Some$2 = current_bg_position;
      const _pos = _Some$2;
      bg_vec = _pos;
    }
    let turn_type_text;
    switch (current_turn_type) {
      case "PlayerTurn": {
        turn_type_text = "玩家回合";
        break;
      }
      case "EnemyTurn": {
        turn_type_text = "敌人回合";
        break;
      }
      default: {
        turn_type_text = `${current_turn_type}回合`;
      }
    }
    const turn_number = moonbitlang$core$int$$Int$to_string$46$inner(current_turn, 10);
    const weather_text = KrystalRay$pokemoon$$turn_display_state.current_weather;
    const background_color = KrystalRay$pokemoon$$get_weather_background_color(KrystalRay$pokemoon$$battle_render_state.battle_state);
    const text_width = (turn_type_text.length + 0) * 20 + (turn_number.length + 0) * 12 + 20;
    const weather_width = (weather_text.length + 0) * 12 + 10;
    const max_width = text_width > weather_width ? text_width : weather_width;
    const background_width = max_width > 100 ? max_width : 100;
    const background_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: background_width, _1: 70 }, background_color), 25, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, _turn_display.background_entity, background_sprite);
    const _tmp = _turn_display.background_entity;
    const _p = { _0: 50, _1: 50 };
    let _tmp$2;
    if (current_bg_position === undefined) {
      _tmp$2 = _p;
    } else {
      const _p$2 = current_bg_position;
      _tmp$2 = _p$2;
    }
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, _tmp, _tmp$2);
    const number_offset_x = 5 + (turn_type_text.length + 0) * 20;
    const text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(turn_type_text, "#FFFFFF", "20px Arial"), 26, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, _turn_display.turn_text_entity, text_sprite);
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, _turn_display.turn_text_entity, { _0: bg_vec._0 + 5, _1: bg_vec._1 + 15 });
    const number_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(turn_number, "#FFFFFF", "20px Arial"), 27, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, _turn_display.turn_number_entity, number_sprite);
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, _turn_display.turn_number_entity, { _0: bg_vec._0 + number_offset_x, _1: bg_vec._1 + 15 });
    const weather_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(weather_text, "#87CEEB", "14px Arial"), 28, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, _turn_display.weather_text_entity, weather_sprite);
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, _turn_display.weather_text_entity, { _0: bg_vec._0 + 5, _1: bg_vec._1 + 40 });
    moonbitlang$core$builtin$$println$27$(`📊 回合显示更新完成: ${turn_type_text} ${turn_number}, 天气: ${weather_text}, 背景颜色: ${background_color}, 背景宽度: ${String(background_width)}`);
    return;
  }
}
function KrystalRay$pokemoon$$update_weather_display(weather_text) {
  KrystalRay$pokemoon$$turn_display_state.current_weather = weather_text;
  KrystalRay$pokemoon$$update_battle_background_color();
  const _bind$8 = KrystalRay$pokemoon$$turn_display_state.turn_display;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _turn_display = _Some;
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _turn_display.weather_text_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _turn_display.weather_text_entity);
    const _p = "";
    if (!(weather_text === _p)) {
      const current_bg_position = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, _turn_display.background_entity);
      let bg_vec;
      if (current_bg_position === undefined) {
        bg_vec = { _0: 50, _1: 50 };
      } else {
        const _Some$2 = current_bg_position;
        const _pos = _Some$2;
        bg_vec = _pos;
      }
      const weather_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(weather_text, "#87CEEB", "14px Arial"), 28, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, _turn_display.weather_text_entity, weather_sprite);
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, _turn_display.weather_text_entity, { _0: bg_vec._0 + 5, _1: bg_vec._1 + 40 });
      return;
    } else {
      return;
    }
  }
}
function KrystalRay$pokemoon$$get_weather_display_text(battle_state) {
  if (battle_state === undefined) {
    return "";
  } else {
    const _Some = battle_state;
    const _state = _Some;
    const _bind$8 = _state.current_weather;
    if (_bind$8 === undefined) {
      return "";
    } else {
      const _Some$2 = _bind$8;
      const _weather_effect = _Some$2;
      const _bind$9 = _weather_effect.weather_type;
      let weather_name;
      switch (_bind$9) {
        case 0: {
          weather_name = "晴天";
          break;
        }
        case 1: {
          weather_name = "雨天";
          break;
        }
        case 2: {
          weather_name = "大晴天";
          break;
        }
        case 3: {
          weather_name = "沙暴";
          break;
        }
        case 4: {
          weather_name = "冰雹";
          break;
        }
        case 5: {
          weather_name = "雾天";
          break;
        }
        case 6: {
          weather_name = "雪天";
          break;
        }
        default: {
          weather_name = "暴风雨";
        }
      }
      return _weather_effect.duration === -1 ? "无天气" : `${weather_name} (${moonbitlang$core$int$$Int$to_string$46$inner(_weather_effect.duration, 10)}回合)`;
    }
  }
}
function KrystalRay$pokemoon$$clear_turn_display() {
  KrystalRay$pokemoon$$turn_display_state.is_active = false;
  KrystalRay$pokemoon$$turn_display_state.turn_display = undefined;
  KrystalRay$pokemoon$$turn_display_state.current_turn = 1;
  KrystalRay$pokemoon$$turn_display_state.current_turn_type = "玩家";
  KrystalRay$pokemoon$$turn_display_state.current_weather = "";
  moonbitlang$core$builtin$$println$27$("📊 回合显示清理完成");
}
function KrystalRay$pokemoon$$init_turn_display_system() {
  const _p = KrystalRay$pokemoon$$turn_display_state.turn_display;
  if (!(_p === undefined)) {
    KrystalRay$pokemoon$$clear_turn_display();
  }
  moonbitlang$core$builtin$$println$27$("🎯 初始化回合显示系统...");
  const turn_display = KrystalRay$pokemoon$$create_turn_display();
  KrystalRay$pokemoon$$turn_display_state.turn_display = turn_display;
  KrystalRay$pokemoon$$turn_display_state.is_active = true;
  KrystalRay$pokemoon$$turn_display_state.current_turn = 1;
  KrystalRay$pokemoon$$turn_display_state.current_turn_type = "玩家";
  KrystalRay$pokemoon$$turn_display_state.current_weather = "";
  moonbitlang$core$builtin$$println$27$("✅ 回合显示系统初始化完成");
}
function KrystalRay$pokemoon$$create_pokemon_info_template(config, pokemon_name, pokemon_level, max_hp) {
  const name_entity = Milky2018$selene$system$$Entity$new();
  const level_entity = Milky2018$selene$system$$Entity$new();
  const background_entity = Milky2018$selene$system$$Entity$new();
  const fill_entity = Milky2018$selene$system$$Entity$new();
  const hp_text_entity = Milky2018$selene$system$$Entity$new();
  const name_position = { _0: config.base_position._0 + 5, _1: config.base_position._1 + 5 };
  const level_position = { _0: config.base_position._0 + 5, _1: config.base_position._1 + 25 };
  const health_bar_position = { _0: config.base_position._0, _1: config.base_position._1 + 45 };
  const hp_text_position = { _0: config.base_position._0 + 5, _1: config.base_position._1 + config.height + 55 };
  const name_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(pokemon_name, "black", "16px Arial"), 20, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, name_entity, name_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, name_entity, name_position);
  const level_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(`Lv.${moonbitlang$core$int$$Int$to_string$46$inner(pokemon_level, 10)}`, "black", "14px Arial"), 20, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, level_entity, level_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, level_entity, level_position);
  const background_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: config.width, _1: config.height }, config.background_color), 20, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, background_entity, background_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, background_entity, health_bar_position);
  const fill_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: config.width - 4, _1: config.height - 4 }, config.fill_color), 21, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, fill_entity, fill_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, fill_entity, { _0: health_bar_position._0 + 2, _1: health_bar_position._1 + 2 });
  const hp_text = `HP: ${moonbitlang$core$int$$Int$to_string$46$inner(max_hp, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(max_hp, 10)}`;
  const hp_text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(hp_text, config.text_color, "12px Arial"), 22, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, hp_text_entity, hp_text_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, hp_text_entity, hp_text_position);
  const _bind$8 = config.bar_type;
  let bar_type_name;
  if (_bind$8 === 0) {
    bar_type_name = "玩家";
  } else {
    bar_type_name = "敌人";
  }
  moonbitlang$core$builtin$$println$27$(`📊 创建宝可梦信息模版: ${bar_type_name}, ${pokemon_name} Lv.${moonbitlang$core$int$$Int$to_string$46$inner(pokemon_level, 10)}, HP: ${moonbitlang$core$int$$Int$to_string$46$inner(max_hp, 10)}`);
  return { name_entity: name_entity, level_entity: level_entity, background_entity: background_entity, fill_entity: fill_entity, hp_text_entity: hp_text_entity, bar_type: config.bar_type, base_position: config.base_position };
}
function KrystalRay$pokemoon$$update_pokemon_info_display(pokemon_info, pokemon_name, pokemon_level, current_hp, max_hp) {
  const name_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(pokemon_name, "black", "16px Arial"), 20, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, pokemon_info.name_entity, name_sprite);
  const level_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(`Lv.${moonbitlang$core$int$$Int$to_string$46$inner(pokemon_level, 10)}`, "black", "14px Arial"), 20, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, pokemon_info.level_entity, level_sprite);
  const hp_percentage = max_hp > 0 ? (current_hp + 0) / (max_hp + 0) : 0;
  const clamped_percentage = hp_percentage < 0 ? 0 : hp_percentage > 1 ? 1 : hp_percentage;
  const new_fill_width = 196 * clamped_percentage;
  const fill_color = clamped_percentage > 0.5 ? (moonbitlang$core$builtin$$Eq$equal$82$(pokemon_info.bar_type, 0) ? "#00FF00" : "#FF0000") : clamped_percentage > 0.25 ? "#FFFF00" : "#FF0000";
  const fill_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: new_fill_width, _1: 16 }, fill_color), 21, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, pokemon_info.fill_entity, fill_sprite);
  const hp_text = `HP: ${moonbitlang$core$int$$Int$to_string$46$inner(current_hp, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(max_hp, 10)}`;
  const text_color = clamped_percentage < 0.33 ? "#FF0000" : "#000000";
  const current_hp_text_sprite = moonbitlang$core$builtin$$Map$get$15$(Milky2018$selene$sprite$$sprites, pokemon_info.hp_text_entity);
  if (current_hp_text_sprite === undefined) {
    const hp_text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(hp_text, text_color, "12px Arial"), 22, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, pokemon_info.hp_text_entity, hp_text_sprite);
  } else {
    const hp_text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(hp_text, text_color, "12px Arial"), 22, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, pokemon_info.hp_text_entity, hp_text_sprite);
  }
  const _bind$8 = pokemon_info.bar_type;
  let bar_type_name;
  if (_bind$8 === 0) {
    bar_type_name = "玩家";
  } else {
    bar_type_name = "敌人";
  }
  moonbitlang$core$builtin$$println$27$(`📊 更新宝可梦信息: ${bar_type_name} ${pokemon_name} Lv.${moonbitlang$core$int$$Int$to_string$46$inner(pokemon_level, 10)} HP: ${moonbitlang$core$int$$Int$to_string$46$inner(current_hp, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(max_hp, 10)} (${String(clamped_percentage * 100)}%)`);
}
function KrystalRay$pokemoon$$update_dynamic_hail_effects(delta_time) {
  if (!KrystalRay$pokemoon$$weather_effect_state.is_active) {
    return undefined;
  }
  KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = KrystalRay$pokemoon$$dynamic_weather_state.animation_timer + delta_time;
  if (KrystalRay$pokemoon$$dynamic_weather_state.animation_timer >= KrystalRay$pokemoon$$dynamic_weather_state.update_interval) {
    KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = 0;
    let i = 0;
    while (true) {
      if (i < KrystalRay$pokemoon$$dynamic_weather_state.animated_entities.length) {
        const entity = moonbitlang$core$array$$Array$at$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, i);
        const current_pos = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, entity);
        if (current_pos === undefined) {
        } else {
          const _Some = current_pos;
          const _pos = _Some;
          const pos_vec = _pos;
          const new_x = pos_vec._0 + (((i % 3 | 0) - 1 | 0) + 0) * 0.5;
          const new_y = pos_vec._1 + 1;
          const final_x = new_x < 0 ? 800 : new_x > 800 ? 0 : new_x;
          const final_y = new_y > 450 ? 0 : new_y;
          moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: final_x, _1: final_y });
        }
        i = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$update_dynamic_rain_effects(delta_time) {
  if (!KrystalRay$pokemoon$$weather_effect_state.is_active) {
    return undefined;
  }
  KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = KrystalRay$pokemoon$$dynamic_weather_state.animation_timer + delta_time;
  if (KrystalRay$pokemoon$$dynamic_weather_state.animation_timer >= KrystalRay$pokemoon$$dynamic_weather_state.update_interval) {
    KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = 0;
    let i = 0;
    while (true) {
      if (i < KrystalRay$pokemoon$$dynamic_weather_state.animated_entities.length) {
        const entity = moonbitlang$core$array$$Array$at$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, i);
        const current_pos = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, entity);
        if (current_pos === undefined) {
        } else {
          const _Some = current_pos;
          const _pos = _Some;
          const pos_vec = _pos;
          const new_y = pos_vec._1 + 3;
          const final_y = new_y > 450 ? 0 : new_y;
          moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: pos_vec._0, _1: final_y });
        }
        i = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$update_dynamic_snow_effects(delta_time) {
  if (!KrystalRay$pokemoon$$weather_effect_state.is_active) {
    return undefined;
  }
  KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = KrystalRay$pokemoon$$dynamic_weather_state.animation_timer + delta_time;
  if (KrystalRay$pokemoon$$dynamic_weather_state.animation_timer >= KrystalRay$pokemoon$$dynamic_weather_state.update_interval) {
    KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = 0;
    let i = 0;
    while (true) {
      if (i < KrystalRay$pokemoon$$dynamic_weather_state.animated_entities.length) {
        const entity = moonbitlang$core$array$$Array$at$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, i);
        const current_pos = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, entity);
        if (current_pos === undefined) {
        } else {
          const _Some = current_pos;
          const _pos = _Some;
          const pos_vec = _pos;
          const speed_y = i < 15 ? 2 : i < 45 ? 2.5 : 3;
          const new_y = pos_vec._1 + speed_y;
          const final_y = new_y > 450 ? 0 : new_y;
          moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: pos_vec._0, _1: final_y });
        }
        i = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$update_dynamic_weather_effects(delta_time) {
  if (!KrystalRay$pokemoon$$weather_effect_state.is_active) {
    return undefined;
  }
  KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = KrystalRay$pokemoon$$dynamic_weather_state.animation_timer + delta_time;
  if (KrystalRay$pokemoon$$dynamic_weather_state.animation_timer >= KrystalRay$pokemoon$$dynamic_weather_state.update_interval) {
    KrystalRay$pokemoon$$dynamic_weather_state.animation_timer = 0;
    let i = 0;
    while (true) {
      if (i < KrystalRay$pokemoon$$dynamic_weather_state.animated_entities.length) {
        const entity = moonbitlang$core$array$$Array$at$6$(KrystalRay$pokemoon$$dynamic_weather_state.animated_entities, i);
        const current_pos = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, entity);
        if (current_pos === undefined) {
        } else {
          const _Some = current_pos;
          const _pos = _Some;
          const pos_vec = _pos;
          const speed_x = i < 20 ? 1.5 : i < 50 ? 2 : i < 90 ? 2.5 : i < 140 ? 3 : 3.5;
          const speed_y = i < 20 ? 2 : i < 50 ? 2.5 : i < 90 ? 3 : i < 140 ? 3.5 : 4;
          const new_x = pos_vec._0 + speed_x;
          const new_y = pos_vec._1 + speed_y;
          const final_x = new_x > 800 ? 0 : new_x;
          const final_y = new_y > 450 ? 0 : new_y;
          moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: final_x, _1: final_y });
        }
        i = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$dynamic_weather_update_system(_backend) {
  KrystalRay$pokemoon$$update_dynamic_weather_effects(0.016);
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    const _bind$9 = _state.current_weather;
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _weather_effect = _Some$2;
      const _bind$10 = _weather_effect.weather_type;
      switch (_bind$10) {
        case 1: {
          KrystalRay$pokemoon$$update_dynamic_rain_effects(0.016);
          return;
        }
        case 6: {
          KrystalRay$pokemoon$$update_dynamic_snow_effects(0.016);
          return;
        }
        case 3: {
          KrystalRay$pokemoon$$update_dynamic_weather_effects(0.016);
          return;
        }
        case 4: {
          KrystalRay$pokemoon$$update_dynamic_hail_effects(0.016);
          return;
        }
        default: {
          return;
        }
      }
    }
  }
}
function KrystalRay$pokemoon$$get_skill_data() {
  return [{ name: "藤蔓缠绕", power: 60, accuracy: 95, move_type: 0, element_type: "Grass", pp: 20, max_pp: 20, weather_effect: undefined }, { name: "数据流", power: 70, accuracy: 100, move_type: 1, element_type: "Dragon", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "优雅编程", power: 80, accuracy: 90, move_type: 1, element_type: "Grass", pp: 10, max_pp: 10, weather_effect: undefined }, { name: "简洁代码", power: 50, accuracy: 100, move_type: 2, element_type: "Normal", pp: 25, max_pp: 25, weather_effect: undefined }, { name: "热咖啡", power: 65, accuracy: 100, move_type: 1, element_type: "Fire", pp: 20, max_pp: 20, weather_effect: { weather_type: 2, duration: 5, intensity: 3, source: "热咖啡" } }, { name: "企业级攻击", power: 90, accuracy: 85, move_type: 0, element_type: "Steel", pp: 10, max_pp: 10, weather_effect: undefined }, { name: "持久战", power: 0, accuracy: 100, move_type: 2, element_type: "Steel", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "跨平台", power: 75, accuracy: 95, move_type: 1, element_type: "Fire", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "指针攻击", power: 85, accuracy: 90, move_type: 0, element_type: "Steel", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "内存泄漏", power: 65, accuracy: 100, move_type: 1, element_type: "Dark", pp: 10, max_pp: 10, weather_effect: undefined }, { name: "模板编程", power: 95, accuracy: 80, move_type: 1, element_type: "Steel", pp: 8, max_pp: 8, weather_effect: undefined }, { name: "齿轮切割", power: 70, accuracy: 100, move_type: 0, element_type: "Steel", pp: 20, max_pp: 20, weather_effect: undefined }, { name: "异步闪电", power: 80, accuracy: 95, move_type: 1, element_type: "Electric", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "原型链", power: 60, accuracy: 100, move_type: 1, element_type: "Fairy", pp: 20, max_pp: 20, weather_effect: undefined }, { name: "回调攻击", power: 70, accuracy: 90, move_type: 1, element_type: "Electric", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "动态类型", power: 0, accuracy: 100, move_type: 2, element_type: "Fairy", pp: 25, max_pp: 25, weather_effect: undefined }, { name: "音符冲击", power: 75, accuracy: 100, move_type: 1, element_type: "Electric", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "LINQ查询", power: 85, accuracy: 90, move_type: 1, element_type: "Steel", pp: 12, max_pp: 12, weather_effect: undefined }, { name: "属性攻击", power: 65, accuracy: 100, move_type: 0, element_type: "Steel", pp: 18, max_pp: 18, weather_effect: undefined }, { name: "委托技能", power: 0, accuracy: 100, move_type: 2, element_type: "Electric", pp: 20, max_pp: 20, weather_effect: undefined }, { name: "并发挖掘", power: 60, accuracy: 100, move_type: 0, element_type: "Ground", pp: 20, max_pp: 20, weather_effect: { weather_type: 3, duration: 5, intensity: 3, source: "并发挖掘" } }, { name: "协程", power: 0, accuracy: 100, move_type: 2, element_type: "Normal", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "快速编译", power: 70, accuracy: 100, move_type: 1, element_type: "Normal", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "垃圾回收", power: 50, accuracy: 100, move_type: 2, element_type: "Ground", pp: 10, max_pp: 10, weather_effect: undefined }, { name: "所有权攻击", power: 90, accuracy: 95, move_type: 0, element_type: "Steel", pp: 10, max_pp: 10, weather_effect: undefined }, { name: "借用检查", power: 0, accuracy: 100, move_type: 2, element_type: "Water", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "内存安全", power: 0, accuracy: 100, move_type: 2, element_type: "Steel", pp: 20, max_pp: 20, weather_effect: { weather_type: 6, duration: 5, intensity: 3, source: "内存安全" } }, { name: "零成本抽象", power: 85, accuracy: 90, move_type: 1, element_type: "Water", pp: 12, max_pp: 12, weather_effect: undefined }, { name: "宝石闪耀", power: 80, accuracy: 100, move_type: 1, element_type: "Fire", pp: 15, max_pp: 15, weather_effect: { weather_type: 2, duration: 5, intensity: 3, source: "宝石闪耀" } }, { name: "元编程", power: 95, accuracy: 85, move_type: 1, element_type: "Fairy", pp: 8, max_pp: 8, weather_effect: undefined }, { name: "优雅语法", power: 70, accuracy: 100, move_type: 1, element_type: "Fire", pp: 18, max_pp: 18, weather_effect: undefined }, { name: "动态方法", power: 75, accuracy: 95, move_type: 1, element_type: "Fairy", pp: 15, max_pp: 15, weather_effect: undefined }, { name: "服务器守护", power: 0, accuracy: 100, move_type: 2, element_type: "Water", pp: 20, max_pp: 20, weather_effect: { weather_type: 1, duration: 5, intensity: 3, source: "服务器守护" } }, { name: "Web开发", power: 60, accuracy: 100, move_type: 1, element_type: "Water", pp: 20, max_pp: 20, weather_effect: { weather_type: 1, duration: 5, intensity: 3, source: "Web开发" } }, { name: "数据库连接", power: 0, accuracy: 100, move_type: 2, element_type: "Ice", pp: 15, max_pp: 15, weather_effect: { weather_type: 4, duration: 5, intensity: 3, source: "数据库连接" } }, { name: "顽强生存", power: 50, accuracy: 100, move_type: 0, element_type: "Water", pp: 25, max_pp: 25, weather_effect: undefined }, { name: "Web Assembly", power: 0, accuracy: 100, move_type: 2, element_type: "Psychic", pp: 10, max_pp: 10, weather_effect: { weather_type: 0, duration: -1, intensity: 5, source: "月光编译" } }, { name: "代码幻象", power: 75, accuracy: 100, move_type: 1, element_type: "Psychic", pp: 10, max_pp: 10, weather_effect: undefined }, { name: "星辰跃击", power: 95, accuracy: 90, move_type: 1, element_type: "Fairy", pp: 8, max_pp: 8, weather_effect: undefined }, { name: "迅捷跃步", power: 60, accuracy: 100, move_type: 0, element_type: "Ground", pp: 20, max_pp: 20, weather_effect: undefined }];
}
function KrystalRay$pokemoon$$create_skill_database() {
  return { skills: KrystalRay$pokemoon$$get_skill_data(), last_updated: "2024-01-01" };
}
function KrystalRay$pokemoon$$find_skill_by_name(db, name) {
  let result = undefined;
  let i = 0;
  while (true) {
    if (i < db.skills.length) {
      const skill = moonbitlang$core$array$$Array$at$45$(db.skills, i);
      if (skill.name === name) {
        result = skill;
        break;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function KrystalRay$pokemoon$$create_move_from_name(move_name) {
  const db = KrystalRay$pokemoon$$create_skill_database();
  const _bind$8 = KrystalRay$pokemoon$$find_skill_by_name(db, move_name);
  if (_bind$8 === undefined) {
    return { name: move_name, power: 50, accuracy: 100, move_type: 0, element_type: "Normal", pp: 20, max_pp: 20, weather_effect: undefined };
  } else {
    const _Some = _bind$8;
    return _Some;
  }
}
function KrystalRay$pokemoon$$get_pokemon_moves(pokemon) {
  const moves = [];
  const _arr = pokemon.moves;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const move_name = _arr[_i];
      moonbitlang$core$array$$Array$push$45$(moves, KrystalRay$pokemoon$$create_move_from_name(move_name));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return moves;
}
function KrystalRay$pokemoon$$get_pokemon_data() {
  return [{ id: 1, name: "Python蟒蛇", level: 8, hp: 65, max_hp: 65, attack: 55, defense: 60, speed: 70, types: [4, 14], moves: ["藤蔓缠绕", "数据流", "优雅编程", "简洁代码"] }, { id: 2, name: "Java咖啡杯", level: 7, hp: 80, max_hp: 80, attack: 50, defense: 75, speed: 45, types: [1, 16], moves: ["热咖啡", "企业级攻击", "持久战", "跨平台"] }, { id: 3, name: "C++齿轮兽", level: 9, hp: 70, max_hp: 70, attack: 85, defense: 65, speed: 55, types: [16, 15], moves: ["指针攻击", "内存泄漏", "模板编程", "齿轮切割"] }, { id: 4, name: "JavaScript电精灵", level: 6, hp: 40, max_hp: 40, attack: 60, defense: 35, speed: 95, types: [3, 17], moves: ["异步闪电", "原型链", "回调攻击", "动态类型"] }, { id: 5, name: "C#音符骑士", level: 8, hp: 75, max_hp: 75, attack: 70, defense: 70, speed: 60, types: [16, 3], moves: ["音符冲击", "LINQ查询", "属性攻击", "委托技能"] }, { id: 6, name: "Go地鼠", level: 5, hp: 55, max_hp: 55, attack: 45, defense: 50, speed: 80, types: [0, 8], moves: ["并发挖掘", "协程", "快速编译", "垃圾回收"] }, { id: 7, name: "Rust螃蟹", level: 8, hp: 85, max_hp: 85, attack: 75, defense: 90, speed: 50, types: [2, 16], moves: ["所有权攻击", "借用检查", "内存安全", "零成本抽象"] }, { id: 8, name: "Ruby红宝石龙", level: 7, hp: 60, max_hp: 60, attack: 65, defense: 55, speed: 75, types: [1, 17], moves: ["宝石闪耀", "元编程", "优雅语法", "动态方法"] }, { id: 9, name: "PHP大象", level: 4, hp: 50, max_hp: 50, attack: 40, defense: 60, speed: 35, types: [2, 5], moves: ["服务器守护", "Web开发", "数据库连接", "顽强生存"] }, { id: 10, name: "Moonbit月兔", level: 10, hp: 90, max_hp: 90, attack: 70, defense: 80, speed: 85, types: [10, 17], moves: ["Web Assembly", "代码幻象", "星辰跃击", "迅捷跃步"] }];
}
function KrystalRay$pokemoon$$create_pokemon_database() {
  return { pokemons: KrystalRay$pokemoon$$get_pokemon_data(), last_updated: "2024-01-01" };
}
function KrystalRay$pokemoon$$find_pokemon_by_id(db, id) {
  let result = undefined;
  let i = 0;
  while (true) {
    if (i < db.pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$at$41$(db.pokemons, i);
      if (pokemon.id === id) {
        result = pokemon;
        break;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function KrystalRay$pokemoon$$find_pokemon_by_name(db, name) {
  let result = undefined;
  let i = 0;
  while (true) {
    if (i < db.pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$at$41$(db.pokemons, i);
      if (pokemon.name === name) {
        result = pokemon;
        break;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function KrystalRay$pokemoon$$find_pokemon_by_type(db, pokemon_type) {
  let result = [];
  let i = 0;
  while (true) {
    if (i < db.pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$at$41$(db.pokemons, i);
      let found = false;
      let j = 0;
      while (true) {
        if (j < pokemon.types.length) {
          if (moonbitlang$core$builtin$$Eq$equal$43$(moonbitlang$core$array$$Array$at$43$(pokemon.types, j), pokemon_type)) {
            found = true;
            break;
          }
          j = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (found) {
        result = moonbitlang$core$builtin$$Add$add$65$(result, [pokemon]);
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function KrystalRay$pokemoon$$display_pokemon_info(pokemon) {
  moonbitlang$core$builtin$$println$27$(`=== ${pokemon.name} ===`);
  moonbitlang$core$builtin$$println$27$(`ID: ${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.id, 10)}`);
  moonbitlang$core$builtin$$println$27$(`等级: ${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.level, 10)}`);
  moonbitlang$core$builtin$$println$27$(`HP: ${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.hp, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.max_hp, 10)}`);
  moonbitlang$core$builtin$$println$27$(`攻击: ${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.attack, 10)}`);
  moonbitlang$core$builtin$$println$27$(`防御: ${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.defense, 10)}`);
  moonbitlang$core$builtin$$println$27$(`速度: ${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.speed, 10)}`);
  moonbitlang$core$builtin$$println$27$(`属性1: ${moonbitlang$core$builtin$$Show$to_string$47$(moonbitlang$core$array$$Array$at$43$(pokemon.types, 0))}`);
  const _bind$8 = pokemon.types.length;
  if (_bind$8 === 2) {
    moonbitlang$core$builtin$$println$27$(`属性2: ${moonbitlang$core$builtin$$Show$to_string$47$(moonbitlang$core$array$$Array$at$43$(pokemon.types, 1))}`);
  } else {
    moonbitlang$core$builtin$$println$27$("属性2: 无");
  }
  moonbitlang$core$builtin$$println$27$(`技能: ${moonbitlang$core$array$$Array$join$27$(pokemon.moves, { str: KrystalRay$pokemoon$$display_pokemon_info$46$42$bind$124$1594, start: 0, end: KrystalRay$pokemoon$$display_pokemon_info$46$42$bind$124$1594.length })}`);
  moonbitlang$core$builtin$$println$27$("---");
}
function KrystalRay$pokemoon$$display_all_pokemons(db) {
  moonbitlang$core$builtin$$println$27$("=== 宝可梦数据库 ===");
  moonbitlang$core$builtin$$println$27$(`最后更新: ${db.last_updated}`);
  moonbitlang$core$builtin$$println$27$(`宝可梦数量: ${moonbitlang$core$int$$Int$to_string$46$inner(db.pokemons.length, 10)}`);
  let i = 0;
  while (true) {
    if (i < db.pokemons.length) {
      KrystalRay$pokemoon$$display_pokemon_info(moonbitlang$core$array$$Array$at$41$(db.pokemons, i));
      i = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function KrystalRay$pokemoon$$test_and_print_pokemon_data() {
  moonbitlang$core$builtin$$println$27$(" 开始测试宝可梦数据读取...");
  moonbitlang$core$builtin$$println$27$("==================================================");
  const db = KrystalRay$pokemoon$$create_pokemon_database();
  moonbitlang$core$builtin$$println$27$("✅ 宝可梦数据库创建成功");
  moonbitlang$core$builtin$$println$27$(`📊 数据库包含 ${moonbitlang$core$int$$Int$to_string$46$inner(db.pokemons.length, 10)} 只宝可梦`);
  moonbitlang$core$builtin$$println$27$("");
  KrystalRay$pokemoon$$display_all_pokemons(db);
  moonbitlang$core$builtin$$println$27$("🔍 测试查找功能:");
  moonbitlang$core$builtin$$println$27$("");
  const _bind$8 = KrystalRay$pokemoon$$find_pokemon_by_id(db, 1);
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 按ID查找失败");
  } else {
    const _Some = _bind$8;
    const _pokemon = _Some;
    moonbitlang$core$builtin$$println$27$("✅ 按ID查找成功:");
    KrystalRay$pokemoon$$display_pokemon_info(_pokemon);
  }
  const _bind$9 = KrystalRay$pokemoon$$find_pokemon_by_name(db, "Ruby红宝石龙");
  if (_bind$9 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 按名称查找失败");
  } else {
    const _Some = _bind$9;
    const _pokemon = _Some;
    moonbitlang$core$builtin$$println$27$("✅ 按名称查找成功:");
    KrystalRay$pokemoon$$display_pokemon_info(_pokemon);
  }
  const fire_pokemons = KrystalRay$pokemoon$$find_pokemon_by_type(db, 1);
  moonbitlang$core$builtin$$println$27$(`🔥 火系宝可梦 (${moonbitlang$core$int$$Int$to_string$46$inner(fire_pokemons.length, 10)} 只):`);
  let i = 0;
  while (true) {
    if (i < fire_pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$at$41$(fire_pokemons, i);
      moonbitlang$core$builtin$$println$27$(`  - ${pokemon.name} (Lv.${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.level, 10)})`);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$println$27$("");
  const grass_pokemons = KrystalRay$pokemoon$$find_pokemon_by_type(db, 4);
  moonbitlang$core$builtin$$println$27$(` 草系宝可梦 (${moonbitlang$core$int$$Int$to_string$46$inner(grass_pokemons.length, 10)} 只):`);
  let j = 0;
  while (true) {
    if (j < grass_pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$at$41$(grass_pokemons, j);
      moonbitlang$core$builtin$$println$27$(`  - ${pokemon.name} (Lv.${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.level, 10)})`);
      j = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$println$27$("");
  moonbitlang$core$builtin$$println$27$("🎉 宝可梦数据测试完成!");
  moonbitlang$core$builtin$$println$27$("==================================================");
}
function KrystalRay$pokemoon$$can_act() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    return false;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    return _state.actions_this_turn < _state.max_actions_per_turn;
  }
}
function KrystalRay$pokemoon$$clear_skill_menu_entities() {
  const _bind$8 = KrystalRay$pokemoon$$skill_menu_state.entities;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, KrystalRay$pokemoon$$skill_selector_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, KrystalRay$pokemoon$$skill_selector_entity);
  } else {
    const _Some = _bind$8;
    const _entities = _Some;
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _entities.background_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _entities.background_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _entities.title_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _entities.title_entity);
    const _arr = _entities.skill_entities;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const skill_entity = _arr[_i];
        moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, skill_entity);
        moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, skill_entity);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _entities.selector_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _entities.selector_entity);
    KrystalRay$pokemoon$$skill_menu_state.entities = undefined;
  }
  moonbitlang$core$builtin$$println$27$("🧹 技能菜单实体清理完成");
}
function KrystalRay$pokemoon$$hide_skill_menu_ui() {
  moonbitlang$core$builtin$$println$27$("❌ 隐藏技能菜单UI");
  KrystalRay$pokemoon$$clear_skill_menu_entities();
  KrystalRay$pokemoon$$battle_render_state.skill_menu_visible = false;
  KrystalRay$pokemoon$$battle_render_state.skill_menu_selected = 0;
  moonbitlang$core$builtin$$println$27$("技能菜单状态已重置");
}
function KrystalRay$pokemoon$$cancel_skill_selection() {
  moonbitlang$core$builtin$$println$27$("❌ 取消技能选择");
  KrystalRay$pokemoon$$battle_render_state.skill_menu_visible = false;
  KrystalRay$pokemoon$$battle_render_state.skill_menu_selected = 0;
  KrystalRay$pokemoon$$hide_skill_menu_ui();
}
function KrystalRay$pokemoon$$get_current_player_moves() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.current_player_pokemon;
  if (_bind$8 === undefined) {
    return [];
  } else {
    const _Some = _bind$8;
    const _pokemon = _Some;
    return KrystalRay$pokemoon$$get_pokemon_moves(_pokemon);
  }
}
function KrystalRay$pokemoon$$update_skill_selector_position() {
  const _bind$8 = KrystalRay$pokemoon$$skill_menu_state.entities;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 技能菜单实体未创建");
    return;
  } else {
    const _Some = _bind$8;
    const _entities = _Some;
    const y_position = 250 + (KrystalRay$pokemoon$$battle_render_state.skill_menu_selected + 0) * 25;
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, _entities.selector_entity, { _0: 270, _1: y_position });
    moonbitlang$core$builtin$$println$27$(`🎯 更新技能选择指示器位置: ${String(y_position)}`);
    return;
  }
}
function KrystalRay$pokemoon$$move_skill_selection_down() {
  const current_moves = KrystalRay$pokemoon$$get_current_player_moves();
  if (current_moves.length > 0) {
    KrystalRay$pokemoon$$battle_render_state.skill_menu_selected = KrystalRay$pokemoon$$battle_render_state.skill_menu_selected < (current_moves.length - 1 | 0) ? KrystalRay$pokemoon$$battle_render_state.skill_menu_selected + 1 | 0 : 0;
    KrystalRay$pokemoon$$update_skill_selector_position();
    moonbitlang$core$builtin$$println$27$(`⬇️ 选择技能: ${moonbitlang$core$array$$Array$at$45$(current_moves, KrystalRay$pokemoon$$battle_render_state.skill_menu_selected).name}`);
    return;
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$move_skill_selection_up() {
  const current_moves = KrystalRay$pokemoon$$get_current_player_moves();
  if (current_moves.length > 0) {
    KrystalRay$pokemoon$$battle_render_state.skill_menu_selected = KrystalRay$pokemoon$$battle_render_state.skill_menu_selected > 0 ? KrystalRay$pokemoon$$battle_render_state.skill_menu_selected - 1 | 0 : current_moves.length - 1 | 0;
    KrystalRay$pokemoon$$update_skill_selector_position();
    moonbitlang$core$builtin$$println$27$(`⬆️ 选择技能: ${moonbitlang$core$array$$Array$at$45$(current_moves, KrystalRay$pokemoon$$battle_render_state.skill_menu_selected).name}`);
    return;
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$is_battle_finished(battle_state) {
  const _bind$8 = battle_state.player_pokemon;
  const _bind$9 = battle_state.enemy_pokemon;
  if (_bind$8 === undefined) {
    return false;
  } else {
    const _Some = _bind$8;
    const _player = _Some;
    if (_bind$9 === undefined) {
      return false;
    } else {
      const _Some$2 = _bind$9;
      const _enemy = _Some$2;
      return _player.hp <= 0 || _enemy.hp <= 0;
    }
  }
}
function KrystalRay$pokemoon$$is_enemy_turn() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    return false;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    return moonbitlang$core$builtin$$Eq$equal$83$(_state.current_turn_type, 1);
  }
}
function KrystalRay$pokemoon$$get_current_player_pokemon_name() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.current_player_pokemon;
  if (_bind$8 === undefined) {
    return "宝可梦";
  } else {
    const _Some = _bind$8;
    const _pokemon = _Some;
    return _pokemon.name;
  }
}
function KrystalRay$pokemoon$$wrap_text_for_text_box(text, max_width_px, max_lines) {
  let current_width = 0;
  let lines = 1;
  let result = "";
  let i = 0;
  const total_chars = moonbitlang$core$string$$String$char_length$46$inner(text, 0, undefined);
  while (true) {
    if (i < total_chars) {
      const ch_view = moonbitlang$core$string$$String$substring$46$inner(text, i, i + 1 | 0);
      if (ch_view === "\n") {
        if (lines >= max_lines) {
          return `${result}…`;
        }
        result = `${result}\n`;
        lines = lines + 1 | 0;
        current_width = 0;
        i = i + 1 | 0;
        continue;
      }
      const code_opt = moonbitlang$core$string$$String$get(ch_view, 0);
      let ch_width;
      if (code_opt === undefined) {
        ch_width = 10;
      } else {
        const _Some = code_opt;
        const _code = _Some;
        ch_width = _code >= 19968 && _code <= 40959 ? 20 : _code <= 127 ? 10 : 18;
      }
      if (current_width + ch_width > max_width_px) {
        if (lines >= max_lines) {
          return `${result}…`;
        }
        result = `${result}\n`;
        lines = lines + 1 | 0;
        current_width = 0;
      }
      result = `${result}${ch_view}`;
      current_width = current_width + ch_width;
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function KrystalRay$pokemoon$$update_text_box(text) {
  const text_entity = KrystalRay$pokemoon$$battle_render_state.text_entity;
  const text_entity_line2 = KrystalRay$pokemoon$$battle_render_state.text_entity_line2;
  const wrapped = KrystalRay$pokemoon$$wrap_text_for_text_box(text, 380, 2);
  let line1 = "";
  let line2 = "";
  let i = 0;
  const total_chars = moonbitlang$core$string$$String$char_length$46$inner(wrapped, 0, undefined);
  let on_second_line = false;
  while (true) {
    if (i < total_chars) {
      const ch = moonbitlang$core$string$$String$substring$46$inner(wrapped, i, i + 1 | 0);
      if (ch === "\n") {
        if (on_second_line) {
          break;
        } else {
          on_second_line = true;
          i = i + 1 | 0;
          continue;
        }
      }
      if (on_second_line) {
        line2 = `${line2}${ch}`;
      } else {
        line1 = `${line1}${ch}`;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const text_sprite_l1 = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(line1, "#FFFFFF", "18px Arial"), 12, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, text_entity, text_sprite_l1);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, text_entity, { _0: 30, _1: 485 });
  const text_sprite_l2 = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(line2, "#FFFFFF", "18px Arial"), 12, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, text_entity_line2, text_sprite_l2);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, text_entity_line2, { _0: 30, _1: 509 });
}
function KrystalRay$pokemoon$$start_new_turn() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 战斗状态未初始化");
    return;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    const new_turn = _state.turn + 1 | 0;
    const new_turn_type = moonbitlang$core$builtin$$Eq$equal$83$(_state.current_turn_type, 0) ? 1 : 0;
    const updated_state = { is_active: _state.is_active, turn: new_turn, current_turn_type: new_turn_type, player_pokemon: _state.player_pokemon, enemy_pokemon: _state.enemy_pokemon, battle_log: _state.battle_log, actions_this_turn: 0, max_actions_per_turn: _state.max_actions_per_turn, current_weather: _state.current_weather, weather_history: _state.weather_history };
    KrystalRay$pokemoon$$battle_render_state.battle_state = updated_state;
    KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed = false;
    let turn_name;
    if (new_turn_type === 0) {
      turn_name = `想要${KrystalRay$pokemoon$$get_current_player_pokemon_name()}做什么?`;
    } else {
      turn_name = `第 ${moonbitlang$core$int$$Int$to_string$46$inner(new_turn, 10)} 回合 - 敌人 的回合`;
    }
    let turn_type_string;
    if (new_turn_type === 0) {
      turn_type_string = "PlayerTurn";
    } else {
      turn_type_string = "EnemyTurn";
    }
    moonbitlang$core$builtin$$println$27$(`🔄 开始第 ${moonbitlang$core$int$$Int$to_string$46$inner(new_turn, 10)} 回合 - ${turn_name}`);
    KrystalRay$pokemoon$$update_text_box(turn_name);
    KrystalRay$pokemoon$$update_turn_display(new_turn, turn_type_string);
    const _bind$9 = KrystalRay$pokemoon$$battle_render_state.battle_state;
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _state$2 = _Some$2;
      const weather_text = KrystalRay$pokemoon$$get_weather_display_text(_state$2);
      KrystalRay$pokemoon$$update_weather_display(weather_text);
      return;
    }
  }
}
function KrystalRay$pokemoon$$update_weather_duration(battle_state) {
  const _bind$8 = battle_state.current_weather;
  if (_bind$8 === undefined) {
    return battle_state;
  } else {
    const _Some = _bind$8;
    const _weather_effect = _Some;
    if (_weather_effect.duration > 0) {
      const new_duration = _weather_effect.duration - 1 | 0;
      const updated_weather = { weather_type: _weather_effect.weather_type, duration: new_duration, intensity: _weather_effect.intensity, source: _weather_effect.source };
      return { is_active: battle_state.is_active, turn: battle_state.turn, current_turn_type: battle_state.current_turn_type, player_pokemon: battle_state.player_pokemon, enemy_pokemon: battle_state.enemy_pokemon, battle_log: battle_state.battle_log, actions_this_turn: battle_state.actions_this_turn, max_actions_per_turn: battle_state.max_actions_per_turn, current_weather: new_duration <= 0 ? undefined : updated_weather, weather_history: moonbitlang$core$builtin$$Add$add$66$(battle_state.weather_history, [_weather_effect]) };
    } else {
      return battle_state;
    }
  }
}
function KrystalRay$pokemoon$$increment_actions_this_turn() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 战斗状态未初始化");
    return;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    const new_actions = _state.actions_this_turn + 1 | 0;
    const updated_state = { is_active: _state.is_active, turn: _state.turn, current_turn_type: _state.current_turn_type, player_pokemon: _state.player_pokemon, enemy_pokemon: _state.enemy_pokemon, battle_log: _state.battle_log, actions_this_turn: new_actions, max_actions_per_turn: _state.max_actions_per_turn, current_weather: _state.current_weather, weather_history: _state.weather_history };
    KrystalRay$pokemoon$$battle_render_state.battle_state = updated_state;
    moonbitlang$core$builtin$$println$27$(`📊 行动次数: ${moonbitlang$core$int$$Int$to_string$46$inner(new_actions, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(_state.max_actions_per_turn, 10)}`);
    return;
  }
}
function KrystalRay$pokemoon$$get_pokemon_sprite_config(pokemon_id) {
  return moonbitlang$core$builtin$$Map$get$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, pokemon_id);
}
function KrystalRay$pokemoon$$create_pokemon_sprite(pokemon, is_front) {
  const _bind$8 = KrystalRay$pokemoon$$get_pokemon_sprite_config(pokemon.id);
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$(`⚠️ 未找到宝可梦 ${moonbitlang$core$int$$Int$to_string$46$inner(pokemon.id, 10)} 的精灵配置，使用默认图片`);
    return Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new$46$inner({ _0: 64, _1: 64 }, "pic/moonbit_back.png", Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0), 2), 15, undefined);
  } else {
    const _Some = _bind$8;
    const _config = _Some;
    const sprite_path = is_front ? _config.front_sprite : _config.back_sprite;
    return Milky2018$selene$sprite$$Sprite$from_picture(Milky2018$selene$sprite$$Picture$new$46$inner(_config.size, sprite_path, Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0), 2), 15, undefined);
  }
}
function KrystalRay$pokemoon$$render_enemy_pokemon(pokemon) {
  const entity = KrystalRay$pokemoon$$battle_render_state.enemy_pokemon_entity;
  moonbitlang$core$builtin$$println$27$(`🎨 正在渲染敌方宝可梦: ${pokemon.name}`);
  const pokemon_sprite = KrystalRay$pokemoon$$create_pokemon_sprite(pokemon, true);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, pokemon_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: 616, _1: 70 });
  moonbitlang$core$builtin$$println$27$(`✅ 敌方宝可梦 ${pokemon.name} 渲染完成`);
}
function KrystalRay$pokemoon$$render_player_pokemon(pokemon) {
  const entity = KrystalRay$pokemoon$$battle_render_state.player_pokemon_entity;
  moonbitlang$core$builtin$$println$27$(`🎨 正在渲染玩家宝可梦: ${pokemon.name}`);
  const pokemon_sprite = KrystalRay$pokemoon$$create_pokemon_sprite(pokemon, false);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, pokemon_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: 70, _1: 316 });
  moonbitlang$core$builtin$$println$27$(`✅ 玩家宝可梦 ${pokemon.name} 渲染完成`);
}
function KrystalRay$pokemoon$$render_pokemon_status(pokemon, position, is_enemy) {
  const config = is_enemy ? { base_position: position, width: 200, height: 20, background_color: "#333333", fill_color: "#FF0000", text_color: "#000000", bar_type: 1 } : { base_position: position, width: 200, height: 20, background_color: "#333333", fill_color: "#00FF00", text_color: "#000000", bar_type: 0 };
  const pokemon_info = KrystalRay$pokemoon$$create_pokemon_info_template(config, pokemon.name, pokemon.level, pokemon.max_hp);
  if (is_enemy) {
    KrystalRay$pokemoon$$battle_render_state.enemy_pokemon_info = pokemon_info;
  } else {
    KrystalRay$pokemoon$$battle_render_state.player_pokemon_info = pokemon_info;
  }
  moonbitlang$core$builtin$$println$27$(`📊 宝可梦状态渲染完成: ${pokemon.name} (敌方: ${moonbitlang$core$builtin$$Show$to_string$50$(is_enemy)})`);
}
function KrystalRay$pokemoon$$update_pokemon_status_display(pokemon, is_enemy) {
  const pokemon_info_opt = is_enemy ? KrystalRay$pokemoon$$battle_render_state.enemy_pokemon_info : KrystalRay$pokemoon$$battle_render_state.player_pokemon_info;
  if (pokemon_info_opt === undefined) {
    const position = is_enemy ? { _0: 350, _1: 50 } : { _0: 450, _1: 350 };
    KrystalRay$pokemoon$$render_pokemon_status(pokemon, position, is_enemy);
    return;
  } else {
    const _Some = pokemon_info_opt;
    const _pokemon_info = _Some;
    KrystalRay$pokemoon$$update_pokemon_info_display(_pokemon_info, pokemon.name, pokemon.level, pokemon.hp, pokemon.max_hp);
    return;
  }
}
function KrystalRay$pokemoon$$render_pokemon(player_pokemon, enemy_pokemon) {
  KrystalRay$pokemoon$$render_player_pokemon(player_pokemon);
  KrystalRay$pokemoon$$render_enemy_pokemon(enemy_pokemon);
  KrystalRay$pokemoon$$update_pokemon_status_display(player_pokemon, false);
  KrystalRay$pokemoon$$update_pokemon_status_display(enemy_pokemon, true);
}
function KrystalRay$pokemoon$$apply_weather_effect(battle_state, weather_effect) {
  return { is_active: battle_state.is_active, turn: battle_state.turn, current_turn_type: battle_state.current_turn_type, player_pokemon: battle_state.player_pokemon, enemy_pokemon: battle_state.enemy_pokemon, battle_log: battle_state.battle_log, actions_this_turn: battle_state.actions_this_turn, max_actions_per_turn: battle_state.max_actions_per_turn, current_weather: weather_effect, weather_history: moonbitlang$core$builtin$$Add$add$66$(battle_state.weather_history, [weather_effect]) };
}
function KrystalRay$pokemoon$$get_single_type_effectiveness(move_type, defender_type) {
  switch (move_type) {
    case "Normal": {
      switch (defender_type) {
        case 12: {
          return 0.5;
        }
        case 16: {
          return 0.5;
        }
        case 13: {
          return 0;
        }
        default: {
          return 1;
        }
      }
    }
    case "Fire": {
      switch (defender_type) {
        case 1: {
          return 0.5;
        }
        case 2: {
          return 0.5;
        }
        case 4: {
          return 2;
        }
        case 5: {
          return 2;
        }
        case 11: {
          return 2;
        }
        case 16: {
          return 2;
        }
        case 12: {
          return 0.5;
        }
        case 14: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Water": {
      switch (defender_type) {
        case 1: {
          return 2;
        }
        case 2: {
          return 0.5;
        }
        case 4: {
          return 0.5;
        }
        case 8: {
          return 2;
        }
        case 12: {
          return 2;
        }
        case 14: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Electric": {
      switch (defender_type) {
        case 2: {
          return 2;
        }
        case 3: {
          return 0.5;
        }
        case 4: {
          return 0.5;
        }
        case 8: {
          return 0;
        }
        case 9: {
          return 2;
        }
        case 14: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Grass": {
      switch (defender_type) {
        case 1: {
          return 0.5;
        }
        case 2: {
          return 2;
        }
        case 4: {
          return 0.5;
        }
        case 7: {
          return 0.5;
        }
        case 8: {
          return 2;
        }
        case 9: {
          return 0.5;
        }
        case 11: {
          return 0.5;
        }
        case 12: {
          return 2;
        }
        case 14: {
          return 0.5;
        }
        case 16: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Ice": {
      switch (defender_type) {
        case 1: {
          return 0.5;
        }
        case 2: {
          return 0.5;
        }
        case 4: {
          return 2;
        }
        case 5: {
          return 0.5;
        }
        case 8: {
          return 2;
        }
        case 9: {
          return 2;
        }
        case 14: {
          return 2;
        }
        case 16: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Fighting": {
      switch (defender_type) {
        case 0: {
          return 2;
        }
        case 5: {
          return 2;
        }
        case 7: {
          return 0.5;
        }
        case 9: {
          return 0.5;
        }
        case 10: {
          return 0.5;
        }
        case 11: {
          return 0.5;
        }
        case 12: {
          return 2;
        }
        case 13: {
          return 0;
        }
        case 15: {
          return 2;
        }
        case 16: {
          return 2;
        }
        case 17: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Poison": {
      switch (defender_type) {
        case 4: {
          return 2;
        }
        case 7: {
          return 0.5;
        }
        case 8: {
          return 0.5;
        }
        case 12: {
          return 0.5;
        }
        case 13: {
          return 0.5;
        }
        case 16: {
          return 0;
        }
        case 17: {
          return 2;
        }
        default: {
          return 1;
        }
      }
    }
    case "Ground": {
      switch (defender_type) {
        case 1: {
          return 2;
        }
        case 3: {
          return 2;
        }
        case 4: {
          return 0.5;
        }
        case 7: {
          return 2;
        }
        case 9: {
          return 0;
        }
        case 11: {
          return 0.5;
        }
        case 12: {
          return 2;
        }
        case 16: {
          return 2;
        }
        default: {
          return 1;
        }
      }
    }
    case "Flying": {
      switch (defender_type) {
        case 3: {
          return 0.5;
        }
        case 4: {
          return 2;
        }
        case 6: {
          return 2;
        }
        case 11: {
          return 2;
        }
        case 12: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Psychic": {
      switch (defender_type) {
        case 6: {
          return 2;
        }
        case 7: {
          return 2;
        }
        case 10: {
          return 0.5;
        }
        case 15: {
          return 0;
        }
        case 16: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Bug": {
      switch (defender_type) {
        case 1: {
          return 0.5;
        }
        case 4: {
          return 2;
        }
        case 6: {
          return 0.5;
        }
        case 7: {
          return 0.5;
        }
        case 9: {
          return 0.5;
        }
        case 10: {
          return 2;
        }
        case 13: {
          return 0.5;
        }
        case 15: {
          return 2;
        }
        case 16: {
          return 0.5;
        }
        case 17: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Rock": {
      switch (defender_type) {
        case 1: {
          return 2;
        }
        case 5: {
          return 2;
        }
        case 6: {
          return 0.5;
        }
        case 8: {
          return 0.5;
        }
        case 9: {
          return 2;
        }
        case 11: {
          return 2;
        }
        case 16: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Ghost": {
      switch (defender_type) {
        case 0: {
          return 0;
        }
        case 10: {
          return 2;
        }
        case 13: {
          return 2;
        }
        case 15: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Dragon": {
      switch (defender_type) {
        case 14: {
          return 2;
        }
        case 16: {
          return 0.5;
        }
        case 17: {
          return 0;
        }
        default: {
          return 1;
        }
      }
    }
    case "Dark": {
      switch (defender_type) {
        case 6: {
          return 0.5;
        }
        case 10: {
          return 2;
        }
        case 13: {
          return 2;
        }
        case 15: {
          return 0.5;
        }
        case 17: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    case "Steel": {
      switch (defender_type) {
        case 1: {
          return 0.5;
        }
        case 2: {
          return 0.5;
        }
        case 3: {
          return 0.5;
        }
        case 5: {
          return 2;
        }
        case 12: {
          return 2;
        }
        case 16: {
          return 0.5;
        }
        case 17: {
          return 2;
        }
        default: {
          return 1;
        }
      }
    }
    case "Fairy": {
      switch (defender_type) {
        case 1: {
          return 0.5;
        }
        case 6: {
          return 2;
        }
        case 7: {
          return 0.5;
        }
        case 14: {
          return 2;
        }
        case 15: {
          return 2;
        }
        case 16: {
          return 0.5;
        }
        default: {
          return 1;
        }
      }
    }
    default: {
      return 1;
    }
  }
}
function KrystalRay$pokemoon$$get_type_effectiveness_multiplier(move_type, defender_types) {
  let total_multiplier = 1;
  const _len = defender_types.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const defender_type = defender_types[_i];
      const type_multiplier = KrystalRay$pokemoon$$get_single_type_effectiveness(move_type, defender_type);
      total_multiplier = total_multiplier * type_multiplier;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return total_multiplier;
}
function KrystalRay$pokemoon$$get_weather_damage_modifier(move_type) {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    return 1;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    const _bind$9 = _state.current_weather;
    if (_bind$9 === undefined) {
      return 1;
    } else {
      const _Some$2 = _bind$9;
      const _weather = _Some$2;
      const _bind$10 = _weather.weather_type;
      switch (_bind$10) {
        case 2: {
          switch (move_type) {
            case "Fire": {
              return 1.5;
            }
            case "Water": {
              return 0.5;
            }
            default: {
              return 1;
            }
          }
        }
        case 1: {
          switch (move_type) {
            case "Water": {
              return 1.5;
            }
            case "Fire": {
              return 0.5;
            }
            default: {
              return 1;
            }
          }
        }
        case 3: {
          if (move_type === "Rock") {
            return 1.3;
          } else {
            return 1;
          }
        }
        case 4: {
          if (move_type === "Ice") {
            return 1.3;
          } else {
            return 1;
          }
        }
        case 7: {
          if (move_type === "Electric") {
            return 1.5;
          } else {
            return 1;
          }
        }
        default: {
          return 1;
        }
      }
    }
  }
}
function KrystalRay$pokemoon$$calculate_damage(attacker, defender, skill) {
  const level = attacker.level;
  const power = skill.power;
  const attack = attacker.attack;
  const defense = defender.defense;
  const level_factor = ((Math.imul(2, level) | 0) / 5 | 0) + 2 | 0;
  const base_damage = (Math.imul(Math.imul(level_factor, power) | 0, attack) | 0) / defense | 0;
  const damage_before_modifier = (base_damage / 50 | 0) + 2 | 0;
  const type_modifier = KrystalRay$pokemoon$$get_type_effectiveness_multiplier(skill.element_type, defender.types);
  const weather_modifier = KrystalRay$pokemoon$$get_weather_damage_modifier(skill.element_type);
  const final_modifier = type_modifier * weather_modifier;
  const final_damage = moonbitlang$core$double$$Double$to_int((damage_before_modifier + 0) * final_modifier);
  return final_damage < 1 ? 1 : final_damage;
}
function KrystalRay$pokemoon$$update_pokemon_hp(pokemon, new_hp) {
  const clamped_hp = new_hp < 0 ? 0 : new_hp > pokemon.max_hp ? pokemon.max_hp : new_hp;
  return { id: pokemon.id, name: pokemon.name, level: pokemon.level, hp: clamped_hp, max_hp: pokemon.max_hp, attack: pokemon.attack, defense: pokemon.defense, speed: pokemon.speed, types: pokemon.types, moves: pokemon.moves };
}
function KrystalRay$pokemoon$$use_move(move_name, is_player, battle_state) {
  _L: {
    const _bind$8 = battle_state.player_pokemon;
    const _bind$9 = battle_state.enemy_pokemon;
    if (_bind$8 === undefined) {
      break _L;
    } else {
      const _Some = _bind$8;
      const _player = _Some;
      if (_bind$9 === undefined) {
        break _L;
      } else {
        const _Some$2 = _bind$9;
        const _enemy = _Some$2;
        const attacker = is_player ? _player : _enemy;
        const defender = is_player ? _enemy : _player;
        const move_obj = KrystalRay$pokemoon$$create_move_from_name(move_name);
        const damage = KrystalRay$pokemoon$$calculate_damage(attacker, defender, move_obj);
        const new_defender_hp = defender.hp > damage ? defender.hp - damage | 0 : 0;
        const updated_defender = KrystalRay$pokemoon$$update_pokemon_hp(defender, new_defender_hp);
        let updated_player;
        let updated_enemy;
        _L$2: {
          if (is_player) {
            updated_player = _player;
            updated_enemy = updated_defender;
            break _L$2;
          } else {
            updated_player = updated_defender;
            updated_enemy = _enemy;
            break _L$2;
          }
        }
        const damage_message = `${attacker.name} 使用了 ${move_name}! 对 ${defender.name} 造成了 ${moonbitlang$core$int$$Int$to_string$46$inner(damage, 10)} 点伤害!`;
        let updated_battle_state = { is_active: battle_state.is_active, turn: battle_state.turn, current_turn_type: battle_state.current_turn_type, player_pokemon: updated_player, enemy_pokemon: updated_enemy, battle_log: battle_state.battle_log, actions_this_turn: battle_state.actions_this_turn, max_actions_per_turn: battle_state.max_actions_per_turn, current_weather: battle_state.current_weather, weather_history: battle_state.weather_history };
        let full_message = damage_message;
        const _bind$10 = move_obj.weather_effect;
        if (_bind$10 === undefined) {
        } else {
          const _Some$3 = _bind$10;
          const _weather_effect = _Some$3;
          updated_battle_state = KrystalRay$pokemoon$$apply_weather_effect(updated_battle_state, _weather_effect);
          const _bind$11 = _weather_effect.weather_type;
          let weather_name;
          switch (_bind$11) {
            case 0: {
              weather_name = "晴朗";
              break;
            }
            case 1: {
              weather_name = "下雨";
              break;
            }
            case 2: {
              weather_name = "大晴天";
              break;
            }
            case 3: {
              weather_name = "沙暴";
              break;
            }
            case 4: {
              weather_name = "冰雹";
              break;
            }
            case 5: {
              weather_name = "雾天";
              break;
            }
            case 6: {
              weather_name = "雪天";
              break;
            }
            default: {
              weather_name = "暴风雨";
            }
          }
          full_message = `${damage_message} 天气变为${weather_name}!`;
        }
        return { _0: full_message, _1: updated_battle_state };
      }
    }
  }
  return { _0: "Battle not properly initialized", _1: battle_state };
}
function KrystalRay$pokemoon$$execute_battle_skill(skill, is_player_attacking) {
  moonbitlang$core$builtin$$println$27$(`⚔️ 执行技能: ${skill.name}`);
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 没有找到当前战斗状态");
    return;
  } else {
    const _Some = _bind$8;
    const _current_battle_state = _Some;
    const _bind$9 = KrystalRay$pokemoon$$use_move(skill.name, is_player_attacking, _current_battle_state);
    const _message = _bind$9._0;
    const _updated_battle_state = _bind$9._1;
    KrystalRay$pokemoon$$battle_render_state.battle_state = _updated_battle_state;
    _L: {
      const _bind$10 = _updated_battle_state.player_pokemon;
      const _bind$11 = _updated_battle_state.enemy_pokemon;
      if (_bind$10 === undefined) {
        break _L;
      } else {
        const _Some$2 = _bind$10;
        const _updated_player = _Some$2;
        if (_bind$11 === undefined) {
          break _L;
        } else {
          const _Some$3 = _bind$11;
          const _updated_enemy = _Some$3;
          KrystalRay$pokemoon$$battle_render_state.current_player_pokemon = _updated_player;
          KrystalRay$pokemoon$$battle_render_state.current_enemy_pokemon = _updated_enemy;
          moonbitlang$core$builtin$$println$27$(`📝 ${_message}`);
          KrystalRay$pokemoon$$update_text_box(_message);
          if (_updated_player.hp <= 0) {
            const victory_message = `${_updated_player.name} 被击败了! ${_updated_enemy.name} 获胜!`;
            moonbitlang$core$builtin$$println$27$(`🎉 ${victory_message}`);
            KrystalRay$pokemoon$$update_text_box(victory_message);
          } else {
            if (_updated_enemy.hp <= 0) {
              const victory_message = `${_updated_enemy.name} 被击败了! ${_updated_player.name} 获胜!`;
              moonbitlang$core$builtin$$println$27$(`🎉 ${victory_message}`);
              KrystalRay$pokemoon$$update_text_box(victory_message);
            }
          }
          KrystalRay$pokemoon$$render_pokemon(_updated_player, _updated_enemy);
          KrystalRay$pokemoon$$increment_actions_this_turn();
          if (is_player_attacking) {
            KrystalRay$pokemoon$$end_current_turn();
            return;
          } else {
            const weather_text = KrystalRay$pokemoon$$get_weather_display_text(_updated_battle_state);
            KrystalRay$pokemoon$$update_weather_display(weather_text);
            return;
          }
        }
      }
    }
    moonbitlang$core$builtin$$println$27$("❌ 战斗状态中的宝可梦信息不完整");
    return;
  }
}
function KrystalRay$pokemoon$$end_current_turn() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 战斗状态未初始化");
    return;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    if (KrystalRay$pokemoon$$is_battle_finished(_state)) {
      return undefined;
    }
    const updated_state = KrystalRay$pokemoon$$update_weather_duration(_state);
    KrystalRay$pokemoon$$battle_render_state.battle_state = updated_state;
    if (_state.actions_this_turn >= _state.max_actions_per_turn) {
      moonbitlang$core$builtin$$println$27$("🔄 回合结束，切换到下一个回合");
      KrystalRay$pokemoon$$start_new_turn();
      if (KrystalRay$pokemoon$$is_enemy_turn()) {
        KrystalRay$pokemoon$$execute_enemy_turn();
        return;
      } else {
        return;
      }
    } else {
      moonbitlang$core$builtin$$println$27$(`⚠️ 本回合还有行动次数剩余: ${moonbitlang$core$int$$Int$to_string$46$inner(_state.actions_this_turn, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(_state.max_actions_per_turn, 10)}`);
      return;
    }
  }
}
function KrystalRay$pokemoon$$execute_enemy_turn() {
  if (KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed) {
    return undefined;
  }
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.current_enemy_pokemon;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 没有找到敌人宝可梦");
    KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed = true;
    KrystalRay$pokemoon$$end_current_turn();
    return;
  } else {
    const _Some = _bind$8;
    const _enemy_pokemon = _Some;
    const moves = KrystalRay$pokemoon$$get_pokemon_moves(_enemy_pokemon);
    if (moves.length > 0) {
      const random_index = moonbitlang$core$random$$Rand$int$46$inner(KrystalRay$pokemoon$$battle_random_generator, moves.length);
      const _bind$9 = moonbitlang$core$array$$Array$get$45$(moves, random_index);
      if (_bind$9 === undefined) {
        moonbitlang$core$builtin$$println$27$("❌ 敌人没有可用技能");
        KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed = true;
        KrystalRay$pokemoon$$end_current_turn();
        return;
      } else {
        const _Some$2 = _bind$9;
        const _skill = _Some$2;
        moonbitlang$core$builtin$$println$27$(` 敌人选择了技能: ${_skill.name}`);
        KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed = true;
        KrystalRay$pokemoon$$execute_battle_skill(_skill, false);
        KrystalRay$pokemoon$$battle_render_state.enemy_skill_display_frame = KrystalRay$pokemoon$$battle_render_state.current_frame_count;
        return;
      }
    } else {
      moonbitlang$core$builtin$$println$27$("❌ 敌人没有技能");
      KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed = true;
      KrystalRay$pokemoon$$end_current_turn();
      return;
    }
  }
}
function KrystalRay$pokemoon$$select_current_skill() {
  const current_frame = KrystalRay$pokemoon$$battle_render_state.current_frame_count;
  if ((current_frame - KrystalRay$pokemoon$$battle_render_state.last_skill_input_frame | 0) < 36) {
    return undefined;
  }
  const current_moves = KrystalRay$pokemoon$$get_current_player_moves();
  if (KrystalRay$pokemoon$$battle_render_state.skill_menu_selected >= 0 && KrystalRay$pokemoon$$battle_render_state.skill_menu_selected < current_moves.length) {
    const selected_skill = moonbitlang$core$array$$Array$at$45$(current_moves, KrystalRay$pokemoon$$battle_render_state.skill_menu_selected);
    moonbitlang$core$builtin$$println$27$(`✅ 选择了技能: ${selected_skill.name}`);
    KrystalRay$pokemoon$$battle_render_state.last_skill_input_frame = current_frame;
    KrystalRay$pokemoon$$battle_render_state.skill_menu_visible = false;
    KrystalRay$pokemoon$$hide_skill_menu_ui();
    KrystalRay$pokemoon$$execute_battle_skill(selected_skill, true);
    return;
  } else {
    moonbitlang$core$builtin$$println$27$("❌ 无效的技能选择");
    return;
  }
}
function KrystalRay$pokemoon$$handle_skill_menu_input() {
  const current_frame = KrystalRay$pokemoon$$battle_render_state.current_frame_count;
  if ((current_frame - KrystalRay$pokemoon$$battle_render_state.last_skill_input_frame | 0) < 36) {
    return undefined;
  }
  if (Milky2018$selene$system$$is_pressed(26)) {
    KrystalRay$pokemoon$$move_skill_selection_up();
    KrystalRay$pokemoon$$battle_render_state.last_skill_input_frame = current_frame;
  }
  if (Milky2018$selene$system$$is_pressed(27)) {
    KrystalRay$pokemoon$$move_skill_selection_down();
    KrystalRay$pokemoon$$battle_render_state.last_skill_input_frame = current_frame;
  }
  if (Milky2018$selene$system$$is_pressed(25) || Milky2018$selene$system$$is_pressed(31)) {
    KrystalRay$pokemoon$$select_current_skill();
  }
  if (Milky2018$selene$system$$is_pressed(23)) {
    KrystalRay$pokemoon$$cancel_skill_selection();
    KrystalRay$pokemoon$$battle_render_state.last_skill_input_frame = current_frame;
    return;
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$update_indicator_position(selection) {
  let indicator_pos;
  switch (selection) {
    case 0: {
      indicator_pos = { _0: 530, _1: 485 };
      break;
    }
    case 1: {
      indicator_pos = { _0: 650, _1: 485 };
      break;
    }
    case 2: {
      indicator_pos = { _0: 530, _1: 520 };
      break;
    }
    default: {
      indicator_pos = { _0: 650, _1: 520 };
    }
  }
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, KrystalRay$pokemoon$$global_indicator_entity, indicator_pos);
  const _bind$8 = moonbitlang$core$builtin$$Map$get$15$(Milky2018$selene$sprite$$sprites, KrystalRay$pokemoon$$global_indicator_entity);
  if (_bind$8 === undefined) {
    const indicator_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("▶", "#FFFF00", "16px Arial"), 13, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, KrystalRay$pokemoon$$global_indicator_entity, indicator_sprite);
  }
  KrystalRay$pokemoon$$battle_render_state.selected_option = selection;
  moonbitlang$core$builtin$$println$27$(`🎯 箭头位置更新: (${String(indicator_pos._0)}, ${String(indicator_pos._1)}) - ${moonbitlang$core$builtin$$Show$to_string$48$(selection)}`);
}
function KrystalRay$pokemoon$$move_selection_down() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.selected_option;
  let new_option;
  switch (_bind$8) {
    case 0: {
      new_option = 2;
      break;
    }
    case 1: {
      new_option = 3;
      break;
    }
    case 2: {
      new_option = 2;
      break;
    }
    default: {
      new_option = 3;
    }
  }
  KrystalRay$pokemoon$$update_indicator_position(new_option);
  moonbitlang$core$builtin$$println$27$("⬇️ 选择: 向下移动");
}
function KrystalRay$pokemoon$$move_selection_left() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.selected_option;
  let new_option;
  switch (_bind$8) {
    case 0: {
      new_option = 0;
      break;
    }
    case 1: {
      new_option = 0;
      break;
    }
    case 2: {
      new_option = 2;
      break;
    }
    default: {
      new_option = 2;
    }
  }
  KrystalRay$pokemoon$$update_indicator_position(new_option);
  moonbitlang$core$builtin$$println$27$("⬅️ 选择: 向左移动");
}
function KrystalRay$pokemoon$$move_selection_right() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.selected_option;
  let new_option;
  switch (_bind$8) {
    case 0: {
      new_option = 1;
      break;
    }
    case 1: {
      new_option = 1;
      break;
    }
    case 2: {
      new_option = 3;
      break;
    }
    default: {
      new_option = 3;
    }
  }
  KrystalRay$pokemoon$$update_indicator_position(new_option);
  moonbitlang$core$builtin$$println$27$("➡️ 选择: 向右移动");
}
function KrystalRay$pokemoon$$move_selection_up() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.selected_option;
  let new_option;
  switch (_bind$8) {
    case 0: {
      new_option = 0;
      break;
    }
    case 1: {
      new_option = 1;
      break;
    }
    case 2: {
      new_option = 0;
      break;
    }
    default: {
      new_option = 1;
    }
  }
  KrystalRay$pokemoon$$update_indicator_position(new_option);
  moonbitlang$core$builtin$$println$27$("⬆️ 选择: 向上移动");
}
function KrystalRay$pokemoon$$create_skill_list_entities(moves) {
  let skill_entities = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < moves.length) {
      const move = moonbitlang$core$array$$Array$at$45$(moves, i);
      const skill_entity = Milky2018$selene$system$$Entity$new();
      const skill_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner(`${move.name} (威力:${moonbitlang$core$int$$Int$to_string$46$inner(move.power, 10)} ${move.element_type})`, "#FFFFFF", "14px Arial"), 17 + i | 0, undefined);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, skill_entity, skill_sprite);
      moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, skill_entity, { _0: 290, _1: 250 + (i + 0) * 25 });
      skill_entities = moonbitlang$core$builtin$$Add$add$68$(skill_entities, [skill_entity]);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return skill_entities;
}
function KrystalRay$pokemoon$$show_skill_menu_ui() {
  moonbitlang$core$builtin$$println$27$("🎯 显示技能菜单UI");
  KrystalRay$pokemoon$$clear_skill_menu_entities();
  const current_moves = KrystalRay$pokemoon$$get_current_player_moves();
  if (current_moves.length > 0) {
    const menu_bg_entity = Milky2018$selene$system$$Entity$new();
    const menu_bg_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 300, _1: 200 }, "#2C3E50"), 14, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, menu_bg_entity, menu_bg_sprite);
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, menu_bg_entity, { _0: 250, _1: 200 });
    const title_entity = Milky2018$selene$system$$Entity$new();
    const title_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("选择技能", "#FFFFFF", "18px Arial"), 15, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, title_entity, title_sprite);
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, title_entity, { _0: 270, _1: 220 });
    const selector_entity = Milky2018$selene$system$$Entity$new();
    const selector_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("▶", "#F39C12", "16px Arial"), 16, undefined);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, selector_entity, selector_sprite);
    moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, selector_entity, { _0: 270, _1: 250 });
    const skill_entities = KrystalRay$pokemoon$$create_skill_list_entities(current_moves);
    KrystalRay$pokemoon$$skill_menu_state.entities = { background_entity: menu_bg_entity, title_entity: title_entity, skill_entities: skill_entities, selector_entity: selector_entity };
    return;
  } else {
    moonbitlang$core$builtin$$println$27$("❌ 当前宝可梦没有技能");
    return;
  }
}
function KrystalRay$pokemoon$$select_current_option() {
  const current_frame = KrystalRay$pokemoon$$battle_render_state.current_frame_count;
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.selected_option;
  let action;
  switch (_bind$8) {
    case 0: {
      if (!KrystalRay$pokemoon$$battle_render_state.skill_menu_visible) {
        KrystalRay$pokemoon$$battle_render_state.skill_menu_visible = true;
        KrystalRay$pokemoon$$battle_render_state.skill_menu_selected = 0;
        KrystalRay$pokemoon$$battle_render_state.last_skill_input_frame = current_frame;
        KrystalRay$pokemoon$$show_skill_menu_ui();
        action = "选择技能";
      } else {
        action = "技能菜单已打开";
      }
      break;
    }
    case 1: {
      action = "打开背包";
      break;
    }
    case 2: {
      action = "查看宝可梦";
      break;
    }
    default: {
      action = "尝试逃跑";
    }
  }
  moonbitlang$core$builtin$$println$27$(`✅ ${action}`);
  KrystalRay$pokemoon$$update_text_box(action);
}
function KrystalRay$pokemoon$$handle_battle_input() {
  if (KrystalRay$pokemoon$$battle_render_state.skill_menu_visible) {
    KrystalRay$pokemoon$$handle_skill_menu_input();
    return;
  } else {
    if (Milky2018$selene$system$$is_pressed(26)) {
      KrystalRay$pokemoon$$move_selection_up();
    }
    if (Milky2018$selene$system$$is_pressed(27)) {
      KrystalRay$pokemoon$$move_selection_down();
    }
    if (Milky2018$selene$system$$is_pressed(28)) {
      KrystalRay$pokemoon$$move_selection_left();
    }
    if (Milky2018$selene$system$$is_pressed(29)) {
      KrystalRay$pokemoon$$move_selection_right();
    }
    if (Milky2018$selene$system$$is_pressed(31)) {
      KrystalRay$pokemoon$$select_current_option();
      return;
    } else {
      return;
    }
  }
}
function KrystalRay$pokemoon$$is_player_turn() {
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.battle_state;
  if (_bind$8 === undefined) {
    return false;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    return moonbitlang$core$builtin$$Eq$equal$83$(_state.current_turn_type, 0);
  }
}
function KrystalRay$pokemoon$$battle_input_system(_backend) {
  if (!KrystalRay$pokemoon$$is_player_turn()) {
    return undefined;
  }
  if (!KrystalRay$pokemoon$$can_act()) {
    return undefined;
  }
  KrystalRay$pokemoon$$handle_battle_input();
}
function KrystalRay$pokemoon$$update_frame_counter() {
  KrystalRay$pokemoon$$battle_render_state.current_frame_count = KrystalRay$pokemoon$$battle_render_state.current_frame_count + 1 | 0;
}
function KrystalRay$pokemoon$$battle_system_fn(_backend) {
  KrystalRay$pokemoon$$update_frame_counter();
  const current_frame = KrystalRay$pokemoon$$battle_render_state.current_frame_count;
  if (KrystalRay$pokemoon$$battle_render_state.enemy_skill_display_frame > 0 && (current_frame - KrystalRay$pokemoon$$battle_render_state.enemy_skill_display_frame | 0) >= 60) {
    KrystalRay$pokemoon$$battle_render_state.enemy_skill_display_frame = 0;
    KrystalRay$pokemoon$$battle_render_state.enemy_skill_message = "";
    KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed = false;
    KrystalRay$pokemoon$$end_current_turn();
  }
  if (KrystalRay$pokemoon$$is_enemy_turn() && !KrystalRay$pokemoon$$battle_render_state.enemy_turn_executed) {
    KrystalRay$pokemoon$$execute_enemy_turn();
    return;
  } else {
    return;
  }
}
function KrystalRay$pokemoon$$create_menu_selector() {
  const selector_entity = Milky2018$selene$system$$Entity$new();
  const selector_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("▶", "#000000", "16px Arial"), 13, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, selector_entity, selector_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, selector_entity, { _0: 530, _1: 485 });
}
function KrystalRay$pokemoon$$create_menu_options() {
  const battle_entity = Milky2018$selene$system$$Entity$new();
  const battle_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("战斗", "#FFFFFF", "16px Arial"), 12, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, battle_entity, battle_text);
  const battle_pos = { _0: 550, _1: 485 };
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, battle_entity, battle_pos);
  const bag_entity = Milky2018$selene$system$$Entity$new();
  const bag_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("背包", "#FFFFFF", "16px Arial"), 12, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, bag_entity, bag_text);
  const bag_pos = { _0: 670, _1: 485 };
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, bag_entity, bag_pos);
  const pokemon_entity = Milky2018$selene$system$$Entity$new();
  const pokemon_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("宝可梦", "#FFFFFF", "16px Arial"), 12, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, pokemon_entity, pokemon_text);
  const pokemon_pos = { _0: 550, _1: 520 };
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, pokemon_entity, pokemon_pos);
  const run_entity = Milky2018$selene$system$$Entity$new();
  const run_text = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("逃跑", "#FFFFFF", "16px Arial"), 12, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, run_entity, run_text);
  const run_pos = { _0: 670, _1: 520 };
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, run_entity, run_pos);
  KrystalRay$pokemoon$$create_menu_selector();
}
function KrystalRay$pokemoon$$create_battle_menu() {
  const entity = KrystalRay$pokemoon$$battle_render_state.menu_entity;
  const menu_bg_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 240, _1: 100 }, "#3B82F6"), 11, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, menu_bg_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: 540, _1: 470 });
  KrystalRay$pokemoon$$create_menu_options();
}
function KrystalRay$pokemoon$$create_text_box() {
  const entity = KrystalRay$pokemoon$$battle_render_state.text_box_entity;
  const text_bg_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 400, _1: 80 }, "#1E3A8A"), 11, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, text_bg_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: 20, _1: 470 });
  const text_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("想要宝可梦做什么?", "#FFFFFF", "18px Arial"), 12, undefined);
  const text_entity = KrystalRay$pokemoon$$battle_render_state.text_entity;
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, text_entity, text_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, text_entity, { _0: 30, _1: 485 });
  const text_entity_line2 = KrystalRay$pokemoon$$battle_render_state.text_entity_line2;
  const text_sprite_empty = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("", "#FFFFFF", "18px Arial"), 12, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, text_entity_line2, text_sprite_empty);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, text_entity_line2, { _0: 30, _1: 509 });
}
function KrystalRay$pokemoon$$add_ui_border() {
  const top_border = Milky2018$selene$system$$Entity$new();
  const top_border_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 3 }, "#FFFFFF"), 11, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, top_border, top_border_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, top_border, { _0: 0, _1: 450 });
}
function KrystalRay$pokemoon$$create_ui_panel() {
  const entity = KrystalRay$pokemoon$$battle_render_state.ui_panel_entity;
  const panel_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 800, _1: 150 }, "#2E2E2E"), 10, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, entity, panel_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, entity, { _0: 0, _1: 450 });
  KrystalRay$pokemoon$$add_ui_border();
}
function KrystalRay$pokemoon$$init_global_state() {
  moonbitlang$core$builtin$$println$27$("🌍 初始化全局状态...");
  const indicator_sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("▶", "#FFFF00", "16px Arial"), 13, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, KrystalRay$pokemoon$$global_indicator_entity, indicator_sprite);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$position$$positions, KrystalRay$pokemoon$$global_indicator_entity, { _0: 530, _1: 485 });
  KrystalRay$pokemoon$$battle_render_state.selected_option = 0;
  moonbitlang$core$builtin$$println$27$("✅ 全局状态初始化完成");
  moonbitlang$core$builtin$$println$27$("🎯 初始箭头位置: (530, 485) - 战斗按钮左侧");
}
function KrystalRay$pokemoon$$init_battle_render_system() {
  moonbitlang$core$builtin$$println$27$("🎨 初始化战斗渲染系统...");
  KrystalRay$pokemoon$$init_global_state();
  KrystalRay$pokemoon$$create_battle_background();
  KrystalRay$pokemoon$$create_ui_panel();
  KrystalRay$pokemoon$$create_text_box();
  KrystalRay$pokemoon$$create_battle_menu();
  moonbitlang$core$builtin$$println$27$("✅ 战斗渲染系统初始化完成");
}
function KrystalRay$pokemoon$$init_battle_system() {
  moonbitlang$core$builtin$$println$27$("Battle system initialization completed");
}
function KrystalRay$pokemoon$$init_event_system() {
  moonbitlang$core$builtin$$println$27$("Event system initialization completed");
}
function KrystalRay$pokemoon$$init_game_core() {
  moonbitlang$core$builtin$$println$27$("Game core initialization completed");
}
function KrystalRay$pokemoon$$init_input_handler() {
  moonbitlang$core$builtin$$println$27$("🎮 输入处理器已初始化");
}
function KrystalRay$pokemoon$$init_pokemon_system() {
  moonbitlang$core$builtin$$println$27$("Pokemon system initialization completed");
}
function KrystalRay$pokemoon$$create_pokemon(name, level, types) {
  return { id: 1, name: name, level: level, hp: 100, max_hp: 100, attack: 50 + (Math.imul(level, 2) | 0) | 0, defense: 45 + (Math.imul(level, 2) | 0) | 0, speed: 60 + (Math.imul(level, 2) | 0) | 0, types: types, moves: ["Tackle", "Ember", "Thunder", "Hyper Beam"] };
}
function KrystalRay$pokemoon$$clear_health_bar_entities() {
  moonbitlang$core$builtin$$println$27$("🧹 清理血条UI实体...");
  const _arr = KrystalRay$pokemoon$$health_bar_ui_state.health_bar_entities;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, entity);
      moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  KrystalRay$pokemoon$$health_bar_ui_state.health_bar_entities = [];
  KrystalRay$pokemoon$$health_bar_ui_state.is_active = false;
  KrystalRay$pokemoon$$health_bar_ui_state.player_health_bar = undefined;
  KrystalRay$pokemoon$$health_bar_ui_state.enemy_health_bar = undefined;
  KrystalRay$pokemoon$$health_bar_ui_state.animation_timer = 0;
  moonbitlang$core$builtin$$println$27$("✅ 血条UI实体清理完成");
}
function KrystalRay$pokemoon$$clear_pokemon_info_entities() {
  moonbitlang$core$builtin$$println$27$("🧹 清理宝可梦信息显示实体...");
  const _bind$8 = KrystalRay$pokemoon$$battle_render_state.player_pokemon_info;
  if (_bind$8 === undefined) {
  } else {
    const _Some = _bind$8;
    const _pokemon_info = _Some;
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.name_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.name_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.level_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.level_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.background_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.background_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.fill_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.fill_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.hp_text_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.hp_text_entity);
    moonbitlang$core$builtin$$println$27$("✅ 玩家宝可梦信息实体已清理");
  }
  const _bind$9 = KrystalRay$pokemoon$$battle_render_state.enemy_pokemon_info;
  if (_bind$9 === undefined) {
  } else {
    const _Some = _bind$9;
    const _pokemon_info = _Some;
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.name_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.name_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.level_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.level_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.background_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.background_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.fill_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.fill_entity);
    moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, _pokemon_info.hp_text_entity);
    moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, _pokemon_info.hp_text_entity);
    moonbitlang$core$builtin$$println$27$("✅ 敌方宝可梦信息实体已清理");
  }
  moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, KrystalRay$pokemoon$$battle_render_state.player_pokemon_entity);
  moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, KrystalRay$pokemoon$$battle_render_state.player_pokemon_entity);
  moonbitlang$core$builtin$$Map$remove$15$(Milky2018$selene$sprite$$sprites, KrystalRay$pokemoon$$battle_render_state.enemy_pokemon_entity);
  moonbitlang$core$builtin$$Map$remove$3$(Milky2018$selene$position$$positions, KrystalRay$pokemoon$$battle_render_state.enemy_pokemon_entity);
  moonbitlang$core$builtin$$println$27$("✅ 宝可梦信息显示实体清理完成");
}
function KrystalRay$pokemoon$$reset_battle_render_state() {
  moonbitlang$core$builtin$$println$27$("🧹 重置战斗状态...");
  KrystalRay$pokemoon$$clear_pokemon_info_entities();
  KrystalRay$pokemoon$$clear_health_bar_entities();
  KrystalRay$pokemoon$$battle_render_state.skill_menu_visible = false;
  KrystalRay$pokemoon$$battle_render_state.skill_menu_selected = 0;
  KrystalRay$pokemoon$$battle_render_state.current_player_pokemon = undefined;
  KrystalRay$pokemoon$$battle_render_state.current_enemy_pokemon = undefined;
  KrystalRay$pokemoon$$battle_render_state.battle_state = undefined;
  KrystalRay$pokemoon$$battle_render_state.player_pokemon_info = undefined;
  KrystalRay$pokemoon$$battle_render_state.enemy_pokemon_info = undefined;
  KrystalRay$pokemoon$$turn_display_state.current_weather = "无天气";
  KrystalRay$pokemoon$$turn_display_state.current_turn = 1;
  KrystalRay$pokemoon$$turn_display_state.current_turn_type = "玩家";
  moonbitlang$core$builtin$$println$27$("✅ 战斗状态重置完成");
}
function KrystalRay$pokemoon$$init_pokemon_sprite_configs() {
  moonbitlang$core$builtin$$println$27$("🖼️ 初始化宝可梦精灵配置...");
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 1, { front_sprite: "pic/python_front-removebg.png", back_sprite: "pic/python_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 2, { front_sprite: "pic/java_front-removebg.png", back_sprite: "pic/java_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 3, { front_sprite: "pic/cpp_front-removebg.png", back_sprite: "pic/cpp_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 4, { front_sprite: "pic/javascript_front-removebg.png", back_sprite: "pic/javascript_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 5, { front_sprite: "pic/csharp_front-removebg.png", back_sprite: "pic/csharp_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 6, { front_sprite: "pic/go_front-removebg.png", back_sprite: "pic/go_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 7, { front_sprite: "pic/rust_front-removebg.png", back_sprite: "pic/rust_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 8, { front_sprite: "pic/ruby_front-removebg.png", back_sprite: "pic/ruby_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 9, { front_sprite: "pic/php_front-removebg.png", back_sprite: "pic/php_back-removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$Map$set$17$(KrystalRay$pokemoon$$pokemon_sprite_cache, 10, { front_sprite: "pic/moonbit_front.png", back_sprite: "pic/moonbit_back_removebg.png", size: { _0: 128, _1: 128 } });
  moonbitlang$core$builtin$$println$27$("✅ 宝可梦精灵配置初始化完成");
}
function KrystalRay$pokemoon$$start_battle_render(player_pokemon, enemy_pokemon) {
  moonbitlang$core$builtin$$println$27$("🎮 开始战斗渲染...");
  if (KrystalRay$pokemoon$$pokemon_sprite_cache.size === 0) {
    KrystalRay$pokemoon$$init_pokemon_sprite_configs();
  }
  KrystalRay$pokemoon$$battle_render_state.current_player_pokemon = player_pokemon;
  KrystalRay$pokemoon$$battle_render_state.current_enemy_pokemon = enemy_pokemon;
  const initial_battle_state = { is_active: true, turn: 1, current_turn_type: 0, player_pokemon: player_pokemon, enemy_pokemon: enemy_pokemon, battle_log: [], actions_this_turn: 0, max_actions_per_turn: 1, current_weather: undefined, weather_history: [] };
  KrystalRay$pokemoon$$battle_render_state.battle_state = initial_battle_state;
  const weather_text = KrystalRay$pokemoon$$get_weather_display_text(initial_battle_state);
  KrystalRay$pokemoon$$update_weather_display(weather_text);
  const _p = KrystalRay$pokemoon$$turn_display_state.turn_display;
  if (_p === undefined) {
    KrystalRay$pokemoon$$init_turn_display_system();
  }
  KrystalRay$pokemoon$$update_turn_display(1, "PlayerTurn");
  KrystalRay$pokemoon$$render_pokemon(player_pokemon, enemy_pokemon);
  moonbitlang$core$builtin$$println$27$("✅ 战斗渲染开始，战斗状态已初始化");
  KrystalRay$pokemoon$$update_text_box(`想要${player_pokemon.name}做什么?`);
}
function KrystalRay$pokemoon$$restart_game_with_both(player_pokemon_name, enemy_pokemon_name) {
  moonbitlang$core$builtin$$println$27$(`🔄 重启游戏，选择我方宝可梦: ${player_pokemon_name}, 对手: ${enemy_pokemon_name}`);
  KrystalRay$pokemoon$$reset_battle_render_state();
  KrystalRay$pokemoon$$init_health_bar_ui();
  const db = KrystalRay$pokemoon$$create_pokemon_database();
  const _bind$8 = KrystalRay$pokemoon$$find_pokemon_by_name(db, player_pokemon_name);
  let player_pokemon;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$(`❌ 数据库中没有找到${player_pokemon_name}，使用默认配置`);
    player_pokemon = KrystalRay$pokemoon$$create_pokemon("Moonbit月兔", 10, [10, 17]);
  } else {
    const _Some = _bind$8;
    player_pokemon = _Some;
  }
  const _bind$9 = KrystalRay$pokemoon$$find_pokemon_by_name(db, enemy_pokemon_name);
  let enemy_pokemon;
  if (_bind$9 === undefined) {
    moonbitlang$core$builtin$$println$27$(`❌ 数据库中没有找到${enemy_pokemon_name}，使用默认配置`);
    enemy_pokemon = KrystalRay$pokemoon$$create_pokemon("Java咖啡杯", 7, [1, 16]);
  } else {
    const _Some = _bind$9;
    enemy_pokemon = _Some;
  }
  KrystalRay$pokemoon$$start_battle_render(player_pokemon, enemy_pokemon);
  moonbitlang$core$builtin$$println$27$(`✅ 游戏重启完成，我方宝可梦: ${player_pokemon_name}, 对手: ${enemy_pokemon_name}`);
  moonbitlang$core$builtin$$println$27$(`📊 血条状态: ${KrystalRay$pokemoon$$get_health_bar_ui_status()}`);
}
function KrystalRay$pokemoon$$restart_game_with_enemy(enemy_pokemon_name) {
  moonbitlang$core$builtin$$println$27$(`🔄 重启游戏，选择对手: ${enemy_pokemon_name}`);
  KrystalRay$pokemoon$$reset_battle_render_state();
  KrystalRay$pokemoon$$init_health_bar_ui();
  const db = KrystalRay$pokemoon$$create_pokemon_database();
  const _bind$8 = KrystalRay$pokemoon$$find_pokemon_by_name(db, "Moonbit月兔");
  let player_pokemon;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 数据库中没有找到Moonbit月兔，使用默认配置");
    player_pokemon = KrystalRay$pokemoon$$create_pokemon("Moonbit月兔", 10, [10, 17]);
  } else {
    const _Some = _bind$8;
    player_pokemon = _Some;
  }
  const _bind$9 = KrystalRay$pokemoon$$find_pokemon_by_name(db, enemy_pokemon_name);
  let enemy_pokemon;
  if (_bind$9 === undefined) {
    moonbitlang$core$builtin$$println$27$(`❌ 数据库中没有找到${enemy_pokemon_name}，使用默认配置`);
    enemy_pokemon = KrystalRay$pokemoon$$create_pokemon("Java咖啡杯", 7, [1, 16]);
  } else {
    const _Some = _bind$9;
    enemy_pokemon = _Some;
  }
  KrystalRay$pokemoon$$start_battle_render(player_pokemon, enemy_pokemon);
  moonbitlang$core$builtin$$println$27$(`✅ 游戏重启完成，对手: ${enemy_pokemon_name}`);
  moonbitlang$core$builtin$$println$27$(`📊 血条状态: ${KrystalRay$pokemoon$$get_health_bar_ui_status()}`);
}
function KrystalRay$pokemoon$$restart_game_with_player(player_pokemon_name) {
  moonbitlang$core$builtin$$println$27$(`🔄 重启游戏，选择我方宝可梦: ${player_pokemon_name}`);
  KrystalRay$pokemoon$$reset_battle_render_state();
  KrystalRay$pokemoon$$init_health_bar_ui();
  const db = KrystalRay$pokemoon$$create_pokemon_database();
  const _bind$8 = KrystalRay$pokemoon$$find_pokemon_by_name(db, player_pokemon_name);
  let player_pokemon;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$(`❌ 数据库中没有找到${player_pokemon_name}，使用默认配置`);
    player_pokemon = KrystalRay$pokemoon$$create_pokemon("Moonbit月兔", 10, [10, 17]);
  } else {
    const _Some = _bind$8;
    player_pokemon = _Some;
  }
  const _bind$9 = KrystalRay$pokemoon$$find_pokemon_by_name(db, "Java咖啡杯");
  let enemy_pokemon;
  if (_bind$9 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 数据库中没有找到Java咖啡杯，使用默认配置");
    enemy_pokemon = KrystalRay$pokemoon$$create_pokemon("Java咖啡杯", 7, [1, 16]);
  } else {
    const _Some = _bind$9;
    enemy_pokemon = _Some;
  }
  KrystalRay$pokemoon$$start_battle_render(player_pokemon, enemy_pokemon);
  moonbitlang$core$builtin$$println$27$(`✅ 游戏重启完成，我方宝可梦: ${player_pokemon_name}`);
  moonbitlang$core$builtin$$println$27$(`📊 血条状态: ${KrystalRay$pokemoon$$get_health_bar_ui_status()}`);
}
function KrystalRay$pokemoon$$start_test_battle() {
  moonbitlang$core$builtin$$println$27$("⚔️ 开始测试战斗...");
  KrystalRay$pokemoon$$init_health_bar_ui();
  const db = KrystalRay$pokemoon$$create_pokemon_database();
  const _bind$8 = KrystalRay$pokemoon$$find_pokemon_by_name(db, "Moonbit月兔");
  let player_pokemon;
  if (_bind$8 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 数据库中没有找到该pokemoon，使用默认配置");
    player_pokemon = KrystalRay$pokemoon$$create_pokemon("Python蟒蛇", 8, [4, 14]);
  } else {
    const _Some = _bind$8;
    player_pokemon = _Some;
  }
  const _bind$9 = KrystalRay$pokemoon$$find_pokemon_by_name(db, "Java咖啡杯");
  let enemy_pokemon;
  if (_bind$9 === undefined) {
    moonbitlang$core$builtin$$println$27$("❌ 数据库中没有找到该pokemon，使用默认配置");
    enemy_pokemon = KrystalRay$pokemoon$$create_pokemon("Java咖啡杯", 7, [1, 16]);
  } else {
    const _Some = _bind$9;
    enemy_pokemon = _Some;
  }
  KrystalRay$pokemoon$$start_battle_render(player_pokemon, enemy_pokemon);
  moonbitlang$core$builtin$$println$27$("✅ 测试战斗开始，宝可梦信息显示由战斗渲染系统管理");
  moonbitlang$core$builtin$$println$27$(`📊 血条状态: ${KrystalRay$pokemoon$$get_health_bar_ui_status()}`);
}
function KrystalRay$pokemoon$$game_start_system(_backend) {
  moonbitlang$core$builtin$$println$27$("=== Pokemon Moon Game Starting ===");
  KrystalRay$pokemoon$$restart_game_with_enemy("Java咖啡杯");
  KrystalRay$pokemoon$$restart_game_with_both("Moonbit月兔", "Java咖啡杯");
  KrystalRay$pokemoon$$restart_game_with_player("Moonbit月兔");
  KrystalRay$pokemoon$$init_battle_system();
  KrystalRay$pokemoon$$init_pokemon_system();
  KrystalRay$pokemoon$$init_event_system();
  KrystalRay$pokemoon$$init_game_core();
  KrystalRay$pokemoon$$init_input_handler();
  KrystalRay$pokemoon$$init_debug_screen_system();
  KrystalRay$pokemoon$$init_health_bar_ui();
  KrystalRay$pokemoon$$init_turn_display_system();
  KrystalRay$pokemoon$$init_battle_render_system();
  KrystalRay$pokemoon$$start_test_battle();
  moonbitlang$core$builtin$$println$27$("All game systems initialized!");
}
function KrystalRay$pokemoon$$health_bar_ui_system(backend) {
  if (KrystalRay$pokemoon$$health_bar_ui_state.is_active) {
    if (KrystalRay$pokemoon$$health_bar_ui_state.animation_timer > 0) {
      KrystalRay$pokemoon$$update_health_bar_ui_animation(0.016);
    }
    const _arr = KrystalRay$pokemoon$$health_bar_ui_state.health_bar_entities;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const entity = _arr[_i];
        const sprite = moonbitlang$core$builtin$$Map$get$15$(Milky2018$selene$sprite$$sprites, entity);
        const position = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$position$$positions, entity);
        const ui = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$ui$$uis, entity);
        if (!(sprite === undefined) && (!(position === undefined) && !(ui === -1))) {
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
}
function KrystalRay$pokemoon$$input_system(_backend) {}
function KrystalRay$pokemoon$$test_pokemon_data_reader() {
  moonbitlang$core$builtin$$println$27$("=== 测试宝可梦数据读取器 ===");
  KrystalRay$pokemoon$$test_and_print_pokemon_data();
  moonbitlang$core$builtin$$println$27$("=== 宝可梦数据读取器测试完成 ===");
}
(() => {
  moonbitlang$core$builtin$$println$27$("Pokemon Moon - Pokemon Game");
  moonbitlang$core$builtin$$println$27$("RPG game based on MoonBit and HTML");
  KrystalRay$pokemoon$$test_pokemon_data_reader();
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new({ self: Milky2018$selene$45$canvas$$CanvasBackend$new(), method_0: Milky2018$selene$system$$Backend$build$81$, method_1: Milky2018$selene$system$$Backend$draw_picture$81$, method_2: Milky2018$selene$system$$Backend$draw_sprite$81$, method_3: Milky2018$selene$system$$Backend$register_key_events$81$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$81$, method_5: Milky2018$selene$system$$Backend$lock_mouse$81$, method_6: Milky2018$selene$system$$Backend$draw_stroke_rect$81$, method_7: Milky2018$selene$system$$Backend$draw_text$81$, method_8: Milky2018$selene$system$$Backend$draw_color_rect$81$, method_9: Milky2018$selene$system$$Backend$draw_gradient_rect$81$, method_10: Milky2018$selene$system$$Backend$play_audio$81$, method_11: Milky2018$selene$system$$Backend$get_canvas_size$81$, method_12: Milky2018$selene$system$$Backend$get_zoom$81$, method_13: Milky2018$selene$system$$Backend$get_debug_info$81$, method_14: Milky2018$selene$system$$Backend$preload_img$81$, method_15: Milky2018$selene$system$$Backend$preload_audio$81$ }), 800), 600), 60), Milky2018$selene$plugins$$default_plugin), KrystalRay$pokemoon$$game_start_system, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), KrystalRay$pokemoon$$battle_system_fn, undefined, undefined), KrystalRay$pokemoon$$input_system, undefined, undefined), KrystalRay$pokemoon$$battle_input_system, undefined, undefined), KrystalRay$pokemoon$$health_bar_ui_system, undefined, undefined), KrystalRay$pokemoon$$dynamic_weather_update_system, undefined, undefined));
  moonbitlang$core$builtin$$println$27$("Game initialization completed!");
})();
