const $9218868437227405312L = { hi: 2146435072, lo: 0 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
const Error$moonbitlang$47$core$47$string$46$CreatingViewError$46$IndexOutOfBounds = { $tag: 2 };
const Error$moonbitlang$47$core$47$string$46$CreatingViewError$46$InvalidIndex = { $tag: 1 };
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 0;
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
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
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $0L = { hi: 0, lo: 0 };
const moonbitlang$core$double$$Double$mod_ffi = (a, b) => (a % b);
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const Option$None$5$ = { $tag: 0 };
function Option$Some$5$(param0) {
  this._0 = param0;
}
Option$Some$5$.prototype.$tag = 1;
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
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
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
const Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element = (x) => x instanceof HTMLCanvasElement ? x : null;
const Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context = (x, id) => x.getContext(id);
const Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener = (target, type, listener) => target.addEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d = (value) => value instanceof CanvasRenderingContext2D ? value : null;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save = (x) => x.save();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore = (x) => x.restore();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale = (self,x,y) => self.scale(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style = (x,value) => x.fillStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_linear_gradient = (x,x0,y0,x1,y1) => x.createLinearGradient(x0,y0,x1,y1);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect = (self,x,y,w,h) => self.clearRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect = (self,x,y,w,h) => self.fillRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner = (self,text,x,y,maxWidth) => self.fillText(text,x,y,maxWidth);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font = (self,value) => self.font = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop = (self,offset,color) => self.addColorStop(offset,color);
const Yoorkin$rabbit$45$tea$dom$$document = () => document;
const Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id = (doc,id) => doc.getElementById(id);
const Milky2018$selene$backend$$document_add_event_listener = (event, callback) => { document.addEventListener(event, callback); };
const Milky2018$selene$backend$$is_pointer_locked = (canvas) => document.pointerLockElement === canvas;
const Milky2018$selene$backend$$request_pointer_lock = (elem) => elem.requestPointerLock();;
const Milky2018$selene$backend$$set_viewport_height = (x, y) => { x.height = y; };
const Milky2018$selene$backend$$set_viewport_width = (x, y) => { x.width = y; };
const Milky2018$selene$backend$$set_image_smoothing_enabled = (ctx, value) => ctx.imageSmoothingEnabled = value;;
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
const $64$Milky2018$47$selene$47$system$46$Schedule$Startup = { $tag: 0 };
const $64$Milky2018$47$selene$47$system$46$Schedule$Update = { $tag: 1 };
function $64$Milky2018$47$selene$47$system$46$Schedule$Render(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$tag = 2;
const moonbitlang$core$strconv$$base_err_str = "invalid base";
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$610 = "";
const Milky2018$selene$inputs$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$inputs$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$pacman$$dots = [];
const Milky2018$pacman$$ghosts = [];
const Milky2018$pacman$$level1 = [[1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 3, 0, 0, 1, 0, 0, 0, 1], [1, 0, 1, 2, 0, 2, 1, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 1, 0, 0, 0, 1, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]];
const Milky2018$pacman$$level2 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 2, 1, 2, 0, 1, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1], [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1], [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1], [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
const Milky2018$pacman$$player_state = { x: 0, y: 0, angle: 0 };
const Milky2018$pacman$$levels = [Milky2018$pacman$$level1, Milky2018$pacman$$level2];
const Milky2018$pacman$$current_level = moonbitlang$core$ref$$Ref$new$0$(0);
const Milky2018$selene$inputs$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$1$(8);
const Milky2018$selene$backend$$window = Yoorkin$rabbit$45$tea$dom$$window();
const Milky2018$selene$backend$$canvas_backend = Milky2018$selene$backend$$CanvasBackend$new();
const Milky2018$selene$backend$$audio_cache = moonbitlang$core$builtin$$Map$new$46$inner$2$(8);
const Milky2018$pacman$$completed_all_levels = moonbitlang$core$ref$$Ref$new$3$(false);
const Milky2018$selene$system$$mouse_locked = moonbitlang$core$ref$$Ref$new$3$(false);
const Milky2018$pacman$$stone_texture = Milky2018$pacman$$create_stone_texture();
const Milky2018$pacman$$brick_texture = Milky2018$pacman$$create_brick_texture();
const moonbitlang$core$double$$infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405312L);
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$0$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$6$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$7$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$8$(msg) {
  return $panic();
}
function moonbitlang$core$ref$$Ref$new$0$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$3$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$9$(x) {
  return { val: x };
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
function moonbitlang$core$array$$bubble_sort_by$4$(arr, cmp) {
  const _end1071 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1071) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$4$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$4$(arr, j)) > 0) {
          moonbitlang$core$array$$ArrayView$swap$4$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$ArrayView$rev_inplace$4$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$4$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$32(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(moonbitlang$core$array$$ArrayView$at$4$(arr, a), moonbitlang$core$array$$ArrayView$at$4$(arr, b)) > 0) {
    moonbitlang$core$array$$ArrayView$swap$4$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$33(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$32(_env, a, b);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$32(_env, b, c);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$32(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot_by$4$(arr, cmp) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$33(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$33(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$33(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$33(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$4$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$sift_down_by$4$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$ArrayView$at$4$(arr, child), moonbitlang$core$array$$ArrayView$at$4$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$ArrayView$at$4$(arr, index$2), moonbitlang$core$array$$ArrayView$at$4$(arr, child)) >= 0) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$4$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort_by$4$(arr, cmp) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down_by$4$(arr, i, cmp);
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
      moonbitlang$core$array$$ArrayView$swap$4$(arr, 0, i);
      moonbitlang$core$array$$sift_down_by$4$(moonbitlang$core$array$$ArrayView$sub$46$inner$4$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$partition_by$4$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$4$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$at$4$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1064 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1064) {
      if (cmp(moonbitlang$core$array$$ArrayView$at$4$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$4$(arr, i, j);
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
  moonbitlang$core$array$$ArrayView$swap$4$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$try_bubble_sort_by$4$(arr, cmp) {
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
        if (j > 0 && cmp(moonbitlang$core$array$$ArrayView$at$4$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$at$4$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$4$(arr, j, j - 1 | 0);
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
function moonbitlang$core$array$$quick_sort_by$4$(arr, cmp, pred, limit) {
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
        moonbitlang$core$array$$bubble_sort_by$4$(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort_by$4$(arr$2, cmp);
      return undefined;
    }
    const _bind = moonbitlang$core$array$$choose_pivot_by$4$(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort_by$4$(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = moonbitlang$core$array$$partition_by$4$(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    was_partitioned = _partitioned;
    const _p$2 = len - _pivot | 0;
    balanced = (_pivot > _p$2 ? _p$2 : _pivot) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$3 = pred$2;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$ArrayView$at$4$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$ArrayView$at$4$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$sub$46$inner$4$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$sub$46$inner$4$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$sub$46$inner$4$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort_by$4$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$at$4$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort_by$4$(right, cmp, moonbitlang$core$array$$ArrayView$at$4$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$10$(self, map) {
  moonbitlang$core$array$$quick_sort_by$4$({ buf: self, start: 0, len: self.length }, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$strconv$$base_err$11$() {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$base_err_str));
}
function moonbitlang$core$strconv$$check_and_consume_base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$2 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$3 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$4 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$5 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$6 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$0$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$0$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$0$({ _0: 2, _1: rest, _2: true });
    }
    return new Result$Ok$0$({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$2 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$3 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$4 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$5 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$6 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$0$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$0$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$0$({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new Result$Ok$0$({ _0: base, _1: view, _2: false }) : moonbitlang$core$strconv$$base_err$11$();
  }
}
function moonbitlang$core$strconv$$range_err$7$() {
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$range_err$12$() {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$0$() {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$12$() {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$overflow_threshold(base, neg) {
  return !neg ? (base === 10 ? moonbitlang$core$builtin$$Add$add$12$(moonbitlang$core$builtin$$Div$div$12$($9223372036854775807L, $10L), $1L) : base === 16 ? moonbitlang$core$builtin$$Add$add$12$(moonbitlang$core$builtin$$Div$div$12$($9223372036854775807L, $16L), $1L) : moonbitlang$core$builtin$$Add$add$12$(moonbitlang$core$builtin$$Div$div$12$($9223372036854775807L, moonbitlang$core$int$$Int$to_int64(base)), $1L)) : base === 10 ? moonbitlang$core$builtin$$Div$div$12$($_9223372036854775808L, $10L) : base === 16 ? moonbitlang$core$builtin$$Div$div$12$($_9223372036854775808L, $16L) : moonbitlang$core$builtin$$Div$div$12$($_9223372036854775808L, moonbitlang$core$int$$Int$to_int64(base));
}
function moonbitlang$core$strconv$$parse_int64$46$inner(str, base) {
  if (moonbitlang$core$builtin$$op_notequal$6$(str, { str: moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$610, start: 0, end: moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$610.length })) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _bind$2 = moonbitlang$core$string$$StringView$view$46$inner(str, 0, undefined);
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$2.str;
              const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$2;
              if (_bind$3 === undefined) {
                _tmp$2 = _bind$2.end;
              } else {
                const _Some = _bind$3;
                _tmp$2 = _Some;
              }
              const _tmp$3 = _tmp$2;
              const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$2.end };
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$4 = _bind$2.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$5;
              if (_bind$4 === undefined) {
                _tmp$5 = _bind$2.end;
              } else {
                const _Some = _bind$4;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$2.end };
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _neg = _bind._0;
    const _rest = _bind._1;
    const _bind$2 = moonbitlang$core$strconv$$check_and_consume_base(_rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest$2 = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = moonbitlang$core$strconv$$overflow_threshold(_num_base, _neg);
    let has_digit;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$2;
        const _param_1 = _tmp$3;
        const _param_2 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$12$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _tmp$5 = _param_0.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$6;
              if (_bind$4 === undefined) {
                _tmp$6 = _param_0.end;
              } else {
                const _Some = _bind$4;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$4 = moonbitlang$core$strconv$$syntax_err$12$();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _tmp$5 = _param_0.str;
                  const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = _param_0.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _tmp$7 = _tmp$6;
                  const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param_0.str;
                const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = _param_0.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _tmp$7 = _tmp$6;
                const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$0$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (moonbitlang$core$builtin$$op_ge$12$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Sub$sub$12$(moonbitlang$core$builtin$$Mul$mul$12$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_le$12$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$12$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$12$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (moonbitlang$core$builtin$$op_lt$12$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Add$add$12$(moonbitlang$core$builtin$$Mul$mul$12$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_ge$12$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$12$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$12$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = moonbitlang$core$strconv$$syntax_err$12$();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new Result$Ok$2$(_tmp);
    } else {
      return moonbitlang$core$strconv$$syntax_err$12$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$12$();
  }
}
function moonbitlang$core$strconv$$parse_int$46$inner(str, base) {
  const _bind = moonbitlang$core$strconv$$parse_int64$46$inner(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (moonbitlang$core$builtin$$op_lt$12$(n, moonbitlang$core$int$$Int$to_int64(-2147483648)) || moonbitlang$core$builtin$$op_gt$12$(n, moonbitlang$core$int$$Int$to_int64(2147483647))) {
    const _bind$2 = moonbitlang$core$strconv$$range_err$7$();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new Result$Ok$3$(moonbitlang$core$int64$$Int64$to_int(n));
}
function moonbitlang$core$math$$sin(_tmp) {
  return Math.sin(_tmp);
}
function moonbitlang$core$math$$cos(_tmp) {
  return Math.cos(_tmp);
}
function moonbitlang$core$math$$tan(_tmp) {
  return Math.tan(_tmp);
}
function moonbitlang$core$math$$atan2(_tmp, _tmp$2) {
  return Math.atan2(_tmp, _tmp$2);
}
function moonbitlang$core$double$$Double$floor(_tmp) {
  return Math.floor(_tmp);
}
function moonbitlang$core$builtin$$Mod$mod$13$(self, other) {
  return moonbitlang$core$double$$Double$mod_ffi(self, other);
}
function moonbitlang$core$string$$StringView$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : moonbitlang$core$abort$$abort$6$("Invalid index for View");
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
    return moonbitlang$core$abort$$abort$8$("Invalid start index");
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
          moonbitlang$core$abort$$abort$7$("invalid surrogate pair");
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
          moonbitlang$core$abort$$abort$7$("invalid surrogate pair");
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
function moonbitlang$core$builtin$$Show$to_string$6$(self) {
  return self.str.substring(self.start, self.end);
}
function moonbitlang$core$builtin$$Eq$equal$6$(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = self.str;
        const _tmp$3 = self.start + i | 0;
        const _tmp$4 = _tmp$2.charCodeAt(_tmp$3);
        const _tmp$5 = other.str;
        const _tmp$6 = other.start + i | 0;
        if (_tmp$4 === _tmp$5.charCodeAt(_tmp$6)) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$String$sub$46$inner(self, start, end) {
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
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    let _tmp;
    if (start$2 < len) {
      const _p = self.charCodeAt(start$2);
      _tmp = 56320 <= _p && _p <= 57343;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      return new Result$Err$4$(Error$moonbitlang$47$core$47$string$46$CreatingViewError$46$InvalidIndex);
    }
    let _tmp$2;
    if (end$2 < len) {
      const _p = self.charCodeAt(end$2);
      _tmp$2 = 56320 <= _p && _p <= 57343;
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      return new Result$Err$4$(Error$moonbitlang$47$core$47$string$46$CreatingViewError$46$InvalidIndex);
    }
    return new Result$Ok$4$({ str: self, start: start$2, end: end$2 });
  } else {
    return new Result$Err$4$(Error$moonbitlang$47$core$47$string$46$CreatingViewError$46$IndexOutOfBounds);
  }
}
function moonbitlang$core$set$$Set$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$set$$Set$add_entry_to_tail$1$(self, idx, entry) {
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
function moonbitlang$core$set$$Set$set_entry$1$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$push_away$1$(self, idx, entry) {
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
      moonbitlang$core$set$$Set$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$1$(self, entry$2, idx$2);
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
function moonbitlang$core$set$$Set$add_with_hash$1$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$1$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$1$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$1$(self, idx, _curr_entry);
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
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$1$(self) {
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
      moonbitlang$core$set$$Set$add_with_hash$1$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$1$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$1$(self, key, moonbitlang$core$builtin$$Hash$hash$14$(key));
}
function moonbitlang$core$set$$Set$contains$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$14$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$1$(_entry.key, key)) {
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
function moonbitlang$core$set$$Set$remove_entry$1$(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
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
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$1$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$1$(self, _x, idx$2);
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
function moonbitlang$core$set$$Set$remove$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$14$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$1$(_entry.key, key)) {
        moonbitlang$core$set$$Set$remove_entry$1$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$1$(self, idx);
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
function moonbitlang$core$builtin$$op_ge$12$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$12$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_le$12$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$12$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_lt$12$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$12$(self_, other) < 0;
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$15$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$12$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$12$(self_, other) > 0;
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
function moonbitlang$core$builtin$$op_notequal$6$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$6$(x, y);
}
function moonbitlang$core$array$$Array$at$16$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$0$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
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
function moonbitlang$core$builtin$$Logger$write_string$15$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$1$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$1$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$19$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$19$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$14$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$1$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$21$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$19$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
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
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$0$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$15$, method_1: moonbitlang$core$builtin$$Logger$write_substring$15$, method_2: moonbitlang$core$builtin$$Logger$write_char$15$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
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
function moonbitlang$core$builtin$$Logger$write_substring$15$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$option$$Option$unwrap$22$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$23$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$24$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$25$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$set_entry$2$(self, entry, new_idx) {
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
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
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
function moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$2$(self);
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
        moonbitlang$core$builtin$$Map$push_away$2$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, _idx, entry);
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
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$21$(key));
}
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$21$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return Option$None$5$;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$5$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$5$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$array$$Array$push$20$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$17$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$4$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$26$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$27$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$28$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$29$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$30$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$19$(self, value) {
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
function moonbitlang$core$builtin$$Add$add$31$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$31$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$31$(self, other) {
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
function moonbitlang$core$builtin$$Div$div$31$(self, other) {
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
}
function moonbitlang$core$builtin$$Add$add$12$(self, other) {
  return moonbitlang$core$builtin$$Add$add$31$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$12$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$31$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$12$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$31$(self, other);
}
function moonbitlang$core$builtin$$Div$div$12$(self, other) {
  return moonbitlang$core$builtin$$Div$div$31$(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$12$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
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
function moonbitlang$core$builtin$$Hash$hash_combine$19$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$19$(input) {
  console.log(input);
}
function moonbitlang$core$array$$ArrayView$at$4$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$4$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$0$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$0$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$swap$4$(self, i, j) {
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
    moonbitlang$core$abort$$abort$7$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$0$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$0$(i)}, ${moonbitlang$core$builtin$$Show$to_string$0$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$sub$46$inner$4$(self, start, end) {
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$5$("View index out of bounds");
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$20$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$17$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$set$20$(self, index, value) {
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
function moonbitlang$core$array$$Array$clear$20$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$20$(self, 0);
}
function moonbitlang$core$array$$Array$clear$17$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$17$(self, 0);
}
function Milky2018$selene$math$$Vec2D$op_get(this_, axis) {
  if (axis === 0) {
    return this_._0;
  } else {
    return this_._1;
  }
}
function Milky2018$selene$math$$normalize_angle(angle) {
  const angle$2 = moonbitlang$core$builtin$$Mod$mod$13$(angle, 6.28318530717958623);
  return angle$2 < 0 ? angle$2 + 6.28318530717958623 : angle$2;
}
function moonbitlang$core$builtin$$Eq$equal$1$(_x_29, _x_30) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$1$(_x_21, _x_22) {
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
  return moonbitlang$core$set$$Set$contains$1$(Milky2018$selene$inputs$$pressed_keys, code);
}
function rami3l$js$45$ffi$js$$Union3$from0$32$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from1$32$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$33$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$25$(self);
}
function rami3l$js$45$ffi$js$$Optional$undefined$13$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$34$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$34$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$34$(self)) {
    moonbitlang$core$abort$$abort$7$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$22$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$23$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$24$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$8$(self) : Option$None$8$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$25$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$9$(self) : Option$None$9$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$35$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$35$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$35$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$35$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$35$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$36$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$37$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$38$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$24$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$39$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$23$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$39$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$22$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$25$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$25$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$13$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$backend$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$24$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$38$(rami3l$js$45$ffi$js$$Nullable$unwrap$34$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$25$(rami3l$js$45$ffi$js$$Union5$to0$33$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind = { _0: 0, _1: 0 };
  const _bind$2 = moonbitlang$core$ref$$Ref$new$9$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind, zoom: 1, time_scale: 1, mouse_movement: _bind$2 };
}
function Milky2018$selene$backend$$register_mouse_events(mouse, mouse_movement) {
  Milky2018$selene$backend$$canvas_backend.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$36$(Milky2018$selene$backend$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$23$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$39$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$35$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$35$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$35$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$35$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$36$(Milky2018$selene$backend$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$23$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$39$(event));
    const _bind = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$35$(mouse_event);
    switch (_bind) {
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$36$(Milky2018$selene$backend$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$23$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$39$(event));
    const _bind = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$35$(mouse_event);
    switch (_bind) {
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
function Milky2018$selene$backend$$lock_mouse(locked) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$37$(Milky2018$selene$backend$$canvas_backend.canvas, "click", (_event) => {
    Milky2018$selene$backend$$request_pointer_lock(Milky2018$selene$backend$$canvas_backend.canvas);
  });
  Milky2018$selene$backend$$document_add_event_listener("pointerlockchange", (_event) => {
    locked.val = Milky2018$selene$backend$$is_pointer_locked(Milky2018$selene$backend$$canvas_backend.canvas);
  });
}
function Milky2018$selene$backend$$register_key_events(pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$36$(Milky2018$selene$backend$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$22$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$39$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$1$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$36$(Milky2018$selene$backend$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$22$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$39$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$add$1$(pressed_keys, _c);
      return;
    }
  });
}
function Milky2018$selene$backend$$draw_text(text, x, y, font, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(context, font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$32$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, text, x, y, Option$None$10$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_color_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$32$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_gradient_rect(x, y, width, height, color_start, color_end) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  const gradient = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_linear_gradient(context, x, y, x + width, y + height);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 0, color_start);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 1, color_end);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from1$32$(gradient));
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
    moonbitlang$core$builtin$$println$19$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
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
    const _bind = Milky2018$selene$backend$$canvas_backend.mouse_movement.val;
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _mouse_movement = _Some;
      _mouse_movement.movement = { _0: 0, _1: 0 };
      return;
    }
  });
  return () => {
  };
}
function Milky2018$selene$backend$$get_audio(path) {
  const _bind = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$backend$$audio_cache, path);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _audio = _Some._0;
    return _audio;
  }
  const audio = Milky2018$selene$backend$$Audio$new(path);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$backend$$audio_cache, path, audio);
  return audio;
}
function Milky2018$selene$backend$$play_audio(audio_path, volume, loop_) {
  const audio = Milky2018$selene$backend$$get_audio(audio_path);
  Milky2018$selene$backend$$Audio$set_volume(audio, volume);
  Milky2018$selene$backend$$Audio$set_loop(audio, loop_);
  Milky2018$selene$backend$$Audio$play(audio);
}
function Milky2018$selene$system$$lock_mouse() {
  Milky2018$selene$backend$$lock_mouse(Milky2018$selene$system$$mouse_locked);
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
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$0$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$27$(systems, { _0: system, _1: schedule, _2: system_name$2 });
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
        const _bind = system._1;
        if (_bind.$tag === 0) {
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
      const _bind = system._1;
      if (_bind.$tag === 2) {
        const _Render = _bind;
        const _pri = _Render._0;
        moonbitlang$core$array$$Array$push$4$(renders, { _0: system._0, _1: _pri });
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$sort_by_key$10$(renders, (system) => -system._1 | 0);
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
      const _bind = system._1;
      if (_bind.$tag === 1) {
        moonbitlang$core$array$$Array$push$26$(game_loops, system._0);
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
function Milky2018$selene$audio$$play_audio$46$inner(audio_path, volume, loop_) {
  Milky2018$selene$backend$$play_audio(audio_path, volume, loop_);
}
function Milky2018$pacman$$create_brick_texture() {
  const pixels = [];
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < 64) {
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < 64) {
          const variation = (x + y | 0) % 3 | 0;
          let color;
          switch (variation) {
            case 0: {
              color = "#8B4513";
              break;
            }
            case 1: {
              color = "#A0522D";
              break;
            }
            default: {
              color = "#CD853F";
            }
          }
          moonbitlang$core$array$$Array$push$19$(pixels, color);
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { width: 64, height: 64, pixels: pixels };
}
function Milky2018$pacman$$create_stone_texture() {
  const pixels = [];
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < 64) {
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < 64) {
          const seed = (Math.imul(x, 31) | 0) + (Math.imul(y, 17) | 0) | 0;
          const noise = seed % 100 | 0;
          const base_color = noise < 20 ? "#708090" : noise < 40 ? "#778899" : noise < 60 ? "#696969" : noise < 80 ? "#808080" : "#A9A9A9";
          moonbitlang$core$array$$Array$push$19$(pixels, base_color);
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { width: 64, height: 64, pixels: pixels };
}
function Milky2018$pacman$$get_texture_pixel(texture, x, y) {
  const wrapped_x = x % texture.width | 0;
  const wrapped_y = y % texture.height | 0;
  const index = (Math.imul(wrapped_y, texture.width) | 0) + wrapped_x | 0;
  return moonbitlang$core$array$$Array$at$19$(texture.pixels, index);
}
function Milky2018$pacman$$get_wall_texture(wall_type) {
  if (wall_type === 1) {
    return Milky2018$pacman$$brick_texture;
  } else {
    return Milky2018$pacman$$stone_texture;
  }
}
function Milky2018$pacman$$get_map() {
  return moonbitlang$core$array$$Array$at$18$(Milky2018$pacman$$levels, Milky2018$pacman$$current_level.val);
}
function Milky2018$pacman$$is_wall(x, y) {
  const map_x = moonbitlang$core$double$$Double$to_int(moonbitlang$core$double$$Double$floor(x / 64));
  const map_y = moonbitlang$core$double$$Double$to_int(moonbitlang$core$double$$Double$floor(y / 64));
  const map = Milky2018$pacman$$get_map();
  if (map_x < 0 || (map_x >= moonbitlang$core$array$$Array$at$16$(map, 0).length || (map_y < 0 || map_y >= map.length))) {
    return true;
  }
  return moonbitlang$core$array$$Array$at$0$(moonbitlang$core$array$$Array$at$16$(map, map_y), map_x) === 1;
}
function Milky2018$pacman$$cast_ray(angle) {
  const start_x = Milky2018$pacman$$player_state.x;
  const start_y = Milky2018$pacman$$player_state.y;
  const ray_dir_x = moonbitlang$core$math$$cos(angle);
  const ray_dir_y = moonbitlang$core$math$$sin(angle);
  const delta_dist_x = ray_dir_x !== 0 ? Math.abs(1 / ray_dir_x) : moonbitlang$core$double$$infinity;
  const delta_dist_y = ray_dir_y !== 0 ? Math.abs(1 / ray_dir_y) : moonbitlang$core$double$$infinity;
  let map_x = moonbitlang$core$double$$Double$floor(start_x / 64);
  let map_y = moonbitlang$core$double$$Double$floor(start_y / 64);
  const step_x = ray_dir_x < 0 ? -1 : 1;
  const step_y = ray_dir_y < 0 ? -1 : 1;
  let side_dist_x = ray_dir_x < 0 ? (start_x / 64 - map_x) * delta_dist_x : (map_x + 1 - start_x / 64) * delta_dist_x;
  let side_dist_y = ray_dir_y < 0 ? (start_y / 64 - map_y) * delta_dist_y : (map_y + 1 - start_y / 64) * delta_dist_y;
  let hit = false;
  let side = 0;
  while (true) {
    if (!hit) {
      if (side_dist_x < side_dist_y) {
        side_dist_x = side_dist_x + delta_dist_x;
        map_x = map_x + step_x;
        side = 0;
      } else {
        side_dist_y = side_dist_y + delta_dist_y;
        map_y = map_y + step_y;
        side = 1;
      }
      if (Milky2018$pacman$$is_wall(map_x * 64, map_y * 64)) {
        hit = true;
      }
      if (Math.abs(map_x - start_x / 64) > 12.5 || Math.abs(map_y - start_y / 64) > 12.5) {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const _bind = side;
  let perp_wall_dist;
  if (_bind === 0) {
    perp_wall_dist = (map_x - start_x / 64 + (1 - step_x) / 2) / ray_dir_x;
  } else {
    perp_wall_dist = (map_y - start_y / 64 + (1 - step_y) / 2) / ray_dir_y;
  }
  const distance = perp_wall_dist * 64;
  const wall_hit_x = start_x + perp_wall_dist * ray_dir_x;
  const wall_hit_y = start_y + perp_wall_dist * ray_dir_y;
  const _bind$2 = side;
  let wall_x;
  if (_bind$2 === 0) {
    wall_x = wall_hit_y / 64;
  } else {
    wall_x = wall_hit_x / 64;
  }
  const wall_x$2 = wall_x - moonbitlang$core$double$$Double$floor(wall_x);
  const hit_dots = [];
  const _len = Milky2018$pacman$$dots.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const dot = Milky2018$pacman$$dots[_i];
      if (!dot.collected) {
        const dot_dx = dot.x - start_x;
        const dot_dy = dot.y - start_y;
        const dot_distance = Math.sqrt(dot_dx * dot_dx + dot_dy * dot_dy);
        const dot_angle = moonbitlang$core$math$$atan2(dot_dy, dot_dx);
        const view_angle = moonbitlang$core$math$$atan2(4, dot_distance);
        const angle_diff = Math.abs(dot_angle - angle);
        const _p = 6.28318530717958623 - angle_diff;
        const angle_diff$2 = angle_diff > _p ? _p : angle_diff;
        if (angle_diff$2 < view_angle && dot_distance < distance) {
          moonbitlang$core$array$$Array$push$29$(hit_dots, { _0: dot_distance, _1: angle_diff$2 });
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const hit_ghosts = [];
  const _len$2 = Milky2018$pacman$$ghosts.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const ghost = Milky2018$pacman$$ghosts[_i];
      const ghost_dx = ghost.x - start_x;
      const ghost_dy = ghost.y - start_y;
      const ghost_distance = Math.sqrt(ghost_dx * ghost_dx + ghost_dy * ghost_dy);
      const ghost_angle = moonbitlang$core$math$$atan2(ghost_dy, ghost_dx);
      const view_angle = moonbitlang$core$math$$atan2(20, ghost_distance);
      const angle_diff = Math.abs(ghost_angle - angle);
      const _p = 6.28318530717958623 - angle_diff;
      const angle_diff$2 = angle_diff > _p ? _p : angle_diff;
      if (angle_diff$2 < view_angle && ghost_distance < distance) {
        moonbitlang$core$array$$Array$push$30$(hit_ghosts, { _0: _i, _1: ghost_distance, _2: angle_diff$2 });
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { distance: distance, side: side, wall_x: wall_x$2, hit_dots: hit_dots, hit_ghosts: hit_ghosts };
}
function Milky2018$pacman$$cast_all_rays() {
  const rays = [];
  const num_rays = moonbitlang$core$double$$Double$to_int(320);
  const angle_step = 1.04719755119659763 / (num_rays + 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < num_rays) {
      const ray_angle = Milky2018$selene$math$$normalize_angle(Milky2018$pacman$$player_state.angle - 0.523598775598298816 + (i + 0) * angle_step);
      const ray_info = Milky2018$pacman$$cast_ray(ray_angle);
      const angle_diff = ray_angle - Milky2018$pacman$$player_state.angle;
      moonbitlang$core$array$$Array$push$28$(rays, { distance: ray_info.distance * moonbitlang$core$math$$cos(angle_diff), side: ray_info.side, wall_x: ray_info.wall_x, hit_dots: ray_info.hit_dots, hit_ghosts: ray_info.hit_ghosts });
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return rays;
}
function Milky2018$pacman$$render_3d_system(_delta) {
  const rays = Milky2018$pacman$$cast_all_rays();
  Milky2018$selene$backend$$draw_gradient_rect(0, 0, 640, 240, "#2A2A2A", "#1E1E1E");
  Milky2018$selene$backend$$draw_gradient_rect(0, 240, 640, 240, "#2F4F2F", "#1A3A1A");
  const strip_width = 640 / (rays.length + 0);
  const _len = rays.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const ray = rays[_i];
      const wall_height = 64000 / ray.distance;
      const wall_top = (480 - wall_height) / 2;
      const strip_x = (_i + 0) * strip_width;
      const texture = Milky2018$pacman$$get_wall_texture(1);
      const segment_height = wall_height / (16 + 0);
      const texture_y_scale = (texture.height + 0) / 64;
      let _tmp$2 = 0;
      while (true) {
        const segment = _tmp$2;
        if (segment < 16) {
          const segment_y = wall_top + (segment + 0) * segment_height;
          const world_y_offset = (segment + 0) * 64 / (16 + 0);
          const texture_y = moonbitlang$core$double$$Double$to_int(world_y_offset * texture_y_scale) % texture.height | 0;
          const texture_color = Milky2018$pacman$$get_texture_pixel(texture, 32, texture_y);
          const _p = 0.3;
          const _p$2 = 1 - ray.distance / 400;
          const shading_factor = _p > _p$2 ? _p : _p$2;
          const _bind = ray.side;
          let side_factor;
          if (_bind === 0) {
            side_factor = 1;
          } else {
            side_factor = 0.8;
          }
          const final_shading = shading_factor * side_factor;
          let _tmp$3;
          let _try_err;
          _L: {
            _L$2: {
              const _bind$2 = moonbitlang$core$string$$String$sub$46$inner(texture_color, 1, 3);
              let _tmp$4;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp$4 = _ok._0;
              } else {
                const _err = _bind$2;
                const _tmp$5 = _err._0;
                _try_err = _tmp$5;
                break _L$2;
              }
              const _bind$3 = moonbitlang$core$builtin$$Show$to_string$6$(_tmp$4);
              const _bind$4 = moonbitlang$core$strconv$$parse_int$46$inner({ str: _bind$3, start: 0, end: _bind$3.length }, 16);
              let _tmp$5;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp$5 = _ok._0;
              } else {
                const _err = _bind$4;
                const _tmp$6 = _err._0;
                _try_err = _tmp$6;
                break _L$2;
              }
              _tmp$3 = (_tmp$5 + 0) * final_shading;
              break _L;
            }
            _tmp$3 = $panic();
          }
          const r = moonbitlang$core$double$$Double$to_int(_tmp$3);
          let _tmp$4;
          let _try_err$2;
          _L$2: {
            _L$3: {
              const _bind$2 = moonbitlang$core$string$$String$sub$46$inner(texture_color, 3, 5);
              let _tmp$5;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp$5 = _ok._0;
              } else {
                const _err = _bind$2;
                const _tmp$6 = _err._0;
                _try_err$2 = _tmp$6;
                break _L$3;
              }
              const _bind$3 = moonbitlang$core$builtin$$Show$to_string$6$(_tmp$5);
              const _bind$4 = moonbitlang$core$strconv$$parse_int$46$inner({ str: _bind$3, start: 0, end: _bind$3.length }, 16);
              let _tmp$6;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp$6 = _ok._0;
              } else {
                const _err = _bind$4;
                const _tmp$7 = _err._0;
                _try_err$2 = _tmp$7;
                break _L$3;
              }
              _tmp$4 = (_tmp$6 + 0) * final_shading;
              break _L$2;
            }
            _tmp$4 = $panic();
          }
          const g = moonbitlang$core$double$$Double$to_int(_tmp$4);
          let _tmp$5;
          let _try_err$3;
          _L$3: {
            _L$4: {
              const _bind$2 = moonbitlang$core$string$$String$sub$46$inner(texture_color, 5, 7);
              let _tmp$6;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp$6 = _ok._0;
              } else {
                const _err = _bind$2;
                const _tmp$7 = _err._0;
                _try_err$3 = _tmp$7;
                break _L$4;
              }
              const _bind$3 = moonbitlang$core$builtin$$Show$to_string$6$(_tmp$6);
              const _bind$4 = moonbitlang$core$strconv$$parse_int$46$inner({ str: _bind$3, start: 0, end: _bind$3.length }, 16);
              let _tmp$7;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp$7 = _ok._0;
              } else {
                const _err = _bind$4;
                const _tmp$8 = _err._0;
                _try_err$3 = _tmp$8;
                break _L$4;
              }
              _tmp$5 = (_tmp$7 + 0) * final_shading;
              break _L$3;
            }
            _tmp$5 = $panic();
          }
          const b = moonbitlang$core$double$$Double$to_int(_tmp$5);
          const shaded_color = `rgb(${moonbitlang$core$builtin$$Show$to_string$0$(r)}, ${moonbitlang$core$builtin$$Show$to_string$0$(g)}, ${moonbitlang$core$builtin$$Show$to_string$0$(b)})`;
          Milky2018$selene$backend$$draw_color_rect(strip_x, segment_y, strip_width + 1, segment_height + 1, shaded_color);
          _tmp$2 = segment + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _len$2 = rays.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const ray = rays[_i];
      const _arr = ray.hit_dots;
      const _len$3 = _arr.length;
      let _tmp$3 = 0;
      while (true) {
        const _i$2 = _tmp$3;
        if (_i$2 < _len$3) {
          const dot = _arr[_i$2];
          const _distance = dot._0;
          const _angle_diff = dot._1;
          const strip_x = (_i + 0) * strip_width;
          const center_x = strip_x + (strip_width + 1) / 2;
          const x = _distance * moonbitlang$core$math$$tan(_angle_diff);
          const h = Math.sqrt(16 - x * x);
          const dot_height = h * 1.3 * 1000 / _distance;
          const y_offset = 24000 / _distance;
          const dot_top = (480 - dot_height + y_offset) / 2;
          Milky2018$selene$backend$$draw_color_rect(center_x, dot_top, strip_width + 1, dot_height, "#FFFF00");
          _tmp$3 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _len$3 = rays.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len$3) {
      const ray = rays[_i];
      const _arr = ray.hit_ghosts;
      const _len$4 = _arr.length;
      let _tmp$4 = 0;
      while (true) {
        const _i$2 = _tmp$4;
        if (_i$2 < _len$4) {
          const ghost_hit = _arr[_i$2];
          const _ghost_index = ghost_hit._0;
          const _distance = ghost_hit._1;
          const _angle_diff = ghost_hit._2;
          const strip_x = (_i + 0) * strip_width;
          const center_x = strip_x + (strip_width + 1) / 2;
          const x = _distance * moonbitlang$core$math$$tan(_angle_diff);
          const h = Math.sqrt(400 - x * x);
          const ghost_height = h * 1.3 * 1000 / _distance;
          const ghost_top = (480 - ghost_height) / 2;
          const ghost_color = moonbitlang$core$array$$Array$at$17$(Milky2018$pacman$$ghosts, _ghost_index).color;
          Milky2018$selene$backend$$draw_color_rect(center_x - (strip_width + 1) / 2, ghost_top, strip_width + 1, ghost_height, ghost_color);
          _tmp$4 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$pacman$$render_map_system(_delta) {
  const map = Milky2018$pacman$$get_map();
  const _end165 = map.length;
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < _end165) {
      const _end170 = moonbitlang$core$array$$Array$at$16$(map, y).length;
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < _end170) {
          const cell_x = 10 + (x + 0) * 6;
          const cell_y = 10 + (y + 0) * 6;
          if (moonbitlang$core$array$$Array$at$0$(moonbitlang$core$array$$Array$at$16$(map, y), x) === 1) {
            Milky2018$selene$backend$$draw_color_rect(cell_x, cell_y, 6, 6, "#8B4513");
          } else {
            Milky2018$selene$backend$$draw_color_rect(cell_x, cell_y, 6, 6, "#333333");
          }
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _len = Milky2018$pacman$$dots.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const dot = Milky2018$pacman$$dots[_i];
      if (!dot.collected) {
        const dot_map_x = 10 + dot.x / 64 * 6 - 2;
        const dot_map_y = 10 + dot.y / 64 * 6 - 2;
        Milky2018$selene$backend$$draw_color_rect(dot_map_x - 1, dot_map_y - 1, 4, 4, "#FFFF00");
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const player_map_x = 10 + Milky2018$pacman$$player_state.x / 64 * 6 - 2;
  const player_map_y = 10 + Milky2018$pacman$$player_state.y / 64 * 6 - 2;
  Milky2018$selene$backend$$draw_color_rect(player_map_x - 2, player_map_y - 2, 4, 4, "#00FF00");
  const _len$2 = Milky2018$pacman$$ghosts.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len$2) {
      const ghost = Milky2018$pacman$$ghosts[_i];
      const ghost_map_x = 10 + ghost.x / 64 * 6 - 2;
      const ghost_map_y = 10 + ghost.y / 64 * 6 - 2;
      Milky2018$selene$backend$$draw_color_rect(ghost_map_x - 1.5, ghost_map_y - 1.5, 4, 4, ghost.color);
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const level_text = `Level: ${moonbitlang$core$builtin$$Show$to_string$0$(Milky2018$pacman$$current_level.val + 1 | 0)}`;
  Milky2018$selene$backend$$draw_text(level_text, 500, 40, "36px Arial", "#FFFFFF");
  if (Milky2018$pacman$$completed_all_levels.val) {
    Milky2018$selene$backend$$draw_text("CONGRATULATIONS!", 150, 30, "32px Arial", "#00FF00");
    Milky2018$selene$backend$$draw_text("You completed all levels!", 200, 70, "20px Arial", "#00FF00");
    return;
  } else {
    return;
  }
}
function Milky2018$pacman$$init_player() {
  const map = Milky2018$pacman$$get_map();
  const _end92 = map.length;
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < _end92) {
      const _end97 = moonbitlang$core$array$$Array$at$16$(map, y).length;
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < _end97) {
          if (moonbitlang$core$array$$Array$at$0$(moonbitlang$core$array$$Array$at$16$(map, y), x) === 3) {
            Milky2018$pacman$$player_state.x = (x + 0 + 0.5) * 64;
            Milky2018$pacman$$player_state.y = (y + 0 + 0.5) * 64;
            Milky2018$pacman$$player_state.angle = 0;
            return undefined;
          }
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  Milky2018$pacman$$player_state.x = 96;
  Milky2018$pacman$$player_state.y = 96;
  Milky2018$pacman$$player_state.angle = 0;
}
function Milky2018$pacman$$can_move_to(x, y) {
  const corners = [{ _0: x - 16, _1: y - 16 }, { _0: x + 16, _1: y - 16 }, { _0: x - 16, _1: y + 16 }, { _0: x + 16, _1: y + 16 }];
  const _len = corners.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const corner_x_y = corners[_i];
      if (Milky2018$pacman$$is_wall(corner_x_y._0, corner_x_y._1)) {
        return false;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function Milky2018$pacman$$all_dots_collected() {
  const _len = Milky2018$pacman$$dots.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const dot = Milky2018$pacman$$dots[_i];
      if (!dot.collected) {
        return false;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function Milky2018$pacman$$collect_dot(index) {
  if (index < Milky2018$pacman$$dots.length) {
    const _bind = moonbitlang$core$array$$Array$at$20$(Milky2018$pacman$$dots, index);
    moonbitlang$core$array$$Array$set$20$(Milky2018$pacman$$dots, index, { x: _bind.x, y: _bind.y, collected: true });
    Milky2018$selene$audio$$play_audio$46$inner("assets/coin.wav", 1, false);
    return;
  } else {
    return;
  }
}
function Milky2018$pacman$$get_dot_at(x, y, radius) {
  const _len = Milky2018$pacman$$dots.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const dot = Milky2018$pacman$$dots[_i];
      if (!dot.collected) {
        const dx = dot.x - x;
        const dy = dot.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < radius) {
          return _i;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function Milky2018$pacman$$next_level() {
  Milky2018$pacman$$current_level.val = Milky2018$pacman$$current_level.val + 1 | 0;
  if (Milky2018$pacman$$current_level.val >= Milky2018$pacman$$levels.length) {
    Milky2018$pacman$$completed_all_levels.val = true;
    Milky2018$pacman$$current_level.val = 0;
    return;
  } else {
    return;
  }
}
function Milky2018$pacman$$init_dots() {
  moonbitlang$core$array$$Array$clear$20$(Milky2018$pacman$$dots);
  const map = Milky2018$pacman$$get_map();
  const _end21 = map.length;
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < _end21) {
      const _end26 = moonbitlang$core$array$$Array$at$16$(map, y).length;
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < _end26) {
          if (moonbitlang$core$array$$Array$at$0$(moonbitlang$core$array$$Array$at$16$(map, y), x) === 0) {
            const dot_x = (x + 0 + 0.5) * 64;
            const dot_y = (y + 0 + 0.5) * 64;
            moonbitlang$core$array$$Array$push$20$(Milky2018$pacman$$dots, { x: dot_x, y: dot_y, collected: false });
          }
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$pacman$$get_random_direction() {
  const seed = moonbitlang$core$double$$Double$to_int(Milky2018$pacman$$player_state.x + Milky2018$pacman$$player_state.y);
  const random = ((Math.imul(seed, 1103515245) | 0) + 12345 | 0) % 4 | 0;
  switch (random) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 2;
    }
    default: {
      return 3;
    }
  }
}
function Milky2018$pacman$$init_ghosts() {
  moonbitlang$core$array$$Array$clear$17$(Milky2018$pacman$$ghosts);
  const map = Milky2018$pacman$$get_map();
  const _end58 = map.length;
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < _end58) {
      const _end63 = moonbitlang$core$array$$Array$at$16$(map, y).length;
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < _end63) {
          if (moonbitlang$core$array$$Array$at$0$(moonbitlang$core$array$$Array$at$16$(map, y), x) === 2) {
            const spawn_x = (x + 0 + 0.5) * 64;
            const spawn_y = (y + 0 + 0.5) * 64;
            moonbitlang$core$array$$Array$push$17$(Milky2018$pacman$$ghosts, { x: spawn_x, y: spawn_y, direction: Milky2018$pacman$$get_random_direction(), color: "#FF0000" });
          }
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$pacman$$reset_level() {
  Milky2018$pacman$$init_dots();
  Milky2018$pacman$$init_ghosts();
  Milky2018$pacman$$init_player();
}
function Milky2018$pacman$$check_dot_collection() {
  const _bind = Milky2018$pacman$$get_dot_at(Milky2018$pacman$$player_state.x, Milky2018$pacman$$player_state.y, 20);
  if (_bind === undefined) {
    return;
  } else {
    const _Some = _bind;
    const _index = _Some;
    Milky2018$pacman$$collect_dot(_index);
    if (Milky2018$pacman$$all_dots_collected()) {
      Milky2018$pacman$$next_level();
      Milky2018$pacman$$reset_level();
      return;
    } else {
      return;
    }
  }
}
function Milky2018$pacman$$check_ghost_collision() {
  const player_x = Milky2018$pacman$$player_state.x;
  const player_y = Milky2018$pacman$$player_state.y;
  const _len = Milky2018$pacman$$ghosts.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const ghost = Milky2018$pacman$$ghosts[_i];
      const dx = ghost.x - player_x;
      const dy = ghost.y - player_y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 26) {
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
function Milky2018$pacman$$player_input_system(_delta) {
  let move_x = 0;
  let move_y = 0;
  if (Milky2018$selene$inputs$$is_pressed(22)) {
    move_x = move_x + moonbitlang$core$math$$cos(Milky2018$pacman$$player_state.angle) * 2;
    move_y = move_y + moonbitlang$core$math$$sin(Milky2018$pacman$$player_state.angle) * 2;
  }
  if (Milky2018$selene$inputs$$is_pressed(18)) {
    move_x = move_x - moonbitlang$core$math$$cos(Milky2018$pacman$$player_state.angle) * 2;
    move_y = move_y - moonbitlang$core$math$$sin(Milky2018$pacman$$player_state.angle) * 2;
  }
  if (Milky2018$selene$inputs$$is_pressed(0)) {
    move_x = move_x + moonbitlang$core$math$$cos(Milky2018$pacman$$player_state.angle - 1.57079632679489656) * 2;
    move_y = move_y + moonbitlang$core$math$$sin(Milky2018$pacman$$player_state.angle - 1.57079632679489656) * 2;
  }
  if (Milky2018$selene$inputs$$is_pressed(3)) {
    move_x = move_x + moonbitlang$core$math$$cos(Milky2018$pacman$$player_state.angle + 1.57079632679489656) * 2;
    move_y = move_y + moonbitlang$core$math$$sin(Milky2018$pacman$$player_state.angle + 1.57079632679489656) * 2;
  }
  const new_x = Milky2018$pacman$$player_state.x + move_x;
  const new_y = Milky2018$pacman$$player_state.y + move_y;
  if (Milky2018$pacman$$can_move_to(new_x, Milky2018$pacman$$player_state.y)) {
    Milky2018$pacman$$player_state.x = new_x;
  }
  if (Milky2018$pacman$$can_move_to(Milky2018$pacman$$player_state.x, new_y)) {
    Milky2018$pacman$$player_state.y = new_y;
  }
  Milky2018$pacman$$check_dot_collection();
  if (Milky2018$pacman$$check_ghost_collision()) {
    Milky2018$selene$audio$$play_audio$46$inner("assets/hurt.wav", 1, false);
    Milky2018$pacman$$reset_level();
  }
  if (Milky2018$selene$system$$mouse_locked.val) {
    const angle = Milky2018$pacman$$player_state.angle + Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$inputs$$mouse_movement.movement, 0) * 0.002;
    Milky2018$pacman$$player_state.angle = Milky2018$selene$math$$normalize_angle(angle);
    return;
  } else {
    return;
  }
}
function Milky2018$pacman$$game_startup(_delta) {
  Milky2018$selene$system$$lock_mouse();
}
function Milky2018$pacman$$ghost_can_move_to(x, y) {
  if (Milky2018$pacman$$is_wall(x - 20, y - 20)) {
    return false;
  }
  if (Milky2018$pacman$$is_wall(x + 20, y - 20)) {
    return false;
  }
  if (Milky2018$pacman$$is_wall(x - 20, y + 20)) {
    return false;
  }
  if (Milky2018$pacman$$is_wall(x + 20, y + 20)) {
    return false;
  }
  return true;
}
function Milky2018$pacman$$update_ghosts() {
  const _len = Milky2018$pacman$$ghosts.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const ghost = Milky2018$pacman$$ghosts[_i];
      let dx = 0;
      let dy = 0;
      const _bind = ghost.direction;
      switch (_bind) {
        case 0: {
          dy = -1.5;
          break;
        }
        case 1: {
          dy = 1.5;
          break;
        }
        case 2: {
          dx = -1.5;
          break;
        }
        default: {
          dx = 1.5;
        }
      }
      const new_x = ghost.x + dx;
      const new_y = ghost.y + dy;
      if (Milky2018$pacman$$ghost_can_move_to(new_x, new_y)) {
        ghost.x = new_x;
        ghost.y = new_y;
      } else {
        ghost.direction = Milky2018$pacman$$get_random_direction();
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$pacman$$ghost_update_system(_delta) {
  Milky2018$pacman$$update_ghosts();
}
(() => {
  Milky2018$pacman$$init_player();
  Milky2018$pacman$$init_dots();
  Milky2018$pacman$$init_ghosts();
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$new(), 480), 640), Milky2018$pacman$$player_input_system, undefined, undefined), Milky2018$pacman$$ghost_update_system, undefined, undefined), Milky2018$pacman$$game_startup, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), Milky2018$selene$inputs$$advanced_mouse_system, undefined, undefined), Milky2018$pacman$$render_3d_system, new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0), undefined), Milky2018$pacman$$render_map_system, new $64$Milky2018$47$selene$47$system$46$Schedule$Render(-1), undefined));
})();
