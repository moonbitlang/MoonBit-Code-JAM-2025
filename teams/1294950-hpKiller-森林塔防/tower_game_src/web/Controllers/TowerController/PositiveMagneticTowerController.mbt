///|
pub(all) struct PositiveMagneticTowerController {}

///|
pub fn PositiveMagneticTowerController::new() -> PositiveMagneticTowerController {
  PositiveMagneticTowerController::{  }
}

///|
let positiveMagneticTowerControllerInstance : Ref[
  PositiveMagneticTowerController?,
] = Ref::new(None)

///|
pub let positiveMagneticTowerControllerSingleton : PositiveMagneticTowerController = PositiveMagneticTowerController::get_instance()

///|
pub fn PositiveMagneticTowerController::get_instance() -> PositiveMagneticTowerController {
  match positiveMagneticTowerControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = PositiveMagneticTowerController::new()
      positiveMagneticTowerControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn PositiveMagneticTowerController::update(
  self : PositiveMagneticTowerController,
  dt : Double,
) -> Unit {
  // 更新现有子弹

  let alive_bullets = []
  for bullet in @Tower.positive_magnetic_tower_bullets.val {
    self.update_buttle(dt, bullet)
    if bullet.alive {
      alive_bullets.push(bullet)
    }
  }
  @Tower.positive_magnetic_tower_bullets.val = alive_bullets
  update_ma(dt)
  update_ma_attack()
  self.update_bullet_attack(dt)
}

///|
fn PositiveMagneticTowerController::update_buttle(
  self : PositiveMagneticTowerController,
  dt : Double,
  bullet : @Tower.PositiveMagneticTowerBullet,
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

///|
fn PositiveMagneticTowerController::update_bullet_attack(
  self : PositiveMagneticTowerController,
  dt : Double,
) -> Unit {
  ignore(self)
  for t in @Map.map_grid_system_singleton.tower {
    match t.towerType() {
      @Tower.TowerType::PositiveMagneticTower => {
        // 使用PositiveMagneticTower的timer_ms字段来跟踪攻击
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
              let bullet = @Tower.PositiveMagneticTowerBullet::new(
                position=@Point.TowerPoint::new(
                  x=t.position().x,
                  y=t.position().y,
                ),
                damage=t.damage(),
                speed=200.0, // 子弹速度
                target=enemy,
              )
              @Tower.positive_magnetic_tower_bullets.val.push(bullet)
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
fn update_ma(dt : Double) -> Unit {

  // 更新磁场数据
  let magnetic_data = @Tower.positive_magnetic_field_datas.val
  // let mut min_distance = @Tower.positive_magnetic_min_distance
  let towers = @Map.map_grid_system_singleton.tower
  let positive_towers = towers.filter(t => t.towerType()
    is @Tower.PositiveMagneticTower)
  let negative_towers = towers.filter(t => t.towerType()
    is @Tower.NegativeMagneticTower)

  // remove tower effect
  let remove_filter : Array[@Tower.PositiveMagneticFieldData] = []
  // 寻找最近的NegativeMagneticTower
  for pt in positive_towers {
    for nt in negative_towers {
      let dist = @Math.dist_tow_tower_point(pt.position(), nt.position())
      // println(dist)
      if dist <= @Tower.positive_magnetic_min_distance {
        for ma in magnetic_data {
          // 存在记录，更新时间
          if ma.positive_tower_id == pt.id() &&
            ma.negative_tower_id == nt.id() &&
            ma.has_magnetic_pair {
            ma.magnetic_field_timer += dt
            // 3000s 激活特效
            if ma.magnetic_field_timer > 3000 && !ma.magnetic_field_active {
              ma.magnetic_field_active = true
            }
            // 3000s 取消激活特效动画
            if ma.magnetic_field_timer > 3000 && ma.magnetic_ray_active {
              ma.magnetic_ray_active = false
            }
          }
        }
        // 不存在记录 ，添加记录
        match
          @Tower.positive_magnetic_field_datas.val.search_by(v => v.positive_tower_id ==
            pt.id()) {
          Some(_) => ()
          None(_) =>
            // 不存在记录 ，添加记录
            magnetic_data.insert(0, {
              magnetic_field_active: false,
              magnetic_field_timer: 0.0,
              has_magnetic_pair: true,
              magnetic_ray_active: true,
              positive_tower_id: pt.id(),
              negative_tower_id: nt.id(),
              positive_tower_x: pt.position().x,
              positive_tower_y: pt.position().y,
              negative_tower_x: nt.position().x,
              negative_tower_y: nt.position().y,
            })
        }
      }
      for ma in @Tower.positive_magnetic_field_datas.val {
        if pt.id() == ma.positive_tower_id && nt.id() == ma.negative_tower_id {
          remove_filter.append([ma])
        }
      }
    }
    // test controller logic
    // for
    //   match_tp in @Tower.positive_magnetic_field_datas.val.filter(p => p.positive_tower_id ==
    //     pt.id()) {
    // println(match_tp.positive_tower_id)
    // println(match_tp.magnetic_ray_active)
    // println(match_tp.magnetic_field_active)
    // println(match_tp.negative_tower_x)
    // println(match_tp.negative_tower_y)
    // }
  }
  @Tower.positive_magnetic_field_datas.val = remove_filter
}

///|
fn update_ma_attack() -> Unit {
  for ma in @Tower.positive_magnetic_field_datas.val {
    if ma.magnetic_field_active {
      for e in @Map.map_grid_system_singleton.enemy {
        let ex = e.position().x
        let ey = e.position().y
        let mut max_x = -1.0
        let mut max_y = -1.0
        let mut min_x = -1.0
        let mut min_y = -1.0
        // 水平
        if ma.positive_tower_y == ma.negative_tower_y {
          max_x = @cmp.maximum(ma.positive_tower_x, ma.negative_tower_x)
          max_y = @cmp.maximum(ma.positive_tower_y, ma.negative_tower_y) +
            @Tower.positive_magnetic_width / 2
          min_x = @cmp.minimum(ma.positive_tower_x, ma.negative_tower_x)
          min_y = @cmp.minimum(ma.positive_tower_y, ma.negative_tower_y) -
            @Tower.positive_magnetic_width / 2
        }
        // 竖直
        if ma.positive_tower_x == ma.negative_tower_x {
          max_x = @cmp.maximum(ma.positive_tower_x, ma.negative_tower_x) +
            @Tower.positive_magnetic_width / 2
          max_y = @cmp.maximum(ma.positive_tower_y, ma.negative_tower_y)
          min_x = @cmp.minimum(ma.positive_tower_x, ma.negative_tower_x) -
            @Tower.positive_magnetic_width / 2
          min_y = @cmp.minimum(ma.positive_tower_y, ma.negative_tower_y)
        }
        // let max_x = @cmp.maximum(ma.positive_tower_x, ma.negative_tower_x)
        // let max_y = @cmp.maximum(ma.positive_tower_y, ma.negative_tower_y) +
        //   @Tower.positive_magnetic_width / 2
        // let min_x = @cmp.minimum(ma.positive_tower_x, ma.negative_tower_x)
        // let min_y = @cmp.maximum(ma.positive_tower_y, ma.negative_tower_y) -
        //   @Tower.positive_magnetic_width / 2
        // println(min_x)
        // println("ex \{ex}")
        // println(max_x)
        // println("--")
        // println(min_y)
        // println("ey \{ey}")
        // println(max_y)
        // X2 damage not work ! TODO

        let e_pading = @Core.map.gridSize * 0.7
        if min_x <= ex + e_pading &&
          ex - e_pading <= max_x &&
          min_y <= ey + e_pading &&
          ey - e_pading <= max_y {
          e.take_damage(0.05)
        }
        // if min_y <= ey && ey <= max_y && ex == max_x && ex == min_x {
        //   e.take_damage(2)
        // }
      }
    }
  }
}
