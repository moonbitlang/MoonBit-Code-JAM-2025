///|
const VIEWPORT_WIDTH : Double = 560.0

///|
const VIEWPORT_HEIGHT : Double = 432.0

///|
/// 尺寸与资源常量
const PLAYER_W : Double = 32.0

///|
const PLAYER_H : Double = 32.0

///|
const ENEMY_W : Double = 32.0

///|
const ENEMY_H : Double = 32.0

///|
// 已拆分为 PLAYER_BULLET_W/H 与 ENEMY_BULLET_W/H

///|
/// 子弹尺寸（可分别自定义）
const PLAYER_BULLET_W : Double = 16.0
const PLAYER_BULLET_H : Double = 16.0
const ENEMY_BULLET_W : Double = 16.0  // 改这里即可自定义敌方弹幕宽度
const ENEMY_BULLET_H : Double = 16.0  // 改这里即可自定义敌方弹幕高度

///|
const ENEMY_Y : Double = 64.0

///|
const UI_Z : Int = 10000

///|
/// 子弹贴图资源（同一图集，通过 offset 裁切不同区域）
const PLAYER_BULLET_IMAGE : String = "pixel_adventure/Other/Confetti (16x16).png"
const ENEMY_BULLET_IMAGE : String = "pixel_adventure/Other/Confetti (16x16).png"

///|
/// 运动/冷却常量
const PLAYER_MOVE_SPEED : Double = 3.0

///|
const ENEMY_SPEED : Double = 1.5

///|
const ENEMY_BULLET_SPEED : Double = 2.5

///|
/// 对角单位向量归一系数（1/sqrt(2)）
const DIAG_NORM : Double = 0.70710678

///|
const PLAYER_SHOOT_CD_TICKS : Int = 10

///|
const ENEMY_SHOOT_CD_TICKS : Int = 30

///|
const INVINCIBLE_TICKS : Int = 60

///|
/// 技能：环形弹幕 + 清屏
const SKILL_COOLDOWN_TICKS : Int = 1200  // 10 秒 @120 FPS
const SKILL_BURST_COUNT : Int = 16       // 环形弹幕发射数量
const SKILL_BURST_SPEED : Double = 5.0   // 环形弹幕速度
const SKILL_ICON_PATH : String = "pixel_adventure/Menu/Buttons/Restart.png" // 临时占位

///|
/// 游戏阶段
const PHASE_START : Int = 0

///|
const PHASE_PLAYING : Int = 1

///|
const PHASE_GAME_OVER : Int = 2
///|
const PHASE_VICTORY : Int = 3

///|
/// 难度枚举
const DIFF_EASY : Int = 0
const DIFF_NORMAL : Int = 1
const DIFF_HARD : Int = 2

///|
/// 玩家子弹速度
const PLAYER_BULLET_SPEED : Double = 6.0

///|
/// 子弹所属方常量
const OWNER_PLAYER : Int = 1

///|
const OWNER_ENEMY : Int = 2

///|
// 简单的全局游戏状态，记录玩家实体与若干计数器
struct GameState {
  mut player : @system.Entity
  mut shoot_cooldown : Int
  mut hp : Int
  mut hp_ui : @system.Entity
  mut invincible_ticks : Int
  mut enemy : @system.Entity
  mut enemy_shoot_cd : Int
  mut phase : Int
  mut start_ui : @system.Entity
  mut gameover_ui : @system.Entity
  mut start_tip_ui : @system.Entity
  mut gameover_tip_ui : @system.Entity
  mut victory_ui : @system.Entity
  mut victory_tip_ui : @system.Entity
  // 关卡选择 UI 与状态
  mut level_ui0 : @system.Entity
  mut level_ui1 : @system.Entity
  mut level_ui2 : @system.Entity
  mut level_index : Int
  mut input_cd : Int
  mut block_enter_until_release : Bool
  // Game Over 菜单：重开或返回关卡选择
  mut go_ui0 : @system.Entity
  mut go_ui1 : @system.Entity
  mut gameover_index : Int
  // 硬核弹幕形态切换（预留）
  mut hard_pattern_toggle : Bool
  // 当前难度参数（随选择覆盖）
  mut current_enemy_hp : Int
  mut current_enemy_speed : Double
  mut current_enemy_bullet_speed : Double
  mut current_enemy_shoot_cd : Int
  // 玩家技能
  mut skill_cd : Int
  mut skill_icon : @system.Entity
  mut skill_ready_fx : @system.Entity
}

///|
let game_state : GameState = GameState::{
  player: @system.Entity::new(),
  shoot_cooldown: 0,
  hp: 3,
  hp_ui: @system.Entity::new(),
  invincible_ticks: 0,
  enemy: @system.Entity::new(),
  enemy_shoot_cd: 0,
  phase: PHASE_START,
  start_ui: @system.Entity::new(),
  gameover_ui: @system.Entity::new(),
  start_tip_ui: @system.Entity::new(),
  gameover_tip_ui: @system.Entity::new(),
  victory_ui: @system.Entity::new(),
  victory_tip_ui: @system.Entity::new(),
  level_ui0: @system.Entity::new(),
  level_ui1: @system.Entity::new(),
  level_ui2: @system.Entity::new(),
  level_index: DIFF_NORMAL,
  input_cd: 0,
  block_enter_until_release: false,
  go_ui0: @system.Entity::new(),
  go_ui1: @system.Entity::new(),
  gameover_index: 0,
  hard_pattern_toggle: false,
  current_enemy_hp: 100,
  current_enemy_speed: ENEMY_SPEED,
  current_enemy_bullet_speed: ENEMY_BULLET_SPEED,
  current_enemy_shoot_cd: ENEMY_SHOOT_CD_TICKS,
  skill_cd: 0,
  skill_icon: @system.Entity::new(),
  skill_ready_fx: @system.Entity::new(),
}

///|
/// 通用工具：AABB 碰撞检测（基于坐标与尺寸）
fn aabb_overlap(
  ax : Double,
  ay : Double,
  aw : Double,
  ah : Double,
  bx : Double,
  by : Double,
  bw : Double,
  bh : Double,
) -> Bool {
  !(bx + bw < ax || bx > ax + aw || by + bh < ay || by > ay + ah)
}

///|
/// 将位置夹紧在画布内（读取 Position，返回 Vec2D）
fn clamp_position(
  pos : @position.Position,
  w : Double,
  h : Double,
) -> @math.Vec2D {
  let nx = if pos.x < 0.0 {
    0.0
  } else if pos.x > VIEWPORT_WIDTH - w {
    VIEWPORT_WIDTH - w
  } else {
    pos.x
  }
  let ny = if pos.y < 0.0 {
    0.0
  } else if pos.y > VIEWPORT_HEIGHT - h {
    VIEWPORT_HEIGHT - h
  } else {
    pos.y
  }
  @math.Vec2D::new(nx, ny)
}

///|
/// 获取敌人生命（无则为0）
fn get_enemy_hp(e : @system.Entity) -> Int {
  match enemy_hps.get(e) {
    Some(hp) => hp
    None => 0
  }
}

///|
/// 是否为子弹以及其所有者
fn get_bullet_owner(e : @system.Entity) -> Int? {
  bullet_owners.get(e)
}

///|
/// 子弹所有者映射（用于避免自伤等逻辑）
let bullet_owners : Map[@system.Entity, Int] = Map::new()

///|
/// 敌人生命值映射（存在即为敌人标签）
let enemy_hps : Map[@system.Entity, Int] = Map::new()

///|
/// 已命中目标的子弹集合（防止一颗子弹造成多次伤害）
let hit_bullets : Map[@system.Entity, Bool] = Map::new()

///|
fn main {
  @system.App::new(@canvas.CanvasBackend::new())
  .with_canvas_width(VIEWPORT_WIDTH)
  .with_canvas_height(VIEWPORT_HEIGHT)
  .add_initializer(game_start)
  .with_fps(120)
  .add_system(player_input_system)
  .add_system(player_damage_system)
  .add_system(enemy_ai_system)
  .add_system(enemy_hit_system)
  .add_system(cleanup_system)
  .add_plugin(@plugins.default_plugin)
  .run()
}

///|
fn game_start(_backend : &@system.Backend) -> Unit {
  game_state.phase = PHASE_START
  show_start_ui()
}

///|
fn add_player() -> Unit {
  let entity : @system.Entity = @system.Entity::new()
  // 玩家初始放在画面底部中央
  let position : @math.Vec2D = @math.Vec2D::new(
    (VIEWPORT_WIDTH - PLAYER_W) / 2.0,
    VIEWPORT_HEIGHT - (PLAYER_H + 16.0),
  )
  @position.positions[entity] = position
  // 初始化速度组件为 (0, 0)
  @velocity.velocities[entity] = @math.Vec2D::new(0.0, 0.0)
  let animation : @sprite.Animation = @sprite.Animation::new(
    "pixel_adventure/Main Characters/Mask Dude/Idle (32x32).png",
    max_frame=11,
    height=PLAYER_H,
    width=PLAYER_W,
    loop_=true,
  )
  let sprite : @sprite.Sprite = @sprite.Sprite::new_animation(animation, 10)
  @sprite.sprites[entity] = sprite
  // 记录玩家实体
  game_state.player = entity
}

///|
fn add_hp_ui() -> Unit {
  let ui : @system.Entity = @system.Entity::new()
  // 屏幕左上角
  @position.positions[ui] = @math.Vec2D::new(16.0, 16.0)
  // 作为 UI 固定在屏幕上
  @camera.uis[ui] = @camera.Ui::new()
  // 初始化文本
  update_hp_ui(ui)
  game_state.hp_ui = ui
  // 技能图标 UI（右上角）
  add_skill_ui()
}

///|
/// 技能 UI：图标 + 冷却提示
fn add_skill_ui() -> Unit {
  // 图标
  let icon = @system.Entity::new()
  @camera.uis[icon] = @camera.Ui::new()
  @position.positions[icon] = @math.Vec2D::new(VIEWPORT_WIDTH - 48.0, 16.0)
  let anim = @sprite.Animation::new(
    SKILL_ICON_PATH,
    max_frame=1,
    height=32.0,
    width=32.0,
    loop_=false,
  )
  @sprite.sprites[icon] = @sprite.Sprite::new_animation(anim, UI_Z)
  game_state.skill_icon = icon
  // 冷却提示（文字）
  let tip = @system.Entity::new()
  @camera.uis[tip] = @camera.Ui::new()
  // 初始叠加在图标中心附近
  @position.positions[tip] = @math.Vec2D::new(VIEWPORT_WIDTH - 48.0 + 8.0, 16.0 + 8.0)
  let text = @sprite.Text::new("R", color="#00FF66", font="14px ThaleahFat")
  @sprite.sprites[tip] = @sprite.Sprite::new_text(text, UI_Z + 1)
  game_state.skill_ready_fx = tip
  update_skill_ui()
}

///|
fn update_skill_ui() -> Unit {
  // 将文本渲染在图标中心，展示剩余秒数或提示键位
  let txt = if game_state.skill_cd <= 0 {
    "R"
  } else {
    (game_state.skill_cd / 120).to_string()
  }
  let color = if game_state.skill_cd <= 0 { "#00FF66" } else { "#CCCCCC" }
  let text = @sprite.Text::new(txt, color=color, font="14px ThaleahFat")
  @sprite.sprites[game_state.skill_ready_fx] = @sprite.Sprite::new_text(text, UI_Z + 1)
  // 对齐位置到图标
  let ipos = match @position.positions.get(game_state.skill_icon) {
    Some(p) => p
    None => @math.Vec2D::new(VIEWPORT_WIDTH - 48.0, 16.0)
  }
  @position.positions[game_state.skill_ready_fx] = @math.Vec2D::new(ipos.x + 8.0, ipos.y + 8.0)
  // 引用 skill_icon（可用于未来做冷却遮罩/闪烁），避免未读字段告警
  if @sprite.sprites.get(game_state.skill_icon) is Some(_) {
    // no-op
  }
}

///|
fn update_hp_ui(ui : @system.Entity) -> Unit {
  // 获取敌人HP用于显示
  let enemy_hp = get_enemy_hp(game_state.enemy)
  // 将生命值渲染为文本精灵
  let text = @sprite.Text::new(
    "Player HP: " +
    game_state.hp.to_string() +
    " | Enemy HP: " +
    enemy_hp.to_string(),
    color="red",
    font="30px ThaleahFat",
  )
  // 使用更高 z 以确保在最上层
  let spr = @sprite.Sprite::new_text(text, UI_Z)
  @sprite.sprites[ui] = spr
}

///|
fn set_hp(h : Int) -> Unit {
  game_state.hp = h
  update_hp_ui(game_state.hp_ui)
}

///|
/// 显示/隐藏：开始与结束 UI
fn show_start_ui() -> Unit {
  hide_start_ui()
  // 防止从其它界面按下的 Enter 残留触发，等松开后再允许开始
  game_state.block_enter_until_release = true
  let ui = @system.Entity::new()
  @camera.uis[ui] = @camera.Ui::new()
  @position.positions[ui] = @math.Vec2D::new(40.0, VIEWPORT_HEIGHT / 2.0 - 60.0)
  let title = @sprite.Text::new(
    "Chtholly",
    color="white",
    font="48px ThaleahFat",
  )
  let tip = @sprite.Text::new(
    "Select Level: ↑/↓  Enter",
    color="blue",
    font="24px ThaleahFat",
  )
  // 用两个叠加的文本：标题高 z，提示稍低 z
  @sprite.sprites[ui] = @sprite.Sprite::new_text(title, UI_Z)
  // 额外创建一条提示文本实体
  let tip_e = @system.Entity::new()
  @camera.uis[tip_e] = @camera.Ui::new()
  @position.positions[tip_e] = @math.Vec2D::new(
    40.0,
    VIEWPORT_HEIGHT / 2.0 + 10.0,
  )
  @sprite.sprites[tip_e] = @sprite.Sprite::new_text(tip, UI_Z - 1)
  // 关卡列表三项
  let item_y0 = VIEWPORT_HEIGHT / 2.0 + 50.0
  let y_gap = 26.0
  let li0 = @system.Entity::new()
  let li1 = @system.Entity::new()
  let li2 = @system.Entity::new()
  for e in [li0, li1, li2] {
    @camera.uis[e] = @camera.Ui::new()
  }
  @position.positions[li0] = @math.Vec2D::new(40.0, item_y0)
  @position.positions[li1] = @math.Vec2D::new(40.0, item_y0 + y_gap)
  @position.positions[li2] = @math.Vec2D::new(40.0, item_y0 + y_gap * 2.0)
  game_state.level_ui0 = li0
  game_state.level_ui1 = li1
  game_state.level_ui2 = li2
  update_level_menu_ui()
  game_state.start_ui = ui
  game_state.start_tip_ui = tip_e
}

///|
fn hide_start_ui() -> Unit {
  // 若此前创建过则销毁
  if @sprite.sprites.get(game_state.start_ui) is Some(_) {
    @system.Entity::destroy(game_state.start_ui)
  }
  if @sprite.sprites.get(game_state.start_tip_ui) is Some(_) {
    @system.Entity::destroy(game_state.start_tip_ui)
  }
  if @sprite.sprites.get(game_state.level_ui0) is Some(_) {
    @system.Entity::destroy(game_state.level_ui0)
  }
  if @sprite.sprites.get(game_state.level_ui1) is Some(_) {
    @system.Entity::destroy(game_state.level_ui1)
  }
  if @sprite.sprites.get(game_state.level_ui2) is Some(_) {
    @system.Entity::destroy(game_state.level_ui2)
  }
  game_state.start_ui = @system.Entity::new()
  game_state.start_tip_ui = @system.Entity::new()
  game_state.level_ui0 = @system.Entity::new()
  game_state.level_ui1 = @system.Entity::new()
  game_state.level_ui2 = @system.Entity::new()
}

///|
fn show_gameover_ui() -> Unit {
  hide_gameover_ui()
  let ui = @system.Entity::new()
  @camera.uis[ui] = @camera.Ui::new()
  @position.positions[ui] = @math.Vec2D::new(40.0, VIEWPORT_HEIGHT / 2.0 - 40.0)
  let text = @sprite.Text::new("Game Over", color="red", font="48px ThaleahFat")
  @sprite.sprites[ui] = @sprite.Sprite::new_text(text, UI_Z)
  // 提示
  let tip_e = @system.Entity::new()
  @camera.uis[tip_e] = @camera.Ui::new()
  @position.positions[tip_e] = @math.Vec2D::new(
    40.0,
    VIEWPORT_HEIGHT / 2.0 + 10.0,
  )
  let tip = @sprite.Text::new(
    "Select: ↑/↓  Enter",
    color="blue",
    font="24px ThaleahFat",
  )
  @sprite.sprites[tip_e] = @sprite.Sprite::new_text(tip, UI_Z - 1)
  // 选项：Restart / Back to Level Select
  let item_y0 = VIEWPORT_HEIGHT / 2.0 + 50.0
  let y_gap = 26.0
  let op0 = @system.Entity::new()
  let op1 = @system.Entity::new()
  @camera.uis[op0] = @camera.Ui::new()
  @camera.uis[op1] = @camera.Ui::new()
  @position.positions[op0] = @math.Vec2D::new(40.0, item_y0)
  @position.positions[op1] = @math.Vec2D::new(40.0, item_y0 + y_gap)
  game_state.go_ui0 = op0
  game_state.go_ui1 = op1
  game_state.gameover_index = 0
  update_gameover_menu_ui()
  game_state.gameover_ui = ui
  game_state.gameover_tip_ui = tip_e
}

///|
fn hide_gameover_ui() -> Unit {
  if @sprite.sprites.get(game_state.gameover_ui) is Some(_) {
    @system.Entity::destroy(game_state.gameover_ui)
  }
  if @sprite.sprites.get(game_state.gameover_tip_ui) is Some(_) {
    @system.Entity::destroy(game_state.gameover_tip_ui)
  }
  if @sprite.sprites.get(game_state.go_ui0) is Some(_) {
    @system.Entity::destroy(game_state.go_ui0)
  }
  if @sprite.sprites.get(game_state.go_ui1) is Some(_) {
    @system.Entity::destroy(game_state.go_ui1)
  }
  game_state.gameover_ui = @system.Entity::new()
  game_state.gameover_tip_ui = @system.Entity::new()
  game_state.go_ui0 = @system.Entity::new()
  game_state.go_ui1 = @system.Entity::new()
}

///|
/// 启动游戏：清理状态，生成玩家/敌人与 HP UI
fn start_game() -> Unit {
  // 清理所有现存的子弹与敌人
  destroy_all_bullets()
  // 若存在旧玩家则销毁
  if @sprite.sprites.get(game_state.player) is Some(_) {
    @system.Entity::destroy(game_state.player)
  }
  if @sprite.sprites.get(game_state.enemy) is Some(_) {
    @system.Entity::destroy(game_state.enemy)
  }
  // 清空敌人 HP 映射，避免残留键
  let rm : Array[@system.Entity] = []
  for e, _ in enemy_hps {
    rm.push(e)
  }
  for e in rm {
    enemy_hps.remove(e)
  }
  // 隐藏所有菜单/结束 UI
  hide_start_ui()
  hide_gameover_ui()
  hide_victory_ui()
  // 重置状态
  game_state.hp = 3
  game_state.invincible_ticks = 0
  game_state.shoot_cooldown = 0
  game_state.enemy_shoot_cd = 0
  game_state.input_cd = 0
  game_state.hard_pattern_toggle = false
  game_state.skill_cd = 0
  // 应用难度参数
  apply_difficulty_settings()
  // 生成实体
  add_player()
  add_enemy()
  // HP UI：若不存在则创建；存在则更新文本
  if @sprite.sprites.get(game_state.hp_ui) is Some(_) {
    update_hp_ui(game_state.hp_ui)
  } else {
    add_hp_ui()
  }
  // 进入进行中
  game_state.phase = PHASE_PLAYING
}

///|
/// 胜利：展示 Victory UI 并清理子弹、敌人/玩家
fn win_game() -> Unit {
  if game_state.phase != PHASE_VICTORY {
    game_state.phase = PHASE_VICTORY
    destroy_all_bullets()
    // 敌人已被销毁；一并销毁玩家避免返回菜单时残留
    if @sprite.sprites.get(game_state.player) is Some(_) {
      @system.Entity::destroy(game_state.player)
    }
    if @sprite.sprites.get(game_state.enemy) is Some(_) {
      @system.Entity::destroy(game_state.enemy)
    }
    // 清空敌人 HP 映射
    let rm : Array[@system.Entity] = []
    for e, _ in enemy_hps { rm.push(e) }
    for e in rm { enemy_hps.remove(e) }
    show_victory_ui()
  }
}

///|
/// 根据选择的难度覆盖敌人参数
fn apply_difficulty_settings() -> Unit {
  let idx = game_state.level_index
  if idx == DIFF_EASY {
    game_state.current_enemy_hp = 60
    game_state.current_enemy_speed = ENEMY_SPEED * 0.8
    game_state.current_enemy_bullet_speed = ENEMY_BULLET_SPEED * 0.8
    game_state.current_enemy_shoot_cd = ENEMY_SHOOT_CD_TICKS + 15
  } else if idx == DIFF_HARD {
    game_state.current_enemy_hp = 140
    game_state.current_enemy_speed = ENEMY_SPEED * 1.25
    game_state.current_enemy_bullet_speed = ENEMY_BULLET_SPEED * 1.25
    // 降低攻击频率：在 Hard 下增加射击冷却
    game_state.current_enemy_shoot_cd = ENEMY_SHOOT_CD_TICKS + 15
  } else {
    // NORMAL
    game_state.current_enemy_hp = 100
    game_state.current_enemy_speed = ENEMY_SPEED
    game_state.current_enemy_bullet_speed = ENEMY_BULLET_SPEED
    game_state.current_enemy_shoot_cd = ENEMY_SHOOT_CD_TICKS
  }
}

///|
/// 结束游戏：展示 Game Over UI 并清理子弹
fn end_game() -> Unit {
  if game_state.phase != PHASE_GAME_OVER {
    game_state.phase = PHASE_GAME_OVER
    destroy_all_bullets()
    // 敌人可以销毁
    if @sprite.sprites.get(game_state.enemy) is Some(_) {
      @system.Entity::destroy(game_state.enemy)
    }
    // 当前玩家销毁，避免重开时残留上一局实体
    if @sprite.sprites.get(game_state.player) is Some(_) {
      @system.Entity::destroy(game_state.player)
    }
    // 可选择性清空敌人 HP 映射
    let rm : Array[@system.Entity] = []
    for e, _ in enemy_hps {
      rm.push(e)
    }
    for e in rm {
      enemy_hps.remove(e)
    }
    show_gameover_ui()
  }
}

///|
fn destroy_all_bullets() -> Unit {
  // 按 bullet_owners 列表销毁，避免误删玩家/敌人/UI
  let to_destroy : Array[@system.Entity] = []
  for b, _ in bullet_owners {
    to_destroy.push(b)
  }
  for b in to_destroy {
    @system.Entity::destroy(b)
    bullet_owners.remove(b)
    hit_bullets.remove(b)
  }
}

///|
fn player_damage_system(_ : &@system.Backend) -> Unit {
  if game_state.phase != PHASE_PLAYING {
    return
  }
  // 无敌计时递减
  if game_state.invincible_ticks > 0 {
    game_state.invincible_ticks = game_state.invincible_ticks - 1
  }

  // 若已无血，暂不处理
  if game_state.hp <= 0 {
    end_game()
    return
  }
  let player = game_state.player
  let ppos = @position.positions[player]
  let pw : Double = PLAYER_W
  let ph : Double = PLAYER_H

  // 仅敌人子弹造成伤害：先复制一份敌人子弹列表，避免遍历时修改映射
  let enemy_bullets : Array[@system.Entity] = []
  for b, owner in bullet_owners {
    if owner == OWNER_ENEMY {
      enemy_bullets.push(b)
    }
  }
  for b in enemy_bullets {
    let bpos = match @position.positions.get(b) {
      Some(p) => p
      None => continue
    }
    let overlap = aabb_overlap(ppos.x, ppos.y, pw, ph, bpos.x, bpos.y, ENEMY_BULLET_W, ENEMY_BULLET_H)
    if overlap {
      if game_state.invincible_ticks == 0 {
        let new_hp = if game_state.hp > 0 { game_state.hp - 1 } else { 0 }
        set_hp(new_hp)
        game_state.invincible_ticks = INVINCIBLE_TICKS
        if new_hp == 0 { end_game(); return }
      }
      @system.Entity::destroy(b)
      bullet_owners.remove(b)
      return
    }
  }
}

///|
fn player_input_system(_ : &@system.Backend) -> Unit {
  // 开始界面：仅 Enter 开始
  if game_state.phase == PHASE_START {
    if game_state.input_cd > 0 { game_state.input_cd = game_state.input_cd - 1 }
    // 上下选择
    if @system.is_pressed(@system.Code::ArrowUp) && game_state.input_cd == 0 {
      game_state.level_index = if game_state.level_index > 0 { game_state.level_index - 1 } else { 0 }
      update_level_menu_ui()
      game_state.input_cd = 10
    } else if @system.is_pressed(@system.Code::ArrowDown) && game_state.input_cd == 0 {
      game_state.level_index = if game_state.level_index < 2 { game_state.level_index + 1 } else { 2 }
      update_level_menu_ui()
      game_state.input_cd = 10
    }
    // Enter 松开前不允许开始，防止从其它界面带入的按键残留
    if game_state.block_enter_until_release {
      if !@system.is_pressed(@system.Code::Enter) {
        game_state.block_enter_until_release = false
      }
    } else if @system.is_pressed(@system.Code::Enter) {
      start_game()
    }
    return
  }
  // 胜利界面：Enter 返回关卡选择
  if game_state.phase == PHASE_VICTORY {
    if game_state.input_cd > 0 { game_state.input_cd = game_state.input_cd - 1 }
    if @system.is_pressed(@system.Code::Enter) {
      hide_victory_ui()
      game_state.phase = PHASE_START
      game_state.block_enter_until_release = true
      show_start_ui()
    }
    return
  }
  // 结束界面：Enter 开始
  if game_state.phase == PHASE_GAME_OVER {
    if game_state.input_cd > 0 { game_state.input_cd = game_state.input_cd - 1 }
    if @system.is_pressed(@system.Code::ArrowUp) && game_state.input_cd == 0 {
      game_state.gameover_index = if game_state.gameover_index > 0 { game_state.gameover_index - 1 } else { 0 }
      update_gameover_menu_ui()
      game_state.input_cd = 10
    } else if @system.is_pressed(@system.Code::ArrowDown) && game_state.input_cd == 0 {
      game_state.gameover_index = if game_state.gameover_index < 1 { game_state.gameover_index + 1 } else { 1 }
      update_gameover_menu_ui()
      game_state.input_cd = 10
    }
    if @system.is_pressed(@system.Code::Enter) {
      if game_state.gameover_index == 0 {
        // Restart 当前难度直接开始
        start_game()
      } else {
        // 返回关卡选择
        hide_gameover_ui()
        game_state.phase = PHASE_START
        game_state.block_enter_until_release = true
        show_start_ui()
      }
    }
    return
  }

  // 进行中：方向键移动 + 空格射击
  let move_speed : Double = PLAYER_MOVE_SPEED
  let entity = game_state.player
  let pos = @position.positions[entity]

  // 处理移动输入（四方向）
  let vx : Double = if @system.is_pressed(@system.Code::ArrowLeft) {
    -move_speed
  } else if @system.is_pressed(@system.Code::ArrowRight) {
    move_speed
  } else {
    0.0
  }
  let vy : Double = if @system.is_pressed(@system.Code::ArrowUp) {
    -move_speed
  } else if @system.is_pressed(@system.Code::ArrowDown) {
    move_speed
  } else {
    0.0
  }
  @velocity.velocities[entity] = @math.Vec2D::new(vx, vy)

  // 边界夹紧（基于当前位置）
  let clamped = clamp_position(pos, PLAYER_W, PLAYER_H)
  if clamped.x != pos.x || clamped.y != pos.y {
    @position.positions[entity] = clamped
  }

  // 射击冷却
  if game_state.shoot_cooldown > 0 {
    game_state.shoot_cooldown = game_state.shoot_cooldown - 1
  }
  // 技能冷却
  if game_state.skill_cd > 0 {
    game_state.skill_cd = game_state.skill_cd - 1
    if game_state.skill_cd % 10 == 0 { update_skill_ui() }
  }
  // 空格射击：从玩家顶部中心发射一枚子弹
  if @system.is_pressed(@system.Code::Space) && game_state.shoot_cooldown == 0 {
    let muzzle = @math.Vec2D::new(
      pos.x + (PLAYER_W - PLAYER_BULLET_W) / 2.0,
      pos.y - PLAYER_BULLET_H / 2.0,
    )
    spawn_bullet(
      muzzle,
      @math.Vec2D::new(0.0, -PLAYER_BULLET_SPEED),
      OWNER_PLAYER,
    )
    game_state.shoot_cooldown = PLAYER_SHOOT_CD_TICKS // 约 120FPS 下每 ~83ms 一发
  }
  // 技能键：R 键触发
  if @system.is_pressed(@system.Code::KeyR) {
    try_cast_skill()
  }
}

///|

///|
/// 单个敌人的 AI：移动 + 射击
fn enemy_ai_system(_ : &@system.Backend) -> Unit {
  if game_state.phase != PHASE_PLAYING {
    return
  }
  let enemy = game_state.enemy
  // 敌人是否存在且存活
  if enemy_hps.get(enemy) is Some(hp) {
    if hp <= 0 {
      return
    }
  } else {
    return
  }
  let pos = @position.positions[enemy]
  let vel = @velocity.velocities[enemy]
  // 简单的水平来回移动，碰边反弹
  let speed = game_state.current_enemy_speed
  let mut vx = vel.x
  if pos.x <= 0.0 {
    vx = speed
  } else if pos.x >= VIEWPORT_WIDTH - ENEMY_W {
    vx = -speed
  } else if vx == 0.0 {
    vx = speed
  }
  @velocity.velocities[enemy] = @math.Vec2D::new(vx, 0.0)
  // Y 保持在 64 高度
  if pos.y != ENEMY_Y {
    @position.positions[enemy] = @math.Vec2D::new(pos.x, ENEMY_Y)
  }
  // 射击冷却（例如每 30 帧一发）
  if game_state.enemy_shoot_cd > 0 {
    game_state.enemy_shoot_cd = game_state.enemy_shoot_cd - 1
  } else {
    // 发射
    if game_state.level_index == DIFF_HARD {
      // 万花筒弹幕：从敌人中心向八个方向发射
      let cx = pos.x + (ENEMY_W - ENEMY_BULLET_W) / 2.0
      let cy = pos.y + (ENEMY_H - ENEMY_BULLET_H) / 2.0
      let s = game_state.current_enemy_bullet_speed
      let dirs : Array[@math.Vec2D] = [
        @math.Vec2D::new( 0.0,  1.0), // 下
        @math.Vec2D::new( 0.0, -1.0), // 上
        @math.Vec2D::new( 1.0,  0.0), // 右
        @math.Vec2D::new(-1.0,  0.0), // 左
        @math.Vec2D::new( DIAG_NORM,  DIAG_NORM),  // 右下
        @math.Vec2D::new( DIAG_NORM, -DIAG_NORM),  // 右上
        @math.Vec2D::new(-DIAG_NORM,  DIAG_NORM),  // 左下
        @math.Vec2D::new(-DIAG_NORM, -DIAG_NORM),  // 左上
      ]
      for d in dirs {
        spawn_bullet(@math.Vec2D::new(cx, cy), @math.Vec2D::new(d.x * s, d.y * s), OWNER_ENEMY)
      }
      game_state.enemy_shoot_cd = game_state.current_enemy_shoot_cd
      // 预留：切换不同形态可通过 hard_pattern_toggle 实现
      game_state.hard_pattern_toggle = !game_state.hard_pattern_toggle
    } else {
      // 非 HARD：从敌人底部中心发射一枚子弹向下
      let muzzle = @math.Vec2D::new(
        pos.x + (ENEMY_W - ENEMY_BULLET_W) / 2.0,
        pos.y + ENEMY_H - ENEMY_BULLET_H / 2.0,
      )
      spawn_bullet(muzzle, @math.Vec2D::new(0.0, game_state.current_enemy_bullet_speed), OWNER_ENEMY)
      game_state.enemy_shoot_cd = game_state.current_enemy_shoot_cd
    }
  }
}

///|
/// 生成敌人（带速度与生命值）
fn spawn_enemy(pos : @math.Vec2D, vel : @math.Vec2D, hp : Int) -> Unit {
  let e = @system.Entity::new()
  @position.positions[e] = pos
  @velocity.velocities[e] = vel
  // 使用与玩家相同的贴图（更容易区分为“敌人实体”）
  let anim = @sprite.Animation::new(
    "pixel_adventure/Main Characters/Mask Dude/Idle (32x32).png",
    max_frame=11,
    height=ENEMY_H,
    width=ENEMY_W,
    loop_=true,
  )
  @sprite.sprites[e] = @sprite.Sprite::new_animation(anim, 9)
  enemy_hps.set(e, hp)
  game_state.enemy = e
}

///|
/// 初始化：新增一个 100 HP 的敌人
fn add_enemy() -> Unit {
  let center_top = @math.Vec2D::new((VIEWPORT_WIDTH - ENEMY_W) / 2.0, ENEMY_Y)
  spawn_enemy(center_top, @math.Vec2D::new(game_state.current_enemy_speed, 0.0), game_state.current_enemy_hp)
}

///|
/// 刷新关卡选择 UI 高亮
fn update_level_menu_ui() -> Unit {
  let names = ["Easy", "Normal", "Hard"]
  let entities = [game_state.level_ui0, game_state.level_ui1, game_state.level_ui2]
  let idx = game_state.level_index
  let mut i = 0
  while i < 3 {
    let name = names[i]
    let is_sel = i == idx
    let color = if is_sel { "blue" } else { "black" }
    let text = @sprite.Text::new(name, color=color, font="24px ThaleahFat")
    @sprite.sprites[entities[i]] = @sprite.Sprite::new_text(text, UI_Z - 1)
    i = i + 1
  }
}

///|
/// 刷新 Game Over 菜单（Restart / Back to Level Select）
fn update_gameover_menu_ui() -> Unit {
  let names = ["Restart", "Back to Level Select"]
  let entities = [game_state.go_ui0, game_state.go_ui1]
  let idx = game_state.gameover_index
  let mut i = 0
  while i < 2 {
    let name = names[i]
    let is_sel = i == idx
    let color = if is_sel { "blue" } else { "black" }
    let text = @sprite.Text::new(name, color=color, font="24px ThaleahFat")
    @sprite.sprites[entities[i]] = @sprite.Sprite::new_text(text, UI_Z - 1)
    i = i + 1
  }
}
///|
/// 敌人命中检测（玩家子弹击中敌人）
fn enemy_hit_system(_ : &@system.Backend) -> Unit {
  if game_state.phase != PHASE_PLAYING {
    return
  }
  // 遍历所有敌人
  for enemy, hp in enemy_hps {
    if hp <= 0 {
      continue
    }
    // 检查敌人是否已被销毁
    let epos = match @position.positions.get(enemy) {
      Some(pos) => pos
      None => continue
    }
    let ew : Double = ENEMY_W
    let eh : Double = ENEMY_H
    // 遍历玩家子弹
    for b, _ in @velocity.velocities {
      // 已命中过的子弹跳过（全局标记，跨帧有效）
      if hit_bullets.get(b) is Some(true) {
        continue
      }
      if b == game_state.player {
        continue
      }
      // 必须是玩家子弹
      if get_bullet_owner(b) is Some(owner) {
        if owner != OWNER_PLAYER {
          continue
        }
      } else {
        continue
      }
      // 检查子弹位置是否存在（已销毁的实体会从 positions 中移除）
      let bpos = match @position.positions.get(b) {
        Some(pos) => pos
        None => continue
      }
      let bw : Double = PLAYER_BULLET_W
      let bh : Double = PLAYER_BULLET_H
      let overlap = aabb_overlap(epos.x, epos.y, ew, eh, bpos.x, bpos.y, bw, bh)
      if overlap {
        // 命中：标记子弹已命中（全局标记，防止跨帧重复伤害）
        hit_bullets.set(b, true)
        // 子弹消失，敌人 -1 HP
        @system.Entity::destroy(b)
        let cur = enemy_hps[enemy]
        let next = if cur > 0 { cur - 1 } else { 0 }
        enemy_hps.set(enemy, next)
        // 更新UI显示敌人HP
        update_hp_ui(game_state.hp_ui)
        if next == 0 {
          @system.Entity::destroy(enemy)
          win_game()
        }
        // 一帧内一个敌人只吃一颗
        break
      }
    }
  }
}

///|
/// 胜利 UI
fn show_victory_ui() -> Unit {
  hide_victory_ui()
  let ui = @system.Entity::new()
  @camera.uis[ui] = @camera.Ui::new()
  @position.positions[ui] = @math.Vec2D::new(40.0, VIEWPORT_HEIGHT / 2.0 - 40.0)
  let text = @sprite.Text::new("You Win", color="green", font="48px ThaleahFat")
  @sprite.sprites[ui] = @sprite.Sprite::new_text(text, UI_Z)
  // 提示
  let tip_e = @system.Entity::new()
  @camera.uis[tip_e] = @camera.Ui::new()
  @position.positions[tip_e] = @math.Vec2D::new(40.0, VIEWPORT_HEIGHT / 2.0 + 10.0)
  let tip = @sprite.Text::new("Press Enter to Level Select", color="blue", font="24px ThaleahFat")
  @sprite.sprites[tip_e] = @sprite.Sprite::new_text(tip, UI_Z - 1)
  game_state.victory_ui = ui
  game_state.victory_tip_ui = tip_e
}

fn hide_victory_ui() -> Unit {
  if @sprite.sprites.get(game_state.victory_ui) is Some(_) {
    @system.Entity::destroy(game_state.victory_ui)
  }
  if @sprite.sprites.get(game_state.victory_tip_ui) is Some(_) {
    @system.Entity::destroy(game_state.victory_tip_ui)
  }
  game_state.victory_ui = @system.Entity::new()
  game_state.victory_tip_ui = @system.Entity::new()
}

///|
fn cleanup_system(_ : &@system.Backend) -> Unit {
  // 清理离屏的非玩家实体
  for entity, pos in @position.positions {
    if entity != game_state.player {
      if pos.x < -ENEMY_W ||
        pos.x > VIEWPORT_WIDTH + ENEMY_W ||
        pos.y < -ENEMY_H ||
        pos.y > VIEWPORT_HEIGHT + ENEMY_H {
        @system.Entity::destroy(entity)
      }
    }
  }

  // 清理已销毁实体的标记（防止内存泄漏）
  let to_remove : Array[@system.Entity] = []
  for bullet, _ in hit_bullets {
    // 如果子弹已不存在于位置映射中，说明已被销毁
    if @position.positions.get(bullet) is None {
      to_remove.push(bullet)
    }
  }
  for bullet in to_remove {
    hit_bullets.remove(bullet)
  }

  // 同样清理 bullet_owners
  to_remove.clear()
  for bullet, _ in bullet_owners {
    if @position.positions.get(bullet) is None {
      to_remove.push(bullet)
    }
  }
  for bullet in to_remove {
    bullet_owners.remove(bullet)
  }
}

///|
/// 施放技能：环形发射 + 清空敌方子弹
fn try_cast_skill() -> Unit {
  if game_state.phase != PHASE_PLAYING { return }
  if game_state.skill_cd > 0 { return }
  // 设置冷却
  game_state.skill_cd = SKILL_COOLDOWN_TICKS
  update_skill_ui()
  // 1) 清空敌方子弹
  let to_destroy : Array[@system.Entity] = []
  for b, owner in bullet_owners {
    if owner == OWNER_ENEMY { to_destroy.push(b) }
  }
  for b in to_destroy {
    @system.Entity::destroy(b)
    bullet_owners.remove(b)
    hit_bullets.remove(b)
  }
  // 2) 在玩家周围环形发射一圈玩家子弹
  let p = @position.positions[game_state.player]
  let cx = p.x + (PLAYER_W - PLAYER_BULLET_W) / 2.0
  let cy = p.y + (PLAYER_H - PLAYER_BULLET_H) / 2.0
  let n = SKILL_BURST_COUNT
  let speed = SKILL_BURST_SPEED
  let mut i = 0
  while i < n {
    // angle = 2π * i / n，这里用近似常数 6.28318530718
    let ang = 6.28318530718 * i.to_double() / n.to_double()
    // 近似 sin/cos：采用 8 方向查表 + 线性插值可优化，这里直接用近似多项式
    let vx = speed * fast_cos(ang)
    let vy = speed * fast_sin(ang)
    spawn_bullet(@math.Vec2D::new(cx, cy), @math.Vec2D::new(vx, vy), OWNER_PLAYER)
    i = i + 1
  }
}

///| 近似正弦/余弦（泰勒截断，角度以弧度）
fn fast_sin(x : Double) -> Double {
  // 归一到 [-pi, pi]
  let mut a = x
  let pi = 3.14159265359
  let two_pi = 6.28318530718
  a = a - two_pi * ((a / two_pi).to_int().to_double())
  if a > pi { a = a - two_pi }
  if a < -pi { a = a + two_pi }
  // 三阶近似：sin a ≈ a - a^3/6
  a - (a * a * a) / 6.0
}

fn fast_cos(x : Double) -> Double {
  let mut a = x
  let pi = 3.14159265359
  let two_pi = 6.28318530718
  a = a - two_pi * ((a / two_pi).to_int().to_double())
  if a > pi { a = a - two_pi }
  if a < -pi { a = a + two_pi }
  // 二阶近似：cos a ≈ 1 - a^2/2
  1.0 - (a * a) / 2.0
}

///|
fn spawn_bullet(pos : @math.Vec2D, vel : @math.Vec2D, owner : Int) -> Unit {
  if game_state.phase != PHASE_PLAYING {
    return
  }
  let e = @system.Entity::new()
  @position.positions[e] = pos
  @velocity.velocities[e] = vel
  let img = if owner == OWNER_PLAYER { PLAYER_BULLET_IMAGE } else { ENEMY_BULLET_IMAGE }
  let bw = if owner == OWNER_PLAYER { PLAYER_BULLET_W } else { ENEMY_BULLET_W }
  let bh = if owner == OWNER_PLAYER { PLAYER_BULLET_H } else { ENEMY_BULLET_H }
  // 通过 offset.x 控制裁切起点：
  // - 玩家子弹取 [0,16)
  // - 敌人子弹取 [16,32)
  let offx = if owner == OWNER_PLAYER { 0.0 } else { 16.0 }
  let anim = @sprite.Animation::new(
    img,
    max_frame=1,
    height=bh,
    width=bw,
    offset=@math.Vec2D::new(offx, 0.0),
    loop_=false,
  )
  let spr = @sprite.Sprite::new_animation(anim, 5)
  bullet_owners.set(e, owner)
  @sprite.sprites[e] = spr
}
