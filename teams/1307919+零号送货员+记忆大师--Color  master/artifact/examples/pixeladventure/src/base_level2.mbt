// 中心第一个颜色方块遮罩
fn color_control() -> Unit {
  for block in new_game_state.new_blocks1{
    change_block(block)
  }
}
fn color_one_control() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#000000"
    new_game_state.new_blocks1[1].color = "#c7a422ff"
    new_game_state.new_blocks1[2].color = "#319676ff"
    new_game_state.new_blocks1[3].color = "#000000"
    new_game_state.new_blocks1[4].color = "#6e1badff"
    new_game_state.new_blocks1[5].color = "#319676ff"
    new_game_state.new_blocks1[6].color = "#c7a422ff"
    new_game_state.new_blocks1[7].color = "#0b5e6fff"
    new_game_state.new_blocks1[8].color = "#6e1badff"
    new_game_state.new_blocks1[9].color = "#6e1badff"
    new_game_state.new_blocks1[10].color = "#000000"
    new_game_state.new_blocks1[11].color = "#319676ff"
    if new_game_state.gameStarted{
      change_one_block(block)
    }
  }
}
fn color_two_control() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#ff0000"
    new_game_state.new_blocks1[1].color = "#00ff00"
    new_game_state.new_blocks1[2].color = "#0000ff"
    new_game_state.new_blocks1[3].color = "#ffff00"
    new_game_state.new_blocks1[4].color = "#ff00ff"
    new_game_state.new_blocks1[5].color = "#800000"
    new_game_state.new_blocks1[6].color = "#008000"
    new_game_state.new_blocks1[7].color = "#000080"
    new_game_state.new_blocks1[8].color = "#808080"
    new_game_state.new_blocks1[9].color = "#800080"
    new_game_state.new_blocks1[10].color = "#008080"
    new_game_state.new_blocks1[11].color = "#abd1c5ff"
    if new_game_state.gameStarted{
      change_two_block(block)
    }
  }
}
fn color_three_control() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#a52a2a"
    new_game_state.new_blocks1[1].color = "#deb887"
    new_game_state.new_blocks1[2].color = "#5f9ea0"
    new_game_state.new_blocks1[3].color = "#7fff00"
    new_game_state.new_blocks1[4].color = "#d2691e"
    new_game_state.new_blocks1[5].color = "#ff7f50"
    new_game_state.new_blocks1[6].color = "#6495ed"
    new_game_state.new_blocks1[7].color = "#dda0dd"
    new_game_state.new_blocks1[8].color = "#f0e68c"
    new_game_state.new_blocks1[9].color = "#add8e6"
    new_game_state.new_blocks1[10].color = "#f08080"
    new_game_state.new_blocks1[11].color = "#98fb98"
    if new_game_state.gameStarted{
      change_three_block(block)
    }
  }
}
fn color_four_control() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#e6e6fa"
    new_game_state.new_blocks1[1].color = "#ff6347"
    new_game_state.new_blocks1[2].color = "#ffd700"
    new_game_state.new_blocks1[3].color = "#ba55d3"
    new_game_state.new_blocks1[4].color = "#32cd32"
    new_game_state.new_blocks1[5].color = "#6a5acd"
    new_game_state.new_blocks1[6].color = "#9370db"
    new_game_state.new_blocks1[7].color = "#f0e68c"
    new_game_state.new_blocks1[8].color = "#f5deb3"
    new_game_state.new_blocks1[9].color = "#f4a460"
    new_game_state.new_blocks1[10].color = "#d3d3d3"
    new_game_state.new_blocks1[11].color = "#9acd32"
    if new_game_state.gameStarted{
      change_four_block(block)
    }
  }
}
fn color_red_control() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#fff"
    new_game_state.new_blocks1[1].color = "#fff"
    new_game_state.new_blocks1[2].color = "#fff"
    new_game_state.new_blocks1[3].color = "#fff"
    new_game_state.new_blocks1[4].color = "#fff"
    new_game_state.new_blocks1[5].color = "#fff"
    new_game_state.new_blocks1[6].color = "#fff"
    new_game_state.new_blocks1[7].color = "#fff"
    new_game_state.new_blocks1[8].color = "#fff"
    new_game_state.new_blocks1[9].color = "#fff"
    new_game_state.new_blocks1[10].color = "#fff"
    new_game_state.new_blocks1[11].color = "#fff"
    change_red_block(block)
  }
}
fn color_red_control1() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#fff"
    new_game_state.new_blocks1[1].color = "#fff"
    new_game_state.new_blocks1[2].color = "#fff"
    new_game_state.new_blocks1[3].color = "#fff"
    new_game_state.new_blocks1[4].color = "#fff"
    new_game_state.new_blocks1[5].color = "#fff"
    new_game_state.new_blocks1[6].color = "#fff"
    new_game_state.new_blocks1[7].color = "#fff"
    new_game_state.new_blocks1[8].color = "#fff"
    new_game_state.new_blocks1[9].color = "#fff"
    new_game_state.new_blocks1[10].color = "#fff"
    new_game_state.new_blocks1[11].color = "#fff"
    change_red_block1(block)
  }
}
fn color_red_control2() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#fff"
    new_game_state.new_blocks1[1].color = "#fff"
    new_game_state.new_blocks1[2].color = "#fff"
    new_game_state.new_blocks1[3].color = "#fff"
    new_game_state.new_blocks1[4].color = "#fff"
    new_game_state.new_blocks1[5].color = "#fff"
    new_game_state.new_blocks1[6].color = "#fff"
    new_game_state.new_blocks1[7].color = "#fff"
    new_game_state.new_blocks1[8].color = "#fff"
    new_game_state.new_blocks1[9].color = "#fff"
    new_game_state.new_blocks1[10].color = "#fff"
    new_game_state.new_blocks1[11].color = "#fff"
    change_red_block2(block)
  }
}
fn color_red_control3() -> Unit {
  for block in new_game_state.new_blocks1{
    new_game_state.new_blocks1[0].color = "#fff"
    new_game_state.new_blocks1[1].color = "#fff"
    new_game_state.new_blocks1[2].color = "#fff"
    new_game_state.new_blocks1[3].color = "#fff"
    new_game_state.new_blocks1[4].color = "#fff"
    new_game_state.new_blocks1[5].color = "#fff"
    new_game_state.new_blocks1[6].color = "#fff"
    new_game_state.new_blocks1[7].color = "#fff"
    new_game_state.new_blocks1[8].color = "#fff"
    new_game_state.new_blocks1[9].color = "#fff"
    new_game_state.new_blocks1[10].color = "#fff"
    new_game_state.new_blocks1[11].color = "#fff"
    change_red_block3(block)
  }
}
// 取消中心颜色方块遮罩
fn color_control_cancle() -> Unit {
  for block in new_game_state.new_blocks{
    change_to_block(block)
  }
}
fn color_control1_cancle() -> Unit {
  for block in new_game_state.new_blocks{
    new_game_state.new_blocks[0].color = "#ff0000ff"
    new_game_state.new_blocks[3].color = "#00ff00ff"
    new_game_state.new_blocks[9].color = "#0000ffff"
    new_game_state.new_blocks[1].color = "#ffff00ff"
    new_game_state.new_blocks[4].color = "#ff00ffff"
    new_game_state.new_blocks[10].color = "#00ffffff"
    new_game_state.new_blocks[2].color = "#ffffffff"
    new_game_state.new_blocks[5].color = "#000000ff"
    new_game_state.new_blocks[8].color = "#ffa500ff"
    new_game_state.new_blocks[6].color = "#800080ff"
    new_game_state.new_blocks[7].color = "#ffc0cbff"
    new_game_state.new_blocks[11].color = "#808080ff"
    change_to_block(block)
  }
}
fn color_control_cancle1() -> Unit {
  for block in new_game_state.new_blocks1{
    change_to_block1(block)
  }
}
fn color_control_cancle2() -> Unit {
  for block in new_game_state.new_blocks1{
    change_to_block2(block)
  }
}
fn color_control_cancle3() -> Unit {
  for block in new_game_state.new_blocks1{
    change_to_block3(block)
  }
}
fn color_control_cancle4() -> Unit {
  for block in new_game_state.new_blocks1{
    change_to_block4(block)
  }
}
// 下边第一个颜色方块
fn add_new_two_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#000000"
    new_game_state.select_one_blocks[1].color = "#c7a422ff"
    new_game_state.select_one_blocks[2].color = "#319676ff"
    new_game_state.select_one_blocks[3].color = "#000000"
    new_game_state.select_one_blocks[4].color = "#6e1badff"
    new_game_state.select_one_blocks[5].color = "#319676ff"
    new_game_state.select_one_blocks[6].color = "#c7a422ff"
    new_game_state.select_one_blocks[7].color = "#0b5e6fff"
    new_game_state.select_one_blocks[8].color = "#6e1badff"
    new_game_state.select_one_blocks[9].color = "#6e1badff"
    new_game_state.select_one_blocks[10].color = "#000000"
    new_game_state.select_one_blocks[11].color = "#319676ff"
    change_one_block(block)
  }
}

fn add_new_two_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    new_game_state.select_two_blocks[0].color = "#000000"
    new_game_state.select_two_blocks[1].color = "#c7a422ff"
    new_game_state.select_two_blocks[2].color = "#319676ff"
    new_game_state.select_two_blocks[3].color = "#000000"
    new_game_state.select_two_blocks[4].color = "#c7a422ff"
    new_game_state.select_two_blocks[5].color = "#319676ff"
    new_game_state.select_two_blocks[6].color = "#000000"
    new_game_state.select_two_blocks[7].color = "#0b5e6fff"
    new_game_state.select_two_blocks[8].color = "#319676ff"
    new_game_state.select_two_blocks[9].color = "#6e1badff"
    new_game_state.select_two_blocks[10].color = "#000000"
    new_game_state.select_two_blocks[11].color = "#319676ff"
    change_one_block(block)
  }
}

fn add_new_two_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    new_game_state.select_three_blocks[0].color = "#6e1badff"
    new_game_state.select_three_blocks[1].color = "#c7a422ff"
    new_game_state.select_three_blocks[2].color = "#0b5e6fff"
    new_game_state.select_three_blocks[3].color = "#000000"
    new_game_state.select_three_blocks[4].color = "#c7a422ff"
    new_game_state.select_three_blocks[5].color = "#319676ff"
    new_game_state.select_three_blocks[6].color = "#000000"
    new_game_state.select_three_blocks[7].color = "#0b5e6fff"
    new_game_state.select_three_blocks[8].color = "#319676ff"
    new_game_state.select_three_blocks[9].color = "#6e1badff"
    new_game_state.select_three_blocks[10].color = "#000000"
    new_game_state.select_three_blocks[11].color = "#c7a422ff"
    change_one_block(block)
  }
}

fn add_new_three_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#ff0000"
    new_game_state.select_one_blocks[1].color = "#800080"
    new_game_state.select_one_blocks[2].color = "#0000ff"
    new_game_state.select_one_blocks[3].color = "#ffff00"
    new_game_state.select_one_blocks[4].color = "#ff00ff"
    new_game_state.select_one_blocks[5].color = "#800000"
    new_game_state.select_one_blocks[6].color = "#008000"
    new_game_state.select_one_blocks[7].color = "#000080"
    new_game_state.select_one_blocks[8].color = "#808080"
    new_game_state.select_one_blocks[9].color = "#00ff00"
    new_game_state.select_one_blocks[10].color = "#008080"
    new_game_state.select_one_blocks[11].color = "#abd1c5ff"
    change_two_block(block)
  }
}

fn add_new_three_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    new_game_state.select_two_blocks[0].color = "#800000"
    new_game_state.select_two_blocks[1].color = "#00ff00"
    new_game_state.select_two_blocks[2].color = "#0000ff"
    new_game_state.select_two_blocks[3].color = "#008080"
    new_game_state.select_two_blocks[4].color = "#ff00ff"
    new_game_state.select_two_blocks[5].color = "#ff0000"
    new_game_state.select_two_blocks[6].color = "#008000"
    new_game_state.select_two_blocks[7].color = "#000080"
    new_game_state.select_two_blocks[8].color = "#808080"
    new_game_state.select_two_blocks[9].color = "#800080"
    new_game_state.select_two_blocks[10].color = "#ffff00"
    new_game_state.select_two_blocks[11].color = "#abd1c5ff"
    change_two_block(block)
  }
}

fn add_new_three_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    new_game_state.select_three_blocks[0].color = "#ff0000"
    new_game_state.select_three_blocks[1].color = "#00ff00"
    new_game_state.select_three_blocks[2].color = "#0000ff"
    new_game_state.select_three_blocks[3].color = "#ffff00"
    new_game_state.select_three_blocks[4].color = "#ff00ff"
    new_game_state.select_three_blocks[5].color = "#800000"
    new_game_state.select_three_blocks[6].color = "#008000"
    new_game_state.select_three_blocks[7].color = "#000080"
    new_game_state.select_three_blocks[8].color = "#808080"
    new_game_state.select_three_blocks[9].color = "#800080"
    new_game_state.select_three_blocks[10].color = "#008080"
    new_game_state.select_three_blocks[11].color = "#abd1c5ff"
    change_two_block(block)
  }
}

fn add_new_four_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#a52a2a"
    new_game_state.select_one_blocks[1].color = "#deb887"
    new_game_state.select_one_blocks[2].color = "#dda0dd"
    new_game_state.select_one_blocks[3].color = "#7fff00"
    new_game_state.select_one_blocks[4].color = "#98fb98"
    new_game_state.select_one_blocks[5].color = "#ff7f50"
    new_game_state.select_one_blocks[6].color = "#6495ed"
    new_game_state.select_one_blocks[7].color = "#dda0dd"
    new_game_state.select_one_blocks[8].color = "#f0e68c"
    new_game_state.select_one_blocks[9].color = "#add8e6"
    new_game_state.select_one_blocks[10].color = "#f08080"
    new_game_state.select_one_blocks[11].color = "#d2691e"
    change_three_block(block)
  }
}
fn add_new_four_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    new_game_state.select_two_blocks[0].color = "#a52a2a"
    new_game_state.select_two_blocks[1].color = "#deb887"
    new_game_state.select_two_blocks[2].color = "#5f9ea0"
    new_game_state.select_two_blocks[3].color = "#7fff00"
    new_game_state.select_two_blocks[4].color = "#d2691e"
    new_game_state.select_two_blocks[5].color = "#ff7f50"
    new_game_state.select_two_blocks[6].color = "#6495ed"
    new_game_state.select_two_blocks[7].color = "#dda0dd"
    new_game_state.select_two_blocks[8].color = "#f0e68c"
    new_game_state.select_two_blocks[9].color = "#add8e6"
    new_game_state.select_two_blocks[10].color = "#f08080"
    new_game_state.select_two_blocks[11].color = "#98fb98"
    change_three_block(block)
  }
}

fn add_new_four_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    new_game_state.select_three_blocks[0].color = "#a52a2a"
    new_game_state.select_three_blocks[1].color = "#deb887"
    new_game_state.select_three_blocks[2].color = "#5f9ea0"
    new_game_state.select_three_blocks[3].color = "#98fb98"
    new_game_state.select_three_blocks[4].color = "#d2691e"
    new_game_state.select_three_blocks[5].color = "#ff7f50"
    new_game_state.select_three_blocks[6].color = "#6495ed"
    new_game_state.select_three_blocks[7].color = "#dda0dd"
    new_game_state.select_three_blocks[8].color = "#f0e68c"
    new_game_state.select_three_blocks[9].color = "#add8e6"
    new_game_state.select_three_blocks[10].color = "#f08080"
    new_game_state.select_three_blocks[11].color = "#7fff00"
    change_three_block(block)
  }
}
fn add_new_five_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#e6e6fa"
    new_game_state.select_one_blocks[1].color = "#ff6347"
    new_game_state.select_one_blocks[2].color = "#ffd700"
    new_game_state.select_one_blocks[3].color = "#ba55d3"
    new_game_state.select_one_blocks[4].color = "#32cd32"
    new_game_state.select_one_blocks[5].color = "#6a5acd"
    new_game_state.select_one_blocks[6].color = "#9370db"
    new_game_state.select_one_blocks[7].color = "#f0e68c"
    new_game_state.select_one_blocks[8].color = "#f5deb3"
    new_game_state.select_one_blocks[9].color = "#f4a460"
    new_game_state.select_one_blocks[10].color = "#d3d3d3"
    new_game_state.select_one_blocks[11].color = "#9acd32"
    change_four_block(block)
  }
}
fn add_new_five_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    new_game_state.select_two_blocks[0].color = "#e6e6fa"
    new_game_state.select_two_blocks[1].color = "#ff6347"
    new_game_state.select_two_blocks[2].color = "#ba55d3"
    new_game_state.select_two_blocks[3].color = "#ffd700"
    new_game_state.select_two_blocks[4].color = "#32cd32"
    new_game_state.select_two_blocks[5].color = "#6a5acd"
    new_game_state.select_two_blocks[6].color = "#9370db"
    new_game_state.select_two_blocks[7].color = "#f0e68c"
    new_game_state.select_two_blocks[8].color = "#f5deb3"
    new_game_state.select_two_blocks[9].color = "#f4a460"
    new_game_state.select_two_blocks[10].color = "#f4a460"
    new_game_state.select_two_blocks[11].color = "#9acd32"
    change_four_block(block)
  }
}
fn add_new_five_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    new_game_state.select_three_blocks[0].color = "#e6e6fa"
    new_game_state.select_three_blocks[1].color = "#9370db"
    new_game_state.select_three_blocks[2].color = "#ffd700"
    new_game_state.select_three_blocks[3].color = "#ba55d3"
    new_game_state.select_three_blocks[4].color = "#32cd32"
    new_game_state.select_three_blocks[5].color = "#6a5acd"
    new_game_state.select_three_blocks[6].color = "#ff6347"
    new_game_state.select_three_blocks[7].color = "#f0e68c"
    new_game_state.select_three_blocks[8].color = "#32cd32"
    new_game_state.select_three_blocks[9].color = "#f4a460"
    new_game_state.select_three_blocks[10].color = "#d3d3d3"
    new_game_state.select_three_blocks[11].color = "#9acd32"
    change_four_block(block)
  }
}