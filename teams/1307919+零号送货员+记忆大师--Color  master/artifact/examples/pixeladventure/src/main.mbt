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
  .with_canvas_width(600)
  .with_canvas_height(600)
  .with_image_smooth(false)
  .with_zoom(ZOOM)
  .with_fps(20)
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
  mut color:String;
  mut revealed:Bool;
  mut matched:Bool;
}

struct NewGameState {
  blocks:Array[Block];
  new_blocks:Array[Block];
  new_blocks1:Array[Block];
  new_blocks2:Array[Block];
  select_one_blocks:Array[Block];
  select_two_blocks:Array[Block];
  mut score:Int;
  select_three_blocks:Array[Block];
  select_four_blocks:Array[Block];
  selected_blocks:Array[Block];
  game_state:String;
  timer_box:@sprite.Text;
  timerr_box:@sprite.Text;
  timerrr_box:@sprite.Text;
  timer1_box:@sprite.Text;
  timer2_box:@sprite.Text;
  say1_box:@sprite.Text;
  difficult_box:@sprite.Text;
  metal_box:@sprite.Text;
  wood_box:@sprite.Text;
  water_box:@sprite.Text;
  fire_box:@sprite.Text;
  earth_box:@sprite.Text;
  mut timer:Int;
  mut timerr:Int;
  mut timerrr:Int;
  mut timer1:Int;
  mut timer2:Int;
  alert_box:@sprite.Text;
  score_box:@sprite.Text;
  mut change:Int;
  mut click:Int;
  // mut right:Double;
  failed_box:@sprite.Text;
  over_box:@sprite.Text;
  mut level:Int;
  level_box:@sprite.Text;
  mut mouse_load:Bool;
  gameStarted: Bool;
  gameReStarted:Bool;
  gameTwoStarted:Bool;
  gameThreeStarted:Bool;
  gameFourStarted:Bool;
  mut latestLevel:Int;
  success_box:@sprite.Text;
}

let new_game_state : NewGameState = {
  blocks:[
    {x:125,y:99,color:"#3300ffff",revealed:false,matched:false},
    {x:125,y:111,color:"#00ff73ff",revealed:false,matched:false},
    {x:125,y:123,color:"#3300ffff",revealed:false,matched:false},
    {x:136,y:99,color:"#00ff73ff",revealed:false,matched:false},
    {x:136,y:111,color:"#3300ffff",revealed:false,matched:false},
    {x:136,y:123,color:"#3300ffff",revealed:false,matched:false},
    {x:147,y:99,color:"#00ff73ff",revealed:false,matched:false},
    {x:147,y:111,color:"#3300ffff",revealed:false,matched:false},
    {x:147,y:123,color:"#00ff73ff",revealed:false,matched:false},
    {x:158,y:99,color:"#00ff73ff",revealed:false,matched:false},
    {x:158,y:111,color:"#3300ffff",revealed:false,matched:false},
    {x:158,y:123,color:"#00ff73ff",revealed:false,matched:false}
  ],
  new_blocks:[
    {x:125,y:99,color:"#3300ffff",revealed:false,matched:false},
    {x:125,y:111,color:"#00ff73ff",revealed:false,matched:false},
    {x:125,y:123,color:"#3300ffff",revealed:false,matched:false},
    {x:136,y:99,color:"#00ff73ff",revealed:false,matched:false},
    {x:136,y:111,color:"#3300ffff",revealed:false,matched:false},
    {x:136,y:123,color:"#3300ffff",revealed:false,matched:false},
    {x:147,y:99,color:"#00ff73ff",revealed:false,matched:false},
    {x:147,y:111,color:"#3300ffff",revealed:false,matched:false},
    {x:147,y:123,color:"#00ff73ff",revealed:false,matched:false},
    {x:158,y:99,color:"#00ff73ff",revealed:false,matched:false},
    {x:158,y:111,color:"#3300ffff",revealed:false,matched:false},
    {x:158,y:123,color:"#00ff73ff",revealed:false,matched:false}
  ],
  new_blocks1:[
    {x:125,y:99,color:"#fff",revealed:false,matched:false},
    {x:125,y:111,color:"#fff",revealed:false,matched:false},
    {x:125,y:123,color:"#fff",revealed:false,matched:false},
    {x:136,y:99,color:"#fff",revealed:false,matched:false},
    {x:136,y:111,color:"#fff",revealed:false,matched:false},
    {x:136,y:123,color:"#fff",revealed:false,matched:false},
    {x:147,y:99,color:"#fff",revealed:false,matched:false},
    {x:147,y:111,color:"#fff",revealed:false,matched:false},
    {x:147,y:123,color:"#fff",revealed:false,matched:false},
    {x:158,y:99,color:"#fff",revealed:false,matched:false},
    {x:158,y:111,color:"#fff",revealed:false,matched:false},
    {x:158,y:123,color:"#fff",revealed:false,matched:false}
  ],
  new_blocks2:[
    {x:125,y:99,color:"#fff",revealed:false,matched:false},
    {x:125,y:111,color:"#fff",revealed:false,matched:false},
    {x:125,y:123,color:"#fff",revealed:false,matched:false},
    {x:136,y:99,color:"#fff",revealed:false,matched:false},
    {x:136,y:111,color:"#fff",revealed:false,matched:false},
    {x:136,y:123,color:"#fff",revealed:false,matched:false},
    {x:147,y:99,color:"#fff",revealed:false,matched:false},
    {x:147,y:111,color:"#fff",revealed:false,matched:false},
    {x:147,y:123,color:"#fff",revealed:false,matched:false},
    {x:158,y:99,color:"#fff",revealed:false,matched:false},
    {x:158,y:111,color:"#fff",revealed:false,matched:false},
    {x:158,y:123,color:"#fff",revealed:false,matched:false}
  ],
  select_one_blocks:[
    {x:60,y:179,color:"#3300ffff",revealed:false,matched:false},
    {x:60,y:190,color:"#00ff73ff",revealed:false,matched:false},
    {x:60,y:201,color:"#00ff73ff",revealed:false,matched:false},
    {x:71,y:179,color:"#3300ffff",revealed:false,matched:false},
    {x:71,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:71,y:201,color:"#3300ffff",revealed:false,matched:false},
    {x:82,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:82,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:82,y:201,color:"#00ff73ff",revealed:false,matched:false},
    {x:93,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:93,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:93,y:201,color:"#00ff73ff",revealed:false,matched:false}
  ],
  select_two_blocks:[
    {x:120,y:179,color:"#3300ffff",revealed:false,matched:false},
    {x:120,y:190,color:"#00ff73ff",revealed:false,matched:false},
    {x:120,y:201,color:"#3300ffff",revealed:false,matched:false},
    {x:131,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:131,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:131,y:201,color:"#3300ffff",revealed:false,matched:false},
    {x:142,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:142,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:142,y:201,color:"#00ff73ff",revealed:false,matched:false},
    {x:153,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:153,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:153,y:201,color:"#00ff73ff",revealed:false,matched:false}
  ],
  select_three_blocks:[
    {x:180,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:180,y:190,color:"#00ff73ff",revealed:false,matched:false},
    {x:180,y:201,color:"#3300ffff",revealed:false,matched:false},
    {x:191,y:179,color:"#3300ffff",revealed:false,matched:false},
    {x:191,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:191,y:201,color:"#3300ffff",revealed:false,matched:false},
    {x:202,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:202,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:202,y:201,color:"#00ff73ff",revealed:false,matched:false},
    {x:213,y:179,color:"#00ff73ff",revealed:false,matched:false},
    {x:213,y:190,color:"#3300ffff",revealed:false,matched:false},
    {x:213,y:201,color:"#00ff73ff",revealed:false,matched:false}
  ],
  select_four_blocks:[
    {x:130,y:160,color:"#3300ffff",revealed:false,matched:false},
    {x:130,y:171,color:"#3300ffff",revealed:false,matched:false},
    {x:141,y:160,color:"#00ff73ff",revealed:false,matched:false},
    {x:141,y:171,color:"#00ff73ff",revealed:false,matched:false}
  ],
  score:0,
  selected_blocks:[],
  game_state:"new_game",
  timer_box:@sprite.Text::new("Time: 15", font="20px ThaleahFat", color="white"),
  timerr_box:@sprite.Text::new("Time: 20", font="20px ThaleahFat", color="white"),
  timerrr_box:@sprite.Text::new("Time: 30", font="20px ThaleahFat", color="white"),
  timer1_box:@sprite.Text::new("Time: 40", font="20px ThaleahFat", color="orange"),
  timer2_box:@sprite.Text::new("Time: 60", font="20px ThaleahFat", color="orange"),
  say1_box:@sprite.Text::new("露染宫__庭菊浅", font="10px ThaleahFat", color="white"),
  difficult_box:@sprite.Text::new("__炎土燥    土燥__生", font="15px ThaleahFat", color="white"),
  metal_box:@sprite.Text::new("金", font="10px ThaleahFat", color="white"),
  wood_box:@sprite.Text::new("木", font="10px ThaleahFat", color="white"),
  water_box:@sprite.Text::new("水", font="10px ThaleahFat", color="white"),
  fire_box:@sprite.Text::new("火", font="10px ThaleahFat", color="white"),
  earth_box:@sprite.Text::new("土", font="10px ThaleahFat", color="white"),
  timer:15,
  timerr:20,
  timerrr:30,
  timer1:40,
  timer2:60,
  alert_box:@sprite.Text::new("Go to select!", font="10px ThaleahFat", color="white"),
  score_box:@sprite.Text::new("Change: 0", font="20px ThaleahFat", color="white"),
  change:0,
  click:0,
  failed_box:@sprite.Text::new("Game Over!", font="30px ThaleahFat", color="#41376c"),
  over_box:@sprite.Text::new("Time Over!", font="30px ThaleahFat", color="#41376c"),
  level:1,
  level_box:@sprite.Text::new("Level: 1", font="20px ThaleahFat", color="white"),
  success_box:@sprite.Text::new("You win!", font="30px ThaleahFat", color="#41376c"),
  mouse_load:true,
  gameStarted:false,
  gameReStarted:true,
  gameTwoStarted:false,
  gameThreeStarted:false,
  gameFourStarted:false,
  latestLevel:1,
}

