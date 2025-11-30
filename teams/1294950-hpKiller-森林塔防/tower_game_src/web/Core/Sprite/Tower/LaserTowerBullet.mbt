///|
pub(all) struct LaserTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut direction : @Point.TowerPoint
  mut alive : Bool
  mut range : Double
  mut traveled_distance : Double
}

// LaserTowerBullet constructor

///|
pub fn LaserTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  direction~ : @Point.TowerPoint,
  range? : Double = 1000.0,
) -> LaserTowerBullet {
  LaserTowerBullet::{
    position,
    damage,
    speed,
    direction,
    alive: true,
    range,
    traveled_distance: 0.0,
  }
}

///|
pub let laser_tower_bullets : Ref[Array[LaserTowerBullet]] = Ref::new([])
