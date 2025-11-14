// MoonBox2D's b2Settings
// Create by Great-Love-League
// Contact with us if you have any questions.

// Basic constants
pub extern "js" fn b2Settings_USHRT_MAX() -> Int =
  #| b2Settings.USHRT_MAX

pub extern "js" fn b2Settings_b2_pi() -> Double =
  #| b2Settings.b2_pi

pub extern "js" fn b2Settings_b2_massUnitsPerKilogram() -> Double =
  #| b2Settings.b2_massUnitsPerKilogram

pub extern "js" fn b2Settings_b2_timeUnitsPerSecond() -> Double =
  #| b2Settings.b2_timeUnitsPerSecond

pub extern "js" fn b2Settings_b2_lengthUnitsPerMeter() -> Double =
  #| b2Settings.b2_lengthUnitsPerMeter

// Collision constants
pub extern "js" fn b2Settings_b2_maxManifoldPoints() -> Int =
  #| b2Settings.b2_maxManifoldPoints

pub extern "js" fn b2Settings_b2_maxShapesPerBody() -> Int =
  #| b2Settings.b2_maxShapesPerBody

pub extern "js" fn b2Settings_b2_maxPolyVertices() -> Int =
  #| b2Settings.b2_maxPolyVertices

pub extern "js" fn b2Settings_b2_maxProxies() -> Int =
  #| b2Settings.b2_maxProxies

pub extern "js" fn b2Settings_b2_maxPairs() -> Int =
  #| b2Settings.b2_maxPairs

pub extern "js" fn b2Settings_b2_linearSlop() -> Double =
  #| b2Settings.b2_linearSlop

pub extern "js" fn b2Settings_b2_angularSlop() -> Double =
  #| b2Settings.b2_angularSlop

// Dynamics constants
pub extern "js" fn b2Settings_b2_velocityThreshold() -> Double =
  #| b2Settings.b2_velocityThreshold

pub extern "js" fn b2Settings_b2_maxLinearCorrection() -> Double =
  #| b2Settings.b2_maxLinearCorrection

pub extern "js" fn b2Settings_b2_maxAngularCorrection() -> Double =
  #| b2Settings.b2_maxAngularCorrection

pub extern "js" fn b2Settings_b2_contactBaumgarte() -> Double =
  #| b2Settings.b2_contactBaumgarte

// Sleep constants
pub extern "js" fn b2Settings_b2_timeToSleep() -> Double =
  #| b2Settings.b2_timeToSleep

pub extern "js" fn b2Settings_b2_linearSleepTolerance() -> Double =
  #| b2Settings.b2_linearSleepTolerance

pub extern "js" fn b2Settings_b2_angularSleepTolerance() -> Double =
  #| b2Settings.b2_angularSleepTolerance

// setters 请在程序初始化时调用这些函数，修改默认值
// 注意：修改这些值可能会影响物理引擎的稳定性和性能，请谨慎操作

pub extern "js" fn b2Settings_set_b2_maxPolyVertices(value: Int) =
  #| (value) => { b2Settings.b2_maxPolyVertices = value; }

