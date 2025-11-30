///|
pub struct ThunderTowerController {}

///|
pub fn ThunderTowerController::new() -> ThunderTowerController {
  ThunderTowerController::{  }
}

///|
let thunderTowerControllerInstance : Ref[ThunderTowerController?] = Ref::new(
  None,
)

///|
pub let thunderTowerControllerSingleton : ThunderTowerController = ThunderTowerController::get_instance()

///|
pub fn ThunderTowerController::get_instance() -> ThunderTowerController {
  match thunderTowerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = ThunderTowerController::new()
      thunderTowerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn ThunderTowerController::update(
  self : ThunderTowerController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
  for t in @Map.map_grid_system_singleton.tower {
    match t.towerType() {
      @Tower.TowerType::ThunderTower => {
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
