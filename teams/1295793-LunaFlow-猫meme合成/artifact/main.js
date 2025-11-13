const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const $64$moonbitlang$47$core$47$list$46$List$Empty$1$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$list$46$List$More$1$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$1$.prototype.$tag = 1;
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
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture.prototype.$tag = 0;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation.prototype.$tag = 1;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Text.prototype.$tag = 2;
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
const rami3l$js$45$ffi$js$$Value$undefined = () => undefined;
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
const Option$None$4$ = { $tag: 0 };
function Option$Some$4$(param0) {
  this._0 = param0;
}
Option$Some$4$.prototype.$tag = 1;
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
const Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame = (self,f) => self.requestAnimationFrame(f);
const Yoorkin$rabbit$45$tea$dom$$Window$cancel_animation_frame = (self,id) => self.cancelAnimationFrame(id);
const Yoorkin$rabbit$45$tea$dom$$window = () => window;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event = (e) => e instanceof MouseEvent ? e : null;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button = (e) => e.button;
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
const Option$None$8$ = { $tag: 0 };
function Option$Some$8$(param0) {
  this._0 = param0;
}
Option$Some$8$.prototype.$tag = 1;
const Milky2018$selene$45$canvas$$set_viewport_height = (x, y) => { x.height = y; };
const Milky2018$selene$45$canvas$$set_viewport_width = (x, y) => { x.width = y; };
const Milky2018$selene$45$canvas$$Audio$new = (path) => new Audio(path);
const Milky2018$selene$45$canvas$$Audio$play = (self) => self.play();
const Milky2018$selene$45$canvas$$Audio$set_volume = (self, volume) => self.volume = volume;
const Milky2018$selene$45$canvas$$Audio$set_loop = (self, loop_) => self.loop = loop_;
function $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect.prototype.$tag = 0;
const Milky2018$selene$system$$all_codes$46$42$bind$47$2051 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$system$$from_string$46$constr$47$2065 = 0;
const Milky2018$selene$system$$from_string$46$constr$47$2066 = 1;
const Milky2018$selene$system$$from_string$46$constr$47$2067 = 2;
const Milky2018$selene$system$$from_string$46$constr$47$2068 = 3;
const Milky2018$selene$system$$from_string$46$constr$47$2069 = 4;
const Milky2018$selene$system$$from_string$46$constr$47$2070 = 5;
const Milky2018$selene$system$$from_string$46$constr$47$2071 = 6;
const Milky2018$selene$system$$from_string$46$constr$47$2072 = 7;
const Milky2018$selene$system$$from_string$46$constr$47$2073 = 8;
const Milky2018$selene$system$$from_string$46$constr$47$2074 = 9;
const Milky2018$selene$system$$from_string$46$constr$47$2075 = 10;
const Milky2018$selene$system$$from_string$46$constr$47$2076 = 11;
const Milky2018$selene$system$$from_string$46$constr$47$2077 = 12;
const Milky2018$selene$system$$from_string$46$constr$47$2078 = 13;
const Milky2018$selene$system$$from_string$46$constr$47$2079 = 14;
const Milky2018$selene$system$$from_string$46$constr$47$2080 = 15;
const Milky2018$selene$system$$from_string$46$constr$47$2081 = 16;
const Milky2018$selene$system$$from_string$46$constr$47$2082 = 17;
const Milky2018$selene$system$$from_string$46$constr$47$2083 = 18;
const Milky2018$selene$system$$from_string$46$constr$47$2084 = 19;
const Milky2018$selene$system$$from_string$46$constr$47$2085 = 20;
const Milky2018$selene$system$$from_string$46$constr$47$2086 = 21;
const Milky2018$selene$system$$from_string$46$constr$47$2087 = 22;
const Milky2018$selene$system$$from_string$46$constr$47$2088 = 23;
const Milky2018$selene$system$$from_string$46$constr$47$2089 = 24;
const Milky2018$selene$system$$from_string$46$constr$47$2090 = 26;
const Milky2018$selene$system$$from_string$46$constr$47$2091 = 27;
const Milky2018$selene$system$$from_string$46$constr$47$2092 = 28;
const Milky2018$selene$system$$from_string$46$constr$47$2093 = 29;
const Milky2018$selene$system$$from_string$46$constr$47$2094 = 30;
const Milky2018$selene$system$$from_string$46$constr$47$2095 = 31;
const Milky2018$selene$system$$from_string$46$constr$47$2096 = 32;
const Milky2018$selene$collision$$collision_layer_generator = { val: 0 };
const Asterless$MGPIC2025$main$$add_background$46$constr$47$2808 = true;
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const Milky2018$selene$45$canvas$$window = Yoorkin$rabbit$45$tea$dom$$window();
const Asterless$MGPIC2025$main$$cats_by_entity = moonbitlang$core$hashmap$$HashMap$new$46$inner$0$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$1$(8);
const Milky2018$selene$system$$all_entities = moonbitlang$core$set$$Set$new$46$inner$2$(8);
const Asterless$MGPIC2025$main$$game_state = { pointer_entity: Milky2018$selene$system$$Entity$new(), pointer_sprite: Milky2018$selene$sprite$$Sprite$new_picture(Asterless$MGPIC2025$main$$Cat$get_picture_by_level(1), 40), score: 0, score_bar: Milky2018$selene$sprite$$Text$new$46$inner("", "White", "60px ThaleahFat"), next_cat_level: 1, to_merge: moonbitlang$core$hashset$$HashSet$new$3$(undefined), background_music_started: false, cats_clicked: moonbitlang$core$hashset$$HashSet$new$2$(undefined) };
const Asterless$MGPIC2025$main$$terrain_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const Asterless$MGPIC2025$main$$pointer_collision_layer = Milky2018$selene$collision$$CollisionLayer$new();
const Milky2018$selene$system$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$system$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$position$$positions = moonbitlang$core$builtin$$Map$new$46$inner$5$(8);
const Asterless$MGPIC2025$main$$ptr_entity = Asterless$MGPIC2025$main$$game_state.pointer_entity;
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$6$(8);
const Asterless$MGPIC2025$main$$cat_collision_layers = [Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new(), Milky2018$selene$collision$$CollisionLayer$new()];
const Milky2018$selene$collision$$areas = moonbitlang$core$builtin$$Map$new$46$inner$7$(8);
const Milky2018$selene$collision$$collides = moonbitlang$core$builtin$$Map$new$46$inner$8$(8);
const Milky2018$selene$45$canvas$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const Milky2018$selene$sprite$$animation_id_generator = moonbitlang$core$ref$$Ref$new$10$(0);
const Milky2018$selene$system$$all_codes = moonbitlang$core$set$$Set$from_array$4$({ buf: Milky2018$selene$system$$all_codes$46$42$bind$47$2051, start: 0, end: 33 });
const Milky2018$selene$system$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$system$$last_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$system$$mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const _bind = Milky2018$selene$math$$Vec2D$zero();
const _bind$2 = Option$None$0$;
const _bind$3 = Option$None$0$;
const _bind$4 = Option$None$0$;
const _bind$5 = Option$None$0$;
const _bind$6 = undefined;
const _bind$7 = Milky2018$selene$math$$Vec2D$zero();
const Milky2018$selene$camera$$camera = { position: _bind, limit_top: _bind$4, limit_bottom: _bind$2, limit_left: _bind$3, limit_right: _bind$5, attached_entity: _bind$6, offset: _bind$7 };
const Milky2018$selene$camera$$uis = moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
const Milky2018$selene$system$$just_pressed_mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$collision$$quadtree_root = Milky2018$selene$collision$$QuadTree$new(Milky2018$selene$math$$Vec2D$new(0, 0), Milky2018$selene$math$$Vec2D$new(2048, 2048), 0);
const Milky2018$selene$system$$just_release_mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$last_mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$collision$$collision_infos = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$13$(0);
const Asterless$MGPIC2025$main$$teleport_queue = moonbitlang$core$hashset$$HashSet$new$14$(undefined);
function moonbitlang$core$abort$$abort$15$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$16$(msg) {
  return $panic();
}
function moonbitlang$core$ref$$Ref$new$10$(x) {
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
function moonbitlang$core$array$$Array$bubble_sort_by$17$(arr, start, end, cmp) {
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
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$17$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$17$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$17$(arr, j);
          moonbitlang$core$array$$Array$set$17$(arr, j, moonbitlang$core$array$$Array$at$17$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$17$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$bubble_sort_by$18$(arr, start, end, cmp) {
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
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$18$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$18$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$18$(arr, j);
          moonbitlang$core$array$$Array$set$18$(arr, j, moonbitlang$core$array$$Array$at$18$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$18$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$33(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$17$(arr, a_pos), moonbitlang$core$array$$Array$at$17$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$17$(arr, a_pos);
    moonbitlang$core$array$$Array$set$17$(arr, a_pos, moonbitlang$core$array$$Array$at$17$(arr, b_pos));
    moonbitlang$core$array$$Array$set$17$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$34(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$33(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$33(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$33(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$17$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$34(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$34(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$34(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$34(_env, a, b, c);
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
        const temp = moonbitlang$core$array$$Array$at$17$(arr, i_pos);
        moonbitlang$core$array$$Array$set$17$(arr, i_pos, moonbitlang$core$array$$Array$at$17$(arr, j_pos));
        moonbitlang$core$array$$Array$set$17$(arr, j_pos, temp);
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$68(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$18$(arr, a_pos), moonbitlang$core$array$$Array$at$18$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$18$(arr, a_pos);
    moonbitlang$core$array$$Array$set$18$(arr, a_pos, moonbitlang$core$array$$Array$at$18$(arr, b_pos));
    moonbitlang$core$array$$Array$set$18$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$69(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$68(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$68(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$68(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$18$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$69(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$69(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$69(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$69(_env, a, b, c);
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
        const temp = moonbitlang$core$array$$Array$at$18$(arr, i_pos);
        moonbitlang$core$array$$Array$set$18$(arr, i_pos, moonbitlang$core$array$$Array$at$18$(arr, j_pos));
        moonbitlang$core$array$$Array$set$18$(arr, j_pos, temp);
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
function moonbitlang$core$array$$Array$sift_down_by$17$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$17$(arr, child_pos), moonbitlang$core$array$$Array$at$17$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$17$(arr, current_pos), moonbitlang$core$array$$Array$at$17$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$17$(arr, current_pos);
      moonbitlang$core$array$$Array$set$17$(arr, current_pos, moonbitlang$core$array$$Array$at$17$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$17$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$sift_down_by$18$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$18$(arr, child_pos), moonbitlang$core$array$$Array$at$18$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$18$(arr, current_pos), moonbitlang$core$array$$Array$at$18$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$18$(arr, current_pos);
      moonbitlang$core$array$$Array$set$18$(arr, current_pos, moonbitlang$core$array$$Array$at$18$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$18$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$17$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$Array$sift_down_by$17$(arr, actual_start, actual_end, i, cmp);
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
      const temp = moonbitlang$core$array$$Array$at$17$(arr, actual_start);
      moonbitlang$core$array$$Array$set$17$(arr, actual_start, moonbitlang$core$array$$Array$at$17$(arr, last));
      moonbitlang$core$array$$Array$set$17$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$17$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$18$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$Array$sift_down_by$18$(arr, actual_start, actual_end, i, cmp);
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
      const temp = moonbitlang$core$array$$Array$at$18$(arr, actual_start);
      moonbitlang$core$array$$Array$set$18$(arr, actual_start, moonbitlang$core$array$$Array$at$18$(arr, last));
      moonbitlang$core$array$$Array$set$18$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$18$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$partition_by$17$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$17$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$17$(arr, pivot_index, moonbitlang$core$array$$Array$at$17$(arr, last_index));
  moonbitlang$core$array$$Array$set$17$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$17$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$17$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$17$(arr, i);
          moonbitlang$core$array$$Array$set$17$(arr, i, moonbitlang$core$array$$Array$at$17$(arr, j));
          moonbitlang$core$array$$Array$set$17$(arr, j, temp$2);
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
  const temp$2 = moonbitlang$core$array$$Array$at$17$(arr, i);
  moonbitlang$core$array$$Array$set$17$(arr, i, moonbitlang$core$array$$Array$at$17$(arr, last_index));
  moonbitlang$core$array$$Array$set$17$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$partition_by$18$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$18$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$18$(arr, pivot_index, moonbitlang$core$array$$Array$at$18$(arr, last_index));
  moonbitlang$core$array$$Array$set$18$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$18$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$18$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$18$(arr, i);
          moonbitlang$core$array$$Array$set$18$(arr, i, moonbitlang$core$array$$Array$at$18$(arr, j));
          moonbitlang$core$array$$Array$set$18$(arr, j, temp$2);
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
  const temp$2 = moonbitlang$core$array$$Array$at$18$(arr, i);
  moonbitlang$core$array$$Array$set$18$(arr, i, moonbitlang$core$array$$Array$at$18$(arr, last_index));
  moonbitlang$core$array$$Array$set$18$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$17$(arr, start, end, cmp) {
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
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$17$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$17$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$17$(arr, j);
          moonbitlang$core$array$$Array$set$17$(arr, j, moonbitlang$core$array$$Array$at$17$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$17$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$try_bubble_sort_by$18$(arr, start, end, cmp) {
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
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$18$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$18$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$18$(arr, j);
          moonbitlang$core$array$$Array$set$18$(arr, j, moonbitlang$core$array$$Array$at$18$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$18$(arr, j - 1 | 0, temp);
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
function moonbitlang$core$array$$Array$quick_sort_by$17$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$17$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$17$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$Array$choose_pivot_by$17$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$17$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$Array$partition_by$17$(arr, current_start, current_end, cmp, _pivot_index);
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
      if (cmp(_pred, moonbitlang$core$array$$Array$at$17$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$17$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$17$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$17$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$17$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$17$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$quick_sort_by$18$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$18$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$18$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$8 = moonbitlang$core$array$$Array$choose_pivot_by$18$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$8._0;
    const _likely_sorted = _bind$8._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$18$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$9 = moonbitlang$core$array$$Array$partition_by$18$(arr, current_start, current_end, cmp, _pivot_index);
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
      if (cmp(_pred, moonbitlang$core$array$$Array$at$18$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$18$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$18$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$18$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$18$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$18$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$19$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$17$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by_key$20$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$18$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$push_iter$21$(self, iter) {
  iter((x) => {
    moonbitlang$core$array$$Array$push$21$(self, x);
    return 1;
  });
}
function moonbitlang$core$hashset$$HashSet$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9 };
}
function moonbitlang$core$hashset$$HashSet$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9 };
}
function moonbitlang$core$hashset$$HashSet$new$46$inner$14$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9 };
}
function moonbitlang$core$hashset$$HashSet$new$2$(capacity$46$opt) {
  let capacity;
  if (capacity$46$opt === undefined) {
    capacity = 8;
  } else {
    const _Some = capacity$46$opt;
    capacity = _Some;
  }
  return moonbitlang$core$hashset$$HashSet$new$46$inner$2$(capacity);
}
function moonbitlang$core$hashset$$HashSet$new$3$(capacity$46$opt) {
  let capacity;
  if (capacity$46$opt === undefined) {
    capacity = 8;
  } else {
    const _Some = capacity$46$opt;
    capacity = _Some;
  }
  return moonbitlang$core$hashset$$HashSet$new$46$inner$3$(capacity);
}
function moonbitlang$core$hashset$$HashSet$new$14$(capacity$46$opt) {
  let capacity;
  if (capacity$46$opt === undefined) {
    capacity = 8;
  } else {
    const _Some = capacity$46$opt;
    capacity = _Some;
  }
  return moonbitlang$core$hashset$$HashSet$new$46$inner$14$(capacity);
}
function moonbitlang$core$hashset$$HashSet$push_away$2$(self, idx, entry) {
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
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx$2);
      _tmp$5[idx$2] = entry$2;
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx$2);
        _tmp$5[idx$2] = entry$2;
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
function moonbitlang$core$hashset$$HashSet$push_away$14$(self, idx, entry) {
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
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx$2);
      _tmp$5[idx$2] = entry$2;
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx$2);
        _tmp$5[idx$2] = entry$2;
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
function moonbitlang$core$hashset$$HashSet$push_away$3$(self, idx, entry) {
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
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx$2);
      _tmp$5[idx$2] = entry$2;
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx$2);
        _tmp$5[idx$2] = entry$2;
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
function moonbitlang$core$hashset$$HashSet$add_with_hash$2$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$hashset$$HashSet$grow$2$(self);
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
        moonbitlang$core$hashset$$HashSet$push_away$2$(self, idx, _curr_entry);
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
  const entry = { psl: _psl, hash: hash, key: key };
  const _tmp$3 = self.entries;
  $bound_check(_tmp$3, _idx);
  _tmp$3[_idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$hashset$$HashSet$add_with_hash$14$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$hashset$$HashSet$grow$14$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$14$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$hashset$$HashSet$push_away$14$(self, idx, _curr_entry);
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
  const entry = { psl: _psl, hash: hash, key: key };
  const _tmp$3 = self.entries;
  $bound_check(_tmp$3, _idx);
  _tmp$3[_idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$hashset$$HashSet$add_with_hash$3$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$hashset$$HashSet$grow$3$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$22$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$hashset$$HashSet$push_away$3$(self, idx, _curr_entry);
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
  const entry = { psl: _psl, hash: hash, key: key };
  const _tmp$3 = self.entries;
  $bound_check(_tmp$3, _idx);
  _tmp$3[_idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$hashset$$HashSet$grow$2$(self) {
  if (self.capacity === 0) {
    self.capacity = 8;
    self.capacity_mask = self.capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.entries = $make_array_len_and_init(self.capacity, undefined);
    return undefined;
  }
  const old_entries = self.entries;
  self.entries = $make_array_len_and_init(Math.imul(self.capacity, 2) | 0, undefined);
  self.capacity = Math.imul(self.capacity, 2) | 0;
  self.capacity_mask = self.capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  const _end142 = old_entries.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end142) {
      $bound_check(old_entries, i);
      const _bind$8 = old_entries[i];
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _x = _Some;
        const _key = _x.key;
        const _hash = _x.hash;
        moonbitlang$core$hashset$$HashSet$add_with_hash$2$(self, _key, _hash);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$hashset$$HashSet$grow$14$(self) {
  if (self.capacity === 0) {
    self.capacity = 8;
    self.capacity_mask = self.capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.entries = $make_array_len_and_init(self.capacity, undefined);
    return undefined;
  }
  const old_entries = self.entries;
  self.entries = $make_array_len_and_init(Math.imul(self.capacity, 2) | 0, undefined);
  self.capacity = Math.imul(self.capacity, 2) | 0;
  self.capacity_mask = self.capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  const _end142 = old_entries.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end142) {
      $bound_check(old_entries, i);
      const _bind$8 = old_entries[i];
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _x = _Some;
        const _key = _x.key;
        const _hash = _x.hash;
        moonbitlang$core$hashset$$HashSet$add_with_hash$14$(self, _key, _hash);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$hashset$$HashSet$grow$3$(self) {
  if (self.capacity === 0) {
    self.capacity = 8;
    self.capacity_mask = self.capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.entries = $make_array_len_and_init(self.capacity, undefined);
    return undefined;
  }
  const old_entries = self.entries;
  self.entries = $make_array_len_and_init(Math.imul(self.capacity, 2) | 0, undefined);
  self.capacity = Math.imul(self.capacity, 2) | 0;
  self.capacity_mask = self.capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  const _end142 = old_entries.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end142) {
      $bound_check(old_entries, i);
      const _bind$8 = old_entries[i];
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _x = _Some;
        const _key = _x.key;
        const _hash = _x.hash;
        moonbitlang$core$hashset$$HashSet$add_with_hash$3$(self, _key, _hash);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$hashset$$HashSet$add$2$(self, key) {
  moonbitlang$core$hashset$$HashSet$add_with_hash$2$(self, key, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$hashset$$HashSet$add$14$(self, key) {
  moonbitlang$core$hashset$$HashSet$add_with_hash$14$(self, key, moonbitlang$core$builtin$$Hash$hash$24$(key));
}
function moonbitlang$core$hashset$$HashSet$add$3$(self, key) {
  moonbitlang$core$hashset$$HashSet$add_with_hash$3$(self, key, moonbitlang$core$builtin$$Hash$hash$25$(key));
}
function moonbitlang$core$hashset$$HashSet$contains$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$hashset$$HashSet$shift_back$14$(self, idx) {
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
          const _tmp$3 = self.entries;
          $bound_check(_tmp$3, idx$2);
          _tmp$3[idx$2] = _x;
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
function moonbitlang$core$hashset$$HashSet$remove$14$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$24$(key);
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
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$14$(_entry.key, key)) {
        moonbitlang$core$hashset$$HashSet$shift_back$14$(self, idx);
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
function moonbitlang$core$hashset$$HashSet$clear$3$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$26$(self.entries, undefined, 0, undefined);
  self.size = 0;
}
function moonbitlang$core$hashset$$HashSet$clear$2$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$27$(self.entries, undefined, 0, undefined);
  self.size = 0;
}
function moonbitlang$core$hashset$$HashSet$iterator$3$(self) {
  const i = { val: 0 };
  const len = self.entries.length;
  const _p = () => {
    while (true) {
      if (i.val < len) {
        const entry = self.entries[i.val];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          return _key;
        }
        continue;
      } else {
        return undefined;
      }
    }
  };
  return _p;
}
function moonbitlang$core$hashset$$HashSet$iterator$14$(self) {
  const i = { val: 0 };
  const len = self.entries.length;
  const _p = () => {
    while (true) {
      if (i.val < len) {
        const entry = self.entries[i.val];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          return _key;
        }
        continue;
      } else {
        return undefined;
      }
    }
  };
  return _p;
}
function moonbitlang$core$hashset$$HashSet$iterator$2$(self) {
  const i = { val: 0 };
  const len = self.entries.length;
  const _p = () => {
    while (true) {
      if (i.val < len) {
        const entry = self.entries[i.val];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          return _key;
        }
        continue;
      } else {
        return undefined;
      }
    }
  };
  return _p;
}
function moonbitlang$core$math$$pow(_tmp, _tmp$2) {
  return Math.pow(_tmp, _tmp$2);
}
function moonbitlang$core$hashmap$$HashMap$iterator$0$(self) {
  const i = { val: 0 };
  const len = self.entries.length;
  const _p = () => {
    while (true) {
      if (i.val < len) {
        const entry = self.entries[i.val];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          return { _0: _key, _1: _value };
        }
        continue;
      } else {
        return undefined;
      }
    }
  };
  return _p;
}
function moonbitlang$core$hashmap$$HashMap$new$46$inner$0$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$9 = capacity$2 - 1 | 0;
  return { entries: _bind$8, capacity: capacity$2, capacity_mask: _bind$9, size: 0 };
}
function moonbitlang$core$hashmap$$HashMap$push_away$0$(self, idx, entry) {
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
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx$2);
      _tmp$5[idx$2] = entry$2;
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx$2);
        _tmp$5[idx$2] = entry$2;
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
function moonbitlang$core$hashmap$$HashMap$set_with_hash$0$(self, key, value, hash) {
  if (self.size >= (self.capacity / 2 | 0)) {
    moonbitlang$core$hashmap$$HashMap$grow$0$(self);
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
        moonbitlang$core$hashmap$$HashMap$push_away$0$(self, idx, _curr_entry);
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
  const entry = { psl: _psl, hash: hash, key: key, value: value };
  const _tmp$3 = self.entries;
  $bound_check(_tmp$3, _idx);
  _tmp$3[_idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$hashmap$$HashMap$grow$0$(self) {
  const old_entries = self.entries;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.size = 0;
  const _end65 = old_entries.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end65) {
      $bound_check(old_entries, i);
      const _bind$8 = old_entries[i];
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _hash = _x.hash;
        moonbitlang$core$hashmap$$HashMap$set_with_hash$0$(self, _key, _value, _hash);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$hashmap$$HashMap$set$0$(self, key, value) {
  moonbitlang$core$hashmap$$HashMap$set_with_hash$0$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$hashmap$$HashMap$shift_back$0$(self, idx) {
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
          const _tmp$3 = self.entries;
          $bound_check(_tmp$3, idx$2);
          _tmp$3[idx$2] = _x;
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
function moonbitlang$core$hashmap$$HashMap$get$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$hashmap$$HashMap$contains$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$hashmap$$HashMap$remove_with_hash$0$(self, key, hash) {
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
        moonbitlang$core$hashmap$$HashMap$shift_back$0$(self, idx);
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
function moonbitlang$core$hashmap$$HashMap$remove$0$(self, key) {
  moonbitlang$core$hashmap$$HashMap$remove_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$list$$List$from_array$16$(arr) {
  let _tmp = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$1$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$1$(moonbitlang$core$array$$ArrayView$at$16$(arr, i), list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$double$$Double$to_uint(self) {
  return self !== self ? 0 : self >= 4294967295 ? -1 : self <= 0 ? 0 : self | 0;
}
function moonbitlang$core$builtin$$Show$output$28$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$set$$Set$new$46$inner$4$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return { entries: _bind$10, size: 0, capacity: capacity$2, capacity_mask: _bind$8, grow_at: _bind$9, head: _bind$11, tail: -1 };
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
function moonbitlang$core$set$$Set$add_entry_to_tail$2$(self, idx, entry) {
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
function moonbitlang$core$set$$Set$set_entry$2$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$push_away$2$(self, idx, entry) {
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
      moonbitlang$core$set$$Set$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$2$(self, entry$2, idx$2);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$4$(_curr_entry.key, key)) {
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
function moonbitlang$core$set$$Set$add_with_hash$2$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$2$(self);
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
        moonbitlang$core$set$$Set$push_away$2$(self, idx, _curr_entry);
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
  moonbitlang$core$set$$Set$add_entry_to_tail$2$(self, _idx, entry);
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
function moonbitlang$core$set$$Set$grow$2$(self) {
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
      moonbitlang$core$set$$Set$add_with_hash$2$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$4$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$4$(self, key, moonbitlang$core$builtin$$Hash$hash$29$(key));
}
function moonbitlang$core$set$$Set$add$2$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$2$(self, key, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$set$$Set$from_array$4$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$set$$Set$new$46$inner$4$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$set$$Set$add$4$(m, e);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$set$$Set$contains$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$29$(key);
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
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$4$(_entry.key, key)) {
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
function moonbitlang$core$set$$Set$remove_entry$2$(self, entry) {
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
function moonbitlang$core$set$$Set$shift_back$2$(self, idx) {
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
          moonbitlang$core$set$$Set$set_entry$2$(self, _x, idx$2);
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
function moonbitlang$core$set$$Set$remove$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$29$(key);
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
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$4$(_entry.key, key)) {
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
function moonbitlang$core$set$$Set$remove$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
        moonbitlang$core$set$$Set$remove_entry$2$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$2$(self, idx);
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
function moonbitlang$core$set$$Set$clear$4$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$30$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iterator$2$(self) {
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
function moonbitlang$core$set$$Set$iterator$4$(self) {
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
function moonbitlang$core$set$$Set$difference$4$(self, other) {
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
      if (!moonbitlang$core$set$$Set$contains$4$(other, _p$4)) {
        moonbitlang$core$set$$Set$add$4$(m, _p$4);
      }
      _tmp = _p$5;
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
function moonbitlang$core$set$$Set$union$2$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$2$(8);
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
      moonbitlang$core$set$$Set$add$2$(m, _p$4);
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
      moonbitlang$core$set$$Set$add$2$(m, _p$4);
      _tmp$2 = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$intersection$2$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$2$(8);
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
      if (moonbitlang$core$set$$Set$contains$2$(other, _p$4)) {
        moonbitlang$core$set$$Set$add$2$(m, _p$4);
      }
      _tmp = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$31$(self, ch) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$2$(x, y) {
  return !(x === y);
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
function moonbitlang$core$array$$Array$at$32$(self, index) {
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
function moonbitlang$core$array$$Array$at$18$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$31$(self, str) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$2$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$2$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$14$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$14$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$33$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$33$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$3$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$22$(value, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$22$(self, hasher) {
  const _a = self._0;
  const _b = self._1;
  moonbitlang$core$builtin$$Hasher$combine$2$(hasher, _a);
  moonbitlang$core$builtin$$Hasher$combine$2$(hasher, _b);
}
function moonbitlang$core$builtin$$Eq$equal$22$(self, other) {
  const _p = self._0;
  const _p$2 = other._0;
  if (_p === _p$2) {
    const _p$3 = self._1;
    const _p$4 = other._1;
    return _p$3 === _p$4;
  } else {
    return false;
  }
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
function moonbitlang$core$builtin$$Hash$hash$29$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$4$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$23$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$2$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$24$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$14$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$34$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$33$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$25$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$3$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$35$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$28$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$31$, method_1: moonbitlang$core$builtin$$Logger$write_substring$31$, method_2: moonbitlang$core$builtin$$Logger$write_char$31$ });
  return logger.val;
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$10$(self) {
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
function moonbitlang$core$builtin$$Logger$write_substring$31$(self, str, start, len) {
  const _bind$8 = self;
  _bind$8.val = `${_bind$8.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$array$$Array$iter$16$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind$8 = yield_(v);
        if (_bind$8 === 1) {
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
function moonbitlang$core$array$$Array$iter$21$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind$8 = yield_(v);
        if (_bind$8 === 1) {
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
function moonbitlang$core$builtin$$Add$add$41$(self, other) {
  return moonbitlang$core$builtin$$Add$op_add$42$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$41$(self, other) {
  return moonbitlang$core$builtin$$Sub$op_sub$42$(self, other);
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
function moonbitlang$core$builtin$$Map$new$46$inner$6$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$6$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$set_entry$6$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$push_away$6$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$6$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$6$(self, entry$2, idx$2);
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
function moonbitlang$core$builtin$$Map$set_with_hash$6$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$6$(self);
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
        moonbitlang$core$builtin$$Map$push_away$6$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$6$(self, _idx, entry);
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
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
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
function moonbitlang$core$builtin$$Map$grow$6$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$6$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$set$6$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$6$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$set$8$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$34$(key));
}
function moonbitlang$core$builtin$$Map$set$5$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$set$7$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$builtin$$Map$set$12$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, moonbitlang$core$builtin$$Hash$hash$23$(key));
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
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$builtin$$Map$get$12$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$builtin$$Map$at$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$builtin$$Map$at$5$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$23$(key);
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$26$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$27$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$43$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$30$(self, value, start, end) {
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
function moonbitlang$core$builtin$$Map$clear$12$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$43$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$to_array$6$(self) {
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
function moonbitlang$core$builtin$$Iterator$next$44$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$3$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$14$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$2$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$4$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$array$$Array$push$17$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$45$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$16$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$18$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$46$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$47$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$13$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$48$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$21$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iter$run$16$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$all$16$(self, f) {
  const _bind$8 = moonbitlang$core$builtin$$Iter$run$16$(self, (k) => !f(k) ? 0 : 1);
  if (_bind$8 === 1) {
    return true;
  } else {
    return false;
  }
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
function moonbitlang$core$builtin$$Hash$hash_combine$33$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$10$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_int(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$49$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$array$$ArrayView$at$16$(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$16$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$10$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$10$(index)}`);
  }
}
function moonbitlang$core$array$$Array$new$46$inner$13$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$48$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$13$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$16$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$set$17$(self, index, value) {
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
function moonbitlang$core$array$$Array$clear$13$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$13$(self, 0);
}
function moonbitlang$core$array$$Array$clear$16$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$16$(self, 0);
}
function moonbitlang$core$array$$Array$contains$21$(self, value) {
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
function Milky2018$selene$math$$Vec2D$new(x, y) {
  return { x: x, y: y };
}
function Milky2018$selene$math$$Vec2D$zero() {
  return Milky2018$selene$math$$Vec2D$new(0, 0);
}
function Milky2018$selene$math$$Vec2D$op_get(this_, axis) {
  if (axis === 0) {
    return this_.x;
  } else {
    return this_.y;
  }
}
function Milky2018$selene$math$$Vec2D$op_set(this_, axis, value) {
  if (axis === 0) {
    this_.x = value;
    return;
  } else {
    this_.y = value;
    return;
  }
}
function moonbitlang$core$builtin$$Add$op_add$42$(this_, other) {
  return Milky2018$selene$math$$Vec2D$new(this_.x + other.x, this_.y + other.y);
}
function moonbitlang$core$builtin$$Sub$op_sub$42$(this_, other) {
  return Milky2018$selene$math$$Vec2D$new(this_.x - other.x, this_.y - other.y);
}
function Milky2018$selene$math$$Transform$new$46$inner(scale, translate, skew) {
  return { scale: scale, translate: translate, skew: skew };
}
function Milky2018$selene$math$$Transform$new(scale$46$opt, translate$46$opt, skew$46$opt) {
  let scale;
  if (scale$46$opt === undefined) {
    scale = Milky2018$selene$math$$Vec2D$new(1, 1);
  } else {
    const _Some = scale$46$opt;
    scale = _Some;
  }
  let translate;
  if (translate$46$opt === undefined) {
    translate = Milky2018$selene$math$$Vec2D$zero();
  } else {
    const _Some = translate$46$opt;
    translate = _Some;
  }
  let skew;
  if (skew$46$opt === undefined) {
    skew = Milky2018$selene$math$$Vec2D$zero();
  } else {
    const _Some = skew$46$opt;
    skew = _Some;
  }
  return Milky2018$selene$math$$Transform$new$46$inner(scale, translate, skew);
}
function Milky2018$selene$math$$Rect$intersects(a, b) {
  return a.position.x < b.position.x + b.size.x && (a.position.x + a.size.x > b.position.x && (a.position.y < b.position.y + b.size.y && a.position.y + a.size.y > b.position.y));
}
function Milky2018$selene$math$$Rect$shift(self, dir) {
  return { position: moonbitlang$core$builtin$$Add$add$41$(self.position, dir), size: self.size };
}
function moonbitlang$core$builtin$$Hash$hash_combine$2$(_x_109, _x_110) {
  moonbitlang$core$builtin$$Hash$hash_combine$49$(_x_109, _x_110);
}
function moonbitlang$core$builtin$$Eq$equal$4$(_x_105, _x_106) {
  switch (_x_105) {
    case 0: {
      if (_x_106 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_106 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_106 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_106 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_106 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_106 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_106 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_106 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_106 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_106 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_106 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_106 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_106 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_106 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_106 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_106 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_106 === 16) {
        return true;
      } else {
        return false;
      }
    }
    case 17: {
      if (_x_106 === 17) {
        return true;
      } else {
        return false;
      }
    }
    case 18: {
      if (_x_106 === 18) {
        return true;
      } else {
        return false;
      }
    }
    case 19: {
      if (_x_106 === 19) {
        return true;
      } else {
        return false;
      }
    }
    case 20: {
      if (_x_106 === 20) {
        return true;
      } else {
        return false;
      }
    }
    case 21: {
      if (_x_106 === 21) {
        return true;
      } else {
        return false;
      }
    }
    case 22: {
      if (_x_106 === 22) {
        return true;
      } else {
        return false;
      }
    }
    case 23: {
      if (_x_106 === 23) {
        return true;
      } else {
        return false;
      }
    }
    case 24: {
      if (_x_106 === 24) {
        return true;
      } else {
        return false;
      }
    }
    case 25: {
      if (_x_106 === 25) {
        return true;
      } else {
        return false;
      }
    }
    case 26: {
      if (_x_106 === 26) {
        return true;
      } else {
        return false;
      }
    }
    case 27: {
      if (_x_106 === 27) {
        return true;
      } else {
        return false;
      }
    }
    case 28: {
      if (_x_106 === 28) {
        return true;
      } else {
        return false;
      }
    }
    case 29: {
      if (_x_106 === 29) {
        return true;
      } else {
        return false;
      }
    }
    case 30: {
      if (_x_106 === 30) {
        return true;
      } else {
        return false;
      }
    }
    case 31: {
      if (_x_106 === 31) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_106 === 32) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$4$(_x_97, _x_98) {
  switch (_x_97) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 10);
      return;
    }
    case 11: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 11);
      return;
    }
    case 12: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 12);
      return;
    }
    case 13: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 13);
      return;
    }
    case 14: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 14);
      return;
    }
    case 15: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 15);
      return;
    }
    case 16: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 16);
      return;
    }
    case 17: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 17);
      return;
    }
    case 18: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 18);
      return;
    }
    case 19: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 19);
      return;
    }
    case 20: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 20);
      return;
    }
    case 21: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 21);
      return;
    }
    case 22: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 22);
      return;
    }
    case 23: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 23);
      return;
    }
    case 24: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 24);
      return;
    }
    case 25: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 25);
      return;
    }
    case 26: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 26);
      return;
    }
    case 27: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 27);
      return;
    }
    case 28: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 28);
      return;
    }
    case 29: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 29);
      return;
    }
    case 30: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 30);
      return;
    }
    case 31: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 31);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_98, 32);
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
  Milky2018$selene$system$$last_mouse.pos.x = Milky2018$selene$system$$mouse.pos.x;
  Milky2018$selene$system$$last_mouse.pos.y = Milky2018$selene$system$$mouse.pos.y;
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
      return Milky2018$selene$system$$from_string$46$constr$47$2065;
    }
    case "KeyB": {
      return Milky2018$selene$system$$from_string$46$constr$47$2066;
    }
    case "KeyC": {
      return Milky2018$selene$system$$from_string$46$constr$47$2067;
    }
    case "KeyD": {
      return Milky2018$selene$system$$from_string$46$constr$47$2068;
    }
    case "KeyE": {
      return Milky2018$selene$system$$from_string$46$constr$47$2069;
    }
    case "KeyF": {
      return Milky2018$selene$system$$from_string$46$constr$47$2070;
    }
    case "KeyG": {
      return Milky2018$selene$system$$from_string$46$constr$47$2071;
    }
    case "KeyH": {
      return Milky2018$selene$system$$from_string$46$constr$47$2072;
    }
    case "KeyI": {
      return Milky2018$selene$system$$from_string$46$constr$47$2073;
    }
    case "KeyJ": {
      return Milky2018$selene$system$$from_string$46$constr$47$2074;
    }
    case "KeyK": {
      return Milky2018$selene$system$$from_string$46$constr$47$2075;
    }
    case "KeyL": {
      return Milky2018$selene$system$$from_string$46$constr$47$2076;
    }
    case "KeyM": {
      return Milky2018$selene$system$$from_string$46$constr$47$2077;
    }
    case "KeyN": {
      return Milky2018$selene$system$$from_string$46$constr$47$2078;
    }
    case "KeyO": {
      return Milky2018$selene$system$$from_string$46$constr$47$2079;
    }
    case "KeyP": {
      return Milky2018$selene$system$$from_string$46$constr$47$2080;
    }
    case "KeyQ": {
      return Milky2018$selene$system$$from_string$46$constr$47$2081;
    }
    case "KeyR": {
      return Milky2018$selene$system$$from_string$46$constr$47$2082;
    }
    case "KeyS": {
      return Milky2018$selene$system$$from_string$46$constr$47$2083;
    }
    case "KeyT": {
      return Milky2018$selene$system$$from_string$46$constr$47$2084;
    }
    case "KeyU": {
      return Milky2018$selene$system$$from_string$46$constr$47$2085;
    }
    case "KeyV": {
      return Milky2018$selene$system$$from_string$46$constr$47$2086;
    }
    case "KeyW": {
      return Milky2018$selene$system$$from_string$46$constr$47$2087;
    }
    case "KeyX": {
      return Milky2018$selene$system$$from_string$46$constr$47$2088;
    }
    case "KeyY": {
      return Milky2018$selene$system$$from_string$46$constr$47$2089;
    }
    case "ArrowUp": {
      return Milky2018$selene$system$$from_string$46$constr$47$2090;
    }
    case "ArrowDown": {
      return Milky2018$selene$system$$from_string$46$constr$47$2091;
    }
    case "ArrowLeft": {
      return Milky2018$selene$system$$from_string$46$constr$47$2092;
    }
    case "ArrowRight": {
      return Milky2018$selene$system$$from_string$46$constr$47$2093;
    }
    case "Space": {
      return Milky2018$selene$system$$from_string$46$constr$47$2094;
    }
    case "Enter": {
      return Milky2018$selene$system$$from_string$46$constr$47$2095;
    }
    case "Escape": {
      return Milky2018$selene$system$$from_string$46$constr$47$2096;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$system$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$4$(Milky2018$selene$system$$pressed_keys, code);
}
function Milky2018$selene$system$$advanced_key_system(_backend) {
  moonbitlang$core$set$$Set$clear$4$(Milky2018$selene$system$$just_pressed_keys);
  const _it = moonbitlang$core$set$$Set$iterator$4$(moonbitlang$core$set$$Set$difference$4$(Milky2018$selene$system$$pressed_keys, Milky2018$selene$system$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$4$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$4$(Milky2018$selene$system$$just_pressed_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$4$(Milky2018$selene$system$$just_release_keys);
  const _it$2 = moonbitlang$core$set$$Set$iterator$4$(moonbitlang$core$set$$Set$union$4$(moonbitlang$core$set$$Set$difference$4$(Milky2018$selene$system$$all_codes, Milky2018$selene$system$$pressed_keys), Milky2018$selene$system$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$4$(_it$2);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$4$(Milky2018$selene$system$$just_release_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$4$(Milky2018$selene$system$$last_pressed_keys);
  const _it$3 = moonbitlang$core$set$$Set$iterator$4$(Milky2018$selene$system$$pressed_keys);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$4$(_it$3);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$4$(Milky2018$selene$system$$last_pressed_keys, _code);
      continue;
    }
  }
}
function Milky2018$selene$system$$is_just_pressed(code) {
  return moonbitlang$core$set$$Set$contains$4$(Milky2018$selene$system$$just_pressed_keys, code);
}
function Milky2018$selene$system$$Entity$new() {
  const entity = Milky2018$selene$system$$entity_generator.val;
  Milky2018$selene$system$$entity_generator.val = (Milky2018$selene$system$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$2$(Milky2018$selene$system$$all_entities, entity);
  return entity;
}
function Milky2018$selene$system$$defer_event(event) {
  moonbitlang$core$array$$Array$push$13$(Milky2018$selene$system$$deferred_events, event);
}
function Milky2018$selene$system$$Entity$destroy(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$remove$2$(Milky2018$selene$system$$all_entities, e);
  });
}
function Milky2018$selene$system$$deferred_event_system(_backend) {
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
function Milky2018$selene$system$$App$new(backend) {
  const _bind$8 = [];
  const _bind$9 = [];
  const _bind$10 = [];
  return { canvas_height: 256, canvas_width: 512, fps: 60, initializers: _bind$9, systems: _bind$8, plugins: _bind$10, backend: backend };
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
  moonbitlang$core$array$$Array$push$45$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_initializer$46$inner(self, initializer, priority) {
  const initializers = self.initializers;
  moonbitlang$core$array$$Array$push$17$(initializers, { _0: initializer, _1: priority });
  return { ...self, initializers: initializers };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, priority) {
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$17$(systems, { _0: system, _1: priority });
  return { ...self, systems: systems };
}
function Milky2018$selene$system$$App$run(self) {
  const initialize = () => {
    moonbitlang$core$array$$Array$sort_by_key$19$(self.initializers, (pair) => -pair._1 | 0);
    const _arr = self.initializers;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const initializer = _arr[_i];
        const _func = initializer._0;
        _func(self.backend);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const game_loop = () => {
    moonbitlang$core$array$$Array$sort_by_key$19$(self.systems, (pair) => -pair._1 | 0);
    const _arr = self.systems;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const system = _arr[_i];
        const _func = system._0;
        _func(self.backend);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
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
  const run_game = _tmp$2.method_0(_tmp$2.self, initialize, game_loop, self.canvas_width, self.canvas_height, self.fps);
  const _tmp$3 = self.backend;
  _tmp$3.method_3(_tmp$3.self, Milky2018$selene$system$$pressed_keys);
  const _tmp$4 = self.backend;
  _tmp$4.method_4(_tmp$4.self, Milky2018$selene$system$$mouse);
  run_game();
}
function Milky2018$selene$camera$$camera_system(backend) {
  const _bind$8 = Milky2018$selene$camera$$camera.attached_entity;
  if (_bind$8 === undefined) {
    return;
  } else {
    const _Some = _bind$8;
    const _e = _Some;
    const _bind$9 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _e);
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _pos = _Some$2;
      const viewport_size = backend.method_8(backend.self);
      Milky2018$selene$camera$$camera.position.x = _pos.x - viewport_size.x / 2 + Milky2018$selene$camera$$camera.offset.x;
      Milky2018$selene$camera$$camera.position.y = _pos.y - viewport_size.y / 2 + Milky2018$selene$camera$$camera.offset.y;
      const _bind$10 = Milky2018$selene$camera$$camera.limit_top;
      if (_bind$10.$tag === 1) {
        const _Some$3 = _bind$10;
        const _top = _Some$3._0;
        if (Milky2018$selene$camera$$camera.position.y < _top) {
          Milky2018$selene$camera$$camera.position.y = _top;
        }
      }
      const _bind$11 = Milky2018$selene$camera$$camera.limit_bottom;
      if (_bind$11.$tag === 1) {
        const _Some$3 = _bind$11;
        const _bottom = _Some$3._0;
        if (Milky2018$selene$camera$$camera.position.y > _bottom - viewport_size.y) {
          Milky2018$selene$camera$$camera.position.y = _bottom - viewport_size.y;
        }
      }
      const _bind$12 = Milky2018$selene$camera$$camera.limit_left;
      if (_bind$12.$tag === 1) {
        const _Some$3 = _bind$12;
        const _left = _Some$3._0;
        if (Milky2018$selene$camera$$camera.position.x < _left) {
          Milky2018$selene$camera$$camera.position.x = _left;
        }
      }
      const _bind$13 = Milky2018$selene$camera$$camera.limit_right;
      if (_bind$13.$tag === 1) {
        const _Some$3 = _bind$13;
        const _right = _Some$3._0;
        if (Milky2018$selene$camera$$camera.position.x > _right - viewport_size.x) {
          Milky2018$selene$camera$$camera.position.x = _right - viewport_size.x;
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
function Milky2018$selene$sprite$$Sprite$new_animation(animation, zindex) {
  return { sprite_type: new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(animation), zindex: zindex };
}
function Milky2018$selene$sprite$$Sprite$new_picture(picture, zindex) {
  return { sprite_type: new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(picture), zindex: zindex };
}
function Milky2018$selene$sprite$$Sprite$new_text(text, zindex) {
  return { sprite_type: new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(text), zindex: zindex };
}
function Milky2018$selene$sprite$$render_animation(backend, animation, pos) {
  backend.method_2(backend.self, animation.sprite_path, pos.x, pos.y, animation.offset.x + animation.width * $f64_convert_i32_u(moonbitlang$core$double$$Double$to_uint(animation.frame)), animation.offset.y, animation.width, animation.height, animation.transform);
  if (animation.finished) {
    return undefined;
  }
  animation.frame = animation.frame + animation.rate;
  if (moonbitlang$core$double$$Double$to_uint(animation.frame) >>> 0 >= animation.max_frame >>> 0) {
    if (animation.loop_) {
      animation.frame = 0;
      return;
    } else {
      animation.finished = true;
      animation.frame = animation.frame - animation.rate;
      const _bind$8 = animation.finished_callback;
      if (_bind$8 === undefined) {
        return;
      } else {
        const _Some = _bind$8;
        const _callback = _Some;
        _callback();
        return;
      }
    }
  } else {
    return;
  }
}
function Milky2018$selene$sprite$$render_sprite_system(backend) {
  const _p = moonbitlang$core$builtin$$Map$to_array$6$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (moonbitlang$core$set$$Set$contains$2$(Milky2018$selene$system$$all_entities, _p$5._0)) {
        moonbitlang$core$array$$Array$push$18$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by_key$20$(sprites, (pair) => pair._1.zindex);
  const _len = sprites.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      _L: {
        const sprite = sprites[_i];
        const e = sprite._0;
        const sprite$2 = sprite._1;
        const _bind$8 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, e);
        if (_bind$8 === undefined) {
          break _L;
        } else {
          const _Some = _bind$8;
          const _pos = _Some;
          const _bind$9 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$camera$$uis, e);
          const pos = _bind$9 === -1 ? moonbitlang$core$builtin$$Sub$sub$41$(_pos, Milky2018$selene$camera$$camera.position) : _pos;
          const _bind$10 = sprite$2.sprite_type;
          switch (_bind$10.$tag) {
            case 0: {
              const _Picture = _bind$10;
              const _picture = _Picture._0;
              backend.method_1(backend.self, _picture.tile_path, pos.x, pos.y, _picture.size.x, _picture.size.y, _picture.transform, _picture.repeat);
              break;
            }
            case 1: {
              const _Animation = _bind$10;
              const _anime = _Animation._0;
              Milky2018$selene$sprite$$render_animation(backend, _anime, pos);
              break;
            }
            default: {
              const _Text = _bind$10;
              const _text = _Text._0;
              backend.method_6(backend.self, _text.content, pos.x, pos.y, _text.font, _text.color);
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
function Milky2018$selene$sprite$$Picture$new$46$inner(size, tile_path, transform, repeat) {
  return { size: size, tile_path: tile_path, transform: transform, repeat: repeat };
}
function Milky2018$selene$sprite$$Picture$new(size, tile_path, transform$46$opt, repeat$46$opt) {
  let transform;
  if (transform$46$opt === undefined) {
    transform = Milky2018$selene$math$$Transform$new(undefined, undefined, undefined);
  } else {
    const _Some = transform$46$opt;
    transform = _Some;
  }
  const repeat = repeat$46$opt === -1 ? false : repeat$46$opt;
  return Milky2018$selene$sprite$$Picture$new$46$inner(size, tile_path, transform, repeat);
}
function Milky2018$selene$sprite$$animation_id_generate() {
  const id = Milky2018$selene$sprite$$animation_id_generator.val;
  Milky2018$selene$sprite$$animation_id_generator.val = id + 1 | 0;
  return id;
}
function Milky2018$selene$sprite$$Animation$new$46$inner(sprite_path, max_frame, height, width, transform, loop_, rate, offset, start_frame) {
  const _bind$8 = $f64_convert_i32_u(start_frame);
  const _bind$9 = Milky2018$selene$sprite$$animation_id_generate();
  const _bind$10 = undefined;
  return { sprite_path: sprite_path, max_frame: max_frame, height: height, width: width, offset: offset, id: _bind$9, transform: transform, loop_: loop_, rate: rate, frame: _bind$8, finished: false, finished_callback: _bind$10 };
}
function Milky2018$selene$sprite$$Animation$new(sprite_path, max_frame, height, width, transform$46$opt, loop_$46$opt, rate$46$opt, offset$46$opt, start_frame$46$opt) {
  let transform;
  if (transform$46$opt === undefined) {
    transform = Milky2018$selene$math$$Transform$new(undefined, undefined, undefined);
  } else {
    const _Some = transform$46$opt;
    transform = _Some;
  }
  const loop_ = loop_$46$opt === -1 ? false : loop_$46$opt;
  let rate;
  if (rate$46$opt.$tag === 1) {
    const _Some = rate$46$opt;
    rate = _Some._0;
  } else {
    rate = 0.2;
  }
  let offset;
  if (offset$46$opt === undefined) {
    offset = Milky2018$selene$math$$Vec2D$new(0, 0);
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  let start_frame;
  if (start_frame$46$opt === undefined) {
    start_frame = 0;
  } else {
    const _Some = start_frame$46$opt;
    start_frame = _Some;
  }
  return Milky2018$selene$sprite$$Animation$new$46$inner(sprite_path, max_frame, height, width, transform, loop_, rate, offset, start_frame);
}
function Milky2018$selene$collision$$QuadTree$new(position, size, depth) {
  const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$2$(8);
  const _bind$9 = [];
  const _bind$10 = { position: position, size: size };
  return { position: position, size: size, children: _bind$9, depth: depth, bounding_box: _bind$10, entities: _bind$8 };
}
function Milky2018$selene$collision$$QuadTree$insert(self, entity, box) {
  if (!Milky2018$selene$math$$Rect$intersects(self.bounding_box, box)) {
    return undefined;
  }
  if (self.depth >= 5) {
    moonbitlang$core$set$$Set$add$2$(self.entities, entity);
    return undefined;
  }
  const _p = self.children;
  if (_p.length === 0) {
    const half_size = Milky2018$selene$math$$Vec2D$new(self.size.x * 0.5, self.size.y * 0.5);
    const _self = self.children;
    moonbitlang$core$array$$Array$push$16$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    moonbitlang$core$array$$Array$push$16$(_self, Milky2018$selene$collision$$QuadTree$new(moonbitlang$core$builtin$$Add$add$41$(self.position, Milky2018$selene$math$$Vec2D$new(half_size.x, 0)), half_size, self.depth + 1 | 0));
    moonbitlang$core$array$$Array$push$16$(_self, Milky2018$selene$collision$$QuadTree$new(moonbitlang$core$builtin$$Add$add$41$(self.position, Milky2018$selene$math$$Vec2D$new(0, half_size.y)), half_size, self.depth + 1 | 0));
    moonbitlang$core$array$$Array$push$16$(_self, Milky2018$selene$collision$$QuadTree$new(moonbitlang$core$builtin$$Add$add$41$(self.position, half_size), half_size, self.depth + 1 | 0));
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
function Milky2018$selene$collision$$QuadTree$remove(self, entity, box) {
  if (!Milky2018$selene$math$$Rect$intersects(self.bounding_box, box)) {
    return undefined;
  }
  if (self.depth >= 5) {
    moonbitlang$core$set$$Set$remove$2$(self.entities, entity);
    return undefined;
  }
  const _arr = self.children;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const child = _arr[_i];
      Milky2018$selene$collision$$QuadTree$remove(child, entity, box);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (moonbitlang$core$builtin$$Iter$all$16$(moonbitlang$core$array$$Array$iter$16$(self.children), (c) => {
    const _p = c.entities;
    if (_p.size === 0) {
      const _p$2 = c.children;
      return _p$2.length === 0;
    } else {
      return false;
    }
  })) {
    moonbitlang$core$array$$Array$clear$16$(self.children);
    return;
  } else {
    return;
  }
}
function Milky2018$selene$collision$$QuadTree$query(self, area) {
  const _bind$8 = [self];
  const trees = { val: moonbitlang$core$list$$List$from_array$16$({ buf: _bind$8, start: 0, end: 1 }) };
  let results = moonbitlang$core$set$$Set$new$46$inner$2$(8);
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
        results = moonbitlang$core$set$$Set$union$2$(results, _hd.entities);
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
function Milky2018$selene$collision$$add_collision_info(entity, target, direction) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$8.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$48$(0));
  }
  moonbitlang$core$array$$Array$push$48$(moonbitlang$core$option$$Option$unwrap$40$(moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, velocity, axis) {
  const pos = { x: object.position.x, y: object.position.y };
  const size = { x: object.size.x, y: object.size.y };
  if (Milky2018$selene$math$$Vec2D$op_get(velocity, axis) >= 0) {
    Milky2018$selene$math$$Vec2D$op_set(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  } else {
    Milky2018$selene$math$$Vec2D$op_set(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
    Milky2018$selene$math$$Vec2D$op_set(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  }
  return { position: pos, size: size };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$21$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const new_pos = Milky2018$selene$math$$Vec2D$new(object.position.x, object.position.y);
  Milky2018$selene$math$$Vec2D$op_set(new_pos, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const velocity_axis = Milky2018$selene$math$$Vec2D$new(0, 0);
  Milky2018$selene$math$$Vec2D$op_set(velocity_axis, axis, Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, velocity_axis, axis);
  const entities = Milky2018$selene$collision$$QuadTree$query(Milky2018$selene$collision$$quadtree_root, ray_collision);
  const _it = moonbitlang$core$set$$Set$iterator$2$(moonbitlang$core$set$$Set$intersection$2$(entities, Milky2018$selene$system$$all_entities));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$2$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      if (moonbitlang$core$builtin$$op_notequal$2$(_e, entity)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collides, _e);
        if (_bind$9 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$9;
          const _collision = _Some$2;
          const _bind$10 = _collision.shape;
          const _Rect = _bind$10;
          const _x = _Rect._0;
          const _width = _x.x;
          const _height = _x.y;
          const _offset = _Rect._1;
          const _bind$11 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _e);
          if (_bind$11 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$11;
            const _pos = _Some$3;
            if (Milky2018$selene$collision$$CollisionMask$contains(mask, _collision.layer)) {
              const _bind$12 = Milky2018$selene$math$$Vec2D$new(_width, _height);
              const _bind$13 = moonbitlang$core$builtin$$Add$add$41$(_pos, _offset);
              const collision_box = { position: _bind$13, size: _bind$12 };
              if (Milky2018$selene$math$$Rect$intersects(ray_collision, collision_box)) {
                const dir = Milky2018$selene$math$$Vec2D$new(0, 0);
                if (Milky2018$selene$math$$Vec2D$op_get(velocity, axis) > 0) {
                  Milky2018$selene$math$$Vec2D$op_set(new_pos, axis, Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) - Milky2018$selene$math$$Vec2D$op_get(object.size, axis));
                  Milky2018$selene$math$$Vec2D$op_set(velocity, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                  Milky2018$selene$math$$Vec2D$op_set(dir, axis, 1);
                } else {
                  if (Milky2018$selene$math$$Vec2D$op_get(velocity, axis) < 0) {
                    Milky2018$selene$math$$Vec2D$op_set(new_pos, axis, Milky2018$selene$math$$Vec2D$op_get(_bind$13, axis) + Milky2018$selene$math$$Vec2D$op_get(_bind$12, axis));
                    Milky2018$selene$math$$Vec2D$op_set(velocity, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                    Milky2018$selene$math$$Vec2D$op_set(dir, axis, -1);
                  }
                }
                Milky2018$selene$collision$$add_collision_info(entity, _e, dir);
              }
            } else {
              continue;
            }
          }
        }
      } else {
        continue;
      }
      continue;
    }
  }
  return new_pos;
}
function Milky2018$selene$collision$$move_with_collide(e, collide, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const _bind$9 = collide.shape;
    const _Rect = _bind$9;
    const _x = _Rect._0;
    const _width = _x.x;
    const _height = _x.y;
    const _offset = _Rect._1;
    const _bind$10 = moonbitlang$core$builtin$$Add$add$41$(_pos, _offset);
    const _bind$11 = Milky2018$selene$math$$Vec2D$new(_width, _height);
    const box = { position: _bind$10, size: _bind$11 };
    const new_pos_x = Milky2018$selene$collision$$move_axis(e, box, velocity, 0, collide.mask);
    const object_x = { position: new_pos_x, size: _bind$11 };
    const new_pos = Milky2018$selene$collision$$move_axis(e, object_x, velocity, 1, collide.mask);
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, e, new_pos);
    const new_box = { position: new_pos, size: _bind$11 };
    Milky2018$selene$collision$$QuadTree$remove(Milky2018$selene$collision$$quadtree_root, e, box);
    Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, e, new_box);
    return;
  }
}
function Milky2018$selene$collision$$move_without_collide(e, velocity) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, e);
  if (_bind$8 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$8;
    const _pos = _Some;
    const new_pos = Milky2018$selene$math$$Vec2D$new(_pos.x + velocity.x, _pos.y + velocity.y);
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, e, new_pos);
    const _bind$9 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$collision$$areas, e);
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$9;
      const _area = _Some$2;
      const _bind$10 = _area.shape;
      const _Rect = _bind$10;
      const _x = _Rect._0;
      const _width = _x.x;
      const _height = _x.y;
      const _offset = _Rect._1;
      const box = { position: moonbitlang$core$builtin$$Add$add$41$(new_pos, _offset), size: Milky2018$selene$math$$Vec2D$new(_width, _height) };
      const old_box = { position: _pos, size: Milky2018$selene$math$$Vec2D$new(_width, _height) };
      Milky2018$selene$collision$$QuadTree$remove(Milky2018$selene$collision$$quadtree_root, e, old_box);
      Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, e, box);
      return;
    }
  }
}
function Milky2018$selene$collision$$move_system(_backend) {
  const _it = moonbitlang$core$set$$Set$iterator$2$(Milky2018$selene$system$$all_entities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$2$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collides, _e);
      if (_bind$9 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$9;
        const _collide = _Some$2;
        const _bind$10 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _e);
        if (_bind$10 === undefined) {
          $panic();
        } else {
          const _Some$3 = _bind$10;
          const _pos = _Some$3;
          const _bind$11 = _collide.shape;
          const _Rect = _bind$11;
          const _x = _Rect._0;
          const _width = _x.x;
          const _height = _x.y;
          const _offset = _Rect._1;
          const box = { position: moonbitlang$core$builtin$$Add$add$41$(_pos, _offset), size: Milky2018$selene$math$$Vec2D$new(_width, _height) };
          Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, _e, box);
        }
      }
      continue;
    }
  }
  moonbitlang$core$builtin$$Map$clear$12$(Milky2018$selene$collision$$collision_infos);
  const _it$2 = moonbitlang$core$set$$Set$iterator$2$(Milky2018$selene$system$$all_entities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$2$(_it$2);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$velocity$$velocities, _e);
      if (_bind$9 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$9;
        const _vel = _Some$2;
        const _bind$10 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collides, _e);
        if (_bind$10 === undefined) {
          Milky2018$selene$collision$$move_without_collide(_e, _vel);
        } else {
          const _Some$3 = _bind$10;
          const _collide = _Some$3;
          Milky2018$selene$collision$$move_with_collide(_e, _collide, _vel);
        }
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
function Milky2018$selene$collision$$Area$new$46$inner(shape, layer, mask, monitoring_mouse) {
  const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$2$(8);
  const _bind$9 = [];
  const _bind$10 = [];
  const _bind$11 = [];
  const _bind$12 = [];
  const _bind$13 = [];
  const _bind$14 = [];
  return { shape: shape, layer: layer, mask: mask, on_enter_callbacks: _bind$9, on_exit_callbacks: _bind$10, on_pressed_callbacks: _bind$11, on_released_callbacks: _bind$12, on_just_pressed_callbacks: _bind$13, on_just_released_callbacks: _bind$14, last_contains: _bind$8, monitoring_mouse: monitoring_mouse };
}
function Milky2018$selene$collision$$Area$on_enter(self, callback) {
  moonbitlang$core$array$$Array$push$46$(self.on_enter_callbacks, callback);
}
function Milky2018$selene$collision$$Area$on_just_pressed(self, callback) {
  moonbitlang$core$array$$Array$push$47$(self.on_just_pressed_callbacks, callback);
}
function Milky2018$selene$collision$$area_collide_system(_discard_) {
  const _it = moonbitlang$core$set$$Set$iterator$2$(Milky2018$selene$system$$all_entities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$2$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$collision$$areas, _e);
      if (_bind$9 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$9;
        const _area = _Some$2;
        const _bind$10 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _e);
        if (_bind$10 === undefined) {
          $panic();
        } else {
          const _Some$3 = _bind$10;
          const _position = _Some$3;
          const _bind$11 = _area.shape;
          const _Rect = _bind$11;
          const _x = _Rect._0;
          const _width = _x.x;
          const _height = _x.y;
          const _offset = _Rect._1;
          const _bind$12 = Milky2018$selene$math$$Vec2D$new(_width, _height);
          const _bind$13 = moonbitlang$core$builtin$$Add$add$41$(_position, _offset);
          const box = { position: _bind$13, size: _bind$12 };
          Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, _e, box);
          const new_last_contains = moonbitlang$core$set$$Set$new$46$inner$2$(8);
          const entities = Milky2018$selene$collision$$QuadTree$query(Milky2018$selene$collision$$quadtree_root, box);
          const _it$2 = moonbitlang$core$set$$Set$iterator$2$(moonbitlang$core$set$$Set$intersection$2$(entities, Milky2018$selene$system$$all_entities));
          while (true) {
            const _bind$14 = moonbitlang$core$builtin$$Iterator$next$2$(_it$2);
            if (_bind$14 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$14;
              const _entity = _Some$4;
              const _bind$15 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$collision$$areas, _entity);
              if (_bind$15 === undefined) {
                const _bind$16 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$collides, _entity);
                if (_bind$16 === undefined) {
                } else {
                  const _Some$5 = _bind$16;
                  const _other_body = _Some$5;
                  const _bind$17 = _other_body.shape;
                  const _Rect$2 = _bind$17;
                  const _x$2 = _Rect$2._0;
                  const _other_width = _x$2.x;
                  const _other_height = _x$2.y;
                  const _other_offset = _Rect$2._1;
                  const _bind$18 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _entity);
                  if (_bind$18 === undefined) {
                    $panic();
                  } else {
                    const _Some$6 = _bind$18;
                    const _other_position = _Some$6;
                    const _bind$19 = Milky2018$selene$math$$Vec2D$new(_other_width, _other_height);
                    const _bind$20 = moonbitlang$core$builtin$$Add$add$41$(_other_position, _other_offset);
                    const other_box = { position: _bind$20, size: _bind$19 };
                    if (Milky2018$selene$math$$Rect$intersects(box, other_box)) {
                      if (Milky2018$selene$collision$$CollisionMask$contains(_area.mask, _other_body.layer)) {
                      } else {
                        continue;
                      }
                    } else {
                      continue;
                    }
                  }
                }
              } else {
                const _Some$5 = _bind$15;
                const _other_area = _Some$5;
                const _bind$16 = _other_area.shape;
                const _Rect$2 = _bind$16;
                const _x$2 = _Rect$2._0;
                const _other_width = _x$2.x;
                const _other_height = _x$2.y;
                const _other_offset = _Rect$2._1;
                const _bind$17 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _entity);
                if (_bind$17 === undefined) {
                  $panic();
                } else {
                  const _Some$6 = _bind$17;
                  const _other_position = _Some$6;
                  const _bind$18 = Milky2018$selene$math$$Vec2D$new(_other_width, _other_height);
                  const _bind$19 = moonbitlang$core$builtin$$Add$add$41$(_other_position, _other_offset);
                  const other_box = { position: _bind$19, size: _bind$18 };
                  if (Milky2018$selene$math$$Rect$intersects(box, other_box)) {
                    if (Milky2018$selene$collision$$CollisionMask$contains(_area.mask, _other_area.layer)) {
                    } else {
                      continue;
                    }
                  } else {
                    continue;
                  }
                }
              }
              moonbitlang$core$set$$Set$add$2$(new_last_contains, _entity);
              if (moonbitlang$core$set$$Set$contains$2$(_area.last_contains, _entity)) {
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
              continue;
            }
          }
          const _it$3 = moonbitlang$core$set$$Set$iterator$2$(_area.last_contains);
          while (true) {
            const _bind$14 = moonbitlang$core$builtin$$Iterator$next$2$(_it$3);
            if (_bind$14 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$14;
              const _entity = _Some$4;
              if (moonbitlang$core$set$$Set$contains$2$(new_last_contains, _entity)) {
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
          _area.last_contains = new_last_contains;
        }
      }
      continue;
    }
  }
}
function Milky2018$selene$collision$$area_click_system(_discard_) {
  const _bind$8 = Milky2018$selene$math$$Vec2D$new(1, 1);
  const _bind$9 = Milky2018$selene$system$$mouse.pos;
  const box = { position: _bind$9, size: _bind$8 };
  const entities = Milky2018$selene$collision$$QuadTree$query(Milky2018$selene$collision$$quadtree_root, box);
  const _it = moonbitlang$core$set$$Set$iterator$2$(moonbitlang$core$set$$Set$intersection$2$(entities, Milky2018$selene$system$$all_entities));
  while (true) {
    const _bind$10 = moonbitlang$core$builtin$$Iterator$next$2$(_it);
    if (_bind$10 === undefined) {
      return;
    } else {
      const _Some = _bind$10;
      const _e = _Some;
      const _bind$11 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$collision$$areas, _e);
      if (_bind$11 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$11;
        const _area = _Some$2;
        if (_area.monitoring_mouse) {
          const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _e);
          if (_bind$12 === undefined) {
            $panic();
          } else {
            const _Some$3 = _bind$12;
            const _position = _Some$3;
            const _bind$13 = _area.shape;
            const _Rect = _bind$13;
            const _x = _Rect._0;
            const _width = _x.x;
            const _height = _x.y;
            const _offset = _Rect._1;
            const _bind$14 = Milky2018$selene$math$$Vec2D$new(_width, _height);
            const _bind$15 = moonbitlang$core$builtin$$Add$add$41$(_position, _offset);
            const area_box = { position: _bind$15, size: _bind$14 };
            const _bind$16 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$camera$$uis, _e);
            const box$2 = _bind$16 === -1 ? Milky2018$selene$math$$Rect$shift(box, Milky2018$selene$camera$$camera.position) : box;
            if (!Milky2018$selene$math$$Rect$intersects(box$2, area_box)) {
              continue;
            }
            const _arr = [0, 1, 2];
            const _len = _arr.length;
            let _tmp = 0;
            while (true) {
              const _i = _tmp;
              if (_i < _len) {
                const button = _arr[_i];
                if (Milky2018$selene$system$$is_mouse_pressed(button)) {
                  const _arr$2 = _area.on_pressed_callbacks;
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
                  const _arr$2 = _area.on_released_callbacks;
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
                  const _arr$2 = _area.on_just_pressed_callbacks;
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
                  const _arr$2 = _area.on_just_released_callbacks;
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
        } else {
          continue;
        }
      }
      continue;
    }
  }
}
function Milky2018$selene$plugins$$default_plugin(app) {
  const _self = app.systems;
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$collision$$move_system, _1: 50 });
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$system$$advanced_key_system, _1: 100 });
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$system$$advanced_mouse_system, _1: 105 });
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$collision$$area_click_system, _1: 45 });
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: 40 });
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: -100 });
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: 0 });
  moonbitlang$core$array$$Array$push$17$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: 30 });
}
function rami3l$js$45$ffi$js$$Union3$from0$50$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$50$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$51$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$37$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$52$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$53$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$28$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$54$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$54$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$54$(self)) {
    moonbitlang$core$abort$$abort$15$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$36$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$4$(self) : Option$None$4$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$38$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$5$(self) : Option$None$5$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$39$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$37$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$55$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$55$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$55$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$53$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$56$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$57$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$36$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$58$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$39$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$58$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$38$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$37$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$37$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$28$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$system$$Backend$register_mouse_events$59$(_self, mouse) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$56$(Milky2018$selene$45$canvas$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$39$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$58$(event));
    mouse.pos.x = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$55$(mouse_event) + 0;
    mouse.pos.y = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$55$(mouse_event) + 0;
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$56$(Milky2018$selene$45$canvas$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$39$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$58$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$55$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$56$(Milky2018$selene$45$canvas$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$39$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$58$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$55$(mouse_event);
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
function Milky2018$selene$system$$Backend$register_key_events$59$(_self, pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$56$(Milky2018$selene$45$canvas$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$38$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$58$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$4$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$56$(Milky2018$selene$45$canvas$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$38$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$58$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$add$4$(pressed_keys, _c);
      return;
    }
  });
}
function Milky2018$selene$45$canvas$$get_image_element(png) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$45$canvas$$element_cache, png);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
    const _element = _Some._0;
    return _element;
  }
  const element = Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new();
  Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src(element, png);
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$45$canvas$$element_cache, png, element);
  return element;
}
function Milky2018$selene$system$$Backend$draw_picture$59$(self, png, x, y, width, height, transform, repeat) {
  const element = Milky2018$selene$45$canvas$$get_image_element(png);
  const repeat_mode = repeat ? "repeat" : "no-repeat";
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(self.context, rami3l$js$45$ffi$js$$Union7$from0$52$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from2$50$(pattern));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.scale.x, transform.skew.x, transform.skew.y, transform.scale.y, transform.translate.x, transform.translate.y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_sprite$59$(self, sprite_path, x, y, offset_x, offset_y, width, height, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.scale.x, transform.skew.x, transform.skew.y, transform.scale.y, transform.translate.x, transform.translate.y);
  const element = Milky2018$selene$45$canvas$$get_image_element(sprite_path);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size(self.context, element, offset_x, offset_y, width, height, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_stroke_rect$59$(self, x, y, width, height, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$50$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_text$59$(self, text, x, y, font, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(self.context, font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$50$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self.context, text, x, y, Option$None$8$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$45$canvas$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$57$(rami3l$js$45$ffi$js$$Nullable$unwrap$54$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$37$(rami3l$js$45$ffi$js$$Union5$to0$51$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$8 = Milky2018$selene$math$$Vec2D$zero();
  return { canvas: canvas, context: context, viewport_size: _bind$8 };
}
function Milky2018$selene$45$canvas$$schedule_with_fixed_interval(interval, callback) {
  const lastTime = { val: 0 };
  const lastId = { val: 0 };
  const update = (time) => {
    if (lastTime.val === 0) {
      lastTime.val = time;
    }
    const elapsed = time - lastTime.val;
    if (elapsed >= interval) {
      callback();
      lastTime.val = time;
      lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$45$canvas$$window, update);
      return;
    } else {
      lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$45$canvas$$window, update);
      return;
    }
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
function Milky2018$selene$system$$Backend$build$59$(self, initialize, game_loop, canvas_width, canvas_height, fps) {
  initialize();
  self.viewport_size.x = canvas_width;
  self.viewport_size.y = canvas_height;
  Milky2018$selene$45$canvas$$set_viewport_height(self.canvas, canvas_height);
  Milky2018$selene$45$canvas$$set_viewport_width(self.canvas, canvas_width);
  Milky2018$selene$45$canvas$$schedule_with_fixed_interval(1000 / $f64_convert_i32_u(fps), () => {
    Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect(self.context, 0, 0, canvas_width, canvas_height);
    game_loop();
  });
  return () => {
  };
}
function Milky2018$selene$system$$Backend$get_canvas_size$59$(self) {
  return Milky2018$selene$math$$Vec2D$new(self.viewport_size.x, self.viewport_size.y);
}
function Milky2018$selene$system$$Backend$play_audio$59$(_self, audio_path, volume, loop_) {
  const audio = Milky2018$selene$45$canvas$$Audio$new(audio_path);
  Milky2018$selene$45$canvas$$Audio$set_volume(audio, volume);
  Milky2018$selene$45$canvas$$Audio$set_loop(audio, loop_);
  Milky2018$selene$45$canvas$$Audio$play(audio);
}
function moonbitlang$core$builtin$$Eq$equal$14$(_x_165, _x_166) {
  const _p = _x_165.entity;
  const _p$2 = _x_166.entity;
  if (_p === _p$2) {
    return _x_165.level === _x_166.level;
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$14$(_x_161, _x_162) {
  moonbitlang$core$builtin$$Hash$hash_combine$2$(_x_161.entity, _x_162);
  moonbitlang$core$builtin$$Hash$hash_combine$10$(_x_161.level, _x_162);
}
function Asterless$MGPIC2025$main$$Cat$get_picture_by_level(level) {
  const size = ((Math.imul(level - 1 | 0, 16) | 0) + 32 | 0) + 0;
  const size_vec = Milky2018$selene$math$$Vec2D$new(size, size);
  return Milky2018$selene$sprite$$Picture$new(size_vec, `assets/Memes/cat_lv${moonbitlang$core$builtin$$Show$to_string$10$(level)}_${moonbitlang$core$builtin$$Show$to_string$35$(size)}x${moonbitlang$core$builtin$$Show$to_string$35$(size)}.png`, undefined, -1);
}
function Asterless$MGPIC2025$main$$set_score(score) {
  Asterless$MGPIC2025$main$$game_state.score = score;
  Asterless$MGPIC2025$main$$game_state.score_bar.content = `Score: ${moonbitlang$core$int$$Int$to_string$46$inner(Asterless$MGPIC2025$main$$game_state.score, 10)}`;
}
function Asterless$MGPIC2025$main$$random_cat_level() {
  const roll = Asterless$MGPIC2025$main$$game_state.score % 10 | 0;
  const value = roll < 0 ? roll + 10 | 0 : roll;
  return value < 5 ? 1 : value < 7 ? 2 : value < 9 ? 3 : 4;
}
function Asterless$MGPIC2025$main$$bind_key(key, trigger, handler) {
  switch (trigger) {
    case 0: {
      if (Milky2018$selene$system$$is_just_pressed(key)) {
        handler();
        return;
      } else {
        return;
      }
    }
    case 1: {
      if (Milky2018$selene$system$$is_pressed(key)) {
        handler();
        return;
      } else {
        return;
      }
    }
    default: {
      if (!Milky2018$selene$system$$is_pressed(key)) {
        handler();
        return;
      } else {
        return;
      }
    }
  }
}
function Asterless$MGPIC2025$main$$bind_keys(keys, trigger, handler) {
  let f;
  switch (trigger) {
    case 1: {
      f = (x) => Milky2018$selene$system$$is_pressed(x);
      break;
    }
    case 0: {
      f = (x) => Milky2018$selene$system$$is_just_pressed(x);
      break;
    }
    default: {
      f = (x) => !Milky2018$selene$system$$is_pressed(x);
    }
  }
  const _p = new Array(keys.length);
  const _p$2 = keys.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = keys[_p$3];
      _p[_p$3] = f(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$3 = _p;
  const _p$4 = true;
  let state;
  let _tmp$2 = 0;
  let _tmp$3 = _p$4;
  while (true) {
    const _p$5 = _tmp$2;
    const _p$6 = _tmp$3;
    if (_p$5 < _p$3.length) {
      _tmp$2 = _p$5 + 1 | 0;
      const _p$7 = moonbitlang$core$array$$Array$at$32$(_p$3, _p$5);
      _tmp$3 = _p$6 && _p$7;
      continue;
    } else {
      state = _p$6;
      break;
    }
  }
  if (state) {
    handler();
    return;
  } else {
    return;
  }
}
function Asterless$MGPIC2025$main$$Cat$get_collision_layer(self) {
  const level = self.level;
  return level >= 1 && level < 10 ? moonbitlang$core$array$$Array$at$21$(Asterless$MGPIC2025$main$$cat_collision_layers, level - 1 | 0) : moonbitlang$core$array$$Array$at$21$(Asterless$MGPIC2025$main$$cat_collision_layers, 0);
}
function Asterless$MGPIC2025$main$$Cat$get_collision_mask_layers(self) {
  const layers = [Asterless$MGPIC2025$main$$terrain_collision_layer];
  moonbitlang$core$array$$Array$push_iter$21$(layers, moonbitlang$core$array$$Array$iter$21$(Asterless$MGPIC2025$main$$cat_collision_layers));
  return layers;
}
function Asterless$MGPIC2025$main$$Cat$get_picture(self) {
  return Asterless$MGPIC2025$main$$Cat$get_picture_by_level(self.level);
}
function Asterless$MGPIC2025$main$$Cat$get_size(self) {
  const _p = self.level;
  return ((Math.imul(_p - 1 | 0, 16) | 0) + 32 | 0) + 0;
}
function Asterless$MGPIC2025$main$$Cat$new(position, level) {
  const entity = Milky2018$selene$system$$Entity$new();
  const cat = { entity: entity, level: level };
  const size = Asterless$MGPIC2025$main$$Cat$get_size(cat);
  const velocity = Milky2018$selene$math$$Vec2D$zero();
  const cat_layer = Asterless$MGPIC2025$main$$Cat$get_collision_layer(cat);
  const collide = { shape: new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(Milky2018$selene$math$$Vec2D$new(size, size), Milky2018$selene$math$$Vec2D$zero()), layer: cat_layer, mask: Asterless$MGPIC2025$main$$Cat$get_collision_mask_layers(cat) };
  const area = Milky2018$selene$collision$$Area$new$46$inner(new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(Milky2018$selene$math$$Vec2D$new(size * 1.2, size * 1.2), Milky2018$selene$math$$Vec2D$zero()), cat_layer, [moonbitlang$core$array$$Array$at$21$(Asterless$MGPIC2025$main$$cat_collision_layers, level - 1 | 0)], true);
  Milky2018$selene$collision$$Area$on_enter(area, (other) => {
    if (entity === other) {
      return undefined;
    }
    moonbitlang$core$hashset$$HashSet$add$3$(Asterless$MGPIC2025$main$$game_state.to_merge, { _0: entity, _1: other });
  });
  Milky2018$selene$collision$$Area$on_just_pressed(area, (_button) => {
    moonbitlang$core$hashset$$HashSet$add$2$(Asterless$MGPIC2025$main$$game_state.cats_clicked, entity);
  });
  moonbitlang$core$hashmap$$HashMap$set$0$(Asterless$MGPIC2025$main$$cats_by_entity, entity, cat);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, position);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$velocity$$velocities, entity, velocity);
  moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collides, entity, collide);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$collision$$areas, entity, area);
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, entity, Milky2018$selene$sprite$$Sprite$new_picture(Asterless$MGPIC2025$main$$Cat$get_picture(cat), 30));
  return cat;
}
function Asterless$MGPIC2025$main$$cat_drop(backend) {
  const ptr_position = moonbitlang$core$builtin$$Map$at$5$(Milky2018$selene$position$$positions, Asterless$MGPIC2025$main$$ptr_entity);
  const level = Asterless$MGPIC2025$main$$game_state.next_cat_level;
  Asterless$MGPIC2025$main$$Cat$new(ptr_position, level);
  Asterless$MGPIC2025$main$$game_state.next_cat_level = Asterless$MGPIC2025$main$$random_cat_level();
  const level$2 = Asterless$MGPIC2025$main$$game_state.next_cat_level;
  Asterless$MGPIC2025$main$$game_state.pointer_sprite = Milky2018$selene$sprite$$Sprite$new_picture(Asterless$MGPIC2025$main$$Cat$get_picture_by_level(level$2), 40);
  backend.method_7(backend.self, "./assets/sounds/drop.wav", 1, false);
}
function Asterless$MGPIC2025$main$$SigNum$signum$60$(state) {
  switch (state) {
    case 0: {
      return -1;
    }
    case 1: {
      return 1;
    }
    default: {
      return 0;
    }
  }
}
function Asterless$MGPIC2025$main$$cat_move(move_state) {
  const _p = Asterless$MGPIC2025$main$$cats_by_entity.capacity;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _tmp$2 = Asterless$MGPIC2025$main$$cats_by_entity.entries;
      $bound_check(_tmp$2, _p$2);
      const _p$3 = _tmp$2[_p$2];
      if (_p$3 === undefined) {
      } else {
        const _p$4 = _p$3;
        const _p$5 = _p$4;
        const _p$6 = _p$5.key;
        const _p$7 = _p$5.value;
        moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, _p$6).x = Asterless$MGPIC2025$main$$SigNum$signum$60$(move_state) * 4 / (_p$7.level + 0);
      }
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Asterless$MGPIC2025$main$$music_play(backend) {
  if (!Asterless$MGPIC2025$main$$game_state.background_music_started) {
    backend.method_7(backend.self, "./assets/Sounds/background_music.wav", 0.2, true);
    Asterless$MGPIC2025$main$$game_state.background_music_started = true;
    return;
  } else {
    return;
  }
}
function Asterless$MGPIC2025$main$$ptr_move(move_state) {
  const velocity = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, Asterless$MGPIC2025$main$$ptr_entity);
  const position = moonbitlang$core$builtin$$Map$at$5$(Milky2018$selene$position$$positions, Asterless$MGPIC2025$main$$ptr_entity);
  const ptr_size = 32 + (Asterless$MGPIC2025$main$$game_state.next_cat_level + 0) * 16;
  const right_bound = 464 - ptr_size;
  if (position.x < 16) {
    velocity.x = 0;
    position.x = 16;
  } else {
    if (position.x > right_bound) {
      velocity.x = 0;
      position.x = right_bound;
    }
  }
  switch (move_state) {
    case 2: {
      velocity.x = 0;
      return;
    }
    case 0: {
      if (position.x <= 16) {
        velocity.x = 0;
        position.x = 16;
        return;
      } else {
        if (velocity.x > -7.5) {
          const _bind$8 = velocity;
          _bind$8.x = _bind$8.x - 2.5;
          return;
        } else {
          return;
        }
      }
    }
    default: {
      if (position.x >= right_bound) {
        velocity.x = 0;
        position.x = right_bound;
        return;
      } else {
        if (velocity.x < 7.5) {
          const _bind$8 = velocity;
          _bind$8.x = _bind$8.x + 2.5;
          return;
        } else {
          return;
        }
      }
    }
  }
}
function Asterless$MGPIC2025$main$$input_system(backend) {
  Asterless$MGPIC2025$main$$bind_key(0, 1, () => {
    Asterless$MGPIC2025$main$$ptr_move(0);
  });
  Asterless$MGPIC2025$main$$bind_key(3, 1, () => {
    Asterless$MGPIC2025$main$$ptr_move(1);
  });
  Asterless$MGPIC2025$main$$bind_keys([0, 3], 2, () => {
    Asterless$MGPIC2025$main$$ptr_move(2);
  });
  Asterless$MGPIC2025$main$$bind_key(16, 1, () => {
    Asterless$MGPIC2025$main$$cat_move(0);
  });
  Asterless$MGPIC2025$main$$bind_key(4, 1, () => {
    Asterless$MGPIC2025$main$$cat_move(1);
  });
  Asterless$MGPIC2025$main$$bind_key(30, 0, () => {
    Asterless$MGPIC2025$main$$cat_drop(backend);
  });
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, Asterless$MGPIC2025$main$$ptr_entity, Asterless$MGPIC2025$main$$game_state.pointer_sprite);
  const collide = { shape: new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(Milky2018$selene$math$$Vec2D$new(32, 32), Milky2018$selene$math$$Vec2D$zero()), layer: Asterless$MGPIC2025$main$$pointer_collision_layer, mask: [Asterless$MGPIC2025$main$$terrain_collision_layer] };
  moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collides, Asterless$MGPIC2025$main$$ptr_entity, collide);
  Asterless$MGPIC2025$main$$bind_key(30, 0, () => {
    Asterless$MGPIC2025$main$$music_play(backend);
  });
}
function Asterless$MGPIC2025$main$$Cat$get_sound_path_by_level(level) {
  return `assets/Sounds/merge_lv${moonbitlang$core$builtin$$Show$to_string$10$(level)}.wav`;
}
function Asterless$MGPIC2025$main$$Cat$get_merge_score(self) {
  return moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$pow(2, self.level + 0));
}
function Asterless$MGPIC2025$main$$Cat$merge(self, other) {
  Asterless$MGPIC2025$main$$set_score(Asterless$MGPIC2025$main$$game_state.score + Asterless$MGPIC2025$main$$Cat$get_merge_score(self) | 0);
  const position_cat_1 = moonbitlang$core$builtin$$Map$at$5$(Milky2018$selene$position$$positions, self.entity);
  const position_cat_2 = moonbitlang$core$builtin$$Map$at$5$(Milky2018$selene$position$$positions, other.entity);
  const position_mid = (position_cat_1.x + position_cat_2.x) / 2;
  const size = Asterless$MGPIC2025$main$$Cat$get_size(self) + 16;
  const cat_x = 480 - position_mid - 16 < size ? 463 - size : position_mid - 16 < 0 ? 17 + size : position_mid;
  const cat_y = (position_cat_1.y + position_cat_2.y) / 2 - 32;
  const position_merged = { x: cat_x, y: cat_y };
  Asterless$MGPIC2025$main$$Cat$new(position_merged, self.level + 1 | 0);
  moonbitlang$core$hashmap$$HashMap$remove$0$(Asterless$MGPIC2025$main$$cats_by_entity, self.entity);
  moonbitlang$core$hashmap$$HashMap$remove$0$(Asterless$MGPIC2025$main$$cats_by_entity, other.entity);
  Milky2018$selene$system$$Entity$destroy(self.entity);
  Milky2018$selene$system$$Entity$destroy(other.entity);
}
function Asterless$MGPIC2025$main$$merge_system(backend) {
  const merged_this_frame = moonbitlang$core$hashset$$HashSet$new$2$(undefined);
  const _it = moonbitlang$core$hashset$$HashSet$iterator$3$(Asterless$MGPIC2025$main$$game_state.to_merge);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$3$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _pair = _Some;
      const _cat1_entity = _pair._0;
      const _cat2_entity = _pair._1;
      if (moonbitlang$core$hashset$$HashSet$contains$2$(merged_this_frame, _cat1_entity) || moonbitlang$core$hashset$$HashSet$contains$2$(merged_this_frame, _cat2_entity)) {
        continue;
      }
      const cat1_opt = moonbitlang$core$hashmap$$HashMap$get$0$(Asterless$MGPIC2025$main$$cats_by_entity, _cat1_entity);
      const cat2_opt = moonbitlang$core$hashmap$$HashMap$get$0$(Asterless$MGPIC2025$main$$cats_by_entity, _cat2_entity);
      if (cat1_opt === undefined) {
      } else {
        if (cat2_opt === undefined) {
        } else {
          let cat1;
          if (cat1_opt === undefined) {
            cat1 = $panic();
          } else {
            const _p = cat1_opt;
            cat1 = _p;
          }
          let cat2;
          if (cat2_opt === undefined) {
            cat2 = $panic();
          } else {
            const _p = cat2_opt;
            cat2 = _p;
          }
          moonbitlang$core$hashset$$HashSet$add$2$(merged_this_frame, _cat1_entity);
          moonbitlang$core$hashset$$HashSet$add$2$(merged_this_frame, _cat2_entity);
          Asterless$MGPIC2025$main$$Cat$merge(cat1, cat2);
          backend.method_7(backend.self, Asterless$MGPIC2025$main$$Cat$get_sound_path_by_level(cat1.level + 1 | 0), 0.8, false);
        }
      }
      continue;
    }
  }
  moonbitlang$core$hashset$$HashSet$clear$3$(Asterless$MGPIC2025$main$$game_state.to_merge);
}
function Asterless$MGPIC2025$main$$force_system(_backend) {
  const _it = moonbitlang$core$hashmap$$HashMap$iterator$0$(Asterless$MGPIC2025$main$$cats_by_entity);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$44$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _pair = _Some;
      const _entity = _pair._0;
      const _bind$9 = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, _entity);
      _bind$9.y = _bind$9.y + 0.3;
      const _bind$10 = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, _entity);
      _bind$10.x = _bind$10.x * 0.9;
      if (moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, _entity).x < 0.01 && moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, _entity).x > -0.01) {
        moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, _entity).x = 0;
      }
      continue;
    }
  }
}
function Asterless$MGPIC2025$main$$Cat$get_sound_path(self) {
  return Asterless$MGPIC2025$main$$Cat$get_sound_path_by_level(self.level);
}
function Asterless$MGPIC2025$main$$play_sound_system(backend) {
  const _it = moonbitlang$core$hashset$$HashSet$iterator$2$(Asterless$MGPIC2025$main$$game_state.cats_clicked);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$2$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _cat_entity = _Some;
      const cat_opt = moonbitlang$core$hashmap$$HashMap$get$0$(Asterless$MGPIC2025$main$$cats_by_entity, _cat_entity);
      if (cat_opt === undefined) {
      } else {
        let cat;
        if (cat_opt === undefined) {
          cat = $panic();
        } else {
          const _p = cat_opt;
          cat = _p;
        }
        backend.method_7(backend.self, Asterless$MGPIC2025$main$$Cat$get_sound_path(cat), 1, false);
      }
      continue;
    }
  }
  moonbitlang$core$hashset$$HashSet$clear$2$(Asterless$MGPIC2025$main$$game_state.cats_clicked);
}
function Asterless$MGPIC2025$main$$cat_teleport_system(_discard_) {
  const _p = Asterless$MGPIC2025$main$$cats_by_entity.capacity;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _tmp$2 = Asterless$MGPIC2025$main$$cats_by_entity.entries;
      $bound_check(_tmp$2, _p$2);
      const _p$3 = _tmp$2[_p$2];
      if (_p$3 === undefined) {
      } else {
        const _p$4 = _p$3;
        const _p$5 = _p$4;
        const _p$6 = _p$5.key;
        const _p$7 = _p$5.value;
        const _p$8 = Asterless$MGPIC2025$main$$Prop$get_position$2$(_p$6);
        let _p$9;
        if (_p$8 === undefined) {
          _p$9 = $panic();
        } else {
          const _p$10 = _p$8;
          _p$9 = _p$10;
        }
        if (_p$9.x > 464 - Asterless$MGPIC2025$main$$Cat$get_size(_p$7) || (_p$9.x < 16 || (_p$9.y > 600 - Asterless$MGPIC2025$main$$Cat$get_size(_p$7) || _p$9.y < 16))) {
          moonbitlang$core$hashset$$HashSet$add$14$(Asterless$MGPIC2025$main$$teleport_queue, _p$7);
        }
      }
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let space = 446;
  const _it = moonbitlang$core$hashset$$HashSet$iterator$14$(Asterless$MGPIC2025$main$$teleport_queue);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$14$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _cat = _Some;
      if (!moonbitlang$core$hashmap$$HashMap$contains$0$(Asterless$MGPIC2025$main$$cats_by_entity, _cat.entity)) {
        moonbitlang$core$hashset$$HashSet$remove$14$(Asterless$MGPIC2025$main$$teleport_queue, _cat);
        continue;
      }
      if (space - Asterless$MGPIC2025$main$$Cat$get_size(_cat) - 1 > 0) {
        const position = Milky2018$selene$math$$Vec2D$new(480 - (space + 17), 24);
        Asterless$MGPIC2025$main$$Prop$set_position$2$(_cat.entity, position);
        Asterless$MGPIC2025$main$$Prop$set_velocity$2$(_cat.entity, Milky2018$selene$math$$Vec2D$zero());
        moonbitlang$core$hashset$$HashSet$remove$14$(Asterless$MGPIC2025$main$$teleport_queue, _cat);
        space = space - (Asterless$MGPIC2025$main$$Cat$get_size(_cat) + 1);
      } else {
        break;
      }
      continue;
    }
  }
}
function Asterless$MGPIC2025$main$$Prop$get_position$2$(self) {
  return moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, self);
}
function Asterless$MGPIC2025$main$$Prop$set_position$2$(self, position) {
  moonbitlang$core$builtin$$Map$at$5$(Milky2018$selene$position$$positions, self).x = position.x;
  moonbitlang$core$builtin$$Map$at$5$(Milky2018$selene$position$$positions, self).y = position.y;
}
function Asterless$MGPIC2025$main$$Prop$set_velocity$2$(self, velocity) {
  moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, self).x = velocity.x;
  moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$velocity$$velocities, self).y = velocity.y;
}
function Asterless$MGPIC2025$main$$add_background() {
  const entity = Milky2018$selene$system$$Entity$new();
  const picture = Milky2018$selene$sprite$$Picture$new(Milky2018$selene$math$$Vec2D$new(480, 600), "./assets/Background/Brown.png", undefined, Asterless$MGPIC2025$main$$add_background$46$constr$47$2808);
  const sprite = Milky2018$selene$sprite$$Sprite$new_picture(picture, 0);
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, Milky2018$selene$math$$Vec2D$zero());
}
function Asterless$MGPIC2025$main$$add_bottom(pos) {
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, pos);
  const animation = Milky2018$selene$sprite$$Animation$new("./assets/Terrain/Terrain (16x16).png", 1, 16, 16, undefined, -1, Option$None$0$, Milky2018$selene$math$$Vec2D$new(112, 0), undefined);
  const sprite = Milky2018$selene$sprite$$Sprite$new_animation(animation, 10);
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, entity, sprite);
  const collide = { shape: new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(Milky2018$selene$math$$Vec2D$new(16, 16), Milky2018$selene$math$$Vec2D$zero()), layer: Asterless$MGPIC2025$main$$terrain_collision_layer, mask: [] };
  moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collides, entity, collide);
}
function Asterless$MGPIC2025$main$$add_pointer() {
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, Asterless$MGPIC2025$main$$ptr_entity, Milky2018$selene$math$$Vec2D$new(240, 80));
  const velocity = Milky2018$selene$math$$Vec2D$zero();
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$velocity$$velocities, Asterless$MGPIC2025$main$$ptr_entity, velocity);
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, Asterless$MGPIC2025$main$$ptr_entity, Asterless$MGPIC2025$main$$game_state.pointer_sprite);
}
function Asterless$MGPIC2025$main$$add_text_entity(text, position) {
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, position);
  const sprite = Milky2018$selene$sprite$$Sprite$new_text(text, 20);
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, entity, sprite);
}
function Asterless$MGPIC2025$main$$add_score_bar() {
  Asterless$MGPIC2025$main$$set_score(0);
  Asterless$MGPIC2025$main$$add_text_entity(Asterless$MGPIC2025$main$$game_state.score_bar, Milky2018$selene$math$$Vec2D$new(40, 60));
  Asterless$MGPIC2025$main$$add_text_entity(Milky2018$selene$sprite$$Text$new$46$inner("Pause A/D to move", "Gray", "30px ThaleahFat"), Milky2018$selene$math$$Vec2D$new(120, 180));
  Asterless$MGPIC2025$main$$add_text_entity(Milky2018$selene$sprite$$Text$new$46$inner("Pause Q/E to switch", "Gray", "30px ThaleahFat"), Milky2018$selene$math$$Vec2D$new(120, 240));
  Asterless$MGPIC2025$main$$add_text_entity(Milky2018$selene$sprite$$Text$new$46$inner("Pause Space to drop", "Gray", "30px ThaleahFat"), Milky2018$selene$math$$Vec2D$new(120, 300));
  Asterless$MGPIC2025$main$$add_text_entity(Milky2018$selene$sprite$$Text$new$46$inner("Click the cats!!!", "White", "20px ThaleahFat"), Milky2018$selene$math$$Vec2D$new(290, 318));
}
function Asterless$MGPIC2025$main$$add_side_walls(pos) {
  const animation = Milky2018$selene$sprite$$Animation$new("./assets/Terrain/Terrain (16x16).png", 1, 48, 16, undefined, -1, Option$None$0$, Milky2018$selene$math$$Vec2D$new(240, 0), undefined);
  const wall = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, wall, pos);
  const left_collide = { shape: new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(Milky2018$selene$math$$Vec2D$new(16, 16), Milky2018$selene$math$$Vec2D$zero()), layer: Asterless$MGPIC2025$main$$terrain_collision_layer, mask: [Asterless$MGPIC2025$main$$pointer_collision_layer] };
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, wall, Milky2018$selene$sprite$$Sprite$new_animation(animation, 15));
  moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collides, wall, left_collide);
}
function Asterless$MGPIC2025$main$$add_top(pos) {
  const entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, pos);
  const animation = Milky2018$selene$sprite$$Animation$new("./assets/Terrain/Terrain (16x16).png", 1, 16, 16, undefined, -1, Option$None$0$, Milky2018$selene$math$$Vec2D$new(208, 0), undefined);
  const sprite = Milky2018$selene$sprite$$Sprite$new_animation(animation, 10);
  moonbitlang$core$builtin$$Map$set$6$(Milky2018$selene$sprite$$sprites, entity, sprite);
  const collide = { shape: new $64$Milky2018$47$selene$47$collision$46$CollisionShape$Rect(Milky2018$selene$math$$Vec2D$new(16, 16), Milky2018$selene$math$$Vec2D$zero()), layer: Asterless$MGPIC2025$main$$terrain_collision_layer, mask: [] };
  moonbitlang$core$builtin$$Map$set$8$(Milky2018$selene$collision$$collides, entity, collide);
}
function Asterless$MGPIC2025$main$$game_start(_backend) {
  Asterless$MGPIC2025$main$$add_pointer();
  let _tmp = 0;
  while (true) {
    const x = _tmp;
    if (x < 480) {
      Asterless$MGPIC2025$main$$add_bottom(Milky2018$selene$math$$Vec2D$new(x, 584));
      Asterless$MGPIC2025$main$$add_top(Milky2018$selene$math$$Vec2D$new(x, 0));
      _tmp = x + 16;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const x = _tmp$2;
    if (x < 600) {
      Asterless$MGPIC2025$main$$add_side_walls(Milky2018$selene$math$$Vec2D$new(0, x));
      Asterless$MGPIC2025$main$$add_side_walls(Milky2018$selene$math$$Vec2D$new(464, x));
      _tmp$2 = x + 48;
      continue;
    } else {
      break;
    }
  }
  Asterless$MGPIC2025$main$$add_background();
  Asterless$MGPIC2025$main$$add_score_bar();
}
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_initializer$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new({ self: Milky2018$selene$45$canvas$$CanvasBackend$new(), method_0: Milky2018$selene$system$$Backend$build$59$, method_1: Milky2018$selene$system$$Backend$draw_picture$59$, method_2: Milky2018$selene$system$$Backend$draw_sprite$59$, method_3: Milky2018$selene$system$$Backend$register_key_events$59$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$59$, method_5: Milky2018$selene$system$$Backend$draw_stroke_rect$59$, method_6: Milky2018$selene$system$$Backend$draw_text$59$, method_7: Milky2018$selene$system$$Backend$play_audio$59$, method_8: Milky2018$selene$system$$Backend$get_canvas_size$59$ }), 480), 600), 60), Milky2018$selene$plugins$$default_plugin), Asterless$MGPIC2025$main$$input_system, 0), Asterless$MGPIC2025$main$$force_system, 0), Asterless$MGPIC2025$main$$merge_system, 0), Asterless$MGPIC2025$main$$cat_teleport_system, 0), Asterless$MGPIC2025$main$$play_sound_system, 0), Asterless$MGPIC2025$main$$game_start, 0));
})();
