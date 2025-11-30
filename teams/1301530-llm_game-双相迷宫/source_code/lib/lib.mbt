// dual_maze_phase lib — MoonBit implementation (non-identical dual worlds)
const DIR_UP : Int = 0
const DIR_RIGHT : Int = 1
const DIR_DOWN : Int = 2
const DIR_LEFT : Int = 3
const WORLDS : Int = 2
const W : Int = 11
const H : Int = 11

let tiles : Array[Int] = Array::make(WORLDS * W * H, 0)
let px : Array[Int] = Array::make(WORLDS, 0)
let py : Array[Int] = Array::make(WORLDS, 0)
let sx : Array[Int] = Array::make(WORLDS, 0)
let sy : Array[Int] = Array::make(WORLDS, 0)

let phase : Ref[Int] = { val: 0 }
let moves : Ref[Int] = { val: 0 }
let win : Ref[Int] = { val: 0 }
let level : Ref[Int] = { val: 0 }

fn idx(w : Int, x : Int, y : Int) -> Int { w * W * H + y * W + x }
fn passable(t : Int) -> Bool { t == 0 || t == 2 || (t == 3 && phase.val == 1) }
fn clamp_level(id : Int) -> Int { if id < 0 { 0 } else if id > 7 { 7 } else { id } }

// ===== tile helpers (per world) =====
fn set_tile(w : Int, x : Int, y : Int, v : Int) -> Unit { tiles[idx(w, x, y)] = v }
fn set_wall(w : Int, x : Int, y : Int) -> Unit { set_tile(w, x, y, 1) }
fn set_goal(w : Int, x : Int, y : Int) -> Unit { set_tile(w, x, y, 2) }
fn set_phase(w : Int, x : Int, y : Int) -> Unit { set_tile(w, x, y, 3) }
fn set_start(w : Int, x : Int, y : Int) -> Unit { sx[w] = x; sy[w] = y }

fn clear_with_border_world(w : Int) -> Unit {
  let mut y = 0
  while y < H {
    let mut x = 0
    while x < W {
      if y == 0 || y == H - 1 || x == 0 || x == W - 1 { set_wall(w, x, y) } else { set_tile(w, x, y, 0) }
      x = x + 1
    }
    y = y + 1
  }
}

// ===== Non-identical dual-world levels =====
fn load_pair_L0() -> Unit {
  // World 0: corridor with phase gates; goal at (9,1)
  clear_with_border_world(0)
  set_start(0, 1, 1)
  set_phase(0, 3, 1); set_phase(0, 5, 1); set_phase(0, 7, 1)
  set_goal(0, 9, 1)
  // World 1: different gates; small block at (6,2)
  clear_with_border_world(1)
  set_start(1, 1, 1)
  set_phase(1, 4, 1); set_phase(1, 6, 1)
  set_wall(1, 6, 2)
  set_goal(1, 9, 1)
}

fn load_pair_L1() -> Unit {
  // World 0: pillars at x=3,5 with phase openings; goal at (9,5)
  clear_with_border_world(0)
  set_start(0, 1, 1)
  let mut y = 2
  while y <= 8 { set_wall(0, 3, y); y = y + 2 }
  y = 3
  while y <= 7 { set_wall(0, 5, y); y = y + 2 }
  set_phase(0, 3, 1); set_phase(0, 3, 5); set_phase(0, 5, 7)
  set_goal(0, 9, 5)
  // World 1: pillars shifted to x=4,6 with different phase; same goal
  clear_with_border_world(1)
  set_start(1, 1, 1)
  y = 2
  while y <= 8 { set_wall(1, 4, y); y = y + 2 }
  y = 3
  while y <= 7 { set_wall(1, 6, y); y = y + 2 }
  set_phase(1, 4, 3); set_phase(1, 6, 5); set_phase(1, 6, 7)
  set_goal(1, 9, 5)
}

fn load_pair_L2() -> Unit {
  // World 0: zigzag with phases; goal (9,7)
  clear_with_border_world(0)
  set_start(0, 1, 1)
  set_wall(0, 2, 2); set_wall(0, 3, 2); set_phase(0, 4, 2)
  set_wall(0, 6, 3); set_phase(0, 7, 3)
  set_wall(0, 5, 4); set_phase(0, 5, 5)
  set_wall(0, 3, 6); set_phase(0, 4, 6); set_phase(0, 6, 6)
  set_goal(0, 9, 7)
  // World 1: complementary zigzag
  clear_with_border_world(1)
  set_start(1, 1, 1)
  set_phase(1, 2, 2); set_wall(1, 4, 2)
  set_phase(1, 6, 3); set_wall(1, 7, 3)
  set_phase(1, 5, 4); set_wall(1, 5, 5)
  set_phase(1, 3, 6); set_wall(1, 4, 6); set_wall(1, 6, 6)
  set_goal(1, 9, 7)
}

fn setupLevel(id : Int) -> Unit {
  let lid = clamp_level(id)
  level.val = lid; win.val = 0; moves.val = 0; phase.val = 0
  if lid == 0 { load_pair_L0() } else if lid == 1 { load_pair_L1() } else { load_pair_L2() }
  let mut w = 0
  while w < WORLDS { px[w] = sx[w]; py[w] = sy[w]; w = w + 1 }
}

pub fn init_game(levelId : Int) -> Unit { setupLevel(levelId) }
pub fn restart() -> Unit { setupLevel(level.val) }
pub fn next_level() -> Int { let nl = level.val + 1; if nl > 7 { 0 } else { setupLevel(nl); 1 } }

pub fn toggle_phase() -> Unit { phase.val = phase.val ^ 1 }

pub fn step(dir : Int) -> Int {
  if win.val == 1 { 2 } else {
    let mut moved = false
    let mut w = 0
    while w < WORLDS {
      let mut nx = px[w]
      let mut ny = py[w]
      if dir == DIR_UP { ny = ny - 1 }
      else if dir == DIR_DOWN { ny = ny + 1 }
      else if dir == DIR_LEFT { nx = nx - 1 }
      else { nx = nx + 1 }
      if nx >= 0 && nx < W && ny >= 0 && ny < H {
        let t = tiles[idx(w, nx, ny)]
        if passable(t) { px[w] = nx; py[w] = ny; moved = true }
      }
      w = w + 1
    }
    if moved { moves.val = moves.val + 1 }
    let mut ok = true
    let mut k = 0
    while k < WORLDS {
      if tiles[idx(k, px[k], py[k])] != 2 { ok = false }
      k = k + 1
    }
    if ok { win.val = 1; 2 } else { if moved { 1 } else { 0 } }
  }
}

pub fn get_w() -> Int { W }
pub fn get_h() -> Int { H }
pub fn get_moves() -> Int { moves.val }
pub fn get_phase() -> Int { phase.val }
pub fn get_level() -> Int { level.val }
pub fn get_levels() -> Int { 8 }
pub fn get_tile(world : Int, x : Int, y : Int) -> Int { tiles[idx(world, x, y)] }
pub fn get_px(world : Int) -> Int { px[world] }
pub fn get_py(world : Int) -> Int { py[world] }
pub fn is_win() -> Int { win.val }

fn load_pair_L3() -> Unit {
  // World 0: long corridor phases at 2,4,6,8; goal at (9,1)
  clear_with_border_world(0)
  set_start(0, 1, 1)
  set_phase(0, 2, 1); set_phase(0, 4, 1); set_phase(0, 6, 1); set_phase(0, 8, 1)
  set_goal(0, 9, 1)
  // World 1: offset phases at 3,5,7 and a blocker near (7,2)
  clear_with_border_world(1)
  set_start(1, 1, 1)
  set_phase(1, 3, 1); set_phase(1, 5, 1); set_phase(1, 7, 1)
  set_wall(1, 7, 2)
  set_goal(1, 9, 1)
}

fn load_pair_L4() -> Unit {
  // World 0: must drop to row 2 to bypass hard walls at 3,6 using phase gates on row 2
  clear_with_border_world(0)
  set_start(0, 1, 1)
  set_wall(0, 3, 1); set_wall(0, 6, 1)
  set_phase(0, 3, 2); set_phase(0, 6, 2); set_phase(0, 7, 2)
  set_goal(0, 9, 2)
  // World 1: complementary pattern with different columns
  clear_with_border_world(1)
  set_start(1, 1, 1)
  set_wall(1, 4, 1); set_wall(1, 7, 1)
  set_phase(1, 4, 2); set_phase(1, 5, 2); set_phase(1, 8, 2)
  set_goal(1, 9, 2)
}
fn load_pair_L5() -> Unit {
  // World 0: top route blocked; must go down then right with phase windows
  clear_with_border_world(0)
  set_start(0,1,1)
  set_wall(0,3,1); set_wall(0,4,1); set_wall(0,5,1)
  set_phase(0,3,2); set_phase(0,6,2)
  set_wall(0,6,3); set_phase(0,7,3)
  set_wall(0,8,4); set_phase(0,8,5)
  set_goal(0,9,6)
  // World 1: mirrored difficulty with different offsets
  clear_with_border_world(1)
  set_start(1,1,1)
  set_wall(1,2,1); set_wall(1,5,1)
  set_phase(1,2,2); set_phase(1,5,2); set_phase(1,7,2)
  set_wall(1,7,3); set_phase(1,8,3)
  set_goal(1,9,6)
}

fn load_pair_L6() -> Unit {
  // World 0: staircase corridor requiring weaving + phases
  clear_with_border_world(0)
  set_start(0,1,1)
  set_wall(0,2,2); set_wall(0,3,3); set_wall(0,4,4); set_wall(0,5,5)
  set_phase(0,3,2); set_phase(0,4,3); set_phase(0,5,4)
  set_wall(0,7,5); set_phase(0,7,6)
  set_goal(0,9,7)
  // World 1: complementary staircase
  clear_with_border_world(1)
  set_start(1,1,1)
  set_wall(1,2,3); set_wall(1,3,4); set_wall(1,4,5)
  set_phase(1,2,2); set_phase(1,3,3); set_phase(1,4,4)
  set_wall(1,6,6); set_phase(1,6,7)
  set_goal(1,9,7)
}

fn load_pair_L7() -> Unit {
  // World 0: long alternating gates; need multiple Q toggles with decoupling
  clear_with_border_world(0)
  set_start(0,1,1)
  set_phase(0,2,1); set_wall(0,3,1); set_phase(0,4,1); set_wall(0,5,1); set_phase(0,6,1); set_wall(0,7,1); set_phase(0,8,1)
  set_phase(0,8,2); set_wall(0,7,2)
  set_goal(0,9,1)
  // World 1: offset pattern forces different toggle timing
  clear_with_border_world(1)
  set_start(1,1,1)
  set_wall(1,2,1); set_phase(1,3,1); set_wall(1,4,1); set_phase(1,5,1); set_wall(1,6,1); set_phase(1,7,1)
  set_phase(1,7,2); set_wall(1,6,2)
  set_goal(1,9,1)
}