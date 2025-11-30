///|
pub(all) struct ChargeJarTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
}

// ChargeJarTowerBullet constructor

///|
pub fn ChargeJarTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> ChargeJarTowerBullet {
  ChargeJarTowerBullet::{ position, damage, speed, target, alive: true }
}

///|
pub let charge_jar_tower_bullets : Ref[Array[ChargeJarTowerBullet]] = Ref::new([])
