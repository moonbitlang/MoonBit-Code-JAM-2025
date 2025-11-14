///| Bullet System - 子弹系统
/// 管理子弹创建、更新、碰撞检测和销毁
/// 支持受击对象列表，精确控制哪些实体会受到伤害

///|
/// 受击目标类型枚举
pub enum TargetType {
  Player      // 玩家角色
  Enemy       // 敌人
  AllCharacters  // 所有角色（玩家+敌人）
} derive(Show, Eq)

///|
/// 子弹结构体
pub struct Bullet {
  id : Int                        // 子弹唯一ID
  owner_id : Int                  // 发射者ID（避免自伤）
  body : @box2d.B2Body           // Box2D物理刚体
  damage : Int                    // 基础伤害值
  max_distance : Double           // 最大射程
  mut traveled_distance : Double  // 已飞行距离
  start_position : (Double, Double) // 起始位置
  mut is_active : Bool           // 是否激活
  target_types : Array[TargetType] // 受击目标列表
  hit_targets : Array[Int]       // 已命中的目标ID（防止穿透时重复伤害）
  mut penetration : Int           // 剩余穿透次数（0表示不穿透）
  gravity_compensation : Double   // 重力补偿系数（0.0-1.0，0为完全下坠，1为完全无下坠）
  img: ImageLoader               // 子弹图片资源
}

///| 使用默认的渲染接口
/// @ltl
pub impl RenderAble for Bullet with get_render(self: Bullet){
  Some(fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
    let ws = fn(len: Double) -> Double {
      world_to_screen_size(len)
    }

    world |> ignore
    
    // 使用通用的 drawBody 函数
    // 子弹使用速度方向作为角度，大小为原来圆形的10倍

    // let size = ws(0.16) * 10.0
    // drawBody(p, self.body, self.img, size)
    let pos = self.body.getCenterPosition()
    let (sx, sy) = world_to_screen(pos.getX(), pos.getY())
    
    // 尝试使用图片渲染子弹
    // match bullet_image.val {
    //   Some(img) => {
    //     // 计算子弹的旋转角度（根据速度方向）
    //     let vel = self.body.getLinearVelocity()
    //     let angle = @cmath.atan2(vel.getY(), vel.getX())
        
    //     // 使用图片渲染，大小原来圆形的10倍
    //     let size = ws(0.16) * 10.0
    //     draw_image_at(p, img, sx, sy, size, size, angle)
    //   }
    //   None => {
    //     // 图片未加载，使用默认圆形
        let r = ws(0.16)
        p.fillColorPara(255.0, Some(0.0), Some(0.0), Some(255.0))
        p.circle(sx, sy, r)
        p.noFill()
      // }
    // }
  })
}

///|
/// 创建子弹
/// 
/// @param position 子弹起始位置 (x, y)
/// @param velocity 子弹速度向量 (vx, vy)
/// @param owner_id 发射者ID，用于避免自伤
/// @param damage 基础伤害值，默认10
/// @param max_distance 最大射程，默认50.0
/// @param target_types 受击目标列表，默认[Player]，即只伤害其他玩家
/// @param penetration 穿透次数，默认0（不穿透）
/// @param gravity_compensation 重力补偿系数，默认0.95（95%补偿，轻微下坠）
/// @param collision_group 碰撞组索引，默认根据owner_id自动计算
/// @return 创建的子弹对象
pub fn Game::create_bullet(
  self : Self,
  position : (Double, Double),
  velocity : (Double, Double),
  owner_id : Int,
  damage? : Int = 10,
  max_distance? : Double = 50.0,
  target_types? : Array[TargetType] = [Player],
  penetration? : Int = 0,
  gravity_compensation? : Double = 0.95,
  collision_group? : Int? = None,
  path~: String? = None
) -> Bullet {
  // 自动计算碰撞组：与发射者使用相同的碰撞组
  // 这样子弹不会与发射者及其武器发生物理碰撞
  let actual_collision_group = match collision_group {
    Some(group) => group
    None => -(owner_id + 1000)  // 与玩家i的碰撞组相同
  }
  
  // 创建圆形子弹物理体（优化为真实弹道效果）
  let circle_def = @box2d.b2CircleDef()
  circle_def.setRadius(0.08)     // 更小的子弹半径（8cm）
  circle_def.setDensity(8.0)     // 高密度（金属子弹）
  circle_def.setFriction(0.0)    // 无摩擦（空气阻力忽略不计）
  circle_def.setRestitution(0.3) // 低弹性（不弹跳）
  circle_def.setGroupIndex(actual_collision_group)   // 使用与发射者相同的碰撞组
  circle_def.setLocalPosition(@box2d.b2Vec2(0.0, 0.0))
  
  let body_def = @box2d.b2BodyDef()
  body_def.setPosition(@box2d.b2Vec2(position.0, position.1))
  body_def.addShape(circle_def.getBase())
  body_def.setAllowSleep(false)
  body_def.setLinearDamping(0.0) // 无线性阻尼（保持速度）
  
  let body = self.world.createBody(body_def)
  body.setLinearVelocity(@box2d.b2Vec2(velocity.0, velocity.1))
  
  // 通过持续施加向上的力来抵消大部分重力（在 update_bullet 中实现）
  
  let bullet_id = self.bullet_list.length()
  let bullet = Bullet::{
    id: bullet_id,
    owner_id,
    body,
    damage,
    max_distance,
    traveled_distance: 0.0,
    start_position: position,
    is_active: true,
    target_types,
    hit_targets: Array::new(),
    penetration,
    gravity_compensation,
    img: ImageLoader::new(path)
  }
  
  self.bullet_list.push(bullet)
  println("创建子弹 #\{bullet_id}: 位置(\{position.0}, \{position.1}), 伤害\{damage}, 目标\{target_types}")
  bullet
}

pub fn Game::update_bullet(self : Self, bullet : Bullet) -> Unit {
  if not(bullet.is_active) {
    return
  }
  
  let current_pos = bullet.body.getCenterPosition()
  let dx = current_pos.getX() - bullet.start_position.0
  let dy = current_pos.getY() - bullet.start_position.1
  bullet.traveled_distance = @cmath.sqrt(dx * dx + dy * dy)
  
  // 根据子弹的重力补偿系数抵消重力
  // gravity_compensation = 0.0: 完全下坠（普通抛物线）
  // gravity_compensation = 0.95: 轻微下坠（普通枪械）
  // gravity_compensation = 1.0: 完全无下坠（激光武器）
  let mass = bullet.body.getMass()
  let anti_gravity_force = @box2d.b2Vec2(0.0, mass * 9.8 * bullet.gravity_compensation)
  bullet.body.applyForce(anti_gravity_force, current_pos)
  
  if bullet.traveled_distance >= bullet.max_distance {
    bullet.is_active = false
    return
  }
  
  let x = current_pos.getX()
  let y = current_pos.getY()
  let half_width = Width / PPM / 2.0
  let half_height = Height / PPM / 2.0
  
  if x < -half_width || x > half_width || y < 0.0 || y > half_height * 2.0 {
    bullet.is_active = false
    return
  }
  
  // 高频碰撞检测：每帧检测多次以防止快速子弹穿透
  // 对于高速子弹（60-100 m/s），每帧移动约1-1.67米
  // 多次检测可以捕获与薄墙壁的碰撞
  self.check_bullet_collision(bullet)
}

///|
/// 检测子弹与角色的碰撞
/// 根据受击对象列表过滤目标
pub fn Game::check_bullet_collision(self : Self, bullet : Bullet) -> Unit {
  // 检查玩家角色（如果目标包含Player或AllCharacters）
  let mut should_hit_players = false
  for target_type in bullet.target_types {
    if target_type == Player || target_type == AllCharacters {
      should_hit_players = true
      break
    }
  }
  
  if should_hit_players {
    for particle in self.particle_list {
      // 跳过发射者
      if particle.index == bullet.owner_id {
        continue
      }
      
      // 跳过已经命中的目标（穿透时）
      let mut already_hit = false
      for hit_id in bullet.hit_targets {
        if hit_id == particle.index {
          already_hit = true
          break
        }
      }
      if already_hit {
        continue
      }
      
      // 跳过昏迷的角色
      if particle.control.faint_state {
        continue
      }
      
      let mut hit = false
      let mut damage = 0
      
      // 根据命中部位计算伤害倍率
      if self.is_contact(particle.head, bullet.body) {
        damage = bullet.damage * 2  // 头部 2.0x
        hit = true
      } else if self.is_contact(particle.torso, bullet.body) {
        damage = bullet.damage  // 躯干 1.0x
        hit = true
      } else if self.is_contact(particle.left_thigh, bullet.body) ||
                self.is_contact(particle.right_thigh, bullet.body) {
        damage = bullet.damage / 2  // 大腿 0.5x
        hit = true
      } else if self.is_contact(particle.left_shank, bullet.body) ||
                self.is_contact(particle.right_shank, bullet.body) {
        damage = bullet.damage / 3  // 小腿 0.33x
        hit = true
      } else if self.is_contact(particle.left_arm, bullet.body) ||
                self.is_contact(particle.right_arm, bullet.body) {
        damage = bullet.damage / 2  // 大臂 0.5x
        hit = true
      } else if self.is_contact(particle.left_forearm, bullet.body) ||
                self.is_contact(particle.right_forearm, bullet.body) {
        damage = bullet.damage / 3  // 前臂 0.33x
        hit = true
      }
      // 注册溅血特效：在子弹速度反方向上生成血雾
      // 获取子弹当前速度（世界坐标系）并取反作为血雾喷射方向
      
      
      if hit {
        // 播放子弹击中音效
        self.audio.play_sound(BulletHit)
        
				
				let vel = bullet.body.getLinearVelocity()
				let bvx = vel.getX()*0.1
				let bvy = vel.getY()*0.1
				let hit_pos = bullet.body.getCenterPosition()
				let norm = @cmath.sqrt(bvx * bvx + bvy * bvy)
				let norm_vec = @box2d.b2Vec2(bvx / norm, bvy / norm)
				let hx = world_to_screen(hit_pos.getX() + norm_vec.getX(), hit_pos.getY() + norm_vec.getY()).0
				let hy = world_to_screen(hit_pos.getX() + norm_vec.getX(), hit_pos.getY() + norm_vec.getY()).1
				// 如果速度为 (0,0)，使用一个默认的向上方向，避免完全静止的向量
				if bvx == 0.0 && bvy == 0.0 {
					register_blood_spray_animation(self, hx, hy, 0.0, -1.0)
				} else {
					register_blood_spray_animation(self, hx, hy, -bvx, -bvy)
				}
				
				
        // 应用伤害
        particle.control.health -= damage
        println("子弹 #\{bullet.id} 击中玩家 \{particle.index}, 伤害 \{damage} (剩余血量: \{particle.control.health})")
        
        if particle.control.health <= 0 {
          particle.control.faint_state = true
          // 播放玩家死亡音效
          self.audio.play_sound(PlayerDeath)
          println("玩家 \{particle.index} 被击倒!")
        }
        
        // 记录已命中目标
        bullet.hit_targets.push(particle.index)
        
        // 检查穿透：只有人物可以被穿透
        if bullet.penetration <= 0 {
          // 穿透次数用完，回收子弹
          bullet.is_active = false
          println("子弹 #\{bullet.id} 穿透次数用完，回收子弹")
          break
        } else {
          bullet.penetration -= 1
          println("子弹 #\{bullet.id} 穿透! 剩余穿透次数: \{bullet.penetration}")
          // 如果穿透次数刚好用完（减到0），在下一次命中时会被回收
        }
      }
    }
  }
  
  // TODO: 检查敌人（如果目标包含Enemy或AllCharacters）
  // let mut should_hit_enemies = false
  // for target_type in bullet.target_types {
  //   if target_type == Enemy || target_type == AllCharacters {
  //     should_hit_enemies = true
  //     break
  //   }
  // }
  // if should_hit_enemies {
  //   for enemy in self.enemy_list {
  //     // 类似玩家的碰撞检测逻辑
  //   }
  // }
  
  // 检查与环境的碰撞（平台、墙壁等静态物体）
  // 环境无法穿透，子弹击中环境后直接回收
  if bullet.is_active {
    self.check_bullet_environment_collision(bullet)
  }
}

///|
/// 检测子弹与环境（静态物体）的碰撞
/// 环境包括平台、墙壁等，子弹无法穿透环境，击中后直接回收
pub fn Game::check_bullet_environment_collision(self : Self, bullet : Bullet) -> Unit {
  // 检查与所有平台的碰撞
  for platform in self.platform_list {
    if self.is_contact(platform.get_body(), bullet.body, strict=true) {
      bullet.is_active = false
      println("子弹 #\{bullet.id} 击中环境（平台），回收子弹")
      return
    }
  }

  // 检查与自定义障碍物的碰撞
  for barrier in self.custom_barrier {
    if self.is_contact(barrier, bullet.body, strict=true) {
      bullet.is_active = false
      println("子弹 #\{bullet.id} 击中环境（自定义障碍物），回收子弹")
      return
    }
  }
  
  // 检查与世界中其他静态物体的碰撞
  // 通过 Box2D 的接触列表检测
  let contact_list = self.world.getContactList()
  for contact in contact_list {
    let shape1 = contact.getShape1()
    let shape2 = contact.getShape2()
    let body1 = shape1.getBody()
    let body2 = shape2.getBody()
    
    // 检查是否有一个是子弹，另一个是静态物体
    let bullet_body = bullet.body
    if equals(body1, bullet_body) || equals(body2, bullet_body) {
      let other_body = if equals(body1, bullet_body) { body2 } else { body1 }
      
      // 如果另一个物体是静态的（密度为0），则子弹应该被回收
      if other_body.getMass() == 0.0 {
        // 需要确认不是角色的某个部位（角色部位也可能是质量为0的传感器）
        let mut is_character_part = false
        
        // 检查是否是角色的某个部位
        for particle in self.particle_list {
          if equals(other_body, particle.head) ||
             equals(other_body, particle.torso) ||
             equals(other_body, particle.left_thigh) ||
             equals(other_body, particle.right_thigh) ||
             equals(other_body, particle.left_shank) ||
             equals(other_body, particle.right_shank) ||
             equals(other_body, particle.left_arm) ||
             equals(other_body, particle.right_arm) ||
             equals(other_body, particle.left_forearm) ||
             equals(other_body, particle.right_forearm) {
            is_character_part = true
            break
          }
        }
        
        // 如果不是角色部位，则是环境物体，回收子弹
        if not(is_character_part) {
          bullet.is_active = false
          println("子弹 #\{bullet.id} 击中环境（静态物体），回收子弹")
          return
        }
      }
    }
  }
}

pub fn Game::update_all_bullets(self : Self) -> Unit {
  for bullet in self.bullet_list {
    if bullet.is_active {
      self.update_bullet(bullet)
    }
  }
  
  // 额外的高频碰撞检测：在物理更新后再检测几次
  // 这样可以捕获快速移动子弹与薄墙壁的碰撞
  // 不重复施加力，只检测碰撞
  for bullet in self.bullet_list {
    if bullet.is_active {
      // 只检测碰撞，不更新物理状态
      self.check_bullet_collision(bullet)
    }
  }
}

pub fn Game::cleanup_bullets(self : Self) -> Unit {
  let active_bullets : Array[Bullet] = Array::new()
  
  for bullet in self.bullet_list {
    if bullet.is_active {
      active_bullets.push(bullet)
    } else {
      self.world.destroyBody(bullet.body)
    }
  }
  
  self.bullet_list = active_bullets
}

///|
/// 从玩家位置射击子弹（通用方法，支持自定义参数）
/// 
/// @param player_index 玩家索引
/// @param direction 射击方向（-1.0 左，1.0 右）
/// @param speed 子弹速度
/// @param damage 伤害值
/// @param max_distance 最大射程
/// @param penetration 穿透次数
/// @param gravity_compensation 重力补偿系数（0.0-1.0）
/// @param recoil_horizontal 水平后坐力
/// @param recoil_vertical 垂直后坐力
pub fn Game::shoot_bullet_advanced(
  self : Self, 
  player_index : Int, 
  direction : Double,
  speed? : Double = 60.0,
  damage? : Int = 10,
  max_distance? : Double = 100.0,
  penetration? : Int = 0,
  gravity_compensation? : Double = 0.95,
  recoil_horizontal? : Double = 1.5,
  recoil_vertical? : Double = 0.3,
) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
  
  let particle = self.particle_list[player_index]
  
  // 从右前臂位置发射
  let hand_pos = particle.right_forearm.getCenterPosition()
  
  // 枪口限位：确保子弹初始位置在持有者范围外，避免打到自己
  let muzzle_offset = 0.8
  let spawn_x = hand_pos.getX() + direction * muzzle_offset
  let spawn_y = hand_pos.getY()
  let position = (spawn_x, spawn_y)
  
  // 计算速度
  let velocity = (direction * speed, 0.0)
  
  // 创建子弹（自动使用与发射者相同的碰撞组，避免与发射者发生物理碰撞）
  self.create_bullet(
    position, 
    velocity, 
    player_index, 
    damage=damage, 
    max_distance=max_distance,
    target_types=[Player],
    penetration=penetration,
    gravity_compensation=gravity_compensation
  ) |> ignore
  
  // 后坐力：施加反向冲量
  let recoil_impulse = @box2d.b2Vec2(-direction * recoil_horizontal, recoil_vertical)
  let torso_pos = particle.torso.getCenterPosition()
  particle.torso.applyImpulse(recoil_impulse, torso_pos)
}

///|
/// 从玩家位置射击子弹（快捷方法 - 手枪配置）
/// 
/// @param player_index 玩家索引
/// @param direction 射击方向（-1.0 左，1.0 右）
pub fn Game::shoot_bullet(self : Self, player_index : Int, direction : Double) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
  
  let particle = self.particle_list[player_index]
  
  // 从右前臂位置发射
  let hand_pos = particle.right_forearm.getCenterPosition()
  
  // 枪口限位：确保子弹初始位置在持有者范围外，避免打到自己
  // 角色宽度约1米，在射击方向上偏移0.8米作为安全距离
  let muzzle_offset = 0.8
  let spawn_x = hand_pos.getX() + direction * muzzle_offset
  let spawn_y = hand_pos.getY()
  let position = (spawn_x, spawn_y)
  
  // 计算速度（真实枪械速度：手枪约250-400 m/s，这里缩小为60）
  let speed = 60.0
  let velocity = (direction * speed, 0.0)
  
  // 创建普通子弹：伤害10，射程100，只打其他玩家
  self.create_bullet(
    position, 
    velocity, 
    player_index, 
    damage=10, 
    max_distance=100.0,
    target_types=[Player],
    penetration=0
  ) |> ignore
  
  // 后坐力：施加反向冲量（牛顿第三定律）
  // 子弹质量约0.01kg，速度60m/s，动量 = 0.6 kg·m/s
  // 角色质量较大，后坐力相应减小
  let recoil_impulse = @box2d.b2Vec2(-direction * 1.5, 0.3)  // 反向+轻微向上
  let torso_pos = particle.torso.getCenterPosition()
  particle.torso.applyImpulse(recoil_impulse, torso_pos)
  
  println("玩家 \{player_index} 发射了普通子弹")
}

///|
/// 基于角度射击子弹（支持鼠标控制）
/// 
/// @param player_index 玩家索引
/// @param angle 射击角度（弧度，0为正右方，逆时针为正）
/// @param speed 子弹速度
/// @param damage 伤害值
/// @param max_distance 最大射程
/// @param penetration 穿透次数
/// @param gravity_compensation 重力补偿系数
/// @param recoil_horizontal 水平后坐力（沿射击方向的反向）
/// @param recoil_vertical 垂直后坐力（向上的额外抬升）
pub fn Game::shoot_bullet_at_angle(
  self : Self, 
  player_index : Int, 
  angle : Double,
  speed? : Double = 60.0,
  damage? : Int = 10,
  max_distance? : Double = 100.0,
  penetration? : Int = 0,
  gravity_compensation? : Double = 0.95,
  recoil_horizontal? : Double = 3.0,
  recoil_vertical? : Double = 0.3,
) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
	
	
  
  let particle = self.particle_list[player_index]
  let hand_pos = particle.right_forearm.getCenterPosition()
  
  // 根据角度计算枪口位置
  let muzzle_offset = 0.8
  let spawn_x = hand_pos.getX() + @cmath.cos(angle) * muzzle_offset
  let spawn_y = hand_pos.getY() + @cmath.sin(angle) * muzzle_offset
  let position = (spawn_x, spawn_y)
  
  // 根据角度计算速度向量
  let vx = @cmath.cos(angle) * speed
  let vy = @cmath.sin(angle) * speed
  let velocity = (vx, vy)
  
  // 创建子弹
  self.create_bullet(
    position, 
    velocity, 
    player_index, 
    damage=damage,
    max_distance=max_distance,
    target_types=[Player],
    penetration=penetration,
    gravity_compensation=gravity_compensation
  ) |> ignore
  
  // 后坐力：完整的向量计算
  // 水平分量：沿射击方向的反向
  // 垂直分量：射击方向的反向 + 额外的向上抬升
  let recoil_impulse = @box2d.b2Vec2(
    -@cmath.cos(angle) * recoil_horizontal,
    -@cmath.sin(angle) * recoil_horizontal + recoil_vertical
  )
  let torso_pos = particle.torso.getCenterPosition()
  particle.torso.applyImpulse(recoil_impulse, torso_pos)
}

///|
/// 创建穿透子弹（高级用法，支持自定义参数）
/// 
/// @param player_index 玩家索引
/// @param direction 射击方向
/// @param penetration_count 穿透次数
/// @param speed 子弹速度
/// @param damage 伤害值
/// @param max_distance 最大射程
/// @param gravity_compensation 重力补偿系数
/// @param recoil_horizontal 水平后坐力
/// @param recoil_vertical 垂直后坐力
pub fn Game::shoot_penetrating_bullet_advanced(
  self : Self, 
  player_index : Int, 
  direction : Double,
  penetration_count : Int,
  speed? : Double = 80.0,
  damage? : Int = 15,
  max_distance? : Double = 120.0,
  gravity_compensation? : Double = 0.98,
  recoil_horizontal? : Double = 3.0,
  recoil_vertical? : Double = 0.5,
) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
  
  let particle = self.particle_list[player_index]
  let hand_pos = particle.right_forearm.getCenterPosition()
  
  // 枪口限位
  let muzzle_offset = 0.8
  let spawn_x = hand_pos.getX() + direction * muzzle_offset
  let spawn_y = hand_pos.getY()
  let position = (spawn_x, spawn_y)
  
  let velocity = (direction * speed, 0.0)
  
  self.create_bullet(
    position, 
    velocity, 
    player_index, 
    damage=damage,
    max_distance=max_distance,
    target_types=[Player],
    penetration=penetration_count,
    gravity_compensation=gravity_compensation
  ) |> ignore
  
  // 后坐力
  let recoil_impulse = @box2d.b2Vec2(-direction * recoil_horizontal, recoil_vertical)
  let torso_pos = particle.torso.getCenterPosition()
  particle.torso.applyImpulse(recoil_impulse, torso_pos)
  
  println("玩家 \{player_index} 发射了穿透子弹 (穿透\{penetration_count}次)")
}

///|
/// 创建穿透子弹（高级用法 - 简化版）
/// 
/// @param player_index 玩家索引
/// @param direction 射击方向
/// @param penetration_count 穿透次数
pub fn Game::shoot_penetrating_bullet(
  self : Self, 
  player_index : Int, 
  direction : Double,
  penetration_count : Int
) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
  
  let particle = self.particle_list[player_index]
  let hand_pos = particle.right_forearm.getCenterPosition()
  
  // 枪口限位：确保子弹初始位置在持有者范围外
  let muzzle_offset = 0.8
  let spawn_x = hand_pos.getX() + direction * muzzle_offset
  let spawn_y = hand_pos.getY()
  let position = (spawn_x, spawn_y)
  
  let speed = 80.0  // 穿透弹速度更快（狙击步枪约800-900 m/s）
  let velocity = (direction * speed, 0.0)
  
  self.create_bullet(
    position, 
    velocity, 
    player_index, 
    damage=15,  // 穿透弹伤害更高
    max_distance=120.0,  // 更远射程
    target_types=[Player],
    penetration=penetration_count
  ) |> ignore
  
  // 后坐力：狙击枪后坐力更强
  // 速度更快(80 vs 60)，后坐力按比例增加
  let recoil_impulse = @box2d.b2Vec2(-direction * 3.0, 0.5)  // 更强的反向冲量
  let torso_pos = particle.torso.getCenterPosition()
  particle.torso.applyImpulse(recoil_impulse, torso_pos)
  
  println("玩家 \{player_index} 发射了穿透子弹 (穿透\{penetration_count}次)")
}

///|
/// 创建散弹（多发子弹，支持自定义参数）
/// 
/// @param player_index 玩家索引
/// @param direction 主要射击方向
/// @param bullet_count 子弹数量
/// @param spread_angle 散射角度（弧度）
/// @param gravity_compensation 重力补偿系数
/// @param recoil_horizontal 水平后坐力（每发）
/// @param recoil_vertical 垂直后坐力
pub fn Game::shoot_shotgun(
  self : Self,
  player_index : Int,
  direction : Double,
  bullet_count : Int,
  spread_angle : Double,
  gravity_compensation? : Double = 0.85,
  recoil_horizontal? : Double = 0.8,
  recoil_vertical? : Double = 0.6,
) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
  
  let particle = self.particle_list[player_index]
  let hand_pos = particle.right_forearm.getCenterPosition()
  
  // 枪口限位：确保子弹初始位置在持有者范围外
  let muzzle_offset = 0.8
  let spawn_x = hand_pos.getX() + direction * muzzle_offset
  let spawn_y = hand_pos.getY()
  let position = (spawn_x, spawn_y)
  
  let base_speed = 50.0  // 霰弹枪速度提升（约350-400 m/s）
  
  // 生成多发子弹
  for i in 0..<bullet_count {
    // 计算散射角度
    let angle_offset = if bullet_count == 1 {
      0.0
    } else {
      spread_angle * (i.to_double() / (bullet_count - 1).to_double() - 0.5)
    }
    
    // 计算速度向量
    let vx = direction * base_speed * @cmath.cos(angle_offset)
    let vy = base_speed * @cmath.sin(angle_offset)
    let velocity = (vx, vy)
    
    self.create_bullet(
      position,
      velocity,
      player_index,
      damage=40,  // 散弹单发伤害较低
      max_distance=30.0,  // 射程增加
      target_types=[Player],
      penetration=0,
      gravity_compensation=gravity_compensation
    ) |> ignore
  }
  
  // 后坐力：霰弹枪后坐力最大（多发子弹同时发射）
  // 后坐力按子弹数量累积
  let recoil_magnitude = bullet_count.to_double() * recoil_horizontal
  let recoil_impulse = @box2d.b2Vec2(-direction * recoil_magnitude, recoil_vertical)
  let torso_pos = particle.torso.getCenterPosition()
  particle.torso.applyImpulse(recoil_impulse, torso_pos)
  
  println("玩家 \{player_index} 发射了散弹 (\{bullet_count}发)")
}

///|
/// 创建针对敌人的子弹
/// 
/// @param player_index 玩家索引
/// @param direction 射击方向
pub fn Game::shoot_at_enemies(self : Self, player_index : Int, direction : Double) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
  
  let particle = self.particle_list[player_index]
  let hand_pos = particle.right_forearm.getCenterPosition()
  let position = (hand_pos.getX(), hand_pos.getY())
  
  let speed = 20.0
  let velocity = (direction * speed, 0.0)
  
  // 创建只打敌人的子弹
  self.create_bullet(
    position,
    velocity,
    player_index,
    damage=15,
    max_distance=50.0,
    target_types=[Enemy],  // 只打敌人
    penetration=0
  ) |> ignore
  
  println("玩家 \{player_index} 发射了反敌子弹")
}

///|
/// 创建全伤害子弹（玩家+敌人都受伤）
/// 
/// @param player_index 玩家索引
/// @param direction 射击方向
pub fn Game::shoot_explosive_bullet(self : Self, player_index : Int, direction : Double) -> Unit {
  if player_index >= self.particle_list.length() {
    return
  }
  
  let particle = self.particle_list[player_index]
  let hand_pos = particle.right_forearm.getCenterPosition()
  let position = (hand_pos.getX(), hand_pos.getY())
  
  let speed = 15.0  // 爆炸弹速度较慢
  let velocity = (direction * speed, 0.0)
  
  // 创建伤害所有角色的子弹
  self.create_bullet(
    position,
    velocity,
    player_index,
    damage=25,  // 高伤害
    max_distance=40.0,
    target_types=[AllCharacters],  // 伤害所有人
    penetration=0
  ) |> ignore
  
  println("玩家 \{player_index} 发射了爆炸弹 (危险！伤害所有人)")
}