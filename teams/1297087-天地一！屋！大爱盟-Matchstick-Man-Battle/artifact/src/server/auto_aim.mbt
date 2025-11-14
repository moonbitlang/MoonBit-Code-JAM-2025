///|
/// 自动瞄准系统
/// 提供自动锁定最近目标的功能

///| 实体类型枚举
pub enum EntityType {
  Player       // 玩家实体
  Enemy        // 敌方AI实体
} derive(Eq)

///| 目标实体结构
pub struct TargetEntity {
  entity_type : EntityType
  entity_id : Int           // 在对应列表中的索引
  position : (Double, Double)
  distance : Double         // 与攻击者的距离
}

///| 自动瞄准配置
pub struct AutoAimConfig {
  mut enabled : Bool                    // 是否启用自动瞄准
  mut target_types : Array[EntityType]  // 可瞄准的实体类型
  mut max_range : Double                // 最大瞄准距离（超出此距离不瞄准）
  mut current_target : TargetEntity?    // 当前锁定的目标
}

///| 创建默认自动瞄准配置
pub fn AutoAimConfig::new(
  enabled~ : Bool = true,
  target_types~ : Array[EntityType] = [EntityType::Player, EntityType::Enemy],  // 默认瞄准玩家和敌人
  max_range~ : Double = 50.0
) -> AutoAimConfig {
  AutoAimConfig::{
    enabled,
    target_types,
    max_range,
    current_target: None
  }
}

///| 启用/禁用自动瞄准
pub fn AutoAimConfig::set_enabled(self : AutoAimConfig, enabled : Bool) -> Unit {
  self.enabled = enabled
}

///| 设置目标类型（仅瞄准玩家、仅瞄准敌人、或两者都瞄准）
pub fn AutoAimConfig::set_target_types(self : AutoAimConfig, types : Array[EntityType]) -> Unit {
  self.target_types = types
}

///| 设置最大瞄准距离
pub fn AutoAimConfig::set_max_range(self : AutoAimConfig, range : Double) -> Unit {
  self.max_range = range
}

///| 获取所有可瞄准的实体列表
pub fn Game::get_all_targetable_entities(
  self : Game, 
  attacker_id : Int,  // 攻击者ID（避免瞄准自己）
  config : AutoAimConfig
) -> Array[TargetEntity] {
  let targets = Array::new()
  
  // 获取攻击者位置
  if attacker_id >= self.particle_list.length() {
    return targets
  }
  let attacker_pos = self.particle_list[attacker_id].torso.getCenterPosition()
  let attacker_x = attacker_pos.getX()
  let attacker_y = attacker_pos.getY()
  
  // 遍历玩家实体
  if config.target_types.contains(EntityType::Player) {
    for i = 0; i < self.particle_list.length(); i = i + 1 {
      // 跳过自己
      if i == attacker_id {
        continue
      }
      
      let particle = self.particle_list[i]
      let pos = particle.torso.getCenterPosition()
      let dx = pos.getX() - attacker_x
      let dy = pos.getY() - attacker_y
      let distance = @cmath.sqrt(dx * dx + dy * dy)
      
      // 检查是否在范围内
      if distance <= config.max_range {
        targets.push(TargetEntity::{
          entity_type: EntityType::Player,
          entity_id: i,
          position: (pos.getX(), pos.getY()),
          distance
        })
      }
    }
  }
  
  // 遍历敌方AI实体
  if config.target_types.contains(EntityType::Enemy) {
    for i = 0; i < self.enemy_list.length(); i = i + 1 {
      match self.enemy_list[i] {
        Some(enemy) => {
          // 检查敌人是否存活
          if enemy.is_dead() {
            continue
          }
          
          // 获取敌人位置
          match enemy.get_position() {
            Some(pos) => {
              let dx = pos.0 - attacker_x
              let dy = pos.1 - attacker_y
              let distance = @cmath.sqrt(dx * dx + dy * dy)
              
              // 检查是否在范围内
              if distance <= config.max_range {
                targets.push(TargetEntity::{
                  entity_type: EntityType::Enemy,
                  entity_id: i,
                  position: pos,
                  distance
                })
              }
            }
            None => continue
          }
        }
        None => continue
      }
    }
  }
  
  return targets
}

///| 查找最近的目标
pub fn Game::find_nearest_target(
  self : Game,
  attacker_id : Int,
  config : AutoAimConfig
) -> TargetEntity? {
  let targets = self.get_all_targetable_entities(attacker_id, config)
  
  if targets.length() == 0 {
    return None
  }
  
  // 找出距离最小的目标
  let mut nearest : TargetEntity? = None
  let mut min_distance = config.max_range + 1.0
  
  for target in targets {
    if target.distance < min_distance {
      min_distance = target.distance
      nearest = Some(target)
    }
  }
  
  return nearest
}

///| 更新自动瞄准目标（每帧调用以保持目标更新）
pub fn Game::update_auto_aim_target(
  self : Game,
  attacker_id : Int,
  config : AutoAimConfig
) -> Unit {
  if not(config.enabled) {
    config.current_target = None
    return
  }
  
  config.current_target = self.find_nearest_target(attacker_id, config)
}

///| 获取自动瞄准的射击角度
/// 返回 None 表示没有有效目标，返回 Some(angle) 表示应该朝该角度射击
pub fn Game::get_auto_aim_angle(
  self : Game,
  attacker_id : Int,
  config : AutoAimConfig
) -> Double? {
  if not(config.enabled) {
    return None
  }
  
  match config.current_target {
    Some(target) => {
      // 获取攻击者位置
      if attacker_id >= self.particle_list.length() {
        return None
      }
      
      let attacker_pos = self.particle_list[attacker_id].torso.getCenterPosition()
      let dx = target.position.0 - attacker_pos.getX()
      let dy = target.position.1 - attacker_pos.getY()
      
      // 计算角度
      let angle = @cmath.atan2(dy, dx)


      return Some(angle)
    }
    None => None
  }
}

///| 便捷方法：为玩家设置仅瞄准敌人
pub fn AutoAimConfig::target_enemies_only(self : AutoAimConfig) -> Unit {
  self.target_types = [EntityType::Enemy]
}

///| 便捷方法：为玩家设置仅瞄准其他玩家
pub fn AutoAimConfig::target_players_only(self : AutoAimConfig) -> Unit {
  self.target_types = [EntityType::Player]
}

///| 便捷方法：为玩家设置瞄准所有实体
pub fn AutoAimConfig::target_all(self : AutoAimConfig) -> Unit {
  self.target_types = [EntityType::Player, EntityType::Enemy]
}
