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
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$builtin$$JSArray$splice = (arr, idx, cnt) => arr.splice(idx, cnt);
const moonbitlang$core$builtin$$JSArray$splice1 = (arr, idx, cnt, val) => arr.splice(idx, cnt, val);
const moonbitlang$core$double$$Double$mod_ffi = (a, b) => (a % b);
const retfings$game$Core$$is_wechat = () => typeof wx !== 'undefined';
const retfings$game$Core$$document_body_append_child = (el) => document.body.appendChild(el);
const retfings$game$Core$$requestAnimationFrame = (callback) => requestAnimationFrame(callback);
const retfings$game$Core$$to_frame_callback = (f) => (timestamp) => f(timestamp);
const retfings$game$Core$$create_web_canvas = () => document.createElement("canvas");
const retfings$game$Core$$create_wx_canvas = () => wx.createCanvas();
const retfings$game$Core$$is_in_web_browser = () => typeof window !== 'undefined' && typeof document !== 'undefined' && typeof wx === 'undefined';
const retfings$game$Core$$canvas_get_context = (canvas, ctx_type) => canvas.getContext(ctx_type);
const retfings$game$Core$$ctx_shadow_color = (ctx,color) => ctx.shadowColor = color;
const retfings$game$Core$$ctx_shadow_blur = (ctx,color) => ctx.shadowBlur = color;
const retfings$game$Core$$ctx_shadow_offsetY = (ctx,color) => ctx.shadowOffsetY = color;
const retfings$game$Core$$ctx_shadow_offsetX = (ctx,color) => ctx.shadowOffsetX = color;
const retfings$game$Core$$ctx_ellipse = (ctx,x,y,radiusX,radiusY,rotation,startAngle,endAngle,counterclockwise) => ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
const retfings$game$Core$$ctx_create_radial_gradient = (ctx,x0, y0, r0, x1, y1, r1) => ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
const retfings$game$Core$$ctx_create_lineargradient = (ctx,x0,y0,x1,y1) => ctx.createLinearGradient(x0,y0,x1,y1);
const retfings$game$Core$$ctx_restore = (ctx) => ctx.restore();
const retfings$game$Core$$ctx_begin_path = (ctx) => ctx.beginPath();
const retfings$game$Core$$ctx_close_path = (ctx) => ctx.closePath();
const retfings$game$Core$$ctx_move_to = (ctx, x, y) => ctx.moveTo(x, y);
const retfings$game$Core$$ctx_line_to = (ctx, x, y) => ctx.lineTo(x, y);
const retfings$game$Core$$ctx_quadratic_curve_to = (ctx,cpx,cpy,x,y) => ctx.quadraticCurveTo(cpx, cpy, x, y);
const retfings$game$Core$$ctx_arc = (ctx, x, y, radius, startAngle, endAngle, anticlockwise) => ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
const retfings$game$Core$$ctx_rect = (ctx, x, y, w, h) => ctx.rect(x, y, w, h);
const retfings$game$Core$$ctx_fill = (ctx) => ctx.fill();
const retfings$game$Core$$ctx_stroke = (ctx) => ctx.stroke();
const retfings$game$Core$$ctx_clip = (ctx) => ctx.clip();
const retfings$game$Core$$ctx_fill_rect = (ctx, x, y, w, h) => ctx.fillRect(x, y, w, h);
const retfings$game$Core$$ctx_stroke_rect = (ctx, x, y, w, h) => ctx.strokeRect(x, y, w, h);
const retfings$game$Core$$ctx_clear_rect = (ctx, x, y, w, h) => ctx.clearRect(x, y, w, h);
const retfings$game$Core$$ctx_set_fill_style_string = (ctx, style) =>  ctx.fillStyle = style;
const retfings$game$Core$$ctx_set_fill_style_gradient = (ctx, style) =>  ctx.fillStyle = style;
const retfings$game$Core$$ctx_set_stroke_style_string = (ctx, style) => ctx.strokeStyle = style;
const retfings$game$Core$$ctx_set_stroke_style_g = (ctx, style) => ctx.strokeStyle = style;
const retfings$game$Core$$ctx_set_line_width = (ctx, width) =>  ctx.lineWidth = width;
const retfings$game$Core$$ctx_set_line_cap = (ctx, cap) => ctx.lineCap = cap;
const retfings$game$Core$$ctx_set_line_join = (ctx, join) =>  ctx.lineJoin = join;
const retfings$game$Core$$ctx_save = (ctx) => ctx.save();
const retfings$game$Core$$ctx_fill_text = (ctx, text, x, y) => ctx.fillText(text, x, y);
const retfings$game$Core$$ctx_set_font = (ctx, font) =>  ctx.font = font;
const retfings$game$Core$$ctx_set_text_align = (ctx, align) =>  ctx.textAlign = align;
const retfings$game$Core$$ctx_set_text_baseline = (ctx, baseline) =>  ctx.textBaseline = baseline;
const retfings$game$Core$$ctx_translate = (ctx, x, y) => ctx.translate(x, y);
const retfings$game$Core$$ctx_rotate = (ctx, angle) => ctx.rotate(angle);
const retfings$game$Core$$ctx_scale = (ctx, x, y) => ctx.scale(x, y);
const retfings$game$Core$$ctx_set_transform = (ctx, a, b, c, d, e, f) => ctx.setTransform(a, b, c, d, e, f);
const retfings$game$Core$$ctx_set_global_alpha = (ctx, alpha) =>  ctx.globalAlpha = alpha;;
const retfings$game$Core$$ctx_set_global_composite_operation_string = (ctx, op) => { ctx.globalCompositeOperation = op; };
const retfings$game$Core$$ctx_set_global_composite_operation_gradient = (ctx, op) => { ctx.globalCompositeOperation = op; };
function $64$retfings$47$game$47$Core$46$Color$StringColor(param0) {
  this._0 = param0;
}
$64$retfings$47$game$47$Core$46$Color$StringColor.prototype.$tag = 0;
function $64$retfings$47$game$47$Core$46$Color$CanvasGradientColor(param0) {
  this._0 = param0;
}
$64$retfings$47$game$47$Core$46$Color$CanvasGradientColor.prototype.$tag = 1;
const retfings$game$Core$$ctx_measure_text_w = (ctx,text) => ctx.measureText(text).width;
const retfings$game$Core$$add_color_stop_string = (g,offset,color) => g.addColorStop(offset,color);
const retfings$game$Core$$add_color_stop_canvas_gradient = (g,offset,color) => g.addColorStop(offset,color);
const retfings$game$Core$$canvas_set_width = (canvas, w) => { canvas.width = w; };
const retfings$game$Core$$canvas_css_width = (canvas, w) => { canvas.style.width = w + "px"; };
const retfings$game$Core$$canvas_css_height = (canvas, h) => { canvas.style.height = h + "px"; };
const retfings$game$Core$$canvas_set_height = (canvas, h) => { canvas.height = h; };
const retfings$game$Core$$canvas_width = (canvas) => canvas.width;
const retfings$game$Core$$canvas_height = (canvas) => canvas.height;
const retfings$game$Core$Sprite$Enemy$$_apply_poison = (duration,damage_fn) => {
const interval = 1000;
const startTime = Date.now();
let count = 0;

const intervalId = setInterval(() => {
  const elapsed = Date.now() - startTime;
  if (elapsed >= duration) {
    clearInterval(intervalId);
    return;
  }


damage_fn()
}, interval);
};
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
const retfings$game$Core$LocalStorage$$setItem = (k,v) => {
  if (typeof wx !== 'undefined'){
    wx.setStorageSync(k, v)
  }else{
    localStorage.setItem(k,v)
  }
};
const retfings$game$Core$LocalStorage$$getItem = (k) => {
  if (typeof wx !== 'undefined'){
    return wx.getStorageSync(k)
  }else{
    if (localStorage.getItem(k) !==null ){
      return localStorage.getItem(k)
    }else {
      return ''
    }
  }
};
const retfings$game$Core$LocalStorage$$clear = () => {
  if (typeof wx !== 'undefined'){
    return wx.clearStorageSync()
  }else{
    return localStorage.clear()
  }
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
const retfings$game$Core$platform$$margin0 = () => {document.body.style.margin = '0';
 document.body.style.overflow = 'hidden';};
const retfings$game$Core$platform$$get_web_screen_height = () => window.innerHeight;
const retfings$game$Core$platform$$get_web_screen_width = () => window.innerWidth;
const retfings$game$Core$platform$$window_devicePixelRatio = () => window.devicePixelRatio || 1;
const retfings$game$Core$platform$$add_mouse_down_click_listener_with_callback = (canvas, callback) => {
  canvas.addEventListener('mousedown', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    callback({x: x, y: y});
  });
};;
const retfings$game$Core$platform$$add_mouse_move_listener_with_callback = (canvas, callback) => {
  canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    callback({x: x, y: y});
  });
};;
const retfings$game$Core$platform$$add_mouse_up_listener_with_callback = (canvas, callback) => {
  canvas.addEventListener('mouseup', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    callback({x: x, y: y});
  });
};;
const retfings$game$Core$platform$$wx_get_window_info = () => wx.getWindowInfo();
const retfings$game$Core$platform$$window_info_get_pixel_ratio = (wi) => wi.pixelRatio;
const retfings$game$Core$platform$$window_info_get_screen_width = (wi) => wi.screenWidth;
const retfings$game$Core$platform$$window_info_get_screen_height = (wi) => wi.screenHeight;
const retfings$game$Core$platform$$window_info_get_window_width = (wi) => wi.windowWidth;
const retfings$game$Core$platform$$window_info_get_window_height = (wi) => wi.windowHeight;
const retfings$game$Core$platform$$window_info_get_status_bar_height = (wi) => wi.statusBarHeight;
const retfings$game$Core$platform$$window_info_get_screen_top = (wi) => wi.screenTop;
const retfings$game$Core$platform$$touch_get_client_x = (touch) => touch.clientX;
const retfings$game$Core$platform$$touch_get_client_y = (touch) => touch.clientY;
const retfings$game$Core$platform$$touch_event_get_touches = (e) => Array.from(e.touches);
const retfings$game$Core$platform$$wx_on_touch_start = (handler) => wx.onTouchStart(handler);
const retfings$game$Core$platform$$touch_event_get_time_stamp = (e) => e.timeStamp;
const retfings$game$Core$platform$$wx_on_touch_move = (handler) => wx.onTouchMove(handler);
const retfings$game$Core$platform$$touch_event_get_changed_touches = (e) => Array.from(e.changedTouches);
const retfings$game$Core$platform$$wx_on_touch_end = (handler) => wx.onTouchEnd(handler);
const retfings$game$Renders$TowerRender$$random = () => { return Math.random() };
function $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$TowerData(param0) {
  this._0 = param0;
}
$64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$TowerData.prototype.$tag = 0;
function $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$EnemiesData(param0) {
  this._0 = param0;
}
$64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$EnemiesData.prototype.$tag = 1;
function $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$NeutralElementsData(param0) {
  this._0 = param0;
}
$64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$NeutralElementsData.prototype.$tag = 2;
const retfings$game$$initGlobal = () => {
  let g;
  if (typeof globalThis !== 'undefined') {
    g = globalThis;
  } else if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  } else if (typeof self !== 'undefined') {
    g = self;
  } else {
    g = typeof GameGlobal !== 'undefined' ? GameGlobal : {};
  }

  g.TEST_GAME_CONFIG = {
    version: '1.0.0',
    debug: true,
    score: 0
  };

  g.TEST_FILL_COLORS = "red";

  g.getGlobal = function(key) {
    return this[key];
  };

  let localStorage;
  if (typeof wx !== 'undefined') {
    localStorage = {
      get length() {
        const { keys } = wx.getStorageInfoSync();
        return keys.length;
      },

      key(n) {
        const { keys } = wx.getStorageInfoSync();
        return keys[n];
      },

      getItem(key) {
        const value = wx.getStorageSync(key);
        return value === '' ? null : value;
      },

      setItem(key, value) {
        return wx.setStorageSync(key, value);
      },

      removeItem(key) {
        return wx.removeStorageSync(key);
      },

      clear() {
        return wx.clearStorageSync();
      }
    };
  } else {
    localStorage = g.localStorage;
  }
  g.setGlobal = function(key, value) {
    this[key] = value;
  };

  g.setGlobal("localStorage", localStorage);
};;
const moonbitlang$core$string$$boyer_moore_horspool_find$46$constr$47$1201 = 0;
const moonbitlang$core$string$$brute_force_find$46$constr$47$1215 = 0;
const retfings$game$Core$$new$46$record$47$1245 = { width: 1280, height: 720, gridSize: 80 };
(() => {
})();
const retfings$game$Core$Sprite$Tower$$positive_magnetic_min_distance = 160;
const retfings$game$Core$Sprite$Tower$$magnetic_field_timer_max = 3000;
const retfings$game$Core$Sprite$Tower$$positive_magnetic_width = 40;
(() => {
})();
(() => {
})();
(() => {
})();
const retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner$46$42$bind$124$1281 = "%alpha";
const retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner$46$42$bind$124$1285 = "%alpha";
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3760 = { _0: "plateDark", _1: "#6b64c9" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3761 = { _0: "plateLight", _1: "#8c86f0" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3762 = { _0: "plateStroke", _1: "#5a55b8" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3763 = { _0: "rocketMain", _1: "#b15cf1" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3764 = { _0: "rocketShade", _1: "#8f47ca" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3765 = { _0: "stripe1", _1: "#ff6bd3" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3766 = { _0: "stripe2", _1: "#ffb0db" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3767 = { _0: "fin1", _1: "#ffd759" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3768 = { _0: "fin2", _1: "#f6b23a" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3769 = { _0: "nozzle", _1: "#7b35c3" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3770 = { _0: "flame1", _1: "#ffdc7a" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3771 = { _0: "flame2", _1: "#ff9a3c" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$42$bind$47$3772 = [retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3760, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3761, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3762, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3763, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3764, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3765, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3766, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3767, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3768, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3769, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3770, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$3771];
const retfings$game$Renders$TowerRender$$draw_cap$46$constr$47$3816 = false;
const retfings$game$Renders$TowerRender$$draw_cap$46$constr$47$3817 = true;
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4008 = { _0: "plateDark", _1: "#4a4a4a" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4009 = { _0: "plateLight", _1: "#666666" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4010 = { _0: "plateStroke", _1: "#333333" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4011 = { _0: "towerMain", _1: "#00aaff" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4012 = { _0: "towerShade", _1: "#0077cc" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4013 = { _0: "laserCore", _1: "#ff0000" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4014 = { _0: "laserGlow", _1: "#ff6666" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4015 = { _0: "highlight", _1: "#ffffff" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4016 = { _0: "nozzle", _1: "#222222" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$42$bind$47$4017 = [retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4008, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4009, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4010, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4011, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4012, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4013, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4014, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4015, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4016];
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4068 = { _0: "baseDark", _1: "#1d1d3a" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4069 = { _0: "baseLight", _1: "#5a5af2" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4070 = { _0: "baseStroke", _1: "#2a2aa5" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4071 = { _0: "magnet", _1: "#0000ff" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4072 = { _0: "ring1", _1: "#6666ff" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4073 = { _0: "ring2", _1: "#3333ff" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4074 = { _0: "glow1", _1: "rgba(0,0,255,0.85)" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4075 = { _0: "glow0", _1: "rgba(0,0,255,0)" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4076 = { _0: "muzzleCore", _1: "#9999ff" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$42$bind$47$4077 = [retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4068, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4069, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4070, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4071, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4072, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4073, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4074, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4075, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4076];
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4118 = { _0: "baseDark", _1: "#1d2a3a" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4119 = { _0: "baseLight", _1: "#2f3f5e" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4120 = { _0: "baseStroke", _1: "#253147" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4121 = { _0: "bolt", _1: "#8aa1b5" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4122 = { _0: "ring1", _1: "#5ad1ff" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4123 = { _0: "ring2", _1: "#4cf2c2" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4124 = { _0: "barrelShade", _1: "#3f74d5" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4125 = { _0: "barrelMain", _1: "#66a9ff" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4126 = { _0: "glow1", _1: "rgba(166,255,251,0.85)" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4127 = { _0: "glow0", _1: "rgba(166,255,251,0)" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4128 = { _0: "muzzleCore", _1: "#bffcff" };
const retfings$game$Renders$TowerRender$$render$46$inner$46$42$bind$47$4129 = [retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4118, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4119, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4120, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4121, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4122, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4123, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4124, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4125, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4126, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4127, retfings$game$Renders$TowerRender$$render$46$inner$46$tuple$47$4128];
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4226 = { _0: "baseDark", _1: "#3a1d1d" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4227 = { _0: "baseLight", _1: "#f25a5a" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4228 = { _0: "baseStroke", _1: "#a52a2a" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4229 = { _0: "magnet", _1: "#ff0000" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4230 = { _0: "ring1", _1: "#ff6666" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4231 = { _0: "ring2", _1: "#ff3333" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4232 = { _0: "glow1", _1: "rgba(255,0,0,0.85)" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4233 = { _0: "glow0", _1: "rgba(255,0,0,0)" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4234 = { _0: "muzzleCore", _1: "#ff9999" };
const retfings$game$Renders$TowerRender$$render_tower$46$inner$46$42$bind$47$4235 = [retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4226, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4227, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4228, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4229, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4230, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4231, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4232, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4233, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$tuple$47$4234];
const retfings$game$Renders$EnemyRender$$render_enemy$46$inner$46$body_color$124$79 = "#4CAF50";
const retfings$game$Renders$MapRender$$render$46$dark$124$5 = "#6C835D";
const retfings$game$Renders$MapRender$$render$46$light$124$6 = "#d6ffb8";
const retfings$game$Core$$instance = moonbitlang$core$ref$$Ref$new$0$(undefined);
const retfings$game$Core$$map = retfings$game$Core$$Map$map_config();
const retfings$game$Core$Map$$mapGridSystemInstance = moonbitlang$core$ref$$Ref$new$1$(undefined);
const retfings$game$Core$Map$$map_grid_system_singleton = retfings$game$Core$Map$$MapGridSystem$get_instance();
const retfings$game$Core$Map$$mapPathInstance = moonbitlang$core$ref$$Ref$new$2$(undefined);
(() => {
  retfings$game$Core$Map$$set_path_by_level(1);
})();
(() => {
  retfings$game$Core$Map$$set_neutral_element_by_level(1);
})();
const retfings$game$Core$TopBar$$hduInstance = moonbitlang$core$ref$$Ref$new$3$(undefined);
const retfings$game$Core$TopBar$$hduSingleton = retfings$game$Core$TopBar$$HDU$get_instance();
(() => {
  retfings$game$Core$TopBar$$HDU$set_HDU_by_level(retfings$game$Core$TopBar$$hduSingleton, 1);
})();
const retfings$game$Core$Point$$towerPointInstance = moonbitlang$core$ref$$Ref$new$4$(undefined);
const retfings$game$Core$Point$$towerPointSingleton = retfings$game$Core$Point$$TowerPoint$get_instance();
const retfings$game$Core$Point$$pixelPointInstance = moonbitlang$core$ref$$Ref$new$5$(undefined);
const retfings$game$Core$Point$$pixelPointSingleton = retfings$game$Core$Point$$PixelPoint$get_instance();
const retfings$game$Core$Panels$$selectTowerPanelInstance = moonbitlang$core$ref$$Ref$new$6$(undefined);
const retfings$game$Core$Panels$$selectTowerPanelSingleton = retfings$game$Core$Panels$$SelectTowerPanel$get_instance();
(() => {
  retfings$game$Core$Panels$$set_available_tower_by_level(1);
})();
const retfings$game$Core$EventSystem$$goldGainEventListeners = moonbitlang$core$array$$Array$new$46$inner$7$(0);
const retfings$game$Controllers$TopBarController$$hduControllerInstance = moonbitlang$core$ref$$Ref$new$8$(-1);
const retfings$game$Controllers$TopBarController$$hduControllerSingleton = retfings$game$Controllers$TopBarController$$HDUController$get_instance();
(() => {
  retfings$game$Core$EventSystem$$add_gold_gain_listener((event) => {
    retfings$game$Controllers$TopBarController$$HDUController$add_gold(retfings$game$Controllers$TopBarController$$hduControllerSingleton, event.amount + 0);
  });
})();
(() => {
  if (retfings$game$Core$$is_wechat()) {
    retfings$game$Core$platform$$window_info_get_screen_width(retfings$game$Core$platform$$getWindowInfo());
    retfings$game$Core$platform$$window_info_get_window_height(retfings$game$Core$platform$$getWindowInfo());
    retfings$game$Core$platform$$window_info_get_status_bar_height(retfings$game$Core$platform$$getWindowInfo());
    retfings$game$Core$platform$$window_info_get_screen_top(retfings$game$Core$platform$$getWindowInfo());
    return;
  } else {
    return;
  }
})();
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const retfings$game$Core$platform$$miniGameAdapterRenderInstance = moonbitlang$core$ref$$Ref$new$9$(undefined);
const retfings$game$Core$$canvasInstance = moonbitlang$core$ref$$Ref$new$10$(Option$None$0$);
const retfings$game$Core$$canvasSingleton = retfings$game$Core$$Canvas$get_instance();
const retfings$game$Core$$ctxSingleton = retfings$game$Core$$Canvas$getContext(retfings$game$Core$$canvasSingleton, "2d");
const retfings$game$Core$platform$$miniGameAdapterRenderSingleton = retfings$game$Core$$is_wechat() ? retfings$game$Core$platform$$MiniGameAdapterRender$get_instance(retfings$game$Core$$canvasSingleton, retfings$game$Core$$ctxSingleton) : undefined;
const retfings$game$Core$platform$$miniGameAdapterRenderResizeInfoMap = moonbitlang$core$ref$$Ref$new$11$(moonbitlang$core$builtin$$Map$new$46$inner$12$(8));
const retfings$game$Core$platform$$miniGameAdapterInputerInstance = moonbitlang$core$ref$$Ref$new$13$(undefined);
const retfings$game$Core$platform$$miniGameAdapterInputerSingleton = retfings$game$Core$$is_wechat() ? retfings$game$Core$platform$$MiniGameAdapterInputer$get_instance() : undefined;
const retfings$game$Controllers$InputController$$isFirst = moonbitlang$core$ref$$Ref$new$14$(0);
const retfings$game$Core$platform$$webAdapterRenderInstance = moonbitlang$core$ref$$Ref$new$15$(undefined);
const retfings$game$Core$platform$$webAdapterRenderSingleton = retfings$game$Core$$is_in_web_browser() ? retfings$game$Core$platform$$WebAdapterRender$get_instance(retfings$game$Core$$canvasSingleton, retfings$game$Core$$ctxSingleton) : undefined;
const retfings$game$Core$platform$$webAdapterRenderResizeInfoMap = moonbitlang$core$ref$$Ref$new$11$(moonbitlang$core$builtin$$Map$new$46$inner$12$(8));
const retfings$game$Core$platform$$webAdapterInputerInstance = moonbitlang$core$ref$$Ref$new$16$(undefined);
const retfings$game$Core$platform$$webAdapterInputerSingleton = retfings$game$Core$$is_in_web_browser() ? retfings$game$Core$platform$$WebAdapterInputer$get_instance() : undefined;
const retfings$game$Controllers$InputController$$inputControllerInstance = moonbitlang$core$ref$$Ref$new$17$(undefined);
const retfings$game$Controllers$InputController$$inputControllerSingleton = retfings$game$Controllers$InputController$$InputController$get_instance();
const retfings$game$Core$LocalStorage$$localStorageInstance = moonbitlang$core$ref$$Ref$new$18$(-1);
const retfings$game$Core$LocalStorage$$localStorageSingleton = retfings$game$Core$LocalStorage$$LocalStorage$get_instance();
const retfings$game$Core$Panels$$menuPanelInstance = moonbitlang$core$ref$$Ref$new$19$(undefined);
const retfings$game$Core$Panels$$menuPanelSingleton = retfings$game$Core$Panels$$MenuPanel$get_instance();
const retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_instance = moonbitlang$core$ref$$Ref$new$20$(undefined);
const retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton = retfings$game$Core$Sprite$NeutralElement$$NeutralElementClick$get_instance();
const retfings$game$Core$Pages$$selectLevelPageInstance = moonbitlang$core$ref$$Ref$new$21$(undefined);
const retfings$game$Core$Pages$$selectLevelPageSingleton = retfings$game$Core$Pages$$SelectLevelPage$get_instance();
const retfings$game$Core$Map$$enemyWaveConfigInstance = moonbitlang$core$ref$$Ref$new$22$(undefined);
const retfings$game$Core$TopBar$$speedButtonInstance = moonbitlang$core$ref$$Ref$new$23$(undefined);
const retfings$game$Core$TopBar$$speedButtonSingleton = retfings$game$Core$TopBar$$SpeedButton$get_instance();
const retfings$game$Core$Sprite$HP$$hPInstance = moonbitlang$core$ref$$Ref$new$24$(undefined);
const retfings$game$Core$Sprite$HP$$hPSingleton = retfings$game$Core$Sprite$HP$$HP$get_instance();
const retfings$game$Controllers$TopBarController$$speedControllerInstance = moonbitlang$core$ref$$Ref$new$25$(-1);
const retfings$game$Controllers$TopBarController$$speedControllerSingleton = retfings$game$Controllers$TopBarController$$SpeedController$get_instance();
const retfings$game$Core$Map$$mapLevelInstance = moonbitlang$core$ref$$Ref$new$26$(undefined);
const retfings$game$Core$Map$$mapLevelSingleton = retfings$game$Core$Map$$MapLevel$get_instance();
const retfings$game$Core$Map$$currentLevel = moonbitlang$core$ref$$Ref$new$27$(1);
const retfings$game$Core$Pages$$winPageInstance = moonbitlang$core$ref$$Ref$new$28$(undefined);
const retfings$game$Core$Pages$$winPageSingleton = retfings$game$Core$Pages$$WinPage$get_instance();
const retfings$game$Controllers$PagesController$$losePageControllerInstance = moonbitlang$core$ref$$Ref$new$29$(-1);
const retfings$game$Controllers$PagesController$$losePageControllerSingleton = retfings$game$Controllers$PagesController$$LosePageController$get_instance();
const retfings$game$Controllers$PanelsController$$selectTowerPanelControllerInstance = moonbitlang$core$ref$$Ref$new$30$(-1);
const retfings$game$Controllers$PanelsController$$selectTowerPanelControllerSingleton = retfings$game$Controllers$PanelsController$$SelectTowerPanelController$get_instance();
const retfings$game$Controllers$TopBarController$$pauseControllerInstance = moonbitlang$core$ref$$Ref$new$31$(-1);
const retfings$game$Controllers$TopBarController$$pauseControllerSingleton = retfings$game$Controllers$TopBarController$$PauseController$get_instance();
const retfings$game$Core$Map$$click_disabled_tips = moonbitlang$core$ref$$Ref$new$32$([]);
const retfings$game$Controllers$MapController$$mapControllerInstance = moonbitlang$core$ref$$Ref$new$33$(-1);
const retfings$game$Controllers$MapController$$mapControllerSingleton = retfings$game$Controllers$MapController$$MapController$get_instance();
const retfings$game$Core$Pages$$losePageInstance = moonbitlang$core$ref$$Ref$new$34$(undefined);
const retfings$game$Core$Pages$$losePageSingleton = retfings$game$Core$Pages$$LosePage$get_instance();
const retfings$game$Controllers$TopBarController$$menuButtonControllerInstance = moonbitlang$core$ref$$Ref$new$35$(-1);
const retfings$game$Controllers$TopBarController$$menuButtonControllerSingleton = retfings$game$Controllers$TopBarController$$MenuButtonController$get_instance();
const retfings$game$Controllers$PagesController$$selectLevelPageControllerInstance = moonbitlang$core$ref$$Ref$new$36$(-1);
const retfings$game$Controllers$PagesController$$selectLevelPageControllerSingleton = retfings$game$Controllers$PagesController$$SelectLevelPageController$get_instance();
const retfings$game$Core$TopBar$$pauseButtonInstance = moonbitlang$core$ref$$Ref$new$37$(undefined);
const retfings$game$Core$TopBar$$pauseButtonSingleton = retfings$game$Core$TopBar$$PauseButton$get_instance();
const retfings$game$Core$Sprite$Tower$$towerIdCounter = moonbitlang$core$ref$$Ref$new$27$(0);
const retfings$game$Core$Map$$mapTipsInstance = moonbitlang$core$ref$$Ref$new$38$(undefined);
const retfings$game$Core$Map$$mapTipsSingleton = retfings$game$Core$Map$$ClickDisabledTips$get_instance();
const retfings$game$Controllers$PanelsController$$menuPanelControllerInstance = moonbitlang$core$ref$$Ref$new$39$(-1);
const retfings$game$Controllers$PanelsController$$menuPanelControllerSingleton = retfings$game$Controllers$PanelsController$$MenuPanelController$get_instance();
const retfings$game$Controllers$PagesController$$winPageControllerInstance = moonbitlang$core$ref$$Ref$new$40$(-1);
const retfings$game$Controllers$PagesController$$winPageControllerSingleton = retfings$game$Controllers$PagesController$$WinPageController$get_instance();
const retfings$game$Renders$PanelsRender$$menuPanelRenderInstance = moonbitlang$core$ref$$Ref$new$41$(undefined);
const retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton = retfings$game$Renders$PanelsRender$$MenuPanelRender$get_instance();
const retfings$game$Core$TopBar$$menuButtonInstance = moonbitlang$core$ref$$Ref$new$42$(undefined);
const retfings$game$Core$TopBar$$menuButtonSingleton = retfings$game$Core$TopBar$$MenuButton$get_instance();
(() => {
  if (retfings$game$Core$$is_wechat()) {
    if (retfings$game$Controllers$InputController$$isFirst.val === 0) {
      retfings$game$Controllers$InputController$$isFirst.val = 1;
      if (retfings$game$Core$platform$$miniGameAdapterInputerSingleton === undefined) {
      } else {
        const _Some = retfings$game$Core$platform$$miniGameAdapterInputerSingleton;
        const _f = _Some;
        retfings$game$Core$platform$$MiniGameAdapterInputer$on_touch_start(_f, (pos) => {
          retfings$game$Controllers$InputController$$InputController$on_start(retfings$game$Controllers$InputController$$inputControllerSingleton, pos);
        });
        retfings$game$Core$platform$$MiniGameAdapterInputer$on_touch_move(_f, (pos) => {
          retfings$game$Controllers$InputController$$InputController$on_move(retfings$game$Controllers$InputController$$inputControllerSingleton, pos);
        });
        retfings$game$Core$platform$$MiniGameAdapterInputer$on_touch_end(_f, (pos) => {
          retfings$game$Controllers$InputController$$InputController$on_up(retfings$game$Controllers$InputController$$inputControllerSingleton, pos);
        });
      }
    }
  }
  if (retfings$game$Core$$is_in_web_browser()) {
    if (retfings$game$Controllers$InputController$$isFirst.val === 0) {
      if (retfings$game$Core$platform$$webAdapterInputerSingleton === undefined) {
      } else {
        retfings$game$Core$platform$$add_mouse_down_click_listener_with_callback(retfings$game$Core$$canvasSingleton, (point) => {
          let _tmp;
          if (retfings$game$Core$platform$$webAdapterInputerSingleton === undefined) {
            _tmp = $panic();
          } else {
            const _p = retfings$game$Core$platform$$webAdapterInputerSingleton;
            _tmp = _p;
          }
          const point$2 = retfings$game$Core$platform$$toScalePoint(point, _tmp);
          retfings$game$Controllers$InputController$$InputController$on_start(retfings$game$Controllers$InputController$$inputControllerSingleton, point$2);
        });
        retfings$game$Core$platform$$add_mouse_move_listener_with_callback(retfings$game$Core$$canvasSingleton, (point) => {
          let _tmp;
          if (retfings$game$Core$platform$$webAdapterInputerSingleton === undefined) {
            _tmp = $panic();
          } else {
            const _p = retfings$game$Core$platform$$webAdapterInputerSingleton;
            _tmp = _p;
          }
          const point$2 = retfings$game$Core$platform$$toScalePoint(point, _tmp);
          retfings$game$Controllers$InputController$$InputController$on_move(retfings$game$Controllers$InputController$$inputControllerSingleton, point$2);
        });
        retfings$game$Core$platform$$add_mouse_up_listener_with_callback(retfings$game$Core$$canvasSingleton, (point) => {
          let _tmp;
          if (retfings$game$Core$platform$$webAdapterInputerSingleton === undefined) {
            _tmp = $panic();
          } else {
            const _p = retfings$game$Core$platform$$webAdapterInputerSingleton;
            _tmp = _p;
          }
          const point$2 = retfings$game$Core$platform$$toScalePoint(point, _tmp);
          retfings$game$Controllers$InputController$$InputController$on_up(retfings$game$Controllers$InputController$$inputControllerSingleton, point$2);
        });
      }
      retfings$game$Controllers$InputController$$isFirst.val = 1;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
})();
const retfings$game$Renders$TopBarRender$$goldGainEffects = moonbitlang$core$ref$$Ref$new$43$(moonbitlang$core$array$$Array$new$46$inner$44$(0));
(() => {
  retfings$game$Core$EventSystem$$add_gold_gain_listener((event) => {
    const effect = { x: event.x, y: event.y, life: 900, amount: event.amount };
    moonbitlang$core$array$$Array$insert$44$(retfings$game$Renders$TopBarRender$$goldGainEffects.val, 0, effect);
  });
})();
(() => {
  retfings$game$$initGlobal();
})();
const retfings$game$Renders$NeutralElementRender$$neutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$45$(-1);
const retfings$game$Renders$NeutralElementRender$$neutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$NeutralElementRender$get_instance();
const retfings$game$Renders$TopBarRender$$pauseButtonRenderInstance = moonbitlang$core$ref$$Ref$new$46$(-1);
const retfings$game$Renders$TopBarRender$$pauseButtonRenderSingleton = retfings$game$Renders$TopBarRender$$PauseButtonRender$get_instance();
const retfings$game$Renders$PanelsRender$$selectTowerPanelRenderInstance = moonbitlang$core$ref$$Ref$new$47$(-1);
const retfings$game$Renders$PanelsRender$$selectTowerPanelRenderSingleton = retfings$game$Renders$PanelsRender$$SelectTowerPanelRender$get_instance();
const retfings$game$Renders$TopBarRender$$waveProgressBarRenderInstance = moonbitlang$core$ref$$Ref$new$48$(-1);
const retfings$game$Renders$TopBarRender$$waveProgressBarRenderSingleton = retfings$game$Renders$TopBarRender$$WaveProgressBarRender$get_instance();
const retfings$game$Renders$TopBarRender$$hDURendererInstance = moonbitlang$core$ref$$Ref$new$49$(undefined);
const retfings$game$Renders$TopBarRender$$hDURendererSingleton = retfings$game$Renders$TopBarRender$$HDURenderer$get_instance();
const retfings$game$Renders$MapRender$$mapBackgroundRenderInstance = moonbitlang$core$ref$$Ref$new$50$(-1);
const retfings$game$Renders$MapRender$$mapBackgroundRenderSingleton = retfings$game$Renders$MapRender$$MapBackgroundRender$get_instance();
const retfings$game$Renders$MapRender$$pathRenderInstance = moonbitlang$core$ref$$Ref$new$51$(-1);
const retfings$game$Renders$MapRender$$pathRenderSingleton = retfings$game$Renders$MapRender$$PathRender$get_instance();
const retfings$game$Core$Sprite$Tower$$lightning_tower_bullets = moonbitlang$core$ref$$Ref$new$52$([]);
const retfings$game$Core$Sprite$Tower$$plasma_tower_bullets = moonbitlang$core$ref$$Ref$new$53$([]);
const retfings$game$Renders$TowerRender$$frame_callbacks = moonbitlang$core$ref$$Ref$new$54$([]);
const retfings$game$Renders$TowerRender$$poisonStates = moonbitlang$core$ref$$Ref$new$55$(moonbitlang$core$builtin$$Map$new$46$inner$56$(8));
const retfings$game$Core$Sprite$Tower$$charge_jar_tower_bullets = moonbitlang$core$ref$$Ref$new$57$([]);
const retfings$game$Core$Sprite$Tower$$positive_magnetic_tower_bullets = moonbitlang$core$ref$$Ref$new$58$([]);
const retfings$game$Core$Sprite$Tower$$negative_magnetic_tower_bullets = moonbitlang$core$ref$$Ref$new$59$([]);
const retfings$game$Core$Sprite$Tower$$bee_tower_bullets = moonbitlang$core$ref$$Ref$new$60$([]);
const retfings$game$Core$Sprite$Tower$$curve_tower_bullets = moonbitlang$core$ref$$Ref$new$61$([]);
const retfings$game$Renders$PagesRender$$pagesRenderInstance = moonbitlang$core$ref$$Ref$new$62$(-1);
const retfings$game$Renders$PagesRender$$pagesRenderSingleton = retfings$game$Renders$PagesRender$$PagesRender$get_instance();
const retfings$game$Renders$EnemyRender$$enemyRenderInstance = moonbitlang$core$ref$$Ref$new$63$(-1);
const retfings$game$Renders$EnemyRender$$enemyRenderSingleton = retfings$game$Renders$EnemyRender$$EnemyRender$get_instance();
const retfings$game$Renders$TopBarRender$$speedButtonRenderInstance = moonbitlang$core$ref$$Ref$new$64$(-1);
const retfings$game$Renders$TopBarRender$$speedButtonRenderSingleton = retfings$game$Renders$TopBarRender$$SpeedButtonRender$get_instance();
const retfings$game$Renders$TowerRender$$laserTowerRenderInstance = moonbitlang$core$ref$$Ref$new$65$(-1);
const retfings$game$Renders$TowerRender$$laserTowerRenderSingleton = retfings$game$Renders$TowerRender$$LaserTowerRender$get_instance();
const retfings$game$Core$Sprite$Tower$$laser_tower_bullets = moonbitlang$core$ref$$Ref$new$66$([]);
const retfings$game$Renders$TowerRender$$beeTowerRenderInstance = moonbitlang$core$ref$$Ref$new$67$(-1);
const retfings$game$Renders$TowerRender$$beeTowerRenderSingleton = retfings$game$Renders$TowerRender$$BeeTowerRender$get_instance();
const retfings$game$Core$Sprite$Tower$$positive_magnetic_field_datas = moonbitlang$core$ref$$Ref$new$68$(moonbitlang$core$array$$Array$new$46$inner$69$(0));
const retfings$game$Core$Sprite$Enemy$$enemyIdCounter = moonbitlang$core$ref$$Ref$new$27$(0);
const retfings$game$Core$Point$$pathPointInstance = moonbitlang$core$ref$$Ref$new$70$(undefined);
const retfings$game$Core$Point$$pathPointSingleton = retfings$game$Core$Point$$PathPoint$get_instance();
const retfings$game$Renders$EnemyRender$$virusEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$71$(-1);
const retfings$game$Renders$EnemyRender$$virusEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$VirusEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$mechaEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$72$(-1);
const retfings$game$Renders$EnemyRender$$mechaEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$MechaEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$cheetahEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$73$(-1);
const retfings$game$Renders$EnemyRender$$cheetahEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$CheetahEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$eggsEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$74$(-1);
const retfings$game$Renders$EnemyRender$$eggsEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$EggsEnemyRender$get_instance();
const retfings$game$Core$Sprite$Enemy$$divide_effects = moonbitlang$core$ref$$Ref$new$75$(moonbitlang$core$array$$Array$new$46$inner$76$(0));
const retfings$game$Renders$EnemyRender$$bearEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$77$(-1);
const retfings$game$Renders$EnemyRender$$bearEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$BearEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$uFOEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$78$(-1);
const retfings$game$Renders$EnemyRender$$uFOEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$UFOEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$kangarooEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$79$(-1);
const retfings$game$Renders$EnemyRender$$kangarooEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$KangarooEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$flyingEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$80$(-1);
const retfings$game$Renders$EnemyRender$$flyingEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$FlyingEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$groundEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$81$(-1);
const retfings$game$Renders$EnemyRender$$groundEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$GroundEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$turtleEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$82$(-1);
const retfings$game$Renders$EnemyRender$$turtleEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$TurtleEnemyRender$get_instance();
const retfings$game$Renders$EnemyRender$$caterpillarEnemyRenderInstance = moonbitlang$core$ref$$Ref$new$83$(-1);
const retfings$game$Renders$EnemyRender$$caterpillarEnemyRenderSingleton = retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$get_instance();
const retfings$game$Renders$NeutralElementRender$$conveyorBeltNeutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$84$(-1);
const retfings$game$Renders$NeutralElementRender$$conveyorBeltNeutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$ConveyorBeltNeutralElementRender$get_instance();
const retfings$game$Renders$NeutralElementRender$$energyLightNeutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$85$(-1);
const retfings$game$Renders$NeutralElementRender$$energyLightNeutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$EnergyLightNeutralElementRender$get_instance();
const retfings$game$Renders$NeutralElementRender$$slotMachineNeutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$86$(-1);
const retfings$game$Renders$NeutralElementRender$$slotMachineNeutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$SlotMachineNeutralElementRender$get_instance();
const retfings$game$Renders$NeutralElementRender$$searchLightNeutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$87$(-1);
const retfings$game$Renders$NeutralElementRender$$searchLightNeutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$SearchLightNeutralElementRender$get_instance();
const retfings$game$Renders$NeutralElementRender$$stoneNeutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$88$(-1);
const retfings$game$Renders$NeutralElementRender$$stoneNeutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$StoneNeutralElementRender$get_instance();
const retfings$game$Renders$NeutralElementRender$$weedNeutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$89$(-1);
const retfings$game$Renders$NeutralElementRender$$weedNeutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$get_instance();
const retfings$game$Renders$TopBarRender$$menuButtonRenderInstance = moonbitlang$core$ref$$Ref$new$90$(-1);
const retfings$game$Renders$TopBarRender$$menuButtonRenderSingleton = retfings$game$Renders$TopBarRender$$MenuButtonRender$get_instance();
const retfings$game$Renders$TowerRender$$towerRenderInstance = moonbitlang$core$ref$$Ref$new$91$(-1);
const retfings$game$Renders$TowerRender$$towerRenderSingleton = retfings$game$Renders$TowerRender$$TowerRender$get_instance();
const retfings$game$Renders$HPRender$$hPRenderInstance = moonbitlang$core$ref$$Ref$new$92$(-1);
const retfings$game$Renders$HPRender$$hPRenderSingleton = retfings$game$Renders$HPRender$$HPRender$get_instance();
const retfings$game$Renders$PagesRender$$winPageRenderInstance = moonbitlang$core$ref$$Ref$new$93$(undefined);
const retfings$game$Renders$PagesRender$$winPageRenderSingleton = retfings$game$Renders$PagesRender$$WinPageRender$get_instance();
const retfings$game$Renders$PagesRender$$selectLevelPageRenderInstance = moonbitlang$core$ref$$Ref$new$94$(undefined);
const retfings$game$Renders$PagesRender$$selectLevelPageRenderSingleton = retfings$game$Renders$PagesRender$$SelectLevelPageRender$get_instance();
const retfings$game$Renders$PagesRender$$losePageRenderInstance = moonbitlang$core$ref$$Ref$new$95$(-1);
const retfings$game$Renders$PagesRender$$losePageRenderSingleton = retfings$game$Renders$PagesRender$$LosePageRender$get_instance();
const retfings$game$Renders$MapRender$$mapRenderInstance = moonbitlang$core$ref$$Ref$new$96$(-1);
const retfings$game$Renders$MapRender$$mapRenderSingleton = retfings$game$Renders$MapRender$$MapRender$get_instance();
const retfings$game$Renders$MapRender$$mapTipsRenderInstance = moonbitlang$core$ref$$Ref$new$97$(-1);
const retfings$game$Renders$MapRender$$mapTipsRenderSingleton = retfings$game$Renders$MapRender$$MapTipsRender$get_instance();
const retfings$game$Renders$NeutralElementRender$$treasureChestNeutralElementRenderInstance = moonbitlang$core$ref$$Ref$new$98$(-1);
const retfings$game$Renders$NeutralElementRender$$treasureChestNeutralElementRenderSingleton = retfings$game$Renders$NeutralElementRender$$TreasureChestNeutralElementRender$get_instance();
const retfings$game$Controllers$EnemyController$$enemyControllerInstance = moonbitlang$core$ref$$Ref$new$99$(-1);
const retfings$game$Controllers$EnemyController$$enemyControllerSingleton = retfings$game$Controllers$EnemyController$$EnemyController$get_instance();
const retfings$game$Controllers$PagesController$$pagesControllerInstance = moonbitlang$core$ref$$Ref$new$100$(-1);
const retfings$game$Controllers$PagesController$$pagesControllerSingleton = retfings$game$Controllers$PagesController$$PagesController$get_instance();
const retfings$game$Controllers$TowerController$$towerControllerInstance = moonbitlang$core$ref$$Ref$new$101$(-1);
const retfings$game$Controllers$TowerController$$towerControllerSingleton = retfings$game$Controllers$TowerController$$TowerController$get_instance();
const retfings$game$Controllers$EnemyController$$virusEnemyControllerInstance = moonbitlang$core$ref$$Ref$new$102$(-1);
const retfings$game$Controllers$EnemyController$$virusEnemyControllerSingleton = retfings$game$Controllers$EnemyController$$VirusEnemyController$get_instance();
const retfings$game$Controllers$HPController$$hPControllerInstance = moonbitlang$core$ref$$Ref$new$103$(-1);
const retfings$game$Controllers$HPController$$hPControllerSingleton = retfings$game$Controllers$HPController$$HPController$get_instance();
const retfings$game$Controllers$NeutralElementController$$neutralElementControllerInstance = moonbitlang$core$ref$$Ref$new$104$(-1);
const retfings$game$Controllers$NeutralElementController$$neutralElementControllerSingleton = retfings$game$Controllers$NeutralElementController$$NeutralElementController$get_instance();
const retfings$game$Controllers$TopBarController$$waveProgressBarControllerInstance = moonbitlang$core$ref$$Ref$new$105$(-1);
const retfings$game$Controllers$TopBarController$$waveProgressBarControllerSingleton = retfings$game$Controllers$TopBarController$$WaveProgressBarController$get_instance();
const retfings$game$Controllers$NeutralElementController$$conveyorBeltNeutralElementControllerInstance = moonbitlang$core$ref$$Ref$new$106$(-1);
const retfings$game$Controllers$NeutralElementController$$conveyorBeltNeutralElementControllerSingleton = retfings$game$Controllers$NeutralElementController$$ConveyorBeltNeutralElementController$get_instance();
const retfings$game$Controllers$NeutralElementController$$slotMachineNeutralElementControllerInstance = moonbitlang$core$ref$$Ref$new$107$(-1);
const retfings$game$Controllers$NeutralElementController$$slotMachineNeutralElementControllerSingleton = retfings$game$Controllers$NeutralElementController$$SlotMachineNeutralElementController$get_instance();
const retfings$game$Controllers$NeutralElementController$$searchLightControllerInstance = moonbitlang$core$ref$$Ref$new$108$(-1);
const retfings$game$Controllers$NeutralElementController$$searchLightControllerSingleton = retfings$game$Controllers$NeutralElementController$$SearchLightController$get_instance();
const retfings$game$Controllers$NeutralElementController$$stoneNeutralElementControllerInstance = moonbitlang$core$ref$$Ref$new$109$(-1);
const retfings$game$Controllers$NeutralElementController$$stoneNeutralElementControllerSingleton = retfings$game$Controllers$NeutralElementController$$StoneNeutralElementController$get_instance();
const retfings$game$Controllers$NeutralElementController$$weedNeutralElementControllerInstance = moonbitlang$core$ref$$Ref$new$110$(-1);
const retfings$game$Controllers$NeutralElementController$$weedNeutralElementControllerSingleton = retfings$game$Controllers$NeutralElementController$$WeedNeutralElementController$get_instance();
const retfings$game$Controllers$NeutralElementController$$energyLightControllerInstance = moonbitlang$core$ref$$Ref$new$111$(-1);
const retfings$game$Controllers$NeutralElementController$$energyLightControllerSingleton = retfings$game$Controllers$NeutralElementController$$EnergyLightController$get_instance();
const retfings$game$Controllers$NeutralElementController$$treasureChestNeutralElementControllerInstance = moonbitlang$core$ref$$Ref$new$112$(-1);
const retfings$game$Controllers$NeutralElementController$$treasureChestNeutralElementControllerSingleton = retfings$game$Controllers$NeutralElementController$$TreasureChestNeutralElementController$get_instance();
const retfings$game$Controllers$TowerController$$laserTowerControllerInstance = moonbitlang$core$ref$$Ref$new$113$(-1);
const retfings$game$Controllers$TowerController$$laserTowerControllerSingleton = retfings$game$Controllers$TowerController$$LaserTowerController$get_instance();
const retfings$game$Controllers$TowerController$$positiveMagneticTowerControllerInstance = moonbitlang$core$ref$$Ref$new$114$(-1);
const retfings$game$Controllers$TowerController$$positiveMagneticTowerControllerSingleton = retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$get_instance();
const retfings$game$Controllers$TowerController$$lightningTowerControllerInstance = moonbitlang$core$ref$$Ref$new$115$(-1);
const retfings$game$Controllers$TowerController$$lightningTowerControllerSingleton = retfings$game$Controllers$TowerController$$LightningTowerController$get_instance();
const retfings$game$Controllers$TowerController$$beeTowerControllerInstance = moonbitlang$core$ref$$Ref$new$116$(-1);
const retfings$game$Controllers$TowerController$$beeTowerControllerSingleton = retfings$game$Controllers$TowerController$$BeeTowerController$get_instance();
const retfings$game$Controllers$TowerController$$chargeJarTowerControllerInstance = moonbitlang$core$ref$$Ref$new$117$(-1);
const retfings$game$Controllers$TowerController$$chargeJarTowerControllerSingleton = retfings$game$Controllers$TowerController$$ChargeJarTowerController$get_instance();
const retfings$game$Controllers$TowerController$$curveTowerControllerInstance = moonbitlang$core$ref$$Ref$new$118$(-1);
const retfings$game$Controllers$TowerController$$curveTowerControllerSingleton = retfings$game$Controllers$TowerController$$CurveTowerController$get_instance();
const retfings$game$Controllers$TowerController$$negativeMagneticTowerControllerInstance = moonbitlang$core$ref$$Ref$new$119$(-1);
const retfings$game$Controllers$TowerController$$negativeMagneticTowerControllerSingleton = retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$get_instance();
const retfings$game$Controllers$TowerController$$plasmaTowerControllerInstance = moonbitlang$core$ref$$Ref$new$120$(-1);
const retfings$game$Controllers$TowerController$$plasmaTowerControllerSingleton = retfings$game$Controllers$TowerController$$PlasmaTowerController$get_instance();
const retfings$game$Core$TopBar$$waveProgressBarInstance = moonbitlang$core$ref$$Ref$new$121$(undefined);
const retfings$game$Core$TopBar$$waveProgressBarSingleton = retfings$game$Core$TopBar$$WaveProgressBar$get_instance();
const retfings$game$Controllers$$instance = moonbitlang$core$ref$$Ref$new$122$(undefined);
function moonbitlang$core$abort$$abort$123$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$124$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$125$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$126$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$127$(msg) {
  return $panic();
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$128$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$array$$FixedArray$unsafe_blit$129$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$array$$FixedArray$unsafe_blit$130$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$array$$FixedArray$unsafe_blit$131$(dst, dst_offset, src, src_offset, len) {
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
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$132$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$128$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$133$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$129$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$134$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$130$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$135$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$array$$Array$at$136$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$137$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$138$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$139$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$124$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$140$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$141$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$134$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$142$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$27$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$14$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$143$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$144$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$132$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$125$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$126$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$145$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$146$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$147$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$148$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$135$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$144$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$144$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$27$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$27$(value, self);
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
function moonbitlang$core$builtin$$Hash$hash$149$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$144$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$150$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$27$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$151$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$14$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$135$, method_1: moonbitlang$core$builtin$$Logger$write_substring$135$, method_2: moonbitlang$core$builtin$$Logger$write_char$135$ });
  return logger.val;
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$27$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$string$$StringView$iter(self) {
  const _p = (yield_) => {
    const _start2374 = self.start;
    const _end2375 = self.end;
    let _tmp = _start2374;
    while (true) {
      const index = _tmp;
      if (index < _end2375) {
        const _tmp$2 = self.str;
        const c1 = _tmp$2.charCodeAt(index);
        if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < self.end) {
          const _tmp$3 = self.str;
          const _tmp$4 = index + 1 | 0;
          const c2 = _tmp$3.charCodeAt(_tmp$4);
          if (56320 <= c2 && c2 <= 57343) {
            const c = moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$StringBuilder$write_iter(self, iter) {
  iter((ch) => {
    moonbitlang$core$builtin$$Logger$write_char$135$(self, ch);
    return 1;
  });
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
function moonbitlang$core$builtin$$Logger$write_substring$135$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$option$$Option$unwrap$124$(self) {
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
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$152$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$56$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$152$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$56$(self, idx, entry) {
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
function moonbitlang$core$builtin$$Map$set_entry$12$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$152$(self, entry, new_idx) {
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
function moonbitlang$core$builtin$$Map$set_entry$56$(self, entry, new_idx) {
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
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$12$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
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
function moonbitlang$core$builtin$$Map$push_away$152$(self, idx, entry) {
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
      moonbitlang$core$builtin$$Map$set_entry$152$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$152$(self, entry$2, idx$2);
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
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$56$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
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
function moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$12$(self);
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
        moonbitlang$core$builtin$$Map$push_away$12$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$152$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$152$(self);
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
        moonbitlang$core$builtin$$Map$push_away$152$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$152$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$56$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$56$(self);
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
        moonbitlang$core$builtin$$Map$push_away$56$(self, idx, _curr_entry);
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
  moonbitlang$core$builtin$$Map$add_entry_to_tail$56$(self, _idx, entry);
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
function moonbitlang$core$builtin$$Map$grow$152$(self) {
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
      moonbitlang$core$builtin$$Map$set_with_hash$152$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
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
function moonbitlang$core$builtin$$Map$set$12$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, moonbitlang$core$builtin$$Hash$hash$149$(key));
}
function moonbitlang$core$builtin$$Map$set$152$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$152$(self, key, value, moonbitlang$core$builtin$$Hash$hash$149$(key));
}
function moonbitlang$core$builtin$$Map$set$56$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$56$(self, key, value, moonbitlang$core$builtin$$Hash$hash$150$(key));
}
function moonbitlang$core$builtin$$Map$from_array$152$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$152$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$152$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$56$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$150$(key);
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
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$at$12$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$149$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      $panic();
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
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
function moonbitlang$core$builtin$$Map$at$152$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$149$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      $panic();
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
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
function moonbitlang$core$builtin$$Map$remove_entry$56$(self, entry) {
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
function moonbitlang$core$builtin$$Map$shift_back$56$(self, idx) {
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
          moonbitlang$core$builtin$$Map$set_entry$56$(self, _x, idx$2);
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
function moonbitlang$core$builtin$$Map$remove_with_hash$56$(self, key, hash) {
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
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$56$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$56$(self, idx);
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
function moonbitlang$core$builtin$$Map$remove$56$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$56$(self, key, moonbitlang$core$builtin$$Hash$hash$150$(key));
}
function moonbitlang$core$array$$Array$push$27$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$140$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$153$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$154$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$155$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$156$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$157$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$158$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$159$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$160$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$14$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$138$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$143$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$161$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$126$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$125$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$146$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$162$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$147$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$148$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$124$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$163$(self, value) {
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
function moonbitlang$core$builtin$$Hash$hash_combine$144$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$27$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_int(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$144$(input) {
  console.log(input);
}
function moonbitlang$core$builtin$$println$14$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$151$(input));
}
function moonbitlang$core$array$$Array$new$46$inner$44$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$7$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$132$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$136$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$133$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$138$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$124$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$164$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$143$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$76$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$69$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$14$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$162$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$remove$124$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$abort$$abort$124$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
  }
}
function moonbitlang$core$array$$Array$remove$125$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$abort$$abort$125$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
  }
}
function moonbitlang$core$array$$Array$remove$126$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$abort$$abort$126$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
  }
}
function moonbitlang$core$array$$Array$insert$44$(self, index, value) {
  if (index >= 0 && index <= self.length) {
    moonbitlang$core$builtin$$JSArray$splice1(self, index, 0, value);
    return;
  } else {
    moonbitlang$core$abort$$abort$123$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$insert$7$(self, index, value) {
  if (index >= 0 && index <= self.length) {
    moonbitlang$core$builtin$$JSArray$splice1(self, index, 0, value);
    return;
  } else {
    moonbitlang$core$abort$$abort$123$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$insert$161$(self, index, value) {
  if (index >= 0 && index <= self.length) {
    moonbitlang$core$builtin$$JSArray$splice1(self, index, 0, value);
    return;
  } else {
    moonbitlang$core$abort$$abort$123$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$insert$124$(self, index, value) {
  if (index >= 0 && index <= self.length) {
    moonbitlang$core$builtin$$JSArray$splice1(self, index, 0, value);
    return;
  } else {
    moonbitlang$core$abort$$abort$123$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$insert$133$(self, index, value) {
  if (index >= 0 && index <= self.length) {
    moonbitlang$core$builtin$$JSArray$splice1(self, index, 0, value);
    return;
  } else {
    moonbitlang$core$abort$$abort$123$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$insert$76$(self, index, value) {
  if (index >= 0 && index <= self.length) {
    moonbitlang$core$builtin$$JSArray$splice1(self, index, 0, value);
    return;
  } else {
    moonbitlang$core$abort$$abort$123$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$insert$69$(self, index, value) {
  if (index >= 0 && index <= self.length) {
    moonbitlang$core$builtin$$JSArray$splice1(self, index, 0, value);
    return;
  } else {
    moonbitlang$core$abort$$abort$123$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$27$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$27$(index)}`);
    return;
  }
}
function moonbitlang$core$array$$Array$unsafe_grow_to_length$69$(self, new_len) {
  if (new_len >= self.length) {
    moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$unsafe_blit$69$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$131$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$array$$Array$blit_to$46$inner$69$(self, dst, len, src_offset, dst_offset) {
  if (len >= 0 && (dst_offset >= 0 && (src_offset >= 0 && (dst_offset <= dst.length && (src_offset + len | 0) <= self.length)))) {
    if ((dst_offset + len | 0) > dst.length) {
      moonbitlang$core$array$$Array$unsafe_grow_to_length$69$(dst, dst_offset + len | 0);
    }
    moonbitlang$core$array$$Array$unsafe_blit$69$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$make$139$(len, elem) {
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
function moonbitlang$core$array$$Array$set$139$(self, index, value) {
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
function moonbitlang$core$builtin$$Add$add$165$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$132$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$132$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$builtin$$Add$add$166$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$133$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$133$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$builtin$$Add$add$167$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$134$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$134$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$array$$Array$append$69$(self, other) {
  moonbitlang$core$array$$Array$blit_to$46$inner$69$(other, self, other.length, 0, self.length);
}
function moonbitlang$core$array$$Array$contains$27$(self, value) {
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
function moonbitlang$core$double$$Double$floor(_tmp) {
  return Math.floor(_tmp);
}
function moonbitlang$core$double$$Double$round(_tmp) {
  return Math.round(_tmp);
}
function moonbitlang$core$builtin$$Mod$mod$14$(self, other) {
  return moonbitlang$core$double$$Double$mod_ffi(self, other);
}
function moonbitlang$core$builtin$$Show$output$14$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$math$$sin(_tmp) {
  return Math.sin(_tmp);
}
function moonbitlang$core$math$$cos(_tmp) {
  return Math.cos(_tmp);
}
function moonbitlang$core$math$$atan2(_tmp, _tmp$2) {
  return Math.atan2(_tmp, _tmp$2);
}
function moonbitlang$core$math$$hypot(_tmp, _tmp$2) {
  return Math.hypot(_tmp, _tmp$2);
}
function moonbitlang$core$ref$$Ref$new$163$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$14$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$43$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$54$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$122$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$2$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$3$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$8$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$13$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$11$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$32$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$17$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$16$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$10$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$0$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$25$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$31$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$58$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$59$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$52$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$57$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$61$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$53$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$60$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$1$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$6$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$28$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$40$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$34$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$29$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$21$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$36$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$35$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$19$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$39$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$33$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$30$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$23$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$37$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$100$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$75$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$99$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$66$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$101$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$105$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$104$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$62$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$96$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$97$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$92$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$45$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$49$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$46$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$48$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$64$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$90$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$91$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$63$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$47$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$41$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$9$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$26$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$27$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$22$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$42$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$20$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$38$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$15$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$116$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$117$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$118$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$115$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$119$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$120$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$68$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$114$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$113$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$121$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$110$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$107$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$109$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$112$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$106$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$108$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$111$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$93$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$95$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$94$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$50$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$51$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$24$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$89$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$86$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$88$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$98$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$87$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$84$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$85$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$79$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$80$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$81$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$83$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$71$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$73$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$77$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$82$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$78$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$74$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$72$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$55$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$18$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$102$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$103$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$67$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$65$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$5$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$4$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$70$(x) {
  return { val: x };
}
function moonbitlang$core$string$$String$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$abort$$abort$127$("Invalid index for View");
}
function moonbitlang$core$string$$boyer_moore_horspool_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end314 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end314) {
          const _tmp$2 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$2.charCodeAt(_tmp$3) & 255;
          $bound_check(skip_table, _tmp$4);
          skip_table[_tmp$4] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end320 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end320) {
              const _p = i + j | 0;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p | 0;
              const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
              const _tmp$7 = needle.str;
              const _tmp$8 = needle.start + j | 0;
              if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _p = (i + needle_len | 0) - 1 | 0;
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + _p | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check(skip_table, _tmp$6);
          _tmp$2 = i + skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return moonbitlang$core$string$$boyer_moore_horspool_find$46$constr$47$1201;
  }
}
function moonbitlang$core$string$$brute_force_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            let _tmp$3;
            if (i <= forward_len) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              _tmp$3 = _tmp$4.charCodeAt(_tmp$5) !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$7 = needle.str;
                const _tmp$8 = needle.start + j | 0;
                if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return moonbitlang$core$string$$brute_force_find$46$constr$47$1215;
  }
}
function moonbitlang$core$string$$StringView$find(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$string$$brute_force_find(self, str) : moonbitlang$core$string$$boyer_moore_horspool_find(self, str);
}
function moonbitlang$core$string$$String$find(self, str) {
  return moonbitlang$core$string$$StringView$find({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$String$repeat(self, n) {
  if (n <= 0) {
    return "";
  } else {
    if (n === 1) {
      return self;
    } else {
      const len = self.length;
      const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(Math.imul(len, n) | 0);
      const str = self;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < n) {
          moonbitlang$core$builtin$$Logger$write_string$135$(buf, str);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    }
  }
}
function moonbitlang$core$string$$String$replace(self, old, new_) {
  const _bind = moonbitlang$core$string$$String$find(self, old);
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _end = _Some;
    const _self = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    moonbitlang$core$builtin$$StringBuilder$write_iter(_self, moonbitlang$core$string$$StringView$iter(moonbitlang$core$string$$String$view$46$inner(self, 0, _end)));
    moonbitlang$core$builtin$$StringBuilder$write_iter(_self, moonbitlang$core$string$$StringView$iter(new_));
    moonbitlang$core$builtin$$StringBuilder$write_iter(_self, moonbitlang$core$string$$StringView$iter(moonbitlang$core$string$$String$view$46$inner(self, _end + (old.end - old.start | 0) | 0, undefined)));
    const _p = _self;
    return _p.val;
  }
}
function retfings$game$Core$$Map$map_config() {
  const _bind = retfings$game$Core$$instance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$$new$46$record$47$1245;
    retfings$game$Core$$instance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$$Canvas$new() {
  return retfings$game$Core$$is_in_web_browser() ? retfings$game$Core$$create_web_canvas() : retfings$game$Core$$create_wx_canvas();
}
function retfings$game$Core$$Canvas$get_instance() {
  const _bind = retfings$game$Core$$canvasInstance.val;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    return _Some._0;
  } else {
    const new_instance = retfings$game$Core$$Canvas$new();
    retfings$game$Core$$canvasInstance.val = new Option$Some$0$(new_instance);
    return new_instance;
  }
}
function retfings$game$Core$$Canvas$getContext(self, ctx_type) {
  return retfings$game$Core$$canvas_get_context(self, ctx_type);
}
function retfings$game$Core$$CanvasRenderingContext2D$shadowColor(self, color) {
  retfings$game$Core$$ctx_shadow_color(self, color);
}
function retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(self, color) {
  retfings$game$Core$$ctx_shadow_blur(self, color);
}
function retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetY(self, offset) {
  retfings$game$Core$$ctx_shadow_offsetY(self, offset);
}
function retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetX(self, offset) {
  retfings$game$Core$$ctx_shadow_offsetX(self, offset);
}
function retfings$game$Core$$CanvasRenderingContext2D$ellipse(self, x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
  const _p = false;
  retfings$game$Core$$ctx_ellipse(self, x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise === -1 ? _p : counterclockwise);
}
function retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(self, x0, y0, r0, x1, y1, r1) {
  return retfings$game$Core$$ctx_create_radial_gradient(self, x0, y0, r0, x1, y1, r1);
}
function retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(self, x0, y0, x1, y1) {
  return retfings$game$Core$$ctx_create_lineargradient(self, x0, y0, x1, y1);
}
function retfings$game$Core$$CanvasRenderingContext2D$restore(self) {
  retfings$game$Core$$ctx_restore(self);
}
function retfings$game$Core$$CanvasRenderingContext2D$beginPath(self) {
  retfings$game$Core$$ctx_begin_path(self);
}
function retfings$game$Core$$CanvasRenderingContext2D$closePath(self) {
  retfings$game$Core$$ctx_close_path(self);
}
function retfings$game$Core$$CanvasRenderingContext2D$moveTo(self, x, y) {
  retfings$game$Core$$ctx_move_to(self, x, y);
}
function retfings$game$Core$$CanvasRenderingContext2D$lineTo(self, x, y) {
  retfings$game$Core$$ctx_line_to(self, x, y);
}
function retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(self, cpx, cpy, x, y) {
  retfings$game$Core$$ctx_quadratic_curve_to(self, cpx, cpy, x, y);
}
function retfings$game$Core$$CanvasRenderingContext2D$save(self) {
  retfings$game$Core$$ctx_save(self);
}
function retfings$game$Core$$CanvasRenderingContext2D$arc(self, x, y, radius, startAngle, endAngle, anticlockwise) {
  const _p = false;
  retfings$game$Core$$ctx_arc(self, x, y, radius, startAngle, endAngle, anticlockwise === -1 ? _p : anticlockwise);
}
function retfings$game$Core$$CanvasRenderingContext2D$rect(self, x, y, w, h) {
  retfings$game$Core$$ctx_rect(self, x, y, w, h);
}
function retfings$game$Core$$CanvasRenderingContext2D$fill(self) {
  retfings$game$Core$$ctx_fill(self);
}
function retfings$game$Core$$CanvasRenderingContext2D$stroke(self) {
  retfings$game$Core$$ctx_stroke(self);
}
function retfings$game$Core$$CanvasRenderingContext2D$clip(self) {
  retfings$game$Core$$ctx_clip(self);
}
function retfings$game$Core$$CanvasRenderingContext2D$fillRect(self, x, y, w, h) {
  retfings$game$Core$$ctx_fill_rect(self, x, y, w, h);
}
function retfings$game$Core$$CanvasRenderingContext2D$strokeRect(self, x, y, w, h) {
  retfings$game$Core$$ctx_stroke_rect(self, x, y, w, h);
}
function retfings$game$Core$$CanvasRenderingContext2D$clearRect(self, x, y, w, h) {
  retfings$game$Core$$ctx_clear_rect(self, x, y, w, h);
}
function retfings$game$Core$$CanvasRenderingContext2D$fill_style_auto_conversion(self, color) {
  if (color.$tag === 0) {
    const _StringColor = color;
    const _s = _StringColor._0;
    retfings$game$Core$$ctx_set_fill_style_string(self, _s);
    return;
  } else {
    const _CanvasGradientColor = color;
    const _c = _CanvasGradientColor._0;
    retfings$game$Core$$ctx_set_fill_style_gradient(self, _c);
    return;
  }
}
function retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(self, style) {
  retfings$game$Core$$CanvasRenderingContext2D$fill_style_auto_conversion(self, new $64$retfings$47$game$47$Core$46$Color$StringColor(style));
}
function retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(self, style) {
  retfings$game$Core$$CanvasRenderingContext2D$fill_style_auto_conversion(self, new $64$retfings$47$game$47$Core$46$Color$CanvasGradientColor(style));
}
function retfings$game$Core$$CanvasRenderingContext2D$stroke_auto_conversion(self, color) {
  if (color.$tag === 0) {
    const _StringColor = color;
    const _s = _StringColor._0;
    retfings$game$Core$$ctx_set_stroke_style_string(self, _s);
    return;
  } else {
    const _CanvasGradientColor = color;
    const _c = _CanvasGradientColor._0;
    retfings$game$Core$$ctx_set_stroke_style_g(self, _c);
    return;
  }
}
function retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(self, style) {
  retfings$game$Core$$CanvasRenderingContext2D$stroke_auto_conversion(self, new $64$retfings$47$game$47$Core$46$Color$StringColor(style));
}
function retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$168$(self, style) {
  retfings$game$Core$$CanvasRenderingContext2D$stroke_auto_conversion(self, new $64$retfings$47$game$47$Core$46$Color$CanvasGradientColor(style));
}
function retfings$game$Core$$CanvasRenderingContext2D$lineWidth(self, width) {
  retfings$game$Core$$ctx_set_line_width(self, width);
}
function retfings$game$Core$$CanvasRenderingContext2D$lineCap(self, cap) {
  retfings$game$Core$$ctx_set_line_cap(self, cap);
}
function retfings$game$Core$$CanvasRenderingContext2D$lineJoin(self, join) {
  retfings$game$Core$$ctx_set_line_join(self, join);
}
function retfings$game$Core$$CanvasRenderingContext2D$fillText(self, text, x, y) {
  retfings$game$Core$$ctx_fill_text(self, text, x, y);
}
function retfings$game$Core$$CanvasRenderingContext2D$font(self, font) {
  retfings$game$Core$$ctx_set_font(self, font);
}
function retfings$game$Core$$CanvasRenderingContext2D$textAlign(self, align) {
  retfings$game$Core$$ctx_set_text_align(self, align);
}
function retfings$game$Core$$CanvasRenderingContext2D$textBaseline(self, baseline) {
  retfings$game$Core$$ctx_set_text_baseline(self, baseline);
}
function retfings$game$Core$$CanvasRenderingContext2D$translate(self, x, y) {
  retfings$game$Core$$ctx_translate(self, x, y);
}
function retfings$game$Core$$CanvasRenderingContext2D$rotate(self, angle) {
  retfings$game$Core$$ctx_rotate(self, angle);
}
function retfings$game$Core$$CanvasRenderingContext2D$scale(self, x, y) {
  retfings$game$Core$$ctx_scale(self, x, y);
}
function retfings$game$Core$$CanvasRenderingContext2D$setTransform(self, a, b, c, d, e, f) {
  retfings$game$Core$$ctx_set_transform(self, a, b, c, d, e, f);
}
function retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(self, alpha) {
  retfings$game$Core$$ctx_set_global_alpha(self, alpha);
}
function retfings$game$Core$$CanvasRenderingContext2D$composite_op_auto_conversion(self, color) {
  if (color.$tag === 0) {
    const _StringColor = color;
    const _s = _StringColor._0;
    retfings$game$Core$$ctx_set_global_composite_operation_string(self, _s);
    return;
  } else {
    const _CanvasGradientColor = color;
    const _c = _CanvasGradientColor._0;
    retfings$game$Core$$ctx_set_global_composite_operation_gradient(self, _c);
    return;
  }
}
function retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(self, op) {
  retfings$game$Core$$CanvasRenderingContext2D$composite_op_auto_conversion(self, new $64$retfings$47$game$47$Core$46$Color$StringColor(op));
}
function retfings$game$Core$$CanvasRenderingContext2D$measureTextWidth(self, text) {
  return retfings$game$Core$$ctx_measure_text_w(self, text);
}
function retfings$game$Core$$CanvasGradient$auto_conversion(self, offset, color) {
  if (color.$tag === 0) {
    const _StringColor = color;
    const _s = _StringColor._0;
    retfings$game$Core$$add_color_stop_string(self, offset, _s);
    return;
  } else {
    const _CanvasGradientColor = color;
    const _c = _CanvasGradientColor._0;
    retfings$game$Core$$add_color_stop_canvas_gradient(self, offset, _c);
    return;
  }
}
function retfings$game$Core$$CanvasGradient$addColorStop$144$(self, offset, color) {
  retfings$game$Core$$CanvasGradient$auto_conversion(self, offset, new $64$retfings$47$game$47$Core$46$Color$StringColor(color));
}
function retfings$game$Core$$Canvas$setWidth(self, w) {
  retfings$game$Core$$canvas_set_width(self, w);
}
function retfings$game$Core$$Canvas$setCSSWidth(self, w) {
  retfings$game$Core$$canvas_css_width(self, w);
}
function retfings$game$Core$$Canvas$setHeight(self, h) {
  retfings$game$Core$$canvas_set_height(self, h);
}
function retfings$game$Core$$Canvas$setCSSHeight(self, h) {
  retfings$game$Core$$canvas_css_height(self, h);
}
function retfings$game$Core$$Canvas$width(self) {
  return retfings$game$Core$$canvas_width(self);
}
function retfings$game$Core$$Canvas$height(self) {
  return retfings$game$Core$$canvas_height(self);
}
function retfings$game$Core$Point$$TowerPoint$new$46$inner(x, y) {
  return { x: x, y: y };
}
function retfings$game$Core$Point$$TowerPoint$get_instance() {
  const _bind = retfings$game$Core$Point$$towerPointInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Point$$TowerPoint$new$46$inner(0, 0);
    retfings$game$Core$Point$$towerPointInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Point$$Rect$new(x, y, w, h) {
  return { x: x, y: y, w: w, h: h };
}
function retfings$game$Core$Point$$PixelPoint$new$46$inner(x, y) {
  return { x: x, y: y };
}
function retfings$game$Core$Point$$PixelPoint$get_instance() {
  const _bind = retfings$game$Core$Point$$pixelPointInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Point$$PixelPoint$new$46$inner(0, 0);
    retfings$game$Core$Point$$pixelPointInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Point$$PixelPoint$to_string(self) {
  return `PixelPoint(x:${moonbitlang$core$builtin$$Show$to_string$151$(self.x)},y:${moonbitlang$core$builtin$$Show$to_string$151$(self.y)})`;
}
function retfings$game$Core$Point$$PathPoint$new$46$inner(x, y) {
  return { x: x, y: y, is_jump_point: false };
}
function retfings$game$Core$Point$$PathPoint$get_instance() {
  const _bind = retfings$game$Core$Point$$pathPointInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Point$$PathPoint$new$46$inner(0, 0);
    retfings$game$Core$Point$$pathPointInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Point$$EnemyPoint$new$46$inner(x, y) {
  return { x: x, y: y };
}
function retfings$game$Core$Point$$NeutralElementPoint$new$46$inner(x, y) {
  return { x: x, y: y };
}
function retfings$game$Core$Point$$BasePoint$new$46$inner(x, y) {
  return { x: x, y: y };
}
function retfings$game$Core$EventSystem$$add_gold_gain_listener(listener) {
  moonbitlang$core$array$$Array$insert$7$(retfings$game$Core$EventSystem$$goldGainEventListeners, 0, listener);
}
function retfings$game$Core$EventSystem$$dispatch_gold_gain_event(event) {
  const _len = retfings$game$Core$EventSystem$$goldGainEventListeners.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const listener = retfings$game$Core$EventSystem$$goldGainEventListeners[_i];
      listener(event);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$162$(_x_367, _x_368) {
  switch (_x_367) {
    case 0: {
      if (_x_368 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_368 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_368 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_368 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_368 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_368 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_368 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_368 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_368 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_368 === 9) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_368 === 10) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function retfings$game$Core$Sprite$Enemy$$generate_enemy_id() {
  const current_id = retfings$game$Core$Sprite$Enemy$$enemyIdCounter.val;
  retfings$game$Core$Sprite$Enemy$$enemyIdCounter.val = current_id + 1 | 0;
  return current_id;
}
function retfings$game$Core$Sprite$Enemy$$VirusEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 6, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 60, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false, divide_animation: { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 } };
}
function retfings$game$Core$Sprite$Enemy$$VirusEnemy$new(position$46$opt, health$46$opt, speed$46$opt) {
  let position;
  if (position$46$opt === undefined) {
    position = { x: -1, y: -1 };
  } else {
    const _Some = position$46$opt;
    position = _Some;
  }
  let health;
  if (health$46$opt.$tag === 1) {
    const _Some = health$46$opt;
    health = _Some._0;
  } else {
    health = 100;
  }
  let speed;
  if (speed$46$opt.$tag === 1) {
    const _Some = speed$46$opt;
    speed = _Some._0;
  } else {
    speed = 20;
  }
  return retfings$game$Core$Sprite$Enemy$$VirusEnemy$new$46$inner(position, health, speed);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$169$(self) {
  return self.divide_animation;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$169$(self, d) {
  moonbitlang$core$array$$Array$insert$76$(retfings$game$Core$Sprite$Enemy$$divide_effects.val, 0, d);
  self.divide_animation = d;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$169$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$169$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$169$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$169$(self) {
  return self.render_small_size;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$169$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$169$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$169$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$169$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$169$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$169$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$169$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$169$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$169$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$169$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$169$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$169$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$169$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$169$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$169$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$169$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$UFOEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 9, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 60, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$170$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$170$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$170$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$170$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$170$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$170$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$170$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$170$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$170$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$170$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$170$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$170$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$170$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$170$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$170$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$170$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$170$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$170$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$170$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$170$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$TurtleEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 4, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 60, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$171$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$171$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$171$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$171$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$171$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$171$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$171$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$171$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$171$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$171$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$171$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$171$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$171$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$171$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$171$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$171$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$171$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$171$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$171$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$171$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$MechaEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 8, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 60, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$172$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$172$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$172$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$172$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$172$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$172$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$172$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$172$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$172$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$172$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$172$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$172$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$172$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$172$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$172$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$172$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$172$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$172$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$172$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$172$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$KangarooEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 0, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 60, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$KangarooEnemy$new(position$46$opt, health$46$opt, speed$46$opt) {
  let position;
  if (position$46$opt === undefined) {
    position = { x: -1, y: -1 };
  } else {
    const _Some = position$46$opt;
    position = _Some;
  }
  let health;
  if (health$46$opt.$tag === 1) {
    const _Some = health$46$opt;
    health = _Some._0;
  } else {
    health = 100;
  }
  let speed;
  if (speed$46$opt.$tag === 1) {
    const _Some = speed$46$opt;
    speed = _Some._0;
  } else {
    speed = 20;
  }
  return retfings$game$Core$Sprite$Enemy$$KangarooEnemy$new$46$inner(position, health, speed);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$173$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$173$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$173$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$173$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$173$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$173$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$173$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$173$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$173$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$173$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$173$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$173$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$173$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$173$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$173$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$173$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$173$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$173$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$173$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$173$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$GroundEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 3, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 80, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$GroundEnemy$new(position$46$opt, health$46$opt, speed$46$opt) {
  let position;
  if (position$46$opt === undefined) {
    position = { x: -1, y: -1 };
  } else {
    const _Some = position$46$opt;
    position = _Some;
  }
  let health;
  if (health$46$opt.$tag === 1) {
    const _Some = health$46$opt;
    health = _Some._0;
  } else {
    health = 200;
  }
  let speed;
  if (speed$46$opt.$tag === 1) {
    const _Some = speed$46$opt;
    speed = _Some._0;
  } else {
    speed = 20;
  }
  return retfings$game$Core$Sprite$Enemy$$GroundEnemy$new$46$inner(position, health, speed);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$174$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$174$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$174$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$174$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$174$(self, s) {
  self.speed = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$174$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$174$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$174$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$174$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$174$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$174$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$174$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$174$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$174$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$174$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$174$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$174$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$174$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$174$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$174$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$FlyingEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 1, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 70, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$175$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$175$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$175$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$175$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$175$(self, s) {
  self.speed = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$175$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$175$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$175$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$175$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$175$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$175$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$175$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$175$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$175$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$175$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$175$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$175$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$175$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$175$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$175$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$175$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$176$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$177$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$178$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$179$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$181$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$182$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$183$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$184$(self) {
  return { x1: -1, y1: -1, x2: -1, y2: -1, x3: -1, y3: -1, start_time: -1, total_time: -1, finished: false, enemy_id1: -1, enemy_id2: -1 };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$176$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$177$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$178$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$179$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$181$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$182$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$183$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$184$(self, d) {}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$176$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$177$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$178$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$179$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$181$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$182$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$183$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$184$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$176$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$177$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$178$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$179$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$185$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$181$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$182$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$183$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$184$(_self) {
  return true;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$176$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$177$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$178$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$179$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$185$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$181$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$182$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$183$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$184$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$176$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$177$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$178$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$179$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$185$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$181$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$182$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$183$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$184$(self) {
  if (!(self.health > 0)) {
    retfings$game$Core$EventSystem$$dispatch_gold_gain_event({ x: self.position.x, y: self.position.y, amount: self.died_glod });
    return;
  } else {
    return;
  }
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$176$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$178$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$179$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$185$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$181$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$182$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$183$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$184$(_self) {
  return false;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$176$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$173$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$177$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$175$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$178$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$174$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$179$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$186$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$185$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$169$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$181$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$171$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$182$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$188$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$183$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$172$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$184$(_self, damage_per_second, duration) {
  const damage_fn = () => {
    retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$170$(_self, damage_per_second);
  };
  retfings$game$Core$Sprite$Enemy$$_apply_poison(duration, damage_fn);
}
function retfings$game$Core$Sprite$Enemy$$EggsEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 2, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 60, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$188$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$188$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$188$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$188$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$188$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$188$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$188$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$188$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$188$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$188$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$188$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$188$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$188$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$188$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$188$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$188$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$188$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$188$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$188$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$188$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 7, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 50, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new(position$46$opt, health$46$opt, speed$46$opt) {
  let position;
  if (position$46$opt === undefined) {
    position = { x: -1, y: -1 };
  } else {
    const _Some = position$46$opt;
    position = _Some;
  }
  let health;
  if (health$46$opt.$tag === 1) {
    const _Some = health$46$opt;
    health = _Some._0;
  } else {
    health = 100;
  }
  let speed;
  if (speed$46$opt.$tag === 1) {
    const _Some = speed$46$opt;
    speed = _Some._0;
  } else {
    speed = 60;
  }
  return retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new$46$inner(position, health, speed);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$187$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$187$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$187$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$Enemy$$CaterpillarEnemy$new$46$inner(position, health, speed) {
  return { position: position, health: health, max_health: health, move_path: [retfings$game$Core$Point$$pathPointSingleton], cur_path_index: 0, move_next_point: retfings$game$Core$Point$$pathPointSingleton, enemyType: 5, id: retfings$game$Core$Sprite$Enemy$$generate_enemy_id(), died_glod: 50, enemy_status: 0, speed: speed, render_small_size: false, render_normal_size: false, render_big_size: false };
}
function retfings$game$Core$Sprite$Enemy$$CaterpillarEnemy$new(position$46$opt, health$46$opt, speed$46$opt) {
  let position;
  if (position$46$opt === undefined) {
    position = { x: -1, y: -1 };
  } else {
    const _Some = position$46$opt;
    position = _Some;
  }
  let health;
  if (health$46$opt.$tag === 1) {
    const _Some = health$46$opt;
    health = _Some._0;
  } else {
    health = 100;
  }
  let speed;
  if (speed$46$opt.$tag === 1) {
    const _Some = speed$46$opt;
    speed = _Some._0;
  } else {
    speed = 20;
  }
  return retfings$game$Core$Sprite$Enemy$$CaterpillarEnemy$new$46$inner(position, health, speed);
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$186$(self, b) {
  self.render_big_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$186$(self, b) {
  self.render_normal_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$186$(self, b) {
  self.render_small_size = b;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$186$(self) {
  return self.speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$186$(self, speed) {
  self.speed = speed;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$186$(self) {
  return self.enemy_status;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$186$(self, s) {
  self.enemy_status = s;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$186$(self) {
  return self.died_glod;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$id$186$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$186$(self) {
  return self.enemyType;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$186$(self, index) {
  self.cur_path_index = index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$186$(self, point) {
  self.move_next_point = point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$position$186$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$health$186$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$max_health$186$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_path$186$(self) {
  return self.move_path;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$186$(self) {
  return self.cur_path_index;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$186$(self) {
  return self.move_next_point;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$186$(self) {
  return self.health > 0;
}
function retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$186$(self, damage) {
  self.health = self.health - damage;
}
function moonbitlang$core$builtin$$Eq$equal$141$(_x_487, _x_488) {
  switch (_x_487) {
    case 0: {
      if (_x_488 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_488 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_488 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_488 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_488 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_488 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_488 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_488 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_488 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_488 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_488 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_488 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_488 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_488 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_488 === 14) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_488 === 15) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function retfings$game$Core$Sprite$Tower$$generate_tower_id() {
  const current_id = retfings$game$Core$Sprite$Tower$$towerIdCounter.val;
  retfings$game$Core$Sprite$Tower$$towerIdCounter.val = current_id + 1 | 0;
  return current_id;
}
function retfings$game$Core$Sprite$Tower$$TreasureTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$189$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$189$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$189$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$189$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$189$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$189$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$189$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$189$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$189$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$189$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$189$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$189$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$189$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$189$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$189$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$ThunderTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$190$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$190$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$190$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$190$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$190$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$190$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$190$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$190$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$190$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$190$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$190$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$190$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$190$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$190$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$190$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$SpeedTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$191$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$191$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$191$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$191$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$191$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$191$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$191$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$191$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$191$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$191$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$191$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$191$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$191$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$191$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$191$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$SkyTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, total_invested: cost, id: _bind };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$192$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$192$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$192$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$192$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$192$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$192$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$192$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$192$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$192$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$192$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$192$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$192$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$192$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$192$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$192$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$PositiveMagneticTowerBullet$new(position, damage, speed, target) {
  return { position: position, damage: damage, speed: speed, target: target, alive: true };
}
function retfings$game$Core$Sprite$Tower$$PositiveMagneticTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, total_invested: cost, id: _bind };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$193$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$193$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$193$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$193$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$193$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$193$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$193$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$193$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$193$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$193$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$193$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$193$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$193$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$193$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$193$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$PlasmaTowerBullet$new(position, damage, speed, target) {
  return { position: position, damage: damage, speed: speed, target: target, alive: true };
}
function retfings$game$Core$Sprite$Tower$$PlasmaTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, total_invested: cost, id: _bind };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$194$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$194$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$194$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$194$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$194$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$194$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$194$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$194$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$194$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$194$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$194$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$194$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$194$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$194$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$194$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$NegativeMagneticTowerBullet$new(position, damage, speed, target) {
  return { position: position, damage: damage, speed: speed, target: target, alive: true };
}
function retfings$game$Core$Sprite$Tower$$NegativeMagneticTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, total_invested: cost, id: _bind };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$195$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$195$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$195$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$195$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$195$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$195$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$195$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$195$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$195$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$195$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$195$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$195$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$195$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$195$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$195$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$LightningTowerBullet$new(position, damage, speed, target) {
  return { position: position, damage: damage, speed: speed, target: target, alive: true };
}
function retfings$game$Core$Sprite$Tower$$LightningTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, total_invested: cost, id: _bind };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$196$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$196$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$196$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$196$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$196$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$196$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$196$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$196$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$196$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$196$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$196$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$196$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$196$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$196$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$196$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$LaserTowerBullet$new$46$inner(position, damage, speed, direction, range) {
  return { position: position, damage: damage, speed: speed, direction: direction, alive: true, range: range, traveled_distance: 0 };
}
function retfings$game$Core$Sprite$Tower$$LaserTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$197$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$197$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$197$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$197$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$197$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$197$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$197$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$197$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$197$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$197$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$197$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$197$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$197$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$197$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$197$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$FrozenTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$198$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$198$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$198$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$198$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$198$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$198$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$198$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$198$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$198$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$198$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$198$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$198$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$198$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$198$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$198$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$DecayTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$199$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$199$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$199$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$199$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$199$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$199$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$199$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$199$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$199$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$199$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$199$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$199$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$199$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$199$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$199$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$CurveTowerBullet$new(position, damage, speed, target) {
  return { position: position, damage: damage, speed: speed, target: target, alive: true };
}
function retfings$game$Core$Sprite$Tower$$CurveTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$200$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$200$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$200$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$200$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$200$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$200$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$200$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$200$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$200$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$200$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$200$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$200$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$200$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$200$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$200$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$ChargeJarTowerBullet$new(position, damage, speed, target) {
  return { position: position, damage: damage, speed: speed, target: target, alive: true };
}
function retfings$game$Core$Sprite$Tower$$ChargeJarTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, total_invested: cost, id: _bind };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$201$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$201$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$201$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$201$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$201$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$201$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$201$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$201$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$201$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$201$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$201$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$201$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$201$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$201$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$201$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$ChainTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = [];
  const _bind$2 = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, enemies: _bind, total_invested: cost, id: _bind$2 };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$202$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$202$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$202$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$202$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$202$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$202$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$202$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$202$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$202$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$202$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$202$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$202$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$202$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$202$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$202$(self, value) {
  self.get_timer_ms = value;
}
function retfings$game$Core$Sprite$Tower$$BeeTowerBullet$new(position, damage, speed, target) {
  return { position: position, damage: damage, speed: speed, target: target, alive: true, posion_ms: 5000, posion_damage_per_second: 0.02 };
}
function retfings$game$Core$Sprite$Tower$$BeeTower$new(health, range, damage, attack_speed, position, cost, towerType) {
  const cd_ms = attack_speed > 0 ? 1000 / attack_speed : 1 / 0;
  const _bind = retfings$game$Core$Sprite$Tower$$generate_tower_id();
  return { health: health, range: range, damage: damage, attack_speed: attack_speed, position: position, level: 1, cost: cost, can_attack_fly: false, towerType: towerType, visual_aim_deg: 0, aim_target_deg: 0, aim_turn_speed: 720, aim_dead_zone: 0.5, cd_ms: cd_ms, get_timer_ms: 0, total_invested: cost, id: _bind };
}
function retfings$game$Core$Sprite$Tower$$Tower$id$203$(self) {
  return self.id;
}
function retfings$game$Core$Sprite$Tower$$Tower$upgrade$203$(self) {
  if (self.level >= 3) {
    return undefined;
  }
  self.level = self.level + 1 | 0;
  self.damage = self.damage + 5;
  self.range = self.range + 10;
  self.cd_ms = self.attack_speed > 0 ? 1000 / self.attack_speed : 1 / 0;
}
function retfings$game$Core$Sprite$Tower$$Tower$health$203$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$203$(self, deg) {
  self.visual_aim_deg = deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$203$(self) {
  return self.visual_aim_deg;
}
function retfings$game$Core$Sprite$Tower$$Tower$range$203$(self) {
  return self.range;
}
function retfings$game$Core$Sprite$Tower$$Tower$damage$203$(self) {
  return self.damage;
}
function retfings$game$Core$Sprite$Tower$$Tower$attack_speed$203$(self) {
  return self.attack_speed;
}
function retfings$game$Core$Sprite$Tower$$Tower$position$203$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$Tower$$Tower$level$203$(self) {
  return self.level;
}
function retfings$game$Core$Sprite$Tower$$Tower$cost$203$(self) {
  return self.cost;
}
function retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$203$(self) {
  return self.can_attack_fly;
}
function retfings$game$Core$Sprite$Tower$$Tower$towerType$203$(self) {
  return self.towerType;
}
function retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$203$(self) {
  return self.get_timer_ms;
}
function retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$203$(self, value) {
  self.get_timer_ms = value;
}
function moonbitlang$core$builtin$$Eq$equal$204$(_x_68, _x_69) {
  switch (_x_68) {
    case 0: {
      if (_x_69 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_69 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_69 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_69 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_69 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_69 === 5) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_69 === 6) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function retfings$game$Core$Sprite$NeutralElement$$WeedNeutralElement$new$46$inner(x, y, health) {
  return { position: retfings$game$Core$Point$$NeutralElementPoint$new$46$inner(x, y), health: health, neutralElement_type: 3, max_health: health };
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$205$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$205$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$205$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$205$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$205$(self) {
  return self.neutralElement_type;
}
function retfings$game$Core$Sprite$NeutralElement$$StoneNeutralElement$new$46$inner(x, y, health) {
  return { position: retfings$game$Core$Point$$NeutralElementPoint$new$46$inner(x, y), health: health, neutralElement_type: 0, max_health: health };
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$206$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$206$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$206$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$206$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$206$(self) {
  return self.neutralElement_type;
}
function retfings$game$Core$Sprite$NeutralElement$$SlotMachineNeutralElement$new$46$inner(x, y, health) {
  return { position: retfings$game$Core$Point$$NeutralElementPoint$new$46$inner(x, y), health: health, neutralElement_type: 1, max_health: health };
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$207$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$207$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$207$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$207$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$207$(self) {
  return self.neutralElement_type;
}
function retfings$game$Core$Sprite$NeutralElement$$SearchLightNeutralElement$new$46$inner(x, y, health) {
  return { position: retfings$game$Core$Point$$NeutralElementPoint$new$46$inner(x, y), health: health, neutralElement_type: 5, max_health: health };
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$208$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$208$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$208$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$208$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$208$(self) {
  return self.neutralElement_type;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$209$(_self) {
  return false;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$210$(_self) {
  return false;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$211$(_self) {
  return false;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$212$(_self) {
  return false;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$213$(_self) {
  return false;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$214$(_self) {
  return false;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElementClick$new() {
  return { cur_center_x: -1, cur_center_y: -1, last_center_x: -1, last_center_y: -1, e: { self: retfings$game$Core$Sprite$NeutralElement$$StoneNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$206$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$213$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$206$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$206$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$206$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$206$ }, render_attack_tips: false };
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElementClick$get_instance() {
  const _bind = retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_instance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Sprite$NeutralElement$$NeutralElementClick$new();
    retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_instance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Sprite$NeutralElement$$EnergyLightNeutralElement$new$46$inner(x, y, health) {
  return { position: retfings$game$Core$Point$$NeutralElementPoint$new$46$inner(x, y), health: health, neutralElement_type: 6, max_health: health };
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$215$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$215$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$215$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$215$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$215$(self) {
  return self.neutralElement_type;
}
function retfings$game$Core$Sprite$NeutralElement$$ConveyorBeltNeutralElement$new$46$inner(x, y, health) {
  return { position: retfings$game$Core$Point$$NeutralElementPoint$new$46$inner(x, y), health: health, neutralElement_type: 4, max_health: health, path: { x: -1, y: -1, is_jump_point: false }, dir_: true };
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$216$(self, damage) {
  self.health = self.health - damage;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$216$(self) {
  return self.max_health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$216$(self) {
  return self.health;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$216$(self) {
  return self.position;
}
function retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$216$(self) {
  return self.neutralElement_type;
}
function retfings$game$Core$Map$$ClickDisabledTips$new() {
  return { placed_tips: false, placed_tips_points: retfings$game$Core$Point$$pixelPointSingleton, show_ms: 1500, dt: 0, global_alpha: 1 };
}
function retfings$game$Core$Map$$ClickDisabledTips$get_instance() {
  const _bind = retfings$game$Core$Map$$mapTipsInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Map$$ClickDisabledTips$new();
    retfings$game$Core$Map$$mapTipsInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Map$$MapPath$new() {
  return { paths: moonbitlang$core$array$$Array$new$46$inner$132$(0) };
}
function retfings$game$Core$Map$$MapPath$get_instance() {
  const _bind = retfings$game$Core$Map$$mapPathInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Map$$MapPath$new();
    retfings$game$Core$Map$$mapPathInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Map$$MapPath$set_path(self, paths) {
  self.paths = paths;
}
function retfings$game$Core$Map$$MapPath$get_path(self, path_id) {
  const _end136 = self.paths.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end136) {
      if (moonbitlang$core$array$$Array$at$132$(self.paths, i).id === path_id) {
        return new Option$Some$1$(moonbitlang$core$array$$Array$at$132$(self.paths, i).points);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return Option$None$1$;
}
function retfings$game$Core$Map$$EnemyWave$new$46$inner(max_enemies, enemy_type, wave_id, spawn_timer) {
  return { enemy_count: 0, spawn_timer: spawn_timer, cur_d_t: 0, max_enemies: max_enemies, enemy_type: enemy_type, wave_id: wave_id, has_enemy: true, is_start: false };
}
function retfings$game$Core$Map$$EnemyWave$new(max_enemies$46$opt, enemy_type$46$opt, wave_id$46$opt, spawn_timer$46$opt) {
  let max_enemies;
  if (max_enemies$46$opt === undefined) {
    max_enemies = 3;
  } else {
    const _Some = max_enemies$46$opt;
    max_enemies = _Some;
  }
  let enemy_type;
  if (enemy_type$46$opt === undefined) {
    enemy_type = 0;
  } else {
    const _Some = enemy_type$46$opt;
    enemy_type = _Some;
  }
  let wave_id;
  if (wave_id$46$opt === undefined) {
    wave_id = 1;
  } else {
    const _Some = wave_id$46$opt;
    wave_id = _Some;
  }
  let spawn_timer;
  if (spawn_timer$46$opt.$tag === 1) {
    const _Some = spawn_timer$46$opt;
    spawn_timer = _Some._0;
  } else {
    spawn_timer = 5000;
  }
  return retfings$game$Core$Map$$EnemyWave$new$46$inner(max_enemies, enemy_type, wave_id, spawn_timer);
}
function retfings$game$Core$Map$$get_all_map_config() {
  return [{ level: 1, neutral_element: [], enemy_path_waves: [{ path_id: 1, points: [{ x: 3, y: 3, is_jump_point: false }, { x: 10, y: 3, is_jump_point: false }], waves: [retfings$game$Core$Map$$EnemyWave$new$46$inner(1, 5, 1, 2000), retfings$game$Core$Map$$EnemyWave$new$46$inner(1, 6, 1, 2000)] }], available_tower: [6], coins: 5000 }, { level: 2, neutral_element: [], enemy_path_waves: [{ path_id: 1, points: [{ x: 5, y: 3, is_jump_point: false }, { x: 10, y: 3, is_jump_point: false }], waves: [retfings$game$Core$Map$$EnemyWave$new$46$inner(1, 6, 1, 100)] }, { path_id: 2, points: [{ x: 5, y: 6, is_jump_point: false }, { x: 10, y: 6, is_jump_point: false }], waves: [retfings$game$Core$Map$$EnemyWave$new$46$inner(0, 6, 1, 100)] }], available_tower: [6, 5], coins: 1000 }, { level: 3, neutral_element: [], enemy_path_waves: [{ path_id: 1, points: [{ x: 5, y: 2, is_jump_point: false }, { x: 10, y: 2, is_jump_point: false }], waves: [retfings$game$Core$Map$$EnemyWave$new$46$inner(1, 6, 1, 200)] }, { path_id: 2, points: [{ x: 5, y: 5, is_jump_point: false }, { x: 10, y: 5, is_jump_point: false }], waves: [retfings$game$Core$Map$$EnemyWave$new$46$inner(5, 6, 1, 5000)] }, { path_id: 3, points: [{ x: 5, y: 7, is_jump_point: false }, { x: 10, y: 7, is_jump_point: false }], waves: [retfings$game$Core$Map$$EnemyWave$new$46$inner(3, 6, 1, 1500)] }], available_tower: [4, 5, 6], coins: 1500 }];
}
function retfings$game$Core$Map$$_get_by_level(level) {
  const all_configs = retfings$game$Core$Map$$get_all_map_config();
  const _len = all_configs.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const config = all_configs[_i];
      if (config.level === level) {
        return config;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function retfings$game$Core$Map$$get_map_by_level(level) {
  const _bind = retfings$game$Core$Map$$_get_by_level(level);
  if (_bind === undefined) {
    const _bind$2 = retfings$game$Core$Map$$_get_by_level(1);
    if (_bind$2 === undefined) {
      moonbitlang$core$builtin$$println$144$(`error:get map config error with level: ${moonbitlang$core$builtin$$Show$to_string$27$(level)}`);
      return { level: 1, neutral_element: [{ self: retfings$game$Core$Sprite$NeutralElement$$SlotMachineNeutralElement$new$46$inner(5, 5, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$207$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$209$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$207$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$207$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$207$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$207$ }], enemy_path_waves: [{ path_id: -1, points: [{ x: -1, y: -1, is_jump_point: false }], waves: [retfings$game$Core$Map$$EnemyWave$new(undefined, undefined, undefined, Option$None$2$)] }], available_tower: [6], coins: 1000 };
    } else {
      const _Some = _bind$2;
      return _Some;
    }
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Map$$MapGridSystem$default(width, height) {
  const grid = moonbitlang$core$array$$Array$new$46$inner$138$(0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < height) {
      moonbitlang$core$array$$Array$push$138$(grid, moonbitlang$core$array$$Array$make$139$(width, 1));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { grid: grid, tower: moonbitlang$core$array$$Array$new$46$inner$124$(0), enemy: moonbitlang$core$array$$Array$new$46$inner$133$(0), neutralElement: moonbitlang$core$array$$Array$new$46$inner$164$(0) };
}
function retfings$game$Core$Map$$MapGridSystem$get_instance() {
  const _bind = retfings$game$Core$Map$$mapGridSystemInstance.val;
  if (_bind === undefined) {
    const x = moonbitlang$core$double$$Double$to_int(retfings$game$Core$$map.width) / moonbitlang$core$double$$Double$to_int(retfings$game$Core$$map.gridSize) | 0;
    const y = moonbitlang$core$double$$Double$to_int(retfings$game$Core$$map.height) / moonbitlang$core$double$$Double$to_int(retfings$game$Core$$map.gridSize) | 0;
    const new_instance = retfings$game$Core$Map$$MapGridSystem$default(x, y);
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < x) {
        moonbitlang$core$array$$Array$set$139$(moonbitlang$core$array$$Array$at$138$(new_instance.grid, y - 1 | 0), index, 0);
        moonbitlang$core$array$$Array$set$139$(moonbitlang$core$array$$Array$at$138$(new_instance.grid, 0), index, 0);
        _tmp = index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    retfings$game$Core$Map$$mapGridSystemInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Map$$MapGridSystem$placed_path(self, x, y) {
  if (self.grid.length > 0 && (y >= 0 && (y < self.grid.length && (x >= 0 && x < moonbitlang$core$array$$Array$at$138$(self.grid, 0).length)))) {
    moonbitlang$core$array$$Array$set$139$(moonbitlang$core$array$$Array$at$138$(self.grid, y), x, 5);
  }
  return self;
}
function retfings$game$Core$Map$$set_path_by_level(level) {
  const map_path = retfings$game$Core$Map$$MapPath$get_instance();
  const mc = retfings$game$Core$Map$$get_map_by_level(level);
  let paths = [];
  const _arr = mc.enemy_path_waves;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      const pid = e.path_id;
      const points = e.points;
      paths = moonbitlang$core$builtin$$Add$add$165$(paths, [{ id: pid, points: points }]);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Map$$MapPath$set_path(map_path, paths);
  const _arr$2 = map_path.paths;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const path = _arr$2[_i];
      const points = path.points;
      const _end116 = points.length;
      let _tmp$3 = 1;
      while (true) {
        const i = _tmp$3;
        if (i < _end116) {
          const prev = moonbitlang$core$array$$Array$at$136$(points, i - 1 | 0);
          const cur = moonbitlang$core$array$$Array$at$136$(points, i);
          if (prev.x !== cur.x && (prev.y !== cur.y && !cur.is_jump_point)) {
            cur.is_jump_point = true;
          }
          if (prev.y === cur.y) {
            const _start122 = moonbitlang$core$double$$Double$to_int(prev.x);
            const _end123 = moonbitlang$core$double$$Double$to_int(cur.x);
            let _tmp$4 = _start122;
            while (true) {
              const x = _tmp$4;
              if (x <= _end123) {
                retfings$game$Core$Map$$MapGridSystem$placed_path(retfings$game$Core$Map$$map_grid_system_singleton, x, moonbitlang$core$double$$Double$to_int(cur.y));
                _tmp$4 = x + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          if (prev.x === cur.x) {
            const _start127 = moonbitlang$core$double$$Double$to_int(prev.y);
            const _end128 = moonbitlang$core$double$$Double$to_int(cur.y);
            let _tmp$4 = _start127;
            while (true) {
              const y = _tmp$4;
              if (y <= _end128) {
                retfings$game$Core$Map$$MapGridSystem$placed_path(retfings$game$Core$Map$$map_grid_system_singleton, moonbitlang$core$double$$Double$to_int(cur.x), y);
                _tmp$4 = y + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          _tmp$3 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Core$Map$$set_neutral_element_by_level(level) {
  retfings$game$Core$Map$$map_grid_system_singleton.neutralElement = retfings$game$Core$Map$$get_map_by_level(level).neutral_element;
}
function retfings$game$Core$Map$$MapLevel$new() {
  return { cur_level: 1, map_name: "map1" };
}
function retfings$game$Core$Map$$MapLevel$get_instance() {
  const _bind = retfings$game$Core$Map$$mapLevelInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Map$$MapLevel$new();
    retfings$game$Core$Map$$mapLevelInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Map$$MapLevel$set_cur_level(self, level) {
  self.cur_level = level;
}
function retfings$game$Core$Map$$MapLevel$get_cur_level(self) {
  return self.cur_level;
}
function retfings$game$Core$Map$$MapGridSystem$clear_all_towers(self) {
  self.tower = moonbitlang$core$array$$Array$new$46$inner$124$(0);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < (self.grid.length - 1 | 0)) {
      let _tmp$2 = 0;
      while (true) {
        const j = _tmp$2;
        if (j < moonbitlang$core$array$$Array$at$138$(self.grid, i).length) {
          moonbitlang$core$array$$Array$set$139$(moonbitlang$core$array$$Array$at$138$(self.grid, i), j, 1);
          _tmp$2 = j + 1 | 0;
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
function retfings$game$Core$Map$$MapGridSystem$placed_neutral_element(self, x, y) {
  if (self.grid.length > 0 && (y >= 0 && (y < self.grid.length && (x >= 0 && x < moonbitlang$core$array$$Array$at$138$(self.grid, 0).length)))) {
    moonbitlang$core$array$$Array$set$139$(moonbitlang$core$array$$Array$at$138$(self.grid, y), x, 4);
  }
  return self;
}
function retfings$game$Core$Map$$MapGridSystem$freed(self, x, y) {
  if (self.grid.length > 0 && (y >= 0 && (y < self.grid.length && (x >= 0 && x < moonbitlang$core$array$$Array$at$138$(self.grid, 0).length)))) {
    moonbitlang$core$array$$Array$set$139$(moonbitlang$core$array$$Array$at$138$(self.grid, y), x, 1);
  }
  return self;
}
function retfings$game$Core$Map$$MapGridSystem$is_placed(self, x, y) {
  if (self.grid.length > 0 && (y >= 0 && (y < self.grid.length && (x >= 0 && x < moonbitlang$core$array$$Array$at$138$(self.grid, 0).length)))) {
    const _bind = moonbitlang$core$array$$Array$at$139$(moonbitlang$core$array$$Array$at$138$(self.grid, y), x);
    switch (_bind) {
      case 0: {
        return true;
      }
      case 2: {
        return true;
      }
      case 4: {
        return true;
      }
      case 5: {
        return true;
      }
      case 3: {
        return true;
      }
      default: {
        return false;
      }
    }
  } else {
    return false;
  }
}
function retfings$game$Core$Map$$MapGridSystem$to_1_base_map(_self, point) {
  const base1X = moonbitlang$core$double$$Double$to_int(point.x / retfings$game$Core$$map.gridSize);
  const base1Y = moonbitlang$core$double$$Double$to_int(point.y / retfings$game$Core$$map.gridSize);
  return retfings$game$Core$Point$$BasePoint$new$46$inner(base1X + 0, base1Y + 0);
}
function retfings$game$Core$Map$$MapGridSystem$to_base_point(_self, point) {
  const base1X = moonbitlang$core$double$$Double$to_int(point.x / retfings$game$Core$$map.gridSize);
  const base1Y = moonbitlang$core$double$$Double$to_int(point.y / retfings$game$Core$$map.gridSize);
  return retfings$game$Core$Point$$BasePoint$new$46$inner(base1X + 0, base1Y + 0);
}
function retfings$game$Core$Map$$MapGridSystem$tower2pixel(_self, point) {
  return retfings$game$Core$Point$$PixelPoint$new$46$inner(point.x, point.y);
}
function retfings$game$Core$Map$$MapGridSystem$pixel2tower(_self, point) {
  const towerX = (moonbitlang$core$double$$Double$floor(point.x / retfings$game$Core$$map.gridSize) + 0.5) * retfings$game$Core$$map.gridSize;
  const towerY = (moonbitlang$core$double$$Double$floor(point.y / retfings$game$Core$$map.gridSize) + 0.5) * retfings$game$Core$$map.gridSize;
  return retfings$game$Core$Point$$TowerPoint$new$46$inner(towerX, towerY);
}
function retfings$game$Core$Map$$MapGridSystem$pixel2cent(_self, point) {
  const cx = (moonbitlang$core$double$$Double$floor(point.x / retfings$game$Core$$map.gridSize) + 0.5) * retfings$game$Core$$map.gridSize;
  const cy = (moonbitlang$core$double$$Double$floor(point.y / retfings$game$Core$$map.gridSize) + 0.5) * retfings$game$Core$$map.gridSize;
  return { _0: cx, _1: cy };
}
function retfings$game$Core$Map$$MapGridSystem$to_enemy_position(_self, point) {
  return retfings$game$Core$Point$$BasePoint$new$46$inner((point.x + 0.5) * retfings$game$Core$$map.gridSize, (point.y + 0.5) * retfings$game$Core$$map.gridSize);
}
function retfings$game$Core$Map$$EnemyWaveConfig$new(level) {
  const map_config = retfings$game$Core$Map$$get_map_by_level(level);
  let pwcs = [];
  const _arr = map_config.enemy_path_waves;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const w = _arr[_i];
      const pwc = { path_id: w.path_id, waves: w.waves };
      pwcs = moonbitlang$core$builtin$$Add$add$167$(pwcs, [pwc]);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { path_wave_configs: pwcs, cur_wave: 1 };
}
function retfings$game$Core$Map$$EnemyWaveConfig$new_default() {
  return retfings$game$Core$Map$$EnemyWaveConfig$new(1);
}
function retfings$game$Core$Map$$EnemyWaveConfig$get_instance() {
  const _bind = retfings$game$Core$Map$$enemyWaveConfigInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Map$$EnemyWaveConfig$new_default();
    retfings$game$Core$Map$$enemyWaveConfigInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Map$$enemyWaveConfigSingleton() {
  return retfings$game$Core$Map$$EnemyWaveConfig$get_instance();
}
function retfings$game$Core$Map$$EnemyWaveConfig$set_level(self, new_level) {
  retfings$game$Core$Map$$currentLevel.val = new_level;
  retfings$game$Core$Map$$enemyWaveConfigInstance.val = retfings$game$Core$Map$$EnemyWaveConfig$new(new_level);
}
function retfings$game$Core$Map$$get_level_count() {
  return retfings$game$Core$Map$$get_all_map_config().length;
}
function retfings$game$Core$TopBar$$WaveProgressBar$new$46$inner(curWave, maxWave) {
  return { x: 600, y: 50, w: 200, h: 20, curWave: curWave, maxWave: maxWave };
}
function retfings$game$Core$TopBar$$WaveProgressBar$get_instance() {
  const _bind = retfings$game$Core$TopBar$$waveProgressBarInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$TopBar$$WaveProgressBar$new$46$inner(-1, -1);
    retfings$game$Core$TopBar$$waveProgressBarInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$TopBar$$SpeedButton$new() {
  return { time_scale: 1, x: retfings$game$Core$$map.width - 10 - 36 - 10 - 36, y: 20, w: 36, h: 36, padding: 10, margin: 10, start_speed_mode: false };
}
function retfings$game$Core$TopBar$$SpeedButton$get_instance() {
  const _bind = retfings$game$Core$TopBar$$speedButtonInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$TopBar$$SpeedButton$new();
    retfings$game$Core$TopBar$$speedButtonInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$TopBar$$PauseButton$new() {
  return { is_pause: false, x: retfings$game$Core$$map.width - 10 - 36, y: 20, w: 36, h: 36, padding: 10, margin: 10 };
}
function retfings$game$Core$TopBar$$PauseButton$get_instance() {
  const _bind = retfings$game$Core$TopBar$$pauseButtonInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$TopBar$$PauseButton$new();
    retfings$game$Core$TopBar$$pauseButtonInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$TopBar$$MenuButton$new() {
  return { open_menu: false, x: retfings$game$Core$$map.width - 10 - 36 - 10 - 36 - 10 - 36, y: 20, w: 36, h: 36, padding: 10, margin: 10 };
}
function retfings$game$Core$TopBar$$MenuButton$get_instance() {
  const _bind = retfings$game$Core$TopBar$$menuButtonInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$TopBar$$MenuButton$new();
    retfings$game$Core$TopBar$$menuButtonInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$TopBar$$HDU$new() {
  return { gold: 1000, x: 10, y: 20, w: 120, h: 36, padding: 10, margin: 10 };
}
function retfings$game$Core$TopBar$$HDU$get_instance() {
  const _bind = retfings$game$Core$TopBar$$hduInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$TopBar$$HDU$new();
    retfings$game$Core$TopBar$$hduInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$TopBar$$HDU$set_HDU_by_level(self, level) {
  self.gold = retfings$game$Core$Map$$get_map_by_level(level).coins + 0;
}
function retfings$game$Core$TopBar$$HDU$enough(self, gold) {
  return self.gold - gold > 0;
}
function retfings$game$Core$TopBar$$HDU$spend_gold(self, gold) {
  self.gold = self.gold - gold;
}
function retfings$game$Core$LocalStorage$$LocalStorage$new() {
  ({});
}
function retfings$game$Core$LocalStorage$$LocalStorage$get_instance() {
  const _bind = retfings$game$Core$LocalStorage$$localStorageInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Core$LocalStorage$$LocalStorage$new();
    retfings$game$Core$LocalStorage$$localStorageInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Core$LocalStorage$$LocalStorage$set_item(self, k, v) {
  retfings$game$Core$LocalStorage$$setItem(k, v);
}
function retfings$game$Core$LocalStorage$$LocalStorage$get_item(self, k) {
  return retfings$game$Core$LocalStorage$$getItem(k);
}
function retfings$game$Core$LocalStorage$$LocalStorage$clear_cache(self) {
  retfings$game$Core$LocalStorage$$clear();
}
function retfings$game$Core$Audio$$round_to_one_decimal(value) {
  return moonbitlang$core$double$$Double$round(value * 10) / 10;
}
function retfings$game$Core$Audio$$set_sound_volume(vol) {
  retfings$game$Core$LocalStorage$$LocalStorage$set_item(retfings$game$Core$LocalStorage$$localStorageSingleton, "sound_volume", String(retfings$game$Core$Audio$$round_to_one_decimal(vol)));
}
function retfings$game$Core$Audio$$get_sound_volume() {
  return retfings$game$Core$LocalStorage$$LocalStorage$get_item(retfings$game$Core$LocalStorage$$localStorageSingleton, "sound_volume");
}
function retfings$game$Core$Audio$$set_music_volume(vol) {
  retfings$game$Core$LocalStorage$$LocalStorage$set_item(retfings$game$Core$LocalStorage$$localStorageSingleton, "music_volume", String(retfings$game$Core$Audio$$round_to_one_decimal(vol)));
}
function retfings$game$Core$Audio$$get_music_volume() {
  return retfings$game$Core$LocalStorage$$LocalStorage$get_item(retfings$game$Core$LocalStorage$$localStorageSingleton, "music_volume");
}
function retfings$game$Core$Panels$$SelectTowerPanel$new$46$inner(margin, padding, iconSize, maxShow, maxLineShow, currAvailableTowersCount, currClickPixelPoint, currClickTowerType, openPanelTowerPoint) {
  return { margin: margin, padding: padding, iconSize: iconSize, maxShow: maxShow, maxLineShow: maxLineShow, showPanelPiexlPoint: retfings$game$Core$Point$$pixelPointSingleton, showPanelW: 0, showPanelH: 0, items: [2], offsetX: 0, offsetY: 0, currAvailableTowersCount: currAvailableTowersCount, currClickPixelPoint: currClickPixelPoint, currClickTowerType: currClickTowerType, openPanelTowerPoint: openPanelTowerPoint, isOpen: false, selectedTowerType: undefined, upgradePanelOpen: false, upgradePanelCenter: retfings$game$Core$Point$$pixelPointSingleton, upgradePanelRadius: 0, selectedTowerForUpgrade: Option$None$3$ };
}
function retfings$game$Core$Panels$$SelectTowerPanel$new(margin$46$opt, padding$46$opt, iconSize$46$opt, maxShow$46$opt, maxLineShow$46$opt, currAvailableTowersCount$46$opt, currClickPixelPoint$46$opt, currClickTowerType$46$opt, openPanelTowerPoint$46$opt) {
  let margin;
  if (margin$46$opt.$tag === 1) {
    const _Some = margin$46$opt;
    margin = _Some._0;
  } else {
    margin = 10;
  }
  let padding;
  if (padding$46$opt.$tag === 1) {
    const _Some = padding$46$opt;
    padding = _Some._0;
  } else {
    padding = 10;
  }
  let iconSize;
  if (iconSize$46$opt.$tag === 1) {
    const _Some = iconSize$46$opt;
    iconSize = _Some._0;
  } else {
    iconSize = 40;
  }
  let maxShow;
  if (maxShow$46$opt.$tag === 1) {
    const _Some = maxShow$46$opt;
    maxShow = _Some._0;
  } else {
    maxShow = 8;
  }
  let maxLineShow;
  if (maxLineShow$46$opt.$tag === 1) {
    const _Some = maxLineShow$46$opt;
    maxLineShow = _Some._0;
  } else {
    maxLineShow = 4;
  }
  let currAvailableTowersCount;
  if (currAvailableTowersCount$46$opt.$tag === 1) {
    const _Some = currAvailableTowersCount$46$opt;
    currAvailableTowersCount = _Some._0;
  } else {
    currAvailableTowersCount = 0;
  }
  let currClickPixelPoint;
  if (currClickPixelPoint$46$opt === undefined) {
    currClickPixelPoint = retfings$game$Core$Point$$pixelPointSingleton;
  } else {
    const _Some = currClickPixelPoint$46$opt;
    currClickPixelPoint = _Some;
  }
  let currClickTowerType;
  if (currClickTowerType$46$opt === undefined) {
    currClickTowerType = 2;
  } else {
    const _Some = currClickTowerType$46$opt;
    currClickTowerType = _Some;
  }
  let openPanelTowerPoint;
  if (openPanelTowerPoint$46$opt === undefined) {
    openPanelTowerPoint = retfings$game$Core$Point$$towerPointSingleton;
  } else {
    const _Some = openPanelTowerPoint$46$opt;
    openPanelTowerPoint = _Some;
  }
  return retfings$game$Core$Panels$$SelectTowerPanel$new$46$inner(margin, padding, iconSize, maxShow, maxLineShow, currAvailableTowersCount, currClickPixelPoint, currClickTowerType, openPanelTowerPoint);
}
function retfings$game$Core$Panels$$SelectTowerPanel$get_instance() {
  const _bind = retfings$game$Core$Panels$$selectTowerPanelInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Panels$$SelectTowerPanel$new(Option$None$2$, Option$None$2$, Option$None$2$, Option$None$2$, Option$None$2$, Option$None$2$, undefined, undefined, undefined);
    retfings$game$Core$Panels$$selectTowerPanelInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Panels$$SelectTowerPanel$computeLayout(self, map) {
  if (!self.isOpen) {
    return { _0: 0, _1: 0, _2: [] };
  }
  const towers = self.items;
  const count = towers.length;
  const width = (count + 0) * 48 + (count + 0 - 1) * 12 + 20;
  const cx = self.currClickPixelPoint.x;
  const cy = self.currClickPixelPoint.y;
  const upY = cy - map.gridSize / 2 - 10 - 80;
  const downY = cy + map.gridSize / 2 + 10;
  const preferUp = upY >= 0;
  const _p = 8;
  const _p$2 = map.width - width - 8;
  const _p$3 = cx - width / 2;
  const _p$4 = _p$2 > _p$3 ? _p$3 : _p$2;
  const x = _p > _p$4 ? _p : _p$4;
  let y;
  if (preferUp) {
    y = upY;
  } else {
    const _p$5 = map.height - 80 - 8;
    y = _p$5 > downY ? downY : _p$5;
  }
  const items = [];
  let ix = x + 10;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < count) {
      moonbitlang$core$array$$Array$push$140$(items, retfings$game$Core$Point$$Rect$new(ix, y + 8, 48, 64));
      ix = ix + 48 + 12;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: width, _1: 80, _2: items };
}
function retfings$game$Core$Panels$$set_available_tower_by_level(level) {
  retfings$game$Core$Panels$$selectTowerPanelSingleton.items = retfings$game$Core$Map$$get_map_by_level(level).available_tower;
}
function retfings$game$Core$Panels$$deduplicate$162$(arr) {
  const result = moonbitlang$core$array$$Array$new$46$inner$162$(0);
  const _len = arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const item = arr[_i];
      let found = false;
      const _len$2 = result.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const existing = result[_i$2];
          if (moonbitlang$core$builtin$$Eq$equal$162$(item, existing)) {
            found = true;
            break;
          }
          _tmp$2 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!found) {
        moonbitlang$core$array$$Array$push$162$(result, item);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function retfings$game$Core$Panels$$Attribute$new(icon, text) {
  return { icon: icon, text: text };
}
function retfings$game$Core$Panels$$EnemiesData$new(name, icon, entity_type, intro, tips, attributes) {
  return { name: name, icon: icon, entity_type: entity_type, intro: intro, tips: tips, attributes: attributes };
}
function retfings$game$Core$Panels$$create_panel_data_enemy(level) {
  const all_config_enemis = [retfings$game$Core$Panels$$EnemiesData$new("病毒", 6, "分裂", "死亡后会分裂为两个小病毒", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$EnemiesData$new("猎豹", 7, "快速移动", "", "全场跑得最快的仔", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$EnemiesData$new("袋鼠", 0, "跳跃", "", "全场跑得最快的仔", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$EnemiesData$new("小鸟", 1, "飞行", "", "全场跑得最快的仔", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$EnemiesData$new("大鸟", 2, "飞行", "", "死亡后会留下后代", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$EnemiesData$new("地鼠", 3, "飞行", "", "死亡后会留下后代", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$EnemiesData$new("乌龟", 4, "", "", "死亡后会留下后代", [retfings$game$Core$Panels$$Attribute$new("♥", "生命多"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度慢"), retfings$game$Core$Panels$$Attribute$new("🛡", "有护甲")]), retfings$game$Core$Panels$$EnemiesData$new("毛毛虫", 5, "森林中的毛毛虫", "", "平平无奇的敌人", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度慢"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$EnemiesData$new("机甲怪", 8, "", "", "从机甲内产生敌人", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度慢"), retfings$game$Core$Panels$$Attribute$new("🛡", "有护甲")]), retfings$game$Core$Panels$$EnemiesData$new("UFO", 9, "", "", "随机吸走一个防御塔", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度慢"), retfings$game$Core$Panels$$Attribute$new("🛡", "有护甲")]), retfings$game$Core$Panels$$EnemiesData$new("大熊", 10, "", "", "对防御塔进行嘲讽，强制防御塔攻击", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度慢"), retfings$game$Core$Panels$$Attribute$new("🛡", "有护甲")])];
  const m = retfings$game$Core$Map$$get_map_by_level(level);
  const available_enemies = [];
  const types = [];
  const _arr = m.enemy_path_waves;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const c = _arr[_i];
      const _arr$2 = c.waves;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const w = _arr$2[_i$2];
          moonbitlang$core$array$$Array$push$162$(types, w.enemy_type);
          _tmp$2 = _i$2 + 1 | 0;
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
  const et = retfings$game$Core$Panels$$deduplicate$162$(types);
  const _len$2 = et.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const t = et[_i];
      const _len$3 = all_config_enemis.length;
      let _tmp$3 = 0;
      while (true) {
        const _i$2 = _tmp$3;
        if (_i$2 < _len$3) {
          const act = all_config_enemis[_i$2];
          if (moonbitlang$core$builtin$$Eq$equal$162$(act.icon, t)) {
            moonbitlang$core$array$$Array$push$147$(available_enemies, act);
          }
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
  return available_enemies;
}
function retfings$game$Core$Panels$$NeutralElementsData$new(name, icon, entity_type, intro, tips, attributes) {
  return { name: name, icon: icon, entity_type: entity_type, intro: intro, tips: tips, attributes: attributes };
}
function retfings$game$Core$Panels$$create_panel_data_neutral_elements(level) {
  const all_config_neutral_element = [retfings$game$Core$Panels$$NeutralElementsData$new("石头", 0, "平平无奇", "死亡后会分裂为两个小病毒", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$NeutralElementsData$new("彩票机", 1, "抽奖", "死亡后会分裂为两个小病毒", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$NeutralElementsData$new("宝藏", 2, "抽奖", "死亡后获得一大笔财富", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$NeutralElementsData$new("小草", 3, "平平无奇", "死亡后获得一大笔财富", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$NeutralElementsData$new("传送带", 4, "平平无奇", "死亡后获得一大笔财富", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$NeutralElementsData$new("探照灯", 5, "平平无奇", "死亡后获得一大笔财富", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")]), retfings$game$Core$Panels$$NeutralElementsData$new("能量灯", 6, "平平无奇", "死亡后获得一大笔财富", "小病毒血量，移动快", [retfings$game$Core$Panels$$Attribute$new("♥", "生命少"), retfings$game$Core$Panels$$Attribute$new("⚡", "速度快"), retfings$game$Core$Panels$$Attribute$new("🛡", "无护甲")])];
  const available_neutral = [];
  const m = retfings$game$Core$Map$$get_map_by_level(level);
  const _len = all_config_neutral_element.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = all_config_neutral_element[_i];
      const _arr = m.neutral_element;
      const _len$2 = _arr.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const c = _arr[_i$2];
          if (moonbitlang$core$builtin$$Eq$equal$204$(c.method_2(c.self), t.icon)) {
            moonbitlang$core$array$$Array$push$148$(available_neutral, t);
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
      break;
    }
  }
  return available_neutral;
}
function retfings$game$Core$Panels$$Stats$new(damage, speed) {
  return { damage: damage, speed: speed };
}
function retfings$game$Core$Panels$$TowerData$new(name, icon, tower_type, cost, upgrade2, upgrade_max, description, tips, stats, attributes) {
  return { name: name, icon: icon, tower_type: tower_type, cost: cost, upgrade2: upgrade2, upgrade_max: upgrade_max, description: description, tips: tips, stats: stats, attributes: attributes };
}
function retfings$game$Core$Panels$$create_panel_data_tower(level) {
  const all_config_tower = [retfings$game$Core$Panels$$TowerData$new("蜜蜂塔", 6, "单体", moonbitlang$core$double$$Double$to_int(50), moonbitlang$core$double$$Double$to_int(100), moonbitlang$core$double$$Double$to_int(150), "附加中毒效果", "合理安排距离使中毒效果最大化", retfings$game$Core$Panels$$Stats$new(70, 80), [retfings$game$Core$Panels$$Attribute$new("♥", "附加中毒效果"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速快")]), retfings$game$Core$Panels$$TowerData$new("能量塔", 3, "单体", moonbitlang$core$double$$Double$to_int(30), moonbitlang$core$double$$Double$to_int(60), moonbitlang$core$double$$Double$to_int(90), "发射火球，对单个敌人造成持续燃烧伤害。", "适合放在敌人路径的拐角处，最大化伤害输出。", retfings$game$Core$Panels$$Stats$new(90, 50), [retfings$game$Core$Panels$$Attribute$new("♥", "伤害极高"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速慢")]), retfings$game$Core$Panels$$TowerData$new("默认塔", 1, "控制", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "发射冰锥，减缓敌人的移动速度。", "配合高伤害炮塔使用效果最佳。", retfings$game$Core$Panels$$Stats$new(40, 70), [retfings$game$Core$Panels$$Attribute$new("❄", "减速强"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("闪电塔", 2, "群体", moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(100), moonbitlang$core$double$$Double$to_int(120), "释放闪电链，可跳跃攻击多个敌人。", "在敌人密集区域放置效果最佳。", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("负磁塔", 5, "单体", moonbitlang$core$double$$Double$to_int(90), moonbitlang$core$double$$Double$to_int(120), moonbitlang$core$double$$Double$to_int(150), "与正磁塔配合，会产生磁场", "与正磁塔分别放到道路的两侧", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("正磁塔", 4, "单体", moonbitlang$core$double$$Double$to_int(110), moonbitlang$core$double$$Double$to_int(120), moonbitlang$core$double$$Double$to_int(130), "与正磁塔配合，会产生磁场", "与负磁塔分别放到道路的两侧", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("负磁塔", 0, "群体", moonbitlang$core$double$$Double$to_int(100), moonbitlang$core$double$$Double$to_int(150), moonbitlang$core$double$$Double$to_int(200), "释放闪电链，可跳跃攻击多个敌人。", "在敌人密集区域放置效果最佳。", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("雪花塔", 7, "群体", moonbitlang$core$double$$Double$to_int(120), moonbitlang$core$double$$Double$to_int(240), moonbitlang$core$double$$Double$to_int(360), "攻击附带减速效果", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("激光塔", 8, "群体", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "子弹穿刺", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("冰冻塔", 9, "冰冻", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "个体冰冻", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("日食塔", 10, "弹射", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "攻击越久伤害越高", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("链子塔", 11, "辅助", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "没伤害,增加友军攻速", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("攻速塔", 12, "辅助", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "没伤害,增加友军攻速", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("穿云塔", 13, "对空", moonbitlang$core$double$$Double$to_int(120), moonbitlang$core$double$$Double$to_int(240), moonbitlang$core$double$$Double$to_int(360), "攻击天空中的敌人,单体", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("雷电塔", 14, "对空", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "攻击天空中的敌人,单体", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")]), retfings$game$Core$Panels$$TowerData$new("宝藏塔", 15, "对空", moonbitlang$core$double$$Double$to_int(70), moonbitlang$core$double$$Double$to_int(80), moonbitlang$core$double$$Double$to_int(90), "攻击时能产生而外的钱", "", retfings$game$Core$Panels$$Stats$new(60, 60), [retfings$game$Core$Panels$$Attribute$new("⚡", "范围广"), retfings$game$Core$Panels$$Attribute$new("⚡", "攻速中")])];
  const m = retfings$game$Core$Map$$get_map_by_level(level);
  const available_towers = [];
  const _arr = m.available_tower;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = _arr[_i];
      const _len$2 = all_config_tower.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const act = all_config_tower[_i$2];
          if (moonbitlang$core$builtin$$Eq$equal$141$(act.icon, t)) {
            moonbitlang$core$array$$Array$push$146$(available_towers, act);
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
      break;
    }
  }
  return available_towers;
}
function retfings$game$Core$Panels$$PanelData$new(towers, enemies, neutrals) {
  return { towers: towers, enemies: enemies, neutrals: neutrals };
}
function retfings$game$Core$Panels$$create_panel_data(level) {
  const towers = retfings$game$Core$Panels$$create_panel_data_tower(level);
  const enemies = retfings$game$Core$Panels$$create_panel_data_enemy(level);
  const neutrals = retfings$game$Core$Panels$$create_panel_data_neutral_elements(level);
  return retfings$game$Core$Panels$$PanelData$new(towers, enemies, neutrals);
}
function retfings$game$Core$Panels$$new$46$parse_volume$124$45(str) {
  return str === "0" ? 0 : str === "0.1" ? 0.1 : str === "0.2" ? 0.2 : str === "0.3" ? 0.3 : str === "0.4" ? 0.4 : str === "0.5" ? 0.5 : str === "0.6" ? 0.6 : str === "0.7" ? 0.7 : str === "0.8" ? 0.8 : str === "0.9" ? 0.9 : str === "1" ? 1 : 0.5;
}
function retfings$game$Core$Panels$$MenuPanel$new() {
  const x = (retfings$game$Core$$map.width - 800) / 2;
  const y = (retfings$game$Core$$map.height - 600) / 2;
  const start_x = x + 160;
  const help_button_x = start_x + 60 + 80;
  const restart_button_x = help_button_x + 60 + 80;
  const clear_cache_x = restart_button_x + 60 + 80;
  const exit_button_y = y + 250;
  const help_button_y = y + 250;
  const restart_button_y = y + 250;
  const clear_cache_y = y + 250;
  const continue_button_x = x + 200;
  const continue_button_y = y + 400;
  const sound_slider_x = x + 150;
  const music_slider_x = x + 450;
  const slider_y = y + 100;
  const saved_sound_volume = retfings$game$Core$Audio$$get_sound_volume();
  const saved_music_volume = retfings$game$Core$Audio$$get_music_volume();
  let _tmp;
  const _p = "";
  if (!(saved_sound_volume === _p)) {
    _tmp = retfings$game$Core$Panels$$new$46$parse_volume$124$45(saved_sound_volume);
  } else {
    _tmp = 0.5;
  }
  const _tmp$2 = _tmp;
  let _tmp$3;
  const _p$2 = "";
  if (!(saved_music_volume === _p$2)) {
    _tmp$3 = retfings$game$Core$Panels$$new$46$parse_volume$124$45(saved_music_volume);
  } else {
    _tmp$3 = 0.5;
  }
  return { is_open: false, x: x, y: y, w: 800, h: 600, button_width: 60, button_height: 60, large_button_width: 400, large_button_height: 80, slider_width: 200, slider_height: 20, slider_y_offset: 120, sound_volume: _tmp$2, music_volume: _tmp$3, dragging_sound_slider: false, dragging_music_slider: false, exit_button_x: start_x, exit_button_y: exit_button_y, help_button_x: help_button_x, help_button_y: help_button_y, restart_button_x: restart_button_x, restart_button_y: restart_button_y, continue_button_x: continue_button_x, continue_button_y: continue_button_y, sound_slider_x: sound_slider_x, sound_logo_x: sound_slider_x, music_slider_x: music_slider_x, music_logo_x: music_slider_x, slider_y: slider_y, clear_cache_x: clear_cache_x, clear_cache_y: clear_cache_y, data: retfings$game$Core$Panels$$create_panel_data(1), show_help_Panel: false };
}
function retfings$game$Core$Panels$$MenuPanel$get_instance() {
  const _bind = retfings$game$Core$Panels$$menuPanelInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Panels$$MenuPanel$new();
    retfings$game$Core$Panels$$menuPanelInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Panels$$MenuPanel$close(self) {
  self.is_open = false;
  self.dragging_sound_slider = false;
  self.dragging_music_slider = false;
  self.show_help_Panel = false;
}
function retfings$game$Core$Panels$$MenuPanel$set_sound_volume(self, volume) {
  const _p = 0;
  const _p$2 = 1;
  const _p$3 = _p$2 > volume ? volume : _p$2;
  self.sound_volume = _p > _p$3 ? _p : _p$3;
  retfings$game$Core$Audio$$set_sound_volume(self.sound_volume);
}
function retfings$game$Core$Panels$$MenuPanel$set_music_volume(self, volume) {
  const _p = 0;
  const _p$2 = 1;
  const _p$3 = _p$2 > volume ? volume : _p$2;
  self.music_volume = _p > _p$3 ? _p : _p$3;
  retfings$game$Core$Audio$$set_music_volume(self.music_volume);
}
function retfings$game$Controllers$TopBarController$$WaveProgressBarController$new() {
  ({});
}
function retfings$game$Controllers$TopBarController$$WaveProgressBarController$get_instance() {
  const _bind = retfings$game$Controllers$TopBarController$$waveProgressBarControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TopBarController$$WaveProgressBarController$new();
    retfings$game$Controllers$TopBarController$$waveProgressBarControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TopBarController$$WaveProgressBarController$update(self, dt) {
  const wave_config = retfings$game$Core$Map$$enemyWaveConfigSingleton();
  retfings$game$Core$TopBar$$waveProgressBarSingleton.curWave = wave_config.cur_wave + 0;
  if (wave_config.path_wave_configs.length > 0) {
    retfings$game$Core$TopBar$$waveProgressBarSingleton.maxWave = moonbitlang$core$array$$Array$at$134$(wave_config.path_wave_configs, 0).waves.length + 0;
  } else {
    retfings$game$Core$TopBar$$waveProgressBarSingleton.maxWave = 0;
  }
}
function retfings$game$Controllers$TopBarController$$SpeedController$new() {
  ({});
}
function retfings$game$Controllers$TopBarController$$SpeedController$get_instance() {
  const _bind = retfings$game$Controllers$TopBarController$$speedControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TopBarController$$SpeedController$new();
    retfings$game$Controllers$TopBarController$$speedControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TopBarController$$SpeedController$set_time_scale(_self, s) {
  retfings$game$Core$TopBar$$speedButtonSingleton.time_scale = s;
}
function retfings$game$Controllers$TopBarController$$SpeedController$reset(self) {
  retfings$game$Controllers$TopBarController$$SpeedController$set_time_scale(self, 1);
  retfings$game$Core$TopBar$$speedButtonSingleton.start_speed_mode = false;
}
function retfings$game$Controllers$TopBarController$$SpeedController$handle_input_point(_self) {
  if (retfings$game$Core$TopBar$$speedButtonSingleton.start_speed_mode) {
    retfings$game$Core$TopBar$$speedButtonSingleton.time_scale = 1;
    retfings$game$Core$TopBar$$speedButtonSingleton.start_speed_mode = false;
    return;
  } else {
    retfings$game$Core$TopBar$$speedButtonSingleton.time_scale = 2;
    retfings$game$Core$TopBar$$speedButtonSingleton.start_speed_mode = true;
    return;
  }
}
function retfings$game$Controllers$TopBarController$$SpeedController$click_speed_button(_self, point) {
  return point.x > retfings$game$Core$TopBar$$speedButtonSingleton.x && (point.x < retfings$game$Core$TopBar$$speedButtonSingleton.w + retfings$game$Core$TopBar$$speedButtonSingleton.x && (point.y > retfings$game$Core$TopBar$$speedButtonSingleton.y && point.y < retfings$game$Core$TopBar$$speedButtonSingleton.y + retfings$game$Core$TopBar$$speedButtonSingleton.h));
}
function retfings$game$Controllers$TopBarController$$PauseController$new() {
  ({});
}
function retfings$game$Controllers$TopBarController$$PauseController$get_instance() {
  const _bind = retfings$game$Controllers$TopBarController$$pauseControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TopBarController$$PauseController$new();
    retfings$game$Controllers$TopBarController$$pauseControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TopBarController$$PauseController$click_pause_button(_self, point) {
  return point.x > retfings$game$Core$TopBar$$pauseButtonSingleton.x && (point.x < retfings$game$Core$TopBar$$pauseButtonSingleton.w + retfings$game$Core$TopBar$$pauseButtonSingleton.x && (point.y > retfings$game$Core$TopBar$$pauseButtonSingleton.y && point.y < retfings$game$Core$TopBar$$pauseButtonSingleton.y + retfings$game$Core$TopBar$$pauseButtonSingleton.h));
}
function retfings$game$Controllers$TopBarController$$PauseController$handle_input_point(_self) {
  retfings$game$Core$TopBar$$pauseButtonSingleton.is_pause = !retfings$game$Core$TopBar$$pauseButtonSingleton.is_pause;
}
function retfings$game$Controllers$TopBarController$$MenuButtonController$new() {
  ({});
}
function retfings$game$Controllers$TopBarController$$MenuButtonController$get_instance() {
  const _bind = retfings$game$Controllers$TopBarController$$menuButtonControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TopBarController$$MenuButtonController$new();
    retfings$game$Controllers$TopBarController$$menuButtonControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TopBarController$$MenuButtonController$click_menu_button(self, point) {
  return point.x > retfings$game$Core$TopBar$$menuButtonSingleton.x && (point.x < retfings$game$Core$TopBar$$menuButtonSingleton.x + retfings$game$Core$TopBar$$menuButtonSingleton.w && (point.y > retfings$game$Core$TopBar$$menuButtonSingleton.y && point.y < retfings$game$Core$TopBar$$menuButtonSingleton.y + retfings$game$Core$TopBar$$menuButtonSingleton.h));
}
function retfings$game$Controllers$TopBarController$$MenuButtonController$handle_input_point(self) {
  retfings$game$Core$Panels$$menuPanelSingleton.is_open = true;
}
function retfings$game$Controllers$TopBarController$$HDUController$new() {
  ({});
}
function retfings$game$Controllers$TopBarController$$HDUController$get_instance() {
  const _bind = retfings$game$Controllers$TopBarController$$hduControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TopBarController$$HDUController$new();
    retfings$game$Controllers$TopBarController$$hduControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TopBarController$$HDUController$add_gold(self, amount) {
  retfings$game$Core$TopBar$$hduSingleton.gold = retfings$game$Core$TopBar$$hduSingleton.gold + amount;
}
function retfings$game$Controllers$TopBarController$$HDUController$spend_gold(self, amount) {
  const can_spend = retfings$game$Core$TopBar$$hduSingleton.gold - amount > 0;
  if (retfings$game$Core$TopBar$$hduSingleton.gold - amount > 0) {
    retfings$game$Core$TopBar$$hduSingleton.gold = retfings$game$Core$TopBar$$hduSingleton.gold - amount;
  }
  return can_spend;
}
function retfings$game$Core$Sprite$HP$$HP$new() {
  return { hp: 3, max_hp: 3 };
}
function retfings$game$Core$Sprite$HP$$HP$get_instance() {
  const _bind = retfings$game$Core$Sprite$HP$$hPInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Sprite$HP$$HP$new();
    retfings$game$Core$Sprite$HP$$hPInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Pages$$WinPage$new() {
  const canvas_width = retfings$game$Core$$map.width;
  const canvas_height = retfings$game$Core$$map.height;
  const replay_x = (canvas_width - 200) / 2;
  const next_level_x = (canvas_width - 200) / 2;
  const replay_y = canvas_height / 2 - 50 - 10 + 50;
  const next_level_y = canvas_height / 2 + 10 + 50;
  return { is_open: false, star_count: 0, select_level_button_x: replay_x, select_level_button_y: replay_y, select_level_button_w: 200, select_level_button_h: 50, select_level_button_padding: 10, select_level_button_margin: 20, select_level_button_click: false, next_level_button_x: next_level_x, next_level_button_y: next_level_y, next_level_button_w: 200, next_level_button_h: 50, next_level_button_padding: 10, next_level_button_margin: 20, next_level_button_click: false };
}
function retfings$game$Core$Pages$$WinPage$get_instance() {
  const _bind = retfings$game$Core$Pages$$winPageInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Pages$$WinPage$new();
    retfings$game$Core$Pages$$winPageInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Pages$$SelectLevelPage$new() {
  return { unlocked_levels: [1], total_levels: retfings$game$Core$Map$$get_level_count(), current_level: 1, is_open: false, next_level_unlocked: false, unlock_animation_progress: 0 };
}
function retfings$game$Core$Pages$$SelectLevelPage$get_instance() {
  const _bind = retfings$game$Core$Pages$$selectLevelPageInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Pages$$SelectLevelPage$new();
    retfings$game$Core$Pages$$selectLevelPageInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$Pages$$SelectLevelPage$is_level_unlocked(self, level) {
  return moonbitlang$core$array$$Array$contains$27$(self.unlocked_levels, level);
}
function retfings$game$Core$Pages$$LosePage$new() {
  const canvas_width = retfings$game$Core$$map.width;
  const canvas_height = retfings$game$Core$$map.height;
  const replay_x = (canvas_width - 200) / 2;
  const return_x = (canvas_width - 200) / 2;
  const replay_y = canvas_height / 2 - 50 - 10;
  const return_y = canvas_height / 2 + 10;
  return { is_open: false, replay_button_x: replay_x, replay_button_y: replay_y, replay_button_w: 200, replay_button_h: 50, replay_button_padding: 10, replay_button_margin: 20, replay_button_click: false, return_button_x: return_x, return_button_y: return_y, return_button_w: 200, return_button_h: 50, return_button_padding: 10, return_button_margin: 20, return_button_click: false };
}
function retfings$game$Core$Pages$$LosePage$get_instance() {
  const _bind = retfings$game$Core$Pages$$losePageInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$Pages$$LosePage$new();
    retfings$game$Core$Pages$$losePageInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Controllers$NeutralElementController$$WeedNeutralElementController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$WeedNeutralElementController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$weedNeutralElementControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$WeedNeutralElementController$new();
    retfings$game$Controllers$NeutralElementController$$weedNeutralElementControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$WeedNeutralElementController$update(self, dt) {}
function retfings$game$Controllers$NeutralElementController$$TreasureChestNeutralElementController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$TreasureChestNeutralElementController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$treasureChestNeutralElementControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$TreasureChestNeutralElementController$new();
    retfings$game$Controllers$NeutralElementController$$treasureChestNeutralElementControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$TreasureChestNeutralElementController$update(self, dt) {}
function retfings$game$Controllers$NeutralElementController$$StoneNeutralElementController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$StoneNeutralElementController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$stoneNeutralElementControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$StoneNeutralElementController$new();
    retfings$game$Controllers$NeutralElementController$$stoneNeutralElementControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$StoneNeutralElementController$update(self, dt) {}
function retfings$game$Controllers$NeutralElementController$$SlotMachineNeutralElementController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$SlotMachineNeutralElementController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$slotMachineNeutralElementControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$SlotMachineNeutralElementController$new();
    retfings$game$Controllers$NeutralElementController$$slotMachineNeutralElementControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$SlotMachineNeutralElementController$update(self, dt) {}
function retfings$game$Controllers$NeutralElementController$$SearchLightController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$SearchLightController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$searchLightControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$SearchLightController$new();
    retfings$game$Controllers$NeutralElementController$$searchLightControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$SearchLightController$update(self, dt) {}
function retfings$game$Controllers$NeutralElementController$$NeutralElementController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$NeutralElementController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$neutralElementControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$NeutralElementController$new();
    retfings$game$Controllers$NeutralElementController$$neutralElementControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$ConveyorBeltNeutralElementController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$ConveyorBeltNeutralElementController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$conveyorBeltNeutralElementControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$ConveyorBeltNeutralElementController$new();
    retfings$game$Controllers$NeutralElementController$$conveyorBeltNeutralElementControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$EnergyLightController$new() {
  ({});
}
function retfings$game$Controllers$NeutralElementController$$EnergyLightController$get_instance() {
  const _bind = retfings$game$Controllers$NeutralElementController$$energyLightControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$NeutralElementController$$EnergyLightController$new();
    retfings$game$Controllers$NeutralElementController$$energyLightControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$NeutralElementController$$ConveyorBeltNeutralElementController$update(self, dt) {}
function retfings$game$Controllers$NeutralElementController$$EnergyLightController$update(self, dt) {}
function retfings$game$Controllers$NeutralElementController$$NeutralElementController$update(self, dt) {
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.neutralElement;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      const _bind = e.method_2(e.self);
      switch (_bind) {
        case 3: {
          retfings$game$Controllers$NeutralElementController$$WeedNeutralElementController$update(retfings$game$Controllers$NeutralElementController$$weedNeutralElementControllerSingleton, dt);
          break;
        }
        case 1: {
          retfings$game$Controllers$NeutralElementController$$SlotMachineNeutralElementController$update(retfings$game$Controllers$NeutralElementController$$slotMachineNeutralElementControllerSingleton, dt);
          break;
        }
        case 0: {
          retfings$game$Controllers$NeutralElementController$$StoneNeutralElementController$update(retfings$game$Controllers$NeutralElementController$$stoneNeutralElementControllerSingleton, dt);
          break;
        }
        case 2: {
          retfings$game$Controllers$NeutralElementController$$TreasureChestNeutralElementController$update(retfings$game$Controllers$NeutralElementController$$treasureChestNeutralElementControllerSingleton, dt);
          break;
        }
        case 4: {
          retfings$game$Controllers$NeutralElementController$$ConveyorBeltNeutralElementController$update(retfings$game$Controllers$NeutralElementController$$conveyorBeltNeutralElementControllerSingleton, dt);
          break;
        }
        case 5: {
          retfings$game$Controllers$NeutralElementController$$SearchLightController$update(retfings$game$Controllers$NeutralElementController$$searchLightControllerSingleton, dt);
          break;
        }
        default: {
          retfings$game$Controllers$NeutralElementController$$EnergyLightController$update(retfings$game$Controllers$NeutralElementController$$energyLightControllerSingleton, dt);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$NeutralElementController$$switch_level(level) {
  retfings$game$Core$Map$$set_neutral_element_by_level(level);
}
function retfings$game$Controllers$NeutralElementController$$handle_input_point(point) {
  const cp = retfings$game$Core$Map$$MapGridSystem$pixel2cent(retfings$game$Core$Map$$map_grid_system_singleton, point);
  if (retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.last_center_x === -1) {
    retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.last_center_x = cp._0;
  }
  if (retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.last_center_y === -1) {
    retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.last_center_y = cp._1;
  }
  retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_x = cp._0;
  retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_y = cp._1;
  moonbitlang$core$builtin$$println$144$(`x:${String(retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_x)}`);
  moonbitlang$core$builtin$$println$144$(`y:${String(retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_y)}`);
  if (retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_x !== -1 && retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_y !== -1) {
    retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.render_attack_tips = true;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$MapController$$click_disabled(point) {
  moonbitlang$core$builtin$$println$144$(retfings$game$Core$Point$$PixelPoint$to_string(point));
  if (retfings$game$Core$Map$$click_disabled_tips.val.length === 0) {
    moonbitlang$core$array$$Array$insert$161$(retfings$game$Core$Map$$click_disabled_tips.val, 0, { placed_tips: true, placed_tips_points: point, show_ms: 1500, dt: 0, global_alpha: 1 });
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$MapController$$update_tip(dt) {
  const _arr = retfings$game$Core$Map$$click_disabled_tips.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const t = _arr[_i];
        t.dt = t.dt + dt;
        if (t.dt > t.show_ms) {
          t.placed_tips = false;
          break _L;
        }
        t.global_alpha = 1 - t.dt / t.show_ms;
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p = retfings$game$Core$Map$$click_disabled_tips.val;
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (_p$5.placed_tips) {
        moonbitlang$core$array$$Array$push$161$(_p$2, _p$5);
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Map$$click_disabled_tips.val = _p$2;
}
function retfings$game$Controllers$MapController$$MapController$new() {
  ({});
}
function retfings$game$Controllers$MapController$$MapController$get_instance() {
  const _bind = retfings$game$Controllers$MapController$$mapControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$MapController$$MapController$new();
    retfings$game$Controllers$MapController$$mapControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$MapController$$MapController$update(self, dt) {
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.neutralElement;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const ne = _arr[_i];
      ne.method_1(ne.self);
      retfings$game$Core$Map$$MapGridSystem$placed_neutral_element(retfings$game$Core$Map$$map_grid_system_singleton, moonbitlang$core$double$$Double$to_int(ne.method_0(ne.self).x), moonbitlang$core$double$$Double$to_int(ne.method_0(ne.self).y));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Controllers$MapController$$update_tip(dt);
}
function retfings$game$Controllers$MapController$$MapController$placed(self, point) {
  const bp = retfings$game$Core$Map$$MapGridSystem$to_base_point(retfings$game$Core$Map$$map_grid_system_singleton, point);
  return retfings$game$Core$Map$$MapGridSystem$is_placed(retfings$game$Core$Map$$map_grid_system_singleton, moonbitlang$core$double$$Double$to_int(bp.x), moonbitlang$core$double$$Double$to_int(bp.y));
}
function retfings$game$Controllers$MapController$$MapController$map_type(self, point) {
  const bp = retfings$game$Core$Map$$MapGridSystem$to_base_point(retfings$game$Core$Map$$map_grid_system_singleton, point);
  const x = bp.x;
  const y = bp.y;
  return retfings$game$Core$Map$$map_grid_system_singleton.grid.length > 0 && (y >= 0 && (y < retfings$game$Core$Map$$map_grid_system_singleton.grid.length + 0 && (x >= 0 && x < moonbitlang$core$array$$Array$at$138$(retfings$game$Core$Map$$map_grid_system_singleton.grid, 0).length + 0))) ? moonbitlang$core$array$$Array$at$139$(moonbitlang$core$array$$Array$at$138$(retfings$game$Core$Map$$map_grid_system_singleton.grid, moonbitlang$core$double$$Double$to_int(y)), moonbitlang$core$double$$Double$to_int(x)) : 0;
}
function retfings$game$Controllers$MapController$$switch_level(l) {
  const wc = retfings$game$Core$Map$$enemyWaveConfigSingleton();
  retfings$game$Core$Map$$EnemyWaveConfig$set_level(wc, l);
  retfings$game$Core$Map$$set_path_by_level(l);
  retfings$game$Core$Panels$$set_available_tower_by_level(l);
  retfings$game$Controllers$NeutralElementController$$switch_level(l);
  retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen = false;
  retfings$game$Core$Pages$$winPageSingleton.select_level_button_click = false;
  retfings$game$Core$Map$$MapLevel$set_cur_level(retfings$game$Core$Map$$mapLevelSingleton, l);
  retfings$game$Core$TopBar$$HDU$set_HDU_by_level(retfings$game$Core$TopBar$$hduSingleton, l);
  retfings$game$Core$Sprite$HP$$hPSingleton.hp = retfings$game$Core$Sprite$HP$$hPSingleton.max_hp;
  retfings$game$Core$Map$$MapGridSystem$clear_all_towers(retfings$game$Core$Map$$map_grid_system_singleton);
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      e.method_2(e.self, e.method_5(e.self));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Map$$map_grid_system_singleton.enemy = [];
  retfings$game$Controllers$TopBarController$$SpeedController$reset(retfings$game$Controllers$TopBarController$$speedControllerSingleton);
  retfings$game$Core$Panels$$menuPanelSingleton.data = retfings$game$Core$Panels$$create_panel_data(l);
}
function retfings$game$Controllers$HPController$$HPController$new() {
  ({});
}
function retfings$game$Controllers$HPController$$HPController$get_instance() {
  const _bind = retfings$game$Controllers$HPController$$hPControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$HPController$$HPController$new();
    retfings$game$Controllers$HPController$$hPControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$HPController$$HPController$hd_damage(self) {
  retfings$game$Core$Sprite$HP$$hPSingleton.hp = retfings$game$Core$Sprite$HP$$hPSingleton.hp - 1;
}
function retfings$game$Controllers$EnemyController$$VirusEnemyController$new() {
  ({});
}
function retfings$game$Controllers$EnemyController$$VirusEnemyController$get_instance() {
  const _bind = retfings$game$Controllers$EnemyController$$virusEnemyControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$EnemyController$$VirusEnemyController$new();
    retfings$game$Controllers$EnemyController$$virusEnemyControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$EnemyController$$VirusEnemyController$on_enemy_died(self, e, dt, timestamp) {
  const move_path = e.method_6(e.self);
  let _is_corner_point;
  if (e.method_7(e.self) < 2) {
    _is_corner_point = false;
  } else {
    const pre = moonbitlang$core$array$$Array$at$136$(move_path, e.method_7(e.self) - 2 | 0);
    const cur = moonbitlang$core$array$$Array$at$136$(move_path, e.method_7(e.self) - 1 | 0);
    const next = moonbitlang$core$array$$Array$at$136$(move_path, e.method_7(e.self));
    _is_corner_point = !(pre.x === cur.x && cur.x === next.x) && !(pre.y === cur.y && cur.y === next.y);
  }
  const cur = moonbitlang$core$array$$Array$at$136$(move_path, e.method_7(e.self) - 1 | 0);
  const next = moonbitlang$core$array$$Array$at$136$(move_path, e.method_7(e.self));
  let is_skip_point = false;
  if ((e.method_7(e.self) + 1 | 0) < move_path.length) {
    const nnext = moonbitlang$core$array$$Array$at$136$(move_path, e.method_7(e.self) + 1 | 0);
    if (next.x !== nnext.x && next.y !== nnext.y) {
      is_skip_point = true;
    }
  }
  const x = e.method_0(e.self).x;
  const y = e.method_0(e.self).y;
  let x1 = -1;
  let x2 = -1;
  let y1 = -1;
  let y2 = -1;
  const r = retfings$game$Core$$map.gridSize;
  if (cur.y === next.y && cur.x < next.x) {
    x1 = x - r > cur.x * r ? x - r : x;
    x2 = x + r < next.x * r ? x + r : x;
    y1 = y;
    y2 = y;
  } else {
    if (cur.y === next.y && cur.x > next.x) {
      x1 = x - r < cur.x * r ? x - r : x;
      x2 = x + r > next.x * r ? x + r : x;
      y1 = y;
      y2 = y;
    } else {
      if (cur.x === next.x && cur.y < next.y) {
        y1 = y - r > cur.y * r ? y - r : y;
        y2 = y + r < next.y * r ? y + r : y;
        x1 = x;
        x2 = x;
      } else {
        if (cur.x === next.x && cur.y > next.y) {
          y1 = y - r < cur.y * r ? y - r : y;
          y2 = y + r > next.y * r ? y + r : y;
          x1 = x;
          x2 = x;
        }
      }
    }
  }
  if (is_skip_point) {
    if (cur.y === next.y && cur.x < next.x) {
      x1 = x - r > cur.x * r ? x - r : x;
      x2 = x + r < next.x * r ? x + r : x;
      y1 = y;
      y2 = y;
    } else {
      if (cur.y === next.y && cur.x > next.x) {
        x1 = x - r < cur.x * r ? x + r : x;
        x2 = x + r > next.x * r ? x - r : x;
        y1 = y;
        y2 = y;
      } else {
        if (cur.x === next.x && cur.y < next.y) {
          y1 = y - r > cur.y * r ? y - r : y;
          y2 = y + r < next.y * r ? y + r : y;
          x1 = x;
          x2 = x;
        } else {
          if (cur.x === next.x && cur.y > next.y) {
            y1 = y - r < cur.y * r ? y + r : y;
            y2 = y + r > next.y * r ? y - r : y;
            x1 = x;
            x2 = x;
          }
        }
      }
    }
  }
  const e1 = retfings$game$Core$Sprite$Enemy$$VirusEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(x1, y1), 50, 20);
  const e2 = retfings$game$Core$Sprite$Enemy$$VirusEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(x2, y2), 50, 20);
  e1.move_path = e.method_6(e.self);
  e2.move_path = e.method_6(e.self);
  retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$169$(e1, e.method_7(e.self));
  retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$169$(e2, e.method_7(e.self));
  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$(e1, e.method_9(e.self));
  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$(e2, e.method_9(e.self));
  retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$169$(e1, e.method_20(e.self));
  retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$169$(e2, e.method_20(e.self));
  retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$169$(e1, true);
  retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$169$(e2, true);
  retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$169$(e1, 3);
  retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$169$(e2, 3);
  e.method_13(e.self, { x1: x, y1: y, x2: x1, y2: y1, x3: x2, y3: y2, start_time: timestamp, total_time: 1500, finished: false, enemy_id1: e1.id, enemy_id2: e2.id });
  return [{ self: e1, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$169$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$169$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$169$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$185$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$169$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$169$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$169$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$169$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$169$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$169$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$169$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$185$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$169$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$169$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$169$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$169$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$185$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$169$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$169$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$169$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$169$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$169$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$185$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$185$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$169$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$169$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$169$ }, { self: e2, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$169$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$169$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$169$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$185$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$169$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$169$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$169$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$169$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$169$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$169$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$169$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$185$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$169$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$169$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$169$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$169$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$185$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$169$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$169$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$169$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$169$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$169$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$185$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$185$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$169$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$169$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$169$ }];
}
function retfings$game$Controllers$EnemyController$$EnemyController$new() {
  ({});
}
function retfings$game$Controllers$EnemyController$$EnemyController$get_instance() {
  const _bind = retfings$game$Controllers$EnemyController$$enemyControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$EnemyController$$EnemyController$new();
    retfings$game$Controllers$EnemyController$$enemyControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$EnemyController$$EnemyController$update_move(self, dt) {
  const dt_sec = dt / 1000;
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const e = _arr[_i];
        const pixels_per_s = e.method_20(e.self);
        let should_skip = false;
        const _bind = e.method_11(e.self);
        if (_bind === 6) {
          const _arr$2 = retfings$game$Core$Sprite$Enemy$$divide_effects.val;
          const _len$2 = _arr$2.length;
          let _tmp$2 = 0;
          while (true) {
            const _i$2 = _tmp$2;
            if (_i$2 < _len$2) {
              const va = _arr$2[_i$2];
              if (!va.finished && e.method_15(e.self) === va.enemy_id1) {
                should_skip = true;
                break;
              }
              if (!va.finished && e.method_15(e.self) === va.enemy_id2) {
                should_skip = true;
                break;
              }
              _tmp$2 = _i$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        if (should_skip) {
          break _L;
        }
        const current_path_point = moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), e.method_7(e.self));
        const target_x = (current_path_point.x + 0.5) * retfings$game$Core$$map.gridSize;
        const target_y = (current_path_point.y + 0.5) * retfings$game$Core$$map.gridSize;
        let has_jumped = false;
        if (Math.abs(moonbitlang$core$double$$Double$round(e.method_0(e.self).x) - target_x) === 0 && Math.abs(moonbitlang$core$double$$Double$round(e.method_0(e.self).y) - target_y) === 0) {
          const next_point_index = e.method_7(e.self) + 1 | 0;
          if (next_point_index < e.method_6(e.self).length && moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), next_point_index).is_jump_point) {
            const jump_point = moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), next_point_index);
            const jump_x = (jump_point.x + 0.5) * retfings$game$Core$$map.gridSize;
            const jump_y = (jump_point.y + 0.5) * retfings$game$Core$$map.gridSize;
            e.method_0(e.self).x = jump_x;
            e.method_0(e.self).y = jump_y;
            e.method_8(e.self, next_point_index);
            if ((next_point_index + 1 | 0) < e.method_6(e.self).length) {
              e.method_10(e.self, moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), next_point_index + 1 | 0));
            } else {
              e.method_10(e.self, moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), next_point_index));
            }
            has_jumped = true;
          } else {
            if (next_point_index < e.method_6(e.self).length) {
              e.method_8(e.self, next_point_index);
              if ((next_point_index + 1 | 0) < e.method_6(e.self).length) {
                e.method_10(e.self, moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), next_point_index + 1 | 0));
              } else {
                e.method_10(e.self, moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), next_point_index));
              }
            }
          }
        }
        if (!has_jumped && e.method_7(e.self) < e.method_6(e.self).length) {
          const current_path_point$2 = moonbitlang$core$array$$Array$at$136$(e.method_6(e.self), e.method_7(e.self));
          const target_x$2 = (current_path_point$2.x + 0.5) * retfings$game$Core$$map.gridSize;
          const target_y$2 = (current_path_point$2.y + 0.5) * retfings$game$Core$$map.gridSize;
          const move_distance = pixels_per_s * dt_sec;
          const x_distance = Math.abs(target_x$2 - e.method_0(e.self).x);
          if (x_distance > 0) {
            if (target_x$2 > e.method_0(e.self).x) {
              if (move_distance < x_distance) {
                const _bind$2 = e.method_0(e.self);
                _bind$2.x = _bind$2.x + move_distance;
              } else {
                e.method_0(e.self).x = target_x$2;
              }
            } else {
              if (target_x$2 < e.method_0(e.self).x) {
                if (move_distance < x_distance) {
                  const _bind$2 = e.method_0(e.self);
                  _bind$2.x = _bind$2.x - move_distance;
                } else {
                  e.method_0(e.self).x = target_x$2;
                }
              }
            }
          }
          const y_distance = Math.abs(target_y$2 - e.method_0(e.self).y);
          if (y_distance > 0) {
            if (target_y$2 > e.method_0(e.self).y) {
              if (move_distance < y_distance) {
                const _bind$2 = e.method_0(e.self);
                _bind$2.y = _bind$2.y + move_distance;
              } else {
                e.method_0(e.self).y = target_y$2;
              }
            } else {
              if (target_y$2 < e.method_0(e.self).y) {
                if (move_distance < y_distance) {
                  const _bind$2 = e.method_0(e.self);
                  _bind$2.y = _bind$2.y - move_distance;
                } else {
                  e.method_0(e.self).y = target_y$2;
                }
              }
            }
          }
        }
        const path_points = e.method_6(e.self);
        const endPoint = path_points.length > 0 ? moonbitlang$core$array$$Array$at$136$(path_points, path_points.length - 1 | 0) : retfings$game$Core$Point$$PathPoint$new$46$inner(0, 0);
        const ex = (endPoint.x + 0.5) * retfings$game$Core$$map.gridSize;
        const ey = (endPoint.y + 0.5) * retfings$game$Core$$map.gridSize;
        if (moonbitlang$core$double$$Double$round(e.method_0(e.self).x) === ex && moonbitlang$core$double$$Double$round(e.method_0(e.self).y) === ey) {
          e.method_2(e.self, e.method_5(e.self));
          retfings$game$Controllers$HPController$$HPController$hd_damage(retfings$game$Controllers$HPController$$hPControllerSingleton);
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
function retfings$game$Controllers$EnemyController$$EnemyController$update_wave(self, dt) {
  const wave_config = retfings$game$Core$Map$$enemyWaveConfigSingleton();
  const _arr = wave_config.path_wave_configs;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const path_config = _arr[_i];
      const path_id = path_config.path_id;
      const path_waves = path_config.waves;
      if (wave_config.cur_wave <= path_waves.length) {
        const current_wave = moonbitlang$core$array$$Array$at$142$(path_waves, wave_config.cur_wave - 1 | 0);
        if (current_wave.enemy_count < current_wave.max_enemies) {
          current_wave.cur_d_t = current_wave.cur_d_t + dt;
          moonbitlang$core$array$$Array$at$142$(path_waves, wave_config.cur_wave - 1 | 0).is_start = true;
          if (current_wave.cur_d_t >= current_wave.spawn_timer) {
            const map_path = retfings$game$Core$Map$$MapPath$get_instance();
            const path_option = retfings$game$Core$Map$$MapPath$get_path(map_path, path_id);
            let first_point;
            if (path_option.$tag === 1) {
              const _Some = path_option;
              const _points = _Some._0;
              first_point = _points.length > 0 ? moonbitlang$core$array$$Array$at$136$(_points, 0) : retfings$game$Core$Point$$PathPoint$new$46$inner(0, 0);
            } else {
              first_point = retfings$game$Core$Point$$PathPoint$new$46$inner(0, 0);
            }
            const p = retfings$game$Core$Map$$MapGridSystem$to_enemy_position(retfings$game$Core$Map$$map_grid_system_singleton, retfings$game$Core$Point$$BasePoint$new$46$inner(first_point.x, first_point.y));
            let path_points;
            if (path_option.$tag === 1) {
              const _Some = path_option;
              path_points = _Some._0;
            } else {
              path_points = moonbitlang$core$array$$Array$new$46$inner$136$(0);
            }
            const _bind = current_wave.enemy_type;
            switch (_bind) {
              case 0: {
                const e = retfings$game$Core$Sprite$Enemy$$KangarooEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$173$(e, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$173$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$173$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$173$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$176$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$173$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$173$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$173$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$173$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$173$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$173$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$173$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$173$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$176$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$176$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$176$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$173$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$173$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$176$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$173$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$173$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$173$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$173$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$176$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$176$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$176$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$173$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$173$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$173$ });
                break;
              }
              case 1: {
                const e$2 = retfings$game$Core$Sprite$Enemy$$FlyingEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$2.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$175$(e$2, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$2, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$175$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$175$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$175$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$175$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$175$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$175$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$175$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$175$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$175$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$175$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$175$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$175$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$177$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$177$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$177$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$175$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$175$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$177$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$175$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$175$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$175$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$175$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$177$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$177$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$177$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$175$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$175$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$175$ });
                break;
              }
              case 3: {
                const e$3 = retfings$game$Core$Sprite$Enemy$$GroundEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 200, 20);
                e$3.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$174$(e$3, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$3, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$174$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$174$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$174$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$178$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$174$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$174$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$174$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$174$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$174$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$174$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$174$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$174$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$178$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$178$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$178$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$174$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$174$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$178$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$174$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$174$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$174$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$174$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$178$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$178$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$178$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$174$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$174$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$174$ });
                break;
              }
              case 5: {
                const e$4 = retfings$game$Core$Sprite$Enemy$$CaterpillarEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$4.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$186$(e$4, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$4, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$186$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$186$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$186$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$179$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$186$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$186$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$186$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$186$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$186$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$186$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$186$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$186$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$179$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$179$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$179$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$186$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$186$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$179$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$186$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$186$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$186$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$186$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$179$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$179$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$179$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$186$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$186$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$186$ });
                break;
              }
              case 6: {
                const e$5 = retfings$game$Core$Sprite$Enemy$$VirusEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$5.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$(e$5, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$5, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$169$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$169$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$169$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$185$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$169$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$169$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$169$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$169$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$169$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$169$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$169$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$185$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$169$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$169$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$169$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$169$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$185$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$169$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$169$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$169$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$169$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$169$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$185$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$185$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$169$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$169$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$169$ });
                break;
              }
              case 7: {
                const e$6 = retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 60);
                e$6.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$(e$6, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$6, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$187$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$187$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$187$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$ });
                break;
              }
              case 4: {
                const e$7 = retfings$game$Core$Sprite$Enemy$$TurtleEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$7.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$171$(e$7, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$7, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$171$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$171$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$171$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$181$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$171$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$171$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$171$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$171$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$171$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$171$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$171$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$171$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$181$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$181$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$181$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$171$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$171$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$181$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$171$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$171$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$171$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$171$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$181$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$181$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$181$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$171$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$171$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$171$ });
                break;
              }
              case 2: {
                const e$8 = retfings$game$Core$Sprite$Enemy$$EggsEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$8.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$188$(e$8, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$8, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$188$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$188$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$188$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$182$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$188$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$188$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$188$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$188$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$188$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$188$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$188$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$188$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$182$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$182$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$182$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$188$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$188$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$182$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$188$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$188$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$188$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$188$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$182$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$182$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$182$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$188$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$188$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$188$ });
                break;
              }
              case 8: {
                const e$9 = retfings$game$Core$Sprite$Enemy$$MechaEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$9.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$172$(e$9, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$9, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$172$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$172$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$172$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$183$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$172$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$172$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$172$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$172$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$172$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$172$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$172$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$172$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$183$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$183$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$183$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$172$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$172$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$183$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$172$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$172$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$172$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$172$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$183$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$183$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$183$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$172$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$172$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$172$ });
                break;
              }
              case 9: {
                const e$10 = retfings$game$Core$Sprite$Enemy$$UFOEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$10.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$170$(e$10, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$10, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$170$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$170$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$170$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$184$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$170$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$170$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$170$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$170$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$170$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$170$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$170$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$170$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$184$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$184$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$184$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$170$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$170$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$184$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$170$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$170$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$170$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$170$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$184$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$184$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$184$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$170$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$170$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$170$ });
                break;
              }
              default: {
                const e$11 = retfings$game$Core$Sprite$Enemy$$UFOEnemy$new$46$inner(retfings$game$Core$Point$$EnemyPoint$new$46$inner(p.x, p.y), 100, 20);
                e$11.move_path = path_points;
                if (path_points.length >= 2) {
                  retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$170$(e$11, moonbitlang$core$array$$Array$at$136$(path_points, 1));
                }
                moonbitlang$core$array$$Array$insert$133$(retfings$game$Core$Map$$map_grid_system_singleton.enemy, 0, { self: e$11, method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$170$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$170$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$170$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$184$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$170$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$170$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$170$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$170$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$170$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$170$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$170$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$170$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$184$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$184$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$184$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$170$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$170$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$184$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$170$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$170$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$170$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$170$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$184$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$184$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$184$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$170$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$170$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$170$ });
              }
            }
            current_wave.enemy_count = current_wave.enemy_count + 1 | 0;
            current_wave.cur_d_t = 0;
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let all_paths_completed = true;
  const _arr$2 = wave_config.path_wave_configs;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const path_config = _arr$2[_i];
      const path_waves = path_config.waves;
      if (wave_config.cur_wave <= path_waves.length) {
        const current_wave = moonbitlang$core$array$$Array$at$142$(path_waves, wave_config.cur_wave - 1 | 0);
        if (current_wave.enemy_count < current_wave.max_enemies || retfings$game$Core$Map$$map_grid_system_singleton.enemy.length > 0) {
          all_paths_completed = false;
          break;
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (all_paths_completed) {
    const _arr$3 = wave_config.path_wave_configs;
    const _len$3 = _arr$3.length;
    let _tmp$3 = 0;
    while (true) {
      const _i = _tmp$3;
      if (_i < _len$3) {
        const path_config = _arr$3[_i];
        const path_waves = path_config.waves;
        if (wave_config.cur_wave <= path_waves.length) {
          moonbitlang$core$array$$Array$at$142$(path_waves, wave_config.cur_wave - 1 | 0).has_enemy = false;
        }
        _tmp$3 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    wave_config.cur_wave = wave_config.cur_wave + 1 | 0;
    if (wave_config.cur_wave <= moonbitlang$core$array$$Array$at$134$(wave_config.path_wave_configs, 0).waves.length) {
      const _arr$4 = wave_config.path_wave_configs;
      const _len$4 = _arr$4.length;
      let _tmp$4 = 0;
      while (true) {
        const _i = _tmp$4;
        if (_i < _len$4) {
          const path_config = _arr$4[_i];
          const path_waves = path_config.waves;
          if (wave_config.cur_wave <= path_waves.length) {
            moonbitlang$core$array$$Array$at$142$(path_waves, wave_config.cur_wave - 1 | 0).enemy_count = 0;
            moonbitlang$core$array$$Array$at$142$(path_waves, wave_config.cur_wave - 1 | 0).cur_d_t = 0;
          }
          _tmp$4 = _i + 1 | 0;
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
function retfings$game$Controllers$EnemyController$$EnemyController$filter_died(self, dt, timestamp) {
  let enemies = moonbitlang$core$array$$Array$new$46$inner$133$(0);
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      if (e.method_1(e.self)) {
        moonbitlang$core$array$$Array$insert$133$(enemies, enemies.length, e);
      } else {
        e.method_17(e.self);
        const _bind = e.method_11(e.self);
        if (_bind === 6) {
          const _bind$2 = e.method_18(e.self);
          let _tmp$2;
          if (_bind$2 === 3) {
            _tmp$2 = true;
          } else {
            _tmp$2 = false;
          }
          if (!_tmp$2) {
            enemies = moonbitlang$core$builtin$$Add$add$166$(enemies, retfings$game$Controllers$EnemyController$$VirusEnemyController$on_enemy_died(retfings$game$Controllers$EnemyController$$virusEnemyControllerSingleton, e, dt, timestamp));
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Map$$map_grid_system_singleton.enemy = enemies;
}
function retfings$game$Controllers$EnemyController$$EnemyController$update(self, dt, timestamp) {
  retfings$game$Controllers$EnemyController$$EnemyController$update_wave(self, dt);
  retfings$game$Controllers$EnemyController$$EnemyController$filter_died(self, dt, timestamp);
  retfings$game$Controllers$EnemyController$$EnemyController$update_move(self, dt);
}
function retfings$game$Core$Math$$dist_tow_tower_point(p1, p2) {
  return moonbitlang$core$math$$hypot(Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y));
}
function retfings$game$Core$Math$$dist_enemy_tower(ep, tp) {
  return moonbitlang$core$math$$hypot(Math.abs(ep.x - tp.x), Math.abs(ep.y - tp.y));
}
function retfings$game$Core$Math$$dist_neutral_tower(ep, tp) {
  return moonbitlang$core$math$$hypot(Math.abs(ep.x - tp.x), Math.abs(ep.y - tp.y));
}
function retfings$game$Core$Math$$tower_enemy_deg(p1, p2) {
  const _p = moonbitlang$core$math$$atan2(p1.y - p2.y, p1.x - p2.x);
  return _p * 57.295779513082323;
}
function retfings$game$Controllers$TowerController$$TowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$TowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$towerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$TowerController$new();
    retfings$game$Controllers$TowerController$$towerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$BeeTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$BeeTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$beeTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$BeeTowerController$new();
    retfings$game$Controllers$TowerController$$beeTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$ChargeJarTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$ChargeJarTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$chargeJarTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$ChargeJarTowerController$new();
    retfings$game$Controllers$TowerController$$chargeJarTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$CurveTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$CurveTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$curveTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$CurveTowerController$new();
    retfings$game$Controllers$TowerController$$curveTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$LaserTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$LaserTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$laserTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$LaserTowerController$new();
    retfings$game$Controllers$TowerController$$laserTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$LightningTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$LightningTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$lightningTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$LightningTowerController$new();
    retfings$game$Controllers$TowerController$$lightningTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$negativeMagneticTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$new();
    retfings$game$Controllers$TowerController$$negativeMagneticTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$PlasmaTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$PlasmaTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$plasmaTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$PlasmaTowerController$new();
    retfings$game$Controllers$TowerController$$plasmaTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$new() {
  ({});
}
function retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$get_instance() {
  const _bind = retfings$game$Controllers$TowerController$$positiveMagneticTowerControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$new();
    retfings$game$Controllers$TowerController$$positiveMagneticTowerControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$divide_effects_pause_update(e) {
  const _bind = e.method_11(e.self);
  if (_bind === 6) {
    const _arr = retfings$game$Core$Sprite$Enemy$$divide_effects.val;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const va = _arr[_i];
        if (!va.finished && (e.method_15(e.self) === va.enemy_id1 || e.method_15(e.self) === va.enemy_id2)) {
          return true;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return false;
}
function retfings$game$Controllers$TowerController$$BeeTowerController$update_buttle(self, dt, bullet) {
  if (!bullet.alive) {
    return undefined;
  }
  const _tmp = bullet.target;
  if (!_tmp.method_1(_tmp.self)) {
    bullet.alive = false;
    return undefined;
  }
  const _tmp$2 = bullet.target;
  const target_pos = _tmp$2.method_0(_tmp$2.self);
  const dx = target_pos.x - bullet.position.x;
  const dy = target_pos.y - bullet.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 5) {
    const _tmp$3 = bullet.target;
    _tmp$3.method_2(_tmp$3.self, bullet.damage);
    const _tmp$4 = bullet.target;
    _tmp$4.method_12(_tmp$4.self, 2, bullet.posion_ms);
    bullet.alive = false;
    return undefined;
  }
  if (distance > 0) {
    const dir_x = dx / distance;
    const dir_y = dy / distance;
    const _bind = bullet.position;
    _bind.x = _bind.x + dir_x * bullet.speed * dt / 1000;
    const _bind$2 = bullet.position;
    _bind$2.y = _bind$2.y + dir_y * bullet.speed * dt / 1000;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$BeeTowerController$update(self, dt) {
  const alive_bullets = [];
  const _arr = retfings$game$Core$Sprite$Tower$$bee_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      retfings$game$Controllers$TowerController$$BeeTowerController$update_buttle(self, dt, bullet);
      if (bullet.alive) {
        moonbitlang$core$array$$Array$push$153$(alive_bullets, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$bee_tower_bullets.val = alive_bullets;
  const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const t = _arr$2[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 6) {
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            let target = Option$None$4$;
            let min_distance = 1 / 0;
            const _arr$3 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$3 = _arr$3.length;
            let _tmp$3 = 0;
            while (true) {
              const _i$2 = _tmp$3;
              if (_i$2 < _len$3) {
                _L: {
                  const e = _arr$3[_i$2];
                  if (retfings$game$Controllers$TowerController$$divide_effects_pause_update(e)) {
                    break _L;
                  }
                  const ep = e.method_0(e.self);
                  const tp = t.method_4(t.self);
                  const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                  if (dist < t.method_1(t.self) && dist < min_distance) {
                    target = new Option$Some$4$(e);
                    min_distance = dist;
                  }
                  break _L;
                }
                _tmp$3 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$2 = target;
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _enemy = _Some._0;
              const bullet = retfings$game$Core$Sprite$Tower$$BeeTowerBullet$new(retfings$game$Core$Point$$TowerPoint$new$46$inner(t.method_4(t.self).x, t.method_4(t.self).y), t.method_2(t.self), t.method_3(t.self) * 50, _enemy);
              moonbitlang$core$array$$Array$push$153$(retfings$game$Core$Sprite$Tower$$bee_tower_bullets.val, bullet);
            }
            attack_timer = attack_timer - attack_interval;
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$ChargeJarTowerController$update_buttle(self, dt, bullet) {
  if (!bullet.alive) {
    return undefined;
  }
  const _tmp = bullet.target;
  if (!_tmp.method_1(_tmp.self)) {
    bullet.alive = false;
    return undefined;
  }
  const _tmp$2 = bullet.target;
  const target_pos = _tmp$2.method_0(_tmp$2.self);
  const dx = target_pos.x - bullet.position.x;
  const dy = target_pos.y - bullet.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 5) {
    const _tmp$3 = bullet.target;
    _tmp$3.method_2(_tmp$3.self, bullet.damage);
    bullet.alive = false;
    return undefined;
  }
  if (distance > 0) {
    const dir_x = dx / distance;
    const dir_y = dy / distance;
    const _bind = bullet.position;
    _bind.x = _bind.x + dir_x * bullet.speed * dt / 1000;
    const _bind$2 = bullet.position;
    _bind$2.y = _bind$2.y + dir_y * bullet.speed * dt / 1000;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$ChargeJarTowerController$update(self, dt) {
  const alive_bullets = [];
  const _arr = retfings$game$Core$Sprite$Tower$$charge_jar_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      retfings$game$Controllers$TowerController$$ChargeJarTowerController$update_buttle(self, dt, bullet);
      if (bullet.alive) {
        moonbitlang$core$array$$Array$push$154$(alive_bullets, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$charge_jar_tower_bullets.val = alive_bullets;
  const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const t = _arr$2[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 3) {
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            let target = Option$None$4$;
            let min_distance = 1 / 0;
            const _arr$3 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$3 = _arr$3.length;
            let _tmp$3 = 0;
            while (true) {
              const _i$2 = _tmp$3;
              if (_i$2 < _len$3) {
                _L: {
                  const e = _arr$3[_i$2];
                  if (retfings$game$Controllers$TowerController$$divide_effects_pause_update(e)) {
                    break _L;
                  }
                  const ep = e.method_0(e.self);
                  const tp = t.method_4(t.self);
                  const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                  if (dist < t.method_1(t.self) && dist < min_distance) {
                    target = new Option$Some$4$(e);
                    min_distance = dist;
                  }
                  break _L;
                }
                _tmp$3 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$2 = target;
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _enemy = _Some._0;
              const bullet = retfings$game$Core$Sprite$Tower$$ChargeJarTowerBullet$new(retfings$game$Core$Point$$TowerPoint$new$46$inner(t.method_4(t.self).x, t.method_4(t.self).y), t.method_2(t.self), 200, _enemy);
              moonbitlang$core$array$$Array$push$154$(retfings$game$Core$Sprite$Tower$$charge_jar_tower_bullets.val, bullet);
            }
            attack_timer = attack_timer - attack_interval;
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$CurveTowerController$update_buttle(self, dt, bullet) {
  if (!bullet.alive) {
    return undefined;
  }
  const _tmp = bullet.target;
  if (!_tmp.method_1(_tmp.self)) {
    bullet.alive = false;
    return undefined;
  }
  const _tmp$2 = bullet.target;
  const target_pos = _tmp$2.method_0(_tmp$2.self);
  const dx = target_pos.x - bullet.position.x;
  const dy = target_pos.y - bullet.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 5) {
    const _tmp$3 = bullet.target;
    _tmp$3.method_2(_tmp$3.self, bullet.damage);
    bullet.alive = false;
    return undefined;
  }
  if (distance > 0) {
    const dir_x = dx / distance;
    const dir_y = dy / distance;
    const _bind = bullet.position;
    _bind.x = _bind.x + dir_x * bullet.speed * dt / 1000;
    const _bind$2 = bullet.position;
    _bind$2.y = _bind$2.y + dir_y * bullet.speed * dt / 1000;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$CurveTowerController$update(self, dt) {
  const alive_bullets = [];
  const _arr = retfings$game$Core$Sprite$Tower$$curve_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      retfings$game$Controllers$TowerController$$CurveTowerController$update_buttle(self, dt, bullet);
      if (bullet.alive) {
        moonbitlang$core$array$$Array$push$155$(alive_bullets, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$curve_tower_bullets.val = alive_bullets;
  const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const t = _arr$2[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 1) {
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            let target = Option$None$4$;
            let min_distance = 1 / 0;
            const _arr$3 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$3 = _arr$3.length;
            let _tmp$3 = 0;
            while (true) {
              const _i$2 = _tmp$3;
              if (_i$2 < _len$3) {
                _L: {
                  const e = _arr$3[_i$2];
                  if (retfings$game$Controllers$TowerController$$divide_effects_pause_update(e)) {
                    break _L;
                  }
                  const ep = e.method_0(e.self);
                  const tp = t.method_4(t.self);
                  const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                  if (dist < t.method_1(t.self) && dist < min_distance) {
                    target = new Option$Some$4$(e);
                    min_distance = dist;
                  }
                  break _L;
                }
                _tmp$3 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$2 = target;
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _enemy = _Some._0;
              const bullet = retfings$game$Core$Sprite$Tower$$CurveTowerBullet$new(retfings$game$Core$Point$$TowerPoint$new$46$inner(t.method_4(t.self).x, t.method_4(t.self).y), t.method_2(t.self), 200, _enemy);
              moonbitlang$core$array$$Array$push$155$(retfings$game$Core$Sprite$Tower$$curve_tower_bullets.val, bullet);
            }
            attack_timer = attack_timer - attack_interval;
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$LaserTowerController$update(self, dt) {
  const _arr = retfings$game$Core$Sprite$Tower$$laser_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const bullet = _arr[_i];
        if (!bullet.alive) {
          break _L;
        }
        const move_distance = bullet.speed * dt;
        bullet.position.x = bullet.position.x + bullet.direction.x * move_distance;
        bullet.position.y = bullet.position.y + bullet.direction.y * move_distance;
        bullet.traveled_distance = bullet.traveled_distance + move_distance;
        if (bullet.traveled_distance >= bullet.range) {
          bullet.alive = false;
          break _L;
        }
        const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
        const _len$2 = _arr$2.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const e = _arr$2[_i$2];
            const ep = e.method_0(e.self);
            const bp = bullet.position;
            const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, bp);
            if (dist < 15) {
              e.method_2(e.self, bullet.damage);
            }
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _arr$3 = retfings$game$Core$Map$$map_grid_system_singleton.neutralElement;
        const _len$3 = _arr$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _i$2 = _tmp$3;
          if (_i$2 < _len$3) {
            const ne = _arr$3[_i$2];
            const nep = ne.method_0(ne.self);
            const bp = bullet.position;
            const dist = retfings$game$Core$Math$$dist_neutral_tower(nep, bp);
            if (dist < 20) {
              ne.method_5(ne.self, bullet.damage);
            }
            _tmp$3 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const t = _arr$2[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 8) {
        moonbitlang$core$builtin$$println$14$(t.method_4(t.self).x);
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            const tp = t.method_4(t.self);
            let target_found = false;
            const _arr$3 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$3 = _arr$3.length;
            let _tmp$3 = 0;
            while (true) {
              const _i$2 = _tmp$3;
              if (_i$2 < _len$3) {
                const e = _arr$3[_i$2];
                const ep = e.method_0(e.self);
                const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                if (dist < t.method_1(t.self)) {
                  const dx = ep.x - tp.x;
                  const dy = ep.y - tp.y;
                  const magnitude = Math.sqrt(dx * dx + dy * dy);
                  const direction_x = magnitude > 0 ? dx / magnitude : 0;
                  const direction_y = magnitude > 0 ? dy / magnitude : 0;
                  const bullet = retfings$game$Core$Sprite$Tower$$LaserTowerBullet$new$46$inner(retfings$game$Core$Point$$TowerPoint$new$46$inner(tp.x, tp.y), t.method_2(t.self), 1, retfings$game$Core$Point$$TowerPoint$new$46$inner(direction_x, direction_y), t.method_1(t.self) * 10);
                  moonbitlang$core$array$$Array$push$160$(retfings$game$Core$Sprite$Tower$$laser_tower_bullets.val, bullet);
                  target_found = true;
                  break;
                }
                _tmp$3 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            attack_timer = attack_timer - attack_interval;
            if (target_found) {
            }
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$LightningTowerController$update_buttle(self, dt, bullet) {
  if (!bullet.alive) {
    return undefined;
  }
  const _tmp = bullet.target;
  if (!_tmp.method_1(_tmp.self)) {
    bullet.alive = false;
    return undefined;
  }
  const _tmp$2 = bullet.target;
  const target_pos = _tmp$2.method_0(_tmp$2.self);
  const dx = target_pos.x - bullet.position.x;
  const dy = target_pos.y - bullet.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 5) {
    const _tmp$3 = bullet.target;
    _tmp$3.method_2(_tmp$3.self, bullet.damage);
    bullet.alive = false;
    return undefined;
  }
  if (distance > 0) {
    const dir_x = dx / distance;
    const dir_y = dy / distance;
    const _bind = bullet.position;
    _bind.x = _bind.x + dir_x * bullet.speed * dt / 1000;
    const _bind$2 = bullet.position;
    _bind$2.y = _bind$2.y + dir_y * bullet.speed * dt / 1000;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$LightningTowerController$update(self, dt) {
  const alive_bullets = [];
  const _arr = retfings$game$Core$Sprite$Tower$$lightning_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      retfings$game$Controllers$TowerController$$LightningTowerController$update_buttle(self, dt, bullet);
      if (bullet.alive) {
        moonbitlang$core$array$$Array$push$156$(alive_bullets, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$lightning_tower_bullets.val = alive_bullets;
  const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const t = _arr$2[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 2) {
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            let target = Option$None$4$;
            let min_distance = 1 / 0;
            const _arr$3 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$3 = _arr$3.length;
            let _tmp$3 = 0;
            while (true) {
              const _i$2 = _tmp$3;
              if (_i$2 < _len$3) {
                _L: {
                  const e = _arr$3[_i$2];
                  if (retfings$game$Controllers$TowerController$$divide_effects_pause_update(e)) {
                    break _L;
                  }
                  const ep = e.method_0(e.self);
                  const tp = t.method_4(t.self);
                  const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                  if (dist < t.method_1(t.self) && dist < min_distance) {
                    target = new Option$Some$4$(e);
                    min_distance = dist;
                  }
                  break _L;
                }
                _tmp$3 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$2 = target;
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _enemy = _Some._0;
              const bullet = retfings$game$Core$Sprite$Tower$$LightningTowerBullet$new(retfings$game$Core$Point$$TowerPoint$new$46$inner(t.method_4(t.self).x, t.method_4(t.self).y), t.method_2(t.self), 200, _enemy);
              moonbitlang$core$array$$Array$push$156$(retfings$game$Core$Sprite$Tower$$lightning_tower_bullets.val, bullet);
            }
            attack_timer = attack_timer - attack_interval;
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$update_bullet_attack(self, dt) {
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = _arr[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 5) {
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            let target = Option$None$4$;
            let min_distance = 1 / 0;
            const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$2 = _arr$2.length;
            let _tmp$2 = 0;
            while (true) {
              const _i$2 = _tmp$2;
              if (_i$2 < _len$2) {
                _L: {
                  const e = _arr$2[_i$2];
                  if (retfings$game$Controllers$TowerController$$divide_effects_pause_update(e)) {
                    break _L;
                  }
                  const ep = e.method_0(e.self);
                  const tp = t.method_4(t.self);
                  const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                  if (dist < t.method_1(t.self) && dist < min_distance) {
                    target = new Option$Some$4$(e);
                    min_distance = dist;
                  }
                  break _L;
                }
                _tmp$2 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$2 = target;
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _enemy = _Some._0;
              const bullet = retfings$game$Core$Sprite$Tower$$NegativeMagneticTowerBullet$new(retfings$game$Core$Point$$TowerPoint$new$46$inner(t.method_4(t.self).x, t.method_4(t.self).y), t.method_2(t.self), 200, _enemy);
              moonbitlang$core$array$$Array$push$157$(retfings$game$Core$Sprite$Tower$$negative_magnetic_tower_bullets.val, bullet);
            }
            attack_timer = attack_timer - attack_interval;
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$update_buttle(self, dt, bullet) {
  if (!bullet.alive) {
    return undefined;
  }
  const _tmp = bullet.target;
  if (!_tmp.method_1(_tmp.self)) {
    bullet.alive = false;
    return undefined;
  }
  const _tmp$2 = bullet.target;
  const target_pos = _tmp$2.method_0(_tmp$2.self);
  const dx = target_pos.x - bullet.position.x;
  const dy = target_pos.y - bullet.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 5) {
    const _tmp$3 = bullet.target;
    _tmp$3.method_2(_tmp$3.self, bullet.damage);
    bullet.alive = false;
    return undefined;
  }
  if (distance > 0) {
    const dir_x = dx / distance;
    const dir_y = dy / distance;
    const _bind = bullet.position;
    _bind.x = _bind.x + dir_x * bullet.speed * dt / 1000;
    const _bind$2 = bullet.position;
    _bind$2.y = _bind$2.y + dir_y * bullet.speed * dt / 1000;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$update(self, dt) {
  const alive_bullets = [];
  const _arr = retfings$game$Core$Sprite$Tower$$negative_magnetic_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$update_buttle(self, dt, bullet);
      if (bullet.alive) {
        moonbitlang$core$array$$Array$push$157$(alive_bullets, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$negative_magnetic_tower_bullets.val = alive_bullets;
  retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$update_bullet_attack(self, dt);
}
function retfings$game$Controllers$TowerController$$PlasmaTowerController$update_buttle(self, dt, bullet) {
  if (!bullet.alive) {
    return undefined;
  }
  const _tmp = bullet.target;
  if (!_tmp.method_1(_tmp.self)) {
    bullet.alive = false;
    return undefined;
  }
  const _tmp$2 = bullet.target;
  const target_pos = _tmp$2.method_0(_tmp$2.self);
  const dx = target_pos.x - bullet.position.x;
  const dy = target_pos.y - bullet.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 5) {
    const _tmp$3 = bullet.target;
    _tmp$3.method_2(_tmp$3.self, bullet.damage);
    bullet.alive = false;
    return undefined;
  }
  if (distance > 0) {
    const dir_x = dx / distance;
    const dir_y = dy / distance;
    const _bind = bullet.position;
    _bind.x = _bind.x + dir_x * bullet.speed * dt / 1000;
    const _bind$2 = bullet.position;
    _bind$2.y = _bind$2.y + dir_y * bullet.speed * dt / 1000;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$PlasmaTowerController$update(self, dt) {
  const alive_bullets = [];
  const _arr = retfings$game$Core$Sprite$Tower$$plasma_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      retfings$game$Controllers$TowerController$$PlasmaTowerController$update_buttle(self, dt, bullet);
      if (bullet.alive) {
        moonbitlang$core$array$$Array$push$158$(alive_bullets, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$plasma_tower_bullets.val = alive_bullets;
  const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const t = _arr$2[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 0) {
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            let target = Option$None$4$;
            let min_distance = 1 / 0;
            const _arr$3 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$3 = _arr$3.length;
            let _tmp$3 = 0;
            while (true) {
              const _i$2 = _tmp$3;
              if (_i$2 < _len$3) {
                _L: {
                  const e = _arr$3[_i$2];
                  if (retfings$game$Controllers$TowerController$$divide_effects_pause_update(e)) {
                    break _L;
                  }
                  const ep = e.method_0(e.self);
                  const tp = t.method_4(t.self);
                  const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                  if (dist < t.method_1(t.self) && dist < min_distance) {
                    target = new Option$Some$4$(e);
                    min_distance = dist;
                  }
                  break _L;
                }
                _tmp$3 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$2 = target;
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _enemy = _Some._0;
              const bullet = retfings$game$Core$Sprite$Tower$$PlasmaTowerBullet$new(retfings$game$Core$Point$$TowerPoint$new$46$inner(t.method_4(t.self).x, t.method_4(t.self).y), t.method_2(t.self), 200, _enemy);
              moonbitlang$core$array$$Array$push$158$(retfings$game$Core$Sprite$Tower$$plasma_tower_bullets.val, bullet);
            }
            attack_timer = attack_timer - attack_interval;
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$update_ma(dt) {
  const magnetic_data = retfings$game$Core$Sprite$Tower$$positive_magnetic_field_datas.val;
  const towers = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _p = [];
  const _p$2 = towers.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = towers[_p$3];
      const _p$5 = _p$4.method_8(_p$4.self);
      let _tmp$2;
      if (_p$5 === 4) {
        _tmp$2 = true;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        moonbitlang$core$array$$Array$push$124$(_p, _p$4);
      }
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const positive_towers = _p;
  const _p$3 = [];
  const _p$4 = towers.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$5 = _tmp$2;
    if (_p$5 < _p$4) {
      const _p$6 = towers[_p$5];
      const _p$7 = _p$6.method_8(_p$6.self);
      let _tmp$3;
      if (_p$7 === 5) {
        _tmp$3 = true;
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        moonbitlang$core$array$$Array$push$124$(_p$3, _p$6);
      }
      _tmp$2 = _p$5 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const negative_towers = _p$3;
  const remove_filter = [];
  const _len = positive_towers.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len) {
      const pt = positive_towers[_i];
      const _len$2 = negative_towers.length;
      let _tmp$4 = 0;
      while (true) {
        const _i$2 = _tmp$4;
        if (_i$2 < _len$2) {
          const nt = negative_towers[_i$2];
          const dist = retfings$game$Core$Math$$dist_tow_tower_point(pt.method_4(pt.self), nt.method_4(nt.self));
          if (dist <= retfings$game$Core$Sprite$Tower$$positive_magnetic_min_distance) {
            const _len$3 = magnetic_data.length;
            let _tmp$5 = 0;
            while (true) {
              const _i$3 = _tmp$5;
              if (_i$3 < _len$3) {
                const ma = magnetic_data[_i$3];
                if (ma.positive_tower_id === pt.method_14(pt.self) && (ma.negative_tower_id === nt.method_14(nt.self) && ma.has_magnetic_pair)) {
                  ma.magnetic_field_timer = ma.magnetic_field_timer + dt;
                  if (ma.magnetic_field_timer > 3000 && !ma.magnetic_field_active) {
                    ma.magnetic_field_active = true;
                  }
                  if (ma.magnetic_field_timer > 3000 && ma.magnetic_ray_active) {
                    ma.magnetic_ray_active = false;
                  }
                }
                _tmp$5 = _i$3 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _p$5 = retfings$game$Core$Sprite$Tower$$positive_magnetic_field_datas.val;
            const _p$6 = _p$5.length;
            let _bind;
            let _tmp$6 = 0;
            while (true) {
              const _p$7 = _tmp$6;
              if (_p$7 < _p$6) {
                const _p$8 = _p$5[_p$7];
                if (_p$8.positive_tower_id === pt.method_14(pt.self)) {
                  _bind = _p$7;
                  break;
                }
                _tmp$6 = _p$7 + 1 | 0;
                continue;
              } else {
                _bind = undefined;
                break;
              }
            }
            if (_bind === undefined) {
              moonbitlang$core$array$$Array$insert$69$(magnetic_data, 0, { magnetic_field_active: false, magnetic_field_timer: 0, has_magnetic_pair: true, magnetic_ray_active: true, positive_tower_id: pt.method_14(pt.self), negative_tower_id: nt.method_14(nt.self), positive_tower_x: pt.method_4(pt.self).x, positive_tower_y: pt.method_4(pt.self).y, negative_tower_x: nt.method_4(nt.self).x, negative_tower_y: nt.method_4(nt.self).y });
            }
          }
          const _arr = retfings$game$Core$Sprite$Tower$$positive_magnetic_field_datas.val;
          const _len$3 = _arr.length;
          let _tmp$5 = 0;
          while (true) {
            const _i$3 = _tmp$5;
            if (_i$3 < _len$3) {
              const ma = _arr[_i$3];
              if (pt.method_14(pt.self) === ma.positive_tower_id && nt.method_14(nt.self) === ma.negative_tower_id) {
                moonbitlang$core$array$$Array$append$69$(remove_filter, [ma]);
              }
              _tmp$5 = _i$3 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$4 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$positive_magnetic_field_datas.val = remove_filter;
}
function retfings$game$Controllers$TowerController$$update_ma_attack() {
  const _arr = retfings$game$Core$Sprite$Tower$$positive_magnetic_field_datas.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const ma = _arr[_i];
      if (ma.magnetic_field_active) {
        const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
        const _len$2 = _arr$2.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const e = _arr$2[_i$2];
            const ex = e.method_0(e.self).x;
            const ey = e.method_0(e.self).y;
            let max_x = -1;
            let max_y = -1;
            let min_x = -1;
            let min_y = -1;
            if (ma.positive_tower_y === ma.negative_tower_y) {
              const _p = ma.positive_tower_x;
              const _p$2 = ma.negative_tower_x;
              max_x = _p > _p$2 ? _p : _p$2;
              const _p$3 = ma.positive_tower_y;
              const _p$4 = ma.negative_tower_y;
              max_y = (_p$3 > _p$4 ? _p$3 : _p$4) + retfings$game$Core$Sprite$Tower$$positive_magnetic_width / 2;
              const _p$5 = ma.positive_tower_x;
              const _p$6 = ma.negative_tower_x;
              min_x = _p$5 > _p$6 ? _p$6 : _p$5;
              const _p$7 = ma.positive_tower_y;
              const _p$8 = ma.negative_tower_y;
              min_y = (_p$7 > _p$8 ? _p$8 : _p$7) - retfings$game$Core$Sprite$Tower$$positive_magnetic_width / 2;
            }
            if (ma.positive_tower_x === ma.negative_tower_x) {
              const _p = ma.positive_tower_x;
              const _p$2 = ma.negative_tower_x;
              max_x = (_p > _p$2 ? _p : _p$2) + retfings$game$Core$Sprite$Tower$$positive_magnetic_width / 2;
              const _p$3 = ma.positive_tower_y;
              const _p$4 = ma.negative_tower_y;
              max_y = _p$3 > _p$4 ? _p$3 : _p$4;
              const _p$5 = ma.positive_tower_x;
              const _p$6 = ma.negative_tower_x;
              min_x = (_p$5 > _p$6 ? _p$6 : _p$5) - retfings$game$Core$Sprite$Tower$$positive_magnetic_width / 2;
              const _p$7 = ma.positive_tower_y;
              const _p$8 = ma.negative_tower_y;
              min_y = _p$7 > _p$8 ? _p$8 : _p$7;
            }
            const e_pading = retfings$game$Core$$map.gridSize * 0.7;
            if (min_x <= ex + e_pading && (ex - e_pading <= max_x && (min_y <= ey + e_pading && ey - e_pading <= max_y))) {
              e.method_2(e.self, 0.05);
            }
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
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$update_bullet_attack(self, dt) {
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = _arr[_i];
      const _bind = t.method_8(t.self);
      if (_bind === 4) {
        let attack_timer = t.method_10(t.self);
        const attack_interval = 1000 / t.method_3(t.self);
        attack_timer = attack_timer + dt;
        while (true) {
          if (attack_timer >= attack_interval) {
            let target = Option$None$4$;
            let min_distance = 1 / 0;
            const _arr$2 = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
            const _len$2 = _arr$2.length;
            let _tmp$2 = 0;
            while (true) {
              const _i$2 = _tmp$2;
              if (_i$2 < _len$2) {
                _L: {
                  const e = _arr$2[_i$2];
                  if (retfings$game$Controllers$TowerController$$divide_effects_pause_update(e)) {
                    break _L;
                  }
                  const ep = e.method_0(e.self);
                  const tp = t.method_4(t.self);
                  const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
                  if (dist < t.method_1(t.self) && dist < min_distance) {
                    target = new Option$Some$4$(e);
                    min_distance = dist;
                  }
                  break _L;
                }
                _tmp$2 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$2 = target;
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _enemy = _Some._0;
              const bullet = retfings$game$Core$Sprite$Tower$$PositiveMagneticTowerBullet$new(retfings$game$Core$Point$$TowerPoint$new$46$inner(t.method_4(t.self).x, t.method_4(t.self).y), t.method_2(t.self), 200, _enemy);
              moonbitlang$core$array$$Array$push$159$(retfings$game$Core$Sprite$Tower$$positive_magnetic_tower_bullets.val, bullet);
            }
            attack_timer = attack_timer - attack_interval;
            continue;
          } else {
            break;
          }
        }
        t.method_11(t.self, attack_timer);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$update_buttle(self, dt, bullet) {
  if (!bullet.alive) {
    return undefined;
  }
  const _tmp = bullet.target;
  if (!_tmp.method_1(_tmp.self)) {
    bullet.alive = false;
    return undefined;
  }
  const _tmp$2 = bullet.target;
  const target_pos = _tmp$2.method_0(_tmp$2.self);
  const dx = target_pos.x - bullet.position.x;
  const dy = target_pos.y - bullet.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 5) {
    const _tmp$3 = bullet.target;
    _tmp$3.method_2(_tmp$3.self, bullet.damage);
    bullet.alive = false;
    return undefined;
  }
  if (distance > 0) {
    const dir_x = dx / distance;
    const dir_y = dy / distance;
    const _bind = bullet.position;
    _bind.x = _bind.x + dir_x * bullet.speed * dt / 1000;
    const _bind$2 = bullet.position;
    _bind$2.y = _bind$2.y + dir_y * bullet.speed * dt / 1000;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$update(self, dt) {
  const alive_bullets = [];
  const _arr = retfings$game$Core$Sprite$Tower$$positive_magnetic_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$update_buttle(self, dt, bullet);
      if (bullet.alive) {
        moonbitlang$core$array$$Array$push$159$(alive_bullets, bullet);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$Sprite$Tower$$positive_magnetic_tower_bullets.val = alive_bullets;
  retfings$game$Controllers$TowerController$$update_ma(dt);
  retfings$game$Controllers$TowerController$$update_ma_attack();
  retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$update_bullet_attack(self, dt);
}
function retfings$game$Controllers$TowerController$$TowerController$update(_self, dt) {
  retfings$game$Controllers$TowerController$$BeeTowerController$update(retfings$game$Controllers$TowerController$$beeTowerControllerSingleton, dt);
  retfings$game$Controllers$TowerController$$ChargeJarTowerController$update(retfings$game$Controllers$TowerController$$chargeJarTowerControllerSingleton, dt);
  retfings$game$Controllers$TowerController$$CurveTowerController$update(retfings$game$Controllers$TowerController$$curveTowerControllerSingleton, dt);
  retfings$game$Controllers$TowerController$$LightningTowerController$update(retfings$game$Controllers$TowerController$$lightningTowerControllerSingleton, dt);
  retfings$game$Controllers$TowerController$$NegativeMagneticTowerController$update(retfings$game$Controllers$TowerController$$negativeMagneticTowerControllerSingleton, dt);
  retfings$game$Controllers$TowerController$$PlasmaTowerController$update(retfings$game$Controllers$TowerController$$plasmaTowerControllerSingleton, dt);
  retfings$game$Controllers$TowerController$$PositiveMagneticTowerController$update(retfings$game$Controllers$TowerController$$positiveMagneticTowerControllerSingleton, dt);
  retfings$game$Controllers$TowerController$$LaserTowerController$update(retfings$game$Controllers$TowerController$$laserTowerControllerSingleton, dt);
}
function retfings$game$Controllers$PagesController$$WinPageController$new() {
  ({});
}
function retfings$game$Controllers$PagesController$$WinPageController$get_instance() {
  const _bind = retfings$game$Controllers$PagesController$$winPageControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$PagesController$$WinPageController$new();
    retfings$game$Controllers$PagesController$$winPageControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$WinPageController$update(self, dt) {
  if (!retfings$game$Core$Pages$$winPageSingleton.select_level_button_click) {
    if (retfings$game$Core$Sprite$HP$$hPSingleton.hp === retfings$game$Core$Sprite$HP$$hPSingleton.max_hp) {
      retfings$game$Core$Pages$$winPageSingleton.star_count = 3;
    } else {
      if (retfings$game$Core$Sprite$HP$$hPSingleton.hp >= retfings$game$Core$Sprite$HP$$hPSingleton.max_hp / 2) {
        retfings$game$Core$Pages$$winPageSingleton.star_count = 2;
      } else {
        retfings$game$Core$Pages$$winPageSingleton.star_count = 1;
      }
    }
    retfings$game$Core$Pages$$winPageSingleton.is_open = true;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$WinPageController$click_select_level_button(self, point) {
  return point.x >= retfings$game$Core$Pages$$winPageSingleton.select_level_button_x && (point.x <= retfings$game$Core$Pages$$winPageSingleton.select_level_button_x + retfings$game$Core$Pages$$winPageSingleton.select_level_button_w && (point.y >= retfings$game$Core$Pages$$winPageSingleton.select_level_button_y && point.y <= retfings$game$Core$Pages$$winPageSingleton.select_level_button_y + retfings$game$Core$Pages$$winPageSingleton.select_level_button_h));
}
function retfings$game$Controllers$PagesController$$WinPageController$click_next_level_button(self, point) {
  return point.x >= retfings$game$Core$Pages$$winPageSingleton.next_level_button_x && (point.x <= retfings$game$Core$Pages$$winPageSingleton.next_level_button_x + retfings$game$Core$Pages$$winPageSingleton.next_level_button_w && (point.y >= retfings$game$Core$Pages$$winPageSingleton.next_level_button_y && point.y <= retfings$game$Core$Pages$$winPageSingleton.next_level_button_y + retfings$game$Core$Pages$$winPageSingleton.next_level_button_h));
}
function retfings$game$Controllers$PagesController$$unlock_next_level(current_level) {
  if (current_level < retfings$game$Core$Pages$$selectLevelPageSingleton.total_levels) {
    const next_level = current_level + 1 | 0;
    if (!moonbitlang$core$array$$Array$contains$27$(retfings$game$Core$Pages$$selectLevelPageSingleton.unlocked_levels, next_level)) {
      moonbitlang$core$array$$Array$push$27$(retfings$game$Core$Pages$$selectLevelPageSingleton.unlocked_levels, next_level);
      retfings$game$Core$Pages$$selectLevelPageSingleton.next_level_unlocked = true;
      retfings$game$Core$Pages$$selectLevelPageSingleton.unlock_animation_progress = 0;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$WinPageController$handle_select_level(self) {
  retfings$game$Core$Pages$$winPageSingleton.select_level_button_click = true;
  retfings$game$Core$Pages$$winPageSingleton.is_open = false;
  retfings$game$Core$Pages$$selectLevelPageSingleton.is_open = true;
  retfings$game$Controllers$PagesController$$unlock_next_level(retfings$game$Core$Map$$MapLevel$get_cur_level(retfings$game$Core$Map$$mapLevelSingleton));
}
function retfings$game$Controllers$PagesController$$unlock_next_level_goto_next_level(current_level) {
  if (current_level < retfings$game$Core$Pages$$selectLevelPageSingleton.total_levels) {
    const next_level = current_level + 1 | 0;
    if (!moonbitlang$core$array$$Array$contains$27$(retfings$game$Core$Pages$$selectLevelPageSingleton.unlocked_levels, next_level)) {
      moonbitlang$core$array$$Array$push$27$(retfings$game$Core$Pages$$selectLevelPageSingleton.unlocked_levels, next_level);
      retfings$game$Core$Pages$$selectLevelPageSingleton.next_level_unlocked = true;
      retfings$game$Core$Pages$$selectLevelPageSingleton.unlock_animation_progress = 0;
    }
    retfings$game$Controllers$MapController$$switch_level(next_level);
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$WinPageController$handle_next_level(self) {
  retfings$game$Core$Pages$$winPageSingleton.next_level_button_click = true;
  retfings$game$Controllers$PagesController$$unlock_next_level_goto_next_level(retfings$game$Core$Map$$MapLevel$get_cur_level(retfings$game$Core$Map$$mapLevelSingleton));
  retfings$game$Core$Pages$$winPageSingleton.is_open = false;
}
function retfings$game$Controllers$PagesController$$SelectLevelPageController$new() {
  ({});
}
function retfings$game$Controllers$PagesController$$SelectLevelPageController$get_instance() {
  const _bind = retfings$game$Controllers$PagesController$$selectLevelPageControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$PagesController$$SelectLevelPageController$new();
    retfings$game$Controllers$PagesController$$selectLevelPageControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$SelectLevelPageController$update(self, dt) {
  if (retfings$game$Core$Pages$$selectLevelPageSingleton.next_level_unlocked) {
    const _p = 1;
    const _p$2 = retfings$game$Core$Pages$$selectLevelPageSingleton.unlock_animation_progress + dt * 2;
    retfings$game$Core$Pages$$selectLevelPageSingleton.unlock_animation_progress = _p > _p$2 ? _p$2 : _p;
    if (retfings$game$Core$Pages$$selectLevelPageSingleton.unlock_animation_progress >= 1) {
      retfings$game$Core$Pages$$selectLevelPageSingleton.next_level_unlocked = false;
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$SelectLevelPageController$handel(self, point) {
  const level_count = retfings$game$Core$Map$$get_level_count();
  const canvas_width = retfings$game$Core$$map.width;
  const total_width = (level_count + 0) * 80 + ((level_count - 1 | 0) + 0) * 40;
  const start_x = (canvas_width - total_width) / 2;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < level_count) {
      const level_num = i + 1 | 0;
      const button_x = start_x + (i + 0) * 120;
      const button_y = retfings$game$Core$$map.height / 2 - 40;
      if (point.x >= button_x && (point.x <= button_x + 80 && (point.y >= button_y && point.y <= button_y + 80))) {
        if (retfings$game$Core$Pages$$SelectLevelPage$is_level_unlocked(retfings$game$Core$Pages$$selectLevelPageSingleton, level_num)) {
          retfings$game$Controllers$MapController$$switch_level(level_num);
          retfings$game$Core$Pages$$selectLevelPageSingleton.is_open = false;
        }
        return undefined;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Controllers$PagesController$$PagesController$new() {
  ({});
}
function retfings$game$Controllers$PagesController$$PagesController$get_instance() {
  const _bind = retfings$game$Controllers$PagesController$$pagesControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$PagesController$$PagesController$new();
    retfings$game$Controllers$PagesController$$pagesControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$LosePageController$new() {
  ({});
}
function retfings$game$Controllers$PagesController$$LosePageController$get_instance() {
  const _bind = retfings$game$Controllers$PagesController$$losePageControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$PagesController$$LosePageController$new();
    retfings$game$Controllers$PagesController$$losePageControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$PagesController$show_lose_page(self) {
  return retfings$game$Core$Sprite$HP$$hPSingleton.hp <= 0;
}
function retfings$game$Controllers$PagesController$$LosePageController$update(self, dt) {
  if (retfings$game$Controllers$PagesController$$PagesController$show_lose_page(retfings$game$Controllers$PagesController$$pagesControllerSingleton)) {
    retfings$game$Core$Pages$$losePageSingleton.is_open = true;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$PagesController$show_select_page(self) {
  return retfings$game$Core$Pages$$selectLevelPageSingleton.is_open;
}
function retfings$game$Controllers$PagesController$$PagesController$show_win_page(self) {
  const wave_config = retfings$game$Core$Map$$enemyWaveConfigSingleton();
  if (wave_config.path_wave_configs.length === 0) {
    return false;
  }
  const first_path_waves = moonbitlang$core$array$$Array$at$134$(wave_config.path_wave_configs, 0).waves;
  if (first_path_waves.length === 0) {
    return false;
  }
  const last_wave = moonbitlang$core$array$$Array$at$142$(first_path_waves, first_path_waves.length - 1 | 0);
  return last_wave.is_start && (!last_wave.has_enemy && retfings$game$Core$Sprite$HP$$hPSingleton.hp > 0);
}
function retfings$game$Controllers$PagesController$$PagesController$update(self, dt) {
  if (retfings$game$Controllers$PagesController$$PagesController$show_win_page(self)) {
    retfings$game$Controllers$PagesController$$WinPageController$update(retfings$game$Controllers$PagesController$$winPageControllerSingleton, dt);
    return undefined;
  }
  if (retfings$game$Controllers$PagesController$$PagesController$show_lose_page(self)) {
    retfings$game$Controllers$PagesController$$LosePageController$update(retfings$game$Controllers$PagesController$$losePageControllerSingleton, dt);
    return undefined;
  }
  if (retfings$game$Controllers$PagesController$$PagesController$show_select_page(self)) {
    retfings$game$Controllers$PagesController$$SelectLevelPageController$update(retfings$game$Controllers$PagesController$$selectLevelPageControllerSingleton, dt);
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PagesController$$PagesController$show_page(self) {
  return retfings$game$Controllers$PagesController$$PagesController$show_lose_page(self) || (retfings$game$Controllers$PagesController$$PagesController$show_win_page(self) || retfings$game$Controllers$PagesController$$PagesController$show_select_page(self));
}
function retfings$game$Controllers$PagesController$$LosePageController$click_replay_button(self, point) {
  return point.x >= retfings$game$Core$Pages$$losePageSingleton.replay_button_x && (point.x <= retfings$game$Core$Pages$$losePageSingleton.replay_button_x + retfings$game$Core$Pages$$losePageSingleton.replay_button_w && (point.y >= retfings$game$Core$Pages$$losePageSingleton.replay_button_y && point.y <= retfings$game$Core$Pages$$losePageSingleton.replay_button_y + retfings$game$Core$Pages$$losePageSingleton.replay_button_h));
}
function retfings$game$Controllers$PagesController$$LosePageController$handel_replay(self) {
  retfings$game$Core$Pages$$losePageSingleton.replay_button_click = true;
  retfings$game$Controllers$MapController$$switch_level(retfings$game$Core$Map$$MapLevel$get_cur_level(retfings$game$Core$Map$$mapLevelSingleton));
  retfings$game$Core$Pages$$losePageSingleton.is_open = false;
}
function retfings$game$Controllers$PagesController$$LosePageController$click_return_button(self, point) {
  return point.x >= retfings$game$Core$Pages$$losePageSingleton.return_button_x && (point.x <= retfings$game$Core$Pages$$losePageSingleton.return_button_x + retfings$game$Core$Pages$$losePageSingleton.return_button_w && (point.y >= retfings$game$Core$Pages$$losePageSingleton.return_button_y && point.y <= retfings$game$Core$Pages$$losePageSingleton.return_button_y + retfings$game$Core$Pages$$losePageSingleton.return_button_h));
}
function retfings$game$Controllers$PagesController$$LosePageController$handel_return(self) {
  retfings$game$Core$Pages$$losePageSingleton.return_button_click = true;
  retfings$game$Core$Pages$$selectLevelPageSingleton.is_open = true;
  retfings$game$Controllers$MapController$$switch_level(retfings$game$Core$Map$$MapLevel$get_cur_level(retfings$game$Core$Map$$mapLevelSingleton));
  retfings$game$Core$Pages$$losePageSingleton.is_open = false;
}
function retfings$game$Core$platform$$WebAdapterRender$new(canvas, ctx) {
  return { height: retfings$game$Core$platform$$get_web_screen_height(), width: retfings$game$Core$platform$$get_web_screen_width(), logicHeight: retfings$game$Core$$map.height, logicWidth: retfings$game$Core$$map.width, canvas: canvas, ctx: ctx };
}
function retfings$game$Core$platform$$WebAdapterRender$get_instance(canvas, ctx) {
  const _bind = retfings$game$Core$platform$$webAdapterRenderInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$platform$$WebAdapterRender$new(canvas, ctx);
    retfings$game$Core$platform$$webAdapterRenderInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$platform$$WebAdapterRender$resize(self) {
  retfings$game$Core$platform$$margin0();
  const scaleX = self.width / self.logicWidth;
  const scaleY = self.height / self.logicHeight;
  const minScale = scaleX < scaleY ? scaleX : scaleY;
  const dpr = retfings$game$Core$platform$$window_devicePixelRatio();
  retfings$game$Core$$Canvas$setWidth(self.canvas, self.width * dpr);
  retfings$game$Core$$Canvas$setHeight(self.canvas, self.height * dpr);
  retfings$game$Core$$Canvas$setCSSHeight(self.canvas, self.height);
  retfings$game$Core$$Canvas$setCSSWidth(self.canvas, self.width);
  const scaleCanvasW = minScale * self.logicWidth;
  const scaleCanvasH = minScale * self.logicHeight;
  const offsetX = (self.width - scaleCanvasW) / 2;
  const offsetY = (self.height - scaleCanvasH) / 2;
  retfings$game$Core$$CanvasRenderingContext2D$setTransform(self.ctx, dpr * minScale, 0, 0, dpr * minScale, dpr * offsetX, dpr * offsetY);
  retfings$game$Core$$CanvasRenderingContext2D$clearRect(self.ctx, 0, 0, self.logicWidth, self.logicHeight);
  moonbitlang$core$builtin$$Map$set$12$(retfings$game$Core$platform$$webAdapterRenderResizeInfoMap.val, "scale", minScale);
  moonbitlang$core$builtin$$Map$set$12$(retfings$game$Core$platform$$webAdapterRenderResizeInfoMap.val, "offsetX", offsetX);
  moonbitlang$core$builtin$$Map$set$12$(retfings$game$Core$platform$$webAdapterRenderResizeInfoMap.val, "offsetY", offsetY);
}
function retfings$game$Core$platform$$WebAdapterInputer$new(offset_x, offset_y, scale) {
  return { offset_x: offset_x, offset_y: offset_y, scale: scale };
}
function retfings$game$Core$platform$$WebAdapterInputer$get_instance() {
  if (retfings$game$Core$platform$$webAdapterRenderSingleton === undefined) {
  } else {
    const _Some = retfings$game$Core$platform$$webAdapterRenderSingleton;
    const _f = _Some;
    retfings$game$Core$platform$$WebAdapterRender$resize(_f);
  }
  const _bind = retfings$game$Core$platform$$webAdapterInputerInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$platform$$WebAdapterInputer$new(moonbitlang$core$builtin$$Map$at$12$(retfings$game$Core$platform$$webAdapterRenderResizeInfoMap.val, "offsetX"), moonbitlang$core$builtin$$Map$at$12$(retfings$game$Core$platform$$webAdapterRenderResizeInfoMap.val, "offsetY"), moonbitlang$core$builtin$$Map$at$12$(retfings$game$Core$platform$$webAdapterRenderResizeInfoMap.val, "scale"));
    retfings$game$Core$platform$$webAdapterInputerInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$platform$$toScalePoint(point, adapter) {
  return retfings$game$Core$Point$$PixelPoint$new$46$inner((point.x - adapter.offset_x) / adapter.scale, (point.y - adapter.offset_y) / adapter.scale);
}
function retfings$game$Core$platform$$getWindowInfo() {
  return retfings$game$Core$platform$$wx_get_window_info();
}
function retfings$game$Core$platform$$MiniGameAdapterRender$new(canvas, ctx) {
  return { height: retfings$game$Core$platform$$window_info_get_screen_height(retfings$game$Core$platform$$getWindowInfo()), width: retfings$game$Core$platform$$window_info_get_window_width(retfings$game$Core$platform$$getWindowInfo()), logicHeight: retfings$game$Core$$map.height, logicWidth: retfings$game$Core$$map.width, canvas: canvas, ctx: ctx };
}
function retfings$game$Core$platform$$MiniGameAdapterRender$get_instance(canvas, ctx) {
  const _bind = retfings$game$Core$platform$$miniGameAdapterRenderInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$platform$$MiniGameAdapterRender$new(canvas, ctx);
    retfings$game$Core$platform$$miniGameAdapterRenderInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$platform$$MiniGameAdapterRender$resize(self) {
  const scaleX = self.width / self.logicWidth;
  const scaleY = self.height / self.logicHeight;
  const minScale = scaleX < scaleY ? scaleX : scaleY;
  const dpr = retfings$game$Core$platform$$window_info_get_pixel_ratio(retfings$game$Core$platform$$getWindowInfo());
  retfings$game$Core$$Canvas$setWidth(self.canvas, self.width * dpr);
  retfings$game$Core$$Canvas$setHeight(self.canvas, self.height * dpr);
  const scaleCanvasW = minScale * self.logicWidth;
  const scaleCanvasH = minScale * self.logicHeight;
  const offsetX = (self.width - scaleCanvasW) / 2;
  const offsetY = (self.height - scaleCanvasH) / 2;
  retfings$game$Core$$CanvasRenderingContext2D$setTransform(self.ctx, dpr * minScale, 0, 0, dpr * minScale, dpr * offsetX, dpr * offsetY);
  retfings$game$Core$$CanvasRenderingContext2D$clearRect(self.ctx, 0, 0, self.logicWidth, self.logicHeight);
  moonbitlang$core$builtin$$Map$set$12$(retfings$game$Core$platform$$miniGameAdapterRenderResizeInfoMap.val, "scale", minScale);
  moonbitlang$core$builtin$$Map$set$12$(retfings$game$Core$platform$$miniGameAdapterRenderResizeInfoMap.val, "offsetX", offsetX);
  moonbitlang$core$builtin$$Map$set$12$(retfings$game$Core$platform$$miniGameAdapterRenderResizeInfoMap.val, "offsetY", offsetY);
  return { scale: minScale, offsetX: offsetX, offsetY: offsetY };
}
function retfings$game$Core$platform$$MiniGameAdapterInputer$new(offset_x, offset_y, scale) {
  return { offset_x: offset_x, offset_y: offset_y, scale: scale, inv_scale: 1 / scale };
}
function retfings$game$Core$platform$$to_pos(touch, adapter) {
  const px = retfings$game$Core$platform$$touch_get_client_x(touch);
  const py = retfings$game$Core$platform$$touch_get_client_y(touch);
  return retfings$game$Core$Point$$PixelPoint$new$46$inner((px - adapter.offset_x) * adapter.inv_scale, (py - adapter.offset_y) * adapter.inv_scale);
}
function retfings$game$Core$platform$$MiniGameAdapterInputer$get_instance() {
  if (retfings$game$Core$platform$$miniGameAdapterRenderSingleton === undefined) {
  } else {
    const _Some = retfings$game$Core$platform$$miniGameAdapterRenderSingleton;
    const _f = _Some;
    retfings$game$Core$platform$$MiniGameAdapterRender$resize(_f);
  }
  const _bind = retfings$game$Core$platform$$miniGameAdapterInputerInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Core$platform$$MiniGameAdapterInputer$new(moonbitlang$core$builtin$$Map$at$12$(retfings$game$Core$platform$$miniGameAdapterRenderResizeInfoMap.val, "offsetX"), moonbitlang$core$builtin$$Map$at$12$(retfings$game$Core$platform$$miniGameAdapterRenderResizeInfoMap.val, "offsetY"), moonbitlang$core$builtin$$Map$at$12$(retfings$game$Core$platform$$miniGameAdapterRenderResizeInfoMap.val, "scale"));
    retfings$game$Core$platform$$miniGameAdapterInputerInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Core$platform$$MiniGameAdapterInputer$on_touch_start(self, handler) {
  retfings$game$Core$platform$$wx_on_touch_start((event) => {
    const touches = retfings$game$Core$platform$$touch_event_get_touches(event);
    if (touches.length > 0) {
      const first_touch = moonbitlang$core$array$$Array$at$137$(touches, 0);
      const pos = retfings$game$Core$platform$$to_pos(first_touch, self);
      handler(pos);
      return;
    } else {
      return;
    }
  });
}
function retfings$game$Core$platform$$MiniGameAdapterInputer$on_touch_move(self, handler) {
  const last_time = moonbitlang$core$ref$$Ref$new$14$(0);
  retfings$game$Core$platform$$wx_on_touch_move((event) => {
    const touches = retfings$game$Core$platform$$touch_event_get_touches(event);
    if (touches.length > 0) {
      const first_touch = moonbitlang$core$array$$Array$at$137$(touches, 0);
      const current_time = retfings$game$Core$platform$$touch_event_get_time_stamp(event);
      if (current_time - last_time.val >= 100) {
        const pos = retfings$game$Core$platform$$to_pos(first_touch, self);
        handler(pos);
        last_time.val = current_time;
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  });
}
function retfings$game$Core$platform$$MiniGameAdapterInputer$on_touch_end(self, handler) {
  retfings$game$Core$platform$$wx_on_touch_end((event) => {
    const touches = retfings$game$Core$platform$$touch_event_get_changed_touches(event);
    if (touches.length > 0) {
      const first_touch = moonbitlang$core$array$$Array$at$137$(touches, 0);
      const pos = retfings$game$Core$platform$$to_pos(first_touch, self);
      handler(pos);
      return;
    } else {
      return;
    }
  });
}
function retfings$game$Renders$UIComposeRender$$drawSlider(ctx, x, y, width, height, value, label, icon) {
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFA500");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, x, y, width, height);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD700");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, x, y, width * value, height);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FF6B6B");
  retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
  retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "center");
  retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, label, x + width / 2, y - 20);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(ctx, "rgba(0,0,0,0.3)");
  retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(ctx, 5);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetX(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetY(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x + width * value, y + height / 2, 25, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(ctx, "transparent");
  retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(ctx, 0);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetX(ctx, 0);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetY(ctx, 0);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FF6B6B");
  retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 24px Arial");
  retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "center");
  retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, icon, x + width * value, y + height / 2 + 8);
}
function retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x, y, w, h, r) {
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + r, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + w - r, y);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + w, y, x + w, y + r);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + w, y + h - r);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + w, y + h, x + w - r, y + h);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + r, y + h);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y + h, x, y + h - r);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x, y + r);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y, x + r, y);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
}
function retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e) {
  const gs = retfings$game$Core$$map.gridSize;
  const x = e.method_0(e.self).x;
  const y = e.method_0(e.self).y;
  const w = gs * 0.78;
  const bx = x - w / 2;
  const by = y - gs / 2 - 9;
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.35)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, bx, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, bx + w, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 4);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  const healthWidth = e.method_4(e.self) / e.method_5(e.self);
  if (healthWidth > 0.5) {
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#4CAF50");
  } else {
    if (healthWidth > 0.25) {
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#FFC107");
    } else {
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#F44336");
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, bx + 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, bx + w * e.method_4(e.self) / e.method_5(e.self) - 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 2);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$UIComposeRender$$draw_neutral_health_bar(e) {
  const gs = retfings$game$Core$$map.gridSize;
  const x = (e.method_0(e.self).x + 1) * gs;
  const y = (e.method_0(e.self).y + 1) * gs;
  const w = gs * 0.78;
  const bx = x - w;
  const by = y - gs - 9;
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.35)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, bx, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, bx + w, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 4);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  const healthWidth = e.method_3(e.self) / e.method_4(e.self);
  if (healthWidth > 0.5) {
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#4CAF50");
  } else {
    if (healthWidth > 0.25) {
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#FFC107");
    } else {
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#F44336");
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, bx + 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, bx + w * e.method_3(e.self) / e.method_4(e.self) - 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 2);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$UIComposeRender$$drawButton$46$inner(ctx, x, y, width, height, text, icon, isLarge) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  if (isLarge) {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD700");
  } else {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
  }
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(ctx, "rgba(0,0,0,0.3)");
  retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(ctx, 10);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetX(ctx, 3);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetY(ctx, 3);
  if (isLarge) {
    retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x, y, width, height, 40);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    const gradient = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, x, y, x, y + height);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(gradient, 0, "#FFD700");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(gradient, 1, "#FFA500");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, gradient);
    retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x, y, width, height, 40);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255,255,255,0.3)");
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + 40, y);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + width - 40, y);
    retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + width, y, x + width, y + 20);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + width, y + 20);
    retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + width, y + 20, x + width - 40, y + 20);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + 40, y + 20);
    retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y + 20, x, y + 20);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x, y);
    retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  }
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(ctx, "transparent");
  retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(ctx, 0);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetX(ctx, 0);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetY(ctx, 0);
  const _p = "";
  if (!(icon === _p)) {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FF6B6B");
    retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 60px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, icon, x + width / 2, y + height / 2 + 15);
  }
  const _p$2 = "";
  if (!(text === _p$2)) {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FF6B6B");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "center");
    if (isLarge) {
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 36px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, text, x + width / 2, y + height / 2 + 10);
    } else {
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 24px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, text, x + width / 2, y - 10);
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$TreasureTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$TowerRender$new() {
  ({});
}
function retfings$game$Renders$TowerRender$$TowerRender$get_instance() {
  const _bind = retfings$game$Renders$TowerRender$$towerRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$TowerRender$$TowerRender$new();
    retfings$game$Renders$TowerRender$$towerRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$TowerRender$$find_closest_enemy_in_range(tower) {
  let closest_enemy = Option$None$4$;
  let min_distance = tower.method_1(tower.self);
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      const ep = e.method_0(e.self);
      const tp = tower.method_4(tower.self);
      const dist = retfings$game$Core$Math$$dist_enemy_tower(ep, tp);
      if (dist < tower.method_1(tower.self) && dist < min_distance) {
        min_distance = dist;
        closest_enemy = new Option$Some$4$(e);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return closest_enemy;
}
function retfings$game$Renders$TowerRender$$BeeTowerRender$new() {
  ({});
}
function retfings$game$Renders$TowerRender$$BeeTowerRender$get_instance() {
  const _bind = retfings$game$Renders$TowerRender$$beeTowerRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$TowerRender$$BeeTowerRender$new();
    retfings$game$Renders$TowerRender$$beeTowerRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$TowerRender$$drawBody(ctx, colors) {
  const bodyGrad = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, -46, -72, 52, 64);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(bodyGrad, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "rocketShade"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(bodyGrad, 0.45, moonbitlang$core$builtin$$Map$at$152$(colors, "rocketMain"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(bodyGrad, 1, "#c784ff");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, bodyGrad);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 0, -70);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 43, -48, 37, 4);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 34, 28, 0, 48);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -34, 28, -37, 4);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -43, -48, 0, -70);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$drawFins$46$fin$124$63(_env, x0, y0, w, h) {
  const colors = _env._1;
  const ctx = _env._0;
  const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, x0, y0, x0 + w, y0 + h);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "fin1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "fin2"));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x0, y0);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x0 + w * 0.1, y0 + h * 0.2, x0 + w * 0.16, y0 + h * 0.5);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x0 + w * 0.22, y0 + h * 0.9, x0 + w, y0 + h);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x0 + w * 0.4, y0 + h * 0.55, x0, y0);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$drawFins(ctx, colors) {
  const _env = { _0: ctx, _1: colors };
  retfings$game$Renders$TowerRender$$drawFins$46$fin$124$63(_env, -48, 12, 40, 38);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, -1, 1);
  retfings$game$Renders$TowerRender$$drawFins$46$fin$124$63(_env, -48, 12, 40, 38);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$drawFlame(ctx, time, level, colors, clamp) {
  const t = time / 1000;
  const wobble = 3 + moonbitlang$core$math$$sin(t * 6) * 2;
  const extra = (clamp(level, 1, 3) - 1) * 6;
  const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, 0, 68, 0, 96 + wobble + extra);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "flame1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "flame2"));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 0, 68);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 12, 86, 0, 96 + wobble + extra);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -12, 86, 0, 68);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$drawGroundShadow(ctx, cx, cy, baseR) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx, cy + baseR * 0.28, baseR * 0.58, baseR * 0.18, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$drawNozzle(ctx, colors) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "multiply");
  const g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 60, 0, 0, 60, 6);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, "rgba(0, 0, 0, 0.36)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, "rgba(0, 0, 0, 0.00)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 60, 22, 6, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "nozzle"));
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 48, 20, 10, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$drawPlate(ctx, cx, cy, r, colors) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "plateDark"));
  const earR = r * 0.22;
  const angles = [0, 1.5707963267948966, 3.1415926535897931, 4.71238898038469];
  const _len = angles.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const a = angles[_i];
      const ex = cx + moonbitlang$core$math$$cos(a) * (r - earR * 0.55);
      const ey = cy + moonbitlang$core$math$$sin(a) * (r - earR * 0.55);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, ex, ey, earR, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, cx - r * 0.25, cy - r * 0.25, r * 0.2, cx, cy, r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "plateLight"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "plateDark"));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, cx, cy, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "plateStroke"));
  const _p = 2;
  const _p$2 = r * 0.06;
  const lineWidth = _p > _p$2 ? _p : _p$2;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, lineWidth);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, cx, cy, r - lineWidth / 2, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const rg = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, cx, cy, r * 0.25, cx, cy, r * 0.9);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 0, "rgba(255,255,255,.65)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 1, "rgba(255,255,255,0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, cx, cy, r * 0.86, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$drawSideHighlight(ctx) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.52);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ffffff");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -22, -34);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -46, -10, -25, 24);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -18, 8, -12, -14);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$roundedBand(ctx, bx, by, w, h, r) {
  const _p = h / 2;
  const _p$2 = w / 2;
  const _p$3 = _p > _p$2 ? _p$2 : _p;
  const rr = r > _p$3 ? _p$3 : r;
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, bx + rr, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w - rr, by);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, bx + w, by, bx + w, by + rr);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w, by + h - rr);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, bx + w, by + h, bx + w - rr, by + h);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + rr, by + h);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, bx, by + h, bx, by + h - rr);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx, by + rr);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, bx, by, bx + rr, by);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$drawStripes(ctx, colors, rad) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 0, -70);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 43, -48, 37, 4);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 34, 28, 0, 48);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -34, 28, -37, 4);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -43, -48, 0, -70);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$clip(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, rad(-10));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "stripe1"));
  retfings$game$Renders$TowerRender$$roundedBand(ctx, -44, -16, 88, 18, 9);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "stripe2"));
  retfings$game$Renders$TowerRender$$roundedBand(ctx, -48, 8, 96, 16, 8);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$render_tower$46$inner$46$rad$124$124(d) {
  return d * 3.1415926535897931 / 180;
}
function retfings$game$Renders$TowerRender$$render_tower$46$inner$46$clamp$124$128(v, lo, hi) {
  const _p = hi > v ? v : hi;
  return lo > _p ? lo : _p;
}
function retfings$game$Renders$TowerRender$$BeeTowerRender$render_tower$46$inner(self, ctx, x, y, level, gs, time, aimDeg) {
  const colors = moonbitlang$core$builtin$$Map$from_array$152$({ buf: retfings$game$Renders$TowerRender$$render_tower$46$inner$46$42$bind$47$3772, start: 0, end: 12 });
  const half = gs * 0.5;
  const _p = 1;
  const _p$2 = gs * 0.02;
  const margin = _p > _p$2 ? _p : _p$2;
  const baseR = (half - margin) / 1.13;
  const cellScale = (half - margin) / 100;
  const lvlScale = retfings$game$Renders$TowerRender$$render_tower$46$inner$46$clamp$124$128(0.86 + 0.03 * (level - 1), 0.86, 0.92);
  const bodyScale = cellScale * lvlScale;
  retfings$game$Renders$TowerRender$$drawGroundShadow(ctx, x, y, baseR);
  retfings$game$Renders$TowerRender$$drawPlate(ctx, x, y, baseR, colors);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  const _p$3 = aimDeg - 90;
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, _p$3 * 3.1415926535897931 / 180);
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, bodyScale, bodyScale);
  retfings$game$Renders$TowerRender$$drawFlame(ctx, time, level, colors, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$clamp$124$128);
  retfings$game$Renders$TowerRender$$drawBody(ctx, colors);
  retfings$game$Renders$TowerRender$$drawStripes(ctx, colors, retfings$game$Renders$TowerRender$$render_tower$46$inner$46$rad$124$124);
  retfings$game$Renders$TowerRender$$drawFins(ctx, colors);
  retfings$game$Renders$TowerRender$$drawNozzle(ctx, colors);
  retfings$game$Renders$TowerRender$$drawSideHighlight(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$BeeTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Renders$TowerRender$$BeeTowerRender$render_tower$46$inner(retfings$game$Renders$TowerRender$$beeTowerRenderSingleton, ctx, x, y, level, gs, time, aimDeg);
}
function retfings$game$Renders$TowerRender$$ChainTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$draw_band(ctx, sx, sy, ex, ey, lvl_scale) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const _p = 1;
  const _p$2 = 1.2 * lvl_scale;
  const bw = _p > _p$2 ? _p : _p$2;
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(210,220,240,0.95)");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, bw);
  retfings$game$Core$$CanvasRenderingContext2D$lineCap(ctx, "round");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, sx, sy);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, (sx + ex) / 2, (sy + ey) / 2, ex, ey);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(230,240,255,0.95)");
  const points = [{ _0: sx, _1: sy }, { _0: ex, _1: ey }];
  const _len = points.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const point = points[_i];
      const _px = point._0;
      const _py = point._1;
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, _px, _py, bw * 0.9, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$draw_cap(ctx, cx, cy, cap_rx, cap_ry, cap_body_h, pulse, lvl_scale) {
  const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, cx, cy, cx, cy + cap_body_h);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, "#FFD372");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0.55, "#FFB34C");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, "#E68A2B");
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, cx - cap_rx, cy);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, cx - cap_rx, cy + cap_body_h);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx, cy + cap_body_h, cap_rx, cap_ry, 0, 3.1415926535897931, 0, retfings$game$Renders$TowerRender$$draw_cap$46$constr$47$3816);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, cx + cap_rx, cy);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx, cy, cap_rx, cap_ry, 0, 0, 3.1415926535897931, retfings$game$Renders$TowerRender$$draw_cap$46$constr$47$3817);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(140,70,8,0.85)");
  const _p = 1;
  const _p$2 = 1.2 * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p > _p$2 ? _p : _p$2);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx, cy, cap_rx, cap_ry, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.65);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(255,255,255,0.7)");
  const _p$3 = 0.8;
  const _p$4 = 1 * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$3 > _p$4 ? _p$3 : _p$4);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx, cy, cap_rx * 0.86, cap_ry * 0.68, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.5 + 0.2 * pulse);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx - cap_rx * 0.35, cy - cap_ry * 0.05, cap_rx * 0.34, cap_ry * 0.48, -0.2, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$draw_star_path(ctx, cx, cy, star_r, r_inner, rad) {
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 10) {
      const a = rad(-90) + (i + 0) * 3.1415926535897931 / 5;
      const rr = (i % 2 | 0) === 0 ? star_r : r_inner;
      const px = cx + moonbitlang$core$math$$cos(a) * rr;
      const py = cy + moonbitlang$core$math$$sin(a) * rr;
      if (i === 0) {
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, px, py);
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, px, py);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
}
function retfings$game$Renders$TowerRender$$round_rect(ctx, x, y, width, height, radius) {
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + radius, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + width - radius, y);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + width, y, x + width, y + radius);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + width, y + height - radius);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + width, y + height, x + width - radius, y + height);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + radius, y + height);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y + height, x, y + height - radius);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x, y + radius);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y, x + radius, y);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
}
function retfings$game$Renders$TowerRender$$render$46$inner$46$rad$124$203(d) {
  return d * 3.1415926535897931 / 180;
}
function retfings$game$Renders$TowerRender$$render$46$inner$46$clamp$124$207(v, lo, hi) {
  const _p = hi > v ? v : hi;
  return lo > _p ? lo : _p;
}
function retfings$game$Renders$TowerRender$$ChargeJarTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  const aim = aimDeg * 3.1415926535897931 / 180;
  const t = time / 1000;
  const lvl_scale = 1 + 0.08 * retfings$game$Renders$TowerRender$$render$46$inner$46$clamp$124$207(level - 1, 0, 2);
  const _p = 6;
  const _p$2 = gs * 0.5 - 1;
  const _p$3 = (_p > _p$2 ? _p : _p$2) * 0.88;
  const _p$4 = gs * 0.38;
  const base_r = (_p$3 > _p$4 ? _p$4 : _p$3) * lvl_scale;
  const inner_r = base_r * 0.72;
  const _p$5 = gs * 0.68 * lvl_scale;
  const _p$6 = 44 * lvl_scale;
  const body_h = _p$5 > _p$6 ? _p$6 : _p$5;
  const _p$7 = gs * 0.4 * lvl_scale;
  const _p$8 = 26 * lvl_scale;
  const body_w = _p$7 > _p$8 ? _p$8 : _p$7;
  const _p$9 = body_w * 0.46;
  const _p$10 = 10 * lvl_scale;
  const body_r = _p$9 > _p$10 ? _p$10 : _p$9;
  const body_top = y - body_h * 0.48;
  const body_left = x - body_w * 0.3;
  const neck_w = body_w * 0.36;
  const neck_h = body_h * 0.18;
  const neck_x = x + body_w * 0.08 - neck_w * 0.5;
  const neck_y = body_top - neck_h * 0.35;
  const _p$11 = body_w * 0.34;
  const _p$12 = 9 * lvl_scale;
  const cap_rx = _p$11 > _p$12 ? _p$12 : _p$11;
  const cap_ry = cap_rx * 0.55;
  const cap_body_h = cap_rx * 0.95;
  const cap_attach = cap_body_h * 0.45;
  const ear_r = base_r * 0.32;
  const ear_at_r = base_r * 1.02;
  const pulse = 0.5 + 0.5 * moonbitlang$core$math$$sin(t * 2.4);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, aim);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, -x, -y);
  const base_grad = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y - base_r * 0.3, base_r * 0.15, x, y, base_r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(base_grad, 0, "#5FB0FF");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(base_grad, 1, "#1E72C6");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, base_grad);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, base_r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const inner_grad = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y, 1, x, y, inner_r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(inner_grad, 0, "#CFE8FF");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(inner_grad, 1, "#5AA7F3");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, inner_grad);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, inner_r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const _p$13 = [0, 120, -120];
  const _p$14 = new Array(_p$13.length);
  const _p$15 = _p$13.length;
  let _tmp = 0;
  while (true) {
    const _p$16 = _tmp;
    if (_p$16 < _p$15) {
      const _p$17 = _p$13[_p$16];
      _p$14[_p$16] = _p$17 * 3.1415926535897931 / 180;
      _tmp = _p$16 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ear_angles = _p$14;
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#195FA3");
  const _len = ear_angles.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const a = ear_angles[_i];
      const ex = x + moonbitlang$core$math$$cos(a) * ear_at_r;
      const ey = y + moonbitlang$core$math$$sin(a) * ear_at_r;
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, ex, ey, ear_r * 0.34, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(255,255,255,0.35)");
      const _p$16 = 1;
      const _p$17 = ear_r * 0.08;
      retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$16 > _p$17 ? _p$16 : _p$17);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, ex, ey, ear_r * 0.34, -0.62831853071795862, 1.2566370614359172, -1);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Renders$TowerRender$$round_rect(ctx, body_left, body_top, body_w, body_h, body_r);
  const glass = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, body_left, body_top, body_left, body_top + body_h);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(glass, 0, "rgba(160,220,255,0.55)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(glass, 1, "rgba(100,170,230,0.55)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, glass);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(30,100,170,0.9)");
  const _p$16 = 1.2;
  const _p$17 = 1.6 * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$16 > _p$17 ? _p$16 : _p$17);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const liq_top = body_top + body_h * (0.42 - 0.03 * moonbitlang$core$math$$sin(t * 3));
  const liq_left = body_left + body_w * 0.06;
  const liq_w = body_w * 0.88;
  const liq_h = body_h * 0.46;
  const liq_r = body_r * 0.55;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Renders$TowerRender$$round_rect(ctx, liq_left, liq_top, liq_w, liq_h, liq_r);
  const liq_g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, liq_left, liq_top, liq_left, liq_top + liq_h);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(liq_g, 0, "rgba(120,210,255,0.85)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(liq_g, 1, "rgba(60,170,240,0.9)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, liq_g);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.35 + 0.15 * pulse);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  const _tmp$3 = body_left + body_w * (0.18 + 0.02 * pulse);
  const _tmp$4 = body_top + body_h * 0.28;
  const _tmp$5 = body_w * 0.08;
  const _tmp$6 = body_h * 0.34;
  const _p$18 = -12;
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _p$18 * 3.1415926535897931 / 180, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Renders$TowerRender$$round_rect(ctx, neck_x, neck_y, neck_w, neck_h, neck_w * 0.25);
  const neck_g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, neck_x, neck_y, neck_x, neck_y + neck_h);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(neck_g, 0, "#AED3FF");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(neck_g, 1, "#76AEEE");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, neck_g);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(30,100,170,0.9)");
  const _p$19 = 1;
  const _p$20 = 1.2 * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$19 > _p$20 ? _p$19 : _p$20);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const top_cap_cy = neck_y - cap_attach;
  const bottom_cap_cy = body_top + body_h + cap_attach;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, top_cap_cy + cap_body_h * 0.85, cap_rx * 0.92, cap_ry * 0.58, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, bottom_cap_cy + cap_body_h * 0.85, cap_rx * 0.92, cap_ry * 0.58, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Renders$TowerRender$$draw_cap(ctx, x, top_cap_cy, cap_rx, cap_ry, cap_body_h, pulse, lvl_scale);
  retfings$game$Renders$TowerRender$$draw_cap(ctx, x, bottom_cap_cy, cap_rx, cap_ry, cap_body_h, pulse, lvl_scale);
  retfings$game$Renders$TowerRender$$draw_band(ctx, x, top_cap_cy + cap_body_h * 0.45, x, neck_y + neck_h * 0.15, lvl_scale);
  retfings$game$Renders$TowerRender$$draw_band(ctx, x, bottom_cap_cy, x, body_top + body_h - body_r * 0.6, lvl_scale);
  const star_count = moonbitlang$core$double$$Double$to_int(retfings$game$Renders$TowerRender$$render$46$inner$46$clamp$124$207(moonbitlang$core$double$$Double$round(level), 1, 3));
  const _p$21 = body_w * 0.12;
  const _p$22 = body_r * 0.7;
  const pad_x = _p$21 > _p$22 ? _p$21 : _p$22;
  const _p$23 = body_h * 0.12;
  const _p$24 = body_r * 0.7;
  const pad_y = _p$23 > _p$24 ? _p$23 : _p$24;
  const safe_l = body_left + pad_x;
  const safe_t = body_top + pad_y;
  const safe_w = body_w - pad_x * 2;
  const safe_h = body_h - pad_y * 2;
  const width_limit_r = safe_w / (2 * (star_count + 0) + 0.6 * (star_count + 0 - 1));
  const height_limit_r = safe_h / 2;
  let star_r = width_limit_r > height_limit_r ? height_limit_r : width_limit_r;
  const _p$25 = star_r;
  const _p$26 = 2.4;
  star_r = _p$25 > _p$26 ? _p$25 : _p$26;
  const r_inner = star_r * 0.48;
  const gap = star_r * 0.6;
  const row_w = (star_count + 0) * (2 * star_r) + (star_count + 0 - 1) * gap;
  let sx = safe_l + (safe_w - row_w) / 2 + star_r;
  let sy = safe_t + safe_h * 0.55;
  sy = retfings$game$Renders$TowerRender$$render$46$inner$46$clamp$124$207(sy, safe_t + star_r, safe_t + safe_h - star_r);
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < star_count) {
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.22);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, sx, sy + star_r * 0.62, star_r * 0.9, star_r * 0.35, 0, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, sx, sy - star_r, sx, sy + star_r);
      retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, "#FFF2A6");
      retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0.55, "#FFD052");
      retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, "#E89B2F");
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(140,70,8,0.6)");
      const _p$27 = 0.8;
      const _p$28 = 1 * lvl_scale;
      retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$27 > _p$28 ? _p$27 : _p$28);
      retfings$game$Renders$TowerRender$$draw_star_path(ctx, sx, sy, star_r, r_inner, retfings$game$Renders$TowerRender$$render$46$inner$46$rad$124$203);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.55);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      const _tmp$8 = sx - star_r * 0.15;
      const _tmp$9 = sy - star_r * 0.25;
      const _tmp$10 = star_r * 0.35;
      const _tmp$11 = star_r * 0.22;
      const _p$29 = -15;
      retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, _tmp$8, _tmp$9, _tmp$10, _tmp$11, _p$29 * 3.1415926535897931 / 180, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      sx = sx + (2 * star_r + gap);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$draw_round_rect_path(ctx, x, y, width, height, radius) {
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + radius, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + width - radius, y);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + width, y, x + width, y + radius);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + width, y + height - radius);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + width, y + height, x + width - radius, y + height);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + radius, y + height);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y + height, x, y + height - radius);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x, y + radius);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y, x + radius, y);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
}
function retfings$game$Renders$TowerRender$$CurveTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  const _p = level - 1;
  const _p$2 = 0;
  const _p$3 = 2;
  const lvl_scale = 1 + 0.08 * (_p < _p$2 ? _p$2 : _p > _p$3 ? _p$3 : _p);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.22);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  const _p$4 = 7;
  const _p$5 = gs * 0.09;
  const _tmp = y + (_p$4 > _p$5 ? _p$5 : _p$4) * lvl_scale;
  const _p$6 = 20;
  const _p$7 = gs * 0.34;
  const _tmp$2 = (_p$6 > _p$7 ? _p$7 : _p$6) * lvl_scale;
  const _p$8 = 7;
  const _p$9 = gs * 0.12;
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, _tmp, _tmp$2, (_p$8 > _p$9 ? _p$9 : _p$8) * lvl_scale, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const _p$10 = 6;
  const _p$11 = gs * 0.5 - 1;
  const _p$12 = (_p$10 > _p$11 ? _p$10 : _p$11) * 0.86;
  const _p$13 = gs * 0.36;
  const base_r = (_p$12 > _p$13 ? _p$13 : _p$12) * lvl_scale;
  const inner_r = base_r * 0.72;
  const g_base = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y - base_r * 0.3, base_r * 0.15, x, y, base_r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g_base, 0, "#C7E1FF");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g_base, 1, "#6FA9F2");
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g_base);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, base_r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const g_inner = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y, 1, x, y, inner_r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g_inner, 0, "#FFFFFF");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g_inner, 1, "#7FB8FF");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g_inner);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, inner_r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const _p$14 = gs * 0.2;
  const _p$15 = 12;
  const body_w = (_p$14 > _p$15 ? _p$15 : _p$14) * lvl_scale;
  const _p$16 = gs * 0.55;
  const _p$17 = 36;
  const body_l = (_p$16 > _p$17 ? _p$17 : _p$16) * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, aimDeg);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#3A6EA5");
  retfings$game$Renders$TowerRender$$draw_round_rect_path(ctx, -body_w * 0.7, -body_w * 0.7, body_w * 1.4, body_w * 1.4, body_w * 0.3);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const t_pulse = 0.4 + 0.6 * moonbitlang$core$math$$sin(time / 1000 * 2.2);
  const g_barrel = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, 0, -body_w / 2, body_l, body_w / 2);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g_barrel, 0, "#E7F0FF");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g_barrel, 1, "#98BDF0");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g_barrel);
  retfings$game$Renders$TowerRender$$draw_round_rect_path(ctx, 0, -body_w / 2, body_l, body_w, body_w * 0.4);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.35 + 0.25 * t_pulse);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  const _tmp$3 = body_l * 0.65;
  const _tmp$4 = -body_w * 0.12;
  const _tmp$5 = body_w * 0.35;
  const _tmp$6 = body_w * 0.22;
  const _p$18 = -12;
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _p$18 * 3.1415926535897931 / 180, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$DecayTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$FrozenTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$new() {
  ({});
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$get_instance() {
  const _bind = retfings$game$Renders$TowerRender$$laserTowerRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$TowerRender$$LaserTowerRender$new();
    retfings$game$Renders$TowerRender$$laserTowerRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$render_bullet$46$inner(self, ctx, x, y, level, gs, time, aimDeg) {
  const _arr = retfings$game$Core$Sprite$Tower$$laser_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      if (bullet.alive) {
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "yellow");
        retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x, y);
        const length = bullet.range;
        const end_x = bullet.position.x + bullet.direction.x * length;
        const end_y = bullet.position.y + bullet.direction.y * length;
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, end_x, end_y);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$drawGroundShadow(self, ctx, cx, cy, baseR) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx, cy + baseR * 0.28, baseR * 0.58, baseR * 0.18, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$drawLaserCore(self, ctx, colors, time) {
  const t = time / 1000;
  const pulse = 1 + 0.1 * moonbitlang$core$math$$sin(t * 8);
  const g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, -20, 0, 0, -20, 15 * pulse);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "laserGlow"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0.7, moonbitlang$core$builtin$$Map$at$152$(colors, "laserCore"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, "rgba(255,0,0,0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, -20, 15 * pulse, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$drawNozzle(self, ctx, colors) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "multiply");
  const g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 45, 0, 0, 45, 4.8);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, "rgba(0, 0, 0, 0.36)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, "rgba(0, 0, 0, 0.00)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 45, 16.5, 4.8, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "nozzle"));
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 35, 15, 8, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$drawPlate(self, ctx, cx, cy, r, colors) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "plateDark"));
  const earR = r * 0.22;
  const angles = [0, 1.5707963267948966, 3.1415926535897931, 4.71238898038469];
  const _len = angles.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const a = angles[_i];
      const ex = cx + moonbitlang$core$math$$cos(a) * (r - earR * 0.55);
      const ey = cy + moonbitlang$core$math$$sin(a) * (r - earR * 0.55);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, ex, ey, earR, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, cx - r * 0.25, cy - r * 0.25, r * 0.2, cx, cy, r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "plateLight"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "plateDark"));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, cx, cy, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "plateStroke"));
  const _p = 2;
  const _p$2 = r * 0.06;
  const lineWidth = _p > _p$2 ? _p : _p$2;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, lineWidth);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, cx, cy, r - lineWidth / 2, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const rg = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, cx, cy, r * 0.25, cx, cy, r * 0.9);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 0, "rgba(255,255,255,.65)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 1, "rgba(255,255,255,0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, cx, cy, r * 0.86, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$drawSideHighlight(self, ctx) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.52);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ffffff");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -15, -20);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -30, -10, -18, 15);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -12, 5, -8, -10);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$drawTowerBody(self, ctx, colors) {
  const bodyGrad = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, -30, -60, 30, 40);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(bodyGrad, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "towerShade"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(bodyGrad, 0.45, moonbitlang$core$builtin$$Map$at$152$(colors, "towerMain"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(bodyGrad, 1, "#00ccff");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, bodyGrad);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 0, -50);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 30, -30, 25, 0);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 22, 20, 0, 35);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -22, 20, -25, 0);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -30, -30, 0, -50);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$render_tower$46$inner(self, ctx, x, y, level, gs, time, aimDeg) {
  const colors = moonbitlang$core$builtin$$Map$from_array$152$({ buf: retfings$game$Renders$TowerRender$$render_tower$46$inner$46$42$bind$47$4017, start: 0, end: 9 });
  const half = gs * 0.5;
  const _p = 1;
  const _p$2 = gs * 0.02;
  const margin = _p > _p$2 ? _p : _p$2;
  const baseR = (half - margin) / 1.13;
  const cellScale = (half - margin) / 100;
  const v = 0.86 + 0.03 * (level - 1);
  const _p$3 = 0.86;
  const _p$4 = 0.92;
  const _p$5 = _p$4 > v ? v : _p$4;
  const lvlScale = _p$3 > _p$5 ? _p$3 : _p$5;
  const bodyScale = cellScale * lvlScale;
  retfings$game$Renders$TowerRender$$LaserTowerRender$drawGroundShadow(self, ctx, x, y, baseR);
  retfings$game$Renders$TowerRender$$LaserTowerRender$drawPlate(self, ctx, x, y, baseR, colors);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  const d = aimDeg - 90;
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, d * 3.1415926535897931 / 180);
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, bodyScale, bodyScale);
  retfings$game$Renders$TowerRender$$LaserTowerRender$drawTowerBody(retfings$game$Renders$TowerRender$$laserTowerRenderSingleton, ctx, colors);
  retfings$game$Renders$TowerRender$$LaserTowerRender$drawLaserCore(retfings$game$Renders$TowerRender$$laserTowerRenderSingleton, ctx, colors, time);
  retfings$game$Renders$TowerRender$$LaserTowerRender$drawNozzle(retfings$game$Renders$TowerRender$$laserTowerRenderSingleton, ctx, colors);
  retfings$game$Renders$TowerRender$$LaserTowerRender$drawSideHighlight(retfings$game$Renders$TowerRender$$laserTowerRenderSingleton, ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$LaserTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Renders$TowerRender$$LaserTowerRender$render_tower$46$inner(retfings$game$Renders$TowerRender$$laserTowerRenderSingleton, ctx, x, y, level, gs, time, aimDeg);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Renders$TowerRender$$LaserTowerRender$render_bullet$46$inner(retfings$game$Renders$TowerRender$$laserTowerRenderSingleton, ctx, x, y, level, gs, time, aimDeg);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$LightningTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  const v = level - 1;
  const _p = 0;
  const _p$2 = 2;
  const _p$3 = _p$2 > v ? v : _p$2;
  const lvlScale = 1 + 0.08 * (_p > _p$3 ? _p : _p$3);
  const _p$4 = gs * 0.4;
  const _p$5 = 30;
  const baseR = (_p$4 > _p$5 ? _p$5 : _p$4) * lvlScale;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.22);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, y + baseR * 0.3, baseR * 0.6, baseR * 0.2, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const gBase = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y, 0, x, y, baseR);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(gBase, 0, "#8A2BE2");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(gBase, 1, "#4B0082");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, gBase);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, baseR, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#2E0854");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const orbR = baseR * 0.5;
  const orbY = y - baseR * 0.3;
  const pulse = 0.6 + 0.4 * moonbitlang$core$math$$sin(time / 1000 * 5);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, `rgba(180,130,255,${moonbitlang$core$builtin$$Show$to_string$151$(pulse)})`);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, orbY, orbR, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, orbY);
  const d = time * 0.2;
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, d * 3.1415926535897931 / 180);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#E0B0FF");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  const ringR = orbR * 1.3;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 6) {
      const a = (i + 0) / 6 * 3.1415926535897931 * 2;
      const lx = moonbitlang$core$math$$cos(a) * ringR;
      const ly = moonbitlang$core$math$$sin(a) * ringR;
      if (i === 0) {
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, lx, ly);
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, lx, ly);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const sparkY = y + baseR * 0.4;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < 3) {
      const offset = moonbitlang$core$math$$sin(time / 200 + (i + 0)) * 4;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#C9BFFF");
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x + offset, sparkY + (i + 0) * 3, 1.5, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$NegativeMagneticTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  const colors = moonbitlang$core$builtin$$Map$from_array$152$({ buf: retfings$game$Renders$TowerRender$$render$46$inner$46$42$bind$47$4077, start: 0, end: 9 });
  const half = gs * 0.5;
  const _p = 1;
  const _p$2 = gs * 0.02;
  const margin = _p > _p$2 ? _p : _p$2;
  const baseR = (half - margin) / 1.13;
  const cellScale = (half - margin) / 100;
  const _p$3 = 1;
  const _p$4 = 3;
  const _p$5 = 0.86 + 0.03 * ((level < _p$3 ? _p$3 : level > _p$4 ? _p$4 : level) - 1);
  const _p$6 = 0.86;
  const _p$7 = 0.92;
  const lvlScale = _p$5 < _p$6 ? _p$6 : _p$5 > _p$7 ? _p$7 : _p$5;
  const bodyScale = cellScale * lvlScale;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, y + baseR * 0.28, baseR * 0.58, baseR * 0.18, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const width = baseR * 1.2;
  const height = baseR * 0.8;
  const thickness = baseR * 0.3;
  const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, x - width / 2, y - height / 2, x + width / 2, y + height / 2);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "baseLight"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "baseDark"));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x + width / 2 - thickness, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y + height / 2 - thickness, width, thickness);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "baseStroke"));
  const _p$8 = 2;
  const _p$9 = baseR * 0.06;
  const linewidth = _p$8 > _p$9 ? _p$8 : _p$9;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, linewidth);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x + width / 2 - thickness, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y + height / 2 - thickness, width, thickness);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const rg = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y, 0, x, y, baseR * 0.8);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 0, "rgba(255,255,255,.35)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 1, "rgba(255,255,255,0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, baseR * 0.7, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, bodyScale, bodyScale);
  const t = time / 1000;
  const rot = t * 3;
  const pulse = 0.7 + 0.3 * moonbitlang$core$math$$sin(t * 5 + level);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, rot);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 8);
  const g$2 = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, -35, 0, 35, 0);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g$2, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "ring1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g$2, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "ring2"));
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$168$(ctx, g$2);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, pulse);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 35, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$2 = time / 1000;
  const rot$2 = t$2 * 4;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, rot$2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "magnet"));
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 25, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ffffff");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, -10, -3, 20, 6);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$3 = time / 1000;
  const pulse$2 = 0.5 + 0.5 * moonbitlang$core$math$$sin(t$3 * 6);
  const _p$10 = 1;
  const _p$11 = 3;
  const extra = ((level < _p$10 ? _p$10 : level > _p$11 ? _p$11 : level) - 1) * 3;
  const r = 20 + 5 * pulse$2 + extra;
  const rg$2 = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg$2, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "glow1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg$2, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "glow0"));
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg$2);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$4 = time / 1000;
  const attack_phase = moonbitlang$core$builtin$$Mod$mod$14$(time / 800, 2);
  if (attack_phase < 1) {
    const pulse_size = 1 + 0.5 * moonbitlang$core$math$$sin(t$4 * 15);
    const base_r = 40 * pulse_size;
    const _p$12 = 1;
    const _p$13 = 3;
    const extra$2 = ((level < _p$12 ? _p$12 : level > _p$13 ? _p$13 : level) - 1) * 5;
    const r$2 = base_r + extra$2;
    const outer_g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, r$2);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(outer_g, 0, "rgba(0,0,255,0)");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(outer_g, 0.7, "rgba(0,0,255,0.3)");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(outer_g, 1, "rgba(0,0,255,0.1)");
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, outer_g);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, r$2, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
    const inner_r = r$2 * 0.6;
    const inner_g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, inner_r);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(inner_g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "glow1"));
    retfings$game$Core$$CanvasGradient$addColorStop$144$(inner_g, 1, "rgba(0,0,255,0)");
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, inner_g);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, inner_r, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$PlasmaTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  const colors = moonbitlang$core$builtin$$Map$from_array$152$({ buf: retfings$game$Renders$TowerRender$$render$46$inner$46$42$bind$47$4129, start: 0, end: 11 });
  const half = gs * 0.5;
  const _p = 1;
  const _p$2 = gs * 0.02;
  const margin = _p > _p$2 ? _p : _p$2;
  const baseR = (half - margin) / 1.13;
  const cellScale = (half - margin) / 100;
  const _p$3 = 1;
  const _p$4 = 3;
  const _p$5 = 0.86 + 0.03 * ((level < _p$3 ? _p$3 : level > _p$4 ? _p$4 : level) - 1);
  const _p$6 = 0.86;
  const _p$7 = 0.92;
  const lvlScale = _p$5 < _p$6 ? _p$6 : _p$5 > _p$7 ? _p$7 : _p$5;
  const bodyScale = cellScale * lvlScale;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, y + baseR * 0.28, baseR * 0.58, baseR * 0.18, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const rr = baseR * 0.86;
  const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, x - rr, y - rr, x + rr, y + rr);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "baseLight"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "baseDark"));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 6) {
      const a = 0.52359877559829882 + (i + 0) * 3.1415926535897931 / 3;
      const px = x + moonbitlang$core$math$$cos(a) * rr;
      const py = y + moonbitlang$core$math$$sin(a) * rr;
      if (i === 0) {
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, px, py);
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, px, py);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "baseStroke"));
  const _p$8 = 2;
  const _p$9 = baseR * 0.06;
  const linewidth = _p$8 > _p$9 ? _p$8 : _p$9;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, linewidth);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < 6) {
      const a = 0.52359877559829882 + (i + 0) * 3.1415926535897931 / 3;
      const px = x + moonbitlang$core$math$$cos(a) * (rr - linewidth / 2);
      const py = y + moonbitlang$core$math$$sin(a) * (rr - linewidth / 2);
      if (i === 0) {
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, px, py);
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, px, py);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "bolt"));
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 6) {
      const a = 0.52359877559829882 + (i + 0) * 3.1415926535897931 / 3;
      const px = x + moonbitlang$core$math$$cos(a) * (rr * 0.7);
      const py = y + moonbitlang$core$math$$sin(a) * (rr * 0.7);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      const _p$10 = 2;
      const _p$11 = baseR * 0.08;
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, px, py, _p$10 > _p$11 ? _p$10 : _p$11, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const rg = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y, rr * 0.25, x, y, rr * 0.95);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 0, "rgba(255,255,255,.35)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 1, "rgba(255,255,255,0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, rr * 0.92, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  const _p$10 = aimDeg - 90;
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, _p$10 * 3.1415926535897931 / 180);
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, bodyScale, bodyScale);
  const t = time / 1000;
  const rot = t * 2;
  const pulse = 0.85 + 0.15 * moonbitlang$core$math$$sin(t * 4 + level);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, rot);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 10);
  const g$2 = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, -40, 0, 40, 0);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g$2, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "ring1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g$2, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "ring2"));
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$168$(ctx, g$2);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, pulse);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 6, 40, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.5 * pulse);
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < 6) {
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 6, 40, (i + 0) * 3.1415926535897931 / 3 + 0.1, (i + 0) * 3.1415926535897931 / 3 + 0.24, -1);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const lg = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, -18, -40, 22, 80);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(lg, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "barrelShade"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(lg, 0.45, moonbitlang$core$builtin$$Map$at$152$(colors, "barrelMain"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(lg, 1, "#bfe0ff");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, lg);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 0, -42);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 28, -18, 22, 28);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 20, 52, 0, 70);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -20, 52, -22, 28);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -28, -18, 0, -42);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#2a3e64");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 70, 18, 9, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -16, 10);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, 16, 10);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, 20, 18, 16, 26);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, -16, 26);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -20, 18, -16, 10);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  const sg = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, -16, 10, 16, 26);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(sg, 0, "#53ffd8");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(sg, 1, "#6ad1ff");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, sg);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.75);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$2 = time / 1000;
  const pulse$2 = 0.55 + 0.45 * moonbitlang$core$math$$sin(t$2 * 8);
  const _p$11 = 1;
  const _p$12 = 3;
  const extra = ((level < _p$11 ? _p$11 : level > _p$12 ? _p$12 : level) - 1) * 3;
  const r = 14 + 4 * pulse$2 + extra;
  const rg$2 = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 74, 0, 0, 74, r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg$2, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "glow1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg$2, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "glow0"));
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg$2);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 74, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.9);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "muzzleCore"));
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 72, 6 + extra * 0.4, 4 + extra * 0.3, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.5);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ffffff");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -18, -10);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -34, 10, -18, 34);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, -12, 20, -8, 0);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$3 = time / 1000;
  const attack_phase = moonbitlang$core$builtin$$Mod$mod$14$(time / 700, 2);
  if (attack_phase < 1) {
    const pulse_size = 1 + 0.3 * moonbitlang$core$math$$sin(t$3 * 20);
    const base_r = 10 * pulse_size;
    const _p$13 = 1;
    const _p$14 = 3;
    const extra$2 = ((level < _p$13 ? _p$13 : level > _p$14 ? _p$14 : level) - 1) * 3;
    const r$2 = base_r + extra$2;
    const plasma_g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 74, 0, 0, 74, r$2);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(plasma_g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "glow1"));
    retfings$game$Core$$CanvasGradient$addColorStop$144$(plasma_g, 0.6, "rgba(166,255,251,0.5)");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(plasma_g, 1, "rgba(166,255,251,0)");
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, plasma_g);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 74, r$2, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(166,255,251,0.3)");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 0, 74);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, 0, 74 + r$2 * 2);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$render_effect_field_active(ctx, x1, y1, x2, y2, dt, max_time) {
  if (dt < max_time) {
    return undefined;
  }
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const _pulse = 0.8 + 0.2 * moonbitlang$core$math$$sin(dt * 5);
  const gradient = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, x1, y1, x2, y2);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(gradient, 0, "rgba(0, 0, 255, 0.6)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(gradient, 0.5, "rgba(128, 0, 128, 0.8)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(gradient, 1, "rgba(255, 0, 0, 0.6)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x1, y1);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x2, y2);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$168$(ctx, gradient);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, retfings$game$Core$Sprite$Tower$$positive_magnetic_width);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  moonbitlang$core$math$$hypot(x2 - x1, y2 - y1) / 50;
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x1, y1);
  const _end642 = moonbitlang$core$double$$Double$to_int(50);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end642) {
      const t = (i + 0) / 50;
      const px = x1 + (x2 - x1) * t;
      const py = y1 + (y2 - y1) * t;
      const _offset = 8 * moonbitlang$core$math$$sin(t * 3.1415926535897931 * 4 + dt * 0.01) * _pulse;
      const angle = moonbitlang$core$math$$atan2(y2 - y1, x2 - x1) + 1.5707963267948966;
      const dx = moonbitlang$core$math$$cos(angle) * _offset;
      const dy = moonbitlang$core$math$$sin(angle) * _offset;
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, px + dx, py + dy);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(255, 255, 255, 0.4)");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$render_effect_ray_active(ctx, x1, y1, x2, y2, dt, max_time) {
  if (dt >= max_time) {
    return undefined;
  }
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const progress = dt / max_time;
  const pulse = 0.7 + 0.3 * moonbitlang$core$math$$sin(dt * 10);
  const mid_x = (x1 + x2) * 0.5;
  const mid_y = (y1 + y2) * 0.5;
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x1, y1);
  const blue_end_x = x1 + (mid_x - x1) * progress;
  const blue_end_y = y1 + (mid_y - y1) * progress;
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, blue_end_x, blue_end_y);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0, 0, 255, 0.8)");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 8 * pulse);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const blue_glow = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, blue_end_x, blue_end_y, 0, blue_end_x, blue_end_y, 20);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(blue_glow, 0, "rgba(0, 0, 255, 0.6)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(blue_glow, 1, "rgba(0, 0, 255, 0)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, blue_end_x, blue_end_y, 20, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, blue_glow);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "source-over");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x2, y2);
  const red_end_x = x2 + (mid_x - x2) * progress;
  const red_end_y = y2 + (mid_y - y2) * progress;
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, red_end_x, red_end_y);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(255, 0, 0, 0.8)");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 8 * pulse);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const red_glow = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, red_end_x, red_end_y, 0, red_end_x, red_end_y, 20);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(red_glow, 0, "rgba(255, 0, 0, 0.6)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(red_glow, 1, "rgba(255, 0, 0, 0)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, red_end_x, red_end_y, 20, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, red_glow);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "source-over");
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$render_effect(ctx) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const _arr = retfings$game$Core$Sprite$Tower$$positive_magnetic_field_datas.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const ma = _arr[_i];
      if (ma.magnetic_ray_active) {
        retfings$game$Renders$TowerRender$$render_effect_ray_active(ctx, ma.negative_tower_x, ma.negative_tower_y, ma.positive_tower_x, ma.positive_tower_y, ma.magnetic_field_timer, retfings$game$Core$Sprite$Tower$$magnetic_field_timer_max);
      } else {
        retfings$game$Renders$TowerRender$$render_effect_field_active(ctx, ma.negative_tower_x, ma.negative_tower_y, ma.positive_tower_x, ma.positive_tower_y, ma.magnetic_field_timer, retfings$game$Core$Sprite$Tower$$magnetic_field_timer_max);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$render_tower$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  const colors = moonbitlang$core$builtin$$Map$from_array$152$({ buf: retfings$game$Renders$TowerRender$$render_tower$46$inner$46$42$bind$47$4235, start: 0, end: 9 });
  const half = gs * 0.5;
  const _p = 1;
  const _p$2 = gs * 0.02;
  const margin = _p > _p$2 ? _p : _p$2;
  const baseR = (half - margin) / 1.13;
  const cellScale = (half - margin) / 100;
  const _p$3 = 1;
  const _p$4 = 3;
  const _p$5 = 0.86 + 0.03 * ((level < _p$3 ? _p$3 : level > _p$4 ? _p$4 : level) - 1);
  const _p$6 = 0.86;
  const _p$7 = 0.92;
  const lvlScale = _p$5 < _p$6 ? _p$6 : _p$5 > _p$7 ? _p$7 : _p$5;
  const bodyScale = cellScale * lvlScale;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, y + baseR * 0.28, baseR * 0.58, baseR * 0.18, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const width = baseR * 1.2;
  const height = baseR * 0.8;
  const thickness = baseR * 0.3;
  const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, x - width / 2, y - height / 2, x + width / 2, y + height / 2);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "baseLight"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "baseDark"));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x + width / 2 - thickness, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y + height / 2 - thickness, width, thickness);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "baseStroke"));
  const _p$8 = 2;
  const _p$9 = baseR * 0.06;
  const linewidth = _p$8 > _p$9 ? _p$8 : _p$9;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, linewidth);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x + width / 2 - thickness, y - height / 2, thickness, height);
  retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - width / 2, y + height / 2 - thickness, width, thickness);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const rg = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y, 0, x, y, baseR * 0.8);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 0, "rgba(255,255,255,.35)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg, 1, "rgba(255,255,255,0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, baseR * 0.7, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, bodyScale, bodyScale);
  const t = time / 1000;
  const rot = t * 3;
  const pulse = 0.7 + 0.3 * moonbitlang$core$math$$sin(t * 5 + level);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, rot);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 8);
  const g$2 = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, -35, 0, 35, 0);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g$2, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "ring1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g$2, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "ring2"));
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$168$(ctx, g$2);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, pulse);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 35, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$2 = time / 1000;
  const rot$2 = t$2 * 4;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, rot$2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$builtin$$Map$at$152$(colors, "magnet"));
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 25, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ffffff");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, -3, -10, 6, 20);
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, -10, -3, 20, 6);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$3 = time / 1000;
  const pulse$2 = 0.5 + 0.5 * moonbitlang$core$math$$sin(t$3 * 6);
  const _p$10 = 1;
  const _p$11 = 3;
  const extra = ((level < _p$10 ? _p$10 : level > _p$11 ? _p$11 : level) - 1) * 3;
  const r = 20 + 5 * pulse$2 + extra;
  const rg$2 = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg$2, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "glow1"));
  retfings$game$Core$$CanvasGradient$addColorStop$144$(rg$2, 1, moonbitlang$core$builtin$$Map$at$152$(colors, "glow0"));
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, rg$2);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const t$4 = time / 1000;
  const attack_phase = moonbitlang$core$builtin$$Mod$mod$14$(time / 800, 2);
  if (attack_phase < 1) {
    const pulse_size = 1 + 0.5 * moonbitlang$core$math$$sin(t$4 * 15);
    const base_r = 40 * pulse_size;
    const _p$12 = 1;
    const _p$13 = 3;
    const extra$2 = ((level < _p$12 ? _p$12 : level > _p$13 ? _p$13 : level) - 1) * 5;
    const r$2 = base_r + extra$2;
    const outer_g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, r$2);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(outer_g, 0, "rgba(255,0,0,0)");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(outer_g, 0.7, "rgba(255,0,0,0.3)");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(outer_g, 1, "rgba(255,0,0,0.1)");
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, outer_g);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, r$2, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
    const inner_r = r$2 * 0.6;
    const inner_g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, inner_r);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(inner_g, 0, moonbitlang$core$builtin$$Map$at$152$(colors, "glow1"));
    retfings$game$Core$$CanvasGradient$addColorStop$144$(inner_g, 1, "rgba(255,0,0,0)");
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$globalCompositeOperation$144$(ctx, "lighter");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, inner_g);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, inner_r, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$PositiveMagneticTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Renders$TowerRender$$render_tower$46$inner(ctx, x, y, level, gs, time, aimDeg);
  retfings$game$Renders$TowerRender$$render_effect(ctx);
}
function retfings$game$Renders$TowerRender$$SkyTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$render$46$inner$46$clamp$124$768(v, lo, hi) {
  const _p = hi > v ? v : hi;
  return lo > _p ? lo : _p;
}
function retfings$game$Renders$TowerRender$$SnowflakeTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  const aim = aimDeg * 3.1415926535897931 / 180;
  const t = time / 1000;
  const lvl = retfings$game$Renders$TowerRender$$render$46$inner$46$clamp$124$768(level, 1, 5);
  const lvl_scale = 1 + 0.12 * (lvl - 1);
  const _p = gs * 0.32 * lvl_scale;
  const _p$2 = 32 * lvl_scale;
  const base_r = _p > _p$2 ? _p$2 : _p;
  const tower_h = base_r * 1.8;
  const tower_w = base_r * 0.9;
  const pulse = 0.85 + 0.15 * moonbitlang$core$math$$sin(t * 2.8);
  const pulse_r = base_r * pulse;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, aim);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, -x, -y);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  const hex_points = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 6) {
      const _p$3 = 60 * (i + 0);
      const a = _p$3 * 3.1415926535897931 / 180;
      moonbitlang$core$array$$Array$push$14$(hex_points, moonbitlang$core$math$$cos(a) * pulse_r);
      moonbitlang$core$array$$Array$push$14$(hex_points, moonbitlang$core$math$$sin(a) * pulse_r);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + moonbitlang$core$array$$Array$at$14$(hex_points, 0), y + moonbitlang$core$array$$Array$at$14$(hex_points, 1));
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < 6) {
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + moonbitlang$core$array$$Array$at$14$(hex_points, Math.imul(i, 2) | 0), y + moonbitlang$core$array$$Array$at$14$(hex_points, (Math.imul(i, 2) | 0) + 1 | 0));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  const base_grad = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x, y - base_r * 0.4, 1, x, y, pulse_r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(base_grad, 0, "rgba(200, 240, 255, 0.7)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(base_grad, 0.6, "rgba(140, 210, 255, 0.5)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(base_grad, 1, "rgba(80, 160, 220, 0.3)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, base_grad);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(100, 180, 240, 0.6)");
  const _p$3 = 1.2;
  const _p$4 = 1.8 * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$3 > _p$4 ? _p$3 : _p$4);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const body_top = y - tower_h;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, 0, 0);
  const body_hex = [];
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 6) {
      const _p$5 = 60 * (i + 0);
      const a = _p$5 * 3.1415926535897931 / 180;
      moonbitlang$core$array$$Array$push$14$(body_hex, moonbitlang$core$math$$cos(a) * tower_w * 0.5);
      moonbitlang$core$array$$Array$push$14$(body_hex, moonbitlang$core$math$$sin(a) * tower_w * 0.3);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + moonbitlang$core$array$$Array$at$14$(body_hex, 0), y + moonbitlang$core$array$$Array$at$14$(body_hex, 1));
  let _tmp$4 = 1;
  while (true) {
    const i = _tmp$4;
    if (i < 6) {
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + moonbitlang$core$array$$Array$at$14$(body_hex, Math.imul(i, 2) | 0), y + moonbitlang$core$array$$Array$at$14$(body_hex, (Math.imul(i, 2) | 0) + 1 | 0));
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + moonbitlang$core$array$$Array$at$14$(body_hex, 0), body_top + moonbitlang$core$array$$Array$at$14$(body_hex, 1));
  let _tmp$5 = 1;
  while (true) {
    const i = _tmp$5;
    if (i < 6) {
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + moonbitlang$core$array$$Array$at$14$(body_hex, Math.imul(i, 2) | 0), body_top + moonbitlang$core$array$$Array$at$14$(body_hex, (Math.imul(i, 2) | 0) + 1 | 0));
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  const body_grad = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, x, body_top, x, y);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(body_grad, 0, "rgba(220, 245, 255, 0.85)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(body_grad, 1, "rgba(160, 220, 255, 0.65)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, body_grad);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(90, 170, 230, 0.7)");
  const _p$5 = 1;
  const _p$6 = 1.4 * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$5 > _p$6 ? _p$5 : _p$6);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const snow_center_y = body_top - base_r * 0.3;
  const snow_r = base_r * 0.6 * pulse;
  const _p$7 = t * 30;
  const snow_spin = _p$7 * 3.1415926535897931 / 180;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, snow_center_y);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, snow_spin);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(255, 255, 255, 0.95)");
  const _p$8 = 1.6;
  const _p$9 = 2.2 * lvl_scale;
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$8 > _p$9 ? _p$8 : _p$9);
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < 6) {
      const _p$10 = 60 * (i + 0);
      const a = _p$10 * 3.1415926535897931 / 180;
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 0, 0);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, moonbitlang$core$math$$cos(a) * snow_r, moonbitlang$core$math$$sin(a) * snow_r);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (lvl >= 2) {
    const _p$10 = 0.9;
    const _p$11 = 1.3 * lvl_scale;
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$10 > _p$11 ? _p$10 : _p$11);
    let _tmp$7 = 0;
    while (true) {
      const i = _tmp$7;
      if (i < 6) {
        const _p$12 = 60 * (i + 0);
        const a = _p$12 * 3.1415926535897931 / 180;
        const main_x = moonbitlang$core$math$$cos(a) * snow_r * 0.6;
        const main_y = moonbitlang$core$math$$sin(a) * snow_r * 0.6;
        const _p$13 = 45;
        const a1 = a + _p$13 * 3.1415926535897931 / 180;
        const _p$14 = 45;
        const a2 = a - _p$14 * 3.1415926535897931 / 180;
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, main_x, main_y);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, main_x + moonbitlang$core$math$$cos(a1) * snow_r * 0.3, main_y + moonbitlang$core$math$$sin(a1) * snow_r * 0.3);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, main_x, main_y);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, main_x + moonbitlang$core$math$$cos(a2) * snow_r * 0.3, main_y + moonbitlang$core$math$$sin(a2) * snow_r * 0.3);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
        _tmp$7 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const center_grad = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 1, 0, 0, snow_r * 0.25);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(center_grad, 0, "rgba(255, 255, 255, 0.9)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(center_grad, 1, "rgba(180, 230, 255, 0.4)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, center_grad);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, snow_r * 0.25, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  const spike_count = moonbitlang$core$double$$Double$to_int(retfings$game$Renders$TowerRender$$render$46$inner$46$clamp$124$768(moonbitlang$core$double$$Double$round(lvl), 1, 4));
  if (spike_count > 0) {
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(200, 240, 255, 0.7)");
    const _p$10 = 1;
    const _p$11 = 1.5 * lvl_scale;
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, _p$10 > _p$11 ? _p$10 : _p$11);
    let _tmp$7 = 0;
    while (true) {
      const i = _tmp$7;
      if (i < spike_count) {
        const _p$12 = 360 / (spike_count + 0) * (i + 0);
        const angle = _p$12 * 3.1415926535897931 / 180;
        const sx = x + moonbitlang$core$math$$cos(angle) * (tower_w * 0.6);
        const sy = y - tower_h * 0.6;
        const ex = sx + moonbitlang$core$math$$cos(angle) * base_r * 0.4;
        const ey = sy + moonbitlang$core$math$$sin(angle) * base_r * 0.4;
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, sx, sy);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, ex, ey);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
        _tmp$7 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.4 + 0.2 * moonbitlang$core$math$$sin(t * 4));
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255, 255, 255, 0.8)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  const _tmp$7 = x - tower_w * 0.3;
  const _tmp$8 = body_top + tower_h * 0.3;
  const _tmp$9 = tower_w * 0.15;
  const _tmp$10 = tower_h * 0.25;
  const _p$10 = -20;
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, _tmp$7, _tmp$8, _tmp$9, _tmp$10, _p$10 * 3.1415926535897931 / 180, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$SpeedTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$ThunderTowerRender$render$46$inner(ctx, x, y, level, gs, time, aimDeg) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$TowerRender$render_all_tower(self, timestamp) {
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = _arr[_i];
      let aim_deg = 0;
      const _bind = retfings$game$Renders$TowerRender$$find_closest_enemy_in_range(t);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _enemy = _Some._0;
        aim_deg = retfings$game$Core$Math$$tower_enemy_deg(_enemy.method_0(_enemy.self), t.method_4(t.self));
        t.method_12(t.self, aim_deg);
      } else {
        aim_deg = t.method_13(t.self);
      }
      const _bind$2 = t.method_8(t.self);
      switch (_bind$2) {
        case 2: {
          retfings$game$Renders$TowerRender$$LightningTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 3: {
          retfings$game$Renders$TowerRender$$ChargeJarTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 4: {
          retfings$game$Renders$TowerRender$$PositiveMagneticTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 5: {
          retfings$game$Renders$TowerRender$$NegativeMagneticTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 1: {
          retfings$game$Renders$TowerRender$$CurveTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 0: {
          retfings$game$Renders$TowerRender$$PlasmaTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 6: {
          retfings$game$Renders$TowerRender$$BeeTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 7: {
          retfings$game$Renders$TowerRender$$SnowflakeTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 8: {
          retfings$game$Renders$TowerRender$$LaserTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 10: {
          retfings$game$Renders$TowerRender$$DecayTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 9: {
          retfings$game$Renders$TowerRender$$FrozenTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 15: {
          retfings$game$Renders$TowerRender$$TreasureTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 12: {
          retfings$game$Renders$TowerRender$$SpeedTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 13: {
          retfings$game$Renders$TowerRender$$SkyTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        case 14: {
          retfings$game$Renders$TowerRender$$ThunderTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
          break;
        }
        default: {
          retfings$game$Renders$TowerRender$$ChainTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, t.method_4(t.self).x, t.method_4(t.self).y, t.method_5(t.self) + 0, retfings$game$Core$$map.gridSize, timestamp, aim_deg);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$TowerRender$$register_frame_callback(callback) {
  moonbitlang$core$array$$Array$push$163$(retfings$game$Renders$TowerRender$$frame_callbacks.val, callback);
}
function retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner(ctx, timestamp, enemy, enemyKey, durationMs, damageValue, particleCount, particleSize, particleSpeed, color) {
  const _bind = moonbitlang$core$builtin$$Map$get$56$(retfings$game$Renders$TowerRender$$poisonStates.val, enemyKey);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _state = _Some;
    _state.totalDamage = _state.totalDamage + damageValue;
    _state.endTime = timestamp + durationMs;
    return undefined;
  }
  const state = { totalDamage: damageValue, endTime: timestamp + durationMs, particles: [], damageTexts: [], lastDamageTime: 0 };
  moonbitlang$core$builtin$$Map$set$56$(retfings$game$Renders$TowerRender$$poisonStates.val, enemyKey, state);
  const update_fn = (timestamp$2) => {
    const targetX = enemy.method_0(enemy.self).x;
    const targetY = enemy.method_0(enemy.self).y;
    const damageNumbersX = enemy.method_0(enemy.self).x;
    const damageNumbersY = enemy.method_0(enemy.self).y - 20;
    if (!enemy.method_1(enemy.self)) {
      return undefined;
    }
    if (timestamp$2 >= state.endTime) {
      moonbitlang$core$builtin$$Map$remove$56$(retfings$game$Renders$TowerRender$$poisonStates.val, enemyKey);
      moonbitlang$core$builtin$$println$144$(`remove key ${moonbitlang$core$builtin$$Show$to_string$27$(enemyKey)}`);
      return undefined;
    }
    if (timestamp$2 - state.lastDamageTime >= 166) {
      moonbitlang$core$array$$Array$push$126$(state.damageTexts, { x: damageNumbersX, y: damageNumbersY - retfings$game$Renders$TowerRender$$random() * 10, alpha: 1, vy: -0.8, decay: 0.03 });
      state.lastDamageTime = timestamp$2;
    }
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i <= particleCount) {
        moonbitlang$core$array$$Array$push$125$(state.particles, { x: targetX + (retfings$game$Renders$TowerRender$$random() - 0.5) * 20, y: targetY + (retfings$game$Renders$TowerRender$$random() - 0.5) * 20, vx: (retfings$game$Renders$TowerRender$$random() - 0.8) * particleSpeed, vy: (retfings$game$Renders$TowerRender$$random() - 0.5) * particleSpeed, radius: retfings$game$Renders$TowerRender$$random() * particleSize + 1, alpha: 0.8, decay: 0.02 + retfings$game$Renders$TowerRender$$random() * 0.01 });
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let i = state.particles.length - 1 | 0;
    while (true) {
      if (i >= 0) {
        const p = moonbitlang$core$array$$Array$at$125$(state.particles, i);
        p.x = p.x + p.vx;
        p.y = p.y + p.vy;
        p.alpha = p.alpha - p.decay;
        if (p.alpha <= 0) {
          moonbitlang$core$array$$Array$remove$125$(state.particles, i);
        }
        i = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let i$2 = state.damageTexts.length - 1 | 0;
    while (true) {
      if (i$2 >= 0) {
        const d = moonbitlang$core$array$$Array$at$126$(state.damageTexts, i$2);
        d.y = d.y + d.vy;
        d.alpha = d.alpha - d.decay;
        if (d.alpha <= 0) {
          moonbitlang$core$array$$Array$remove$126$(state.damageTexts, i$2);
        }
        i$2 = i$2 - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _arr = state.particles;
    const _len = _arr.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const p = _arr[_i];
        retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
        const _tmp$3 = { str: retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner$46$42$bind$124$1281, start: 0, end: retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner$46$42$bind$124$1281.length };
        const _bind$2 = moonbitlang$core$builtin$$Show$to_string$151$(p.alpha);
        const color$2 = moonbitlang$core$string$$String$replace(color, _tmp$3, { str: _bind$2, start: 0, end: _bind$2.length });
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, color$2);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, p.x, p.y, p.radius, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _arr$2 = state.damageTexts;
    const _len$2 = _arr$2.length;
    let _tmp$3 = 0;
    while (true) {
      const _i = _tmp$3;
      if (_i < _len$2) {
        const d = _arr$2[_i];
        retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
        const _tmp$4 = { str: retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner$46$42$bind$124$1285, start: 0, end: retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner$46$42$bind$124$1285.length };
        const _bind$2 = moonbitlang$core$builtin$$Show$to_string$151$(d.alpha);
        const color$2 = moonbitlang$core$string$$String$replace(color, _tmp$4, { str: _bind$2, start: 0, end: _bind$2.length });
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, color$2);
        retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 14px Arial");
        retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, `-${moonbitlang$core$builtin$$Show$to_string$27$(moonbitlang$core$double$$Double$to_int(state.totalDamage))}`, d.x, d.y);
        retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
        _tmp$3 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  retfings$game$Renders$TowerRender$$register_frame_callback(update_fn);
}
function retfings$game$Renders$TowerRender$$BeeTowerBulletRender$render(ctx, x, y, timestamp, bullet) {
  const _tmp = bullet.target;
  const _tmp$2 = bullet.target;
  const _tmp$3 = _tmp$2.method_15(_tmp$2.self);
  const _tmp$4 = bullet.posion_ms;
  retfings$game$Renders$TowerRender$$createPoisonEffect$46$inner(retfings$game$Core$$ctxSingleton, timestamp, _tmp, _tmp$3, _tmp$4, bullet.posion_damage_per_second, 3, 4, 0.8, "rgba(100, 255, 100, %alpha)");
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ffff00");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 3, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255, 255, 255, 0.6)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 1, -1, 1, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$ChargeJarTowerBulletRender$render(ctx, x, y, time) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#0000ff");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 3, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255, 255, 255, 0.6)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 1, -1, 1, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const t = time / 100;
  if (moonbitlang$core$math$$sin(t) > 0.8) {
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#00ffff");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 1);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -2, -2);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, 2, 2);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -2, 2);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, 2, -2);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$CurveTowerBulletRender$render(ctx, x, y, time) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#00ff00");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 3, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255, 255, 255, 0.6)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 1, -1, 1, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const t = time / 200;
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0, 255, 0, 0.3)");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 1);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -8, moonbitlang$core$math$$sin(t) * 2);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, -2, 0);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -8, moonbitlang$core$math$$cos(t) * 2);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, -2, 0);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$LightningTowerBulletRender$render(ctx, x, y, time) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  const t = time / 100;
  const flicker = moonbitlang$core$math$$sin(t * 3) > 0.5 ? 1 : 0.7;
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#ffff00");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2 * flicker);
  retfings$game$Core$$CanvasRenderingContext2D$lineCap(ctx, "round");
  retfings$game$Core$$CanvasRenderingContext2D$lineJoin(ctx, "round");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, -3, -4);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, 0, 0);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, -2, 2);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, 3, -3);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const glow = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, 6);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(glow, 0, "rgba(255, 255, 0, 0.5)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(glow, 1, "rgba(255, 255, 0, 0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, glow);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 6, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$NegativeMagneticTowerBulletRender$render(ctx, x, y, time) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#0000ff");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 3, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255, 255, 255, 0.6)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 1, -1, 1, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const t = time / 200;
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0, 0, 255, 0.3)");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 1);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 0, 6, 6, t, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 0, 9, 9, -t, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$PlasmaTowerBulletRender$render(ctx, x, y, time) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  const t = time / 500;
  const pulse = 1 + moonbitlang$core$math$$sin(t) * 0.3;
  const glow = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, 0, 0, 0, 0, 0, 8 * pulse);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(glow, 0, "rgba(255, 128, 0, 0.6)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(glow, 0.4, "rgba(255, 128, 0, 0.3)");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(glow, 1, "rgba(128, 0, 255, 0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, glow);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 8 * pulse, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ff8000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 3, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255, 255, 255, 0.8)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 1, -1, 1, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$PositiveMagneticTowerBulletRender$render(ctx, x, y, time) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#ff0000");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, 3, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(255, 255, 255, 0.6)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 1, -1, 1, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const t = time / 200;
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(255, 0, 0, 0.3)");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 1);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 0, 6, 6, -t, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, 0, 0, 9, 9, t, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TowerRender$$TowerRender$render_all_bullets(self, timestamp) {
  const _arr = retfings$game$Core$Sprite$Tower$$positive_magnetic_tower_bullets.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const bullet = _arr[_i];
      if (bullet.alive) {
        retfings$game$Renders$TowerRender$$PositiveMagneticTowerBulletRender$render(retfings$game$Core$$ctxSingleton, bullet.position.x, bullet.position.y, timestamp);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$2 = retfings$game$Core$Sprite$Tower$$negative_magnetic_tower_bullets.val;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const bullet = _arr$2[_i];
      if (bullet.alive) {
        retfings$game$Renders$TowerRender$$NegativeMagneticTowerBulletRender$render(retfings$game$Core$$ctxSingleton, bullet.position.x, bullet.position.y, timestamp);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$3 = retfings$game$Core$Sprite$Tower$$lightning_tower_bullets.val;
  const _len$3 = _arr$3.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len$3) {
      const bullet = _arr$3[_i];
      if (bullet.alive) {
        retfings$game$Renders$TowerRender$$LightningTowerBulletRender$render(retfings$game$Core$$ctxSingleton, bullet.position.x, bullet.position.y, timestamp);
      }
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$4 = retfings$game$Core$Sprite$Tower$$charge_jar_tower_bullets.val;
  const _len$4 = _arr$4.length;
  let _tmp$4 = 0;
  while (true) {
    const _i = _tmp$4;
    if (_i < _len$4) {
      const bullet = _arr$4[_i];
      if (bullet.alive) {
        retfings$game$Renders$TowerRender$$ChargeJarTowerBulletRender$render(retfings$game$Core$$ctxSingleton, bullet.position.x, bullet.position.y, timestamp);
      }
      _tmp$4 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$5 = retfings$game$Core$Sprite$Tower$$curve_tower_bullets.val;
  const _len$5 = _arr$5.length;
  let _tmp$5 = 0;
  while (true) {
    const _i = _tmp$5;
    if (_i < _len$5) {
      const bullet = _arr$5[_i];
      if (bullet.alive) {
        retfings$game$Renders$TowerRender$$CurveTowerBulletRender$render(retfings$game$Core$$ctxSingleton, bullet.position.x, bullet.position.y, timestamp);
      }
      _tmp$5 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$6 = retfings$game$Core$Sprite$Tower$$plasma_tower_bullets.val;
  const _len$6 = _arr$6.length;
  let _tmp$6 = 0;
  while (true) {
    const _i = _tmp$6;
    if (_i < _len$6) {
      const bullet = _arr$6[_i];
      if (bullet.alive) {
        retfings$game$Renders$TowerRender$$PlasmaTowerBulletRender$render(retfings$game$Core$$ctxSingleton, bullet.position.x, bullet.position.y, timestamp);
      }
      _tmp$6 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$7 = retfings$game$Core$Sprite$Tower$$bee_tower_bullets.val;
  const _len$7 = _arr$7.length;
  let _tmp$7 = 0;
  while (true) {
    const _i = _tmp$7;
    if (_i < _len$7) {
      const bullet = _arr$7[_i];
      if (bullet.alive) {
        retfings$game$Renders$TowerRender$$BeeTowerBulletRender$render(retfings$game$Core$$ctxSingleton, bullet.position.x, bullet.position.y, timestamp, bullet);
      }
      _tmp$7 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$EnemyRender$$VirusEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$VirusEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$virusEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$VirusEnemyRender$new();
    retfings$game$Renders$EnemyRender$$virusEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$drawMiniVirus(ctx, x, y, r, alpha, timestamp) {
  if (r <= 0.1) {
    return undefined;
  }
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, alpha);
  const body = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x - r * 0.35, y - r * 0.35, r * 0.2, x, y, r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(body, 0, "#FFECB3");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(body, 1, "#EF6C00");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, body);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD54F");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, y - r * 0.55, r * 0.7, r * 0.45, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0,0,0,0.2)");
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const sawR = r * 0.95;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, 0.52359877559829882);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#B0BEC5");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 3);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, sawR, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#CFD8DC");
  const rotation = timestamp * 0.001;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 36) {
      const a = (i + 0) / (36 + 0) * 6.2831853071795862 + rotation;
      const rx = moonbitlang$core$math$$cos(a) * sawR;
      const ry = moonbitlang$core$math$$sin(a) * sawR;
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, rx, ry);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, rx + moonbitlang$core$math$$cos(a) * 5, ry + moonbitlang$core$math$$sin(a) * 5);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, rx + moonbitlang$core$math$$cos(a + 0.2) * 4, ry + moonbitlang$core$math$$sin(a + 0.2) * 4);
      retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0,0,0,0.25)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x - r * 0.8, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + r * 0.8, y);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, alpha * 0.5);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x - r * 0.35, y - r * 0.2, r * 0.55, r * 0.35, -0.45, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$EnemyRender$$drawSplitEffect(ctx, originX, originY, target1X, target1Y, target2X, target2Y, t) {
  const intensity = 1 - t;
  if (intensity <= 0.01) {
    return undefined;
  }
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const pulseRadius = 40 * intensity;
  const pulseAlpha = intensity * 0.7;
  const pulseGradient = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, originX, originY, 0, originX, originY, pulseRadius);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(pulseGradient, 0, `rgba(255, 220, 100, ${String(pulseAlpha)})`);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(pulseGradient, 1, "rgba(255, 180, 0, 0)");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, pulseGradient);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, originX, originY, pulseRadius, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const baseWidth = 4 + 12 * intensity;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 3) {
      _L: {
        const offsetAlpha = pulseAlpha * (0.6 - (i + 0) * 0.2);
        if (offsetAlpha <= 0) {
          break _L;
        }
        const width = baseWidth + (i + 0) * 3;
        retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, width);
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, `rgba(255, 200, 0, ${String(offsetAlpha)})`);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, originX, originY);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, target1X, target1Y);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, originX, originY);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, target2X, target2Y);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < 12) {
      const angle = (i + 0) / (12 + 0) * 6.2831853071795862;
      const dist = 30 * (1 - t);
      const px = originX + moonbitlang$core$math$$cos(angle) * dist;
      const py = originY + moonbitlang$core$math$$sin(angle) * dist;
      const size = 3 * intensity;
      const pAlpha = intensity * 0.8;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, `rgba(255, 230, 150, ${String(pAlpha)})`);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, px, py, size, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$EnemyRender$$renderVirusSplitAnimation(ctx, x1, y1, x2, y2, x3, y3, elapsed, totalTime, timestamp) {
  if (elapsed >= totalTime) {
    return false;
  }
  const _p = elapsed / totalTime;
  const _p$2 = 1;
  const t = _p > _p$2 ? _p$2 : _p;
  const ease_t = t * t * (3 - 2 * t);
  const pos1_x = x1 + (x2 - x1) * ease_t;
  const pos1_y = y1 + (y2 - y1) * ease_t;
  const pos2_x = x1 + (x3 - x1) * ease_t;
  const pos2_y = y1 + (y3 - y1) * ease_t;
  const currentSize = 20 * ease_t;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Renders$EnemyRender$$drawMiniVirus(ctx, pos1_x, pos1_y, currentSize, ease_t, timestamp);
  retfings$game$Renders$EnemyRender$$drawMiniVirus(ctx, pos2_x, pos2_y, currentSize, ease_t, timestamp);
  retfings$game$Renders$EnemyRender$$drawSplitEffect(ctx, x1, y1, pos1_x, pos1_y, pos2_x, pos2_y, t);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  return true;
}
function retfings$game$Renders$EnemyRender$$VirusEnemyRender$render_divide(self, ctx, _e, timestamp) {
  const _arr = retfings$game$Core$Sprite$Enemy$$divide_effects.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const divide_animation = _arr[_i];
      if (divide_animation.start_time >= 0) {
        const elapsed = timestamp - divide_animation.start_time;
        const continue_anim = retfings$game$Renders$EnemyRender$$renderVirusSplitAnimation(ctx, divide_animation.x1, divide_animation.y1, divide_animation.x2, divide_animation.y2, divide_animation.x3, divide_animation.y3, elapsed, divide_animation.total_time, timestamp);
        if (!continue_anim) {
          divide_animation.start_time = -1;
          divide_animation.finished = true;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$EnemyRender$$VirusEnemyRender$render_normal_size(self, ctx, e, timestamp, show_health_bar) {
  const small = e.method_22(e.self);
  const s = small ? 20 : 36;
  const r = s * (Math.abs(moonbitlang$core$math$$sin(timestamp * 0.002)) * 0.2 + 0.8);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const x = e.method_0(e.self).x;
  const y = e.method_0(e.self).y;
  const body = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x - r * 0.35, y - r * 0.35, r * 0.2, x, y, r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(body, 0, "#FFECB3");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(body, 1, "#EF6C00");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, body);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD54F");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, y - r * 0.55, r * 0.7, r * 0.45, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0,0,0,0.2)");
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const sawR = r * 0.95;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, 0.52359877559829882);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#B0BEC5");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 3);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, sawR, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#CFD8DC");
  const rotation = timestamp * 0.001;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 36) {
      const a = (i + 0) / (36 + 0) * 6.2831853071795862 + rotation;
      const rx = moonbitlang$core$math$$cos(a) * sawR;
      const ry = moonbitlang$core$math$$sin(a) * sawR;
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, rx, ry);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, rx + moonbitlang$core$math$$cos(a) * 5, ry + moonbitlang$core$math$$sin(a) * 5);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, rx + moonbitlang$core$math$$cos(a + 0.2) * 4, ry + moonbitlang$core$math$$sin(a + 0.2) * 4);
      retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0,0,0,0.25)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x - r * 0.8, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + r * 0.8, y);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.5);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x - r * 0.35, y - r * 0.2, r * 0.55, r * 0.35, -0.45, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$VirusEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  if (e.method_22(e.self)) {
    const _arr = retfings$game$Core$Sprite$Enemy$$divide_effects.val;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const d = _arr[_i];
        if (d.finished && (d.enemy_id1 === e.method_15(e.self) || d.enemy_id2 === e.method_15(e.self))) {
          retfings$game$Renders$EnemyRender$$VirusEnemyRender$render_normal_size(self, ctx, e, timestamp, show_health_bar);
        } else {
          if (!d.finished) {
            retfings$game$Renders$EnemyRender$$VirusEnemyRender$render_divide(self, ctx, e, timestamp);
          }
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    retfings$game$Renders$EnemyRender$$VirusEnemyRender$render_normal_size(self, ctx, e, timestamp, show_health_bar);
    return;
  }
}
function retfings$game$Renders$EnemyRender$$UFOEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$UFOEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$uFOEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$UFOEnemyRender$new();
    retfings$game$Renders$EnemyRender$$uFOEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$UFOEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, e.method_0(e.self).x, e.method_0(e.self).y, 50, 50);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$TurtleEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$TurtleEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$turtleEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$TurtleEnemyRender$new();
    retfings$game$Renders$EnemyRender$$turtleEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$TurtleEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, e.method_0(e.self).x, e.method_0(e.self).y, 50, 50);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$MechaEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$MechaEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$mechaEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$MechaEnemyRender$new();
    retfings$game$Renders$EnemyRender$$mechaEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$MechaEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, e.method_0(e.self).x, e.method_0(e.self).y, 50, 50);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$KangarooEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$KangarooEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$kangarooEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$KangarooEnemyRender$new();
    retfings$game$Renders$EnemyRender$$kangarooEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$KangarooEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, e.method_0(e.self).x, e.method_0(e.self).y, 50, 50);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$GroundEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$GroundEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$groundEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$GroundEnemyRender$new();
    retfings$game$Renders$EnemyRender$$groundEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$GroundEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const x = e.method_0(e.self).x;
  const y = e.method_0(e.self).y;
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, 1, 1);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "darkgreen");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 32, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "brown");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 3);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x - 20, y + 25);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x - 20, y + 35);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x - 15, y + 25);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x - 15, y + 35);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + 15, y + 25);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + 15, y + 35);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + 20, y + 25);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + 20, y + 35);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "lightgreen");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 20, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  const w = gs * 0.78;
  const bx = x - w / 2;
  const by = y - gs / 2 - 9;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0,0,0,0.35)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, bx, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 4);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgb(66, 158, 5)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, bx + 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w * e.method_4(e.self) / e.method_5(e.self) - 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$EnemyRender$$FlyingEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$FlyingEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$flyingEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$FlyingEnemyRender$new();
    retfings$game$Renders$EnemyRender$$flyingEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$FlyingEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const x = e.method_0(e.self).x;
  const y = e.method_0(e.self).y;
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, 1, 1);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "blue");
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, x, y, 28, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "lightblue");
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x - 35, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x - 15, y - 10);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x - 15, y + 10);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + 35, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + 15, y - 10);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + 15, y + 10);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const w = gs * 0.78;
  const bx = x - w / 2;
  const by = y - gs / 2 - 9;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0,0,0,0.35)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, bx, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 4);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgb(66, 158, 5)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, bx + 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w * e.method_4(e.self) / e.method_5(e.self) - 2, by);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$EnemyRender$$EnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$EnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$enemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$EnemyRender$new();
    retfings$game$Renders$EnemyRender$$enemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$BearEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$BearEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$bearEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$BearEnemyRender$new();
    retfings$game$Renders$EnemyRender$$bearEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$caterpillarEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$new();
    retfings$game$Renders$EnemyRender$$caterpillarEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$CheetahEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$CheetahEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$cheetahEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$CheetahEnemyRender$new();
    retfings$game$Renders$EnemyRender$$cheetahEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$EggsEnemyRender$new() {
  ({});
}
function retfings$game$Renders$EnemyRender$$EggsEnemyRender$get_instance() {
  const _bind = retfings$game$Renders$EnemyRender$$eggsEnemyRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$EnemyRender$$EggsEnemyRender$new();
    retfings$game$Renders$EnemyRender$$eggsEnemyRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$BearEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, e.method_0(e.self).x, e.method_0(e.self).y, 50, 50);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$render_enemy$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  const time_sec = timestamp / 1000;
  const x = e.method_0(e.self).x;
  const y = e.method_0(e.self).y;
  const w = gs * 0.78;
  const bx = x - w / 2;
  const by = y - gs / 2 - 9;
  const _p = gs * 0.45;
  const _p$2 = 18;
  const base_r = _p > _p$2 ? _p$2 : _p;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  const segment_spacing = base_r * 0.9;
  const max_offset = base_r * 0.3;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 4) {
      const progress = (i + 0) / (3 + 0);
      const seg_r = base_r * (0.7 + 0.3 * progress);
      const offset_x = x - ((3 - i | 0) + 0) * segment_spacing;
      const phase = timestamp * 0.02 + (i + 0) * 0.8;
      const wiggle = moonbitlang$core$math$$sin(phase) * 0.4 * max_offset;
      const draw_x = offset_x + wiggle;
      const draw_y = y + moonbitlang$core$math$$sin(phase * 0.7) * (max_offset * 0.3);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, retfings$game$Renders$EnemyRender$$render_enemy$46$inner$46$body_color$124$79);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, draw_x, draw_y, seg_r, seg_r * 0.7, 0, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0, 100, 0, 0.3)");
      retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const head_r = base_r * 1.1;
  const head_gradient = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, x - head_r * 0.2, y - head_r * 0.2, 0, x, y, head_r);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(head_gradient, 0, "#81C784");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(head_gradient, 1, "#388E3C");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, head_gradient);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x, y, head_r, head_r * 0.8, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const healthWidth = e.method_4(e.self) / e.method_5(e.self);
  const eye_r = head_r * 0.2;
  const eye_offset_x = head_r * 0.4;
  const eye_offset_y = head_r * 0.2;
  const left_eye_x = x - eye_offset_x;
  const right_eye_x = x + eye_offset_x;
  const eye_y = y - eye_offset_y;
  if (healthWidth > 0.5) {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
    const pupil_r = eye_r * 0.5;
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, eye_y, pupil_r, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, eye_y, pupil_r, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  } else {
    if (healthWidth > 0.25) {
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#FF5252");
      retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 1);
      const tremble_phase = time_sec * 12;
      const tremble_scale = 0.15 + 0.1 * moonbitlang$core$math$$sin(tremble_phase);
      const anim_pupil_r = eye_r * tremble_scale;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, eye_y, anim_pupil_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, eye_y, anim_pupil_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    } else {
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, eye_y, eye_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000");
      const pupil_r = eye_r * 0.5;
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, eye_y, pupil_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, eye_y, pupil_r, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      const phase = moonbitlang$core$builtin$$Mod$mod$14$(time_sec, 1);
      const fall_progress = phase / 1;
      const tear_fall_distance = fall_progress * 24;
      const _p$3 = 0.2;
      const _p$4 = 1 - fall_progress * 1.2;
      const tear_alpha = _p$3 > _p$4 ? _p$3 : _p$4;
      const tear_y = eye_y + eye_r * 1.3 + tear_fall_distance;
      const tear_size = eye_r * 0.55;
      const tear_color = `rgba(33, 150, 243, ${moonbitlang$core$builtin$$Show$to_string$151$(tear_alpha)})`;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, tear_color);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, left_eye_x, tear_y, tear_size, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, right_eye_x, tear_y, tear_size, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.3);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, x - head_r * 0.3, y - head_r * 0.4, head_r * 0.3, head_r * 0.2, 0, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 1);
  if (show_health_bar) {
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(0,0,0,0.35)");
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, bx, by);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w, by);
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 4);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    if (healthWidth > 0.5) {
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#4CAF50");
    } else {
      if (healthWidth > 0.25) {
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#FFC107");
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#F44336");
      }
    }
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, bx + 2, by);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, bx + w * healthWidth - 2, by);
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$render_enemy$46$inner(self, ctx, e, gs, timestamp, show_health_bar);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$EnemyRender$$CheetahEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, e.method_0(e.self).x, e.method_0(e.self).y, 50, 50);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$EnemyRender$$EggsEnemyRender$render$46$inner(self, ctx, e, gs, timestamp, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, e.method_0(e.self).x, e.method_0(e.self).y, 50, 50);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_enemy_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$EnemyRender$$EnemyRender$render_all_enemy(_self, timestamp) {
  const gs = retfings$game$Core$$map.gridSize;
  if (retfings$game$Core$Map$$map_grid_system_singleton.enemy.length !== 0) {
    const _arr = retfings$game$Core$Map$$map_grid_system_singleton.enemy;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const e = _arr[_i];
        const _bind = e.method_11(e.self);
        switch (_bind) {
          case 0: {
            retfings$game$Renders$EnemyRender$$KangarooEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$kangarooEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 1: {
            retfings$game$Renders$EnemyRender$$FlyingEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$flyingEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 3: {
            retfings$game$Renders$EnemyRender$$GroundEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$groundEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 5: {
            retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$caterpillarEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 6: {
            retfings$game$Renders$EnemyRender$$VirusEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$virusEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 7: {
            retfings$game$Renders$EnemyRender$$CheetahEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$cheetahEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 10: {
            retfings$game$Renders$EnemyRender$$BearEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$bearEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 4: {
            retfings$game$Renders$EnemyRender$$TurtleEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$turtleEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 9: {
            retfings$game$Renders$EnemyRender$$UFOEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$uFOEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          case 2: {
            retfings$game$Renders$EnemyRender$$EggsEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$eggsEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
            break;
          }
          default: {
            retfings$game$Renders$EnemyRender$$MechaEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$mechaEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, e, gs, timestamp, true);
          }
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
function retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$weedNeutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$weedNeutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$render$46$inner(self, timestamp, x, y, e, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "green");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, 20, 20);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_neutral_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$TreasureChestNeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$TreasureChestNeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$treasureChestNeutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$TreasureChestNeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$treasureChestNeutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$TreasureChestNeutralElementRender$render$46$inner(self, timestamp, x, y, e, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, 20, 20);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_neutral_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$StoneNeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$StoneNeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$stoneNeutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$StoneNeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$stoneNeutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$StoneNeutralElementRender$render$46$inner(self, timestamp, x, y, e, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  const _p = 15;
  const _p$2 = retfings$game$Core$$map.gridSize * 0.6 - 2;
  const r = _p > _p$2 ? _p$2 : _p;
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#808080");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, x, y, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#A9A9A9");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, x - r / 3, y - r / 3, r / 5, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, x + r / 3, y + r / 3, r / 4, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_neutral_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$SlotMachineNeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$SlotMachineNeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$slotMachineNeutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$SlotMachineNeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$slotMachineNeutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$SlotMachineNeutralElementRender$render$46$inner(self, timestamp, x, y, e, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, 20, 20);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_neutral_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$SearchLightNeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$SearchLightNeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$searchLightNeutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$SearchLightNeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$searchLightNeutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$SearchLightNeutralElementRender$render$46$inner(self, timestamp, x, y, e, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, 20, 20);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$NeutralElementRender$$NeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$NeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$neutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$NeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$neutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$ConveyorBeltNeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$ConveyorBeltNeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$conveyorBeltNeutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$ConveyorBeltNeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$conveyorBeltNeutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$EnergyLightNeutralElementRender$new() {
  ({});
}
function retfings$game$Renders$NeutralElementRender$$EnergyLightNeutralElementRender$get_instance() {
  const _bind = retfings$game$Renders$NeutralElementRender$$energyLightNeutralElementRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$NeutralElementRender$$EnergyLightNeutralElementRender$new();
    retfings$game$Renders$NeutralElementRender$$energyLightNeutralElementRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$ConveyorBeltNeutralElementRender$render$46$inner(self, timestamp, x, y, e, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, 20, 20);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_neutral_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$EnergyLightNeutralElementRender$render$46$inner(self, timestamp, x, y, e, show_health_bar) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "red");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, 20, 20);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  if (show_health_bar) {
    retfings$game$Renders$UIComposeRender$$draw_neutral_health_bar(e);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$NeutralElementRender$$NeutralElementRender$render_attack_tips(self, time) {
  const centerX = retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_x;
  const centerY = retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.cur_center_y;
  const offsetY = moonbitlang$core$math$$sin(time * 0.01) * 8;
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 15);
  retfings$game$Core$$CanvasRenderingContext2D$lineCap(retfings$game$Core$$ctxSingleton, "round");
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#a82042ff");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#a82042ff");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, centerX, centerY - 30 + offsetY);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, centerX, centerY + 10 + offsetY);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, centerX, centerY + 30 + offsetY, 8, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$NeutralElementRender$$NeutralElementRender$render(self, timestamp) {
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.neutralElement;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = _arr[_i];
      const x = (e.method_0(e.self).x + 0.5) * retfings$game$Core$$map.gridSize;
      const y = (e.method_0(e.self).y + 0.5) * retfings$game$Core$$map.gridSize;
      const _bind = e.method_2(e.self);
      switch (_bind) {
        case 3: {
          retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$weedNeutralElementRenderSingleton, timestamp, x, y, e, true);
          break;
        }
        case 1: {
          retfings$game$Renders$NeutralElementRender$$SlotMachineNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$slotMachineNeutralElementRenderSingleton, timestamp, x, y, e, true);
          break;
        }
        case 0: {
          retfings$game$Renders$NeutralElementRender$$StoneNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$stoneNeutralElementRenderSingleton, timestamp, x, y, e, true);
          break;
        }
        case 2: {
          retfings$game$Renders$NeutralElementRender$$TreasureChestNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$treasureChestNeutralElementRenderSingleton, timestamp, x, y, e, true);
          break;
        }
        case 5: {
          retfings$game$Renders$NeutralElementRender$$SearchLightNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$searchLightNeutralElementRenderSingleton, timestamp, x, y, e, true);
          break;
        }
        case 4: {
          retfings$game$Renders$NeutralElementRender$$ConveyorBeltNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$conveyorBeltNeutralElementRenderSingleton, timestamp, x, y, e, true);
          break;
        }
        default: {
          retfings$game$Renders$NeutralElementRender$$EnergyLightNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$energyLightNeutralElementRenderSingleton, timestamp, x, y, e, true);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (retfings$game$Core$Sprite$NeutralElement$$neutral_element_click_singleton.render_attack_tips) {
    retfings$game$Renders$NeutralElementRender$$NeutralElementRender$render_attack_tips(self, timestamp);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PanelsRender$$get_tower_cost(towerType) {
  switch (towerType) {
    case 2: {
      return 80;
    }
    case 3: {
      return 30;
    }
    case 4: {
      return 110;
    }
    case 5: {
      return 90;
    }
    case 1: {
      return 70;
    }
    case 0: {
      return 100;
    }
    case 6: {
      return 50;
    }
    case 7: {
      return 120;
    }
    case 8: {
      return 70;
    }
    case 10: {
      return 70;
    }
    case 11: {
      return 70;
    }
    case 12: {
      return 70;
    }
    case 13: {
      return 120;
    }
    case 9: {
      return 70;
    }
    case 14: {
      return 70;
    }
    default: {
      return 70;
    }
  }
}
function retfings$game$Renders$PanelsRender$$SelectTowerPanelRender$new() {
  ({});
}
function retfings$game$Renders$PanelsRender$$SelectTowerPanelRender$get_instance() {
  const _bind = retfings$game$Renders$PanelsRender$$selectTowerPanelRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$PanelsRender$$SelectTowerPanelRender$new();
    retfings$game$Renders$PanelsRender$$selectTowerPanelRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PanelsRender$$SelectTowerPanelRender$render(_self, _timestamp) {
  if (retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen) {
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    const _bind = retfings$game$Core$Panels$$SelectTowerPanel$computeLayout(retfings$game$Core$Panels$$selectTowerPanelSingleton, retfings$game$Core$$map);
    const _panelW = _bind._0;
    const _panelH = _bind._1;
    const _items = _bind._2;
    if (_panelW > 0) {
      retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelW = _panelW;
      retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelH = _panelH;
      const x = moonbitlang$core$array$$Array$at$140$(_items, 0).x - 10;
      const y = moonbitlang$core$array$$Array$at$140$(_items, 0).y - 8;
      retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelPiexlPoint = retfings$game$Core$Point$$PixelPoint$new$46$inner(x, y);
      retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.65)");
      retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, x, y, _panelW, _panelH, 10);
      retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255,255,255,0.25)");
      retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 1);
      retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, x + 0.5, y + 0.5, _panelW - 1, _panelH - 1, 10);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _items.length) {
          const r = moonbitlang$core$array$$Array$at$140$(_items, i);
          retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
          retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255,255,255,0.08)");
          retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, r.x, r.y, r.w, r.h, 10);
          retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
          retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
          retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
          retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255,255,255,0.15)");
          retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 1);
          retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, r.x + 0.5, r.y + 0.5, r.w - 1, r.h - 1, 10);
          retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
          retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
          const cx = r.x + r.w / 2;
          const cy = r.y + 26;
          const _bind$2 = moonbitlang$core$array$$Array$at$141$(retfings$game$Core$Panels$$selectTowerPanelSingleton.items, i);
          switch (_bind$2) {
            case 2: {
              retfings$game$Renders$TowerRender$$LightningTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 3: {
              retfings$game$Renders$TowerRender$$ChargeJarTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 4: {
              retfings$game$Renders$TowerRender$$PositiveMagneticTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 5: {
              retfings$game$Renders$TowerRender$$NegativeMagneticTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 1: {
              retfings$game$Renders$TowerRender$$CurveTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 0: {
              retfings$game$Renders$TowerRender$$PlasmaTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 6: {
              retfings$game$Renders$TowerRender$$BeeTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 7: {
              retfings$game$Renders$TowerRender$$SnowflakeTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 8: {
              retfings$game$Renders$TowerRender$$LaserTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 10: {
              retfings$game$Renders$TowerRender$$DecayTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 9: {
              retfings$game$Renders$TowerRender$$FrozenTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 11: {
              retfings$game$Renders$TowerRender$$ChainTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 13: {
              retfings$game$Renders$TowerRender$$SkyTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 12: {
              retfings$game$Renders$TowerRender$$SpeedTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            case 14: {
              retfings$game$Renders$TowerRender$$ThunderTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
              break;
            }
            default: {
              retfings$game$Renders$TowerRender$$TreasureTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, cx, cy, 1, 40, 0, 0);
            }
          }
          retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
          const cost = retfings$game$Renders$PanelsRender$$get_tower_cost(moonbitlang$core$array$$Array$at$141$(retfings$game$Core$Panels$$selectTowerPanelSingleton.items, i));
          retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#FFD700");
          retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "12px Arial");
          retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
          retfings$game$Core$$CanvasRenderingContext2D$textBaseline(retfings$game$Core$$ctxSingleton, "bottom");
          retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, String(cost), r.x + r.w / 2, r.y + r.h - 6);
          retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  }
  if (retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelOpen) {
    const center = retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelCenter;
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    const radius = retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelRadius;
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, center.x, center.y, radius, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(50, 50, 70, 0.9)");
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(100, 200, 255, 0.9)");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 2);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, center.x, center.y, radius * 0.9, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(100, 200, 255, 0.6)");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 1);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
    const upgradeButtonY = center.y - radius / 2;
    const buttonRadius = radius / 3;
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, center.x, upgradeButtonY, buttonRadius, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(40, 150, 40, 0.9)");
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(150, 255, 150, 1.0)");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 2);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
    const _bind = retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerForUpgrade;
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _tower = _Some._0;
      const upgradeCost = _tower.method_6(_tower.self) * 0.5;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "white");
      retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 14px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
      retfings$game$Core$$CanvasRenderingContext2D$textBaseline(retfings$game$Core$$ctxSingleton, "middle");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "升级", center.x, upgradeButtonY - 8);
      retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 12px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, String(upgradeCost), center.x, upgradeButtonY + 8);
    } else {
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "white");
      retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 14px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
      retfings$game$Core$$CanvasRenderingContext2D$textBaseline(retfings$game$Core$$ctxSingleton, "middle");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "升级", center.x, upgradeButtonY);
    }
    const destroyButtonY = center.y + radius / 2;
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, center.x, destroyButtonY, buttonRadius, 0, 6.2831853071795862, -1);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(150, 40, 40, 0.9)");
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 150, 150, 1.0)");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 2);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
    const _bind$2 = retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerForUpgrade;
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _tower = _Some._0;
      const refundAmount = _tower.method_6(_tower.self) * 0.5;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "white");
      retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 14px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
      retfings$game$Core$$CanvasRenderingContext2D$textBaseline(retfings$game$Core$$ctxSingleton, "middle");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "摧毁", center.x, destroyButtonY - 8);
      retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 12px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, String(refundAmount), center.x, destroyButtonY + 8);
    } else {
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "white");
      retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 14px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
      retfings$game$Core$$CanvasRenderingContext2D$textBaseline(retfings$game$Core$$ctxSingleton, "middle");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "摧毁", center.x, destroyButtonY);
    }
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PanelsRender$$MenuPanelRender$new() {
  return { current_tab: 0, current_index: 0, panel_x: 250, panel_y: 50, panel_width: 780, panel_height: 580 };
}
function retfings$game$Renders$PanelsRender$$MenuPanelRender$get_instance() {
  const _bind = retfings$game$Renders$PanelsRender$$menuPanelRenderInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Renders$PanelsRender$$MenuPanelRender$new();
    retfings$game$Renders$PanelsRender$$menuPanelRenderInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Renders$PanelsRender$$renderMenu(ctx) {
  if (retfings$game$Core$Panels$$menuPanelSingleton.is_open) {
    retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(0,0,0,0.55)");
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, 0, 0, retfings$game$Core$$map.width, retfings$game$Core$$map.height);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFB86C");
    retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, retfings$game$Core$Panels$$menuPanelSingleton.x, retfings$game$Core$Panels$$menuPanelSingleton.y, retfings$game$Core$Panels$$menuPanelSingleton.w, retfings$game$Core$Panels$$menuPanelSingleton.h, 30);
    retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#E8B890");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 30);
    retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, retfings$game$Core$Panels$$menuPanelSingleton.x, retfings$game$Core$Panels$$menuPanelSingleton.y, retfings$game$Core$Panels$$menuPanelSingleton.w, retfings$game$Core$Panels$$menuPanelSingleton.h, 30);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
    moonbitlang$core$builtin$$println$144$(`sound_slider_x:${moonbitlang$core$builtin$$Show$to_string$151$(retfings$game$Core$Panels$$menuPanelSingleton.sound_slider_x)}`);
    retfings$game$Renders$UIComposeRender$$drawSlider(ctx, retfings$game$Core$Panels$$menuPanelSingleton.sound_slider_x, retfings$game$Core$Panels$$menuPanelSingleton.slider_y, retfings$game$Core$Panels$$menuPanelSingleton.slider_width, retfings$game$Core$Panels$$menuPanelSingleton.slider_height, retfings$game$Core$Panels$$menuPanelSingleton.sound_volume, "游戏音效", "🔊");
    retfings$game$Renders$UIComposeRender$$drawSlider(ctx, retfings$game$Core$Panels$$menuPanelSingleton.music_slider_x, retfings$game$Core$Panels$$menuPanelSingleton.slider_y, retfings$game$Core$Panels$$menuPanelSingleton.slider_width, retfings$game$Core$Panels$$menuPanelSingleton.slider_height, retfings$game$Core$Panels$$menuPanelSingleton.music_volume, "背景音乐", "🎵");
    retfings$game$Renders$UIComposeRender$$drawButton$46$inner(ctx, retfings$game$Core$Panels$$menuPanelSingleton.exit_button_x, retfings$game$Core$Panels$$menuPanelSingleton.exit_button_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height, "退出本关", "🏠", false);
    retfings$game$Renders$UIComposeRender$$drawButton$46$inner(ctx, retfings$game$Core$Panels$$menuPanelSingleton.help_button_x, retfings$game$Core$Panels$$menuPanelSingleton.help_button_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height, "本关说明", "?", false);
    retfings$game$Renders$UIComposeRender$$drawButton$46$inner(ctx, retfings$game$Core$Panels$$menuPanelSingleton.restart_button_x, retfings$game$Core$Panels$$menuPanelSingleton.restart_button_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height, "重新开始", "🔄", false);
    retfings$game$Renders$UIComposeRender$$drawButton$46$inner(ctx, retfings$game$Core$Panels$$menuPanelSingleton.continue_button_x, retfings$game$Core$Panels$$menuPanelSingleton.continue_button_y, retfings$game$Core$Panels$$menuPanelSingleton.large_button_width, retfings$game$Core$Panels$$menuPanelSingleton.large_button_height, "继续游戏", "", true);
    retfings$game$Renders$UIComposeRender$$drawButton$46$inner(ctx, retfings$game$Core$Panels$$menuPanelSingleton.clear_cache_x, retfings$game$Core$Panels$$menuPanelSingleton.clear_cache_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height, "清除缓存", "🧹", false);
    retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PanelsRender$$draw_close_button(ctx) {
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FF69B4");
  retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, 930, 100, 50, 50, 10);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
  retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 30px Arial");
  retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "×", 945, 135);
}
function retfings$game$Renders$PanelsRender$$draw_enemy(enemy_type, x, y) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$scale(retfings$game$Core$$ctxSingleton, 0.8, 0.8);
  const gs = retfings$game$Core$$map.gridSize;
  switch (enemy_type) {
    case 5: {
      retfings$game$Renders$EnemyRender$$CaterpillarEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$caterpillarEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$CaterpillarEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$186$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$186$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$186$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$179$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$186$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$186$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$186$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$186$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$186$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$186$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$186$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$186$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$179$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$179$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$179$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$186$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$186$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$179$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$186$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$186$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$186$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$186$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$179$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$179$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$179$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$186$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$186$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$186$ }, gs, 0, false);
      break;
    }
    case 3: {
      retfings$game$Renders$EnemyRender$$GroundEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$groundEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$GroundEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$174$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$174$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$174$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$178$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$174$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$174$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$174$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$174$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$174$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$174$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$174$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$174$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$178$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$178$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$178$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$174$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$174$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$178$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$174$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$174$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$174$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$174$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$178$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$178$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$178$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$174$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$174$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$174$ }, gs, 0, false);
      break;
    }
    case 1: {
      retfings$game$Renders$EnemyRender$$FlyingEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$flyingEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$GroundEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$174$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$174$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$174$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$178$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$174$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$174$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$174$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$174$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$174$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$174$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$174$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$174$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$178$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$178$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$178$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$174$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$174$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$178$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$174$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$174$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$174$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$174$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$178$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$178$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$178$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$174$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$174$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$174$ }, gs, 0, false);
      break;
    }
    case 0: {
      retfings$game$Renders$EnemyRender$$KangarooEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$kangarooEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$KangarooEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$173$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$173$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$173$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$176$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$173$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$173$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$173$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$173$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$173$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$173$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$173$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$173$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$176$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$176$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$176$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$173$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$173$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$176$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$173$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$173$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$173$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$173$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$176$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$176$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$176$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$173$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$173$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$173$ }, gs, 0, false);
      break;
    }
    case 6: {
      retfings$game$Renders$EnemyRender$$VirusEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$virusEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$VirusEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$169$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$169$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$169$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$185$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$169$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$169$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$169$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$169$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$169$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$169$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$169$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$169$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$185$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$169$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$169$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$169$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$169$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$185$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$169$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$169$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$169$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$169$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$169$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$185$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$185$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$169$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$169$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$169$ }, gs, 0, false);
      break;
    }
    case 7: {
      retfings$game$Renders$EnemyRender$$CheetahEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$cheetahEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$187$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$187$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$187$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$ }, gs, 0, false);
      break;
    }
    case 4: {
      retfings$game$Renders$EnemyRender$$TurtleEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$turtleEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$187$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$187$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$187$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$ }, gs, 0, false);
      break;
    }
    case 2: {
      retfings$game$Renders$EnemyRender$$EggsEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$eggsEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$187$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$187$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$187$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$ }, gs, 0, false);
      break;
    }
    case 8: {
      retfings$game$Renders$EnemyRender$$MechaEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$mechaEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$187$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$187$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$187$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$ }, gs, 0, false);
      break;
    }
    case 10: {
      retfings$game$Renders$EnemyRender$$BearEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$bearEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$187$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$187$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$187$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$ }, gs, 0, false);
      break;
    }
    default: {
      retfings$game$Renders$EnemyRender$$UFOEnemyRender$render$46$inner(retfings$game$Renders$EnemyRender$$uFOEnemyRenderSingleton, retfings$game$Core$$ctxSingleton, { self: retfings$game$Core$Sprite$Enemy$$CheetahEnemy$new(undefined, Option$None$2$, Option$None$2$), method_0: retfings$game$Core$Sprite$Enemy$$Enemy$position$187$, method_1: retfings$game$Core$Sprite$Enemy$$Enemy$is_alive$187$, method_2: retfings$game$Core$Sprite$Enemy$$Enemy$take_damage$187$, method_3: retfings$game$Core$Sprite$Enemy$$Enemy$is_flying$180$, method_4: retfings$game$Core$Sprite$Enemy$$Enemy$health$187$, method_5: retfings$game$Core$Sprite$Enemy$$Enemy$max_health$187$, method_6: retfings$game$Core$Sprite$Enemy$$Enemy$move_path$187$, method_7: retfings$game$Core$Sprite$Enemy$$Enemy$get_cur_point_index$187$, method_8: retfings$game$Core$Sprite$Enemy$$Enemy$set_cur_point_index$187$, method_9: retfings$game$Core$Sprite$Enemy$$Enemy$move_next_point$187$, method_10: retfings$game$Core$Sprite$Enemy$$Enemy$set_move_next_point$187$, method_11: retfings$game$Core$Sprite$Enemy$$Enemy$enemy_type$187$, method_12: retfings$game$Core$Sprite$Enemy$$Enemy$apply_poison$180$, method_13: retfings$game$Core$Sprite$Enemy$$Enemy$set_divide_effect$180$, method_14: retfings$game$Core$Sprite$Enemy$$Enemy$get_divide_effect$180$, method_15: retfings$game$Core$Sprite$Enemy$$Enemy$id$187$, method_16: retfings$game$Core$Sprite$Enemy$$Enemy$died_glod$187$, method_17: retfings$game$Core$Sprite$Enemy$$Enemy$on_enemy_died$180$, method_18: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_status$187$, method_19: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_status$187$, method_20: retfings$game$Core$Sprite$Enemy$$Enemy$get_enemy_speed$187$, method_21: retfings$game$Core$Sprite$Enemy$$Enemy$set_enemy_speed$187$, method_22: retfings$game$Core$Sprite$Enemy$$Enemy$render_small_size$180$, method_23: retfings$game$Core$Sprite$Enemy$$Enemy$render_normal_size$180$, method_24: retfings$game$Core$Sprite$Enemy$$Enemy$render_big_size$180$, method_25: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_small$187$, method_26: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_normal$187$, method_27: retfings$game$Core$Sprite$Enemy$$Enemy$set_render_big$187$ }, gs, 0, false);
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$PanelsRender$$draw_neutral_elements(neutral_element_type, x, y) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$scale(retfings$game$Core$$ctxSingleton, 0.8, 0.8);
  switch (neutral_element_type) {
    case 5: {
      retfings$game$Renders$NeutralElementRender$$SearchLightNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$searchLightNeutralElementRenderSingleton, 0, 0, 0, { self: retfings$game$Core$Sprite$NeutralElement$$SearchLightNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$208$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$210$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$208$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$208$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$208$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$208$ }, false);
      break;
    }
    case 4: {
      retfings$game$Renders$NeutralElementRender$$ConveyorBeltNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$conveyorBeltNeutralElementRenderSingleton, 0, 0, 0, { self: retfings$game$Core$Sprite$NeutralElement$$ConveyorBeltNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$216$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$211$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$216$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$216$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$216$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$216$ }, false);
      break;
    }
    case 3: {
      retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$weedNeutralElementRenderSingleton, 0, 0, 0, { self: retfings$game$Core$Sprite$NeutralElement$$WeedNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$205$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$212$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$205$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$205$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$205$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$205$ }, false);
      break;
    }
    case 2: {
      retfings$game$Renders$NeutralElementRender$$WeedNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$weedNeutralElementRenderSingleton, 0, 0, 0, { self: retfings$game$Core$Sprite$NeutralElement$$WeedNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$205$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$212$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$205$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$205$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$205$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$205$ }, false);
      break;
    }
    case 1: {
      retfings$game$Renders$NeutralElementRender$$SlotMachineNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$slotMachineNeutralElementRenderSingleton, 0, 0, 0, { self: retfings$game$Core$Sprite$NeutralElement$$SlotMachineNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$207$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$209$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$207$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$207$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$207$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$207$ }, false);
      break;
    }
    case 0: {
      retfings$game$Renders$NeutralElementRender$$StoneNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$stoneNeutralElementRenderSingleton, 0, 0, 0, { self: retfings$game$Core$Sprite$NeutralElement$$StoneNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$206$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$213$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$206$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$206$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$206$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$206$ }, false);
      break;
    }
    default: {
      retfings$game$Renders$NeutralElementRender$$EnergyLightNeutralElementRender$render$46$inner(retfings$game$Renders$NeutralElementRender$$energyLightNeutralElementRenderSingleton, 0, 0, 0, { self: retfings$game$Core$Sprite$NeutralElement$$EnergyLightNeutralElement$new$46$inner(0, 0, 100), method_0: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$position$215$, method_1: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$can_move$214$, method_2: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$neutralElement_type$215$, method_3: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$health$215$, method_4: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$max_health$215$, method_5: retfings$game$Core$Sprite$NeutralElement$$NeutralElement$take_damage$215$ }, false);
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$PanelsRender$$draw_tower(tower_type, x, y) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$scale(retfings$game$Core$$ctxSingleton, 0.8, 0.8);
  switch (tower_type) {
    case 6: {
      retfings$game$Renders$TowerRender$$BeeTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 5: {
      retfings$game$Renders$TowerRender$$NegativeMagneticTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 4: {
      retfings$game$Renders$TowerRender$$PositiveMagneticTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 3: {
      retfings$game$Renders$TowerRender$$ChargeJarTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 2: {
      retfings$game$Renders$TowerRender$$LightningTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 1: {
      retfings$game$Renders$TowerRender$$CurveTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 0: {
      retfings$game$Renders$TowerRender$$PlasmaTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 7: {
      retfings$game$Renders$TowerRender$$SnowflakeTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 8: {
      retfings$game$Renders$TowerRender$$LaserTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 10: {
      retfings$game$Renders$TowerRender$$DecayTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 9: {
      retfings$game$Renders$TowerRender$$FrozenTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 11: {
      retfings$game$Renders$TowerRender$$ChainTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 13: {
      retfings$game$Renders$TowerRender$$SkyTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 12: {
      retfings$game$Renders$TowerRender$$SpeedTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    case 14: {
      retfings$game$Renders$TowerRender$$ThunderTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
      break;
    }
    default: {
      retfings$game$Renders$TowerRender$$TreasureTowerRender$render$46$inner(retfings$game$Core$$ctxSingleton, 0, 0, 1, retfings$game$Core$$map.gridSize, 0, 0);
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$PanelsRender$$get_current_data(data, tab, index) {
  switch (tab) {
    case 0: {
      const towers = data.towers;
      return new $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$TowerData(moonbitlang$core$array$$Array$at$146$(towers, index));
    }
    case 1: {
      const enemies = data.enemies;
      return new $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$EnemiesData(moonbitlang$core$array$$Array$at$147$(enemies, index));
    }
    case 2: {
      const characters = data.neutrals;
      return new $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$NeutralElementsData(moonbitlang$core$array$$Array$at$148$(characters, index));
    }
    default: {
      const towers$2 = data.towers;
      return new $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$TowerData(moonbitlang$core$array$$Array$at$146$(towers$2, 0));
    }
  }
}
function retfings$game$Renders$PanelsRender$$draw_left_content(ctx, x, y, width, height) {
  const data = retfings$game$Renders$PanelsRender$$get_current_data(retfings$game$Core$Panels$$menuPanelSingleton.data, retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_tab, retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_index);
  switch (data.$tag) {
    case 0: {
      const _TowerData = data;
      const _tower = _TowerData._0;
      const name = _tower.name;
      const type_text = _tower.tower_type;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 32px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, name, x + 20, y + 40);
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x + 100, y + 130);
      retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, 2, 2);
      retfings$game$Renders$PanelsRender$$draw_tower(_tower.icon, 0, 0);
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x + 30 + 75 - 30, y + 60 + 150 + 10, 60, 25, 10);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "14px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, type_text, x + 30 + 75 - 15, y + 60 + 150 + 25);
      return;
    }
    case 1: {
      const _EnemiesData = data;
      const _e = _EnemiesData._0;
      const name$2 = _e.name;
      const type_text$2 = _e.entity_type;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 32px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, name$2, x + 20, y + 40);
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x + 100, y + 130);
      retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, 2, 2);
      retfings$game$Renders$PanelsRender$$draw_enemy(_e.icon, 0, 0);
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x + 30 + 75 - 30, y + 60 + 150 + 10, 60, 25, 10);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "14px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, type_text$2, x + 30 + 75 - 15, y + 60 + 150 + 25);
      return;
    }
    default: {
      const _NeutralElementsData = data;
      const _n = _NeutralElementsData._0;
      const name$3 = _n.name;
      const type_text$3 = _n.entity_type;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 32px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, name$3, x + 20, y + 40);
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x + 100, y + 130);
      retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, 2, 2);
      retfings$game$Renders$PanelsRender$$draw_neutral_elements(_n.icon, 0, 0);
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x + 30 + 75 - 30, y + 60 + 150 + 10, 60, 25, 10);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "14px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, type_text$3, x + 30 + 75 - 15, y + 60 + 150 + 25);
      return;
    }
  }
}
function retfings$game$Renders$PanelsRender$$draw_right_content(ctx, x, y, width, height) {
  const data = retfings$game$Renders$PanelsRender$$get_current_data(retfings$game$Core$Panels$$menuPanelSingleton.data, retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_tab, retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_index);
  switch (data.$tag) {
    case 0: {
      const _TowerData = data;
      const _tower = _TowerData._0;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "升级信息", x + 220, y + 40);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "16px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "建造价格", x + 220, y + 70);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD700");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, `💰 ${moonbitlang$core$int$$Int$to_string$46$inner(_tower.cost, 10)}`, x + 220, y + 90);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "升到2级", x + 320, y + 70);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD700");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, `💰 ${moonbitlang$core$int$$Int$to_string$46$inner(_tower.upgrade2, 10)}`, x + 320, y + 90);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "升到顶级", x + 420, y + 70);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD700");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, `💰 ${moonbitlang$core$int$$Int$to_string$46$inner(_tower.upgrade_max, 10)}`, x + 420, y + 90);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "炮塔说明", x + 220, y + 140);
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "16px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, _tower.description, x + 220, y + 170);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "使用技巧", x + 420, y + 140);
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "16px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, _tower.tips, x + 420, y + 170);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 18px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "伤害", x + 220, y + 240);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#00BFFF");
      retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, x + 270, y + 230, _tower.stats.damage + 0, 10);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$strokeRect(ctx, x + 270, y + 230, 100, 10);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "攻速", x + 420, y + 240);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFA500");
      retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, x + 470, y + 230, _tower.stats.speed + 0, 10);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$strokeRect(ctx, x + 470, y + 230, 100, 10);
      return;
    }
    case 1: {
      const _EnemiesData = data;
      const _entity = _EnemiesData._0;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "简介", x + 220, y + 40);
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "18px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, _entity.intro, x + 220, y + 70);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "技巧", x + 220, y + 120);
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "18px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, _entity.tips, x + 220, y + 150);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "属性", x + 220, y + 200);
      const _end81 = _entity.attributes.length;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end81) {
          const attr = moonbitlang$core$array$$Array$at$145$(_entity.attributes, i);
          const icon_x = x + 220 + (i + 0) * 80;
          const icon_y = y + 220;
          retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
          retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
          retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, icon_x + 20, icon_y + 20, 20, 0, 6.2831853071795862, -1);
          retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
          retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000000");
          retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "12px Arial");
          retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, attr.text, icon_x + 5, icon_y + 50);
          _tmp = i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    default: {
      const _NeutralElementsData = data;
      const _entity$2 = _NeutralElementsData._0;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "简介", x + 220, y + 40);
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "18px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, _entity$2.intro, x + 220, y + 70);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "技巧", x + 220, y + 120);
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "18px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, _entity$2.tips, x + 220, y + 150);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 20px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, "属性", x + 220, y + 200);
      const _end90 = _entity$2.attributes.length;
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < _end90) {
          const attr = moonbitlang$core$array$$Array$at$145$(_entity$2.attributes, i);
          const icon_x = x + 220 + (i + 0) * 80;
          const icon_y = y + 220;
          retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
          retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
          retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, icon_x + 20, icon_y + 20, 20, 0, 6.2831853071795862, -1);
          retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
          retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#000000");
          retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "12px Arial");
          retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, attr.text, icon_x + 5, icon_y + 50);
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
}
function retfings$game$Renders$PanelsRender$$draw_content(ctx) {
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "#D2B48C");
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, 500, 100);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, 500, 500);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Renders$PanelsRender$$draw_left_content(ctx, 300, 100, 680, 400);
  retfings$game$Renders$PanelsRender$$draw_right_content(ctx, 300, 100, 680, 400);
}
function retfings$game$Renders$PanelsRender$$get_current_category_data(data, tab) {
  switch (tab) {
    case 0: {
      const result = moonbitlang$core$array$$Array$new$46$inner$143$(0);
      const _arr = data.towers;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const tower = _arr[_i];
          moonbitlang$core$array$$Array$push$143$(result, new $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$TowerData(tower));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return result;
    }
    case 1: {
      const result$2 = moonbitlang$core$array$$Array$new$46$inner$143$(0);
      const _arr$2 = data.enemies;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const enemy = _arr$2[_i];
          moonbitlang$core$array$$Array$push$143$(result$2, new $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$EnemiesData(enemy));
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return result$2;
    }
    case 2: {
      const result$3 = moonbitlang$core$array$$Array$new$46$inner$143$(0);
      const _arr$3 = data.neutrals;
      const _len$3 = _arr$3.length;
      let _tmp$3 = 0;
      while (true) {
        const _i = _tmp$3;
        if (_i < _len$3) {
          const neutral = _arr$3[_i];
          moonbitlang$core$array$$Array$push$143$(result$3, new $64$retfings$47$game$47$Renders$47$PanelsRender$46$DataVariant$NeutralElementsData(neutral));
          _tmp$3 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return result$3;
    }
    default: {
      return [];
    }
  }
}
function retfings$game$Renders$PanelsRender$$draw_icon_bar(ctx) {
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
  retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, 300, 520, 680, 80, 15);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  const icons = retfings$game$Renders$PanelsRender$$get_current_category_data(retfings$game$Core$Panels$$menuPanelSingleton.data, retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_tab);
  const total_width = (icons.length + 0) * 80 - 20;
  const start_x = 300 + (680 - total_width) / 2;
  const _end61 = icons.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end61) {
      const icon_x = start_x + (i + 0) * 80;
      if (i === retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_index) {
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFF00");
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, icon_x + 30, 560, 35, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      }
      const _bind = moonbitlang$core$array$$Array$at$143$(icons, i);
      switch (_bind.$tag) {
        case 0: {
          const _TowerData = _bind;
          const _data = _TowerData._0;
          retfings$game$Renders$PanelsRender$$draw_tower(_data.icon, icon_x + 30, 560);
          break;
        }
        case 1: {
          const _EnemiesData = _bind;
          const _data$2 = _EnemiesData._0;
          retfings$game$Renders$PanelsRender$$draw_enemy(_data$2.icon, icon_x + 30, 560);
          break;
        }
        default: {
          const _NeutralElementsData = _bind;
          const _data$3 = _NeutralElementsData._0;
          retfings$game$Renders$PanelsRender$$draw_neutral_elements(_data$3.icon, icon_x + 30, 560);
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$PanelsRender$$draw_panel(ctx) {
  const x = retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.panel_x;
  const y = retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.panel_y;
  const w = retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.panel_width;
  const h = retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.panel_height;
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD700");
  retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x, y, w, h, 40);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FF8C00");
  retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x + 10, y + 10, w - 20, h - 20, 30);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF8DC");
  retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, x + 20, y + 20, w - 40, h - 40, 20);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
}
function retfings$game$Renders$PanelsRender$$draw_tabs(ctx) {
  const tab_names = retfings$game$Core$Panels$$menuPanelSingleton.data.neutrals.length === 0 ? ["炮塔", "敌人"] : ["炮塔", "敌人", "中立"];
  const _end132 = tab_names.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end132) {
      const tab_x = 300 + (i + 0) * 170;
      const tab_name = moonbitlang$core$array$$Array$at$144$(tab_names, i);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_tab === i ? "#FFD700" : "#FFEC8B");
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, tab_x, 20);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, tab_x + 150, 20);
      retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, tab_x + 150, 50, 30, 4.71238898038469, 1.5707963267948966, -1);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, tab_x, 80);
      retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#8B4513");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 24px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "center");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, tab_name, tab_x + 75, 55);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "left");
}
function retfings$game$Renders$PanelsRender$$MenuPanelRender$render(self, timestamp) {
  if (retfings$game$Core$Panels$$menuPanelSingleton.show_help_Panel) {
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.55)");
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, retfings$game$Core$$map.width, retfings$game$Core$$map.height);
    retfings$game$Renders$PanelsRender$$draw_panel(retfings$game$Core$$ctxSingleton);
    retfings$game$Renders$PanelsRender$$draw_content(retfings$game$Core$$ctxSingleton);
    retfings$game$Renders$PanelsRender$$draw_icon_bar(retfings$game$Core$$ctxSingleton);
    retfings$game$Renders$PanelsRender$$draw_close_button(retfings$game$Core$$ctxSingleton);
    retfings$game$Renders$PanelsRender$$draw_tabs(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    return;
  } else {
    if (retfings$game$Core$Panels$$menuPanelSingleton.is_open) {
      retfings$game$Renders$PanelsRender$$renderMenu(retfings$game$Core$$ctxSingleton);
      return;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$PanelsRender$$MenuPanelRender$switch_tab(self, tab_index) {
  if (tab_index >= 0 && tab_index < 4) {
    self.current_tab = tab_index;
    self.current_index = 0;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PanelsRender$$MenuPanelRender$select_icon(self, index) {
  self.current_index = index;
}
function retfings$game$Controllers$PanelsController$$SelectTowerPanelController$new() {
  ({});
}
function retfings$game$Controllers$PanelsController$$SelectTowerPanelController$get_instance() {
  const _bind = retfings$game$Controllers$PanelsController$$selectTowerPanelControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$PanelsController$$SelectTowerPanelController$new();
    retfings$game$Controllers$PanelsController$$selectTowerPanelControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PanelsController$$SelectTowerPanelController$handel_select_tower_panel(self, point) {
  retfings$game$Core$Panels$$selectTowerPanelSingleton.currAvailableTowersCount = retfings$game$Core$Panels$$selectTowerPanelSingleton.items.length + 0;
  retfings$game$Core$Panels$$selectTowerPanelSingleton.openPanelTowerPoint = retfings$game$Core$Map$$MapGridSystem$pixel2tower(retfings$game$Core$Map$$map_grid_system_singleton, point);
  const _bind = retfings$game$Core$Panels$$SelectTowerPanel$computeLayout(retfings$game$Core$Panels$$selectTowerPanelSingleton, retfings$game$Core$$map);
  const _panelW = _bind._0;
  const _panelH = _bind._1;
  retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelH = _panelH;
  retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelW = _panelW;
  const towerPixel = retfings$game$Core$Map$$MapGridSystem$tower2pixel(retfings$game$Core$Map$$map_grid_system_singleton, retfings$game$Core$Panels$$selectTowerPanelSingleton.openPanelTowerPoint);
  let px = towerPixel.x - retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelW - 10;
  let py = towerPixel.y - retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelH - 10;
  const canvasWidth = retfings$game$Core$$map.width;
  const canvasHeight = retfings$game$Core$$map.height;
  if (px + retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelW > canvasWidth) {
    px = towerPixel.x - retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelW - 10;
  }
  if (px < 0) {
    px = towerPixel.x + 10;
  }
  if (py + retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelH > canvasHeight) {
    py = towerPixel.y - retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelH - 10;
  }
  if (py < 0) {
    py = towerPixel.y + 10;
  }
  retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelPiexlPoint = retfings$game$Core$Point$$PixelPoint$new$46$inner(px, py);
  retfings$game$Core$Panels$$selectTowerPanelSingleton.currClickPixelPoint = point;
  retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen = true;
}
function retfings$game$Controllers$PanelsController$$SelectTowerPanelController$place_tower(_self, towerType, position) {
  switch (towerType) {
    case 2: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 80)) {
        const t = retfings$game$Core$Sprite$Tower$$LightningTower$new(100, 100, 20, 10, position, 80, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$196$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$196$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$196$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$196$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$196$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$196$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$196$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$196$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$196$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$196$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$196$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$196$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$196$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$196$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$196$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 80);
        return;
      } else {
        return;
      }
    }
    case 3: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 30)) {
        const t = retfings$game$Core$Sprite$Tower$$ChargeJarTower$new(100, 100, 1, 10, position, 30, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$201$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$201$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$201$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$201$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$201$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$201$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$201$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$201$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$201$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$201$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$201$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$201$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$201$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$201$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$201$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 30);
        return;
      } else {
        return;
      }
    }
    case 4: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 110)) {
        const t = retfings$game$Core$Sprite$Tower$$PositiveMagneticTower$new(120, 120, 2, 8, position, 110, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$193$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$193$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$193$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$193$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$193$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$193$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$193$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$193$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$193$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$193$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$193$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$193$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$193$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$193$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$193$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 110);
        return;
      } else {
        return;
      }
    }
    case 5: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 90)) {
        const t = retfings$game$Core$Sprite$Tower$$NegativeMagneticTower$new(120, 120, 3, 8, position, 90, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$195$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$195$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$195$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$195$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$195$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$195$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$195$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$195$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$195$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$195$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$195$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$195$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$195$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$195$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$195$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 90);
        return;
      } else {
        return;
      }
    }
    case 1: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$CurveTower$new(100, 100, 2, 10, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$200$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$200$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$200$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$200$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$200$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$200$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$200$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$200$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$200$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$200$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$200$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$200$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$200$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$200$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$200$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
    case 0: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 100)) {
        const t = retfings$game$Core$Sprite$Tower$$PlasmaTower$new(100, 100, 3, 10, position, 100, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$194$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$194$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$194$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$194$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$194$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$194$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$194$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$194$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$194$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$194$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$194$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$194$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$194$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$194$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$194$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 100);
        return;
      } else {
        return;
      }
    }
    case 6: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 50)) {
        const t = retfings$game$Core$Sprite$Tower$$BeeTower$new(100, 100, 2, 2, position, 50, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$203$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$203$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$203$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$203$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$203$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$203$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$203$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$203$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$203$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$203$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$203$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$203$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$203$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$203$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$203$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 50);
        return;
      } else {
        return;
      }
    }
    case 7: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 120)) {
        const t = retfings$game$Core$Sprite$Tower$$BeeTower$new(100, 100, 2, 2, position, 120, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$203$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$203$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$203$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$203$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$203$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$203$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$203$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$203$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$203$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$203$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$203$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$203$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$203$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$203$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$203$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 120);
        return;
      } else {
        return;
      }
    }
    case 8: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$LaserTower$new(100, 160, 2, 2, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$197$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$197$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$197$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$197$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$197$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$197$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$197$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$197$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$197$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$197$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$197$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$197$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$197$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$197$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$197$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
    case 10: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$DecayTower$new(100, 160, 2, 2, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$199$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$199$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$199$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$199$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$199$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$199$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$199$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$199$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$199$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$199$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$199$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$199$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$199$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$199$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$199$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
    case 9: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$FrozenTower$new(100, 160, 2, 2, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$198$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$198$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$198$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$198$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$198$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$198$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$198$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$198$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$198$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$198$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$198$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$198$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$198$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$198$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$198$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
    case 11: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$ChainTower$new(100, 160, 2, 2, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$202$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$202$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$202$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$202$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$202$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$202$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$202$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$202$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$202$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$202$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$202$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$202$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$202$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$202$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$202$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
    case 13: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 120)) {
        const t = retfings$game$Core$Sprite$Tower$$SkyTower$new(100, 160, 2, 2, position, 120, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$192$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$192$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$192$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$192$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$192$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$192$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$192$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$192$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$192$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$192$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$192$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$192$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$192$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$192$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$192$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 120);
        return;
      } else {
        return;
      }
    }
    case 12: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$SpeedTower$new(100, 160, 2, 2, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$191$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$191$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$191$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$191$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$191$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$191$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$191$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$191$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$191$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$191$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$191$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$191$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$191$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$191$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$191$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
    case 14: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$ThunderTower$new(100, 160, 2, 2, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$190$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$190$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$190$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$190$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$190$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$190$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$190$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$190$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$190$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$190$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$190$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$190$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$190$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$190$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$190$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
    default: {
      if (retfings$game$Core$TopBar$$HDU$enough(retfings$game$Core$TopBar$$hduSingleton, 70)) {
        const t = retfings$game$Core$Sprite$Tower$$TreasureTower$new(100, 160, 2, 2, position, 70, towerType);
        moonbitlang$core$array$$Array$insert$124$(retfings$game$Core$Map$$map_grid_system_singleton.tower, 0, { self: t, method_0: retfings$game$Core$Sprite$Tower$$Tower$health$189$, method_1: retfings$game$Core$Sprite$Tower$$Tower$range$189$, method_2: retfings$game$Core$Sprite$Tower$$Tower$damage$189$, method_3: retfings$game$Core$Sprite$Tower$$Tower$attack_speed$189$, method_4: retfings$game$Core$Sprite$Tower$$Tower$position$189$, method_5: retfings$game$Core$Sprite$Tower$$Tower$level$189$, method_6: retfings$game$Core$Sprite$Tower$$Tower$cost$189$, method_7: retfings$game$Core$Sprite$Tower$$Tower$can_attack_fly$189$, method_8: retfings$game$Core$Sprite$Tower$$Tower$towerType$189$, method_9: retfings$game$Core$Sprite$Tower$$Tower$upgrade$189$, method_10: retfings$game$Core$Sprite$Tower$$Tower$get_timer_ms$189$, method_11: retfings$game$Core$Sprite$Tower$$Tower$set_timer_ms$189$, method_12: retfings$game$Core$Sprite$Tower$$Tower$set_visual_aim_deg$189$, method_13: retfings$game$Core$Sprite$Tower$$Tower$visual_aim_deg$189$, method_14: retfings$game$Core$Sprite$Tower$$Tower$id$189$ });
        retfings$game$Core$TopBar$$HDU$spend_gold(retfings$game$Core$TopBar$$hduSingleton, 70);
        return;
      } else {
        return;
      }
    }
  }
}
function retfings$game$Controllers$PanelsController$$SelectTowerPanelController$handle_input_point(self, point) {
  if (retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelOpen) {
    const center = retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelCenter;
    const radius = retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelRadius;
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance <= radius) {
      const upgradeButtonY = center.y - radius / 2;
      const destroyButtonY = center.y + radius / 2;
      const buttonRadius = radius / 3;
      const upgradeDx = point.x - center.x;
      const upgradeDy = point.y - upgradeButtonY;
      const upgradeDistance = Math.sqrt(upgradeDx * upgradeDx + upgradeDy * upgradeDy);
      if (upgradeDistance <= buttonRadius) {
        const _bind = retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerForUpgrade;
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _tower = _Some._0;
          if (_tower.method_5(_tower.self) >= 3) {
          } else {
            const upgradeCost = _tower.method_6(_tower.self) * 0.5;
            if (retfings$game$Controllers$TopBarController$$HDUController$spend_gold(retfings$game$Controllers$TopBarController$$hduControllerSingleton, upgradeCost)) {
              _tower.method_9(_tower.self);
            }
          }
        }
        retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelOpen = false;
        return undefined;
      }
      const destroyDx = point.x - center.x;
      const destroyDy = point.y - destroyButtonY;
      const destroyDistance = Math.sqrt(destroyDx * destroyDx + destroyDy * destroyDy);
      if (destroyDistance <= buttonRadius) {
        const _bind = retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerForUpgrade;
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _tower = _Some._0;
          retfings$game$Controllers$TopBarController$$HDUController$add_gold(retfings$game$Controllers$TopBarController$$hduControllerSingleton, _tower.method_6(_tower.self) * 0.5);
          const towerArray = retfings$game$Core$Map$$map_grid_system_singleton.tower;
          let indexToRemove = -1;
          let _tmp = 0;
          while (true) {
            const i = _tmp;
            if (i < towerArray.length) {
              const currentTower = moonbitlang$core$array$$Array$at$124$(towerArray, i);
              const targetTower = moonbitlang$core$option$$Option$unwrap$124$(retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerForUpgrade);
              if (currentTower.method_4(currentTower.self).x === targetTower.method_4(targetTower.self).x && currentTower.method_4(currentTower.self).y === targetTower.method_4(targetTower.self).y) {
                indexToRemove = i;
                break;
              }
              _tmp = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (indexToRemove >= 0) {
            moonbitlang$core$array$$Array$remove$124$(towerArray, indexToRemove);
          }
          const pos = retfings$game$Core$Map$$MapGridSystem$to_1_base_map(retfings$game$Core$Map$$map_grid_system_singleton, retfings$game$Core$Point$$BasePoint$new$46$inner(_tower.method_4(_tower.self).x, _tower.method_4(_tower.self).y));
          retfings$game$Core$Map$$MapGridSystem$freed(retfings$game$Core$Map$$map_grid_system_singleton, moonbitlang$core$double$$Double$to_int(pos.x), moonbitlang$core$double$$Double$to_int(pos.y));
          retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerForUpgrade = Option$None$3$;
        }
        retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelOpen = false;
        return undefined;
      }
    } else {
      retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelOpen = false;
      return undefined;
    }
  }
  if (retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen) {
    const _bind = retfings$game$Core$Panels$$SelectTowerPanel$computeLayout(retfings$game$Core$Panels$$selectTowerPanelSingleton, retfings$game$Core$$map);
    const _items = _bind._2;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _items.length) {
        const r = moonbitlang$core$array$$Array$at$140$(_items, i);
        if (point.x >= r.x && (point.x <= r.x + r.w && (point.y >= r.y && point.y <= r.y + r.h))) {
          retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerType = moonbitlang$core$array$$Array$at$141$(retfings$game$Core$Panels$$selectTowerPanelSingleton.items, i);
          retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen = false;
          retfings$game$Controllers$PanelsController$$SelectTowerPanelController$place_tower(self, moonbitlang$core$array$$Array$at$141$(retfings$game$Core$Panels$$selectTowerPanelSingleton.items, i), retfings$game$Core$Panels$$selectTowerPanelSingleton.openPanelTowerPoint);
          return undefined;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const panelX = retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelPiexlPoint.x;
    const panelY = retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelPiexlPoint.y;
    if (point.x < panelX || (point.x > panelX + retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelW || (point.y < panelY || point.y > panelY + retfings$game$Core$Panels$$selectTowerPanelSingleton.showPanelH))) {
      retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen = false;
    }
    return undefined;
  }
  const _arr = retfings$game$Core$Map$$map_grid_system_singleton.tower;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const tower = _arr[_i];
      const towerPos = retfings$game$Core$Map$$MapGridSystem$tower2pixel(retfings$game$Core$Map$$map_grid_system_singleton, tower.method_4(tower.self));
      const dx = point.x - towerPos.x;
      const dy = point.y - towerPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const towerRadius = retfings$game$Core$Panels$$selectTowerPanelSingleton.iconSize;
      if (distance <= towerRadius) {
        retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelOpen = true;
        let panelX = point.x;
        let panelY = point.y;
        const panelRadius = retfings$game$Core$Panels$$selectTowerPanelSingleton.iconSize * 2;
        retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelRadius = panelRadius;
        const canvasWidth = retfings$game$Core$$map.width;
        const canvasHeight = retfings$game$Core$$map.height;
        if (panelX + panelRadius > canvasWidth) {
          panelX = canvasWidth - panelRadius;
        }
        if (panelX - panelRadius < 0) {
          panelX = panelRadius;
        }
        if (panelY + panelRadius > canvasHeight) {
          panelY = canvasHeight - panelRadius;
        }
        if (panelY - panelRadius < 0) {
          panelY = panelRadius;
        }
        retfings$game$Core$Panels$$selectTowerPanelSingleton.upgradePanelCenter = retfings$game$Core$Point$$PixelPoint$new$46$inner(panelX, panelY);
        retfings$game$Core$Panels$$selectTowerPanelSingleton.selectedTowerForUpgrade = new Option$Some$3$(tower);
        return undefined;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen) {
    retfings$game$Controllers$PanelsController$$SelectTowerPanelController$handel_select_tower_panel(self, point);
  }
  if (retfings$game$Controllers$MapController$$MapController$placed(retfings$game$Controllers$MapController$$mapControllerSingleton, point)) {
    retfings$game$Core$Map$$mapTipsSingleton.placed_tips = true;
    retfings$game$Core$Map$$mapTipsSingleton.placed_tips_points = point;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$new() {
  ({});
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$get_instance() {
  const _bind = retfings$game$Controllers$PanelsController$$menuPanelControllerInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Controllers$PanelsController$$MenuPanelController$new();
    retfings$game$Controllers$PanelsController$$menuPanelControllerInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$handle_help_panel_input(self, point) {
  if (retfings$game$Core$Panels$$menuPanelSingleton.show_help_Panel) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < 4) {
        const tab_x = 300 + (i + 0) * 170;
        if (point.x >= tab_x && (point.x <= tab_x + 150 && (point.y >= 20 && point.y <= 80))) {
          retfings$game$Renders$PanelsRender$$MenuPanelRender$switch_tab(retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton, i);
          return true;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const icons = retfings$game$Renders$PanelsRender$$get_current_category_data(retfings$game$Core$Panels$$menuPanelSingleton.data, retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton.current_tab);
    const total_width = (icons.length + 0) * 80 - 20;
    const start_icon_x = 300 + (680 - total_width) / 2;
    const _end82 = icons.length;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < _end82) {
        const icon_x = start_icon_x + (i + 0) * 80;
        if (point.x >= icon_x && (point.x <= icon_x + 60 && (point.y >= 530 && point.y <= 590))) {
          retfings$game$Renders$PanelsRender$$MenuPanelRender$select_icon(retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton, i);
          return true;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (point.x >= 930 && (point.x <= 980 && (point.y >= 100 && point.y <= 150))) {
      retfings$game$Core$Panels$$MenuPanel$close(retfings$game$Core$Panels$$menuPanelSingleton);
      return true;
    }
  }
  return false;
}
function retfings$game$Controllers$PanelsController$$is_point_in_rect(x, y, rect_x, rect_y, width, height) {
  return x >= rect_x && (x <= rect_x + width && (y >= rect_y && y <= rect_y + height));
}
function retfings$game$Controllers$PanelsController$$is_point_in_slider_button(x, y, slider_x, slider_y, slider_width, slider_height, value) {
  const button_x = slider_x + slider_width * value;
  const button_y = slider_y + slider_height / 2;
  const dx = x - button_x;
  const dy = y - button_y;
  return Math.sqrt(dx * dx + dy * dy) <= 25;
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$on_clear_cache_clicked(self) {
  retfings$game$Core$LocalStorage$$LocalStorage$clear_cache(retfings$game$Core$LocalStorage$$localStorageSingleton);
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$on_continue_clicked(self) {
  retfings$game$Core$Panels$$MenuPanel$close(retfings$game$Core$Panels$$menuPanelSingleton);
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$on_exit_clicked(self) {
  retfings$game$Core$Panels$$MenuPanel$close(retfings$game$Core$Panels$$menuPanelSingleton);
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$on_help_clicked(self) {
  retfings$game$Core$Panels$$menuPanelSingleton.show_help_Panel = true;
  retfings$game$Core$Panels$$menuPanelSingleton.is_open = false;
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$on_restart_clicked(self) {
  retfings$game$Controllers$MapController$$switch_level(retfings$game$Core$Map$$MapLevel$get_cur_level(retfings$game$Core$Map$$mapLevelSingleton));
  retfings$game$Core$Panels$$MenuPanel$close(retfings$game$Core$Panels$$menuPanelSingleton);
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$handle_mouse_down(self, x, y) {
  if (!retfings$game$Core$Panels$$menuPanelSingleton.is_open) {
    return false;
  }
  if (retfings$game$Controllers$PanelsController$$is_point_in_slider_button(x, y, retfings$game$Core$Panels$$menuPanelSingleton.sound_slider_x, retfings$game$Core$Panels$$menuPanelSingleton.slider_y, retfings$game$Core$Panels$$menuPanelSingleton.slider_width, retfings$game$Core$Panels$$menuPanelSingleton.slider_height, retfings$game$Core$Panels$$menuPanelSingleton.sound_volume)) {
    retfings$game$Core$Panels$$menuPanelSingleton.dragging_sound_slider = true;
    return true;
  } else {
    if (retfings$game$Controllers$PanelsController$$is_point_in_slider_button(x, y, retfings$game$Core$Panels$$menuPanelSingleton.music_slider_x, retfings$game$Core$Panels$$menuPanelSingleton.slider_y, retfings$game$Core$Panels$$menuPanelSingleton.slider_width, retfings$game$Core$Panels$$menuPanelSingleton.slider_height, retfings$game$Core$Panels$$menuPanelSingleton.music_volume)) {
      retfings$game$Core$Panels$$menuPanelSingleton.dragging_music_slider = true;
      return true;
    } else {
      if (retfings$game$Controllers$PanelsController$$is_point_in_rect(x, y, retfings$game$Core$Panels$$menuPanelSingleton.exit_button_x, retfings$game$Core$Panels$$menuPanelSingleton.exit_button_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height)) {
        retfings$game$Controllers$PanelsController$$MenuPanelController$on_exit_clicked(self);
        return true;
      } else {
        if (retfings$game$Controllers$PanelsController$$is_point_in_rect(x, y, retfings$game$Core$Panels$$menuPanelSingleton.help_button_x, retfings$game$Core$Panels$$menuPanelSingleton.help_button_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height)) {
          retfings$game$Controllers$PanelsController$$MenuPanelController$on_help_clicked(self);
          return true;
        } else {
          if (retfings$game$Controllers$PanelsController$$is_point_in_rect(x, y, retfings$game$Core$Panels$$menuPanelSingleton.restart_button_x, retfings$game$Core$Panels$$menuPanelSingleton.restart_button_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height)) {
            retfings$game$Controllers$PanelsController$$MenuPanelController$on_restart_clicked(self);
            return true;
          } else {
            if (retfings$game$Controllers$PanelsController$$is_point_in_rect(x, y, retfings$game$Core$Panels$$menuPanelSingleton.continue_button_x, retfings$game$Core$Panels$$menuPanelSingleton.continue_button_y, retfings$game$Core$Panels$$menuPanelSingleton.large_button_width, retfings$game$Core$Panels$$menuPanelSingleton.large_button_height)) {
              retfings$game$Controllers$PanelsController$$MenuPanelController$on_continue_clicked(self);
              return true;
            } else {
              if (retfings$game$Controllers$PanelsController$$is_point_in_rect(x, y, retfings$game$Core$Panels$$menuPanelSingleton.clear_cache_x, retfings$game$Core$Panels$$menuPanelSingleton.clear_cache_y, retfings$game$Core$Panels$$menuPanelSingleton.button_width, retfings$game$Core$Panels$$menuPanelSingleton.button_height)) {
                retfings$game$Controllers$PanelsController$$MenuPanelController$on_clear_cache_clicked(self);
                return true;
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function retfings$game$Controllers$PanelsController$$MenuPanelController$handle_input_point(self, point) {
  if (retfings$game$Controllers$PanelsController$$MenuPanelController$handle_help_panel_input(self, point)) {
    return true;
  }
  if (retfings$game$Controllers$PanelsController$$MenuPanelController$handle_mouse_down(self, point.x, point.y)) {
    return true;
  }
  return false;
}
function retfings$game$Controllers$InputController$$InputController$new() {
  return { init: undefined };
}
function retfings$game$Controllers$InputController$$InputController$get_instance() {
  const _bind = retfings$game$Controllers$InputController$$inputControllerInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Controllers$InputController$$InputController$new();
    retfings$game$Controllers$InputController$$inputControllerInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Controllers$InputController$$InputController$on_move(_self, point) {
  if (retfings$game$Core$Panels$$menuPanelSingleton.is_open) {
    if (retfings$game$Core$Panels$$menuPanelSingleton.dragging_sound_slider) {
      const _p = 0;
      const _p$2 = 1;
      const _p$3 = (point.x - retfings$game$Core$Panels$$menuPanelSingleton.sound_slider_x) / retfings$game$Core$Panels$$menuPanelSingleton.slider_width;
      const _p$4 = _p$2 > _p$3 ? _p$3 : _p$2;
      retfings$game$Core$Panels$$menuPanelSingleton.sound_volume = _p > _p$4 ? _p : _p$4;
      return;
    } else {
      if (retfings$game$Core$Panels$$menuPanelSingleton.dragging_music_slider) {
        const _p = 0;
        const _p$2 = 1;
        const _p$3 = (point.x - retfings$game$Core$Panels$$menuPanelSingleton.music_slider_x) / retfings$game$Core$Panels$$menuPanelSingleton.slider_width;
        const _p$4 = _p$2 > _p$3 ? _p$3 : _p$2;
        retfings$game$Core$Panels$$menuPanelSingleton.music_volume = _p > _p$4 ? _p : _p$4;
        return;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function retfings$game$Controllers$InputController$$InputController$on_start(_self, point) {
  moonbitlang$core$builtin$$println$144$(retfings$game$Core$Point$$PixelPoint$to_string(point));
  if (retfings$game$Controllers$TopBarController$$PauseController$click_pause_button(retfings$game$Controllers$TopBarController$$pauseControllerSingleton, point)) {
    retfings$game$Controllers$TopBarController$$PauseController$handle_input_point(retfings$game$Controllers$TopBarController$$pauseControllerSingleton);
    return undefined;
  }
  if (retfings$game$Controllers$TopBarController$$SpeedController$click_speed_button(retfings$game$Controllers$TopBarController$$speedControllerSingleton, point)) {
    retfings$game$Controllers$TopBarController$$SpeedController$handle_input_point(retfings$game$Controllers$TopBarController$$speedControllerSingleton);
    return undefined;
  }
  if (retfings$game$Core$Pages$$winPageSingleton.is_open) {
    if (retfings$game$Controllers$PagesController$$WinPageController$click_next_level_button(retfings$game$Controllers$PagesController$$winPageControllerSingleton, point)) {
      retfings$game$Controllers$PagesController$$WinPageController$handle_next_level(retfings$game$Controllers$PagesController$$winPageControllerSingleton);
      return undefined;
    }
    if (retfings$game$Controllers$PagesController$$WinPageController$click_select_level_button(retfings$game$Controllers$PagesController$$winPageControllerSingleton, point)) {
      retfings$game$Controllers$PagesController$$WinPageController$handle_select_level(retfings$game$Controllers$PagesController$$winPageControllerSingleton);
      return undefined;
    }
  }
  if (retfings$game$Core$Pages$$losePageSingleton.is_open) {
    if (retfings$game$Controllers$PagesController$$LosePageController$click_replay_button(retfings$game$Controllers$PagesController$$losePageControllerSingleton, point)) {
      retfings$game$Controllers$PagesController$$LosePageController$handel_replay(retfings$game$Controllers$PagesController$$losePageControllerSingleton);
      return undefined;
    }
    if (retfings$game$Controllers$PagesController$$LosePageController$click_return_button(retfings$game$Controllers$PagesController$$losePageControllerSingleton, point)) {
      retfings$game$Controllers$PagesController$$LosePageController$handel_return(retfings$game$Controllers$PagesController$$losePageControllerSingleton);
      return undefined;
    }
  }
  if (retfings$game$Core$Pages$$selectLevelPageSingleton.is_open) {
    retfings$game$Controllers$PagesController$$SelectLevelPageController$handel(retfings$game$Controllers$PagesController$$selectLevelPageControllerSingleton, point);
    return undefined;
  }
  if (retfings$game$Controllers$TopBarController$$MenuButtonController$click_menu_button(retfings$game$Controllers$TopBarController$$menuButtonControllerSingleton, point)) {
    retfings$game$Controllers$TopBarController$$MenuButtonController$handle_input_point(retfings$game$Controllers$TopBarController$$menuButtonControllerSingleton);
    return undefined;
  }
  if (retfings$game$Core$Panels$$menuPanelSingleton.is_open || retfings$game$Core$Panels$$menuPanelSingleton.show_help_Panel) {
    retfings$game$Controllers$PanelsController$$MenuPanelController$handle_input_point(retfings$game$Controllers$PanelsController$$menuPanelControllerSingleton, point);
    return undefined;
  }
  const _bind = retfings$game$Controllers$MapController$$MapController$map_type(retfings$game$Controllers$MapController$$mapControllerSingleton, point);
  switch (_bind) {
    case 2: {
      break;
    }
    case 5: {
      if (!retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen) {
        retfings$game$Controllers$MapController$$click_disabled(point);
        return undefined;
      }
      break;
    }
    case 3: {
      moonbitlang$core$builtin$$println$144$("click enemy");
      break;
    }
    case 4: {
      if (!retfings$game$Core$Panels$$selectTowerPanelSingleton.isOpen) {
        retfings$game$Controllers$NeutralElementController$$handle_input_point(point);
        return undefined;
      }
      break;
    }
  }
  retfings$game$Controllers$PanelsController$$SelectTowerPanelController$handle_input_point(retfings$game$Controllers$PanelsController$$selectTowerPanelControllerSingleton, point);
}
function retfings$game$Controllers$InputController$$InputController$on_up(_self, _pos) {
  if (retfings$game$Core$Panels$$menuPanelSingleton.is_open) {
    if (retfings$game$Core$Panels$$menuPanelSingleton.dragging_sound_slider) {
      retfings$game$Core$Panels$$MenuPanel$set_sound_volume(retfings$game$Core$Panels$$menuPanelSingleton, retfings$game$Core$Panels$$menuPanelSingleton.sound_volume);
    } else {
      if (retfings$game$Core$Panels$$menuPanelSingleton.dragging_music_slider) {
        retfings$game$Core$Panels$$MenuPanel$set_music_volume(retfings$game$Core$Panels$$menuPanelSingleton, retfings$game$Core$Panels$$menuPanelSingleton.music_volume);
      }
    }
    retfings$game$Core$Panels$$menuPanelSingleton.dragging_sound_slider = false;
    retfings$game$Core$Panels$$menuPanelSingleton.dragging_music_slider = false;
    return;
  } else {
    return;
  }
}
function retfings$game$Controllers$$GameController$new(canvas, ctx, map) {
  if (!retfings$game$Core$$is_wechat()) {
    retfings$game$Core$$document_body_append_child(canvas);
  }
  return { ctx: ctx, canvas: canvas, map: map };
}
function retfings$game$Controllers$$GameController$get_instance(canvas, ctx, map) {
  const _bind = retfings$game$Controllers$$instance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Controllers$$GameController$new(canvas, ctx, map);
    retfings$game$Controllers$$instance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Controllers$$GameController$update(self, dt, timestamp) {
  retfings$game$Controllers$InputController$$inputControllerSingleton.init;
  if (retfings$game$Controllers$PagesController$$PagesController$show_page(retfings$game$Controllers$PagesController$$pagesControllerSingleton)) {
    retfings$game$Controllers$PagesController$$PagesController$update(retfings$game$Controllers$PagesController$$pagesControllerSingleton, dt);
    return undefined;
  }
  retfings$game$Controllers$MapController$$MapController$update(retfings$game$Controllers$MapController$$mapControllerSingleton, dt);
  retfings$game$Controllers$EnemyController$$EnemyController$update(retfings$game$Controllers$EnemyController$$enemyControllerSingleton, dt, timestamp);
  retfings$game$Controllers$TowerController$$TowerController$update(retfings$game$Controllers$TowerController$$towerControllerSingleton, dt);
  retfings$game$Controllers$TopBarController$$WaveProgressBarController$update(retfings$game$Controllers$TopBarController$$waveProgressBarControllerSingleton, dt);
  retfings$game$Controllers$NeutralElementController$$NeutralElementController$update(retfings$game$Controllers$NeutralElementController$$neutralElementControllerSingleton, dt);
}
function retfings$game$Renders$MapRender$$PathRender$new() {
  ({});
}
function retfings$game$Renders$MapRender$$PathRender$get_instance() {
  const _bind = retfings$game$Renders$MapRender$$pathRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$MapRender$$PathRender$new();
    retfings$game$Renders$MapRender$$pathRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$MapRender$$PathRender$render_path(self, path_points, color) {
  const gridSize = retfings$game$Core$$map.gridSize;
  if (path_points.length === 0) {
    return undefined;
  }
  const _p = new Array(path_points.length);
  const _p$2 = path_points.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = path_points[_p$3];
      _p[_p$3] = { x: (_p$4.x + 0.5) * gridSize, y: (_p$4.y + 0.5) * gridSize, is_jump_point: _p$4.is_jump_point };
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const pts = _p;
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$lineCap(retfings$game$Core$$ctxSingleton, "round");
  retfings$game$Core$$CanvasRenderingContext2D$lineJoin(retfings$game$Core$$ctxSingleton, "round");
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, color);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, gridSize);
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.6)");
  retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(retfings$game$Core$$ctxSingleton, 10);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetY(retfings$game$Core$$ctxSingleton, -4);
  retfings$game$Core$$CanvasRenderingContext2D$shadowOffsetX(retfings$game$Core$$ctxSingleton, 0);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, moonbitlang$core$array$$Array$at$136$(pts, 0).x, moonbitlang$core$array$$Array$at$136$(pts, 0).y);
  const _end52 = pts.length;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _end52) {
      const prev = moonbitlang$core$array$$Array$at$136$(pts, i - 1 | 0);
      const cur = moonbitlang$core$array$$Array$at$136$(pts, i);
      const isJump = prev.x !== cur.x && prev.y !== cur.y;
      if (isJump) {
        retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, cur.x, cur.y);
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, cur.x, cur.y);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(retfings$game$Core$$ctxSingleton, "transparent");
  const _p$3 = 2;
  const _p$4 = moonbitlang$core$double$$Double$floor(gridSize * 0.06);
  retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, _p$3 > _p$4 ? _p$3 : _p$4);
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#b9b2a6");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, moonbitlang$core$array$$Array$at$136$(pts, 0).x, moonbitlang$core$array$$Array$at$136$(pts, 0).y);
  const _end60 = pts.length;
  let _tmp$3 = 1;
  while (true) {
    const i = _tmp$3;
    if (i < _end60) {
      const prev = moonbitlang$core$array$$Array$at$136$(pts, i - 1 | 0);
      const cur = moonbitlang$core$array$$Array$at$136$(pts, i);
      const isJump = prev.x !== cur.x && prev.y !== cur.y;
      if (isJump) {
        retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, cur.x, cur.y);
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, cur.x, cur.y);
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
  const _end68 = path_points.length;
  let _tmp$4 = 1;
  while (true) {
    const i = _tmp$4;
    if (i < _end68) {
      const point = moonbitlang$core$array$$Array$at$136$(path_points, i);
      if (point.is_jump_point) {
        const jumpX = (point.x + 0.5) * gridSize;
        const jumpY = (point.y + 0.5) * gridSize;
        retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 255, 0, 0.7)");
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, jumpX, jumpY, gridSize * 0.3, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 255, 0, 0.9)");
        retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 2);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, jumpX - gridSize * 0.2, jumpY);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, jumpX + gridSize * 0.2, jumpY);
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, jumpX + gridSize * 0.1, jumpY - gridSize * 0.1);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, jumpX + gridSize * 0.2, jumpY);
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, jumpX + gridSize * 0.1, jumpY + gridSize * 0.1);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$MapRender$$PathRender$render_all_paths(self) {
  const map_path = retfings$game$Core$Map$$MapPath$get_instance();
  const all_paths = map_path.paths;
  const path_colors = ["#cfc7b8"];
  const _end38 = all_paths.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end38) {
      const path = moonbitlang$core$array$$Array$at$132$(all_paths, i);
      const color = moonbitlang$core$array$$Array$at$144$(path_colors, i % path_colors.length | 0);
      retfings$game$Renders$MapRender$$PathRender$render_path(self, path.points, color);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$MapRender$$PathRender$render(_self, _timestamp) {
  retfings$game$Renders$MapRender$$PathRender$render_all_paths(retfings$game$Renders$MapRender$$pathRenderSingleton);
}
function retfings$game$Renders$MapRender$$MapTipsRender$new() {
  ({});
}
function retfings$game$Renders$MapRender$$MapTipsRender$get_instance() {
  const _bind = retfings$game$Renders$MapRender$$mapTipsRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$MapRender$$MapTipsRender$new();
    retfings$game$Renders$MapRender$$mapTipsRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$MapRender$$MapTipsRender$render(self, timestamp) {
  const _arr = retfings$game$Core$Map$$click_disabled_tips.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = _arr[_i];
      const a = t.global_alpha;
      retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(retfings$game$Core$$ctxSingleton, a);
      retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, t.placed_tips_points.x, t.placed_tips_points.y);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, 0, 0, 30, 0, 6.2831853071795862, -1);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#f00");
      retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, -15, -15);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, 15, 15);
      retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, 15, -15);
      retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, -15, 15);
      retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "#fff");
      retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 4);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
      retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$MapRender$$MapRender$new() {
  ({});
}
function retfings$game$Renders$MapRender$$MapRender$get_instance() {
  const _bind = retfings$game$Renders$MapRender$$mapRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$MapRender$$MapRender$new();
    retfings$game$Renders$MapRender$$mapRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$MapRender$$MapBackgroundRender$new() {
  ({});
}
function retfings$game$Renders$MapRender$$MapBackgroundRender$get_instance() {
  const _bind = retfings$game$Renders$MapRender$$mapBackgroundRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$MapRender$$MapBackgroundRender$new();
    retfings$game$Renders$MapRender$$mapBackgroundRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$MapRender$$MapBackgroundRender$render(_self) {
  const width = retfings$game$Core$$map.width;
  const height = retfings$game$Core$$map.height;
  const g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(retfings$game$Core$$ctxSingleton, width / 2, height / 2, 0, width / 2, height / 2, (width > height ? width : height) / 2);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, retfings$game$Renders$MapRender$$render$46$light$124$6);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, retfings$game$Renders$MapRender$$render$46$dark$124$5);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(retfings$game$Core$$ctxSingleton, g);
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, width, height);
  const cw = retfings$game$Core$$Canvas$width(retfings$game$Core$$canvasSingleton);
  const ch = retfings$game$Core$$Canvas$height(retfings$game$Core$$canvasSingleton);
  if (cw <= 0 || ch <= 0) {
    return undefined;
  }
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$setTransform(retfings$game$Core$$ctxSingleton, 1, 0, 0, 1, 0, 0);
  const _p = cw / width;
  const _p$2 = ch / height;
  const scale = _p > _p$2 ? _p$2 : _p;
  const sw = width * scale;
  const offX = (cw - sw) / 2;
  if (offX > 0) {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#6C835D");
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, offX, ch);
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, cw - offX, 0, offX, ch);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$MapRender$$MapRender$render(_self, _timestamp) {
  retfings$game$Core$$map.gridSize;
  retfings$game$Renders$MapRender$$MapBackgroundRender$render(retfings$game$Renders$MapRender$$mapBackgroundRenderSingleton);
  retfings$game$Renders$MapRender$$PathRender$render(retfings$game$Renders$MapRender$$pathRenderSingleton, _timestamp);
}
function retfings$game$Renders$TopBarRender$$WaveProgressBarRender$new() {
  ({});
}
function retfings$game$Renders$TopBarRender$$WaveProgressBarRender$get_instance() {
  const _bind = retfings$game$Renders$TopBarRender$$waveProgressBarRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$TopBarRender$$WaveProgressBarRender$new();
    retfings$game$Renders$TopBarRender$$waveProgressBarRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$TopBarRender$$WaveProgressBarRender$render(_self) {}
function retfings$game$Renders$TopBarRender$$SpeedButtonRender$new() {
  ({});
}
function retfings$game$Renders$TopBarRender$$SpeedButtonRender$get_instance() {
  const _bind = retfings$game$Renders$TopBarRender$$speedButtonRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$TopBarRender$$SpeedButtonRender$new();
    retfings$game$Renders$TopBarRender$$speedButtonRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$TopBarRender$$SpeedButtonRender$render(_self) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.35)");
  retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(retfings$game$Core$$ctxSingleton, 6);
  if (retfings$game$Core$TopBar$$speedButtonSingleton.start_speed_mode) {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#81C784");
  } else {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.65)");
  }
  retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, retfings$game$Core$TopBar$$speedButtonSingleton.x, retfings$game$Core$TopBar$$speedButtonSingleton.y, retfings$game$Core$TopBar$$speedButtonSingleton.w, retfings$game$Core$TopBar$$speedButtonSingleton.h, 12);
  retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$shadowColor(retfings$game$Core$$ctxSingleton, "transparent");
  retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255,255,255,0.25)");
  retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#fff");
  retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 14px Arial");
  retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
  retfings$game$Core$$CanvasRenderingContext2D$textBaseline(retfings$game$Core$$ctxSingleton, "middle");
  retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "X2", retfings$game$Core$TopBar$$speedButtonSingleton.x + retfings$game$Core$TopBar$$speedButtonSingleton.w / 2, retfings$game$Core$TopBar$$speedButtonSingleton.y + retfings$game$Core$TopBar$$speedButtonSingleton.h / 2);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$TopBarRender$$PauseButtonRender$new() {
  ({});
}
function retfings$game$Renders$TopBarRender$$PauseButtonRender$get_instance() {
  const _bind = retfings$game$Renders$TopBarRender$$pauseButtonRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$TopBarRender$$PauseButtonRender$new();
    retfings$game$Renders$TopBarRender$$pauseButtonRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$TopBarRender$$PauseButtonRender$render(self, dt) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.65)");
  retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, retfings$game$Core$TopBar$$pauseButtonSingleton.x, retfings$game$Core$TopBar$$pauseButtonSingleton.y, retfings$game$Core$TopBar$$pauseButtonSingleton.w, retfings$game$Core$TopBar$$pauseButtonSingleton.h, 10);
  retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, retfings$game$Core$TopBar$$pauseButtonSingleton.x + retfings$game$Core$TopBar$$pauseButtonSingleton.w / 2, retfings$game$Core$TopBar$$pauseButtonSingleton.y + retfings$game$Core$TopBar$$pauseButtonSingleton.h / 2);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#FFF");
  if (retfings$game$Core$TopBar$$pauseButtonSingleton.is_pause) {
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, -9, -6, 4, 12);
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 5, -6, 4, 12);
  } else {
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, -6, -8);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, 8, 0);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, -6, 8);
    retfings$game$Core$$CanvasRenderingContext2D$closePath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$TopBarRender$$MenuButtonRender$new() {
  ({});
}
function retfings$game$Renders$TopBarRender$$MenuButtonRender$get_instance() {
  const _bind = retfings$game$Renders$TopBarRender$$menuButtonRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$TopBarRender$$MenuButtonRender$new();
    retfings$game$Renders$TopBarRender$$menuButtonRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$TopBarRender$$MenuButtonRender$drawGear(self, ctx, cx, cy, r) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, cx, cy);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFC107");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 8) {
      const a = (i + 0) * 3.1415926535897931 / 4;
      const x = moonbitlang$core$math$$cos(a) * (r + 3);
      const y = moonbitlang$core$math$$sin(a) * (r + 3);
      retfings$game$Core$$CanvasRenderingContext2D$rect(ctx, x - 2, y - 2, 4, 4);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, r, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 0, 0, r * 0.35, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TopBarRender$$MenuButtonRender$render(self, timestamp) {
  retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(0,0,0,0.65)");
  const x = retfings$game$Core$TopBar$$menuButtonSingleton.x;
  const w = retfings$game$Core$TopBar$$menuButtonSingleton.w;
  const y = retfings$game$Core$TopBar$$menuButtonSingleton.y;
  const h = retfings$game$Core$TopBar$$menuButtonSingleton.h;
  retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, x, y, w, h, 10);
  retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
  retfings$game$Renders$TopBarRender$$MenuButtonRender$drawGear(self, retfings$game$Core$$ctxSingleton, x + w / 2, y + h / 2, 9);
  retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
}
function retfings$game$Renders$TopBarRender$$HDURenderer$new() {
  return { pad: 8, corner: 10, panelH: 36, shadow: true, lastTimestamp: 0 };
}
function retfings$game$Renders$TopBarRender$$HDURenderer$get_instance() {
  const _bind = retfings$game$Renders$TopBarRender$$hDURendererInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Renders$TopBarRender$$HDURenderer$new();
    retfings$game$Renders$TopBarRender$$hDURendererInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Renders$TopBarRender$$HDURenderer$drawRoundRectPath(_self, ctx, x, y, w, h, r) {
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, x + r, y);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + w - r, y);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + w, y, x + w, y + r);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + w, y + h - r);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x + w, y + h, x + w - r, y + h);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x + r, y + h);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y + h, x, y + h - r);
  retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, x, y + r);
  retfings$game$Core$$CanvasRenderingContext2D$quadraticCurveTo(ctx, x, y, x + r, y);
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
}
function retfings$game$Renders$TopBarRender$$HDURenderer$drawPanel(self, ctx, x, y, w, h) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(0,0,0,0.65)");
  retfings$game$Renders$TopBarRender$$HDURenderer$drawRoundRectPath(self, ctx, x, y, w, h, self.corner);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Renders$TopBarRender$$HDURenderer$drawRoundRectPath(self, ctx, x + 0.5, y + 0.5, w - 1, h - 1, self.corner + 0.5);
  retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TopBarRender$$HDURenderer$render(self, ctx) {
  const gold = retfings$game$Core$TopBar$$hduSingleton.gold;
  const label = `金币 ${moonbitlang$core$builtin$$Show$to_string$151$(gold)}`;
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "16px Arial");
  const textW = retfings$game$Core$$CanvasRenderingContext2D$measureTextWidth(ctx, label);
  const contentW = 26 + textW;
  const width = contentW + self.pad * 2;
  retfings$game$Renders$TopBarRender$$HDURenderer$drawPanel(self, ctx, 10, 10, width, self.panelH);
  const cx = 10 + self.pad + 9;
  const cy = 10 + self.panelH / 2;
  const g = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(ctx, cx - 3, cy - 4, 2, cx, cy, 9);
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, "#FFF59D");
  retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, "#FBC02D");
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, cx, cy, 9, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.65);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, cx - 4, cy - 5, 3.96, 2.88, -0.4, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 1);
  const tx = 10 + self.pad + 18 + 8;
  const ty = 10 + self.panelH / 2 + 6;
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFD700");
  retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "16px Arial");
  retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "left");
  retfings$game$Core$$CanvasRenderingContext2D$textBaseline(ctx, "alphabetic");
  retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, label, tx, ty);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$TopBarRender$$HDURenderer$update_effects(self, timestamp) {
  const delta = timestamp - self.lastTimestamp;
  self.lastTimestamp = timestamp;
  const alive_effects = moonbitlang$core$array$$Array$new$46$inner$44$(0);
  const _arr = retfings$game$Renders$TopBarRender$$goldGainEffects.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const effect = _arr[_i];
      effect.life = effect.life - delta;
      effect.y = effect.y - delta * 0.03;
      if (effect.life > 0) {
        moonbitlang$core$array$$Array$insert$44$(alive_effects, alive_effects.length, effect);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Renders$TopBarRender$$goldGainEffects.val = alive_effects;
}
function retfings$game$Renders$TopBarRender$$HDURenderer$render_effects(self, ctx) {
  const _arr = retfings$game$Renders$TopBarRender$$goldGainEffects.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const effect = _arr[_i];
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      const _p = 0;
      const _p$2 = 1;
      const _p$3 = effect.life / 900;
      const _p$4 = _p$2 > _p$3 ? _p$3 : _p$2;
      const a = _p > _p$4 ? _p : _p$4;
      retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, a);
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, effect.amount > 0 ? "#ffd54f" : "#ffffff");
      retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 16px Arial");
      retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "center");
      retfings$game$Core$$CanvasRenderingContext2D$textBaseline(ctx, "middle");
      retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, effect.amount > 0 ? `+${moonbitlang$core$builtin$$Show$to_string$27$(effect.amount)}` : "✓", effect.x, effect.y);
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$HPRender$$HPRender$new() {
  ({});
}
function retfings$game$Renders$HPRender$$HPRender$get_instance() {
  const _bind = retfings$game$Renders$HPRender$$hPRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$HPRender$$HPRender$new();
    retfings$game$Renders$HPRender$$hPRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$HPRender$$HPRender$render(self, dt) {
  const hp = retfings$game$Core$Sprite$HP$$hPSingleton.hp;
  const heartText = hp > 0 ? moonbitlang$core$string$$String$repeat("❤", moonbitlang$core$double$$Double$to_int(hp)) : "——";
  const map_path = retfings$game$Core$Map$$MapPath$get_instance();
  const all_paths = map_path.paths;
  const gs = retfings$game$Core$$map.gridSize;
  const _p = 18;
  const _p$2 = gs * 0.22;
  const trunkW = _p > _p$2 ? _p$2 : _p;
  const _p$3 = 34;
  const _p$4 = gs * 0.42;
  const trunkH = _p$3 > _p$4 ? _p$4 : _p$3;
  const _p$5 = 26;
  const _p$6 = gs * 0.48;
  const canopyR = _p$5 > _p$6 ? _p$6 : _p$5;
  const _len = all_paths.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const path = all_paths[_i];
      const path_points = path.points;
      if (path_points.length > 0) {
        const endPoint = moonbitlang$core$array$$Array$at$136$(path_points, path_points.length - 1 | 0);
        const cx = (endPoint.x + 0.5) * gs;
        const cy = (endPoint.y + 0.5) * gs;
        retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#8D6E63");
        retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, cx - trunkW / 2, cy - trunkH, trunkW, trunkH);
        const gLeaf = retfings$game$Core$$CanvasRenderingContext2D$createRadialGradient(retfings$game$Core$$ctxSingleton, cx - canopyR * 0.3, cy - trunkH - canopyR * 0.3, canopyR * 0.2, cx, cy - trunkH, canopyR);
        retfings$game$Core$$CanvasGradient$addColorStop$144$(gLeaf, 0, "#A5D6A7");
        retfings$game$Core$$CanvasGradient$addColorStop$144$(gLeaf, 1, "#43A047");
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(retfings$game$Core$$ctxSingleton, gLeaf);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$ellipse(retfings$game$Core$$ctxSingleton, cx, cy - trunkH - canopyR * 0.2, canopyR * 0.95, canopyR * 0.75, 0, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$ellipse(retfings$game$Core$$ctxSingleton, cx - canopyR * 0.55, cy - trunkH, canopyR * 0.78, canopyR * 0.6, 0, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$ellipse(retfings$game$Core$$ctxSingleton, cx + canopyR * 0.55, cy - trunkH, canopyR * 0.78, canopyR * 0.6, 0, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 255, 255, 0.35)");
        retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 1);
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$arc(retfings$game$Core$$ctxSingleton, cx, cy - trunkH - canopyR * 0.2, canopyR * 0.95, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#FF4D4F");
        retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, `${moonbitlang$core$builtin$$Show$to_string$151$(moonbitlang$core$double$$Double$floor(gs * 0.25))}px Arial`);
        retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
        retfings$game$Core$$CanvasRenderingContext2D$textBaseline(retfings$game$Core$$ctxSingleton, "bottom");
        retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, heartText, cx, cy - trunkH - canopyR - 6);
        retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$PagesRender$$WinPageRender$new() {
  return { star_animation_progress: 0, max_animation_progress: 0, page_open_time: 0, is_page_open: false };
}
function retfings$game$Renders$PagesRender$$WinPageRender$get_instance() {
  const _bind = retfings$game$Renders$PagesRender$$winPageRenderInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Renders$PagesRender$$WinPageRender$new();
    retfings$game$Renders$PagesRender$$winPageRenderInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Renders$PagesRender$$draw_star_path(ctx, cx, cy, star_r, r_inner, rad) {
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 10) {
      const a = rad(-90) + (i + 0) * 3.1415926535897931 / 5;
      const rr = (i % 2 | 0) === 0 ? star_r : r_inner;
      const px = cx + moonbitlang$core$math$$cos(a) * rr;
      const py = cy + moonbitlang$core$math$$sin(a) * rr;
      if (i === 0) {
        retfings$game$Core$$CanvasRenderingContext2D$moveTo(ctx, px, py);
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$lineTo(ctx, px, py);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  retfings$game$Core$$CanvasRenderingContext2D$closePath(ctx);
}
function retfings$game$Renders$PagesRender$$WinPageRender$draw_stars(self, ctx, timestamp) {
  const star_count = retfings$game$Core$Pages$$winPageSingleton.star_count;
  const canvas_width = retfings$game$Core$$map.width;
  const canvas_height = retfings$game$Core$$map.height;
  const time_since_open = (timestamp - self.page_open_time) / 1000;
  self.star_animation_progress = time_since_open;
  const star_y = canvas_height / 2 - 80;
  const start_x = (canvas_width - 220) / 2 + 30;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 3) {
      const star_x = start_x + (i + 0) * 80;
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, star_x, star_y);
      const is_lit = i < star_count;
      const _p = 0;
      const _p$2 = self.star_animation_progress - (i + 0) * 0.3;
      const animation_time = _p > _p$2 ? _p : _p$2;
      let scale;
      if (is_lit) {
        const _p$3 = 1;
        const _p$4 = animation_time * 3;
        scale = 0.8 + 0.2 * (_p$3 > _p$4 ? _p$4 : _p$3);
      } else {
        scale = 1;
      }
      let alpha;
      if (is_lit) {
        const _p$3 = 1;
        const _p$4 = animation_time * 3;
        alpha = _p$3 > _p$4 ? _p$4 : _p$3;
      } else {
        alpha = 0.5;
      }
      retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, scale, scale);
      retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, alpha);
      if (is_lit) {
        const g = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, 0, -30, 0, 30);
        retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0, "#FFF2A6");
        retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 0.55, "#FFD052");
        retfings$game$Core$$CanvasGradient$addColorStop$144$(g, 1, "#E89B2F");
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, g);
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(140,70,8,0.6)");
      } else {
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(169,169,169,0.7)");
        retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(ctx, "rgba(100,100,100,0.8)");
      }
      retfings$game$Core$$CanvasRenderingContext2D$lineWidth(ctx, 2);
      retfings$game$Renders$PagesRender$$draw_star_path(ctx, 0, 0, 30, 15, (d) => d * 3.1415926535897931 / 180);
      retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$stroke(ctx);
      if (is_lit && alpha > 0.3) {
        retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$globalAlpha(ctx, 0.55 * alpha);
        retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
        retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$ellipse(ctx, -5, -8, 10, 7, -0.26, 0, 6.2831853071795862, -1);
        retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
        retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      }
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$PagesRender$$WinPageRender$draw_confetti(self, ctx, timestamp) {
  const canvas_width = retfings$game$Core$$map.width;
  const canvas_height = retfings$game$Core$$map.height;
  const time = timestamp / 1000;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 50) {
      const x = moonbitlang$core$builtin$$Mod$mod$14$((i + 0) * 37 + time * 50, canvas_width - 10) + 5;
      const y = moonbitlang$core$builtin$$Mod$mod$14$((i + 0) * 43 + time * 100, canvas_height - 10);
      const rotation = time * 2 + (i + 0) * 0.1;
      const size = 5 + moonbitlang$core$math$$sin(time * 2 + (i + 0)) * 2;
      retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
      retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
      retfings$game$Core$$CanvasRenderingContext2D$rotate(ctx, rotation);
      const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
      const color_index = i % colors.length | 0;
      retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, moonbitlang$core$array$$Array$at$144$(colors, color_index));
      retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, -size / 2, -size / 2, size, size);
      retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function retfings$game$Renders$PagesRender$$WinPageRender$render(self, timestamp) {
  if (retfings$game$Core$Pages$$winPageSingleton.is_open && !self.is_page_open) {
    self.page_open_time = timestamp;
    self.is_page_open = true;
    self.star_animation_progress = 0;
    self.max_animation_progress = 0;
  } else {
    if (!retfings$game$Core$Pages$$winPageSingleton.is_open) {
      self.is_page_open = false;
    }
  }
  if (retfings$game$Core$Pages$$winPageSingleton.is_open) {
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    const grd = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(retfings$game$Core$$ctxSingleton, 0, 0, 0, retfings$game$Core$$map.height);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 0, "#FFD700");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 1, "#FFA500");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(retfings$game$Core$$ctxSingleton, grd);
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, retfings$game$Core$$map.width, retfings$game$Core$$map.height);
    retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 48px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 215, 0, 1)");
    retfings$game$Core$$CanvasRenderingContext2D$shadowColor(retfings$game$Core$$ctxSingleton, "rgba(0, 0, 0, 0.5)");
    retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(retfings$game$Core$$ctxSingleton, 10);
    retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "胜利!", retfings$game$Core$$map.width / 2, retfings$game$Core$$map.height / 3);
    retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(retfings$game$Core$$ctxSingleton, 0);
    retfings$game$Renders$PagesRender$$WinPageRender$draw_stars(self, retfings$game$Core$$ctxSingleton, timestamp);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 215, 0, 0.8)");
    retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$winPageSingleton.select_level_button_x, retfings$game$Core$Pages$$winPageSingleton.select_level_button_y, retfings$game$Core$Pages$$winPageSingleton.select_level_button_w, retfings$game$Core$Pages$$winPageSingleton.select_level_button_h, 10);
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(60, 179, 113, 0.8)");
    retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$winPageSingleton.next_level_button_x, retfings$game$Core$Pages$$winPageSingleton.next_level_button_y, retfings$game$Core$Pages$$winPageSingleton.next_level_button_w, retfings$game$Core$Pages$$winPageSingleton.next_level_button_h, 10);
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$winPageSingleton.select_level_button_x + retfings$game$Core$Pages$$winPageSingleton.select_level_button_w / 2, retfings$game$Core$Pages$$winPageSingleton.select_level_button_y + retfings$game$Core$Pages$$winPageSingleton.select_level_button_h / 2);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#FFF");
    retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 20px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "选择关卡", 0, 7);
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$winPageSingleton.next_level_button_x + retfings$game$Core$Pages$$winPageSingleton.next_level_button_w / 2, retfings$game$Core$Pages$$winPageSingleton.next_level_button_y + retfings$game$Core$Pages$$winPageSingleton.next_level_button_h / 2);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#FFF");
    retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 20px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "下一关", 0, 7);
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    retfings$game$Renders$PagesRender$$WinPageRender$draw_confetti(self, retfings$game$Core$$ctxSingleton, timestamp);
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PagesRender$$SelectLevelPageRender$new() {
  const level_count = retfings$game$Core$Map$$get_level_count();
  const canvas_width = retfings$game$Core$$map.width;
  const total_width = (level_count + 0) * 80 + ((level_count - 1 | 0) + 0) * 40;
  const start_x = (canvas_width - total_width) / 2;
  const button_x = moonbitlang$core$array$$Array$new$46$inner$14$(0);
  const button_y = moonbitlang$core$array$$Array$new$46$inner$14$(0);
  const animation_progress = moonbitlang$core$array$$Array$new$46$inner$14$(0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < level_count) {
      moonbitlang$core$array$$Array$push$14$(button_x, start_x + (i + 0) * 120);
      moonbitlang$core$array$$Array$push$14$(button_y, retfings$game$Core$$map.height / 2 - 40);
      moonbitlang$core$array$$Array$push$14$(animation_progress, 0);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { button_x: button_x, button_y: button_y, button_width: 80, button_height: 80, button_spacing: 40, level_count: level_count, animation_progress: animation_progress, unlock_animation_active: false, unlock_animation_timer: 0 };
}
function retfings$game$Renders$PagesRender$$SelectLevelPageRender$get_instance() {
  const _bind = retfings$game$Renders$PagesRender$$selectLevelPageRenderInstance.val;
  if (_bind === undefined) {
    const new_instance = retfings$game$Renders$PagesRender$$SelectLevelPageRender$new();
    retfings$game$Renders$PagesRender$$selectLevelPageRenderInstance.val = new_instance;
    return new_instance;
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function retfings$game$Renders$PagesRender$$draw_locked_icon(ctx, x, y, size) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x, y);
  retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, size / 100, size / 100);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(100, 100, 100, 0.8)");
  retfings$game$Core$$CanvasRenderingContext2D$fillRect(ctx, 40, 30, 20, 40);
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 50, 30, 15, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(50, 50, 50, 0.8)");
  retfings$game$Core$$CanvasRenderingContext2D$beginPath(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$arc(ctx, 50, 45, 5, 0, 6.2831853071795862, -1);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$PagesRender$$SelectLevelPageRender$draw_level_button(self, ctx, level, is_unlocked, x, y, width, height, animation_progress) {
  retfings$game$Core$$CanvasRenderingContext2D$save(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$translate(ctx, x + width / 2, y + height / 2);
  if (is_unlocked && animation_progress > 0) {
    const pulse_scale = 1 + 0.3 * moonbitlang$core$math$$sin(animation_progress * 10);
    retfings$game$Core$$CanvasRenderingContext2D$scale(ctx, pulse_scale, pulse_scale);
  }
  if (is_unlocked) {
    const grd = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(ctx, 0, -height / 2, 0, height / 2);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 0, "#4CAF50");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 1, "#45a049");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(ctx, grd);
    retfings$game$Core$$CanvasRenderingContext2D$shadowColor(ctx, "rgba(76, 175, 80, 0.6)");
    retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(ctx, 15);
  } else {
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "rgba(128, 128, 128, 0.7)");
  }
  retfings$game$Renders$UIComposeRender$$drawRoundRect(ctx, -width / 2, -height / 2, width, height, 15);
  retfings$game$Core$$CanvasRenderingContext2D$fill(ctx);
  retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(ctx, "#FFFFFF");
  retfings$game$Core$$CanvasRenderingContext2D$font(ctx, "bold 24px Arial");
  retfings$game$Core$$CanvasRenderingContext2D$textAlign(ctx, "center");
  retfings$game$Core$$CanvasRenderingContext2D$textBaseline(ctx, "middle");
  retfings$game$Core$$CanvasRenderingContext2D$fillText(ctx, `Level ${moonbitlang$core$int$$Int$to_string$46$inner(level, 10)}`, 0, 0);
  if (!is_unlocked) {
    retfings$game$Renders$PagesRender$$draw_locked_icon(ctx, 0, 0, 50);
  }
  retfings$game$Core$$CanvasRenderingContext2D$restore(ctx);
}
function retfings$game$Renders$PagesRender$$SelectLevelPageRender$render(self, timestamp) {
  if (retfings$game$Core$Pages$$selectLevelPageSingleton.is_open) {
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    const grd = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(retfings$game$Core$$ctxSingleton, 0, 0, 0, retfings$game$Core$$map.height);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 0, "#1a1a2e");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 1, "#16213e");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(retfings$game$Core$$ctxSingleton, grd);
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, retfings$game$Core$$map.width, retfings$game$Core$$map.height);
    retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 48px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 215, 0, 1)");
    retfings$game$Core$$CanvasRenderingContext2D$shadowColor(retfings$game$Core$$ctxSingleton, "rgba(0, 0, 0, 0.5)");
    retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(retfings$game$Core$$ctxSingleton, 10);
    retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "选关页面", retfings$game$Core$$map.width / 2, 100);
    retfings$game$Core$$CanvasRenderingContext2D$shadowBlur(retfings$game$Core$$ctxSingleton, 0);
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self.level_count) {
        const level_num = i + 1 | 0;
        const is_unlocked = retfings$game$Core$Pages$$SelectLevelPage$is_level_unlocked(retfings$game$Core$Pages$$selectLevelPageSingleton, level_num);
        let anim_progress = 0;
        if (is_unlocked && (self.unlock_animation_active && level_num === moonbitlang$core$array$$Array$at$27$(retfings$game$Core$Pages$$selectLevelPageSingleton.unlocked_levels, retfings$game$Core$Pages$$selectLevelPageSingleton.unlocked_levels.length - 1 | 0))) {
          anim_progress = self.unlock_animation_timer;
        }
        retfings$game$Renders$PagesRender$$SelectLevelPageRender$draw_level_button(self, retfings$game$Core$$ctxSingleton, level_num, is_unlocked, moonbitlang$core$array$$Array$at$14$(self.button_x, i), moonbitlang$core$array$$Array$at$14$(self.button_y, i), self.button_width, self.button_height, anim_progress);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PagesRender$$PagesRender$new() {
  ({});
}
function retfings$game$Renders$PagesRender$$PagesRender$get_instance() {
  const _bind = retfings$game$Renders$PagesRender$$pagesRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$PagesRender$$PagesRender$new();
    retfings$game$Renders$PagesRender$$pagesRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PagesRender$$LosePageRender$new() {
  ({});
}
function retfings$game$Renders$PagesRender$$LosePageRender$get_instance() {
  const _bind = retfings$game$Renders$PagesRender$$losePageRenderInstance.val;
  if (_bind === -1) {
    const new_instance = retfings$game$Renders$PagesRender$$LosePageRender$new();
    retfings$game$Renders$PagesRender$$losePageRenderInstance.val = new_instance;
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PagesRender$$LosePageRender$render(self, timestamp) {
  if (retfings$game$Core$Pages$$losePageSingleton.is_open) {
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    const grd = retfings$game$Core$$CanvasRenderingContext2D$createLinearGradient(retfings$game$Core$$ctxSingleton, 0, 0, 0, retfings$game$Core$$map.height);
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 0, "#330000");
    retfings$game$Core$$CanvasGradient$addColorStop$144$(grd, 1, "#660000");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$168$(retfings$game$Core$$ctxSingleton, grd);
    retfings$game$Core$$CanvasRenderingContext2D$fillRect(retfings$game$Core$$ctxSingleton, 0, 0, retfings$game$Core$$map.width, retfings$game$Core$$map.height);
    retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 48px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 0, 0, 0.8)");
    retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "失败", retfings$game$Core$$map.width / 2, retfings$game$Core$$map.height / 3);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(220, 20, 60, 0.8)");
    retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$losePageSingleton.replay_button_x, retfings$game$Core$Pages$$losePageSingleton.replay_button_y, retfings$game$Core$Pages$$losePageSingleton.replay_button_w, retfings$game$Core$Pages$$losePageSingleton.replay_button_h, 10);
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(169, 169, 169, 0.8)");
    retfings$game$Renders$UIComposeRender$$drawRoundRect(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$losePageSingleton.return_button_x, retfings$game$Core$Pages$$losePageSingleton.return_button_y, retfings$game$Core$Pages$$losePageSingleton.return_button_w, retfings$game$Core$Pages$$losePageSingleton.return_button_h, 10);
    retfings$game$Core$$CanvasRenderingContext2D$fill(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$losePageSingleton.replay_button_x + retfings$game$Core$Pages$$losePageSingleton.replay_button_w / 2, retfings$game$Core$Pages$$losePageSingleton.replay_button_y + retfings$game$Core$Pages$$losePageSingleton.replay_button_h / 2);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#FFF");
    retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 20px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "重新开始", 0, 7);
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$save(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$translate(retfings$game$Core$$ctxSingleton, retfings$game$Core$Pages$$losePageSingleton.return_button_x + retfings$game$Core$Pages$$losePageSingleton.return_button_w / 2, retfings$game$Core$Pages$$losePageSingleton.return_button_y + retfings$game$Core$Pages$$losePageSingleton.return_button_h / 2);
    retfings$game$Core$$CanvasRenderingContext2D$fillStyle$144$(retfings$game$Core$$ctxSingleton, "#FFF");
    retfings$game$Core$$CanvasRenderingContext2D$font(retfings$game$Core$$ctxSingleton, "bold 20px Arial");
    retfings$game$Core$$CanvasRenderingContext2D$textAlign(retfings$game$Core$$ctxSingleton, "center");
    retfings$game$Core$$CanvasRenderingContext2D$fillText(retfings$game$Core$$ctxSingleton, "前往选关", 0, 7);
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$strokeStyle$144$(retfings$game$Core$$ctxSingleton, "rgba(255, 0, 0, 0.3)");
    retfings$game$Core$$CanvasRenderingContext2D$lineWidth(retfings$game$Core$$ctxSingleton, 2);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, retfings$game$Core$$map.width * 0.1, retfings$game$Core$$map.height * 0.1);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, retfings$game$Core$$map.width * 0.3, retfings$game$Core$$map.height * 0.4);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, retfings$game$Core$$map.width * 0.2, retfings$game$Core$$map.height * 0.6);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$beginPath(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$moveTo(retfings$game$Core$$ctxSingleton, retfings$game$Core$$map.width * 0.8, retfings$game$Core$$map.height * 0.2);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, retfings$game$Core$$map.width * 0.7, retfings$game$Core$$map.height * 0.5);
    retfings$game$Core$$CanvasRenderingContext2D$lineTo(retfings$game$Core$$ctxSingleton, retfings$game$Core$$map.width * 0.9, retfings$game$Core$$map.height * 0.7);
    retfings$game$Core$$CanvasRenderingContext2D$stroke(retfings$game$Core$$ctxSingleton);
    retfings$game$Core$$CanvasRenderingContext2D$restore(retfings$game$Core$$ctxSingleton);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PagesRender$$PagesRender$show_lose_page(self) {
  return retfings$game$Core$Pages$$losePageSingleton.is_open;
}
function retfings$game$Renders$PagesRender$$PagesRender$show_select_level_page(self) {
  return retfings$game$Core$Pages$$selectLevelPageSingleton.is_open;
}
function retfings$game$Renders$PagesRender$$PagesRender$show_win_page(self) {
  return retfings$game$Core$Pages$$winPageSingleton.is_open;
}
function retfings$game$Renders$PagesRender$$PagesRender$render(self, dt) {
  if (retfings$game$Renders$PagesRender$$PagesRender$show_win_page(self)) {
    retfings$game$Renders$PagesRender$$WinPageRender$render(retfings$game$Renders$PagesRender$$winPageRenderSingleton, dt);
    return undefined;
  }
  if (retfings$game$Renders$PagesRender$$PagesRender$show_lose_page(self)) {
    retfings$game$Renders$PagesRender$$LosePageRender$render(retfings$game$Renders$PagesRender$$losePageRenderSingleton, dt);
    return undefined;
  }
  if (retfings$game$Renders$PagesRender$$PagesRender$show_select_level_page(self)) {
    retfings$game$Renders$PagesRender$$SelectLevelPageRender$render(retfings$game$Renders$PagesRender$$selectLevelPageRenderSingleton, dt);
    return;
  } else {
    return;
  }
}
function retfings$game$Renders$PagesRender$$PagesRender$show_page(self) {
  return retfings$game$Renders$PagesRender$$PagesRender$show_lose_page(self) || (retfings$game$Renders$PagesRender$$PagesRender$show_win_page(self) || retfings$game$Renders$PagesRender$$PagesRender$show_select_level_page(self));
}
function retfings$game$Renders$$GameRender$new() {
  ({});
}
function retfings$game$Renders$$GameRender$render(_self, dt, timestamp) {
  if (retfings$game$Renders$PagesRender$$PagesRender$show_page(retfings$game$Renders$PagesRender$$pagesRenderSingleton)) {
    retfings$game$Renders$PagesRender$$PagesRender$render(retfings$game$Renders$PagesRender$$pagesRenderSingleton, timestamp);
    return undefined;
  }
  retfings$game$Renders$MapRender$$MapRender$render(retfings$game$Renders$MapRender$$mapRenderSingleton, timestamp);
  retfings$game$Renders$MapRender$$MapTipsRender$render(retfings$game$Renders$MapRender$$mapTipsRenderSingleton, timestamp);
  retfings$game$Renders$HPRender$$HPRender$render(retfings$game$Renders$HPRender$$hPRenderSingleton, timestamp);
  retfings$game$Renders$NeutralElementRender$$NeutralElementRender$render(retfings$game$Renders$NeutralElementRender$$neutralElementRenderSingleton, timestamp);
  retfings$game$Renders$TopBarRender$$HDURenderer$render(retfings$game$Renders$TopBarRender$$hDURendererSingleton, retfings$game$Core$$ctxSingleton);
  retfings$game$Renders$TopBarRender$$HDURenderer$update_effects(retfings$game$Renders$TopBarRender$$hDURendererSingleton, timestamp);
  retfings$game$Renders$TopBarRender$$HDURenderer$render_effects(retfings$game$Renders$TopBarRender$$hDURendererSingleton, retfings$game$Core$$ctxSingleton);
  retfings$game$Renders$TopBarRender$$PauseButtonRender$render(retfings$game$Renders$TopBarRender$$pauseButtonRenderSingleton, timestamp);
  retfings$game$Renders$TopBarRender$$WaveProgressBarRender$render(retfings$game$Renders$TopBarRender$$waveProgressBarRenderSingleton);
  retfings$game$Renders$TopBarRender$$SpeedButtonRender$render(retfings$game$Renders$TopBarRender$$speedButtonRenderSingleton);
  retfings$game$Renders$TopBarRender$$MenuButtonRender$render(retfings$game$Renders$TopBarRender$$menuButtonRenderSingleton, timestamp);
  retfings$game$Renders$TowerRender$$TowerRender$render_all_tower(retfings$game$Renders$TowerRender$$towerRenderSingleton, timestamp);
  retfings$game$Renders$EnemyRender$$EnemyRender$render_all_enemy(retfings$game$Renders$EnemyRender$$enemyRenderSingleton, timestamp);
  retfings$game$Renders$TowerRender$$TowerRender$render_all_bullets(retfings$game$Renders$TowerRender$$towerRenderSingleton, timestamp);
  retfings$game$Renders$PanelsRender$$SelectTowerPanelRender$render(retfings$game$Renders$PanelsRender$$selectTowerPanelRenderSingleton, timestamp);
  retfings$game$Renders$PanelsRender$$MenuPanelRender$render(retfings$game$Renders$PanelsRender$$menuPanelRenderSingleton, timestamp);
}
(() => {
  const gameController = retfings$game$Controllers$$GameController$get_instance(retfings$game$Core$$canvasSingleton, retfings$game$Core$$ctxSingleton, retfings$game$Core$$map);
  const gameRender = retfings$game$Renders$$GameRender$new();
  const animate_ref = moonbitlang$core$ref$$Ref$new$163$((_discard_) => {
  });
  const last = moonbitlang$core$ref$$Ref$new$14$(0);
  const animate = (timestamp) => {
    const rawDt = last.val === 0 ? 16.67 : timestamp - last.val;
    last.val = timestamp;
    const speed = retfings$game$Core$TopBar$$speedButtonSingleton.time_scale;
    const paused = retfings$game$Core$TopBar$$pauseButtonSingleton.is_pause;
    const dt = paused ? 0 : rawDt * speed;
    retfings$game$Controllers$$GameController$update(gameController, dt, timestamp);
    retfings$game$Renders$$GameRender$render(gameRender, dt, timestamp);
    if (!paused) {
      const _arr = retfings$game$Renders$TowerRender$$frame_callbacks.val;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const callback = _arr[_i];
          callback(timestamp);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    retfings$game$Core$$requestAnimationFrame(retfings$game$Core$$to_frame_callback(animate_ref.val));
  };
  animate_ref.val = animate;
  retfings$game$Core$$requestAnimationFrame(retfings$game$Core$$to_frame_callback(animate));
})();
