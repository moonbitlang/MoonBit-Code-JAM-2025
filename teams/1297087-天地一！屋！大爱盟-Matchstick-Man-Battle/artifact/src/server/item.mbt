///| Item System - 物品系统
/// 管理物品创建、拾取、效果和回收

///|
/// 物品类型枚举
pub(all) enum ItemType {
  HealthPack      // 血包 - 恢复生命值
  AmmoPack        // 弹药包 - 增加弹药（预留）
  WeaponUpgrade   // 武器升级 - 提升武器性能（预留）
  SpeedBoost      // 速度提升 - 临时提升移动速度
} derive(Show)

///|
/// 物品结构体
pub(all) struct Item {
  id : Int                        // 物品唯一ID
  body : @box2d.B2Body           // Box2D物理刚体
  item_type : ItemType            // 物品类型
  value : Int                     // 物品效果值
  mut is_active : Bool           // 是否存活
  position : (Double, Double)     // 位置
  mut lifetime : Int              // 生命周期（帧数），-1表示永久
}

///|
/// 使用默认的渲染接口
/// @todo Implement rendering for Item
pub impl RenderAble for Item with get_render(self: Item){
  Some(fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {

    world |> ignore

    for shape in self.body.getShapeList() {
    // println("Drawing Item \{self.item_type}")
      match shape.getType() {
        PolygonShape => drawPolygon(p, shape.toPolygonShape())
        BoxShape => drawPolygon(p, shape.toPolygonShape())
        CircleShape => drawCircle(p, shape.toCircleShape())
        UnknownShape => {
          println("Unknown Shape")
        }
      }
    }
  })
}

///|
/// 创建物品
pub fn Game::create_item(
  self : Self,
  position : (Double, Double),
  item_type : ItemType,
  value? : Int = 20,
  lifetime? : Int = 600  // 默认600帧（约10秒）后消失
) -> Item {
  // 创建小方块作为物品
  let box_def = @box2d.b2BoxDef()
  box_def.setExtents(@box2d.b2Vec2(0.3, 0.3))
  box_def.setDensity(0.0)  // 静态物品
  box_def.setGroupIndex(-3)  // 独立碰撞组
  
  let body_def = @box2d.b2BodyDef()
  body_def.setPosition(@box2d.b2Vec2(position.0, position.1))
  body_def.addShape(box_def.getBase())
  body_def.setAllowSleep(false)
  
  let body = self.world.createBody(body_def)
  
  let item_id = self.item_list.length()
  let item = Item::{
    id: item_id,
    body,
    item_type,
    value,
    is_active: true,
    position,
    lifetime,
  }
  
  self.item_list.push(item)
  println("Created \{item_type} at (\{position.0}, \{position.1})")
  item
}

///|
/// 检查物品拾取
pub fn Game::check_item_pickup(self : Self, item : Item) -> Bool {
  for particle in self.particle_list {
    // 跳过昏迷的角色
    if particle.control.faint_state {
      continue
    }
    
    // 检查躯干或头部是否接触物品
    if self.is_contact(particle.torso, item.body) ||
       self.is_contact(particle.head, item.body) ||
       self.is_contact(particle.left_thigh, item.body) ||
       self.is_contact(particle.right_thigh, item.body) {
      self.apply_item_effect(particle, item)
      return true
    }
  }
  false
}

///|
/// 应用物品效果
pub fn Game::apply_item_effect(self : Self, particle : Particle, item : Item) -> Unit {

  self |> ignore

  match item.item_type {
    HealthPack => {
      // 恢复生命值
      let old_health = particle.control.health
      particle.control.health += item.value
      if particle.control.health > 100 {
        particle.control.health = 100
      }
      let recovered = particle.control.health - old_health
      println("玩家 \{particle.index} 拾取了血包! 恢复 \{recovered} 点生命值 (当前: \{particle.control.health}/100)")
      
      // 如果角色昏迷且血量恢复到一定程度，可以苏醒
      if particle.control.faint_state && particle.control.health >= 50 {
        particle.control.faint_state = false
        particle.control.faint_resistance = 0
        println("玩家 \{particle.index} 苏醒了!")
      }
    }
    AmmoPack => {
      // 弹药包效果（预留）
      println("玩家 \{particle.index} 拾取了弹药包! +\{item.value} 发子弹 (功能待实现)")
      // TODO: particle.control.ammo += item.value
    }
    WeaponUpgrade => {
      // 武器升级效果（预留）
      println("玩家 \{particle.index} 拾取了武器升级! (功能待实现)")
      // TODO: 提升武器伤害或射速
    }
    SpeedBoost => {
      // 速度提升效果（预留）
      println("玩家 \{particle.index} 拾取了速度提升! 持续 \{item.value} 帧 (功能待实现)")
      // TODO: particle.control.speed_boost = item.value
    }
  }
}

///|
/// 更新所有物品
fn Game::update_all_items(self : Self) -> Unit {
  for item in self.item_list {
    if item.is_active {
      // 减少生命周期
      if item.lifetime > 0 {
        item.lifetime -= 1
        if item.lifetime == 0 {
          item.is_active = false
          println("物品 \{item.item_type} 已过期消失")
          continue
        }
      }
      
      // 检查拾取
      if self.check_item_pickup(item) {
        item.is_active = false
      }
    }
  }
}

///|
/// 清理非活跃的物品
fn Game::cleanup_items(self : Self) -> Unit {
  let active_items : Array[Item] = Array::new()
  let mut cleaned_count = 0
  
  for item in self.item_list {
    if item.is_active {
      active_items.push(item)
    } else {
      // 销毁物理体
      self.world.destroyBody(item.body)
      cleaned_count += 1
    }
  }
  
  if cleaned_count > 0 {
    println("清理了 \{cleaned_count} 个物品")
  }
  
  self.item_list = active_items
}

///|
/// 获取活跃物品数量
pub fn Game::get_active_item_count(self : Self) -> Int {
  let mut count = 0
  for item in self.item_list {
    if item.is_active {
      count += 1
    }
  }
  count
}

///|
/// 生成血包（快捷方法）
pub fn Game::spawn_health_pack(self : Self, position : (Double, Double), value? : Int = 30) -> Unit {
  self.create_item(position, HealthPack, value=value, lifetime=600) |> ignore
}

///|
/// 生成弹药包（快捷方法）
pub fn Game::spawn_ammo_pack(self : Self, position : (Double, Double), value? : Int = 10) -> Unit {
  self.create_item(position, AmmoPack, value=value, lifetime=600) |> ignore
}

///|
/// 生成武器升级（快捷方法）
pub fn Game::spawn_weapon_upgrade(self : Self, position : (Double, Double)) -> Unit {
  self.create_item(position, WeaponUpgrade, value=1, lifetime=300) |> ignore
}

///|
/// 生成速度提升（快捷方法）
pub fn Game::spawn_speed_boost(self : Self, position : (Double, Double), duration? : Int = 300) -> Unit {
  self.create_item(position, SpeedBoost, value=duration, lifetime=600) |> ignore
}

///|
/// 在随机位置生成随机物品
/// 需要在 Game 结构体中添加 rng : @random.Rand 字段
pub fn Game::spawn_random_item(self : Self, rng : @random.Rand) -> Unit {
  // 随机位置 (-20 到 20 范围内)
  let x = rng.double() * 40.0 - 20.0
  let y = rng.double() * 20.0 + 5.0  // 5-25高度
  
  // 随机选择物品类型（0-3）
  let random_type = rng.int() % 4
  match random_type {
    0 => self.spawn_health_pack((x, y), value=30)
    1 => self.spawn_ammo_pack((x, y), value=10)
    2 => self.spawn_weapon_upgrade((x, y))
    _ => self.spawn_speed_boost((x, y), duration=300)
  }
}