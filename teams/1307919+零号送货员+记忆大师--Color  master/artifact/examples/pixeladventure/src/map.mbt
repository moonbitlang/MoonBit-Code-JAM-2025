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
fn tile_to_vec2d(tile : @tilemap.Tile, tile_size : Int) -> @math.Vec2D {
  @math.Vec2D(
    tile.x.to_double() * tile_size.to_double(),
    tile.y.to_double() * tile_size.to_double(),
  )
}

///|
fn generate_map() -> Unit {
  let tilemap = @tilemap.TileMap::from_json(tilemap)
  let world_width = tilemap.map_width.to_double() *
    tilemap.tile_size.to_double()
  let world_height = tilemap.map_height.to_double() *
    tilemap.tile_size.to_double()
  @camera.set_limits(top=0.0, bottom=world_height, left=0.0, right=world_width)
  add_background(@math.Vec2D(world_width, world_height))
  // add_background_start(@math.Vec2D(world_width, world_height))
  // if new_game_state.gameStarted {
  //   add_background(@math.Vec2D(world_width, world_height))
  // }
  // add_background(@math.Vec2D(world_width, world_height))
  // if !new_game_state.gameStarted {
  //   add_background_start(@math.Vec2D(400, 400))
  // }else{
  //   add_background(@math.Vec2D(world_width, world_height))
  // }
  // for block in new_game_state.blocks {
  //   add_block(block)
  // }
  // add_timer()
  // if new_game_state.level_box.content != ""{
  //       // new_game_state.timer = 4
  //       add_timer()
  // }
  // add_timer1()
  @audio.play_audio("sounds/game.wav",volume=0.5,loop_=true)
  add_color_block(@math.Vec2D(0.0,290.0),"#fff")
  add_color_block(@math.Vec2D(292.5,290.0),"#fff")
  for i =0.0;i<290;i=i+10{
    add_color_line(@math.Vec2D(10.0 + i,290.0),"#fff")
  }
  for i =0.0;i<290;i=i+10{
    add_color_line(@math.Vec2D(10.0 + i,299.0),"#fff")
  }
  
  add_bird(@math.Vec2D(20.0,291.0))
}


fn update_block_display(_delta:Double) -> Unit {
  if new_game_state.level_box.content != ""{
    if new_game_state.level == 1 {
      if new_game_state.change >= 0 && new_game_state.change <= 1{
        if @inputs.is_just_pressed(@inputs.ArrowRight){
        @audio.play_audio("sounds/coin.wav")
        new_game_state.change += 1
        update_change_display()
      }
      }
      if new_game_state.change <= 2 && new_game_state.change > 0{
        if @inputs.is_just_pressed(@inputs.ArrowLeft){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change -= 1
        update_change_display()
      }}
      if new_game_state.change == 0{
        // add_frame_color_line(0.0,"#dfab00ff")
        new_game_state.alert_box.color = "#dfab00ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          if new_game_state.gameStarted{
            color_control_cancle()
          }
          if new_game_state.gameTwoStarted{
            color_control1_cancle()
          }
          match_color()
        }
      }
      if new_game_state.change == 1{
        // add_frame_color_line(60.0,"#fb0404ff")
        new_game_state.alert_box.color = "#fb0404ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/coin.wav")
          // color_control_cancle()
          match_color1()
        }
      }
      if new_game_state.change == 2{
        // add_frame_color_line(120.0,"#039f70ff")
        new_game_state.alert_box.color = "#039f70ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          if new_game_state.gameStarted{
            color_control_cancle()
          }
          if new_game_state.gameTwoStarted{
            color_control1_cancle()
          }
          match_color2()
        }
      }
    }
    if new_game_state.level == 2{
      color_one_control()
      if new_game_state.change >= 0 && new_game_state.change <= 1{
        if @inputs.is_just_pressed(@inputs.ArrowRight){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change += 1
        update_change_display()
      }
      }
      if new_game_state.change <= 2 && new_game_state.change > 0{
        if @inputs.is_just_pressed(@inputs.ArrowLeft){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change -= 1
        update_change_display()
      }}
      if new_game_state.change == 0 && new_game_state.select_one_blocks[0].color == "#000000"{
        // add_frame_color_line(0.0)
        new_game_state.alert_box.color = "#dfab00ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/coin.wav")
          // color_control_cancle()
          match_new_color()
          println("colorcolor")
        }
      }
      if new_game_state.change == 1 && new_game_state.select_one_blocks[0].color == "#000000"{
        new_game_state.alert_box.color = "#fb0404ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle1()
          match_new_color1()
          println("colorcolor")
        }
      }
      if new_game_state.change == 2 && new_game_state.select_one_blocks[0].color == "#000000"{
        new_game_state.alert_box.color = "#039f70ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle1()
          match_new_color2()
          println("colorcolor")
        }
      }
    }
    if new_game_state.level == 3{
      color_two_control()
      if new_game_state.change >= 0 && new_game_state.change <= 1{
        if @inputs.is_just_pressed(@inputs.ArrowRight){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change += 1
        update_change_display()
      }
      }
      if new_game_state.change <= 2 && new_game_state.change > 0{
        if @inputs.is_just_pressed(@inputs.ArrowLeft){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change -= 1
        update_change_display()
      }}
      if new_game_state.change == 0 && new_game_state.select_one_blocks[0].color == "#ff0000"{
        new_game_state.alert_box.color = "#dfab00ff"
        // add_frame_color_line(0.0)
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle2()
          match_new1_color()
          println("colorcolor")
        }
      }
      if new_game_state.change == 1 && new_game_state.select_one_blocks[0].color == "#ff0000"{
        new_game_state.alert_box.color = "#fb0404ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle2()
          match_new1_color1()
          println("colorcolor")
        }
      }
      if new_game_state.change == 2 && new_game_state.select_one_blocks[0].color == "#ff0000"{
        new_game_state.alert_box.color = "#039f70ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/coin.wav")
          // color_control_cancle2()
          match_new1_color2()
          println("colorcolor")
        }
      }
    }
    if new_game_state.level == 4{
      color_three_control()
      if new_game_state.change >= 0 && new_game_state.change <= 1{
        if @inputs.is_just_pressed(@inputs.ArrowRight){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change += 1
        update_change_display()
      }
      }
      if new_game_state.change <= 2 && new_game_state.change > 0{
        if @inputs.is_just_pressed(@inputs.ArrowLeft){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change -= 1
        update_change_display()
      }}
      if new_game_state.change == 0 && new_game_state.select_one_blocks[0].color == "#a52a2a"{
        new_game_state.alert_box.color = "#dfab00ff"
        // add_frame_color_line(0.0)
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle3()
          match_new2_color()
          println("colorcolor")
        }
      }
      if new_game_state.change == 1 && new_game_state.select_one_blocks[0].color == "#a52a2a"{
        new_game_state.alert_box.color = "#fb0404ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/coin.wav")
          // color_control_cancle()
          match_new2_color1()
          println("colorcolor")
        }
      }
      if new_game_state.change == 2 && new_game_state.select_one_blocks[0].color == "#a52a2a"{
        new_game_state.alert_box.color = "#039f70ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle3()
          match_new2_color2()
          println("colorcolor")
        }
      }
    }
    if new_game_state.level == 5{
      color_four_control()
      if new_game_state.change >= 0 && new_game_state.change <= 1{
        if @inputs.is_just_pressed(@inputs.ArrowRight){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change += 1
        update_change_display()
      }
      }
      if new_game_state.change <= 2 && new_game_state.change > 0{
        if @inputs.is_just_pressed(@inputs.ArrowLeft){
          @audio.play_audio("sounds/coin.wav")
        new_game_state.change -= 1
        update_change_display()
      }}
      if new_game_state.change == 0 && new_game_state.select_one_blocks[0].color == "#e6e6fa"{
        new_game_state.alert_box.color = "#dfab00ff"
        // add_frame_color_line(0.0)
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/coin.wav")
          color_control_cancle4()
          match_new3_color()
          println("colorcolor")
        }
      }
      if new_game_state.change == 1 && new_game_state.select_one_blocks[0].color == "#e6e6fa"{
        new_game_state.alert_box.color = "#fb0404ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle4()
          match_new3_color1()
          println("colorcolor")
        }
      }
      if new_game_state.change == 2 && new_game_state.select_one_blocks[0].color == "#e6e6fa"{
        new_game_state.alert_box.color = "#039f70ff"
        if @inputs.is_just_pressed(@inputs.Enter) && new_game_state.mouse_load{
          @audio.play_audio("sounds/power_up.wav")
          color_control_cancle4()
          match_new3_color2()
          println("colorcolor")
        }
      }
    }
  }
}


