///|
pub(open) trait NeutralElement {
  position(Self) -> @Point.NeutralElementPoint
  can_move(Self) -> Bool = _
  neutralElement_type(Self) -> NeutralElementType
  health(Self) -> Double
  max_health(Self) -> Double
  take_damage(Self, damage : Double) -> Unit
}

///|
impl NeutralElement with can_move(_self) -> Bool {
  false
}
