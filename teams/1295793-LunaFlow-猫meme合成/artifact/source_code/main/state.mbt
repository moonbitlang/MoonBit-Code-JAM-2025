///|
struct GameState {
  pointer_entity : Entity
  mut pointer_sprite : Sprite
  mut score : Int
  score_bar : Text
  mut next_cat_level : Int
  to_merge : HashSet[(Entity, Entity)]
  mut background_music_started : Bool
  cats_clicked : HashSet[Entity]
}

///|
/// Game state initialization
let game_state : GameState = {
  pointer_entity: Entity::new(),
  pointer_sprite: Sprite::new_picture(
    Cat::get_picture_by_level(1),
    ZINDEX_FOR_POINTER,
  ),
  score: INIT_SCORE,
  score_bar: Text::new("", font="60px ThaleahFat", color="White"),
  next_cat_level: 1,
  to_merge: HashSet::new(),
  background_music_started: false,
  cats_clicked: HashSet::new(),
}

///|
let cats_by_entity : HashMap[Entity, Cat] = HashMap::new()

///|
let pointer_collision_layer : CollisionLayer = CollisionLayer::new()

///|
let terrain_collision_layer : CollisionLayer = CollisionLayer::new()

///|
let teleport_queue : HashSet[Cat] = HashSet::new()

///|
let cat_collision_layers : Array[CollisionLayer] = [
  CollisionLayer::new(), // level 1
  CollisionLayer::new(), // level 2
  CollisionLayer::new(), // level 3
  CollisionLayer::new(), // level 4
  CollisionLayer::new(), // level 5
  CollisionLayer::new(), // level 6
  CollisionLayer::new(), // level 7
  CollisionLayer::new(), // level 8
  CollisionLayer::new(), // level 9
]
