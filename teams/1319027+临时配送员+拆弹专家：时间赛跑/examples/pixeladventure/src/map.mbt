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
  add_block_back(70,70,"#05f390ff")
  add_block_back(200,70,"#d10303ff")
  add_block_back(70,200,"#e8dd08ff")
  add_block_back(200,200,"#e88708ff")
  add_block1(100.0,90.0,"#d10303ff")
  add_block2(260.0,90.0,"#e8dd08ff")
  add_block2(100.0,220.0,"#e88708ff")
  add_block1(220.0,220.0,"#05f390ff")
  add_color_to_line(@math.Vec2D(109.0,100.0),"#d10303ff",120.0,2.0)
  add_color_to_line(@math.Vec2D(240.0,94.0),"#e8dd08ff",20.0,2.0)
  add_color_to_line(@math.Vec2D(240.0,94.0),"#e8dd08ff",2.0,75.0)
  add_color_to_line(@math.Vec2D(100.0,169.0),"#e8dd08ff",142.0,2.0)
  add_color_to_line(@math.Vec2D(100.0,169.0),"#e8dd08ff",2.0,40.0)
  add_color_to_line(@math.Vec2D(120.0,224.0),"#e88708ff",100.0,2.0)
  add_color_to_line(@math.Vec2D(138.0,138.0),"#05f390ff",2.0,50.0)
  add_color_to_line(@math.Vec2D(138.0,188.0),"#05f390ff",85.0,2.0)
  add_color_to_line(@math.Vec2D(223.0,188.0),"#05f390ff",2.0,35.0)
  // add_new_font(316,316)
  add_color_block(@math.Vec2D(0.0,340.0),"#fff")
  add_color_block(@math.Vec2D(0.0,0.0),"#fff")
  add_color_block(@math.Vec2D(340.0,0.0),"#fff")
  add_color_block(@math.Vec2D(340.0,340.0),"#fff")
  for i =0.0;i<330;i=i+10{
    add_color_line(@math.Vec2D(10.0 + i,348.0),"#fff")
    add_color_line(@math.Vec2D(10.0 + i,0.0),"#fff")
    add_color_line(@math.Vec2D(10.0 + i,8.0),"#fff")
    // add_color_line(@math.Vec2D(10.0 + i,25.0),"#fff")
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
  // if new_game_state.level_box.content != ""{
    if new_game_state.timer == 0 && new_game_state.timer1 != 3{
      new_game_state.mouse_load = false
      @audio.play_audio("sounds/explosion.wav")
      add_failed_box()
    }
    if new_game_state.timer > 0 {
      if @inputs.is_just_pressed(@inputs.KeyA) && new_game_state.mouse_load{
        if new_game_state.timer1 == 2{
          @audio.play_audio("sounds/jump.wav")
          add_block1_select(100.0,90.0,"#110d0dff")
          new_game_state.timer1 = 3
        }else{
          new_game_state.mouse_load = false
          @audio.play_audio("sounds/explosion.wav")
          add_failed_box()
          new_game_state.timer = 0
        }
      }
      if @inputs.is_just_pressed(@inputs.KeyB) && new_game_state.mouse_load{
        if new_game_state.timer1 == 0{
          @audio.play_audio("sounds/jump.wav")
          add_block2_select(260.0,90.0,"#110d0dff")
          new_game_state.timer1 = 1
        }else{
          new_game_state.mouse_load = false
          @audio.play_audio("sounds/explosion.wav")
          add_failed_box()
          new_game_state.timer = 0
        }
      }
      if @inputs.is_just_pressed(@inputs.KeyC) && new_game_state.mouse_load{
        if new_game_state.timer1 == 1{
          @audio.play_audio("sounds/jump.wav")
          add_block2_select(100.0,220.0,"#110d0dff")
          new_game_state.timer1 = 2
        }else{
          new_game_state.mouse_load = false
          @audio.play_audio("sounds/explosion.wav")
          add_failed_box()
          new_game_state.timer = 0
        }
      }
      if @inputs.is_just_pressed(@inputs.KeyD) && new_game_state.mouse_load{
        if new_game_state.timer1 == 3{
          @audio.play_audio("sounds/jump.wav")
          add_block1_select(220.0,220.0,"#110d0dff")
          add_success_box()
          new_game_state.mouse_load = false
        }else{
          new_game_state.mouse_load = false
          @audio.play_audio("sounds/explosion.wav")
          add_failed_box()
          new_game_state.timer = 0
        }
      }
    }
  // }
}


