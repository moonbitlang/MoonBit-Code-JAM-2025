///|
pub(all) struct WeedNeutralElement {
  mut position : @Point.NeutralElementPoint
  mut health : Double
  mut neutralElement_type : NeutralElementType
  mut max_health : Double
}

///|
pub fn WeedNeutralElement::new(
  x? : Double = 0,
  y? : Double = 0,
  health? : Double = 100,
) -> WeedNeutralElement {
  WeedNeutralElement::{
    position: @Point.NeutralElementPoint::new(x~, y~),
    health,
    neutralElement_type: WeedNeutralElement,
    max_health: health,
  }
}

///|
pub impl NeutralElement for WeedNeutralElement with take_damage(
  self : WeedNeutralElement,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl NeutralElement for WeedNeutralElement with max_health(
  self : WeedNeutralElement,
) -> Double {
  self.max_health
}

///|
pub impl NeutralElement for WeedNeutralElement with health(
  self : WeedNeutralElement,
) -> Double {
  self.health
}

///|
pub impl NeutralElement for WeedNeutralElement with position(
  self : WeedNeutralElement,
) -> @Point.NeutralElementPoint {
  self.position
}

///|
pub impl NeutralElement for WeedNeutralElement with neutralElement_type(
  self : WeedNeutralElement,
) -> NeutralElementType {
  self.neutralElement_type
}
