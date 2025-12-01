//|

///|
pub(all) struct Game {
  rows : Int
  cols : Int
  map : Array[Array[Bool]]
}

///|
let game : Game = Game::{
  rows: 3,
  cols: 3,
  // map: [[false, false, false], [false, false, false], [false, false, false]],
  map: [[false, false, false], [false, false, true], [false, true, true]],
}

///|

///|
fn random() -> Float = "lib" "random"

///|
pub fn is_win() -> Bool {
  for i = 0; i < game.rows; i = i + 1 {
    for j = 0; j < game.cols; j = j + 1 {
      if game.map[i][j] {
        return false
      }
    }
  } else {
    true
  }
}

///|
pub fn randomize() -> Array[Array[Bool]] {
  for i = 0; i < game.rows; i = i + 1 {
    for j = 0; j < game.cols; j = j + 1 {
      game.map[i][j] = random() > 0.5
    }
  } else {
    game.map
  }
}

///|
/// 翻转指定位置及其邻居
pub fn toggle(r : Int, c : Int) -> Unit {
  let dirs = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]]
  for i = 0; i < dirs.length(); i = i + 1 {
    let dr = dirs[i][0]
    let dc = dirs[i][1]
    let nr = r + dr
    let nc = c + dc
    if nr >= 0 && nr < game.rows && nc >= 0 && nc < game.cols {
      game.map[nr][nc] = !game.map[nr][nc]
    }
  }
}

///|
fn init {
  randomize() |> ignore()
}

///|
pub fn map00() -> Bool {
  game.map[0][0]
}

///|
pub fn map01() -> Bool {
  game.map[0][1]
}

///|
pub fn map02() -> Bool {
  game.map[0][2]
}

///|
pub fn map10() -> Bool {
  game.map[1][0]
}

///|
pub fn map11() -> Bool {
  game.map[1][1]
}

///|
pub fn map12() -> Bool {
  game.map[1][2]
}

///|
pub fn map20() -> Bool {
  game.map[2][0]
}

///|
pub fn map21() -> Bool {
  game.map[2][1]
}

///|
pub fn map22() -> Bool {
  game.map[2][2]
}

///|
pub fn map() -> Array[Array[Bool]] {
  game.map
}

///|
pub fn rows() -> Int {
  game.rows
}

///|
pub fn cols() -> Int {
  game.cols
}
