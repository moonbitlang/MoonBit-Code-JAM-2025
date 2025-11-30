///|
pub struct TowerController {}

///|
pub fn TowerController::new() -> TowerController {
  TowerController::{  }
}

///|
let towerControllerInstance : Ref[TowerController?] = Ref::new(None)

///|
pub let towerControllerSingleton : TowerController = TowerController::get_instance()

///|
pub fn TowerController::get_instance() -> TowerController {
  match towerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = TowerController::new()
      towerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn TowerController::update(_self : TowerController, dt : Double) -> Unit {
  beeTowerControllerSingleton.update(dt)
  chargeJarTowerControllerSingleton.update(dt)
  curveTowerControllerSingleton.update(dt)
  lightningTowerControllerSingleton.update(dt)
  negativeMagneticTowerControllerSingleton.update(dt)
  plasmaTowerControllerSingleton.update(dt)
  positiveMagneticTowerControllerSingleton.update(dt)
  laserTowerControllerSingleton.update(dt)
}

///|
pub fn divide_effects_pause_update(e : &@Enemy.Enemy) -> Bool {
  if e.enemy_type() is @Enemy.VirusEnemy {
    for va in @Enemy.divide_effects.val {
      if !va.finished && (e.id() == va.enemy_id1 || e.id() == va.enemy_id2) {
        return true
      }
    }
  }
  false
}
