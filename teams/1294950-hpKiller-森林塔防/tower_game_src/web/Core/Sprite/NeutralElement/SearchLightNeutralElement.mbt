///|
pub(all) struct SearchLightNeutralElement {
  mut position : @Point.NeutralElementPoint
  mut health : Double
  mut neutralElement_type : NeutralElementType
  mut max_health : Double
}

///|
pub fn SearchLightNeutralElement::new(
  x? : Double = 0,
  y? : Double = 0,
  health? : Double = 100,
) -> SearchLightNeutralElement {
  SearchLightNeutralElement::{
    position: @Point.NeutralElementPoint::new(x~, y~),
    health,
    neutralElement_type: SearchLightNeutralElement,
    max_health: health,
  }
}

///|
pub impl NeutralElement for SearchLightNeutralElement with take_damage(
  self : SearchLightNeutralElement,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl NeutralElement for SearchLightNeutralElement with max_health(
  self : SearchLightNeutralElement,
) -> Double {
  self.max_health
}

///|
pub impl NeutralElement for SearchLightNeutralElement with health(
  self : SearchLightNeutralElement,
) -> Double {
  self.health
}

///|
pub impl NeutralElement for SearchLightNeutralElement with position(
  self : SearchLightNeutralElement,
) -> @Point.NeutralElementPoint {
  self.position
}

///|
pub impl NeutralElement for SearchLightNeutralElement with neutralElement_type(
  self : SearchLightNeutralElement,
) -> NeutralElementType {
  self.neutralElement_type
}
