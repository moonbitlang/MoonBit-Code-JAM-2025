///|
pub(all) enum Grid {
  Placed
  CanPlaceable
  Tower
  Enemy
  NeutralElement
  Path
}

///|
pub(all) struct MapGridSystem {
  mut grid : Array[Array[Grid]]
  mut tower : Array[&@Tower.Tower]
  mut enemy : Array[&@Enemy.Enemy]
  mut neutralElement : Array[&@NeutralElement.NeutralElement]
}

///|
let mapGridSystemInstance : Ref[MapGridSystem?] = Ref::new(None)

///|
pub let map_grid_system_singleton : MapGridSystem = MapGridSystem::get_instance()

///|
pub fn MapGridSystem::get_instance() -> MapGridSystem {
  match mapGridSystemInstance.val {
    Some(render) => render
    None => {
      let x = @Core.map.width.to_int() / @Core.map.gridSize.to_int()
      let y = @Core.map.height.to_int() / @Core.map.gridSize.to_int()
      let new_instance = MapGridSystem::default(x, y)
      // 第一行和最后一行不放
      for index = 0; index < x; index = index + 1 {
        new_instance.grid[y - 1][index] = Grid::Placed
        new_instance.grid[0][index] = Grid::Placed
      }
      mapGridSystemInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MapGridSystem::clear_all_towers(self : MapGridSystem) -> Unit {
  self.tower = Array::new()
  // Reset grid to can placeable state (except first and last row)
  for i = 1; i < self.grid.length() - 1; i = i + 1 {
    for j = 0; j < self.grid[i].length(); j = j + 1 {
      self.grid[i][j] = Grid::CanPlaceable
    }
  }
}

///|
pub fn MapGridSystem::default(width : Int, height : Int) -> MapGridSystem {
  let grid = Array::new()
  for i = 0; i < height; i = i + 1 {
    grid.push(Array::make(width, Grid::CanPlaceable))
  }
  MapGridSystem::{
    grid,
    tower: Array::new(),
    enemy: Array::new(),
    neutralElement: Array::new(),
  }
}

///|
pub fn MapGridSystem::placed(
  self : MapGridSystem,
  x : Int,
  y : Int,
) -> MapGridSystem {
  if self.grid.length() > 0 &&
    y >= 0 &&
    y < self.grid.length() &&
    x >= 0 &&
    x < self.grid[0].length() {
    self.grid[y][x] = Grid::Placed
  }
  self
}

///|
pub fn MapGridSystem::placed_path(
  self : MapGridSystem,
  x : Int,
  y : Int,
) -> MapGridSystem {
  if self.grid.length() > 0 &&
    y >= 0 &&
    y < self.grid.length() &&
    x >= 0 &&
    x < self.grid[0].length() {
    self.grid[y][x] = Grid::Path
  }
  self
}

///|
pub fn MapGridSystem::placed_enemy(
  self : MapGridSystem,
  x : Int,
  y : Int,
) -> MapGridSystem {
  if self.grid.length() > 0 &&
    y >= 0 &&
    y < self.grid.length() &&
    x >= 0 &&
    x < self.grid[0].length() {
    self.grid[y][x] = Grid::Enemy
  }
  self
}

///|
pub fn MapGridSystem::placed_tower(
  self : MapGridSystem,
  x : Int,
  y : Int,
) -> MapGridSystem {
  if self.grid.length() > 0 &&
    y >= 0 &&
    y < self.grid.length() &&
    x >= 0 &&
    x < self.grid[0].length() {
    self.grid[y][x] = Grid::Tower
  }
  self
}

///|
pub fn MapGridSystem::placed_neutral_element(
  self : MapGridSystem,
  x : Int,
  y : Int,
) -> MapGridSystem {
  if self.grid.length() > 0 &&
    y >= 0 &&
    y < self.grid.length() &&
    x >= 0 &&
    x < self.grid[0].length() {
    self.grid[y][x] = Grid::NeutralElement
  }
  self
}

///|
pub fn MapGridSystem::freed(
  self : MapGridSystem,
  x : Int,
  y : Int,
) -> MapGridSystem {
  if self.grid.length() > 0 &&
    y >= 0 &&
    y < self.grid.length() &&
    x >= 0 &&
    x < self.grid[0].length() {
    self.grid[y][x] = Grid::CanPlaceable
  }
  self
}

///|
pub fn MapGridSystem::is_placed(self : MapGridSystem, x : Int, y : Int) -> Bool {
  if self.grid.length() > 0 &&
    y >= 0 &&
    y < self.grid.length() &&
    x >= 0 &&
    x < self.grid[0].length() {
    match self.grid[y][x] {
      Placed | Tower | NeutralElement | Path | Enemy => true
      CanPlaceable => false
    }
  } else {
    false
  }
}

///|
pub fn MapGridSystem::to_1_base_map(
  _self : MapGridSystem,
  point : @Point.BasePoint,
) -> @Point.BasePoint {
  let base1X = (point.x / @Core.map.gridSize).to_int()
  let base1Y = (point.y / @Core.map.gridSize).to_int()
  @Point.BasePoint::new(x=base1X.to_double(), y=base1Y.to_double())
}

///|
test "to_base_point" {
  let _p = map_grid_system_singleton.to_base_point(
    @Point.PixelPoint::new(x=100.0, y=100.0),
  )
  // println(p.x)
  // println(p.y)
}

///|
pub fn MapGridSystem::to_base_point(
  _self : MapGridSystem,
  point : @Point.PixelPoint,
) -> @Point.BasePoint {
  let base1X = (point.x / @Core.map.gridSize).to_int()
  let base1Y = (point.y / @Core.map.gridSize).to_int()
  @Point.BasePoint::new(x=base1X.to_double(), y=base1Y.to_double())
}

///|
pub fn MapGridSystem::to_pixel_point(
  _self : MapGridSystem,
  point : @Point.BasePoint,
) -> @Point.BasePoint {
  let base1X = (point.x / @Core.map.gridSize).to_int()
  let base1Y = (point.y / @Core.map.gridSize).to_int()
  @Point.BasePoint::new(x=base1X.to_double(), y=base1Y.to_double())
}

///|
pub fn MapGridSystem::tower2pixel(
  _self : MapGridSystem,
  point : @Point.TowerPoint,
) -> @Point.PixelPoint {
  @Point.PixelPoint::new(x=point.x, y=point.y)
}

///|
pub fn MapGridSystem::pixel2tower(
  _self : MapGridSystem,
  point : @Point.PixelPoint,
) -> @Point.TowerPoint {
  let towerX = (@math.floor(point.x / @Core.map.gridSize) + 0.5) *
    @Core.map.gridSize
  let towerY = (@math.floor(point.y / @Core.map.gridSize) + 0.5) *
    @Core.map.gridSize
  @Point.TowerPoint::new(x=towerX, y=towerY)
}

///|
pub fn MapGridSystem::pixel2cent(
  _self : MapGridSystem,
  point : @Point.PixelPoint,
) -> (Double, Double) {
  let cx = (@math.floor(point.x / @Core.map.gridSize) + 0.5) *
    @Core.map.gridSize
  let cy = (@math.floor(point.y / @Core.map.gridSize) + 0.5) *
    @Core.map.gridSize
  (cx, cy)
}

///|
pub fn MapGridSystem::base2tower_point(
  _self : MapGridSystem,
  point : @Point.BasePoint,
) -> @Point.PixelPoint {
  @Point.PixelPoint::new(
    x=(point.x + 0.5) * @Core.map.gridSize,
    y=(point.y + 0.5) * @Core.map.gridSize,
  )
}

///|
// pub fn MapGridSystem::to_tower_position(
//   self : MapGridSystem,
//   point : @Point.BasePoint,
// ) -> @Point.BasePoint {
//   self.to_logic_map(point)
// }

// why enemy draw diff path

///|
pub fn MapGridSystem::to_enemy_position(
  _self : MapGridSystem,
  point : @Point.BasePoint,
) -> @Point.BasePoint {
  @Point.BasePoint::new(
    x=(point.x + 0.5) * @Core.map.gridSize,
    y=(point.y + 0.5) * @Core.map.gridSize,
  )
}
