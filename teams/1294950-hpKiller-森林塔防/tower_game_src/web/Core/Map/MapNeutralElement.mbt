///|
pub(all) struct MapNeutralElement {
  mut neutralElements : Array[&@NeutralElement.NeutralElement]
}

///|
pub fn MapNeutralElement::new() -> MapNeutralElement {
  MapNeutralElement::{ neutralElements: Array::new() }
}

///|
let mapNeutralElementInstance : Ref[MapNeutralElement?] = Ref::new(None)

///|
pub let mapNeutralElementSingleton : MapNeutralElement = MapNeutralElement::get_instance()

///|
pub fn MapNeutralElement::get_instance() -> MapNeutralElement {
  match mapNeutralElementInstance.val {
    Some(render) => render
    None => {
      let new_instance = MapNeutralElement::new()
      mapNeutralElementInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn set_neutral_element_by_level(level : Int) -> Unit {
  map_grid_system_singleton.neutralElement = get_map_by_level(level).neutral_element
}

///|
fn init {
  set_neutral_element_by_level(1)
  // mapNeutralElementSingleton.neutralElements.insert(
  //   mapNeutralElementSingleton.neutralElements.length(),
  //   @NeutralElement.SlotMachineNeutralElement::new(x=2, y=2, 100),
  // )
  // mapNeutralElementSingleton.neutralElements.insert(
  //   mapNeutralElementSingleton.neutralElements.length(),
  //   @NeutralElement.WeedNeutralElement::new(x=4, y=4, 100),
  // )
  // map_grid_system_singleton.neutralElement = mapNeutralElementSingleton.neutralElements
}
