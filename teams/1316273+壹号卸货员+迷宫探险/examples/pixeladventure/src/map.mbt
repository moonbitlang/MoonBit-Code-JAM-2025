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
fn generate_map() -> Unit {
  let tilemap = @tilemap.TileMap::from_json(tilemap)
  let world_width = tilemap.map_width.to_double() *
    tilemap.tile_size.to_double()
  let world_height = tilemap.map_height.to_double() *
    tilemap.tile_size.to_double()
  @camera.set_limits(top=0.0, bottom=world_height, left=0.0, right=world_width)
  add_background(@math.Vec2D(world_width, world_height))
  add_timer()
  // add_color_font(@math.Vec2D(10.0,27.0),"#b99227ff")
  add_font(new_game_state.x,new_game_state.y)
  add_new_font(316,316)
  add_color_block(@math.Vec2D(0.0,340.0),"#fff")
  add_color_block(@math.Vec2D(0.0,0.0),"#fff")
  add_color_block(@math.Vec2D(340.0,0.0),"#fff")
  add_color_block(@math.Vec2D(340.0,340.0),"#fff")
  for i =0.0;i<330;i=i+10{
    add_color_line(@math.Vec2D(10.0 + i,348.0),"#fff")
    add_color_line(@math.Vec2D(10.0 + i,0.0),"#fff")
    add_color_line(@math.Vec2D(10.0 + i,8.0),"#fff")
    add_color_line(@math.Vec2D(10.0 + i,25.0),"#fff")
    add_color_line1(@math.Vec2D(0.0,10.0 + i),"#fff")
    add_color_line1(@math.Vec2D(8.0,10.0 + i),"#fff")
    add_color_line1(@math.Vec2D(340.0,10.0 + i),"#fff")
    add_color_line1(@math.Vec2D(348.0,10.0 + i),"#fff")
  }
  for i =0.0;i<340;i=i+10{
    add_color_line(@math.Vec2D(10.0 + i,340.0),"#fff")
  }
  
  add_bird(@math.Vec2D(10.0,342.0))
}


fn update_block_display(_delta:Double) -> Unit {
  if new_game_state.level_box.content != ""{
    if new_game_state.timer > 0 {
        if new_game_state.x <= 306.0 && new_game_state.x >= 10.0{
          if (( new_game_state.x == 10 && new_game_state.y >= 83.0) || (new_game_state.x == 27 && (new_game_state.y <= 44 || new_game_state.y >= 114)) || new_game_state.x >= 44){
            if @inputs.is_just_pressed(@inputs.ArrowRight){
              new_game_state.x += 17.0
              add_font(new_game_state.x,new_game_state.y)
            }
          }
          
        }
        // if new_game_state.x >= 20.0 {
        //   if @inputs.is_just_pressed(@inputs.ArrowLeft){
        //     new_game_state.x -= 17.0
        //     add_font(new_game_state.x,new_game_state.y)
        //   }
        // }
        // if new_game_state.y >= 44.0{
        //   if @inputs.is_just_pressed(@inputs.ArrowUp){
        //     new_game_state.y -= 17.0
        //     add_font(new_game_state.x,new_game_state.y)
        //     println(new_game_state.y)
        //   }
        // }
        if new_game_state.y <= 306.0 {
          if (new_game_state.y >= 129 && new_game_state.x >= 80) || (new_game_state.x >= 10 && new_game_state.y <= 112){
            if @inputs.is_just_pressed(@inputs.ArrowDown){
              new_game_state.y += 17.0
              add_font(new_game_state.x,new_game_state.y)
            }
          }
          
        }
    }
    if new_game_state.timer == 0 && new_game_state.x != 316 && new_game_state.y != 316{
        add_failed_box()
    }
    if new_game_state.timer > 0 && new_game_state.x == 316 && new_game_state.y == 316{
        add_success_box()
        game_state.score_box.content = "Score: " + new_game_state.score.to_string()
        update_score_display()
    }
  }
}


