///|
fn game_start(_backend : &Backend) -> Unit {
  add_pointer()
  for x = 0.0; x < CANVAS_WIDTH; x = x + 16.0 {
    add_bottom(Vec2D::new(x, CANVAS_HEIGHT - 16.0))
    add_top(Vec2D::new(x, 0.0))
  }
  for x = 0.0; x < CANVAS_HEIGHT; x = x + 16.0 * 3.0 {
    add_side_walls(Vec2D::new(0, x))
    add_side_walls(Vec2D::new(CANVAS_WIDTH - 16.0, x))
  }
  add_background()
  add_score_bar()
}

///|
fn add_pointer() -> Unit {
  global_position[ptr_entity] = Vec2D::new(CANVAS_WIDTH / 2.0, 80.0)
  let velocity = Vec2D::zero()
  global_velocity[ptr_entity] = velocity
  global_sprite[ptr_entity] = game_state.pointer_sprite
}

///|
fn add_top(pos : Vec2D) -> Unit {
  let entity = Entity::new()
  global_position[entity] = pos
  let animation = Animation::new(
    "./assets/Terrain/Terrain (16x16).png",
    max_frame=1,
    height=16,
    width=16,
    offset=Vec2D::new(16.0 * 13, 0.0),
  )
  let sprite = Sprite::new_animation(animation, ZINDEX_FOR_TERRAIN)
  global_sprite[entity] = sprite
  let collide : Collide = Collide::{
    shape: CollisionShape::Rect(
      size=Vec2D::new(16.0, 16.0),
      offset=Vec2D::zero(),
    ),
    layer: terrain_collision_layer,
    mask: CollisionMask::empty(),
  }
  global_collide[entity] = collide
}

///|
fn add_bottom(pos : Vec2D) -> Unit {
  let entity = Entity::new()
  global_position[entity] = pos
  let animation = Animation::new(
    "./assets/Terrain/Terrain (16x16).png",
    max_frame=1,
    height=16,
    width=16,
    offset=Vec2D::new(16.0 * 7, 0.0),
  )
  let sprite = Sprite::new_animation(animation, ZINDEX_FOR_TERRAIN)
  global_sprite[entity] = sprite
  let collide : Collide = Collide::{
    shape: CollisionShape::Rect(
      size=Vec2D::new(16.0, 16.0),
      offset=Vec2D::zero(),
    ),
    layer: terrain_collision_layer,
    mask: CollisionMask::empty(),
  }
  global_collide[entity] = collide
}

///|
fn add_side_walls(pos : Vec2D) -> Unit {
  let animation = Animation::new(
    "./assets/Terrain/Terrain (16x16).png",
    max_frame=1,
    height=16 * 3,
    width=16,
    offset=Vec2D::new(16.0 * 15, 0.0),
  )
  // Left Wall
  let wall = Entity::new()
  global_position[wall] = pos
  let left_collide : Collide = Collide::{
    shape: CollisionShape::Rect(
      size=Vec2D::new(16.0, 16.0),
      offset=Vec2D::zero(),
    ),
    layer: terrain_collision_layer,
    mask: CollisionMask::new([pointer_collision_layer]),
  }
  global_sprite[wall] = Sprite::new_animation(animation, ZINDEX_FOR_WALLS)
  global_collide[wall] = left_collide
}

///|
fn add_background() -> Unit {
  let entity = Entity::new()
  let picture = Picture::new(
    Vec2D::new(CANVAS_WIDTH, CANVAS_HEIGHT),
    "./assets/Background/Brown.png",
    repeat=true,
  )
  let sprite = Sprite::new_picture(picture, ZINDEX_FOR_BACKGROUND)
  global_sprite[entity] = sprite
  global_position[entity] = Vec2D::zero()
}

///|
fn add_score_bar() -> Unit {
  set_score(0)
  add_text_entity(
    game_state.score_bar,
    Vec2D::new(CANVAS_WIDTH / 2.0 - 200.0, CANVAS_HEIGHT * 0.10),
  )
  add_text_entity(
    Text::new("Pause A/D to move", font="30px ThaleahFat", color="Gray"),
    Vec2D::new(CANVAS_WIDTH / 2.0 - 120.0, CANVAS_HEIGHT * 0.30),
  )
  add_text_entity(
    Text::new("Pause Q/E to switch", font="30px ThaleahFat", color="Gray"),
    Vec2D::new(CANVAS_WIDTH / 2.0 - 120.0, CANVAS_HEIGHT * 0.40),
  )
  add_text_entity(
    Text::new("Pause Space to drop", font="30px ThaleahFat", color="Gray"),
    Vec2D::new(CANVAS_WIDTH / 2.0 - 120.0, CANVAS_HEIGHT * 0.50),
  )
  add_text_entity(
    Text::new("Click the cats!!!", font="20px ThaleahFat", color="White"),
    Vec2D::new(CANVAS_WIDTH / 2.0 + 50.0, CANVAS_HEIGHT * 0.53),
  )
}

///|
/// support function to add text entities
fn add_text_entity(text : Text, position : Vec2D) -> Unit {
  let entity = Entity::new()
  global_position[entity] = position
  let sprite = Sprite::new_text(text, ZINDEX_FOR_TEXT)
  global_sprite[entity] = sprite
}
