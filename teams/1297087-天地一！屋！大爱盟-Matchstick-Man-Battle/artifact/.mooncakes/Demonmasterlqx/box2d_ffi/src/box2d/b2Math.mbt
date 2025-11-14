// MoonBox2D's b2Math
// Create by Great-Love-League
// Contact with us if you have any questions.

pub extern "js" fn b2Math_isValid(x: Double) -> Bool =
  #| x => b2Math.b2IsValid(x)

pub extern "js" fn b2Math_dot(a: B2Vec2, b: B2Vec2) -> Double =
  #| (a, b) => b2Math.b2Dot(a, b)

pub extern "js" fn b2Math_crossVV(a: B2Vec2, b: B2Vec2) -> Double =
  #| (a, b) => b2Math.b2CrossVV(a, b)

pub extern "js" fn b2Math_crossVF(a: B2Vec2, s: Double) -> B2Vec2 =
  #| (a, s) => b2Math.b2CrossVF(a, s)

pub extern "js" fn b2Math_crossFV(s: Double, a: B2Vec2) -> B2Vec2 =
  #| (s, a) => b2Math.b2CrossFV(s, a)

pub extern "js" fn b2Math_mulMV(a: B2Mat22, v: B2Vec2) -> B2Vec2 =
  #| (a, v) => b2Math.b2MulMV(a, v)

pub extern "js" fn b2Math_mulTMV(a: B2Mat22, v: B2Vec2) -> B2Vec2 =
  #| (a, v) => b2Math.b2MulTMV(a, v)

pub extern "js" fn b2Math_addVV(a: B2Vec2, b: B2Vec2) -> B2Vec2 =
  #| (a, b) => b2Math.b2AddVV(a, b)

pub extern "js" fn b2Math_subtractVV(a: B2Vec2, b: B2Vec2) -> B2Vec2 =
  #| (a, b) => b2Math.b2SubtractVV(a, b)

pub extern "js" fn b2Math_multiplyFV(s: Double, a: B2Vec2) -> B2Vec2 =
  #| (s, a) => b2Math.b2MulFV(s, a)

pub extern "js" fn b2Math_addMM(a: B2Mat22, b: B2Mat22) -> B2Mat22 =
  #| (a, b) => b2Math.b2AddMM(a, b)

pub extern "js" fn b2Math_multiplyMM(a: B2Mat22, b: B2Mat22) -> B2Mat22 =
  #| (a, b) => b2Math.b2MulMM(a, b)

pub extern "js" fn b2Math_multiplyTMM(a: B2Mat22, b: B2Mat22) -> B2Mat22 =
  #| (a, b) => b2Math.b2MulTMM(a, b)

pub extern "js" fn b2Math_abs(a: Double) -> Double =
  #| a => b2Math.b2Abs(a)

pub extern "js" fn b2Math_absV(a: B2Vec2) -> B2Vec2 =
  #| a => b2Math.b2AbsV(a)

pub extern "js" fn b2Math_absM(a: B2Mat22) -> B2Mat22 =
  #| a => b2Math.b2AbsM(a)

pub extern "js" fn b2Math_min(a: Double, b: Double) -> Double =
  #| (a, b) => b2Math.b2Min(a, b)

pub extern "js" fn b2Math_minV(a: B2Vec2, b: B2Vec2) -> B2Vec2 =
  #| (a, b) => b2Math.b2MinV(a, b)

pub extern "js" fn b2Math_max(a: Double, b: Double) -> Double =
  #| (a, b) => b2Math.b2Max(a, b)

pub extern "js" fn b2Math_maxV(a: B2Vec2, b: B2Vec2) -> B2Vec2 =
  #| (a, b) => b2Math.b2MaxV(a, b)

pub extern "js" fn b2Math_clamp(a: Double, low: Double, high: Double) -> Double =
  #| (a, low, high) => b2Math.b2Clamp(a, low, high)

pub extern "js" fn b2Math_clampV(a: B2Vec2, low: B2Vec2, high: B2Vec2) -> B2Vec2 =
  #| (a, low, high) => b2Math.b2ClampV(a, low, high)

pub extern "js" fn b2Math_swap(a: B2Vec2, b: B2Vec2) -> Unit =
  #| (a, b) => b2Math.b2Swap(a, b)

pub extern "js" fn b2Math_random() -> Double =
  #| b2Math.b2Random()

pub extern "js" fn b2Math_randomRange(lo: Double, hi: Double) -> Double =
  #| (lo, hi) => b2Math.b2RandomRange(lo, hi)
