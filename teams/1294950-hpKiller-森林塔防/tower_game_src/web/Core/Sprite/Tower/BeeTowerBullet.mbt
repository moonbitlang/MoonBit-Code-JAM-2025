///|
pub(all) struct BeeTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
  mut posion_ms : Double
  mut posion_damage_per_second : Double
}

// BeeTowerBullet constructor

///|
pub fn BeeTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> BeeTowerBullet {
  BeeTowerBullet::{
    position,
    damage,
    speed,
    target,
    alive: true,
    posion_ms: 5000,
    posion_damage_per_second: 20 / 1000,
  }
}

///|
pub let bee_tower_bullets : Ref[Array[BeeTowerBullet]] = Ref::new([])
