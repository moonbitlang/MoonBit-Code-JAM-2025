///|
pub struct LaserTowerController {}

///|
pub fn LaserTowerController::new() -> LaserTowerController {
  LaserTowerController::{  }
}

///|
let laserTowerControllerInstance : Ref[LaserTowerController?] = Ref::new(None)

///|
pub let laserTowerControllerSingleton : LaserTowerController = LaserTowerController::get_instance()

///|
pub fn LaserTowerController::get_instance() -> LaserTowerController {
  match laserTowerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = LaserTowerController::new()
      laserTowerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn LaserTowerController::update(
  self : LaserTowerController,
  dt : Double,
) -> Unit {
  ignore(self)
  // Update existing bullets
  for bullet in @Tower.laser_tower_bullets.val {
    if !bullet.alive {
      continue
    }

    // Update bullet position
    let move_distance = bullet.speed * dt
    bullet.position.x = bullet.position.x + bullet.direction.x * move_distance
    bullet.position.y = bullet.position.y + bullet.direction.y * move_distance
    bullet.traveled_distance = bullet.traveled_distance + move_distance

    // Check if bullet has exceeded its range
    if bullet.traveled_distance >= bullet.range {
      bullet.alive = false
      continue
    }

    // Check collision with enemies
    for e in @Map.map_grid_system_singleton.enemy {
      let ep = e.position()
      let bp = bullet.position
      let dist = @Math.dist_enemy_tower(ep, bp)
      if dist < 15.0 { // Assuming 15.0 is bullet hit radius
        e.take_damage(bullet.damage)
      }
    }

    // Check collision with neutral elements
    for ne in @Map.map_grid_system_singleton.neutralElement {
      let nep = ne.position()
      let bp = bullet.position
      let dist = @Math.dist_neutral_tower(nep, bp)
      if dist < 20.0 { // Assuming 20.0 is neutral element hit radius
        ne.take_damage(bullet.damage)
      }
    }
  }

  // Remove dead bullets
  // @Tower.laser_tower_bullets.val = @Tower.laser_tower_bullets.val.filter(b => b.alive)

  // Process tower attacks
  for t in @Map.map_grid_system_singleton.tower {
    match t.towerType() {
      @Tower.TowerType::LaserTower => {
        println(t.position().x)
        let mut attack_timer = t.get_timer_ms()
        let attack_interval = 1000.0 / t.attack_speed()
        attack_timer += dt
        while attack_timer >= attack_interval {
          // Find target and create bullet
          let tp = t.position()
          let mut target_found = false
          for e in @Map.map_grid_system_singleton.enemy {
            let ep = e.position()
            let dist = @Math.dist_enemy_tower(ep, tp)
            if dist < t.range() {
              // println("...")
              // Calculate direction vector
              let dx = ep.x - tp.x
              let dy = ep.y - tp.y
              let magnitude = (dx * dx + dy * dy).sqrt()
              let direction_x = if magnitude > 0.0 {
                dx / magnitude
              } else {
                0.0
              }
              let direction_y = if magnitude > 0.0 {
                dy / magnitude
              } else {
                0.0
              }

              // Create new bullet
              let bullet = @Tower.LaserTowerBullet::new(
                position=@Point.TowerPoint::new(x=tp.x, y=tp.y),
                damage=t.damage(),
                speed=1.0, // Bullet speed
                direction=@Point.TowerPoint::new(x=direction_x, y=direction_y),
                range=t.range() * 10, // Bullet range
              )
              @Tower.laser_tower_bullets.val.push(bullet)
              target_found = true
              break
            }
          }
          attack_timer = attack_timer - attack_interval
          if target_found {
            // @Audio.playLaserSound(0.8)
          }
        }
        t.set_timer_ms(attack_timer)
      }
      _ => ()
    }
  }
}
