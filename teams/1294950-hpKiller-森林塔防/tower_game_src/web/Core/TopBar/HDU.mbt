///|
pub(all) struct HDU {
  mut gold : Double
  mut x : Double
  mut y : Double
  mut w : Double
  mut h : Double
  mut padding : Double
  mut margin : Double
}

///|
pub fn HDU::new() -> HDU {
  let padding = 10.0
  let margin = 10.0
  let w = 120.0 // Width for coin display
  let h = 36.0 // Height for coin display
  let y = padding + margin
  HDU::{ gold: 1000.0, x: padding, y, w, h, padding, margin }
}

///|
let hduInstance : Ref[HDU?] = Ref::new(None)

///|
pub let hduSingleton : HDU = HDU::get_instance()

///|
pub fn HDU::get_instance() -> HDU {
  match hduInstance.val {
    Some(instance) => instance
    None => {
      let new_instance = HDU::new()
      hduInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn HDU::set_HDU_by_level(self : HDU, level : Int) -> Unit {
  ignore(self)
  self.gold = @Map.get_map_by_level(level).coins.to_double()
}

///|
pub fn HDU::enough(self : HDU, gold : Double) -> Bool {
  ignore(self)
  self.gold - gold > 0
}

///|
pub fn HDU::spend_gold(self : HDU, gold : Double) -> Unit {
  ignore(self)
  self.gold -= gold
}

///|
fn init {
  hduSingleton.set_HDU_by_level(1)
}
