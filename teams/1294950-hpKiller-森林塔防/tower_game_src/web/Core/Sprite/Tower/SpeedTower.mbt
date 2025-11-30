///|
pub(all) struct SpeedTower {
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

// SpeedTower constructor

///|
pub const SPEEDTOWER_COST : Double = 70

///|
pub const SPEEDTOWER_COST_UP2 : Double = 80

///|
pub const SPEEDTOWER_COST_UP3 : Double = 90

///|
pub fn SpeedTower::new(
  health~ : Double,
  range~ : Double,
  damage~ : Double,
  attack_speed~ : Double,
  position~ : @Point.TowerPoint,
  cost~ : Double,
  towerType~ : TowerType,
) -> SpeedTower {
  let cd_ms = if attack_speed > 0.0 {
    1000.0 / attack_speed
  } else {
    // Double::positive_infinity()
    1.0 / 0.0
  }
  SpeedTower::{
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
pub impl Tower for SpeedTower with id(self) -> Int {
  self.id
}

///|
pub impl Tower for SpeedTower with set_visual_aim_deg(self, deg : Double) {
  self.visual_aim_deg = deg
}

///|
pub impl Tower for SpeedTower with visual_aim_deg(self) {
  self.visual_aim_deg
}

///|
pub impl Tower for SpeedTower with upgrade(self) {
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
pub impl Tower for SpeedTower with health(self) {
  self.health
}

///|
pub impl Tower for SpeedTower with range(self) {
  self.range
}

///|
pub impl Tower for SpeedTower with damage(self) {
  self.damage
}

///|
pub impl Tower for SpeedTower with attack_speed(self) {
  self.attack_speed
}

///|
pub impl Tower for SpeedTower with position(self) {
  self.position
}

///|
pub impl Tower for SpeedTower with level(self) {
  self.level
}

///|
pub impl Tower for SpeedTower with cost(self) {
  self.cost
}

///|
pub impl Tower for SpeedTower with can_attack_fly(self) {
  self.can_attack_fly
}

///|
pub impl Tower for SpeedTower with towerType(self) {
  self.towerType
}

///|
pub fn SpeedTower::is_alive(self : SpeedTower) -> Bool {
  self.health > 0.0
}

///|
pub fn SpeedTower::take_damage(self : SpeedTower, damage : Double) -> Unit {
  self.health -= damage
}

///|
pub impl Tower for SpeedTower with get_timer_ms(self) {
  self.get_timer_ms
}

///|
pub impl Tower for SpeedTower with set_timer_ms(self, value : Double) {
  self.get_timer_ms = value
}
