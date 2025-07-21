const $0L = { hi: 0, lo: 0 };
const $64$username$47$hello$47$game$46$GameState$Initialize = { $tag: 0 };
function $64$username$47$hello$47$game$46$GameState$Running(param0) {
  this._0 = param0;
}
$64$username$47$hello$47$game$46$GameState$Running.prototype.$tag = 1;
function $64$username$47$hello$47$game$46$GameState$Paused(param0) {
  this._0 = param0;
}
$64$username$47$hello$47$game$46$GameState$Paused.prototype.$tag = 2;
const $64$username$47$hello$47$game$46$GameState$GameOver = { $tag: 3 };
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
const moonbitlang$core$array$$JSArray$copy = (arr) => arr.slice(0);
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
const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54]);
const $4294967295L = { hi: 0, lo: -1 };
const $1L = { hi: 0, lo: 1 };
const rami3l$js$45$ffi$js$$Value$undefined = () => undefined;
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
const Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame = (self,f) => self.requestAnimationFrame(f);
const Yoorkin$rabbit$45$tea$dom$$window = () => window;
const Yoorkin$rabbit$45$tea$dom$$Window$to_event_target = (x) => x;
const Yoorkin$rabbit$45$tea$dom$$UIEvent$to_keyboard_event = (e) => e instanceof KeyboardEvent ? e : null;
const Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code = (e) => e.code;
const Yoorkin$rabbit$45$tea$dom$$HTMLElement$to_html_canvas_element = (x) => x instanceof HTMLCanvasElement ? x : null;
const Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context = (x, id) => x.getContext(id);
const Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener = (target, type, listener) => target.addEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$Event$to_ui_event = (x) => x instanceof UIEvent ? x : null;
const Yoorkin$rabbit$45$tea$dom$$Element$to_html_element = (x) => x instanceof HTMLElement ? x : null;
const Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d = (value) => value instanceof CanvasRenderingContext2D ? value : null;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save = (x) => x.save();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore = (x) => x.restore();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale = (self,x,y) => self.scale(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style = (x,value) => x.fillStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect = (self,x,y,w,h) => self.clearRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect = (self,x,y,w,h) => self.fillRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text = (self,text,x,y,maxWidth) => self.fillText(text,x,y,maxWidth);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font = (self,value) => self.font = value;
const Yoorkin$rabbit$45$tea$dom$$document = () => document;
const Yoorkin$rabbit$45$tea$dom$$Document$query_selector = (self,selectors) => self.querySelector(selectors);
const Option$None$1$ = { $tag: 0 };
function Option$Some$1$(param0) {
  this._0 = param0;
}
Option$Some$1$.prototype.$tag = 1;
const moonbitlang$core$random$$gUInt128 = { hi: $0L, lo: $0L };
const username$hello$main$$last_tick = { val: 0 };
const username$hello$main$$last_time = { val: 0 };
const username$hello$main$$keys = moonbitlang$core$builtin$$Default$default$0$();
const username$hello$main$$state = { val: $64$username$47$hello$47$game$46$GameState$Initialize };
const username$hello$main$$random = moonbitlang$core$random$$Rand$new(undefined);
function moonbitlang$core$abort$$abort$1$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$2$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$array$$Array$makei$5$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = moonbitlang$core$array$$Array$make$6$(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        moonbitlang$core$array$$Array$op_set$6$(array, i, value(i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$FixedArray$makei$7$(length, value) {
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
function moonbitlang$core$array$$Array$copy$8$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$Array$filter_map$9$(self, f) {
  const result = [];
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const x = self[_i];
      const _bind = f(x);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _x = _Some._0;
        moonbitlang$core$array$$Array$push$6$(result, _x);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function moonbitlang$core$bytes$$View$op_get(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.bytes;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$3$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$4$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$4$(index)}`);
  }
}
function moonbitlang$core$bytes$$Bytes$op_as_view(self, start, end) {
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { bytes: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$2$("Invalid index for View");
}
function moonbitlang$core$bytes$$View$to_uint_le(self) {
  const _p = moonbitlang$core$bytes$$View$op_get(self, 0);
  const _p$2 = moonbitlang$core$bytes$$View$op_get(self, 1);
  const _tmp = (_p >>> 0) + (_p$2 << 8 >>> 0) | 0;
  const _p$3 = moonbitlang$core$bytes$$View$op_get(self, 2);
  const _tmp$2 = (_tmp >>> 0) + (_p$3 << 16 >>> 0) | 0;
  const _p$4 = moonbitlang$core$bytes$$View$op_get(self, 3);
  return (_tmp$2 >>> 0) + (_p$4 << 24 >>> 0) | 0;
}
function moonbitlang$core$builtin$$Eq$op_equal$10$(_x_2429, _x_2430) {
  if (_x_2429 === 0) {
    if (_x_2430 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_2430 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$op_lt$11$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$11$(self_, other) < 0;
}
function moonbitlang$core$option$$Option$unwrap$12$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some._0;
    return _x;
  }
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$13$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$14$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$10$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$10$(x, y);
}
function moonbitlang$core$array$$Array$op_get$8$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$6$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$14$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$output$46$abs$124$1784(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$output$46$write_digits$124$1786(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$write_digits$124$1786(_env, num2);
  }
  const _tmp = moonbitlang$core$builtin$$output$46$abs$124$1784(num % radix | 0);
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$write_digits$124$1786(_env, moonbitlang$core$builtin$$output$46$abs$124$1784(self));
}
function moonbitlang$core$int$$Int$output_size_hint(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$4$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$int$$Int$output_size_hint(radix));
  moonbitlang$core$int$$Int$output(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$14$, method_1: moonbitlang$core$builtin$$Logger$write_substring$14$, method_2: moonbitlang$core$builtin$$Logger$write_char$14$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return moonbitlang$core$int$$Int$to_string(self, 10);
}
function moonbitlang$core$uint64$$UInt64$to_int(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$14$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring(str, start, start + len | 0)}`;
}
function moonbitlang$core$array$$Array$iter$8$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
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
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$uint$$UInt$to_uint64(self) {
  return moonbitlang$core$uint64$$UInt64$extend_uint(self);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iter$run$8$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$any$8$(self, f) {
  return moonbitlang$core$builtin$$op_notequal$10$(moonbitlang$core$builtin$$Iter$run$8$(self, (k) => f(k) ? 0 : 1), 1);
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
function moonbitlang$core$builtin$$Add$op_add$15$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$op_sub$15$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$op_mul$15$(self, other) {
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
function moonbitlang$core$builtin$$Add$op_add$11$(self, other) {
  return moonbitlang$core$builtin$$Add$op_add$15$(self, other);
}
function moonbitlang$core$builtin$$Sub$op_sub$11$(self, other) {
  return moonbitlang$core$builtin$$Sub$op_sub$15$(self, other);
}
function moonbitlang$core$builtin$$Mul$op_mul$11$(self, other) {
  return moonbitlang$core$builtin$$Mul$op_mul$15$(self, other);
}
function moonbitlang$core$builtin$$Mod$op_mod$11$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$mod_u(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$11$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$op_equal$11$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$11$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$11$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$uint64$$UInt64$lnot(self) {
  return moonbitlang$core$builtin$$MyInt64$lnot(self);
}
function moonbitlang$core$builtin$$Shl$op_shl$11$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$op_shr$11$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$array$$FixedArray$blit_to$13$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$13$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$1$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$4$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$4$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$4$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$4$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$4$(self.length)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$make$8$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$6$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$op_set$8$(self, index, value) {
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
function moonbitlang$core$array$$Array$op_set$6$(self, index, value) {
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
function moonbitlang$core$random$$Source$next$16$(self) {
  while (true) {
    const _bind = moonbitlang$core$random$internal$random_source$$ChaCha8$next(self);
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _x = _Some;
      return _x;
    }
    moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self);
    continue;
  }
}
function moonbitlang$core$random$$chacha8(seed) {
  return { self: moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed), method_0: moonbitlang$core$random$$Source$next$16$ };
}
function moonbitlang$core$random$$Rand$new(generator) {
  if (generator === undefined) {
    return moonbitlang$core$random$$chacha8($bytes_literal$0);
  } else {
    const _Some = generator;
    const _gen = _Some;
    return _gen;
  }
}
function moonbitlang$core$random$$Rand$next(self) {
  const _s = self;
  return _s.method_0(_s.self);
}
function moonbitlang$core$random$$umul128(a, b) {
  const aLo = moonbitlang$core$builtin$$BitAnd$land$11$(a, $4294967295L);
  const aHi = moonbitlang$core$builtin$$Shr$op_shr$11$(a, 32);
  const bLo = moonbitlang$core$builtin$$BitAnd$land$11$(b, $4294967295L);
  const bHi = moonbitlang$core$builtin$$Shr$op_shr$11$(b, 32);
  const x = moonbitlang$core$builtin$$Mul$op_mul$11$(aLo, bLo);
  const y = moonbitlang$core$builtin$$Add$op_add$11$(moonbitlang$core$builtin$$Mul$op_mul$11$(aHi, bLo), moonbitlang$core$builtin$$Shr$op_shr$11$(x, 32));
  const z = moonbitlang$core$builtin$$Add$op_add$11$(moonbitlang$core$builtin$$Mul$op_mul$11$(aLo, bHi), moonbitlang$core$builtin$$BitAnd$land$11$(y, $4294967295L));
  const w = moonbitlang$core$builtin$$Add$op_add$11$(moonbitlang$core$builtin$$Add$op_add$11$(moonbitlang$core$builtin$$Mul$op_mul$11$(aHi, bHi), moonbitlang$core$builtin$$Shr$op_shr$11$(y, 32)), moonbitlang$core$builtin$$Shr$op_shr$11$(z, 32));
  moonbitlang$core$random$$gUInt128.hi = w;
  moonbitlang$core$random$$gUInt128.lo = moonbitlang$core$builtin$$Mul$op_mul$11$(a, b);
}
function moonbitlang$core$random$$Rand$uint64(self, limit) {
  if (moonbitlang$core$builtin$$Eq$op_equal$11$(limit, $0L)) {
    return moonbitlang$core$random$$Rand$next(self);
  } else {
    if (moonbitlang$core$builtin$$Eq$op_equal$11$(moonbitlang$core$builtin$$BitAnd$land$11$(limit, moonbitlang$core$builtin$$Sub$op_sub$11$(limit, $1L)), $0L)) {
      return moonbitlang$core$builtin$$BitAnd$land$11$(moonbitlang$core$random$$Rand$next(self), moonbitlang$core$builtin$$Sub$op_sub$11$(limit, $1L));
    }
  }
  moonbitlang$core$random$$umul128(moonbitlang$core$random$$Rand$next(self), limit);
  if (moonbitlang$core$builtin$$op_lt$11$(moonbitlang$core$random$$gUInt128.lo, limit)) {
    const thresh = moonbitlang$core$builtin$$Mod$op_mod$11$(moonbitlang$core$uint64$$UInt64$lnot(limit), limit);
    while (true) {
      if (moonbitlang$core$builtin$$op_lt$11$(moonbitlang$core$random$$gUInt128.lo, thresh)) {
        moonbitlang$core$random$$umul128(moonbitlang$core$random$$Rand$next(self), limit);
        continue;
      } else {
        break;
      }
    }
  }
  return moonbitlang$core$random$$gUInt128.hi;
}
function moonbitlang$core$random$$Rand$uint(self, limit) {
  if (limit === 0) {
    return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$random$$Rand$next(self));
  }
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$random$$Rand$uint64(self, moonbitlang$core$uint$$UInt$to_uint64(limit)));
}
function moonbitlang$core$random$$Rand$int(self, limit) {
  return limit === 0 ? moonbitlang$core$uint64$$UInt64$to_int(moonbitlang$core$builtin$$Shr$op_shr$11$(moonbitlang$core$random$$Rand$next(self), 33)) : moonbitlang$core$random$$Rand$uint(self, limit);
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
  const seed$2 = moonbitlang$core$array$$FixedArray$makei$7$(8, (i) => moonbitlang$core$bytes$$View$to_uint_le(moonbitlang$core$bytes$$Bytes$op_as_view(seed, Math.imul(i, 4) | 0, (Math.imul(i, 4) | 0) + 4 | 0)));
  const buffer = $make_array_len_and_init(64, 0);
  moonbitlang$core$random$internal$random_source$$chacha_block(seed$2, buffer, 0);
  const _bind = 32;
  return { buffer: buffer, seed: seed$2, i: 0, n: _bind, counter: 0 };
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
  return moonbitlang$core$builtin$$BitOr$lor$11$(moonbitlang$core$builtin$$Shl$op_shl$11$(hi, 32), lo);
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self) {
  self.counter = (self.counter >>> 0) + (4 >>> 0) | 0;
  if (self.counter === 16) {
    moonbitlang$core$array$$FixedArray$blit_to$13$(self.buffer, self.seed, 8, 56, 0);
    self.counter = 0;
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, self.buffer, self.counter);
  self.i = 0;
  self.n = self.counter === 12 ? 28 : 32;
}
function rami3l$js$45$ffi$js$$Union3$from0$17$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$18$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$12$(self);
}
function rami3l$js$45$ffi$js$$Optional$undefined$19$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$20$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$is_null$21$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$is_null$22$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$is_null$23$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$is_null$24$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$20$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$20$(self)) {
    moonbitlang$core$abort$$abort$1$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$21$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$21$(self)) {
    moonbitlang$core$abort$$abort$1$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$22$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$22$(self)) {
    moonbitlang$core$abort$$abort$1$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$23$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$23$(self)) {
    moonbitlang$core$abort$$abort$1$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$24$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$24$(self)) {
    moonbitlang$core$abort$$abort$1$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$12$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$0$(self) : Option$None$0$;
}
function rami3l$js$45$ffi$js$$Cast$into$12$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$12$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$max_width$46$default() {
  return rami3l$js$45$ffi$js$$Optional$undefined$19$();
}
function moonbitlang$core$builtin$$Default$default$0$() {
  return { space: false, escape: false, left: false, right: false, down: false, up: false };
}
function username$hello$game$$Pile$new() {
  return moonbitlang$core$array$$Array$makei$5$(20, (_discard_) => moonbitlang$core$array$$Array$make$8$(10, undefined));
}
function username$hello$game$$Shape$random(random) {
  const _bind = moonbitlang$core$random$$Rand$int(random, 7);
  switch (_bind) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 2;
    }
    case 3: {
      return 3;
    }
    case 4: {
      return 4;
    }
    case 5: {
      return 5;
    }
    case 6: {
      return 6;
    }
    default: {
      return $panic();
    }
  }
}
function username$hello$game$$Sprite$random(random) {
  const shape = username$hello$game$$Shape$random(random);
  return { shape: shape, direction: 3, position: { _0: 4, _1: 1 } };
}
function username$hello$game$$Objects$new(random) {
  const sprite = username$hello$game$$Sprite$random(random);
  const pile = username$hello$game$$Pile$new();
  return { sprite: sprite, pile: pile, lines: 0 };
}
function username$hello$game$$Sprite$blocks(self) {
  const _bind = self.position;
  const _x = _bind._0;
  const _y = _bind._1;
  const _bind$2 = self.shape;
  switch (_bind$2) {
    case 0: {
      const _bind$3 = self.direction;
      switch (_bind$3) {
        case 0: {
          return [{ _0: _x + 2 | 0, _1: _y }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }];
        }
        case 1: {
          return [{ _0: _x - 2 | 0, _1: _y }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }];
        }
        case 3: {
          return [{ _0: _x, _1: _y + 2 | 0 }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
        default: {
          return [{ _0: _x, _1: _y - 2 | 0 }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
      }
    }
    case 1: {
      const _bind$4 = self.direction;
      switch (_bind$4) {
        case 3: {
          return [{ _0: _x - 1 | 0, _1: _y + 1 | 0 }, { _0: _x, _1: _y + 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y - 1 | 0 }];
        }
        case 2: {
          return [{ _0: _x + 1 | 0, _1: _y - 1 | 0 }, { _0: _x, _1: _y + 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y - 1 | 0 }];
        }
        case 1: {
          return [{ _0: _x - 1 | 0, _1: _y - 1 | 0 }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x - 1 | 0, _1: _y }];
        }
        default: {
          return [{ _0: _x + 1 | 0, _1: _y + 1 | 0 }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x - 1 | 0, _1: _y }];
        }
      }
    }
    case 2: {
      const _bind$5 = self.direction;
      switch (_bind$5) {
        case 3: {
          return [{ _0: _x + 1 | 0, _1: _y + 1 | 0 }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
        case 2: {
          return [{ _0: _x - 1 | 0, _1: _y - 1 | 0 }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
        case 1: {
          return [{ _0: _x - 1 | 0, _1: _y + 1 | 0 }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }];
        }
        default: {
          return [{ _0: _x + 1 | 0, _1: _y - 1 | 0 }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }];
        }
      }
    }
    case 3: {
      const _bind$6 = self.direction;
      switch (_bind$6) {
        case 3: {
          return [{ _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y + 1 | 0 }, { _0: _x + 1 | 0, _1: _y + 1 | 0 }];
        }
        case 2: {
          return [{ _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x + 1 | 0, _1: _y - 1 | 0 }];
        }
        case 1: {
          return [{ _0: _x, _1: _y }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y + 1 | 0 }, { _0: _x - 1 | 0, _1: _y + 1 | 0 }];
        }
        default: {
          return [{ _0: _x, _1: _y }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x - 1 | 0, _1: _y - 1 | 0 }];
        }
      }
    }
    case 5: {
      const _bind$7 = self.direction;
      switch (_bind$7) {
        case 3: {
          return [{ _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y - 1 | 0 }];
        }
        case 2: {
          return [{ _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
        case 0: {
          return [{ _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
        default: {
          return [{ _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
      }
    }
    case 4: {
      const _bind$8 = self.direction;
      switch (_bind$8) {
        case 3: {
          return [{ _0: _x - 1 | 0, _1: _y + 1 | 0 }, { _0: _x, _1: _y + 1 | 0 }, { _0: _x, _1: _y }, { _0: _x + 1 | 0, _1: _y }];
        }
        case 2: {
          return [{ _0: _x + 1 | 0, _1: _y - 1 | 0 }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x, _1: _y }, { _0: _x - 1 | 0, _1: _y }];
        }
        case 1: {
          return [{ _0: _x - 1 | 0, _1: _y - 1 | 0 }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
        default: {
          return [{ _0: _x + 1 | 0, _1: _y + 1 | 0 }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x, _1: _y - 1 | 0 }];
        }
      }
    }
    default: {
      const _bind$9 = self.direction;
      switch (_bind$9) {
        case 3: {
          return [{ _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }, { _0: _x + 1 | 0, _1: _y + 1 | 0 }];
        }
        case 2: {
          return [{ _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x, _1: _y - 1 | 0 }, { _0: _x - 1 | 0, _1: _y - 1 | 0 }];
        }
        case 1: {
          return [{ _0: _x - 1 | 0, _1: _y + 1 | 0 }, { _0: _x - 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x, _1: _y - 1 | 0 }];
        }
        default: {
          return [{ _0: _x + 1 | 0, _1: _y - 1 | 0 }, { _0: _x + 1 | 0, _1: _y }, { _0: _x, _1: _y }, { _0: _x, _1: _y + 1 | 0 }];
        }
      }
    }
  }
}
function username$hello$game$$Pile$add(pile, sprite) {
  const blocks = username$hello$game$$Sprite$blocks(sprite);
  const _p = new Array(pile.length);
  const _p$2 = pile.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = pile[_p$3];
      const _hole59 = _p$4;
      _p[_p$3] = moonbitlang$core$array$$Array$copy$8$(_hole59);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const new_piles = _p;
  const _len = blocks.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const block = blocks[_i];
      const _x = block._0;
      const _y = block._1;
      moonbitlang$core$array$$Array$op_set$8$(moonbitlang$core$array$$Array$op_get$6$(new_piles, (20 - _y | 0) - 1 | 0), _x, sprite.shape);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new_piles;
}
function username$hello$game$$Pile$collide(pile, sprite) {
  const blocks = username$hello$game$$Sprite$blocks(sprite);
  const _len = blocks.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const block = blocks[_i];
      const _x = block._0;
      const _y = block._1;
      if (_x < 0 || (_x >= 10 || (_y < 0 || _y >= 20))) {
        return true;
      }
      const _bind = moonbitlang$core$array$$Array$op_get$8$(moonbitlang$core$array$$Array$op_get$6$(pile, (20 - _y | 0) - 1 | 0), _x);
      if (_bind === undefined) {
      } else {
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
function username$hello$game$$Pile$filter(pile) {
  const counter = { val: 0 };
  const new_piles = moonbitlang$core$array$$Array$filter_map$9$(pile, (row) => {
    if (moonbitlang$core$builtin$$Iter$any$8$(moonbitlang$core$array$$Array$iter$8$(row), (p) => p === undefined)) {
      return new Option$Some$1$(row);
    } else {
      counter.val = counter.val + 1 | 0;
      return Option$None$1$;
    }
  });
  const _end43 = counter.val;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _end43) {
      moonbitlang$core$array$$Array$push$6$(new_piles, moonbitlang$core$array$$Array$make$8$(10, undefined));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: new_piles, _1: counter.val };
}
function username$hello$game$$Direction$next(self) {
  switch (self) {
    case 0: {
      return 3;
    }
    case 3: {
      return 1;
    }
    case 1: {
      return 2;
    }
    default: {
      return 0;
    }
  }
}
function username$hello$game$$Sprite$next(self, order) {
  const _bind = self.position;
  const _x = _bind._0;
  const _y = _bind._1;
  switch (order) {
    case 0: {
      return { shape: self.shape, direction: self.direction, position: { _0: _x - 1 | 0, _1: _y } };
    }
    case 1: {
      return { shape: self.shape, direction: self.direction, position: { _0: _x + 1 | 0, _1: _y } };
    }
    case 2: {
      return { shape: self.shape, direction: self.direction, position: { _0: _x, _1: _y + 1 | 0 } };
    }
    default: {
      return { shape: self.shape, direction: username$hello$game$$Direction$next(self.direction), position: self.position };
    }
  }
}
function username$hello$game$$Objects$on_input(self, key, random) {
  let sprite = self.sprite;
  if (key.up) {
    const new_sprite = username$hello$game$$Sprite$next(sprite, 3);
    if (!username$hello$game$$Pile$collide(self.pile, new_sprite)) {
      sprite = new_sprite;
    }
  }
  const new_sprite = key.left ? username$hello$game$$Sprite$next(sprite, 0) : key.right ? username$hello$game$$Sprite$next(sprite, 1) : sprite;
  if (!username$hello$game$$Pile$collide(self.pile, new_sprite)) {
    sprite = new_sprite;
  }
  if (key.down) {
    const new_sprite$2 = username$hello$game$$Sprite$next(sprite, 2);
    if (!username$hello$game$$Pile$collide(self.pile, new_sprite$2)) {
      return { sprite: new_sprite$2, pile: self.pile, lines: self.lines };
    } else {
      const _bind = username$hello$game$$Pile$filter(username$hello$game$$Pile$add(self.pile, sprite));
      const _new_pile = _bind._0;
      const _lines = _bind._1;
      const sprite$2 = username$hello$game$$Sprite$random(random);
      return username$hello$game$$Pile$collide(_new_pile, sprite$2) ? undefined : { sprite: sprite$2, pile: _new_pile, lines: self.lines + _lines | 0 };
    }
  } else {
    return { sprite: sprite, pile: self.pile, lines: self.lines };
  }
}
function username$hello$game$$GameState$on_input(state, key, random) {
  _L: {
    _L$2: {
      switch (state.$tag) {
        case 0: {
          const _x = key.space;
          if (_x === true) {
            break _L$2;
          } else {
            break _L;
          }
        }
        case 3: {
          const _x$2 = key.space;
          if (_x$2 === true) {
            break _L$2;
          } else {
            break _L;
          }
        }
        case 1: {
          const _Running = state;
          const _objects = _Running._0;
          const _x$3 = key.escape;
          if (_x$3 === true) {
            return new $64$username$47$hello$47$game$46$GameState$Paused(_objects);
          } else {
            const _bind = username$hello$game$$Objects$on_input(_objects, key, random);
            if (_bind === undefined) {
              return $64$username$47$hello$47$game$46$GameState$GameOver;
            } else {
              const _Some = _bind;
              const _new_objects = _Some;
              return new $64$username$47$hello$47$game$46$GameState$Running(_new_objects);
            }
          }
        }
        default: {
          const _Paused = state;
          const _objects$2 = _Paused._0;
          const _x$4 = key.escape;
          if (_x$4 === true) {
            return new $64$username$47$hello$47$game$46$GameState$Running(_objects$2);
          } else {
            break _L;
          }
        }
      }
    }
    return new $64$username$47$hello$47$game$46$GameState$Running(username$hello$game$$Objects$new(random));
  }
  return state;
}
function username$hello$game$$Objects$step(self, random) {
  const sprite = self.sprite;
  const new_sprite = username$hello$game$$Sprite$next(sprite, 2);
  if (!username$hello$game$$Pile$collide(self.pile, new_sprite)) {
    return { sprite: new_sprite, pile: self.pile, lines: self.lines };
  } else {
    const _bind = username$hello$game$$Pile$filter(username$hello$game$$Pile$add(self.pile, sprite));
    const _new_pile = _bind._0;
    const _lines = _bind._1;
    const sprite$2 = username$hello$game$$Sprite$random(random);
    return username$hello$game$$Pile$collide(_new_pile, sprite$2) ? undefined : { sprite: sprite$2, pile: _new_pile, lines: self.lines + _lines | 0 };
  }
}
function username$hello$game$$GameState$on_tick(state, random) {
  if (state.$tag === 1) {
    const _Running = state;
    const _objects = _Running._0;
    const _bind = username$hello$game$$Objects$step(_objects, random);
    if (_bind === undefined) {
      return $64$username$47$hello$47$game$46$GameState$GameOver;
    } else {
      const _Some = _bind;
      const _new_objects = _Some;
      return new $64$username$47$hello$47$game$46$GameState$Running(_new_objects);
    }
  } else {
    return state;
  }
}
function username$hello$game$$Shape$render(self, canvas, x, y) {
  let color;
  switch (self) {
    case 0: {
      color = "cyan";
      break;
    }
    case 1: {
      color = "blue";
      break;
    }
    case 2: {
      color = "orange";
      break;
    }
    case 3: {
      color = "yellow";
      break;
    }
    case 4: {
      color = "green";
      break;
    }
    case 5: {
      color = "purple";
      break;
    }
    default: {
      color = "red";
    }
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(canvas, rami3l$js$45$ffi$js$$Union3$from0$17$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(canvas, x + 0, y + 0, 1, 1);
}
function username$hello$game$$Pile$render(pile, canvas) {
  const _arr = pile;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const array = _arr[_i];
      const y = (20 - _i | 0) - 1 | 0;
      const _len$2 = array.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const shape = array[_i$2];
          if (shape === undefined) {
          } else {
            const _Some = shape;
            const _shape = _Some;
            username$hello$game$$Shape$render(_shape, canvas, _i$2, y);
          }
          _tmp$2 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function username$hello$game$$Sprite$render(self, canvas) {
  const blocks = username$hello$game$$Sprite$blocks(self);
  const _len = blocks.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const block = blocks[_i];
      const _x = block._0;
      const _y = block._1;
      username$hello$game$$Shape$render(self.shape, canvas, _x, _y);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function username$hello$game$$Objects$render(self, context) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect(context, 0, 0, 10 + 0, 20 + 0);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  username$hello$game$$Sprite$render(self.sprite, context);
  username$hello$game$$Pile$render(self.pile, context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function username$hello$game$$GameState$render(state, context) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(context, "0.7px sans-serif");
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect(context, 0, 0, 10 + 0, 20 + 0);
  switch (state.$tag) {
    case 0: {
      Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, "Press Space to start", (10 + 0) / 4, (20 + 0) / 2, Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$max_width$46$default());
      return;
    }
    case 1: {
      const _Running = state;
      const _objects = _Running._0;
      username$hello$game$$Objects$render(_objects, context);
      return;
    }
    case 2: {
      Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, "Game is paused", (10 + 0) / 4, (20 + 0) / 2, Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$max_width$46$default());
      return;
    }
    default: {
      Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, "Game Over", (10 + 0) / 4, (20 + 0) / 2, Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$max_width$46$default());
      return;
    }
  }
}
(() => {
  Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener(Yoorkin$rabbit$45$tea$dom$$Window$to_event_target(Yoorkin$rabbit$45$tea$dom$$window()), "keydown", (event) => {
    const keyboard_event = rami3l$js$45$ffi$js$$Nullable$unwrap$20$(Yoorkin$rabbit$45$tea$dom$$UIEvent$to_keyboard_event(rami3l$js$45$ffi$js$$Nullable$unwrap$21$(Yoorkin$rabbit$45$tea$dom$$Event$to_ui_event(event))));
    const _bind = Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event);
    switch (_bind) {
      case "Escape": {
        username$hello$main$$keys.escape = true;
        return;
      }
      case "Space": {
        username$hello$main$$keys.space = true;
        return;
      }
      case "ArrowUp": {
        username$hello$main$$keys.up = true;
        return;
      }
      case "ArrowDown": {
        username$hello$main$$keys.down = true;
        return;
      }
      case "ArrowLeft": {
        username$hello$main$$keys.left = true;
        return;
      }
      case "ArrowRight": {
        username$hello$main$$keys.right = true;
        return;
      }
      default: {
        return;
      }
    }
  });
  Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener(Yoorkin$rabbit$45$tea$dom$$Window$to_event_target(Yoorkin$rabbit$45$tea$dom$$window()), "keyup", (event) => {
    const keyboard_event = rami3l$js$45$ffi$js$$Nullable$unwrap$20$(Yoorkin$rabbit$45$tea$dom$$UIEvent$to_keyboard_event(rami3l$js$45$ffi$js$$Nullable$unwrap$21$(Yoorkin$rabbit$45$tea$dom$$Event$to_ui_event(event))));
    const _bind = Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event);
    switch (_bind) {
      case "ArrowDown": {
        username$hello$main$$keys.down = false;
        return;
      }
      case "ArrowLeft": {
        username$hello$main$$keys.left = false;
        return;
      }
      case "ArrowRight": {
        username$hello$main$$keys.right = false;
        return;
      }
      default: {
        return;
      }
    }
  });
  const canvas = rami3l$js$45$ffi$js$$Nullable$unwrap$22$(Yoorkin$rabbit$45$tea$dom$$HTMLElement$to_html_canvas_element(rami3l$js$45$ffi$js$$Nullable$unwrap$23$(Yoorkin$rabbit$45$tea$dom$$Element$to_html_element(rami3l$js$45$ffi$js$$Nullable$unwrap$24$(Yoorkin$rabbit$45$tea$dom$$Document$query_selector(Yoorkin$rabbit$45$tea$dom$$document(), "#canvas"))))));
  const context = moonbitlang$core$option$$Option$unwrap$12$(rami3l$js$45$ffi$js$$Union5$to0$18$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale(context, 20, 20);
  const tick = (time) => {
    if (time - username$hello$main$$last_time.val >= 50) {
      username$hello$main$$last_time.val = time;
      username$hello$main$$state.val = username$hello$game$$GameState$on_input(username$hello$main$$state.val, username$hello$main$$keys, username$hello$main$$random);
      username$hello$main$$keys.escape = false;
      username$hello$main$$keys.space = false;
      username$hello$main$$keys.up = false;
      if (time - username$hello$main$$last_tick.val >= 1000) {
        username$hello$main$$last_tick.val = time;
        username$hello$main$$state.val = username$hello$game$$GameState$on_tick(username$hello$main$$state.val, username$hello$main$$random);
      }
      username$hello$game$$GameState$render(username$hello$main$$state.val, context);
    }
    Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Yoorkin$rabbit$45$tea$dom$$window(), tick);
  };
  Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Yoorkin$rabbit$45$tea$dom$$window(), tick);
})();
