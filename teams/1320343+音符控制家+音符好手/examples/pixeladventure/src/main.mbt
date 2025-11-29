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
  // add_score_box()
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
  a_box:@sprite.Text;
  b_box:@sprite.Text;
  c_box:@sprite.Text;
  d_box:@sprite.Text;
  e_box:@sprite.Text;
  f_box:@sprite.Text;
  g_box:@sprite.Text;
  h_box:@sprite.Text;
  i_box:@sprite.Text;
  j_box:@sprite.Text;
  a1_box:@sprite.Text;
  b1_box:@sprite.Text;
  c1_box:@sprite.Text;
  d1_box:@sprite.Text;
  e1_box:@sprite.Text;
  f1_box:@sprite.Text;
  g1_box:@sprite.Text;
  h1_box:@sprite.Text;
  i1_box:@sprite.Text;
  j1_box:@sprite.Text;
  mut mouse_load:Bool;
  gameStarted: Bool;
  gameReStarted:Bool;
  mut latestLevel:Int;
  success_box:@sprite.Text;
  mut x:Double;
  mut y:Double;
  mut fi: Double;
}

let new_game_state : NewGameState = {
  game_state:"new_game",
  timer_box:@sprite.Text::new("Time: 0", font="20px ThaleahFat", color="#c28d06ff"),
  timer1_box:@sprite.Text::new("Time: 3", font="20px ThaleahFat", color="red"),
  timer:0,
  timer1:3,
  alert_box:@sprite.Text::new("Steinway Sons", font="40px ThaleahFat", color="#e28c0aff"),
  score_box:@sprite.Text::new("Change: 0", font="20px ThaleahFat", color="#c28d06ff"),
  change:0,
  click:0,
  failed_box:@sprite.Text::new("Show flopped!", font="30px ThaleahFat", color="#d81111ff"),
  level:1,
  level_box:@sprite.Text::new("Level: 1", font="20px ThaleahFat", color="white"),
  a_box:@sprite.Text::new("A", font="20px ThaleahFat", color="#c28d06ff"),
  b_box:@sprite.Text::new("B", font="20px ThaleahFat", color="#c28d06ff"),
  c_box:@sprite.Text::new("C", font="20px ThaleahFat", color="#c28d06ff"),
  d_box:@sprite.Text::new("D", font="20px ThaleahFat", color="#c28d06ff"),
  e_box:@sprite.Text::new("E", font="20px ThaleahFat", color="#c28d06ff"),
  f_box:@sprite.Text::new("F", font="20px ThaleahFat", color="#c28d06ff"),
  g_box:@sprite.Text::new("G", font="20px ThaleahFat", color="#c28d06ff"),
  h_box:@sprite.Text::new("H", font="20px ThaleahFat", color="#c28d06ff"),
  i_box:@sprite.Text::new("I", font="20px ThaleahFat", color="#c28d06ff"),
  j_box:@sprite.Text::new("J", font="20px ThaleahFat", color="#c28d06ff"),
  a1_box:@sprite.Text::new("A", font="20px ThaleahFat", color="#000000"),
  b1_box:@sprite.Text::new("B", font="20px ThaleahFat", color="#000000"),
  c1_box:@sprite.Text::new("C", font="20px ThaleahFat", color="#000000"),
  d1_box:@sprite.Text::new("D", font="20px ThaleahFat", color="#000000"),
  e1_box:@sprite.Text::new("E", font="20px ThaleahFat", color="#000000"),
  f1_box:@sprite.Text::new("F", font="20px ThaleahFat", color="#000000"),
  g1_box:@sprite.Text::new("G", font="20px ThaleahFat", color="#000000"),
  h1_box:@sprite.Text::new("H", font="20px ThaleahFat", color="#000000"),
  i1_box:@sprite.Text::new("I", font="20px ThaleahFat", color="#000000"),
  j1_box:@sprite.Text::new("J", font="20px ThaleahFat", color="#000000"),
  success_box:@sprite.Text::new("Performance done!", font="30px ThaleahFat", color="#63870bff"),
  mouse_load:true,
  gameStarted:false,
  gameReStarted:true,
  latestLevel:1,
  x:10.0,
  y:10.0,
  fi:0.0,
}

