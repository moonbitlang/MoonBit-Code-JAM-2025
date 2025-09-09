class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
Result$Err$0$.prototype.$name = "Err";
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
Result$Ok$0$.prototype.$name = "Ok";
function Error$moonbitlang$47$core$47$builtin$46$SnapshotError$46$SnapshotError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$builtin$46$SnapshotError$46$SnapshotError.prototype.$tag = 2;
Error$moonbitlang$47$core$47$builtin$46$SnapshotError$46$SnapshotError.prototype.$name = "moonbitlang/core/builtin.SnapshotError.SnapshotError";
function Error$moonbitlang$47$core$47$builtin$46$InspectError$46$InspectError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$builtin$46$InspectError$46$InspectError.prototype.$tag = 1;
Error$moonbitlang$47$core$47$builtin$46$InspectError$46$InspectError.prototype.$name = "moonbitlang/core/builtin.InspectError.InspectError";
function Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$tag = 0;
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$name = "moonbitlang/core/builtin.Failure.Failure";
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
Result$Err$1$.prototype.$name = "Err";
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
Result$Ok$1$.prototype.$name = "Ok";
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
const KrystalRay$pokemoon$$moonbit_test_driver_internal_get_file_name = (file_name) => file_name;
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
const KrystalRay$pokemoon$$moonbit_test_driver_internal_no_args_tests = moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "world_system.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }, { _0: "ui_system.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }, { _0: "pokemon_data.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([{ _0: 0, _1: { _0: KrystalRay$pokemoon$$__test_706f6b656d6f6e5f646174612e6d6274_0, _1: ["test_pokemon_database_operations"] } }]) }, { _0: "main.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }, { _0: "level.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }, { _0: "input_system.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }, { _0: "health_bar.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }, { _0: "game_core.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }, { _0: "battle_system.mbt", _1: moonbitlang$core$builtin$$Map$from_array$2$([]) }]);
function moonbitlang$core$abort$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$Logger$write_object$4$(self, obj) {
  moonbitlang$core$builtin$$Show$output$4$(obj, self);
}
function moonbitlang$core$builtin$$Show$output$5$(_x_2478, _x_2479) {
  const _Failure = _x_2478;
  const _$42$err_payload_2480 = _Failure._0;
  _x_2479.method_0(_x_2479.self, "Failure(");
  moonbitlang$core$builtin$$Logger$write_object$4$(_x_2479, _$42$err_payload_2480);
  _x_2479.method_0(_x_2479.self, ")");
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$6$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$7$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$6$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$builtin$$Logger$write_char$8$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$4$(x, y) {
  return !(x === y);
}
function moonbitlang$core$builtin$$op_notequal$9$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$9$(x, y);
}
function moonbitlang$core$string$$String$escape(self) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$4$(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$array$$Array$op_get$4$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$9$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$7$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$8$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$10$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$4$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$11$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$12$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$13$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$14$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$5$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
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
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$3$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ }, radix);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$Show$to_string$3$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$builtin$$debug_string$4$(t) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(50);
  moonbitlang$core$builtin$$Show$output$4$(t, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$debug_string$9$(t) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(50);
  moonbitlang$core$builtin$$Show$output$9$(t, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$debug_string$3$(t) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(50);
  moonbitlang$core$builtin$$Show$output$3$(t, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$fail$15$(msg, loc) {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${moonbitlang$core$builtin$$Show$to_string$13$(loc)} FAILED: ${moonbitlang$core$builtin$$Show$to_string$4$(msg)}`));
}
function moonbitlang$core$builtin$$assert_eq$4$(a, b, msg, loc) {
  if (moonbitlang$core$builtin$$op_notequal$4$(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      fail_msg = `\`${moonbitlang$core$builtin$$Show$to_string$4$(moonbitlang$core$builtin$$debug_string$4$(a))} != ${moonbitlang$core$builtin$$Show$to_string$4$(moonbitlang$core$builtin$$debug_string$4$(b))}\``;
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return moonbitlang$core$builtin$$fail$15$(fail_msg, loc);
  } else {
    return new Result$Ok$1$(undefined);
  }
}
function moonbitlang$core$builtin$$assert_eq$9$(a, b, msg, loc) {
  if (moonbitlang$core$builtin$$op_notequal$9$(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      fail_msg = `\`${moonbitlang$core$builtin$$Show$to_string$4$(moonbitlang$core$builtin$$debug_string$9$(a))} != ${moonbitlang$core$builtin$$Show$to_string$4$(moonbitlang$core$builtin$$debug_string$9$(b))}\``;
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return moonbitlang$core$builtin$$fail$15$(fail_msg, loc);
  } else {
    return new Result$Ok$1$(undefined);
  }
}
function moonbitlang$core$builtin$$assert_eq$3$(a, b, msg, loc) {
  if (a !== b) {
    let fail_msg;
    if (msg === undefined) {
      fail_msg = `\`${moonbitlang$core$builtin$$Show$to_string$4$(moonbitlang$core$builtin$$debug_string$3$(a))} != ${moonbitlang$core$builtin$$Show$to_string$4$(moonbitlang$core$builtin$$debug_string$3$(b))}\``;
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return moonbitlang$core$builtin$$fail$15$(fail_msg, loc);
  } else {
    return new Result$Ok$1$(undefined);
  }
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
function moonbitlang$core$builtin$$Logger$write_substring$8$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$output$12$(self, logger) {
  if (self) {
    logger.method_0(logger.self, "true");
    return;
  } else {
    logger.method_0(logger.self, "false");
    return;
  }
}
function moonbitlang$core$builtin$$Show$output$3$(self, logger) {
  moonbitlang$core$int$$Int$output$46$inner(self, logger, 10);
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
function moonbitlang$core$builtin$$Show$output$4$(self, logger) {
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
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return self;
}
function moonbitlang$core$option$$Option$unwrap$16$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$unwrap$17$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$array$$Array$each$18$(self, f) {
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
function moonbitlang$core$array$$Array$each$19$(self, f) {
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
    moonbitlang$core$option$$Option$unwrap$16$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$17$(_tmp[_bind]).next = entry;
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
function moonbitlang$core$builtin$$Map$push_away$2$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
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
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
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
function moonbitlang$core$builtin$$Map$grow$2$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$2$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$10$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$3$(key));
}
function moonbitlang$core$builtin$$Map$from_array$1$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$46$inner$1$(arr.length);
  moonbitlang$core$array$$Array$each$18$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$1$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$2$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$46$inner$2$(arr.length);
  moonbitlang$core$array$$Array$each$19$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$2$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$3$(key);
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
  const hash = moonbitlang$core$builtin$$Hash$hash$10$(key);
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
function moonbitlang$core$builtin$$Hash$hash_combine$4$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash$3$(self) {
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
function moonbitlang$core$builtin$$println$4$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$4$(input));
}
function moonbitlang$core$builtin$$Show$output$14$(self, logger) {
  logger.method_0(logger.self, self);
}
function moonbitlang$core$builtin$$assert_false(x, msg, loc) {
  if (x) {
    let fail_msg;
    if (msg === undefined) {
      fail_msg = `\`${moonbitlang$core$builtin$$Show$to_string$11$(x)}\` is not false`;
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return moonbitlang$core$builtin$$fail$15$(fail_msg, loc);
  } else {
    return new Result$Ok$1$(undefined);
  }
}
function moonbitlang$core$builtin$$Add$op_add$20$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$7$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$7$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$array$$Array$is_empty$4$(self) {
  return self.length === 0;
}
function moonbitlang$core$builtin$$Show$output$9$(_x_873, _x_874) {
  switch (_x_873) {
    case 0: {
      _x_874.method_0(_x_874.self, "Normal");
      return;
    }
    case 1: {
      _x_874.method_0(_x_874.self, "Fire");
      return;
    }
    case 2: {
      _x_874.method_0(_x_874.self, "Water");
      return;
    }
    case 3: {
      _x_874.method_0(_x_874.self, "Electric");
      return;
    }
    case 4: {
      _x_874.method_0(_x_874.self, "Grass");
      return;
    }
    case 5: {
      _x_874.method_0(_x_874.self, "Ice");
      return;
    }
    case 6: {
      _x_874.method_0(_x_874.self, "Fighting");
      return;
    }
    case 7: {
      _x_874.method_0(_x_874.self, "Poison");
      return;
    }
    case 8: {
      _x_874.method_0(_x_874.self, "Ground");
      return;
    }
    case 9: {
      _x_874.method_0(_x_874.self, "Flying");
      return;
    }
    case 10: {
      _x_874.method_0(_x_874.self, "Psychic");
      return;
    }
    case 11: {
      _x_874.method_0(_x_874.self, "Bug");
      return;
    }
    case 12: {
      _x_874.method_0(_x_874.self, "Rock");
      return;
    }
    case 13: {
      _x_874.method_0(_x_874.self, "Ghost");
      return;
    }
    case 14: {
      _x_874.method_0(_x_874.self, "Dragon");
      return;
    }
    case 15: {
      _x_874.method_0(_x_874.self, "Dark");
      return;
    }
    case 16: {
      _x_874.method_0(_x_874.self, "Steel");
      return;
    }
    default: {
      _x_874.method_0(_x_874.self, "Fairy");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$9$(_x_869, _x_870) {
  switch (_x_869) {
    case 0: {
      if (_x_870 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_870 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_870 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_870 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_870 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_870 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_870 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_870 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_870 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_870 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_870 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_870 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_870 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_870 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_870 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_870 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_870 === 16) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_870 === 17) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function KrystalRay$pokemoon$$get_pokemon_data() {
  return [{ id: 1, name: "妙蛙种子", level: 5, hp: 45, max_hp: 45, attack: 49, defense: 49, speed: 45, types: [4, 7], moves: ["藤鞭", "生长", "睡眠粉"] }, { id: 2, name: "小火龙", level: 5, hp: 39, max_hp: 39, attack: 52, defense: 43, speed: 65, types: [1], moves: ["火花", "抓", "叫声"] }, { id: 3, name: "杰尼龟", level: 5, hp: 44, max_hp: 44, attack: 48, defense: 65, speed: 43, types: [2], moves: ["水枪", "缩壳", "撞击"] }, { id: 4, name: "皮卡丘", level: 10, hp: 35, max_hp: 35, attack: 55, defense: 40, speed: 90, types: [3], moves: ["十万伏特", "电光一闪", "铁尾"] }, { id: 5, name: "喷火龙", level: 36, hp: 78, max_hp: 78, attack: 84, defense: 78, speed: 100, types: [1, 9], moves: ["火焰放射", "翅膀攻击", "龙爪"] }];
}
function KrystalRay$pokemoon$$create_pokemon_database() {
  return { pokemons: KrystalRay$pokemoon$$get_pokemon_data(), last_updated: "2024-01-01" };
}
function KrystalRay$pokemoon$$find_pokemon_by_id(db, id) {
  const result = { val: undefined };
  const i = { val: 0 };
  while (true) {
    if (i.val < db.pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$op_get$7$(db.pokemons, i.val);
      if (pokemon.id === id) {
        result.val = pokemon;
        break;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result.val;
}
function KrystalRay$pokemoon$$find_pokemon_by_name(db, name) {
  const result = { val: undefined };
  const i = { val: 0 };
  while (true) {
    if (i.val < db.pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$op_get$7$(db.pokemons, i.val);
      if (pokemon.name === name) {
        result.val = pokemon;
        break;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result.val;
}
function KrystalRay$pokemoon$$find_pokemon_by_type(db, pokemon_type) {
  const result = { val: [] };
  const i = { val: 0 };
  while (true) {
    if (i.val < db.pokemons.length) {
      const pokemon = moonbitlang$core$array$$Array$op_get$7$(db.pokemons, i.val);
      const found = { val: false };
      const j = { val: 0 };
      while (true) {
        if (j.val < pokemon.types.length) {
          if (moonbitlang$core$builtin$$Eq$op_equal$9$(moonbitlang$core$array$$Array$op_get$9$(pokemon.types, j.val), pokemon_type)) {
            found.val = true;
            break;
          }
          j.val = j.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (found.val) {
        result.val = moonbitlang$core$builtin$$Add$op_add$20$(result.val, [pokemon]);
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result.val;
}
function KrystalRay$pokemoon$$get_pokemon_count(db) {
  return db.pokemons.length;
}
function KrystalRay$pokemoon$$__test_706f6b656d6f6e5f646174612e6d6274_0() {
  const db = KrystalRay$pokemoon$$create_pokemon_database();
  const bulbasaur = KrystalRay$pokemoon$$find_pokemon_by_id(db, 1);
  let p;
  _L: {
    _L$2: {
      if (bulbasaur === undefined) {
        const _bind = moonbitlang$core$builtin$$assert_false(true, undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:269:13-269:32");
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
      } else {
        const _Some = bulbasaur;
        const _p = _Some;
        p = _p;
        break _L$2;
      }
      break _L;
    }
    const _bind = moonbitlang$core$builtin$$assert_eq$4$(p.name, "妙蛙种子", undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:266:7-266:33");
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = moonbitlang$core$builtin$$assert_eq$9$(moonbitlang$core$array$$Array$op_get$9$(p.types, 0), 4, undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:267:7-267:49");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  const pikachu = KrystalRay$pokemoon$$find_pokemon_by_name(db, "皮卡丘");
  let p$2;
  _L$2: {
    _L$3: {
      if (pikachu === undefined) {
        const _bind = moonbitlang$core$builtin$$assert_false(true, undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:279:13-279:32");
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
      } else {
        const _Some = pikachu;
        const _p = _Some;
        p$2 = _p;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = moonbitlang$core$builtin$$assert_eq$3$(p$2.id, 4, undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:276:7-276:26");
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = moonbitlang$core$builtin$$assert_eq$9$(moonbitlang$core$array$$Array$op_get$9$(p$2.types, 0), 3, undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:277:7-277:52");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  const fire_pokemons = KrystalRay$pokemoon$$find_pokemon_by_type(db, 1);
  const _bind = moonbitlang$core$builtin$$assert_eq$3$(fire_pokemons.length, 2, undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:284:3-284:40");
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  return moonbitlang$core$builtin$$assert_eq$3$(KrystalRay$pokemoon$$get_pokemon_count(db), 5, undefined, "/Users/kelei/opensource/selene-pokemoon/pokemoon/src/pokemon_data.mbt:287:3-287:39");
}
function KrystalRay$pokemoon$$moonbit_test_driver_internal_execute(filename, index) {
  const file_filter = KrystalRay$pokemoon$$moonbit_test_driver_internal_get_file_name(filename);
  const index_filter = index;
  let filtered_test;
  let index_func_map;
  _L: {
    _L$2: {
      const _bind = moonbitlang$core$builtin$$Map$get$1$(KrystalRay$pokemoon$$moonbit_test_driver_internal_no_args_tests, file_filter);
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
    filtered_test = moonbitlang$core$builtin$$Map$get$2$(index_func_map, index_filter);
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
    const name = moonbitlang$core$array$$Array$is_empty$4$(attrs) ? "" : moonbitlang$core$array$$Array$op_get$4$(attrs, 0);
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
  moonbitlang$core$builtin$$println$4$("----- BEGIN MOON TEST RESULT -----");
  moonbitlang$core$builtin$$println$4$(`{\"package\": \"KrystalRay/pokemoon\", \"filename\": ${moonbitlang$core$builtin$$Show$to_string$4$(file_name)}, \"index\": \"${moonbitlang$core$builtin$$Show$to_string$3$(index)}\", \"test_name\": ${moonbitlang$core$builtin$$Show$to_string$4$(test_name$2)}, \"message\": ${moonbitlang$core$builtin$$Show$to_string$4$(message$2)}}`);
  moonbitlang$core$builtin$$println$4$("----- END MOON TEST RESULT -----");
}
function KrystalRay$pokemoon$$moonbit_test_driver_finish() {}
(() => {
})();
exports.moonbit_test_driver_internal_execute = KrystalRay$pokemoon$$moonbit_test_driver_internal_execute;
exports.moonbit_test_driver_finish = KrystalRay$pokemoon$$moonbit_test_driver_finish;
//# sourceMappingURL=pokemoon.internal_test.js.map
