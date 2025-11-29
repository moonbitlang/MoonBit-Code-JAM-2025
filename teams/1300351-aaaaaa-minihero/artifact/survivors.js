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
const $64$moonbitlang$47$core$47$list$46$List$Empty$2$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$list$46$List$More$2$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$2$.prototype.$tag = 1;
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const $4294967295L = { hi: 0, lo: -1 };
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54]);
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
const moonbitlang$core$builtin$$JSArray$splice = (arr, idx, cnt) => arr.splice(idx, cnt);
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const moonbitlang$core$array$$JSArray$copy = (arr) => arr.slice(0);
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
const Milky2018$selene$backend$$load_font_async = (font, path) => {
   const ff = new FontFace(font, 'url(' + path + ')');
   ff.load().then(loadedFont => {
     document.fonts.add(loadedFont);
   })
 };
const Option$None$9$ = { $tag: 0 };
function Option$Some$9$(param0) {
  this._0 = param0;
}
Option$Some$9$.prototype.$tag = 1;
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
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
function $64$Milky2018$47$selene$47$style$46$SizePlan$Sized(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$style$46$SizePlan$Sized.prototype.$tag = 0;
const $64$Milky2018$47$selene$47$style$46$SizePlan$FromSprite = { $tag: 1 };
const nopublish$survivors$$log = (s) => (function(){
  function isXn(str, pat)  {
          if (str == pat) {
              return str + "x2";
          }
          let items = str.split("x");
          let istr = items[items.length - 1];
          items.pop();
          let joinstr = items.join("x");
          if (joinstr == pat) {
              return joinstr + "x" + (Number(istr) + 1);
          } else {
              return null;
          }
  }
  let p = document.createElement("p");
  p.innerText = s;
  if (logBoard.childElementCount > 0) {
    let dupStr = isXn(logBoard.children[0].innerText, s);
    if (dupStr == null) {
      logBoard.insertBefore(p, logBoard.children[0]);
    } else {  logBoard.children[0].innerText = dupStr;}
  } else {
    logBoard.appendChild(p);
  }
  if (logBoard.childElementCount > 30) {
    logBoard.removeChild(logBoard.childNodes[logBoard.childElementCount - 1]);
  }
  return
})();
function $compare_float(a, b) {
  return (a >= b) - (a <= b);
}
const nopublish$survivors$$btn_input = () => (function(){
  let s = keyObj.btn;
  keyObj.btn = "";
  return s
})();
const nopublish$survivors$$btn_input_idx = () => (function(){
  return keyObj.idx
})();
const nopublish$survivors$$btn_input_x = () => (function(){
  return keyObj.x
})();
const nopublish$survivors$$btn_input_y = () => (function(){
  return keyObj.y
})();
const nopublish$survivors$$aiBoardLog = (s) => (function(){
  if (s.length == 0) return;
  s = s.replace("\\n", "\n");
  let p = document.createElement("pre");
  p.innerText = s;
  if (aiBoard.childElementCount > 0) {
    aiBoard.insertBefore(p, aiBoard.children[0])
  } else {
    aiBoard.appendChild(p)

  }
  if (aiBoard.childElementCount > 50) {
    aiBoard.removeChild(aiBoard.childNodes[aiBoard.childElementCount - 1]) 
  }
  return
})();
const nopublish$survivors$$strategy = (observeStr, raw) => (function(){
  return observe_and_act(observeStr, raw)
})();
const Milky2018$selene$inputs$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$inputs$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$inputs$$all_codes$46$42$bind$47$3362 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const Milky2018$selene$inputs$$from_string$46$constr$47$3372 = 0;
const Milky2018$selene$inputs$$from_string$46$constr$47$3373 = 1;
const Milky2018$selene$inputs$$from_string$46$constr$47$3374 = 2;
const Milky2018$selene$inputs$$from_string$46$constr$47$3375 = 3;
const Milky2018$selene$inputs$$from_string$46$constr$47$3376 = 4;
const Milky2018$selene$inputs$$from_string$46$constr$47$3377 = 5;
const Milky2018$selene$inputs$$from_string$46$constr$47$3378 = 6;
const Milky2018$selene$inputs$$from_string$46$constr$47$3379 = 7;
const Milky2018$selene$inputs$$from_string$46$constr$47$3380 = 8;
const Milky2018$selene$inputs$$from_string$46$constr$47$3381 = 9;
const Milky2018$selene$inputs$$from_string$46$constr$47$3382 = 10;
const Milky2018$selene$inputs$$from_string$46$constr$47$3383 = 11;
const Milky2018$selene$inputs$$from_string$46$constr$47$3384 = 12;
const Milky2018$selene$inputs$$from_string$46$constr$47$3385 = 13;
const Milky2018$selene$inputs$$from_string$46$constr$47$3386 = 14;
const Milky2018$selene$inputs$$from_string$46$constr$47$3387 = 15;
const Milky2018$selene$inputs$$from_string$46$constr$47$3388 = 16;
const Milky2018$selene$inputs$$from_string$46$constr$47$3389 = 17;
const Milky2018$selene$inputs$$from_string$46$constr$47$3390 = 18;
const Milky2018$selene$inputs$$from_string$46$constr$47$3391 = 19;
const Milky2018$selene$inputs$$from_string$46$constr$47$3392 = 20;
const Milky2018$selene$inputs$$from_string$46$constr$47$3393 = 21;
const Milky2018$selene$inputs$$from_string$46$constr$47$3394 = 22;
const Milky2018$selene$inputs$$from_string$46$constr$47$3395 = 23;
const Milky2018$selene$inputs$$from_string$46$constr$47$3396 = 24;
const Milky2018$selene$inputs$$from_string$46$constr$47$3397 = 26;
const Milky2018$selene$inputs$$from_string$46$constr$47$3398 = 27;
const Milky2018$selene$inputs$$from_string$46$constr$47$3399 = 28;
const Milky2018$selene$inputs$$from_string$46$constr$47$3400 = 29;
const Milky2018$selene$inputs$$from_string$46$constr$47$3401 = 30;
const Milky2018$selene$inputs$$from_string$46$constr$47$3402 = 31;
const Milky2018$selene$inputs$$from_string$46$constr$47$3403 = 32;
const Milky2018$selene$entity$$entity_generator = { val: 0 };
const Milky2018$selene$plugins$$default_plugin$46$constr$47$4277 = new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0);
const nopublish$survivors$$new$46$42$bind$124$1235 = "";
const nopublish$survivors$$world$46$constr$47$4280 = new Option$Some$0$(90);
const nopublish$survivors$$world$46$constr$47$4281 = new Option$Some$0$(130);
const nopublish$survivors$$world$46$constr$47$4282 = new Option$Some$0$(0);
const nopublish$survivors$$world$46$constr$47$4283 = new Option$Some$0$(20);
const nopublish$survivors$$world$46$constr$47$4284 = new Option$Some$0$(0);
const nopublish$survivors$$world$46$constr$47$4285 = new Option$Some$0$(20);
const nopublish$survivors$$world$46$constr$47$4286 = new Option$Some$0$(0);
const nopublish$survivors$$world$46$constr$47$4287 = new Option$Some$0$(20);
const nopublish$survivors$$buildDescs$46$42$bind$124$1405 = "";
const nopublish$survivors$$buildDescs$46$42$bind$124$1407 = "空";
const nopublish$survivors$$buildDescs$46$42$bind$124$1416 = "";
const nopublish$survivors$$buildDescs$46$42$bind$124$1418 = "田地";
const nopublish$survivors$$buildDescs$46$42$bind$124$1427 = "农民";
const nopublish$survivors$$buildDescs$46$42$bind$124$1429 = "民居";
const nopublish$survivors$$buildDescs$46$42$bind$124$1438 = "";
const nopublish$survivors$$buildDescs$46$42$bind$124$1440 = "公寓";
const nopublish$survivors$$buildDescs$46$42$bind$124$1449 = "工人";
const nopublish$survivors$$buildDescs$46$42$bind$124$1451 = "工坊";
const nopublish$survivors$$buildDescs$46$42$bind$124$1460 = "";
const nopublish$survivors$$buildDescs$46$42$bind$124$1462 = "魔物巢穴";
const nopublish$survivors$$buildDescs$46$42$bind$124$1471 = "";
const nopublish$survivors$$buildDescs$46$42$bind$124$1473 = "宝箱";
const nopublish$survivors$$buildDescs$46$42$bind$124$1482 = "管理人员";
const nopublish$survivors$$buildDescs$46$42$bind$124$1484 = "市政厅";
const nopublish$survivors$$buildDescs$46$42$bind$124$1493 = "铁匠";
const nopublish$survivors$$buildDescs$46$42$bind$124$1495 = "铁匠铺";
const nopublish$survivors$$buildDescs$46$42$bind$124$1504 = "酒保";
const nopublish$survivors$$buildDescs$46$42$bind$124$1506 = "酒馆";
const nopublish$survivors$$buildDescs$46$42$bind$124$1515 = "研究员";
const nopublish$survivors$$buildDescs$46$42$bind$124$1517 = "研究所";
const nopublish$survivors$$buildDescs$46$42$bind$124$1526 = "募兵员";
const nopublish$survivors$$buildDescs$46$42$bind$124$1528 = "募兵所";
const nopublish$survivors$$buildDescs$46$42$bind$124$1537 = "步兵";
const nopublish$survivors$$buildDescs$46$42$bind$124$1539 = "步兵兵营";
const nopublish$survivors$$buildDescs$46$42$bind$124$1548 = "弓兵";
const nopublish$survivors$$buildDescs$46$42$bind$124$1550 = "弓兵兵营";
const nopublish$survivors$$buildDescs$46$42$bind$124$1559 = "攻城兵";
const nopublish$survivors$$buildDescs$46$42$bind$124$1561 = "攻城兵兵营";
const nopublish$survivors$$buildDescs$46$42$bind$124$1570 = "商户";
const nopublish$survivors$$buildDescs$46$42$bind$124$1572 = "商铺";
const nopublish$survivors$$buildDescs$46$42$bind$124$1581 = "建筑工";
const nopublish$survivors$$buildDescs$46$42$bind$124$1583 = "城墙";
const nopublish$survivors$$lordChosenBuildings = [7, 2, 1, 8, 9, 11, 12, 13, 14, 15, 16];
const nopublish$survivors$$emptySprite$46$constr$47$4340 = "white";
const nopublish$survivors$$emptySprite$46$constr$47$4341 = "16px ThaleahFat";
const nopublish$survivors$$terrainPass = [true, true, true, false];
const nopublish$survivors$$nearPoses = [[-1, 0], [1, 0], [0, 1], [0, -1]];
const nopublish$survivors$$barbarian_nums = [5, 4, 3, 3, 2, 1];
const nopublish$survivors$$barbarian_rates = [0.12, 0.11, 0.1, 0.09, 0.07, 0.05];
const nopublish$survivors$$rnd_move_pairs = [{ _0: 1, _1: 0 }, { _0: 0, _1: 1 }, { _0: -1, _1: 0 }, { _0: 0, _1: -1 }];
const nopublish$survivors$$rndLordChosenBuildings = [7, 2, 1, 8, 9, 11, 12, 13, 14, 15, 16];
const nopublish$survivors$$entity_from$46$constr$47$4491 = new Option$Some$0$(0);
const nopublish$survivors$$entity_from$46$constr$47$4492 = new Option$Some$0$(0);
const nopublish$survivors$$renderHoverRole$46$constr$47$4539 = true;
const nopublish$survivors$$renderHoverRole$46$constr$47$4540 = "8px ThaleahFat";
const nopublish$survivors$$renderHoverRole$46$constr$47$4541 = "8px ThaleahFat";
const nopublish$survivors$$role_entity_from_pool$46$constr$47$5062 = new Option$Some$0$(0);
const nopublish$survivors$$role_entity_from_pool$46$constr$47$5063 = new Option$Some$0$(0);
const nopublish$survivors$$heroAddClick$46$constr$47$5111 = true;
const nopublish$survivors$$game_start1$46$constr$47$5463 = new Option$Some$0$(0);
const nopublish$survivors$$game_start1$46$constr$47$5464 = new Option$Some$0$(640);
const nopublish$survivors$$game_start1$46$constr$47$5465 = new Option$Some$0$(0);
const nopublish$survivors$$game_start1$46$constr$47$5466 = new Option$Some$0$(640);
const nopublish$survivors$$game_start1$46$constr$47$5467 = new Option$Some$0$(0);
const nopublish$survivors$$game_start1$46$constr$47$5468 = new Option$Some$0$(12);
const nopublish$survivors$$game_start1$46$constr$47$5469 = new Option$Some$0$(50);
const nopublish$survivors$$game_start1$46$constr$47$5470 = new Option$Some$0$(12);
const nopublish$survivors$$game_start1$46$constr$47$5471 = "white";
const nopublish$survivors$$game_start1$46$constr$47$5472 = "16px ThaleahFat";
const nopublish$survivors$$step$46$constr$47$5679 = true;
const nopublish$survivors$$game_update_system1$46$constr$47$5836 = "8px ThaleahFat";
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const Milky2018$selene$style$$styles = moonbitlang$core$builtin$$Map$new$46$inner$0$(8);
const Milky2018$selene$entity$$all_entities = moonbitlang$core$set$$Set$new$46$inner$1$(8);
const Milky2018$selene$style$$screen_root = Milky2018$selene$entity$$Entity$new();
const Milky2018$selene$backend$$canvas_backend = Milky2018$selene$backend$$CanvasBackend$new();
const Milky2018$selene$position$$positions = moonbitlang$core$builtin$$Map$new$46$inner$2$(8);
const Milky2018$selene$ui$$uis = moonbitlang$core$builtin$$Map$new$46$inner$3$(8);
const Milky2018$selene$inputs$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$backend$$window = Yoorkin$rabbit$45$tea$dom$$window();
const Milky2018$selene$backend$$realtime_delta = moonbitlang$core$ref$$Ref$new$5$(0);
const Milky2018$selene$entity$$parents = moonbitlang$core$builtin$$Map$new$46$inner$6$(8);
const Milky2018$selene$entity$$children = moonbitlang$core$builtin$$Map$new$46$inner$7$(8);
const _bind = { _0: 0, _1: 0 };
const _bind$2 = Option$None$0$;
const _bind$3 = Option$None$0$;
const _bind$4 = Option$None$0$;
const _bind$5 = Option$None$0$;
const _bind$6 = undefined;
const _bind$7 = { _0: 0, _1: 0 };
const Milky2018$selene$camera$$camera = { position: _bind, limit_top: _bind$4, limit_bottom: _bind$2, limit_left: _bind$3, limit_right: _bind$5, attached_entity: _bind$6, offset: _bind$7, follow_x: true, follow_y: true };
const Milky2018$selene$collision$$shapes = moonbitlang$core$builtin$$Map$new$46$inner$8$(8);
const Milky2018$selene$collision$$pickables = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const Milky2018$selene$collision$$quadtree_root = moonbitlang$core$ref$$Ref$new$10$(Milky2018$selene$collision$$QuadTree$new({ _0: 0, _1: 0 }, { _0: 0, _1: 0 }, 0));
const Milky2018$selene$collision$$real_velocities = moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
const Milky2018$selene$collision$$collision_infos = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const Milky2018$selene$collision$$colliders = moonbitlang$core$builtin$$Map$new$46$inner$13$(8);
const Milky2018$selene$collision$$collision_layers = moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$11$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$15$(8);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$16$(0);
const Milky2018$selene$collision$$areas = moonbitlang$core$builtin$$Map$new$46$inner$17$(8);
const Milky2018$selene$inputs$$last_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$inputs$$all_codes = moonbitlang$core$set$$Set$from_array$4$({ buf: Milky2018$selene$inputs$$all_codes$46$42$bind$47$3362, start: 0, end: 33 });
const Milky2018$selene$inputs$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$inputs$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$4$(8);
const Milky2018$selene$backend$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$18$(8);
const Milky2018$selene$system$$timers = moonbitlang$core$array$$Array$new$46$inner$19$(0);
const _bind$8 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$9 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$10 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$11 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _tmp = { tops: _bind$9, areas: _bind$10, roles: _bind$11, gold: 0, eco: 0, soldierNum: 0, popu: 0, iconId: 0, heros: _bind$8, cacheEco: 0 };
const _bind$12 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$13 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$14 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$15 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _tmp$2 = { tops: _bind$13, areas: _bind$14, roles: _bind$15, gold: 0, eco: 0, soldierNum: 0, popu: 0, iconId: 1, heros: _bind$12, cacheEco: 0 };
const _bind$16 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$17 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$18 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$19 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _tmp$3 = { tops: _bind$17, areas: _bind$18, roles: _bind$19, gold: 0, eco: 0, soldierNum: 0, popu: 0, iconId: 2, heros: _bind$16, cacheEco: 0 };
const _bind$20 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$21 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$22 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$23 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _tmp$4 = { tops: _bind$21, areas: _bind$22, roles: _bind$23, gold: 0, eco: 0, soldierNum: 0, popu: 0, iconId: 3, heros: _bind$20, cacheEco: 0 };
const _bind$24 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$25 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$26 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$27 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _tmp$5 = { tops: _bind$25, areas: _bind$26, roles: _bind$27, gold: 0, eco: 0, soldierNum: 0, popu: 0, iconId: 4, heros: _bind$24, cacheEco: 0 };
const _bind$28 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$29 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$30 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$31 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const nopublish$survivors$$nations = [_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, { tops: _bind$29, areas: _bind$30, roles: _bind$31, gold: 0, eco: 0, soldierNum: 0, popu: 0, iconId: 5, heros: _bind$28, cacheEco: 0 }];
const Milky2018$selene$sprite$$animation_generator = moonbitlang$core$ref$$Ref$new$20$(0);
const nopublish$survivors$$heroAnimation = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Champions/Arthax.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined);
const nopublish$survivors$$heroSprite = Milky2018$selene$sprite$$Sprite$from_animation(nopublish$survivors$$heroAnimation, 3, undefined);
const _bind$32 = { notNegEcoBuild: false };
const _bind$33 = undefined;
const _bind$34 = moonbitlang$core$builtin$$Map$from_array$21$([]);
const _bind$35 = [];
const _bind$36 = [];
const _bind$37 = Milky2018$selene$sprite$$Text$new$46$inner("", "gold", "8px ThaleahFat", 0, 0);
const _bind$38 = Milky2018$selene$sprite$$Text$new$46$inner("", "red", "8px ThaleahFat", 0, 0);
const _bind$39 = Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("游戏结束", "black", "30px ThaleahFat", 0, 0), zindex, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$world$46$constr$47$4280, nopublish$survivors$$world$46$constr$47$4281);
const _bind$40 = [];
const _bind$41 = Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("", "gold", "32px ThaleahFat", 0, 0), zindex, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$world$46$constr$47$4282, nopublish$survivors$$world$46$constr$47$4283);
const _bind$42 = [];
const _bind$43 = [];
const _bind$44 = [];
const _bind$45 = Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("", "gold", "32px ThaleahFat", 0, 0), zindex, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$world$46$constr$47$4284, nopublish$survivors$$world$46$constr$47$4285);
const _bind$46 = Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new$46$inner("", "gold", "32px ThaleahFat", 0, 0), zindex, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$world$46$constr$47$4286, nopublish$survivors$$world$46$constr$47$4287);
const _bind$47 = [];
const _bind$48 = nopublish$survivors$$entity_from(nopublish$survivors$$heroSprite);
const _bind$49 = nopublish$survivors$$entity_from(nopublish$survivors$$heroSprite);
const _bind$50 = nopublish$survivors$$life_gen();
const _bind$51 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$52 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
const _bind$53 = [];
const _bind$54 = { id: 0, cate: 3, ge: _bind$48, ae: _bind$49, inGlobe: true, gx: 0, gy: 0, ax: 0, ay: 0, life: _bind$50, nationId: 0, lordId: -1, isLord: false, areas: _bind$52, vassal: _bind$51, atkArea: -1, atkTarget: -1, atkBuild: -1, rcate: 0, jobBuild: -1, jobBuildCate: -1, jobGx: 0, jobGy: 0, soldiers: _bind$53, followSoldierType: -1, leaderId: -1, inTeam: false, equiped: false };
const _bind$55 = moonbitlang$core$builtin$$Map$from_array$22$([]);
const nopublish$survivors$$world = { wannaBuildCate: -1, globe: _bind$40, globePanel: _bind$41, areas: _bind$36, areaEs: _bind$43, areaPanel: _bind$45, areaBes: _bind$44, areaBuildPanel: _bind$46, player: _bind$54, totalcnt: 5, gxstart: 0, gystart: 0, lastKeyTime: 0, roleIdCnt: 1, roleMap: _bind$55, globeOccupy: _bind$42, areaOccupy: _bind$47, accTime: 0, steps: 0, travelText: _bind$37, enemyBarText: _bind$38, gameEndPanel: _bind$39, npcCnt: 0, heroCnt: 0, enemyCnt: 0, buildingIdCnt: 0, offy: 20, showAreaId: 0, inGlobe: true, roleBugInt: 3, nestCnt: 0, gmap: _bind$35, war: _bind$34, opRoot: _bind$33, aiWarn: _bind$32 };
const nopublish$survivors$$grand = moonbitlang$core$random$$Rand$new(Option$None$1$);
const nopublish$survivors$$emptySprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new("", nopublish$survivors$$emptySprite$46$constr$47$4340, nopublish$survivors$$emptySprite$46$constr$47$4341, undefined, undefined), 2, undefined);
const nopublish$survivors$$buildDescs = [{ name: nopublish$survivors$$buildDescs$46$42$bind$124$1407, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1405, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 1, ecoCost: 10, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 1 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1418, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1416, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 20, ecoCost: 20, ecoPerson: 0, foodPerson: 4, equipPerson: 0, maxPerson: 1 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1429, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1427, armyLimit: 0, popuLimit: 4, cityDefense: 0, maxLimit: 10, ecoCost: 10, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 0 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1440, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1438, armyLimit: 0, popuLimit: 8, cityDefense: 0, maxLimit: 40, ecoCost: 10, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 1 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1451, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1449, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 1, ecoCost: 50, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 1 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1462, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1460, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 100, ecoCost: 10, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 0 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1473, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1471, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 100, ecoCost: 10, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 0 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1484, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1482, armyLimit: 0, popuLimit: 2, cityDefense: 0, maxLimit: 1, ecoCost: 5, ecoPerson: 1, foodPerson: 2, equipPerson: 0, maxPerson: 5 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1495, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1493, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 4, ecoCost: 20, ecoPerson: 0, foodPerson: 0, equipPerson: 0.5, maxPerson: 2 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1506, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1504, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 1, ecoCost: 20, ecoPerson: 2, foodPerson: 0, equipPerson: 0, maxPerson: 1 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1517, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1515, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 1, ecoCost: 10, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 1 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1528, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1526, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 1, ecoCost: 15, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 0 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1539, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1537, armyLimit: 10, popuLimit: 0, cityDefense: 0, maxLimit: 10, ecoCost: 15, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 10 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1550, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1548, armyLimit: 10, popuLimit: 0, cityDefense: 0, maxLimit: 10, ecoCost: 15, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 10 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1561, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1559, armyLimit: 10, popuLimit: 0, cityDefense: 0, maxLimit: 10, ecoCost: 15, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 10 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1572, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1570, armyLimit: 0, popuLimit: 0, cityDefense: 0, maxLimit: 1, ecoCost: 50, ecoPerson: 10, foodPerson: 0, equipPerson: 0, maxPerson: 5 }, { name: nopublish$survivors$$buildDescs$46$42$bind$124$1583, jobName: nopublish$survivors$$buildDescs$46$42$bind$124$1581, armyLimit: 0, popuLimit: 0, cityDefense: 20, maxLimit: 10, ecoCost: 10, ecoPerson: 0, foodPerson: 0, equipPerson: 0, maxPerson: 0 }];
const nopublish$survivors$$redSprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 16, _1: 16 }, "red", undefined), 1, undefined);
const nopublish$survivors$$cyanSprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 16, _1: 16 }, "cyan", undefined), 1, undefined);
const nopublish$survivors$$limeSprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 16, _1: 16 }, "lime", undefined), 1, undefined);
const nopublish$survivors$$purpleSprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 16, _1: 16 }, "purple", undefined), 1, undefined);
const nopublish$survivors$$grassSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 32, _1: 0 }, 0), -1, Option$None$0$, undefined), 1, undefined);
const nopublish$survivors$$blackSprite = Milky2018$selene$sprite$$Sprite$from_color_rect(Milky2018$selene$sprite$$ColorRect$new({ _0: 16, _1: 16 }, "black", undefined), 1, undefined);
const nopublish$survivors$$gmapSprites = [nopublish$survivors$$cyanSprite, nopublish$survivors$$limeSprite, nopublish$survivors$$purpleSprite, nopublish$survivors$$redSprite, nopublish$survivors$$grassSprite, nopublish$survivors$$blackSprite];
const nopublish$survivors$$limeBlackSmithSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeResources.png", 1, 16, 16, { _0: 0, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeSummoningPlatformSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeTrainingTableSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png", 1, 16, 16, { _0: 16, _1: 64 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeWallSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$workshopSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanWorkshops.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeSiegeBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png", 1, 16, 16, { _0: 48, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeMarketSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeMarket.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeArcherBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png", 1, 16, 16, { _0: 16, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$nestSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Miscellaneous/Portal.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeHouseSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeHouses.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeApartmentSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeHouses.png", 1, 16, 16, { _0: 0, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$chestSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Miscellaneous/Chests.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeCityCoreSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeTaverns.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeInfantyBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$fieldSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Nature/Wheatfield.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$limeBuildingSprites = [nopublish$survivors$$fieldSprite, nopublish$survivors$$fieldSprite, nopublish$survivors$$limeHouseSprite, nopublish$survivors$$limeApartmentSprite, nopublish$survivors$$workshopSprite, nopublish$survivors$$nestSprite, nopublish$survivors$$chestSprite, nopublish$survivors$$limeCityCoreSprite, nopublish$survivors$$limeBlackSmithSprite, nopublish$survivors$$limeSummoningPlatformSprite, nopublish$survivors$$limeApartmentSprite, nopublish$survivors$$limeTrainingTableSprite, nopublish$survivors$$limeInfantyBarracksSprite, nopublish$survivors$$limeArcherBarracksSprite, nopublish$survivors$$limeSiegeBarracksSprite, nopublish$survivors$$limeMarketSprite, nopublish$survivors$$limeWallSprite];
const nopublish$survivors$$purpleArcherBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png", 1, 16, 16, { _0: 16, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleBlackSmithSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleResources.png", 1, 16, 16, { _0: 0, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleHouseSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleHouses.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleApartmentSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleHouses.png", 1, 16, 16, { _0: 0, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleMarketSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleMarket.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleInfantyBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleSummoningPlatformSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleTrainingTableSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png", 1, 16, 16, { _0: 16, _1: 64 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleCityCoreSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleTaverns.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleWallSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleSiegeBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png", 1, 16, 16, { _0: 48, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$purpleBuildingSprites = [nopublish$survivors$$fieldSprite, nopublish$survivors$$fieldSprite, nopublish$survivors$$purpleHouseSprite, nopublish$survivors$$purpleApartmentSprite, nopublish$survivors$$workshopSprite, nopublish$survivors$$nestSprite, nopublish$survivors$$chestSprite, nopublish$survivors$$purpleCityCoreSprite, nopublish$survivors$$purpleBlackSmithSprite, nopublish$survivors$$purpleSummoningPlatformSprite, nopublish$survivors$$purpleApartmentSprite, nopublish$survivors$$purpleTrainingTableSprite, nopublish$survivors$$purpleInfantyBarracksSprite, nopublish$survivors$$purpleArcherBarracksSprite, nopublish$survivors$$purpleSiegeBarracksSprite, nopublish$survivors$$purpleMarketSprite, nopublish$survivors$$purpleWallSprite];
const nopublish$survivors$$siegeBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png", 1, 16, 16, { _0: 48, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$archerBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png", 1, 16, 16, { _0: 16, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$apartmentSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanHouses.png", 1, 16, 16, { _0: 0, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$wallSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$summoningPlatformSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$houseSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanHouses.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$infantyBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$cityCoreSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanTaverns.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$trainingTableSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png", 1, 16, 16, { _0: 16, _1: 64 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$marketSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanMarket.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$blackSmithSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Cyan/CyanResources.png", 1, 16, 16, { _0: 0, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$buildingSprites = [nopublish$survivors$$fieldSprite, nopublish$survivors$$fieldSprite, nopublish$survivors$$houseSprite, nopublish$survivors$$apartmentSprite, nopublish$survivors$$workshopSprite, nopublish$survivors$$nestSprite, nopublish$survivors$$chestSprite, nopublish$survivors$$cityCoreSprite, nopublish$survivors$$blackSmithSprite, nopublish$survivors$$summoningPlatformSprite, nopublish$survivors$$apartmentSprite, nopublish$survivors$$trainingTableSprite, nopublish$survivors$$infantyBarracksSprite, nopublish$survivors$$archerBarracksSprite, nopublish$survivors$$siegeBarracksSprite, nopublish$survivors$$marketSprite, nopublish$survivors$$wallSprite];
const nopublish$survivors$$redTrainingTableSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png", 1, 16, 16, { _0: 16, _1: 64 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redCityCoreSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedTaverns.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redSiegeBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png", 1, 16, 16, { _0: 48, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redApartmentSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedHouses.png", 1, 16, 16, { _0: 0, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redArcherBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png", 1, 16, 16, { _0: 16, _1: 16 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redHouseSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedHouses.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redSummoningPlatformSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redWallSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedTower.png", 1, 16, 16, { _0: 0, _1: 48 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redMarketSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedMarket.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redInfantyBarracksSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redBlackSmithSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Buildings/Red/RedResources.png", 1, 16, 16, { _0: 0, _1: 32 }, 0), -1, Option$None$0$, undefined), 2, undefined);
const nopublish$survivors$$redBuildingSprites = [nopublish$survivors$$fieldSprite, nopublish$survivors$$fieldSprite, nopublish$survivors$$redHouseSprite, nopublish$survivors$$redApartmentSprite, nopublish$survivors$$workshopSprite, nopublish$survivors$$nestSprite, nopublish$survivors$$chestSprite, nopublish$survivors$$redCityCoreSprite, nopublish$survivors$$redBlackSmithSprite, nopublish$survivors$$redSummoningPlatformSprite, nopublish$survivors$$redApartmentSprite, nopublish$survivors$$redTrainingTableSprite, nopublish$survivors$$redInfantyBarracksSprite, nopublish$survivors$$redArcherBarracksSprite, nopublish$survivors$$redSiegeBarracksSprite, nopublish$survivors$$redMarketSprite, nopublish$survivors$$redWallSprite];
const nopublish$survivors$$waterSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 1, undefined);
const nopublish$survivors$$desertSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Shore.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 1, undefined);
const nopublish$survivors$$groundSprite = Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 48, _1: 0 }, 0), -1, Option$None$0$, undefined), 1, undefined);
const nopublish$survivors$$terrainSprites = [nopublish$survivors$$grassSprite, nopublish$survivors$$groundSprite, nopublish$survivors$$desertSprite, nopublish$survivors$$waterSprite];
const nopublish$survivors$$_widget_id = moonbitlang$core$ref$$Ref$new$20$(0);
const nopublish$survivors$$clickWidgets = moonbitlang$core$set$$Set$new$46$inner$23$(8);
const nopublish$survivors$$epool = moonbitlang$core$set$$Set$new$46$inner$1$(8);
const nopublish$survivors$$levelEnemySprites = [Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Slimes/Slime.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Slimes/MegaSlimeGreen.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Slimes/MegaSlimeBlue.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Orcs/ClubGoblin.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Orcs/SpearGoblin.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Orcs/OrcMage.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/GiantAnimals/GiantCrab.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Frostborn/Mammoth.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Frostborn/Wendigo.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Monsters/Frostborn/Yeti.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined)];
const nopublish$survivors$$npcSprites = [Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Workers/CyanWorker/FarmerCyan.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Workers/LimeWorker/FarmerLime.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Workers/PurpleWorker/FarmerPurple.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined), Milky2018$selene$sprite$$Sprite$from_animation(Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Characters/Workers/RedWorker/FarmerRed.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined), 3, undefined)];
const nopublish$survivors$$grass4 = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 48, _1: 0 }, 0), -1, Option$None$0$, undefined);
const nopublish$survivors$$grass1 = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 0, _1: 0 }, 0), -1, Option$None$0$, undefined);
const nopublish$survivors$$grass2 = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 16, _1: 0 }, 0), -1, Option$None$0$, undefined);
const nopublish$survivors$$grass5 = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 64, _1: 0 }, 0), -1, Option$None$0$, undefined);
const nopublish$survivors$$grass3 = Milky2018$selene$sprite$$Animation$new(Milky2018$selene$sprite$$frames_from_atlas$46$inner("assets/MiniWorldSprites/Ground/Grass.png", 1, 16, 16, { _0: 32, _1: 0 }, 0), -1, Option$None$0$, undefined);
const nopublish$survivors$$grasses = [nopublish$survivors$$grass1, nopublish$survivors$$grass2, nopublish$survivors$$grass3, nopublish$survivors$$grass4, nopublish$survivors$$grass5];
function moonbitlang$core$abort$$abort$24$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$25$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$20$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$10$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$26$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$27$(msg) {
  return $panic();
}
function moonbitlang$core$list$$List$from_array$10$(arr) {
  let _tmp$6 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$7 = $64$moonbitlang$47$core$47$list$46$List$Empty$2$;
  while (true) {
    const i = _tmp$6;
    const list = _tmp$7;
    if (i >= 0) {
      _tmp$6 = i - 1 | 0;
      _tmp$7 = new $64$moonbitlang$47$core$47$list$46$List$More$2$(moonbitlang$core$array$$ArrayView$at$10$(arr, i), list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$ref$$Ref$new$28$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$5$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$10$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$20$(x) {
  return { val: x };
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
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < 4) {
      $bound_check(buf, i);
      let b0 = buf[i];
      const _tmp$7 = 4 + i | 0;
      $bound_check(buf, _tmp$7);
      let b1 = buf[_tmp$7];
      const _tmp$8 = 8 + i | 0;
      $bound_check(buf, _tmp$8);
      let b2 = buf[_tmp$8];
      const _tmp$9 = 12 + i | 0;
      $bound_check(buf, _tmp$9);
      let b3 = buf[_tmp$9];
      const _tmp$10 = 16 + i | 0;
      $bound_check(buf, _tmp$10);
      let b4 = buf[_tmp$10];
      const _tmp$11 = 20 + i | 0;
      $bound_check(buf, _tmp$11);
      let b5 = buf[_tmp$11];
      const _tmp$12 = 24 + i | 0;
      $bound_check(buf, _tmp$12);
      let b6 = buf[_tmp$12];
      const _tmp$13 = 28 + i | 0;
      $bound_check(buf, _tmp$13);
      let b7 = buf[_tmp$13];
      const _tmp$14 = 32 + i | 0;
      $bound_check(buf, _tmp$14);
      let b8 = buf[_tmp$14];
      const _tmp$15 = 36 + i | 0;
      $bound_check(buf, _tmp$15);
      let b9 = buf[_tmp$15];
      const _tmp$16 = 40 + i | 0;
      $bound_check(buf, _tmp$16);
      let b10 = buf[_tmp$16];
      const _tmp$17 = 44 + i | 0;
      $bound_check(buf, _tmp$17);
      let b11 = buf[_tmp$17];
      const _tmp$18 = 48 + i | 0;
      $bound_check(buf, _tmp$18);
      let b12 = buf[_tmp$18];
      const _tmp$19 = 52 + i | 0;
      $bound_check(buf, _tmp$19);
      let b13 = buf[_tmp$19];
      const _tmp$20 = 56 + i | 0;
      $bound_check(buf, _tmp$20);
      let b14 = buf[_tmp$20];
      const _tmp$21 = 60 + i | 0;
      $bound_check(buf, _tmp$21);
      let b15 = buf[_tmp$21];
      let _tmp$22 = 0;
      while (true) {
        const round = _tmp$22;
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
          _tmp$22 = round + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      $bound_check(buf, i);
      buf[i] = b0;
      const _tmp$23 = 4 + i | 0;
      $bound_check(buf, _tmp$23);
      buf[_tmp$23] = b1;
      const _tmp$24 = 8 + i | 0;
      $bound_check(buf, _tmp$24);
      buf[_tmp$24] = b2;
      const _tmp$25 = 12 + i | 0;
      $bound_check(buf, _tmp$25);
      buf[_tmp$25] = b3;
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
      const _tmp$26 = 48 + i | 0;
      $bound_check(buf, _tmp$26);
      buf[_tmp$26] = b12;
      const _tmp$27 = 52 + i | 0;
      $bound_check(buf, _tmp$27);
      buf[_tmp$27] = b13;
      const _tmp$28 = 56 + i | 0;
      $bound_check(buf, _tmp$28);
      buf[_tmp$28] = b14;
      const _tmp$29 = 60 + i | 0;
      $bound_check(buf, _tmp$29);
      buf[_tmp$29] = b15;
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed) {
  const seed$2 = moonbitlang$core$array$$FixedArray$makei$29$(8, (i) => moonbitlang$core$bytes$$BytesView$to_uint_le(moonbitlang$core$bytes$$Bytes$sub$46$inner(seed, Math.imul(i, 4) | 0, (Math.imul(i, 4) | 0) + 4 | 0)));
  const buffer = $make_array_len_and_init(64, 0);
  moonbitlang$core$random$internal$random_source$$chacha_block(seed$2, buffer, 0);
  const _bind$56 = 32;
  return { buffer: buffer, seed: seed$2, i: 0, n: _bind$56, counter: 0 };
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$next(self) {
  const i = self.i;
  if (i >>> 0 >= self.n >>> 0) {
    return undefined;
  }
  self.i = (i >>> 0) + (1 >>> 0) | 0;
  const index = i & 31;
  const _tmp$6 = self.buffer;
  const _tmp$7 = Math.imul(index, 2) | 0;
  $bound_check(_tmp$6, _tmp$7);
  const lo = moonbitlang$core$uint$$UInt$to_uint64(_tmp$6[_tmp$7]);
  const _tmp$8 = self.buffer;
  const _tmp$9 = (Math.imul(index, 2) | 0) + 1 | 0;
  $bound_check(_tmp$8, _tmp$9);
  const hi = moonbitlang$core$uint$$UInt$to_uint64(_tmp$8[_tmp$9]);
  return moonbitlang$core$builtin$$BitOr$lor$30$(moonbitlang$core$builtin$$Shl$shl$30$(hi, 32), lo);
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self) {
  self.counter = (self.counter >>> 0) + (4 >>> 0) | 0;
  if (self.counter === 16) {
    moonbitlang$core$array$$FixedArray$blit_to$46$inner$31$(self.buffer, self.seed, 8, 56, 0);
    self.counter = 0;
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, self.buffer, self.counter);
  self.i = 0;
  self.n = self.counter === 12 ? 28 : 32;
}
function moonbitlang$core$random$$Source$next$32$(self) {
  while (true) {
    const _bind$56 = moonbitlang$core$random$internal$random_source$$ChaCha8$next(self);
    if (_bind$56 === undefined) {
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      return _x;
    }
    moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self);
    continue;
  }
}
function moonbitlang$core$random$$chacha8$46$inner(seed) {
  return { self: moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed), method_0: moonbitlang$core$random$$Source$next$32$ };
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
  const aLo = moonbitlang$core$builtin$$BitAnd$land$30$(a, $4294967295L);
  const aHi = moonbitlang$core$builtin$$Shr$shr$30$(a, 32);
  const bLo = moonbitlang$core$builtin$$BitAnd$land$30$(b, $4294967295L);
  const bHi = moonbitlang$core$builtin$$Shr$shr$30$(b, 32);
  const x = moonbitlang$core$builtin$$Mul$mul$30$(aLo, bLo);
  const y = moonbitlang$core$builtin$$Add$add$30$(moonbitlang$core$builtin$$Mul$mul$30$(aHi, bLo), moonbitlang$core$builtin$$Shr$shr$30$(x, 32));
  const z = moonbitlang$core$builtin$$Add$add$30$(moonbitlang$core$builtin$$Mul$mul$30$(aLo, bHi), moonbitlang$core$builtin$$BitAnd$land$30$(y, $4294967295L));
  const w = moonbitlang$core$builtin$$Add$add$30$(moonbitlang$core$builtin$$Add$add$30$(moonbitlang$core$builtin$$Mul$mul$30$(aHi, bHi), moonbitlang$core$builtin$$Shr$shr$30$(y, 32)), moonbitlang$core$builtin$$Shr$shr$30$(z, 32));
  return { hi: w, lo: moonbitlang$core$builtin$$Mul$mul$30$(a, b) };
}
function moonbitlang$core$random$$Rand$uint64$46$inner(self, limit) {
  if (moonbitlang$core$builtin$$Eq$equal$30$(limit, $0L)) {
    const _p = self;
    return _p.method_0(_p.self);
  } else {
    if (moonbitlang$core$builtin$$Eq$equal$30$(moonbitlang$core$builtin$$BitAnd$land$30$(limit, moonbitlang$core$builtin$$Sub$sub$30$(limit, $1L)), $0L)) {
      const _p = self;
      return moonbitlang$core$builtin$$BitAnd$land$30$(_p.method_0(_p.self), moonbitlang$core$builtin$$Sub$sub$30$(limit, $1L));
    }
  }
  const _p = self;
  let r = moonbitlang$core$random$$umul128(_p.method_0(_p.self), limit);
  if (moonbitlang$core$builtin$$op_lt$30$(r.lo, limit)) {
    const thresh = moonbitlang$core$builtin$$Mod$mod$30$(moonbitlang$core$uint64$$UInt64$lnot(limit), limit);
    while (true) {
      if (moonbitlang$core$builtin$$op_lt$30$(r.lo, thresh)) {
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
    return moonbitlang$core$uint64$$UInt64$to_int(moonbitlang$core$builtin$$Shr$shr$30$(_p.method_0(_p.self), 33));
  } else {
    return moonbitlang$core$random$$Rand$uint$46$inner(self, limit);
  }
}
function moonbitlang$core$random$$Rand$double(self) {
  const _p = self;
  return moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$builtin$$Shr$shr$30$(moonbitlang$core$builtin$$Shl$shl$30$(_p.method_0(_p.self), 11), 11)) / moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$builtin$$Shl$shl$30$($1L, 53));
}
function moonbitlang$core$option$$Option$map_or$33$(self, default_, f) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _x = _Some;
    return f(_x);
  }
}
function moonbitlang$core$option$$Option$map_or$34$(self, default_, f) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _x = _Some;
    return f(_x);
  }
}
function moonbitlang$core$option$$Option$unwrap_or_default$35$(self) {
  if (self === undefined) {
    return moonbitlang$core$builtin$$Default$default$35$();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$builtin$$Logger$write_object$5$(self, obj) {
  moonbitlang$core$builtin$$Show$output$5$(obj, self);
}
function moonbitlang$core$builtin$$op_lt$30$(self_, other) {
  return moonbitlang$core$builtin$$Compare$op_lt$36$(self_, other);
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$31$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < len) {
        const _tmp$7 = dst_offset + i | 0;
        const _tmp$8 = src_offset + i | 0;
        $bound_check(src, _tmp$8);
        $bound_check(dst, _tmp$7);
        dst[_tmp$7] = src[_tmp$8];
        _tmp$6 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$6 = len - 1 | 0;
    while (true) {
      const i = _tmp$6;
      if (i >= 0) {
        const _tmp$7 = dst_offset + i | 0;
        const _tmp$8 = src_offset + i | 0;
        $bound_check(src, _tmp$8);
        $bound_check(dst, _tmp$7);
        dst[_tmp$7] = src[_tmp$8];
        _tmp$6 = i - 1 | 0;
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
function moonbitlang$core$builtin$$Logger$write_char$37$(self, ch) {
  const _bind$56 = self;
  _bind$56.val = `${_bind$56.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$1$(x, y) {
  return !(x === y);
}
function moonbitlang$core$array$$Array$at$38$(self, index) {
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
function moonbitlang$core$array$$Array$at$39$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$23$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$40$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
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
function moonbitlang$core$array$$Array$at$1$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$42$(self, index) {
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
function moonbitlang$core$array$$Array$at$35$(self, index) {
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
function moonbitlang$core$array$$Array$at$25$(self, index) {
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
function moonbitlang$core$array$$Array$at$5$(self, index) {
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
function moonbitlang$core$builtin$$Logger$write_string$37$(self, str) {
  const _bind$56 = self;
  _bind$56.val = `${_bind$56.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$1$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$1$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$20$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$20$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$50$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$50$(value, self);
}
function moonbitlang$core$builtin$$Compare$op_lt$36$(x, y) {
  return moonbitlang$core$builtin$$Compare$compare$30$(x, y) < 0;
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
function moonbitlang$core$builtin$$Hash$hash$51$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$1$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$52$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$20$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$53$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$4$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$54$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$50$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$55$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$35$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$37$, method_1: moonbitlang$core$builtin$$Logger$write_substring$37$, method_2: moonbitlang$core$builtin$$Logger$write_char$37$ });
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
function moonbitlang$core$builtin$$Logger$write_substring$37$(self, str, start, len) {
  const _bind$56 = self;
  _bind$56.val = `${_bind$56.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
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
function moonbitlang$core$option$$Option$unwrap$60$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$0$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$61$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$62$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$63$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$15$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$11$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$13$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$8$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$17$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$14$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$21$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$22$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$6$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$18$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$0$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$3$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$22$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$11$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$6$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$62$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$63$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$21$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$61$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$0$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$2$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$3$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$15$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$22$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$11$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$6$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$62$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$63$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$21$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$7$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$61$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$8$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$9$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$12$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$18$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$0$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$0$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$0$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$2$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$3$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$3$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$3$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$15$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$15$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$15$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$22$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$22$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$22$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$11$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$11$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$11$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$6$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$6$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$6$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$62$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$62$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$62$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$63$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$63$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$63$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$21$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$21$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$21$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$7$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$61$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$61$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$61$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$8$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$8$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$9$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$12$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$12$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$12$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$18$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$18$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$0$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$0$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$0$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$0$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$2$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$2$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$3$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$3$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$3$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$15$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$15$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$15$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$22$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$22$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$22$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$22$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$11$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$11$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$11$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$11$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$62$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$62$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$62$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$62$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$63$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$63$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$63$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$63$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$21$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$21$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$21$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$21$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$6$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$6$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$6$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$6$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$7$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$7$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$61$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$61$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$61$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$61$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$8$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$8$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$8$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$9$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$9$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$12$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$12$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$18$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$18$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, _idx, entry);
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
      continue;
    }
  }
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$62$(self) {
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$62$(self, _key, _value, _hash);
      _tmp$6 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$63$(self) {
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$63$(self, _key, _value, _hash);
      _tmp$6 = _next;
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
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$61$(self) {
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$61$(self, _key, _value, _hash);
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$0$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$0$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$3$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$15$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$15$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$22$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$22$(self, key, value, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$set$11$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$11$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$62$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$62$(self, key, value, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$set$63$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$63$(self, key, value, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$set$21$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$21$(self, key, value, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$set$7$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$61$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$61$(self, key, value, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$set$8$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$8$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$12$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$builtin$$Map$set$18$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$18$(self, key, value, moonbitlang$core$builtin$$Hash$hash$54$(key));
}
function moonbitlang$core$builtin$$Map$from_array$62$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$62$(capacity);
  const _p$2 = arr.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$3 = _tmp$6;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$62$(m, _p$4._0, _p$4._1);
      _tmp$6 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$63$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$63$(capacity);
  const _p$2 = arr.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$3 = _tmp$6;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$63$(m, _p$4._0, _p$4._1);
      _tmp$6 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$21$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$21$(capacity);
  const _p$2 = arr.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$3 = _tmp$6;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$21$(m, _p$4._0, _p$4._1);
      _tmp$6 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$22$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$22$(capacity);
  const _p$2 = arr.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$3 = _tmp$6;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$22$(m, _p$4._0, _p$4._1);
      _tmp$6 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$22$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$63$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$62$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$13$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return -1;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$9$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$8$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$17$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$14$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$6$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$7$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$12$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return Option$None$3$;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return new Option$Some$3$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$3$;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$18$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$54$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return Option$None$4$;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$4$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$4$;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$at$63$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      $panic();
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp$6 = i + 1 | 0;
        _tmp$7 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Map$at$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      $panic();
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp$6 = i + 1 | 0;
        _tmp$7 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Map$at$22$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      $panic();
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp$6 = i + 1 | 0;
        _tmp$7 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Map$at$62$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      $panic();
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp$6 = i + 1 | 0;
        _tmp$7 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Map$at$21$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      $panic();
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp$6 = i + 1 | 0;
        _tmp$7 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Map$at$61$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      $panic();
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp$6 = i + 1 | 0;
        _tmp$7 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Map$at$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      $panic();
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp$6 = i + 1 | 0;
        _tmp$7 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function moonbitlang$core$builtin$$Map$get_or_init$6$(self, key, default_) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      const new_value = default_();
      _bind$56 = { _0: idx, _1: psl, _2: new_value, _3: undefined };
      break;
    } else {
      const _Some = _bind$57;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return _entry.value;
      }
      if (psl > _entry.psl) {
        const new_value = default_();
        _bind$56 = { _0: idx, _1: psl, _2: new_value, _3: _entry };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _new_value = _bind$56._2;
  const _push_away = _bind$56._3;
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$6$(self);
    moonbitlang$core$builtin$$Map$set_with_hash$6$(self, key, _new_value, hash);
  } else {
    if (_push_away === undefined) {
    } else {
      const _Some = _push_away;
      const _entry = _Some;
      moonbitlang$core$builtin$$Map$push_away$6$(self, _idx, _entry);
    }
    const entry = { prev: self.tail, next: undefined, psl: _psl, hash: hash, key: key, value: _new_value };
    moonbitlang$core$builtin$$Map$add_entry_to_tail$6$(self, _idx, entry);
  }
  return _new_value;
}
function moonbitlang$core$builtin$$Map$contains$63$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$22$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$62$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$21$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$7$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$61$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$63$(self, entry) {
  const _bind$56 = entry.prev;
  if (_bind$56 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    const _tmp$8 = _tmp$7;
    _tmp$8.next = entry.next;
  }
  const _bind$57 = entry.next;
  if (_bind$57 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$57;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$62$(self, entry) {
  const _bind$56 = entry.prev;
  if (_bind$56 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    const _tmp$8 = _tmp$7;
    _tmp$8.next = entry.next;
  }
  const _bind$57 = entry.next;
  if (_bind$57 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$57;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$22$(self, entry) {
  const _bind$56 = entry.prev;
  if (_bind$56 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    const _tmp$8 = _tmp$7;
    _tmp$8.next = entry.next;
  }
  const _bind$57 = entry.next;
  if (_bind$57 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$57;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$63$(self, idx) {
  let _tmp$6 = idx;
  while (true) {
    const idx$2 = _tmp$6;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$7 = self.entries;
      $bound_check(_tmp$7, next);
      const _bind$56 = _tmp$7[next];
      if (_bind$56 === undefined) {
        break _L;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$63$(self, _x, idx$2);
          _tmp$6 = next;
          continue;
        }
      }
    }
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, idx$2);
    _tmp$7[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$62$(self, idx) {
  let _tmp$6 = idx;
  while (true) {
    const idx$2 = _tmp$6;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$7 = self.entries;
      $bound_check(_tmp$7, next);
      const _bind$56 = _tmp$7[next];
      if (_bind$56 === undefined) {
        break _L;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$62$(self, _x, idx$2);
          _tmp$6 = next;
          continue;
        }
      }
    }
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, idx$2);
    _tmp$7[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$22$(self, idx) {
  let _tmp$6 = idx;
  while (true) {
    const idx$2 = _tmp$6;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$7 = self.entries;
      $bound_check(_tmp$7, next);
      const _bind$56 = _tmp$7[next];
      if (_bind$56 === undefined) {
        break _L;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$22$(self, _x, idx$2);
          _tmp$6 = next;
          continue;
        }
      }
    }
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, idx$2);
    _tmp$7[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$63$(self, key, hash) {
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$63$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$63$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$62$(self, key, hash) {
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$62$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$62$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$22$(self, key, hash) {
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$22$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$22$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove$63$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$63$(self, key, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$remove$62$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$62$(self, key, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$builtin$$Map$remove$22$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$22$(self, key, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$64$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$65$(self, value, start, end) {
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
function moonbitlang$core$array$$FixedArray$fill$46$inner$66$(self, value, start, end) {
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
  moonbitlang$core$array$$FixedArray$fill$46$inner$64$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$63$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$66$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter$6$(self) {
  const _p = (yield_) => {
    let _tmp$6 = self.head;
    while (true) {
      const _param = _tmp$6;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$56 = yield_({ _0: _key, _1: _value });
        if (_bind$56 === 1) {
          _tmp$6 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iterator$22$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
function moonbitlang$core$builtin$$Map$iterator$61$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
function moonbitlang$core$builtin$$Map$iterator$11$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
function moonbitlang$core$builtin$$Map$iterator$8$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
function moonbitlang$core$builtin$$Map$iterator$3$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
function moonbitlang$core$builtin$$Map$iterator$62$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
function moonbitlang$core$builtin$$Map$iterator$63$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
function moonbitlang$core$builtin$$Map$iterator2$22$(self) {
  return moonbitlang$core$builtin$$Map$iterator$22$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$61$(self) {
  return moonbitlang$core$builtin$$Map$iterator$61$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$11$(self) {
  return moonbitlang$core$builtin$$Map$iterator$11$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$8$(self) {
  return moonbitlang$core$builtin$$Map$iterator$8$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$3$(self) {
  return moonbitlang$core$builtin$$Map$iterator$3$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$62$(self) {
  return moonbitlang$core$builtin$$Map$iterator$62$(self);
}
function moonbitlang$core$builtin$$Map$iterator2$63$(self) {
  return moonbitlang$core$builtin$$Map$iterator$63$(self);
}
function moonbitlang$core$builtin$$Map$to_array$15$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp$6 = self.head;
  while (true) {
    const _param = _tmp$6;
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
      _tmp$6 = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Iterator$next$23$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$4$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$1$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$67$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$68$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$20$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$69$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$70$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$71$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$72$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$73$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Map$copy$63$(self) {
  const _bind$56 = self.capacity;
  const _bind$57 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$58 = self.size;
  const _bind$59 = self.capacity_mask;
  const _bind$60 = self.grow_at;
  const _bind$61 = undefined;
  const _bind$62 = self.tail;
  const other = { entries: _bind$57, size: _bind$58, capacity: _bind$56, capacity_mask: _bind$59, grow_at: _bind$60, head: _bind$61, tail: _bind$62 };
  if (self.size === 0) {
    return other;
  }
  const _tmp$6 = self.entries;
  const _tmp$7 = self.tail;
  $bound_check(_tmp$6, _tmp$7);
  const _bind$63 = _tmp$6[_tmp$7];
  if (_bind$63 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$63;
    const _last = _Some;
    let _tmp$8 = _last;
    let _tmp$9 = self.tail;
    let _tmp$10 = undefined;
    while (true) {
      const _param_0 = _tmp$8;
      const _param_1 = _tmp$9;
      const _param_2 = _tmp$10;
      const _prev = _param_0.prev;
      const _psl = _param_0.psl;
      const _hash = _param_0.hash;
      const _key = _param_0.key;
      const _value = _param_0.value;
      const new_entry = { prev: _prev, next: _param_2, psl: _psl, hash: _hash, key: _key, value: _value };
      const _tmp$11 = other.entries;
      $bound_check(_tmp$11, _param_1);
      _tmp$11[_param_1] = new_entry;
      if (_prev !== -1) {
        const _tmp$12 = self.entries;
        $bound_check(_tmp$12, _prev);
        const _p = _tmp$12[_prev];
        if (_p === undefined) {
          _tmp$8 = $panic();
        } else {
          const _p$2 = _p;
          _tmp$8 = _p$2;
        }
        _tmp$9 = _prev;
        _tmp$10 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function moonbitlang$core$builtin$$Map$copy$62$(self) {
  const _bind$56 = self.capacity;
  const _bind$57 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$58 = self.size;
  const _bind$59 = self.capacity_mask;
  const _bind$60 = self.grow_at;
  const _bind$61 = undefined;
  const _bind$62 = self.tail;
  const other = { entries: _bind$57, size: _bind$58, capacity: _bind$56, capacity_mask: _bind$59, grow_at: _bind$60, head: _bind$61, tail: _bind$62 };
  if (self.size === 0) {
    return other;
  }
  const _tmp$6 = self.entries;
  const _tmp$7 = self.tail;
  $bound_check(_tmp$6, _tmp$7);
  const _bind$63 = _tmp$6[_tmp$7];
  if (_bind$63 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$63;
    const _last = _Some;
    let _tmp$8 = _last;
    let _tmp$9 = self.tail;
    let _tmp$10 = undefined;
    while (true) {
      const _param_0 = _tmp$8;
      const _param_1 = _tmp$9;
      const _param_2 = _tmp$10;
      const _prev = _param_0.prev;
      const _psl = _param_0.psl;
      const _hash = _param_0.hash;
      const _key = _param_0.key;
      const _value = _param_0.value;
      const new_entry = { prev: _prev, next: _param_2, psl: _psl, hash: _hash, key: _key, value: _value };
      const _tmp$11 = other.entries;
      $bound_check(_tmp$11, _param_1);
      _tmp$11[_param_1] = new_entry;
      if (_prev !== -1) {
        const _tmp$12 = self.entries;
        $bound_check(_tmp$12, _prev);
        const _p = _tmp$12[_prev];
        if (_p === undefined) {
          _tmp$8 = $panic();
        } else {
          const _p$2 = _p;
          _tmp$8 = _p$2;
        }
        _tmp$9 = _prev;
        _tmp$10 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
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
function moonbitlang$core$array$$Array$push$46$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$74$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$75$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$76$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$1$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$20$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$39$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$77$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$40$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$45$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$10$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$49$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$19$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$25$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$78$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$23$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$41$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$16$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$47$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$79$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iterator2$next$22$(self) {
  return moonbitlang$core$builtin$$Iterator$next$67$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$61$(self) {
  return moonbitlang$core$builtin$$Iterator$next$68$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$11$(self) {
  return moonbitlang$core$builtin$$Iterator$next$69$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$8$(self) {
  return moonbitlang$core$builtin$$Iterator$next$70$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$3$(self) {
  return moonbitlang$core$builtin$$Iterator$next$71$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$62$(self) {
  return moonbitlang$core$builtin$$Iterator$next$72$(self);
}
function moonbitlang$core$builtin$$Iterator2$next$63$(self) {
  return moonbitlang$core$builtin$$Iterator$next$73$(self);
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
function moonbitlang$core$builtin$$Add$add$80$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$80$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$80$(self, other) {
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
function moonbitlang$core$builtin$$Add$add$30$(self, other) {
  return moonbitlang$core$builtin$$Add$add$80$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$30$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$80$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$30$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$80$(self, other);
}
function moonbitlang$core$builtin$$Mod$mod$30$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$mod_u(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$30$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$30$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$30$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$30$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$uint64$$UInt64$lnot(self) {
  return moonbitlang$core$builtin$$MyInt64$lnot(self);
}
function moonbitlang$core$builtin$$Shl$shl$30$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$30$(self, shift) {
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
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < _end858) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$50$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$20$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_int(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$31$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$array$$FixedArray$blit_to$46$inner$31$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$31$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$24$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$20$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$20$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$20$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$20$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$20$(self.length)}`);
    return;
  }
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$50$(input) {
  console.log(input);
}
function moonbitlang$core$array$$ArrayView$at$10$(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp$6 = self.buf;
    const _tmp$7 = self.start + index | 0;
    $bound_check(_tmp$6, _tmp$7);
    return _tmp$6[_tmp$7];
  } else {
    return moonbitlang$core$abort$$abort$10$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$20$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$20$(index)}`);
  }
}
function moonbitlang$core$array$$Array$new$46$inner$16$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$19$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$20$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$79$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$19$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$20$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_pop$16$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$pop$16$(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$16$(self);
    return v;
  }
}
function moonbitlang$core$array$$Array$remove$25$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$abort$$abort$25$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$20$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$20$(index)}`);
  }
}
function moonbitlang$core$array$$Array$remove$20$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$abort$$abort$20$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$20$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$20$(index)}`);
  }
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
function moonbitlang$core$array$$Array$set$46$(self, index, value) {
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
function moonbitlang$core$array$$Array$set$49$(self, index, value) {
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
function moonbitlang$core$array$$Array$set$39$(self, index, value) {
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
function moonbitlang$core$array$$Array$contains$81$(self, value) {
  const _len = self.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const v = self[_i];
      if (v === value) {
        return true;
      }
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$array$$Array$contains$23$(self, value) {
  const _len = self.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const v = self[_i];
      if (v.id === value.id) {
        return true;
      }
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$array$$Array$search$20$(self, value) {
  const _len = self.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const v = self[_i];
      if (v === value) {
        return _i;
      }
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function moonbitlang$core$array$$Array$swap$20$(self, i, j) {
  if (i >= self.length || (j >= self.length || (i < 0 || j < 0))) {
    const len = self.length;
    moonbitlang$core$abort$$abort$24$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$20$(len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$20$(i)}, ${moonbitlang$core$builtin$$Show$to_string$20$(j)})`);
  }
  const temp = self[i];
  self[i] = self[j];
  self[j] = temp;
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
function moonbitlang$core$array$$Array$bubble_sort_by$46$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1309 = actual_start + 1 | 0;
  let _tmp$6 = _start1309;
  while (true) {
    const i = _tmp$6;
    if (i < actual_end) {
      let _tmp$7 = i;
      while (true) {
        const j = _tmp$7;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$46$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$46$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$46$(arr, j);
          moonbitlang$core$array$$Array$set$46$(arr, j, moonbitlang$core$array$$Array$at$46$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$46$(arr, j - 1 | 0, temp);
          _tmp$7 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$bubble_sort_by$49$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1309 = actual_start + 1 | 0;
  let _tmp$6 = _start1309;
  while (true) {
    const i = _tmp$6;
    if (i < actual_end) {
      let _tmp$7 = i;
      while (true) {
        const j = _tmp$7;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$49$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$49$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$49$(arr, j);
          moonbitlang$core$array$$Array$set$49$(arr, j, moonbitlang$core$array$$Array$at$49$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$49$(arr, j - 1 | 0, temp);
          _tmp$7 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$bubble_sort_by$39$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1309 = actual_start + 1 | 0;
  let _tmp$6 = _start1309;
  while (true) {
    const i = _tmp$6;
    if (i < actual_end) {
      let _tmp$7 = i;
      while (true) {
        const j = _tmp$7;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$39$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$39$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$39$(arr, j);
          moonbitlang$core$array$$Array$set$39$(arr, j, moonbitlang$core$array$$Array$at$39$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$39$(arr, j - 1 | 0, temp);
          _tmp$7 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2505(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const cmp = _env._1;
  const arr = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$46$(arr, a_pos), moonbitlang$core$array$$Array$at$46$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$46$(arr, a_pos);
    moonbitlang$core$array$$Array$set$46$(arr, a_pos, moonbitlang$core$array$$Array$at$46$(arr, b_pos));
    moonbitlang$core$array$$Array$set$46$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2506(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2505(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2505(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2505(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$46$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2506(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2506(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2506(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2506(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$46$(arr, i_pos);
        moonbitlang$core$array$$Array$set$46$(arr, i_pos, moonbitlang$core$array$$Array$at$46$(arr, j_pos));
        moonbitlang$core$array$$Array$set$46$(arr, j_pos, temp);
        _tmp$6 = i + 1 | 0;
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2540(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const cmp = _env._1;
  const arr = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$49$(arr, a_pos), moonbitlang$core$array$$Array$at$49$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$49$(arr, a_pos);
    moonbitlang$core$array$$Array$set$49$(arr, a_pos, moonbitlang$core$array$$Array$at$49$(arr, b_pos));
    moonbitlang$core$array$$Array$set$49$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2541(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2540(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2540(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2540(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$49$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2541(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2541(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2541(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2541(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$49$(arr, i_pos);
        moonbitlang$core$array$$Array$set$49$(arr, i_pos, moonbitlang$core$array$$Array$at$49$(arr, j_pos));
        moonbitlang$core$array$$Array$set$49$(arr, j_pos, temp);
        _tmp$6 = i + 1 | 0;
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
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2575(_env, a_idx, b_idx) {
  const actual_start = _env._3;
  const swaps = _env._2;
  const cmp = _env._1;
  const arr = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$39$(arr, a_pos), moonbitlang$core$array$$Array$at$39$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$39$(arr, a_pos);
    moonbitlang$core$array$$Array$set$39$(arr, a_pos, moonbitlang$core$array$$Array$at$39$(arr, b_pos));
    moonbitlang$core$array$$Array$set$39$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2576(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2575(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2575(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$2575(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$39$(arr, start, end, cmp) {
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
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2576(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2576(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2576(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$2576(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$39$(arr, i_pos);
        moonbitlang$core$array$$Array$set$39$(arr, i_pos, moonbitlang$core$array$$Array$at$39$(arr, j_pos));
        moonbitlang$core$array$$Array$set$39$(arr, j_pos, temp);
        _tmp$6 = i + 1 | 0;
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
function moonbitlang$core$array$$Array$sift_down_by$46$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$46$(arr, child_pos), moonbitlang$core$array$$Array$at$46$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$46$(arr, current_pos), moonbitlang$core$array$$Array$at$46$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$46$(arr, current_pos);
      moonbitlang$core$array$$Array$set$46$(arr, current_pos, moonbitlang$core$array$$Array$at$46$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$46$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$sift_down_by$49$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$49$(arr, child_pos), moonbitlang$core$array$$Array$at$49$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$49$(arr, current_pos), moonbitlang$core$array$$Array$at$49$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$49$(arr, current_pos);
      moonbitlang$core$array$$Array$set$49$(arr, current_pos, moonbitlang$core$array$$Array$at$49$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$49$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$sift_down_by$39$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$39$(arr, child_pos), moonbitlang$core$array$$Array$at$39$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$39$(arr, current_pos), moonbitlang$core$array$$Array$at$39$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$39$(arr, current_pos);
      moonbitlang$core$array$$Array$set$39$(arr, current_pos, moonbitlang$core$array$$Array$at$39$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$39$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$46$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp$6 = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp$6;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$46$(arr, actual_start, actual_end, i, cmp);
      _tmp$6 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$7 = len - 1 | 0;
  while (true) {
    const i = _tmp$7;
    if (i > 0) {
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$46$(arr, actual_start);
      moonbitlang$core$array$$Array$set$46$(arr, actual_start, moonbitlang$core$array$$Array$at$46$(arr, last));
      moonbitlang$core$array$$Array$set$46$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$46$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$7 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$49$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp$6 = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp$6;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$49$(arr, actual_start, actual_end, i, cmp);
      _tmp$6 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$7 = len - 1 | 0;
  while (true) {
    const i = _tmp$7;
    if (i > 0) {
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$49$(arr, actual_start);
      moonbitlang$core$array$$Array$set$49$(arr, actual_start, moonbitlang$core$array$$Array$at$49$(arr, last));
      moonbitlang$core$array$$Array$set$49$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$49$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$7 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$39$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp$6 = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp$6;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$39$(arr, actual_start, actual_end, i, cmp);
      _tmp$6 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$7 = len - 1 | 0;
  while (true) {
    const i = _tmp$7;
    if (i > 0) {
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$39$(arr, actual_start);
      moonbitlang$core$array$$Array$set$39$(arr, actual_start, moonbitlang$core$array$$Array$at$39$(arr, last));
      moonbitlang$core$array$$Array$set$39$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$39$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$7 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$partition_by$46$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$46$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$46$(arr, pivot_index, moonbitlang$core$array$$Array$at$46$(arr, last_index));
  moonbitlang$core$array$$Array$set$46$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$46$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp$6 = actual_start;
  while (true) {
    const j = _tmp$6;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$46$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$46$(arr, i);
          moonbitlang$core$array$$Array$set$46$(arr, i, moonbitlang$core$array$$Array$at$46$(arr, j));
          moonbitlang$core$array$$Array$set$46$(arr, j, temp$2);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp$6 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const temp$2 = moonbitlang$core$array$$Array$at$46$(arr, i);
  moonbitlang$core$array$$Array$set$46$(arr, i, moonbitlang$core$array$$Array$at$46$(arr, last_index));
  moonbitlang$core$array$$Array$set$46$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$partition_by$49$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$49$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$49$(arr, pivot_index, moonbitlang$core$array$$Array$at$49$(arr, last_index));
  moonbitlang$core$array$$Array$set$49$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$49$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp$6 = actual_start;
  while (true) {
    const j = _tmp$6;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$49$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$49$(arr, i);
          moonbitlang$core$array$$Array$set$49$(arr, i, moonbitlang$core$array$$Array$at$49$(arr, j));
          moonbitlang$core$array$$Array$set$49$(arr, j, temp$2);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp$6 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const temp$2 = moonbitlang$core$array$$Array$at$49$(arr, i);
  moonbitlang$core$array$$Array$set$49$(arr, i, moonbitlang$core$array$$Array$at$49$(arr, last_index));
  moonbitlang$core$array$$Array$set$49$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$partition_by$39$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$39$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$39$(arr, pivot_index, moonbitlang$core$array$$Array$at$39$(arr, last_index));
  moonbitlang$core$array$$Array$set$39$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$39$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp$6 = actual_start;
  while (true) {
    const j = _tmp$6;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$39$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$39$(arr, i);
          moonbitlang$core$array$$Array$set$39$(arr, i, moonbitlang$core$array$$Array$at$39$(arr, j));
          moonbitlang$core$array$$Array$set$39$(arr, j, temp$2);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp$6 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const temp$2 = moonbitlang$core$array$$Array$at$39$(arr, i);
  moonbitlang$core$array$$Array$set$39$(arr, i, moonbitlang$core$array$$Array$at$39$(arr, last_index));
  moonbitlang$core$array$$Array$set$39$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$46$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1324 = actual_start + 1 | 0;
  let _tmp$6 = _start1324;
  while (true) {
    const i = _tmp$6;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$7 = i;
      while (true) {
        const j = _tmp$7;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$46$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$46$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$46$(arr, j);
          moonbitlang$core$array$$Array$set$46$(arr, j, moonbitlang$core$array$$Array$at$46$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$46$(arr, j - 1 | 0, temp);
          _tmp$7 = j - 1 | 0;
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
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$49$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1324 = actual_start + 1 | 0;
  let _tmp$6 = _start1324;
  while (true) {
    const i = _tmp$6;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$7 = i;
      while (true) {
        const j = _tmp$7;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$49$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$49$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$49$(arr, j);
          moonbitlang$core$array$$Array$set$49$(arr, j, moonbitlang$core$array$$Array$at$49$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$49$(arr, j - 1 | 0, temp);
          _tmp$7 = j - 1 | 0;
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
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$39$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1324 = actual_start + 1 | 0;
  let _tmp$6 = _start1324;
  while (true) {
    const i = _tmp$6;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$7 = i;
      while (true) {
        const j = _tmp$7;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$39$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$39$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$39$(arr, j);
          moonbitlang$core$array$$Array$set$39$(arr, j, moonbitlang$core$array$$Array$at$39$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$39$(arr, j - 1 | 0, temp);
          _tmp$7 = j - 1 | 0;
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
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$quick_sort_by$46$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$46$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$46$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$56 = moonbitlang$core$array$$Array$choose_pivot_by$46$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$56._0;
    const _likely_sorted = _bind$56._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$46$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$57 = moonbitlang$core$array$$Array$partition_by$46$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$57._0;
    const _partitioned = _bind$57._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$58 = pred$2;
    if (_bind$58 === undefined) {
    } else {
      const _Some = _bind$58;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$46$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$46$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$46$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$46$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$46$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$46$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$quick_sort_by$49$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$49$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$49$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$56 = moonbitlang$core$array$$Array$choose_pivot_by$49$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$56._0;
    const _likely_sorted = _bind$56._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$49$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$57 = moonbitlang$core$array$$Array$partition_by$49$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$57._0;
    const _partitioned = _bind$57._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$58 = pred$2;
    if (_bind$58 === undefined) {
    } else {
      const _Some = _bind$58;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$49$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$49$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$49$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$49$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$49$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$49$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$quick_sort_by$39$(arr, start, end, cmp, pred, limit) {
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
        moonbitlang$core$array$$Array$bubble_sort_by$39$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$39$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$56 = moonbitlang$core$array$$Array$choose_pivot_by$39$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$56._0;
    const _likely_sorted = _bind$56._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$39$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$57 = moonbitlang$core$array$$Array$partition_by$39$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$57._0;
    const _partitioned = _bind$57._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$58 = pred$2;
    if (_bind$58 === undefined) {
    } else {
      const _Some = _bind$58;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$39$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$39$(arr, i)) === 0) {
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
      moonbitlang$core$array$$Array$quick_sort_by$39$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$39$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$39$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$39$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$82$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$46$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$49$(self, cmp) {
  moonbitlang$core$array$$Array$quick_sort_by$49$(self, 0, self.length, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$39$(self, cmp) {
  moonbitlang$core$array$$Array$quick_sort_by$39$(self, 0, self.length, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$FixedArray$makei$29$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp$6 = 1;
    while (true) {
      const i = _tmp$6;
      if (i < length) {
        $bound_check(array, i);
        array[i] = value(i);
        _tmp$6 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$Array$copy$39$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$Array$copy$20$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$Array$shuffle_in_place$20$(self, rand) {
  const n = self.length;
  let _tmp$6 = n - 1 | 0;
  while (true) {
    const i = _tmp$6;
    if (i > 0) {
      const j = rand(i + 1 | 0) % (i + 1 | 0) | 0;
      moonbitlang$core$array$$Array$swap$20$(self, i, j);
      _tmp$6 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$bytes$$BytesView$at(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp$6 = self.bytes;
    const _tmp$7 = self.start + index | 0;
    $bound_check(_tmp$6, _tmp$7);
    return _tmp$6[_tmp$7];
  } else {
    return moonbitlang$core$abort$$abort$27$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$20$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$20$(index)}`);
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
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { bytes: self, start: start$2, end: end$2 } : moonbitlang$core$abort$$abort$26$("Invalid index for View");
}
function moonbitlang$core$bytes$$BytesView$to_uint_le(self) {
  const _p = moonbitlang$core$bytes$$BytesView$at(self, 0);
  const _p$2 = moonbitlang$core$bytes$$BytesView$at(self, 1);
  const _tmp$6 = (_p >>> 0) + (_p$2 << 8 >>> 0) | 0;
  const _p$3 = moonbitlang$core$bytes$$BytesView$at(self, 2);
  const _tmp$7 = (_tmp$6 >>> 0) + (_p$3 << 16 >>> 0) | 0;
  const _p$4 = moonbitlang$core$bytes$$BytesView$at(self, 3);
  return (_tmp$7 >>> 0) + (_p$4 << 24 >>> 0) | 0;
}
function moonbitlang$core$set$$Set$new$46$inner$20$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$4$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$23$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$56 = capacity$2 - 1 | 0;
  const _bind$57 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$58 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$59 = undefined;
  return { entries: _bind$58, size: 0, capacity: capacity$2, capacity_mask: _bind$56, grow_at: _bind$57, head: _bind$59, tail: -1 };
}
function moonbitlang$core$set$$Set$add_entry_to_tail$20$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$1$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$4$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$23$(self, idx, entry) {
  const _bind$56 = self.tail;
  if (_bind$56 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    _tmp$7.next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$set_entry$4$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$set_entry$20$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$set_entry$1$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$set_entry$23$(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$56 = entry.next;
  if (_bind$56 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$56;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$push_away$20$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$20$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$20$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$push_away$1$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$1$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$push_away$4$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$4$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$4$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$push_away$23$(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = idx + 1 & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$56 = _tmp$9[idx$2];
    if (_bind$56 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$23$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$56;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$23$(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$add_with_hash$20$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$20$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$20$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$20$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$1$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$1$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$1$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$4$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$4$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$4$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$4$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$4$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$23$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$23$(self);
  }
  let _bind$56;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$57 = _tmp$8[idx];
    if (_bind$57 === undefined) {
      _bind$56 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$57;
      const _curr_entry = _Some;
      let _tmp$9;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$9 = _p.id === key.id;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$23$(self, idx, _curr_entry);
        _bind$56 = { _0: idx, _1: psl };
        break;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$56._0;
  const _psl = _bind$56._1;
  const _bind$57 = self.tail;
  const _bind$58 = undefined;
  const entry = { prev: _bind$57, next: _bind$58, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$23$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$20$(self) {
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$20$(self, _key, _hash);
      _tmp$6 = _next;
      continue;
    }
  }
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$1$(self, _key, _hash);
      _tmp$6 = _next;
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$4$(self, _key, _hash);
      _tmp$6 = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$grow$23$(self) {
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
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$23$(self, _key, _hash);
      _tmp$6 = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$20$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$20$(self, key, moonbitlang$core$builtin$$Hash$hash$52$(key));
}
function moonbitlang$core$set$$Set$add$1$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$1$(self, key, moonbitlang$core$builtin$$Hash$hash$51$(key));
}
function moonbitlang$core$set$$Set$add$4$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$4$(self, key, moonbitlang$core$builtin$$Hash$hash$53$(key));
}
function moonbitlang$core$set$$Set$add$23$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$23$(self, key, key.id);
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
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$set$$Set$add$4$(m, e);
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$contains$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$4$(_entry.key, key)) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$contains$20$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$contains$23$(self, key) {
  const hash = key.id;
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      return false;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p.id === key.id;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove_entry$4$(self, entry) {
  const _bind$56 = entry.prev;
  if (_bind$56 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    const _tmp$8 = _tmp$7;
    _tmp$8.next = entry.next;
  }
  const _bind$57 = entry.next;
  if (_bind$57 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$57;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$remove_entry$1$(self, entry) {
  const _bind$56 = entry.prev;
  if (_bind$56 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    const _tmp$8 = _tmp$7;
    _tmp$8.next = entry.next;
  }
  const _bind$57 = entry.next;
  if (_bind$57 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$57;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$remove_entry$20$(self, entry) {
  const _bind$56 = entry.prev;
  if (_bind$56 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$56);
    const _p = _tmp$6[_bind$56];
    let _tmp$7;
    if (_p === undefined) {
      _tmp$7 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$7 = _p$2;
    }
    const _tmp$8 = _tmp$7;
    _tmp$8.next = entry.next;
  }
  const _bind$57 = entry.next;
  if (_bind$57 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$57;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$4$(self, idx) {
  let _tmp$6 = idx;
  while (true) {
    const idx$2 = _tmp$6;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$7 = self.entries;
      $bound_check(_tmp$7, next);
      const _bind$56 = _tmp$7[next];
      if (_bind$56 === undefined) {
        break _L;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$4$(self, _x, idx$2);
          _tmp$6 = next;
          continue;
        }
      }
    }
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, idx$2);
    _tmp$7[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$1$(self, idx) {
  let _tmp$6 = idx;
  while (true) {
    const idx$2 = _tmp$6;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$7 = self.entries;
      $bound_check(_tmp$7, next);
      const _bind$56 = _tmp$7[next];
      if (_bind$56 === undefined) {
        break _L;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$1$(self, _x, idx$2);
          _tmp$6 = next;
          continue;
        }
      }
    }
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, idx$2);
    _tmp$7[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$20$(self, idx) {
  let _tmp$6 = idx;
  while (true) {
    const idx$2 = _tmp$6;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$7 = self.entries;
      $bound_check(_tmp$7, next);
      const _bind$56 = _tmp$7[next];
      if (_bind$56 === undefined) {
        break _L;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$20$(self, _x, idx$2);
          _tmp$6 = next;
          continue;
        }
      }
    }
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, idx$2);
    _tmp$7[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$remove$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
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
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$51$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      let _tmp$9;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$9 = _p === key;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        moonbitlang$core$set$$Set$remove_entry$1$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$1$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove$20$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$52$(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$56 = _tmp$8[idx];
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$set$$Set$remove_entry$20$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$20$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$clear$4$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$65$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$1$(self) {
  const _p = (yield_) => {
    let _tmp$6 = self.head;
    while (true) {
      const _param = _tmp$6;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$56 = yield_(_key);
        if (_bind$56 === 1) {
          _tmp$6 = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$iterator$23$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
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
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      curr_entry.val = _next;
      return _key;
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$iterator$1$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      curr_entry.val = _next;
      return _key;
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$iterator$20$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$56 = curr_entry.val;
    if (_bind$56 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      curr_entry.val = _next;
      return _key;
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$to_array$20$(self) {
  const arr = moonbitlang$core$array$$Array$new$46$inner$20$(self.size);
  let _tmp$6 = self.head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      moonbitlang$core$array$$Array$push$20$(arr, _key);
      _tmp$6 = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$set$$Set$difference$4$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$4$(8);
  let _tmp$6 = self.head;
  while (true) {
    const _p = _tmp$6;
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
      _tmp$6 = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$4$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$4$(8);
  let _tmp$6 = self.head;
  while (true) {
    const _p = _tmp$6;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$4$(m, _p$4);
      _tmp$6 = _p$5;
      continue;
    }
  }
  let _tmp$7 = other.head;
  while (true) {
    const _p = _tmp$7;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$4$(m, _p$4);
      _tmp$7 = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$1$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$1$(8);
  let _tmp$6 = self.head;
  while (true) {
    const _p = _tmp$6;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$1$(m, _p$4);
      _tmp$6 = _p$5;
      continue;
    }
  }
  let _tmp$7 = other.head;
  while (true) {
    const _p = _tmp$7;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$1$(m, _p$4);
      _tmp$7 = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$double$$Double$to_uint(self) {
  return self !== self ? 0 : self >= 4294967295 ? -1 : self <= 0 ? 0 : self | 0;
}
function moonbitlang$core$builtin$$Show$output$5$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$builtin$$Show$output$35$(_x_197, _x_198) {
  _x_198.method_0(_x_198.self, "Vec2D(");
  moonbitlang$core$builtin$$Logger$write_object$5$(_x_198, _x_197._0);
  _x_198.method_0(_x_198.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$5$(_x_198, _x_197._1);
  _x_198.method_0(_x_198.self, ")");
}
function moonbitlang$core$builtin$$Default$default$35$() {
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
  const _p = self.position;
  const _tmp$6 = { _0: _p._0 + dir._0, _1: _p._1 + dir._1 };
  return { position: _tmp$6, size: self.size };
}
function moonbitlang$core$builtin$$Eq$equal$4$(_x_29, _x_30) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$4$(_x_21, _x_22) {
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
      return Milky2018$selene$inputs$$from_string$46$constr$47$3372;
    }
    case "KeyB": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3373;
    }
    case "KeyC": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3374;
    }
    case "KeyD": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3375;
    }
    case "KeyE": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3376;
    }
    case "KeyF": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3377;
    }
    case "KeyG": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3378;
    }
    case "KeyH": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3379;
    }
    case "KeyI": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3380;
    }
    case "KeyJ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3381;
    }
    case "KeyK": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3382;
    }
    case "KeyL": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3383;
    }
    case "KeyM": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3384;
    }
    case "KeyN": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3385;
    }
    case "KeyO": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3386;
    }
    case "KeyP": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3387;
    }
    case "KeyQ": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3388;
    }
    case "KeyR": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3389;
    }
    case "KeyS": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3390;
    }
    case "KeyT": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3391;
    }
    case "KeyU": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3392;
    }
    case "KeyV": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3393;
    }
    case "KeyW": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3394;
    }
    case "KeyX": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3395;
    }
    case "KeyY": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3396;
    }
    case "ArrowUp": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3397;
    }
    case "ArrowDown": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3398;
    }
    case "ArrowLeft": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3399;
    }
    case "ArrowRight": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3400;
    }
    case "Space": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3401;
    }
    case "Enter": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3402;
    }
    case "Escape": {
      return Milky2018$selene$inputs$$from_string$46$constr$47$3403;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$inputs$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$4$(Milky2018$selene$inputs$$pressed_keys, code);
}
function Milky2018$selene$inputs$$key_vector(up, down, left, right) {
  const x = Milky2018$selene$inputs$$is_pressed(left) ? -1 : Milky2018$selene$inputs$$is_pressed(right) ? 1 : 0;
  const y = Milky2018$selene$inputs$$is_pressed(up) ? -1 : Milky2018$selene$inputs$$is_pressed(down) ? 1 : 0;
  return { _0: x, _1: y };
}
function Milky2018$selene$inputs$$advanced_key_system(_delta) {
  moonbitlang$core$set$$Set$clear$4$(Milky2018$selene$inputs$$just_pressed_keys);
  const _it = moonbitlang$core$set$$Set$iterator$4$(moonbitlang$core$set$$Set$difference$4$(Milky2018$selene$inputs$$pressed_keys, Milky2018$selene$inputs$$last_pressed_keys));
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator$next$4$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$4$(Milky2018$selene$inputs$$just_pressed_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$4$(Milky2018$selene$inputs$$just_release_keys);
  const _it$2 = moonbitlang$core$set$$Set$iterator$4$(moonbitlang$core$set$$Set$union$4$(moonbitlang$core$set$$Set$difference$4$(Milky2018$selene$inputs$$all_codes, Milky2018$selene$inputs$$pressed_keys), Milky2018$selene$inputs$$last_pressed_keys));
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator$next$4$(_it$2);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$4$(Milky2018$selene$inputs$$just_release_keys, _code);
      continue;
    }
  }
  moonbitlang$core$set$$Set$clear$4$(Milky2018$selene$inputs$$last_pressed_keys);
  const _it$3 = moonbitlang$core$set$$Set$iterator$4$(Milky2018$selene$inputs$$pressed_keys);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator$next$4$(_it$3);
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _code = _Some;
      moonbitlang$core$set$$Set$add$4$(Milky2018$selene$inputs$$last_pressed_keys, _code);
      continue;
    }
  }
}
function Milky2018$selene$inputs$$is_just_released(code) {
  return moonbitlang$core$set$$Set$contains$4$(Milky2018$selene$inputs$$just_pressed_keys, code);
}
function rami3l$js$45$ffi$js$$Union3$from0$83$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$83$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$84$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$59$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$85$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$86$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$5$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$87$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$87$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$87$(self)) {
    moonbitlang$core$abort$$abort$24$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$56$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$5$(self) : Option$None$5$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$57$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$58$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$59$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$8$(self) : Option$None$8$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$88$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$88$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$88$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$88$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$88$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$86$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$89$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$90$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$58$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$91$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$57$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$91$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$56$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$59$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$59$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$5$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$backend$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$58$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$90$(rami3l$js$45$ffi$js$$Nullable$unwrap$87$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$59$(rami3l$js$45$ffi$js$$Union5$to0$84$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const _bind$56 = { _0: 0, _1: 0 };
  const _bind$57 = moonbitlang$core$ref$$Ref$new$28$(undefined);
  return { canvas: canvas, context: context, viewport_size: _bind$56, zoom: 1, time_scale: 1, mouse_movement: _bind$57 };
}
function Milky2018$selene$backend$$register_mouse_events(mouse, mouse_movement) {
  Milky2018$selene$backend$$canvas_backend.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$89$(Milky2018$selene$backend$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$57$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$91$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$88$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$88$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$88$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$88$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$89$(Milky2018$selene$backend$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$57$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$91$(event));
    const _bind$56 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$88$(mouse_event);
    switch (_bind$56) {
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$89$(Milky2018$selene$backend$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$57$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$91$(event));
    const _bind$56 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$88$(mouse_event);
    switch (_bind$56) {
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
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$89$(Milky2018$selene$backend$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$56$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$91$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$4$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$89$(Milky2018$selene$backend$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$56$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$91$(event));
    const keycode = Milky2018$selene$inputs$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
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
function Milky2018$selene$backend$$get_image_element(png) {
  const _bind$56 = moonbitlang$core$builtin$$Map$get$18$(Milky2018$selene$backend$$element_cache, png);
  if (_bind$56.$tag === 1) {
    const _Some = _bind$56;
    const _element = _Some._0;
    return _element;
  }
  const element = Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new();
  Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src(element, png);
  moonbitlang$core$builtin$$Map$set$18$(Milky2018$selene$backend$$element_cache, png, element);
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
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(context, rami3l$js$45$ffi$js$$Union7$from0$85$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from2$83$(pattern));
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
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(context, rami3l$js$45$ffi$js$$Union3$from0$83$(color));
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
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$83$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(context, text, x, y, Option$None$9$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(context);
}
function Milky2018$selene$backend$$draw_color_rect(x, y, width, height, color) {
  const context = Milky2018$selene$backend$$canvas_backend.context;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(context, rami3l$js$45$ffi$js$$Union3$from0$83$(color));
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
    moonbitlang$core$builtin$$println$50$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
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
    const _bind$56 = Milky2018$selene$backend$$canvas_backend.mouse_movement.val;
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
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
function Milky2018$selene$system$$timer_system(delta) {
  const _p = [];
  const _p$2 = Milky2018$selene$system$$timers.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$3 = _tmp$6;
    if (_p$3 < _p$2) {
      const _p$4 = Milky2018$selene$system$$timers[_p$3];
      if (_p$4.pausible) {
        moonbitlang$core$array$$Array$push$19$(_p, _p$4);
      }
      _tmp$6 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p;
  const _len = _arr.length;
  let _tmp$7 = 0;
  while (true) {
    const _i = _tmp$7;
    if (_i < _len) {
      const timer = _arr[_i];
      timer.rest = timer.rest - delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$7 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$3 = Milky2018$selene$system$$timers.length;
  let _tmp$8 = 0;
  let _tmp$9 = 0;
  while (true) {
    const _p$4 = _tmp$8;
    const _p$5 = _tmp$9;
    if (_p$4 < _p$3) {
      const _p$6 = Milky2018$selene$system$$timers[_p$4];
      if (_p$6.rest > 0) {
        Milky2018$selene$system$$timers[_p$5] = _p$6;
        _tmp$8 = _p$4 + 1 | 0;
        _tmp$9 = _p$5 + 1 | 0;
        continue;
      }
      _tmp$8 = _p$4 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$19$(Milky2018$selene$system$$timers, _p$5);
      return;
    }
  }
}
function Milky2018$selene$system$$realtime_timer_system(_delta) {
  const _p = [];
  const _p$2 = Milky2018$selene$system$$timers.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$3 = _tmp$6;
    if (_p$3 < _p$2) {
      const _p$4 = Milky2018$selene$system$$timers[_p$3];
      if (!_p$4.pausible) {
        moonbitlang$core$array$$Array$push$19$(_p, _p$4);
      }
      _tmp$6 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = _p;
  const _len = _arr.length;
  let _tmp$7 = 0;
  while (true) {
    const _i = _tmp$7;
    if (_i < _len) {
      const timer = _arr[_i];
      const realtime_delta = Milky2018$selene$backend$$realtime_delta.val;
      timer.rest = timer.rest - realtime_delta;
      if (timer.rest <= 0) {
        const _func = timer.callback;
        _func();
      }
      _tmp$7 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$3 = Milky2018$selene$system$$timers.length;
  let _tmp$8 = 0;
  let _tmp$9 = 0;
  while (true) {
    const _p$4 = _tmp$8;
    const _p$5 = _tmp$9;
    if (_p$4 < _p$3) {
      const _p$6 = Milky2018$selene$system$$timers[_p$4];
      if (_p$6.rest > 0) {
        Milky2018$selene$system$$timers[_p$5] = _p$6;
        _tmp$8 = _p$4 + 1 | 0;
        _tmp$9 = _p$5 + 1 | 0;
        continue;
      }
      _tmp$8 = _p$4 + 1 | 0;
      continue;
    } else {
      moonbitlang$core$array$$Array$unsafe_truncate_to_length$19$(Milky2018$selene$system$$timers, _p$5);
      return;
    }
  }
}
function Milky2018$selene$system$$deferred_event_system(_delta) {
  while (true) {
    const _bind$56 = moonbitlang$core$array$$Array$pop$16$(Milky2018$selene$system$$deferred_events);
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _event = _Some;
      _event();
      continue;
    }
  }
}
function Milky2018$selene$system$$defer_event(event) {
  moonbitlang$core$array$$Array$push$16$(Milky2018$selene$system$$deferred_events, event);
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
  moonbitlang$core$array$$Array$push$76$(plugins, plugin);
  return { ...self, plugins: plugins };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  const _p = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$20$(self.systems.length)}`;
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = _p;
  } else {
    const _p$2 = system_name;
    system_name$2 = _p$2;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$75$(systems, { _0: system, _1: schedule, _2: system_name$2 });
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
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const plugin = _arr[_i];
      plugin(self);
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const startup = () => {
    const _arr$2 = self.systems;
    const _len$2 = _arr$2.length;
    let _tmp$7 = 0;
    while (true) {
      const _i = _tmp$7;
      if (_i < _len$2) {
        const system = _arr$2[_i];
        const _bind$56 = system._1;
        if (_bind$56.$tag === 0) {
          const _func = system._0;
          _func(0);
        }
        _tmp$7 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const renders = [];
  const _arr$2 = self.systems;
  const _len$2 = _arr$2.length;
  let _tmp$7 = 0;
  while (true) {
    const _i = _tmp$7;
    if (_i < _len$2) {
      const system = _arr$2[_i];
      const _bind$56 = system._1;
      if (_bind$56.$tag === 2) {
        const _Render = _bind$56;
        const _pri = _Render._0;
        moonbitlang$core$array$$Array$push$46$(renders, { _0: system._0, _1: _pri });
      }
      _tmp$7 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$sort_by_key$82$(renders, (system) => -system._1 | 0);
  const render_loop = (delta) => {
    const _len$3 = renders.length;
    let _tmp$8 = 0;
    while (true) {
      const _i = _tmp$8;
      if (_i < _len$3) {
        const render = renders[_i];
        const _func = render._0;
        _func(delta);
        _tmp$8 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const game_loops = [];
  const _arr$3 = self.systems;
  const _len$3 = _arr$3.length;
  let _tmp$8 = 0;
  while (true) {
    const _i = _tmp$8;
    if (_i < _len$3) {
      const system = _arr$3[_i];
      const _bind$56 = system._1;
      if (_bind$56.$tag === 1) {
        moonbitlang$core$array$$Array$push$74$(game_loops, system._0);
      }
      _tmp$8 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const game_loop = (delta) => {
    const _len$4 = game_loops.length;
    let _tmp$9 = 0;
    while (true) {
      const _i = _tmp$9;
      if (_i < _len$4) {
        const system = game_loops[_i];
        system(delta);
        _tmp$9 = _i + 1 | 0;
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
function moonbitlang$core$builtin$$Hash$hash_combine$1$(_x_29, _x_30) {
  moonbitlang$core$builtin$$Hash$hash_combine$31$(_x_29, _x_30);
}
function Milky2018$selene$entity$$iter_entities() {
  return moonbitlang$core$set$$Set$iter$1$(Milky2018$selene$entity$$all_entities);
}
function Milky2018$selene$entity$$Entity$is_alive(e) {
  return moonbitlang$core$set$$Set$contains$1$(Milky2018$selene$entity$$all_entities, e);
}
function Milky2018$selene$entity$$Entity$new() {
  const entity = Milky2018$selene$entity$$entity_generator.val;
  Milky2018$selene$entity$$entity_generator.val = (Milky2018$selene$entity$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$1$(Milky2018$selene$entity$$all_entities, entity);
  return entity;
}
function Milky2018$selene$entity$$Entity$destroy(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$remove$1$(Milky2018$selene$entity$$all_entities, e);
  });
  const _bind$56 = moonbitlang$core$builtin$$Map$get$6$(Milky2018$selene$entity$$parents, e);
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _p = _Some;
    const _arr = _p.children;
    const _len = _arr.length;
    let _tmp$6 = 0;
    while (true) {
      const _i = _tmp$6;
      if (_i < _len) {
        const c = _arr[_i];
        Milky2018$selene$entity$$Entity$destroy(c);
        _tmp$6 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function Milky2018$selene$entity$$Entity$respawn(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$add$1$(Milky2018$selene$entity$$all_entities, e);
  });
  const _bind$56 = moonbitlang$core$builtin$$Map$get$6$(Milky2018$selene$entity$$parents, e);
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _p = _Some;
    const _arr = _p.children;
    const _len = _arr.length;
    let _tmp$6 = 0;
    while (true) {
      const _i = _tmp$6;
      if (_i < _len) {
        const c = _arr[_i];
        Milky2018$selene$entity$$Entity$respawn(c);
        _tmp$6 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function Milky2018$selene$entity$$Entity$spawn_child(parent, offset) {
  const child_entity = Milky2018$selene$entity$$Entity$new();
  const p = moonbitlang$core$builtin$$Map$get_or_init$6$(Milky2018$selene$entity$$parents, parent, () => ({ children: [], is_root: !moonbitlang$core$builtin$$Map$contains$7$(Milky2018$selene$entity$$children, parent) }));
  moonbitlang$core$array$$Array$push$1$(p.children, child_entity);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$entity$$children, child_entity, { parent: parent, offset: moonbitlang$core$option$$Option$unwrap_or_default$35$(offset) });
  return child_entity;
}
function Milky2018$selene$entity$$Entity$get_children(parent) {
  return moonbitlang$core$option$$Option$map_or$33$(moonbitlang$core$builtin$$Map$get$6$(Milky2018$selene$entity$$parents, parent), [], (p) => p.children);
}
function Milky2018$selene$entity$$Entity$is_child(entity) {
  return moonbitlang$core$builtin$$Map$contains$7$(Milky2018$selene$entity$$children, entity);
}
function Milky2018$selene$entity$$Entity$set_offset(child, offset) {
  const _p = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$entity$$children, child);
  let _tmp$6;
  if (_p === undefined) {
    _tmp$6 = $panic();
  } else {
    const _p$2 = _p;
    _tmp$6 = _p$2;
  }
  _tmp$6.offset = offset;
}
function Milky2018$selene$entity$$get_roots() {
  const _bind$56 = moonbitlang$core$builtin$$Map$iter$6$(Milky2018$selene$entity$$parents);
  return (_p) => _bind$56((_p$2) => _p$2._1.is_root ? _p(_p$2._0) : 1);
}
function Milky2018$selene$camera$$set_limits(top, bottom, left, right) {
  Milky2018$selene$camera$$camera.limit_top = top;
  Milky2018$selene$camera$$camera.limit_bottom = bottom;
  Milky2018$selene$camera$$camera.limit_left = left;
  Milky2018$selene$camera$$camera.limit_right = right;
}
function Milky2018$selene$camera$$camera_system(_delta) {
  const _bind$56 = Milky2018$selene$camera$$camera.attached_entity;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _e = _Some;
    const _bind$57 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, _e);
    if (_bind$57 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$57;
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
      const _bind$58 = Milky2018$selene$camera$$camera.limit_top;
      if (_bind$58.$tag === 1) {
        const _Some$3 = _bind$58;
        const _top = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) < _top) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _top };
        }
      }
      const _bind$59 = Milky2018$selene$camera$$camera.limit_bottom;
      if (_bind$59.$tag === 1) {
        const _Some$3 = _bind$59;
        const _bottom = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) > _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1)) {
          Milky2018$selene$camera$$camera.position = { _0: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0), _1: _bottom - Milky2018$selene$math$$Vec2D$op_get(viewport_size, 1) };
        }
      }
      const _bind$60 = Milky2018$selene$camera$$camera.limit_left;
      if (_bind$60.$tag === 1) {
        const _Some$3 = _bind$60;
        const _left = _Some$3._0;
        if (Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 0) < _left) {
          Milky2018$selene$camera$$camera.position = { _0: _left, _1: Milky2018$selene$math$$Vec2D$op_get(Milky2018$selene$camera$$camera.position, 1) };
        }
      }
      const _bind$61 = Milky2018$selene$camera$$camera.limit_right;
      if (_bind$61.$tag === 1) {
        const _Some$3 = _bind$61;
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
  const _bind$56 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(animation, 0);
  return { sprite_type: _bind$56, zindex: zindex, visible: true, offset: offset };
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
  const _bind$56 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(text);
  return { sprite_type: _bind$56, zindex: zindex, visible: true, offset: offset };
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
  const _bind$56 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect(color_rect);
  return { sprite_type: _bind$56, zindex: zindex, visible: true, offset: offset };
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
  const frame = moonbitlang$core$array$$Array$at$47$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
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
  const _bind$56 = color_rect.stroke_color;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
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
  const _p = moonbitlang$core$builtin$$Map$to_array$15$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$4 = _tmp$6;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (Milky2018$selene$entity$$Entity$is_alive(_p$5._0)) {
        moonbitlang$core$array$$Array$push$49$(_p$2, _p$5);
      }
      _tmp$6 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by$49$(sprites, (sprite1, sprite2) => {
    if (sprite1._1.zindex < sprite2._1.zindex) {
      return -1;
    } else {
      if (sprite1._1.zindex > sprite2._1.zindex) {
        return 1;
      } else {
        const _bind$56 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, sprite1._0);
        if (_bind$56 === undefined) {
          return 0;
        } else {
          const _Some = _bind$56;
          const _pos1 = _Some;
          const _bind$57 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, sprite2._0);
          if (_bind$57 === undefined) {
            return 0;
          } else {
            const _Some$2 = _bind$57;
            const _pos2 = _Some$2;
            return Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) < Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? -1 : Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) > Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? 1 : 0;
          }
        }
      }
    }
  });
  const _len = sprites.length;
  let _tmp$7 = 0;
  while (true) {
    const _i = _tmp$7;
    if (_i < _len) {
      _L: {
        const sprite = sprites[_i];
        const e = sprite._0;
        const sprite$2 = sprite._1;
        const _bind$56 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, e);
        if (_bind$56 === undefined) {
          break _L;
        } else {
          const _Some = _bind$56;
          const _pos = _Some;
          const _bind$57 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$ui$$uis, e);
          let pos;
          if (_bind$57 === -1) {
            const _p$4 = Milky2018$selene$camera$$camera.position;
            pos = { _0: _pos._0 - _p$4._0, _1: _pos._1 - _p$4._1 };
          } else {
            pos = _pos;
          }
          const _bind$58 = sprite$2.sprite_type;
          switch (_bind$58.$tag) {
            case 0: {
              const _Picture = _bind$58;
              const _picture = _Picture._0;
              if (sprite$2.visible) {
                const _p$4 = sprite$2.offset;
                Milky2018$selene$sprite$$render_picture(_picture, { _0: pos._0 + _p$4._0, _1: pos._1 + _p$4._1 });
              }
              break;
            }
            case 1: {
              const _Animation = _bind$58;
              const _anime = _Animation._0;
              const _frame = _Animation._1;
              const _p$4 = sprite$2.offset;
              const _tmp$8 = { _0: pos._0 + _p$4._0, _1: pos._1 + _p$4._1 };
              const new_frame = Milky2018$selene$sprite$$render_animation(_anime, _frame, _tmp$8, sprite$2.visible, delta);
              _Animation._1 = new_frame;
              break;
            }
            case 2: {
              const _Text = _bind$58;
              const _text = _Text._0;
              if (sprite$2.visible) {
                const _p$5 = sprite$2.offset;
                Milky2018$selene$sprite$$render_text(_text, { _0: pos._0 + _p$5._0, _1: pos._1 + _p$5._1 });
              }
              break;
            }
            default: {
              const _ColorRect = _bind$58;
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
      _tmp$7 = _i + 1 | 0;
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
    moonbitlang$core$abort$$abort$24$("Animation must have at least one frame");
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
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < frame_count) {
      const x = Milky2018$selene$math$$Vec2D$op_get(offset, 0) + (i + 0) * (width + space_x);
      moonbitlang$core$array$$Array$push$47$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: Milky2018$selene$math$$Vec2D$update(offset, 0, x) });
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return frames;
}
function Milky2018$selene$collision$$QuadTree$new(position, size, depth) {
  const _bind$56 = moonbitlang$core$set$$Set$new$46$inner$1$(8);
  const _bind$57 = [];
  const _bind$58 = { position: position, size: size };
  return { position: position, size: size, children: _bind$57, depth: depth, bounding_box: _bind$58, entities: _bind$56 };
}
function Milky2018$selene$collision$$QuadTree$is_smallest_size(self) {
  return Milky2018$selene$math$$Vec2D$op_get(self.size, 0) <= 64 || Milky2018$selene$math$$Vec2D$op_get(self.size, 1) <= 64;
}
function Milky2018$selene$collision$$QuadTree$insert(self, entity, box) {
  if (!Milky2018$selene$math$$Rect$intersects(self.bounding_box, box)) {
    return undefined;
  }
  if (Milky2018$selene$collision$$QuadTree$is_smallest_size(self)) {
    moonbitlang$core$set$$Set$add$1$(self.entities, entity);
    return undefined;
  }
  const _p = self.children;
  if (_p.length === 0) {
    const half_size = { _0: Milky2018$selene$math$$Vec2D$op_get(self.size, 0) * 0.5, _1: Milky2018$selene$math$$Vec2D$op_get(self.size, 1) * 0.5 };
    const _self = self.children;
    moonbitlang$core$array$$Array$push$10$(_self, Milky2018$selene$collision$$QuadTree$new(self.position, half_size, self.depth + 1 | 0));
    const _p$2 = self.position;
    const _p$3 = { _0: Milky2018$selene$math$$Vec2D$op_get(half_size, 0), _1: 0 };
    moonbitlang$core$array$$Array$push$10$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$2._0 + _p$3._0, _1: _p$2._1 + _p$3._1 }, half_size, self.depth + 1 | 0));
    const _p$4 = self.position;
    const _p$5 = { _0: 0, _1: Milky2018$selene$math$$Vec2D$op_get(half_size, 1) };
    moonbitlang$core$array$$Array$push$10$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$4._0 + _p$5._0, _1: _p$4._1 + _p$5._1 }, half_size, self.depth + 1 | 0));
    const _p$6 = self.position;
    moonbitlang$core$array$$Array$push$10$(_self, Milky2018$selene$collision$$QuadTree$new({ _0: _p$6._0 + half_size._0, _1: _p$6._1 + half_size._1 }, half_size, self.depth + 1 | 0));
  }
  const _arr = self.children;
  const _len = _arr.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const child = _arr[_i];
      Milky2018$selene$collision$$QuadTree$insert(child, entity, box);
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$collision$$quadtree_query(area) {
  const _bind$56 = [Milky2018$selene$collision$$quadtree_root.val];
  const trees = { val: moonbitlang$core$list$$List$from_array$10$({ buf: _bind$56, start: 0, end: 1 }) };
  let results = moonbitlang$core$set$$Set$new$46$inner$1$(8);
  while (true) {
    const _bind$57 = trees.val;
    if (_bind$57.$tag === 1) {
      const _More = _bind$57;
      const _hd = _More._0;
      const _rest = _More._1;
      trees.val = _rest;
      if (!Milky2018$selene$math$$Rect$intersects(_hd.bounding_box, area)) {
        continue;
      }
      const _bind$58 = _hd.children;
      if (_bind$58.length === 0) {
        results = moonbitlang$core$set$$Set$union$1$(results, _hd.entities);
      } else {
        const _p = _hd.children;
        const _p$2 = _p.length;
        let _tmp$6 = 0;
        while (true) {
          const _p$3 = _tmp$6;
          if (_p$3 < _p$2) {
            const _p$4 = _p[_p$3];
            const _p$5 = trees.val;
            trees.val = new $64$moonbitlang$47$core$47$list$46$List$More$2$(_p$4, _p$5);
            _tmp$6 = _p$3 + 1 | 0;
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
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$8$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _e = _x._0;
      const _shape = _x._1;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        const _bind$57 = moonbitlang$core$builtin$$Map$get$3$(Milky2018$selene$ui$$uis, _e);
        if (_bind$57 === -1) {
          const _bind$58 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, _e);
          if (_bind$58 === undefined) {
            continue;
          } else {
            const _Some$2 = _bind$58;
            const _position = _Some$2;
            const _Rect = _shape;
            const _x$2 = _Rect._0;
            const _width = _x$2._0;
            const _height = _x$2._1;
            const _offset = _Rect._1;
            const _bind$59 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
            const _bind$60 = { _0: _width, _1: _height };
            const box = { position: _bind$59, size: _bind$60 };
            moonbitlang$core$array$$Array$push$77$(boxes, { _0: _e, _1: box });
            const _p = left_limit;
            const _p$2 = Milky2018$selene$math$$Vec2D$op_get(_bind$59, 0);
            left_limit = _p > _p$2 ? _p$2 : _p;
            const _p$3 = right_limit;
            const _p$4 = Milky2018$selene$math$$Vec2D$op_get(_bind$59, 0) + Milky2018$selene$math$$Vec2D$op_get(_bind$60, 0);
            right_limit = _p$3 > _p$4 ? _p$3 : _p$4;
            const _p$5 = top_limit;
            const _p$6 = Milky2018$selene$math$$Vec2D$op_get(_bind$59, 1);
            top_limit = _p$5 > _p$6 ? _p$6 : _p$5;
            const _p$7 = bottom_limit;
            const _p$8 = Milky2018$selene$math$$Vec2D$op_get(_bind$59, 1) + Milky2018$selene$math$$Vec2D$op_get(_bind$60, 1);
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
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const box = boxes[_i];
      Milky2018$selene$collision$$QuadTree$insert(Milky2018$selene$collision$$quadtree_root.val, box._0, box._1);
      _tmp$6 = _i + 1 | 0;
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
  moonbitlang$core$array$$Array$push$78$(self.on_just_pressed_callbacks, callback);
}
function Milky2018$selene$collision$$pickable_click_system(_delta) {
  const zoom = Milky2018$selene$backend$$canvas_backend.zoom;
  const _bind$56 = { _0: 1, _1: 1 };
  const _p = Milky2018$selene$inputs$$mouse.pos;
  const _p$2 = { _0: 1 / zoom, _1: 1 / zoom };
  const _bind$57 = { _0: _p._0 * _p$2._0, _1: _p._1 * _p$2._1 };
  const box = { position: _bind$57, size: _bind$56 };
  const _it = moonbitlang$core$builtin$$Map$iterator2$3$(Milky2018$selene$ui$$uis);
  while (true) {
    const _bind$58 = moonbitlang$core$builtin$$Iterator2$next$3$(_it);
    if (_bind$58 === undefined) {
      break;
    } else {
      const _Some = _bind$58;
      const _x = _Some;
      const _e = _x._0;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        const _bind$59 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$pickables, _e);
        if (_bind$59 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$59;
          const _pick = _Some$2;
          const _bind$60 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, _e);
          if (_bind$60 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$60;
            const _position = _Some$3;
            const _bind$61 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _e);
            if (_bind$61 === undefined) {
              continue;
            } else {
              const _Some$4 = _bind$61;
              const _shape = _Some$4;
              const _Rect = _shape;
              const _x$2 = _Rect._0;
              const _width = _x$2._0;
              const _height = _x$2._1;
              const _offset = _Rect._1;
              const _bind$62 = { _0: _width, _1: _height };
              const _bind$63 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
              const area_box = { position: _bind$63, size: _bind$62 };
              if (!Milky2018$selene$math$$Rect$intersects(box, area_box)) {
                continue;
              }
              const _arr = [0, 1, 2];
              const _len = _arr.length;
              let _tmp$6 = 0;
              while (true) {
                const _i = _tmp$6;
                if (_i < _len) {
                  const button = _arr[_i];
                  if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
                    const _arr$2 = _pick.on_pressed_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  if (Milky2018$selene$inputs$$is_mouse_released(button)) {
                    const _arr$2 = _pick.on_released_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
                    const _arr$2 = _pick.on_just_pressed_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
                    const _arr$2 = _pick.on_just_released_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  _tmp$6 = _i + 1 | 0;
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
  const _it$2 = moonbitlang$core$set$$Set$iterator$1$(entities);
  while (true) {
    const _bind$58 = moonbitlang$core$builtin$$Iterator$next$1$(_it$2);
    if (_bind$58 === undefined) {
      return;
    } else {
      const _Some = _bind$58;
      const _e = _Some;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        const _bind$59 = moonbitlang$core$builtin$$Map$get$9$(Milky2018$selene$collision$$pickables, _e);
        if (_bind$59 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$59;
          const _pick = _Some$2;
          const _bind$60 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, _e);
          if (_bind$60 === undefined) {
            continue;
          } else {
            const _Some$3 = _bind$60;
            const _position = _Some$3;
            const _bind$61 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _e);
            if (_bind$61 === undefined) {
              continue;
            } else {
              const _Some$4 = _bind$61;
              const _shape = _Some$4;
              const _Rect = _shape;
              const _x = _Rect._0;
              const _width = _x._0;
              const _height = _x._1;
              const _offset = _Rect._1;
              const _bind$62 = { _0: _width, _1: _height };
              const _bind$63 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
              const area_box = { position: _bind$63, size: _bind$62 };
              if (!Milky2018$selene$math$$Rect$intersects(Milky2018$selene$math$$Rect$shift(box, Milky2018$selene$camera$$camera.position), area_box)) {
                continue;
              }
              const _arr = [0, 1, 2];
              const _len = _arr.length;
              let _tmp$6 = 0;
              while (true) {
                const _i = _tmp$6;
                if (_i < _len) {
                  const button = _arr[_i];
                  if (Milky2018$selene$inputs$$is_mouse_pressed(button)) {
                    const _arr$2 = _pick.on_pressed_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  if (Milky2018$selene$inputs$$is_mouse_released(button)) {
                    const _arr$2 = _pick.on_released_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  if (Milky2018$selene$inputs$$is_mouse_just_pressed(button)) {
                    const _arr$2 = _pick.on_just_pressed_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  if (Milky2018$selene$inputs$$is_mouse_just_released(button)) {
                    const _arr$2 = _pick.on_just_released_callbacks;
                    const _len$2 = _arr$2.length;
                    let _tmp$7 = 0;
                    while (true) {
                      const _i$2 = _tmp$7;
                      if (_i$2 < _len$2) {
                        const callback = _arr$2[_i$2];
                        callback(button);
                        _tmp$7 = _i$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  _tmp$6 = _i + 1 | 0;
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
  const _bind$56 = moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$collision_infos, entity);
  if (_bind$56.$tag === 0) {
    moonbitlang$core$builtin$$Map$set$12$(Milky2018$selene$collision$$collision_infos, entity, moonbitlang$core$array$$Array$new$46$inner$79$(0));
  }
  moonbitlang$core$array$$Array$push$79$(moonbitlang$core$option$$Option$unwrap$60$(moonbitlang$core$builtin$$Map$get$12$(Milky2018$selene$collision$$collision_infos, entity)), { entity: target, direction: direction });
}
function Milky2018$selene$collision$$make_ray_collision(object, speed, axis) {
  const pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  const size = { _0: Milky2018$selene$math$$Vec2D$op_get(object.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.size, 1) };
  return speed >= 0 ? { position: pos, size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) + speed) } : { position: Milky2018$selene$math$$Vec2D$update(pos, axis, Milky2018$selene$math$$Vec2D$op_get(pos, axis) + speed), size: Milky2018$selene$math$$Vec2D$update(size, axis, Milky2018$selene$math$$Vec2D$op_get(size, axis) - speed) };
}
function Milky2018$selene$collision$$CollisionMask$contains(self, layer) {
  return moonbitlang$core$array$$Array$contains$81$(self, layer);
}
function Milky2018$selene$collision$$move_axis(entity, object, velocity, axis, mask) {
  const ray_collision = Milky2018$selene$collision$$make_ray_collision(object, Milky2018$selene$math$$Vec2D$op_get(velocity, axis), axis);
  let new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(object.position, 0), _1: Milky2018$selene$math$$Vec2D$op_get(object.position, 1) };
  new_pos = Milky2018$selene$math$$Vec2D$update(new_pos, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) + Milky2018$selene$math$$Vec2D$op_get(velocity, axis));
  let new_velocity = velocity;
  const entities = Milky2018$selene$collision$$quadtree_query(ray_collision);
  const _it = moonbitlang$core$set$$Set$iterator$1$(entities);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator$next$1$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _e = _Some;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        if (moonbitlang$core$builtin$$op_notequal$1$(_e, entity)) {
          const _bind$57 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _e);
          if (_bind$57 === undefined) {
            continue;
          } else {
            const _Some$2 = _bind$57;
            const _shape = _Some$2;
            const _Rect = _shape;
            const _x = _Rect._0;
            const _width = _x._0;
            const _height = _x._1;
            const _offset = _Rect._1;
            const _bind$58 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, _e);
            if (_bind$58 === undefined) {
              continue;
            } else {
              const _Some$3 = _bind$58;
              const _pos = _Some$3;
              const _bind$59 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$collision$$collision_layers, _e);
              if (_bind$59 === undefined) {
                continue;
              } else {
                const _Some$4 = _bind$59;
                const _collision_layer = _Some$4;
                if (Milky2018$selene$collision$$CollisionMask$contains(mask, _collision_layer)) {
                  const _bind$60 = { _0: _width, _1: _height };
                  const _bind$61 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
                  const collision_box = { position: _bind$61, size: _bind$60 };
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
                      const _tmp$6 = new_pos;
                      const _p = Milky2018$selene$math$$Vec2D$op_get(_bind$61, axis) - Milky2018$selene$math$$Vec2D$op_get(object.size, axis);
                      const _p$2 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                      new_pos = Milky2018$selene$math$$Vec2D$update(_tmp$6, axis, _p > _p$2 ? _p : _p$2);
                      new_velocity = Milky2018$selene$math$$Vec2D$update(new_velocity, axis, Milky2018$selene$math$$Vec2D$op_get(new_pos, axis) - Milky2018$selene$math$$Vec2D$op_get(object.position, axis));
                      dir = Milky2018$selene$math$$Vec2D$update(dir, axis, 1);
                    } else {
                      if (Milky2018$selene$math$$Vec2D$op_get(new_velocity, axis) < 0) {
                        const _tmp$6 = new_pos;
                        const _p = Milky2018$selene$math$$Vec2D$op_get(_bind$61, axis) + Milky2018$selene$math$$Vec2D$op_get(_bind$60, axis);
                        const _p$2 = Milky2018$selene$math$$Vec2D$op_get(object.position, axis);
                        new_pos = Milky2018$selene$math$$Vec2D$update(_tmp$6, axis, _p > _p$2 ? _p$2 : _p);
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
  const _bind$56 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, e);
  if (_bind$56 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$56;
    const _pos = _Some;
    const _bind$57 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, e);
    if (_bind$57 === undefined) {
      return $panic();
    } else {
      const _Some$2 = _bind$57;
      const _shape = _Some$2;
      const _Rect = _shape;
      const _x = _Rect._0;
      const _width = _x._0;
      const _height = _x._1;
      const _offset = _Rect._1;
      const _bind$58 = { _0: _pos._0 + _offset._0, _1: _pos._1 + _offset._1 };
      const _bind$59 = { _0: _width, _1: _height };
      const box = { position: _bind$58, size: _bind$59 };
      const new_x = Milky2018$selene$collision$$move_axis(e, box, velocity, 0, collider.mask);
      const _bind$60 = new_x._0;
      const object_x = { position: _bind$60, size: _bind$59 };
      const new_y = Milky2018$selene$collision$$move_axis(e, object_x, new_x._1, 1, collider.mask);
      const _p = new_y._0;
      moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$position$$positions, e, { _0: _p._0 - _offset._0, _1: _p._1 - _offset._1 });
      return new_y._1;
    }
  }
}
function Milky2018$selene$collision$$move_without_collide(e, velocity) {
  const _bind$56 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, e);
  if (_bind$56 === undefined) {
    $panic();
    return;
  } else {
    const _Some = _bind$56;
    const _pos = _Some;
    const new_pos = { _0: Milky2018$selene$math$$Vec2D$op_get(_pos, 0) + Milky2018$selene$math$$Vec2D$op_get(velocity, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_pos, 1) + Milky2018$selene$math$$Vec2D$op_get(velocity, 1) };
    moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$position$$positions, e, new_pos);
    return;
  }
}
function Milky2018$selene$collision$$move_system(delta) {
  moonbitlang$core$builtin$$Map$clear$12$(Milky2018$selene$collision$$collision_infos);
  const _it = moonbitlang$core$builtin$$Map$iterator2$11$(Milky2018$selene$velocity$$velocities);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$11$(_it);
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _e = _x._0;
      const _vel = _x._1;
      if (Milky2018$selene$entity$$Entity$is_alive(_e)) {
        _L: {
          _L$2: {
            const _bind$57 = moonbitlang$core$builtin$$Map$get$13$(Milky2018$selene$collision$$colliders, _e);
            if (_bind$57 === undefined) {
              break _L$2;
            } else {
              const _Some$2 = _bind$57;
              const _collide = _Some$2;
              if (_collide.active) {
                const new_vel = Milky2018$selene$collision$$move_with_collide(_e, _collide, { _0: _vel._0 * delta, _1: _vel._1 * delta });
                moonbitlang$core$builtin$$Map$set$11$(Milky2018$selene$collision$$real_velocities, _e, { _0: new_vel._0 / delta, _1: new_vel._1 / delta });
              } else {
                break _L$2;
              }
            }
            break _L;
          }
          Milky2018$selene$collision$$move_without_collide(_e, { _0: _vel._0 * delta, _1: _vel._1 * delta });
          moonbitlang$core$builtin$$Map$set$11$(Milky2018$selene$collision$$real_velocities, _e, _vel);
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
  const _bind$56 = Milky2018$selene$entity$$iter_entities();
  _bind$56((e) => {
    const _bind$57 = moonbitlang$core$builtin$$Map$get$17$(Milky2018$selene$collision$$areas, e);
    if (_bind$57 === undefined) {
      return 1;
    } else {
      const _Some = _bind$57;
      const _area = _Some;
      const _bind$58 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, e);
      if (_bind$58 === undefined) {
        $panic();
      } else {
        const _Some$2 = _bind$58;
        const _position = _Some$2;
        const _bind$59 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, e);
        if (_bind$59 === undefined) {
          return 1;
        } else {
          const _Some$3 = _bind$59;
          const _shape = _Some$3;
          const _Rect = _shape;
          const _x = _Rect._0;
          const _width = _x._0;
          const _height = _x._1;
          const _offset = _Rect._1;
          const _bind$60 = { _0: _width, _1: _height };
          const _bind$61 = { _0: _position._0 + _offset._0, _1: _position._1 + _offset._1 };
          const box = { position: _bind$61, size: _bind$60 };
          const new_contains = moonbitlang$core$set$$Set$new$46$inner$1$(8);
          const entities = Milky2018$selene$collision$$quadtree_query(box);
          const _it = moonbitlang$core$set$$Set$iterator$1$(entities);
          while (true) {
            const _bind$62 = moonbitlang$core$builtin$$Iterator$next$1$(_it);
            if (_bind$62 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$62;
              const _entity = _Some$4;
              if (Milky2018$selene$entity$$Entity$is_alive(_entity)) {
                const _bind$63 = moonbitlang$core$builtin$$Map$get$14$(Milky2018$selene$collision$$collision_layers, _entity);
                if (_bind$63 === undefined) {
                  continue;
                } else {
                  const _Some$5 = _bind$63;
                  const _other_layer = _Some$5;
                  const _bind$64 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, _entity);
                  if (_bind$64 === undefined) {
                    continue;
                  } else {
                    const _Some$6 = _bind$64;
                    const _other_shape = _Some$6;
                    const _Rect$2 = _other_shape;
                    const _x$2 = _Rect$2._0;
                    const _other_width = _x$2._0;
                    const _other_height = _x$2._1;
                    const _other_offset = _Rect$2._1;
                    const _bind$65 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, _entity);
                    if (_bind$65 === undefined) {
                      $panic();
                    } else {
                      const _Some$7 = _bind$65;
                      const _other_position = _Some$7;
                      const _bind$66 = { _0: _other_width, _1: _other_height };
                      const _bind$67 = { _0: _other_position._0 + _other_offset._0, _1: _other_position._1 + _other_offset._1 };
                      const other_box = { position: _bind$67, size: _bind$66 };
                      if (Milky2018$selene$math$$Rect$intersects(box, other_box)) {
                        if (Milky2018$selene$collision$$CollisionMask$contains(_area.mask, _other_layer)) {
                          moonbitlang$core$set$$Set$add$1$(new_contains, _entity);
                          if (moonbitlang$core$set$$Set$contains$1$(_area.contains, _entity)) {
                            continue;
                          }
                          const _arr = _area.on_enter_callbacks;
                          const _len = _arr.length;
                          let _tmp$6 = 0;
                          while (true) {
                            const _i = _tmp$6;
                            if (_i < _len) {
                              const callback = _arr[_i];
                              callback(_entity);
                              _tmp$6 = _i + 1 | 0;
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
          const _it$2 = moonbitlang$core$set$$Set$iterator$1$(_area.contains);
          while (true) {
            const _bind$62 = moonbitlang$core$builtin$$Iterator$next$1$(_it$2);
            if (_bind$62 === undefined) {
              break;
            } else {
              const _Some$4 = _bind$62;
              const _entity = _Some$4;
              if (moonbitlang$core$set$$Set$contains$1$(new_contains, _entity)) {
                continue;
              }
              const _arr = _area.on_exit_callbacks;
              const _len = _arr.length;
              let _tmp$6 = 0;
              while (true) {
                const _i = _tmp$6;
                if (_i < _len) {
                  const callback = _arr[_i];
                  callback(_entity);
                  _tmp$6 = _i + 1 | 0;
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
  const _tmp$6 = _foreach_result;
  switch (_tmp$6.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp$6;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp$6;
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
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      _L: {
        const c = _arr[_i];
        if (Milky2018$selene$entity$$Entity$is_alive(c)) {
          const _bind$56 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$position$$positions, entity);
          if (_bind$56 === undefined) {
            break _L;
          } else {
            const _Some = _bind$56;
            const _parent_position = _Some;
            const _p = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$entity$$children, c);
            let _tmp$7;
            if (_p === undefined) {
              _tmp$7 = $panic();
            } else {
              const _p$2 = _p;
              _tmp$7 = _p$2;
            }
            const offset = _tmp$7.offset;
            moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$position$$positions, c, { _0: _parent_position._0 + offset._0, _1: _parent_position._1 + offset._1 });
            Milky2018$selene$inherit$$adjust_children(c);
          }
        } else {
          break _L;
        }
        break _L;
      }
      _tmp$6 = _i + 1 | 0;
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
function Milky2018$selene$style$$get_zindex(entity) {
  return moonbitlang$core$option$$Option$map_or$34$(moonbitlang$core$builtin$$Map$get$15$(Milky2018$selene$sprite$$sprites, entity), 100, (s) => s.zindex);
}
function Milky2018$selene$style$$Style$new$46$inner(size_plan, flex, h_padding, v_padding, h_offset, v_offset) {
  return { size_plan: size_plan, flex: flex, h_padding: h_padding, v_padding: v_padding, h_offset: h_offset, v_offset: v_offset };
}
function Milky2018$selene$style$$add_widget$46$inner(parent, sprite, on_just_pressed, shape, size_plan, flex, h_padding, v_padding, h_offset, v_offset) {
  const child = Milky2018$selene$entity$$Entity$spawn_child(parent, undefined);
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$ui$$uis, child, Milky2018$selene$ui$$Ui$new());
  const style = Milky2018$selene$style$$Style$new$46$inner(size_plan, flex, h_padding, v_padding, h_offset, v_offset);
  moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$style$$styles, child, style);
  if (sprite === undefined) {
  } else {
    const _Some = sprite;
    const _sprite_maker = _Some;
    const zindex = Milky2018$selene$style$$get_zindex(parent) + 1 | 0;
    const sprite$2 = _sprite_maker(zindex);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, child, sprite$2);
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
    moonbitlang$core$builtin$$Map$set$9$(Milky2018$selene$collision$$pickables, child, pickable);
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
  const _bind$56 = moonbitlang$core$builtin$$Map$get$0$(Milky2018$selene$style$$styles, entity);
  if (_bind$56 === undefined) {
    return { _0: 0, _1: 0 };
  } else {
    const _Some = _bind$56;
    const _style = _Some;
    if (Milky2018$selene$entity$$Entity$is_child(entity)) {
      const _p = { _0: _style.h_offset, _1: _style.v_offset };
      Milky2018$selene$entity$$Entity$set_offset(entity, { _0: offset._0 + _p._0, _1: offset._1 + _p._1 });
    }
    const children = Milky2018$selene$entity$$Entity$get_children(entity);
    let cursor = { _0: _style.h_padding, _1: _style.v_padding };
    let max_width = 0;
    let max_height = 0;
    const _len = children.length;
    let _tmp$6 = 0;
    while (true) {
      const _i = _tmp$6;
      if (_i < _len) {
        const c = children[_i];
        const size = Milky2018$selene$style$$arrange(c, cursor);
        const _bind$57 = _style.flex;
        let _tmp$7;
        switch (_bind$57) {
          case 1: {
            _tmp$7 = Milky2018$selene$math$$Vec2D$update(cursor, 0, Milky2018$selene$math$$Vec2D$op_get(cursor, 0) + Milky2018$selene$math$$Vec2D$op_get(size, 0) + _style.h_padding);
            break;
          }
          case 0: {
            _tmp$7 = cursor;
            break;
          }
          default: {
            _tmp$7 = Milky2018$selene$math$$Vec2D$update(cursor, 1, Milky2018$selene$math$$Vec2D$op_get(cursor, 1) + Milky2018$selene$math$$Vec2D$op_get(size, 1) + _style.v_padding);
          }
        }
        cursor = _tmp$7;
        const _p = max_width;
        const _p$2 = Milky2018$selene$math$$Vec2D$op_get(size, 0);
        max_width = _p > _p$2 ? _p : _p$2;
        const _p$3 = max_height;
        const _p$4 = Milky2018$selene$math$$Vec2D$op_get(size, 1);
        max_height = _p$3 > _p$4 ? _p$3 : _p$4;
        _tmp$6 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$57 = _style.size_plan;
    switch (_bind$57.$tag) {
      case 1: {
        const _bind$58 = moonbitlang$core$builtin$$Map$get$15$(Milky2018$selene$sprite$$sprites, entity);
        if (_bind$58 === undefined) {
          return $panic();
        } else {
          const _Some$2 = _bind$58;
          const _sprite = _Some$2;
          const _bind$59 = _sprite.sprite_type;
          switch (_bind$59.$tag) {
            case 0: {
              const _Picture = _bind$59;
              const _picture = _Picture._0;
              return Milky2018$selene$math$$Transform$apply_to_vec2d(_picture.transform, _picture.size);
            }
            case 2: {
              return { _0: 48, _1: 24 };
            }
            case 1: {
              const _Animation = _bind$59;
              const _anime = _Animation._0;
              return Milky2018$selene$math$$Transform$apply_to_vec2d(_anime.transform, moonbitlang$core$array$$Array$at$47$(_anime.frames, 0).size);
            }
            default: {
              const _ColorRect = _bind$59;
              const _rect = _ColorRect._0;
              return _rect.size;
            }
          }
        }
      }
      case 0: {
        const _Sized = _bind$57;
        return _Sized._0;
      }
      case 2: {
        return { _0: max_width, _1: max_height };
      }
      default: {
        const _bind$59 = moonbitlang$core$builtin$$Map$get$8$(Milky2018$selene$collision$$shapes, entity);
        if (_bind$59 === undefined) {
          return $panic();
        } else {
          const _Some$2 = _bind$59;
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
  const _bind$56 = Milky2018$selene$entity$$get_roots();
  _bind$56((e) => {
    if (Milky2018$selene$entity$$Entity$is_alive(e)) {
      Milky2018$selene$style$$arrange(e, { _0: 0, _1: 0 });
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp$6 = _foreach_result;
  switch (_tmp$6.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp$6;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp$6;
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
(() => {
  moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$style$$styles, Milky2018$selene$style$$screen_root, Milky2018$selene$style$$Style$new$46$inner(new $64$Milky2018$47$selene$47$style$46$SizePlan$Sized(Milky2018$selene$backend$$canvas_backend.viewport_size), 0, 0, 0, 0, 0));
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$position$$positions, Milky2018$selene$style$$screen_root, { _0: 0, _1: 0 });
  moonbitlang$core$builtin$$Map$set$3$(Milky2018$selene$ui$$uis, Milky2018$selene$style$$screen_root, Milky2018$selene$ui$$Ui$new());
})();
function Milky2018$selene$plugins$$default_plugin(app) {
  const _self = app.systems;
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$collision$$move_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Move System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$inputs$$advanced_key_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Key System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$inputs$$advanced_mouse_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Advanced Mouse System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$collision$$quadtree_clear_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Quadtree Clear System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$collision$$pickable_click_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Pickable Click System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$collision$$area_collide_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Area Collide System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$system$$deferred_event_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Deferred Event System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$sprite$$render_sprite_system, _1: Milky2018$selene$plugins$$default_plugin$46$constr$47$4277, _2: "Render Sprite System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$camera$$camera_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Camera System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$system$$timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Timer System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$system$$realtime_timer_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Realtime Timer System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$inherit$$inherit_position_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Inherit Position System" });
  moonbitlang$core$array$$Array$push$75$(_self, { _0: Milky2018$selene$style$$style_system, _1: $64$Milky2018$47$selene$47$system$46$Schedule$Update, _2: "Style System" });
}
function nopublish$survivors$$gen_widget_id() {
  const id = nopublish$survivors$$_widget_id.val;
  nopublish$survivors$$_widget_id.val = id + 1 | 0;
  return id;
}
function nopublish$survivors$$Widget$new(off, shapeSize) {
  const _bind$56 = nopublish$survivors$$gen_widget_id();
  const _bind$57 = Milky2018$selene$entity$$Entity$spawn_child(Milky2018$selene$style$$screen_root, undefined);
  let _bind$58;
  if (off === undefined) {
    _bind$58 = { _0: 0, _1: 0 };
  } else {
    const _Some = off;
    _bind$58 = _Some;
  }
  const _bind$59 = [];
  const _bind$60 = undefined;
  const _bind$61 = [];
  let _bind$62;
  if (shapeSize === undefined) {
    _bind$62 = { _0: 20, _1: 20 };
  } else {
    const _Some = shapeSize;
    _bind$62 = _Some;
  }
  return { id: _bind$56, entity: _bind$57, visible: true, offset: _bind$58, shapeSize: _bind$62, children: _bind$59, parent: _bind$60, mouse_release: _bind$61, nick: nopublish$survivors$$new$46$42$bind$124$1235 };
}
function nopublish$survivors$$Widget$visible_in_tree(self) {
  if (!self.visible) {
    return false;
  }
  let node = self;
  while (true) {
    const _bind$56 = node.parent;
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _p = _Some;
      if (!_p.visible) {
        return false;
      }
      node = _p;
      continue;
    }
  }
  return true;
}
function nopublish$survivors$$Widget$get_abs_offset(self) {
  const _p = self.offset;
  let absOff = { _0: _p._0, _1: _p._1 };
  let node = self;
  while (true) {
    const _bind$56 = node.parent;
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _p$2 = _Some;
      const _p$3 = absOff;
      const _p$4 = _p$2.offset;
      absOff = { _0: _p$3._0 + _p$4._0, _1: _p$3._1 + _p$4._1 };
      node = _p$2;
      continue;
    }
  }
  return absOff;
}
function nopublish$survivors$$Widget$spread_refresh(self, show) {
  if (show) {
    const _arr = self.children;
    const _len = _arr.length;
    let _tmp$6 = 0;
    while (true) {
      const _i = _tmp$6;
      if (_i < _len) {
        const child = _arr[_i];
        if (child.visible) {
          Milky2018$selene$entity$$Entity$set_offset(child.entity, nopublish$survivors$$Widget$get_abs_offset(child));
          Milky2018$selene$entity$$Entity$respawn(child.entity);
        } else {
          Milky2018$selene$system$$deferred_event_system(0);
          if (Milky2018$selene$entity$$Entity$is_alive(child.entity)) {
            Milky2018$selene$entity$$Entity$destroy(child.entity);
          }
        }
        Milky2018$selene$system$$deferred_event_system(0);
        _tmp$6 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    const _arr = self.children;
    const _len = _arr.length;
    let _tmp$6 = 0;
    while (true) {
      const _i = _tmp$6;
      if (_i < _len) {
        const child = _arr[_i];
        Milky2018$selene$entity$$Entity$destroy(child.entity);
        Milky2018$selene$system$$deferred_event_system(0);
        nopublish$survivors$$Widget$spread_refresh(child, show);
        _tmp$6 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function nopublish$survivors$$Widget$__set_entity_style_offset$46$inner(self, off, size_plan, flex, h_padding, v_padding) {
  if (moonbitlang$core$builtin$$Map$contains$0$(Milky2018$selene$style$$styles, self.entity)) {
    moonbitlang$core$builtin$$Map$at$0$(Milky2018$selene$style$$styles, self.entity);
    moonbitlang$core$builtin$$Map$set$0$(Milky2018$selene$style$$styles, self.entity, Milky2018$selene$style$$Style$new$46$inner(size_plan, flex, h_padding, v_padding, off._0, off._1));
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Widget$__set_entity_style_offset(self, off, size_plan$46$opt, flex$46$opt, h_padding$46$opt, v_padding$46$opt) {
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
  nopublish$survivors$$Widget$__set_entity_style_offset$46$inner(self, off, size_plan, flex, h_padding, v_padding);
}
function nopublish$survivors$$Widget$show(self) {
  nopublish$survivors$$Widget$__set_entity_style_offset(self, nopublish$survivors$$Widget$get_abs_offset(self), undefined, undefined, Option$None$0$, Option$None$0$);
  Milky2018$selene$entity$$Entity$respawn(self.entity);
  self.visible = true;
  Milky2018$selene$system$$deferred_event_system(0);
  nopublish$survivors$$Widget$spread_refresh(self, true);
}
function nopublish$survivors$$Widget$set_offset(self, offset) {
  self.offset = offset;
  if (nopublish$survivors$$Widget$visible_in_tree(self)) {
    nopublish$survivors$$Widget$show(self);
  }
  return self;
}
function nopublish$survivors$$Widget$set_offsetxy(self, x, y) {
  return nopublish$survivors$$Widget$set_offset(self, { _0: x, _1: y });
}
function nopublish$survivors$$Widget$set_text(self, s, color, font, zindex) {
  if (moonbitlang$core$builtin$$Map$contains$15$(Milky2018$selene$sprite$$sprites, self.entity)) {
    const sprite = moonbitlang$core$builtin$$Map$at$15$(Milky2018$selene$sprite$$sprites, self.entity);
    const _bind$56 = sprite.sprite_type;
    if (_bind$56.$tag === 2) {
      const _Text = _bind$56;
      const _text = _Text._0;
      _text.content = s;
      if (color === undefined) {
      } else {
        const _Some = color;
        const _c = _Some;
        _text.color = _c;
      }
      if (font === undefined) {
      } else {
        const _Some = font;
        const _f = _Some;
        _text.font = _f;
      }
      return self;
    }
  }
  let c;
  if (color === undefined) {
    c = "black";
  } else {
    const _Some = color;
    c = _Some;
  }
  let f;
  if (font === undefined) {
    f = "10px ThaleahFat";
  } else {
    const _Some = font;
    f = _Some;
  }
  let idx;
  if (zindex === undefined) {
    idx = 100;
  } else {
    const _Some = zindex;
    idx = _Some;
  }
  const sprite = Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new(s, c, f, undefined, undefined), idx, undefined);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.entity, sprite);
  return self;
}
function nopublish$survivors$$Widget$add_child(self, child) {
  if (moonbitlang$core$array$$Array$contains$23$(self.children, child)) {
    child.parent = self;
    if (child.visible) {
      nopublish$survivors$$Widget$show(child);
    }
  }
  child.parent = self;
  moonbitlang$core$array$$Array$push$23$(self.children, child);
}
function nopublish$survivors$$Widget$hide(self) {
  Milky2018$selene$entity$$Entity$destroy(self.entity);
  self.visible = false;
  Milky2018$selene$system$$deferred_event_system(0);
  nopublish$survivors$$Widget$spread_refresh(self, false);
}
function nopublish$survivors$$Widget$add_onclick(self, callback) {
  if (callback === undefined) {
  } else {
    const _Some = callback;
    const _call0 = _Some;
    moonbitlang$core$array$$Array$push$78$(self.mouse_release, _call0);
  }
  if (!moonbitlang$core$set$$Set$contains$23$(nopublish$survivors$$clickWidgets, self)) {
    moonbitlang$core$set$$Set$add$23$(nopublish$survivors$$clickWidgets, self);
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Widget$contain_event(self, x, y) {
  if (!nopublish$survivors$$Widget$visible_in_tree(self)) {
    return false;
  }
  const off = nopublish$survivors$$Widget$get_abs_offset(self);
  if (off._0 > x || off._0 + self.shapeSize._0 < x) {
    return false;
  }
  if (off._1 > y || off._1 + self.shapeSize._1 < y) {
    return false;
  }
  moonbitlang$core$builtin$$println$50$(`${self.nick} contain event at pos:${String(x)}, ${String(y)}and self pos:${moonbitlang$core$builtin$$Show$to_string$55$(off)}`);
  return true;
}
function nopublish$survivors$$click_check_system(delta) {
  const px = Milky2018$selene$inputs$$mouse.pos._0 / 2;
  const py = Milky2018$selene$inputs$$mouse.pos._1 / 2;
  if (Milky2018$selene$inputs$$just_release_mouse.left_button || (Milky2018$selene$inputs$$just_release_mouse.middle_button || Milky2018$selene$inputs$$just_release_mouse.right_button)) {
    const _it = moonbitlang$core$set$$Set$iterator$23$(nopublish$survivors$$clickWidgets);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator$next$23$(_it);
      if (_bind$56 === undefined) {
        break;
      } else {
        const _Some = _bind$56;
        const _w = _Some;
        if (!nopublish$survivors$$Widget$contain_event(_w, px, py)) {
          nopublish$survivors$$Widget$get_abs_offset(_w);
        }
        continue;
      }
    }
    const _it$2 = moonbitlang$core$set$$Set$iterator$23$(nopublish$survivors$$clickWidgets);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator$next$23$(_it$2);
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _w = _Some;
        if (!nopublish$survivors$$Widget$visible_in_tree(_w)) {
          continue;
        }
        if (nopublish$survivors$$Widget$contain_event(_w, px, py)) {
          const _arr = _w.mouse_release;
          const _len = _arr.length;
          let _tmp$6 = 0;
          while (true) {
            const _i = _tmp$6;
            if (_i < _len) {
              const callback = _arr[_i];
              if (Milky2018$selene$inputs$$just_release_mouse.left_button) {
                callback(0);
              }
              if (Milky2018$selene$inputs$$just_release_mouse.middle_button) {
                callback(2);
              }
              if (Milky2018$selene$inputs$$just_release_mouse.right_button) {
                callback(1);
              }
              _tmp$6 = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        continue;
      }
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Control$add_child(self, child) {
  nopublish$survivors$$Widget$add_child(self.method_0(self.self), child.method_0(child.self));
}
function nopublish$survivors$$Control$hide(self) {
  nopublish$survivors$$Widget$hide(self.method_0(self.self));
}
function nopublish$survivors$$Control$show(self) {
  nopublish$survivors$$Widget$show(self.method_0(self.self));
}
function nopublish$survivors$$Control$add_children(self, children) {
  const _len = children.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const child = children[_i];
      nopublish$survivors$$Widget$add_child(self.method_0(self.self), child.method_0(child.self));
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$Control$add_widget(self, child) {
  nopublish$survivors$$Widget$add_child(self.method_0(self.self), child);
}
function nopublish$survivors$$Control$add_widgets(self, children) {
  const _len = children.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const child = children[_i];
      nopublish$survivors$$Widget$add_child(self.method_0(self.self), child);
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$Control$visible_in_tree(self) {
  return nopublish$survivors$$Widget$visible_in_tree(self.method_0(self.self));
}
function nopublish$survivors$$Control$render$92$(self) {}
function nopublish$survivors$$Control$getWidget$92$(self) {
  return self.w;
}
function nopublish$survivors$$HeaderLine$new() {
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = nopublish$survivors$$Widget$new(undefined, undefined);
  const line = { w: _bind$56, status: _bind$57 };
  nopublish$survivors$$Control$add_widgets({ self: line, method_0: nopublish$survivors$$Control$getWidget$93$, method_1: nopublish$survivors$$Control$render$93$ }, [nopublish$survivors$$Widget$set_offsetxy(_bind$57, 0, 2)]);
  return line;
}
function nopublish$survivors$$Control$render$93$(self) {}
function nopublish$survivors$$Control$getWidget$93$(self) {
  return self.w;
}
function nopublish$survivors$$AreaTop$new() {
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$58 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$59 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$60 = nopublish$survivors$$Widget$new(undefined, undefined);
  const top = { w: _bind$56, time: _bind$57, roleDesc: _bind$58, roleDescExtra: _bind$60, buildDesc: _bind$59 };
  nopublish$survivors$$Control$add_widgets({ self: top, method_0: nopublish$survivors$$Control$getWidget$94$, method_1: nopublish$survivors$$Control$render$94$ }, [_bind$57, _bind$58, _bind$60, _bind$59]);
  nopublish$survivors$$Widget$set_offset(_bind$57, { _0: 300, _1: 20 });
  nopublish$survivors$$Widget$set_offset(_bind$58, { _0: 300, _1: 30 });
  nopublish$survivors$$Widget$set_offset(_bind$60, { _0: 300, _1: 40 });
  nopublish$survivors$$Widget$set_offset(_bind$59, { _0: 300, _1: 50 });
  return top;
}
function nopublish$survivors$$entity_from(sprite) {
  return Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => sprite, undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$entity_from$46$constr$47$4491, nopublish$survivors$$entity_from$46$constr$47$4492);
}
function nopublish$survivors$$life_gen() {
  return { hp: 4, hp_max: 4, atk: 1, exp: 0, level: 1, gold: 0, score: 0, atkRange: 1 };
}
function nopublish$survivors$$gen_nation() {
  const _bind$56 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$57 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$58 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$59 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$60 = 0;
  const nation = { tops: _bind$57, areas: _bind$58, roles: _bind$59, gold: 0, eco: 0, soldierNum: 0, popu: 0, iconId: _bind$60, heros: _bind$56, cacheEco: 0 };
  moonbitlang$core$array$$Array$push$41$(nopublish$survivors$$nations, nation);
  return nation;
}
function nopublish$survivors$$get_nation(nationId) {
  const _start837 = nopublish$survivors$$nations.length;
  const _end838 = nationId + 1 | 0;
  let _tmp$6 = _start837;
  while (true) {
    const i = _tmp$6;
    if (i < _end838) {
      nopublish$survivors$$gen_nation();
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return moonbitlang$core$array$$Array$at$41$(nopublish$survivors$$nations, nationId);
}
function nopublish$survivors$$get_nation_name(nationId) {
  switch (nationId) {
    case 0: {
      return "玩家";
    }
    case 4: {
      return "大自然";
    }
    case 5: {
      return "魔物";
    }
  }
  nopublish$survivors$$get_nation(nationId);
  return `国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId, 10)}]`;
}
function nopublish$survivors$$Role$get_target_str(self) {
  let s = "";
  if (self.atkTarget >= 0) {
    const _bind$56 = moonbitlang$core$builtin$$Map$get$22$(nopublish$survivors$$world.roleMap, self.atkTarget);
    if (_bind$56 === undefined) {
    } else {
      const _Some = _bind$56;
      const _target = _Some;
      s = `${s}  目标:角色[${moonbitlang$core$int$$Int$to_string$46$inner(self.atkTarget, 10)}]`;
      if (_target.nationId >= 0) {
        s = `${s}(${nopublish$survivors$$get_nation_name(_target.nationId)})`;
      }
    }
  }
  if (self.atkBuild >= 0) {
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    if (areaId >= 0 && areaId < nopublish$survivors$$world.areas.length) {
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
      const _bind$56 = moonbitlang$core$builtin$$Map$get$62$(area.buildings, self.atkBuild);
      if (_bind$56 === undefined) {
      } else {
        const _Some = _bind$56;
        const _build = _Some;
        const buildDesc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, _build.cate);
        s = `${s}  目标建筑${buildDesc.name}[${moonbitlang$core$int$$Int$to_string$46$inner(_build.id, 10)}](♥:${moonbitlang$core$int$$Int$to_string$46$inner(_build.hp, 10)})`;
      }
      s = `${s}`;
    }
  }
  if (self.atkTarget < 0 && (self.atkBuild < 0 && (self.atkArea >= 0 && self.atkArea < nopublish$survivors$$world.areas.length))) {
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, self.atkArea);
    const gx = area.gx;
    const gy = area.gy;
    s = `${s}  目标区域(${moonbitlang$core$int$$Int$to_string$46$inner(gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(gy, 10)})`;
    if (area.nationId >= 0) {
      s = `${s}(${nopublish$survivors$$get_nation_name(area.nationId)})`;
    }
  }
  return s;
}
function nopublish$survivors$$Role$get_atk(self) {
  let val = self.life.atk;
  const _arr = self.soldiers;
  const _len = _arr.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const roleId = _arr[_i];
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, roleId)) {
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, roleId);
        val = val + role.life.atk | 0;
      }
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return val;
}
function nopublish$survivors$$Role$is_equiped(self) {
  if (self.equiped || (self.cate === 3 || self.cate === 2)) {
    return true;
  } else {
    _L: {
      const _bind$56 = self.jobBuildCate;
      switch (_bind$56) {
        case 13: {
          break _L;
        }
        case 12: {
          break _L;
        }
        case 14: {
          break _L;
        }
        default: {
          return false;
        }
      }
    }
    return true;
  }
}
function nopublish$survivors$$Role$to_desc(self, withoutTarget) {
  let s = "";
  s = `${s}角色[${moonbitlang$core$int$$Int$to_string$46$inner(self.id, 10)}]`;
  if (self.nationId >= 0) {
    s = `${s},${nopublish$survivors$$get_nation_name(self.nationId)}`;
  }
  s = `${s},♥:${moonbitlang$core$int$$Int$to_string$46$inner(self.life.hp, 10)}`;
  s = `${s},🗡:${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$Role$get_atk(self), 10)}`;
  let _tmp$6;
  if (withoutTarget === -1) {
    _tmp$6 = false;
  } else {
    const _Some = withoutTarget;
    const _x = _Some;
    if (_x === true) {
      _tmp$6 = true;
    } else {
      _tmp$6 = false;
    }
  }
  if (!_tmp$6) {
    s = `${s}${nopublish$survivors$$Role$get_target_str(self)}`;
  }
  if (self.jobBuildCate >= 0) {
    const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, self.jobBuildCate);
    s = `${s},${desc.jobName}`;
  }
  if (nopublish$survivors$$Role$is_equiped(self)) {
    s = `${s},武装者`;
  }
  return s;
}
function nopublish$survivors$$AreaTop$renderHoverRole(self, target) {
  let gridDesc = "";
  let gridDescExtra = "";
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
  } else {
    gridDesc = `${gridDesc}${nopublish$survivors$$Role$to_desc(target, nopublish$survivors$$renderHoverRole$46$constr$47$4539)}`;
    gridDescExtra = `${gridDescExtra}${nopublish$survivors$$Role$get_target_str(target)}`;
  }
  nopublish$survivors$$Widget$set_text(self.roleDesc, gridDesc, undefined, nopublish$survivors$$renderHoverRole$46$constr$47$4540, undefined);
  nopublish$survivors$$Widget$set_text(self.roleDescExtra, gridDescExtra, undefined, nopublish$survivors$$renderHoverRole$46$constr$47$4541, undefined);
}
function nopublish$survivors$$Control$getWidget$94$(self) {
  return self.w;
}
function nopublish$survivors$$Control$render$94$(self) {}
function nopublish$survivors$$Control$getWidget$95$(self) {
  return self.table;
}
function nopublish$survivors$$Control$getWidget$40$(self) {
  return self.line;
}
function nopublish$survivors$$Control$render$40$(self) {}
function nopublish$survivors$$NationTable$new() {
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = [nopublish$survivors$$Widget$new(undefined, undefined), nopublish$survivors$$Widget$new({ _0: 35, _1: 0 }, undefined), nopublish$survivors$$Widget$new({ _0: 65, _1: 0 }, undefined), nopublish$survivors$$Widget$new({ _0: 95, _1: 0 }, undefined)];
  const _bind$58 = [];
  const table = { table: _bind$56, titles: _bind$57, lines: _bind$58 };
  const _len = _bind$57.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const w = _bind$57[_i];
      nopublish$survivors$$Control$add_widget({ self: table, method_0: nopublish$survivors$$Control$getWidget$95$, method_1: nopublish$survivors$$Control$render$95$ }, w);
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  nopublish$survivors$$Widget$set_text(moonbitlang$core$array$$Array$at$23$(_bind$57, 0), "名称", undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(moonbitlang$core$array$$Array$at$23$(_bind$57, 1), "兵力", undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(moonbitlang$core$array$$Array$at$23$(_bind$57, 2), "经济", undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(moonbitlang$core$array$$Array$at$23$(_bind$57, 3), "人口", undefined, undefined, undefined);
  return table;
}
function nopublish$survivors$$NationLine$set_data(self, soldierNum, eco, popu) {
  nopublish$survivors$$Widget$set_text(self.soldierNum, moonbitlang$core$int$$Int$to_string$46$inner(soldierNum, 10), undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(self.eco, String(eco), undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(self.popu, moonbitlang$core$int$$Int$to_string$46$inner(popu, 10), undefined, undefined, undefined);
}
function nopublish$survivors$$NationLine$new(nationId) {
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = nopublish$survivors$$Widget$new({ _0: 0, _1: 0 }, undefined);
  const _bind$58 = nopublish$survivors$$Widget$new({ _0: 40, _1: 0 }, undefined);
  const _bind$59 = nopublish$survivors$$Widget$new({ _0: 70, _1: 0 }, undefined);
  const _bind$60 = nopublish$survivors$$Widget$new({ _0: 100, _1: 0 }, undefined);
  const line = { line: _bind$56, name: _bind$57, soldierNum: _bind$58, eco: _bind$59, popu: _bind$60, nationId: nationId };
  nopublish$survivors$$Control$add_widgets({ self: line, method_0: nopublish$survivors$$Control$getWidget$40$, method_1: nopublish$survivors$$Control$render$40$ }, [_bind$57, _bind$58, _bind$59, _bind$60]);
  return line;
}
function nopublish$survivors$$get_nation_colorstr(nationId) {
  switch (nationId) {
    case 0: {
      return "cyan";
    }
    case 2: {
      return "purple";
    }
    case 1: {
      return "lime";
    }
    case 4: {
      return "green";
    }
    case 3: {
      return "red";
    }
    case 5: {
      return "black";
    }
    default: {
      return "green";
    }
  }
}
function nopublish$survivors$$Control$render$95$(self) {
  const start = self.lines.length;
  const _end1074 = nopublish$survivors$$nations.length;
  let _tmp$6 = start;
  while (true) {
    const i = _tmp$6;
    if (i < _end1074) {
      const line = nopublish$survivors$$NationLine$new(i);
      nopublish$survivors$$Control$add_child({ self: self, method_0: nopublish$survivors$$Control$getWidget$95$, method_1: nopublish$survivors$$Control$render$95$ }, { self: line, method_0: nopublish$survivors$$Control$getWidget$40$, method_1: nopublish$survivors$$Control$render$40$ });
      nopublish$survivors$$Widget$set_text(line.name, nopublish$survivors$$get_nation_name(i), undefined, undefined, undefined);
      moonbitlang$core$array$$Array$push$40$(self.lines, line);
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _end1080 = self.lines.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _end1080) {
      const line = moonbitlang$core$array$$Array$at$40$(self.lines, i);
      nopublish$survivors$$Widget$set_offset(line.line, { _0: 0, _1: ((i + 1 | 0) + 0) * 20 });
      const nation = nopublish$survivors$$get_nation(i);
      nopublish$survivors$$Widget$set_text(line.name, nopublish$survivors$$get_nation_name(i), nopublish$survivors$$get_nation_colorstr(i), undefined, undefined);
      if (i === 5) {
        const _p = nation.roles;
        nopublish$survivors$$world.enemyCnt = _p.size;
      }
      const _tmp$8 = nation.soldierNum;
      const _tmp$9 = nation.eco;
      const _p = nation.roles;
      nopublish$survivors$$NationLine$set_data(line, _tmp$8, _tmp$9, _p.size);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$Control$getWidget$96$(self) {
  return self.tabs;
}
function nopublish$survivors$$nation_negative(src, target) {
  if (src === target) {
    return false;
  }
  if (src === 5 || target === 5) {
    return true;
  }
  if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, src) && moonbitlang$core$set$$Set$contains$20$(moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, src), target)) {
    return true;
  }
  return false;
}
function nopublish$survivors$$AreaLowerTab$renderStat(self) {
  if (nopublish$survivors$$world.inGlobe) {
    nopublish$survivors$$Widget$set_text(self.areaTitle, "", undefined, undefined, undefined);
    return;
  } else {
    let s = `区域(${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$world.player.gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$world.player.gy, 10)})`;
    if (nopublish$survivors$$world.showAreaId >= 0) {
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
      if (area.nationId === nopublish$survivors$$world.player.nationId) {
        s = `${s},属于玩家`;
      } else {
        if (area.nationId >= 0) {
          s = `${s},属于${nopublish$survivors$$get_nation_name(area.nationId)}`;
          if (nopublish$survivors$$nation_negative(nopublish$survivors$$world.player.nationId, area.nationId)) {
            s = `${s},与你敌对`;
          }
        }
      }
      if (area.nationId >= 0) {
        if (area.freeRoleNum > 0) {
          s = `${s},空闲人口:${moonbitlang$core$int$$Int$to_string$46$inner(area.freeRoleNum, 10)}`;
        }
      }
    }
    nopublish$survivors$$Widget$set_text(self.areaTitle, s, undefined, undefined, undefined);
    return;
  }
}
function nopublish$survivors$$GameWorld$hideBuildLines(self) {
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _root = _Some;
    const buildLines = _root.areaLower.buildLines;
    const _it = moonbitlang$core$builtin$$Map$iterator2$61$(buildLines);
    while (true) {
      const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$61$(_it);
      if (_bind$57 === undefined) {
        return;
      } else {
        const _Some$2 = _bind$57;
        const _x = _Some$2;
        const _lines = _x._1;
        nopublish$survivors$$Control$hide({ self: _lines, method_0: nopublish$survivors$$Control$getWidget$97$, method_1: nopublish$survivors$$Control$render$97$ });
        continue;
      }
    }
  }
}
function nopublish$survivors$$get_build_name(cate) {
  if (cate >= 0 && cate < nopublish$survivors$$buildDescs.length) {
    return moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate).name;
  }
  return `建筑类型:${moonbitlang$core$int$$Int$to_string$46$inner(cate, 10)}`;
}
function nopublish$survivors$$Area$alloc_role_to_build(self, build, role) {
  if (role.jobBuild >= 0) {
    if (moonbitlang$core$builtin$$Map$contains$62$(self.buildings, role.jobBuild)) {
      const obuild = moonbitlang$core$builtin$$Map$at$62$(self.buildings, role.jobBuild);
      moonbitlang$core$set$$Set$remove$20$(obuild.roles, role.id);
      nopublish$survivors$$log(`角色[${moonbitlang$core$int$$Int$to_string$46$inner(role.id, 10)}]离开了${moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, obuild.cate).name}[${moonbitlang$core$int$$Int$to_string$46$inner(obuild.id, 10)}]`);
      if (moonbitlang$core$builtin$$Map$contains$63$(self.buildCatePersonNum, obuild.cate)) {
        const _array_3 = self.buildCatePersonNum;
        const _index_4 = obuild.cate;
        moonbitlang$core$builtin$$Map$set$63$(_array_3, _index_4, moonbitlang$core$builtin$$Map$at$63$(_array_3, _index_4) - 1 | 0);
      }
    }
    role.jobBuild = -1;
    role.jobBuildCate = -1;
  }
  if (moonbitlang$core$builtin$$Map$contains$63$(self.buildCatePersonNum, build.cate)) {
    const _array_5 = self.buildCatePersonNum;
    const _index_6 = build.cate;
    moonbitlang$core$builtin$$Map$set$63$(_array_5, _index_6, moonbitlang$core$builtin$$Map$at$63$(_array_5, _index_6) + 1 | 0);
    moonbitlang$core$set$$Set$add$20$(build.roles, role.id);
  } else {
    moonbitlang$core$builtin$$Map$set$63$(self.buildCatePersonNum, build.cate, 1);
  }
  moonbitlang$core$set$$Set$add$20$(build.roles, role.id);
  role.jobBuild = build.id;
  role.jobGx = role.gx;
  role.jobGy = role.gy;
  role.jobBuildCate = build.cate;
  const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
  if (role.nationId === nopublish$survivors$$world.player.nationId && (areaId === nopublish$survivors$$world.showAreaId && nopublish$survivors$$world.inGlobe)) {
    nopublish$survivors$$log(`角色[${moonbitlang$core$int$$Int$to_string$46$inner(role.id, 10)}]前往了${moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, build.cate).name}[${moonbitlang$core$int$$Int$to_string$46$inner(build.id, 10)}]处工作`);
  }
  if (build.nationId >= 0) {
    const nation = nopublish$survivors$$get_nation(build.nationId);
    _L: {
      _L$2: {
        const _bind$56 = build.cate;
        switch (_bind$56) {
          case 13: {
            break _L$2;
          }
          case 12: {
            break _L$2;
          }
          case 14: {
            break _L$2;
          }
        }
        break _L;
      }
      nation.soldierNum = nation.soldierNum + 1 | 0;
    }
  }
  self.freeRoleNum = self.freeRoleNum - 1 | 0;
}
function nopublish$survivors$$is_army_build_cate(cate) {
  switch (cate) {
    case 13: {
      return true;
    }
    case 12: {
      return true;
    }
    case 14: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function nopublish$survivors$$Building$is_army_build(self) {
  return nopublish$survivors$$is_army_build_cate(self.cate);
}
function nopublish$survivors$$Area$auto_alloc_to_cate$46$inner(self, cate, logback) {
  const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
  let maxPersonNum = 0;
  if (moonbitlang$core$builtin$$Map$contains$63$(self.buildStat, cate)) {
    maxPersonNum = Math.imul(desc.maxPerson, moonbitlang$core$builtin$$Map$at$63$(self.buildStat, cate)) | 0;
  } else {
    maxPersonNum = 0;
  }
  let existPerNum = 0;
  if (moonbitlang$core$builtin$$Map$contains$63$(self.buildCatePersonNum, cate)) {
    existPerNum = moonbitlang$core$builtin$$Map$at$63$(self.buildCatePersonNum, cate);
  }
  if (existPerNum < maxPersonNum) {
    const _it = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _roleId = _x._1;
        if (!moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _roleId)) {
          continue;
        }
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _roleId);
        if (role.jobBuild >= 0 || (role.id === nopublish$survivors$$world.player.id || role.nationId !== self.nationId)) {
          continue;
        }
        const _it$2 = moonbitlang$core$builtin$$Map$iterator2$62$(self.buildings);
        while (true) {
          const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$62$(_it$2);
          if (_bind$57 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$57;
            const _x$2 = _Some$2;
            const _build = _x$2._1;
            if (nopublish$survivors$$Building$is_army_build(_build)) {
              if (self.equip < 1) {
                if (logback) {
                  nopublish$survivors$$log("缺少足够的装备来增加士兵");
                }
                return undefined;
              }
            }
            let _tmp$6;
            if (_build.cate === cate) {
              let _tmp$7;
              if (_build.nationId === self.nationId) {
                const _p = _build.roles;
                const _tmp$8 = _p.size;
                _tmp$7 = _tmp$8 < desc.maxPerson;
              } else {
                _tmp$7 = false;
              }
              _tmp$6 = _tmp$7;
            } else {
              _tmp$6 = false;
            }
            if (_tmp$6) {
              nopublish$survivors$$Area$alloc_role_to_build(self, _build, role);
              if (nopublish$survivors$$Building$is_army_build(_build)) {
                self.equip = self.equip - 1;
              }
              return undefined;
            }
            continue;
          }
        }
        continue;
      }
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Area$recalc_build_stat$46$inner(self, showing) {
  moonbitlang$core$builtin$$Map$clear$63$(self.buildStat);
  const _it = moonbitlang$core$builtin$$Map$iterator2$62$(self.buildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _build = _x._1;
      if (_build.nationId !== self.nationId) {
        continue;
      }
      if (moonbitlang$core$builtin$$Map$contains$63$(self.buildStat, _build.cate)) {
        const _array_9 = self.buildStat;
        const _index_10 = _build.cate;
        moonbitlang$core$builtin$$Map$set$63$(_array_9, _index_10, moonbitlang$core$builtin$$Map$at$63$(_array_9, _index_10) + 1 | 0);
      } else {
        moonbitlang$core$builtin$$Map$set$63$(self.buildStat, _build.cate, 1);
      }
      continue;
    }
  }
  let cacheArmyLimit = 0;
  let cachePopuLimit = 0;
  let freeRoleNum = 0;
  let cachePopuNum = 0;
  let cacheArmyNum = 0;
  let cacheEcoSpeed = 0;
  let cacheFoodSpeed = 0;
  let cacheEquipSpeed = 0;
  let foodConsume = 0;
  const clearPosSet = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _it$2 = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$2);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _pos = _x._0;
      const _roleId = _x._1;
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _roleId)) {
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _roleId);
        if (role.life.hp <= 0) {
          continue;
        }
        if (role.nationId === self.nationId) {
          if (role.cate === 3) {
          } else {
            if (role.jobBuildCate < 0 && role.cate !== 2) {
              freeRoleNum = freeRoleNum + 1 | 0;
            }
          }
          if (!role.inGlobe && (!role.inTeam && (role.gx === self.gx && role.gy === self.gy))) {
            cachePopuNum = cachePopuNum + 1 | 0;
          } else {
            moonbitlang$core$set$$Set$add$20$(clearPosSet, _pos);
          }
          if (role.jobBuildCate >= 0) {
            if (!role.inTeam) {
              foodConsume = foodConsume + 1;
            }
            _L: {
              _L$2: {
                const _bind$57 = role.jobBuildCate;
                switch (_bind$57) {
                  case 13: {
                    break _L$2;
                  }
                  case 12: {
                    break _L$2;
                  }
                  case 14: {
                    break _L$2;
                  }
                }
                break _L;
              }
              cacheArmyNum = cacheArmyNum + 1 | 0;
            }
          }
        }
      }
      continue;
    }
  }
  const _it$3 = moonbitlang$core$builtin$$Map$iterator2$62$(self.buildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it$3);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _build = _x._1;
      if (_build.nationId === self.nationId) {
        const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, _build.cate);
        cacheArmyLimit = cacheArmyLimit + desc.armyLimit | 0;
        cachePopuLimit = cachePopuLimit + desc.popuLimit | 0;
      }
      continue;
    }
  }
  const _it$4 = moonbitlang$core$builtin$$Map$iterator2$63$(self.buildCatePersonNum);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$4);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _buildCate = _x._0;
      const _num = _x._1;
      const buildDesc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, _buildCate);
      cacheEcoSpeed = cacheEcoSpeed + buildDesc.ecoPerson * (_num + 0);
      cacheFoodSpeed = cacheFoodSpeed + buildDesc.foodPerson * (_num + 0);
      cacheEquipSpeed = cacheEquipSpeed + buildDesc.equipPerson * (_num + 0);
      continue;
    }
  }
  self.ecoSpeed = cacheEcoSpeed;
  self.foodSpeed = cacheFoodSpeed;
  self.equipSpeed = cacheEquipSpeed;
  self.freeRoleNum = freeRoleNum;
  self.popu = cachePopuNum;
  self.armyLimit = cacheArmyLimit;
  self.popuLimit = cachePopuLimit;
  if (showing) {
    if (!nopublish$survivors$$world.inGlobe && nopublish$survivors$$world.showAreaId === ((Math.imul(self.gx, 18) | 0) + self.gy | 0)) {
      const _bind$56 = nopublish$survivors$$world.opRoot;
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _root = _Some;
        nopublish$survivors$$Widget$set_text(_root.areaLower.popu, `人口(${moonbitlang$core$int$$Int$to_string$46$inner(cachePopuNum, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(self.popuLimit, 10)})`, undefined, undefined, undefined);
        nopublish$survivors$$Widget$set_text(_root.areaLower.army, `部队(${moonbitlang$core$int$$Int$to_string$46$inner(cacheArmyNum, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(cacheArmyLimit, 10)})`, undefined, undefined, undefined);
        nopublish$survivors$$Widget$set_text(_root.areaLower.eco, `经济:${String(self.eco)}(+${String(self.ecoSpeed)})`, undefined, undefined, undefined);
        nopublish$survivors$$Widget$set_text(_root.areaLower.food, `食物:${String(self.food)}(+${String(self.foodSpeed - foodConsume)})`, undefined, undefined, undefined);
        nopublish$survivors$$Widget$set_text(_root.areaLower.equip, `装备:${String(self.equip)}(+${String(self.equipSpeed)})`, undefined, undefined, undefined);
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Area$release_role_from_build(self, role) {
  if (role.jobBuild >= 0) {
    if (moonbitlang$core$builtin$$Map$contains$62$(self.buildings, role.jobBuild)) {
      const obuild = moonbitlang$core$builtin$$Map$at$62$(self.buildings, role.jobBuild);
      moonbitlang$core$set$$Set$remove$20$(obuild.roles, role.id);
      if (moonbitlang$core$builtin$$Map$contains$63$(self.buildCatePersonNum, obuild.cate)) {
        const _array_7 = self.buildCatePersonNum;
        const _index_8 = obuild.cate;
        moonbitlang$core$builtin$$Map$set$63$(_array_7, _index_8, moonbitlang$core$builtin$$Map$at$63$(_array_7, _index_8) - 1 | 0);
      }
    }
    role.jobBuild = -1;
    const cate = role.jobBuildCate;
    role.jobBuildCate = -1;
    if (role.nationId >= 0) {
      const nation = nopublish$survivors$$get_nation(role.nationId);
      _L: {
        switch (cate) {
          case 13: {
            break _L;
          }
          case 12: {
            break _L;
          }
          case 14: {
            break _L;
          }
          default: {
            return;
          }
        }
      }
      nation.soldierNum = nation.soldierNum - 1 | 0;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Area$auto_release_from_cate(self, cate) {
  const _it = moonbitlang$core$builtin$$Map$iterator2$62$(self.buildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it);
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _build = _x._1;
      if (_build.nationId !== self.nationId) {
        continue;
      }
      if (_build.cate !== cate) {
        continue;
      }
      const _p = _build.roles;
      if (_p.size > 0) {
        let findRole = undefined;
        const _it$2 = moonbitlang$core$set$$Set$iterator$20$(_build.roles);
        while (true) {
          const _bind$57 = moonbitlang$core$builtin$$Iterator$next$20$(_it$2);
          if (_bind$57 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$57;
            const _id = _Some$2;
            if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _id)) {
              const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _id);
              if (!role.inGlobe && (role.gx === self.gx && role.gy === self.gy)) {
                findRole = role;
                break;
              }
            }
            continue;
          }
        }
        const _bind$57 = findRole;
        if (_bind$57 === undefined) {
        } else {
          const _Some$2 = _bind$57;
          const _r = _Some$2;
          nopublish$survivors$$Area$release_role_from_build(self, _r);
        }
      }
      continue;
    }
  }
}
function nopublish$survivors$$BuildLine$set_alloc(self, a, b) {
  nopublish$survivors$$Widget$set_text(self.allocs, `人数${moonbitlang$core$int$$Int$to_string$46$inner(a, 10)}/${moonbitlang$core$int$$Int$to_string$46$inner(b, 10)}`, undefined, undefined, undefined);
}
function nopublish$survivors$$BuildLine$set_num(self, n) {
  nopublish$survivors$$Widget$set_text(self.num, `${moonbitlang$core$int$$Int$to_string$46$inner(n, 10)}座`, undefined, undefined, undefined);
}
function nopublish$survivors$$Control$getWidget$97$(self) {
  return self.line;
}
function nopublish$survivors$$Area$clear_occupy(self, x, y, id) {
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  if (moonbitlang$core$builtin$$Map$contains$63$(self.roleOccupy, pos)) {
    if (moonbitlang$core$builtin$$Map$at$63$(self.roleOccupy, pos) === id) {
      moonbitlang$core$builtin$$Map$remove$63$(self.roleOccupy, pos);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$GameWorld$clear_goccupy(self, x, y, id) {
  const idx = (Math.imul(x, 18) | 0) + y | 0;
  if (moonbitlang$core$array$$Array$at$20$(self.globeOccupy, idx) === id) {
    moonbitlang$core$array$$Array$set$20$(self.globeOccupy, idx, -1);
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$GameWorld$clear_footprint(self, role) {
  if (self.inGlobe) {
    nopublish$survivors$$GameWorld$clear_goccupy(self, role.gx, role.gy, role.id);
  } else {
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, (Math.imul(role.gx, 18) | 0) + role.gy | 0);
    nopublish$survivors$$Area$clear_occupy(area, role.ax, role.ay, role.id);
  }
  const _bind$56 = role.cate;
  switch (_bind$56) {
    case 1: {
      if (role.inGlobe) {
        nopublish$survivors$$world.npcCnt = nopublish$survivors$$world.npcCnt - 1 | 0;
        return;
      } else {
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, (Math.imul(role.gx, 18) | 0) + role.gy | 0);
        area.humanCnt = area.humanCnt - 1 | 0;
        return;
      }
    }
    case 3: {
      if (role.inGlobe) {
        nopublish$survivors$$world.heroCnt = nopublish$survivors$$world.heroCnt - 1 | 0;
        return;
      } else {
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, (Math.imul(role.gx, 18) | 0) + role.gy | 0);
        area.humanCnt = area.humanCnt - 1 | 0;
        return;
      }
    }
    case 2: {
      if (role.inGlobe) {
        nopublish$survivors$$world.enemyCnt = nopublish$survivors$$world.enemyCnt - 1 | 0;
        return;
      } else {
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, (Math.imul(role.gx, 18) | 0) + role.gy | 0);
        area.enemyCnt = area.enemyCnt - 1 | 0;
        return;
      }
    }
    default: {
      return;
    }
  }
}
function nopublish$survivors$$Area$alloc_soldier_to_leader(self, soldier, leader) {
  moonbitlang$core$array$$Array$push$20$(leader.soldiers, soldier.id);
  soldier.leaderId = leader.id;
  soldier.inTeam = true;
  nopublish$survivors$$GameWorld$clear_footprint(nopublish$survivors$$world, soldier);
}
function nopublish$survivors$$Area$auto_alloc_to_leader(self, leader) {
  const _it = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _roleId = _x._1;
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _roleId)) {
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _roleId);
        if (role.nationId !== self.nationId || role.jobBuildCate !== leader.followSoldierType) {
          continue;
        }
        nopublish$survivors$$Area$alloc_soldier_to_leader(self, role, leader);
        return undefined;
      }
      continue;
    }
  }
}
function nopublish$survivors$$set_gmap_color(pos, icon) {
  Milky2018$selene$system$$deferred_event_system(0);
  moonbitlang$core$array$$Array$set$20$(nopublish$survivors$$world.gmap, pos, icon);
  const e = moonbitlang$core$array$$Array$at$1$(nopublish$survivors$$world.globe, pos);
  if (icon >= 0) {
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, e, moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$gmapSprites, icon));
    if (!Milky2018$selene$entity$$Entity$is_alive(e) && nopublish$survivors$$world.inGlobe) {
      Milky2018$selene$entity$$Entity$respawn(e);
    }
  } else {
    if (Milky2018$selene$entity$$Entity$is_alive(e)) {
      Milky2018$selene$entity$$Entity$destroy(e);
    }
  }
  Milky2018$selene$system$$deferred_event_system(0);
}
function nopublish$survivors$$Area$set_build_occupy(self, x, y, id) {
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  moonbitlang$core$builtin$$Map$contains$63$(self.buildOccupy, pos);
  moonbitlang$core$builtin$$Map$set$63$(self.buildOccupy, pos, id);
}
function nopublish$survivors$$Building$get_sprite(self) {
  let nationId = self.nationId;
  if (nationId < 0 || (nationId === 5 || (nationId === 4 || nationId >= 5))) {
    nationId = 0;
  }
  const _bind$56 = nationId;
  let sprites;
  switch (_bind$56) {
    case 0: {
      sprites = nopublish$survivors$$buildingSprites;
      break;
    }
    case 2: {
      sprites = nopublish$survivors$$purpleBuildingSprites;
      break;
    }
    case 1: {
      sprites = nopublish$survivors$$limeBuildingSprites;
      break;
    }
    case 3: {
      sprites = nopublish$survivors$$redBuildingSprites;
      break;
    }
    default: {
      sprites = nopublish$survivors$$buildingSprites;
    }
  }
  let cate = self.cate;
  if (cate < 0 || cate >= sprites.length) {
    cate = 0;
  }
  return moonbitlang$core$array$$Array$at$42$(sprites, cate);
}
function nopublish$survivors$$GameWorld$genBuildingId(self) {
  const id = self.buildingIdCnt;
  self.buildingIdCnt = self.buildingIdCnt + 1 | 0;
  return id;
}
function nopublish$survivors$$Area$add_build$46$inner(self, cate, x, y, nationId, level) {
  const id = nopublish$survivors$$GameWorld$genBuildingId(nopublish$survivors$$world);
  const _bind$56 = Math.imul(10, level + 1 | 0) | 0;
  const _bind$57 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const build = { id: id, cate: cate, level: level, owner: -1, nationId: nationId, hp: _bind$56, x: x, y: y, roles: _bind$57 };
  moonbitlang$core$builtin$$Map$set$62$(self.buildings, id, build);
  switch (cate) {
    case 7: {
      self.core = id;
      break;
    }
    case 5: {
      nopublish$survivors$$world.nestCnt = nopublish$survivors$$world.nestCnt + 1 | 0;
      moonbitlang$core$set$$Set$add$20$(self.nests, id);
      break;
    }
  }
  const buildDesc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
  if (nationId === self.nationId) {
    if (buildDesc.cityDefense > 0) {
      self.cityDefense = self.cityDefense + buildDesc.cityDefense;
    }
    if (buildDesc.armyLimit > 0) {
      self.armyLimit = self.armyLimit + buildDesc.armyLimit | 0;
    }
    if (buildDesc.popuLimit > 0) {
      self.popuLimit = self.popuLimit + buildDesc.popuLimit | 0;
    }
  }
  nopublish$survivors$$Area$set_build_occupy(self, x, y, id);
  const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
  if (nopublish$survivors$$world.showAreaId === ((Math.imul(self.gx, 18) | 0) + self.gy | 0)) {
    Milky2018$selene$system$$deferred_event_system(0);
    const pos = (Math.imul(x, 18) | 0) + y | 0;
    if (areaId === nopublish$survivors$$world.showAreaId && !nopublish$survivors$$world.inGlobe) {
      const e = moonbitlang$core$array$$Array$at$1$(nopublish$survivors$$world.areaBes, pos);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, e, nopublish$survivors$$Building$get_sprite(build));
      if (!Milky2018$selene$entity$$Entity$is_alive(e)) {
        Milky2018$selene$entity$$Entity$respawn(e);
      }
    }
    Milky2018$selene$system$$deferred_event_system(0);
  }
  return id;
}
function nopublish$survivors$$Area$clear_build_occupy(self, x, y, id) {
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  if (moonbitlang$core$builtin$$Map$contains$63$(self.buildOccupy, pos)) {
    if (moonbitlang$core$builtin$$Map$at$63$(self.buildOccupy, pos) === id) {
      moonbitlang$core$builtin$$Map$remove$63$(self.buildOccupy, pos);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Area$destroy_build$46$inner(self, buildId, x, y, areaId, newNationId) {
  if (moonbitlang$core$builtin$$Map$contains$62$(self.buildings, buildId)) {
    const build = moonbitlang$core$builtin$$Map$at$62$(self.buildings, buildId);
    const _p = build.roles;
    if (_p.size > 0) {
      const arr = moonbitlang$core$set$$Set$to_array$20$(build.roles);
      const _len = arr.length;
      let _tmp$6 = 0;
      while (true) {
        const _i = _tmp$6;
        if (_i < _len) {
          const roleId = arr[_i];
          if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, roleId)) {
            const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, roleId);
            nopublish$survivors$$Area$release_role_from_build(self, role);
          }
          _tmp$6 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    const buildDesc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, build.cate);
    if (build.nationId === self.nationId) {
      if (buildDesc.cityDefense > 0) {
        self.cityDefense = self.cityDefense - buildDesc.cityDefense;
        if (self.cityDefense < 0) {
          self.cityDefense = 0;
        }
      }
      if (buildDesc.armyLimit > 0) {
        self.armyLimit = self.armyLimit - buildDesc.armyLimit | 0;
      }
      if (buildDesc.popuLimit > 0) {
        self.popuLimit = self.popuLimit - buildDesc.popuLimit | 0;
      }
    }
    moonbitlang$core$builtin$$Map$remove$62$(self.buildings, buildId);
    if (build.cate === 5) {
      nopublish$survivors$$world.nestCnt = nopublish$survivors$$world.nestCnt - 1 | 0;
      moonbitlang$core$set$$Set$remove$20$(self.nests, build.id);
    }
  }
  nopublish$survivors$$Area$clear_build_occupy(self, x, y, buildId);
  Milky2018$selene$system$$deferred_event_system(0);
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  if (areaId === nopublish$survivors$$world.showAreaId && !nopublish$survivors$$world.inGlobe) {
    const e = moonbitlang$core$array$$Array$at$1$(nopublish$survivors$$world.areaBes, pos);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, e, nopublish$survivors$$emptySprite);
    if (Milky2018$selene$entity$$Entity$is_alive(e)) {
      Milky2018$selene$entity$$Entity$destroy(e);
    }
  }
  Milky2018$selene$system$$deferred_event_system(0);
}
function nopublish$survivors$$Area$find_empty_pos(self) {
  let x = -1;
  let y = -1;
  let pos = 0;
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < 3) {
      _L: {
        x = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
        y = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
        pos = (Math.imul(x, 18) | 0) + y | 0;
        if (moonbitlang$core$builtin$$Map$contains$63$(self.buildOccupy, pos)) {
          break _L;
        }
        if (!moonbitlang$core$array$$Array$at$44$(nopublish$survivors$$terrainPass, moonbitlang$core$array$$Array$at$20$(self.terrain, pos))) {
          break _L;
        }
        return { _0: x, _1: y };
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < 18) {
      let _tmp$8 = 0;
      while (true) {
        const j = _tmp$8;
        if (j < 18) {
          _L: {
            pos = (Math.imul(i, 18) | 0) + j | 0;
            if (moonbitlang$core$builtin$$Map$contains$63$(self.buildOccupy, pos)) {
              break _L;
            }
            if (!moonbitlang$core$array$$Array$at$44$(nopublish$survivors$$terrainPass, moonbitlang$core$array$$Array$at$20$(self.terrain, pos))) {
              break _L;
            }
            break _L;
          }
          _tmp$8 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: x, _1: y };
}
function nopublish$survivors$$GameWorld$role_to_city_lord(self, areaId, best_role_id) {
  const area = moonbitlang$core$array$$Array$at$39$(self.areas, areaId);
  let ex = -1;
  let ey = -1;
  if (area.cityLevel < 0) {
    const _bind$56 = nopublish$survivors$$Area$find_empty_pos(area);
    const __ex = _bind$56._0;
    const __ey = _bind$56._1;
    ex = __ex;
    ey = __ey;
    if (ex < 0 || ey < 0) {
      return undefined;
    }
  }
  if (best_role_id >= 0) {
    const role = moonbitlang$core$builtin$$Map$at$22$(self.roleMap, best_role_id);
    moonbitlang$core$set$$Set$add$20$(role.areas, areaId);
    if (area.lordId >= 0) {
      const oldLordId = area.lordId;
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, oldLordId)) {
        const oldLord = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, oldLordId);
        moonbitlang$core$set$$Set$remove$20$(oldLord.areas, areaId);
      } else {
        area.lordId = -1;
      }
    }
    area.lordId = role.id;
    if (!moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, role.lordId)) {
      role.lordId = -1;
    }
    if (role.lordId >= 0) {
      moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, role.lordId);
      if (!role.isLord) {
        moonbitlang$core$set$$Set$add$20$(role.vassal, role.id);
      }
    }
    role.isLord = true;
    moonbitlang$core$set$$Set$add$20$(nopublish$survivors$$get_nation(role.nationId).areas, areaId);
    area.nationId = role.nationId;
    nopublish$survivors$$set_gmap_color(areaId, nopublish$survivors$$get_nation(area.nationId).iconId);
    if (area.cityLevel < 0 || area.core < 0) {
      if (area.cityLevel < 0) {
        area.cityLevel = 0;
      }
      const buildId = nopublish$survivors$$Area$add_build$46$inner(area, 7, ex, ey, area.nationId, 0);
      area.core = buildId;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$GameWorld$area_to_city$46$inner(self, areaId, opNationId) {
  const area = moonbitlang$core$array$$Array$at$39$(self.areas, areaId);
  if (area.cityLevel >= 0) {
    return undefined;
  }
  let best_role_id = -1;
  let best_val = -1;
  if (area.humanCnt > 5 || opNationId >= 0) {
    if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) > 0.5) {
      const _it = moonbitlang$core$builtin$$Map$iterator2$63$(area.roleOccupy);
      while (true) {
        const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
        if (_bind$56 === undefined) {
          break;
        } else {
          const _Some = _bind$56;
          const _x = _Some;
          const _id = _x._1;
          if (moonbitlang$core$builtin$$Map$contains$22$(self.roleMap, _id)) {
            const role = moonbitlang$core$builtin$$Map$at$22$(self.roleMap, _id);
            if (opNationId >= 0 && role.nationId !== opNationId) {
              continue;
            }
            if (role.life.gold > best_val) {
              best_role_id = role.id;
              best_val = role.life.gold;
            }
          }
          continue;
        }
      }
    } else {
      const _it = moonbitlang$core$builtin$$Map$iterator2$63$(area.roleOccupy);
      while (true) {
        const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
        if (_bind$56 === undefined) {
          break;
        } else {
          const _Some = _bind$56;
          const _x = _Some;
          const _id = _x._1;
          if (moonbitlang$core$builtin$$Map$contains$22$(self.roleMap, _id)) {
            const role = moonbitlang$core$builtin$$Map$at$22$(self.roleMap, _id);
            if (opNationId >= 0 && role.nationId !== opNationId) {
              continue;
            }
            if (role.life.score + 0 > best_val) {
              best_role_id = role.id;
              best_val = role.life.score + 0;
            }
          }
          continue;
        }
      }
    }
    nopublish$survivors$$GameWorld$role_to_city_lord(nopublish$survivors$$world, areaId, best_role_id);
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Area$change_own(self, tNationId) {
  const oldSrcId = self.nationId;
  const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
  const oldBuildings = moonbitlang$core$builtin$$Map$copy$62$(self.buildings);
  const _it = moonbitlang$core$builtin$$Map$iterator2$62$(oldBuildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _buildId = _x._0;
      const _build = _x._1;
      if (_build.nationId === oldSrcId || oldSrcId < 0) {
        if (_build.cate === 5) {
          continue;
        }
        nopublish$survivors$$Area$destroy_build$46$inner(self, _buildId, _build.x, _build.y, areaId, -1);
        if (tNationId >= 0) {
          nopublish$survivors$$Area$add_build$46$inner(self, _build.cate, _build.x, _build.y, tNationId, 0);
        }
      }
      continue;
    }
  }
  self.nationId = tNationId;
  if (oldSrcId >= 0) {
    moonbitlang$core$set$$Set$remove$20$(nopublish$survivors$$get_nation(oldSrcId).areas, areaId);
  }
  if (self.lordId >= 0) {
    if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, self.lordId)) {
      const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, self.lordId);
      moonbitlang$core$set$$Set$remove$20$(role.areas, areaId);
      self.lordId = -1;
    } else {
      self.lordId = -1;
    }
  }
  if (tNationId >= 0) {
    nopublish$survivors$$GameWorld$area_to_city$46$inner(nopublish$survivors$$world, areaId, tNationId);
    nopublish$survivors$$set_gmap_color(areaId, nopublish$survivors$$get_nation(tNationId).iconId);
  } else {
    const _p = self.nests;
    if (_p.size > 0) {
      moonbitlang$core$set$$Set$add$20$(nopublish$survivors$$get_nation(5).areas, areaId);
      self.nationId = 5;
      nopublish$survivors$$set_gmap_color(areaId, 5);
    } else {
      nopublish$survivors$$set_gmap_color(areaId, 4);
    }
  }
  if (tNationId === nopublish$survivors$$world.player.nationId && oldSrcId !== tNationId) {
    nopublish$survivors$$log(`玩家获得了被魔物占领的区域(${moonbitlang$core$int$$Int$to_string$46$inner(self.gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(self.gy, 10)})`);
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Area$empty(self) {
  const _p = self.buildings;
  if (_p.size === 0) {
    const _p$2 = self.roleOccupy;
    return _p$2.size === 0;
  } else {
    return false;
  }
}
function nopublish$survivors$$Area$set_occupy(self, x, y, id) {
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  moonbitlang$core$builtin$$Map$contains$63$(self.roleOccupy, pos);
  moonbitlang$core$builtin$$Map$set$63$(self.roleOccupy, pos, id);
}
function nopublish$survivors$$GameWorld$role_in_camera(self, role) {
  if (role.inTeam) {
    return false;
  }
  if (!self.inGlobe && (!role.inGlobe && self.showAreaId === ((Math.imul(role.gx, 18) | 0) + role.gy | 0))) {
    return true;
  }
  return false;
}
function nopublish$survivors$$batch_render_terrain(terrain, entities) {
  Milky2018$selene$system$$deferred_event_system(0);
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < terrain.length && i < entities.length) {
      const icon = moonbitlang$core$array$$Array$at$20$(terrain, i);
      const e = moonbitlang$core$array$$Array$at$1$(entities, i);
      if (icon >= 0) {
        moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, e, moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$terrainSprites, icon));
        if (!Milky2018$selene$entity$$Entity$is_alive(e)) {
          Milky2018$selene$entity$$Entity$respawn(e);
        }
      } else {
        if (Milky2018$selene$entity$$Entity$is_alive(e)) {
          Milky2018$selene$entity$$Entity$destroy(e);
        }
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$Role$repos(self) {
  Milky2018$selene$system$$deferred_event_system(0);
  if (self.inGlobe) {
    Milky2018$selene$entity$$Entity$set_offset(self.ge, { _0: (self.gx + 0) * 16, _1: nopublish$survivors$$world.offy + (self.gy + 0) * 16 });
    if (nopublish$survivors$$world.inGlobe) {
      if (!self.inTeam) {
        if (!Milky2018$selene$entity$$Entity$is_alive(self.ge)) {
          Milky2018$selene$entity$$Entity$respawn(self.ge);
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      if (Milky2018$selene$entity$$Entity$is_alive(self.ge)) {
        Milky2018$selene$entity$$Entity$destroy(self.ge);
        return;
      } else {
        return;
      }
    }
  } else {
    Milky2018$selene$entity$$Entity$set_offset(self.ae, { _0: (self.ax + 0) * 16, _1: nopublish$survivors$$world.offy + (self.ay + 0) * 16 });
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    if (!nopublish$survivors$$world.inGlobe && nopublish$survivors$$world.showAreaId === areaId) {
      if (!Milky2018$selene$entity$$Entity$is_alive(self.ae)) {
        Milky2018$selene$entity$$Entity$respawn(self.ae);
        return;
      } else {
        return;
      }
    } else {
      if (Milky2018$selene$entity$$Entity$is_alive(self.ae)) {
        Milky2018$selene$entity$$Entity$destroy(self.ae);
        return;
      } else {
        return;
      }
    }
  }
}
function nopublish$survivors$$Role$to_border(self) {
  if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) > 0.5) {
    if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) > 0.5) {
      self.ax = 0;
      return;
    } else {
      self.ax = 17;
      return;
    }
  } else {
    if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) > 0.5) {
      self.ay = 1;
      return;
    } else {
      self.ay = 17;
      return;
    }
  }
}
function nopublish$survivors$$GameWorld$set_goccupy(self, x, y, id) {
  const idx = (Math.imul(x, 18) | 0) + y | 0;
  moonbitlang$core$array$$Array$set$20$(self.globeOccupy, idx, id);
}
function nopublish$survivors$$GameWorld$showGlobe(self) {
  nopublish$survivors$$world.travelText.content = "大世界旅行中!";
  self.inGlobe = true;
  self.showAreaId = -1;
  Milky2018$selene$entity$$Entity$respawn(self.globePanel);
  Milky2018$selene$entity$$Entity$destroy(self.areaPanel);
  Milky2018$selene$entity$$Entity$destroy(self.areaBuildPanel);
  Milky2018$selene$system$$deferred_event_system(0);
  const _it = moonbitlang$core$builtin$$Map$iterator2$22$(nopublish$survivors$$world.roleMap);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$22$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _role = _x._1;
      if (_role.inGlobe) {
        if (!_role.inTeam) {
          if (!Milky2018$selene$entity$$Entity$is_alive(_role.ge)) {
            Milky2018$selene$entity$$Entity$respawn(_role.ge);
          }
        }
      } else {
        if (Milky2018$selene$entity$$Entity$is_alive(_role.ae)) {
          Milky2018$selene$entity$$Entity$destroy(_role.ae);
        }
      }
      continue;
    }
  }
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _root = _Some;
    nopublish$survivors$$Control$show({ self: _root.nationTable, method_0: nopublish$survivors$$Control$getWidget$95$, method_1: nopublish$survivors$$Control$render$95$ });
    nopublish$survivors$$Control$render$95$(_root.nationTable);
    nopublish$survivors$$Control$hide({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ });
    return;
  }
}
function nopublish$survivors$$Role$toGlobe(self) {
  if (!self.inGlobe) {
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
    const _bind$56 = self.cate;
    switch (_bind$56) {
      case 1: {
        area.humanCnt = area.humanCnt - 1 | 0;
        nopublish$survivors$$world.npcCnt = nopublish$survivors$$world.npcCnt + 1 | 0;
        break;
      }
      case 3: {
        area.humanCnt = area.humanCnt - 1 | 0;
        nopublish$survivors$$world.heroCnt = nopublish$survivors$$world.heroCnt + 1 | 0;
        break;
      }
      case 2: {
        area.enemyCnt = area.enemyCnt - 1 | 0;
        nopublish$survivors$$world.enemyCnt = nopublish$survivors$$world.enemyCnt + 1 | 0;
        break;
      }
    }
    nopublish$survivors$$Area$clear_occupy(area, self.ax, self.ay, self.id);
    Milky2018$selene$entity$$Entity$destroy(self.ae);
    if (!self.inTeam) {
      Milky2018$selene$entity$$Entity$respawn(self.ge);
    }
    self.inGlobe = true;
    nopublish$survivors$$GameWorld$set_goccupy(nopublish$survivors$$world, self.gx, self.gy, self.id);
    if (nopublish$survivors$$world.player.id === self.id) {
      nopublish$survivors$$GameWorld$showGlobe(nopublish$survivors$$world);
    }
    if (nopublish$survivors$$GameWorld$role_in_camera(nopublish$survivors$$world, self)) {
      nopublish$survivors$$log(`角色[${moonbitlang$core$int$$Int$to_string$46$inner(self.id, 10)}]离开了当前区域(${moonbitlang$core$int$$Int$to_string$46$inner(self.gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(self.gy, 10)})`);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Role$get_follow_soldier_type_name(self) {
  const _bind$56 = self.followSoldierType;
  switch (_bind$56) {
    case 12: {
      return "步兵";
    }
    case 13: {
      return "弓兵";
    }
    case 14: {
      return "攻城兵";
    }
    default: {
      return `兵种类型${moonbitlang$core$int$$Int$to_string$46$inner(self.followSoldierType, 10)}`;
    }
  }
}
function nopublish$survivors$$Role$get_name(self) {
  return `角色[${moonbitlang$core$int$$Int$to_string$46$inner(self.id, 10)}]`;
}
function nopublish$survivors$$Control$render$96$(self) {
  if (self.showHero) {
    nopublish$survivors$$Control$render$98$(self.heroPage);
    nopublish$survivors$$GameWorld$hideBuildLines(nopublish$survivors$$world);
  } else {
    nopublish$survivors$$Control$hide({ self: self.heroPage, method_0: nopublish$survivors$$Control$getWidget$98$, method_1: nopublish$survivors$$Control$render$98$ });
    nopublish$survivors$$GameWorld$renderBuildLines(nopublish$survivors$$world);
  }
  nopublish$survivors$$AreaLowerTab$renderStat(self);
  nopublish$survivors$$Control$show({ self: self, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ });
}
function nopublish$survivors$$GameWorld$renderBuildLines(self) {
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _root = _Some;
    if (!nopublish$survivors$$world.inGlobe && self.showAreaId >= 0) {
      const area = moonbitlang$core$array$$Array$at$39$(self.areas, self.showAreaId);
      const buildLines = _root.areaLower.buildLines;
      const _it = moonbitlang$core$builtin$$Map$iterator2$61$(buildLines);
      while (true) {
        const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$61$(_it);
        if (_bind$57 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$57;
          const _x = _Some$2;
          const _lines = _x._1;
          nopublish$survivors$$Control$hide({ self: _lines, method_0: nopublish$survivors$$Control$getWidget$97$, method_1: nopublish$survivors$$Control$render$97$ });
          continue;
        }
      }
      let lineIdx = 0;
      const _len = nopublish$survivors$$lordChosenBuildings.length;
      let _tmp$6 = 0;
      while (true) {
        const _i = _tmp$6;
        if (_i < _len) {
          const cate = nopublish$survivors$$lordChosenBuildings[_i];
          if (!moonbitlang$core$builtin$$Map$contains$61$(buildLines, cate)) {
            const lines = nopublish$survivors$$BuildLine$new(cate);
            moonbitlang$core$builtin$$Map$set$61$(buildLines, cate, lines);
            nopublish$survivors$$Control$add_child({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }, { self: lines, method_0: nopublish$survivors$$Control$getWidget$97$, method_1: nopublish$survivors$$Control$render$97$ });
            nopublish$survivors$$Widget$set_offset(lines.line, { _0: 0, _1: 60 + (lineIdx + 0) * 12 });
          } else {
            const lines = moonbitlang$core$builtin$$Map$at$61$(buildLines, cate);
            nopublish$survivors$$Widget$set_offset(lines.line, { _0: 0, _1: 60 + (lineIdx + 0) * 12 });
          }
          lineIdx = lineIdx + 1 | 0;
          const lines = moonbitlang$core$builtin$$Map$at$61$(buildLines, cate);
          if (!moonbitlang$core$builtin$$Map$contains$63$(area.buildStat, cate)) {
            nopublish$survivors$$BuildLine$set_alloc(lines, 0, 0);
            nopublish$survivors$$BuildLine$set_num(lines, 0);
            nopublish$survivors$$Control$show({ self: lines, method_0: nopublish$survivors$$Control$getWidget$97$, method_1: nopublish$survivors$$Control$render$97$ });
          } else {
            const buildNum = moonbitlang$core$builtin$$Map$at$63$(area.buildStat, cate);
            const personLimit = Math.imul(moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate).maxPerson, buildNum) | 0;
            let existNum = 0;
            if (moonbitlang$core$builtin$$Map$contains$63$(area.buildCatePersonNum, cate)) {
              existNum = moonbitlang$core$builtin$$Map$at$63$(area.buildCatePersonNum, cate);
            }
            nopublish$survivors$$BuildLine$set_alloc(lines, existNum, personLimit);
            nopublish$survivors$$BuildLine$set_num(lines, buildNum);
            nopublish$survivors$$Control$show({ self: lines, method_0: nopublish$survivors$$Control$getWidget$97$, method_1: nopublish$survivors$$Control$render$97$ });
          }
          _tmp$6 = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  }
}
function nopublish$survivors$$BuildLine$new(cate) {
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = nopublish$survivors$$Widget$new({ _0: 0, _1: 0 }, undefined);
  const _bind$58 = nopublish$survivors$$Widget$new({ _0: 50, _1: 0 }, undefined);
  const _bind$59 = nopublish$survivors$$Widget$new({ _0: 75, _1: 0 }, { _0: 5, _1: 10 });
  const _bind$60 = nopublish$survivors$$Widget$new({ _0: 80, _1: 0 }, undefined);
  const _bind$61 = nopublish$survivors$$Widget$new({ _0: 120, _1: 0 }, { _0: 5, _1: 10 });
  const _bind$62 = nopublish$survivors$$Widget$new({ _0: 135, _1: 0 }, { _0: 10, _1: 10 });
  const line = { line: _bind$56, name: _bind$57, num: _bind$58, minus: _bind$59, allocs: _bind$60, add: _bind$61, choose: _bind$62, cate: cate };
  nopublish$survivors$$Control$add_widgets({ self: line, method_0: nopublish$survivors$$Control$getWidget$97$, method_1: nopublish$survivors$$Control$render$97$ }, [_bind$57, _bind$58, _bind$59, _bind$60, _bind$61, _bind$62]);
  nopublish$survivors$$Widget$set_text(_bind$57, nopublish$survivors$$get_build_name(cate), undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(_bind$59, "-", undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(_bind$61, "+", undefined, undefined, undefined);
  nopublish$survivors$$Widget$set_text(_bind$62, "建造", undefined, undefined, undefined);
  nopublish$survivors$$Widget$add_onclick(_bind$61, (e) => {
    moonbitlang$core$builtin$$println$50$("build add");
    nopublish$survivors$$ui_build_alloc_add(cate);
  });
  _bind$61.nick = "build line add";
  nopublish$survivors$$Widget$add_onclick(_bind$59, (e) => {
    moonbitlang$core$builtin$$println$50$("build minus");
    nopublish$survivors$$ui_build_alloc_minus(cate);
  });
  _bind$59.nick = "build line minus";
  nopublish$survivors$$Widget$add_onclick(_bind$62, (e) => {
    moonbitlang$core$builtin$$println$50$("buld choose");
    nopublish$survivors$$world.wannaBuildCate = cate;
    const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
    let s = `选中了建筑类型:${desc.name},消耗经济值${String(desc.ecoCost)}可以建造它.点击地图以外的地方取消选中.`;
    s = `${s},数量上限:${moonbitlang$core$int$$Int$to_string$46$inner(desc.maxLimit, 10)}`;
    if (desc.maxPerson > 0) {
      s = `${s},提供岗位数:${moonbitlang$core$int$$Int$to_string$46$inner(desc.maxPerson, 10)}`;
    }
    if (desc.ecoPerson > 0) {
      s = `${s},每日每人经济产出:${String(desc.ecoPerson)}`;
    }
    if (desc.foodPerson > 0) {
      s = `${s},每日每人食物产出:${String(desc.foodPerson)}`;
    }
    if (desc.equipPerson > 0) {
      s = `${s},每日每人装备产出:${String(desc.equipPerson)}`;
    }
    if (desc.cityDefense > 0) {
      s = `${s}提供城防值${String(desc.cityDefense)}`;
    }
    nopublish$survivors$$log(s);
  });
  _bind$62.nick = "build line choose";
  return line;
}
function nopublish$survivors$$ui_build_alloc_add(cate) {
  if (!nopublish$survivors$$world.inGlobe) {
    if (nopublish$survivors$$world.showAreaId >= 0) {
      const _bind$56 = nopublish$survivors$$world.opRoot;
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _root = _Some;
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
        if (!(area.nationId === nopublish$survivors$$world.player.nationId)) {
          nopublish$survivors$$log("不可以调整不属于自己的城市");
          return undefined;
        }
        if (area.freeRoleNum < 1) {
          nopublish$survivors$$log("空闲的人物不够");
          return undefined;
        }
        nopublish$survivors$$Area$auto_alloc_to_cate$46$inner(area, cate, area.nationId === nopublish$survivors$$world.player.nationId);
        nopublish$survivors$$Area$recalc_build_stat$46$inner(area, true);
        if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }) && !_root.areaLower.showHero) {
          nopublish$survivors$$Control$render$96$(_root.areaLower);
          return;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$ui_build_alloc_minus(cate) {
  if (!nopublish$survivors$$world.inGlobe) {
    if (nopublish$survivors$$world.showAreaId >= 0) {
      const _bind$56 = nopublish$survivors$$world.opRoot;
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _root = _Some;
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
        if (!(area.nationId === nopublish$survivors$$world.player.nationId)) {
          nopublish$survivors$$log("不可以调整不属于自己的城市");
          return undefined;
        }
        nopublish$survivors$$Area$auto_release_from_cate(area, cate);
        nopublish$survivors$$Area$recalc_build_stat$46$inner(area, true);
        if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }) && !_root.areaLower.showHero) {
          nopublish$survivors$$Control$render$96$(_root.areaLower);
          return;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Control$render$98$(self) {
  const nationId = nopublish$survivors$$world.player.nationId;
  const nation = nopublish$survivors$$get_nation(nationId);
  const _tmp$6 = self.heroNum;
  const _p = nation.heros;
  nopublish$survivors$$Widget$set_text(_tmp$6, `英雄数量:${moonbitlang$core$int$$Int$to_string$46$inner(_p.size, 10)}`, undefined, undefined, undefined);
  const start = self.lines.length;
  const heroIds = moonbitlang$core$set$$Set$to_array$20$(nation.heros);
  const _end1035 = heroIds.length;
  let _tmp$7 = start;
  while (true) {
    const i = _tmp$7;
    if (i < _end1035) {
      if (self.dieHeroLine.length > 0) {
        const line = moonbitlang$core$array$$Array$remove$25$(self.dieHeroLine, 0);
        moonbitlang$core$array$$Array$push$25$(self.lines, line);
      } else {
        const line = nopublish$survivors$$HeroLine$new();
        nopublish$survivors$$Control$add_widget({ self: self, method_0: nopublish$survivors$$Control$getWidget$98$, method_1: nopublish$survivors$$Control$render$98$ }, line.line);
        moonbitlang$core$array$$Array$push$25$(self.lines, line);
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _end1042 = heroIds.length;
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$8;
    if (i < _end1042) {
      const heroId = moonbitlang$core$array$$Array$at$20$(heroIds, i);
      const line = moonbitlang$core$array$$Array$at$25$(self.lines, i);
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, heroId)) {
        const hero = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, heroId);
        line.heroId = heroId;
        nopublish$survivors$$Widget$set_text(line.hero, nopublish$survivors$$Role$get_name(hero), undefined, undefined, undefined);
        nopublish$survivors$$Widget$set_text(line.soldierTypeName, nopublish$survivors$$Role$get_follow_soldier_type_name(hero), undefined, undefined, undefined);
        nopublish$survivors$$Widget$set_text(line.follow, `${moonbitlang$core$int$$Int$to_string$46$inner(hero.soldiers.length, 10)}/${String(10)}`, undefined, undefined, undefined);
        nopublish$survivors$$Widget$show(nopublish$survivors$$Widget$set_offsetxy(line.line, 0, 70 + (i + 0) * 10));
      } else {
        nopublish$survivors$$Widget$hide(moonbitlang$core$array$$Array$at$25$(self.lines, i).line);
      }
      _tmp$8 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  nopublish$survivors$$Control$show({ self: self, method_0: nopublish$survivors$$Control$getWidget$98$, method_1: nopublish$survivors$$Control$render$98$ });
}
function nopublish$survivors$$HeroLine$new() {
  const line = { line: nopublish$survivors$$Widget$new(undefined, undefined), hero: nopublish$survivors$$Widget$new({ _0: 0, _1: 0 }, undefined), left: nopublish$survivors$$Widget$new({ _0: 55, _1: 0 }, { _0: 5, _1: 10 }), soldierTypeName: nopublish$survivors$$Widget$new({ _0: 60, _1: 0 }, undefined), right: nopublish$survivors$$Widget$new({ _0: 100, _1: 0 }, { _0: 5, _1: 10 }), leftFollow: nopublish$survivors$$Widget$new({ _0: 110, _1: 0 }, { _0: 5, _1: 10 }), follow: nopublish$survivors$$Widget$new({ _0: 115, _1: 0 }, undefined), rightFollow: nopublish$survivors$$Widget$new({ _0: 135, _1: 0 }, { _0: 5, _1: 10 }), control: nopublish$survivors$$Widget$new({ _0: 140, _1: 0 }, { _0: 20, _1: 10 }), heroId: -1 };
  nopublish$survivors$$Widget$set_text(line.left, "<", undefined, undefined, undefined);
  nopublish$survivors$$Widget$add_onclick(line.left, (btn) => {
    moonbitlang$core$builtin$$println$50$("hero minus soldier");
    if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, line.heroId)) {
      const _bind$56 = nopublish$survivors$$world.opRoot;
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _root = _Some;
        const hero = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, line.heroId);
        nopublish$survivors$$Role$switch_follow_solider_type$46$inner(hero, -1);
        if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }) && _root.areaLower.showHero) {
          nopublish$survivors$$Control$render$96$(_root.areaLower);
          return;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  });
  line.left.nick = "hero-line-left";
  nopublish$survivors$$Widget$set_text(line.right, ">", undefined, undefined, undefined);
  nopublish$survivors$$Widget$add_onclick(line.right, (btn) => {
    moonbitlang$core$builtin$$println$50$("hero add soldier");
    if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, line.heroId)) {
      const _bind$56 = nopublish$survivors$$world.opRoot;
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _root = _Some;
        const hero = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, line.heroId);
        nopublish$survivors$$Role$switch_follow_solider_type$46$inner(hero, 1);
        if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }) && _root.areaLower.showHero) {
          nopublish$survivors$$Control$render$96$(_root.areaLower);
          return;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  });
  line.right.nick = "hero-line-right";
  nopublish$survivors$$Widget$set_text(line.leftFollow, "<", undefined, undefined, undefined);
  nopublish$survivors$$Widget$add_onclick(line.leftFollow, (btn) => {
    moonbitlang$core$builtin$$println$50$("minus1");
    nopublish$survivors$$ui_hero_add_soldier(line.heroId);
  });
  line.leftFollow.nick = "leftFollow";
  nopublish$survivors$$Widget$set_text(line.rightFollow, ">", undefined, undefined, undefined);
  nopublish$survivors$$Widget$add_onclick(line.rightFollow, (btn) => {
    moonbitlang$core$builtin$$println$50$("add1");
    nopublish$survivors$$ui_hero_minus_soldier(line.heroId);
  });
  line.rightFollow.nick = "rightFollow";
  line.control.nick = "hero-control";
  nopublish$survivors$$Widget$set_text(line.control, "控制", undefined, undefined, undefined);
  nopublish$survivors$$Widget$add_onclick(line.control, (btn) => {
    moonbitlang$core$builtin$$println$50$("control");
    if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, line.heroId)) {
      const hero = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, line.heroId);
      if (hero.id !== nopublish$survivors$$world.player.id && hero.nationId === nopublish$survivors$$world.player.nationId) {
        nopublish$survivors$$GameWorld$set_hero(nopublish$survivors$$world, hero);
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  });
  nopublish$survivors$$Control$add_widgets({ self: line, method_0: nopublish$survivors$$Control$getWidget$25$, method_1: nopublish$survivors$$Control$render$25$ }, [line.hero, line.left, line.soldierTypeName, line.right, line.leftFollow, line.rightFollow, line.follow, line.control]);
  return line;
}
function nopublish$survivors$$ui_hero_add_soldier(heroId) {
  if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, heroId)) {
    const _bind$56 = nopublish$survivors$$world.opRoot;
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _root = _Some;
      const hero = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, heroId);
      const areaId = (Math.imul(hero.gx, 18) | 0) + hero.gy | 0;
      if (areaId >= 0 && areaId < nopublish$survivors$$world.areas.length) {
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
        nopublish$survivors$$Area$auto_alloc_to_leader(area, hero);
        if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }) && _root.areaLower.showHero) {
          nopublish$survivors$$Control$render$96$(_root.areaLower);
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function nopublish$survivors$$ui_hero_minus_soldier(heroId) {
  if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, heroId)) {
    const _bind$56 = nopublish$survivors$$world.opRoot;
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _root = _Some;
      const hero = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, heroId);
      const areaId = (Math.imul(hero.gx, 18) | 0) + hero.gy | 0;
      if (areaId >= 0 && areaId < nopublish$survivors$$world.areas.length) {
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
        nopublish$survivors$$Area$auto_release_soldier_from_leader(area, hero);
        if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }) && _root.areaLower.showHero) {
          nopublish$survivors$$Control$render$96$(_root.areaLower);
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Area$auto_release_soldier_from_leader(self, leader) {
  if (leader.soldiers.length === 0) {
    return undefined;
  }
  const soldierId = moonbitlang$core$array$$Array$remove$20$(leader.soldiers, 0);
  if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, soldierId)) {
    nopublish$survivors$$Role$unbind_soldier(leader, soldierId);
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Role$unbind_soldier(self, soldierId) {
  if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, soldierId)) {
    const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, soldierId);
    role.leaderId = -1;
    const pos = moonbitlang$core$array$$Array$search$20$(self.soldiers, soldierId);
    if (pos === undefined) {
    } else {
      const _Some = pos;
      const _i = _Some;
      moonbitlang$core$array$$Array$remove$20$(self.soldiers, _i);
    }
    nopublish$survivors$$Role$leader_split_solider(self, role);
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Role$leader_split_solider(self, soldier) {
  soldier.gx = self.gx;
  soldier.ax = self.ax;
  soldier.inTeam = false;
  if (self.inGlobe) {
    nopublish$survivors$$Role$toGlobe(soldier);
    return;
  } else {
    nopublish$survivors$$Role$toArea$46$inner(soldier, true);
    return;
  }
}
function nopublish$survivors$$Role$toArea$46$inner(self, border) {
  if (self.inGlobe) {
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
    if (nopublish$survivors$$Area$empty(area) && (area.nationId === 5 && self.nationId !== 5)) {
      nopublish$survivors$$Area$change_own(area, self.nationId);
    }
    const _bind$56 = self.cate;
    switch (_bind$56) {
      case 1: {
        area.humanCnt = area.humanCnt + 1 | 0;
        nopublish$survivors$$world.npcCnt = nopublish$survivors$$world.npcCnt - 1 | 0;
        break;
      }
      case 3: {
        area.humanCnt = area.humanCnt + 1 | 0;
        nopublish$survivors$$world.heroCnt = nopublish$survivors$$world.heroCnt - 1 | 0;
        break;
      }
      case 2: {
        area.enemyCnt = area.enemyCnt + 1 | 0;
        nopublish$survivors$$world.enemyCnt = nopublish$survivors$$world.enemyCnt - 1 | 0;
        break;
      }
    }
    if (!self.inTeam) {
      Milky2018$selene$entity$$Entity$respawn(self.ae);
    }
    Milky2018$selene$entity$$Entity$destroy(self.ge);
    self.inGlobe = false;
    nopublish$survivors$$GameWorld$clear_goccupy(nopublish$survivors$$world, self.gx, self.gy, self.id);
    if (nopublish$survivors$$world.player.id === self.id) {
      nopublish$survivors$$GameWorld$showArea(nopublish$survivors$$world, areaId);
      nopublish$survivors$$Role$repos(self);
    }
    if (border) {
      nopublish$survivors$$Role$to_border(self);
    }
    nopublish$survivors$$Area$set_occupy(area, self.ax, self.ay, self.id);
    if (nopublish$survivors$$GameWorld$role_in_camera(nopublish$survivors$$world, self)) {
      nopublish$survivors$$log(`角色[${moonbitlang$core$int$$Int$to_string$46$inner(self.id, 10)}]进入了当前区域(${moonbitlang$core$int$$Int$to_string$46$inner(self.gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(self.gy, 10)})`);
    }
  }
  nopublish$survivors$$Role$repos(self);
}
function nopublish$survivors$$GameWorld$showArea(self, pos) {
  nopublish$survivors$$world.travelText.content = "";
  self.inGlobe = false;
  self.showAreaId = pos;
  Milky2018$selene$entity$$Entity$destroy(self.globePanel);
  Milky2018$selene$entity$$Entity$respawn(self.areaPanel);
  Milky2018$selene$entity$$Entity$respawn(self.areaBuildPanel);
  const area = moonbitlang$core$array$$Array$at$39$(self.areas, pos);
  nopublish$survivors$$batch_render_terrain(area.terrain, nopublish$survivors$$world.areaEs);
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < 324) {
      Milky2018$selene$entity$$Entity$destroy(moonbitlang$core$array$$Array$at$1$(nopublish$survivors$$world.areaBes, i));
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  nopublish$survivors$$Area$show_area_building_texts(area);
  Milky2018$selene$system$$deferred_event_system(0);
  const _it = moonbitlang$core$builtin$$Map$iterator2$62$(area.buildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _build = _x._1;
      if (!moonbitlang$core$builtin$$Map$contains$63$(area.buildOccupy, (Math.imul(_build.x, 18) | 0) + _build.y | 0)) {
        continue;
      }
      const pos$2 = (Math.imul(_build.x, 18) | 0) + _build.y | 0;
      const e = moonbitlang$core$array$$Array$at$1$(nopublish$survivors$$world.areaBes, pos$2);
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, e, nopublish$survivors$$Building$get_sprite(_build));
      Milky2018$selene$entity$$Entity$respawn(e);
      continue;
    }
  }
  const x = pos / 18 | 0;
  const y = pos - (Math.imul(x, 18) | 0) | 0;
  Milky2018$selene$system$$deferred_event_system(0);
  const _it$2 = moonbitlang$core$builtin$$Map$iterator2$22$(nopublish$survivors$$world.roleMap);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$22$(_it$2);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _role = _x._1;
      if (Milky2018$selene$entity$$Entity$is_alive(_role.ge)) {
        Milky2018$selene$entity$$Entity$destroy(_role.ge);
      }
      if (_role.inGlobe) {
        if (Milky2018$selene$entity$$Entity$is_alive(_role.ae)) {
          Milky2018$selene$entity$$Entity$destroy(_role.ae);
        }
      } else {
        if (_role.gx === x && _role.gy === y) {
          if (!_role.inTeam) {
            if (!Milky2018$selene$entity$$Entity$is_alive(_role.ae)) {
              Milky2018$selene$entity$$Entity$respawn(_role.ae);
            }
          }
        } else {
          if (Milky2018$selene$entity$$Entity$is_alive(_role.ae)) {
            Milky2018$selene$entity$$Entity$destroy(_role.ae);
          }
        }
      }
      continue;
    }
  }
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _root = _Some;
    nopublish$survivors$$Control$hide({ self: _root.nationTable, method_0: nopublish$survivors$$Control$getWidget$95$, method_1: nopublish$survivors$$Control$render$95$ });
    _root.areaLower.showHero = false;
    nopublish$survivors$$Control$render$96$(_root.areaLower);
    return;
  }
}
function nopublish$survivors$$Area$show_area_building_texts(self) {
  nopublish$survivors$$Area$recalc_build_stat$46$inner(self, true);
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _root = _Some;
    if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }) && !_root.areaLower.showHero) {
      nopublish$survivors$$Control$render$96$(_root.areaLower);
      return;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$GameWorld$set_hero(self, role) {
  self.player = role;
  Milky2018$selene$system$$deferred_event_system(0);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.player.ge, nopublish$survivors$$heroSprite);
  moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.player.ae, nopublish$survivors$$heroSprite);
  nopublish$survivors$$GameWorld$camera_center_at(self, self.player);
  Milky2018$selene$system$$deferred_event_system(0);
  nopublish$survivors$$Role$toGlobe(self.player);
}
function nopublish$survivors$$GameWorld$camera_center_at(self, role) {
  if (role.inGlobe) {
    nopublish$survivors$$GameWorld$showGlobe(self);
    Milky2018$selene$entity$$Entity$respawn(role.ge);
    return;
  } else {
    self.showAreaId = (Math.imul(role.gx, 18) | 0) + role.gx | 0;
    nopublish$survivors$$GameWorld$showArea(self, (Math.imul(role.gx, 18) | 0) + role.gx | 0);
    Milky2018$selene$entity$$Entity$respawn(role.ae);
    return;
  }
}
function nopublish$survivors$$Role$switch_follow_solider_type$46$inner(self, dir) {
  if (dir === -1) {
    const _bind$56 = self.followSoldierType;
    switch (_bind$56) {
      case 12: {
        self.followSoldierType = 14;
        break;
      }
      case 13: {
        self.followSoldierType = 12;
        break;
      }
      case 14: {
        self.followSoldierType = 13;
        break;
      }
    }
  } else {
    const _bind$56 = self.followSoldierType;
    switch (_bind$56) {
      case 12: {
        self.followSoldierType = 13;
        break;
      }
      case 13: {
        self.followSoldierType = 14;
        break;
      }
      case 14: {
        self.followSoldierType = 12;
        break;
      }
    }
  }
  nopublish$survivors$$Role$clear_soldiers(self);
}
function nopublish$survivors$$Role$clear_soldiers(self) {
  const soldiers = moonbitlang$core$array$$Array$copy$20$(self.soldiers);
  const _end894 = soldiers.length;
  let _tmp$6 = 0;
  while (true) {
    const idx = _tmp$6;
    if (idx < _end894) {
      const roleId = moonbitlang$core$array$$Array$at$20$(soldiers, idx);
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, roleId)) {
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, roleId);
        if (role.leaderId === self.id) {
          role.leaderId = -1;
          nopublish$survivors$$Role$leader_split_solider(self, role);
        }
      }
      _tmp$6 = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$20$(self.soldiers);
}
function nopublish$survivors$$Area$auto_clean(self) {
  const clearPoses = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _it = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _pos = _x._0;
      const _roleId = _x._1;
      const _bind$57 = moonbitlang$core$builtin$$Map$get$22$(nopublish$survivors$$world.roleMap, _roleId);
      if (_bind$57 === undefined) {
      } else {
        const _Some$2 = _bind$57;
        const _role = _Some$2;
        if (_role.inGlobe || (_role.inTeam || (_role.gx !== self.gx || (_role.gy !== self.gy || _role.life.hp <= 0)))) {
          moonbitlang$core$set$$Set$add$20$(clearPoses, _pos);
        }
      }
      continue;
    }
  }
  const _it$2 = moonbitlang$core$set$$Set$iterator$20$(clearPoses);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator$next$20$(_it$2);
    if (_bind$56 === undefined) {
      return;
    } else {
      const _Some = _bind$56;
      const _pos = _Some;
      moonbitlang$core$builtin$$Map$remove$63$(self.roleOccupy, _pos);
      continue;
    }
  }
}
function nopublish$survivors$$rndNationId() {
  return moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 4);
}
function nopublish$survivors$$role_entity_from_pool(sprite) {
  if (nopublish$survivors$$epool.size > 0) {
    let eop = undefined;
    const _it = moonbitlang$core$set$$Set$iterator$1$(nopublish$survivors$$epool);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator$next$1$(_it);
      if (_bind$56 === undefined) {
        break;
      } else {
        const _Some = _bind$56;
        const _e = _Some;
        eop = _e;
        break;
      }
    }
    const _bind$56 = eop;
    if (_bind$56 === undefined) {
    } else {
      const _Some = _bind$56;
      const _e = _Some;
      moonbitlang$core$set$$Set$remove$1$(nopublish$survivors$$epool, _e);
      return { _0: _e, _1: true };
    }
  }
  return { _0: Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => sprite, undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$role_entity_from_pool$46$constr$47$5062, nopublish$survivors$$role_entity_from_pool$46$constr$47$5063), _1: false };
}
function nopublish$survivors$$GameWorld$genRoleId(self) {
  const id = self.roleIdCnt;
  self.roleIdCnt = self.roleIdCnt + 1 | 0;
  return id;
}
function nopublish$survivors$$Nation$reg_role(self, id) {
  moonbitlang$core$set$$Set$add$20$(self.roles, id);
}
function nopublish$survivors$$Role$change_sprite_by_cate(self) {
  Milky2018$selene$system$$deferred_event_system(0);
  if (self.id === nopublish$survivors$$world.player.id) {
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.ge, nopublish$survivors$$heroSprite);
    moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.ae, nopublish$survivors$$heroSprite);
  } else {
    _L: {
      _L$2: {
        const _bind$56 = self.cate;
        switch (_bind$56) {
          case 3: {
            break _L$2;
          }
          case 1: {
            break _L$2;
          }
          case 2: {
            let iconLevel = self.life.level;
            if (iconLevel < 0) {
              iconLevel = 0;
            }
            if (iconLevel >= nopublish$survivors$$levelEnemySprites.length) {
              iconLevel = nopublish$survivors$$levelEnemySprites.length - 1 | 0;
            }
            moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.ge, moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$levelEnemySprites, iconLevel));
            moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.ae, moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$levelEnemySprites, iconLevel));
            break;
          }
        }
        break _L;
      }
      const spriteIdx = self.nationId % nopublish$survivors$$npcSprites.length | 0;
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.ge, moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$npcSprites, spriteIdx));
      moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, self.ae, moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$npcSprites, spriteIdx));
    }
  }
  Milky2018$selene$system$$deferred_event_system(0);
}
function nopublish$survivors$$GameWorld$genNPC$46$inner(self, x, y, nationId, isHero) {
  let toNationId = nationId;
  if (nationId < 0) {
    toNationId = nopublish$survivors$$rndNationId();
  }
  let cate = 1;
  if (isHero === -1) {
  } else {
    const _Some = isHero;
    const _ish = _Some;
    if (_ish) {
      cate = 3;
    }
  }
  const spriteIdx = toNationId % nopublish$survivors$$npcSprites.length | 0;
  const _bind$56 = nopublish$survivors$$role_entity_from_pool(moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$npcSprites, spriteIdx));
  const _gsprite = _bind$56._0;
  const _gfrom_pool = _bind$56._1;
  const _bind$57 = nopublish$survivors$$role_entity_from_pool(moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$npcSprites, spriteIdx));
  const _asprite = _bind$57._0;
  const _afrom_pool = _bind$57._1;
  const _bind$58 = cate;
  const _bind$59 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$60 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$61 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$62 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$63 = nopublish$survivors$$GameWorld$genRoleId(nopublish$survivors$$world);
  const _bind$64 = nopublish$survivors$$life_gen();
  const _bind$65 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$66 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$67 = [];
  const npc = { id: _bind$63, cate: _bind$58, ge: _gsprite, ae: _asprite, inGlobe: true, gx: _bind$59, gy: _bind$60, ax: _bind$61, ay: _bind$62, life: _bind$64, nationId: nationId, lordId: -1, isLord: false, areas: _bind$66, vassal: _bind$65, atkArea: -1, atkTarget: -1, atkBuild: -1, rcate: 0, jobBuild: -1, jobBuildCate: -1, jobGx: 0, jobGy: 0, soldiers: _bind$67, followSoldierType: -1, leaderId: -1, inTeam: false, equiped: false };
  npc.life.hp_max = 5;
  npc.life.hp = npc.life.hp_max;
  npc.life.atk = 2;
  npc.nationId = toNationId;
  if (cate === 3 && npc.nationId >= 0) {
    moonbitlang$core$set$$Set$add$20$(nopublish$survivors$$get_nation(npc.nationId).heros, npc.id);
    npc.followSoldierType = 12;
  }
  if (x >= 0) {
    npc.gx = x;
  }
  if (y >= 0) {
    npc.gy = y;
  }
  nopublish$survivors$$Role$to_border(npc);
  moonbitlang$core$builtin$$Map$set$22$(nopublish$survivors$$world.roleMap, npc.id, npc);
  nopublish$survivors$$GameWorld$set_goccupy(nopublish$survivors$$world, npc.gx, npc.gy, npc.id);
  if (nopublish$survivors$$world.heroCnt < 7 && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.1) {
    npc.cate = 3;
    nopublish$survivors$$world.heroCnt = nopublish$survivors$$world.heroCnt + 1 | 0;
    moonbitlang$core$builtin$$println$50$(`generate a hero ${moonbitlang$core$int$$Int$to_string$46$inner(npc.id, 10)}`);
  } else {
    nopublish$survivors$$world.npcCnt = nopublish$survivors$$world.npcCnt + 1 | 0;
  }
  nopublish$survivors$$Nation$reg_role(nopublish$survivors$$get_nation(npc.nationId), npc.id);
  if (_gfrom_pool || _afrom_pool) {
    nopublish$survivors$$Role$change_sprite_by_cate(npc);
  }
  Milky2018$selene$entity$$Entity$destroy(npc.ge);
  Milky2018$selene$entity$$Entity$destroy(npc.ae);
  nopublish$survivors$$Role$repos(npc);
  return npc;
}
function nopublish$survivors$$heroAddClick() {
  if (!nopublish$survivors$$world.inGlobe) {
    if (nopublish$survivors$$world.showAreaId >= 0) {
      const _bind$56 = nopublish$survivors$$world.opRoot;
      if (_bind$56 === undefined) {
        return;
      } else {
        const _Some = _bind$56;
        const _root = _Some;
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
        const gx = nopublish$survivors$$world.showAreaId / 18 | 0;
        const gy = nopublish$survivors$$world.showAreaId - (Math.imul(gx, 18) | 0) | 0;
        if (area.nationId !== nopublish$survivors$$world.player.nationId) {
          nopublish$survivors$$log("只能在自己的城镇征召英雄");
          return undefined;
        }
        if (area.eco >= 10) {
          area.eco = area.eco - 10;
          nopublish$survivors$$GameWorld$genNPC$46$inner(nopublish$survivors$$world, gx, gy, area.nationId, nopublish$survivors$$heroAddClick$46$constr$47$5111);
          if (_root.areaLower.showHero) {
            nopublish$survivors$$Control$render$96$(_root.areaLower);
            return;
          } else {
            return;
          }
        } else {
          nopublish$survivors$$log("经济不足10, 无法征召新英雄");
          return;
        }
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$HeroPage$new() {
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = nopublish$survivors$$Widget$new({ _0: 0, _1: 60 }, undefined);
  const _bind$58 = nopublish$survivors$$Widget$new({ _0: 80, _1: 60 }, undefined);
  const _bind$59 = [];
  const _bind$60 = [];
  const page = { page: _bind$56, heroNum: _bind$57, heroAdd: _bind$58, lines: _bind$59, dieHeroLine: _bind$60 };
  nopublish$survivors$$Widget$set_text(_bind$58, "新增", undefined, undefined, undefined);
  nopublish$survivors$$Widget$add_onclick(_bind$58, (btn) => {
    nopublish$survivors$$heroAddClick();
  });
  _bind$58.nick = "hero add";
  nopublish$survivors$$Control$add_widgets({ self: page, method_0: nopublish$survivors$$Control$getWidget$98$, method_1: nopublish$survivors$$Control$render$98$ }, [_bind$57, _bind$58]);
  return page;
}
function nopublish$survivors$$AreaLowerTab$new() {
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$58 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$59 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$60 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$61 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$62 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$63 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$64 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$65 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$66 = moonbitlang$core$builtin$$Map$new$46$inner$61$(8);
  const _bind$67 = nopublish$survivors$$HeroPage$new();
  const tabs = { tabs: _bind$56, popu: _bind$57, army: _bind$58, eco: _bind$60, food: _bind$59, equip: _bind$61, buildTitle: _bind$62, heroTitle: _bind$63, recruitTitle: _bind$64, areaTitle: _bind$65, buildLines: _bind$66, heroPage: _bind$67, showHero: false };
  nopublish$survivors$$Widget$set_offset(nopublish$survivors$$Widget$set_text(tabs.buildTitle, "建造", undefined, undefined, undefined), { _0: 0, _1: 45 });
  nopublish$survivors$$Widget$set_offset(nopublish$survivors$$Widget$set_text(tabs.heroTitle, "英雄", undefined, undefined, undefined), { _0: 40, _1: 45 });
  nopublish$survivors$$Widget$set_offset(nopublish$survivors$$Widget$set_text(tabs.recruitTitle, "招募流民", undefined, undefined, undefined), { _0: 80, _1: 45 });
  nopublish$survivors$$Widget$set_offset(nopublish$survivors$$Widget$set_text(tabs.areaTitle, "", undefined, undefined, undefined), { _0: 0, _1: -10 });
  nopublish$survivors$$Control$add_widgets({ self: tabs, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }, [nopublish$survivors$$Widget$set_offset(tabs.popu, { _0: 0, _1: 4 }), nopublish$survivors$$Widget$set_offset(tabs.army, { _0: 60, _1: 4 }), nopublish$survivors$$Widget$set_offset(tabs.eco, { _0: 0, _1: 16 }), nopublish$survivors$$Widget$set_offset(tabs.food, { _0: 60, _1: 16 }), nopublish$survivors$$Widget$set_offset(tabs.equip, { _0: 120, _1: 16 }), tabs.buildTitle, tabs.heroTitle, tabs.recruitTitle, tabs.areaTitle]);
  nopublish$survivors$$Control$add_child({ self: tabs, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }, { self: tabs.heroPage, method_0: nopublish$survivors$$Control$getWidget$98$, method_1: nopublish$survivors$$Control$render$98$ });
  nopublish$survivors$$Control$hide({ self: tabs.heroPage, method_0: nopublish$survivors$$Control$getWidget$98$, method_1: nopublish$survivors$$Control$render$98$ });
  nopublish$survivors$$Widget$add_onclick(tabs.buildTitle, (btn) => {
    moonbitlang$core$builtin$$println$50$("show build page");
    tabs.showHero = false;
    nopublish$survivors$$Control$render$96$(tabs);
  });
  tabs.buildTitle.nick = "buildTitle";
  nopublish$survivors$$Widget$add_onclick(tabs.heroTitle, (btn) => {
    moonbitlang$core$builtin$$println$50$("show hero page");
    tabs.showHero = true;
    nopublish$survivors$$Control$render$96$(tabs);
  });
  nopublish$survivors$$Widget$add_onclick(tabs.recruitTitle, (btn) => {
    if (nopublish$survivors$$world.showAreaId >= 0) {
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
      nopublish$survivors$$Area$auto_clean(area);
      const _p = area.roleOccupy;
      let cost = 5 * (_p.size + 0);
      if (cost <= 0) {
        cost = 5;
      }
      if (nopublish$survivors$$world.player.life.gold > cost) {
        const _bind$68 = nopublish$survivors$$world.player.life;
        _bind$68.gold = _bind$68.gold - cost;
        nopublish$survivors$$log(`消耗了${String(cost)}金币招募了一个新人`);
        const npc = nopublish$survivors$$GameWorld$genNPC$46$inner(nopublish$survivors$$world, nopublish$survivors$$world.player.gx, nopublish$survivors$$world.player.gy, nopublish$survivors$$world.player.nationId, -1);
        nopublish$survivors$$Role$toArea$46$inner(npc, true);
        if (!nopublish$survivors$$world.inGlobe) {
          const _bind$69 = nopublish$survivors$$world.opRoot;
          if (_bind$69 === undefined) {
          } else {
            const _Some = _bind$69;
            const _root = _Some;
            nopublish$survivors$$AreaLowerTab$renderStat(_root.areaLower);
          }
        }
      } else {
        nopublish$survivors$$log(`需要消耗 5 * 当前区域人数的金币 来招募人口, 当前金币不足${String(cost)}`);
      }
    }
    nopublish$survivors$$Control$render$96$(tabs);
  });
  tabs.heroTitle.nick = "heroTitle";
  return tabs;
}
function nopublish$survivors$$Control$getWidget$98$(self) {
  return self.page;
}
function nopublish$survivors$$Control$getWidget$25$(self) {
  return self.line;
}
function nopublish$survivors$$Control$render$25$(self) {}
function nopublish$survivors$$Control$render$97$(self) {}
function nopublish$survivors$$Life$levelup_to(self, level) {
  while (true) {
    if (self.level < level) {
      self.level = self.level + 1 | 0;
      self.atk = self.atk + 1 | 0;
      self.hp_max = self.hp_max + 2 | 0;
      self.hp = self.hp_max;
      continue;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$Life$gain_exp(self, val) {
  self.exp = self.exp + val | 0;
  if (self.exp >= 2 << self.level) {
    self.exp = self.exp - (2 << self.level) | 0;
    self.level = self.level + 1 | 0;
    self.atk = self.atk + 1 | 0;
    self.hp_max = self.hp_max + 2 | 0;
    self.hp = self.hp_max;
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Role$hide(self) {
  Milky2018$selene$system$$deferred_event_system(0);
  if (Milky2018$selene$entity$$Entity$is_alive(self.ae)) {
    Milky2018$selene$entity$$Entity$destroy(self.ae);
  }
  if (Milky2018$selene$entity$$Entity$is_alive(self.ge)) {
    Milky2018$selene$entity$$Entity$destroy(self.ge);
  }
  Milky2018$selene$system$$deferred_event_system(0);
  moonbitlang$core$set$$Set$add$1$(nopublish$survivors$$epool, self.ae);
  moonbitlang$core$set$$Set$add$1$(nopublish$survivors$$epool, self.ge);
}
function nopublish$survivors$$Role$init_role_by_cate(self) {
  const _bind$56 = self.rcate;
  switch (_bind$56) {
    case 11: {
      if (self.life.hp_max < 7) {
        self.life.hp_max = 7;
        self.life.hp = self.life.hp_max;
        return;
      } else {
        return;
      }
    }
    case 12: {
      if (self.life.hp_max < 5) {
        self.life.hp_max = 5;
        self.life.hp = self.life.hp_max;
      }
      if (self.life.atkRange < 3) {
        self.life.atkRange = 3;
        return;
      } else {
        return;
      }
    }
    default: {
      return;
    }
  }
}
function nopublish$survivors$$GameWorld$genEnemy$46$inner(self, x, y, level, rcate) {
  let iconLevel = level;
  if (iconLevel < 0) {
    iconLevel = 0;
  }
  if (iconLevel >= nopublish$survivors$$levelEnemySprites.length) {
    iconLevel = nopublish$survivors$$levelEnemySprites.length - 1 | 0;
  }
  const _bind$56 = nopublish$survivors$$role_entity_from_pool(moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$levelEnemySprites, iconLevel));
  const _gsprite = _bind$56._0;
  const _gfrom_pool = _bind$56._1;
  const _bind$57 = nopublish$survivors$$role_entity_from_pool(moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$levelEnemySprites, iconLevel));
  const _asprite = _bind$57._0;
  const _afrom_pool = _bind$57._1;
  const _bind$58 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$59 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$60 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$61 = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const _bind$62 = nopublish$survivors$$GameWorld$genRoleId(nopublish$survivors$$world);
  const _bind$63 = nopublish$survivors$$life_gen();
  const _bind$64 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$65 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
  const _bind$66 = [];
  const enemy = { id: _bind$62, cate: 2, ge: _gsprite, ae: _asprite, inGlobe: true, gx: _bind$58, gy: _bind$59, ax: _bind$60, ay: _bind$61, life: _bind$63, nationId: 5, lordId: -1, isLord: false, areas: _bind$65, vassal: _bind$64, atkArea: -1, atkTarget: -1, atkBuild: -1, rcate: 0, jobBuild: -1, jobBuildCate: -1, jobGx: 0, jobGy: 0, soldiers: _bind$66, followSoldierType: -1, leaderId: -1, inTeam: false, equiped: false };
  if (x >= 0) {
    enemy.gx = x;
  }
  if (y >= 0) {
    enemy.gy = y;
  }
  nopublish$survivors$$Role$to_border(enemy);
  moonbitlang$core$builtin$$Map$set$22$(nopublish$survivors$$world.roleMap, enemy.id, enemy);
  nopublish$survivors$$GameWorld$set_goccupy(nopublish$survivors$$world, enemy.gx, enemy.gy, enemy.id);
  nopublish$survivors$$world.enemyCnt = nopublish$survivors$$world.enemyCnt + 1 | 0;
  nopublish$survivors$$Nation$reg_role(nopublish$survivors$$get_nation(enemy.nationId), enemy.id);
  if (level > 0) {
    nopublish$survivors$$Life$levelup_to(enemy.life, level);
  }
  enemy.rcate = rcate;
  nopublish$survivors$$Role$init_role_by_cate(enemy);
  if (_gfrom_pool || _afrom_pool) {
    nopublish$survivors$$Role$change_sprite_by_cate(enemy);
  }
  Milky2018$selene$entity$$Entity$destroy(enemy.ae);
  nopublish$survivors$$Role$repos(enemy);
  return enemy;
}
function nopublish$survivors$$GameWorld$genEnemyForNest(self, x, y, build, dir) {
  if (x < 0 || (y < 0 || (x >= 18 || (y >= 18 || (dir < 0 || dir >= 4))))) {
    return false;
  }
  const off = moonbitlang$core$array$$Array$at$48$(nopublish$survivors$$nearPoses, dir);
  const enemy = nopublish$survivors$$GameWorld$genEnemy$46$inner(self, x, y, build.level, -1);
  let ax = build.x + moonbitlang$core$array$$Array$at$20$(off, 0) | 0;
  let ay = build.y + moonbitlang$core$array$$Array$at$20$(off, 1) | 0;
  if (ax < 0 || ax >= 18) {
    ax = build.x;
  }
  if (ay < 0 || ay >= 18) {
    ay = build.y;
  }
  enemy.ax = ax;
  enemy.ay = ay;
  nopublish$survivors$$Role$toArea$46$inner(enemy, false);
  return true;
}
function nopublish$survivors$$GameWorld$gen_barbarian(self, gx, gy) {
  let rcate = 12;
  if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) >= 0.3) {
    rcate = 11;
  }
  return nopublish$survivors$$GameWorld$genEnemy$46$inner(self, gx, gy, 0, rcate);
}
function nopublish$survivors$$GameWorld$gen_all_babarians(self) {
  if (nopublish$survivors$$world.enemyCnt > 100) {
    return undefined;
  }
  const areas = moonbitlang$core$array$$Array$copy$39$(self.areas);
  moonbitlang$core$array$$Array$sort_by$39$(areas, (a, b) => $compare_float(b.eco, a.eco));
  if (areas.length > 5) {
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < 6) {
        const area = moonbitlang$core$array$$Array$at$39$(areas, i);
        if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < moonbitlang$core$array$$Array$at$5$(nopublish$survivors$$barbarian_rates, i)) {
          const _end949 = moonbitlang$core$array$$Array$at$20$(nopublish$survivors$$barbarian_nums, i);
          let _tmp$7 = 0;
          while (true) {
            const j = _tmp$7;
            if (j < _end949) {
              const barbarian = nopublish$survivors$$GameWorld$gen_barbarian(self, area.gx, area.gy);
              nopublish$survivors$$Role$toArea$46$inner(barbarian, true);
              _tmp$7 = j + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        _tmp$6 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Role$unbind_leader(self) {
  if (self.leaderId < 0) {
    return undefined;
  }
  if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, self.leaderId)) {
    const leader = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, self.leaderId);
    const pos = moonbitlang$core$array$$Array$search$20$(leader.soldiers, self.id);
    if (pos === undefined) {
    } else {
      const _Some = pos;
      const _i = _Some;
      moonbitlang$core$array$$Array$remove$20$(leader.soldiers, _i);
    }
    nopublish$survivors$$Role$leader_split_solider(leader, self);
  }
  self.leaderId = -1;
}
function nopublish$survivors$$Role$find_atk_build_or_role(self, area) {
  const _it = moonbitlang$core$builtin$$Map$iterator2$63$(area.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _roleId = _x._1;
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _roleId)) {
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _roleId);
        if (role.nationId === self.nationId) {
          continue;
        }
        if (role.inTeam) {
          continue;
        }
        if (self.gx === role.gx && (self.gy === role.gy && role.life.hp > 0)) {
          if (nopublish$survivors$$nation_negative(self.nationId, role.nationId)) {
            self.atkTarget = role.id;
            return true;
          }
        }
      }
      continue;
    }
  }
  if (self.nationId !== 5 && (self.nationId === area.nationId || !nopublish$survivors$$nation_negative(self.nationId, area.nationId))) {
    const _p = area.nests;
    if (_p.size === 0) {
      return false;
    } else {
      const _it$2 = moonbitlang$core$set$$Set$iterator$20$(area.nests);
      while (true) {
        const _bind$56 = moonbitlang$core$builtin$$Iterator$next$20$(_it$2);
        if (_bind$56 === undefined) {
          break;
        } else {
          const _Some = _bind$56;
          const _buildId = _Some;
          if (moonbitlang$core$builtin$$Map$contains$62$(area.buildings, _buildId)) {
            const build = moonbitlang$core$builtin$$Map$at$62$(area.buildings, _buildId);
            if (build.hp < 0) {
              continue;
            }
            self.atkBuild = _buildId;
            return true;
          }
          continue;
        }
      }
    }
  }
  const _it$2 = moonbitlang$core$builtin$$Map$iterator2$62$(area.buildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it$2);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _build = _x._1;
      if (nopublish$survivors$$nation_negative(self.nationId, _build.nationId)) {
        if (_build.hp <= 0) {
          continue;
        }
        self.atkBuild = _build.id;
        return true;
      }
      continue;
    }
  }
  return false;
}
function nopublish$survivors$$Area$find_wall(self) {
  const _it = moonbitlang$core$builtin$$Map$iterator2$62$(self.buildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _build = _x._1;
      if (_build.cate === 16 && _build.hp > 10) {
        return _build;
      }
      continue;
    }
  }
  return undefined;
}
function nopublish$survivors$$Area$get_occupy(self, x, y) {
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  return moonbitlang$core$builtin$$Map$contains$63$(self.roleOccupy, pos) ? moonbitlang$core$builtin$$Map$at$63$(self.roleOccupy, pos) : -1;
}
function nopublish$survivors$$Area$area_has_monster(self) {
  const _it = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _roleId = _x._1;
      const _bind$57 = moonbitlang$core$builtin$$Map$get$22$(nopublish$survivors$$world.roleMap, _roleId);
      if (_bind$57 === undefined) {
      } else {
        const _Some$2 = _bind$57;
        const _role = _Some$2;
        if (_role.nationId === 5 && _role.life.hp > 0) {
          return true;
        }
      }
      continue;
    }
  }
  return false;
}
function nopublish$survivors$$Area$can_change_own(self, tNationId) {
  if (self.nationId < 0) {
    return true;
  }
  if (self.nationId === 5) {
    const _p = self.nests;
    if (_p.size > 0) {
      return false;
    }
    if (tNationId < 0 || tNationId >= nopublish$survivors$$nations.length) {
      return false;
    }
  }
  const _it = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _roleId = _x._1;
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _roleId)) {
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _roleId);
        if (role.inTeam) {
          continue;
        }
        if (role.gx !== self.gx || role.gy !== self.gy) {
          continue;
        }
        if (role.nationId === self.nationId && nopublish$survivors$$Role$is_equiped(role)) {
          return false;
        }
      }
      continue;
    }
  }
  return true;
}
function nopublish$survivors$$Area$no_monster_anymore(self) {
  const _it = moonbitlang$core$builtin$$Map$iterator2$62$(self.buildings);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$62$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _build = _x._1;
      if (_build.cate === 5 && _build.hp >= 0) {
        return false;
      }
      continue;
    }
  }
  const _it$2 = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$2);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _roleId = _x._1;
      const _bind$57 = moonbitlang$core$builtin$$Map$get$22$(nopublish$survivors$$world.roleMap, _roleId);
      if (_bind$57 === undefined) {
      } else {
        const _Some$2 = _bind$57;
        const _role = _Some$2;
        if (_role.nationId === 5 && _role.life.hp > 0) {
          return false;
        }
      }
      continue;
    }
  }
  return true;
}
function nopublish$survivors$$Nation$remove_area(self, areaId) {
  if (areaId < 0 || areaId >= nopublish$survivors$$world.areas.length) {
    return undefined;
  }
  const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
  area.nationId = -1;
  moonbitlang$core$set$$Set$remove$20$(self.areas, areaId);
}
function nopublish$survivors$$Role$atk_build(self, target) {
  if (self.id === nopublish$survivors$$world.player.id) {
    nopublish$survivors$$log(`攻击${moonbitlang$core$int$$Int$to_string$46$inner(target.id, 10)}`);
    nopublish$survivors$$world.enemyBarText.content = `建筑[${moonbitlang$core$int$$Int$to_string$46$inner(target.id, 10)}], ♥:${moonbitlang$core$int$$Int$to_string$46$inner(target.hp, 10)}`;
  }
  target.hp = target.hp - nopublish$survivors$$Role$get_atk(self) | 0;
  if (target.hp <= 0) {
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
    let passNationId = -1;
    if (self.nationId >= 0 && self.nationId !== 5) {
      passNationId = self.nationId;
    }
    const _bind$56 = target.cate;
    if (_bind$56 === 5) {
      const _bind$57 = self.life;
      _bind$57.score = _bind$57.score + 100 | 0;
      moonbitlang$core$set$$Set$remove$20$(area.nests, target.id);
      if (self.id === nopublish$survivors$$world.player.id) {
        nopublish$survivors$$log(`拆毁了怪物巢穴${moonbitlang$core$int$$Int$to_string$46$inner(target.id, 10)}获得功绩100点`);
      }
    }
    nopublish$survivors$$Area$destroy_build$46$inner(area, target.id, target.x, target.y, areaId, passNationId);
    if (target.nationId === 5 && area.nationId === 5) {
      if (nopublish$survivors$$Area$no_monster_anymore(area)) {
        const nation = nopublish$survivors$$get_nation(area.nationId);
        nopublish$survivors$$Nation$remove_area(nation, areaId);
        nopublish$survivors$$set_gmap_color(areaId, 4);
      }
    }
    if (nopublish$survivors$$Area$can_change_own(area, self.nationId)) {
      nopublish$survivors$$Area$change_own(area, self.nationId);
      return;
    } else {
      return;
    }
  } else {
    if (target.cate === 5) {
      const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
      if (!nopublish$survivors$$Area$area_has_monster(area)) {
        nopublish$survivors$$GameWorld$genEnemyForNest(nopublish$survivors$$world, self.gx, self.gy, target, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 4));
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  }
}
function nopublish$survivors$$Nation$unreg_role(self, id) {
  moonbitlang$core$set$$Set$remove$20$(self.roles, id);
}
function nopublish$survivors$$GameWorld$die(self, role) {
  nopublish$survivors$$GameWorld$clear_footprint(self, role);
  moonbitlang$core$builtin$$Map$remove$22$(self.roleMap, role.id);
  if (role.leaderId >= 0) {
    nopublish$survivors$$Role$unbind_leader(role);
  }
  if (role.soldiers.length > 0) {
    nopublish$survivors$$Role$clear_soldiers(role);
  }
  if (role.jobBuild >= 0) {
    const area = moonbitlang$core$array$$Array$at$39$(self.areas, (Math.imul(role.jobGx, 18) | 0) + role.jobGy | 0);
    if (moonbitlang$core$builtin$$Map$contains$62$(area.buildings, role.jobBuild)) {
      moonbitlang$core$builtin$$Map$at$62$(area.buildings, role.jobBuild);
      nopublish$survivors$$Area$release_role_from_build(area, role);
    }
  }
  nopublish$survivors$$Nation$unreg_role(nopublish$survivors$$get_nation(role.nationId), role.id);
  if (role.cate === 3 && role.nationId >= 0) {
    moonbitlang$core$set$$Set$remove$20$(nopublish$survivors$$get_nation(role.nationId).heros, role.id);
  }
  nopublish$survivors$$Role$hide(role);
  const oldNationId = role.nationId;
  if (role.id === self.player.id) {
    const _it = moonbitlang$core$builtin$$Map$iterator2$22$(self.roleMap);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$22$(_it);
      if (_bind$56 === undefined) {
        break;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _role = _x._1;
        if (_role.cate === 3 && oldNationId === _role.nationId) {
          nopublish$survivors$$log(`因为操作的角色死亡, 所以控制迁移到了新英雄${nopublish$survivors$$Role$get_name(_role)}`);
          nopublish$survivors$$GameWorld$set_hero(self, _role);
          break;
        }
        continue;
      }
    }
  }
  moonbitlang$core$set$$Set$add$1$(nopublish$survivors$$epool, role.ge);
  moonbitlang$core$set$$Set$add$1$(nopublish$survivors$$epool, role.ae);
}
function nopublish$survivors$$GameWorld$beat(self, role1, role2) {
  if (role2.life.hp <= 0) {
    if (role1.id === nopublish$survivors$$world.player.id) {
      nopublish$survivors$$log(`消灭了${moonbitlang$core$int$$Int$to_string$46$inner(role2.id, 10)}`);
    }
    let exp_level = role2.life.level - role1.life.level | 0;
    if (exp_level < 0) {
      exp_level = 0;
    } else {
      exp_level = exp_level + 1 | 0;
    }
    nopublish$survivors$$GameWorld$die(self, role2);
    if (!role2.inGlobe && !role2.inTeam) {
      let areaId = (Math.imul(role2.gx, 18) | 0) + role2.gy | 0;
      if (areaId < 0) {
        areaId = 0;
      }
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
      if (role2.nationId === 5 && area.nationId === 5) {
        if (nopublish$survivors$$Area$no_monster_anymore(area)) {
          const nation = nopublish$survivors$$get_nation(area.nationId);
          nopublish$survivors$$Nation$remove_area(nation, areaId);
          nopublish$survivors$$set_gmap_color(areaId, 4);
        }
      }
      if (area.nationId >= 0 && nopublish$survivors$$Area$can_change_own(area, role1.nationId)) {
        nopublish$survivors$$Area$change_own(area, role1.nationId);
      }
    }
    nopublish$survivors$$Life$gain_exp(role1.life, 2 << exp_level);
    if (role2.cate === 2) {
      const _bind$56 = role1.life;
      _bind$56.gold = _bind$56.gold + (role2.life.level + 0);
    }
    if (role2.cate === 2) {
      const _bind$56 = role1.life;
      _bind$56.score = _bind$56.score + role2.life.level | 0;
    }
    if (role2.nationId >= 0) {
      const cate = role2.jobBuildCate;
      const nation = nopublish$survivors$$get_nation(role2.nationId);
      _L: {
        switch (cate) {
          case 13: {
            break _L;
          }
          case 12: {
            break _L;
          }
          case 14: {
            break _L;
          }
          default: {
            return;
          }
        }
      }
      nation.soldierNum = nation.soldierNum - 1 | 0;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Role$atkBack(self, target) {
  const _bind$56 = target.life;
  _bind$56.hp = _bind$56.hp - nopublish$survivors$$Role$get_atk(self) | 0;
  if (self.id === nopublish$survivors$$world.player.id) {
    nopublish$survivors$$log(`攻击${moonbitlang$core$int$$Int$to_string$46$inner(target.id, 10)}`);
  }
  if (target.id === nopublish$survivors$$world.player.id) {
    nopublish$survivors$$log(`被${moonbitlang$core$int$$Int$to_string$46$inner(self.id, 10)}攻击`);
  }
  if (target.life.hp <= 0) {
    nopublish$survivors$$GameWorld$beat(nopublish$survivors$$world, self, target);
  }
  if (!nopublish$survivors$$Role$is_equiped(self) && (!self.equiped && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.05)) {
    self.equiped = true;
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Role$atk(self, target) {
  const _bind$56 = target.life;
  _bind$56.hp = _bind$56.hp - nopublish$survivors$$Role$get_atk(self) | 0;
  if (self.id === nopublish$survivors$$world.player.id) {
    let s = `敌人[${moonbitlang$core$int$$Int$to_string$46$inner(target.id, 10)}], ♥:${moonbitlang$core$int$$Int$to_string$46$inner(target.life.hp, 10)}`;
    s = `${s},🗡:${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$Role$get_atk(target), 10)},等级:${moonbitlang$core$int$$Int$to_string$46$inner(target.life.level, 10)}`;
    nopublish$survivors$$world.enemyBarText.content = s;
  }
  if (target.life.hp > 0) {
    nopublish$survivors$$Role$atkBack(target, self);
    return;
  } else {
    nopublish$survivors$$GameWorld$beat(nopublish$survivors$$world, self, target);
    return;
  }
}
function nopublish$survivors$$Role$hp_restore(self) {
  if (self.life.hp < self.life.hp_max) {
    const _bind$56 = self.life;
    _bind$56.hp = _bind$56.hp + 1 | 0;
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Role$negative(self, target) {
  return nopublish$survivors$$nation_negative(self.nationId, target.nationId);
}
function nopublish$survivors$$Role$interact(self, target) {
  if (nopublish$survivors$$Role$negative(self, target)) {
    if (self.id === nopublish$survivors$$world.player.id) {
      nopublish$survivors$$log(`攻击${moonbitlang$core$int$$Int$to_string$46$inner(target.id, 10)}`);
    }
    if (target.id === nopublish$survivors$$world.player.id) {
      nopublish$survivors$$log(`被${moonbitlang$core$int$$Int$to_string$46$inner(self.id, 10)}攻击`);
    }
    nopublish$survivors$$Role$atk(self, target);
    return;
  } else {
    if (self.id === nopublish$survivors$$world.player.id) {
      nopublish$survivors$$log(`被${moonbitlang$core$int$$Int$to_string$46$inner(target.id, 10)}治愈血量`);
    }
    nopublish$survivors$$Role$hp_restore(self);
    nopublish$survivors$$Role$hp_restore(target);
    return;
  }
}
function nopublish$survivors$$Role$move(self, vec) {
  if (vec._0 === 0 && vec._1 === 0) {
    return undefined;
  }
  const debug = self.id === nopublish$survivors$$world.player.id;
  if (self.inGlobe) {
  }
  if (self.inGlobe) {
    if (debug) {
    }
    let ngx = self.gx;
    let ngy = self.gy;
    if (vec._0 > 0) {
      ngx = ngx + 1 | 0;
      if (ngx >= 18) {
        return undefined;
      }
    } else {
      if (vec._0 < 0) {
        ngx = ngx - 1 | 0;
        if (ngx < 0) {
          return undefined;
        }
      } else {
        if (vec._1 > 0) {
          ngy = ngy + 1 | 0;
          if (ngy >= 18) {
            return undefined;
          }
        } else {
          if (vec._1 < 0) {
            ngy = ngy - 1 | 0;
            if (ngy < 0) {
              return undefined;
            }
          }
        }
      }
    }
    const idx = (Math.imul(ngx, 18) | 0) + ngy | 0;
    const existId = moonbitlang$core$array$$Array$at$20$(nopublish$survivors$$world.globeOccupy, idx);
    if (existId >= 0) {
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, existId) && existId !== self.id) {
        const target = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, existId);
        if (target.inGlobe) {
          nopublish$survivors$$Role$interact(self, target);
          return undefined;
        } else {
          nopublish$survivors$$GameWorld$clear_goccupy(nopublish$survivors$$world, target.gx, target.gy, existId);
        }
      } else {
        nopublish$survivors$$GameWorld$clear_goccupy(nopublish$survivors$$world, ngx, ngy, existId);
      }
    }
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, idx);
    if (nopublish$survivors$$nation_negative(area.nationId, self.nationId)) {
      if (area.cityDefense > 0) {
        const wallOp = nopublish$survivors$$Area$find_wall(area);
        if (wallOp === undefined) {
          area.cityDefense = 0;
        } else {
          const _Some = wallOp;
          const _wall = _Some;
          nopublish$survivors$$Role$atk_build(self, _wall);
        }
        return undefined;
      }
    }
    nopublish$survivors$$GameWorld$clear_goccupy(nopublish$survivors$$world, self.gx, self.gy, self.id);
    nopublish$survivors$$GameWorld$set_goccupy(nopublish$survivors$$world, ngx, ngy, self.id);
    self.gx = ngx;
    self.gy = ngy;
    Milky2018$selene$entity$$Entity$set_offset(self.ge, { _0: (self.gx + 0) * 16, _1: (self.gy + 0) * 16 });
    if (!(self.nationId === 5)) {
      if (nopublish$survivors$$world.player.id !== self.id && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.05) {
        nopublish$survivors$$Role$toArea$46$inner(self, true);
      }
      return undefined;
    }
  } else {
    if (debug) {
    }
    if (self.gx < 0) {
      self.gx = 0;
    }
    if (self.gy < 0) {
      self.gy = 0;
    }
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
    let nax = self.ax;
    let nay = self.ay;
    let leave = false;
    if (vec._0 > 0) {
      nax = nax + 1 | 0;
      if (nax >= 18) {
        leave = true;
      }
    } else {
      if (vec._0 < 0) {
        nax = nax - 1 | 0;
        if (nax < 0) {
          leave = true;
        }
      } else {
        if (vec._1 > 0) {
          nay = nay + 1 | 0;
          if (nay >= 18) {
            leave = true;
          }
        } else {
          if (vec._1 < 0) {
            nay = nay - 1 | 0;
            if (nay < 0) {
              leave = true;
            }
          }
        }
      }
    }
    if (leave && !(self.nationId === 5 && self.jobBuild < 0)) {
      if (nopublish$survivors$$world.player.id === self.id || moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.01) {
        nopublish$survivors$$Role$toGlobe(self);
      }
      return undefined;
    }
    if (leave) {
      return undefined;
    }
    const pos = (Math.imul(nax, 18) | 0) + nay | 0;
    const icon = moonbitlang$core$array$$Array$at$20$(area.terrain, pos);
    if (icon < 0) {
      return undefined;
    }
    if (!moonbitlang$core$array$$Array$at$44$(nopublish$survivors$$terrainPass, icon)) {
      return undefined;
    }
    if (moonbitlang$core$builtin$$Map$contains$63$(area.buildOccupy, pos)) {
      const buildId = moonbitlang$core$builtin$$Map$at$63$(area.buildOccupy, pos);
      if (buildId >= 0 && moonbitlang$core$builtin$$Map$contains$62$(area.buildings, buildId)) {
        const build = moonbitlang$core$builtin$$Map$at$62$(area.buildings, buildId);
        if (nopublish$survivors$$nation_negative(self.nationId, build.nationId)) {
          nopublish$survivors$$Role$atk_build(self, build);
          return undefined;
        }
      }
    }
    const existId = nopublish$survivors$$Area$get_occupy(area, nax, nay);
    if (existId >= 0) {
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, existId) && existId !== self.id) {
        const target = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, existId);
        if (!target.inGlobe && (!target.inTeam && (target.gx === self.gx && target.gy === self.gy))) {
          nopublish$survivors$$Role$interact(self, target);
          return undefined;
        }
      }
      nopublish$survivors$$Area$clear_occupy(area, nax, nay, existId);
    }
    nopublish$survivors$$Area$clear_occupy(area, self.ax, self.ay, self.id);
    nopublish$survivors$$Area$set_occupy(area, nax, nay, self.id);
    self.ax = nax;
    self.ay = nay;
    Milky2018$selene$entity$$Entity$set_offset(self.ae, { _0: (self.ax + 0) * 16, _1: (self.ay + 0) * 16 });
  }
  if (nopublish$survivors$$world.player.id === self.id) {
    nopublish$survivors$$world.enemyBarText.content = "";
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$Role$move_forward$46$inner(self, x, y, ofGlobe, about) {
  if (about && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.4) {
    nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, nopublish$survivors$$rnd_move_pairs.length)));
    return undefined;
  }
  if (ofGlobe) {
    if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
      if (self.gx < x) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 0));
        return undefined;
      } else {
        if (self.gx > x) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 2));
          return undefined;
        }
      }
      if (self.gy < y) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 1));
        return;
      } else {
        if (self.gy > y) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 3));
          return;
        } else {
          return;
        }
      }
    } else {
      if (self.gy < y) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 1));
        return undefined;
      } else {
        if (self.gy > y) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 3));
          return undefined;
        }
      }
      if (self.gx < x) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 0));
        return;
      } else {
        if (self.gx > x) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 2));
          return;
        } else {
          return;
        }
      }
    }
  } else {
    if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
      if (self.ax < x) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 0));
        return undefined;
      } else {
        if (self.ax > x) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 2));
          return undefined;
        }
      }
      if (self.ay < y) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 1));
        return;
      } else {
        if (self.ay > y) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 3));
          return;
        } else {
          return;
        }
      }
    } else {
      if (self.ay < y) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 1));
        return undefined;
      } else {
        if (self.ay > y) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 3));
          return undefined;
        }
      }
      if (self.ax < x) {
        nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 0));
        return;
      } else {
        if (self.ax > x) {
          nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, 2));
          return;
        } else {
          return;
        }
      }
    }
  }
}
function nopublish$survivors$$Role$rnd_move(self) {
  if (self.atkArea >= 0 && self.atkArea < nopublish$survivors$$world.areas.length) {
    const tgx = self.atkArea / 18 | 0;
    const tgy = self.atkArea - (Math.imul(18, tgx) | 0) | 0;
    if (self.inGlobe) {
      if (self.gx === tgx && self.gy === tgy) {
        nopublish$survivors$$Role$toArea$46$inner(self, true);
        return undefined;
      } else {
        nopublish$survivors$$Role$move_forward$46$inner(self, tgx, tgy, true, true);
        return undefined;
      }
    } else {
      if (self.gx !== tgx || self.gy !== tgy) {
        nopublish$survivors$$Role$toGlobe(self);
        return undefined;
      }
    }
  }
  if (self.atkBuild >= 0) {
    if (self.inGlobe) {
      self.atkBuild = -1;
    } else {
      const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
      if (moonbitlang$core$builtin$$Map$contains$62$(area.buildings, self.atkBuild)) {
        const build = moonbitlang$core$builtin$$Map$at$62$(area.buildings, self.atkBuild);
        if (!nopublish$survivors$$nation_negative(self.nationId, build.nationId) || build.hp <= 0) {
          self.atkBuild = -1;
        } else {
          if (build.x !== self.ax || build.y !== self.ay) {
            nopublish$survivors$$Role$move_forward$46$inner(self, build.x, build.y, false, true);
            return undefined;
          } else {
            self.atkBuild = -1;
          }
        }
      } else {
        self.atkBuild = -1;
      }
    }
  } else {
    if (self.atkTarget >= 0) {
      if (self.inGlobe) {
        self.atkTarget = -1;
      }
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, self.atkTarget)) {
        const target = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, self.atkTarget);
        if (target.inGlobe) {
          self.atkTarget = -1;
        } else {
          if (target.gx !== self.gx || target.gy !== self.gy) {
            self.atkTarget = -1;
          } else {
            nopublish$survivors$$Role$move_forward$46$inner(self, target.ax, target.ay, false, true);
            return undefined;
          }
        }
      } else {
        self.atkTarget = -1;
      }
    }
  }
  if (self.atkBuild < 0 && self.atkTarget < 0 && (self.atkArea >= 0 && !self.inGlobe)) {
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
    if (self.atkArea === areaId) {
      if (!nopublish$survivors$$Role$find_atk_build_or_role(self, area)) {
        self.atkArea = -1;
      }
    }
  }
  if (self.atkBuild < 0 && (self.atkTarget < 0 && (self.atkArea < 0 && !self.inGlobe))) {
    nopublish$survivors$$Role$is_equiped(self);
    const areaId = (Math.imul(self.gx, 18) | 0) + self.gy | 0;
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
    if (nopublish$survivors$$Role$find_atk_build_or_role(self, area)) {
      return undefined;
    }
  }
  nopublish$survivors$$Role$move(self, moonbitlang$core$array$$Array$at$35$(nopublish$survivors$$rnd_move_pairs, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, nopublish$survivors$$rnd_move_pairs.length)));
}
function nopublish$survivors$$Role$action(self) {
  if (self.id === nopublish$survivors$$world.player.id) {
    return undefined;
  }
  nopublish$survivors$$Role$rnd_move(self);
}
function nopublish$survivors$$batch_render_gmap(gmap, entities) {
  Milky2018$selene$system$$deferred_event_system(0);
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < gmap.length && i < entities.length) {
      const icon = moonbitlang$core$array$$Array$at$20$(gmap, i);
      const e = moonbitlang$core$array$$Array$at$1$(entities, i);
      if (icon >= 0) {
        moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, moonbitlang$core$array$$Array$at$1$(entities, i), moonbitlang$core$array$$Array$at$42$(nopublish$survivors$$gmapSprites, icon));
        if (!Milky2018$selene$entity$$Entity$is_alive(e)) {
          Milky2018$selene$entity$$Entity$respawn(e);
        }
      } else {
        if (Milky2018$selene$entity$$Entity$is_alive(e)) {
          Milky2018$selene$entity$$Entity$destroy(e);
        }
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$get_rnd_avail_nation_id() {
  return moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 4);
}
function nopublish$survivors$$rnd_nest_level() {
  const _end690 = nopublish$survivors$$levelEnemySprites.length;
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < _end690) {
      if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
        return i;
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return nopublish$survivors$$levelEnemySprites.length - 1 | 0;
}
function nopublish$survivors$$GameWorld$gen_nest_gxy(self, level, x, y) {
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  const area = moonbitlang$core$array$$Array$at$39$(self.areas, pos);
  const _bind$56 = nopublish$survivors$$Area$find_empty_pos(area);
  const _ax = _bind$56._0;
  const _ay = _bind$56._1;
  if (_ax < 0 || _ay < 0) {
    return undefined;
  }
  const buildId = nopublish$survivors$$Area$add_build$46$inner(area, 5, _ax, _ay, 5, level);
  if (area.nationId < 0) {
    nopublish$survivors$$Area$change_own(area, 5);
  }
  if (moonbitlang$core$builtin$$Map$contains$62$(area.buildings, buildId)) {
    if (nopublish$survivors$$world.enemyCnt < 100) {
      let _tmp$6 = 0;
      while (true) {
        const i = _tmp$6;
        if (i < 5) {
          nopublish$survivors$$GameWorld$genEnemyForNest(self, x, y, moonbitlang$core$builtin$$Map$at$62$(area.buildings, buildId), moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 4));
          _tmp$6 = i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$GameWorld$gen_nest$46$inner(self, opLevel) {
  let level = opLevel;
  if (level < 0) {
    level = nopublish$survivors$$rnd_nest_level();
  }
  const x = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const y = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  nopublish$survivors$$GameWorld$gen_nest_gxy(self, level, x, y);
}
function nopublish$survivors$$shuffle_rnd_gen(upper) {
  return moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, upper);
}
function nopublish$survivors$$Area$auto_alloc_role_to_cate(self, cate) {
  if (self.freeRoleNum === 0) {
    return false;
  }
  const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
  if (self.food <= 0 && desc.foodPerson <= 0) {
    return false;
  }
  let maxPersonNum = 0;
  if (moonbitlang$core$builtin$$Map$contains$63$(self.buildStat, cate)) {
    maxPersonNum = Math.imul(desc.maxPerson, moonbitlang$core$builtin$$Map$at$63$(self.buildStat, cate)) | 0;
  } else {
    maxPersonNum = 0;
  }
  let existPerNum = 0;
  if (moonbitlang$core$builtin$$Map$contains$63$(self.buildCatePersonNum, cate)) {
    existPerNum = moonbitlang$core$builtin$$Map$at$63$(self.buildCatePersonNum, cate);
  }
  if (existPerNum < maxPersonNum) {
    const _it = moonbitlang$core$builtin$$Map$iterator2$63$(self.roleOccupy);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
      if (_bind$56 === undefined) {
        break;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _roleId = _x._1;
        if (!moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _roleId)) {
          continue;
        }
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _roleId);
        if (role.jobBuild >= 0 || (role.id === nopublish$survivors$$world.player.id || (role.nationId !== self.nationId || role.cate === 3))) {
          continue;
        }
        const _it$2 = moonbitlang$core$builtin$$Map$iterator2$62$(self.buildings);
        while (true) {
          const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$62$(_it$2);
          if (_bind$57 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$57;
            const _x$2 = _Some$2;
            const _build = _x$2._1;
            let _tmp$6;
            if (_build.cate === cate) {
              let _tmp$7;
              if (_build.nationId === self.nationId) {
                const _p = _build.roles;
                const _tmp$8 = _p.size;
                _tmp$7 = _tmp$8 < desc.maxPerson;
              } else {
                _tmp$7 = false;
              }
              _tmp$6 = _tmp$7;
            } else {
              _tmp$6 = false;
            }
            if (_tmp$6) {
              nopublish$survivors$$Area$alloc_role_to_build(self, _build, role);
              return true;
            }
            continue;
          }
        }
        continue;
      }
    }
  }
  return false;
}
function nopublish$survivors$$Area$auto_alloc_role(self) {
  if (nopublish$survivors$$Area$auto_alloc_role_to_cate(self, 7)) {
    return true;
  }
  moonbitlang$core$array$$Array$shuffle_in_place$20$(nopublish$survivors$$rndLordChosenBuildings, nopublish$survivors$$shuffle_rnd_gen);
  const _len = nopublish$survivors$$rndLordChosenBuildings.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len) {
      const cate = nopublish$survivors$$rndLordChosenBuildings[_i];
      if (nopublish$survivors$$Area$auto_alloc_role_to_cate(self, cate)) {
        return true;
      }
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function nopublish$survivors$$Area$can_build$46$inner(self, cate, x, y, nationId, level, useEco, logback, consoleBack, allowingDebt) {
  if (nopublish$survivors$$Area$get_occupy(self, x, y) >= 0) {
    if (logback) {
      nopublish$survivors$$log("此处被占用, 无法建造");
    }
    if (consoleBack) {
      moonbitlang$core$builtin$$println$50$("此处被占用, 无法建造");
    }
    return false;
  }
  if (cate < 0 || cate >= nopublish$survivors$$buildDescs.length) {
    if (logback) {
      nopublish$survivors$$log("超出范围的建筑类别");
    }
    if (consoleBack) {
      moonbitlang$core$builtin$$println$50$("超出范围的建筑类别");
    }
    return false;
  }
  const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
  if (nationId === self.nationId) {
    if (moonbitlang$core$builtin$$Map$contains$63$(self.buildStat, cate) && moonbitlang$core$builtin$$Map$at$63$(self.buildStat, cate) >= desc.maxLimit) {
      const desc$2 = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
      if (logback) {
        nopublish$survivors$$log(`此区域${desc$2.name}的数量达到上限${moonbitlang$core$int$$Int$to_string$46$inner(desc$2.maxLimit, 10)},无法建造`);
      }
      if (consoleBack) {
        moonbitlang$core$builtin$$println$50$(`此区域${desc$2.name}的数量达到上限${moonbitlang$core$int$$Int$to_string$46$inner(desc$2.maxLimit, 10)},无法建造`);
      }
      return false;
    }
    if (!allowingDebt && (useEco && self.eco < desc.ecoCost)) {
      if (logback) {
        nopublish$survivors$$log(`此区域经济值不足${desc.name}所需的${String(desc.ecoCost)},无法建造`);
      }
      if (consoleBack) {
        moonbitlang$core$builtin$$println$50$(`此区域经济值不足${desc.name}所需的${String(desc.ecoCost)},无法建造`);
      }
      return false;
    }
  }
  return true;
}
function nopublish$survivors$$Area$auto_fill_build_cate_num$46$inner(self, cate, num, useEco) {
  let successNum = 0;
  const _end138 = Math.imul(num, 6) | 0;
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < _end138) {
      const _bind$56 = nopublish$survivors$$Area$find_empty_pos(self);
      const _x = _bind$56._0;
      const _y = _bind$56._1;
      if (nopublish$survivors$$Area$can_build$46$inner(self, cate, _x, _y, self.nationId, 0, useEco, false, false, false)) {
        const cost = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate).ecoCost;
        if (!useEco || self.eco >= cost) {
          nopublish$survivors$$Area$add_build$46$inner(self, cate, _x, _y, self.nationId, 0);
          successNum = successNum + 1 | 0;
          if (successNum >= num) {
            break;
          }
        }
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function nopublish$survivors$$GameWorld$init_gen_city$46$inner(self, opNationId, nationRoleCnt) {
  const x = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const y = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 18);
  const pos = (Math.imul(x, 18) | 0) + y | 0;
  const area = moonbitlang$core$array$$Array$at$39$(self.areas, pos);
  if (area.cityLevel < 0) {
    area.gold = 3000;
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < 3) {
        const _p = nopublish$survivors$$world.roleMap;
        const _tmp$7 = _p.size;
        if ((_tmp$7 - nopublish$survivors$$world.enemyCnt | 0) < 600) {
          const role = nopublish$survivors$$GameWorld$genNPC$46$inner(self, x, y, -1, -1);
          nopublish$survivors$$Role$toArea$46$inner(role, true);
        }
        _tmp$6 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$7 = 0;
    while (true) {
      const i = _tmp$7;
      if (i < nationRoleCnt) {
        const _p = nopublish$survivors$$world.roleMap;
        const _tmp$8 = _p.size;
        if ((_tmp$8 - nopublish$survivors$$world.enemyCnt | 0) < 600) {
          const role = nopublish$survivors$$GameWorld$genNPC$46$inner(self, x, y, opNationId, -1);
          nopublish$survivors$$Role$toArea$46$inner(role, true);
        }
        _tmp$7 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    nopublish$survivors$$GameWorld$area_to_city$46$inner(self, pos, opNationId);
    nopublish$survivors$$Area$auto_fill_build_cate_num$46$inner(area, 2, 4, false);
    nopublish$survivors$$Area$auto_fill_build_cate_num$46$inner(area, 1, 5, false);
    nopublish$survivors$$Area$auto_fill_build_cate_num$46$inner(area, 8, 1, false);
    nopublish$survivors$$Area$auto_fill_build_cate_num$46$inner(area, 16, 2, false);
    nopublish$survivors$$Area$auto_fill_build_cate_num$46$inner(area, 12, 1, false);
    area.food = area.food + 100;
    area.equip = area.equip + 20;
    let _tmp$8 = 0;
    while (true) {
      const _ = _tmp$8;
      if (_ < 5) {
        if (!nopublish$survivors$$Area$auto_alloc_role(area)) {
          break;
        }
        _tmp$8 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$9 = 0;
    while (true) {
      const _ = _tmp$9;
      if (_ < 2) {
        nopublish$survivors$$Area$auto_alloc_to_cate$46$inner(area, 12, false);
        _tmp$9 = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function nopublish$survivors$$game_start1(duration) {
  nopublish$survivors$$world.player.life.gold = 5;
  Milky2018$selene$backend$$load_font("ThaleahFat", "assets/fonts/ThaleahFat.ttf");
  Milky2018$selene$camera$$set_limits(nopublish$survivors$$game_start1$46$constr$47$5463, nopublish$survivors$$game_start1$46$constr$47$5464, nopublish$survivors$$game_start1$46$constr$47$5465, nopublish$survivors$$game_start1$46$constr$47$5466);
  const _bind$56 = nopublish$survivors$$Widget$new(undefined, undefined);
  const _bind$57 = nopublish$survivors$$NationTable$new();
  const _bind$58 = nopublish$survivors$$AreaLowerTab$new();
  const _bind$59 = nopublish$survivors$$AreaTop$new();
  const _bind$60 = nopublish$survivors$$HeaderLine$new();
  const root = { w: _bind$56, nationTable: _bind$57, areaLower: _bind$58, areaTop: _bind$59, header: _bind$60 };
  nopublish$survivors$$world.opRoot = root;
  nopublish$survivors$$Control$add_children({ self: root, method_0: nopublish$survivors$$Control$getWidget$92$, method_1: nopublish$survivors$$Control$render$92$ }, [{ self: _bind$57, method_0: nopublish$survivors$$Control$getWidget$95$, method_1: nopublish$survivors$$Control$render$95$ }, { self: _bind$58, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ }, { self: _bind$59, method_0: nopublish$survivors$$Control$getWidget$94$, method_1: nopublish$survivors$$Control$render$94$ }, { self: _bind$60, method_0: nopublish$survivors$$Control$getWidget$93$, method_1: nopublish$survivors$$Control$render$93$ }]);
  nopublish$survivors$$Widget$set_offset(_bind$57.table, { _0: 300, _1: 80 });
  nopublish$survivors$$Widget$set_offset(_bind$58.tabs, { _0: 300, _1: 80 });
  nopublish$survivors$$Control$show({ self: _bind$59, method_0: nopublish$survivors$$Control$getWidget$94$, method_1: nopublish$survivors$$Control$render$94$ });
  nopublish$survivors$$Control$show({ self: _bind$60, method_0: nopublish$survivors$$Control$getWidget$93$, method_1: nopublish$survivors$$Control$render$93$ });
  nopublish$survivors$$Control$hide({ self: _bind$57, method_0: nopublish$survivors$$Control$getWidget$95$, method_1: nopublish$survivors$$Control$render$95$ });
  nopublish$survivors$$Control$hide({ self: _bind$58, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ });
  moonbitlang$core$set$$Set$add$20$(nopublish$survivors$$get_nation(nopublish$survivors$$world.player.nationId).heros, nopublish$survivors$$world.player.id);
  nopublish$survivors$$world.player.followSoldierType = 12;
  Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_text(nopublish$survivors$$world.travelText, zindex, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$game_start1$46$constr$47$5467, nopublish$survivors$$game_start1$46$constr$47$5468);
  Milky2018$selene$style$$add_widget(Milky2018$selene$style$$screen_root, (zindex) => Milky2018$selene$sprite$$Sprite$from_text(nopublish$survivors$$world.enemyBarText, zindex, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, nopublish$survivors$$game_start1$46$constr$47$5469, nopublish$survivors$$game_start1$46$constr$47$5470);
  Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.gameEndPanel);
  nopublish$survivors$$Nation$reg_role(nopublish$survivors$$get_nation(nopublish$survivors$$world.player.nationId), nopublish$survivors$$world.player.id);
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < 18) {
      let _tmp$7 = 0;
      while (true) {
        const j = _tmp$7;
        if (j < 18) {
          const grid = Milky2018$selene$style$$add_widget(nopublish$survivors$$world.globePanel, (zindex) => Milky2018$selene$sprite$$Sprite$from_animation(moonbitlang$core$array$$Array$at$38$(nopublish$survivors$$grasses, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, nopublish$survivors$$grasses.length)), 1, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, new Option$Some$0$((i + 0) * 16), new Option$Some$0$((j + 0) * 16));
          moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$position$$positions, grid, { _0: (i + 0) * 16, _1: (j + 0) * 16 });
          moonbitlang$core$array$$Array$push$1$(nopublish$survivors$$world.globe, grid);
          moonbitlang$core$array$$Array$push$20$(nopublish$survivors$$world.globeOccupy, -1);
          moonbitlang$core$array$$Array$push$20$(nopublish$survivors$$world.gmap, 4);
          const _bind$61 = [];
          const _bind$62 = moonbitlang$core$builtin$$Map$from_array$62$([]);
          const _bind$63 = moonbitlang$core$builtin$$Map$from_array$63$([]);
          const _bind$64 = moonbitlang$core$builtin$$Map$from_array$63$([]);
          const _bind$65 = moonbitlang$core$set$$Set$new$46$inner$20$(8);
          const _bind$66 = moonbitlang$core$builtin$$Map$from_array$63$([]);
          const _bind$67 = moonbitlang$core$builtin$$Map$from_array$63$([]);
          const area = { roleOccupy: _bind$64, terrain: _bind$61, buildings: _bind$62, buildOccupy: _bind$66, buildStat: _bind$63, humanCnt: 0, enemyCnt: 0, cityLevel: -1, lordId: -1, nationId: -1, raw_tax: 0, gold: 0, core: -1, nests: _bind$65, eco: 0, popu: 0, food: 0, equip: 0, ecoSpeed: 0, popuSpeed: 0, foodSpeed: 0, equipSpeed: 0, armyLimit: 0, popuLimit: 0, freeRoleNum: 0, gx: i, gy: j, cityDefense: 0, buildCatePersonNum: _bind$67 };
          area.nationId = -1;
          area.core = -1;
          let _tmp$8 = 0;
          while (true) {
            const u = _tmp$8;
            if (u < 18) {
              let _tmp$9 = 0;
              while (true) {
                const v = _tmp$9;
                if (v < 18) {
                  moonbitlang$core$array$$Array$push$20$(area.terrain, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 4));
                  _tmp$9 = v + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _tmp$8 = u + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          moonbitlang$core$array$$Array$push$39$(nopublish$survivors$$world.areas, area);
          _tmp$7 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  nopublish$survivors$$batch_render_gmap(nopublish$survivors$$world.gmap, nopublish$survivors$$world.globe);
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < 18) {
      let _tmp$8 = 0;
      while (true) {
        const j = _tmp$8;
        if (j < 18) {
          const grid = Milky2018$selene$style$$add_widget(nopublish$survivors$$world.areaPanel, (zindex) => Milky2018$selene$sprite$$Sprite$from_animation(moonbitlang$core$array$$Array$at$38$(nopublish$survivors$$grasses, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, nopublish$survivors$$grasses.length)), 1, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, new Option$Some$0$((i + 0) * 16), new Option$Some$0$((j + 0) * 16));
          moonbitlang$core$array$$Array$push$1$(nopublish$survivors$$world.areaEs, grid);
          moonbitlang$core$array$$Array$push$20$(nopublish$survivors$$world.areaOccupy, -1);
          _tmp$8 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$8;
    if (i < 18) {
      let _tmp$9 = 0;
      while (true) {
        const j = _tmp$9;
        if (j < 18) {
          const grid = Milky2018$selene$style$$add_widget(nopublish$survivors$$world.areaBuildPanel, (zindex) => Milky2018$selene$sprite$$Sprite$from_animation(moonbitlang$core$array$$Array$at$38$(nopublish$survivors$$grasses, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, nopublish$survivors$$grasses.length)), 2, undefined), undefined, undefined, undefined, undefined, Option$None$0$, Option$None$0$, new Option$Some$0$((i + 0) * 16), new Option$Some$0$((j + 0) * 16));
          moonbitlang$core$builtin$$Map$set$15$(Milky2018$selene$sprite$$sprites, grid, Milky2018$selene$sprite$$Sprite$from_text(Milky2018$selene$sprite$$Text$new("", nopublish$survivors$$game_start1$46$constr$47$5471, nopublish$survivors$$game_start1$46$constr$47$5472, undefined, undefined), 2, undefined));
          moonbitlang$core$array$$Array$push$1$(nopublish$survivors$$world.areaBes, grid);
          _tmp$9 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$8 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  Milky2018$selene$entity$$Entity$respawn(nopublish$survivors$$world.areaBuildPanel);
  Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.areaPanel);
  Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.player.ge);
  Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.player.ae);
  nopublish$survivors$$GameWorld$set_goccupy(nopublish$survivors$$world, nopublish$survivors$$world.player.gx, nopublish$survivors$$world.player.gy, nopublish$survivors$$world.player.id);
  nopublish$survivors$$Life$gain_exp(nopublish$survivors$$world.player.life, 8);
  nopublish$survivors$$Role$toArea$46$inner(nopublish$survivors$$world.player, true);
  nopublish$survivors$$GameWorld$showArea(nopublish$survivors$$world, 0);
  nopublish$survivors$$Role$repos(nopublish$survivors$$world.player);
  Milky2018$selene$entity$$Entity$respawn(nopublish$survivors$$world.player.ae);
  moonbitlang$core$builtin$$Map$set$22$(nopublish$survivors$$world.roleMap, nopublish$survivors$$world.player.id, nopublish$survivors$$world.player);
  Milky2018$selene$sprite$$render_sprite_system(0);
  Milky2018$selene$system$$deferred_event_system(0);
  nopublish$survivors$$Role$toArea$46$inner(nopublish$survivors$$world.player, true);
  nopublish$survivors$$Role$repos(nopublish$survivors$$world.player);
  let _tmp$9 = 0;
  while (true) {
    const i = _tmp$9;
    if (i < 50) {
      const nationId = nopublish$survivors$$get_rnd_avail_nation_id();
      nopublish$survivors$$GameWorld$init_gen_city$46$inner(nopublish$survivors$$world, nationId, 12);
      _tmp$9 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$10 = 0;
  while (true) {
    const i = _tmp$10;
    if (i < 5) {
      nopublish$survivors$$GameWorld$gen_nest$46$inner(nopublish$survivors$$world, -1);
      _tmp$10 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$11 = 0;
  while (true) {
    const i = _tmp$11;
    if (i < 5) {
      const role = nopublish$survivors$$GameWorld$genEnemy$46$inner(nopublish$survivors$$world, nopublish$survivors$$world.player.gx, nopublish$survivors$$world.player.gy, 0, -1);
      nopublish$survivors$$Role$toArea$46$inner(role, true);
      _tmp$11 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
}
function nopublish$survivors$$clamp(x, low, high) {
  let r = x;
  if (x < low) {
    r = low;
  }
  if (x > high) {
    r = high;
  }
  return r;
}
function nopublish$survivors$$terrain_to_str(icon) {
  switch (icon) {
    case 0: {
      return "grass";
    }
    case 1: {
      return "ground";
    }
    case 2: {
      return "desert";
    }
    case 3: {
      return "water";
    }
    default: {
      return `icon:${moonbitlang$core$int$$Int$to_string$46$inner(icon, 10)}`;
    }
  }
}
function nopublish$survivors$$Area$lord_add_build_at$46$inner(self, cate, ax, ay, level, allowingDebt, logback, consoleBack) {
  if (cate < 0) {
    return -1;
  }
  const buildDesc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
  if (nopublish$survivors$$Area$can_build$46$inner(self, cate, ax, ay, self.nationId, level, true, logback, consoleBack, allowingDebt)) {
    self.eco = self.eco - buildDesc.ecoCost;
    if (self.eco < 0) {
      nopublish$survivors$$world.aiWarn.notNegEcoBuild = true;
    }
    const buildId = nopublish$survivors$$Area$add_build$46$inner(self, cate, ax, ay, self.nationId, level);
    if (self.nationId === nopublish$survivors$$world.player.nationId && (!nopublish$survivors$$world.inGlobe && nopublish$survivors$$world.showAreaId === ((Math.imul(self.gx, 18) | 0) + self.gy | 0))) {
      nopublish$survivors$$log(`在(${moonbitlang$core$int$$Int$to_string$46$inner(ax, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(ay, 10)})处建造了${buildDesc.name}[${moonbitlang$core$int$$Int$to_string$46$inner(buildId, 10)}]`);
    }
    return buildId;
  } else {
    if (self.nationId === nopublish$survivors$$world.player.nationId) {
      nopublish$survivors$$log(`在(${moonbitlang$core$int$$Int$to_string$46$inner(ax, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(ay, 10)})处建造${buildDesc.name}失败`);
    }
    return -1;
  }
}
function nopublish$survivors$$wanna_build_at(ax, ay) {
  if (nopublish$survivors$$world.showAreaId >= 0 && nopublish$survivors$$world.wannaBuildCate >= 0) {
    const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
    if (area.nationId === nopublish$survivors$$world.player.nationId) {
      nopublish$survivors$$Area$lord_add_build_at$46$inner(area, nopublish$survivors$$world.wannaBuildCate, ax, ay, 0, false, true, false);
      return;
    } else {
      nopublish$survivors$$log("无法在不属于自己的城市建造");
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$Building$to_desc(self) {
  let s = "";
  if (self.cate >= 0) {
    const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, self.cate);
    s = `${s}建筑${desc.name}[${moonbitlang$core$int$$Int$to_string$46$inner(self.id, 10)}]`;
    s = `${s}(♥:${moonbitlang$core$int$$Int$to_string$46$inner(self.hp, 10)})`;
    if (self.nationId >= 0) {
      s = `${s}(${nopublish$survivors$$get_nation_name(self.nationId)})`;
    }
  }
  return s;
}
function nopublish$survivors$$army_attack(src, target) {
  if (src < 0 || src >= nopublish$survivors$$nations.length) {
    return undefined;
  }
  if (target < 0 || target >= nopublish$survivors$$nations.length) {
    return undefined;
  }
  const nation0 = nopublish$survivors$$get_nation(src);
  const nation1 = nopublish$survivors$$get_nation(target);
  let _tmp$6;
  const _p = nation0.areas;
  if (_p.size > 0) {
    const _p$2 = nation1.areas;
    _tmp$6 = _p$2.size > 0;
  } else {
    _tmp$6 = false;
  }
  if (_tmp$6) {
    const _tmp$7 = nopublish$survivors$$world.areas;
    const _tmp$8 = moonbitlang$core$set$$Set$to_array$20$(nation0.areas);
    const _p$2 = nation0.areas;
    const area = moonbitlang$core$array$$Array$at$39$(_tmp$7, moonbitlang$core$array$$Array$at$20$(_tmp$8, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, _p$2.size)));
    const _tmp$9 = moonbitlang$core$set$$Set$to_array$20$(nation1.areas);
    const _p$3 = nation1.areas;
    const tareaId = moonbitlang$core$array$$Array$at$20$(_tmp$9, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, _p$3.size));
    const _it = moonbitlang$core$builtin$$Map$iterator2$63$(area.roleOccupy);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
      if (_bind$56 === undefined) {
        break;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _id = _x._1;
        if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _id)) {
          const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _id);
          if (role.nationId === src) {
            if (nopublish$survivors$$Role$is_equiped(role) && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
              role.atkArea = tareaId;
            }
          }
        }
        continue;
      }
    }
    const tarea = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, tareaId);
    const _it$2 = moonbitlang$core$builtin$$Map$iterator2$63$(tarea.roleOccupy);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$2);
      if (_bind$56 === undefined) {
        break;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _id = _x._1;
        if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _id)) {
          const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _id);
          if (role.nationId === tarea.nationId) {
            if (!nopublish$survivors$$Role$is_equiped(role) && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
              role.equiped = true;
            }
          }
        }
        continue;
      }
    }
    if (src >= 0 && target >= 0) {
      nopublish$survivors$$log(`国家${moonbitlang$core$int$$Int$to_string$46$inner(src, 10)}发起了对国家${moonbitlang$core$int$$Int$to_string$46$inner(target, 10)}的袭击`);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function nopublish$survivors$$gold_per_day(cate, level) {
  switch (cate) {
    case 1: {
      return 15;
    }
    case 4: {
      return 60;
    }
    case 15: {
      return 100;
    }
    default: {
      return 0;
    }
  }
}
function nopublish$survivors$$act_arg_to_areaId(arg) {
  let areaId = arg;
  if (areaId < 0) {
    areaId = 0;
  }
  if (areaId >= nopublish$survivors$$world.areas.length) {
    areaId = nopublish$survivors$$world.areas.length - 1 | 0;
  }
  return areaId;
}
function nopublish$survivors$$act_arg_to_nationId(arg) {
  let nationId = arg;
  if (nationId < 0) {
    nationId = 0;
  }
  if (nationId >= nopublish$survivors$$nations.length) {
    nationId = nopublish$survivors$$nations.length - 1 | 0;
  }
  return nationId;
}
function nopublish$survivors$$army_attack_area(src, targetAreaId) {
  let allSoldierCnt = 0;
  const nation0 = nopublish$survivors$$get_nation(src);
  const tarea = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, targetAreaId);
  const _p = nation0.areas;
  if (_p.size > 0) {
    const _tmp$6 = nopublish$survivors$$world.areas;
    const _tmp$7 = moonbitlang$core$set$$Set$to_array$20$(nation0.areas);
    const _p$2 = nation0.areas;
    const area = moonbitlang$core$array$$Array$at$39$(_tmp$6, moonbitlang$core$array$$Array$at$20$(_tmp$7, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, _p$2.size)));
    const _it = moonbitlang$core$builtin$$Map$iterator2$63$(area.roleOccupy);
    while (true) {
      const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
      if (_bind$56 === undefined) {
        break;
      } else {
        const _Some = _bind$56;
        const _x = _Some;
        const _id = _x._1;
        if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _id)) {
          const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _id);
          if (role.nationId === src) {
            if (nopublish$survivors$$Role$is_equiped(role) && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
              role.atkArea = targetAreaId;
              allSoldierCnt = allSoldierCnt + 1 | 0;
            }
          }
        }
        continue;
      }
    }
    let s = `国家${moonbitlang$core$int$$Int$to_string$46$inner(src, 10)}发起了对区域${moonbitlang$core$int$$Int$to_string$46$inner(targetAreaId, 10)}的军事行动`;
    if (tarea.nationId >= 0) {
      s = `${s},此区域归属${moonbitlang$core$int$$Int$to_string$46$inner(tarea.nationId, 10)}`;
    }
    nopublish$survivors$$log(s);
  }
  const _it = moonbitlang$core$builtin$$Map$iterator2$63$(tarea.roleOccupy);
  while (true) {
    const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
    if (_bind$56 === undefined) {
      break;
    } else {
      const _Some = _bind$56;
      const _x = _Some;
      const _id = _x._1;
      if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _id)) {
        const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _id);
        if (role.nationId === tarea.nationId) {
          if (!nopublish$survivors$$Role$is_equiped(role) && moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
            role.equiped = true;
          }
        }
      }
      continue;
    }
  }
  return allSoldierCnt;
}
function nopublish$survivors$$to_peace(src, target) {
  if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, src)) {
    moonbitlang$core$set$$Set$remove$20$(moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, src), target);
  }
  if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, target)) {
    moonbitlang$core$set$$Set$remove$20$(moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, target), src);
    return;
  } else {
    return;
  }
}
function nopublish$survivors$$to_war(src, target) {
  if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, src)) {
    moonbitlang$core$set$$Set$add$20$(moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, src), target);
  } else {
    const set = moonbitlang$core$set$$Set$new$46$inner$20$(8);
    moonbitlang$core$set$$Set$add$20$(set, target);
    moonbitlang$core$builtin$$Map$set$21$(nopublish$survivors$$world.war, src, set);
  }
  if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, target)) {
    moonbitlang$core$set$$Set$add$20$(moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, target), src);
    return;
  } else {
    const set = moonbitlang$core$set$$Set$new$46$inner$20$(8);
    moonbitlang$core$set$$Set$add$20$(set, src);
    moonbitlang$core$builtin$$Map$set$21$(nopublish$survivors$$world.war, target, set);
    return;
  }
}
function nopublish$survivors$$perform_actv2(id, act, arg0) {
  let allstr = "";
  if (act === 0) {
    let opLevel = arg0;
    if (opLevel < 0) {
      opLevel = 0;
    }
    if (opLevel > 9) {
      opLevel = 9;
    }
    const areaId = nopublish$survivors$$act_arg_to_areaId(id);
    const gx = areaId / 18 | 0;
    const gy = areaId - (Math.imul(18, gx) | 0) | 0;
    nopublish$survivors$$GameWorld$gen_nest_gxy(nopublish$survivors$$world, opLevel, gx, gy);
    allstr = `${allstr}在世界${moonbitlang$core$int$$Int$to_string$46$inner(gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(gy, 10)}处生成级别为${moonbitlang$core$int$$Int$to_string$46$inner(opLevel, 10)}的魔物巢穴\r\n`;
  } else {
    if (act === 1) {
      const nationId1 = nopublish$survivors$$act_arg_to_nationId(id);
      const areaId = nopublish$survivors$$act_arg_to_areaId(arg0);
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
      const nationId2 = area.nationId;
      if (nationId1 >= 0 && (nationId2 >= 0 && nationId1 !== nationId2)) {
        if (!nopublish$survivors$$nation_negative(nationId1, nationId2)) {
          nopublish$survivors$$log(`国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}]向国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId2, 10)}]宣战了`);
          nopublish$survivors$$to_war(nationId1, nationId2);
        } else {
          nopublish$survivors$$log(`国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}]向国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId2, 10)}]发起了军事行动`);
        }
      }
      const gx = areaId / 18 | 0;
      const gy = areaId - (Math.imul(gx, 18) | 0) | 0;
      const soldierCnt = nopublish$survivors$$army_attack_area(nationId1, areaId);
      if (nationId1 >= 0 && area.nationId !== nationId1) {
        if (soldierCnt > 0) {
          allstr = `${allstr}国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}]向世界${moonbitlang$core$int$$Int$to_string$46$inner(gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(gy, 10)}处发起军事行动, 动员人数${moonbitlang$core$int$$Int$to_string$46$inner(soldierCnt, 10)}\r\n`;
        }
      }
    } else {
      if (act === 3) {
        const nationId1 = nopublish$survivors$$act_arg_to_nationId(id);
        const areaId = nopublish$survivors$$act_arg_to_areaId(arg0);
        const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
        const gx = areaId / 18 | 0;
        const gy = areaId - (Math.imul(gx, 18) | 0) | 0;
        const soldierCnt = nopublish$survivors$$army_attack_area(nationId1, areaId);
        if (nationId1 >= 0 && area.nationId !== nationId1) {
          if (soldierCnt > 0) {
            allstr = `${allstr}国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}]向世界${moonbitlang$core$int$$Int$to_string$46$inner(gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(gy, 10)}处发起军事行动, 动员人数${moonbitlang$core$int$$Int$to_string$46$inner(soldierCnt, 10)}\r\n`;
          }
        }
      } else {
        if (act === 2) {
          const nationId1 = nopublish$survivors$$act_arg_to_nationId(id);
          const nationId2 = nopublish$survivors$$act_arg_to_nationId(arg0);
          if (nationId1 === 5 || nationId2 === 5) {
            return "";
          }
          if (nationId1 === 4 || nationId2 === 4) {
            return "";
          }
          if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.5) {
            nopublish$survivors$$log(`国家${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}与国家${moonbitlang$core$int$$Int$to_string$46$inner(nationId2, 10)}议和,两国重归于好`);
            allstr = `${allstr}国家${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}与国家${moonbitlang$core$int$$Int$to_string$46$inner(nationId2, 10)}议和,两国重归于好\r\n`;
            nopublish$survivors$$to_peace(nationId1, nationId2);
          } else {
            nopublish$survivors$$log(`国家${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}与国家${moonbitlang$core$int$$Int$to_string$46$inner(nationId2, 10)}议和失败了`);
          }
        } else {
          if (act === 4) {
            const nationId1 = nopublish$survivors$$act_arg_to_nationId(id);
            const nationId2 = nopublish$survivors$$act_arg_to_nationId(arg0);
            if (nopublish$survivors$$nation_negative(nationId1, nationId2)) {
              return "";
            }
            if (nationId1 === 4 || nationId2 === 4) {
              return "";
            }
            if (!nopublish$survivors$$nation_negative(nationId1, nationId2)) {
              nopublish$survivors$$log(`国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId1, 10)}]向国家[${moonbitlang$core$int$$Int$to_string$46$inner(nationId2, 10)}]宣战了`);
              nopublish$survivors$$to_war(nationId1, nationId2);
            }
          } else {
            if (act >= 10 && act < 20) {
              const cate = act - 10 | 0;
              const areaId = nopublish$survivors$$act_arg_to_areaId(id);
              const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, areaId);
              const _bind$56 = nopublish$survivors$$Area$find_empty_pos(area);
              const __ex = _bind$56._0;
              const __ey = _bind$56._1;
              if (__ex < 0 || __ey < 0) {
                return allstr;
              }
              let lineStr = "";
              if (cate >= 0 && cate < nopublish$survivors$$buildDescs.length) {
                const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate);
                const gx = areaId / 18 | 0;
                const gy = areaId - (Math.imul(18, gx) | 0) | 0;
                lineStr = `${lineStr}在世界${moonbitlang$core$int$$Int$to_string$46$inner(gx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(gy, 10)}区域内${moonbitlang$core$int$$Int$to_string$46$inner(__ex, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(__ey, 10)}试图建造${desc.name}`;
              }
              const buildId = nopublish$survivors$$Area$lord_add_build_at$46$inner(area, cate, __ex, __ey, 0, true, false, true);
              const _bind$57 = moonbitlang$core$builtin$$Map$get$62$(area.buildings, buildId);
              if (_bind$57 === undefined) {
                lineStr = `${lineStr}失败了`;
              } else {
                const _Some = _bind$57;
                const _build = _Some;
                lineStr = `${lineStr}成功了, 位于(${moonbitlang$core$int$$Int$to_string$46$inner(_build.x, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(_build.y, 10)})`;
              }
              allstr = `${allstr}${lineStr}\r\n`;
            }
          }
        }
      }
    }
  }
  return allstr;
}
function nopublish$survivors$$GameWorld$genNPCForHouse(self, gx, gy, build) {
  if (gx < 0 || (gy < 0 || (gx >= 18 || gy >= 18))) {
    return false;
  }
  const _p = nopublish$survivors$$world.roleMap;
  const _tmp$6 = _p.size;
  if ((_tmp$6 - nopublish$survivors$$world.enemyCnt | 0) < 600) {
    const enemy = nopublish$survivors$$GameWorld$genNPC$46$inner(self, gx, gy, build.nationId, -1);
    enemy.ax = build.x;
    enemy.ay = build.y;
    nopublish$survivors$$Role$toArea$46$inner(enemy, false);
    return true;
  }
  return false;
}
function nopublish$survivors$$GameWorld$gen_observe_rawtext(self) {
  let s = "";
  let _tmp$6 = 0;
  while (true) {
    const id = _tmp$6;
    if (id < 4) {
      nopublish$survivors$$get_nation(id);
      s = `${s}国家[${moonbitlang$core$int$$Int$to_string$46$inner(id, 10)}]`;
      if (moonbitlang$core$builtin$$Map$contains$21$(self.war, id)) {
        const warset = moonbitlang$core$builtin$$Map$at$21$(self.war, id);
        if (warset.size > 0) {
          s = `${s}交战方:[`;
          const _it = moonbitlang$core$set$$Set$iterator$20$(warset);
          while (true) {
            const _bind$56 = moonbitlang$core$builtin$$Iterator$next$20$(_it);
            if (_bind$56 === undefined) {
              break;
            } else {
              const _Some = _bind$56;
              const _tid = _Some;
              s = `${s} ${moonbitlang$core$int$$Int$to_string$46$inner(_tid, 10)}`;
              continue;
            }
          }
          s = `${s}]`;
        }
      }
      _tmp$6 = id + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _end255 = self.areas.length;
  let _tmp$7 = 0;
  while (true) {
    const areaId = _tmp$7;
    if (areaId < _end255) {
      const area = moonbitlang$core$array$$Array$at$39$(self.areas, areaId);
      let substr = "";
      if (area.nationId >= 0) {
        substr = `${substr} 属于国家${moonbitlang$core$int$$Int$to_string$46$inner(area.nationId, 10)},`;
      }
      if (area.enemyCnt > 0) {
        substr = `${substr}魔物数量:${moonbitlang$core$int$$Int$to_string$46$inner(area.enemyCnt, 10)},`;
      }
      const _p = area.roleOccupy;
      if (_p.size > 0) {
        const _tmp$8 = substr;
        const _p$2 = area.roleOccupy;
        substr = `${_tmp$8}总人数:${moonbitlang$core$int$$Int$to_string$46$inner(_p$2.size, 10)},`;
      }
      if (area.eco > 0) {
        substr = `${substr}经济值:${String(area.eco)},`;
      }
      const _it = moonbitlang$core$builtin$$Map$iterator2$63$(area.buildStat);
      while (true) {
        const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it);
        if (_bind$56 === undefined) {
          break;
        } else {
          const _Some = _bind$56;
          const _x = _Some;
          const _cate = _x._0;
          const _num = _x._1;
          substr = `${substr},有${moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, _cate).name}${moonbitlang$core$int$$Int$to_string$46$inner(_num, 10)}座`;
          continue;
        }
      }
      const soldierMap = moonbitlang$core$builtin$$Map$new$46$inner$63$(8);
      const _it$2 = moonbitlang$core$builtin$$Map$iterator2$63$(area.roleOccupy);
      while (true) {
        const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$2);
        if (_bind$56 === undefined) {
          break;
        } else {
          const _Some = _bind$56;
          const _x = _Some;
          const _roleId = _x._1;
          if (moonbitlang$core$builtin$$Map$contains$22$(self.roleMap, _roleId)) {
            const role = moonbitlang$core$builtin$$Map$at$22$(self.roleMap, _roleId);
            if (role.life.hp <= 0 || role.inTeam) {
              continue;
            }
            if (!nopublish$survivors$$Role$is_equiped(role)) {
              continue;
            }
            if (moonbitlang$core$builtin$$Map$contains$63$(soldierMap, role.nationId)) {
              const _index_2 = role.nationId;
              moonbitlang$core$builtin$$Map$set$63$(soldierMap, _index_2, moonbitlang$core$builtin$$Map$at$63$(soldierMap, _index_2) + 1 | 0);
            } else {
              moonbitlang$core$builtin$$Map$set$63$(soldierMap, role.nationId, 1);
            }
          }
          continue;
        }
      }
      const _it$3 = moonbitlang$core$builtin$$Map$iterator2$63$(soldierMap);
      while (true) {
        const _bind$56 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$3);
        if (_bind$56 === undefined) {
          break;
        } else {
          const _Some = _bind$56;
          const _x = _Some;
          const _nationId = _x._0;
          const _num = _x._1;
          substr = `${substr},势力${moonbitlang$core$int$$Int$to_string$46$inner(_nationId, 10)}武装人数${moonbitlang$core$int$$Int$to_string$46$inner(_num, 10)}`;
          continue;
        }
      }
      if (substr.length > 0) {
        s = `${s}区域[id:${moonbitlang$core$int$$Int$to_string$46$inner(areaId, 10)},${substr}]`;
      }
      _tmp$7 = areaId + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.aiWarn.notNegEcoBuild) {
    s = `${s}注意,  不要透支经济进行建造, 一定要注意地区的经济值是否足够对应建筑所需。`;
  }
  return s;
}
function nopublish$survivors$$GameWorld$step(self) {
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
    return;
  } else {
    const _Some = _bind$56;
    const _root = _Some;
    nopublish$survivors$$Widget$set_text(_root.areaTop.time, `当前时刻:${moonbitlang$core$int$$Int$to_string$46$inner(self.steps / 24 | 0, 10)}天${moonbitlang$core$int$$Int$to_string$46$inner(self.steps % 24 | 0, 10)}时`, undefined, undefined, undefined);
    nopublish$survivors$$Widget$set_text(_root.areaTop.roleDesc, "", undefined, undefined, undefined);
    nopublish$survivors$$Widget$set_text(_root.areaTop.roleDescExtra, "", undefined, undefined, undefined);
    nopublish$survivors$$Widget$set_text(_root.areaTop.buildDesc, "", undefined, undefined, undefined);
    self.accTime = 0;
    let allstr = "";
    const actions = nopublish$survivors$$strategy(nopublish$survivors$$GameWorld$gen_observe_rawtext(nopublish$survivors$$world), true);
    if (actions.length > 0) {
      nopublish$survivors$$world.aiWarn = { notNegEcoBuild: false };
    }
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i <= (actions.length - 3 | 0)) {
        const id0 = moonbitlang$core$array$$Array$at$20$(actions, i);
        const act0 = moonbitlang$core$array$$Array$at$20$(actions, i + 1 | 0);
        const arg0 = moonbitlang$core$array$$Array$at$20$(actions, i + 2 | 0);
        allstr = `${allstr}${nopublish$survivors$$perform_actv2(id0, act0, arg0)}`;
        _tmp$6 = i + 3 | 0;
        continue;
      } else {
        break;
      }
    }
    const actions$2 = nopublish$survivors$$strategy("[]", false);
    let _tmp$7 = 0;
    while (true) {
      const i = _tmp$7;
      if (i <= (actions$2.length - 3 | 0)) {
        const id0 = moonbitlang$core$array$$Array$at$20$(actions$2, i);
        const act0 = moonbitlang$core$array$$Array$at$20$(actions$2, i + 1 | 0);
        const arg0 = moonbitlang$core$array$$Array$at$20$(actions$2, i + 2 | 0);
        allstr = `${allstr}${nopublish$survivors$$perform_actv2(id0, act0, arg0)}`;
        _tmp$7 = i + 3 | 0;
        continue;
      } else {
        break;
      }
    }
    nopublish$survivors$$aiBoardLog(allstr);
    const iterRoles = [];
    const _it = moonbitlang$core$builtin$$Map$iterator2$22$(nopublish$survivors$$world.roleMap);
    while (true) {
      const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$22$(_it);
      if (_bind$57 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$57;
        const _x = _Some$2;
        const _role = _x._1;
        moonbitlang$core$array$$Array$push$45$(iterRoles, _role);
        continue;
      }
    }
    const hp_grow = (nopublish$survivors$$world.steps % 60 | 0) === 0;
    const dayStart = (self.steps % 24 | 0) === 0;
    const _len = iterRoles.length;
    let _tmp$8 = 0;
    while (true) {
      const _i = _tmp$8;
      if (_i < _len) {
        const role = iterRoles[_i];
        if (role.id !== self.player.id) {
          if (!role.inTeam) {
            nopublish$survivors$$Role$action(role);
          }
        }
        if (hp_grow) {
          nopublish$survivors$$Role$hp_restore(role);
        }
        if (dayStart) {
          let _tmp$9;
          if (role.isLord) {
            const _p = role.areas;
            _tmp$9 = _p.size > 0;
          } else {
            _tmp$9 = false;
          }
          if (_tmp$9) {
            const _it$2 = moonbitlang$core$set$$Set$iterator$20$(role.areas);
            while (true) {
              const _bind$57 = moonbitlang$core$builtin$$Iterator$next$20$(_it$2);
              if (_bind$57 === undefined) {
                break;
              } else {
                const _Some$2 = _bind$57;
                const _areaId = _Some$2;
                const area = moonbitlang$core$array$$Array$at$39$(self.areas, _areaId);
                if (area.nationId !== self.player.nationId) {
                  const _bind$58 = nopublish$survivors$$Area$find_empty_pos(area);
                  const _x = _bind$58._0;
                  const _y = _bind$58._1;
                  const cate = moonbitlang$core$array$$Array$at$20$(nopublish$survivors$$lordChosenBuildings, moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, nopublish$survivors$$lordChosenBuildings.length));
                  if (nopublish$survivors$$Area$can_build$46$inner(area, cate, _x, _y, area.nationId, 0, true, false, false, false)) {
                    const cost = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, cate).ecoCost;
                    if (area.eco >= cost) {
                      area.eco = area.eco - cost;
                      nopublish$survivors$$Area$add_build$46$inner(area, cate, _x, _y, area.nationId, 0);
                    }
                  }
                }
                continue;
              }
            }
          }
        }
        _tmp$8 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (!nopublish$survivors$$world.player.inGlobe) {
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
      let _tmp$9;
      if ((nopublish$survivors$$world.steps % 10 | 0) === 0) {
        const _p = area.roleOccupy;
        _tmp$9 = _p.size === 1;
      } else {
        _tmp$9 = false;
      }
      if (_tmp$9) {
        const role = nopublish$survivors$$GameWorld$genEnemy$46$inner(nopublish$survivors$$world, nopublish$survivors$$world.player.gx, nopublish$survivors$$world.player.gy, 0, -1);
        nopublish$survivors$$Role$toArea$46$inner(role, true);
      }
      if ((Math.imul(nopublish$survivors$$world.steps % 24 | 0, 2) | 0) === 0 && (area.enemyCnt < 5 && nopublish$survivors$$world.enemyCnt < 100)) {
        const role = nopublish$survivors$$GameWorld$genEnemy$46$inner(nopublish$survivors$$world, nopublish$survivors$$world.player.gx, nopublish$survivors$$world.player.gy, 0, -1);
        nopublish$survivors$$Role$toArea$46$inner(role, true);
      }
      if (nopublish$survivors$$Control$visible_in_tree({ self: _root.areaLower, method_0: nopublish$survivors$$Control$getWidget$96$, method_1: nopublish$survivors$$Control$render$96$ })) {
        nopublish$survivors$$Control$render$96$(_root.areaLower);
      }
    }
    const _len$2 = nopublish$survivors$$nations.length;
    let _tmp$9 = 0;
    while (true) {
      const _i = _tmp$9;
      if (_i < _len$2) {
        const nation = nopublish$survivors$$nations[_i];
        nation.cacheEco = 0;
        _tmp$9 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if ((nopublish$survivors$$world.steps % 24 | 0) === 0) {
      let _tmp$10 = 0;
      while (true) {
        const areaId = _tmp$10;
        if (areaId < self.areas.length) {
          const area = moonbitlang$core$array$$Array$at$39$(self.areas, areaId);
          const gx = area.gx;
          const gy = area.gy;
          if (area.cityLevel < 0 && area.humanCnt > 5) {
            nopublish$survivors$$GameWorld$area_to_city$46$inner(nopublish$survivors$$world, areaId, -1);
          }
          const role_born_day = (Math.imul(nopublish$survivors$$world.steps % 24 | 0, 5) | 0) === 0;
          let cacheArmyLimit = 0;
          let cachePopuLimit = 0;
          let cachePopuNum = 0;
          let cacheArmyNum = 0;
          const freeEquiped = [];
          const enemies = [];
          let heroCnt = 0;
          let freeRoleNum = 0;
          const _it$2 = moonbitlang$core$builtin$$Map$iterator2$63$(area.roleOccupy);
          while (true) {
            const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$2);
            if (_bind$57 === undefined) {
              break;
            } else {
              const _Some$2 = _bind$57;
              const _x = _Some$2;
              const _roleId = _x._1;
              if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _roleId)) {
                const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _roleId);
                if (role.nationId === area.nationId) {
                  if (role.cate === 3) {
                    heroCnt = heroCnt + 1 | 0;
                  } else {
                    if (role.jobBuildCate < 0 && role.cate !== 2) {
                      freeRoleNum = freeRoleNum + 1 | 0;
                    }
                  }
                  if (!role.inGlobe && (!role.inTeam && (role.gx === area.gx && role.gy === area.gy))) {
                    cachePopuNum = cachePopuNum + 1 | 0;
                  }
                  if (role.jobBuildCate >= 0) {
                    _L: {
                      _L$2: {
                        const _bind$58 = role.jobBuildCate;
                        switch (_bind$58) {
                          case 13: {
                            break _L$2;
                          }
                          case 12: {
                            break _L$2;
                          }
                          case 14: {
                            break _L$2;
                          }
                        }
                        break _L;
                      }
                      cacheArmyNum = cacheArmyNum + 1 | 0;
                    }
                  }
                  const equiped = nopublish$survivors$$Role$is_equiped(role);
                  if (equiped) {
                    if (role.atkBuild < 0 && role.atkTarget < 0 || moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.05) {
                      moonbitlang$core$array$$Array$push$45$(freeEquiped, role);
                    }
                  }
                }
                if (nopublish$survivors$$nation_negative(area.nationId, role.nationId)) {
                  moonbitlang$core$array$$Array$push$45$(enemies, role);
                }
              }
              if (enemies.length > 0) {
                const _end398 = freeEquiped.length;
                let _tmp$11 = 0;
                while (true) {
                  const i = _tmp$11;
                  if (i < _end398) {
                    const role = moonbitlang$core$array$$Array$at$45$(freeEquiped, i);
                    const enemy = moonbitlang$core$array$$Array$at$45$(enemies, i % enemies.length | 0);
                    role.atkTarget = enemy.id;
                    _tmp$11 = i + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
              }
              continue;
            }
          }
          area.popu = cachePopuNum;
          let _tmp$11;
          const _p = nopublish$survivors$$world.roleMap;
          const _tmp$12 = _p.size;
          if ((_tmp$12 - nopublish$survivors$$world.enemyCnt | 0) < 600) {
            _tmp$11 = area.nationId >= 0;
          } else {
            _tmp$11 = false;
          }
          if (_tmp$11) {
            if ((Math.imul(nopublish$survivors$$world.steps % 24 | 0, 15) | 0) === 0 && heroCnt < 5) {
              if (area.eco >= 10) {
                area.eco = area.eco - 10;
                nopublish$survivors$$GameWorld$genNPC$46$inner(nopublish$survivors$$world, gx, gy, area.nationId, nopublish$survivors$$step$46$constr$47$5679);
              }
            }
          }
          let opHouse = undefined;
          const _it$3 = moonbitlang$core$builtin$$Map$iterator2$62$(area.buildings);
          while (true) {
            const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$62$(_it$3);
            if (_bind$57 === undefined) {
              break;
            } else {
              const _Some$2 = _bind$57;
              const _x = _Some$2;
              const _build = _x._1;
              let gold = nopublish$survivors$$gold_per_day(_build.cate, _build.level) + 0;
              const t = gold / 5;
              gold = gold - t;
              area.raw_tax = area.raw_tax + t;
              if (moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, _build.owner)) {
                const role = moonbitlang$core$builtin$$Map$at$22$(nopublish$survivors$$world.roleMap, _build.owner);
                const _bind$58 = role.life;
                _bind$58.gold = _bind$58.gold + gold;
              }
              if (area.enemyCnt < 5 && nopublish$survivors$$world.enemyCnt < 100) {
                const _bind$58 = _build.cate;
                if (_bind$58 === 5) {
                  let gened = false;
                  let _tmp$13 = 0;
                  while (true) {
                    const dir = _tmp$13;
                    if (dir < 4) {
                      if (gened) {
                        break;
                      }
                      if (nopublish$survivors$$world.enemyCnt < 100) {
                        gened = nopublish$survivors$$GameWorld$genEnemyForNest(self, gx, gy, _build, dir);
                      }
                      _tmp$13 = dir + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
              }
              if (area.nationId === _build.nationId) {
                _L: {
                  _L$2: {
                    const _bind$58 = _build.cate;
                    switch (_bind$58) {
                      case 7: {
                        break _L$2;
                      }
                      case 2: {
                        break _L$2;
                      }
                      case 3: {
                        break _L$2;
                      }
                    }
                    break _L;
                  }
                  opHouse = _build;
                }
              }
              if (_build.nationId === area.nationId) {
                const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, _build.cate);
                cacheArmyLimit = cacheArmyLimit + desc.armyLimit | 0;
                cachePopuLimit = cachePopuLimit + desc.popuLimit | 0;
              }
              continue;
            }
          }
          if (role_born_day) {
            if (area.popu < area.popuLimit) {
              if (role_born_day) {
                const _bind$57 = opHouse;
                if (_bind$57 === undefined) {
                } else {
                  const _Some$2 = _bind$57;
                  const _build = _Some$2;
                  let gened = false;
                  const _len$3 = nopublish$survivors$$nearPoses.length;
                  let _tmp$13 = 0;
                  while (true) {
                    const _i = _tmp$13;
                    if (_i < _len$3) {
                      const off = nopublish$survivors$$nearPoses[_i];
                      if (gened) {
                        break;
                      }
                      const _p$2 = nopublish$survivors$$world.roleMap;
                      const _tmp$14 = _p$2.size;
                      if ((_tmp$14 - nopublish$survivors$$world.enemyCnt | 0) < 600) {
                        gened = nopublish$survivors$$GameWorld$genNPCForHouse(self, gx + moonbitlang$core$array$$Array$at$20$(off, 0) | 0, gy + moonbitlang$core$array$$Array$at$20$(off, 1) | 0, _build);
                      }
                      _tmp$13 = _i + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
              }
            }
          }
          let cacheEcoSpeed = 0;
          let cacheFoodSpeed = 0;
          let cacheEquipSpeed = 0;
          const _it$4 = moonbitlang$core$builtin$$Map$iterator2$63$(area.buildCatePersonNum);
          while (true) {
            const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$4);
            if (_bind$57 === undefined) {
              break;
            } else {
              const _Some$2 = _bind$57;
              const _x = _Some$2;
              const _buildCate = _x._0;
              const _num = _x._1;
              const buildDesc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, _buildCate);
              cacheEcoSpeed = cacheEcoSpeed + buildDesc.ecoPerson * (_num + 0);
              cacheFoodSpeed = cacheFoodSpeed + buildDesc.foodPerson * (_num + 0);
              cacheEquipSpeed = cacheEquipSpeed + buildDesc.equipPerson * (_num + 0);
              continue;
            }
          }
          area.ecoSpeed = cacheEcoSpeed;
          area.foodSpeed = cacheFoodSpeed;
          area.freeRoleNum = freeRoleNum;
          area.eco = area.eco + cacheEcoSpeed;
          area.food = area.food + cacheFoodSpeed;
          area.equip = area.equip + cacheEquipSpeed;
          if (area.nationId >= 0) {
            const _bind$57 = nopublish$survivors$$get_nation(area.nationId);
            _bind$57.cacheEco = _bind$57.cacheEco + area.eco;
          }
          const part = area.raw_tax / 3;
          let remain = part;
          area.gold = area.gold + part;
          area.raw_tax = 0;
          if (area.nationId < 0) {
            area.gold = area.gold + part;
          } else {
            const _bind$57 = nopublish$survivors$$get_nation(area.nationId);
            _bind$57.gold = _bind$57.gold + part;
            if (area.lordId <= 0) {
              const _bind$58 = nopublish$survivors$$get_nation(area.nationId);
              _bind$58.gold = _bind$58.gold + part;
            } else {
              let maxCnt = 20;
              let roleId = area.lordId;
              while (true) {
                if (maxCnt > 0 && (roleId >= 0 && moonbitlang$core$builtin$$Map$contains$22$(nopublish$survivors$$world.roleMap, roleId))) {
                  const role = moonbitlang$core$builtin$$Map$at$22$(self.roleMap, roleId);
                  const _bind$58 = role.life;
                  _bind$58.gold = _bind$58.gold + remain / 2;
                  remain = remain / 2;
                  roleId = role.lordId;
                  maxCnt = maxCnt - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
            const _bind$58 = nopublish$survivors$$get_nation(area.nationId);
            _bind$58.gold = _bind$58.gold + remain;
          }
          if (area.nationId >= 0) {
            area.gold = area.gold + 1;
            const _bind$57 = nopublish$survivors$$get_nation(area.nationId);
            _bind$57.gold = _bind$57.gold + 1;
          }
          const roleOccupy = moonbitlang$core$builtin$$Map$copy$63$(area.roleOccupy);
          let s = "";
          const _it$5 = moonbitlang$core$builtin$$Map$iterator2$63$(roleOccupy);
          while (true) {
            const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$63$(_it$5);
            if (_bind$57 === undefined) {
              break;
            } else {
              const _Some$2 = _bind$57;
              const _x = _Some$2;
              const _roleId = _x._1;
              if (moonbitlang$core$builtin$$Map$contains$22$(self.roleMap, _roleId)) {
                const role = moonbitlang$core$builtin$$Map$at$22$(self.roleMap, _roleId);
                if (role.nationId === area.nationId && (role.life.hp > 0 && (!role.inTeam && role.jobBuildCate >= 0))) {
                  const desc = moonbitlang$core$array$$Array$at$43$(nopublish$survivors$$buildDescs, role.jobBuildCate);
                  if (area.food <= 0 && desc.foodPerson <= 0) {
                    nopublish$survivors$$Area$release_role_from_build(area, role);
                    if (areaId === self.showAreaId && !self.inGlobe) {
                      s = `${s} ${nopublish$survivors$$Role$get_name(role)}`;
                    }
                  } else {
                    if (area.food > 0) {
                      area.food = area.food - 1;
                    }
                  }
                }
              }
              continue;
            }
          }
          if (s.length > 0) {
            nopublish$survivors$$log(`${s}因为食物供应不足而辞职了`);
          }
          nopublish$survivors$$Area$recalc_build_stat$46$inner(area, false);
          let _tmp$13 = 0;
          while (true) {
            const k = _tmp$13;
            if (k < 10) {
              if (!nopublish$survivors$$Area$auto_alloc_role(area)) {
                break;
              }
              _tmp$13 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$10 = areaId + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _len$3 = nopublish$survivors$$nations.length;
      let _tmp$11 = 0;
      while (true) {
        const _i = _tmp$11;
        if (_i < _len$3) {
          const nation = nopublish$survivors$$nations[_i];
          nation.eco = nation.cacheEco;
          _tmp$11 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if ((Math.imul(nopublish$survivors$$world.steps % 24 | 0, 15) | 0) === 0) {
        nopublish$survivors$$GameWorld$gen_all_babarians(nopublish$survivors$$world);
      }
      let _tmp$12 = 0;
      while (true) {
        const nationId = _tmp$12;
        if (nationId < 4) {
          if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.1) {
            if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, nationId)) {
              const warset = moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, nationId);
              if (warset.size > 0) {
                const targetId = moonbitlang$core$array$$Array$at$20$(moonbitlang$core$set$$Set$to_array$20$(warset), moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, warset.size));
                nopublish$survivors$$army_attack(nationId, targetId);
              }
            }
          }
          if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.001) {
            const targetId = moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, 4);
            if (targetId !== nationId) {
              if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, nationId)) {
                const warset = moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, nationId);
                if (!moonbitlang$core$set$$Set$contains$20$(warset, targetId) && targetId !== nationId) {
                  nopublish$survivors$$to_war(nationId, targetId);
                }
              } else {
                nopublish$survivors$$to_war(nationId, targetId);
              }
            }
          }
          if (moonbitlang$core$random$$Rand$double(nopublish$survivors$$grand) < 0.002) {
            if (moonbitlang$core$builtin$$Map$contains$21$(nopublish$survivors$$world.war, nationId)) {
              const warset = moonbitlang$core$builtin$$Map$at$21$(nopublish$survivors$$world.war, nationId);
              if (warset.size > 0) {
                const targetId = moonbitlang$core$array$$Array$at$20$(moonbitlang$core$set$$Set$to_array$20$(warset), moonbitlang$core$random$$Rand$int$46$inner(nopublish$survivors$$grand, warset.size));
                nopublish$survivors$$to_peace(nationId, targetId);
              }
            }
          }
          _tmp$12 = nationId + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if ((nopublish$survivors$$world.steps % 480 | 0) === 0 && nopublish$survivors$$world.nestCnt < 50) {
        nopublish$survivors$$GameWorld$gen_nest$46$inner(nopublish$survivors$$world, nopublish$survivors$$rnd_nest_level());
      }
      if (self.inGlobe) {
        nopublish$survivors$$Control$render$95$(_root.nationTable);
      }
    }
    if (!nopublish$survivors$$world.inGlobe && nopublish$survivors$$world.showAreaId >= 0) {
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, nopublish$survivors$$world.showAreaId);
      nopublish$survivors$$Area$recalc_build_stat$46$inner(area, true);
      nopublish$survivors$$Area$show_area_building_texts(area);
    }
    let status_str = "玩家角色";
    status_str = `${status_str} ♥:${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$world.player.life.hp, 10)}`;
    status_str = `${status_str} 🗡:${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$Role$get_atk(nopublish$survivors$$world.player), 10)}`;
    status_str = `${status_str} 💰:${String(nopublish$survivors$$world.player.life.gold)}`;
    status_str = `${status_str} 功绩:${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$world.player.life.score, 10)}`;
    status_str = `${status_str} 等级:${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$world.player.life.level, 10)}`;
    const _bind$57 = nopublish$survivors$$world.opRoot;
    if (_bind$57 === undefined) {
    } else {
      const _Some$2 = _bind$57;
      const _root$2 = _Some$2;
      nopublish$survivors$$Widget$set_text(_root$2.header.status, status_str, undefined, undefined, undefined);
    }
    nopublish$survivors$$world.steps = nopublish$survivors$$world.steps + 1 | 0;
    return;
  }
}
function nopublish$survivors$$game_update_system1(duration) {
  const _bind$56 = nopublish$survivors$$world.opRoot;
  if (_bind$56 === undefined) {
  } else {
    const _Some = _bind$56;
    const _root = _Some;
    let mgx = moonbitlang$core$double$$Double$to_int(Milky2018$selene$inputs$$mouse.pos._0 / 2 / 16);
    let mgy = moonbitlang$core$double$$Double$to_int((Milky2018$selene$inputs$$mouse.pos._1 / 2 - nopublish$survivors$$world.offy) / 16);
    let max = moonbitlang$core$double$$Double$to_int(Milky2018$selene$inputs$$mouse.pos._0 / 2 / 16);
    let may = moonbitlang$core$double$$Double$to_int((Milky2018$selene$inputs$$mouse.pos._1 / 2 - nopublish$survivors$$world.offy) / 16);
    mgx = nopublish$survivors$$clamp(mgx, 0, 17);
    mgy = nopublish$survivors$$clamp(mgy, 0, 17);
    max = nopublish$survivors$$clamp(max, 0, 17);
    may = nopublish$survivors$$clamp(may, 0, 17);
    let s = `mouse pos ${String(Milky2018$selene$inputs$$mouse.pos._0)},${String(Milky2018$selene$inputs$$mouse.pos._0)}`;
    if (nopublish$survivors$$world.inGlobe) {
      s = `${s}gmap grid ${moonbitlang$core$int$$Int$to_string$46$inner(mgx, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(mgy, 10)}\r\n`;
      const existRoleId = moonbitlang$core$array$$Array$at$20$(nopublish$survivors$$world.globeOccupy, (Math.imul(mgx, 18) | 0) + mgy | 0);
      const _bind$57 = nopublish$survivors$$world.opRoot;
      if (_bind$57 === undefined) {
      } else {
        const _Some$2 = _bind$57;
        const _root$2 = _Some$2;
        const _bind$58 = moonbitlang$core$builtin$$Map$get$22$(nopublish$survivors$$world.roleMap, existRoleId);
        if (_bind$58 === undefined) {
        } else {
          const _Some$3 = _bind$58;
          const _target = _Some$3;
          nopublish$survivors$$AreaTop$renderHoverRole(_root$2.areaTop, _target);
        }
      }
      if (nopublish$survivors$$world.wannaBuildCate >= 0) {
        nopublish$survivors$$world.wannaBuildCate = -1;
      }
    } else {
      s = `${s} lmap grid ${moonbitlang$core$int$$Int$to_string$46$inner(max, 10)},${moonbitlang$core$int$$Int$to_string$46$inner(may, 10)}\r\n`;
      const gpos = nopublish$survivors$$world.showAreaId;
      const area = moonbitlang$core$array$$Array$at$39$(nopublish$survivors$$world.areas, gpos);
      const apos = (Math.imul(max, 18) | 0) + may | 0;
      const existRoleId = nopublish$survivors$$Area$get_occupy(area, max, may);
      const _bind$57 = nopublish$survivors$$world.opRoot;
      if (_bind$57 === undefined) {
      } else {
        const _Some$2 = _bind$57;
        const _root$2 = _Some$2;
        const _bind$58 = moonbitlang$core$builtin$$Map$get$22$(nopublish$survivors$$world.roleMap, existRoleId);
        if (_bind$58 === undefined) {
        } else {
          const _Some$3 = _bind$58;
          const _target = _Some$3;
          nopublish$survivors$$AreaTop$renderHoverRole(_root$2.areaTop, _target);
        }
      }
      const _bind$58 = moonbitlang$core$builtin$$Map$get$63$(area.buildOccupy, apos);
      if (_bind$58 === undefined) {
      } else {
        const _Some$2 = _bind$58;
        const _buildId = _Some$2;
        const _bind$59 = moonbitlang$core$builtin$$Map$get$62$(area.buildings, _buildId);
        if (_bind$59 === undefined) {
        } else {
          const _Some$3 = _bind$59;
          const _build = _Some$3;
          nopublish$survivors$$Widget$set_text(_root.areaTop.buildDesc, nopublish$survivors$$Building$to_desc(_build), undefined, nopublish$survivors$$game_update_system1$46$constr$47$5836, undefined);
        }
      }
      const icon = moonbitlang$core$array$$Array$at$20$(area.terrain, apos);
      s = `${s}icon:${nopublish$survivors$$terrain_to_str(icon)}\r\n`;
      if (Milky2018$selene$inputs$$just_release_mouse.left_button && nopublish$survivors$$world.wannaBuildCate >= 0) {
        let rmax = moonbitlang$core$double$$Double$to_int(Milky2018$selene$inputs$$mouse.pos._0 / 2 / 16);
        let rmay = moonbitlang$core$double$$Double$to_int((Milky2018$selene$inputs$$mouse.pos._1 / 2 - nopublish$survivors$$world.offy) / 16);
        const raw_rmax = rmax;
        const raw_rmay = rmay;
        rmax = nopublish$survivors$$clamp(rmax, 0, 17);
        rmay = nopublish$survivors$$clamp(rmay, 0, 17);
        if (raw_rmax !== rmax || raw_rmay !== rmay) {
          nopublish$survivors$$world.wannaBuildCate = -1;
        }
        if (nopublish$survivors$$world.showAreaId >= 0 && nopublish$survivors$$world.wannaBuildCate >= 0) {
          s = `${s} wannabuildcate:${moonbitlang$core$int$$Int$to_string$46$inner(nopublish$survivors$$world.wannaBuildCate, 10)}`;
        }
        nopublish$survivors$$wanna_build_at(raw_rmax, raw_rmay);
      }
    }
    Milky2018$selene$system$$deferred_event_system(0);
    if (nopublish$survivors$$world.player.life.hp <= 0) {
      if (!Milky2018$selene$entity$$Entity$is_alive(nopublish$survivors$$world.gameEndPanel)) {
        Milky2018$selene$entity$$Entity$respawn(nopublish$survivors$$world.gameEndPanel);
      }
      const _it = moonbitlang$core$builtin$$Map$iterator2$22$(nopublish$survivors$$world.roleMap);
      while (true) {
        const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$22$(_it);
        if (_bind$57 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$57;
          const _x = _Some$2;
          const _role = _x._1;
          Milky2018$selene$entity$$Entity$destroy(_role.ge);
          Milky2018$selene$entity$$Entity$destroy(_role.ae);
          continue;
        }
      }
      Milky2018$selene$system$$deferred_event_system(0);
      return undefined;
    }
    if (nopublish$survivors$$world.roleBugInt > 0) {
      nopublish$survivors$$world.roleBugInt = nopublish$survivors$$world.roleBugInt - 1 | 0;
      Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.player.ae);
      Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.player.ge);
      Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.areaPanel);
      Milky2018$selene$entity$$Entity$destroy(nopublish$survivors$$world.globePanel);
      Milky2018$selene$system$$deferred_event_system(0);
      nopublish$survivors$$Role$repos(nopublish$survivors$$world.player);
      if (nopublish$survivors$$world.player.inGlobe) {
        Milky2018$selene$entity$$Entity$respawn(nopublish$survivors$$world.player.ge);
        Milky2018$selene$entity$$Entity$respawn(nopublish$survivors$$world.globePanel);
      } else {
        Milky2018$selene$entity$$Entity$respawn(nopublish$survivors$$world.player.ae);
        Milky2018$selene$entity$$Entity$respawn(nopublish$survivors$$world.areaPanel);
      }
      Milky2018$selene$system$$deferred_event_system(0);
    }
    nopublish$survivors$$world.accTime = nopublish$survivors$$world.accTime + duration;
    if (nopublish$survivors$$world.totalcnt > 0) {
      nopublish$survivors$$world.totalcnt = nopublish$survivors$$world.totalcnt - 1 | 0;
    }
    if (nopublish$survivors$$world.lastKeyTime >= 0.1) {
      nopublish$survivors$$world.lastKeyTime = -1;
    }
    if (nopublish$survivors$$world.lastKeyTime >= 0) {
      nopublish$survivors$$world.lastKeyTime = nopublish$survivors$$world.lastKeyTime + duration;
    }
    const inputK = nopublish$survivors$$btn_input();
    const inputX = nopublish$survivors$$btn_input_x();
    const inputY = nopublish$survivors$$btn_input_y();
    const inputIdx = nopublish$survivors$$btn_input_idx();
    switch (inputK) {
      case "W": {
        nopublish$survivors$$Role$move(nopublish$survivors$$world.player, { _0: 0, _1: -1 });
        break;
      }
      case "A": {
        nopublish$survivors$$Role$move(nopublish$survivors$$world.player, { _0: -1, _1: 0 });
        break;
      }
      case "S": {
        nopublish$survivors$$Role$move(nopublish$survivors$$world.player, { _0: 0, _1: 1 });
        break;
      }
      case "D": {
        nopublish$survivors$$Role$move(nopublish$survivors$$world.player, { _0: 1, _1: 0 });
        break;
      }
      case "Q": {
        if (nopublish$survivors$$world.player.inGlobe) {
          nopublish$survivors$$Role$toArea$46$inner(nopublish$survivors$$world.player, true);
        } else {
          nopublish$survivors$$Role$toGlobe(nopublish$survivors$$world.player);
        }
        break;
      }
      case "H": {
        nopublish$survivors$$heroAddClick();
        break;
      }
      case "B": {
        let idx = 0;
        const _it = moonbitlang$core$builtin$$Map$iterator2$61$(_root.areaLower.buildLines);
        while (true) {
          const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$61$(_it);
          if (_bind$57 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$57;
            const _x = _Some$2;
            const _line = _x._1;
            if (inputIdx === idx) {
              nopublish$survivors$$world.wannaBuildCate = _line.cate;
              nopublish$survivors$$wanna_build_at(inputX, inputY);
            }
            idx = idx + 1 | 0;
            continue;
          }
        }
        break;
      }
      case "+": {
        if (!nopublish$survivors$$world.inGlobe) {
          if (_root.areaLower.showHero) {
            let idx$2 = 0;
            const _arr = _root.areaLower.heroPage.lines;
            const _len = _arr.length;
            let _tmp$6 = 0;
            while (true) {
              const _i = _tmp$6;
              if (_i < _len) {
                const line = _arr[_i];
                nopublish$survivors$$ui_hero_add_soldier(line.heroId);
                idx$2 = idx$2 + 1 | 0;
                _tmp$6 = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            let idx$2 = 0;
            const _it$2 = moonbitlang$core$builtin$$Map$iterator2$61$(_root.areaLower.buildLines);
            while (true) {
              const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$61$(_it$2);
              if (_bind$57 === undefined) {
                break;
              } else {
                const _Some$2 = _bind$57;
                const _x = _Some$2;
                const _line = _x._1;
                if (inputIdx === idx$2) {
                  nopublish$survivors$$ui_build_alloc_add(_line.cate);
                  break;
                }
                idx$2 = idx$2 + 1 | 0;
                continue;
              }
            }
          }
        }
        break;
      }
      case "-": {
        if (!nopublish$survivors$$world.inGlobe) {
          if (_root.areaLower.showHero) {
            let idx$2 = 0;
            const _arr = _root.areaLower.heroPage.lines;
            const _len = _arr.length;
            let _tmp$6 = 0;
            while (true) {
              const _i = _tmp$6;
              if (_i < _len) {
                const line = _arr[_i];
                nopublish$survivors$$ui_hero_minus_soldier(line.heroId);
                idx$2 = idx$2 + 1 | 0;
                _tmp$6 = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            let idx$2 = 0;
            const _it$2 = moonbitlang$core$builtin$$Map$iterator2$61$(_root.areaLower.buildLines);
            while (true) {
              const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$61$(_it$2);
              if (_bind$57 === undefined) {
                break;
              } else {
                const _Some$2 = _bind$57;
                const _x = _Some$2;
                const _line = _x._1;
                if (inputIdx === idx$2) {
                  nopublish$survivors$$ui_build_alloc_minus(_line.cate);
                  break;
                }
                idx$2 = idx$2 + 1 | 0;
                continue;
              }
            }
          }
        }
        break;
      }
      case "建筑/英雄": {
        _root.areaLower.showHero = !_root.areaLower.showHero;
        nopublish$survivors$$Control$render$96$(_root.areaLower);
        break;
      }
    }
    if (nopublish$survivors$$world.lastKeyTime < 0) {
      let vel = Milky2018$selene$math$$Vec2D$normalize(Milky2018$selene$inputs$$key_vector(22, 18, 0, 3));
      if (Milky2018$selene$inputs$$is_just_released(22)) {
        vel = { _0: 0, _1: -1 };
      } else {
        if (Milky2018$selene$inputs$$is_just_released(0)) {
          vel = { _0: 1, _1: 0 };
        } else {
          if (Milky2018$selene$inputs$$is_just_released(18)) {
            vel = { _0: 0, _1: 1 };
          } else {
            if (Milky2018$selene$inputs$$is_just_released(3)) {
              vel = { _0: -1, _1: 0 };
            }
          }
        }
      }
      nopublish$survivors$$Role$move(nopublish$survivors$$world.player, vel);
      if (vel._0 !== 0 || vel._1 !== 0) {
        nopublish$survivors$$world.lastKeyTime = 0;
        nopublish$survivors$$GameWorld$step(nopublish$survivors$$world);
      } else {
        if (Milky2018$selene$inputs$$is_just_released(23)) {
          nopublish$survivors$$Role$rnd_move(nopublish$survivors$$world.player);
          nopublish$survivors$$GameWorld$step(nopublish$survivors$$world);
        } else {
          if (Milky2018$selene$inputs$$is_just_released(16)) {
            if (nopublish$survivors$$world.player.inGlobe) {
              nopublish$survivors$$Role$toArea$46$inner(nopublish$survivors$$world.player, true);
            } else {
              nopublish$survivors$$Role$toGlobe(nopublish$survivors$$world.player);
            }
          }
        }
      }
    }
    Milky2018$selene$system$$deferred_event_system(0);
    Milky2018$selene$system$$deferred_event_system(0);
    nopublish$survivors$$Role$repos(nopublish$survivors$$world.player);
    const _it$2 = moonbitlang$core$builtin$$Map$iterator2$22$(nopublish$survivors$$world.roleMap);
    while (true) {
      const _bind$57 = moonbitlang$core$builtin$$Iterator2$next$22$(_it$2);
      if (_bind$57 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$57;
        const _x = _Some$2;
        const _role = _x._1;
        nopublish$survivors$$Role$repos(_role);
        continue;
      }
    }
    if (nopublish$survivors$$world.accTime > 5) {
      nopublish$survivors$$GameWorld$step(nopublish$survivors$$world);
    }
  }
}
(() => {
})();
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_plugin(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_zoom(Milky2018$selene$system$$App$with_image_smooth(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new(), 960), 640), false), 2), moonbitlang$core$double$$Double$to_uint(60)), Milky2018$selene$plugins$$default_plugin), nopublish$survivors$$game_start1, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), nopublish$survivors$$game_update_system1, undefined, undefined), nopublish$survivors$$click_check_system, undefined, undefined));
})();
