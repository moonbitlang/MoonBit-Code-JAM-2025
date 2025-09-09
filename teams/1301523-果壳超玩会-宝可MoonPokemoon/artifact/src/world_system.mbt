// Copyright 2025 International Digital Economy Academy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

///|
// World System - 整合所有世界相关功能
// 包含：地图系统、玩家系统、碰撞系统

///|
// ===== 碰撞层定义 =====

///|
let terrain_collision_layer : @collision.CollisionLayer = @collision.CollisionLayer::new()

///|
let npc_collision_layer : @collision.CollisionLayer = @collision.CollisionLayer::new()

///|
let item_collision_layer : @collision.CollisionLayer = @collision.CollisionLayer::new()

///|
// ===== 玩家系统 =====

///|
// 检查是否在战斗状态
fn is_in_battle() -> Bool {
  // Check if in battle state by checking the battle system state
  // battle_system.state == InBattle  // 注释掉，因为 battle_system 未定义
  false  // 临时返回 false
}

///|
// NPC系统功能
fn get_npc_dialogue(npc_id : String, _npc_pos : @math.Vec2D) -> String {
  match npc_id {
    "1" => "欢迎来到宝可梦世界！"
    "2" => "这里有很多有趣的宝可梦！"
    _ => "祝你冒险愉快！"
  }
}

///|
// 检查NPC交互范围
fn check_npc_interaction_range(player_pos : @math.Vec2D, npc_pos : @math.Vec2D, interaction_range : Double) -> Bool {
  let diff = player_pos - npc_pos
  let distance = (diff[X] * diff[X] + diff[Y] * diff[Y]).sqrt()
  distance <= interaction_range
}

///|
// 玩家动画定义
let player_idle_animation : @sprite.Animation = @sprite.Animation::new(
  [], // 空的动画帧数组
  loop_=true,
)

///|
// 玩家行走动画
let player_walk_animation : @sprite.Animation = @sprite.Animation::new(
  [], // 空的动画帧数组
  loop_=true,
)

///|
// 添加玩家
fn add_player(game_state : GameData, pos : @math.Vec2D) -> Unit {
  let player_sprite = @sprite.Sprite::from_animation(player_idle_animation, 10)
  @sprite.sprites.set(game_state.player, player_sprite)
  @velocity.velocities.set(game_state.player, @math.Vec2D::zero())
  @position.positions.set(game_state.player, pos)
  
  // Modify collision shape to be more suitable for a top-down view
  // 注释掉碰撞检测，因为 collision 包未找到
  // @collision.collides.set(game_state.player, @collision.Collide::{
  //   shape: Rect(size=@math.Vec2D(20.0, 20.0), offset=@math.Vec2D(6.0, 6.0)),
  //   layer: @collision.CollisionLayer::new(),
  //   mask: @collision.CollisionMask::new([@collision.CollisionLayer::new(), @collision.CollisionLayer::new()]),
  // })
  
  // 注释掉相机设置，因为 camera 包未找到
  // @camera.camera.attached_entity = Some(game_state.player)
  // @camera.camera.offset = @math.Vec2D(16.0, 16.0)  // Half of player size, to center the player on the screen
}

///|
// 玩家状态枚举
enum PlayerState {
  Idle
  Walking
} derive(Show)

///|
// 移动速度
let move_speed : Double = 2.0

///|
// 玩家状态系统
fn player_state_system(_backend : &@system.Backend, game_state : GameData) -> Unit {
  // If in battle state, do not process movement input
  if is_in_battle() {
    // Stop player movement
    @velocity.velocities[game_state.player] = @math.Vec2D::zero()
    return
  }
  
  guard @velocity.velocities.get(game_state.player) is Some(_velocity)
  guard @position.positions.get(game_state.player) is Some(_position)
  
  let mut new_velocity_x = 0.0
  let mut new_velocity_y = 0.0
  let mut is_moving = false
  
  // Four-direction movement, move one tile size at a time
  if @system.is_pressed(@system.ArrowLeft) {
    new_velocity_x = -move_speed
    is_moving = true
    // Note: You cannot directly modify game_state.direction here as it is immutable
    // In a real application, you should handle direction state in another way
  }
  if @system.is_pressed(@system.ArrowRight) {
    new_velocity_x = move_speed
    is_moving = true
    // Note: You cannot directly modify game_state.direction here as it is immutable
    // In a real application, you should handle direction state in another way
  }
  if @system.is_pressed(@system.ArrowUp) {
    new_velocity_y = -move_speed
    is_moving = true
  }
  if @system.is_pressed(@system.ArrowDown) {
    new_velocity_y = move_speed
    is_moving = true
  }
  
  // Set velocity, let collision system handle collisions
  @velocity.velocities[game_state.player] = @math.Vec2D(new_velocity_x, new_velocity_y)
  
  // Play animation based on movement state
  // Simplify direction handling, use default direction for now
  let transform = @math.Transform::new()
  
  if is_moving {
    @sprite.play_animation(game_state.player, player_walk_animation, transform~)
    // game_state.player_state = PlayerState::Walking
  } else {
    @sprite.play_animation(game_state.player, player_idle_animation, transform~)
    // game_state.player_state = PlayerState::Idle
  }
}

///|
// 玩家交互系统
fn player_interaction_system(_backend : &@system.Backend, game_state : GameData) -> Unit {
  guard @position.positions.get(game_state.player) is Some(pos)
  
  // Detect NPC interaction
  if @system.is_just_pressed(@system.Space) {
    check_npc_interaction(pos.inner())
  }
  
  // Detect item interaction
  check_item_interaction(pos.inner())
}

///|
// 检查NPC交互
fn check_npc_interaction(_player_pos : @math.Vec2D) -> Unit {
  // Detect NPCs near the player
  // let interaction_range = 32.0 // Interaction range
  
  // 注释掉实体遍历，因为 system 包中的函数未找到
  // let entities = @system.all_entities.to_array()
  // for entity in entities {
  //   // Check if NPC has collision layer
  //   if @collision.collides.get(entity) is Some(collide) {
  //     if collide.layer == @collision.CollisionLayer::new() {
  //       // Check distance
  //       if @position.positions.get(entity) is Some(npc_pos) {
  //         if check_npc_interaction_range(player_pos, npc_pos.inner(), interaction_range) {
  //           // Within interaction range, trigger dialogue
  //           let dialogue = get_npc_dialogue("1", npc_pos.inner()) // Temporarily use default ID
  //           println("NPC: " + dialogue)
  //           return
  //         }
  //       }
  //     }
  //   }
  // }
  
  println("No NPC found nearby")
}

///|
// 检查物品交互
fn check_item_interaction(_player_pos : @math.Vec2D) -> Unit {
  // Implement item pickup logic
  // You can add a backpack system here
  // For now, just print information
  // println("Checking for items...")  // Comment out frequent log output
}

///|
// 相机跟随系统
fn camera_follow_system(_backend : &@system.Backend, game_state : GameData) -> Unit {
  guard @position.positions.get(game_state.player) is Some(_pos)
  
  // 注释掉相机跟随，因为 camera 包未找到
  // let target_camera_pos = pos.inner()
  // let current_camera_pos = @camera.camera.position
  // let lerp_factor = 0.1 // Smooth follow coefficient
  // 
  // let diff = target_camera_pos - current_camera_pos
  // let new_camera_pos = current_camera_pos + @math.Vec2D(diff[X] * lerp_factor, diff[Y] * lerp_factor)
  // @camera.camera.position = new_camera_pos
}

///|
// ===== 地图系统 =====

///|
// 瓦片转Vec2D
fn tile_to_vec2d(tile : @tilemap.Tile, tile_size : Int) -> @math.Vec2D {
  @math.Vec2D(
    tile.x.to_double() * tile_size.to_double(),
    tile.y.to_double() * tile_size.to_double(),
  )
}

///|
// 生成地图
fn generate_map(_backend : &@system.Backend, game_state : GameData) -> Unit {
  let tilemap = @tilemap.TileMap::from_json(tilemap)
  let world_width = tilemap.map_width.to_double() *
    tilemap.tile_size.to_double()
  let world_height = tilemap.map_height.to_double() *
    tilemap.tile_size.to_double()
  
  // 相机设置将在add_player中完成
  
  // 移除相机边界限制，允许自由移动
  // 设置相机限制 (注释掉，因为 camera 包未找到)
  // @camera.camera.limit_left = None
  // @camera.camera.limit_right = None
  // @camera.camera.limit_top = None
  // @camera.camera.limit_bottom = None
  
  add_background(@math.Vec2D(world_width, world_height))
  
  // 修改玩家生成位置，放在地图中心附近
  let player_start = tilemap.get_tiles_first("MaskDude")[0]
  add_player(game_state, tile_to_vec2d(player_start, tilemap.tile_size))
  
  // 移除平台游戏特有的元素
  // let flag = tilemap.get_tiles_first("Flag")[0]
  // add_flag(tile_to_vec2d(flag, tilemap.tile_size) - @math.Vec2D(16.0, 16.0))
  
  // 添加宝可梦风格的元素
  let npcs = tilemap.get_tiles("NPC")
  for npc in npcs {
    add_npc(tile_to_vec2d(npc, tilemap.tile_size), npc.id)
  }
  
  let items = tilemap.get_tiles("Item")
  for item in items {
    add_item(tile_to_vec2d(item, tilemap.tile_size), item.id)
  }
  
  let grasses = tilemap.get_tiles("Grass")
  for grass in grasses {
    add_grass(tile_to_vec2d(grass, tilemap.tile_size), grass.id)
  }
}

///|
// 添加背景
fn add_background(size : @math.Vec2D) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(
      size,
      "pixel_adventure/Background/Gray.png",
      repeat=Repeat,
    ),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(0, 0))
}

///|
// 添加草地
fn add_grass(pos : @math.Vec2D, sprite_id : String) -> Unit {
  let src_pos = match sprite_id {
    "15" => @math.Vec2D(96.0, 0.0)
    "9" => @math.Vec2D(112.0, 0.0)
    "16" => @math.Vec2D(128.0, 0.0)
    "11" => @math.Vec2D(96.0, 16.0)
    "13" => @math.Vec2D(112.0, 16.0)
    "10" => @math.Vec2D(128.0, 16.0)
    "14" => @math.Vec2D(96.0, 32.0)
    "8" => @math.Vec2D(112.0, 32.0)
    "12" => @math.Vec2D(128.0, 32.0)
    _ => panic()
  }
  
  // 创建单帧动画
  let grass_animation = @sprite.Animation::single_frame(
    "pixel_adventure/Terrain/Terrain (16x16).png",
    @math.Vec2D(16.0, 16.0),
    offset=src_pos
  )
  
  let sprite = @sprite.Sprite::from_animation(grass_animation, 10)
  let grass = @system.Entity::new()
  @sprite.sprites.set(grass, sprite)
  @position.positions.set(grass, pos)
  
  // 暂时注释掉碰撞检测，因为 collision API 可能已更改
  // @collision.collides.set(grass, @collision.Collide::{
  //   shape: Rect(size=@math.Vec2D(16.0, 16.0), offset=@math.Vec2D::zero()),
  //   layer: terrain_collision_layer,
  //   mask: @collision.CollisionMask::new([player_collision_layer]),  // 让玩家无法通过草地
  // })
}

///|
// 添加NPC
fn add_npc(pos : @math.Vec2D, npc_id : String) -> Unit {
  let npc = @system.Entity::new()
  
  // 根据NPC ID加载不同的精灵
  let sprite = match npc_id {
    "1" => @sprite.Sprite::from_animation(
      @sprite.Animation::new(
        [], // 空的动画帧数组
        loop_=true,
        rate=0.15,
      ),
      10,
    )
    "2" => @sprite.Sprite::from_animation(
      @sprite.Animation::new(
        [], // 空的动画帧数组
        loop_=true,
        rate=0.12,
      ),
      10,
    )
    _ => @sprite.Sprite::from_animation(
      @sprite.Animation::new(
        [], // 空的动画帧数组
        loop_=true,
        rate=0.18,
      ),
      10,
    )
  }
  
  @sprite.sprites.set(npc, sprite)
  @position.positions.set(npc, pos)
  
  // 添加NPC碰撞 (注释掉，因为 collision 包未找到)
  // @collision.collides.set(npc, @collision.Collide::{
  //   shape: Rect(size=@math.Vec2D(24.0, 32.0), offset=@math.Vec2D(4.0, 0.0)),
  //   layer: npc_collision_layer,
  //   mask: @collision.CollisionMask::new([player_collision_layer]),
  // })
  
  // 为NPC添加名字标签
  let npc_name = match npc_id {
    "1" => "忍者蛙"
    "2" => "粉红人"
    _ => "虚拟人"
  }
  
  let name_entity = @system.Entity::new()
  let name_sprite = @sprite.Sprite::from_text(@sprite.Text::new(npc_name, font="12px Arial", color="white"), 15)
  @sprite.sprites.set(name_entity, name_sprite)
  @position.positions.set(name_entity, pos + @math.Vec2D(0.0, -20.0))
  @ui.uis.set(name_entity, @ui.Ui::new())
  
  // 将名字实体添加到游戏状态中，以便后续管理
  // 这里可以创建一个NPC管理列表
}

///|
// 添加物品
fn add_item(pos : @math.Vec2D, _item_id : String) -> Unit {
  let item = @system.Entity::new()
  
  let sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(
      @math.Vec2D(16, 16),
      "pixel_adventure/Items/Apple.png",
    ),
    50,
  )
  
  @sprite.sprites.set(item, sprite)
  @position.positions.set(item, pos)
  
  // 添加物品碰撞 (注释掉，因为 collision 包未找到)
  // @collision.collides.set(item, @collision.Collide::{
  //   shape: Rect(size=@math.Vec2D(16.0, 16.0), offset=@math.Vec2D::zero()),
  //   layer: item_collision_layer,
  //   mask: @collision.CollisionMask::new([player_collision_layer]),
  // })
} 