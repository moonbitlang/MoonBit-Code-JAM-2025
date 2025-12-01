///|
pub struct LightningTowerController {}

///|
pub fn LightningTowerController::new() -> LightningTowerController {
  LightningTowerController::{  }
}

///|
let lightningTowerControllerInstance : Ref[LightningTowerController?] = Ref::new(
  None,
)

///|
pub let lightningTowerControllerSingleton : LightningTowerController = LightningTowerController::get_instance()

///|
pub fn LightningTowerController::get_instance() -> LightningTowerController {
  match lightningTowerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = LightningTowerController::new()
      lightningTowerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn LightningTowerController::update(
  self : LightningTowerController,
  dt : Double,
) -> Unit {
  // 更新现有子弹
  let alive_bullets = []
  for bullet in @Tower.lightning_tower_bullets.val {
    self.update_buttle(dt, bullet)
    if bullet.alive {
      alive_bullets.push(bullet)
    }
  }
  @Tower.lightning_tower_bullets.val = alive_bullets

  // 为LightningTower创建新子弹
  for t in @Map.map_grid_system_singleton.tower {
    match t.towerType() {
      @Tower.TowerType::LightningTower => {
        // 使用LightningTower的timer_ms字段来跟踪攻击
        let mut attack_timer = t.get_timer_ms()
        let attack_interval = 1000.0 / t.attack_speed()

        // 模拟攻击计时器
        attack_timer += dt
        while attack_timer >= attack_interval {
          // 寻找最近的敌人作为目标
          let mut target : &@Enemy.Enemy? = None
          let mut min_distance = 1.0 / 0.0
          for e in @Map.map_grid_system_singleton.enemy {
            if divide_effects_pause_update(e) {
              continue
            }
            let ep = e.position()
            let tp = t.position()
            let dist = @Math.dist_enemy_tower(ep, tp)
            if dist < t.range() && dist < min_distance {
              target = Some(e)
              min_distance = dist
            }
          }

          // 如果找到目标，创建新子弹
          match target {
            Some(enemy) => {
              let bullet = @Tower.LightningTowerBullet::new(
                position=@Point.TowerPoint::new(
                  x=t.position().x,
                  y=t.position().y,
                ),
                damage=t.damage(),
                speed=200.0, // 子弹速度
                target=enemy,
              )
              @Tower.lightning_tower_bullets.val.push(bullet)
            }
            None => ()
          }
          attack_timer = attack_timer - attack_interval
        }

        // 更新塔的计时器
        t.set_timer_ms(attack_timer)
      }
      _ => ()
    }
  }
}

///|
fn LightningTowerController::update_buttle(
  self : LightningTowerController,
  dt : Double,
  bullet : @Tower.LightningTowerBullet,
) -> Unit {
  ignore(self)
  // Update bullet position towards target
  // This is a simplified implementation - in a real game, you would calculate
  // the direction to the target and move the bullet accordingly
  if !bullet.alive {
    return
  }

  // Check if target is still alive
  if !bullet.target.is_alive() {
    bullet.alive = false
    return
  }

  // Move bullet towards target
  let target_pos = bullet.target.position()
  let dx = target_pos.x - bullet.position.x
  let dy = target_pos.y - bullet.position.y
  let distance = (dx * dx + dy * dy).sqrt()

  // If bullet is close enough to target, hit it
  if distance < 5.0 {
    bullet.target.take_damage(bullet.damage)
    bullet.alive = false
    return
  }

  // Normalize direction and move bullet
  if distance > 0 {
    let dir_x = dx / distance
    let dir_y = dy / distance
    bullet.position.x += dir_x * bullet.speed * dt / 1000.0
    bullet.position.y += dir_y * bullet.speed * dt / 1000.0
  }
}
