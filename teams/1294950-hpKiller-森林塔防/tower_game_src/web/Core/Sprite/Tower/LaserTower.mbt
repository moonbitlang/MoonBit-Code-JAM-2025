///|
pub(all) struct LaserTower {
  mut health : Double
  mut range : Double
  mut damage : Double
  attack_speed : Double
  position : @Point.TowerPoint
  mut level : Int
  cost : Double
  can_attack_fly : Bool
  towerType : TowerType
  // Visual aiming (degrees)
  mut visual_aim_deg : Double
  mut aim_target_deg : Double
  aim_turn_speed : Double
  aim_dead_zone : Double
  // Attack cooldown
  mut cd_ms : Double
  mut get_timer_ms : Double
  mut enemies : Array[&@Enemy.Enemy]
  // Economic statistics
  total_invested : Double
  id : Int
}

// LaserTower constructor

///|
pub const LASERTOWER_COST : Double = 70

///|
pub const LASERTOWER_COST_UP2 : Double = 80

///|
pub const LASERTOWER_COST_UP3 : Double = 90

///|
pub fn LaserTower::new(
  health~ : Double,
  range~ : Double,
  damage~ : Double,
  attack_speed~ : Double,
  position~ : @Point.TowerPoint,
  cost~ : Double,
  towerType~ : TowerType,
) -> LaserTower {
  let cd_ms = if attack_speed > 0.0 {
    1000.0 / attack_speed
  } else {
    // Double::positive_infinity()
    1.0 / 0.0
  }
  LaserTower::{
    health,
    range,
    damage,
    attack_speed,
    position,
    level: 1,
    cost,
    can_attack_fly: false,
    visual_aim_deg: 0.0,
    aim_target_deg: 0.0,
    aim_turn_speed: 720.0,
    aim_dead_zone: 0.5,
    cd_ms,
    get_timer_ms: 0.0,
    enemies: [],
    total_invested: cost,
    towerType,
    id: generate_tower_id(),
  }
}

// Basic status methods

///|
pub impl Tower for LaserTower with id(self) -> Int {
  self.id
}

///|
pub impl Tower for LaserTower with set_visual_aim_deg(self, deg : Double) {
  self.visual_aim_deg = deg
}

///|
pub impl Tower for LaserTower with visual_aim_deg(self) {
  self.visual_aim_deg
}

///|
pub impl Tower for LaserTower with upgrade(self) {
  if self.level >= 3 {
    return
  }
  self.level += 1
  self.damage += 5.0
  self.range += 10.0
  self.cd_ms = if self.attack_speed > 0.0 {
    1000.0 / self.attack_speed
  } else {
    1.0 / 0.0
  }
}

///|
pub impl Tower for LaserTower with health(self) {
  self.health
}

///|
pub impl Tower for LaserTower with range(self) {
  self.range
}

///|
pub impl Tower for LaserTower with damage(self) {
  self.damage
}

///|
pub impl Tower for LaserTower with attack_speed(self) {
  self.attack_speed
}

///|
pub impl Tower for LaserTower with position(self) {
  self.position
}

///|
pub impl Tower for LaserTower with level(self) {
  self.level
}

///|
pub impl Tower for LaserTower with cost(self) {
  self.cost
}

///|
pub impl Tower for LaserTower with can_attack_fly(self) {
  self.can_attack_fly
}

///|
pub impl Tower for LaserTower with towerType(self) {
  self.towerType
}

///|
pub fn LaserTower::is_alive(self : LaserTower) -> Bool {
  self.health > 0.0
}

///|
pub fn LaserTower::take_damage(self : LaserTower, damage : Double) -> Unit {
  self.health -= damage
}

///|
pub impl Tower for LaserTower with get_timer_ms(self) {
  self.get_timer_ms
}

///|
pub impl Tower for LaserTower with set_timer_ms(self, value : Double) {
  self.get_timer_ms = value
}
