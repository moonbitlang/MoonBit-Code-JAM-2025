///|
fn bind_key(key : Code, trigger : Trigger, handler : () -> Unit) -> Unit {
  match trigger {
    Pressed => if is_just_pressed(key) { handler() }
    KeepPressed => if is_pressed(key) { handler() }
    NotPressed => if !is_pressed(key) { handler() }
  }
}

///|
fn bind_keys(
  keys : Array[Code],
  trigger : Trigger,
  handler : () -> Unit,
) -> Unit {
  let f = match trigger {
    KeepPressed => x => is_pressed(x)
    Pressed => x => is_just_pressed(x)
    NotPressed => x => !is_pressed(x)
  }
  let state = keys
    .map(x => f(x))
    .fold((acc, current) => acc && current, init=true)
  if state {
    handler()
  }
}

///|
fn ptr_move(move_state : MoveState) -> Unit {
  let velocity = global_velocity[ptr_entity]
  let position = global_position[ptr_entity]
  let ptr_size = 32.0 + game_state.next_cat_level.to_double() * 16.0
  let left_bound = 16.0
  let right_bound = CANVAS_WIDTH - 16.0 - ptr_size
  if position.x < left_bound {
    velocity.x = 0.0
    position.x = left_bound
  } else if position.x > right_bound {
    velocity.x = 0.0
    position.x = right_bound
  }
  match move_state {
    Stop => velocity.x = 0.0
    Left =>
      if position.x <= left_bound {
        velocity.x = 0.0
        position.x = left_bound
      } else if velocity.x > -PTR_MAX_VEC_H {
        velocity.x -= PTR_ACC_H
      }
    Right =>
      if position.x >= right_bound {
        velocity.x = 0.0
        position.x = right_bound
      } else if velocity.x < PTR_MAX_VEC_H {
        velocity.x += PTR_ACC_H
      }
  }
}

///|
fn cat_move(move_state : MoveState) -> Unit {
  cats_by_entity.each((e, c) => global_velocity[e].x = move_state.signum() *
    CAT_MOVE_FORCE /
    c.level.to_double())
}

///|
fn music_play(backend : &Backend) -> Unit {
  if !game_state.background_music_started {
    backend.play_audio(
      "./assets/Sounds/background_music.wav",
      volume=BACKGROUND_MUSIC_VOLUME,
      loop_=true,
    )
    game_state.background_music_started = true
  }
}

///|
fn cat_drop(backend : &Backend) -> Unit {
  let ptr_position = global_position[ptr_entity]
  let level = game_state.next_cat_level
  let _ = Cat::new(ptr_position.0, level)
  game_state.next_cat_level = random_cat_level()
  let level = game_state.next_cat_level
  game_state.pointer_sprite = Sprite::new_picture(
    Cat::get_picture_by_level(level),
    ZINDEX_FOR_POINTER,
  )
  backend.play_audio("./assets/sounds/drop.wav", volume=1.0, loop_=false)
}
