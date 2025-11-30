///|
pub(all) struct TreasureChestNeutralElement {
  mut position : @Point.NeutralElementPoint
  mut health : Double
  mut neutralElement_type : NeutralElementType
  mut max_health : Double
}

///|
pub fn TreasureChestNeutralElement::new(
  x? : Double = 0,
  y? : Double = 0,
  health? : Double = 100,
) -> TreasureChestNeutralElement {
  TreasureChestNeutralElement::{
    position: @Point.NeutralElementPoint::new(x~, y~),
    health,
    neutralElement_type: TreasureChestNeutralElement,
    max_health: health,
  }
}

///|
pub impl NeutralElement for TreasureChestNeutralElement with take_damage(
  self : TreasureChestNeutralElement,
  damage : Double,
) -> Unit {
  self.health -= damage
}

///|
pub impl NeutralElement for TreasureChestNeutralElement with max_health(
  self : TreasureChestNeutralElement,
) -> Double {
  self.max_health
}

///|
pub impl NeutralElement for TreasureChestNeutralElement with health(
  self : TreasureChestNeutralElement,
) -> Double {
  self.health
}

///|
pub impl NeutralElement for TreasureChestNeutralElement with position(
  self : TreasureChestNeutralElement,
) -> @Point.NeutralElementPoint {
  self.position
}

///|
pub impl NeutralElement for TreasureChestNeutralElement with neutralElement_type(
  self : TreasureChestNeutralElement,
) -> NeutralElementType {
  self.neutralElement_type
}
