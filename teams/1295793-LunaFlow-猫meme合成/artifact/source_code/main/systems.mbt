///|
fn input_system(backend : &Backend) -> Unit {
  // Move pointer
  bind_key(KeyA, KeepPressed, () => ptr_move(Left))
  bind_key(KeyD, KeepPressed, () => ptr_move(Right))
  bind_keys([KeyA, KeyD], NotPressed, () => ptr_move(Stop))
  // Move Cats
  bind_key(KeyQ, KeepPressed, () => cat_move(Left))
  bind_key(KeyE, KeepPressed, () => cat_move(Right))
  // Play Music and Drop Cats
  bind_key(Space, Pressed, () => cat_drop(backend))
  global_sprite[ptr_entity] = game_state.pointer_sprite
  let collide : Collide = Collide::{
    shape: CollisionShape::Rect(
      size=Vec2D::new(32.0, 32.0),
      offset=Vec2D::zero(),
    ),
    layer: pointer_collision_layer,
    mask: CollisionMask::new([terrain_collision_layer]),
  }
  global_collide[ptr_entity] = collide
  bind_key(Space, Pressed, () => music_play(backend))
}

///|
fn merge_system(backend : &Backend) -> Unit {
  let merged_this_frame = @hashset.HashSet::new() // Guard against multiple merges in one frame
  for pair in game_state.to_merge {
    let (cat1_entity, cat2_entity) = pair
    if merged_this_frame.contains(cat1_entity) ||
      merged_this_frame.contains(cat2_entity) {
      continue // if either cat has already been merged this frame, skip
    }
    let cat1_opt = cats_by_entity.get(cat1_entity)
    let cat2_opt = cats_by_entity.get(cat2_entity)
    if cat1_opt is Some(_) && cat2_opt is Some(_) {
      let cat1 = cat1_opt.unwrap()
      let cat2 = cat2_opt.unwrap()
      // Mark as merged
      merged_this_frame.add(cat1_entity)
      merged_this_frame.add(cat2_entity)

      // Perform merge
      cat1.merge(cat2)
      backend.play_audio(
        Cat::get_sound_path_by_level(cat1.level + 1),
        volume=0.8,
        loop_=false,
      )
    }
  }
  // Clear the merge list
  game_state.to_merge.clear()
}

///|
fn force_system(_backend : &Backend) -> Unit {
  for pair in cats_by_entity {
    let (entity, _cat) = pair
    global_velocity[entity].y += GRAVITY // Gravity
    global_velocity[entity].x *= 1.0 - FRICTION // Friction
    if global_velocity[entity].x < 0.01 && global_velocity[entity].x > -0.01 {
      global_velocity[entity].x = 0.0
    }
  }
}

///|
fn play_sound_system(backend : &Backend) -> Unit {
  for cat_entity in game_state.cats_clicked {
    let cat_opt = cats_by_entity.get(cat_entity)
    if cat_opt is Some(_) {
      let cat = cat_opt.unwrap()
      backend.play_audio(cat.get_sound_path(), volume=1.0, loop_=false)
    }
  }
  game_state.cats_clicked.clear()
}

///|
fn cat_teleport_system(_ : &Backend) -> Unit {
  cats_by_entity.each((entity, cat) => {
    let position = Prop::get_position(entity).unwrap()
    if position.x > CANVAS_WIDTH - 16.0 - cat.get_size() ||
      position.x < 16.0 ||
      position.y > CANVAS_HEIGHT - cat.get_size() ||
      position.y < 16.0 {
      teleport_queue.add(cat)
    }
  })
  let mut space = CANVAS_WIDTH - 34.0
  for cat in teleport_queue {
    if !cats_by_entity.contains(cat.entity) {
      teleport_queue.remove(cat)
      continue
    }
    if space - cat.get_size() - 1.0 > 0.0 {
      let position = @position.Position(
        Vec2D::new(CANVAS_WIDTH - (space + 17.0), 24.0),
      )
      Prop::set_position(cat.entity, position)
      Prop::set_velocity(cat.entity, @velocity.Velocity(Vec2D::zero()))
      teleport_queue.remove(cat)
      space -= cat.get_size() + 1.0
    } else {
      break
    }
  }
}
