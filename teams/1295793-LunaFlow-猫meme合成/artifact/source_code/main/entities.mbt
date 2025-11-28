///|
struct Cat {
  entity : Entity
  level : Int
} derive(Eq, Hash)

///|
fn Cat::new(position : Vec2D, level : Int) -> Cat {
  let entity = Entity::new()
  let cat : Cat = { entity, level }
  let size = cat.get_size()
  let velocity = @velocity.Velocity(Vec2D::zero())
  let cat_layer = cat.get_collision_layer()
  let collide : Collide = Collide::{
    shape: CollisionShape::Rect(
      size=Vec2D::new(size, size),
      offset=Vec2D::zero(),
    ),
    layer: cat_layer,
    mask: CollisionMask::new(cat.get_collision_mask_layers()),
  }
  let area : Area = Area::new(
    CollisionShape::Rect(
      size=Vec2D::new(size * 1.2, size * 1.2),
      offset=Vec2D::zero(),
    ),
    cat_layer,
    CollisionMask::new([cat_collision_layers[level - 1]]),
    monitoring_mouse=true,
  )
  let self_entity = entity
  area.on_enter(fn(other : Entity) {
    // CRITICAL: Do not merge with yourself.
    if self_entity == other {
      return
    }
    game_state.to_merge.add((self_entity, other))
  })
  area.on_just_pressed(fn(_button : MouseButton) {
    game_state.cats_clicked.add(self_entity)
  })
  cats_by_entity.set(entity, cat)
  global_position[entity] = position
  global_velocity[entity] = velocity
  global_collide[entity] = collide
  global_area[entity] = area
  global_sprite[entity] = Sprite::new_picture(
    cat.get_picture(),
    ZINDEX_FOR_CATS,
  ) //Zindex 10 to be above the pointer
  cat
}

///|
fn Cat::merge(self : Cat, other : Cat) -> Unit {
  set_score(game_state.score + self.get_merge_score())
  let position_cat_1 = global_position[self.entity].0
  let position_cat_2 = global_position[other.entity].0
  let cat_x = {
    let position_mid = (position_cat_1.x + position_cat_2.x) / 2.0
    let size = self.get_size() + 16.0
    if CANVAS_WIDTH - position_mid - 16.0 < size {
      CANVAS_WIDTH - 17.0 - size
    } else if position_mid - 16.0 < 0 {
      17.0 + size
    } else {
      position_mid
    }
  }
  let cat_y = (position_cat_1.y + position_cat_2.y) / 2.0 - 32.0
  let position_merged = Vec2D::{ x: cat_x, y: cat_y }
  let _ = Cat::new(position_merged, self.level + 1)
  cats_by_entity.remove(self.entity)
  cats_by_entity.remove(other.entity)
  Entity::destroy(self.entity)
  Entity::destroy(other.entity)
}

///|
fn Cat::get_size(self : Cat) -> Double {
  Cat::get_size_by_level(self.level)
}

///|
fn Cat::get_size_by_level(level : Int) -> Double {
  ((level - 1) * 16 + 32).to_double()
}

///|
fn Cat::get_merge_score(self : Cat) -> Int {
  @math.pow(2.0, self.level.to_double()).to_int()
}

///|
fn Cat::get_picture(self : Cat) -> Picture {
  Cat::get_picture_by_level(self.level)
}

///|
fn Cat::get_picture_by_level(level : Int) -> Picture {
  let size = Cat::get_size_by_level(level)
  let size_vec = Vec2D::new(size, size)
  Picture::new(size_vec, "assets/Memes/cat_lv\{level}_\{size}x\{size}.png")
}

///|
fn Cat::get_sound_path(self : Cat) -> String {
  Cat::get_sound_path_by_level(self.level)
}

///|
fn Cat::get_sound_path_by_level(level : Int) -> String {
  "assets/Sounds/merge_lv\{level}.wav"
}

///|
fn Cat::get_collision_layer(self : Cat) -> CollisionLayer {
  let level = self.level
  match level {
    1..<10 => cat_collision_layers[level - 1]
    _ => cat_collision_layers[0]
  }
}

///|
fn Cat::get_collision_mask_layers(self : Cat) -> Array[CollisionLayer] {
  // let layers = Array::new()
  // layers.push(terrain_collision_layer)
  // for i = 0; i < cat_collision_layers.length(); i = i + 1 {
  //   // Corrected logic: Add all layers EXCEPT the current cat's own level.
  //   if i != self.level - 1 {
  //     layers.push(cat_collision_layers[i])
  //   }
  // }
  // layers
  let layers = [terrain_collision_layer]
  layers.push_iter(cat_collision_layers.iter())
  layers
}
