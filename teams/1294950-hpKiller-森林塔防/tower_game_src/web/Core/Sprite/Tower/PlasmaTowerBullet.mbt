///|
pub(all) struct PlasmaTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
}

// PlasmaTowerBullet constructor

///|
pub fn PlasmaTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> PlasmaTowerBullet {
  PlasmaTowerBullet::{ position, damage, speed, target, alive: true }
}

///|
pub let plasma_tower_bullets : Ref[Array[PlasmaTowerBullet]] = Ref::new([])
