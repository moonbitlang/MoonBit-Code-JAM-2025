fn update_timer_display() -> Unit {
  new_game_state.timer_box.content = "Time: " + new_game_state.timer.to_string()
}