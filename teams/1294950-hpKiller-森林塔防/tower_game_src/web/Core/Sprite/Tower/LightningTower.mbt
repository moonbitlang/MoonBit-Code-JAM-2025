///|
pub(all) struct LightningTower {
  mut health : Double
  mut range : Double
  mut damage : Double
  mut attack_speed : Double
  mut position : @Point.TowerPoint
  mut level : Int
  mut cost : Double
  mut can_attack_fly : Bool
  mut towerType : TowerType
  // Visual aiming (degrees)
  mut visual_aim_deg : Double
  mut aim_target_deg : Double
  mut aim_turn_speed : Double
  mut aim_dead_zone : Double
  // Attack cooldown
  mut cd_ms : Double
  mut get_timer_ms : Double
  // Economic statistics
  mut total_invested : Double
  id : Int
}

// LightningTower constructor

///|
pub const LIGHTNINGTOWER_COST : Double = 80

///|
pub const LIGHTNINGTOWER_COST_UP2 : Double = 100

///|
pub const LIGHTNINGTOWER_COST_UP3 : Double = 120

///|
pub fn LightningTower::new(
  health~ : Double,
  range~ : Double,
  damage~ : Double,
  attack_speed~ : Double,
  position~ : @Point.TowerPoint,
  cost~ : Double,
  towerType~ : TowerType,
) -> LightningTower {
  let cd_ms = if attack_speed > 0.0 {
    1000.0 / attack_speed
  } else {
    // Double::positive_infinity()
    1.0 / 0.0
  }
  LightningTower::{
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
    total_invested: cost,
    towerType,
    id: generate_tower_id(),
  }
}

// Basic status methods

///|
pub impl Tower for LightningTower with id(self) -> Int {
  self.id
}

///|
pub impl Tower for LightningTower with set_visual_aim_deg(self, deg : Double) {
  self.visual_aim_deg = deg
}

///|
pub impl Tower for LightningTower with visual_aim_deg(self) {
  self.visual_aim_deg
}

///|
pub impl Tower for LightningTower with upgrade(self) {
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
pub impl Tower for LightningTower with health(self) {
  self.health
}

///|
pub impl Tower for LightningTower with range(self) {
  self.range
}

///|
pub impl Tower for LightningTower with damage(self) {
  self.damage
}

///|
pub impl Tower for LightningTower with attack_speed(self) {
  self.attack_speed
}

///|
pub impl Tower for LightningTower with position(self) {
  self.position
}

///|
pub impl Tower for LightningTower with level(self) {
  self.level
}

///|
pub impl Tower for LightningTower with cost(self) {
  self.cost
}

///|
pub impl Tower for LightningTower with can_attack_fly(self) {
  self.can_attack_fly
}

///|
pub impl Tower for LightningTower with towerType(self) {
  self.towerType
}

///|
pub fn LightningTower::is_alive(self : LightningTower) -> Bool {
  self.health > 0.0
}

///|
pub fn LightningTower::take_damage(
  self : LightningTower,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl Tower for LightningTower with get_timer_ms(self) {
  self.get_timer_ms
}

///|
pub impl Tower for LightningTower with set_timer_ms(self, value : Double) {
  self.get_timer_ms = value
}
