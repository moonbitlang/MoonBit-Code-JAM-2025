fn update_timer_display() -> Unit {
  new_game_state.timer_box.content = "Time: " + new_game_state.timer.to_string()
}
fn update_timer_r_display() -> Unit {
  new_game_state.timerr_box.content = "Time: " + new_game_state.timerr.to_string()
}
fn update_timer_rr_display() -> Unit {
  new_game_state.timerrr_box.content = "Time: " + new_game_state.timerrr.to_string()
}
fn update_timer1_display() -> Unit {
  new_game_state.timer1_box.content = "Time: " + new_game_state.timer1.to_string()
}
fn update_timer2_display() -> Unit {
  new_game_state.timer2_box.content = "Time: " + new_game_state.timer2.to_string()
}
fn clear_timer_display() -> Unit {
  new_game_state.timer_box.content = ""
}
fn clear_timer_r_display() -> Unit {
  new_game_state.timerr_box.content = ""
}
fn clear_timer_rr_display() -> Unit {
  new_game_state.timerrr_box.content = ""
}
fn update_change_display() -> Unit {
  new_game_state.score_box.content = "Change: " + new_game_state.change.to_string()
}
fn clear_change_display() -> Unit {
  new_game_state.score_box.content = ""
}
fn update_level_display() -> Unit{
  new_game_state.level_box.content = "LEVEL: " + new_game_state.level.to_string()
}
fn clear_level_display() -> Unit{
  new_game_state.level_box.content = ""
}