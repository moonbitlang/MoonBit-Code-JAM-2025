///|
pub(all) struct NegativeMagneticTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
}

// NegativeMagneticTowerBullet constructor

///|
pub fn NegativeMagneticTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> NegativeMagneticTowerBullet {
  NegativeMagneticTowerBullet::{ position, damage, speed, target, alive: true }
}

///|
pub let negative_magnetic_tower_bullets : Ref[
  Array[NegativeMagneticTowerBullet],
] = Ref::new([])
