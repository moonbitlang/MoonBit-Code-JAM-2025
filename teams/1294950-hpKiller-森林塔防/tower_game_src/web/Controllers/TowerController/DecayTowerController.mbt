///|
pub struct DecayTowerController {}

///|
pub fn DecayTowerController::new() -> DecayTowerController {
  DecayTowerController::{  }
}

///|
let decayTowerControllerInstance : Ref[DecayTowerController?] = Ref::new(None)

///|
pub let decayTowerControllerSingleton : DecayTowerController = DecayTowerController::get_instance()

///|
pub fn DecayTowerController::get_instance() -> DecayTowerController {
  match decayTowerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = DecayTowerController::new()
      decayTowerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn DecayTowerController::update(
  self : DecayTowerController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
  for t in @Map.map_grid_system_singleton.tower {
    match t.towerType() {
      @Tower.TowerType::DecayTower => {
        let mut attack_timer = t.get_timer_ms()
        let attack_interval = 1000.0 / t.attack_speed()
        attack_timer += dt
        while attack_timer >= attack_interval {
          for e in @Map.map_grid_system_singleton.enemy {
            let ep = e.position()
            let tp = t.position()
            let dist = @Math.dist_enemy_tower(ep, tp)
            if dist < t.range() {
              e.take_damage(t.damage())
            }
          }
          attack_timer = attack_timer - attack_interval
        }
        t.set_timer_ms(attack_timer)
      }
      _ => ()
    }
  }
}
