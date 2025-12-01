///|
pub(all) struct SlotMachineNeutralElement {
  mut position : @Point.NeutralElementPoint
  mut health : Double
  mut neutralElement_type : NeutralElementType
  mut max_health : Double
}

///|
pub fn SlotMachineNeutralElement::new(
  x? : Double = 0,
  y? : Double = 0,
  health? : Double = 100,
) -> SlotMachineNeutralElement {
  SlotMachineNeutralElement::{
    position: @Point.NeutralElementPoint::new(x~, y~),
    health,
    neutralElement_type: SlotMachineNeutralElement,
    max_health: health,
  }
}

///|
pub impl NeutralElement for SlotMachineNeutralElement with take_damage(
  self : SlotMachineNeutralElement,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl NeutralElement for SlotMachineNeutralElement with max_health(
  self : SlotMachineNeutralElement,
) -> Double {
  self.max_health
}

///|
pub impl NeutralElement for SlotMachineNeutralElement with health(
  self : SlotMachineNeutralElement,
) -> Double {
  self.health
}

///|
pub impl NeutralElement for SlotMachineNeutralElement with position(
  self : SlotMachineNeutralElement,
) -> @Point.NeutralElementPoint {
  self.position
}

///|
pub impl NeutralElement for SlotMachineNeutralElement with neutralElement_type(
  self : SlotMachineNeutralElement,
) -> NeutralElementType {
  self.neutralElement_type
}
