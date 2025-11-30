///|
pub struct Path {
  id : Int
  mut points : Array[@Point.PathPoint]
}

///|
pub struct MapPath {
  mut paths : Array[Path]
}

///|
pub fn MapPath::new() -> MapPath {
  MapPath::{ paths: Array::new() }
}

///|
let mapPathInstance : Ref[MapPath?] = Ref::new(None)

///|
pub let mapPathSingleton : MapPath = MapPath::get_instance()

///|
pub fn MapPath::get_instance() -> MapPath {
  match mapPathInstance.val {
    Some(p) => p
    None => {
      let new_instance = MapPath::new()
      mapPathInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn MapPath::set_path(self : MapPath, paths : Array[Path]) -> Unit {
  self.paths = paths
}

///|
pub fn MapPath::add_path(
  self : MapPath,
  path_id : Int,
  points : Array[@Point.PathPoint],
) -> Unit {
  // Check if path already exists
  for i in 0..<self.paths.length() {
    if self.paths[i].id == path_id {
      // Update existing path
      self.paths[i].points = points
      return
    }
  }
  // Add new path
  self.paths.push(Path::{ id: path_id, points })
}

///|
pub fn MapPath::get_path(
  self : MapPath,
  path_id : Int,
) -> Array[@Point.PathPoint]? {
  for i in 0..<self.paths.length() {
    if self.paths[i].id == path_id {
      return Some(self.paths[i].points)
    }
  }
  None
}

///|
pub fn MapPath::get_all_paths(self : MapPath) -> Array[Path] {
  self.paths
}

///|
pub fn set_path_by_level(level : Int) -> Unit {
  let map_path = MapPath::get_instance()
  let mc = get_map_by_level(level)
  let mut paths = []
  for e in mc.enemy_path_waves {
    let pid = e.path_id
    let points = e.points
    paths = paths + [{ id: pid, points }]
  }
  // let paths = [
  //   {
  //     id: 1,
  //     points: [
  //       { x: 1, y: 1, is_jump_point: false },
  //       { x: 10, y: 1, is_jump_point: false },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     points: [
  //       { x: 1, y: 5, is_jump_point: false },
  //       { x: 10, y: 5, is_jump_point: false },
  //     ],
  //   },
  // ]
  map_path.set_path(paths)

  // flag the jump point and make the map placed
  for path in map_path.paths {
    let points = path.points
    // Mark jump points in path 1
    for i in 1..<points.length() {
      let prev = points[i - 1]
      let cur = points[i]
      if prev.x != cur.x && prev.y != cur.y && !cur.is_jump_point {
        cur.is_jump_point = true
      }
      // 横线
      if prev.y == cur.y {
        for x in prev.x.to_int()..=cur.x.to_int() {
          map_grid_system_singleton.placed_path(x, cur.y.to_int()) |> ignore
        }
      }
      // 竖线
      if prev.x == cur.x {
        for y in prev.y.to_int()..=cur.y.to_int() {
          map_grid_system_singleton.placed_path(cur.x.to_int(), y) |> ignore
        }
      }
    }
    // for p in m.points {
    //   map_grid_system_singleton.placed(p.x.to_int(), p.y.to_int()) |> ignore
    // }
  }
}

///|
fn init {
  set_path_by_level(1)
}
