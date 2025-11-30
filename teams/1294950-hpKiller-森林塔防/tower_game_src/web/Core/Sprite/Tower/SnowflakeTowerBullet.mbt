///|
pub(all) struct SnowflakeTowerBullet {
  mut position : @Point.TowerPoint
  mut damage : Double
  mut speed : Double
  mut target : &@Enemy.Enemy
  mut alive : Bool
}

// SnowflakeTowerBullet constructor

///|
pub fn SnowflakeTowerBullet::new(
  position~ : @Point.TowerPoint,
  damage~ : Double,
  speed~ : Double,
  target~ : &@Enemy.Enemy,
) -> SnowflakeTowerBullet {
  SnowflakeTowerBullet::{ position, damage, speed, target, alive: true }
}

///|
pub let snowflake_tower_tower_bullets : Ref[Array[SnowflakeTowerBullet]] = Ref::new([],
)
