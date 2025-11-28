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
const InventoryItem$Empty = { $tag: 0 };
function InventoryItem$Seed(param0) {
  this._0 = param0;
}
InventoryItem$Seed.prototype.$tag = 1;
function $64$Milky2018$47$selene$47$style$46$SizePlan$Sized(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$style$46$SizePlan$Sized.prototype.$tag = 0;
const $64$Milky2018$47$selene$47$style$46$SizePlan$FromSprite = { $tag: 1 };
const $64$Milky2018$47$selene$47$style$46$SizePlan$FromChildren = { $tag: 2 };
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
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
const Option$None$3$ = { $tag: 0 };
function Option$Some$3$(param0) {
  this._0 = param0;
}
Option$Some$3$.prototype.$tag = 1;
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
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style = (x,value) => x.strokeStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style = (x,value) => x.fillStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern = (self,image,repetition) => self.createPattern(image,repetition);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect = (self,x,y,w,h) => self.clearRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect = (self,x,y,w,h) => self.fillRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect = (self,x,y,w,h) => self.strokeRect(x,y,w,h);
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
const Option$None$9$ = { $tag: 0 };
function Option$Some$9$(param0) {
  this._0 = param0;
}
Option$Some$9$.prototype.$tag = 1;
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
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
function $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect.prototype.$tag = 0;
function ParseResult$Ok(param0) {
  this._0 = param0;
}
ParseResult$Ok.prototype.$tag = 0;
function ParseResult$Err(param0) {
  this._0 = param0;
}
ParseResult$Err.prototype.$tag = 1;
function ScriptCommand$Move(param0) {
  this._0 = param0;
}
ScriptCommand$Move.prototype.$tag = 0;
function ScriptCommand$Plant(param0) {
  this._0 = param0;
}
ScriptCommand$Plant.prototype.$tag = 1;
function ScriptCommand$SelectSeed(param0) {
  this._0 = param0;
}
ScriptCommand$SelectSeed.prototype.$tag = 2;
function ScriptCommand$SelectSlot(param0) {
  this._0 = param0;
}
ScriptCommand$SelectSlot.prototype.$tag = 3;
const Milky2018$selene$inputs$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$inputs$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$all_codes$46$42$bind$47$1930 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
const Milky2018$selene$inputs$$from_string$46$constr$47$1940 = 0;
const Milky2018$selene$inputs$$from_string$46$constr$47$1941 = 1;
const Milky2018$selene$inputs$$from_string$46$constr$47$1942 = 2;
const Milky2018$selene$inputs$$from_string$46$constr$47$1943 = 3;
const Milky2018$selene$inputs$$from_string$46$constr$47$1944 = 4;
const Milky2018$selene$inputs$$from_string$46$constr$47$1945 = 5;
const Milky2018$selene$inputs$$from_string$46$constr$47$1946 = 6;
const Milky2018$selene$inputs$$from_string$46$constr$47$1947 = 7;
const Milky2018$selene$inputs$$from_string$46$constr$47$1948 = 8;
const Milky2018$selene$inputs$$from_string$46$constr$47$1949 = 9;
const Milky2018$selene$inputs$$from_string$46$constr$47$1950 = 10;
const Milky2018$selene$inputs$$from_string$46$constr$47$1951 = 11;
const Milky2018$selene$inputs$$from_string$46$constr$47$1952 = 12;
const Milky2018$selene$inputs$$from_string$46$constr$47$1953 = 13;
const Milky2018$selene$inputs$$from_string$46$constr$47$1954 = 14;
const Milky2018$selene$inputs$$from_string$46$constr$47$1955 = 15;
const Milky2018$selene$inputs$$from_string$46$constr$47$1956 = 16;
const Milky2018$selene$inputs$$from_string$46$constr$47$1957 = 17;
const Milky2018$selene$inputs$$from_string$46$constr$47$1958 = 18;
const Milky2018$selene$inputs$$from_string$46$constr$47$1959 = 19;
const Milky2018$selene$inputs$$from_string$46$constr$47$1960 = 20;
const Milky2018$selene$inputs$$from_string$46$constr$47$1961 = 21;
const Milky2018$selene$inputs$$from_string$46$constr$47$1962 = 22;
const Milky2018$selene$inputs$$from_string$46$constr$47$1963 = 23;
const Milky2018$selene$inputs$$from_string$46$constr$47$1964 = 24;
const Milky2018$selene$inputs$$from_string$46$constr$47$1965 = 26;
const Milky2018$selene$inputs$$from_string$46$constr$47$1966 = 27;
const Milky2018$selene$inputs$$from_string$46$constr$47$1967 = 28;
const Milky2018$selene$inputs$$from_string$46$constr$47$1968 = 29;
const Milky2018$selene$inputs$$from_string$46$constr$47$1969 = 30;
const Milky2018$selene$inputs$$from_string$46$constr$47$1970 = 31;
const Milky2018$selene$inputs$$from_string$46$constr$47$1971 = 32;
const Milky2018$selene$inputs$$from_string$46$constr$47$1972 = 33;
const Milky2018$selene$inputs$$from_string$46$constr$47$1973 = 34;
const Milky2018$selene$inputs$$from_string$46$constr$47$1974 = 35;
const Milky2018$selene$inputs$$from_string$46$constr$47$1975 = 36;
const Milky2018$selene$inputs$$from_string$46$constr$47$1976 = 37;
const Milky2018$selene$inputs$$from_string$46$constr$47$1977 = 38;
const Milky2018$selene$inputs$$from_string$46$constr$47$1978 = 39;
const Milky2018$selene$inputs$$from_string$46$constr$47$1979 = 40;
const Milky2018$selene$inputs$$from_string$46$constr$47$1980 = 41;
const Milky2018$selene$inputs$$from_string$46$constr$47$1981 = 42;
const Milky2018$selene$inputs$$from_string$46$constr$47$1982 = 43;
const Milky2018$selene$inputs$$from_string$46$constr$47$1983 = 44;
const Milky2018$selene$entity$$entity_generator = { val: 0 };
const Milky2018$selene$plugins$$default_plugin$46$constr$47$2838 = new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0);
const username$meowbloom$src$$cat_back_idle_anim$46$constr$47$2841 = true;
const username$meowbloom$src$$cat_back_idle_anim$46$constr$47$2842 = new Option$Some$0$(2);
const username$meowbloom$src$$cat_front_idle_anim$46$constr$47$2843 = true;
const username$meowbloom$src$$cat_front_idle_anim$46$constr$47$2844 = new Option$Some$0$(2);
const username$meowbloom$src$$cat_left_idle_anim$46$constr$47$2845 = true;
const username$meowbloom$src$$cat_left_idle_anim$46$constr$47$2846 = new Option$Some$0$(2);
const username$meowbloom$src$$cat_right_idle_anim$46$constr$47$2847 = true;
const username$meowbloom$src$$cat_right_idle_anim$46$constr$47$2848 = new Option$Some$0$(2);
const username$meowbloom$src$$cat_back_walk_anim$46$constr$47$2849 = true;
const username$meowbloom$src$$cat_back_walk_anim$46$constr$47$2850 = new Option$Some$0$(8);
const username$meowbloom$src$$cat_front_walk_anim$46$constr$47$2851 = true;
const username$meowbloom$src$$cat_front_walk_anim$46$constr$47$2852 = new Option$Some$0$(8);
const username$meowbloom$src$$cat_left_walk_anim$46$constr$47$2853 = true;
const username$meowbloom$src$$cat_left_walk_anim$46$constr$47$2854 = new Option$Some$0$(8);
const username$meowbloom$src$$cat_right_walk_anim$46$constr$47$2855 = true;
const username$meowbloom$src$$cat_right_walk_anim$46$constr$47$2856 = new Option$Some$0$(8);
const username$meowbloom$src$$line_entities = [];
const username$meowbloom$src$$code_lines = [];
const username$meowbloom$src$$script_commands = [];
const username$meowbloom$src$$icon_entities = [];
const username$meowbloom$src$$slot_entities = [];
const username$meowbloom$src$$spawn_start_ui$46$constr$47$2865 = "#3F2A14";
const username$meowbloom$src$$spawn_start_ui$46$constr$47$2866 = "white";
const username$meowbloom$src$$spawn_start_ui$46$constr$47$2867 = "24px ArkPixel";
const username$meowbloom$src$$default_inventory$46$constr$47$2880 = new InventoryItem$Seed(0);
const username$meowbloom$src$$default_inventory$46$constr$47$2881 = new InventoryItem$Seed(1);
const username$meowbloom$src$$next_stage$46$constr$47$2913 = 1;
const username$meowbloom$src$$next_stage$46$constr$47$2914 = 2;
const username$meowbloom$src$$next_stage$46$constr$47$2915 = 3;
const username$meowbloom$src$$next_stage$46$constr$47$2916 = 4;
const username$meowbloom$src$$stage_duration$46$constr$47$2918 = new Option$Some$0$(2);
const username$meowbloom$src$$stage_duration$46$constr$47$2919 = new Option$Some$0$(5);
const username$meowbloom$src$$stage_duration$46$constr$47$2920 = new Option$Some$0$(6);
const username$meowbloom$src$$stage_duration$46$constr$47$2921 = new Option$Some$0$(2.5);
const username$meowbloom$src$$stage_duration$46$constr$47$2922 = new Option$Some$0$(5.5);
const username$meowbloom$src$$stage_duration$46$constr$47$2923 = new Option$Some$0$(6.5);
const username$meowbloom$src$$generate_quest_by_index$46$constr$47$2948 = 0;
const username$meowbloom$src$$generate_quest_by_index$46$record$47$2949 = { target_type: username$meowbloom$src$$generate_quest_by_index$46$constr$47$2948, target_amount: 5, progress: 0, reward: 10 };
const username$meowbloom$src$$generate_quest_by_index$46$constr$47$2950 = 1;
const username$meowbloom$src$$generate_quest_by_index$46$record$47$2951 = { target_type: username$meowbloom$src$$generate_quest_by_index$46$constr$47$2950, target_amount: 3, progress: 0, reward: 12 };
const username$meowbloom$src$$harvest_text_sprite$46$constr$47$2973 = "#2f2a2a";
const username$meowbloom$src$$harvest_text_sprite$46$constr$47$2974 = "16px ArkPixel";
const username$meowbloom$src$$cat_control_system$46$constr$47$3035 = true;
const username$meowbloom$src$$cat_control_system$46$constr$47$3036 = true;
const username$meowbloom$src$$cat_control_system$46$constr$47$3037 = true;
const username$meowbloom$src$$cat_control_system$46$constr$47$3038 = true;
const username$meowbloom$src$$cat_control_system$46$constr$47$3039 = true;
const username$meowbloom$src$$create_button$46$constr$47$3073 = "#3F2A14";
const username$meowbloom$src$$create_button$46$constr$47$3074 = new Option$Some$0$(366);
const username$meowbloom$src$$create_button$46$constr$47$3075 = "#2F1B0C";
const username$meowbloom$src$$create_button$46$constr$47$3076 = "20px ArkPixel";
const username$meowbloom$src$$cat_cancel_script_move$46$constr$47$3085 = true;
const username$meowbloom$src$$parse_plant_type_name$46$constr$47$3104 = 0;
const username$meowbloom$src$$parse_plant_type_name$46$constr$47$3105 = 1;
const username$meowbloom$src$$show_console_panel$46$constr$47$3161 = "#3F2A14";
const username$meowbloom$src$$show_console_panel$46$constr$47$3162 = new Option$Some$0$(24);
const username$meowbloom$src$$show_console_panel$46$constr$47$3163 = "#FFFFFF";
const username$meowbloom$src$$show_console_panel$46$constr$47$3164 = "16px ArkPixel";
const username$meowbloom$src$$show_console_panel$46$constr$47$3165 = "#FFD27F";
const username$meowbloom$src$$show_console_panel$46$constr$47$3166 = "14px ArkPixel";
const username$meowbloom$src$$refresh_lines$46$constr$47$3190 = "#FFFFFF";
const username$meowbloom$src$$refresh_lines$46$constr$47$3191 = "16px ArkPixel";
const username$meowbloom$src$$update_status_sprite$46$constr$47$3257 = "#FFD27F";
const username$meowbloom$src$$update_status_sprite$46$constr$47$3258 = "14px ArkPixel";
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3272 = 0;
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3273 = 1;
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3274 = 2;
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3275 = 3;
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3276 = 4;
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3277 = 5;
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3278 = 6;
const username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3279 = 7;
const username$meowbloom$src$$slot_background_sprite$46$constr$47$3282 = "#FFFFFF";
const username$meowbloom$src$$slot_background_sprite$46$constr$47$3283 = "rgba(0, 0, 0, 0.35)";
const username$meowbloom$src$$spawn_inventory_ui$46$constr$47$3305 = new Option$Some$0$(8);
const username$meowbloom$src$$spawn_inventory_ui$46$constr$47$3306 = new Option$Some$0$(8);
const username$meowbloom$src$$_main$46$constr$47$3319 = new $64$Milky2018$47$selene$47$system$46$Schedule$Render(1);
const Milky2018$selene$position$$positions = moonbitlang$core$builtin$$Map$new$46$inner$0$(8);
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const Milky2018$selene$backend$$canvas_backend = Milky2018$selene$backend$$CanvasBackend$new();
const Milky2018$selene$ui$$uis = moonbitlang$core$builtin$$Map$new$46$inner$1$(8);
const Milky2018$selene$style$$styles = moonbitlang$core$builtin$$Map$new$46$inner$2$(8);
const Milky2018$selene$entity$$all_entities = moonbitlang$core$set$$Set$new$46$inner$3$(8);
const Milky2018$selene$style$$screen_root = Milky2018$selene$entity$$Entity$new();
(() => {
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$style$$styles, Milky2018$selene$style$$screen_root, Milky2018$selene$style$$Style$new$46$inner(new $64$Milky2018$47$selene$47$style$46$SizePlan$Sized(Milky2018$selene$backend$$canvas_backend.viewport_size), 0, 0, 0, 0, 0));
  moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, Milky2018$selene$style$$screen_root, { _0: 0, _1: 0 });
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$ui$$uis, Milky2018$selene$style$$screen_root, Milky2018$selene$ui$$Ui$new());
})();
const username$meowbloom$src$$current_quest = moonbitlang$core$ref$$Ref$new$4$(undefined);
const username$meowbloom$src$$quest_id_counter = moonbitlang$core$ref$$Ref$new$5$(0);
const username$meowbloom$src$$hud_dirty = moonbitlang$core$ref$$Ref$new$6$(true);
const username$meowbloom$src$$hud_panel = moonbitlang$core$ref$$Ref$new$7$(undefined);
const Milky2018$selene$collision$$shapes = moonbitlang$core$builtin$$Map$new$46$inner$8$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const Milky2018$selene$collision$$pickables = moonbitlang$core$builtin$$Map$new$46$inner$10$(8);
const Milky2018$selene$entity$$children = moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
const Milky2018$selene$entity$$parents = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const username$meowbloom$src$$quest_label_entity = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$rice_label_entity = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$tomato_label_entity = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$coin_label_entity = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$coins = moonbitlang$core$ref$$Ref$new$5$(0);
const username$meowbloom$src$$tomato_harvest_count = moonbitlang$core$ref$$Ref$new$5$(0);
const username$meowbloom$src$$rice_harvest_count = moonbitlang$core$ref$$Ref$new$5$(0);
const Milky2018$selene$sprite$$animation_generator = moonbitlang$core$ref$$Ref$new$5$(0);
const username$meowbloom$src$$tomato_seed_animation = username$meowbloom$src$$stage_anim(6, 2);
const username$meowbloom$src$$tomato_fruit_animation = username$meowbloom$src$$stage_anim(3, 3);
const username$meowbloom$src$$rice_mature_animation = username$meowbloom$src$$stage_anim(3, 2);
const username$meowbloom$src$$rice_sprout_animation = username$meowbloom$src$$stage_anim(1, 2);
const username$meowbloom$src$$tomato_growing_animation = username$meowbloom$src$$stage_anim(0, 3);
const username$meowbloom$src$$rice_growing_animation = username$meowbloom$src$$stage_anim(2, 2);
const username$meowbloom$src$$tomato_mature_animation = username$meowbloom$src$$stage_anim(2, 3);
const username$meowbloom$src$$rice_seed_animation = username$meowbloom$src$$stage_anim(0, 2);
const username$meowbloom$src$$rice_fruit_animation = username$meowbloom$src$$stage_anim(5, 2);
const username$meowbloom$src$$tomato_sprout_animation = username$meowbloom$src$$stage_anim(7, 2);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$13$(0);
const username$meowbloom$src$$plants = moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
const username$meowbloom$src$$selected_slot = moonbitlang$core$ref$$Ref$new$5$(0);
const username$meowbloom$src$$inventory_slots = username$meowbloom$src$$default_inventory();
const username$meowbloom$src$$console_visible = moonbitlang$core$ref$$Ref$new$6$(false);
const username$meowbloom$src$$editor_focused = moonbitlang$core$ref$$Ref$new$6$(false);
const username$meowbloom$src$$inventory_dirty = moonbitlang$core$ref$$Ref$new$6$(true);
const Milky2018$selene$inputs$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$15$(8);
const username$meowbloom$src$$console_panel = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$render_dirty = moonbitlang$core$ref$$Ref$new$6$(true);
const username$meowbloom$src$$blink_timer = moonbitlang$core$ref$$Ref$new$16$(0);
const username$meowbloom$src$$blink_visible = moonbitlang$core$ref$$Ref$new$6$(true);
const username$meowbloom$src$$status_dirty = moonbitlang$core$ref$$Ref$new$6$(true);
const username$meowbloom$src$$status_message = moonbitlang$core$ref$$Ref$new$17$("点击右侧面板输入指令，Run 执行，Clear 清空");
const username$meowbloom$src$$cat_entity = Milky2018$selene$entity$$Entity$new();
const username$meowbloom$src$$script_move_target = moonbitlang$core$ref$$Ref$new$18$(undefined);
const username$meowbloom$src$$cat_facing = moonbitlang$core$ref$$Ref$new$19$(0);
const _p = 0;
const _p$2 = 0;
const username$meowbloom$src$$cat_front_idle_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p + 0) * 16, _1: (_p$2 + 0) * 16 }, 0), username$meowbloom$src$$cat_front_idle_anim$46$constr$47$2843, username$meowbloom$src$$cat_front_idle_anim$46$constr$47$2844, undefined);
const _p$3 = 0;
const _p$4 = 1;
const username$meowbloom$src$$cat_left_idle_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p$3 + 0) * 16, _1: (_p$4 + 0) * 16 }, 0), username$meowbloom$src$$cat_left_idle_anim$46$constr$47$2845, username$meowbloom$src$$cat_left_idle_anim$46$constr$47$2846, undefined);
const _p$5 = 4;
const _p$6 = 1;
const username$meowbloom$src$$cat_right_idle_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p$5 + 0) * 16, _1: (_p$6 + 0) * 16 }, 0), username$meowbloom$src$$cat_right_idle_anim$46$constr$47$2847, username$meowbloom$src$$cat_right_idle_anim$46$constr$47$2848, undefined);
const _p$7 = 4;
const _p$8 = 0;
const username$meowbloom$src$$cat_back_idle_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p$7 + 0) * 16, _1: (_p$8 + 0) * 16 }, 0), username$meowbloom$src$$cat_back_idle_anim$46$constr$47$2841, username$meowbloom$src$$cat_back_idle_anim$46$constr$47$2842, undefined);
const username$meowbloom$src$$script_running = moonbitlang$core$ref$$Ref$new$6$(false);
const username$meowbloom$src$$script_index = moonbitlang$core$ref$$Ref$new$5$(0);
const username$meowbloom$src$$active_command = moonbitlang$core$ref$$Ref$new$20$(undefined);
const username$meowbloom$src$$active_move_target = moonbitlang$core$ref$$Ref$new$18$(undefined);
const username$meowbloom$src$$game_started = moonbitlang$core$ref$$Ref$new$6$(false);
const username$meowbloom$src$$status_entity = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$run_button_entity = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$clear_button_entity = moonbitlang$core$ref$$Ref$new$7$(undefined);
const username$meowbloom$src$$inventory_initialized = moonbitlang$core$ref$$Ref$new$6$(false);
const Milky2018$selene$backend$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$21$(8);
const _bind = { _0: 0, _1: 0 };
const _bind$2 = Option$None$0$;
const _bind$3 = Option$None$0$;
const _bind$4 = Option$None$0$;
const _bind$5 = Option$None$0$;
const _bind$6 = undefined;
const _bind$7 = { _0: 0, _1: 0 };
const Milky2018$selene$camera$$camera = { position: _bind, limit_top: _bind$4, limit_bottom: _bind$2, limit_left: _bind$3, limit_right: _bind$5, attached_entity: _bind$6, offset: _bind$7, follow_x: true, follow_y: true };
const Milky2018$selene$collision$$quadtree_root = moonbitlang$core$ref$$Ref$new$22$(Milky2018$selene$collision$$QuadTree$new({ _0: 0, _1: 0 }, { _0: 0, _1: 0 }, 0));
const Milky2018$selene$collision$$real_velocities = moonbitlang$core$builtin$$Map$new$46$inner$23$(8);
const Milky2018$selene$collision$$collision_infos = moonbitlang$core$builtin$$Map$new$46$inner$24$(8);
const Milky2018$selene$collision$$colliders = moonbitlang$core$builtin$$Map$new$46$inner$25$(8);
const Milky2018$selene$collision$$collision_layers = moonbitlang$core$builtin$$Map$new$46$inner$26$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$23$(8);
const Milky2018$selene$collision$$areas = moonbitlang$core$builtin$$Map$new$46$inner$27$(8);
const Milky2018$selene$inputs$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$15$(8);
const Milky2018$selene$inputs$$last_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$15$(8);
const Milky2018$selene$inputs$$all_codes = moonbitlang$core$set$$Set$from_array$15$({ buf: Milky2018$selene$inputs$$all_codes$46$42$bind$47$1930, start: 0, end: 45 });
const Milky2018$selene$inputs$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$15$(8);
const Milky2018$selene$system$$timers = moonbitlang$core$array$$Array$new$46$inner$28$(0);
const Milky2018$selene$backend$$realtime_delta = moonbitlang$core$ref$$Ref$new$16$(0);
const username$meowbloom$src$$start_panel = moonbitlang$core$ref$$Ref$new$7$(undefined);
const Milky2018$selene$backend$$window = Yoorkin$rabbit$45$tea$dom$$window();
const _p$9 = 6;
const _p$10 = 1;
const username$meowbloom$src$$cat_right_walk_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p$9 + 0) * 16, _1: (_p$10 + 0) * 16 }, 0), username$meowbloom$src$$cat_right_walk_anim$46$constr$47$2855, username$meowbloom$src$$cat_right_walk_anim$46$constr$47$2856, undefined);
const _p$11 = 6;
const _p$12 = 0;
const username$meowbloom$src$$cat_back_walk_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p$11 + 0) * 16, _1: (_p$12 + 0) * 16 }, 0), username$meowbloom$src$$cat_back_walk_anim$46$constr$47$2849, username$meowbloom$src$$cat_back_walk_anim$46$constr$47$2850, undefined);
const _p$13 = 2;
const _p$14 = 0;
const username$meowbloom$src$$cat_front_walk_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p$13 + 0) * 16, _1: (_p$14 + 0) * 16 }, 0), username$meowbloom$src$$cat_front_walk_anim$46$constr$47$2851, username$meowbloom$src$$cat_front_walk_anim$46$constr$47$2852, undefined);
const _p$15 = 2;
const _p$16 = 1;
const username$meowbloom$src$$cat_left_walk_anim = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/spritesheet.png", 2, 16, 16, { _0: (_p$15 + 0) * 16, _1: (_p$16 + 0) * 16 }, 0), username$meowbloom$src$$cat_left_walk_anim$46$constr$47$2853, username$meowbloom$src$$cat_left_walk_anim$46$constr$47$2854, undefined);
function moonbitlang$core$abort$$abort$29$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$22$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$op_notequal$30$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$30$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$3$(x, y) {
  return !(x === y);
}
function moonbitlang$core$builtin$$op_notequal$31$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$31$(x, y);
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
function moonbitlang$core$array$$Array$at$35$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$36$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$15$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$37$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Hasher$combine$3$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$3$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$17$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$17$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$15$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$15$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$38$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$3$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$39$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$17$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$40$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$15$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$5$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
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
function moonbitlang$core$option$$Option$unwrap_or$16$(self, default_) {
  if (self.$tag === 0) {
    return default_;
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap_or_default$46$(self) {
  if (self === undefined) {
    return moonbitlang$core$builtin$$Default$default$46$();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$map_or$47$(self, default_, f) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _x = _Some;
    return f(_x);
  }
}
function moonbitlang$core$option$$Option$map_or$48$(self, default_, f) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _x = _Some;
    return f(_x);
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
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$0$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$24$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$23$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$25$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$10$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$27$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$26$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$21$(capacity) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$0$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$23$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$11$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$24$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
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
function moonbitlang$core$builtin$$Map$set_entry$0$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$23$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$11$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$24$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$push_away$0$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$0$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$0$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$23$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$23$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$23$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$11$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$11$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$11$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$push_away$24$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$24$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$24$(self, entry$2, idx$2);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$set_with_hash$0$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$0$(self);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$0$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$0$(self, _idx, entry);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
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
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
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
function moonbitlang$core$builtin$$Map$set_with_hash$23$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$23$(self);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$23$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$23$(self, _idx, entry);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
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
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$set_with_hash$11$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$11$(self);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$11$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$11$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$24$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$24$(self);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$24$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$24$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$2$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$0$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
      moonbitlang$core$builtin$$Map$set_with_hash$0$(self, _key, _value, _hash);
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
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$9$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$14$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$23$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
      moonbitlang$core$builtin$$Map$set_with_hash$23$(self, _key, _value, _hash);
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
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$8$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$10$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$21$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$grow$11$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
      moonbitlang$core$builtin$$Map$set_with_hash$11$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$24$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
      moonbitlang$core$builtin$$Map$set_with_hash$24$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$0$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$0$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$14$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, moonbitlang$core$builtin$$Hash$hash$39$(key));
}
function moonbitlang$core$builtin$$Map$set$23$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$23$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$8$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$21$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$21$(self, key, value, moonbitlang$core$builtin$$Hash$hash$39$(key));
}
function moonbitlang$core$builtin$$Map$set$11$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$11$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$set$24$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$24$(self, key, value, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$get$0$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$get$25$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$get$27$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$get$26$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$get$21$(self, key) {
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
function moonbitlang$core$builtin$$Map$get$14$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$get$24$(self, key) {
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
      return Option$None$2$;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
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
function moonbitlang$core$builtin$$Map$get_or_init$12$(self, key, default_) {
  const hash = moonbitlang$core$builtin$$Hash$hash$38$(key);
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
      const new_value = default_();
      _bind$8 = { _0: idx, _1: psl, _2: new_value, _3: undefined };
      break;
    } else {
      const _Some = _bind$9;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (psl > _entry.psl) {
        const new_value = default_();
        _bind$8 = { _0: idx, _1: psl, _2: new_value, _3: _entry };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$8._0;
  const _psl = _bind$8._1;
  const _new_value = _bind$8._2;
  const _push_away = _bind$8._3;
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$12$(self);
    moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, _new_value, hash);
  } else {
    if (_push_away === undefined) {
    } else {
      const _Some = _push_away;
      const _entry = _Some;
      moonbitlang$core$builtin$$Map$push_away$12$(self, _idx, _entry);
    }
    const entry = { prev: self.tail, next: undefined, psl: _psl, hash: hash, key: key, value: _new_value };
    moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, _idx, entry);
  }
  return _new_value;
}
function moonbitlang$core$builtin$$Map$contains$14$(self, key) {
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
      return false;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
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
function moonbitlang$core$builtin$$Map$contains$11$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$builtin$$Map$remove_entry$9$(self, entry) {
  const _bind$8 = entry.prev;
  if (_bind$8 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
function moonbitlang$core$builtin$$Map$remove_entry$0$(self, entry) {
  const _bind$8 = entry.prev;
  if (_bind$8 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
function moonbitlang$core$builtin$$Map$remove_entry$14$(self, entry) {
  const _bind$8 = entry.prev;
  if (_bind$8 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
function moonbitlang$core$builtin$$Map$shift_back$9$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$9$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$shift_back$0$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$0$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$shift_back$14$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$14$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$9$(self, key, hash) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$9$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$9$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$0$(self, key, hash) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$0$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$0$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$14$(self, key, hash) {
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
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$14$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$14$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove$9$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$9$(self, key, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$remove$0$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$builtin$$Map$remove$14$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$14$(self, key, moonbitlang$core$builtin$$Hash$hash$39$(key));
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$49$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$50$(self, value, start, end) {
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
function moonbitlang$core$builtin$$Map$clear$24$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$49$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter$12$(self) {
  const _p$17 = (yield_) => {
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
        const _bind$8 = yield_({ _0: _key, _1: _value });
        if (_bind$8 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p$17;
}
function moonbitlang$core$builtin$$Map$iterator$23$(self) {
  const curr_entry = { val: self.head };
  const _p$17 = () => {
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
  return _p$17;
}
function moonbitlang$core$builtin$$Map$iterator$8$(self) {
  const curr_entry = { val: self.head };
  const _p$17 = () => {
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
  return _p$17;
}
function moonbitlang$core$builtin$$Map$iterator$1$(self) {
  const curr_entry = { val: self.head };
  const _p$17 = () => {
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
  return _p$17;
}
function moonbitlang$core$builtin$$Map$iterator2$23$(self) {
  return moonbitlang$core$builtin$$Map$iterator$23$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$8$(self) {
  return moonbitlang$core$builtin$$Map$iterator$8$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$1$(self) {
  return moonbitlang$core$builtin$$Map$iterator$1$(self);
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
function moonbitlang$core$builtin$$Map$to_array$9$(self) {
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
function moonbitlang$core$builtin$$Iterator$next$15$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$3$(self) {
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
function moonbitlang$core$array$$Array$push$35$(self, value) {
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
function moonbitlang$core$array$$Array$push$3$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$57$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$22$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$37$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$28$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$36$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$13$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$34$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$58$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$32$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$33$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$59$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iterator2$next$23$(self) {
  return moonbitlang$core$builtin$$Iterator$next$51$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$8$(self) {
  return moonbitlang$core$builtin$$Iterator$next$52$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$1$(self) {
  return moonbitlang$core$builtin$$Iterator$next$53$(self);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p$17 = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$18 = 17;
  self.acc = Math.imul(_p$17 << _p$18 | (_p$17 >>> (32 - _p$18 | 0) | 0), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_uint(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end888 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end888) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$17$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$60$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$17$(input) {
  console.log(input);
}
function moonbitlang$core$array$$ArrayView$at$22$(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$22$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$5$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$5$(index)}`);
  }
}
function moonbitlang$core$array$$Array$new$46$inner$13$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$28$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$59$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$3$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$13$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$28$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$33$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$34$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_pop$15$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$unsafe_pop$34$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$pop$15$(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$15$(self);
    return v;
  }
}
function moonbitlang$core$array$$Array$pop$34$(self) {
  if (self.length === 0) {
    return Option$None$3$;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$34$(self);
    return new Option$Some$3$(v);
  }
}
function moonbitlang$core$array$$Array$set$35$(self, index, value) {
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
function moonbitlang$core$array$$Array$set$37$(self, index, value) {
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
function moonbitlang$core$array$$Array$clear$3$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$3$(self, 0);
}
function moonbitlang$core$array$$Array$clear$13$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$13$(self, 0);
}
function moonbitlang$core$array$$Array$clear$33$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$33$(self, 0);
}
function moonbitlang$core$array$$Array$clear$34$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$34$(self, 0);
}
function moonbitlang$core$array$$Array$contains$61$(self, value) {
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
function moonbitlang$core$array$$Array$bubble_sort_by$35$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1377 = actual_start + 1 | 0;
  let _tmp = _start1377;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$35$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$35$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$35$(arr, j);
          moonbitlang$core$array$$Array$set$35$(arr, j, moonbitlang$core$array$$Array$at$35$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$35$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$bubble_sort_by$37$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1377 = actual_start + 1 | 0;
  let _tmp = _start1377;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$37$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$37$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$37$(arr, j);
          moonbitlang$core$array$$Array$set$37$(arr, j, moonbitlang$core$array$$Array$at$37$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$37$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1351(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$35$(arr, a_pos), moonbitlang$core$array$$Array$at$35$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$35$(arr, a_pos);
    moonbitlang$core$array$$Array$set$35$(arr, a_pos, moonbitlang$core$array$$Array$at$35$(arr, b_pos));
    moonbitlang$core$array$$Array$set$35$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1352(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1351(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1351(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1351(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$35$(arr, start, end, cmp) {
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
    const _env = { _0: cmp, _1: arr, _2: swaps, _3: actual_start };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1352(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1352(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1352(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1352(_env, a, b, c);
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
        const temp = moonbitlang$core$array$$Array$at$35$(arr, i_pos);
        moonbitlang$core$array$$Array$set$35$(arr, i_pos, moonbitlang$core$array$$Array$at$35$(arr, j_pos));
        moonbitlang$core$array$$Array$set$35$(arr, j_pos, temp);
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1386(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$37$(arr, a_pos), moonbitlang$core$array$$Array$at$37$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$37$(arr, a_pos);
    moonbitlang$core$array$$Array$set$37$(arr, a_pos, moonbitlang$core$array$$Array$at$37$(arr, b_pos));
    moonbitlang$core$array$$Array$set$37$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1387(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1386(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1386(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$1386(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$37$(arr, start, end, cmp) {
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
    const _env = { _0: cmp, _1: arr, _2: swaps, _3: actual_start };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1387(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1387(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1387(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$1387(_env, a, b, c);
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
        const temp = moonbitlang$core$array$$Array$at$37$(arr, i_pos);
        moonbitlang$core$array$$Array$set$37$(arr, i_pos, moonbitlang$core$array$$Array$at$37$(arr, j_pos));
        moonbitlang$core$array$$Array$set$37$(arr, j_pos, temp);
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
function moonbitlang$core$array$$Array$sift_down_by$35$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$35$(arr, child_pos), moonbitlang$core$array$$Array$at$35$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$35$(arr, current_pos), moonbitlang$core$array$$Array$at$35$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$35$(arr, current_pos);
      moonbitlang$core$array$$Array$set$35$(arr, current_pos, moonbitlang$core$array$$Array$at$35$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$35$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$sift_down_by$37$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$37$(arr, child_pos), moonbitlang$core$array$$Array$at$37$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$37$(arr, current_pos), moonbitlang$core$array$$Array$at$37$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$37$(arr, current_pos);
      moonbitlang$core$array$$Array$set$37$(arr, current_pos, moonbitlang$core$array$$Array$at$37$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$37$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$35$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$Array$sift_down_by$35$(arr, actual_start, actual_end, i, cmp);
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
      const temp = moonbitlang$core$array$$Array$at$35$(arr, actual_start);
      moonbitlang$core$array$$Array$set$35$(arr, actual_start, moonbitlang$core$array$$Array$at$35$(arr, last));
      moonbitlang$core$array$$Array$set$35$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$35$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$37$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$Array$sift_down_by$37$(arr, actual_start, actual_end, i, cmp);
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
      const temp = moonbitlang$core$array$$Array$at$37$(arr, actual_start);
      moonbitlang$core$array$$Array$set$37$(arr, actual_start, moonbitlang$core$array$$Array$at$37$(arr, last));
      moonbitlang$core$array$$Array$set$37$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$37$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$partition_by$35$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$35$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$35$(arr, pivot_index, moonbitlang$core$array$$Array$at$35$(arr, last_index));
  moonbitlang$core$array$$Array$set$35$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$35$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$35$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$35$(arr, i);
          moonbitlang$core$array$$Array$set$35$(arr, i, moonbitlang$core$array$$Array$at$35$(arr, j));
          moonbitlang$core$array$$Array$set$35$(arr, j, temp$2);
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
  const temp$2 = moonbitlang$core$array$$Array$at$35$(arr, i);
  moonbitlang$core$array$$Array$set$35$(arr, i, moonbitlang$core$array$$Array$at$35$(arr, last_index));
  moonbitlang$core$array$$Array$set$35$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$partition_by$37$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$37$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$37$(arr, pivot_index, moonbitlang$core$array$$Array$at$37$(arr, last_index));
  moonbitlang$core$array$$Array$set$37$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$37$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$37$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$37$(arr, i);
          moonbitlang$core$array$$Array$set$37$(arr, i, moonbitlang$core$array$$Array$at$37$(arr, j));
          moonbitlang$core$array$$Array$set$37$(arr, j, temp$2);
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
  const temp$2 = moonbitlang$core$array$$Array$at$37$(arr, i);
  moonbitlang$core$array$$Array$set$37$(arr, i, moonbitlang$core$array$$Array$at$37$(arr, last_index));
  moonbitlang$core$array$$Array$set$37$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$35$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1392 = actual_start + 1 | 0;
  let _tmp = _start1392;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$35$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$35$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$35$(arr, j);
          moonbitlang$core$array$$Array$set$35$(arr, j, moonbitlang$core$array$$Array$at$35$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$35$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$try_bubble_sort_by$37$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1392 = actual_start + 1 | 0;
  let _tmp = _start1392;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$37$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$37$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$37$(arr, j);
          moonbitlang$core$array$$Array$set$37$(arr, j, moonbitlang$core$array$$Array$at$37$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$37$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$quick_sort_by$35$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$35$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$35$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$Array$choose_pivot_by$35$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$35$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$Array$partition_by$35$(arr, current_start, current_end, cmp, _pivot_index);
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
      if (cmp(_pred, moonbitlang$core$array$$Array$at$35$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$35$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$35$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$35$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$35$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$35$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$quick_sort_by$37$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$37$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$37$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$Array$choose_pivot_by$37$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$37$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$Array$partition_by$37$(arr, current_start, current_end, cmp, _pivot_index);
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
      if (cmp(_pred, moonbitlang$core$array$$Array$at$37$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$37$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$37$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$37$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$37$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$37$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$62$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$35$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$37$(self, cmp) {
  moonbitlang$core$array$$Array$quick_sort_by$37$(self, 0, self.length, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$list$$List$from_array$22$(arr) {
  let _tmp = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$4$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$4$(moonbitlang$core$array$$ArrayView$at$22$(arr, i), list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$ref$$Ref$new$7$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$6$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$19$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$18$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$63$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$16$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$22$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$5$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$4$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$17$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$20$(x) {
  return { val: x };
}
function moonbitlang$core$set$$Set$new$46$inner$15$(capacity) {
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
function moonbitlang$core$set$$Set$add_entry_to_tail$3$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$15$(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$set_entry$15$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$push_away$15$(self, idx, entry) {
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
      moonbitlang$core$set$$Set$set_entry$15$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$15$(self, entry$2, idx$2);
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
        const _p$17 = _curr_entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$set$$Set$add_with_hash$15$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$15$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$15$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$15$(self, idx, _curr_entry);
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
  moonbitlang$core$set$$Set$add_entry_to_tail$15$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$3$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
function moonbitlang$core$set$$Set$grow$15$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$17 = self.capacity;
  self.grow_at = (Math.imul(_p$17, 13) | 0) / 16 | 0;
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
      moonbitlang$core$set$$Set$add_with_hash$15$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$3$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$3$(self, key, moonbitlang$core$builtin$$Hash$hash$38$(key));
}
function moonbitlang$core$set$$Set$add$15$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$15$(self, key, moonbitlang$core$builtin$$Hash$hash$40$(key));
}
function moonbitlang$core$set$$Set$from_array$15$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p$17 = capacity;
  if (length > ((Math.imul(_p$17, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$set$$Set$new$46$inner$15$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$set$$Set$add$15$(m, e);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$3$(self, key) {
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
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$set$$Set$contains$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$40$(key);
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
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$15$(_entry.key, key)) {
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
function moonbitlang$core$set$$Set$remove_entry$15$(self, entry) {
  const _bind$8 = entry.prev;
  if (_bind$8 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$8);
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
    const _p$17 = _tmp[_bind$8];
    let _tmp$2;
    if (_p$17 === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$18 = _p$17;
      _tmp$2 = _p$18;
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
function moonbitlang$core$set$$Set$shift_back$15$(self, idx) {
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
          moonbitlang$core$set$$Set$set_entry$15$(self, _x, idx$2);
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
function moonbitlang$core$set$$Set$remove$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$40$(key);
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
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$15$(_entry.key, key)) {
        moonbitlang$core$set$$Set$remove_entry$15$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$15$(self, idx);
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
      break;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p$17 = _entry.key;
        _tmp$4 = _p$17 === key;
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
function moonbitlang$core$set$$Set$clear$15$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$50$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$3$(self) {
  const _p$17 = (yield_) => {
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
  return _p$17;
}
function moonbitlang$core$set$$Set$iterator$15$(self) {
  const curr_entry = { val: self.head };
  const _p$17 = () => {
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
  return _p$17;
}
function moonbitlang$core$set$$Set$iterator$3$(self) {
  const curr_entry = { val: self.head };
  const _p$17 = () => {
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
  return _p$17;
}
function moonbitlang$core$set$$Set$difference$15$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$15$(8);
  let _tmp = self.head;
  while (true) {
    const _p$17 = _tmp;
    if (_p$17 === undefined) {
      break;
    } else {
      const _p$18 = _p$17;
      const _p$19 = _p$18;
      const _p$20 = _p$19.key;
      const _p$21 = _p$19.next;
      if (!moonbitlang$core$set$$Set$contains$15$(other, _p$20)) {
        moonbitlang$core$set$$Set$add$15$(m, _p$20);
      }
      _tmp = _p$21;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$15$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$15$(8);
  let _tmp = self.head;
  while (true) {
    const _p$17 = _tmp;
    if (_p$17 === undefined) {
      break;
    } else {
      const _p$18 = _p$17;
      const _p$19 = _p$18;
      const _p$20 = _p$19.key;
      const _p$21 = _p$19.next;
      moonbitlang$core$set$$Set$add$15$(m, _p$20);
      _tmp = _p$21;
      continue;
    }
  }
  let _tmp$2 = other.head;
  while (true) {
    const _p$17 = _tmp$2;
    if (_p$17 === undefined) {
      break;
    } else {
      const _p$18 = _p$17;
      const _p$19 = _p$18;
      const _p$20 = _p$19.key;
      const _p$21 = _p$19.next;
      moonbitlang$core$set$$Set$add$15$(m, _p$20);
      _tmp$2 = _p$21;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$3$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$3$(8);
  let _tmp = self.head;
  while (true) {
    const _p$17 = _tmp;
    if (_p$17 === undefined) {
      break;
    } else {
      const _p$18 = _p$17;
      const _p$19 = _p$18;
      const _p$20 = _p$19.key;
      const _p$21 = _p$19.next;
      moonbitlang$core$set$$Set$add$3$(m, _p$20);
      _tmp = _p$21;
      continue;
    }
  }
  let _tmp$2 = other.head;
  while (true) {
    const _p$17 = _tmp$2;
    if (_p$17 === undefined) {
      break;
    } else {
      const _p$18 = _p$17;
      const _p$19 = _p$18;
      const _p$20 = _p$19.key;
      const _p$21 = _p$19.next;
      moonbitlang$core$set$$Set$add$3$(m, _p$20);
      _tmp$2 = _p$21;
      continue;
    }
  }
  return m;
}
function rami3l$js$45$ffi$js$$Union3$from0$64$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$64$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$65$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$44$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$66$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$67$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$16$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$68$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$68$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$68$(self)) {
    moonbitlang$core$abort$$abort$29$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$41$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$5$(self) : Option$None$5$;
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
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$69$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$69$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$69$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$69$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$69$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$67$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$70$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$71$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$43$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$72$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$42$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$72$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$41$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$44$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$44$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$16$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function moonbitlang$core$builtin$$Default$default$46$() {
  return { _0: 0, _1: 0 };
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
function Milky2018$selene$math$$Vec2D$normalize(this_) {
  const mag = Math.sqrt(this_._0 * this_._0 + this_._1 * this_._1);
  return mag > 0 ? { _0: this_._0 / mag, _1: this_._1 / mag } : { _0: 0, _1: 0 };
}
function Milky2018$selene$math$$Transform$new$46$inner(a, b, c, d, tx, ty) {
  return { a: a, b: b, c: c, d: d, tx: tx, ty: ty };
}
function Milky2018$selene$math$$Transform$apply_to_point(self, x, y) {
  const new_x = self.a * x + self.c * y + self.tx;
  const new_y = self.b * x + self.d * y + self.ty;
  return { _0: new_x, _1: new_y };
}
function Milky2018$selene$math$$Transform$apply_to_vec2d(self, vec) {
  const p = Milky2018$selene$math$$Transform$apply_to_point(self, vec._0, vec._1);
  return { _0: p._0, _1: p._1 };
}
function Milky2018$selene$math$$Rect$intersects(a, b) {
  return Milky2018$selene$math$$Vec2D$op_get(a.position, 0) < Milky2018$selene$math$$Vec2D$op_get(b.position, 0) + Milky2018$selene$math$$Vec2D$op_get(b.size, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 0) + Milky2018$selene$math$$Vec2D$op_get(a.size, 0) > Milky2018$selene$math$$Vec2D$op_get(b.position, 0) && (Milky2018$selene$math$$Vec2D$op_get(a.position, 1) < Milky2018$selene$math$$Vec2D$op_get(b.position, 1) + Milky2018$selene$math$$Vec2D$op_get(b.size, 1) && Milky2018$selene$math$$Vec2D$op_get(a.position, 1) + Milky2018$selene$math$$Vec2D$op_get(a.size, 1) > Milky2018$selene$math$$Vec2D$op_get(b.position, 1)));
}
function Milky2018$selene$math$$Rect$shift(self, dir) {
  const _p$17 = self.position;
  const _tmp = { _0: _p$17._0 + dir._0, _1: _p$17._1 + dir._1 };
  return { position: _tmp, size: self.size };
}
function moonbitlang$core$builtin$$Eq$equal$15$(_x_29, _x_30) {
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
    case 32: {
      if (_x_30 === 32) {
        return true;
      } else {
        return false;
      }
    }
    case 33: {
      if (_x_30 === 33) {
        return true;
      } else {
        return false;
      }
    }
    case 34: {
      if (_x_30 === 34) {
        return true;
      } else {
        return false;
      }
    }
    case 35: {
      if (_x_30 === 35) {
        return true;
      } else {
        return false;
      }
    }
    case 36: {
      if (_x_30 === 36) {
        return true;
      } else {
        return false;
      }
    }
    case 37: {
      if (_x_30 === 37) {
        return true;
      } else {
        return false;
      }
    }
    case 38: {
      if (_x_30 === 38) {
        return true;
      } else {
        return false;
      }
    }
    case 39: {
      if (_x_30 === 39) {
        return true;
      } else {
        return false;
      }
    }
    case 40: {
      if (_x_30 === 40) {
        return true;
      } else {
        return false;
      }
    }
    case 41: {
      if (_x_30 === 41) {
        return true;
      } else {
        return false;
      }
    }
    case 42: {
      if (_x_30 === 42) {
        return true;
      } else {
        return false;
      }
    }
    case 43: {
      if (_x_30 === 43) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_30 === 44) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$15$(_x_21, _x_22) {
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
    case 32: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 32);
      return;
    }
    case 33: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 33);
      return;
    }
    case 34: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 34);
      return;
    }
    case 35: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 35);
      return;
    }
    case 36: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 36);
      return;
    }
    case 37: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 37);
      return;
    }
    case 38: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 38);
      return;
    }
    case 39: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 39);
      return;
    }
    case 40: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 40);
      return;
    }
    case 41: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 41);
      return;
    }
    case 42: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 42);
      return;
    }
    case 43: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 43);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_22, 44);
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
      return Milky2018$selene$inputs$$from_string$46$constr$47$1940;
    }
    case "KeyB": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1941;
    }
    case "KeyC": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1942;
    }
    case "KeyD": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1943;
    }
    case "KeyE": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1944;
    }
    case "KeyF": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1945;
    }
    case "KeyG": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1946;
    }
    case "KeyH": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1947;
    }
    case "KeyI": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1948;
    }
    case "KeyJ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1949;
    }
    case "KeyK": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1950;
    }
    case "KeyL": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1951;
    }
    case "KeyM": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1952;
    }
    case "KeyN": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1953;
    }
    case "KeyO": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1954;
    }
    case "KeyP": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1955;
    }
    case "KeyQ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1956;
    }
    case "KeyR": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1957;
    }
    case "KeyS": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1958;
    }
    case "KeyT": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1959;
    }
    case "KeyU": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1960;
    }
    case "KeyV": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1961;
    }
    case "KeyW": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1962;
    }
    case "KeyX": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1963;
    }
    case "KeyY": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1964;
    }
    case "Digit0": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1965;
    }
    case "Digit1": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1966;
    }
    case "Digit2": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1967;
    }
    case "Digit3": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1968;
    }
    case "Digit4": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1969;
    }
    case "Digit5": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1970;
    }
    case "Digit6": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1971;
    }
    case "Digit7": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1972;
    }
    case "Digit8": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1973;
    }
    case "Digit9": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1974;
    }
    case "ArrowUp": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1975;
    }
    case "ArrowDown": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1976;
    }
    case "ArrowLeft": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1977;
    }
    case "ArrowRight": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1978;
    }
    case "Space": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1979;
    }
    case "Enter": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1980;
    }
    case "Escape": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1981;
    }
    case "Backspace": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1982;
    }
    case "Delete": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$1983;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$inputs$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$15$(Milky2018$selene$inputs$$pressed_keys, code);
}
function Milky2018$selene$inputs$$key_vector(up, down, left, right) {
  const x = Milky2018$selene$inputs$$is_pressed(left) ? -1 : Milky2018$selene$inputs$$is_pressed(right) ? 1 : 0;
  const y = Milky2018$selene$inputs$$is_pressed(up) ? -1 : Milky2018$selene$inputs$$is_pressed(down) ? 1 : 0;
  return { _0: x, _1: y };
}
function Milky2018$selene$inputs$$advanced_key_system(_delta) {
  moonbitlang$core$set$$Set$clear$15$(Milky2018$selene$inputs$$just_pressed_keys);
  const _it = moonbitlang$core$set$$Set$iterator$15$(moonbitlang$core$set$$Set$difference$15$(Milky2018$selene$inputs$$pressed_keys, Milky2018$selene$inputs$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$15$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$15$(Milky2018$selene$inputs$$just_pressed_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$15$(Milky2018$selene$inputs$$just_release_keys);
  const _it$2 = moonbitlang$core$set$$Set$iterator$15$(moonbitlang$core$set$$Set$union$15$(moonbitlang$core$set$$Set$difference$15$(Milky2018$selene$inputs$$all_codes, Milky2018$selene$inputs$$pressed_keys), Milky2018$selene$inputs$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$15$(_it$2);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$15$(Milky2018$selene$inputs$$just_release_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$15$(Milky2018$selene$inputs$$last_pressed_keys);
  const _it$3 = moonbitlang$core$set$$Set$iterator$15$(Milky2018$selene$inputs$$pressed_keys);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$15$(_it$3);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$15$(Milky2018$selene$inputs$$last_pressed_keys, _code);
      continue;
    }
  }
}
function Milky2018$selene$inputs$$is_just_pressed(code) {
  return moonbitlang$core$set$$Set$contains$15$(Milky2018$selene$inputs$$just_pressed_keys, code);
}
function Milky2018$selene$backend$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$43$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$71$(rami3l$js$45$ffi$js$$Nullable$unwrap$68$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$44$(rami3l$js$45$ffi$js$$Union5$to0$65$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$8 = { _0: 0, _1: 0 };
  const _bind$9 = moonbitlang$core$ref$$Ref$new$63$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$8, zoom: 1, time_scale: 1, mouse_movement: _bind$9 };
}
function Milky2018$selene$backend$$register_mouse_events(mouse, mouse_movement) {
  Milky2018$selene$backend$$canvas_backend.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$70$(Milky2018$selene$backend$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$72$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$69$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$69$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$69$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$69$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$70$(Milky2018$selene$backend$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$72$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$69$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$70$(Milky2018$selene$backend$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$42$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$72$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$69$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$70$(Milky2018$selene$backend$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$41$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$72$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$15$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$70$(Milky2018$selene$backend$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$41$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$72$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$add$15$(pressed_keys, _c);
      return;
    }
  });
}
function Milky2018$selene$backend$$get_image_element(png) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$21$(Milky2018$selene$backend$$element_cache, png);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
    const _element = _Some._0;
    return _element;
  }
  const element = Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new();
  Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src(element, png);
  moonbitlang$core$builtin$$Map$set$21$(Milky2018$selene$backend$$element_cache, png, element);
  return element;
}
function Milky2018$selene$backend$$preload_img(path) {
  Milky2018$selene$backend$$get_image_element(path);
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
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(context, rami3l$js$45$ffi$js$$Union7$from0$66$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from2$64$(pattern));
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
function Milky2018$selene$backend$$draw_stroke_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(context, rami3l$js$45$ffi$js$$Union3$from0$64$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect(context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_text(text, x, y, font, color, align, baseline) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(context, font);
  let align$2;
  switch (align) {
    case 0: {
      align$2 = "left";
      break;
    }
    case 1: {
      align$2 = "center";
      break;
    }
    default: {
      align$2 = "right";
    }
  }
  Milky2018$selene$backend$$set_text_align(context, align$2);
  let baseline$2;
  switch (baseline) {
    case 0: {
      baseline$2 = "top";
      break;
    }
    case 1: {
      baseline$2 = "center";
      break;
    }
    default: {
      baseline$2 = "bottom";
    }
  }
  Milky2018$selene$backend$$set_text_baseline(context, baseline$2);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$64$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, text, x, y, Option$None$9$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_color_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$64$(color));
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
    moonbitlang$core$builtin$$println$17$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
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
    Milky2018$selene$backend$$realtime_delta.val = delta$2;
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
function Milky2018$selene$system$$timer_system(delta) {
  const _p$17 = [];
  const _p$18 = Milky2018$selene$system$$timers.length;
  let _tmp = 0;
  while (true) {
    const _p$19 = _tmp;
    if (_p$19 < _p$18) {
      const _p$20 = Milky2018$selene$system$$timers[_p$19];
      if (_p$20.pausible) {
        moonbitlang$core$array$$Array$push$28$(_p$17, _p$20);
      }
      _tmp = _p$19 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p$17;
  const _len = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const timer = _arr[_i];
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
  const _p$19 = Milky2018$selene$system$$timers.length;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  while (true) {
    const _p$20 = _tmp$3;
    const _p$21 = _tmp$4;
    if (_p$20 < _p$19) {
      const _p$22 = Milky2018$selene$system$$timers[_p$20];
      if (_p$22.rest > 0) {
        Milky2018$selene$system$$timers[_p$21] = _p$22;
        _tmp$3 = _p$20 + 1 | 0;
        _tmp$4 = _p$21 + 1 | 0;
        continue;
      }
      _tmp$3 = _p$20 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$28$(Milky2018$selene$system$$timers, _p$21);
      return;
    }
  }
}
function Milky2018$selene$system$$realtime_timer_system(_delta) {
  const _p$17 = [];
  const _p$18 = Milky2018$selene$system$$timers.length;
  let _tmp = 0;
  while (true) {
    const _p$19 = _tmp;
    if (_p$19 < _p$18) {
      const _p$20 = Milky2018$selene$system$$timers[_p$19];
      if (!_p$20.pausible) {
        moonbitlang$core$array$$Array$push$28$(_p$17, _p$20);
      }
      _tmp = _p$19 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p$17;
  const _len = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const timer = _arr[_i];
      const realtime_delta = Milky2018$selene$backend$$realtime_delta.val;
      timer.rest = timer.rest - realtime_delta;
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
  const _p$19 = Milky2018$selene$system$$timers.length;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  while (true) {
    const _p$20 = _tmp$3;
    const _p$21 = _tmp$4;
    if (_p$20 < _p$19) {
      const _p$22 = Milky2018$selene$system$$timers[_p$20];
      if (_p$22.rest > 0) {
        Milky2018$selene$system$$timers[_p$21] = _p$22;
        _tmp$3 = _p$20 + 1 | 0;
        _tmp$4 = _p$21 + 1 | 0;
        continue;
      }
      _tmp$3 = _p$20 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$28$(Milky2018$selene$system$$timers, _p$21);
      return;
    }
  }
}
function Milky2018$selene$system$$deferred_event_system(_delta) {
  const _len = Milky2018$selene$system$$deferred_events.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const event = Milky2018$selene$system$$deferred_events[_i];
      event();
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$13$(Milky2018$selene$system$$deferred_events);
}
function Milky2018$selene$system$$defer_event(event) {
  moonbitlang$core$array$$Array$push$13$(Milky2018$selene$system$$deferred_events, event);
}
function Milky2018$selene$system$$App$new() {
  return { canvas_height: 256, canvas_width: 512, zoom: 1, image_smooth: true, fps: 60, systems: [], plugins: [] };
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
  const _p$17 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$5$(self.systems.length)}`;
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = _p$17;
  } else {
    const _p$18 = system_name;
    system_name$2 = _p$18;
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
        moonbitlang$core$array$$Array$push$35$(renders, { _0: system._0, _1: _pri });
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$sort_by_key$62$(renders, (system) => -system._1 | 0);
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
function moonbitlang$core$builtin$$Hash$hash_combine$3$(_x_29, _x_30) {
  moonbitlang$core$builtin$$Hash$hash_combine$60$(_x_29, _x_30);
}
function Milky2018$selene$entity$$iter_entities() {
  return moonbitlang$core$set$$Set$iter$3$(Milky2018$selene$entity$$all_entities);
}
function Milky2018$selene$entity$$Entity$is_alive(e) {
  return moonbitlang$core$set$$Set$contains$3$(Milky2018$selene$entity$$all_entities, e);
}
function Milky2018$selene$entity$$Entity$new() {
  const entity = Milky2018$selene$entity$$entity_generator.val;
  Milky2018$selene$entity$$entity_generator.val = (Milky2018$selene$entity$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$3$(Milky2018$selene$entity$$all_entities, entity);
  return entity;
}
function Milky2018$selene$entity$$Entity$destroy(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$remove$3$(Milky2018$selene$entity$$all_entities, e);
  });
  const _bind$8 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$entity$$parents, e);
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _p$17 = _Some;
    const _arr = _p$17.children;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const c = _arr[_i];
        Milky2018$selene$entity$$Entity$destroy(c);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function Milky2018$selene$entity$$Entity$spawn_child(parent, offset) {
  const child_entity = Milky2018$selene$entity$$Entity$new();
  const p = moonbitlang$core$builtin$$Map$get_or_init$12$(Milky2018$selene$entity$$parents, parent, () => ({ children: [], is_root: !moonbitlang$core$builtin$$Map$contains$11$(Milky2018$selene$entity$$children, parent) }));
  moonbitlang$core$array$$Array$push$3$(p.children, child_entity);
  moonbitlang$core$builtin$$Map$set$11$(Milky2018$selene$entity$$children, child_entity, { parent: parent, offset: moonbitlang$core$option$$Option$unwrap_or_default$46$(offset) });
  return child_entity;
}
function Milky2018$selene$entity$$Entity$get_children(parent) {
  return moonbitlang$core$option$$Option$map_or$47$(moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$entity$$parents, parent), [], (p) => p.children);
}
function Milky2018$selene$entity$$Entity$is_child(entity) {
  return moonbitlang$core$builtin$$Map$contains$11$(Milky2018$selene$entity$$children, entity);
}
function Milky2018$selene$entity$$Entity$set_offset(child, offset) {
  const _p$17 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$entity$$children, child);
  let _tmp;
  if (_p$17 === undefined) {
    _tmp = $panic();
  } else {
    const _p$18 = _p$17;
    _tmp = _p$18;
  }
  _tmp.offset = offset;
}
function Milky2018$selene$entity$$get_roots() {
  const _bind$8 = moonbitlang$core$builtin$$Map$iter$12$(Milky2018$selene$entity$$parents);
  return (_p$17) => _bind$8((_p$18) => _p$18._1.is_root && Milky2018$selene$entity$$Entity$is_alive(_p$18._0) ? _p$17(_p$18._0) : 1);
}
function Milky2018$selene$camera$$camera_system(_delta) {
  const _bind$8 = Milky2018$selene$camera$$camera.attached_entity;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _e = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, _e);
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _pos = _Some$2;
      const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
      const _p$17 = Milky2018$selene$backend$$canvas_backend.viewport_size;
      const _p$18 = { _0: 1 / zoom, _1: 1 / zoom };
      const viewport_size = { _0: _p$17._0 * _p$18._0, _1: _p$17._1 * _p$18._1 };
      const _p$19 = { _0: 0.5, _1: 0.5 };
      const _p$20 = { _0: viewport_size._0 * _p$19._0, _1: viewport_size._1 * _p$19._1 };
      const _p$21 = { _0: _pos._0 - _p$20._0, _1: _pos._1 - _p$20._1 };
      const _p$22 = Milky2018$selene$camera$$camera.offset;
      const target_position = { _0: _p$21._0 + _p$22._0, _1: _p$21._1 + _p$22._1 };
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
  const _p$17 = self.children;
  if (_p$17.length === 0) {
    const half_size = { _0: Milky2018$selene$math$$Vec2D$op_get(self.size, 0) * 0.5, _1: Milky2018$selene$math$$Vec2D$op_get(self.size, 1) * 0.5 };
    const _self = self.children;
    moonbitlang$core$array$$Array$push$22$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    const _p$18 = self.position;
    const _p$19 = { _0: Milky2018$selene$math$$Vec2D$op_get(half_size, 0), _1: 0 };
    moonbitlang$core$array$$Array$push$22$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$18._0 + _p$19._0, _1: _p$18._1 + _p$19._1 }, half_size, self.depth + 1 | 0));
    const _p$20 = self.position;
    const _p$21 = { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(half_size, 1) };
    moonbitlang$core$array$$Array$push$22$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$20._0 + _p$21._0, _1: _p$20._1 + _p$21._1 }, half_size, self.depth + 1 | 0));
    const _p$22 = self.position;
    moonbitlang$core$array$$Array$push$22$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$22._0 + half_size._0, _1: _p$22._1 + half_size._1 }, half_size, self.depth + 1 | 0));
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
  const trees = { val: moonbitlang$core$list$$List$from_array$22$({ buf: _bind$8, start: 0, end: 1 }) };
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
        const _p$17 = _hd.children;
        const _p$18 = _p$17.length;
        let _tmp = 0;
        while (true) {
          const _p$19 = _tmp;
          if (_p$19 < _p$18) {
            const _p$20 = _p$17[_p$19];
            const _p$21 = trees.val;
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$4$(_p$20, _p$21);
            _tmp = _p$19 + 1 | 0;
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
  const _it = moonbitlang$core$builtin$$Map$iterator2$8$(Milky2018$selene$collision$$shapes);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$8$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _e = _x._0;
      const _shape = _x._1;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$ui$$uis, _e);
        if (_bind$9 === -1) {
          const _bind$10 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, _e);
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
            const _p$17 = left_limit;
            const _p$18 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 0);
            left_limit = _p$17 > _p$18 ? _p$18 : _p$17;
            const _p$19 = right_limit;
            const _p$20 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 0) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, 0);
            right_limit = _p$19 > _p$20 ? _p$19 : _p$20;
            const _p$21 = top_limit;
            const _p$22 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 1);
            top_limit = _p$21 > _p$22 ? _p$22 : _p$21;
            const _p$23 = bottom_limit;
            const _p$24 = Milky2018$selene$math$$Vec2D$op_get(_bind$11, 1) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, 1);
            bottom_limit = _p$23 > _p$24 ? _p$23 : _p$24;
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
  moonbitlang$core$array$$Array$push$58$(self.on_just_pressed_callbacks, callback);
}
function Milky2018$selene$collision$$pickable_click_system(_delta) {
  const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
  const _bind$8 = { _0: 1, _1: 1 };
  const _p$17 = Milky2018$selene$inputs$$mouse.pos;
  const _p$18 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$9 = { _0: _p$17._0 * _p$18._0, _1: _p$17._1 * _p$18._1 };
  const box = { position: _bind$9, size: _bind$8 };
  const _it = moonbitlang$core$builtin$$Map$iterator2$1$(Milky2018$selene$ui$$uis);
  while (true) {
    const _bind$10 = moonbitlang$core$builtin$$Iterator2$next$1$(_it);
    if (_bind$10 === undefined) {
      break;
    } else {
      const _Some = _bind$10;
      const _x = _Some;
      const _e = _x._0;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        const _bind$11 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$pickables, _e);
        if (_bind$11 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$11;
          const _pick = _Some$2;
          const _bind$12 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, _e);
          if (_bind$12 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$12;
            const _position = _Some$3;
            const _bind$13 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _e);
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
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        const _bind$11 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$collision$$pickables, _e);
        if (_bind$11 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$11;
          const _pick = _Some$2;
          const _bind$12 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, _e);
          if (_bind$12 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$12;
            const _position = _Some$3;
            const _bind$13 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _e);
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
  const _p$17 = a.position;
  const _p$18 = a.size;
  const _p$19 = 0.5;
  const _p$20 = { _0: _p$18._0 * _p$19, _1: _p$18._1 * _p$19 };
  const a_center = { _0: _p$17._0 + _p$20._0, _1: _p$17._1 + _p$20._1 };
  const _p$21 = b.position;
  const _p$22 = b.size;
  const _p$23 = 0.5;
  const _p$24 = { _0: _p$22._0 * _p$23, _1: _p$22._1 * _p$23 };
  const b_center = { _0: _p$21._0 + _p$24._0, _1: _p$21._1 + _p$24._1 };
  const _p$25 = a.size;
  const _p$26 = 0.5;
  const a_half = { _0: _p$25._0 * _p$26, _1: _p$25._1 * _p$26 };
  const _p$27 = b.size;
  const _p$28 = 0.5;
  const b_half = { _0: _p$27._0 * _p$28, _1: _p$27._1 * _p$28 };
  const delta = { _0: b_center._0 - a_center._0, _1: b_center._1 - a_center._1 };
  const intersect = { _0: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 0)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 0) + Milky2018$selene$math$$Vec2D$op_get(a_half, 0)), _1: -Math.abs(Milky2018$selene$math$$Vec2D$op_get(delta, 1)) + (Milky2018$selene$math$$Vec2D$op_get(b_half, 1) + Milky2018$selene$math$$Vec2D$op_get(a_half, 1)) };
  return Milky2018$selene$math$$Vec2D$op_get(intersect, 0) < Milky2018$selene$math$$Vec2D$op_get(intersect, 1) && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 0) > 0 ? { _0: -Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 } : { _0: Milky2018$selene$math$$Vec2D$op_get(intersect, 0), _1: 0 }) : Milky2018$selene$math$$Vec2D$op_get(intersect, 1) > 0 && Milky2018$selene$math$$Vec2D$op_get(intersect, 0) > 0 ? (Milky2018$selene$math$$Vec2D$op_get(delta, 1) > 0 ? { _0: 0, _1: -Milky2018$selene$math$$Vec2D$op_get(intersect, 1) } : { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(intersect, 1) }) : { _0: 0, _1: 0 };
}
function Milky2018$selene$collision$$add_collision_info(entity, target, direction) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$24$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$8.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$24$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$59$(0));
  }
  moonbitlang$core$array$$Array$push$59$(moonbitlang$core$option$$Option$unwrap$45$(moonbitlang$core$builtin$$Map$get$24$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, speed, axis) {
  const pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  const size = { _0: Milky2018$selene$math$$Vec2D$op_get(object.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.size, 1) };
  return speed >= 0 ? { position: pos, size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + speed) } : { position: Milky2018$selene$math$$Vec2D$update(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + speed), size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - speed) };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$61$(self, layer);
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
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        if (moonbitlang$core$builtin$$op_notequal$3$(_e, entity)) {
          const _bind$9 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _e);
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
            const _bind$10 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, _e);
            if (_bind$10 === undefined) {
              continue;
            } else {
              const _Some$3 = _bind$10;
              const _pos = _Some$3;
              const _bind$11 = moonbitlang$core$builtin$$Map$get$26$(Milky2018$selene$collision$$collision_layers, _e);
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
                    const _p$17 = new_pos;
                    new_pos = { _0: _p$17._0 + movement._0, _1: _p$17._1 + movement._1 };
                    const dir = Milky2018$selene$math$$Vec2D$update({ _0: 0, _1: 0 }, axis, Milky2018$selene$math$$Vec2D$op_get(movement, axis) > 0 ? 1 : -1);
                    Milky2018$selene$collision$$add_collision_info(entity, _e, dir);
                    return { _0: new_pos, _1: movement };
                  }
                  if (Milky2018$selene$math$$Rect$intersects(ray_collision, collision_box)) {
                    let dir = { _0: 0, _1: 0 };
                    if (Milky2018$selene$math$$Vec2D$op_get(new_velocity, axis) > 0) {
                      const _tmp = new_pos;
                      const _p$17 = Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) - Milky2018$selene$math$$Vec2D$op_get(object.size, axis);
                      const _p$18 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                      new_pos = Milky2018$selene$math$$Vec2D$update(_tmp, axis, _p$17 > _p$18 ? _p$17 : _p$18);
                      new_velocity = Milky2018$selene$math$$Vec2D$update(new_velocity, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                      dir = Milky2018$selene$math$$Vec2D$update(dir, axis, 1);
                    } else {
                      if (Milky2018$selene$math$$Vec2D$op_get(new_velocity, axis) < 0) {
                        const _tmp = new_pos;
                        const _p$17 = Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, axis);
                        const _p$18 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                        new_pos = Milky2018$selene$math$$Vec2D$update(_tmp, axis, _p$17 > _p$18 ? _p$18 : _p$17);
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
  const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, e);
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
      const _p$17 = new_y._0;
      moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, e, { _0: _p$17._0 - _offset._0, _1: _p$17._1 - _offset._1 });
      return new_y._1;
    }
  }
}
function Milky2018$selene$collision$$move_without_collide(e, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(_pos, 0) + Milky2018$selene$math$$Vec2D$op_get(velocity, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_pos, 1) + Milky2018$selene$math$$Vec2D$op_get(velocity, 1) };
    moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, e, new_pos);
    return;
  }
}
function Milky2018$selene$collision$$move_system(delta) {
  moonbitlang$core$builtin$$Map$clear$24$(Milky2018$selene$collision$$collision_infos);
  const _it = moonbitlang$core$builtin$$Map$iterator2$23$(Milky2018$selene$velocity$$velocities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$23$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _e = _x._0;
      const _vel = _x._1;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        _L: {
          _L$2: {
            const _bind$9 = moonbitlang$core$builtin$$Map$get$25$(Milky2018$selene$collision$$colliders, _e);
            if (_bind$9 === undefined) {
              break _L$2;
            } else {
              const _Some$2 = _bind$9;
              const _collide = _Some$2;
              if (_collide.active) {
                const new_vel = Milky2018$selene$collision$$move_with_collide(_e, _collide, { _0: _vel._0 * delta, _1: _vel._1 * delta });
                moonbitlang$core$builtin$$Map$set$23$(Milky2018$selene$collision$$real_velocities, _e, { _0: new_vel._0 / delta, _1: new_vel._1 / delta });
              } else {
                break _L$2;
              }
            }
            break _L;
          }
          Milky2018$selene$collision$$move_without_collide(_e, { _0: _vel._0 * delta, _1: _vel._1 * delta });
          moonbitlang$core$builtin$$Map$set$23$(Milky2018$selene$collision$$real_velocities, _e, _vel);
        }
      } else {
        continue;
      }
      continue;
    }
  }
}
function Milky2018$selene$collision$$area_collide_system(_delta) {
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
  const _bind$8 = Milky2018$selene$entity$$iter_entities();
  _bind$8((e) => {
    const _bind$9 = moonbitlang$core$builtin$$Map$get$27$(Milky2018$selene$collision$$areas, e);
    if (_bind$9 === undefined) {
      return 1;
    } else {
      const _Some = _bind$9;
      const _area = _Some;
      const _bind$10 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, e);
      if (_bind$10 === undefined) {
        $panic();
      } else {
        const _Some$2 = _bind$10;
        const _position = _Some$2;
        const _bind$11 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, e);
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
              if (Milky2018$selene$entity$$Entity$is_alive(_entity)) {
                const _bind$15 = moonbitlang$core$builtin$$Map$get$26$(Milky2018$selene$collision$$collision_layers, _entity);
                if (_bind$15 === undefined) {
                  continue;
                } else {
                  const _Some$5 = _bind$15;
                  const _other_layer = _Some$5;
                  const _bind$16 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _entity);
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
                    const _bind$17 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, _entity);
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
function Milky2018$selene$inherit$$adjust_children(entity) {
  const _arr = Milky2018$selene$entity$$Entity$get_children(entity);
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const c = _arr[_i];
        if (Milky2018$selene$entity$$Entity$is_alive(c)) {
          const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, entity);
          if (_bind$8 === undefined) {
            break _L;
          } else {
            const _Some = _bind$8;
            const _parent_position = _Some;
            const _p$17 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$entity$$children, c);
            let _tmp$2;
            if (_p$17 === undefined) {
              _tmp$2 = $panic();
            } else {
              const _p$18 = _p$17;
              _tmp$2 = _p$18;
            }
            const offset = _tmp$2.offset;
            moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, c, { _0: _parent_position._0 + offset._0, _1: _parent_position._1 + offset._1 });
            Milky2018$selene$inherit$$adjust_children(c);
          }
        } else {
          break _L;
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
function Milky2018$selene$inherit$$inherit_position_system(_delta) {
  const roots = Milky2018$selene$entity$$get_roots();
  roots((p) => {
    Milky2018$selene$inherit$$adjust_children(p);
    return 1;
  });
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
  const frame = moonbitlang$core$array$$Array$at$36$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
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
  const _bind$8 = color_rect.stroke_color;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _stroke_color = _Some;
    Milky2018$selene$backend$$draw_stroke_rect(Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 0), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 1), _stroke_color);
    return;
  }
}
function Milky2018$selene$sprite$$render_picture(picture, pos) {
  Milky2018$selene$backend$$draw_picture(picture.tile_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(picture.size, 0), Milky2018$selene$math$$Vec2D$op_get(picture.size, 1), picture.transform, picture.repeat);
}
function Milky2018$selene$sprite$$render_text(text, position) {
  Milky2018$selene$backend$$draw_text(text.content, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), text.font, text.color, text.align, text.baseline);
}
function Milky2018$selene$sprite$$render_sprite_system(delta) {
  const _p$17 = moonbitlang$core$builtin$$Map$to_array$9$(Milky2018$selene$sprite$$sprites);
  const _p$18 = [];
  const _p$19 = _p$17.length;
  let _tmp = 0;
  while (true) {
    const _p$20 = _tmp;
    if (_p$20 < _p$19) {
      const _p$21 = _p$17[_p$20];
      if (Milky2018$selene$entity$$Entity$is_alive(_p$21._0)) {
        moonbitlang$core$array$$Array$push$37$(_p$18, _p$21);
      }
      _tmp = _p$20 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$18;
  moonbitlang$core$array$$Array$sort_by$37$(sprites, (sprite1, sprite2) => {
    if (sprite1._1.zindex < sprite2._1.zindex) {
      return -1;
    } else {
      if (sprite1._1.zindex > sprite2._1.zindex) {
        return 1;
      } else {
        const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, sprite1._0);
        if (_bind$8 === undefined) {
          return 0;
        } else {
          const _Some = _bind$8;
          const _pos1 = _Some;
          const _bind$9 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, sprite2._0);
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
        const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, e);
        if (_bind$8 === undefined) {
          break _L;
        } else {
          const _Some = _bind$8;
          const _pos = _Some;
          const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$ui$$uis, e);
          let pos;
          if (_bind$9 === -1) {
            const _p$20 = Milky2018$selene$camera$$camera.position;
            pos = { _0: _pos._0 - _p$20._0, _1: _pos._1 - _p$20._1 };
          } else {
            pos = _pos;
          }
          const _bind$10 = sprite$2.sprite_type;
          switch (_bind$10.$tag) {
            case 0: {
              const _Picture = _bind$10;
              const _picture = _Picture._0;
              if (sprite$2.visible) {
                const _p$20 = sprite$2.offset;
                Milky2018$selene$sprite$$render_picture(_picture, { _0: pos._0 + _p$20._0, _1: pos._1 + _p$20._1 });
              }
              break;
            }
            case 1: {
              const _Animation = _bind$10;
              const _anime = _Animation._0;
              const _frame = _Animation._1;
              const _p$20 = sprite$2.offset;
              const _tmp$3 = { _0: pos._0 + _p$20._0, _1: pos._1 + _p$20._1 };
              const new_frame = Milky2018$selene$sprite$$render_animation(_anime, _frame, _tmp$3, sprite$2.visible, delta);
              _Animation._1 = new_frame;
              break;
            }
            case 2: {
              const _Text = _bind$10;
              const _text = _Text._0;
              if (sprite$2.visible) {
                const _p$21 = sprite$2.offset;
                Milky2018$selene$sprite$$render_text(_text, { _0: pos._0 + _p$21._0, _1: pos._1 + _p$21._1 });
              }
              break;
            }
            default: {
              const _ColorRect = _bind$10;
              const _color_rect = _ColorRect._0;
              if (sprite$2.visible) {
                const _p$21 = sprite$2.offset;
                Milky2018$selene$sprite$$render_color_rect(_color_rect, { _0: pos._0 + _p$21._0, _1: pos._1 + _p$21._1 });
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
function Milky2018$selene$sprite$$Text$new$46$inner(content, color, font, baseline, align) {
  return { content: content, color: color, font: font, baseline: baseline, align: align };
}
function Milky2018$selene$sprite$$Text$new(content, color$46$opt, font$46$opt, baseline$46$opt, align$46$opt) {
  let color;
  if (color$46$opt === undefined) {
    color = "white";
  } else {
    const _Some = color$46$opt;
    color = _Some;
  }
  let font;
  if (font$46$opt === undefined) {
    font = "16px Arial";
  } else {
    const _Some = font$46$opt;
    font = _Some;
  }
  let baseline;
  if (baseline$46$opt === undefined) {
    baseline = 0;
  } else {
    const _Some = baseline$46$opt;
    baseline = _Some;
  }
  let align;
  if (align$46$opt === undefined) {
    align = 0;
  } else {
    const _Some = align$46$opt;
    align = _Some;
  }
  return Milky2018$selene$sprite$$Text$new$46$inner(content, color, font, baseline, align);
}
function Milky2018$selene$sprite$$ColorRect$new(size, color, stroke_color) {
  return { size: size, color: color, stroke_color: stroke_color };
}
function Milky2018$selene$sprite$$generate_animation() {
  const id = Milky2018$selene$sprite$$animation_generator.val;
  Milky2018$selene$sprite$$animation_generator.val = Milky2018$selene$sprite$$animation_generator.val + 1 | 0;
  return id;
}
function Milky2018$selene$sprite$$Animation$new$46$inner(frames, loop_, fps, transform) {
  const max_frame = frames.length;
  if (max_frame === 0) {
    moonbitlang$core$abort$$abort$29$("Animation must have at least one frame");
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
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < frame_count) {
      const x = Milky2018$selene$math$$Vec2D$op_get(offset, 0) + (i + 0) * (width + space_x);
      moonbitlang$core$array$$Array$push$36$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: Milky2018$selene$math$$Vec2D$update(offset, 0, x) });
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return frames;
}
function Milky2018$selene$sprite$$play_animation$46$inner(entity, animation, from_start, loop_, rate, transform) {
  _L: {
    const _bind$8 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$sprite$$sprites, entity);
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
        const _p$17 = animation.loop_;
        const loop_$2 = loop_ === -1 ? _p$17 : loop_;
        const rate$2 = moonbitlang$core$option$$Option$unwrap_or$16$(rate, animation.fps);
        const _p$18 = animation.transform;
        let transform$2;
        if (transform === undefined) {
          transform$2 = _p$18;
        } else {
          const _p$19 = transform;
          transform$2 = _p$19;
        }
        const frame = !from_start && animation.id === _current_anime.id ? _current_frame : 0;
        const new_anime = { frames: animation.frames, transform: transform$2, loop_: loop_$2, fps: rate$2, id: animation.id };
        moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, entity, { sprite_type: new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(new_anime, frame), zindex: _zindex, visible: _visible, offset: _offset });
        return;
      } else {
        break _L;
      }
    }
  }
  $panic();
}
function Milky2018$selene$style$$get_zindex(entity) {
  return moonbitlang$core$option$$Option$map_or$48$(moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$sprite$$sprites, entity), 100, (s) => s.zindex);
}
function Milky2018$selene$style$$Style$new$46$inner(size_plan, flex, h_padding, v_padding, h_offset, v_offset) {
  return { size_plan: size_plan, flex: flex, h_padding: h_padding, v_padding: v_padding, h_offset: h_offset, v_offset: v_offset };
}
function Milky2018$selene$style$$add_widget$46$inner(parent, sprite, on_just_pressed, shape, size_plan, flex, h_padding, v_padding, h_offset, v_offset) {
  const child = Milky2018$selene$entity$$Entity$spawn_child(parent, undefined);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$ui$$uis, child, Milky2018$selene$ui$$Ui$new());
  const style = Milky2018$selene$style$$Style$new$46$inner(size_plan, flex, h_padding, v_padding, h_offset, v_offset);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$style$$styles, child, style);
  if (sprite === undefined) {
  } else {
    const _Some = sprite;
    const _sprite_maker = _Some;
    const zindex = Milky2018$selene$style$$get_zindex(parent) + 1 | 0;
    const sprite$2 = _sprite_maker(zindex);
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, child, sprite$2);
  }
  if (shape === undefined) {
  } else {
    const _Some = shape;
    const _shape = _Some;
    moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$shapes, child, _shape);
  }
  if (on_just_pressed === undefined) {
  } else {
    const _Some = on_just_pressed;
    const _button_cb = _Some;
    const pickable = Milky2018$selene$collision$$Pickable$new();
    Milky2018$selene$collision$$Pickable$on_just_pressed(pickable, _button_cb);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$collision$$pickables, child, pickable);
  }
  return child;
}
function Milky2018$selene$style$$add_widget(parent, sprite, on_just_pressed, shape, size_plan$46$opt, flex$46$opt, h_padding$46$opt, v_padding$46$opt, h_offset$46$opt, v_offset$46$opt) {
  let size_plan;
  if (size_plan$46$opt === undefined) {
    size_plan = $64$Milky2018$47$selene$47$style$46$SizePlan$FromSprite;
  } else {
    const _Some = size_plan$46$opt;
    size_plan = _Some;
  }
  let flex;
  if (flex$46$opt === undefined) {
    flex = 0;
  } else {
    const _Some = flex$46$opt;
    flex = _Some;
  }
  let h_padding;
  if (h_padding$46$opt.$tag === 1) {
    const _Some = h_padding$46$opt;
    h_padding = _Some._0;
  } else {
    h_padding = 0;
  }
  let v_padding;
  if (v_padding$46$opt.$tag === 1) {
    const _Some = v_padding$46$opt;
    v_padding = _Some._0;
  } else {
    v_padding = 0;
  }
  let h_offset;
  if (h_offset$46$opt.$tag === 1) {
    const _Some = h_offset$46$opt;
    h_offset = _Some._0;
  } else {
    h_offset = 0;
  }
  let v_offset;
  if (v_offset$46$opt.$tag === 1) {
    const _Some = v_offset$46$opt;
    v_offset = _Some._0;
  } else {
    v_offset = 0;
  }
  return Milky2018$selene$style$$add_widget$46$inner(parent, sprite, on_just_pressed, shape, size_plan, flex, h_padding, v_padding, h_offset, v_offset);
}
function Milky2018$selene$style$$arrange(entity, offset) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$style$$styles, entity);
  if (_bind$8 === undefined) {
    return { _0: 0, _1: 0 };
  } else {
    const _Some = _bind$8;
    const _style = _Some;
    if (Milky2018$selene$entity$$Entity$is_child(entity)) {
      const _p$17 = { _0: _style.h_offset, _1: _style.v_offset };
      Milky2018$selene$entity$$Entity$set_offset(entity, { _0: offset._0 + _p$17._0, _1: offset._1 + _p$17._1 });
    }
    const children = Milky2018$selene$entity$$Entity$get_children(entity);
    let cursor = { _0: _style.h_padding, _1: _style.v_padding };
    let max_width = 0;
    let max_height = 0;
    const _len = children.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const c = children[_i];
        const size = Milky2018$selene$style$$arrange(c, cursor);
        const _bind$9 = _style.flex;
        let _tmp$2;
        switch (_bind$9) {
          case 1: {
            _tmp$2 = Milky2018$selene$math$$Vec2D$update(cursor, 0, Milky2018$selene$math$$Vec2D$op_get(cursor, 0) + Milky2018$selene$math$$Vec2D$op_get(size, 0) + _style.h_padding);
            break;
          }
          case 0: {
            _tmp$2 = cursor;
            break;
          }
          default: {
            _tmp$2 = Milky2018$selene$math$$Vec2D$update(cursor, 1, Milky2018$selene$math$$Vec2D$op_get(cursor, 1) + Milky2018$selene$math$$Vec2D$op_get(size, 1) + _style.v_padding);
          }
        }
        cursor = _tmp$2;
        const _p$17 = max_width;
        const _p$18 = Milky2018$selene$math$$Vec2D$op_get(size, 0);
        max_width = _p$17 > _p$18 ? _p$17 : _p$18;
        const _p$19 = max_height;
        const _p$20 = Milky2018$selene$math$$Vec2D$op_get(size, 1);
        max_height = _p$19 > _p$20 ? _p$19 : _p$20;
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$9 = _style.size_plan;
    switch (_bind$9.$tag) {
      case 1: {
        const _bind$10 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$sprite$$sprites, entity);
        if (_bind$10 === undefined) {
          return $panic();
        } else {
          const _Some$2 = _bind$10;
          const _sprite = _Some$2;
          const _bind$11 = _sprite.sprite_type;
          switch (_bind$11.$tag) {
            case 0: {
              const _Picture = _bind$11;
              const _picture = _Picture._0;
              return Milky2018$selene$math$$Transform$apply_to_vec2d(_picture.transform, _picture.size);
            }
            case 2: {
              return { _0: 48, _1: 24 };
            }
            case 1: {
              const _Animation = _bind$11;
              const _anime = _Animation._0;
              return Milky2018$selene$math$$Transform$apply_to_vec2d(_anime.transform, moonbitlang$core$array$$Array$at$36$(_anime.frames, 0).size);
            }
            default: {
              const _ColorRect = _bind$11;
              const _rect = _ColorRect._0;
              return _rect.size;
            }
          }
        }
      }
      case 0: {
        const _Sized = _bind$9;
        return _Sized._0;
      }
      case 2: {
        return { _0: max_width, _1: max_height };
      }
      default: {
        const _bind$11 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, entity);
        if (_bind$11 === undefined) {
          return $panic();
        } else {
          const _Some$2 = _bind$11;
          const _shape = _Some$2;
          const _Rect = _shape;
          return _Rect._0;
        }
      }
    }
  }
}
function Milky2018$selene$style$$style_system(_delta) {
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$10$;
  const _bind$8 = Milky2018$selene$entity$$get_roots();
  _bind$8((e) => {
    if (Milky2018$selene$entity$$Entity$is_alive(e)) {
      Milky2018$selene$style$$arrange(e, { _0: 0, _1: 0 });
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
function Milky2018$selene$plugins$$default_plugin(app) {
  const _self = app.systems;
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$inputs$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$inputs$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: Milky2018$selene$plugins$$default_plugin$46$constr$47$2838, _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$system$$realtime_timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Realtime Timer System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$inherit$$inherit_position_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Inherit Position System" });
  moonbitlang$core$array$$Array$push$55$(_self, { _0: Milky2018$selene$style$$style_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Style System" });
}
function moonbitlang$core$builtin$$Eq$equal$31$(_x_340, _x_341) {
  if (_x_340 === 0) {
    if (_x_341 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_341 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$30$(_x_332, _x_333) {
  switch (_x_332) {
    case 0: {
      if (_x_333 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_333 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_333 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_333 === 3) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_333 === 4) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function username$meowbloom$src$$cat_mark_game_started() {
  username$meowbloom$src$$game_started.val = true;
}
function username$meowbloom$src$$on_start_pressed(_button) {
  if (username$meowbloom$src$$game_started.val) {
    return undefined;
  }
  username$meowbloom$src$$cat_mark_game_started();
  const _bind$8 = username$meowbloom$src$$start_panel.val;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _panel = _Some;
    Milky2018$selene$entity$$Entity$destroy(_panel);
    username$meowbloom$src$$start_panel.val = undefined;
    return;
  }
}
function username$meowbloom$src$$spawn_start_ui(_delta) {
  _L: {
    _L$2: {
      const _bind$8 = username$meowbloom$src$$start_panel.val;
      if (_bind$8 === undefined) {
        if (username$meowbloom$src$$game_started.val) {
          break _L$2;
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    return undefined;
  }
  const size = Milky2018$selene$backend$$canvas_backend.viewport_size;
  const overlay = Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: Milky2018$selene$math$$Vec2D$op_get(size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(size, 1) }, "rgba(0, 0, 0, 0.45)", undefined), zindex, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
  username$meowbloom$src$$start_panel.val = overlay;
  const button = Milky2018$selene$style$$add_widget(overlay, (zindex) => Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 160, _1: 56 }, "#F4A460", username$meowbloom$src$$spawn_start_ui$46$constr$47$2865), zindex, undefined), username$meowbloom$src$$on_start_pressed, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 160, _1: 56 }, { _0: 0, _1: 0 }), undefined, undefined, Option$None$0$, Option$None$0$, new Option$Some$0$(Milky2018$selene$math$$Vec2D$op_get(size, 0) / 2 - 80), new Option$Some$0$(Milky2018$selene$math$$Vec2D$op_get(size, 1) / 2 - 28));
  Milky2018$selene$style$$add_widget(button, (zindex) => Milky2018$selene$sprite$$Sprite$from_text$46$inner(Milky2018$selene$sprite$$Text$new("start game", username$meowbloom$src$$spawn_start_ui$46$constr$47$2866, username$meowbloom$src$$spawn_start_ui$46$constr$47$2867, undefined, undefined), zindex, { _0: 32, _1: 14 }), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
}
function username$meowbloom$src$$cat_get_ground_position() {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity);
  if (_bind$8 === undefined) {
    return undefined;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const _p$17 = { _0: 8, _1: 16 };
    return { _0: _pos._0 + _p$17._0, _1: _pos._1 + _p$17._1 };
  }
}
function username$meowbloom$src$$default_inventory() {
  const slots = [];
  moonbitlang$core$array$$Array$push$32$(slots, username$meowbloom$src$$default_inventory$46$constr$47$2880);
  moonbitlang$core$array$$Array$push$32$(slots, username$meowbloom$src$$default_inventory$46$constr$47$2881);
  let _tmp = 2;
  while (true) {
    const _ = _tmp;
    if (_ < 8) {
      moonbitlang$core$array$$Array$push$32$(slots, InventoryItem$Empty);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return slots;
}
function username$meowbloom$src$$inventory_get_selected_seed() {
  const idx = username$meowbloom$src$$selected_slot.val;
  if (idx < 0 || idx >= username$meowbloom$src$$inventory_slots.length) {
    return undefined;
  }
  const _bind$8 = moonbitlang$core$array$$Array$at$32$(username$meowbloom$src$$inventory_slots, idx);
  if (_bind$8.$tag === 1) {
    const _Seed = _bind$8;
    const _plant_type = _Seed._0;
    return _plant_type;
  } else {
    return undefined;
  }
}
function username$meowbloom$src$$stage_anim(col, row) {
  return Milky2018$selene$sprite$$Animation$single_frame("assets/spritesheet.png", { _0: 16, _1: 16 }, undefined, { _0: (col + 0) * 16, _1: (row + 0) * 16 });
}
function username$meowbloom$src$$plant_stage_animation(plant_type, stage) {
  if (plant_type === 0) {
    switch (stage) {
      case 0: {
        return username$meowbloom$src$$rice_seed_animation;
      }
      case 1: {
        return username$meowbloom$src$$rice_sprout_animation;
      }
      case 2: {
        return username$meowbloom$src$$rice_growing_animation;
      }
      case 3: {
        return username$meowbloom$src$$rice_mature_animation;
      }
      default: {
        return username$meowbloom$src$$rice_fruit_animation;
      }
    }
  } else {
    switch (stage) {
      case 0: {
        return username$meowbloom$src$$tomato_seed_animation;
      }
      case 1: {
        return username$meowbloom$src$$tomato_sprout_animation;
      }
      case 2: {
        return username$meowbloom$src$$tomato_growing_animation;
      }
      case 3: {
        return username$meowbloom$src$$tomato_mature_animation;
      }
      default: {
        return username$meowbloom$src$$tomato_fruit_animation;
      }
    }
  }
}
function username$meowbloom$src$$tile_key(tile) {
  return `${moonbitlang$core$int$$Int$to_string$46$inner(tile._0, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(tile._1, 10)}`;
}
function username$meowbloom$src$$world_to_tile(world_pos) {
  const tile_x = moonbitlang$core$double$$Double$to_int(Milky2018$selene$math$$Vec2D$op_get(world_pos, 0) / 16);
  const tile_y = moonbitlang$core$double$$Double$to_int(Milky2018$selene$math$$Vec2D$op_get(world_pos, 1) / 16);
  return { _0: tile_x, _1: tile_y };
}
function username$meowbloom$src$$plant_try_plant(world_pos, plant_type) {
  const tile = username$meowbloom$src$$world_to_tile(world_pos);
  const key = username$meowbloom$src$$tile_key(tile);
  if (moonbitlang$core$builtin$$Map$contains$14$(username$meowbloom$src$$plants, key)) {
    return false;
  }
  const plant = Milky2018$selene$entity$$Entity$new();
  const sprite = Milky2018$selene$sprite$$Sprite$from_animation(username$meowbloom$src$$plant_stage_animation(plant_type, 0), 5, undefined);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, plant, sprite);
  moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, plant, { _0: (tile._0 + 0) * 16, _1: (tile._1 + 0) * 16 });
  moonbitlang$core$builtin$$Map$set$14$(username$meowbloom$src$$plants, key, { plant_type: plant_type, stage: 0, stage_elapsed: 0, entity: plant });
  return true;
}
function username$meowbloom$src$$planting_input_system(_delta) {
  if (!username$meowbloom$src$$game_started.val) {
    return undefined;
  }
  if (!Milky2018$selene$inputs$$just_pressed_mouse.left_button) {
    return undefined;
  }
  const _bind$8 = username$meowbloom$src$$inventory_get_selected_seed();
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _plant_type = _Some;
    const _bind$9 = username$meowbloom$src$$cat_get_ground_position();
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _pos = _Some$2;
      username$meowbloom$src$$plant_try_plant(_pos, _plant_type);
      return;
    }
  }
}
function username$meowbloom$src$$next_stage(stage) {
  switch (stage) {
    case 0: {
      return username$meowbloom$src$$next_stage$46$constr$47$2913;
    }
    case 1: {
      return username$meowbloom$src$$next_stage$46$constr$47$2914;
    }
    case 2: {
      return username$meowbloom$src$$next_stage$46$constr$47$2915;
    }
    case 3: {
      return username$meowbloom$src$$next_stage$46$constr$47$2916;
    }
    default: {
      return undefined;
    }
  }
}
function username$meowbloom$src$$stage_duration(plant_type, stage) {
  if (plant_type === 0) {
    switch (stage) {
      case 0: {
        return username$meowbloom$src$$stage_duration$46$constr$47$2918;
      }
      case 1: {
        return username$meowbloom$src$$stage_duration$46$constr$47$2919;
      }
      case 2: {
        return username$meowbloom$src$$stage_duration$46$constr$47$2920;
      }
      case 3: {
        return Option$None$0$;
      }
      default: {
        return Option$None$0$;
      }
    }
  } else {
    switch (stage) {
      case 0: {
        return username$meowbloom$src$$stage_duration$46$constr$47$2921;
      }
      case 1: {
        return username$meowbloom$src$$stage_duration$46$constr$47$2922;
      }
      case 2: {
        return username$meowbloom$src$$stage_duration$46$constr$47$2923;
      }
      case 3: {
        return Option$None$0$;
      }
      default: {
        return Option$None$0$;
      }
    }
  }
}
function username$meowbloom$src$$plant_growth_system(delta) {
  const entries = moonbitlang$core$builtin$$Map$to_array$14$(username$meowbloom$src$$plants);
  const _len = entries.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const entry = entries[_i];
        const key = entry._0;
        const state = entry._1;
        const _bind$8 = state.stage;
        if (_bind$8 === 4) {
          const elapsed = state.stage_elapsed + delta;
          if (elapsed >= 0.5) {
            moonbitlang$core$builtin$$Map$remove$9$(Milky2018$selene$sprite$$sprites, state.entity);
            moonbitlang$core$builtin$$Map$remove$0$(Milky2018$selene$position$$positions, state.entity);
            Milky2018$selene$entity$$Entity$destroy(state.entity);
            moonbitlang$core$builtin$$Map$remove$14$(username$meowbloom$src$$plants, key);
          } else {
            moonbitlang$core$builtin$$Map$set$14$(username$meowbloom$src$$plants, key, { plant_type: state.plant_type, stage: state.stage, stage_elapsed: elapsed, entity: state.entity });
          }
          break _L;
        }
        const _bind$9 = username$meowbloom$src$$stage_duration(state.plant_type, state.stage);
        if (_bind$9.$tag === 1) {
          const _Some = _bind$9;
          const _duration = _Some._0;
          const _bind$10 = username$meowbloom$src$$next_stage(state.stage);
          if (_bind$10 === undefined) {
          } else {
            const _Some$2 = _bind$10;
            const _next_stage = _Some$2;
            const elapsed = state.stage_elapsed + delta;
            if (elapsed >= _duration) {
              const _bind$11 = state.plant_type;
              const _bind$12 = state.entity;
              const updated_state = { plant_type: _bind$11, stage: _next_stage, stage_elapsed: 0, entity: _bind$12 };
              const sprite = Milky2018$selene$sprite$$Sprite$from_animation(username$meowbloom$src$$plant_stage_animation(_bind$11, _next_stage), 5, undefined);
              moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, _bind$12, sprite);
              moonbitlang$core$builtin$$Map$set$14$(username$meowbloom$src$$plants, key, updated_state);
            } else {
              moonbitlang$core$builtin$$Map$set$14$(username$meowbloom$src$$plants, key, { plant_type: state.plant_type, stage: state.stage, stage_elapsed: elapsed, entity: state.entity });
            }
          }
        } else {
          moonbitlang$core$builtin$$Map$set$14$(username$meowbloom$src$$plants, key, { plant_type: state.plant_type, stage: state.stage, stage_elapsed: 0, entity: state.entity });
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
function username$meowbloom$src$$generate_quest_by_index(idx) {
  const mod = idx % 3 | 0;
  return mod === 0 ? username$meowbloom$src$$generate_quest_by_index$46$record$47$2949 : mod === 1 ? username$meowbloom$src$$generate_quest_by_index$46$record$47$2951 : { target_type: undefined, target_amount: 10, progress: 0, reward: 20 };
}
function username$meowbloom$src$$quest_on_harvest(plant_type) {
  const _bind$8 = username$meowbloom$src$$current_quest.val;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _q = _Some;
    const _bind$9 = _q.target_type;
    if (_bind$9 === undefined) {
    } else {
      const _Some$2 = _bind$9;
      const _t = _Some$2;
      if (moonbitlang$core$builtin$$op_notequal$31$(_t, plant_type)) {
        return undefined;
      }
    }
    const new_progress = _q.progress + 1 | 0;
    if (new_progress >= _q.target_amount) {
      username$meowbloom$src$$coins.val = username$meowbloom$src$$coins.val + _q.reward | 0;
      username$meowbloom$src$$quest_id_counter.val = username$meowbloom$src$$quest_id_counter.val + 1 | 0;
      username$meowbloom$src$$current_quest.val = username$meowbloom$src$$generate_quest_by_index(username$meowbloom$src$$quest_id_counter.val);
    } else {
      username$meowbloom$src$$current_quest.val = { target_type: _q.target_type, target_amount: _q.target_amount, progress: new_progress, reward: _q.reward };
    }
    username$meowbloom$src$$hud_dirty.val = true;
    return;
  }
}
function username$meowbloom$src$$record_harvest(plant_type) {
  if (plant_type === 0) {
    username$meowbloom$src$$rice_harvest_count.val = username$meowbloom$src$$rice_harvest_count.val + 1 | 0;
  } else {
    username$meowbloom$src$$tomato_harvest_count.val = username$meowbloom$src$$tomato_harvest_count.val + 1 | 0;
  }
  username$meowbloom$src$$quest_on_harvest(plant_type);
  username$meowbloom$src$$hud_dirty.val = true;
}
function username$meowbloom$src$$plant_try_harvest(world_pos) {
  const tile = username$meowbloom$src$$world_to_tile(world_pos);
  const key = username$meowbloom$src$$tile_key(tile);
  const _bind$8 = moonbitlang$core$builtin$$Map$get$14$(username$meowbloom$src$$plants, key);
  if (_bind$8 === undefined) {
    return undefined;
  } else {
    const _Some = _bind$8;
    const _state = _Some;
    if (moonbitlang$core$builtin$$op_notequal$30$(_state.stage, 3)) {
      return undefined;
    }
    const _bind$9 = _state.plant_type;
    const _bind$10 = _state.entity;
    const updated_state = { plant_type: _bind$9, stage: 4, stage_elapsed: 0, entity: _bind$10 };
    const sprite = Milky2018$selene$sprite$$Sprite$from_animation(username$meowbloom$src$$plant_stage_animation(_bind$9, 4), 5, undefined);
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, _bind$10, sprite);
    moonbitlang$core$builtin$$Map$set$14$(username$meowbloom$src$$plants, key, updated_state);
    username$meowbloom$src$$record_harvest(_state.plant_type);
    return _state.plant_type;
  }
}
function username$meowbloom$src$$harvest_text_sprite(content, zindex) {
  const text = Milky2018$selene$sprite$$Text$new(content, username$meowbloom$src$$harvest_text_sprite$46$constr$47$2973, username$meowbloom$src$$harvest_text_sprite$46$constr$47$2974, undefined, undefined);
  return Milky2018$selene$sprite$$Sprite$from_text(text, zindex, undefined);
}
function username$meowbloom$src$$ensure_hud() {
  const _bind$8 = username$meowbloom$src$$hud_panel.val;
  if (_bind$8 === undefined) {
  } else {
    return undefined;
  }
  const panel = Milky2018$selene$style$$add_widget$46$inner(Milky2018$selene$style$$screen_root, undefined, undefined, undefined, $64$Milky2018$47$selene$47$style$46$SizePlan$FromChildren, 2, 0, 4, 16, 16);
  username$meowbloom$src$$hud_panel.val = panel;
  const rice_entity = Milky2018$selene$style$$add_widget(panel, (zindex) => username$meowbloom$src$$harvest_text_sprite("", zindex), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
  username$meowbloom$src$$rice_label_entity.val = rice_entity;
  const tomato_entity = Milky2018$selene$style$$add_widget(panel, (zindex) => username$meowbloom$src$$harvest_text_sprite("", zindex), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
  username$meowbloom$src$$tomato_label_entity.val = tomato_entity;
  const coin_entity = Milky2018$selene$style$$add_widget(panel, (zindex) => username$meowbloom$src$$harvest_text_sprite("", zindex), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
  username$meowbloom$src$$coin_label_entity.val = coin_entity;
  const quest_entity = Milky2018$selene$style$$add_widget(panel, (zindex) => username$meowbloom$src$$harvest_text_sprite("", zindex), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
  username$meowbloom$src$$quest_label_entity.val = quest_entity;
  username$meowbloom$src$$hud_dirty.val = true;
}
function username$meowbloom$src$$ensure_quest() {
  const _bind$8 = username$meowbloom$src$$current_quest.val;
  if (_bind$8 === undefined) {
  } else {
    return undefined;
  }
  username$meowbloom$src$$current_quest.val = username$meowbloom$src$$generate_quest_by_index(username$meowbloom$src$$quest_id_counter.val);
  username$meowbloom$src$$hud_dirty.val = true;
}
function username$meowbloom$src$$quest_text() {
  const _bind$8 = username$meowbloom$src$$current_quest.val;
  if (_bind$8 === undefined) {
    return "任务：无";
  } else {
    const _Some = _bind$8;
    const _q = _Some;
    const _bind$9 = _q.target_type;
    let target;
    if (_bind$9 === undefined) {
      target = "收获任意作物";
    } else {
      const _Some$2 = _bind$9;
      const _t = _Some$2;
      if (_t === 0) {
        target = "收获稻米";
      } else {
        target = "收获番茄";
      }
    }
    const prog = `${moonbitlang$core$int$$Int$to_string$46$inner(_q.progress, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(_q.target_amount, 10)}`;
    const reward = moonbitlang$core$int$$Int$to_string$46$inner(_q.reward, 10);
    return `任务：${target} ${prog} 奖励+${reward}`;
  }
}
function username$meowbloom$src$$update_hud_text() {
  username$meowbloom$src$$hud_dirty.val = false;
  const _bind$8 = username$meowbloom$src$$hud_panel.val;
  if (_bind$8 === undefined) {
    return undefined;
  }
  const _bind$9 = username$meowbloom$src$$rice_label_entity.val;
  if (_bind$9 === undefined) {
  } else {
    const _Some = _bind$9;
    const _entity = _Some;
    const content = `稻米：${moonbitlang$core$int$$Int$to_string$46$inner(username$meowbloom$src$$rice_harvest_count.val, 10)}`;
    const sprite = username$meowbloom$src$$harvest_text_sprite(content, 106);
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, _entity, sprite);
  }
  const _bind$10 = username$meowbloom$src$$tomato_label_entity.val;
  if (_bind$10 === undefined) {
  } else {
    const _Some = _bind$10;
    const _entity = _Some;
    const content = `番茄：${moonbitlang$core$int$$Int$to_string$46$inner(username$meowbloom$src$$tomato_harvest_count.val, 10)}`;
    const sprite = username$meowbloom$src$$harvest_text_sprite(content, 106);
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, _entity, sprite);
  }
  const _bind$11 = username$meowbloom$src$$coin_label_entity.val;
  if (_bind$11 === undefined) {
  } else {
    const _Some = _bind$11;
    const _entity = _Some;
    const content = `金币：${moonbitlang$core$int$$Int$to_string$46$inner(username$meowbloom$src$$coins.val, 10)}`;
    const sprite = username$meowbloom$src$$harvest_text_sprite(content, 106);
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, _entity, sprite);
  }
  const _bind$12 = username$meowbloom$src$$quest_label_entity.val;
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _entity = _Some;
    const content = username$meowbloom$src$$quest_text();
    const sprite = username$meowbloom$src$$harvest_text_sprite(content, 106);
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, _entity, sprite);
    return;
  }
}
function username$meowbloom$src$$plant_hud_system(_delta) {
  username$meowbloom$src$$ensure_quest();
  username$meowbloom$src$$ensure_hud();
  if (username$meowbloom$src$$hud_dirty.val) {
    username$meowbloom$src$$update_hud_text();
    return;
  } else {
    return;
  }
}
function username$meowbloom$src$$background_render(_delta) {
  const size = Milky2018$selene$backend$$canvas_backend.viewport_size;
  Milky2018$selene$backend$$draw_color_rect(0, 0, Milky2018$selene$math$$Vec2D$op_get(size, 0), Milky2018$selene$math$$Vec2D$op_get(size, 1), "white");
}
function username$meowbloom$src$$cat_attempt_harvest() {
  const _bind$8 = username$meowbloom$src$$cat_get_ground_position();
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _ground = _Some;
    username$meowbloom$src$$plant_try_harvest(_ground);
    return;
  }
}
function username$meowbloom$src$$clamp_to_canvas(pos, canvas) {
  const max_x = Milky2018$selene$math$$Vec2D$op_get(canvas, 0) - 16;
  const max_y = Milky2018$selene$math$$Vec2D$op_get(canvas, 1) - 16;
  let result = pos;
  if (Milky2018$selene$math$$Vec2D$op_get(result, 0) < 0) {
    result = Milky2018$selene$math$$Vec2D$update(result, 0, 0);
  } else {
    if (Milky2018$selene$math$$Vec2D$op_get(result, 0) > max_x) {
      result = Milky2018$selene$math$$Vec2D$update(result, 0, max_x);
    }
  }
  if (Milky2018$selene$math$$Vec2D$op_get(result, 1) < 0) {
    result = Milky2018$selene$math$$Vec2D$update(result, 1, 0);
  } else {
    if (Milky2018$selene$math$$Vec2D$op_get(result, 1) > max_y) {
      result = Milky2018$selene$math$$Vec2D$update(result, 1, max_y);
    }
  }
  return result;
}
function username$meowbloom$src$$facing_from_direction(dir) {
  return Math.abs(Milky2018$selene$math$$Vec2D$op_get(dir, 0)) >= Math.abs(Milky2018$selene$math$$Vec2D$op_get(dir, 1)) ? (Milky2018$selene$math$$Vec2D$op_get(dir, 0) >= 0 ? 3 : 2) : Milky2018$selene$math$$Vec2D$op_get(dir, 1) >= 0 ? 0 : 1;
}
function username$meowbloom$src$$get_idle_animation(facing) {
  switch (facing) {
    case 0: {
      return username$meowbloom$src$$cat_front_idle_anim;
    }
    case 1: {
      return username$meowbloom$src$$cat_back_idle_anim;
    }
    case 2: {
      return username$meowbloom$src$$cat_left_idle_anim;
    }
    default: {
      return username$meowbloom$src$$cat_right_idle_anim;
    }
  }
}
function username$meowbloom$src$$get_walk_animation(facing) {
  switch (facing) {
    case 0: {
      return username$meowbloom$src$$cat_front_walk_anim;
    }
    case 1: {
      return username$meowbloom$src$$cat_back_walk_anim;
    }
    case 2: {
      return username$meowbloom$src$$cat_left_walk_anim;
    }
    default: {
      return username$meowbloom$src$$cat_right_walk_anim;
    }
  }
}
function username$meowbloom$src$$cat_control_system(delta) {
  if (!username$meowbloom$src$$game_started.val) {
    return undefined;
  }
  const canvas = Milky2018$selene$backend$$canvas_backend.viewport_size;
  const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity);
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const _bind$9 = username$meowbloom$src$$script_move_target.val;
    if (_bind$9 === undefined) {
    } else {
      const _Some$2 = _bind$9;
      const _target = _Some$2;
      const current_pos = _pos;
      let desired = _target;
      desired = username$meowbloom$src$$clamp_to_canvas(desired, canvas);
      const _p$17 = desired;
      const to_target = { _0: _p$17._0 - current_pos._0, _1: _p$17._1 - current_pos._1 };
      const distance = Math.sqrt(to_target._0 * to_target._0 + to_target._1 * to_target._1);
      if (distance <= 1) {
        moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity, desired);
        username$meowbloom$src$$cat_attempt_harvest();
        username$meowbloom$src$$script_move_target.val = undefined;
        const idle_anim = username$meowbloom$src$$get_idle_animation(username$meowbloom$src$$cat_facing.val);
        Milky2018$selene$sprite$$play_animation$46$inner(username$meowbloom$src$$cat_entity, idle_anim, false, username$meowbloom$src$$cat_control_system$46$constr$47$3035, Option$None$0$, undefined);
        return undefined;
      }
      const dir = Milky2018$selene$math$$Vec2D$normalize(to_target);
      username$meowbloom$src$$cat_facing.val = username$meowbloom$src$$facing_from_direction(dir);
      const walk_anim = username$meowbloom$src$$get_walk_animation(username$meowbloom$src$$cat_facing.val);
      Milky2018$selene$sprite$$play_animation$46$inner(username$meowbloom$src$$cat_entity, walk_anim, false, username$meowbloom$src$$cat_control_system$46$constr$47$3036, Option$None$0$, undefined);
      const _p$18 = 120 * delta;
      const step = { _0: dir._0 * _p$18, _1: dir._1 * _p$18 };
      let next_pos = Math.sqrt(step._0 * step._0 + step._1 * step._1) >= distance ? desired : { _0: current_pos._0 + step._0, _1: current_pos._1 + step._1 };
      next_pos = username$meowbloom$src$$clamp_to_canvas(next_pos, canvas);
      const _p$19 = next_pos;
      const _p$20 = { _0: _p$19._0 - current_pos._0, _1: _p$19._1 - current_pos._1 };
      if (Math.sqrt(_p$20._0 * _p$20._0 + _p$20._1 * _p$20._1) <= 0.1) {
        moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity, next_pos);
        username$meowbloom$src$$cat_attempt_harvest();
        username$meowbloom$src$$script_move_target.val = undefined;
        const idle_anim = username$meowbloom$src$$get_idle_animation(username$meowbloom$src$$cat_facing.val);
        Milky2018$selene$sprite$$play_animation$46$inner(username$meowbloom$src$$cat_entity, idle_anim, false, username$meowbloom$src$$cat_control_system$46$constr$47$3037, Option$None$0$, undefined);
      } else {
        moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity, next_pos);
        username$meowbloom$src$$cat_attempt_harvest();
      }
      return undefined;
    }
    const d1 = Milky2018$selene$inputs$$key_vector(22, 18, 0, 3);
    const d2 = Milky2018$selene$inputs$$key_vector(36, 37, 38, 39);
    const dir = Milky2018$selene$math$$Vec2D$normalize({ _0: d1._0 + d2._0, _1: d1._1 + d2._1 });
    let target_pos = _pos;
    const distance = Math.sqrt(dir._0 * dir._0 + dir._1 * dir._1);
    if (distance !== 0) {
      const facing = username$meowbloom$src$$facing_from_direction(dir);
      username$meowbloom$src$$cat_facing.val = facing;
      const walk_anim = username$meowbloom$src$$get_walk_animation(facing);
      Milky2018$selene$sprite$$play_animation$46$inner(username$meowbloom$src$$cat_entity, walk_anim, false, username$meowbloom$src$$cat_control_system$46$constr$47$3038, Option$None$0$, undefined);
      const _p$17 = 120 * delta;
      const disp = { _0: dir._0 * _p$17, _1: dir._1 * _p$17 };
      target_pos = { _0: _pos._0 + disp._0, _1: _pos._1 + disp._1 };
    } else {
      const idle_anim = username$meowbloom$src$$get_idle_animation(username$meowbloom$src$$cat_facing.val);
      Milky2018$selene$sprite$$play_animation$46$inner(username$meowbloom$src$$cat_entity, idle_anim, false, username$meowbloom$src$$cat_control_system$46$constr$47$3039, Option$None$0$, undefined);
    }
    target_pos = username$meowbloom$src$$clamp_to_canvas(target_pos, canvas);
    moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity, target_pos);
    username$meowbloom$src$$cat_attempt_harvest();
    return;
  }
}
function username$meowbloom$src$$cat_spawn_system(_delta) {
  Milky2018$selene$backend$$preload_img("assets/spritesheet.png");
  const sprite = Milky2018$selene$sprite$$Sprite$from_animation(username$meowbloom$src$$cat_front_idle_anim, 10, undefined);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, username$meowbloom$src$$cat_entity, sprite);
  username$meowbloom$src$$cat_facing.val = 0;
  const size = Milky2018$selene$backend$$canvas_backend.viewport_size;
  moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity, { _0: Milky2018$selene$math$$Vec2D$op_get(size, 0) / 2 - 8, _1: Milky2018$selene$math$$Vec2D$op_get(size, 1) / 2 - 8 });
}
function username$meowbloom$src$$hide_console_panel() {
  const _bind$8 = username$meowbloom$src$$console_panel.val;
  if (_bind$8 === undefined) {
  } else {
    const _Some = _bind$8;
    const _panel = _Some;
    Milky2018$selene$entity$$Entity$destroy(_panel);
  }
  username$meowbloom$src$$console_panel.val = undefined;
  moonbitlang$core$array$$Array$clear$3$(username$meowbloom$src$$line_entities);
  username$meowbloom$src$$status_entity.val = undefined;
  username$meowbloom$src$$run_button_entity.val = undefined;
  username$meowbloom$src$$clear_button_entity.val = undefined;
  username$meowbloom$src$$editor_focused.val = false;
  username$meowbloom$src$$blink_visible.val = false;
  username$meowbloom$src$$blink_timer.val = 0;
  username$meowbloom$src$$console_visible.val = false;
  username$meowbloom$src$$render_dirty.val = true;
  username$meowbloom$src$$status_dirty.val = true;
}
function username$meowbloom$src$$create_button(parent, label, h_offset, callback) {
  const button = Milky2018$selene$style$$add_widget(parent, (zindex) => Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 112, _1: 40 }, "#F4A460", username$meowbloom$src$$create_button$46$constr$47$3073), zindex, undefined), callback, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 112, _1: 40 }, { _0: 0, _1: 0 }), undefined, undefined, Option$None$0$, Option$None$0$, new Option$Some$0$(h_offset), username$meowbloom$src$$create_button$46$constr$47$3074);
  Milky2018$selene$style$$add_widget(button, (zindex) => Milky2018$selene$sprite$$Sprite$from_text$46$inner(Milky2018$selene$sprite$$Text$new(label, username$meowbloom$src$$create_button$46$constr$47$3075, username$meowbloom$src$$create_button$46$constr$47$3076, undefined, undefined), zindex, { _0: 28, _1: 4 }), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
  return button;
}
function username$meowbloom$src$$ensure_initial_line() {
  if (username$meowbloom$src$$code_lines.length === 0) {
    moonbitlang$core$array$$Array$push$34$(username$meowbloom$src$$code_lines, []);
    return;
  } else {
    return;
  }
}
function username$meowbloom$src$$apply_status(message) {
  username$meowbloom$src$$status_message.val = message;
  username$meowbloom$src$$status_dirty.val = true;
}
function username$meowbloom$src$$cat_cancel_script_move() {
  username$meowbloom$src$$script_move_target.val = undefined;
  const idle_anim = username$meowbloom$src$$get_idle_animation(username$meowbloom$src$$cat_facing.val);
  Milky2018$selene$sprite$$play_animation$46$inner(username$meowbloom$src$$cat_entity, idle_anim, false, username$meowbloom$src$$cat_cancel_script_move$46$constr$47$3085, Option$None$0$, undefined);
}
function username$meowbloom$src$$clear_lines() {
  moonbitlang$core$array$$Array$clear$34$(username$meowbloom$src$$code_lines);
  username$meowbloom$src$$ensure_initial_line();
  username$meowbloom$src$$render_dirty.val = true;
}
function username$meowbloom$src$$on_clear_pressed(_button) {
  username$meowbloom$src$$clear_lines();
  moonbitlang$core$array$$Array$clear$33$(username$meowbloom$src$$script_commands);
  username$meowbloom$src$$script_running.val = false;
  username$meowbloom$src$$active_command.val = undefined;
  username$meowbloom$src$$active_move_target.val = undefined;
  username$meowbloom$src$$script_index.val = 0;
  username$meowbloom$src$$cat_cancel_script_move();
  username$meowbloom$src$$apply_status("输入已清空");
  username$meowbloom$src$$status_dirty.val = true;
}
function username$meowbloom$src$$on_panel_pressed(_button) {
  username$meowbloom$src$$editor_focused.val = true;
  username$meowbloom$src$$blink_visible.val = true;
  username$meowbloom$src$$blink_timer.val = 0;
  username$meowbloom$src$$render_dirty.val = true;
}
function username$meowbloom$src$$direction_vector(name, steps) {
  const distance = (steps + 0) * 16;
  if (name === "up" || (name === "north" || name === "上")) {
    return { _0: 0, _1: -distance };
  }
  if (name === "down" || (name === "south" || name === "下")) {
    return { _0: 0, _1: distance };
  }
  if (name === "left" || (name === "west" || name === "左")) {
    return { _0: -distance, _1: 0 };
  }
  if (name === "right" || (name === "east" || name === "右")) {
    return { _0: distance, _1: 0 };
  }
  return undefined;
}
function username$meowbloom$src$$token_copy(src) {
  const copy = [];
  const _end158 = src.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end158) {
      moonbitlang$core$array$$Array$push$15$(copy, moonbitlang$core$array$$Array$at$15$(src, idx));
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return copy;
}
function username$meowbloom$src$$line_to_tokens(line) {
  const tokens = [];
  let current = [];
  const _end166 = line.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end166) {
      const code = moonbitlang$core$array$$Array$at$15$(line, idx);
      if (moonbitlang$core$builtin$$Eq$equal$15$(code, 40)) {
        if (current.length !== 0) {
          moonbitlang$core$array$$Array$push$34$(tokens, username$meowbloom$src$$token_copy(current));
          current = [];
        }
      } else {
        moonbitlang$core$array$$Array$push$15$(current, code);
      }
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (current.length !== 0) {
    moonbitlang$core$array$$Array$push$34$(tokens, username$meowbloom$src$$token_copy(current));
  }
  return tokens;
}
function username$meowbloom$src$$parse_plant_type_name(name) {
  if (name === "rice" || (name === "稻" || name === "稻米")) {
    return username$meowbloom$src$$parse_plant_type_name$46$constr$47$3104;
  }
  if (name === "tomato" || name === "番茄") {
    return username$meowbloom$src$$parse_plant_type_name$46$constr$47$3105;
  }
  return undefined;
}
function username$meowbloom$src$$parse_positive_int(token) {
  if (token.length === 0) {
    return undefined;
  }
  let value = 0;
  const _end142 = token.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end142) {
      const code = moonbitlang$core$array$$Array$at$15$(token, idx);
      let digit_value;
      switch (code) {
        case 26: {
          digit_value = 0;
          break;
        }
        case 27: {
          digit_value = 1;
          break;
        }
        case 28: {
          digit_value = 2;
          break;
        }
        case 29: {
          digit_value = 3;
          break;
        }
        case 30: {
          digit_value = 4;
          break;
        }
        case 31: {
          digit_value = 5;
          break;
        }
        case 32: {
          digit_value = 6;
          break;
        }
        case 33: {
          digit_value = 7;
          break;
        }
        case 34: {
          digit_value = 8;
          break;
        }
        case 35: {
          digit_value = 9;
          break;
        }
        default: {
          return undefined;
        }
      }
      value = (Math.imul(value, 10) | 0) + digit_value | 0;
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return value;
}
function username$meowbloom$src$$code_to_char(code) {
  switch (code) {
    case 0: {
      return "a";
    }
    case 1: {
      return "b";
    }
    case 2: {
      return "c";
    }
    case 3: {
      return "d";
    }
    case 4: {
      return "e";
    }
    case 5: {
      return "f";
    }
    case 6: {
      return "g";
    }
    case 7: {
      return "h";
    }
    case 8: {
      return "i";
    }
    case 9: {
      return "j";
    }
    case 10: {
      return "k";
    }
    case 11: {
      return "l";
    }
    case 12: {
      return "m";
    }
    case 13: {
      return "n";
    }
    case 14: {
      return "o";
    }
    case 15: {
      return "p";
    }
    case 16: {
      return "q";
    }
    case 17: {
      return "r";
    }
    case 18: {
      return "s";
    }
    case 19: {
      return "t";
    }
    case 20: {
      return "u";
    }
    case 21: {
      return "v";
    }
    case 22: {
      return "w";
    }
    case 23: {
      return "x";
    }
    case 24: {
      return "y";
    }
    case 25: {
      return "z";
    }
    case 26: {
      return "0";
    }
    case 27: {
      return "1";
    }
    case 28: {
      return "2";
    }
    case 29: {
      return "3";
    }
    case 30: {
      return "4";
    }
    case 31: {
      return "5";
    }
    case 32: {
      return "6";
    }
    case 33: {
      return "7";
    }
    case 34: {
      return "8";
    }
    case 35: {
      return "9";
    }
    case 40: {
      return " ";
    }
    default: {
      return "";
    }
  }
}
function username$meowbloom$src$$token_to_string(token) {
  let text = "";
  const _end151 = token.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end151) {
      text = `${text}${username$meowbloom$src$$code_to_char(moonbitlang$core$array$$Array$at$15$(token, idx))}`;
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return text;
}
function username$meowbloom$src$$parse_script() {
  const commands = [];
  const _end117 = username$meowbloom$src$$code_lines.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end117) {
      _L: {
        const tokens = username$meowbloom$src$$line_to_tokens(moonbitlang$core$array$$Array$at$34$(username$meowbloom$src$$code_lines, idx));
        if (tokens.length === 0) {
          break _L;
        }
        const keyword = username$meowbloom$src$$token_to_string(moonbitlang$core$array$$Array$at$34$(tokens, 0));
        if (keyword === "move") {
          if (tokens.length < 2) {
            return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: move 缺少方向`);
          }
          const dir_name = username$meowbloom$src$$token_to_string(moonbitlang$core$array$$Array$at$34$(tokens, 1));
          let steps = 1;
          if (tokens.length >= 3) {
            const _bind$8 = username$meowbloom$src$$parse_positive_int(moonbitlang$core$array$$Array$at$34$(tokens, 2));
            if (_bind$8 === undefined) {
              return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: move 步数无效`);
            } else {
              const _Some = _bind$8;
              const _value = _Some;
              steps = _value;
            }
          }
          const _bind$8 = username$meowbloom$src$$direction_vector(dir_name, steps);
          if (_bind$8 === undefined) {
            return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: 未知方向 \"${dir_name}\"`);
          } else {
            const _Some = _bind$8;
            const _vec = _Some;
            moonbitlang$core$array$$Array$push$33$(commands, new ScriptCommand$Move(_vec));
          }
        } else {
          if (keyword === "plant") {
            let plant_type_opt = undefined;
            if (tokens.length >= 2) {
              const name = username$meowbloom$src$$token_to_string(moonbitlang$core$array$$Array$at$34$(tokens, 1));
              const _bind$8 = username$meowbloom$src$$parse_plant_type_name(name);
              if (_bind$8 === undefined) {
                return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: 未知植物 \"${name}\"`);
              } else {
                const _Some = _bind$8;
                const _pt = _Some;
                plant_type_opt = _pt;
              }
            }
            moonbitlang$core$array$$Array$push$33$(commands, new ScriptCommand$Plant(plant_type_opt));
          } else {
            if (keyword === "select") {
              if (tokens.length < 2) {
                return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: select 缺少目标`);
              }
              const target = username$meowbloom$src$$token_to_string(moonbitlang$core$array$$Array$at$34$(tokens, 1));
              if (target === "slot") {
                if (tokens.length < 3) {
                  return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: select slot 需要编号`);
                }
                const _bind$8 = username$meowbloom$src$$parse_positive_int(moonbitlang$core$array$$Array$at$34$(tokens, 2));
                if (_bind$8 === undefined) {
                  return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: slot 编号无效`);
                } else {
                  const _Some = _bind$8;
                  const _value = _Some;
                  moonbitlang$core$array$$Array$push$33$(commands, new ScriptCommand$SelectSlot(_value - 1 | 0));
                }
              } else {
                const _bind$8 = username$meowbloom$src$$parse_plant_type_name(target);
                if (_bind$8 === undefined) {
                  return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: 未知植物 \"${target}\"`);
                } else {
                  const _Some = _bind$8;
                  const _pt = _Some;
                  moonbitlang$core$array$$Array$push$33$(commands, new ScriptCommand$SelectSeed(_pt));
                }
              }
            } else {
              if (keyword === "slot") {
                if (tokens.length < 2) {
                  return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: slot 需要编号`);
                }
                const _bind$8 = username$meowbloom$src$$parse_positive_int(moonbitlang$core$array$$Array$at$34$(tokens, 1));
                if (_bind$8 === undefined) {
                  return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: slot 编号无效`);
                } else {
                  const _Some = _bind$8;
                  const _value = _Some;
                  moonbitlang$core$array$$Array$push$33$(commands, new ScriptCommand$SelectSlot(_value - 1 | 0));
                }
              } else {
                return new ParseResult$Err(`第${moonbitlang$core$int$$Int$to_string$46$inner(idx + 1 | 0, 10)}行: 未知指令 \"${keyword}\"`);
              }
            }
          }
        }
        break _L;
      }
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new ParseResult$Ok(commands);
}
function username$meowbloom$src$$start_script(commands) {
  moonbitlang$core$array$$Array$clear$33$(username$meowbloom$src$$script_commands);
  const _end111 = commands.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end111) {
      moonbitlang$core$array$$Array$push$33$(username$meowbloom$src$$script_commands, moonbitlang$core$array$$Array$at$33$(commands, idx));
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  username$meowbloom$src$$script_index.val = 0;
  username$meowbloom$src$$active_command.val = undefined;
  username$meowbloom$src$$active_move_target.val = undefined;
  username$meowbloom$src$$script_running.val = true;
  username$meowbloom$src$$cat_cancel_script_move();
}
function username$meowbloom$src$$stop_script(message) {
  username$meowbloom$src$$script_running.val = false;
  username$meowbloom$src$$active_command.val = undefined;
  username$meowbloom$src$$active_move_target.val = undefined;
  username$meowbloom$src$$script_index.val = 0;
  username$meowbloom$src$$cat_cancel_script_move();
  username$meowbloom$src$$apply_status(message);
  username$meowbloom$src$$status_dirty.val = true;
}
function username$meowbloom$src$$on_run_pressed(_button) {
  if (!username$meowbloom$src$$game_started.val) {
    username$meowbloom$src$$stop_script("请先点击 Start Game");
    return undefined;
  }
  const _bind$8 = username$meowbloom$src$$parse_script();
  if (_bind$8.$tag === 0) {
    const _Ok = _bind$8;
    const _commands = _Ok._0;
    if (_commands.length === 0) {
      username$meowbloom$src$$apply_status("没有可执行的指令");
      username$meowbloom$src$$status_dirty.val = true;
      return undefined;
    }
    username$meowbloom$src$$start_script(_commands);
    username$meowbloom$src$$apply_status(`准备执行 ${moonbitlang$core$int$$Int$to_string$46$inner(_commands.length, 10)} 条指令`);
    username$meowbloom$src$$status_dirty.val = true;
    return;
  } else {
    const _Err = _bind$8;
    const _message = _Err._0;
    username$meowbloom$src$$apply_status(_message);
    username$meowbloom$src$$status_dirty.val = true;
    return;
  }
}
function username$meowbloom$src$$show_console_panel() {
  const _bind$8 = username$meowbloom$src$$console_panel.val;
  if (_bind$8 === undefined) {
  } else {
    return undefined;
  }
  username$meowbloom$src$$ensure_initial_line();
  moonbitlang$core$array$$Array$clear$3$(username$meowbloom$src$$line_entities);
  const canvas = Milky2018$selene$backend$$canvas_backend.viewport_size;
  const panel = Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 320, _1: 420 }, "rgba(47, 27, 12, 0.85)", username$meowbloom$src$$show_console_panel$46$constr$47$3161), zindex, undefined), username$meowbloom$src$$on_panel_pressed, new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect({ _0: 320, _1: 420 }, { _0: 0, _1: 0 }), undefined, undefined, Option$None$0$, Option$None$0$, new Option$Some$0$(Milky2018$selene$math$$Vec2D$op_get(canvas, 0) - 320 - 24), username$meowbloom$src$$show_console_panel$46$constr$47$3162);
  username$meowbloom$src$$console_panel.val = panel;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < 14) {
      const entity = Milky2018$selene$style$$add_widget(panel, (zindex) => Milky2018$selene$sprite$$Sprite$from_text$46$inner(Milky2018$selene$sprite$$Text$new("", username$meowbloom$src$$show_console_panel$46$constr$47$3163, username$meowbloom$src$$show_console_panel$46$constr$47$3164, undefined, undefined), zindex, { _0: 14, _1: 14 }), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
      moonbitlang$core$array$$Array$push$3$(username$meowbloom$src$$line_entities, entity);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  username$meowbloom$src$$status_entity.val = Milky2018$selene$style$$add_widget(panel, (zindex) => Milky2018$selene$sprite$$Sprite$from_text$46$inner(Milky2018$selene$sprite$$Text$new(username$meowbloom$src$$status_message.val, username$meowbloom$src$$show_console_panel$46$constr$47$3165, username$meowbloom$src$$show_console_panel$46$constr$47$3166, undefined, undefined), zindex, { _0: 14, _1: 344 }), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, Option$None$0$, Option$None$0$);
  username$meowbloom$src$$run_button_entity.val = username$meowbloom$src$$create_button(panel, "Run", 14, username$meowbloom$src$$on_run_pressed);
  username$meowbloom$src$$clear_button_entity.val = username$meowbloom$src$$create_button(panel, "Clear", 138, username$meowbloom$src$$on_clear_pressed);
  username$meowbloom$src$$editor_focused.val = false;
  username$meowbloom$src$$blink_visible.val = false;
  username$meowbloom$src$$blink_timer.val = 0;
  username$meowbloom$src$$console_visible.val = true;
  username$meowbloom$src$$render_dirty.val = true;
  username$meowbloom$src$$status_dirty.val = true;
}
function username$meowbloom$src$$code_console_toggle_system(_delta) {
  if (!Milky2018$selene$inputs$$is_just_pressed(2)) {
    return undefined;
  }
  if (username$meowbloom$src$$console_visible.val) {
    if (username$meowbloom$src$$editor_focused.val) {
      return undefined;
    }
    username$meowbloom$src$$hide_console_panel();
    return;
  } else {
    username$meowbloom$src$$show_console_panel();
    return;
  }
}
function username$meowbloom$src$$append_code(code) {
  username$meowbloom$src$$ensure_initial_line();
  const last_index = username$meowbloom$src$$code_lines.length - 1 | 0;
  moonbitlang$core$array$$Array$push$15$(moonbitlang$core$array$$Array$at$34$(username$meowbloom$src$$code_lines, last_index), code);
  username$meowbloom$src$$render_dirty.val = true;
}
function username$meowbloom$src$$append_if_pressed(code) {
  if (Milky2018$selene$inputs$$is_just_pressed(code)) {
    username$meowbloom$src$$append_code(code);
    return true;
  }
  return false;
}
function username$meowbloom$src$$process_input_keys() {
  let typed = false;
  if (username$meowbloom$src$$append_if_pressed(0)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(1)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(2)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(3)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(4)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(5)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(6)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(7)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(8)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(9)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(10)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(11)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(12)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(13)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(14)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(15)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(16)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(17)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(18)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(19)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(20)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(21)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(22)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(23)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(24)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(25)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(26)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(27)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(28)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(29)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(30)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(31)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(32)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(33)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(34)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(35)) {
    typed = true;
  }
  if (username$meowbloom$src$$append_if_pressed(40)) {
    typed = true;
  }
  if (typed) {
    username$meowbloom$src$$blink_timer.val = 0;
    username$meowbloom$src$$blink_visible.val = true;
    username$meowbloom$src$$render_dirty.val = true;
    return;
  } else {
    return;
  }
}
function username$meowbloom$src$$delete_last_code() {
  if (username$meowbloom$src$$code_lines.length === 0) {
    return false;
  }
  const last_index = username$meowbloom$src$$code_lines.length - 1 | 0;
  let deleted = false;
  if (moonbitlang$core$array$$Array$at$34$(username$meowbloom$src$$code_lines, last_index).length > 0) {
    moonbitlang$core$array$$Array$pop$15$(moonbitlang$core$array$$Array$at$34$(username$meowbloom$src$$code_lines, last_index));
    deleted = true;
  } else {
    if (username$meowbloom$src$$code_lines.length > 1) {
      moonbitlang$core$array$$Array$pop$34$(username$meowbloom$src$$code_lines);
      deleted = true;
    }
  }
  if (deleted) {
    username$meowbloom$src$$render_dirty.val = true;
  }
  return deleted;
}
function username$meowbloom$src$$insert_new_line() {
  if (username$meowbloom$src$$code_lines.length >= 64) {
    username$meowbloom$src$$apply_status("最多支持 64 行脚本");
    username$meowbloom$src$$status_dirty.val = true;
    return undefined;
  }
  username$meowbloom$src$$ensure_initial_line();
  moonbitlang$core$array$$Array$push$34$(username$meowbloom$src$$code_lines, []);
  username$meowbloom$src$$render_dirty.val = true;
}
function username$meowbloom$src$$process_special_keys() {
  if (Milky2018$selene$inputs$$is_just_pressed(41)) {
    username$meowbloom$src$$insert_new_line();
    username$meowbloom$src$$blink_timer.val = 0;
    username$meowbloom$src$$blink_visible.val = true;
  }
  if (Milky2018$selene$inputs$$is_just_pressed(42)) {
    username$meowbloom$src$$editor_focused.val = false;
  }
  const backspace = Milky2018$selene$inputs$$is_just_pressed(43);
  const delete_ = Milky2018$selene$inputs$$is_just_pressed(44);
  if (backspace || delete_) {
    if (username$meowbloom$src$$delete_last_code()) {
      username$meowbloom$src$$blink_timer.val = 0;
      username$meowbloom$src$$blink_visible.val = true;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function username$meowbloom$src$$line_to_string(line) {
  let text = "";
  const _end174 = line.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end174) {
      text = `${text}${username$meowbloom$src$$code_to_char(moonbitlang$core$array$$Array$at$15$(line, idx))}`;
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return text;
}
function username$meowbloom$src$$refresh_lines() {
  const _bind$8 = username$meowbloom$src$$console_panel.val;
  if (_bind$8 === undefined) {
    return undefined;
  }
  const total = username$meowbloom$src$$code_lines.length;
  const start = total > 14 ? total - 14 | 0 : 0;
  const _end81 = username$meowbloom$src$$line_entities.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end81) {
      const entity = moonbitlang$core$array$$Array$at$3$(username$meowbloom$src$$line_entities, idx);
      const line_index = start + idx | 0;
      let text = line_index < total ? username$meowbloom$src$$line_to_string(moonbitlang$core$array$$Array$at$34$(username$meowbloom$src$$code_lines, line_index)) : "";
      const is_last_line = line_index === (total - 1 | 0) && username$meowbloom$src$$editor_focused.val;
      if (is_last_line && username$meowbloom$src$$blink_visible.val) {
        text = `${text}|`;
      }
      const _tmp$2 = Milky2018$selene$sprite$$Text$new(text, username$meowbloom$src$$refresh_lines$46$constr$47$3190, username$meowbloom$src$$refresh_lines$46$constr$47$3191, undefined, undefined);
      const _bind$9 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$sprite$$sprites, entity);
      let _tmp$3;
      if (_bind$9 === undefined) {
        _tmp$3 = 105;
      } else {
        const _Some = _bind$9;
        const _existing = _Some;
        _tmp$3 = _existing.zindex;
      }
      const sprite = Milky2018$selene$sprite$$Sprite$from_text$46$inner(_tmp$2, _tmp$3, { _0: 14, _1: 14 + (idx + 0) * 24 });
      moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, entity, sprite);
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  username$meowbloom$src$$render_dirty.val = false;
}
function username$meowbloom$src$$update_cursor(delta) {
  if (!username$meowbloom$src$$editor_focused.val) {
    if (username$meowbloom$src$$blink_visible.val) {
      username$meowbloom$src$$blink_visible.val = false;
      username$meowbloom$src$$render_dirty.val = true;
    }
    username$meowbloom$src$$blink_timer.val = 0;
    return undefined;
  }
  username$meowbloom$src$$blink_timer.val = username$meowbloom$src$$blink_timer.val + delta;
  if (username$meowbloom$src$$blink_timer.val >= 0.5) {
    username$meowbloom$src$$blink_timer.val = 0;
    if (username$meowbloom$src$$blink_visible.val) {
      username$meowbloom$src$$blink_visible.val = false;
    } else {
      username$meowbloom$src$$blink_visible.val = true;
    }
    username$meowbloom$src$$render_dirty.val = true;
    return;
  } else {
    return;
  }
}
function username$meowbloom$src$$advance_command() {
  username$meowbloom$src$$active_command.val = undefined;
  username$meowbloom$src$$script_index.val = username$meowbloom$src$$script_index.val + 1 | 0;
}
function username$meowbloom$src$$cat_get_position() {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$position$$positions, username$meowbloom$src$$cat_entity);
  if (_bind$8 === undefined) {
    return undefined;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    return _pos;
  }
}
function username$meowbloom$src$$cat_script_move_to(target) {
  const canvas = Milky2018$selene$backend$$canvas_backend.viewport_size;
  username$meowbloom$src$$script_move_target.val = username$meowbloom$src$$clamp_to_canvas(target, canvas);
}
function username$meowbloom$src$$execute_script_move(displacement) {
  const _bind$8 = username$meowbloom$src$$active_move_target.val;
  if (_bind$8 === undefined) {
    const _bind$9 = username$meowbloom$src$$cat_get_position();
    if (_bind$9 === undefined) {
      username$meowbloom$src$$stop_script("无法获取猫咪当前位置");
      return;
    } else {
      const _Some = _bind$9;
      const _pos = _Some;
      const target = { _0: _pos._0 + displacement._0, _1: _pos._1 + displacement._1 };
      username$meowbloom$src$$cat_script_move_to(target);
      username$meowbloom$src$$active_move_target.val = target;
      return;
    }
  } else {
    const _p$17 = username$meowbloom$src$$script_move_target.val;
    if (!!(_p$17 === undefined)) {
      username$meowbloom$src$$active_move_target.val = undefined;
      username$meowbloom$src$$apply_status("移动完成");
      username$meowbloom$src$$status_dirty.val = true;
      username$meowbloom$src$$advance_command();
      return;
    } else {
      return;
    }
  }
}
function username$meowbloom$src$$inventory_select_slot(idx) {
  if (idx < 0 || idx >= 8) {
    return false;
  }
  if (idx !== username$meowbloom$src$$selected_slot.val) {
    username$meowbloom$src$$selected_slot.val = idx;
    username$meowbloom$src$$inventory_dirty.val = true;
    return true;
  }
  return true;
}
function username$meowbloom$src$$inventory_select_seed(plant_type) {
  const _end191 = username$meowbloom$src$$inventory_slots.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end191) {
      const _bind$8 = moonbitlang$core$array$$Array$at$32$(username$meowbloom$src$$inventory_slots, idx);
      if (_bind$8.$tag === 1) {
        const _Seed = _bind$8;
        const _seed_type = _Seed._0;
        if (moonbitlang$core$builtin$$Eq$equal$31$(_seed_type, plant_type)) {
          username$meowbloom$src$$inventory_select_slot(idx);
          return true;
        }
      }
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function username$meowbloom$src$$plant_type_name(plant_type) {
  if (plant_type === 0) {
    return "rice";
  } else {
    return "tomato";
  }
}
function username$meowbloom$src$$execute_script_plant(plant_type_opt) {
  const _p$17 = username$meowbloom$src$$script_move_target.val;
  if (!(_p$17 === undefined)) {
    return undefined;
  }
  let selected = undefined;
  if (plant_type_opt === undefined) {
    const _bind$8 = username$meowbloom$src$$inventory_get_selected_seed();
    if (_bind$8 === undefined) {
      username$meowbloom$src$$stop_script("请先选择要种植的种子");
      return undefined;
    } else {
      const _Some = _bind$8;
      const _current = _Some;
      selected = _current;
    }
  } else {
    const _Some = plant_type_opt;
    const _pt = _Some;
    if (username$meowbloom$src$$inventory_select_seed(_pt)) {
      selected = _pt;
    } else {
      username$meowbloom$src$$stop_script(`背包中没有 ${username$meowbloom$src$$plant_type_name(_pt)} 种子`);
      return undefined;
    }
  }
  const _bind$8 = selected;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _plant_type = _Some;
    const _bind$9 = username$meowbloom$src$$cat_get_ground_position();
    if (_bind$9 === undefined) {
      username$meowbloom$src$$stop_script("无法获取猫咪脚下的位置");
      return;
    } else {
      const _Some$2 = _bind$9;
      const _pos = _Some$2;
      const planted = username$meowbloom$src$$plant_try_plant(_pos, _plant_type);
      if (planted) {
        username$meowbloom$src$$apply_status("种植成功");
      } else {
        username$meowbloom$src$$apply_status("这里已经有植物了");
      }
      username$meowbloom$src$$status_dirty.val = true;
      username$meowbloom$src$$advance_command();
      return;
    }
  }
}
function username$meowbloom$src$$execute_script_select_seed(plant_type) {
  if (username$meowbloom$src$$inventory_select_seed(plant_type)) {
    username$meowbloom$src$$apply_status(`选择种子 ${username$meowbloom$src$$plant_type_name(plant_type)}`);
    username$meowbloom$src$$status_dirty.val = true;
    username$meowbloom$src$$advance_command();
    return;
  } else {
    username$meowbloom$src$$stop_script(`背包中没有 ${username$meowbloom$src$$plant_type_name(plant_type)} 种子`);
    return;
  }
}
function username$meowbloom$src$$execute_script_select_slot(slot_idx) {
  if (slot_idx < 0) {
    username$meowbloom$src$$stop_script("槽位编号无效");
    return undefined;
  }
  if (username$meowbloom$src$$inventory_select_slot(slot_idx)) {
    username$meowbloom$src$$apply_status(`选择槽位 #${moonbitlang$core$int$$Int$to_string$46$inner(slot_idx + 1 | 0, 10)}`);
    username$meowbloom$src$$status_dirty.val = true;
    username$meowbloom$src$$advance_command();
    return;
  } else {
    username$meowbloom$src$$stop_script(`无法选择槽位 #${moonbitlang$core$int$$Int$to_string$46$inner(slot_idx + 1 | 0, 10)}`);
    return;
  }
}
function username$meowbloom$src$$update_script_execution(_delta) {
  if (!username$meowbloom$src$$script_running.val) {
    return undefined;
  }
  if (!username$meowbloom$src$$game_started.val) {
    username$meowbloom$src$$stop_script("请先点击 Start Game");
    return undefined;
  }
  const _bind$8 = username$meowbloom$src$$active_command.val;
  if (_bind$8 === undefined) {
    if (username$meowbloom$src$$script_index.val >= username$meowbloom$src$$script_commands.length) {
      username$meowbloom$src$$script_running.val = false;
      username$meowbloom$src$$active_move_target.val = undefined;
      username$meowbloom$src$$cat_cancel_script_move();
      username$meowbloom$src$$apply_status("脚本执行完成");
      username$meowbloom$src$$status_dirty.val = true;
      return undefined;
    }
    username$meowbloom$src$$active_command.val = moonbitlang$core$array$$Array$at$33$(username$meowbloom$src$$script_commands, username$meowbloom$src$$script_index.val);
    username$meowbloom$src$$active_move_target.val = undefined;
  }
  const _bind$9 = username$meowbloom$src$$active_command.val;
  if (_bind$9 === undefined) {
    return;
  } else {
    const _Some = _bind$9;
    const _x = _Some;
    switch (_x.$tag) {
      case 0: {
        const _Move = _x;
        const _displacement = _Move._0;
        username$meowbloom$src$$execute_script_move(_displacement);
        return;
      }
      case 1: {
        const _Plant = _x;
        const _plant_type_opt = _Plant._0;
        username$meowbloom$src$$execute_script_plant(_plant_type_opt);
        return;
      }
      case 2: {
        const _SelectSeed = _x;
        const _plant_type = _SelectSeed._0;
        username$meowbloom$src$$execute_script_select_seed(_plant_type);
        return;
      }
      default: {
        const _SelectSlot = _x;
        const _slot_idx = _SelectSlot._0;
        username$meowbloom$src$$execute_script_select_slot(_slot_idx);
        return;
      }
    }
  }
}
function username$meowbloom$src$$update_status_sprite() {
  const _bind$8 = username$meowbloom$src$$status_entity.val;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _entity = _Some;
    const _tmp = Milky2018$selene$sprite$$Text$new(username$meowbloom$src$$status_message.val, username$meowbloom$src$$update_status_sprite$46$constr$47$3257, username$meowbloom$src$$update_status_sprite$46$constr$47$3258, undefined, undefined);
    const _bind$9 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$sprite$$sprites, _entity);
    let _tmp$2;
    if (_bind$9 === undefined) {
      _tmp$2 = 106;
    } else {
      const _Some$2 = _bind$9;
      const _existing = _Some$2;
      _tmp$2 = _existing.zindex;
    }
    const sprite = Milky2018$selene$sprite$$Sprite$from_text$46$inner(_tmp, _tmp$2, { _0: 14, _1: 328 });
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, _entity, sprite);
    username$meowbloom$src$$status_dirty.val = false;
    return;
  }
}
function username$meowbloom$src$$code_console_update_system(delta) {
  username$meowbloom$src$$update_script_execution(delta);
  const _bind$8 = username$meowbloom$src$$console_panel.val;
  if (_bind$8 === undefined) {
    return;
  } else {
    username$meowbloom$src$$update_cursor(delta);
    if (username$meowbloom$src$$editor_focused.val) {
      username$meowbloom$src$$process_special_keys();
      username$meowbloom$src$$process_input_keys();
    }
    if (username$meowbloom$src$$render_dirty.val) {
      username$meowbloom$src$$refresh_lines();
    }
    if (username$meowbloom$src$$status_dirty.val) {
      username$meowbloom$src$$update_status_sprite();
      return;
    } else {
      return;
    }
  }
}
function username$meowbloom$src$$digit_hotkey_pressed(code) {
  const _bind$8 = Milky2018$selene$inputs$$Code$from_string(code);
  if (_bind$8 === undefined) {
    return false;
  } else {
    const _Some = _bind$8;
    const _key_code = _Some;
    return Milky2018$selene$inputs$$is_just_pressed(_key_code);
  }
}
function username$meowbloom$src$$detect_hotkey_selection() {
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit1")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3272;
  }
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit2")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3273;
  }
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit3")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3274;
  }
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit4")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3275;
  }
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit5")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3276;
  }
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit6")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3277;
  }
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit7")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3278;
  }
  if (username$meowbloom$src$$digit_hotkey_pressed("Digit8")) {
    return username$meowbloom$src$$detect_hotkey_selection$46$constr$47$3279;
  }
  return undefined;
}
function username$meowbloom$src$$empty_icon_sprite(zindex) {
  const rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 16, _1: 16 }, "rgba(0, 0, 0, 0)", undefined);
  return Milky2018$selene$sprite$$Sprite$from_color_rect(rect, zindex, undefined);
}
function username$meowbloom$src$$slot_background_sprite(selected, zindex) {
  const size = { _0: 32, _1: 32 };
  const rect = selected ? Milky2018$selene$sprite$$ColorRect$new(size, "#F2D27F", username$meowbloom$src$$slot_background_sprite$46$constr$47$3282) : Milky2018$selene$sprite$$ColorRect$new(size, "rgba(255, 255, 255, 0.22)", username$meowbloom$src$$slot_background_sprite$46$constr$47$3283);
  return Milky2018$selene$sprite$$Sprite$from_color_rect(rect, zindex, undefined);
}
function username$meowbloom$src$$refresh_inventory_visuals() {
  const _end197 = username$meowbloom$src$$slot_entities.length;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < _end197) {
      const slot_entity = moonbitlang$core$array$$Array$at$3$(username$meowbloom$src$$slot_entities, idx);
      const selected = idx === username$meowbloom$src$$selected_slot.val;
      const background = username$meowbloom$src$$slot_background_sprite(selected, 101);
      moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, slot_entity, background);
      const icon_entity = moonbitlang$core$array$$Array$at$3$(username$meowbloom$src$$icon_entities, idx);
      const _bind$8 = moonbitlang$core$array$$Array$at$32$(username$meowbloom$src$$inventory_slots, idx);
      if (_bind$8.$tag === 1) {
        const _Seed = _bind$8;
        const _plant_type = _Seed._0;
        const anim = username$meowbloom$src$$plant_stage_animation(_plant_type, 0);
        const sprite = Milky2018$selene$sprite$$Sprite$from_animation(anim, 102, undefined);
        moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, icon_entity, sprite);
      } else {
        const sprite = username$meowbloom$src$$empty_icon_sprite(102);
        moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$sprite$$sprites, icon_entity, sprite);
      }
      _tmp = idx + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function username$meowbloom$src$$inventory_update_system(_delta) {
  if (!(username$meowbloom$src$$console_visible.val && username$meowbloom$src$$editor_focused.val)) {
    const _bind$8 = username$meowbloom$src$$detect_hotkey_selection();
    if (_bind$8 === undefined) {
    } else {
      const _Some = _bind$8;
      const _idx = _Some;
      username$meowbloom$src$$inventory_select_slot(_idx);
    }
  }
  if (username$meowbloom$src$$inventory_dirty.val) {
    username$meowbloom$src$$refresh_inventory_visuals();
    username$meowbloom$src$$inventory_dirty.val = false;
    return;
  } else {
    return;
  }
}
function username$meowbloom$src$$spawn_inventory_ui(_delta) {
  if (username$meowbloom$src$$inventory_initialized.val) {
    return undefined;
  }
  moonbitlang$core$array$$Array$clear$3$(username$meowbloom$src$$slot_entities);
  moonbitlang$core$array$$Array$clear$3$(username$meowbloom$src$$icon_entities);
  const canvas = Milky2018$selene$backend$$canvas_backend.viewport_size;
  const total_width = (8 + 0) * 32 + (7 + 0) * 8;
  const start_x = Milky2018$selene$math$$Vec2D$op_get(canvas, 0) / 2 - total_width / 2;
  const base_y = Milky2018$selene$math$$Vec2D$op_get(canvas, 1) - 32 - 24;
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < 8) {
      const slot_x = start_x + (idx + 0) * 40;
      const slot = Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => username$meowbloom$src$$slot_background_sprite(false, zindex), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, new Option$Some$0$(slot_x), new Option$Some$0$(base_y));
      moonbitlang$core$array$$Array$push$3$(username$meowbloom$src$$slot_entities, slot);
      const icon = Milky2018$selene$style$$add_widget(slot, (zindex) => username$meowbloom$src$$empty_icon_sprite(zindex), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, username$meowbloom$src$$spawn_inventory_ui$46$constr$47$3305, username$meowbloom$src$$spawn_inventory_ui$46$constr$47$3306);
      moonbitlang$core$array$$Array$push$3$(username$meowbloom$src$$icon_entities, icon);
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  username$meowbloom$src$$inventory_initialized.val = true;
  username$meowbloom$src$$inventory_dirty.val = true;
}
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_zoom(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new(), 1024), 720), 1), 60), Milky2018$selene$plugins$$default_plugin), username$meowbloom$src$$background_render, username$meowbloom$src$$_main$46$constr$47$3319, undefined), username$meowbloom$src$$spawn_start_ui, undefined, undefined), username$meowbloom$src$$spawn_inventory_ui, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), username$meowbloom$src$$cat_spawn_system, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), username$meowbloom$src$$inventory_update_system, undefined, undefined), username$meowbloom$src$$plant_growth_system, undefined, undefined), username$meowbloom$src$$plant_hud_system, undefined, undefined), username$meowbloom$src$$planting_input_system, undefined, undefined), username$meowbloom$src$$code_console_toggle_system, undefined, undefined), username$meowbloom$src$$code_console_update_system, undefined, undefined), username$meowbloom$src$$cat_control_system, undefined, undefined));
})();
