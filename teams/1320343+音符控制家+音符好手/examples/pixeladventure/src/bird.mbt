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
    "assets/Background/Purple.png",
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
    "assets/Background/Purple.png",
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
      // for block in new_game_state.blocks {
      //   add_block(block)
      // }
    // add_timer()
    // update_timer_display()
    add_color_line1(@math.Vec2D(20.0,68.0),"#000000",new_game_state.fi)
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
    if hit_wall {
      new_game_state.fi += 15;
      add_color_line1(@math.Vec2D(20.0,68.0),"#09eae3ff",new_game_state.fi)
      new_game_state.x += 10;
      new_game_state.y += 10;
      // println("Hit wall, reversing direction.");
      if new_game_state.timer > 0{
        // add_font(new_game_state.x,new_game_state.y)
        // println(BIRD_SPEED)
        new_game_state.timer -= 1
        update_timer_display()
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
