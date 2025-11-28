///|
fn set_score(score : Int) -> Unit {
  game_state.score = score
  game_state.score_bar.content = "Score: " + game_state.score.to_string()
}

///|
fn random_cat_level() -> Int {
  // Use the global random generator instead of creating a new one.
  let roll = game_state.score % 10
  let value = if roll < 0 { roll + 10 } else { roll }
  if value < 5 {
    // 0-49: 50% chance
    1
  } else if value < 7 {
    // 50-84: 35% chance
    2
  } else if value < 9 {
    // 85-94: 10% chance
    3
  } else {
    // 95-99: 5% chance
    4
  }
}
