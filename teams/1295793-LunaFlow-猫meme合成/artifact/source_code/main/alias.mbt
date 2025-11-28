///|
using @hashset {type HashSet}

///|
using @hashmap {type HashMap}

///|
using @selenemath {type Vec2D}

///|
using @system {type Code, type Entity, type MouseButton, trait Backend}

///|
using @system {is_pressed, is_just_pressed}

///|
using @velocity {type Velocity, velocities as global_velocity}

///|
using @position {type Position, positions as global_position}

///|
using @acceleration {type Acceleration, accelerations as global_acceleration}

///|
using @sprite {
  type Sprite,
  type Text,
  type Picture,
  type Animation,
  sprites as global_sprite,
}

///|
using @collision {
  type Collide,
  type CollisionLayer,
  type CollisionMask,
  type CollisionShape,
  type Area,
  collides as global_collide,
  areas as global_area,
}

///|
pub let ptr_entity : Entity = game_state.pointer_entity
