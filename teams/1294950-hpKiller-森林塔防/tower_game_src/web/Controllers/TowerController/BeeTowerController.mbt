///|
// 子弹速度系数，用于将攻击速度转换为实际移动速度
const BULLET_SPEED_MULTIPLIER : Double = 50.0

///|
pub struct BeeTowerController {}

///|
pub fn BeeTowerController::new() -> BeeTowerController {
  BeeTowerController::{  }
}

///|
let beeTowerControllerInstance : Ref[BeeTowerController?] = Ref::new(None)

///|
pub let beeTowerControllerSingleton : BeeTowerController = BeeTowerController::get_instance()

///|
pub fn BeeTowerController::get_instance() -> BeeTowerController {
  match beeTowerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = BeeTowerController::new()
      beeTowerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn BeeTowerController::update(
  self : BeeTowerController,
  dt : Double,
) -> Unit {
  ignore(self)
  let alive_bullets = []
  for bullet in @Tower.bee_tower_bullets.val {
    self.update_buttle(dt, bullet)
    if bullet.alive {
      alive_bullets.push(bullet)
    }
  }
  @Tower.bee_tower_bullets.val = alive_bullets

  // 为ChargeJarTower创建新子弹
  for t in @Map.map_grid_system_singleton.tower {
    match t.towerType() {
      @Tower.TowerType::BeeTower => {
        // 使用ChargeJarTower的timer_ms字段来跟踪攻击
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
              // target.unwrap()

              min_distance = dist
            }
          }

          // 如果找到目标，创建新子弹
          match target {
            Some(enemy) => {
              let bullet = @Tower.BeeTowerBullet::new(
                position=@Point.TowerPoint::new(
                  x=t.position().x,
                  y=t.position().y,
                ),
                damage=t.damage(),
                speed=t.attack_speed() * BULLET_SPEED_MULTIPLIER, // 子弹速度与攻击速度一致，通过系数调整到合适的游戏表现
                target=enemy,
              )
              @Tower.bee_tower_bullets.val.push(bullet)
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
fn BeeTowerController::update_buttle(
  self : BeeTowerController,
  dt : Double,
  bullet : @Tower.BeeTowerBullet,
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
    // Apply poison effect to the target
    bullet.target.apply_poison(2, bullet.posion_ms)
    // Mark that this bullet has applied poison effect
    // bullet.usePosionEffect = true
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
