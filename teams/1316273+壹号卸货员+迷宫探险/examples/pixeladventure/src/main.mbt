// Copyright 2025 International Digital Economy Academy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

///|
const ZOOM : Double = 2.0

///|
const VIEWPORT_WIDTH : Double = 480.0

///|
const VIEWPORT_HEIGHT : Double = 320.0

///|
const REAL_VIEWPORT_WIDTH : Double = VIEWPORT_WIDTH * ZOOM

///|
const REAL_VIEWPORT_HEIGHT : Double = VIEWPORT_HEIGHT * ZOOM

///|
fn main {
  @system.App::new()
  .with_canvas_width(700)
  .with_canvas_height(700)
  .with_image_smooth(false)
  .with_zoom(ZOOM)
  .with_fps(30)
  .add_plugin(@plugins.default_plugin)
  // .add_plugin(@plugins.debug_plugin)
  .add_system(game_start, schedule=Startup)
  // .add_system(player_state_system)
  // .add_system(player_collision_system)
  .add_system(bird_ai_system)
  // .add_system(test_block_move)
  .add_system(update_block_display)
  .run()
}

///|
fn game_start(_delta : Double) -> Unit {
  // reset_game_state()
  // if !new_game_state.gameStarted {
  //   add_background_start()
  // }
  generate_map()
  // add_result_box()
  add_score_box()
  // add_health_box()
  // add_volume_button()
}

struct Block {
  x:Int;
  y:Int;
  color:String;
  mut revealed:Bool;
  mut matched:Bool;
}

struct NewGameState {
  score:Int;
  game_state:String;
  timer_box:@sprite.Text;
  timer1_box:@sprite.Text;
  mut timer:Int;
  timer1:Int;
  alert_box:@sprite.Text;
  score_box:@sprite.Text;
  change:Int;
  mut click:Int;
  // mut right:Double;
  failed_box:@sprite.Text;
  mut level:Int;
  level_box:@sprite.Text;
  mut mouse_load:Bool;
  gameStarted: Bool;
  gameReStarted:Bool;
  mut latestLevel:Int;
  success_box:@sprite.Text;
  mut x:Double;
  mut y:Double;
}

let new_game_state : NewGameState = {
  score:0,
  game_state:"new_game",
  timer_box:@sprite.Text::new("Time: 15", font="20px ThaleahFat", color="#c28d06ff"),
  timer1_box:@sprite.Text::new("Time: 3", font="20px ThaleahFat", color="red"),
  timer:15,
  timer1:3,
  alert_box:@sprite.Text::new("Go to select!", font="10px ThaleahFat", color="white"),
  score_box:@sprite.Text::new("Change: 0", font="20px ThaleahFat", color="#c28d06ff"),
  change:0,
  click:0,
  failed_box:@sprite.Text::new("Game Over!", font="30px ThaleahFat", color="#d81111ff"),
  level:1,
  level_box:@sprite.Text::new("Level: 1", font="20px ThaleahFat", color="white"),
  success_box:@sprite.Text::new("You win!", font="30px ThaleahFat", color="#63870bff"),
  mouse_load:true,
  gameStarted:false,
  gameReStarted:true,
  latestLevel:1,
  x:10.0,
  y:27.0,
}

