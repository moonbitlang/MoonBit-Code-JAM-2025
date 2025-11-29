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
let bird_fly_animation : @sprite.Animation = @sprite.Animation::new(
  @sprite.frames_from_atlas(
    "assets/Background/ca3.png",
    9,
    width=6.0,
    height=6.0,
  ),
  loop_=true,
  fps=12,
)

///|
let bird_hit_animation : @sprite.Animation = @sprite.Animation::new(
  @sprite.frames_from_atlas(
    "assets/Background/ca3.png",
    9,
    width=6.0,
    height=6.0,
  ),
  loop_=false,
  fps=12,
)

///|
const BIRD_SPEED = 650.0

///|
struct Bird {
  mut direction : Direction2
  mut is_hurt : Bool
}

///|
let birds : Map[@system.Entity, Bird] = Map::new()

///|
fn add_bird(pos : @math.Vec2D) -> Unit {
  let entity = @system.Entity::new()
  let bird_sprite = @sprite.Sprite::from_animation(bird_fly_animation, 10)
  @sprite.sprites.set(entity, bird_sprite)
  @velocity.velocities.set(entity, @math.Vec2D(BIRD_SPEED, 0.0))
  @position.positions.set(entity, pos)
  @collision.shapes.set(
    entity,
    Rect(size=@math.Vec2D(6.0, 6.0), offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(entity, enemy_collision_layer)
  @collision.colliders.set(
    entity,
    @collision.Collider::new(
      @collision.CollisionMask::new([terrain_collision_layer]),
    ),
  )
  birds[entity] = Bird::{ direction: Right, is_hurt: false }
}

///|
fn bird_ai_system(_ : Double) -> Unit {
  if new_game_state.gameStarted && new_game_state.gameReStarted{
    for e, bird in birds {
      // 最初的颜色方块
      for block in new_game_state.blocks {
        add_block(block)
      }
    add_timer()
    add_timer1()
    guard e.is_alive() else { continue }
    guard @velocity.velocities.get(e) is Some(_velocity)
    if @sprite.is_animation_finished(e) {
      e.destroy()
      continue
    }
    // println("Current velocity: {:?}"+ _velocity.to_string());
    if bird.is_hurt {
      @velocity.velocities[e] = @math.Vec2D::zero()
      @collision.collision_layers.remove(e)
      match bird.direction {
        Left =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::new(),
          )
        Right =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::flip_x(6.0),
          )
      }
      @velocity.velocities[e] = @math.Vec2D::zero()
      continue
    }
    let collision_infos = @collision.get_collision_infos(e)
    let hit_wall = collision_infos
      .iter()
      .any(fn(info) {
        (info.direction[X] > 0.0 && bird.direction is Right) ||
        (info.direction[X] < 0.0 && bird.direction is Left)
      })
    if new_game_state.new_blocks1[0].color == "#000000"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timer > 10{
          new_game_state.timer -= 1
          update_timer_display()
        }
        if new_game_state.timer == 10{
          color_red_control()
          add_new_two_block1()
          add_new_two_block2()
          add_new_two_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#ff0000"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timer > 7{
          new_game_state.timer -= 1
          update_timer_display()
        }
        if new_game_state.timer == 7{
          color_red_control1()
          add_new_three_block1()
          add_new_three_block2()
          add_new_three_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#a52a2a"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timer > 4{
          new_game_state.timer -= 1
          update_timer_display()
        }
        if new_game_state.timer == 4{
          color_red_control2()
          add_new_four_block1()
          add_new_four_block2()
          add_new_four_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#e6e6fa"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timer > 0{
          new_game_state.timer -= 1
          update_timer_display()
          // e.destroy()
        }
        if new_game_state.timer == 0{
          color_red_control3()
          add_new_five_block1()
          add_new_five_block2()
          add_new_five_block3()
          e.destroy()
        }
      }
    }
    
    if new_game_state.timer == 10 || new_game_state.timer == 7 || new_game_state.timer == 4 || new_game_state.timer == 0 {
      // new_game_state.change = 0
      clear_timer_display()
      update_level_display()
      update_change_display()
      println(new_game_state.level)
    }
    if hit_wall {
      println("Hit wall, reversing direction.");
      if new_game_state.timer1 > 0 {
        new_game_state.timer1 -= 1
        update_timer1_display()
        @audio.play_audio("sounds/tap.wav")
      }
      if new_game_state.timer1 == 0 {
        add_timer_over()
        new_game_state.mouse_load = false
        @audio.play_audio("sounds/explosion.wav")
      }
      if new_game_state.timer > 13{
        // println(BIRD_SPEED)
        new_game_state.timer -= 1
        update_timer_display()
      }
      if new_game_state.timer == 13{
        println(BIRD_SPEED)
        clear_timer_display()
        add_alert_box()
        color_control()
        add_change_box(0)
        add_level_box()
        add_new_block1()
        add_new_block2()
        add_new_block3()
        // add_frame_color_line(0.0,"#fff")
        // add_frame_color_line(60.0,"#fff")
        // add_frame_color_line(120.0,"#fff")
        add_frame_color_line(0.0,"#dfab00ff")
        add_frame_color_line(60.0,"#fb0404ff")
        add_frame_color_line(120.0,"#039f70ff")
        // e.destroy()
      }
      bird.direction = match bird.direction {
        Left => Right
        Right => Left
      }
    }
    match bird.direction {
      Left => {
        @velocity.velocities[e] = @math.Vec2D(-BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::new(),
        )
      }
      Right => {
        @velocity.velocities[e] = @math.Vec2D(BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::flip_x(6.0),
        )
      }
    }
  }
  }
  // 困难模式
  if new_game_state.gameTwoStarted && new_game_state.gameReStarted{
    for e, bird in birds {
      // 最初的颜色方块
      // for block in new_game_state.blocks {
      //   if new_game_state.gameStarted{
      //     add_block(block)
      //   }
      // }
        if new_game_state.timerr == 20{
          new_game_state.blocks[0].color = "#ff0000ff"
          new_game_state.blocks[1].color = "#ffff00ff"
          new_game_state.blocks[2].color = "#ffffffff"
          add_block(new_game_state.blocks[0])
          add_block(new_game_state.blocks[1])
          add_block(new_game_state.blocks[2])
        }
        if new_game_state.timerr == 19{
          new_game_state.blocks[3].color = "#00ff00ff"
          new_game_state.blocks[4].color = "#ff00ffff"
          new_game_state.blocks[10].color = "#00ffffff"
          add_block(new_game_state.blocks[3])
          add_block(new_game_state.blocks[4])
          add_block(new_game_state.blocks[10])
        }
        if new_game_state.timerr == 18{
          new_game_state.blocks[9].color = "#0000ffff"
          new_game_state.blocks[5].color = "#000000ff"
          new_game_state.blocks[8].color = "#ffa500ff"
          add_block(new_game_state.blocks[9])
          add_block(new_game_state.blocks[5])
          add_block(new_game_state.blocks[8])
        }
        if new_game_state.timerr == 17{
          new_game_state.blocks[6].color = "#800080ff"
          new_game_state.blocks[7].color = "#ffc0cbff"
          new_game_state.blocks[11].color = "#808080ff"
          add_block(new_game_state.blocks[6])
          add_block(new_game_state.blocks[7])
          add_block(new_game_state.blocks[11])
        }
      
    add_timerr()
    add_timer1()
    guard e.is_alive() else { continue }
    guard @velocity.velocities.get(e) is Some(_velocity)
    if @sprite.is_animation_finished(e) {
      e.destroy()
      continue
    }
    // println("Current velocity: {:?}"+ _velocity.to_string());
    if bird.is_hurt {
      @velocity.velocities[e] = @math.Vec2D::zero()
      @collision.collision_layers.remove(e)
      match bird.direction {
        Left =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::new(),
          )
        Right =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::flip_x(6.0),
          )
      }
      @velocity.velocities[e] = @math.Vec2D::zero()
      continue
    }
    let collision_infos = @collision.get_collision_infos(e)
    let hit_wall = collision_infos
      .iter()
      .any(fn(info) {
        (info.direction[X] > 0.0 && bird.direction is Right) ||
        (info.direction[X] < 0.0 && bird.direction is Left)
      })
    if new_game_state.new_blocks1[0].color == "#000000" || new_game_state.new_blocks1[0].color == "#b3b3ffff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 12{
          new_game_state.timerr -= 1
          update_timer_r_display()
        }
        if new_game_state.timerr == 12{
          color_red_control()
          add_new_two_block1()
          add_new_two_block2()
          add_new_two_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#ff0000" || new_game_state.new_blocks1[0].color == "#ff073aff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 8{
          new_game_state.timerr -= 1
          update_timer_r_display()
        }
        if new_game_state.timerr == 8{
          color_red_control1()
          add_new_three_block1()
          add_new_three_block2()
          add_new_three_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#a52a2a" || new_game_state.new_blocks1[0].color == "#8b4513ff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 4{
          new_game_state.timerr -= 1
          update_timer_r_display()
        }
        if new_game_state.timerr == 4{
          color_red_control2()
          add_new_four_block1()
          add_new_four_block2()
          add_new_four_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#e6e6fa" || new_game_state.new_blocks1[0].color == "#006994ff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 0{
          new_game_state.timerr -= 1
          update_timer_r_display()
          // e.destroy()
        }
        if new_game_state.timerr == 0{
          color_red_control3()
          add_new_five_block1()
          add_new_five_block2()
          add_new_five_block3()
          e.destroy()
        }
      }
    }
    
    if new_game_state.timerr == 12 || new_game_state.timerr == 8 || new_game_state.timerr == 4 || new_game_state.timerr == 0 {
      // new_game_state.change = 0
      clear_timer_r_display()
      update_level_display()
      update_change_display()
      println(new_game_state.level)
    }
    if hit_wall {
      println("Hit wall, reversing direction.");
      if new_game_state.timer1 > 0 {
        new_game_state.timer1 -= 1
        update_timer1_display()
        @audio.play_audio("sounds/tap.wav")
      }
      if new_game_state.timer1 == 0 {
        add_timer_over()
        new_game_state.mouse_load = false
        @audio.play_audio("sounds/explosion.wav")
      }
      if new_game_state.timerr > 16{
        // println(BIRD_SPEED)
        new_game_state.timerr -= 1
        update_timer_r_display()
      }
      if new_game_state.timerr == 16{
        println(BIRD_SPEED)
        clear_timer_r_display()
        add_alert_box()
        color_control()
        add_change_box(0)
        add_level_box()
        add_new1_block1()
        add_new1_block2()
        add_new1_block3()
        // add_frame_color_line(0.0,"#fff")
        // add_frame_color_line(60.0,"#fff")
        // add_frame_color_line(120.0,"#fff")
        add_frame_color_line(0.0,"#dfab00ff")
        add_frame_color_line(60.0,"#fb0404ff")
        add_frame_color_line(120.0,"#039f70ff")
        // e.destroy()
      }
      if new_game_state.timerr == 15{
        new_game_state.new_blocks1[4].color = "#e6b3ffff"
        new_game_state.new_blocks1[9].color = "#b3ffb3ff"
        new_game_state.new_blocks1[11].color = "#f5f5f5ff"
        change_one_block(new_game_state.new_blocks1[4])
        change_one_block(new_game_state.new_blocks1[9])
        change_one_block(new_game_state.new_blocks1[11])
      }
      if new_game_state.timerr == 14{
        new_game_state.new_blocks1[10].color = "#ffb3d9ff"
        new_game_state.new_blocks1[3].color = "#ffffb3ff"
        new_game_state.new_blocks1[6].color = "#b3ffffcc"
        change_one_block(new_game_state.new_blocks1[10])
        change_one_block(new_game_state.new_blocks1[3])
        change_one_block(new_game_state.new_blocks1[6])
      }
      if new_game_state.timerr == 13{
        new_game_state.new_blocks1[1].color = "#b3d9ffff"
        new_game_state.new_blocks1[2].color = "#d9ffb3ff"
        new_game_state.new_blocks1[5].color = "#ffb3b3ff"
        new_game_state.new_blocks1[7].color = "#ffd9b3ff"
        new_game_state.new_blocks1[8].color = "#f0b3ffff"
        new_game_state.new_blocks1[0].color = "#b3b3ffff"
        change_one_block(new_game_state.new_blocks1[1])
        change_one_block(new_game_state.new_blocks1[2])
        change_one_block(new_game_state.new_blocks1[5])
        change_one_block(new_game_state.new_blocks1[7])
        change_one_block(new_game_state.new_blocks1[8])
        change_one_block(new_game_state.new_blocks1[0])
      }
      if new_game_state.timerr == 11{
        new_game_state.new_blocks1[0].color = "#ff073aff"
        new_game_state.new_blocks1[7].color = "#9400d3ff"
        new_game_state.new_blocks1[9].color = "#ff4500ff"
        change_two_block(new_game_state.new_blocks1[0])
        change_two_block(new_game_state.new_blocks1[7])
        change_two_block(new_game_state.new_blocks1[9])
      }
      if new_game_state.timerr == 10{
        new_game_state.new_blocks1[1].color = "#39ff14ff"
        new_game_state.new_blocks1[4].color = "#ff1493ff"
        new_game_state.new_blocks1[5].color = "#1e90ffff"
        new_game_state.new_blocks1[8].color = "#00ff7fff"
        new_game_state.new_blocks1[10].color = "#dc143cff"
        new_game_state.new_blocks1[11].color = "#00ced1ff"
        change_two_block(new_game_state.new_blocks1[1])
        change_two_block(new_game_state.new_blocks1[4])
        change_two_block(new_game_state.new_blocks1[5])
        change_two_block(new_game_state.new_blocks1[8])
        change_two_block(new_game_state.new_blocks1[10])
        change_two_block(new_game_state.new_blocks1[11])
      }
      if new_game_state.timerr == 9{
        new_game_state.new_blocks1[2].color = "#ff8c00ff"
        new_game_state.new_blocks1[3].color = "#00ffffff"
        new_game_state.new_blocks1[6].color = "#ffef00ff"
        change_two_block(new_game_state.new_blocks1[2])
        change_two_block(new_game_state.new_blocks1[3])
        change_two_block(new_game_state.new_blocks1[6])
      }
      if new_game_state.timerr == 7{
        new_game_state.new_blocks1[0].color = "#8b4513ff"
        new_game_state.new_blocks1[1].color = "#228b22ff"
        new_game_state.new_blocks1[2].color = "#daa520ff"
        new_game_state.new_blocks1[6].color = "#20b2aaff"
        new_game_state.new_blocks1[7].color = "#bdb76bff"
        new_game_state.new_blocks1[8].color = "#4682b4ff"
        change_three_block(new_game_state.new_blocks1[0])
        change_three_block(new_game_state.new_blocks1[1])
        change_three_block(new_game_state.new_blocks1[2])
        change_three_block(new_game_state.new_blocks1[6])
        change_three_block(new_game_state.new_blocks1[7])
        change_three_block(new_game_state.new_blocks1[8])
      }
      if new_game_state.timerr == 6{
        new_game_state.new_blocks1[4].color = "#556b2fff"
        new_game_state.new_blocks1[5].color = "#a0522dff"
        new_game_state.new_blocks1[6].color = "#20b2aaff"
        change_three_block(new_game_state.new_blocks1[4])
        change_three_block(new_game_state.new_blocks1[5])
        change_three_block(new_game_state.new_blocks1[6])
      }
      if new_game_state.timerr == 5{
        new_game_state.new_blocks1[9].color = "#9acd32ff"
        new_game_state.new_blocks1[10].color = "#bc8f8fff"
        new_game_state.new_blocks1[11].color = "#2e8b57ff"
        change_three_block(new_game_state.new_blocks1[9])
        change_three_block(new_game_state.new_blocks1[10])
        change_three_block(new_game_state.new_blocks1[11])
      }
      if new_game_state.timerr == 3{
        new_game_state.new_blocks1[0].color = "#006994ff"
        new_game_state.new_blocks1[1].color = "#00bfff"
        new_game_state.new_blocks1[2].color = "#4682b4ff"
        new_game_state.new_blocks1[3].color = "#00ced1ff"
        change_four_block(new_game_state.new_blocks1[0])
        change_four_block(new_game_state.new_blocks1[1])
        change_four_block(new_game_state.new_blocks1[2])
        change_four_block(new_game_state.new_blocks1[3])
      }
      if new_game_state.timerr == 2{
        new_game_state.new_blocks1[4].color = "#5f9ea0ff"
        new_game_state.new_blocks1[5].color = "#48d1ccff"
        new_game_state.new_blocks1[6].color = "#b0e0e6ff"
        new_game_state.new_blocks1[7].color = "#1e90ffff"
        change_four_block(new_game_state.new_blocks1[4])
        change_four_block(new_game_state.new_blocks1[5])
        change_four_block(new_game_state.new_blocks1[6])
        change_four_block(new_game_state.new_blocks1[7])
      }
      if new_game_state.timerr == 1{
        new_game_state.new_blocks1[8].color = "#4169e1ff"
        new_game_state.new_blocks1[9].color = "#6495edff"
        new_game_state.new_blocks1[10].color = "#87ceebff"
        new_game_state.new_blocks1[11].color = "#191970ff"
        change_four_block(new_game_state.new_blocks1[8])
        change_four_block(new_game_state.new_blocks1[9])
        change_four_block(new_game_state.new_blocks1[10])
        change_four_block(new_game_state.new_blocks1[11])
      }
      bird.direction = match bird.direction {
        Left => Right
        Right => Left
      }
    }
    match bird.direction {
      Left => {
        @velocity.velocities[e] = @math.Vec2D(-BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::new(),
        )
      }
      Right => {
        @velocity.velocities[e] = @math.Vec2D(BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::flip_x(6.0),
        )
      }
    }
  }
  }
  // 地狱模式
  if new_game_state.gameThreeStarted && new_game_state.gameReStarted{
    for e, bird in birds {
      add_difficult(new_game_state.metal_box,80.0,100.0)
      add_difficult(new_game_state.wood_box,110.0,100.0)
      add_difficult(new_game_state.water_box,140.0,100.0)
      add_difficult(new_game_state.fire_box,170.0,100.0)
      add_difficult(new_game_state.earth_box,200.0,100.0)
    add_timerrr()
    add_timer2()
    guard e.is_alive() else { continue }
    guard @velocity.velocities.get(e) is Some(_velocity)
    if @sprite.is_animation_finished(e) {
      e.destroy()
      continue
    }
    // println("Current velocity: {:?}"+ _velocity.to_string());
    if bird.is_hurt {
      @velocity.velocities[e] = @math.Vec2D::zero()
      @collision.collision_layers.remove(e)
      match bird.direction {
        Left =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::new(),
          )
        Right =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::flip_x(6.0),
          )
      }
      @velocity.velocities[e] = @math.Vec2D::zero()
      continue
    }
    let collision_infos = @collision.get_collision_infos(e)
    let hit_wall = collision_infos
      .iter()
      .any(fn(info) {
        (info.direction[X] > 0.0 && bird.direction is Right) ||
        (info.direction[X] < 0.0 && bird.direction is Left)
      })
    if new_game_state.new_blocks1[0].color == "#000000"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerrr > 18{
          new_game_state.difficult_box.content = " "
          add_difficult(new_game_state.difficult_box,70.0,150.0)
          new_game_state.metal_box.color = "#8d01b8ff"
          new_game_state.wood_box.color = "#1ac0c9ff"
          new_game_state.water_box.color = "#d5d527ff"
          new_game_state.fire_box.color = "#280dbfff"
          new_game_state.earth_box.color = "#890c3eff"
          new_game_state.timerrr -= 1
          update_timer_rr_display()
        }
        if new_game_state.timerrr == 18{
          new_game_state.metal_box.color = "#ffffff"
          new_game_state.wood_box.color = "#ffffff"
          new_game_state.water_box.color = "#ffffff"
          new_game_state.fire_box.color = "#ffffff"
          new_game_state.earth_box.color = "#ffffff"
          new_game_state.difficult_box.content = "木生__    __之余气生__"
          add_difficult(new_game_state.difficult_box,70.0,150.0)
          color_red_control()
          add_new_two_block1()
          add_new_two_block2()
          add_new_two_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#ff0000"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerrr > 12{
          new_game_state.difficult_box.content = " "
          add_difficult(new_game_state.difficult_box,70.0,150.0)
          new_game_state.metal_box.color = "#e39f0dff"
          new_game_state.wood_box.color = "#d2240dff"
          new_game_state.water_box.color = "#0c6075ff"
          new_game_state.fire_box.color = "#3f2604ff"
          new_game_state.earth_box.color = "#400880ff"
          new_game_state.timerrr -= 1
          update_timer_rr_display()
        }
        if new_game_state.timerrr == 12{
          new_game_state.metal_box.color = "#ffffff"
          new_game_state.wood_box.color = "#ffffff"
          new_game_state.water_box.color = "#ffffff"
          new_game_state.fire_box.color = "#ffffff"
          new_game_state.earth_box.color = "#ffffff"
          new_game_state.difficult_box.content = "__藏金意    金清__寒"
          add_difficult(new_game_state.difficult_box,70.0,150.0)
          color_red_control1()
          add_new_three_block1()
          add_new_three_block2()
          add_new_three_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#a52a2a"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerrr > 6{
          new_game_state.difficult_box.content = " "
          add_difficult(new_game_state.difficult_box,70.0,150.0)
          new_game_state.metal_box.color = "#cb0ec2ff"
          new_game_state.wood_box.color = "#85db85ff"
          new_game_state.water_box.color = "#3d14e0ff"
          new_game_state.fire_box.color = "#ceab0eff"
          new_game_state.earth_box.color = "#8cd182ff"
          new_game_state.timerrr -= 1
          update_timer_rr_display()
        }
        if new_game_state.timerrr == 6{
          new_game_state.metal_box.color = "#ffffff"
          new_game_state.wood_box.color = "#ffffff"
          new_game_state.water_box.color = "#ffffff"
          new_game_state.fire_box.color = "#ffffff"
          new_game_state.earth_box.color = "#ffffff"
          new_game_state.difficult_box.content = "__炼真__    金沉生__"
          color_red_control2()
          add_new_four_block1()
          add_new_four_block2()
          add_new_four_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#e6e6fa"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerrr > 0{
          new_game_state.difficult_box.content = " "
          add_difficult(new_game_state.difficult_box,70.0,150.0)
          new_game_state.metal_box.color = "#08dfdfff"
          new_game_state.wood_box.color = "#1b2c4fff"
          new_game_state.water_box.color = "#0f8504ff"
          new_game_state.fire_box.color = "#42085dff"
          new_game_state.earth_box.color = "#a04f0dff"
          new_game_state.timerrr -= 1
          update_timer_rr_display()
          // e.destroy()
        }
        if new_game_state.timerrr == 0{
          new_game_state.metal_box.color = "#ffffff"
          new_game_state.wood_box.color = "#ffffff"
          new_game_state.water_box.color = "#ffffff"
          new_game_state.fire_box.color = "#ffffff"
          new_game_state.earth_box.color = "#ffffff"
          new_game_state.difficult_box.content = "__刀裁__    __养__根"
          color_red_control3()
          add_new_five_block1()
          add_new_five_block2()
          add_new_five_block3()
          e.destroy()
        }
      }
    }
    
    if new_game_state.timer == 18 || new_game_state.timer == 12 || new_game_state.timer == 6 || new_game_state.timer == 0 {
      // new_game_state.change = 0
      clear_timer_rr_display()
      update_level_display()
      update_change_display()
      println(new_game_state.level)
    }
    if hit_wall {
      println("Hit wall, reversing direction.");
      if new_game_state.timer2 > 0 {
        new_game_state.timer2 -= 1
        update_timer2_display()
        @audio.play_audio("sounds/tap.wav")
      }
      if new_game_state.timer2 == 0 {
        add_timer_over()
        new_game_state.mouse_load = false
        @audio.play_audio("sounds/explosion.wav")
      }
      if new_game_state.timerrr > 24{
        // println(BIRD_SPEED)
        new_game_state.metal_box.color = "#000000"
        new_game_state.wood_box.color = "#4fa520ff"
        new_game_state.water_box.color = "#146ac1ff"
        new_game_state.fire_box.color = "#c01616ff"
        new_game_state.earth_box.color = "#b5238cff"
        new_game_state.timerrr -= 1
        update_timer_rr_display()
      }
      if new_game_state.timerrr == 24{
        new_game_state.metal_box.color = "#ffffff"
        new_game_state.wood_box.color = "#ffffff"
        new_game_state.water_box.color = "#ffffff"
        new_game_state.fire_box.color = "#ffffff"
        new_game_state.earth_box.color = "#ffffff"
        add_difficult(new_game_state.difficult_box,70.0,150.0)
        println(BIRD_SPEED)
        clear_timer_rr_display()
        add_alert_box()
        // color_control()
        add_change_box(0)
        add_level_box()
        add_new1_to_block1()
        add_new1_to_block2()
        add_new1_to_block3()
        // add_frame_color_line(0.0,"#fff")
        // add_frame_color_line(60.0,"#fff")
        // add_frame_color_line(120.0,"#fff")
        add_frame_color_line(0.0,"#dfab00ff")
        add_frame_color_line(60.0,"#fb0404ff")
        add_frame_color_line(120.0,"#039f70ff")
        // e.destroy()
      }
      bird.direction = match bird.direction {
        Left => Right
        Right => Left
      }
    }
    match bird.direction {
      Left => {
        @velocity.velocities[e] = @math.Vec2D(-BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::new(),
        )
      }
      Right => {
        @velocity.velocities[e] = @math.Vec2D(BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::flip_x(6.0),
        )
      }
    }
  }
  }
  // 古人模式
  if new_game_state.gameFourStarted && new_game_state.gameReStarted{
    for e, bird in birds {
      // 最初的颜色方块
      if new_game_state.timerr == 20{
          new_game_state.blocks[0].color = "#e0115fff"
          new_game_state.blocks[1].color = "#50c878ff"
          new_game_state.blocks[2].color = "#00bfffef"
          add_block(new_game_state.blocks[0])
          add_block(new_game_state.blocks[1])
          add_block(new_game_state.blocks[2])
        }
        if new_game_state.timerr == 19{
          new_game_state.blocks[3].color = "#9b59b6ff"
          new_game_state.blocks[4].color = "#f1c40fff"
          new_game_state.blocks[5].color = "#e67e22ff"
          add_block(new_game_state.blocks[3])
          // add_block(new_game_state.blocks[4])
          add_block(new_game_state.blocks[5])
        }
        if new_game_state.timerr == 18{
          new_game_state.blocks[6].color = "#34495eff"
          new_game_state.blocks[7].color = "#1abc9cff"
          new_game_state.blocks[8].color = "#e74c3cff"
          add_block(new_game_state.blocks[6])
          add_block(new_game_state.blocks[7])
          add_block(new_game_state.blocks[8])
        }
        if new_game_state.timerr == 17{
          new_game_state.blocks[9].color = "#3498dbff"
          new_game_state.blocks[10].color = "#2ecc71ff"
          new_game_state.blocks[11].color = "#f39c12ff"
          add_block(new_game_state.blocks[9])
          add_block(new_game_state.blocks[10])
          add_block(new_game_state.blocks[11])
        }
    add_timerr()
    // add_timer1()
    guard e.is_alive() else { continue }
    guard @velocity.velocities.get(e) is Some(_velocity)
    if @sprite.is_animation_finished(e) {
      e.destroy()
      continue
    }
    // println("Current velocity: {:?}"+ _velocity.to_string());
    if bird.is_hurt {
      @velocity.velocities[e] = @math.Vec2D::zero()
      @collision.collision_layers.remove(e)
      match bird.direction {
        Left =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::new(),
          )
        Right =>
          @sprite.play_animation(
            e,
            bird_hit_animation,
            transform=@math.Transform::flip_x(6.0),
          )
      }
      @velocity.velocities[e] = @math.Vec2D::zero()
      continue
    }
    let collision_infos = @collision.get_collision_infos(e)
    let hit_wall = collision_infos
      .iter()
      .any(fn(info) {
        (info.direction[X] > 0.0 && bird.direction is Right) ||
        (info.direction[X] < 0.0 && bird.direction is Left)
      })
    if new_game_state.new_blocks1[0].color == "#000000" || new_game_state.new_blocks1[0].color == "#ff6b6bff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 12{
          new_game_state.timerr -= 1
          update_timer_r_display()
          new_game_state.say1_box.content = ""
        }
        if new_game_state.timerr == 12{
          color_red_control()
          add_new_two_block1()
          add_new_two_block2()
          add_new_two_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#ff0000" || new_game_state.new_blocks1[0].color == "#8b4513ff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 8{
          new_game_state.timerr -= 1
          update_timer_r_display()
        }
        if new_game_state.timerr == 8{
          color_red_control1()
          add_new_three_block1()
          add_new_three_block2()
          add_new_three_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#a52a2a" || new_game_state.new_blocks1[0].color == "#ffb6c1ff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 4{
          new_game_state.timerr -= 1
          update_timer_r_display()
        }
        if new_game_state.timerr == 4{
          color_red_control2()
          add_new_four_block1()
          add_new_four_block2()
          add_new_four_block3()
        }
      }
    }
    if new_game_state.new_blocks1[0].color == "#e6e6fa" || new_game_state.new_blocks1[0].color == "#ff0740ff"{
      clear_change_display()
      clear_level_display()
      if hit_wall{
        println("!!!!")
        if new_game_state.timerr > 0{
          new_game_state.timerr -= 1
          update_timer_r_display()
          // e.destroy()
        }
        if new_game_state.timerr == 0{
          color_red_control3()
          add_new_five_block1()
          add_new_five_block2()
          add_new_five_block3()
          e.destroy()
        }
      }
    }
    
    if new_game_state.timerr == 12 || new_game_state.timerr == 8 || new_game_state.timerr == 4 || new_game_state.timerr == 0 {
      // new_game_state.change = 0
      clear_timer_r_display()
      update_level_display()
      update_change_display()
      println(new_game_state.level)
    }
    if hit_wall {
      println("Hit wall, reversing direction.");
      // if new_game_state.timer1 > 0 {
      //   new_game_state.timer1 -= 1
      //   update_timer1_display()
      //   @audio.play_audio("sounds/tap.wav")
      // }
      // if new_game_state.timer1 == 0 {
      //   add_timer_over()
      //   new_game_state.mouse_load = false
      //   @audio.play_audio("sounds/explosion.wav")
      // }
      if new_game_state.timerr > 16{
        // println(BIRD_SPEED)
        new_game_state.timerr -= 1
        update_timer_r_display()
      }
      if new_game_state.timerr == 16{
        println(BIRD_SPEED)
        clear_timer_r_display()
        add_alert_box()
        color_control()
        add_change_box(0)
        add_level_box()
        add_new1_to_to_block1()
        add_new1_to_to_block2()
        add_new1_to_to_block3()
        add_say1()
        // add_frame_color_line(0.0,"#fff")
        // add_frame_color_line(60.0,"#fff")
        // add_frame_color_line(120.0,"#fff")
        add_frame_color_line(0.0,"#dfab00ff")
        add_frame_color_line(60.0,"#fb0404ff")
        add_frame_color_line(120.0,"#039f70ff")
        // e.destroy()
      }
      if new_game_state.timerr == 15{
        new_game_state.new_blocks1[0].color = "#ff6b6bff"
        new_game_state.new_blocks1[1].color = "#4ecdc4ff"
        new_game_state.new_blocks1[2].color = "#45b7d1ff"
        change_one_block(new_game_state.new_blocks1[0])
        change_one_block(new_game_state.new_blocks1[1])
        change_one_block(new_game_state.new_blocks1[2])
      }
      if new_game_state.timerr == 14{
        new_game_state.new_blocks1[3].color = "#f7b731ff"
        new_game_state.new_blocks1[4].color = "#5f27cdff"
        new_game_state.new_blocks1[5].color = "#00d2d3ff"
        change_one_block(new_game_state.new_blocks1[3])
        change_one_block(new_game_state.new_blocks1[4])
        change_one_block(new_game_state.new_blocks1[5])
      }
      if new_game_state.timerr == 13{
        new_game_state.new_blocks1[6].color = "#ff9ff3ff"
        new_game_state.new_blocks1[7].color = "#54a0ffff"
        new_game_state.new_blocks1[8].color = "#5f27cdff"
        new_game_state.new_blocks1[9].color = "#01a3a4ff"
        new_game_state.new_blocks1[10].color = "#f8b500ff"
        new_game_state.new_blocks1[11].color = "#ff6348ff"
        change_one_block(new_game_state.new_blocks1[6])
        change_one_block(new_game_state.new_blocks1[7])
        change_one_block(new_game_state.new_blocks1[8])
        change_one_block(new_game_state.new_blocks1[9])
        change_one_block(new_game_state.new_blocks1[10])
        change_one_block(new_game_state.new_blocks1[11])
      }
      if new_game_state.timerr == 11{
        new_game_state.new_blocks1[0].color = "#8b4513ff"
        new_game_state.new_blocks1[1].color = "#cd853fff"
        new_game_state.new_blocks1[2].color = "#daa520ff"
        change_two_block(new_game_state.new_blocks1[0])
        change_two_block(new_game_state.new_blocks1[1])
        change_two_block(new_game_state.new_blocks1[2])
      }
      if new_game_state.timerr == 10{
        new_game_state.new_blocks1[3].color = "#b22222ff"
        new_game_state.new_blocks1[4].color = "#4b0082ff"
        new_game_state.new_blocks1[5].color = "#2f4f4fff"
        new_game_state.new_blocks1[6].color = "#8fbc8fff"
        new_game_state.new_blocks1[7].color = "#800000ff"
        new_game_state.new_blocks1[8].color = "#556b2fff"
        change_two_block(new_game_state.new_blocks1[3])
        change_two_block(new_game_state.new_blocks1[4])
        change_two_block(new_game_state.new_blocks1[5])
        change_two_block(new_game_state.new_blocks1[6])
        change_two_block(new_game_state.new_blocks1[7])
        change_two_block(new_game_state.new_blocks1[8])
      }
      if new_game_state.timerr == 9{
        new_game_state.new_blocks1[9].color = "#a0522dff"
        new_game_state.new_blocks1[10].color = "#2e8b57ff"
        new_game_state.new_blocks1[11].color = "#708090ff"
        change_two_block(new_game_state.new_blocks1[9])
        change_two_block(new_game_state.new_blocks1[10])
        change_two_block(new_game_state.new_blocks1[11])
      }
      if new_game_state.timerr == 7{
        new_game_state.new_blocks1[0].color = "#ffb6c1ff"
        new_game_state.new_blocks1[1].color = "#ffdab9ff"
        new_game_state.new_blocks1[2].color = "#e6e6faff"
        new_game_state.new_blocks1[3].color = "#f0e68cff"
        new_game_state.new_blocks1[4].color = "#d8bfd8ff"
        new_game_state.new_blocks1[5].color = "#ffe4e1ff"
        change_three_block(new_game_state.new_blocks1[0])
        change_three_block(new_game_state.new_blocks1[1])
        change_three_block(new_game_state.new_blocks1[2])
        change_three_block(new_game_state.new_blocks1[3])
        change_three_block(new_game_state.new_blocks1[4])
        change_three_block(new_game_state.new_blocks1[5])
      }
      if new_game_state.timerr == 6{
        new_game_state.new_blocks1[6].color = "#32cd32ff"
        new_game_state.new_blocks1[7].color = "#e0ffffcc"
        new_game_state.new_blocks1[8].color = "#adff2fff"
        change_three_block(new_game_state.new_blocks1[6])
        change_three_block(new_game_state.new_blocks1[7])
        change_three_block(new_game_state.new_blocks1[8])
      }
      if new_game_state.timerr == 5{
        new_game_state.new_blocks1[9].color = "#daa520ff"
        new_game_state.new_blocks1[10].color = "#8b4513ff"
        new_game_state.new_blocks1[11].color = "#f5fffaff"
        change_three_block(new_game_state.new_blocks1[9])
        change_three_block(new_game_state.new_blocks1[10])
        change_three_block(new_game_state.new_blocks1[11])
      }
      if new_game_state.timerr == 3{
        new_game_state.new_blocks1[0].color = "#ff0740ff"
        new_game_state.new_blocks1[1].color = "#00f5d4ff"
        new_game_state.new_blocks1[2].color = "#ff00ffff"
        new_game_state.new_blocks1[3].color = "#8338ecff"
        change_four_block(new_game_state.new_blocks1[0])
        change_four_block(new_game_state.new_blocks1[1])
        change_four_block(new_game_state.new_blocks1[2])
        change_four_block(new_game_state.new_blocks1[3])
      }
      if new_game_state.timerr == 2{
        new_game_state.new_blocks1[4].color = "#06ffa5ff"
        new_game_state.new_blocks1[5].color = "#ff4365ff"
        new_game_state.new_blocks1[6].color = "#3a86ffff"
        new_game_state.new_blocks1[7].color = "#ff006eff"
        change_four_block(new_game_state.new_blocks1[4])
        change_four_block(new_game_state.new_blocks1[5])
        change_four_block(new_game_state.new_blocks1[6])
        change_four_block(new_game_state.new_blocks1[7])
      }
      if new_game_state.timerr == 1{
        new_game_state.new_blocks1[8].color = "#00bb2dff"
        new_game_state.new_blocks1[9].color = "#ffbe0bff"
        new_game_state.new_blocks1[10].color = "#fb5607ff"
        new_game_state.new_blocks1[11].color = "#8338ecff"
        change_four_block(new_game_state.new_blocks1[8])
        change_four_block(new_game_state.new_blocks1[9])
        change_four_block(new_game_state.new_blocks1[10])
        change_four_block(new_game_state.new_blocks1[11])
      }
      bird.direction = match bird.direction {
        Left => Right
        Right => Left
      }
    }
    match bird.direction {
      Left => {
        @velocity.velocities[e] = @math.Vec2D(-BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::new(),
        )
      }
      Right => {
        @velocity.velocities[e] = @math.Vec2D(BIRD_SPEED, 0.0)
        @sprite.play_animation(
          e,
          bird_fly_animation,
          transform=@math.Transform::flip_x(6.0),
        )
      }
    }
  }
  }
}
