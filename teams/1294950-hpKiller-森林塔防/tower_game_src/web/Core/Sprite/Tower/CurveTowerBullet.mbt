///|
pub(all) struct CurveTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
}

// CurveTowerBullet constructor

///|
pub fn CurveTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> CurveTowerBullet {
  CurveTowerBullet::{ position, damage, speed, target, alive: true }
}

///|
pub let curve_tower_bullets : Ref[Array[CurveTowerBullet]] = Ref::new([])
