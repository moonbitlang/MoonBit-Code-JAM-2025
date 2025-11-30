///|
/// Restricts a value to be within a specified range.
///
/// Parameters:
///
/// * `value` : The value to be clamped.
/// * `min` : The minimum allowed value.
/// * `max` : The maximum allowed value.
///
/// Returns the clamped value. If `value` is less than `min`, returns `min`. If
/// `value` is greater than `max`, returns `max`. Otherwise, returns `value`
/// unchanged.
///
/// Example:
///
/// ```moonbit
/// inspect(@retfings/game/Core/Math.clamp(5.0, 0.0, 10.0), content="5.0")
/// inspect(@retfings/game/Core/Math.clamp(-2.0, 0.0, 10.0), content="0.0")
/// inspect(@retfings/game/Core/Math.clamp(15.0, 0.0, 10.0), content="10.0")
/// ```
///
pub fn clamp(value : Double, min : Double, max : Double) -> Double {
  if value < min {
    min
  } else if value > max {
    max
  } else {
    value
  }
}

///|
/// Converts degrees to radians.
///
/// Parameters:
///
/// * `degrees` : The angle in degrees to be converted.
///
/// Returns the equivalent angle in radians.
///
/// Example:
///
/// ```moonbit
/// inspect(@retfings/game/Core/Math.deg2rad(180.0), content="3.141592653589793")
/// inspect(@retfings/game/Core/Math.deg2rad(90.0), content="1.5707963267948966")
/// inspect(@retfings/game/Core/Math.deg2rad(0.0), content="0.0")
/// ```
///
pub fn deg2rad(degrees : Double) -> Double {
  degrees * @math.PI / 180.0
}

///|
/// Calculates the Euclidean distance between two points.
///
/// Parameters:
///
/// * `p1` : The first point.
/// * `p2` : The second point.
///
/// Returns the distance between the two points as a floating-point number.
///
/// Example:
///
/// ```moonbit
/// let point1 = @Point.BasePoint::{ x: 0.0, y: 0.0 }
/// let point2 = @Point.BasePoint::{ x: 3.0, y: 4.0 }
/// inspect(@retfings/game/Core/Math.dist_tow_point(point1, point2), content="5.0")
/// ```
///
pub fn dist_tow_point(p1 : @Point.BasePoint, p2 : @Point.BasePoint) -> Double {
  @math.hypot((p1.x - p2.x).abs(), (p1.y - p2.y).abs())
}

///|
pub fn dist_tow_tower_point(
  p1 : @Point.TowerPoint,
  p2 : @Point.TowerPoint,
) -> Double {
  @math.hypot((p1.x - p2.x).abs(), (p1.y - p2.y).abs())
}

///|
pub fn dist_enemy_tower(
  ep : @Point.EnemyPoint,
  tp : @Point.TowerPoint,
) -> Double {
  @math.hypot((ep.x - tp.x).abs(), (ep.y - tp.y).abs())
}

///|
pub fn dist_neutral_tower(
  ep : @Point.NeutralElementPoint,
  tp : @Point.TowerPoint,
) -> Double {
  @math.hypot((ep.x - tp.x).abs(), (ep.y - tp.y).abs())
}

///|
/// Converts radians to degrees.
///
/// Parameters:
///
/// * `rad` : The angle in radians to be converted.
///
/// Returns the equivalent angle in degrees.
///
/// Example:
///
/// ```moonbit
/// inspect(@retfings/game/Core/Math.rad2deg(@math.PI), content="180.0")
/// inspect(@retfings/game/Core/Math.rad2deg(@math.PI / 2.0), content="90.0")
/// inspect(@retfings/game/Core/Math.rad2deg(0.0), content="0.0")
/// ```
///
pub fn rad2deg(rad : Double) -> Double {
  rad * (180 / @math.PI)
}

///|
/// Calculates the angle in degrees between two points.
///
/// Parameters:
///
/// * `p1` : The first point.
/// * `p2` : The second point.
///
/// Returns the angle in degrees between the two points.
///
/// Example:
///
/// ```moonbit
/// let point1 = @Point.BasePoint::{ x: 0.0, y: 0.0 }
/// let point2 = @Point.BasePoint::{ x: 1.0, y: 1.0 }
/// inspect(@retfings/game/Core/Math.deg_tow_point(point1, point2), content="-135.0")
/// ```
///
pub fn deg_tow_point(p1 : @Point.BasePoint, p2 : @Point.BasePoint) -> Double {
  rad2deg(@math.atan2(p1.y - p2.y, p1.x - p2.x))
}

///|
pub fn tower_enemy_deg(
  p1 : @Point.EnemyPoint,
  p2 : @Point.TowerPoint,
) -> Double {
  rad2deg(@math.atan2(p1.y - p2.y, p1.x - p2.x))
}
