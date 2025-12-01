///|
pub(all) struct LightningTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
}

// LightningTowerBullet constructor

///|
pub fn LightningTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> LightningTowerBullet {
  LightningTowerBullet::{ position, damage, speed, target, alive: true }
}

///|
pub let lightning_tower_bullets : Ref[Array[LightningTowerBullet]] = Ref::new([])
