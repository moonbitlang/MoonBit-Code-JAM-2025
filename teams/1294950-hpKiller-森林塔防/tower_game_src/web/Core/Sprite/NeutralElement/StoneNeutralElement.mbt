///|
pub(all) struct StoneNeutralElement {
  mut position : @Point.NeutralElementPoint
  mut health : Double
  mut neutralElement_type : NeutralElementType
  mut max_health : Double
}

///|
pub fn StoneNeutralElement::new(
  x? : Double = 0,
  y? : Double = 0,
  health? : Double = 100,
) -> StoneNeutralElement {
  StoneNeutralElement::{
    position: @Point.NeutralElementPoint::new(x~, y~),
    health,
    neutralElement_type: StoneNeutralElement,
    max_health: health,
  }
}

///|
pub impl NeutralElement for StoneNeutralElement with take_damage(
  self : StoneNeutralElement,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl NeutralElement for StoneNeutralElement with max_health(
  self : StoneNeutralElement,
) -> Double {
  self.max_health
}

///|
pub impl NeutralElement for StoneNeutralElement with health(
  self : StoneNeutralElement,
) -> Double {
  self.health
}

///|
pub impl NeutralElement for StoneNeutralElement with position(
  self : StoneNeutralElement,
) -> @Point.NeutralElementPoint {
  self.position
}

///|
pub impl NeutralElement for StoneNeutralElement with neutralElement_type(
  self : StoneNeutralElement,
) -> NeutralElementType {
  self.neutralElement_type
}
