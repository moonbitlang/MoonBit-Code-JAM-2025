///|
pub extern "js" fn getP5Instance(
  drawww : (&P5JS) -> Unit,
  width? : Double = 400,
  height? : Double = 400,
) -> &P5JS =
  #| (drawww, width, height) => {
  #|   a = new p5((p)=>{
  #|  p.setup = function() {
  #|    p.createCanvas(width, height);
  #|  }
  #|  p.draw = function() {drawww(p)}
  #|})
  #|return a
  #|}

///|
extern "js" fn P5Instance::getCanvasWidth_(self : P5Instance) -> Double =
  #| (self) => self.width

///|
extern "js" fn P5Instance::getCanvasHeight_(self : P5Instance) -> Double =
  #| (self) => self.height
