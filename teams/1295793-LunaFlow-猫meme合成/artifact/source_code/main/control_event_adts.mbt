///|
enum MoveState {
  Left
  Right
  Stop
}

///|
trait SigNum {
  signum(Self) -> Double
}

///|
impl SigNum for MoveState with signum(state) {
  match state {
    Left => -1.0
    Right => 1.0
    Stop => 0.0
  }
}

///|
enum Trigger {
  Pressed
  KeepPressed
  NotPressed
}
