// 鲲鹏之变游戏主程序
// 基于庄子《逍遥游》的鲲鹏变化神话

// 游戏主模块：导出供 JS 调用的 WASM 接口（通过 main 包导出）

fn main {
  let state = @lib.new()
  @lib.initialize(state)
}

// 以下为导出到 WASM 的包装函数（转发到 lib 实现）
pub fn init_game() -> Unit { @lib.init_game() }
pub fn move_player_wasm(direction : Int) -> Unit { @lib.move_player_wasm(direction) }
pub fn update_game_wasm() -> Int { @lib.update_game_wasm() }
pub fn get_player_pos_wasm() -> Int { @lib.get_player_pos_wasm() }
pub fn get_player_info_wasm() -> Int { @lib.get_player_info_wasm() }
pub fn get_ai_fish_info_wasm(index : Int) -> Int { @lib.get_ai_fish_info_wasm(index) }
pub fn get_ai_fish_details_wasm(index : Int) -> Int { @lib.get_ai_fish_details_wasm(index) }
pub fn get_game_status_wasm() -> Int { @lib.get_game_status_wasm() }
pub fn get_invincible_time_wasm() -> Int { @lib.get_invincible_time_wasm() }
