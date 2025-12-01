///|
pub(all) struct SelectLevelPage {
  mut unlocked_levels : Array[Int]
  mut total_levels : Int
  mut current_level : Int
  mut is_open : Bool
  mut next_level_unlocked : Bool
  mut unlock_animation_progress : Double
}

///|
pub fn SelectLevelPage::new() -> SelectLevelPage {
  SelectLevelPage::{
    unlocked_levels: [1],
    total_levels: @Map.get_level_count(),
    current_level: 1,
    is_open: false,
    next_level_unlocked: false,
    unlock_animation_progress: 0.0,
  }
}

///|
let selectLevelPageInstance : Ref[SelectLevelPage?] = Ref::new(None)

///|
pub let selectLevelPageSingleton : SelectLevelPage = SelectLevelPage::get_instance()

///|
pub fn SelectLevelPage::get_instance() -> SelectLevelPage {
  match selectLevelPageInstance.val {
    Some(page) => page
    None => {
      let new_instance = SelectLevelPage::new()
      selectLevelPageInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SelectLevelPage::is_level_unlocked(
  self : SelectLevelPage,
  level : Int,
) -> Bool {
  self.unlocked_levels.contains(level)
}

///|
// move to menu panel controller
// pub fn SelectLevelPage::unlock_next_level(
//   self : SelectLevelPage,
//   current_level : Int,
// ) -> Unit {
//   if current_level < self.total_levels {
//     let next_level = current_level + 1
//     if !self.unlocked_levels.contains(next_level) {
//       self.unlocked_levels.push(next_level)
//       self.next_level_unlocked = true
//       self.unlock_animation_progress = 0.0
//     }
//     @Panels.switch_level(next_level)
//   }
// }

///|

///|
pub fn SelectLevelPage::go_to_level(
  self : SelectLevelPage,
  level : Int,
) -> Unit {
  if self.is_level_unlocked(level) {
    self.current_level = level
    self.is_open = false
    // The game will handle transitioning to the game page
  }
}

///|
// pub fn SelectLevelPage::on_win(
//   self : SelectLevelPage,
//   current_level : Int,
// ) -> Unit {
//   self.unlock_next_level(current_level)
//   // self.is_open = true
// }
