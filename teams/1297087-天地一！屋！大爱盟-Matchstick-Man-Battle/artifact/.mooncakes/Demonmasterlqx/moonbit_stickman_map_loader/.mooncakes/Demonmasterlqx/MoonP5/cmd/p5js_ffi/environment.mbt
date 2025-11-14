///|
/// https://p5js.org/reference/p5/millis/
/// Returns the number of milliseconds since starting the program.
pub extern "js" fn P5Instance::millis_(self : P5Instance) -> Double =
  #| (self) => self.millis()
