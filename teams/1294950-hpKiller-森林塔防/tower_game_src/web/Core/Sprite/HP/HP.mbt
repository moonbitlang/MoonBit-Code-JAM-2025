///|
pub(all) struct HP {
  mut hp : Double
  mut max_hp : Double
}

///|
pub fn HP::new() -> HP {
  HP::{ hp: 3, max_hp: 3 }
}

///|
let hPInstance : Ref[HP?] = Ref::new(None)

///|
pub let hPSingleton : HP = HP::get_instance()

///|
pub fn HP::get_instance() -> HP {
  match hPInstance.val {
    Some(render) => render
    None => {
      let new_instance = HP::new()
      hPInstance.val = Some(new_instance)
      new_instance
    }
  }
}
