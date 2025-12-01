///|
pub(all) struct EnergyLightNeutralElement {
  mut position : @Point.NeutralElementPoint
  mut health : Double
  mut neutralElement_type : NeutralElementType
  mut max_health : Double
}

///|
pub fn EnergyLightNeutralElement::new(
  x? : Double = 0,
  y? : Double = 0,
  health? : Double = 100,
) -> EnergyLightNeutralElement {
  EnergyLightNeutralElement::{
    position: @Point.NeutralElementPoint::new(x~, y~),
    health,
    neutralElement_type: EnergyLightNeutralElement,
    max_health: health,
  }
}

///|
pub impl NeutralElement for EnergyLightNeutralElement with take_damage(
  self : EnergyLightNeutralElement,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl NeutralElement for EnergyLightNeutralElement with max_health(
  self : EnergyLightNeutralElement,
) -> Double {
  self.max_health
}

///|
pub impl NeutralElement for EnergyLightNeutralElement with health(
  self : EnergyLightNeutralElement,
) -> Double {
  self.health
}

///|
pub impl NeutralElement for EnergyLightNeutralElement with position(
  self : EnergyLightNeutralElement,
) -> @Point.NeutralElementPoint {
  self.position
}

///|
pub impl NeutralElement for EnergyLightNeutralElement with neutralElement_type(
  self : EnergyLightNeutralElement,
) -> NeutralElementType {
  self.neutralElement_type
}
