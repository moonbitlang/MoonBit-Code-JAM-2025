///|
pub(all) struct NeutralElementClick {
  mut cur_center_x : Double
  mut cur_center_y : Double
  mut last_center_x : Double
  mut last_center_y : Double
  mut e : &NeutralElement
  mut render_attack_tips : Bool
}

///|
pub fn NeutralElementClick::new() -> NeutralElementClick {
  NeutralElementClick::{
    cur_center_x: -1,
    cur_center_y: -1,
    last_center_x: -1,
    last_center_y: -1,
    e: StoneNeutralElement::new(),
    render_attack_tips: false,
  }
}

///|
let neutral_element_click_instance : Ref[NeutralElementClick?] = Ref::new(None)

///|
pub let neutral_element_click_singleton : NeutralElementClick = NeutralElementClick::get_instance()

///|
pub fn NeutralElementClick::get_instance() -> NeutralElementClick {
  match neutral_element_click_instance.val {
    Some(render) => render
    None => {
      let new_instance = NeutralElementClick::new()
      neutral_element_click_instance.val = Some(new_instance)
      new_instance
    }
  }
}
