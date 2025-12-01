///|
pub(all) struct ConveyorBeltNeutralElement {
  mut position : @Point.NeutralElementPoint
  mut health : Double
  mut neutralElement_type : NeutralElementType
  mut max_health : Double
  mut path : @Point.PathPoint
  mut dir_ : Bool
}

///|
pub fn ConveyorBeltNeutralElement::new(
  x? : Double = 0,
  y? : Double = 0,
  health? : Double = 100,
) -> ConveyorBeltNeutralElement {
  ConveyorBeltNeutralElement::{
    position: @Point.NeutralElementPoint::new(x~, y~),
    health,
    neutralElement_type: ConveyorBeltNeutralElement,
    max_health: health,
    path: { x: -1, y: -1, is_jump_point: false },
    dir_: true,
  }
}

///|
pub impl NeutralElement for ConveyorBeltNeutralElement with take_damage(
  self : ConveyorBeltNeutralElement,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl NeutralElement for ConveyorBeltNeutralElement with max_health(
  self : ConveyorBeltNeutralElement,
) -> Double {
  self.max_health
}

///|
pub impl NeutralElement for ConveyorBeltNeutralElement with health(
  self : ConveyorBeltNeutralElement,
) -> Double {
  self.health
}

///|
pub impl NeutralElement for ConveyorBeltNeutralElement with position(
  self : ConveyorBeltNeutralElement,
) -> @Point.NeutralElementPoint {
  self.position
}

///|
pub impl NeutralElement for ConveyorBeltNeutralElement with neutralElement_type(
  self : ConveyorBeltNeutralElement,
) -> NeutralElementType {
  self.neutralElement_type
}
