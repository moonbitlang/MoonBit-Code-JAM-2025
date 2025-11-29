fn add_new_two1_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.select_one_blocks[0].color = "#b8b8f0ff"  // 淡紫蓝→偏灰紫
    new_game_state.select_one_blocks[1].color = "#b3d9f0ff"  // 天蓝→亮度微降
    new_game_state.select_one_blocks[2].color = "#d9ffb3ff"  // 薄荷绿 (未变)
    new_game_state.select_one_blocks[3].color = "#fff5b3ff"  // 淡黄→偏橙黄
    new_game_state.select_one_blocks[4].color = "#e6b3ffff"  // 薰衣草紫 (未变)
    new_game_state.select_one_blocks[5].color = "#ffb8b8ff"  // 珊瑚粉→加亮
    new_game_state.select_one_blocks[6].color = "#b3ffffcc"  // 浅青 (未变)
    new_game_state.select_one_blocks[7].color = "#ffd9b8ff"  // 桃色→加亮
    new_game_state.select_one_blocks[8].color = "#f0b3ffff"  // 紫丁香 (未变)
    new_game_state.select_one_blocks[9].color = "#b3f8b3ff"  // 春绿→饱和度微降
    new_game_state.select_one_blocks[10].color = "#ffb3d9ff" // 粉玫瑰 (未变)
    new_game_state.select_one_blocks[11].color = "#f0f0f0ff" // 米白→稍暗
    add_block(block)
  }
}
fn add_new_two2_block1() -> Unit{
  for block in new_game_state.select_one_blocks{
    new_game_state.new_blocks1[0].color = "#b3b3ffff"  // 淡紫蓝 (未变)
    new_game_state.new_blocks1[1].color = "#b3d9ffff"  // 天蓝 (未变)
    new_game_state.new_blocks1[2].color = "#d9f5b3ff"  // 薄荷绿→饱和度↓
    new_game_state.new_blocks1[3].color = "#ffffb3ff"  // 淡黄 (未变)
    new_game_state.new_blocks1[4].color = "#e0b3f5ff"  // 薰衣草紫→亮度↓
    new_game_state.new_blocks1[5].color = "#ffb3b3ff"  // 珊瑚粉 (未变)
    new_game_state.new_blocks1[6].color = "#b3f5ffcc"  // 浅青→偏蓝
    new_game_state.new_blocks1[7].color = "#ffd9b3ff"  // 桃色 (未变)
    new_game_state.new_blocks1[8].color = "#f0b8f8ff"  // 紫丁香→饱和度↓
    new_game_state.new_blocks1[9].color = "#b3ffb3ff"  // 春绿 (未变)
    new_game_state.new_blocks1[10].color = "#ffb3e0ff" // 粉玫瑰→偏紫
    new_game_state.new_blocks1[11].color = "#fafafaff" // 米白→更纯白
    add_block(block)
  }
}