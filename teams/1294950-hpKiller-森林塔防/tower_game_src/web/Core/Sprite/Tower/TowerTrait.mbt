///|
pub(open) trait Tower {
  health(Self) -> Double
  range(Self) -> Double
  damage(Self) -> Double
  attack_speed(Self) -> Double
  position(Self) -> @Point.TowerPoint
  level(Self) -> Int
  cost(Self) -> Double
  can_attack_fly(Self) -> Bool
  towerType(Self) -> TowerType
  upgrade(Self) -> Unit
  get_timer_ms(Self) -> Double
  set_timer_ms(Self, Double) -> Unit
  set_visual_aim_deg(Self, Double) -> Unit
  visual_aim_deg(Self) -> Double
  id(Self) -> Int
}

///|
let towerIdCounter : Ref[Int] = Ref::new(0)
// Function to generate the next unique enemy ID

///|
pub fn generate_tower_id() -> Int {
  let current_id = towerIdCounter.val
  towerIdCounter.val = current_id + 1
  current_id
}
