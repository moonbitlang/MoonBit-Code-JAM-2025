///|
pub struct ChainTowerController {}

///|
pub fn ChainTowerController::new() -> ChainTowerController {
  ChainTowerController::{  }
}

///|
let chainTowerControllerInstance : Ref[ChainTowerController?] = Ref::new(None)

///|
pub let chainTowerControllerSingleton : ChainTowerController = ChainTowerController::get_instance()

///|
pub fn ChainTowerController::get_instance() -> ChainTowerController {
  match chainTowerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = ChainTowerController::new()
      chainTowerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ChainTowerController::update(
  self : ChainTowerController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
  for t in @Map.map_grid_system_singleton.tower {
    match t.towerType() {
      @Tower.TowerType::ChainTower => {
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
