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
  add_font(25,200)
  add_font1(55,200)
  add_font(85,200)
  add_font1(115,200)
  add_font(145,200)
  add_font1(175,200)
  add_font(205,200)
  add_font1(235,200)
  add_font(265,200)
  add_font1(295,200)
  add_font_back("#000000",0,300)
  add_font_back("#000000",0,140)
  add_font_back1("#000000",0,180)
  add_font_back1("#000000",325,180)
  add_font_back2("#d6be07ff",0,0)
  add_font_back2("#d6be07ff",0,60)
  add_font_back3("#d6be07ff",0,20)
  add_font_back3("#d6be07ff",330,20)
  add_font_back4("#d6be07ff",0,80)
  add_font_back4("#d6be07ff",330,80)
  add_font_back4("#000000",310,80)
  add_font_back4("#000000",20,80)
  // add_color_line1(@math.Vec2D(20.0,68.0),"#c96603ff",new_game_state.fi)
  add_a_box(new_game_state.a1_box,25.0,40.0)
  add_a_box(new_game_state.d1_box,55.0,40.0)
  add_a_box(new_game_state.f1_box,85.0,40.0)
  add_a_box(new_game_state.h1_box,115.0,40.0)
  add_a_box(new_game_state.g1_box,145.0,40.0)
  add_a_box(new_game_state.i1_box,175.0,40.0)
  add_a_box(new_game_state.b1_box,205.0,40.0)
  add_a_box(new_game_state.j1_box,235.0,40.0)
  add_a_box(new_game_state.c1_box,265.0,40.0)
  add_a_box(new_game_state.e1_box,295.0,40.0)
  add_alert_box()
  add_a_box(new_game_state.a_box,35.0,195.0)
  add_a_box(new_game_state.b_box,65.0,195.0)
  add_a_box(new_game_state.c_box,95.0,195.0)
  add_a_box(new_game_state.d_box,125.0,195.0)
  add_a_box(new_game_state.e_box,155.0,195.0)
  add_a_box(new_game_state.f_box,185.0,195.0)
  add_a_box(new_game_state.g_box,215.0,195.0)
  add_a_box(new_game_state.h_box,245.0,195.0)
  add_a_box(new_game_state.i_box,275.0,195.0)
  add_a_box(new_game_state.j_box,305.0,195.0)
  // add_new_font(316,316)
  add_color_block(@math.Vec2D(0.0,340.0),"#3300ffff")
  add_color_block(@math.Vec2D(340.0,340.0),"#3300ffff")
  for i =0.0;i<330;i=i+10{
    add_color_line(@math.Vec2D(10.0 + i,348.0),"#3300ffff")
  }
  for i =0.0;i<340;i=i+10{
    add_color_line(@math.Vec2D(10.0 + i,340.0),"#3300ffff")
  }
  
  add_bird(@math.Vec2D(10.0,342.0))
}


fn update_block_display(_delta:Double) -> Unit {
  if new_game_state.fi <= 305.0{
    if @inputs.is_just_pressed(@inputs.KeyA) && new_game_state.mouse_load{
      if new_game_state.click == 0{
        @audio.play_audio("sounds/a.wav")
        new_game_state.click = 1
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyD) && new_game_state.mouse_load{
      if new_game_state.click == 1{
        @audio.play_audio("sounds/d.wav")
        new_game_state.click = 2
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyF) && new_game_state.mouse_load{
      if new_game_state.click == 2{
        @audio.play_audio("sounds/f.wav")
        new_game_state.click = 3
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyH) && new_game_state.mouse_load{
      if new_game_state.click == 3{
        @audio.play_audio("sounds/h.wav")
        new_game_state.click = 4
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyG) && new_game_state.mouse_load{
      if new_game_state.click == 4{
        @audio.play_audio("sounds/g.wav")
        new_game_state.click = 5
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyI) && new_game_state.mouse_load{
      if new_game_state.click == 5{
        @audio.play_audio("sounds/i.wav")
        new_game_state.click = 6
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyB) && new_game_state.mouse_load{
      if new_game_state.click == 6{
        @audio.play_audio("sounds/b.wav")
        new_game_state.click = 7
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyJ) && new_game_state.mouse_load{
      if new_game_state.click == 7{
        @audio.play_audio("sounds/j.wav")
        new_game_state.click = 8
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyC) && new_game_state.mouse_load{
      if new_game_state.click == 8{
        @audio.play_audio("sounds/c.wav")
        new_game_state.click = 9
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
    if @inputs.is_just_pressed(@inputs.KeyE) && new_game_state.mouse_load{
      if new_game_state.click == 9{
        @audio.play_audio("sounds/e.wav")
        new_game_state.click = 10
      }else{
        add_failed_box()
        @audio.play_audio("sounds/explosion.wav")
        new_game_state.mouse_load = false
      }
    }
  }
  if new_game_state.click == 10{
    add_success_box()
    new_game_state.mouse_load = false
    @audio.play_audio("sounds/sucess.wav")
  }
  if (new_game_state.fi == 300.0 && new_game_state.click != 10) || @inputs.is_just_pressed(@inputs.KeyK) || @inputs.is_just_pressed(@inputs.KeyL) || @inputs.is_just_pressed(@inputs.KeyM) ||  @inputs.is_just_pressed(@inputs.KeyN)  || @inputs.is_just_pressed(@inputs.KeyO)|| @inputs.is_just_pressed(@inputs.KeyP)  || @inputs.is_just_pressed(@inputs.KeyQ)  || @inputs.is_just_pressed(@inputs.KeyR)  || @inputs.is_just_pressed(@inputs.KeyS)  || @inputs.is_just_pressed(@inputs.KeyT)  || @inputs.is_just_pressed(@inputs.KeyU)  || @inputs.is_just_pressed(@inputs.KeyV)  || @inputs.is_just_pressed(@inputs.KeyW)  || @inputs.is_just_pressed(@inputs.KeyX)  || @inputs.is_just_pressed(@inputs.KeyY)  || @inputs.is_just_pressed(@inputs.KeyZ){
    add_failed_box()
    new_game_state.mouse_load = false
    @audio.play_audio("sounds/explosion.wav")
  }
}


