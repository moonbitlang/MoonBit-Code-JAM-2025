import wasm4
import common { Point, GameState, default_game_state, Rect, Size }
import resources { load_walk_left_frames, load_walk_right_frames, load_scene_image }

// 定义 Sprite 类型别名
type Sprite = Array[Byte]

pub struct Character {
  position: Point
  walk_left_frames: Array[Sprite]
  walk_right_frames: Array[Sprite]
  current_frame: Int
  frame_delay: Int
  frame_speed: Int
  is_moving: Bool
  direction: String // "left" or "right"
  character_size: Int
}

pub struct Scene {
  name: String
  image: Sprite
  triggers: Array[TriggerZone]
  window_size: Size
}

pub struct TriggerZone {
  area: Rect
  target_scene: Int
  spawn_point: Point
  type: String
}

pub struct Game {
  current_scene: Int
  player: Character
  scenes: Array[Scene]
  game_state: GameState
  in_battle: Bool
  show_dialogue: Bool
  dialogue_text: String
}

// 创建基础场景触发器
fn create_village_triggers() -> Array[TriggerZone] {
  [
    {
      area: { x: 100, y: 100, width: 20, height: 20 },
      target_scene: 1,
      spawn_point: { x: 80, y: 80 },
      type: "cave"
    }
  ]
}

pub fn initialize_game() -> Game {
  let game_state = default_game_state()
  
  let walk_left_frames = load_walk_left_frames()
  let walk_right_frames = load_walk_right_frames()
  
  let player_character = {
    position: { x: 80, y: 120 },
    walk_left_frames: walk_left_frames,
    walk_right_frames: walk_right_frames,
    current_frame: 0,
    frame_delay: 0,
    frame_speed: 6,
    is_moving: false,
    direction: "right",
    character_size: 16
  }
  
  let village_scene = {
    name: "村庄",
    image: load_scene_image("village"),
    triggers: create_village_triggers(),
    window_size: { width: 160, height: 160 }
  }
  
  let battle_scene = {
    name: "战斗场景", 
    image: load_scene_image("battle"),
    triggers: [],
    window_size: { width: 160, height: 160 }
  }
  
  {
    current_scene: 0,
    player: player_character,
    scenes: [village_scene, battle_scene],
    game_state: game_state,
    in_battle: false,
    show_dialogue: false,
    dialogue_text: ""
  }
}

// WASM-4 必需的导出函数
@export_name("start")
pub fn start() -> Unit {
  // 初始化代码可以放在这里
}

// 全局游戏状态存储
@global_var("game_state")
let mut game_state: Game = initialize_game()

@export_name("update") 
pub fn update() -> Unit {
  // 处理输入
  let game_after_input = handle_input(game_state)
  
  // 更新游戏状态
  let updated_game = update_game_state(game_after_input)
  
  // 绘制
  draw(updated_game)
  
  // 更新全局状态
  game_state = updated_game
}

// 简化的输入处理
fn handle_input(game: Game) -> Game {
  let gamepads = wasm4::GAMEPAD1
  let move_distance = 2
  
  // 使用函数式风格处理输入
  let (new_x, new_y, is_moving, direction) = {
    let base_x = game.player.position.x
    let base_y = game.player.position.y
    let base_direction = game.player.direction
    
    if (gamepads & wasm4::BUTTON_LEFT) != 0 {
      (base_x - move_distance, base_y, true, "left")
    } else if (gamepads & wasm4::BUTTON_RIGHT) != 0 {
      (base_x + move_distance, base_y, true, "right")
    } else if (gamepads & wasm4::BUTTON_UP) != 0 {
      (base_x, base_y - move_distance, true, base_direction)
    } else if (gamepads & wasm4::BUTTON_DOWN) != 0 {
      (base_x, base_y + move_distance, true, base_direction)
    } else {
      (base_x, base_y, false, base_direction)
    }
  }
  
  // 边界检查
  let final_x = if new_x < 0 { 0 } else if new_x > 144 { 144 } else { new_x }
  let final_y = if new_y < 0 { 0 } else if new_y > 144 { 144 } else { new_y }
  
  let updated_player = { 
    ..game.player, 
    position: { x: final_x, y: final_y }, 
    is_moving: is_moving,
    direction: direction
  }
  
  { ..game, player: updated_player }
}

fn update_game_state(game: Game) -> Game {
  // 更新动画帧
  if game.player.is_moving {
    let frame_delay = game.player.frame_delay + 1
    let current_frame = if frame_delay >= game.player.frame_speed {
      (game.player.current_frame + 1) % game.player.walk_left_frames.length()
    } else {
      game.player.current_frame
    }
    
    let updated_player = {
      ..game.player,
      frame_delay: if frame_delay >= game.player.frame_speed { 0 } else { frame_delay },
      current_frame: current_frame
    }
    { ..game, player: updated_player }
  } else {
    game
  }
}

// 绘制函数
fn draw(game: Game) -> Unit {
  // 绘制场景
  draw_scene(game.scenes[game.current_scene])
  
  // 绘制玩家
  draw_player(game.player)
  
  // 绘制UI
  if game.show_dialogue {
    draw_dialogue(game.dialogue_text)
  }
}

fn draw_scene(scene: Scene) -> Unit {
  // 在 WASM-4 中，您需要使用 blit 函数来绘制精灵
  // 这里简化处理，使用文本显示场景名称
  let scene_text = "场景: "
  wasm4::text(scene_text, 10, 10)
  wasm4::text(scene.name, 50, 10)
}

fn draw_player(player: Character) -> Unit {
  let sprite = if player.direction == "left" {
    player.walk_left_frames[player.current_frame]
  } else {
    player.walk_right_frames[player.current_frame]
  }
  
  // 在 WASM-4 中绘制精灵
  // 注意：blit 函数接受数组的指针，MoonBit 会自动处理数组到指针的转换
  // 如果 to_ptr() 不存在，可以直接传递数组，或者使用 &sprite[0] 的方式
  // 这里先使用简化版本，实际使用时需要根据 MoonBit WASM-4 绑定调整
  wasm4::blit(sprite, player.position.x, player.position.y, 16, 16, wasm4::BLIT_2BPP)
}

fn draw_dialogue(text: String) -> Unit {
  wasm4::rect(10, 140, 140, 20)
  wasm4::text(text, 15, 145)
}

