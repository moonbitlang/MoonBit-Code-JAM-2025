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
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const $64$moonbitlang$47$core$47$list$46$List$Empty$3$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$list$46$List$More$3$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$3$.prototype.$tag = 1;
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
const Milky2018$selene$system$$all_codes$46$42$bind$47$1466 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$system$$from_string$46$constr$47$1480 = 0;
const Milky2018$selene$system$$from_string$46$constr$47$1481 = 1;
const Milky2018$selene$system$$from_string$46$constr$47$1482 = 2;
const Milky2018$selene$system$$from_string$46$constr$47$1483 = 3;
const Milky2018$selene$system$$from_string$46$constr$47$1484 = 4;
const Milky2018$selene$system$$from_string$46$constr$47$1485 = 5;
const Milky2018$selene$system$$from_string$46$constr$47$1486 = 6;
const Milky2018$selene$system$$from_string$46$constr$47$1487 = 7;
const Milky2018$selene$system$$from_string$46$constr$47$1488 = 8;
const Milky2018$selene$system$$from_string$46$constr$47$1489 = 9;
const Milky2018$selene$system$$from_string$46$constr$47$1490 = 10;
const Milky2018$selene$system$$from_string$46$constr$47$1491 = 11;
const Milky2018$selene$system$$from_string$46$constr$47$1492 = 12;
const Milky2018$selene$system$$from_string$46$constr$47$1493 = 13;
const Milky2018$selene$system$$from_string$46$constr$47$1494 = 14;
const Milky2018$selene$system$$from_string$46$constr$47$1495 = 15;
const Milky2018$selene$system$$from_string$46$constr$47$1496 = 16;
const Milky2018$selene$system$$from_string$46$constr$47$1497 = 17;
const Milky2018$selene$system$$from_string$46$constr$47$1498 = 18;
const Milky2018$selene$system$$from_string$46$constr$47$1499 = 19;
const Milky2018$selene$system$$from_string$46$constr$47$1500 = 20;
const Milky2018$selene$system$$from_string$46$constr$47$1501 = 21;
const Milky2018$selene$system$$from_string$46$constr$47$1502 = 22;
const Milky2018$selene$system$$from_string$46$constr$47$1503 = 23;
const Milky2018$selene$system$$from_string$46$constr$47$1504 = 24;
const Milky2018$selene$system$$from_string$46$constr$47$1505 = 26;
const Milky2018$selene$system$$from_string$46$constr$47$1506 = 27;
const Milky2018$selene$system$$from_string$46$constr$47$1507 = 28;
const Milky2018$selene$system$$from_string$46$constr$47$1508 = 29;
const Milky2018$selene$system$$from_string$46$constr$47$1509 = 30;
const Milky2018$selene$system$$from_string$46$constr$47$1510 = 31;
const Milky2018$selene$system$$from_string$46$constr$47$1511 = 32;
const lfegg$chtholly$$spawn_bullet$46$constr$47$2121 = false;
const lfegg$chtholly$$spawn_enemy$46$constr$47$2294 = true;
const lfegg$chtholly$$add_skill_ui$46$constr$47$2308 = false;
const lfegg$chtholly$$add_player$46$constr$47$2314 = true;
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const Milky2018$selene$45$canvas$$window = Yoorkin$rabbit$45$tea$dom$$window();
const Milky2018$selene$45$canvas$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$0$(8);
const Milky2018$selene$position$$positions = moonbitlang$core$builtin$$Map$new$46$inner$1$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$2$(8);
const Milky2018$selene$system$$all_entities = moonbitlang$core$set$$Set$new$46$inner$3$(8);
const lfegg$chtholly$$game_state = { player: Milky2018$selene$system$$Entity$new(), shoot_cooldown: 0, hp: 3, hp_ui: Milky2018$selene$system$$Entity$new(), invincible_ticks: 0, enemy: Milky2018$selene$system$$Entity$new(), enemy_shoot_cd: 0, phase: 0, start_ui: Milky2018$selene$system$$Entity$new(), gameover_ui: Milky2018$selene$system$$Entity$new(), start_tip_ui: Milky2018$selene$system$$Entity$new(), gameover_tip_ui: Milky2018$selene$system$$Entity$new(), victory_ui: Milky2018$selene$system$$Entity$new(), victory_tip_ui: Milky2018$selene$system$$Entity$new(), level_ui0: Milky2018$selene$system$$Entity$new(), level_ui1: Milky2018$selene$system$$Entity$new(), level_ui2: Milky2018$selene$system$$Entity$new(), level_index: 1, input_cd: 0, block_enter_until_release: false, go_ui0: Milky2018$selene$system$$Entity$new(), go_ui1: Milky2018$selene$system$$Entity$new(), gameover_index: 0, hard_pattern_toggle: false, current_enemy_hp: 100, current_enemy_speed: 1.5, current_enemy_bullet_speed: 2.5, current_enemy_shoot_cd: 30, skill_cd: 0, skill_icon: Milky2018$selene$system$$Entity$new(), skill_ready_fx: Milky2018$selene$system$$Entity$new() };
const lfegg$chtholly$$bullet_owners = moonbitlang$core$builtin$$Map$new$46$inner$4$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$5$(8);
const Milky2018$selene$sprite$$animation_id_generator = moonbitlang$core$ref$$Ref$new$6$(0);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$7$(0);
const Milky2018$selene$system$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$8$(8);
const Milky2018$selene$camera$$uis = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const lfegg$chtholly$$hit_bullets = moonbitlang$core$builtin$$Map$new$46$inner$10$(8);
const lfegg$chtholly$$enemy_hps = moonbitlang$core$builtin$$Map$new$46$inner$4$(8);
const Milky2018$selene$system$$all_codes = moonbitlang$core$set$$Set$from_array$8$({ buf: Milky2018$selene$system$$all_codes$46$42$bind$47$1466, start: 0, end: 33 });
const Milky2018$selene$system$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$8$(8);
const Milky2018$selene$system$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$8$(8);
const Milky2018$selene$system$$last_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$8$(8);
const Milky2018$selene$system$$mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const _bind = Milky2018$selene$math$$Vec2D$zero();
const _bind$2 = Option$None$0$;
const _bind$3 = Option$None$0$;
const _bind$4 = Option$None$0$;
const _bind$5 = Option$None$0$;
const _bind$6 = undefined;
const _bind$7 = Milky2018$selene$math$$Vec2D$zero();
const Milky2018$selene$camera$$camera = { position: _bind, limit_top: _bind$4, limit_bottom: _bind$2, limit_left: _bind$3, limit_right: _bind$5, attached_entity: _bind$6, offset: _bind$7 };
const Milky2018$selene$collision$$areas = moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
const Milky2018$selene$system$$just_pressed_mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$collision$$quadtree_root = Milky2018$selene$collision$$QuadTree$new(Milky2018$selene$math$$Vec2D$new(0, 0), Milky2018$selene$math$$Vec2D$new(2048, 2048), 0);
const Milky2018$selene$system$$just_release_mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$last_mouse = { pos: Milky2018$selene$math$$Vec2D$new(0, 0), left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$collision$$collision_infos = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const Milky2018$selene$collision$$collides = moonbitlang$core$builtin$$Map$new$46$inner$13$(8);
function moonbitlang$core$abort$$abort$14$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$15$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$op_notequal$3$(x, y) {
  return !(x === y);
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
function moonbitlang$core$array$$Array$at$3$(self, index) {
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
function moonbitlang$core$builtin$$Hasher$combine$8$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$8$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$3$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$3$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$16$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$16$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$19$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$8$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$20$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$3$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$21$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$16$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$6$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$array$$Array$iter$15$(self) {
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
function moonbitlang$core$option$$Option$unwrap$26$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$builtin$$Add$add$27$(self, other) {
  return moonbitlang$core$builtin$$Add$op_add$28$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$27$(self, other) {
  return moonbitlang$core$builtin$$Sub$op_sub$28$(self, other);
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
function moonbitlang$core$builtin$$Map$new$46$inner$4$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$0$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$0$(self, idx, entry) {
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
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
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
function moonbitlang$core$builtin$$Map$grow$0$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$0$(self, _key, _value, _hash);
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
function moonbitlang$core$builtin$$Map$set$5$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$4$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$4$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$0$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$0$(self, key, value, moonbitlang$core$builtin$$Hash$hash$21$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$12$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
function moonbitlang$core$builtin$$Map$get$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$21$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
function moonbitlang$core$builtin$$Map$get$13$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
        const _p = _entry.key;
        _tmp$4 = _p === key;
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
function moonbitlang$core$builtin$$Map$at$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
function moonbitlang$core$builtin$$Map$at$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
function moonbitlang$core$builtin$$Map$remove_entry$4$(self, entry) {
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
function moonbitlang$core$builtin$$Map$remove_entry$10$(self, entry) {
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
function moonbitlang$core$builtin$$Map$shift_back$4$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$4$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$shift_back$10$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$10$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$4$(self, key, hash) {
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
        moonbitlang$core$builtin$$Map$remove_entry$4$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$4$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$10$(self, key, hash) {
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
        moonbitlang$core$builtin$$Map$remove_entry$10$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$10$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove$4$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$4$(self, key, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$remove$10$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$10$(self, key, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$29$(self, value, start, end) {
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
  moonbitlang$core$array$$FixedArray$fill$46$inner$29$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iterator$4$(self) {
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
function moonbitlang$core$builtin$$Map$iterator$1$(self) {
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
function moonbitlang$core$builtin$$Map$iterator$10$(self) {
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
function moonbitlang$core$builtin$$Map$iterator2$4$(self) {
  return moonbitlang$core$builtin$$Map$iterator$4$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$5$(self) {
  return moonbitlang$core$builtin$$Map$iterator$5$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$1$(self) {
  return moonbitlang$core$builtin$$Map$iterator$1$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$10$(self) {
  return moonbitlang$core$builtin$$Map$iterator$10$(self);
}
function moonbitlang$core$builtin$$Map$to_array$2$(self) {
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
function moonbitlang$core$builtin$$Iterator$next$31$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$32$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$33$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$34$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$3$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$8$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$array$$Array$push$35$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$17$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$3$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$7$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$18$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$36$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iterator2$next$4$(self) {
  return moonbitlang$core$builtin$$Iterator$next$31$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$5$(self) {
  return moonbitlang$core$builtin$$Iterator$next$32$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$1$(self) {
  return moonbitlang$core$builtin$$Iterator$next$33$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$10$(self) {
  return moonbitlang$core$builtin$$Iterator$next$34$(self);
}
function moonbitlang$core$builtin$$Iter$run$15$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$all$15$(self, f) {
  const _bind$8 = moonbitlang$core$builtin$$Iter$run$15$(self, (k) => !f(k) ? 0 : 1);
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
function moonbitlang$core$builtin$$Hash$hash_combine$16$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$37$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$array$$ArrayView$at$15$(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$15$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$6$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$6$(index)}`);
  }
}
function moonbitlang$core$array$$Array$new$46$inner$7$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$36$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$3$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$7$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(self, new_len) {
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
function moonbitlang$core$array$$Array$clear$3$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$3$(self, 0);
}
function moonbitlang$core$array$$Array$clear$7$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$7$(self, 0);
}
function moonbitlang$core$array$$Array$clear$15$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(self, 0);
}
function moonbitlang$core$array$$Array$contains$38$(self, value) {
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$948(_env, a_idx, b_idx) {
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$949(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$948(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$948(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$948(_env, a_idx, b_idx);
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$949(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$949(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$949(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$949(_env, a, b, c);
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$983(_env, a_idx, b_idx) {
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$984(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$983(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$983(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$983(_env, a_idx, b_idx);
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$984(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$984(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$984(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$984(_env, a, b, c);
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
function moonbitlang$core$array$$Array$sort_by_key$39$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$17$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by_key$40$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$18$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$double$$Double$to_uint(self) {
  return self !== self ? 0 : self >= 4294967295 ? -1 : self <= 0 ? 0 : self | 0;
}
function moonbitlang$core$list$$List$from_array$15$(arr) {
  let _tmp = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$3$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$3$(moonbitlang$core$array$$ArrayView$at$15$(arr, i), list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$ref$$Ref$new$6$(x) {
  return { val: x };
}
function moonbitlang$core$set$$Set$new$46$inner$8$(capacity) {
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
function moonbitlang$core$set$$Set$add_entry_to_tail$8$(self, idx, entry) {
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
function moonbitlang$core$set$$Set$set_entry$8$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$push_away$8$(self, idx, entry) {
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
      moonbitlang$core$set$$Set$set_entry$8$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$8$(self, entry$2, idx$2);
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
function moonbitlang$core$set$$Set$add_with_hash$8$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$8$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$8$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$8$(self, idx, _curr_entry);
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
  moonbitlang$core$set$$Set$add_entry_to_tail$8$(self, _idx, entry);
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
function moonbitlang$core$set$$Set$grow$8$(self) {
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
      moonbitlang$core$set$$Set$add_with_hash$8$(self, _key, _hash);
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
function moonbitlang$core$set$$Set$add$8$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$8$(self, key, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$set$$Set$add$3$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$3$(self, key, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$set$$Set$from_array$8$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$set$$Set$new$46$inner$8$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$set$$Set$add$8$(m, e);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$8$(self, key) {
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
      return false;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$8$(_entry.key, key)) {
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
function moonbitlang$core$set$$Set$contains$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
function moonbitlang$core$set$$Set$remove_entry$8$(self, entry) {
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
function moonbitlang$core$set$$Set$shift_back$8$(self, idx) {
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
          moonbitlang$core$set$$Set$set_entry$8$(self, _x, idx$2);
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
function moonbitlang$core$set$$Set$remove$8$(self, key) {
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
      break;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$8$(_entry.key, key)) {
        moonbitlang$core$set$$Set$remove_entry$8$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$8$(self, idx);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
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
function moonbitlang$core$set$$Set$clear$8$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$30$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
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
function moonbitlang$core$set$$Set$iterator$8$(self) {
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
function moonbitlang$core$set$$Set$difference$8$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$8$(8);
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
      if (!moonbitlang$core$set$$Set$contains$8$(other, _p$4)) {
        moonbitlang$core$set$$Set$add$8$(m, _p$4);
      }
      _tmp = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$8$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$8$(8);
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
      moonbitlang$core$set$$Set$add$8$(m, _p$4);
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
      moonbitlang$core$set$$Set$add$8$(m, _p$4);
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
function moonbitlang$core$set$$Set$intersection$3$(self, other) {
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
      if (moonbitlang$core$set$$Set$contains$3$(other, _p$4)) {
        moonbitlang$core$set$$Set$add$3$(m, _p$4);
      }
      _tmp = _p$5;
      continue;
    }
  }
  return m;
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
function moonbitlang$core$builtin$$Add$op_add$28$(this_, other) {
  return Milky2018$selene$math$$Vec2D$new(this_.x + other.x, this_.y + other.y);
}
function moonbitlang$core$builtin$$Sub$op_sub$28$(this_, other) {
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
  return { position: moonbitlang$core$builtin$$Add$add$27$(self.position, dir), size: self.size };
}
function moonbitlang$core$builtin$$Hash$hash_combine$3$(_x_109, _x_110) {
  moonbitlang$core$builtin$$Hash$hash_combine$37$(_x_109, _x_110);
}
function moonbitlang$core$builtin$$Eq$equal$8$(_x_105, _x_106) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$8$(_x_97, _x_98) {
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
      return Milky2018$selene$system$$from_string$46$constr$47$1480;
    }
    case "KeyB": {
      return Milky2018$selene$system$$from_string$46$constr$47$1481;
    }
    case "KeyC": {
      return Milky2018$selene$system$$from_string$46$constr$47$1482;
    }
    case "KeyD": {
      return Milky2018$selene$system$$from_string$46$constr$47$1483;
    }
    case "KeyE": {
      return Milky2018$selene$system$$from_string$46$constr$47$1484;
    }
    case "KeyF": {
      return Milky2018$selene$system$$from_string$46$constr$47$1485;
    }
    case "KeyG": {
      return Milky2018$selene$system$$from_string$46$constr$47$1486;
    }
    case "KeyH": {
      return Milky2018$selene$system$$from_string$46$constr$47$1487;
    }
    case "KeyI": {
      return Milky2018$selene$system$$from_string$46$constr$47$1488;
    }
    case "KeyJ": {
      return Milky2018$selene$system$$from_string$46$constr$47$1489;
    }
    case "KeyK": {
      return Milky2018$selene$system$$from_string$46$constr$47$1490;
    }
    case "KeyL": {
      return Milky2018$selene$system$$from_string$46$constr$47$1491;
    }
    case "KeyM": {
      return Milky2018$selene$system$$from_string$46$constr$47$1492;
    }
    case "KeyN": {
      return Milky2018$selene$system$$from_string$46$constr$47$1493;
    }
    case "KeyO": {
      return Milky2018$selene$system$$from_string$46$constr$47$1494;
    }
    case "KeyP": {
      return Milky2018$selene$system$$from_string$46$constr$47$1495;
    }
    case "KeyQ": {
      return Milky2018$selene$system$$from_string$46$constr$47$1496;
    }
    case "KeyR": {
      return Milky2018$selene$system$$from_string$46$constr$47$1497;
    }
    case "KeyS": {
      return Milky2018$selene$system$$from_string$46$constr$47$1498;
    }
    case "KeyT": {
      return Milky2018$selene$system$$from_string$46$constr$47$1499;
    }
    case "KeyU": {
      return Milky2018$selene$system$$from_string$46$constr$47$1500;
    }
    case "KeyV": {
      return Milky2018$selene$system$$from_string$46$constr$47$1501;
    }
    case "KeyW": {
      return Milky2018$selene$system$$from_string$46$constr$47$1502;
    }
    case "KeyX": {
      return Milky2018$selene$system$$from_string$46$constr$47$1503;
    }
    case "KeyY": {
      return Milky2018$selene$system$$from_string$46$constr$47$1504;
    }
    case "ArrowUp": {
      return Milky2018$selene$system$$from_string$46$constr$47$1505;
    }
    case "ArrowDown": {
      return Milky2018$selene$system$$from_string$46$constr$47$1506;
    }
    case "ArrowLeft": {
      return Milky2018$selene$system$$from_string$46$constr$47$1507;
    }
    case "ArrowRight": {
      return Milky2018$selene$system$$from_string$46$constr$47$1508;
    }
    case "Space": {
      return Milky2018$selene$system$$from_string$46$constr$47$1509;
    }
    case "Enter": {
      return Milky2018$selene$system$$from_string$46$constr$47$1510;
    }
    case "Escape": {
      return Milky2018$selene$system$$from_string$46$constr$47$1511;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$system$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$8$(Milky2018$selene$system$$pressed_keys, code);
}
function Milky2018$selene$system$$advanced_key_system(_backend) {
  moonbitlang$core$set$$Set$clear$8$(Milky2018$selene$system$$just_pressed_keys);
  const _it = moonbitlang$core$set$$Set$iterator$8$(moonbitlang$core$set$$Set$difference$8$(Milky2018$selene$system$$pressed_keys, Milky2018$selene$system$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$8$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$8$(Milky2018$selene$system$$just_pressed_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$8$(Milky2018$selene$system$$just_release_keys);
  const _it$2 = moonbitlang$core$set$$Set$iterator$8$(moonbitlang$core$set$$Set$union$8$(moonbitlang$core$set$$Set$difference$8$(Milky2018$selene$system$$all_codes, Milky2018$selene$system$$pressed_keys), Milky2018$selene$system$$last_pressed_keys));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$8$(_it$2);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$8$(Milky2018$selene$system$$just_release_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$8$(Milky2018$selene$system$$last_pressed_keys);
  const _it$3 = moonbitlang$core$set$$Set$iterator$8$(Milky2018$selene$system$$pressed_keys);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$8$(_it$3);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$8$(Milky2018$selene$system$$last_pressed_keys, _code);
      continue;
    }
  }
}
function Milky2018$selene$system$$Entity$new() {
  const entity = Milky2018$selene$system$$entity_generator.val;
  Milky2018$selene$system$$entity_generator.val = (Milky2018$selene$system$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$3$(Milky2018$selene$system$$all_entities, entity);
  return entity;
}
function Milky2018$selene$system$$defer_event(event) {
  moonbitlang$core$array$$Array$push$7$(Milky2018$selene$system$$deferred_events, event);
}
function Milky2018$selene$system$$Entity$destroy(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$remove$3$(Milky2018$selene$system$$all_entities, e);
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
  moonbitlang$core$array$$Array$clear$7$(Milky2018$selene$system$$deferred_events);
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
  moonbitlang$core$array$$Array$push$35$(plugins, plugin);
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
    moonbitlang$core$array$$Array$sort_by_key$39$(self.initializers, (pair) => -pair._1 | 0);
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
    moonbitlang$core$array$$Array$sort_by_key$39$(self.systems, (pair) => -pair._1 | 0);
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
    const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
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
function Milky2018$selene$camera$$Ui$new() {
  ({});
}
function Milky2018$selene$sprite$$Sprite$new_animation(animation, zindex) {
  return { sprite_type: new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(animation), zindex: zindex };
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
  const _p = moonbitlang$core$builtin$$Map$to_array$2$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (moonbitlang$core$set$$Set$contains$3$(Milky2018$selene$system$$all_entities, _p$5._0)) {
        moonbitlang$core$array$$Array$push$18$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by_key$40$(sprites, (pair) => pair._1.zindex);
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
          const _bind$9 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$camera$$uis, e);
          const pos = _bind$9 === -1 ? moonbitlang$core$builtin$$Sub$sub$27$(_pos, Milky2018$selene$camera$$camera.position) : _pos;
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
  const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$3$(8);
  const _bind$9 = [];
  const _bind$10 = { position: position, size: size };
  return { position: position, size: size, children: _bind$9, depth: depth, bounding_box: _bind$10, entities: _bind$8 };
}
function Milky2018$selene$collision$$QuadTree$insert(self, entity, box) {
  if (!Milky2018$selene$math$$Rect$intersects(self.bounding_box, box)) {
    return undefined;
  }
  if (self.depth >= 5) {
    moonbitlang$core$set$$Set$add$3$(self.entities, entity);
    return undefined;
  }
  const _p = self.children;
  if (_p.length === 0) {
    const half_size = Milky2018$selene$math$$Vec2D$new(self.size.x * 0.5, self.size.y * 0.5);
    const _self = self.children;
    moonbitlang$core$array$$Array$push$15$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    moonbitlang$core$array$$Array$push$15$(_self, Milky2018$selene$collision$$QuadTree$new(moonbitlang$core$builtin$$Add$add$27$(self.position, Milky2018$selene$math$$Vec2D$new(half_size.x, 0)), half_size, self.depth + 1 | 0));
    moonbitlang$core$array$$Array$push$15$(_self, Milky2018$selene$collision$$QuadTree$new(moonbitlang$core$builtin$$Add$add$27$(self.position, Milky2018$selene$math$$Vec2D$new(0, half_size.y)), half_size, self.depth + 1 | 0));
    moonbitlang$core$array$$Array$push$15$(_self, Milky2018$selene$collision$$QuadTree$new(moonbitlang$core$builtin$$Add$add$27$(self.position, half_size), half_size, self.depth + 1 | 0));
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
    moonbitlang$core$set$$Set$remove$3$(self.entities, entity);
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
  if (moonbitlang$core$builtin$$Iter$all$15$(moonbitlang$core$array$$Array$iter$15$(self.children), (c) => {
    const _p = c.entities;
    if (_p.size === 0) {
      const _p$2 = c.children;
      return _p$2.length === 0;
    } else {
      return false;
    }
  })) {
    moonbitlang$core$array$$Array$clear$15$(self.children);
    return;
  } else {
    return;
  }
}
function Milky2018$selene$collision$$QuadTree$query(self, area) {
  const _bind$8 = [self];
  const trees = { val: moonbitlang$core$list$$List$from_array$15$({ buf: _bind$8, start: 0, end: 1 }) };
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
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$3$(_p$4, _p$5);
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
    moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$36$(0));
  }
  moonbitlang$core$array$$Array$push$36$(moonbitlang$core$option$$Option$unwrap$26$(moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
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
  return moonbitlang$core$array$$Array$contains$38$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const new_pos = Milky2018$selene$math$$Vec2D$new(object.position.x, object.position.y);
  Milky2018$selene$math$$Vec2D$op_set(new_pos, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const velocity_axis = Milky2018$selene$math$$Vec2D$new(0, 0);
  Milky2018$selene$math$$Vec2D$op_set(velocity_axis, axis, Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, velocity_axis, axis);
  const entities = Milky2018$selene$collision$$QuadTree$query(Milky2018$selene$collision$$quadtree_root, ray_collision);
  const _it = moonbitlang$core$set$$Set$iterator$3$(moonbitlang$core$set$$Set$intersection$3$(entities, Milky2018$selene$system$$all_entities));
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$3$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      if (moonbitlang$core$builtin$$op_notequal$3$(_e, entity)) {
        const _bind$9 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$collision$$collides, _e);
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
          const _bind$11 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
          if (_bind$11 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$11;
            const _pos = _Some$3;
            if (Milky2018$selene$collision$$CollisionMask$contains(mask, _collision.layer)) {
              const _bind$12 = Milky2018$selene$math$$Vec2D$new(_width, _height);
              const _bind$13 = moonbitlang$core$builtin$$Add$add$27$(_pos, _offset);
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
  const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, e);
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
    const _bind$10 = moonbitlang$core$builtin$$Add$add$27$(_pos, _offset);
    const _bind$11 = Milky2018$selene$math$$Vec2D$new(_width, _height);
    const box = { position: _bind$10, size: _bind$11 };
    const new_pos_x = Milky2018$selene$collision$$move_axis(e, box, velocity, 0, collide.mask);
    const object_x = { position: new_pos_x, size: _bind$11 };
    const new_pos = Milky2018$selene$collision$$move_axis(e, object_x, velocity, 1, collide.mask);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, new_pos);
    const new_box = { position: new_pos, size: _bind$11 };
    Milky2018$selene$collision$$QuadTree$remove(Milky2018$selene$collision$$quadtree_root, e, box);
    Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, e, new_box);
    return;
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
    const new_pos = Milky2018$selene$math$$Vec2D$new(_pos.x + velocity.x, _pos.y + velocity.y);
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, new_pos);
    const _bind$9 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$collision$$areas, e);
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
      const box = { position: moonbitlang$core$builtin$$Add$add$27$(new_pos, _offset), size: Milky2018$selene$math$$Vec2D$new(_width, _height) };
      const old_box = { position: _pos, size: Milky2018$selene$math$$Vec2D$new(_width, _height) };
      Milky2018$selene$collision$$QuadTree$remove(Milky2018$selene$collision$$quadtree_root, e, old_box);
      Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, e, box);
      return;
    }
  }
}
function Milky2018$selene$collision$$move_system(_backend) {
  const _it = moonbitlang$core$set$$Set$iterator$3$(Milky2018$selene$system$$all_entities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$3$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$collision$$collides, _e);
      if (_bind$9 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$9;
        const _collide = _Some$2;
        const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
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
          const box = { position: moonbitlang$core$builtin$$Add$add$27$(_pos, _offset), size: Milky2018$selene$math$$Vec2D$new(_width, _height) };
          Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, _e, box);
        }
      }
      continue;
    }
  }
  moonbitlang$core$builtin$$Map$clear$12$(Milky2018$selene$collision$$collision_infos);
  const _it$2 = moonbitlang$core$set$$Set$iterator$3$(Milky2018$selene$system$$all_entities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$3$(_it$2);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$velocity$$velocities, _e);
      if (_bind$9 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$9;
        const _vel = _Some$2;
        const _bind$10 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$collision$$collides, _e);
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
function Milky2018$selene$collision$$area_collide_system(_discard_) {
  const _it = moonbitlang$core$set$$Set$iterator$3$(Milky2018$selene$system$$all_entities);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator$next$3$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _e = _Some;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$collision$$areas, _e);
      if (_bind$9 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$9;
        const _area = _Some$2;
        const _bind$10 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
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
          const _bind$13 = moonbitlang$core$builtin$$Add$add$27$(_position, _offset);
          const box = { position: _bind$13, size: _bind$12 };
          Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root, _e, box);
          const new_last_contains = moonbitlang$core$set$$Set$new$46$inner$3$(8);
          const entities = Milky2018$selene$collision$$QuadTree$query(Milky2018$selene$collision$$quadtree_root, box);
          const _it$2 = moonbitlang$core$set$$Set$iterator$3$(moonbitlang$core$set$$Set$intersection$3$(entities, Milky2018$selene$system$$all_entities));
          while (true) {
            const _bind$14 = moonbitlang$core$builtin$$Iterator$next$3$(_it$2);
            if (_bind$14 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$14;
              const _entity = _Some$4;
              const _bind$15 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$collision$$areas, _entity);
              if (_bind$15 === undefined) {
                const _bind$16 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$collision$$collides, _entity);
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
                  const _bind$18 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _entity);
                  if (_bind$18 === undefined) {
                    $panic();
                  } else {
                    const _Some$6 = _bind$18;
                    const _other_position = _Some$6;
                    const _bind$19 = Milky2018$selene$math$$Vec2D$new(_other_width, _other_height);
                    const _bind$20 = moonbitlang$core$builtin$$Add$add$27$(_other_position, _other_offset);
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
                const _bind$17 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _entity);
                if (_bind$17 === undefined) {
                  $panic();
                } else {
                  const _Some$6 = _bind$17;
                  const _other_position = _Some$6;
                  const _bind$18 = Milky2018$selene$math$$Vec2D$new(_other_width, _other_height);
                  const _bind$19 = moonbitlang$core$builtin$$Add$add$27$(_other_position, _other_offset);
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
              moonbitlang$core$set$$Set$add$3$(new_last_contains, _entity);
              if (moonbitlang$core$set$$Set$contains$3$(_area.last_contains, _entity)) {
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
          const _it$3 = moonbitlang$core$set$$Set$iterator$3$(_area.last_contains);
          while (true) {
            const _bind$14 = moonbitlang$core$builtin$$Iterator$next$3$(_it$3);
            if (_bind$14 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$14;
              const _entity = _Some$4;
              if (moonbitlang$core$set$$Set$contains$3$(new_last_contains, _entity)) {
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
  const _it = moonbitlang$core$set$$Set$iterator$3$(moonbitlang$core$set$$Set$intersection$3$(entities, Milky2018$selene$system$$all_entities));
  while (true) {
    const _bind$10 = moonbitlang$core$builtin$$Iterator$next$3$(_it);
    if (_bind$10 === undefined) {
      return;
    } else {
      const _Some = _bind$10;
      const _e = _Some;
      const _bind$11 = moonbitlang$core$builtin$$Map$get$11$(Milky2018$selene$collision$$areas, _e);
      if (_bind$11 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$11;
        const _area = _Some$2;
        if (_area.monitoring_mouse) {
          const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _e);
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
            const _bind$15 = moonbitlang$core$builtin$$Add$add$27$(_position, _offset);
            const area_box = { position: _bind$15, size: _bind$14 };
            const _bind$16 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$camera$$uis, _e);
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
function rami3l$js$45$ffi$js$$Union3$from0$41$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$41$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$42$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$23$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$43$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$44$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$45$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$46$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$46$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$46$(self)) {
    moonbitlang$core$abort$$abort$14$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$22$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$4$(self) : Option$None$4$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$24$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$5$(self) : Option$None$5$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$25$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$23$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$47$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$47$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$47$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$44$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$48$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$49$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$22$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$50$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$25$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$50$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$24$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$23$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$23$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$45$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$system$$Backend$register_mouse_events$51$(_self, mouse) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$48$(Milky2018$selene$45$canvas$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$25$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$50$(event));
    mouse.pos.x = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$47$(mouse_event) + 0;
    mouse.pos.y = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$47$(mouse_event) + 0;
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$48$(Milky2018$selene$45$canvas$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$25$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$50$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$47$(mouse_event);
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$48$(Milky2018$selene$45$canvas$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$25$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$50$(event));
    const _bind$8 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$47$(mouse_event);
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
function Milky2018$selene$system$$Backend$register_key_events$51$(_self, pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$48$(Milky2018$selene$45$canvas$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$24$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$50$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$8$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$48$(Milky2018$selene$45$canvas$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$24$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$50$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$add$8$(pressed_keys, _c);
      return;
    }
  });
}
function Milky2018$selene$45$canvas$$get_image_element(png) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$45$canvas$$element_cache, png);
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
    const _element = _Some._0;
    return _element;
  }
  const element = Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new();
  Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src(element, png);
  moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$45$canvas$$element_cache, png, element);
  return element;
}
function Milky2018$selene$system$$Backend$draw_picture$51$(self, png, x, y, width, height, transform, repeat) {
  const element = Milky2018$selene$45$canvas$$get_image_element(png);
  const repeat_mode = repeat ? "repeat" : "no-repeat";
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(self.context, rami3l$js$45$ffi$js$$Union7$from0$43$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from2$41$(pattern));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.scale.x, transform.skew.x, transform.skew.y, transform.scale.y, transform.translate.x, transform.translate.y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.context, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_sprite$51$(self, sprite_path, x, y, offset_x, offset_y, width, height, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.context, transform.scale.x, transform.skew.x, transform.skew.y, transform.scale.y, transform.translate.x, transform.translate.y);
  const element = Milky2018$selene$45$canvas$$get_image_element(sprite_path);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size(self.context, element, offset_x, offset_y, width, height, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_stroke_rect$51$(self, x, y, width, height, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$41$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect(self.context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$system$$Backend$draw_text$51$(self, text, x, y, font, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(self.context, font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.context, rami3l$js$45$ffi$js$$Union3$from0$41$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self.context, text, x, y, Option$None$8$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.context);
}
function Milky2018$selene$45$canvas$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$22$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$49$(rami3l$js$45$ffi$js$$Nullable$unwrap$46$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$23$(rami3l$js$45$ffi$js$$Union5$to0$42$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
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
function Milky2018$selene$system$$Backend$build$51$(self, initialize, game_loop, canvas_width, canvas_height, fps) {
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
function Milky2018$selene$system$$Backend$get_canvas_size$51$(self) {
  return Milky2018$selene$math$$Vec2D$new(self.viewport_size.x, self.viewport_size.y);
}
function Milky2018$selene$system$$Backend$play_audio$51$(_self, audio_path, volume, loop_) {
  const audio = Milky2018$selene$45$canvas$$Audio$new(audio_path);
  Milky2018$selene$45$canvas$$Audio$set_volume(audio, volume);
  Milky2018$selene$45$canvas$$Audio$set_loop(audio, loop_);
  Milky2018$selene$45$canvas$$Audio$play(audio);
}
function lfegg$chtholly$$aabb_overlap(ax, ay, aw, ah, bx, by, bw, bh) {
  return !(bx + bw < ax || (bx > ax + aw || (by + bh < ay || by > ay + ah)));
}
function lfegg$chtholly$$clamp_position(pos, w, h) {
  const nx = pos.x < 0 ? 0 : pos.x > 560 - w ? 560 - w : pos.x;
  const ny = pos.y < 0 ? 0 : pos.y > 432 - h ? 432 - h : pos.y;
  return Milky2018$selene$math$$Vec2D$new(nx, ny);
}
function lfegg$chtholly$$get_enemy_hp(e) {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$4$(lfegg$chtholly$$enemy_hps, e);
  if (_bind$8 === undefined) {
    return 0;
  } else {
    const _Some = _bind$8;
    return _Some;
  }
}
function lfegg$chtholly$$get_bullet_owner(e) {
  return moonbitlang$core$builtin$$Map$get$4$(lfegg$chtholly$$bullet_owners, e);
}
function lfegg$chtholly$$cleanup_system(_discard_) {
  const _it = moonbitlang$core$builtin$$Map$iterator2$1$(Milky2018$selene$position$$positions);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$1$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _entity = _x._0;
      const _pos = _x._1;
      if (moonbitlang$core$builtin$$op_notequal$3$(_entity, lfegg$chtholly$$game_state.player)) {
        if (_pos.x < -32 || (_pos.x > 592 || (_pos.y < -32 || _pos.y > 464))) {
          Milky2018$selene$system$$Entity$destroy(_entity);
        }
      }
      continue;
    }
  }
  const to_remove = [];
  const _it$2 = moonbitlang$core$builtin$$Map$iterator2$10$(lfegg$chtholly$$hit_bullets);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$10$(_it$2);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _bullet = _x._0;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _bullet);
      if (_bind$9 === undefined) {
        moonbitlang$core$array$$Array$push$3$(to_remove, _bullet);
      }
      continue;
    }
  }
  const _len = to_remove.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = to_remove[_i];
      moonbitlang$core$builtin$$Map$remove$10$(lfegg$chtholly$$hit_bullets, bullet);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$3$(to_remove);
  const _it$3 = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$bullet_owners);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$4$(_it$3);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _bullet = _x._0;
      const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _bullet);
      if (_bind$9 === undefined) {
        moonbitlang$core$array$$Array$push$3$(to_remove, _bullet);
      }
      continue;
    }
  }
  const _len$2 = to_remove.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const bullet = to_remove[_i];
      moonbitlang$core$builtin$$Map$remove$4$(lfegg$chtholly$$bullet_owners, bullet);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function lfegg$chtholly$$spawn_bullet(pos, vel, owner) {
  if (lfegg$chtholly$$game_state.phase !== 1) {
    return undefined;
  }
  const e = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$velocity$$velocities, e, vel);
  owner === 1;
  const img = "pixel_adventure/Other/Confetti (16x16).png";
  owner === 1;
  const bw = 16;
  owner === 1;
  const bh = 16;
  const offx = owner === 1 ? 0 : 16;
  const anim = Milky2018$selene$sprite$$Animation$new(img, 1, bh, bw, undefined, lfegg$chtholly$$spawn_bullet$46$constr$47$2121, Option$None$0$, Milky2018$selene$math$$Vec2D$new(offx, 0), undefined);
  const spr = Milky2018$selene$sprite$$Sprite$new_animation(anim, 5);
  moonbitlang$core$builtin$$Map$set$4$(lfegg$chtholly$$bullet_owners, e, owner);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, e, spr);
}
function lfegg$chtholly$$enemy_ai_system(_discard_) {
  if (lfegg$chtholly$$game_state.phase !== 1) {
    return undefined;
  }
  const enemy = lfegg$chtholly$$game_state.enemy;
  const _bind$8 = moonbitlang$core$builtin$$Map$get$4$(lfegg$chtholly$$enemy_hps, enemy);
  if (_bind$8 === undefined) {
    return undefined;
  } else {
    const _Some = _bind$8;
    const _hp = _Some;
    if (_hp <= 0) {
      return undefined;
    }
  }
  const pos = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, enemy);
  const vel = moonbitlang$core$builtin$$Map$at$5$(Milky2018$selene$velocity$$velocities, enemy);
  const speed = lfegg$chtholly$$game_state.current_enemy_speed;
  let vx = vel.x;
  if (pos.x <= 0) {
    vx = speed;
  } else {
    if (pos.x >= 528) {
      vx = -speed;
    } else {
      if (vx === 0) {
        vx = speed;
      }
    }
  }
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$velocity$$velocities, enemy, Milky2018$selene$math$$Vec2D$new(vx, 0));
  if (pos.y !== 64) {
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, enemy, Milky2018$selene$math$$Vec2D$new(pos.x, 64));
  }
  if (lfegg$chtholly$$game_state.enemy_shoot_cd > 0) {
    lfegg$chtholly$$game_state.enemy_shoot_cd = lfegg$chtholly$$game_state.enemy_shoot_cd - 1 | 0;
    return;
  } else {
    if (lfegg$chtholly$$game_state.level_index === 2) {
      const cx = pos.x + 8;
      const cy = pos.y + 8;
      const s = lfegg$chtholly$$game_state.current_enemy_bullet_speed;
      const dirs = [Milky2018$selene$math$$Vec2D$new(0, 1), Milky2018$selene$math$$Vec2D$new(0, -1), Milky2018$selene$math$$Vec2D$new(1, 0), Milky2018$selene$math$$Vec2D$new(-1, 0), Milky2018$selene$math$$Vec2D$new(0.70710678, 0.70710678), Milky2018$selene$math$$Vec2D$new(0.70710678, -0.70710678), Milky2018$selene$math$$Vec2D$new(-0.70710678, 0.70710678), Milky2018$selene$math$$Vec2D$new(-0.70710678, -0.70710678)];
      const _len = dirs.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const d = dirs[_i];
          lfegg$chtholly$$spawn_bullet(Milky2018$selene$math$$Vec2D$new(cx, cy), Milky2018$selene$math$$Vec2D$new(d.x * s, d.y * s), 2);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      lfegg$chtholly$$game_state.enemy_shoot_cd = lfegg$chtholly$$game_state.current_enemy_shoot_cd;
      lfegg$chtholly$$game_state.hard_pattern_toggle = !lfegg$chtholly$$game_state.hard_pattern_toggle;
      return;
    } else {
      const muzzle = Milky2018$selene$math$$Vec2D$new(pos.x + 8, pos.y + 32 - 8);
      lfegg$chtholly$$spawn_bullet(muzzle, Milky2018$selene$math$$Vec2D$new(0, lfegg$chtholly$$game_state.current_enemy_bullet_speed), 2);
      lfegg$chtholly$$game_state.enemy_shoot_cd = lfegg$chtholly$$game_state.current_enemy_shoot_cd;
      return;
    }
  }
}
function lfegg$chtholly$$update_hp_ui(ui) {
  const enemy_hp = lfegg$chtholly$$get_enemy_hp(lfegg$chtholly$$game_state.enemy);
  const text = Milky2018$selene$sprite$$Text$new$46$inner(`Player HP: ${moonbitlang$core$int$$Int$to_string$46$inner(lfegg$chtholly$$game_state.hp, 10)} | Enemy HP: ${moonbitlang$core$int$$Int$to_string$46$inner(enemy_hp, 10)}`, "red", "30px ThaleahFat");
  const spr = Milky2018$selene$sprite$$Sprite$new_text(text, 10000);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, ui, spr);
}
function lfegg$chtholly$$destroy_all_bullets() {
  const to_destroy = [];
  const _it = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$bullet_owners);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$4$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _b = _x._0;
      moonbitlang$core$array$$Array$push$3$(to_destroy, _b);
      continue;
    }
  }
  const _len = to_destroy.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const b = to_destroy[_i];
      Milky2018$selene$system$$Entity$destroy(b);
      moonbitlang$core$builtin$$Map$remove$4$(lfegg$chtholly$$bullet_owners, b);
      moonbitlang$core$builtin$$Map$remove$10$(lfegg$chtholly$$hit_bullets, b);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function lfegg$chtholly$$hide_victory_ui() {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.victory_ui);
  if (_bind$8 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.victory_ui);
  }
  const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.victory_tip_ui);
  if (_bind$9 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.victory_tip_ui);
  }
  lfegg$chtholly$$game_state.victory_ui = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.victory_tip_ui = Milky2018$selene$system$$Entity$new();
}
function lfegg$chtholly$$show_victory_ui() {
  lfegg$chtholly$$hide_victory_ui();
  const ui = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, ui, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, ui, Milky2018$selene$math$$Vec2D$new(40, 176));
  const text = Milky2018$selene$sprite$$Text$new$46$inner("You Win", "green", "48px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, ui, Milky2018$selene$sprite$$Sprite$new_text(text, 10000));
  const tip_e = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, tip_e, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, tip_e, Milky2018$selene$math$$Vec2D$new(40, 226));
  const tip = Milky2018$selene$sprite$$Text$new$46$inner("Press Enter to Level Select", "blue", "24px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, tip_e, Milky2018$selene$sprite$$Sprite$new_text(tip, 9999));
  lfegg$chtholly$$game_state.victory_ui = ui;
  lfegg$chtholly$$game_state.victory_tip_ui = tip_e;
}
function lfegg$chtholly$$win_game() {
  if (lfegg$chtholly$$game_state.phase !== 3) {
    lfegg$chtholly$$game_state.phase = 3;
    lfegg$chtholly$$destroy_all_bullets();
    const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.player);
    if (_bind$8 === undefined) {
    } else {
      Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.player);
    }
    const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.enemy);
    if (_bind$9 === undefined) {
    } else {
      Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.enemy);
    }
    const rm = [];
    const _it = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$enemy_hps);
    while (true) {
      const _bind$10 = moonbitlang$core$builtin$$Iterator2$next$4$(_it);
      if (_bind$10 === undefined) {
        break;
      } else {
        const _Some = _bind$10;
        const _x = _Some;
        const _e = _x._0;
        moonbitlang$core$array$$Array$push$3$(rm, _e);
        continue;
      }
    }
    const _len = rm.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const e = rm[_i];
        moonbitlang$core$builtin$$Map$remove$4$(lfegg$chtholly$$enemy_hps, e);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    lfegg$chtholly$$show_victory_ui();
    return;
  } else {
    return;
  }
}
function lfegg$chtholly$$enemy_hit_system(_discard_) {
  if (lfegg$chtholly$$game_state.phase !== 1) {
    return undefined;
  }
  const _it = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$enemy_hps);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$4$(_it);
    if (_bind$8 === undefined) {
      return;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _enemy = _x._0;
      const _hp = _x._1;
      if (_hp <= 0) {
        continue;
      }
      const _bind$9 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _enemy);
      let epos;
      if (_bind$9 === undefined) {
        continue;
      } else {
        const _Some$2 = _bind$9;
        epos = _Some$2;
      }
      const _it$2 = moonbitlang$core$builtin$$Map$iterator2$5$(Milky2018$selene$velocity$$velocities);
      while (true) {
        const _bind$10 = moonbitlang$core$builtin$$Iterator2$next$5$(_it$2);
        if (_bind$10 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$10;
          const _x$2 = _Some$2;
          const _b = _x$2._0;
          const _bind$11 = moonbitlang$core$builtin$$Map$get$10$(lfegg$chtholly$$hit_bullets, _b);
          if (_bind$11 === -1) {
          } else {
            const _Some$3 = _bind$11;
            const _x$3 = _Some$3;
            if (_x$3 === true) {
              continue;
            }
          }
          const _p = lfegg$chtholly$$game_state.player;
          if (_b === _p) {
            continue;
          }
          const _bind$12 = lfegg$chtholly$$get_bullet_owner(_b);
          if (_bind$12 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$12;
            const _owner = _Some$3;
            if (_owner !== 1) {
              continue;
            }
          }
          const _bind$13 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, _b);
          let bpos;
          if (_bind$13 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$13;
            bpos = _Some$3;
          }
          const overlap = lfegg$chtholly$$aabb_overlap(epos.x, epos.y, 32, 32, bpos.x, bpos.y, 16, 16);
          if (overlap) {
            moonbitlang$core$builtin$$Map$set$10$(lfegg$chtholly$$hit_bullets, _b, true);
            Milky2018$selene$system$$Entity$destroy(_b);
            const cur = moonbitlang$core$builtin$$Map$at$4$(lfegg$chtholly$$enemy_hps, _enemy);
            const next = cur > 0 ? cur - 1 | 0 : 0;
            moonbitlang$core$builtin$$Map$set$4$(lfegg$chtholly$$enemy_hps, _enemy, next);
            lfegg$chtholly$$update_hp_ui(lfegg$chtholly$$game_state.hp_ui);
            if (next === 0) {
              Milky2018$selene$system$$Entity$destroy(_enemy);
              lfegg$chtholly$$win_game();
            }
            break;
          }
          continue;
        }
      }
      continue;
    }
  }
}
function lfegg$chtholly$$hide_start_ui() {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.start_ui);
  if (_bind$8 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.start_ui);
  }
  const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.start_tip_ui);
  if (_bind$9 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.start_tip_ui);
  }
  const _bind$10 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.level_ui0);
  if (_bind$10 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.level_ui0);
  }
  const _bind$11 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.level_ui1);
  if (_bind$11 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.level_ui1);
  }
  const _bind$12 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.level_ui2);
  if (_bind$12 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.level_ui2);
  }
  lfegg$chtholly$$game_state.start_ui = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.start_tip_ui = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.level_ui0 = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.level_ui1 = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.level_ui2 = Milky2018$selene$system$$Entity$new();
}
function lfegg$chtholly$$update_level_menu_ui() {
  const names = ["Easy", "Normal", "Hard"];
  const entities = [lfegg$chtholly$$game_state.level_ui0, lfegg$chtholly$$game_state.level_ui1, lfegg$chtholly$$game_state.level_ui2];
  const idx = lfegg$chtholly$$game_state.level_index;
  let i = 0;
  while (true) {
    if (i < 3) {
      const name = moonbitlang$core$array$$Array$at$16$(names, i);
      const is_sel = i === idx;
      const color = is_sel ? "blue" : "black";
      const text = Milky2018$selene$sprite$$Text$new$46$inner(name, color, "24px ThaleahFat");
      moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, moonbitlang$core$array$$Array$at$3$(entities, i), Milky2018$selene$sprite$$Sprite$new_text(text, 9999));
      i = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function lfegg$chtholly$$show_start_ui() {
  lfegg$chtholly$$hide_start_ui();
  lfegg$chtholly$$game_state.block_enter_until_release = true;
  const ui = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, ui, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, ui, Milky2018$selene$math$$Vec2D$new(40, 156));
  const title = Milky2018$selene$sprite$$Text$new$46$inner("Chtholly", "white", "48px ThaleahFat");
  const tip = Milky2018$selene$sprite$$Text$new$46$inner("Select Level: ↑/↓  Enter", "blue", "24px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, ui, Milky2018$selene$sprite$$Sprite$new_text(title, 10000));
  const tip_e = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, tip_e, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, tip_e, Milky2018$selene$math$$Vec2D$new(40, 226));
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, tip_e, Milky2018$selene$sprite$$Sprite$new_text(tip, 9999));
  const li0 = Milky2018$selene$system$$Entity$new();
  const li1 = Milky2018$selene$system$$Entity$new();
  const li2 = Milky2018$selene$system$$Entity$new();
  const _arr = [li0, li1, li2];
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, e, Milky2018$selene$camera$$Ui$new());
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, li0, Milky2018$selene$math$$Vec2D$new(40, 266));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, li1, Milky2018$selene$math$$Vec2D$new(40, 292));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, li2, Milky2018$selene$math$$Vec2D$new(40, 318));
  lfegg$chtholly$$game_state.level_ui0 = li0;
  lfegg$chtholly$$game_state.level_ui1 = li1;
  lfegg$chtholly$$game_state.level_ui2 = li2;
  lfegg$chtholly$$update_level_menu_ui();
  lfegg$chtholly$$game_state.start_ui = ui;
  lfegg$chtholly$$game_state.start_tip_ui = tip_e;
}
function lfegg$chtholly$$game_start(_backend) {
  lfegg$chtholly$$game_state.phase = 0;
  lfegg$chtholly$$show_start_ui();
}
function lfegg$chtholly$$hide_gameover_ui() {
  const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.gameover_ui);
  if (_bind$8 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.gameover_ui);
  }
  const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.gameover_tip_ui);
  if (_bind$9 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.gameover_tip_ui);
  }
  const _bind$10 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.go_ui0);
  if (_bind$10 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.go_ui0);
  }
  const _bind$11 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.go_ui1);
  if (_bind$11 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.go_ui1);
  }
  lfegg$chtholly$$game_state.gameover_ui = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.gameover_tip_ui = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.go_ui0 = Milky2018$selene$system$$Entity$new();
  lfegg$chtholly$$game_state.go_ui1 = Milky2018$selene$system$$Entity$new();
}
function lfegg$chtholly$$update_gameover_menu_ui() {
  const names = ["Restart", "Back to Level Select"];
  const entities = [lfegg$chtholly$$game_state.go_ui0, lfegg$chtholly$$game_state.go_ui1];
  const idx = lfegg$chtholly$$game_state.gameover_index;
  let i = 0;
  while (true) {
    if (i < 2) {
      const name = moonbitlang$core$array$$Array$at$16$(names, i);
      const is_sel = i === idx;
      const color = is_sel ? "blue" : "black";
      const text = Milky2018$selene$sprite$$Text$new$46$inner(name, color, "24px ThaleahFat");
      moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, moonbitlang$core$array$$Array$at$3$(entities, i), Milky2018$selene$sprite$$Sprite$new_text(text, 9999));
      i = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function lfegg$chtholly$$show_gameover_ui() {
  lfegg$chtholly$$hide_gameover_ui();
  const ui = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, ui, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, ui, Milky2018$selene$math$$Vec2D$new(40, 176));
  const text = Milky2018$selene$sprite$$Text$new$46$inner("Game Over", "red", "48px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, ui, Milky2018$selene$sprite$$Sprite$new_text(text, 10000));
  const tip_e = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, tip_e, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, tip_e, Milky2018$selene$math$$Vec2D$new(40, 226));
  const tip = Milky2018$selene$sprite$$Text$new$46$inner("Select: ↑/↓  Enter", "blue", "24px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, tip_e, Milky2018$selene$sprite$$Sprite$new_text(tip, 9999));
  const op0 = Milky2018$selene$system$$Entity$new();
  const op1 = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, op0, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, op1, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, op0, Milky2018$selene$math$$Vec2D$new(40, 266));
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, op1, Milky2018$selene$math$$Vec2D$new(40, 292));
  lfegg$chtholly$$game_state.go_ui0 = op0;
  lfegg$chtholly$$game_state.go_ui1 = op1;
  lfegg$chtholly$$game_state.gameover_index = 0;
  lfegg$chtholly$$update_gameover_menu_ui();
  lfegg$chtholly$$game_state.gameover_ui = ui;
  lfegg$chtholly$$game_state.gameover_tip_ui = tip_e;
}
function lfegg$chtholly$$end_game() {
  if (lfegg$chtholly$$game_state.phase !== 2) {
    lfegg$chtholly$$game_state.phase = 2;
    lfegg$chtholly$$destroy_all_bullets();
    const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.enemy);
    if (_bind$8 === undefined) {
    } else {
      Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.enemy);
    }
    const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.player);
    if (_bind$9 === undefined) {
    } else {
      Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.player);
    }
    const rm = [];
    const _it = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$enemy_hps);
    while (true) {
      const _bind$10 = moonbitlang$core$builtin$$Iterator2$next$4$(_it);
      if (_bind$10 === undefined) {
        break;
      } else {
        const _Some = _bind$10;
        const _x = _Some;
        const _e = _x._0;
        moonbitlang$core$array$$Array$push$3$(rm, _e);
        continue;
      }
    }
    const _len = rm.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const e = rm[_i];
        moonbitlang$core$builtin$$Map$remove$4$(lfegg$chtholly$$enemy_hps, e);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    lfegg$chtholly$$show_gameover_ui();
    return;
  } else {
    return;
  }
}
function lfegg$chtholly$$set_hp(h) {
  lfegg$chtholly$$game_state.hp = h;
  lfegg$chtholly$$update_hp_ui(lfegg$chtholly$$game_state.hp_ui);
}
function lfegg$chtholly$$player_damage_system(_discard_) {
  if (lfegg$chtholly$$game_state.phase !== 1) {
    return undefined;
  }
  if (lfegg$chtholly$$game_state.invincible_ticks > 0) {
    lfegg$chtholly$$game_state.invincible_ticks = lfegg$chtholly$$game_state.invincible_ticks - 1 | 0;
  }
  if (lfegg$chtholly$$game_state.hp <= 0) {
    lfegg$chtholly$$end_game();
    return undefined;
  }
  const player = lfegg$chtholly$$game_state.player;
  const ppos = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, player);
  const enemy_bullets = [];
  const _it = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$bullet_owners);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$4$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _b = _x._0;
      const _owner = _x._1;
      if (_owner === 2) {
        moonbitlang$core$array$$Array$push$3$(enemy_bullets, _b);
      }
      continue;
    }
  }
  const _len = enemy_bullets.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const b = enemy_bullets[_i];
        const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, b);
        let bpos;
        if (_bind$8 === undefined) {
          break _L;
        } else {
          const _Some = _bind$8;
          bpos = _Some;
        }
        const overlap = lfegg$chtholly$$aabb_overlap(ppos.x, ppos.y, 32, 32, bpos.x, bpos.y, 16, 16);
        if (overlap) {
          if (lfegg$chtholly$$game_state.invincible_ticks === 0) {
            const new_hp = lfegg$chtholly$$game_state.hp > 0 ? lfegg$chtholly$$game_state.hp - 1 | 0 : 0;
            lfegg$chtholly$$set_hp(new_hp);
            lfegg$chtholly$$game_state.invincible_ticks = 60;
            if (new_hp === 0) {
              lfegg$chtholly$$end_game();
              return undefined;
            }
          }
          Milky2018$selene$system$$Entity$destroy(b);
          moonbitlang$core$builtin$$Map$remove$4$(lfegg$chtholly$$bullet_owners, b);
          return undefined;
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
function lfegg$chtholly$$spawn_enemy(pos, vel, hp) {
  const e = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, e, pos);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$velocity$$velocities, e, vel);
  const anim = Milky2018$selene$sprite$$Animation$new("pixel_adventure/Main Characters/Mask Dude/Idle (32x32).png", 11, 32, 32, undefined, lfegg$chtholly$$spawn_enemy$46$constr$47$2294, Option$None$0$, undefined, undefined);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, e, Milky2018$selene$sprite$$Sprite$new_animation(anim, 9));
  moonbitlang$core$builtin$$Map$set$4$(lfegg$chtholly$$enemy_hps, e, hp);
  lfegg$chtholly$$game_state.enemy = e;
}
function lfegg$chtholly$$add_enemy() {
  const center_top = Milky2018$selene$math$$Vec2D$new(264, 64);
  lfegg$chtholly$$spawn_enemy(center_top, Milky2018$selene$math$$Vec2D$new(lfegg$chtholly$$game_state.current_enemy_speed, 0), lfegg$chtholly$$game_state.current_enemy_hp);
}
function lfegg$chtholly$$update_skill_ui() {
  const txt = lfegg$chtholly$$game_state.skill_cd <= 0 ? "R" : moonbitlang$core$int$$Int$to_string$46$inner(lfegg$chtholly$$game_state.skill_cd / 120 | 0, 10);
  const color = lfegg$chtholly$$game_state.skill_cd <= 0 ? "#00FF66" : "#CCCCCC";
  const text = Milky2018$selene$sprite$$Text$new$46$inner(txt, color, "14px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.skill_ready_fx, Milky2018$selene$sprite$$Sprite$new_text(text, 10001));
  const _bind$8 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$position$$positions, lfegg$chtholly$$game_state.skill_icon);
  let ipos;
  if (_bind$8 === undefined) {
    ipos = Milky2018$selene$math$$Vec2D$new(512, 16);
  } else {
    const _Some = _bind$8;
    ipos = _Some;
  }
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, lfegg$chtholly$$game_state.skill_ready_fx, Milky2018$selene$math$$Vec2D$new(ipos.x + 8, ipos.y + 8));
  const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.skill_icon);
  if (_bind$9 === undefined) {
    return;
  } else {
    return;
  }
}
function lfegg$chtholly$$add_skill_ui() {
  const icon = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, icon, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, icon, Milky2018$selene$math$$Vec2D$new(512, 16));
  const anim = Milky2018$selene$sprite$$Animation$new("pixel_adventure/Menu/Buttons/Restart.png", 1, 32, 32, undefined, lfegg$chtholly$$add_skill_ui$46$constr$47$2308, Option$None$0$, undefined, undefined);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, icon, Milky2018$selene$sprite$$Sprite$new_animation(anim, 10000));
  lfegg$chtholly$$game_state.skill_icon = icon;
  const tip = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, tip, Milky2018$selene$camera$$Ui$new());
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, tip, Milky2018$selene$math$$Vec2D$new(520, 24));
  const text = Milky2018$selene$sprite$$Text$new$46$inner("R", "#00FF66", "14px ThaleahFat");
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, tip, Milky2018$selene$sprite$$Sprite$new_text(text, 10001));
  lfegg$chtholly$$game_state.skill_ready_fx = tip;
  lfegg$chtholly$$update_skill_ui();
}
function lfegg$chtholly$$add_hp_ui() {
  const ui = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, ui, Milky2018$selene$math$$Vec2D$new(16, 16));
  moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$camera$$uis, ui, Milky2018$selene$camera$$Ui$new());
  lfegg$chtholly$$update_hp_ui(ui);
  lfegg$chtholly$$game_state.hp_ui = ui;
  lfegg$chtholly$$add_skill_ui();
}
function lfegg$chtholly$$add_player() {
  const entity = Milky2018$selene$system$$Entity$new();
  const position = Milky2018$selene$math$$Vec2D$new(264, 384);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, position);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$velocity$$velocities, entity, Milky2018$selene$math$$Vec2D$new(0, 0));
  const animation = Milky2018$selene$sprite$$Animation$new("pixel_adventure/Main Characters/Mask Dude/Idle (32x32).png", 11, 32, 32, undefined, lfegg$chtholly$$add_player$46$constr$47$2314, Option$None$0$, undefined, undefined);
  const sprite = Milky2018$selene$sprite$$Sprite$new_animation(animation, 10);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$sprite$$sprites, entity, sprite);
  lfegg$chtholly$$game_state.player = entity;
}
function lfegg$chtholly$$apply_difficulty_settings() {
  const idx = lfegg$chtholly$$game_state.level_index;
  if (idx === 0) {
    lfegg$chtholly$$game_state.current_enemy_hp = 60;
    lfegg$chtholly$$game_state.current_enemy_speed = 1.2000000000000002;
    lfegg$chtholly$$game_state.current_enemy_bullet_speed = 2;
    lfegg$chtholly$$game_state.current_enemy_shoot_cd = 45;
    return;
  } else {
    if (idx === 2) {
      lfegg$chtholly$$game_state.current_enemy_hp = 140;
      lfegg$chtholly$$game_state.current_enemy_speed = 1.875;
      lfegg$chtholly$$game_state.current_enemy_bullet_speed = 3.125;
      lfegg$chtholly$$game_state.current_enemy_shoot_cd = 45;
      return;
    } else {
      lfegg$chtholly$$game_state.current_enemy_hp = 100;
      lfegg$chtholly$$game_state.current_enemy_speed = 1.5;
      lfegg$chtholly$$game_state.current_enemy_bullet_speed = 2.5;
      lfegg$chtholly$$game_state.current_enemy_shoot_cd = 30;
      return;
    }
  }
}
function lfegg$chtholly$$start_game() {
  lfegg$chtholly$$destroy_all_bullets();
  const _bind$8 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.player);
  if (_bind$8 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.player);
  }
  const _bind$9 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.enemy);
  if (_bind$9 === undefined) {
  } else {
    Milky2018$selene$system$$Entity$destroy(lfegg$chtholly$$game_state.enemy);
  }
  const rm = [];
  const _it = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$enemy_hps);
  while (true) {
    const _bind$10 = moonbitlang$core$builtin$$Iterator2$next$4$(_it);
    if (_bind$10 === undefined) {
      break;
    } else {
      const _Some = _bind$10;
      const _x = _Some;
      const _e = _x._0;
      moonbitlang$core$array$$Array$push$3$(rm, _e);
      continue;
    }
  }
  const _len = rm.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = rm[_i];
      moonbitlang$core$builtin$$Map$remove$4$(lfegg$chtholly$$enemy_hps, e);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  lfegg$chtholly$$hide_start_ui();
  lfegg$chtholly$$hide_gameover_ui();
  lfegg$chtholly$$hide_victory_ui();
  lfegg$chtholly$$game_state.hp = 3;
  lfegg$chtholly$$game_state.invincible_ticks = 0;
  lfegg$chtholly$$game_state.shoot_cooldown = 0;
  lfegg$chtholly$$game_state.enemy_shoot_cd = 0;
  lfegg$chtholly$$game_state.input_cd = 0;
  lfegg$chtholly$$game_state.hard_pattern_toggle = false;
  lfegg$chtholly$$game_state.skill_cd = 0;
  lfegg$chtholly$$apply_difficulty_settings();
  lfegg$chtholly$$add_player();
  lfegg$chtholly$$add_enemy();
  const _bind$10 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$sprite$$sprites, lfegg$chtholly$$game_state.hp_ui);
  if (_bind$10 === undefined) {
    lfegg$chtholly$$add_hp_ui();
  } else {
    lfegg$chtholly$$update_hp_ui(lfegg$chtholly$$game_state.hp_ui);
  }
  lfegg$chtholly$$game_state.phase = 1;
}
function lfegg$chtholly$$fast_cos(x) {
  let a = x;
  a = a - 6.28318530718 * (moonbitlang$core$double$$Double$to_int(a / 6.28318530718) + 0);
  if (a > 3.14159265359) {
    a = a - 6.28318530718;
  }
  if (a < -3.14159265359) {
    a = a + 6.28318530718;
  }
  return 1 - a * a / 2;
}
function lfegg$chtholly$$fast_sin(x) {
  let a = x;
  a = a - 6.28318530718 * (moonbitlang$core$double$$Double$to_int(a / 6.28318530718) + 0);
  if (a > 3.14159265359) {
    a = a - 6.28318530718;
  }
  if (a < -3.14159265359) {
    a = a + 6.28318530718;
  }
  return a - a * a * a / 6;
}
function lfegg$chtholly$$try_cast_skill() {
  if (lfegg$chtholly$$game_state.phase !== 1) {
    return undefined;
  }
  if (lfegg$chtholly$$game_state.skill_cd > 0) {
    return undefined;
  }
  lfegg$chtholly$$game_state.skill_cd = 1200;
  lfegg$chtholly$$update_skill_ui();
  const to_destroy = [];
  const _it = moonbitlang$core$builtin$$Map$iterator2$4$(lfegg$chtholly$$bullet_owners);
  while (true) {
    const _bind$8 = moonbitlang$core$builtin$$Iterator2$next$4$(_it);
    if (_bind$8 === undefined) {
      break;
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _b = _x._0;
      const _owner = _x._1;
      if (_owner === 2) {
        moonbitlang$core$array$$Array$push$3$(to_destroy, _b);
      }
      continue;
    }
  }
  const _len = to_destroy.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const b = to_destroy[_i];
      Milky2018$selene$system$$Entity$destroy(b);
      moonbitlang$core$builtin$$Map$remove$4$(lfegg$chtholly$$bullet_owners, b);
      moonbitlang$core$builtin$$Map$remove$10$(lfegg$chtholly$$hit_bullets, b);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const p = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, lfegg$chtholly$$game_state.player);
  const cx = p.x + 8;
  const cy = p.y + 8;
  let i = 0;
  while (true) {
    if (i < 16) {
      const ang = 6.28318530718 * (i + 0) / (16 + 0);
      const vx = 5 * lfegg$chtholly$$fast_cos(ang);
      const vy = 5 * lfegg$chtholly$$fast_sin(ang);
      lfegg$chtholly$$spawn_bullet(Milky2018$selene$math$$Vec2D$new(cx, cy), Milky2018$selene$math$$Vec2D$new(vx, vy), 1);
      i = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function lfegg$chtholly$$player_input_system(_discard_) {
  if (lfegg$chtholly$$game_state.phase === 0) {
    if (lfegg$chtholly$$game_state.input_cd > 0) {
      lfegg$chtholly$$game_state.input_cd = lfegg$chtholly$$game_state.input_cd - 1 | 0;
    }
    if (Milky2018$selene$system$$is_pressed(26) && lfegg$chtholly$$game_state.input_cd === 0) {
      lfegg$chtholly$$game_state.level_index = lfegg$chtholly$$game_state.level_index > 0 ? lfegg$chtholly$$game_state.level_index - 1 | 0 : 0;
      lfegg$chtholly$$update_level_menu_ui();
      lfegg$chtholly$$game_state.input_cd = 10;
    } else {
      if (Milky2018$selene$system$$is_pressed(27) && lfegg$chtholly$$game_state.input_cd === 0) {
        lfegg$chtholly$$game_state.level_index = lfegg$chtholly$$game_state.level_index < 2 ? lfegg$chtholly$$game_state.level_index + 1 | 0 : 2;
        lfegg$chtholly$$update_level_menu_ui();
        lfegg$chtholly$$game_state.input_cd = 10;
      }
    }
    if (lfegg$chtholly$$game_state.block_enter_until_release) {
      if (!Milky2018$selene$system$$is_pressed(31)) {
        lfegg$chtholly$$game_state.block_enter_until_release = false;
      }
    } else {
      if (Milky2018$selene$system$$is_pressed(31)) {
        lfegg$chtholly$$start_game();
      }
    }
    return undefined;
  }
  if (lfegg$chtholly$$game_state.phase === 3) {
    if (lfegg$chtholly$$game_state.input_cd > 0) {
      lfegg$chtholly$$game_state.input_cd = lfegg$chtholly$$game_state.input_cd - 1 | 0;
    }
    if (Milky2018$selene$system$$is_pressed(31)) {
      lfegg$chtholly$$hide_victory_ui();
      lfegg$chtholly$$game_state.phase = 0;
      lfegg$chtholly$$game_state.block_enter_until_release = true;
      lfegg$chtholly$$show_start_ui();
    }
    return undefined;
  }
  if (lfegg$chtholly$$game_state.phase === 2) {
    if (lfegg$chtholly$$game_state.input_cd > 0) {
      lfegg$chtholly$$game_state.input_cd = lfegg$chtholly$$game_state.input_cd - 1 | 0;
    }
    if (Milky2018$selene$system$$is_pressed(26) && lfegg$chtholly$$game_state.input_cd === 0) {
      lfegg$chtholly$$game_state.gameover_index = lfegg$chtholly$$game_state.gameover_index > 0 ? lfegg$chtholly$$game_state.gameover_index - 1 | 0 : 0;
      lfegg$chtholly$$update_gameover_menu_ui();
      lfegg$chtholly$$game_state.input_cd = 10;
    } else {
      if (Milky2018$selene$system$$is_pressed(27) && lfegg$chtholly$$game_state.input_cd === 0) {
        lfegg$chtholly$$game_state.gameover_index = lfegg$chtholly$$game_state.gameover_index < 1 ? lfegg$chtholly$$game_state.gameover_index + 1 | 0 : 1;
        lfegg$chtholly$$update_gameover_menu_ui();
        lfegg$chtholly$$game_state.input_cd = 10;
      }
    }
    if (Milky2018$selene$system$$is_pressed(31)) {
      if (lfegg$chtholly$$game_state.gameover_index === 0) {
        lfegg$chtholly$$start_game();
      } else {
        lfegg$chtholly$$hide_gameover_ui();
        lfegg$chtholly$$game_state.phase = 0;
        lfegg$chtholly$$game_state.block_enter_until_release = true;
        lfegg$chtholly$$show_start_ui();
      }
    }
    return undefined;
  }
  const entity = lfegg$chtholly$$game_state.player;
  const pos = moonbitlang$core$builtin$$Map$at$1$(Milky2018$selene$position$$positions, entity);
  const vx = Milky2018$selene$system$$is_pressed(28) ? -3 : Milky2018$selene$system$$is_pressed(29) ? 3 : 0;
  const vy = Milky2018$selene$system$$is_pressed(26) ? -3 : Milky2018$selene$system$$is_pressed(27) ? 3 : 0;
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$velocity$$velocities, entity, Milky2018$selene$math$$Vec2D$new(vx, vy));
  const clamped = lfegg$chtholly$$clamp_position(pos, 32, 32);
  if (clamped.x !== pos.x || clamped.y !== pos.y) {
    moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$position$$positions, entity, clamped);
  }
  if (lfegg$chtholly$$game_state.shoot_cooldown > 0) {
    lfegg$chtholly$$game_state.shoot_cooldown = lfegg$chtholly$$game_state.shoot_cooldown - 1 | 0;
  }
  if (lfegg$chtholly$$game_state.skill_cd > 0) {
    lfegg$chtholly$$game_state.skill_cd = lfegg$chtholly$$game_state.skill_cd - 1 | 0;
    if ((lfegg$chtholly$$game_state.skill_cd % 10 | 0) === 0) {
      lfegg$chtholly$$update_skill_ui();
    }
  }
  if (Milky2018$selene$system$$is_pressed(30) && lfegg$chtholly$$game_state.shoot_cooldown === 0) {
    const muzzle = Milky2018$selene$math$$Vec2D$new(pos.x + 8, pos.y - 8);
    lfegg$chtholly$$spawn_bullet(muzzle, Milky2018$selene$math$$Vec2D$new(0, -6), 1);
    lfegg$chtholly$$game_state.shoot_cooldown = 10;
  }
  if (Milky2018$selene$system$$is_pressed(17)) {
    lfegg$chtholly$$try_cast_skill();
    return;
  } else {
    return;
  }
}
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$add_initializer$46$inner(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new({ self: Milky2018$selene$45$canvas$$CanvasBackend$new(), method_0: Milky2018$selene$system$$Backend$build$51$, method_1: Milky2018$selene$system$$Backend$draw_picture$51$, method_2: Milky2018$selene$system$$Backend$draw_sprite$51$, method_3: Milky2018$selene$system$$Backend$register_key_events$51$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$51$, method_5: Milky2018$selene$system$$Backend$draw_stroke_rect$51$, method_6: Milky2018$selene$system$$Backend$draw_text$51$, method_7: Milky2018$selene$system$$Backend$play_audio$51$, method_8: Milky2018$selene$system$$Backend$get_canvas_size$51$ }), 560), 432), lfegg$chtholly$$game_start, 0), 120), lfegg$chtholly$$player_input_system, 0), lfegg$chtholly$$player_damage_system, 0), lfegg$chtholly$$enemy_ai_system, 0), lfegg$chtholly$$enemy_hit_system, 0), lfegg$chtholly$$cleanup_system, 0), Milky2018$selene$plugins$$default_plugin));
})();
