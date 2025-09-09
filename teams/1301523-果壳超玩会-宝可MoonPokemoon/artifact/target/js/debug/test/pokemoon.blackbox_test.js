function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
Option$Some$0$.prototype.$name = "Some";
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function Option$Some$1$(param0) {
  this._0 = param0;
}
Option$Some$1$.prototype.$tag = 1;
Option$Some$1$.prototype.$name = "Some";
function Option$Some$2$(param0) {
  this._0 = param0;
}
Option$Some$2$.prototype.$tag = 1;
Option$Some$2$.prototype.$name = "Some";
function Option$Some$3$(param0) {
  this._0 = param0;
}
Option$Some$3$.prototype.$tag = 1;
Option$Some$3$.prototype.$name = "Some";
function $64$moonbitlang$47$core$47$list$46$List$More$4$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$4$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$list$46$List$More$4$.prototype.$name = "More";
function $64$Milky2018$47$selene$47$system$46$Schedule$Render(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$tag = 2;
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$name = "Render";
function $64$Milky2018$47$selene$47$system$46$Schedule$UpdateFrame(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateFrame.prototype.$tag = 3;
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateFrame.prototype.$name = "UpdateFrame";
function $64$Milky2018$47$selene$47$system$46$Schedule$UpdateTime(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateTime.prototype.$tag = 4;
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateTime.prototype.$name = "UpdateTime";
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture.prototype.$tag = 0;
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture.prototype.$name = "Picture";
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation.prototype.$tag = 1;
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation.prototype.$name = "Animation";
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Text.prototype.$tag = 2;
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Text.prototype.$name = "Text";
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect.prototype.$tag = 3;
$64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect.prototype.$name = "ColorRect";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$5$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$5$.prototype.$name = "Break";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$5$.prototype.$tag = 2;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$5$.prototype.$name = "Return";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$5$.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$5$.prototype.$name = "Error";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$5$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$5$.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$5$.prototype.$name = "JumpOuter";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$.prototype.$name = "Break";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$.prototype.$tag = 2;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$.prototype.$name = "Return";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$.prototype.$name = "Error";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$.prototype.$name = "JumpOuter";
function Option$Some$7$(param0) {
  this._0 = param0;
}
Option$Some$7$.prototype.$tag = 1;
Option$Some$7$.prototype.$name = "Some";
function Option$Some$8$(param0) {
  this._0 = param0;
}
Option$Some$8$.prototype.$tag = 1;
Option$Some$8$.prototype.$name = "Some";
function Option$Some$9$(param0) {
  this._0 = param0;
}
Option$Some$9$.prototype.$tag = 1;
Option$Some$9$.prototype.$name = "Some";
function Option$Some$10$(param0) {
  this._0 = param0;
}
Option$Some$10$.prototype.$tag = 1;
Option$Some$10$.prototype.$name = "Some";
const Yoorkin$rabbit$45$tea$dom$$window = () => window;
function Option$Some$11$(param0) {
  this._0 = param0;
}
Option$Some$11$.prototype.$tag = 1;
Option$Some$11$.prototype.$name = "Some";
const KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_internal_get_file_name = (file_name) => file_name;
function Error$$to_string(_e) {
  switch (_e.$tag) {
    case 2: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
    case 0: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    default: {
      return "moonbitlang/core/builtin.InspectError.InspectError";
    }
  }
}
const Milky2018$selene$system$$entity_generator = { val: 0 };
const KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_internal_no_args_tests = moonbitlang$core$builtin$$Map$from_array$1$([]);
moonbitlang$core$set$$Set$new$46$inner$2$(8);
Yoorkin$rabbit$45$tea$dom$$window();
moonbitlang$core$builtin$$Map$new$46$inner$3$(8);
moonbitlang$core$builtin$$Map$new$46$inner$4$(8);
moonbitlang$core$set$$Set$from_array$2$([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);
moonbitlang$core$set$$Set$new$46$inner$2$(8);
moonbitlang$core$set$$Set$new$46$inner$2$(8);
moonbitlang$core$set$$Set$new$46$inner$2$(8);
moonbitlang$core$builtin$$Map$new$46$inner$5$(8);
Milky2018$selene$math$$Vec2D$zero();
Milky2018$selene$math$$Vec2D$zero();
moonbitlang$core$builtin$$Map$new$46$inner$6$(8);
moonbitlang$core$builtin$$Map$new$46$inner$7$(8);
const Milky2018$selene$system$$all_entities = moonbitlang$core$set$$Set$new$46$inner$8$(8);
moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
moonbitlang$core$ref$$Ref$new$10$(Milky2018$selene$collision$$QuadTree$new({ _0: 0, _1: 0 }, { _0: 0, _1: 0 }, 0));
moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
moonbitlang$core$builtin$$Map$new$46$inner$13$(8);
moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
moonbitlang$core$array$$Array$new$46$inner$15$(0);
moonbitlang$core$builtin$$Map$new$46$inner$16$(8);
moonbitlang$core$builtin$$Map$new$46$inner$17$(8);
moonbitlang$core$array$$Array$new$46$inner$18$(0);
({ player_pokemon_entity: Milky2018$selene$system$$Entity$new(), enemy_pokemon_entity: Milky2018$selene$system$$Entity$new(), background_entity: Milky2018$selene$system$$Entity$new(), ui_panel_entity: Milky2018$selene$system$$Entity$new(), text_box_entity: Milky2018$selene$system$$Entity$new(), text_entity: Milky2018$selene$system$$Entity$new(), menu_entity: Milky2018$selene$system$$Entity$new(), selected_option: 0, is_active: false, current_selection_entity: Milky2018$selene$system$$Entity$new(), skill_menu_visible: false, skill_menu_selected: 0, current_player_pokemon: undefined, current_enemy_pokemon: undefined, battle_state: undefined, player_pokemon_info: undefined, enemy_pokemon_info: undefined });
Milky2018$selene$system$$Entity$new();
Milky2018$selene$system$$Entity$new();
function moonbitlang$core$abort$$abort$19$(msg) {
  return $panic();
}
function moonbitlang$core$ref$$Ref$new$10$(x) {
  return { val: x };
}
function moonbitlang$core$set$$calc_grow_threshold(capacity) {
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function moonbitlang$core$set$$Set$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$set$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$8$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$set$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$set$$Set$add_entry_to_tail$2$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$20$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$8$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$21$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$set_entry$2$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$set_entry$8$(self, entry, new_idx) {
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
function moonbitlang$core$set$$Set$push_away$2$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
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
      moonbitlang$core$set$$Set$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$2$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$push_away$8$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
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
      moonbitlang$core$set$$Set$set_entry$8$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$8$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$add_with_hash$2$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$2$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$2$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$2$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$2$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$8$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$8$(self);
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
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$8$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$8$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$8$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$2$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = moonbitlang$core$set$$calc_grow_threshold(self.capacity);
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
function moonbitlang$core$set$$Set$grow$8$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = moonbitlang$core$set$$calc_grow_threshold(self.capacity);
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
function moonbitlang$core$set$$Set$add$2$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$2$(self, key, moonbitlang$core$builtin$$Hash$hash$22$(key));
}
function moonbitlang$core$set$$Set$add$8$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$8$(self, key, moonbitlang$core$builtin$$Hash$hash$23$(key));
}
function moonbitlang$core$set$$Set$from_array$2$(arr) {
  const m = moonbitlang$core$set$$Set$new$46$inner$2$(arr.length);
  moonbitlang$core$array$$Array$each$24$(arr, (e) => {
    moonbitlang$core$set$$Set$add$2$(m, e);
  });
  return m;
}
function moonbitlang$core$builtin$$Logger$write_object$25$(self, obj) {
  moonbitlang$core$builtin$$Show$output$25$(obj, self);
}
function moonbitlang$core$builtin$$Show$output$26$(_x_2478, _x_2479) {
  const _Failure = _x_2478;
  const _$42$err_payload_2480 = _Failure._0;
  _x_2479.method_0(_x_2479.self, "Failure(");
  moonbitlang$core$builtin$$Logger$write_object$25$(_x_2479, _$42$err_payload_2480);
  _x_2479.method_0(_x_2479.self, ")");
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$builtin$$Logger$write_char$27$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$string$$String$escape(self) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$25$(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$27$, method_1: moonbitlang$core$builtin$$Logger$write_substring$27$, method_2: moonbitlang$core$builtin$$Logger$write_char$27$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$array$$Array$op_get$25$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$27$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$25$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$25$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$2$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$2$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$8$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$8$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$28$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$25$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$22$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$2$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$23$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$8$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$26$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$27$, method_1: moonbitlang$core$builtin$$Logger$write_substring$27$, method_2: moonbitlang$core$builtin$$Logger$write_char$27$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$string$$String$charcode_at(self, index) {
  $bound_check(self, index);
  return self.charCodeAt(index);
}
function moonbitlang$core$builtin$$output$46$inner$46$abs$124$1877(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1879(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1879(_env, num2);
  }
  logger.method_2(logger.self, moonbitlang$core$string$$String$charcode_at("0123456789abcdefghijklmnopqrstuvwxyz", moonbitlang$core$builtin$$output$46$inner$46$abs$124$1877(num % radix | 0)));
}
function moonbitlang$core$int$$Int$output$46$inner(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1879(_env, moonbitlang$core$builtin$$output$46$inner$46$abs$124$1877(self));
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$19$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$27$, method_1: moonbitlang$core$builtin$$Logger$write_substring$27$, method_2: moonbitlang$core$builtin$$Logger$write_char$27$ }, radix);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$Show$to_string$19$(self) {
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
function moonbitlang$core$builtin$$Logger$write_substring$27$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$to_hex_digit(i) {
  return i < 10 ? i + 48 | 0 : (i + 97 | 0) - 10 | 0;
}
function moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i) {
  const self = _env._1;
  const logger = _env._0;
  if (i > seg) {
    logger.method_1(logger.self, self, seg, i - seg | 0);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$Show$output$25$(self, logger) {
  logger.method_2(logger.self, 34);
  const _env = { _0: logger, _1: self };
  const len = self.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i);
      break;
    }
    const code = self.charCodeAt(i);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i);
          logger.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i);
          logger.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i);
          logger.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i);
          logger.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i);
            logger.method_0(logger.self, "\\u{");
            logger.method_2(logger.self, moonbitlang$core$builtin$$to_hex_digit(code / 16 | 0));
            logger.method_2(logger.self, moonbitlang$core$builtin$$to_hex_digit(code % 16 | 0));
            logger.method_2(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    moonbitlang$core$builtin$$output$46$flush_segment$124$1915(_env, seg, i);
    logger.method_2(logger.self, 92);
    logger.method_2(logger.self, c);
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  logger.method_2(logger.self, 34);
}
function moonbitlang$core$builtin$$Show$to_string$25$(self) {
  return self;
}
function moonbitlang$core$option$$Option$unwrap$20$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$unwrap$21$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$unwrap$29$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$builtin$$calc_grow_threshold(capacity) {
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
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
function moonbitlang$core$builtin$$Map$new$46$inner$17$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$4$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$11$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$14$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$6$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$13$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$16$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$array$$Array$each$30$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$24$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$29$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$1$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$push_away$1$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
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
      moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$1$(self);
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
        moonbitlang$core$builtin$$Map$push_away$1$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$1$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
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
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$28$(key));
}
function moonbitlang$core$builtin$$Map$from_array$1$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$46$inner$1$(arr.length);
  moonbitlang$core$array$$Array$each$30$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$1$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$get$31$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$28$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  self.acc = Math.imul(moonbitlang$core$builtin$$rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_uint(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end883 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end883) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$25$(self, hasher) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$32$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$builtin$$println$25$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$25$(input));
}
function moonbitlang$core$array$$Array$new$46$inner$15$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$18$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$is_empty$25$(self) {
  return self.length === 0;
}
function Milky2018$selene$math$$Vec2D$zero() {
  return { _0: 0, _1: 0 };
}
function moonbitlang$core$builtin$$Eq$op_equal$8$(_x_137, _x_138) {
  return _x_137 === _x_138;
}
function moonbitlang$core$builtin$$Hash$hash_combine$8$(_x_129, _x_130) {
  moonbitlang$core$builtin$$Hash$hash_combine$32$(_x_129, _x_130);
}
function moonbitlang$core$builtin$$Eq$op_equal$2$(_x_125, _x_126) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$2$(_x_117, _x_118) {
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
function Milky2018$selene$system$$Entity$new() {
  const entity = Milky2018$selene$system$$entity_generator.val;
  Milky2018$selene$system$$entity_generator.val = (Milky2018$selene$system$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$8$(Milky2018$selene$system$$all_entities, entity);
  return entity;
}
function Milky2018$selene$collision$$QuadTree$new(position, size, depth) {
  const _bind = moonbitlang$core$set$$Set$new$46$inner$8$(8);
  const _bind$2 = [];
  const _bind$3 = { position: position, size: size };
  return { position: position, size: size, children: _bind$2, depth: depth, bounding_box: _bind$3, entities: _bind };
}
function KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_internal_execute(filename, index) {
  const file_filter = KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_internal_get_file_name(filename);
  const index_filter = index;
  let filtered_test;
  let index_func_map;
  _L: {
    _L$2: {
      const _bind = moonbitlang$core$builtin$$Map$get$1$(KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_internal_no_args_tests, file_filter);
      if (_bind === undefined) {
        filtered_test = undefined;
      } else {
        const _Some = _bind;
        const _index_func_map = _Some;
        index_func_map = _index_func_map;
        break _L$2;
      }
      break _L;
    }
    filtered_test = moonbitlang$core$builtin$$Map$get$31$(index_func_map, index_filter);
  }
  const test_name = { val: "" };
  const message = { val: "" };
  let item;
  _L$2: {
    _L$3: {
      if (filtered_test === undefined) {
        message.val = "skipped test";
      } else {
        const _Some = filtered_test;
        const _item = _Some;
        item = _item;
        break _L$3;
      }
      break _L$2;
    }
    const func = item._0;
    const attrs = item._1;
    const name = moonbitlang$core$array$$Array$is_empty$25$(attrs) ? "" : moonbitlang$core$array$$Array$op_get$25$(attrs, 0);
    const name$2 = name.length === 0 ? moonbitlang$core$int$$Int$to_string$46$inner(index_filter, 10) : name;
    test_name.val = name$2;
    let _try_err;
    _L$4: {
      _L$5: {
        const _bind = func();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          const _err = _bind;
          const _tmp = _err._0;
          _try_err = _tmp;
          break _L$5;
        }
        break _L$4;
      }
      let e;
      _L$6: {
        _L$7: {
          let e$2;
          _L$8: {
            switch (_try_err.$tag) {
              case 0: {
                const _Failure = _try_err;
                const _e = _Failure._0;
                e$2 = _e;
                break _L$8;
              }
              case 1: {
                const _InspectError = _try_err;
                const _e$2 = _InspectError._0;
                e$2 = _e$2;
                break _L$8;
              }
              case 2: {
                const _SnapshotError = _try_err;
                const _e$3 = _SnapshotError._0;
                e$2 = _e$3;
                break _L$8;
              }
              default: {
                e = _try_err;
                break _L$7;
              }
            }
          }
          message.val = e$2;
          break _L$6;
        }
        message.val = Error$$to_string(e);
      }
    }
  }
  const file_name = moonbitlang$core$string$$String$escape(file_filter);
  const test_name$2 = moonbitlang$core$string$$String$escape(test_name.val);
  const message$2 = moonbitlang$core$string$$String$escape(message.val);
  moonbitlang$core$builtin$$println$25$("----- BEGIN MOON TEST RESULT -----");
  moonbitlang$core$builtin$$println$25$(`{\"package\": \"KrystalRay/pokemoon\", \"filename\": ${moonbitlang$core$builtin$$Show$to_string$25$(file_name)}, \"index\": \"${moonbitlang$core$builtin$$Show$to_string$19$(index)}\", \"test_name\": ${moonbitlang$core$builtin$$Show$to_string$25$(test_name$2)}, \"message\": ${moonbitlang$core$builtin$$Show$to_string$25$(message$2)}}`);
  moonbitlang$core$builtin$$println$25$("----- END MOON TEST RESULT -----");
}
function KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_finish() {}
(() => {
})();
exports.moonbit_test_driver_internal_execute = KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_internal_execute;
exports.moonbit_test_driver_finish = KrystalRay$pokemoon_blackbox_test$$moonbit_test_driver_finish;
//# sourceMappingURL=pokemoon.blackbox_test.js.map
