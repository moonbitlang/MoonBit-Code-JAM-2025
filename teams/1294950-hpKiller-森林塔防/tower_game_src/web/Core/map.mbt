///|
pub struct Map {
  width : Double
  height : Double
  gridSize : Double
}

///|
pub fn Map::map_config() -> Map {
  match instance.val {
    Some(v) => v
    None => {
      let new_instance = Map::new()
      instance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn Map::new() -> Map {
  { width: 1280, height: 720, gridSize: 80 }

  // map_config()
}

///|
pub let instance : Ref[Map?] = Ref::new(None)

///|
pub let map : Map = Map::map_config()

///|
fn init {

}
