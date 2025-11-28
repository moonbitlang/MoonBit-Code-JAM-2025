
// moon clean
// moon build --target wasm-gc
// npx wasm4 run target/wasm-gc/release/build/moonfighter.wasm


// ===== 玩家结构体 =====
struct Player {
    mut x: Int
    y: Int
}
pub fn Player::new() -> Player {
  {x : 76, y : 140 }
}

pub fn move_left(self : Player) -> Unit{
  if self.x > 0 {
      self.x = self.x - 2
  }
}

pub fn move_right(self : Player) -> Unit{
  if self.x < 152 {
      self.x = self.x + 2
  }
}

// pub fn draw(self : Player) -> Unit{
//   @wasm4.set_draw_colors(1)
//   // 绘制三角形战机 ▲
//   @wasm4.line(self.x + 4, self.y, self.x, self.y + 8)
//   @wasm4.line(self.x + 4, self.y, self.x + 8, self.y + 8)
//   @wasm4.line(self.x, self.y + 8, self.x + 8, self.y + 8)
// }
pub fn draw(self: Player)  -> Unit{
    @wasm4.set_draw_colors(1);
    
    // 假设self.x和self.y是飞船中心点的位置
    let x = self.x;
    let y = self.y;
    
    // 新的飞船设计：主体加两个尾翼
    // 主体部分
    @wasm4.line(x, y, x - 3, y + 8); // 左侧线
    @wasm4.line(x, y, x + 3, y + 8); // 右侧线
    @wasm4.line(x - 3, y + 8, x + 3, y + 8); // 底部连接线
    
    // 尾翼左
    @wasm4.line(x - 3, y + 8, x - 6, y + 5);
    @wasm4.line(x - 6, y + 5, x - 3, y + 2);
    @wasm4.line(x - 3, y + 2, x, y);
    
    // 尾翼右
    @wasm4.line(x + 3, y + 8, x + 6, y + 5);
    @wasm4.line(x + 6, y + 5, x + 3, y + 2);
    @wasm4.line(x + 3, y + 2, x, y);
}


pub fn get_center_x(self : Player) -> Int {
  self.x + 4
}

// ===== 子弹系统 =====
struct Bullet {
    mut x: Int
    mut y: Int
    mut active: Bool
}
pub fn Bullet::new() -> Bullet {
  { x: 0, y: 0, active: false }
}

pub fn fire(self: Bullet, x: Int, y: Int) -> Unit {
  self.x = x
  self.y = y
  self.active = true
}

pub fn Bullet::update(self: Bullet) -> Bool {
  if !self.active {
      return false
  }
  self.y = self.y - 3
  if self.y < -4 {
      self.active = false
      return false
  }
  // 绘制
  @wasm4.set_draw_colors(0b0001)
  @wasm4.rect(self.x, self.y, 2, 4)
  true
}

// ===== 敌机系统 =====
struct Enemy {
  mut x: Int
  mut y: Int
  mut active: Bool
}


pub fn Enemy::new() -> Enemy {
  { x: 0, y: -10, active: false }
}

pub fn spawn(self: Enemy, x: Int) -> Unit {
    self.x = x
    self.y = -10
    self.active = true
}

pub fn Enemy::update(self: Enemy) -> Bool {
  if !self.active {
      return false
  }
  self.y = self.y + 1
  if self.y > 160 {
      self.active = false
      return false
  }
  // 绘制敌机（红色）
  @wasm4.set_draw_colors(3)
  @wasm4.rect(self.x, self.y, 8, 8)
  true
}

pub fn collide_with(self: Enemy, other_x: Int, other_y: Int, w: Int, h: Int) -> Bool {
  return self.x < other_x + w && self.x + 8 > other_x &&
          self.y < other_y + h && self.y + 8 > other_y
}


// ===== 主游戏结构体 =====
struct Game {
  mut player: Player
  bullets: Array[Bullet]
  enemies: Array[Enemy]
  mut score: Int
  mut game_over: Bool
  mut frame_count: Int
}


pub fn Game::new() -> Game {
  let bullets: Array[Bullet] = [
      Bullet::new(), Bullet::new(), Bullet::new(), Bullet::new(),
      Bullet::new(), Bullet::new(), Bullet::new(), Bullet::new()
  ]
  let enemies: Array[Enemy] = [
      Enemy::new(), Enemy::new(), Enemy::new(),
      Enemy::new(), Enemy::new(), Enemy::new()
  ]
  {
      player: Player::new(),
      bullets: bullets,
      enemies: enemies,
      score: 0,
      game_over: false,
      frame_count: 0,
  }
}

pub fn Game::handle_input(self: Game) -> Unit {
  let pad = @wasm4.get_gamepad(index = 1)

  if pad.button_left {
      self.player.move_left()
  }
  if pad.button_right {
      self.player.move_right()
  }
  if pad.button_1 { // 或 button_2，看你设计
      // 发射子弹
      let px = self.player.get_center_x()
      let py = self.player.y
      let mut i = 0
      while i < 8 {
          if !self.bullets[i].active {
              self.bullets[i].fire(px, py)
              break
          }
          i = i + 1
      }
  }

  // 重启游戏（在 game over 时）
  if self.game_over && pad.button_1 {
      self.reset()
  }
}

pub fn update_entities(self: Game) -> Unit {
  // 更新子弹
  let mut i = 0
  while i < 8 {
    let _ = self.bullets[i].update() // 忽略返回值，或用于其他逻辑
    i = i + 1 // 👈 必须每次都递增！
  }

  // 更新敌机
  i = 0
  while i < 6 {
    if self.enemies[i].update() {
      // 检查子弹命中
      let mut j = 0
      while j < 8 {
          if self.bullets[j].active {
              if self.enemies[i].collide_with(
                  self.bullets[j].x, self.bullets[j].y, 2, 4
              ) {
                  self.bullets[j].active = false
                  self.enemies[i].active = false
                  self.score = self.score + 10
                  break
              }
          }
          j = j + 1
      }

      // 检查玩家碰撞
      if self.enemies[i].collide_with(self.player.x, self.player.y, 8, 8) {
          self.game_over = true
      }
    }
    i = i + 1
  }
}

pub fn spawn_enemy(self: Game) -> Unit {
  let mut i = 0
  while i < 6 {
    if !self.enemies[i].active {
      // 这里需要加入随机化
      let rand_x = (self.frame_count * 17) % 152
      self.enemies[i].spawn(rand_x)
      break
    }
    i = i + 1
  }
}

pub fn draw_ui(self: Game) -> Unit{
    @wasm4.text("SCORE:", 5, 5)
    @wasm4.text(self.score.to_string(), 60, 5)
}

pub fn reset(self: Game) -> Unit{
  self.player = Player::new()
  self.score = 0
  self.game_over = false
  self.frame_count = 0

  let mut i = 0
  while i < 8 {
      self.bullets[i] = Bullet::new()
      i = i + 1
  }
  i = 0
  while i < 6 {
      self.enemies[i] = Enemy::new()
      i = i + 1
  }
}
