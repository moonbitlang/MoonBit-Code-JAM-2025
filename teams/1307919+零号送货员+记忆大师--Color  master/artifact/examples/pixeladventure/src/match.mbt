fn match_color() -> Unit {
    if (new_game_state.select_one_blocks[0].color == new_game_state.new_blocks[0].color && new_game_state.select_one_blocks[1].color == new_game_state.new_blocks[1].color && new_game_state.select_one_blocks[2].color == new_game_state.new_blocks[2].color){
      println("match")
      println(new_game_state.select_one_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }else{
      add_failed_box()
      new_game_state.mouse_load = false
      println("not match")
      println(new_game_state.select_one_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }
}
fn match_new_color() -> Unit {
  if (new_game_state.select_one_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_one_blocks[1].color == new_game_state.new_blocks1[1].color && new_game_state.select_one_blocks[2].color == new_game_state.new_blocks1[2].color && new_game_state.select_one_blocks[4].color == new_game_state.new_blocks1[4].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }
}
fn match_new1_color() -> Unit {
  if (new_game_state.select_one_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_one_blocks[1].color == new_game_state.new_blocks1[1].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}
fn match_new2_color() -> Unit {
  if (new_game_state.select_one_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_one_blocks[11].color == new_game_state.new_blocks1[11].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}
fn match_new3_color() -> Unit {
  if (new_game_state.select_one_blocks[1].color == new_game_state.new_blocks1[1].color && new_game_state.select_one_blocks[2].color == new_game_state.new_blocks1[2].color){
    println("match")
    add_success_box()
    new_game_state.mouse_load = false
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}
fn match_color1() -> Unit {
  if new_game_state.gameStarted{
    if new_game_state.select_two_blocks[0].color == new_game_state.new_blocks[0].color && new_game_state.select_two_blocks[1].color == new_game_state.new_blocks[1].color && new_game_state.select_two_blocks[2].color == new_game_state.new_blocks[2].color{
      println("match")
      // new_game_state.level += 1
      new_game_state.level += 1
      println("x" + new_game_state.level.to_string())
      // add_level_box()
      println(new_game_state.level_box.content)
      println(new_game_state.select_two_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }else{
      add_failed_box()
      new_game_state.mouse_load = false
      println("not match")
      println(new_game_state.select_two_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }
  }
  if new_game_state.gameTwoStarted{
    if new_game_state.select_two_blocks[0].color == "#ff0000ff"{
      println("match")
      new_game_state.level += 1
      println("x" + new_game_state.level.to_string())
      println(new_game_state.select_three_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }else{
      add_failed_box()
      new_game_state.mouse_load = false
      println("not match")
      println(new_game_state.select_three_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }
  }
  if new_game_state.gameThreeStarted{
    if new_game_state.select_two_blocks[1].color == "#b5238cff"{
      println("match")
      new_game_state.level += 1
      println("x" + new_game_state.level.to_string())
      println(new_game_state.select_three_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }else{
      add_failed_box()
      new_game_state.mouse_load = false
      println("not match")
      println(new_game_state.select_three_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }
  }
  if new_game_state.gameFourStarted{
    if new_game_state.select_two_blocks[0].color == "#e0115fff"{
      println("match")
      new_game_state.level += 1
      println("x" + new_game_state.level.to_string())
      println(new_game_state.select_three_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }else{
      add_failed_box()
      new_game_state.mouse_load = false
      println("not match")
      println(new_game_state.select_three_blocks[0].color)
      println(new_game_state.new_blocks[0].color)
    }
  }
}
fn match_new_color1() -> Unit {
  if (new_game_state.select_two_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_two_blocks[1].color == new_game_state.new_blocks1[1].color && new_game_state.select_two_blocks[2].color == new_game_state.new_blocks1[2].color && new_game_state.select_two_blocks[4].color == new_game_state.new_blocks1[4].color){
    println("match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }else{
    add_failed_box()
    new_game_state.latestLevel = 2
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }
}
fn match_new1_color1() -> Unit {
  if (new_game_state.select_two_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_two_blocks[1].color == new_game_state.new_blocks1[1].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}
fn match_new2_color1() -> Unit {
  if (new_game_state.select_two_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_two_blocks[11].color == new_game_state.new_blocks1[11].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_two_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_two_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}
fn match_new3_color1() -> Unit {
  if (new_game_state.select_two_blocks[1].color == new_game_state.new_blocks1[1].color && new_game_state.select_two_blocks[2].color == new_game_state.new_blocks1[2].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}
fn match_color2() -> Unit {
  if new_game_state.select_three_blocks[0].color == new_game_state.new_blocks[0].color && new_game_state.select_three_blocks[1].color == new_game_state.new_blocks[1].color && new_game_state.select_three_blocks[2].color == new_game_state.new_blocks[2].color{
    println("match")
    println(new_game_state.select_three_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_three_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }
}
fn match_new_color2() -> Unit {
  if (new_game_state.select_three_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_three_blocks[1].color == new_game_state.new_blocks1[1].color && new_game_state.select_three_blocks[2].color == new_game_state.new_blocks1[2].color && new_game_state.select_three_blocks[4].color == new_game_state.new_blocks1[4].color){
    println("match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks[0].color)
  }
}
fn match_new1_color2() -> Unit {
  if (new_game_state.select_three_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_three_blocks[1].color == new_game_state.new_blocks1[1].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_three_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
    println(new_game_state.select_three_blocks[1].color)
    println(new_game_state.new_blocks1[1].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_three_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
    println(new_game_state.select_three_blocks[1].color)
    println(new_game_state.new_blocks1[1].color)
  }
}
fn match_new2_color2() -> Unit {
  if (new_game_state.select_three_blocks[0].color == new_game_state.new_blocks1[0].color && new_game_state.select_three_blocks[11].color == new_game_state.new_blocks1[11].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_three_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_three_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}
fn match_new3_color2() -> Unit {
  if (new_game_state.select_three_blocks[1].color == new_game_state.new_blocks1[1].color && new_game_state.select_three_blocks[2].color == new_game_state.new_blocks1[2].color){
    println("match")
    new_game_state.level += 1
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }else{
    add_failed_box()
    new_game_state.mouse_load = false
    println("not match")
    println(new_game_state.select_one_blocks[0].color)
    println(new_game_state.new_blocks1[0].color)
  }
}