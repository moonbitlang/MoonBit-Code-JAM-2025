// 下边第一个颜色方块
fn add_new_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    add_block(block)
  }
}
fn add_new1_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#ff3300ff"    // 纯红→偏橙红
    new_game_state.select_one_blocks[1].color = "#ffff33ff"    // 纯黄→柠檬黄
    new_game_state.select_one_blocks[2].color = "#fffaf0ff"    // 纯白→米白
    new_game_state.select_one_blocks[3].color = "#33ff00ff"    // 纯绿→黄绿
    new_game_state.select_one_blocks[4].color = "#ff33ffff"    // 品红→偏紫
    new_game_state.select_one_blocks[5].color = "#0a0a0aff"    // 纯黑→极深灰
    new_game_state.select_one_blocks[6].color = "#8a008aff"    // 紫色→微调
    new_game_state.select_one_blocks[7].color = "#ffc0d0ff"    // 粉色→偏紫粉
    new_game_state.select_one_blocks[8].color = "#ff9500ff"    // 橙色→红橙
    new_game_state.select_one_blocks[9].color = "#0033ffff"    // 纯蓝→紫蓝
    new_game_state.select_one_blocks[10].color = "#00ffff33ff" // 青色→绿青
    new_game_state.select_one_blocks[11].color = "#7a7a7aff"   // 灰色→略暗
    add_block1(block)
  }
}
fn add_new1_to_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#b5238cff"    // 纯红→偏橙红
    new_game_state.select_one_blocks[1].color = "#c01616ff"    // 纯黄→柠檬黄
    new_game_state.select_one_blocks[2].color = "#000000"    // 纯白→米白
    new_game_state.select_one_blocks[3].color = "#b5238cff"    // 纯绿→黄绿
    new_game_state.select_one_blocks[4].color = "#c01616ff"    // 品红→偏紫
    new_game_state.select_one_blocks[5].color = "#000000"    // 纯黑→极深灰
    new_game_state.select_one_blocks[6].color = "#b5238cff"    // 紫色→微调
    new_game_state.select_one_blocks[7].color = "#c01616ff"    // 粉色→偏紫粉
    new_game_state.select_one_blocks[8].color = "#000000"    // 橙色→红橙
    new_game_state.select_one_blocks[9].color = "#b5238cff"    // 纯蓝→紫蓝
    new_game_state.select_one_blocks[10].color = "#c01616ff" // 青色→绿青
    new_game_state.select_one_blocks[11].color = "#000000"   // 灰色→略暗
    add_block1(block)
  }
}
fn add_new1_to_to_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#e0155fff"    // 红宝石→偏橙红
    new_game_state.select_one_blocks[1].color = "#50c87cff"    // 祖母绿→偏青绿
    new_game_state.select_one_blocks[2].color = "#00c0ffef"    // 蓝宝石→偏天蓝
    new_game_state.select_one_blocks[3].color = "#9f59b6ff"    // 紫水晶→偏红紫
    new_game_state.select_one_blocks[4].color = "#3898dbff"    // 黄宝石→偏绿黄
    new_game_state.select_one_blocks[5].color = "#ea7e22ff"    // 黄水晶→偏橙
    new_game_state.select_one_blocks[6].color = "#344d5eff"    // 黑玛瑙→偏蓝灰
    new_game_state.select_one_blocks[7].color = "#1abc98ff"    // 绿松石→偏绿
    new_game_state.select_one_blocks[8].color = "#eb4c3cff"    // 石榴红→偏朱红
    new_game_state.select_one_blocks[9].color = "#f1c80fff"    // 蓝玉→偏紫蓝
    new_game_state.select_one_blocks[10].color = "#2ecc75ff"   // 翡翠绿→偏黄绿
    new_game_state.select_one_blocks[11].color = "#f39c16ff"   // 琥珀→偏金
    add_block1(block)
  }
}
// 下边第二个颜色方块
fn add_new_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    add_block(block)
  }
}
fn add_new1_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    new_game_state.select_two_blocks[0].color = "#ff0000ff"
    new_game_state.select_two_blocks[1].color = "#ffff00ff"
    new_game_state.select_two_blocks[2].color = "#ffffffff"
    new_game_state.select_two_blocks[3].color = "#00ff00ff"
    new_game_state.select_two_blocks[4].color = "#ff00ffff"
    new_game_state.select_two_blocks[5].color = "#000000ff"
    new_game_state.select_two_blocks[6].color = "#800080ff"
    new_game_state.select_two_blocks[7].color = "#ffc0cbff"
    new_game_state.select_two_blocks[8].color = "#ffa500ff"
    new_game_state.select_two_blocks[9].color = "#0000ffff"
    new_game_state.select_two_blocks[10].color = "#00ffffff"
    new_game_state.select_two_blocks[11].color = "#808080ff"
    add_block1(block)
  }
}
fn add_new1_to_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    new_game_state.select_two_blocks[0].color = "#c01616ff"
    new_game_state.select_two_blocks[1].color = "#b5238cff"
    new_game_state.select_two_blocks[2].color = "#000000"
    new_game_state.select_two_blocks[3].color = "#c01616ff"
    new_game_state.select_two_blocks[4].color = "#b5238cff"
    new_game_state.select_two_blocks[5].color = "#000000"
    new_game_state.select_two_blocks[6].color = "#c01616ff"
    new_game_state.select_two_blocks[7].color = "#b5238cff"
    new_game_state.select_two_blocks[8].color = "#000000"
    new_game_state.select_two_blocks[9].color = "#c01616ff"
    new_game_state.select_two_blocks[10].color = "#b5238cff"
    new_game_state.select_two_blocks[11].color = "#000000"
    add_block1(block)
  }
}
fn add_new1_to_to_block2() -> Unit{
  for block in new_game_state.select_two_blocks{
    new_game_state.select_two_blocks[0].color = "#e0115fff"
    new_game_state.select_two_blocks[1].color = "#50c878ff"
    new_game_state.select_two_blocks[2].color = "#00bfffef"
    new_game_state.select_two_blocks[3].color = "#9b59b6ff"
    new_game_state.select_two_blocks[4].color = "#f1c40fff"
    new_game_state.select_two_blocks[5].color = "#e67e22ff"
    new_game_state.select_two_blocks[6].color = "#34495eff"
    new_game_state.select_two_blocks[7].color = "#1abc9cff"
    new_game_state.select_two_blocks[8].color = "#e74c3cff"
    new_game_state.select_two_blocks[9].color = "#3498dbff"
    new_game_state.select_two_blocks[10].color = "#2ecc71ff"
    new_game_state.select_two_blocks[11].color = "#f39c12ff"
    add_block1(block)
  }
}
// 下边第三个颜色方块
fn add_new_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    add_block(block)
  }
}
fn add_new1_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    new_game_state.select_three_blocks[0].color = "#e00000ff"    // 纯红→变暗
    new_game_state.select_three_blocks[1].color = "#ffff4dff"    // 纯黄→提亮
    new_game_state.select_three_blocks[2].color = "#f5f5f5ff"    // 纯白→微灰
    new_game_state.select_three_blocks[3].color = "#00e000ff"    // 纯绿→变暗
    new_game_state.select_three_blocks[4].color = "#ff4dffff"    // 品红→提亮
    new_game_state.select_three_blocks[5].color = "#000000ff"    // 纯黑→不变
    new_game_state.select_three_blocks[6].color = "#800080ff"    // 紫色→不变
    new_game_state.select_three_blocks[7].color = "#ffb3c6ff"    // 粉色→微调
    new_game_state.select_three_blocks[8].color = "#ff9900ff"    // 橙色→变暗
    new_game_state.select_three_blocks[9].color = "#4d4dffff"    // 纯蓝→提亮
    new_game_state.select_three_blocks[10].color = "#00e0e0ff"   // 青色→变暗
    new_game_state.select_three_blocks[11].color = "#8a8a8aff"   // 灰色→微调
    add_block1(block)
  }
}
fn add_new1_to_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    new_game_state.select_three_blocks[0].color = "#c01616ff"    // 纯红→变暗
    new_game_state.select_three_blocks[1].color = "#000000"    // 纯黄→提亮
    new_game_state.select_three_blocks[2].color = "#b5238cff"    // 纯白→微灰
    new_game_state.select_three_blocks[3].color = "#c01616ff"    // 纯绿→变暗
    new_game_state.select_three_blocks[4].color = "#000000"    // 品红→提亮
    new_game_state.select_three_blocks[5].color = "#b5238cff"    // 纯黑→不变
    new_game_state.select_three_blocks[6].color = "#c01616ff"    // 紫色→不变
    new_game_state.select_three_blocks[7].color = "#000000"    // 粉色→微调
    new_game_state.select_three_blocks[8].color = "#b5238cff"    // 橙色→变暗
    new_game_state.select_three_blocks[9].color = "#c01616ff"    // 纯蓝→提亮
    new_game_state.select_three_blocks[10].color = "#000000"   // 青色→变暗
    new_game_state.select_three_blocks[11].color = "#b5238cff"   // 灰色→微调
    add_block1(block)
  }
}
fn add_new1_to_to_block3() -> Unit{
  for block in new_game_state.select_three_blocks{
    new_game_state.select_three_blocks[0].color = "#d0115fff"    // 红宝石→暗红
    new_game_state.select_three_blocks[1].color = "#50c878ff"    // 祖母绿→不变
    new_game_state.select_three_blocks[2].color = "#00afffef"    // 蓝宝石→深蓝
    new_game_state.select_three_blocks[3].color = "#8b59b6ff"    // 紫水晶→暗紫
    new_game_state.select_three_blocks[4].color = "#f1c40fff"    // 黄宝石→不变
    new_game_state.select_three_blocks[5].color = "#d67e22ff"    // 黄水晶→暗黄
    new_game_state.select_three_blocks[6].color = "#34495eff"    // 黑玛瑙→不变
    new_game_state.select_three_blocks[7].color = "#1abc9cff"    // 绿松石→不变
    new_game_state.select_three_blocks[8].color = "#d74c3cff"    // 石榴红→暗红
    new_game_state.select_three_blocks[9].color = "#3498dbff"    // 蓝玉→不变
    new_game_state.select_three_blocks[10].color = "#2ecc71ff"   // 翡翠绿→不变
    new_game_state.select_three_blocks[11].color = "#e39c12ff"   // 琥珀→暗金
    add_block1(block)
  }
}