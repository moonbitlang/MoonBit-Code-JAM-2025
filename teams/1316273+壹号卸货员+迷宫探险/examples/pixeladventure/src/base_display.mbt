fn update_timer_display() -> Unit {
  new_game_state.timer_box.content = "Time: " + new_game_state.timer.to_string()
}
fn update_score_display() -> Unit{
  new_game_state.level_box.content = "score: " + new_game_state.score.to_string()
}