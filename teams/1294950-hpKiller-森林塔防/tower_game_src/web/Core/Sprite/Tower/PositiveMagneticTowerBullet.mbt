///|
pub(all) struct PositiveMagneticTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
}

// PositiveMagneticTowerBullet constructor

///|
pub fn PositiveMagneticTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> PositiveMagneticTowerBullet {
  PositiveMagneticTowerBullet::{ position, damage, speed, target, alive: true }
}

///|
pub let positive_magnetic_tower_bullets : Ref[
  Array[PositiveMagneticTowerBullet],
] = Ref::new([])
