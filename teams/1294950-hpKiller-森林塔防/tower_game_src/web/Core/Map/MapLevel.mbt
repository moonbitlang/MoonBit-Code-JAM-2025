///|
struct MapLevel {
  mut cur_level : Int
  mut map_name : String
}

///|
pub fn MapLevel::new() -> MapLevel {
  MapLevel::{ cur_level: 1, map_name: "map1" }
}

///|
let mapLevelInstance : Ref[MapLevel?] = Ref::new(None)

///|
pub let mapLevelSingleton : MapLevel = MapLevel::get_instance()

///|
pub fn MapLevel::get_instance() -> MapLevel {
  match mapLevelInstance.val {
    Some(render) => render
    None => {
      let new_instance = MapLevel::new()
      mapLevelInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MapLevel::set_cur_level(self : MapLevel, level : Int) -> Unit {
  ignore(self)
  self.cur_level = level
}

///|
pub fn MapLevel::get_cur_level(self : MapLevel) -> Int {
  ignore(self)
  self.cur_level
}

///|
pub fn MapLevel::get_cur_map_name(self : MapLevel) -> String {
  ignore(self)
  self.map_name
}

///|
pub fn MapLevel::set_cur_map_name(self : MapLevel, name : String) -> Unit {
  ignore(self)
  self.map_name = name
}

///|
fn init {

}
